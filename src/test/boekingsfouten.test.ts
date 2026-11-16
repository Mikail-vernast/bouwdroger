// @vitest-environment node
/**
 * Elke geweigerde boeking laat een spoor na (zie `bookingEvents.ts`).
 *
 * Aanleiding 16-11-2026: klanten "konden niet boeken" en nergens stond waar ze
 * vastliepen. Deze tests houden vast dat:
 * - een weigering in de checkout als event naar het portaal gaat, mét pakket en
 *   toestellen maar zónder persoonsgegevens;
 * - een verloren boeking ook in Slack komt, hoogstens één keer per kwartier;
 * - dezelfde weigering van dezelfde bezoeker de tabel niet volschrijft;
 * - de publieke route `/api/booking-event` enkel wizardcodes aanneemt.
 *
 * Node-omgeving om dezelfde reden als `slack.test.ts`: jsdom levert een eigen
 * `AbortSignal` dat Node's fetch weigert.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const postToSlack = vi.fn(async (_message: Record<string, unknown>) => ({ ok: true as const }));

vi.mock("../lib/slack.js", () => ({
  postToSlack: (message: Record<string, unknown>) => postToSlack(message),
  logSlackFailure: vi.fn(),
  notifyAvailabilityFailure: vi.fn(async () => {}),
}));

vi.mock("../lib/mail.js", () => ({
  alertAvailabilityFailure: vi.fn(async () => {}),
}));

vi.mock("stripe", () => ({
  default: class {
    checkout = {
      sessions: {
        create: async () => {
          throw new Error("mag in deze test niet bereikt worden");
        },
        retrieve: async () => ({}),
        expire: async () => ({}),
      },
    };
  },
}));

const { recordBookingEvent, redact, toRow } = await import("../lib/bookingEvents.js");
const { POST: checkout } = await import("../../api/checkout.js");
const { POST: bookingEvent } = await import("../../api/booking-event.js");

const fetchMock = vi.fn<typeof fetch>();
let ip = 0;

function post(url: string, body: unknown, from = `10.9.0.${++ip}`): Request {
  return new Request(url, {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": from },
    body: JSON.stringify(body),
  });
}

const flush = () => new Promise((resolve) => setTimeout(resolve, 0));

/** De events die naar het portaal vertrokken, als geparste body's. */
function sentEvents(): Array<Record<string, unknown>> {
  return fetchMock.mock.calls
    .map(([, init]) => JSON.parse(String(init?.body ?? "{}")) as Record<string, unknown>)
    .filter((body) => body.action === "event")
    .map((body) => body.event as Record<string, unknown>);
}

function inDays(n: number): string {
  return new Date(Date.now() + n * 86_400_000).toISOString().slice(0, 10);
}

beforeEach(() => {
  process.env.VERNAST_WEBHOOK_URL = "https://x.supabase.co/functions/v1/bouwdroger-order-webhook";
  process.env.VERNAST_WEBHOOK_SECRET = "geheim";
  process.env.STRIPE_SECRET_KEY = "sk_test_x";
  process.env.STRIPE_PUBLISHABLE_KEY = "pk_test_x";
  vi.stubGlobal("fetch", fetchMock);
  vi.spyOn(console, "error").mockImplementation(() => {});
  vi.spyOn(console, "warn").mockImplementation(() => {});
});

afterEach(() => {
  fetchMock.mockReset();
  postToSlack.mockClear();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("redact", () => {
  it("haalt e-mailadressen en telefoonnummers uit vrije tekst", () => {
    expect(redact("Invalid email address: jan.peeters@voorbeeld.be")).toBe("Invalid email address: [e-mail]");
    expect(redact("bel 0470 12 34 56 of +32 470 12 34 56")).toBe("bel [nummer] of [nummer]");
  });

  it("laat datums en bedragen staan", () => {
    expect(redact("start 2026-11-17, 21 dagen, HTTP 409")).toBe("start 2026-11-17, 21 dagen, HTTP 409");
  });
});

describe("toRow", () => {
  it("kent geen velden voor persoonsgegevens en begrenst de rest", () => {
    const row = toRow({
      route: "checkout",
      code: "stripe_fout",
      status: 502,
      pkg: "x".repeat(500),
      start: "geen datum",
      days: 21,
      items: Array.from({ length: 40 }, () => ({ device_key: "small" as const, qty: 1 })),
      detail: "klant@voorbeeld.be weigerde",
    });
    expect(Object.keys(row).sort()).toEqual(
      ["blocked_count", "code", "days", "detail", "http_status", "items", "package", "route", "start_date"].sort(),
    );
    expect(String(row.package)).toHaveLength(200);
    expect(row.start_date).toBeNull();
    expect(row.items).toHaveLength(20);
    expect(row.detail).toBe("[e-mail] weigerde");
  });
});

describe("recordBookingEvent", () => {
  it("stuurt het event naar het portaal met het gedeelde secret", async () => {
    fetchMock.mockResolvedValue(new Response(JSON.stringify({ ok: true }), { status: 200 }));
    recordBookingEvent({ route: "checkout", code: "geen_email", status: 400, dedupeKey: "a1" });
    await flush();

    const [url, init] = fetchMock.mock.calls[0];
    expect(String(url)).toBe("https://x.supabase.co/functions/v1/bouwdroger-availability");
    expect((init?.headers as Record<string, string>)["x-webhook-secret"]).toBe("geheim");
    expect(sentEvents()[0]).toMatchObject({ route: "checkout", code: "geen_email", http_status: 400 });
  });

  it("logt dezelfde weigering van dezelfde bezoeker maar één keer per minuut", async () => {
    fetchMock.mockResolvedValue(new Response(JSON.stringify({ ok: true }), { status: 200 }));
    for (let i = 0; i < 5; i++) {
      recordBookingEvent({ route: "checkout", code: "te_veel_aanvragen", status: 429, dedupeKey: "bot" });
    }
    await flush();
    expect(sentEvents()).toHaveLength(1);
  });

  it("meldt een verloren boeking in Slack, één keer per kwartier", async () => {
    fetchMock.mockResolvedValue(new Response(JSON.stringify({ ok: true }), { status: 200 }));
    recordBookingEvent({ route: "wizard", code: "wizard_geen_vrije_datum", dedupeKey: "s1", blocked: 60 });
    recordBookingEvent({ route: "wizard", code: "wizard_geen_vrije_datum", dedupeKey: "s2", blocked: 60 });
    await flush();
    expect(sentEvents()).toHaveLength(2);
    expect(postToSlack).toHaveBeenCalledTimes(1);
  });

  it("laat de browser het budget van de checkouts niet opmaken", async () => {
    fetchMock.mockResolvedValue(new Response(JSON.stringify({ ok: true }), { status: 200 }));
    for (let i = 0; i < 130; i++) {
      recordBookingEvent({ route: "wizard", code: "wizard_datum_verschoven", dedupeKey: `bot-${i}` });
    }
    recordBookingEvent({ route: "checkout", code: "datum_vol", status: 409, dedupeKey: "echte-klant" });
    await flush();
    const events = sentEvents();
    expect(events.filter((e) => e.route === "wizard")).toHaveLength(120);
    expect(events.some((e) => e.route === "checkout" && e.code === "datum_vol")).toBe(true);
  });

  it("stuurt een validatiefout niet naar Slack", async () => {
    fetchMock.mockResolvedValue(new Response(JSON.stringify({ ok: true }), { status: 200 }));
    recordBookingEvent({ route: "checkout", code: "btw_ontbreekt", status: 400, dedupeKey: "v1" });
    await flush();
    expect(postToSlack).not.toHaveBeenCalled();
  });
});

describe("/api/checkout", () => {
  it("logt een volle datum als datum_vol, met toestellen en zonder klantgegevens", async () => {
    fetchMock.mockImplementation(async (_url, init) => {
      const body = JSON.parse(String(init?.body ?? "{}")) as Record<string, unknown>;
      if (body.action === "event") return new Response(JSON.stringify({ ok: true }), { status: 200 });
      return new Response(
        JSON.stringify({ capacity: {}, peak: {}, blocked_start_dates: [body.start], available: false }),
        { status: 200 },
      );
    });

    const start = inDays(3);
    const response = await checkout(
      post("https://site.test/api/checkout", {
        config: { size: "140", wat: "chape", cd: "6", pd: "2", heat: "0" },
        options: {},
        customer: { name: "Jan Peeters", mail: "jan@voorbeeld.be", tel: "0470123456", addr: "Straat 1" },
        delivery: { date: start, slot: "10:00 – 12:00" },
      }),
    );
    await flush();

    expect(response.status).toBe(409);
    const [event] = sentEvents();
    expect(event).toMatchObject({ route: "checkout", code: "datum_vol", http_status: 409, start_date: start });
    expect((event.items as unknown[]).length).toBeGreaterThan(0);
    expect(JSON.stringify(event)).not.toMatch(/jan@voorbeeld|Peeters|0470123456|Straat 1/);
    expect(postToSlack).toHaveBeenCalledTimes(1);
  });

  it("logt een ontbrekend e-mailadres als geen_email", async () => {
    fetchMock.mockResolvedValue(new Response(JSON.stringify({ ok: true }), { status: 200 }));
    const response = await checkout(
      post("https://site.test/api/checkout", {
        config: { size: "100", wat: "beide", heat: "0" },
        customer: { mail: "geen-adres" },
        delivery: { date: inDays(2) },
      }),
    );
    await flush();
    expect(response.status).toBe(400);
    expect(sentEvents()[0]).toMatchObject({ code: "geen_email", http_status: 400 });
  });
});

describe("/api/booking-event", () => {
  it("weigert een code die geen wizardcode is", async () => {
    const response = await bookingEvent(post("https://site.test/api/booking-event", { code: "datum_vol" }));
    expect(response.status).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("leidt pakket en toestellen zelf af uit de configuratie", async () => {
    fetchMock.mockResolvedValue(new Response(JSON.stringify({ ok: true }), { status: 200 }));
    const response = await bookingEvent(
      post("https://site.test/api/booking-event", {
        code: "wizard_geen_vrije_datum",
        config: { size: "300", wat: "beide", heat: "1" },
        start: inDays(1),
        blocked: 60,
        package: "<script>vrije tekst</script>",
      }),
    );
    await flush();
    expect(response.status).toBe(204);
    const [event] = sentEvents();
    expect(event).toMatchObject({ route: "wizard", code: "wizard_geen_vrije_datum", blocked_count: 60 });
    expect(String(event.package)).not.toContain("script");
    expect((event.items as Array<{ device_key?: string }>).some((it) => it.device_key === "kachel")).toBe(true);
  });

  it("neemt een afhaalselectie aan", async () => {
    fetchMock.mockResolvedValue(new Response(JSON.stringify({ ok: true }), { status: 200 }));
    const response = await bookingEvent(
      post("https://site.test/api/booking-event", {
        code: "wizard_beschikbaarheid_onbereikbaar",
        lines: "ttk350:2",
        days: 7,
      }),
    );
    await flush();
    expect(response.status).toBe(204);
    expect(sentEvents()[0]).toMatchObject({ route: "afhaal-wizard", days: 7 });
  });
});

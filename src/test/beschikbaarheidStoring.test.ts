// @vitest-environment node
/**
 * Wat er gebeurt als het portaal niet antwoordt.
 *
 * Twee vangnetten die tot 20-10-2026 ontbraken:
 *
 * - De harde beschikbaarheidscontrole liet een boeking door als Vernast
 *   onbereikbaar was. Bij een storing boekte iedereen dan blind, ook op een dag
 *   die al vol stond. Nu weigert de route met een 503 en slaat ze alarm — maar
 *   hoogstens één keer per kwartier, anders verdrinkt het kanaal tijdens een
 *   storing.
 * - Een verlenging die het portaal niet haalde bleef een `console.error`. Nu
 *   krijgt ze hetzelfde alarm als een order: mail én Slack.
 *
 * Node-omgeving om dezelfde reden als `slack.test.ts`: jsdom levert een eigen
 * `AbortSignal` dat Node's fetch weigert.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { isoDate } from "../lib/verhuur.js";

const alertAvailabilityFailure = vi.fn(async (_context: string, _reason: string) => {});
const notifyAvailabilityFailure = vi.fn(async (_context: string, _reason: string) => {});
const alertExtensionFailure = vi.fn(async (_reason: unknown, _payload: unknown) => {});
const notifyExtensionFailure = vi.fn(async (_reason: unknown, _payload: unknown) => {});
const sendExtensionRequest = vi.fn(async (_request: unknown) => {});
const alertSyncFailure = vi.fn(async () => {});

vi.mock("../lib/mail.js", () => ({
  alertAvailabilityFailure: (context: string, reason: string) =>
    alertAvailabilityFailure(context, reason),
  alertExtensionFailure: (reason: unknown, payload: unknown) =>
    alertExtensionFailure(reason, payload),
  sendExtensionRequest: (request: unknown) => sendExtensionRequest(request),
  alertSyncFailure: () => alertSyncFailure(),
  sendPickupMails: vi.fn(async () => {}),
  sendRequestMails: vi.fn(async () => {}),
}));

vi.mock("../lib/slack.js", () => ({
  notifyAvailabilityFailure: (context: string, reason: string) =>
    notifyAvailabilityFailure(context, reason),
  notifyExtensionFailure: (reason: unknown, payload: unknown) =>
    notifyExtensionFailure(reason, payload),
}));

/** De betaalde boeking waarop de verlenging slaat, zoals Stripe ze teruggeeft. */
const SESSION = {
  id: "cs_test_verlenging",
  payment_status: "paid",
  client_reference_id: "VRN-2026-ABCD2345",
  customer_email: "klant@voorbeeld.be",
  metadata: {
    referentie: "VRN-2026-ABCD2345",
    klant: "Jan Peeters",
    huur_eind: "2026-11-01",
  },
};

vi.mock("stripe", () => ({
  default: class {
    checkout = { sessions: { retrieve: async () => SESSION } };
  },
}));

const { availabilityVerdict, alarmAvailabilityFailure, CHECK_UNAVAILABLE_CODE } = await import(
  "../lib/availability.js"
);
const { POST: order } = await import("../../api/order.js");
const { POST: extension } = await import("../../api/extension.js");

const fetchMock = vi.fn<typeof fetch>();
let ip = 0;

function post(url: string, body: unknown): Request {
  ip += 1;
  return new Request(url, {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": `10.1.0.${ip}` },
    body: JSON.stringify(body),
  });
}

/** Een afhaalreservatie van één toestel, morgen af te halen. */
function afhaalBody() {
  return {
    kind: "afhaal",
    data: {
      lines: "ttk170:1",
      days: 7,
      date: isoDate(new Date(Date.now() + 86_400_000)),
      name: "Jan Peeters",
      email: "jan@voorbeeld.be",
      phone: "0470 12 34 56",
      customer_type: "particulier",
    },
  };
}

/** Laat de microtaken van `keepAlive` uitlopen, zodat het alarm vertrokken is. */
const flush = () => new Promise((resolve) => setTimeout(resolve, 0));

beforeEach(() => {
  process.env.VERNAST_WEBHOOK_URL = "https://x.supabase.co/functions/v1/bouwdroger-order-webhook";
  process.env.VERNAST_WEBHOOK_SECRET = "geheim";
  process.env.STRIPE_SECRET_KEY = "sk_test_x";
  vi.stubGlobal("fetch", fetchMock);
  vi.spyOn(console, "error").mockImplementation(() => {});
  vi.spyOn(console, "warn").mockImplementation(() => {});
});

afterEach(() => {
  fetchMock.mockReset();
  for (const fn of [
    alertAvailabilityFailure,
    notifyAvailabilityFailure,
    alertExtensionFailure,
    notifyExtensionFailure,
    sendExtensionRequest,
    alertSyncFailure,
  ]) {
    fn.mockClear();
  }
  vi.useRealTimers();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("availabilityVerdict", () => {
  const answer = (available: boolean | null) => ({
    ok: true,
    answer: { capacity: {}, peak: {}, blocked_start_dates: [], available },
  });

  it("leest een antwoord van het portaal als vrij of vol", () => {
    expect(availabilityVerdict(answer(true))).toBe("vrij");
    expect(availabilityVerdict(answer(false))).toBe("vol");
  });

  it("noemt een mislukte oproep onbekend, niet vrij", () => {
    expect(availabilityVerdict({ ok: false, reason: "This operation was aborted" })).toBe(
      "onbekend",
    );
  });

  it("noemt een antwoord zonder ja of nee ook onbekend", () => {
    expect(availabilityVerdict(answer(null))).toBe("onbekend");
    expect(availabilityVerdict({ ok: true })).toBe("onbekend");
  });
});

describe("alarm bij een mislukte beschikbaarheidscontrole", () => {
  it("meldt een storing één keer per kwartier, langs mail en Slack", async () => {
    vi.useFakeTimers({ toFake: ["Date"] });
    vi.setSystemTime(new Date("2026-10-20T09:00:00Z"));

    alarmAvailabilityFailure("checkout VRN-1", { ok: false, reason: "HTTP 503: down" });
    alarmAvailabilityFailure("checkout VRN-2", { ok: false, reason: "HTTP 503: down" });
    alarmAvailabilityFailure("checkout VRN-3", { ok: false, reason: "HTTP 503: down" });
    await flush();

    expect(alertAvailabilityFailure).toHaveBeenCalledTimes(1);
    expect(alertAvailabilityFailure).toHaveBeenCalledWith("checkout VRN-1", "HTTP 503: down");
    expect(notifyAvailabilityFailure).toHaveBeenCalledTimes(1);

    vi.setSystemTime(new Date("2026-10-20T09:16:00Z"));
    alarmAvailabilityFailure("checkout VRN-4", { ok: false, reason: "HTTP 503: down" });
    await flush();

    expect(alertAvailabilityFailure).toHaveBeenCalledTimes(2);
    expect(notifyAvailabilityFailure).toHaveBeenCalledTimes(2);
  });
});

describe("api/order — afhaling terwijl het portaal plat ligt", () => {
  it("weigert de reservatie met een 503 en stuurt niets door", async () => {
    fetchMock.mockImplementation(async () => new Response("boom", { status: 500 }));

    const response = await order(post("https://example.test/api/order", afhaalBody()));
    const body = (await response.json()) as { error?: string; code?: string };

    expect(response.status).toBe(503);
    expect(body.code).toBe(CHECK_UNAVAILABLE_CODE);
    expect(body.error).toContain("We kunnen de beschikbaarheid nu niet controleren");
    // Alleen de twee pogingen op de beschikbaarheidsfunctie; geen order-push.
    expect(fetchMock.mock.calls.every(([url]) => String(url).endsWith("/bouwdroger-availability"))).toBe(
      true,
    );
    expect(alertSyncFailure).not.toHaveBeenCalled();
  });

  it("laat een vrije dag gewoon door naar het portaal", async () => {
    fetchMock.mockImplementation(async (url) =>
      String(url).endsWith("/bouwdroger-availability")
        ? Response.json({ capacity: {}, peak: {}, blocked_start_dates: [], available: true })
        : Response.json({ ok: true }),
    );

    const response = await order(post("https://example.test/api/order", afhaalBody()));

    expect(response.status).toBe(200);
    expect(fetchMock.mock.calls.some(([url]) => String(url).endsWith("/bouwdroger-order-webhook"))).toBe(
      true,
    );
  });
});

describe("api/extension — verlenging die het portaal niet haalt", () => {
  const body = {
    sessionId: SESSION.id,
    extraDagen: 7,
    telefoon: "0470 12 34 56",
    opmerking: "De chape is nog niet droog.",
  };

  it("slaat alarm langs mail en Slack, met de volledige aanvraag", async () => {
    fetchMock.mockImplementation(async () => new Response("kapot", { status: 500 }));

    const response = await extension(post("https://example.test/api/extension", body));

    expect(response.status).toBe(200);
    expect(alertExtensionFailure).toHaveBeenCalledTimes(1);
    expect(notifyExtensionFailure).toHaveBeenCalledTimes(1);

    const [reason, payload] = alertExtensionFailure.mock.calls[0];
    expect(String(reason)).toContain("HTTP 500");
    expect(payload).toMatchObject({
      stripe_session_id: SESSION.id,
      order_number: "VRN-2026-ABCD2345",
      customer_phone: "0470 12 34 56",
      extra_days: 7,
      requested_end_date: "2026-11-08",
      customer_note: "De chape is nog niet droog.",
    });
  });

  it("blijft stil als de push lukt", async () => {
    fetchMock.mockImplementation(async () => Response.json({ ok: true }));

    const response = await extension(post("https://example.test/api/extension", body));

    expect(response.status).toBe(200);
    expect(alertExtensionFailure).not.toHaveBeenCalled();
    expect(notifyExtensionFailure).not.toHaveBeenCalled();
  });
});

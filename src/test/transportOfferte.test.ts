/**
 * @vitest-environment node
 *
 * De transportofferte (`api/transport-offerte.ts`): een volledig
 * geconfigureerde boeking op een adres boven 200 km, waar geen vast
 * transporttarief voor bestaat.
 *
 * Wat hier vastligt: dat de aanvraag met de volledige samenstelling in het
 * portaal landt, dat de huurprijs daar sérver-side herrekend is in plaats van
 * overgenomen uit de browser, en dat een adres dat gewoon online kan afrekenen
 * hier niet binnenkomt — dat zou de bezoeker een werkdag kosten en ons een
 * order.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const sendQuestionFallback = vi.fn(async (_vraag: unknown) => true);

vi.mock("../lib/mail.js", () => ({
  sendQuestionFallback: (vraag: unknown) => sendQuestionFallback(vraag),
}));

const { POST } = await import("../../api/transport-offerte.js");

const fetchMock = vi.fn<typeof fetch>();
let ip = 0;

function request(body: unknown): Request {
  ip += 1;
  return new Request("https://example.test/api/transport-offerte", {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": `10.1.0.${ip}` },
    body: JSON.stringify(body),
  });
}

function offerte(overrides: Record<string, unknown> = {}) {
  return {
    config: { size: "180", wat: "chape", pd: "2", cd: "6", heat: "true" },
    options: { cover: "comfort", payment: "online" },
    customer: {
      name: "Jan Peeters",
      mail: "jan@voorbeeld.be",
      tel: "0470 12 34 56",
      addr: "Teststraat 1",
      post: "6700",
      city: "Aarlen",
      land: "BE",
      type: "part",
    },
    delivery: { date: "2026-12-01", slot: "10:00 – 12:00" },
    page_url: "https://vernast-bouwdrogers.be/verhuur/boeking",
    website: "",
    ...overrides,
  };
}

function sentPayload(): Record<string, unknown> {
  const init = fetchMock.mock.calls[0][1] as RequestInit;
  return JSON.parse(String(init.body)) as Record<string, unknown>;
}

beforeEach(() => {
  process.env.VERNAST_WEBHOOK_URL = "https://x.supabase.co/functions/v1/bouwdroger-order-webhook";
  process.env.VERNAST_WEBHOOK_SECRET = "geheim";
  fetchMock.mockImplementation(async () => Response.json({ ok: true, id: "req-9" }));
  vi.stubGlobal("fetch", fetchMock);
  vi.spyOn(console, "error").mockImplementation(() => {});
  vi.spyOn(console, "warn").mockImplementation(() => {});
});

afterEach(() => {
  fetchMock.mockReset();
  sendQuestionFallback.mockReset();
  sendQuestionFallback.mockImplementation(async () => true);
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("api/transport-offerte", () => {
  it("stuurt de volledige samenstelling naar het portaal", async () => {
    const response = await POST(request(offerte()));

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });

    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe("https://x.supabase.co/functions/v1/bouwdroger-request-webhook");
    expect((init.headers as Record<string, string>)["x-webhook-secret"]).toBe("geheim");

    const payload = sentPayload();
    expect(payload.source).toBe("transport");
    expect(payload.first_name).toBe("Jan");
    expect(payload.last_name).toBe("Peeters");
    expect(payload.postal_code).toBe("6700");

    const bericht = String(payload.message);
    // Alles wat de collega anders zou moeten navragen staat erin.
    expect(bericht).toContain("zone 7");
    expect(bericht).toContain("200 – 300 km");
    expect(bericht).toContain("Gewenste leverdatum: 2026-12-01");
    expect(bericht).toContain("Transport: NOG TE BEPALEN");
    expect(bericht).toMatch(/Huurprijs incl\. btw: € \d/);
    expect(sendQuestionFallback).not.toHaveBeenCalled();
  });

  it("rekent de huurprijs zelf uit en gelooft de browser niet", async () => {
    /*
      Het bedrag dat meegestuurd wordt telt nergens mee — net als in
      `api/checkout.ts`. Anders staat er een huurprijs in het portaal die
      niemand ooit heeft aangeboden, en belt een collega daarover terug.
    */
    await POST(request(offerte({ options: { cover: "comfort", payment: "online" }, totaal: 1 })));
    const bericht = String(sentPayload().message);
    const match = bericht.match(/Huurprijs excl\. btw: € ([\d.]+)/);
    expect(match).not.toBeNull();
    expect(Number(match![1])).toBeGreaterThan(500);
  });

  it("weigert een adres dat gewoon online kan afrekenen", async () => {
    const response = await POST(
      request(offerte({ customer: { ...offerte().customer, post: "2630", city: "Aartselaar" } })),
    );
    expect(response.status).toBe(400);
    expect(await response.json()).toMatchObject({
      error: expect.stringContaining("meteen online boeken"),
    });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("vraagt een geldig e-mailadres en een naam", async () => {
    const zonderMail = await POST(
      request(offerte({ customer: { ...offerte().customer, mail: "geen-adres" } })),
    );
    expect(zonderMail.status).toBe(400);

    const zonderNaam = await POST(
      request(offerte({ customer: { ...offerte().customer, name: "" } })),
    );
    expect(zonderNaam.status).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("stuurt niets door voor een bot die het verborgen veld invult", async () => {
    const response = await POST(request(offerte({ website: "http://spam" })));
    expect(response.status).toBe(200);
    expect(fetchMock).not.toHaveBeenCalled();
    expect(sendQuestionFallback).not.toHaveBeenCalled();
  });

  it("mailt de aanvraag naar het team als het portaal ze niet aanneemt", async () => {
    fetchMock.mockImplementation(async () => Response.json({ error: "stuk" }, { status: 500 }));

    const response = await POST(request(offerte()));

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true, via: "mail" });
    expect(sendQuestionFallback).toHaveBeenCalledTimes(1);
    const vraag = sendQuestionFallback.mock.calls[0][0] as Record<string, unknown>;
    expect(String(vraag.onderwerp)).toContain("Transportofferte zone 7");
    expect(String(vraag.bericht)).toContain("Transport: NOG TE BEPALEN");
  });

  it("zegt het eerlijk wanneer ook de vangnet-mail niet vertrekt", async () => {
    fetchMock.mockImplementation(async () => Response.json({ error: "stuk" }, { status: 500 }));
    sendQuestionFallback.mockImplementation(async () => false);

    const response = await POST(request(offerte()));

    expect(response.status).toBe(502);
    expect(String(((await response.json()) as { error?: string }).error)).toContain("03 689 90 65");
  });
});

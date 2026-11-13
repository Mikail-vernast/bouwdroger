/**
 * @vitest-environment node
 *
 * Het boekingsformulier van /ozonbehandeling (`api/ozon.ts`).
 *
 * Twee dingen liggen hier vast die makkelijk stil kapot gaan:
 *
 *  1. De bron blijft `vraag`. De webhook aan de Vernast-kant toetst `source`
 *     aan een vaste lijst én `bouwdroger_requests` heeft een CHECK-constraint op
 *     dezelfde vier waarden. Zet iemand hier ooit `"ozon"` neer, dan antwoordt
 *     het portaal met 400 "Onbekende bron" en loopt élke boeking stil via het
 *     mail-vangnet. Niets breekt zichtbaar — ze staan alleen nergens meer in het
 *     portaal.
 *
 *  2. Termijn, ruimtes en "al ontschimmeld?" staan in het bericht. Die velden
 *     hebben geen kolom ginder, en wat de webhook niet kent laat ze vallen. Ze
 *     als los veld meesturen zou betekenen dat de technieker ze nooit ziet.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const sendQuestionFallback = vi.fn(async (_vraag: unknown) => true);

vi.mock("../lib/mail.js", () => ({
  sendQuestionFallback: (vraag: unknown) => sendQuestionFallback(vraag),
}));

const { POST: ozon } = await import("../../api/ozon.js");

const fetchMock = vi.fn<typeof fetch>();
let ip = 0;

function request(body: unknown): Request {
  ip += 1;
  return new Request("https://example.test/api/ozon", {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": `10.1.0.${ip}` },
    body: JSON.stringify(body),
  });
}

function boeking(overrides: Record<string, unknown> = {}) {
  return {
    voornaam: "Els",
    achternaam: "Maes",
    email: "els@voorbeeld.be",
    telefoon: "0470 12 34 56",
    straat: "Dorpsstraat",
    nummer: "4",
    postcode: "2630",
    gemeente: "Aartselaar",
    situatie: "schimmel",
    termijn: "deze_week",
    ruimtes: "kelder 30 m², plafond 2,4 m",
    ontschimmeld: "ja",
    bericht: "Muffe geur blijft hangen na het drogen.",
    attachments: [],
    page_url: "https://vernast-bouwdrogers.be/ozonbehandeling",
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
});

afterEach(() => {
  fetchMock.mockReset();
  sendQuestionFallback.mockClear();
  sendQuestionFallback.mockImplementation(async () => true);
  vi.unstubAllGlobals();
});

describe("api/ozon", () => {
  it("stuurt de boeking naar de aanvraag-webhook, met het secret", async () => {
    const response = await ozon(request(boeking()));

    expect(response.status).toBe(200);
    expect(fetchMock).toHaveBeenCalledTimes(1);

    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toContain("/bouwdroger-request-webhook");
    expect((init.headers as Record<string, string>)["x-webhook-secret"]).toBe("geheim");
  });

  it("houdt de bron op `vraag`, het portaal kent geen bron `ozon`", async () => {
    await ozon(request(boeking()));

    expect(sentPayload().source).toBe("vraag");
  });

  it("zet de situatie in het onderwerp, zodat de pagina herkenbaar blijft", async () => {
    await ozon(request(boeking({ situatie: "geur" })));

    const payload = sentPayload();
    expect(payload.subject).toBe("Ozonbehandeling, Hardnekkige geur neutraliseren");
    expect(payload.page_url).toBe("https://vernast-bouwdrogers.be/ozonbehandeling");
  });

  it("valt terug op advies bij een onbekende of gesmokkelde situatie", async () => {
    await ozon(request(boeking({ situatie: "constructor" })));

    expect(sentPayload().subject).toBe("Ozonbehandeling, Advies over de aanpak");
  });

  it("neemt termijn, ruimtes en ontschimmeling in het bericht op", async () => {
    await ozon(request(boeking()));

    const bericht = String(sentPayload().message);
    expect(bericht).toContain("Gewenste termijn: Deze week");
    expect(bericht).toContain("Ruimtes / oppervlakte: kelder 30 m², plafond 2,4 m");
    expect(bericht).toContain("Al ontschimmeld: ja");
    expect(bericht).toContain("Muffe geur blijft hangen na het drogen.");
  });

  it("geeft het adres door, want de technieker komt ter plaatse", async () => {
    await ozon(request(boeking()));

    const payload = sentPayload();
    expect(payload.street).toBe("Dorpsstraat");
    expect(payload.house_number).toBe("4");
    expect(payload.postal_code).toBe("2630");
    expect(payload.city).toBe("Aartselaar");
  });

  it("vraagt om een geldig e-mailadres in plaats van een 400 uit de webhook", async () => {
    const response = await ozon(request(boeking({ email: "els@" })));

    expect(response.status).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("laat een ingevuld honeypot-veld stil wegvallen", async () => {
    const response = await ozon(request(boeking({ website: "https://spam.test" })));

    expect(response.status).toBe(200);
    expect(fetchMock).not.toHaveBeenCalled();
    expect(sendQuestionFallback).not.toHaveBeenCalled();
  });

  it("houdt alleen bijlagen over die uit onze eigen upload-route komen", async () => {
    await ozon(
      request(
        boeking({
          attachments: ["inbox/abc/foto.jpg", "../../etc/passwd", "private/ergens-anders.pdf"],
        }),
      ),
    );

    expect(sentPayload().attachments).toEqual(["inbox/abc/foto.jpg"]);
  });

  it("mailt de boeking naar het team als het portaal ze niet aanneemt", async () => {
    fetchMock.mockImplementation(async () => Response.json({ error: "stuk" }, { status: 500 }));

    const response = await ozon(request(boeking()));

    expect(response.status).toBe(200);
    expect(sendQuestionFallback).toHaveBeenCalledTimes(1);
    const mail = sendQuestionFallback.mock.calls[0][0] as { onderwerp: string; adres: string };
    expect(mail.onderwerp).toContain("Ozonbehandeling");
    expect(mail.adres).toBe("Dorpsstraat 4 2630 Aartselaar");
  });

  it("zegt het eerlijk wanneer ook de vangnet-mail niet vertrekt", async () => {
    fetchMock.mockImplementation(async () => Response.json({ error: "stuk" }, { status: 500 }));
    sendQuestionFallback.mockImplementation(async () => false);

    const response = await ozon(request(boeking()));

    expect(response.status).toBe(502);
    expect(((await response.json()) as { error?: string }).error).toContain("Verzenden lukte niet");
  });
});

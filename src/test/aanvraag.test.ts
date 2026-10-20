/**
 * @vitest-environment node
 *
 * De aanvraagformulieren (contact, klantenservice, levering — `api/aanvraag.ts`)
 * en het vraagformulier op de homepage (`api/vraag.ts`) landen sinds 15-10-2026
 * allebei in het bouwdrogers-portaal, via `bouwdroger-request-webhook`.
 *
 * Wat hier vastligt: dat de velden van de formulieren op het contract van die
 * webhook belanden, dat het secret meegaat, dat bots en ongeldige bronnen niets
 * doorsturen, en dat het mail-vangnet pas een fout laat zien als óók de mail
 * niet vertrekt.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const sendQuestionFallback = vi.fn(async (_vraag: unknown) => true);

vi.mock("../lib/mail.js", () => ({
  sendQuestionFallback: (vraag: unknown) => sendQuestionFallback(vraag),
}));

const { POST: aanvraag } = await import("../../api/aanvraag.js");
const { POST: vraag } = await import("../../api/vraag.js");

const fetchMock = vi.fn<typeof fetch>();
let ip = 0;

function request(body: unknown): Request {
  ip += 1;
  return new Request("https://example.test/api/aanvraag", {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": `10.0.0.${ip}` },
    body: JSON.stringify(body),
  });
}

function contactBody(overrides: Record<string, unknown> = {}) {
  return {
    source: "contact",
    voornaam: "Jan",
    achternaam: "Peeters",
    email: "jan@voorbeeld.be",
    telefoon: "0470 12 34 56",
    onderwerp: "Factuur of betaling",
    bericht: "Mijn factuur klopt niet.",
    page_url: "https://vernast-bouwdrogers.be/contact",
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
  fetchMock.mockImplementation(async () => Response.json({ ok: true, id: "req-1" }));
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

describe("api/aanvraag", () => {
  it("stuurt het formulier naar de request-webhook, met het secret", async () => {
    const response = await aanvraag(request(contactBody()));

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledTimes(1);

    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe("https://x.supabase.co/functions/v1/bouwdroger-request-webhook");
    expect((init.headers as Record<string, string>)["x-webhook-secret"]).toBe("geheim");
    expect(sentPayload()).toEqual({
      source: "contact",
      first_name: "Jan",
      last_name: "Peeters",
      email: "jan@voorbeeld.be",
      phone: "0470 12 34 56",
      subject: "Factuur of betaling",
      message: "Mijn factuur klopt niet.",
      page_url: "https://vernast-bouwdrogers.be/contact",
    });
    expect(sendQuestionFallback).not.toHaveBeenCalled();
  });

  it.each(["klantenservice", "levering"])("aanvaardt bron %s", async (source) => {
    const response = await aanvraag(request(contactBody({ source })));
    expect(response.status).toBe(200);
    expect(sentPayload().source).toBe(source);
  });

  it.each(["vraag", "admin", ""])("weigert bron %j", async (source) => {
    const response = await aanvraag(request(contactBody({ source })));
    expect(response.status).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("antwoordt een bot met succes en stuurt niets door", async () => {
    const response = await aanvraag(request(contactBody({ website: "http://spam.example" })));
    expect(response.status).toBe(200);
    expect(fetchMock).not.toHaveBeenCalled();
    expect(sendQuestionFallback).not.toHaveBeenCalled();
  });

  it("eist een geldig e-mailadres", async () => {
    const response = await aanvraag(request(contactBody({ email: "jan" })));
    expect(response.status).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("knipt te lange velden af", async () => {
    await aanvraag(request(contactBody({ bericht: "x".repeat(10_000) })));
    expect(String(sentPayload().message)).toHaveLength(4000);
  });

  it("valt terug op de mail wanneer het portaal weigert", async () => {
    fetchMock.mockImplementation(async () => new Response("kapot", { status: 400 }));

    const response = await aanvraag(request(contactBody()));

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true, via: "mail" });
    expect(sendQuestionFallback).toHaveBeenCalledTimes(1);
    const mail = sendQuestionFallback.mock.calls[0][0] as { onderwerp: string; reden: string };
    expect(mail.onderwerp).toContain("Contactpagina");
    expect(mail.reden).toContain("HTTP 400");
  });

  it("herhaalt een 429 niet, en meldt hem in de vangnet-mail", async () => {
    fetchMock.mockImplementation(
      async () => new Response(JSON.stringify({ error: "te veel", retry_after: 60 }), { status: 429 }),
    );

    const response = await aanvraag(request(contactBody()));

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(response.status).toBe(200);
    const mail = sendQuestionFallback.mock.calls[0][0] as { reden: string };
    expect(mail.reden).toContain("rate limit portaal");
  });

  it("toont pas een fout wanneer ook de mail niet vertrekt", async () => {
    fetchMock.mockImplementation(async () => new Response("", { status: 401 }));
    sendQuestionFallback.mockImplementation(async () => false);

    const response = await aanvraag(request(contactBody()));

    expect(response.status).toBe(502);
    expect(((await response.json()) as { error: string }).error).toContain("03 689 90 65");
  });

  it("valt terug op de mail wanneer de webhook-config ontbreekt", async () => {
    delete process.env.VERNAST_WEBHOOK_SECRET;

    const response = await aanvraag(request(contactBody()));

    expect(fetchMock).not.toHaveBeenCalled();
    expect(response.status).toBe(200);
    expect(sendQuestionFallback).toHaveBeenCalledTimes(1);
  });
});

describe("api/vraag", () => {
  function vraagBody(overrides: Record<string, unknown> = {}) {
    return {
      voornaam: "An",
      achternaam: "Janssens",
      email: "an@voorbeeld.be",
      telefoon: "",
      straat: "Dorpsstraat",
      nummer: "4",
      postcode: "2630",
      gemeente: "Aartselaar",
      onderwerp: "waterschade",
      bericht: "Kelder onder water.",
      attachments: ["inbox/a.jpg", "elders/b.jpg", "inbox/c.pdf"],
      page_url: "https://vernast-bouwdrogers.be/",
      website: "",
      ...overrides,
    };
  }

  it("stuurt de vraag als bron 'vraag' naar de request-webhook, met adres en bijlagen", async () => {
    const response = await vraag(request(vraagBody()));

    expect(response.status).toBe(200);
    const [url] = fetchMock.mock.calls[0] as [string];
    expect(url).toMatch(/\/bouwdroger-request-webhook$/);
    expect(sentPayload()).toEqual({
      source: "vraag",
      first_name: "An",
      last_name: "Janssens",
      email: "an@voorbeeld.be",
      phone: null,
      subject: "Waterschade",
      message: "Kelder onder water.",
      street: "Dorpsstraat",
      house_number: "4",
      postal_code: "2630",
      city: "Aartselaar",
      attachments: ["inbox/a.jpg", "inbox/c.pdf"],
      page_url: "https://vernast-bouwdrogers.be/",
    });
  });

  it("vertaalt een onbekende of geërfde onderwerpsleutel naar 'Andere vraag'", async () => {
    await vraag(request(vraagBody({ onderwerp: "constructor" })));
    expect(sentPayload().subject).toBe("Andere vraag");
  });

  it("houdt het mail-vangnet, met de bijlagen erin", async () => {
    fetchMock.mockImplementation(async () => new Response("", { status: 400 }));

    const response = await vraag(request(vraagBody()));

    expect(await response.json()).toEqual({ ok: true, via: "mail" });
    const mail = sendQuestionFallback.mock.calls[0][0] as { bericht: string; adres: string };
    expect(mail.bericht).toContain("inbox/a.jpg");
    expect(mail.adres).toBe("Dorpsstraat 4 2630 Aartselaar");
  });
});

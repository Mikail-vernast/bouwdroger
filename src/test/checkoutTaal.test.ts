// @vitest-environment node
/**
 * Stripe in de taal van de klant.
 *
 * Een Franse boeking krijgt een Frans betaalformulier (`locale: "fr"`) en komt
 * na het betalen terug op de Franse pagina — niet op `/verhuur/boeking`, waar
 * hij een bevestiging krijgt in een taal die hij niet koos. Engels net zo
 * (`locale: "en"`, terug naar `/en/rental/…`). Alles wat geen letterlijk "fr"
 * of "en" is, blijft Nederlands: zo kan een rare waarde in de request nooit
 * een niet-bestaande pagina als terugkeeradres opleveren.
 *
 * En wat de taal níet mag: het bedrag veranderen.
 *
 * Node-omgeving om dezelfde reden als `slack.test.ts`.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const sessionsCreate = vi.fn();
const sessionsRetrieve = vi.fn();

vi.mock("stripe", () => ({
  default: class {
    checkout = {
      sessions: {
        create: (params: unknown) => sessionsCreate(params),
        retrieve: (id: string, params?: unknown) => sessionsRetrieve(id, params),
        expire: vi.fn(async () => ({})),
        update: vi.fn(async () => ({})),
      },
    };
  },
}));

vi.mock("../lib/slack.js", () => ({
  postToSlack: vi.fn(async () => ({ ok: true })),
  logSlackFailure: vi.fn(),
  notifyAvailabilityFailure: vi.fn(async () => {}),
  notifyExtensionFailure: vi.fn(async () => {}),
}));

vi.mock("../lib/mail.js", () => ({
  alertAvailabilityFailure: vi.fn(async () => {}),
  alertExtensionFailure: vi.fn(async () => {}),
  sendExtensionRequest: vi.fn(async () => {}),
}));

/*
  Beschikbaarheid altijd vrij, behalve waar een test het anders zegt. De echte
  module praat met Vernast; die controle heeft eigen tests.
*/
const verdict = vi.fn(() => "vrij");
vi.mock("../lib/availability.js", () => ({
  alarmAvailabilityFailure: vi.fn(),
  availabilityVerdict: () => verdict(),
  CHECK_UNAVAILABLE_CODE: "controle_onbereikbaar",
  CHECK_UNAVAILABLE_ERROR:
    "We kunnen de beschikbaarheid nu niet controleren. Probeer het over enkele minuten opnieuw of bel ons op 03 689 90 65.",
  checkOne: vi.fn(async () => ({ ok: true, answer: { blocked_start_dates: [] } })),
  holdForSession: vi.fn(async () => ({ ok: true })),
  logAvailabilityFailure: vi.fn(),
}));

vi.mock("../lib/bookingEvents.js", () => ({ recordBookingEvent: vi.fn() }));

const { POST: checkout } = await import("../../api/checkout.js");
const { POST: afhaalCheckout } = await import("../../api/afhaal-checkout.js");
const { POST: saldo } = await import("../../api/saldo.js");
const { POST: saldoOrder } = await import("../../api/saldo-order.js");
const { POST: extension } = await import("../../api/extension.js");
const { betaalTaal, betaalPad, foutmelding } = await import("../lib/betaalTaal.js");

const ORIGIN = "https://vernast-bouwdrogers.be";
let ip = 0;

function post(pad: string, body: unknown, headers: Record<string, string> = {}): Request {
  ip += 1;
  return new Request(`${ORIGIN}${pad}`, {
    method: "POST",
    headers: { "content-type": "application/json", "cf-connecting-ip": `10.7.${ip >> 8}.${ip & 255}`, ...headers },
    body: JSON.stringify(body),
  });
}

function inDagen(n: number): string {
  return new Date(Date.now() + n * 86_400_000).toISOString().slice(0, 10);
}

const boeking = (taal?: unknown) => ({
  config: { size: "100", heat: "0" },
  options: {},
  customer: {
    name: "Jean Dupont",
    mail: "jean@exemple.be",
    tel: "0470 00 00 00",
    type: "part",
    addr: "Rue de la Station 1",
    land: "BE",
    post: "1300",
    city: "Wavre",
  },
  delivery: { date: inDagen(5), slot: "10:00 – 12:00" },
  ...(taal === undefined ? {} : { taal }),
});

const afhaling = (taal?: unknown) => ({
  data: {
    lines: "",
    days: 7,
    date: inDagen(5),
    slot: "10:00 – 12:00",
    customer_type: "particulier",
    name: "Jean Dupont",
    phone: "0470 00 00 00",
    email: "jean@exemple.be",
    address: "Rue de la Station 1, 1300 Wavre",
  },
  payment: "online",
  ...(taal === undefined ? {} : { taal }),
});

/** De parameters van de laatste sessie die naar Stripe ging. */
interface Sessie {
  locale: string;
  return_url: string;
  success_url: string;
  cancel_url: string;
  line_items: unknown;
  metadata: Record<string, string>;
}

function laatsteSessie(): Sessie {
  const calls = sessionsCreate.mock.calls;
  return calls[calls.length - 1][0] as Sessie;
}

beforeEach(() => {
  process.env.STRIPE_SECRET_KEY = "sk_test_x";
  process.env.STRIPE_PUBLISHABLE_KEY = "pk_test_x";
  process.env.VERNAST_WEBHOOK_SECRET = "gedeeld-geheim";
  process.env.VERNAST_WEBHOOK_URL = "https://x.supabase.co/functions/v1/bouwdroger-order-webhook";
  vi.spyOn(console, "error").mockImplementation(() => {});
  vi.spyOn(console, "warn").mockImplementation(() => {});
  sessionsCreate.mockResolvedValue({
    id: "cs_test_taal",
    client_secret: "cs_test_taal_secret",
    url: "https://checkout.stripe.com/c/pay/cs_test_taal",
    expires_at: 1_800_000_000,
  });
  verdict.mockReturnValue("vrij");
});

afterEach(() => {
  sessionsCreate.mockReset();
  sessionsRetrieve.mockReset();
  vi.restoreAllMocks();
});

describe("betaalTaal", () => {
  it("maakt alleen van de letterlijke teksten fr en en een Franse of Engelse betaling", () => {
    expect(betaalTaal("fr")).toBe("fr");
    expect(betaalTaal("en")).toBe("en");
    for (const raar of ["FR", "EN", "en-GB", "en ", "de", "", " fr", null, undefined, 1, ["fr"], ["en"], { taal: "en" }]) {
      expect(betaalTaal(raar)).toBe("nl");
    }
  });

  it("vertaalt de terugkeerpaden en laat ze in het Nederlands ongemoeid", () => {
    expect(betaalPad("/verhuur/boeking", "fr")).toBe("/fr/location/reservation");
    expect(betaalPad("/verhuur/afhalen", "fr")).toBe("/fr/location/enlevement");
    expect(betaalPad("/verhuur/saldo", "fr")).toBe("/fr/location/solde");
    expect(betaalPad("/verhuur/saldo/betaald", "fr")).toBe("/fr/location/solde/paye");
    expect(betaalPad("/verhuur/saldo/niet-betaald", "fr")).toBe("/fr/location/solde/non-paye");
    expect(betaalPad("/verhuur/boeking", "nl")).toBe("/verhuur/boeking");
  });

  it("vertaalt de terugkeerpaden naar de Engelse pagina's", () => {
    expect(betaalPad("/verhuur/boeking", "en")).toBe("/en/rental/booking");
    expect(betaalPad("/verhuur/afhalen", "en")).toBe("/en/rental/collection");
    expect(betaalPad("/verhuur/saldo", "en")).toBe("/en/rental/balance");
    expect(betaalPad("/verhuur/saldo/betaald", "en")).toBe("/en/rental/balance/paid");
    expect(betaalPad("/verhuur/saldo/niet-betaald", "en")).toBe("/en/rental/balance/unpaid");
    expect(betaalPad("/verhuur/saldo?session_id=cs_x", "en")).toBe("/en/rental/balance?session_id=cs_x");
  });

  it("laat een Nederlandse foutmelding letterlijk staan en valt in het Frans nooit op leeg terug", () => {
    expect(foutmelding("Ongeldige sessie.", "nl")).toBe("Ongeldige sessie.");
    expect(foutmelding("Ongeldige sessie.", "fr")).toBe("Session non valable.");
    expect(foutmelding("Een tekst zonder vertaling.", "fr")).toBe("Een tekst zonder vertaling.");
    expect(foutmelding("Ongeldige sessie.", "en")).toBe("Invalid session.");
    expect(foutmelding("Een tekst zonder vertaling.", "en")).toBe("Een tekst zonder vertaling.");
  });
});

describe("POST /api/checkout", () => {
  it("geeft een Franse sessie locale fr, een Franse return-URL en taal in de metadata", async () => {
    const response = await checkout(post("/api/checkout", boeking("fr")));
    expect(response.status).toBe(200);

    const params = laatsteSessie();
    expect(params.locale).toBe("fr");
    expect(params.return_url.startsWith(`${ORIGIN}/fr/location/reservation?`)).toBe(true);
    expect(params.return_url).toContain("session_id={CHECKOUT_SESSION_ID}");
    expect(params.metadata.taal).toBe("fr");
  });

  it("valt bij een onbekende of ontbrekende taal terug op nl, met het oude terugkeeradres", async () => {
    for (const taal of [undefined, "EN", "en-GB", "FR", 42]) {
      await checkout(post("/api/checkout", boeking(taal)));
      const params = laatsteSessie();
      expect(params.locale).toBe("nl");
      expect(params.return_url.startsWith(`${ORIGIN}/verhuur/boeking?`)).toBe(true);
      expect(params.metadata.taal).toBe("nl");
    }
  });

  it("geeft een Engelse sessie locale en, een Engelse return-URL en taal in de metadata", async () => {
    const response = await checkout(post("/api/checkout", boeking("en")));
    expect(response.status).toBe(200);

    const params = laatsteSessie();
    expect(params.locale).toBe("en");
    expect(params.return_url.startsWith(`${ORIGIN}/en/rental/booking?`)).toBe(true);
    expect(params.return_url).toContain("session_id={CHECKOUT_SESSION_ID}");
    expect(params.metadata.taal).toBe("en");
  });

  it("rekent in elke taal exact hetzelfde bedrag en dezelfde metadata-bedragen af", async () => {
    await checkout(post("/api/checkout", boeking("nl")));
    const nl = laatsteSessie();
    for (const taal of ["fr", "en"]) {
      await checkout(post("/api/checkout", boeking(taal)));
      const ander = laatsteSessie();
      expect(ander.line_items).toEqual(nl.line_items);
      for (const sleutel of ["totaal", "korting", "btw", "totaal_incl_btw", "nu_betaald", "saldo_bij_levering", "betaalwijze"]) {
        expect(ander.metadata[sleutel]).toBe(nl.metadata[sleutel]);
      }
    }
  });

  it("geeft een volle dag in het Engels terug, met dezelfde code en status", async () => {
    verdict.mockReturnValue("vol");
    const response = await checkout(post("/api/checkout", boeking("en")));
    expect(response.status).toBe(409);
    const body = (await response.json()) as { error: string; code: string };
    expect(body.code).toBe("niet_beschikbaar");
    expect(body.error).toMatch(/already booked/);
  });

  it("geeft een volle dag in het Frans terug, met dezelfde code en status", async () => {
    verdict.mockReturnValue("vol");
    const response = await checkout(post("/api/checkout", boeking("fr")));
    expect(response.status).toBe(409);
    const body = (await response.json()) as { error: string; code: string };
    expect(body.code).toBe("niet_beschikbaar");
    expect(body.error).toMatch(/déjà planifiés/);
  });

  it("geeft een onbereikbare controle in het Frans terug, maar nog steeds als 503", async () => {
    verdict.mockReturnValue("onbekend");
    const response = await checkout(post("/api/checkout", boeking("fr")));
    expect(response.status).toBe(503);
    const body = (await response.json()) as { error: string; code: string };
    expect(body.code).toBe("controle_onbereikbaar");
    expect(body.error).toMatch(/vérifier la disponibilité/);
    expect(sessionsCreate).not.toHaveBeenCalled();
  });
});

describe("POST /api/afhaal-checkout", () => {
  it("zet een Franse weigering in het Frans, en laat de Nederlandse ongewijzigd", async () => {
    // Zonder toestellen: geweigerd vóór Stripe, wat de vertaling van de foutmelding toont.
    const fr = await afhaalCheckout(post("/api/afhaal-checkout", afhaling("fr")));
    expect(fr.status).toBe(400);
    expect(((await fr.json()) as { error: string }).error).toBe("Choisissez d'abord au moins un appareil.");

    const nl = await afhaalCheckout(post("/api/afhaal-checkout", afhaling()));
    expect(((await nl.json()) as { error: string }).error).toBe("Kies eerst minstens één toestel.");

    const en = await afhaalCheckout(post("/api/afhaal-checkout", afhaling("en")));
    expect(en.status).toBe(400);
    expect(((await en.json()) as { error: string }).error).toBe("Please choose at least one unit first.");
  });
});

describe("POST /api/saldo", () => {
  const boekingSessie = {
    id: "cs_test_boeking",
    client_reference_id: "VRN-2026-ABCD2345",
    payment_status: "paid",
    customer_email: "jean@exemple.be",
    metadata: {
      referentie: "VRN-2026-ABCD2345",
      pakket: "Pakket",
      totaal_incl_btw: "1210.00",
      nu_betaald: "150.00",
    },
  };

  it("stuurt een Franse saldobetaling terug naar /fr/location/solde, met locale fr", async () => {
    sessionsRetrieve.mockResolvedValue(boekingSessie);
    const response = await saldo(post("/api/saldo", { session_id: "cs_test_boeking", taal: "fr" }));
    expect(response.status).toBe(200);

    const params = laatsteSessie();
    expect(params.locale).toBe("fr");
    expect(params.return_url).toBe(
      `${ORIGIN}/fr/location/solde?session_id=cs_test_boeking&saldo_session={CHECKOUT_SESSION_ID}`,
    );
    expect(params.metadata.taal).toBe("fr");
    // De webhook herkent het saldo nog steeds aan deze sleutels.
    expect(params.metadata.type).toBe("saldo");
    expect(params.metadata.basis_sessie).toBe("cs_test_boeking");
  });

  it("stuurt een Engelse saldobetaling terug naar /en/rental/balance, met locale en en hetzelfde bedrag", async () => {
    sessionsRetrieve.mockResolvedValue(boekingSessie);
    await saldo(post("/api/saldo", { session_id: "cs_test_boeking", taal: "nl" }));
    const nl = laatsteSessie();
    sessionsRetrieve.mockResolvedValue(boekingSessie);
    const response = await saldo(post("/api/saldo", { session_id: "cs_test_boeking", taal: "en" }));
    expect(response.status).toBe(200);

    const params = laatsteSessie();
    expect(params.locale).toBe("en");
    expect(params.return_url).toBe(
      `${ORIGIN}/en/rental/balance?session_id=cs_test_boeking&saldo_session={CHECKOUT_SESSION_ID}`,
    );
    expect(params.metadata.taal).toBe("en");
    expect(params.metadata.type).toBe("saldo");
    expect(params.line_items).toEqual(nl.line_items);
  });

  it("blijft zonder taal Nederlands", async () => {
    sessionsRetrieve.mockResolvedValue(boekingSessie);
    await saldo(post("/api/saldo", { session_id: "cs_test_boeking", taal: "es" }));
    const params = laatsteSessie();
    expect(params.locale).toBe("nl");
    expect(params.return_url.startsWith(`${ORIGIN}/verhuur/saldo?`)).toBe(true);
  });
});

describe("POST /api/saldo-order", () => {
  const geldig = (taal?: unknown) => ({
    order_id: "3f1c2a8e-5b7d-4e2f-9a1b-0c4d6e8f2a3b",
    order_number: "BD-2026-0142",
    amount_due: 187.5,
    email: null,
    ...(taal === undefined ? {} : { taal }),
  });
  const secret = { "x-webhook-secret": "gedeeld-geheim" };

  it("stuurt een Franse klant naar de Franse bedank- en annuleerpagina", async () => {
    const response = await saldoOrder(post("/api/saldo-order", geldig("fr"), secret));
    expect(response.status).toBe(200);
    const params = laatsteSessie();
    expect(params.locale).toBe("fr");
    expect(params.success_url).toBe(`${ORIGIN}/fr/location/solde/paye`);
    expect(params.cancel_url).toBe(`${ORIGIN}/fr/location/solde/non-paye`);
  });

  it("stuurt een Engelse klant naar de Engelse bedank- en annuleerpagina", async () => {
    const response = await saldoOrder(post("/api/saldo-order", geldig("en"), secret));
    expect(response.status).toBe(200);
    const params = laatsteSessie();
    expect(params.locale).toBe("en");
    expect(params.success_url).toBe(`${ORIGIN}/en/rental/balance/paid`);
    expect(params.cancel_url).toBe(`${ORIGIN}/en/rental/balance/unpaid`);
  });

  it("weigert een onbekende taal niet, maar valt terug op nl", async () => {
    const response = await saldoOrder(post("/api/saldo-order", geldig("xx"), secret));
    expect(response.status).toBe(200);
    const params = laatsteSessie();
    expect(params.locale).toBe("nl");
    expect(params.success_url).toBe(`${ORIGIN}/verhuur/saldo/betaald`);
  });
});

describe("POST /api/extension", () => {
  it("geeft een weigering in de taal van de pagina", async () => {
    const fr = await extension(post("/api/extension", { sessionId: "cs_test_x", extraDagen: 0, taal: "fr" }));
    expect(fr.status).toBe(400);
    expect(((await fr.json()) as { error: string }).error).toBe(
      "Choisissez combien de temps en plus vous souhaitez garder les appareils.",
    );

    const nl = await extension(post("/api/extension", { sessionId: "cs_test_x", extraDagen: 0 }));
    expect(((await nl.json()) as { error: string }).error).toBe("Kies hoeveel langer u de toestellen wilt houden.");

    const en = await extension(post("/api/extension", { sessionId: "cs_test_x", extraDagen: 0, taal: "en" }));
    expect(((await en.json()) as { error: string }).error).toBe(
      "Please choose how much longer you want to keep the units.",
    );
  });
});

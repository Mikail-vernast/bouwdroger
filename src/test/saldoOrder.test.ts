// @vitest-environment node
/**
 * Het saldo van een order die alleen in het portaal bestaat.
 *
 * Twee stukken die samen moeten kloppen: `api/saldo-order.ts` maakt op vraag
 * van het portaal een betaallink, en de Stripe-webhook meldt de betaling terug
 * aan `bouwdroger-saldo-paid`. Gaat het eerste fout, dan betaalt een klant een
 * verkeerd bedrag of maakt iedereen die de URL kent betaallinks aan; gaat het
 * tweede fout, dan staat het geld op Stripe en de order in het portaal open.
 *
 * Node-omgeving om dezelfde reden als `slack.test.ts`: jsdom levert een eigen
 * `AbortSignal` dat Node's fetch weigert.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const sessionsCreate = vi.fn();
const sessionsRetrieve = vi.fn();
const constructEvent = vi.fn();
const alertSyncFailure = vi.fn(async (..._args: unknown[]) => {});
const notifySyncFailure = vi.fn(async (..._args: unknown[]) => {});

vi.mock("stripe", () => ({
  default: class {
    checkout = {
      sessions: {
        create: (params: unknown) => sessionsCreate(params),
        retrieve: (id: string, params?: unknown) => sessionsRetrieve(id, params),
        update: vi.fn(async () => ({})),
      },
    };
    webhooks = { constructEventAsync: (...args: unknown[]) => constructEvent(...args) };
  },
}));

vi.mock("../lib/mail.js", () => ({
  alertSyncFailure: (...args: unknown[]) => alertSyncFailure(...args),
  sendPaidBookingMails: vi.fn(),
  sendPickupMails: vi.fn(),
}));

vi.mock("../lib/slack.js", () => ({
  notifyNewOrder: vi.fn(),
  notifySyncFailure: (...args: unknown[]) => notifySyncFailure(...args),
}));

vi.mock("../lib/availability.js", () => ({
  logAvailabilityFailure: () => {},
  releaseHold: vi.fn(async () => ({ ok: true })),
}));

// Eén poging: de herhalingen met wachttijd hebben een eigen test (`retry.test.ts`).
vi.mock("../lib/retry.js", () => ({
  withRetry: (attempt: () => Promise<unknown>) => attempt(),
}));

const { POST: saldoOrder } = await import("../../api/saldo-order.js");
const { POST: webhook } = await import("../../api/stripe-webhook.js");

const SECRET = "gedeeld-geheim";
const ORDER_ID = "3f1c2a8e-5b7d-4e2f-9a1b-0c4d6e8f2a3b";
const fetchMock = vi.fn<typeof fetch>();
let ip = 0;

function aanvraag(body: unknown, secret: string | null = SECRET): Request {
  ip += 1;
  return new Request("https://vernast-bouwdrogers.be/api/saldo-order", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "cf-connecting-ip": `10.9.0.${ip}`,
      ...(secret === null ? {} : { "x-webhook-secret": secret }),
    },
    body: JSON.stringify(body),
  });
}

const geldig = (overrides: Record<string, unknown> = {}) => ({
  order_id: ORDER_ID,
  order_number: "BD-2026-0142",
  amount_due: 187.5,
  email: "klant@voorbeeld.be",
  ...overrides,
});

beforeEach(() => {
  process.env.STRIPE_SECRET_KEY = "sk_test_x";
  process.env.STRIPE_WEBHOOK_SECRET = "whsec_x";
  process.env.VERNAST_WEBHOOK_SECRET = SECRET;
  process.env.VERNAST_WEBHOOK_URL = "https://x.supabase.co/functions/v1/bouwdroger-order-webhook";
  vi.stubGlobal("fetch", fetchMock);
  vi.spyOn(console, "error").mockImplementation(() => {});
  sessionsCreate.mockResolvedValue({
    id: "cs_test_saldo_order",
    url: "https://checkout.stripe.com/c/pay/cs_test_saldo_order",
    expires_at: 1_800_000_000,
  });
});

afterEach(() => {
  for (const fn of [sessionsCreate, sessionsRetrieve, constructEvent, alertSyncFailure, notifySyncFailure, fetchMock]) {
    fn.mockReset();
  }
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("POST /api/saldo-order", () => {
  it("weigert zonder secret, met hetzelfde antwoord als bij een fout secret", async () => {
    const zonder = await saldoOrder(aanvraag(geldig(), null));
    const fout = await saldoOrder(aanvraag(geldig(), "raden"));

    expect(zonder.status).toBe(401);
    expect(fout.status).toBe(401);
    expect(await zonder.json()).toEqual({ error: "Unauthorized" });
    expect(await fout.json()).toEqual({ error: "Unauthorized" });
    expect(sessionsCreate).not.toHaveBeenCalled();
  });

  it("geeft een 500 als het secret op deze omgeving niet gezet is", async () => {
    delete process.env.VERNAST_WEBHOOK_SECRET;
    const response = await saldoOrder(aanvraag(geldig()));
    expect(response.status).toBe(500);
    expect(sessionsCreate).not.toHaveBeenCalled();
  });

  it.each([
    ["een bedrag van 0", { amount_due: 0 }],
    ["een negatief bedrag", { amount_due: -10 }],
    ["meer dan 10.000 euro", { amount_due: 10_000.01 }],
    ["drie decimalen", { amount_due: 12.345 }],
    ["een bedrag als tekst", { amount_due: "187.50" }],
    ["een order-ID dat geen uuid is", { order_id: "142" }],
    ["geen ordernummer", { order_number: "" }],
    ["een ordernummer van meer dan 100 tekens", { order_number: "x".repeat(101) }],
    ["een ongeldig e-mailadres", { email: "geen-adres" }],
  ])("weigert %s met een 400", async (_label, overrides) => {
    const response = await saldoOrder(aanvraag(geldig(overrides)));
    expect(response.status).toBe(400);
    expect(sessionsCreate).not.toHaveBeenCalled();
  });

  it("aanvaardt precies 10.000 euro en een bedrag met twee decimalen", async () => {
    expect((await saldoOrder(aanvraag(geldig({ amount_due: 10_000 })))).status).toBe(200);
    expect((await saldoOrder(aanvraag(geldig({ amount_due: 19.99 })))).status).toBe(200);
    expect(sessionsCreate.mock.calls[1][0].line_items[0].price_data.unit_amount).toBe(1999);
  });

  it("maakt een gehoste sessie met het bedrag in centen en de sleutels voor de webhook", async () => {
    const response = await saldoOrder(aanvraag(geldig()));

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      url: "https://checkout.stripe.com/c/pay/cs_test_saldo_order",
      session_id: "cs_test_saldo_order",
      expires_at: 1_800_000_000,
    });

    const params = sessionsCreate.mock.calls[0][0];
    const metadata = { type: "saldo_order", vernast_order_id: ORDER_ID, order_number: "BD-2026-0142" };

    // Gehost: de URL gaat als QR naar de telefoon van de klant.
    expect(params.ui_mode).toBeUndefined();
    expect(params.mode).toBe("payment");
    expect(params.locale).toBe("nl");
    // Geen vaste lijst: dan zou Bancontact afhangen van wat hier staat in plaats
    // van van de instellingen in het Stripe-dashboard.
    expect(params.payment_method_types).toBeUndefined();
    expect(params.customer_email).toBe("klant@voorbeeld.be");
    expect(params.client_reference_id).toBe("BD-2026-0142");
    expect(params.line_items).toEqual([
      {
        quantity: 1,
        price_data: {
          currency: "eur",
          unit_amount: 18750,
          product_data: { name: "Saldo huur — BD-2026-0142" },
        },
      },
    ]);
    expect(params.metadata).toEqual(metadata);
    expect(params.payment_intent_data).toEqual({ metadata });
    expect(params.success_url).toBe("https://vernast-bouwdrogers.be/verhuur/saldo/betaald");
    expect(params.cancel_url).toBe("https://vernast-bouwdrogers.be/verhuur/saldo/niet-betaald");

    const now = Math.floor(Date.now() / 1000);
    expect(params.expires_at).toBeGreaterThanOrEqual(now + 59 * 60);
    expect(params.expires_at).toBeLessThanOrEqual(now + 60 * 60);
  });

  it("laat customer_email weg zonder e-mailadres", async () => {
    await saldoOrder(aanvraag(geldig({ email: null })));
    expect(sessionsCreate.mock.calls[0][0]).not.toHaveProperty("customer_email");
  });

  it("houdt de reden van een Stripe-fout binnen", async () => {
    sessionsCreate.mockRejectedValue(new Error("No such price: sk_live_geheim"));
    const response = await saldoOrder(aanvraag(geldig()));

    expect(response.status).toBe(502);
    expect(JSON.stringify(await response.json())).not.toContain("sk_live");
  });
});

/** De saldosessie zoals ze in het webhook-event zit. */
function event(type: string, overrides: Record<string, unknown> = {}) {
  return {
    type,
    data: {
      object: {
        id: "cs_test_saldo_order",
        object: "checkout.session",
        amount_total: 18750,
        currency: "eur",
        payment_status: "paid",
        client_reference_id: "BD-2026-0142",
        customer_email: "klant@voorbeeld.be",
        metadata: { type: "saldo_order", vernast_order_id: ORDER_ID, order_number: "BD-2026-0142" },
        ...overrides,
      },
    },
  };
}

function stripeEvent(): Request {
  return new Request("https://vernast-bouwdrogers.be/api/stripe-webhook", {
    method: "POST",
    headers: { "stripe-signature": "t=1,v1=x" },
    body: "{}",
  });
}

describe("de webhook bij een saldo van een portaal-order", () => {
  beforeEach(() => {
    sessionsRetrieve.mockResolvedValue({
      id: "cs_test_saldo_order",
      payment_intent: {
        latest_charge: {
          created: 1_790_000_000,
          payment_method_details: { type: "bancontact" },
        },
      },
    });
  });

  it.each(["checkout.session.completed", "checkout.session.async_payment_succeeded"])(
    "meldt %s aan bouwdroger-saldo-paid",
    async (type) => {
      constructEvent.mockResolvedValue(event(type));
      fetchMock.mockResolvedValue(new Response("{}", { status: 200 }));

      const response = await webhook(stripeEvent());

      expect(response.status).toBe(200);
      expect(fetchMock).toHaveBeenCalledTimes(1);
      const [url, init] = fetchMock.mock.calls[0];
      expect(url).toBe("https://x.supabase.co/functions/v1/bouwdroger-saldo-paid");
      expect((init?.headers as Record<string, string>)["x-webhook-secret"]).toBe(SECRET);
      expect(JSON.parse(String(init?.body))).toEqual({
        order_id: ORDER_ID,
        stripe_session_id: "cs_test_saldo_order",
        amount: 187.5,
        payment_method: "bancontact",
        paid_at: new Date(1_790_000_000 * 1000).toISOString(),
      });
    },
  );

  it("valt niet weg op de afscherming voor webshopreferenties", async () => {
    // Een Vernast-ordernummer is geen `VRN-`-referentie; vóór deze tak gaf de
    // webhook daar een stille 200 op en bleef de order open.
    constructEvent.mockResolvedValue(event("checkout.session.completed", { client_reference_id: "142" }));
    fetchMock.mockResolvedValue(new Response("{}", { status: 200 }));

    await webhook(stripeEvent());
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("geeft een fout terug en slaat alarm als het portaal de melding niet aanneemt", async () => {
    constructEvent.mockResolvedValue(event("checkout.session.completed"));
    fetchMock.mockResolvedValue(new Response("stuk", { status: 503 }));

    const response = await webhook(stripeEvent());

    // Niet-2xx: dan biedt Stripe het event opnieuw aan, en het portaal is
    // idempotent op `stripe_session_id`.
    expect(response.status).toBeGreaterThanOrEqual(500);
    expect(alertSyncFailure).toHaveBeenCalledTimes(1);
    expect(notifySyncFailure).toHaveBeenCalledTimes(1);
  });

  it("doet niets zolang een Bancontact-betaling nog loopt", async () => {
    constructEvent.mockResolvedValue(event("checkout.session.completed", { payment_status: "unpaid" }));

    const response = await webhook(stripeEvent());

    expect(response.status).toBe(200);
    expect(fetchMock).not.toHaveBeenCalled();
    expect(alertSyncFailure).not.toHaveBeenCalled();
  });

  it("slaat alarm zonder herhaling als de sessie geen geldige order-ID draagt", async () => {
    constructEvent.mockResolvedValue(
      event("checkout.session.completed", {
        metadata: { type: "saldo_order", vernast_order_id: "", order_number: "BD-2026-0142" },
      }),
    );

    const response = await webhook(stripeEvent());

    expect(response.status).toBe(200);
    expect(fetchMock).not.toHaveBeenCalled();
    expect(alertSyncFailure).toHaveBeenCalledTimes(1);
  });
});

/**
 * Het saldo dat de klant bij de installatie afrekent.
 *
 * Dit is een tweede Stripe-sessie voor een boeking die al bestaat. Ging er hier
 * iets mis, dan zijn er twee manieren om het grondig fout te doen: een nieuwe
 * order in het portaal in plaats van de bestaande bijwerken, of een order die
 * als "volledig betaald" binnenkomt terwijl er nog geld openstaat — en dan
 * vertrekt er een factuur voor een bedrag dat nooit geïnd is.
 */
import type Stripe from "stripe";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const pushOrderToVernast = vi.fn();
const alertSyncFailure = vi.fn();
const notifySyncFailure = vi.fn();
const sessionsUpdate = vi.fn();

vi.mock("../lib/vernastSync.js", () => ({
  pushOrderToVernast: (payload: unknown) => pushOrderToVernast(payload),
  logSyncFailure: () => {},
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

const { deliverBalancePayment } = await import("../lib/vernastOrder.js");

/** De boeking waar dit saldo bij hoort: € 342,55 totaal, € 50 vooruitbetaald. */
const BASE_SESSION = "cs_test_boeking";

/**
 * De saldo-sessie zoals `api/saldo.ts` ze aanmaakt, teruggebracht tot wat
 * `deliverBalancePayment` leest.
 */
function balanceSession(overrides?: {
  amountTotal?: number;
  metadata?: Record<string, string>;
  paymentStatus?: string;
}): Stripe.Checkout.Session {
  return {
    id: "cs_test_saldo",
    object: "checkout.session",
    created: 1_754_832_770,
    currency: "eur",
    amount_total: overrides?.amountTotal ?? 29255,
    payment_status: overrides?.paymentStatus ?? "paid",
    client_reference_id: "VRN-2026-GYZF2HGN",
    metadata: {
      type: "saldo",
      basis_sessie: BASE_SESSION,
      referentie: "VRN-2026-GYZF2HGN",
      totaal_incl_btw: "342.55",
      voorschot_betaald: "50.00",
      ...overrides?.metadata,
    },
  } as unknown as Stripe.Checkout.Session;
}

/** Genoeg Stripe om de claim op de boeking te laten slagen. */
function stripeStub(): Stripe {
  return {
    checkout: {
      sessions: {
        retrieve: vi.fn(async (id: string) => ({ id, metadata: {} })),
        update: (id: string, params: unknown) => sessionsUpdate(id, params),
      },
    },
  } as unknown as Stripe;
}

describe("het saldo bij de installatie", () => {
  beforeEach(() => {
    pushOrderToVernast.mockResolvedValue({ ok: true });
    sessionsUpdate.mockResolvedValue({});
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("werkt de bestaande order bij in plaats van een nieuwe te maken", async () => {
    await deliverBalancePayment(stripeStub(), balanceSession(), "test");

    const payload = pushOrderToVernast.mock.calls[0][0];
    // De sleutel van de oorspronkelijke boeking, niet die van deze betaling:
    // de webhook aan de Vernast-kant is idempotent op `(source, external_id)`.
    expect(payload.external_id).toBe(BASE_SESSION);
    expect(payload.source).toBe("stripe");
  });

  it("telt het voorschot bij wat er nu geïnd is", async () => {
    await deliverBalancePayment(stripeStub(), balanceSession(), "test");

    const payload = pushOrderToVernast.mock.calls[0][0];
    expect(payload.amount_paid).toBe(342.55);
    expect(payload.balance_due).toBe(0);
    expect(payload.payment_status).toBe("paid");
  });

  it("laat de order onaangeroerd op de velden die deze betaling niet kent", async () => {
    await deliverBalancePayment(stripeStub(), balanceSession(), "test");

    const payload = pushOrderToVernast.mock.calls[0][0];
    // De werf, de datums en het pakket staan al in het portaal. Wat hier niet
    // meegaat, blijft daar staan — vandaar dat ze bewust ontbreken.
    expect(payload.rental_start_date).toBeUndefined();
    expect(payload.delivery_date).toBeUndefined();
    expect(payload.total_price).toBeUndefined();
  });

  it("houdt een saldo dat niet volstaat als openstaand bedrag", async () => {
    // De technieker liet een lager bedrag afrekenen; dan is de order niet klaar
    // en mag er in het portaal geen factuur voor het volle bedrag uitrollen.
    await deliverBalancePayment(stripeStub(), balanceSession({ amountTotal: 10000 }), "test");

    const payload = pushOrderToVernast.mock.calls[0][0];
    expect(payload.amount_paid).toBe(150);
    expect(payload.balance_due).toBe(192.55);
  });

  it("doet niets zonder de sessie van de oorspronkelijke boeking", async () => {
    const settled = await deliverBalancePayment(
      stripeStub(),
      balanceSession({ metadata: { basis_sessie: "" } }),
      "test",
    );

    expect(settled).toBe(false);
    expect(pushOrderToVernast).not.toHaveBeenCalled();
  });

  it("laat een betaling die nog loopt met rust", async () => {
    // Bancontact en iDEAL kunnen hier al passeren voor het geld er is.
    const settled = await deliverBalancePayment(
      stripeStub(),
      balanceSession({ paymentStatus: "unpaid" }),
      "test",
    );

    expect(settled).toBe(true);
    expect(pushOrderToVernast).not.toHaveBeenCalled();
  });

  it("meldt het langs beide kanalen als het portaal de betaling niet aanneemt", async () => {
    pushOrderToVernast.mockResolvedValue({ ok: false, reason: "portaal plat" });

    const settled = await deliverBalancePayment(stripeStub(), balanceSession(), "test");

    expect(settled).toBe(false);
    expect(alertSyncFailure).toHaveBeenCalled();
    expect(notifySyncFailure).toHaveBeenCalled();
  });
});

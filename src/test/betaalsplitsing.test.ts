/**
 * Wat het portaal over het geld te horen krijgt.
 *
 * Een order met "saldo bij levering" kwam daar binnen als `payment_status:
 * "paid"` met het volledige bedrag in `total_price` en verder niets — en het
 * portaal, dat niet beter wist, zette hem op "Volledig betaald". De klant had
 * € 60,50 orderbevestiging betaald en er stond nergens dat de chauffeur nog
 * ruim € 280 moest innen.
 */
import type Stripe from "stripe";
import { describe, expect, it } from "vitest";
import { sessionToVernast } from "../lib/vernastOrder.js";

/**
 * De sessie zoals `api/checkout.ts` ze aanmaakt, teruggebracht tot wat
 * `sessionToVernast` leest. De bedragen komen van een echte boeking: een
 * pakket van € 283,10 excl. btw, € 342,55 incl., waarvan € 60,50 nu.
 */
function session(overrides: {
  betaalwijze: "online" | "levering";
  amountTotal: number;
  metadata?: Record<string, string>;
}): Stripe.Checkout.Session {
  return {
    id: "cs_test_betaalsplitsing",
    object: "checkout.session",
    created: 1_754_832_770,
    currency: "eur",
    amount_total: overrides.amountTotal,
    payment_status: "paid",
    client_reference_id: "VRN-2026-GYZF2HGN",
    customer_email: "brent.ceulemans@icloud.com",
    metadata: {
      referentie: "VRN-2026-GYZF2HGN",
      betaalwijze: overrides.betaalwijze,
      totaal: "283.10",
      korting: "0.00",
      btw: "59.45",
      totaal_incl_btw: "342.55",
      nu_betaald: "60.50",
      saldo_bij_levering: "282.05",
      huurdagen: "14",
      ...overrides.metadata,
    },
  } as unknown as Stripe.Checkout.Session;
}

describe("wat het portaal over het geld te horen krijgt", () => {
  it("stuurt bij een voorschot het effectief ontvangen bedrag mee", () => {
    const payload = sessionToVernast(session({ betaalwijze: "levering", amountTotal: 6050 }));

    expect(payload.amount_paid).toBe(60.5);
    expect(payload.balance_due).toBe(282.05);
    expect(payload.payment_choice).toBe("levering");
  });

  it("noteert het ordertotaal inclusief btw — dat is wat de klant samen betaalt", () => {
    const payload = sessionToVernast(session({ betaalwijze: "levering", amountTotal: 6050 }));

    // Het portaal labelt dit veld "incl. btw" en trekt er het betaalde bedrag
    // van af. Stond hier het nettobedrag, dan kwam er een saldo uit dat de
    // chauffeur nooit gaat innen.
    expect(payload.total_price).toBe(342.55);
    expect(payload.total_price! - payload.amount_paid!).toBeCloseTo(payload.balance_due!, 2);
  });

  it("stuurt de btw apart mee zodat de bestelling als factuur leesbaar blijft", () => {
    const payload = sessionToVernast(session({ betaalwijze: "levering", amountTotal: 6050 }));

    expect(payload.vat_amount).toBe(59.45);
    // Netto + btw = het ordertotaal: dat is precies de opbouw die de klant in
    // zijn bevestigingsmail ziet staan.
    expect(payload.total_price! - payload.vat_amount!).toBeCloseTo(283.1, 2);
  });

  it("laat bij volledig online betalen niets openstaan", () => {
    const payload = sessionToVernast(
      session({
        betaalwijze: "online",
        amountTotal: 32543,
        metadata: {
          totaal: "268.95",
          korting: "14.15",
          btw: "56.48",
          totaal_incl_btw: "325.43",
          nu_betaald: "325.43",
          saldo_bij_levering: "0.00",
        },
      }),
    );

    expect(payload.amount_paid).toBe(325.43);
    expect(payload.balance_due).toBe(0);
    expect(payload.payment_choice).toBe("online");
    // Netto, zoals de catalogus en de bevestigingsmail de korting tonen.
    expect(payload.discount_amount).toBe(14.15);
  });

  it("meldt niets als betaald zolang de betaling nog loopt", () => {
    const pending = {
      ...session({ betaalwijze: "levering", amountTotal: 6050 }),
      payment_status: "unpaid",
    } as unknown as Stripe.Checkout.Session;
    const payload = sessionToVernast(pending);

    expect(payload.payment_status).toBe("unpaid");
    expect(payload.amount_paid).toBe(0);
    expect(payload.balance_due).toBe(342.55);
  });

  it("valt terug op de sessie wanneer een oude sessie de brutobedragen niet kent", () => {
    const oud = {
      id: "cs_test_oud",
      object: "checkout.session",
      created: 1_754_832_770,
      currency: "eur",
      amount_total: 6050,
      payment_status: "paid",
      client_reference_id: "VRN-2026-OUD00000",
      metadata: { referentie: "VRN-2026-OUD00000", totaal: "283.10" },
    } as unknown as Stripe.Checkout.Session;
    const payload = sessionToVernast(oud);

    // Zonder `totaal_incl_btw` blijft het nettobedrag het beste dat we hebben,
    // maar wat Stripe geïnd heeft weten we altijd.
    expect(payload.total_price).toBe(283.1);
    expect(payload.amount_paid).toBe(60.5);
    expect(payload.balance_due).toBe(222.6);
  });
});

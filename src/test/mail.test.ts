import { afterEach, describe, expect, it, vi } from "vitest";
import {
  formatAmount,
  formatDate,
  formatDevices,
  formatWeekday,
  orderParams,
  paidBookingParams,
  type PaidBookingFacts,
} from "../lib/mail.js";
import type { VernastOrderPayload } from "../lib/vernastSync.js";

const BASE: VernastOrderPayload = {
  source: "stripe",
  external_id: "cs_test_123",
  order_number: "VRN-2026-0412",
  first_name: "Jan",
  last_name: "Peeters",
  email: "jan@voorbeeld.be",
  package_tier: "Pakket Droog Snel 3",
  delivery_date: "2026-08-17",
  delivery_slot: "tussen 8u en 12u",
  rental_start_date: "2026-08-17",
  rental_end_date: "2026-08-21",
  duration_days: 5,
  order_lines: [
    { device_key: "small", qty: 2 },
    { device_key: "axiaal", qty: 4 },
  ],
  total_price: 289.26,
  currency: "EUR",
  payment_status: "paid",
  paid_at: "2026-08-10T09:12:00.000Z",
  online_payment_method: "bancontact",
};

const FACTS: PaidBookingFacts = {
  payload: BASE,
  // Stripe int het brutobedrag: 289,26 excl. btw + 60,74 btw.
  paidAmount: 350,
  paymentType: "full",
  discount: 15.22,
  street: "Ballaarstraat 99",
  zip: "2018",
  city: "Antwerpen",
  orderUrl: "https://bouwdrogerservice.be/verhuur/boeking?session_id=cs_test_123",
};

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("datums en bedragen", () => {
  it("schrijft een besteldatum met jaar uit", () => {
    expect(formatDate("2026-08-10")).toBe("10 augustus 2026");
  });

  it("zet er bij een leverdatum de weekdag bij en laat het jaar weg", () => {
    expect(formatWeekday("2026-08-17")).toBe("maandag 17 augustus");
  });

  it("houdt een kale datum in de Belgische tijdzone", () => {
    // Midden in de nacht UTC: zonder tijdzone zou dit 16 augustus worden.
    expect(formatWeekday("2026-08-17T00:30:00.000Z")).toBe("maandag 17 augustus");
  });

  it("laat een lege datum leeg in plaats van er 1970 van te maken", () => {
    expect(formatDate(null)).toBe("");
    expect(formatWeekday(undefined)).toBe("");
  });

  it("gebruikt de Belgische schrijfwijze voor bedragen, zonder euroteken", () => {
    expect(formatAmount(289.26)).toBe("289,26");
    expect(formatAmount(1289.2)).toBe("1.289,20");
    expect(formatAmount(350)).toBe("350,00");
  });
});

describe("toestellen samenvatten", () => {
  it("gebruikt de orderregels met leesbare namen", () => {
    expect(formatDevices(BASE)).toBe("2× Small Bouwdroger, 4× Axiaalventilator");
  });

  it("valt terug op de losse aantallen van het aanvraagformulier", () => {
    expect(
      formatDevices({
        source: "booking",
        external_id: "x",
        equipment_drogers: 2,
        equipment_ventilatoren: 1,
      }),
    ).toBe("2× bouwdroger, 1× ventilator");
  });
});

describe("sjabloon 198 — boeking betaald", () => {
  it("levert elke verplichte parameter ingevuld aan", () => {
    const params = paidBookingParams(FACTS);

    for (const key of [
      "payment_type",
      "customer_name",
      "order_number",
      "order_date",
      "order_url",
      "delivery_date",
      "delivery_time",
      "pickup_date",
      "pickup_time",
      "delivery_street",
      "delivery_zip",
      "delivery_city",
      "package_name",
      "items",
      "rental_days",
      "price_excl_vat",
      "vat_rate",
      "vat_amount",
      "price_incl_vat",
      "paid_amount",
      "payment_method",
      "call_notice",
      "cancellation_hours",
    ]) {
      expect(params[key], `${key} is leeg`).toBeTruthy();
    }
  });

  it("toont de huurprijs vóór korting, want het sjabloon trekt ze er zelf af", () => {
    const params = paidBookingParams(FACTS);
    // 289,26 na korting + 15,22 korting = 304,48 bruto.
    expect(params.price_excl_vat).toBe("304,48");
    expect(params.discount_amount).toBe("15,22");
  });

  it("rekent de btw over het bedrag ná korting", () => {
    const params = paidBookingParams(FACTS);
    expect(params.vat_rate).toBe(21);
    expect(params.vat_amount).toBe("60,74");
    expect(params.price_incl_vat).toBe("350,00");
  });

  it("stuurt bij volledige betaling een korting mee en geen saldo", () => {
    const params = paidBookingParams(FACTS);
    expect(params.payment_type).toBe("full");
    expect(params).toHaveProperty("discount_amount");
    expect(params).not.toHaveProperty("balance_due");
  });

  it("stuurt bij een voorschot het saldo mee en geen korting", () => {
    const params = paidBookingParams({
      ...FACTS,
      paymentType: "deposit",
      discount: 0,
      // De bevestiging van € 50 excl. btw wordt als € 60,50 geïnd.
      paidAmount: 60.5,
    });
    expect(params.payment_type).toBe("deposit");
    expect(params).not.toHaveProperty("discount_amount");
    // Het volledige bedrag incl. btw min wat er al betaald is.
    expect(params.balance_due).toBe("289,50");
  });

  it("laat het saldo nooit negatief worden", () => {
    const params = paidBookingParams({ ...FACTS, paymentType: "deposit", paidAmount: 9999 });
    expect(params.balance_due).toBe("0,00");
  });

  it("laat bij volledige betaling het betaalde bedrag gelijk lopen met het totaal", () => {
    // Anders staat er "volledig betaald" onder een hoger totaal.
    const params = paidBookingParams(FACTS);
    expect(params.paid_amount).toBe(params.price_incl_vat);
  });

  it("meldt het bedrag dat effectief geïncasseerd is", () => {
    const params = paidBookingParams({ ...FACTS, paidAmount: 99 });
    expect(params.paid_amount).toBe("99,00");
  });

  it("geeft bedragen als string mee, want Brevo maakt van 350 een 350.0", () => {
    const params = paidBookingParams(FACTS);
    for (const key of ["price_excl_vat", "vat_amount", "price_incl_vat", "paid_amount"]) {
      expect(typeof params[key], `${key} is geen string`).toBe("string");
    }
  });

  it("zet de toestellen als naam-en-aantal klaar", () => {
    expect(paidBookingParams(FACTS).items).toEqual([
      { name: "Small Bouwdroger", quantity: 2 },
      { name: "Axiaalventilator", quantity: 4 },
    ]);
  });

  it("noemt de betaalmethode zoals de klant ze kent", () => {
    expect(paidBookingParams(FACTS).payment_method).toBe("Bancontact");
    expect(
      paidBookingParams({ ...FACTS, payload: { ...BASE, online_payment_method: "apple_pay" } })
        .payment_method,
    ).toBe("Apple Pay");
  });

  it("laat delivery_notes weg zolang er geen opmerking is", () => {
    expect(paidBookingParams(FACTS)).not.toHaveProperty("delivery_notes");
    expect(
      paidBookingParams({ ...FACTS, payload: { ...BASE, customer_note: "via de poort" } })
        .delivery_notes,
    ).toBe("via de poort");
  });

  it("vult een ontbrekend tijdslot met een ruim venster in plaats van niets", () => {
    const params = paidBookingParams({ ...FACTS, payload: { ...BASE, delivery_slot: null } });
    expect(params.delivery_time).toBe("tussen 8u en 17u");
  });

  it("neemt de afspraken uit env over", () => {
    vi.stubEnv("MAIL_CALL_NOTICE", "2 werkdagen");
    vi.stubEnv("MAIL_CANCELLATION_HOURS", "24");
    const params = paidBookingParams(FACTS);
    expect(params.call_notice).toBe("2 werkdagen");
    expect(params.cancellation_hours).toBe(24);
  });
});

describe("algemene orderparameters", () => {
  it("geeft nooit null door, want Brevo drukt dat letterlijk af", () => {
    const params = orderParams({ source: "reservering", external_id: "abc" });
    for (const [key, value] of Object.entries(params)) {
      expect(value, `${key} is null`).not.toBeNull();
    }
  });
});

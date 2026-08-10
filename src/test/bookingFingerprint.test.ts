import { describe, expect, test } from "vitest";
import { bookingFingerprint } from "../lib/booking";

/**
 * De vingerafdruk bepaalt of de boekingspagina de Stripe-sessie hergebruikt die
 * er al staat, of er een tweede naast zet. Een tweede sessie betekent een tweede
 * hold op hetzelfde materieel, en dan blokkeert de bezoeker zijn eigen
 * leverdatum — precies de bug waarvoor dit bestaat.
 */
const boeking = {
  config: { size: "180", wat: "pleister", pd: "2", cd: "6", heat: "0" },
  options: {
    cover: "comfort",
    extras: ["rapport", "stroom"],
    pumps: null,
    dev: { small: 0, medium: 0, axiaal: 0, kachel: 0 },
    floors: 0,
    access: "trap",
    delivery: "standaard",
    payment: "online",
  },
  customer: { name: "Jan Peeters", mail: "jan@voorbeeld.be", type: "part" },
  delivery: { date: "2026-09-01", slot: "10:00 – 12:00" },
};

describe("bookingFingerprint", () => {
  test("dezelfde boeking geeft dezelfde vingerafdruk", () => {
    expect(bookingFingerprint(boeking)).toBe(bookingFingerprint(structuredClone(boeking)));
  });

  test("de volgorde van de velden maakt niet uit", () => {
    const omgekeerd = {
      delivery: boeking.delivery,
      customer: { type: "part", mail: "jan@voorbeeld.be", name: "Jan Peeters" },
      options: boeking.options,
      config: { heat: "0", cd: "6", pd: "2", wat: "pleister", size: "180" },
    };

    expect(bookingFingerprint(omgekeerd)).toBe(bookingFingerprint(boeking));
  });

  test("een andere leverdatum is een andere boeking", () => {
    const later = { ...boeking, delivery: { ...boeking.delivery, date: "2026-09-15" } };

    expect(bookingFingerprint(later)).not.toBe(bookingFingerprint(boeking));
  });

  test("een andere betaalwijze is een andere boeking", () => {
    const bijLevering = {
      ...boeking,
      options: { ...boeking.options, payment: "levering" },
    };

    expect(bookingFingerprint(bijLevering)).not.toBe(bookingFingerprint(boeking));
  });

  test("een extra toestel is een andere boeking", () => {
    const extra = {
      ...boeking,
      options: { ...boeking.options, dev: { ...boeking.options.dev, medium: 1 } },
    };

    expect(bookingFingerprint(extra)).not.toBe(bookingFingerprint(boeking));
  });

  test("een gewijzigd e-mailadres is een andere boeking", () => {
    const anders = { ...boeking, customer: { ...boeking.customer, mail: "an@voorbeeld.be" } };

    expect(bookingFingerprint(anders)).not.toBe(bookingFingerprint(boeking));
  });

  /*
    Arrays houden hun volgorde: `[small, medium]` en `[medium, small]` zijn voor
    order_lines twee verschillende dingen. De pagina sorteert `extras` daarom zelf
    voor ze hier binnenkomt, in plaats van dat deze functie dat stilzwijgend doet.
  */
  test("de volgorde binnen een lijst telt wel mee", () => {
    const omgekeerd = {
      ...boeking,
      options: { ...boeking.options, extras: ["stroom", "rapport"] },
    };

    expect(bookingFingerprint(omgekeerd)).not.toBe(bookingFingerprint(boeking));
  });

  test("een ontbrekend veld en een veld op undefined zijn hetzelfde", () => {
    expect(bookingFingerprint({ a: 1, b: undefined })).toBe(bookingFingerprint({ a: 1 }));
  });
});

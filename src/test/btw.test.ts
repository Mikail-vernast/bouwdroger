import { describe, expect, it } from "vitest";
import { DEPOSIT_GROSS, EMPTY_OPTIONS, bookingSummary, toCents, withVat } from "../lib/booking.js";
import { DEFAULT_CD, DEFAULT_PD, DEFAULT_SIZE, SIZE_VALUES } from "../lib/verhuur.js";
import type { PackageConfig } from "../lib/verhuur.js";

const CONFIG: PackageConfig = {
  size: DEFAULT_SIZE,
  wat: "beide",
  pd: DEFAULT_PD,
  cd: DEFAULT_CD,
  heat: true,
  weeks: 2,
};

describe("btw op de boeking", () => {
  it("rekent 21% bovenop een bedrag", () => {
    expect(withVat(100)).toBe(121);
    expect(withVat(1707.34)).toBe(2065.88);
  });

  it("rekent de btw over het bedrag ná korting", () => {
    const summary = bookingSummary(CONFIG, { ...EMPTY_OPTIONS, payment: "online" });
    expect(summary.discount).toBeGreaterThan(0);
    expect(summary.vat).toBe(Math.round(summary.netTotal * 21) / 100);
    expect(summary.grossTotal).toBe(summary.netTotal + summary.vat);
  });

  it("laat Stripe bij volledige betaling het volledige brutobedrag innen", () => {
    const summary = bookingSummary(CONFIG, { ...EMPTY_OPTIONS, payment: "online" });
    // Dit is de hele reden van deze wijziging: wat er geïnd wordt, moet gelijk
    // zijn aan het totaal incl. btw, anders klopt "volledig betaald" niet.
    expect(summary.payableGross).toBe(summary.grossTotal);
  });

  it("laat bij betalen-bij-levering enkel de bevestiging door Stripe gaan", () => {
    const summary = bookingSummary(CONFIG, { ...EMPTY_OPTIONS, payment: "levering" });
    // Het voorschot is een vast brutobedrag: er komt geen btw meer bovenop.
    expect(summary.payableGross).toBe(DEPOSIT_GROSS);
    expect(withVat(summary.payable)).toBe(DEPOSIT_GROSS);
    expect(summary.payableGross).toBeLessThan(summary.grossTotal);
  });

  it("vraagt bij elk pakket precies hetzelfde voorschot", () => {
    const klein = bookingSummary(
      { ...CONFIG, size: SIZE_VALUES[0], weeks: 1, heat: false },
      { ...EMPTY_OPTIONS, payment: "levering" }
    );
    const groot = bookingSummary(
      { ...CONFIG, size: SIZE_VALUES[SIZE_VALUES.length - 1], weeks: 6, heat: true },
      { ...EMPTY_OPTIONS, payment: "levering" }
    );
    expect(groot.grossTotal).toBeGreaterThan(klein.grossTotal);
    expect(klein.payableGross).toBe(DEPOSIT_GROSS);
    expect(groot.payableGross).toBe(DEPOSIT_GROSS);
  });

  it("geeft geen korting wanneer er bij levering betaald wordt", () => {
    const summary = bookingSummary(CONFIG, { ...EMPTY_OPTIONS, payment: "levering" });
    expect(summary.discount).toBe(0);
    expect(summary.netTotal).toBe(summary.total);
  });

  it("levert een rond centbedrag op voor Stripe", () => {
    const summary = bookingSummary(CONFIG, { ...EMPTY_OPTIONS, payment: "online" });
    const cents = toCents(summary.payableGross);
    expect(Number.isInteger(cents)).toBe(true);
    // Geen afrondingsverschil tussen wat het scherm toont en wat Stripe int.
    expect(cents / 100).toBe(summary.payableGross);
  });
});

import { describe, expect, it } from "vitest";
import { isTeamMailKey, teamMailHtml } from "../lib/teamMail";

const pickup = {
  referentie: "VRN-2026-32XCS329",
  bron: "stripe",
  klant_naam: "Test Echt",
  email: "klant@example.com",
  telefoon: "0470 44 55 66",
  klanttype: "particulier",
  adres: "Meir 1, 2000 Antwerpen",
  toestellen: "1× Boost",
  situatie: "afhaling",
  leverdatum: "14 november 2026",
  huurdagen: 3,
  bedrag: "€ 32,67",
  bedrag_getal: 32.67,
  munt: "EUR",
  betaald: "ja",
  betaalmethode: "card",
  afhaaldatum: "zaterdag 14 november",
  afhaalmoment: "Afhalen 08:00 – 10:00",
  afhaalpunt: "Boomsesteenweg 12, Unit 11, 2630 Aartselaar",
  terugbrengen: "dinsdag 17 november",
  betaald_bedrag: "€ 32,67",
  openstaand: "€ 0,00",
};

describe("team mails", () => {
  it("pickup: hero, moments and payment, without raw parameter names", () => {
    const html = teamMailHtml("intern_afhaal", "Afhaalreservatie - VRN-2026-32XCS329", pickup);
    expect(html).toContain("Afhaalreservatie");
    expect(html).toContain("1× Boost");
    expect(html).toContain("zaterdag 14 november");
    expect(html).toContain("08:00 – 10:00");
    expect(html).toContain("dinsdag 17 november");
    expect(html).toContain("Kaart");
    expect(html).toContain("tel:0470445566");
    expect(html).not.toContain("bedrag getal");
    expect(html).not.toContain("32.67");
    expect(html).not.toContain("Afhalen Afhalen");
  });

  it("pickup with an open balance shows what to collect", () => {
    const html = teamMailHtml("intern_afhaal", "x", { ...pickup, openstaand: "€ 17,33" });
    expect(html).toContain("€ 17,33");
  });

  it("escapes everything a customer typed", () => {
    const html = teamMailHtml("intern_contact", "x", { naam: "<b>x</b>", email: "a@b.be", bericht: "<script>alert(1)</script>" });
    expect(html).not.toContain("<script>alert");
    expect(html).toContain("&lt;script&gt;");
  });

  it("booking splits the package summary per line", () => {
    const html = teamMailHtml("intern_boeking", "x", { ...pickup, opmerking: "Dekking: 29 | Vochtmeting: inbegrepen" });
    expect(html).toContain("Dekking: 29<br>Vochtmeting: inbegrepen");
  });

  it("alarm carries the raw order and the reason", () => {
    const html = teamMailHtml("intern_alarm", "x", { ...pickup, context: "stripe-webhook", reden: "HTTP 500", ruwe_order: '{"a":1}' });
    expect(html).toContain("Order niet doorgekomen");
    expect(html).toContain("HTTP 500");
    expect(html).toContain("{&quot;a&quot;:1}");
  });

  it("a missing date never leaves a bare 'tot' or 'terug' in the header", () => {
    const booking = teamMailHtml("intern_boeking", "x", { ...pickup, huur_eind: "" });
    expect(booking).toContain("Levering 14 november 2026");
    expect(booking).not.toMatch(/· tot\s*</);
    const bare = teamMailHtml("intern_afhaal", "x", { referentie: "VRN-X" });
    expect(bare).not.toMatch(/Afhalen\s*·|· terug\s*</);
    expect(bare).toContain("Afhaling aan het afhaalpunt");
    const both = teamMailHtml("intern_boeking", "x", { ...pickup, huur_eind: "17 november 2026" });
    expect(both).toContain("Levering 14 november 2026 · tot 17 november 2026");
  });

  it("only the five internal keys get a design", () => {
    expect(isTeamMailKey("intern_afhaal")).toBe(true);
    expect(isTeamMailKey("boeking_betaald")).toBe(false);
  });
});

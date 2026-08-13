import { describe, expect, test } from "vitest";
import { deviceLineLabel, parseDeviceLines } from "@/lib/verhuur";

/*
  De bevestigingspagina toont wat er geleverd wordt, opgebouwd uit de
  `toestellen`-metadata van de betaalde Stripe-sessie. Die string is de enige
  bron: de configuratie in de adresbalk is een wens van de bezoeker, niet zijn
  bestelling. Wat hier stukgaat, laat een klant die vanuit zijn bevestigingsmail
  terugkomt naar een leeg vak kijken.
*/
describe("de toestellen uit een betaalde sessie leesbaar maken", () => {
  test("een pakketregel krijgt de naam die op het toestel staat", () => {
    const lines = parseDeviceLines("small:2,medium:3,axiaal:4");

    expect(lines.map(deviceLineLabel)).toEqual([
      "2× Small Bouwdroger",
      "3× Medium Bouwdroger",
      "4× Axiaalventilator",
    ]);
  });

  test("een los toestel draagt zijn eigen catalogusnaam", () => {
    // `p:` markeert een regel die exact dít product vraagt — zie
    // serializeDeviceLines. De klant klikte op de toestelpagina, dus hij
    // verwacht de naam die daar stond.
    expect(deviceLineLabel(parseDeviceLines("p:ttv4500:1")[0])).toBe("1× TTV 4500");
  });

  test("de kachel heet gewoon kachel, niet 'kachel'", () => {
    expect(deviceLineLabel({ device_key: "kachel", qty: 1 })).toBe("1× Elektrische kachel");
  });

  test("een onbekende sleutel valt niet weg uit het overzicht", () => {
    // Liever een onleesbare regel dan een bestelling die korter lijkt dan ze is:
    // de klant moet kunnen natellen wat er komt.
    expect(deviceLineLabel({ product_key: "bestaat-niet", qty: 2 })).toBe("2× bestaat-niet");
  });

  test("een lege metadata levert geen regels op", () => {
    // Sessies van vóór deze metadata bestaan nog; de pagina moet dan gewoon
    // haar referentie tonen zonder lege lijst.
    expect(parseDeviceLines("")).toEqual([]);
    expect(parseDeviceLines(undefined)).toEqual([]);
  });
});

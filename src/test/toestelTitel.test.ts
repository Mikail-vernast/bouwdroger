import { describe, expect, it } from "vitest";
import { toestelTitel } from "@/lib/toestelTitel";
import { PRODUCTS, PRODUCT_ORDER } from "@/data/verhuur";

describe("toestelTitel", () => {
  it("zet het soortwoord vóór een typenummer", () => {
    expect(
      toestelTitel({ short: "TTK 350 S", type: "Condensontvochtiger", day: 14, spec: ["Vochtafvoer", "70", "L/dag"] })
    ).toBe("Bouwdroger TTK 350 S huren — 70 L/dag, € 14/dag | Vernast");
  });

  it("herhaalt het soortwoord niet als de naam het al draagt", () => {
    expect(
      toestelTitel({
        short: "Adsorptiedroger Revolution",
        type: "Adsorptiedroger · gericht drogen",
        day: 25,
        spec: ["Techniek", "Adsorptie", ""],
      })
    ).toBe("Adsorptiedroger Revolution huren — € 25/dag | Vernast");
  });

  it("toont een dagprijs met centen als hij niet rond is", () => {
    expect(toestelTitel({ short: "X", type: "Iets", day: 8.5, spec: undefined })).toBe(
      "X huren — € 8,50/dag | Vernast"
    );
  });

  it.each(PRODUCT_ORDER)("%s: de echte titel blijft binnen 60 tekens", (key) => {
    const p = PRODUCTS[key];
    const titel = toestelTitel({ short: p.short, type: p.type, day: p.day, spec: p.key[0] });
    expect(titel.length).toBeLessThanOrEqual(60);
  });
});

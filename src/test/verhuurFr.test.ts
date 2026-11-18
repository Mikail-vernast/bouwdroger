import { describe, expect, it } from "vitest";
import { COVER, EXTRAS, PRODUCT_ORDER, PRODUCTS, TOESTEL_SLUG, toestelKey } from "@/data/verhuur";
import {
  coverInTaal,
  extrasInTaal,
  productInTaal,
  toestelChipsInTaal,
  vertaalPortaal,
} from "@/data/verhuur.fr";
import { CONDENSPOMP } from "@/data/toebehoren";
import { toebehorenInTaal } from "@/data/toebehoren.fr";
import { TOESTEL_SLUG_VERTAALD } from "@/i18n/paden";
import { toestelChips } from "@/data/verhuur";

describe("Franse productdata", () => {
  it("vindt de sleutel terug achter elke Franse toestelslug", () => {
    for (const [key, slug] of Object.entries(TOESTEL_SLUG)) {
      if (!PRODUCTS[key]) continue;
      expect(toestelKey(TOESTEL_SLUG_VERTAALD[slug].fr)).toBe(key);
    }
  });

  it("laat prijs, foto's en sleutels ongemoeid", () => {
    for (const key of PRODUCT_ORDER) {
      const nl = PRODUCTS[key];
      const fr = productInTaal(key, "fr");
      expect(fr.day).toBe(nl.day);
      expect(fr.img).toEqual(nl.img);
      expect(fr.imgAlt).toHaveLength(nl.img.length);
      expect(fr.posts.map(([src]) => src)).toEqual(nl.posts.map(([src]) => src));
      expect(fr.key).toHaveLength(nl.key.length);
    }
  });

  it("geeft in het Nederlands het origineel terug", () => {
    for (const key of PRODUCT_ORDER) {
      expect(productInTaal(key, "nl")).toBe(PRODUCTS[key]);
      expect(toestelChipsInTaal(key, "nl")).toEqual(toestelChips(PRODUCTS[key]));
    }
    expect(coverInTaal("nl")).toBe(COVER);
    expect(extrasInTaal("nl")).toBe(EXTRAS);
  });

  it("vertaalt elke portaaltekst van de toestellen", () => {
    for (const key of PRODUCT_ORDER) {
      const nl = PRODUCTS[key];
      for (const veld of ["name", "type", "badge", "sum"] as const) {
        expect(vertaalPortaal(nl[veld], "fr"), `${key}.${veld}`).not.toBe(nl[veld]);
      }
    }
  });

  it("zet de prijs van de condenspomp zoals de pagina hem toont", () => {
    const fr = toebehorenInTaal(CONDENSPOMP, "fr", "3,63 € TVAC");
    expect(fr.faq.some(([, a]) => a.startsWith("3,63 € TVAC par déshumidificateur"))).toBe(true);
    expect(toebehorenInTaal(CONDENSPOMP, "nl")).toBe(CONDENSPOMP);
  });
});

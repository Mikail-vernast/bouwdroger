import { describe, expect, it } from "vitest";
import { CAT, COVER, EXTRAS, PRODUCT_ORDER, PRODUCTS, TOESTEL_SLUG, toestelKey } from "@/data/verhuur";
import {
  catInTaal,
  coverInTaal,
  extrasInTaal,
  productInTaal,
  specsInTaal,
  toestelChipsInTaal,
  toestelTitelEn,
  vertaalPortaal,
} from "@/data/verhuur.fr";
import { CONDENSPOMP } from "@/data/toebehoren";
import { toebehorenInTaal } from "@/data/toebehoren.fr";
import { getAllPackages } from "@/data/packages";
import { pakketInTaal } from "@/data/packages.fr";
import { products } from "@/data/products";
import { productInTaal as catalogusInTaal } from "@/data/products.fr";
import { drogerKaartenInTaal, DROGER_KAARTEN } from "@/data/tarieflijst";
import { TOESTEL_SLUG_VERTAALD } from "@/i18n/paden";

/*
  Engels mag nergens stilzwijgend als Frans of Nederlands behandeld worden:
  vóór deze bestanden gaf elke helper voor "en" gewoon het Nederlandse origineel.
*/
describe("Engelse productdata", () => {
  it("vindt de sleutel terug achter elke Engelse toestelslug", () => {
    for (const [key, slug] of Object.entries(TOESTEL_SLUG)) {
      if (!PRODUCTS[key]) continue;
      expect(toestelKey(TOESTEL_SLUG_VERTAALD[slug].en)).toBe(key);
    }
  });

  it("laat prijs, foto's en sleutels ongemoeid en vertaalt de tekst", () => {
    for (const key of PRODUCT_ORDER) {
      const nl = PRODUCTS[key];
      const en = productInTaal(key, "en");
      expect(en.day).toBe(nl.day);
      expect(en.img).toEqual(nl.img);
      expect(en.imgAlt).toHaveLength(nl.img.length);
      expect(en.posts.map(([src]) => src)).toEqual(nl.posts.map(([src]) => src));
      expect(en.key).toHaveLength(nl.key.length);
      expect(en.faq).not.toEqual(nl.faq);
      expect(en.faq).not.toEqual(productInTaal(key, "fr").faq);
      for (const veld of ["name", "type", "badge", "sum"] as const) {
        expect(vertaalPortaal(nl[veld], "en"), `${key}.${veld}`).not.toBe(nl[veld]);
      }
    }
  });

  it("geeft Engelse chips met Engelse decimalen", () => {
    expect(toestelChipsInTaal("ttk350", "en")).toEqual(["70 litres a day", "up to 400 m³", "1.1 kW"]);
  });

  it("vertaalt catalogus, dekking, extra's en fiches zonder bedragen te raken", () => {
    const cat = catInTaal("en");
    for (const k of Object.keys(CAT) as (keyof typeof CAT)[]) expect(cat[k].w2).toBe(CAT[k].w2);
    expect(coverInTaal("en").map((c) => c.price)).toEqual(COVER.map((c) => c.price));
    expect(extrasInTaal("en").map((x) => x.price)).toEqual(EXTRAS.map((x) => x.price));
    expect(specsInTaal("en")[0].tab).toBe("Boost dehumidifier");
  });

  it("vertaalt pakketten en de oude catalogus, met dezelfde prijzen", () => {
    for (const pkg of getAllPackages()) {
      const en = pakketInTaal(pkg, "en");
      expect(en.pricePerTwoWeeks).toBe(pkg.pricePerTwoWeeks);
      expect(en.pricePerDay).toBe(pkg.pricePerDay);
      expect(en.title).not.toBe(pkg.title);
    }
    for (const p of products) expect(catalogusInTaal(p, "en").pricePerDay).toBe(p.pricePerDay);
  });

  it("geeft droogkaarten in het Engels met dezelfde prijzen", () => {
    const en = drogerKaartenInTaal("en");
    expect(en.map((k) => k.tiers.map((t) => t.price))).toEqual(DROGER_KAARTEN.map((k) => k.tiers.map((t) => t.price)));
    expect(en[0].tiers[1].label).toBe("2 weeks");
  });

  it("zet de prijs van de condenspomp zoals de pagina hem toont", () => {
    const en = toebehorenInTaal(CONDENSPOMP, "en", "€3.63 incl. VAT");
    expect(en.faq.some(([, a]) => a.startsWith("€3.63 incl. VAT per dehumidifier"))).toBe(true);
  });

  it("houdt de paginatitel van een toestel onder 60 tekens", () => {
    expect(toestelTitelEn("Performance construction dehumidifier", "€14.52").length).toBeLessThanOrEqual(60);
  });
});

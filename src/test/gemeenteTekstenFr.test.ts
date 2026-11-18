import { describe, expect, it } from "vitest";
import { GEMEENTE_FR_BY_SLUG, GEMEENTE_FR_PER_REGIO } from "@/data/gemeenten-fr";
import { MET_FR_PER_REGIO } from "@/data/gemeenten-fr/aan";
import { GEMEENTE_ROUTES, gemeentePadFr } from "@/data/gemeente-slugs";
import { GEMEENTE_BY_SLUG } from "@/data/gemeenten";
import { PRODUCTS } from "@/data/verhuur";

/**
 * Dezelfde lat als `gemeenteTeksten.test.ts`, voor de Franse teksten in
 * `src/data/gemeenten-fr/`. Die worden per provincie door verschillende mensen
 * tegelijk vertaald, en precies dan sluipt er een gekopieerde titel of een
 * dubbele vraag in.
 *
 * De grenzen zijn die uit de README daar: titel 50–60 tekens (twee tekens
 * speling, zoals bij het Nederlands), description 120–160.
 */
const paginas = Object.entries(GEMEENTE_FR_BY_SLUG).map(([slug, tekst]) => ({ slug, tekst }));
const route = (slug: string) => GEMEENTE_ROUTES.find((r) => r.slug === slug);

describe("de Franse teksten van de gemeentepagina's", () => {
  it("heeft er minstens één", () => {
    expect(paginas.length).toBeGreaterThan(0);
  });

  it("heeft voor elke aangezette gemeente een tekst, in de juiste provincie", () => {
    for (const [regio, slugs] of Object.entries(MET_FR_PER_REGIO)) {
      for (const slug of slugs) {
        expect(GEMEENTE_FR_PER_REGIO[regio]?.[slug], `${regio}/${slug}`).toBeDefined();
        expect(route(slug)?.regio, slug).toBe(regio);
      }
    }
  });

  it("gebruikt alleen sleutels van bestaande gemeenten, in hun eigen provinciebestand", () => {
    for (const [regio, teksten] of Object.entries(GEMEENTE_FR_PER_REGIO)) {
      for (const [slug, tekst] of Object.entries(teksten)) {
        expect(route(slug)?.regio, slug).toBe(regio);
        expect(tekst.slug).toBe(slug);
        expect(gemeentePadFr(route(slug)!)).toMatch(/^\/location-deshumidificateur-[a-z0-9-]+$/);
      }
    }
  });

  it.each(paginas)("$slug: stelt geen vraag twee keer", ({ tekst }) => {
    const vragen = tekst.faq.map((f) => f.q);
    expect(new Set(vragen).size).toBe(vragen.length);
    expect(vragen.length).toBeGreaterThanOrEqual(4);
  });

  it.each(paginas)("$slug: neemt toestellen, buren en realisaties over van het Nederlands", ({ slug, tekst }) => {
    const nl = GEMEENTE_BY_SLUG[slug];
    expect(tekst.toestellen.map((t) => t.key)).toEqual(nl.toestellen.map((t) => t.key));
    for (const { key } of tekst.toestellen) expect(PRODUCTS[key], key).toBeDefined();
    expect(tekst.buren).toEqual(nl.buren);
    expect(tekst.realisaties).toEqual(nl.realisaties);
  });

  it.each(paginas)("$slug: houdt titel en description op maat", ({ tekst }) => {
    expect(tekst.title.length).toBeGreaterThanOrEqual(48);
    expect(tekst.title.length).toBeLessThanOrEqual(62);
    expect(tekst.description.length).toBeGreaterThanOrEqual(120);
    expect(tekst.description.length).toBeLessThanOrEqual(160);
  });

  it("geeft elke pagina een eigen titel en description, ook tegenover het Nederlands", () => {
    const titels = paginas.map((p) => p.tekst.title);
    const descr = paginas.map((p) => p.tekst.description);
    expect(new Set(titels).size).toBe(titels.length);
    expect(new Set(descr).size).toBe(descr.length);
    for (const { slug, tekst } of paginas) {
      expect(tekst.title).not.toBe(GEMEENTE_BY_SLUG[slug].title);
    }
  });

  it("gebruikt nergens een em-dash in zichtbare tekst", () => {
    const fout: string[] = [];
    for (const { slug, tekst } of paginas) {
      const alles = [
        tekst.title,
        tekst.description,
        tekst.h1,
        tekst.kicker,
        tekst.rit.afstand,
        tekst.rit.tijd,
        ...tekst.intro,
        tekst.bouw.kop,
        ...tekst.bouw.alineas,
        ...tekst.toestellen.map((t) => t.waarom),
        tekst.levering.kop,
        tekst.levering.alinea,
        tekst.afhalen.kop,
        tekst.afhalen.alinea,
        ...tekst.faq.flatMap((f) => [f.q, f.a]),
      ].join(" ");
      if (alles.includes("—")) fout.push(slug);
    }
    expect(fout).toEqual([]);
  });
});

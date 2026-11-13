import { describe, expect, it } from "vitest";
import { GEMEENTE_BY_SLUG } from "@/data/gemeenten";
import { GEMEENTE_ROUTES } from "@/data/gemeente-slugs";
import { PRODUCTS } from "@/data/verhuur";

/**
 * De gemeenteteksten staan met de hand in `gemeenten.ts`, en dat bestand is
 * met 194 pagina's te groot om nog met het oog te overzien. Deze test bewaakt
 * wat er bij het schrijven in bulk echt fout ging.
 *
 * Twee fouten zaten er al in voordat deze test bestond. Acht pagina's stelden
 * dezelfde vraag twee keer in hun FAQ, met een iets anders geformuleerd
 * antwoord: React klaagde over dubbele keys en de bezoeker las de vraag twee
 * keer. En tweeëntwintig descriptions bleven onder de honderdtien tekens,
 * waarmee ze ruimte in het zoekresultaat lieten liggen.
 *
 * De em-dash staat er bewust bij. Op 13-11-2026 is hij uit alle zichtbare
 * tekst van de site gehaald omdat hij als AI-tekst leest; in commentaar mag
 * hij blijven, dus controleren we de data en niet het bestand.
 */
describe("de teksten van de gemeentepagina's", () => {
  const paginas = GEMEENTE_ROUTES.map((route) => ({
    slug: route.slug,
    tekst: GEMEENTE_BY_SLUG[route.slug],
  }));

  it("heeft voor elke route een tekst, en geen tekst zonder route", () => {
    const routes = GEMEENTE_ROUTES.map((r) => r.slug).sort();
    expect(Object.keys(GEMEENTE_BY_SLUG).sort()).toEqual(routes);
  });

  it.each(paginas)("$slug: stelt geen vraag twee keer", ({ tekst }) => {
    const vragen = tekst!.faq.map((f) => f.q);
    expect(new Set(vragen).size).toBe(vragen.length);
    expect(vragen.length).toBeGreaterThanOrEqual(4);
  });

  it.each(paginas)("$slug: toont vier toestellen die echt bestaan", ({ tekst }) => {
    expect(tekst!.toestellen).toHaveLength(4);
    for (const { key } of tekst!.toestellen) {
      expect(PRODUCTS[key], key).toBeDefined();
    }
  });

  /*
    Een buur die niet bestaat wordt een dode link onderaan de pagina, en dat
    is precies de sectie die de gemeentepagina's aan elkaar hangt.
  */
  it.each(paginas)("$slug: linkt alleen naar buren die bestaan", ({ slug, tekst }) => {
    const bestaat = new Set(GEMEENTE_ROUTES.map((r) => r.slug));
    for (const buur of tekst!.buren) {
      expect(bestaat.has(buur), `${slug} → ${buur}`).toBe(true);
      expect(buur).not.toBe(slug);
    }
  });

  it.each(paginas)("$slug: houdt titel en description op maat", ({ tekst }) => {
    expect(tekst!.title.length).toBeGreaterThanOrEqual(30);
    expect(tekst!.title.length).toBeLessThanOrEqual(62);
    expect(tekst!.description.length).toBeGreaterThanOrEqual(110);
    expect(tekst!.description.length).toBeLessThanOrEqual(175);
  });

  it("geeft elke pagina een eigen titel en description", () => {
    const titels = paginas.map((p) => p.tekst!.title);
    const descr = paginas.map((p) => p.tekst!.description);
    expect(new Set(titels).size).toBe(titels.length);
    expect(new Set(descr).size).toBe(descr.length);
  });

  it("gebruikt nergens een em-dash in zichtbare tekst", () => {
    const fout: string[] = [];
    for (const { slug, tekst } of paginas) {
      const alles = [
        tekst!.title,
        tekst!.description,
        tekst!.h1,
        tekst!.kicker,
        ...tekst!.intro,
        tekst!.bouw.kop,
        ...tekst!.bouw.alineas,
        ...tekst!.toestellen.map((t) => t.waarom),
        tekst!.levering.kop,
        tekst!.levering.alinea,
        tekst!.afhalen.kop,
        tekst!.afhalen.alinea,
        ...tekst!.faq.flatMap((f) => [f.q, f.a]),
      ].join(" ");
      if (alles.includes("—")) fout.push(slug);
    }
    expect(fout).toEqual([]);
  });
});

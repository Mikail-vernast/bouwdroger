import { describe, expect, it } from "vitest";
import { REGIOS, regioTekst, realisatiesVoor } from "@/data/regios";
import { REGIO_ROUTES } from "@/data/regio-slugs";
import { PRODUCTS } from "@/data/verhuur";

/**
 * De regiopagina's bestaan om per provincie gevonden te worden, en dat werkt
 * alleen als elke pagina genoeg eigen tekst heeft. Vijf keer dezelfde tekst
 * met een andere plaatsnaam filtert Google weg als kopie. Deze test bewaakt
 * de drie dingen die je aan de pagina zelf niet ziet: de lengte van titel en
 * beschrijving, het woordental en de uniciteit tussen de regio's.
 */
const TITEL_MAX = 60;
const DESCR_MIN = 120;
const DESCR_MAX = 160;
const MIN_WOORDEN = 500;

const woorden = (t: string) => t.split(/\s+/).filter(Boolean).length;
const zinnen = (t: string) =>
  t
    .split(/(?<=[.!?])\s+|\n/)
    .map((z) => z.trim().toLowerCase())
    .filter((z) => woorden(z) >= 8);

describe("regiopagina's", () => {
  it("dekt precies de routes uit regio-slugs.ts", () => {
    expect(REGIOS.map((r) => r.slug).sort()).toEqual(REGIO_ROUTES.map((r) => r.slug).sort());
  });

  it.each(REGIOS)("$slug: titel ≤ 60 en beschrijving 120–160 tekens", (regio) => {
    expect(regio.title.length).toBeLessThanOrEqual(TITEL_MAX);
    expect(regio.description.length).toBeGreaterThanOrEqual(DESCR_MIN);
    expect(regio.description.length).toBeLessThanOrEqual(DESCR_MAX);
  });

  /*
    "bouwdroger huren" en de provincienaam, maar niet per se aaneengesloten.
    De eis was letterlijk `bouwdroger huren in <naam>`, en dat botste zodra
    Antwerpen een stadspagina kreeg (12-11-2026): die draagt nu de intentie
    "bouwdroger huren Antwerpen", en de provinciepagina heet daarom
    "Bouwdroger huren in de provincie Antwerpen" om er niet mee te vechten.
    Google heeft die aaneensluiting niet nodig; twee pagina's op één intentie
    is het echte risico, en dáár waakt `audit-seo.mjs` over met zijn controle
    op dubbele titels en dubbele H1's.
  */
  it.each(REGIOS)("$slug: H1 en titel bevatten het zoekwoord", (regio) => {
    const naam = regio.name.toLowerCase();
    expect(regio.h1.toLowerCase()).toContain("bouwdroger huren in");
    expect(regio.h1.toLowerCase()).toContain(naam);
    expect(regio.title.toLowerCase()).toContain("bouwdroger huren");
    expect(regio.title.toLowerCase()).toContain(naam);
  });

  it.each(REGIOS)("$slug: minstens 500 woorden eigen tekst", (regio) => {
    expect(woorden(regioTekst(regio))).toBeGreaterThanOrEqual(MIN_WOORDEN);
  });

  it.each(REGIOS)("$slug: vier vragen, allemaal met een antwoord", (regio) => {
    expect(regio.faq).toHaveLength(4);
    for (const f of regio.faq) {
      expect(f.q.endsWith("?")).toBe(true);
      expect(woorden(f.a)).toBeGreaterThanOrEqual(20);
    }
  });

  it.each(REGIOS)("$slug: verwijst naar bestaande toestellen en realisaties", (regio) => {
    for (const t of regio.toestellen.items) expect(PRODUCTS[t.key]).toBeDefined();
    expect(realisatiesVoor(regio).length).toBeGreaterThanOrEqual(2);
  });

  it("deelt geen zinnen tussen twee regio's", () => {
    const gezien = new Map<string, string>();
    const dubbel: string[] = [];
    for (const regio of REGIOS) {
      for (const zin of new Set(zinnen(regioTekst(regio)))) {
        const eerder = gezien.get(zin);
        if (eerder && eerder !== regio.slug) dubbel.push(`${eerder} ↔ ${regio.slug}: ${zin}`);
        gezien.set(zin, regio.slug);
      }
    }
    expect(dubbel).toEqual([]);
  });
});

import { describe, expect, it } from "vitest";
import { LAAD_REGIO_EN, type RegioEn } from "@/data/regios-en";
import { REGIO_BY_SLUG, regioTekst } from "@/data/regios";
import { REGIO_ROUTES } from "@/data/regio-slugs";
import { REALISATIES } from "@/data/realisaties";
import { PRODUCTS } from "@/data/verhuur";

/**
 * Dezelfde lat als `regios.test.ts` en `regiosFr.test.ts`, voor de Engelse
 * provinciepagina's in `src/data/regios-en/`. Het Engels telt wat minder
 * woorden dan het Nederlands voor dezelfde inhoud; de grens zakt daarom naar
 * 450, niet verder: een pagina die daaronder valt, is ingekort en niet vertaald.
 */
const woorden = (t: string) => t.split(/\s+/).filter(Boolean).length;

const REGIOS: RegioEn[] = await Promise.all(Object.values(LAAD_REGIO_EN).map((laad) => laad()));

describe("Engelse provinciepagina's", () => {
  it("dekt precies de Belgische provincies", () => {
    const belgisch = REGIO_ROUTES.filter((r) => r.slugEn).map((r) => r.slug).sort();
    expect(REGIOS.map((r) => r.slug).sort()).toEqual(belgisch);
    expect(belgisch).toHaveLength(11);
  });

  it.each(REGIOS)("$slug: titel ≤ 60 en beschrijving 120–160 tekens", (regio) => {
    expect(regio.title.length).toBeLessThanOrEqual(60);
    expect(regio.description.length).toBeGreaterThanOrEqual(120);
    expect(regio.description.length).toBeLessThanOrEqual(160);
  });

  it.each(REGIOS)("$slug: H1 en titel bevatten het zoekwoord en de Engelse naam", (regio) => {
    const naam = regio.name.toLowerCase();
    expect(regio.h1.toLowerCase()).toContain("dehumidifier");
    expect(regio.h1.toLowerCase()).toContain(naam);
    expect(regio.title.toLowerCase()).toContain("dehumidifier");
    expect(regio.title.toLowerCase()).toContain(naam);
  });

  it.each(REGIOS)("$slug: minstens 450 woorden eigen tekst", (regio) => {
    expect(woorden(regioTekst(regio))).toBeGreaterThanOrEqual(450);
  });

  it.each(REGIOS)("$slug: Brits Engels, geen Amerikaanse spelling", (regio) => {
    expect(regioTekst(regio)).not.toMatch(/\b(meters?|liters?|mold|color|center|apartment)\b/i);
  });

  it.each(REGIOS)("$slug: dezelfde vragen, toestellen en werven als het Nederlands", (regio) => {
    const nl = REGIO_BY_SLUG[regio.slug];
    expect(regio.faq).toHaveLength(nl.faq.length);
    for (const f of regio.faq) {
      expect(f.q).toMatch(/\S\?$/);
      expect(woorden(f.a)).toBeGreaterThanOrEqual(20);
    }
    expect(new Set(regio.faq.map((f) => f.q)).size).toBe(regio.faq.length);
    expect(regio.toestellen.items.map((t) => t.key)).toEqual(nl.toestellen.items.map((t) => t.key));
    for (const t of regio.toestellen.items) expect(PRODUCTS[t.key]).toBeDefined();
    expect(regio.realisaties.slugs).toEqual(nl.realisaties.slugs);
    for (const s of regio.realisaties.slugs) expect(REALISATIES.some((r) => r.slug === s)).toBe(true);
    expect(regio.beeld.src).toBe(nl.beeld.src);
  });

  it("heeft per provincie een eigen titel, description, intro en uitleg", () => {
    for (const veld of [
      (r: RegioEn) => r.title,
      (r: RegioEn) => r.description,
      (r: RegioEn) => r.intro.join(" "),
      (r: RegioEn) => r.bouw.alineas[0],
    ]) {
      expect(new Set(REGIOS.map(veld)).size).toBe(REGIOS.length);
    }
  });

  it("gebruikt nergens een em-dash in zichtbare tekst", () => {
    const fout = REGIOS.filter((r) =>
      [regioTekst(r), r.title, r.description, r.kicker, r.beeld.alt, ...(r.heroFacts ?? [])]
        .join(" ")
        .includes("—"),
    ).map((r) => r.slug);
    expect(fout).toEqual([]);
  });
});

import { describe, expect, it } from "vitest";
import { REALISATIES, REALISATIE_SOORTEN, type Realisatie } from "@/data/realisaties";
import { REALISATIES_EN, REALISATIE_SOORTEN_EN } from "@/data/realisaties.en";
import { laadRealisatiesEn, realisatieInTaal, realisatiesInTaal } from "@/data/realisatiesInTaal";

/** Alles wat géén vertaalbare tekst is: moet in beide talen identiek zijn. */
const skelet = (r: Realisatie) => ({
  slug: r.slug,
  soort: r.soort,
  hero: r.hero,
  kaart: r.kaart,
  fotos: r.album.fotos.map((f) => f.src),
  meer: r.meer.slugs,
  aantallen: [
    r.tags.length,
    r.facts.length,
    r.verhaal.problemen.length,
    r.verhaal.blokken.map((b) => b.alineas.length),
    r.fiche.length,
    r.resultaat.kolommen.length,
  ],
});

describe("Engelse realisaties", () => {
  it("heeft dezelfde projecten, slugs, foto's en opbouw als het Nederlands", () => {
    expect(REALISATIES_EN.map(skelet)).toEqual(REALISATIES.map(skelet));
  });

  it("heeft dezelfde filtersoorten in dezelfde volgorde", () => {
    expect(REALISATIE_SOORTEN_EN.map((s) => s.key)).toEqual(REALISATIE_SOORTEN.map((s) => s.key));
  });

  it("is echt vertaald: geen titel of lede is gelijk aan het Nederlands", () => {
    REALISATIES_EN.forEach((en, i) => {
      expect(en.titel).not.toBe(REALISATIES[i].titel);
      expect(en.lede).not.toBe(REALISATIES[i].lede);
    });
  });

  it("houdt de React-keys per project uniek", () => {
    for (const r of REALISATIES_EN) {
      for (const lijst of [
        r.tags,
        r.facts.map((f) => f.label),
        r.verhaal.problemen,
        r.verhaal.blokken.map((b) => b.kop),
        r.fiche.map((f) => f.label),
        r.resultaat.kolommen.map((k) => k.label),
      ]) {
        expect(new Set(lijst).size, r.slug).toBe(lijst.length);
      }
    }
  });

  it("zet de vetgedrukte stapnamen even vaak als het Nederlands", () => {
    const tel = (lijst: Realisatie[]) =>
      lijst.map((r) => r.verhaal.blokken.flatMap((b) => b.alineas).join("").split("<b>").length);
    expect(tel(REALISATIES_EN)).toEqual(tel(REALISATIES));
  });

  it("geeft na het laden de Engelse versie op de Nederlandse slug", async () => {
    await laadRealisatiesEn();
    expect(realisatiesInTaal("en")).toBe(REALISATIES_EN);
    expect(realisatieInTaal("badkamer-drogen-brussel", "en")?.chip).toContain("Brussels");
    expect(realisatieInTaal("badkamer-drogen-brussel", "nl")?.chip).toContain("Brussel");
    expect(realisatieInTaal("badkamer-drogen-brussel", "nl")?.chip).not.toContain("Brussels");
  });
});

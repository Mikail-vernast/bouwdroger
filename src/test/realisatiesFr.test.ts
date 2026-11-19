import { describe, expect, it } from "vitest";
import { REALISATIES, REALISATIE_SOORTEN, type Realisatie } from "@/data/realisaties";
import { REALISATIES_FR, REALISATIE_SOORTEN_FR } from "@/data/realisaties.fr";
import { laadRealisatiesFr, realisatieInTaal, realisatiesInTaal } from "@/data/realisatiesInTaal";

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

describe("Franse realisaties", () => {
  it("heeft dezelfde projecten, slugs, foto's en opbouw als het Nederlands", () => {
    expect(REALISATIES_FR.map(skelet)).toEqual(REALISATIES.map(skelet));
  });

  it("heeft dezelfde filtersoorten in dezelfde volgorde", () => {
    expect(REALISATIE_SOORTEN_FR.map((s) => s.key)).toEqual(REALISATIE_SOORTEN.map((s) => s.key));
  });

  it("is echt vertaald: geen titel of lede is gelijk aan het Nederlands", () => {
    REALISATIES_FR.forEach((fr, i) => {
      expect(fr.titel).not.toBe(REALISATIES[i].titel);
      expect(fr.lede).not.toBe(REALISATIES[i].lede);
    });
  });

  it("houdt de React-keys per project uniek", () => {
    for (const r of REALISATIES_FR) {
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
    expect(tel(REALISATIES_FR)).toEqual(tel(REALISATIES));
  });

  it("geeft na het laden de Franse versie op de Nederlandse slug", async () => {
    await laadRealisatiesFr();
    expect(realisatiesInTaal("fr")).toBe(REALISATIES_FR);
    expect(realisatieInTaal("badkamer-drogen-brussel", "fr")?.chip).toContain("Bruxelles");
    expect(realisatieInTaal("badkamer-drogen-brussel", "nl")?.chip).toContain("Brussel");
  });
});

import { describe, expect, it } from "vitest";
import { REALISATIES } from "@/data/realisaties";
import { REGIO_ROUTES } from "@/data/regio-slugs";
import { REGIOS } from "@/data/regios";
import {
  REALISATIE_REGIO,
  leentVan,
  realisatieSlugsIn,
  regioVanRealisatie,
} from "@/data/realisatie-regio";

/**
 * De kaart realisatie → provincie draagt de interne links tussen regio- en
 * realisatiepagina's. Een tikfout in een slug geeft geen fout in de browser,
 * enkel een link die stil verdwijnt — en dan valt die werf weer uit Google.
 */
describe("realisatie → regio", () => {
  it("verwijst alleen naar bestaande realisaties en regio's", () => {
    const slugs = new Set(REALISATIES.map((r) => r.slug));
    const regios = new Set(REGIO_ROUTES.map((r) => r.slug));
    for (const [slug, regio] of Object.entries(REALISATIE_REGIO)) {
      expect(slugs.has(slug), slug).toBe(true);
      expect(regios.has(regio), regio).toBe(true);
    }
  });

  it("geeft elke regio minstens twee werven", () => {
    for (const r of REGIO_ROUTES) expect(realisatieSlugsIn(r.slug).length, r.slug).toBeGreaterThanOrEqual(2);
  });

  /*
    Of in het gebied waarvan ze haar werven leent. Dat is er één:
    Vlaams-Brabant heeft nog geen eigen gefotografeerde werf en licht die van
    Brussel uit, wat haar eigen kop ook zegt ("in Brussel en de rand").
  */
  it("de uitgelichte werven van een regiopagina liggen in die regio", () => {
    for (const regio of REGIOS) {
      const toegelaten = [regio.slug, leentVan(regio.slug)].filter(Boolean);
      for (const slug of regio.realisaties.slugs) {
        expect(toegelaten, `${regio.slug} → ${slug}`).toContain(REALISATIE_REGIO[slug]);
      }
    }
  });

  it("zonder plaatsnaam geen regio", () => {
    expect(regioVanRealisatie("levis")).toBeUndefined();
    expect(regioVanRealisatie("mancave-brugge")?.path).toBe("/bouwdroger-huren-west-vlaanderen");
  });
});

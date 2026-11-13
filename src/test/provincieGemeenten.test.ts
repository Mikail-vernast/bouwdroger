import { describe, expect, it } from "vitest";
import { STREKEN_PER_REGIO, aantalGemeenten } from "@/data/provincie-gemeenten";
import { REGIO_ROUTES } from "@/data/regio-slugs";
import { GEMEENTE_ROUTES } from "@/data/gemeente-slugs";

/**
 * De gemeentelijsten zijn met de hand opgesteld en daarna tegen de officiële
 * indeling gelegd (13-11-2026, na de fusies van 1 januari 2025). Die controle
 * is niet herhaalbaar zonder internet, dus legt deze test het resultaat vast:
 * valt er bij een latere bewerking een gemeente weg of komt er een naam dubbel
 * in, dan breekt de test in plaats van dat er stil een gat in de lijst staat.
 *
 * Antwerpen telt 78 namen en geen 67: de stadsdistricten (Deurne, Ekeren,
 * Hoboken …) staan er apart bij omdat mensen "bouwdroger huren Deurne"
 * intikken, niet "bouwdroger huren Antwerpen district Deurne".
 */
const VERWACHT: Record<string, number> = {
  antwerpen: 78,
  "oost-vlaanderen": 55,
  "vlaams-brabant": 63,
  "west-vlaanderen": 62,
  limburg: 38,
};

describe("gemeenten per provincie", () => {
  it("heeft een lijst voor elke provinciepagina", () => {
    expect(Object.keys(STREKEN_PER_REGIO).sort()).toEqual(
      REGIO_ROUTES.map((r) => r.slug).sort()
    );
  });

  it.each(Object.entries(VERWACHT))("%s telt %i gemeenten", (slug, aantal) => {
    expect(aantalGemeenten(slug)).toBe(aantal);
  });

  it.each(Object.keys(VERWACHT))("%s: elke streek draagt een kenmerk", (slug) => {
    for (const streek of STREKEN_PER_REGIO[slug]) {
      expect(streek.naam.length).toBeGreaterThan(3);
      expect(streek.kenmerk.split(/\s+/).length).toBeGreaterThanOrEqual(10);
      expect(streek.gemeenten.length).toBeGreaterThan(0);
    }
  });

  /*
    Eén gemeente hoort bij één provincie. Dit ving de twee fouten die de
    fusies van 2025 achterlieten: Zwijndrecht stond nog onder Antwerpen
    terwijl het in Beveren-Kruibeke-Zwijndrecht opging en dus Oost-Vlaams is,
    en Borsbeek stond er als zelfstandige gemeente terwijl het het tiende
    district van Antwerpen werd.
  */
  it("noemt geen enkele gemeente twee keer", () => {
    const gezien = new Map<string, string>();
    const dubbel: string[] = [];
    for (const [slug, streken] of Object.entries(STREKEN_PER_REGIO)) {
      for (const naam of streken.flatMap((s) => s.gemeenten)) {
        const eerder = gezien.get(naam);
        if (eerder) dubbel.push(`${naam}: ${eerder} ↔ ${slug}`);
        gezien.set(naam, slug);
      }
    }
    expect(dubbel).toEqual([]);
  });

  /*
    De provinciepagina en de sitemap maken van een gemeentenaam een link door
    hem op naam te zoeken in `gemeente-slugs.ts`. Staat dezelfde gemeente hier
    anders gespeld, dan blijft ze stil gewone tekst en verliest haar pagina de
    enige link die ze vanaf haar provincie krijgt.
  */
  it("spelt elke gemeente met een eigen pagina net zo als daar", () => {
    for (const gemeente of GEMEENTE_ROUTES) {
      const namen = (STREKEN_PER_REGIO[gemeente.regio] ?? []).flatMap((s) => s.gemeenten);
      expect(namen, `${gemeente.name} (${gemeente.regio})`).toContain(gemeente.name);
    }
  });
});

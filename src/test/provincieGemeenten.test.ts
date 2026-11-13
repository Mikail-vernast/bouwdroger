import { describe, expect, it } from "vitest";
import { BRUSSEL_STREKEN, STREKEN_PER_REGIO, aantalGemeenten } from "@/data/provincie-gemeenten";
import { REGIO_ROUTES } from "@/data/regio-slugs";
import { GEMEENTE_ROUTES } from "@/data/gemeente-slugs";

/**
 * De gemeentelijsten zijn met de hand opgesteld en daarna tegen de officiële
 * indeling gelegd (13-11-2026, na de fusies van 1 januari 2025). Die controle
 * is niet herhaalbaar zonder internet, dus legt deze test het resultaat vast:
 * valt er bij een latere bewerking een gemeente weg of komt er een naam dubbel
 * in, dan breekt de test in plaats van dat er stil een gat in de lijst staat.
 *
 * Antwerpen telt 77 namen en geen 67: de provincie heeft 67 gemeenten, maar de
 * stadsdistricten (Deurne, Ekeren, Hoboken …) staan er apart bij omdat mensen
 * "bouwdroger huren Deurne" intikken, niet "bouwdroger huren Antwerpen district
 * Deurne". Op de sitemap heet het daarom "77 plaatsen" en niet "77 gemeenten".
 *
 * Lillo staat er niet meer bij. Het polderdorp telt een veertigtal inwoners;
 * een naam in een lijst van waar we leveren wekt de indruk dat daar iets te
 * leveren valt, en de pagina die erbij hoorde zou over niets gaan. Weggehaald
 * op 13-11-2026.
 */
const VERWACHT: Record<string, number> = {
  antwerpen: 77,
  "oost-vlaanderen": 55,
  "vlaams-brabant": 63,
  "west-vlaanderen": 62,
  limburg: 38,
  brussel: 19,
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
  /*
    De streek zegt iets over de bodem en dus over het drogen, dus een verkeerde
    indeling zegt iets verkeerds. Hemiksem en Schelle stonden onder de
    Zuidrand, en Bornem, Puurs-Sint-Amands en Willebroek onder de Rupelstreek,
    terwijl die drie tot Klein-Brabant horen. Nagerekend op 13-11-2026.
  */
  it("deelt de Rupelstreek in zoals ze officieel loopt", () => {
    const streek = STREKEN_PER_REGIO.antwerpen.find((s) => s.naam === "Rupelstreek");
    expect(streek?.gemeenten.slice().sort()).toEqual(
      ["Boom", "Hemiksem", "Niel", "Rumst", "Schelle"].sort()
    );
  });

  it("spelt elke gemeente met een eigen pagina net zo als daar", () => {
    for (const gemeente of GEMEENTE_ROUTES) {
      const namen = (STREKEN_PER_REGIO[gemeente.regio] ?? []).flatMap((s) => s.gemeenten);
      expect(namen, `${gemeente.name} (${gemeente.regio})`).toContain(gemeente.name);
    }
  });
});

/*
  Brussel zat tot 13-11-2026 bewust buiten `STREKEN_PER_REGIO`: die record is
  de lijst per regiopagina, en het gewest had er geen, dus zou een
  `brussel`-sleutel een kop opleveren die naar een 404 linkt. Sinds
  /bouwdroger-huren-brussel bestaat, staat het er gewoon in. Deze test bewaakt
  wat eraan bijzonder blijft: negentien gemeenten, en geen naam die ook onder
  een provincie staat, want een gemeente hoort bij één gebied.
*/
describe("het Brussels gewest", () => {
  const namen = BRUSSEL_STREKEN.flatMap((s) => s.gemeenten);

  it("telt de negentien gemeenten van het gewest", () => {
    expect(namen).toHaveLength(19);
    expect(new Set(namen).size).toBe(19);
  });

  it("staat in de provincielijst onder zijn eigen sleutel", () => {
    expect(STREKEN_PER_REGIO.brussel).toBe(BRUSSEL_STREKEN);
    expect(REGIO_ROUTES.some((r) => r.slug === "brussel")).toBe(true);
  });

  it("deelt geen gemeente met een provincie", () => {
    const vlaams = new Set(
      Object.entries(STREKEN_PER_REGIO)
        .filter(([slug]) => slug !== "brussel")
        .flatMap(([, streken]) => streken.flatMap((s) => s.gemeenten))
    );
    expect(namen.filter((naam) => vlaams.has(naam))).toEqual([]);
  });

  it("draagt per streek een kenmerk", () => {
    for (const streek of BRUSSEL_STREKEN) {
      expect(streek.naam.length).toBeGreaterThan(3);
      expect(streek.kenmerk.split(/\s+/).length).toBeGreaterThanOrEqual(10);
      expect(streek.gemeenten.length).toBeGreaterThan(0);
    }
  });
});

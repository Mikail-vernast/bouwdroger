import { describe, expect, it } from "vitest";
import {
  NEDERLANDSE_STREKEN,
  STREKEN_PER_REGIO,
  WAALSE_STREKEN,
  aantalBuiten,
} from "@/data/provincie-gemeenten";
import { REGIO_ROUTES } from "@/data/regio-slugs";

/**
 * De lijsten buiten Vlaanderen en Brussel, vastgelegd zoals ze op 14-11-2026
 * geverifieerd zijn.
 *
 * Ze komen niet uit het hoofd maar uit de lijst van het Waals Gewest en die van
 * de Nederlandse gemeenten, en zijn daarna tegen de officiële aantallen gelegd.
 * Die controle is niet herhaalbaar zonder internet, dus legt deze test het
 * resultaat vast: valt er bij een latere bewerking een gemeente weg of komt er
 * een naam dubbel in, dan breekt de test in plaats van dat er stil een gat in
 * de lijst staat. Dezelfde reden als bij `provincieGemeenten.test.ts`.
 *
 * Wallonië telt 261 gemeenten en geen 262: Bastenaken en Bertogne fuseerden op
 * 2 december 2024. Dat cijfer stond in mijn eerste opzet fout, en het is precies
 * het soort fout dat deze test moet tegenhouden.
 */
const WALLONIE: Record<string, number> = {
  "waals-brabant": 27,
  henegouwen: 69,
  luik: 84,
  namen: 38,
  luxemburg: 43,
};

const NEDERLAND: Record<string, number> = {
  "noord-brabant": 56,
  zeeland: 13,
  "nederlands-limburg": 31,
};

describe("werkgebied buiten Vlaanderen", () => {
  it.each(Object.entries(WALLONIE))("Waals-Brabant en de rest: %s telt %i gemeenten", (sleutel, aantal) => {
    const streken = WAALSE_STREKEN[sleutel];
    expect(streken, sleutel).toBeDefined();
    expect(streken.reduce((n, s) => n + s.gemeenten.length, 0)).toBe(aantal);
  });

  it("telt 261 Waalse gemeenten in totaal", () => {
    expect(aantalBuiten(WAALSE_STREKEN)).toBe(261);
  });

  it.each(Object.entries(NEDERLAND))("%s telt %i gemeenten", (sleutel, aantal) => {
    const streken = NEDERLANDSE_STREKEN[sleutel];
    expect(streken, sleutel).toBeDefined();
    expect(streken.reduce((n, s) => n + s.gemeenten.length, 0)).toBe(aantal);
  });

  it("telt 100 Nederlandse gemeenten in de grensstreek", () => {
    expect(aantalBuiten(NEDERLANDSE_STREKEN)).toBe(100);
  });

  it("noemt geen enkele gemeente twee keer", () => {
    const alle = [
      ...Object.values(WAALSE_STREKEN).flatMap((s) => s.flatMap((x) => x.gemeenten)),
      ...Object.values(NEDERLANDSE_STREKEN).flatMap((s) => s.flatMap((x) => x.gemeenten)),
    ];
    const gezien = new Set<string>();
    const dubbel = alle.filter((naam) => (gezien.has(naam) ? true : (gezien.add(naam), false)));
    expect(dubbel).toEqual([]);
  });

  /*
    Eén naam kan aan beide kanten van een grens bestaan, en dat is hier geen
    fout maar een feit: **Deurne** is zowel een district van Antwerpen als een
    gemeente in Noord-Brabant. Daarom staan de namen in dit blok op /sitemap
    als tekst en niet als link: `gemeenteVanPlaats("Deurne")` geeft het
    Antwerpse district, en een Nederlandse bezoeker die op zijn eigen gemeente
    drukt zou in Deurne bij Antwerpen uitkomen.

    Sinds de Nederlandse gemeenten een pagina hebben (15-11-2026) staat die
    Deurne als "Deurne (Noord-Brabant)" in de lijst, en wijst `ookVoor` die
    schrijfwijze naar `deurne-nb`. De lijst van homoniemen is daarmee leeg.

    Deze test legt de bekende gevallen vast. Komt er een naam bij die in beide
    lijsten staat, dan breekt ze, en dan hoort iemand te beslissen wat die naam
    moet doen in plaats van dat hij stil naar de verkeerde pagina linkt.
  */
  const HOMONIEMEN: string[] = [];

  it("overlapt met de Vlaamse lijsten alleen in de bekende homoniemen", () => {
    /* Een Waalse provincie met een eigen pagina staat ook in `STREKEN_PER_REGIO`;
       die telt hier niet als "Vlaams", anders overlapt ze met zichzelf. */
    const binnen = new Set(
      Object.entries(STREKEN_PER_REGIO)
        .filter(([sleutel]) => !(sleutel in WAALSE_STREKEN) && !(sleutel in NEDERLANDSE_STREKEN))
        .flatMap(([, s]) => s.flatMap((x) => x.gemeenten))
    );
    const buiten = [
      ...Object.values(WAALSE_STREKEN).flatMap((s) => s.flatMap((x) => x.gemeenten)),
      ...Object.values(NEDERLANDSE_STREKEN).flatMap((s) => s.flatMap((x) => x.gemeenten)),
    ];
    expect(buiten.filter((naam) => binnen.has(naam)).sort()).toEqual(HOMONIEMEN);
  });

  it("deelt geen enkele naam tussen Wallonië en Nederland", () => {
    const wal = Object.values(WAALSE_STREKEN).flatMap((s) => s.flatMap((x) => x.gemeenten));
    const ned = new Set(
      Object.values(NEDERLANDSE_STREKEN).flatMap((s) => s.flatMap((x) => x.gemeenten))
    );
    expect(wal.filter((naam) => ned.has(naam))).toEqual([]);
  });

  /*
    De meeste van deze gebieden hebben nog geen pagina, en dat is de reden dat
    ze buiten `STREKEN_PER_REGIO` staan: die record is de lijst per
    gebiedspagina en `provincieGemeenten.test.ts` eist dat elke sleutel daarin
    een bestaande route heeft. Krijgt een provincie haar pagina, zoals
    Waals-Brabant op 15-11-2026, dan hoort haar lijst ook in die record te
    staan, als dezelfde array. Vergeet iemand dat, dan breekt deze test.
  */
  it("staat met een eigen pagina ook in STREKEN_PER_REGIO, anders nog zonder", () => {
    const routes = new Set(REGIO_ROUTES.map((r) => r.slug));
    for (const lijst of [WAALSE_STREKEN, NEDERLANDSE_STREKEN]) {
      for (const [sleutel, streken] of Object.entries(lijst)) {
        if (routes.has(sleutel)) expect(STREKEN_PER_REGIO[sleutel], sleutel).toBe(streken);
        else expect(STREKEN_PER_REGIO[sleutel], sleutel).toBeUndefined();
      }
    }
  });

  it("draagt per streek een kenmerk van minstens tien woorden", () => {
    for (const lijst of [WAALSE_STREKEN, NEDERLANDSE_STREKEN]) {
      for (const streken of Object.values(lijst)) {
        for (const streek of streken) {
          expect(streek.naam.length).toBeGreaterThan(3);
          expect(streek.kenmerk.split(/\s+/).length, streek.naam).toBeGreaterThanOrEqual(10);
          expect(streek.gemeenten.length).toBeGreaterThan(0);
        }
      }
    }
  });

  /*
    De Franse naam hoort erbij waar hij afwijkt, want wie "Mons" intikt zoekt
    dezelfde droger als wie "Bergen" intikt. Dit controleert dat die notatie
    niet stil wegvalt bij een latere bewerking.
  */
  it("noemt de Franse naam bij de Waalse gemeenten die er een hebben", () => {
    const alle = Object.values(WAALSE_STREKEN).flatMap((s) => s.flatMap((x) => x.gemeenten));
    const tweetalig = alle.filter((naam) => / \(.+\)$/.test(naam));
    /* Zesendertig van de 261 Waalse gemeenten hebben een Nederlandse naam die
       van de Franse afwijkt. Exact vastgelegd: valt er een weg, dan verliest
       die gemeente de helft van haar zoekopdrachten. */
    expect(tweetalig.length).toBe(36);
    expect(alle).toContain("Bergen (Mons)");
    expect(alle).toContain("Doornik (Tournai)");
    expect(alle).toContain("Luik (Liège)");
  });
});

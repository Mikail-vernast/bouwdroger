/**
 * De vijf regiopagina's, zonder hun inhoud.
 *
 * Ook de plaatsnamen en de speld op de kaart staan hier, niet in `regios.ts`:
 * de homepage-kaart (`V3Regio`) heeft ze nodig, en een import van `regios.ts`
 * sleepte via `REALISATIES` ~200 kB tekst mee naar de homepage (02-11-2026).
 *
 * Dit bestandje wordt door de router (App.tsx) en de footer gelezen, en die
 * zitten in de entry-chunk die élke bezoeker op élke pagina laadt. De prose
 * van de regio's staat daarom apart in `regios.ts`, dat alleen de regiopagina
 * zelf importeert — anders reisde 30 kB Antwerpen-tekst mee naar de checkout.
 *
 * De slugs volgen de zoekopdracht ("bouwdroger huren antwerpen"), niet de
 * bestuurlijke naam: iemand zoekt "limburg", niet "provincie limburg".
 */
export interface RegioRoute {
  slug: string;
  /** Zoals de provincie in een zin staat: "in Antwerpen", "in Limburg". */
  name: string;
  /** Het pad van de pagina, zonder trailing slash — zoals de hele site. */
  path: string;
  /** Een greep uit de gemeenten — op de regiopagina én op de homepage-kaart. */
  towns: string[];
  /**
   * Positie van de speld op de kaart van **heel Belgie** (homepage).
   *
   * De achtergrond is `belgie-kaart-rood.webp`, het hele land. De percentages
   * stonden hier nog voor een kaart van alleen Vlaanderen, waardoor alle zes
   * de spelden linksboven samendrongen -- Brussel belandde zelfs boven
   * Henegouwen. Ze zijn nu uit de landsgrenzen gerekend (2,54-6,41 OL en
   * 49,50-51,51 NB), met een kleine verschuiving waar twee spelden elkaar
   * anders overlappen.
   */
  pin: { left: string; top: string };
}

export const REGIO_ROUTES: RegioRoute[] = [
  {
    slug: "antwerpen",
    name: "Antwerpen",
    path: "/bouwdroger-huren-antwerpen",
    towns: [
      "Antwerpen", "Aartselaar", "Mechelen", "Turnhout", "Lier", "Boom", "Kontich", "Geel", "Mol",
      "Herentals", "Heist-op-den-Berg", "Brasschaat", "Schoten", "Wilrijk", "Edegem", "Duffel",
      "Mortsel",
    ],
    pin: { left: "57%", top: "12%" },
  },
  {
    slug: "oost-vlaanderen",
    name: "Oost-Vlaanderen",
    path: "/bouwdroger-huren-oost-vlaanderen",
    towns: [
      "Gent", "Aalst", "Sint-Niklaas", "Dendermonde", "Lokeren", "Wetteren", "Deinze", "Eeklo",
      "Ninove", "Geraardsbergen", "Oudenaarde", "Ronse", "Zottegem", "Temse", "Beveren", "Zelzate",
    ],
    pin: { left: "34%", top: "20%" },
  },
  {
    slug: "vlaams-brabant",
    name: "Vlaams-Brabant",
    path: "/bouwdroger-huren-vlaams-brabant",
    towns: [
      "Leuven", "Vilvoorde", "Halle", "Aarschot", "Tienen", "Zaventem", "Dilbeek", "Grimbergen",
      "Diest", "Asse", "Overijse", "Tervuren", "Machelen", "Beersel", "Sint-Pieters-Leeuw", "Haacht",
    ],
    pin: { left: "58%", top: "32%" },
  },
  {
    slug: "west-vlaanderen",
    name: "West-Vlaanderen",
    path: "/bouwdroger-huren-west-vlaanderen",
    towns: [
      "Brugge", "Kortrijk", "Oostende", "Roeselare", "Ieper", "Waregem", "Knokke-Heist", "Veurne",
      "Torhout", "Menen", "Izegem", "Diksmuide", "Blankenberge", "Poperinge", "Tielt", "Harelbeke",
    ],
    pin: { left: "15%", top: "30%" },
  },
  {
    slug: "limburg",
    name: "Limburg",
    path: "/bouwdroger-huren-limburg",
    towns: [
      "Hasselt", "Genk", "Sint-Truiden", "Tongeren", "Beringen", "Lommel", "Bilzen", "Maasmechelen",
      "Houthalen", "Heusden-Zolder", "Diepenbeek", "Bree", "Peer", "Maaseik", "Lanaken",
      "Leopoldsburg",
    ],
    pin: { left: "76%", top: "23%" },
  },
];

export const REGIO_BY_PATH: Record<string, RegioRoute> = Object.fromEntries(
  REGIO_ROUTES.map((r) => [r.path, r])
);

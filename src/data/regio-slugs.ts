/**
 * De zes regiopagina's, zonder hun inhoud.
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
 *
 * Brussel staat hier sinds 13-11-2026 bij. Het gewest hoort niet bij een
 * provincie, maar het hoort wel bij het werkgebied, en tot die datum stond het
 * op de homepage en op /sitemap als dode tekst tussen vijf links -- precies de
 * indruk dat we er niet komen. De negentien gemeenten zijn tweetalig; de
 * pagina is Nederlandstalig en noemt de Franse naam erbij waar die anders is,
 * want iemand die "Ixelles" intikt zoekt dezelfde droger als iemand die
 * "Elsene" intikt.
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
    slug: "brussel",
    name: "Brussel",
    path: "/bouwdroger-huren-brussel",
    towns: [
      "Brussel", "Schaarbeek", "Elsene", "Anderlecht", "Sint-Gillis", "Sint-Jans-Molenbeek",
      "Etterbeek", "Jette", "Vorst", "Ukkel", "Evere", "Oudergem", "Sint-Lambrechts-Woluwe",
      "Sint-Pieters-Woluwe", "Watermaal-Bosvoorde", "Ganshoren", "Koekelberg",
      "Sint-Agatha-Berchem", "Sint-Joost-ten-Node",
    ],
    /*
      Brussel ligt midden in Vlaams-Brabant, dus de twee spelden kunnen niet
      allebei exact staan zonder over elkaar te vallen. Deze staat net ten
      zuidwesten van die van de provincie, in de richting van Halle. Stond
      eerder hardgecodeerd in `V3Regio`; nu de gewestpagina bestaat hoort hij
      hier, bij de vijf andere.
    */
    pin: { left: "43%", top: "41%" },
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
  /*
    De eerste Waalse provincie, sinds 15-11-2026. Ze ligt dichter bij ons
    magazijn dan het Maasland: Waterloo en Waver zitten op een klein uur over
    de ring. De namen staan hier in het Nederlands, zoals de rest van de site;
    de Franse naam hangt via `ookVoor` aan elke gemeentepagina.

    De speld staat ten zuidoosten van die van Brussel, op Ottignies, het
    midden van de provincie (4,57 OL, 50,67 NB in de grenzen hierboven).
  */
  {
    slug: "waals-brabant",
    name: "Waals-Brabant",
    path: "/bouwdroger-huren-waals-brabant",
    towns: [
      "Waver", "Nijvel", "Eigenbrakel", "Waterloo", "Ottignies-Louvain-la-Neuve", "Tubeke",
      "Rixensart", "Lasne", "Terhulpen", "Genepiën", "Geldenaken", "Perwijs",
      "Court-Saint-Étienne", "Villers-la-Ville", "Graven", "Chaumont-Gistoux",
    ],
    pin: { left: "53%", top: "44%" },
  },
  /*
    Henegouwen, sinds 15-11-2026. De speld staat tussen Bergen en Charleroi
    (4,0 OL, 50,45 NB), het zwaartepunt van de provincie.
  */
  {
    slug: "henegouwen",
    name: "Henegouwen",
    path: "/bouwdroger-huren-henegouwen",
    towns: [
      "Charleroi", "Bergen", "Doornik", "La Louvière", "Moeskroen", "Aat", "Edingen", "Zinnik",
      "'s-Gravenbrakel", "Binche", "Lessen", "Komen-Waasten", "Fleurus", "Châtelet", "Thuin",
      "Saint-Ghislain",
    ],
    pin: { left: "38%", top: "54%" },
  },
  /*
    Namen, sinds 15-11-2026. De speld staat tussen Namen en Dinant
    (4,8 OL, 50,25 NB).
  */
  {
    slug: "namen",
    name: "Namen",
    path: "/bouwdroger-huren-namen",
    towns: ["Namen", "Gembloers", "Dinant", "Andenne", "Sambreville", "Ciney", "Éghezée", "Jemeppe-sur-Sambre", "Rochefort", "Walcourt", "Philippeville", "Couvin", "Fosses-la-Ville", "Profondeville", "Florennes", "Yvoir"],
    pin: { left: "58%", top: "63%" },
  },
  /*
    De Belgische provincie Luxemburg, sinds 15-11-2026: onze verste ritten. De
    speld staat bij Libramont (5,0 OL, 49,9 NB).
  */
  {
    slug: "luxemburg",
    name: "Luxemburg",
    path: "/bouwdroger-huren-luxemburg",
    towns: ["Aarlen", "Bastenaken", "Marche-en-Famenne", "Libramont-Chevigny", "Virton", "Durbuy", "Bouillon", "Neufchâteau", "Saint-Hubert", "Vielsalm", "Houffalize", "La Roche-en-Ardenne", "Bertrix", "Aubange", "Florenville", "Habay"],
    pin: { left: "62%", top: "80%" },
  },
];

export const REGIO_BY_PATH: Record<string, RegioRoute> = Object.fromEntries(
  REGIO_ROUTES.map((r) => [r.path, r])
);

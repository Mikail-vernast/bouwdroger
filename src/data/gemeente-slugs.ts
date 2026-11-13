/**
 * De gemeentepagina's, zonder hun inhoud.
 *
 * Zelfde opzet en zelfde reden als `regio-slugs.ts`: dit bestandje wordt door
 * de router (`App.tsx`) en door `V3Regio` op de homepage gelezen, en die zitten
 * in de entry-chunk die élke bezoeker op élke pagina laadt. De teksten staan
 * daarom apart in `gemeenten.ts`, dat alleen de gemeentepagina zelf importeert.
 *
 * De slugs volgen de zoekopdracht ("bouwdroger huren mechelen"), niet de
 * bestuurlijke naam.
 *
 * **Pilot (12-11-2026).** Voorlopig alleen de zeventien gemeenten van de
 * provincie Antwerpen die al op de homepage stonden. Reden: honderd pagina's
 * die enkel in plaatsnaam verschillen zijn precies wat Google *doorway pages*
 * noemt en uitfiltert — en dat zou ook de vijf provinciepagina's meeslepen die
 * nu wél werken (64% eigen tekst, gemeten 12-11-2026). Eerst meten in Search
 * Console of deze zeventien ranken; pas daarna de overige tachtig.
 *
 * Een gemeente toevoegen raakt drie bestanden: hier een entry, de tekst in
 * `gemeenten.ts`, en niets meer — de route, de sitemap, de chips op de
 * homepage en de lijst op de provinciepagina leiden zich hieruit af.
 */
export interface GemeenteRoute {
  slug: string;
  /** Zoals de gemeente in een zin staat: "in Mechelen", "in Heist-op-den-Berg". */
  name: string;
  /** Het pad van de pagina, zonder trailing slash — zoals de hele site. */
  path: string;
  /** De slug van de provincie waar ze onder valt; zie `regio-slugs.ts`. */
  regio: string;
  /** De hoofdpostcode. Staat op de pagina en in de LocalBusiness-schema. */
  postcode: string;
  /**
   * Hoe de gemeente in het kruimelpad staat, als haar naam daar botst met de
   * provincie erboven. Het pad las "Home / Antwerpen / Antwerpen" — twee
   * niveaus met hetzelfde label zeggen een bezoeker én een crawler niets.
   * Alleen de stad Antwerpen heeft dit nodig; laat het elders weg.
   */
  kruimel?: string;
  /**
   * Andere plaatsnamen die deze pagina dekt.
   *
   * Berendrecht en Zandvliet liggen in dezelfde polder achter de haven en
   * delen hun bodem, hun grondwaterstand en hun rit: twee pagina's zouden twee
   * keer hetzelfde zeggen. Ze krijgen er één, en `gemeenteVanPlaats()` stuurt
   * ook "Zandvliet" daarheen zodat die naam in de streeklijst en op de sitemap
   * geen dode tekst blijft.
   */
  ookVoor?: string[];
}

const gemeente = (
  name: string,
  slug: string,
  postcode: string,
  regio = "antwerpen"
): GemeenteRoute => ({
  slug,
  name,
  path: `/bouwdroger-huren-${slug}`,
  regio,
  postcode,
});

export const GEMEENTE_ROUTES: GemeenteRoute[] = [
  { ...gemeente("Antwerpen", "antwerpen-stad", "2000"), kruimel: "Antwerpen stad" },
  /*
    De districten. Ze stonden als gewone tekst in de streeklijst omdat ze geen
    eigen pagina hadden, terwijl mensen wel degelijk "bouwdroger huren Deurne"
    intikken en niet "bouwdroger huren Antwerpen district Deurne" -- dat is ook
    de reden dat `provincie-gemeenten.ts` ze apart telt.

    Ze staan hier alleen omdat er per district iets eigens te zeggen valt: het
    souterrain van een Zurenborgs herenhuis is een ander probleem dan de
    tuinwijk van Deurne of de kelder van Merksem tegen het Albertkanaal. Waar
    dat niet zo is -- Berendrecht, Zandvliet, Lillo -- blijft de naam gewone
    tekst, want een dunne pagina kost meer dan ze opbrengt.

    /bouwdroger-huren-antwerpen-stad blijft de koepel: hij gaat over de stad en
    haar districten samen, deze pagina's over één district.
  */
  gemeente("Berchem", "berchem", "2600"),
  gemeente("Borgerhout", "borgerhout", "2140"),
  gemeente("Deurne", "deurne", "2100"),
  gemeente("Merksem", "merksem", "2170"),
  gemeente("Hoboken", "hoboken", "2660"),
  gemeente("Ekeren", "ekeren", "2180"),
  {
    ...gemeente("Berendrecht", "berendrecht-zandvliet", "2040"),
    ookVoor: ["Zandvliet"],
  },
  gemeente("Borsbeek", "borsbeek", "2150"),
  gemeente("Aartselaar", "aartselaar", "2630"),
  /*
    Oost-Vlaanderen, te beginnen bij het Waasland. Dat is geen willekeurige
    keuze: het Waasland ligt dichter bij ons magazijn dan de helft van de
    Kempen, het is de streek waar we na onze eigen provincie het vaakst rijden,
    en het is de enige plek buiten Antwerpen waar afhalen voor een klant echt
    loont. De rest van de provincie volgt per streek.
  */
  gemeente("Temse", "temse", "9140", "oost-vlaanderen"),
  gemeente("Beveren-Kruibeke-Zwijndrecht", "beveren-kruibeke-zwijndrecht", "9120", "oost-vlaanderen"),
  gemeente("Sint-Niklaas", "sint-niklaas", "9100", "oost-vlaanderen"),
  gemeente("Waasmunster", "waasmunster", "9250", "oost-vlaanderen"),
  gemeente("Lokeren", "lokeren", "9160", "oost-vlaanderen"),
  gemeente("Sint-Gillis-Waas", "sint-gillis-waas", "9170", "oost-vlaanderen"),
  gemeente("Stekene", "stekene", "9190", "oost-vlaanderen"),
  /*
    De Kempen. Zandgrond, vrijstaande bebouwing en de koudste winterwerven van
    Vlaanderen -- behalve in Beerse en Rijkevorsel, waar de steenbakkerijen hun
    klei uit eigen putten halen, en in de valleien van de Nete en de Laak, waar
    het water terugkomt. Die drie situaties vragen drie opstellingen, en dat is
    wat deze pagina's uit elkaar houdt.
  */
  gemeente("Grobbendonk", "grobbendonk", "2280"),
  gemeente("Herenthout", "herenthout", "2270"),
  gemeente("Vorselaar", "vorselaar", "2290"),
  gemeente("Lille", "lille", "2275"),
  gemeente("Vosselaar", "vosselaar", "2350"),
  gemeente("Beerse", "beerse", "2340"),
  gemeente("Rijkevorsel", "rijkevorsel", "2310"),
  gemeente("Merksplas", "merksplas", "2330"),
  gemeente("Hoogstraten", "hoogstraten", "2320"),
  gemeente("Oud-Turnhout", "oud-turnhout", "2360"),
  gemeente("Arendonk", "arendonk", "2370"),
  gemeente("Ravels", "ravels", "2380"),
  gemeente("Baarle-Hertog", "baarle-hertog", "2387"),
  gemeente("Retie", "retie", "2470"),
  gemeente("Dessel", "dessel", "2480"),
  gemeente("Kasterlee", "kasterlee", "2460"),
  gemeente("Olen", "olen", "2250"),
  gemeente("Westerlo", "westerlo", "2260"),
  gemeente("Herselt", "herselt", "2230"),
  gemeente("Hulshout", "hulshout", "2235"),
  gemeente("Laakdal", "laakdal", "2430"),
  gemeente("Meerhout", "meerhout", "2450"),
  gemeente("Balen", "balen", "2490"),
  /*
    De Noordrand en de Noorderkempen. Villagebied met grote volumes en
    kelderverdiepingen aan de ene kant, polder en zandgrond aan de andere: de
    kaart van Stabroek is een andere werf dan die van Kalmthout, en dat is ook
    waarom ze elk een eigen pagina hebben.
  */
  gemeente("Wommelgem", "wommelgem", "2160"),
  gemeente("Wijnegem", "wijnegem", "2110"),
  gemeente("Ranst", "ranst", "2520"),
  gemeente("Schilde", "schilde", "2970"),
  gemeente("Zoersel", "zoersel", "2980"),
  gemeente("Zandhoven", "zandhoven", "2240"),
  gemeente("Malle", "malle", "2390"),
  gemeente("Brecht", "brecht", "2960"),
  gemeente("Kapellen", "kapellen", "2950"),
  gemeente("Stabroek", "stabroek", "2940"),
  gemeente("Kalmthout", "kalmthout", "2920"),
  gemeente("Wuustwezel", "wuustwezel", "2990"),
  gemeente("Essen", "essen", "2910"),
  /*
    De tweede ring: de gemeenten rond het magazijn, de Rupelstreek, Klein-
    Brabant en de Netevallei. Ze staan er pas sinds 13-11-2026 en alleen omdat
    er per gemeente iets eigens te zeggen viel -- de kleiputten van Niel en
    Hemiksem, het hoogwater van de Nete in Berlaar, de serres van
    Sint-Katelijne-Waver. Dat blijft de lat: geen pagina zonder eigen verhaal.
  */
  gemeente("Boechout", "boechout", "2530"),
  gemeente("Hove", "hove", "2540"),
  gemeente("Lint", "lint", "2547"),
  gemeente("Hemiksem", "hemiksem", "2620"),
  gemeente("Niel", "niel", "2845"),
  gemeente("Rumst", "rumst", "2840"),
  gemeente("Schelle", "schelle", "2627"),
  gemeente("Bornem", "bornem", "2880"),
  gemeente("Puurs-Sint-Amands", "puurs-sint-amands", "2870"),
  gemeente("Willebroek", "willebroek", "2830"),
  gemeente("Berlaar", "berlaar", "2590"),
  gemeente("Bonheiden", "bonheiden", "2820"),
  gemeente("Nijlen", "nijlen", "2560"),
  gemeente("Putte", "putte", "2580"),
  gemeente("Sint-Katelijne-Waver", "sint-katelijne-waver", "2860"),
  gemeente("Mechelen", "mechelen", "2800"),
  gemeente("Turnhout", "turnhout", "2300"),
  gemeente("Lier", "lier", "2500"),
  gemeente("Boom", "boom", "2850"),
  gemeente("Kontich", "kontich", "2550"),
  gemeente("Geel", "geel", "2440"),
  gemeente("Mol", "mol", "2400"),
  gemeente("Herentals", "herentals", "2200"),
  gemeente("Heist-op-den-Berg", "heist-op-den-berg", "2220"),
  gemeente("Brasschaat", "brasschaat", "2930"),
  gemeente("Schoten", "schoten", "2900"),
  gemeente("Wilrijk", "wilrijk", "2610"),
  gemeente("Edegem", "edegem", "2650"),
  gemeente("Duffel", "duffel", "2570"),
  gemeente("Mortsel", "mortsel", "2640"),
];

export const GEMEENTE_BY_PATH: Record<string, GemeenteRoute> = Object.fromEntries(
  GEMEENTE_ROUTES.map((g) => [g.path, g])
);

/**
 * De gemeentepagina bij een plaatsnaam zoals die op de homepage-kaart staat,
 * of `undefined` wanneer die gemeente (nog) geen eigen pagina heeft.
 *
 * Op de kaart heet de stad "Antwerpen"; haar pagina heeft de slug
 * `antwerpen-stad`, want `/bouwdroger-huren-antwerpen` is al de provincie.
 * Daarom matcht deze functie op `name` en niet op de slug.
 */
export function gemeenteVanPlaats(plaats: string): GemeenteRoute | undefined {
  return GEMEENTE_ROUTES.find((g) => g.name === plaats || g.ookVoor?.includes(plaats));
}

/** Alle gemeentepagina's binnen één provincie, in de volgorde hierboven. */
export function gemeentenInRegio(regioSlug: string): GemeenteRoute[] {
  return GEMEENTE_ROUTES.filter((g) => g.regio === regioSlug);
}

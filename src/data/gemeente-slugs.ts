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
  gemeente("Aartselaar", "aartselaar", "2630"),
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
  return GEMEENTE_ROUTES.find((g) => g.name === plaats);
}

/** Alle gemeentepagina's binnen één provincie, in de volgorde hierboven. */
export function gemeentenInRegio(regioSlug: string): GemeenteRoute[] {
  return GEMEENTE_ROUTES.filter((g) => g.regio === regioSlug);
}

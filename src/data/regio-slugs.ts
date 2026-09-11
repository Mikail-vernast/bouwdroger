/**
 * De vijf regiopagina's, zonder hun inhoud.
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
}

export const REGIO_ROUTES: RegioRoute[] = [
  { slug: "antwerpen", name: "Antwerpen", path: "/bouwdroger-huren-antwerpen" },
  { slug: "oost-vlaanderen", name: "Oost-Vlaanderen", path: "/bouwdroger-huren-oost-vlaanderen" },
  { slug: "vlaams-brabant", name: "Vlaams-Brabant", path: "/bouwdroger-huren-vlaams-brabant" },
  { slug: "west-vlaanderen", name: "West-Vlaanderen", path: "/bouwdroger-huren-west-vlaanderen" },
  { slug: "limburg", name: "Limburg", path: "/bouwdroger-huren-limburg" },
];

export const REGIO_BY_PATH: Record<string, RegioRoute> = Object.fromEntries(
  REGIO_ROUTES.map((r) => [r.path, r])
);

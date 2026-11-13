import { REGIO_ROUTES, type RegioRoute } from "@/data/regio-slugs";

/**
 * In welke provincie elke realisatie ligt.
 *
 * Waarom dit bestaat (03-11-2026): van de 22 realisaties stonden er 19 niet in
 * Google ("onbekend" of "gevonden, niet geïndexeerd"). Ze hadden elk maar 2 à 7
 * interne links, en geen enkele vanuit een pagina die Google wél belangrijk
 * vindt. Met deze kaart linkt elke regiopagina naar al haar werven, en linkt
 * elke werf terug naar haar regio: een cluster dat Google samen leert kennen.
 *
 * Projecten zonder plaatsnaam (winkelpand, bedrijfsgebouw, woning) staan er
 * bewust niet in: liever geen link dan een verkeerde provincie.
 *
 * Bewust een apart bestandje dat alleen `regio-slugs` importeert, niet
 * `regios.ts`: de realisatiepagina mag de regioteksten niet meeslepen.
 */
export const REALISATIE_REGIO: Record<string, RegioRoute["slug"]> = {
  "vernissage-boom": "antwerpen",
  "mnr-w-antwerpen": "antwerpen",
  "mnr-k-putte": "antwerpen",
  "mevr-k-wintam": "antwerpen",
  "mevr-j-j-kontich": "antwerpen",
  "mevr-j-berchem": "antwerpen",
  "dhr-p-merksem": "antwerpen",
  "dhr-e-schilde": "antwerpen",
  "dhr-d-c-antwerpen": "antwerpen",
  "mevr-b-a-lokeren": "oost-vlaanderen",
  "mevr-a-r-berlare": "oost-vlaanderen",
  "mevr-g-b-sint-pieters-woluwe": "brussel",
  "mnr-s-brussel": "brussel",
  "dhr-h-brussel": "brussel",
  "mnr-n-v-oostende": "west-vlaanderen",
  "mancave-brugge": "west-vlaanderen",
  "mnr-l-hasselt": "limburg",
  "mnr-j-bocholt": "limburg",
};

/**
 * Een gebied zonder eigen werf leent die van zijn buur.
 *
 * Vlaams-Brabant heeft nog geen gefotografeerde werf. De drie Brusselse werven
 * stonden daarom tot 13-11-2026 in de kaart hierboven *als* Vlaams-Brabant, en
 * dat was feitelijk onjuist: Sint-Pieters-Woluwe ligt in het gewest en niet in
 * de provincie. Nu Brussel een eigen pagina heeft staan ze waar ze liggen, en
 * leent de Vlaams-Brabantse pagina ze hier expliciet.
 *
 * Dat houdt twee dingen heel. De werf linkt terug naar één gebied in plaats
 * van naar het verkeerde. En de wervensectie op de drieënzestig
 * Vlaams-Brabantse gemeentepagina's blijft gevuld, wat nodig is: een sectie
 * die wegvalt verschuift het rood-wit-ritme van alles erna, en dan komt de FAQ
 * rood tegen het rode formulier te staan.
 *
 * Komt er een echte werf in Leuven of Halle bij, dan mag deze regel weg.
 */
const LEENT_VAN: Record<string, string> = { "vlaams-brabant": "brussel" };

/** Van welk gebied deze regio haar werven leent, als ze er zelf geen heeft. */
export function leentVan(regioSlug: string): string | undefined {
  return LEENT_VAN[regioSlug];
}

/** De regiopagina van een realisatie, of undefined als de plaats onbekend is. */
export function regioVanRealisatie(slug: string): RegioRoute | undefined {
  const regio = REALISATIE_REGIO[slug];
  return regio ? REGIO_ROUTES.find((r) => r.slug === regio) : undefined;
}

/** Alle realisatie-slugs in een regio, in de volgorde van deze kaart. */
export function realisatieSlugsIn(regioSlug: string): string[] {
  const eigen = Object.entries(REALISATIE_REGIO)
    .filter(([, regio]) => regio === regioSlug)
    .map(([slug]) => slug);
  if (eigen.length > 0) return eigen;
  const leen = LEENT_VAN[regioSlug];
  return leen ? realisatieSlugsIn(leen) : [];
}

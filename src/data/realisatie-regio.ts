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
 * Brussel valt onder de Vlaams-Brabant-pagina, die Brussel ook bedient.
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
  "mevr-g-b-sint-pieters-woluwe": "vlaams-brabant",
  "mnr-s-brussel": "vlaams-brabant",
  "dhr-h-brussel": "vlaams-brabant",
  "mnr-n-v-oostende": "west-vlaanderen",
  "mancave-brugge": "west-vlaanderen",
  "mnr-l-hasselt": "limburg",
  "mnr-j-bocholt": "limburg",
};

/** De regiopagina van een realisatie, of undefined als de plaats onbekend is. */
export function regioVanRealisatie(slug: string): RegioRoute | undefined {
  const regio = REALISATIE_REGIO[slug];
  return regio ? REGIO_ROUTES.find((r) => r.slug === regio) : undefined;
}

/** Alle realisatie-slugs in een regio, in de volgorde van deze kaart. */
export function realisatieSlugsIn(regioSlug: string): string[] {
  return Object.entries(REALISATIE_REGIO)
    .filter(([, regio]) => regio === regioSlug)
    .map(([slug]) => slug);
}

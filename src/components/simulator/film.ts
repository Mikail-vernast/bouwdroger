/*
  Het droogplan als film, per verdieping, één keer afgespeeld:
    0 → PLAATSEN        de toestellen uit het pakket vallen één voor één op hun plek
    PLAATSEN → DROOG    ze werken en het vocht trekt weg
    WEG_VAN → WEG_TOT   alles is droog: de toestellen worden weggehaald
    daarna              de verdieping staat droog en leeg (tot de volgende begint)
  Eén tijdlijn voor de 3D-woning én de dagteller, zodat ze gelijk lopen.
*/

/** Event op window wanneer de 3D-film van een verdieping echt begint (detail = start in ms). */
export const FILM_START = "ds-film-start";
/** Event op window wanneer de 3D-film op zijn modellen wacht: de verdiepingtimer houdt dan in. */
export const FILM_WACHT = "ds-film-wacht";
/**
 * Wacht de 3D-film nu op zijn modellen? Een gedeelde vlag naast het event, want
 * de wachtstand kan al gemeld zijn vóór de pagina zijn luisteraar aanzet.
 */
export const filmStatus = { wacht: false };

/** Seconden waarin de toestellen van één verdieping neergezet worden. */
export const PLAATSEN = 2.2;
/** Duur van één val, tot het toestel stilstaat. */
export const VAL = 0.6;

/** Wanneer het i-de van n toestellen begint te vallen. */
export function aankomst(i: number, n: number): number {
  return 0.25 + i * Math.min(0.42, (PLAATSEN - VAL - 0.25) / Math.max(1, n - 1));
}

/** Fractie van de cyclus waarop alles droog is. */
const DROOG = 0.78;
/** Fracties van de cyclus waartussen de toestellen weggehaald worden. */
const WEG_VAN = 0.82, WEG_TOT = 0.94;
/** Eindbeeld zonder animatie (minder beweging): alles droog, de toestellen staan er nog. */
const STILSTAND = (DROOG + WEG_VAN) / 2;

/** Hoe ver het drogen staat (0 = nat, 1 = droog) op tijd `t` binnen een cyclus. */
export function droogVoortgang(t: number, cyclus: number): number {
  return Math.min(1, Math.max(0, (t - PLAATSEN) / (cyclus * DROOG - PLAATSEN)));
}

/** Hoe ver het weghalen van een toestel staat (0 = staat er nog, 1 = weg). */
export function wegVoortgang(t: number, cyclus: number, aankomstTijd: number): number {
  // Eén voor één, in dezelfde volgorde (en hetzelfde ritme) als ze kwamen.
  const van = WEG_VAN * cyclus + (aankomstTijd - 0.25) * 0.6;
  const duur = (WEG_TOT - WEG_VAN) * cyclus * 0.45;
  return Math.min(1, Math.max(0, (t - van) / duur));
}

/** Uitlopende stuit: valt, botst twee keer zacht en ligt stil. */
export function stuit(p: number): number {
  const n = 7.5625, d = 2.75;
  if (p < 1 / d) return n * p * p;
  if (p < 2 / d) return n * (p -= 1.5 / d) * p + 0.75;
  if (p < 2.5 / d) return n * (p -= 2.25 / d) * p + 0.9375;
  return n * (p -= 2.625 / d) * p + 0.984375;
}

/** De filmklok van de actieve verdieping: `start` in ms (-1 = wacht op de eerste frame), `vast` = meteen het stilstaande beeld. */
export interface Film { start: number; vast: boolean }

/**
 * Seconden sinds de film van deze verdieping begon. Speelt één keer: na de
 * cyclus blijft hij op het eindbeeld staan (droog, toestellen weg).
 */
export function filmTijd(film: Film, cyclus: number): number {
  // Bij minder beweging: droog, maar met de toestellen nog op hun plek. Het
  // eindbeeld van de film (alles weggehaald) toonde anders een leeg huis.
  if (film.vast) return cyclus * STILSTAND;
  // Nog niet gestart (modellen laden, eerste frame nog niet getekend): begin van de film.
  if (film.start < 0) return 0;
  return Math.min(cyclus, (performance.now() - film.start) / 1000);
}

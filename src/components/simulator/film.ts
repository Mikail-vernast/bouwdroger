/*
  Het droogplan als film, per verdieping: eerst worden de toestellen uit het
  pakket één voor één neergezet, daarna slaan ze aan en trekt het vocht weg.
  Eén tijdlijn voor de 3D-woning én de dagteller, zodat ze gelijk lopen.
*/

/** Event op window wanneer de 3D-film van een verdieping echt begint (detail = start in ms). */
export const FILM_START = "ds-film-start";

/** Seconden waarin de toestellen van één verdieping neergezet worden. */
export const PLAATSEN = 2.2;
/** Duur van één val, tot het toestel stilstaat. */
export const VAL = 0.6;

/** Wanneer het i-de van n toestellen begint te vallen. */
export function aankomst(i: number, n: number): number {
  return 0.25 + i * Math.min(0.42, (PLAATSEN - VAL - 0.25) / Math.max(1, n - 1));
}

/** Hoe ver het drogen staat (0 = nat, 1 = droog) op tijd `t` binnen een cyclus. */
export function droogVoortgang(t: number, cyclus: number): number {
  return Math.min(1, Math.max(0, (t - PLAATSEN) / (cyclus * 0.85 - PLAATSEN)));
}

/** Uitlopende stuit: valt, botst twee keer zacht en ligt stil. */
export function stuit(p: number): number {
  const n = 7.5625, d = 2.75;
  if (p < 1 / d) return n * p * p;
  if (p < 2 / d) return n * (p -= 1.5 / d) * p + 0.75;
  if (p < 2.5 / d) return n * (p -= 2.25 / d) * p + 0.9375;
  return n * (p -= 2.625 / d) * p + 0.984375;
}

/** De filmklok van de actieve verdieping: `start` in ms (-1 = wacht op de eerste frame), `vast` = meteen het eindbeeld. */
export interface Film { start: number; vast: boolean }

/** Seconden sinds de film van deze verdieping begon, binnen één cyclus. */
export function filmTijd(film: Film, cyclus: number): number {
  if (film.vast) return cyclus;
  // Nog niet gestart (modellen laden, eerste frame nog niet getekend): begin van de film.
  if (film.start < 0) return 0;
  return ((performance.now() - film.start) / 1000) % cyclus;
}

/*
  Het droogplan als film: eerst worden de toestellen op elke verdieping
  neergezet (van onder naar boven), daarna droogt de woning van boven naar
  beneden. Eén tijdlijn voor de 3D-woning én de dagteller, zodat ze gelijk lopen.
*/

/** Event op window wanneer de 3D-film van een verdieping echt begint (detail = start in ms). */
export const FILM_START = "ds-film-start";
/** Event op window wanneer de 3D-film op zijn modellen wacht (Suspense-fallback). */
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

/** Uitlopende stuit: valt, botst twee keer zacht en ligt stil. */
export function stuit(p: number): number {
  const n = 7.5625, d = 2.75;
  if (p < 1 / d) return n * p * p;
  if (p < 2 / d) return n * (p -= 1.5 / d) * p + 0.75;
  if (p < 2.5 / d) return n * (p -= 2.25 / d) * p + 0.9375;
  return n * (p -= 2.625 / d) * p + 0.984375;
}

/**
 * The drying plan plays in segments, one floor at a time:
 *   plaatsen  every floor in turn, bottom to top: the devices land, nothing runs yet
 *   drogen    then top to bottom: the devices run and the floor dries from `van` to `tot`
 * Upper floors dry first (warm, moist air rises and leaves through the top), so
 * by the time the film reaches a lower floor it is already partly dry.
 */
export type FilmModus = "plaatsen" | "drogen";
export interface FilmPlan {
  modus: FilmModus;
  /** this floor's drying progress (0 = wet, 1 = dry) at the start and end of the segment */
  van: number;
  tot: number;
  /** seconds */
  duur: number;
}
/** Seconds per floor to place the devices: the drops, then a short look. */
export const PLAATS_DUUR = PLAATSEN + 0.8;
/** Seconds per floor of drying. */
export const DROOG_DUUR = 7;
/** Share of a drying segment in which the floor dries; the rest holds the result. */
const DROOG_DEEL = 0.8;

/** The film clock of the open floor: `start` in ms (-1 = waiting for the first frame), `vast` = the end frame at once. */
export interface Film extends FilmPlan { start: number; vast: boolean }

export const GEEN_PLAN: FilmPlan = { modus: "drogen", van: 0, tot: 1, duur: DROOG_DUUR };

/** Seconds since this segment began, held at its end. */
export function filmTijd(film: Film): number {
  if (film.vast) return film.duur;
  if (film.start < 0) return 0;
  return Math.min(film.duur, (performance.now() - film.start) / 1000);
}

/** How far a segment is after `sec` seconds, 0..1. */
export function voortgangNa(plan: FilmPlan, sec: number): number {
  // Placing is done when the last device has landed, not at the end of the segment.
  if (plan.modus === "plaatsen") return Math.min(1, Math.max(0, sec / PLAATSEN));
  // Drying eases in and out: the devices spin up, and the last corners take their time.
  const k = Math.min(1, Math.max(0, sec / (plan.duur * DROOG_DEEL)));
  return 0.5 - 0.5 * Math.cos(Math.PI * k);
}

/** How far this segment is, 0..1. */
export function segmentVoortgang(film: Film): number {
  return voortgangNa(film, filmTijd(film));
}

/** The floor's drying progress right now. */
export function droogStand(film: Film): number {
  if (film.modus === "plaatsen") return film.van;
  return film.van + (film.tot - film.van) * segmentVoortgang(film);
}

/**
 * How far a device has switched on, 0..1. Only while drying, and one after the
 * other in the order they landed, so the house starts up instead of switching on.
 */
export function aanVoortgang(film: Film, aankomst: number): number {
  if (film.modus !== "drogen") return 0;
  return Math.min(1, Math.max(0, (filmTijd(film) - (aankomst - 0.25) * 0.6) / 0.8));
}

/**
 * Time on the devices' clock: while placing, the film itself; while drying they
 * already stand, so the clock runs on from the end of the drops.
 */
export function toestelTijd(film: Film): number {
  return film.modus === "drogen" ? PLAATSEN + filmTijd(film) : filmTijd(film);
}

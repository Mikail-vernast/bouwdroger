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

/** Seconden waarin de toestellen van één verdieping hoogstens neergezet worden. */
export const PLAATSEN = 2.2;
/** Duur van één val, tot het toestel stilstaat. */
export const VAL = 0.6;
/** Eerste val: zodra de camera bijna op de nieuwe verdieping staat (glijden 900 ms, ease-out). */
const EERSTE = 0.3;
/** Even kijken nadat het laatste toestel staat, voor de film verdergaat. */
const NAKIJKEN = 0.35;

/** Wanneer het i-de van n toestellen begint te vallen. */
export function aankomst(i: number, n: number): number {
  return EERSTE + i * Math.min(0.3, (PLAATSEN - VAL - EERSTE) / Math.max(1, n - 1));
}

/**
 * Seconden om n toestellen op één verdieping te zetten: tot het laatste staat, plus
 * even kijken. Met een vaste duur stond een verdieping met twee toestellen 1,7 s stil.
 */
export function plaatsDuur(n: number, nakijken = true): number {
  return n > 0 ? aankomst(n - 1, n) + VAL + (nakijken ? NAKIJKEN : 0.05) : 0.8;
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
 * Het droogplan speelt in stukken, één verdieping tegelijk:
 *   plaatsen  elke verdieping, van onder naar boven: de toestellen landen, nog niets draait
 *   drogen    daarna van boven naar beneden: de toestellen draaien en de verdieping droogt
 *             van `van` naar `tot` (in beeld telkens van nat naar droog)
 * Bovenaan droogt het eerst (warme, vochtige lucht stijgt en gaat er bovenaan uit).
 */
export type FilmModus = "plaatsen" | "drogen";
export interface FilmPlan {
  modus: FilmModus;
  /** this floor's drying progress (0 = wet, 1 = dry) at the start and end of the segment */
  van: number;
  tot: number;
  /** seconds */
  duur: number;
  /** toestellen op deze verdieping, zodat de teller de echte landingen volgt */
  toestellen?: number;
  /** seconden dat de droge verdieping in beeld blijft voor de film verdergaat (0 op de laatste) */
  naloop?: number;
}
/** Seconds per floor of drying. */
export const DROOG_DUUR = 6;

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
  if (plan.modus === "plaatsen") {
    const n = plan.toestellen ?? 0;
    if (n === 0) return Math.min(1, Math.max(0, sec / Math.max(0.1, plan.duur - NAKIJKEN)));
    // Een toestel telt zodra het staat: de teller tikt mee met de landingen.
    let som = 0;
    for (let i = 0; i < n; i++) som += Math.min(1, Math.max(0, (sec - aankomst(i, n)) / VAL));
    return som / n;
  }
  // Het drogen is zichtbaar zodra de toestellen aanslaan (een ease-in toonde de
  // eerste seconde bijna niets).
  // Geen pauze op het einde, behalve de naloop: de verdieping is droog precies als
  // het stuk eindigt, zodat de laatste dag, "Alles droog" en de droge woning samenvallen.
  const k = Math.min(1, Math.max(0, (sec - 0.15) / (plan.duur - 0.15 - (plan.naloop ?? 0))));
  // Lineair: elke dag duurt even lang, zodat de laatste dag niet kruipt voor "Alles droog".
  return k;
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
  return Math.min(1, Math.max(0, (filmTijd(film) - (aankomst - EERSTE) * 0.2) / 0.35));
}

/**
 * Time on the devices' clock: while placing, the film itself; while drying they
 * already stand, so the clock runs on from the end of the drops.
 */
export function toestelTijd(film: Film): number {
  return film.modus === "drogen" ? PLAATSEN + filmTijd(film) : filmTijd(film);
}

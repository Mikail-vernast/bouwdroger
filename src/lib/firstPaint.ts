/**
 * Houdt bij of we nog in de eerste paint van het document zitten.
 *
 * De pagina's worden bij de build geprerenderd (vite-react-ssg). Een
 * framer-motion-element met `initial={{ opacity: 0 }}` krijgt die begintoestand
 * méé in die HTML: in dist/<route>/index.html staat dan letterlijk
 * `style="opacity:0"` om de titel heen. Die titel is op de meeste pagina's het
 * LCP-element, dus de bezoeker kijkt naar een lege plek tot React binnen is,
 * gehydrateerd heeft en de animatie heeft afgespeeld. Alles waar we het
 * prerenderen voor doen, gooien we daarmee weg.
 *
 * Vandaar deze vlag. `enterInitial()` geeft tijdens de eerste render `false`
 * terug — framer-motion begint dan meteen op de eindtoestand, zonder animatie
 * en zonder verborgen HTML. Zodra de app gemount is gaat de vlag om, en elk
 * element dat daarná gemonteerd wordt (een volgende route, een tab die
 * openklapt) animeert weer gewoon.
 *
 * Bewust een module-variabele en geen state: de waarde moet tijdens hydratie
 * exact hetzelfde zijn als op de server, anders klaagt React over een mismatch.
 * Hij gaat pas om in een effect, dus ná de hydratie.
 */
let painted = false;

/** Wordt door src/Layout.tsx aangeroepen zodra de app gemount is. */
export function markFirstPaintDone(): void {
  painted = true;
}

/**
 * De `initial`-prop voor een framer-motion-element dat bóven de vouw staat.
 * Geeft `false` zolang we in de eerste paint zitten, daarna de meegegeven
 * begintoestand.
 *
 * Alleen nodig waar het element bij het laden al in beeld staat. Een
 * `whileInView`-animatie verderop de pagina mag zijn `initial` gewoon houden:
 * die staat buiten het scherm en telt dus niet mee voor de LCP.
 */
export function enterInitial<T>(value: T): T | false {
  return painted ? value : false;
}

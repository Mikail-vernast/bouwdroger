/**
 * Van "hemiks" of "2620" naar een plaats met postcode.
 *
 * De bezoeker kent zijn werf als "de werf in Hemiksem", niet als 2620. Wie een
 * postcode moet opzoeken voor hij een prijs ziet, haakt af; wie een naam mag
 * typen, ziet de plaats verschijnen en klikt.
 *
 * De lijst wordt meegegeven in plaats van geïmporteerd: `src/data/plaatsen.ts`
 * is 190 kB en wordt pas geladen wanneer iemand begint te typen. Zo blijft
 * deze module klein én testbaar zonder die lijst.
 */
import type { Land } from "./levering.js";

/** `[plaatsnaam, postcode]`, zoals `src/data/plaatsen.ts` ze levert. */
export type PlaatsRegel = readonly [string, string];
export type PlaatsLijst = Record<Land, readonly PlaatsRegel[]>;

export interface Plaats {
  land: Land;
  postcode: string;
  naam: string;
}

const LANDEN: Land[] = ["BE", "NL"];

/** Kleine letters, zonder accenten en leestekens: "Liège" en "liege" zijn één plaats. */
export function normaliseer(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/*
  Hoeveel postcodes een naam draagt. "Liège" staat op 4000 tot 4032, "Glain"
  alleen op 4000 — dus wie 4000 typt, ziet Liège en niet het eerste dorp in
  alfabetische volgorde. Per lijst één keer uitgerekend.
*/
const gewichten = new WeakMap<readonly PlaatsRegel[], Map<string, number>>();
function gewicht(lijst: readonly PlaatsRegel[], naam: string): number {
  let m = gewichten.get(lijst);
  if (!m) {
    m = new Map();
    for (const [n] of lijst) m.set(n, (m.get(n) ?? 0) + 1);
    gewichten.set(lijst, m);
  }
  return m.get(naam) ?? 0;
}

/** De bekendste naam op een postcode, voor wie cijfers typt. */
function hoofdnaam(lijst: readonly PlaatsRegel[], postcode: string): string | null {
  let beste: string | null = null;
  for (const [n, p] of lijst) {
    if (p !== postcode) continue;
    if (beste === null || gewicht(lijst, n) > gewicht(lijst, beste)) beste = n;
  }
  return beste;
}

/**
 * Suggesties voor wat er getypt is, beste eerst.
 *
 * Cijfers zoeken op postcode, letters op naam: eerst namen die met de invoer
 * beginnen, dan namen waarvan een woord ermee begint ("lambrechts" vindt
 * Sint-Lambrechts-Woluwe). Eén regel per plaatsnaam per land, met de laagste
 * postcode — Antwerpen staat er één keer, niet negen keer.
 */
export function zoekPlaatsen(lijst: PlaatsLijst, invoer: string, max = 7): Plaats[] {
  const q = normaliseer(invoer);
  if (!q) return [];

  if (/^\d+$/.test(q)) {
    if (q.length > 4) return [];
    // Elke plaats op de postcode, niet alleen de bekendste: op 2500 liggen Lier
    // én Koningshooikt, en wie in Lier bouwt, moet Lier kunnen kiezen.
    const uit: (Plaats & { gewicht: number })[] = [];
    for (const land of LANDEN) {
      for (const [naam, p] of lijst[land]) {
        if (p.startsWith(q)) uit.push({ land, postcode: p, naam, gewicht: gewicht(lijst[land], naam) });
      }
    }
    // Per postcode België eerst (daar liggen de meeste werven), dan de naam met
    // de meeste postcodes: Liège vóór Glain op 4000.
    return uit
      .sort(
        (a, b) =>
          a.postcode.localeCompare(b.postcode) ||
          a.land.localeCompare(b.land) ||
          b.gewicht - a.gewicht ||
          a.naam.localeCompare(b.naam, "nl"),
      )
      .slice(0, max)
      .map(({ land, postcode, naam }) => ({ land, postcode, naam }));
  }

  const kandidaten = new Map<string, Plaats & { score: number; gewicht: number }>();
  for (const land of LANDEN) {
    for (const [naam, postcode] of lijst[land]) {
      const n = normaliseer(naam);
      let score: number;
      if (n === q) score = 0;
      else if (n.startsWith(q)) score = 1;
      else if (n.split(" ").some((w) => w.startsWith(q))) score = 2;
      else continue;
      const sleutel = `${land}|${naam}`;
      const bestaand = kandidaten.get(sleutel);
      if (!bestaand || postcode < bestaand.postcode) {
        kandidaten.set(sleutel, { land, postcode, naam, score, gewicht: gewicht(lijst[land], naam) });
      }
    }
  }
  return [...kandidaten.values()]
    .sort(
      (a, b) =>
        a.score - b.score ||
        b.gewicht - a.gewicht ||
        a.naam.length - b.naam.length ||
        a.naam.localeCompare(b.naam, "nl") ||
        a.land.localeCompare(b.land),
    )
    .slice(0, max)
    .map(({ land, postcode, naam }) => ({ land, postcode, naam }));
}

/**
 * De plaats die de invoer aanwijst, of `null` zolang ze nog niets aanwijst.
 *
 * Dit is het "automatisch herkennen": wie "2620" of "Hemiksem" typt, hoeft niet
 * meer te klikken.
 *
 * Bestaat het antwoord in beide landen, dan wint de plaats met de meeste
 * postcodes, en bij gelijkspel België. Niet kiezen was geen optie: 392
 * postcodes bestaan in beide landen, en Mechelen, Hasselt en Aalst hebben
 * elk een Nederlandse naamgenoot — een veld dat daar weigert, herkent precies
 * de werven waar we het meest leveren niet. Het veld toont daarna naam én
 * postcode, en de andere kandidaat blijft in de lijst staan: wie in Mechelen
 * (L) bouwt, ziet "Mechelen (2800)" en kiest de zijne.
 */
export function herkenPlaats(lijst: PlaatsLijst, invoer: string): Plaats | null {
  const q = normaliseer(invoer);
  if (!q) return null;

  if (/^\d{4}$/.test(q)) {
    const land = LANDEN.find((l) => lijst[l].some(([, p]) => p === q));
    if (!land) return null;
    return { land, postcode: q, naam: hoofdnaam(lijst[land], q) ?? "" };
  }

  let beste: (Plaats & { gewicht: number }) | null = null;
  for (const land of LANDEN) {
    let pc: string | null = null;
    let naam = "";
    for (const [n, p] of lijst[land]) {
      if (normaliseer(n) !== q) continue;
      if (pc === null || p < pc) {
        pc = p;
        naam = n;
      }
    }
    if (pc === null) continue;
    const g = gewicht(lijst[land], naam);
    // LANDEN begint met BE: alleen een Nederlandse plaats met méér postcodes
    // neemt het over.
    if (!beste || g > beste.gewicht) beste = { land, postcode: pc, naam, gewicht: g };
  }
  return beste ? { land: beste.land, postcode: beste.postcode, naam: beste.naam } : null;
}

/** Hoe een gekozen plaats in het veld blijft staan. */
export function plaatsLabel(p: Pick<Plaats, "naam" | "postcode">): string {
  return p.naam ? `${p.naam} (${p.postcode})` : p.postcode;
}

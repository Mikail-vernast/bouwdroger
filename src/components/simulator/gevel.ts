/*
  De ramen en de voordeur in de voor- en zijgevel, gedeeld door de SVG-woning
  (IsoHouse) en de 3D-woning (IsoHouse3D): zo tonen de geprerenderde SVG en de
  3D die erna verschijnt dezelfde gevel. De buren in de straatrender
  (scripts/simulator-3d/straat.py: huis) volgen dezelfde regels.

  Geen kolomraster: in een echte woning staan de ramen van het gelijkvloers en
  de verdieping zelden recht boven elkaar, en ze zijn niet even groot.
  - Gelijkvloers: de voordeur met een smal zijlicht, en één breed raam voor de
    leefruimte met een lage borstwering. Op een brede gevel komt er nog een
    gewoon raam bij (keuken of bureau).
  - Verdieping: boven de voordeur een smal raam voor de overloop, daarnaast
    slaapkamerramen van 1 tot 1,4 m, op hun eigen verdeling.
  Maten in meter; a langs de gevel, b vanaf de afgewerkte vloer van de laag.
*/

export interface GevelGat {
  a0: number;
  a1: number;
  b0: number;
  b1: number;
  soort: "raam" | "deur";
  /** hoogte van het bovenlicht boven de kalf, 0 = geen kalf */
  kalf: number;
  /** middenstijl */
  stijl: boolean;
}

/** Bovenkant van elke opening (deur, ramen): één lijn, zoals een latei. */
export const LATEI = 2.3;
const ZIJLICHT = 0.36;

function raam(a0: number, a1: number, b0: number, kalf: number): GevelGat {
  return { a0, a1, b0, b1: LATEI, soort: "raam", kalf, stijl: a1 - a0 > 0.9 };
}

/**
 * Openingen in de voorgevel van bouwlaag `v`, voor een gevel van `w` breed.
 * `deur` is de voordeur uit het plan (alleen op het gelijkvloers, niet bij een
 * appartement); erboven komt het overloopraam. `terras`: het leefruimteraam van
 * de onderste laag is een raamdeur, naar het terras van een appartement
 * (scripts/simulator-3d/straat.py zet het balkon ervoor).
 */
export function voorgevelGaten(w: number, v: number, deur: { van: number; tot: number } | null, terras = false): GevelGat[] {
  const gaten: GevelGat[] = [];
  // De vrije strook naast de deur: aan de kant waar het meest plaats is.
  let s0 = 0.4, s1 = w - 0.4;
  if (deur) {
    const rechts = w - deur.tot >= deur.van;
    const dc = (deur.van + deur.tot) / 2;
    if (v === 0) {
      gaten.push({ a0: deur.van - 0.06, a1: deur.tot + 0.06, b0: 0, b1: LATEI, soort: "deur", kalf: 0, stijl: false });
      // Zijlicht aan de kant weg van de hoek, als het leefruimteraam er nog naast past.
      const z0 = rechts ? deur.tot + 0.18 : deur.van - 0.18 - ZIJLICHT;
      const vrij = rechts ? w - (z0 + ZIJLICHT) : z0;
      if (vrij >= 3.0) gaten.push({ ...raam(z0, z0 + ZIJLICHT, 0.25, 0), stijl: false });
    } else {
      gaten.push(raam(dc - 0.3, dc + 0.3, 1.0, 0));
    }
    const rand = gaten.reduce((m, g) => (rechts ? Math.max(m, g.a1) : Math.min(m, g.a0)), rechts ? 0 : w);
    [s0, s1] = rechts ? [rand + 0.5, w - 0.4] : [0.4, rand - 0.5];
  }
  const span = s1 - s0;
  if (span < 0.8) return gaten;

  if (v === 0) {
    // Leefruimte: een breed raam met een lage borstwering, dicht bij de deur;
    // op een brede gevel daarnaast een gewoon raam.
    const tweede = span >= 5.4;
    const deel = tweede ? span * 0.6 : span;
    const bw = Math.min(2.6, Math.max(Math.min(2.0, deel - 0.4), deel * 0.7));
    const naarDeur = !deur || w - deur.tot >= deur.van ? 1 : -1;
    const c = naarDeur > 0 ? s0 + deel / 2 : s1 - deel / 2;
    gaten.push(raam(c - bw / 2, c + bw / 2, terras ? 0.02 : 0.5, 0));
    if (tweede) {
      const c2 = naarDeur > 0 ? s1 - (span - deel) / 2 : s0 + (span - deel) / 2;
      gaten.push(raam(c2 - 0.55, c2 + 0.55, 0.9, 0.45));
    }
    return gaten;
  }

  // Slaapkamers: eigen verdeling, afwisselend breed en smal.
  const n = span < 3.0 ? 1 : span < 6.4 ? 2 : 3;
  const breedtes = [1.3, 1.0, 1.2];
  for (let k = 0; k < n; k++) {
    const c = s0 + (span * (k + 0.5)) / n;
    const bw = Math.min(breedtes[(k + v - 1) % 3], span / n - 0.5);
    gaten.push(raam(c - bw / 2, c + bw / 2, 0.9, 0.45));
  }
  return gaten;
}

/**
 * Ramen in een vrije zijgevel van `l` diep (a loopt van achter naar voor):
 * beneden een raam naar de tuinkant (en op een diepe woning een tweede vooraan),
 * boven een kleiner raam ertussen.
 */
export function zijgevelGaten(l: number, v: number): GevelGat[] {
  if (v === 0) {
    const ramen = [raam(l * 0.3 - 0.6, l * 0.3 + 0.6, 0.9, 0.45)];
    if (l > 10.5) ramen.push(raam(l * 0.78 - 0.45, l * 0.78 + 0.45, 0.9, 0.45));
    return ramen;
  }
  const c = v % 2 ? l * 0.55 : l * 0.45;
  return [raam(c - 0.5, c + 0.5, 0.9, 0.45)];
}

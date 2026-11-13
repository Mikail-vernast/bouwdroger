import type { Kamer, Opening } from "@/lib/droogSimulator";
import type { Bouwer } from "./geo";

/*
  Vaste inrichting per kamer: keuken, badkamer, toilet en wasplaats. Daaraan
  herken je wat een ruimte is. Losse meubels komen er bewust niet in: de
  simulator toont een werf, geen bewoond huis.

  Elke kamer kiest een muur om tegenaan te bouwen: een muur zonder deur, liefst
  een buitenmuur achteraan of links (die blijft op volle hoogte staan als de laag
  opengewerkt is, dus daar kunnen ook bovenkasten aan). Daarna wordt alles in het
  assenstelsel van die muur gezet: u langs de muur, n de kamer in.
*/

export type Kant = "achter" | "voor" | "links" | "rechts";

interface Muur {
  kant: Kant;
  /** lengte langs de muur en diepte de kamer in */
  L: number;
  D: number;
  /** blijft op volle hoogte staan: buitenmuur achteraan of links */
  hoog: boolean;
  /** (u, n, y) → wereld */
  p: (u: number, n: number, y: number) => [number, number, number];
}

const WAND = 0.07; // half een binnenmuur plus speling

function muur(k: Kamer, kant: Kant): Muur {
  const { x, z, w, l } = k;
  switch (kant) {
    case "achter": return { kant, L: w, D: l, hoog: z < 1e-6, p: (u, n, y) => [x + u, y, z + n] };
    case "voor": return { kant, L: w, D: l, hoog: false, p: (u, n, y) => [x + w - u, y, z + l - n] };
    case "links": return { kant, L: l, D: w, hoog: x < 1e-6, p: (u, n, y) => [x + n, y, z + l - u] };
    case "rechts": return { kant, L: l, D: w, hoog: false, p: (u, n, y) => [x + w - n, y, z + u] };
  }
}

/** Ligt er een deur of doorgang in deze muur van de kamer? */
function heeftOpening(k: Kamer, kant: Kant, openingen: Opening[]): boolean {
  const as = kant === "achter" || kant === "voor" ? "x" : "z";
  const vast = kant === "achter" ? k.z : kant === "voor" ? k.z + k.l : kant === "links" ? k.x : k.x + k.w;
  const [a0, a1] = as === "x" ? [k.x, k.x + k.w] : [k.z, k.z + k.l];
  return openingen.some((o) => o.verdieping === k.verdieping && o.as === as && Math.abs(o.vast - vast) < 1e-6 && o.tot > a0 + 1e-6 && o.van < a1 - 1e-6);
}

/** De beste muur om tegenaan te bouwen: zonder opening, hoog, en lang genoeg. */
function kiesMuur(k: Kamer, openingen: Opening[], gevels: { w: number; l: number }): Muur {
  const kanten: Kant[] = ["achter", "links", "rechts", "voor"];
  const score = (kant: Kant) => {
    const m = muur(k, kant);
    let s = m.L;
    if (heeftOpening(k, kant, openingen)) s -= 100;
    if (m.hoog) s += 4;
    // De voor- en zijgevel hebben ramen: liever niet tegen bouwen.
    if (kant === "voor" && k.z + k.l > gevels.l - 1e-6) s -= 3;
    if (kant === "rechts" && k.x + k.w > gevels.w - 1e-6) s -= 3;
    return s;
  };
  const beste = kanten.reduce((b, kant) => (score(kant) > score(b) ? kant : b), kanten[0]);
  return muur(k, beste);
}

const INGERICHT = new Set(["Keuken", "Badkamer", "Toilet", "Wasplaats"]);

/** The wall a room's fixed fittings stand against, or null when it has none. */
export function inrichtingsMuur(k: Kamer, openingen: Opening[], gevels: { w: number; l: number }): Kant | null {
  if (k.soort === "circulatie" || !INGERICHT.has(k.naam)) return null;
  return kiesMuur(k, openingen, gevels).kant;
}

type Blok = (mat: string, u0: number, u1: number, n0: number, n1: number, y0: number, y1: number) => void;

export function richIn(B: Bouwer, kamers: Kamer[], openingen: Opening[], yf: number, gevels: { w: number; l: number }) {
  for (const k of kamers) {
    if (k.soort === "circulatie") continue;
    const m = kiesMuur(k, openingen, gevels);
    // Een blok in het assenstelsel van de muur.
    const blok: Blok = (mat, u0, u1, n0, n1, y0, y1) => {
      const a = m.p(u0, n0, yf + y0), b = m.p(u1, n1, yf + y1);
      B.blok(mat, Math.min(a[0], b[0]), Math.max(a[0], b[0]), Math.min(a[1], b[1]), Math.max(a[1], b[1]), Math.min(a[2], b[2]), Math.max(a[2], b[2]));
    };
    switch (k.naam) {
      case "Keuken": keuken(blok, m.L, m.D, m.hoog); break;
      case "Badkamer": badkamer(blok, m.L, m.D); break;
      case "Toilet": toilet(blok, m.L, m.D); break;
      case "Wasplaats": wasplaats(blok, m.L); break;
    }
  }
}

function keuken(blok: Blok, L: number, D: number, hoog: boolean) {
  const n0 = WAND;
  const koelkast = L > 2.6;
  const eind = koelkast ? L - 0.72 : L - 0.08;
  const u0 = 0.08;
  // Onderkasten met plint, werkblad, spoelbak, kookplaat en oven.
  blok("zwart", u0, eind, n0 + 0.04, n0 + 0.56, 0, 0.1);
  blok("kast", u0, eind, n0, n0 + 0.58, 0.1, 0.86);
  for (let u = u0 + 0.6; u < eind - 0.1; u += 0.6) blok("voeg", u - 0.004, u + 0.004, n0 + 0.58, n0 + 0.585, 0.14, 0.82);
  blok("werkblad", u0 - 0.02, eind, n0, n0 + 0.63, 0.86, 0.9);
  const spoel = u0 + (eind - u0) * 0.3;
  blok("inox", spoel - 0.4, spoel + 0.4, n0 + 0.1, n0 + 0.52, 0.9, 0.903);
  blok("donker", spoel - 0.33, spoel + 0.05, n0 + 0.14, n0 + 0.48, 0.903, 0.905);
  blok("inox", spoel + 0.15, spoel + 0.19, n0 + 0.04, n0 + 0.08, 0.9, 1.2);
  blok("inox", spoel + 0.15, spoel + 0.19, n0 + 0.04, n0 + 0.28, 1.17, 1.2);
  const kook = u0 + (eind - u0) * 0.7;
  blok("zwartglas", kook - 0.3, kook + 0.3, n0 + 0.06, n0 + 0.56, 0.9, 0.905);
  for (const [du, dn] of [[-0.14, 0.17], [0.14, 0.17], [-0.14, 0.42], [0.14, 0.42]]) {
    blok("kookzone", kook + du - 0.08, kook + du + 0.08, n0 + 0.06 + dn - 0.08, n0 + 0.06 + dn + 0.08, 0.905, 0.907);
  }
  blok("zwartglas", kook - 0.29, kook + 0.29, n0 + 0.58, n0 + 0.585, 0.2, 0.76);
  blok("inox", kook - 0.2, kook + 0.2, n0 + 0.585, n0 + 0.6, 0.7, 0.72);
  // Hoge kast met koelkast aan het eind.
  if (koelkast) {
    blok("kast", L - 0.7, L - 0.08, n0, n0 + 0.62, 0, 2.15);
    blok("voeg", L - 0.7, L - 0.08, n0 + 0.62, n0 + 0.625, 1.4, 1.408);
    blok("inox", L - 0.16, L - 0.13, n0 + 0.625, n0 + 0.65, 0.9, 1.3);
  }
  // Bovenkasten en dampkap: alleen tegen een muur die op volle hoogte blijft.
  if (hoog) {
    blok("kast", u0, kook - 0.45, n0, n0 + 0.35, 1.45, 2.15);
    blok("kast", kook + 0.45, eind, n0, n0 + 0.35, 1.45, 2.15);
    blok("inox", kook - 0.45, kook + 0.45, n0, n0 + 0.5, 1.6, 1.68);
    blok("inox", kook - 0.15, kook + 0.15, n0, n0 + 0.25, 1.68, 2.3);
  }
  // Eiland in een ruime keuken.
  if (D > 3.4 && L > 3) {
    const len = Math.min(2.2, L * 0.5), c = L / 2, n = Math.min(D - 1.4, 2.0);
    blok("kast", c - len / 2, c + len / 2, n, n + 0.9, 0.1, 0.86);
    blok("zwart", c - len / 2 + 0.05, c + len / 2 - 0.05, n + 0.05, n + 0.85, 0, 0.1);
    blok("werkblad", c - len / 2 - 0.05, c + len / 2 + 0.05, n - 0.05, n + 1.15, 0.86, 0.9);
  }
}

function badkamer(blok: Blok, L: number, D: number) {
  // Bad tegen de muur, meubel met lavabo en spiegel, hangtoilet.
  const bad = Math.min(1.75, L - 1.2);
  if (bad > 1.2) {
    blok("sanitair", 0.05, 0.05 + bad, WAND, WAND + 0.78, 0, 0.56);
    blok("water", 0.15, bad - 0.05, WAND + 0.1, WAND + 0.68, 0.5, 0.565);
  }
  const lv = Math.min(1.0, L - bad - 0.2);
  if (lv > 0.5) {
    const u0 = L - lv - 0.08;
    blok("hout", u0, u0 + lv, WAND, WAND + 0.48, 0.35, 0.82);
    blok("sanitair", u0 + 0.05, u0 + lv - 0.05, WAND, WAND + 0.5, 0.82, 0.86);
    blok("spiegel", u0 + 0.05, u0 + lv - 0.05, WAND, WAND + 0.015, 1.1, 1.8);
  }
  if (D > 1.8) toiletPot(blok, Math.min(L - 0.3, 0.45), D - WAND - 0.05, -1);
}

function toiletPot(blok: Blok, u: number, n: number, richting: 1 | -1) {
  // Reservoir tegen de muur (op n), pot de kamer in (richting).
  const r0 = richting > 0 ? n : n - 0.16, r1 = richting > 0 ? n + 0.16 : n;
  blok("sanitair", u - 0.19, u + 0.19, r0, r1, 0.4, 0.82);
  const p0 = richting > 0 ? n + 0.08 : n - 0.58, p1 = richting > 0 ? n + 0.58 : n - 0.08;
  blok("sanitair", u - 0.17, u + 0.17, p0, p1, 0, 0.4);
  blok("kast", u - 0.18, u + 0.18, p0, p1, 0.4, 0.43);
}

function toilet(blok: Blok, L: number, D: number) {
  toiletPot(blok, L / 2, WAND, 1);
  if (L > 0.9 && D > 1.1) blok("sanitair", L - 0.4, L - 0.08, WAND, WAND + 0.25, 0.75, 0.85);
}

function wasplaats(blok: Blok, L: number) {
  // Wasmachine en droogkast naast elkaar, met een uitgietbak.
  for (const [i, u] of [[0, 0.1], [1, 0.75]] as const) {
    blok("sanitair", u, u + 0.6, WAND, WAND + 0.6, 0, 0.85);
    blok("zwartglas", u + 0.13, u + 0.47, WAND + 0.6, WAND + 0.605, 0.25, 0.6);
    blok("kast", u + 0.05, u + 0.55, WAND + 0.6, WAND + 0.603, 0.7, 0.8 - i * 0.02);
  }
  if (L > 2.1) {
    blok("sanitair", 1.45, 1.95, WAND, WAND + 0.45, 0.65, 0.9);
    blok("metaal", 1.48, 1.52, WAND + 0.02, WAND + 0.42, 0, 0.65);
    blok("metaal", 1.88, 1.92, WAND + 0.02, WAND + 0.42, 0, 0.65);
  }
}

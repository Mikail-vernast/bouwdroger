import { meubels, type Kamer, type Opening } from "@/lib/droogSimulator";
import type { Bouwer } from "./geo";

/*
  Vaste inrichting per kamer: keuken, badkamer, toilet en wasplaats. Daaraan
  herken je wat een ruimte is. Van de losse meubels alleen eettafel en zetel in
  de leefruimte (waar, staat in `meubels` in droogSimulator.ts; de toestellen
  blijven daar weg). De groep is alleen zichtbaar in de fase "afgewerkt".

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
  // Een toilet: de pot tegen de korte achterwand, zoals in elk hokje.
  if (k.naam === "Toilet" && !heeftOpening(k, "achter", openingen)) return muur(k, "achter");
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
    if (k.naam === "Leefruimte") {
      for (const m of meubels(k, kamers)) (m.soort === "eettafel" ? eettafel : zetel)(B, k.x + m.zone.x0, k.x + m.zone.x1, yf, k.z + m.zone.z0, k.z + m.zone.z1);
      // Geen aparte keuken op deze laag: een open keukenrij tegen de achtergevel, rechts.
      if (!k.deel && !kamers.some((kk) => kk.verdieping === k.verdieping && kk.naam === "Keuken")) {
        const m = muur(k, "achter"), Lk = Math.min(3.2, m.L * 0.5), off = m.L - Lk;
        keuken((mat, u0, u1, n0, n1, y0, y1) => {
          const a = m.p(u0 + off, n0, yf + y0), b = m.p(u1 + off, n1, yf + y1);
          B.blok(mat, Math.min(a[0], b[0]), Math.max(a[0], b[0]), Math.min(a[1], b[1]), Math.max(a[1], b[1]), Math.min(a[2], b[2]), Math.max(a[2], b[2]));
        }, Lk, 0, m.hoog);
      }
      continue;
    }
    const m = kiesMuur(k, openingen, gevels);
    // Een blok in het assenstelsel van de muur.
    const blok: Blok = (mat, u0, u1, n0, n1, y0, y1) => {
      const a = m.p(u0, n0, yf + y0), b = m.p(u1, n1, yf + y1);
      B.blok(mat, Math.min(a[0], b[0]), Math.max(a[0], b[0]), Math.min(a[1], b[1]), Math.max(a[1], b[1]), Math.min(a[2], b[2]), Math.max(a[2], b[2]));
    };
    switch (k.naam) {
      case "Keuken": keuken(blok, m.L, m.D, m.hoog); break;
      case "Badkamer": badkamer(blok, m.L, m.D); break;
      case "Toilet": toilet(blok, m.L, m.D, deurKant(k, m.kant, openingen)); break;
      case "Wasplaats": wasplaats(blok, m.L); break;
    }
  }
}

/** Waar de spoelbak staat, langs de muur: midden in het werkblad. Het raam erboven volgt deze maat. */
export function spoelbakU(L: number): number {
  const eind = L > 2.6 ? L - 0.72 : L - 0.08;
  return (0.08 + eind) / 2;
}

/**
 * Een rechte keuken tegen de muur: de kookplaat aan het open eind (bij de
 * eettafel), de spoelbak in het midden onder het raam, de koelkast in een hoge
 * kast aan het andere eind. Een eiland alleen als er rondom 1 m loopruimte blijft.
 */
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
  const spoel = spoelbakU(L);
  blok("inox", spoel - 0.4, spoel + 0.4, n0 + 0.1, n0 + 0.52, 0.9, 0.903);
  blok("donker", spoel - 0.33, spoel + 0.05, n0 + 0.14, n0 + 0.48, 0.903, 0.905);
  blok("inox", spoel + 0.15, spoel + 0.19, n0 + 0.04, n0 + 0.08, 0.9, 1.2);
  blok("inox", spoel + 0.15, spoel + 0.19, n0 + 0.04, n0 + 0.28, 1.17, 1.2);
  const kook = Math.max(u0 + 0.4, Math.min(spoel - 0.9, u0 + 0.45));
  blok("zwartglas", kook - 0.3, kook + 0.3, n0 + 0.06, n0 + 0.56, 0.9, 0.905);
  for (const [du, dn] of [[-0.14, 0.17], [0.14, 0.17], [-0.14, 0.42], [0.14, 0.42]]) {
    blok("kookzone", kook + du - 0.08, kook + du + 0.08, n0 + 0.06 + dn - 0.08, n0 + 0.06 + dn + 0.08, 0.905, 0.907);
  }
  blok("zwartglas", kook - 0.29, kook + 0.29, n0 + 0.58, n0 + 0.585, 0.2, 0.76);
  blok("inox", kook - 0.2, kook + 0.2, n0 + 0.585, n0 + 0.6, 0.7, 0.72);
  // Hoge kast met koelkast aan het andere eind, tegen de zijmuur.
  if (koelkast) {
    blok("kast", L - 0.7, L - 0.08, n0, n0 + 0.62, 0, 2.15);
    blok("voeg", L - 0.7, L - 0.08, n0 + 0.62, n0 + 0.625, 1.4, 1.408);
    blok("inox", L - 0.66, L - 0.63, n0 + 0.625, n0 + 0.65, 0.9, 1.3);
  }
  // Dampkap boven de kookplaat, tegen een muur die op volle hoogte blijft. Geen
  // bovenkasten: boven de spoelbak zit het raam.
  if (hoog) {
    blok("inox", kook - 0.45, kook + 0.45, n0, n0 + 0.5, 1.6, 1.68);
    blok("inox", kook - 0.15, kook + 0.15, n0, n0 + 0.25, 1.68, 2.3);
  }
  // Eiland: werkblad 0,9 m diep, met 1 m loopruimte naar de keukenrij, de kamerrand en opzij.
  const nEiland = n0 + 0.63 + 1.0, lengte = Math.min(2.2, L - 2.0);
  if (lengte >= 1.2 && nEiland + 0.9 + 1.0 <= D) {
    const c = L / 2;
    blok("kast", c - lengte / 2, c + lengte / 2, nEiland, nEiland + 0.9, 0.1, 0.86);
    blok("zwart", c - lengte / 2 + 0.05, c + lengte / 2 - 0.05, nEiland + 0.05, nEiland + 0.85, 0, 0.1);
    blok("werkblad", c - lengte / 2 - 0.03, c + lengte / 2 + 0.03, nEiland - 0.03, nEiland + 0.93, 0.86, 0.9);
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

/** Aan welke kant van de muur (u = 0 of u = L) de deur van de kamer zit, of null. */
function deurKant(k: Kamer, kant: Kant, openingen: Opening[]): "begin" | "eind" | null {
  const zijden: Kant[] = kant === "achter" || kant === "voor" ? ["links", "rechts"] : ["achter", "voor"];
  const [a, b] = zijden.map((z) => heeftOpening(k, z, openingen));
  if (!a && !b) return null;
  // muur(): langs "achter" loopt u van links naar rechts; voor de andere kanten zie muur().
  const beginIs: Record<Kant, Kant> = { achter: "links", voor: "rechts", links: "voor", rechts: "achter" };
  const beginOpen = heeftOpening(k, beginIs[kant], openingen);
  return beginOpen ? "begin" : "eind";
}

/** Hangpot tegen de korte achterwand, fonteintje aan de zijwand waar de deur niet zit. */
function toilet(blok: Blok, L: number, D: number, deur: "begin" | "eind" | null) {
  toiletPot(blok, L / 2, WAND, 1);
  if (D < 1.2) return;
  const [u0, u1] = deur === "begin" ? [L - 0.24, L - 0.02] : [0.02, 0.24];
  blok("sanitair", u0, u1, 0.95, 1.3, 0.72, 0.84);
  blok("inox", deur === "begin" ? u1 - 0.05 : u0 + 0.02, deur === "begin" ? u1 - 0.02 : u0 + 0.05, 1.1, 1.13, 0.84, 0.95);
}

function eettafel(B: Bouwer, x0: number, x1: number, yf: number, z0: number, z1: number) {
  // Tafel van 1,8 × 0,9 m in het midden van de zone, met drie stoelen aan elke lange kant.
  const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
  B.blok("hout", cx - 0.9, cx + 0.9, yf + 0.72, yf + 0.76, cz - 0.45, cz + 0.45);
  for (const [dx, dz] of [[-0.82, -0.38], [0.82, -0.38], [-0.82, 0.38], [0.82, 0.38]]) B.blok("zwart", cx + dx - 0.03, cx + dx + 0.03, yf, yf + 0.72, cz + dz - 0.03, cz + dz + 0.03);
  for (const zk of [-1, 1]) for (const dx of [-0.6, 0, 0.6]) {
    const sz = cz + zk * 0.62;
    B.blok("stof", cx + dx - 0.21, cx + dx + 0.21, yf + 0.42, yf + 0.47, sz - 0.2, sz + 0.2);
    B.blok("stof", cx + dx - 0.21, cx + dx + 0.21, yf + 0.47, yf + 0.85, sz + zk * 0.17, sz + zk * 0.2);
    B.blok("zwart", cx + dx - 0.18, cx + dx + 0.18, yf, yf + 0.42, sz - 0.17, sz + 0.17);
  }
}

function zetel(B: Bouwer, x0: number, x1: number, yf: number, z0: number, z1: number) {
  // Driezit langs de lange kant van de zone, met een salontafel ervoor.
  const lang = x1 - x0 >= z1 - z0;
  const blk = (a0: number, a1: number, b0: number, b1: number, y0: number, y1: number, mat: string) =>
    lang ? B.blok(mat, x0 + a0, x0 + a1, yf + y0, yf + y1, z0 + b0, z0 + b1) : B.blok(mat, x0 + b0, x0 + b1, yf + y0, yf + y1, z0 + a0, z0 + a1);
  const L = lang ? x1 - x0 : z1 - z0, D = lang ? z1 - z0 : x1 - x0;
  blk(0, L, 0, D, 0.05, 0.42, "stof");
  blk(0, L, 0, 0.2, 0.42, 0.78, "stof");
  blk(0, 0.18, 0, D, 0.42, 0.6, "stof");
  blk(L - 0.18, L, 0, D, 0.42, 0.6, "stof");
  if (lang) B.blok("hout", x0 + L / 2 - 0.5, x0 + L / 2 + 0.5, yf + 0.38, yf + 0.42, z1 + 0.35, z1 + 0.85);
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

import type { Kamer, Opening } from "@/lib/droogSimulator";
import type { Bouwer } from "./geo";

/*
  Inrichting per kamer, zodat je een keuken als keuken herkent en een berging als
  berging. Twee soorten:

  - vast: keuken, badkamer, toilet, wasplaats. Staat er altijd — ook op de werf
    worden die het eerst geplaatst, en zonder zie je niet welke ruimte wat is.
  - los: zetel, eettafel, bed, bureau, rekken. Alleen als `los` aan staat (bij het
    tekenen van de indeling en in de afgewerkte fases), niet op een natte werf.

  Elke kamer kiest een muur om tegenaan te bouwen: een muur zonder deur, liefst
  een buitenmuur achteraan of links (die blijft op volle hoogte staan als de laag
  opengewerkt is, dus daar kunnen ook bovenkasten aan). Daarna wordt alles in het
  assenstelsel van die muur gezet: u langs de muur, n de kamer in.
*/

type Kant = "achter" | "voor" | "links" | "rechts";

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

/** De muur tegenover een gekozen muur. */
const TEGENOVER: Record<Kant, Kant> = { achter: "voor", voor: "achter", links: "rechts", rechts: "links" };

export function richIn(B: Bouwer, kamers: Kamer[], openingen: Opening[], yf: number, gevels: { w: number; l: number }, los: boolean) {
  for (const k of kamers) {
    if (k.soort === "circulatie") continue;
    const m = kiesMuur(k, openingen, gevels);
    // Een blok in het assenstelsel van de muur.
    const blok = (mat: string, u0: number, u1: number, n0: number, n1: number, y0: number, y1: number, boven?: string) => {
      const a = m.p(u0, n0, yf + y0), b = m.p(u1, n1, yf + y1);
      B.blok(mat, Math.min(a[0], b[0]), Math.max(a[0], b[0]), Math.min(a[1], b[1]), Math.max(a[1], b[1]), Math.min(a[2], b[2]), Math.max(a[2], b[2]), boven ? { boven } : {});
    };
    const { L, D } = m;
    const tegenoverVrij = !heeftOpening(k, TEGENOVER[m.kant], openingen);

    switch (k.naam) {
      case "Keuken": keuken(blok, L, D, m.hoog, los); break;
      case "Badkamer": badkamer(blok, L, D); break;
      case "Toilet": toilet(blok, L, D); break;
      case "Wasplaats": wasplaats(blok, L, D, los); break;
      case "Leefruimte": if (los) leefruimte(blok, L, D); break;
      case "Slaapkamer": if (los) slaapkamer(blok, L, D, tegenoverVrij); break;
      case "Bureau": if (los) bureau(blok, L, D); break;
      case "Berging": if (los) berging(blok, L, D); break;
      case "Dressing": if (los) kasten(blok, 0.1, Math.min(L - 0.1, 3), 0); break;
      case "Zolder": if (los) zolder(blok, L, D); break;
    }
  }
}

type Blok = (mat: string, u0: number, u1: number, n0: number, n1: number, y0: number, y1: number, boven?: string) => void;

/** Een rij kasten van 60 cm diep, met een voeg tussen de deuren. */
function kasten(blok: Blok, u0: number, u1: number, n0: number, h = 2.1, mat = "kast") {
  blok(mat, u0, u1, n0 + WAND, n0 + WAND + 0.6, 0, h);
  for (let u = u0 + 0.5; u < u1 - 0.1; u += 0.5) blok("voeg", u - 0.004, u + 0.004, n0 + WAND + 0.6, n0 + WAND + 0.605, 0.05, h - 0.05);
}

function keuken(blok: Blok, L: number, D: number, hoog: boolean, los: boolean) {
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
  // Eiland met barkrukken in een ruime keuken.
  if (D > 3.4 && L > 3) {
    const len = Math.min(2.2, L * 0.5), c = L / 2, n = Math.min(D - 1.4, 2.0);
    blok("kast", c - len / 2, c + len / 2, n, n + 0.9, 0.1, 0.86);
    blok("zwart", c - len / 2 + 0.05, c + len / 2 - 0.05, n + 0.05, n + 0.85, 0, 0.1);
    blok("werkblad", c - len / 2 - 0.05, c + len / 2 + 0.05, n - 0.05, n + 1.15, 0.86, 0.9);
    if (los) for (let i = 0; i < 3; i++) {
      const uu = c - len / 2 + (len * (i + 0.5)) / 3;
      blok("metaal", uu - 0.02, uu + 0.02, n + 1.25, n + 1.29, 0, 0.62);
      blok("hout", uu - 0.18, uu + 0.18, n + 1.1, n + 1.44, 0.62, 0.66);
    }
  }
}

function leefruimte(blok: Blok, L: number, D: number) {
  // Tv-meubel tegen de muur, zetel ertegenover, salontafel en tapijt ertussen.
  const c = L * 0.3;
  blok("hout", c - 0.9, c + 0.9, WAND, WAND + 0.42, 0, 0.45);
  blok("zwartglas", c - 0.6, c + 0.6, WAND + 0.15, WAND + 0.19, 0.5, 1.2);
  blok("zwart", c - 0.05, c + 0.05, WAND + 0.12, WAND + 0.22, 0.45, 0.5);
  const nz = Math.min(D - 0.5, 3.4);
  blok("tapijt", c - 1.2, c + 1.2, nz - 2.2, nz - 0.4, 0, 0.012);
  blok("hout", c - 0.55, c + 0.55, nz - 1.75, nz - 1.15, 0.3, 0.4);
  blok("metaal", c - 0.5, c + 0.5, nz - 1.7, nz - 1.2, 0, 0.3);
  // Zetel: zit, rug en armleuningen.
  blok("stof", c - 1.1, c + 1.1, nz - 0.9, nz, 0.15, 0.45);
  blok("stof", c - 1.1, c + 1.1, nz - 0.22, nz, 0.45, 0.85);
  blok("stof", c - 1.25, c - 1.1, nz - 0.9, nz, 0.15, 0.65);
  blok("stof", c + 1.1, c + 1.25, nz - 0.9, nz, 0.15, 0.65);
  blok("zwart", c - 1.2, c + 1.2, nz - 0.85, nz - 0.05, 0, 0.15);
  // Eettafel met stoelen aan de kant van de keuken.
  if (L > 4.2) {
    const tc = L * 0.76, tn = Math.min(D * 0.45, 2.4), tl = 1.8, tb = 0.9;
    blok("hout", tc - tl / 2, tc + tl / 2, tn - tb / 2, tn + tb / 2, 0.72, 0.76);
    for (const [du, dn] of [[-tl / 2 + 0.06, -tb / 2 + 0.06], [tl / 2 - 0.1, -tb / 2 + 0.06], [-tl / 2 + 0.06, tb / 2 - 0.1], [tl / 2 - 0.1, tb / 2 - 0.1]]) {
      blok("hout", tc + du, tc + du + 0.05, tn + dn, tn + dn + 0.05, 0, 0.72);
    }
    for (const du of [-0.5, 0.05, 0.6]) {
      for (const kant of [-1, 1]) {
        const n0 = kant < 0 ? tn - tb / 2 - 0.5 : tn + tb / 2 + 0.05;
        blok("stof2", tc + du - 0.22, tc + du + 0.22, n0, n0 + 0.45, 0.42, 0.47);
        const rug = kant < 0 ? n0 : n0 + 0.4;
        blok("stof2", tc + du - 0.22, tc + du + 0.22, rug, rug + 0.05, 0.47, 0.9);
        blok("metaal", tc + du - 0.18, tc + du + 0.18, n0 + 0.05, n0 + 0.4, 0, 0.42);
      }
    }
  }
}

function slaapkamer(blok: Blok, L: number, D: number, tegenoverVrij: boolean) {
  const bw = Math.min(1.6, Math.max(0.9, L - 1.3)), bl = Math.min(2.05, D - 0.7);
  const c = Math.min(L / 2, L - bw / 2 - 0.55);
  blok("hout", c - bw / 2 - 0.05, c + bw / 2 + 0.05, WAND, WAND + 0.08, 0, 1.0);
  blok("hout", c - bw / 2, c + bw / 2, WAND, WAND + bl, 0, 0.3);
  blok("bed", c - bw / 2 + 0.03, c + bw / 2 - 0.03, WAND + 0.05, WAND + bl - 0.03, 0.3, 0.52);
  blok("stof2", c - bw / 2 + 0.02, c + bw / 2 - 0.02, WAND + 0.6, WAND + bl - 0.01, 0.52, 0.56);
  const kussens = bw > 1.2 ? 2 : 1;
  for (let i = 0; i < kussens; i++) {
    const kc = c - bw / 2 + (bw * (i + 0.5)) / kussens;
    blok("bed", kc - bw / kussens / 2 + 0.08, kc + bw / kussens / 2 - 0.08, WAND + 0.12, WAND + 0.48, 0.52, 0.64);
  }
  for (const kant of [-1, 1]) {
    const u = c + kant * (bw / 2 + 0.3);
    if (u - 0.22 < 0.05 || u + 0.22 > L - 0.05) continue;
    blok("hout", u - 0.22, u + 0.22, WAND, WAND + 0.4, 0, 0.5);
  }
  // Kleerkast tegen de muur tegenover het bed, als daar geen deur zit.
  if (tegenoverVrij && D - bl > 1.4) {
    const kl = Math.min(2.4, L - 0.3);
    const n = D - 0.6 - WAND * 2;
    kasten(blok, (L - kl) / 2, (L + kl) / 2, n);
  }
}

function bureau(blok: Blok, L: number, D: number) {
  const c = Math.min(L * 0.4, L - 1.0);
  blok("hout", c - 0.7, c + 0.7, WAND, WAND + 0.7, 0.72, 0.75);
  for (const du of [-0.66, 0.62]) blok("metaal", c + du, c + du + 0.04, WAND + 0.05, WAND + 0.65, 0, 0.72);
  blok("zwartglas", c - 0.3, c + 0.3, WAND + 0.12, WAND + 0.15, 0.85, 1.2);
  blok("metaal", c - 0.03, c + 0.03, WAND + 0.15, WAND + 0.2, 0.75, 0.86);
  blok("stof", c - 0.25, c + 0.25, WAND + 0.85, WAND + 1.3, 0.45, 0.52);
  blok("stof", c - 0.25, c + 0.25, WAND + 1.25, WAND + 1.32, 0.52, 1.0);
  blok("metaal", c - 0.03, c + 0.03, WAND + 1.05, WAND + 1.1, 0, 0.45);
  if (L > 2.4 && D > 1.5) {
    const u = L - 0.55;
    blok("hout", u - 0.45, u + 0.45, WAND, WAND + 0.35, 0, 1.9);
    for (const y of [0.4, 0.8, 1.2, 1.6]) blok("boek", u - 0.4, u + 0.4, WAND + 0.33, WAND + 0.36, y + 0.03, y + 0.3);
  }
}

function berging(blok: Blok, L: number, D: number) {
  const rekken = L > 2 ? 2 : 1;
  for (let r = 0; r < rekken; r++) {
    const u0 = 0.15 + r * (L - 0.3) / rekken, u1 = u0 + Math.min(1.1, (L - 0.4) / rekken);
    for (const u of [u0, u1 - 0.04]) blok("metaal", u, u + 0.04, WAND, WAND + 0.45, 0, 1.9);
    for (const y of [0.15, 0.6, 1.05, 1.5, 1.88]) blok("hout", u0, u1, WAND, WAND + 0.45, y, y + 0.02);
    for (const [y, f] of [[0.17, 0.3], [0.62, 0.55], [1.07, 0.15], [1.52, 0.6]]) {
      blok("karton", u0 + (u1 - u0) * f, u0 + (u1 - u0) * f + 0.35, WAND + 0.05, WAND + 0.4, y, y + 0.28);
    }
  }
  if (D > 2) blok("karton", L * 0.6, L * 0.6 + 0.5, D - 0.9, D - 0.4, 0, 0.4);
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

function wasplaats(blok: Blok, L: number, D: number, los: boolean) {
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
  if (los && D > 2) {
    // Droogrek.
    blok("metaal", 0.4, 1.6, D - 1.0, D - 0.95, 0, 1.0);
    blok("metaal", 0.4, 1.6, D - 0.55, D - 0.5, 0, 1.0);
    for (let i = 0; i < 6; i++) blok("stof2", 0.45 + i * 0.19, 0.55 + i * 0.19, D - 0.95, D - 0.55, 0.55, 1.0);
  }
}

function zolder(blok: Blok, L: number, D: number) {
  for (const [u, n, b, h] of [[0.3, 0.1, 0.6, 0.45], [0.95, 0.1, 0.5, 0.35], [0.4, 0.75, 0.5, 0.4], [L - 1.0, 0.1, 0.7, 0.5]] as const) {
    if (u + b > L - 0.05 || n + b > D) continue;
    blok("karton", u, u + b, WAND + n, WAND + n + b * 0.8, 0, h);
  }
}

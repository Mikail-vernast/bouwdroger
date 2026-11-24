/*
  Waar de meubels uit de kit (scripts/simulator-3d/interieur.py) in een kamer
  komen. Puur rekenwerk, zonder three.js: de tests lopen er alle woningen mee
  af, en de 3D-woning zet de uitkomst om in geometrie (Interieur.tsx).

  Elke kamersoort heeft een recept: eerst het meubel dat de kamer maakt (de
  zetel, het bed, het keukenblok), daarna wat erbij hoort. Een meubel tegen een
  muur staat in het assenstelsel van die muur, zoals in inrichting.ts: u langs
  de muur, n de kamer in. De regels:

    - niets in de draaicirkel van een deur, in een doorgang of op de trap;
    - voor een raam alleen wat lager is dan de vensterbank, en voor een
      raamdeur niets;
    - de vrije ruimte die een meubel vraagt (manifest: vrij.voor/zij/rond) blijft
      leeg en ligt binnen de kamer;
    - hoge kasten, bovenkasten en dampkap alleen tegen een muur die in de
      opengewerkte laag op volle hoogte blijft (de achter- en de linkergevel);
    - wat niet past, komt er niet: liever een lege hoek dan een kast door een deur.
*/
import type { Kamer, Opening, Raam, Trap, Wand } from "@/lib/droogSimulator";
import { aanloopVak, bordesVak, doorgangVak, overlapt, trapVak, type Vak, zwaaiVak } from "@/lib/droogSimulator";

/* ───────────── het manifest ───────────── */

export interface KitObject {
  naam: string;
  b: number; d: number; h: number;
  tris: number;
  materialen: string[];
  muur: boolean;
  hoog: boolean;
  vrij: { voor: number; zij: number; rond: number };
  schaal: "" | "x" | "xy";
  kleurbaar: string[];
  boven?: number;
  plat?: boolean;
  licht?: boolean;
  module?: number;
  deur?: boolean;
}

export interface Manifest {
  versie: number;
  materialen: Record<string, { kleur: string; ruwheid: number; metaal: number; licht: string | null }>;
  objecten: KitObject[];
}

/** Een geplaatst meubel. `rot` draait om de verticale as; de voorkant van het object (+Z) wijst dan de kamer in. */
export interface Stuk {
  naam: string;
  kamer: string;
  x: number; z: number; y: number;
  rot: number;
  sx: number; sy: number; sz: number;
  /** materiaalnaam → kleur, voor de kleurbare materialen */
  kleur?: Record<string, string>;
  /** vloerplek, in wereldcoördinaten; voor een hangend of op het werkblad staand ding leeg */
  vak?: Vak;
  /** bovenkant boven de vloer */
  top: number;
  /** krijgt een contactschaduw */
  schaduw: boolean;
  /** hoort bij de binnenwanden (deur): schaalt mee met de opengewerkte laag */
  wand?: boolean;
}

export interface LaagInrichting {
  stukken: Stuk[];
  /** vloerplekken van de meubels: daar landt geen toestel */
  vakken: Vak[];
  /** per kamer de muur met de accentkleur */
  accent: Map<string, Wand>;
}

/* ───────────── muren ───────────── */

const EPS = 1e-6;
/** Een binnenmuur is 12 cm; de verf ligt 1 cm ervoor (Interieur.tsx), een meubel 5 mm daarvoor. */
const BINNEN = 0.075;
const BUITEN = 0.015;

export interface Muur {
  wand: Wand;
  L: number;
  D: number;
  hoog: boolean;
  /** afstand van de kamerrand tot het muurvlak */
  n0: number;
  /** (u, n) → (x, z) */
  p: (u: number, n: number) => [number, number];
  /** draaiing van een object dat met zijn rug tegen deze muur staat */
  rot: number;
}

export function muurVan(k: Kamer, wand: Wand, w: number, l: number): Muur {
  const { x, z } = k;
  const kw = k.w, kl = k.l;
  const gevel = wand === "achter" ? z < EPS : wand === "voor" ? z + kl > l - EPS : wand === "links" ? x < EPS : x + kw > w - EPS;
  const n0 = gevel ? BUITEN : BINNEN;
  switch (wand) {
    case "achter": return { wand, L: kw, D: kl, hoog: z < EPS, n0, rot: 0, p: (u, n) => [x + u, z + n] };
    case "voor": return { wand, L: kw, D: kl, hoog: false, n0, rot: Math.PI, p: (u, n) => [x + kw - u, z + kl - n] };
    case "links": return { wand, L: kl, D: kw, hoog: x < EPS, n0, rot: Math.PI / 2, p: (u, n) => [x + n, z + kl - u] };
    case "rechts": return { wand, L: kl, D: kw, hoog: false, n0, rot: -Math.PI / 2, p: (u, n) => [x + kw - n, z + u] };
  }
}

const WANDEN: Wand[] = ["achter", "links", "rechts", "voor"];
const tegenover: Record<Wand, Wand> = { achter: "voor", voor: "achter", links: "rechts", rechts: "links" };

/** Een rechthoek in muurcoördinaten als wereldvak. */
function vakOp(m: Muur, u0: number, u1: number, n0: number, n1: number): Vak {
  const a = m.p(u0, n0), b = m.p(u1, n1);
  return { x0: Math.min(a[0], b[0]), x1: Math.max(a[0], b[0]), z0: Math.min(a[1], b[1]), z1: Math.max(a[1], b[1]) };
}

const binnenIn = (a: Vak, b: Vak, m = 1e-4) => a.x0 >= b.x0 - m && a.x1 <= b.x1 + m && a.z0 >= b.z0 - m && a.z1 <= b.z1 + m;

/* ───────────── de kamer als bezettingskaart ───────────── */

/** Een hindernis: niets erin, of (bij een raam) alleen wat lager blijft dan `max`. */
interface Hinder { vak: Vak; max: number }

class Kaart {
  hard: Hinder[] = [];
  /** vrije ruimte van geplaatste meubels: daar komt geen ander meubel */
  vrij: Vak[] = [];
  /** vloerplekken van geplaatste meubels */
  bezet: Vak[] = [];
  constructor(public kamer: Kamer, public vloer: Vak) {}

  /** Mag een meubel met deze vloerplek, hoogte en vrije ruimte hier staan? */
  kan(vak: Vak, top: number, vrij: Vak[] = [], plat = false): boolean {
    if (!binnenIn(vak, this.vloer)) return false;
    if (this.hard.some((h) => top > h.max && overlapt(vak, h.vak, 1e-3))) return false;
    if (plat) return true;
    if (this.bezet.some((b) => overlapt(vak, b, 1e-3))) return false;
    if (this.vrij.some((b) => overlapt(vak, b, 1e-3))) return false;
    for (const v of vrij) {
      if (!binnenIn(v, this.vloer)) return false;
      if (this.bezet.some((b) => overlapt(v, b, 1e-3))) return false;
      if (this.hard.some((h) => h.max < 0.05 && overlapt(v, h.vak, 1e-3))) return false;
    }
    return true;
  }

  zet(vak: Vak, vrij: Vak[] = [], plat = false) {
    if (plat) return;
    this.bezet.push(vak);
    this.vrij.push(...vrij);
  }
}

/* ───────────── context van een laag ───────────── */

export interface LaagContext {
  laag: Kamer[];
  openingen: Opening[];
  ramen: Raam[];
  trappen: Trap[];
  w: number;
  l: number;
  kit: Manifest;
  palet: (k: Kamer) => KamerPalet;
}

/** Kleuren van één kamer (palet.ts). */
export interface KamerPalet {
  textiel: Record<string, string>;
  hout?: string;
  front?: string;
}

function kaartVoor(k: Kamer, ctx: LaagContext): Kaart {
  const kaart = new Kaart(k, { x0: k.x, x1: k.x + k.w, z0: k.z, z1: k.z + k.l });
  const rand = kaart.vloer;
  for (const o of ctx.openingen) {
    if (o.soort === "deur") {
      const zw = zwaaiVak(o);
      // De deur en een strook van 30 cm erachter, om binnen te lopen.
      const breed = o.as === "x"
        ? { ...zw, z0: o.kant > 0 ? zw.z0 : zw.z0 - 0.3, z1: o.kant > 0 ? zw.z1 + 0.3 : zw.z1 }
        : { ...zw, x0: o.kant > 0 ? zw.x0 : zw.x0 - 0.3, x1: o.kant > 0 ? zw.x1 + 0.3 : zw.x1 };
      if (overlapt(breed, rand)) kaart.hard.push({ vak: breed, max: 0 });
    } else if (o.soort === "open") {
      const v = doorgangVak(o, 0.9);
      if (overlapt(v, rand)) kaart.hard.push({ vak: v, max: 0 });
    }
  }
  for (const t of ctx.trappen) for (const v of [trapVak(t), aanloopVak(t), bordesVak(t)]) if (overlapt(v, rand)) kaart.hard.push({ vak: v, max: 0 });
  for (const r of ctx.ramen) {
    if (r.kamer !== k.id) continue;
    const diep = r.soort === "raamdeur" ? 1.0 : 0.4;
    const max = r.soort === "raamdeur" ? 0 : r.onder - 0.03;
    const v: Vak = r.gevel === "voor" ? { x0: r.van - 0.05, x1: r.tot + 0.05, z0: ctx.l - diep, z1: ctx.l }
      : r.gevel === "achter" ? { x0: r.van - 0.05, x1: r.tot + 0.05, z0: 0, z1: diep }
      : r.gevel === "links" ? { x0: 0, x1: diep, z0: r.van - 0.05, z1: r.tot + 0.05 }
      : { x0: ctx.w - diep, x1: ctx.w, z0: r.van - 0.05, z1: r.tot + 0.05 };
    kaart.hard.push({ vak: v, max });
  }
  return kaart;
}

/* ───────────── plaatsen ───────────── */

interface Plaatser {
  ctx: LaagContext;
  kaart: Kaart;
  stukken: Stuk[];
  obj: (naam: string) => KitObject;
}

/** Een object met zijn rug tegen een muur, gecentreerd op u. Geeft het stuk terug of null. */
function tegenMuur(P: Plaatser, m: Muur, naam: string, u: number, opt: { sx?: number; sz?: number; n?: number; kleur?: Record<string, string>; vrijVoor?: number; vrijZij?: number; plat?: boolean; zonderVrij?: boolean } = {}): Stuk | null {
  const o = P.obj(naam);
  const sx = opt.sx ?? 1, sz = opt.sz ?? 1;
  const b = o.b * sx, d = o.d * sz;
  const n0 = m.n0 + (opt.n ?? 0);
  if (o.hoog && !m.hoog) return null;
  const vak = vakOp(m, u - b / 2, u + b / 2, n0, n0 + d);
  const vv = opt.vrijVoor ?? o.vrij.voor, vz = opt.vrijZij ?? o.vrij.zij;
  const vrij: Vak[] = opt.zonderVrij ? [] : [
    ...(vv > 0 ? [vakOp(m, u - b / 2 - vz, u + b / 2 + vz, n0 + d, n0 + d + vv)] : []),
    ...(vz > 0 ? [vakOp(m, u - b / 2 - vz, u - b / 2, n0, n0 + d), vakOp(m, u + b / 2, u + b / 2 + vz, n0, n0 + d)] : []),
  ];
  const top = (o.boven ?? 0) + o.h;
  if (!P.kaart.kan(vak, top, vrij, opt.plat ?? o.plat)) return null;
  P.kaart.zet(vak, vrij, opt.plat ?? o.plat);
  // De oorsprong ligt midden-achteraan: op u, tegen het muurvlak.
  const [x, z] = m.p(u, n0);
  const stuk: Stuk = { naam, kamer: P.kaart.kamer.id, x, z, y: 0, rot: m.rot, sx, sy: 1, sz, kleur: opt.kleur, vak, top, schaduw: !o.plat && !o.boven };
  P.stukken.push(stuk);
  return stuk;
}

/** Een vrijstaand object, met zijn voorkant naar `rot` (0 = +z), midden-achteraan op (x, z). */
function vrijStaand(P: Plaatser, naam: string, cx: number, cz: number, rot: number, opt: { sx?: number; sz?: number; kleur?: Record<string, string>; plat?: boolean; rond?: number } = {}): Stuk | null {
  const o = P.obj(naam);
  const sx = opt.sx ?? 1, sz = opt.sz ?? 1;
  const b = o.b * sx, d = o.d * sz;
  // Het midden van de vloerplek ligt d/2 voor de oorsprong, in de kijkrichting.
  const kwart = Math.round(rot / (Math.PI / 2)) & 3;
  const [hx, hz] = kwart % 2 === 0 ? [b / 2, d / 2] : [d / 2, b / 2];
  const vak: Vak = { x0: cx - hx, x1: cx + hx, z0: cz - hz, z1: cz + hz };
  const rond = opt.rond ?? o.vrij.rond;
  const vrij = rond > 0 ? [{ x0: vak.x0 - rond, x1: vak.x1 + rond, z0: vak.z0 - rond, z1: vak.z1 + rond }] : [];
  const top = (o.boven ?? 0) + o.h;
  if (!P.kaart.kan(vak, top, vrij.map((v) => klem(v, P.kaart.vloer)), opt.plat ?? o.plat)) return null;
  // vrije ruimte mag tot tegen de muren, niet erdoor
  P.kaart.zet(vak, vrij.map((v) => klem(v, P.kaart.vloer)), opt.plat ?? o.plat);
  const dx = Math.sin(rot) * d / 2, dz = Math.cos(rot) * d / 2;
  const stuk: Stuk = { naam, kamer: P.kaart.kamer.id, x: cx - dx, z: cz - dz, y: 0, rot, sx, sy: 1, sz, kleur: opt.kleur, vak, top, schaduw: !(opt.plat ?? o.plat) };
  P.stukken.push(stuk);
  return stuk;
}

const klem = (v: Vak, r: Vak): Vak => ({ x0: Math.max(v.x0, r.x0), x1: Math.min(v.x1, r.x1), z0: Math.max(v.z0, r.z0), z1: Math.min(v.z1, r.z1) });

/** Zonder vloerplek: iets dat op een ander meubel staat of aan het plafond hangt. */
function erbij(P: Plaatser, m: Muur | null, naam: string, x: number, z: number, rot: number, opt: { sx?: number; kleur?: Record<string, string>; y?: number } = {}) {
  const o = P.obj(naam);
  P.stukken.push({ naam, kamer: P.kaart.kamer.id, x, z, y: opt.y ?? 0, rot, sx: opt.sx ?? 1, sy: 1, sz: 1, kleur: opt.kleur, top: (o.boven ?? 0) + o.h, schaduw: false });
}

/** Plekken langs een muur, van het midden naar buiten, in stappen van 5 cm. */
function plekken(m: Muur, b: number): number[] {
  const uit: number[] = [];
  const mid = m.L / 2;
  for (let s = 0; s <= m.L; s += 0.05) {
    for (const u of s === 0 ? [mid] : [mid - s, mid + s]) if (u - b / 2 >= 0.02 && u + b / 2 <= m.L - 0.02) uit.push(u);
  }
  return uit;
}

/** Probeert een muurobject op de muren in volgorde, op de eerste plek die past. */
function langsMuren(P: Plaatser, muren: Muur[], naam: string, opt: Parameters<typeof tegenMuur>[4] = {}): { stuk: Stuk; m: Muur; u: number } | null {
  const o = P.obj(naam);
  for (const m of muren) {
    for (const u of plekken(m, o.b * (opt.sx ?? 1))) {
      const s = tegenMuur(P, m, naam, u, opt);
      if (s) return { stuk: s, m, u };
    }
  }
  return null;
}

/** De vier muren van een kamer, langste eerst, die zonder ramen voorop. */
function murenVan(k: Kamer, ctx: LaagContext): Muur[] {
  return WANDEN.map((wand) => muurVan(k, wand, ctx.w, ctx.l));
}

function heeftRaam(k: Kamer, m: Muur, ctx: LaagContext): boolean {
  const gevel = { achter: "achter", voor: "voor", links: "links", rechts: "zij" }[m.wand];
  return ctx.ramen.some((r) => r.kamer === k.id && r.gevel === gevel);
}

/* ───────────── recepten ───────────── */

function leefruimte(P: Plaatser, k: Kamer, ctx: LaagContext, pal: KamerPalet, accent: Map<string, Wand>, eettafel: boolean) {
  const muren = murenVan(k, ctx).sort((a, b) => Number(heeftRaam(k, a, ctx)) - Number(heeftRaam(k, b, ctx)) || b.L - a.L);
  // Zetel tegen een muur met genoeg kamer ervoor voor salontafel en een looppad.
  let zetel: { stuk: Stuk; m: Muur; u: number } | null = null;
  for (const naam of ["leefruimte_zetel_3zit", "leefruimte_zetel_2zit"]) {
    zetel = langsMuren(P, muren.filter((m) => m.D >= 3.2), naam, { kleur: pal.textiel, vrijVoor: 1.5, vrijZij: 0.1 });
    if (zetel) break;
  }
  if (zetel) {
    const { m, u } = zetel;
    accent.set(k.id, m.wand);
    const zd = P.obj(zetel.stuk.naam).d;
    // Salontafel 40 cm voor de zetel, kleed eronder, lamp naast de zetel. De vrije
    // zone voor de zetel was er net voor de salontafel; die mag erin.
    P.kaart.vrij.splice(-3, 1);
    const n = m.n0 + zd + 0.42;
    const [tx, tz] = m.p(u, n + 0.3);
    const tafel = vrijStaand(P, "leefruimte_salontafel", tx, tz, m.rot, { kleur: { eik: pal.hout ?? "" }, rond: 0.3 });
    const kb = Math.min(2.6, P.obj(zetel.stuk.naam).b + 0.5);
    const [kx, kz] = m.p(u, m.n0 + zd - 0.25 + 0.85);
    const kleed = P.obj("leefruimte_kleed");
    vrijStaand(P, "leefruimte_kleed", kx, kz, m.rot, { sx: kb / kleed.b, sz: 1.7 / kleed.d, plat: true, kleur: pal.textiel });
    void tafel;
    const zb = P.obj(zetel.stuk.naam).b;
    for (const s of [1, -1]) {
      const [lx, lz] = m.p(u + s * (zb / 2 + 0.3), m.n0 + 0.3);
      if (vrijStaand(P, "leefruimte_lamp_staand", lx, lz, m.rot)) break;
    }
    // Tv-meubel tegenover de zetel.
    const over = muurVan(k, tegenover[m.wand], ctx.w, ctx.l);
    for (const naam of ["leefruimte_tvmeubel_180", "leefruimte_tvmeubel_140"]) {
      const uo = over.L - u;
      if (tegenMuur(P, over, naam, uo, { kleur: { eik: pal.hout ?? "" }, vrijVoor: 0.6 }) || langsMuren(P, [over], naam, { kleur: { eik: pal.hout ?? "" }, vrijVoor: 0.6 })) break;
    }
  }
  // Boekenkast tegen een hoge muur, een plant in een vrije hoek.
  for (const naam of ["leefruimte_boekenkast_100", "leefruimte_boekenkast_60"]) {
    if (langsMuren(P, murenVan(k, ctx).filter((m) => m.hoog), naam, { kleur: { eik: pal.hout ?? "" } })) break;
  }
  if (eettafel) eethoek(P, k, ctx, pal);
  hoekplant(P, k);
}

function hoekplant(P: Plaatser, k: Kamer) {
  const r = 0.3;
  for (const [cx, cz] of [[k.x + r + 0.05, k.z + r + 0.05], [k.x + k.w - r - 0.05, k.z + r + 0.05], [k.x + r + 0.05, k.z + k.l - r - 0.05], [k.x + k.w - r - 0.05, k.z + k.l - r - 0.05]]) {
    if (vrijStaand(P, "leefruimte_plant_groot", cx, cz, 0)) return;
  }
}

/** Een tafel met vier stoelen en een hanglamp erboven, waar er plaats is. */
function eethoek(P: Plaatser, k: Kamer, ctx: LaagContext, pal: KamerPalet): boolean {
  const kandidaten: [number, number][] = [];
  for (let fx = 0.25; fx <= 0.75; fx += 0.125) for (let fz = 0.25; fz <= 0.75; fz += 0.125) kandidaten.push([k.x + k.w * fx, k.z + k.l * fz]);
  kandidaten.sort((a, b) => Math.hypot(a[0] - (k.x + k.w / 2), a[1] - (k.z + k.l / 2)) - Math.hypot(b[0] - (k.x + k.w / 2), b[1] - (k.z + k.l / 2)));
  for (const naam of ["keuken_tafel_160", "keuken_tafel_120"]) {
    for (const rot of [k.w >= k.l ? 0 : Math.PI / 2, k.w >= k.l ? Math.PI / 2 : 0]) {
      for (const [cx, cz] of kandidaten) {
        const t = vrijStaand(P, naam, cx, cz, rot, { kleur: { eik: pal.hout ?? "" } });
        if (!t) continue;
        // Stoelen: twee aan elke lange kant, met de rug naar buiten.
        const o = P.obj(naam);
        const lang = rot === 0 ? [1, 0] : [0, 1];
        const breed = rot === 0 ? [0, 1] : [1, 0];
        for (const s of [-1, 1]) for (const f of o.b > 1.4 ? [-0.38, 0.38] : [-0.22, 0.22]) {
          const sx = cx + lang[0] * f * o.b + breed[0] * s * (o.d / 2 + 0.2);
          const sz = cz + lang[1] * f * o.b + breed[1] * s * (o.d / 2 + 0.2);
          // De stoel kijkt naar de tafel.
          const r = Math.atan2(-breed[0] * s, -breed[1] * s);
          erbij(P, null, "keuken_stoel", sx - Math.sin(r) * 0.22, sz - Math.cos(r) * 0.22, r, { kleur: pal.textiel });
          P.stukken[P.stukken.length - 1].schaduw = true;
        }
        erbij(P, null, "keuken_pendellamp", cx, cz + 0.15, 0);
        return true;
      }
    }
  }
  return false;
}

function keuken(P: Plaatser, k: Kamer, ctx: LaagContext, pal: KamerPalet, accent: Map<string, Wand>) {
  const front = { front: pal.front ?? "" };
  if (k.inrichting) {
    const m = muurVan(k, k.inrichting, ctx.w, ctx.l);
    accent.set(k.id, m.wand);
    // Het blok loopt over het langste stuk muur waar niets in de weg zit (diepte 65 cm).
    let best: [number, number] = [0, 0];
    let a = -1;
    for (let u = 0.02; u <= m.L - 0.02 + 1e-9; u += 0.05) {
      const vrij = P.kaart.kan(vakOp(m, u - 0.025, u + 0.025, m.n0, m.n0 + 0.65), 2.2);
      if (vrij && a < 0) a = u;
      if ((!vrij || u + 0.05 > m.L - 0.02) && a >= 0) {
        const e = vrij ? u : u - 0.05;
        if (e - a > best[1] - best[0]) best = [a, e];
        a = -1;
      }
    }
    const [u0, u1] = best;
    const kolom = m.hoog && u1 - u0 >= 2.4;
    // Hoogstens zeven modules (4,2 m): een keukenblok van 12 m over de hele muur van een
    // brede woning bestaat niet. Het blok staat in het midden van de vrije muur.
    const n = Math.min(7, Math.floor((u1 - u0 - (kolom ? 0.6 : 0)) / 0.6 + 1e-6));
    if (n >= 2) {
      const modules: string[] = Array.from({ length: n }, () => "keuken_onderkast_60");
      modules[0] = "keuken_ladekast_60";
      const spoel = n >= 3 ? 1 : 0;
      const kook = n >= 3 ? n - 1 - Math.floor((n - 2) / 2) : n - 1;
      modules[kook] = "keuken_ovenkast_60";
      const start = u0 + (u1 - u0 - n * 0.6 - (kolom ? 0.6 : 0)) / 2;
      const y = 0;
      modules.forEach((naam, i) => {
        const u = start + 0.3 + i * 0.6;
        tegenMuur(P, m, naam, u, { kleur: front, vrijVoor: 0.9, zonderVrij: i > 0 });
      });
      const runL = n * 0.6;
      const [wx, wz] = m.p(start + runL / 2, m.n0);
      erbij(P, m, "keuken_werkblad", wx, wz, m.rot, { sx: runL + 0.02, kleur: { werkblad: "" }, y });
      const [sx, sz] = m.p(start + 0.3 + spoel * 0.6, m.n0);
      erbij(P, m, "keuken_spoelbak", sx, sz, m.rot);
      const [kx, kz] = m.p(start + 0.3 + kook * 0.6, m.n0);
      erbij(P, m, "keuken_kookplaat", kx, kz, m.rot);
      if (n >= 4) {
        const vrijeMod = [...Array(n).keys()].find((i) => i !== spoel && i !== kook && i > spoel);
        if (vrijeMod !== undefined) {
          const [px, pz] = m.p(start + 0.3 + vrijeMod * 0.6, m.n0);
          erbij(P, m, "keuken_werkbladspullen", px, pz, m.rot);
        }
      }
      if (m.hoog) {
        erbij(P, m, "keuken_dampkap_60", kx, kz, m.rot);
        for (let i = 0; i < n; i++) {
          if (i === kook) continue;
          const [bx, bz] = m.p(start + 0.3 + i * 0.6, m.n0);
          erbij(P, m, "keuken_bovenkast_60", bx, bz, m.rot, { kleur: front });
        }
      }
      if (kolom) tegenMuur(P, m, "keuken_koelkastkolom_60", start + runL + 0.3, { kleur: front, vrijVoor: 0.9 });
      // Het blok zelf staat op de kaart via zijn modules; houd de werkzone ervoor vrij.
      P.kaart.vrij.push(vakOp(m, start, start + runL + (kolom ? 0.6 : 0), m.n0 + 0.6, m.n0 + 1.5));
    }
  }
  // Een eiland als de keuken ruim is, anders een tafel.
  const eiland = ["keuken_eiland_180", "keuken_eiland_140"].some((naam) => {
    if (!k.inrichting) return false;
    const m = muurVan(k, k.inrichting, ctx.w, ctx.l);
    const o = P.obj(naam);
    if (m.D < 0.65 + 1.0 + o.d + 0.8) return false;
    for (const u of plekken(m, o.b)) {
      const [cx, cz] = m.p(u, m.n0 + 0.65 + 1.0 + o.d / 2);
      // Met de krukken van het blok weg: de werkgang tussen blok en eiland blijft vrij.
      if (vrijStaand(P, naam, cx, cz, m.rot, { kleur: { ...front, werkblad: "" } })) {
        const n = m.n0 + 0.65 + 1.0 + 0.45;
        for (const du of [-0.4, 0.4]) {
          const [px, pz] = m.p(u + du, n);
          erbij(P, null, "keuken_pendellamp", px, pz, 0);
        }
        return true;
      }
    }
    return false;
  });
  // Een ruime keuken is een leefkeuken: naast het eiland ook een eettafel, en een plant.
  if (!eiland || k.w * k.l > LEEFKEUKEN) eethoek(P, k, ctx, pal);
  if (k.w * k.l > LEEFKEUKEN) hoekplant(P, k);
}

/** Vanaf deze oppervlakte (m²) krijgt de keuken ook de eettafel, en de leefruimte niet meer. */
const LEEFKEUKEN = 20;

function slaapkamer(P: Plaatser, k: Kamer, ctx: LaagContext, pal: KamerPalet, accent: Map<string, Wand>, kind: boolean) {
  // Hoofdbord liefst tegen een muur zonder raam, en zo dat er voor het bed nog 60 cm overblijft.
  const muren = murenVan(k, ctx).sort((a, b) => Number(heeftRaam(k, a, ctx)) - Number(heeftRaam(k, b, ctx)) || Number(!a.hoog) - Number(!b.hoog) || b.L - a.L);
  const bedden = kind ? ["slaapkamer_bed_90"] : ["slaapkamer_bed_160", "slaapkamer_bed_140", "slaapkamer_bed_90"];
  // Eerst met nachtkastjes en ruimte aan beide kanten; past dat nergens, dan het bed
  // tegen een zijmuur zonder kastjes, zoals in een kleine slaapkamer. Het voeteneind houdt 60 cm.
  for (const ruim of [true, false]) for (const naam of bedden) {
    const o = P.obj(naam);
    const metKastjes = ruim && o.b > 1;
    for (const m of muren) {
      if (m.D < o.d + 0.6) continue;
      for (const u of plekken(m, o.b + (metKastjes ? 1.0 : 0))) {
        const bed = tegenMuur(P, m, naam, u, { kleur: pal.textiel, vrijZij: metKastjes ? 0.5 : 0, vrijVoor: 0.6 });
        if (!bed) continue;
        accent.set(k.id, m.wand);
        // Nachtkastjes in de vrije strook naast het bed.
        if (metKastjes) {
          P.kaart.vrij.splice(-3, 3);
          P.kaart.vrij.push(vakOp(m, u - o.b / 2 - 0.5, u + o.b / 2 + 0.5, m.n0 + o.d, m.n0 + o.d + 0.6));
          for (const s of [-1, 1]) tegenMuur(P, m, "slaapkamer_nachtkast", u + s * (o.b / 2 + 0.27), { kleur: { eik: pal.hout ?? "" }, zonderVrij: true });
        }
        const [kx, kz] = m.p(u, m.n0 + o.d * 0.62);
        const kleed = P.obj("slaapkamer_kleed");
        vrijStaand(P, "slaapkamer_kleed", kx, kz, m.rot, { sx: (o.b + (metKastjes ? 0.9 : 0.5)) / kleed.b, sz: Math.min(1.6, o.d * 0.75) / kleed.d, plat: true, kleur: pal.textiel });
        kleerkast(P, k, ctx, pal);
        if (kind) langsMuren(P, murenVan(k, ctx), "slaapkamer_speelkist", { kleur: pal.textiel });
        return;
      }
    }
  }
  kleerkast(P, k, ctx, pal);
}

/**
 * Bureau: het bureau met de rug tegen een muur zonder raam (het scherm is hoger
 * dan een vensterbank), de stoel ervoor, een boekenkast tegen een hoge muur of
 * anders een lage archiefkast, een kleed en een plant.
 */
function bureau(P: Plaatser, k: Kamer, ctx: LaagContext, pal: KamerPalet, accent: Map<string, Wand>) {
  const muren = murenVan(k, ctx).sort((a, b) => Number(heeftRaam(k, a, ctx)) - Number(heeftRaam(k, b, ctx)) || b.L - a.L);
  for (const naam of ["bureau_bureau_140", "bureau_bureau_120"]) {
    const plek = langsMuren(P, muren.filter((m) => m.D >= 1.9), naam, { kleur: { eik: pal.hout ?? "" }, vrijVoor: 0.95, vrijZij: 0.05 });
    if (!plek) continue;
    const { m, u } = plek;
    accent.set(k.id, m.wand);
    // De stoel kijkt naar het bureau; zijn voorkant schuift 15 cm onder het blad.
    const [cx, cz] = m.p(u + 0.15, m.n0 + 0.55 + P.obj("bureau_stoel").d);
    erbij(P, null, "bureau_stoel", cx, cz, m.rot + Math.PI, { kleur: { stof: pal.textiel.stof ?? "" } });
    P.stukken[P.stukken.length - 1].schaduw = true;
    const [kx, kz] = m.p(u, m.n0 + 1.05);
    const kleed = P.obj("slaapkamer_kleed");
    vrijStaand(P, "slaapkamer_kleed", kx, kz, m.rot, { sx: 1.6 / kleed.b, sz: 1.2 / kleed.d, plat: true, kleur: pal.textiel });
    break;
  }
  if (!langsMuren(P, murenVan(k, ctx).filter((m) => m.hoog), "leefruimte_boekenkast_100", { kleur: { eik: pal.hout ?? "" } })) {
    langsMuren(P, muren, "bureau_archiefkast_120", { kleur: { eik: pal.hout ?? "" } });
  }
  hoekplant(P, k);
}

function kleerkast(P: Plaatser, k: Kamer, ctx: LaagContext, pal: KamerPalet) {
  const hoog = murenVan(k, ctx).filter((m) => m.hoog);
  for (const naam of ["slaapkamer_kleerkast_150", "slaapkamer_kleerkast_100"]) {
    if (langsMuren(P, hoog, naam)) return;
  }
  // Geen hoge muur vrij: een commode met spiegel kan alleen tegen een hoge muur; anders niets.
  langsMuren(P, hoog, "slaapkamer_commode_120", { kleur: { eik: pal.hout ?? "" } });
}

/** Gordijnen aan elk raam van de kamer: twee panelen naast het glas en een rail erboven. */
function gordijnen(P: Plaatser, k: Kamer, ctx: LaagContext, pal: KamerPalet) {
  for (const r of ctx.ramen) {
    if (r.kamer !== k.id || r.soort === "hoog") continue;
    const wand: Wand = r.gevel === "zij" ? "rechts" : (r.gevel as Wand);
    const m = muurVan(k, wand, ctx.w, ctx.l);
    // Een gordijn hangt van de rail tot de vloer: in de opengewerkte laag zou het boven
    // een doorgesneden gevel uitsteken, dus alleen aan de achter- en linkergevel.
    if (!m.hoog) continue;
    // u langs de muur loopt voor "voor" en "links" tegen de as in.
    const naarU = (a: number) => (wand === "achter" ? a - k.x : wand === "voor" ? k.x + k.w - a : wand === "links" ? k.z + k.l - a : a - k.z);
    const [ua, ub] = [naarU(r.van), naarU(r.tot)].sort((p, q) => p - q);
    const paneel = P.obj("algemeen_gordijn");
    const pb = 0.34;
    let geplaatst = 0;
    // Naast het glas, buiten de vrije zone voor het raam (die is 5 cm breder dan het raam).
    for (const u of [ua - pb / 2 - 0.07, ub + pb / 2 + 0.07]) {
      if (u - pb / 2 < 0.03 || u + pb / 2 > m.L - 0.03) continue;
      const vak = vakOp(m, u - pb / 2, u + pb / 2, m.n0, m.n0 + 0.08);
      if (!P.kaart.kan(vak, 2.5)) continue;
      P.kaart.zet(vak);
      const [x, z] = m.p(u, m.n0 + 0.03);
      P.stukken.push({ naam: "algemeen_gordijn", kamer: k.id, x, z, y: 0, rot: m.rot, sx: pb / paneel.b, sy: 1, sz: 1, kleur: { gordijn: pal.textiel.gordijn ?? "" }, vak, top: 2.5, schaduw: false });
      geplaatst++;
    }
    if (geplaatst) {
      const lengte = ub - ua + 0.8;
      const [x, z] = m.p((ua + ub) / 2, m.n0);
      erbij(P, m, "algemeen_gordijnrail", x, z, m.rot, { sx: lengte });
    }
  }
}

/* ───────────── de laag ───────────── */

/** Kamers die in deze versie van de kit ingericht worden. */
export const INGERICHTE_KAMERS = new Set(["Leefruimte", "Keuken", "Slaapkamer", "Bureau"]);

/**
 * De inrichting van één bouwlaag: losse meubels per kamer, en in elke
 * binnendeur een kader met deurblad en klink.
 */
export function richLaagIn(ctx: LaagContext): LaagInrichting {
  const index = new Map(ctx.kit.objecten.map((o) => [o.naam, o]));
  const obj = (naam: string) => {
    const o = index.get(naam);
    if (!o) throw new Error(`kit: ${naam} ontbreekt`);
    return o;
  };
  const stukken: Stuk[] = [];
  const vakken: Vak[] = [];
  const accent = new Map<string, Wand>();
  const heeftKeuken = ctx.laag.some((k) => k.naam === "Keuken");
  const grooteKeuken = ctx.laag.some((k) => k.naam === "Keuken" && k.w * k.l > LEEFKEUKEN);
  const slaapkamers = ctx.laag.filter((k) => k.naam === "Slaapkamer").sort((a, b) => b.w * b.l - a.w * a.l);

  for (const k of ctx.laag) {
    if (k.soort === "circulatie" || !INGERICHTE_KAMERS.has(k.naam)) continue;
    const P: Plaatser = { ctx, kaart: kaartVoor(k, ctx), stukken: [], obj };
    const pal = ctx.palet(k);
    if (k.naam === "Leefruimte") leefruimte(P, k, ctx, pal, accent, !heeftKeuken || (k.w * k.l > 26 && !grooteKeuken));
    else if (k.naam === "Keuken") keuken(P, k, ctx, pal, accent);
    else if (k.naam === "Bureau") bureau(P, k, ctx, pal, accent);
    else if (k.naam === "Slaapkamer") slaapkamer(P, k, ctx, pal, accent, slaapkamers.indexOf(k) > 0 && k.w * k.l < 12);
    gordijnen(P, k, ctx, pal);
    stukken.push(...P.stukken);
    vakken.push(...P.kaart.bezet);
  }

  // Binnendeuren: kader, blad en klink uit de kit, in de opening en met het blad zoals het plan het laat draaien.
  for (const o of ctx.openingen) {
    if (o.soort !== "deur") continue;
    const b = o.tot - o.van;
    const naam = b < 0.78 ? "algemeen_deur_70" : "algemeen_deur_85";
    const mid = (o.van + o.tot) / 2;
    // Het model draait naar -Y in Blender = +Z in three (rot 0): de kant waar het blad opendraait.
    const rot = o.as === "x" ? (o.kant > 0 ? 0 : Math.PI) : o.kant > 0 ? Math.PI / 2 : -Math.PI / 2;
    // Het blad hangt aan -x van het model; bij een scharnier aan de andere kant spiegelen we x.
    const lokaalX = o.as === "x" ? (o.kant > 0 ? 1 : -1) : o.kant > 0 ? -1 : 1;
    const scharnierVan = (o.scharnier ?? "van") === "van";
    const spiegel = (scharnierVan ? -1 : 1) * lokaalX < 0 ? 1 : -1;
    const [x, z] = o.as === "x" ? [mid, o.vast] : [o.vast, mid];
    stukken.push({ naam, kamer: "", x, z, y: 0, rot, sx: spiegel, sy: 1, sz: 1, top: 2.17, schaduw: false, wand: true });
  }
  return { stukken, vakken, accent };
}

/**
 * Een plek voor een toestel die niet op een meubel valt: de dichtstbijzijnde
 * vrije plek rond (x, z) in de kamer, op een raster van 10 cm. Een toestel is
 * ongeveer 50 × 50 cm; zonder vrije plek blijft het waar het stond.
 */
export function vrijePlek(k: Kamer, x: number, z: number, vakken: Vak[], straal = 0.3): [number, number] {
  const vrij = (px: number, pz: number) => {
    if (px - straal < k.x + 0.08 || px + straal > k.x + k.w - 0.08 || pz - straal < k.z + 0.08 || pz + straal > k.z + k.l - 0.08) return false;
    const v = { x0: px - straal, x1: px + straal, z0: pz - straal, z1: pz + straal };
    return !vakken.some((b) => overlapt(v, b));
  };
  if (vrij(x, z)) return [x, z];
  for (let r = 0.1; r < Math.max(k.w, k.l); r += 0.1) {
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2;
      const px = x + Math.cos(a) * r, pz = z + Math.sin(a) * r;
      if (vrij(px, pz)) return [px, pz];
    }
  }
  return [x, z];
}

import { useEffect, useMemo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { MeshStandardMaterial, RepeatWrapping, SRGBColorSpace, type Texture, TextureLoader } from "three";
import { FH, HC, SLAB, T } from "../maten";
import { GREPPEL, KELDER, KOKER, kelderRaam, kelderTrap } from "../kelder";
import type { Hoek } from "../types";
import type { Raam, Trap } from "../woning";
import { KELDER_TEXTUUR, TEXTUUR } from "./bestanden";
import { Bouwer, muurMinGaten } from "./geo";

/*
  The cellar, opened up like the storeys above it: the walls nearest the camera cut at the
  same height (HC), the far ones up to the ground, standing in a block of soil drawn in
  section. Built after the damp simulator's cellar render (Vernast: kelder_scene.py): red
  brick inside, a concrete floor on a layer of soil, light concrete wall heads, a massive
  concrete stair with a steel rail, and grass on the soil behind the far walls.

  Only drawn while the cellar is the open storey: below ground, a closed cellar would stand
  in front of the street picture, which has the garden there.
*/

/** Soil beyond the far walls, and under the floor slab, in metres. */
const MARGE = 1.0;
const ONDER = 0.6;
/** A massive stair: as many steps as the house's own stair, as high as one storey. */
const TREDEN = 13;

const ZONDER_SCHADUW = new Set(["leuning", "glas", "rooster"]);
/** The light well in front of the cellar window: how far it reaches out, and its wall. */
const KW = 0.08;

function tegel(t: Texture, pw: number, ph: number): Texture {
  const c = t.clone();
  c.wrapS = c.wrapT = RepeatWrapping;
  c.repeat.set(1 / pw, 1 / ph);
  c.colorSpace = SRGBColorSpace;
  c.anisotropy = 4;
  c.needsUpdate = true;
  return c;
}

function bouwKelder(w: number, l: number, hoek: Hoek, trap: Trap, raam: Raam) {
  const B = new Bouwer();
  const yb = KELDER * FH, yf = yb + SLAB, snede = yf + HC;
  const voorNabij = hoek.kant === "voor", rechtsNabij = hoek.zij === "rechts";

  // The soil: a layer under the slab over the whole block, and full height beyond the far walls.
  // On the near sides the soil stops at the far end of the trench (kelder.ts: GREPPEL), where
  // the street's ground takes over: its cut ends show at the ends of the trench.
  const x0 = rechtsNabij ? -T - MARGE : -T - GREPPEL, x1 = rechtsNabij ? w + T + GREPPEL : w + T + MARGE;
  const z0 = voorNabij ? -T - MARGE : -T - GREPPEL, z1 = voorNabij ? l + T + GREPPEL : l + T + MARGE;
  B.blok("grond", x0, x1, yb - ONDER, yb, z0, z1);
  if (rechtsNabij) B.blok("grond", x0, -T, yb, 0, z0, z1, { boven: "gras" });
  else B.blok("grond", w + T, x1, yb, 0, z0, z1, { boven: "gras" });
  const ga = rechtsNabij ? -T : x0, gb = rechtsNabij ? x1 : w + T;
  // Window and light well (in the back wall): the soil behind it leaves room for the well.
  const ry0 = yf + raam.onder, ry1 = yf + raam.boven;
  const kok = { a0: raam.van - 0.12, a1: raam.tot + 0.12, b0: -T - KOKER, b1: -T };
  const kb = ry0 - 0.15;
  if (voorNabij) {
    B.blok("grond", ga, gb, yb, kb, z0, -T);
    for (const r of muurMinGaten(ga, gb, z0, -T, [kok])) B.blok("grond", r.a0, r.a1, kb, 0, r.b0, r.b1, { boven: "gras" });
    // The well: concrete walls up to just above the grass, gravel at the bottom, a grate on top.
    B.blok("rand", kok.a0, kok.a1, kb, 0.04, kok.b0, kok.b0 + KW);
    B.blok("rand", kok.a0, kok.a0 + KW, kb, 0.04, kok.b0 + KW, kok.b1);
    B.blok("rand", kok.a1 - KW, kok.a1, kb, 0.04, kok.b0 + KW, kok.b1);
    B.blok("grind", kok.a0 + KW, kok.a1 - KW, kb, kb + 0.05, kok.b0 + KW, kok.b1);
    for (let x = kok.a0 + KW + 0.03; x < kok.a1 - KW; x += 0.06) B.blok("rooster", x, x + 0.015, 0.0, 0.035, kok.b0 + KW, kok.b1);
  }
  else B.blok("grond", ga, gb, yb, 0, l + T, z1, { boven: "gras" });

  // The floor slab, its cut ends showing on the near sides.
  B.blok("beton", -T, w + T, yb, yf, -T, l + T, { boven: "vloer" });

  // The walls. A corner column stands full height when a far wall meets it, so the cut
  // never runs into a far wall; the near corner is cut with both near walls.
  const linksVer = rechtsNabij, rechtsVer = !rechtsNabij, achterVer = voorNabij, voorVer = !voorNabij;
  const top = (ver: boolean) => (ver ? 0 : snede);
  const kop = (ver: boolean) => ({ boven: ver ? "rand" : "snede" });
  for (const [ver, za, zb] of [[achterVer, -T, 0], [voorVer, l, l + T]] as const) {
    const xa = !ver && linksVer ? 0 : -T, xb = !ver && rechtsVer ? w : w + T;
    const gat = za < 0 ? [{ a0: raam.van, a1: raam.tot, b0: ry0, b1: ry1 }] : [];
    for (const r of muurMinGaten(xa, xb, yf, top(ver), gat)) {
      // Under the window its sill, in light concrete.
      const opt = r.b1 < top(ver) - 1e-4 ? { boven: "rand" } : kop(ver);
      B.blok("baksteen", r.a0, r.a1, r.b0, r.b1, za, zb, opt);
    }
  }
  // The window: a white frame with a mullion and glass, set in the outer half of the wall.
  if (achterVer) {
    const f = 0.05, n0 = -0.15, n1 = -0.09;
    B.blok("glas", raam.van, raam.tot, ry0, ry1, n0 + 0.02, n0 + 0.03);
    B.blok("kader", raam.van, raam.van + f, ry0, ry1, n0, n1);
    B.blok("kader", raam.tot - f, raam.tot, ry0, ry1, n0, n1);
    B.blok("kader", raam.van, raam.tot, ry0, ry0 + f, n0, n1);
    B.blok("kader", raam.van, raam.tot, ry1 - f, ry1, n0, n1);
    const m = (raam.van + raam.tot) / 2;
    B.blok("kader", m - 0.025, m + 0.025, ry0, ry1, n0, n1);
  }
  for (const [ver, xa, xb] of [[linksVer, -T, 0], [rechtsVer, w, w + T]] as const) {
    const za = ver && !achterVer ? -T : 0, zb = ver && !voorVer ? l + T : l;
    B.blok("baksteen", xa, xb, yf, top(ver), za, zb, kop(ver));
  }

  // The stair: massive concrete steps up to the ground floor, with a rail on the open side.
  const op = FH / TREDEN, aan = trap.w / TREDEN, r = trap.richting;
  const tz0 = trap.z, tz1 = trap.z + trap.l;
  for (let i = 0; i < TREDEN; i++) {
    const hoog = Math.min(yf + op * (i + 1), 0);
    const [a, b] = r > 0 ? [trap.x + aan * i, trap.x + aan * (i + 1)] : [trap.x + trap.w - aan * (i + 1), trap.x + trap.w - aan * i];
    B.blok("trede", a, b, yf, hoog, tz0, tz1);
  }
  const tegenAchter = tz0 < l - tz1;
  const [rz0, rz1] = tegenAchter ? [tz1 - 0.06, tz1 - 0.03] : [tz0 + 0.03, tz0 + 0.06];
  const neus = (x: number) => yf + ((r > 0 ? x - trap.x : trap.x + trap.w - x) / trap.w) * FH;
  const lh = 0.9, xa = trap.x, xb = trap.x + trap.w;
  const knip = (y: number) => Math.min(y, 0.05);
  B.hexa("leuning", [
    [xa, knip(neus(xa) + lh), rz0], [xb, knip(neus(xb) + lh), rz0], [xb, knip(neus(xb) + lh), rz1], [xa, knip(neus(xa) + lh), rz1],
    [xa, knip(neus(xa) + lh) + 0.04, rz0], [xb, knip(neus(xb) + lh) + 0.04, rz0], [xb, knip(neus(xb) + lh) + 0.04, rz1], [xa, knip(neus(xa) + lh) + 0.04, rz1],
  ]);
  for (let i = 1; i < TREDEN; i += 3) {
    const x = r > 0 ? trap.x + aan * (i + 0.5) : trap.x + trap.w - aan * (i + 0.5);
    const voet = Math.min(yf + op * (i + 1), 0);
    if (voet >= -0.05) continue;
    B.blok("leuning", x - 0.015, x + 0.015, voet, knip(neus(x) + lh), rz0, rz1);
  }
  inrichten(B, w, l, hoek, trap, yf);
  return B.bouw();
}

/** A tiny deterministic random, so the boxes stand the same way every time. */
function toeval(zaad: number): () => number {
  let x = zaad;
  return () => { x = (x * 16807) % 2147483647; return x / 2147483647; };
}

interface Muur { as: "x" | "z"; vast: number; binnen: 1 | -1; lengte: number; ver: boolean }
interface Rechthoek { x0: number; x1: number; z0: number; z1: number }
type Rnd = () => number;
/** Builds a piece against wall `m`, from `u0` along it, `n` metres into the room. */
type Bouw = (blok: (mat: string, u0: number, u1: number, n0: number, n1: number, y0: number, y1: number) => void,
  cil: (mat: string, u: number, n: number, y0: number, y1: number, r: number) => void, rnd: Rnd) => void;
interface Stuk { L: number; D: number; ver: boolean; bouw: Bouw }

/** A steel rack with four shelves of boxes, each box a little different. */
const REK: Stuk = { L: 1.6, D: 0.45, ver: true, bouw: (blok, _cil, rnd) => {
  const { L, D } = REK;
  for (const u of [0, L - 0.03]) for (const n of [0.02, D - 0.03]) blok("rek", u, u + 0.03, n, n + 0.03, 0, 1.85);
  for (const [i, h] of [0.12, 0.6, 1.08, 1.56].entries()) {
    blok("plank", 0, L, 0.02, D, h, h + 0.025);
    if (i === 3 && rnd() < 0.4) continue;
    let u = 0.05;
    while (u < L - 0.3) {
      const bu = 0.26 + rnd() * 0.22, bh = 0.18 + rnd() * 0.2, bd = 0.28 + rnd() * 0.12;
      if (u + bu > L - 0.04) break;
      const n0 = 0.04 + rnd() * (D - bd - 0.06);
      blok(rnd() < 0.5 ? "doos" : "doos2", u, u + bu, n0, n0 + bd, h + 0.025, h + 0.025 + bh);
      u += bu + 0.04 + rnd() * 0.1;
    }
  }
} };

/** A workbench with a pegboard of tools above it and a vice. */
const WERKBANK: Stuk = { L: 1.6, D: 0.62, ver: true, bouw: (blok, cil) => {
  const { L, D } = WERKBANK;
  for (const u of [0.04, L - 0.09]) for (const n of [0.06, D - 0.1]) blok("rek", u, u + 0.05, n, n + 0.05, 0, 0.86);
  blok("hout", 0, L, 0.02, D, 0.86, 0.92);
  blok("hout", 0.04, L - 0.04, 0.06, D - 0.06, 0.18, 0.21);
  blok("paneel", 0.05, L - 0.05, 0, 0.02, 1.0, 1.75);
  // Tools on the pegboard: a saw, hammers, a square, spanners.
  blok("metaal", 0.15, 0.62, 0.02, 0.03, 1.35, 1.52);
  blok("zwart", 0.7, 0.74, 0.02, 0.05, 1.2, 1.6);
  blok("zwart", 0.82, 0.86, 0.02, 0.05, 1.25, 1.6);
  blok("metaal", 0.98, 1.3, 0.02, 0.03, 1.58, 1.62);
  blok("metaal", 0.98, 1.02, 0.02, 0.03, 1.3, 1.62);
  for (const [i, u] of [1.12, 1.2, 1.28, 1.36].entries()) blok("metaal", u, u + 0.025, 0.02, 0.035, 1.12 + i * 0.03, 1.32);
  blok("donker", L - 0.35, L - 0.15, D - 0.2, D - 0.02, 0.92, 1.02);
  cil("rood", 0.35, D - 0.2, 0.92, 1.12, 0.09);
} };

/** A wall-hung central heating boiler with its pipes and a red expansion vessel. */
const KETEL: Stuk = { L: 0.75, D: 0.4, ver: true, bouw: (blok, cil) => {
  blok("kast", 0.08, 0.52, 0.02, 0.37, 1.3, 2.05);
  blok("zwart", 0.22, 0.38, 0.37, 0.375, 1.5, 1.58);
  for (const u of [0.16, 0.26, 0.36, 0.46]) cil("koper", u, 0.12, 0.35, 1.3, 0.012);
  cil("rood", 0.64, 0.14, 1.45, 1.85, 0.1);
} };

/** A chest freezer: white, a lid with a seam and a handle. */
const DIEPVRIES: Stuk = { L: 1.1, D: 0.66, ver: false, bouw: (blok) => {
  const { L, D } = DIEPVRIES;
  blok("kast", 0, L, 0.02, D, 0.04, 0.82);
  blok("voeg", 0.01, L - 0.01, 0.03, D - 0.01, 0.72, 0.725);
  blok("kast", 0, L, 0.02, D, 0.82, 0.86);
  blok("metaal", L / 2 - 0.15, L / 2 + 0.15, D, D + 0.03, 0.76, 0.79);
  blok("zwart", 0.02, L - 0.02, 0.04, D - 0.02, 0, 0.04);
} };

/** A wooden wine rack with the bottles lying in it, necks out. */
const WIJNREK: Stuk = { L: 0.84, D: 0.32, ver: false, bouw: (blok, cil) => {
  const { L, D } = WIJNREK;
  for (const u of [0, L - 0.03]) blok("hout", u, u + 0.03, 0.02, D, 0, 1.0);
  const rijen = 5, kolommen = 6;
  for (let r = 0; r <= rijen; r++) blok("hout", 0, L, 0.02, D, r * 0.19, r * 0.19 + 0.02);
  for (let r = 0; r < rijen; r++) for (let k = 0; k < kolommen; k++) {
    if ((r * 7 + k * 3) % 5 === 0) continue;
    const u = 0.08 + k * ((L - 0.16) / (kolommen - 1)), y = r * 0.19 + 0.1;
    // A bottle on its side, pointing into the room: drawn as a short dark cylinder end.
    blok("fles", u - 0.035, u + 0.035, D - 0.12, D + 0.02, y - 0.035, y + 0.035);
  }
} };

/** Two stacked boxes and a blue bucket on the floor. */
const DOZEN: Stuk = { L: 1.0, D: 0.55, ver: false, bouw: (blok, cil) => {
  blok("doos", 0, 0.5, 0.04, 0.48, 0, 0.38);
  blok("doos2", 0.04, 0.42, 0.08, 0.44, 0.38, 0.66);
  cil("emmer", 0.75, 0.25, 0, 0.3, 0.15);
} };

const STUKKEN = [REK, WERKBANK, KETEL, DIEPVRIES, WIJNREK, DOZEN];

/**
 * The cellar's contents, along its walls: the tall pieces on the far walls (on a near wall
 * the cut would slice them), clear of the stair and its foot, and out of the far corners,
 * where the mould shows. Each piece takes the free spot nearest the middle of its wall.
 */
function inrichten(B: Bouwer, w: number, l: number, hoek: Hoek, trap: Trap, yf: number) {
  const voorNabij = hoek.kant === "voor", rechtsNabij = hoek.zij === "rechts";
  const muren: Muur[] = [
    { as: "x", vast: 0, binnen: 1, lengte: w, ver: voorNabij },
    { as: "z", vast: 0, binnen: 1, lengte: l, ver: rechtsNabij },
    { as: "x", vast: l, binnen: -1, lengte: w, ver: !voorNabij },
    { as: "z", vast: w, binnen: -1, lengte: l, ver: !rechtsNabij },
  ].sort((a, b) => Number(b.ver) - Number(a.ver)) as Muur[];
  const plek = (m: Muur, u: number, n: number): [number, number] => (m.as === "x" ? [u, m.vast + m.binnen * n] : [m.vast + m.binnen * n, u]);
  const vak = (m: Muur, u0: number, u1: number, n0: number, n1: number): Rechthoek => {
    const [xa, za] = plek(m, u0, n0), [xb, zb] = plek(m, u1, n1);
    return { x0: Math.min(xa, xb), x1: Math.max(xa, xb), z0: Math.min(za, zb), z1: Math.max(za, zb) };
  };
  const raakt = (a: Rechthoek, b: Rechthoek) => a.x0 < b.x1 && b.x0 < a.x1 && a.z0 < b.z1 && b.z0 < a.z1;
  // The stair, with room to walk round it, and a metre free at its foot.
  const voet = trap.richting > 0 ? { x0: trap.x - 1, x1: trap.x, z0: trap.z, z1: trap.z + trap.l } : { x0: trap.x + trap.w, x1: trap.x + trap.w + 1, z0: trap.z, z1: trap.z + trap.l };
  const bezet: Rechthoek[] = [{ x0: trap.x - 0.25, x1: trap.x + trap.w + 0.25, z0: trap.z - 0.25, z1: trap.z + trap.l + 0.25 }, voet];
  const rnd = toeval(7);
  for (const stuk of STUKKEN) {
    let keus: { m: Muur; u: number } | null = null;
    for (const m of muren) {
      if (stuk.ver && !m.ver) continue;
      const rand = m.ver ? 0.95 : 0.35;
      const vrij: number[] = [];
      for (let u = rand; u <= m.lengte - rand - stuk.L + 1e-6; u += 0.05) {
        if (!bezet.some((b) => raakt(b, vak(m, u, u + stuk.L, 0, stuk.D)))) vrij.push(u);
      }
      if (!vrij.length) continue;
      const mid = (m.lengte - stuk.L) / 2;
      keus = { m, u: vrij.reduce((a, b) => (Math.abs(b - mid) < Math.abs(a - mid) ? b : a)) };
      break;
    }
    if (!keus) continue;
    const { m, u } = keus;
    bezet.push(vak(m, u - 0.12, u + stuk.L + 0.12, 0, stuk.D + 0.1));
    const blok = (mat: string, u0: number, u1: number, n0: number, n1: number, y0: number, y1: number) => {
      const r = vak(m, u + u0, u + u1, n0, n1);
      B.blok(mat, r.x0, r.x1, yf + y0, yf + y1, r.z0, r.z1);
    };
    const cil = (mat: string, uu: number, n: number, y0: number, y1: number, r: number) => {
      const [x, z] = plek(m, u + uu, n);
      B.cilinder(mat, [x, yf + y0, z], [x, yf + y1, z], r, 18);
    };
    stuk.bouw(blok, cil, rnd);
  }
}

interface Props {
  w: number;
  l: number;
  hoek: Hoek;
  /** The house's stairs: the cellar stair goes under the ground floor's. */
  trappen: readonly Trap[];
  /** How much of the street picture stands: its garden replaces the grass on the soil. */
  straat?: { readonly current: number };
}

export default function Kelder3D({ w, l, hoek, trappen, straat }: Props) {
  const [grondTex, betonTex, steenTex] = useLoader(TextureLoader, [KELDER_TEXTUUR.grond, KELDER_TEXTUUR.beton, TEXTUUR.baksteen]);
  const mats = useMemo(() => {
    const grond = tegel(grondTex, 1, 3.4), beton = tegel(betonTex, 1, 1), steen = tegel(steenTex, 16 * 0.202, 32 * 0.062);
    const s = (color: string, o: Partial<MeshStandardMaterial> = {}) => Object.assign(new MeshStandardMaterial({ color, roughness: 0.9 }), o);
    return new Map<string, MeshStandardMaterial>([
      ["grond", s("#ffffff", { map: grond, roughness: 0.97 })],
      ["gras", s("#6a8a43", { roughness: 0.95, transparent: true })],
      ["beton", s("#d2cfc8", { map: beton })],
      ["vloer", s("#bdb9b1", { map: beton, roughness: 0.85 })],
      ["rand", s("#e6e3dc", { map: beton })],
      ["trede", s("#cdcac3", { map: beton, roughness: 0.8 })],
      ["baksteen", s("#f3e2d8", { map: steen, bumpMap: steen, bumpScale: 1.2, roughness: 0.92 })],
      ["snede", s("#2a2422", { roughness: 0.95 })],
      ["leuning", s("#55595e", { metalness: 0.6, roughness: 0.4 })],
      ["kader", s("#f4f1ec", { roughness: 0.32 })],
      ["glas", s("#33454f", { roughness: 0.05, metalness: 0.15, envMapIntensity: 2.4 })],
      ["grind", s("#9b958b", { roughness: 1 })],
      ["rooster", s("#8d949a", { metalness: 0.7, roughness: 0.35 })],
      ["rek", s("#7d858b", { metalness: 0.5, roughness: 0.45 })],
      ["plank", s("#c7aa80", { roughness: 0.8 })],
      ["doos", s("#b98a57", { roughness: 0.95 })],
      ["doos2", s("#a3794c", { roughness: 0.95 })],
      ["emmer", s("#2f6fb3", { roughness: 0.4 })],
      ["hout", s("#a57a51", { roughness: 0.6 })],
      ["paneel", s("#c9b08a", { roughness: 0.85 })],
      ["kast", s("#ecebe7", { roughness: 0.35 })],
      ["voeg", s("#9d978e", { roughness: 0.6 })],
      ["metaal", s("#8a9095", { metalness: 0.7, roughness: 0.35 })],
      ["donker", s("#2f3236", { metalness: 0.5, roughness: 0.4 })],
      ["zwart", s("#26272a", { roughness: 0.6 })],
      ["koper", s("#b87333", { metalness: 0.8, roughness: 0.3 })],
      ["rood", s("#b83a2e", { roughness: 0.45 })],
      ["fles", s("#25402a", { roughness: 0.15, metalness: 0.2 })],
    ]);
  }, [grondTex, betonTex, steenTex]);
  useEffect(() => () => {
    for (const m of mats.values()) { m.map?.dispose(); m.dispose(); }
  }, [mats]);

  // The stair climbs away from the camera, whichever way the house's own stair runs: from the
  // other side you saw its tall blank end and none of the steps.
  // The grass on top of the soil gives way to the street picture's own garden, which runs on
  // round the house: the cellar then lies under the real garden, not under a green slab.
  useFrame(() => {
    const g = mats.get("gras")!;
    const o = 1 - (straat?.current ?? 0);
    if (Math.abs(g.opacity - o) > 0.001) { g.opacity = o; g.depthWrite = o > 0.5; }
  });

  const trap = useMemo<Trap>(() => ({ ...kelderTrap(trappen, w), richting: hoek.zij === "rechts" ? -1 : 1 }), [trappen, w, hoek.zij]);
  const raam = useMemo(() => kelderRaam(trappen, w), [trappen, w]);
  const geos = useMemo(() => bouwKelder(w, l, hoek, trap, raam), [w, l, hoek, trap, raam]);
  useEffect(() => () => { for (const g of geos.values()) g.dispose(); }, [geos]);

  return (
    <group>
      {[...geos].map(([k, g]) => (
        <mesh key={k} geometry={g} material={mats.get(k)} castShadow={!ZONDER_SCHADUW.has(k)} receiveShadow />
      ))}
    </group>
  );
}

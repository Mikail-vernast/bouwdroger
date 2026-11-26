import { useEffect, useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { MeshStandardMaterial, RepeatWrapping, SRGBColorSpace, type Texture, TextureLoader } from "three";
import { FH, HC, SLAB, T } from "../maten";
import { KELDER, kelderRaam, kelderTrap } from "../kelder";
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
const KOKER = 0.7, KW = 0.08;

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
  const x0 = rechtsNabij ? -T - MARGE : -T, x1 = rechtsNabij ? w + T : w + T + MARGE;
  const z0 = voorNabij ? -T - MARGE : -T, z1 = voorNabij ? l + T : l + T + MARGE;
  B.blok("grond", x0, x1, yb - ONDER, yb, z0, z1);
  if (rechtsNabij) B.blok("grond", x0, -T, yb, 0, z0, z1, { boven: "gras" });
  else B.blok("grond", w + T, x1, yb, 0, z0, z1, { boven: "gras" });
  // Window and light well (in the back wall): the soil behind it leaves room for the well.
  const ry0 = yf + raam.onder, ry1 = yf + raam.boven;
  const kok = { a0: raam.van - 0.12, a1: raam.tot + 0.12, b0: -T - KOKER, b1: -T };
  const kb = ry0 - 0.15;
  if (voorNabij) {
    B.blok("grond", -T, w + T, yb, kb, z0, -T);
    for (const r of muurMinGaten(-T, w + T, z0, -T, [kok])) B.blok("grond", r.a0, r.a1, kb, 0, r.b0, r.b1, { boven: "gras" });
    // The well: concrete walls up to just above the grass, gravel at the bottom, a grate on top.
    B.blok("rand", kok.a0, kok.a1, kb, 0.04, kok.b0, kok.b0 + KW);
    B.blok("rand", kok.a0, kok.a0 + KW, kb, 0.04, kok.b0 + KW, kok.b1);
    B.blok("rand", kok.a1 - KW, kok.a1, kb, 0.04, kok.b0 + KW, kok.b1);
    B.blok("grind", kok.a0 + KW, kok.a1 - KW, kb, kb + 0.05, kok.b0 + KW, kok.b1);
    for (let x = kok.a0 + KW + 0.03; x < kok.a1 - KW; x += 0.06) B.blok("rooster", x, x + 0.015, 0.0, 0.035, kok.b0 + KW, kok.b1);
  }
  else B.blok("grond", -T, w + T, yb, 0, l + T, z1, { boven: "gras" });

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
  rek(B, w, l, rechtsNabij, trap, yf);
  return B.bouw();
}

/** A tiny deterministic random, so the boxes stand the same way every time. */
function toeval(zaad: number): () => number {
  let x = zaad;
  return () => { x = (x * 16807) % 2147483647; return x / 2147483647; };
}

/**
 * Storage, as in most cellars (and the damp simulator's cellar photo): a steel rack with
 * boxes against the far side wall, two boxes and a bucket on the floor beside it. Mid-wall,
 * so the corners stay free where the mould shows, and clear of the stair.
 */
function rek(B: Bouwer, w: number, l: number, rechtsNabij: boolean, trap: Trap, yf: number) {
  const D = 0.45, L = 1.6, HOOG = 1.85;
  const xa = rechtsNabij ? 0.04 : w - 0.04 - D, xb = xa + D;
  const trapVrij = (za: number, zb: number) => xb < trap.x || xa > trap.x + trap.w || zb < trap.z - 0.3 || za > trap.z + trap.l + 0.3;
  const kandidaten = [l / 2 - L / 2, l - L - 0.9, 0.9];
  const za = kandidaten.find((z) => trapVrij(z, z + L + 0.8));
  if (za === undefined) return;
  const zb = za + L;
  for (const x of [xa, xb - 0.03]) for (const z of [za, zb - 0.03]) B.blok("rek", x, x + 0.03, yf, yf + HOOG, z, z + 0.03);
  const rnd = toeval(7);
  const planken = [0.12, 0.6, 1.08, 1.56];
  for (const [i, h] of planken.entries()) {
    const y = yf + h;
    B.blok("plank", xa, xb, y, y + 0.025, za, zb);
    if (i === planken.length - 1 && rnd() < 0.3) continue;
    // Boxes along the shelf, each a little different, some pushed back.
    let z = za + 0.05;
    while (z < zb - 0.3) {
      const bz = 0.28 + rnd() * 0.22, bh = 0.2 + rnd() * 0.18, bd = 0.3 + rnd() * 0.12;
      if (z + bz > zb - 0.04) break;
      const terug = rnd() * (D - bd - 0.02);
      const x0 = rechtsNabij ? xa + 0.01 + terug : xb - 0.01 - terug - bd;
      B.blok(rnd() < 0.5 ? "doos" : "doos2", x0, x0 + bd, y + 0.025, y + 0.025 + bh, z, z + bz);
      z += bz + 0.04 + rnd() * 0.1;
    }
  }
  // On the floor beside the rack: two stacked boxes and a blue bucket.
  const vx = rechtsNabij ? 0.1 : w - 0.1 - 0.5;
  B.blok("doos", vx, vx + 0.5, yf, yf + 0.38, zb + 0.12, zb + 0.55);
  B.blok("doos2", vx + 0.05, vx + 0.42, yf + 0.38, yf + 0.66, zb + 0.16, zb + 0.5);
  const ex = rechtsNabij ? 0.75 : w - 0.75;
  B.cilinder("emmer", [ex, yf, zb + 0.35], [ex, yf + 0.3, zb + 0.35], 0.15, 18);
}

interface Props {
  w: number;
  l: number;
  hoek: Hoek;
  /** The house's stairs: the cellar stair goes under the ground floor's. */
  trappen: readonly Trap[];
}

export default function Kelder3D({ w, l, hoek, trappen }: Props) {
  const [grondTex, betonTex, steenTex] = useLoader(TextureLoader, [KELDER_TEXTUUR.grond, KELDER_TEXTUUR.beton, TEXTUUR.baksteen]);
  const mats = useMemo(() => {
    const grond = tegel(grondTex, 1, 3.4), beton = tegel(betonTex, 1, 1), steen = tegel(steenTex, 16 * 0.202, 32 * 0.062);
    const s = (color: string, o: Partial<MeshStandardMaterial> = {}) => Object.assign(new MeshStandardMaterial({ color, roughness: 0.9 }), o);
    return new Map<string, MeshStandardMaterial>([
      ["grond", s("#ffffff", { map: grond, roughness: 0.97 })],
      ["gras", s("#6a8a43", { roughness: 0.95 })],
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
    ]);
  }, [grondTex, betonTex, steenTex]);
  useEffect(() => () => {
    for (const m of mats.values()) { m.map?.dispose(); m.dispose(); }
  }, [mats]);

  // The stair climbs away from the camera, whichever way the house's own stair runs: from the
  // other side you saw its tall blank end and none of the steps.
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

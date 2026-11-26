import { useEffect, useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { MeshStandardMaterial, RepeatWrapping, SRGBColorSpace, type Texture, TextureLoader } from "three";
import { FH, HC, SLAB, T } from "../maten";
import { KELDER, kelderTrap } from "../kelder";
import type { Hoek } from "../types";
import type { Trap } from "../woning";
import { KELDER_TEXTUUR, TEXTUUR } from "./bestanden";
import { Bouwer } from "./geo";

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

const ZONDER_SCHADUW = new Set(["leuning"]);

function tegel(t: Texture, pw: number, ph: number): Texture {
  const c = t.clone();
  c.wrapS = c.wrapT = RepeatWrapping;
  c.repeat.set(1 / pw, 1 / ph);
  c.colorSpace = SRGBColorSpace;
  c.anisotropy = 4;
  c.needsUpdate = true;
  return c;
}

function bouwKelder(w: number, l: number, hoek: Hoek, trap: Trap) {
  const B = new Bouwer();
  const yb = KELDER * FH, yf = yb + SLAB, snede = yf + HC;
  const voorNabij = hoek.kant === "voor", rechtsNabij = hoek.zij === "rechts";

  // The soil: a layer under the slab over the whole block, and full height beyond the far walls.
  const x0 = rechtsNabij ? -T - MARGE : -T, x1 = rechtsNabij ? w + T : w + T + MARGE;
  const z0 = voorNabij ? -T - MARGE : -T, z1 = voorNabij ? l + T : l + T + MARGE;
  B.blok("grond", x0, x1, yb - ONDER, yb, z0, z1);
  if (rechtsNabij) B.blok("grond", x0, -T, yb, 0, z0, z1, { boven: "gras" });
  else B.blok("grond", w + T, x1, yb, 0, z0, z1, { boven: "gras" });
  if (voorNabij) B.blok("grond", -T, w + T, yb, 0, z0, -T, { boven: "gras" });
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
    B.blok("baksteen", xa, xb, yf, top(ver), za, zb, kop(ver));
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
  return B.bouw();
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
    ]);
  }, [grondTex, betonTex, steenTex]);
  useEffect(() => () => {
    for (const m of mats.values()) { m.map?.dispose(); m.dispose(); }
  }, [mats]);

  // The stair climbs away from the camera, whichever way the house's own stair runs: from the
  // other side you saw its tall blank end and none of the steps.
  const trap = useMemo<Trap>(() => ({ ...kelderTrap(trappen, w), richting: hoek.zij === "rechts" ? -1 : 1 }), [trappen, w, hoek.zij]);
  const geos = useMemo(() => bouwKelder(w, l, hoek, trap), [w, l, hoek, trap]);
  useEffect(() => () => { for (const g of geos.values()) g.dispose(); }, [geos]);

  return (
    <group>
      {[...geos].map(([k, g]) => (
        <mesh key={k} geometry={g} material={mats.get(k)} castShadow={!ZONDER_SCHADUW.has(k)} receiveShadow />
      ))}
    </group>
  );
}

import type { BufferGeometry } from "three";
import { FH, T } from "../maten";
import type { Periode } from "../periode";
import { WONING, type Dak, type Woning } from "../woning";
import { Bouwer } from "./geo";

/*
  The street around the house as live 3D: the ground, the front garden with its path, the
  pavement, cycle lanes, the road, the neighbours and the back hedge. The street picture
  (straat.tsx) is made for one corner, so it fades out while the camera turns; this stands in
  for it meanwhile, so the house never turns on empty paper (Brent, 26-11-2026). Plain and
  laid out like the picture (scripts/simulator-3d/straat.py: the profile from the front
  facade), so the cross-fade does not jump.
*/

/** straat.py: the profile from the front facade outward, in metres. */
const VOETPAD = 1.6, BOORD = 0.15, FIETS = 1.3, RIJWEG = 5.6;
const ACHTER = 15;
/** How far the ground runs on: past the edge of any frame the camera takes. */
const RAND = 45;
/** The road lies a kerb lower than the pavement. */
const WEG_Y = -0.1;

export type DakBouw = (b: Bouwer, p: { dak: Dak; w: number; l: number; buren: number; lagen: number; periode: Periode }) => void;

export interface Omgeving {
  grond: Map<string, BufferGeometry>;
  /** One neighbour, built at the house's own place: drawn at each `buren` x offset. */
  buur: Map<string, BufferGeometry> | null;
  buren: number[];
}

/** A neighbour: two storeys of brick with windows front and back, a door, and the roof. */
function buurHuis(w: number, l: number, buren: number, periode: Periode, dakBouw: DakBouw): Map<string, BufferGeometry> {
  const B = new Bouwer();
  const hoog = 2 * FH;
  B.blok("arduin", -T, w + T, 0, 0.3, -T, l + T, { boven: null });
  B.blok("baksteen", -T, w + T, 0.3, hoog, -T, l + T, { boven: null });
  // Two windows a storey on both facades; on the front the ground floor has the door instead of one.
  const ramen = (z: number, uit: number) => {
    for (let v = 0; v < 2; v++) {
      const y0 = v * FH + 0.3 + 0.9, y1 = y0 + 1.35;
      for (const [i, fx] of [0.27, 0.73].entries()) {
        const deur = uit > 0 && v === 0 && i === 0;
        const a = w * fx - (deur ? 0.5 : 0.6), b = w * fx + (deur ? 0.5 : 0.6);
        const ya = deur ? 0.3 : y0, yb = deur ? 0.3 + 2.2 : y1;
        const [z0, z1] = uit > 0 ? [z, z + 0.02] : [z - 0.02, z];
        B.blok(deur ? "deur" : "glas", a, b, ya, yb, z0, z1);
        const [k0, k1] = uit > 0 ? [z + 0.02, z + 0.06] : [z - 0.06, z - 0.02];
        B.blok("kader", a - 0.06, b + 0.06, yb, yb + 0.06, k0, k1);
        B.blok("kader", a - 0.06, a, ya, yb, k0, k1);
        B.blok("kader", b, b + 0.06, ya, yb, k0, k1);
        if (!deur) B.blok("arduin", a - 0.08, b + 0.08, ya - 0.06, ya, uit > 0 ? z : z - 0.08, uit > 0 ? z + 0.08 : z);
      }
    }
  };
  ramen(l + T, 1);
  ramen(-T, -1);
  dakBouw(B, { dak: "zadeldak", w, l, buren, lagen: 2, periode });
  return B.bouw();
}

export function bouwOmgeving(woning: Woning, w: number, periode: Periode, dakBouw: DakBouw): Omgeving {
  const { l, buren } = WONING[woning];
  const B = new Bouwer();
  const F = l + T;
  const tuin = buren === 2 ? 5.6 : 4.2;
  const pad0 = F + tuin, boord0 = pad0 + VOETPAD, fiets0 = boord0 + BOORD, weg0 = fiets0 + FIETS, weg1 = weg0 + RIJWEG;
  const fiets1 = weg1 + FIETS, boord1 = fiets1 + BOORD, pad1 = boord1 + VOETPAD;
  const x0 = -RAND, x1 = w + RAND;
  const vlak = (mat: string, xa: number, xb: number, za: number, zb: number, y: number) =>
    B.quad(mat, [xa, y, za], [xb, y, za], [xb, y, zb], [xa, y, zb], [0, 100, 0]);

  // Gardens on both sides of the street, a little below the floor slab's foot.
  vlak("gras", x0, x1, -RAND, pad0, -0.02);
  vlak("gras", x0, x1, pad1, pad1 + RAND, -0.02);
  // The path to the front door (straat.py: DEUR), and a drive beside a house with a free side.
  const deur = woning === "open" ? w / 2 : 0.7;
  vlak("arduin", deur - 0.6, deur + 0.6, F, pad0, -0.012);
  if (buren < 2) vlak("grind", w + T + 0.4, w + T + 3.4, l - 5, pad0, -0.012);
  // Pavement, kerb, cycle lane, road, and the same again on the far side.
  for (const [a, b] of [[pad0, boord0], [boord1, pad1]]) vlak("arduin", x0, x1, a, b, -0.01);
  for (const [a, b] of [[boord0, fiets0], [fiets1, boord1]]) B.blok("arduin", x0, x1, WEG_Y, -0.01, a, b);
  for (const [a, b] of [[fiets0, weg0], [weg1, fiets1]]) vlak("fiets", x0, x1, a, b, WEG_Y);
  vlak("asfalt", x0, x1, weg0, weg1, WEG_Y);
  const mid = (weg0 + weg1) / 2;
  for (let x = x0; x < x1; x += 4) vlak("markering", x, x + 2, mid - 0.06, mid + 0.06, WEG_Y + 0.004);
  // A low hedge along the front gardens, open for the path and the drive; the tall one at the back.
  const open: [number, number][] = [[deur - 0.6, deur + 0.6], ...(buren < 2 ? [[w + T + 0.4, w + T + 3.4] as [number, number]] : [])];
  let x = x0;
  for (const [a, b] of [...open].sort((p, q) => p[0] - q[0])) {
    B.blok("haag", x, a, -0.02, 0.6, pad0 - 0.5, pad0 - 0.1);
    x = b;
  }
  B.blok("haag", x, x1, -0.02, 0.6, pad0 - 0.5, pad0 - 0.1);
  B.blok("haag", x0, x1, -0.02, 1.7, -T - ACHTER - 0.7, -T - ACHTER);

  // Neighbours: a terraced house has one on each side, a semi-detached one on the left.
  const plaatsen = buren === 2 ? [-(w + T), w + 2 * T] : buren === 1 ? [-(w + T)] : [];
  return { grond: B.bouw(), buur: plaatsen.length ? buurHuis(w, l, buren, periode, dakBouw) : null, buren: plaatsen };
}

import { BufferGeometry, Float32BufferAttribute } from "three";

/*
  Geometrie voor de 3D-woning. Zelfde assen als de SVG-tekening (IsoHouse.tsx):
  x = breedte, y = hoogte, z = diepte, de achterste hoek van de woning is de
  oorsprong en de kijker staat aan de +x/+z-kant.

  Alles wordt per materiaal in één BufferGeometry verzameld: een woning met
  ramen, trap en toestellen is zo een paar tientallen draw calls in plaats van
  duizenden losse blokjes.

  UV's staan in meter. Een materiaal zet zijn textuur op `repeat = 1 / periode`,
  zodat een Blender-tegel (baksteen 3,23 × 1,98 m) op ware grootte ligt en over
  alle vlakken doorloopt — zoals een echte gevel.
*/

export type V3 = [number, number, number];

/** Hoe een vlak zijn UV krijgt: volgens de wereld (standaard) of een eigen functie. */
export type UvFn = (p: V3, n: V3) => [number, number];

/** UV volgens de as waar het vlak naar wijst: gevels lopen in x of z mee, vloeren in x/z. */
export const wereldUv: UvFn = (p, n) => {
  const ax = Math.abs(n[0]), ay = Math.abs(n[1]), az = Math.abs(n[2]);
  if (ay >= ax && ay >= az) return [p[0], p[2]];
  if (ax >= az) return [p[2], p[1]];
  return [p[0], p[1]];
};

const sub = (a: V3, b: V3): V3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const cross = (a: V3, b: V3): V3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const dot = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const norm = (a: V3): V3 => {
  const l = Math.hypot(a[0], a[1], a[2]) || 1;
  return [a[0] / l, a[1] / l, a[2] / l];
};

/** De zes vlakken van een blok met hoeken in de volgorde: onderring, dan bovenring. */
const HEXA_VLAKKEN: [number, number, number, number][] = [
  [0, 3, 2, 1], [4, 5, 6, 7], [0, 1, 5, 4], [1, 2, 6, 5], [2, 3, 7, 6], [3, 0, 4, 7],
];

export type Vlak = "onder" | "boven" | "zijkant";

interface Buffer { pos: number[]; nrm: number[]; uv: number[] }

/** Verzamelt driehoeken per materiaalsleutel. */
export class Bouwer {
  private bufs = new Map<string, Buffer>();

  private buf(mat: string): Buffer {
    let b = this.bufs.get(mat);
    if (!b) {
      b = { pos: [], nrm: [], uv: [] };
      this.bufs.set(mat, b);
    }
    return b;
  }

  /** Een vlakke vierhoek; de normaal wordt naar `buiten` gedraaid (een punt aan de goede kant). */
  quad(mat: string, a: V3, b: V3, c: V3, d: V3, buiten?: V3, uv: UvFn = wereldUv) {
    let q: V3[] = [a, b, c, d];
    let n = norm(cross(sub(b, a), sub(c, a)));
    if (buiten) {
      const mid: V3 = [(a[0] + c[0]) / 2, (a[1] + c[1]) / 2, (a[2] + c[2]) / 2];
      if (dot(n, sub(buiten, mid)) < 0) {
        q = [a, d, c, b];
        n = [-n[0], -n[1], -n[2]];
      }
    }
    const buf = this.buf(mat);
    for (const i of [0, 1, 2, 0, 2, 3]) {
      const p = q[i];
      buf.pos.push(p[0], p[1], p[2]);
      buf.nrm.push(n[0], n[1], n[2]);
      const [u, v] = uv(p, n);
      buf.uv.push(u, v);
    }
  }

  tri(mat: string, a: V3, b: V3, c: V3, buiten: V3, uv: UvFn = wereldUv) {
    let q: V3[] = [a, b, c];
    let n = norm(cross(sub(b, a), sub(c, a)));
    const mid: V3 = [(a[0] + b[0] + c[0]) / 3, (a[1] + b[1] + c[1]) / 3, (a[2] + b[2] + c[2]) / 3];
    if (dot(n, sub(buiten, mid)) < 0) {
      q = [a, c, b];
      n = [-n[0], -n[1], -n[2]];
    }
    const buf = this.buf(mat);
    for (const p of q) {
      buf.pos.push(p[0], p[1], p[2]);
      buf.nrm.push(n[0], n[1], n[2]);
      const [u, v] = uv(p, n);
      buf.uv.push(u, v);
    }
  }

  /**
   * Een blok met willekeurige acht hoeken (onderring 0–3, bovenring 4–7).
   * `boven` en `onder` geven die vlakken een eigen materiaal — de snede bovenop
   * een doorgesneden muur is bijvoorbeeld donker. `null` laat een vlak weg.
   */
  hexa(mat: string, h: V3[], opt: { boven?: string | null; onder?: string | null; uv?: UvFn; uvBoven?: UvFn } = {}) {
    const c: V3 = [0, 0, 0];
    for (const p of h) { c[0] += p[0] / 8; c[1] += p[1] / 8; c[2] += p[2] / 8; }
    HEXA_VLAKKEN.forEach(([a, b, cc, d], i) => {
      const soort: Vlak = i === 0 ? "onder" : i === 1 ? "boven" : "zijkant";
      const m = soort === "boven" ? opt.boven : soort === "onder" ? opt.onder : mat;
      if (m === null) return;
      const pa = h[a], pb = h[b], pc = h[cc], pd = h[d];
      const mid: V3 = [(pa[0] + pc[0]) / 2, (pa[1] + pc[1]) / 2, (pa[2] + pc[2]) / 2];
      // Buitenkant = weg van het midden van het blok.
      const buiten: V3 = [mid[0] * 2 - c[0], mid[1] * 2 - c[1], mid[2] * 2 - c[2]];
      this.quad(m ?? mat, pa, pb, pc, pd, buiten, soort === "boven" && opt.uvBoven ? opt.uvBoven : opt.uv);
    });
  }

  /** Een rechthoekig blok tussen twee hoeken. */
  blok(mat: string, x0: number, x1: number, y0: number, y1: number, z0: number, z1: number,
    opt: { boven?: string | null; onder?: string | null; uv?: UvFn } = {}) {
    if (x1 - x0 < 1e-5 || y1 - y0 < 1e-5 || z1 - z0 < 1e-5) return;
    this.hexa(mat, [
      [x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1],
      [x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1],
    ], { onder: null, ...opt });
  }

  /** Een cilinder van a naar b (goot, afvoerbuis, nok). */
  cilinder(mat: string, a: V3, b: V3, r: number, seg = 12) {
    const as = norm(sub(b, a));
    const hulp: V3 = Math.abs(as[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0];
    const u = norm(cross(as, hulp));
    const v = cross(as, u);
    const ring = (p: V3, t: number): V3 => {
      const cs = Math.cos(t) * r, sn = Math.sin(t) * r;
      return [p[0] + u[0] * cs + v[0] * sn, p[1] + u[1] * cs + v[1] * sn, p[2] + u[2] * cs + v[2] * sn];
    };
    const buf = this.buf(mat);
    for (let i = 0; i < seg; i++) {
      const t0 = (i / seg) * Math.PI * 2, t1 = ((i + 1) / seg) * Math.PI * 2;
      const q = [ring(a, t0), ring(b, t0), ring(b, t1), ring(a, t1)];
      const n0: V3 = [u[0] * Math.cos(t0) + v[0] * Math.sin(t0), u[1] * Math.cos(t0) + v[1] * Math.sin(t0), u[2] * Math.cos(t0) + v[2] * Math.sin(t0)];
      const n1: V3 = [u[0] * Math.cos(t1) + v[0] * Math.sin(t1), u[1] * Math.cos(t1) + v[1] * Math.sin(t1), u[2] * Math.cos(t1) + v[2] * Math.sin(t1)];
      const ns = [n0, n0, n1, n1];
      // Winding naar buiten: (a,t0) → (a,t1) → (b,t1) en (a,t0) → (b,t1) → (b,t0).
      for (const k of [0, 3, 2, 0, 2, 1]) {
        const p = q[k], n = ns[k];
        buf.pos.push(p[0], p[1], p[2]);
        buf.nrm.push(n[0], n[1], n[2]);
        buf.uv.push(k === 0 || k === 1 ? 0 : 1, k === 0 || k === 3 ? 0 : 1);
      }
    }
  }

  /** Alles wat verzameld is, per materiaal. */
  bouw(): Map<string, BufferGeometry> {
    const uit = new Map<string, BufferGeometry>();
    for (const [mat, b] of this.bufs) {
      if (b.pos.length === 0) continue;
      const g = new BufferGeometry();
      g.setAttribute("position", new Float32BufferAttribute(b.pos, 3));
      g.setAttribute("normal", new Float32BufferAttribute(b.nrm, 3));
      g.setAttribute("uv", new Float32BufferAttribute(b.uv, 2));
      g.computeBoundingSphere();
      uit.set(mat, g);
    }
    return uit;
  }
}

/** Een rechthoek in een vlak: `a` langs de muur, `b` de hoogte. */
export interface Gat { a0: number; a1: number; b0: number; b1: number }

/**
 * Een muurvlak [a0,a1] × [b0,b1] min de gaten, als rechthoeken. Werkt op een
 * raster van alle randen: elk vakje dat niet in een gat ligt is muur, en
 * vakjes in dezelfde kolom worden samengevoegd tot één blok.
 */
export function muurMinGaten(a0: number, a1: number, b0: number, b1: number, gaten: Gat[]): Gat[] {
  const binnen = gaten
    .map((g) => ({ a0: Math.max(a0, g.a0), a1: Math.min(a1, g.a1), b0: Math.max(b0, g.b0), b1: Math.min(b1, g.b1) }))
    .filter((g) => g.a1 - g.a0 > 1e-4 && g.b1 - g.b0 > 1e-4);
  const as = [...new Set([a0, a1, ...binnen.flatMap((g) => [g.a0, g.a1])])].sort((p, q) => p - q);
  const uit: Gat[] = [];
  for (let i = 0; i < as.length - 1; i++) {
    const ca = as[i], cb = as[i + 1];
    if (cb - ca < 1e-5) continue;
    const mid = (ca + cb) / 2;
    const hier = binnen.filter((g) => g.a0 <= mid && g.a1 >= mid).sort((p, q) => p.b0 - q.b0);
    let b = b0;
    for (const g of hier) {
      if (g.b0 > b + 1e-5) uit.push({ a0: ca, a1: cb, b0: b, b1: g.b0 });
      b = Math.max(b, g.b1);
    }
    if (b1 > b + 1e-5) uit.push({ a0: ca, a1: cb, b0: b, b1 });
  }
  return uit;
}

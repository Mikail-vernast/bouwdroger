import { useEffect, useMemo, useRef, type MutableRefObject } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader, type GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import {
  BufferGeometry,
  MathUtils,
  CanvasTexture,
  Color,
  DoubleSide,
  FileLoader,
  Float32BufferAttribute,
  FrontSide,
  type Group,
  Matrix3,
  Matrix4,
  type Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  type Object3D,
  type Plane,
  RepeatWrapping,
  SRGBColorSpace,
  type Texture,
  TextureLoader,
  Vector3,
} from "three";
import type { Kamer, Opening, Raam, Trap, Wand } from "../../woning";
import type { Meubel, Wijk } from "../../types";
import { Bouwer, muurMinGaten, type UvFn, type V3 } from "../geo";
import { FH, H, HC, SLAB, T, TI, VENSTER_OP } from "../../maten";
import { type NatUniforms, natPatch } from "../nat";
import { INTERIEUR } from "../bestanden";
import { afwerkingVoor, type Afwerking, type Vloer } from "./palet";
import { type LaagInrichting, type Manifest, richLaagIn, type Stuk } from "./plaatsing";

/*
  Het interieur van de opengewerkte laag: de meubels uit de Blender-kit op de
  plekken die plaatsing.ts kiest, en de afwerking van elke kamer (vloer,
  kalkverf met een accentmuur, plinten, vensterbanken, spatwand), met een
  zachte contactschaduw onder elk meubel en langs de voet van de muren.

  Alles van de laag wordt per soort materiaal samengevoegd tot één geometrie,
  met de kleur per hoekpunt: een volledig ingerichte laag is zo een handvol
  draw calls, wat er ook in staat. Geen extra lichten: lampen gloeien
  (emissive) en de schaduw onder de meubels is een zacht vlak.
*/

/* ─────────────────────────── materiaalsoorten ─────────────────────────── */

type Klasse = "mat" | "satijn" | "glans" | "metaal" | "licht" | "glas";
const KLASSEN: Klasse[] = ["mat", "satijn", "glans", "metaal", "licht", "glas"];

function klasseVan(m: Manifest["materialen"][string], naam: string): Klasse {
  if (naam === "glas") return "glas";
  if (m.licht) return "licht";
  if (m.metaal >= 0.5) return "metaal";
  if (m.ruwheid < 0.3) return "glans";
  if (m.ruwheid < 0.75) return "satijn";
  return "mat";
}

function maakKlasse(k: Klasse): MeshStandardMaterial {
  const basis = { vertexColors: true, color: "#ffffff" };
  switch (k) {
    case "mat": return new MeshStandardMaterial({ ...basis, roughness: 0.92, side: DoubleSide });
    case "satijn": return new MeshStandardMaterial({ ...basis, roughness: 0.55, side: DoubleSide });
    case "glans": return new MeshStandardMaterial({ ...basis, roughness: 0.18, side: FrontSide });
    case "metaal": return new MeshStandardMaterial({ ...basis, roughness: 0.32, metalness: 0.85, side: FrontSide });
    case "licht": return new MeshStandardMaterial({ ...basis, roughness: 0.8, emissive: "#ffc985", emissiveIntensity: 0.75, side: DoubleSide });
    // Douchewand: doorschijnend, schrijft geen diepte zodat wat erachter staat zichtbaar blijft.
    case "glas": return new MeshStandardMaterial({ ...basis, roughness: 0.05, transparent: true, opacity: 0.28, depthWrite: false, side: DoubleSide });
  }
}

/* ─────────────────────────── de kit ─────────────────────────── */

interface Prim { pos: Float32Array; nrm: Float32Array; idx: Uint32Array; mat: string; matrix: Matrix4 }
const primCache = new WeakMap<GLTF, Map<string, Prim[]>>();

/** De driehoeken van elk kitobject, losgemaakt uit de (gekwantiseerde) GLB. */
function primsVan(gltf: GLTF): Map<string, Prim[]> {
  const al = primCache.get(gltf);
  if (al) return al;
  const uit = new Map<string, Prim[]>();
  gltf.scene.updateMatrixWorld(true);
  for (const node of gltf.scene.children) {
    const lijst: Prim[] = [];
    node.traverse((o: Object3D) => {
      const m = o as Mesh;
      if (!m.isMesh) return;
      const g = m.geometry;
      const p = g.getAttribute("position"), n = g.getAttribute("normal");
      const pos = new Float32Array(p.count * 3), nrm = new Float32Array(p.count * 3);
      for (let i = 0; i < p.count; i++) {
        // getX en co. ontkwantiseren (KHR_mesh_quantization): de rest rekent in meter.
        pos[i * 3] = p.getX(i); pos[i * 3 + 1] = p.getY(i); pos[i * 3 + 2] = p.getZ(i);
        nrm[i * 3] = n.getX(i); nrm[i * 3 + 1] = n.getY(i); nrm[i * 3 + 2] = n.getZ(i);
      }
      const idx = g.index ? Uint32Array.from(g.index.array as ArrayLike<number>) : Uint32Array.from({ length: p.count }, (_, i) => i);
      const mat = Array.isArray(m.material) ? m.material[0].name : m.material.name;
      lijst.push({ pos, nrm, idx, mat, matrix: m.matrixWorld.clone() });
    });
    uit.set(node.name, lijst);
  }
  primCache.set(gltf, uit);
  return uit;
}

interface Buf { pos: number[]; nrm: number[]; col: number[]; idx: number[] }

/** Zet de stukken om in één geometrie per materiaalsoort, met de kleur per hoekpunt. */
function voegSamen(stukken: Stuk[], prims: Map<string, Prim[]>, kit: Manifest, y0: number): Map<Klasse, BufferGeometry> {
  const bufs = new Map<Klasse, Buf>();
  const M = new Matrix4(), S = new Matrix4(), N = new Matrix3(), v = new Vector3(), c = new Color();
  for (const s of stukken) {
    const lijst = prims.get(s.naam);
    if (!lijst) continue;
    S.makeRotationY(s.rot).scale(new Vector3(s.sx, s.sy, s.sz)).setPosition(s.x, y0 + s.y, s.z);
    for (const p of lijst) {
      const info = kit.materialen[p.mat];
      if (!info) continue;
      const kl = klasseVan(info, p.mat);
      let b = bufs.get(kl);
      if (!b) bufs.set(kl, (b = { pos: [], nrm: [], col: [], idx: [] }));
      M.multiplyMatrices(S, p.matrix);
      N.getNormalMatrix(M);
      const spiegel = M.determinant() < 0;
      c.set(s.kleur?.[p.mat] || info.kleur);
      const start = b.pos.length / 3;
      for (let i = 0; i < p.pos.length; i += 3) {
        v.set(p.pos[i], p.pos[i + 1], p.pos[i + 2]).applyMatrix4(M);
        b.pos.push(v.x, v.y, v.z);
        v.set(p.nrm[i], p.nrm[i + 1], p.nrm[i + 2]).applyMatrix3(N).normalize();
        b.nrm.push(v.x, v.y, v.z);
        b.col.push(c.r, c.g, c.b);
      }
      // Een gespiegeld object (deur met het scharnier rechts) keert zijn driehoeken om.
      for (let i = 0; i < p.idx.length; i += 3) {
        if (spiegel) b.idx.push(start + p.idx[i], start + p.idx[i + 2], start + p.idx[i + 1]);
        else b.idx.push(start + p.idx[i], start + p.idx[i + 1], start + p.idx[i + 2]);
      }
    }
  }
  const uit = new Map<Klasse, BufferGeometry>();
  for (const [kl, b] of bufs) {
    const g = new BufferGeometry();
    g.setAttribute("position", new Float32BufferAttribute(b.pos, 3));
    g.setAttribute("normal", new Float32BufferAttribute(b.nrm, 3));
    g.setAttribute("color", new Float32BufferAttribute(b.col, 3));
    g.setIndex(b.idx);
    g.computeBoundingSphere();
    uit.set(kl, g);
  }
  return uit;
}

/* ─────────────────────────── afwerking ─────────────────────────── */

const lin = (hex: string): [number, number, number] => {
  const c = new Color(hex);
  return [c.r, c.g, c.b];
};

/** Visgraat ligt 45° gedraaid: de graat loopt dan schuin door de kamer, zoals hij meestal gelegd wordt. */
const VISGRAAT_UV: UvFn = (p) => [(p[0] + p[2]) * Math.SQRT1_2, (p[2] - p[0]) * Math.SQRT1_2];

interface Afwerkingen {
  vast: Map<string, BufferGeometry>;
  /** binnenwanden: lokaal y = 0..H, in de groep die meeschaalt */
  binnen: Map<string, BufferGeometry>;
  /** voor- en zijgevel: worden doorgesneden zoals de gevel */
  gevel: Map<string, BufferGeometry>;
  schaduw: BufferGeometry;
  /** Contact shadow of furniture that makes way (IsoHouseProps.wijk), per group: it fades with its furniture. */
  schaduwWijk: Map<string, BufferGeometry>;
}

interface Zijde {
  wand: Wand;
  as: "x" | "z";
  /** plaats van het muurvlak (de kamerrand) */
  vast: number;
  /** +1: de kamer ligt aan de positieve kant */
  binnenwaarts: 1 | -1;
  a0: number;
  a1: number;
  gevel: "voor" | "achter" | "links" | "zij" | null;
}

function zijdenVan(k: Kamer, w: number, l: number): Zijde[] {
  const e = 1e-6;
  const half = TI / 2;
  const xg0 = k.x < e, xg1 = k.x + k.w > w - e, zg0 = k.z < e, zg1 = k.z + k.l > l - e;
  // Waar de muur ophoudt: tegen een binnenmuur 6 cm voor de kamerrand, tegen een gevel op de rand.
  const x0 = k.x + (xg0 ? 0 : half), x1 = k.x + k.w - (xg1 ? 0 : half);
  const z0 = k.z + (zg0 ? 0 : half), z1 = k.z + k.l - (zg1 ? 0 : half);
  return [
    { wand: "achter", as: "x", vast: k.z, binnenwaarts: 1, a0: x0, a1: x1, gevel: zg0 ? "achter" : null },
    { wand: "voor", as: "x", vast: k.z + k.l, binnenwaarts: -1, a0: x0, a1: x1, gevel: zg1 ? "voor" : null },
    { wand: "links", as: "z", vast: k.x, binnenwaarts: 1, a0: z0, a1: z1, gevel: xg0 ? "links" : null },
    { wand: "rechts", as: "z", vast: k.x + k.w, binnenwaarts: -1, a0: z0, a1: z1, gevel: xg1 ? "zij" : null },
  ];
}

/** Een verticaal vlak evenwijdig met een zijde, op afstand `n` de kamer in, van a0 tot a1 en y0 tot y1. */
function vlakOp(B: Bouwer, mat: string, z: Zijde, n: number, a0: number, a1: number, y0: number, y1: number) {
  const f = z.vast + z.binnenwaarts * n;
  const p = (a: number, y: number): V3 => (z.as === "x" ? [a, y, f] : [f, y, a]);
  const naar: V3 = z.as === "x" ? [a0, y0, f + z.binnenwaarts] : [f + z.binnenwaarts, y0, a0];
  B.quad(mat, p(a0, y0), p(a1, y0), p(a1, y1), p(a0, y1), naar);
}

function blokOp(B: Bouwer, mat: string, z: Zijde, n0: number, n1: number, a0: number, a1: number, y0: number, y1: number) {
  const f0 = z.vast + z.binnenwaarts * n0, f1 = z.vast + z.binnenwaarts * n1;
  const [lo, hi] = [Math.min(f0, f1), Math.max(f0, f1)];
  if (z.as === "x") B.blok(mat, a0, a1, y0, y1, lo, hi, { onder: null });
  else B.blok(mat, lo, hi, y0, y1, a0, a1, { onder: null });
}

function bouwAfwerking(laag: Kamer[], openingen: Opening[], ramen: Raam[], trappen: Trap[], w: number, l: number, yf: number,
  afw: Map<string, Afwerking>, ins: LaagInrichting, groepVan: ReadonlyMap<Stuk, string> = new Map()): Afwerkingen {
  const vast = new Bouwer(), binnen = new Bouwer(), gevel = new Bouwer(), schaduw = new Bouwer();
  const gat = trappen.find((t) => !t.op);
  for (const k of laag) {
    const a = afw.get(k.id);
    if (!a) continue;
    // Vloer, met het trapgat eruit.
    vast.kleur = lin(a.vloerTint);
    const gaten = gat ? [{ a0: gat.x, a1: gat.x + gat.w, b0: gat.z, b1: gat.z + gat.l }] : [];
    for (const r of muurMinGaten(k.x, k.x + k.w, k.z, k.z + k.l, gaten)) {
      vast.quad(`afw-${a.vloer}`, [r.a0, yf + 0.005, r.b0], [r.a1, yf + 0.005, r.b0], [r.a1, yf + 0.005, r.b1], [r.a0, yf + 0.005, r.b1], [0, 100, 0], a.vloer === "visgraat" ? VISGRAAT_UV : undefined);
    }
    const accent = ins.accent.get(k.id);
    for (const z of zijdenVan(k, w, l)) {
      if (z.a1 - z.a0 < 0.05) continue;
      // Openingen in deze muur: deuren en doorgangen over de volle hoogte, ramen van onder tot boven.
      // De verf ligt 1 cm voor het muurvlak: op 2 mm vochten verf en pleister om dezelfde pixels (vlekken in blokken).
      const holes = openingen
        .filter((o) => o.as === z.as && Math.abs(o.vast - z.vast) < 1e-6 && o.tot > z.a0 && o.van < z.a1)
        .map((o) => ({ a0: o.van, a1: o.tot, b0: 0, b1: H }));
      // Langs een open zolder of de traphal staan geen muren waar geen kamer tegen ligt: dan ook geen verf.
      const ramenHier = z.gevel ? ramen.filter((r) => r.kamer === k.id && r.gevel === z.gevel) : [];
      for (const r of ramenHier) holes.push({ a0: r.van, a1: r.tot, b0: r.onder, b1: r.boven });
      const hoog = z.gevel === "achter" || z.gevel === "links";
      const groep = z.gevel ? (hoog ? vast : gevel) : binnen;
      const y = z.gevel ? yf : 0;
      const n = z.gevel ? 0.01 : TI / 2 + 0.01;
      const kleur = accent === z.wand ? a.accent : a.muur;
      const mat = a.wandtegel ? "wandtegel" : "verf";
      groep.kleur = lin(a.wandtegel ? (accent === z.wand ? a.accent : "#ffffff") : kleur);
      for (const r of muurMinGaten(z.a0, z.a1, 0, H, holes)) vlakOp(groep, mat, z, n, r.a0, r.a1, y + r.b0, y + r.b1);
      // Plint, behalve in deuropeningen en onder een raamdeur.
      vast.kleur = lin("#f4f1ec");
      const deuren = holes.filter((h) => h.b0 < 0.1).map((h) => ({ ...h, b0: 0, b1: 1 }));
      if (!a.wandtegel) for (const r of muurMinGaten(z.a0, z.a1, 0, 1, deuren)) blokOp(vast, "plint", z, n - 0.001, n + 0.012, r.a0, r.a1, yf, yf + 0.07);
      // Vensterbank: blauwe hardsteen tot in de neggekant. Hoog in de voor- of zijgevel zou boven de snede zweven.
      vast.kleur = lin("#d9d4cb");
      for (const r of ramenHier) {
        if (r.soort === "raamdeur" || (!hoog && r.onder > HC - 0.05)) continue;
        // Op de onderkant van het raamgat, niet erin: in hetzelfde vlak flikkerden ze om beurten (z-fighting).
        blokOp(vast, "vensterbank", z, -(T - 0.15), 0.04, r.van - 0.04, r.tot + 0.04, yf + r.onder - 0.03, yf + r.onder + VENSTER_OP);
      }
      // Zachte schaduw langs de voet van de muur.
      if (!holes.some((h) => h.b0 < 0.1 && h.a0 <= z.a0 && h.a1 >= z.a1)) {
        for (const r of muurMinGaten(z.a0, z.a1, 0, 1, deuren)) {
          const f0 = z.vast + z.binnenwaarts * n, f1 = f0 + z.binnenwaarts * 0.28;
          const yy = yf + 0.009;
          const uv: UvFn = (p) => {
            const d = Math.abs((z.as === "x" ? p[2] : p[0]) - f0) / 0.28;
            return [0.5, 0.62 + 0.38 * d];
          };
          if (z.as === "x") schaduw.quad("s", [r.a0, yy, f0], [r.a1, yy, f0], [r.a1, yy, f1], [r.a0, yy, f1], [r.a0, yy + 1, f0], uv);
          else schaduw.quad("s", [f0, yy, r.a0], [f0, yy, r.a1], [f1, yy, r.a1], [f1, yy, r.a0], [f0, yy + 1, r.a0], uv);
        }
      }
    }
    // Spatwand achter het keukenblok (alleen tegen een hoge muur: verder is hij doorgesneden).
    if (k.naam === "Keuken" && k.inrichting) {
      const z = zijdenVan(k, w, l).find((s) => s.wand === k.inrichting)!;
      const blad = ins.stukken.find((s) => s.kamer === k.id && s.naam === "keuken_werkblad");
      if (blad && (z.gevel === "achter" || z.gevel === "links")) {
        const mid = z.as === "x" ? blad.x : blad.z;
        vast.kleur = lin("#ffffff");
        vlakOp(vast, "wandtegel", z, 0.016, mid - blad.sx / 2, mid + blad.sx / 2, yf + 0.9, yf + 1.45);
      }
    }
  }
  // Contactschaduw onder de meubels. Die van een wijkend meubel apart per groep: anders bleef
  // de schaduw liggen van een kast die er niet meer stond (Brent, 24-11-2026).
  for (const s of ins.stukken) {
    if (!s.schaduw || !s.vak) continue;
    const r = 0.09, yy = yf + 0.008;
    const v = s.vak;
    const uv: UvFn = (p) => [(p[0] - (v.x0 - r)) / (v.x1 - v.x0 + 2 * r), (p[2] - (v.z0 - r)) / (v.z1 - v.z0 + 2 * r)];
    const g = groepVan.get(s);
    schaduw.quad(g ? `w:${g}` : "s", [v.x0 - r, yy, v.z0 - r], [v.x1 + r, yy, v.z0 - r], [v.x1 + r, yy, v.z1 + r], [v.x0 - r, yy, v.z1 + r], [0, 100, 0], uv);
  }
  const schaduwen = schaduw.bouw();
  const schaduwWijk = new Map([...schaduwen].filter(([k]) => k.startsWith("w:")).map(([k, geo]) => [k.slice(2), geo]));
  return { vast: vast.bouw(), binnen: binnen.bouw(), gevel: gevel.bouw(), schaduw: schaduwen.get("s") ?? new BufferGeometry(), schaduwWijk };
}

/** Een zachte rechthoek: donker in het midden, vervagend naar de rand. Eén keer, gedeeld. */
let schaduwTex: Texture | null = null;
function schaduwTextuur(): Texture {
  if (schaduwTex) return schaduwTex;
  const n = 64;
  const cv = document.createElement("canvas");
  cv.width = cv.height = n;
  const ctx = cv.getContext("2d")!;
  const img = ctx.createImageData(n, n);
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
    const dx = Math.abs((x + 0.5) / n - 0.5) * 2, dy = Math.abs((y + 0.5) / n - 0.5) * 2;
    const d = Math.max(0, Math.max(dx, dy) - 0.55) / 0.45;
    const a = Math.pow(1 - Math.min(1, d), 1.6);
    const i = (y * n + x) * 4;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = 0;
    img.data[i + 3] = Math.round(a * 255);
  }
  ctx.putImageData(img, 0, 0);
  schaduwTex = new CanvasTexture(cv);
  return schaduwTex;
}

/* ─────────────────────────── React ─────────────────────────── */

const PERIODE: Record<Vloer | "verf" | "wandtegel", [number, number]> = {
  visgraat: [1.2, 1.2], planken: [1.2, 2.0], tegelwarm: [2.4, 2.4], tegelklein: [1.2, 1.2], verf: [2, 2], wandtegel: [1.2, 0.3],
};
const TEX_NAMEN = ["visgraat", "planken", "tegelwarm", "tegelklein", "kalkverf", "wandtegel"] as const;

interface Props {
  laag: Kamer[];
  /** alle kamers van de woning, zodat de kleuren over de lagen heen verschillen */
  kamers: Kamer[];
  openingen: Opening[];
  ramen: Raam[];
  trappen: Trap[];
  w: number;
  l: number;
  act: number;
  /** groepen uit IsoHouse3D waarvan we de animatie volgen */
  binnenRef: MutableRefObject<Group | null>;
  inrichtingRef: MutableRefObject<Group | null>;
  snij: { onder: Plane; boven: Plane };
  /** 0..1: hoe zichtbaar de bovenhelft van de gevel nog is */
  zicht: MutableRefObject<number>;
  nat: NatUniforms;
  onVakken?: (vakken: LaagInrichting["vakken"]) => void;
  /** Every piece of furniture on the floor, with its height: for layers that must not hide behind it. */
  onMeubels?: (meubels: Meubel[]) => void;
  /** Furniture that fades away by group (IsoHouseProps.wijk). */
  wijk?: Wijk;
}

export type { Meubel };

/** A placed piece as a box: its floor spot, or for wall cabinets the kit object's size, turned as placed. */
function meubelVan(st: Stuk, maat: ReadonlyMap<string, Manifest["objecten"][number]>): Meubel | null {
  if (st.wand) return null;
  const o = maat.get(st.naam);
  if (st.vak) return { vak: st.vak, onder: 0, top: st.top, muur: o?.muur };
  if (!o) return null;
  // A wall object (a counter, a sink, a hood) has its origin at its back, against the wall, and
  // its front (+Z) into the room; anything else is centred on its origin. Turned by `rot` about y.
  const b = (o.b * Math.abs(st.sx)) / 2;
  const [z0, z1] = o.muur ? [0, o.d] : [-o.d / 2, o.d / 2];
  const c = Math.cos(st.rot), s = Math.sin(st.rot);
  let x0 = Infinity, x1 = -Infinity, zz0 = Infinity, zz1 = -Infinity;
  for (const lx of [-b, b]) for (const lz of [z0, z1]) {
    const x = st.x + lx * c + lz * s, z = st.z - lx * s + lz * c;
    x0 = Math.min(x0, x); x1 = Math.max(x1, x); zz0 = Math.min(zz0, z); zz1 = Math.max(zz1, z);
  }
  const onder = st.y + (o.boven ?? 0);
  return { vak: { x0, x1, z0: zz0, z1: zz1 }, onder, top: Math.max(st.top, onder + o.h), muur: o.muur };
}

function meubelsVan(stukken: Stuk[], kit: Manifest): Meubel[] {
  const maat = new Map(kit.objecten.map((o) => [o.naam, o]));
  return stukken.flatMap((st) => meubelVan(st, maat) ?? []);
}

/**
 * Fetches the furniture before the house opens, with the same loaders and inputs as below, so
 * the component finds them in the cache. The model is the largest file of the house (~650 kB):
 * a closed house shows none of it, so it no longer delays the first picture.
 */
// eslint-disable-next-line react-refresh/only-export-components
export function laadInterieurVooraf(): void {
  useLoader.preload(GLTFLoader, INTERIEUR.glb);
  useLoader.preload(FileLoader, INTERIEUR.manifest, (ld) => { (ld as FileLoader).setResponseType("json"); });
  useLoader.preload(TextureLoader, TEX_NAMEN.map((n) => INTERIEUR.tex[n]));
}

export default function Interieur(props: Props) {
  const { laag, kamers, openingen, ramen, trappen, w, l, act, binnenRef, inrichtingRef, snij, zicht, nat, onVakken, onMeubels, wijk } = props;
  const gltf = useLoader(GLTFLoader, INTERIEUR.glb);
  const kit = useLoader(FileLoader, INTERIEUR.manifest, (ld) => ld.setResponseType("json")) as unknown as Manifest;
  const tex = useLoader(TextureLoader, TEX_NAMEN.map((n) => INTERIEUR.tex[n]));
  const yf = act * FH + SLAB;

  const afw = useMemo(() => afwerkingVoor(kamers), [kamers]);
  const ins = useMemo(
    () => richLaagIn({ laag, openingen, ramen, trappen, w, l, kit, palet: (k) => afw.get(k.id)!.palet }),
    [laag, openingen, ramen, trappen, w, l, kit, afw],
  );
  useEffect(() => onVakken?.(ins.vakken), [ins, onVakken]);
  useEffect(() => onMeubels?.(meubelsVan(ins.stukken, kit)), [ins, kit, onMeubels]);

  // Furniture that makes way goes into a merged mesh of its own per group, faded as one.
  const wijkGroep = wijk?.groep;
  const geo = useMemo(() => {
    const prims = primsVan(gltf);
    const maat = new Map(kit.objecten.map((o) => [o.naam, o]));
    const groepen = new Map<string, Stuk[]>();
    const groepVan = new Map<Stuk, string>();
    const blijft: Stuk[] = [];
    for (const st of ins.stukken) {
      if (st.wand) continue;
      const m = wijkGroep ? meubelVan(st, maat) : null;
      // A rug hides nothing: it stays. A worktop is as thin, but belongs with the units under it.
      const g = m && (m.top > 0.15 || m.muur) ? wijkGroep?.(m) ?? null : null;
      if (g) { groepen.set(g, [...(groepen.get(g) ?? []), st]); groepVan.set(st, g); }
      else blijft.push(st);
    }
    return {
      meubels: voegSamen(blijft, prims, kit, yf),
      wijkend: new Map([...groepen].map(([g, st]) => [g, voegSamen(st, prims, kit, yf)])),
      deuren: voegSamen(ins.stukken.filter((s) => s.wand), prims, kit, 0),
      afw: bouwAfwerking(laag, openingen, ramen, trappen, w, l, yf, afw, ins, groepVan),
    };
  }, [gltf, kit, ins, laag, openingen, ramen, trappen, w, l, yf, afw, wijkGroep]);
  useEffect(() => () => {
    for (const m of [geo.meubels, geo.deuren, geo.afw.vast, geo.afw.binnen, geo.afw.gevel, ...geo.wijkend.values()]) for (const g of m.values()) g.dispose();
    geo.afw.schaduw.dispose();
    for (const g of geo.afw.schaduwWijk.values()) g.dispose();
  }, [geo]);

  const mats = useMemo(() => {
    const t = Object.fromEntries(TEX_NAMEN.map((n, i) => {
      const c = tex[i].clone();
      const [pw, ph] = PERIODE[n === "kalkverf" ? "verf" : (n as Vloer | "wandtegel")];
      c.wrapS = c.wrapT = RepeatWrapping;
      c.repeat.set(1 / pw, 1 / ph);
      c.colorSpace = SRGBColorSpace;
      c.anisotropy = 4;
      c.needsUpdate = true;
      return [n, c];
    })) as Record<(typeof TEX_NAMEN)[number], Texture>;
    const vloer = (n: Vloer, rough: number) => new MeshStandardMaterial({ map: t[n], vertexColors: true, roughness: rough });
    const verf = () => new MeshStandardMaterial({ map: t.kalkverf, vertexColors: true, roughness: 0.92 });
    const tegel = () => new MeshStandardMaterial({ map: t.wandtegel, vertexColors: true, roughness: 0.25 });
    const basis: Record<string, MeshStandardMaterial> = {
      "afw-visgraat": vloer("visgraat", 0.5),
      "afw-planken": vloer("planken", 0.55),
      "afw-tegelwarm": vloer("tegelwarm", 0.35),
      "afw-tegelklein": vloer("tegelklein", 0.35),
      verf: verf(),
      wandtegel: tegel(),
      plint: new MeshStandardMaterial({ vertexColors: true, roughness: 0.45 }),
      vensterbank: new MeshStandardMaterial({ vertexColors: true, roughness: 0.35 }),
    };
    for (const n of ["afw-visgraat", "afw-planken", "afw-tegelwarm", "afw-tegelklein"]) natPatch(basis[n], nat, "vloer");
    natPatch(basis.verf, nat, "muur");
    // De voor- en zijgevel worden doorgesneden zoals de gevel zelf: een vaste onderhelft en een vervagende bovenhelft.
    const onder = { verf: verf(), wandtegel: tegel() }, boven = { verf: verf(), wandtegel: tegel() };
    for (const m of Object.values(onder)) { m.clippingPlanes = [snij.onder]; natPatch(m, nat, "muur"); }
    for (const m of Object.values(boven)) { m.clippingPlanes = [snij.boven]; m.transparent = true; natPatch(m, nat, "muur"); }
    const klassen = new Map(KLASSEN.map((k) => [k, maakKlasse(k)]));
    const schaduw = new MeshBasicMaterial({ map: schaduwTextuur(), transparent: true, opacity: 0.42, depthWrite: false, color: "#000000" });
    return { basis, onder, boven, klassen, schaduw, tex: Object.values(t) };
  }, [tex, snij, nat]);
  useEffect(() => () => {
    for (const m of [...Object.values(mats.basis), ...Object.values(mats.onder), ...Object.values(mats.boven), ...mats.klassen.values(), mats.schaduw]) m.dispose();
    for (const t of mats.tex) t.dispose();
  }, [mats]);

  // The fading groups get their own copies of the furniture materials, transparent.
  const wijkMats = useMemo(() => new Map([...geo.wijkend].map(([g, klassen]) => [g, new Map([...klassen.keys()].map((k) => {
    const m = mats.klassen.get(k)!.clone();
    m.transparent = true;
    return [k, m];
  }))])), [geo, mats]);
  // Their contact shadow, one material per group, faded with them.
  const wijkSchaduw = useMemo(() => new Map([...geo.afw.schaduwWijk.keys()].map((g) => [g, mats.schaduw.clone()])), [geo, mats]);
  useEffect(() => () => {
    for (const ms of wijkMats.values()) for (const m of ms.values()) m.dispose();
    for (const m of wijkSchaduw.values()) m.dispose();
  }, [wijkMats, wijkSchaduw]);
  const wijkStand = useRef(new Map<string, number>());
  const wijkGroepen = useRef(new Map<string, Group>());

  // Volg de animatie van de groepen in IsoHouse3D: binnenwanden zakken tot de snede, nieuwe kamers groeien uit de vloer.
  const binnen = useRef<Group>(null);
  const meubels = useRef<Group>(null);
  useFrame(({ invalidate }, delta) => {
    const b = binnenRef.current, i = inrichtingRef.current;
    if (b && binnen.current) { binnen.current.position.copy(b.position); binnen.current.scale.copy(b.scale); }
    if (i && meubels.current) { meubels.current.position.copy(i.position); meubels.current.scale.copy(i.scale); meubels.current.visible = i.visible; }
    // The paint above the cut fades with the wall, and like it stops writing depth once faded.
    for (const m of Object.values(mats.boven)) { m.opacity = zicht.current; m.depthWrite = zicht.current > 0.98; }
    let wijkt = false;
    const groepen = new Set([...wijkMats.keys(), ...wijkSchaduw.keys()]);
    for (const g of groepen) {
      const doel = wijk?.zicht.current[g] ?? 1;
      const nu = wijkStand.current.get(g) ?? 1;
      let st = MathUtils.damp(nu, doel, 5, Math.min(delta, 0.1));
      if (Math.abs(st - doel) < 0.004) st = doel; else wijkt = true;
      wijkStand.current.set(g, st);
      const sm = wijkSchaduw.get(g);
      if (sm) { sm.opacity = mats.schaduw.opacity * st; sm.visible = st > 0.01; }
      const ms = wijkMats.get(g);
      if (!ms) continue;
      for (const m of ms.values()) { m.opacity = st; m.depthWrite = st > 0.98; }
      const grp = wijkGroepen.current.get(g);
      if (grp) grp.visible = st > 0.01;
    }
    if (wijkt) invalidate();
  });

  return (
    <>
      <group ref={meubels}>
        {[...geo.meubels].map(([k, g]) => <mesh key={k} geometry={g} material={mats.klassen.get(k)} castShadow={k !== "glas"} receiveShadow />)}
        {[...geo.wijkend].map(([grp, klassen]) => (
          <group key={`w-${grp}`} ref={(x) => { if (x) wijkGroepen.current.set(grp, x); else wijkGroepen.current.delete(grp); }}>
            {[...klassen].map(([k, g]) => <mesh key={k} geometry={g} material={wijkMats.get(grp)?.get(k)} receiveShadow />)}
          </group>
        ))}
      </group>
      {[...geo.afw.vast].map(([k, g]) => <mesh key={`v-${k}`} geometry={g} material={mats.basis[k]} receiveShadow />)}
      {[...geo.afw.gevel].map(([k, g]) => (
        <group key={`g-${k}`}>
          <mesh geometry={g} material={mats.onder[k as "verf" | "wandtegel"]} receiveShadow />
          <mesh geometry={g} material={mats.boven[k as "verf" | "wandtegel"]} receiveShadow />
        </group>
      ))}
      <group ref={binnen}>
        {[...geo.afw.binnen].map(([k, g]) => <mesh key={`b-${k}`} geometry={g} material={mats.basis[k]} receiveShadow />)}
        {[...geo.deuren].map(([k, g]) => <mesh key={`d-${k}`} geometry={g} material={mats.klassen.get(k)} receiveShadow />)}
      </group>
      <mesh geometry={geo.afw.schaduw} material={mats.schaduw} renderOrder={1} />
      {[...geo.afw.schaduwWijk].map(([g, s]) => <mesh key={`ws-${g}`} geometry={s} material={wijkSchaduw.get(g)} renderOrder={1} />)}
    </>
  );
}

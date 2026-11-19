import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef, Component, useMemo, useLayoutEffect, useEffect, Suspense } from "react";
import { useFrame, useLoader, Canvas, useThree } from "@react-three/fiber";
import { BufferGeometry, Float32BufferAttribute, MeshBasicMaterial, RingGeometry, Vector3, Object3D, MeshStandardMaterial, NeutralToneMapping, PCFShadowMap, TextureLoader, Plane, PMREMGenerator, LineDashedMaterial, BoxGeometry, EdgesGeometry, DirectionalLight, Vector4, RepeatWrapping, SRGBColorSpace } from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { F as FILM_START, T as TOESTEL_MODEL, t as toestelTijd, s as stuit, V as VAL, a as aanVoortgang, d as droogStand, b as FILM_WACHT, f as filmStatus, u as useReducedMotion, k as kamerNaam, w as woningTekst, W as WONING, G as GEEN_PLAN, H as HC, c as FH, e as H, g as aankomst, h as TEXTUUR, S as SLAB, i as T, n as nokHoogte, j as TI } from "./VerhuurSimulatorPage-BwFG6J4z.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { b as useTaal } from "../main.mjs";
import "react-router-dom";
import "./PageMeta-BXulEWcY.js";
import "vite-react-ssg";
import "./verhuur-8XCQs1EE.js";
import "./verhuur-CgnDb-wO.js";
import "./tarieven-ZrzMF0e-.js";
import "./packages-DdkKuPcF.js";
import "./verhuur.fr-CrIPL5Eo.js";
import "./booking-CFp-lxcW.js";
import "./levering-CO7G5c_f.js";
import "./seo-BMvlJeai.js";
import "./schema-VJMHyxOJ.js";
/* empty css                       */
import "lucide-react";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/simulator/3d/geo.ts");
const wereldUv = (p, n) => {
  const ax = Math.abs(n[0]), ay = Math.abs(n[1]), az = Math.abs(n[2]);
  if (ay >= ax && ay >= az) return [p[0], p[2]];
  if (ax >= az) return [p[2], p[1]];
  return [p[0], p[1]];
};
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const norm = (a) => {
  const l = Math.hypot(a[0], a[1], a[2]) || 1;
  return [a[0] / l, a[1] / l, a[2] / l];
};
const HEXA_VLAKKEN = [
  [0, 3, 2, 1],
  [4, 5, 6, 7],
  [0, 1, 5, 4],
  [1, 2, 6, 5],
  [2, 3, 7, 6],
  [3, 0, 4, 7]
];
class Bouwer {
  bufs = /* @__PURE__ */ new Map();
  buf(mat) {
    let b = this.bufs.get(mat);
    if (!b) {
      b = { pos: [], nrm: [], uv: [] };
      this.bufs.set(mat, b);
    }
    return b;
  }
  /** Een vlakke vierhoek; de normaal wordt naar `buiten` gedraaid (een punt aan de goede kant). */
  quad(mat, a, b, c, d, buiten, uv = wereldUv) {
    let q = [a, b, c, d];
    let n = norm(cross(sub(b, a), sub(c, a)));
    if (buiten) {
      const mid = [(a[0] + c[0]) / 2, (a[1] + c[1]) / 2, (a[2] + c[2]) / 2];
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
  tri(mat, a, b, c, buiten, uv = wereldUv) {
    let q = [a, b, c];
    let n = norm(cross(sub(b, a), sub(c, a)));
    const mid = [(a[0] + b[0] + c[0]) / 3, (a[1] + b[1] + c[1]) / 3, (a[2] + b[2] + c[2]) / 3];
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
  hexa(mat, h, opt = {}) {
    const c = [0, 0, 0];
    for (const p of h) {
      c[0] += p[0] / 8;
      c[1] += p[1] / 8;
      c[2] += p[2] / 8;
    }
    HEXA_VLAKKEN.forEach(([a, b, cc, d], i) => {
      const soort = i === 0 ? "onder" : i === 1 ? "boven" : "zijkant";
      const m = soort === "boven" ? opt.boven : soort === "onder" ? opt.onder : mat;
      if (m === null) return;
      const pa = h[a], pb = h[b], pc = h[cc], pd = h[d];
      const mid = [(pa[0] + pc[0]) / 2, (pa[1] + pc[1]) / 2, (pa[2] + pc[2]) / 2];
      const buiten = [mid[0] * 2 - c[0], mid[1] * 2 - c[1], mid[2] * 2 - c[2]];
      this.quad(m ?? mat, pa, pb, pc, pd, buiten, soort === "boven" && opt.uvBoven ? opt.uvBoven : opt.uv);
    });
  }
  /** Een rechthoekig blok tussen twee hoeken. */
  blok(mat, x0, x1, y0, y1, z0, z1, opt = {}) {
    if (x1 - x0 < 1e-5 || y1 - y0 < 1e-5 || z1 - z0 < 1e-5) return;
    this.hexa(mat, [
      [x0, y0, z0],
      [x1, y0, z0],
      [x1, y0, z1],
      [x0, y0, z1],
      [x0, y1, z0],
      [x1, y1, z0],
      [x1, y1, z1],
      [x0, y1, z1]
    ], { onder: null, ...opt });
  }
  /** Een cilinder van a naar b (goot, afvoerbuis, nok). */
  cilinder(mat, a, b, r, seg = 12) {
    const as = norm(sub(b, a));
    const hulp = Math.abs(as[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0];
    const u = norm(cross(as, hulp));
    const v = cross(as, u);
    const ring = (p, t) => {
      const cs = Math.cos(t) * r, sn = Math.sin(t) * r;
      return [p[0] + u[0] * cs + v[0] * sn, p[1] + u[1] * cs + v[1] * sn, p[2] + u[2] * cs + v[2] * sn];
    };
    const buf = this.buf(mat);
    for (let i = 0; i < seg; i++) {
      const t0 = i / seg * Math.PI * 2, t1 = (i + 1) / seg * Math.PI * 2;
      const q = [ring(a, t0), ring(b, t0), ring(b, t1), ring(a, t1)];
      const n0 = [u[0] * Math.cos(t0) + v[0] * Math.sin(t0), u[1] * Math.cos(t0) + v[1] * Math.sin(t0), u[2] * Math.cos(t0) + v[2] * Math.sin(t0)];
      const n1 = [u[0] * Math.cos(t1) + v[0] * Math.sin(t1), u[1] * Math.cos(t1) + v[1] * Math.sin(t1), u[2] * Math.cos(t1) + v[2] * Math.sin(t1)];
      const ns = [n0, n0, n1, n1];
      for (const k of [0, 3, 2, 0, 2, 1]) {
        const p = q[k], n = ns[k];
        buf.pos.push(p[0], p[1], p[2]);
        buf.nrm.push(n[0], n[1], n[2]);
        buf.uv.push(k === 0 || k === 1 ? 0 : 1, k === 0 || k === 3 ? 0 : 1);
      }
    }
  }
  /** Alles wat verzameld is, per materiaal. */
  bouw() {
    const uit = /* @__PURE__ */ new Map();
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
function muurMinGaten(a0, a1, b0, b1, gaten) {
  const binnen = gaten.map((g) => ({ a0: Math.max(a0, g.a0), a1: Math.min(a1, g.a1), b0: Math.max(b0, g.b0), b1: Math.min(b1, g.b1) })).filter((g) => g.a1 - g.a0 > 1e-4 && g.b1 - g.b0 > 1e-4);
  const as = [.../* @__PURE__ */ new Set([a0, a1, ...binnen.flatMap((g) => [g.a0, g.a1])])].sort((p, q) => p - q);
  const uit = [];
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
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/simulator/3d/inrichting.ts");
const WAND = 0.07;
function muur(k, kant) {
  const { x, z, w, l } = k;
  switch (kant) {
    case "achter":
      return { kant, L: w, D: l, hoog: z < 1e-6, p: (u, n, y) => [x + u, y, z + n] };
    case "voor":
      return { kant, L: w, D: l, hoog: false, p: (u, n, y) => [x + w - u, y, z + l - n] };
    case "links":
      return { kant, L: l, D: w, hoog: x < 1e-6, p: (u, n, y) => [x + n, y, z + l - u] };
    case "rechts":
      return { kant, L: l, D: w, hoog: false, p: (u, n, y) => [x + w - n, y, z + u] };
  }
}
function heeftOpening(k, kant, openingen) {
  const as = kant === "achter" || kant === "voor" ? "x" : "z";
  const vast = kant === "achter" ? k.z : kant === "voor" ? k.z + k.l : kant === "links" ? k.x : k.x + k.w;
  const [a0, a1] = as === "x" ? [k.x, k.x + k.w] : [k.z, k.z + k.l];
  return openingen.some((o) => o.verdieping === k.verdieping && o.as === as && Math.abs(o.vast - vast) < 1e-6 && o.tot > a0 + 1e-6 && o.van < a1 - 1e-6);
}
function kiesMuur(k, openingen, gevels) {
  const kanten = ["achter", "links", "rechts", "voor"];
  const score = (kant) => {
    const m = muur(k, kant);
    let s = m.L;
    if (heeftOpening(k, kant, openingen)) s -= 100;
    if (m.hoog) s += 4;
    if (kant === "voor" && k.z + k.l > gevels.l - 1e-6) s -= 3;
    if (kant === "rechts" && k.x + k.w > gevels.w - 1e-6) s -= 3;
    return s;
  };
  const beste = kanten.reduce((b, kant) => score(kant) > score(b) ? kant : b, kanten[0]);
  return muur(k, beste);
}
const INGERICHT = /* @__PURE__ */ new Set(["Keuken", "Badkamer", "Toilet", "Wasplaats"]);
function inrichtingsMuur(k, openingen, gevels) {
  if (k.soort === "circulatie" || !INGERICHT.has(k.naam)) return null;
  return kiesMuur(k, openingen, gevels).kant;
}
function richIn(B, kamers, openingen, yf, gevels) {
  for (const k of kamers) {
    if (k.soort === "circulatie") continue;
    const m = kiesMuur(k, openingen, gevels);
    const blok = (mat, u0, u1, n0, n1, y0, y1) => {
      const a = m.p(u0, n0, yf + y0), b = m.p(u1, n1, yf + y1);
      B.blok(mat, Math.min(a[0], b[0]), Math.max(a[0], b[0]), Math.min(a[1], b[1]), Math.max(a[1], b[1]), Math.min(a[2], b[2]), Math.max(a[2], b[2]));
    };
    switch (k.naam) {
      case "Keuken":
        keuken(blok, m.L, m.D, m.hoog);
        break;
      case "Badkamer":
        badkamer(blok, m.L, m.D);
        break;
      case "Toilet":
        toilet(blok, m.L, m.D);
        break;
      case "Wasplaats":
        wasplaats(blok, m.L);
        break;
    }
  }
}
function keuken(blok, L, D, hoog) {
  const n0 = WAND;
  const koelkast = L > 2.6;
  const eind = koelkast ? L - 0.72 : L - 0.08;
  const u0 = 0.08;
  blok("zwart", u0, eind, n0 + 0.04, n0 + 0.56, 0, 0.1);
  blok("kast", u0, eind, n0, n0 + 0.58, 0.1, 0.86);
  for (let u = u0 + 0.6; u < eind - 0.1; u += 0.6) blok("voeg", u - 4e-3, u + 4e-3, n0 + 0.58, n0 + 0.585, 0.14, 0.82);
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
  if (koelkast) {
    blok("kast", L - 0.7, L - 0.08, n0, n0 + 0.62, 0, 2.15);
    blok("voeg", L - 0.7, L - 0.08, n0 + 0.62, n0 + 0.625, 1.4, 1.408);
    blok("inox", L - 0.16, L - 0.13, n0 + 0.625, n0 + 0.65, 0.9, 1.3);
  }
  if (hoog) {
    blok("kast", u0, kook - 0.45, n0, n0 + 0.35, 1.45, 2.15);
    blok("kast", kook + 0.45, eind, n0, n0 + 0.35, 1.45, 2.15);
    blok("inox", kook - 0.45, kook + 0.45, n0, n0 + 0.5, 1.6, 1.68);
    blok("inox", kook - 0.15, kook + 0.15, n0, n0 + 0.25, 1.68, 2.3);
  }
  if (D > 3.4 && L > 3) {
    const len = Math.min(2.2, L * 0.5), c = L / 2, n = Math.min(D - 1.4, 2);
    blok("kast", c - len / 2, c + len / 2, n, n + 0.9, 0.1, 0.86);
    blok("zwart", c - len / 2 + 0.05, c + len / 2 - 0.05, n + 0.05, n + 0.85, 0, 0.1);
    blok("werkblad", c - len / 2 - 0.05, c + len / 2 + 0.05, n - 0.05, n + 1.15, 0.86, 0.9);
  }
}
function badkamer(blok, L, D) {
  const bad = Math.min(1.75, L - 1.2);
  if (bad > 1.2) {
    blok("sanitair", 0.05, 0.05 + bad, WAND, WAND + 0.78, 0, 0.56);
    blok("water", 0.15, bad - 0.05, WAND + 0.1, WAND + 0.68, 0.5, 0.565);
  }
  const lv = Math.min(1, L - bad - 0.2);
  if (lv > 0.5) {
    const u0 = L - lv - 0.08;
    blok("hout", u0, u0 + lv, WAND, WAND + 0.48, 0.35, 0.82);
    blok("sanitair", u0 + 0.05, u0 + lv - 0.05, WAND, WAND + 0.5, 0.82, 0.86);
    blok("spiegel", u0 + 0.05, u0 + lv - 0.05, WAND, WAND + 0.015, 1.1, 1.8);
  }
  if (D > 1.8) toiletPot(blok, Math.min(L - 0.3, 0.45), D - WAND - 0.05, -1);
}
function toiletPot(blok, u, n, richting) {
  const r0 = richting > 0 ? n : n - 0.16, r1 = richting > 0 ? n + 0.16 : n;
  blok("sanitair", u - 0.19, u + 0.19, r0, r1, 0.4, 0.82);
  const p0 = richting > 0 ? n + 0.08 : n - 0.58, p1 = richting > 0 ? n + 0.58 : n - 0.08;
  blok("sanitair", u - 0.17, u + 0.17, p0, p1, 0, 0.4);
  blok("kast", u - 0.18, u + 0.18, p0, p1, 0.4, 0.43);
}
function toilet(blok, L, D) {
  toiletPot(blok, L / 2, WAND, 1);
  if (L > 0.9 && D > 1.1) blok("sanitair", L - 0.4, L - 0.08, WAND, WAND + 0.25, 0.75, 0.85);
}
function wasplaats(blok, L) {
  for (const [i, u] of [[0, 0.1], [1, 0.75]]) {
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
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/simulator/3d/onderdelen.tsx");
function fase(t, periode, vertraging = 0) {
  return ((t + vertraging) % periode + periode) % periode / periode;
}
const MODEL = TOESTEL_MODEL;
const SCHAAL = 1.35;
const VALHOOGTE = 1.8;
const stofMat = () => new MeshBasicMaterial({ color: "#8a7864", transparent: true, opacity: 0, depthWrite: false });
const stofGeo = new RingGeometry(0.42, 0.5, 36);
function Toestel3D({ k, x, y, z, aankomst: aankomst2, werkend, film }) {
  const gltf = useLoader(GLTFLoader, MODEL[k]);
  const model = useMemo(() => {
    const obj = gltf.scene.clone(true);
    let wieken = null;
    const licht = [];
    obj.traverse((o) => {
      if (o.name === "wieken") wieken = o;
      const m = o;
      if (!m.isMesh) return;
      m.castShadow = true;
      m.receiveShadow = true;
      if (o.name === "led" || o.name === "gloed") {
        const mat = m.material.clone();
        m.material = mat;
        licht.push(mat);
      }
    });
    return { obj, wieken, licht };
  }, [gltf]);
  useLayoutEffect(() => () => {
    for (const m of model.licht) m.dispose();
  }, [model]);
  const groep = useRef(null);
  const stof = useRef(null);
  const stofM = useMemo(stofMat, []);
  const toeren = useRef(0);
  useLayoutEffect(() => () => stofM.dispose(), [stofM]);
  useFrame((_, dt) => {
    const t = toestelTijd(film.current);
    const p = Math.min(1, Math.max(0, (t - aankomst2) / VAL));
    const g = groep.current;
    if (g) {
      const er = t >= aankomst2;
      g.position.y = y + (1 - stuit(p)) * VALHOOGTE;
      const plat = p > 0.33 && p < 0.55 ? Math.sin((p - 0.33) / 0.22 * Math.PI) * 0.07 : 0;
      const sk = er ? SCHAAL : 1e-4;
      g.scale.set(sk * (1 + plat * 0.6), sk * (1 - plat), sk * (1 + plat * 0.6));
    }
    const s = film.current.modus === "drogen" ? -1 : (t - aankomst2 - VAL * 0.36) / 0.7;
    if (stof.current) {
      stof.current.visible = s > 0 && s < 1;
      stof.current.scale.setScalar(0.6 + s * 1.1);
      stofM.opacity = s > 0 && s < 1 ? 0.45 * (1 - s) : 0;
    }
    const aan = werkend && aanVoortgang(film.current, aankomst2) > 0 && droogStand(film.current) < 1;
    toeren.current += ((aan ? 1 : 0) - toeren.current) * Math.min(1, dt * 1.8);
    if (model.wieken) model.wieken.rotation.z -= dt * Math.PI * 2 * 2.2 * toeren.current;
    for (const m of model.licht) {
      m.emissiveIntensity = aan ? (k === "kachel" ? 1.4 + 0.3 * Math.cos(fase(t, 2.4) * Math.PI * 2) : 1.2 + 0.8 * Math.cos(fase(t, 1.6) * Math.PI * 2)) * toeren.current : 0;
    }
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("group", { ref: groep, position: [x, y, z], scale: 1e-4, children: /* @__PURE__ */ jsx("primitive", { object: model.obj }) }),
    /* @__PURE__ */ jsx("mesh", { ref: stof, geometry: stofGeo, material: stofM, position: [x, y + 0.01, z], rotation: [-Math.PI / 2, 0, 0], visible: false })
  ] });
}
class ToestelVangnet extends Component {
  state = { fout: false };
  static getDerivedStateFromError() {
    return { fout: true };
  }
  componentDidCatch(err) {
    console.warn("[droogsimulator] toestellen niet geladen:", err);
  }
  render() {
    return this.state.fout ? this.props.terugval ?? null : this.props.children;
  }
}
function FilmStart({ film }) {
  const frames = useRef(0);
  useFrame(() => {
    if (film.current.start >= 0) {
      frames.current = 0;
      return;
    }
    if (++frames.current < 3) return;
    filmStatus.wacht = false;
    film.current.start = performance.now();
    window.dispatchEvent(new CustomEvent(FILM_START, { detail: film.current.start }));
  });
  return null;
}
function FilmWacht() {
  useEffect(() => {
    filmStatus.wacht = true;
    window.dispatchEvent(new Event(FILM_WACHT));
    return () => {
      filmStatus.wacht = false;
    };
  }, []);
  return null;
}
const dummy = new Object3D();
const bezier = (a, b, c, t, uit) => {
  const u = 1 - t;
  return uit.set(
    u * u * a.x + 2 * u * t * b.x + t * t * c.x,
    u * u * a.y + 2 * u * t * b.y + t * t * c.y,
    u * u * a.z + 2 * u * t * b.z + t * t * c.z
  );
};
function Luchtstroom3D({ kamers, plaatsingen, yf, film }) {
  const ref = useRef(null);
  const PER = 6;
  const banen = useMemo(() => {
    const uit = [];
    for (const p2 of plaatsingen.filter((pp) => pp.k === "axiaal")) {
      const k = kamers.find((kk) => kk.id === p2.kamer);
      if (!k) continue;
      const x = k.x + p2.x, z = k.z + p2.z;
      const rest = Math.max(1.2, k.z + k.l - z - 0.3);
      for (const dx of [-0.25, 0, 0.25]) {
        uit.push([new Vector3(x + dx, yf + 0.62, z + 0.3), new Vector3(x + dx * 3, yf + 0.38, z + rest * 0.5), new Vector3(x + dx * 5, yf + 0.12, z + rest), p2.a]);
      }
    }
    return uit;
  }, [kamers, plaatsingen, yf]);
  const mat = useMemo(() => new MeshBasicMaterial({ color: "#7aa6c9", transparent: true, opacity: 0.85, depthWrite: false }), []);
  const p = useMemo(() => new Vector3(), []);
  const q = useMemo(() => new Vector3(), []);
  useFrame(({ clock }) => {
    const m = ref.current;
    if (!m) return;
    const t = clock.elapsedTime;
    const stilvallen = film.current.modus === "drogen" ? Math.min(1, (1 - droogStand(film.current)) / 0.1) : 0;
    banen.forEach(([a, b, c, aank], i) => {
      const aan = aanVoortgang(film.current, aank) * stilvallen;
      for (let j = 0; j < PER; j++) {
        const f = fase(t, 1.6, j / PER * 1.6 + i * 0.3);
        bezier(a, b, c, f, p);
        bezier(a, b, c, Math.min(1, f + 0.02), q);
        dummy.position.copy(p);
        dummy.lookAt(q);
        const s = Math.sin(f * Math.PI) * aan;
        dummy.scale.set(0.025 * s + 1e-3, 0.025 * s + 1e-3, 0.16 * s + 1e-3);
        dummy.updateMatrix();
        m.setMatrixAt(i * PER + j, dummy.matrix);
      }
    });
    m.instanceMatrix.needsUpdate = true;
  });
  if (banen.length === 0) return null;
  return /* @__PURE__ */ jsx("instancedMesh", { ref, args: [void 0, mat, banen.length * PER], frustumCulled: false, children: /* @__PURE__ */ jsx("boxGeometry", { args: [1, 1, 1] }) });
}
function Druppels3D({ kamers, plaatsingen, yf, vocht, film }) {
  const ref = useRef(null);
  const banen = useMemo(() => {
    const uit = [];
    if (vocht <= 0) return uit;
    plaatsingen.filter((p2) => p2.k === "small" || p2.k === "medium").forEach((p2, i) => {
      const k = kamers.find((kk) => kk.id === p2.kamer);
      if (!k) return;
      const naar = new Vector3(k.x + p2.x, yf + 0.8, k.z + p2.z);
      const n = Math.max(3, Math.round(6 * vocht));
      for (let j = 0; j < n; j++) {
        const f = (j * 0.618 + i * 0.31) % 1;
        const g = (j * 0.382 + i * 0.17) % 1;
        const van = j % 2 === 0 ? new Vector3(k.x + 0.3 + f * (k.w - 0.6), yf + 0.05, k.z + 0.3 + g * (k.l - 0.6)) : new Vector3(k.x + 0.2 + f * (k.w - 0.4), yf + 0.5 + g * 1, k.z + 0.08);
        uit.push({ van, naar, vertraging: (j * 0.47 + i * 0.29) % 2.8, a: p2.a });
      }
    });
    return uit;
  }, [kamers, plaatsingen, yf, vocht]);
  const mat = useMemo(() => new MeshStandardMaterial({ color: "#3d8fd6", roughness: 0.1, emissive: "#1d5f9a", emissiveIntensity: 0.4 }), []);
  const p = useMemo(() => new Vector3(), []);
  useFrame(({ clock }) => {
    const m = ref.current;
    if (!m) return;
    const rest = film.current.modus === "drogen" ? 1 - droogStand(film.current) : 0;
    banen.forEach((b, i) => {
      const aan = aanVoortgang(film.current, b.a);
      const f = fase(clock.elapsedTime, 2.8, b.vertraging);
      const e = f * f * (3 - 2 * f);
      p.lerpVectors(b.van, b.naar, e);
      p.y += Math.sin(f * Math.PI) * 0.25;
      const zicht = f < 0.15 ? f / 0.15 : f > 0.85 ? (1 - f) / 0.15 : 1;
      dummy.position.copy(p);
      dummy.rotation.set(0, 0, 0);
      dummy.scale.setScalar(0.045 * zicht * aan * rest + 1e-4);
      dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);
    });
    m.instanceMatrix.needsUpdate = true;
  });
  if (banen.length === 0) return null;
  return /* @__PURE__ */ jsx("instancedMesh", { ref, args: [void 0, mat, banen.length], frustumCulled: false, children: /* @__PURE__ */ jsx("sphereGeometry", { args: [1, 10, 8] }) });
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/simulator/3d/IsoHouse3D.tsx");
const OV = 0.35;
const DUUR = 900;
const TEGELS = {
  baksteen: { url: TEXTUUR.baksteen, periode: [16 * 0.202, 32 * 0.062] },
  arduin: { url: TEXTUUR.arduin, periode: [1, 1] },
  pannen: { url: TEXTUUR.pannen, periode: [8 * 0.27, 6 * 0.36] },
  pleister: { url: TEXTUUR.pleister, periode: [1.5, 1.5] },
  chape: { url: TEXTUUR.chape, periode: [1, 1] },
  parket: { url: TEXTUUR.parket, periode: [8 * 0.18, 2.4] },
  grind: { url: TEXTUUR.grind, periode: [0.5, 0.5] },
  // Bouwfasen (stap 3): wat er op muur en vloer zit, van ruwbouw tot afgewerkt.
  pleisternat: { url: TEXTUUR.pleisternat, periode: [2, 2] },
  verf: { url: TEXTUUR.verf, periode: [1, 1] },
  vloerplaat: { url: TEXTUUR.vloerplaat, periode: [2, 2] },
  tegelvloer: { url: TEXTUUR.tegelvloer, periode: [2.4, 2.4] }
};
const TEGEL_NAMEN = Object.keys(TEGELS);
const GSM = typeof window !== "undefined" && window.matchMedia("(max-width: 899px), (pointer: coarse)").matches;
const ANISO = GSM ? 4 : 8;
function maakMaterialen(tex, m) {
  const t = (naam) => {
    const c = tex[naam].clone();
    const [pw, ph] = TEGELS[naam].periode;
    c.wrapS = c.wrapT = RepeatWrapping;
    c.repeat.set(1 / pw, 1 / ph);
    c.colorSpace = SRGBColorSpace;
    c.anisotropy = ANISO;
    c.needsUpdate = true;
    return c;
  };
  const s = (color, o = {}) => Object.assign(new MeshStandardMaterial({ color, roughness: 0.7 }), o);
  const baksteen = t("baksteen");
  const pannen = t("pannen");
  const set = /* @__PURE__ */ new Map([
    ["baksteen", s("#f3e2d8", { map: baksteen, bumpMap: baksteen, bumpScale: 1.2, roughness: 0.92 })],
    ["arduin", s("#ffffff", { map: t("arduin"), roughness: 0.55 })],
    ["plaat", s("#d9d2c6", { roughness: 0.9 })],
    ["snede", s("#2a2422", { roughness: 0.95 })],
    ["kader", s("#f4f1ec", { roughness: 0.32 })],
    ["glas", s("#33454f", { roughness: 0.05, metalness: 0.15, envMapIntensity: 2.4 })],
    ["deur", s("#3b2a22", { roughness: 0.45 })],
    ["deurblad", s("#8a7464", { roughness: 0.6 })],
    ["pannen", s("#c9c9cc", { map: pannen, bumpMap: pannen, bumpScale: 1.5, roughness: 0.5 })],
    ["zink", s("#a7adb1", { metalness: 0.75, roughness: 0.32 })],
    ["zinkdak", s("#3a3d40", { metalness: 0.55, roughness: 0.45 })],
    ["boei", s("#2c2e31", { roughness: 0.6 })],
    ["nok", s("#26282b", { roughness: 0.5 })],
    ["velux", s("#45484c", { metalness: 0.4, roughness: 0.4 })],
    ["pleister", s(m.muur, { map: t("pleister"), roughness: 0.95 })],
    ["vloer", s(m.parket ? "#ffffff" : m.vloer, { map: m.parket ? t("parket") : t("chape"), roughness: m.parket ? 0.55 : 0.9 })],
    ["trede", s("#c4a684", { roughness: 0.55 })],
    ["trapzij", s("#7d6352", { roughness: 0.65 })],
    ["leuning", s("#2a2422", { roughness: 0.5 })],
    ["grind", s("#ffffff", { map: t("grind"), roughness: 0.95 })],
    // Inrichting (inrichting.ts)
    ["kast", s("#ece9e3", { roughness: 0.35 })],
    ["voeg", s("#9d978e", { roughness: 0.6 })],
    ["zwart", s("#232323", { roughness: 0.7 })],
    ["werkblad", s("#3d3835", { roughness: 0.28 })],
    ["inox", s("#c3c7cb", { metalness: 0.85, roughness: 0.28 })],
    ["donker", s("#2f3236", { metalness: 0.6, roughness: 0.3 })],
    ["zwartglas", s("#121416", { roughness: 0.08, metalness: 0.2 })],
    ["kookzone", s("#3a3c40", { roughness: 0.2 })],
    ["hout", s("#a57a51", { roughness: 0.55 })],
    ["metaal", s("#55595e", { metalness: 0.6, roughness: 0.4 })],
    ["sanitair", s("#f8f8f6", { roughness: 0.12 })],
    ["water", s("#9fc4d6", { roughness: 0.05, metalness: 0.1 })],
    ["spiegel", s("#cfd8dc", { roughness: 0.02, metalness: 0.9 })]
  ]);
  return set;
}
function afgeleid(basis, aanpas) {
  const uit = /* @__PURE__ */ new Map();
  for (const [k, m] of basis) {
    const c = m.clone();
    aanpas(c);
    uit.set(k, c);
  }
  return uit;
}
const tween = (v) => ({ van: v, naar: v, start: 0, nu: v });
function stuur(tw, doel, direct) {
  if (direct) {
    tw.van = tw.naar = tw.nu = doel;
    return;
  }
  if (doel === tw.naar) return;
  tw.van = tw.nu;
  tw.naar = doel;
  tw.start = performance.now();
}
function herstart(tw, direct) {
  tw.van = direct ? 1 : 0;
  tw.nu = tw.van;
  tw.naar = 1;
  tw.start = -1;
}
function stap(tw, duur = DUUR) {
  if (tw.start < 0) tw.start = performance.now();
  const k = Math.min(1, (performance.now() - tw.start) / duur);
  const e = 1 - Math.pow(1 - k, 3);
  tw.nu = tw.van + (tw.naar - tw.van) * e;
  return tw.nu;
}
function bouw(p) {
  const { woning, lagen, act, dak, kamers, openingen, trappen } = p;
  const { w, l, buren } = WONING[woning];
  const B = { vast: new Bouwer(), boven: new Bouwer(), dak: new Bouwer(), gevel: new Bouwer(), binnen: new Bouwer(), bladen: new Bouwer() };
  const punt = (g, a, n, y) => g === "voor" ? [a, y, l + T + n] : g === "zij" ? [w + T + n, y, a] : g === "achter" ? [a, y, -T - n] : [-T - n, y, a];
  const gblok = (b, mat, g, a0, a1, n0, n1, y0, y1, opt = {}) => {
    const p0 = punt(g, a0, n0, y0), p1 = punt(g, a1, n1, y1);
    b.blok(mat, Math.min(p0[0], p1[0]), Math.max(p0[0], p1[0]), Math.min(p0[1], p1[1]), Math.max(p0[1], p1[1]), Math.min(p0[2], p1[2]), Math.max(p0[2], p1[2]), opt);
  };
  const raam = (b, g, a0, a1, y0, y1, kalf, stijl) => {
    const fr = 0.065, n1 = -0.09, n0 = -0.09 - 0.06;
    gblok(b, "glas", g, a0, a1, n0 + 0.02, n0 + 0.03, y0, y1);
    gblok(b, "kader", g, a0, a0 + fr, n0, n1, y0, y1);
    gblok(b, "kader", g, a1 - fr, a1, n0, n1, y0, y1);
    gblok(b, "kader", g, a0, a1, n0, n1, y0, y0 + fr);
    gblok(b, "kader", g, a0, a1, n0, n1, y1 - fr, y1);
    if (stijl) gblok(b, "kader", g, (a0 + a1) / 2 - 0.035, (a0 + a1) / 2 + 0.035, n0 - 5e-3, n1, y0, y1 - (kalf || 0));
    if (kalf) gblok(b, "kader", g, a0, a1, n0 - 5e-3, n1, y1 - kalf - 0.035, y1 - kalf + 0.035);
    gblok(b, "arduin", g, a0 - 0.05, a1 + 0.05, -0.09, 0.05, y0 - 0.07, y0);
  };
  const voordeur = openingen.find((o) => o.soort === "voordeur" && o.verdieping === 0);
  const gevelGaten = (g, v, yf) => {
    const gaten = [];
    if (g === "voor") {
      const deurKolom = voordeur && woning !== "appartement" ? voordeur : null;
      const n = w < 7 ? 2 : w < 9.5 ? 3 : 4;
      let kolommen;
      let stapw;
      if (deurKolom) {
        const links = deurKolom.van - 0.3, rechts = w - (deurKolom.tot + 0.3);
        const [s0, s1] = rechts >= links ? [deurKolom.tot + 0.3, w] : [0, deurKolom.van - 0.3];
        stapw = (s1 - s0) / (n - 1);
        kolommen = Array.from({ length: n - 1 }, (_, i) => s0 + stapw * (i + 0.5));
      } else {
        stapw = w / n;
        kolommen = Array.from({ length: n }, (_, i) => stapw * (i + 0.5));
      }
      const bw = Math.min(1.3, stapw * 0.58);
      for (const cx of kolommen) {
        gaten.push({ a0: cx - bw / 2, a1: cx + bw / 2, b0: yf + 0.75, b1: yf + 2.3, soort: "raam", kalf: 0.5, stijl: bw > 0.9 });
      }
      if (deurKolom && v === 0) {
        gaten.push({ a0: deurKolom.van - 0.06, a1: deurKolom.tot + 0.06, b0: yf, b1: yf + 2.3, soort: "deur", kalf: 0, stijl: false });
      } else if (deurKolom) {
        const dc = (deurKolom.van + deurKolom.tot) / 2, dw = Math.min(bw, deurKolom.tot - deurKolom.van + 0.12);
        gaten.push({ a0: dc - dw / 2, a1: dc + dw / 2, b0: yf + 0.75, b1: yf + 2.3, soort: "raam", kalf: 0.5, stijl: false });
      }
    } else if (buren !== 2) {
      const n = l > 10.5 ? 2 : 1;
      for (let i = 0; i < n; i++) {
        const cz = l * (i + 1) / (n + 1);
        gaten.push({ a0: cz - 0.45, a1: cz + 0.45, b0: yf + 0.9, b1: yf + 2.3, soort: "raam", kalf: 0.45, stijl: false });
      }
    }
    return gaten;
  };
  const binnenRamen = (g, v, yf, laag, laagOpeningen) => {
    const gaten = [];
    if (g === "links" && buren !== 0) return gaten;
    const tegen = laag.filter((k) => k.soort !== "circulatie" && (g === "achter" ? k.z < 1e-6 : k.x < 1e-6));
    const breedte = (k) => g === "achter" ? k.w : k.l;
    const tuin = g === "achter" && v === 0 ? tegen.filter((k) => !inrichtingsMuur(k, laagOpeningen, { w, l })).sort((p2, q) => breedte(q) - breedte(p2))[0] : void 0;
    for (const k of tegen) {
      const lang = breedte(k);
      if (lang < 1.5) continue;
      const mid = g === "achter" ? k.x + k.w / 2 : k.z + k.l / 2;
      const muur2 = inrichtingsMuur(k, laagOpeningen, { w, l });
      const bezet = muur2 === (g === "achter" ? "achter" : "links");
      if (bezet && k.naam === "Keuken") continue;
      if (k === tuin) {
        const bw = Math.min(2.4, lang * 0.55);
        gaten.push({ a0: mid - bw / 2, a1: mid + bw / 2, b0: yf + 0.02, b1: yf + 2.3, kalf: 0, stijl: true });
      } else if (bezet) {
        const bw = Math.min(0.7, lang * 0.4);
        gaten.push({ a0: mid - bw / 2, a1: mid + bw / 2, b0: yf + 1.65, b1: yf + 2.25, kalf: 0, stijl: false });
      } else {
        const bw = Math.min(1.4, lang * 0.5);
        gaten.push({ a0: mid - bw / 2, a1: mid + bw / 2, b0: yf + 0.9, b1: yf + 2.3, kalf: 0.45, stijl: bw > 0.9 });
      }
    }
    return gaten;
  };
  const gevels = (b, v, yf) => {
    for (const g of ["voor", "zij"]) {
      const gaten = gevelGaten(g, v, yf);
      const [a0, a1] = g === "voor" ? [-T, w + T] : [-T, l];
      for (const r of muurMinGaten(a0, a1, yf, yf + H, gaten)) gblok(b, "baksteen", g, r.a0, r.a1, -T, 0, r.b0, r.b1);
      for (const gat of gaten) {
        if (gat.soort === "raam") {
          raam(b, g, gat.a0, gat.a1, gat.b0, gat.b1, gat.kalf, gat.stijl);
        } else {
          const fr = 0.06;
          gblok(b, "kader", g, gat.a0, gat.a0 + fr, -0.09 - 0.07, -0.09, gat.b0, gat.b1);
          gblok(b, "kader", g, gat.a1 - fr, gat.a1, -0.09 - 0.07, -0.09, gat.b0, gat.b1);
          gblok(b, "kader", g, gat.a0, gat.a1, -0.09 - 0.07, -0.09, gat.b1 - fr, gat.b1);
          gblok(b, "deur", g, gat.a0 + fr, gat.a1 - fr, -0.09 - 0.05, -0.09 - 0.01, gat.b0, gat.b1 - fr);
          gblok(b, "glas", g, gat.a0 + 0.22, gat.a1 - 0.22, -0.09 - 0.012, -0.09 - 5e-3, gat.b0 + 1.3, gat.b0 + 2);
          gblok(b, "arduin", g, gat.a0 - 0.04, gat.a1 + 0.04, -0.09, 0.04, gat.b0 - 0.03, gat.b0);
          gblok(b, "arduin", g, gat.a0 - 0.15, gat.a1 + 0.15, 0, 0.4, gat.b0 - SLAB, gat.b0 - SLAB + 0.16);
        }
      }
    }
    b.blok("baksteen", -T, w, yf, yf + H, -T, 0);
    b.blok("baksteen", -T, 0, yf, yf + H, 0, l);
  };
  const plaat = (b, v, yb, gat) => {
    const mat = v === 0 ? "arduin" : "baksteen";
    const stukken = gat ? muurMinGaten(-T, w + T, -T, l + T, [gat]) : [{ a0: -T, a1: w + T, b0: -T, b1: l + T }];
    for (const r of stukken) b.blok(mat, r.a0, r.a1, yb, yb + SLAB, r.b0, r.b1, { boven: "plaat" });
  };
  const geslotenLaag = (b, v) => {
    const yb = v * FH;
    plaat(b, v, yb);
    gevels(b, v, yb + SLAB);
  };
  const actieveLaag = (v) => {
    const yb = v * FH, yf = yb + SLAB;
    const laagKamers = kamers.filter((k) => k.verdieping === v);
    const laagOpeningen = openingen.filter((o) => o.verdieping === v);
    const laagTrappen = trappen.filter((t) => t.verdieping === v);
    const trapgat = laagTrappen.find((t) => !t.op);
    const gat = trapgat ? { a0: trapgat.x, a1: trapgat.x + trapgat.w, b0: trapgat.z, b1: trapgat.z + trapgat.l } : void 0;
    plaat(B.vast, v, yb, gat);
    for (const k of laagKamers) {
      for (const r of muurMinGaten(k.x, k.x + k.w, k.z, k.z + k.l, gat ? [gat] : [])) {
        B.vast.quad("vloer", [r.a0, yf + 3e-3, r.b0], [r.a1, yf + 3e-3, r.b0], [r.a1, yf + 3e-3, r.b1], [r.a0, yf + 3e-3, r.b1], [0, 100, 0]);
      }
    }
    for (const g of ["achter", "links"]) {
      const gaten = binnenRamen(g, v, yf, laagKamers, laagOpeningen);
      const [a0, a1] = g === "achter" ? [-T, w] : [0, l];
      for (const r of muurMinGaten(a0, a1, yf, yf + H, gaten)) {
        gblok(B.vast, "baksteen", g, r.a0, r.a1, -T, 0, r.b0, r.b1, { boven: r.b1 > yf + H - 1e-4 ? "snede" : "arduin" });
      }
      for (const gt of gaten) raam(B.vast, g, gt.a0, gt.a1, gt.b0, gt.b1, gt.kalf, gt.stijl);
      const lijn = (a, b, y0, y1, n0, n1) => gblok(B.vast, "pleister", g, a, b, n0, n1, y0, y1);
      const ib = 2e-3, kd = -0.09 - 0.06;
      for (const r of muurMinGaten(Math.max(a0, 0), a1, yf, yf + H, gaten)) lijn(r.a0, r.a1, r.b0, r.b1, -T - ib, -T);
      for (const gt of gaten) {
        lijn(gt.a0, gt.a0 + 4e-3, gt.b0, gt.b1, -T, kd);
        lijn(gt.a1 - 4e-3, gt.a1, gt.b0, gt.b1, -T, kd);
        lijn(gt.a0, gt.a1, gt.b1 - 4e-3, gt.b1, -T, kd);
      }
    }
    for (const g of ["voor", "zij"]) {
      const gaten = gevelGaten(g, v, yf);
      const [a0, a1] = g === "voor" ? [-T, w + T] : [-T, l];
      for (const r of muurMinGaten(a0, a1, yf, yf + H, gaten)) gblok(B.gevel, "baksteen", g, r.a0, r.a1, -T, 0, r.b0, r.b1);
      for (const gt of gaten) {
        if (gt.soort === "raam") raam(B.gevel, g, gt.a0, gt.a1, gt.b0, gt.b1, gt.kalf, gt.stijl);
      }
      const doorSnede = gaten.filter((gt) => gt.b0 < yf + HC && gt.b1 > yf + HC).map((gt) => ({ a0: gt.a0, a1: gt.a1, b0: 0, b1: 1 }));
      for (const r of muurMinGaten(a0, a1, 0, 1, doorSnede)) gblok(B.vast, "snede", g, r.a0, r.a1, -T, 0, yf + HC - 4e-3, yf + HC);
      for (const gt of gaten.filter((x) => x.soort === "deur")) {
        const fr = 0.06;
        gblok(B.gevel, "kader", g, gt.a0, gt.a0 + fr, -0.09 - 0.07, -0.09, gt.b0, gt.b1);
        gblok(B.gevel, "kader", g, gt.a1 - fr, gt.a1, -0.09 - 0.07, -0.09, gt.b0, gt.b1);
        gblok(B.gevel, "kader", g, gt.a0, gt.a1, -0.09 - 0.07, -0.09, gt.b1 - fr, gt.b1);
        gblok(B.gevel, "deur", g, gt.a0 + fr, gt.a1 - fr, -0.09 - 0.05, -0.09 - 0.01, gt.b0, gt.b1 - fr);
        gblok(B.gevel, "glas", g, gt.a0 + 0.22, gt.a1 - 0.22, -0.09 - 0.012, -0.09 - 5e-3, gt.b0 + 1.3, gt.b0 + 2);
        gblok(B.gevel, "arduin", g, gt.a0 - 0.04, gt.a1 + 0.04, -0.09, 0.04, gt.b0 - 0.03, gt.b0);
        gblok(B.vast, "arduin", g, gt.a0 - 0.15, gt.a1 + 0.15, 0, 0.4, gt.b0 - SLAB, gt.b0 - SLAB + 0.16);
      }
    }
    const wand = (as, vast, a0, a1) => {
      const gaten = laagOpeningen.filter((o) => o.as === as && Math.abs(o.vast - vast) < 1e-6 && o.tot > a0 && o.van < a1).map((o) => ({ a0: o.van, a1: o.tot, b0: 0, b1: H }));
      const laagTrap = laagTrappen.find((t) => as === "x" && Math.abs(vast - (t.z + t.l + 0.05)) < 0.12);
      if (laagTrap) {
        const l0 = Math.max(a0, laagTrap.x), l1 = Math.min(a1, laagTrap.x + laagTrap.w);
        if (l1 > l0) gaten.push({ a0: l0, a1: l1, b0: 0, b1: H });
      }
      for (const r of muurMinGaten(a0, a1, 0, H, gaten)) {
        if (as === "x") B.binnen.blok("pleister", r.a0, r.a1, r.b0, r.b1, vast - TI / 2, vast + TI / 2, { boven: "snede" });
        else B.binnen.blok("pleister", vast - TI / 2, vast + TI / 2, r.b0, r.b1, r.a0, r.a1, { boven: "snede" });
      }
      laagOpeningen.filter((o) => o.soort === "deur" && o.as === as && Math.abs(o.vast - vast) < 1e-6 && o.tot > a0 && o.van < a1).forEach((o) => {
        const blad = Math.min(0.85, o.tot - o.van);
        const z0 = o.kant > 0 ? vast : vast - blad, z1 = o.kant > 0 ? vast + blad : vast;
        if (as === "x") B.bladen.blok("deurblad", o.van, o.van + 0.04, 0, 2.05, z0, z1);
        else B.bladen.blok("deurblad", z0, z1, 0, 2.05, o.van, o.van + 0.04);
      });
    };
    for (const k of laagKamers) {
      const front = k.z + k.l, rechts = k.x + k.w;
      if (front < l - 1e-6) wand("x", front, k.x, rechts);
      if (rechts < w - 1e-6) wand("z", rechts, k.z, front);
    }
    const treden = 13;
    const echteTrap = (t, yb2, leuning) => {
      const aan = t.w / treden, op = FH / treden;
      const z0 = t.z, z1 = t.z + t.l, bd = 0.05;
      for (let i = 0; i < treden; i++) {
        const x0 = t.x + aan * i, top = yb2 + op * (i + 1);
        B.vast.blok("trede", x0 - 0.025, x0 + aan, top - 0.035, top, z0 + bd, z1 - bd);
        B.vast.blok("trapzij", x0, x0 + 0.018, top - op, top - 0.035, z0 + bd, z1 - bd, { boven: null });
      }
      const neus = (x) => yb2 + (x - t.x) / t.w * FH;
      const xa = t.x, xb = t.x + t.w;
      for (const [zb0, zb1] of [[z0, z0 + bd], [z1 - bd, z1]]) {
        B.vast.hexa("trapzij", [
          [xa, neus(xa) - 0.24, zb0],
          [xb, neus(xb) - 0.24, zb0],
          [xb, neus(xb) - 0.24, zb1],
          [xa, neus(xa) - 0.24, zb1],
          [xa, neus(xa) + 0.06, zb0],
          [xb, neus(xb) + 0.06, zb0],
          [xb, neus(xb) + 0.06, zb1],
          [xa, neus(xa) + 0.06, zb1]
        ]);
      }
      if (!leuning) return;
      const lh = 0.9, rz0 = z1 - 0.045, rz1 = z1 - 5e-3;
      B.vast.hexa("leuning", [
        [xa, neus(xa) + lh, rz0],
        [xb, neus(xb) + lh, rz0],
        [xb, neus(xb) + lh, rz1],
        [xa, neus(xa) + lh, rz1],
        [xa, neus(xa) + lh + 0.05, rz0],
        [xb, neus(xb) + lh + 0.05, rz0],
        [xb, neus(xb) + lh + 0.05, rz1],
        [xa, neus(xa) + lh + 0.05, rz1]
      ]);
      for (let i = 0; i < treden; i += 2) {
        const x = t.x + aan * (i + 0.5);
        B.vast.blok("leuning", x - 0.015, x + 0.015, yb2 + op * (i + 1), neus(x) + lh, rz0 + 5e-3, rz1 - 5e-3);
      }
    };
    for (const t of laagTrappen) {
      if (t.op) {
        echteTrap(t, yf, true);
      } else {
        echteTrap(t, yf - FH, false);
        const spijlen = Math.max(3, Math.round(t.w / 0.5));
        B.vast.blok("leuning", t.x, t.x + t.w, yf + 0.86, yf + 0.92, t.z + t.l - 0.05, t.z + t.l);
        for (let i = 0; i <= spijlen; i++) {
          const x = Math.min(t.x + t.w * i / spijlen, t.x + t.w - 0.04);
          B.vast.blok("leuning", x, x + 0.04, yf, yf + 0.86, t.z + t.l - 0.04, t.z + t.l);
        }
        B.vast.blok("leuning", t.x, t.x + 0.05, yf, yf + 0.92, t.z, t.z + t.l);
      }
    }
  };
  const heeftKamers = (v) => kamers.some((k) => k.verdieping === v);
  for (let v = 0; v < lagen; v++) {
    if (v < act) geslotenLaag(B.vast, v);
    else if (v === act) {
      if (heeftKamers(v)) actieveLaag(v);
      else geslotenLaag(B.vast, v);
    } else geslotenLaag(B.boven, v);
  }
  dakBouw(B.dak, { dak, w, l, buren, lagen });
  return B;
}
function dakBouw(b, { dak, w, l, buren, lagen }) {
  const y = lagen * FH;
  const nok = nokHoogte(dak, l);
  const x0 = -T - OV, x1 = w + T + OV;
  const zinkGoot = (zz, yy) => b.cilinder("zink", [x0, yy, zz], [x1, yy, zz], 0.07, 14);
  const afvoer = (x, z, yGoot, zGoot) => {
    b.cilinder("zink", [x, 0.05, z], [x, yGoot - 0.5, z], 0.045, 10);
    b.cilinder("zink", [x, yGoot - 0.5, z], [x, yGoot - 0.1, zGoot], 0.045, 10);
    for (const yy of [1.2, Math.max(1.3, (yGoot - 0.6) / 2), yGoot - 0.8]) b.blok("zink", x - 0.05, x + 0.05, yy, yy + 0.04, z - 0.07, z);
  };
  if (dak === "plat") {
    b.blok("zink", -T - 0.08, w + T + 0.08, y, y + 0.42, -T - 0.08, l + T + 0.08, { boven: null });
    b.blok("zink", -T - 0.08, w + T + 0.08, y + 0.3, y + 0.46, -T - 0.08, -T + 0.2, {});
    b.blok("zink", -T - 0.08, w + T + 0.08, y + 0.3, y + 0.46, l + T - 0.2, l + T + 0.08, {});
    b.blok("zink", -T - 0.08, -T + 0.2, y + 0.3, y + 0.46, -T + 0.2, l + T - 0.2, {});
    b.blok("zink", w + T - 0.2, w + T + 0.08, y + 0.3, y + 0.46, -T + 0.2, l + T - 0.2, {});
    b.quad("grind", [-T + 0.2, y + 0.36, -T + 0.2], [w + T - 0.2, y + 0.36, -T + 0.2], [w + T - 0.2, y + 0.36, l + T - 0.2], [-T + 0.2, y + 0.36, l + T - 0.2], [0, 100, 0]);
    afvoer(w + T + 0.06, l + T - 0.3, y + 0.3, l + T - 0.3);
    return;
  }
  if (dak === "lessenaar") {
    const hb = nok, hf = 0.45;
    const zB = -T - OV, zF = l + T + OV;
    const yB = y + hb + 0.05, yF = y + hf - 0.05;
    const hoogte = (z) => yB + (yF - yB) * (z - zB) / (zF - zB);
    for (const [a, c] of [[w, w + T], [-T, 0]]) {
      b.hexa("baksteen", [
        [a, y, -T],
        [c, y, -T],
        [c, y, l + T],
        [a, y, l + T],
        [a, hoogte(-T) - 0.16, -T],
        [c, hoogte(-T) - 0.16, -T],
        [c, hoogte(l + T) - 0.16, l + T],
        [a, hoogte(l + T) - 0.16, l + T]
      ], { onder: null, boven: null });
    }
    b.blok("baksteen", -T, w + T, y, hoogte(l + T) - 0.16, l, l + T, { boven: null });
    b.blok("baksteen", -T, w + T, y, hoogte(-T) - 0.16, -T, 0, { boven: null });
    const dik2 = 0.16;
    b.hexa("zinkdak", [
      [x0, yB - dik2, zB],
      [x1, yB - dik2, zB],
      [x1, yF - dik2, zF],
      [x0, yF - dik2, zF],
      [x0, yB, zB],
      [x1, yB, zB],
      [x1, yF, zF],
      [x0, yF, zF]
    ], { onder: "boei" });
    for (let x = x0 + 0.5; x < x1 - 0.2; x += 0.5) b.hexa("zink", [
      [x - 0.012, yB, zB],
      [x + 0.012, yB, zB],
      [x + 0.012, yF, zF],
      [x - 0.012, yF, zF],
      [x - 0.012, yB + 0.025, zB],
      [x + 0.012, yB + 0.025, zB],
      [x + 0.012, yF + 0.025, zF],
      [x - 0.012, yF + 0.025, zF]
    ], { onder: null });
    zinkGoot(zF + 0.07, yF - 0.12);
    afvoer(w + T - 0.12, l + T + 0.06, yF, zF + 0.07);
    if (buren < 1) afvoer(-T + 0.12, l + T + 0.06, yF, zF + 0.07);
    return;
  }
  const mz = l / 2;
  const yE = y - 0.05;
  const yR = y + nok;
  const dik = 0.16;
  for (const kant of [1, -1]) {
    const zE = kant > 0 ? l + T + OV : -T - OV;
    const uvDak = (pt) => [pt[0], Math.hypot(pt[2] - zE, pt[1] - yE)];
    b.hexa("pannen", [
      [x0, yE - dik, zE],
      [x1, yE - dik, zE],
      [x1, yR - dik, mz],
      [x0, yR - dik, mz],
      [x0, yE, zE],
      [x1, yE, zE],
      [x1, yR, mz],
      [x0, yR, mz]
    ], { onder: "boei", uvBoven: uvDak });
    b.blok("boei", x0, x1, yE - 0.22, yE + 0.01, Math.min(zE, zE - kant * 0.03), Math.max(zE, zE - kant * 0.03));
    for (const xw of [x0 - 0.03, x1]) {
      b.hexa("boei", [
        [xw, yE - 0.2, zE],
        [xw + 0.03, yE - 0.2, zE],
        [xw + 0.03, yR - 0.2, mz],
        [xw, yR - 0.2, mz],
        [xw, yE + 0.03, zE],
        [xw + 0.03, yE + 0.03, zE],
        [xw + 0.03, yR + 0.03, mz],
        [xw, yR + 0.03, mz]
      ], { onder: null });
    }
    zinkGoot(zE + kant * 0.08, yE - 0.12);
  }
  const onderDak = (z) => yR - (yR - yE) * Math.abs(z - mz) / (l / 2 + T + OV) - dik - 0.01;
  for (const [a, c] of [[w, w + T], [-T, 0]]) {
    const zv = l + T, za = -T;
    const top = onderDak(zv);
    if (top > y) {
      b.blok("baksteen", a, c, y, top, za, zv, { boven: null });
    }
    const basis = Math.max(y, top);
    b.tri("baksteen", [c, basis, za], [c, basis, zv], [c, onderDak(mz), mz], [c + 10, 0, mz]);
    b.tri("baksteen", [a, basis, za], [a, basis, zv], [a, onderDak(mz), mz], [a - 10, 0, mz]);
    b.quad("baksteen", [a, basis, zv], [c, basis, zv], [c, onderDak(mz), mz], [a, onderDak(mz), mz], [a, basis + 10, zv + 10]);
    b.quad("baksteen", [a, basis, za], [c, basis, za], [c, onderDak(mz), mz], [a, onderDak(mz), mz], [a, basis + 10, za - 10]);
  }
  b.cilinder("nok", [x0, yR + 0.02, mz], [x1, yR + 0.02, mz], 0.11, 14);
  const sx = w * 0.68;
  b.blok("baksteen", sx, sx + 0.6, y + nok * 0.5, y + nok + 0.75, mz - 1.3, mz - 0.7, { boven: null });
  b.blok("arduin", sx - 0.06, sx + 0.66, y + nok + 0.75, y + nok + 0.85, mz - 1.36, mz - 0.64);
  b.blok("zinkdak", sx + 0.18, sx + 0.42, y + nok + 0.85, y + nok + 1, mz - 1.12, mz - 0.88);
  const helling = Math.atan2(yR - yE, l + T + OV - mz);
  const opDak = (x, s, h) => {
    const zE = l + T + OV;
    return [x, yE + s * Math.sin(helling) + h * Math.cos(helling), zE - s * Math.cos(helling) + h * Math.sin(helling)];
  };
  const lengte = Math.hypot(yR - yE, l + T + OV - mz);
  if (lengte > 3.2) {
    for (const xc of [w * 0.25, w * 0.75]) {
      const s0 = lengte * 0.38, s1 = s0 + 1.1;
      const kader2 = [
        opDak(xc - 0.4, s0, 0),
        opDak(xc + 0.4, s0, 0),
        opDak(xc + 0.4, s1, 0),
        opDak(xc - 0.4, s1, 0),
        opDak(xc - 0.4, s0, 0.08),
        opDak(xc + 0.4, s0, 0.08),
        opDak(xc + 0.4, s1, 0.08),
        opDak(xc - 0.4, s1, 0.08)
      ];
      b.hexa("velux", kader2, { onder: null });
      const glas = [
        opDak(xc - 0.33, s0 + 0.07, 0.08),
        opDak(xc + 0.33, s0 + 0.07, 0.08),
        opDak(xc + 0.33, s1 - 0.07, 0.08),
        opDak(xc - 0.33, s1 - 0.07, 0.08),
        opDak(xc - 0.33, s0 + 0.07, 0.09),
        opDak(xc + 0.33, s0 + 0.07, 0.09),
        opDak(xc + 0.33, s1 - 0.07, 0.09),
        opDak(xc - 0.33, s1 - 0.07, 0.09)
      ];
      b.hexa("glas", glas, { onder: null });
    }
  }
  afvoer(w + T - 0.12, l + T + 0.06, yE, l + T + OV + 0.08);
  if (buren < 1) afvoer(-T + 0.12, l + T + 0.06, yE, l + T + OV + 0.08);
}
const ZONDER_SCHADUW = /* @__PURE__ */ new Set(["glas", "trede", "trapzij", "leuning"]);
function Meshes({ geos, mats, schaduw = true }) {
  return /* @__PURE__ */ jsx(Fragment, { children: [...geos].map(([k, g]) => {
    const m = mats.get(k);
    if (!m) return null;
    return /* @__PURE__ */ jsx("mesh", { geometry: g, material: m, castShadow: schaduw && !ZONDER_SCHADUW.has(k), receiveShadow: true }, k);
  }) });
}
const URLS = TEGEL_NAMEN.map((n) => TEGELS[n].url);
const LABEL_PLEKKEN = [[0.5, 0.5], [0.5, 0.26], [0.28, 0.3], [0.72, 0.3], [0.5, 0.76], [0.28, 0.72], [0.72, 0.72]];
const RECHTS = new Vector3(1, 0, -1).normalize();
const OP = new Vector3(-1, 2, -1).normalize();
const KIJK = new Vector3(1, 1, 1).normalize();
const MAX_BRON = 16;
const maakNat = () => ({
  bron: { value: Array.from({ length: MAX_BRON }, () => new Vector4()) },
  n: { value: 0 },
  r: { value: 0 },
  muur: { value: 0 },
  vloer: { value: 0 }
});
const NAT_GLSL = (
  /* glsl */
  `
uniform vec4 uNatBron[${MAX_BRON}];
uniform int uNatN;
uniform float uNatR;
uniform float uNatAmt;
uniform vec3 uNatTint;
varying vec3 vNatPos;
float natHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float natNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(natHash(i), natHash(i + vec2(1.0, 0.0)), f.x), mix(natHash(i + vec2(0.0, 1.0)), natHash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float natWet() {
  if (uNatAmt <= 0.0) return 0.0;
  float d = 1000.0;
  float hoog = 0.0;
  for (int i = 0; i < ${MAX_BRON}; i++) {
    if (i >= uNatN) break;
    vec4 b = uNatBron[i];
    // w = how far this device has switched on: a patch grows in, it does not pop.
    if (b.w < 0.01) continue;
    float dy = vNatPos.y - b.y;
    if (dy < -0.5 || dy > 3.2) continue;
    float di = length(vNatPos.xz - b.xz) + (1.0 - b.w) * 2.5;
    if (di < d) { d = di; hoog = clamp(dy / 2.6, 0.0, 1.0); }
  }
  // Ragged edge, and the foot of a wall stays wet longest.
  float n = natNoise(vNatPos.xz * 1.1 + vNatPos.y * 0.8) * 0.9 + natNoise(vNatPos.xz * 3.4 + vNatPos.y * 2.0) * 0.35;
  d += n - 0.6 + (1.0 - hoog) * 0.5;
  return (1.0 - smoothstep(-0.3, 0.3, uNatR - d)) * uNatAmt;
}
`
);
function natPatch(m, u, soort) {
  const tint = soort === "muur" ? new Vector3(0.5, 0.53, 0.6) : new Vector3(0.46, 0.48, 0.54);
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uNatBron = u.bron;
    sh.uniforms.uNatN = u.n;
    sh.uniforms.uNatR = u.r;
    sh.uniforms.uNatAmt = u[soort];
    sh.uniforms.uNatTint = { value: tint };
    sh.vertexShader = "varying vec3 vNatPos;\n" + sh.vertexShader.replace(
      "#include <project_vertex>",
      "#include <project_vertex>\n  vNatPos = (modelMatrix * vec4(transformed, 1.0)).xyz;"
    );
    sh.fragmentShader = NAT_GLSL + sh.fragmentShader.replace("#include <map_fragment>", "#include <map_fragment>\n  float natW = natWet();\n  diffuseColor.rgb *= mix(vec3(1.0), uNatTint, natW);").replace("#include <roughnessmap_fragment>", "#include <roughnessmap_fragment>\n  roughnessFactor = mix(roughnessFactor, 0.32, natW);");
  };
  m.customProgramCacheKey = () => `nat-${soort}`;
  m.needsUpdate = true;
}
function natPatchSet(set, u) {
  natPatch(set.get("pleister"), u, "muur");
  natPatch(set.get("vloer"), u, "vloer");
}
function kader(w, l, y0, y1, pad) {
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  const v = new Vector3();
  for (const x of [-T, w + T]) for (const y of [y0, y1]) for (const z of [-T, l + T]) {
    v.set(x, y, z);
    const px = v.dot(RECHTS), py = v.dot(OP);
    minX = Math.min(minX, px);
    maxX = Math.max(maxX, px);
    minY = Math.min(minY, py);
    maxY = Math.max(maxY, py);
  }
  return { cx: (minX + maxX) / 2, cy: (minY + maxY) / 2, ex: (maxX - minX) / 2 + pad, ey: (maxY - minY) / 2 + pad };
}
function Scene(props) {
  const { woning, verdiepingen, dak, kamers, openingen = [], trappen = [], open, actief, plaatsingen = [], werkend = false, filmPlan = GEEN_PLAN, filmRonde = 0, anim, labels, reduced } = props;
  const materiaal = props.materiaal ?? STANDAARD_MATERIAAL;
  const { w, l, buren } = WONING[woning];
  const lagen = Math.max(1, verdiepingen);
  const act = Math.min(actief, lagen - 1);
  const yfAct = act * FH + SLAB;
  const daktop = lagen * FH;
  const nok = nokHoogte(dak, l);
  const { gl, scene, camera, size } = useThree();
  const tex = useLoader(TextureLoader, URLS);
  const texturen = useMemo(() => Object.fromEntries(TEGEL_NAMEN.map((n, i) => [n, tex[i]])), [tex]);
  const film = useRef({ ...filmPlan, start: -1, vast: reduced });
  const snij = useMemo(() => ({ onder: new Plane(new Vector3(0, -1, 0), 0), boven: new Plane(new Vector3(0, 1, 0), 0) }), []);
  useLayoutEffect(() => {
    snij.onder.constant = yfAct + HC;
    snij.boven.constant = -(yfAct + HC);
  }, [snij, yfAct]);
  const nat = useMemo(maakNat, []);
  const sets = useMemo(() => {
    const vast = maakMaterialen(texturen, STANDAARD_MATERIAAL);
    const uit = {
      vast,
      vaag: afgeleid(vast, (m) => {
        m.transparent = true;
      }),
      onder: afgeleid(vast, (m) => {
        m.clippingPlanes = [snij.onder];
        m.clipShadows = true;
      }),
      boven: afgeleid(vast, (m) => {
        m.clippingPlanes = [snij.boven];
        m.clipShadows = true;
        m.transparent = true;
      })
    };
    for (const set of Object.values(uit)) natPatchSet(set, nat);
    return uit;
  }, [texturen, snij, nat]);
  useEffect(() => () => {
    for (const s of Object.values(sets)) for (const m of s.values()) m.dispose();
  }, [sets]);
  const muurTegel = materiaal.muurTegel ?? "pleister";
  const vloerTegel = materiaal.vloerTegel ?? (materiaal.parket ? "parket" : "chape");
  const glasIn = materiaal.glas ?? true;
  const inrichtingIn = materiaal.inrichting ?? true;
  useEffect(() => {
    const kopie = (naam) => {
      const t = texturen[naam].clone();
      const [pw, ph] = TEGELS[naam].periode;
      t.wrapS = t.wrapT = RepeatWrapping;
      t.repeat.set(1 / pw, 1 / ph);
      t.colorSpace = SRGBColorSpace;
      t.anisotropy = ANISO;
      t.needsUpdate = true;
      return t;
    };
    const muurTex = kopie(muurTegel), vloerTex = kopie(vloerTegel);
    const baksteen = muurTegel === "baksteen";
    for (const s of Object.values(sets)) {
      const m = s.get("pleister");
      m.color.set(materiaal.muur);
      m.map = muurTex;
      m.bumpMap = baksteen ? muurTex : null;
      m.bumpScale = 1.2;
      m.roughness = baksteen ? 0.92 : muurTegel === "verf" ? 0.7 : 0.95;
      m.needsUpdate = true;
      const v2 = s.get("vloer");
      v2.color.set(materiaal.vloer);
      v2.map = vloerTex;
      v2.bumpMap = vloerTegel === "tegelvloer" ? vloerTex : null;
      v2.roughness = vloerTegel === "tegelvloer" ? 0.35 : vloerTegel === "parket" ? 0.55 : 0.9;
      v2.needsUpdate = true;
      s.get("glas").visible = glasIn;
      s.get("kader").visible = glasIn;
      s.get("deurblad").visible = inrichtingIn;
    }
    return () => {
      muurTex.dispose();
      vloerTex.dispose();
    };
  }, [sets, texturen, materiaal.muur, materiaal.vloer, muurTegel, vloerTegel, glasIn, inrichtingIn]);
  useEffect(() => {
    const pm = new PMREMGenerator(gl);
    const env = pm.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = env;
    scene.environmentIntensity = 0.45;
    return () => {
      env.dispose();
      pm.dispose();
      scene.environment = null;
    };
  }, [gl, scene]);
  const geo = useMemo(() => {
    const B = bouw({ woning, lagen, act, dak, kamers, openingen, trappen });
    return {
      vast: B.vast.bouw(),
      boven: B.boven.bouw(),
      dak: B.dak.bouw(),
      gevel: B.gevel.bouw(),
      binnen: B.binnen.bouw(),
      bladen: B.bladen.bouw()
    };
  }, [woning, lagen, act, dak, kamers, openingen, trappen]);
  useEffect(() => () => {
    for (const m of Object.values(geo)) for (const g of m.values()) g.dispose();
  }, [geo]);
  const inrichting = useMemo(() => {
    const B = new Bouwer();
    const laag = kamers.filter((k) => k.verdieping === act);
    if (laag.length) richIn(B, laag, openingen, act * FH + SLAB, { w, l });
    return B.bouw();
  }, [kamers, openingen, act, w, l]);
  useEffect(() => () => {
    for (const g of inrichting.values()) g.dispose();
  }, [inrichting]);
  const spook = useMemo(() => {
    const blokken = [];
    const y1 = Math.max(2, lagen) * FH + 0.4;
    if (buren >= 1) blokken.push([-6, -T, 0, y1, 0, l]);
    if (buren === 2) blokken.push([w + T, w + T + 6, 0, y1, 0, l]);
    if (woning === "appartement") blokken.push([-T, w + T, -2 * FH, 0, -T, l + T]);
    const vlak = new MeshBasicMaterial({ color: "#5a3a2a", transparent: true, opacity: 0.035, depthWrite: false });
    const lijn = new LineDashedMaterial({ color: "#8a7864", dashSize: 0.25, gapSize: 0.18, transparent: true, opacity: 0.6 });
    const delen = blokken.map(([x0, x1, y0, yy1, z0, z1]) => {
      const box = new BoxGeometry(x1 - x0, yy1 - y0, z1 - z0);
      box.translate((x0 + x1) / 2, (y0 + yy1) / 2, (z0 + z1) / 2);
      return { box, rand: new EdgesGeometry(box) };
    });
    return { delen, vlak, lijn };
  }, [buren, l, w, lagen, woning]);
  useEffect(() => () => {
    spook.vlak.dispose();
    spook.lijn.dispose();
    for (const d of spook.delen) {
      d.box.dispose();
      d.rand.dispose();
    }
  }, [spook]);
  const zon = useMemo(() => {
    const d = new DirectionalLight("#fff3e2", 2.6);
    d.castShadow = true;
    d.shadow.mapSize.set(GSM ? 1024 : 2048, GSM ? 1024 : 2048);
    d.shadow.bias = -4e-4;
    d.shadow.normalBias = 0.02;
    return d;
  }, []);
  useLayoutEffect(() => {
    const r = Math.max(w, l) + 9;
    const c = zon.shadow.camera;
    c.left = -r;
    c.right = r;
    c.top = r;
    c.bottom = -r;
    c.near = 1;
    c.far = 80;
    c.updateProjectionMatrix();
    zon.position.set(w / 2 + 11, 24, l / 2 + 6);
    zon.target.position.set(w / 2, 0, l / 2);
    zon.target.updateMatrixWorld();
  }, [zon, w, l]);
  useEffect(() => {
    stuur(anim.current.o, open ? 1 : 0, reduced);
    stuur(anim.current.cam, open ? 1 : 0, reduced);
    stuur(anim.current.act, act, reduced);
  }, [anim, open, act, reduced]);
  const bovenRef = useRef(null);
  const dakRef = useRef(null);
  const binnenRef = useRef(null);
  const bladenRef = useRef(null);
  const actKamers = useMemo(() => kamers.filter((k) => k.verdieping === act), [kamers, act]);
  const labelPos = useMemo(() => actKamers.map((k) => {
    const hier = plaatsingen.filter((p) => p.kamer === k.id);
    const vrij = ([fx, fz]) => hier.reduce((m, p) => Math.min(m, Math.hypot(k.w * fx - p.x, k.l * fz - p.z)), Infinity);
    let bx = LABEL_PLEKKEN[0][0], bz = LABEL_PLEKKEN[0][1];
    let best = vrij(LABEL_PLEKKEN[0]);
    for (const c of LABEL_PLEKKEN) {
      if (best >= 1.1) break;
      const d = vrij(c);
      if (d > best + 0.05) {
        best = d;
        [bx, bz] = c;
      }
    }
    return new Vector3(k.x + k.w * bx, yfAct + HC + 0.15, k.z + k.l * bz);
  }), [actKamers, yfAct, plaatsingen]);
  const dicht = useMemo(() => kader(w, l, 0, daktop + nok + 0.3, 1.3), [w, l, daktop, nok]);
  const v = useMemo(() => new Vector3(), []);
  const groei = useRef({ bouw: tween(1), wand: tween(1), vanLagen: lagen, nieuwDak: false, vanKader: dicht, kaderNu: dicht });
  const vorige = useRef({ lagen, dak, woning, binnen: geo.binnen });
  useLayoutEffect(() => {
    const p = vorige.current, G = groei.current;
    vorige.current = { lagen, dak, woning, binnen: geo.binnen };
    const anderType = p.woning !== woning;
    if (p.lagen !== lagen || p.dak !== dak || anderType) {
      G.vanLagen = p.lagen;
      G.nieuwDak = p.dak !== dak;
      G.vanKader = G.kaderNu;
      herstart(G.bouw, reduced || anderType);
    }
    if (p.binnen !== geo.binnen) herstart(G.wand, reduced || anderType);
  }, [lagen, dak, woning, act, geo.binnen, reduced]);
  const inrichtingRef = useRef(null);
  const vaagMats = useMemo(() => [...sets.vaag.values(), ...sets.boven.values()], [sets]);
  const transparant = useRef(true);
  const frames = useRef(0);
  const invalidate = useThree((st) => st.invalidate);
  useEffect(() => {
    invalidate();
  });
  useFrame(({ invalidate: volgende }) => {
    if (frames.current < 3 && ++frames.current === 2) props.onKlaar?.();
    const A = anim.current;
    const o = stap(A.o), camT = stap(A.cam), camA = stap(A.act);
    const zicht = 1 - o;
    const G = groei.current;
    const b = stap(G.bouw, DUUR * 1.2), wg = stap(G.wand, DUUR * 0.8);
    const d0 = G.vanKader;
    const dk = b < 1 ? { cx: d0.cx + (dicht.cx - d0.cx) * b, cy: d0.cy + (dicht.cy - d0.cy) * b, ex: d0.ex + (dicht.ex - d0.ex) * b, ey: d0.ey + (dicht.ey - d0.ey) * b } : dicht;
    G.kaderNu = dk;
    const opn = kader(w, l, 0, camA * FH + SLAB + H + 0.4, 1.3);
    const k = { cx: dk.cx + (opn.cx - dk.cx) * camT, cy: dk.cy + (opn.cy - dk.cy) * camT, ex: dk.ex + (opn.ex - dk.ex) * camT, ey: dk.ey + (opn.ey - dk.ey) * camT };
    const droogt2 = werkend && !reduced;
    const droog = droogt2 ? droogStand(film.current) : 1;
    const bronnen = natLaag;
    nat.n.value = Math.min(MAX_BRON, bronnen.length);
    for (let i = 0; i < nat.n.value; i++) {
      const b2 = bronnen[i];
      nat.bron.value[i].set(b2.x, b2.y, b2.z, aanVoortgang(film.current, b2.a));
    }
    nat.r.value = Math.pow(droog, 0.75) * 6.5;
    const sterkte = (0.7 + 0.3 * Math.min(1, materiaal.vocht)) * (1 - Math.max(0, (droog - 0.93) / 0.07));
    nat.muur.value = droogt2 && materiaal.muurNat ? sterkte : 0;
    nat.vloer.value = droogt2 && materiaal.vloerNat ? sterkte : 0;
    const cam = camera;
    const doel = v.copy(RECHTS).multiplyScalar(k.cx).addScaledVector(OP, k.cy);
    cam.position.copy(doel).addScaledVector(KIJK, 60);
    cam.up.set(0, 1, 0);
    cam.lookAt(doel);
    cam.zoom = Math.min(size.width / (2 * k.ex), size.height / (2 * k.ey));
    cam.updateProjectionMatrix();
    const lift = (H + 3) * o;
    const nNu = lagen - act - 1, nVan = Math.max(0, G.vanLagen - act - 1);
    const s0 = nNu > 0 ? Math.max(0.02, nVan / nNu) : 1;
    const s = s0 + (1 - s0) * b;
    const y0 = (act + 1) * FH;
    if (bovenRef.current) {
      bovenRef.current.scale.y = s;
      bovenRef.current.position.y = lift + y0 * (1 - s);
      bovenRef.current.visible = zicht > 0.01;
    }
    const rit = (G.vanLagen - lagen) * FH * (1 - b);
    const sprong = G.nieuwDak ? 6 * Math.pow(1 - b, 2) : Math.sin(Math.PI * b) * 1.4 * (G.vanLagen !== lagen ? 1 : 0);
    if (dakRef.current) {
      dakRef.current.position.y = lift * 1.3 + rit + sprong;
      dakRef.current.visible = zicht > 0.01;
    }
    const nuTransparant = zicht < 0.999;
    for (const m of vaagMats) {
      m.opacity = zicht;
      if (nuTransparant !== transparant.current) {
        m.transparent = nuTransparant;
        m.needsUpdate = true;
      }
    }
    transparant.current = nuTransparant;
    spook.vlak.opacity = 0.035 * zicht;
    spook.lijn.opacity = 0.6 * zicht;
    const wandH = (HC + (H - HC) * zicht) * Math.max(1e-3, wg);
    if (binnenRef.current) binnenRef.current.scale.y = wandH / H;
    if (bladenRef.current) bladenRef.current.scale.y = Math.min(2.05, wandH) / 2.05;
    if (inrichtingRef.current) {
      const si = Math.max(1e-3, wg);
      inrichtingRef.current.scale.y = si;
      inrichtingRef.current.position.y = yfAct * (1 - si);
    }
    const houder = labels.current[0]?.parentElement;
    if (houder) {
      const zl = cam.zoom.toFixed(1);
      if (houder.dataset.zl !== zl) {
        houder.dataset.zl = zl;
        houder.style.setProperty("--zl", zl);
      }
    }
    labelPos.forEach((p, i) => {
      const el = labels.current[i];
      if (!el) return;
      v.copy(p).project(cam);
      const x = (v.x + 1) / 2 * size.width, y = (1 - v.y) / 2 * size.height;
      el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) translate(-50%, -50%)`;
      el.style.opacity = String(o * wg);
    });
    const beweegt = [A.o, A.cam, A.act, G.bouw, G.wand].some((tw) => tw.start < 0 || tw.nu !== tw.naar);
    if (beweegt || frames.current < 3) volgende();
  });
  const droogt = werkend && !reduced;
  const laagPlaatsingen = useMemo(() => {
    const plek = (p) => {
      const k = actKamers.find((kk) => kk.id === p.kamer);
      return k.z + p.z + (k.x + p.x) * 0.3;
    };
    const volgorde = plaatsingen.filter((p) => actKamers.some((k) => k.id === p.kamer)).sort((a, b) => plek(a) - plek(b));
    return volgorde.map((p, i) => ({ ...p, a: aankomst(i, volgorde.length) }));
  }, [plaatsingen, actKamers]);
  const natLaag = useMemo(() => laagPlaatsingen.map((p) => {
    const k = actKamers.find((kk) => kk.id === p.kamer);
    return { x: k.x + p.x, y: yfAct, z: k.z + p.z, a: p.a };
  }), [laagPlaatsingen, actKamers, yfAct]);
  useLayoutEffect(() => {
    film.current = { ...filmPlan, start: -1, vast: reduced };
  }, [act, werkend, laagPlaatsingen, reduced, filmRonde, filmPlan.modus, filmPlan.van, filmPlan.tot, filmPlan.duur]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("hemisphereLight", { args: ["#fffaf2", "#c9bba8", 1.1] }),
    /* @__PURE__ */ jsx("primitive", { object: zon }),
    /* @__PURE__ */ jsx("primitive", { object: zon.target }),
    /* @__PURE__ */ jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [w / 2, -2e-3, l / 2], receiveShadow: true, children: [
      /* @__PURE__ */ jsx("planeGeometry", { args: [80, 80] }),
      /* @__PURE__ */ jsx("shadowMaterial", { opacity: 0.16, color: "#5a3a2a" })
    ] }),
    spook.delen.map((d, i) => /* @__PURE__ */ jsxs("group", { children: [
      /* @__PURE__ */ jsx("mesh", { geometry: d.box, material: spook.vlak }),
      /* @__PURE__ */ jsx("lineSegments", { geometry: d.rand, material: spook.lijn, onUpdate: (ls) => ls.computeLineDistances() })
    ] }, i)),
    /* @__PURE__ */ jsx(Meshes, { geos: geo.vast, mats: sets.vast }),
    /* @__PURE__ */ jsx(Meshes, { geos: geo.gevel, mats: sets.onder, schaduw: false }),
    /* @__PURE__ */ jsx(Meshes, { geos: geo.gevel, mats: sets.boven, schaduw: false }),
    /* @__PURE__ */ jsx("group", { ref: binnenRef, position: [0, yfAct, 0], children: /* @__PURE__ */ jsx(Meshes, { geos: geo.binnen, mats: sets.vast, schaduw: false }) }),
    /* @__PURE__ */ jsx("group", { ref: bladenRef, position: [0, yfAct, 0], children: /* @__PURE__ */ jsx(Meshes, { geos: geo.bladen, mats: sets.vast, schaduw: false }) }),
    /* @__PURE__ */ jsx("group", { ref: bovenRef, children: /* @__PURE__ */ jsx(Meshes, { geos: geo.boven, mats: sets.vaag }) }),
    /* @__PURE__ */ jsx("group", { ref: dakRef, children: /* @__PURE__ */ jsx(Meshes, { geos: geo.dak, mats: sets.vaag }) }),
    actKamers.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("group", { ref: inrichtingRef, visible: inrichtingIn, children: /* @__PURE__ */ jsx(Meshes, { geos: inrichting, mats: sets.vast }) }),
      /* @__PURE__ */ jsxs(Suspense, { fallback: /* @__PURE__ */ jsx(FilmWacht, {}), children: [
        /* @__PURE__ */ jsx(FilmStart, { film }),
        laagPlaatsingen.map((p, i) => {
          const k = actKamers.find((kk) => kk.id === p.kamer);
          return /* @__PURE__ */ jsx(ToestelVangnet, { children: /* @__PURE__ */ jsx(Toestel3D, { k: p.k, x: k.x + p.x, y: yfAct, z: k.z + p.z, aankomst: p.a, werkend, film }) }, `${act}-${p.k}-${i}-${filmRonde}`);
        })
      ] }),
      droogt && /* @__PURE__ */ jsx(Luchtstroom3D, { kamers: actKamers, plaatsingen: laagPlaatsingen, yf: yfAct, film }),
      droogt && /* @__PURE__ */ jsx(Druppels3D, { kamers: actKamers, plaatsingen: laagPlaatsingen, yf: yfAct, vocht: materiaal.vocht, film })
    ] })
  ] });
}
const STANDAARD_MATERIAAL = {
  muur: "#ddd6cb",
  vloer: "#c9c2b6",
  vocht: 0,
  muurNat: false,
  vloerNat: false,
  parket: false
};
function IsoHouse3D(props) {
  const { woning, verdiepingen, kamers, actief, className, onKlaar, onFout } = props;
  const reduced = useReducedMotion();
  const taal = useTaal();
  const anim = useRef({ o: tween(props.open ? 1 : 0), cam: tween(props.open ? 1 : 0), act: tween(actief) });
  const labels = useRef([]);
  const lagen = Math.max(1, verdiepingen);
  const act = Math.min(actief, lagen - 1);
  const actKamers = kamers.filter((k) => k.verdieping === act);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `ds-iso ds-iso3d${className ? ` ${className}` : ""}`,
      role: "img",
      "aria-label": taal === "fr" ? `Dessin 3D : ${woningTekst(woning, taal).label.toLowerCase()}, ${lagen} niveau${lagen === 1 ? "" : "x"}` : taal === "en" ? `3D drawing: ${woningTekst(woning, taal).label.toLowerCase()}, ${lagen} storey${lagen === 1 ? "" : "s"}` : `3D-tekening van een ${WONING[woning].label.toLowerCase()} met ${lagen} bouwla${lagen === 1 ? "ag" : "gen"}`,
      children: [
        /* @__PURE__ */ jsx(
          Canvas,
          {
            frameloop: props.werkend ? "always" : "demand",
            orthographic: true,
            shadows: { type: PCFShadowMap },
            dpr: [1, GSM ? 1.5 : 2],
            camera: { position: [60, 60, 60], near: 0.1, far: 300, zoom: 30 },
            gl: { antialias: true, alpha: true, toneMapping: NeutralToneMapping, preserveDrawingBuffer: false },
            onCreated: ({ gl }) => {
              gl.localClippingEnabled = true;
              gl.setClearColor(0, 0);
              gl.domElement.addEventListener("webglcontextlost", () => onFout?.(), { once: true });
            },
            "aria-hidden": "true",
            children: /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(Scene, { ...props, anim, labels, reduced, onKlaar }) })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "ds-labels3d", "aria-hidden": "true", children: actKamers.map((k, i) => /* @__PURE__ */ jsx(
          "div",
          {
            ref: (el) => {
              labels.current[i] = el;
            },
            className: `ds-kamerlabel3d${k.soort === "circulatie" ? " ds-kamerlabel3d--gang" : ""}`,
            style: { opacity: 0 },
            children: kamerNaam(k.naam, taal).toUpperCase()
          },
          k.id
        )) })
      ]
    }
  );
}
export {
  IsoHouse3D as default
};

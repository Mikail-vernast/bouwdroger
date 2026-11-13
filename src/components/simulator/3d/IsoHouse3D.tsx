import { Suspense, useEffect, useLayoutEffect, useMemo, useRef, useState, type MutableRefObject } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  BoxGeometry,
  type BufferGeometry,
  DirectionalLight,
  EdgesGeometry,
  type Group,
  LineDashedMaterial,
  MeshBasicMaterial,
  MeshStandardMaterial,
  NeutralToneMapping,
  type OrthographicCamera,
  PCFShadowMap,
  Plane,
  PMREMGenerator,
  RepeatWrapping,
  SRGBColorSpace,
  type Texture,
  TextureLoader,
  Vector3,
} from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { WONING, type Dak, type Kamer, type Opening, type Trap, type Woning } from "@/lib/droogSimulator";
import type { IsoHouseProps } from "../IsoHouse";
import type { Materiaal } from "../materiaal";
import { Bouwer, type Gat, muurMinGaten, type UvFn, type V3 } from "./geo";
import { richIn } from "./inrichting";
import { Druppels3D, FilmStart, Luchtstroom3D, Toestel3D, ToestelVangnet, type Geplaatst } from "./onderdelen";
import { aankomst, type Film } from "../film";
import { FH, H, HC, SLAB, T, TI, nokHoogte } from "../maten";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { TEXTUUR } from "./bestanden";

/*
  De droogsimulator-woning in echte 3D.

  Zelfde invoer, assen en maten als de SVG-tekening (IsoHouse.tsx): het plan uit
  droogSimulator.ts (kamers, openingen, trappen) wordt rechtstreeks in blokken
  omgezet, dus kamers die erbij komen of wegvallen veranderen de woning vanzelf.
  De materialen zijn naadloze tegels uit Blender (scripts/simulator-3d/texturen.py);
  de vormregels — neggekant, arduin dorpels, goten, boeiboorden — komen uit het
  Blender-huis (Vernast, scripts/simulator-textures/huis.py).

  Opengewerkt gaan de verdiepingen erboven en het dak er als een deksel af en
  wordt de actieve bouwlaag op 1,10 m doorgesneden, zoals een bouwplan. Dat
  snijden gebeurt met clipping-vlakken: de gevel blijft één stuk geometrie, met
  zijn ramen, en wordt in een vaste onderhelft en een vervagende bovenhelft
  getekend.
*/

const REV = 0.09; // hoe diep het schrijnwerk in de muur staat
const OV = 0.35; // dakoversteek
const DUUR = 900; // ms, zoals de SVG

/* ─────────────────────────── materialen ─────────────────────────── */

const TEGELS = {
  baksteen: { url: TEXTUUR.baksteen, periode: [16 * 0.202, 32 * 0.062] },
  arduin: { url: TEXTUUR.arduin, periode: [1, 1] },
  pannen: { url: TEXTUUR.pannen, periode: [8 * 0.27, 6 * 0.36] },
  pleister: { url: TEXTUUR.pleister, periode: [1.5, 1.5] },
  chape: { url: TEXTUUR.chape, periode: [1, 1] },
  parket: { url: TEXTUUR.parket, periode: [8 * 0.18, 2.4] },
  grind: { url: TEXTUUR.grind, periode: [0.5, 0.5] },
} as const;
type TegelNaam = keyof typeof TEGELS;
const TEGEL_NAMEN = Object.keys(TEGELS) as TegelNaam[];

type MatSet = Map<string, MeshStandardMaterial>;

/*
  Gsm of tablet: minder pixels en een kleinere schaduwmap. Een gsm met een
  3×-scherm tekent op dpr 2 vier keer zoveel pixels als op dpr 1; op 1,5 is dat
  ruim de helft minder, en op een klein scherm zie je het verschil niet. De
  schaduw van 1024² is op die maat even scherp als 2048² op een laptop.
*/
const GSM = typeof window !== "undefined" && window.matchMedia("(max-width: 899px), (pointer: coarse)").matches;
const ANISO = GSM ? 4 : 8;

function maakMaterialen(tex: Record<TegelNaam, Texture>, m: Materiaal): MatSet {
  const t = (naam: TegelNaam) => {
    const c = tex[naam].clone();
    const [pw, ph] = TEGELS[naam].periode;
    c.wrapS = c.wrapT = RepeatWrapping;
    c.repeat.set(1 / pw, 1 / ph);
    c.colorSpace = SRGBColorSpace;
    c.anisotropy = ANISO;
    c.needsUpdate = true;
    return c;
  };
  const s = (color: string, o: Partial<MeshStandardMaterial> = {}) =>
    Object.assign(new MeshStandardMaterial({ color, roughness: 0.7 }), o);
  const baksteen = t("baksteen");
  const pannen = t("pannen");
  const set: MatSet = new Map([
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
    ["spiegel", s("#cfd8dc", { roughness: 0.02, metalness: 0.9 })],
  ]);
  return set;
}

/** Een afgeleide set: zelfde texturen, eigen doorzichtigheid of snijvlak. */
function afgeleid(basis: MatSet, aanpas: (m: MeshStandardMaterial) => void): MatSet {
  const uit: MatSet = new Map();
  for (const [k, m] of basis) {
    const c = m.clone();
    aanpas(c);
    uit.set(k, c);
  }
  return uit;
}

/* ─────────────────────────── tween ─────────────────────────── */

interface Tween { van: number; naar: number; start: number; nu: number }
const tween = (v: number): Tween => ({ van: v, naar: v, start: 0, nu: v });
function stuur(tw: Tween, doel: number, direct: boolean) {
  if (direct) {
    tw.van = tw.naar = tw.nu = doel;
    return;
  }
  if (doel === tw.naar) return;
  tw.van = tw.nu;
  tw.naar = doel;
  tw.start = performance.now();
}
/**
 * Opnieuw van 0 naar 1 lopen (voor eenmalige bouw-animaties). De klok start pas
 * bij de eerste getekende frame: het opbouwen van de nieuwe geometrie mag geen
 * stuk van de animatie opeten.
 */
function herstart(tw: Tween, direct: boolean) {
  tw.van = direct ? 1 : 0;
  tw.nu = tw.van;
  tw.naar = 1;
  tw.start = -1;
}
function stap(tw: Tween, duur = DUUR) {
  if (tw.start < 0) tw.start = performance.now();
  const k = Math.min(1, (performance.now() - tw.start) / duur);
  const e = 1 - Math.pow(1 - k, 3);
  tw.nu = tw.van + (tw.naar - tw.van) * e;
  return tw.nu;
}

interface Anim { o: Tween; cam: Tween; act: Tween }

/* ─────────────────────────── de woning als blokken ─────────────────────────── */

type Gevel = "voor" | "zij";

interface Bouwers {
  /** altijd zichtbaar en vast */
  vast: Bouwer;
  /** de bouwlagen boven de actieve: gaan omhoog en vervagen */
  boven: Bouwer;
  /** dak, goten en afvoeren: gaan nog iets hoger en vervagen */
  dak: Bouwer;
  /** voor- en zijgevel van de actieve laag: onder de snede vast, erboven vervagend */
  gevel: Bouwer;
  /** binnenwanden, in eenheden van de volle hoogte (worden geschaald) */
  binnen: Bouwer;
  /** deurbladen, idem */
  bladen: Bouwer;
}

interface Woningplan {
  woning: Woning; lagen: number; act: number; dak: Dak;
  kamers: Kamer[]; openingen: Opening[]; trappen: Trap[];
}

function bouw(p: Woningplan) {
  const { woning, lagen, act, dak, kamers, openingen, trappen } = p;
  const { w, l, buren } = WONING[woning];
  const B: Bouwers = { vast: new Bouwer(), boven: new Bouwer(), dak: new Bouwer(), gevel: new Bouwer(), binnen: new Bouwer(), bladen: new Bouwer() };

  // Een punt op een gevel: `a` langs de gevel, `n` naar buiten vanaf het buitenvlak.
  const punt = (g: Gevel, a: number, n: number, y: number): V3 => (g === "voor" ? [a, y, l + T + n] : [w + T + n, y, a]);
  const gblok = (b: Bouwer, mat: string, g: Gevel, a0: number, a1: number, n0: number, n1: number, y0: number, y1: number, opt: { boven?: string | null } = {}) => {
    const p0 = punt(g, a0, n0, y0), p1 = punt(g, a1, n1, y1);
    b.blok(mat, Math.min(p0[0], p1[0]), Math.max(p0[0], p1[0]), Math.min(p0[1], p1[1]), Math.max(p0[1], p1[1]), Math.min(p0[2], p1[2]), Math.max(p0[2], p1[2]), opt);
  };

  /** Raam in een gevelopening: wit kader in de neggekant, glas, middenstijl en kalf, arduin dorpel. */
  const raam = (b: Bouwer, g: Gevel, a0: number, a1: number, y0: number, y1: number, kalf: number, stijl: boolean) => {
    const fr = 0.065, n1 = -REV, n0 = -REV - 0.06;
    gblok(b, "glas", g, a0, a1, n0 + 0.02, n0 + 0.03, y0, y1);
    gblok(b, "kader", g, a0, a0 + fr, n0, n1, y0, y1);
    gblok(b, "kader", g, a1 - fr, a1, n0, n1, y0, y1);
    gblok(b, "kader", g, a0, a1, n0, n1, y0, y0 + fr);
    gblok(b, "kader", g, a0, a1, n0, n1, y1 - fr, y1);
    if (stijl) gblok(b, "kader", g, (a0 + a1) / 2 - 0.035, (a0 + a1) / 2 + 0.035, n0 - 0.005, n1, y0, y1 - (kalf || 0));
    if (kalf) gblok(b, "kader", g, a0, a1, n0 - 0.005, n1, y1 - kalf - 0.035, y1 - kalf + 0.035);
    // Dorpel: steekt 5 cm uit en loopt 5 cm voorbij de neggekant.
    gblok(b, "arduin", g, a0 - 0.05, a1 + 0.05, -REV, 0.05, y0 - 0.07, y0);
  };

  const voordeur = openingen.find((o) => o.soort === "voordeur" && o.verdieping === 0);

  /** De openingen in een gevel van bouwlaag v (vloer op yf), zoals de SVG ze plaatst. */
  const gevelGaten = (g: Gevel, v: number, yf: number) => {
    const gaten: (Gat & { soort: "raam" | "deur"; kalf: number; stijl: boolean })[] = [];
    if (g === "voor") {
      // Eén kolomraster voor alle bouwlagen, zoals bij een echte gevel: de ramen
      // staan recht boven elkaar en zijn overal even breed. De deurkolom ligt vast
      // (gelijkvloers: de voordeur, erboven een smal raam); de andere kolommen
      // verdelen de rest van de gevel gelijk.
      const deurKolom = voordeur && woning !== "appartement" ? voordeur : null;
      const n = w < 7 ? 2 : w < 9.5 ? 3 : 4;
      let kolommen: number[];
      let stapw: number;
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
        const cz = (l * (i + 1)) / (n + 1);
        gaten.push({ a0: cz - 0.45, a1: cz + 0.45, b0: yf + 0.9, b1: yf + 2.3, soort: "raam", kalf: 0.45, stijl: false });
      }
    }
    return gaten;
  };

  /** Voor- en zijgevel van een bouwlaag, met hun ramen en de voordeur. */
  const gevels = (b: Bouwer, v: number, yf: number) => {
    for (const g of ["voor", "zij"] as Gevel[]) {
      const gaten = gevelGaten(g, v, yf);
      // De voorgevel loopt over de volle breedte incl. hoeken; de zijgevel sluit erop aan.
      const [a0, a1] = g === "voor" ? [-T, w + T] : [-T, l];
      for (const r of muurMinGaten(a0, a1, yf, yf + H, gaten)) gblok(b, "baksteen", g, r.a0, r.a1, -T, 0, r.b0, r.b1);
      for (const gat of gaten) {
        if (gat.soort === "raam") {
          raam(b, g, gat.a0, gat.a1, gat.b0, gat.b1, gat.kalf, gat.stijl);
        } else {
          // Voordeur: donker houten blad met een glasstrook, kader, arduin dorpel en trede.
          const fr = 0.06;
          gblok(b, "kader", g, gat.a0, gat.a0 + fr, -REV - 0.07, -REV, gat.b0, gat.b1);
          gblok(b, "kader", g, gat.a1 - fr, gat.a1, -REV - 0.07, -REV, gat.b0, gat.b1);
          gblok(b, "kader", g, gat.a0, gat.a1, -REV - 0.07, -REV, gat.b1 - fr, gat.b1);
          gblok(b, "deur", g, gat.a0 + fr, gat.a1 - fr, -REV - 0.05, -REV - 0.01, gat.b0, gat.b1 - fr);
          gblok(b, "glas", g, gat.a0 + 0.22, gat.a1 - 0.22, -REV - 0.012, -REV - 0.005, gat.b0 + 1.3, gat.b0 + 2.0);
          gblok(b, "arduin", g, gat.a0 - 0.04, gat.a1 + 0.04, -REV, 0.04, gat.b0 - 0.03, gat.b0);
          gblok(b, "arduin", g, gat.a0 - 0.15, gat.a1 + 0.15, 0, 0.4, gat.b0 - SLAB, gat.b0 - SLAB + 0.16);
        }
      }
    }
    // Achter- en linkergevel: zonder ramen, de kijker ziet ze niet.
    b.blok("baksteen", -T, w, yf, yf + H, -T, 0);
    b.blok("baksteen", -T, 0, yf, yf + H, 0, l);
    // De gevels van de actieve laag hebben ook een snede bovenop nodig; zie `snede`.
  };

  /** De vloerplaat van bouwlaag v: arduin plint op het gelijkvloers, baksteen erboven. */
  const plaat = (b: Bouwer, v: number, yb: number, gat?: Gat) => {
    const mat = v === 0 ? "arduin" : "baksteen";
    const stukken = gat ? muurMinGaten(-T, w + T, -T, l + T, [gat]) : [{ a0: -T, a1: w + T, b0: -T, b1: l + T }];
    for (const r of stukken) b.blok(mat, r.a0, r.a1, yb, yb + SLAB, r.b0, r.b1, { boven: "plaat" });
  };

  const geslotenLaag = (b: Bouwer, v: number) => {
    const yb = v * FH;
    plaat(b, v, yb);
    gevels(b, v, yb + SLAB);
  };

  /* ── de opengewerkte, actieve bouwlaag ── */
  const actieveLaag = (v: number) => {
    const yb = v * FH, yf = yb + SLAB;
    const laagKamers = kamers.filter((k) => k.verdieping === v);
    const laagOpeningen = openingen.filter((o) => o.verdieping === v);
    const laagTrappen = trappen.filter((t) => t.verdieping === v);
    const trapgat = laagTrappen.find((t) => !t.op);
    const gat: Gat | undefined = trapgat ? { a0: trapgat.x, a1: trapgat.x + trapgat.w, b0: trapgat.z, b1: trapgat.z + trapgat.l } : undefined;

    plaat(B.vast, v, yb, gat);
    // Vloeren per kamer, met het trapgat eruit.
    for (const k of laagKamers) {
      for (const r of muurMinGaten(k.x, k.x + k.w, k.z, k.z + k.l, gat ? [gat] : [])) {
        B.vast.quad("vloer", [r.a0, yf + 0.003, r.b0], [r.a1, yf + 0.003, r.b0], [r.a1, yf + 0.003, r.b1], [r.a0, yf + 0.003, r.b1], [0, 100, 0]);
      }
    }
    // Achtergevels op volle hoogte, binnenkant gepleisterd.
    B.vast.blok("baksteen", -T, w, yf, yf + H, -T, 0, { boven: "snede" });
    B.vast.blok("baksteen", -T, 0, yf, yf + H, 0, l, { boven: "snede" });
    B.vast.quad("pleister", [0, yf, 0.002], [w, yf, 0.002], [w, yf + H, 0.002], [0, yf + H, 0.002], [0, 0, 100]);
    B.vast.quad("pleister", [0.002, yf, 0], [0.002, yf, l], [0.002, yf + H, l], [0.002, yf + H, 0], [100, 0, 0]);

    // Voor- en zijgevel: één geheel, getekend in twee helften rond de snede.
    for (const g of ["voor", "zij"] as Gevel[]) {
      const gaten = gevelGaten(g, v, yf);
      const [a0, a1] = g === "voor" ? [-T, w + T] : [-T, l];
      for (const r of muurMinGaten(a0, a1, yf, yf + H, gaten)) gblok(B.gevel, "baksteen", g, r.a0, r.a1, -T, 0, r.b0, r.b1);
      for (const gt of gaten) {
        if (gt.soort === "raam") raam(B.gevel, g, gt.a0, gt.a1, gt.b0, gt.b1, gt.kalf, gt.stijl);
      }
      // De snede bovenop het onderste deel: donker, zoals op een bouwplan. Waar een
      // opening door de snijhoogte loopt, is er geen muur om door te snijden.
      const doorSnede = gaten.filter((gt) => gt.b0 < yf + HC && gt.b1 > yf + HC).map((gt) => ({ a0: gt.a0, a1: gt.a1, b0: 0, b1: 1 }));
      for (const r of muurMinGaten(a0, a1, 0, 1, doorSnede)) gblok(B.vast, "snede", g, r.a0, r.a1, -T, 0, yf + HC - 0.004, yf + HC);
      // Voordeur, trede en dorpel: onder de snede, dus vast.
      for (const gt of gaten.filter((x) => x.soort === "deur")) {
        const fr = 0.06;
        gblok(B.gevel, "kader", g, gt.a0, gt.a0 + fr, -REV - 0.07, -REV, gt.b0, gt.b1);
        gblok(B.gevel, "kader", g, gt.a1 - fr, gt.a1, -REV - 0.07, -REV, gt.b0, gt.b1);
        gblok(B.gevel, "kader", g, gt.a0, gt.a1, -REV - 0.07, -REV, gt.b1 - fr, gt.b1);
        gblok(B.gevel, "deur", g, gt.a0 + fr, gt.a1 - fr, -REV - 0.05, -REV - 0.01, gt.b0, gt.b1 - fr);
        gblok(B.gevel, "glas", g, gt.a0 + 0.22, gt.a1 - 0.22, -REV - 0.012, -REV - 0.005, gt.b0 + 1.3, gt.b0 + 2.0);
        gblok(B.gevel, "arduin", g, gt.a0 - 0.04, gt.a1 + 0.04, -REV, 0.04, gt.b0 - 0.03, gt.b0);
        gblok(B.vast, "arduin", g, gt.a0 - 0.15, gt.a1 + 0.15, 0, 0.4, gt.b0 - SLAB, gt.b0 - SLAB + 0.16);
      }
    }

    // Binnenwanden langs de voor- en rechterrand van elke kamer, met de openingen
    // uit het plan. Gebouwd op volle hoogte (0..H) en daarna geschaald.
    const wand = (as: "x" | "z", vast: number, a0: number, a1: number) => {
      const gaten = laagOpeningen
        .filter((o) => o.as === as && Math.abs(o.vast - vast) < 1e-6 && o.tot > a0 && o.van < a1)
        .map((o) => ({ a0: o.van, a1: o.tot, b0: 0, b1: H }));
      // Langs een trap naar boven blijft de wand open: de trap heeft zijn eigen
      // trapboom en schuine leuning (zie echteTrap), zo kijk je in de trapkoker.
      const laagTrap = laagTrappen.find((t) => as === "x" && Math.abs(vast - (t.z + t.l + 0.05)) < 0.12);
      if (laagTrap) {
        const l0 = Math.max(a0, laagTrap.x), l1 = Math.min(a1, laagTrap.x + laagTrap.w);
        if (l1 > l0) gaten.push({ a0: l0, a1: l1, b0: 0, b1: H });
      }
      for (const r of muurMinGaten(a0, a1, 0, H, gaten)) {
        if (as === "x") B.binnen.blok("pleister", r.a0, r.a1, r.b0, r.b1, vast - TI / 2, vast + TI / 2, { boven: "snede" });
        else B.binnen.blok("pleister", vast - TI / 2, vast + TI / 2, r.b0, r.b1, r.a0, r.a1, { boven: "snede" });
      }
      // Deurblad: open, haaks op de wand, scharnier aan het begin van het gat.
      laagOpeningen
        .filter((o) => o.soort === "deur" && o.as === as && Math.abs(o.vast - vast) < 1e-6 && o.tot > a0 && o.van < a1)
        .forEach((o) => {
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

    // Een echte trap: losse treden met een overstekende neus, donkere stootborden,
    // een trapboom aan de open kant en (naar boven) een meelopende leuning. Hij
    // loopt door tot de volgende vloer: in een opengewerkte laag zie je hem zo
    // omhoog lopen in plaats van als een plank op de snijhoogte te eindigen.
    const treden = 13;
    const echteTrap = (t: Trap, yb: number, leuning: boolean) => {
      const aan = t.w / treden, op = FH / treden;
      const z0 = t.z, z1 = t.z + t.l, bd = 0.05;
      // Een open trap die naar +x klimt: losse treden met een overstekende neus en
      // een dun stootbord, tussen twee trapbomen. Geen massief blok eronder, zo
      // ziet hij er vanuit elke hoek uit als een trap en niet als een wig.
      for (let i = 0; i < treden; i++) {
        const x0 = t.x + aan * i, top = yb + op * (i + 1);
        B.vast.blok("trede", x0 - 0.025, x0 + aan, top - 0.035, top, z0 + bd, z1 - bd);
        B.vast.blok("trapzij", x0, x0 + 0.018, top - op, top - 0.035, z0 + bd, z1 - bd, { boven: null });
      }
      // Trapbomen: schuine planken langs de neuzen, aan beide kanten.
      const neus = (x: number) => yb + ((x - t.x) / t.w) * FH;
      const xa = t.x, xb = t.x + t.w;
      for (const [zb0, zb1] of [[z0, z0 + bd], [z1 - bd, z1]]) {
        B.vast.hexa("trapzij", [
          [xa, neus(xa) - 0.24, zb0], [xb, neus(xb) - 0.24, zb0], [xb, neus(xb) - 0.24, zb1], [xa, neus(xa) - 0.24, zb1],
          [xa, neus(xa) + 0.06, zb0], [xb, neus(xb) + 0.06, zb0], [xb, neus(xb) + 0.06, zb1], [xa, neus(xa) + 0.06, zb1],
        ]);
      }
      if (!leuning) return;
      // Leuning op 90 cm boven de neuzen, met een spijl op elke tweede trede.
      const lh = 0.9, rz0 = z1 - 0.045, rz1 = z1 - 0.005;
      B.vast.hexa("leuning", [
        [xa, neus(xa) + lh, rz0], [xb, neus(xb) + lh, rz0], [xb, neus(xb) + lh, rz1], [xa, neus(xa) + lh, rz1],
        [xa, neus(xa) + lh + 0.05, rz0], [xb, neus(xb) + lh + 0.05, rz0], [xb, neus(xb) + lh + 0.05, rz1], [xa, neus(xa) + lh + 0.05, rz1],
      ]);
      for (let i = 0; i < treden; i += 2) {
        const x = t.x + aan * (i + 0.5);
        B.vast.blok("leuning", x - 0.015, x + 0.015, yb + op * (i + 1), neus(x) + lh, rz0 + 0.005, rz1 - 0.005);
      }
    };
    for (const t of laagTrappen) {
      if (t.op) {
        echteTrap(t, yf, true);
      } else {
        // Trapgat: de trap van de laag eronder loopt zichtbaar naar beneden.
        echteTrap(t, yf - FH, false);
        const spijlen = Math.max(3, Math.round(t.w / 0.5));
        B.vast.blok("leuning", t.x, t.x + t.w, yf + 0.86, yf + 0.92, t.z + t.l - 0.05, t.z + t.l);
        for (let i = 0; i <= spijlen; i++) {
          const x = Math.min(t.x + (t.w * i) / spijlen, t.x + t.w - 0.04);
          B.vast.blok("leuning", x, x + 0.04, yf, yf + 0.86, t.z + t.l - 0.04, t.z + t.l);
        }
        B.vast.blok("leuning", t.x, t.x + 0.05, yf, yf + 0.92, t.z, t.z + t.l);
      }
    }
  };

  const heeftKamers = (v: number) => kamers.some((k) => k.verdieping === v);
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

/** Het dak bovenop `lagen` bouwlagen, met goten, afvoeren, schoorsteen en dakramen. */
function dakBouw(b: Bouwer, { dak, w, l, buren, lagen }: { dak: Dak; w: number; l: number; buren: number; lagen: number }) {
  const y = lagen * FH;
  const nok = nokHoogte(dak, l);
  const x0 = -T - OV, x1 = w + T + OV;
  const zinkGoot = (zz: number, yy: number) => b.cilinder("zink", [x0, yy, zz], [x1, yy, zz], 0.07, 14);
  const afvoer = (x: number, z: number, yGoot: number, zGoot: number) => {
    b.cilinder("zink", [x, 0.05, z], [x, yGoot - 0.5, z], 0.045, 10);
    b.cilinder("zink", [x, yGoot - 0.5, z], [x, yGoot - 0.1, zGoot], 0.045, 10);
    for (const yy of [1.2, Math.max(1.3, (yGoot - 0.6) / 2), yGoot - 0.8]) b.blok("zink", x - 0.05, x + 0.05, yy, yy + 0.04, z - 0.07, z);
  };

  if (dak === "plat") {
    // Plat dak: dakrand in zink, grind tussen de opstanden.
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
    // Lessenaarsdak: hoog aan de tuinkant, laag aan de straat, in antraciet zink.
    const hb = nok, hf = 0.45;
    const zB = -T - OV, zF = l + T + OV;
    const yB = y + hb + 0.05, yF = y + hf - 0.05;
    const hoogte = (z: number) => yB + ((yF - yB) * (z - zB)) / (zF - zB);
    // Zijgevels als trapezium en de muren voor en achter tot onder het dak.
    for (const [a, c] of [[w, w + T], [-T, 0]]) {
      b.hexa("baksteen", [
        [a, y, -T], [c, y, -T], [c, y, l + T], [a, y, l + T],
        [a, hoogte(-T) - 0.16, -T], [c, hoogte(-T) - 0.16, -T], [c, hoogte(l + T) - 0.16, l + T], [a, hoogte(l + T) - 0.16, l + T],
      ], { onder: null, boven: null });
    }
    b.blok("baksteen", -T, w + T, y, hoogte(l + T) - 0.16, l, l + T, { boven: null });
    b.blok("baksteen", -T, w + T, y, hoogte(-T) - 0.16, -T, 0, { boven: null });
    const dik = 0.16;
    b.hexa("zinkdak", [
      [x0, yB - dik, zB], [x1, yB - dik, zB], [x1, yF - dik, zF], [x0, yF - dik, zF],
      [x0, yB, zB], [x1, yB, zB], [x1, yF, zF], [x0, yF, zF],
    ], { onder: "boei" });
    // Staande naden van het zinken dak.
    for (let x = x0 + 0.5; x < x1 - 0.2; x += 0.5) b.hexa("zink", [
      [x - 0.012, yB, zB], [x + 0.012, yB, zB], [x + 0.012, yF, zF], [x - 0.012, yF, zF],
      [x - 0.012, yB + 0.025, zB], [x + 0.012, yB + 0.025, zB], [x + 0.012, yF + 0.025, zF], [x - 0.012, yF + 0.025, zF],
    ], { onder: null });
    zinkGoot(zF + 0.07, yF - 0.12);
    afvoer(w + T - 0.12, l + T + 0.06, yF, zF + 0.07);
    if (buren < 1) afvoer(-T + 0.12, l + T + 0.06, yF, zF + 0.07);
    return;
  }

  // Zadeldak, nok evenwijdig met de straat.
  const mz = l / 2;
  const yE = y - 0.05;               // dakvlak aan de goot
  const yR = y + nok;                // dakvlak aan de nok
  const dik = 0.16;
  for (const kant of [1, -1]) {
    const zE = kant > 0 ? l + T + OV : -T - OV;
    // UV langs de helling: u = x, v = afstand vanaf de goot, zodat de rijen pannen evenwijdig met de goot lopen.
    const uvDak: UvFn = (pt) => [pt[0], Math.hypot(pt[2] - zE, pt[1] - yE)];
    b.hexa("pannen", [
      [x0, yE - dik, zE], [x1, yE - dik, zE], [x1, yR - dik, mz], [x0, yR - dik, mz],
      [x0, yE, zE], [x1, yE, zE], [x1, yR, mz], [x0, yR, mz],
    ], { onder: "boei", uvBoven: uvDak });
    // Boeiboord aan de goot en windveren langs de gevels.
    b.blok("boei", x0, x1, yE - 0.22, yE + 0.01, Math.min(zE, zE - kant * 0.03), Math.max(zE, zE - kant * 0.03));
    for (const xw of [x0 - 0.03, x1]) {
      b.hexa("boei", [
        [xw, yE - 0.2, zE], [xw + 0.03, yE - 0.2, zE], [xw + 0.03, yR - 0.2, mz], [xw, yR - 0.2, mz],
        [xw, yE + 0.03, zE], [xw + 0.03, yE + 0.03, zE], [xw + 0.03, yR + 0.03, mz], [xw, yR + 0.03, mz],
      ], { onder: null });
    }
    zinkGoot(zE + kant * 0.08, yE - 0.12);
  }
  // Puntgevels: van de muurkop tot onder de pannen.
  // Onderkant van de pannen boven een punt z: lineair van nok naar goot.
  const onderDak = (z: number) => yR - ((yR - yE) * Math.abs(z - mz)) / (l / 2 + T + OV) - dik - 0.01;
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
  // Nokpannen.
  b.cilinder("nok", [x0, yR + 0.02, mz], [x1, yR + 0.02, mz], 0.11, 14);
  // Schoorsteen op het achterste dakvlak, de nok verbergt zijn voet.
  const sx = w * 0.68;
  b.blok("baksteen", sx, sx + 0.6, y + nok * 0.5, y + nok + 0.75, mz - 1.3, mz - 0.7, { boven: null });
  b.blok("arduin", sx - 0.06, sx + 0.66, y + nok + 0.75, y + nok + 0.85, mz - 1.36, mz - 0.64);
  b.blok("zinkdak", sx + 0.18, sx + 0.42, y + nok + 0.85, y + nok + 1.0, mz - 1.12, mz - 0.88);
  // Twee dakramen in het voorste dakvlak.
  const helling = Math.atan2(yR - yE, l + T + OV - mz);
  const opDak = (x: number, s: number, h: number): V3 => {
    const zE = l + T + OV;
    return [x, yE + s * Math.sin(helling) + h * Math.cos(helling), zE - s * Math.cos(helling) + h * Math.sin(helling)];
  };
  const lengte = Math.hypot(yR - yE, l + T + OV - mz);
  if (lengte > 3.2) {
    for (const xc of [w * 0.25, w * 0.75]) {
      const s0 = lengte * 0.38, s1 = s0 + 1.1;
      const kader: V3[] = [opDak(xc - 0.4, s0, 0), opDak(xc + 0.4, s0, 0), opDak(xc + 0.4, s1, 0), opDak(xc - 0.4, s1, 0),
        opDak(xc - 0.4, s0, 0.08), opDak(xc + 0.4, s0, 0.08), opDak(xc + 0.4, s1, 0.08), opDak(xc - 0.4, s1, 0.08)];
      b.hexa("velux", kader, { onder: null });
      const glas: V3[] = [opDak(xc - 0.33, s0 + 0.07, 0.08), opDak(xc + 0.33, s0 + 0.07, 0.08), opDak(xc + 0.33, s1 - 0.07, 0.08), opDak(xc - 0.33, s1 - 0.07, 0.08),
        opDak(xc - 0.33, s0 + 0.07, 0.09), opDak(xc + 0.33, s0 + 0.07, 0.09), opDak(xc + 0.33, s1 - 0.07, 0.09), opDak(xc - 0.33, s1 - 0.07, 0.09)];
      b.hexa("glas", glas, { onder: null });
    }
  }
  // Afvoerbuizen aan de voorhoeken (waar geen buur staat).
  afvoer(w + T - 0.12, l + T + 0.06, yE, l + T + OV + 0.08);
  if (buren < 1) afvoer(-T + 0.12, l + T + 0.06, yE, l + T + OV + 0.08);
}

/* ─────────────────────────── React ─────────────────────────── */

/** Werpen geen schaduw: glas, en de trap (zijn treden en spijlen tekenden een rooster op de vloer). */
const ZONDER_SCHADUW = new Set(["glas", "trede", "trapzij", "leuning"]);

function Meshes({ geos, mats, schaduw = true }: { geos: Map<string, BufferGeometry>; mats: MatSet; schaduw?: boolean }) {
  return (
    <>
      {[...geos].map(([k, g]) => {
        const m = mats.get(k);
        if (!m) return null;
        return <mesh key={k} geometry={g} material={m} castShadow={schaduw && !ZONDER_SCHADUW.has(k)} receiveShadow />;
      })}
    </>
  );
}

const URLS = TEGEL_NAMEN.map((n) => TEGELS[n].url);

/** Projectierichtingen van de isometrische camera (kijker aan de +x/+y/+z-kant). */
/** Where a room label may go (fractions of the room), most preferred first. */
const LABEL_PLEKKEN = [[0.5, 0.5], [0.5, 0.26], [0.28, 0.3], [0.72, 0.3], [0.5, 0.76], [0.28, 0.72], [0.72, 0.72]] as const;

const RECHTS = new Vector3(1, 0, -1).normalize();
const OP = new Vector3(-1, 2, -1).normalize();
const KIJK = new Vector3(1, 1, 1).normalize();

interface Kader { cx: number; cy: number; ex: number; ey: number }
function kader(w: number, l: number, y0: number, y1: number, pad: number): Kader {
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  const v = new Vector3();
  for (const x of [-T, w + T]) for (const y of [y0, y1]) for (const z of [-T, l + T]) {
    v.set(x, y, z);
    const px = v.dot(RECHTS), py = v.dot(OP);
    minX = Math.min(minX, px); maxX = Math.max(maxX, px); minY = Math.min(minY, py); maxY = Math.max(maxY, py);
  }
  return { cx: (minX + maxX) / 2, cy: (minY + maxY) / 2, ex: (maxX - minX) / 2 + pad, ey: (maxY - minY) / 2 + pad };
}

interface SceneProps extends IsoHouseProps { anim: MutableRefObject<Anim>; labels: MutableRefObject<(HTMLDivElement | null)[]>; reduced: boolean; onKlaar?: () => void }

function Scene(props: SceneProps) {
  const { woning, verdiepingen, dak, kamers, openingen = [], trappen = [], open, actief, plaatsingen = [], werkend = false, cyclus = 10, anim, labels, reduced } = props;
  const materiaal = props.materiaal ?? STANDAARD_MATERIAAL;
  const { w, l, buren } = WONING[woning];
  const lagen = Math.max(1, verdiepingen);
  const act = Math.min(actief, lagen - 1);
  const yfAct = act * FH + SLAB;
  const daktop = lagen * FH;
  const nok = nokHoogte(dak, l);
  const { gl, scene, camera, size } = useThree();

  const tex = useLoader(TextureLoader, URLS);
  const texturen = useMemo(() => Object.fromEntries(TEGEL_NAMEN.map((n, i) => [n, tex[i]])) as Record<TegelNaam, Texture>, [tex]);

  // Snijvlakken van de actieve laag: onderhelft houden, bovenhelft houden.
  const snij = useMemo(() => ({ onder: new Plane(new Vector3(0, -1, 0), 0), boven: new Plane(new Vector3(0, 1, 0), 0) }), []);
  useLayoutEffect(() => {
    snij.onder.constant = yfAct + HC;
    snij.boven.constant = -(yfAct + HC);
  }, [snij, yfAct]);

  // Vier materiaalsets: vast, vervagend, onder de snede, boven de snede.
  const sets = useMemo(() => {
    const vast = maakMaterialen(texturen, STANDAARD_MATERIAAL);
    return {
      vast,
      vaag: afgeleid(vast, (m) => { m.transparent = true; }),
      onder: afgeleid(vast, (m) => { m.clippingPlanes = [snij.onder]; m.clipShadows = true; }),
      boven: afgeleid(vast, (m) => { m.clippingPlanes = [snij.boven]; m.clipShadows = true; m.transparent = true; }),
    };
  }, [texturen, snij]);
  useEffect(() => () => {
    for (const s of Object.values(sets)) for (const m of s.values()) m.dispose();
  }, [sets]);

  // Muur- en vloerkleur volgen de bouwfase.
  useEffect(() => {
    const parket = texturen.parket.clone(), chape = texturen.chape.clone();
    for (const [t, naam] of [[parket, "parket"], [chape, "chape"]] as const) {
      const [pw, ph] = TEGELS[naam].periode;
      t.wrapS = t.wrapT = RepeatWrapping; t.repeat.set(1 / pw, 1 / ph); t.colorSpace = SRGBColorSpace; t.anisotropy = ANISO; t.needsUpdate = true;
    }
    for (const s of Object.values(sets)) {
      s.get("pleister")!.color.set(materiaal.muur);
      const v = s.get("vloer")!;
      v.color.set(materiaal.parket ? "#ffffff" : materiaal.vloer);
      v.map = materiaal.parket ? parket : chape;
      v.roughness = materiaal.parket ? 0.55 : 0.9;
      v.needsUpdate = true;
    }
    return () => { parket.dispose(); chape.dispose(); };
  }, [sets, texturen, materiaal.muur, materiaal.vloer, materiaal.parket]);

  // Omgevingslicht voor glas en zink: een neutrale studio, één keer berekend.
  useEffect(() => {
    const pm = new PMREMGenerator(gl);
    const env = pm.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = env;
    scene.environmentIntensity = 0.45;
    return () => { env.dispose(); pm.dispose(); scene.environment = null; };
  }, [gl, scene]);

  const geo = useMemo(() => {
    const B = bouw({ woning, lagen, act, dak, kamers, openingen, trappen });
    return {
      vast: B.vast.bouw(), boven: B.boven.bouw(), dak: B.dak.bouw(), gevel: B.gevel.bouw(), binnen: B.binnen.bouw(), bladen: B.bladen.bouw(),
    };
  }, [woning, lagen, act, dak, kamers, openingen, trappen]);
  useEffect(() => () => {
    for (const m of Object.values(geo)) for (const g of m.values()) g.dispose();
  }, [geo]);

  // Vaste inrichting van de actieve laag (keuken, badkamer, toilet, wasplaats).
  const inrichting = useMemo(() => {
    const B = new Bouwer();
    const laag = kamers.filter((k) => k.verdieping === act);
    if (laag.length) richIn(B, laag, openingen, act * FH + SLAB, { w, l });
    return B.bouw();
  }, [kamers, openingen, act, w, l]);
  useEffect(() => () => { for (const g of inrichting.values()) g.dispose(); }, [inrichting]);

  // Buren en het gebouw onder een appartement: alleen een gestreepte contour.
  const spook = useMemo(() => {
    const blokken: [number, number, number, number, number, number][] = [];
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
    spook.vlak.dispose(); spook.lijn.dispose();
    for (const d of spook.delen) { d.box.dispose(); d.rand.dispose(); }
  }, [spook]);

  // Zon met schaduw, gericht op het midden van de woning.
  const zon = useMemo(() => {
    const d = new DirectionalLight("#fff3e2", 2.6);
    d.castShadow = true;
    d.shadow.mapSize.set(GSM ? 1024 : 2048, GSM ? 1024 : 2048);
    d.shadow.bias = -0.0004;
    d.shadow.normalBias = 0.02;
    return d;
  }, []);
  useLayoutEffect(() => {
    const r = Math.max(w, l) + 9;
    const c = zon.shadow.camera;
    c.left = -r; c.right = r; c.top = r; c.bottom = -r; c.near = 1; c.far = 80;
    c.updateProjectionMatrix();
    // Zon rechtsvoor en hoog: de binnenmuren die je in een opengewerkte laag ziet
    // (achter en links) staan in het licht, en de slagschaduw valt achter de woning.
    zon.position.set(w / 2 + 11, 24, l / 2 + 6);
    zon.target.position.set(w / 2, 0, l / 2);
    zon.target.updateMatrixWorld();
  }, [zon, w, l]);

  // Animatiedoelen.
  useEffect(() => {
    stuur(anim.current.o, open ? 1 : 0, reduced);
    stuur(anim.current.cam, open ? 1 : 0, reduced);
    stuur(anim.current.act, act, reduced);
  }, [anim, open, act, reduced]);

  const bovenRef = useRef<Group>(null);
  const dakRef = useRef<Group>(null);
  const binnenRef = useRef<Group>(null);
  const bladenRef = useRef<Group>(null);
  const actKamers = useMemo(() => kamers.filter((k) => k.verdieping === act), [kamers, act]);
  // Room labels sit in the middle of the room, unless a device stands there:
  // then the free spot farthest from the devices, so a name never covers a dryer.
  const labelPos = useMemo(() => actKamers.map((k) => {
    const hier = plaatsingen.filter((p) => p.kamer === k.id);
    const vrij = ([fx, fz]: readonly [number, number]) =>
      hier.reduce((m, p) => Math.min(m, Math.hypot(k.w * fx - p.x, k.l * fz - p.z)), Infinity);
    let bx: number = LABEL_PLEKKEN[0][0], bz: number = LABEL_PLEKKEN[0][1];
    let best = vrij(LABEL_PLEKKEN[0]);
    for (const c of LABEL_PLEKKEN) {
      if (best >= 1.1) break;
      const d = vrij(c);
      if (d > best + 0.05) { best = d; [bx, bz] = c; }
    }
    return new Vector3(k.x + k.w * bx, yfAct + HC + 0.15, k.z + k.l * bz);
  }), [actKamers, yfAct, plaatsingen]);

  const dicht = useMemo(() => kader(w, l, 0, daktop + nok + 0.3, 1.3), [w, l, daktop, nok]);
  const v = useMemo(() => new Vector3(), []);

  // Bouw-animaties. Een ander dak of meer/minder bouwlagen: de lagen erboven
  // groeien (of krimpen) vanaf hun vloer, het dak rijdt mee naar zijn nieuwe
  // hoogte of valt er van boven op, en de camera glijdt mee. Andere kamers op de
  // actieve laag: de binnenwanden en de inrichting groeien uit de vloer.
  // Een ander woningtype wisselt meteen, zonder animatie: daar vergelijk je
  // types naast elkaar, en een huis dat telkens opnieuw opbouwt staat in de weg.
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
  const inrichtingRef = useRef<Group>(null);
  const vaagMats = useMemo(() => [...sets.vaag.values(), ...sets.boven.values()], [sets]);
  const transparant = useRef(true);
  const frames = useRef(0);

  // Buiten het droogplan tekent het canvas alleen op vraag (frameloop "demand"):
  // na elke render van de scène één frame, zodat een nieuwe tween vertrekt, en
  // daarna zolang er nog iets beweegt. Zo draait een gsm geen 60 fps voor een
  // stilstaand huis.
  const invalidate = useThree((st) => st.invalidate);
  useEffect(() => {
    invalidate();
  });

  useFrame(({ invalidate: volgende }) => {
    // Na twee getekende frames staat alles (texturen, schaduw) er: de SVG mag weg.
    if (frames.current < 3 && ++frames.current === 2) props.onKlaar?.();
    if (import.meta.env.DEV) (window as unknown as { __sim3d?: unknown }).__sim3d = { scene, camera };
    const A = anim.current;
    const o = stap(A.o), camT = stap(A.cam), camA = stap(A.act);
    const zicht = 1 - o;
    const G = groei.current;
    const b = stap(G.bouw, DUUR * 1.2), wg = stap(G.wand, DUUR * 0.8);

    // Camera: van de hele woning naar de actieve laag, zoals de viewBox in de SVG.
    // Tijdens een bouw-animatie glijdt het kader van de oude naar de nieuwe woning.
    const d0 = G.vanKader;
    const dk = b < 1 ? { cx: d0.cx + (dicht.cx - d0.cx) * b, cy: d0.cy + (dicht.cy - d0.cy) * b, ex: d0.ex + (dicht.ex - d0.ex) * b, ey: d0.ey + (dicht.ey - d0.ey) * b } : dicht;
    G.kaderNu = dk;
    const opn = kader(w, l, 0, camA * FH + SLAB + H + 0.4, 1.3);
    const k = { cx: dk.cx + (opn.cx - dk.cx) * camT, cy: dk.cy + (opn.cy - dk.cy) * camT, ex: dk.ex + (opn.ex - dk.ex) * camT, ey: dk.ey + (opn.ey - dk.ey) * camT };
    const cam = camera as OrthographicCamera;
    const doel = v.copy(RECHTS).multiplyScalar(k.cx).addScaledVector(OP, k.cy);
    cam.position.copy(doel).addScaledVector(KIJK, 60);
    cam.up.set(0, 1, 0);
    cam.lookAt(doel);
    cam.zoom = Math.min(size.width / (2 * k.ex), size.height / (2 * k.ey));
    cam.updateProjectionMatrix();

    // Deksel eraf: de lagen erboven en het dak tillen en vervagen.
    const lift = (H + 3) * o;
    // Lagen erboven: geschaald vanaf hun vloer, van de oude naar de nieuwe hoogte.
    const nNu = lagen - act - 1, nVan = Math.max(0, G.vanLagen - act - 1);
    const s0 = nNu > 0 ? Math.max(0.02, nVan / nNu) : 1;
    const s = s0 + (1 - s0) * b;
    const y0 = (act + 1) * FH;
    if (bovenRef.current) {
      bovenRef.current.scale.y = s;
      bovenRef.current.position.y = lift + y0 * (1 - s);
      bovenRef.current.visible = zicht > 0.01;
    }
    // Dak: rijdt van de oude dakhoogte naar de nieuwe met een sprongetje, of valt
    // er van boven op als het een ander dak (of een andere woning) is.
    const rit = (G.vanLagen - lagen) * FH * (1 - b);
    const sprong = G.nieuwDak ? 6 * Math.pow(1 - b, 2) : Math.sin(Math.PI * b) * 1.4 * (G.vanLagen !== lagen ? 1 : 0);
    if (dakRef.current) { dakRef.current.position.y = lift * 1.3 + rit + sprong; dakRef.current.visible = zicht > 0.01; }
    const nuTransparant = zicht < 0.999;
    for (const m of vaagMats) {
      m.opacity = zicht;
      if (nuTransparant !== transparant.current) { m.transparent = nuTransparant; m.needsUpdate = true; }
    }
    transparant.current = nuTransparant;
    spook.vlak.opacity = 0.035 * zicht;
    spook.lijn.opacity = 0.6 * zicht;

    // Binnenwanden zakken tot de snijhoogte, deurbladen met hen mee.
    // Nieuwe kamers: wanden, deuren en inrichting groeien uit de vloer.
    const wandH = (HC + (H - HC) * zicht) * Math.max(0.001, wg);
    if (binnenRef.current) binnenRef.current.scale.y = wandH / H;
    if (bladenRef.current) bladenRef.current.scale.y = Math.min(2.05, wandH) / 2.05;
    if (inrichtingRef.current) {
      const si = Math.max(0.001, wg);
      inrichtingRef.current.scale.y = si;
      inrichtingRef.current.position.y = yfAct * (1 - si);
    }

    // Kamerlabels: HTML boven het canvas, op de geprojecteerde plek, en even groot
    // ten opzichte van de woning als in de SVG (daar schalen ze mee met de viewBox).
    const houder = labels.current[0]?.parentElement;
    if (houder) {
      const zl = cam.zoom.toFixed(1);
      if (houder.dataset.zl !== zl) { houder.dataset.zl = zl; houder.style.setProperty("--zl", zl); }
    }
    labelPos.forEach((p, i) => {
      const el = labels.current[i];
      if (!el) return;
      v.copy(p).project(cam);
      const x = ((v.x + 1) / 2) * size.width, y = ((1 - v.y) / 2) * size.height;
      el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) translate(-50%, -50%)`;
      el.style.opacity = String(o * wg);
    });

    const beweegt = [A.o, A.cam, A.act, G.bouw, G.wand].some((tw) => tw.start < 0 || tw.nu !== tw.naar);
    if (beweegt || frames.current < 3) volgende();
  });

  const droogt = werkend && !reduced;
  // De toestellen van deze verdieping in de volgorde waarin ze neergezet worden:
  // van achter naar voor, zodat de film over de vloer naar de kijker toe loopt.
  const laagPlaatsingen = useMemo<Geplaatst[]>(() => {
    const plek = (p: (typeof plaatsingen)[number]) => {
      const k = actKamers.find((kk) => kk.id === p.kamer)!;
      return k.z + p.z + (k.x + p.x) * 0.3;
    };
    const volgorde = plaatsingen.filter((p) => actKamers.some((k) => k.id === p.kamer)).sort((a, b) => plek(a) - plek(b));
    return volgorde.map((p, i) => ({ ...p, a: aankomst(i, volgorde.length) }));
  }, [plaatsingen, actKamers]);
  // Filmklok: begint opnieuw bij elke verdieping (en elk nieuw pakket).
  const film = useRef<Film>({ start: -1, vast: reduced });
  useLayoutEffect(() => {
    film.current = { start: -1, vast: reduced };
  }, [act, werkend, laagPlaatsingen, reduced]);

  return (
    <>
      <hemisphereLight args={["#fffaf2", "#c9bba8", 1.1]} />
      <primitive object={zon} />
      <primitive object={zon.target} />

      {/* schaduw op het papier — bij een appartement op het dak van het gebouw eronder */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[w / 2, -0.002, l / 2]} receiveShadow>
        <planeGeometry args={[80, 80]} />
        <shadowMaterial opacity={0.16} color="#5a3a2a" />
      </mesh>

      {spook.delen.map((d, i) => (
        <group key={i}>
          <mesh geometry={d.box} material={spook.vlak} />
          <lineSegments geometry={d.rand} material={spook.lijn} onUpdate={(ls) => ls.computeLineDistances()} />
        </group>
      ))}

      <Meshes geos={geo.vast} mats={sets.vast} />
      {/* voor- en zijgevel staan aan de zonkant: hun schaduw valt alleen naar binnen, als een band over de vloer */}
      <Meshes geos={geo.gevel} mats={sets.onder} schaduw={false} />
      <Meshes geos={geo.gevel} mats={sets.boven} schaduw={false} />
      <group ref={binnenRef} position={[0, yfAct, 0]}>
        {/* binnenwanden en deuren werpen geen schaduw: in een opengewerkte laag lazen die als vlekken op de vloer */}
        <Meshes geos={geo.binnen} mats={sets.vast} schaduw={false} />
      </group>
      <group ref={bladenRef} position={[0, yfAct, 0]}>
        <Meshes geos={geo.bladen} mats={sets.vast} schaduw={false} />
      </group>
      <group ref={bovenRef}>
        <Meshes geos={geo.boven} mats={sets.vaag} />
      </group>
      <group ref={dakRef}>
        <Meshes geos={geo.dak} mats={sets.vaag} />
      </group>

      {actKamers.length > 0 && (
        <>
          <group ref={inrichtingRef}>
            <Meshes geos={inrichting} mats={sets.vast} />
          </group>
          <ToestelVangnet terugval={<FilmStart film={film} />}>
          <Suspense fallback={null}>
          <FilmStart film={film} />
          {laagPlaatsingen.map((p, i) => {
            const k = actKamers.find((kk) => kk.id === p.kamer)!;
            return <Toestel3D key={`${act}-${p.k}-${i}`} k={p.k} x={k.x + p.x} y={yfAct} z={k.z + p.z} aankomst={p.a} werkend={werkend} film={film} cyclus={cyclus} />;
          })}
          </Suspense>
          </ToestelVangnet>
          {droogt && <Luchtstroom3D kamers={actKamers} plaatsingen={laagPlaatsingen} yf={yfAct} film={film} cyclus={cyclus} />}
          {droogt && <Druppels3D kamers={actKamers} plaatsingen={laagPlaatsingen} yf={yfAct} vocht={materiaal.vocht} film={film} cyclus={cyclus} />}
        </>
      )}
    </>
  );
}

const STANDAARD_MATERIAAL: Materiaal = {
  muur: "#ddd6cb", vloer: "#c9c2b6", vocht: 0, muurNat: false, vloerNat: false, parket: false, meubels: false,
};

/**
 * De 3D-woning. Zelfde props als IsoHouse; `onKlaar` meldt dat de eerste frame
 * getekend is (de SVG eronder mag dan weg) en `onFout` dat WebGL niet lukt.
 */
export default function IsoHouse3D(props: IsoHouseProps & { onKlaar?: () => void; onFout?: () => void }) {
  const { woning, verdiepingen, kamers, actief, className, onKlaar, onFout } = props;
  const reduced = useReducedMotion();
  const anim = useRef<Anim>({ o: tween(props.open ? 1 : 0), cam: tween(props.open ? 1 : 0), act: tween(actief) });
  const labels = useRef<(HTMLDivElement | null)[]>([]);
  const lagen = Math.max(1, verdiepingen);
  const act = Math.min(actief, lagen - 1);
  const actKamers = kamers.filter((k) => k.verdieping === act);

  return (
    <div
      className={`ds-iso ds-iso3d${className ? ` ${className}` : ""}`}
      role="img"
      aria-label={`3D-tekening van een ${WONING[woning].label.toLowerCase()} met ${lagen} bouwla${lagen === 1 ? "ag" : "gen"}`}
    >
      <Canvas
        // het droogplan is een film (toestellen, ventilatoren, drogen): dan altijd tekenen
        frameloop={props.werkend ? "always" : "demand"}
        orthographic
        shadows={{ type: PCFShadowMap }}
        dpr={[1, GSM ? 1.5 : 2]}
        camera={{ position: [60, 60, 60], near: 0.1, far: 300, zoom: 30 }}
        gl={{ antialias: true, alpha: true, toneMapping: NeutralToneMapping, preserveDrawingBuffer: false }}
        onCreated={({ gl }) => {
          gl.localClippingEnabled = true;
          gl.setClearColor(0x000000, 0);
          gl.domElement.addEventListener("webglcontextlost", () => onFout?.(), { once: true });
        }}
        aria-hidden="true"
      >
        <Suspense fallback={null}>
          <Scene {...props} anim={anim} labels={labels} reduced={reduced} onKlaar={onKlaar} />
        </Suspense>
      </Canvas>
      <div className="ds-labels3d" aria-hidden="true">
        {actKamers.map((k, i) => (
          <div
            key={k.id}
            ref={(el) => { labels.current[i] = el; }}
            className={`ds-kamerlabel3d${k.soort === "circulatie" ? " ds-kamerlabel3d--gang" : ""}`}
            style={{ opacity: 0 }}
          >
            {k.naam.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
}


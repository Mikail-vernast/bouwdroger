import type { FilmPlan } from "./film";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import {
  WONING,
  type Dak,
  type Kamer,
  type Opening,
  type Plaatsing,
  type Trap,
  type Woning,
} from "@/lib/droogSimulator";
import type { DeviceKey } from "@/data/verhuur";
import type { Materiaal } from "./materiaal";
import { FH, H, HC, SLAB, T, TI, nokHoogte } from "./maten";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/*
  Isometrische woning voor de droogsimulator.

  Zelfde projectie als de kelder-simulator van Vernast: wereldassen x = breedte,
  y = hoogte, z = diepte, met de achterste hoek als oorsprong. De kijker staat
  aan de +x/+z-kant, dus van elk blok zijn alleen de bovenkant, de +x- en de
  +z-zijde zichtbaar — meer hoeft `Blok` niet te tekenen.

  Opengewerkt (`open`) gaan de verdiepingen boven de actieve laag en het dak er
  als een deksel af, zakken de voorgevels tot borsthoogte en zoomt de camera in.
  Wanden worden dan op 1,1 m "doorgesneden", zoals op een bouwplan: zo blijft
  elke kamer zichtbaar zonder dat een wand ervoor de drogers verbergt.
*/

type V3 = [number, number, number];

const S = 20; // px per meter
const ISO = Math.sqrt(3) / 2;
const SEG = 0.6; // lengte van een wandsegment voor de tekenvolgorde

function P([x, y, z]: V3): [number, number] {
  return [(x - z) * ISO * S, ((x + z) / 2 - y) * S];
}
const pts = (vs: V3[]) => vs.map((v) => P(v).map((n) => n.toFixed(2)).join(",")).join(" ");

function Poly({ v, fill, stroke = "#00000022", sw = 0.6, className, style, opacity }: {
  v: V3[]; fill: string; stroke?: string; sw?: number; className?: string;
  style?: React.CSSProperties; opacity?: number;
}) {
  return (
    <polygon
      points={pts(v)}
      fill={fill}
      stroke={stroke}
      strokeWidth={sw}
      strokeLinejoin="round"
      className={className}
      style={style}
      opacity={opacity}
    />
  );
}

interface BlokKleur { top: string; px: string; pz: string; stroke?: string }

/** Een rechthoekig blok: alleen de drie zichtbare vlakken. */
function Blok({ x0, x1, y0, y1, z0, z1, c }: {
  x0: number; x1: number; y0: number; y1: number; z0: number; z1: number; c: BlokKleur;
}) {
  return (
    <g>
      <Poly v={[[x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [x1, y0, z1]]} fill={c.px} stroke={c.stroke} />
      <Poly v={[[x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]]} fill={c.pz} stroke={c.stroke} />
      <Poly v={[[x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]]} fill={c.top} stroke={c.stroke} />
    </g>
  );
}

/* ─────────────────────────── materialen ─────────────────────────── */

/* ─────────────────────────── tween ─────────────────────────── */

/** Eén getal zacht naar zijn doel laten glijden (ease-out cubic). */
function useTween(target: number, ms: number, reduced: boolean) {
  const [value, setValue] = useState(target);
  const cur = useRef(target);
  useEffect(() => {
    if (reduced) {
      cur.current = target;
      setValue(target);
      return;
    }
    const from = cur.current;
    if (Math.abs(from - target) < 1e-6) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const k = Math.min(1, (t - start) / ms);
      const e = 1 - Math.pow(1 - k, 3);
      cur.current = from + (target - from) * e;
      setValue(cur.current);
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, ms, reduced]);
  return value;
}

/* ─────────────────────────── kleuren ─────────────────────────── */

/* Vlaamse woning: rode baksteen, arduin (blauwe hardsteen) voor plint en dorpels, witte schrijnwerk. */
const ARDUIN: BlokKleur = { top: "#717980", px: "#4e555b", pz: "#5d656c", stroke: "#00000033" };
const KADER = "#f4f1ec";
const PLAAT: BlokKleur = { top: "#d9d2c6", px: "#b9b0a3", pz: "#c9c1b4", stroke: "#7a706433" };
const SNEDE = "#2a2422";
const DEURBLAD: BlokKleur = { top: "#5b4a3f", px: "#8a7464", pz: "#9b8676", stroke: "none" };
const TREDE: BlokKleur = { top: "#b59a7e", px: "#8f765f", pz: "#a0866d", stroke: "#00000022" };
const LEUNING: BlokKleur = { top: "#2a2422", px: "#4a403b", pz: "#5a4e48", stroke: "none" };
const GLAS = "#33424d";
const DAK = { vlak: "#36393d", licht: "#45494e", lijn: "#25272a", zink: "#9aa1a6" };

/* ─────────────────────────── toestellen ─────────────────────────── */

interface Tekenbaar { key: string; diepte: number; node: ReactNode }

const MATEN: Record<DeviceKey, [number, number, number]> = {
  // Iets groter dan in het echt: op de schaal van een hele bouwlaag zou een
  // droger van 40 cm een stipje zijn.
  small: [0.62, 1.05, 0.55],
  medium: [0.72, 1.2, 0.62],
  axiaal: [1.0, 1.0, 0.4],
  kachel: [0.52, 0.72, 0.5],
};

function Toestel({ k, x, y, z, n, werkend, uid }: {
  k: DeviceKey; x: number; y: number; z: number; n: number; werkend: boolean; uid: string;
}) {
  const [w, h, d] = MATEN[k];
  const x0 = x - w / 2, x1 = x + w / 2, z0 = z - d / 2, z1 = z + d / 2;
  const delay = `${-(n * 0.37 + (k === "medium" ? 0.2 : 0)) % 2}s`;

  if (k === "axiaal") {
    // Frame met een ronde opening op de +z-zijde; de schoepen draaien in het
    // vlak van dat frame via een affiene matrix op lokale coördinaten.
    const [ox, oy] = P([x0, y, z1]);
    const [ax, ay] = P([x0 + 1, y, z1]);
    const [bx, by] = P([x0, y + 1, z1]);
    const m = `matrix(${(ax - ox).toFixed(3)} ${(ay - oy).toFixed(3)} ${(bx - ox).toFixed(3)} ${(by - oy).toFixed(3)} ${ox.toFixed(2)} ${oy.toFixed(2)})`;
    const cx = w / 2, cy = h * 0.52, r = Math.min(w, h) * 0.4;
    return (
      <g>
        <Blok x0={x0} x1={x1} y0={y + 0.04} y1={y + h} z0={z0} z1={z1} c={{ top: "#f6f5f2", px: "#d4d2ce", pz: "#efeeea", stroke: "#00000033" }} />
        <g transform={m}>
          <circle cx={cx} cy={cy} r={r} fill="#1c1b1b" />
          <g>
            {[0, 72, 144, 216, 288].map((a) => (
              <path
                key={a}
                d={`M${cx} ${cy} q ${r * 0.5} ${r * 0.15} ${r * 0.92} 0 q ${-r * 0.3} ${r * 0.28} ${-r * 0.92} 0`}
                fill="#4a4848"
                transform={`rotate(${a} ${cx} ${cy})`}
              />
            ))}
            {werkend && (
              <animateTransform attributeName="transform" type="rotate" from={`0 ${cx} ${cy}`} to={`360 ${cx} ${cy}`} dur="0.45s" repeatCount="indefinite" />
            )}
          </g>
          <circle cx={cx} cy={cy} r={r * 0.2} fill="#c8102e" />
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#9a9894" strokeWidth={0.05} />
        </g>
        {/* poten */}
        <Poly v={[[x0 + 0.06, y, z1 - 0.02], [x0 + 0.1, y, z1 - 0.02], [x0 + 0.1, y + 0.08, z1 - 0.02], [x0 + 0.06, y + 0.08, z1 - 0.02]]} fill="#222" />
        <Poly v={[[x1 - 0.1, y, z1 - 0.02], [x1 - 0.06, y, z1 - 0.02], [x1 - 0.06, y + 0.08, z1 - 0.02], [x1 - 0.1, y + 0.08, z1 - 0.02]]} fill="#222" />
      </g>
    );
  }

  if (k === "kachel") {
    return (
      <g>
        <Blok x0={x0} x1={x1} y0={y} y1={y + h} z0={z0} z1={z1} c={{ top: "#4b4846", px: "#2f2d2c", pz: "#3b3937", stroke: "#00000055" }} />
        <Poly
          v={[[x0 + 0.06, y + 0.12, z1 + 0.001], [x1 - 0.06, y + 0.12, z1 + 0.001], [x1 - 0.06, y + h - 0.1, z1 + 0.001], [x0 + 0.06, y + h - 0.1, z1 + 0.001]]}
          fill={`url(#${uid}-gloed)`}
          stroke="none"
          className={werkend ? "ds-gloei" : undefined}
        />
        {werkend &&
          [0, 1, 2].map((i) => {
            const [sx, sy] = P([x + (i - 1) * 0.12, y + h + 0.05, z]);
            return (
              <path
                key={i}
                d={`M${sx.toFixed(1)} ${sy.toFixed(1)} q 2.5 -4 0 -8 q -2.5 -4 0 -8`}
                className="ds-warmte"
                style={{ animationDelay: `${-i * 0.5}s` }}
              />
            );
          })}
      </g>
    );
  }

  // Bouwdroger: wit huis, zwarte filter op de zijkant, rood merkteken bovenop.
  const [lx, ly] = P([x1 - 0.1, y + h - 0.14, z1]);
  return (
    <g>
      {/* beugel */}
      <polyline
        points={pts([[x0 + 0.04, y + 0.1, z0], [x0 + 0.04, y + h + 0.28, z0], [x1 - 0.04, y + h + 0.28, z0], [x1 - 0.04, y + 0.1, z0]])}
        fill="none"
        stroke="#1f1f1f"
        strokeWidth={1.1}
        strokeLinejoin="round"
      />
      <Blok x0={x0} x1={x1} y0={y + 0.1} y1={y + h} z0={z0} z1={z1} c={{ top: "#fbfbfa", px: "#dcdad6", pz: "#f1f0ed", stroke: "#00000040" }} />
      {/* filter op de +x-zijde */}
      <Poly v={[[x1 + 0.001, y + h * 0.45, z0 + 0.05], [x1 + 0.001, y + h - 0.06, z0 + 0.05], [x1 + 0.001, y + h - 0.06, z1 - 0.05], [x1 + 0.001, y + h * 0.45, z1 - 0.05]]} fill="#2a2a2a" stroke="none" />
      {/* reservoir */}
      <Poly v={[[x1 + 0.001, y + 0.16, z0 + 0.07], [x1 + 0.001, y + h * 0.4, z0 + 0.07], [x1 + 0.001, y + h * 0.4, z1 - 0.07], [x1 + 0.001, y + 0.16, z1 - 0.07]]} fill="#3d4a55" stroke="none" />
      {werkend && (
        <Poly
          v={[[x1 + 0.002, y + 0.16, z0 + 0.07], [x1 + 0.002, y + h * 0.4, z0 + 0.07], [x1 + 0.002, y + h * 0.4, z1 - 0.07], [x1 + 0.002, y + 0.16, z1 - 0.07]]}
          fill="#6fa8d6"
          stroke="none"
          className="ds-tank"
          style={{ animationDelay: delay }}
        />
      )}
      {/* merkteken */}
      <Poly v={[[x0 + 0.1, y + h + 0.001, z0 + 0.12], [x1 - 0.12, y + h + 0.001, z0 + 0.12], [x1 - 0.12, y + h + 0.001, z0 + 0.2], [x0 + 0.1, y + h + 0.001, z0 + 0.2]]} fill="#c8102e" stroke="none" />
      {/* wielen */}
      {[z0 + 0.08, z1 - 0.08].map((wz, i) => {
        const [cx, cy] = P([x1 + 0.02, y + 0.09, wz]);
        return <ellipse key={i} cx={cx} cy={cy} rx={1.6} ry={1.9} fill="#1c1c1c" />;
      })}
      <circle cx={lx} cy={ly} r={0.9} className={werkend ? "ds-led on" : "ds-led"} style={{ animationDelay: delay }} />
    </g>
  );
}

/* ─────────────────────────── de woning ─────────────────────────── */

export interface IsoHouseProps {
  woning: Woning;
  verdiepingen: number;
  dak: Dak;
  kamers: Kamer[];
  /** deuren en doorgangen uit het plan; zonder deze geen openingen */
  openingen?: Opening[];
  trappen?: Trap[];
  /** opengewerkte weergave met de actieve laag zichtbaar */
  open: boolean;
  actief: number;
  plaatsingen?: Plaatsing[];
  werkend?: boolean;
  materiaal?: Materiaal;
  /** kleine variant voor de keuzekaarten: geen labels, geen animatie */
  mini?: boolean;
  /** duur van één droogcyclus in seconden, voor de vochtsluier */
  cyclus?: number;
  /** 3D only: which segment of the drying film this floor plays (placing or drying, and how far) */
  filmPlan?: FilmPlan;
  className?: string;
}

const STANDAARD_MATERIAAL: Materiaal = {
  muur: "#ddd6cb", vloer: "#c9c2b6", vocht: 0, muurNat: false, vloerNat: false, parket: false, meubels: false,
};

export default function IsoHouse({
  woning,
  verdiepingen,
  dak,
  kamers,
  openingen = [],
  trappen = [],
  open,
  actief,
  plaatsingen = [],
  werkend = false,
  materiaal = STANDAARD_MATERIAAL,
  mini = false,
  cyclus = 10,
  className,
}: IsoHouseProps) {
  const uid = useId().replace(/:/g, "");
  const reduced = useReducedMotion();
  const { w, l, buren } = WONING[woning];
  const lagen = Math.max(1, verdiepingen);
  const act = Math.min(actief, lagen - 1);
  const o = useTween(open ? 1 : 0, 900, reduced || mini);
  // Baksteen als patroon dat met het isometrische vlak meeschuift; in de
  // kleine kaartjes effen, daar wordt een patroon modder.
  const gevel: BlokKleur = mini
    ? { top: "#e9e2d7", px: "#9a4a33", pz: "#b05a3d", stroke: "#00000022" }
    : { top: "#e9e2d7", px: `url(#${uid}-bx)`, pz: `url(#${uid}-bz)`, stroke: "#00000022" };
  const vloerband = (v: number): BlokKleur => (v === 0 ? ARDUIN : { ...PLAAT, px: gevel.px, pz: gevel.pz, stroke: "#00000022" });

  const daktop = lagen * FH;
  const nok = nokHoogte(dak, l);

  // Camera: dicht = de hele woning, open = tot en met de actieve laag.
  const bbox = (topY: number) => {
    const corners: V3[] = [
      [-T, 0, -T], [w + T, 0, -T], [-T, 0, l + T], [w + T, 0, l + T],
      [-T, topY, -T], [w + T, topY, -T], [-T, topY, l + T], [w + T, topY, l + T],
    ];
    const ps = corners.map(P);
    const xs = ps.map((p) => p[0]), ys = ps.map((p) => p[1]);
    const pad = mini ? 6 : 26;
    return [Math.min(...xs) - pad, Math.min(...ys) - pad, Math.max(...xs) - Math.min(...xs) + pad * 2, Math.max(...ys) - Math.min(...ys) + pad * 2];
  };
  const dicht = bbox(daktop + nok + 0.3);
  const opengewerkt = bbox(act * FH + SLAB + H + 0.4);
  const camT = useTween(open ? 1 : 0, 900, reduced || mini);
  const camA = useTween(act, 900, reduced || mini);
  // camA verschuift de open camera mee wanneer de actieve laag wisselt.
  const openNu = bbox(camA * FH + SLAB + H + 0.4);
  const cam = dicht.map((d, i) => d + ((open ? openNu : opengewerkt)[i] - d) * camT);
  const viewBox = cam.map((n) => n.toFixed(1)).join(" ");

  const lift = (H + 3) * o;

  /* ── buren: alleen een gestreepte contour, ze mogen niets verbergen ── */
  const buurBlok = (x0: number, x1: number) => {
    const y1 = Math.max(2, lagen) * FH + 0.4;
    return (
      <g className="ds-buur">
        <Poly v={[[x0, 0, l], [x1, 0, l], [x1, y1, l], [x0, y1, l]]} fill="#00000006" stroke="#8a827888" sw={0.6} />
        <Poly v={[[x0, y1, 0], [x1, y1, 0], [x1, y1, l], [x0, y1, l]]} fill="#00000004" stroke="#8a827888" sw={0.6} />
        <Poly v={[[x1, 0, 0], [x1, y1, 0], [x1, y1, l], [x1, 0, l]]} fill="#00000005" stroke="#8a827888" sw={0.6} />
      </g>
    );
  };

  /* ── ramen op een gevelvlak ── */
  const voordeur = openingen.find((o) => o.soort === "voordeur" && o.verdieping === 0);
  const zf = l + T + 0.01; // voorgevelvlak
  const xf = w + T + 0.01; // zijgevelvlak

  /** Raam in de voorgevel: wit kader, glas met middenstijl en kalf, arduin dorpel. */
  const raamZ = (x0: number, x1: number, y0: number, y1: number, key: string) => (
    <g key={key}>
      <Poly v={[[x0, y0, zf], [x1, y0, zf], [x1, y1, zf], [x0, y1, zf]]} fill={KADER} stroke="#00000022" sw={0.4} />
      <Poly v={[[x0 + 0.08, y0 + 0.08, zf + 0.005], [x1 - 0.08, y0 + 0.08, zf + 0.005], [x1 - 0.08, y1 - 0.08, zf + 0.005], [x0 + 0.08, y1 - 0.08, zf + 0.005]]} fill={GLAS} stroke="none" />
      <polyline points={pts([[(x0 + x1) / 2, y0 + 0.08, zf + 0.01], [(x0 + x1) / 2, y1 - 0.08, zf + 0.01]])} stroke={KADER} strokeWidth={1.2} fill="none" />
      <polyline points={pts([[x0 + 0.08, y1 - 0.5, zf + 0.01], [x1 - 0.08, y1 - 0.5, zf + 0.01]])} stroke={KADER} strokeWidth={1} fill="none" />
      <Blok x0={x0 - 0.07} x1={x1 + 0.07} y0={y0 - 0.1} y1={y0} z0={l + T} z1={l + T + 0.09} c={ARDUIN} />
    </g>
  );
  const raamX = (z0: number, z1: number, y0: number, y1: number, key: string) => (
    <g key={key}>
      <Poly v={[[xf, y0, z0], [xf, y1, z0], [xf, y1, z1], [xf, y0, z1]]} fill={KADER} stroke="#00000022" sw={0.4} />
      <Poly v={[[xf + 0.005, y0 + 0.08, z0 + 0.08], [xf + 0.005, y1 - 0.08, z0 + 0.08], [xf + 0.005, y1 - 0.08, z1 - 0.08], [xf + 0.005, y0 + 0.08, z1 - 0.08]]} fill={GLAS} stroke="none" />
      <polyline points={pts([[xf + 0.01, y1 - 0.45, z0 + 0.08], [xf + 0.01, y1 - 0.45, z1 - 0.08]])} stroke={KADER} strokeWidth={1} fill="none" />
      <Blok x0={w + T} x1={w + T + 0.09} y0={y0 - 0.1} y1={y0} z0={z0 - 0.07} z1={z1 + 0.07} c={ARDUIN} />
    </g>
  );

  /**
   * Ramen in de voorgevel, op hetzelfde kolomraster als de 3D-woning: de ramen
   * staan recht boven elkaar en zijn overal even breed. De deurkolom ligt vast
   * (gelijkvloers de voordeur, erboven een smal raam); de andere kolommen
   * verdelen de rest van de gevel gelijk.
   */
  const ramenZ = (yb: number, v: number) => {
    const deurKolom = voordeur && woning !== "appartement" ? voordeur : null;
    const n = w < 7 ? 2 : w < 9.5 ? 3 : 4;
    let kolommen: number[];
    let stap: number;
    if (deurKolom) {
      const links = deurKolom.van - 0.3, rechts = w - (deurKolom.tot + 0.3);
      const [s0, s1] = rechts >= links ? [deurKolom.tot + 0.3, w] : [0, deurKolom.van - 0.3];
      stap = (s1 - s0) / (n - 1);
      kolommen = Array.from({ length: n - 1 }, (_, i) => s0 + stap * (i + 0.5));
    } else {
      stap = w / n;
      kolommen = Array.from({ length: n }, (_, i) => stap * (i + 0.5));
    }
    const bw = Math.min(1.3, stap * 0.58);
    const ramen = kolommen.map((cx, i) => raamZ(cx - bw / 2, cx + bw / 2, yb + 0.75, yb + 2.3, `z${i}`));
    if (deurKolom && v > 0) {
      const dc = (deurKolom.van + deurKolom.tot) / 2, dw = Math.min(bw, deurKolom.tot - deurKolom.van + 0.12);
      ramen.push(raamZ(dc - dw / 2, dc + dw / 2, yb + 0.75, yb + 2.3, "zd"));
    }
    const deur = v === 0 ? deurKolom : null;
    if (!deur) return ramen;
    return [
      ...ramen,
      <g key="deur">
        <Poly v={[[deur.van - 0.06, yb, zf], [deur.tot + 0.06, yb, zf], [deur.tot + 0.06, yb + 2.3, zf], [deur.van - 0.06, yb + 2.3, zf]]} fill={KADER} stroke="#00000022" sw={0.4} />
        <Poly v={[[deur.van + 0.04, yb, zf + 0.005], [deur.tot - 0.04, yb, zf + 0.005], [deur.tot - 0.04, yb + 2.2, zf + 0.005], [deur.van + 0.04, yb + 2.2, zf + 0.005]]} fill="#3b2a22" stroke="none" />
        <Poly v={[[deur.van + 0.2, yb + 1.3, zf + 0.01], [deur.tot - 0.2, yb + 1.3, zf + 0.01], [deur.tot - 0.2, yb + 2.0, zf + 0.01], [deur.van + 0.2, yb + 2.0, zf + 0.01]]} fill={GLAS} stroke="none" />
        <Blok x0={deur.van - 0.15} x1={deur.tot + 0.15} y0={yb - SLAB} y1={yb - SLAB + 0.16} z0={l + T} z1={l + T + 0.4} c={ARDUIN} />
      </g>,
    ];
  };
  const ramenX = (yb: number) => {
    if (buren === 2) return null; // gemene muur aan de +x-kant
    const n = l > 10.5 ? 2 : 1;
    return Array.from({ length: n }, (_, i) => {
      const cz = (l * (i + 1)) / (n + 1);
      return raamX(cz - 0.45, cz + 0.45, yb + 0.9, yb + 2.3, `x${i}`);
    });
  };

  /* ── een gesloten bouwlaag ── */
  const geslotenLaag = (v: number) => {
    const yb = v * FH;
    return (
      <g key={`dicht-${v}`}>
        <Blok x0={-T} x1={w + T} y0={yb} y1={yb + SLAB} z0={-T} z1={l + T} c={vloerband(v)} />
        <Blok x0={-T} x1={w + T} y0={yb + SLAB} y1={yb + FH} z0={-T} z1={l + T} c={gevel} />
        {ramenZ(yb + SLAB, v)}
        {ramenX(yb + SLAB)}
      </g>
    );
  };

  /* ── de opengewerkte, actieve bouwlaag ── */
  const actieveLaag = (v: number) => {
    const yb = v * FH;
    const yf = yb + SLAB;
    const laagKamers = kamers.filter((k) => k.verdieping === v);
    const items: Tekenbaar[] = [];
    const wandH = HC + (H - HC) * (1 - o);

    // Binnenwanden langs de voor- en rechterrand van elke kamer, met een
    // deuropening in het midden. In stukjes, zodat ze netjes tussen de
    // toestellen gesorteerd worden.
    const laagOpeningen = openingen.filter((o) => o.verdieping === v);
    const laagTrappen = trappen.filter((t) => t.verdieping === v);
    const wand = (as: "x" | "z", vast: number, a0: number, a1: number, buiten: boolean, id: string) => {
      const hoogteVol = buiten ? HC : wandH;
      const dikte = buiten ? T : TI;
      const kleur: BlokKleur = buiten
        ? { top: SNEDE, px: gevel.px, pz: gevel.pz, stroke: "none" }
        : { top: SNEDE, px: materiaal.muur, pz: materiaal.muur, stroke: "none" };
      // Openingen uit het plan die op dit stuk wand liggen.
      const gaten = laagOpeningen
        .filter((o) => o.as === as && Math.abs(o.vast - vast) < 1e-6 && o.tot > a0 && o.van < a1)
        .sort((a, b) => a.van - b.van);
      // Vaste stukken = de wand min de gaten, elk in segmenten voor de tekenvolgorde.
      const vast_: [number, number][] = [];
      let c = a0;
      for (const g of gaten) {
        if (g.van > c) vast_.push([c, g.van]);
        c = Math.max(c, g.tot);
      }
      if (c < a1) vast_.push([c, a1]);
      // Langs de trap is de wand een borstwering: zo kijk je in de trapkoker.
      const laagTrap = laagTrappen.find((t) => !buiten && as === "x" && Math.abs(vast - (t.z + t.l + 0.05)) < 0.12);
      if (laagTrap) {
        const knip = [laagTrap.x, laagTrap.x + laagTrap.w];
        for (let i = vast_.length - 1; i >= 0; i--) {
          const [b0, b1] = vast_[i];
          const delen = [b0, ...knip.filter((k) => k > b0 + 0.02 && k < b1 - 0.02), b1];
          vast_.splice(i, 1, ...delen.slice(1).map((e, j) => [delen[j], e] as [number, number]));
        }
      }
      vast_.forEach(([b0, b1], j) => {
        const len = b1 - b0;
        if (len < 0.02) return;
        const borst = laagTrap && b0 >= laagTrap.x - 0.02 && b1 <= laagTrap.x + laagTrap.w + 0.02;
        const hoogte = borst ? 0.2 : hoogteVol;
        if (borst) {
          // Open leuning: handlijn op spijlen, je ziet de treden erdoor.
          const n = Math.max(2, Math.round(len / 0.45));
          for (let i = 0; i <= n; i++) {
            const x = Math.min(b0 + (len * i) / n, b1 - 0.04);
            items.push({ key: `${id}-spijl-${j}-${i}`, diepte: x + vast + 0.06, node: <Blok x0={x} x1={x + 0.04} y0={yf} y1={yf + 0.9} z0={vast - 0.02} z1={vast + 0.02} c={LEUNING} /> });
          }
          items.push({ key: `${id}-leuning-${j}`, diepte: b1 + vast + 0.07, node: <Blok x0={b0} x1={b1} y0={yf + 0.88} y1={yf + 0.94} z0={vast - 0.03} z1={vast + 0.03} c={LEUNING} /> });
        }
        const stukken = Math.max(1, Math.ceil(len / SEG));
        for (let i = 0; i < stukken; i++) {
          const s0 = b0 + (len * i) / stukken;
          const s1 = b0 + (len * (i + 1)) / stukken;
          const mid = (s0 + s1) / 2;
          const node =
            as === "x" ? (
              <Blok x0={s0} x1={s1} y0={yf} y1={yf + hoogte} z0={buiten ? vast : vast - dikte / 2} z1={buiten ? vast + dikte : vast + dikte / 2} c={kleur} />
            ) : (
              <Blok x0={buiten ? vast : vast - dikte / 2} x1={buiten ? vast + dikte : vast + dikte / 2} y0={yf} y1={yf + hoogte} z0={s0} z1={s1} c={kleur} />
            );
          items.push({ key: `${id}-${j}-${i}`, diepte: mid + vast + 0.05, node });
        }
      });
      // Deurblad: open, haaks op de wand, scharnier aan het begin van het gat.
      gaten.filter((g) => g.soort === "deur").forEach((g, i) => {
        const blad = Math.min(0.85, g.tot - g.van);
        const hb = Math.min(2.05, hoogteVol);
        const node =
          as === "x" ? (
            <Blok x0={g.van} x1={g.van + 0.05} y0={yf} y1={yf + hb} z0={g.kant > 0 ? vast : vast - blad} z1={g.kant > 0 ? vast + blad : vast} c={DEURBLAD} />
          ) : (
            <Blok x0={g.kant > 0 ? vast : vast - blad} x1={g.kant > 0 ? vast + blad : vast} y0={yf} y1={yf + hb} z0={g.van} z1={g.van + 0.05} c={DEURBLAD} />
          );
        items.push({ key: `${id}-blad-${i}`, diepte: g.van + vast + g.kant * blad * 0.5 + 0.06, node });
      });
    };

    laagKamers.forEach((k) => {
      const front = k.z + k.l, rechts = k.x + k.w;
      wand("x", front, k.x, rechts, front >= l - 1e-6, `${k.id}-f`);
      wand("z", rechts, k.z, front, rechts >= w - 1e-6, `${k.id}-r`);
    });

    // Trap: de treden tot de snijhoogte als blokken, de rest als lijnen op de
    // vloer — zoals een trap op een bouwplan doorgesneden wordt.
    trappen
      .filter((t) => t.verdieping === v)
      .forEach((t, ti) => {
        if (!t.op) {
          // Trapgat: de trap van de laag eronder loopt zichtbaar naar beneden,
          // geknipt op de opening, met een leuning langs de overloop.
          const treden = 13;
          const aan = t.w / treden;
          const op = FH / treden;
          const gat: [number, number, number][] = [[t.x, yf + 0.01, t.z], [t.x + t.w, yf + 0.01, t.z], [t.x + t.w, yf + 0.01, t.z + t.l], [t.x, yf + 0.01, t.z + t.l]];
          const clip = `${uid}-gat-${v}-${ti}`;
          const spijlen = Math.max(3, Math.round(t.w / 0.5));
          items.push({
            key: `trapgat-${ti}`,
            diepte: t.x + t.z + 0.01,
            node: (
              <g>
                <clipPath id={clip}><polygon points={pts(gat)} /></clipPath>
                <Poly v={gat} fill="#2a2321" stroke="none" />
                <g clipPath={`url(#${clip})`}>
                  {Array.from({ length: treden }, (_, i) => {
                    const top = yf - FH + op * (i + 1);
                    const x0 = t.x + aan * i;
                    return <Blok key={i} x0={x0} x1={t.x + t.w} y0={top - op} y1={top} z0={t.z} z1={t.z + t.l} c={TREDE} />;
                  })}
                </g>
                <Blok x0={t.x} x1={t.x + t.w} y0={yf + 0.86} y1={yf + 0.92} z0={t.z + t.l - 0.05} z1={t.z + t.l} c={LEUNING} />
                {Array.from({ length: spijlen + 1 }, (_, i) => {
                  const x = t.x + (t.w * i) / spijlen;
                  return <Blok key={`s${i}`} x0={Math.min(x, t.x + t.w - 0.04)} x1={Math.min(x + 0.04, t.x + t.w)} y0={yf} y1={yf + 0.86} z0={t.z + t.l - 0.04} z1={t.z + t.l} c={LEUNING} />;
                })}
                <Blok x0={t.x} x1={t.x + 0.05} y0={yf} y1={yf + 0.92} z0={t.z} z1={t.z + t.l} c={LEUNING} />
              </g>
            ),
          });
          return;
        }
        const treden = 13;
        const aan = t.w / treden;
        const op = FH / treden;
        for (let i = 0; i < treden; i++) {
          const top = op * (i + 1);
          const x0 = t.x + aan * i;
          if (top <= Math.min(HC, wandH) + 0.01) {
            items.push({ key: `trede-${ti}-${i}`, diepte: x0 + t.z + 0.02, node: <Blok x0={x0} x1={t.x + t.w} y0={yf + top - op} y1={yf + top} z0={t.z} z1={t.z + t.l} c={TREDE} /> });
          } else {
            items.push({ key: `trede-${ti}-${i}`, diepte: x0 + t.z, node: <polyline points={pts([[x0, yf + 0.005, t.z], [x0, yf + 0.005, t.z + t.l]])} stroke="#00000040" strokeWidth={0.6} fill="none" /> });
          }
        }
      });

    plaatsingen
      .filter((p) => laagKamers.some((k) => k.id === p.kamer))
      .forEach((p, i) => {
        const k = laagKamers.find((kk) => kk.id === p.kamer)!;
        const x = k.x + p.x, z = k.z + p.z;
        items.push({
          key: `t-${p.k}-${i}`,
          diepte: x + z,
          node: <Toestel k={p.k} x={x} y={yf} z={z} n={p.n + i} werkend={werkend && !reduced} uid={uid} />,
        });
      });

    items.sort((a, b) => a.diepte - b.diepte);

    const vochtStijl = {
      ["--v" as string]: String(materiaal.vocht * 0.7),
      animationDuration: `${cyclus}s`,
    } as React.CSSProperties;
    const droogKlasse = werkend && !reduced ? "ds-vocht ds-droogt" : "ds-vocht";

    return (
      <g key={`open-${v}`}>
        <Blok x0={-T} x1={w + T} y0={yb} y1={yf} z0={-T} z1={l + T} c={vloerband(v)} />
        {/* achtermuren, volle hoogte */}
        <Blok x0={-T} x1={w} y0={yf} y1={yf + H} z0={-T} z1={0} c={{ top: SNEDE, px: gevel.px, pz: materiaal.muur, stroke: "#00000033" }} />
        <Blok x0={-T} x1={0} y0={yf} y1={yf + H} z0={0} z1={l} c={{ top: SNEDE, px: materiaal.muur, pz: gevel.pz, stroke: "#00000033" }} />
        {materiaal.muurNat && (
          <g className={droogKlasse} style={vochtStijl}>
            <Poly v={[[0, yf, 0.001], [w, yf, 0.001], [w, yf + H, 0.001], [0, yf + H, 0.001]]} fill={`url(#${uid}-natmuur)`} stroke="none" />
            <Poly v={[[0.001, yf, 0], [0.001, yf + H, 0], [0.001, yf + H, l], [0.001, yf, l]]} fill={`url(#${uid}-natmuur)`} stroke="none" />
          </g>
        )}
        {/* vloeren */}
        {laagKamers.map((k) => (
          <g key={`v-${k.id}`}>
            <Poly v={[[k.x, yf, k.z], [k.x + k.w, yf, k.z], [k.x + k.w, yf, k.z + k.l], [k.x, yf, k.z + k.l]]} fill={materiaal.vloer} stroke="#00000018" opacity={k.soort === "circulatie" ? 0.8 : 1} />
            {materiaal.parket &&
              Array.from({ length: Math.floor(k.w / 0.6) }, (_, i) => (
                <polyline key={i} points={pts([[k.x + (i + 1) * 0.6, yf, k.z], [k.x + (i + 1) * 0.6, yf, k.z + k.l]])} stroke="#00000014" strokeWidth={0.5} fill="none" />
              ))}
          </g>
        ))}
        {materiaal.vloerNat && (
          <g className={droogKlasse} style={vochtStijl}>
            {laagKamers.map((k) => (
              <Poly key={k.id} v={[[k.x, yf + 0.002, k.z], [k.x + k.w, yf + 0.002, k.z], [k.x + k.w, yf + 0.002, k.z + k.l], [k.x, yf + 0.002, k.z + k.l]]} fill={`url(#${uid}-natvloer)`} stroke="none" />
            ))}
          </g>
        )}
        {werkend && !reduced && <Luchtstroom kamers={laagKamers} plaatsingen={plaatsingen} yf={yf} />}
        {werkend && !reduced && <Druppels kamers={laagKamers} plaatsingen={plaatsingen} yf={yf} vocht={materiaal.vocht} />}
        {items.map((it) => (
          <g key={it.key}>{it.node}</g>
        ))}
        {!mini && o > 0.01 &&
          laagKamers.map((k) => {
            const [tx, ty] = P([k.x + k.w * 0.5, yf + HC + 0.15, k.z + k.l * 0.5]);
            return (
              <text key={`l-${k.id}`} x={tx} y={ty} className={`ds-kamerlabel${k.soort === "circulatie" ? " ds-kamerlabel--gang" : ""}`} textAnchor="middle" style={{ opacity: o }}>
                {k.naam.toUpperCase()}
              </text>
            );
          })}
        {/* bovenste deel van de voorgevels: verdwijnt bij openwerken */}
        <g style={{ opacity: 1 - o }} pointerEvents="none">
          <Blok x0={0} x1={w + T} y0={yf + HC} y1={yf + H} z0={l} z1={l + T} c={gevel} />
          <Blok x0={w} x1={w + T} y0={yf + HC} y1={yf + H} z0={-T} z1={l} c={gevel} />
          {ramenZ(yf, v)}
          {ramenX(yf)}
        </g>
      </g>
    );
  };

  /* ── dak ── */
  const dakNode = () => {
    const y = daktop, ov = 0.35;
    if (dak === "plat") {
      return (
        <g>
          <Blok x0={-T - 0.1} x1={w + T + 0.1} y0={y} y1={y + 0.42} z0={-T - 0.1} z1={l + T + 0.1} c={{ top: "#77716c", px: "#8d9499", pz: "#a3a9ad", stroke: "#00000033" }} />
          <Poly v={[[0.2, y + 0.43, 0.2], [w - 0.2, y + 0.43, 0.2], [w - 0.2, y + 0.43, l - 0.2], [0.2, y + 0.43, l - 0.2]]} fill={`url(#${uid}-grind)`} stroke="none" />
        </g>
      );
    }
    if (dak === "lessenaar") {
      const hb = nok, hf = 0.45;
      return (
        <g>
          <Poly v={[[w + T, y, -T], [w + T, y + hb, -T], [w + T, y + hf, l + T], [w + T, y, l + T]]} fill={gevel.px} />
          <Poly v={[[-T - ov, y + hb + 0.05, -T - ov], [w + T + ov, y + hb + 0.05, -T - ov], [w + T + ov, y + hf - 0.05, l + T + ov], [-T - ov, y + hf - 0.05, l + T + ov]]} fill={DAK.licht} stroke={DAK.lijn} />
          <Poly v={[[-T - ov, y + hf - 0.05, l + T + ov], [w + T + ov, y + hf - 0.05, l + T + ov], [w + T + ov, y + hf - 0.2, l + T + ov], [-T - ov, y + hf - 0.2, l + T + ov]]} fill={DAK.zink} />
        </g>
      );
    }
    const mz = l / 2;
    const pannen = 6;
    return (
      <g>
        <Poly v={[[-T - ov, y - 0.05, -T - ov], [w + T + ov, y - 0.05, -T - ov], [w + T + ov, y + nok, mz], [-T - ov, y + nok, mz]]} fill={DAK.vlak} stroke={DAK.lijn} />
        {/* schoorsteen op het achterste dakvlak, de nok verbergt zijn voet */}
        {!mini && (
          <>
            <Blok x0={w * 0.68} x1={w * 0.68 + 0.6} y0={y + nok * 0.55} y1={y + nok + 0.75} z0={mz - 1.3} z1={mz - 0.7} c={{ top: "#7a3a28", px: gevel.px, pz: gevel.pz, stroke: "#00000033" }} />
            <Blok x0={w * 0.68 - 0.06} x1={w * 0.68 + 0.66} y0={y + nok + 0.75} y1={y + nok + 0.85} z0={mz - 1.36} z1={mz - 0.64} c={ARDUIN} />
          </>
        )}
        <Poly v={[[w + T, y, -T], [w + T, y + nok * ((mz + T) / (mz + T + ov)), mz], [w + T, y, l + T]]} fill={gevel.px} />
        <Poly v={[[-T - ov, y + nok, mz], [w + T + ov, y + nok, mz], [w + T + ov, y - 0.05, l + T + ov], [-T - ov, y - 0.05, l + T + ov]]} fill={DAK.licht} stroke={DAK.lijn} />
        {Array.from({ length: pannen }, (_, i) => {
          const f = (i + 1) / (pannen + 1);
          const zz = mz + (l + T + ov - mz) * f, yy = y + nok - (nok + 0.05) * f;
          return <polyline key={i} points={pts([[-T - ov, yy, zz], [w + T + ov, yy, zz]])} stroke={DAK.lijn} strokeWidth={0.6} fill="none" opacity={0.6} />;
        })}
        {/* nokpannen en zinken goot */}
        <polyline points={pts([[-T - ov, y + nok, mz], [w + T + ov, y + nok, mz]])} stroke={DAK.lijn} strokeWidth={2} fill="none" />
        <polyline points={pts([[-T - ov, y - 0.12, l + T + ov], [w + T + ov, y - 0.12, l + T + ov]])} stroke={DAK.zink} strokeWidth={2.4} fill="none" />
      </g>
    );
  };

  /* ── appartement: het gebouw eronder als contour ── */
  const gebouwOnder =
    woning === "appartement" ? (
      <g className="ds-buur">
        <Poly v={[[-T, -2 * FH, l + T], [w + T, -2 * FH, l + T], [w + T, 0, l + T], [-T, 0, l + T]]} fill="#00000005" stroke="#8a827888" />
        <Poly v={[[w + T, -2 * FH, -T], [w + T, 0, -T], [w + T, 0, l + T], [w + T, -2 * FH, l + T]]} fill="#00000004" stroke="#8a827888" />
      </g>
    ) : null;

  const [g0x, g0y] = P([w / 2, 0, l / 2]);

  return (
    <svg
      className={`ds-iso${mini ? " ds-iso--mini" : ""}${className ? ` ${className}` : ""}`}
      viewBox={viewBox}
      role="img"
      aria-label={`Isometrische tekening van een ${WONING[woning].label.toLowerCase()} met ${lagen} bouwla${lagen === 1 ? "ag" : "gen"}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={`${uid}-natmuur`} x1="0" y1="1" x2="0" y2="0">
          {/* Zelfde egale, iets donkerdere toon als de 3D: nat materiaal, geen blauwe sluier. */}
          <stop offset="0" stopColor="#3c4042" stopOpacity="0.3" />
          <stop offset="1" stopColor="#3c4042" stopOpacity="0.3" />
        </linearGradient>
        <radialGradient id={`${uid}-natvloer`} cx="50%" cy="55%" r="65%">
          <stop offset="0" stopColor="#3c4042" stopOpacity="0.34" />
          <stop offset="1" stopColor="#3c4042" stopOpacity="0.34" />
        </radialGradient>
        <linearGradient id={`${uid}-gloed`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#ff7a1a" />
          <stop offset="1" stopColor="#c8102e" />
        </linearGradient>
        {/* baksteen in halfsteens verband, scheefgetrokken met het gevelvlak mee */}
        {([["bz", 30, "#b05a3d", "#9b4a31"], ["bx", -30, "#94452e", "#833c27"]] as const).map(([id, hoek, steen, donker]) => (
          <pattern key={id} id={`${uid}-${id}`} width="6.4" height="4.4" patternUnits="userSpaceOnUse" patternTransform={`skewY(${hoek})`}>
            <rect width="6.4" height="4.4" fill={steen} />
            <rect x="3.3" y="0.15" width="2.9" height="1.9" fill={donker} opacity="0.55" />
            <rect x="0.15" y="2.35" width="2.9" height="1.9" fill={donker} opacity="0.35" />
            <path d="M0 0.05H6.4M0 2.25H6.4M0.05 0V2.2M3.25 2.2V4.4" stroke="#e7d8c6" strokeOpacity="0.6" strokeWidth="0.32" fill="none" />
          </pattern>
        ))}
        <pattern id={`${uid}-grind`} width="3" height="3" patternUnits="userSpaceOnUse">
          <rect width="3" height="3" fill="#8a847e" />
          <circle cx="1" cy="1" r="0.5" fill="#a29b94" />
        </pattern>
      </defs>

      {/* schaduw op het papier */}
      <ellipse cx={g0x + 8} cy={g0y + 10} rx={(w + l) * S * 0.62} ry={(w + l) * S * 0.2} fill="#5a3a2a" opacity={mini ? 0.06 : 0.08} />

      <g style={{ opacity: 1 - o }}>
        {buren >= 1 && buurBlok(-6, -T)}
        {buren === 2 && buurBlok(w + T, w + T + 6)}
        {gebouwOnder}
      </g>

      {Array.from({ length: lagen }, (_, v) => {
        if (v < act) return geslotenLaag(v);
        // Zonder kamers (de keuzekaartjes) valt er niets open te werken.
        if (v === act) return kamers.some((k) => k.verdieping === v) ? actieveLaag(v) : geslotenLaag(v);
        return (
          <g key={`boven-${v}`} style={{ transform: `translate(0px, ${-lift}px)`, opacity: 1 - o }} pointerEvents="none">
            {geslotenLaag(v)}
          </g>
        );
      })}
      <g style={{ transform: `translate(0px, ${-lift * 1.3}px)`, opacity: 1 - o }} pointerEvents="none">
        {dakNode()}
      </g>
    </svg>
  );
}

/* ─────────────────────────── animaties ─────────────────────────── */

/** Lucht van elke ventilator over de vloer, in de richting waarin hij blaast (+z). */
function Luchtstroom({ kamers, plaatsingen, yf }: { kamers: Kamer[]; plaatsingen: Plaatsing[]; yf: number }) {
  return (
    <g className="ds-lucht" pointerEvents="none">
      {plaatsingen
        .filter((p) => p.k === "axiaal")
        .map((p, i) => {
          const k = kamers.find((kk) => kk.id === p.kamer);
          if (!k) return null;
          const x = k.x + p.x, z = k.z + p.z;
          const rest = Math.max(1.2, k.z + k.l - z - 0.3);
          return [-0.25, 0, 0.25].map((dx, j) => {
            const a = P([x + dx, yf + 0.35, z + 0.25]);
            const b = P([x + dx * 3, yf + 0.25, z + rest * 0.5]);
            const c = P([x + dx * 5, yf + 0.1, z + rest]);
            return (
              <path
                key={`${i}-${j}`}
                d={`M${a[0].toFixed(1)} ${a[1].toFixed(1)} Q${b[0].toFixed(1)} ${b[1].toFixed(1)} ${c[0].toFixed(1)} ${c[1].toFixed(1)}`}
                style={{ animationDelay: `${-j * 0.3}s` }}
              />
            );
          });
        })}
    </g>
  );
}

/**
 * Vochtdeeltjes die uit muren en vloer opstijgen en naar de dichtstbijzijnde
 * droger drijven. Posities zijn deterministisch (geen Math.random): de pagina
 * wordt geprerenderd, en client en server moeten dezelfde SVG opleveren.
 */
function Druppels({ kamers, plaatsingen, yf, vocht }: { kamers: Kamer[]; plaatsingen: Plaatsing[]; yf: number; vocht: number }) {
  if (vocht <= 0) return null;
  const drogers = plaatsingen.filter((p) => p.k === "small" || p.k === "medium");
  return (
    <g className="ds-druppels" pointerEvents="none">
      {drogers.flatMap((p, i) => {
        const k = kamers.find((kk) => kk.id === p.kamer);
        if (!k) return [];
        const doel = P([k.x + p.x, yf + 0.8, k.z + p.z]);
        const n = Math.max(3, Math.round(6 * vocht));
        return Array.from({ length: n }, (_, j) => {
          const f = ((j * 0.618 + i * 0.31) % 1);
          const g = ((j * 0.382 + i * 0.17) % 1);
          // Om en om van de vloer en van de muur aan de achterkant van de kamer.
          const start: V3 = j % 2 === 0
            ? [k.x + 0.3 + f * (k.w - 0.6), yf + 0.05, k.z + 0.3 + g * (k.l - 0.6)]
            : [k.x + 0.2 + f * (k.w - 0.4), yf + 0.5 + g * 1.6, k.z + 0.05];
          const s = P(start);
          return (
            <circle
              key={`${i}-${j}`}
              cx={s[0]}
              cy={s[1]}
              r={1.7}
              style={{
                ["--dx" as string]: `${(doel[0] - s[0]).toFixed(1)}px`,
                ["--dy" as string]: `${(doel[1] - s[1]).toFixed(1)}px`,
                animationDelay: `${-(j * 0.47 + i * 0.29) % 2.8}s`,
              }}
            />
          );
        });
      })}
    </g>
  );
}

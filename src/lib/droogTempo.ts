/**
 * Dimensioning by drying tempo: how many devices for "snel", "gemiddeld" or
 * "rustig", and what that costs.
 *
 * Ported from the rekenmodel in the Vernast Droogcatalogus (artifact
 * XvgTeexMxAGLEdhJJ6B8x4, section Calculator): water load from layer
 * thickness, device output corrected for temperature and humidity, a diffusion
 * floor the material sets, and a tempo that is a WINDOW in days. The set of
 * driers is the smallest one whose drying time lands inside that window.
 *
 * Prices are the role prices from the tariff list (CAT[k].w2, per two weeks)
 * times the week multiplier. The tariff list stops at four weeks; 5–8 use the
 * multipliers the catalogue proposes.
 */
// Relative, like everything in src/lib: api/ runs outside the Vite alias.
import { CAT, WEEKS, type DeviceKey } from "../data/verhuur.js";

export type Tempo = "snel" | "gemiddeld" | "traag";

export const TEMPO: Record<Tempo, { label: string; min: number; max: number; tekst: string; uitleg: string }> = {
  snel: { label: "Snel", min: 14, max: 21, tekst: "2 – 3 weken", uitleg: "Meer toestellen, zo snel als het materiaal toelaat." },
  gemiddeld: { label: "Gemiddeld", min: 28, max: 35, tekst: "4 – 5 weken", uitleg: "Minder toestellen, ruim genoeg voor de meeste nieuwbouw." },
  traag: { label: "Rustig", min: 42, max: 56, tekst: "6 – 8 weken", uitleg: "Zo weinig toestellen als mogelijk. Het goedkoopst." },
};
export const TEMPO_ORDER: Tempo[] = ["snel", "gemiddeld", "traag"];

/** Week multiplier: tariff list for 1–4 weeks, catalogue proposal for 5–8. */
const VOORGESTELD: Record<number, number> = { 5: 1.85, 6: 2.05, 7: 2.22, 8: 2.37 };
export function staffel(weken: number): number {
  return WEEKS[weken] ?? VOORGESTELD[weken] ?? weken / 2;
}

const TOESTEL = {
  small: { nominaal: 35.5 },
  medium: { nominaal: 63.5 },
} as const;
/** litres of water per m² per cm of layer */
const WATER_PER_CM = { chape: 1.0, pleister: 0.45 };
const MAX_DAGEN = 112;

export type WoningType = "rijwoning" | "halfopen" | "open" | "appartement";
const WANDFACTOR: Record<WoningType, number> = { appartement: 0.72, rijwoning: 0.76, halfopen: 0.88, open: 1 };
export const PLAFONDHOOGTE: Record<WoningType, number> = { appartement: 2.6, rijwoning: 2.6, halfopen: 2.6, open: 2.7 };

const KLIMAAT = { verwarmd: { temp: 20, rv: 60 }, kachels: { temp: 22, rv: 60 } } as const;

export interface TempoInvoer {
  type: WoningType;
  /** floor area in m² */
  opp: number;
  verd: number;
  /** rooms in total */
  ruim: number;
  wat: "pleister" | "chape" | "beide";
  /** layer thickness in cm */
  cd: number;
  pd: number;
  /** true = the client heats himself; false = our heaters go in the package */
  verwarmt: boolean;
  tempo: Tempo;
}

export interface TempoUitkomst {
  items: { k: DeviceKey; q: number }[];
  dagen: number;
  weken: number;
  prijs: number;
  /** litres per 24 h, effective on site */
  capaciteit: number;
  water: number;
  /** the window was faster than the material allows */
  teSnel: boolean;
}

function lees(tab: [number, number][], x: number): number {
  if (x <= tab[0][0]) return tab[0][1];
  if (x >= tab[tab.length - 1][0]) return tab[tab.length - 1][1];
  for (let i = 1; i < tab.length; i++) {
    const [x0, y0] = tab[i - 1], [x1, y1] = tab[i];
    if (x <= x1) return y0 + ((y1 - y0) * (x - x0)) / (x1 - x0);
  }
  return 1;
}

/** Share of the nominal output a drier reaches at this temperature and humidity. */
function rendement(t: number, rv: number): number {
  const fT: [number, number][] = [[5, 0.18], [10, 0.33], [15, 0.5], [20, 0.68], [25, 0.84], [30, 1], [35, 1.08]];
  const gRV: [number, number][] = [[40, 0.34], [50, 0.48], [60, 0.65], [70, 0.82], [80, 1], [90, 1.15]];
  return Math.max(0.1, Math.min(1.2, lees(fT, t) * lees(gRV, rv)));
}

/** Days the material needs at minimum, however many driers stand there. */
function diffusie(soort: "chape" | "pleister", cm: number): number {
  if (soort === "chape") return cm <= 5 ? 14 : 14 + (cm - 5) * 7;
  return Math.max(7, cm * 7);
}

/** m² of plaster per m² of floor: outer walls, inner walls both sides, ceilings. */
function pleisterFactor(s: TempoInvoer, hoog: number): number {
  const perVerd = s.opp / s.verd;
  const omtrek = 4.1 * Math.sqrt(perVerd) * WANDFACTOR[s.type];
  const buiten = omtrek * hoog * s.verd;
  const rpv = Math.max(1, s.ruim / s.verd);
  const binnenL = Math.max(0, rpv - 1) * Math.sqrt(perVerd / rpv) * 1.15;
  const binnen = binnenL * hoog * 2 * s.verd;
  return ((buiten + binnen) * 0.88 + s.opp) / s.opp;
}

export function droogTempo(s: TempoInvoer): TempoUitkomst {
  const hoog = PLAFONDHOOGTE[s.type];
  const cd = s.wat === "chape" || s.wat === "beide" ? s.cd : 0;
  const pd = s.wat === "pleister" || s.wat === "beide" ? s.pd : 0;

  const pleisterOpp = pd > 0 ? Math.round(s.opp * pleisterFactor(s, hoog)) : 0;
  const water = Math.round((cd > 0 ? s.opp * cd * WATER_PER_CM.chape : 0) + pleisterOpp * pd * WATER_PER_CM.pleister);

  const marge = pd > 0 ? 7 : 0;
  const diff = marge + Math.max(cd > 0 ? diffusie("chape", cd) : 0, pd > 0 ? diffusie("pleister", pd) : 0);

  const kl = s.verwarmt ? KLIMAAT.verwarmd : KLIMAAT.kachels;
  const rend = rendement(kl.temp, kl.rv);
  const effS = TOESTEL.small.nominaal * rend;
  const effM = TOESTEL.medium.nominaal * rend;

  const band = TEMPO[s.tempo];
  const bandOnhaalbaar = diff > band.max;

  // Fans and heaters belong to the job, not to the tempo: two fans per three rooms.
  const nV = Math.max(s.verd, Math.ceil(s.opp / 50), Math.ceil((s.ruim * 2) / 3));
  const nK = s.verwarmt ? 0 : Math.max(1, Math.round((s.opp * hoog) / 160));
  // The catalogue also caps the set by the site's power supply. The simulator
  // does not ask for it, so that cap is left out here; the quote checks it.

  type K = { nS: number; nM: number; cap: number; dagen: number; prijs: number; past: boolean; inBand: boolean };
  const kandidaten: K[] = [];
  for (let a = 0; a <= 10; a++) {
    for (let m = 0; m <= 10; m++) {
      if (a + m === 0) continue;
      const cap = a * effS + m * effM;
      const dagen = Math.max(diff, Math.ceil(water / cap));
      const wk = Math.max(1, Math.ceil(dagen / 7));
      kandidaten.push({
        nS: a,
        nM: m,
        cap,
        dagen,
        prijs: (a * CAT.small.w2 + m * CAT.medium.w2) * staffel(wk),
        past: true,
        inBand: dagen >= band.min && dagen <= band.max,
      });
    }
  }
  // Fewest devices first, then the cheapest, then small before medium.
  const rangschik = (l: K[]) => [...l].sort((x, y) => x.nS + x.nM - (y.nS + y.nM) || x.prijs - y.prijs || x.nS - y.nS);

  const past = kandidaten.filter((k) => k.past);
  const inBand = rangschik(past.filter((k) => k.inBand));
  const snelste = past.length ? Math.min(...past.map((k) => k.dagen)) : 0;
  const traagste = past.length ? Math.max(...past.map((k) => k.dagen)) : 0;
  // Nothing in the window: asked too fast → the fastest set that exists;
  // asked too slow (even one drier is done early) → the slowest, cheapest set.
  const teTraag = !bandOnhaalbaar && past.length > 0 && traagste < band.min;
  const terugval = bandOnhaalbaar
    ? rangschik(past.filter((k) => k.dagen === snelste))
    : teTraag
      ? rangschik(past.filter((k) => k.dagen === traagste))
      : rangschik(past);
  const gekozen = inBand[0] ?? terugval[0] ?? rangschik(kandidaten)[0];

  const dagen = Math.min(gekozen.dagen, MAX_DAGEN);
  const weken = Math.max(1, Math.ceil(dagen / 7));
  const items = (
    [
      { k: "small", q: gekozen.nS },
      { k: "medium", q: gekozen.nM },
      { k: "axiaal", q: nV },
      { k: "kachel", q: nK },
    ] as { k: DeviceKey; q: number }[]
  ).filter((it) => it.q > 0);
  const basis = items.reduce((som, it) => som + CAT[it.k].w2 * it.q, 0);

  return {
    items,
    dagen,
    weken,
    prijs: Math.round(basis * staffel(weken) * 100) / 100,
    capaciteit: Math.round(gekozen.cap),
    water,
    teSnel: bandOnhaalbaar,
  };
}

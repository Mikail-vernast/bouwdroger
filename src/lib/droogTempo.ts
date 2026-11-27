/**
 * Hoeveel toestellen een woning nodig heeft, en wat dat kost.
 *
 * Waterlast uit de laagdikte, toestelopbrengst gecorrigeerd voor temperatuur en
 * luchtvochtigheid, en een diffusievloer die het materiaal zet. Het materiaal
 * bepaalt de termijn — niet de klant.
 *
 * De keuze tussen "snel", "gemiddeld" en "rustig" is er op 26-11-2026 uit. Ze
 * werd al niet meer gevraagd, maar stond nog overal: het venster bepaalde welke
 * set gekozen werd, en bij "snel" kwam er een droger bij. Op 200 m² gaven alle
 * drie dezelfde uitkomst, dus het venster koos in de praktijk niets — het
 * verhulde alleen dat de set op liters alleen gekozen werd.
 *
 * NOG TE DOEN: de dekkingsregel. Een droger ontvochtigt alleen de lucht die hij
 * rondpompt, en dit bestand eist daar niets over — vandaar één droger voor
 * 200 m² over twee verdiepingen. De regel is `luchtdebiet ÷ 3` per toestel
 * (drie luchtwissels per uur), per bouwlaag toegepast; ze reproduceert de
 * pakketten in de catalogus. Zolang ze hier niet staat, is `items` niet
 * bruikbaar om een pakket mee samen te stellen; `water` is dat wel.
 *
 * Prijzen zijn de rolprijzen uit de tarieflijst (CAT[k].w2, per twee weken)
 * maal de weekstaffel. Die lijst stopt bij vier weken; 5 – 8 gebruiken de
 * vermenigvuldigers die de catalogus voorstelt.
 */
// Relative, like everything in src/lib: api/ runs outside the Vite alias.
import { CAT, WEEKS, type DeviceKey } from "../data/verhuur.js";

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
}

export interface TempoUitkomst {
  items: { k: DeviceKey; q: number }[];
  dagen: number;
  weken: number;
  prijs: number;
  /** litres per 24 h, effective on site */
  capaciteit: number;
  water: number;
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

  // Fans and heaters belong to the job, not to the set of driers: two fans per three rooms.
  const nV = Math.max(s.verd, Math.ceil(s.opp / 50), Math.ceil((s.ruim * 2) / 3));
  const nK = s.verwarmt ? 0 : Math.max(1, Math.round((s.opp * hoog) / 160));
  // The catalogue also caps the set by the site's power supply. The simulator
  // does not ask for it, so that cap is left out here; the quote checks it.

  type K = { nS: number; nM: number; cap: number; dagen: number; prijs: number };
  const kandidaten: K[] = [];
  for (let a = 0; a <= 10; a++) {
    for (let m = 0; m <= 10; m++) {
      if (a + m === 0) continue;
      const cap = a * effS + m * effM;
      const dagen = Math.max(diff, Math.ceil(water / cap));
      const wk = Math.max(1, Math.ceil(dagen / 7));
      kandidaten.push({ nS: a, nM: m, cap, dagen, prijs: (a * CAT.small.w2 + m * CAT.medium.w2) * staffel(wk) });
    }
  }

  // Het materiaal is het doel, niet een venster dat de klant koos: de set hoort
  // het water weg te krijgen binnen de diffusietijd. Sneller heeft geen zin —
  // het materiaal geeft zijn vocht niet rapper af — en trager is alleen duurder
  // doordat de huur langer loopt.
  const haalt = kandidaten.filter((k) => k.dagen <= diff);
  // Goedkoopst, dan de minste toestellen. Dit is nog niet de verdeling uit de
  // dekkingsregel; zie de kop van dit bestand.
  const rangschik = (l: K[]) => [...l].sort((x, y) => x.prijs - y.prijs || x.nS + x.nM - (y.nS + y.nM) || x.nS - y.nS);
  // Te veel water voor elke set: dan de snelste die bestaat.
  const snelste = Math.min(...kandidaten.map((k) => k.dagen));
  const gekozen = rangschik(haalt)[0] ?? rangschik(kandidaten.filter((k) => k.dagen === snelste))[0];

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
  };
}

/**
 * Rekenregels van de droogsimulator (/verhuur/simulator).
 *
 * De simulator stelt andere vragen dan de calculator — woningtype, verdiepingen,
 * dak, bouwfase — maar komt uit op exact dezelfde `PackageConfig`. Prijs,
 * toestellen en droogtijd komen daarna uit `verhuur.ts`, dus uit de catalogus.
 * Niets in dit bestand verzint een bedrag of een aantal toestellen: de woning,
 * de kamers en de fase bepalen alleen hoe het pakket getoond wordt en welk
 * advies erbij hoort.
 */
// Relatief met .js, zoals alles in src/lib: api/ draait buiten de Vite-alias.
/**
 * Rekenregels van de droogsimulator (/verhuur/simulator).
 *
 * De simulator stelt andere vragen dan de calculator — woningtype, verdiepingen,
 * dak, bouwfase — maar komt uit op exact dezelfde `PackageConfig`. Prijs,
 * toestellen en droogtijd komen daarna uit `verhuur.ts`, dus uit de catalogus.
 * Niets in dit bestand verzint een bedrag of een aantal toestellen: de woning,
 * de kamers en de fase bepalen alleen hoe het pakket getoond wordt en welk
 * advies erbij hoort.
 */
// Relatief met .js, zoals alles in src/lib: api/ draait buiten de Vite-alias.
import {
  CD_VALUES,
  DEFAULT_CD,
  DEFAULT_PD,
  PD_VALUES,
  SIZE_VALUES,
  baseItems,
  configPrice,
  configWeeks,
  dryingDays,
  totalAirflow,
  totalCapacity,
  type PackageConfig,
  type PackageItem,
} from "./verhuur.js";
import { droogTempo } from "./droogTempo.js";
import type { Taal } from "../i18n/taal.js";
// The house itself (types, footprints, floor plans, devices per room) lives in src/huis3d/woning.ts,
// shared with the damp simulator in Vernast-v2.0. This file only adds the rental and pricing rules.
export * from "../huis3d/woning.js";
import {
  BREEDTES,
  Dak,
  Fase,
  MAX_KAMERS,
  MAX_VERDIEPINGEN,
  MIN_KAMERS,
  WONING,
  Wat,
  Woning,
} from "../huis3d/woning.js";

/** Natte laag (cm) waarmee de film het water in een ruwbouw schat: los van elke gekozen chapedikte. */
const WATERSCHADE_CM = 2;

export interface SimAnswers {
  woning: Woning;
  verdiepingen: number;
  dak: Dak;
  /** m² zoals de catalogus ze kent, of "custom" boven de grootste stand */
  size: string;
  wat: Wat;
  pd: string;
  cd: string;
  fase: Fase;
  /** true = er wordt al verwarmd, dus geen kachels in het pakket */
  verwarmt: boolean;
  /** rooms in total, from the floor plan; drives fans and inner-wall plaster */
  ruimtes?: number;
}

/**
 * De gevelbreedte bij een vloeroppervlakte. De geschatte oppervlakte van de
 * woning (`geschatteOppervlakte`, de stand waar de schuif begint) krijgt de
 * standaardbreedte `WONING.w`; elke stand hoger of lager op de schuif is één
 * breedtestap breder of smaller. Maatwerk ("custom") krijgt de breedste.
 *
 * Eerst volgde de breedte de echte m² per bouwlaag. Maar de schuif loopt van
 * 40 tot 300 m², een factor 7,5, en het huis kan maar een factor 1,5 breder:
 * bijna elke stand viel op de smalste of de breedste stap, en een rijwoning
 * met twee lagen veranderde boven 140 m² niet meer.
 */
export function woningBreedte(woning: Woning, size: string, verdiepingen: number): number {
  const stappen = BREEDTES[woning];
  if (size === "custom") return stappen[stappen.length - 1];
  const m2 = Number(size);
  if (!Number.isFinite(m2) || m2 <= 0) return WONING[woning].w;
  const standen = [...SIZE_VALUES, "custom"];
  const stand = (x: number) => standen.indexOf(snapOppervlakte(x));
  const i = stappen.indexOf(WONING[woning].w) + stand(m2) - stand(geschatteOppervlakte(woning, verdiepingen));
  return stappen[Math.min(stappen.length - 1, Math.max(0, i))];
}

/** Woonoppervlakte per bouwlaag, ruwweg footprint × 0,85 voor muren en trap. */
export function geschatteOppervlakte(woning: Woning, verdiepingen: number): number {
  const { w, l } = WONING[woning];
  return Math.round(w * l * 0.85 * Math.max(1, verdiepingen));
}

/**
 * De catalogusmaat waarin de geschatte woning past: eerstvolgende stand naar
 * boven, net als de liniaal — een pakket dat een maat te klein is, droogt de
 * woning niet in de voorziene tijd.
 */
export function snapOppervlakte(m2: number): string {
  const hit = SIZE_VALUES.find((s) => Number(s) >= m2);
  return hit ?? "custom";
}

export function isMaatwerk(a: Pick<SimAnswers, "size">): boolean {
  return a.size === "custom";
}

export function toPackageConfig(a: SimAnswers): PackageConfig {
  return {
    size: a.size,
    wat: a.wat,
    pd: PD_VALUES.includes(a.pd) ? a.pd : DEFAULT_PD,
    cd: CD_VALUES.includes(a.cd) ? a.cd : DEFAULT_CD,
    // `heat` in de catalogus betekent "kachels in het pakket" — het omgekeerde
    // van de vraag die we de bezoeker stellen.
    heat: !a.verwarmt,
    weeks: 2,
    // De simulator telt bouwlagen inclusief het gelijkvloers en de zolder.
    floors: Math.max(0, Math.min(MAX_VERDIEPINGEN, a.verdiepingen) - 1),
  };
}

export interface SimResultaat {
  config: PackageConfig;
  items: PackageItem[];
  prijs: number;
  weken: number;
  dagen: number;
  capaciteit: number;
  luchtverzet: number;
  /** liter water dat de woning verlaat: een schatting uit het rekenmodel, alleen voor de film */
  water: number;
}

/**
 * Het pakket voor deze antwoorden, of null bij maatwerk.
 *
 * De catalogus is leidend, net als op de pakket- en boekingspagina: toestellen,
 * termijn en prijs zijn die van het vaste pakket dat de klant boekt. Een eigen
 * rekenmodel gaf hier eerst andere toestellen en een andere prijs dan wat de
 * checkout aanrekende (rijwoning "rustig": € 719,55 in de simulator, € 596,40
 * bij het boeken).
 *
 * De tempokeuze is er op 26-11-2026 uit: ze werd niet meer gevraagd, kon de
 * termijn toch niet verschuiven (die ligt per pakket vast) en zette bij "snel"
 * een droger bovenop het pakket. Het rekenmodel (droogTempo) levert hier alleen
 * nog de geschatte liters voor de film.
 */
export function simResultaat(a: SimAnswers): SimResultaat | null {
  if (isMaatwerk(a)) return null;
  const opp = Number(a.size);
  if (!Number.isFinite(opp) || opp <= 0) return null;
  const config = toPackageConfig(a);
  const items = baseItems(config);
  const weken = configWeeks(config);
  const { water } = droogTempo({
    type: a.woning,
    opp,
    verd: Math.max(1, a.verdiepingen),
    ruim: Math.max(1, a.ruimtes ?? a.verdiepingen * 4),
    // De liters dienen alleen voor de film. Regenwater in de ruwbouw rekenen we als een
    // vaste, dunne natte laag: een chapedikte die de bezoeker eerder koos, ligt er nog niet.
    wat: a.wat === "waterschade" ? "chape" : a.wat,
    cd: a.wat === "waterschade" ? WATERSCHADE_CM : Number(config.cd),
    pd: Number(config.pd),
    verwarmt: a.verwarmt,
  });
  return {
    config: { ...config, weeks: weken },
    items,
    prijs: configPrice(config, items),
    weken,
    dagen: dryingDays(config),
    capaciteit: totalCapacity(items),
    luchtverzet: totalAirflow(items),
    water,
  };
}

/** Bewoonbare m² die één ruimte gemiddeld vraagt, toilet en berging meegerekend. */
export const M2_PER_RUIMTE = 8;

/**
 * Hoeveel ruimtes er per bouwlaag passen bij de gekozen vloeroppervlakte. De
 * gevel bepaalt al hoeveel kamers er naast elkaar kunnen (`maxKamers`), maar de
 * tekening kent maar drie breedtes: zonder deze grens kreeg een woning van 40 m²
 * over twee lagen gewoon acht kamers. Maatwerk ("custom") heeft geen grens.
 */
export function maxKamersBijOppervlakte(size: string, verdiepingen: number): number {
  const m2 = Number(size);
  if (size === "custom" || !Number.isFinite(m2) || m2 <= 0) return MAX_KAMERS;
  const perLaag = m2 / Math.max(1, verdiepingen);
  return Math.min(MAX_KAMERS, Math.max(MIN_KAMERS, Math.floor(perLaag / M2_PER_RUIMTE)));
}

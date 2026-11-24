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
  allItems,
  baseItems,
  configPrice,
  configWeeks,
  dryingDays,
  totalAirflow,
  totalCapacity,
  type PackageConfig,
  type PackageItem,
} from "./verhuur.js";
import type { DeviceKey } from "../data/verhuur.js";
import { droogTempo, type Tempo } from "./droogTempo.js";
import type { Taal } from "../i18n/taal.js";

export type Woning = "rijwoning" | "halfopen" | "open" | "appartement";
export type Dak = "zadeldak" | "plat" | "lessenaar";
/** Wat er nat is. "waterschade" = regenwater in metselwerk en vloerplaat (ruwbouw, ramen): geen laag, dus geen dikte. */
export type Wat = "pleister" | "chape" | "beide" | "waterschade";
/** Natte laag (cm) waarmee de film het water in een ruwbouw schat: los van elke gekozen chapedikte. */
const WATERSCHADE_CM = 2;
export type Fase = "ruwbouw" | "ramen" | "chape" | "gepleisterd" | "tegels" | "afgewerkt";

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
  /** how fast it has to be dry; sets the number of driers and the rental term */
  tempo?: Tempo;
  /** rooms in total, from the floor plan; drives fans and inner-wall plaster */
  ruimtes?: number;
}

export const MAX_VERDIEPINGEN = 4;

/**
 * Footprint per woningtype in meter (breedte × diepte) en of er buren tegen de
 * zijgevels staan. Gangbare Vlaamse maten; ze bepalen alleen de tekening en
 * de schatting van de oppervlakte, nooit het pakket zelf.
 */
export const WONING: Record<
  Woning,
  { label: string; sub: string; w: number; l: number; buren: 0 | 1 | 2; dakToegelaten: Dak[] }
> = {
  rijwoning: { label: "Rijwoning", sub: "Twee gemene muren", w: 6, l: 10, buren: 2, dakToegelaten: ["zadeldak", "plat", "lessenaar"] },
  halfopen: { label: "Halfopen", sub: "Eén gemene muur", w: 8, l: 10, buren: 1, dakToegelaten: ["zadeldak", "plat", "lessenaar"] },
  open: { label: "Open bebouwing", sub: "Vrijstaand", w: 10, l: 11, buren: 0, dakToegelaten: ["zadeldak", "plat", "lessenaar"] },
  appartement: { label: "Appartement", sub: "Eén of twee bouwlagen", w: 9, l: 10, buren: 0, dakToegelaten: ["plat"] },
};

/**
 * De gevelbreedtes die de simulator tekent, per woningtype, smal → breed. De
 * vloeroppervlakte kiest er één (`woningBreedte`); de diepte blijft `WONING.l`.
 * Het zijn vaste stappen en geen vrije maat, omdat de straat rond het huis per
 * breedte vooraf gerenderd is (scripts/simulator-3d/straat.py): een vrije maat
 * zou het huis door de buren heen laten groeien. De middelste stap is `WONING.w`.
 */
export const BREEDTES: Record<Woning, readonly number[]> = {
  rijwoning: [5, 6, 7.5],
  halfopen: [6.5, 8, 10],
  open: [8, 10, 12.5],
  appartement: [9],
};

/**
 * De gevelbreedte bij een vloeroppervlakte: de stap die het dichtst bij
 * (m² per laag / 0,85) / diepte ligt. Maatwerk ("custom") krijgt de breedste.
 */
export function woningBreedte(woning: Woning, size: string, verdiepingen: number): number {
  const stappen = BREEDTES[woning];
  const m2 = Number(size);
  if (size === "custom" || !Number.isFinite(m2) || m2 <= 0) return stappen[stappen.length - 1];
  const doel = m2 / Math.max(1, verdiepingen) / 0.85 / WONING[woning].l;
  return stappen.reduce((best, b) => (Math.abs(b - doel) < Math.abs(best - doel) ? b : best));
}

export const DAK_LABEL: Record<Dak, { label: string; sub: string }> = {
  zadeldak: { label: "Zadeldak", sub: "Twee hellende vlakken" },
  plat: { label: "Plat dak", sub: "Of een appartement erboven" },
  lessenaar: { label: "Lessenaarsdak", sub: "Eén hellend vlak" },
};

export const WAT_LABEL: Record<Wat, { label: string; sub: string }> = {
  pleister: { label: "Pleisterwerk", sub: "Muren en plafonds" },
  chape: { label: "Chape", sub: "Dekvloer" },
  beide: { label: "Pleisterwerk + chape", sub: "Muren én vloer" },
  waterschade: { label: "Metselwerk en vloerplaat", sub: "Regenwater in de ruwbouw" },
};

/**
 * Welke lagen er in elke fase liggen, zodat de diktevraag alleen daarnaar vraagt:
 * in de ruwbouw geen chape of pleister, na het gieten alleen chape, vanaf het
 * pleisteren beide. Zonder laag geldt het waterschadepakket uit de catalogus
 * (geen dikte, geprijsd op de vloeroppervlakte).
 */
export const LAGEN_PER_FASE: Record<Fase, readonly ("pd" | "cd")[]> = {
  ruwbouw: [],
  ramen: [],
  chape: ["cd"],
  gepleisterd: ["pd", "cd"],
  tegels: ["pd", "cd"],
  afgewerkt: ["pd", "cd"],
};

export interface FaseInfo {
  /** voluit, in de kop van de tekening en in het droogplan */
  label: string;
  /** op de keuzeknop */
  kort: string;
  /** beginstand van de vochtanimatie in het droogplan, 0–1 */
  vocht: number;
  /** standaardantwoord op "Is er verwarming?" zolang de bezoeker niets kiest */
  verwarmtWaarschijnlijk: boolean;
  /** de uitleg bij de fase, ook als "Let op" in het droogplan */
  advies: string;
  /** foto in /simulator/: dezelfde kamer, stap voor stap verder afgewerkt */
  foto: string;
  /** hoeveel water deze fase in huis brengt, 1–5 druppels (illustratief) */
  druppels: number;
  druppelsTekst: string;
  /** waar het vocht zit op de foto, in procent van breedte en hoogte */
  pin: { x: number; y: number; tekst: string };
  starten: string;
  meten: string;
  letOp: string;
}

/**
 * De bouwfase, van ruwbouw tot afgewerkt: de klant kiest waar zijn werf nu
 * staat. Het pakket verandert er niet door — de catalogus kent geen fase. Wat
 * verandert, is wanneer de drogers starten, of er gemeten wordt en waar u op
 * let. Starttijden en druppels zijn vuistregels voor de bezoeker, geen meting.
 */
export const FASE: Record<Fase, FaseInfo> = {
  ruwbouw: {
    label: "Ruwbouw, ramen nog open",
    kort: "Ruwbouw",
    vocht: 0.85,
    verwarmtWaarschijnlijk: false,
    advies: "Metselwerk en vloerplaat zitten vol regenwater. Drogen kan pas als de openingen dicht zijn, anders droogt u de buitenlucht.",
    foto: "/simulator/fase-ruwbouw.webp",
    druppels: 3,
    druppelsTekst: "regenwater",
    pin: { x: 34, y: 70, tekst: "Regenwater op de vloerplaat" },
    starten: "Na afsluiten met folie",
    meten: "Nog niet",
    letOp: "Openingen eerst dicht",
  },
  ramen: {
    label: "Ramen geplaatst",
    kort: "Ramen geplaatst",
    vocht: 0.75,
    verwarmtWaarschijnlijk: false,
    advies: "Het goede moment om metselwerk en vloerplaat uit te drogen, vóór de chape erop komt.",
    foto: "/simulator/fase-ramen.webp",
    druppels: 2,
    druppelsTekst: "matig",
    pin: { x: 22, y: 52, tekst: "Vocht in het metselwerk" },
    starten: "Meteen",
    meten: "Niet nodig",
    letOp: "Regenwater op de vloerplaat",
  },
  chape: {
    label: "Chape gegoten",
    kort: "Chape",
    vocht: 1,
    verwarmtWaarschijnlijk: false,
    advies: "Een chape brengt het meeste water in huis: ongeveer een week per centimeter om te drogen.",
    foto: "/simulator/fase-chape.webp",
    druppels: 5,
    druppelsTekst: "het meest",
    pin: { x: 48, y: 68, tekst: "Water in de chape" },
    starten: "Na ± 1 week uitharden",
    meten: "Vóór tegels of parket",
    letOp: "Niet te vroeg forceren",
  },
  tegels: {
    label: "Tegels gelegd",
    kort: "Tegels",
    vocht: 0.7,
    verwarmtWaarschijnlijk: false,
    advies: "Tegels sluiten het vocht in de chape op. Het kan enkel nog via de voegen en de muren weg.",
    foto: "/simulator/fase-tegels.webp",
    druppels: 4,
    druppelsTekst: "opgesloten",
    pin: { x: 42, y: 66, tekst: "Vocht onder de tegels" },
    starten: "Meteen",
    meten: "Chape onder de tegels",
    letOp: "Vocht zit opgesloten",
  },
  gepleisterd: {
    label: "Net gepleisterd",
    kort: "Gepleisterd",
    vocht: 0.9,
    verwarmtWaarschijnlijk: true,
    advies: "Pleisterwerk droogt ongeveer een week per centimeter. Pas daarna kan er geschilderd worden.",
    foto: "/simulator/fase-pleister.webp",
    druppels: 4,
    druppelsTekst: "veel",
    pin: { x: 72, y: 34, tekst: "Nat pleisterwerk" },
    starten: "Na 2 à 3 dagen",
    meten: "Vóór het schilderen",
    letOp: "Verf op nat pleister bladdert",
  },
  afgewerkt: {
    label: "Afgewerkt of bewoond",
    kort: "Afgewerkt",
    vocht: 0.4,
    verwarmtWaarschijnlijk: true,
    advies:
      "Verf en vloer houden het laatste vocht vast: vochtplekken, condens of schimmel in de hoeken. De drogers werken ook terwijl u er woont, en ze zijn stil genoeg voor een slaapkamer.",
    foto: "/simulator/fase-afgewerkt.webp",
    druppels: 2,
    druppelsTekst: "verborgen",
    pin: { x: 14, y: 66, tekst: "Restvocht achter de verf" },
    starten: "Meteen, rustig",
    meten: "Eerst: waar zit het?",
    letOp: "Stil genoeg voor een slaapkamer",
  },
};

export const FASE_ORDER: Fase[] = ["ruwbouw", "ramen", "chape", "gepleisterd", "tegels", "afgewerkt"];

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
  /** toestellen bovenop het vaste pakket (bij "snel"); gaan mee naar de boeking */
  extra: Partial<Record<DeviceKey, number>>;
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
 * Het tempo kan de termijn niet verschuiven, die ligt per pakket vast. "Snel"
 * zet er een droger bij, als extra toestel zoals de boekingspagina dat kent en
 * de checkout server-side herrekent. Het rekenmodel (droogTempo) levert alleen
 * nog de geschatte liters voor de film.
 */
export function simResultaat(a: SimAnswers): SimResultaat | null {
  if (isMaatwerk(a)) return null;
  const opp = Number(a.size);
  if (!Number.isFinite(opp) || opp <= 0) return null;
  const config = toPackageConfig(a);
  const basis = baseItems(config);
  const extra: Partial<Record<DeviceKey, number>> =
    a.tempo === "snel" ? { [basis.some((it) => it.k === "medium") || !basis.some((it) => it.k === "small") ? "medium" : "small"]: 1 } : {};
  const items = allItems(config, extra);
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
    tempo: "gemiddeld",
  });
  return {
    config: { ...config, weeks: weken },
    items,
    prijs: configPrice(config, items),
    weken,
    dagen: dryingDays(config),
    capaciteit: totalCapacity(items),
    luchtverzet: totalAirflow(items),
    extra,
    water,
  };
}

/* ───────────────────────── kamers en plaatsing ───────────────────────── */

export type KamerSoort = "kamer" | "circulatie";

export interface Kamer {
  id: string;
  naam: string;
  verdieping: number;
  /** in meter, met de achterste hoek van de woning als oorsprong */
  x: number;
  z: number;
  w: number;
  l: number;
  /** hal, gang en overloop zijn circulatie: ze tellen niet als kamer */
  soort?: KamerSoort;
  /**
   * De muur waar de vaste inrichting tegen staat (keukenblok, bad, toilet,
   * wasmachine). Het plan kiest hem, niet de 3D: zo komt er nooit een raam
   * achter een keukenkast of een bad.
   */
  inrichting?: Wand;
  /** badkamer of toilet zonder buitengevel: ventilatierooster in plaats van een raam */
  rooster?: boolean;
}

/** Een wand van een kamer, gezien vanaf de tuin: achter = z klein, links = x klein. */
export type Wand = "achter" | "voor" | "links" | "rechts";

/**
 * Een opening in een wand. `as` is de richting van de wand ("x" = evenwijdig
 * met de voorgevel), `vast` de plek ervan op de andere as, `van`–`tot` het
 * stuk dat open is. Een deur draait naar `kant` (+1 = richting +z/+x), altijd
 * de kamer in; `scharnier` zegt aan welk uiteinde hij hangt, het blad valt
 * open tegen de dichtste hoek.
 */
export interface Opening {
  verdieping: number;
  as: "x" | "z";
  vast: number;
  van: number;
  tot: number;
  soort: "deur" | "open" | "voordeur";
  kant: 1 | -1;
  scharnier?: "van" | "tot";
}

/**
 * Een rechte trap in de traphal, langs x. `richting` +1 = hij klimt naar +x
 * (eerste trede bij `x`, bovenste bij `x + w`), -1 = omgekeerd. `op` = de trap
 * vertrekt op deze laag; anders is het het trapgat van de trap eronder, op
 * exact dezelfde plek. Vanaf drie bouwlagen keren de trappen om op het bordes
 * en liggen ze naast elkaar (halfslag): recht boven elkaar in dezelfde richting
 * stoot je hoofd tegen de volgende trap.
 */
export interface Trap {
  verdieping: number;
  x: number;
  z: number;
  w: number;
  l: number;
  op: boolean;
  richting: 1 | -1;
}

export type Gevel = "voor" | "achter" | "links" | "zij";

/**
 * Een raam in een buitengevel, van één kamer. `van`–`tot` loopt langs de gevel
 * (x voor voor/achter, z voor links/zij), `onder`–`boven` boven de vloer.
 * "raamdeur" gaat tot de vloer (naar de tuin), "hoog" is een klein raam boven
 * sanitair of een wasmachine.
 */
export interface Raam {
  verdieping: number;
  gevel: Gevel;
  van: number;
  tot: number;
  onder: number;
  boven: number;
  soort: "raam" | "raamdeur" | "hoog";
  kamer: string;
}

export interface Plan {
  kamers: Kamer[];
  openingen: Opening[];
  trappen: Trap[];
  ramen: Raam[];
}

export type LaagSoort = "gelijkvloers" | "boven" | "zolder" | "appartement";

/** Een ruimte die de bezoeker per verdieping kan kiezen. */
export interface RuimteOptie {
  naam: string;
  meervoud: string;
  min: number;
  max: number;
  /** relatieve grootte */
  gewicht: number;
  /** tuinkant, straatkant, of waar plaats is */
  kant: "achter" | "voor" | "vrij";
  /** minimale breedte langs de gevel, in meter: een slaapkamer smaller dan 2,6 m is een gang */
  minB: number;
}

/** naam → aantal */
export type Programma = Record<string, number>;

export const MIN_KAMERS = 1;
export const MAX_KAMERS = 6;

/**
 * Minimale breedtes. Een slaapkamer van 2,6 m breed en ~4 m diep haalt de
 * ~10 m² van een echte slaapkamer; een badkamer heeft 1,8 m nodig voor bad of
 * douche plus lavabo, een toilet 1 m. Zo krijgt een rijwoning van 6 m breed
 * nooit vier repen naast elkaar — wat niet past, past niet.
 */
const MIN_B: Record<string, number> = {
  Leefruimte: 3.6, Keuken: 2.4, Slaapkamer: 2.6, Bureau: 2.2, Badkamer: 1.8,
  Toilet: 1, Berging: 1.4, Wasplaats: 1.4, Dressing: 1.4, Zolder: 3,
};
const opt = (naam: string, meervoud: string, min: number, max: number, gewicht: number, kant: RuimteOptie["kant"]): RuimteOptie =>
  ({ naam, meervoud, min, max, gewicht, kant, minB: MIN_B[naam] ?? 1.5 });

export const RUIMTES: Record<LaagSoort, RuimteOptie[]> = {
  gelijkvloers: [
    opt("Leefruimte", "Leefruimte", 1, 1, 3, "achter"),
    opt("Keuken", "Aparte keuken", 0, 1, 1.6, "achter"),
    opt("Slaapkamer", "Slaapkamers", 0, 2, 1.4, "vrij"),
    opt("Bureau", "Bureau", 0, 1, 1.1, "voor"),
    // Berging en wasplaats liggen achter, naast de keuken: daar komt de was en de
    // voorraad binnen. Aan de straatkant liggen hal, toilet en bureau.
    opt("Berging", "Berging", 0, 1, 0.8, "achter"),
    opt("Wasplaats", "Wasplaats", 0, 1, 0.8, "achter"),
    opt("Badkamer", "Badkamer", 0, 1, 1, "voor"),
    opt("Toilet", "Toilet", 0, 1, 0.45, "voor"),
  ],
  // Boven: de grote slaapkamer aan de straatkant, badkamer en toilet aan de
  // tuinkant — recht boven de keuken, op dezelfde afvoer, zoals in de meeste
  // Vlaamse woningen.
  boven: [
    opt("Slaapkamer", "Slaapkamers", 1, 4, 1.5, "vrij"),
    opt("Badkamer", "Badkamers", 0, 2, 1, "achter"),
    opt("Bureau", "Bureau", 0, 1, 1, "vrij"),
    opt("Dressing", "Dressing", 0, 1, 0.7, "voor"),
    opt("Berging", "Berging", 0, 1, 0.7, "voor"),
    opt("Toilet", "Toilet", 0, 1, 0.45, "achter"),
  ],
  zolder: [
    opt("Zolder", "Open zolder", 1, 1, 2, "achter"),
    opt("Slaapkamer", "Slaapkamers", 0, 2, 1.4, "voor"),
    opt("Badkamer", "Badkamer", 0, 1, 0.9, "voor"),
    opt("Bureau", "Bureau", 0, 1, 0.9, "vrij"),
    opt("Berging", "Berging", 0, 1, 0.6, "voor"),
  ],
  appartement: [
    opt("Leefruimte", "Leefruimte", 1, 1, 2.6, "achter"),
    opt("Keuken", "Aparte keuken", 0, 1, 1.3, "achter"),
    opt("Slaapkamer", "Slaapkamers", 0, 3, 1.4, "vrij"),
    opt("Badkamer", "Badkamers", 0, 2, 0.9, "voor"),
    opt("Bureau", "Bureau", 0, 1, 1, "vrij"),
    opt("Berging", "Berging", 0, 1, 0.6, "voor"),
    opt("Toilet", "Toilet", 0, 1, 0.45, "voor"),
  ],
};

/** De volgorde waarin ruimtes erbij komen als alleen een aantal gegeven is. */
const VOLGORDE: Record<LaagSoort, string[]> = {
  // Elke woning heeft beneden een toilet; een berging is pas de vijfde ruimte.
  gelijkvloers: ["Leefruimte", "Keuken", "Toilet", "Bureau", "Berging", "Wasplaats"],
  boven: ["Slaapkamer", "Slaapkamer", "Badkamer", "Slaapkamer", "Bureau", "Toilet"],
  zolder: ["Zolder", "Slaapkamer", "Badkamer", "Berging", "Slaapkamer", "Bureau"],
  appartement: ["Leefruimte", "Keuken", "Slaapkamer", "Badkamer", "Slaapkamer", "Berging"],
};

/** Een woning van één bouwlaag (bungalow) slaapt beneden: slaapkamer en badkamer komen vroeg. */
const VOLGORDE_ENKEL = ["Leefruimte", "Keuken", "Slaapkamer", "Badkamer", "Toilet", "Slaapkamer"];

/** Is deze bouwlaag de zolder: de bovenste laag onder een schuin dak, vanaf drie lagen. */
export function isZolder(v: number, verdiepingen: number, dak: Dak): boolean {
  return v === verdiepingen - 1 && dak !== "plat" && verdiepingen > 2;
}

export function laagSoort(woning: Woning, v: number, verdiepingen: number, dak: Dak): LaagSoort {
  if (isZolder(v, verdiepingen, dak)) return "zolder";
  if (v === 0) return woning === "appartement" ? "appartement" : "gelijkvloers";
  return "boven";
}

/** Het aantal kamers waar de simulator mee begint, per bouwlaag. */
export function standaardKamers(woning: Woning, v: number, verdiepingen: number, dak: Dak, breedte = WONING[woning].w): number {
  if (isZolder(v, verdiepingen, dak)) return 1;
  const smal = breedte < 7;
  if (woning === "appartement" && v === 0) return verdiepingen === 1 ? 4 : 3;
  if (v === 0 && verdiepingen === 1) return smal ? 3 : 4; // bungalow: ook slaapkamer en badkamer beneden
  // Een vrijstaande woning heeft haar voordeur in het midden: met een bureau naast
  // het toilet ligt er aan elke kant van de hal een kamer, in plaats van een lege inkomhal.
  if (v === 0) return woning === "open" ? 4 : smal ? 2 : 3;
  return smal ? 3 : 4;
}

/** De eerste `n` ruimtes uit de standaardvolgorde, als programma. */
export function programmaVan(soort: LaagSoort, n: number, lagen = 2): Programma {
  const p: Programma = {};
  const volgorde = soort === "gelijkvloers" && lagen === 1 ? VOLGORDE_ENKEL : VOLGORDE[soort];
  for (const naam of volgorde.slice(0, Math.min(MAX_KAMERS, Math.max(MIN_KAMERS, Math.round(n))))) {
    p[naam] = (p[naam] ?? 0) + 1;
  }
  return geldig(soort, p);
}

export function standaardProgramma(woning: Woning, v: number, verdiepingen: number, dak: Dak, breedte = WONING[woning].w): Programma {
  // A narrow facade (a 5 m terraced bungalow) cannot always hold the usual count.
  const n = Math.min(standaardKamers(woning, v, verdiepingen, dak, breedte), maxKamers(woning, v, verdiepingen, dak, breedte));
  return programmaVan(laagSoort(woning, v, verdiepingen, dak), n, verdiepingen);
}

export function aantalKamers(p: Programma): number {
  return Object.values(p).reduce((a, b) => a + b, 0);
}

/**
 * Houdt een programma binnen de regels van zijn bouwlaag: elke ruimte tussen
 * haar min en max, onbekende ruimtes eruit, en nooit meer dan MAX_KAMERS —
 * wat te veel is, valt van achter in de lijst weg.
 */
export function geldig(soort: LaagSoort, p: Programma): Programma {
  const uit: Programma = {};
  let totaal = 0;
  for (const o of RUIMTES[soort]) {
    const n = Math.min(o.max, Math.max(o.min, Math.round(p[o.naam] ?? 0)));
    const plaats = Math.max(o.min, Math.min(n, MAX_KAMERS - totaal));
    if (plaats > 0) uit[o.naam] = plaats;
    totaal += plaats;
  }
  return uit;
}

/* ───────────── maten van de indeling, in meter ───────────── */

/** Gang zonder trap (een woning van één bouwlaag). */
const GANG = 1.2;
/*
  Met een trap is de gang een traphal: de trap (90 cm) tegen de tuinkant, een
  loopstrook van 1 m ernaast. Tot november 2026 lag een trap van 1,1 m in een
  gang van 1,2 m en klom hij tot tegen de zijgevel: boven stapte je tegen de
  muur, en beneden kon je er niet langs naar de kamers achter de trap.
*/
const TRAP_B = 0.9;
/** 13 optreden van 22 cm over 3 m: een gewone, wat steile Vlaamse trap. */
const TRAP_L = 3;
const LOOP = 1;
/**
 * Vrije vloer boven aan de trap, tot de zijgevel, en voor de eerste trede. Het
 * bordes is 1,15 m: genoeg voor een deur van 85 cm met 15 cm tot elke hoek, zo
 * kan de kamer boven het bordes erop uitkomen.
 */
const BORDES = 1.15;
const AANLOOP = 0.85;
const HAL = 1.2;
const MIN_BREEDTE = 1.5;
const MIN_DIEPTE = 2.6;
/** Een toilet: 1 m breed, 1,5 m diep — genoeg voor een deur die naar binnen draait. */
const TOILET_B = 1;
const TOILET_L = 1.5;
/** Deuropening: 85 cm, 70 cm voor toilet, berging, dressing en wasplaats. */
const DEUR = 0.85;
const DEUR_KLEIN = 0.7;
const KLEINE_DEUR = new Set(["Toilet", "Berging", "Dressing", "Wasplaats"]);
/** Een deur blijft zoveel van een hoek: de regel is 10 cm, de kader neemt er 5 bij. */
const HOEK = 0.15;
/** Vrije vloer aan de gangkant van een deur. */
const VOOR_DEUR = 0.8;
/** Halve binnenmuur: de trap begint naast de muur, niet erin. */
const HALVE_WAND = 0.06;

/** De trapmaten, voor wie de trap tekent of nakijkt. */
export const TRAP_MATEN = { breedte: TRAP_B, lengte: TRAP_L, bordes: BORDES, aanloop: AANLOOP } as const;

/* ───────────── rechthoeken ───────────── */

/** Een rechthoek op de vloer, in meter. */
export interface Vak { x0: number; x1: number; z0: number; z1: number }
const EPS = 1e-6;

export const vakVan = (k: Pick<Kamer, "x" | "z" | "w" | "l">): Vak => ({ x0: k.x, x1: k.x + k.w, z0: k.z, z1: k.z + k.l });

export function overlapt(a: Vak, b: Vak, marge = EPS): boolean {
  return a.x0 < b.x1 - marge && b.x0 < a.x1 - marge && a.z0 < b.z1 - marge && b.z0 < a.z1 - marge;
}

/** Wat er van `a` overblijft na het wegnemen van `b`, als rechthoeken. */
function zonder(a: Vak, b: Vak): Vak[] {
  if (!overlapt(a, b)) return [a];
  const uit: Vak[] = [];
  if (b.x0 > a.x0 + EPS) uit.push({ ...a, x1: b.x0 });
  if (b.x1 < a.x1 - EPS) uit.push({ ...a, x0: b.x1 });
  const x0 = Math.max(a.x0, b.x0), x1 = Math.min(a.x1, b.x1);
  if (b.z0 > a.z0 + EPS) uit.push({ x0, x1, z0: a.z0, z1: b.z0 });
  if (b.z1 < a.z1 - EPS) uit.push({ x0, x1, z0: b.z1, z1: a.z1 });
  return uit;
}

/** Ligt `a` helemaal binnen de vakken samen? */
export function bedekt(a: Vak, vakken: Vak[]): boolean {
  let rest = [a];
  for (const b of vakken) rest = rest.flatMap((r) => zonder(r, b));
  return rest.every((r) => r.x1 - r.x0 < 1e-4 || r.z1 - r.z0 < 1e-4);
}

/** Wat een deurblad bestrijkt: een vierkant aan de kant waar hij opendraait. */
export function zwaaiVak(o: Opening): Vak {
  const b = o.tot - o.van;
  const n0 = o.kant > 0 ? o.vast : o.vast - b, n1 = o.kant > 0 ? o.vast + b : o.vast;
  return o.as === "x" ? { x0: o.van, x1: o.tot, z0: n0, z1: n1 } : { x0: n0, x1: n1, z0: o.van, z1: o.tot };
}

/** De vloer vóór een deur, aan de gangkant (tegenover de draairichting). */
export function voorDeurVak(o: Opening, diepte = VOOR_DEUR): Vak {
  const n0 = o.kant > 0 ? o.vast - diepte : o.vast, n1 = o.kant > 0 ? o.vast : o.vast + diepte;
  return o.as === "x" ? { x0: o.van, x1: o.tot, z0: n0, z1: n1 } : { x0: n0, x1: n1, z0: o.van, z1: o.tot };
}

/** Een open doorgang, aan beide kanten even diep: daar mag geen deur in draaien en niets staan. */
export function doorgangVak(o: Opening, diepte = 0.6): Vak {
  return o.as === "x"
    ? { x0: o.van, x1: o.tot, z0: o.vast - diepte, z1: o.vast + diepte }
    : { x0: o.vast - diepte, x1: o.vast + diepte, z0: o.van, z1: o.tot };
}

export const trapVak = (t: Trap): Vak => ({ x0: t.x, x1: t.x + t.w, z0: t.z, z1: t.z + t.l });
/** Vrije vloer voor de eerste trede, op de laag van de trap. */
export const aanloopVak = (t: Trap, d = AANLOOP): Vak =>
  t.richting > 0 ? { x0: t.x - d, x1: t.x, z0: t.z, z1: t.z + t.l } : { x0: t.x + t.w, x1: t.x + t.w + d, z0: t.z, z1: t.z + t.l };
/** Vrije vloer boven aan de trap, op de laag erboven. */
export const bordesVak = (t: Trap, d = BORDES): Vak =>
  t.richting > 0 ? { x0: t.x + t.w, x1: t.x + t.w + d, z0: t.z, z1: t.z + t.l } : { x0: t.x - d, x1: t.x, z0: t.z, z1: t.z + t.l };

/**
 * De trappen van bouwlaag v: de trap die hier vertrekt en het trapgat van de
 * trap eronder. Trap k ligt tegen de tuinkant van de traphal en klimt naar de
 * zijgevel als k even is; is k oneven, dan ligt hij aan de straatkant van de
 * traphal en klimt hij terug (halfslag). Zo begint elke trap op het bordes
 * waar de vorige uitkwam.
 */
function trappenVan(v: number, lagen: number, w: number, zb: number): Trap[] {
  const uit: Trap[] = [];
  const x = w - BORDES - TRAP_L;
  const vlucht = (k: number, op: boolean): Trap => (k % 2 === 0
    ? { verdieping: v, x, z: zb + HALVE_WAND, w: TRAP_L, l: TRAP_B - HALVE_WAND, op, richting: 1 }
    : { verdieping: v, x, z: zb + TRAP_B + LOOP, w: TRAP_L, l: TRAP_B - HALVE_WAND, op, richting: -1 });
  if (v > 0) uit.push(vlucht(v - 1, false));
  if (v < lagen - 1) uit.push(vlucht(v, true));
  return uit;
}

/* ───────────── de indeling van één bouwlaag ───────────── */

interface Stuk { naam: string; gewicht: number; minB?: number; /** vaste breedte, buiten de verdeling */ vast?: number }
interface Ruimte extends Stuk { kant: RuimteOptie["kant"]; i: number }

/** Diepte van de traphal: één trap en een loopstrook, vanaf drie lagen twee trappen met de loopstrook ertussen. */
function bandVan(lagen: number): number {
  return lagen > 2 ? 2 * TRAP_B + LOOP : lagen > 1 ? TRAP_B + LOOP : GANG;
}

/** Waar de gang begint (gezien vanaf de tuin): iets voorbij het midden, zodat de tuinkant de diepste kamers heeft. */
function gangDiepte(l: number, band: number): number {
  const z = (l - band) * 0.56;
  return Math.round(Math.min(l - band - MIN_DIEPTE, Math.max(MIN_DIEPTE, z)) * 10) / 10;
}

/**
 * Verdeelt een strook in vakken naast elkaar: elk vak krijgt eerst zijn
 * minimale (of vaste) breedte, de rest van de strook gaat volgens gewicht.
 */
function rij(x0: number, x1: number, stukken: Stuk[]): { naam: string; x: number; w: number }[] {
  const los = stukken.filter((s) => s.vast === undefined);
  const totaal = los.reduce((t, s) => t + s.gewicht, 0);
  const vast = stukken.reduce((t, s) => t + (s.vast ?? s.minB ?? 0), 0);
  const over = Math.max(0, x1 - x0 - vast);
  let x = x0;
  return stukken.map((s, i) => {
    const w = i === stukken.length - 1 ? x1 - x : s.vast ?? (s.minB ?? 0) + (totaal > 0 ? (over * s.gewicht) / totaal : 0);
    const uit = { naam: s.naam, x, w };
    x += w;
    return uit;
  });
}

/** De stukken wand die kamer `k` met kamer `c` deelt, met de kant waar `k` ligt. */
function gedeeldeWanden(k: Kamer, c: Kamer): { as: "x" | "z"; vast: number; a0: number; a1: number; kant: 1 | -1 }[] {
  const a = vakVan(k), b = vakVan(c);
  const uit: { as: "x" | "z"; vast: number; a0: number; a1: number; kant: 1 | -1 }[] = [];
  const x0 = Math.max(a.x0, b.x0), x1 = Math.min(a.x1, b.x1);
  const z0 = Math.max(a.z0, b.z0), z1 = Math.min(a.z1, b.z1);
  if (x1 - x0 > EPS) {
    if (Math.abs(a.z0 - b.z1) < EPS) uit.push({ as: "x", vast: a.z0, a0: x0, a1: x1, kant: 1 });
    if (Math.abs(a.z1 - b.z0) < EPS) uit.push({ as: "x", vast: a.z1, a0: x0, a1: x1, kant: -1 });
  }
  if (z1 - z0 > EPS) {
    if (Math.abs(a.x0 - b.x1) < EPS) uit.push({ as: "z", vast: a.x0, a0: z0, a1: z1, kant: 1 });
    if (Math.abs(a.x1 - b.x0) < EPS) uit.push({ as: "z", vast: a.x1, a0: z0, a1: z1, kant: -1 });
  }
  return uit;
}

/**
 * De deur van een kamer naar de gang. Ze zit in een wand die de kamer met de
 * circulatie deelt, minstens 15 cm van een hoek, draait de kamer in zonder een
 * andere deur of doorgang te raken, en aan de gangkant ligt 80 cm vrije vloer
 * die niet op de trap valt. Van de plekken die dat halen: zo dicht mogelijk
 * bij een hoek, zodat het open blad tegen de muur valt en de rest van de wand
 * vrij blijft voor een kast of een bed.
 */
function deurNaar(k: Kamer, circ: Kamer[], hinder: Vak[], bezet: Vak[]): Opening | null {
  const breedte = KLEINE_DEUR.has(k.naam) ? DEUR_KLEIN : DEUR;
  const circVakken = circ.map(vakVan);
  const kamerVak = vakVan(k);
  let best: Opening | null = null;
  let bestScore = Infinity;
  for (const c of circ) {
    for (const s of gedeeldeWanden(k, c)) {
      const speling = s.a1 - s.a0 - 2 * HOEK - breedte;
      if (speling < -EPS) continue;
      const stappen = Math.max(1, Math.ceil(speling / 0.05));
      for (let i = 0; i <= stappen; i++) {
        const van = s.a0 + HOEK + (Math.max(0, speling) * i) / stappen;
        const o: Opening = { verdieping: k.verdieping, as: s.as, vast: s.vast, van, tot: van + breedte, soort: "deur", kant: s.kant };
        const zw = zwaaiVak(o);
        if (!bedekt(zw, [kamerVak]) || bezet.some((b) => overlapt(zw, b))) continue;
        const vd = voorDeurVak(o);
        if (!bedekt(vd, circVakken) || hinder.some((h) => overlapt(vd, h))) continue;
        const naarVan = van - s.a0, naarTot = s.a1 - (van + breedte);
        // Dicht bij een hoek; bij gelijkspel de plek die het verst van de trap ligt.
        const trapAfstand = hinder.length ? Math.min(...hinder.map((h) => Math.abs((van + breedte / 2) - (s.as === "x" ? (h.x0 + h.x1) / 2 : (h.z0 + h.z1) / 2)))) : 0;
        const score = Math.min(naarVan, naarTot) - 0.01 * trapAfstand;
        if (score < bestScore - 1e-9) {
          bestScore = score;
          best = { ...o, scharnier: naarVan <= naarTot ? "van" : "tot" };
        }
      }
    }
  }
  return best;
}

/** Volgorde in een strook beneden aan de tuinkant: berging en wasplaats bij de keuken, de leefruimte aan het eind. */
const ACHTER_BENEDEN: Record<string, number> = { Berging: 0, Wasplaats: 1, Keuken: 2, Leefruimte: 9 };

/**
 * De indeling van één bouwlaag, zoals een Vlaamse woning meestal ligt: een
 * traphal dwars door het midden, kamers aan de tuinkant (achter, z klein) en
 * aan de straatkant (voor, z = l). Op het gelijkvloers loopt een hal van de
 * voordeur naar die traphal; het toilet ligt ernaast.
 *
 * Een appartement heeft geen voordeur in de gevel: het ligt op de tweede
 * verdieping (zie straat.py) en je komt binnen vanaf de overloop van de
 * trappenhal, die links tegen de unit staat. De gang wordt dan de inkomhal en
 * de voordeur zit in de linkerwand (x = 0), in de breedte van die hal.
 *
 * Elke kamer krijgt een deur naar de circulatie (zie `deurNaar`). Krijgt een
 * kamer er geen, dan schuift ze naar de andere kant van de gang; lukt het daar
 * ook niet, dan valt ze weg: liever een kamer minder dan een kamer zonder
 * deur. Een keuken naast de leefruimte krijgt een open doorgang en mag dan
 * via de leefruimte bereikbaar zijn. De vakken vullen de bouwlaag precies.
 */
function laagPlan(woning: Woning, v: number, lagen: number, dak: Dak, programma: Programma, w = WONING[woning].w): Omit<Plan, "ramen"> {
  const { l } = WONING[woning];
  const soort = laagSoort(woning, v, lagen, dak);
  const p = geldig(soort, programma);
  const ruimtes: Ruimte[] = [];
  for (const o of RUIMTES[soort]) for (let i = 0; i < (p[o.naam] ?? 0); i++) ruimtes.push({ naam: o.naam, gewicht: o.gewicht, kant: o.kant, minB: o.minB, i: ruimtes.length });

  const band = bandVan(lagen);
  // De gang ligt op elke bouwlaag even diep, zodat elk trapgat recht boven
  // zijn trap ligt: een trapkoker, zoals in een echte woning.
  const zb = gangDiepte(l, band);
  const trappen = lagen > 1 ? trappenVan(v, lagen, w, zb) : [];

  // Een open zolder is één ruimte: de trap komt erin uit.
  if (soort === "zolder" && ruimtes.length === 1 && ruimtes[0].naam === "Zolder") {
    return { kamers: [{ id: `${v}-0`, naam: "Zolder", verdieping: v, x: 0, z: 0, w, l, soort: "kamer" }], openingen: [], trappen };
  }

  // Krijgt een ruimte geen deur, dan eerst een andere volgorde in haar strook
  // (de kamer naast de trap heeft geen wand op de gang over), dan de andere
  // kant van de gang, en pas dan valt ze weg.
  const naarAnder = new Set<number>();
  const weg = new Set<number>();
  const volgorde: Partial<Record<"achter" | "voor", number[]>> = {};
  const geprobeerd = new Map<string, Set<string>>();
  let gangToilet = true;
  for (let poging = 0; poging < 400; poging++) {
    const r = probeer({ woning, v, w, l, band, zb, trappen, ruimtes: ruimtes.filter((x) => !weg.has(x.i)), naarAnder, gangToilet, volgorde });
    if (!("faal" in r)) return r;
    if (r.faal === "gangtoilet") {
      gangToilet = false;
      continue;
    }
    if (r.strook && r.leden.length > 1) {
      const sleutel = `${r.strook}:${[...r.leden].sort().join(",")}`;
      const al = geprobeerd.get(sleutel) ?? new Set([r.leden.join(",")]);
      geprobeerd.set(sleutel, al);
      const nieuw = permutaties(r.leden).find((p) => !al.has(p.join(",")));
      if (nieuw) {
        al.add(nieuw.join(","));
        volgorde[r.strook] = nieuw;
        continue;
      }
    }
    delete volgorde.achter;
    delete volgorde.voor;
    if (!naarAnder.has(r.faal)) naarAnder.add(r.faal);
    else weg.add(r.faal);
  }
  // Niet bereikbaar in de praktijk (elke ronde valt er iets weg), maar nooit een lege laag.
  return probeer({ woning, v, w, l, band, zb, trappen, ruimtes: [], naarAnder, gangToilet: false, volgorde: {} }) as Omit<Plan, "ramen">;
}

function permutaties(xs: number[]): number[][] {
  if (xs.length <= 1) return [xs];
  return xs.flatMap((x, i) => permutaties([...xs.slice(0, i), ...xs.slice(i + 1)]).map((p) => [x, ...p]));
}

interface Poging {
  woning: Woning; v: number; w: number; l: number; band: number; zb: number; trappen: Trap[];
  ruimtes: Ruimte[]; naarAnder: Set<number>; gangToilet: boolean;
  /** een andere volgorde van de ruimtes in een strook, als indexen */
  volgorde: Partial<Record<"achter" | "voor", number[]>>;
}

type Mislukt = { faal: number; strook?: "achter" | "voor"; leden: number[] } | { faal: "gangtoilet" };

function probeer(P: Poging): Omit<Plan, "ramen"> | Mislukt {
  const { v, w, l, band, zb, trappen } = P;
  const zf = zb + band;
  const metHal = v === 0;
  // Appartement: voordeur in de linkerwand, op de gang; geen hal aan de straatkant.
  const deurLinks = metHal && P.woning === "appartement";
  const voorHal = metHal && !deurLinks;
  const kamers: Kamer[] = [];
  const openingen: Opening[] = [];
  const ruimteVan = new Map<string, number>();
  let n = 0;
  const id = () => `${v}-${n++}`;
  const som = (r: Stuk[]) => r.reduce((t, s) => t + s.gewicht, 0);

  const ruimte = { achter: w, voor: w - (voorHal ? HAL : 0) };
  const achter: Ruimte[] = [], voor: Ruimte[] = [];
  const bezetB = (b: Stuk[]) => b.reduce((t, s) => t + (s.minB ?? MIN_BREEDTE), 0);
  const past = (b: Ruimte[], r: Stuk) => bezetB(b) + (r.minB ?? MIN_BREEDTE) <= (b === achter ? ruimte.achter : ruimte.voor) + 1e-9;
  // Eerst de ruimtes met een vaste kant (badkamer boven de keuken, toilet bij
  // de voordeur), daarna vullen de vrije ruimtes aan waar plaats is.
  const opVolgorde = [...P.ruimtes.filter((r) => r.kant !== "vrij"), ...P.ruimtes.filter((r) => r.kant === "vrij")];
  for (const r of opVolgorde) {
    let b: Ruimte[] = r.kant === "achter" ? achter : r.kant === "voor" ? voor : som(achter) <= som(voor) ? achter : voor;
    const ander = b === achter ? voor : achter;
    if (!past(b, r) || (r.kant === "vrij" && som(b) > som(ander) + 2.5 * r.gewicht && past(ander, r))) b = ander;
    // Kreeg deze ruimte de vorige keer geen deur: de andere kant van de gang.
    if (P.naarAnder.has(r.i)) b = b === achter ? voor : achter;
    if (!past(b, r)) continue;
    // Berging en wasplaats beneden horen bij de keuken en de tuindeur.
    if (metHal && b === voor && (r.naam === "Berging" || r.naam === "Wasplaats")) continue;
    // Een toilet boven tussen de kamers is een reep van 1 m op 5 m diep: alleen als hokje in de gang (zie onder).
    if (!metHal && r.naam === "Toilet" && !P.gangToilet) continue;
    b.push(r);
  }
  // De tuinkant is nooit leeg: die heeft de diepte nodig.
  if (achter.length === 0 && voor.length > 1) achter.push(voor.shift()!);
  // Ligt er aan de straatkant beneden enkel een toilet, dan was de rest één lege
  // inkomhal van de volle breedte. De leefruimte komt dan vooraan, de keuken
  // houdt de tuinkant: zithoek aan de straat, eetkeuken aan de tuin.
  const voorKamers = voor.filter((r) => r.naam !== "Toilet").length;
  if (metHal && achter.length >= 2 && (voorKamers === 0 || (P.woning === "open" && voorKamers === 1))) {
    const i = achter.findIndex((r) => r.naam === "Leefruimte");
    if (i >= 0 && !P.naarAnder.has(achter[i].i) && past(voor, achter[i]) && l - zf >= (achter[i].minB ?? 0) - 1e-9) voor.push(...achter.splice(i, 1));
  }
  if (metHal) {
    achter.sort((a, b) => (ACHTER_BENEDEN[a.naam] ?? 5) - (ACHTER_BENEDEN[b.naam] ?? 5));
    // Het toilet ligt tegen de hal, bij de voordeur.
    voor.sort((a, b) => Number(b.naam === "Toilet") - Number(a.naam === "Toilet"));
  }
  // Vanaf de tweede verdieping spiegelt de volgorde: natte ruimtes komen dan
  // aan de andere kant van de overloop dan op de eerste.
  if (v >= 2) {
    achter.reverse();
    voor.reverse();
  }
  for (const [naam, b] of [["achter", achter], ["voor", voor]] as const) {
    const vo = P.volgorde[naam];
    if (!vo || vo.length !== b.length || !b.every((r) => vo.includes(r.i))) continue;
    b.sort((x, y) => vo.indexOf(x.i) - vo.indexOf(y.i));
  }

  // Boven: een toilet wordt een hokje van 1 m aan het eind van de overloop,
  // tegen de linkergevel, ver van de trap.
  let gangToilet: Ruimte | null = null;
  if (!metHal) {
    for (const b of [achter, voor]) {
      const i = b.findIndex((r) => r.naam === "Toilet");
      if (i < 0) continue;
      // Niet op de vrije vloer voor of boven een trap.
      const hokje = { x0: 0, x1: TOILET_B, z0: zb, z1: zf };
      const vrij = trappen.every((t) => !overlapt(hokje, aanloopVak(t)) && !overlapt(hokje, bordesVak(t)) && !overlapt(hokje, trapVak(t)));
      if (P.gangToilet && vrij && trappen.length && achter.length + voor.length > 1) [gangToilet] = b.splice(i, 1);
      else return { faal: b[i].i, leden: [] };
      break;
    }
  }
  const gangX0 = gangToilet ? TOILET_B : 0;

  // Tuinkant
  const achterVakken = achter.length ? rij(0, w, achter) : [];
  const passages: Opening[] = [];
  achterVakken.forEach((r, i) => {
    const k: Kamer = { id: id(), naam: r.naam, verdieping: v, x: r.x, z: 0, w: r.w, l: zb, soort: "kamer" };
    ruimteVan.set(k.id, achter[i].i);
    kamers.push(k);
  });
  // Keuken naast leefruimte: open doorgang in de tussenwand.
  achterVakken.forEach((r, i) => {
    const buur = achterVakken[i + 1];
    if (!buur) return;
    const paar = [r.naam, buur.naam];
    if (paar.includes("Leefruimte") && paar.includes("Keuken")) {
      const breedte = Math.min(1.6, zb - 1.4);
      passages.push({ verdieping: v, as: "z", vast: buur.x, van: zb / 2 - breedte / 2, tot: zb / 2 + breedte / 2, soort: "open", kant: 1 });
    }
  });

  // Gang. Zonder kamers aan de straatkant loopt hij door tot de gevel; zonder
  // kamers aan de tuinkant begint hij achteraan.
  const gangNaam = !metHal ? "Overloop" : voor.length === 0 || deurLinks ? "Hal" : "Gang";
  const g0 = achterVakken.length ? zb : 0;
  const g1 = voor.length ? zf : l;
  kamers.push({ id: id(), naam: gangNaam, verdieping: v, x: gangX0, z: g0, w: w - gangX0, l: g1 - g0, soort: "circulatie" });
  if (gangToilet) {
    const k: Kamer = { id: id(), naam: "Toilet", verdieping: v, x: 0, z: g0, w: TOILET_B, l: g1 - g0, soort: "kamer" };
    ruimteVan.set(k.id, gangToilet.i);
    kamers.push(k);
  }
  if (deurLinks) {
    // In het midden van de gangstrook; de trap staat aan de andere kant (x = w).
    const zm = (zb + zf) / 2;
    openingen.push({ verdieping: v, as: "z", vast: 0, van: zm - 0.45, tot: zm + 0.45, soort: "voordeur", kant: 1 });
  } else if (metHal && voor.length === 0) {
    const [d0, d1] = P.woning === "open" ? [w / 2 - 0.45, w / 2 + 0.45] : [0.25, 1.15];
    openingen.push({ verdieping: v, as: "x", vast: l, van: d0, tot: d1, soort: "voordeur", kant: -1 });
  }

  // Straatkant. Een open woning heeft haar voordeur in het midden van de gevel:
  // de hal ligt dan in het midden, met de kamers links en rechts ervan en het
  // toilet tegen de hal. Elders ligt de hal tegen de linkergevel (de buur).
  if (voor.length > 0) {
    const centraal = metHal && P.woning === "open";
    let links: Ruimte[] = [], rechts: Ruimte[] = voor;
    let hx0 = 0, hx1 = voorHal ? HAL : 0;
    const toilet = voorHal ? voor.find((r) => r.naam === "Toilet") : undefined;
    if (centraal) {
      hx0 = w / 2 - HAL / 2;
      hx1 = w / 2 + HAL / 2;
      links = [];
      rechts = [];
      const breed = (b: Ruimte[]) => b.reduce((t, r) => t + (r.naam === "Toilet" ? TOILET_B : r.minB ?? MIN_BREEDTE), 0);
      // De grootste ruimtes eerst, telkens naar de kant met de meeste plaats over.
      for (const r of voor.filter((x) => x !== toilet).sort((p, q) => (q.minB ?? 0) - (p.minB ?? 0))) {
        const vrijL = hx0 - breed(links), vrijR = w - hx1 - breed(rechts);
        const kant = vrijL >= vrijR ? links : rechts;
        if (breed(kant) + (r.minB ?? MIN_BREEDTE) > (kant === links ? hx0 : w - hx1) + 1e-9) return { faal: r.i, strook: "voor", leden: voor.map((x) => x.i) };
        kant.push(r);
      }
      if (toilet) {
        const vrijL = hx0 - breed(links), vrijR = w - hx1 - breed(rechts);
        if (Math.max(vrijL, vrijR) < TOILET_B - 1e-9) return { faal: toilet.i, strook: "voor", leden: voor.map((x) => x.i) };
        if (vrijL >= vrijR) links.push(toilet);
        else rechts.unshift(toilet);
      }
      // Een kant zonder kamer hoort bij de hal; staat er enkel het toilet, dan tegen de gevel.
      if (links.length === 0) hx0 = 0;
      else if (links.length === 1 && links[0] === toilet) hx0 = TOILET_B;
      if (rechts.length === 0) hx1 = w;
      else if (rechts.length === 1 && rechts[0] === toilet) hx1 = w - TOILET_B;
    } else if (voorHal && voor.length === 1 && toilet) {
      // Alleen een toilet aan de straatkant: dan is de hal een inkomhal tot aan het toilet.
      hx1 = w - TOILET_B;
    }
    if (voorHal) {
      kamers.push({ id: id(), naam: "Hal", verdieping: v, x: hx0, z: zf, w: hx1 - hx0, l: l - zf, soort: "circulatie" });
      openingen.push({ verdieping: v, as: "x", vast: zf, van: hx0, tot: hx1, soort: "open", kant: 1 });
      const [d0, d1] = centraal ? [w / 2 - 0.45, w / 2 + 0.45] : [0.15, HAL - 0.15];
      openingen.push({ verdieping: v, as: "x", vast: l, van: d0, tot: d1, soort: "voordeur", kant: -1 });
    }
    const zet = (x0: number, x1: number, rs: Ruimte[]) => {
      if (!rs.length) return;
      const stukken: Stuk[] = rs.map((r) => (r === toilet ? { ...r, vast: TOILET_B } : r));
      rij(x0, x1, stukken).forEach((r, i) => {
        const bron = rs[i];
        // Beneden: het toilet is 1,5 m diep; het stuk erachter, tot de voorgevel, is een vestiaire bij de hal.
        if (bron === toilet && l - zf >= TOILET_L + 1.1) {
          const k: Kamer = { id: id(), naam: "Toilet", verdieping: v, x: r.x, z: zf, w: r.w, l: TOILET_L, soort: "kamer" };
          ruimteVan.set(k.id, bron.i);
          kamers.push(k);
          kamers.push({ id: id(), naam: "Vestiaire", verdieping: v, x: r.x, z: zf + TOILET_L, w: r.w, l: l - zf - TOILET_L, soort: "circulatie" });
          if (Math.abs(r.x - hx1) < EPS) openingen.push({ verdieping: v, as: "z", vast: r.x, van: zf + TOILET_L + 0.1, tot: l - 0.15, soort: "open", kant: 1 });
          else openingen.push({ verdieping: v, as: "z", vast: r.x + r.w, van: zf + TOILET_L + 0.1, tot: l - 0.15, soort: "open", kant: -1 });
          return;
        }
        const k: Kamer = { id: id(), naam: r.naam, verdieping: v, x: r.x, z: zf, w: r.w, l: l - zf, soort: "kamer" };
        ruimteVan.set(k.id, bron.i);
        kamers.push(k);
      });
    };
    zet(0, hx0, links);
    zet(hx1, w, rechts);
  }

  // Deuren: elke kamer één, naar de circulatie.
  const circ = kamers.filter((k) => k.soort === "circulatie");
  const hinder = trappen.map(trapVak);
  const bezet: Vak[] = [...passages, ...openingen.filter((o) => o.soort === "open")].map((o) => doorgangVak(o));
  const zonderDeur: Kamer[] = [];
  // Kleine ruimtes eerst: die hebben de minste keuze.
  for (const k of kamers.filter((kk) => kk.soort === "kamer").sort((a, b) => a.w * a.l - b.w * b.l)) {
    const o = deurNaar(k, circ, hinder, bezet);
    if (!o) {
      zonderDeur.push(k);
      continue;
    }
    openingen.push(o);
    bezet.push(zwaaiVak(o));
  }
  for (const k of zonderDeur) {
    // Een keuken of leefruimte met een open doorgang naar de andere is bereikbaar zolang die andere een deur heeft.
    const doorgang = passages.find((o) => Math.abs(o.vast - k.x) < EPS || Math.abs(o.vast - (k.x + k.w)) < EPS);
    if (doorgang && (k.naam === "Keuken" || k.naam === "Leefruimte")) {
      const partner = kamers.find((kk) => kk !== k && kk.z === 0 && (Math.abs(kk.x - doorgang.vast) < EPS || Math.abs(kk.x + kk.w - doorgang.vast) < EPS));
      if (partner && !zonderDeur.includes(partner)) continue;
    }
    if (gangToilet && k.naam !== "Toilet") return { faal: "gangtoilet" };
    const i = ruimteVan.get(k.id)!;
    const strook = achter.some((r) => r.i === i) ? "achter" : voor.some((r) => r.i === i) ? "voor" : undefined;
    return { faal: i, strook, leden: (strook === "achter" ? achter : strook === "voor" ? voor : []).map((r) => r.i) };
  }
  openingen.push(...passages);
  return { kamers, openingen, trappen };
}

/* ───────────── ramen en vaste inrichting ───────────── */

/** Ruimtes met vaste inrichting tegen één muur. */
const INGERICHT = new Set(["Keuken", "Badkamer", "Toilet", "Wasplaats"]);
/** Ruimtes waar je woont of slaapt: die hebben altijd daglicht nodig. */
export const MOET_RAAM = new Set(["Slaapkamer", "Leefruimte", "Keuken", "Bureau"]);
/** Natte en kleine ruimtes: een klein, hoog raam. */
const HOOG_RAAM = new Set(["Badkamer", "Toilet", "Wasplaats", "Berging", "Dressing"]);

/** Welke gevels vrij zijn (geen buur ertegen): links staat de buur van een halfopen woning. */
export function vrijeGevels(woning: Woning): Record<Gevel, boolean> {
  const { buren } = WONING[woning];
  // Links van een appartement staat de trappenhal (straat.py): daar zit de voordeur, geen raam.
  return { voor: true, achter: true, links: buren === 0 && woning !== "appartement", zij: buren < 2 };
}

/** De gevel waar een wand van de kamer tegen ligt, of null voor een binnenmuur. */
export function gevelVan(k: Kamer, wand: Wand, w: number, l: number): Gevel | null {
  if (wand === "achter" && k.z < EPS) return "achter";
  if (wand === "voor" && k.z + k.l > l - EPS) return "voor";
  if (wand === "links" && k.x < EPS) return "links";
  if (wand === "rechts" && k.x + k.w > w - EPS) return "zij";
  return null;
}

/** Ligt er een deur of doorgang in deze wand van de kamer? */
export function wandHeeftOpening(k: Kamer, wand: Wand, openingen: Opening[]): boolean {
  const as = wand === "achter" || wand === "voor" ? "x" : "z";
  const vast = wand === "achter" ? k.z : wand === "voor" ? k.z + k.l : wand === "links" ? k.x : k.x + k.w;
  const [a0, a1] = as === "x" ? [k.x, k.x + k.w] : [k.z, k.z + k.l];
  return openingen.some((o) => o.verdieping === k.verdieping && o.as === as && Math.abs(o.vast - vast) < EPS && o.tot > a0 + EPS && o.van < a1 - EPS);
}

const WANDEN: Wand[] = ["achter", "links", "rechts", "voor"];
const wandLengte = (k: Kamer, wand: Wand) => (wand === "achter" || wand === "voor" ? k.w : k.l);

/**
 * De muur voor de vaste inrichting: zonder deur of doorgang, lang genoeg, en
 * liefst een muur die in de opengewerkte laag op volle hoogte blijft (de
 * achter- en linkergevel), zodat er ook bovenkasten aan kunnen. Een keuken of
 * badkamer houdt haar enige vrije buitengevel voor het raam.
 */
function kiesInrichting(k: Kamer, openingen: Opening[], w: number, l: number, vrij: Record<Gevel, boolean>): Wand | undefined {
  const vrijeWanden = WANDEN.filter((wand) => {
    const g = gevelVan(k, wand, w, l);
    return g !== null && vrij[g];
  });
  let best: Wand | undefined;
  let bestScore = -Infinity;
  for (const wand of WANDEN) {
    if (wandHeeftOpening(k, wand, openingen)) continue;
    const g = gevelVan(k, wand, w, l);
    let s = wandLengte(k, wand);
    if (wand === "achter" ? k.z < EPS : wand === "links" ? k.x < EPS : false) s += 4;
    if (g && vrij[g]) s -= vrijeWanden.length === 1 ? 50 : 3;
    if (s > bestScore) {
      bestScore = s;
      best = wand;
    }
  }
  return best;
}

/**
 * Het kolomraster van de voorgevel: de ramen staan op elke bouwlaag op dezelfde
 * verticale assen. Een voordeur in het midden (open bebouwing) krijgt aan elke
 * kant evenveel kolommen; een deur aan de zijkant laat de rest van de gevel
 * gelijk verdelen. `bw` is de basisbreedte; per bouwlaag past `raamMaat` die aan.
 */
function gevelKolommen(woning: Woning, w: number, voordeur: Opening | undefined) {
  const deurKolom = voordeur && woning !== "appartement" ? voordeur : null;
  const n = w < 7 ? 2 : w < 9.5 ? 3 : 4;
  if (!deurKolom) {
    const stapw = w / n;
    return { kolommen: Array.from({ length: n }, (_, i) => stapw * (i + 0.5)), bw: Math.min(1.3, stapw * 0.58), deurKolom };
  }
  const links = deurKolom.van - 0.3, rechts = w - (deurKolom.tot + 0.3);
  if (Math.min(links, rechts) > 2) {
    // Deur in het midden: symmetrisch, aan elke kant de helft van de kolommen.
    const m = Math.max(1, Math.round((n - 1) / 2));
    const stapw = Math.min(links, rechts) / m;
    const kolommen = [
      ...Array.from({ length: m }, (_, i) => deurKolom.van - 0.3 - stapw * (i + 0.5)),
      ...Array.from({ length: m }, (_, i) => deurKolom.tot + 0.3 + stapw * (i + 0.5)),
    ];
    return { kolommen, bw: Math.min(1.3, stapw * 0.58), deurKolom };
  }
  const [s0, s1] = rechts >= links ? [deurKolom.tot + 0.3, w] : [0, deurKolom.van - 0.3];
  const stapw = (s1 - s0) / (n - 1);
  return { kolommen: Array.from({ length: n - 1 }, (_, i) => s0 + stapw * (i + 0.5)), bw: Math.min(1.3, stapw * 0.58), deurKolom };
}

/**
 * Hoe groot een raam in de voorgevel is, per bouwlaag. De lateien liggen op elke
 * laag even hoog (2,30 m); het gelijkvloers heeft brede, hoge ramen met een lage
 * borstwering (45 cm), de verdiepingen smallere met een borstwering van 1 m,
 * zoals bij slaapkamers. Zo leest de gevel als een echte woning: zwaar onderaan,
 * lichter naar boven, alles op dezelfde assen.
 */
function raamMaat(v: number, bw: number): { breed: number; onder: number } {
  return v === 0 ? { breed: Math.min(1.75, bw * 1.3), onder: 0.45 } : { breed: Math.min(1.1, bw * 0.82), onder: 1.0 };
}

/**
 * De ramen van een bouwlaag. Aan de voorgevel op het kolomraster, zoals de
 * gevel er van buiten uitziet, maar elk raam binnen één kamer: een raam over
 * een binnenmuur heen schuift of krimpt tot het in de kamer past. Aan de
 * andere gevels één raam per kamer, in het midden van haar stuk gevel. Nooit
 * in de muur met de vaste inrichting. Een kamer om in te wonen of te slapen
 * die zo nog geen raam heeft, krijgt er een in het midden van haar voorgevel.
 */
function ramenVan(laag: Kamer[], openingen: Opening[], woning: Woning, v: number, w: number, l: number, voordeur: Opening | undefined): Raam[] {
  const vrij = vrijeGevels(woning);
  const ramen: Raam[] = [];
  const MARGE = 0.25;
  const voeg = (k: Kamer, gevel: Gevel, c: number, bw: number, soort: Raam["soort"], onder: number, boven: number) => {
    const [a0, a1] = gevel === "voor" || gevel === "achter" ? [k.x, k.x + k.w] : [k.z, k.z + k.l];
    const van = Math.max(a0 + MARGE, c - bw / 2), tot = Math.min(a1 - MARGE, c + bw / 2);
    if (tot - van < 0.5 - EPS) return;
    if (ramen.some((r) => r.gevel === gevel && r.van < tot + 0.2 && van < r.tot + 0.2)) return;
    // Niet in de voordeur; die van een appartement zit in de linkerwand (as z), niet in de gevel.
    if (gevel === "voor" && v === 0 && voordeur?.as === "x" && van < voordeur.tot + 0.3 && voordeur.van - 0.3 < tot) return;
    ramen.push({ verdieping: v, gevel, van, tot, onder, boven, soort, kamer: k.id });
  };
  const hoog = (k: Kamer) => HOOG_RAAM.has(k.naam);

  // Voorgevel: het kolomraster.
  const { kolommen, bw, deurKolom } = gevelKolommen(woning, w, voordeur);
  const voorKamers = laag.filter((k) => k.z + k.l > l - EPS);
  const kolomRamen: [number, number][] = kolommen.map((c) => [c, bw]);
  if (deurKolom && v > 0) kolomRamen.push([(deurKolom.van + deurKolom.tot) / 2, Math.min(bw, deurKolom.tot - deurKolom.van + 0.12)]);
  const maat = raamMaat(v, bw);
  // Appartement: over de hele breedte van de onderste laag loopt een terras
  // (straat.py zet het in de voorlaag), dus de voorramen zijn daar raamdeuren.
  const terras = woning === "appartement" && v === 0;
  const voorRaam = (k: Kamer): [Raam["soort"], number] => (hoog(k) ? ["hoog", 1.5] : terras ? ["raamdeur", 0.02] : ["raam", maat.onder]);
  for (const [c, b0] of kolomRamen) {
    const b = b0 === bw ? maat.breed : Math.min(b0, maat.breed);
    const k = voorKamers.find((kk) => c > kk.x && c < kk.x + kk.w) ?? voorKamers.find((kk) => c - b / 2 < kk.x + kk.w && kk.x < c + b / 2);
    if (!k || k.inrichting === "voor") continue;
    // Schuift binnen de kamer als het raam over een binnenmuur zou lopen.
    const mid = Math.min(Math.max(c, k.x + MARGE + b / 2), k.x + k.w - MARGE - b / 2);
    voeg(k, "voor", mid, b, ...voorRaam(k), 2.3);
  }

  // Achter-, linker- en zijgevel: één raam per kamer.
  for (const k of laag) {
    for (const wand of ["achter", "links", "rechts"] as Wand[]) {
      const g = gevelVan(k, wand, w, l);
      if (!g || !vrij[g] || k.inrichting === wand) continue;
      const lang = wandLengte(k, wand);
      const mid = g === "achter" ? k.x + k.w / 2 : k.z + k.l / 2;
      if (k.soort === "circulatie") {
        // De traphal krijgt licht aan de zijgevel, boven het bordes.
        if (g === "zij") voeg(k, g, mid, Math.min(0.9, lang - 0.5), "raam", 0.9, 2.3);
        continue;
      }
      if (hoog(k)) voeg(k, g, mid, Math.min(0.7, lang * 0.4), "hoog", 1.6, 2.25);
      else if (g === "achter" && v === 0 && k.naam === "Leefruimte") voeg(k, g, mid, Math.min(2.4, lang * 0.55), "raamdeur", 0.02, 2.3);
      else voeg(k, g, mid, Math.min(1.4, lang * 0.5), "raam", 0.9, 2.3);
    }
  }

  // Wie zo nog geen raam heeft en er een nodig heeft: in het midden van zijn voorgevel.
  for (const k of voorKamers) {
    if (!MOET_RAAM.has(k.naam) || ramen.some((r) => r.kamer === k.id) || k.inrichting === "voor") continue;
    voeg(k, "voor", k.x + k.w / 2, Math.min(maat.breed, k.w - 2 * MARGE), ...voorRaam(k), 2.3);
  }
  return ramen;
}

/**
 * Het plan van de hele woning. `programmas` geeft per bouwlaag welke ruimtes
 * er zijn; ontbreekt er een, dan geldt de standaardindeling. Alleen de
 * tekening en de verdeling van de toestellen hangen ervan af — het pakket
 * niet: de catalogus rekent per oppervlakte.
 */
export function planVoor(woning: Woning, verdiepingen: number, dak: Dak, programmas: (Programma | undefined)[] = [], breedte = WONING[woning].w): Plan {
  const lagen = Math.min(MAX_VERDIEPINGEN, Math.max(1, verdiepingen));
  const { l } = WONING[woning];
  const vrij = vrijeGevels(woning);
  const uit: Plan = { kamers: [], openingen: [], trappen: [], ramen: [] };
  for (let v = 0; v < lagen; v++) {
    const p = programmas[v] ?? standaardProgramma(woning, v, lagen, dak, breedte);
    const laag = laagPlan(woning, v, lagen, dak, p, breedte);
    for (const k of laag.kamers) {
      if (k.soort !== "circulatie" && INGERICHT.has(k.naam)) k.inrichting = kiesInrichting(k, laag.openingen, breedte, l, vrij);
    }
    uit.kamers.push(...laag.kamers);
    uit.openingen.push(...laag.openingen);
    uit.trappen.push(...laag.trappen);
  }
  const voordeur = uit.openingen.find((o) => o.soort === "voordeur");
  for (let v = 0; v < lagen; v++) {
    const laag = uit.kamers.filter((k) => k.verdieping === v);
    const ramen = ramenVan(laag, uit.openingen.filter((o) => o.verdieping === v), woning, v, breedte, l, voordeur);
    uit.ramen.push(...ramen);
    for (const k of laag) {
      if ((k.naam === "Badkamer" || k.naam === "Toilet") && !ramen.some((r) => r.kamer === k.id)) k.rooster = true;
    }
  }
  return uit;
}

/** De kamers (met gang en hal) bij een aantal kamers per bouwlaag. */
export function kamersVoor(woning: Woning, verdiepingen: number, dak: Dak, aantallen: number[] = [], breedte = WONING[woning].w): Kamer[] {
  const lagen = Math.min(MAX_VERDIEPINGEN, Math.max(1, verdiepingen));
  const programmas = Array.from({ length: lagen }, (_, v) =>
    aantallen[v] === undefined ? undefined : programmaVan(laagSoort(woning, v, lagen, dak), Math.min(aantallen[v], maxKamers(woning, v, lagen, dak, breedte)), lagen),
  );
  return planVoor(woning, lagen, dak, programmas, breedte).kamers;
}

/**
 * Hoeveel kamers er echt passen op deze bouwlaag: het grootste aantal uit de
 * standaardvolgorde waarvoor elke ruimte zijn minimale breedte krijgt.
 */
export function maxKamers(woning: Woning, v: number, verdiepingen: number, dak: Dak, breedte = WONING[woning].w): number {
  // Van onder naar boven: het maximum is het aantal tot waar élk kleiner aantal
  // ook past. Soms past zes wel en vijf niet (een toilet als hokje in de gang
  // laat een andere verdeling toe); dan zou de bezoeker bij vijf een kamer
  // zien verdwijnen die hij net koos.
  const soort = laagSoort(woning, v, verdiepingen, dak);
  for (let n = MIN_KAMERS + 1; n <= MAX_KAMERS; n++) {
    const p = programmaVan(soort, n, verdiepingen);
    const kamers = laagPlan(woning, v, verdiepingen, dak, p, breedte).kamers.filter((k) => k.soort === "kamer").length;
    if (kamers !== aantalKamers(p)) return n - 1;
  }
  return MAX_KAMERS;
}

export interface Plaatsing {
  k: DeviceKey;
  kamer: string;
  /** positie in meter, binnen de kamer */
  x: number;
  z: number;
  /** de hoeveelste van deze soort, voor een verschoven animatiefase */
  n: number;
}

/**
 * Verdeelt de toestellen uit het pakket over de kamers.
 *
 * Drogers gaan eerst naar de grootste ruimtes, met per kamer hooguit één tot
 * elke kamer er een heeft — zo werkt het op de werf ook: één droger per ruimte
 * met de deuren open, en wat overblijft bij de grootste natte oppervlakte.
 * Ventilatoren staan waar de meeste lucht te verplaatsen is, kachels verdeeld
 * over de lagen. Het aantal komt altijd uit `items`; deze functie verplaatst
 * alleen.
 */
export function plaatsToestellen(items: PackageItem[], kamers: Kamer[], trappen: Trap[] = []): Plaatsing[] {
  if (kamers.length === 0) return [];
  const opp = (k: Kamer) => k.w * k.l;
  const bezet = new Map<string, number>();
  const uit: Plaatsing[] = [];

  const drogersIn = new Map<string, number>();
  const isDroger = (k: DeviceKey) => k === "small" || k === "medium";
  // Een hal, gang, overloop of toilet krijgt geen droger of kachel: de lucht komt er via de
  // open deuren.
  const doorloop = (kamer: Kamer) => kamer.soort === "circulatie" || kamer.naam === "Toilet";
  const geschikt = (kamer: Kamer, k: DeviceKey) => (isDroger(k) || k === "kachel") ? !doorloop(kamer) : true;

  const kies = (k: DeviceKey): Kamer => {
    let kandidaten = kamers.filter((kamer) => geschikt(kamer, k));
    if (kandidaten.length === 0) kandidaten = kamers;
    // Drogers: eerst elke kamer één, pas daarna een tweede in de grootste.
    if (isDroger(k)) {
      const min = Math.min(...kandidaten.map((kamer) => drogersIn.get(kamer.id) ?? 0));
      kandidaten = kandidaten.filter((kamer) => (drogersIn.get(kamer.id) ?? 0) === min);
    }
    const factor = (kamer: Kamer) => (kamer.naam === "Badkamer" ? (k === "kachel" ? 0.3 : 0.4) : 1);
    const score = (kamer: Kamer) => (opp(kamer) * factor(kamer)) / ((bezet.get(kamer.id) ?? 0) + 1);
    return kandidaten.reduce((best, kamer) => (score(kamer) > score(best) + 1e-9 ? kamer : best));
  };

  // Volgorde: drogers eerst (die bepalen de verdeling), dan lucht, dan warmte.
  const volgorde: DeviceKey[] = ["medium", "small", "axiaal", "kachel"];
  const perSoort = new Map<DeviceKey, number>();
  for (const k of volgorde) {
    const q = items.find((it) => it.k === k)?.q ?? 0;
    for (let i = 0; i < q; i++) {
      const kamer = kies(k);
      const plek = bezet.get(kamer.id) ?? 0;
      bezet.set(kamer.id, plek + 1);
      if (isDroger(k)) drogersIn.set(kamer.id, (drogersIn.get(kamer.id) ?? 0) + 1);
      const [fx, fz] = SLOTS[plek % SLOTS.length];
      const n = perSoort.get(k) ?? 0;
      perSoort.set(k, n + 1);
      const [x, z] = naastTrap(kamer, kamer.w * fx, kamer.l * fz, trappen);
      uit.push({ k, kamer: kamer.id, x, z, n });
    }
  }
  return uit;
}

/**
 * Valt een plek in een trapgat (een open zolder heeft de trap in de kamer), dan
 * schuift het toestel naar de tuin- of straatkant van de trap, wat het verst
 * binnen de kamer blijft. Coördinaten zijn relatief aan de kamer.
 */
function naastTrap(kamer: Kamer, x: number, z: number, trappen: Trap[]): [number, number] {
  const marge = 0.6;
  for (const t of trappen) {
    if (t.verdieping !== kamer.verdieping) continue;
    const ax = kamer.x + x, az = kamer.z + z;
    if (ax < t.x - marge || ax > t.x + t.w + marge || az < t.z - marge || az > t.z + t.l + marge) continue;
    const achter = t.z - marge - kamer.z;
    const voor = t.z + t.l + marge - kamer.z;
    const ruimAchter = achter >= marge, ruimVoor = voor <= kamer.l - marge;
    if (ruimAchter && (!ruimVoor || achter >= kamer.l - voor)) return [x, achter];
    if (ruimVoor) return [x, voor];
  }
  return [x, z];
}

/** Plekken binnen een kamer, als fracties: midden eerst, daarna de hoeken. */
const SLOTS: [number, number][] = [
  [0.5, 0.5],
  [0.25, 0.3],
  [0.75, 0.7],
  [0.75, 0.3],
  [0.25, 0.7],
];

export function verdiepingNaam(v: number, totaal: number, dak: Dak, taal: Taal = "nl"): string {
  if (taal === "fr") {
    if (v === 0) return "Rez-de-chaussée";
    if (isZolder(v, totaal, dak)) return "Grenier";
    return v === 1 ? "1er étage" : `${v}e étage`;
  }
  if (taal === "en") {
    if (v === 0) return "Ground floor";
    if (isZolder(v, totaal, dak)) return "Attic";
    return v === 1 ? "1st floor" : v === 2 ? "2nd floor" : v === 3 ? "3rd floor" : `${v}th floor`;
  }
  if (v === 0) return "Gelijkvloers";
  if (isZolder(v, totaal, dak)) return "Zolder";
  return v === 1 ? "1e verdieping" : `${v}e verdieping`;
}

/* ───────────────────────── teksten in het Frans ───────────────────────── */

/*
  Alleen weergave. De Nederlandse tabellen hierboven blijven de bron: hun
  sleutels en zelfs de kamernamen ("Toilet", "Keuken") sturen de indeling en
  de plaatsing, dus die mogen niet van taal wisselen. Wat de bezoeker leest,
  haalt de pagina via de functies hieronder; zonder `taal` is dat het
  Nederlands van altijd.
*/

const WONING_FR: Record<Woning, { label: string; sub: string }> = {
  rijwoning: { label: "Maison mitoyenne", sub: "Deux murs mitoyens" },
  halfopen: { label: "Semi-mitoyenne", sub: "Un mur mitoyen" },
  open: { label: "Maison quatre façades", sub: "Isolée" },
  appartement: { label: "Appartement", sub: "Un ou deux niveaux" },
};

const DAK_FR: Record<Dak, { label: string; sub: string }> = {
  zadeldak: { label: "Toit à deux versants", sub: "Deux pans inclinés" },
  plat: { label: "Toit plat", sub: "Ou un appartement au-dessus" },
  lessenaar: { label: "Toit en appentis", sub: "Un seul pan incliné" },
};

const WAT_FR: Record<Wat, { label: string; sub: string }> = {
  pleister: { label: "Plafonnage", sub: "Murs et plafonds" },
  chape: { label: "Chape", sub: "Chape de sol" },
  beide: { label: "Plafonnage + chape", sub: "Murs et sol" },
  waterschade: { label: "Maçonnerie et dalle", sub: "Eau de pluie dans le gros œuvre" },
};

type FaseTekst = Pick<FaseInfo, "label" | "kort" | "advies" | "druppelsTekst" | "starten" | "meten" | "letOp"> & {
  pin: string;
};

const FASE_FR: Record<Fase, FaseTekst> = {
  ruwbouw: {
    label: "Gros œuvre, fenêtres encore ouvertes",
    kort: "Gros œuvre",
    advies: "La maçonnerie et la dalle sont gorgées d'eau de pluie. Le séchage n'est possible qu'une fois les ouvertures fermées, sinon vous séchez l'air extérieur.",
    druppelsTekst: "eau de pluie",
    pin: "Eau de pluie sur la dalle",
    starten: "Après fermeture avec du film",
    meten: "Pas encore",
    letOp: "Fermer d'abord les ouvertures",
  },
  ramen: {
    label: "Fenêtres posées",
    kort: "Fenêtres posées",
    advies: "Le bon moment pour sécher la maçonnerie et la dalle, avant que la chape soit coulée.",
    druppelsTekst: "modéré",
    pin: "Humidité dans la maçonnerie",
    starten: "Tout de suite",
    meten: "Pas nécessaire",
    letOp: "Eau de pluie sur la dalle",
  },
  chape: {
    label: "Chape coulée",
    kort: "Chape",
    advies: "Une chape apporte le plus d'eau dans la maison : environ une semaine par centimètre pour sécher.",
    druppelsTekst: "le plus",
    pin: "Eau dans la chape",
    starten: "Après ± 1 semaine de prise",
    meten: "Avant carrelage ou parquet",
    letOp: "Ne pas forcer trop tôt",
  },
  tegels: {
    label: "Carrelage posé",
    kort: "Carrelage",
    advies: "Le carrelage enferme l'humidité dans la chape. Elle ne peut plus s'échapper que par les joints et les murs.",
    druppelsTekst: "enfermée",
    pin: "Humidité sous le carrelage",
    starten: "Tout de suite",
    meten: "Chape sous le carrelage",
    letOp: "L'humidité est enfermée",
  },
  gepleisterd: {
    label: "Fraîchement plafonné",
    kort: "Plafonné",
    advies: "Le plafonnage sèche environ une semaine par centimètre. Ce n'est qu'ensuite qu'on peut peindre.",
    druppelsTekst: "beaucoup",
    pin: "Plafonnage humide",
    starten: "Après 2 à 3 jours",
    meten: "Avant de peindre",
    letOp: "La peinture sur plafonnage humide s'écaille",
  },
  afgewerkt: {
    label: "Fini ou habité",
    kort: "Fini",
    advies:
      "La peinture et le sol retiennent la dernière humidité : taches d'humidité, condensation ou moisissures dans les coins. Les déshumidificateurs fonctionnent aussi pendant que vous y habitez, et ils sont assez silencieux pour une chambre.",
    druppelsTekst: "cachée",
    pin: "Humidité résiduelle derrière la peinture",
    starten: "Tout de suite, en douceur",
    meten: "D'abord : où se trouve-t-elle ?",
    letOp: "Assez silencieux pour une chambre",
  },
};

/** Kamernamen zoals ze in de tekening staan; de sleutel blijft de Nederlandse naam. */
const KAMER_FR: Record<string, string> = {
  Leefruimte: "Séjour",
  Keuken: "Cuisine",
  Slaapkamer: "Chambre",
  Bureau: "Bureau",
  Berging: "Rangement",
  Wasplaats: "Buanderie",
  Badkamer: "Salle de bain",
  Toilet: "WC",
  Dressing: "Dressing",
  Zolder: "Grenier",
  Overloop: "Palier",
  Hal: "Hall",
  Gang: "Couloir",
  Vestiaire: "Vestiaire",
};

/* ───────────────────────── teksten in het Engels ───────────────────────── */

/* Zelfde regel als hierboven: alleen weergave, de Nederlandse sleutels blijven sturen. */

const WONING_EN: Record<Woning, { label: string; sub: string }> = {
  rijwoning: { label: "Terraced house", sub: "Two party walls" },
  halfopen: { label: "Semi-detached", sub: "One party wall" },
  open: { label: "Detached house", sub: "Free-standing" },
  appartement: { label: "Apartment", sub: "One or two storeys" },
};

const DAK_EN: Record<Dak, { label: string; sub: string }> = {
  zadeldak: { label: "Pitched roof", sub: "Two sloping planes" },
  plat: { label: "Flat roof", sub: "Or an apartment above" },
  lessenaar: { label: "Mono-pitch roof", sub: "One sloping plane" },
};

const WAT_EN: Record<Wat, { label: string; sub: string }> = {
  pleister: { label: "Plasterwork", sub: "Walls and ceilings" },
  chape: { label: "Screed", sub: "Floor screed" },
  beide: { label: "Plasterwork + screed", sub: "Walls and floor" },
  waterschade: { label: "Masonry and floor slab", sub: "Rainwater in the shell" },
};

const FASE_EN: Record<Fase, FaseTekst> = {
  ruwbouw: {
    label: "Shell, windows still open",
    kort: "Shell",
    advies: "The masonry and floor slab are soaked with rainwater. Drying only works once the openings are closed, otherwise you are drying the outside air.",
    druppelsTekst: "rainwater",
    pin: "Rainwater on the floor slab",
    starten: "After sealing with sheeting",
    meten: "Not yet",
    letOp: "Close the openings first",
  },
  ramen: {
    label: "Windows fitted",
    kort: "Windows fitted",
    advies: "The right moment to dry out the masonry and floor slab, before the screed goes down.",
    druppelsTekst: "moderate",
    pin: "Moisture in the masonry",
    starten: "Straight away",
    meten: "Not needed",
    letOp: "Rainwater on the floor slab",
  },
  chape: {
    label: "Screed poured",
    kort: "Screed",
    advies: "A screed brings the most water into the house: roughly a week per centimetre to dry.",
    druppelsTekst: "the most",
    pin: "Water in the screed",
    starten: "After ± 1 week of curing",
    meten: "Before tiles or parquet",
    letOp: "Don't force it too early",
  },
  tegels: {
    label: "Tiles laid",
    kort: "Tiles",
    advies: "Tiles lock the moisture into the screed. It can only escape through the joints and the walls.",
    druppelsTekst: "trapped",
    pin: "Moisture under the tiles",
    starten: "Straight away",
    meten: "Screed under the tiles",
    letOp: "Moisture is trapped",
  },
  gepleisterd: {
    label: "Freshly plastered",
    kort: "Plastered",
    advies: "Plasterwork dries at roughly a week per centimetre. Only then can it be painted.",
    druppelsTekst: "a lot",
    pin: "Wet plasterwork",
    starten: "After 2 to 3 days",
    meten: "Before painting",
    letOp: "Paint on wet plaster peels",
  },
  afgewerkt: {
    label: "Finished or lived in",
    kort: "Finished",
    advies:
      "Paint and flooring hold on to the last moisture: damp patches, condensation or mould in the corners. The dehumidifiers also work while you live there, and they are quiet enough for a bedroom.",
    druppelsTekst: "hidden",
    pin: "Residual moisture behind the paint",
    starten: "Straight away, gently",
    meten: "First: where is it?",
    letOp: "Quiet enough for a bedroom",
  },
};

const KAMER_EN: Record<string, string> = {
  Leefruimte: "Living room",
  Keuken: "Kitchen",
  Slaapkamer: "Bedroom",
  Bureau: "Study",
  Berging: "Storage room",
  Wasplaats: "Utility room",
  Badkamer: "Bathroom",
  Toilet: "WC",
  Dressing: "Dressing room",
  Zolder: "Attic",
  Overloop: "Landing",
  Hal: "Hall",
  Gang: "Corridor",
  Vestiaire: "Cloakroom",
};

/** `WONING` met label en ondertitel in de taal van de pagina; maten ongewijzigd. */
export function woningTekst(w: Woning, taal: Taal = "nl"): { label: string; sub: string } {
  return taal === "fr" ? WONING_FR[w] : taal === "en" ? WONING_EN[w] : WONING[w];
}

export function dakTekst(d: Dak, taal: Taal = "nl"): { label: string; sub: string } {
  return taal === "fr" ? DAK_FR[d] : taal === "en" ? DAK_EN[d] : DAK_LABEL[d];
}

export function watTekst(w: Wat, taal: Taal = "nl"): { label: string; sub: string } {
  return taal === "fr" ? WAT_FR[w] : taal === "en" ? WAT_EN[w] : WAT_LABEL[w];
}

/** `FASE[f]` met de leesbare velden in de taal van de pagina; cijfers en foto ongewijzigd. */
export function faseInTaal(f: Fase, taal: Taal = "nl"): FaseInfo {
  if (taal === "nl") return FASE[f];
  const { pin, ...t } = taal === "fr" ? FASE_FR[f] : FASE_EN[f];
  return { ...FASE[f], ...t, pin: { ...FASE[f].pin, tekst: pin } };
}

/** De naam van een kamer in de tekening; `naam` is de Nederlandse sleutel. */
export function kamerNaam(naam: string, taal: Taal = "nl"): string {
  if (taal === "fr") return KAMER_FR[naam] ?? naam;
  if (taal === "en") return KAMER_EN[naam] ?? naam;
  return naam;
}

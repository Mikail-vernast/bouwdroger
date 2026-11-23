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
   * Een tweede rechthoek van een ruimte die geen rechthoek is (de zithoek naast de
   * hal, de doorgang naast het toilet, de strook langs het trapgat): geen eigen
   * label en geen eigen kamer in de telling.
   */
  deel?: boolean;
  /** Bij een `deel` van een kamer: de id van de hoofdrechthoek. Toestellen tellen ze als één ruimte. */
  hoort?: string;
}

/**
 * Een opening in een wand. `as` is de richting van de wand ("x" = evenwijdig
 * met de voorgevel), `vast` de plek ervan op de andere as, `van`–`tot` het
 * stuk dat open is. Een deur draait naar `kant` (+1 = richting +z/+x).
 */
export interface Opening {
  verdieping: number;
  as: "x" | "z";
  vast: number;
  van: number;
  tot: number;
  soort: "deur" | "open" | "voordeur";
  kant: 1 | -1;
  /** Aan welk eind het scharnier zit; open ligt het blad tegen de muur aan die kant. */
  scharnier?: "van" | "tot";
}

/**
 * Een rechte trap tegen de linkermuur van de hal. Hij klimt naar de tuinkant: de
 * voet ligt aan de voorkant (z + l), de bovenste trede komt uit op de overloop (z).
 * `op` = er gaat een trap naar boven, anders is dit het trapgat van de trap eronder.
 */
export interface Trap {
  verdieping: number;
  x: number;
  z: number;
  w: number;
  l: number;
  op: boolean;
}

export interface Plan {
  kamers: Kamer[];
  openingen: Opening[];
  trappen: Trap[];
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

/** De minimale maten van een ruimte: [korte zijde, lange zijde]. */
export const MIN_MAAT: Record<string, readonly [number, number]> = {
  Leefruimte: [3.4, 4], Keuken: [2.4, 2.6], Slaapkamer: [2.7, 3], Bureau: [2.2, 2.5],
  Badkamer: [2, 2.2], Toilet: [0.9, 1.5], Berging: [1.4, 1.6], Wasplaats: [1.6, 1.8],
  Dressing: [1.4, 1.8], Zolder: [3, 3],
};
const opt = (naam: string, meervoud: string, min: number, max: number, gewicht: number, kant: RuimteOptie["kant"]): RuimteOptie =>
  ({ naam, meervoud, min, max, gewicht, kant, minB: MIN_MAAT[naam]?.[0] ?? 1.5 });

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
export function standaardKamers(woning: Woning, v: number, verdiepingen: number, dak: Dak): number {
  if (isZolder(v, verdiepingen, dak)) return 1;
  const smal = WONING[woning].w < 7;
  if (woning === "appartement" && v === 0) return verdiepingen === 1 ? 4 : 3;
  if (v === 0 && verdiepingen === 1) return smal ? 3 : 4; // bungalow: ook slaapkamer en badkamer beneden
  // Ook een rijwoning heeft beneden een toilet: leefruimte, keuken, toilet.
  if (v === 0) return 3;
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

export function standaardProgramma(woning: Woning, v: number, verdiepingen: number, dak: Dak): Programma {
  return programmaVan(laagSoort(woning, v, verdiepingen, dak), standaardKamers(woning, v, verdiepingen, dak), verdiepingen);
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

/*
  De indeling volgt vaste regels, geen vaste plattegrond: zo blijft ze logisch
  als er kamers bijkomen of het huis groter is.

  - De kern ligt op elke bouwlaag op dezelfde plek, tegen de linkermuur (bij een
    rij- of halfopen woning de gemene muur): een rechte trap van 14 treden die
    van de voordeur naar de tuinkant klimt, met erachter een dwarse strook van
    1,5 m. Beneden is die strook het toilet en de doorgang naar de leefruimte,
    boven de overloop. Trapgat en overloop schuiven dus nooit mee.
  - Gelijkvloers: aan de tuinkant leefruimte en keuken over de volle breedte;
    aan de straatkant de hal met de trap (en onder de trap de vestiairekast).
    Extra ruimtes (bureau, berging, wasplaats, ...) komen naast de hal, gestapeld
    van de voorgevel naar achter, of — als ze zo niet passen — aan een gang
    tussen hal en leefzone. Wat vooraan overblijft is de zithoek van de leefruimte.
  - Verdieping: de overloop loopt dwars door het huis; slaapkamers, badkamer en
    bureau liggen er aan beide kanten tegen, een apart toilet is een hokje aan
    het eind. Geen kamer ligt achter een andere kamer.
  - Wat niet past met zijn minimale maten, valt weg (maxKamers telt hoeveel er
    passen); een kamer wordt nooit kleiner gemaakt dan zijn minimum.

  Coördinaten in meter: x langs de voorgevel (0 = linkermuur), z van de
  achtergevel (0, tuinkant) naar de voorgevel (l, straatkant).
*/

/** De trap: 14 treden van 25 cm diep, 90 cm breed plus speling tegen de muur. */
const TRAP_B = 0.95;
const TRAP_L = 3.5;
/** De dwarse strook achter de trap: toilet beneden, overloop boven. */
const KERN = 1.5;
/** Vrije ruimte aan de voet van de trap, bij de voordeur. */
const VOET = 1.0;
/** Een gang (tussen hal en leefzone, als de extra ruimtes niet naast de hal passen). */
const GANG = 1.2;
/** Het toilethokje op een verdieping, aan het eind van de overloop. */
const TOILET_BOVEN = 1.0;

/** De hal: de trap plus een doorgang van minstens 95 cm. */
export function halBreedte(w: number): number {
  return w >= 9 ? 2.1 : 1.9;
}

/** Waar de kern begint: de tuinkant ervoor is de leefzone (beneden) of de achterste kamers (boven). */
export function kernDiepte(l: number): number {
  return Math.round((l - KERN - TRAP_L - VOET) * 10) / 10;
}

/** Hoe diep (of breed) een ruimte graag is, als er plaats genoeg is. */
const VOORKEUR: Record<string, number> = {
  Slaapkamer: 3.4, Bureau: 3, Badkamer: 2.6, Wasplaats: 2.2, Berging: 2, Dressing: 2,
};

/** Hoe smal een ruimte mag zijn als de andere kant `diepte` meet; Infinity = past niet. */
function minBreedte(naam: string, diepte: number): number {
  const [kort, lang] = MIN_MAAT[naam] ?? [1.5, 1.5];
  if (diepte >= lang - 1e-9) return kort;
  if (diepte >= kort - 1e-9) return lang;
  return Infinity;
}

interface Ruimte { naam: string; gewicht: number; kant: RuimteOptie["kant"] }

/** Ruimtes die de overschot van een strook krijgen; de rest houdt zijn voorkeursmaat. */
const REKT = new Set(["Slaapkamer", "Bureau", "Zolder", "Leefruimte"]);

/**
 * De breedtes van ruimtes naast elkaar in een strook: badkamer, berging en
 * dergelijke krijgen hun voorkeursmaat, slaapkamers en bureau de rest. Een
 * badkamer van 4 m breed omdat er toevallig plaats was, leest als een zaal.
 */
function breedtes(rij: Ruimte[], lengte: number, diepte: number): number[] | null {
  const mins = rij.map((r) => minBreedte(r.naam, diepte));
  const doel = rij.map((r, i) => (REKT.has(r.naam) ? mins[i] : Math.max(mins[i], VOORKEUR[r.naam] ?? mins[i])));
  const rekt = rij.map((r) => (REKT.has(r.naam) ? r.gewicht : 0));
  if (rekt.some((g) => g > 0) && doel.reduce((a, c) => a + c, 0) <= lengte + 1e-9) return verdeel(lengte, doel, rekt);
  return verdeel(lengte, mins, rij.map((r) => r.gewicht));
}

/**
 * Verdeelt een strook van lengte `lengte` over ruimtes: elk eerst zijn minimum,
 * de rest naar gewicht. Null als het minimum al niet past.
 */
function verdeel(lengte: number, mins: number[], gewichten: number[]): number[] | null {
  const vast = mins.reduce((a, b) => a + b, 0);
  if (!Number.isFinite(vast) || vast > lengte + 1e-9) return null;
  const totaal = gewichten.reduce((a, b) => a + b, 0) || 1;
  const maten = mins.map((m, i) => Math.round((m + ((lengte - vast) * gewichten[i]) / totaal) * 100) / 100);
  // Afronding: de laatste vult de strook precies.
  maten[maten.length - 1] = Math.round((lengte - maten.slice(0, -1).reduce((a, b) => a + b, 0)) * 1000) / 1000;
  return maten;
}

interface Bouw {
  v: number;
  kamers: Kamer[];
  openingen: Opening[];
  n: number;
}

function kamer(b: Bouw, naam: string, x: number, z: number, w: number, l: number, extra: Partial<Kamer> = {}): Kamer {
  const k: Kamer = { id: `${b.v}-${b.n++}`, naam, verdieping: b.v, x, z, w, l, soort: "kamer", ...extra };
  b.kamers.push(k);
  return k;
}

/**
 * Een deur in de wand tussen een gang en een kamer, 10 cm uit een hoek van de
 * kamer. Het scharnier zit aan die hoek en het blad draait de kamer in: open
 * ligt het tegen de muur, niet midden in de doorgang.
 */
function deur(b: Bouw, as: "x" | "z", vast: number, van: number, tot: number, kant: 1 | -1, hoek: "van" | "tot", breedte = 0.85) {
  const bw = Math.min(breedte, tot - van - 0.2);
  const [a, c] = hoek === "van" ? [van + 0.1, van + 0.1 + bw] : [tot - 0.1 - bw, tot - 0.1];
  b.openingen.push({ verdieping: b.v, as, vast, van: a, tot: c, soort: "deur", kant, scharnier: hoek });
}

function open(b: Bouw, as: "x" | "z", vast: number, van: number, tot: number) {
  if (tot - van > 1e-6) b.openingen.push({ verdieping: b.v, as, vast, van, tot, soort: "open", kant: 1 });
}

/** Het gelijkvloers (ook het appartement): hal en kern links, leefzone achter, extra ruimtes ernaast. */
function gelijkvloers(b: Bouw, w: number, l: number, ruimtes: Ruimte[]): void {
  const H = halBreedte(w), zc = kernDiepte(l);
  const neem = (naam: string) => {
    const i = ruimtes.findIndex((r) => r.naam === naam);
    return i < 0 ? null : ruimtes.splice(i, 1)[0];
  };
  neem("Leefruimte");
  const keuken = neem("Keuken");
  const toilet = neem("Toilet");

  // Kern: toilet (0,95 × 1,5 m, tegen de linkermuur) en de doorgang naar de leefruimte.
  if (toilet) {
    kamer(b, "Toilet", 0, zc, TRAP_B, KERN);
    kamer(b, "Hal", TRAP_B, zc, H - TRAP_B, KERN, { soort: "circulatie", deel: true });
    // De deur naar de leefruimte draait de hal in, tegen de toiletmuur; de toiletdeur
    // (63 cm, de gangbare maat) zit erachter, aan de kant van de trap.
    b.openingen.push({ verdieping: b.v, as: "z", vast: TRAP_B, van: zc + 0.82, tot: zc + KERN - 0.05, soort: "deur", kant: -1, scharnier: "tot" });
    b.openingen.push({ verdieping: b.v, as: "x", vast: zc, van: TRAP_B + 0.05, tot: H - 0.05, soort: "deur", kant: 1, scharnier: "van" });
    kamer(b, "Hal", 0, zc + KERN, H, l - zc - KERN, { soort: "circulatie" });
    open(b, "x", zc + KERN, TRAP_B, H);
  } else {
    kamer(b, "Hal", 0, zc, H, l - zc, { soort: "circulatie" });
    b.openingen.push({ verdieping: b.v, as: "x", vast: zc, van: TRAP_B + 0.05, tot: H - 0.05, soort: "deur", kant: 1, scharnier: "van" });
  }
  b.openingen.push({ verdieping: b.v, as: "x", vast: l, van: TRAP_B + 0.05, tot: H - 0.05, soort: "voordeur", kant: -1 });

  // Extra ruimtes naast de hal. Eerst gestapeld van de voorgevel naar achter, elk met
  // een deur in de halmuur; past dat niet, dan naast elkaar aan een gang.
  const Wv = w - H, Dv = l - zc;
  // Straatkant eerst (bureau, slaapkamer), natte ruimtes en berging bij de leefzone.
  const orde = ["Bureau", "Slaapkamer", "Dressing", "Badkamer", "Wasplaats", "Berging"];
  const extra = [...ruimtes].sort((a, c) => orde.indexOf(a.naam) - orde.indexOf(c.naam));
  let zitVoor = 0; // diepte van de zithoek vooraan (deel van de leefruimte)
  let gang = false;
  for (;;) {
    if (extra.length === 0) { zitVoor = Dv; break; }
    const mins = extra.map((r) => minBreedte(r.naam, Wv));
    const pref = extra.map((r, i) => Math.max(mins[i], VOORKEUR[r.naam] ?? mins[i]));
    const somMin = mins.reduce((a, c) => a + c, 0), somPref = pref.reduce((a, c) => a + c, 0);
    // Breed huis en meer dan één ruimte: naast elkaar aan een gang, geen stroken van 7 m breed.
    const liever = extra.length > 1 && Wv >= 5.5 && breedtes(extra, Wv, Dv - GANG) !== null;
    if (!liever && somPref + 2.4 <= Dv) {
      // Ruim: elke ruimte haar voorkeursdiepte, de rest is zithoek.
      stapel(b, H, w, l, extra.map((r) => r.naam), pref, zc + KERN);
      zitVoor = Dv - somPref;
      break;
    }
    if (!liever && somMin <= Dv + 1e-9) {
      const extraDiep = verdeel(Dv, mins, pref.map((p, i) => p - mins[i] + 0.01))!;
      stapel(b, H, w, l, extra.map((r) => r.naam), extraDiep, zc + KERN);
      break;
    }
    const rij = breedtes(extra, Wv, Dv - GANG);
    if (rij) {
      gang = true;
      kamer(b, "Gang", H, zc, Wv, GANG, { soort: "circulatie", deel: true });
      open(b, "z", H, zc, zc + GANG);
      let x = H;
      extra.forEach((r, i) => {
        kamer(b, r.naam, x, zc + GANG, rij[i], Dv - GANG);
        deur(b, "x", zc + GANG, x, x + rij[i], 1, "van");
        x += rij[i];
      });
      break;
    }
    // Past niet: de minst gevraagde ruimte valt weg (maxKamers telt wat overblijft).
    const weg = extra.reduce((a, c) => (WEG_EERST.indexOf(c.naam) < WEG_EERST.indexOf(a.naam) ? c : a));
    extra.splice(extra.indexOf(weg), 1);
    ruimtes.splice(ruimtes.indexOf(weg), 1);
  }

  // Tuinkant: leefruimte, met de keuken rechts ertegen.
  const wk = keuken ? Math.min(3.6, Math.max(2.6, Math.round(w * 0.38 * 10) / 10)) : 0;
  const leef = kamer(b, "Leefruimte", 0, 0, w - wk, zc);
  if (keuken) {
    kamer(b, "Keuken", w - wk, 0, wk, zc);
    // Open keuken: geen muur naar de leefruimte (een halve muur stond als een los
    // stuk midden in de kamer), de eettafel staat ertussen.
    open(b, "z", w - wk, 0, zc);
  }
  if (zitVoor > 1e-6 && !gang) {
    // De zithoek vooraan, naast de hal: hetzelfde vertrek, zonder muur ertussen.
    kamer(b, "Leefruimte", H, zc, Wv, zitVoor, { deel: true, hoort: leef.id });
    open(b, "x", zc, H, w - wk);
    if (keuken) open(b, "x", zc, w - wk, w);
  }
}

/** Welke ruimte het eerst wegvalt als niet alles past. */
const WEG_EERST = ["Dressing", "Berging", "Wasplaats", "Bureau", "Badkamer", "Slaapkamer"];

/** Extra ruimtes gestapeld van de voorgevel naar achter, naast de hal. */
function stapel(b: Bouw, H: number, w: number, l: number, namen: string[], diepten: number[], naad: number) {
  let z = l;
  namen.forEach((naam, i) => {
    z -= diepten[i];
    kamer(b, naam, H, z, w - H, diepten[i]);
    // Niet over de naad tussen de doorgang naast het toilet en de hal: dan het stuk ervoor of erachter.
    const [z0, z1] = z < naad && z + diepten[i] > naad ? (z + diepten[i] - naad >= 1.05 ? [naad, z + diepten[i]] : [z, naad]) : [z, z + diepten[i]];
    deur(b, "z", H, z0, z1, 1, "tot");
  });
}

/** Een verdieping of zolder: overloop dwars door het huis, kamers aan beide kanten. */
function verdieping(b: Bouw, w: number, l: number, ruimtes: Ruimte[], trapOp: boolean): void {
  const H = halBreedte(w), zc = kernDiepte(l);
  const ti = ruimtes.findIndex((r) => r.naam === "Toilet");
  const toilet = ti >= 0 ? ruimtes.splice(ti, 1)[0] : null;
  const eind = toilet ? w - TOILET_BOVEN : w;
  // Langs het trapgat: alleen het gat (bovenste laag), of gat plus doorgang als er
  // nog een trap naar boven vertrekt — die begint vooraan, bij de voorgevel.
  const strook = trapOp ? H : TRAP_B;
  const diepAchter = zc, diepVoor = l - zc - KERN, breedVoor = w - strook;

  // Badkamer en toilet aan de tuinkant, boven keuken en toilet; slaapkamers vullen aan.
  const achter: Ruimte[] = [], voor: Ruimte[] = [];
  const mins = (rij: Ruimte[], d: number) => rij.reduce((s, r) => s + minBreedte(r.naam, d), 0);
  const past = (rij: Ruimte[], r: Ruimte) =>
    rij === achter ? mins([...rij, r], diepAchter) <= w + 1e-9 : mins([...rij, r], diepVoor) <= breedVoor + 1e-9;
  const opVolgorde = [...ruimtes.filter((r) => r.kant !== "vrij"), ...ruimtes.filter((r) => r.kant === "vrij")];
  for (const r of opVolgorde) {
    let rij = r.kant === "achter" ? achter : r.kant === "voor" ? voor
      : mins(achter, diepAchter) / w <= mins(voor, diepVoor) / breedVoor ? achter : voor;
    if (!past(rij, r)) rij = rij === achter ? voor : achter;
    if (!past(rij, r)) continue;
    rij.push(r);
  }
  // De badkamer rechts, recht boven de keuken; verder de smalste links. Zo is de
  // ruimte die achter het toilethokje doorloopt breed genoeg voor een deur.
  const plek = (r: Ruimte) => (r.naam === "Badkamer" ? 10 : MIN_MAAT[r.naam]?.[0] ?? 1.5);
  achter.sort((a, c) => plek(a) - plek(c));
  voor.sort((a, c) => plek(a) - plek(c));

  kamer(b, "Overloop", 0, zc, eind, KERN, { soort: "circulatie" });
  kamer(b, "Overloop", 0, zc + KERN, strook, l - zc - KERN, { soort: "circulatie", deel: true });
  open(b, "x", zc + KERN, 0, strook);
  if (toilet) {
    kamer(b, "Toilet", eind, zc, TOILET_BOVEN, KERN);
    deur(b, "z", eind, zc, zc + KERN, 1, "tot", 0.63);
  }

  const vul = (rij: Ruimte[], x0: number, x1: number, z: number, d: number, wand: number, kant: 1 | -1) => {
    if (rij.length === 0) {
      // Niets aan deze kant: een open ruimte aan de overloop (vide of speelhoek).
      kamer(b, "Overloop", x0, z, x1 - x0, d, { soort: "circulatie", deel: true });
      open(b, "x", wand, Math.max(x0, 0), Math.min(x1, eind));
      return;
    }
    const maten = breedtes(rij, x1 - x0, d)!;
    let x = x0;
    rij.forEach((r, i) => {
      kamer(b, r.naam, x, z, maten[i], d);
      // De deur in het stuk dat aan de overloop grenst, bij de hoek die het dichtst bij de trap ligt.
      deur(b, "x", wand, Math.max(x, 0), Math.min(x + maten[i], eind), kant, "van");
      x += maten[i];
    });
  };
  vul(achter, 0, w, 0, diepAchter, zc, -1);
  vul(voor, strook, w, zc + KERN, diepVoor, zc + KERN, 1);
}

/** Het plan van één bouwlaag. De vakken vullen de bouwlaag precies; de test bewaakt dat. */
function laagPlan(woning: Woning, v: number, lagen: number, dak: Dak, programma: Programma): Plan {
  const { w, l } = WONING[woning];
  const soort = laagSoort(woning, v, lagen, dak);
  const p = geldig(soort, programma);
  const ruimtes: Ruimte[] = [];
  for (const o of RUIMTES[soort]) for (let i = 0; i < (p[o.naam] ?? 0); i++) ruimtes.push({ naam: o.naam, gewicht: o.gewicht, kant: o.kant });

  const b: Bouw = { v, kamers: [], openingen: [], n: 0 };
  const trappen: Trap[] = [];
  const zc = kernDiepte(l);
  if (lagen > 1) trappen.push({ verdieping: v, x: 0, z: zc + KERN, w: TRAP_B, l: TRAP_L, op: v < lagen - 1 });

  if (v === 0) {
    gelijkvloers(b, w, l, ruimtes);
  } else if (soort === "zolder" && ruimtes.length === 1 && ruimtes[0].naam === "Zolder") {
    // Een open zolder is één ruimte: de trap komt erin uit.
    kamer(b, "Zolder", 0, 0, w, l);
  } else {
    verdieping(b, w, l, ruimtes, v < lagen - 1);
  }
  return { kamers: b.kamers, openingen: b.openingen, trappen };
}

/**
 * Het plan van de hele woning. `programmas` geeft per bouwlaag welke ruimtes
 * er zijn; ontbreekt er een, dan geldt de standaardindeling. Alleen de
 * tekening en de verdeling van de toestellen hangen ervan af — het pakket
 * niet: de catalogus rekent per oppervlakte.
 */
export function planVoor(woning: Woning, verdiepingen: number, dak: Dak, programmas: (Programma | undefined)[] = []): Plan {
  const lagen = Math.min(MAX_VERDIEPINGEN, Math.max(1, verdiepingen));
  const uit: Plan = { kamers: [], openingen: [], trappen: [] };
  for (let v = 0; v < lagen; v++) {
    const p = programmas[v] ?? standaardProgramma(woning, v, lagen, dak);
    const laag = laagPlan(woning, v, lagen, dak, p);
    uit.kamers.push(...laag.kamers);
    uit.openingen.push(...laag.openingen);
    uit.trappen.push(...laag.trappen);
  }
  return uit;
}

/** De kamers (met gang en hal) bij een aantal kamers per bouwlaag. */
export function kamersVoor(woning: Woning, verdiepingen: number, dak: Dak, aantallen: number[] = []): Kamer[] {
  const lagen = Math.min(MAX_VERDIEPINGEN, Math.max(1, verdiepingen));
  const programmas = Array.from({ length: lagen }, (_, v) =>
    aantallen[v] === undefined ? undefined : programmaVan(laagSoort(woning, v, lagen, dak), Math.min(aantallen[v], maxKamers(woning, v, lagen, dak)), lagen),
  );
  return planVoor(woning, lagen, dak, programmas).kamers;
}

/**
 * Hoeveel kamers er echt passen op deze bouwlaag: het grootste aantal uit de
 * standaardvolgorde waarvoor elke ruimte zijn minimale breedte krijgt.
 */
export function maxKamers(woning: Woning, v: number, verdiepingen: number, dak: Dak): number {
  const soort = laagSoort(woning, v, verdiepingen, dak);
  for (let n = MAX_KAMERS; n > MIN_KAMERS; n--) {
    const p = programmaVan(soort, n, verdiepingen);
    const kamers = laagPlan(woning, v, verdiepingen, dak, p).kamers.filter((k) => k.soort === "kamer").length;
    if (kamers === aantalKamers(p)) return n;
  }
  return MIN_KAMERS;
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

/** Een rechthoek binnen een kamer, in meter vanaf de hoek (x, z) van die kamer. */
export interface Zone { x0: number; x1: number; z0: number; z1: number }

/**
 * Waar in een kamer de losse meubels van een afgewerkte woning staan: de eettafel
 * tussen keuken en zithoek, de zetel in de zithoek. De 3D zet ze hier neer, en de
 * toestellen blijven er weg — ook in een fase zonder meubels, zodat een droger niet
 * verspringt als de bezoeker van fase wisselt.
 */
export function meubels(k: Kamer, kamers: Kamer[]): { soort: "eettafel" | "zetel"; zone: Zone }[] {
  if (k.naam !== "Leefruimte") return [];
  const zit = kamers.find((d) => d.hoort === k.id);
  if (k.deel) {
    // De zithoek vooraan: een zetel met de rug naar de leefruimte, kijkend naar de straat.
    const cx = k.w / 2 + 0.3, cz = Math.min(k.l - 1.6, k.l / 2 + 0.6);
    return [{ soort: "zetel", zone: { x0: cx - 1.1, x1: cx + 1.1, z0: cz - 0.45, z1: cz + 0.45 } }];
  }
  const keuken = kamers.some((d) => d.verdieping === k.verdieping && d.naam === "Keuken" && Math.abs(d.x - (k.x + k.w)) < 1e-6);
  // Eettafel van 1,8 × 0,9 m met stoelen: dicht bij de keuken, midden in de diepte.
  const cx = keuken ? k.w - 1.5 : k.w * 0.62, cz = k.l * 0.5;
  const uit: { soort: "eettafel" | "zetel"; zone: Zone }[] = [
    { soort: "eettafel", zone: { x0: cx - 1.0, x1: cx + 1.0, z0: cz - 1.0, z1: cz + 1.0 } },
  ];
  // Zonder zithoek vooraan staat de zetel aan de andere kant van de leefruimte.
  if (!zit && k.w > 4.6) uit.push({ soort: "zetel", zone: { x0: 0.5, x1: 1.4, z0: cz - 1.1, z1: cz + 1.1 } });
  return uit;
}

/** Hoe ver een toestel van de muren blijft: achter en links staat de muur op volle hoogte. */
const MARGE_ACHTER = 0.5;
/**
 * Voor- en rechtermuur zijn opengewerkt tot 1,10 m; vanuit de isometrische camera
 * (schuin van rechtsvoor) verbergen ze wat er tot ongeveer 1,1 m achter staat.
 */
const MARGE_ZICHT = 1.1;

/**
 * De beste vrije plek voor een toestel in een kamer: niet op de trap, niet in een
 * deur, niet tussen de meubels of tegen de keuken- of badkamerwand, en zichtbaar
 * van de camera. Lukt dat niet volledig, dan de plek met de kleinste overtreding.
 */
function vrijePlek(k: Kamer, kamers: Kamer[], al: { x: number; z: number }[], trappen: Trap[], openingen: Opening[]): [number, number] {
  const deuren = openingen
    .filter((o) => o.verdieping === k.verdieping && o.soort !== "open")
    .map((o) => {
      const m = (o.van + o.tot) / 2;
      return o.as === "x" ? { x: m - k.x, z: o.vast - k.z } : { x: o.vast - k.x, z: m - k.z };
    });
  const zones = meubels(k, kamers).map((m) => m.zone);
  // Keuken, badkamer en wasplaats hebben hun kasten en toestellen tegen de achterwand.
  // Zonder aparte keuken staat de keukenrij in de leefruimte.
  const openKeuken = k.naam === "Leefruimte" && !k.deel && !kamers.some((d) => d.verdieping === k.verdieping && d.naam === "Keuken");
  const vasteWand = ["Keuken", "Badkamer", "Wasplaats"].includes(k.naam) || openKeuken ? 1.0 : 0;
  const trap = trappen.filter((t) => t.verdieping === k.verdieping);
  let best: [number, number] = [k.w / 2, k.l / 2], bestStraf = Infinity;
  const stap = 0.1;
  for (let x = Math.min(MARGE_ACHTER, k.w / 2); x <= k.w - Math.min(MARGE_ACHTER, k.w / 2) + 1e-9; x += stap) {
    for (let z = Math.min(MARGE_ACHTER, k.l / 2); z <= k.l - Math.min(MARGE_ACHTER, k.l / 2) + 1e-9; z += stap) {
      let straf = 0;
      const tekort = (afstand: number, min: number) => Math.max(0, min - afstand);
      straf += 4 * tekort(k.w - x, MARGE_ZICHT) + 4 * tekort(k.l - z, MARGE_ZICHT);
      straf += 3 * tekort(z, MARGE_ACHTER + vasteWand);
      for (const d of deuren) straf += 6 * tekort(Math.hypot(d.x - x, d.z - z), 1.1);
      for (const p of al) straf += 5 * tekort(Math.hypot(p.x - x, p.z - z), 1.5);
      for (const m of zones) if (x > m.x0 - 0.6 && x < m.x1 + 0.6 && z > m.z0 - 0.6 && z < m.z1 + 0.6) straf += 8;
      for (const t of trap) {
        const ax = k.x + x, az = k.z + z;
        if (ax > t.x - 0.6 && ax < t.x + t.w + 0.6 && az > t.z - 0.6 && az < t.z + t.l + 0.6) straf += 20;
      }
      // Bij gelijke straf: zo dicht mogelijk bij het midden van wat zichtbaar is.
      straf += 0.01 * Math.hypot(x - (k.w - MARGE_ZICHT + MARGE_ACHTER) / 2, z - (k.l - MARGE_ZICHT + MARGE_ACHTER) / 2);
      if (straf < bestStraf - 1e-9) { bestStraf = straf; best = [x, z]; }
    }
  }
  return [Math.round(best[0] * 100) / 100, Math.round(best[1] * 100) / 100];
}

/**
 * Verdeelt de toestellen uit het pakket over de kamers.
 *
 * Drogers gaan eerst naar de grootste ruimtes, met per ruimte hooguit één tot
 * elke ruimte er een heeft — zo werkt het op de werf ook: één droger per ruimte
 * met de deuren open, en wat overblijft bij de grootste natte oppervlakte.
 * Ventilatoren staan waar de meeste lucht te verplaatsen is, kachels verdeeld
 * over de lagen. Een leefruimte met zithoek is één ruimte. Het aantal komt altijd
 * uit `items`; deze functie verplaatst alleen. Binnen een kamer kiest
 * `vrijePlek` de plek.
 */
export function plaatsToestellen(items: PackageItem[], kamers: Kamer[], trappen: Trap[] = [], openingen: Opening[] = []): Plaatsing[] {
  if (kamers.length === 0) return [];
  const ruimte = (k: Kamer) => k.hoort ?? k.id;
  const opp = new Map<string, number>();
  for (const k of kamers) opp.set(ruimte(k), (opp.get(ruimte(k)) ?? 0) + k.w * k.l);
  const bezet = new Map<string, number>();
  const inKamer = new Map<string, { x: number; z: number }[]>();
  const uit: Plaatsing[] = [];

  const drogersIn = new Map<string, number>();
  const isDroger = (k: DeviceKey) => k === "small" || k === "medium";
  // Een hal, gang, overloop of toilet krijgt geen droger of kachel: de lucht komt er via de
  // open deuren.
  const doorloop = (kamer: Kamer) => kamer.soort === "circulatie" || kamer.naam === "Toilet";
  const geschikt = (kamer: Kamer, k: DeviceKey) => (isDroger(k) || k === "kachel") ? !doorloop(kamer) : true;
  // Per ruimte één kandidaat: de hoofdrechthoek (de zithoek komt aan bod via `rechthoek`).
  const ruimtes = kamers.filter((k) => !k.deel);

  const kies = (k: DeviceKey): Kamer => {
    let kandidaten = ruimtes.filter((kamer) => geschikt(kamer, k));
    if (kandidaten.length === 0) kandidaten = ruimtes.length ? ruimtes : kamers;
    // Drogers: eerst elke ruimte één, pas daarna een tweede in de grootste.
    if (isDroger(k)) {
      const min = Math.min(...kandidaten.map((kamer) => drogersIn.get(ruimte(kamer)) ?? 0));
      kandidaten = kandidaten.filter((kamer) => (drogersIn.get(ruimte(kamer)) ?? 0) === min);
    }
    const factor = (kamer: Kamer) => (kamer.naam === "Badkamer" ? (k === "kachel" ? 0.3 : 0.4) : 1);
    const score = (kamer: Kamer) => ((opp.get(ruimte(kamer)) ?? 0) * factor(kamer)) / ((bezet.get(ruimte(kamer)) ?? 0) + 1);
    return kandidaten.reduce((best, kamer) => (score(kamer) > score(best) + 1e-9 ? kamer : best));
  };
  /** In een ruimte van meer rechthoeken: de rechthoek met de meeste plaats per toestel. */
  const rechthoek = (hoofd: Kamer): Kamer => {
    const delen = kamers.filter((k) => k === hoofd || k.hoort === hoofd.id);
    return delen.reduce((best, k) => (k.w * k.l / ((inKamer.get(k.id)?.length ?? 0) + 1) > best.w * best.l / ((inKamer.get(best.id)?.length ?? 0) + 1) + 1e-9 ? k : best));
  };

  // Volgorde: drogers eerst (die bepalen de verdeling), dan lucht, dan warmte.
  const volgorde: DeviceKey[] = ["medium", "small", "axiaal", "kachel"];
  const perSoort = new Map<DeviceKey, number>();
  for (const k of volgorde) {
    const q = items.find((it) => it.k === k)?.q ?? 0;
    for (let i = 0; i < q; i++) {
      const hoofd = kies(k);
      const kamer = rechthoek(hoofd);
      bezet.set(ruimte(hoofd), (bezet.get(ruimte(hoofd)) ?? 0) + 1);
      if (isDroger(k)) drogersIn.set(ruimte(hoofd), (drogersIn.get(ruimte(hoofd)) ?? 0) + 1);
      const n = perSoort.get(k) ?? 0;
      perSoort.set(k, n + 1);
      const al = inKamer.get(kamer.id) ?? [];
      const [x, z] = vrijePlek(kamer, kamers, al, trappen, openingen);
      inKamer.set(kamer.id, [...al, { x, z }]);
      uit.push({ k, kamer: kamer.id, x, z, n });
    }
  }
  return uit;
}

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

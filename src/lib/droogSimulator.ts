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
import type { DeviceKey } from "../data/verhuur.js";

export type Woning = "rijwoning" | "halfopen" | "open" | "appartement";
export type Dak = "zadeldak" | "plat" | "lessenaar";
export type Wat = "pleister" | "chape" | "beide";
export type Fase = "vers" | "weken" | "geschilderd" | "afgewerkt" | "bewoond";

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
  /** true = de klant verwarmt zelf boven 15 °C */
  verwarmt: boolean;
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
};

/**
 * De bouwfase. `vocht` is alleen de beginstand van de animatie (1 = kletsnat)
 * — het pakket verandert er niet door: de catalogus kent geen fase, en een
 * geschilderde muur met 3 cm pleister erachter bevat nog net zo goed water.
 */
export const FASE: Record<
  Fase,
  { label: string; kort: string; vocht: number; verwarmtWaarschijnlijk: boolean; advies: string }
> = {
  vers: {
    label: "Net gepleisterd of gegoten",
    kort: "Vers",
    vocht: 1,
    verwarmtWaarschijnlijk: false,
    advies:
      "Het ideale moment. Hoe vroeger de drogers staan, hoe korter de wachttijd tot u kunt schilderen of de vloer leggen.",
  },
  weken: {
    label: "Enkele weken oud, nog niet afgewerkt",
    kort: "Enkele weken",
    vocht: 0.8,
    verwarmtWaarschijnlijk: false,
    advies:
      "Het oppervlak lijkt droog, maar de kern van de chape en het pleisterwerk is dat nog niet. Droog nu, vóór er verf of vloer op komt.",
  },
  geschilderd: {
    label: "Juist geschilderd",
    kort: "Geschilderd",
    vocht: 0.65,
    verwarmtWaarschijnlijk: true,
    advies:
      "Verf op nat pleisterwerk sluit het vocht in: kans op blazen en vlekken. Drogen kan nog, rustig en met de ruimtes verwarmd.",
  },
  afgewerkt: {
    label: "Vloer gelegd, keuken geplaatst",
    kort: "Afgewerkt",
    vocht: 0.5,
    verwarmtWaarschijnlijk: true,
    advies:
      "Parket en laminaat zwellen op een natte chape. Laat ons eerst het vochtgehalte meten; de drogers halen het vocht er gecontroleerd uit.",
  },
  bewoond: {
    label: "Volledig af en bewoond",
    kort: "Bewoond",
    vocht: 0.35,
    verwarmtWaarschijnlijk: true,
    advies:
      "Condens op de ramen of schimmel in de hoeken na een renovatie? De drogers werken ook terwijl u er woont, en ze zijn stil genoeg voor een slaapkamer.",
  },
};

export const FASE_ORDER: Fase[] = ["vers", "weken", "geschilderd", "afgewerkt", "bewoond"];

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
}

/** Het pakket voor deze antwoorden, of null bij maatwerk of een onbekende combinatie. */
export function simResultaat(a: SimAnswers): SimResultaat | null {
  if (isMaatwerk(a)) return null;
  const config = toPackageConfig(a);
  const items = baseItems(config);
  if (items.length === 0) return null;
  return {
    config,
    items,
    prijs: configPrice(config, items),
    weken: configWeeks(config),
    dagen: dryingDays(config),
    capaciteit: totalCapacity(items),
    luchtverzet: totalAirflow(items),
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
}

/** Een rechte trap in de gang; `op` = er gaat een trap naar boven, anders het trapgat. */
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
}

/** naam → aantal */
export type Programma = Record<string, number>;

export const MIN_KAMERS = 1;
export const MAX_KAMERS = 6;

const opt = (naam: string, meervoud: string, min: number, max: number, gewicht: number, kant: RuimteOptie["kant"]): RuimteOptie =>
  ({ naam, meervoud, min, max, gewicht, kant });

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
  boven: [
    opt("Slaapkamer", "Slaapkamers", 1, 4, 1.5, "vrij"),
    opt("Badkamer", "Badkamers", 0, 2, 1, "voor"),
    opt("Bureau", "Bureau", 0, 1, 1, "vrij"),
    opt("Dressing", "Dressing", 0, 1, 0.7, "achter"),
    opt("Berging", "Berging", 0, 1, 0.7, "voor"),
    opt("Toilet", "Toilet", 0, 1, 0.45, "voor"),
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
  if (v === 0) return smal ? 2 : 3;
  return smal ? 3 : 4;
}

/** De eerste `n` ruimtes uit de standaardvolgorde, als programma. */
export function programmaVan(soort: LaagSoort, n: number): Programma {
  const p: Programma = {};
  for (const naam of VOLGORDE[soort].slice(0, Math.min(MAX_KAMERS, Math.max(MIN_KAMERS, Math.round(n))))) {
    p[naam] = (p[naam] ?? 0) + 1;
  }
  return geldig(soort, p);
}

export function standaardProgramma(woning: Woning, v: number, verdiepingen: number, dak: Dak): Programma {
  return programmaVan(laagSoort(woning, v, verdiepingen, dak), standaardKamers(woning, v, verdiepingen, dak));
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

/** Gangbreedte en trap, in meter. */
const GANG = 1.2;
const HAL = 1.2;
const TRAP_L = 3;
const MIN_BREEDTE = 1.5;
const MIN_DIEPTE = 2.6;

interface Stuk { naam: string; gewicht: number }

/** Waar de gang begint (gezien vanaf de tuin): iets voorbij het midden, zodat de tuinkant de diepste kamers heeft. */
function gangDiepte(l: number): number {
  const z = (l - GANG) * 0.56;
  return Math.round(Math.min(l - GANG - MIN_DIEPTE, Math.max(MIN_DIEPTE, z)) * 10) / 10;
}

/** Verdeelt een strook in vakken naast elkaar, breedte volgens gewicht. */
function rij(x0: number, x1: number, stukken: Stuk[]): { naam: string; x: number; w: number }[] {
  const totaal = stukken.reduce((t, s) => t + s.gewicht, 0);
  let x = x0;
  return stukken.map((s, i) => {
    const w = i === stukken.length - 1 ? x1 - x : ((x1 - x0) * s.gewicht) / totaal;
    const uit = { naam: s.naam, x, w };
    x += w;
    return uit;
  });
}

/**
 * De indeling van één bouwlaag, zoals een Vlaamse woning meestal ligt: een
 * gang dwars door het midden met de trap aan het eind, kamers aan de tuinkant
 * (achter, z klein) en aan de straatkant (voor, z = l). Op het gelijkvloers
 * loopt een hal van de voordeur naar die gang.
 *
 * Elke kamer raakt de gang en krijgt daar één deur — weg van de trap als dat
 * kan. Een keuken naast de leefruimte krijgt er een open doorgang naar toe.
 * De vakken vullen de bouwlaag precies; de test bewaakt dat.
 */
function laagPlan(woning: Woning, v: number, lagen: number, dak: Dak, programma: Programma): Plan {
  const { w, l } = WONING[woning];
  const soort = laagSoort(woning, v, lagen, dak);
  const p = geldig(soort, programma);
  const opties = RUIMTES[soort];

  // De ruimtes, in de volgorde van de opties, slaapkamers uitgeschreven.
  const ruimtes: (Stuk & { kant: RuimteOptie["kant"] })[] = [];
  for (const o of opties) for (let i = 0; i < (p[o.naam] ?? 0); i++) ruimtes.push({ naam: o.naam, gewicht: o.gewicht, kant: o.kant });

  const metHal = v === 0;
  const kamers: Kamer[] = [];
  const openingen: Opening[] = [];
  const trappen: Trap[] = [];
  let n = 0;
  const id = () => `${v}-${n++}`;
  const som = (r: Stuk[]) => r.reduce((t, s) => t + s.gewicht, 0);

  // De gang ligt op elke bouwlaag even diep, zodat de trap recht boven de
  // vorige uitkomt: een trapkoker, zoals in een echte woning.
  const zb = gangDiepte(l);
  const zf = zb + GANG;
  const trapX0 = w - TRAP_L - 0.1, trapX1 = w - 0.1;
  if (lagen > 1) trappen.push({ verdieping: v, x: trapX0, z: zb + 0.05, w: TRAP_L, l: GANG - 0.1, op: v < lagen - 1 });

  // Boven de grond wisselt de indeling per verdieping: op de oneven lagen (en
  // als er maar één ruimte is) loopt de grootste kamer van tuin tot straat
  // langs de zijgevel, de rest ligt rond een kortere overloop. Zo ligt geen
  // twee verdiepingen hetzelfde, ook niet met evenveel kamers.
  const zuil = !metHal && (ruimtes.length === 1 || (v % 2 === 1 && ruimtes.length >= 3));
  let gx = 0; // waar de gang begint
  if (zuil) {
    const grootste = ruimtes.reduce((g, r) => (r.gewicht > g.gewicht ? r : g), ruimtes[0]);
    ruimtes.splice(ruimtes.indexOf(grootste), 1);
    const max = w - TRAP_L - 0.3;
    const wd = ruimtes.length === 0 ? max : Math.min(max, Math.max(MIN_DIEPTE, (w * grootste.gewicht) / (som(ruimtes) + grootste.gewicht) * 1.4));
    gx = Math.round(wd * 10) / 10;
    kamers.push({ id: id(), naam: grootste.naam, verdieping: v, x: 0, z: 0, w: gx, l, soort: "kamer" });
    openingen.push({ verdieping: v, as: "z", vast: gx, van: zb + 0.15, tot: zf - 0.15, soort: "deur", kant: -1 });
  }

  const breed = w - gx;
  const plaatsAchter = Math.max(1, Math.floor(breed / MIN_BREEDTE));
  const plaatsVoor = Math.max(1, Math.floor((breed - (metHal ? HAL : 0)) / MIN_BREEDTE));
  const achter: Stuk[] = [], voor: Stuk[] = [];
  for (const r of ruimtes) {
    const vol = (band: Stuk[]) => band.length >= (band === achter ? plaatsAchter : plaatsVoor);
    let band: Stuk[] =
      r.kant === "achter" ? achter
      : r.kant === "voor" ? voor
      : som(achter) <= som(voor) ? achter : voor;
    // Vol, of — voor een ruimte zonder vaste kant — te scheef: naar de andere kant.
    // Een berging hoort achter, ook als de tuinkant daardoor zwaarder weegt.
    const ander = band === achter ? voor : achter;
    if (vol(band) || (r.kant === "vrij" && som(band) > som(ander) + 2.5 * r.gewicht)) band = ander;
    if (vol(band)) band = band === achter ? voor : achter;
    band.push(r);
  }
  // De tuinkant is nooit leeg: die heeft de diepte nodig.
  if (achter.length === 0 && voor.length > 1) achter.push(voor.shift()!);
  // Het toilet ligt tegen de hal, bij de voordeur — niet achteraan een rij kamers.
  if (metHal) voor.sort((a, b) => Number(b.naam === "Toilet") - Number(a.naam === "Toilet"));
  // De tweede verdieping spiegelt de volgorde: natte ruimtes komen dan aan de
  // andere kant van de overloop dan op de eerste.
  if (v >= 2) {
    achter.reverse();
    voor.reverse();
  }

  const deurIn = (x0: number, x1: number) => {
    const breedte = Math.min(0.9, x1 - x0 - 0.3);
    const kandidaten = [x0 + 0.15 + breedte / 2 + 0.1, x1 - 0.15 - breedte / 2 - 0.1];
    const vrij = (c: number) => lagen < 2 || c + breedte / 2 < trapX0 - 0.1 || c - breedte / 2 > trapX1;
    const c = kandidaten.find(vrij) ?? kandidaten[0];
    return [c - breedte / 2, c + breedte / 2] as const;
  };

  // Tuinkant
  const achterVakken = achter.length ? rij(gx, w, achter) : [];
  achterVakken.forEach((r) => {
    kamers.push({ id: id(), naam: r.naam, verdieping: v, x: r.x, z: 0, w: r.w, l: zb, soort: "kamer" });
    const [a, b] = deurIn(r.x, r.x + r.w);
    openingen.push({ verdieping: v, as: "x", vast: zb, van: a, tot: b, soort: "deur", kant: -1 });
  });
  // Keuken naast leefruimte: open doorgang in de tussenwand.
  achterVakken.forEach((r, i) => {
    const buur = achterVakken[i + 1];
    if (!buur) return;
    const paar = [r.naam, buur.naam];
    if (paar.includes("Leefruimte") && paar.includes("Keuken")) {
      const breedte = Math.min(1.6, zb - 1.2);
      openingen.push({ verdieping: v, as: "z", vast: buur.x, van: zb / 2 - breedte / 2, tot: zb / 2 + breedte / 2, soort: "open", kant: 1 });
    }
  });

  // Gang. Zonder kamers aan de straatkant loopt hij door tot de gevel; zonder
  // kamers aan de tuinkant begint hij achteraan.
  const gangNaam = soort === "boven" || soort === "zolder" ? "Overloop" : voor.length === 0 ? "Hal" : "Gang";
  const g0 = achterVakken.length ? zb : 0;
  const g1 = voor.length ? zf : l;
  kamers.push({ id: id(), naam: gangNaam, verdieping: v, x: gx, z: g0, w: breed, l: g1 - g0, soort: "circulatie" });
  if (metHal && voor.length === 0) {
    openingen.push({ verdieping: v, as: "x", vast: l, van: 0.25, tot: 1.15, soort: "voordeur", kant: -1 });
  }

  // Straatkant
  if (voor.length > 0) {
    const x0 = gx + (metHal ? HAL : 0);
    if (metHal) {
      kamers.push({ id: id(), naam: "Hal", verdieping: v, x: gx, z: zf, w: HAL, l: l - zf, soort: "circulatie" });
      openingen.push({ verdieping: v, as: "x", vast: zf, van: gx, tot: gx + HAL, soort: "open", kant: 1 });
      openingen.push({ verdieping: v, as: "x", vast: l, van: gx + 0.15, tot: gx + HAL - 0.15, soort: "voordeur", kant: -1 });
    }
    rij(x0, w, voor).forEach((r) => {
      kamers.push({ id: id(), naam: r.naam, verdieping: v, x: r.x, z: zf, w: r.w, l: l - zf, soort: "kamer" });
      const [a, b] = deurIn(r.x, r.x + r.w);
      openingen.push({ verdieping: v, as: "x", vast: zf, van: a, tot: b, soort: "deur", kant: 1 });
    });
  }

  return { kamers, openingen, trappen };
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
    aantallen[v] === undefined ? undefined : programmaVan(laagSoort(woning, v, lagen, dak), aantallen[v]),
  );
  return planVoor(woning, lagen, dak, programmas).kamers;
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
export function plaatsToestellen(items: PackageItem[], kamers: Kamer[]): Plaatsing[] {
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
      uit.push({ k, kamer: kamer.id, x: kamer.w * fx, z: kamer.l * fz, n });
    }
  }
  return uit;
}

/** Plekken binnen een kamer, als fracties: midden eerst, daarna de hoeken. */
const SLOTS: [number, number][] = [
  [0.5, 0.5],
  [0.25, 0.3],
  [0.75, 0.7],
  [0.75, 0.3],
  [0.25, 0.7],
];

export function verdiepingNaam(v: number, totaal: number, dak: Dak): string {
  if (v === 0) return "Gelijkvloers";
  if (isZolder(v, totaal, dak)) return "Zolder";
  return v === 1 ? "1e verdieping" : `${v}e verdieping`;
}

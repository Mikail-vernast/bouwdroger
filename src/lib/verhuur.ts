/**
 * Rekenregels van het verhuurplatform, herbouwd uit de inline scripts van de
 * Claude Design handoff. Alles hier is puur — de pagina's houden enkel UI-state.
 */
// Relatief geïmporteerd, niet via `@/`: de serverless functies in /api draaien
// buiten de Vite-alias en gebruiken dezelfde rekenregels.
import {
  CAT,
  FIXED_WEEKS,
  PRODUCTS,
  WEEKS,
  WET_IMG,
  type DeviceKey,
  type ImageRule,
} from "../data/verhuur.js";
import { packageSizes, packageThicknesses } from "../data/packages.js";
import {
  packageFor,
  packageItems,
  packageOptionalItems,
  packageTotal,
  packageWeeks,
} from "./vastPakket.js";

export interface PackageConfig {
  /** de oppervlakte in m², zoals de catalogus ze verkoopt */
  size: string;
  /** pleister | chape | beide | waterschade */
  wat: string;
  /** pleisterdikte in cm */
  pd: string;
  /** chapedikte in cm */
  cd: string;
  /** false = klant zorgt niet zelf voor verwarming → kachels in het pakket */
  heat: boolean;
  weeks: number;
}

export interface PackageItem {
  k: DeviceKey;
  q: number;
}

export const DEVICE_KEYS: DeviceKey[] = ["small", "medium", "axiaal", "kachel"];

/** Bedragen in nl-BE-notatie: "€ 616,00", negatief als "− € 25,00". */
export function euro(n: number): string {
  const prefix = n < 0 ? "− € " : "€ ";
  return (
    prefix +
    Math.abs(n).toLocaleString("nl-BE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  );
}

/** Hele getallen zonder decimalen — gebruikt op de productpagina. */
export function euroInt(n: number): string {
  return "€ " + n.toLocaleString("nl-BE");
}

export function clampWeeks(raw: string | number | null | undefined): number {
  const n = typeof raw === "number" ? raw : parseInt(String(raw ?? ""), 10);
  if (!n || Number.isNaN(n)) return 2;
  return Math.min(4, Math.max(1, n));
}

/**
 * Toegelaten waarden voor de vrije configuratievelden. Ze komen één op één
 * overeen met de keuzes in de calculator; een test bewaakt dat die twee lijsten
 * niet uit elkaar lopen. De query-string komt van de bezoeker en belandt via
 * `packageTitle` in de Stripe-productnaam, dus alles wat er niet in staat wordt
 * vervangen door de standaardwaarde in plaats van doorgegeven.
 */
export const WAT_VALUES = ["pleister", "chape", "beide", "waterschade"] as const;

/**
 * De maten en diktes komen uit de catalogus, niet uit een lijst hier.
 *
 * Ze stonden hier hardgecodeerd op 1,5/2/3 cm pleister en 5/6/8 cm chape, en dat
 * liep uiteen met wat Vernast verkoopt: de shop heeft 1/2/3 en 5/6/7. Wie 8 cm
 * chape koos vroeg dus een pakket dat niet bestaat. Nu kan dat niet meer — de
 * lijst ís de catalogus.
 */
export const PD_VALUES: readonly string[] = packageThicknesses("pleister").map(String);
export const CD_VALUES: readonly string[] = packageThicknesses("chape").map(String);
export const SIZE_VALUES: readonly string[] = packageSizes().map(String);

/** Het midden van een reeks — de stand waar de liniaal op begint. */
function middle(values: readonly string[], fallback: string): string {
  return values[Math.floor(values.length / 2)] ?? fallback;
}

export const DEFAULT_SIZE = SIZE_VALUES.includes("180") ? "180" : middle(SIZE_VALUES, "180");
export const DEFAULT_PD = PD_VALUES.includes("2") ? "2" : middle(PD_VALUES, "2");
export const DEFAULT_CD = CD_VALUES.includes("6") ? "6" : middle(CD_VALUES, "6");

function pick(raw: string | null, allowed: readonly string[], fallback: string): string {
  return raw !== null && allowed.includes(raw) ? raw : fallback;
}

export function parseConfig(qs: URLSearchParams): PackageConfig {
  return {
    size: pick(qs.get("size"), SIZE_VALUES, DEFAULT_SIZE),
    wat: pick(qs.get("wat"), WAT_VALUES, "beide"),
    pd: pick(qs.get("pd"), PD_VALUES, DEFAULT_PD),
    cd: pick(qs.get("cd"), CD_VALUES, DEFAULT_CD),
    heat: qs.get("heat") !== "0",
    weeks: clampWeeks(qs.get("weeks")),
  };
}

export function configToQuery(c: PackageConfig): string {
  return new URLSearchParams({
    size: c.size,
    wat: c.wat,
    pd: c.pd,
    cd: c.cd,
    heat: c.heat ? "1" : "0",
    weeks: String(c.weeks),
  }).toString();
}

export function isWaterDamage(c: PackageConfig): boolean {
  return c.wat === "waterschade";
}

/**
 * Hoeveel kachels er bij een pakket horen als de klant niet zelf verwarmt en het
 * portaal er zelf geen aantal bij zette.
 *
 * De shop verkoopt geen verwarmingspakketten — kachels zijn daar een los
 * toestel — dus stond dit aantal aanvankelijk nergens in de catalogus. Eén
 * kachel per twee bouwdrogers komt overeen met wat de oude brackets
 * voorschreven, op 220 m² na (die stond op twee waar deze regel er drie geeft).
 * Zet iemand in het portaal een kachel als optie in het pakket, dan telt dát
 * aantal en komt deze regel er niet meer aan te pas.
 */
function heaterCount(items: PackageItem[]): number {
  const drogers = items
    .filter((it) => it.k === "small" || it.k === "medium")
    .reduce((n, it) => n + it.q, 0);
  return Math.max(1, Math.ceil(drogers / 2));
}

/** Twee toestellijsten samentellen, met de volgorde van de eerste voorop. */
function samenvoegen(basis: PackageItem[], bij: PackageItem[]): PackageItem[] {
  const uit = basis.map((it) => ({ ...it }));
  for (const item of bij) {
    const bestaand = uit.find((it) => it.k === item.k);
    if (bestaand) bestaand.q += item.q;
    else uit.push({ ...item });
  }
  return uit;
}

/**
 * Toestellen die standaard in het pakket zitten, vóór eventuele extra's.
 *
 * De catalogus bepaalt de samenstelling. Waterschade krijgt hier géén extra
 * toestellen bovenop: de shop heeft daar een eigen pakket voor, dat al zwaarder
 * is dan het chape-pakket van dezelfde oppervlakte.
 *
 * Vindt `packageFor` niets, dan bestaat de combinatie niet en valt er ook niets
 * te leveren. Dat kan alleen als iemand de query-string omzeilt: `parseConfig`
 * kiest uit dezelfde catalogus.
 */
export function baseItems(c: PackageConfig): PackageItem[] {
  const vast = packageFor(c);
  if (!vast) return [];

  const items = packageItems(vast);
  if (!c.heat) return items;

  // Wat het portaal als optie in het pakket zette gaat vóór op de vuistregel:
  // daar staat per pakket hoeveel kachels erbij horen.
  const opties = packageOptionalItems(vast);
  if (opties.length > 0) return samenvoegen(items, opties);
  return [...items, { k: "kachel" as DeviceKey, q: heaterCount(items) }];
}

/** Basispakket plus de handmatig bijgezette toestellen. */
export function allItems(c: PackageConfig, extra: Partial<Record<DeviceKey, number>> = {}): PackageItem[] {
  const base = baseItems(c);
  const merged: PackageItem[] = base.map((it) => ({ k: it.k, q: it.q + (extra[it.k] || 0) }));
  for (const k of DEVICE_KEYS) {
    if ((extra[k] || 0) > 0 && !base.some((b) => b.k === k)) merged.push({ k, q: extra[k] as number });
  }
  return merged;
}

export function deviceCount(items: PackageItem[]): number {
  return items.reduce((a, it) => a + it.q, 0);
}

/**
 * Eén gevraagde toestelsoort, in de taal van `bouwdroger_equipment`.
 *
 * Twee sleutels, met een verschil dat er toe doet:
 *
 * - `device_key` is de **rol in een pakket** — `small` / `medium` / `axiaal` /
 *   `kachel`. Een pakket vraagt "een kachel", niet één bepaald model, en het
 *   depot mag zelf kiezen welke eruit gaat.
 * - `product_key` is de **verhuurpagina** waar de klant op geklikt heeft
 *   (`revolution`, `teddh20`, …). Wie los een adsorptiedroger reserveert, moet
 *   net dát toestel krijgen; een condensontvochtiger van dezelfde rol is geen
 *   vervanging.
 *
 * Een pakketregel draagt de eerste, een losse reservatie de tweede. Vernast
 * wijst toe op `product_key` wanneer die er staat, en valt anders terug op de
 * rol — zo blijft het depot vrij in wat het uit een pakketrol haalt, en krijgt
 * een losse huurder toch precies zijn toestel toegewezen.
 */
export interface DeviceLine {
  device_key?: DeviceKey;
  product_key?: string;
  qty: number;
}

export function toDeviceLines(items: PackageItem[]): DeviceLine[] {
  return items.filter((it) => it.q > 0).map((it) => ({ device_key: it.k, qty: it.q }));
}

/**
 * Hoe een rol heet tegen een klant. `small` zegt hem niets; "Small Bouwdroger"
 * staat op het toestel dat voor zijn deur wordt gezet.
 */
export const DEVICE_LABEL: Record<DeviceKey, string> = {
  small: "Small Bouwdroger",
  medium: "Medium Bouwdroger",
  axiaal: "Axiaalventilator",
  kachel: "Elektrische kachel",
};

/**
 * "2× Small Bouwdroger" — één besteldregel zoals de klant hem herkent.
 *
 * Een pakketregel draagt een rol, een losse reservatie een product; dat tweede
 * heeft een eigen naam in de catalogus ("Ventilator TTV 4500"). Kent geen van
 * beide de sleutel, dan blijft de sleutel zelf staan: onleesbaar, maar altijd
 * beter dan een regel die verdwijnt uit het overzicht van wat er geleverd wordt.
 */
export function deviceLineLabel(line: DeviceLine): string {
  const name = line.product_key
    ? (PRODUCTS[line.product_key]?.short ?? PRODUCTS[line.product_key]?.name ?? line.product_key)
    : (DEVICE_LABEL[line.device_key as DeviceKey] ?? line.device_key ?? "");
  return `${line.qty}× ${name}`;
}

/**
 * Compacte notatie voor Stripe-metadata: `"small:2,medium:2,axiaal:4"`, en
 * `"p:revolution:1"` voor een regel die één bepaald product vraagt. Waarden
 * daar mogen maar 500 tekens zijn, dus JSON is verspilling.
 */
export function serializeDeviceLines(lines: DeviceLine[]): string {
  return lines
    .map((l) => (l.product_key ? `p:${l.product_key}:${l.qty}` : `${l.device_key}:${l.qty}`))
    .join(",");
}

/**
 * Tegenhanger van `serializeDeviceLines`; onbekende sleutels vallen weg.
 *
 * Productsleutels worden hier niet tegen een lijst gehouden: welke producten
 * bestaan, weet het portaal. Wat het niet kent, wijst het niet toe — en de
 * enige die deze string schrijft is onze eigen checkout.
 */
export function parseDeviceLines(raw: string | null | undefined): DeviceLine[] {
  if (!raw) return [];
  const out: DeviceLine[] = [];
  for (const part of raw.split(",")) {
    const bits = part.split(":");
    const product = bits[0] === "p";
    const key = product ? bits[1] : bits[0];
    const qty = Number(product ? bits[2] : bits[1]);
    if (!key || !Number.isFinite(qty) || qty <= 0) continue;
    if (product) out.push({ product_key: key, qty: Math.floor(qty) });
    else if (DEVICE_KEYS.includes(key as DeviceKey)) {
      out.push({ device_key: key as DeviceKey, qty: Math.floor(qty) });
    }
  }
  return out;
}

export interface RentalWindow {
  start: string;
  end: string;
}

/**
 * De huurperiode die bij een leverdatum hoort. Tot nu toe rekende alleen de
 * boekingspagina dit uit, waardoor orders via Stripe zonder begin- en einddatum
 * in het portaal belandden — en dus onzichtbaar waren voor elke controle op
 * dubbele boekingen.
 *
 * Geeft `null` terug bij een onbruikbare datum in plaats van iets te verzinnen:
 * een verkeerde huurperiode is schadelijker dan geen.
 */
export function rentalWindow(deliveryDate: string, days: number): RentalWindow | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(deliveryDate)) return null;
  const start = new Date(`${deliveryDate}T00:00:00`);
  if (Number.isNaN(start.getTime())) return null;
  if (!Number.isFinite(days) || days <= 0) return null;
  return { start: isoDate(start), end: isoDate(addDays(start, Math.floor(days))) };
}

/**
 * Overlappen twee huurperiodes? De grens is **exclusief**: Vernast haalt op en
 * levert op dezelfde dag, dus een huur die eindigt op 22 augustus laat een huur
 * die start op 22 augustus gewoon toe. Met `<=` zou je per verhuur stilzwijgend
 * een dag capaciteit weggooien.
 */
export function periodsOverlap(a: RentalWindow, b: RentalWindow): boolean {
  return a.start < b.end && a.end > b.start;
}

/** Totale vochtafvoer in liter per 24 u. */
export function totalCapacity(items: PackageItem[]): number {
  return items.reduce((a, it) => a + CAT[it.k].cap * it.q, 0);
}

/** Totaal luchtverzet in m³/u. */
export function totalAirflow(items: PackageItem[]): number {
  return items.reduce((a, it) => a + CAT[it.k].air * it.q, 0);
}

/** Huurprijs van het pakket voor het gekozen aantal weken. */
export function packagePrice(items: PackageItem[], weeks: number): number {
  const perTwoWeeks = items.reduce((a, it) => a + CAT[it.k].w2 * it.q, 0);
  return Math.round(perTwoWeeks * (WEEKS[weeks] ?? 1));
}

/**
 * De huurtermijn die bij deze configuratie hoort.
 *
 * Bij een vast pakket ligt ze vast in de catalogus, want de shop leidt haar af
 * uit de materiaaldikte. Zonder pakket blijft het de vaste termijn van twee
 * weken die de site altijd al hanteerde.
 */
export function configWeeks(c: PackageConfig): number {
  const vast = packageFor(c);
  return vast ? packageWeeks(vast) : FIXED_WEEKS;
}

/**
 * De pakketprijs voor deze configuratie, inclusief wat er bovenop het vaste
 * pakket gezet is.
 *
 * Het vaste pakket draagt zijn eigen totaal — dagprijs × dagen, zoals de shop
 * het aanrekent. Alles wat de klant daarbovenop kiest (kachels, een extra
 * droger) wordt per toestel bijgerekend aan het tarief uit de toestelcatalogus.
 * Zonder vast pakket rekent de oude weg door.
 */
export function configPrice(c: PackageConfig, items: PackageItem[]): number {
  const vast = packageFor(c);
  if (!vast) return packagePrice(items, FIXED_WEEKS);

  const inbegrepen = new Map<DeviceKey, number>();
  for (const it of packageItems(vast)) inbegrepen.set(it.k, it.q);

  const weeks = packageWeeks(vast);
  const meerprijs = items.reduce((som, it) => {
    const extra = Math.max(0, it.q - (inbegrepen.get(it.k) ?? 0));
    return som + CAT[it.k].w2 * extra * (WEEKS[weeks] ?? 1);
  }, 0);

  return Math.round((packageTotal(vast) + meerprijs) * 100) / 100;
}

/**
 * De droogtijd in dagen: de huurtermijn van het pakket. De shop leidt die af uit
 * de materiaaldikte ("3 weken volgens ≤ 6 cm"), dus is het precies de tijd
 * waarvoor het pakket ontworpen is.
 */
export function dryingDays(c: PackageConfig): number {
  const vast = packageFor(c);
  return vast ? packageWeeks(vast) * 7 : FIXED_WEEKS * 7;
}

/**
 * De materiaaldiktes die dit pakket werkelijk bepalen.
 *
 * Beide diktes noemen was misleidend: een chape-pakket stond er als
 * "pleisterdikte 2 cm · chape 6 cm" terwijl die eerste waarde er niets aan
 * verandert — de klant heeft ze bij "chape drogen" niet eens ingevuld. Bij
 * waterschade en "pleisterwerk + chape" stuurt geen enkele dikte het pakket;
 * de shop verkoopt die per oppervlakte.
 */
function thicknessBits(c: PackageConfig, hoofdletter: boolean): string[] {
  if (isWaterDamage(c)) return [hoofdletter ? "Waterschade" : "waterschade"];
  if (c.wat === "chape") return [`${hoofdletter ? "Chapedikte" : "chapedikte"} ${c.cd} cm`];
  if (c.wat === "pleister") {
    return [`${hoofdletter ? "Pleisterdikte" : "pleisterdikte"} ${c.pd} cm`];
  }
  return [hoofdletter ? "Pleisterwerk + chape" : "pleisterwerk + chape"];
}

/** Productnaamconventie: "Gebouw kleiner dan 180 m2 – Chapedikte 6 cm – …". */
export function packageTitle(c: PackageConfig): string {
  const parts = [`Gebouw kleiner dan ${c.size} m2`, ...thicknessBits(c, true)];
  parts.push(c.heat ? "incl. verwarming" : "excl. verwarming");
  return parts.join(" – ");
}

/** Zelfde opsomming, maar als lopende zin onder de titel. */
export function packageSpecLine(c: PackageConfig): string {
  const bits = [`Woning tot ${c.size} m²`, ...thicknessBits(c, false)];
  bits.push(c.heat ? "inclusief verwarming" : "exclusief verwarming");
  return bits.join(" · ");
}

/**
 * Hoeveel er van een toestelsoort in het pakket zit, extra's meegerekend.
 * `droger` telt small + medium op, `totaal` alles.
 */
function aantalVan(items: PackageItem[], device: ImageRule["device"]): number {
  const som = (k: DeviceKey) => items.find((it) => it.k === k)?.q ?? 0;
  if (device === "droger") return som("small") + som("medium");
  if (device === "totaal") return items.reduce((n, it) => n + it.q, 0);
  return som(device);
}

/**
 * Waar de beelden van deze configuratie vandaan komen.
 *
 * Heeft het vaste pakket eigen foto's, dan beslist dát pakket — foto én regels.
 * Anders blijven de brackets de bron, zoals altijd. Die volgorde is nodig omdat
 * "een andere hoofdfoto per samenstelling" op een vast pakket anders nergens
 * zou uitkomen: de pakketpagina toont geen samenstelling, alleen de calculator
 * doet dat.
 */
function beeldbron(c: PackageConfig): { basis: string; regels: ImageRule[]; galerij: string[] } {
  const vast = packageFor(c);
  if (vast && vast.images.length > 0) {
    return { basis: vast.images[0], regels: vast.imgRules, galerij: vast.images };
  }
  // Heeft het pakket nog geen eigen foto's, dan blijft er één neutraal beeld
  // over. Beter dan een lege plek, maar het hoort in het portaal ingevuld te
  // worden — daar staat de galerij per pakket.
  const regels = vast?.imgRules ?? [];
  return { basis: WET_IMG, regels, galerij: [] };
}

/**
 * De hoofdfoto van een pakket.
 *
 * Zonder samenstelling is dat de standaardfoto. Geef je de werkelijke toestellen
 * mee — inclusief wat de klant bijzette — dan winnen de regels uit het portaal:
 * die bestaan juist omdat de banner zijn tellingen in het beeld draagt en dus
 * liegt zodra er een kachel of droger bijkomt.
 */
export function packageImage(c: PackageConfig, items?: PackageItem[]): string {
  const { basis, regels } = beeldbron(c);
  if (!items) return basis;

  const regel = regels.find((r) => r.image && aantalVan(items, r.device) >= r.min);
  return regel ? regel.image : basis;
}

/** De drie beelden die naast de pakketfoto stonden toen die nog vastlag in code. */
const FALLBACK_GALLERY = ["/verhuur/lineup-dryers.webp", "/verhuur/ttv-4500.webp", "/verhuur/teddh-30.webp"];

/**
 * De fotogalerij van een pakket. Sinds de tarieven uit het Vernast-portaal komen
 * hangt die per bracket in de data; publiceerde nog niemand een galerij, dan
 * blijft het bij de pakketfoto plus de drie toestelbeelden van vroeger.
 */
export function packageGallery(c: PackageConfig, items?: PackageItem[]): string[] {
  const bron = beeldbron(c);
  const lead = packageImage(c, items);
  const uit = bron.galerij;
  if (!uit.length) return [lead, ...FALLBACK_GALLERY];

  /*
    De pakketfoto en de beelden uit de regels zijn varianten van hetzelfde
    tafereel: dezelfde banner, andere tellingen erin. Er hoort er dus precies
    één in de galerij te staan — die van de werkelijke samenstelling. Lieten we
    de andere staan, dan zag een klant die kachels bijbestelt naast zijn eigen
    pakket ook de versie zonder kachels, en omgekeerd.
  */
  const varianten = new Set(
    [bron.basis, ...bron.regels.map((r) => r.image)].filter(Boolean),
  );
  return [lead, ...uit.filter((foto) => foto !== lead && !varianten.has(foto))];
}

/** Huurperiode die standaard bij de droogtijd van dit pakket past. */
export function suggestedWeeks(c: PackageConfig): number {
  return Math.min(4, Math.max(1, Math.ceil(dryingDays(c) / 7)));
}

export function isoDate(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function addDays(d: Date, days: number): Date {
  const out = new Date(d);
  out.setDate(out.getDate() + days);
  return out;
}

export function formatLongDate(d: Date): string {
  return d.toLocaleDateString("nl-BE", { weekday: "long", day: "numeric", month: "long" });
}

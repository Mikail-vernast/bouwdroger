/**
 * Rekenregels van het verhuurplatform, herbouwd uit de inline scripts van de
 * Claude Design handoff. Alles hier is puur — de pagina's houden enkel UI-state.
 */
// Relatief geïmporteerd, niet via `@/`: de serverless functies in /api draaien
// buiten de Vite-alias en gebruiken dezelfde rekenregels.
import { BRACKET, CAT, WEEKS, WET_IMG, type DeviceKey } from "../data/verhuur.js";

export interface PackageConfig {
  /** oppervlaktebracket, als sleutel van BRACKET */
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
export const PD_VALUES = ["1,5", "2", "3"] as const;
export const CD_VALUES = ["5", "6", "8"] as const;

function pick(raw: string | null, allowed: readonly string[], fallback: string): string {
  return raw !== null && allowed.includes(raw) ? raw : fallback;
}

export function parseConfig(qs: URLSearchParams): PackageConfig {
  let size = qs.get("size") || "180";
  if (!BRACKET[size]) size = "180";
  return {
    size,
    wat: pick(qs.get("wat"), WAT_VALUES, "beide"),
    pd: pick(qs.get("pd"), PD_VALUES, "3"),
    cd: pick(qs.get("cd"), CD_VALUES, "6"),
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

/** Toestellen die standaard in het pakket zitten, vóór eventuele extra's. */
export function baseItems(c: PackageConfig): PackageItem[] {
  const b = BRACKET[c.size] || BRACKET["180"];
  const wet = isWaterDamage(c);
  const out: PackageItem[] = [];
  if (b.small) out.push({ k: "small", q: b.small + (wet ? 1 : 0) });
  if (b.medium) out.push({ k: "medium", q: b.medium });
  out.push({ k: "axiaal", q: b.axiaal + (wet ? 1 : 0) });
  if (c.heat) out.push({ k: "kachel", q: b.kachel });
  return out;
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
 * Eén toestelsoort met het gevraagde aantal. `device_key` is bewust dezelfde
 * naam als de kolom in `bouwdroger_equipment` aan de Vernast-kant: de sleutels
 * `small` / `medium` / `axiaal` / `kachel` lopen daar één op één mee gelijk, en
 * dat is precies wat een beschikbaarheidscontrole nodig heeft.
 */
export interface DeviceLine {
  device_key: DeviceKey;
  qty: number;
}

export function toDeviceLines(items: PackageItem[]): DeviceLine[] {
  return items.filter((it) => it.q > 0).map((it) => ({ device_key: it.k, qty: it.q }));
}

/**
 * Compacte notatie voor Stripe-metadata: `"small:2,medium:2,axiaal:4"`.
 * Waarden daar mogen maar 500 tekens zijn, dus JSON is verspilling.
 */
export function serializeDeviceLines(lines: DeviceLine[]): string {
  return lines.map((l) => `${l.device_key}:${l.qty}`).join(",");
}

/** Tegenhanger van `serializeDeviceLines`; onbekende sleutels vallen weg. */
export function parseDeviceLines(raw: string | null | undefined): DeviceLine[] {
  if (!raw) return [];
  const out: DeviceLine[] = [];
  for (const part of raw.split(",")) {
    const [key, count] = part.split(":");
    const qty = Number(count);
    if (!DEVICE_KEYS.includes(key as DeviceKey) || !Number.isFinite(qty) || qty <= 0) continue;
    out.push({ device_key: key as DeviceKey, qty: Math.floor(qty) });
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

export function dryingDays(c: PackageConfig): number {
  if (isWaterDamage(c)) return 10;
  return (BRACKET[c.size] || BRACKET["180"]).dry;
}

/** Productnaamconventie: "Gebouw kleiner dan 180 m2 – Pleisterdikte 3 cm – …". */
export function packageTitle(c: PackageConfig): string {
  const parts = [`Gebouw kleiner dan ${c.size} m2`];
  if (isWaterDamage(c)) parts.push("Waterschade");
  else {
    parts.push(`Pleisterdikte ${c.pd} cm`);
    parts.push(`chape ${c.cd} cm`);
  }
  parts.push(c.heat ? "incl. verwarming" : "excl. verwarming");
  return parts.join(" – ");
}

/** Zelfde opsomming, maar als lopende zin onder de titel. */
export function packageSpecLine(c: PackageConfig): string {
  const bits = [`Woning tot ${c.size} m²`];
  if (isWaterDamage(c)) bits.push("waterschade");
  else {
    bits.push(`pleisterdikte ${c.pd} cm`);
    bits.push(`chape ${c.cd} cm`);
  }
  bits.push(c.heat ? "inclusief verwarming" : "exclusief verwarming");
  return bits.join(" · ");
}

export function packageImage(c: PackageConfig): string {
  return isWaterDamage(c) ? WET_IMG : (BRACKET[c.size] || BRACKET["180"]).img;
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

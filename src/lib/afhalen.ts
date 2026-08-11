/**
 * Rekenwerk van een afhaalreservatie — losse toestellen, zelf ophalen.
 *
 * Zowel de afhaalpagina als `api/order.ts` rekenen hiermee, om dezelfde reden
 * als bij een pakket: het bedrag op het scherm en het bedrag dat het portaal
 * noteert moeten per definitie hetzelfde zijn, en de server mag geen totaal
 * geloven dat de browser meestuurt.
 *
 * De selectie reist als één compacte string (`"ttk170:2,ttv4500:1"`) — door de
 * URL van de toestelpagina naar de afhaalpagina, en van daar in de request.
 * Onbekende sleutels vallen overal stil weg.
 */
import {
  MAX_PER_PRODUCT,
  PICKUP_BY_KEY,
  PICKUP_DAYS,
  PICKUP_SLOTS,
  type PickupProduct,
} from "../data/afhalen.js";
import type { DeviceLine } from "./verhuur.js";

/** Btw-tarief op verhuur in België; gelijk aan `booking.ts`. */
export const VAT_RATE = 0.21;

export interface PickupLine {
  product: PickupProduct;
  qty: number;
}

/** `"ttk170:2,ttv4500:1"` → regels. Onbekend of onzinnig valt weg. */
export function parseSelection(raw: string | null | undefined): PickupLine[] {
  if (!raw) return [];
  const seen = new Map<string, number>();
  for (const part of String(raw).split(",")) {
    const [key, count] = part.split(":");
    const product = PICKUP_BY_KEY[(key ?? "").trim()];
    const qty = Math.floor(Number(count));
    if (!product || !Number.isFinite(qty) || qty <= 0) continue;
    // Het plafond komt van het toestel zelf: onze vloot, afgetopt op het
    // algemene maximum. Van de ECO Revolution hebben we er één — dan is één
    // ook het hoogste dat de server aanvaardt, wat de URL ook beweert.
    const total = Math.min(product.max, (seen.get(product.key) ?? 0) + qty);
    seen.set(product.key, total);
  }
  return [...seen]
    .filter(([, qty]) => qty > 0)
    .map(([key, qty]) => ({ product: PICKUP_BY_KEY[key], qty }));
}

/** Tegenhanger van `parseSelection`, voor de URL en de request. */
export function serializeSelection(quantities: Record<string, number>): string {
  return Object.entries(quantities)
    .filter(([key, qty]) => PICKUP_BY_KEY[key] && qty > 0)
    .map(([key, qty]) => `${key}:${Math.min(PICKUP_BY_KEY[key].max, Math.floor(qty))}`)
    .filter((part) => !part.endsWith(":0"))
    .join(",");
}

/** Een huurperiode die in de lijst staat; al de rest valt terug op een week. */
export function normalizeDays(raw: unknown): number {
  const days = Math.floor(Number(raw));
  return PICKUP_DAYS.includes(days) ? days : 7;
}

/** Een afhaalmoment uit de lijst; al de rest valt terug op het eerste blok. */
export function normalizeSlot(raw: unknown): string {
  const slot = String(raw ?? "").trim();
  return PICKUP_SLOTS.includes(slot) ? slot : PICKUP_SLOTS[1];
}

export interface PickupSummary {
  lines: PickupLine[];
  /** Aantal toestellen samen. */
  units: number;
  /** Huurprijs excl. btw. */
  net: number;
  vat: number;
  /** Wat de klant uiteindelijk gefactureerd krijgt. */
  gross: number;
}

function round(amount: number): number {
  return Math.round(amount * 100) / 100;
}

export function pickupSummary(lines: PickupLine[], days: number): PickupSummary {
  const net = round(lines.reduce((sum, l) => sum + l.product.day * l.qty * days, 0));
  const vat = round(net * VAT_RATE);
  return {
    lines,
    units: lines.reduce((sum, l) => sum + l.qty, 0),
    net,
    vat,
    gross: round(net + vat),
  };
}

/**
 * De toestelsoorten zoals het depot ze kent. Wat geen `device_key` heeft valt
 * weg: liever geen regel dan een verzonnen soort waarop de
 * beschikbaarheidscontrole en de automatische toewijzing gaan rekenen.
 */
export function pickupDeviceLines(lines: PickupLine[]): DeviceLine[] {
  const out = new Map<string, DeviceLine>();
  for (const line of lines) {
    const key = line.product.device;
    if (!key) continue;
    const existing = out.get(key);
    if (existing) existing.qty += line.qty;
    else out.set(key, { device_key: key, qty: line.qty });
  }
  return [...out.values()];
}

/** De aantallen zoals het portaal ze per order toont. */
export function pickupCounts(lines: PickupLine[]): {
  drogers: number;
  ventilatoren: number;
  verwarming: number;
} {
  const counts = { drogers: 0, ventilatoren: 0, verwarming: 0 };
  for (const line of lines) {
    if (line.product.kind === "droger") counts.drogers += line.qty;
    else if (line.product.kind === "ventilator") counts.ventilatoren += line.qty;
    else counts.verwarming += line.qty;
  }
  return counts;
}

/** "2× TTK 170 S + 1× TTV 4500" — voor de werklijst en de bevestigingsmail. */
export function pickupLabel(lines: PickupLine[]): string {
  return lines.map((l) => `${l.qty}× ${l.product.short}`).join(" + ");
}

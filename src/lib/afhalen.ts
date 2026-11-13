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
  LANGHUUR_STAFFEL,
  MAX_PER_PRODUCT,
  PICKUP_BY_KEY,
  PICKUP_DAYS,
  PICKUP_SLOTS,
  type PickupProduct,
} from "../data/afhalen.js";
import { DEPOSIT_GROSS, ONLINE_DISCOUNT } from "./booking.js";
import { addDays, isoDate, type DeviceLine } from "./verhuur.js";

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
    // algemene maximum. Van de Revolution hebben we er één — dan is één
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

/**
 * De periodes die de lijst tot 11-2026 droeg, met wat ze nu worden.
 *
 * Toen liep ze op 3, 7, 14, 30 en 60 dagen, nu in hele weken. Een link in een
 * mailbox of een tabblad dat al openstond draagt dus een getal dat er niet meer
 * in staat, en viel daarmee terug op één week: wie twee maanden had gekozen,
 * kwam op de afhaalpagina met zeven dagen terecht en zag een bedrag dat niet
 * klopte met wat hij net had afgesproken. Deze drie worden daarom vertaald naar
 * de dichtstbijzijnde periode die wél bestaat.
 *
 * Een vaste lijst en geen "rond af naar de eerstvolgende": dan koopt `days=999`
 * stilzwijgend acht weken, en dat is geen keuze die iemand gemaakt heeft.
 */
const OUDE_PERIODES: Record<number, number> = { 3: 7, 30: 28, 60: 56 };

/** Een huurperiode die in de lijst staat; al de rest valt terug op een week. */
export function normalizeDays(raw: unknown): number {
  const days = Math.floor(Number(raw));
  if (PICKUP_DAYS.includes(days)) return days;
  const oud = OUDE_PERIODES[days];
  return oud !== undefined && PICKUP_DAYS.includes(oud) ? oud : 7;
}

/**
 * De vroegste dag waarop iemand kan afhalen: morgen.
 *
 * Een afhaling vraagt dat het toestel klaarstaat -- uit het rek gehaald,
 * nagekeken, slang en handleiding erbij. Wie om 16.50 u reserveerde voor
 * dezelfde dag, stond tien minuten later voor een deur waar niets klaarstond.
 * Vierentwintig uur ertussen is de ondergrens, en die geldt op beide kanten:
 * de kalender én `pickupDate` in `orderIntake.ts`, want een datumkiezer in de
 * browser is geen controle.
 */
export const PICKUP_LEAD_DAYS = 1;

/**
 * Staat er iemand in het magazijn op deze dag?
 *
 * Boomsesteenweg is open van maandag tot vrijdag, 08:00--17:00; dat staat zo
 * op elke toestelpagina en in de FAQ. De browserkalender liet zaterdag en
 * zondag gewoon kiezen, en de server nam ze aan -- met een bevestiging voor
 * een dag waarop de poort dicht is.
 */
export function isPickupDay(d: Date): boolean {
  const dag = d.getDay();
  return dag !== 0 && dag !== 6;
}

/**
 * De eerste werkdag vanaf `PICKUP_LEAD_DAYS` na vandaag, als `YYYY-MM-DD`.
 * Valt die op een zaterdag, dan schuift hij door naar maandag.
 */
export function earliestPickupDate(today: Date = new Date()): string {
  let d = addDays(today, PICKUP_LEAD_DAYS);
  while (!isPickupDay(d)) d = addDays(d, 1);
  return isoDate(d);
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
  /** Huurprijs excl. btw, vóór de langhuurkorting. */
  listNet: number;
  /** Langhuurkorting excl. btw; nul onder vier weken. */
  longStay: number;
  /** Huurprijs excl. btw, na de langhuurkorting. */
  net: number;
  vat: number;
  /** Wat de klant uiteindelijk gefactureerd krijgt. */
  gross: number;
}

function round(amount: number): number {
  return Math.round(amount * 100) / 100;
}

/**
 * Welke trede van {@link LANGHUUR_STAFFEL} deze periode haalt, als fractie.
 * Nul onder de eerste trede.
 *
 * Staat hier en niet in de pagina: `api/afhaal-checkout.ts` rekent het bedrag
 * server-side opnieuw uit, en een korting die alleen in de browser bestaat
 * verdwijnt dan stilzwijgend bij het afrekenen.
 */
export function langhuurKorting(days: number): number {
  let fractie = 0;
  // De staffel loopt oplopend, dus de laatste trede die gehaald wordt, wint.
  for (const [dagen, f] of LANGHUUR_STAFFEL) if (days >= dagen) fractie = f;
  return fractie;
}

/** De langhuurkorting in euro op een huurprijs excl. btw. */
export function longStayDiscount(net: number, days: number): number {
  return round(net * langhuurKorting(days));
}

export function pickupSummary(lines: PickupLine[], days: number): PickupSummary {
  const listNet = round(lines.reduce((sum, l) => sum + l.product.day * l.qty * days, 0));
  const longStay = longStayDiscount(listNet, days);
  const net = round(listNet - longStay);
  const vat = round(net * VAT_RATE);
  return {
    lines,
    units: lines.reduce((sum, l) => sum + l.qty, 0),
    listNet,
    longStay,
    net,
    vat,
    gross: round(net + vat),
  };
}

/**
 * Betalen bij een afhaling: alles vooraf met korting, of de orderbevestiging nu
 * en de rest wanneer de klant de toestellen komt halen.
 *
 * Dat tweede was hier lang "factuur na de huurperiode": reserveren zonder één
 * euro vooruit. Een afhaalreservatie legt echte toestellen apart voor iemand
 * die we niet gezien hebben, en wie niet kwam opdagen kostte ons een dag huur
 * van elk toestel dat klaarstond. Nu geldt dezelfde regel als bij een pakket —
 * eenzelfde vaste orderbevestiging, saldo bij de afhaling.
 */
export type PickupPayment = "online" | "afhaling";

/** Een keuze uit de request; al de rest valt terug op vooruitbetalen. */
export function normalizePickupPayment(raw: unknown): PickupPayment {
  return raw === "afhaling" ? "afhaling" : "online";
}

export interface PickupTotals {
  /** Korting bij volledig online betalen, excl. btw; nul bij een voorschot. */
  discount: number;
  /** Huurprijs na korting, excl. btw. */
  net: number;
  /** Btw over `net`. */
  vat: number;
  /** Wat de reservatie in totaal kost, incl. btw. */
  gross: number;
  /** Wat er nú door Stripe gaat, incl. btw. */
  payableGross: number;
  /** Wat er bij de afhaling nog te betalen valt, incl. btw. */
  balance: number;
}

/**
 * De bedragen van één afhaalreservatie. Zowel de afhaalpagina als
 * `api/afhaal-checkout.ts` rekenen hiermee, zodat het bedrag op de knop en het
 * bedrag bij Stripe per definitie hetzelfde zijn.
 *
 * Het voorschot is een vast brutobedrag, net als bij een pakket: bij elke
 * reservatie staat er dezelfde € 50 op de knop, niet een percentage. Is de huur
 * goedkoper dan het voorschot, dan betaalt de klant gewoon het volledige bedrag
 * — een saldo dat negatief staat kan de saldopagina niet innen.
 */
export function pickupTotals(netBeforeDiscount: number, payment: PickupPayment): PickupTotals {
  const discount = payment === "online" ? round(netBeforeDiscount * ONLINE_DISCOUNT) : 0;
  const net = round(netBeforeDiscount - discount);
  const vat = round(net * VAT_RATE);
  const gross = round(net + vat);
  const payableGross = payment === "online" ? gross : Math.min(DEPOSIT_GROSS, gross);
  return { discount, net, vat, gross, payableGross, balance: round(gross - payableGross) };
}

/**
 * De toestellen zoals het depot ze kent — één regel per gekozen product.
 *
 * Bewust op `product_key` en niet op de pakketrol: wie hier een adsorptiedroger
 * of de kachel van 20 kW kiest, heeft die pagina gezien en verwacht dat toestel.
 * Op de rol toewijzen zou een condensontvochtiger of de kachel van 30 kW mogen
 * sturen. Toestellen zonder rol (adsorptiedroger, radiaal, TTK 650) vielen hier
 * vroeger helemaal weg — dan bleef er niets over om automatisch toe te wijzen,
 * en telde de reservatie ook niet mee voor de beschikbaarheid.
 */
export function pickupDeviceLines(lines: PickupLine[]): DeviceLine[] {
  const out = new Map<string, DeviceLine>();
  for (const line of lines) {
    const existing = out.get(line.product.key);
    if (existing) existing.qty += line.qty;
    else out.set(line.product.key, { product_key: line.product.key, qty: line.qty });
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

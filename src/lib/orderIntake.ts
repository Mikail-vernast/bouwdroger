/**
 * Wat een bezoeker mag meesturen bij een order, en wat de server zelf bepaalt.
 *
 * De route nam vroeger `{ ...data }` van de browser en zette dat rechtstreeks
 * in de tabel. Daarmee bepaalde de afzender welke kolommen geschreven werden —
 * inclusief `status`, en inclusief het bedrag. Iemand die de request namaakte
 * kon dus een order van € 0 aanmaken, of een veld zetten dat het formulier niet
 * eens toont.
 *
 * Twee regels lossen dat op:
 *
 * 1. Alleen velden uit de allowlist komen door. Alles daarbuiten valt weg,
 *    stil — er is geen legitieme reden waarom een formulier iets anders stuurt,
 *    en een foutmelding zou een aanvaller alleen maar vertellen welke kolommen
 *    bestaan.
 * 2. Het bedrag wordt hier opnieuw berekend uit de pakketgegevens op de server.
 *    Wat de browser als totaal meestuurt wordt genegeerd — dezelfde regel die
 *    api/checkout.ts al toepast voor Stripe.
 */
import { getPackageById } from "../data/packages.js";
import { products } from "../data/products.js";
import {
  normalizeDays,
  normalizeSlot,
  parseSelection,
  pickupSummary,
  type PickupLine,
  type PickupSummary,
} from "./afhalen.js";
import { isoDate } from "./verhuur.js";

/** Velden die het boekingsformulier legitiem invult. */
const BOOKING_FIELDS = [
  "booking_number",
  "customer_type",
  "first_name",
  "last_name",
  "email",
  "phone",
  "address",
  "postal_code",
  "city",
  "company_name",
  "vat_number",
  "notes",
  "sqm",
  "room_type",
  "package_tier",
  "duration_days",
  "rental_start_date",
  "rental_end_date",
  "product_id",
  "equipment_drogers",
  "equipment_ventilatoren",
  "equipment_verwarming",
] as const;

/** Velden die het reserveringsformulier legitiem invult. */
const RESERVERING_FIELDS = [
  "situatie",
  "machine",
  "duur",
  "voornaam",
  "achternaam",
  "telefoon",
  "email",
  "adres",
  "gemeente",
  "postcode",
  "leveringsdatum",
  "bericht",
] as const;

/**
 * `status`, `user_id` en de prijskolommen staan bewust in geen van beide
 * lijsten: die bepaalt de server. Ze staan hier alleen als documentatie van wat
 * er geweigerd wordt.
 */
export const SERVER_CONTROLLED = ["status", "user_id", "total_price", "prijs_excl_btw"] as const;

type Row = Record<string, unknown>;

/** Houdt enkel de toegestane sleutels over; onbekende velden verdwijnen. */
function pickAllowed(data: Row, allowed: readonly string[]): Row {
  const out: Row = {};
  for (const key of allowed) {
    if (data[key] !== undefined) out[key] = data[key];
  }
  return out;
}

function toInt(value: unknown, fallback = 0): number {
  const n = Number(value);
  return Number.isFinite(n) && n >= 0 ? Math.floor(n) : fallback;
}

/** Aantal toestellen van één soort dat standaard in een pakket zit. */
function baseCount(packageId: string, type: string): number {
  const pkg = getPackageById(packageId);
  if (!pkg) return 0;
  return pkg.equipment
    .filter((e) => e.type === type)
    .reduce((sum, e) => sum + e.count, 0);
}

/** Dagprijs van de extra toestellen die iemand bovenop het pakket koos. */
const EXTRA_DAY_PRICE = { bouwdroger: 12, ventilator: 5 } as const;

/** Kortingsstaffel op de huurduur, gelijk aan wat de pagina toont. */
function durationDiscount(days: number): number {
  if (days >= 28) return 15;
  if (days >= 21) return 10;
  if (days >= 14) return 5;
  return 0;
}

/**
 * Berekent het bedrag van een boeking uit het pakket, de duur en de extra
 * toestellen. Levert `null` wanneer er niets te berekenen valt — dan gaat de
 * order zonder bedrag door en bepaalt het portaal de prijs, wat nog altijd
 * beter is dan een bedrag vertrouwen dat de bezoeker koos.
 */
export function bookingPrice(row: Row): number | null {
  const days = toInt(row.duration_days);
  const tier = typeof row.package_tier === "string" ? row.package_tier : null;

  if (tier) {
    const pkg = getPackageById(tier);
    if (pkg && days > 0) {
      const extraDrogers = Math.max(0, toInt(row.equipment_drogers) - baseCount(tier, "bouwdroger"));
      const extraVent = Math.max(0, toInt(row.equipment_ventilatoren) - baseCount(tier, "ventilator"));
      const perDay =
        pkg.pricePerDay +
        extraDrogers * EXTRA_DAY_PRICE.bouwdroger +
        extraVent * EXTRA_DAY_PRICE.ventilator;
      const subtotal = perDay * days;
      return subtotal - Math.round(subtotal * (durationDiscount(days) / 100));
    }
  }

  // Losse toestelboeking: de dagprijs uit de catalogus, niet uit de request.
  const productId = typeof row.product_id === "string" ? row.product_id : null;
  const product = productId ? products.find((p) => p.id === productId) : undefined;
  if (product) return days > 0 ? product.pricePerDay * days : product.pricePerDay;

  return null;
}

/** De rij zoals hij de database in mag: gefilterd, met servervelden gezet. */
export function bookingRow(data: Row): Row {
  const clean = pickAllowed(data, BOOKING_FIELDS);
  return { ...clean, status: "pending", user_id: null, total_price: bookingPrice(clean) };
}

/** Idem voor een reservering; die kent geen bedrag in het formulier. */
export function reserveringRow(data: Row): Row {
  return pickAllowed(data, RESERVERING_FIELDS);
}

/* ============================================================
   Afhaalreservatie — losse toestellen, zelf ophalen
   ============================================================ */

/** Wat een klant maximaal kan huren zonder dat wij eerst bellen. */
const MAX_PICKUP_UNITS = 20;

export interface AfhaalOrder {
  lines: PickupLine[];
  summary: PickupSummary;
  days: number;
  /** ISO-afhaaldatum, of `null` als er geen bruikbare datum meegestuurd is. */
  date: string | null;
  slot: string;
  customerType: "particulier" | "zakelijk";
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  company: string;
  vatNumber: string;
  notes: string;
}

function text(value: unknown, max: number): string {
  if (value === null || value === undefined) return "";
  return String(value).trim().slice(0, max);
}

/**
 * Het klanttype zoals het portaal het kent: `particulier` of `zakelijk`.
 *
 * De verhuurwizard werkt intern met `part`/`pro` en stuurde die woorden ook
 * mee. `bouwdroger-order-webhook` laat alleen de twee lange vormen door en
 * gooit al de rest weg, dus stond bij élke boeking uit die wizard het klanttype
 * op leeg — een bedrijf kwam binnen als naamloze particulier, mét bedrijfsnaam
 * en btw-nummer eronder. Alles wat niet zakelijk is valt bewust terug op
 * particulier: dat is de veilige kant, want er hangt geen btw-verlegging aan.
 */
export function customerType(value: unknown): "particulier" | "zakelijk" {
  const raw = String(value ?? "").trim().toLowerCase();
  return raw === "zakelijk" || raw === "pro" ? "zakelijk" : "particulier";
}

/**
 * Een afhaaldatum die vandaag of later valt. Een datum in het verleden is geen
 * vergissing die we stilzwijgend rechtzetten: dan staat er straks een order in
 * het portaal voor een dag die al voorbij is.
 */
function pickupDate(value: unknown): string | null {
  const raw = text(value, 20);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(raw)) return null;
  const date = new Date(`${raw}T00:00:00`);
  if (Number.isNaN(date.getTime())) return null;
  return raw >= isoDate(new Date()) ? raw : null;
}

/**
 * De afhaalreservatie zoals de server hem leest: alleen bekende toestellen,
 * alleen een periode en een afhaalmoment uit de lijst, en een bedrag dat hier
 * berekend wordt uit de gepubliceerde tarieven. Wat de browser als totaal
 * meestuurt, komt er niet eens in.
 */
export function afhaalOrder(data: Row): AfhaalOrder {
  const lines = capUnits(parseSelection(text(data.lines, 300)));
  const days = normalizeDays(data.days);
  const name = text(data.name, 200);
  const space = name.indexOf(" ");

  return {
    lines,
    summary: pickupSummary(lines, days),
    days,
    date: pickupDate(data.date),
    slot: normalizeSlot(data.slot),
    customerType: customerType(data.customer_type),
    firstName: space > 0 ? name.slice(0, space) : name,
    lastName: space > 0 ? name.slice(space + 1) : "",
    email: text(data.email, 200),
    phone: text(data.phone, 40),
    address: text(data.address, 250),
    company: text(data.company_name, 200),
    vatNumber: text(data.vat_number, 40),
    notes: text(data.notes, 2000),
  };
}

/** Kapt de bestelling af op wat wij zonder overleg kunnen klaarzetten. */
function capUnits(lines: PickupLine[]): PickupLine[] {
  const out: PickupLine[] = [];
  let units = 0;
  for (const line of lines) {
    const room = MAX_PICKUP_UNITS - units;
    if (room <= 0) break;
    const qty = Math.min(line.qty, room);
    out.push({ ...line, qty });
    units += qty;
  }
  return out;
}

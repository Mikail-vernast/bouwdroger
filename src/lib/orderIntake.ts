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

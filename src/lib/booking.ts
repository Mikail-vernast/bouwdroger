/**
 * Prijsopbouw van één boeking. Zowel de boekingspagina als de serverless functie
 * die de Stripe-sessie aanmaakt rekenen hiermee, zodat het bedrag op het scherm
 * en het bedrag dat afgerekend wordt per definitie hetzelfde zijn. De functie
 * begrenst zijn eigen invoer, want de payload komt van de browser en mag niet
 * vertrouwd worden.
 */
import {
  COVER,
  DELIVERY,
  EXTRAS,
  LADDER_FEE,
  MAX_FLOORS,
  PUMP,
  type DeviceKey,
} from "../data/verhuur.js";
import { TARIEVEN } from "../data/tarieven.js";
import {
  DEVICE_KEYS,
  allItems,
  configPrice,
  configWeeks,
  deviceCount,
  type PackageConfig,
  type PackageItem,
} from "./verhuur.js";

export const MAX_EXTRA_DEVICES = Number(TARIEVEN.pricing.max_extra_devices);

export type Access = "trap" | "ladder";

/**
 * Betalen kan volledig online — dat levert 5% korting op en de factuur volgt
 * meteen — of met € 50 orderbevestiging waarna het saldo bij levering betaald
 * wordt. De keuze bepaalt dus zowel de korting als het bedrag dat nú door
 * Stripe gaat.
 */
export type PaymentChoice = "online" | "levering";

/** Korting bij volledig online betalen. */
export const ONLINE_DISCOUNT = Number(TARIEVEN.pricing.online_discount);

/** Orderbevestiging wanneer de klant de rest bij levering betaalt. */
export const DEPOSIT = Number(TARIEVEN.pricing.deposit);

/** Btw-tarief op verhuur in België. */
export const VAT_RATE = 0.21;

/** Een bedrag excl. btw naar het bedrag dat de klant effectief betaalt. */
export function withVat(amount: number): number {
  return Math.round(amount * (1 + VAT_RATE) * 100) / 100;
}

export interface BookingOptions {
  /** sleutel uit COVER */
  cover: string;
  /** sleutels uit EXTRAS die aangevinkt zijn */
  extras: string[];
  /** aantal condenspompen; null = standaard, één per bouwdroger */
  pumps: number | null;
  /** handmatig bijgezette toestellen */
  dev: Partial<Record<DeviceKey, number>>;
  floors: number;
  access: Access;
  /** sleutel uit DELIVERY */
  delivery: string;
  payment: PaymentChoice;
}

export interface BookingLine {
  l: string;
  v: number;
  /** true = zit in de pakketprijs, wordt als "Inbegrepen" getoond */
  inc?: boolean;
}

export interface BookingSummary {
  items: PackageItem[];
  deviceCount: number;
  dryerCount: number;
  /** aantal pompen na begrenzing op het aantal bouwdrogers */
  pumps: number;
  base: number;
  lines: BookingLine[];
  /** som van pakket en opties, vóór de kortingen */
  total: number;
  /** korting bij volledig online betalen; 0 bij betalen bij levering */
  discount: number;
  /** het totaal zoals de samenvatting het toont */
  netTotal: number;
  /** wat er nú door Stripe gaat: het hele bedrag, of de € 50 bevestiging */
  payable: number;
  /** btw over `netTotal`, dus over het bedrag ná korting */
  vat: number;
  /** `netTotal` mét btw — wat een particulier uiteindelijk betaalt */
  grossTotal: number;
  /**
   * `payable` mét btw: het bedrag dat effectief door Stripe gaat.
   *
   * De prijzen in de catalogus staan excl. btw en dat is jarenlang ook zo
   * afgerekend — de klant betaalde dus 21% te weinig en elke factuur moest
   * achteraf rechtgezet worden. Stripe krijgt vanaf nu het brutobedrag.
   */
  payableGross: number;
  weeks: number;
  days: number;
}

export const EMPTY_OPTIONS: BookingOptions = {
  cover: "comfort",
  extras: [],
  pumps: null,
  dev: {},
  floors: 0,
  access: "trap",
  delivery: DELIVERY[0].k,
  payment: "online",
};

function clampInt(n: unknown, min: number, max: number): number {
  const v = Math.floor(Number(n));
  if (!Number.isFinite(v)) return min;
  return Math.min(max, Math.max(min, v));
}

/** Maakt van een onbetrouwbare payload een geldige BookingOptions. */
export function normalizeOptions(raw: unknown): BookingOptions {
  const o = (raw ?? {}) as Partial<BookingOptions>;
  const dev: Partial<Record<DeviceKey, number>> = {};
  for (const k of DEVICE_KEYS) {
    const q = clampInt(o.dev?.[k] ?? 0, 0, MAX_EXTRA_DEVICES);
    if (q > 0) dev[k] = q;
  }
  return {
    cover: COVER.some((c) => c.k === o.cover) ? (o.cover as string) : EMPTY_OPTIONS.cover,
    extras: Array.isArray(o.extras) ? EXTRAS.filter((x) => o.extras?.includes(x.k)).map((x) => x.k) : [],
    pumps: o.pumps === null || o.pumps === undefined ? null : clampInt(o.pumps, 0, 99),
    dev,
    floors: clampInt(o.floors ?? 0, 0, MAX_FLOORS),
    access: o.access === "ladder" ? "ladder" : "trap",
    delivery: DELIVERY.some((d) => d.k === o.delivery) ? (o.delivery as string) : EMPTY_OPTIONS.delivery,
    payment: o.payment === "levering" ? "levering" : "online",
  };
}

/** Bedrag in eurocent, voor Stripe. */
export function toCents(euros: number): number {
  return Math.round(euros * 100);
}

/** Prefix van het boekingsnummer dat de klant en Stripe te zien krijgen. */
export const REFERENCE_PREFIX = "VRN-2026-";

/** Zonder 0/1/I/L/O/U, zodat een voorgelezen referentie niet verkeerd landt. */
const REFERENCE_ALPHABET = "23456789ABCDEFGHJKMNPQRSTVWXYZ";
const REFERENCE_LENGTH = 8;

/**
 * Boekingsreferentie uit een cryptografische bron. Met 30^8 mogelijkheden is de
 * kans op een botsing verwaarloosbaar; een korte reeks uit `Math.random()` zou
 * al na enkele tientallen boekingen twee klanten hetzelfde nummer geven.
 */
export function newReference(): string {
  // Verwerp bytes ≥ 240 zodat de rest gelijkmatig over 30 tekens valt.
  const limit = 256 - (256 % REFERENCE_ALPHABET.length);
  let out = "";
  while (out.length < REFERENCE_LENGTH) {
    const bytes = crypto.getRandomValues(new Uint8Array(REFERENCE_LENGTH));
    for (const b of bytes) {
      if (b >= limit) continue;
      out += REFERENCE_ALPHABET[b % REFERENCE_ALPHABET.length];
      if (out.length === REFERENCE_LENGTH) break;
    }
  }
  return REFERENCE_PREFIX + out;
}

/**
 * JSON met gesorteerde sleutels, zodat dezelfde inhoud altijd dezelfde tekst
 * oplevert — ook als de velden in een andere volgorde in het object staan.
 */
function stable(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(stable).join(",")}]`;
  if (value !== null && typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>)
      .filter(([, v]) => v !== undefined)
      .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0));
    return `{${entries.map(([k, v]) => `${JSON.stringify(k)}:${stable(v)}`).join(",")}}`;
  }
  return JSON.stringify(value) ?? "null";
}

/**
 * Vingerafdruk van alles wat een boeking bepaalt: het pakket, de opties, de
 * klant en de leverdatum.
 *
 * Elke klik op "Naar de betaling" maakte tot nu toe een nieuwe Stripe-sessie én
 * legde een nieuwe hold op de toestellen. Wie vanuit het betaalscherm terugging
 * om iets na te kijken en daarna gewoon opnieuw doorklikte, reserveerde zo een
 * tweede keer hetzelfde materieel — en botste dan op zijn eigen reservatie: "op
 * deze leverdatum zijn onze toestellen al ingepland", terwijl hij ze zelf een
 * minuut eerder had vastgezet. De wizard schoof hem daarop terug naar de
 * datumstap, met een leverdatum twee weken verder.
 *
 * Hiermee ziet de pagina dat er niets veranderd is en gebruikt ze de sessie die
 * er al staat, in plaats van er een tweede naast te zetten.
 */
export function bookingFingerprint(payload: unknown): string {
  return stable(payload);
}

/** Herkent een referentie die door `newReference` is aangemaakt. */
export function isReference(value: unknown): boolean {
  if (typeof value !== "string" || !value.startsWith(REFERENCE_PREFIX)) return false;
  const body = value.slice(REFERENCE_PREFIX.length);
  return (
    body.length === REFERENCE_LENGTH &&
    [...body].every((ch) => REFERENCE_ALPHABET.includes(ch))
  );
}

export function bookingSummary(config: PackageConfig, raw: BookingOptions): BookingSummary {
  const options = normalizeOptions(raw);
  const items = allItems(config, options.dev);
  const dryerCount = items
    .filter((it) => it.k === "small" || it.k === "medium")
    .reduce((s, it) => s + it.q, 0);
  // Zonder eigen keuze staat er standaard één pomp per bouwdroger klaar.
  const pumps = Math.min(options.pumps ?? dryerCount, dryerCount);

  /*
    De huurtermijn is niet meer voor iedereen twee weken: bij een vast pakket
    ligt ze in de catalogus, want de shop leidt ze af uit de materiaaldikte
    (chape 5/6/7 cm loopt 2/3/4 weken). Alles wat per week of per dag rekent —
    de extra's, de condenspompen — moet die termijn volgen, anders staat er een
    pakket van vier weken op het scherm met twee weken condenspomp eronder.
  */
  const weeks = configWeeks(config);
  const base = configPrice(config, items);
  const lines: BookingLine[] = [];

  const coverTier = COVER.find((c) => c.k === options.cover) ?? COVER[0];
  lines.push(
    coverTier.price
      ? { l: `Dekking ${coverTier.name}`, v: coverTier.price }
      : { l: "Standaard dekking", v: 0, inc: true }
  );
  lines.push({ l: "Vochtmeting bij start & oplevering", v: 0, inc: true });

  for (const x of EXTRAS) {
    if (!options.extras.includes(x.k)) continue;
    lines.push({
      l: x.name + (x.perWeek ? ` · ${weeks} wk` : ""),
      v: x.perWeek ? x.price * weeks : x.price,
    });
  }

  if (pumps > 0) {
    const days = weeks * 7;
    lines.push({ l: `${pumps}× condenspomp · ${days} dagen`, v: pumps * PUMP.price * days });
  }

  if (options.floors > 0) {
    lines.push(
      options.access === "ladder"
        ? { l: "Plaatsing verdieping via ladder", v: LADDER_FEE }
        : { l: "Plaatsing op verdieping (trap)", v: 0, inc: true }
    );
  }

  const deliveryOption = DELIVERY.find((d) => d.k === options.delivery) ?? DELIVERY[0];
  if (deliveryOption.price) lines.push({ l: "Zelf afhalen", v: deliveryOption.price });

  const total = base + lines.reduce((s, r) => s + r.v, 0);
  // Op centen afronden voordat er iets van afgetrokken wordt, anders loopt het
  // bedrag op het scherm een cent uit de pas met het bedrag bij Stripe.
  const discount =
    options.payment === "online" ? Math.round(total * ONLINE_DISCOUNT * 100) / 100 : 0;
  const netTotal = Math.round((total - discount) * 100) / 100;
  const payable = options.payment === "online" ? netTotal : DEPOSIT;
  const vat = Math.round(netTotal * VAT_RATE * 100) / 100;

  return {
    items,
    deviceCount: deviceCount(items),
    dryerCount,
    pumps,
    base,
    lines,
    total,
    discount,
    netTotal,
    payable,
    vat,
    grossTotal: Math.round((netTotal + vat) * 100) / 100,
    payableGross: Math.round(payable * (1 + VAT_RATE) * 100) / 100,
    weeks,
    days: weeks * 7,
  };
}

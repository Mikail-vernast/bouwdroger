/**
 * De browser meldt dat een boeking in de wizard vastliep vóór er iets naar de
 * checkout ging: de datumstap bleef dicht, of de datums konden niet geladen
 * worden. Dat gebeurt volledig in de browser, dus zonder deze route bleef het
 * onzichtbaar (zie `bookingEvents.ts`).
 *
 * Publiek en ongeauthenticeerd, dus bewust smal:
 * - enkel de `wizard_*`-codes uit een vaste lijst;
 * - pakket en toestellen worden hier opnieuw afgeleid uit de configuratie, niet
 *   als vrije tekst overgenomen;
 * - geen enkel vrij tekstveld van de bezoeker komt in de tabel;
 * - een strakke drempel per IP, en per IP en code één rij per minuut.
 */
import { bookingSummary, normalizeOptions } from "../src/lib/booking.js";
import { type BookingEventCode, isBookingEventCode, recordBookingEvent } from "../src/lib/bookingEvents.js";
import { normalizeDays, parseSelection, pickupDeviceLines } from "../src/lib/afhalen.js";
import { clientIp, gate, tooManyRequests } from "../src/lib/rateLimit.js";
import { allItems, packageTitle, parseConfig, toDeviceLines } from "../src/lib/verhuur.js";

const MAX_EVENTS = 20;

const WIZARD_CODES: ReadonlySet<BookingEventCode> = new Set<BookingEventCode>([
  "wizard_datum_verschoven",
  "wizard_geen_vrije_datum",
  "wizard_beschikbaarheid_onbereikbaar",
]);

function strings(value: unknown): Record<string, string> {
  const out: Record<string, string> = {};
  if (typeof value !== "object" || value === null || Array.isArray(value)) return out;
  for (const [key, raw] of Object.entries(value as Record<string, unknown>)) {
    if (typeof raw === "string") out[key] = raw;
    else if (typeof raw === "number" && Number.isFinite(raw)) out[key] = String(raw);
  }
  return out;
}

function isoDate(value: unknown): string | null {
  return typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : null;
}

interface Body {
  code?: unknown;
  config?: unknown;
  options?: unknown;
  lines?: unknown;
  days?: unknown;
  start?: unknown;
  blocked?: unknown;
  status?: unknown;
}

export async function POST(request: Request): Promise<Response> {
  const ip = clientIp(request);
  const limit = gate(ip, MAX_EVENTS);

  const attempt = limit.attempt();
  if (!attempt.allowed) return tooManyRequests(attempt.retryAfter);

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return new Response(null, { status: 400 });
  }

  if (!isBookingEventCode(body.code) || !WIZARD_CODES.has(body.code)) {
    return new Response(null, { status: 400 });
  }

  const accepted = limit.accept();
  if (!accepted.allowed) return tooManyRequests(accepted.retryAfter);

  const blocked = Number(body.blocked);
  const status = Number(body.status);
  const pickup = typeof body.lines === "string" && body.lines.trim() !== "";

  if (pickup) {
    recordBookingEvent({
      route: "afhaal-wizard",
      code: body.code,
      pkg: "Losse toestellen, afhalen",
      start: isoDate(body.start),
      days: normalizeDays(body.days),
      items: pickupDeviceLines(parseSelection(body.lines as string)),
      blocked: Number.isFinite(blocked) ? Math.trunc(blocked) : undefined,
      status: Number.isFinite(status) && status >= 100 && status < 600 ? status : undefined,
      dedupeKey: ip,
    });
  } else {
    const config = parseConfig(new URLSearchParams(strings(body.config)));
    const summary = bookingSummary(config, normalizeOptions(body.options));
    recordBookingEvent({
      route: "wizard",
      code: body.code,
      pkg: packageTitle(config),
      start: isoDate(body.start),
      days: summary.days,
      items: toDeviceLines(summary.items.length ? summary.items : allItems(config)),
      blocked: Number.isFinite(blocked) ? Math.trunc(blocked) : undefined,
      status: Number.isFinite(status) && status >= 100 && status < 600 ? status : undefined,
      dedupeKey: ip,
    });
  }

  return new Response(null, { status: 204, headers: { "cache-control": "no-store" } });
}

/**
 * Vraagt Vernast of de gevraagde toestellen in een periode nog vrij zijn.
 *
 * De site heeft geen database-toegang — dat is een bewuste keuze sinds de
 * Lovable-database eruit ging — dus dit loopt langs dezelfde edge function en
 * hetzelfde gedeelde secret als de order-webhook. Server-only: het secret hoort
 * niet in de browserbundel.
 *
 * Zie `docs/plan-beschikbaarheid.md` voor het waarom.
 */
import { withRetry } from "./retry.js";
import type { DeviceLine } from "./verhuur.js";

/*
  Krapper dan bij de order-webhook, want hier staat een bezoeker te wachten. Met
  twee pogingen van vier seconden duurt het slechtste geval ongeveer even lang
  als de enkele poging van zes die hier eerst stond, maar vangen we de
  uitschieters van het portaal wél op in plaats van er hard op te falen.
*/
const TIMEOUT_MS = 4000;
const TRIES = 2;
const DELAYS_MS = [300];

export interface AvailabilityAnswer {
  capacity: Record<string, number>;
  peak: Record<string, number>;
  blocked_start_dates: string[];
  /** Alleen ingevuld bij een vraag over één concrete startdatum. */
  available: boolean | null;
}

/** Zelfde vorm als `SyncResult` in `vernastSync.ts`: nooit gooien, altijd melden. */
export interface AvailabilityResult {
  ok: boolean;
  answer?: AvailabilityAnswer;
  /** Reden waarom het niet lukte — voor de logs, nooit voor de bezoeker. */
  reason?: string;
}

/**
 * De beschikbaarheidsfunctie zit naast de order-webhook, dus de URL is daaruit
 * af te leiden. Zo hoeft er geen tweede omgevingsvariabele bij te komen die op
 * drie omgevingen uit elkaar kan lopen.
 */
function endpoint(): string | null {
  const base = process.env.VERNAST_WEBHOOK_URL;
  if (!base) return null;
  return base.replace(/\/bouwdroger-order-webhook\/?$/, "/bouwdroger-availability");
}

function call(body: Record<string, unknown>): Promise<AvailabilityResult> {
  const url = endpoint();
  const secret = process.env.VERNAST_WEBHOOK_SECRET;
  if (!url || !secret) {
    return Promise.resolve({
      ok: false,
      reason: "VERNAST_WEBHOOK_URL of VERNAST_WEBHOOK_SECRET ontbreekt",
    });
  }

  return withRetry(() => post(url, secret, body), { tries: TRIES, delaysMs: DELAYS_MS });
}

async function post(
  url: string,
  secret: string,
  body: Record<string, unknown>,
): Promise<AvailabilityResult> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json", "x-webhook-secret": secret },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      return { ok: false, reason: `HTTP ${response.status}: ${text.slice(0, 200)}` };
    }

    return { ok: true, answer: (await response.json()) as AvailabilityAnswer };
  } catch (error: unknown) {
    return { ok: false, reason: error instanceof Error ? error.message : "onbekende fout" };
  } finally {
    clearTimeout(timer);
  }
}

/** Harde ja/nee voor één boeking. */
export function checkOne(start: string, days: number, items: DeviceLine[]): Promise<AvailabilityResult> {
  return call({ start, days, items });
}

/** Welke startdatums in dit bereik niet passen voor deze samenstelling. */
export function blockedStartDates(
  from: string,
  to: string,
  days: number,
  items: DeviceLine[],
): Promise<AvailabilityResult> {
  return call({ from, to, days, items });
}

/**
 * Legt de toestellen apart zolang de bezoeker aan het afrekenen is. Faalt dit,
 * dan gaat de boeking gewoon door: een gemiste hold verkleint alleen het venster
 * waarin twee mensen elkaar kunnen kruisen, en dat weegt niet op tegen een
 * klant die niet kan betalen omdat Vernast even onbereikbaar was.
 */
export function holdForSession(input: {
  stripeSessionId: string;
  orderNumber?: string | null;
  start: string;
  days: number;
  items: DeviceLine[];
  minutes?: number;
}): Promise<AvailabilityResult> {
  return call({
    action: "hold",
    stripe_session_id: input.stripeSessionId,
    order_number: input.orderNumber ?? null,
    start: input.start,
    days: input.days,
    items: input.items,
    minutes: input.minutes ?? 30,
  });
}

/** Geeft de toestellen weer vrij; idempotent, want Stripe herhaalt events. */
export function releaseHold(stripeSessionId: string): Promise<AvailabilityResult> {
  return call({ action: "release", stripe_session_id: stripeSessionId });
}

/** Logt een mislukte oproep zichtbaar genoeg om hem in Vercel terug te vinden. */
export function logAvailabilityFailure(context: string, result: AvailabilityResult): void {
  if (result.ok) return;
  console.error(`[beschikbaarheid] ${context}: ${result.reason}`);
}


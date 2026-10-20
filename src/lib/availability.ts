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
import { alertAvailabilityFailure } from "./mail.js";
import { keepAlive } from "./platformWaitUntil.js";
import { rateLimit } from "./rateLimit.js";
import { withRetry } from "./retry.js";
import { notifyAvailabilityFailure } from "./slack.js";
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


/**
 * Wat de harde controle van een boeking zegt.
 *
 * - `vrij`: het portaal antwoordde en de toestellen passen.
 * - `vol`: het portaal antwoordde en ze passen niet — de 409.
 * - `onbekend`: er kwam geen bruikbaar antwoord. Vernast onbereikbaar, een
 *   time-out, een verkeerd secret, of een antwoord zonder `available`.
 *
 * Die laatste ging tot 20-10-2026 als `vrij` door: "een bezoeker die niet kan
 * afrekenen kost meer dan twee boekingen die elkaar kruisen". Maar bij een
 * storing van het portaal kruisen niet twee boekingen elkaar, dan boekt iedereen
 * blind — op een dag die misschien al vol staat, en de klant heeft dan al
 * betaald. Een minuut niet kunnen afrekenen is herstelbaar; een betaalde
 * levering die we niet kunnen waarmaken niet.
 */
export type AvailabilityVerdict = "vrij" | "vol" | "onbekend";

export function availabilityVerdict(result: AvailabilityResult): AvailabilityVerdict {
  const available = result.ok ? result.answer?.available : undefined;
  if (available === true) return "vrij";
  if (available === false) return "vol";
  return "onbekend";
}

/** Wat de bezoeker ziet wanneer de controle zelf faalt. Zelfde tekst op elke route. */
export const CHECK_UNAVAILABLE_ERROR =
  "We kunnen de beschikbaarheid nu niet controleren. Probeer het over enkele minuten opnieuw of bel ons op 03 689 90 65.";

/** De `code` naast die tekst, zodat de wizard hem kan onderscheiden van een volle dag. */
export const CHECK_UNAVAILABLE_CODE = "controle_onbereikbaar";

/*
  Eén alarm per kwartier. Een storing van het portaal raakt elke bezoeker die op
  dat moment wil afrekenen; zonder drempel krijgt het team per poging een mail
  en een Slackbericht, en dan wordt het kanaal weggeklikt precies wanneer het
  telt. De teller staat in het geheugen van één instantie (zie `rateLimit.ts`):
  bij een lange storing kan elke instantie er één sturen. Dat is een handvol,
  geen vloed — en liever dat dan een gemiste.
*/
const ALARM_KEY = "alarm:beschikbaarheid";
const ALARM_WINDOW_MS = 15 * 60_000;

/**
 * Logt een mislukte harde controle en slaat alarm, begrensd tot één per
 * kwartier. Het alarm loopt na het antwoord verder (`keepAlive`): de bezoeker
 * heeft op dit punt al tot acht seconden op time-outs zitten wachten.
 */
export function alarmAvailabilityFailure(context: string, result: AvailabilityResult): void {
  const reason = result.reason ?? "antwoord zonder beschikbaarheid";
  console.error(`[beschikbaarheid] ${context}: controle mislukt, boeking geweigerd — ${reason}`);

  if (!rateLimit(ALARM_KEY, 1, ALARM_WINDOW_MS).allowed) return;

  keepAlive(
    Promise.all([
      alertAvailabilityFailure(context, reason),
      notifyAvailabilityFailure(context, reason),
    ]).catch((error: unknown) => {
      console.error(`[beschikbaarheid] alarm niet verstuurd: ${String(error)}`);
    }),
  );
}

/**
 * Meldt een betaald saldo van een portaal-order terug aan Vernast.
 *
 * Dit is de tegenhanger van `api/saldo-order.ts`. Die maakt een betaalsessie
 * voor een order die nooit via een webshopsessie binnenkwam — een reservering,
 * of een order die iemand met de hand in het portaal zette. Zo'n order heeft
 * geen `(source, external_id)` van Stripe, dus de order-webhook kan hem niet
 * bijwerken. Vandaar een eigen zusterfunctie (`bouwdroger-saldo-paid`), die op
 * de order-ID van het portaal zelf werkt en idempotent is op
 * `stripe_session_id`: twee keer melden geeft daar één betaling.
 *
 * Bewust server-only: het secret mag nooit in de browserbundle belanden.
 */

import { withRetry } from "./retry.js";

export interface VernastSaldoPaidPayload {
  /** De `bouwdroger_orders.id` uit het portaal — de sleutel ginder. */
  order_id: string;
  /** De idempotentiesleutel aan de andere kant. */
  stripe_session_id: string;
  /** Wat Stripe geïncasseerd heeft, incl. btw, op de cent. */
  amount: number;
  /** `bancontact`, `apple_pay`, `card`, … of `null` als Stripe het niet zei. */
  payment_method: string | null;
  paid_at: string;
}

export interface SyncResult {
  ok: boolean;
  /** Reden waarom het niet lukte — voor de logs, nooit voor de betaler. */
  reason?: string;
}

/*
  Zelfde ritme als de order-push: dit draait in de Stripe-webhook, niemand zit
  naar een scherm te kijken. Liever twintig seconden geduld dan een betaling die
  pas bij de volgende poging van Stripe aankomt.
*/
const TIMEOUT_MS = 20_000;
const TRIES = 3;
const DELAYS_MS = [500, 2_000];

const FUNCTION_NAME = "bouwdroger-saldo-paid";

/**
 * Afgeleid uit de order-webhook door het laatste padsegment te vervangen.
 *
 * Bewust niet de `replace(/\/bouwdroger-order-webhook$/, …)` van de andere
 * zusterfuncties: matcht die niet — een URL met een querystring of een
 * hernoemde functie — dan blijft de URL ongewijzigd en zou deze melding stil
 * bij de order-webhook landen, die er niets mee kan.
 */
export function saldoPaidEndpoint(): string | null {
  const base = process.env.VERNAST_WEBHOOK_URL;
  if (!base) return null;
  try {
    const url = new URL(base);
    url.pathname = url.pathname.replace(/\/[^/]*\/?$/, `/${FUNCTION_NAME}`);
    url.search = "";
    return url.toString();
  } catch {
    return null;
  }
}

/** Verstuurt de melding en geeft altijd netjes terug of het lukte — gooit niet. */
export function pushSaldoPaidToVernast(payload: VernastSaldoPaidPayload): Promise<SyncResult> {
  const url = saldoPaidEndpoint();
  const secret = process.env.VERNAST_WEBHOOK_SECRET;

  if (!url || !secret) {
    return Promise.resolve({
      ok: false,
      reason: "VERNAST_WEBHOOK_URL of VERNAST_WEBHOOK_SECRET ontbreekt",
    });
  }

  // Idempotent op `stripe_session_id` aan de andere kant: herhalen na een
  // timeout is veilig, ook als de eerste poging alsnog aankwam.
  return withRetry(() => post(url, secret, payload), { tries: TRIES, delaysMs: DELAYS_MS });
}

async function post(
  url: string,
  secret: string,
  payload: VernastSaldoPaidPayload,
): Promise<SyncResult> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json", "x-webhook-secret": secret },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!response.ok) {
      const body = await response.text().catch(() => "");
      return { ok: false, reason: `HTTP ${response.status}: ${body.slice(0, 200)}` };
    }

    return { ok: true };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "onbekende fout";
    return { ok: false, reason: message };
  } finally {
    clearTimeout(timer);
  }
}

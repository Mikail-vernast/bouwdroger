/**
 * Duwt verlengaanvragen naar het bouwdrogers-portaal in Vernast.
 *
 * De verlengpagina stuurde tot nu alleen een tekstmail naar het team. Die mail
 * was meteen de enige opslag: kwam ze niet aan, dan bestond de aanvraag nergens
 * meer terwijl de klant "Uw aanvraag staat genoteerd" op zijn scherm zag. Nu
 * landt ze ook als rij in het portaal, op de tab Verlengingen.
 *
 * De webhook aan de andere kant (`bouwdroger-extension-webhook`) authenticeert
 * op hetzelfde gedeelde secret als de order-webhook en is idempotent op de
 * openstaande aanvraag per Stripe-sessie — twee keer versturen geeft daar één
 * rij.
 *
 * Bewust server-only: het secret mag nooit in de browserbundle belanden.
 */

import { withRetry } from "./retry.js";

export interface VernastExtensionPayload {
  /** Het Stripe-sessie-ID van de oorspronkelijke boeking — de sleutel ginder. */
  stripe_session_id: string;
  order_number?: string | null;
  customer_name?: string | null;
  customer_email?: string | null;
  customer_phone?: string | null;
  extra_days: number;
  current_end_date?: string | null;
  requested_end_date?: string | null;
  customer_note?: string | null;
}

export interface SyncResult {
  ok: boolean;
  /** Reden waarom het niet lukte — voor de logs, nooit voor de bezoeker. */
  reason?: string;
}

/*
  Korter dan bij een order: daar draait de push in de Stripe-webhook waar
  niemand zit te wachten, hier staat een klant naar een knop te kijken.
*/
const TIMEOUT_MS = 8_000;
const TRIES = 3;
const DELAYS_MS = [400, 1_200];

/**
 * De verlengfunctie zit naast de order-webhook, dus de URL is daaruit af te
 * leiden. Zo komt er geen tweede omgevingsvariabele bij die op drie omgevingen
 * uit elkaar kan lopen — zie ook `availability.ts` en `vernastContact.ts`.
 */
function endpoint(): string | null {
  const base = process.env.VERNAST_WEBHOOK_URL;
  if (!base) return null;
  return base.replace(/\/bouwdroger-order-webhook\/?$/, "/bouwdroger-extension-webhook");
}

/**
 * Verstuurt de aanvraag en geeft altijd netjes terug of het lukte — deze functie
 * gooit niet. De aanroeper beslist zelf wat hij de bezoeker toont.
 */
export function pushExtensionToVernast(payload: VernastExtensionPayload): Promise<SyncResult> {
  const url = endpoint();
  const secret = process.env.VERNAST_WEBHOOK_SECRET;

  if (!url || !secret) {
    return Promise.resolve({
      ok: false,
      reason: "VERNAST_WEBHOOK_URL of VERNAST_WEBHOOK_SECRET ontbreekt",
    });
  }

  return withRetry(() => post(url, secret, payload), { tries: TRIES, delaysMs: DELAYS_MS });
}

async function post(
  url: string,
  secret: string,
  payload: VernastExtensionPayload,
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

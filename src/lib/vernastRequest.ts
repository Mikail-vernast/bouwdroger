/**
 * Duwt een aanvraag van de site naar het bouwdrogers-portaal in Vernast.
 *
 * Beslissing van 15-10-2026: alles wat een bezoeker via een formulier op deze
 * site achterlaat — contact, klantenservice, levering en het vraagformulier op
 * de homepage — landt als aanvraag in het portaal-account van de bouwdrogers,
 * niet meer als lead bij admin (`contact-submission`) of als losse mail. Dan
 * staat elke vraag op één plek, naast de boekingen waar ze meestal over gaat.
 *
 * De webhook aan de andere kant (`bouwdroger-request-webhook`) authenticeert op
 * hetzelfde gedeelde secret als de order- en verlengwebhook.
 *
 * Bewust server-only: het secret mag nooit in de browserbundle belanden.
 */

import { withRetry } from "./retry.js";
import { RateLimitedError } from "./vernastContact.js";

export { RateLimitedError };

/** Van welk formulier de aanvraag komt. */
export type RequestSource = "contact" | "klantenservice" | "levering" | "vraag";

export const REQUEST_SOURCES: readonly RequestSource[] = [
  "contact",
  "klantenservice",
  "levering",
  "vraag",
];

export interface BouwdrogerRequestPayload {
  source: RequestSource;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string | null;
  subject?: string | null;
  message: string;
  street?: string | null;
  house_number?: string | null;
  postal_code?: string | null;
  city?: string | null;
  /** Alleen bij `vraag`: de `inbox/...`-paden uit `/api/vraag-uploads`. */
  attachments?: string[];
  page_url?: string | null;
}

export interface RequestResult {
  ok: boolean;
  /** Het ID van de aanvraag in het portaal, als het dat teruggaf. */
  id?: string | null;
  /** Reden waarom het niet lukte — voor de logs, nooit voor de bezoeker. */
  reason?: string;
}

/* Zelfde ritme als de verlengaanvraag: er staat een bezoeker naar een knop te kijken. */
const TIMEOUT_MS = 8_000;
const TRIES = 3;
const DELAYS_MS = [400, 1_200];

/**
 * Afgeleid uit de order-webhook, net als `vernastExtension.ts` en
 * `vernastContact.ts` — geen tweede omgevingsvariabele die op drie omgevingen
 * uit elkaar kan lopen.
 */
function endpoint(): string | null {
  const base = process.env.VERNAST_WEBHOOK_URL;
  if (!base) return null;
  return base.replace(/\/bouwdroger-order-webhook\/?$/, "/bouwdroger-request-webhook");
}

interface Attempt {
  ok: boolean;
  reason?: string;
  status: number;
  id: string | null;
}

/**
 * Verstuurt de aanvraag. Gooit alleen een `RateLimitedError` (429 van het
 * portaal); elke andere mislukking komt terug als `{ ok: false }`, zodat de
 * aanroeper zelf het vangnet kan spannen.
 */
export async function sendBouwdrogerRequest(
  payload: BouwdrogerRequestPayload,
): Promise<RequestResult> {
  const url = endpoint();
  const secret = process.env.VERNAST_WEBHOOK_SECRET;
  if (!url || !secret) {
    return { ok: false, reason: "VERNAST_WEBHOOK_URL of VERNAST_WEBHOOK_SECRET ontbreekt" };
  }

  /*
    Alleen herhalen bij een hapering aan de andere kant (5xx, timeout). Een 4xx
    is definitief: herhalen op een 429 verbrandt alleen het budget van de
    volgende bezoeker, en een 400 wordt bij de tweede poging niet beter.
  */
  const result = await withRetry<Attempt>(
    async () => {
      const attempt = await post(url, secret, payload);
      return attempt.status >= 400 && attempt.status < 500
        ? { ...attempt, ok: true }
        : attempt;
    },
    { tries: TRIES, delaysMs: DELAYS_MS },
  );

  if (result.status === 429) throw new RateLimitedError(result.reason ?? "rate limited");
  if (!result.ok || result.status >= 400 || result.status === 0) {
    return { ok: false, reason: result.reason ?? "onbekende fout" };
  }
  return { ok: true, id: result.id };
}

async function post(
  url: string,
  secret: string,
  payload: BouwdrogerRequestPayload,
): Promise<Attempt> {
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
      return {
        ok: false,
        status: response.status,
        id: null,
        reason: `HTTP ${response.status}: ${body.slice(0, 200)}`,
      };
    }

    const data = (await response.json().catch(() => ({}))) as { id?: unknown };
    const id = typeof data.id === "string" || typeof data.id === "number" ? String(data.id) : null;
    return { ok: true, status: response.status, id };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "onbekende fout";
    return { ok: false, status: 0, id: null, reason: message };
  } finally {
    clearTimeout(timer);
  }
}

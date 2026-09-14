/**
 * Achtergrondwerk laten doorlopen nadat het antwoord al vertrokken is.
 *
 * WAAROM DIT BESTAAT
 * `sentCopy.ts` legt een kopie van elke verzonden mail in Verzonden. Dat duurt
 * ruim een minuut — Brevo heeft ~20 seconden nodig voor de gerenderde HTML in
 * het logboek staat — en niemand mag daarop wachten: niet de bezoeker die net
 * geboekt heeft, en al helemaal niet Stripe, dat een webhook na 10 seconden als
 * mislukt beschouwt en opnieuw stuurt.
 *
 * Beide platforms bieden dat, maar op een andere manier:
 *   Vercel     `waitUntil(task)` uit `@vercel/functions`, een globale import
 *   Cloudflare `ctx.waitUntil(task)`, alleen bereikbaar vanuit de fetch-handler
 *
 * Die tweede vorm kún je niet importeren — `ctx` bestaat per request. Vandaar
 * deze registratie: `worker/index.ts` zet bij elk verzoek de Cloudflare-variant,
 * en op Vercel blijft het bij de import.
 *
 * WAT ER GEBEURT ALS DIT NIET GOED STAAT
 * Op Cloudflare wordt een promise die aan niets hangt afgebroken zodra het
 * antwoord verstuurd is. Niets gooit, niets logt: de mailkopie belandt gewoon
 * nooit in Verzonden, en dat merk je pas als iemand ernaar zoekt.
 */

import { waitUntil as vercelWaitUntil } from '@vercel/functions';

type WaitUntil = (task: Promise<unknown>) => void;

let platformWaitUntil: WaitUntil | null = null;

/** Aangeroepen door `worker/index.ts` bij elk verzoek. Op Vercel nooit. */
export function setPlatformWaitUntil(fn: WaitUntil): void {
  platformWaitUntil = fn;
}

/**
 * Houdt de runtime in leven tot `task` klaar is.
 *
 * Buiten een deploy — een test, een script — bestaat er geen request om aan te
 * hangen en blijft het een losse promise. Ook dan mag niets erop wachten.
 */
export function keepAlive(task: Promise<unknown>): void {
  if (platformWaitUntil) {
    platformWaitUntil(task);
    return;
  }
  try {
    vercelWaitUntil(task);
  } catch {
    /* Geen Vercel-request actief. */
  }
}

/**
 * Transactionele mail via Brevo, met dezelfde sjablonen-aanpak als Vernast
 * v2.0: de opmaak staat in Brevo, hier gaan enkel de parameters over de lijn.
 * Zo kan de tekst van een mail wijzigen zonder deploy.
 *
 * Server-only. De API-sleutel van Brevo mag de browserbundle nooit halen — wie
 * hem heeft, kan in naam van dit domein mailen.
 *
 * Twee dingen zijn hier bewust anders dan een naïeve `fetch` naar Brevo:
 *
 * 1. Een onbestaande sjabloon-ID wordt vooraf afgevangen. Brevo antwoordt op
 *    `POST /v3/smtp/email` met 201 en een `messageId` ook wanneer de
 *    `templateId` niet bestaat — hetzelfde gedrag dat aan de Vernast-kant
 *    maanden voor "verzonden" doorging terwijl de klant niets kreeg. Eén
 *    `GET /v3/smtp/templates/:id` per sjabloon per instance haalt dat eruit.
 * 2. Niets gooit. Een mail die niet vertrekt mag nooit een betaling, een order
 *    of een formulier doen mislukken; het blijft bij een luide logregel.
 */

import { withRetry, type Attempted } from "./retry.js";

const API = "https://api.brevo.com/v3";

/** Ruim genoeg voor een trage API, kort genoeg om geen webhook te laten hangen. */
const TIMEOUT_MS = 10000;

const TRIES = 3;
const DELAYS_MS = [500, 2000];

export interface BrevoRecipient {
  email: string;
  name?: string | null;
}

export interface BrevoMail {
  /** ID van het sjabloon in Brevo. */
  templateId: number;
  to: BrevoRecipient;
  /** Wat in het sjabloon als `{{ params.x }}` beschikbaar is. */
  params?: Record<string, unknown>;
  /** Waar een antwoord van de klant heen gaat; standaard de afzender. */
  replyTo?: BrevoRecipient;
  /** Labels in de Brevo-logs, handig om per soort mail te filteren. */
  tags?: string[];
}

interface Sender {
  email: string;
  name: string;
}

/**
 * De afzender moet in Brevo geverifieerd zijn (SPF/DKIM op het domein), anders
 * weigert Brevo de verzending of belandt alles in spam. Vandaar uit env en niet
 * uit `src/lib/site.ts`: dat bestand leest `import.meta.env` en hoort bij de
 * browserbundle, niet bij een serverless functie.
 */
function sender(): Sender | null {
  const email = process.env.BREVO_SENDER_EMAIL?.trim();
  if (!email) return null;
  return { email, name: process.env.BREVO_SENDER_NAME?.trim() || "Vernast Bouwdrogers" };
}

/**
 * Sjablonen die al gecontroleerd zijn, per proces. Een warme functie-instance
 * mailt zo met één call in plaats van twee; een koude betaalt de controle één
 * keer. `false` betekent: bestaat niet of is niet leesbaar — niet opnieuw
 * proberen binnen dit proces, want dat verandert toch niet vanzelf.
 */
const checked = new Map<number, boolean>();

/** Enkel voor de tests: de cache tussen twee gevallen leegmaken. */
export function resetTemplateCache(): void {
  checked.clear();
}

async function templateExists(apiKey: string, templateId: number): Promise<boolean> {
  const cachedResult = checked.get(templateId);
  if (cachedResult !== undefined) return cachedResult;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(`${API}/smtp/templates/${templateId}`, {
      headers: { accept: "application/json", "api-key": apiKey },
      signal: controller.signal,
    });

    /*
      Alleen een expliciete 404 is een uitsluitsel. Bij een storing of een
      time-out weten we niets, en dan is doorgaan met verzenden beter dan een
      mail tegenhouden om een sjabloon dat waarschijnlijk gewoon bestaat. Zo'n
      onzeker antwoord komt ook niet in de cache.
    */
    if (response.status === 404) {
      checked.set(templateId, false);
      return false;
    }

    if (response.ok) checked.set(templateId, true);
    return true;
  } catch {
    return true;
  } finally {
    clearTimeout(timer);
  }
}

async function post(apiKey: string, from: Sender, mail: BrevoMail): Promise<Attempted> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(`${API}/smtp/email`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: from,
        to: [{ email: mail.to.email, ...(mail.to.name ? { name: mail.to.name } : {}) }],
        templateId: mail.templateId,
        ...(mail.params ? { params: mail.params } : {}),
        ...(mail.replyTo ? { replyTo: mail.replyTo } : {}),
        ...(mail.tags?.length ? { tags: mail.tags } : {}),
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      const body = await response.text().catch(() => "");
      return { ok: false, reason: `HTTP ${response.status}: ${body.slice(0, 200)}` };
    }

    return { ok: true };
  } catch (error: unknown) {
    return { ok: false, reason: error instanceof Error ? error.message : "onbekende fout" };
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Verstuurt één sjabloonmail. Gooit niet: het resultaat zegt of het lukte.
 *
 * Ontbreekt de configuratie, dan is dat geen fout maar een omgeving waar mail
 * nog niet aan staat — een preview-deploy bijvoorbeeld. De aanroeper hoeft daar
 * niets mee te doen; `logMailResult` maakt er de juiste logregel van.
 */
export async function sendTemplate(mail: BrevoMail): Promise<Attempted> {
  const apiKey = process.env.BREVO_API_KEY?.trim();
  if (!apiKey) return { ok: false, reason: "BREVO_API_KEY ontbreekt" };

  const from = sender();
  if (!from) return { ok: false, reason: "BREVO_SENDER_EMAIL ontbreekt" };

  if (!Number.isInteger(mail.templateId) || mail.templateId <= 0) {
    return { ok: false, reason: `ongeldige templateId: ${mail.templateId}` };
  }

  if (!(await templateExists(apiKey, mail.templateId))) {
    return { ok: false, reason: `sjabloon ${mail.templateId} bestaat niet bij Brevo` };
  }

  return withRetry(() => post(apiKey, from, mail), { tries: TRIES, delaysMs: DELAYS_MS });
}

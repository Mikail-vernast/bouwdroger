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
import { scheduleSentCopy } from "./sentCopy.js";

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
 * Wat Brevo teruggaf toen het lukte. De `messageId` is de enige greep die we op
 * een verstuurde mail hebben: `sentCopy.ts` haalt er de opgemaakte inhoud mee op
 * en zet die als `Message-ID` in de kopie in Verzonden.
 */
interface Sent extends Attempted {
  messageId?: string;
}

/** De `messageId` uit een antwoord van Brevo, als hij er staat. */
function messageIdOf(body: unknown): string | undefined {
  const id = (body as { messageId?: unknown } | null)?.messageId;
  return typeof id === "string" && id ? id : undefined;
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

async function post(apiKey: string, from: Sender, mail: BrevoMail): Promise<Sent> {
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

    return { ok: true, messageId: messageIdOf(await response.json().catch(() => null)) };
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

  const result = await withRetry(() => post(apiKey, from, mail), {
    tries: TRIES,
    delaysMs: DELAYS_MS,
  });

  /*
    Geen `subject` en geen `text`: de opmaak zit in het sjabloon bij Brevo, dus
    `sentCopy.ts` haalt de gerenderde mail daar op. Zie de uitleg daar over
    waarom dat pas een halve minuut later kan.
  */
  if (result.ok && result.messageId) {
    scheduleSentCopy({
      messageId: result.messageId,
      from,
      to: mail.to,
      replyTo: mail.replyTo,
      templateId: mail.templateId,
    });
  }

  return result;
}

/**
 * Een kale tekstmail, zonder sjabloon.
 *
 * Alleen voor interne meldingen. Die hebben geen opmaak nodig, maar wel de
 * zekerheid dat ze aankomen: een aanvraag die verdwijnt omdat er nog geen
 * sjabloon in Brevo staat, is erger dan een lelijke mail. Wat naar de klant
 * gaat blijft een sjabloon, want daar telt de opmaak wél.
 */
export async function sendPlain(options: {
  to: BrevoRecipient;
  subject: string;
  text: string;
  replyTo?: BrevoRecipient;
  tags?: string[];
}): Promise<Attempted> {
  const apiKey = process.env.BREVO_API_KEY?.trim();
  if (!apiKey) return { ok: false, reason: "BREVO_API_KEY ontbreekt" };

  const from = sender();
  if (!from) return { ok: false, reason: "BREVO_SENDER_EMAIL ontbreekt" };

  const send = async (): Promise<Sent> => {
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
          to: [{ email: options.to.email, ...(options.to.name ? { name: options.to.name } : {}) }],
          subject: options.subject,
          textContent: options.text,
          ...(options.replyTo ? { replyTo: options.replyTo } : {}),
          ...(options.tags?.length ? { tags: options.tags } : {}),
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        const body = await response.text().catch(() => "");
        return { ok: false, reason: `HTTP ${response.status}: ${body.slice(0, 200)}` };
      }
      return { ok: true, messageId: messageIdOf(await response.json().catch(() => null)) };
    } catch (error: unknown) {
      return { ok: false, reason: error instanceof Error ? error.message : "onbekende fout" };
    } finally {
      clearTimeout(timer);
    }
  };

  const result = await withRetry(send, { tries: TRIES, delaysMs: DELAYS_MS });

  /*
    Onderwerp en inhoud kennen we hier zelf, dus deze kopie hoeft niet op Brevo
    te wachten en gaat meteen de mailbox in.
  */
  if (result.ok && result.messageId) {
    scheduleSentCopy({
      messageId: result.messageId,
      from,
      to: options.to,
      replyTo: options.replyTo,
      subject: options.subject,
      text: options.text,
    });
  }

  return result;
}

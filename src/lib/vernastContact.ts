/**
 * Stuurt een vraag van het homepage-formulier naar de Vernast-inbox.
 *
 * Het formulier op de homepage deed jarenlang niets: het toonde een bevestiging
 * en gooide de vraag weg. Nu loopt het door dezelfde pijp als het formulier op
 * vernast-vochtbestrijding.be — de edge function `contact-submission` zet er een
 * `contact_submissions`-rij, een support-ticket (admin → Klantenservice) en, bij
 * een verkoopvraag, een lead in de Lead Planner van.
 *
 * Bewust server-only: `contact-attachment-url` wil het gedeelde webhook-secret
 * zien, en dat mag nooit in de browserbundle belanden.
 */

import { withRetry } from "./retry.js";

/** Onderwerpsleutels zoals `contact-submission` ze kent. */
export type ContactSubject =
  | "droging_op_maat"
  | "waterschade"
  | "schimmel_geur"
  | "offerte_prijs"
  | "verzekeringsrapport"
  | "andere_vraag";

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string | null;
  message: string;
  subject: ContactSubject;
  address?: string | null;
  postal_code?: string | null;
  city?: string | null;
  page_url?: string | null;
  /** Storage-paden uit `contact-attachment-url`, al geüpload door de browser. */
  attachments?: string[];
}

export interface UploadTicket {
  path: string;
  name: string;
  token: string;
  signed_url: string;
}

const TIMEOUT_MS = 8_000;
const TRIES = 3;
const DELAYS_MS = [400, 1_200];

/**
 * De basis-URL van de Vernast edge functions, afgeleid uit de webhook die deze
 * site al gebruikt — dan is er geen tweede env-variabele nodig die op productie
 * vergeten kan worden. Zie ook `availability.ts`, dat hetzelfde doet.
 */
function functionsBase(): string | null {
  const url = process.env.VERNAST_WEBHOOK_URL;
  if (!url) return null;
  return url.replace(/\/bouwdroger-order-webhook\/?$/, "");
}

async function postJson(url: string, secret: string | null, body: unknown): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(secret ? { "x-webhook-secret": secret } : {}),
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Vraagt upload-URL's aan voor de bijlagen. De browser uploadt daar zelf naartoe
 * — het bestand gaat dus nooit door deze functie heen, want een grote body wordt
 * door Vercel geweigerd nog vóór de handler start.
 */
export async function requestUploadTickets(
  files: { name: string; type: string }[],
): Promise<UploadTicket[]> {
  const base = functionsBase();
  const secret = process.env.VERNAST_WEBHOOK_SECRET;
  if (!base || !secret) throw new Error("VERNAST_WEBHOOK_URL of VERNAST_WEBHOOK_SECRET ontbreekt");

  const response = await postJson(`${base}/contact-attachment-url`, secret, { files });
  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`upload-url HTTP ${response.status}: ${detail.slice(0, 200)}`);
  }

  const data = (await response.json()) as { uploads?: UploadTicket[] };
  return data.uploads ?? [];
}

/**
 * Verstuurt de vraag zelf. Gooit bij een fout: anders dan bij een order — waar de
 * bezoeker al betaald heeft en succes moet zien — is dit de enige opslag, dus
 * een mislukking moet de bezoeker te zien krijgen in plaats van stil te
 * verdwijnen zoals vroeger.
 */
export async function sendContactRequest(payload: ContactPayload): Promise<void> {
  const base = functionsBase();
  if (!base) throw new Error("VERNAST_WEBHOOK_URL ontbreekt");

  const result = await withRetry(
    async () => {
      const response = await postJson(`${base}/contact-submission`, null, {
        ...payload,
        site: "bouwdroger",
      });
      if (!response.ok) {
        const detail = await response.text().catch(() => "");
        return { ok: false as const, reason: `HTTP ${response.status}: ${detail.slice(0, 200)}` };
      }
      return { ok: true as const };
    },
    { tries: TRIES, delaysMs: DELAYS_MS },
  );

  if (!result.ok) throw new Error(result.reason ?? "onbekende fout");
}

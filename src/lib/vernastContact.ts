/**
 * Upload-URL's voor de bijlagen van het vraagformulier op de homepage.
 *
 * Tot 15-10-2026 stuurde dit bestand ook de vraag zelf naar `contact-submission`
 * (een lead bij admin). Sindsdien landt elke aanvraag in het bouwdrogers-portaal
 * via `vernastRequest.ts`; de bijlagen gaan nog altijd naar dezelfde bucket, via
 * `contact-attachment-url`, en hun `inbox/...`-paden reizen mee met de aanvraag.
 *
 * Bewust server-only: `contact-attachment-url` wil het gedeelde webhook-secret
 * zien, en dat mag nooit in de browserbundle belanden.
 */

export interface UploadTicket {
  path: string;
  name: string;
  token: string;
  signed_url: string;
}

const TIMEOUT_MS = 8_000;

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

/** De aanvraag is door het portaal geweigerd omdat er al te veel kwamen — niet stukgelopen. */
export class RateLimitedError extends Error {}

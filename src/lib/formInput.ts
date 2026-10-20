/**
 * Invoer van de publieke formulieren (`/api/aanvraag`, `/api/vraag`) lezen en
 * schoonmaken, op één plek.
 */

/** Ruim boven het grootste formulier (een bericht van 4.000 tekens). */
export const MAX_FORM_BYTES = 64 * 1024;

/**
 * Dezelfde regel als `bouwdroger-request-webhook` in Vernast. Was de site
 * soepeler, dan kwam een adres als `a<b>@x.be` hier door, weigerde het portaal
 * het, en belandde de aanvraag via de fallbackmail toch bij het team — met een
 * adres waar niemand op kan antwoorden.
 */
const EMAIL_RE = /^[A-Za-z0-9._+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_RE.test(email);
}

/**
 * De body als JSON, of null als hij te groot of geen geldige JSON is.
 * `request.json()` leest alles in het geheugen voor het de grootte kent.
 */
export async function readJsonBody<T>(request: Request): Promise<T | null> {
  const declared = Number(request.headers.get("content-length") ?? 0);
  if (declared > MAX_FORM_BYTES) return null;
  let text: string;
  try {
    text = await request.text();
  } catch {
    return null;
  }
  if (new TextEncoder().encode(text).length > MAX_FORM_BYTES) return null;
  try {
    const parsed: unknown = JSON.parse(text);
    return parsed && typeof parsed === "object" ? (parsed as T) : null;
  } catch {
    return null;
  }
}

/* eslint-disable no-control-regex */
const CONTROL_SINGLE_LINE = /[\u0000-\u001f\u007f]/g;
const CONTROL_MULTI_LINE = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g;
/* eslint-enable no-control-regex */

/**
 * Een tekstveld, ingekort en zonder controletekens. Enkelregelige velden
 * (naam, onderwerp) verliezen ook hun regeleinden: die belanden in het
 * onderwerp van de fallbackmail. Een bericht houdt zijn regels.
 */
export function cleanText(value: unknown, max: number, multiline = false): string {
  if (value === null || value === undefined) return "";
  const pattern = multiline ? CONTROL_MULTI_LINE : CONTROL_SINGLE_LINE;
  return String(value).replace(pattern, multiline ? "" : " ").trim().slice(0, max);
}

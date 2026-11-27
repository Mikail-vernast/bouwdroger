/**
 * Trechtermeting voor de huurflow, gedeeld door de browser en `api/funnel.ts`.
 *
 * In Vernast › Marketing › Conversies stond "Bouwdroger huren — calculator" op
 * "niet gemeten": de flow leverde een betaalde bestelling van € 1.108 op, maar
 * hoeveel mensen de calculator openden en waar ze afhaakten was onbekend. De
 * Vernast-funnels sturen daarvoor events naar de RPC `track_conversion_funnel`;
 * deze site doet nu hetzelfde, via `api/funnel.ts` en de poort
 * `bouwdroger-availability` (`action: "funnel"`), met het secret dat er al is.
 *
 * Eén sessie loopt over drie pagina's: calculator → pakket → boeking. Elke pagina
 * stuurt een `view` (de database telt die één keer per sessie), zodat wie
 * rechtstreeks op /verhuur/boeking landt ook als bezoeker telt en de ratio nooit
 * boven 100% uitkomt.
 */

/** `marketing_conversions.id` van "Bouwdroger huren — calculator" in Vernast. */
export const CALCULATOR_CONVERSION_ID = "a8354178-b784-43e9-b275-b594b3c1e085";

export type FunnelEventType = "view" | "step" | "submit";

/**
 * Stapnummers over de hele flow. 0–4 zijn de vragen van de calculator (zie
 * `sequence()` in VerhuurCalculatorPage), daarna de pagina's die volgen. Een
 * vast nummer per stap, ook als de calculator er een overslaat: zo vergelijkt de
 * trechter dezelfde stap over alle bezoekers.
 */
export const FUNNEL_STEP_PAKKET = 10;

/** Boekingsstap 1–5 (dekking … betaling) → 11–15. De bevestiging is de submit. */
export const BOEKING_STEP_KEYS = ["Dekking", "Extra's", "Datum", "Gegevens", "Betaling"] as const;
export function boekingStep(step: number): { index: number; key: string } | null {
  const key = BOEKING_STEP_KEYS[step - 1];
  return key ? { index: 10 + step, key } : null;
}

export interface FunnelEvent {
  session_id: string;
  event_type: FunnelEventType;
  step_index?: number;
  step_key?: string | null;
  landing_page?: string | null;
  referrer?: string | null;
  device_type?: string | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
}

const SESSION_ID = /^[A-Za-z0-9-]{8,64}$/;

function text(value: unknown, max: number): string | null {
  return typeof value === "string" && value.trim() !== "" ? value.slice(0, max) : null;
}

/**
 * Een adres zonder wat er niet in een meting hoort: alleen origin + pad, plus
 * de utm-parameters als `keepUtm`. Stripe zet na het betalen een `session_id`
 * in de adresbalk van de boekingspagina; die mag niet naar Vernast. Geen
 * geldige URL → null.
 */
export function cleanUrl(value: unknown, keepUtm: boolean): string | null {
  if (typeof value !== "string" || !value) return null;
  let u: URL;
  try {
    u = new URL(value);
  } catch {
    return null;
  }
  if (u.protocol !== "https:" && u.protocol !== "http:") return null;
  const out = new URL(u.origin + u.pathname);
  if (keepUtm) {
    for (const k of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
      const v = u.searchParams.get(k);
      if (v) out.searchParams.set(k, v);
    }
  }
  return out.toString().slice(0, 500);
}

/**
 * De argumenten voor `track_conversion_funnel`, of null als de aanvraag niet
 * klopt. Externe input: alles wordt hier genarrowd en ingekort, de RPC kort
 * daarna nog eens zelf in.
 */
export function funnelArgs(body: unknown): Record<string, unknown> | null {
  if (typeof body !== "object" || body === null || Array.isArray(body)) return null;
  const b = body as Record<string, unknown>;

  const session = typeof b.session_id === "string" ? b.session_id : "";
  if (!SESSION_ID.test(session)) return null;

  const type = b.event_type;
  if (type !== "view" && type !== "step" && type !== "submit") return null;

  let step = -1;
  if (type === "step") {
    if (typeof b.step_index !== "number" || !Number.isInteger(b.step_index)) return null;
    if (b.step_index < 0 || b.step_index > 50) return null;
    step = b.step_index;
  }

  const device = b.device_type === "mobile" || b.device_type === "desktop" ? b.device_type : null;

  return {
    p_session_id: session,
    p_event_type: type,
    p_conversion_id: CALCULATOR_CONVERSION_ID,
    p_step_index: step,
    p_step_key: text(b.step_key, 80),
    p_utm_source: text(b.utm_source, 120),
    p_utm_medium: text(b.utm_medium, 120),
    p_utm_campaign: text(b.utm_campaign, 200),
    p_landing_page: cleanUrl(b.landing_page, true),
    p_referrer: cleanUrl(b.referrer, false),
    p_device_type: device,
  };
}

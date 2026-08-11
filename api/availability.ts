/**
 * Welke leverdatums zitten vol voor een bepaalde samenstelling toestellen?
 *
 * De boekingswizard vraagt dit bij het openen van de datumstap, zodat volle
 * dagen meteen uitgeschakeld staan in plaats van pas bij het afrekenen een
 * foutmelding te geven. De toestelpagina en de afhaalpagina vragen hetzelfde
 * voor een losse selectie: `{ lines: "revolution:1", days: 7 }`.
 *
 * Bestaat alleen om het gedeelde secret server-side te houden: de site praat
 * met Vernast, de browser praat met de site. Geeft daarom ook niet meer terug
 * dan de pagina nodig heeft — capaciteit en bezettingspieken zijn bedrijfsdata
 * en horen niet in een publiek antwoord.
 *
 * De harde controle staat in `api/checkout.ts` en `api/afhaal-checkout.ts`.
 * Deze route is comfort; wie hem omzeilt komt daar alsnog tegen een 409 aan.
 */
import { blockedStartDates } from "../src/lib/availability.js";
import { clientIp, gate, tooManyRequests } from "../src/lib/rateLimit.js";
import { allItems, isoDate, parseConfig, toDeviceLines } from "../src/lib/verhuur.js";
import { bookingSummary, normalizeOptions } from "../src/lib/booking.js";
import { normalizeDays, parseSelection, pickupDeviceLines } from "../src/lib/afhalen.js";

/** Zo ver vooruit toont de wizard datums. */
const HORIZON_DAYS = 60;

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

function strings(value: unknown): Record<string, string> {
  const out: Record<string, string> = {};
  if (typeof value !== "object" || value === null || Array.isArray(value)) return out;
  for (const [key, raw] of Object.entries(value as Record<string, unknown>)) {
    if (typeof raw === "string") out[key] = raw;
    else if (typeof raw === "number" && Number.isFinite(raw)) out[key] = String(raw);
  }
  return out;
}

interface Body {
  config?: unknown;
  options?: unknown;
  /** Afhaalselectie: `"revolution:1,ttv4500:2"`, zoals in de URL. */
  lines?: unknown;
  days?: unknown;
}

export async function POST(request: Request): Promise<Response> {
  const limit = gate(clientIp(request), 120);

  const attempt = limit.attempt();
  if (!attempt.allowed) return tooManyRequests(attempt.retryAfter);

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return json({ error: "Ongeldige aanvraag." }, 400);
  }

  /*
    Twee soorten vragen langs één route. Een afhaalselectie draagt `lines` en
    vraagt per toestel; een pakket draagt `config` en vraagt per rol. Het
    antwoord heeft dezelfde vorm, dus de pagina's delen dezelfde logica.
  */
  const pickup = typeof body.lines === "string" && body.lines.trim() !== "";

  let items;
  let days;
  if (pickup) {
    items = pickupDeviceLines(parseSelection(body.lines as string));
    days = normalizeDays(body.days);
  } else {
    const config = parseConfig(new URLSearchParams(strings(body.config)));
    const summary = bookingSummary(config, normalizeOptions(body.options));
    items = toDeviceLines(summary.items.length ? summary.items : allItems(config));
    days = summary.days;
  }

  if (!items.length) {
    return json({ error: pickup ? "Geen toestellen gekozen." : "Geen toestellen in dit pakket." }, 400);
  }

  const today = new Date();
  const from = isoDate(today);
  const to = isoDate(new Date(today.getTime() + HORIZON_DAYS * 86_400_000));

  const result = await blockedStartDates(from, to, days, items);

  /*
    Lukt de oproep niet, dan geeft deze route dat eerlijk terug in plaats van een
    lege lijst. Een lege lijst leest als "alles is vrij", en dat is precies de
    stille fout die deze hele wijziging moest wegnemen — de wizard hoort dan de
    stap te blokkeren, niet door te laten.
  */
  if (!result.ok || !result.answer) {
    console.error(`[beschikbaarheid] wizard: ${result.reason ?? "leeg antwoord"}`);
    return json({ error: "Beschikbaarheid kon niet opgehaald worden.", code: "onbereikbaar" }, 503);
  }

  return json({
    blocked_start_dates: result.answer.blocked_start_dates,
    days,
    horizon_days: HORIZON_DAYS,
  });
}

/**
 * Elke boeking die de site weigert, laat een spoor na.
 *
 * Aanleiding (16-11-2026): klanten zeiden dat ze niet konden boeken, en nergens
 * stond waar ze vastliepen. Stripe ziet enkel wie voorbij `/api/checkout` raakt;
 * een volle datum (409), een validatiefout (400), een drempel (429), een
 * onbereikbare controle (503) of een datumstap die dicht bleef, bleven
 * onzichtbaar. Twee maanden Stripe-sessies toonden één echte boeking — of de
 * rest nooit probeerde of overal strandde, viel niet te zeggen.
 *
 * Wat hier vertrekt, landt in `app_private.bouwdroger_booking_events` in het
 * portaal. Bewust zonder persoonsgegevens: geen naam, e-mail, telefoon of adres.
 * Enkel wát er gevraagd werd en waarom het niet doorging.
 *
 * Een boeking die we verloren (datum vol, geen enkele vrije dag) gaat ook naar
 * Slack, begrensd tot één melding per soort per kwartier.
 */
import { sendBookingEvent } from "./availability.js";
import { keepAlive } from "./platformWaitUntil.js";
import { rateLimit } from "./rateLimit.js";
import { logSlackFailure, postToSlack } from "./slack.js";
import type { DeviceLine } from "./verhuur.js";

export type BookingRoute = "checkout" | "afhaal-checkout" | "wizard" | "afhaal-wizard";

/** Vaste lijst, zodat de browser via `/api/booking-event` geen vrije tekst kan wegschrijven. */
export const BOOKING_EVENT_CODES = [
  // server: de checkout weigert
  "ongeldige_aanvraag",
  "gegevens_onvolledig",
  "geen_email",
  "btw_ontbreekt",
  "geen_datum",
  "te_veel_aanvragen",
  "te_veel_holds",
  "controle_onbereikbaar",
  "datum_vol",
  "stripe_fout",
  "stripe_niet_geconfigureerd",
  // browser: de datumstap
  "wizard_datum_verschoven",
  "wizard_geen_vrije_datum",
  "wizard_beschikbaarheid_onbereikbaar",
] as const;

export type BookingEventCode = (typeof BOOKING_EVENT_CODES)[number];

export function isBookingEventCode(value: unknown): value is BookingEventCode {
  return typeof value === "string" && (BOOKING_EVENT_CODES as readonly string[]).includes(value);
}

export interface BookingEvent {
  route: BookingRoute;
  code: BookingEventCode;
  status?: number;
  /** Pakkettitel of samenvatting van de afhaalselectie; geen klantgegevens. */
  pkg?: string;
  start?: string | null;
  days?: number;
  items?: DeviceLine[];
  /** Aantal geblokkeerde startdatums binnen de horizon, voor de wizardcodes. */
  blocked?: number;
  /** Korte technische reden. Nooit iets wat de klant typte. */
  detail?: string;
  /**
   * Meestal het IP. Wordt niet bewaard; dient enkel om dezelfde weigering van
   * dezelfde bezoeker maar één keer per minuut te loggen. Zonder dat schrijft
   * een bot die op de drempel blijft kloppen de tabel vol.
   */
  dedupeKey?: string;
}

/** Per bezoeker en code één rij per minuut, en per instantie hoogstens 120 per minuut. */
const DEDUPE_WINDOW_MS = 60_000;
const MAX_EVENTS_PER_MINUTE = 120;

/**
 * Deze codes kostten een boeking die wij hadden kunnen hebben: de klant wou,
 * maar er was geen plaats. Die horen meteen bij het team.
 * `controle_onbereikbaar` staat er niet bij: daar slaat
 * `alarmAvailabilityFailure` al alarm voor.
 */
const LOST: ReadonlySet<BookingEventCode> = new Set<BookingEventCode>([
  "datum_vol",
  "wizard_geen_vrije_datum",
  "stripe_fout",
]);

const ALARM_WINDOW_MS = 15 * 60_000;

const LABELS: Record<BookingEventCode, string> = {
  ongeldige_aanvraag: "ongeldige aanvraag",
  gegevens_onvolledig: "gegevens onvolledig",
  geen_email: "geen geldig e-mailadres",
  btw_ontbreekt: "bedrijfsnaam of btw-nummer ontbreekt",
  geen_datum: "geen geldige leverdatum",
  te_veel_aanvragen: "te veel aanvragen (drempel)",
  te_veel_holds: "te veel open reservaties (drempel)",
  controle_onbereikbaar: "beschikbaarheid niet te controleren",
  datum_vol: "toestellen op die datum al ingepland",
  stripe_fout: "Stripe weigerde de betaalsessie",
  stripe_niet_geconfigureerd: "Stripe niet geconfigureerd",
  wizard_datum_verschoven: "gekozen dag vol, levering verschoven",
  wizard_geen_vrije_datum: "geen enkele vrije dag binnen 60 dagen",
  wizard_beschikbaarheid_onbereikbaar: "datums konden niet geladen worden",
};

/**
 * Haalt e-mailadressen en telefoonnummers uit vrije tekst. Een Stripe-fout kan
 * de opgegeven e-mail citeren ("Invalid email address: …"), en die hoort niet in
 * een tabel die bewust zonder persoonsgegevens is.
 */
export function redact(value: string): string {
  return value
    .replace(/[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']+/g, "[e-mail]")
    // Een ISO-datum (2026-11-17) is ook een reeks cijfers met streepjes; die blijft staan.
    .replace(/(?<![\d-])(?!\d{4}-\d{2}-\d{2}(?![\d-]))\+?\d[\d\s./-]{7,}\d/g, "[nummer]");
}

function clip(value: string | undefined | null, max: number): string | undefined {
  const text = redact(value ?? "").trim();
  return text ? text.slice(0, max) : undefined;
}

function itemsText(items: DeviceLine[] | undefined): string {
  if (!items?.length) return "-";
  return items.map((it) => `${it.qty}× ${it.device_key ?? it.product_key ?? "?"}`).join(", ");
}

/** Slack-mrkdwn: `<`, `>` en `&` zijn opmaak. */
function esc(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function bookingLostMessage(event: BookingEvent): Record<string, unknown> {
  const summary = `🚫 Boeking niet gelukt - ${LABELS[event.code]}`;
  const facts = [
    `*Pakket:* ${esc(event.pkg ?? "-")}`,
    `*Startdatum:* ${event.start ?? "-"}${event.days ? ` · ${event.days} dagen` : ""}`,
    `*Toestellen:* ${esc(itemsText(event.items))}`,
    ...(typeof event.blocked === "number" ? [`*Geblokkeerde startdagen:* ${event.blocked}`] : []),
  ];
  return {
    text: summary,
    blocks: [
      { type: "header", text: { type: "plain_text", text: summary.slice(0, 150), emoji: true } },
      { type: "section", text: { type: "mrkdwn", text: facts.join("\n") } },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: `${event.route} · ${event.code}${event.status ? ` · HTTP ${event.status}` : ""} - volgende melding van deze soort ten vroegste over een kwartier.`,
          },
        ],
      },
    ],
  };
}

/** De rij zoals het portaal ze bewaart. */
export function toRow(event: BookingEvent): Record<string, unknown> {
  return {
    route: event.route,
    code: event.code,
    http_status: event.status ?? null,
    package: clip(event.pkg, 200) ?? null,
    start_date: event.start && /^\d{4}-\d{2}-\d{2}$/.test(event.start) ? event.start : null,
    days: Number.isFinite(event.days) ? event.days : null,
    items: (event.items ?? []).slice(0, 20),
    blocked_count: Number.isFinite(event.blocked) ? event.blocked : null,
    detail: clip(event.detail, 300) ?? null,
  };
}

/**
 * Logt de weigering en stuurt ze door, zonder de bezoeker te laten wachten:
 * alles na de logregel loopt via `keepAlive` na het antwoord verder. Gooit nooit.
 */
export function recordBookingEvent(event: BookingEvent): void {
  if (event.dedupeKey && !rateLimit(`event:${event.code}:${event.dedupeKey}`, 1, DEDUPE_WINDOW_MS).allowed) {
    return;
  }
  /*
    Eigen budget per bron. Wat de browser via `/api/booking-event` meldt, is
    publiek en ongeauthenticeerd; deelde het één pot met de checkouts, dan kon
    wie die route bestookt de echte weigeringen van de server wegdrukken.
  */
  const source = event.route === "wizard" || event.route === "afhaal-wizard" ? "browser" : "server";
  if (!rateLimit(`event:totaal:${source}`, MAX_EVENTS_PER_MINUTE, DEDUPE_WINDOW_MS).allowed) return;

  console.warn(
    `[boeking geweigerd] ${event.route} ${event.code}${event.status ? ` (${event.status})` : ""}` +
      ` start=${event.start ?? "-"} dagen=${event.days ?? "-"} toestellen=${itemsText(event.items)}` +
      (event.detail ? ` · ${redact(event.detail)}` : ""),
  );

  keepAlive(
    sendBookingEvent(toRow(event))
      .then((result) => {
        if (!result.ok) console.error(`[boeking geweigerd] niet bewaard in het portaal: ${result.reason}`);
      })
      .catch((error: unknown) => {
        console.error(`[boeking geweigerd] niet bewaard in het portaal: ${String(error)}`);
      }),
  );

  if (!LOST.has(event.code)) return;
  if (!rateLimit(`alarm:boeking:${event.code}`, 1, ALARM_WINDOW_MS).allowed) return;

  keepAlive(
    postToSlack(bookingLostMessage(event))
      .then((result) => logSlackFailure(`boeking geweigerd ${event.code}`, result))
      .catch((error: unknown) => {
        console.error(`[boeking geweigerd] Slack niet bereikt: ${String(error)}`);
      }),
  );
}

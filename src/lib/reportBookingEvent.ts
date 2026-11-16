/**
 * Meldt vanuit de browser dat een boeking in de wizard vastliep. Zie
 * `api/booking-event.ts`. Gooit nooit en laat de bezoeker nooit wachten: een
 * melding die niet aankomt, mag de boeking niet in de weg staan.
 */
import type { BookingEventCode } from "./bookingEvents";

export interface BookingEventReport {
  code: Extract<
    BookingEventCode,
    "wizard_datum_verschoven" | "wizard_geen_vrije_datum" | "wizard_beschikbaarheid_onbereikbaar"
  >;
  /** Pakketroute: dezelfde `config` en `options` als `/api/availability`. */
  config?: unknown;
  options?: unknown;
  /** Afhaalroute: de selectie zoals `/api/availability` ze krijgt. */
  lines?: string;
  days?: number;
  start?: string;
  blocked?: number;
}

/** Dezelfde melding gaat maar één keer per paginabezoek de deur uit. */
const sent = new Set<string>();

export function reportBookingEvent(report: BookingEventReport): void {
  const key = JSON.stringify([report.code, report.start, report.lines ?? report.config]);
  if (sent.has(key)) return;
  sent.add(key);

  try {
    void fetch("/api/booking-event", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(report),
      keepalive: true,
    }).catch(() => undefined);
  } catch {
    // Geen fetch (oude browser, prerender): niets aan te doen, en niets aan de hand.
  }
}

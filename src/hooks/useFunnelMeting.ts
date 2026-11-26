import { useCallback, useEffect, useRef } from "react";
import type { FunnelEvent, FunnelEventType } from "@/lib/funnel";

/**
 * Meet de huurflow voor Vernast › Marketing › Conversies: `view` bij het openen
 * van een pagina, `step` per stap in beeld, `submit` bij een betaalde boeking.
 * Zie `src/lib/funnel.ts` voor waarom en `api/funnel.ts` voor de doorgifte.
 *
 * Alles is fire-and-forget: een mislukte meting mag de flow nooit blokkeren.
 * Draait alleen in effects, dus niet tijdens het prerenderen.
 */

const SESSION_KEY = "vernast_funnel_session:bouwdroger-huren";

function uuid(): string {
  if (typeof crypto.randomUUID === "function") return crypto.randomUUID();
  // Oudere iPhones en http kennen randomUUID niet; zonder dit viel de hele meting weg.
  const b = crypto.getRandomValues(new Uint8Array(16));
  b[6] = (b[6] & 0x0f) | 0x40;
  b[8] = (b[8] & 0x3f) | 0x80;
  const h = [...b].map((x) => x.toString(16).padStart(2, "0")).join("");
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;
}

/**
 * Eén sessie over calculator → pakket → boeking, en terug van Stripe: dat is
 * hetzelfde tabblad, dus sessionStorage overleeft het.
 */
function sessionId(): string {
  try {
    const existing = window.sessionStorage.getItem(SESSION_KEY);
    if (existing) return existing;
    const fresh = uuid();
    window.sessionStorage.setItem(SESSION_KEY, fresh);
    return fresh;
  } catch {
    return uuid();
  }
}

/** Niet meten vanaf een dev-machine; `?funnel_debug=1` zet het lokaal toch aan. */
function isRealVisitor(): boolean {
  const url = new URL(window.location.href);
  if (url.searchParams.get("funnel_debug") === "1") return true;
  const host = window.location.hostname;
  return host !== "localhost" && host !== "127.0.0.1" && !host.endsWith(".local");
}

function send(type: FunnelEventType, step?: number, stepKey?: string): void {
  if (typeof window === "undefined" || !isRealVisitor()) return;
  const url = new URL(window.location.href);
  const event: FunnelEvent = {
    session_id: sessionId(),
    event_type: type,
    step_index: step,
    step_key: stepKey ?? null,
    landing_page: window.location.href,
    referrer: document.referrer || null,
    device_type: window.matchMedia("(max-width: 768px)").matches ? "mobile" : "desktop",
    utm_source: url.searchParams.get("utm_source"),
    utm_medium: url.searchParams.get("utm_medium"),
    utm_campaign: url.searchParams.get("utm_campaign"),
  };
  // keepalive: de submit valt vlak voor een navigatie, en die mag hem niet afbreken.
  void fetch("/api/funnel", {
    method: "POST",
    keepalive: true,
    headers: { "content-type": "application/json" },
    body: JSON.stringify(event),
  }).catch(() => undefined);
}

interface Options {
  /** Huidige stap, of null zolang er geen stap in beeld is. */
  step: number | null;
  stepKey?: string;
}

export function useFunnelMeting({ step, stepKey }: Options) {
  // Een re-render of terugklikken mag niet opnieuw tellen; de database vangt
  // het ook af, maar dan na een netwerkrondje.
  const sent = useRef<Set<string>>(new Set());

  const once = useCallback((type: FunnelEventType, s?: number, key?: string) => {
    const k = `${type}:${s ?? -1}`;
    if (sent.current.has(k)) return;
    sent.current.add(k);
    send(type, s, key);
  }, []);

  useEffect(() => {
    once("view");
  }, [once]);

  useEffect(() => {
    if (step === null || step < 0) return;
    once("step", step, stepKey);
  }, [once, step, stepKey]);

  /** Aanroepen als de boeking écht betaald is, niet bij het klikken op betalen. */
  const trackSubmit = useCallback(() => once("submit"), [once]);

  return { trackSubmit };
}

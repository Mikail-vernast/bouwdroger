/**
 * Duwt orders naar het bouwdrogers-portaal in Vernast.
 *
 * Deze site draait op een eigen Supabase-project; Vernast is een tweede. De
 * webhook aan de andere kant (`bouwdroger-order-webhook`) authenticeert op een
 * gedeeld secret en is idempotent op `(source, external_id)` — een order die
 * twee keer verstuurd wordt, komt daar één keer terecht.
 *
 * Bewust server-only: het secret mag nooit in de browserbundle belanden.
 */

import type { DeviceLine } from "./verhuur.js";

export type VernastOrderSource = "booking" | "reservering" | "stripe";

export interface VernastOrderPayload {
  source: VernastOrderSource;
  /** De primaire sleutel in dit project — de idempotentiesleutel aan de andere kant. */
  external_id: string;
  order_number?: string | null;

  customer_type?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
  postal_code?: string | null;
  city?: string | null;
  company_name?: string | null;
  vat_number?: string | null;

  package_tier?: string | null;
  product_id?: string | null;
  machine?: string | null;
  situatie?: string | null;
  room_type?: string | null;
  sqm?: number | null;
  duration_days?: number | null;
  duration_label?: string | null;
  rental_start_date?: string | null;
  rental_end_date?: string | null;
  delivery_date?: string | null;
  delivery_slot?: string | null;
  equipment_drogers?: number | null;
  equipment_ventilatoren?: number | null;
  equipment_verwarming?: number | null;
  /**
   * Welke toestelsoorten en hoeveel, met de sleutels van `bouwdroger_equipment`.
   * De webhook aan de Vernast-kant legt hiermee de koppelingen in
   * `bouwdroger_order_equipment`, zodat een webshop-order meteen meetelt voor de
   * beschikbaarheid in plaats van pas nadat iemand hem met de hand inplant.
   */
  order_lines?: DeviceLine[] | null;
  customer_note?: string | null;

  total_price?: number | null;
  currency?: string | null;
  payment_status?: "unpaid" | "paid" | "refunded";
  stripe_session_id?: string | null;
  paid_at?: string | null;
}

const TIMEOUT_MS = 8000;

export interface SyncResult {
  ok: boolean;
  /** Reden waarom het niet lukte — voor de logs, nooit voor de bezoeker. */
  reason?: string;
}

/**
 * Verstuurt de order en geeft altijd netjes terug of het lukte — deze functie
 * gooit niet. De aanroeper moet de bezoeker succes kunnen tonen ook als Vernast
 * plat ligt: de order staat dan al in ons eigen Supabase, en een mislukte push
 * is een probleem van later, niet van de klant die staat af te rekenen.
 */
export async function pushOrderToVernast(payload: VernastOrderPayload): Promise<SyncResult> {
  const url = process.env.VERNAST_WEBHOOK_URL;
  const secret = process.env.VERNAST_WEBHOOK_SECRET;

  if (!url || !secret) {
    return { ok: false, reason: "VERNAST_WEBHOOK_URL of VERNAST_WEBHOOK_SECRET ontbreekt" };
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json", "x-webhook-secret": secret },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!response.ok) {
      const body = await response.text().catch(() => "");
      return { ok: false, reason: `HTTP ${response.status}: ${body.slice(0, 200)}` };
    }

    return { ok: true };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "onbekende fout";
    return { ok: false, reason: message };
  } finally {
    clearTimeout(timer);
  }
}

/** Logt een mislukte push zichtbaar genoeg om hem in Vercel terug te vinden. */
export function logSyncFailure(context: string, result: SyncResult): void {
  if (result.ok) return;
  console.error(`[vernast-sync] ${context} niet doorgestuurd naar Vernast: ${result.reason}`);
}

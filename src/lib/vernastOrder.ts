/**
 * Een betaalde Stripe-sessie afleveren bij het bouwdrogers-portaal.
 *
 * Dit hing eerst volledig aan de Stripe-webhook. Eén weg, en als die niet reed
 * kwam de order nergens aan terwijl de klant "Uw boeking staat vast" op zijn
 * scherm had staan — betaald, bevestigd, en onzichtbaar voor iedereen die hem
 * moest inplannen. Dat gebeurde onder meer bij elke betaling in testmodus, waar
 * geen webhook-endpoint bestond, maar evengoed bij een gemiste levering of een
 * endpoint dat na een domeinwissel naar het verkeerde adres wijst.
 *
 * Vandaar twee wegen naar hetzelfde punt: de webhook, en de terugkeer van de
 * betaler zelf via `api/checkout-session.ts`. De webhook aan de Vernast-kant is
 * idempotent op `(source, external_id)`, dus wie er eerst is maakt niet uit en
 * dubbel afleveren bestaat niet.
 */
import type Stripe from "stripe";
import { logAvailabilityFailure, releaseHold } from "./availability.js";
import { parseDeviceLines } from "./verhuur.js";
import { logSyncFailure, pushOrderToVernast, type VernastOrderPayload } from "./vernastSync.js";

function meta(session: Stripe.Checkout.Session, key: string): string | null {
  const value = session.metadata?.[key];
  return value ? String(value).trim() || null : null;
}

/** "Voornaam Achternaam" → losse velden; het portaal toont ze apart. */
function splitName(full: string | null): { first: string | null; last: string | null } {
  if (!full) return { first: null, last: null };
  const parts = full.trim().split(/\s+/);
  if (parts.length === 1) return { first: parts[0], last: null };
  return { first: parts[0], last: parts.slice(1).join(" ") };
}

export function sessionToVernast(session: Stripe.Checkout.Session): VernastOrderPayload {
  const { first, last } = splitName(meta(session, "klant"));
  const totaal = meta(session, "totaal");
  const paid = session.payment_status === "paid";

  return {
    source: "stripe",
    external_id: session.id,
    order_number: meta(session, "referentie") ?? session.client_reference_id,
    customer_type: meta(session, "klanttype"),
    first_name: first,
    last_name: last,
    email: session.customer_email ?? session.customer_details?.email ?? null,
    phone: meta(session, "telefoon"),
    address: meta(session, "werfadres"),
    company_name: meta(session, "bedrijf"),
    vat_number: meta(session, "btw_nummer"),
    package_tier: meta(session, "pakket"),
    delivery_date: meta(session, "leverdatum"),
    delivery_slot: meta(session, "tijdslot"),
    // Zie `api/checkout.ts`: deze drie zijn de basis voor de controle op dubbele
    // boekingen. Ontbreken ze — bij een sessie van vóór die wijziging — dan
    // blijft de order gewoon geldig, hij telt alleen niet mee voor beschikbaarheid.
    rental_start_date: meta(session, "huur_start"),
    rental_end_date: meta(session, "huur_eind"),
    duration_days: Number(meta(session, "huurdagen")) || null,
    order_lines: parseDeviceLines(meta(session, "toestellen")),
    customer_note: meta(session, "regels"),
    total_price: totaal ? Number(totaal) : (session.amount_total ?? 0) / 100,
    currency: (session.currency ?? "eur").toUpperCase(),
    payment_status: paid ? "paid" : "unpaid",
    stripe_session_id: session.id,
    // Stripe geeft seconden, Postgres wil ISO.
    paid_at: paid ? new Date((session.created ?? 0) * 1000).toISOString() : null,
  };
}

/**
 * Levert de order af en geeft de hold vrij.
 *
 * De order neemt het van de hold over: die staat als echte boeking in het
 * portaal en telt vanaf daar mee voor de beschikbaarheid. Blijft de hold staan,
 * dan zou dezelfde huur dubbel geteld worden en zou de eerstvolgende bezoeker
 * ten onrechte een volle datum zien.
 *
 * Alleen vrijgeven als de push gelukt is — anders is er nog niets dat de
 * toestellen vasthoudt.
 */
export async function deliverOrder(
  session: Stripe.Checkout.Session,
  context: string,
): Promise<boolean> {
  const sync = await pushOrderToVernast(sessionToVernast(session));
  logSyncFailure(`${context} ${session.id}`, sync);

  if (sync.ok) {
    logAvailabilityFailure(`release ${session.id}`, await releaseHold(session.id));
  }
  return sync.ok;
}

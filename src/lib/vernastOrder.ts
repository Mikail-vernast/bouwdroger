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

/**
 * Waarmee de klant online betaald heeft — `apple_pay`, `ideal`, `bancontact`,
 * `card`, … in de sleutels van Stripe zelf.
 *
 * Stripe hangt dit niet aan de sessie maar aan de charge eronder, en die zit
 * noch in het webhook-event noch in een gewone `retrieve`. Vandaar één extra
 * call met `expand`.
 *
 * Apple Pay en Google Pay komen binnen als een kaartbetaling met een
 * `wallet.type` erbij. Die wallet is wat het portaal wil tonen — "card" zegt
 * niets over hoe de klant het scherm bediend heeft — dus die wint.
 *
 * Lukt de call niet, dan blijft de order gewoon geldig; hij toont dan enkel
 * niet waarmee er betaald is. Dat is nooit een reden om de aflevering te laten
 * mislukken en Stripe zijn event te laten herhalen.
 */
async function onlinePaymentMethod(
  stripe: Stripe,
  session: Stripe.Checkout.Session,
): Promise<string | null> {
  if (session.payment_status !== "paid") return null;

  try {
    // De terugkeerroute haalt de sessie al mét charge op; die hoeft niet nog
    // eens over de lijn. Het webhook-event bevat alleen de ID's, dus daar wel.
    const expanded =
      typeof session.payment_intent === "object" && session.payment_intent?.latest_charge
        ? session
        : await stripe.checkout.sessions.retrieve(session.id, {
            expand: ["payment_intent.latest_charge"],
          });

    const intent = expanded.payment_intent;
    if (!intent || typeof intent === "string") return null;

    const charge = intent.latest_charge;
    if (!charge || typeof charge === "string") return null;

    const details = charge.payment_method_details;
    if (!details?.type) return null;

    return details.card?.wallet?.type ?? details.type;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "onbekende fout";
    console.error(`[vernast-order] betaalmethode van ${session.id} ophalen mislukt: ${message}`);
    return null;
  }
}

export function sessionToVernast(
  session: Stripe.Checkout.Session,
  onlineMethod: string | null = null,
): VernastOrderPayload {
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
    online_payment_method: onlineMethod,
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
  stripe: Stripe,
  session: Stripe.Checkout.Session,
  context: string,
): Promise<boolean> {
  const sync = await pushOrderToVernast(
    sessionToVernast(session, await onlinePaymentMethod(stripe, session)),
  );
  logSyncFailure(`${context} ${session.id}`, sync);

  if (sync.ok) {
    logAvailabilityFailure(`release ${session.id}`, await releaseHold(session.id));
  }
  return sync.ok;
}

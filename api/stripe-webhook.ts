/**
 * Stripe-webhook: meldt betalingen aan het bouwdrogers-portaal in Vernast.
 *
 * `api/checkout.ts` maakt al maanden Checkout-sessies aan, maar er stond geen
 * webhook tegenover. Gevolg: een boeking die effectief betaald was, bleef eeuwig
 * op `pending` staan en niemand kon zien welke orders al geld hadden opgeleverd.
 * Deze route dicht dat gat.
 *
 * De payload wordt geverifieerd met de Stripe-signature. Zonder die controle kan
 * iedereen die de URL kent een "betaald"-melding sturen.
 */
import Stripe from "stripe";
import { logAvailabilityFailure, releaseHold } from "../src/lib/availability.js";
import { isReference } from "../src/lib/booking.js";
import { parseDeviceLines } from "../src/lib/verhuur.js";
import { logSyncFailure, pushOrderToVernast, type VernastOrderPayload } from "../src/lib/vernastSync.js";

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

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

function sessionToVernast(session: Stripe.Checkout.Session): VernastOrderPayload {
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

export async function POST(request: Request): Promise<Response> {
  const key = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!key || !webhookSecret) {
    console.error("[stripe-webhook] STRIPE_SECRET_KEY of STRIPE_WEBHOOK_SECRET ontbreekt.");
    return json({ error: "Webhook niet geconfigureerd." }, 500);
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) return json({ error: "Geen signature." }, 400);

  // De ruwe body is nodig: Stripe tekent de bytes, niet het geparste object.
  const rawBody = await request.text();
  const stripe = new Stripe(key);

  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(rawBody, signature, webhookSecret);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "onbekende fout";
    console.error("[stripe-webhook] signature-verificatie mislukt:", message);
    return json({ error: "Ongeldige signature." }, 400);
  }

  /*
    Een vervallen sessie betekent dat de bezoeker niet betaald heeft. De
    toestellen die tijdens het afrekenen apart lagen moeten dan meteen weer vrij,
    anders blijven ze tot het verlooptijdstip onnodig geblokkeerd voor iemand
    anders. De hold zelf verloopt ook vanzelf; dit maakt het alleen sneller.
  */
  if (event.type === "checkout.session.expired") {
    const expired = event.data.object as Stripe.Checkout.Session;
    logAvailabilityFailure(`release ${expired.id}`, await releaseHold(expired.id));
    return json({ received: true });
  }

  // Alleen afgeronde checkouts zijn verder interessant. De rest bevestigen we
  // stil, anders blijft Stripe events herhalen die we toch niet gaan gebruiken.
  if (event.type !== "checkout.session.completed" && event.type !== "checkout.session.async_payment_succeeded") {
    return json({ received: true });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  // Zelfde afscherming als `api/checkout-session.ts`: alleen sessies die door
  // onze eigen checkout zijn aangemaakt, zodat deze route geen venster wordt op
  // de rest van het Stripe-account.
  if (!isReference(session.client_reference_id) || !isReference(session.metadata?.referentie)) {
    return json({ received: true });
  }

  const sync = await pushOrderToVernast(sessionToVernast(session));
  logSyncFailure(`stripe ${session.id}`, sync);

  /*
    De order neemt het nu over van de hold: die staat als echte boeking in het
    portaal en telt vanaf daar mee voor de beschikbaarheid. Blijft de hold
    staan, dan zou dezelfde huur dubbel geteld worden en zou de eerstvolgende
    bezoeker ten onrechte een volle datum zien.

    Alleen vrijgeven als de push gelukt is — anders is er nog niets dat de
    toestellen vasthoudt, en Stripe biedt het event straks opnieuw aan.
  */
  if (sync.ok) {
    logAvailabilityFailure(`release ${session.id}`, await releaseHold(session.id));
  }

  // Faalt de push, dan een 500 zodat Stripe het event opnieuw aanbiedt — de
  // webhook aan de andere kant is idempotent, dus een herhaling is ongevaarlijk.
  if (!sync.ok) return json({ error: "Doorsturen naar Vernast mislukt." }, 500);

  return json({ received: true });
}

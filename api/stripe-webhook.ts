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
import { deliverOrder } from "../src/lib/vernastOrder.js";

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
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

  /*
    Zowel deze webhook als de terugkeer van de betaler in
    `api/checkout-session.ts` levert de order af. Wie er eerst is maakt niet uit:
    de webhook aan de Vernast-kant is idempotent op `(source, external_id)`.
    Zie `src/lib/vernastOrder.ts` voor waarom er twee wegen zijn.
  */
  const delivered = await deliverOrder(session, "stripe");

  // Faalt de push, dan een 500 zodat Stripe het event opnieuw aanbiedt — de
  // webhook aan de andere kant is idempotent, dus een herhaling is ongevaarlijk.
  if (!delivered) return json({ error: "Doorsturen naar Vernast mislukt." }, 500);

  return json({ received: true });
}

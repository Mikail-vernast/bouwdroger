/**
 * Controleert bij Stripe of een Checkout-sessie effectief betaald is. De
 * boekingspagina vraagt dit op wanneer Stripe de bezoeker terugstuurt; zonder
 * deze controle zou iemand de bevestigingspagina kunnen openen door zelf een
 * `session_id` in de URL te zetten.
 *
 * Het endpoint is publiek, dus het geeft niet meer terug dan de pagina nodig
 * heeft: betaald ja/nee en de referentie. Klantgegevens die Stripe wél bij de
 * sessie bewaart — e-mailadres, bedrag, adres — blijven hier binnen. En omdat
 * de Stripe-sleutel het volledige account ziet, wordt enkel een sessie
 * beantwoord die door `POST /api/checkout` is aangemaakt.
 */
import Stripe from "stripe";
import { isReference } from "../src/lib/booking.js";
import { clientIp, gate, tooManyRequests } from "../src/lib/rateLimit.js";
import { deliverOrder } from "../src/lib/vernastOrder.js";

/** Stripe-sessie-ID's zijn `cs_` gevolgd door alfanumerieke tekens. */
const SESSION_ID = /^cs_[A-Za-z0-9_]{1,255}$/;

/**
 * Ruimer dan bij het aanmaken van een order: de boekingspagina kan dit bij het
 * terugkomen van Stripe een paar keer na elkaar opvragen, en een bezoeker die
 * ververst hoort geen 429 te zien. De grens is er om te beletten dat iemand
 * deze route als onbeperkte doorgeefluik naar de Stripe-API gebruikt.
 */
const MAX_LOOKUPS = 20;

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

export async function GET(request: Request): Promise<Response> {
  const limit = gate(clientIp(request), MAX_LOOKUPS);

  const attempt = limit.attempt();
  if (!attempt.allowed) return tooManyRequests(attempt.retryAfter);

  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return json({ error: "Stripe is nog niet geconfigureerd op deze omgeving." }, 500);

  const id = new URL(request.url).searchParams.get("id");
  if (!id || !SESSION_ID.test(id)) return json({ error: "Ongeldige sessie." }, 400);

  // Pas een geldig ID kost een call naar Stripe.
  const accepted = limit.accept();
  if (!accepted.allowed) return tooManyRequests(accepted.retryAfter);

  const stripe = new Stripe(key);

  try {
    // De charge komt mee omdat `deliverOrder` hieronder de betaalmethode
    // (Apple Pay, iDEAL, …) doorstuurt naar het portaal. Zonder deze expand
    // haalt die functie de sessie zelf een tweede keer op, midden in de
    // bevestigingspagina van de klant.
    const session = await stripe.checkout.sessions.retrieve(id, {
      expand: ["payment_intent.latest_charge"],
    });
    const reference = session.client_reference_id;

    // Geen boeking van deze site: behandel het als onbestaand, zodat dit
    // endpoint geen venster wordt op de rest van het Stripe-account.
    if (!isReference(reference) || !isReference(session.metadata?.referentie)) {
      return json({ error: "Sessie niet gevonden." }, 404);
    }

    const paid = session.payment_status === "paid";

    /*
      Hier gaat de order ook naar het portaal, niet alleen vanuit de
      Stripe-webhook.

      Die webhook was lang de enige weg, en als hij niet reed kwam de order
      nergens aan terwijl de klant al "Uw boeking staat vast" op zijn scherm had.
      In testmodus gebeurde dat bij élke betaling — daar bestond geen
      webhook-endpoint — maar evengoed bij een gemiste levering of een endpoint
      dat na een domeinwissel naar het verkeerde adres wijst.

      Dubbel afleveren bestaat niet: de webhook aan de Vernast-kant is idempotent
      op `(source, external_id)`. Wie er eerst is wint, de tweede is een no-op.
      Zie `src/lib/vernastOrder.ts`.

      Bewust vóór het antwoord, niet erna: pas als de order echt genoteerd staat
      mag dit scherm zeggen dat de boeking vastligt. Mislukt het, dan blijft de
      betaling gewoon geldig — de logs vangen het op en Stripe biedt zijn event
      alsnog opnieuw aan.
    */
    if (paid) await deliverOrder(stripe, session, "terugkeer");

    return json({ paid, reference });
  } catch {
    return json({ error: "Sessie niet gevonden." }, 404);
  }
}

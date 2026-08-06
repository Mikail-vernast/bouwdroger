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
import { isReference } from "../src/lib/booking";

/** Stripe-sessie-ID's zijn `cs_` gevolgd door alfanumerieke tekens. */
const SESSION_ID = /^cs_[A-Za-z0-9_]{1,255}$/;

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

export async function GET(request: Request): Promise<Response> {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return json({ error: "Stripe is nog niet geconfigureerd op deze omgeving." }, 500);

  const id = new URL(request.url).searchParams.get("id");
  if (!id || !SESSION_ID.test(id)) return json({ error: "Ongeldige sessie." }, 400);

  const stripe = new Stripe(key);

  try {
    const session = await stripe.checkout.sessions.retrieve(id);
    const reference = session.client_reference_id;

    // Geen boeking van deze site: behandel het als onbestaand, zodat dit
    // endpoint geen venster wordt op de rest van het Stripe-account.
    if (!isReference(reference) || !isReference(session.metadata?.referentie)) {
      return json({ error: "Sessie niet gevonden." }, 404);
    }

    return json({ paid: session.payment_status === "paid", reference });
  } catch {
    return json({ error: "Sessie niet gevonden." }, 404);
  }
}

/**
 * Controleert bij Stripe of een Checkout-sessie effectief betaald is. De
 * boekingspagina vraagt dit op wanneer Stripe de bezoeker terugstuurt; zonder
 * deze controle zou iemand de bevestigingspagina kunnen openen door zelf een
 * `session_id` in de URL te zetten.
 *
 * Het endpoint is publiek, dus het geeft niet meer terug dan de pagina nodig
 * heeft: betaald ja/nee, de referentie en — bij een betaalde sessie — wat er
 * besteld is, voor het overzicht op de bevestigingspagina. Wie de klant is
 * (naam, e-mail, adres, telefoon) blijft hier binnen. En omdat de
 * Stripe-sleutel het volledige account ziet, wordt enkel een sessie beantwoord
 * die door `POST /api/checkout` is aangemaakt.
 */
import Stripe from "stripe";
import { isReference } from "../src/lib/booking.js";
import { clientIp, gate, tooManyRequests } from "../src/lib/rateLimit.js";
import { deviceLineLabel, parseDeviceLines } from "../src/lib/verhuur.js";
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

function meta(session: Stripe.Checkout.Session, key: string): string {
  const value = session.metadata?.[key];
  return typeof value === "string" ? value : "";
}

/**
 * Wat er besteld is, zoals de bevestigingspagina het toont.
 *
 * De knop in de bevestigingsmail brengt de klant hier dagen later terug, en dan
 * stond er enkel "Uw boeking staat vast" met een referentie — wie wilde nakijken
 * hoeveel drogers er komen, moest de mail er weer bij halen. De pagina kan dat
 * niet zelf afleiden: de configuratie in de adresbalk is maar een wens van de
 * bezoeker, terwijl dit uit de betaalde sessie komt.
 *
 * Bewust zonder naam, adres, e-mail of telefoon: die blijven hier binnen, ook al
 * zit deze route achter een sessie-ID dat alleen de klant kent. Wat er in zijn
 * kelder komt te staan is zijn eigen bestelling; wie hij is hoort daar niet bij.
 */
function orderSummary(session: Stripe.Checkout.Session): Record<string, unknown> {
  const devices = parseDeviceLines(meta(session, "toestellen")).map(deviceLineLabel);
  const number = (key: string): number | null => {
    const parsed = Number(meta(session, key));
    return Number.isFinite(parsed) ? parsed : null;
  };

  return {
    package: meta(session, "pakket"),
    devices,
    deliveryDate: meta(session, "leverdatum"),
    deliverySlot: meta(session, "tijdslot"),
    rentalStart: meta(session, "huur_start"),
    rentalEnd: meta(session, "huur_eind"),
    rentalDays: number("huurdagen"),
    total: number("totaal_incl_btw"),
    paid: number("nu_betaald"),
    balance: number("saldo_bij_levering"),
  };
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

    // De bestelling zelf hoort alleen bij een betaalde sessie: een afgebroken
    // poging heeft niets om te tonen, en de pagina stuurt die bezoeker terug
    // naar de gegevensstap.
    return json({ paid, reference, ...(paid ? { order: orderSummary(session) } : {}) });
  } catch {
    return json({ error: "Sessie niet gevonden." }, 404);
  }
}

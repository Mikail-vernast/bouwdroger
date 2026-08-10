/**
 * Geeft de toestellen terug die voor een afgebroken betaalpoging apart lagen.
 *
 * De boekingspagina roept dit aan zodra ze opnieuw geladen wordt terwijl er nog
 * een sessie van een vorige poging in `sessionStorage` staat: na een refresh, na
 * de terugknop, of na een omweg langs Bancontact die niet op een betaling
 * uitliep. Op dat moment staat de bezoeker niet meer op het betaalscherm, dus
 * hoort zijn hold niet te blijven liggen.
 *
 * Zonder deze route bleef die hold een half uur staan, en botste de bezoeker
 * erop bij het opnieuw doorlopen van de wizard: de datumstap zag zijn eigen
 * reservatie als een volle dag en schoof zijn levering stilzwijgend weken
 * vooruit, of het afrekenen liep op een 409 vast.
 *
 * `api/checkout.ts` doet hetzelfde vlak voor het aanmaken van een nieuwe sessie;
 * beide delen `releaseSession`. Deze route bestaat voor het moment dat er
 * helemaal geen nieuwe sessie komt.
 */
import Stripe from "stripe";
import { releaseSession } from "../src/lib/checkoutSession.js";
import { clientIp, gate, tooManyRequests } from "../src/lib/rateLimit.js";

/**
 * Ruimer dan bij het aanmaken van een order: dit kost hooguit twee Stripe-calls
 * en het is in het voordeel van iedereen dat het lukt. De grens is er om te
 * beletten dat iemand deze route als onbeperkt doorgeefluik naar Stripe
 * gebruikt.
 */
const MAX_RELEASES = 20;

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

interface Body {
  sessionId?: unknown;
  /** Het e-mailadres waarmee de sessie is aangemaakt; zie `releaseSession`. */
  email?: unknown;
}

export async function POST(request: Request): Promise<Response> {
  const limit = gate(clientIp(request), MAX_RELEASES);

  const attempt = limit.attempt();
  if (!attempt.allowed) return tooManyRequests(attempt.retryAfter);

  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return json({ error: "Stripe is nog niet geconfigureerd op deze omgeving." }, 500);

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return json({ error: "Ongeldige aanvraag." }, 400);
  }

  const email = typeof body.email === "string" ? body.email.slice(0, 200) : "";
  if (!/\S+@\S+\.\S+/.test(email)) return json({ error: "Geen geldig e-mailadres." }, 400);

  const accepted = limit.accept();
  if (!accepted.allowed) return tooManyRequests(accepted.retryAfter);

  const stripe = new Stripe(key);
  const released = await releaseSession(stripe, body.sessionId, email, "pagina verlaten");

  /*
    Altijd 200. Of de hold er nog lag doet er voor de pagina niet toe: ze heeft
    hier niets aan te beslissen, en een foutmelding over een opruimactie die de
    bezoeker niet gevraagd heeft hoort niet op zijn scherm.
  */
  return json({ released });
}

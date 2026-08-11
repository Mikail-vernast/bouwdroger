/**
 * De verlengpagina: huurgegevens ophalen en een verlenging aanvragen.
 *
 * De knop in de verlengmail (sjabloon 200) wijst hierheen met het sessie-ID van
 * de oorspronkelijke boeking. Dat ID is de sleutel: lang genoeg om niet te
 * raden, en het bespaart de klant dat hij gegevens moet intikken die hij al
 * gegeven heeft.
 *
 * `GET` geeft alleen wat de pagina moet tonen — referentie, datums, wat er
 * staat. Bewust geen naam, adres of e-mailadres: dit endpoint is publiek, en
 * wie een sessie-ID te pakken krijgt hoort daar geen klantgegevens mee te
 * kunnen opvragen.
 *
 * `POST` maakt er een aanvraag van. Een verlenging kan niet automatisch
 * bevestigd worden — de toestellen kunnen voor de volgende klant ingepland
 * staan — dus dit gaat als mail naar het team, dat de beschikbaarheid nakijkt
 * en terugbelt.
 */
import Stripe from "stripe";
import { isReference } from "../src/lib/booking.js";
import { sendExtensionRequest } from "../src/lib/mail.js";
import { clientIp, gate, tooManyRequests } from "../src/lib/rateLimit.js";
import { addDays, isoDate } from "../src/lib/verhuur.js";
import { pushExtensionToVernast } from "../src/lib/vernastExtension.js";

const SESSION_ID = /^cs_[A-Za-z0-9_]{1,255}$/;

/** Hoeveel dagen een klant in één keer kan bijvragen. */
const MAX_EXTRA_DAGEN = 56;

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

function meta(session: Stripe.Checkout.Session, key: string): string {
  return session.metadata?.[key]?.trim() ?? "";
}

async function loadSession(id: string): Promise<Stripe.Checkout.Session | null> {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;

  try {
    const session = await new Stripe(key).checkout.sessions.retrieve(id);
    // Zelfde afscherming als elders: alleen boekingen van deze site.
    if (!isReference(session.client_reference_id) || !isReference(session.metadata?.referentie)) {
      return null;
    }
    return session.payment_status === "paid" ? session : null;
  } catch {
    return null;
  }
}

export async function GET(request: Request): Promise<Response> {
  const limit = gate(clientIp(request), 20);

  const attempt = limit.attempt();
  if (!attempt.allowed) return tooManyRequests(attempt.retryAfter);

  const id = new URL(request.url).searchParams.get("session_id");
  if (!id || !SESSION_ID.test(id)) return json({ error: "Ongeldige sessie." }, 400);

  const accepted = limit.accept();
  if (!accepted.allowed) return tooManyRequests(accepted.retryAfter);

  const session = await loadSession(id);
  if (!session) return json({ error: "Boeking niet gevonden." }, 404);

  return json({
    referentie: meta(session, "referentie") || session.client_reference_id,
    pakket: meta(session, "pakket"),
    toestellen: meta(session, "toestellen"),
    huur_start: meta(session, "huur_start"),
    huur_eind: meta(session, "huur_eind"),
    tijdslot: meta(session, "tijdslot"),
    /*
      Het telefoonnummer van de boeking, zodat het formulier het kan
      voorinvullen — de klant heeft het ons al gegeven.

      Dit is het enige klantgegeven dat hier buitengaat, en bewust: zonder
      nummer moet iemand het overtikken op een scherm waar hij net op een knop
      uit zijn eigen mailbox geklikt heeft. Naam, adres en e-mailadres blijven
      binnen, want die heeft dit formulier niet nodig.
    */
    telefoon: meta(session, "telefoon"),
  });
}

interface ExtensionBody {
  sessionId?: unknown;
  extraDagen?: unknown;
  telefoon?: unknown;
  opmerking?: unknown;
  /** Honeypot, zie `api/contact.ts`. */
  website?: unknown;
}

function str(value: unknown, max: number): string {
  if (value === null || value === undefined) return "";
  return String(value).trim().slice(0, max);
}

export async function POST(request: Request): Promise<Response> {
  const limit = gate(clientIp(request));

  const attempt = limit.attempt();
  if (!attempt.allowed) return tooManyRequests(attempt.retryAfter);

  let body: ExtensionBody;
  try {
    body = (await request.json()) as ExtensionBody;
  } catch {
    return json({ error: "Ongeldige aanvraag." }, 400);
  }

  if (str(body.website, 200)) return json({ ok: true });

  const id = str(body.sessionId, 300);
  if (!SESSION_ID.test(id)) return json({ error: "Ongeldige sessie." }, 400);

  const extraDagen = Math.floor(Number(body.extraDagen));
  if (!Number.isFinite(extraDagen) || extraDagen < 1 || extraDagen > MAX_EXTRA_DAGEN) {
    return json({ error: "Kies hoeveel langer u de toestellen wilt houden." }, 400);
  }

  const telefoon = str(body.telefoon, 40);
  if (telefoon.replace(/\D/g, "").length < 8) {
    return json({ error: "Vul een telefoonnummer in waarop wij u kunnen bereiken." }, 400);
  }

  /*
    De toelichting is verplicht. Een verlenging wordt met de hand ingepland en
    de planner moet weten waaróm: een chape die nog niet droog is vraagt iets
    anders dan een werf die een week stilligt. Zonder die zin belt hij toch
    terug om precies dat te vragen.
  */
  const opmerking = str(body.opmerking, 2000);
  if (opmerking.length < 5) {
    return json({ error: "Vertel kort waarom u wilt verlengen." }, 400);
  }

  const accepted = limit.accept();
  if (!accepted.allowed) return tooManyRequests(accepted.retryAfter);

  const session = await loadSession(id);
  if (!session) return json({ error: "Boeking niet gevonden." }, 404);

  const huidigEinde = meta(session, "huur_eind");
  const nieuwEinde = huidigEinde ? isoDate(addDays(new Date(huidigEinde), extraDagen)) : "";

  const referentie = meta(session, "referentie") || (session.client_reference_id ?? id);
  const naam = meta(session, "klant");
  const email = session.customer_email ?? session.customer_details?.email ?? "";

  /*
    Twee bestemmingen, allebei afgewacht en niet na het antwoord: op Vercel stopt
    de functie zodra het antwoord verstuurd is.

    De rij in het portaal is de opslag — daar staat de aanvraag op de tab
    Verlengingen tot iemand ze goedkeurt of weigert. De mail is de melding, zodat
    niemand op een tabblad hoeft te zitten wachten. Vroeger was de mail allebei
    tegelijk, en verdween de aanvraag spoorloos als ze niet aankwam.
  */
  const [push] = await Promise.all([
    pushExtensionToVernast({
      stripe_session_id: id,
      order_number: referentie,
      customer_name: naam,
      customer_email: email,
      customer_phone: telefoon,
      extra_days: extraDagen,
      current_end_date: huidigEinde,
      requested_end_date: nieuwEinde,
      customer_note: opmerking,
    }),
    sendExtensionRequest({
      referentie,
      naam,
      email,
      telefoon,
      extraDagen,
      huidigEinde,
      nieuwEinde,
      opmerking,
    }),
  ]);

  if (!push.ok) {
    console.error(`[extension] push naar Vernast mislukt voor ${referentie}: ${push.reason}`);
  }

  return json({ ok: true, nieuw_einde: nieuwEinde });
}

/**
 * Het saldo van een boeking afrekenen — bij de installatie.
 *
 * De klant betaalt bij het bestellen enkel de orderbevestiging; de rest volgt
 * wanneer de technieker het materieel plaatst. Die laatste betaling gebeurt
 * hier: de technieker toont in het portaal de QR van deze pagina, de klant
 * scant hem met zijn eigen telefoon en rekent af met Bancontact, kaart of
 * Apple Pay.
 *
 * Het sessie-ID van de oorspronkelijke boeking is de sleutel — hetzelfde
 * principe als de verlengpagina. Lang genoeg om niet te raden, en het bedrag
 * komt uit de metadata van die sessie in plaats van uit de aanvraag: wat de
 * browser meestuurt bepaalt hier niets.
 *
 * `GET` geeft alleen wat de pagina moet tonen — referentie, pakket, bedragen.
 * Bewust geen naam, adres of e-mailadres: dit endpoint is publiek.
 *
 * `POST` maakt de betaalsessie. Zodra ze betaald is, werkt
 * `deliverBalancePayment` de bestaande order in het portaal bij, en maakt dát
 * de factuur die naar de klant vertrekt.
 *
 * De betaling zelf gebeurt in onze eigen pagina (`ui_mode: "elements"`), net als
 * bij een boeking. Dat was hier eerst een knop naar de gehoste pagina van
 * Stripe: de klant scande op de werf een QR, kreeg ons scherm te zien, en werd
 * daarna nog eens doorgestuurd naar een pagina in een andere vormtaal met een
 * ander adres in de balk. Eén stap minder, en het blijft van ons.
 */
import Stripe from "stripe";
import { isReference } from "../src/lib/booking.js";
import { safeOrigin } from "../src/lib/origin.js";
import { clientIp, gate, tooManyRequests } from "../src/lib/rateLimit.js";
import { BALANCE_FLAG, BALANCE_TYPE, deliverBalancePayment } from "../src/lib/vernastOrder.js";

const SESSION_ID = /^cs_[A-Za-z0-9_]{1,255}$/;

/**
 * Hoe lang een saldo-betaalsessie leeft.
 *
 * Ruimer dan de 30 minuten van een boeking: daar houdt de sessie toestellen
 * apart, hier staat er niets vast. Een uur is genoeg voor een klant die de QR
 * scant terwijl de technieker nog aan het plaatsen is, en kort genoeg om geen
 * betaallink achter te laten die morgen nog werkt.
 */
const SESSION_MINUTES = 60;

/**
 * Zelfde label als de boekingspagina gebruikt, zodat beide betaalstromen in het
 * Stripe-dashboard onder dezelfde integratie vallen. Zie `api/checkout.ts`.
 */
const INTEGRATION_ID = "vernast-verhuur-boeking-kwtdrmzp";

/**
 * Drempel per IP; dit endpoint praat met Stripe.
 *
 * Ruimer dan de verlengpagina omdat één pagebezoek er hier twee kost: de GET
 * die de bedragen ophaalt en de POST die de betaalsessie aanmaakt. Dat laatste
 * gebeurde vroeger pas bij een klik op "betalen", maar het formulier staat nu in
 * de pagina zelf en moet er dus meteen zijn. Met deze twee grenzen blijft het
 * aantal toegelaten bezoeken gelijk aan wat het was.
 */
const MAX_LOOKUPS = 40;
const MAX_ATTEMPTS = 60;

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

function meta(session: Stripe.Checkout.Session, key: string): string {
  return session.metadata?.[key]?.trim() ?? "";
}

function amount(session: Stripe.Checkout.Session, key: string): number {
  const value = Number(meta(session, key).replace(",", "."));
  return Number.isFinite(value) ? value : 0;
}

const round2 = (value: number): number => Math.round(value * 100) / 100;

interface Balance {
  /** De boeking zoals de klant ze kent. */
  referentie: string;
  pakket: string;
  /** Wat de order in totaal kost, incl. btw. */
  totaal: number;
  /** Wat er bij het bestellen al afgerekend is, incl. btw. */
  betaald: number;
  /** Wat er nu nog openstaat, incl. btw. */
  saldo: number;
  /** Er valt niets meer te betalen — alles vooraf voldaan of het saldo is net binnen. */
  voldaan: boolean;
  /*
    De huurperiode zoals ze op de bevestiging stond. Zegt de klant meteen waar
    deze rekening over gaat; sessies van vóór de beschikbaarheidscontrole dragen
    deze sleutels niet, en dan blijft de regel gewoon weg.
  */
  start: string;
  eind: string;
  dagen: number;
}

/**
 * De bedragen van een boeking.
 *
 * Bij voorkeur uit de metadata: die is bij het aanmaken van de sessie berekend
 * uit de catalogus en is dus het bedrag dat op de bevestiging van de klant
 * staat. Sessies van vóór de btw-wijziging missen `totaal_incl_btw`; dan blijft
 * enkel wat Stripe geïncasseerd heeft, en is er per definitie niets open.
 */
function readBalance(session: Stripe.Checkout.Session): Balance {
  const collected = round2((session.amount_total ?? 0) / 100);
  const total = amount(session, "totaal_incl_btw") || collected;
  const paid = amount(session, "nu_betaald") || collected;
  const outstanding = round2(Math.max(0, total - paid));

  return {
    referentie: meta(session, "referentie") || (session.client_reference_id ?? ""),
    pakket: meta(session, "pakket"),
    totaal: total,
    betaald: paid,
    saldo: outstanding,
    voldaan: outstanding <= 0 || Boolean(meta(session, BALANCE_FLAG)),
    start: meta(session, "huur_start"),
    eind: meta(session, "huur_eind"),
    dagen: Number(meta(session, "huurdagen")) || 0,
  };
}

/**
 * De boeking waar het saldo bij hoort.
 *
 * Alleen sessies van deze site, en alleen betaalde: een boeking waarvan de
 * eerste betaling niet doorging bestaat in het portaal niet en heeft dus ook
 * geen saldo. Zelfde afscherming als `api/extension.ts`, zodat dit endpoint
 * geen venster wordt op de rest van het Stripe-account.
 */
async function loadBooking(
  stripe: Stripe,
  id: string,
): Promise<Stripe.Checkout.Session | null> {
  try {
    const session = await stripe.checkout.sessions.retrieve(id);
    if (!isReference(session.client_reference_id) || !isReference(session.metadata?.referentie)) {
      return null;
    }
    return session.payment_status === "paid" ? session : null;
  } catch (error: unknown) {
    /*
      Naar buiten blijft het "boeking niet gevonden", maar in de logs staat de
      reden. Een QR die "deze link werkt niet" toont is anders blind zoeken,
      terwijl het meestal dezelfde oorzaak heeft: een `cs_test_`-boeking van de
      dev-omgeving die op de live sleutel van productie belandt.
    */
    const message = error instanceof Error ? error.message : "onbekende fout";
    console.error(`[saldo] boeking ${id} niet op te halen bij Stripe: ${message}`);
    return null;
  }
}

export async function GET(request: Request): Promise<Response> {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return json({ error: "Betalen is nog niet geconfigureerd op deze omgeving." }, 500);

  const limit = gate(clientIp(request), MAX_LOOKUPS, MAX_ATTEMPTS);
  const attempt = limit.attempt();
  if (!attempt.allowed) return tooManyRequests(attempt.retryAfter);

  const params = new URL(request.url).searchParams;
  const id = params.get("session_id") ?? "";
  if (!SESSION_ID.test(id)) return json({ error: "Ongeldige sessie." }, 400);

  const accepted = limit.accept();
  if (!accepted.allowed) return tooManyRequests(accepted.retryAfter);

  const stripe = new Stripe(key);
  const booking = await loadBooking(stripe, id);
  if (!booking) return json({ error: "Boeking niet gevonden." }, 404);

  /*
    De terugkeer van de betaler, met de saldosessie erbij. Net als bij een
    gewone boeking loopt de afhandeling langs twee wegen: de Stripe-webhook en
    dit scherm. In testmodus bestaat die webhook niet, dus zonder deze weg zou
    een lokaal afgerekend saldo nooit in het portaal aankomen.
  */
  const balanceId = params.get("saldo_session") ?? "";
  if (SESSION_ID.test(balanceId)) {
    try {
      const paidSession = await stripe.checkout.sessions.retrieve(balanceId, {
        expand: ["payment_intent.latest_charge"],
      });
      const belongsHere =
        meta(paidSession, "type") === BALANCE_TYPE && meta(paidSession, "basis_sessie") === id;
      if (belongsHere && paidSession.payment_status === "paid") {
        await deliverBalancePayment(stripe, paidSession, "terugkeer-saldo");
        // Vers ophalen: `deliverBalancePayment` zet de vlag op de boeking, en
        // zonder deze tweede lezing toont het scherm nog een openstaand saldo.
        const fresh = await loadBooking(stripe, id);
        return json(fresh ? readBalance(fresh) : readBalance(booking));
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "onbekende fout";
      console.error(`[saldo] afhandelen van ${balanceId} mislukt: ${message}`);
    }
  }

  return json(readBalance(booking));
}

export async function POST(request: Request): Promise<Response> {
  const key = process.env.STRIPE_SECRET_KEY;
  /*
    Zie `api/checkout.ts`: de publiceerbare sleutel gaat mee in het antwoord in
    plaats van via een VITE_-variabele de bundel in, zodat ze altijd bij dezelfde
    omgeving hoort als de geheime sleutel hierboven.
  */
  const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
  if (!key || !publishableKey) {
    return json({ error: "Betalen is nog niet geconfigureerd op deze omgeving." }, 500);
  }

  const limit = gate(clientIp(request), MAX_LOOKUPS, MAX_ATTEMPTS);
  const attempt = limit.attempt();
  if (!attempt.allowed) return tooManyRequests(attempt.retryAfter);

  let body: { session_id?: unknown };
  try {
    body = (await request.json()) as { session_id?: unknown };
  } catch {
    return json({ error: "Ongeldige aanvraag." }, 400);
  }

  const id = typeof body.session_id === "string" ? body.session_id : "";
  if (!SESSION_ID.test(id)) return json({ error: "Ongeldige sessie." }, 400);

  const accepted = limit.accept();
  if (!accepted.allowed) return tooManyRequests(accepted.retryAfter);

  const stripe = new Stripe(key);
  const booking = await loadBooking(stripe, id);
  if (!booking) return json({ error: "Boeking niet gevonden." }, 404);

  const balance = readBalance(booking);
  if (balance.voldaan) return json({ error: "Deze boeking is al volledig betaald." }, 409);

  /*
    Blijft binnen: dit gaat naar Stripe, niet naar de browser. `customer_email`
    staat op de sessie zoals de checkout ze aanmaakte; `customer_details` is wat
    Stripe er zelf van maakte na het afrekenen.
  */
  const bookingEmail = booking.customer_email ?? booking.customer_details?.email ?? null;

  const origin = safeOrigin(request);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      /*
        Hetzelfde formulier als de boekingspagina, binnen ons eigen scherm. Zie
        `api/checkout.ts` voor waarom het Elements is en niet `embedded_page`:
        Apple Pay werkt zo ook buiten Safari.
      */
      ui_mode: "elements",
      locale: "nl",
      integration_identifier: INTEGRATION_ID,
      client_reference_id: balance.referentie,
      /*
        Het e-mailadres van de boeking. De klant gaf het bij het bestellen al —
        hem het op de werf laten intikken op een telefoonscherm is precies het
        soort horde waar een betaling op stukloopt. Stripe toont het veld dan
        ingevuld en stuurt zijn ontvangstbewijs naar hetzelfde adres als de
        bevestiging.
      */
      ...(bookingEmail ? { customer_email: bookingEmail } : {}),
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "eur",
            unit_amount: Math.round(balance.saldo * 100),
            product_data: {
              name: `Saldo huur — ${balance.referentie}`,
              description: balance.pakket
                ? `${balance.pakket} · voorschot van ${balance.betaald.toFixed(2)} EUR reeds betaald`
                : `Voorschot van ${balance.betaald.toFixed(2)} EUR reeds betaald`,
            },
          },
        },
      ],
      /*
        Terug naar deze pagina, met beide sessies erbij: de boeking om te tonen
        en de betaling om af te handelen. Stripe vult de tweede zelf in.

        Eén `return_url` in plaats van success/cancel: Bancontact en de wallets
        sturen de betaler even naar hun eigen app, en hierlangs komt hij terug op
        het scherm waar hij vandaan kwam.
      */
      return_url: `${origin}/verhuur/saldo?session_id=${id}&saldo_session={CHECKOUT_SESSION_ID}`,
      metadata: {
        /*
          Waaraan de webhook een saldobetaling herkent. Zonder deze twee zou de
          betaling als een nieuwe boeking in het portaal landen in plaats van de
          bestaande order af te sluiten.
        */
        type: BALANCE_TYPE,
        basis_sessie: id,
        // Zodat de afscherming van de webhook deze sessie doorlaat.
        referentie: balance.referentie,
        totaal_incl_btw: balance.totaal.toFixed(2),
        voorschot_betaald: balance.betaald.toFixed(2),
      },
      expires_at: Math.floor(Date.now() / 1000) + SESSION_MINUTES * 60,
    });

    if (!session.client_secret) {
      console.error(`[saldo] sessie ${session.id} kwam zonder client_secret terug`);
      return json({ error: "Betaling kon niet gestart worden." }, 502);
    }

    return json({
      clientSecret: session.client_secret,
      sessionId: session.id,
      publishableKey,
      bedrag: balance.saldo,
    });
  } catch (error: unknown) {
    // De reden blijft binnen; in de logs staat ze wel. Zelfde afweging als in
    // `api/checkout.ts`: Stripe-foutteksten zeggen iets over onze configuratie.
    const message = error instanceof Error ? error.message : "onbekende fout";
    console.error(`[saldo] sessie voor ${id} niet aangemaakt bij Stripe: ${message}`);
    return json(
      { error: "Betaling kon niet gestart worden. Probeer het opnieuw of bel ons op 03 689 90 65." },
      502,
    );
  }
}

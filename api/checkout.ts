/**
 * Maakt een Stripe Checkout-sessie voor één boeking.
 *
 * Het bedrag wordt hier opnieuw berekend uit de pakketconfiguratie en de
 * gekozen opties; wat de browser als totaal meestuurt wordt genegeerd. Zo kan
 * niemand de prijs in de request aanpassen.
 *
 * De route heeft ook een drempel per IP. Ze stond er lang zonder: elke POST
 * maakte een echte Checkout-sessie aan bij Stripe, ongeauthenticeerd en
 * ongelimiteerd. Dat kost op zich niets, maar met genoeg volume loop je tegen
 * de rate limits van Stripe zelf — en dan breekt het afrekenen voor de klanten
 * die wél willen betalen.
 */
import Stripe from "stripe";
import { checkOne, holdForSession, logAvailabilityFailure } from "../src/lib/availability.js";
import { bookingSummary, newReference, normalizeOptions, toCents } from "../src/lib/booking.js";
import { clientIp, gate, tooManyRequests } from "../src/lib/rateLimit.js";
import {
  configToQuery,
  packageTitle,
  parseConfig,
  rentalWindow,
  serializeDeviceLines,
  toDeviceLines,
} from "../src/lib/verhuur.js";

interface CheckoutBody {
  config?: unknown;
  options?: unknown;
  customer?: unknown;
  delivery?: unknown;
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

/**
 * Maakt van een willekeurige waarde uit de request een platte tekstmap. Alles
 * wat geen object is, en elke waarde binnenin die geen tekst of getal is, valt
 * weg — zo kan een payload met een array of een genest object hieronder geen
 * `.slice` op iets anders dan een string laten stuklopen.
 */
function strings(value: unknown): Record<string, string> {
  const out: Record<string, string> = {};
  if (typeof value !== "object" || value === null || Array.isArray(value)) return out;
  for (const [key, raw] of Object.entries(value as Record<string, unknown>)) {
    if (typeof raw === "string") out[key] = raw;
    else if (typeof raw === "number" && Number.isFinite(raw)) out[key] = String(raw);
  }
  return out;
}

/** Alleen tekst die in Stripe-metadata past (max 500 tekens per waarde). */
function trim(value: string | undefined, max = 480): string {
  return (value ?? "").slice(0, max);
}

/**
 * Label waarmee Stripe deze integratie in het dashboard groepeert, zodat de
 * cijfers van de boekingspagina los te lezen zijn van andere betaalstromen.
 */
const INTEGRATION_ID = "vernast-verhuur-boeking-kwtdrmzp";

/**
 * Hoe lang de toestellen apart blijven terwijl iemand afrekent. Dezelfde waarde
 * gaat naar de Stripe-sessie, zodat de betaaltermijn en de reservatie samen
 * verlopen in plaats van elkaar te overleven.
 */
const HOLD_MINUTES = 30;

export async function POST(request: Request): Promise<Response> {
  const limit = gate(clientIp(request));

  const attempt = limit.attempt();
  if (!attempt.allowed) return tooManyRequests(attempt.retryAfter);

  const key = process.env.STRIPE_SECRET_KEY;
  /*
    De publiceerbare sleutel gaat mee in het antwoord in plaats van via een
    VITE_-variabele de bundel in. Zo hoort ze altijd bij dezelfde omgeving als
    de geheime sleutel hierboven — sandbox op development, live op productie —
    zonder dat een herbouw nodig is als er één verandert.
  */
  const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
  if (!key || !publishableKey) {
    return json({ error: "Stripe is nog niet geconfigureerd op deze omgeving." }, 500);
  }

  let body: CheckoutBody;
  try {
    body = (await request.json()) as CheckoutBody;
  } catch {
    return json({ error: "Ongeldige aanvraag." }, 400);
  }

  /*
    `config`, `customer` en `delivery` komen ongecontroleerd uit de browser.
    `parseConfig` en `trim` gaan ervan uit dat ze met tekst te maken hebben;
    stuurt iemand een array of een genest object, dan klapt dit eruit met een
    500 in plaats van een nette afhandeling. `strings()` maakt er eerst een
    platte tekstmap van.
  */
  const config = parseConfig(new URLSearchParams(strings(body.config)));
  const options = normalizeOptions(body.options);
  const summary = bookingSummary(config, options);

  const customer = strings(body.customer);
  const delivery = strings(body.delivery);

  const email = trim(customer.mail, 200);
  if (!/\S+@\S+\.\S+/.test(email)) {
    return json({ error: "Geen geldig e-mailadres opgegeven." }, 400);
  }

  // Pas hier gaat er echt een sessie naar Stripe.
  const accepted = limit.accept();
  if (!accepted.allowed) return tooManyRequests(accepted.retryAfter);

  const reference = newReference();
  const origin = new URL(request.url).origin;
  const query = configToQuery(config);

  /*
    De huurperiode en de toestellen gaan mee als metadata, zodat de webhook ze
    aan het portaal kan doorgeven. Zonder dit kwam een Stripe-order daar binnen
    met een lege `rental_start_date` en zonder enige koppeling naar materieel —
    en dus onzichtbaar voor elke controle op dubbele boekingen.
  */
  const period = rentalWindow(trim(delivery.date, 20), summary.days);
  const devices = serializeDeviceLines(toDeviceLines(summary.items));
  const lines = toDeviceLines(summary.items);

  /*
    Zonder bruikbare leverdatum valt er niets te controleren, en een boeking die
    we niet kunnen inplannen is erger dan een boeking die niet doorgaat. De
    wizard stuurt altijd een datum mee; komt hier iets anders binnen, dan is er
    aan de andere kant iets stuk.
  */
  if (!period) {
    return json({ error: "Kies eerst een geldige leverdatum." }, 400);
  }

  /*
    De harde controle. De wizard schakelt volle datums al uit, maar dat is
    comfort: tussen het kiezen van een datum en het klikken op betalen kan iemand
    je voor zijn. Dit is de enige controle die echt telt.

    Faalt de oproep zelf — Vernast onbereikbaar, secret verkeerd — dan gaat de
    boeking door. Een bezoeker die niet kan afrekenen omdat een controle even
    niet antwoordt kost meer dan het zeldzame geval dat twee boekingen elkaar
    kruisen; de planner ziet dat in het portaal en kan bijsturen.
  */
  const availability = await checkOne(period.start, summary.days, lines);
  if (availability.answer?.available === false) {
    return json(
      {
        error:
          "Op deze leverdatum zijn onze toestellen al ingepland. Kies een andere datum, of bel ons op 03 689 90 65 — vaak kunnen we alsnog schuiven.",
        code: "niet_beschikbaar",
        blocked_start_dates: availability.answer.blocked_start_dates,
      },
      409,
    );
  }
  logAvailabilityFailure(`checkout ${reference}`, availability);

  const stripe = new Stripe(key);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      /*
        Ingebed in plaats van gehost: het formulier verschijnt als stap in de
        boekingspagina zelf, met de samenvatting en de huisstijl er nog omheen.
        Stripe blijft de betaling afhandelen, wij zien nooit kaartgegevens.
      */
      ui_mode: "embedded_page",
      customer_email: email,
      client_reference_id: reference,
      locale: "nl",
      integration_identifier: INTEGRATION_ID,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "eur",
            // Volledig online betalen rekent het pakket met 5% korting af; de
            // andere keuze rekent enkel de orderbevestiging af, de rest volgt
            // bij levering.
            unit_amount: toCents(summary.payable),
            product_data: {
              name:
                options.payment === "online"
                  ? packageTitle(config)
                  : `Orderbevestiging — ${packageTitle(config)}`,
              /*
                Het blokje bovenaan het betaalformulier is van Stripe; wij
                bepalen enkel wat erin staat. De volledige specificatie stond er
                eerst als omschrijving onder, maar die herhaalt woordelijk het
                overzicht dat rechts naast het formulier al staat. Wat overblijft
                is logo, pakketnaam en bedrag.

                Alleen bij betalen-bij-levering blijft er tekst staan: dan is het
                bedrag in beeld niet het totaal, en dat verschil hoort de klant
                te zien vóór hij afrekent.
              */
              images: [`${origin}/verhuur/logo-horizontal-black.png`],
              ...(options.payment === "online"
                ? {}
                : {
                    description: `Saldo ${(summary.netTotal - summary.payable).toFixed(
                      2,
                    )} EUR te betalen bij levering`,
                  }),
            },
          },
        },
      ],
      // Bancontact, iDEAL en Klarna sturen de bezoeker even naar hun eigen app
      // of bank; hierlangs komt die terug op dezelfde boekingspagina.
      return_url: `${origin}/verhuur/boeking?${query}&session_id={CHECKOUT_SESSION_ID}`,
      metadata: {
        referentie: reference,
        pakket: trim(packageTitle(config)),
        betaalwijze: options.payment,
        totaal: summary.netTotal.toFixed(2),
        korting: summary.discount.toFixed(2),
        nu_betaald: summary.payable.toFixed(2),
        saldo_bij_levering: (summary.netTotal - summary.payable).toFixed(2),
        regels: trim(summary.lines.map((l) => `${l.l}: ${l.inc ? "inbegrepen" : l.v}`).join(" | ")),
        klant: trim(customer.name, 120),
        klanttype: trim(customer.type, 20),
        bedrijf: trim(customer.company, 120),
        btw_nummer: trim(customer.vat, 40),
        telefoon: trim(customer.tel, 40),
        werfadres: trim(`${customer.addr ?? ""} ${customer.post ?? ""}`.trim(), 200),
        leverdatum: trim(delivery.date, 20),
        tijdslot: trim(delivery.slot, 30),
        huur_start: period.start,
        huur_eind: period.end,
        huurdagen: String(summary.days),
        toestellen: trim(devices),
      },
      /*
        Stripe-sessies leven standaard 24 uur. Zo lang toestellen apart houden
        voor iemand die waarschijnlijk niet terugkomt is te streng; een half uur
        loopt gelijk met de hold hieronder, zodat er maar één vervaltermijn is.
      */
      expires_at: Math.floor(Date.now() / 1000) + HOLD_MINUTES * 60,
    });

    /*
      Vanaf hier liggen de toestellen apart tot de betaling rond is of de sessie
      vervalt. Bewust ná het aanmaken van de sessie: zonder sessie-ID valt er
      niets vrij te geven, en een hold die blijft hangen is erger dan geen hold.
    */
    const hold = await holdForSession({
      stripeSessionId: session.id,
      orderNumber: reference,
      start: period.start,
      days: summary.days,
      items: lines,
      minutes: HOLD_MINUTES,
    });
    logAvailabilityFailure(`hold ${session.id}`, hold);

    return json({ clientSecret: session.client_secret, publishableKey, reference });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Onbekende fout bij Stripe.";
    return json({ error: `Betaling kon niet gestart worden: ${message}` }, 502);
  }
}

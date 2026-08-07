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

/**
 * Harde spatie (U+00A0) als productnaam. Stripe eist een niet-lege `name` op
 * elke line item, maar rendert deze als niets — zo blijft er in het blokje
 * boven het betaalformulier enkel het logo en het bedrag over.
 */
const NO_LABEL = " ";

/**
 * Hosts die de terugkeer-URL na het betalen mogen bepalen.
 *
 * `new URL(request.url).origin` komt uit de Host-header. Vercel routeert enkel
 * domeinen die aan het project hangen, dus er valt hier weinig binnen te
 * smokkelen — maar de URL waar Stripe de betaler naartoe stuurt is nu eenmaal
 * niets om op een header te bouwen. Wat niet in de lijst staat, valt terug op
 * het canonieke domein.
 */
const ALLOWED_HOSTS = [
  // Preview-deploys draaien op een wisselende naam onder dit domein en moeten
  // naar zichzelf terugkeren, anders test je de boeking op productie.
  /^([a-z0-9-]+\.)*vercel\.app$/,
  /^([a-z0-9-]+\.)*bouwdrogerservice\.be$/,
];

/** Waar we op terugvallen als de Host-header niet herkend wordt. */
const CANONICAL_ORIGIN = "https://bouwdroger.vercel.app";

function safeOrigin(request: Request): string {
  const url = new URL(request.url);
  const known = ALLOWED_HOSTS.some((pattern) => pattern.test(url.hostname));
  return known ? url.origin : CANONICAL_ORIGIN;
}

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
  const origin = safeOrigin(request);
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
              /*
                Het blokje bovenaan het betaalformulier is van Stripe; wij vullen
                enkel de line item die het toont. Daar stond eerst de volledige
                pakketnaam en de specificatie onder de prijs — allebei woordelijk
                hetzelfde als het overzicht dat rechts naast het formulier staat.
                Wat overblijft is het logo en het bedrag.

                `name` is verplicht en mag niet leeg zijn; Stripe weigert een
                gewone spatie expliciet. Een harde spatie komt er wel door en
                rendert als niets. Zonder dat foefje is er geen manier om die
                regel weg te krijgen binnen embedded Checkout.
              */
              name: NO_LABEL,
              images: [`${origin}/verhuur/logo-horizontal-black.png`],
              /*
                Eén uitzondering: kiest de klant om bij levering te betalen, dan
                is het bedrag in beeld niet het totaal. Dat verschil hoort hij te
                zien vóór hij afrekent, niet op de factuur erna.
              */
              ...(options.payment === "online"
                ? {}
                : {
                    description: `Orderbevestiging — saldo ${(
                      summary.netTotal - summary.payable
                    ).toFixed(2)} EUR bij levering`,
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
    /*
      De reden blijft binnen. Stripe zet in zijn foutmeldingen dingen als welke
      betaalmethodes op het account aan staan of welke parameter geweigerd werd;
      dat is configuratie van ons, geen informatie waar een bezoeker iets mee
      kan. In de logs staat ze wel, want daar moet ze te vinden zijn.
    */
    const message = error instanceof Error ? error.message : "onbekende fout";
    console.error(`[checkout] sessie ${reference} niet aangemaakt bij Stripe: ${message}`);
    return json(
      { error: "Betaling kon niet gestart worden. Probeer het opnieuw of bel ons op 03 689 90 65." },
      502,
    );
  }
}

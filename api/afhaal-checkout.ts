/**
 * Maakt een Stripe Checkout-sessie voor één afhaalreservatie.
 *
 * De afhaalpagina kende tot nu toe maar één afloop: reserveren en achteraf een
 * factuur. Terwijl de toestelpagina er al bij stond met "5% korting bij online
 * betalen" — een belofte die nergens uitkwam, want er ging niets naar Stripe.
 *
 * Dezelfde regels als `api/checkout.ts` voor een pakket: het bedrag wordt hier
 * herrekend uit de gepubliceerde tarieven (wat de browser meestuurt telt niet
 * mee), de toestellen worden vastgehouden zolang de betaling loopt, en de
 * beschikbaarheid wordt gecontroleerd vóór er een sessie ontstaat.
 *
 * En sinds kort ook hetzelfde betaalscherm. Dit was een hosted Checkout-pagina:
 * de bezoeker verliet de site, zag een tweede huisstijl en een tweede
 * samenvatting van zijn bestelling, en Apple Pay verscheen daar enkel in Safari.
 * Nu draait ook deze betaling op `ui_mode: "elements"` binnen onze eigen pagina,
 * met dezelfde knoppenrij en hetzelfde overzicht als een pakketboeking.
 */
import Stripe from "stripe";
import { checkOne, holdForSession, logAvailabilityFailure } from "../src/lib/availability.js";
import { pickupDeviceLines, pickupLabel, pickupCounts } from "../src/lib/afhalen.js";
import { newReference, ONLINE_DISCOUNT, VAT_RATE, toCents } from "../src/lib/booking.js";
import { releaseSession } from "../src/lib/checkoutSession.js";
import { afhaalOrder, type AfhaalOrder } from "../src/lib/orderIntake.js";
import { safeOrigin } from "../src/lib/origin.js";
import { clientIp, gate, rateLimit, tooManyRequests } from "../src/lib/rateLimit.js";
import { rentalWindow, serializeDeviceLines } from "../src/lib/verhuur.js";

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

/** Zelfde label als de pakketcheckout, zodat Stripe de stromen apart groepeert. */
const INTEGRATION_ID = "vernast-verhuur-boeking-kwtdrmzp";

/** Hoe lang de toestellen apart blijven terwijl iemand afrekent. */
const HOLD_MINUTES = 30;

/** Hoeveel holds één IP binnen die termijn mag laten staan; zie api/checkout.ts. */
const MAX_HOLDS_PER_IP = 10;

/*
  Waar Stripe de betaler naartoe mag terugsturen: `safeOrigin` uit
  `src/lib/origin.ts`, dezelfde die `api/checkout.ts` gebruikt.

  Hier stond een eigen kopie van die functie mét een eigen hostlijst. Twee
  allowlists voor hetzelfde oordeel is er één te veel: wie er straks een domein
  aan toevoegt of juist uit haalt, doet dat aan één van de twee, en dan keert de
  ene betaalflow terug naar een adres dat de andere niet meer vertrouwt.
*/

function round(amount: number): number {
  return Math.round(amount * 100) / 100;
}

/** Alleen tekst die in Stripe-metadata past. */
function trim(value: string | null | undefined, max = 480): string {
  return (value ?? "").slice(0, max);
}

/**
 * Wat de klant online betaalt: het volledige huurbedrag met 5% korting, bruto.
 * Bij afhalen is er geen voorschot en geen saldo achteraf — hij betaalt alles
 * ineens, of hij kiest voor de factuur en komt hier niet.
 */
function pickupTotals(order: AfhaalOrder) {
  const discount = round(order.summary.net * ONLINE_DISCOUNT);
  const net = round(order.summary.net - discount);
  const vat = round(net * VAT_RATE);
  return { discount, net, vat, gross: round(net + vat) };
}

export async function POST(request: Request): Promise<Response> {
  const ip = clientIp(request);
  const limit = gate(ip);

  const attempt = limit.attempt();
  if (!attempt.allowed) return tooManyRequests(attempt.retryAfter);

  const key = process.env.STRIPE_SECRET_KEY;
  /*
    De publiceerbare sleutel gaat mee in het antwoord in plaats van via een
    VITE_-variabele de bundel in — zo hoort ze altijd bij dezelfde omgeving als
    de geheime sleutel hierboven. Zie `api/checkout.ts`.
  */
  const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
  if (!key || !publishableKey) {
    return json({ error: "Stripe is nog niet geconfigureerd op deze omgeving." }, 500);
  }

  let body: { data?: unknown; previousSessionId?: unknown };
  try {
    body = (await request.json()) as { data?: unknown; previousSessionId?: unknown };
  } catch {
    return json({ error: "Ongeldige aanvraag." }, 400);
  }

  const data = body.data;
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return json({ error: "Geen ordergegevens ontvangen." }, 400);
  }

  const order = afhaalOrder(data as Record<string, unknown>);

  if (!order.lines.length) return json({ error: "Kies eerst minstens één toestel." }, 400);
  if (!order.date) return json({ error: "Kies een afhaaldatum vanaf vandaag." }, 400);
  if (!order.firstName) return json({ error: "Vul uw naam in." }, 400);
  if (!order.phone) return json({ error: "Vul uw telefoonnummer in." }, 400);
  if (!/\S+@\S+\.\S+/.test(order.email)) {
    return json({ error: "Geen geldig e-mailadres opgegeven." }, 400);
  }
  if (order.customerType === "zakelijk" && (!order.company || !order.vatNumber)) {
    return json({ error: "Vul uw bedrijfsnaam en btw-nummer in." }, 400);
  }

  // Pas hier gaat er echt een sessie naar Stripe.
  const accepted = limit.accept();
  if (!accepted.allowed) return tooManyRequests(accepted.retryAfter);

  const period = rentalWindow(order.date, order.days);
  if (!period) return json({ error: "Kies een geldige afhaaldatum." }, 400);

  const devices = pickupDeviceLines(order.lines);
  const stripe = new Stripe(key);

  /*
    Eerst de vorige poging van deze bezoeker opruimen, dan pas kijken wat vrij
    is. Sinds het betaalformulier in onze eigen pagina staat, kan hij zonder
    pagina-lading terug naar zijn selectie en opnieuw op betalen klikken; zonder
    dit legt elke poging een tweede hold op dezelfde toestellen en meldt de
    controle hieronder dat zijn eigen reservatie in de weg staat.
  */
  await releaseSession(stripe, body.previousSessionId, order.email, "nieuwe poging");

  /*
    De harde controle. Faalt de oproep zelf, dan gaat de reservatie door: een
    klant die niet kan afrekenen omdat een controle even niet antwoordt kost meer
    dan het zeldzame geval dat twee reservaties elkaar kruisen.
  */
  if (devices.length) {
    const availability = await checkOne(period.start, order.days, devices);
    if (availability.answer?.available === false) {
      return json(
        {
          error:
            "Op die datum staan deze toestellen al ingepland. Kies een andere afhaaldatum, of bel ons op 03 689 90 65.",
          code: "niet_beschikbaar",
        },
        409,
      );
    }
    logAvailabilityFailure(`afhaal-checkout ${period.start}`, availability);
  }

  const holds = rateLimit(`hold:${ip}`, MAX_HOLDS_PER_IP, HOLD_MINUTES * 60_000);
  if (!holds.allowed) return tooManyRequests(holds.retryAfter);

  const totals = pickupTotals(order);
  const reference = newReference();
  const origin = safeOrigin(request);
  const counts = pickupCounts(order.lines);
  const label = pickupLabel(order.lines);

  /*
    De selectie gaat mee terug in de URL waar Stripe de betaler naartoe stuurt.
    Loopt de betaling mis, dan staat de afhaalpagina er weer met dezelfde
    toestellen, periode en datum in plaats van leeg — precies de velden die
    `parseSelection` en de presets van die pagina lezen.
  */
  const selection = order.lines.map((line) => `${line.product.key}:${line.qty}`).join(",");
  const query = new URLSearchParams({
    d: selection,
    days: String(order.days),
    date: order.date,
    slot: order.slot,
  });

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      /*
        Zelfde keuze als bij een pakket: wij plaatsen de knoppenrij en het
        formulier binnen onze eigen pagina. Kaartgegevens blijven in de iframes
        van Stripe — die zien wij nooit — maar Apple Pay werkt hierdoor ook
        buiten Safari, en de klant blijft op bouwdrogerservice.be.
      */
      ui_mode: "elements",
      customer_email: order.email,
      client_reference_id: reference,
      locale: "nl",
      integration_identifier: INTEGRATION_ID,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "eur",
            // Bruto, net als bij een pakket: de catalogusprijzen staan excl.
            // btw en Stripe int wat de klant effectief betaalt.
            unit_amount: toCents(totals.gross),
            /*
              Sinds het betaalformulier in onze eigen pagina staat, ziet de klant
              deze naam, omschrijving en afbeelding niet meer op zijn scherm —
              het overzicht rechts op de afhaalpagina doet dat werk. Ze komen wel
              op het ontvangstbewijs van Stripe en in het dashboard terecht, en
              daar hoort iets leesbaars te staan.
            */
            product_data: {
              name: trim(`Afhaalreservatie — ${label}`, 250),
              description: trim(
                `${order.days} dagen · afhalen op ${order.date} (${order.slot}) in Aartselaar · 5% online korting`,
                500,
              ),
              images: [`${origin}/verhuur/checkout-merk.png`],
            },
          },
        },
      ],
      // Bancontact, iDEAL en Klarna sturen de bezoeker even naar hun eigen app
      // of bank; hierlangs komt die terug op de afhaalpagina.
      return_url: `${origin}/verhuur/afhalen?${query}&session_id={CHECKOUT_SESSION_ID}`,
      /*
        Wat de webhook en de terugkeerpagina nodig hebben om hier een order van
        te maken. `type: afhaal` is het onderscheid: zonder die sleutel zou
        `sessionToVernast` er een levering van maken, met een chauffeur die naar
        een werf rijdt waar niemand hem verwacht.
      */
      metadata: {
        type: "afhaal",
        referentie: reference,
        betaalwijze: "online",
        machine: trim(label, 200),
        totaal: totals.net.toFixed(2),
        korting: totals.discount.toFixed(2),
        btw: totals.vat.toFixed(2),
        totaal_incl_btw: totals.gross.toFixed(2),
        nu_betaald: totals.gross.toFixed(2),
        saldo_bij_levering: "0.00",
        klant: trim(`${order.firstName} ${order.lastName}`.trim(), 120),
        klanttype: order.customerType,
        bedrijf: trim(order.company, 120),
        btw_nummer: trim(order.vatNumber, 40),
        telefoon: trim(order.phone, 40),
        werfadres: trim(order.address, 200),
        werf_straat: trim(order.address, 150),
        leverdatum: order.date,
        tijdslot: trim(`Afhalen ${order.slot}`, 60),
        huur_start: period.start,
        huur_eind: period.end,
        huurdagen: String(order.days),
        drogers: String(counts.drogers),
        ventilatoren: String(counts.ventilatoren),
        verwarming: String(counts.verwarming),
        toestellen: trim(serializeDeviceLines(devices)),
        regels: trim(
          [`AFHALING in het magazijn (geen levering) — ${order.slot}.`, `Toestellen: ${label}.`, order.notes]
            .filter(Boolean)
            .join(" "),
        ),
      },
      expires_at: Math.floor(Date.now() / 1000) + HOLD_MINUTES * 60,
    });

    if (devices.length) {
      const hold = await holdForSession({
        stripeSessionId: session.id,
        orderNumber: reference,
        start: period.start,
        days: order.days,
        items: devices,
        minutes: HOLD_MINUTES,
      });
      logAvailabilityFailure(`hold ${session.id}`, hold);
    }

    /*
      Het sessie-ID gaat mee terug zodat de pagina het bij een volgende poging
      kan meesturen en deze hold dan opgeruimd wordt. Het zit sowieso al in de
      `client_secret`, dus dit geeft niets prijs wat de browser niet al heeft.
    */
    return json({
      clientSecret: session.client_secret,
      sessionId: session.id,
      publishableKey,
      reference,
    });
  } catch (error: unknown) {
    // De reden blijft binnen: Stripe zet er configuratie van ons in.
    const message = error instanceof Error ? error.message : "onbekende fout";
    console.error(`[afhaal-checkout] sessie ${reference} niet aangemaakt bij Stripe: ${message}`);
    return json(
      { error: "Betaling kon niet gestart worden. Probeer het opnieuw of bel ons op 03 689 90 65." },
      502,
    );
  }
}

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
 * Verschil met een pakket: dit is een hosted Checkout-pagina in plaats van een
 * betaalformulier in onze eigen pagina. Een afhaalreservatie is een korte,
 * losse aankoop; daar weegt een tweede eigen betaalscherm niet op tegen wat het
 * kost om het te onderhouden.
 */
import Stripe from "stripe";
import { checkOne, holdForSession, logAvailabilityFailure } from "../src/lib/availability.js";
import { pickupDeviceLines, pickupLabel, pickupCounts } from "../src/lib/afhalen.js";
import { newReference, ONLINE_DISCOUNT, VAT_RATE, toCents } from "../src/lib/booking.js";
import { afhaalOrder, type AfhaalOrder } from "../src/lib/orderIntake.js";
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

const ALLOWED_HOSTS = [
  /^([a-z0-9-]+\.)*vercel\.app$/,
  /^([a-z0-9-]+\.)*bouwdrogerservice\.be$/,
];

const CANONICAL_ORIGIN = "https://bouwdroger.vercel.app";
const LOCAL_HOSTS = /^(localhost|127\.0\.0\.1|\[::1\])$/;
const DEPLOYED = new Set(["production", "preview"]);

/** Waar Stripe de betaler naartoe mag terugsturen; zie api/checkout.ts. */
function safeOrigin(request: Request): string {
  const url = new URL(request.url);
  const deployed = DEPLOYED.has(process.env.VERCEL_ENV ?? "");
  if (!deployed && LOCAL_HOSTS.test(url.hostname)) return url.origin;
  const known = ALLOWED_HOSTS.some((pattern) => pattern.test(url.hostname));
  return known ? url.origin : CANONICAL_ORIGIN;
}

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
  if (!key) {
    return json({ error: "Stripe is nog niet geconfigureerd op deze omgeving." }, 500);
  }

  let body: { data?: unknown };
  try {
    body = (await request.json()) as { data?: unknown };
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
  const stripe = new Stripe(key);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
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
      success_url: `${origin}/verhuur/afhalen?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/verhuur/afhalen`,
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

    return json({ url: session.url, sessionId: session.id, reference });
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

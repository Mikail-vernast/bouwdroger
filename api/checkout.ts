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
import { bookingSummary, newReference, normalizeOptions, toCents } from "../src/lib/booking.js";
import { clientIp, gate, tooManyRequests } from "../src/lib/rateLimit.js";
import { configToQuery, packageSpecLine, packageTitle, parseConfig } from "../src/lib/verhuur.js";

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

export async function POST(request: Request): Promise<Response> {
  const limit = gate(clientIp(request));

  const attempt = limit.attempt();
  if (!attempt.allowed) return tooManyRequests(attempt.retryAfter);

  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
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

  const stripe = new Stripe(key);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      client_reference_id: reference,
      locale: "nl",
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
              description:
                options.payment === "online"
                  ? `${packageSpecLine(config)} · ${summary.weeks} weken huur`
                  : `${packageSpecLine(config)} · ${summary.weeks} weken huur · saldo ${(
                      summary.netTotal - summary.payable
                    ).toFixed(2)} EUR bij levering`,
            },
          },
        },
      ],
      success_url: `${origin}/verhuur/boeking?${query}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/verhuur/boeking?${query}&betaling=geannuleerd`,
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
      },
    });

    return json({ url: session.url, reference });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Onbekende fout bij Stripe.";
    return json({ error: `Betaling kon niet gestart worden: ${message}` }, 502);
  }
}

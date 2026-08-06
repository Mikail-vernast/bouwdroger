/**
 * Maakt een Stripe Checkout-sessie voor één boeking.
 *
 * Het bedrag wordt hier opnieuw berekend uit de pakketconfiguratie en de
 * gekozen opties; wat de browser als totaal meestuurt wordt genegeerd. Zo kan
 * niemand de prijs in de request aanpassen.
 */
import Stripe from "stripe";
import { bookingSummary, newReference, normalizeOptions, toCents } from "../src/lib/booking";
import { configToQuery, packageSpecLine, packageTitle, parseConfig } from "../src/lib/verhuur";

interface CheckoutBody {
  config?: Record<string, string>;
  options?: unknown;
  customer?: Record<string, string>;
  delivery?: { date?: string; slot?: string };
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

/** Alleen tekst die in Stripe-metadata past (max 500 tekens per waarde). */
function trim(value: string | undefined, max = 480): string {
  return (value ?? "").slice(0, max);
}

export async function POST(request: Request): Promise<Response> {
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

  const config = parseConfig(new URLSearchParams(body.config ?? {}));
  const options = normalizeOptions(body.options);
  const summary = bookingSummary(config, options);

  const email = trim(body.customer?.mail, 200);
  if (!/\S+@\S+\.\S+/.test(email)) {
    return json({ error: "Geen geldig e-mailadres opgegeven." }, 400);
  }

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
        klant: trim(body.customer?.name, 120),
        klanttype: trim(body.customer?.type, 20),
        bedrijf: trim(body.customer?.company, 120),
        btw_nummer: trim(body.customer?.vat, 40),
        telefoon: trim(body.customer?.tel, 40),
        werfadres: trim(`${body.customer?.addr ?? ""} ${body.customer?.post ?? ""}`.trim(), 200),
        leverdatum: trim(body.delivery?.date, 20),
        tijdslot: trim(body.delivery?.slot, 30),
      },
    });

    return json({ url: session.url, reference });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Onbekende fout bij Stripe.";
    return json({ error: `Betaling kon niet gestart worden: ${message}` }, 502);
  }
}

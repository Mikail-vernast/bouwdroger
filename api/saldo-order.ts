/**
 * Een betaallink voor het saldo van een order die alleen in het portaal bestaat.
 *
 * `api/saldo.ts` rekent het saldo af van een webshopboeking en vindt alles wat
 * het nodig heeft in de Stripe-sessie van die boeking. Een reservering of een
 * order die iemand met de hand in het Vernast-portaal zette, heeft zo'n sessie
 * niet — en dus ook geen QR die de technieker op de werf kon tonen. Dit
 * endpoint vult dat gat: het portaal vraagt hier een betaalsessie aan en toont
 * de URL als QR.
 *
 * WIE ROEPT DIT AAN
 * Alleen de Vernast-server (een edge function), nooit een browser. Daarom geen
 * CORS en een gedeeld secret als poort — hetzelfde `VERNAST_WEBHOOK_SECRET` dat
 * deze site al naar Vernast meestuurt. Het bedrag komt dus wél uit de aanvraag:
 * de afzender is het portaal, dat het saldo van de order zelf kent. Zonder
 * geldig secret beslist niemand hier iets.
 *
 * WAAROM DE GEHOSTE PAGINA VAN STRIPE
 * `api/saldo.ts` gebruikt Elements binnen onze eigen pagina, omdat de klant daar
 * al op onze saldopagina staat. Hier is er geen pagina met iets te tonen: het
 * portaal kent de order, wij niet. De QR wijst rechtstreeks naar Stripe, de
 * klant betaalt op zijn eigen telefoon en komt daarna op een bedankpagina.
 *
 * De betaling zelf landt via `api/stripe-webhook.ts` (`metadata.type ===
 * "saldo_order"`) bij de zusterfunctie `bouwdroger-saldo-paid`.
 */
import Stripe from "stripe";
import { safeOrigin } from "../src/lib/origin.js";
import { clientIp, gate, tooManyRequests } from "../src/lib/rateLimit.js";
import { ORDER_BALANCE_TYPE } from "../src/lib/vernastOrder.js";

/** Zie `api/saldo.ts`: een uur voor een klant op de werf, geen link die morgen nog werkt. */
const SESSION_MINUTES = 60;

/** Zelfde label als de andere betaalstromen; zie `api/checkout.ts`. */
const INTEGRATION_ID = "vernast-verhuur-boeking-kwtdrmzp";

/**
 * Bovengrens op één saldo. Ruim boven de duurste huur die we kennen, en een
 * vangnet voor een tikfout in het portaal (een bedrag in centen in plaats van
 * euro) voordat die als betaallink bij een klant belandt.
 */
const MAX_AMOUNT = 10_000;

/**
 * Drempel per IP. Het secret is de echte poort; dit houdt enkel een
 * op hol geslagen aanroeper weg van de Stripe-API. Ruim, omdat alle aanvragen
 * van dezelfde paar Supabase-adressen komen.
 */
const MAX_ACCEPTED = 30;
const MAX_ATTEMPTS = 60;

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

/**
 * Vergelijkt het secret in constante tijd.
 *
 * Beide kanten eerst door SHA-256: dan zijn ze altijd even lang en lekt ook de
 * lengte van het echte secret niet via de looptijd. `crypto.subtle` bestaat in
 * de Worker, in Node en in de tests; `timingSafeEqual` van Node niet overal.
 */
async function secretMatches(given: string, expected: string): Promise<boolean> {
  const encoder = new TextEncoder();
  const [a, b] = await Promise.all([
    crypto.subtle.digest("SHA-256", encoder.encode(given)),
    crypto.subtle.digest("SHA-256", encoder.encode(expected)),
  ]);
  const x = new Uint8Array(a);
  const y = new Uint8Array(b);
  let diff = 0;
  for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
  return diff === 0;
}

interface SaldoOrderRequest {
  orderId: string;
  orderNumber: string;
  amountDue: number;
  email: string | null;
}

/** Een bedrag in euro met hoogstens twee decimalen — 12.345 wordt geweigerd, niet afgerond. */
function validAmount(value: unknown): value is number {
  if (typeof value !== "number" || !Number.isFinite(value)) return false;
  if (value <= 0 || value > MAX_AMOUNT) return false;
  // Op de cent vergelijken met een marge voor floating point: 19.99 * 100 is
  // 1998.9999999999998, en dat is wel degelijk twee decimalen.
  return Math.abs(value * 100 - Math.round(value * 100)) < 1e-6;
}

/** De body narrowen; alles buiten deze vier velden valt stil weg. */
function parse(body: unknown): SaldoOrderRequest | null {
  if (!body || typeof body !== "object") return null;
  const raw = body as Record<string, unknown>;

  const orderId = typeof raw.order_id === "string" ? raw.order_id.trim() : "";
  if (!UUID.test(orderId)) return null;

  const orderNumber = typeof raw.order_number === "string" ? raw.order_number.trim() : "";
  if (!orderNumber || orderNumber.length > 100) return null;

  if (!validAmount(raw.amount_due)) return null;

  let email: string | null = null;
  if (raw.email !== null && raw.email !== undefined) {
    if (typeof raw.email !== "string") return null;
    const trimmed = raw.email.trim();
    // Een leeg adres is "geen adres", geen fout: het portaal kent niet van elke
    // reservering een e-mailadres. Een ongeldig adres wel — Stripe weigert dat
    // anders zelf, met een 502 die naar een storing lijkt.
    if (trimmed) {
      if (trimmed.length > 254 || !EMAIL.test(trimmed)) return null;
      email = trimmed;
    }
  }

  return { orderId, orderNumber, amountDue: raw.amount_due, email };
}

export async function POST(request: Request): Promise<Response> {
  const key = process.env.STRIPE_SECRET_KEY;
  const secret = process.env.VERNAST_WEBHOOK_SECRET;
  if (!key || !secret) {
    console.error("[saldo-order] STRIPE_SECRET_KEY of VERNAST_WEBHOOK_SECRET ontbreekt.");
    return json({ error: "Niet geconfigureerd." }, 500);
  }

  const limit = gate(`saldo-order:${clientIp(request)}`, MAX_ACCEPTED, MAX_ATTEMPTS);
  const attempt = limit.attempt();
  if (!attempt.allowed) return tooManyRequests(attempt.retryAfter);

  // Ontbrekend of fout: hetzelfde antwoord, zodat het verschil niets verraadt.
  const given = request.headers.get("x-webhook-secret") ?? "";
  if (!(await secretMatches(given, secret))) return json({ error: "Unauthorized" }, 401);

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Ongeldige aanvraag." }, 400);
  }

  const input = parse(body);
  if (!input) return json({ error: "Ongeldige aanvraag." }, 400);

  const accepted = limit.accept();
  if (!accepted.allowed) return tooManyRequests(accepted.retryAfter);

  /*
    De aanvraag komt van een server, niet van een browser: `safeOrigin` leest
    de host waarop dit endpoint aangeroepen werd. Op productie is dat het eigen
    domein, op een preview de preview — en een onbekende host valt terug op het
    canonieke domein.
  */
  const origin = safeOrigin(request);
  const metadata = {
    type: ORDER_BALANCE_TYPE,
    vernast_order_id: input.orderId,
    order_number: input.orderNumber,
  };

  try {
    const stripe = new Stripe(key);
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      locale: "nl",
      integration_identifier: INTEGRATION_ID,
      client_reference_id: input.orderNumber,
      // Stripe vult het veld dan in en stuurt zijn ontvangstbewijs daarheen —
      // geen e-mailadres intikken op een telefoon op de werf.
      ...(input.email ? { customer_email: input.email } : {}),
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "eur",
            unit_amount: Math.round(input.amountDue * 100),
            product_data: { name: `Saldo huur — ${input.orderNumber}` },
          },
        },
      ],
      success_url: `${origin}/verhuur/saldo/betaald`,
      cancel_url: `${origin}/verhuur/saldo/niet-betaald`,
      // Waaraan de webhook deze betaling herkent, op de sessie én op de
      // betaling zelf — die laatste is wat in het Stripe-dashboard bij een
      // terugbetaling of geschil zichtbaar is.
      metadata,
      payment_intent_data: { metadata },
      expires_at: Math.floor(Date.now() / 1000) + SESSION_MINUTES * 60,
    });

    if (!session.url) {
      console.error(`[saldo-order] sessie ${session.id} kwam zonder url terug`);
      return json({ error: "Betaling kon niet gestart worden." }, 502);
    }

    return json({ url: session.url, session_id: session.id, expires_at: session.expires_at });
  } catch (error: unknown) {
    // De reden blijft binnen; Stripe-foutteksten zeggen iets over onze configuratie.
    const message = error instanceof Error ? error.message : "onbekende fout";
    console.error(`[saldo-order] sessie voor ${input.orderNumber} niet aangemaakt: ${message}`);
    return json({ error: "Betaling kon niet gestart worden." }, 502);
  }
}

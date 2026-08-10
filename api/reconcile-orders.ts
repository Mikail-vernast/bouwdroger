/**
 * Vangnet: levert betaalde boekingen af die het portaal nooit bereikt hebben.
 *
 * Er lopen al twee wegen naar `bouwdroger_orders` — de Stripe-webhook en de
 * terugkeer van de betaler, zie `src/lib/vernastOrder.ts`. Samen dekken ze bijna
 * alles, maar niet alles. Wie zijn tab sluit vlak na het betalen komt nooit
 * terug, en als het portaal juist op dat moment plat ligt geeft Stripe zijn
 * pogingen na een paar dagen op. Dan staat er een betaalde boeking bij Stripe
 * waar niemand van weet: de klant heeft betaald, wij plannen niets in.
 *
 * Deze route loopt de recente betaalde sessies na en biedt ze opnieuw aan. Dat
 * mag botweg voor álle sessies in het venster: de webhook aan de Vernast-kant is
 * idempotent op `(source, external_id)`, dus wat er al staat blijft ongemoeid.
 * Simpeler dan eerst gaan vragen wat ontbreekt, en er valt niets te missen.
 *
 * Draait als dagelijkse cron; zie de `crons` in `vercel.json`.
 */
import Stripe from "stripe";
import { isReference } from "../src/lib/booking.js";
import { deliverOrder } from "../src/lib/vernastOrder.js";

/**
 * Hoe ver terug we kijken. Ruimer dan het venster waarin Stripe zijn events
 * herhaalt (ongeveer drie dagen), zodat een storing die precies zo lang duurt
 * er niet net buiten valt.
 */
const WINDOW_DAYS = 7;

/** Bovengrens op het aantal sessies per run; ruim boven ons volume. */
const MAX_SESSIONS = 100;

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

export async function GET(request: Request): Promise<Response> {
  /*
    Vercel stuurt `Authorization: Bearer $CRON_SECRET` mee bij een cron. Zonder
    die controle kan iedereen die de URL kent onze Stripe-API laten leeglopen.
    Ontbreekt het secret in de omgeving, dan gaat de route dicht in plaats van
    open — een vangnet dat iedereen mag aanroepen is zelf een gat.
  */
  const secret = process.env.CRON_SECRET;
  if (!secret) return json({ error: "CRON_SECRET ontbreekt." }, 500);
  if (request.headers.get("authorization") !== `Bearer ${secret}`) {
    return json({ error: "Geen toegang." }, 401);
  }

  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return json({ error: "Stripe is nog niet geconfigureerd." }, 500);

  const stripe = new Stripe(key);
  const since = Math.floor(Date.now() / 1000) - WINDOW_DAYS * 86_400;

  let bekeken = 0;
  let afgeleverd = 0;
  let mislukt = 0;

  try {
    for await (const session of stripe.checkout.sessions.list({
      created: { gte: since },
      limit: 100,
    })) {
      if (bekeken >= MAX_SESSIONS) break;
      bekeken += 1;

      if (session.payment_status !== "paid") continue;
      // Zelfde afscherming als elders: alleen sessies van onze eigen checkout.
      if (!isReference(session.client_reference_id) || !isReference(session.metadata?.referentie)) {
        continue;
      }

      if (await deliverOrder(stripe, session, "vangnet")) afgeleverd += 1;
      else mislukt += 1;
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "onbekende fout";
    console.error(`[vangnet] doorlopen mislukt na ${bekeken} sessies: ${message}`);
    return json({ error: "Sessies konden niet doorlopen worden.", bekeken, afgeleverd }, 502);
  }

  // Altijd loggen, ook bij nul: zo is in Vercel te zien dát het vangnet loopt.
  console.log(`[vangnet] ${bekeken} sessies bekeken, ${afgeleverd} afgeleverd, ${mislukt} mislukt`);

  if (mislukt > 0) {
    // 500 zodat een mislukte run opvalt in de cron-geschiedenis in plaats van
    // stil als "geslaagd" weg te zakken.
    return json({ bekeken, afgeleverd, mislukt }, 500);
  }
  return json({ bekeken, afgeleverd, mislukt });
}

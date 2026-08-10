/**
 * Stuurt de dag vóór de levering een herinnering naar de klant.
 *
 * De orders zelf staan in het portaal van Vernast, niet hier — deze site
 * bewaart niets. Wat hier wél ligt, is elke betaalde Stripe-sessie met de
 * leverdatum in de metadata, en dat is genoeg om te weten wie er morgen aan de
 * beurt is. Boekingen die als aanvraag binnenkomen (`api/order.ts`) hebben geen
 * sessie en krijgen dus geen herinnering; die worden nog met de hand ingepland.
 *
 * Draait als dagelijkse cron; zie de `crons` in `vercel.json`.
 */
import Stripe from "stripe";
import { isReference } from "../src/lib/booking.js";
import { sendDeliveryReminderMail } from "../src/lib/mail.js";
import { sessionToVernast } from "../src/lib/vernastOrder.js";

/**
 * Hoe ver terug we sessies ophalen. Ruim, want iemand die twee maanden vooraf
 * boekt heeft een sessie die net zo oud is tegen de tijd dat hij geleverd wordt.
 */
const WINDOW_DAYS = 120;

/** Bovengrens per run; ruim boven ons volume. */
const MAX_SESSIONS = 500;

/**
 * Onthoudt dat de herinnering vertrokken is. Zonder deze vlag stuurt een
 * tweede run op dezelfde dag — een handmatige aanroep, of een cron die Vercel
 * opnieuw aanbiedt — de klant een tweede keer dezelfde mail.
 */
const MAIL_FLAG = "mail_levering";

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

/**
 * De datum van morgen in Belgische tijd, als `YYYY-MM-DD`.
 *
 * De cron draait in UTC. Wie dat verschil negeert, verstuurt de herinnering
 * voor een levering op 1 augustus tijdens de zomer een dag te vroeg of te laat,
 * afhankelijk van het uur waarop de cron staat.
 */
export function tomorrowInBrussels(now: Date): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Brussels",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
  const today = new Date(`${parts}T12:00:00Z`);
  today.setUTCDate(today.getUTCDate() + 1);
  return today.toISOString().slice(0, 10);
}

function meta(session: Stripe.Checkout.Session, key: string): string {
  return session.metadata?.[key]?.trim() ?? "";
}

export async function GET(request: Request): Promise<Response> {
  // Zelfde afscherming als het vangnet: zonder secret gaat de route dicht.
  const secret = process.env.CRON_SECRET;
  if (!secret) return json({ error: "CRON_SECRET ontbreekt." }, 500);
  if (request.headers.get("authorization") !== `Bearer ${secret}`) {
    return json({ error: "Geen toegang." }, 401);
  }

  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return json({ error: "Stripe is nog niet geconfigureerd." }, 500);

  const stripe = new Stripe(key);
  const morgen = tomorrowInBrussels(new Date());
  const since = Math.floor(Date.now() / 1000) - WINDOW_DAYS * 86_400;

  let bekeken = 0;
  let verzonden = 0;
  let overgeslagen = 0;

  try {
    for await (const session of stripe.checkout.sessions.list({
      created: { gte: since },
      limit: 100,
    })) {
      if (bekeken >= MAX_SESSIONS) break;
      bekeken += 1;

      if (session.payment_status !== "paid") continue;
      if (!isReference(session.client_reference_id) || !isReference(session.metadata?.referentie)) {
        continue;
      }
      if (meta(session, "leverdatum") !== morgen) continue;

      if (session.metadata?.[MAIL_FLAG]) {
        overgeslagen += 1;
        continue;
      }

      /*
        Eerst de vlag, dan de mail. Andersom zou een tweede run die begint
        terwijl de eerste nog verstuurt dezelfde klant twee keer bedienen; nu is
        het ergste geval een gemiste herinnering, en dat merkt de klant morgen
        aan de telefoon van de technieker.
      */
      await stripe.checkout.sessions.update(session.id, { metadata: { [MAIL_FLAG]: "1" } });

      const payload = sessionToVernast(session);
      const totaalIncl = Number(meta(session, "totaal_incl_btw"));
      const betaald = (session.amount_total ?? 0) / 100;

      await sendDeliveryReminderMail({
        payload,
        paymentType: meta(session, "betaalwijze") === "online" ? "full" : "deposit",
        // Bij voorkeur het saldo dat de checkout zelf berekende; voor sessies
        // van vóór die metadata het verschil met het totaal incl. btw.
        balanceDue:
          Number(meta(session, "saldo_bij_levering")) ||
          (Number.isFinite(totaalIncl) ? totaalIncl - betaald : 0),
        street: meta(session, "werf_straat") || (payload.address ?? ""),
        zip: meta(session, "werf_postcode"),
        city: meta(session, "werf_gemeente"),
        orderUrl: session.return_url?.replace("{CHECKOUT_SESSION_ID}", session.id) ?? "",
      });
      verzonden += 1;
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "onbekende fout";
    console.error(`[levering-morgen] doorlopen mislukt na ${bekeken} sessies: ${message}`);
    return json({ error: "Sessies konden niet doorlopen worden.", bekeken, verzonden }, 502);
  }

  // Altijd loggen, ook bij nul: zo is te zien dát de cron loopt.
  console.log(
    `[levering-morgen] leverdatum ${morgen}: ${bekeken} sessies bekeken, ${verzonden} verzonden, ${overgeslagen} al gehad`,
  );

  return json({ leverdatum: morgen, bekeken, verzonden, overgeslagen });
}

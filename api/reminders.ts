/**
 * De herinneringen rond een lopende huur, in één dagelijkse run:
 *
 * - de dag vóór de levering: "wij komen morgen" (sjabloon 199)
 * - twee dagen vóór het einde: "verlengen kan nog" (sjabloon 200)
 *
 * Bewust één route voor allebei. Vercel Hobby staat twee cron jobs toe en het
 * vangnet in `reconcile-orders.ts` gebruikt er al één; elke nieuwe herinnering
 * een eigen cron geven loopt binnen de kortste keren tegen die grens. Beide
 * taken lopen bovendien door dezelfde lijst sessies, dus samen scheelt het ook
 * een tweede rondgang langs Stripe.
 *
 * De orders zelf staan in het portaal van Vernast, niet hier — deze site
 * bewaart niets. Wat hier wél ligt, is elke betaalde Stripe-sessie met de
 * lever- en einddatum in de metadata, en dat is genoeg om te weten wie er aan
 * de beurt is. Boekingen die als aanvraag binnenkomen (`api/order.ts`) hebben
 * geen sessie en krijgen dus geen herinnering; die worden nog met de hand
 * ingepland.
 *
 * Draait als dagelijkse cron; zie de `crons` in `vercel.json`.
 */
import Stripe from "stripe";
import { isReference } from "../src/lib/booking.js";
import { sendDeliveryReminderMail, sendExtensionOfferMail } from "../src/lib/mail.js";
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
const LEVERING_FLAG = "mail_levering";

/** Idem voor de verlengmail, twee dagen vóór het einde van de huur. */
const VERLENG_FLAG = "mail_verlengen";

/** Hoeveel dagen vóór het einde van de huur we verlengen aanbieden. */
const VERLENG_VOORUIT = 2;

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
export function daysAheadInBrussels(now: Date, days: number): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Brussels",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
  const target = new Date(`${parts}T12:00:00Z`);
  target.setUTCDate(target.getUTCDate() + days);
  return target.toISOString().slice(0, 10);
}

/** De dag ná vandaag, in Belgische tijd. */
export function tomorrowInBrussels(now: Date): string {
  return daysAheadInBrussels(now, 1);
}

function meta(session: Stripe.Checkout.Session, key: string): string {
  return session.metadata?.[key]?.trim() ?? "";
}

/**
 * De verlengpagina voor deze huur. Het sessie-ID is de sleutel: lang genoeg om
 * niet te raden, en de pagina haalt er de huurgegevens mee op zonder dat de
 * klant iets moet invullen dat hij toch al aan ons gegeven heeft.
 *
 * Het origin komt uit de sessie zelf, zodat dit ook op een preview-deploy of
 * lokaal naar de juiste plek wijst.
 */
function extensionUrl(session: Stripe.Checkout.Session, orderUrl: string): string {
  const base = orderUrl ? new URL(orderUrl).origin : (process.env.VITE_SITE_URL ?? "");
  return `${base.replace(/\/$/, "")}/verhuur/verlengen?session_id=${session.id}`;
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
  const nu = new Date();
  const morgen = tomorrowInBrussels(nu);
  const eindigtBinnenkort = daysAheadInBrussels(nu, VERLENG_VOORUIT);
  const since = Math.floor(Date.now() / 1000) - WINDOW_DAYS * 86_400;

  let bekeken = 0;
  let leveringen = 0;
  let verlengingen = 0;
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
      const levertMorgen = meta(session, "leverdatum") === morgen;
      const huurLooptAf = meta(session, "huur_eind") === eindigtBinnenkort;
      if (!levertMorgen && !huurLooptAf) continue;

      const payload = sessionToVernast(session);
      const orderUrl = session.return_url?.replace("{CHECKOUT_SESSION_ID}", session.id) ?? "";

      /*
        Eerst de vlag, dan de mail. Andersom zou een tweede run die begint
        terwijl de eerste nog verstuurt dezelfde klant twee keer bedienen; nu is
        het ergste geval een gemiste herinnering, en dat merkt de klant aan de
        telefoon van de technieker.
      */
      if (levertMorgen) {
        if (session.metadata?.[LEVERING_FLAG]) {
          overgeslagen += 1;
        } else {
          await stripe.checkout.sessions.update(session.id, {
            metadata: { [LEVERING_FLAG]: "1" },
          });

          const totaalIncl = Number(meta(session, "totaal_incl_btw"));
          const betaald = (session.amount_total ?? 0) / 100;

          await sendDeliveryReminderMail({
            payload,
            paymentType: meta(session, "betaalwijze") === "online" ? "full" : "deposit",
            // Bij voorkeur het saldo dat de checkout zelf berekende; voor
            // sessies van vóór die metadata het verschil met het totaal.
            balanceDue:
              Number(meta(session, "saldo_bij_levering")) ||
              (Number.isFinite(totaalIncl) ? totaalIncl - betaald : 0),
            street: meta(session, "werf_straat") || (payload.address ?? ""),
            zip: meta(session, "werf_postcode"),
            city: meta(session, "werf_gemeente"),
            orderUrl,
          });
          leveringen += 1;
        }
      }

      if (huurLooptAf) {
        if (session.metadata?.[VERLENG_FLAG]) {
          overgeslagen += 1;
        } else {
          await stripe.checkout.sessions.update(session.id, {
            metadata: { [VERLENG_FLAG]: "1" },
          });
          await sendExtensionOfferMail({
            payload,
            extensionUrl: extensionUrl(session, orderUrl),
          });
          verlengingen += 1;
        }
      }
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "onbekende fout";
    console.error(`[herinneringen] doorlopen mislukt na ${bekeken} sessies: ${message}`);
    return json({ error: "Sessies konden niet doorlopen worden.", bekeken, leveringen }, 502);
  }

  // Altijd loggen, ook bij nul: zo is te zien dát de cron loopt.
  console.log(
    `[herinneringen] levering ${morgen} / einde huur ${eindigtBinnenkort}: ` +
      `${bekeken} sessies bekeken, ${leveringen} leveringsmails, ${verlengingen} verlengmails, ${overgeslagen} al gehad`,
  );

  return json({
    levering: morgen,
    einde_huur: eindigtBinnenkort,
    bekeken,
    leveringen,
    verlengingen,
    overgeslagen,
  });
}

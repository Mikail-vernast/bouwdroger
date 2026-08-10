/**
 * Het loslaten van een Stripe-sessie en de hold die eraan hangt.
 *
 * Stond eerst alleen in `api/checkout.ts`, waar het draaide vlak voor er een
 * nieuwe sessie kwam. Dat dekte één van de twee momenten waarop een hold moet
 * verdwijnen: de bezoeker die opnieuw op betalen klikt. Het andere moment —
 * de bezoeker die de betaalstap verlaat en terugkomt op een verse pagina —
 * bleef onbehandeld, en daar blokkeerde hij dan zijn eigen leverdatum mee.
 * Vandaar hier, gedeeld door `api/checkout.ts` en `api/booking-release.ts`.
 */
import type Stripe from "stripe";
import { logAvailabilityFailure, releaseHold } from "./availability.js";
import { isReference } from "./booking.js";

/** Stripe-sessie-ID's zijn `cs_` gevolgd door alfanumerieke tekens. */
export const SESSION_ID = /^cs_[A-Za-z0-9_]{1,255}$/;

/**
 * Laat de sessie vervallen en geeft de toestellen terug.
 *
 * Wie een sessie-ID meestuurt dat niet van onze checkout komt, of dat bij een
 * ander e-mailadres hoort, krijgt hier niets: dan blijft de hold gewoon staan
 * tot hij vanzelf verloopt. Zo kan een sessie-ID dat ergens opgevangen is niet
 * gebruikt worden om andermans reservatie weg te halen.
 *
 * Een betaalde sessie hoort bij een echte boeking; die hold laat de webhook los
 * zodra de order in het portaal staat, niet wij.
 *
 * Faalt er iets, dan is dat niet fataal: zonder opruiming valt de bezoeker terug
 * op het oude gedrag, waarbij de hold na een half uur vanzelf verloopt.
 */
export async function releaseSession(
  stripe: Stripe,
  raw: unknown,
  email: string,
  context: string,
): Promise<boolean> {
  if (typeof raw !== "string" || !SESSION_ID.test(raw)) return false;

  try {
    const previous = await stripe.checkout.sessions.retrieve(raw);
    if (!isReference(previous.client_reference_id) || !isReference(previous.metadata?.referentie)) {
      return false;
    }
    if (previous.customer_email?.toLowerCase() !== email.toLowerCase()) return false;
    if (previous.payment_status === "paid") return false;

    logAvailabilityFailure(`release ${raw} (${context})`, await releaseHold(raw));

    // De sessie zelf mag ook weg: ze is vervangen, en zolang ze openstaat blijft
    // Stripe hem als betaalbaar aanbieden.
    if (previous.status === "open") await stripe.checkout.sessions.expire(raw);
    return true;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "onbekende fout";
    console.error(`[checkout] sessie ${raw} niet opgeruimd (${context}): ${message}`);
    return false;
  }
}

/**
 * Trechterevents van de huurflow doorgeven aan Vernast.
 *
 * Bestaat zodat de browser alleen met deze site praat: de CSP laat geen
 * Supabase-verbinding toe, en het secret dat Vernast vraagt hoort niet in de
 * bundel. De conversie-ID wordt in `funnelArgs` gezet in plaats van uit de
 * aanvraag overgenomen — zo kan deze route geen events op andere conversies
 * schrijven. Zie `src/lib/funnel.ts`.
 *
 * Antwoordt altijd 204, ook als de meting mislukt: een gemiste meting mag de
 * bezoeker nooit iets laten zien.
 */
import { clientIp, rateLimit, tooManyRequests } from "../src/lib/rateLimit.js";
import { funnelArgs } from "../src/lib/funnel.js";
import { sendFunnelEvent } from "../src/lib/availability.js";

const noContent = () => new Response(null, { status: 204, headers: { "cache-control": "no-store" } });

export async function POST(request: Request): Promise<Response> {
  // Eigen teller, niet gate(): die deelt zijn sleutels (`geslaagd:<ip>`) met
  // checkout en aanvraag, en daar mogen er maar 10 per minuut door. Een
  // bezoeker die vlot door de calculator klikt, zou anders zijn eigen
  // betaling op 429 zetten. Ruim: één flow stuurt een tiental events.
  const limit = rateLimit(`funnel:${clientIp(request)}`, 60, 60_000);
  if (!limit.allowed) return tooManyRequests(limit.retryAfter);

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(null, { status: 400 });
  }

  const args = funnelArgs(body);
  if (!args) return new Response(null, { status: 400 });

  const result = await sendFunnelEvent(args);
  if (!result.ok) console.warn("[funnel] event niet geregistreerd:", result.reason);
  return noContent();
}

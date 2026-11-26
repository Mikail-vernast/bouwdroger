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
import { clientIp, gate, tooManyRequests } from "../src/lib/rateLimit.js";
import { funnelArgs } from "../src/lib/funnel.js";
import { sendFunnelEvent } from "../src/lib/availability.js";

const noContent = () => new Response(null, { status: 204, headers: { "cache-control": "no-store" } });

export async function POST(request: Request): Promise<Response> {
  // Ruim: één bezoeker stuurt per flow een tiental events.
  const limit = gate(clientIp(request), 200, 300);
  const attempt = limit.attempt();
  if (!attempt.allowed) return tooManyRequests(attempt.retryAfter);

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(null, { status: 400 });
  }

  const args = funnelArgs(body);
  if (!args) return new Response(null, { status: 400 });

  const accepted = limit.accept();
  if (!accepted.allowed) return tooManyRequests(accepted.retryAfter);

  const result = await sendFunnelEvent(args);
  if (!result.ok) console.warn("[funnel] event niet geregistreerd:", result.reason);
  return noContent();
}

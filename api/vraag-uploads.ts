/**
 * Vraagt upload-plekken aan voor de bijlagen bij een vraag van de homepage.
 *
 * De browser stuurt alleen naam en type; hij krijgt per bestand een signed URL
 * terug en uploadt daar rechtstreeks naartoe. Het bestand gaat dus nooit door
 * deze route heen — een grote body wordt door Vercel geweigerd nog vóór de
 * handler start, en een foto van een ondergelopen kelder is zo 8 MB.
 *
 * Het gedeelde secret blijft hier: de route zet het pas server-side op de
 * aanvraag naar Vernast.
 */
import { requestUploadTickets } from "../src/lib/vernastContact.js";
import { clientIp, gate, tooManyRequests } from "../src/lib/rateLimit.js";

const MAX_FILES = 6;

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

export async function POST(request: Request): Promise<Response> {
  const limit = gate(clientIp(request));
  const attempt = limit.attempt();
  if (!attempt.allowed) return tooManyRequests(attempt.retryAfter);

  let body: { files?: unknown };
  try {
    body = (await request.json()) as { files?: unknown };
  } catch {
    return json({ error: "Ongeldige aanvraag." }, 400);
  }

  const files = Array.isArray(body.files)
    ? body.files
      .filter((file): file is { name: string; type: string } =>
        typeof file === "object" && file !== null &&
        typeof (file as { name?: unknown }).name === "string" &&
        typeof (file as { type?: unknown }).type === "string"
      )
      .slice(0, MAX_FILES)
    : [];

  if (files.length === 0) return json({ error: "Geen bestanden opgegeven." }, 400);

  const accepted = limit.accept();
  if (!accepted.allowed) return tooManyRequests(accepted.retryAfter);

  try {
    const uploads = await requestUploadTickets(
      files.map((file) => ({ name: file.name, type: file.type })),
    );
    return json({ uploads });
  } catch (error: unknown) {
    const reason = error instanceof Error ? error.message : "onbekende fout";
    console.error(`[vraag-uploads] upload-URL's aanvragen mislukt: ${reason}`);
    /*
      Geen 500 naar de bezoeker: de vraag zelf kan prima zonder bijlagen door.
      Het formulier ziet de lege lijst en verstuurt de vraag met een regel dat
      de foto's niet meekonden, in plaats van de hele verzending te blokkeren.
    */
    return json({ uploads: [], error: "Bijlagen konden niet worden voorbereid." }, 200);
  }
}

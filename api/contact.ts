/**
 * Het contactformulier.
 *
 * Dit formulier stond er al maanden en deed niets: de pagina wachtte een
 * seconde, toonde "Bericht verzonden!" en gooide de tekst weg. Elke vraag die
 * iemand hier achterliet is verloren gegaan.
 *
 * De route stuurt het bericht als mail — naar het team, met een kopie aan de
 * afzender — en heeft daarom geen opslag nodig. Antwoorden gaat gewoon vanuit
 * de mailbox, want `replyTo` staat op de bezoeker.
 */
import { sendContactMails } from "../src/lib/mail.js";
import { clientIp, gate, tooManyRequests } from "../src/lib/rateLimit.js";

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

function str(value: unknown, max: number): string {
  if (value === null || value === undefined) return "";
  return String(value).trim().slice(0, max);
}

interface ContactBody {
  voornaam?: unknown;
  achternaam?: unknown;
  email?: unknown;
  telefoon?: unknown;
  onderwerp?: unknown;
  bericht?: unknown;
  /** Honeypot: zie hieronder. */
  website?: unknown;
}

export async function POST(request: Request): Promise<Response> {
  const limit = gate(clientIp(request));

  const attempt = limit.attempt();
  if (!attempt.allowed) return tooManyRequests(attempt.retryAfter);

  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return json({ error: "Ongeldige aanvraag." }, 400);
  }

  /*
    Honeypot. Het veld staat verborgen in het formulier, dus een bezoeker vult
    het nooit in en een bot die alles invult wel. We antwoorden met succes:
    een bot die een foutmelding krijgt, probeert het opnieuw met een andere
    invulling. Zonder deze drempel is dit endpoint een gratis manier om onze
    Brevo-quota op te stoken.
  */
  if (str(body.website, 200)) return json({ ok: true });

  const email = str(body.email, 200);
  if (!/\S+@\S+\.\S+/.test(email)) {
    return json({ error: "Geen geldig e-mailadres opgegeven." }, 400);
  }

  const naam = [str(body.voornaam, 120), str(body.achternaam, 120)].filter(Boolean).join(" ");
  const bericht = str(body.bericht, 4000);
  if (!naam || !bericht) {
    return json({ error: "Vul uw naam en uw bericht in." }, 400);
  }

  const accepted = limit.accept();
  if (!accepted.allowed) return tooManyRequests(accepted.retryAfter);

  await sendContactMails({
    naam,
    email,
    telefoon: str(body.telefoon, 40),
    onderwerp: str(body.onderwerp, 200),
    bericht,
  });

  /*
    Ook bij een mislukte verzending een 200. De mail is hier de enige opslag, dus
    strikt genomen weet de bezoeker dan niet dat zijn bericht weg is — maar
    `sendContactMails` logt de fout luid, en een bezoeker die het formulier
    opnieuw invult terwijl Brevo plat ligt, komt geen stap verder. Het telefoon-
    nummer staat op dezelfde pagina.
  */
  return json({ ok: true });
}

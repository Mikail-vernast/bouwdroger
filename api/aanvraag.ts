/**
 * De formulieren op de contact-, klantenservice- en leveringspagina.
 *
 * Alle drie openden tot nu toe alleen een voorgevulde mail (`mailto:`). Wie
 * geen mailprogramma had ingesteld — de meeste mensen op een laptop met
 * webmail — klikte op "Verstuur" en zag niets gebeuren; wie wél verstuurde,
 * belandde in een mailbox naast al de rest, los van de boekingen.
 *
 * Beslissing van 15-10-2026: alles wat via een formulier op deze site binnenkomt
 * landt als aanvraag in het portaal-account van de bouwdrogers, via
 * `bouwdroger-request-webhook` (zie `src/lib/vernastRequest.ts`). `source` zegt
 * van welke pagina hij komt; het vraagformulier op de homepage loopt via
 * `api/vraag.ts` naar dezelfde webhook, met bijlagen.
 *
 * Neemt het portaal de aanvraag niet aan, dan gaat ze als mail naar het team
 * (`sendQuestionFallback`). Pas als ook die niet vertrekt, krijgt de bezoeker
 * een foutmelding — en daar biedt de pagina dan de mailto als laatste uitweg.
 */
import {
  RateLimitedError,
  REQUEST_SOURCES,
  sendBouwdrogerRequest,
  type RequestSource,
} from "../src/lib/vernastRequest.js";
import { sendQuestionFallback } from "../src/lib/mail.js";
import { clientIp, gate, tooManyRequests } from "../src/lib/rateLimit.js";
import { cleanText, isValidEmail, readJsonBody } from "../src/lib/formInput.js";

/** De pagina's die via deze route gaan. `vraag` heeft zijn eigen route. */
const SOURCES: readonly RequestSource[] = REQUEST_SOURCES.filter((source) => source !== "vraag");

/** Hoe de bron in de vangnet-mail heet, zodat het team weet waar ze vandaan komt. */
const SOURCE_LABEL: Record<RequestSource, string> = {
  contact: "Contactpagina",
  klantenservice: "Klantenservice",
  levering: "Levering & installatie",
  vraag: "Vraagformulier homepage",
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

function str(value: unknown, max: number): string {
  return cleanText(value, max);
}

interface AanvraagBody {
  source?: unknown;
  voornaam?: unknown;
  achternaam?: unknown;
  email?: unknown;
  telefoon?: unknown;
  onderwerp?: unknown;
  bericht?: unknown;
  page_url?: unknown;
  /** Honeypot — zie `api/contact.ts`. */
  website?: unknown;
}

export async function POST(request: Request): Promise<Response> {
  const limit = gate(clientIp(request));
  const attempt = limit.attempt();
  if (!attempt.allowed) return tooManyRequests(attempt.retryAfter);

  const body = await readJsonBody<AanvraagBody>(request);
  if (!body) return json({ error: "Ongeldige aanvraag." }, 400);

  // Een bot vult het verborgen veld in. Succes antwoorden, niets doorsturen.
  if (str(body.website, 200)) return json({ ok: true });

  const source = str(body.source, 40) as RequestSource;
  if (!SOURCES.includes(source)) {
    return json({ error: "Ongeldige aanvraag." }, 400);
  }

  const voornaam = str(body.voornaam, 120);
  const achternaam = str(body.achternaam, 120);
  const naam = [voornaam, achternaam].filter(Boolean).join(" ");
  const email = str(body.email, 200);
  const telefoon = str(body.telefoon, 40);
  const onderwerp = str(body.onderwerp, 200);
  const bericht = cleanText(body.bericht, 4000, true);

  if (!naam || !bericht) {
    return json({ error: "Vul uw naam en uw vraag in." }, 400);
  }
  if (!isValidEmail(email)) {
    return json({ error: "Vul een geldig e-mailadres in, dan kunnen we u antwoorden." }, 400);
  }

  const accepted = limit.accept();
  if (!accepted.allowed) return tooManyRequests(accepted.retryAfter);

  let reason: string;
  let limited = false;
  try {
    const result = await sendBouwdrogerRequest({
      source,
      first_name: voornaam,
      last_name: achternaam,
      email,
      phone: telefoon || null,
      subject: onderwerp || null,
      message: bericht,
      page_url: str(body.page_url, 500) || null,
    });
    if (result.ok) return json({ ok: true });
    reason = result.reason ?? "onbekende fout";
  } catch (error: unknown) {
    reason = error instanceof Error ? error.message : "onbekende fout";
    limited = error instanceof RateLimitedError;
  }

  if (limited) console.warn(`[aanvraag] ${source} geweigerd door rate limit: ${reason}`);
  else console.error(`[aanvraag] ${source} niet doorgestuurd naar Vernast: ${reason}`);

  /*
    Het portaal nam de aanvraag niet aan. Een 429 daar zegt niets over déze
    bezoeker — de drempel ginder telt per IP, en dat is het uitgaande adres van
    deze Worker. Dus eerst het vangnet: de aanvraag als mail naar het team. Lukt
    dat, dan is ze aangekomen en mag het scherm dat zeggen.
  */
  const rescued = await sendQuestionFallback({
    naam,
    email,
    telefoon,
    onderwerp: [SOURCE_LABEL[source], onderwerp].filter(Boolean).join(" — "),
    bericht,
    adres: "",
    reden: limited ? `rate limit portaal: ${reason}` : reason,
  });

  if (rescued) return json({ ok: true, via: "mail" });

  return json(
    { error: "Verzenden lukte niet. Probeer het opnieuw of bel 03 689 90 65." },
    limited ? 429 : 502,
  );
}

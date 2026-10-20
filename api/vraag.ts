/**
 * Het vraagformulier op de homepage ("Uw woning drogen start hier.").
 *
 * Het stond er met een dode knop: versturen wisselde alleen het bevestigings-
 * paneel in en de vraag verdween. Daarna ging hij naar `contact-submission` in
 * Vernast, waar hij als lead bij admin belandde — naast de leads van de
 * vochtbestrijding, ver weg van de boekingen waar zo'n vraag meestal over gaat.
 *
 * Beslissing van 15-10-2026: alles wat via een formulier op deze site binnenkomt
 * landt in het portaal-account van de bouwdrogers, als aanvraag met bron
 * `vraag`, via `bouwdroger-request-webhook` (zie `src/lib/vernastRequest.ts`).
 * De contact-, klantenservice- en leveringspagina doen hetzelfde via
 * `api/aanvraag.ts`. De bijlagen blijven lopen zoals voorheen: de browser
 * uploadt ze via `/api/vraag-uploads`, en hun `inbox/...`-paden gaan mee.
 *
 * Anders dan bij `api/contact.ts` (mail-only) is dit géén best-effort: mislukt
 * zowel het portaal als de vangnet-mail, dan krijgt de bezoeker dat te zien.
 * Stil falen is precies wat dit formulier ooit deed.
 */
import { RateLimitedError, sendBouwdrogerRequest } from "../src/lib/vernastRequest.js";
import { sendQuestionFallback } from "../src/lib/mail.js";
import { clientIp, gate, tooManyRequests } from "../src/lib/rateLimit.js";
import { cleanText, isValidEmail, readJsonBody } from "../src/lib/formInput.js";

/** De onderwerpsleutels van het formulier, met het label dat het portaal toont. */
const SUBJECTS: Record<string, string> = {
  droging_op_maat: "Droging op maat",
  waterschade: "Waterschade",
  schimmel_geur: "Schimmel of geur",
  offerte_prijs: "Offerte of prijs",
  verzekeringsrapport: "Rapport voor verzekering",
  andere_vraag: "Andere vraag",
};

const MAX_ATTACHMENTS = 6;

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

function str(value: unknown, max: number): string {
  return cleanText(value, max);
}

interface VraagBody {
  voornaam?: unknown;
  achternaam?: unknown;
  email?: unknown;
  telefoon?: unknown;
  straat?: unknown;
  nummer?: unknown;
  postcode?: unknown;
  gemeente?: unknown;
  onderwerp?: unknown;
  bericht?: unknown;
  attachments?: unknown;
  page_url?: unknown;
  /** Honeypot — zie `api/contact.ts`. */
  website?: unknown;
}

export async function POST(request: Request): Promise<Response> {
  const limit = gate(clientIp(request));
  const attempt = limit.attempt();
  if (!attempt.allowed) return tooManyRequests(attempt.retryAfter);

  const body = await readJsonBody<VraagBody>(request);
  if (!body) return json({ error: "Ongeldige aanvraag." }, 400);

  // Een bot vult het verborgen veld in. Succes antwoorden, niets doorsturen.
  if (str(body.website, 200)) return json({ ok: true });

  const voornaam = str(body.voornaam, 120);
  const achternaam = str(body.achternaam, 120);
  const naam = [voornaam, achternaam].filter(Boolean).join(" ");
  const bericht = cleanText(body.bericht, 4000, true);
  const email = str(body.email, 200);
  const telefoon = str(body.telefoon, 40);

  if (!naam || !bericht) {
    return json({ error: "Vul uw naam en uw vraag in." }, 400);
  }
  /*
    De Vernast-kant eist een geldig e-mailadres — daar is het de sleutel waarop
    een bestaande klant wordt herkend. Het formulier laat iemand kiezen tussen
    telefoon en mail, dus wie alleen belt heeft geen adres. Die krijgt hier een
    duidelijke vraag in plaats van een 400 uit een vreemde API.
  */
  if (!isValidEmail(email)) {
    return json({ error: "Vul een geldig e-mailadres in, dan kunnen we u antwoorden." }, 400);
  }

  const onderwerp = str(body.onderwerp, 60);
  // Eigen sleutels alleen: `SUBJECTS["constructor"]` is anders een functie.
  const subject = Object.prototype.hasOwnProperty.call(SUBJECTS, onderwerp)
    ? SUBJECTS[onderwerp]
    : SUBJECTS.andere_vraag;

  const huisnummer = str(body.nummer, 20);
  const straat = str(body.straat, 160);
  const adres = [straat, huisnummer].filter(Boolean).join(" ");
  const postcode = str(body.postcode, 20);
  const gemeente = str(body.gemeente, 120);

  const attachments = Array.isArray(body.attachments)
    ? body.attachments
      .filter((path): path is string => typeof path === "string" && path.startsWith("inbox/"))
      .slice(0, MAX_ATTACHMENTS)
    : [];

  const accepted = limit.accept();
  if (!accepted.allowed) return tooManyRequests(accepted.retryAfter);

  let reason: string;
  let limited = false;
  try {
    const result = await sendBouwdrogerRequest({
      source: "vraag",
      first_name: voornaam,
      last_name: achternaam,
      email,
      phone: telefoon || null,
      subject,
      message: bericht,
      street: straat || null,
      house_number: huisnummer || null,
      postal_code: postcode || null,
      city: gemeente || null,
      attachments,
      page_url: str(body.page_url, 500) || null,
    });
    if (result.ok) return json({ ok: true });
    reason = result.reason ?? "onbekende fout";
  } catch (error: unknown) {
    reason = error instanceof Error ? error.message : "onbekende fout";
    limited = error instanceof RateLimitedError;
  }

  if (limited) console.warn(`[vraag] geweigerd door rate limit: ${reason}`);
  else console.error(`[vraag] niet doorgestuurd naar Vernast: ${reason}`);

  /*
    Het portaal nam de vraag niet aan. Vroeger eindigde het hier: bij een 429
    las de bezoeker "die is goed aangekomen" en bij een storing "probeer het
    opnieuw" — in beide gevallen stond zijn vraag nergens.

    Een 429 van het portaal zegt bovendien niets over déze bezoeker: de drempel
    ginder telt per IP, en dat is het uitgaande adres van deze Worker — één
    adres voor de hele site.

    Dus eerst het vangnet: de vraag als mail naar het team. Lukt dat, dan is ze
    wél aangekomen en mag het scherm dat zeggen.
  */
  const rescued = await sendQuestionFallback({
    naam,
    email,
    telefoon,
    onderwerp: subject,
    bericht: attachments.length
      ? `${bericht}\n\nBijlagen (storage): ${attachments.join(", ")}`
      : bericht,
    adres: [adres, postcode, gemeente].filter(Boolean).join(" "),
    reden: limited ? `rate limit portaal: ${reason}` : reason,
  });

  if (rescued) return json({ ok: true, via: "mail" });

  // Ook de mail ging niet weg. Nu is het eerlijk om het te zeggen.
  return json(
    { error: "Verzenden lukte niet. Probeer het opnieuw of bel 03 689 90 65." },
    limited ? 429 : 502,
  );
}

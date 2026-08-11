/**
 * Het vraagformulier op de homepage ("Uw woning drogen start hier.").
 *
 * Het stond er met een dode knop: versturen wisselde alleen het bevestigings-
 * paneel in en de vraag verdween. Nu gaat hij naar dezelfde inbox als de
 * vochtbestrijding-site — support-ticket voor admin, submissie en lead voor de
 * lead-qualifier — via de edge function `contact-submission` in Vernast.
 *
 * Anders dan bij `api/contact.ts` (mail-only) is dit géén best-effort: mislukt
 * de verzending, dan krijgt de bezoeker dat te zien. Stil falen is precies wat
 * dit formulier hiervóór deed.
 */
import {
  RateLimitedError,
  sendContactRequest,
  type ContactSubject,
} from "../src/lib/vernastContact.js";
import { sendQuestionFallback } from "../src/lib/mail.js";
import { clientIp, gate, tooManyRequests } from "../src/lib/rateLimit.js";

const SUBJECTS: ContactSubject[] = [
  "droging_op_maat",
  "waterschade",
  "schimmel_geur",
  "offerte_prijs",
  "verzekeringsrapport",
  "andere_vraag",
];

const MAX_ATTACHMENTS = 6;

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

  let body: VraagBody;
  try {
    body = (await request.json()) as VraagBody;
  } catch {
    return json({ error: "Ongeldige aanvraag." }, 400);
  }

  // Een bot vult het verborgen veld in. Succes antwoorden, niets doorsturen.
  if (str(body.website, 200)) return json({ ok: true });

  const naam = [str(body.voornaam, 120), str(body.achternaam, 120)].filter(Boolean).join(" ");
  const bericht = str(body.bericht, 4000);
  const email = str(body.email, 200);
  const telefoon = str(body.telefoon, 40);

  if (!naam || !bericht) {
    return json({ error: "Vul uw naam en uw vraag in." }, 400);
  }
  /*
    De Vernast-kant eist een geldig e-mailadres — daar is het de sleutel waarop
    een bestaande lead wordt herkend. Het formulier laat iemand kiezen tussen
    telefoon en mail, dus wie alleen belt heeft geen adres. Die krijgt hier een
    duidelijke vraag in plaats van een 400 uit een vreemde API.
  */
  if (!/\S+@\S+\.\S+/.test(email)) {
    return json({ error: "Vul een geldig e-mailadres in, dan kunnen we u antwoorden." }, 400);
  }

  const onderwerp = str(body.onderwerp, 60);
  const subject: ContactSubject = SUBJECTS.includes(onderwerp as ContactSubject)
    ? (onderwerp as ContactSubject)
    : "andere_vraag";

  const huisnummer = str(body.nummer, 20);
  const straat = str(body.straat, 160);
  const adres = [straat, huisnummer].filter(Boolean).join(" ");

  const attachments = Array.isArray(body.attachments)
    ? body.attachments
      .filter((path): path is string => typeof path === "string" && path.startsWith("inbox/"))
      .slice(0, MAX_ATTACHMENTS)
    : [];

  const accepted = limit.accept();
  if (!accepted.allowed) return tooManyRequests(accepted.retryAfter);

  try {
    await sendContactRequest({
      name: naam,
      email,
      phone: telefoon || null,
      message: bericht,
      subject,
      address: adres || null,
      postal_code: str(body.postcode, 20) || null,
      city: str(body.gemeente, 120) || null,
      page_url: str(body.page_url, 500) || null,
      attachments,
    });
  } catch (error: unknown) {
    const reason = error instanceof Error ? error.message : "onbekende fout";
    const limited = error instanceof RateLimitedError;

    if (limited) console.warn(`[vraag] geweigerd door rate limit: ${reason}`);
    else console.error(`[vraag] niet doorgestuurd naar Vernast: ${reason}`);

    /*
      Het portaal nam de vraag niet aan. Vroeger eindigde het hier: bij een 429
      las de bezoeker "die is goed aangekomen" en bij een storing "probeer het
      opnieuw" — in beide gevallen stond zijn vraag nergens.

      Dat eerste antwoord was bovendien niet te onderbouwen. De drempel van
      `contact-submission` telt per IP, en dat IP is dat van deze functie, niet
      dat van de bezoeker: één uitgaand adres voor de hele site. Een 429 kan dus
      even goed van iemand anders komen als van deze bezoeker zelf.

      Dus eerst het vangnet: de vraag als mail naar het team. Lukt dat, dan is ze
      wél aangekomen en mag het scherm dat zeggen.
    */
    const rescued = await sendQuestionFallback({
      naam,
      email,
      telefoon,
      onderwerp: subject,
      bericht,
      adres: [adres, str(body.postcode, 20), str(body.gemeente, 120)].filter(Boolean).join(" "),
      reden: limited ? `rate limit portaal: ${reason}` : reason,
    });

    if (rescued) return json({ ok: true, via: "mail" });

    // Ook de mail ging niet weg. Nu is het eerlijk om het te zeggen.
    return json(
      { error: "Verzenden lukte niet. Probeer het opnieuw of bel 03 689 90 65." },
      limited ? 429 : 502,
    );
  }

  return json({ ok: true });
}

/**
 * Het boekingsformulier op /ozonbehandeling.
 *
 * Een ozonbehandeling is geen toestel uit de catalogus: er is geen dagprijs in
 * `src/data/tarieven.ts` en dus niets om server-side te herrekenen. Ze wordt
 * ingepland na een plaatsbezoek, omdat het volume van de ruimte het debiet en
 * de duur bepaalt. Daarom loopt deze pagina niet via Stripe maar als aanvraag
 * naar het portaal — dezelfde weg als het vraagformulier op de homepage.
 *
 * Bewust `source: "vraag"` en niet `"ozon"`. De webhook aan de Vernast-kant
 * (`bouwdroger-request-webhook`) toetst `source` aan een vaste lijst
 * (contact · klantenservice · levering · vraag) en `bouwdroger_requests` heeft
 * daar bovenop een CHECK-constraint op dezelfde vier waarden. Een vijfde bron
 * verzinnen levert hier een 400 "Onbekende bron" op en dus elke aanvraag in de
 * vangnet-mail in plaats van in het portaal. Het onderwerp én `page_url` maken
 * in het portaal duidelijk dat ze van deze pagina komt; wil het verhuurteam een
 * eigen filter op "ozon", dan moeten eerst de constraint en de edge function
 * mee (migratie in het portaal-project, niet hier).
 *
 * Net als bij `api/vraag.ts` is dit géén best-effort: mislukt zowel het portaal
 * als de vangnet-mail, dan krijgt de bezoeker dat te zien. Een boeking die stil
 * verdwijnt is erger dan een foutmelding.
 */
import { RateLimitedError, sendBouwdrogerRequest } from "../src/lib/vernastRequest.js";
import { sendQuestionFallback } from "../src/lib/mail.js";
import { clientIp, gate, tooManyRequests } from "../src/lib/rateLimit.js";
import { cleanText, isValidEmail, readJsonBody } from "../src/lib/formInput.js";

/**
 * Welke dienst de bezoeker aanvroeg. Deze route bedient twee landingspagina's —
 * /ozonbehandeling en /ontschimmeling — en zonder dit veld stond er bij allebei
 * "Ozonbehandeling" in het onderwerp, zodat het verhuurteam in het portaal niet
 * kon zien welke pagina de aanvraag opleverde.
 */
const DIENSTEN: Record<string, string> = {
  ozon: "Ozonbehandeling",
  ontschimmeling: "Ontschimmeling",
};

/** De situaties uit het formulier, met het label dat het portaal toont. */
const SITUATIES: Record<string, string> = {
  schimmel: "Schimmel verwijderen",
  geur: "Hardnekkige geur neutraliseren",
  huisstofmijt: "Huisstofmijt en allergie",
  waterschade: "Ontsmetting na waterschade",
  overdracht: "Fris maken voor verhuur of verkoop",
  advies: "Advies over de aanpak",
};

/** Hoe dringend het is — bepaalt mee wanneer de technieker ingepland wordt. */
const TERMIJNEN: Record<string, string> = {
  zo_snel_mogelijk: "Zo snel mogelijk",
  deze_week: "Deze week",
  binnen_twee_weken: "Binnen twee weken",
  later: "Later / nog te bepalen",
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

/** Eigen sleutels alleen: `SITUATIES["constructor"]` is anders een functie. */
function label(map: Record<string, string>, key: string, fallback: string): string {
  return Object.prototype.hasOwnProperty.call(map, key) ? map[key] : fallback;
}

interface OzonBody {
  /** `ozon` of `ontschimmeling` — welke landingspagina het formulier droeg. */
  dienst?: unknown;
  voornaam?: unknown;
  achternaam?: unknown;
  email?: unknown;
  telefoon?: unknown;
  straat?: unknown;
  nummer?: unknown;
  postcode?: unknown;
  gemeente?: unknown;
  situatie?: unknown;
  termijn?: unknown;
  ruimtes?: unknown;
  ontschimmeld?: unknown;
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

  const body = await readJsonBody<OzonBody>(request);
  if (!body) return json({ error: "Ongeldige aanvraag." }, 400);

  // Een bot vult het verborgen veld in. Succes antwoorden, niets doorsturen.
  if (str(body.website, 200)) return json({ ok: true });

  const voornaam = str(body.voornaam, 120);
  const achternaam = str(body.achternaam, 120);
  const naam = [voornaam, achternaam].filter(Boolean).join(" ");
  const email = str(body.email, 200);
  const telefoon = str(body.telefoon, 40);
  const toelichting = cleanText(body.bericht, 3000, true);

  if (!naam) {
    return json({ error: "Vul uw naam in." }, 400);
  }
  /*
    Zelfde reden als bij `api/vraag.ts`: aan de Vernast-kant is het e-mailadres
    de sleutel waarop een bestaande klant herkend wordt, en de webhook weigert
    een aanvraag zonder geldig adres met een 400. Die vraag hoort hier gesteld
    te worden, niet als een vreemde fout uit een API.
  */
  if (!isValidEmail(email)) {
    return json({ error: "Vul een geldig e-mailadres in, dan kunnen we u antwoorden." }, 400);
  }

  const dienst = label(DIENSTEN, str(body.dienst, 40), DIENSTEN.ozon);
  const situatie = label(SITUATIES, str(body.situatie, 60), SITUATIES.advies);
  const termijn = label(TERMIJNEN, str(body.termijn, 60), TERMIJNEN.later);
  const ruimtes = str(body.ruimtes, 200);
  const ontschimmeld = str(body.ontschimmeld, 40);

  const huisnummer = str(body.nummer, 20);
  const straat = str(body.straat, 160);
  const adres = [straat, huisnummer].filter(Boolean).join(" ");
  const postcode = str(body.postcode, 20);
  const gemeente = str(body.gemeente, 120);

  /*
    Termijn, ruimtes en "al ontschimmeld?" krijgen geen eigen kolom in
    `bouwdroger_requests`: die tabel bedient vier formulieren en de webhook
    negeert wat ze niet kent, dus een nieuw veld zou hier stil wegvallen. Ze
    gaan daarom in het bericht zelf — de technieker die de afspraak inplant
    leest ze op dezelfde plek als de rest, en er is geen wijziging in het
    portaal-project voor nodig.

    "Al ontschimmeld?" staat er niet voor de volledigheid: ozon ruimt op wat na
    het ontschimmelen achterblijft. Staat de schimmel er nog, dan belt het team
    eerst over die stap in plaats van een behandeling in te plannen die
    voorspelbaar te vroeg komt.
  */
  const regels = [
    `Gewenste termijn: ${termijn}`,
    ruimtes ? `Ruimtes / oppervlakte: ${ruimtes}` : "",
    ontschimmeld ? `Al ontschimmeld: ${ontschimmeld}` : "",
    "",
    toelichting || "(geen extra toelichting)",
  ].filter((line, i, all) => line !== "" || all[i - 1] !== "");

  const bericht = regels.join("\n");

  const attachments = Array.isArray(body.attachments)
    ? body.attachments
      .filter((path): path is string => typeof path === "string" && path.startsWith("inbox/"))
      .slice(0, MAX_ATTACHMENTS)
    : [];

  const accepted = limit.accept();
  if (!accepted.allowed) return tooManyRequests(accepted.retryAfter);

  const subject = `${dienst}, ${situatie}`;

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

  if (limited) console.warn(`[ozon] geweigerd door rate limit: ${reason}`);
  else console.error(`[ozon] niet doorgestuurd naar Vernast: ${reason}`);

  /*
    Het vangnet, net als bij `api/vraag.ts`: een 429 van het portaal zegt niets
    over déze bezoeker (de drempel ginder telt per IP, en dat is het uitgaande
    adres van deze Worker — één adres voor de hele site). Lukt de mail, dan is
    de aanvraag wél aangekomen en mag het scherm dat zeggen.
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

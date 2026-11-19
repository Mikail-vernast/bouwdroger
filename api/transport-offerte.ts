/**
 * Een volledig geconfigureerde boeking op een adres waar geen vast
 * transporttarief voor bestaat — boven 200 km van het magazijn.
 *
 * **Waarom deze route bestaat.** Tot 200 km rijdt de bestelwagen zelden alleen
 * en ligt de vervoerskost vast genoeg om ze in de wizard te zetten. Daarbuiten
 * hangt ze af van de vraag of er een tweede adres bij past, en dat scheelt
 * honderden euro's per order. Eén vast bedrag zou de klant dus te veel vragen
 * of ons verlies laten rijden.
 *
 * De bezoeker wordt daarom niet weggestuurd: hij stelt zijn pakket gewoon samen,
 * ziet de huurprijs, en laat zijn gegevens achter. Deze route zet die aanvraag
 * in het portaal — mét de volledige samenstelling, zodat er aan onze kant niets
 * nagevraagd hoeft te worden — en wij zetten er een vervoersprijs bij.
 *
 * **De prijs in het bericht wordt hier herrekend.** Wat de browser als bedrag
 * meestuurt telt nergens mee, net als in `api/checkout.ts`; anders staat er een
 * huurprijs in het portaal die niemand ooit heeft aangeboden.
 *
 * Valt het portaal weg, dan gaat de aanvraag als mail naar het team, net als bij
 * `api/aanvraag.ts`. Pas als ook die niet vertrekt ziet de bezoeker een fout —
 * met het telefoonnummer erbij, want hij heeft dan al een pakket samengesteld.
 */
import { bookingSummary, normalizeOptions } from "../src/lib/booking.js";
import { parseConfig, packageTitle } from "../src/lib/verhuur.js";
import { customerType } from "../src/lib/orderIntake.js";
import { sendQuestionFallback } from "../src/lib/mail.js";
import { clientIp, gate, tooManyRequests } from "../src/lib/rateLimit.js";
import { cleanText, isValidEmail, readJsonBody } from "../src/lib/formInput.js";
import {
  RateLimitedError,
  sendBouwdrogerRequest,
} from "../src/lib/vernastRequest.js";

interface OfferteBody {
  config?: unknown;
  options?: unknown;
  customer?: unknown;
  delivery?: unknown;
  page_url?: unknown;
  /** Honeypot — zie `api/contact.ts`. */
  website?: unknown;
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

/**
 * Alles wat uit de browser komt eerst naar strings. Een object of een array in
 * een veld dat een string hoort te zijn liet `cleanText` eerder struikelen op
 * een 500 in plaats van op een nette weigering.
 */
function strings(value: unknown): Record<string, string> {
  const uit: Record<string, string> = {};
  if (!value || typeof value !== "object") return uit;
  for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
    if (typeof v === "string") uit[k] = v;
    else if (typeof v === "number" || typeof v === "boolean") uit[k] = String(v);
  }
  return uit;
}

const trim = (value: unknown, max = 200) => cleanText(value, max);

export async function POST(request: Request): Promise<Response> {
  const limit = gate(clientIp(request));
  const attempt = limit.attempt();
  if (!attempt.allowed) return tooManyRequests(attempt.retryAfter);

  const body = await readJsonBody<OfferteBody>(request);
  if (!body) return json({ error: "Ongeldige aanvraag." }, 400);
  if (trim(body.website)) return json({ ok: true });

  const customer = strings(body.customer);
  const delivery = strings(body.delivery);

  const config = parseConfig(new URLSearchParams(strings(body.config)));
  /*
    De zone volgt het leveradres en niet wat er in `options` staat — dezelfde
    regel als in `api/checkout.ts`. Hier bepaalt ze niet het bedrag maar wél of
    deze route de juiste is: een adres mét vast tarief hoort gewoon af te rekenen.
  */
  const options = normalizeOptions({
    ...(typeof body.options === "object" && body.options !== null ? body.options : {}),
    land: customer.land,
    postcode: customer.post,
  });
  const summary = bookingSummary(config, options);

  const naam = trim(customer.name, 120);
  const email = trim(customer.mail, 200);
  const telefoon = trim(customer.tel, 40);

  if (!naam) return json({ error: "Vul uw naam in." }, 400);
  if (!isValidEmail(email)) {
    return json({ error: "Vul een geldig e-mailadres in, dan kunnen we u antwoorden." }, 400);
  }
  if (!summary.leverzone) {
    return json({ error: "Vul de postcode van de werf in." }, 400);
  }
  /*
    Een adres mét vast tarief hoort niet hier: daar is een offerte een omweg die
    de bezoeker een werkdag kost en ons een order. Dit is geen beveiliging maar
    een vangrail voor een verkeerd geplaatste aanroep.
  */
  if (summary.leverbaar) {
    return json(
      { error: "Voor dit adres kunt u meteen online boeken; een offerte is niet nodig." },
      400,
    );
  }

  const accepted = limit.accept();
  if (!accepted.allowed) return tooManyRequests(accepted.retryAfter);

  const zone = summary.leverzone.zone;
  const corridor = summary.leverzone.corridor;
  const toestellen = summary.items
    .map((it) => `${it.q}× ${it.k}`)
    .join(", ");

  /*
    Het bericht is wat de collega die terugbelt op zijn scherm krijgt. Alles wat
    hij anders zou moeten navragen staat erin: de samenstelling, de huurprijs
    zoals de bezoeker ze zag, de gewenste datum, en de afstand waarvoor een
    vervoersprijs gemaakt moet worden.
  */
  const bericht = [
    `TRANSPORTOFFERTE — zone ${zone.nr}, ${zone.band} van het magazijn.`,
    `Corridor ${corridor.naam} (${corridor.wegen}); wij rijden daar normaal op ${
      ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"][corridor.dag]
    }.`,
    "",
    `Pakket: ${packageTitle(config)}`,
    `Toestellen: ${toestellen || "geen"}`,
    `Huurperiode: ${summary.weeks} ${summary.weeks === 1 ? "week" : "weken"} (${summary.days} dagen)`,
    `Gewenste leverdatum: ${trim(delivery.date, 20) || "niet opgegeven"}${
      delivery.slot ? `, tijdslot ${trim(delivery.slot, 30)}` : ""
    }`,
    "",
    `Huurprijs excl. btw: € ${summary.total.toFixed(2)}`,
    `Huurprijs incl. btw: € ${summary.grossTotal.toFixed(2)}`,
    "Transport: NOG TE BEPALEN — niet in bovenstaande bedragen.",
    "",
    `Werfadres: ${trim(customer.addr, 150)}, ${trim(customer.post, 10)} ${trim(customer.city, 100)} (${
      summary.leverzone.land
    })`,
    `Klanttype: ${customerType(customer.type)}`,
    customer.company ? `Bedrijf: ${trim(customer.company, 120)}` : "",
    customer.vat ? `Btw-nummer: ${trim(customer.vat, 40)}` : "",
  ]
    .filter((regel) => regel !== "")
    .join("\n");

  const [voornaam, ...rest] = naam.split(/\s+/);
  const achternaam = rest.join(" ");

  let reason: string;
  let limited = false;
  try {
    const result = await sendBouwdrogerRequest({
      source: "transport",
      first_name: voornaam,
      last_name: achternaam,
      email,
      phone: telefoon || null,
      subject: `Transportofferte zone ${zone.nr} — ${trim(customer.post, 10)} ${trim(customer.city, 100)}`,
      message: bericht,
      street: trim(customer.addr, 150) || null,
      postal_code: trim(customer.post, 10) || null,
      city: trim(customer.city, 100) || null,
      page_url: trim(body.page_url, 500) || null,
    });
    if (result.ok) return json({ ok: true });
    reason = result.reason ?? "onbekende fout";
  } catch (error: unknown) {
    reason = error instanceof Error ? error.message : "onbekende fout";
    limited = error instanceof RateLimitedError;
  }

  if (limited) console.warn(`[transport-offerte] geweigerd door rate limit: ${reason}`);
  else console.error(`[transport-offerte] niet doorgestuurd naar Vernast: ${reason}`);

  const rescued = await sendQuestionFallback({
    naam,
    email,
    telefoon,
    onderwerp: `Transportofferte zone ${zone.nr}`,
    bericht,
    adres: `${trim(customer.addr, 150)}, ${trim(customer.post, 10)} ${trim(customer.city, 100)}`,
    reden: limited ? `rate limit portaal: ${reason}` : reason,
  });

  if (rescued) return json({ ok: true, via: "mail" });

  return json(
    { error: "Verzenden lukte niet. Probeer het opnieuw of bel 03 689 90 65." },
    limited ? 429 : 502,
  );
}

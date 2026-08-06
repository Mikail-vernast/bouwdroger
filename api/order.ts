/**
 * Ontvangt een order van de site en zet hem in het bouwdrogers-portaal van
 * Vernast, via de edge function `bouwdroger-order-webhook`.
 *
 * Dit is de enige bestemming. Er stond hier eerder een tweede database naast —
 * het Supabase-project uit de Lovable-periode — waar elke order eerst in ging
 * en van waaruit hij dan werd doorgeduwd. Dat leverde twee kopieën van dezelfde
 * order op zonder dat één van beide de waarheid was, en die database bleek
 * bovendien met de publieke sleutel volledig leesbaar: klantnaam, e-mail,
 * telefoon en adres. `bouwdroger_orders` in Vernast V2.0 heeft alle velden die
 * we nodig hebben, staat achter RLS en is enkel zichtbaar voor admin en de rol
 * `bouwdroger`. Daar hoort de order thuis.
 *
 * Let op het omgekeerde vangnet. Zolang er twee opslagplaatsen waren, mocht een
 * mislukte push stil blijven: de order stond immers al ergens. Nu is de push de
 * enige opslag, dus een mislukking moet de bezoeker bereiken — anders denkt hij
 * dat hij geboekt heeft terwijl er nergens iets staat.
 */
import { randomUUID } from "node:crypto";
import { logSyncFailure, pushOrderToVernast, type VernastOrderPayload } from "../src/lib/vernastSync.js";
import { bookingRow, reserveringRow } from "../src/lib/orderIntake.js";
import { clientIp, gate, tooManyRequests } from "../src/lib/rateLimit.js";

type Kind = "booking" | "reservering";

interface OrderBody {
  kind?: Kind;
  data?: Record<string, unknown>;
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

function str(value: unknown, max = 500): string | null {
  if (value === null || value === undefined) return null;
  const text = String(value).trim();
  return text ? text.slice(0, max) : null;
}

function num(value: unknown): number | null {
  if (value === null || value === undefined || value === "") return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}


/** bookings-rij → payload voor het Vernast-portaal. */
function bookingToVernast(row: Record<string, unknown>, id: string): VernastOrderPayload {
  return {
    source: "booking",
    external_id: id,
    order_number: str(row.booking_number, 100),
    customer_type: str(row.customer_type, 20),
    first_name: str(row.first_name, 120),
    last_name: str(row.last_name, 120),
    email: str(row.email, 200),
    phone: str(row.phone, 40),
    address: str(row.address, 250),
    postal_code: str(row.postal_code, 20),
    city: str(row.city, 120),
    company_name: str(row.company_name, 200),
    vat_number: str(row.vat_number, 40),
    package_tier: str(row.package_tier, 100),
    product_id: str(row.product_id, 100),
    room_type: str(row.room_type, 100),
    sqm: num(row.sqm),
    duration_days: num(row.duration_days),
    rental_start_date: str(row.rental_start_date, 30),
    rental_end_date: str(row.rental_end_date, 30),
    equipment_drogers: num(row.equipment_drogers),
    equipment_ventilatoren: num(row.equipment_ventilatoren),
    equipment_verwarming: num(row.equipment_verwarming),
    customer_note: str(row.notes, 4000),
    total_price: num(row.total_price),
    payment_status: "unpaid",
  };
}

/** reserveringen-rij → payload voor het Vernast-portaal. */
function reserveringToVernast(row: Record<string, unknown>, id: string): VernastOrderPayload {
  return {
    source: "reservering",
    external_id: id,
    first_name: str(row.voornaam, 120),
    last_name: str(row.achternaam, 120),
    email: str(row.email, 200),
    phone: str(row.telefoon, 40),
    address: str(row.adres, 250),
    postal_code: str(row.postcode, 20),
    city: str(row.gemeente, 120),
    machine: str(row.machine, 200),
    situatie: str(row.situatie, 200),
    duration_label: str(row.duur, 100),
    delivery_date: str(row.leveringsdatum, 30),
    customer_note: str(row.bericht, 4000),
    total_price: num(row.prijs_excl_btw),
    payment_status: "unpaid",
  };
}

export async function POST(request: Request): Promise<Response> {
  // Twee drempels: een ruime op alles wat binnenkomt, en een strakke op wat er
  // effectief een order van wordt. Zie src/lib/rateLimit.ts.
  const limit = gate(clientIp(request));

  const attempt = limit.attempt();
  if (!attempt.allowed) return tooManyRequests(attempt.retryAfter);

  let body: OrderBody;
  try {
    body = (await request.json()) as OrderBody;
  } catch {
    return json({ error: "Ongeldige aanvraag." }, 400);
  }

  const kind = body.kind;
  if (kind !== "booking" && kind !== "reservering") {
    return json({ error: "Onbekend ordertype." }, 400);
  }

  const data = body.data;
  if (!data || typeof data !== "object") {
    return json({ error: "Geen ordergegevens ontvangen." }, 400);
  }

  const email = str(data.email, 200);
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return json({ error: "Geen geldig e-mailadres opgegeven." }, 400);
  }

  // Vanaf hier wordt het een echte order. Pas nu telt de strakke drempel mee,
  // zodat een bezoeker die het formulier drie keer verkeerd invult zichzelf
  // niet buitensluit.
  const accepted = limit.accept();
  if (!accepted.allowed) return tooManyRequests(accepted.retryAfter);

  // Alleen de velden die het formulier hoort te sturen, met status en bedrag
  // door de server bepaald. Zie src/lib/orderIntake.ts.
  const row = kind === "booking" ? bookingRow(data) : reserveringRow(data);

  /*
    De idempotentiesleutel voor de webhook. Die kwam vroeger uit de rij-id van
    de tussenliggende database; nu die weg is, maken we hem hier. De webhook is
    idempotent op (source, external_id), dus een order die door een herhaalde
    verzending twee keer aankomt, landt aan de andere kant één keer.
  */
  const id = randomUUID();

  // Bewust `row` en niet `data`: met `data` zou het bedrag dat de bezoeker
  // meestuurde alsnog op de werklijst belanden, ook al is het herrekend.
  const payload =
    kind === "booking" ? bookingToVernast(row, id) : reserveringToVernast(row, id);

  const sync = await pushOrderToVernast(payload);
  logSyncFailure(`${kind} ${id}`, sync);

  /*
    Mislukt de push, dan is er nergens iets bewaard en moet de bezoeker dat
    weten. Vroeger mocht dit stil falen omdat de order dan nog in de tweede
    database stond; die is er niet meer. Iemand "bedankt voor uw reservering"
    tonen terwijl er niets is aangekomen, is de ergste uitkomst van de twee —
    dan belt hij pas als de droger niet geleverd wordt.

    De reden zelf blijft binnen: die staat in de logs, niet in het antwoord.
  */
  if (!sync.ok) {
    return json(
      { error: "Uw aanvraag kon niet doorgegeven worden. Probeer het opnieuw of bel ons." },
      502
    );
  }

  return json({ ok: true, id });
}

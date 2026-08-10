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
import { checkOne, logAvailabilityFailure } from "../src/lib/availability.js";
import { pickupCounts, pickupDeviceLines, pickupLabel } from "../src/lib/afhalen.js";
import { newReference } from "../src/lib/booking.js";
import { alertSyncFailure, sendPickupMails, sendRequestMails } from "../src/lib/mail.js";
import { logSyncFailure, pushOrderToVernast, type VernastOrderPayload } from "../src/lib/vernastSync.js";
import { afhaalOrder, bookingRow, reserveringRow, type AfhaalOrder } from "../src/lib/orderIntake.js";
import { clientIp, gate, tooManyRequests } from "../src/lib/rateLimit.js";
import { rentalWindow } from "../src/lib/verhuur.js";

type Kind = "booking" | "reservering" | "afhaal";

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

/**
 * Afhaalreservatie → payload voor het Vernast-portaal.
 *
 * Een afhaling is geen levering, en dat verschil moet in het portaal meteen te
 * zien zijn: de chauffeur rijdt hier niet. Vandaar `situatie: "afhaling"`, een
 * afhaalmoment in `delivery_slot` en het adres van het magazijn nergens — het
 * adresveld blijft dat van de klant, voor de factuur.
 *
 * `order_lines` draagt de toestelsoorten waarmee de webhook aan de andere kant
 * automatisch materieel vastlegt. Zonder die regels zou een afhaalorder de
 * voorraad niet bezetten en dus twee keer verhuurd kunnen worden.
 */
function afhaalToVernast(
  order: AfhaalOrder,
  id: string,
  reference: string,
): VernastOrderPayload {
  const period = order.date ? rentalWindow(order.date, order.days) : null;
  const counts = pickupCounts(order.lines);
  const devices = pickupLabel(order.lines);

  return {
    source: "booking",
    external_id: id,
    order_number: reference,
    customer_type: order.customerType,
    first_name: order.firstName,
    last_name: order.lastName,
    email: order.email,
    phone: order.phone,
    address: order.address,
    company_name: order.company || null,
    vat_number: order.vatNumber || null,
    product_id: order.lines[0]?.product.key ?? null,
    machine: devices,
    situatie: "afhaling",
    duration_days: order.days,
    duration_label: `${order.days} dagen`,
    rental_start_date: period?.start ?? order.date,
    rental_end_date: period?.end ?? null,
    delivery_date: order.date,
    delivery_slot: `Afhalen ${order.slot}`,
    equipment_drogers: counts.drogers,
    equipment_ventilatoren: counts.ventilatoren,
    equipment_verwarming: counts.verwarming,
    order_lines: pickupDeviceLines(order.lines),
    customer_note: [
      `AFHALING in het magazijn (geen levering) — ${order.slot}.`,
      `Toestellen: ${devices}.`,
      order.notes,
    ]
      .filter(Boolean)
      .join("\n"),
    /*
      Bruto, zoals bij een pakket sinds 10-08-2026: het portaal toont
      `total_price` als "Ordertotaal · incl. btw" en haalt de btw uit
      `vat_amount`. Er is niets vooruitbetaald — bij afhalen volgt de factuur na
      de huurperiode — dus staat het volledige bedrag open.
    */
    total_price: order.summary.gross,
    vat_amount: order.summary.vat,
    currency: "EUR",
    payment_status: "unpaid",
    amount_paid: 0,
    balance_due: order.summary.gross,
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
  if (kind !== "booking" && kind !== "reservering" && kind !== "afhaal") {
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

  if (kind === "afhaal") return afhaal(data);

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

  return deliver(payload, `${kind} ${id}`, { id });
}

/**
 * Duwt de order naar het portaal, verwittigt klant en team, en bepaalt wat de
 * bezoeker te zien krijgt.
 *
 * Mislukt de push, dan is er nergens iets bewaard en moet de bezoeker dat weten.
 * Vroeger mocht dit stil falen omdat de order dan nog in een tweede database
 * stond; die is er niet meer. Iemand "bedankt voor uw reservering" tonen terwijl
 * er niets is aangekomen, is de ergste uitkomst van de twee — dan belt hij pas
 * als de droger er niet is.
 *
 * De reden zelf blijft binnen: die staat in de logs, niet in het antwoord.
 */
async function deliver(
  payload: VernastOrderPayload,
  context: string,
  extra: Record<string, unknown>,
  mails: (payload: VernastOrderPayload) => Promise<void> = sendRequestMails,
): Promise<Response> {
  const sync = await pushOrderToVernast(payload);
  logSyncFailure(context, sync);

  if (!sync.ok) {
    // Zichtbaar maken wat anders alleen in de Vercel-logs staat: hier gaat een
    // aanvraag verloren van iemand die op een levering of afhaling rekent.
    await alertSyncFailure(context, sync.reason, payload);
    return json(
      { error: "Uw aanvraag kon niet doorgegeven worden. Probeer het opnieuw of bel ons." },
      502
    );
  }

  /*
    Ontvangstbevestiging aan de klant en een actiemail naar het team. Bewust ná
    de push en bewust afgewacht: op Vercel stopt de functie zodra het antwoord
    verstuurd is, dus werk dat na de `return` begint, wordt afgekapt.

    Mail is nooit een reden om de bezoeker een fout te tonen — de aanvraag staat
    dan al in het portaal. `sendRequestMails` gooit niet en logt zelf.
  */
  await mails(payload);

  return json({ ok: true, ...extra });
}

/**
 * Een afhaalreservatie van de pagina met losse toestellen.
 *
 * Die pagina bevestigde tot nu toe met een verzonnen referentienummer en stuurde
 * niets door: de bezoeker las "uw afhaalreservatie staat vast" terwijl er
 * nergens iets stond. Vandaar dat elke controle hier hard is — zonder toestel,
 * datum of naam valt er niets klaar te zetten, en dan is een foutmelding beter
 * dan een order die niemand ziet.
 */
async function afhaal(data: Record<string, unknown>): Promise<Response> {
  const order = afhaalOrder(data);

  if (!order.lines.length) return json({ error: "Kies eerst minstens één toestel." }, 400);
  if (!order.date) return json({ error: "Kies een afhaaldatum vanaf vandaag." }, 400);
  if (!order.firstName) return json({ error: "Vul uw naam in." }, 400);
  if (!order.phone) return json({ error: "Vul uw telefoonnummer in." }, 400);
  if (order.customerType === "zakelijk" && (!order.company || !order.vatNumber)) {
    return json({ error: "Vul uw bedrijfsnaam en btw-nummer in." }, 400);
  }

  /*
    Dezelfde controle als bij een pakket: een afhaling legt echte toestellen
    vast. Faalt de oproep zelf, dan gaat de reservatie door — de planner ziet ze
    in het portaal en kan bijsturen. Wat geen `device_key` heeft (de TTK 650)
    valt buiten de controle; daar is aan de andere kant nog geen soort voor.
  */
  const devices = pickupDeviceLines(order.lines);
  if (devices.length) {
    const availability = await checkOne(order.date, order.days, devices);
    if (availability.answer?.available === false) {
      return json(
        {
          error:
            "Op die datum staan deze toestellen al ingepland. Kies een andere afhaaldatum, of bel ons op 03 689 90 65 — vaak kunnen we alsnog schuiven.",
          code: "niet_beschikbaar",
        },
        409,
      );
    }
    logAvailabilityFailure(`afhaal ${order.date}`, availability);
  }

  const id = randomUUID();
  const reference = newReference();

  return deliver(
    afhaalToVernast(order, id, reference),
    `afhaal ${id}`,
    { id, reference },
    sendPickupMails,
  );
}

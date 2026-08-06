/**
 * Ontvangt een order van de site en zorgt dat hij op twee plaatsen belandt: in
 * ons eigen Supabase (de bron) en in het bouwdrogers-portaal van Vernast (de
 * werklijst).
 *
 * De formulieren schreven vroeger rechtstreeks vanuit de browser naar Supabase.
 * Dat werkt, maar de anon-sleutel zit in de JS-bundle, dus iedereen kan er rijen
 * mee aanmaken — en er was geen plek om de order door te sturen. Nu loopt alles
 * langs deze route.
 *
 * Belangrijke regel: als de push naar Vernast faalt, krijgt de bezoeker alsnog
 * succes. De order staat dan in ons Supabase; een storing aan onze kant mag de
 * boeking van een klant niet laten sneuvelen.
 */
import { createClient } from "@supabase/supabase-js";
import { logSyncFailure, pushOrderToVernast, type VernastOrderPayload } from "../src/lib/vernastSync";

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

/**
 * De service-key mag de RLS omzeilen; is die niet geconfigureerd, dan valt de
 * route terug op de publieke sleutel en werkt hij precies zoals de browser
 * vroeger deed. Zo is deze wijziging op zichzelf niet-brekend: de anon-insert
 * policy kan later dichtgezet worden zodra de service-key overal staat.
 */
function supabaseClient() {
  const url = process.env.VITE_SUPABASE_URL ?? process.env.SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.VITE_SUPABASE_PUBLISHABLE_KEY ??
    process.env.SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
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

  const supabase = supabaseClient();
  if (!supabase) {
    return json({ error: "Supabase is niet geconfigureerd op deze omgeving." }, 500);
  }

  const table = kind === "booking" ? "bookings" : "reserveringen";

  // De browser stuurt de rij zoals de formulieren hem altijd al opbouwden. We
  // forceren wel de status: een bezoeker mag geen order aanmaken die meteen als
  // bevestigd of betaald geldt (zelfde regel als de RLS-policy).
  const row = kind === "booking" ? { ...data, status: "pending", user_id: null } : { ...data };

  const { data: inserted, error } = await supabase.from(table).insert(row).select("id").single();

  if (error) {
    console.error(`[order] insert in ${table} mislukt:`, error);
    return json({ error: "Er ging iets mis bij het bewaren van uw aanvraag." }, 500);
  }

  const id = String(inserted.id);
  const payload =
    kind === "booking" ? bookingToVernast(data, id) : reserveringToVernast(data, id);

  const sync = await pushOrderToVernast(payload);
  logSyncFailure(`${kind} ${id}`, sync);

  // Bewust altijd 200 zodra de order in ons eigen Supabase staat: de bezoeker
  // is klaar, ook als Vernast even niet bereikbaar was.
  return json({ ok: true, id, synced: sync.ok });
}

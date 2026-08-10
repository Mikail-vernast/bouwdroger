/**
 * Welke mails deze site verstuurt, en met welke parameters.
 *
 * Eén plek voor alle transactionele mail. De opmaak zit in Brevo; hier staat
 * per mail alleen: welk sjabloon, naar wie, en welke velden het sjabloon kan
 * gebruiken. Een nieuwe tekst schrijven is dus een kwestie van de sjabloon in
 * Brevo aanpassen — de code hoeft niet mee.
 *
 * De sjabloon-ID's komen uit environment variables (zie `TEMPLATE_ENV`
 * hieronder en de tabel in README.md). Staat er geen ID voor een mail, dan
 * wordt die mail overgeslagen met een logregel in plaats van een fout. Zo kan
 * dit al draaien terwijl de sjablonen nog niet allemaal bestaan, en kan elke
 * mail apart aangezet worden zodra hij klaar is.
 *
 * Server-only, net als `brevo.ts`.
 */

import { sendTemplate, type BrevoRecipient } from "./brevo.js";
import type { DeviceKey } from "../data/verhuur.js";
import { euro } from "./verhuur.js";
import type { VernastOrderPayload } from "./vernastSync.js";

/** Elke mail die deze site kan versturen. */
export type MailKey =
  /** Klant: betaling gelukt, boeking staat vast. */
  | "boeking_betaald"
  /** Klant: aanvraag binnen, nog geen bevestiging. */
  | "aanvraag_ontvangen"
  /** Klant: contactformulier binnen. */
  | "contact_ontvangen"
  /** Team: nieuwe betaalde boeking. */
  | "intern_boeking"
  /** Team: nieuwe aanvraag, actie vereist. */
  | "intern_aanvraag"
  /** Team: bericht via het contactformulier. */
  | "intern_contact"
  /** Team: een order raakte niet in het portaal. */
  | "intern_alarm";

/**
 * De env-variabele met de sjabloon-ID per mail. Bewust sprekende namen: wie in
 * `vercel env ls` kijkt, moet zien welke mail hij voor zich heeft.
 */
export const TEMPLATE_ENV: Record<MailKey, string> = {
  boeking_betaald: "BREVO_TPL_BOEKING_BETAALD",
  aanvraag_ontvangen: "BREVO_TPL_AANVRAAG_ONTVANGEN",
  contact_ontvangen: "BREVO_TPL_CONTACT_ONTVANGEN",
  intern_boeking: "BREVO_TPL_INTERN_BOEKING",
  intern_aanvraag: "BREVO_TPL_INTERN_AANVRAAG",
  intern_contact: "BREVO_TPL_INTERN_CONTACT",
  intern_alarm: "BREVO_TPL_INTERN_ALARM",
};

/** Waar de interne mails heen gaan. */
function teamRecipient(): BrevoRecipient | null {
  const email = process.env.BREVO_TEAM_EMAIL?.trim();
  return email ? { email, name: "Vernast Bouwdrogers" } : null;
}

function templateId(key: MailKey): number | null {
  const raw = process.env[TEMPLATE_ENV[key]]?.trim();
  if (!raw) return null;
  const id = Number(raw);
  return Number.isInteger(id) && id > 0 ? id : null;
}

/**
 * Verstuurt de mail en logt de afloop. Geeft niets terug: geen enkele
 * aanroeper mag zijn eigen afloop laten afhangen van een mail.
 */
async function send(
  key: MailKey,
  to: BrevoRecipient | null,
  params: Record<string, unknown>,
  replyTo?: BrevoRecipient,
): Promise<void> {
  const id = templateId(key);
  if (!id) {
    console.warn(`[mail] ${key} overgeslagen: ${TEMPLATE_ENV[key]} staat niet ingesteld.`);
    return;
  }

  if (!to?.email) {
    console.warn(`[mail] ${key} overgeslagen: geen ontvanger.`);
    return;
  }

  const result = await sendTemplate({ templateId: id, to, params, replyTo, tags: [key] });
  if (!result.ok) {
    console.error(`[mail] ${key} naar ${to.email} mislukt: ${result.reason}`);
  }
}

/* ============================================================
   Parameters
   ============================================================ */

const DEVICE_LABEL: Record<DeviceKey, string> = {
  small: "Small Bouwdroger",
  medium: "Medium Bouwdroger",
  axiaal: "Axiaalventilator",
  kachel: "Elektrische kachel",
};

/**
 * Datums opgemaakt voor in de mail. Een Brevo-sjabloon kan niet formatteren,
 * dus wat hier niet klaar is, staat straks als "2026-08-17" in de mailbox van
 * de klant.
 *
 * De tijdzone staat er expliciet bij: een kale datum wordt anders als UTC
 * middernacht gelezen, en dat is in Brussel de dag ervoor.
 */
function formatWith(
  iso: string | null | undefined,
  options: Intl.DateTimeFormatOptions,
): string {
  if (!iso) return "";
  const date = new Date(iso.length <= 10 ? `${iso}T12:00:00Z` : iso);
  if (Number.isNaN(date.getTime())) return String(iso);
  return new Intl.DateTimeFormat("nl-BE", { ...options, timeZone: "Europe/Brussels" }).format(
    date,
  );
}

/** "17 augustus 2026" — voor een besteldatum, waar het jaar telt. */
export function formatDate(iso: string | null | undefined): string {
  return formatWith(iso, { day: "numeric", month: "long", year: "numeric" });
}

/**
 * "maandag 17 augustus" — voor lever- en ophaaldatums. De weekdag erbij en het
 * jaar eraf: wie leest wanneer zijn droger komt, plant in dagen, niet in jaren.
 */
export function formatWeekday(iso: string | null | undefined): string {
  return formatWith(iso, { weekday: "long", day: "numeric", month: "long" });
}

/** "1.289,26" — zonder euroteken, dat staat in het sjabloon. */
export function formatAmount(value: number): string {
  return value.toLocaleString("nl-BE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

/** "2× Small Bouwdroger, 4× Axiaalventilator" — één regel voor in de mail. */
export function formatDevices(payload: VernastOrderPayload): string {
  const fromLines = (payload.order_lines ?? []).map(
    (line) => `${line.qty}× ${DEVICE_LABEL[line.device_key] ?? line.device_key}`,
  );
  if (fromLines.length) return fromLines.join(", ");

  /*
    De formulierroutes sturen geen `order_lines` maar losse aantallen. Zonder
    deze tak zou een boeking via het aanvraagformulier een mail opleveren die
    niet vermeldt wát er komt.
  */
  const counted: string[] = [];
  if (payload.equipment_drogers) counted.push(`${payload.equipment_drogers}× bouwdroger`);
  if (payload.equipment_ventilatoren)
    counted.push(`${payload.equipment_ventilatoren}× ventilator`);
  if (payload.equipment_verwarming) counted.push(`${payload.equipment_verwarming}× kachel`);
  if (counted.length) return counted.join(", ");

  return payload.machine ?? "";
}

function fullName(payload: VernastOrderPayload): string {
  return [payload.first_name, payload.last_name].filter(Boolean).join(" ").trim();
}

function fullAddress(payload: VernastOrderPayload): string {
  const street = payload.address ?? "";
  const town = [payload.postal_code, payload.city].filter(Boolean).join(" ");
  return [street, town].filter(Boolean).join(", ");
}

/**
 * Alles wat een sjabloon over een order kan tonen, als `{{ params.x }}`.
 *
 * Bewust platte, voorgevormde waarden: bedragen als "€ 616,00", datums
 * uitgeschreven, aantallen samengevat. Een Brevo-sjabloon kan niet rekenen of
 * formatteren, dus wat hier niet klaar is, staat straks lelijk in de mailbox
 * van de klant. Lege velden blijven een lege string en niet `null`, want dat
 * laatste rendert Brevo als "null".
 */
export function orderParams(payload: VernastOrderPayload): Record<string, unknown> {
  const amount = payload.total_price ?? 0;

  return {
    referentie: payload.order_number ?? payload.external_id,
    bron: payload.source,

    klant_naam: fullName(payload),
    voornaam: payload.first_name ?? "",
    achternaam: payload.last_name ?? "",
    email: payload.email ?? "",
    telefoon: payload.phone ?? "",
    klanttype: payload.customer_type ?? "",
    bedrijf: payload.company_name ?? "",
    btw_nummer: payload.vat_number ?? "",

    adres: fullAddress(payload),
    straat: payload.address ?? "",
    postcode: payload.postal_code ?? "",
    gemeente: payload.city ?? "",

    pakket: payload.package_tier ?? "",
    toestellen: formatDevices(payload),
    situatie: payload.situatie ?? "",
    oppervlakte: payload.sqm ?? "",
    ruimte: payload.room_type ?? "",

    leverdatum: formatDate(payload.delivery_date ?? payload.rental_start_date),
    tijdslot: payload.delivery_slot ?? "",
    huur_start: formatDate(payload.rental_start_date),
    huur_eind: formatDate(payload.rental_end_date),
    huurdagen: payload.duration_days ?? "",
    huurduur: payload.duration_label ?? "",

    bedrag: euro(amount),
    bedrag_getal: amount,
    munt: payload.currency ?? "EUR",
    betaald: payload.payment_status === "paid" ? "ja" : "nee",
    betaalmethode: payload.online_payment_method ?? "",

    opmerking: payload.customer_note ?? "",
  };
}

/* ============================================================
   Sjabloon 198 — boeking betaald & bevestigd
   ============================================================ */

/** Btw-tarief op verhuur in België. */
const VAT_RATE = 21;

/**
 * Hoeveel op voorhand gebeld wordt, en tot hoe lang kosteloos annuleren kan.
 * In env omdat het afspraken zijn die kunnen wijzigen zonder dat de code mee
 * hoeft — en omdat ze in de mail als harde belofte staan.
 */
function callNotice(): string {
  return process.env.MAIL_CALL_NOTICE?.trim() || "1 werkdag";
}

function cancellationHours(): number {
  const raw = Number(process.env.MAIL_CANCELLATION_HOURS?.trim());
  return Number.isFinite(raw) && raw > 0 ? raw : 48;
}

/**
 * Het tijdvenster van de chauffeur. De wizard vraagt een tijdslot; is dat leeg,
 * dan is een ruim venster beter dan een lege regel in de mail.
 */
function timeSlot(slot: string | null | undefined): string {
  return slot?.trim() || process.env.MAIL_DEFAULT_TIJDSLOT?.trim() || "tussen 8u en 17u";
}

/** De sleutels van Stripe naar iets wat een klant herkent. */
const PAYMENT_LABEL: Record<string, string> = {
  card: "Kaart",
  bancontact: "Bancontact",
  ideal: "iDEAL",
  apple_pay: "Apple Pay",
  google_pay: "Google Pay",
  klarna: "Klarna",
  link: "Link",
  sepa_debit: "SEPA-domiciliëring",
  sofort: "SOFORT",
};

function paymentLabel(method: string | null | undefined): string {
  if (!method) return "Online betaald";
  return PAYMENT_LABEL[method] ?? method.replace(/_/g, " ");
}

/** Wat sjabloon 198 nodig heeft en niet uit de portaal-payload valt te halen. */
export interface PaidBookingFacts {
  payload: VernastOrderPayload;
  /** Wat Stripe effectief geïncasseerd heeft, in euro. */
  paidAmount: number;
  /**
   * `full` — alles vooraf betaald, met 5% korting.
   * `deposit` — enkel de orderbevestiging betaald, de rest bij levering.
   */
  paymentType: "full" | "deposit";
  /** De korting voor vooruitbetalen, in euro. Nul bij een voorschot. */
  discount: number;
  /** Het leveradres in losse delen; de payload heeft er één regel van. */
  street: string;
  zip: string;
  city: string;
  /** Waar de knop "Bekijk uw bestelling" heen wijst. */
  orderUrl: string;
}

/**
 * De parameters van sjabloon 198, één op één met de namen in Brevo.
 *
 * Bedragen gaan als geformatteerde string mee en niet als getal: Brevo rendert
 * een float als `350.0`, en het euroteken staat al in de sjabloon-HTML.
 *
 * De rekenvolgorde volgt het sjabloon: huurprijs excl. btw, dan de korting
 * eraf, dan de btw over wat overblijft. `total_price` is in deze code het
 * bedrag ná korting — vandaar dat `price_excl_vat` de korting er weer bij
 * optelt, anders zou het sjabloon ze een tweede keer aftrekken.
 *
 * Let op de btw. De wizard toont prijzen expliciet excl. btw en de checkout
 * rekent datzelfde bedrag af, dus `paid_amount` is wat er echt van de kaart
 * ging. Zolang de checkout geen btw aanrekent, is dat minder dan
 * `price_incl_vat`.
 */
export function paidBookingParams(facts: PaidBookingFacts): Record<string, unknown> {
  const { payload } = facts;
  const netExcl = payload.total_price ?? 0;
  const grossExcl = netExcl + facts.discount;
  const vatAmount = Math.round(netExcl * VAT_RATE) / 100;
  const inclVat = netExcl + vatAmount;
  const full = facts.paymentType === "full";

  return {
    payment_type: facts.paymentType,
    customer_name: fullName(payload),
    order_number: payload.order_number ?? payload.external_id,
    order_date: formatDate(payload.paid_at ?? new Date().toISOString()),
    order_url: facts.orderUrl,

    delivery_date: formatWeekday(payload.delivery_date ?? payload.rental_start_date),
    delivery_time: timeSlot(payload.delivery_slot),
    // Vernast levert en haalt op in dezelfde ronde, dus hetzelfde venster.
    pickup_date: formatWeekday(payload.rental_end_date),
    pickup_time: timeSlot(payload.delivery_slot),

    delivery_street: facts.street,
    delivery_zip: facts.zip,
    delivery_city: facts.city,

    package_name: payload.package_tier ?? "",
    items: (payload.order_lines ?? []).map((line) => ({
      name: DEVICE_LABEL[line.device_key] ?? line.device_key,
      quantity: line.qty,
    })),
    rental_days: payload.duration_days ?? "",

    price_excl_vat: formatAmount(grossExcl),
    vat_rate: VAT_RATE,
    vat_amount: formatAmount(vatAmount),
    price_incl_vat: formatAmount(inclVat),
    paid_amount: formatAmount(facts.paidAmount),
    payment_method: paymentLabel(payload.online_payment_method),

    call_notice: callNotice(),
    cancellation_hours: cancellationHours(),

    /*
      De kortingsregel hoort alleen bij een volledige betaling; bij een
      voorschot komt in de plaats het saldo dat de technieker int. Nooit allebei
      meesturen, want dan hangt het van de sjabloonlogica af welke van de twee
      de klant ziet.
    */
    ...(full
      ? { discount_amount: formatAmount(facts.discount) }
      : { balance_due: formatAmount(Math.max(0, inclVat - facts.paidAmount)) }),

    // Optioneel in het sjabloon: staat er niets, dan valt het blok weg.
    ...(payload.customer_note ? { delivery_notes: payload.customer_note } : {}),
  };
}

/* ============================================================
   De mails zelf
   ============================================================ */

function customer(payload: VernastOrderPayload): BrevoRecipient | null {
  return payload.email ? { email: payload.email, name: fullName(payload) || null } : null;
}

/**
 * Betaalde boeking: bevestiging aan de klant én een melding aan het team.
 *
 * Wordt aangeroepen ná een geslaagde push naar het portaal, zodat er nooit een
 * "uw boeking staat vast" vertrekt voor een order die nergens genoteerd staat.
 *
 * De klant krijgt precies de parameters van sjabloon 198. Het team krijgt die
 * plus de ruwere ordervelden, zodat een interne sjabloon vrij te vullen is
 * zonder dat deze code mee moet.
 */
export async function sendPaidBookingMails(facts: PaidBookingFacts): Promise<void> {
  const forCustomer = paidBookingParams(facts);
  const to = customer(facts.payload);

  await Promise.all([
    send("boeking_betaald", to, forCustomer),
    send("intern_boeking", teamRecipient(), { ...orderParams(facts.payload), ...forCustomer }, to ?? undefined),
  ]);
}

/**
 * Onbetaalde aanvraag (boekingsformulier of reservering): ontvangstbevestiging
 * aan de klant en een actiemail aan het team. De klantmail mag nooit als
 * bevestiging klinken — er is nog niets ingepland.
 */
export async function sendRequestMails(payload: VernastOrderPayload): Promise<void> {
  const params = orderParams(payload);
  await Promise.all([
    send("aanvraag_ontvangen", customer(payload), params),
    send("intern_aanvraag", teamRecipient(), params, customer(payload) ?? undefined),
  ]);
}

export interface ContactMessage {
  naam: string;
  email: string;
  telefoon?: string | null;
  onderwerp?: string | null;
  bericht: string;
}

/** Contactformulier: kopie aan de klant, het bericht zelf naar het team. */
export async function sendContactMails(message: ContactMessage): Promise<void> {
  const params: Record<string, unknown> = {
    naam: message.naam,
    email: message.email,
    telefoon: message.telefoon ?? "",
    onderwerp: message.onderwerp ?? "",
    bericht: message.bericht,
  };
  const from: BrevoRecipient = { email: message.email, name: message.naam || null };

  await Promise.all([
    send("contact_ontvangen", from, params),
    send("intern_contact", teamRecipient(), params, from),
  ]);
}

/**
 * Alarm wanneer een order het portaal niet haalt.
 *
 * Tot nu toe bleef zo'n mislukking een logregel in Vercel waar niemand naar
 * kijkt, terwijl het om een klant gaat die betaald heeft of op een levering
 * rekent. De volledige gegevens gaan mee: dat is wat nodig is om de order met
 * de hand alsnog in te geven.
 */
export async function alertSyncFailure(
  context: string,
  reason: string | undefined,
  payload: VernastOrderPayload,
): Promise<void> {
  await send("intern_alarm", teamRecipient(), {
    context,
    reden: reason ?? "onbekend",
    ...orderParams(payload),
    ruwe_order: JSON.stringify(payload, null, 2),
  });
}

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

import { sendPlain, sendTemplate, type BrevoRecipient } from "./brevo.js";
import { mailAllowed } from "./rateLimit.js";
import type { DeviceKey } from "../data/verhuur.js";
import { euro } from "./verhuur.js";
import type { VernastOrderPayload } from "./vernastSync.js";

/** Elke mail die deze site kan versturen. */
export type MailKey =
  /** Klant: betaling gelukt, boeking staat vast. */
  | "boeking_betaald"
  /** Klant: wij leveren morgen. */
  | "levering_morgen"
  /** Klant: de huur loopt af, verlengen kan nog. */
  | "ophaling_verlengen"
  /** Klant: aanvraag binnen, nog geen bevestiging. */
  | "aanvraag_ontvangen"
  /** Klant: contactformulier binnen. */
  | "contact_ontvangen"
  /** Klant: afhaalreservatie bevestigd (betaald of op factuur). */
  | "afhaal_bevestigd"
  /** Team: nieuwe betaalde boeking. */
  | "intern_boeking"
  /** Team: nieuwe afhaalreservatie. */
  | "intern_afhaal"
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
  levering_morgen: "BREVO_TPL_LEVERING_MORGEN",
  ophaling_verlengen: "BREVO_TPL_OPHALING_VERLENGEN",
  aanvraag_ontvangen: "BREVO_TPL_AANVRAAG_ONTVANGEN",
  contact_ontvangen: "BREVO_TPL_CONTACT_ONTVANGEN",
  afhaal_bevestigd: "BREVO_TPL_AFHAAL_BEVESTIGD",
  intern_boeking: "BREVO_TPL_INTERN_BOEKING",
  intern_afhaal: "BREVO_TPL_INTERN_AFHAAL",
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
 * Het onderwerp van elke interne melding, voor wanneer er geen sjabloon staat.
 *
 * Deze vier gaan naar het team en niet naar een klant. Ze dienen alle vier als
 * melding — er is een bericht, een aanvraag, een boeking, of er is iets
 * misgelopen — en daar telt aankomen, niet opmaak.
 *
 * Waarom dit er staat: `send()` sloeg een mail zonder sjabloon-ID stil over. Dat
 * was bedoeld als "we zetten ze één voor één aan", maar in productie stonden
 * alleen de drie klantsjablonen ingesteld. Gevolg: het contactformulier gooide
 * zijn berichten opnieuw weg — nu niet in de front-end maar hier — en
 * `intern_alarm` ging niet af op precies het moment waarop dat moet, namelijk
 * wanneer een klant betaald heeft en zijn order het portaal niet haalt.
 *
 * Dezelfde afweging als bij `sendExtensionRequest`: een kale tekstmail is beter
 * dan een verdwenen melding. Klantmails blijven wél sjabloon-only — daar is een
 * onopgemaakte mail erger dan geen mail.
 */
const INTERNAL_SUBJECT: Partial<Record<MailKey, (p: Record<string, unknown>) => string>> = {
  intern_contact: (p) => `Bericht via het contactformulier — ${plain(p.naam) || "onbekend"}`,
  intern_aanvraag: (p) => `Nieuwe aanvraag — ${plain(p.referentie)}`,
  intern_boeking: (p) => `Nieuwe betaalde boeking — ${plain(p.referentie)}`,
  intern_afhaal: (p) => `Afhaalreservatie — ${plain(p.referentie)} (${plain(p.leverdatum)})`,
  intern_alarm: (p) => `ORDER NIET DOORGEKOMEN — ${plain(p.referentie)}`,
};

function plain(value: unknown): string {
  if (value === null || value === undefined) return "";
  return String(value).trim();
}

/** Waar een klant ons bereikt als hij op zo'n tekstmail wil reageren. */
const TELEFOON = "03 689 90 65";

/**
 * De twee ontvangstbevestigingen die als kale tekstmail mogen vertrekken zolang
 * hun sjabloon niet ingesteld staat, met een eigen tekst in plaats van de
 * parameterdump van `paramsToText` — een klant hoort geen veldnamen te lezen.
 *
 * Waarom deze uitzondering op "klantmail is sjabloon-only": in productie stonden
 * `BREVO_TPL_AANVRAAG_ONTVANGEN` en `BREVO_TPL_CONTACT_ONTVANGEN` niet
 * ingesteld, dus `send()` sloeg ze over. Wie het contactformulier invulde kreeg
 * dus niets terug — exact het gedrag dat het formulier vóór `api/contact.ts` al
 * had, alleen nu een laag dieper. Een ontvangstbevestiging bestaat om te zeggen
 * "het is aangekomen"; die boodschap overleeft het verlies van opmaak prima.
 *
 * De andere klantmails blijven wél sjabloon-only. `boeking_betaald`,
 * `levering_morgen` en `ophaling_verlengen` dragen bedragen, datums en een
 * knop — zonder opmaak worden dat regels tekst die de klant verkeerd leest, en
 * daar is geen mail beter dan een lelijke.
 */
const CUSTOMER_FALLBACK: Partial<
  Record<MailKey, (p: Record<string, unknown>) => { subject: string; text: string }>
> = {
  contact_ontvangen: (p) => ({
    subject: "Wij hebben uw bericht goed ontvangen",
    text: [
      `Dag ${plain(p.naam) || "klant"},`,
      "",
      "Wij hebben uw bericht goed ontvangen en nemen zo snel mogelijk contact met u op.",
      "",
      "Uw bericht:",
      plain(p.bericht),
      "",
      "Met vriendelijke groeten,",
      `Vernast Bouwdrogers — ${TELEFOON}`,
    ].join("\n"),
  }),
  aanvraag_ontvangen: (p) => ({
    subject: `Wij hebben uw aanvraag goed ontvangen — ${plain(p.referentie)}`,
    text: [
      `Dag ${plain(p.klant_naam) || "klant"},`,
      "",
      "Wij hebben uw aanvraag goed ontvangen. Dit is nog geen bevestiging: wij kijken",
      "de beschikbaarheid na en bellen u terug om alles vast te leggen.",
      "",
      `Referentie: ${plain(p.referentie)}`,
      plain(p.toestellen) ? `Toestellen: ${plain(p.toestellen)}` : "",
      plain(p.leverdatum) ? `Gewenste leverdatum: ${plain(p.leverdatum)}` : "",
      "",
      "Met vriendelijke groeten,",
      `Vernast Bouwdrogers — ${TELEFOON}`,
    ]
      .filter((line, i, all) => line !== "" || all[i - 1] !== "")
      .join("\n"),
  }),
};

/** De parameters als leesbare regels, voor een mail zonder sjabloon. */
function paramsToText(params: Record<string, unknown>): string {
  return Object.entries(params)
    .map(([label, value]) => [label, plain(value)] as const)
    .filter(([, value]) => value !== "")
    .map(([label, value]) => `${label.replace(/_/g, " ")}: ${value}`)
    .join("\n");
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
  if (!to?.email) {
    console.warn(`[mail] ${key} overgeslagen: geen ontvanger.`);
    return;
  }

  const id = templateId(key);

  /*
    Geen sjabloon, maar wel een interne melding: dan gaat hij als tekst buiten.
    Zie `INTERNAL_SUBJECT` voor waarom stil overslaan hier de verkeerde keuze
    bleek.
  */
  if (!id) {
    /*
      Eerst de klantbevestigingen: die krijgen een geschreven tekst mee, niet de
      parameterdump waar de interne meldingen genoeg aan hebben.
    */
    const forCustomer = CUSTOMER_FALLBACK[key];
    if (forCustomer) {
      const { subject, text } = forCustomer(params);
      console.warn(
        `[mail] ${key}: ${TEMPLATE_ENV[key]} staat niet ingesteld, verstuurd als tekstmail.`,
      );
      const plainResult = await sendPlain({
        to,
        subject,
        text,
        replyTo,
        tags: [key, "zonder-sjabloon"],
      });
      if (!plainResult.ok) {
        console.error(`[mail] ${key} naar ${to.email} mislukt: ${plainResult.reason}`);
      }
      return;
    }

    const subject = INTERNAL_SUBJECT[key];
    if (!subject) {
      console.warn(`[mail] ${key} overgeslagen: ${TEMPLATE_ENV[key]} staat niet ingesteld.`);
      return;
    }

    console.warn(
      `[mail] ${key}: ${TEMPLATE_ENV[key]} staat niet ingesteld, verstuurd als tekstmail.`,
    );
    const fallback = await sendPlain({
      to,
      subject: subject(params),
      text: paramsToText(params),
      replyTo,
      tags: [key, "zonder-sjabloon"],
    });
    if (!fallback.ok) {
      console.error(`[mail] ${key} naar ${to.email} mislukt: ${fallback.reason}`);
    }
    return;
  }

  const result = await sendTemplate({ templateId: id, to, params, replyTo, tags: [key] });
  if (!result.ok) {
    console.error(`[mail] ${key} naar ${to.email} mislukt: ${result.reason}`);
  }
}

/**
 * Idem, maar voor een mail naar een adres dat de afzender van de request zelf
 * heeft opgegeven — de ontvangstbevestiging van het contactformulier en van een
 * aanvraag. Dat zijn de twee mails die iemand op een willekeurig slachtoffer
 * kan richten, dus die gaan langs `mailAllowed`. Zie `src/lib/rateLimit.ts`.
 */
async function sendToSelfChosenAddress(
  key: MailKey,
  to: BrevoRecipient | null,
  params: Record<string, unknown>,
  replyTo?: BrevoRecipient,
): Promise<void> {
  if (to?.email && !mailAllowed(to.email)) {
    console.warn(`[mail] ${key} overgeslagen: te veel mail naar ${to.email} in het laatste uur.`);
    return;
  }
  return send(key, to, params, replyTo);
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
  /** Extra info bij het adres, bv. "achteraan via de poort". Zie `deliveryNotes`. */
  deliveryNotes?: string;
}

/*
  Waarom `deliveryNotes` apart staat en niet uit `customer_note` komt: dat veld
  bevat bij een Stripe-boeking de samenvatting van het pakket — "Dekking Eigen
  risico € 250: 29 | Vochtmeting bij start & oplevering: inbegrepen | …". Als
  adresnotitie in de mail leest dat als een fout. De wizard vraagt (nog) niet om
  een toelichting bij het adres, dus het blok blijft voorlopig weg.
*/

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
    ...(facts.deliveryNotes ? { delivery_notes: facts.deliveryNotes } : {}),
  };
}

/* ============================================================
   Sjabloon 199 — wij leveren morgen
   ============================================================ */

/**
 * Het tijdslot als twee losse uren. De wizard bewaart het als "10:00 – 12:00";
 * sjabloon 199 zet begin en einde apart in beeld.
 *
 * Zonder bruikbaar slot een ruim venster in plaats van lege velden: de mail
 * belooft dan een dag in plaats van een uur, en dat is nog altijd beter dan
 * "wij zijn er tussen  en ".
 */
export function splitSlot(slot: string | null | undefined): { from: string; to: string } {
  const match = slot?.match(/(\d{1,2})[:u.](\d{2})\s*[–—-]\s*(\d{1,2})[:u.](\d{2})/);
  if (!match) return { from: "08:00", to: "17:00" };
  const pad = (value: string) => value.padStart(2, "0");
  return { from: `${pad(match[1])}:${match[2]}`, to: `${pad(match[3])}:${match[4]}` };
}

/** Wat sjabloon 199 nodig heeft bovenop de order zelf. */
export interface DeliveryReminderFacts {
  payload: VernastOrderPayload;
  paymentType: "full" | "deposit";
  /** Wat de technieker morgen int; alleen van belang bij een voorschot. */
  balanceDue: number;
  street: string;
  zip: string;
  city: string;
  orderUrl: string;
  /** Extra info bij het adres; zelfde blok als in sjabloon 198. */
  deliveryNotes?: string;
}

/**
 * De parameters van sjabloon 199.
 *
 * `payment_type` gaat altijd mee, ook bij een volledige betaling: het sjabloon
 * toont het saldoblok bij `!= "full"`, en een ontbrekende waarde is dat ook —
 * dan verschijnt er een saldoblok met een leeg bedrag bij iemand die al betaald
 * heeft.
 */
export function deliveryReminderParams(facts: DeliveryReminderFacts): Record<string, unknown> {
  const { payload } = facts;
  const slot = splitSlot(payload.delivery_slot);

  return {
    customer_name: fullName(payload),
    order_number: payload.order_number ?? payload.external_id,
    order_url: facts.orderUrl,

    delivery_date: formatWeekday(payload.delivery_date ?? payload.rental_start_date),
    delivery_time_from: slot.from,
    delivery_time_to: slot.to,

    delivery_street: facts.street,
    delivery_zip: facts.zip,
    delivery_city: facts.city,

    payment_type: facts.paymentType,
    ...(facts.paymentType === "full"
      ? {}
      : { balance_due: formatAmount(Math.max(0, facts.balanceDue)) }),
    ...(facts.deliveryNotes ? { delivery_notes: facts.deliveryNotes } : {}),
  };
}

/* ============================================================
   Sjabloon 200 — de huur loopt af
   ============================================================ */

/** Wat sjabloon 200 nodig heeft bovenop de order zelf. */
export interface ExtensionOfferFacts {
  payload: VernastOrderPayload;
  /** Waar de knop "Verlengen" heen wijst. */
  extensionUrl: string;
}

/**
 * De parameters van sjabloon 200. Alle zes verplicht: dit sjabloon heeft geen
 * voorwaardelijke blokken, dus een ontbrekende waarde is meteen een gat in de
 * mail.
 */
export function extensionOfferParams(facts: ExtensionOfferFacts): Record<string, unknown> {
  const { payload } = facts;
  // Vernast haalt op in dezelfde ronde als de levering, dus hetzelfde venster.
  const slot = splitSlot(payload.delivery_slot);

  return {
    customer_name: fullName(payload),
    order_number: payload.order_number ?? payload.external_id,
    pickup_date: formatWeekday(payload.rental_end_date),
    pickup_time_from: slot.from,
    pickup_time_to: slot.to,
    extension_url: facts.extensionUrl,
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
 * Afhaalreservatie: bevestiging aan de klant én een melding aan het team.
 *
 * Bewust niet `boeking_betaald`: dat sjabloon belooft een chauffeur, een
 * leveradres en een installatie. Bij afhalen komt niemand langs — daar telt waar
 * het magazijn ligt en wanneer het openstaat. Eén verkeerde bevestigingsmail en
 * de klant staat thuis te wachten op iets wat hij zelf moet komen halen.
 */
export async function sendPickupMails(payload: VernastOrderPayload): Promise<void> {
  const to = customer(payload);
  const params = {
    ...orderParams(payload),
    /*
      De toestellen zoals de klant ze op de site koos ("2× TTK 170 S"), niet de
      depotnamen die `formatDevices` uit `order_lines` haalt ("2× Small
      Bouwdroger"). Wie een TTK 170 S bestelde, hoort dat terug te lezen.
    */
    toestellen: payload.machine || formatDevices(payload),
    afhaaldatum: formatWeekday(payload.delivery_date ?? payload.rental_start_date),
    afhaalmoment: payload.delivery_slot ?? "",
    afhaalpunt: "Boomsesteenweg 12, Unit 11, 2630 Aartselaar",
    terugbrengen: formatWeekday(payload.rental_end_date),
    betaald_bedrag: euro(payload.amount_paid ?? 0),
    openstaand: euro(payload.balance_due ?? 0),
  };

  await Promise.all([
    // Het adres komt uit het formulier, dus langs dezelfde drempel als de andere
    // bevestigingen die iemand op een willekeurig slachtoffer kan richten.
    sendToSelfChosenAddress("afhaal_bevestigd", to, params),
    send("intern_afhaal", teamRecipient(), params, to ?? undefined),
  ]);
}

/**
 * Herinnering de dag vóór de levering. Alleen naar de klant: het team ziet de
 * planning in het portaal en heeft geen kopie nodig van elke rit.
 */
export async function sendDeliveryReminderMail(facts: DeliveryReminderFacts): Promise<void> {
  await send("levering_morgen", customer(facts.payload), deliveryReminderParams(facts));
}

/**
 * Twee dagen vóór het einde van de huur: de klant kan nog verlengen.
 *
 * Alleen naar de klant. Wie verlengt, komt vanzelf binnen als aanvraag via
 * `api/extension.ts`.
 */
export async function sendExtensionOfferMail(facts: ExtensionOfferFacts): Promise<void> {
  await send("ophaling_verlengen", customer(facts.payload), extensionOfferParams(facts));
}

/**
 * Verlengaanvraag vanaf de verlengpagina: naar het team, met de klant in
 * `replyTo` zodat antwoorden vanuit de mailbox kan.
 *
 * Bewust platte tekst en geen sjabloon: een aanvraag mag niet verdwijnen omdat
 * er in Brevo nog niets klaarstaat. Iemand rekent erop dat zijn droger langer
 * blijft staan.
 */
export async function sendExtensionRequest(request: {
  referentie: string;
  naam: string;
  email: string;
  telefoon: string;
  extraDagen: number;
  huidigEinde: string;
  nieuwEinde: string;
  opmerking: string;
}): Promise<void> {
  const to = teamRecipient();
  if (!to) {
    console.error("[mail] verlengaanvraag niet verstuurd: BREVO_TEAM_EMAIL ontbreekt.");
    return;
  }

  const regels = [
    `Verlenging aangevraagd voor ${request.referentie}`,
    "",
    `Klant:      ${request.naam}`,
    `E-mail:     ${request.email}`,
    `Telefoon:   ${request.telefoon}`,
    "",
    `Huur loopt nu tot:  ${formatWeekday(request.huidigEinde)}`,
    `Gevraagd tot:       ${formatWeekday(request.nieuwEinde)}  (+${request.extraDagen} dagen)`,
    "",
    request.opmerking ? `Opmerking van de klant:\n${request.opmerking}` : "Geen opmerking.",
    "",
    "Controleer de beschikbaarheid in het portaal en bel de klant terug.",
  ];

  const result = await sendPlain({
    to,
    subject: `Verlenging aangevraagd — ${request.referentie} (+${request.extraDagen} dagen)`,
    text: regels.join("\n"),
    replyTo: { email: request.email, name: request.naam || null },
    tags: ["verlenging"],
  });

  if (!result.ok) {
    console.error(`[mail] verlengaanvraag ${request.referentie} mislukt: ${result.reason}`);
  }
}

/**
 * Onbetaalde aanvraag (boekingsformulier of reservering): ontvangstbevestiging
 * aan de klant en een actiemail aan het team. De klantmail mag nooit als
 * bevestiging klinken — er is nog niets ingepland.
 */
export async function sendRequestMails(payload: VernastOrderPayload): Promise<void> {
  const params = orderParams(payload);
  await Promise.all([
    sendToSelfChosenAddress("aanvraag_ontvangen", customer(payload), params),
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

/**
 * De ontvangstbevestiging draait op sjabloon 202 ("contact formulier
 * bevestiging") — dezelfde die vernast.be en vernast-vochtbestrijding voor hún
 * contactformulier gebruiken (`supabase/functions/contact-submission`).
 *
 * Anders dan de vorige schil (96) draagt 202 zijn eigen tekst én zijn eigen
 * onderwerp. Er gaat dus geen geschreven body meer mee: het sjabloon vult
 * alleen nog de velden van de klant in — `voornaam`, `klant_naam`, `email`,
 * `telefoon`, `onderwerp`, `bericht` en `verzonden_op`. `onderwerp` en
 * `verzonden_op` staan er in het sjabloon achter een `{% if %}`, dus leeg
 * laten is veilig; de rest niet, want die blokken staan er altijd.
 *
 * Het telefoonnummer dat de klant te zien krijgt, staat vast in het sjabloon
 * en is hetzelfde nummer als `TELEFOON`.
 *
 * De afzender blijft van ons — `sendTemplate` zet altijd `BREVO_SENDER_EMAIL`
 * en negeert de afzender die in het sjabloon staat (info@vernast.be).
 */
function contactConfirmationParams(message: ContactMessage): Record<string, unknown> {
  const naam = message.naam.trim();
  return {
    voornaam: naam.split(/\s+/)[0] || "klant",
    klant_naam: naam,
    email: message.email.trim(),
    telefoon: plain(message.telefoon),
    onderwerp: plain(message.onderwerp),
    /*
      Onbewerkt, met de regelafbrekingen van de klant erin. Brevo escapet een
      parameter zelf voor hij in het sjabloon belandt — een `<br />` die wij
      erin zetten komt als leesbare tekst aan, en wie de tekens vooraf zelf
      neutraliseert krijgt `&lt;b&gt;` in de mailbox van de klant. Beide zijn
      hier eerst in productie gemeten. De regelafbrekingen overleven doordat
      het berichtblok in sjabloon 202 `white-space: pre-line` draagt.
    */
    bericht: message.bericht.trim(),
    verzonden_op: formatDateTime(new Date()),
  };
}

/** "11 augustus 2026 om 14:32" — het moment waarop het formulier binnenkwam. */
function formatDateTime(date: Date): string {
  return new Intl.DateTimeFormat("nl-BE", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Brussels",
  })
    .format(date)
    .replace(/,\s*/, " om ");
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

  /*
    De kopie naar de afzender is begrensd, de mail naar het team niet. Wie het
    formulier misbruikt om iemand anders vol te mailen, loopt zo tegen de
    drempel — maar het bericht zelf komt nog altijd bij ons binnen, en dat is
    hier de enige opslag.
  */
  await Promise.all([
    sendToSelfChosenAddress("contact_ontvangen", from, {
      ...params,
      ...contactConfirmationParams(message),
    }),
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

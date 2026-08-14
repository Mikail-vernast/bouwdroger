/**
 * Een betaalde Stripe-sessie afleveren bij het bouwdrogers-portaal.
 *
 * Dit hing eerst volledig aan de Stripe-webhook. Eén weg, en als die niet reed
 * kwam de order nergens aan terwijl de klant "Uw boeking staat vast" op zijn
 * scherm had staan — betaald, bevestigd, en onzichtbaar voor iedereen die hem
 * moest inplannen. Dat gebeurde onder meer bij elke betaling in testmodus, waar
 * geen webhook-endpoint bestond, maar evengoed bij een gemiste levering of een
 * endpoint dat na een domeinwissel naar het verkeerde adres wijst.
 *
 * Vandaar twee wegen naar hetzelfde punt: de webhook, en de terugkeer van de
 * betaler zelf via `api/checkout-session.ts`. De webhook aan de Vernast-kant is
 * idempotent op `(source, external_id)`, dus wie er eerst is maakt niet uit en
 * dubbel afleveren bestaat niet.
 */
import type Stripe from "stripe";
import { logAvailabilityFailure, releaseHold } from "./availability.js";
import { alertSyncFailure, sendPaidBookingMails, sendPickupMails } from "./mail.js";
import { notifyNewOrder, notifySyncFailure } from "./slack.js";
import { parseDeviceLines } from "./verhuur.js";
import { logSyncFailure, pushOrderToVernast, type VernastOrderPayload } from "./vernastSync.js";

function meta(session: Stripe.Checkout.Session, key: string): string | null {
  const value = session.metadata?.[key];
  return value ? String(value).trim() || null : null;
}

/** "Voornaam Achternaam" → losse velden; het portaal toont ze apart. */
function splitName(full: string | null): { first: string | null; last: string | null } {
  if (!full) return { first: null, last: null };
  const parts = full.trim().split(/\s+/);
  if (parts.length === 1) return { first: parts[0], last: null };
  return { first: parts[0], last: parts.slice(1).join(" ") };
}

/**
 * Waarmee de klant online betaald heeft — `apple_pay`, `ideal`, `bancontact`,
 * `card`, … in de sleutels van Stripe zelf.
 *
 * Stripe hangt dit niet aan de sessie maar aan de charge eronder, en die zit
 * noch in het webhook-event noch in een gewone `retrieve`. Vandaar één extra
 * call met `expand`.
 *
 * Apple Pay en Google Pay komen binnen als een kaartbetaling met een
 * `wallet.type` erbij. Die wallet is wat het portaal wil tonen — "card" zegt
 * niets over hoe de klant het scherm bediend heeft — dus die wint.
 *
 * Lukt de call niet, dan blijft de order gewoon geldig; hij toont dan enkel
 * niet waarmee er betaald is. Dat is nooit een reden om de aflevering te laten
 * mislukken en Stripe zijn event te laten herhalen.
 */
async function onlinePaymentMethod(
  stripe: Stripe,
  session: Stripe.Checkout.Session,
): Promise<string | null> {
  if (session.payment_status !== "paid") return null;

  try {
    // De terugkeerroute haalt de sessie al mét charge op; die hoeft niet nog
    // eens over de lijn. Het webhook-event bevat alleen de ID's, dus daar wel.
    const expanded =
      typeof session.payment_intent === "object" && session.payment_intent?.latest_charge
        ? session
        : await stripe.checkout.sessions.retrieve(session.id, {
            expand: ["payment_intent.latest_charge"],
          });

    const intent = expanded.payment_intent;
    if (!intent || typeof intent === "string") return null;

    const charge = intent.latest_charge;
    if (!charge || typeof charge === "string") return null;

    const details = charge.payment_method_details;
    if (!details?.type) return null;

    return details.card?.wallet?.type ?? details.type;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "onbekende fout";
    console.error(`[vernast-order] betaalmethode van ${session.id} ophalen mislukt: ${message}`);
    return null;
  }
}

/** Bedragen blijven op de cent; anders kruipt er drift in het saldo. */
function round2(value: number): number {
  return Math.round(value * 100) / 100;
}

/** Een metadata-bedrag als getal, of `null` als de sleutel er niet staat. */
function amount(session: Stripe.Checkout.Session, key: string): number | null {
  const raw = meta(session, key);
  if (raw === null) return null;
  const value = Number(raw);
  return Number.isFinite(value) ? value : null;
}

export function sessionToVernast(
  session: Stripe.Checkout.Session,
  onlineMethod: string | null = null,
): VernastOrderPayload {
  const { first, last } = splitName(meta(session, "klant"));
  const paid = session.payment_status === "paid";

  /*
    Alle bedragen naar het portaal zijn bruto. Dat is wat er in en uit de kassa
    gaat: de chauffeur int een brutobedrag, Stripe boekt een brutobedrag, en het
    portaal zet ze naast elkaar. De btw-opsplitsing hoort thuis op de factuur,
    niet in een werklijst.

    Tot nu ging hier `totaal` naartoe — het bedrag excl. btw — terwijl het
    portaal het als "incl. btw" toont. Zelfs mét het effectief betaalde bedrag
    erbij kwam daar dan een saldo uit dat niemand ooit gaat innen.
  */
  const grossTotal = amount(session, "totaal_incl_btw");
  // Sessies van vóór de btw-wijziging kennen enkel het nettobedrag. Dat is dan
  // het beste dat we hebben; beter iets dan een order zonder totaal.
  const total = grossTotal ?? amount(session, "totaal") ?? (session.amount_total ?? 0) / 100;

  /*
    Wat Stripe effectief geïncasseerd heeft. Bewust de sessie en niet de
    metadata: die laatste zegt wat het had moeten zijn, `amount_total` zegt wat
    het geworden is.

    Zolang de betaling nog loopt — Bancontact of iDEAL waarbij de betaler hier
    al passeert — is er nog niets binnen en staat het volledige bedrag open.
  */
  const amountPaid = paid ? round2((session.amount_total ?? 0) / 100) : 0;
  const balanceDue = paid
    ? (amount(session, "saldo_bij_levering") ?? round2(Math.max(0, total - amountPaid)))
    : total;

  /*
    De btw apart erbij, zodat het portaal de bestelling nog steeds als factuur
    kan tonen: catalogusregels excl. btw, één btw-regel, en daaronder het
    brutototaal hierboven. Zonder dit veld zou de btw stilzwijgend in de
    pakketregel verdwijnen en klopte geen enkele regel meer met de
    bevestigingsmail van de klant.
  */
  const vat = amount(session, "btw");

  // Netto, net als de catalogusprijzen waar ze op slaat en net als in de
  // bevestigingsmail — de btw-regel eronder rekent er alsnog mee af.
  const discount = amount(session, "korting");

  const choice = meta(session, "betaalwijze");

  /*
    Een afhaalreservatie is geen levering. Zonder dit onderscheid komt ze in het
    portaal binnen als een gewone boeking: een pakketnaam die er niet is, en een
    tijdslot dat een chauffeur naar een werf stuurt waar niemand hem verwacht.
    Zie `api/afhaal-checkout.ts` voor waar deze sleutel gezet wordt.
  */
  const pickup = meta(session, "type") === "afhaal";

  return {
    source: "stripe",
    external_id: session.id,
    order_number: meta(session, "referentie") ?? session.client_reference_id,
    customer_type: meta(session, "klanttype"),
    first_name: first,
    last_name: last,
    email: session.customer_email ?? session.customer_details?.email ?? null,
    phone: meta(session, "telefoon"),
    address: meta(session, "werfadres"),
    // Sinds de wizard de gemeente apart vraagt, kan het portaal het leveradres
    // in kolommen tonen in plaats van als één regel. Sessies van vóór die
    // wijziging hebben deze sleutels niet; dan blijft het bij `address`.
    postal_code: meta(session, "werf_postcode"),
    city: meta(session, "werf_gemeente"),
    company_name: meta(session, "bedrijf"),
    vat_number: meta(session, "btw_nummer"),
    package_tier: pickup ? null : meta(session, "pakket"),
    machine: pickup ? meta(session, "machine") : null,
    situatie: pickup ? "afhaling" : null,
    delivery_date: meta(session, "leverdatum"),
    delivery_slot: meta(session, "tijdslot"),
    equipment_drogers: Number(meta(session, "drogers")) || null,
    equipment_ventilatoren: Number(meta(session, "ventilatoren")) || null,
    equipment_verwarming: Number(meta(session, "verwarming")) || null,
    // Zie `api/checkout.ts`: deze drie zijn de basis voor de controle op dubbele
    // boekingen. Ontbreken ze — bij een sessie van vóór die wijziging — dan
    // blijft de order gewoon geldig, hij telt alleen niet mee voor beschikbaarheid.
    rental_start_date: meta(session, "huur_start"),
    rental_end_date: meta(session, "huur_eind"),
    duration_days: Number(meta(session, "huurdagen")) || null,
    order_lines: parseDeviceLines(meta(session, "toestellen")),
    customer_note: meta(session, "regels"),
    total_price: total,
    currency: (session.currency ?? "eur").toUpperCase(),
    payment_status: paid ? "paid" : "unpaid",
    vat_amount: vat,
    payment_choice: choice === "online" || choice === "levering" ? choice : null,
    amount_paid: amountPaid,
    balance_due: balanceDue,
    discount_amount: discount,
    stripe_session_id: session.id,
    // Stripe geeft seconden, Postgres wil ISO.
    paid_at: paid ? new Date((session.created ?? 0) * 1000).toISOString() : null,
    online_payment_method: onlineMethod,
  };
}

/**
 * Metadata-sleutel die onthoudt dat de bevestigingsmail al vertrokken is.
 *
 * Nodig omdat dezelfde betaling langs twee wegen binnenkomt — de webhook en de
 * terugkeer van de betaler. Voor het portaal maakt dat niets uit, dat is
 * idempotent aan de andere kant, maar een mail is dat niet: zonder deze vlag
 * krijgt elke klant zijn bevestiging twee keer.
 */
const MAIL_FLAG = "mail_bevestiging";

/**
 * Dezelfde bescherming voor de Slack-melding, maar met een eigen sleutel.
 *
 * Bewust niet dezelfde vlag als de mail: het zijn twee onafhankelijke kanalen.
 * Deelden ze er één, dan zou een mail die om zijn eigen reden niet vertrekt de
 * Slack-melding meesleuren — en omgekeerd zou het toevoegen van Slack aan een
 * betaalstroom die al maanden draait, de bevestigingsmail kunnen breken.
 */
const SLACK_FLAG = "slack_melding";

/** Waar de site staat als de sessie zelf het niet meer weet. */
const CANONICAL_ORIGIN = "https://vernast-bouwdrogers.be";

/**
 * De link in de bevestigingsmail: de boekingspagina met deze sessie erbij,
 * hetzelfde scherm dat de betaler na Stripe te zien krijgt.
 *
 * Bij voorkeur uit de sessie zelf, want daar staat het origin waar de bezoeker
 * vandaan kwam — inclusief een preview-deploy of localhost. Stripe bewaart de
 * `{CHECKOUT_SESSION_ID}`-plaatshouder letterlijk, dus die moet er nog uit.
 */
function confirmationUrl(session: Stripe.Checkout.Session): string {
  const url = session.return_url;
  if (url) return url.replace("{CHECKOUT_SESSION_ID}", session.id);

  const base = (process.env.VITE_SITE_URL || CANONICAL_ORIGIN).replace(/\/$/, "");
  return `${base}/verhuur/boeking?session_id=${session.id}`;
}

/**
 * Claimt het recht om één keer iets te versturen. Geeft `true` aan wie er als
 * eerste is.
 *
 * De metadata uit een webhook-event is een momentopname van bij de betaling;
 * vandaar dat de sessie hier vers wordt opgehaald in plaats van het meegegeven
 * object te vertrouwen — anders ziet de webhook de vlag niet die de terugkeer
 * een seconde eerder zette.
 *
 * Lukt de claim niet omdat Stripe niet antwoordt, dan versturen we alsnog. Van
 * de twee mogelijke fouten is een dubbele melding de onschuldigste: geen
 * bevestiging laat een klant achter die betaald heeft en niets hoort, en een
 * gemiste Slack-melding is een order die niemand ziet binnenkomen.
 */
async function claimOnce(stripe: Stripe, sessionId: string, flag: string): Promise<boolean> {
  try {
    const fresh = await stripe.checkout.sessions.retrieve(sessionId);
    if (fresh.metadata?.[flag]) return false;

    // Alleen deze sleutel meesturen: Stripe voegt hem samen met de bestaande
    // metadata, waar de volledige boeking in zit.
    await stripe.checkout.sessions.update(sessionId, { metadata: { [flag]: "1" } });
    return true;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "onbekende fout";
    console.error(`[vernast-order] claim ${flag} voor ${sessionId} mislukt: ${message}`);
    return true;
  }
}

/**
 * Metadata-sleutel op de oorspronkelijke sessie: het saldo is afgerekend.
 *
 * De saldopagina leest hem om een tweede betaling te weigeren, en hij houdt de
 * afhandeling enkelvoudig wanneer dezelfde betaling langs beide wegen
 * binnenkomt — de Stripe-webhook en de terugkeer van de betaler.
 */
export const BALANCE_FLAG = "saldo_betaald";

/** Wat de saldo-sessie meedraagt om de order te kunnen bijwerken. */
export const BALANCE_TYPE = "saldo";

/**
 * De saldobetaling bij de installatie afleveren bij het portaal.
 *
 * Dit is een tweede Stripe-sessie voor een boeking die al bestaat: de klant
 * rekende bij het bestellen de orderbevestiging af, de technieker laat hem ter
 * plaatse de rest betalen. Die betaling mag dus geen nieuwe order maken —
 * `external_id` blijft dat van de oorspronkelijke sessie.
 *
 * De payload draagt enkel wat er verandert. De webhook aan de Vernast-kant
 * schrijft alleen de velden die meekomen, dus de werf, de datums, het pakket en
 * het tijdslot blijven staan zoals ze stonden.
 *
 * Zodra de order daardoor volledig betaald is, maakt het portaal de factuur en
 * mailt ze naar de klant (sjabloon 203). Dat is het moment waarop de klant zijn
 * factuur hoort te krijgen — niet bij het voorschot.
 */
export async function deliverBalancePayment(
  stripe: Stripe,
  session: Stripe.Checkout.Session,
  context: string,
): Promise<boolean> {
  const base = meta(session, "basis_sessie");
  if (!base) {
    console.error(`[vernast-saldo] sessie ${session.id} draagt geen basis_sessie`);
    return false;
  }

  if (session.payment_status !== "paid") return true;

  /*
    Wat er in totaal op deze order betaald is: het voorschot uit de
    oorspronkelijke sessie plus wat Stripe nu geïncasseerd heeft. Bewust niet
    het ordertotaal uit de metadata — dan zou een saldo dat om welke reden ook
    afwijkt, in het portaal als "volledig betaald" landen terwijl er nog geld
    open staat.
  */
  const prepaid = Number(meta(session, "voorschot_betaald") ?? "0") || 0;
  const collected = round2((session.amount_total ?? 0) / 100);
  const total = Number(meta(session, "totaal_incl_btw") ?? "0") || 0;
  const paidTotal = round2(prepaid + collected);

  const payload: VernastOrderPayload = {
    source: "stripe",
    external_id: base,
    payment_status: "paid",
    amount_paid: paidTotal,
    balance_due: round2(Math.max(0, total - paidTotal)),
    online_payment_method: await onlinePaymentMethod(stripe, session),
  };

  const sync = await pushOrderToVernast(payload);
  logSyncFailure(`${context} ${session.id}`, sync);

  if (!sync.ok) {
    // Geld binnen, portaal weet van niets. Zelfde afweging als bij een gewone
    // order: dit hoort niet in een logregel te blijven hangen.
    await Promise.all([
      alertSyncFailure(`${context} ${session.id}`, sync.reason, payload),
      notifySyncFailure(`${context} ${session.id}`, sync.reason, payload),
    ]);
    return false;
  }

  // Op de basis-sessie, niet op deze: de saldopagina kent alleen die eerste.
  await claimOnce(stripe, base, BALANCE_FLAG);
  return true;
}

/**
 * Levert de order af en geeft de hold vrij.
 *
 * De order neemt het van de hold over: die staat als echte boeking in het
 * portaal en telt vanaf daar mee voor de beschikbaarheid. Blijft de hold staan,
 * dan zou dezelfde huur dubbel geteld worden en zou de eerstvolgende bezoeker
 * ten onrechte een volle datum zien.
 *
 * Alleen vrijgeven als de push gelukt is — anders is er nog niets dat de
 * toestellen vasthoudt.
 */
export async function deliverOrder(
  stripe: Stripe,
  session: Stripe.Checkout.Session,
  context: string,
): Promise<boolean> {
  const payload = sessionToVernast(session, await onlinePaymentMethod(stripe, session));
  const sync = await pushOrderToVernast(payload);
  logSyncFailure(`${context} ${session.id}`, sync);

  if (!sync.ok) {
    // De klant heeft betaald en er staat nergens een order. Dat mag niet in een
    // logregel blijven hangen: iemand moet hem met de hand kunnen ingeven.
    // Bewust langs beide kanalen en zonder claim — deze melding twee keer zien
    // is oneindig veel beter dan ze één keer missen.
    await Promise.all([
      alertSyncFailure(`${context} ${session.id}`, sync.reason, payload),
      notifySyncFailure(`${context} ${session.id}`, sync.reason, payload),
    ]);
    return false;
  }

  logAvailabilityFailure(`release ${session.id}`, await releaseHold(session.id));

  /*
    Pas mailen als de order effectief genoteerd staat. Een bevestiging die zegt
    dat de boeking vastligt terwijl er niets is doorgekomen, is precies de
    situatie die deze module moest oplossen.

    Alleen bij een betaalde sessie: bij Bancontact of iDEAL kan de betaler hier
    al passeren terwijl de betaling nog loopt. Die krijgt zijn bevestiging
    wanneer `checkout.session.async_payment_succeeded` binnenkomt.
  */
  if (payload.payment_status !== "paid") return true;

  const pickup = meta(session, "type") === "afhaal";
  const orderUrl = confirmationUrl(session);

  /*
    Twee claims tegelijk in plaats van na elkaar: elke claim kost Stripe een
    `retrieve` plus een `update`, en dit draait in de webhook waar Stripe op
    antwoord wacht. Ze zitten elkaar niet in de weg — een `update` van metadata
    voegt samen met wat er al staat, dus beide sleutels overleven.
  */
  const [slackFirst, mailFirst] = await Promise.all([
    claimOnce(stripe, session.id, SLACK_FLAG),
    claimOnce(stripe, session.id, MAIL_FLAG),
  ]);

  if (slackFirst) await notifyNewOrder({ payload, pickup, orderUrl });

  if (!mailFirst) return true;

  /*
    Een afhaling krijgt zijn eigen bevestiging. Sjabloon 198 belooft een
    chauffeur en een installatie op het werfadres; wie zelf komt halen, heeft
    het magazijnadres en zijn afhaalmoment nodig.
  */
  if (pickup) {
    await sendPickupMails(payload);
    return true;
  }

  await sendPaidBookingMails({
    payload,
    // Wat er effectief geïncasseerd is. Bij "betalen bij levering" is dat
    // enkel de orderbevestiging, niet het volledige huurbedrag.
    paidAmount: (session.amount_total ?? 0) / 100,
    /*
      `betaalwijze` staat op `online` wanneer de klant alles vooraf betaalt —
      dat is de keuze met 5% korting. Elke andere waarde betekent dat enkel de
      orderbevestiging afgerekend is en de rest bij levering volgt.
    */
    paymentType: meta(session, "betaalwijze") === "online" ? "full" : "deposit",
    discount: Number(meta(session, "korting")) || 0,
    street: meta(session, "werf_straat") ?? payload.address ?? "",
    zip: meta(session, "werf_postcode") ?? "",
    city: meta(session, "werf_gemeente") ?? "",
    orderUrl,
  });

  return true;
}

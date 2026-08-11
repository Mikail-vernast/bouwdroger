/**
 * Meldt elke binnenkomende order in Slack.
 *
 * Het team zag een nieuwe boeking tot nu enkel via de interne mail of door in
 * het portaal te gaan kijken. Een mailbox die door drie mensen gedeeld wordt is
 * geen meldingskanaal: wie hem als eerste opent, markeert hem gelezen en de
 * rest ziet niets. Vandaar een kanaal waar de order gewoon binnenvalt.
 *
 * Loopt over een Slack **incoming webhook** en niet over een bot-token: één URL
 * die naar één kanaal schrijft, geen scopes, geen app die in het kanaal
 * uitgenodigd moet worden. De URL is het geheim — vandaar server-only, net als
 * `vernastSync.ts`.
 *
 * Faalt Slack, dan is dat nooit een reden om iets anders te laten mislukken.
 * Deze module gooit niet en geeft altijd netjes terug of het gelukt is: de
 * order staat op dat moment al in het portaal en de klant heeft zijn
 * bevestiging. Een gemiste melding is hinder, geen verloren order.
 */

import { withRetry, type Attempted } from "./retry.js";
import { formatDevices, formatWeekday } from "./mail.js";
import { euro } from "./verhuur.js";
import type { VernastOrderPayload } from "./vernastSync.js";

/** De incoming-webhook-URL van het orderkanaal. Zie README.md. */
const WEBHOOK_ENV = "SLACK_ORDER_WEBHOOK_URL";

/*
  Korter dan bij het portaal. Slack antwoordt in tientallen milliseconden en
  hangt hij toch, dan mag de webhook daar niet op blijven wachten — Stripe
  verwacht binnen redelijke tijd een antwoord, en de order is op dit punt al
  afgeleverd.
*/
const TIMEOUT_MS = 5000;
const TRIES = 3;
const DELAYS_MS = [400, 1500];

export type SlackResult = Attempted;

/** Wat er over een order in het kanaal komt te staan. */
export interface OrderNotice {
  payload: VernastOrderPayload;
  /** Zelf komen halen in Aartselaar in plaats van een levering op de werf. */
  pickup: boolean;
  /** Waar de order te bekijken valt — de bevestigingspagina van deze sessie. */
  orderUrl?: string | null;
}

/**
 * Slack leest `&`, `<` en `>` als opmaak. Een bedrijfsnaam met een `&` erin —
 * "Peeters & Zonen" — zou het bericht anders stilletjes verminken.
 */
function escape(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function text(value: unknown): string {
  if (value === null || value === undefined) return "";
  return escape(String(value).trim());
}

function fullName(payload: VernastOrderPayload): string {
  return [payload.first_name, payload.last_name].filter(Boolean).join(" ").trim();
}

/** Eén regel adres: straat, postcode gemeente. */
function fullAddress(payload: VernastOrderPayload): string {
  const town = [payload.postal_code, payload.city].filter(Boolean).join(" ");
  return [payload.address ?? "", town].filter(Boolean).join(", ");
}

/** Een veld in de tweekolomsblok van Slack. Leeg veld = geen veld. */
function field(label: string, value: string): { type: "mrkdwn"; text: string } | null {
  return value ? { type: "mrkdwn", text: `*${label}*\n${value}` } : null;
}

/**
 * De regel die in de melding op je telefoon staat, en de fallback voor clients
 * die geen blocks tonen. Bewust de vier dingen waarop je meteen reageert: wat
 * het is, voor wie, voor hoeveel en wanneer.
 */
export function orderSummary({ payload, pickup }: OrderNotice): string {
  const what = pickup ? "Nieuwe afhaling" : "Nieuwe boeking";
  const when = formatWeekday(payload.delivery_date ?? payload.rental_start_date);
  const parts = [
    `${what} — ${text(payload.order_number ?? payload.external_id)}`,
    text(fullName(payload)) || text(payload.email),
    euro(payload.total_price ?? 0),
    when ? `${pickup ? "afhaling" : "levering"} ${escape(when)}` : "",
  ];

  return parts.filter(Boolean).join(" · ");
}

/**
 * Het bericht zoals het in het kanaal komt.
 *
 * Apart van het versturen zodat de opmaak te testen valt zonder Slack aan de
 * lijn — en zodat wie de tekst wil bijwerken, niet in de fetch-logica hoeft.
 */
export function orderMessage(notice: OrderNotice): Record<string, unknown> {
  const { payload, pickup, orderUrl } = notice;

  const reference = text(payload.order_number ?? payload.external_id);
  const paid = payload.amount_paid ?? 0;
  const due = payload.balance_due ?? 0;
  const method = text(payload.online_payment_method);

  const company = text(payload.company_name);
  const who = [text(fullName(payload)), company && `_${company}_`].filter(Boolean).join("\n");

  const when = escape(formatWeekday(payload.delivery_date ?? payload.rental_start_date));
  const slot = text(payload.delivery_slot);

  const fields = [
    field("Klant", who),
    field("Telefoon", text(payload.phone)),
    field(
      pickup ? "Afhalen op" : "Levering",
      [when, slot].filter(Boolean).join(when && slot ? " · " : ""),
    ),
    field(pickup ? "Terug tegen" : "Werfadres", pickup
      ? escape(formatWeekday(payload.rental_end_date))
      : text(fullAddress(payload))),
    field("Pakket", text(payload.package_tier)),
    field("Toestellen", escape(payload.machine || formatDevices(payload))),
    field("Betaald", method ? `${euro(paid)} (${method})` : euro(paid)),
    /*
      Het openstaande saldo staat er ook bij 0 op. Bij "betalen bij levering"
      moet de chauffeur dit bedrag innen; een veld dat dan wegvalt zou het
      verschil tussen "alles vooraf" en "nog te innen" onzichtbaar maken.
    */
    field("Openstaand", `${euro(due)} van ${euro(payload.total_price ?? 0)}`),
  ].filter((entry): entry is { type: "mrkdwn"; text: string } => entry !== null);

  const blocks: Record<string, unknown>[] = [
    {
      type: "header",
      // Slack kapt een header-tekst af op 150 tekens en laat geen opmaak toe.
      text: {
        type: "plain_text",
        text: `${pickup ? "📦" : "🚚"} ${pickup ? "Afhaling" : "Boeking"} ${reference}`.slice(0, 150),
        emoji: true,
      },
    },
    { type: "section", fields },
  ];

  const note = text(payload.customer_note);
  if (note) {
    blocks.push({
      type: "section",
      text: { type: "mrkdwn", text: `*Opmerking van de klant*\n${note}` },
    });
  }

  if (orderUrl) {
    blocks.push({
      type: "actions",
      elements: [
        {
          type: "button",
          text: { type: "plain_text", text: "Order bekijken", emoji: true },
          url: orderUrl,
        },
      ],
    });
  }

  const trail = [text(payload.email), `via ${text(payload.source)}`].filter(Boolean).join(" · ");
  blocks.push({ type: "context", elements: [{ type: "mrkdwn", text: trail }] });

  return { text: orderSummary(notice), blocks };
}

/**
 * Het bericht wanneer een betaalde order het portaal niet haalt.
 *
 * Dit ging tot nu enkel naar de interne mailbox. Precies deze melding mag niet
 * in een mailbox blijven liggen: de klant heeft betaald, er staat nergens een
 * order, en iemand moet hem met de hand ingeven.
 */
export function failureMessage(
  context: string,
  reason: string | undefined,
  payload: VernastOrderPayload,
): Record<string, unknown> {
  const reference = text(payload.order_number ?? payload.external_id);
  const summary = `⚠️ ORDER NIET DOORGEKOMEN — ${reference}`;

  return {
    text: summary,
    blocks: [
      { type: "header", text: { type: "plain_text", text: summary.slice(0, 150), emoji: true } },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: [
            `De klant heeft betaald (${euro(payload.amount_paid ?? 0)}) maar de order staat`,
            "niet in het portaal. Iemand moet hem met de hand ingeven.",
          ].join(" "),
        },
      },
      {
        type: "section",
        fields: [
          field("Klant", text(fullName(payload)) || text(payload.email)) ?? {
            type: "mrkdwn",
            text: "*Klant*\n—",
          },
          field("Telefoon", text(payload.phone)) ?? { type: "mrkdwn", text: "*Telefoon*\n—" },
        ],
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: `${text(context)} — ${text(reason) || "onbekende fout"}` }],
      },
    ],
  };
}

/**
 * Verstuurt een bericht naar het orderkanaal.
 *
 * Staat de webhook-URL niet ingesteld, dan gebeurt er niets en blijft er een
 * logregel achter — net als bij een mail zonder sjabloon-ID. Zo draait dit al
 * mee voordat het kanaal in Slack bestaat, zonder ook maar iets te breken.
 */
export function postToSlack(message: Record<string, unknown>): Promise<SlackResult> {
  const url = process.env[WEBHOOK_ENV]?.trim();

  if (!url) {
    return Promise.resolve({ ok: false, reason: `${WEBHOOK_ENV} ontbreekt` });
  }

  return withRetry(() => post(url, message), { tries: TRIES, delaysMs: DELAYS_MS });
}

async function post(url: string, message: Record<string, unknown>): Promise<SlackResult> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(message),
      signal: controller.signal,
    });

    if (!response.ok) {
      const body = await response.text().catch(() => "");
      return { ok: false, reason: `HTTP ${response.status}: ${body.slice(0, 200)}` };
    }

    return { ok: true };
  } catch (error: unknown) {
    return { ok: false, reason: error instanceof Error ? error.message : "onbekende fout" };
  } finally {
    clearTimeout(timer);
  }
}

/** Logt een mislukte melding zichtbaar genoeg om ze in Vercel terug te vinden. */
export function logSlackFailure(context: string, result: SlackResult): void {
  if (result.ok) return;
  console.error(`[slack] ${context} niet gemeld in Slack: ${result.reason}`);
}

/** Meldt een nieuwe order. Gooit niet — zie de kop van deze module. */
export async function notifyNewOrder(notice: OrderNotice): Promise<void> {
  const reference = notice.payload.order_number ?? notice.payload.external_id;
  logSlackFailure(`order ${reference}`, await postToSlack(orderMessage(notice)));
}

/** Meldt een order die het portaal niet haalde. Gooit niet. */
export async function notifySyncFailure(
  context: string,
  reason: string | undefined,
  payload: VernastOrderPayload,
): Promise<void> {
  logSlackFailure(`alarm ${context}`, await postToSlack(failureMessage(context, reason, payload)));
}

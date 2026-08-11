// @vitest-environment node
/**
 * De Slack-melding bij een binnenkomende order.
 *
 * Bewust in de node-omgeving en niet in jsdom: `slack.ts` is server-only en
 * gebruikt `AbortController` samen met `fetch`. jsdom levert zijn eigen
 * `AbortSignal`, die Node's fetch weigert met "Expected signal to be an
 * instance of AbortSignal" — een fout die alleen in de test bestaat en nooit op
 * Vercel. Zonder deze regel is elke echte netwerkcontrole hier zinloos.
 *
 * Het bericht is opzettelijk los te testen van Slack zelf: wat er in het kanaal
 * belandt is de enige plek waar het team een order voor het eerst ziet, dus de
 * velden die daarin staan mogen niet stil wegvallen bij een refactor.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  failureMessage,
  orderMessage,
  orderSummary,
  postToSlack,
  type OrderNotice,
} from "../lib/slack.js";
import type { VernastOrderPayload } from "../lib/vernastSync.js";

const PAYLOAD: VernastOrderPayload = {
  source: "stripe",
  external_id: "cs_test_123",
  order_number: "BD-2026-0042",
  first_name: "Jan",
  last_name: "Peeters",
  email: "jan@example.be",
  phone: "0470 12 34 56",
  company_name: "Peeters & Zonen",
  address: "Werfstraat 5",
  postal_code: "2630",
  city: "Aartselaar",
  package_tier: "Medium",
  delivery_date: "2026-08-17",
  delivery_slot: "08:00 - 12:00",
  rental_start_date: "2026-08-17",
  rental_end_date: "2026-08-31",
  order_lines: [{ device_key: "small", qty: 2 }],
  total_price: 616,
  amount_paid: 150,
  balance_due: 466,
  currency: "EUR",
  payment_status: "paid",
  online_payment_method: "bancontact",
};

/** Alle tekst uit een blocks-bericht, plat, om erin te kunnen zoeken. */
function flatten(message: Record<string, unknown>): string {
  return JSON.stringify(message);
}

const notice = (overrides: Partial<OrderNotice> = {}): OrderNotice => ({
  payload: PAYLOAD,
  pickup: false,
  orderUrl: "https://bouwdroger.vercel.app/verhuur/boeking?session_id=cs_test_123",
  ...overrides,
});

describe("orderSummary", () => {
  it("zet referentie, klant, bedrag en leverdatum in de melding op je telefoon", () => {
    const summary = orderSummary(notice());

    expect(summary).toContain("Nieuwe boeking");
    expect(summary).toContain("BD-2026-0042");
    expect(summary).toContain("Jan Peeters");
    expect(summary).toContain("616,00");
    expect(summary).toContain("levering");
  });

  it("noemt een afhaling een afhaling", () => {
    const summary = orderSummary(notice({ pickup: true }));

    expect(summary).toContain("Nieuwe afhaling");
    expect(summary).not.toContain("Nieuwe boeking");
  });
});

describe("orderMessage", () => {
  it("bevat de gegevens waarmee iemand de order kan inplannen", () => {
    const flat = flatten(orderMessage(notice()));

    expect(flat).toContain("BD-2026-0042");
    expect(flat).toContain("Jan Peeters");
    expect(flat).toContain("0470 12 34 56");
    expect(flat).toContain("Werfstraat 5, 2630 Aartselaar");
    expect(flat).toContain("Medium");
    expect(flat).toContain("2× Small Bouwdroger");
    expect(flat).toContain("08:00 - 12:00");
    expect(flat).toContain("bancontact");
  });

  it("toont wat er betaald is én wat er nog openstaat", () => {
    const flat = flatten(orderMessage(notice()));

    // Bij "betalen bij levering" moet de chauffeur het saldo innen; dat bedrag
    // mag niet uit het bericht verdwijnen.
    expect(flat).toContain("150,00");
    expect(flat).toContain("466,00");
    expect(flat).toContain("616,00");
  });

  it("ontsnapt tekens die Slack anders als opmaak leest", () => {
    const flat = flatten(orderMessage(notice()));

    expect(flat).toContain("Peeters &amp; Zonen");
    expect(flat).not.toContain("Peeters & Zonen");
  });

  it("zet er een knop naar de order bij, en laat die weg zonder link", () => {
    expect(flatten(orderMessage(notice()))).toContain("Order bekijken");
    expect(flatten(orderMessage(notice({ orderUrl: null })))).not.toContain("Order bekijken");
  });

  it("toont bij een afhaling wanneer het toestel terug moet in plaats van een werfadres", () => {
    const flat = flatten(orderMessage(notice({ pickup: true })));

    expect(flat).toContain("Terug tegen");
    expect(flat).not.toContain("Werfadres");
  });

  it("neemt de opmerking van de klant over wanneer die er is", () => {
    const withNote = { ...PAYLOAD, customer_note: "Bellen voor de poortcode" };

    expect(flatten(orderMessage(notice({ payload: withNote })))).toContain("Bellen voor de poortcode");
    expect(flatten(orderMessage(notice()))).not.toContain("Opmerking van de klant");
  });

  it("valt terug op de sessie-ID wanneer er geen referentie is", () => {
    const without = { ...PAYLOAD, order_number: null };

    expect(flatten(orderMessage(notice({ payload: without })))).toContain("cs_test_123");
  });
});

describe("failureMessage", () => {
  it("zegt onomwonden dat er betaald is en dat de order nergens staat", () => {
    const flat = flatten(failureMessage("stripe cs_test_123", "HTTP 500", PAYLOAD));

    expect(flat).toContain("ORDER NIET DOORGEKOMEN");
    expect(flat).toContain("BD-2026-0042");
    expect(flat).toContain("met de hand");
    expect(flat).toContain("HTTP 500");
  });

  it("houdt stand zonder reden", () => {
    expect(flatten(failureMessage("stripe cs_x", undefined, PAYLOAD))).toContain("onbekende fout");
  });
});

describe("postToSlack", () => {
  const original = process.env.SLACK_ORDER_WEBHOOK_URL;

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    if (original === undefined) delete process.env.SLACK_ORDER_WEBHOOK_URL;
    else process.env.SLACK_ORDER_WEBHOOK_URL = original;
  });

  it("doet niets zonder webhook-URL, en gooit al helemaal niet", async () => {
    delete process.env.SLACK_ORDER_WEBHOOK_URL;
    const fetchSpy = vi.spyOn(globalThis, "fetch");

    const result = await postToSlack({ text: "test" });

    expect(result.ok).toBe(false);
    expect(result.reason).toContain("SLACK_ORDER_WEBHOOK_URL");
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("post het bericht als JSON naar de webhook", async () => {
    process.env.SLACK_ORDER_WEBHOOK_URL = "https://hooks.slack.com/services/T/B/x";
    const fetchSpy = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue(new Response("ok", { status: 200 }));

    const result = await postToSlack({ text: "nieuwe order" });

    expect(result.ok).toBe(true);
    expect(fetchSpy).toHaveBeenCalledTimes(1);
    const [url, init] = fetchSpy.mock.calls[0];
    expect(url).toBe("https://hooks.slack.com/services/T/B/x");
    expect(JSON.parse(String((init as RequestInit).body))).toEqual({ text: "nieuwe order" });
  });

  it("meldt een fout terug in plaats van te gooien, na opnieuw proberen", async () => {
    process.env.SLACK_ORDER_WEBHOOK_URL = "https://hooks.slack.com/services/T/B/x";
    const fetchSpy = vi
      .spyOn(globalThis, "fetch")
      .mockRejectedValue(new Error("network down"));

    const result = await postToSlack({ text: "nieuwe order" });

    expect(result.ok).toBe(false);
    expect(result.reason).toBe("network down");
    expect(fetchSpy).toHaveBeenCalledTimes(3);
  });
});

/**
 * @vitest-environment node
 *
 * Handmatige verzendtest: stuurt sjabloon 198 met echte parameters naar één
 * adres, zodat de opmaak in een echte mailbox te beoordelen valt.
 *
 * De node-omgeving is nodig, niet cosmetisch: onder jsdom komt `fetch` uit
 * jsdom en `AbortController` uit Node, en dan weigert `fetch` het signaal met
 * "Expected signal to be an instance of AbortSignal". Op Vercel draait dit als
 * gewone Node, waar beide van dezelfde kant komen.
 *
 * Draaien met:
 *   set -a && . ./.env.local && set +a
 *   TESTMAIL_TO=jij@vernast.be npx vitest run src/test/verzendtest.test.ts
 *
 * Zonder `TESTMAIL_TO` slaat de test zichzelf over, zodat `npm test` niet
 * ongevraagd mail verstuurt en Brevo-credits opstookt.
 */
import { describe, it } from "vitest";
import {
  sendDeliveryReminderMail,
  sendExtensionOfferMail,
  sendPaidBookingMails,
} from "../lib/mail.js";
import type { VernastOrderPayload } from "../lib/vernastSync.js";

const ONTVANGER = process.env.TESTMAIL_TO ?? "";

const payload: VernastOrderPayload = {
  source: "stripe",
  external_id: "cs_test_verzendtest",
  order_number: "VRN-2026-TEST",
  first_name: "Brent",
  last_name: "Ceulemans",
  email: ONTVANGER,
  phone: "+32 3 689 90 65",
  address: "Ballaarstraat 99",
  postal_code: "2018",
  city: "Antwerpen",
  package_tier: "Gebouw kleiner dan 180 m2 – Pleisterwerk + chape – incl. verwarming",
  delivery_date: "2026-08-17",
  delivery_slot: "10:00 – 12:00",
  rental_start_date: "2026-08-17",
  rental_end_date: "2026-09-14",
  duration_days: 28,
  order_lines: [
    { device_key: "small", qty: 2 },
    { device_key: "medium", qty: 2 },
    { device_key: "axiaal", qty: 4 },
    { device_key: "kachel", qty: 2 },
  ],
  total_price: 1707.34,
  currency: "EUR",
  payment_status: "paid",
  paid_at: new Date().toISOString(),
  online_payment_method: "bancontact",
};

describe("verzendtest sjabloon 198", () => {
  it.skipIf(!ONTVANGER)("stuurt de bevestigingsmail naar TESTMAIL_TO", async () => {
    await sendPaidBookingMails({
      payload,
      paidAmount: 2065.88,
      paymentType: "full",
      discount: 89.86,
      street: "Ballaarstraat 99",
      zip: "2018",
      city: "Antwerpen",
      orderUrl: "https://bouwdrogerservice.be/verhuur/boeking?session_id=cs_test_verzendtest",
    });
  });
});

describe("verzendtest sjabloon 200", () => {
  it.skipIf(!ONTVANGER)("stuurt de verlengmail naar TESTMAIL_TO", async () => {
    await sendExtensionOfferMail({
      payload,
      extensionUrl:
        "https://bouwdrogerservice.be/verhuur/verlengen?session_id=cs_test_verzendtest",
    });
  });
});

describe("verzendtest sjabloon 199", () => {
  it.skipIf(!ONTVANGER)("stuurt de leverherinnering naar TESTMAIL_TO", async () => {
    await sendDeliveryReminderMail({
      payload,
      paymentType: "deposit",
      balanceDue: 2005.38,
      street: "Ballaarstraat 99",
      zip: "2018",
      city: "Antwerpen",
      orderUrl: "https://bouwdrogerservice.be/verhuur/boeking?session_id=cs_test_verzendtest",
    });
  });
});

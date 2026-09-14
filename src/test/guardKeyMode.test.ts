/**
 * De sleutelmodus-guard uit `worker/guardKeyMode.ts`.
 *
 * Deze check is er voor één scenario: iemand zet de DNS naar Cloudflare terwijl
 * de worker nog op Stripes testsleutels staat. Dan laadt de Checkout-pagina,
 * "slaagt" de betaling, vertrekt de bevestigingsmail — en is er nooit geld
 * overgemaakt. Dat merk je pas bij de bankafstemming.
 *
 * Via HTTP is dit niet te testen: workers.dev weigert een vreemde Host-header
 * met een 403 vóór de Worker draait. Vandaar hier.
 */

import { afterEach, describe, expect, it } from "vitest";
import { controleerKeyMode } from "../../worker/guardKeyMode";

const LIVE = "sk_live_voorbeeld";
const TEST = "sk_test_voorbeeld";

const origineel = process.env.STRIPE_SECRET_KEY;
afterEach(() => {
  if (origineel === undefined) delete process.env.STRIPE_SECRET_KEY;
  else process.env.STRIPE_SECRET_KEY = origineel;
});

describe("controleerKeyMode", () => {
  it("laat een livesleutel toe op het productiedomein", () => {
    process.env.STRIPE_SECRET_KEY = LIVE;
    expect(controleerKeyMode("vernast-bouwdrogers.be", "/api/checkout")).toBeNull();
    expect(controleerKeyMode("www.vernast-bouwdrogers.be", "/api/checkout")).toBeNull();
    expect(controleerKeyMode("bouwdrogerservice.be", "/api/checkout")).toBeNull();
  });

  it("weigert een testsleutel op het productiedomein — het scenario dat geld kost", () => {
    process.env.STRIPE_SECRET_KEY = TEST;
    expect(controleerKeyMode("vernast-bouwdrogers.be", "/api/checkout")).toEqual({
      hostname: "vernast-bouwdrogers.be",
      verwacht: "live",
      gevonden: "test",
    });
  });

  it("weigert een livesleutel buiten productie — daar incasseert een test echt geld", () => {
    process.env.STRIPE_SECRET_KEY = LIVE;
    expect(controleerKeyMode("bouwdroger.vernast-v2.workers.dev", "/api/checkout")).toEqual({
      hostname: "bouwdroger.vernast-v2.workers.dev",
      verwacht: "test",
      gevonden: "live",
    });
  });

  it("laat een testsleutel toe op de migratie-URL", () => {
    process.env.STRIPE_SECRET_KEY = TEST;
    expect(controleerKeyMode("bouwdroger.vernast-v2.workers.dev", "/api/checkout")).toBeNull();
  });

  it("laat een subdomein van buiten niet doorgaan voor productie", () => {
    // `vernast-bouwdrogers.be.evil.com` eindigt niet op het domein, dus hij telt
    // als niet-productie. Met een testsleutel is dat precies goed.
    process.env.STRIPE_SECRET_KEY = TEST;
    expect(controleerKeyMode("vernast-bouwdrogers.be.evil.com", "/api/checkout")).toBeNull();
    process.env.STRIPE_SECRET_KEY = LIVE;
    expect(controleerKeyMode("vernast-bouwdrogers.be.evil.com", "/api/checkout")?.verwacht).toBe("test");
  });

  it("bemoeit zich niet met routes die geen geld aanraken", () => {
    process.env.STRIPE_SECRET_KEY = TEST;
    for (const route of ["/api/contact", "/api/vraag", "/api/availability", "/api/reminders"]) {
      expect(controleerKeyMode("vernast-bouwdrogers.be", route)).toBeNull();
    }
  });

  it("laat een ontbrekende sleutel aan de handler zelf", () => {
    delete process.env.STRIPE_SECRET_KEY;
    expect(controleerKeyMode("vernast-bouwdrogers.be", "/api/checkout")).toBeNull();
  });

  it("weigert een sleutel met een onbekend prefix", () => {
    process.env.STRIPE_SECRET_KEY = "rk_live_beperkte_sleutel";
    expect(controleerKeyMode("vernast-bouwdrogers.be", "/api/checkout")?.gevonden).toBe("onbekend");
  });
});

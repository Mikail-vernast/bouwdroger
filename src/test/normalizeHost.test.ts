/**
 * De hostnaam-normalisatie uit `worker/normalizeHost.ts`.
 *
 * Deze omleiding stond bij Vercel in de domeininstellingen van het project en
 * dus in geen enkel bestand in deze repo. Ze zou bij de overstap naar
 * Cloudflare stil zijn weggevallen, en dan geeft elke pagina op twee hostnamen
 * een 200 — onzichtbaar in een healthcheck, maar Google kiest dan zelf welke
 * versie hij indexeert.
 *
 * De suffix-gevallen onderaan zijn dezelfde val die `guardKeyMode` afvangt:
 * `endsWith(".vernast-bouwdrogers.be")` zou `vernast-bouwdrogers.be.evil.com`
 * doorlaten.
 */

import { describe, expect, it } from "vitest";
import { normalizeHost } from "../../worker/normalizeHost";

const CANONIEK = "vernast-bouwdrogers.be";
const host = (u: string) => normalizeHost(new URL(u), CANONIEK);

describe("normalizeHost", () => {
  it("stuurt www door naar het kale domein", () => {
    expect(host("https://www.vernast-bouwdrogers.be/calculator")).toBe(
      "https://vernast-bouwdrogers.be/calculator",
    );
  });

  it("houdt de querystring vast — die draagt de gclid van een advertentieklik", () => {
    expect(host("https://www.vernast-bouwdrogers.be/?utm_source=google&gclid=abc")).toBe(
      "https://vernast-bouwdrogers.be/?utm_source=google&gclid=abc",
    );
  });

  it("laat het pad ongemoeid, ook als het nog genormaliseerd moet worden", () => {
    // Vercel doet de hostnaam in één hop en normaliseert het pad pas daarna,
    // op de canonieke host. Gemeten 15-09-2026.
    expect(host("https://www.vernast-bouwdrogers.be/machines.html")).toBe(
      "https://vernast-bouwdrogers.be/machines.html",
    );
  });

  it("laat de canonieke host met rust", () => {
    expect(host("https://vernast-bouwdrogers.be/calculator")).toBeNull();
  });

  it("laat workers.dev met rust, anders is de Worker niet los te testen", () => {
    expect(host("https://bouwdroger.vernast-v2.workers.dev/calculator")).toBeNull();
  });

  it("trapt niet in een domein dat het onze als achtervoegsel draagt", () => {
    expect(host("https://vernast-bouwdrogers.be.evil.com/calculator")).toBeNull();
  });

  it("trapt niet in een domein dat ermee begint", () => {
    expect(host("https://evil-vernast-bouwdrogers.be/calculator")).toBeNull();
  });

  it("doet niets zonder ingestelde host, zodat een lege var niets omleidt", () => {
    expect(normalizeHost(new URL("https://www.vernast-bouwdrogers.be/"), undefined)).toBeNull();
  });

  it("werkt ook andersom, zoals bij schilderwerken", () => {
    const naarWww = (u: string) => normalizeHost(new URL(u), "www.vernast-schilderwerken.be");
    expect(naarWww("https://vernast-schilderwerken.be/contact")).toBe(
      "https://www.vernast-schilderwerken.be/contact",
    );
    expect(naarWww("https://www.vernast-schilderwerken.be/contact")).toBeNull();
  });
});

/**
 * De oude Shopify-productpagina's van bouwdrogerservice.be.
 *
 * Zodra dat domein naar deze site wijst, erven de nieuwe pagina's de signalen
 * van de oude alleen als elke oude URL op de pagina met dezelfde zoekintentie
 * landt. Tot eind september 2026 ging élk product naar /machines — ook de 64
 * droogpakketten voor chape, pleisterwerk en waterschade, en de toestellen die
 * hier een eigen pagina hebben. Een redirect naar een algemene pagina behandelt
 * Google vaak als een soft-404: de oude URL verdwijnt zonder iets door te geven.
 *
 * Handles zoals ze op 29-09-2026 in /products.json van de Shopify-shop stonden.
 */
import { describe, expect, it } from "vitest";
import { matchRedirect } from "../../worker/vercelRouting";

const bestemming = (pad: string) => matchRedirect(new URL(`https://vernast-bouwdrogers.be${pad}`))?.location;

describe("Shopify-productredirects", () => {
  it.each([
    ["gebouw-kleiner-dan-100-m2-waterschade-drogen", "/waterschade"],
    ["ruimte-kleiner-dan-40-m2-waterschade-drogen", "/waterschade"],
    ["gebouw-kleiner-dan-180-m2-chapedikte-7cm", "/nieuwbouw"],
    ["ruimte-kleiner-dan-40-m2-pleisterdikte-1cm", "/nieuwbouw"],
    ["gebouw-kleiner-dan-300-m2-pleisterwerk-chape-drogen", "/nieuwbouw"],
    ["bouwdroger-huren-eco-boost-450-m3", "/verhuur/toestel/ttk170"],
    ["eco-revolution", "/verhuur/toestel/revolution"],
    ["turbo-axiaalventilator-4500-m-h-5-00-dag", "/verhuur/toestel/ttv4500"],
    ["turbo-radiaalventilator-2250-m-h-5-00-dag", "/verhuur/toestel/radiaal2250"],
    // Geen tegenhanger in het huidige gamma: dan blijft het overzicht de beste landing.
    ["luchtontvochtiger-dh-30-vpr", "/machines"],
    ["oliekachel-bds-100-118-00-kw-28-00-dag", "/machines"],
  ])("/products/%s → %s", (handle, doel) => {
    expect(bestemming(`/products/${handle}`)).toBe(doel);
  });

  it("stuurt een pakket-handle met een extra segment niet naar een themapagina", () => {
    // Een eigen regex in een parameter (`:slug(.*)`) overspant wél een `/` —
    // daarom staat er `[^/]*` in vercel.json, niet `.*`.
    expect(bestemming("/products/gebouw-kleiner-dan-60-m2-chapedikte-5cm/extra")).toBe("/machines");
  });

  it("stuurt de oude informatiepagina's naar hun eigen onderwerp", () => {
    expect(bestemming("/collections/waarom-bouwdrogen")).toBe("/waarom-bouwdroging");
    expect(bestemming("/pages/hoe-kan-ik-het-droogproces-nog-versnellen")).toBe("/hoe-drogen-werkt");
    expect(bestemming("/pages/algemene-voorwaarden")).toBe("/algemene-voorwaarden");
  });
});

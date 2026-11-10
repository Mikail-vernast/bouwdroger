import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import OzonbehandelingPage from "@/pages/OzonbehandelingPage";
import { SEO, type SeoEntry } from "@/data/seo";
import { TOEPASSINGEN } from "@/data/navigation";

/**
 * /ozonbehandeling moet net als de andere geldpagina's op eigen kracht
 * opgehaald kunnen worden, en de inhoud moet in de HTML staan in plaats van pas
 * na een klik te verschijnen.
 *
 * Twee valkuilen uit CLAUDE.md liggen hier vast:
 *  - geen `opacity:0` in de geprerenderde opmaak (een framer-motion-beginstaat
 *    belandde ooit letterlijk in dist en maakte negentien blokken onzichtbaar
 *    voor precies de AI-antwoordmachines waarvoor we prerenderen),
 *  - een entry in `navigation.ts`, anders is de pagina een wees die alleen via
 *    de sitemap bestaat.
 */
const MIN_WOORDEN = 800;

function toon(): HTMLElement {
  const { container } = render(
    <HelmetProvider>
      <MemoryRouter initialEntries={["/ozonbehandeling"]}>
        <OzonbehandelingPage />
      </MemoryRouter>
    </HelmetProvider>,
  );
  const main = container.querySelector("main");
  if (!main) throw new Error("/ozonbehandeling rendert geen <main>");
  return main;
}

const woorden = (t: string) => t.split(/\s+/).filter(Boolean).length;

describe("/ozonbehandeling", () => {
  it("heeft genoeg eigen tekst om opgehaald te worden", () => {
    expect(woorden(toon().textContent ?? "")).toBeGreaterThanOrEqual(MIN_WOORDEN);
  });

  it("heeft precies één H1, met het zoekwoord erin", () => {
    const koppen = toon().querySelectorAll("h1");
    expect(koppen).toHaveLength(1);
    expect(koppen[0].textContent ?? "").toMatch(/schimmel/i);
  });

  it("toont elk FAQ-antwoord in de HTML, niet pas na een klik", () => {
    const vragen = toon().querySelectorAll("details.oz-q");
    expect(vragen.length).toBeGreaterThanOrEqual(5);
    for (const vraag of vragen) {
      expect(woorden(vraag.querySelector("p")?.textContent ?? "")).toBeGreaterThan(20);
    }
  });

  it("zet geen enkele blok op opacity:0 — dat zou onzichtbaar prerenderen", () => {
    const verborgen = toon().querySelectorAll('[style*="opacity:0"], [style*="opacity: 0"]');
    expect(verborgen).toHaveLength(0);
  });

  it("draagt het boekingsformulier, met een knop die echt verstuurt", () => {
    const main = toon();
    expect(main.querySelector("#boeken")).not.toBeNull();
    // Stap 1 moet eerst ingevuld worden; de knop hoort dus uitgeschakeld te staan
    // in plaats van naar een dood `type="button"` te wijzen zoals op
    // /waarom-bouwdroging.
    const volgende = main.querySelector<HTMLButtonElement>(".ozf-next");
    expect(volgende).not.toBeNull();
    expect(volgende?.disabled).toBe(true);
  });

  it("staat in de navigatie, zodat de pagina geen wees wordt", () => {
    expect(TOEPASSINGEN.some((item) => item.path === "/ozonbehandeling")).toBe(true);
  });

  it("heeft eigen SEO-metadata die niet op /renovatie mikt", () => {
    const entry: SeoEntry = SEO.ozonbehandeling;
    expect(entry.title).toMatch(/ozonbehandeling/i);
    // Indexeerbaar: deze pagina moet juist gevonden worden.
    expect(entry.noindex).toBeUndefined();
    expect(entry.title).not.toBe(SEO.renovatie.title);
  });
});

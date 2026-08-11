import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import VerhuurBoekingPage from "@/pages/verhuur/VerhuurBoekingPage";

/**
 * Terug van Stripe hoort de bezoeker níet op stap 1 te belanden.
 *
 * De wizard start op "Kies uw dekking" en sprong pas naar de bevestiging zodra
 * `/api/checkout-session` antwoordde. Wie net betaald had zag daardoor eerst de
 * dekkingsstap staan — precies op het moment waarop je je afvraagt of je
 * betaling wel doorging.
 */
describe("VerhuurBoekingPage — terug van Stripe", () => {
  beforeEach(() => {
    // De sessiecheck blijft hangen: we willen net de tussenstand zien, vóór het
    // antwoord binnen is.
    vi.stubGlobal(
      "fetch",
      vi.fn(() => new Promise(() => {})),
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  const renderAt = (entry: string) =>
    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={[entry]}>
          <VerhuurBoekingPage />
        </MemoryRouter>
      </HelmetProvider>,
    );

  /*
    Alle stappen staan altijd in de DOM; enkel `.pane.on` is zichtbaar. Op de
    aanwezigheid van tekst testen zegt hier dus niets — het gaat om welke pane
    openstaat.
  */
  const activePane = (container: HTMLElement) => {
    const panes = container.querySelectorAll(".pane.on");
    expect(panes).toHaveLength(1);
    return panes[0].textContent ?? "";
  };

  it("toont meteen de controlestand als er een session_id in de URL staat", () => {
    const { container } = renderAt(
      "/verhuur/boeking?size=180&wat=chape&pd=2&cd=7&heat=0&weeks=2&session_id=cs_test_a1J4tLwYW4eT4x2BjCqE7",
    );

    const zichtbaar = activePane(container);
    expect(zichtbaar).toContain("Even geduld");
    // Dít was de bug: de dekkingsstap in beeld ná het betalen.
    expect(zichtbaar).not.toContain("Kies uw dekking");
  });

  it("start gewoon op de eerste stap zonder session_id", () => {
    const { container } = renderAt("/verhuur/boeking?size=180&wat=chape&pd=2&cd=7&heat=0&weeks=2");

    const zichtbaar = activePane(container);
    expect(zichtbaar).not.toContain("Even geduld");
  });
});

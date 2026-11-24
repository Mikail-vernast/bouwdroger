import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import VerhuurBoekingPage from "@/pages/verhuur/VerhuurBoekingPage";
import { CAT } from "@/data/verhuur";
import { baseItems, parseConfig } from "@/lib/verhuur";

const QUERY = "size=180&wat=beide&floors=1";

function tellerVan(naam: string): HTMLElement {
  // De teller staat als derde kolom naast de naam in dezelfde .ex-regel.
  const regel = screen.getByText(naam).closest(".ex");
  if (!regel) throw new Error(`geen regel voor ${naam}`);
  const teller = regel.querySelector(".stp");
  if (!teller) throw new Error(`geen teller voor ${naam}`);
  return teller as HTMLElement;
}

describe("de teller onder Uw pakket", () => {
  beforeEach(() => {
    sessionStorage.clear();
    vi.stubGlobal("fetch", vi.fn(() => new Promise(() => {})));
  });
  afterEach(() => vi.unstubAllGlobals());

  it("start op het aantal uit het pakket, kan niet lager maar wel hoger", () => {
    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={[`/verhuur/boeking?${QUERY}`]}>
          <VerhuurBoekingPage />
        </MemoryRouter>
      </HelmetProvider>,
    );

    const basis = baseItems(parseConfig(new URLSearchParams(QUERY)));
    expect(basis.length).toBeGreaterThan(0);

    for (const item of basis) {
      const teller = tellerVan(CAT[item.k].name);
      const [minder, , meer] = Array.from(teller.children) as HTMLElement[];
      expect(teller.querySelector("span")?.textContent).toBe(String(item.q));

      // Minder dan het eigen pakket bestellen kan niet.
      expect((minder as HTMLButtonElement).disabled).toBe(true);
      fireEvent.click(minder);
      expect(teller.querySelector("span")?.textContent).toBe(String(item.q));

      // Meer wel, en dan mag de klant ook weer terug tot het pakketaantal.
      fireEvent.click(meer);
      expect(teller.querySelector("span")?.textContent).toBe(String(item.q + 1));
      expect((minder as HTMLButtonElement).disabled).toBe(false);
      fireEvent.click(minder);
      expect(teller.querySelector("span")?.textContent).toBe(String(item.q));
    }
  });
});

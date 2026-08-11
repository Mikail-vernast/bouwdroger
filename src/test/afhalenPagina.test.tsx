import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import VerhuurAfhalenPage from "@/pages/verhuur/VerhuurAfhalenPage";

/**
 * De afhaalpagina crashte bij het openen vanaf een toestelpagina: met een
 * volledige `?d=...&days=...&date=...&slot=...` in de URL mocht de pagina niet
 * meer stukgaan tijdens het monteren.
 */
describe("VerhuurAfhalenPage", () => {
  it("rendert met de keuze uit de toestelpagina in de URL", () => {
    render(
      <HelmetProvider>
        <MemoryRouter
          initialEntries={[
            "/verhuur/afhalen?d=ttk170%3A2Cttv4500%3A1&days=7&date=2026-08-12&slot=08%3A00+-+10%3A00",
          ]}
        >
          <VerhuurAfhalenPage />
        </MemoryRouter>
      </HelmetProvider>,
    );

    expect(screen.getAllByText(/afhal/i).length).toBeGreaterThan(0);
  });
});

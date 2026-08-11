/**
 * De pagina waar de klant bij de installatie het saldo afrekent.
 *
 * Wat hier op het scherm komt, komt van de server: de klant scant een QR van
 * het scherm van de technieker en ziet een bedrag waar hij meteen op klikt. Een
 * verkeerd getal is hier dus geen schoonheidsfoutje.
 */
import { render, screen, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import VerhuurSaldoPage from "@/pages/verhuur/VerhuurSaldoPage";

const OPEN = {
  referentie: "VRN-2026-GYZF2HGN",
  pakket: "Comfort",
  totaal: 342.55,
  betaald: 50,
  saldo: 292.55,
  voldaan: false,
};

function renderAt(entry: string) {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[entry]}>
        <VerhuurSaldoPage />
      </MemoryRouter>
    </HelmetProvider>,
  );
}

describe("VerhuurSaldoPage", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => ({ ok: true, json: async () => OPEN })),
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  it("toont wat er nog te betalen is, niet het ordertotaal", async () => {
    renderAt("/verhuur/saldo?session_id=cs_test_boeking");

    // Het bedrag op de knop is waar de klant op klikt: dat moet het saldo zijn.
    await waitFor(() => {
      expect(screen.getByRole("button", { name: /€ 292,55 betalen/ })).toBeInTheDocument();
    });

    expect(screen.getByText("€ 342,55")).toBeInTheDocument();
    expect(screen.getByText("− € 50,00")).toBeInTheDocument();
  });

  it("stuurt het sessie-ID van de betaling mee terug van Stripe", async () => {
    renderAt("/verhuur/saldo?session_id=cs_test_boeking&saldo_session=cs_test_saldo");

    await waitFor(() => expect(fetch).toHaveBeenCalled());

    // Zonder deze tweede sleutel kan de server een betaling niet afhandelen als
    // de webhook niet gereden heeft — lokaal is dat altijd zo.
    const [url] = (fetch as unknown as { mock: { calls: string[][] } }).mock.calls[0];
    expect(url).toContain("session_id=cs_test_boeking");
    expect(url).toContain("saldo_session=cs_test_saldo");
  });

  it("belooft de factuur zodra alles betaald is", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => ({ ok: true, json: async () => ({ ...OPEN, saldo: 0, voldaan: true }) })),
    );

    renderAt("/verhuur/saldo?session_id=cs_test_boeking&saldo_session=cs_test_saldo");

    await waitFor(() => {
      expect(screen.getByText("Betaald — bedankt")).toBeInTheDocument();
    });
    expect(screen.getByText(/factuur vertrekt automatisch/)).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /betalen/ })).not.toBeInTheDocument();
  });

  it("zegt het eerlijk als de link niets oplevert", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => ({ ok: false, json: async () => ({ error: "Boeking niet gevonden." }) })),
    );

    renderAt("/verhuur/saldo?session_id=cs_test_weg");

    await waitFor(() => {
      expect(screen.getByText("Deze link werkt niet")).toBeInTheDocument();
    });
  });
});

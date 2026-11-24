import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import VerhuurBoekingPage from "@/pages/verhuur/VerhuurBoekingPage";

describe("toegang kiezen bij de boeking", () => {
  beforeEach(() => {
    sessionStorage.clear();
    vi.stubGlobal("fetch", vi.fn(() => new Promise(() => {})));
  });
  afterEach(() => vi.unstubAllGlobals());

  it("neemt de simulatorverdiepingen over en laat alle vier toegangsopties kiezen", () => {
    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={["/verhuur/boeking?size=180&wat=beide&floors=3"]}>
          <VerhuurBoekingPage />
        </MemoryRouter>
      </HelmetProvider>,
    );
    expect(screen.getByText("Gelijkvloers + 3 verdiepingen · overgenomen uit de simulator")).toBeTruthy();
    expect(screen.queryByRole("button", { name: "Eén verdieping meer" })).toBeNull();
    expect(screen.queryByRole("button", { name: "Eén verdieping minder" })).toBeNull();
    const choices = within(screen.getByRole("group", { name: "Hoe bereiken we de verdiepingen?" }));
    const buttons = choices.getAllByRole("button");
    expect(buttons).toHaveLength(4);
    expect(choices.getByRole("button", { name: /Via de trap/ }).textContent).toContain("Inbegrepen");
    expect(choices.getByRole("button", { name: /Via de lift/ }).textContent).toContain("Inbegrepen");
    expect(choices.getByRole("button", { name: /Via een ladder/ }).textContent).toContain("+ € 39 eenmalig");
    expect(choices.getByRole("button", { name: /Niets voorzien/ }).textContent).toContain("+ € 115 eenmalig");
    for (const label of [/Via de trap/, /Via de lift/, /Via een ladder/, /Niets voorzien/]) {
      const button = choices.getByRole("button", { name: label });
      expect(button.querySelector("img")?.getAttribute("src")).toMatch(/\.webp$/);
      fireEvent.click(button);
      expect(button.getAttribute("aria-pressed")).toBe("true");
      expect(buttons.filter((b) => b.getAttribute("aria-pressed") === "true")).toHaveLength(1);
    }
    fireEvent.click(screen.getByRole("button", { name: "Meer uitleg over Hoe bereiken we de verdiepingen?" }));
    const dialog = screen.getByRole("dialog", { name: "Hoe leveren we op een verdieping?" });
    expect(dialog.querySelector("img")?.getAttribute("src")).toBe("/vernast/toegang-vernast-v3.webp");
  });
});

import { afterEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import type { ComponentType } from "react";
import ContactPage from "@/pages/ContactPage";
import KlantservicePage from "@/pages/KlantservicePage";
import LeveringPage from "@/pages/LeveringPage";

/**
 * De formulieren op contact, klantenservice en levering openden tot 15-10-2026
 * alleen een mailto. Nu posten ze naar `/api/aanvraag`; deze test bewaakt dat
 * hun eigen veldnamen (`naam`, `vraag`, `situatie`) op de juiste sleutels
 * belanden, en dat een mislukking de mailto als laatste uitweg toont.
 */

const PAGINAS: { pad: string; Pagina: ComponentType; source: string; tekstveld: string }[] = [
  { pad: "/contact", Pagina: ContactPage, source: "contact", tekstveld: "bericht" },
  { pad: "/klantservice", Pagina: KlantservicePage, source: "klantenservice", tekstveld: "vraag" },
  { pad: "/levering", Pagina: LeveringPage, source: "levering", tekstveld: "situatie" },
];

function toon(pad: string, Pagina: ComponentType): HTMLFormElement {
  const { container } = render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[pad]}>
        <Pagina />
      </MemoryRouter>
    </HelmetProvider>,
  );
  const form = container.querySelector<HTMLFormElement>("form#formBody, form.fshell, form#ksForm");
  if (!form) throw new Error(`geen formulier op ${pad}`);
  return form;
}

function vulIn(form: HTMLFormElement, tekstveld: string) {
  const zet = (name: string, value: string) => {
    const el = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement;
    fireEvent.change(el, { target: { value } });
  };
  zet("voornaam", "Jan");
  zet("naam", "Peeters");
  zet("email", "jan@voorbeeld.be");
  zet("telefoon", "0470 12 34 56");
  zet(tekstveld, "Mijn toestel lekt.");
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe.each(PAGINAS)("formulier op $pad", ({ pad, Pagina, source, tekstveld }) => {
  it("post naar /api/aanvraag met de juiste velden en toont de bevestiging", async () => {
    const fetchMock = vi.fn(async () => Response.json({ ok: true }));
    vi.stubGlobal("fetch", fetchMock);

    const form = toon(pad, Pagina);
    vulIn(form, tekstveld);
    fireEvent.submit(form);

    // Het formulier maakt plaats voor de bevestiging: weggehaald of verborgen.
    await waitFor(() => {
      const veld = form.elements.namedItem(tekstveld) as HTMLElement | null;
      expect(veld === null || form.hidden).toBe(true);
    });
    expect(screen.getByText(/vraag verzonden/i)).toBeInTheDocument();

    const [url, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe("/api/aanvraag");
    const body = JSON.parse(String(init.body)) as Record<string, unknown>;
    expect(body).toMatchObject({
      source,
      voornaam: "Jan",
      achternaam: "Peeters",
      email: "jan@voorbeeld.be",
      telefoon: "0470 12 34 56",
      bericht: "Mijn toestel lekt.",
      website: "",
    });
    expect(String(body.onderwerp).length).toBeGreaterThan(0);
  });

  it("toont bij een fout de melding en de mailto als uitweg", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => Response.json({ error: "Verzenden lukte niet." }, { status: 502 })),
    );

    const form = toon(pad, Pagina);
    vulIn(form, tekstveld);
    fireEvent.submit(form);

    const alert = await screen.findByRole("alert");
    expect(alert).toHaveTextContent("Verzenden lukte niet.");
    const link = alert.querySelector("a");
    expect(link?.getAttribute("href")).toMatch(/^mailto:info@vernast-verhuur\.be\?subject=/);
    expect(decodeURIComponent(link?.getAttribute("href") ?? "")).toContain("Mijn toestel lekt.");
  });
});

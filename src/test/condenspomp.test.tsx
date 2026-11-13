import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import type { ReactElement } from "react";
import ToebehorenCondenspompPage from "@/pages/verhuur/ToebehorenCondenspompPage";
import VerhuurAfhalenPage from "@/pages/verhuur/VerhuurAfhalenPage";
import { CONDENSPOMP, TOEBEHOREN, toebehorenPad } from "@/data/toebehoren";
import { GAMMA, TOEBEHOREN_LINKS } from "@/data/navigation";
import { PUMP } from "@/data/verhuur";
import { euro } from "@/lib/verhuur";

/**
 * De condenspomp is het eerste artikel op deze site dat te huur staat zonder
 * uit `TARIEVEN.products` te komen: haar prijs hangt aan
 * `TARIEVEN.pricing.pump_price_per_day`, hetzelfde veld dat de boeking leest.
 * Precies daar zit het risico — een fiche die haar eigen "€ 2" uitschrijft
 * wijkt af zodra het portaal iets anders publiceert, en dat is hoe /prijzen
 * ooit aan verzonnen bedragen raakte.
 */
const PAD = "/verhuur/toebehoren/condenspomp";

function toon(element: ReactElement, pad = PAD): HTMLElement {
  const { container } = render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[pad]}>{element}</MemoryRouter>
    </HelmetProvider>,
  );
  return container;
}

describe("de condenspomp als product", () => {
  it("neemt haar dagprijs over van de boeking", () => {
    expect(CONDENSPOMP.dag).toBe(PUMP.price);
  });

  it("schrijft nergens een bedrag uit dat niet uit die prijs komt", () => {
    const teksten = [
      CONDENSPOMP.sum,
      CONDENSPOMP.aboutTitle,
      ...CONDENSPOMP.about,
      ...CONDENSPOMP.bullets.flat(),
      ...CONDENSPOMP.stappen.flat(),
      ...CONDENSPOMP.specs.flat(),
      ...CONDENSPOMP.faq.flat(),
    ];
    const bedragen = teksten.flatMap((tekst) => tekst.match(/€\s?[\d.,]+/g) ?? []);
    expect([...new Set(bedragen)]).toEqual([euro(PUMP.price)]);
  });

  it("staat onder hetzelfde pad in de menu's als in de route", () => {
    expect(toebehorenPad(CONDENSPOMP.slug)).toBe(PAD);
    expect(TOEBEHOREN_LINKS.map((link) => link.path)).toContain(PAD);
    // Zonder entry in `navigation.ts` is de pagina een wees: ze staat dan wel
    // in sitemap.xml maar er loopt geen interne link naartoe.
    expect(GAMMA.map((link) => link.path)).toContain(PAD);
  });

  it("heeft voor elk toebehoren een foto met een omschrijving", () => {
    for (const toebehoren of TOEBEHOREN) {
      expect(toebehoren.img.length).toBeGreaterThan(0);
      for (const [src, alt] of toebehoren.img) {
        expect(src).toMatch(/^\/vernast\/.+\.webp$/);
        expect(alt.length).toBeGreaterThan(20);
      }
    }
  });
});

describe("de fiche van de condenspomp", () => {
  it("heeft één H1 met het zoekwoord erin", () => {
    const container = toon(<ToebehorenCondenspompPage />);
    const koppen = container.querySelectorAll("h1");
    expect(koppen).toHaveLength(1);
    expect(koppen[0].textContent ?? "").toMatch(/condenspomp/i);
  });

  it("toont de dagprijs van het portaal en geen overgetypt bedrag", () => {
    const container = toon(<ToebehorenCondenspompPage />);
    const bedragen = (container.textContent ?? "").match(/€\s?[\d.,]+/g) ?? [];
    // De bouwdrogers in de kruisverkoop dragen hun eigen dagprijs; die komt
    // uit dezelfde tarieven. Het enige wat hier niet mag, is een bedrag dat
    // nergens vandaan komt.
    expect(bedragen).toContain(euro(PUMP.price));
  });

  it("zet elk FAQ-antwoord in de HTML, ook dichtgeklapt", () => {
    const container = toon(<ToebehorenCondenspompPage />);
    const tekst = container.textContent ?? "";
    for (const [vraag, antwoord] of CONDENSPOMP.faq) {
      expect(tekst).toContain(vraag);
      // Werkt zonder JavaScript: <details> houdt zijn inhoud in de HTML, en
      // precies daarvoor prerenderen wij.
      expect(tekst).toContain(antwoord.slice(0, 40));
    }
  });

  it("wijst naar de twee manieren waarop de pomp bij de klant raakt", () => {
    const container = toon(<ToebehorenCondenspompPage />);
    const paden = [...container.querySelectorAll("a[href]")].map((a) => a.getAttribute("href"));
    expect(paden).toContain("/verhuur/calculator");
    expect(paden).toContain("/verhuur/afhalen?pomp=1");
  });
});

describe("de pomp meevragen bij een afhaling", () => {
  it("zet de vraag als opmerking klaar op de afhaalpagina", () => {
    toon(<VerhuurAfhalenPage />, "/verhuur/afhalen?pomp=1");
    const opmerking = screen.getByLabelText(/opmerking/i) as HTMLInputElement;
    expect(opmerking.value).toMatch(/condenspomp/i);
  });

  it("laat het veld leeg zonder die vraag", () => {
    toon(<VerhuurAfhalenPage />, "/verhuur/afhalen");
    const opmerking = screen.getByLabelText(/opmerking/i) as HTMLInputElement;
    expect(opmerking.value).toBe("");
  });
});

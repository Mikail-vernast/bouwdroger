import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import type { ComponentType } from "react";
import NieuwbouwPage from "@/pages/NieuwbouwPage";
import WaterschadePage from "@/pages/WaterschadePage";
import RenovatiePage from "@/pages/RenovatiePage";
import PrijzenPage from "@/pages/PrijzenPage";
import MachinesPage from "@/pages/MachinesPage";
import { REALISATIES } from "@/data/realisaties";
import { REGIO_ROUTES } from "@/data/regio-slugs";
import { droogtermijnen, natuurlijkeChapeWeken, termijnLabel } from "@/lib/droogtijden";

/**
 * De vijf geldpagina's waren te dun om door Google opgehaald te worden: rond de
 * 300 woorden hoofdtekst, en op drie ervan stonden de FAQ-antwoorden in een
 * accordeon die ze niet eens renderde. Deze test bewaakt wat je aan de pagina
 * zelf niet ziet: genoeg eigen tekst, het zoekwoord in de H1, antwoorden die in
 * de HTML staan, en interne links die niet op een 404 uitkomen.
 */
const MIN_WOORDEN = 800;

const PAGINAS: { pad: string; Pagina: ComponentType; h1: RegExp }[] = [
  { pad: "/nieuwbouw", Pagina: NieuwbouwPage, h1: /chape en pleisterwerk drogen/i },
  { pad: "/waterschade", Pagina: WaterschadePage, h1: /waterschade drogen/i },
  { pad: "/renovatie", Pagina: RenovatiePage, h1: /vochtige kelder/i },
  { pad: "/prijzen", Pagina: PrijzenPage, h1: /bouwdroger huren: prijzen/i },
  { pad: "/machines", Pagina: MachinesPage, h1: /bouwdrogers, ventilatoren/i },
];

function toon(pad: string, Pagina: ComponentType): HTMLElement {
  const { container } = render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[pad]}>
        <Pagina />
      </MemoryRouter>
    </HelmetProvider>,
  );
  const main = container.querySelector("main");
  if (!main) throw new Error(`${pad} rendert geen <main>`);
  return main;
}

const woorden = (t: string) => t.split(/\s+/).filter(Boolean).length;

describe("inhoudspagina's", () => {
  it.each(PAGINAS)("$pad: minstens 800 woorden hoofdtekst", ({ pad, Pagina }) => {
    expect(woorden(toon(pad, Pagina).textContent ?? "")).toBeGreaterThanOrEqual(MIN_WOORDEN);
  });

  it.each(PAGINAS)("$pad: de H1 bevat het zoekwoord", ({ pad, Pagina, h1 }) => {
    const koppen = toon(pad, Pagina).querySelectorAll("h1");
    expect(koppen).toHaveLength(1);
    expect(koppen[0].textContent ?? "").toMatch(h1);
  });

  it.each(PAGINAS)("$pad: elke FAQ-vraag heeft een zichtbaar antwoord", ({ pad, Pagina }) => {
    const main = toon(pad, Pagina);
    const vragen = main.querySelectorAll("dt");
    expect(vragen.length).toBeGreaterThan(0);
    for (const dt of vragen) {
      expect(dt.nextElementSibling?.tagName).toBe("DD");
      expect(woorden(dt.nextElementSibling?.textContent ?? "")).toBeGreaterThan(5);
    }
  });

  it.each(PAGINAS)("$pad: realisatie- en regiolinks bestaan", ({ pad, Pagina }) => {
    const main = toon(pad, Pagina);
    const slugs = new Set(REALISATIES.map((r) => r.slug));
    const regios = new Set(REGIO_ROUTES.map((r) => r.path));
    const hrefs = [...main.querySelectorAll("a")].map((a) => a.getAttribute("href") ?? "");

    const realisaties = hrefs.filter((h) => h.startsWith("/realisaties/"));
    expect(realisaties.length).toBeGreaterThanOrEqual(2);
    for (const h of realisaties) expect(slugs.has(h.slice("/realisaties/".length))).toBe(true);

    const regioLinks = hrefs.filter((h) => h.startsWith("/bouwdroger-huren-"));
    expect(regioLinks.length).toBeGreaterThanOrEqual(1);
    for (const h of regioLinks) expect(regios.has(h)).toBe(true);

    expect(hrefs).toContain("/verhuur/calculator");
  });
});

describe("droogtijden", () => {
  it("geeft per chape- en pleisterdikte een huurtermijn uit de catalogus", () => {
    for (const soort of ["chape", "pleister"] as const) {
      const rijen = droogtermijnen(soort);
      expect(rijen.length).toBeGreaterThan(0);
      for (const r of rijen) {
        expect(r.min).toBeGreaterThan(0);
        expect(r.max).toBeGreaterThanOrEqual(r.min);
      }
      // Een dikkere laag mag nooit korter gehuurd worden dan een dunnere.
      for (let i = 1; i < rijen.length; i++) expect(rijen[i].min).toBeGreaterThanOrEqual(rijen[i - 1].min);
    }
  });

  it("volgt de vuistregel voor natuurlijk drogen van chape", () => {
    expect(natuurlijkeChapeWeken(4)).toBe(4);
    expect(natuurlijkeChapeWeken(5)).toBe(6);
    expect(natuurlijkeChapeWeken(7)).toBe(10);
  });

  it("schrijft een termijn of een bereik uit", () => {
    expect(termijnLabel({ min: 3, max: 3 })).toBe("3 weken");
    expect(termijnLabel({ min: 1, max: 1 })).toBe("1 week");
    expect(termijnLabel({ min: 2, max: 3 })).toBe("2 tot 3 weken");
  });
});

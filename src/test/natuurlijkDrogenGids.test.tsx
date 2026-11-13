import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import NatuurlijkDrogenPage from "@/pages/gids/NatuurlijkDrogenPage";
import { SEO, type SeoEntry } from "@/data/seo";
import { GIDSEN } from "@/data/navigation";
import { droogtermijnen, natuurlijkeChapeWeken } from "@/lib/droogtijden";

/**
 * De vergelijkende gids natuurlijk drogen versus bouwdroger.
 *
 * Wat hier bewaakt wordt is niet de opmaak maar de cijfers. De pagina zet twee
 * kolommen naast elkaar, en die kolommen komen uit twee verschillende bronnen:
 * de huurtermijnen uit de pakketcatalogus en de vuistregel voor natuurlijk
 * drogen uit `lib/droogtijden.ts`. Wordt er ooit één getal overgetypt, dan
 * belooft deze pagina een termijn die de calculator niet aanrekent, en dat
 * merkt niemand bij het bekijken van de pagina.
 */
const PAD = "/gids/natuurlijk-drogen-of-bouwdroger";
const MIN_WOORDEN = 1200;

const CHAPE = droogtermijnen("chape");

function toon(): HTMLElement {
  const { container } = render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[PAD]}>
        <NatuurlijkDrogenPage />
      </MemoryRouter>
    </HelmetProvider>,
  );
  return container;
}

const woorden = (t: string) => t.split(/\s+/).filter(Boolean).length;

describe(PAD, () => {
  it("heeft genoeg eigen tekst om als gids opgehaald te worden", () => {
    expect(woorden(toon().textContent ?? "")).toBeGreaterThanOrEqual(MIN_WOORDEN);
  });

  it("heeft precies één H1, over allebei de methodes", () => {
    const koppen = toon().querySelectorAll("h1");
    expect(koppen).toHaveLength(1);
    expect(koppen[0].textContent ?? "").toMatch(/natuurlijk/i);
    expect(koppen[0].textContent ?? "").toMatch(/bouwdroger/i);
  });

  it("toont voor elke chapedikte beide termijnen uit de catalogus", () => {
    const tekst = toon().textContent ?? "";
    for (const rij of CHAPE) {
      // De huurtermijn zoals de pakketten hem rekenen.
      expect(tekst).toContain(`${rij.max} weken`);
      // En de vuistregel ernaast, anders staat er maar één kolom.
      expect(tekst).toContain(`${natuurlijkeChapeWeken(rij.dikte)} weken`);
    }
  });

  it("stuurt door naar de twee gidsen die per materiaal rekenen", () => {
    const hrefs = [...toon().querySelectorAll("a")].map((a) => a.getAttribute("href"));
    expect(hrefs).toContain("/gids/hoe-lang-moet-chape-drogen");
    expect(hrefs).toContain("/gids/hoe-lang-moet-pleisterwerk-drogen");
    expect(hrefs).toContain("/nieuwbouw-drogen");
  });

  it("zegt ook wanneer u niets hoeft te huren", () => {
    // Een gids die alleen naar de calculator duwt is een advertentie. Deze
    // sectie is het hele punt van de pagina; valt ze weg, dan verandert de
    // toon zonder dat iemand het merkt.
    const tekst = toon().textContent ?? "";
    expect(tekst).toMatch(/Wanneer natuurlijk drogen wel volstaat/i);
    expect(tekst).toMatch(/Niet elke werf heeft een bouwdroger nodig/i);
  });

  it("toont elk FAQ-antwoord in de HTML, niet pas na een klik", () => {
    const vragen = toon().querySelectorAll(".fq-item");
    expect(vragen.length).toBeGreaterThanOrEqual(6);
    for (const vraag of vragen) {
      expect(woorden(vraag.textContent ?? "")).toBeGreaterThan(30);
    }
  });

  it("zet geen enkel blok op opacity:0, dat zou onzichtbaar prerenderen", () => {
    expect(toon().querySelectorAll('[style*="opacity:0"], [style*="opacity: 0"]')).toHaveLength(0);
  });

  it("staat in de gidsenlijst, zodat ze geen wees wordt", () => {
    // `GIDSEN` voedt het mega-menu, de hub op /gids en de zichtbare sitemap.
    expect(GIDSEN.some((item) => item.path === PAD)).toBe(true);
  });

  it("heeft metadata die met geen enkele andere pagina botst", () => {
    const entry: SeoEntry = SEO.gidsNatuurlijkDrogen;
    expect(entry.noindex).toBeUndefined();
    expect(entry.title).toMatch(/natuurlijk/i);
    const titels = Object.values(SEO).map((e) => e.title);
    const omschrijvingen = Object.values(SEO).map((e) => e.description);
    expect(titels.filter((t) => t === entry.title)).toHaveLength(1);
    expect(omschrijvingen.filter((d) => d === entry.description)).toHaveLength(1);
  });
});

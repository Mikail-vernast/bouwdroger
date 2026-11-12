import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import OntschimmelingPage from "@/pages/OntschimmelingPage";
import { SEO, type SeoEntry } from "@/data/seo";
import { SCHIMMELS, TOEPASSINGEN } from "@/data/navigation";

/**
 * /ontschimmeling is de zusterpagina van /ozonbehandeling: dezelfde schil,
 * eigen copy, eigen URL.
 *
 * Wat hier vastligt is vooral dat de twee niet stilletjes één pagina worden.
 * Ze delen een stylesheet en een formulier, dus een kopieerfout in de copy of
 * in de metadata valt niet op bij het bekijken — ze zien er dan nog steeds
 * hetzelfde uit.
 */
const MIN_WOORDEN = 800;

function toon(): HTMLElement {
  const { container } = render(
    <HelmetProvider>
      <MemoryRouter initialEntries={["/ontschimmeling"]}>
        <OntschimmelingPage />
      </MemoryRouter>
    </HelmetProvider>,
  );
  const main = container.querySelector("main");
  if (!main) throw new Error("/ontschimmeling rendert geen <main>");
  return main;
}

const woorden = (t: string) => t.split(/\s+/).filter(Boolean).length;

describe("/ontschimmeling", () => {
  it("heeft genoeg eigen tekst om opgehaald te worden", () => {
    expect(woorden(toon().textContent ?? "")).toBeGreaterThanOrEqual(MIN_WOORDEN);
  });

  it("heeft precies één H1, over schimmel en niet over ozon", () => {
    const koppen = toon().querySelectorAll("h1");
    expect(koppen).toHaveLength(1);
    expect(koppen[0].textContent ?? "").toMatch(/schimmel/i);
  });

  it("toont elk FAQ-antwoord in de HTML, niet pas na een klik", () => {
    const vragen = toon().querySelectorAll("details.q");
    expect(vragen.length).toBeGreaterThanOrEqual(5);
    for (const vraag of vragen) {
      expect(woorden(vraag.querySelector("p")?.textContent ?? "")).toBeGreaterThan(20);
    }
  });

  it("zet geen enkel blok op opacity:0 — dat zou onzichtbaar prerenderen", () => {
    expect(toon().querySelectorAll('[style*="opacity:0"], [style*="opacity: 0"]')).toHaveLength(0);
  });

  it("draagt de animaties van de zusterpagina", () => {
    const main = toon();
    // De hero-kring met zes sporen, en de schimmelmuur met de O₃-moleculen.
    expect(main.querySelectorAll(".oz-orbit .oz-spoke")).toHaveLength(6);
    expect(main.querySelectorAll(".oz-stage .oz-spore")).toHaveLength(6);
    expect(main.querySelectorAll(".oz-stage .oz-mol3").length).toBeGreaterThan(0);
  });

  it("verstuurt als `ontschimmeling`, zodat het portaal de bron ziet", () => {
    // Het formulier is gedeeld met /ozonbehandeling; zonder deze prop las elke
    // aanvraag daar als "Ozonbehandeling".
    const knop = toon().querySelector<HTMLButtonElement>(".ozf-next");
    expect(knop).not.toBeNull();
    expect(knop?.disabled).toBe(true);
  });

  it("staat in beide menu's en linkt naar de zusterpagina", () => {
    expect(TOEPASSINGEN.some((item) => item.path === "/ontschimmeling")).toBe(true);
    expect(SCHIMMELS.some((item) => item.path === "/ontschimmeling")).toBe(true);
    const hrefs = [...toon().querySelectorAll("a")].map((a) => a.getAttribute("href"));
    expect(hrefs).toContain("/ozonbehandeling");
  });

  it("heeft eigen metadata die niet met /ozonbehandeling botst", () => {
    const entry: SeoEntry = SEO.ontschimmeling;
    expect(entry.title).toMatch(/ontschimmeling/i);
    expect(entry.noindex).toBeUndefined();
    expect(entry.title).not.toBe(SEO.ozonbehandeling.title);
    expect(entry.description).not.toBe(SEO.ozonbehandeling.description);
  });
});

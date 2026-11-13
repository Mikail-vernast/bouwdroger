import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import GemeentePage from "@/pages/GemeentePage";
import { GEMEENTE_ROUTES } from "@/data/gemeente-slugs";

/**
 * Dezelfde regel als op de provinciepagina's: wit en rood wisselen strikt af,
 * van de hero tot het formulier.
 *
 * Hier liep het mis op twee plekken tegelijk. De kleuren stonden als vaste
 * klasse in de JSX, dus een gemeente zonder eigen werven liet die sectie weg en
 * alles erna stond vanaf dat punt op de verkeerde kleur. En de FAQ was altijd
 * wit terwijl de droogtijdentabel erboven dat ook was. Sinds de volgorde de
 * kleur bepaalt (`src/components/content/ritme.ts`) kan dat niet meer per
 * ongeluk, maar de lijst zelf blijft met de hand onderhouden -- vandaar deze
 * test, die de klassen leest zoals ze gerenderd worden.
 */
type Kleur = "wit" | "rood";

function rij(pad: string): { kleur: Kleur; naam: string }[] {
  const { container } = render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[pad]}>
        <GemeentePage />
      </MemoryRouter>
    </HelmetProvider>,
  );
  const main = container.querySelector("main");
  if (!main) throw new Error(`${pad} rendert geen <main>`);

  const uit: { kleur: Kleur; naam: string }[] = [];
  for (const el of Array.from(main.querySelectorAll(":scope > *, :scope > div > section"))) {
    const cls = el.className.toString();
    /* De wikkel om de hero telt zelf niet mee; zijn <section> erin wel niet,
       want die draagt geen kleur. Daarom hier de wikkel en niet de sectie. */
    if (/\bredtop\b/.test(cls)) uit.push({ kleur: "rood", naam: "hero" });
    else if (/\bsr\b/.test(cls)) uit.push({ kleur: "rood", naam: kop(el) });
    else if (/\bsw\b/.test(cls)) uit.push({ kleur: "wit", naam: kop(el) });
    else if (/\bfq\b/.test(cls))
      uit.push({ kleur: /\brood\b/.test(cls) ? "rood" : "wit", naam: kop(el) });
  }
  return uit;
}

const kop = (el: Element) =>
  el.querySelector("h1, h2, .fq-titel")?.textContent?.trim().slice(0, 44) ?? el.className.toString();

describe("ritme van de gemeentepagina's", () => {
  it.each(GEMEENTE_ROUTES)("$slug: wit en rood wisselen af", (route) => {
    const r = rij(route.path);
    expect(r.length).toBeGreaterThanOrEqual(8);
    expect(r[0].kleur).toBe("rood");

    const botsingen: string[] = [];
    for (let i = 1; i < r.length; i++) {
      if (r[i].kleur === r[i - 1].kleur) {
        botsingen.push(`${r[i - 1].naam} → ${r[i].naam} (beide ${r[i].kleur})`);
      }
    }
    expect(botsingen).toEqual([]);
  });

  /*
    Wie uit Google komt weet nog niet dat wij een berekend pakket leveren in
    plaats van een machine te verhuren. De toestellen stonden daarom te vroeg.
    Gevraagd op 13-11-2026, voor de provincie- én de gemeentepagina's.
  */
  it.each(GEMEENTE_ROUTES)("$slug: het droogpakket komt vóór de toestellen", (route) => {
    const { container } = render(
      <HelmetProvider>
        <MemoryRouter initialEntries={[route.path]}>
          <GemeentePage />
        </MemoryRouter>
      </HelmetProvider>,
    );
    const kicks = Array.from(container.querySelectorAll("main .kick")).map(
      (k) => k.textContent?.trim().toLowerCase() ?? "",
    );
    const pakket = kicks.indexOf("uw complete droogpakket");
    const toestellen = kicks.indexOf("de toestellen");
    expect(pakket).toBeGreaterThanOrEqual(0);
    expect(toestellen).toBeGreaterThan(pakket);
  });

  /*
    De FAQ is de laatste sectie vóór het formulier, en dat formulier staat vast
    op rood. De FAQ hoort dus wit te zijn, met de rode slotplaat erin als
    overgang. Op gemeenten zonder eigen werven viel de wervensectie weg, schoof
    alles een beurt op en kwam de FAQ rood uit -- rood tegen rood onderaan de
    pagina. Sinds die sectie aanvult met werven uit de provincie kan dat niet
    meer, maar deze test bewaakt de uitkomst en niet de oorzaak.
  */
  it.each(GEMEENTE_ROUTES)("$slug: de FAQ is wit en draagt de rode slotplaat", (route) => {
    const { container } = render(
      <HelmetProvider>
        <MemoryRouter initialEntries={[route.path]}>
          <GemeentePage />
        </MemoryRouter>
      </HelmetProvider>,
    );
    const faq = container.querySelector("main .fq");
    expect(faq).not.toBeNull();
    expect(faq!.className.toString()).toContain("wit");
    expect(faq!.querySelector(".manband")).not.toBeNull();
  });

  it.each(GEMEENTE_ROUTES)("$slug: toont vet, geen sterretjes", (route) => {
    const { container } = render(
      <HelmetProvider>
        <MemoryRouter initialEntries={[route.path]}>
          <GemeentePage />
        </MemoryRouter>
      </HelmetProvider>,
    );
    expect(container.querySelector("main")!.textContent).not.toContain("**");
  });
});

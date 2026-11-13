import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import RegioPage from "@/pages/RegioPage";
import { REGIO_ROUTES } from "@/data/regio-slugs";

/**
 * Wit en rood wisselen op een inhoudspagina strikt af, van de hero tot de
 * FAQ. Op de regiopagina's liep dat mis zonder dat het in de code te zien
 * was: vier van de vijf provincies hebben geen strekenlijst, waardoor twee
 * secties wegvielen en alles erna op de verkeerde kleur stond.
 *
 * Het formulier staat buiten die telling. Het is altijd rood -- de pagina
 * eindigt op rood, net als /prijzen -- en de rode slotplaat erboven is een
 * ingelegde plaat met wit eromheen, geen strook over de volle breedte. De
 * tweede test hieronder bewaakt dat het rood blijft.
 *
 * Sinds RegioPage zijn kleuren uit de volgorde afleidt kan dat niet meer per
 * ongeluk, maar de volgorde zelf blijft met de hand onderhouden. Deze test
 * bewaakt de regel en niet de code: hij leest de klassen van de secties zoals
 * ze gerenderd worden.
 */
type Kleur = "wit" | "rood";

/** De hero is rood; daarna moet elke sectie van kleur wisselen. */
const HERO: Kleur = "rood";

function kleuren(pad: string): { kleur: Kleur; naam: string }[] {
  const { container } = render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[pad]}>
        <RegioPage />
      </MemoryRouter>
    </HelmetProvider>,
  );
  const main = container.querySelector("main");
  if (!main) throw new Error(`${pad} rendert geen <main>`);

  const rij: { kleur: Kleur; naam: string }[] = [];
  for (const el of Array.from(main.children)) {
    const cls = el.className.toString();
    const kop = el.querySelector("h1, h2, .fq-titel")?.textContent?.trim().slice(0, 44) ?? cls;

    // De hero zit in een `.redtop`-wikkel, de FAQ draagt haar eigen klasse;
    // de gewone secties zijn `sw` of `sr`. Het formulier (`.oform`) telt niet
    // mee: dat staat vast op rood.
    if (/\bredtop\b/.test(cls)) rij.push({ kleur: "rood", naam: kop });
    else if (/\bsr\b/.test(cls)) rij.push({ kleur: "rood", naam: kop });
    else if (/\bsw\b/.test(cls)) rij.push({ kleur: "wit", naam: kop });
    else if (/\bfq\b/.test(cls)) {
      rij.push({ kleur: /\brood\b/.test(cls) ? "rood" : "wit", naam: kop });
      // De rode CTA-plaat staat bewust binnen de witte FAQ-sectie: wie de
      // vragen gelezen heeft is klaar om te boeken. Visueel is dat een rood
      // vlak, dus telt het als een rode beurt — anders botst de sectie erna.
      if (el.querySelector(".manband")) rij.push({ kleur: "rood", naam: `${kop} (slotplaat)` });
    }
  }
  return rij;
}

describe("ritme van de regiopagina's", () => {
  it.each(REGIO_ROUTES)("$slug: wit en rood wisselen af van hero tot FAQ", (route) => {
    const rij = kleuren(route.path);
    expect(rij.length).toBeGreaterThanOrEqual(6);

    /* De eerste rij is de hero zelf; die hoort rood te zijn. */
    expect(rij[0].kleur).toBe(HERO);

    const botsingen: string[] = [];
    let vorige: Kleur = rij[0].kleur;
    let vorigeNaam = rij[0].naam;
    for (const { kleur, naam } of rij.slice(1)) {
      if (kleur === vorige) botsingen.push(`${vorigeNaam} → ${naam} (beide ${kleur})`);
      vorige = kleur;
      vorigeNaam = naam;
    }
    expect(botsingen).toEqual([]);
  });

  /*
    Het formulier stond een tijd op de beurt na de FAQ en viel daardoor op de
    vier provincies zonder reviews-staart licht uit. Gevraagd op 13-11-2026:
    "kan je dit nog in het rood maken", net als eerder op /prijzen. Dus geen
    berekening meer, en deze test die het vastzet.
  */
  it.each(REGIO_ROUTES)("$slug: het formulier onderaan is rood", (route) => {
    const { container } = render(
      <HelmetProvider>
        <MemoryRouter initialEntries={[route.path]}>
          <RegioPage />
        </MemoryRouter>
      </HelmetProvider>,
    );
    const form = container.querySelector("main .oform");
    expect(form).not.toBeNull();
    expect(form!.className.toString()).not.toMatch(/\blicht\b/);
  });

  it.each(REGIO_ROUTES)("$slug: noemt elke gemeente hoogstens één keer als link", (route) => {
    const { container } = render(
      <HelmetProvider>
        <MemoryRouter initialEntries={[route.path]}>
          <RegioPage />
        </MemoryRouter>
      </HelmetProvider>,
    );
    /*
      De gemeentelinks stonden twee keer op de pagina: als rij onder "Hoe het
      verloopt" én als lijst per streek. Op Antwerpen waren dat zeventien
      dubbele links, waarvan de ene rij bovendien in een rode sectie stond waar
      ze nauwelijks te lezen was.

      Op de naam en niet op het pad, want één pagina mag meerdere plaatsen
      dekken: Berendrecht en Zandvliet liggen in dezelfde polder en delen er
      één (zie `ookVoor` in gemeente-slugs.ts). Twee namen naar hetzelfde pad is
      dus goed; dezelfde naam twee keer is de fout die deze test ving.
    */
    const namen = Array.from(container.querySelectorAll("main a[href^='/bouwdroger-huren-']"))
      .map((a) => a.textContent?.trim() ?? "")
      .filter(Boolean);
    const dubbel = namen.filter((n, i) => namen.indexOf(n) !== i);
    expect(dubbel).toEqual([]);
  });

  /*
    Wie uit Google komt weet nog niet dat wij een berekend pakket leveren in
    plaats van een machine te verhuren. De toestellen stonden daarom te vroeg:
    hij koos er een uit vier kaarten vóór de prijs- en pakketsectie hem verteld
    had waarom dat niet de vraag is. Gevraagd op 13-11-2026.
  */
  it.each(REGIO_ROUTES)("$slug: het droogpakket komt vóór de toestellen", (route) => {
    const { container } = render(
      <HelmetProvider>
        <MemoryRouter initialEntries={[route.path]}>
          <RegioPage />
        </MemoryRouter>
      </HelmetProvider>,
    );
    const koppen = Array.from(container.querySelectorAll("main .kick")).map((k) =>
      k.textContent?.trim().toLowerCase() ?? "",
    );
    const pakket = koppen.indexOf("uw complete droogpakket");
    const toestellen = koppen.indexOf("de toestellen");
    expect(pakket).toBeGreaterThanOrEqual(0);
    expect(toestellen).toBeGreaterThan(pakket);

    /* En die sectie moet naar de calculator leiden, anders overtuigt ze niets. */
    expect(container.querySelector("main a[href='/verhuur/calculator']")).not.toBeNull();
  });

  /*
    De nadrukmarkering uit `src/data/regios.ts` hoort op het scherm een `<b>`
    te zijn, geen sterretjes. Vergeet iemand `nadruk()` bij een nieuwe alinea,
    dan staat "**binnen 24 uur**" letterlijk in de geprerenderde HTML.
  */
  it.each(REGIO_ROUTES)("$slug: toont vet, geen sterretjes", (route) => {
    const { container } = render(
      <HelmetProvider>
        <MemoryRouter initialEntries={[route.path]}>
          <RegioPage />
        </MemoryRouter>
      </HelmetProvider>,
    );
    const main = container.querySelector("main")!;
    expect(main.textContent).not.toContain("**");
    expect(main.querySelectorAll(".lede b, .hero p b, .paneel p b").length).toBeGreaterThan(3);
  });
});

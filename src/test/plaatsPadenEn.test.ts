import { describe, expect, it } from "vitest";
import { REGIO_ROUTES, regioPadEn } from "@/data/regio-slugs";
import { GEMEENTE_ROUTES, gemeentePadEn, kruimelEn, plaatsEn } from "@/data/gemeente-slugs";
import { GEMEENTEN_MET_EN } from "@/data/gemeenten-en/aan";
import { STATISCH, naarNl, vertaalPad } from "@/i18n/paden";
import { STREKEN_PER_REGIO, streekKenmerkEn, streekNaamEn } from "@/data/provincie-gemeenten";

/**
 * De Engelse paden van de provincie- en gemeentepagina's, zoals
 * `plaatsPadenFr.test.ts` voor het Frans.
 *
 * Ook hier wordt het pad van élke Belgische gemeente uitgerekend, ook van de
 * gemeenten die nog geen Engelse tekst hebben: een botsing (een stad die haar
 * naam met haar provincie deelt, twee gemeenten met dezelfde lokale naam) valt
 * zo op voordat iemand de tekst schrijft.
 */
const regioPaden = REGIO_ROUTES.map(regioPadEn).filter((p): p is string => !!p);
const gemeentePaden = GEMEENTE_ROUTES.map(gemeentePadEn).filter((p): p is string => !!p);
const g = (slug: string) => GEMEENTE_ROUTES.find((x) => x.slug === slug)!;

describe("Engelse paden van provincies en gemeenten", () => {
  it("geeft elke Belgische provincie en gemeente een pad, en geen enkele Nederlandse", () => {
    expect(regioPaden).toHaveLength(11);
    const belgisch = new Set(REGIO_ROUTES.filter((r) => r.slugEn).map((r) => r.slug));
    for (const x of GEMEENTE_ROUTES) {
      expect(Boolean(gemeentePadEn(x)), x.slug).toBe(belgisch.has(x.regio));
    }
  });

  it("geeft nooit twee pagina's hetzelfde pad", () => {
    const alle = [...regioPaden, ...gemeentePaden];
    const dubbel = alle.filter((p, i) => alle.indexOf(p) !== i);
    expect(dubbel).toEqual([]);
  });

  it("botst niet met een vast pad uit de padentabel", () => {
    const vast = new Set(Object.values(STATISCH).map((v) => v.en));
    for (const p of [...regioPaden, ...gemeentePaden]) expect(vast.has(p), p).toBe(false);
  });

  it("schrijft paden in kleine letters zonder accenten", () => {
    for (const p of [...regioPaden, ...gemeentePaden]) {
      expect(p).toMatch(/^\/dehumidifier-hire-[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });

  it("registreert alleen de provincies en de aangezette gemeenten, heen en terug", () => {
    for (const r of REGIO_ROUTES) {
      const en = vertaalPad(r.path, "en");
      expect(en, r.slug).toBe(r.slugEn ? `/en${regioPadEn(r)}` : null);
      if (en) expect(naarNl(en)).toBe(r.path);
    }
    for (const x of GEMEENTE_ROUTES) {
      const en = vertaalPad(x.path, "en");
      expect(Boolean(en), x.slug).toBe(GEMEENTEN_MET_EN.has(x.slug));
      if (en) expect(naarNl(en)).toBe(x.path);
    }
  });

  it("geeft een gemeente met alleen een Franse tekst geen Engels pad, en zeker niet /en", () => {
    const alleenFr = GEMEENTE_ROUTES.find(
      (x) => !GEMEENTEN_MET_EN.has(x.slug) && vertaalPad(x.path, "fr"),
    )!;
    expect(vertaalPad(alleenFr.path, "en")).toBeNull();
  });

  it("gebruikt Engelse exoniemen, en elders de lokale naam", () => {
    expect(plaatsEn("Gent")).toBe("Ghent");
    expect(plaatsEn("Mechelen")).toBe("Mechelen");
    expect(plaatsEn("Leuven")).toBe("Leuven");
    expect(plaatsEn("Elsene")).toBe("Ixelles");
    expect(plaatsEn("Waver (Wavre)")).toBe("Wavre");
    expect(plaatsEn("Luik (Liège)")).toBe("Liège");
    expect(plaatsEn("Limburg (Limbourg)")).toBe("Limbourg");
    expect(plaatsEn("Sankt Vith (Saint-Vith)")).toBe("Sankt Vith");
    expect(plaatsEn("Halle")).toBe("Halle");
  });

  it("geeft de vier steden met de naam van hun provincie `-city`", () => {
    expect(gemeentePadEn(g("antwerpen-stad"))).toBe("/dehumidifier-hire-antwerp-city");
    expect(gemeentePadEn(g("brussel-stad"))).toBe("/dehumidifier-hire-brussels-city");
    expect(gemeentePadEn(g("namen-stad"))).toBe("/dehumidifier-hire-namur-city");
    expect(gemeentePadEn(g("luik-stad"))).toBe("/dehumidifier-hire-liege-city");
    expect(kruimelEn(g("brussel-stad"))).toBe("Brussels City");
    expect(gemeentePadEn(g("bergen"))).toBe("/dehumidifier-hire-mons");
    expect(gemeentePadEn(g("gent"))).toBe("/dehumidifier-hire-ghent");
    expect(gemeentePadEn(g("hasselt"))).toBe("/dehumidifier-hire-hasselt");
  });
});

describe("Engelse streeknamen op de provincie- en gemeentepagina's", () => {
  const belgisch = REGIO_ROUTES.filter((r) => r.slugEn).map((r) => r.slug);

  it("vertaalt elke streek van een Belgische provincie", () => {
    const zonder = belgisch.flatMap((slug) =>
      (STREKEN_PER_REGIO[slug] ?? []).filter((s) => streekNaamEn(s.naam) === s.naam).map((s) => s.naam),
    );
    expect(zonder).toEqual([]);
  });

  it("noemt in het kenmerk de plaatsen bij hun Engelse naam", () => {
    const streek = STREKEN_PER_REGIO["oost-vlaanderen"].find((s) => s.gemeenten[0] === "Gent")!;
    expect(streekKenmerkEn(streek.gemeenten, plaatsEn)).toMatch(/^Delivery to Ghent, /);
  });
});

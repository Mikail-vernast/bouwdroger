import { describe, expect, it } from "vitest";
import { REGIO_ROUTES, regioPadFr } from "@/data/regio-slugs";
import { GEMEENTE_ROUTES, gemeentePadFr, plaatsFr } from "@/data/gemeente-slugs";
import { GEMEENTEN_MET_FR } from "@/data/gemeenten-fr/aan";
import { STATISCH, naarNl, vertaalPad } from "@/i18n/paden";

/**
 * De Franse paden van de provincie- en gemeentepagina's.
 *
 * Ze worden afgeleid uit de Franse naam, en daar zitten valkuilen in die het
 * Nederlands niet had: Sint-Niklaas en de Luikse gemeente Saint-Nicolas heten
 * in het Frans hetzelfde, en de gemeente Limbourg botst met de provincie
 * Limbourg. Deze test rekent het pad van élke Belgische gemeente uit, ook van
 * de gemeenten die nog geen Franse tekst hebben: zo valt een botsing op
 * voordat iemand de tekst schrijft, en niet pas als twee pagina's elkaar
 * overschrijven.
 */
const regioPaden = REGIO_ROUTES.map(regioPadFr).filter((p): p is string => !!p);
const gemeentePaden = GEMEENTE_ROUTES.map(gemeentePadFr).filter((p): p is string => !!p);

describe("Franse paden van provincies en gemeenten", () => {
  it("geeft elke Belgische provincie en gemeente een pad, en geen enkele Nederlandse", () => {
    expect(regioPaden).toHaveLength(11);
    const belgisch = new Set(REGIO_ROUTES.filter((r) => r.slugFr).map((r) => r.slug));
    for (const g of GEMEENTE_ROUTES) {
      expect(Boolean(gemeentePadFr(g)), g.slug).toBe(belgisch.has(g.regio));
    }
  });

  it("geeft nooit twee pagina's hetzelfde pad", () => {
    const alle = [...regioPaden, ...gemeentePaden];
    const dubbel = alle.filter((p, i) => alle.indexOf(p) !== i);
    expect(dubbel).toEqual([]);
  });

  it("botst niet met een vast pad uit de padentabel", () => {
    const vast = new Set(Object.values(STATISCH).map((v) => v.fr));
    for (const p of [...regioPaden, ...gemeentePaden]) expect(vast.has(p), p).toBe(false);
  });

  it("schrijft paden in kleine letters zonder accenten", () => {
    for (const p of [...regioPaden, ...gemeentePaden]) {
      expect(p).toMatch(/^\/location-deshumidificateur-[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });

  it("registreert alleen de provincies en de aangezette gemeenten, heen en terug", () => {
    for (const r of REGIO_ROUTES) {
      const fr = vertaalPad(r.path, "fr");
      expect(fr, r.slug).toBe(r.slugFr ? `/fr${regioPadFr(r)}` : null);
      if (fr) expect(naarNl(fr)).toBe(r.path);
    }
    for (const g of GEMEENTE_ROUTES) {
      const fr = vertaalPad(g.path, "fr");
      expect(Boolean(fr), g.slug).toBe(GEMEENTEN_MET_FR.has(g.slug));
      if (fr) expect(naarNl(fr)).toBe(g.path);
    }
  });

  it("vertaalt plaatsnamen, ook de tweetalige uit de streeklijsten", () => {
    expect(plaatsFr("Mechelen")).toBe("Malines");
    expect(plaatsFr("Waver (Wavre)")).toBe("Wavre");
    expect(plaatsFr("Limburg (Limbourg)")).toBe("Limbourg");
    expect(plaatsFr("Hasselt")).toBe("Hasselt");
    expect(gemeentePadFr(GEMEENTE_ROUTES.find((g) => g.slug === "antwerpen-stad")!)).toBe(
      "/location-deshumidificateur-anvers-ville",
    );
    expect(gemeentePadFr(GEMEENTE_ROUTES.find((g) => g.slug === "bergen")!)).toBe(
      "/location-deshumidificateur-mons",
    );
  });
});

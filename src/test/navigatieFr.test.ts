import { describe, expect, it } from "vitest";
import { navigatie, type Navigatie } from "@/data/navigation";

/*
  De Franse menu's worden afgeleid uit de Nederlandse lijsten met een
  vertaaltabel op het label. Komt er een link bij zonder Franse tekst, dan
  stond er stil een Nederlands label in een Frans menu; deze test vangt dat.
*/
describe("navigatie in het Frans", () => {
  const nl = navigatie("nl");
  const fr = navigatie("fr");
  const lijsten = Object.keys(nl).filter((k) => k !== "ALLES_OVER_DROGEN" && k !== "VERNAST_GROEP") as (keyof Navigatie)[];

  it("heeft dezelfde lijsten met dezelfde lengte", () => {
    for (const k of lijsten) expect([k, (fr[k] as unknown[]).length]).toEqual([k, (nl[k] as unknown[]).length]);
  });

  it("vertaalt elk label, behalve namen die in beide talen gelijk zijn", () => {
    const gelijk = new Set(["Contact"]);
    for (const k of lijsten) {
      (nl[k] as { label: string }[]).forEach((item, i) => {
        if (gelijk.has(item.label)) return;
        expect([k, (fr[k] as { label: string }[])[i].label]).not.toEqual([k, item.label]);
      });
    }
    fr.ALLES_OVER_DROGEN.forEach((g, i) => expect(g.titel).not.toBe(nl.ALLES_OVER_DROGEN[i].titel));
  });

  it("linkt naar de Franse pagina waar die bestaat", () => {
    expect(fr.SERVICE.find((l) => l.path === "/fr/prix")).toBeTruthy();
    expect(fr.FOOTER_SITEMAP[0]).toEqual({ label: "Accueil", path: "/fr" });
    expect(fr.TOESTELLEN.every((l) => l.path.startsWith("/fr/location/appareil/"))).toBe(true);
  });

  it("laat de Nederlandse lijsten ongemoeid", () => {
    expect(nl.SERVICE[0]).toEqual({ label: "Prijzen", path: "/prijzen" });
  });
});

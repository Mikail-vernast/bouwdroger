import { describe, expect, it } from "vitest";
import { navigatie, regioNaam, toestelLabelIn, type Navigatie } from "@/data/navigation";
import { sitemapInhoud } from "@/data/sitemap";

/*
  De Engelse menu's worden, net als de Franse, afgeleid uit de Nederlandse
  lijsten met een vertaaltabel op het label. Komt er een link bij zonder
  Engelse tekst, dan stond er stil een Nederlands label in een Engels menu.
*/
describe("navigatie in het Engels", () => {
  const nl = navigatie("nl");
  const en = navigatie("en");
  const fr = navigatie("fr");
  const lijsten = Object.keys(nl).filter((k) => k !== "ALLES_OVER_DROGEN" && k !== "VERNAST_GROEP") as (keyof Navigatie)[];

  it("heeft dezelfde lijsten met dezelfde lengte", () => {
    for (const k of lijsten) expect([k, (en[k] as unknown[]).length]).toEqual([k, (nl[k] as unknown[]).length]);
  });

  it("vertaalt elk label, behalve namen die in beide talen gelijk zijn", () => {
    const gelijk = new Set(["Contact", "Home"]);
    for (const k of lijsten) {
      (nl[k] as { label: string }[]).forEach((item, i) => {
        if (gelijk.has(item.label)) return;
        expect([k, (en[k] as { label: string }[])[i].label]).not.toEqual([k, item.label]);
      });
    }
    en.ALLES_OVER_DROGEN.forEach((g, i) => expect(g.titel).not.toBe(nl.ALLES_OVER_DROGEN[i].titel));
  });

  it("linkt naar de Engelse pagina waar die bestaat", () => {
    expect(en.SERVICE.find((l) => l.path === "/en/prices")).toBeTruthy();
    expect(en.FOOTER_SITEMAP[0]).toEqual({ label: "Home", path: "/en" });
    expect(en.TOESTELLEN.every((l) => l.path.startsWith("/en/rental/unit/"))).toBe(true);
  });

  it("gebruikt de Engelse exoniemen voor toestellen en regio's", () => {
    expect(toestelLabelIn("ttk350", "en")).toBe("Performance construction dehumidifier");
    expect(regioNaam({ slug: "oost-vlaanderen", name: "Oost-Vlaanderen", nameEn: "East Flanders" }, "en")).toBe(
      "East Flanders",
    );
    expect(regioNaam({ slug: "zeeland", name: "Zeeland" }, "en")).toBe("Zeeland");
    expect(regioNaam({ slug: "nederlands-limburg", name: "Nederlands Limburg" }, "en")).toBe("Dutch Limburg");
    expect(en.REGIOS.find((r) => r.label.includes("Antwerp"))?.label).toBe(
      "Dehumidifier hire in the province of Antwerp",
    );
  });

  it("laat de Nederlandse en Franse lijsten ongemoeid", () => {
    expect(nl.SERVICE[0]).toEqual({ label: "Prijzen", path: "/prijzen" });
    expect(fr.SERVICE[0]).toEqual({ label: "Prix", path: "/fr/prix" });
  });
});

describe("zichtbare sitemap in het Engels", () => {
  const en = sitemapInhoud("en");

  it("linkt alleen naar Engelse pagina's", () => {
    const links = [...en.BLOKKEN.flatMap((b) => b.items), ...en.JURIDISCH, ...en.REALISATIE_LINKS];
    expect(links.length).toBeGreaterThan(10);
    for (const l of links) expect(l.path.startsWith("/en")).toBe(true);
    for (const land of en.LANDEN)
      for (const g of land.gebieden) {
        if (g.path) expect(g.path.startsWith("/en")).toBe(true);
        for (const s of g.streken) for (const p of s.plaatsen) if (p.path) expect(p.path.startsWith("/en")).toBe(true);
      }
  });

  it("noemt Brusselse en Waalse plaatsen bij hun Franse naam, Vlaamse bij hun lokale", () => {
    const namen = en.LANDEN.flatMap((l) => l.gebieden.flatMap((g) => g.streken.flatMap((s) => s.plaatsen.map((p) => p.naam))));
    expect(namen).toContain("Ixelles");
    expect(namen).toContain("Ghent");
    expect(namen).toContain("Mons");
    expect(namen).not.toContain("Elsene");
  });

  it("vertaalt de kopjes", () => {
    expect(en.LANDEN[0].titel).toBe("Belgium: Flanders");
    expect(en.JURIDISCH.map((j) => j.label)).not.toContain("Privacybeleid");
  });
});

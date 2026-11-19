import { describe, expect, it } from "vitest";
import { STATISCH, alternatieven, naarNl, vertaalPad, wisselPad } from "../i18n/paden";
import { taalUitPad, zonderPrefix } from "../i18n/taal";

describe("meertalige paden", () => {
  it("leest de taal uit het pad, Nederlands zonder prefix", () => {
    expect(taalUitPad("/chape-drogen")).toBe("nl");
    expect(taalUitPad("/fr/sechage-chape")).toBe("fr");
    expect(taalUitPad("/fr")).toBe("fr");
    expect(taalUitPad("/frituur")).toBe("nl");
    expect(zonderPrefix("/fr")).toBe("/");
  });

  it("vertaalt een vaste pagina en de homepage", () => {
    expect(vertaalPad("/chape-drogen", "fr")).toBe("/fr/sechage-chape");
    expect(vertaalPad("/", "fr")).toBe("/fr");
    expect(vertaalPad("/chape-drogen", "nl")).toBe("/chape-drogen");
  });

  it("vertaalt een toestelslug, maar laat pakket-id's ongemoeid", () => {
    expect(vertaalPad("/verhuur/toestel/bouwdroger-70-liter", "fr")).toBe(
      "/fr/location/appareil/deshumidificateur-chantier-70-litres",
    );
    expect(vertaalPad("/levering/pakket/basis", "fr")).toBe("/fr/livraison/pack/basis");
    expect(vertaalPad("/verhuur/toestel/bestaat-niet", "fr")).toBeNull();
  });

  it("vindt terug naar het Nederlandse pad, ook met querystring", () => {
    expect(naarNl("/fr/sechage-chape")).toBe("/chape-drogen");
    expect(naarNl("/fr/location/appareil/deshumidificateur-chantier-70-litres")).toBe(
      "/verhuur/toestel/bouwdroger-70-liter",
    );
    expect(naarNl("/fr/location/calculateur?m2=40")).toBe("/verhuur/calculator?m2=40");
  });

  it("stuurt de taalwissel naar de homepage van die taal als de pagina daar niet bestaat", () => {
    expect(wisselPad("/chape-drogen", "fr")).toBe("/fr/sechage-chape");
    expect(wisselPad("/fr/sechage-chape", "nl")).toBe("/chape-drogen");
    expect(wisselPad("/copy-v2", "fr")).toBe("/fr");
  });

  it("geeft per pagina de alternatieven in elke actieve taal", () => {
    expect(alternatieven("/chape-drogen")).toEqual({
      nl: "/chape-drogen",
      fr: "/fr/sechage-chape",
      en: "/en/screed-drying",
    });
  });

  it("heeft geen twee pagina's op hetzelfde Franse pad", () => {
    const fr = Object.values(STATISCH).map((v) => v.fr);
    expect(new Set(fr).size).toBe(fr.length);
  });
});

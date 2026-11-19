import { describe, expect, it } from "vitest";
import { SEO, seoVoor, type SeoSleutel } from "@/data/seo";
import { SEO_FR } from "@/data/seo.fr";

describe("Franse SEO-teksten", () => {
  const sleutels = Object.keys(SEO) as SeoSleutel[];

  it("heeft voor elke Nederlandse sleutel een Franse titel en beschrijving", () => {
    expect(Object.keys(SEO_FR).sort()).toEqual([...sleutels].sort());
  });

  it("zet dezelfde pagina's op noindex als het Nederlands", () => {
    for (const k of sleutels) {
      expect([k, Boolean(SEO_FR[k].noindex)]).toEqual([k, Boolean((SEO[k] as { noindex?: boolean }).noindex)]);
    }
  });

  it("deelt geen titel met de Nederlandse pagina, anders ziet Google dubbele inhoud", () => {
    for (const k of sleutels) expect(SEO_FR[k].title).not.toBe(SEO[k].title);
  });

  it("geeft op een Franse pagina de Franse tekst", () => {
    expect(seoVoor("home", "fr")).toBe(SEO_FR.home);
    expect(seoVoor("home", "nl")).toBe(SEO.home);
  });
});

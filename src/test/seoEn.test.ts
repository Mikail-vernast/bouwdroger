import { describe, expect, it } from "vitest";
import { SEO, seoVoor, type SeoSleutel } from "@/data/seo";
import { SEO_EN } from "@/data/seo.en";
import { SEO_FR } from "@/data/seo.fr";

describe("Engelse SEO-teksten", () => {
  const sleutels = Object.keys(SEO) as SeoSleutel[];

  it("heeft voor elke Nederlandse sleutel een Engelse titel en beschrijving", () => {
    expect(Object.keys(SEO_EN).sort()).toEqual([...sleutels].sort());
  });

  it("zet dezelfde pagina's op noindex als het Nederlands", () => {
    for (const k of sleutels) {
      expect([k, Boolean(SEO_EN[k].noindex)]).toEqual([k, Boolean((SEO[k] as { noindex?: boolean }).noindex)]);
    }
  });

  it("deelt geen titel met de Nederlandse of Franse pagina, anders ziet Google dubbele inhoud", () => {
    for (const k of sleutels) {
      expect(SEO_EN[k].title).not.toBe(SEO[k].title);
      expect(SEO_EN[k].title).not.toBe(SEO_FR[k].title);
    }
  });

  it("houdt geïndexeerde pagina's binnen de lengterichtlijn (titel 50–60, beschrijving 120–160)", () => {
    for (const k of sleutels) {
      const e = SEO_EN[k];
      if (e.noindex) continue;
      expect([k, e.title.length >= 50 && e.title.length <= 60]).toEqual([k, true]);
      expect([k, e.description.length >= 120 && e.description.length <= 160]).toEqual([k, true]);
    }
  });

  it("geeft op een Engelse pagina de Engelse tekst", () => {
    expect(seoVoor("home", "en")).toBe(SEO_EN.home);
    expect(seoVoor("home", "nl")).toBe(SEO.home);
  });
});

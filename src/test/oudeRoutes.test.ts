/**
 * Oude pagina's die naast hun opvolger bleven bestaan, op noindex.
 *
 * Het menu en de footer linkten tot oktober 2026 nog naar de oude versie:
 * /afhalen kreeg 168 interne links, /verhuur/afhalen (de geïndexeerde) 11.
 * Elke sitebrede link ging zo naar een pagina die Google niet mocht opnemen.
 * Nu verwijzen ze permanent door en is de route uit de build gehaald — een
 * redirect in vercel.json bereikt de Worker alleen als er geen bestand op dat
 * pad staat.
 *
 * **Sinds 11-2026 is /afhalen een uitzondering.** Die redirect is eruit: er
 * staat weer een eigen pagina op dat pad, met een andere zoekintentie dan
 * /verhuur/afhalen. Deze legt uit hóé afhalen werkt (route, laadruimte,
 * openingsuren) en vraagt een afhaalmoment aan; die andere is de
 * reservatie-checkout waar betaald wordt. Beide staan met een eigen titel en
 * beschrijving in src/data/seo.ts.
 *
 * Zet je de redirect terug, dan wordt die pagina onbereikbaar — maar pas
 * wanneer ze niet meer geprerenderd wordt, want zolang er een bestand op het
 * pad staat serveert de assetlaag dat en bereikt de redirect de Worker nooit.
 * Vandaar deze test aan de andere kant: hij legt vast dát /afhalen níét
 * doorverwijst.
 */
import { describe, expect, it } from "vitest";
import { matchRedirect } from "../../worker/vercelRouting";

const redirect = (pad: string) => matchRedirect(new URL(`https://vernast-bouwdrogers.be${pad}`));

describe("oude routes", () => {
  it.each([
    ["/reserveren", "/verhuur/calculator"],
    ["/shop", "/machines"],
  ])("%s → %s, permanent", (pad, doel) => {
    expect(redirect(pad)).toEqual({ location: doel, status: 308 });
  });

  it("houdt de querystring vast", () => {
    expect(redirect("/reserveren?utm_source=x")?.location).toBe(
      "/verhuur/calculator?utm_source=x",
    );
  });

  it("laat de opvolgers zelf ongemoeid", () => {
    expect(redirect("/verhuur/afhalen")).toBeNull();
    expect(redirect("/verhuur/calculator")).toBeNull();
    expect(redirect("/machines")).toBeNull();
  });

  it("verwijst /afhalen niet door, daar staat sinds 11-2026 een eigen pagina", () => {
    expect(redirect("/afhalen")).toBeNull();
  });
});

/**
 * Drie oude pagina's die naast hun opvolger bleven bestaan, op noindex.
 *
 * Het menu en de footer linkten tot oktober 2026 nog naar de oude versie:
 * /afhalen kreeg 168 interne links, /verhuur/afhalen (de geïndexeerde) 11.
 * Elke sitebrede link ging zo naar een pagina die Google niet mocht opnemen.
 * Nu verwijzen ze permanent door en is de route uit de build gehaald — een
 * redirect in vercel.json bereikt de Worker alleen als er geen bestand op dat
 * pad staat.
 */
import { describe, expect, it } from "vitest";
import { matchRedirect } from "../../worker/vercelRouting";

const redirect = (pad: string) => matchRedirect(new URL(`https://vernast-bouwdrogers.be${pad}`));

describe("oude routes", () => {
  it.each([
    ["/afhalen", "/verhuur/afhalen"],
    ["/reserveren", "/verhuur/calculator"],
    ["/shop", "/machines"],
  ])("%s → %s, permanent", (pad, doel) => {
    expect(redirect(pad)).toEqual({ location: doel, status: 308 });
  });

  it("houdt de querystring vast", () => {
    expect(redirect("/afhalen?utm_source=x")?.location).toBe("/verhuur/afhalen?utm_source=x");
  });

  it("laat de opvolgers zelf ongemoeid", () => {
    expect(redirect("/verhuur/afhalen")).toBeNull();
    expect(redirect("/verhuur/calculator")).toBeNull();
    expect(redirect("/machines")).toBeNull();
  });
});

/**
 * Nederlands staat zonder prefix (zie `src/i18n/taal.ts`). Wie toch `/nl/…`
 * intikt of zo'n link van elders volgt, hoort permanent op de echte URL uit te
 * komen — anders bestaat dezelfde pagina onder twee adressen, of erger: een 404.
 */
import { describe, expect, it } from "vitest";
import { matchRedirect } from "../../worker/vercelRouting";

const redirect = (pad: string) => matchRedirect(new URL(`https://vernast-bouwdrogers.be${pad}`));

describe("/nl-voorvoegsel", () => {
  it.each([
    ["/nl", "/"],
    ["/nl/", "/"],
    ["/nl/chape-drogen", "/chape-drogen"],
    ["/nl/verhuur/toestel/bouwdroger-70-liter", "/verhuur/toestel/bouwdroger-70-liter"],
  ])("%s verwijst permanent door naar %s", (van, naar) => {
    const r = redirect(van);
    expect(r).not.toBeNull();
    expect(new URL(r!.location, "https://vernast-bouwdrogers.be").pathname).toBe(naar);
    expect(r!.status).toBe(308);
  });

  it("laat paden die toevallig met nl beginnen ongemoeid", () => {
    expect(redirect("/nlx")).toBeNull();
  });
});

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

/**
 * `www.vernast-vochtbestrijding.be` antwoordt met een 308 naar het kale domein
 * (gemeten 01-10-2026). Header, footer en het toestellenmenu linkten met www,
 * en die staan op elke pagina: 152 links in de geprerenderde HTML, elk een
 * extra hop voor de bezoeker en een omleiding voor de crawler. `SAME_AS` in
 * `src/lib/site.ts` stond al goed; dit houdt de rest erbij.
 */
const SRC = join(__dirname, "..");

function bronbestanden(dir: string): string[] {
  return readdirSync(dir).flatMap((naam) => {
    const pad = join(dir, naam);
    if (statSync(pad).isDirectory()) return naam === "test" ? [] : bronbestanden(pad);
    return /\.(tsx?|css)$/.test(naam) ? [pad] : [];
  });
}

describe("links naar de zustersites", () => {
  it("wijzen naar de vochtsite zonder www, de host die geen omleiding geeft", () => {
    const fout = bronbestanden(SRC).filter((pad) =>
      /href=["']https?:\/\/www\.vernast-vochtbestrijding\.be|["']https?:\/\/www\.vernast-vochtbestrijding\.be/.test(
        readFileSync(pad, "utf8"),
      ),
    );
    expect(fout).toEqual([]);
  });
});

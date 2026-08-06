/**
 * Haalt de latin- en latin-ext-subsets van de gebruikte variable fonts op en
 * schrijft ze naar public/fonts/, met een bijhorend @font-face-blok.
 */
import { writeFileSync } from "node:fs";

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const FAMILIES = [
  { css: "Inter:wght@400..900", family: "Inter", slug: "inter", range: "400 900" },
  { css: "DM+Sans:wght@400..800", family: "DM Sans", slug: "dm-sans", range: "400 800" },
  {
    css: "Plus+Jakarta+Sans:wght@400..800",
    family: "Plus Jakarta Sans",
    slug: "plus-jakarta-sans",
    range: "400 800",
  },
];

/** Alleen deze subsets; Google's eigen unicode-range regelt de rest. */
const WANTED = ["latin", "latin-ext"];

const blocks = [];

for (const f of FAMILIES) {
  const css = await fetch(`https://fonts.googleapis.com/css2?family=${f.css}&display=swap`, {
    headers: { "User-Agent": UA },
  }).then((r) => r.text());

  // Google zet boven elk @font-face een commentaar met de subsetnaam.
  for (const m of css.matchAll(
    /\/\*\s*([\w-]+)\s*\*\/\s*@font-face\s*\{([\s\S]*?)\}/g
  )) {
    const subset = m[1];
    if (!WANTED.includes(subset)) continue;

    const url = m[2].match(/url\((https:[^)]+\.woff2)\)/)?.[1];
    const unicodeRange = m[2].match(/unicode-range:\s*([^;]+);/)?.[1]?.trim();
    if (!url || !unicodeRange) continue;

    const file = `${f.slug}-${subset}.woff2`;
    const bytes = Buffer.from(await fetch(url).then((r) => r.arrayBuffer()));
    writeFileSync(`public/fonts/${file}`, bytes);
    console.log(`${file}  ${(bytes.length / 1024).toFixed(1)} kB`);

    blocks.push(
      [
        "@font-face {",
        `  font-family: '${f.family}';`,
        "  font-style: normal;",
        `  font-weight: ${f.range};`,
        "  font-display: swap;",
        `  src: url('/fonts/${file}') format('woff2');`,
        `  unicode-range: ${unicodeRange};`,
        "}",
      ].join("\n")
    );
  }
}

writeFileSync("src/styles/fonts.css", blocks.join("\n\n") + "\n");
console.log(`\n${blocks.length} @font-face-blokken → src/styles/fonts.css`);

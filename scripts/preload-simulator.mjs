/**
 * Laat de droogsimulator zijn 3D al met de HTML mee laden.
 *
 * De 3D-woning is een eigen chunk (three.js, ~220 kB brotli) die de pagina pas
 * opvraagt nadat haar eigen JavaScript binnen en opgestart is. Op 3G is dat
 * na ~2,5 s, en dan moest de chunk nog binnenkomen: het 3D-huis stond er pas na
 * ~6 s. Met een `modulepreload` in de HTML loopt de download mee vanaf de eerste
 * byte. `fetchpriority="low"` houdt hem achter de CSS, de pagina-JS en de fonts,
 * zodat de vragen niet trager klikbaar worden.
 *
 * Mee: het eerste straatbeeld (mini) van de woning waarmee de simulator opent
 * (halfopen, ± 140 m² → 8 m gevel). Dezelfde crossorigin als three.js'
 * TextureLoader, anders haalt de browser het beeld twee keer.
 *
 * Mee: de chunks die de paginachunk statisch importeert (verhuur, tarieven,
 * booking, seo, ...). De HTML preloadt alleen de paginachunk zelf; zijn imports
 * ontdekte de browser pas nadat die geladen en gekoppeld was, en haalde ze dan
 * één voor één. Op 3G werkte een tik op de vragen daardoor pas na ~9 s, terwijl
 * ze er na een halve seconde al stonden. Zonder `fetchpriority`: ze zijn nodig
 * voordat de pagina reageert.
 *
 * De chunknaam heeft een hash, dus dit kan alleen na de build.
 */
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/** Statische imports van een chunk (geen dynamische `import()`), recursief. */
function statischeImports(start) {
  const gezien = new Set();
  const stapel = [start];
  while (stapel.length) {
    const f = stapel.pop();
    if (gezien.has(f)) continue;
    gezien.add(f);
    const code = readFileSync(join(DIST, "assets", f), "utf8").replace(/import\(\s*"[^"]*"\s*\)/g, "");
    for (const [, dep] of code.matchAll(/(?:from|import)\s*"\.\/([\w.-]+\.js)"/g)) {
      if (existsSync(join(DIST, "assets", dep))) stapel.push(dep);
    }
  }
  return gezien;
}

const DIST = "dist";
const PAGINAS = [
  "verhuur/simulator.html", "fr/location/simulateur.html", "en/rental/simulator.html",
  "verhuur/waterschade-simulator.html", "fr/location/simulateur-degats-des-eaux.html", "en/rental/water-damage-simulator.html",
];
const STRAAT = ["/simulator/straat/halfopen-b80-achter-mini.webp", "/simulator/straat/halfopen-b80-voor-mini.webp"];

const chunk = readdirSync(join(DIST, "assets")).find((f) => /^IsoHouse3D-[\w-]+\.js$/.test(f));
if (!chunk) throw new Error("preload-simulator: geen IsoHouse3D-chunk in dist/assets");

const tags = [
  `<link rel="modulepreload" href="/assets/${chunk}" fetchpriority="low">`,
  ...STRAAT.map((href) => `<link rel="preload" as="image" href="${href}" crossorigin="anonymous" fetchpriority="low">`),
].join("");

for (const pagina of PAGINAS) {
  const pad = join(DIST, pagina);
  const html = readFileSync(pad, "utf8");
  if (html.includes(`/assets/${chunk}`)) continue;
  if (!html.includes("</head>")) throw new Error(`preload-simulator: geen </head> in ${pagina}`);
  // De paginachunks die de HTML al preloadt, en wat die statisch nodig hebben.
  const al = [...html.matchAll(/rel="modulepreload"[^>]*href="\/assets\/([\w.-]+\.js)"/g)].map((m) => m[1]);
  const nodig = new Set(al.flatMap((f) => [...statischeImports(f)]));
  const extra = [...nodig].filter((f) => f !== chunk && !html.includes(`/assets/${f}"`)).sort();
  const deps = extra.map((f) => `<link rel="modulepreload" crossorigin href="/assets/${f}">`).join("");
  writeFileSync(pad, html.replace("</head>", `${deps}${tags}</head>`));
  console.log(`preload-simulator: ${pagina} → ${chunk} + ${extra.length} paginachunks`);
}

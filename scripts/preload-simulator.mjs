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
 * De chunknaam heeft een hash, dus dit kan alleen na de build.
 */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DIST = "dist";
const PAGINAS = ["verhuur/simulator.html", "fr/location/simulateur.html", "en/rental/simulator.html"];
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
  writeFileSync(pad, html.replace("</head>", `${tags}</head>`));
  console.log(`preload-simulator: ${pagina} → ${chunk}`);
}

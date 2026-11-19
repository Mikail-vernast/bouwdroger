#!/usr/bin/env node
/**
 * Schrijft `src/data/plaatsen.ts`: elke plaatsnaam van België en Nederland met
 * haar postcode, zodat de bezoeker "Hemiksem" of "Namen" mag intypen in plaats
 * van een postcode die hij misschien niet paraat heeft.
 *
 * Waarom een eigen lijst en niet de leverzones zelf: `leverzones.ts` is
 * run-length gecodeerd op postcode en kent geen namen meer. De zone volgt nog
 * altijd uit de postcode (`zoneVoor`), deze lijst vertaalt alleen een naam
 * naar die postcode.
 *
 * Bron: dezelfde GeoNames-export als `fetch-leverzones.mjs` (CC BY 4.0). Daarin
 * staan Waalse en Brusselse plaatsen in het Frans — "Liège", "Ixelles". Een
 * Vlaming typt "Luik" en "Elsene", dus de Nederlandse exoniemen staan hieronder
 * met de hand, met de postcode van het centrum.
 *
 * Draait niet mee in de build: GeoNames verandert zelden, en een build mag niet
 * afhangen van een dienst die wij niet beheren.
 *
 *   node scripts/fetch-plaatsen.mjs
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const CACHE = join(tmpdir(), "vernast-leverzones");
const UIT = new URL("../src/data/plaatsen.ts", import.meta.url);
const UIT_NL = new URL("../src/data/werkgebied-nl.ts", import.meta.url);

/*
  De Nederlandse provincies waar we online boekbaar leveren — dezelfde drie als
  in de sitemap. Daarbuiten (Amsterdam, Utrecht, Gelderland...) is het transport
  op maat: de klant kan een prijs aanvragen, maar niet zelf boeken en betalen.
  Namen zoals GeoNames ze schrijft.
*/
const NL_WERKGEBIED = new Set(["North Brabant", "Zeeland", "Limburg"]);

/*
  Nederlandse namen voor plaatsen die GeoNames alleen in het Frans kent. Alleen
  plaatsen waar een Vlaming echt de Nederlandse naam voor gebruikt; "Charleroi"
  en "Dinant" heten in het Nederlands gewoon zo en staan er al in.
*/
const EXONIEMEN = [
  ["Brussel", "1000"],
  ["Laken", "1020"],
  ["Schaarbeek", "1030"],
  ["Elsene", "1050"],
  ["Sint-Gillis", "1060"],
  ["Sint-Jans-Molenbeek", "1080"],
  ["Molenbeek", "1080"],
  ["Sint-Agatha-Berchem", "1082"],
  ["Koekelberg", "1081"],
  ["Ganshoren", "1083"],
  ["Sint-Pieters-Woluwe", "1150"],
  ["Oudergem", "1160"],
  ["Watermaal-Bosvoorde", "1170"],
  ["Ukkel", "1180"],
  ["Vorst", "1190"],
  ["Sint-Lambrechts-Woluwe", "1200"],
  ["Sint-Joost-ten-Node", "1210"],
  ["Waver", "1300"],
  ["Ottignies-Louvain-la-Neuve", "1340"],
  ["Geldenaken", "1370"],
  ["Nijvel", "1400"],
  ["Eigenbrakel", "1420"],
  ["Itter", "1460"],
  ["Tubeke", "1480"],
  ["Luik", "4000"],
  ["Hoei", "4500"],
  ["Borgworm", "4300"],
  ["Limburg (Luik)", "4830"],
  ["Spa", "4900"],
  ["Namen", "5000"],
  ["Bastenaken", "6600"],
  ["Aarlen", "6700"],
  ["Bergen", "7000"],
  ["Zinnik", "7060"],
  ["Doornik", "7500"],
  ["Moeskroen", "7700"],
  ["Aat", "7800"],
  ["Edingen", "7850"],
  ["Lessen", "7860"],
  ["Komen", "7780"],
  ["Luingne", "7700"],
];

function geonames(land) {
  mkdirSync(CACHE, { recursive: true });
  const txt = join(CACHE, `${land}.txt`);
  if (!existsSync(txt)) {
    const zip = join(CACHE, `${land}.zip`);
    execFileSync("curl", ["-sSfL", "-o", zip, `https://download.geonames.org/export/zip/${land}.zip`]);
    execFileSync("unzip", ["-o", "-q", zip, "-d", CACHE]);
  }
  const paren = new Map();
  for (const regel of readFileSync(txt, "utf8").split("\n")) {
    const v = regel.split("\t");
    if (v.length < 3) continue;
    const pc = v[1].trim();
    const naam = v[2].trim();
    if (!/^\d{4}$/.test(pc) || !naam) continue;
    const sleutel = `${naam}\u0000${pc}`;
    if (!paren.has(sleutel)) paren.set(sleutel, [naam, pc]);
  }
  return [...paren.values()];
}

function sorteer(lijst) {
  return lijst.sort((a, b) => a[0].localeCompare(b[0], "nl") || a[1].localeCompare(b[1]));
}

const be = geonames("BE");
const bekend = new Set(be.map(([n, p]) => `${n}\u0000${p}`));
for (const [naam, pc] of EXONIEMEN) {
  if (!be.some(([, p]) => p === pc)) throw new Error(`Exoniem ${naam}: postcode ${pc} bestaat niet`);
  if (!bekend.has(`${naam}\u0000${pc}`)) be.push([naam, pc]);
}
const nl = geonames("NL");

const regels = (lijst) => sorteer(lijst).map(([n, p]) => `    [${JSON.stringify(n)}, "${p}"],`).join("\n");

writeFileSync(
  UIT,
  `/**
 * GEGENEREERD door \`scripts/fetch-plaatsen.mjs\` op ${new Date().toISOString().slice(0, 10)}. Niet met de
 * hand aanpassen — een Nederlandse naam voor een Waalse plaats hoort in
 * \`EXONIEMEN\` in dat script.
 *
 * Elke plaatsnaam met haar postcode, per land. Alleen om een ingetypte naam te
 * vertalen naar een postcode; de zone volgt daarna uit \`zoneVoor\`.
 *
 * Wordt pas geladen wanneer de bezoeker in het zoekveld begint te typen
 * (\`LeverplaatsZoeker\`), zodat de pakketpagina er niet op wacht.
 *
 * Bron: GeoNames postcodes (CC BY 4.0). ${be.length} Belgische en ${nl.length} Nederlandse plaatsen.
 */

/** \`[plaatsnaam, postcode]\` */
export type Plaats = readonly [string, string];

export const PLAATSEN: Record<"BE" | "NL", readonly Plaats[]> = {
  BE: [
${regels(be)}
  ],
  NL: [
${regels(nl)}
  ],
};
`,
);
console.log(`plaatsen.ts: ${be.length} BE, ${nl.length} NL`);

// Werkgebied in Nederland, run-length gecodeerd zoals LEVERZONES: elke regel
// geldt vanaf haar postcode tot de volgende.
const provincie = new Map();
for (const regel of readFileSync(join(CACHE, "NL.txt"), "utf8").split("\n")) {
  const v = regel.split("\t");
  if (v.length < 4 || !/^\d{4}$/.test(v[1])) continue;
  if (!provincie.has(v[1])) provincie.set(v[1], v[3]);
}
/*
  Eén losse postcode die van provincie wisselt tussen twee buren van de andere
  kant, is een fout in GeoNames, geen enclave: 1234 staat er als "Lemiers,
  Limburg" (Lemiers is 6295) en 5217 als "'s-Gravenhage" midden in Den Bosch.
  Zulke uitschieters nemen de kant van hun buren.
*/
const pcs = [...provincie.keys()].sort();
const binnen = pcs.map((pc) => NL_WERKGEBIED.has(provincie.get(pc)));
for (let i = 1; i < pcs.length - 1; i++) {
  if (binnen[i - 1] === binnen[i + 1] && binnen[i] !== binnen[i - 1]) binnen[i] = binnen[i - 1];
}
const runs = [];
pcs.forEach((pc, i) => {
  if (!runs.length || runs[runs.length - 1][1] !== binnen[i]) runs.push([pc, binnen[i]]);
});
writeFileSync(
  UIT_NL,
  `/**
 * GEGENEREERD door \`scripts/fetch-plaatsen.mjs\` op ${new Date().toISOString().slice(0, 10)}. Niet met de
 * hand aanpassen — de provincies staan in \`NL_WERKGEBIED\` in dat script.
 *
 * Welke Nederlandse postcodes in ons werkgebied liggen: Noord-Brabant, Zeeland
 * en Nederlands Limburg, de drie provincies uit de sitemap. Elke regel geldt
 * vanaf haar postcode tot de volgende. Daarbuiten is het transport op maat
 * (\`zoneVoor\` in \`src/lib/levering.ts\`).
 *
 * Bron: GeoNames postcodes (CC BY 4.0).
 */
export const NL_WERKGEBIED: readonly (readonly [string, boolean])[] = [
${runs.map(([p, b]) => `  ["${p}", ${b}],`).join("\n")}
];
`,
);
console.log(`werkgebied-nl.ts: ${runs.length} regels`);

/**
 * Schrijft `src/data/leverzones.ts`: welke zone elke Belgische en Nederlandse
 * postcode heeft, en in welke ritcorridor ze ligt.
 *
 * Draait NIET mee in `npm run build`. De build mag niet afhangen van twee
 * externe diensten die we niet beheren, en de zones veranderen alleen wanneer
 * het magazijn verhuist of de zonegrenzen wijzigen. Handmatig draaien:
 *
 *     node scripts/fetch-leverzones.mjs
 *
 * Twee bronnen:
 *
 * 1. **GeoNames** (`download.geonames.org/export/zip/`) voor de coördinaten per
 *    postcode. Een postcode met meerdere plaatsnamen krijgt het zwaartepunt van
 *    die plaatsen; dat is nauwkeurig genoeg voor een zonegrens van 20 km breed.
 * 2. **OSRM** (`router.project-osrm.org`) voor de echte wegafstand vanaf het
 *    magazijn. Eerder stond hier vogelvlucht × 1,25 — de factor die uit een
 *    controle van 45 bekende ritten kwam. Die faalt precies waar water de weg
 *    omlegt: Goes ligt 66 km in vogelvlucht en 97 km over de weg, en belandde
 *    daarmee twee zones te laag. Vandaar echte routes.
 *
 * De uitvoer is run-length gecodeerd: één regel per punt waar de zone of de
 * corridor verandert, en die geldt tot de volgende regel. Dat maakt van 5.233
 * postcodes ruim zeshonderd regels, en een postcode die GeoNames niet kent erft
 * de zone van de postcode vlak eronder — wat in een blokgewijs genummerd land
 * het juiste antwoord is.
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

/** Het magazijn, gelijk aan `CONTACT` in src/lib/site.ts. */
const MAGAZIJN = { lat: 51.13598, lon: 4.37512 };

/** Bovengrens van elke zone in wegkilometers; `null` = alles daarboven. */
const ZONEGRENZEN = [30, 50, 70, 90, 120, 200, 300, null];

/**
 * Vogelvlucht waarboven we de route niet meer opvragen.
 *
 * Ruim boven de laatste echte zonegrens (300 km over de weg): alles daarbuiten
 * valt sowieso in de offertezone, en dan is een exacte route overbodig. Stond
 * hier eerst 230 — toen kreeg een postcode op 260 km over de weg geen afstand
 * en viel hij een zone te hoog.
 */
const MAX_VOGELVLUCHT = 300;

const LANDEN = ["BE", "NL"];
const CACHE = join(tmpdir(), "vernast-leverzones");
const UIT = new URL("../src/data/leverzones.ts", import.meta.url);

const slaap = (ms) => new Promise((r) => setTimeout(r, ms));

function haversine(a, b) {
  const rad = (x) => (x * Math.PI) / 180;
  const h =
    Math.sin(rad(b.lat - a.lat) / 2) ** 2 +
    Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(rad(b.lon - a.lon) / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(h));
}

/** Peiling in graden, 0 = noord. */
function peiling(a, b) {
  const rad = (x) => (x * Math.PI) / 180;
  const y = Math.sin(rad(b.lon - a.lon)) * Math.cos(rad(b.lat));
  const x =
    Math.cos(rad(a.lat)) * Math.sin(rad(b.lat)) -
    Math.sin(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.cos(rad(b.lon - a.lon));
  return ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360;
}

/**
 * De vier snelwegcorridors, niet de windstreken: 0 = noord (A12/E19 naar
 * Breda), 1 = oost (E313/E314 naar Limburg), 2 = zuid (E19/E411 naar Wallonië),
 * 3 = west (E17/N49 naar Gent en de kust). Eén rit blijft binnen één corridor;
 * dat is wat bundelen mogelijk maakt.
 */
function corridor(graden) {
  if (graden >= 305 || graden < 60) return 0;
  if (graden < 130) return 1;
  if (graden < 225) return 2;
  return 3;
}

function zoneVoorKm(km) {
  if (km === null) return ZONEGRENZEN.length;
  for (let i = 0; i < ZONEGRENZEN.length; i++) {
    const grens = ZONEGRENZEN[i];
    if (grens === null || km <= grens) return i + 1;
  }
  return ZONEGRENZEN.length;
}

/** Haalt BE.zip/NL.zip op en pakt het tekstbestand uit, met cache. */
function geonames(land) {
  mkdirSync(CACHE, { recursive: true });
  const txt = join(CACHE, `${land}.txt`);
  if (!existsSync(txt)) {
    const zip = join(CACHE, `${land}.zip`);
    execFileSync("curl", ["-sSfL", "-o", zip, `https://download.geonames.org/export/zip/${land}.zip`]);
    execFileSync("unzip", ["-o", "-q", zip, "-d", CACHE]);
  }
  // Eén postcode kan meerdere regels hebben (deelgemeenten); we houden het
  // zwaartepunt bij in plaats van de eerste regel, anders hangt de zone van een
  // uitgestrekte postcode af van de alfabetische volgorde van haar dorpen.
  const per = new Map();
  for (const regel of readFileSync(txt, "utf8").split("\n")) {
    const v = regel.split("\t");
    if (v.length < 11) continue;
    const pc = v[1].trim();
    if (!/^\d{4}$/.test(pc)) continue;
    const lat = parseFloat(v[9]);
    const lon = parseFloat(v[10]);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) continue;
    const b = per.get(pc);
    if (!b) per.set(pc, { pc, land, plaats: v[2], provincie: land === "BE" ? v[5] || v[3] : v[3], lat, lon, n: 1 });
    else {
      b.lat = (b.lat * b.n + lat) / (b.n + 1);
      b.lon = (b.lon * b.n + lon) / (b.n + 1);
      b.n += 1;
    }
  }
  return [...per.values()].sort((a, b) => a.pc.localeCompare(b.pc));
}

/**
 * Wegafstand in kilometers van het magazijn naar elk punt, via OSRM.
 *
 * Met cache op schijf: zonder dat vroeg elke herhaling vijfduizend routes
 * opnieuw op aan een gratis demoserver, voor afstanden die alleen veranderen
 * als het magazijn verhuist.
 */
async function wegafstanden(punten) {
  const uit = new Map();
  const cacheBestand = join(CACHE, "routes.json");
  if (existsSync(cacheBestand)) {
    for (const [k, v] of Object.entries(JSON.parse(readFileSync(cacheBestand, "utf8")))) {
      uit.set(k, v);
    }
  }
  const ontbreekt = punten.filter((p) => !uit.has(p.land + p.pc));
  if (ontbreekt.length === 0) {
    console.log(`  alle ${punten.length} routes uit cache`);
    return uit;
  }
  punten = ontbreekt;
  const GROEP = 90; // de demoserver aanvaardt ±100 coördinaten per aanvraag
  for (let i = 0; i < punten.length; i += GROEP) {
    const groep = punten.slice(i, i + GROEP);
    const coords = [[MAGAZIJN.lon, MAGAZIJN.lat], ...groep.map((g) => [g.lon, g.lat])]
      .map((c) => c.join(","))
      .join(";");
    const url = `https://router.project-osrm.org/table/v1/driving/${coords}?sources=0&annotations=distance`;
    let gelukt = false;
    for (let poging = 0; poging < 3 && !gelukt; poging++) {
      try {
        const r = await fetch(url);
        if (!r.ok) {
          await slaap(1500);
          continue;
        }
        const j = await r.json();
        if (j.code !== "Ok") {
          await slaap(1500);
          continue;
        }
        groep.forEach((g, k) => {
          const m = j.distances[0][k + 1];
          if (m !== null && m !== undefined) uit.set(g.land + g.pc, Math.round(m / 1000));
        });
        gelukt = true;
      } catch {
        await slaap(2000);
      }
    }
    if (!gelukt) throw new Error(`OSRM gaf geen antwoord voor groep ${i}; niets weggeschreven`);
    process.stdout.write(`\r  routes ${Math.min(i + GROEP, punten.length)}/${punten.length}`);
    await slaap(260);
  }
  process.stdout.write("\n");
  writeFileSync(join(CACHE, "routes.json"), JSON.stringify(Object.fromEntries(uit)));
  return uit;
}

/**
 * De provincienamen van GeoNames naar de regio's waar deze site pagina's voor
 * heeft. Belgische provincies staan in het admin2-veld (en in twee talen),
 * Nederlandse in admin1. Alles wat hier niet in staat — Zuid-Holland,
 * Groningen — heeft geen regiopagina en hoeft dus geen samenvatting.
 */
const REGIO_VAN_PROVINCIE = {
  "Provincie Antwerpen": "antwerpen",
  Antwerpen: "antwerpen",
  Anvers: "antwerpen",
  "Provincie Oost-Vlaanderen": "oost-vlaanderen",
  "Flandre-Orientale": "oost-vlaanderen",
  "Oost-Vlaanderen": "oost-vlaanderen",
  "Provincie West-Vlaanderen": "west-vlaanderen",
  "Flandre-Occidentale": "west-vlaanderen",
  "West-Vlaanderen": "west-vlaanderen",
  "Provincie Vlaams-Brabant": "vlaams-brabant",
  "Brabant Flamand": "vlaams-brabant",
  "Vlaams-Brabant": "vlaams-brabant",
  "Provincie Limburg": "limburg",
  Limbourg: "limburg",
  Limburg: "limburg",
  "Bruxelles-Capitale": "brussel",
  "Brussel-Hoofdstad": "brussel",
  "Province du Hainaut": "henegouwen",
  Hainaut: "henegouwen",
  "Province de Namur": "namen",
  Namur: "namen",
  "Province de Liège": "luik",
  "Liège": "luik",
  Luik: "luik",
  "Province du Luxembourg": "luxemburg",
  Luxembourg: "luxemburg",
  "Province du Brabant Wallon": "waals-brabant",
  "Brabant Wallon": "waals-brabant",
};

/** Nederlandse provincies liggen in admin1 en heten daar in het Engels. */
const REGIO_VAN_NL_PROVINCIE = {
  "North Brabant": "noord-brabant",
  Zeeland: "zeeland",
  Limburg: "nederlands-limburg",
};

const alles = {};
const regios = {};
for (const land of LANDEN) {
  console.log(`${land}: postcodes ophalen`);
  const punten = geonames(land);
  const dichtbij = punten.filter(
    (p) => haversine(MAGAZIJN, p) <= MAX_VOGELVLUCHT
  );
  console.log(`  ${punten.length} postcodes, ${dichtbij.length} binnen ${MAX_VOGELVLUCHT} km vogelvlucht`);
  const km = await wegafstanden(dichtbij);

  const runs = [];
  let vorige = "";
  let telling = 0;
  for (const p of punten) {
    const afstand = km.get(p.land + p.pc) ?? null;
    const zone = zoneVoorKm(afstand);
    const corr = corridor(peiling(MAGAZIJN, p));
    const sleutel = `${zone}:${corr}`;
    if (sleutel !== vorige) {
      runs.push([p.pc, zone, corr]);
      vorige = sleutel;
    }
    telling += 1;

    /*
      Meteen ook de samenvatting per regiopagina. Die pagina's beloofden
      "levering binnen 24 uur" op grond van een handmatig vlaggetje, terwijl
      Brugge en Hasselt al in een betalende zone liggen. Nu komt die tekst uit
      dezelfde meting als het tarief in de boeking.
    */
    const slug =
      land === "BE" ? REGIO_VAN_PROVINCIE[p.provincie] : REGIO_VAN_NL_PROVINCIE[p.provincie];
    if (slug && afstand !== null) {
      const r = (regios[slug] ??= { min: Infinity, max: 0, zones: new Set(), corridors: {} });
      r.min = Math.min(r.min, afstand);
      r.max = Math.max(r.max, afstand);
      r.zones.add(zone);
      r.corridors[corr] = (r.corridors[corr] ?? 0) + 1;
    }
  }
  alles[land] = { runs, postcodes: telling };
  console.log(`  ${runs.length} regels voor ${telling} postcodes`);
}

const vandaag = new Date().toISOString().slice(0, 10);

const regioRegels = Object.entries(regios)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([slug, r]) => {
    const zones = [...r.zones].sort((a, b) => a - b);
    const hoofdCorridor = Number(
      Object.entries(r.corridors).sort((a, b) => b[1] - a[1])[0][0]
    );
    return `  "${slug}": { minKm: ${r.min}, maxKm: ${r.max}, zones: [${zones.join(", ")}], corridor: ${hoofdCorridor} },`;
  })
  .join("\n");
const regels = (land) =>
  alles[land].runs.map(([pc, z, c]) => `    ["${pc}", ${z}, ${c}],`).join("\n");

writeFileSync(
  UIT,
  `/**
 * GEGENEREERD door \`scripts/fetch-leverzones.mjs\` op ${vandaag}. Niet met de
 * hand aanpassen — een postcode die hier fout staat, rekent de klant een fout
 * transporttarief aan.
 *
 * Per land een lijst \`[postcode, zone, corridor]\`, gesorteerd op postcode. Elke
 * regel geldt vanaf die postcode tot de volgende regel. Een postcode die er niet
 * letterlijk in staat, erft dus de zone van de postcode vlak eronder — precies
 * wat je wil in een land waar postcodes per streek genummerd zijn.
 *
 * De zone volgt de **echte wegafstand** vanaf het magazijn (OSRM), niet de
 * vogelvlucht. De corridor volgt de peiling en bepaalt op welke dag we die
 * richting rijden; zie \`RITDAGEN\` in \`levering.ts\`.
 *
 * Bron: GeoNames postcodes (CC BY 4.0) + OSRM routering.
 * ${alles.BE.postcodes} Belgische en ${alles.NL.postcodes} Nederlandse postcodes.
 */

/** \`[postcode, zonenummer, corridornummer]\` */
export type ZoneRun = readonly [string, number, number];

export const LEVERZONES: Record<"BE" | "NL", readonly ZoneRun[]> = {
  BE: [
${regels("BE")}
  ],
  NL: [
${regels("NL")}
  ],
};

export const LEVERZONES_GEGENEREERD = "${vandaag}";

/**
 * Samenvatting per regiopagina: de dichtstbijzijnde en verste postcode van die
 * regio, welke zones er in liggen, en de corridor waar de meeste postcodes in
 * vallen.
 *
 * Hangt aan de regiopagina's (\`src/data/regios.ts\`), zodat de leveringstekst
 * daar uit dezelfde meting komt als het tarief in de boeking. Daarvoor stond
 * er een handmatig vlaggetje \`opAanvraag\`, en beloofden Brugge en Hasselt
 * levering binnen 24 uur terwijl er een transportvergoeding geldt.
 */
export interface Leverregio {
  minKm: number;
  maxKm: number;
  /** Oplopend; de eerste is de goedkoopste zone in die regio. */
  zones: number[];
  corridor: number;
}

export const LEVERREGIOS: Record<string, Leverregio> = {
${regioRegels}
};
`
);
console.log(`\nsrc/data/leverzones.ts geschreven (${alles.BE.runs.length + alles.NL.runs.length} regels)`);

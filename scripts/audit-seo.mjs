/**
 * Controleert de geprerenderde output op de dingen waar zoekmachines en
 * AI-antwoordmachines op afgaan. Draait tegen dist/, dus tegen wat er
 * werkelijk uitgeleverd wordt — niet tegen de broncode.
 *
 * Gebruik: npm run build && node scripts/audit-seo.mjs
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const DIST = "dist";
/** Aantal zichtbare tekens waaronder een pagina te dun is om te citeren. */
const MIN_TEXT = 300;

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) return htmlFiles(full);
    return name.endsWith(".html") ? [full] : [];
  });
}

function tag(html, re) {
  const m = html.match(re);
  return m ? m[1].trim() : null;
}

/** Zichtbare tekst: markup en scripts eruit, dan pas tellen. */
function visibleText(html) {
  const body = html.split(/<body[^>]*>/)[1] ?? "";
  return body
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Tekst die op een afgewerkte pagina niet hoort te staan.
 *
 * "€ XX" stond maandenlang op vier indexeerbare pagina's, waaronder /prijzen —
 * de pagina die in haar titel "Alle prijzen" belooft. Zo'n placeholder is niet
 * alleen leeg: hij maakt van de best gerichte pagina van de site een dood
 * zoekresultaat, en een AI-assistent citeert hem letterlijk. Daarom een harde
 * controle, geen aandachtspunt.
 */
const PLACEHOLDERS = [
  { re: /€\s*XX/i, why: "prijs-placeholder '€ XX'" },
  { re: /\bLorem ipsum\b/i, why: "lorem ipsum" },
  { re: /\bTODO\b/, why: "TODO in de zichtbare tekst" },
  { re: /\bFoto [A-Za-z0-9]+\b/, why: "placeholder voor een afbeelding" },
];

const rows = [];
const problems = [];
const titles = new Map();
const descriptions = new Map();

for (const file of htmlFiles(DIST)) {
  const html = readFileSync(file, "utf8");
  const route = "/" + relative(DIST, file).split(sep).join("/").replace(/\.html$/, "").replace(/^index$/, "");

  const title = tag(html, /<title[^>]*>([^<]*)<\/title>/i);
  const description = tag(html, /<meta[^>]+name="description"[^>]+content="([^"]*)"/i);
  const canonical = tag(html, /<link[^>]+rel="canonical"[^>]+href="([^"]*)"/i);
  const robots = tag(html, /<meta[^>]+name="robots"[^>]+content="([^"]*)"/i) ?? "";
  const h1 = (html.match(/<h1[\s>]/gi) || []).length;
  /* Kopniveaus in leesvolgorde — een sprong (h2 → h4) betekent dat er een
     tussenlaag ontbreekt, en dan valt de structuur van de pagina weg voor
     zowel een crawler als een schermlezer. */
  const levels = [...html.matchAll(/<h([1-6])[\s>]/gi)].map((m) => Number(m[1]));
  const jsonLd = (html.match(/application\/ld\+json/gi) || []).length;
  const titleCount = (html.match(/<title[\s>]/gi) || []).length;
  const visible = visibleText(html);
  const text = visible.length;
  const noindex = robots.includes("noindex");

  /* JSON-LD: parseerbaar, en welke types de pagina aanbiedt. */
  const ldBlocks = [...html.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)];
  const ldTypes = [];
  let ldBroken = false;
  for (const block of ldBlocks) {
    try {
      const parsed = JSON.parse(block[1]);
      for (const node of Array.isArray(parsed) ? parsed : [parsed]) {
        if (node?.["@type"]) ldTypes.push(node["@type"]);
      }
    } catch {
      ldBroken = true;
    }
  }

  rows.push({ route, title, description, canonical, h1, jsonLd, text, noindex });

  const fail = (msg) => problems.push(`${route}: ${msg}`);

  if (!title) fail("geen <title>");
  if (titleCount > 1) fail(`${titleCount} <title>-tags`);
  if (title && (title.length < 25 || title.length > 65)) {
    fail(`titel is ${title.length} tekens (streef 50–60): "${title}"`);
  }
  if (!description) fail("geen meta description");
  // Lengte telt alleen op pagina's die in een zoekresultaat kunnen belanden;
  // op een bevestigings- of checkoutpagina leest niemand die tekst ooit.
  if (description && !noindex && (description.length < 90 || description.length > 175)) {
    fail(`description is ${description.length} tekens (streef 120–160)`);
  }
  if (!canonical) fail("geen canonical");
  if (h1 === 0 && !noindex) fail("geen <h1>");
  if (h1 > 1) fail(`${h1} <h1>-tags`);
  if (text < MIN_TEXT && !noindex) fail(`slechts ${text} tekens zichtbare tekst`);

  for (const { re, why } of PLACEHOLDERS) {
    if (re.test(visible)) fail(`${why} staat in de zichtbare tekst`);
  }

  // Zoals de andere structuurcontroles alleen op pagina's die in een
  // zoekresultaat kunnen belanden. De ECO-catalogus (/shop, /product/*) staat
  // bewust op noindex en wordt hier dus niet op afgerekend.
  for (let i = 1; !noindex && i < levels.length; i++) {
    if (levels[i] > levels[i - 1] + 1) {
      fail(`kopniveau springt van h${levels[i - 1]} naar h${levels[i]}`);
      break;
    }
  }

  if (ldBroken) fail("JSON-LD laat zich niet parsen");
  if (!ldTypes.length && !noindex) fail("geen JSON-LD");
  // Een kruimelpad vertelt de crawler waar de pagina in de site hangt. De
  // homepage is zelf de wortel en heeft er dus geen.
  if (!noindex && route !== "/" && !ldTypes.includes("BreadcrumbList")) {
    fail("geen BreadcrumbList");
  }

  if (title && !noindex) {
    titles.set(title, [...(titles.get(title) ?? []), route]);
  }
  if (description && !noindex) {
    descriptions.set(description, [...(descriptions.get(description) ?? []), route]);
  }
}

for (const [title, routes] of titles) {
  if (routes.length > 1) problems.push(`dubbele titel op ${routes.length} pagina's: "${title}" → ${routes.join(", ")}`);
}

for (const [, routes] of descriptions) {
  if (routes.length > 1) {
    problems.push(`dezelfde description op ${routes.length} pagina's: ${routes.join(", ")}`);
  }
}

const indexable = rows.filter((r) => !r.noindex);
console.log(`\nGecontroleerd: ${rows.length} pagina's (${indexable.length} indexeerbaar)`);
console.log(`Met JSON-LD:   ${rows.filter((r) => r.jsonLd > 0).length}`);
console.log(`Met canonical: ${rows.filter((r) => r.canonical).length}`);
console.log(
  `Zichtbare tekst: min ${Math.min(...indexable.map((r) => r.text))}, mediaan ${
    indexable.map((r) => r.text).sort((a, b) => a - b)[Math.floor(indexable.length / 2)]
  } tekens`
);

if (problems.length) {
  console.log(`\n${problems.length} punt(en):`);
  for (const p of problems) console.log("  •", p);
  process.exitCode = 1;
} else {
  console.log("\nGeen problemen gevonden.");
}

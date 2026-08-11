/**
 * Controleert de geprerenderde output op de dingen waar zoekmachines en
 * AI-antwoordmachines op afgaan. Draait tegen dist/, dus tegen wat er
 * werkelijk uitgeleverd wordt — niet tegen de broncode.
 *
 * Gebruik: npm run build && node scripts/audit-seo.mjs
 *
 * Met `--live` wordt bovendien nagegaan of het domein in de canonicals
 * werkelijk deze site uitlevert. Dat kost een handvol requests en hoort dus
 * niet in elke build, maar het is de enige controle die de ergste faalmodus
 * vangt: canonicals die naar een domein wijzen dat iets anders serveert.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const DIST = "dist";
/** Aantal zichtbare tekens waaronder een pagina te dun is om te citeren. */
const MIN_TEXT = 300;
const LIVE = process.argv.includes("--live");

/**
 * Landingspagina's waar een bezoeker met een concrete vraag binnenkomt.
 *
 * Voor een AI-antwoordmachine is een pagina zonder vraag-antwoordparen bijna
 * niets waard: die citeert liever een expliciete vraag met een expliciet
 * antwoord dan lopende verkooptekst. /waterschade stond hier maandenlang
 * zonder, terwijl het de meest urgente zoekopdracht van de site is.
 */
const FAQ_EXPECTED = ["/nieuwbouw", "/waterschade", "/renovatie", "/prijzen", "/calculator"];

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
/** Alle JSON-LD-knopen van de hele site, voor controles die pagina's kruisen. */
const ldNodes = [];

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
        if (node?.["@type"]) {
          ldTypes.push(node["@type"]);
          ldNodes.push({ route, node });
        }
      }
    } catch {
      ldBroken = true;
    }
  }

  /* Afbeeldingen zonder afmetingen reserveren geen plek, dus verspringt de
     pagina zodra ze binnenkomen. Eén los geval is ruis; een pagina die er
     tien heeft, verschuift zichtbaar onder de vinger van de bezoeker. */
  const imgs = [...(html.split(/<body[^>]*>/)[1] ?? "").matchAll(/<img\b[^>]*>/gi)].map((m) => m[0]);
  const unsized = imgs.filter((t) => !/\bwidth=/.test(t) || !/\bheight=/.test(t)).length;

  rows.push({ route, title, description, canonical, h1, jsonLd, text, noindex, imgs: imgs.length, unsized });

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
  if (FAQ_EXPECTED.includes(route) && !ldTypes.includes("FAQPage")) {
    fail("landingspagina zonder FAQPage — niets voor een assistent om te citeren");
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

/**
 * `priceRange` tegen de werkelijke tarieven.
 *
 * Stond als vaste tekst "€9–€34 per dag" in de schema terwijl het gamma van
 * € 8 tot € 25 liep — op dezelfde homepage waar de lopende tekst al "vanaf
 * € 8" zei. Dat is precies het soort tegenspraak waar een AI-antwoord op
 * struikelt, en niets in de build merkte het op: beide getallen waren op
 * zichzelf geldig.
 */
const catalogPrices = ldNodes
  .filter(({ node }) => node["@type"] === "OfferCatalog")
  .flatMap(({ node }) => (node.itemListElement ?? []).map((o) => Number(o.price)))
  .filter((n) => Number.isFinite(n));

if (catalogPrices.length) {
  const min = Math.min(...catalogPrices);
  const max = Math.max(...catalogPrices);
  for (const { route, node } of ldNodes) {
    if (!node.priceRange) continue;
    const [lo, hi] = [...String(node.priceRange).matchAll(/(\d+(?:[.,]\d+)?)/g)].map((m) =>
      Number(m[1].replace(",", "."))
    );
    if (lo !== min || hi !== max) {
      problems.push(
        `${route}: priceRange "${node.priceRange}" botst met de tarieflijst (€${min}–€${max} per dag)`
      );
    }
  }
}

/**
 * De canonicals moeten naar een domein wijzen dat déze site uitlevert.
 *
 * `VITE_SITE_URL` kan al op het toekomstige domein staan terwijl dat domein
 * nog ergens anders naartoe wijst. Dan verklaart elke pagina zichzelf tot
 * kopie van een URL die niet bestaat, en verdwijnt de hele site uit de index
 * zonder dat er ook maar iets rood kleurt.
 */
if (LIVE) {
  const sample = rows.filter((r) => !r.noindex && r.canonical).slice(0, 6);
  for (const { route, canonical } of sample) {
    try {
      const res = await fetch(canonical, { redirect: "follow" });
      if (!res.ok) problems.push(`${route}: canonical ${canonical} geeft HTTP ${res.status}`);
    } catch (err) {
      problems.push(`${route}: canonical ${canonical} is niet bereikbaar (${err.message})`);
    }
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

/**
 * Afbeeldingen zonder afmetingen: geteld, niet afgekeurd.
 *
 * Gemeten op de echte site blijft CLS ruim onder de drempel — het beeld dat
 * de indruk bepaalt heeft wél `width`/`height` en `fetchpriority`. Hier hard
 * op falen zou de gate op veertig pagina's laten afgaan, en een gate die
 * altijd rood staat leest niemand nog. Als het cijfer stijgt, is dit de plek
 * waar dat zichtbaar wordt.
 */
const unsizedTotal = indexable.reduce((n, r) => n + r.unsized, 0);
const imgTotal = indexable.reduce((n, r) => n + r.imgs, 0);
console.log(`Afbeeldingen:  ${unsizedTotal} van ${imgTotal} zonder width/height (aandachtspunt, geen fout)`);

if (problems.length) {
  console.log(`\n${problems.length} punt(en):`);
  for (const p of problems) console.log("  •", p);
  process.exitCode = 1;
} else {
  console.log("\nGeen problemen gevonden.");
}

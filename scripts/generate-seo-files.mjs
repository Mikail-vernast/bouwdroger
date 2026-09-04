/**
 * Schrijft sitemap.xml en robots.txt na de build.
 *
 * De sitemap wordt niet met de hand bijgehouden maar afgeleid uit wat er
 * werkelijk geprerenderd is: elk HTML-bestand in dist/ is een echte pagina.
 * Pagina's die zichzelf op `noindex` zetten (bevestigingen, checkout-stappen,
 * 404) vallen er automatisch uit. Zo kan de sitemap niet uit de pas lopen met
 * de site.
 */
import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const DIST = "dist";
const SITE_URL = (process.env.VITE_SITE_URL || "https://vernast-bouwdrogers.be").replace(/\/$/, "");

/** Hoe vaak een sectie verandert, en hoe zwaar ze weegt binnen de site. */
const PRIORITY = [
  { test: (p) => p === "/", priority: "1.0", changefreq: "weekly" },
  {
    test: (p) => ["/nieuwbouw", "/waterschade", "/renovatie", "/prijzen", "/machines"].includes(p),
    priority: "0.9",
    changefreq: "monthly",
  },
  { test: (p) => p.startsWith("/verhuur/"), priority: "0.8", changefreq: "monthly" },
  { test: (p) => p.startsWith("/product/"), priority: "0.7", changefreq: "monthly" },
  { test: (p) => p.startsWith("/levering/pakket/"), priority: "0.6", changefreq: "monthly" },
];

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) return htmlFiles(full);
    return name.endsWith(".html") ? [full] : [];
  });
}

/** dist/verhuur/pakket.html → /verhuur/pakket, dist/index.html → / */
function toRoute(file) {
  const rel = relative(DIST, file).split(sep).join("/");
  const withoutExt = rel.replace(/\.html$/, "");
  if (withoutExt === "index") return "/";
  return `/${withoutExt.replace(/\/index$/, "")}`;
}

function isIndexable(file) {
  const html = readFileSync(file, "utf8");
  return !/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html);
}

/**
 * `<meta charset>` vooraan in de head zetten.
 *
 * vite-react-ssg schrijft titel, description en JSON-LD bovenaan de head, vóór
 * de markup uit index.html. Daardoor zakt de charset-declaratie naar ~6,5 kB —
 * ver voorbij de eerste 1024 bytes waarbinnen een browser ze moet vinden. Wie
 * ze daar niet vindt, gokt de encoding en herstart het parsen zodra de echte
 * declaratie alsnog opduikt. Verplaatsen kan alleen na de build, want tijdens
 * de render bepaalt vite-react-ssg de volgorde.
 */
const CHARSET_TAG = '<meta charset="UTF-8">';

function hoistCharset(file) {
  const html = readFileSync(file, "utf8");
  const stripped = html.replace(/\s*<meta[^>]+charset=[^>]*>/i, "");
  writeFileSync(file, stripped.replace(/<head([^>]*)>/i, `<head$1>${CHARSET_TAG}`));
}

const htmlPages = htmlFiles(DIST);
htmlPages.forEach(hoistCharset);

const routes = htmlPages
  .filter(isIndexable)
  .map(toRoute)
  // De catch-all van de router levert een 404-pagina op; die hoort er niet in.
  .filter((route) => !route.includes("*") && route !== "/404")
  .sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)));

const today = new Date().toISOString().slice(0, 10);

/**
 * `lastmod` uit de git-historie in plaats van de builddatum.
 *
 * Stond hier eerder voor élke URL de dag van de build. Dat betekent dat de
 * hele sitemap bij elke deploy beweert dat alle 21 pagina's veranderd zijn —
 * ook de contactpagina die al maanden stilstaat. Google leert daaruit dat het
 * veld niets zegt en negeert het, precies op het moment dat je het nodig hebt
 * omdat er écht iets is aangepast.
 *
 * De datum komt van de laatste commit die het bronbestand van de route raakte.
 * Onbekend of buiten git? Dan valt hij terug op vandaag.
 */
const ROUTE_SOURCES = {
  "/": "src/pages/Index.tsx",
  "/afhalen": "src/pages/AfhalenPage.tsx",
  "/calculator": "src/pages/CalculatorPage.tsx",
  "/contact": "src/pages/ContactPage.tsx",
  "/drooggarantie": "src/pages/DrooggarantiePage.tsx",
  "/hoe-drogen-werkt": "src/pages/HoeDrogenWerktPage.tsx",
  "/klantservice": "src/pages/KlantservicePage.tsx",
  "/levering": "src/pages/LeveringPage.tsx",
  "/machines": "src/pages/MachinesPage.tsx",
  "/nieuwbouw": "src/pages/NieuwbouwPage.tsx",
  "/over-ons": "src/pages/OverOnsPage.tsx",
  "/prijzen": "src/pages/PrijzenPage.tsx",
  "/realisaties": "src/pages/RealisatiesPage.tsx",
  "/renovatie": "src/pages/RenovatiePage.tsx",
  "/reserveren": "src/pages/ReserverenPage.tsx",
  "/waterschade": "src/pages/WaterschadePage.tsx",
  "/waarom-bouwdroging": "src/pages/WaaromBouwdrogingPage.tsx",
  "/verhuur/afhalen": "src/pages/verhuur/VerhuurAfhalenPage.tsx",
  "/verhuur/calculator": "src/pages/verhuur/VerhuurCalculatorPage.tsx",
  "/verhuur/pakket": "src/pages/verhuur/VerhuurPakketPage.tsx",
};

/** Toestelpagina's komen alle vijf uit hetzelfde sjabloon en dezelfde data. */
const TOESTEL_SOURCES = ["src/pages/verhuur/VerhuurToestelPage.tsx", "src/data/verhuur.ts"];
/** Realisatiepagina's ook: één sjabloon, één datalijst. */
const REALISATIE_SOURCES = ["src/pages/RealisatieDetailPage.tsx", "src/data/realisaties.ts"];

/**
 * Routes zonder bekende bron krijgen `vandaag` — en dat is precies wat we niet
 * willen, want dan claimt de sitemap elke deploy een wijziging én pingt
 * indexnow-ping.mjs die URL's elke keer opnieuw. Op 03-09-2026 waren dat er
 * stil 26 van de 50. Daarom wordt elke onbekende route nu luid gemeld.
 */
const unmappedRoutes = new Set();

function lastCommitDate(paths) {
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cs", "--", ...paths], {
      encoding: "utf8",
    }).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : today;
  } catch {
    return today;
  }
}

function lastmodFor(route) {
  if (route.startsWith("/verhuur/toestel/")) return lastCommitDate(TOESTEL_SOURCES);
  if (route.startsWith("/realisaties/")) return lastCommitDate(REALISATIE_SOURCES);
  const source = ROUTE_SOURCES[route];
  if (source) return lastCommitDate([source]);
  unmappedRoutes.add(route);
  return today;
}

const urls = routes
  .map((route) => {
    const rule = PRIORITY.find((r) => r.test(route));
    return [
      "  <url>",
      `    <loc>${SITE_URL}${route === "/" ? "/" : route}</loc>`,
      `    <lastmod>${lastmodFor(route)}</lastmod>`,
      `    <changefreq>${rule?.changefreq ?? "yearly"}</changefreq>`,
      `    <priority>${rule?.priority ?? "0.5"}</priority>`,
      "  </url>",
    ].join("\n");
  })
  .join("\n");

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  urls,
  "</urlset>",
  "",
].join("\n");

writeFileSync(join(DIST, "sitemap.xml"), sitemap);

/**
 * `dateModified` per pagina, uit dezelfde git-datum als de `lastmod` hierboven.
 *
 * De sitemap vertelde wanneer een pagina voor het laatst veranderde, de pagina
 * zelf niet. Voor een AI-antwoordmachine is dat het verschil tussen een prijs
 * citeren en durven zeggen van wanneer die prijs is: zonder datum is elke
 * bewering even oud. Klassieke zoekmachines doen er voor een dienstpagina
 * weinig mee, antwoordmachines wel.
 *
 * Het gebeurt hier en niet in `<PageMeta>` omdat de datum uit de git-historie
 * komt, en die is er tijdens het renderen niet. Dezelfde reden waarom de
 * charset hierboven pas na de build op zijn plaats gezet wordt.
 */
function injectDateModified(file, route) {
  const html = readFileSync(file, "utf8");
  /*
    Niet `<link rel="canonical"`: vite-react-ssg zet er een `data-rh="true"`
    tussen, zodat die vorm nergens matchte en het hele blok stil oversloeg.
  */
  const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/i)?.[1];
  if (!canonical) return false;
  /*
    Bewust zonder `isPartOf` en `publisher`. Die zouden met een `@id` naar de
    WebSite en de organisatie wijzen, en die knopen staan niet op elke pagina —
    dan verwijst dit blok naar iets dat er niet is, precies het probleem dat
    `withOrganization()` in src/lib/schema.ts oplost. Een WebPage met een datum
    is op zichzelf compleet.
  */
  const node = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": canonical,
    url: canonical,
    inLanguage: "nl-BE",
    dateModified: lastmodFor(route),
  };
  const tag = `<script type="application/ld+json">${JSON.stringify(node)}</script>`;
  writeFileSync(file, html.replace("</head>", `${tag}</head>`));
  return true;
}

/*
  Alleen op wat geïndexeerd wordt. Een bevestigingspagina een wijzigingsdatum
  geven zegt niets — die pagina hoort sowieso nergens in een antwoord.
*/
let dated = 0;
for (const file of htmlPages.filter(isIndexable)) {
  const route = toRoute(file);
  if (route.includes("*") || route === "/404") continue;
  // Tel wat er écht geschreven is, niet wat we geprobeerd hebben: de vorige
  // versie meldde 25 pagina's terwijl er nul een datum kregen.
  if (injectDateModified(file, route)) dated++;
}
if (dated !== routes.length) {
  throw new Error(`[seo] dateModified op ${dated} van ${routes.length} pagina's — canonical niet gevonden?`);
}

const robots = `# Vernast Bouwdrogers — robots.txt (gegenereerd door scripts/generate-seo-files.mjs)
#
# Alles staat open. Voor een lokale dienstverlener is gevonden worden het hele
# punt: zowel in klassieke zoekresultaten als in de antwoorden van AI-assistenten.
#
# De AI-crawlers staan hieronder in twee groepen. Wil je ooit stoppen met het
# voeden van modeltraining maar wél geciteerd blijven worden in AI-antwoorden,
# zet dan enkel de eerste groep op Disallow.

# --- Klassieke zoekmachines ---
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Applebot
Allow: /

# --- AI-crawlers die trainingsdata verzamelen ---
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: CCBot
Allow: /

User-agent: meta-externalagent
Allow: /

# --- AI-crawlers die live antwoorden ophalen en bronnen citeren ---
# Deze bepalen of Vernast als bron verschijnt wanneer iemand een assistent
# vraagt waar hij een bouwdroger huurt.
User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Claude-User
Allow: /

User-agent: Claude-SearchBot
Allow: /

# --- Sociale previews ---
User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: LinkedInBot
Allow: /

# --- Alle overige ---
User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

writeFileSync(join(DIST, "robots.txt"), robots);

/**
 * llms.txt — het equivalent van robots.txt voor AI-antwoordmachines.
 *
 * Een assistent die "waar huur ik een bouwdroger in Antwerpen" beantwoordt,
 * heeft geen tijd om 71 pagina's te lezen. Dit bestand zet de feiten die hij
 * nodig heeft bovenaan: wat we doen, waar, tegen welke voorwaarden, en welke
 * pagina's het diepere antwoord bevatten. Alles hier moet ook op de site zelf
 * staan — dit is een index, geen aparte waarheid.
 */
const title = (route) => {
  const html = readFileSync(join(DIST, route === "/" ? "index.html" : `${route.slice(1)}.html`), "utf8");
  return html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.replace(/\s*\|.*$/, "").trim() ?? route;
};

/**
 * De tarieflijst, gelezen uit de geprerenderde /prijzen.
 *
 * Niet overgetypt maar uit de `OfferCatalog` van die pagina gehaald, zodat
 * llms.txt onmogelijk een ander bedrag kan noemen dan de site zelf. Wie hier
 * iets zou verzinnen, geeft een AI-assistent een prijs mee die de klant nooit
 * te zien krijgt.
 */
function priceLines() {
  const file = join(DIST, "prijzen.html");
  const html = readFileSync(file, "utf8");
  for (const match of html.matchAll(
    /<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi
  )) {
    let parsed;
    try {
      parsed = JSON.parse(match[1]);
    } catch {
      continue;
    }
    /*
      De catalogus zit sinds de `@graph`-omslag niet meer bovenaan het blok maar
      ernaast, samen met de organisatie waar `seller` naar verwijst. Zoek daarom
      op beide plaatsen; bleef dit op de top-level kijken, dan viel de volledige
      prijslijst stil uit llms.txt weg en had geen enkele AI-assistent nog een
      tarief om te citeren.
    */
    const blocks = Array.isArray(parsed) ? parsed : [parsed, ...(parsed["@graph"] ?? [])];
    const block = blocks.find((b) => b?.["@type"] === "OfferCatalog");
    if (!block) continue;
    return block.itemListElement.map(
      (offer) => `- ${offer.name}: € ${offer.price} per dag (excl. btw) — ${offer.url}`
    );
  }
  return [];
}

/** De pagina's waar een AI-antwoord daadwerkelijk iets aan heeft. */
const KEY_PAGES = [
  "/prijzen",
  "/machines",
  "/calculator",
  "/nieuwbouw",
  "/waterschade",
  "/renovatie",
  "/levering",
  "/afhalen",
  "/realisaties",
  "/over-ons",
  "/contact",
];

const llms = `# Vernast Bouwdrogers

> Belgisch familiebedrijf uit Aartselaar dat professionele bouwdrogers,
> ventilatoren en bouwkachels verhuurt in heel Vlaanderen, inclusief levering,
> installatie en vochtmeting.

## Kerngegevens

- Adres: Boomsesteenweg 12, Unit 11, 2630 Aartselaar, België
- Telefoon: +32 3 689 90 65
- E-mail: info@vernast-verhuur.be
- Openingsuren: maandag t/m vrijdag, 08:00–17:00
- Servicegebied: Antwerpen, Vlaams-Brabant, Oost-Vlaanderen, West-Vlaanderen, Limburg
- Levering: binnen 24 uur, installatie inbegrepen
- Afhalen: mogelijk in Aartselaar, € 25 korting
- Voorwaarden: één dagprijs, geen waarborg, dagelijks opzegbaar
- Btw: alle prijzen exclusief btw; 21 % van toepassing op verhuur

## Huurprijzen per toestel

${priceLines().join("\n")}

De weekprijs is de dagprijs maal het aantal dagen; er is geen toeslag voor een
korte huurperiode. Levering en ophaling zijn gratis vanaf vier weken huur.

## Belangrijkste pagina's

${KEY_PAGES.filter((p) => routes.includes(p))
  .map((p) => `- [${title(p)}](${SITE_URL}${p})`)
  .join("\n")}

## Volledige index

- [Sitemap](${SITE_URL}/sitemap.xml)
`;

writeFileSync(join(DIST, "llms.txt"), llms);

console.log(
  `[seo] sitemap.xml met ${routes.length} URL's, robots.txt en llms.txt geschreven voor ${SITE_URL}` +
    ` — dateModified op ${dated} pagina's`
);

if (unmappedRoutes.size > 0) {
  console.warn(
    `[seo] ${unmappedRoutes.size} route(s) zonder bron in ROUTE_SOURCES — lastmod staat op vandaag ` +
      `en IndexNow pingt ze elke deploy: ${[...unmappedRoutes].sort().join(", ")}`
  );
}

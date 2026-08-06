/**
 * Schrijft sitemap.xml en robots.txt na de build.
 *
 * De sitemap wordt niet met de hand bijgehouden maar afgeleid uit wat er
 * werkelijk geprerenderd is: elk HTML-bestand in dist/ is een echte pagina.
 * Pagina's die zichzelf op `noindex` zetten (bevestigingen, checkout-stappen,
 * 404) vallen er automatisch uit. Zo kan de sitemap niet uit de pas lopen met
 * de site.
 */
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const DIST = "dist";
const SITE_URL = (process.env.VITE_SITE_URL || "https://bouwdroger.vercel.app").replace(/\/$/, "");

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

const urls = routes
  .map((route) => {
    const rule = PRIORITY.find((r) => r.test(route));
    return [
      "  <url>",
      `    <loc>${SITE_URL}${route === "/" ? "/" : route}</loc>`,
      `    <lastmod>${today}</lastmod>`,
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

## Belangrijkste pagina's

${KEY_PAGES.filter((p) => routes.includes(p))
  .map((p) => `- [${title(p)}](${SITE_URL}${p})`)
  .join("\n")}

## Volledige index

- [Sitemap](${SITE_URL}/sitemap.xml)
`;

writeFileSync(join(DIST, "llms.txt"), llms);

console.log(
  `[seo] sitemap.xml met ${routes.length} URL's, robots.txt en llms.txt geschreven voor ${SITE_URL}`
);

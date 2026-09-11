#!/usr/bin/env node
/**
 * IndexNow-ping — vertelt Bing (en Yandex, Naver, Seznam, die dezelfde feed
 * delen) welke pagina's veranderd zijn, zodat ze binnen uren opnieuw langskomen
 * in plaats van weken. Bings index is wat ChatGPT search, Copilot en
 * DuckDuckGo lezen.
 *
 * Waarom deze site hem harder nodig heeft dan de andere: op 11-09-2026 stonden
 * 48 van de 50 URL's niet in Google. 25 ervan waren "URL is onbekend bij
 * Google" — nooit opgehaald — en de homepage was voor het laatst op 14 augustus
 * gecrawld. Alle links vanaf de zustersites wezen naar de root, dus buiten de
 * homepage kreeg geen enkele pagina ooit een signaal. Een ping is geen
 * vervanging voor die links, maar hij zorgt er wel voor dat een nieuwe pagina
 * niet maanden op een crawl staat te wachten.
 *
 * De bron is `dist/sitemap.xml`, dus draai dit ná de build. Die sitemap draagt
 * per URL een `lastmod` uit de git-historie van het bronbestand — geen
 * builddatum. Daardoor is "wat is er in deze deploy veranderd?" gewoon af te
 * lezen: elke URL met een lastmod van vandaag. Een tweede git-mapping is
 * daarvoor niet nodig.
 *
 * Gebruik:
 *   node scripts/indexnow-ping.mjs              alleen de URL's die vandaag wijzigden
 *   node scripts/indexnow-ping.mjs --all        elke URL uit de sitemap
 *   node scripts/indexnow-ping.mjs --since 2026-09-01
 *   voeg --dry-run toe om de payload te tonen zonder te versturen
 *
 * Eigendom wordt bewezen met het sleutelbestand `/<key>.txt` in public/. Die
 * sleutel is publiek by design (zo werkt de IndexNow-spec), dus hij hoort in
 * git en is geen secret.
 *
 * Een mislukte ping wordt gelogd, nooit fataal: dit is een versneller, geen
 * poort waar de deploy op mag stuklopen.
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ENDPOINT = 'https://api.indexnow.org/indexnow';
const HOST = 'vernast-bouwdrogers.be';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const args = process.argv.slice(2);
const has = (flag) => args.includes(flag);
const valueOf = (flag) => {
  const i = args.indexOf(flag);
  return i === -1 ? null : (args[i + 1] ?? null);
};

const dryRun = has('--dry-run');
const sendAll = has('--all');
const since = valueOf('--since') ?? new Date().toISOString().slice(0, 10);

/** De sleutel is het bestand `public/<key>.txt`; de naam ís de sleutel. */
function readKey() {
  const dir = join(root, 'public');
  const file = readdirSync(dir).find((name) => /^[0-9a-f]{8,128}\.txt$/i.test(name));
  if (!file) return null;
  const key = file.replace(/\.txt$/i, '');
  // De inhoud hoort de sleutel te herhalen; wijkt dat af, dan wijst Bing de
  // ping af met 403 en is dat hier makkelijker te zien dan in een logregel.
  const body = readFileSync(join(dir, file), 'utf8').trim();
  if (body !== key) {
    console.warn(`[indexnow] ${file} bevat "${body}" maar zou "${key}" moeten bevatten`);
    return null;
  }
  return key;
}

function sitemapEntries() {
  const file = join(root, 'dist', 'sitemap.xml');
  if (!existsSync(file)) {
    console.error('[indexnow] dist/sitemap.xml ontbreekt — draai eerst `npm run build`.');
    return [];
  }
  const xml = readFileSync(file, 'utf8');
  const entries = [];
  for (const block of xml.split('<url>').slice(1)) {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
    if (!loc) continue;
    entries.push({ url: loc.trim(), lastmod: block.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1]?.trim() ?? null });
  }
  return entries;
}

const key = readKey();
if (!key) {
  console.error('[indexnow] geen sleutelbestand in public/ — ping overgeslagen.');
  process.exit(0);
}

const entries = sitemapEntries();
const urls = (sendAll ? entries : entries.filter((e) => e.lastmod && e.lastmod >= since)).map((e) => e.url);

if (urls.length === 0) {
  console.log(`[indexnow] niets te melden (${entries.length} URL's in de sitemap, geen met lastmod >= ${since}).`);
  process.exit(0);
}

const payload = { host: HOST, key, keyLocation: `https://${HOST}/${key}.txt`, urlList: urls };

if (dryRun) {
  console.log(`[indexnow] droogloop — ${urls.length} URL's:`);
  for (const u of urls) console.log('  ' + u);
  process.exit(0);
}

try {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });
  // 200 en 202 betekenen allebei "aangenomen"; 403 is een sleutel die niet
  // opgehaald kon worden, 422 een URL die niet bij de host hoort.
  if (res.ok) console.log(`[indexnow] ${urls.length} URL's gemeld (HTTP ${res.status}).`);
  else console.warn(`[indexnow] afgewezen met HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
} catch (err) {
  console.warn(`[indexnow] ping mislukt: ${err instanceof Error ? err.message : err}`);
}

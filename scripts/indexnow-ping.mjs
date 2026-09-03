#!/usr/bin/env node
/**
 * IndexNow ping — tells Bing (and Yandex, Naver, Seznam, who share the feed)
 * which pages changed, so they recrawl within hours instead of weeks. Bing's
 * index is what ChatGPT search, Copilot and DuckDuckGo read from.
 *
 * Runs at the end of `npm run build`, after generate-seo-files.mjs wrote
 * dist/sitemap.xml. It reads that sitemap so it pings exactly what we publish.
 *
 *   - Production builds only (VERCEL_ENV=production): previews share the same
 *     canonical URLs, so a ping from there would announce content that isn't
 *     live yet.
 *   - Only URLs whose <lastmod> is recent. That date comes from the git commit
 *     of the page's source (see lastmodFor in generate-seo-files.mjs), so a
 *     deploy that didn't touch a page does not re-announce it. Routes without
 *     a known source fall back to today's date there and are therefore pinged
 *     on every production deploy — add them to ROUTE_SOURCES to stop that.
 *   - `--all` sends every sitemap URL and skips the environment check; use it
 *     once after rolling out the key file. `--dry-run` prints without sending.
 *
 * Ownership is proven by public/<key>.txt, served from the site root; the key
 * is public by design (IndexNow spec), so it is committed, not a secret.
 *
 * Mind the first ping of a NEW key: this script runs inside the Vercel build,
 * i.e. before the deploy is live. Bing validates the key on first use and
 * remembers a miss — on 2026-09-03 it fetched the key file 25 seconds before
 * it existed and refused the host ("UserForbiddedToAccessSite") from then on.
 * So when rotating the key, make sure that deploy pings nothing, then run
 * `--all` by hand once the key file answers 200.
 *
 * A failed ping is logged, never fatal: this is an accelerator, not a gate.
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ENDPOINT = 'https://api.indexnow.org/indexnow';
/** A lastmod this many days old or younger counts as "changed". */
const RECENT_DAYS = 2;

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const sendAll = args.includes('--all');
const dryRun = args.includes('--dry-run');
const distDir = resolve(root, args.find((a) => !a.startsWith('--')) ?? 'dist');

const log = (msg) => console.log(`[indexnow] ${msg}`);

/** The key file is the single source of truth: public/<32 hex>.txt. */
function findKey() {
  const dir = join(root, 'public');
  const file = readdirSync(dir).find((name) => /^[a-f0-9]{32}\.txt$/.test(name));
  if (!file) return null;
  const key = readFileSync(join(dir, file), 'utf8').trim();
  return key === basename(file, '.txt') ? key : null;
}

function readSitemap(path) {
  const xml = readFileSync(path, 'utf8');
  const entries = [];
  for (const block of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = block[1].match(/<loc>([^<]+)<\/loc>/)?.[1];
    if (!loc) continue;
    const lastmod = block[1].match(/<lastmod>(\d{4}-\d{2}-\d{2})<\/lastmod>/)?.[1] ?? null;
    entries.push({ loc, lastmod });
  }
  return entries;
}

function isRecent(lastmod) {
  if (!lastmod) return false;
  const ageMs = Date.now() - new Date(`${lastmod}T00:00:00Z`).getTime();
  return ageMs <= RECENT_DAYS * 24 * 60 * 60 * 1000;
}

async function main() {
  const key = findKey();
  if (!key) {
    log('no valid public/<key>.txt — skipping');
    return;
  }
  if (!sendAll && process.env.VERCEL_ENV !== 'production') {
    log(`not a production build (VERCEL_ENV=${process.env.VERCEL_ENV ?? 'unset'}) — skipping`);
    return;
  }

  const sitemapPath = join(distDir, 'sitemap.xml');
  if (!existsSync(sitemapPath)) {
    log(`${sitemapPath} not found — run the build first`);
    return;
  }

  const entries = readSitemap(sitemapPath);
  const selected = sendAll ? entries : entries.filter((e) => isRecent(e.lastmod));
  if (selected.length === 0) {
    log(`nothing changed in the last ${RECENT_DAYS} days (${entries.length} URLs) — no ping`);
    return;
  }

  const siteUrl = new URL(entries[0].loc).origin;
  const payload = {
    host: new URL(siteUrl).host,
    key,
    keyLocation: `${siteUrl}/${key}.txt`,
    urlList: selected.map((e) => e.loc),
  };
  log(`${sendAll ? 'full' : 'changed'} set: ${selected.length} of ${entries.length} URLs`);
  if (dryRun) {
    console.log(JSON.stringify(payload, null, 2));
    return;
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });
  // 200 = accepted, 202 = accepted and the key will be validated later.
  if (res.status === 200 || res.status === 202) {
    log(`accepted (${res.status}) for ${selected.length} URLs`);
    return;
  }
  log(`rejected ${res.status}: ${(await res.text()).slice(0, 300) || res.statusText}`);
}

main().catch((err) => log(`ping failed: ${err instanceof Error ? err.message : String(err)}`));

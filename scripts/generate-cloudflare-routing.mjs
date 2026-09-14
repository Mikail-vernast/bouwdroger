/**
 * Schrijft `dist/_headers` uit `vercel.json`.
 *
 * WAAROM DIT BESTAAT
 * Alle routeersemantiek van deze site zit in `vercel.json`. Cloudflare Workers
 * Static Assets leest dat bestand niet — die wil `_headers` naast de bestanden.
 * Het is een build-artefact zoals `sitemap.xml`, vandaar dat het in `dist/`
 * belandt en niet in de repo. Met de hand overtypen betekent twee lijsten die uit elkaar gaan
 * lopen zodra iemand één redirect toevoegt, en dat merk je pas maanden later
 * als een oude URL op een 404 valt. Daarom is `vercel.json` de enige plek waar
 * je een regel wijzigt en zijn `_redirects`/`_headers` build-artefacten.
 *
 * HARDE EIS: geen enkele regel mag stil wegvallen.
 * Cloudflare kent alleen `*` (greedy) en `:naam`; geen regex-groepen, geen
 * alternatieven. Elk patroon dat deze omzetter niet met zekerheid kan
 * vertalen laat het script falen in plaats van de regel over te slaan. Een
 * header die je niet ziet verdwijnen — een CSP, een `noindex` — is precies
 * het soort fout dat pas opduikt als de schade al geleden is.
 *
 * Draaien:  node scripts/generate-cloudflare-routing.mjs
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'dist');
const config = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8'));

/** Padsegmenten die Cloudflare letterlijk neemt: geen regex-metateken erin. */
const LITERAL = /^\/[A-Za-z0-9\-._~/%]*$/;

/**
 * Vertaalt één Vercel `source` naar één of meer Cloudflare-padpatronen.
 * Gooit bij alles wat niet aantoonbaar dezelfde verzameling paden oplevert.
 */
function toCloudflarePatterns(source) {
  // `/(.*)\.(jpg|png|…)` — extensie-alternatief. Cloudflare kent geen
  // alternatieven, dus uitklappen naar één regel per extensie. Dat is geen
  // benadering: het is exact dezelfde verzameling.
  const extAlternation = source.match(/^\/\(\.\*\)\\\.\(([A-Za-z0-9|]+)\)$/);
  if (extAlternation) {
    return extAlternation[1].split('|').map((ext) => `/*.${ext}`);
  }

  // `/(.*)\.html` — één vaste extensie.
  const singleExt = source.match(/^\/\(\.\*\)\\\.([A-Za-z0-9]+)$/);
  if (singleExt) return [`/*.${singleExt[1]}`];

  // `/(.*)` — alles.
  if (source === '/(.*)') return ['/*'];

  // `/pad(.*)` en `/pad/(.*)` — prefix + rest. `(.*)` matcht ook de lege
  // string, net als Cloudflares `*`, dus `/pad` zelf valt er in beide gevallen
  // onder.
  const prefix = source.match(/^(\/[^(]*)\(\.\*\)$/);
  if (prefix && LITERAL.test(prefix[1])) return [`${prefix[1]}*`];

  // Letterlijk pad, geen patroon.
  if (LITERAL.test(source)) return [source];

  throw new Error(
    `Kan Vercel-patroon niet met zekerheid naar Cloudflare vertalen: ${JSON.stringify(source)}\n` +
      `Vertaal 'm met de hand in dit script en voeg een testgeval toe — sla 'm niet over.`
  );
}


/**
 * Conservatieve vraag: kunnen twee Cloudflare-patronen ooit hetzelfde pad
 * matchen? Bij twijfel `true`. Een gemist conflict is een header die stil
 * verandert; een vals alarm kost alleen een overbodige `!`-regel, en die is
 * onschadelijk — hij wist een waarde die er direct daarna weer op gezet wordt.
 */
function mayOverlap(a, b) {
  if (a === b) return true;
  if (a === '/*' || b === '/*') return true;
  const aExt = a.startsWith('/*.');
  const bExt = b.startsWith('/*.');
  if (aExt && bExt) return false; // verschillende extensies sluiten elkaar uit
  if (aExt || bExt) return true; // een extensie kan in elke map liggen
  const ap = a.replace(/\*$/, '');
  const bp = b.replace(/\*$/, '');
  return ap.startsWith(bp) || bp.startsWith(ap);
}

// Redirects worden NIET hier gegenereerd. Ze bevatten `:slug*`-patronen die op
// volgorde moeten matchen (`/pages/td-:slug*` vóór `/pages/:slug*`), en
// Cloudflare laat in `_redirects` een splat de hele subtree claimen ongeacht
// wat erboven staat. `worker/index.ts` doet ze via dezelfde path-to-regexp die
// Vercel zelf gebruikt.

// ------------------------------------------------------------------ _headers
//
// VERCEL OVERSCHRIJFT, CLOUDFLARE VOEGT SAMEN
// Matchen twee `headers`-blokken hetzelfde pad, dan past Vercel ze allebei toe
// en wint de láátste sleutel. Cloudflare zet ze beide in het antwoord: een
// `.jpg` kreeg zo twee `Cross-Origin-Resource-Policy`-headers, `same-site` én
// `cross-origin`, en welke een browser dan volgt ligt niet vast.
//
// `_headers` kent daar een uitweg voor: `! Naam` wist de header die een eerdere
// regel gezet heeft. Door die wis-regel vóór de nieuwe waarde te zetten in het
// látere blok, doet Cloudflare precies wat Vercel doet. Gemeten op 14-09-2026
// met een wegwerp-Worker: met `!` komt alleen `cross-origin` terug op de .jpg
// en blijft `same-site` intact op de rest.

/** Alle (pattern, key, value) die al uitgeschreven zijn, in volgorde. */
const emitted = [];
const blocks = [];

for (const rule of config.headers ?? []) {
  for (const pattern of toCloudflarePatterns(rule.source)) {
    const lines = [pattern];
    for (const { key, value } of rule.headers) {
      // Heeft een eerder blok deze header met een ándere waarde gezet op een
      // pad dat hier ook onder valt? Dan eerst wissen, anders staan ze straks
      // allebei in het antwoord.
      const botst = emitted.some(
        (e) => e.key.toLowerCase() === key.toLowerCase() && e.value !== value && mayOverlap(e.pattern, pattern),
      );
      if (botst) lines.push(`  ! ${key}`);
      lines.push(`  ${key}: ${value}`);
      emitted.push({ pattern, key, value });
    }
    blocks.push(lines.join('\n'));
  }
}

const headerLines = blocks.join('\n').split('\n');

const banner = (name) =>
  `# GEGENEREERD door scripts/generate-cloudflare-routing.mjs — niet met de hand bewerken.\n` +
  `# Bron: vercel.json (${name}). Wijzig daar en draai het script opnieuw.\n`;

writeFileSync(join(outDir, '_headers'), banner('headers') + headerLines.join('\n') + '\n');

const gewist = headerLines.filter((l) => l.trim().startsWith('! ')).length;
console.log(`dist/_headers: ${blocks.length} blokken, ${gewist} wis-regel(s) tegen dubbele headers`);

#!/usr/bin/env node
/**
 * Zet de secrets van deze site op Cloudflare, uit een lokaal env-bestand.
 *
 * WAAROM DIT NIET AUTOMATISCH KON
 * Zeventien van de Vercel-variabelen staan daar als **sensitive** opgeslagen.
 * Die zijn per ontwerp niet uitleesbaar — `vercel env pull` schrijft er
 * `[SENSITIVE]` voor in de plaats, en het dashboard toont ze ook niet. Ze
 * overzetten betekent dus: ze opnieuw ophalen bij de bron (Stripe, Brevo,
 * Google Cloud) of uit een lokale kopie halen. Dit script doet dat tweede, en
 * weigert alles wat naar een placeholder ruikt.
 *
 * Gebruik:
 *   node scripts/cf-secrets.mjs .env.production          # controle, zet niets
 *   node scripts/cf-secrets.mjs .env.production --write
 *
 * Het bestand zelf komt nergens terecht: `wrangler secret bulk` leest van
 * stdin, en `.env*` staat in .gitignore.
 */

import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

/**
 * Wat de handlers uit `process.env` lezen. Gegrepen uit `api/` en `src/lib/`;
 * `VERCEL_ENV` staat er bewust niet bij — die vervangt `DEPLOY_ENV` uit
 * wrangler.jsonc.
 *
 * `STRIPE_PUBLISHABLE_KEY` stond hier eerst níét bij, met als reden dat hij
 * publiek is en al in de gebouwde bundel zit. Dat eerste klopt, het tweede
 * niet: `api/checkout.ts` en `api/saldo.ts` lezen hem server-side uit
 * `process.env` en geven hem in het antwoord mee, juist zodat hij altijd bij
 * dezelfde omgeving hoort als de geheime sleutel. Ontbreekt hij, dan geven
 * beide routes een 500 met "Betalen is nog niet geconfigureerd op deze
 * omgeving" — een foutmelding die naar een ontbrekende geheime sleutel wijst
 * terwijl die er wel is. Gebeurd op 15-09-2026, live op de bouwdroger.
 *
 * Hij staat in `wrangler.jsonc` bij de vars en niet hier bij de secrets: een
 * publiceerbare sleutel is geen geheim, en als var komt een wijziging mee in
 * code review.
 */
const VERWACHT = [
  'BREVO_API_KEY',
  'BREVO_SENDER_EMAIL',
  'BREVO_SENDER_NAME',
  'BREVO_TEAM_EMAIL',
  'BREVO_TPL_AFHAAL_BEVESTIGD',
  'BREVO_TPL_BOEKING_BETAALD',
  'BREVO_TPL_CONTACT_ONTVANGEN',
  'BREVO_TPL_LEVERING_MORGEN',
  'BREVO_TPL_OPHALING_VERLENGEN',
  'CRON_SECRET',
  'GOOGLE_SERVICE_ACCOUNT_KEY',
  'SLACK_ORDER_WEBHOOK_URL',
  'STRIPE_SECRET_KEY',
  'STRIPE_WEBHOOK_SECRET',
  'VERNAST_WEBHOOK_SECRET',
  'VERNAST_WEBHOOK_URL',
  'VITE_SITE_URL',
];

/** Waarden die erop wijzen dat het bestand uit een `vercel env pull` komt. */
const PLACEHOLDERS = new Set(['[SENSITIVE]', '', 'undefined', 'null']);

const [bestand, ...vlaggen] = process.argv.slice(2);
if (!bestand) {
  console.error('Geef een env-bestand mee: node scripts/cf-secrets.mjs .env.production [--write]');
  process.exit(1);
}
const SCHRIJF = vlaggen.includes('--write');

const env = {};
for (const regel of readFileSync(bestand, 'utf8').split('\n')) {
  const m = regel.match(/^([A-Z_0-9]+)=(.*)$/);
  if (!m) continue;
  // Vercel schrijft de waarden tussen dubbele quotes en escapet newlines --
  // de service-account-sleutel is een JSON-blok met echte regeleindes erin.
  let waarde = m[2];
  if (waarde.startsWith('"') && waarde.endsWith('"')) {
    waarde = waarde.slice(1, -1).replace(/\\n/g, '\n').replace(/\\"/g, '"');
  }
  env[m[1]] = waarde;
}

const teZetten = {};
const ontbreekt = [];
for (const naam of VERWACHT) {
  const waarde = env[naam];
  if (waarde === undefined || PLACEHOLDERS.has(waarde)) ontbreekt.push(naam);
  else teZetten[naam] = waarde;
}

console.log(`${Object.keys(teZetten).length} van ${VERWACHT.length} secrets gevonden in ${bestand}`);
for (const naam of Object.keys(teZetten)) console.log(`   ✓ ${naam} (${teZetten[naam].length} tekens)`);
for (const naam of ontbreekt) console.log(`   ✗ ${naam} — ontbreekt of is een placeholder`);

if (ontbreekt.length) {
  console.log('\nOntbrekende secrets haal je bij de bron:');
  console.log('   STRIPE_*                   Stripe-dashboard → Developers → API keys / Webhooks');
  console.log('   BREVO_API_KEY, BREVO_TPL_* Brevo → SMTP & API / Templates');
  console.log('   GOOGLE_SERVICE_ACCOUNT_KEY Google Cloud → IAM → Service accounts → Keys');
  console.log('   VERNAST_WEBHOOK_*          de Vernast-v2.0-kant (moet identiek zijn)');
  console.log('   CRON_SECRET                mag een nieuwe willekeurige waarde zijn');
}

if (!SCHRIJF) {
  console.log('\nControle — er is niets gezet. Voeg --write toe om door te voeren.');
  process.exit(ontbreekt.length ? 1 : 0);
}

if (!Object.keys(teZetten).length) {
  console.error('\nNiets te zetten.');
  process.exit(1);
}

// `secret bulk` leest JSON van stdin, zodat geen enkele waarde in de
// shell-geschiedenis of in een procestabel belandt.
const uit = spawnSync('npx', ['wrangler', 'secret', 'bulk'], {
  input: JSON.stringify(teZetten),
  stdio: ['pipe', 'inherit', 'inherit'],
});
process.exit(uit.status ?? 1);

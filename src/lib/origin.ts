/**
 * Waar Stripe de betaler naartoe mag terugsturen.
 *
 * `new URL(request.url).origin` komt uit de Host-header. Vercel routeert enkel
 * domeinen die aan het project hangen, dus er valt weinig binnen te smokkelen —
 * maar de URL waar een betaler na het afrekenen belandt is nu eenmaal niets om
 * op een header te bouwen. Wat niet in de lijst staat, valt terug op het
 * canonieke domein.
 *
 * Staat apart omdat zowel de boeking (`api/checkout.ts`) als de saldobetaling
 * bij de installatie (`api/saldo.ts`) hetzelfde oordeel nodig heeft.
 */

const ALLOWED_HOSTS = [
  // Preview-deploys draaien op een wisselende naam onder dit domein en moeten
  // naar zichzelf terugkeren, anders test je de boeking op productie.
  /^([a-z0-9-]+\.)*vercel\.app$/,
  // Hetzelfde voor de Cloudflare-kant, die tijdens de migratie naast Vercel
  // draait op `bouwdroger.vernast-v2.workers.dev`.
  /^([a-z0-9-]+\.)*workers\.dev$/,
  /^([a-z0-9-]+\.)*vernast-bouwdrogers\.be$/,
  /^([a-z0-9-]+\.)*bouwdrogerservice\.be$/,
];

/** Waar we op terugvallen als de Host-header niet herkend wordt. */
export const CANONICAL_ORIGIN = "https://vernast-bouwdrogers.be";

/**
 * `vercel dev` op de machine van een developer.
 *
 * Zonder deze uitzondering viel localhost terug op het canonieke domein, en
 * stuurde Stripe je na een Bancontact- of iDEAL-betaling naar productie in
 * plaats van naar je eigen server. Daardoor was de laatste helft van de
 * boekingsflow lokaal niet te testen: je kwam nooit op je eigen
 * bevestigingsscherm uit.
 *
 * Buiten een deploy telt élke host waarop je server draait, niet enkel
 * `localhost`. Een saldobetaling test je met je telefoon, en die opent de
 * dev-server op het adres in het thuisnetwerk (`192.168.x.x:3000`). Dat viel
 * hier eerst buiten, waardoor Stripe na het afrekenen naar productie stuurde —
 * waar de pagina nog niet bestaat. Resultaat: een klant die betaald heeft en
 * een 404 ziet, en een betaling die nooit bij de order aankomt.
 *
 * Dat dit veilig is, hangt aan één ding: zodra dit écht ergens draait meldt de
 * omgeving dat, en dan geldt enkel de lijst hierboven. Een vervalste
 * Host-header komt daar niet doorheen.
 */
const DEPLOYED = new Set(["production", "preview"]);

/**
 * Draait dit op een echte deploy?
 *
 * Vercel zet `VERCEL_ENV` zelf; Cloudflare kent die variabele niet en zou de
 * check dus stil overslaan — met als gevolg dat daar élke Host-header vertrouwd
 * wordt, precies wat deze module moet voorkomen. Vandaar `DEPLOY_ENV`, dat in
 * `wrangler.jsonc` op `production` staat. Een ontbrekende waarde betekent
 * "lokaal", en dat blijft de veilige uitkomst: daar valt niets te kapen.
 */
function deployEnv(): string {
  return process.env.VERCEL_ENV ?? process.env.DEPLOY_ENV ?? "";
}

export function safeOrigin(request: Request): string {
  const url = new URL(request.url);
  if (!DEPLOYED.has(deployEnv())) return url.origin;
  const known = ALLOWED_HOSTS.some((pattern) => pattern.test(url.hostname));
  return known ? url.origin : CANONICAL_ORIGIN;
}

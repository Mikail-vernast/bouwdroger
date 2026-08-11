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
  /^([a-z0-9-]+\.)*bouwdrogerservice\.be$/,
];

/** Waar we op terugvallen als de Host-header niet herkend wordt. */
export const CANONICAL_ORIGIN = "https://bouwdroger.vercel.app";

/**
 * `vercel dev` op de machine van een developer.
 *
 * Zonder deze uitzondering viel localhost terug op het canonieke domein, en
 * stuurde Stripe je na een Bancontact- of iDEAL-betaling naar productie in
 * plaats van naar je eigen server. Daardoor was de laatste helft van de
 * boekingsflow lokaal niet te testen: je kwam nooit op je eigen
 * bevestigingsscherm uit.
 *
 * Alleen buiten een echte deploy: daar staat `VERCEL_ENV` op `production` of
 * `preview`, dus een vervalste Host-header komt hier niet doorheen.
 */
const LOCAL_HOSTS = /^(localhost|127\.0\.0\.1|\[::1\])$/;
const DEPLOYED = new Set(["production", "preview"]);

export function safeOrigin(request: Request): string {
  const url = new URL(request.url);
  const deployed = DEPLOYED.has(process.env.VERCEL_ENV ?? "");
  if (!deployed && LOCAL_HOSTS.test(url.hostname)) return url.origin;
  const known = ALLOWED_HOSTS.some((pattern) => pattern.test(url.hostname));
  return known ? url.origin : CANONICAL_ORIGIN;
}

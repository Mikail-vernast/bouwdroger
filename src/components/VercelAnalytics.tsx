import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

/**
 * Vercel Web Analytics en Speed Insights, maar alleen waar ze kunnen werken.
 *
 * WAAROM DIE CONDITIE ER MOET ZIJN
 * Beide SDK's laden hun script van `/_vercel/insights/script.js` en
 * `/_vercel/speed-insights/script.js`. Die paden worden door het
 * Vercel-platform zelf geserveerd en bestaan nergens anders. Op de
 * Cloudflare-deploy geeft elke paginalading er dus twee 404's op, plus twee
 * "Refused to execute script"-fouten omdat de 404-pagina als `text/html`
 * terugkomt — in de console van elke bezoeker.
 *
 * WAAROM ZE NIET GEWOON WEG ZIJN
 * Op vernast-vochtbestrijding en vernast-schilderwerken zijn ze dat wel: daar
 * meet GTM door en verandert er niets. Deze site heeft géén tweede meting —
 * geen GTM, geen GA4 — dus weghalen betekent hier: vanaf nu nul cijfers. De
 * conditie houdt de meting intact zolang Vercel de site bedient, en houdt de
 * console schoon op Cloudflare.
 *
 * DE DNS-SWITCH IS GEBEURD (15-09-2026)
 * `vernast-bouwdrogers.be` draait sindsdien op Cloudflare. Het stond hier nog
 * in de lijst met Vercel-hosts, dus de conditie gaf `true` op het echte domein
 * en de SDK's laadden alsnog. Resultaat, gemeten in een echte browser:
 * `POST /_vercel/insights/view` → 404, met een console-error voor elke
 * bezoeker — precies wat deze conditie moest voorkomen.
 *
 * Wat overblijft is `*.vercel.app`: de preview-deploys, waar de meting wél
 * werkt. `bouwdrogerservice.be` stond er ook in maar wijst naar Shopify en
 * heeft nooit een Vercel-deploy gehad.
 *
 * Deze site heeft nu dus géén meting meer. Cloudflare Web Analytics is de
 * gratis opvolger — zie docs/cloudflare-migratie.md.
 */
export default function VercelAnalytics({ route, path }: { route: string | null; path: string }) {
  // Runtime, niet build-time: dezelfde bundel draait op beide platforms, dus
  // `import.meta.env` kan dit onderscheid niet maken.
  const opVercel =
    typeof window !== "undefined" && /(^|\.)vercel\.app$/.test(window.location.hostname);

  if (!opVercel) return null;

  return (
    <>
      {/*
        `path` moet erbij, anders telt Web Analytics niets. De SDK zet bij een
        gezette `route` intern `disableAutoTrack: true` — hij gaat ervan uit dat
        wij de pageviews zelf sturen — maar stuurt er zelf pas één zodra
        `route` én `path` allebei ingevuld zijn. Met alleen `route` staat de
        automatische telling dus uit terwijl de handmatige nooit vuurt: nul
        bezoekers, voor altijd, terwijl het script gewoon 200 geeft en
        `window.va` bestaat. Speed Insights heeft die tweede prop niet nodig en
        mat wél door — daaraan zie je dat het niet aan het verkeer lag.
      */}
      <Analytics route={route} path={path} />
      <SpeedInsights route={route} />
    </>
  );
}

/**
 * Een testsleutel op een echt domein is een stille ramp — deze laag maakt er
 * een luide van.
 *
 * WAT ER MIS KAN GAAN
 * Productie draait op `pk_live`/`sk_live`; de lokale ontwikkelsleutels zijn
 * `sk_test`. Tijdens de migratie staan de Cloudflare-secrets op test, zodat de
 * worker op `*.workers.dev` end-to-end getest kan worden. Zet iemand dan de
 * DNS om zonder eerst de sleutels te vervangen, dan rekenen echte klanten af
 * in Stripes testmodus: de Checkout-pagina laadt, de betaling "slaagt", er
 * komt een bevestigingsmail — en er is nooit geld overgemaakt. Dat merk je pas
 * bij de bankafstemming, dagen later, met orders die als betaald in het
 * portaal staan.
 *
 * De omgekeerde fout is even erg: een `sk_live` op een testdeploy waar iemand
 * de flow doorloopt, incasseert echt geld van wie dan ook aan het testen is.
 *
 * WAT DEZE CHECK DOET
 * Hij koppelt de sleutelmodus aan de hostname. Op een productiedomein mag
 * alleen `live`, daarbuiten alleen `test`. Klopt dat niet, dan weigert elke
 * betaalroute met een 503 in plaats van door te gaan. Een kapotte betaalknop
 * valt binnen een uur op; een betaling die niet bestaat niet.
 *
 * Waarom in de Worker en niet in de handlers: de handlers draaien óók op
 * Vercel, waar dit probleem niet bestaat (één omgeving, één sleutelset). Dit
 * is een migratierisico, dus het hoort in de migratielaag.
 */

/** Domeinen waar echte klanten afrekenen. */
const PRODUCTIE_HOSTS = [/^([a-z0-9-]+\.)*vernast-bouwdrogers\.be$/, /^([a-z0-9-]+\.)*bouwdrogerservice\.be$/];

/** Routes die geld aanraken. De rest mag gewoon draaien met testsleutels. */
const BETAALROUTES = new Set([
  '/api/checkout',
  '/api/afhaal-checkout',
  '/api/saldo',
  '/api/extension',
  '/api/checkout-session',
  '/api/stripe-webhook',
  '/api/reconcile-orders',
]);

export interface KeyModeProbleem {
  hostname: string;
  verwacht: 'live' | 'test';
  gevonden: 'live' | 'test' | 'onbekend';
}

/**
 * `null` als alles klopt, anders wat er niet klopt. Roept niets aan en leest
 * alleen het prefix van de sleutel — de sleutel zelf wordt nooit gelogd.
 */
export function controleerKeyMode(hostname: string, pathname: string): KeyModeProbleem | null {
  if (!BETAALROUTES.has(pathname)) return null;

  const sleutel = process.env.STRIPE_SECRET_KEY ?? '';
  const gevonden = sleutel.startsWith('sk_live_')
    ? 'live'
    : sleutel.startsWith('sk_test_')
      ? 'test'
      : 'onbekend';

  // Geen sleutel? Dan is dit niet ons probleem: de handler zelf geeft daar al
  // een duidelijke 500 op ("Stripe is nog niet geconfigureerd").
  if (gevonden === 'onbekend' && !sleutel) return null;

  const verwacht = PRODUCTIE_HOSTS.some((p) => p.test(hostname)) ? 'live' : 'test';
  return gevonden === verwacht ? null : { hostname, verwacht, gevonden };
}

/**
 * De Cloudflare-kant van bouwdroger: statische site + de veertien serverroutes.
 *
 * WAAROM ER GEEN ADAPTER NODIG IS
 * De routes in `api/` zijn al geschreven op het webstandaard-contract
 * (`export async function POST(request: Request): Promise<Response>`), niet op
 * Vercels oudere `(req, res)`. Dat contract is precies wat een Worker ook
 * gebruikt, dus de handlers draaien hier ongewijzigd. `api/*.ts` blijft één
 * bestand voor beide platforms — een herschreven kopie zou vanaf dag één uit
 * elkaar lopen met het origineel.
 *
 * WAT DEZE WORKER WEL DOET
 *   1. redirects uit `vercel.json` (50 stuks, met `:slug*`-patronen die op
 *      volgorde matchen — zie vercelRouting.ts)
 *   2. `/api/*` naar de juiste handler, of een 405 als de methode niet bestaat
 *   3. de securityheaders uit `vercel.json` op elk API-antwoord; die komen op
 *      Vercel van het platform en zouden hier anders alleen op bestanden zitten
 *   4. de 404-pagina
 *
 * Al het andere serveert de assetlaag rechtstreeks, en dat is gratis en
 * ongelimiteerd. Alleen `/api/*` staat in `run_worker_first`.
 */

import { controleerKeyMode } from './guardKeyMode';
import { headersFor, matchRedirect } from './vercelRouting';
import { setPlatformWaitUntil } from '../src/lib/platformWaitUntil';

import * as afhaalCheckout from '../api/afhaal-checkout';
import * as availability from '../api/availability';
import * as bookingRelease from '../api/booking-release';
import * as checkout from '../api/checkout';
import * as checkoutSession from '../api/checkout-session';
import * as contact from '../api/contact';
import * as extension from '../api/extension';
import * as order from '../api/order';
import * as reconcileOrders from '../api/reconcile-orders';
import * as reminders from '../api/reminders';
import * as saldo from '../api/saldo';
import * as stripeWebhook from '../api/stripe-webhook';
import { normalizeHost } from './normalizeHost';
import * as vraag from '../api/vraag';
import * as vraagUploads from '../api/vraag-uploads';

/**
 * De canonieke vorm van een pad, of null als hij al goed is.
 *
 * Twee regels, allebei uit `vercel.json`:
 *   `cleanUrls: true`     → `/machines.html` en `/index.html` horen zonder
 *                           extensie; een `index.html` verdwijnt helemaal
 *   `trailingSlash: false`→ `/machines/` hoort `/machines` te zijn
 *
 * De root (`/`) blijft zoals hij is: die heeft geen niet-slash-vorm.
 */
function normalizeUrlShape(pathname: string): string | null {
  let pad = pathname;

  if (pad.endsWith('/index.html')) pad = pad.slice(0, -'index.html'.length);
  else if (pad.endsWith('.html')) pad = pad.slice(0, -'.html'.length);

  if (pad.length > 1 && pad.endsWith('/')) pad = pad.slice(0, -1);

  return pad === pathname ? null : pad || '/';
}

type Handler = (request: Request) => Promise<Response>;
type RouteModule = Partial<Record<'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE', Handler>>;

/**
 * Pad → module. De sleutels zijn exact wat Vercel uit de bestandsnamen in
 * `api/` afleidt; `cleanUrls` speelt hier geen rol, want die geldt alleen voor
 * `.html`.
 */
const ROUTES: Record<string, RouteModule> = {
  '/api/afhaal-checkout': afhaalCheckout,
  '/api/availability': availability,
  '/api/booking-release': bookingRelease,
  '/api/checkout': checkout,
  '/api/checkout-session': checkoutSession,
  '/api/contact': contact,
  '/api/extension': extension,
  '/api/order': order,
  '/api/reconcile-orders': reconcileOrders,
  '/api/reminders': reminders,
  '/api/saldo': saldo,
  '/api/stripe-webhook': stripeWebhook,
  '/api/vraag': vraag,
  '/api/vraag-uploads': vraagUploads,
};

export interface Env {
  ASSETS: Fetcher;
  CRON_SECRET?: string;
  /** Welk platform de vangnetten draait. Zie `scheduled()`. */
  CRON_OWNER?: string;
  /** De hostnaam waar deze site op hoort te staan. Zie `normalizeHost()`. */
  CANONICAL_HOST?: string;
}

/**
 * De headers uit `vercel.json` onder het antwoord van een handler leggen.
 *
 * Op Vercel zet het platform ze op élk antwoord, ook op een 405 of een 500 van
 * een functie. Hier komen ze uit `dist/_headers`, en dat bestand geldt alleen
 * voor bestanden die de assetlaag serveert — een API-antwoord zou er dus
 * zonder CSP en zonder HSTS uit komen. Wat de handler zelf zet wint: die weet
 * beter welk content-type en welke cache-regel bij zijn antwoord horen.
 */
function withPlatformHeaders(response: Response, pathname: string): Response {
  const merged = new Headers(headersFor(pathname));
  for (const [key, value] of response.headers) merged.set(key, value);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers: merged });
}

function methodNotAllowed(pathname: string): Response {
  return withPlatformHeaders(
    new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
    }),
    pathname,
  );
}

async function notFound(env: Env, url: URL): Promise<Response> {
  const page = await env.ASSETS.fetch(new URL('/404.html', url));
  return new Response(page.body, { status: 404, headers: page.headers });
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    // Achtergrondwerk (de kopie van een verzonden mail in Verzonden) moet aan
    // de request hangen, anders breekt de runtime het af zodra het antwoord
    // vertrokken is. Zie src/lib/platformWaitUntil.ts.
    setPlatformWaitUntil((task) => ctx.waitUntil(task));

    const url = new URL(request.url);

    // Stap 0: de hostnaam, vóór de padnormalisatie en vóór de redirects. Vercel
    // doet deze in één hop met het pad onveranderd. Zie `normalizeHost`.
    const canoniekeUrl = normalizeHost(url, env.CANONICAL_HOST);
    if (canoniekeUrl) {
      return new Response(null, { status: 308, headers: { Location: canoniekeUrl } });
    }

    // Stap 1 van Vercels routering: de URL-vorm normaliseren, vóór de
    // redirects. `cleanUrls: true` + `trailingSlash: false` betekent dat
    // `/machines/` en `/machines.html` allebei naar `/machines` horen te gaan.
    //
    // Cloudflares assetlaag doet dit ook (`html_handling`), maar met een 307.
    // Dat is een *tijdelijke* omleiding: Google blijft dan de oude URL crawlen
    // en consolideert de signalen niet naar de nieuwe. Vercel stuurt 308 en zo
    // staan de 55 pagina's geïndexeerd, dus dat moet het hier ook zijn.
    const genormaliseerd = normalizeUrlShape(url.pathname);
    if (genormaliseerd) {
      return new Response(null, {
        status: 308,
        headers: { Location: genormaliseerd + url.search },
      });
    }

    const redirect = matchRedirect(url);
    if (redirect) {
      return new Response(null, { status: redirect.status, headers: { Location: redirect.location } });
    }

    const route = ROUTES[url.pathname];
    if (route) {
      const handler = route[request.method as keyof RouteModule];
      if (!handler) return methodNotAllowed(url.pathname);

      // Testsleutels op een echt domein (of andersom) — zie guardKeyMode.ts.
      const probleem = controleerKeyMode(url.hostname, url.pathname);
      if (probleem) {
        console.error(
          `[stripe] sleutelmodus klopt niet op ${probleem.hostname}: ` +
            `verwacht ${probleem.verwacht}, gevonden ${probleem.gevonden}. Route geweigerd.`,
        );
        return withPlatformHeaders(
          new Response(JSON.stringify({ error: 'Betalingen zijn tijdelijk niet beschikbaar.' }), {
            status: 503,
            headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
          }),
          url.pathname,
        );
      }

      return withPlatformHeaders(await handler(request), url.pathname);
    }

    return notFound(env, url);
  },

  /**
   * De twee vangnetten: `reconcile-orders` (04:00) en `reminders` (13:00).
   *
   * DE VLAG DIE ERVOOR ZORGT DAT ZE MAAR OP ÉÉN PLEK DRAAIEN
   * Dezelfde twee taken staan óók in `vercel.json`. Draaien ze tegelijk op
   * beide platforms, dan krijgt elke klant zijn herinneringsmail dubbel — en
   * dat valt niet op in een log, alleen bij de klant. Cloudflare kent geen
   * "staat deze cron ook ergens anders aan"-check, dus die maken we zelf:
   * `CRON_OWNER` in `wrangler.jsonc` zegt wie aan zet is, en zolang die op
   * `"vercel"` staat doet deze handler niets.
   *
   * De expressies mogen daardoor nú al in `wrangler.jsonc` staan: het pad is
   * getest en draait mee, alleen het werk wordt overgeslagen. Bij de
   * DNS-switch is het één vlag omzetten plus `crons` uit `vercel.json` halen.
   * Zet je de vlag om en vergeet je Vercel, dan draaien ze dubbel — maar dan
   * heb je het zelf gedaan, in plaats van dat het je overkomt bij een deploy.
   */
  async scheduled(event: ScheduledController, env: Env, ctx: ExecutionContext): Promise<void> {
    setPlatformWaitUntil((task) => ctx.waitUntil(task));

    const eigenaar = env.CRON_OWNER ?? 'vercel';
    if (eigenaar !== 'cloudflare') {
      console.log(`[cron] ${event.cron} overgeslagen: CRON_OWNER staat op "${eigenaar}".`);
      return;
    }

    const secret = env.CRON_SECRET;
    if (!secret) {
      console.error('[cron] CRON_SECRET ontbreekt — overgeslagen.');
      return;
    }

    // De handlers controleren zelf de Authorization-header; dat is dezelfde
    // afscherming als op Vercel en die blijft hier ongewijzigd gelden.
    const path = event.cron === '0 13 * * *' ? '/api/reminders' : '/api/reconcile-orders';
    const request = new Request(`https://vernast-bouwdrogers.be${path}`, {
      headers: { authorization: `Bearer ${secret}` },
    });

    const handler = ROUTES[path].GET;
    if (!handler) return;
    const response = await handler(request);
    console.log(`[cron] ${event.cron} ${path} → ${response.status}`);
  },
};

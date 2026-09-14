// Vercel-routeregels uitvoeren op Cloudflare Workers.
//
// WAAROM DIT `vercel.json` LEEST IN PLAATS VAN EEN EIGEN CONFIG
// Tijdens de migratie draaien beide platforms naast elkaar: Vercel serveert de
// echte klanten, Cloudflare wordt ernaast opgebouwd. Twee configuratiebestanden
// die hetzelfde moeten zeggen lopen gegarandeerd uit elkaar — iemand voegt een
// redirect toe aan `vercel.json` en vergeet de Cloudflare-kant, en dat merk je
// pas ná de DNS-switch. Daarom is er maar één bestand en interpreteert deze
// module het. Valt Vercel er straks uit, dan blijft `vercel.json` staan als
// routeringsbron; alleen het `functions`/`git`-blok wordt dan dode letter.
//
// WAT VERCEL DOET, IN DEZE VOLGORDE (en dus wat hier nagebouwd is)
//   1. trailingSlash-normalisatie  → 308
//   2. redirects                   → 307/308
//   3. bestandssysteem (dist/ + api/)
//   4. rewrites                    → interne rewrite of proxy
//   5. 404
// De volgorde is niet cosmetisch: rewrites komen ná het bestandssysteem, en
// daarom eet de catch-all `/(admin|…)/:path*` → `/app.html` de echte bestanden
// in `/assets/` niet op.

import { pathToRegexp, type Key } from 'path-to-regexp';
import vercelConfig from '../vercel.json';

export interface RedirectRule {
  source: string;
  destination: string;
  permanent?: boolean;
}

export interface RewriteRule {
  source: string;
  destination: string;
}

export interface HeaderRule {
  source: string;
  headers: Array<{ key: string; value: string }>;
}

interface CompiledRule<T> {
  rule: T;
  regexp: RegExp;
  keys: Key[];
}

/**
 * Vercel gebruikt path-to-regexp v6 voor `source`-patronen, inclusief naamloze
 * groepen als `/(.*)` en alternatieven als `/:prefix(admin|agenda)/:path*`.
 * Door dezelfde library te gebruiken in plaats van een eigen regex-vertaling
 * zijn de randgevallen per definitie gelijk — een zelfgeschreven compiler wijkt
 * altijd ergens af, en dat merk je op één obscure route na de switch.
 */
/**
 * Eén vorm die Vercel accepteert en path-to-regexp v6 weigert.
 *
 * `/pages/td-:slug*` — een repeat-parameter met een tekstprefix bínnen het
 * segment. v6 gooit daarop "Can not repeat 'slug' without a prefix and suffix"
 * (het ziet `-` niet als prefix, alleen `/`), en dat gebeurt bij het laden van
 * de module: de deploy faalt, de site niet. Vercel accepteert het wel.
 *
 * Wat Vercel er dan mee doet, gemeten op de live site (14-09-2026):
 *
 *   /pages/td-abc       → match      (slug = "abc")
 *   /pages/td-          → match      (slug = "")
 *   /pages/td           → GEEN match (de streep is verplicht)
 *   /pages/td-abc/def   → GEEN match (valt door naar /pages/:slug*)
 *
 * Dat is precies "de rest van dít segment, mag leeg zijn" — dus `[^/]*`, niet
 * de meer-segmenten-betekenis die `*` heeft als de parameter een heel segment
 * beslaat. Die tweede vorm (`/pages/:slug*`) blijft ongemoeid: daar doet v6
 * hetzelfde als Vercel, inclusief het matchen van `/pages` zonder segment.
 *
 * Zes van de vijftig redirects hebben deze vorm; ze vangen samen de oude
 * Shopify-productpagina's af.
 */
function normalizeSource(source: string): string {
  return source.replace(/([^/:])(:[A-Za-z_][A-Za-z0-9_]*)\*/g, '$1$2([^/]*)');
}

function compile<T extends { source: string }>(rules: T[]): Array<CompiledRule<T>> {
  return rules.map((rule) => {
    const keys: Key[] = [];
    const regexp = pathToRegexp(normalizeSource(rule.source), keys);
    return { rule, regexp, keys };
  });
}

const config = vercelConfig as {
  trailingSlash?: boolean;
  redirects?: RedirectRule[];
  rewrites?: RewriteRule[];
  headers?: HeaderRule[];
};

const redirects = compile(config.redirects ?? []);
const rewrites = compile(config.rewrites ?? []);
const headers = compile(config.headers ?? []);

export type MatchParams = Record<string, string>;

function matchOne<T>(compiled: Array<CompiledRule<T>>, pathname: string): { rule: T; params: MatchParams } | null {
  for (const { rule, regexp, keys } of compiled) {
    const match = regexp.exec(pathname);
    if (!match) continue;

    const params: MatchParams = {};
    keys.forEach((key, index) => {
      const value = match[index + 1];
      if (value === undefined) return;
      // Naamloze groepen krijgen van path-to-regexp een numerieke naam (0, 1, …).
      // Vercel adresseert die in een destination als `$1`; benoemde groepen als
      // `:naam`. Beide vormen worden hier ondersteund.
      params[String(key.name)] = value;
    });
    return { rule, params };
  }
  return null;
}

/**
 * Vult `:naam`, `:naam*` en `$1` in een destination in.
 *
 * Let op de volgorde van vervanging: `:path*` moet vóór `:path` behandeld
 * worden, anders blijft er een losse `*` achter in de URL en krijg je een 404
 * die er als een routeringsfout uitziet in plaats van een substitutiefout.
 *
 * En let op de nummering: een naamloze groep heet bij path-to-regexp `0`, maar
 * Vercel adresseert diezelfde groep als `$1`. Eén-op-één overnemen laat `$1`
 * dus naar de tweede groep wijzen, of naar niets. Vandaag gebruikt geen enkele
 * destination in `vercel.json` deze vorm — dit is er zodat de eerste die dat
 * wél doet niet stil de verkeerde URL krijgt.
 */
/**
 * Plakt de querystring van het origineel achter een bestemming, zonder
 * parameters te overschrijven die de bestemming zelf al meebrengt.
 */
function appendQuery(destination: string, search: string): string {
  if (!search) return destination;
  const [pad, eigen] = destination.split('?', 2);
  if (!eigen) return `${pad}${search}`;
  const samen = new URLSearchParams(search);
  for (const [k, v] of new URLSearchParams(eigen)) samen.set(k, v);
  return `${pad}?${samen.toString()}`;
}

function substitute(destination: string, params: MatchParams): string {
  // Werk vanuit de placeholders die in de BESTEMMING staan, niet vanuit de
  // gevonden params. Een eerdere versie veegde ná het invullen alles weg wat
  // nog op een placeholder leek, en verminkte daarmee klantwaarden: een
  // bestandsnaam als `a:b.jpg` werd `a.jpg`, zonder foutmelding.
  //
  // Let op de volgorde binnen één naam: `:path*` moet vóór `:path` behandeld
  // worden, anders blijft er een losse `*` achter in de URL en krijg je een 404
  // die er als een routeringsfout uitziet in plaats van een substitutiefout.
  // Langere namen eerst, zodat `:pathExtra` niet door `:path` wordt opgegeten.
  const gevraagd = [...destination.matchAll(/:([A-Za-z_][A-Za-z0-9_]*)\*?/g)]
    .map((m) => m[1])
    .sort((a, b) => b.length - a.length);

  let out = destination;
  for (const naam of gevraagd) {
    // Een optionele parameter die niets ving komt niet in `params` voor — dan
    // hoort de placeholder te verdwijnen, niet te blijven staan. Anders
    // proxyde `/bouwdroger-img` naar een letterlijke `/:path*`.
    const waarde = params[naam] ?? '';
    out = out.split(`:${naam}*`).join(waarde);
    out = out.split(`:${naam}`).join(waarde);
  }

  // Naamloze groepen: `0` hier is `$1` bij Vercel. Eén-op-één overnemen laat
  // `$1` naar de tweede groep wijzen, of naar niets.
  for (const naam of Object.keys(params)) {
    if (/^\d+$/.test(naam)) {
      out = out.split(`$${Number(naam) + 1}`).join(params[naam] ?? '');
    }
  }

  // Niet-ingevulde optionele segmenten laten een dubbele slash achter
  // (`/realisaties//`), wat een aparte URL is voor caches en crawlers.
  return out.replace(/([^:])\/{2,}/g, '$1/');
}

export interface RedirectMatch {
  location: string;
  status: 307 | 308;
}

export function matchRedirect(url: URL): RedirectMatch | null {
  const found = matchOne(redirects, url.pathname);
  if (!found) return null;

  const destination = substitute(found.rule.destination, found.params);
  // Ook een sprong naar een ander domein houdt de querystring vast. De drie
  // externe redirects gaan naar de merksites (/vochtinspectie, /muurinjectie,
  // /schilderwerken) en dat zijn juist de landingspagina's van advertenties —
  // zonder `gclid`/`utm` is die klik daar niet meer toe te wijzen. Een
  // destination die zelf al parameters draagt wint; die is expliciet bedoeld.
  const location = appendQuery(destination, url.search);

  return { location, status: found.rule.permanent === false ? 307 : 308 };
}

export interface RewriteMatch {
  destination: string;
  params: MatchParams;
}

export function matchRewrite(url: URL): RewriteMatch | null {
  const found = matchOne(rewrites, url.pathname);
  if (!found) return null;
  return { destination: substitute(found.rule.destination, found.params), params: found.params };
}

/**
 * Alle header-blokken die op dit pad matchen, in volgorde van `vercel.json`.
 * Vercel past ze allemaal toe (latere sleutels overschrijven eerdere), dus dit
 * stopt niet bij de eerste match.
 */
export function headersFor(pathname: string): Headers {
  const out = new Headers();
  for (const { rule, regexp } of headers) {
    if (!regexp.test(pathname)) continue;
    for (const { key, value } of rule.headers) out.set(key, value);
  }
  return out;
}

export const trailingSlash = config.trailingSlash ?? false;

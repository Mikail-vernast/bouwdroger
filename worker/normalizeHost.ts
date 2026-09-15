/**
 * De canonieke hostnaam, of null als de host al goed is.
 *
 * Deze site draait op het kale domein; `www` stuurt door. Bij schilderwerken is
 * het net andersom. Vercel regelde dat in de domeininstellingen van het
 * project, buiten `vercel.json` om — die regel staat dus nergens in deze repo
 * en zou bij de overstap stil wegvallen. Gevolg: elke pagina met een 200 op
 * twee hostnamen, en Google kiest dan zelf welke hij indexeert.
 *
 * Gemeten op de live Vercel-site (15-09-2026):
 *   www.vernast-bouwdrogers.be/calculator → 308 vernast-bouwdrogers.be/calculator
 *
 * Het pad blijft daarbij ongemoeid: normalisatie en redirects gebeuren pas op
 * de canonieke host, in een tweede hop. Daarom staat dit vóór alles.
 *
 * Alleen het eigen domein wordt omgeleid. `*.workers.dev` blijft bereikbaar,
 * anders is de Worker niet meer los te testen vóór een DNS-wissel. Een host die
 * alleen op de naam lijkt (`vernast-bouwdrogers.be.evil.com`) valt er niet
 * onder — dezelfde suffix-val die `guardKeyMode` afvangt.
 */
export function normalizeHost(url: URL, canoniek: string | undefined): string | null {
  if (!canoniek || url.hostname === canoniek) return null;

  const kaal = canoniek.replace(/^www\./, '');
  if (url.hostname !== kaal && url.hostname !== `www.${kaal}`) return null;

  const doel = new URL(url);
  doel.hostname = canoniek;
  return doel.toString();
}

/**
 * De drie talen van de site en hoe je ze uit een pad haalt.
 *
 * Nederlands staat zonder prefix (`/chape-drogen`), Frans en Engels onder
 * `/fr/…` en `/en/…`. Nederlands heeft bewust geen `/nl`: elke bestaande URL
 * met zijn posities in Google en de ~50 Shopify-redirects in vercel.json
 * blijven zo onaangeroerd.
 *
 * Draait aan beide kanten (browser én `api/`), dus geen `@/`-imports.
 */
export type Taal = "nl" | "fr" | "en";

export const TALEN: readonly Taal[] = ["nl", "fr", "en"] as const;

export const STANDAARD_TAAL: Taal = "nl";

/**
 * De talen die echt online staan. Engels komt erbij zodra zijn teksten klaar
 * zijn: tot dan bestaan er géén `/en`-routes. Een Engelse URL met Nederlandse
 * tekst zou Google als dubbele inhoud zien, en een klant die "English" kiest
 * kreeg toch Nederlands.
 */
export const ACTIEVE_TALEN: readonly Taal[] = ["nl", "fr"];

/** Het voorvoegsel van een taal in het pad: "" voor nl, "/fr" en "/en". */
export function prefix(taal: Taal): string {
  return taal === "nl" ? "" : `/${taal}`;
}

/** De taal van een pad: `/fr/…` is Frans, `/en/…` Engels, de rest Nederlands. */
export function taalUitPad(pad: string): Taal {
  const eerste = pad.split("/")[1];
  return eerste === "fr" || eerste === "en" ? eerste : "nl";
}

/** Het pad zonder taalprefix: `/fr/sechage-chape` → `/sechage-chape`. */
export function zonderPrefix(pad: string): string {
  const taal = taalUitPad(pad);
  if (taal === "nl") return pad || "/";
  const rest = pad.slice(prefix(taal).length);
  return rest === "" ? "/" : rest;
}

/** `lang`-attribuut van `<html>` en `hreflang`. */
export const HTML_LANG: Record<Taal, string> = { nl: "nl-BE", fr: "fr-BE", en: "en" };

/** `og:locale`. */
export const OG_LOCALE: Record<Taal, string> = { nl: "nl_BE", fr: "fr_BE", en: "en_GB" };

/** Locale voor `toLocaleString` (bedragen, datums). */
export const NUMBER_LOCALE: Record<Taal, string> = { nl: "nl-BE", fr: "fr-BE", en: "en-BE" };

export function isTaal(waarde: unknown): waarde is Taal {
  return waarde === "nl" || waarde === "fr" || waarde === "en";
}

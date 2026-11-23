/**
 * Adressuggesties voor het vraagformulier, uit het officiële Vlaamse
 * adressenregister (Digitaal Vlaanderen, "Geolocation" v4).
 *
 * Waarom deze dienst: gratis, zonder sleutel, antwoordt rechtstreeks aan de
 * browser (`access-control-allow-origin: *`) en steunt op hetzelfde register
 * als de overheid. Hij dekt Vlaanderen en Brussel; een Waals adres krijgt
 * gewoon geen suggestie en wordt met de hand ingevuld.
 *
 * Twee aanroepen:
 *  - `Suggestion` tijdens het typen → "Antwerpsestraat 5, 2640 Mortsel" of,
 *    zonder nummer, "Kerkstraat, Aalst".
 *  - `Location` na een keuze → hetzelfde adres in losse velden, mét de
 *    postcode die een straat-zonder-nummer weglaat.
 *
 * Elke fout (offline, time-out, CSP, dienst plat) wordt "niets gevonden": de
 * zoeker helpt alleen, hij houdt het versturen nooit tegen.
 */

const BASE = "https://geo.api.vlaanderen.be/geolocation/v4";

export interface Adres {
  straat: string;
  nr: string;
  postcode: string;
  gemeente: string;
}

/** Onder drie tekens matcht een straatnaam duizenden straten. */
export const MIN_ZOEK = 3;

export async function suggestAddresses(query: string, signal?: AbortSignal): Promise<string[]> {
  const q = query.trim();
  if (q.length < MIN_ZOEK) return [];
  try {
    const url = `${BASE}/Suggestion?c=6&q=${encodeURIComponent(q)}`;
    const response = await fetch(url, { signal });
    if (!response.ok) return [];
    const data = (await response.json()) as { SuggestionResult?: unknown };
    return Array.isArray(data.SuggestionResult)
      ? data.SuggestionResult.filter((item): item is string => typeof item === "string")
      : [];
  } catch {
    return [];
  }
}

interface LocationResult {
  Municipality?: string | null;
  Zipcode?: string | null;
  Thoroughfarename?: string | null;
  Housenumber?: string | null;
}

/** Zet een gekozen suggestie om in velden; valt terug op het label zelf. */
export async function lookupAddress(label: string, signal?: AbortSignal): Promise<Adres> {
  const fallback = parseSuggestion(label);
  try {
    const url = `${BASE}/Location?c=1&q=${encodeURIComponent(label)}`;
    const response = await fetch(url, { signal });
    if (!response.ok) return fallback;
    const data = (await response.json()) as { LocationResult?: LocationResult[] };
    const hit = data.LocationResult?.[0];
    if (!hit) return fallback;
    return {
      straat: hit.Thoroughfarename || fallback.straat,
      nr: hit.Housenumber || fallback.nr,
      postcode: hit.Zipcode || fallback.postcode,
      gemeente: hit.Municipality || fallback.gemeente,
    };
  } catch {
    return fallback;
  }
}

/**
 * "Antwerpsestraat 5, 2640 Mortsel" → alle vier de velden;
 * "Kerkstraat, Aalst" → straat en gemeente, zonder nummer of postcode.
 */
export function parseSuggestion(label: string): Adres {
  const [links = "", rechts = ""] = label.split(",").map((part) => part.trim());
  const straatMatch = links.match(/^(.*?)(?:\s+(\d+[A-Za-z0-9/-]*))?$/);
  const plaatsMatch = rechts.match(/^(?:(\d{4})\s+)?(.*)$/);
  return {
    straat: straatMatch?.[1]?.trim() ?? links,
    nr: straatMatch?.[2] ?? "",
    postcode: plaatsMatch?.[1] ?? "",
    gemeente: plaatsMatch?.[2]?.trim() ?? "",
  };
}

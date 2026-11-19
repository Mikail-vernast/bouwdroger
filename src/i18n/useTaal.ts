import { useCallback, useSyncExternalStore } from "react";
import { useLocation } from "react-router-dom";
import { NUMBER_LOCALE, type Taal } from "./taal";
import { taalUitPad } from "./taal";
import { vertaalPad } from "./paden";

/**
 * De taal van de huidige pagina, uit de URL. Geen context of provider nodig:
 * het pad ís de bron, ook tijdens het prerenderen.
 */
export function useTaal(): Taal {
  return taalUitPad(useLocation().pathname);
}

/**
 * Teksten van een component in elke taal. Engels is optioneel zolang die taal
 * niet online staat (zie `ACTIEVE_TALEN`); ontbreekt hij, dan valt de component
 * terug op Nederlands — maar zonder `/en`-routes komt niemand daar.
 */
export type Copy<T> = { nl: T; fr: T; en?: T };

export function kies<T>(copy: Copy<T>, taal: Taal): T {
  return copy[taal] ?? copy.nl;
}

/** `const t = useCopy(COPY)` — de teksten in de taal van de pagina. */
export function useCopy<T>(copy: Copy<T>): T {
  return kies(copy, useTaal());
}

/**
 * Zet een Nederlands pad om naar de taal van de pagina:
 * `const lp = useLokaalPad(); <Link to={lp("/chape-drogen")}>`.
 *
 * Bestaat de pagina niet in die taal, dan blijft het Nederlandse pad staan.
 * Dat is een bewuste terugval: een werkende link naar de Nederlandse pagina is
 * beter dan een 404, en `audit-seo.mjs` meldt het zodat het niet ongemerkt blijft.
 */
export function useLokaalPad(): (nlPad: string) => string {
  const taal = useTaal();
  return useCallback((nlPad: string) => lokaalPad(nlPad, taal), [taal]);
}

export function lokaalPad(nlPad: string, taal: Taal): string {
  if (taal === "nl") return nlPad;
  return vertaalPad(nlPad, taal) ?? nlPad;
}

/** Bedrag in de notatie van de taal: `29,00 €` (fr-BE), `€ 29,00` (nl-BE). */
export function formatEuro(bedrag: number, taal: Taal, decimalen = 2): string {
  return bedrag.toLocaleString(NUMBER_LOCALE[taal], {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: decimalen,
    maximumFractionDigits: decimalen,
  });
}

/* ------------------------------------------------------------------ */
/* Voorkeur uit de keuzepopup: taal, particulier/bedrijf en land.       */
/* ------------------------------------------------------------------ */

export type Klant = "particulier" | "bedrijf";

export interface Voorkeur {
  taal: Taal;
  klant: Klant;
  /** ISO-landcode van de werf: BE, NL, LU, FR of XX (ander land). */
  land: string;
}

const SLEUTEL = "vernast.voorkeur";
const luisteraars = new Set<() => void>();

/*
  `localStorage` kan ontbreken of gooien (privévenster, geblokkeerde cookies).
  Dan werkt alles nog, alleen zonder geheugen: de popup komt dan bij elk bezoek.
*/
function lees(): Voorkeur | null {
  try {
    const ruw = localStorage.getItem(SLEUTEL);
    if (!ruw) return null;
    const v = JSON.parse(ruw) as unknown;
    if (v && typeof v === "object" && "klant" in v && "taal" in v) return v as Voorkeur;
  } catch {
    /* geen geheugen beschikbaar */
  }
  return null;
}

let cache: Voorkeur | null | undefined;
function snapshot(): Voorkeur | null {
  if (cache === undefined) cache = lees();
  return cache;
}

export function bewaarVoorkeur(v: Voorkeur): void {
  cache = v;
  try {
    localStorage.setItem(SLEUTEL, JSON.stringify(v));
  } catch {
    /* zie lees() */
  }
  luisteraars.forEach((f) => f());
}

function abonneer(f: () => void) {
  luisteraars.add(f);
  return () => luisteraars.delete(f);
}

/**
 * De bewaarde voorkeur, of `null` als de bezoeker nog niets koos.
 *
 * Tijdens het prerenderen en de hydratie is dat altijd `null` (de server weet
 * niets van localStorage). React rendert daarna meteen opnieuw met de echte
 * waarde — zo klopt de geprerenderde HTML en is er geen hydratiefout.
 */
export function useVoorkeur(): Voorkeur | null {
  return useSyncExternalStore(abonneer, snapshot, () => null);
}

/**
 * Particulier of bedrijf. Zonder keuze: particulier — prijzen voor consumenten
 * horen in België btw-inclusief getoond te worden.
 */
export function useKlant(): Klant {
  return useVoorkeur()?.klant ?? "particulier";
}

const BTW = 0.21;

/**
 * Een catalogusbedrag (altijd excl. btw) zoals deze bezoeker het moet zien.
 * Geeft het bedrag en het label terug; het label is al vertaald.
 *
 * Alleen weergave: wat er betaald wordt, rekenen `api/checkout.ts` en
 * `api/afhaal-checkout.ts` opnieuw uit, zoals altijd.
 */
export function useToonBedrag(): (excl: number) => { bedrag: number; label: string; tekst: string } {
  const klant = useKlant();
  const taal = useTaal();
  return useCallback(
    (excl: number) => {
      const bedrag = klant === "bedrijf" ? excl : Math.round(excl * (1 + BTW) * 100) / 100;
      const label = BTW_LABEL[taal][klant];
      return { bedrag, label, tekst: formatEuro(bedrag, taal) };
    },
    [klant, taal],
  );
}

export const BTW_LABEL: Record<Taal, Record<Klant, string>> = {
  nl: { particulier: "incl. btw", bedrijf: "excl. btw" },
  fr: { particulier: "TVAC", bedrijf: "HTVA" },
  en: { particulier: "incl. VAT", bedrijf: "excl. VAT" },
};

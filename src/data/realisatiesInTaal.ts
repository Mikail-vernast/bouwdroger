import {
  REALISATIES,
  REALISATIE_SOORTEN,
  type Realisatie,
  type RealisatieSoort,
} from "./realisaties";
import type { Taal } from "../i18n/taal";

/**
 * De realisaties in de taal van de pagina.
 *
 * De Franse teksten (`realisaties.fr.ts`, ruim 200 kB) zitten niet in de chunk van
 * wie de Nederlandse pagina's opent: ze komen er pas bij met een dynamische
 * `import()` op een Franse route. Maar een import die pas na de mount laadt,
 * is voor het prerenderen te laat — de HTML zou dan Nederlands zijn, en net die
 * HTML lezen de AI-antwoordmachines. Daarom **schorst** een opvraging in het
 * Frans (Suspense) zolang het bestand er niet is:
 *
 * - bij de build rendert vite-react-ssg met `renderToPipeableStream` en wacht
 *   op `onAllReady`, dus de geprerenderde HTML bevat de Franse tekst;
 * - bij de hydratie houdt React de server-HTML van de `<Suspense>`-grens vast
 *   tot het bestand binnen is, dus er flitst niets naar het Nederlands.
 *
 * Gevolg: wie dit in het Frans aanroept, doet dat **tijdens de render en binnen
 * een `<Suspense>`**. Zonder grens erboven gooit React een fout bij een
 * navigatie. Het Nederlands schorst nooit en is gewoon synchroon.
 */

type FransBestand = typeof import("./realisaties.fr");

let frans: FransBestand | null = null;
let belofte: Promise<FransBestand> | null = null;

/** Laadt het Franse bestand; daarna is elke opvraging synchroon. */
export function laadRealisatiesFr(): Promise<FransBestand> {
  belofte ??= import("./realisaties.fr").then((m) => (frans = m));
  return belofte;
}

function fransOfSchors(): FransBestand {
  if (frans) return frans;
  // Het Suspense-protocol: een belofte gooien laat React wachten en opnieuw
  // renderen zodra ze vervuld is.
  throw laadRealisatiesFr();
}

/** Alle realisaties, in dezelfde volgorde als `REALISATIES`. */
export function realisatiesInTaal(taal: Taal): Realisatie[] {
  return taal === "fr" ? fransOfSchors().REALISATIES_FR : REALISATIES;
}

/** Eén realisatie op zijn (Nederlandse) slug, in de gevraagde taal. */
export function realisatieInTaal(slug: string, taal: Taal): Realisatie | undefined {
  return realisatiesInTaal(taal).find((r) => r.slug === slug);
}

/** De labels van de zijfilter. */
export function realisatieSoortenInTaal(taal: Taal): { key: RealisatieSoort; label: string }[] {
  return taal === "fr" ? fransOfSchors().REALISATIE_SOORTEN_FR : REALISATIE_SOORTEN;
}

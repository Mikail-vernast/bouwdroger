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
 * De Franse en Engelse teksten (`realisaties.fr.ts`, `realisaties.en.ts`, elk
 * ruim 200 kB) zitten niet in de chunk van wie de Nederlandse pagina's opent:
 * ze komen er pas bij met een dynamische `import()` op een route in die taal.
 * Maar een import die pas na de mount laadt, is voor het prerenderen te laat — de HTML zou dan Nederlands zijn, en net die
 * HTML lezen de AI-antwoordmachines. Daarom **schorst** een opvraging in het
 * Frans of Engels (Suspense) zolang het bestand er niet is:
 *
 * - bij de build rendert vite-react-ssg met `renderToPipeableStream` en wacht
 *   op `onAllReady`, dus de geprerenderde HTML bevat de Franse of Engelse tekst;
 * - bij de hydratie houdt React de server-HTML van de `<Suspense>`-grens vast
 *   tot het bestand binnen is, dus er flitst niets naar het Nederlands.
 *
 * Gevolg: wie dit in het Frans of Engels aanroept, doet dat **tijdens de
 * render en binnen een `<Suspense>`**. Zonder grens erboven gooit React een fout bij een
 * navigatie. Het Nederlands schorst nooit en is gewoon synchroon.
 */

type FransBestand = typeof import("./realisaties.fr");
type EngelsBestand = typeof import("./realisaties.en");

let frans: FransBestand | null = null;
let fransBelofte: Promise<FransBestand> | null = null;
let engels: EngelsBestand | null = null;
let engelsBelofte: Promise<EngelsBestand> | null = null;

/** Laadt het Franse bestand; daarna is elke opvraging synchroon. */
export function laadRealisatiesFr(): Promise<FransBestand> {
  fransBelofte ??= import("./realisaties.fr").then((m) => (frans = m));
  return fransBelofte;
}

/** Laadt het Engelse bestand; daarna is elke opvraging synchroon. */
export function laadRealisatiesEn(): Promise<EngelsBestand> {
  engelsBelofte ??= import("./realisaties.en").then((m) => (engels = m));
  return engelsBelofte;
}

/*
  Het Suspense-protocol: een belofte gooien laat React wachten en opnieuw
  renderen zodra ze vervuld is. Elke taal heeft zijn eigen bestand en zijn
  eigen import(), zodat een Franse bezoeker het Engels niet meedownloadt en
  omgekeerd.
*/
function fransOfSchors(): FransBestand {
  if (frans) return frans;
  throw laadRealisatiesFr();
}

function engelsOfSchors(): EngelsBestand {
  if (engels) return engels;
  throw laadRealisatiesEn();
}

/** Alle realisaties, in dezelfde volgorde als `REALISATIES`. */
export function realisatiesInTaal(taal: Taal): Realisatie[] {
  if (taal === "fr") return fransOfSchors().REALISATIES_FR;
  if (taal === "en") return engelsOfSchors().REALISATIES_EN;
  return REALISATIES;
}

/** Eén realisatie op zijn (Nederlandse) slug, in de gevraagde taal. */
export function realisatieInTaal(slug: string, taal: Taal): Realisatie | undefined {
  return realisatiesInTaal(taal).find((r) => r.slug === slug);
}

/** De labels van de zijfilter. */
export function realisatieSoortenInTaal(taal: Taal): { key: RealisatieSoort; label: string }[] {
  if (taal === "fr") return fransOfSchors().REALISATIE_SOORTEN_FR;
  if (taal === "en") return engelsOfSchors().REALISATIE_SOORTEN_EN;
  return REALISATIE_SOORTEN;
}

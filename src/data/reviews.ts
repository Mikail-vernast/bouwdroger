/**
 * De beoordelingen van Vernast, op één plek.
 *
 * Stonden overgetypt in `V3Reviews` (homepage) en in `OzonbehandelingPage`, en
 * de regiopagina's werden de derde plek. Twee kopieën liepen al uit de pas: op
 * de homepage staan er vijf, op /ozonbehandeling drie, en een correctie aan een
 * citaat moest je op beide plekken onthouden. Nu leest elke pagina deze lijst.
 *
 * Letterlijk overgenomen uit de reviewlijst in het portaal (`Vernast-v2.0`,
 * `TestimonialsSection`). **Niet herschrijven** — een bewerkte review is geen
 * review meer.
 *
 * Twee selectieregels, en houd ze allebei aan:
 *
 * 1. **Alleen reviews waarvan de tekst zelf geen ander vak noemt.** Wie over
 *    vochtproblemen, muurinjectie of schilderwerk schrijft hoort op de site van
 *    dát vak thuis. Van de vijftien beoordelingen blijven er zo vijf over.
 * 2. **Een dienstlabel alleen als de review het zelf zegt.** Dat is nu één keer
 *    het geval: Matt Demyttenaere noemt de droger.
 *
 * **Geen gemiddelde en geen aantal.** Het ontwerp toonde "4,8" en "2500+
 * beoordelingen"; die 2500 is op de Vernast-site het aantal *tevreden klanten*,
 * geen reviewaantal, en het gemiddelde was van geen bron hard te maken. Daarom
 * staat `REVIEWS` in `src/lib/site.ts` op `null` en guarden de hero, de
 * statistiekbalk en `aggregateRating` daarop. Zie de toelichting daar.
 */

export interface Review {
  /** Zoals de klant zelf tekende bij Google of Solvari — niet herschreven. */
  name: string;
  initials: string;
  /** Letterlijk overgenomen. */
  text: string;
  rating: number;
  date: string;
  source: "Google" | "Solvari";
  /**
   * Alleen ingevuld wanneer de review zelf zegt om welk werk het ging. Staat er
   * niets, dan staat er onder de naam ook niets.
   */
  service?: string;
  /** Gaat expliciet over een droger — krijgt de grote kaart vooraan. */
  featured?: boolean;
}

export const REVIEWS_LIST: Review[] = [
  {
    name: "Matt Demyttenaere",
    initials: "MD",
    text: "Snelle respons en dezelfde dag nog een droger geïnstalleerd. Top service!",
    rating: 5,
    date: "okt 2023",
    source: "Google",
    service: "Bouwdroger geïnstalleerd",
    featured: true,
  },
  {
    name: "Ingrid Janssens",
    initials: "IJ",
    text: "Zeer goede service en flexibiliteit. Werken zijn uitstekend uitgevoerd. Vriendelijk personeel. Firma zeker aan te raden.",
    rating: 5,
    date: "mrt 2025",
    source: "Google",
  },
  {
    name: "Leo",
    initials: "LO",
    text: "We zijn bijzonder tevreden. Het personeel is professioneel én vriendelijk. Het werk is grondig uitgevoerd. Bovendien werd het achteraf goed opgevolgd.",
    rating: 5,
    date: "sep 2024",
    source: "Solvari",
  },
  {
    name: "Yolande",
    initials: "YL",
    text: "De firma Vernast heeft ons goed geholpen tijdens de renovatie van een oude loods. De samenwerking is bijzonder vlot en volledig volgens de afspraak verlopen.",
    rating: 5,
    date: "jan 2025",
    source: "Google",
  },
  {
    name: "Isabel De Maesschalck",
    initials: "IM",
    text: "Professional company, good communication. Very friendly lady Sumeyye made a clear quote, explained well and the price was correct. Quote was done on the spot, this was very efficient.",
    rating: 5,
    date: "mei 2025",
    source: "Google",
  },
];

/**
 * De eerste `aantal` beoordelingen, met de droger-review altijd vooraan.
 *
 * Een pagina die er drie toont, hoort niet toevallig de drie te krijgen die
 * nergens een droger noemen. `featured` eerst houdt dat vast, ook als er later
 * reviews bij komen of de volgorde in het portaal wijzigt.
 */
export function eersteReviews(aantal: number): Review[] {
  const eerst = REVIEWS_LIST.filter((review) => review.featured);
  const rest = REVIEWS_LIST.filter((review) => !review.featured);
  return [...eerst, ...rest].slice(0, aantal);
}

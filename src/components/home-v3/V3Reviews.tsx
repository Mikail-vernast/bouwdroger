import { GoogleIcon, StarIcon } from "./icons";

interface Review {
  /** Zoals de klant zelf tekende bij Google of Solvari — niet herschreven. */
  name: string;
  initials: string;
  /** Letterlijk overgenomen; een bewerkte review is geen review meer. */
  text: string;
  rating: number;
  date: string;
  source: "Google" | "Solvari";
  /**
   * Alleen ingevuld wanneer de review zelf zegt om welk werk het ging. Staat
   * er niets, dan staat er onder de naam ook niets — zie de toelichting.
   */
  service?: string;
  /** Gaat expliciet over een droger — krijgt de grote kaart vooraan. */
  featured?: boolean;
}

/**
 * Echte beoordelingen van Vernast, letterlijk overgenomen uit de reviewlijst
 * van het portaal (`Vernast-v2.0`, `TestimonialsSection`).
 *
 * **Waarom hier geen dienst onder de naam staat.** Eerder stond er bij elke
 * review een label — "Vochtbestrijding", "Vochtinspectie". Dat label kwam uit
 * de portaallijst, niet uit de review: de klant schreef het nergens. Op een
 * bouwdrogersite las het alsof deze mensen een droger huurden én alsof de
 * sectie over vochtbestrijding ging. Allebei mis.
 *
 * Daarom twee regels, en houd ze allebei aan:
 *
 * 1. **Alleen reviews waarvan de tekst zelf geen ander vak noemt.** Wie over
 *    vochtproblemen, muurinjectie, schimmel of schilderwerk schrijft, hoort
 *    hier niet — die hoort thuis op de site van dat vak. Van de vijftien
 *    beoordelingen blijven er zo vijf over.
 * 2. **Een dienstlabel alleen als de review het zelf zegt.** Dat is nu één
 *    keer het geval: Matt Demyttenaere noemt de droger, en krijgt daarom de
 *    grote kaart en als enige een label.
 *
 * Er is namelijk precies één beoordeling die een droger noemt. De rest hier
 * gaat over hoe Vernast werkt — snelheid, opvolging, afspraken — en dat is
 * waar ze voor staan. Herschrijven naar droging zou ze verzinnen.
 *
 * **Geen gemiddelde en geen aantal.** Het ontwerp toonde "4,8" en "gebaseerd
 * op 2500+ beoordelingen". Die 2500 is op de Vernast-site het aantal
 * *tevreden klanten*, geen reviewaantal, en het gemiddelde was van geen bron
 * hard te maken — precies waarom `REVIEWS` in src/lib/site.ts op `null` staat
 * en de hero, de statistiekbalk en `aggregateRating` daarop guarden.
 *
 * Komen er echte bouwdroger-reviews binnen, dan vervangen die deze vijf en
 * mag het label er bij elk van hen onder.
 */
const REVIEWS_LIST: Review[] = [
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
    text: "Professional company, good communication. Very friendly lady Sumeyye made a clear quote, explained well and the price was correct. Quote was done on the spot — this was very efficient.",
    rating: 5,
    date: "mei 2025",
    source: "Google",
  },
];

const Stars = ({ rating, size }: { rating: number; size?: number }) => (
  <div className="rv-stars" role="img" aria-label={`${rating} van de 5 sterren`}>
    {Array.from({ length: rating }).map((_, index) => (
      <StarIcon key={index} size={size} />
    ))}
  </div>
);

const ReviewCard = ({ review }: { review: Review }) => (
  <figure className={review.featured ? "rv-card rv-big" : "rv-card"}>
    <div className="rv-head">
      <Stars rating={review.rating} size={review.featured ? 16 : 14} />
      {review.source === "Google" ? (
        <GoogleIcon size={review.featured ? 20 : 17} />
      ) : (
        <span className="rv-src">{review.source}</span>
      )}
    </div>
    <blockquote>“{review.text}”</blockquote>
    <figcaption>
      <span className="rv-av" aria-hidden="true">
        {review.initials}
      </span>
      <span className="rv-who">
        <b>{review.name}</b>
        <small>
          {review.service ? `${review.service} · ` : ""}
          {review.date} · via {review.source}
        </small>
      </span>
    </figcaption>
  </figure>
);

const V3Reviews = () => (
  <section className="revs" id="reviews">
    <div className="wrap">
      <div className="sec-head mid">
        <span className="kick">Wat klanten zeggen</span>
        <h2 className="sec">Klanten gingen u voor.</h2>
        <p className="lede">
          Echte beoordelingen van Vernast, bij Google en Solvari — onbewerkt, met naam en datum.
        </p>
      </div>

      <div className="rv-grid">
        {REVIEWS_LIST.map((review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
      </div>
    </div>
  </section>
);

export default V3Reviews;

import { GoogleIcon, StarIcon } from "./icons";

interface Review {
  /** Zoals de klant zelf tekende bij Google of Solvari — niet herschreven. */
  name: string;
  initials: string;
  /** Letterlijk overgenomen; een bewerkte review is geen review meer. */
  text: string;
  rating: number;
  service: string;
  date: string;
  source: "Google" | "Solvari";
  /** Gaat expliciet over een droger — krijgt de grote kaart vooraan. */
  featured?: boolean;
}

/**
 * Echte beoordelingen van Vernast, letterlijk overgenomen uit de reviewlijst
 * van het Vernast-portaal (`Vernast-v2.0`, `TestimonialsSection`).
 *
 * **Eén review gaat over een droger**, en dat is geen keuze maar de hele
 * oogst: van de vijftien beoordelingen in die lijst noemt alleen die van Matt
 * Demyttenaere een droger. De rest gaat over vochtbestrijding, muurinjectie of
 * schilderwerken. Daarom staat die ene vooraan en groot, en zijn de andere
 * gekozen op wat er het dichtst bij ligt: vocht in huis. Verzin er geen bij —
 * komen er echte bouwdroger-reviews binnen, dan horen die hier boven aan de
 * lijst en kan de `featured` naar de nieuwste.
 *
 * **Geen gemiddelde en geen aantal.** Het ontwerp toonde "4,8" en "gebaseerd
 * op 2500+ beoordelingen". Dat tweede getal is op de Vernast-site het aantal
 * *tevreden klanten*, geen reviewaantal, en het eerste was van geen bron hard
 * te maken — precies waarom `REVIEWS` in src/lib/site.ts op `null` staat en de
 * hero, de statistiekbalk en `aggregateRating` daarop guarden. Een scoreblok
 * hier zou die beslissing langs de achterdeur terugdraaien. Komt het eigen
 * Google Business Profile er, dan hoort het blok bij `REVIEWS`, niet bij deze
 * lijst.
 *
 * De dienst staat bij elke naam omdat deze mensen Vernast over verschillende
 * diensten beoordeelden. Ze zonder meer als bouwdroger-reviews tonen zou
 * hetzelfde zijn als het cijfer dat eruit ging.
 */
const REVIEWS_LIST: Review[] = [
  {
    name: "Matt Demyttenaere",
    initials: "MD",
    text: "Snelle respons en dezelfde dag nog een droger geïnstalleerd. Top service!",
    rating: 5,
    service: "Bouwdroger geïnstalleerd",
    date: "okt 2023",
    source: "Google",
    featured: true,
  },
  {
    name: "Gizem Kilic",
    initials: "GK",
    text: "Ik ben zeer tevreden over de dienstverlening van Vernast. De vochtinspectie werd grondig en professioneel uitgevoerd, en alles werd duidelijk toegelicht. Absoluut een aanrader!",
    rating: 5,
    service: "Vochtinspectie",
    date: "jun 2025",
    source: "Google",
  },
  {
    name: "Steven Bormans",
    initials: "SB",
    text: "Uitstekende oplossing voor ons probleem met opstijgend vocht. Vernast heeft ook de voegen netjes hersteld. Aanrader!",
    rating: 5,
    service: "Opstijgend vocht",
    date: "nov 2023",
    source: "Google",
  },
  {
    name: "Ingrid Janssens",
    initials: "IJ",
    text: "Zeer goede service en flexibiliteit. Werken zijn uitstekend uitgevoerd. Vriendelijk personeel. Firma zeker aan te raden.",
    rating: 5,
    service: "Vochtbestrijding",
    date: "mrt 2025",
    source: "Google",
  },
  {
    name: "Leo",
    initials: "LO",
    text: "We zijn bijzonder tevreden. Het personeel is professioneel én vriendelijk. Het werk is grondig uitgevoerd. Bovendien werd het achteraf goed opgevolgd.",
    rating: 5,
    service: "Vochtbehandeling",
    date: "sep 2024",
    source: "Solvari",
  },
];

const Stars = ({ rating }: { rating: number }) => (
  <div className="rv-stars" role="img" aria-label={`${rating} van de 5 sterren`}>
    {Array.from({ length: rating }).map((_, index) => (
      <StarIcon key={index} />
    ))}
  </div>
);

const ReviewCard = ({ review }: { review: Review }) => (
  <figure className={review.featured ? "rv-card rv-big" : "rv-card"}>
    <div className="rv-head">
      <Stars rating={review.rating} />
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
          {review.service} · {review.date}
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
          Echte beoordelingen van Vernast, bij Google en Solvari — van een droger die dezelfde dag
          geplaatst werd tot vocht dat voorgoed weg is.
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

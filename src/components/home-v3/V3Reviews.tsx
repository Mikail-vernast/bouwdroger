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
}

/**
 * Echte beoordelingen van Vernast, letterlijk overgenomen uit de reviewlijst
 * van het Vernast-portaal (`Vernast-v2.0`, `TestimonialsSection`).
 *
 * Twee dingen staan hier bewust zo.
 *
 * **Geen gemiddelde en geen aantal.** De sectie in het ontwerp toonde "4,8" en
 * "gebaseerd op 2500+ beoordelingen". Dat tweede getal is op de Vernast-site
 * het aantal *tevreden klanten*, geen reviewaantal, en het eerste was van geen
 * bron hard te maken — precies waarom `REVIEWS` in src/lib/site.ts op `null`
 * staat en de hero, de statistiekbalk en `aggregateRating` daarop guarden. Een
 * scoreblok hier zou die beslissing langs de achterdeur terugdraaien. Komt het
 * eigen Google Business Profile er, dan hoort het blok bij `REVIEWS`, niet bij
 * deze lijst.
 *
 * **Niet als bouwdroger-reviews gepresenteerd.** Deze mensen beoordeelden
 * Vernast over verschillende diensten; de dienst staat daarom bij elke naam.
 * Ze toeschrijven aan Vernast Bouwdrogers alleen zou hetzelfde zijn als het
 * cijfer dat eruit ging.
 */
const REVIEWS_LIST: Review[] = [
  {
    name: "Matt Demyttenaere",
    initials: "MD",
    text: "Snelle respons en dezelfde dag nog een droger geïnstalleerd. Top service!",
    rating: 5,
    service: "Installatie",
    date: "okt 2023",
    source: "Google",
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

const V3Reviews = () => (
  <section className="revs" id="reviews">
    <div className="wrap">
      <div className="sec-head mid">
        <span className="kick">Wat klanten zeggen</span>
        <h2 className="sec">Klanten gingen u voor.</h2>
        <p className="lede">
          Echte beoordelingen van echte werven — van kelder tot gevel.
        </p>
      </div>

      <div className="rv-grid">
        <div className="rv-lead">
          <div className="rv-lead-top">
            <GoogleIcon size={22} />
            <span>Beoordelingen over Vernast</span>
          </div>
          <p>
            Bouwdroging is één van de diensten van Vernast. De beoordelingen hieronder gaan over
            het hele bedrijf — van een droger die dezelfde dag geplaatst werd tot vochtinspecties
            en behandelingen. Ze staan onder de naam van de klant, met de dienst erbij, zoals ze
            bij Google en Solvari verschenen.
          </p>
          <a
            className="btn btn-white"
            href="https://www.vernast.be/"
            target="_blank"
            rel="noopener"
          >
            Lees meer ervaringen op vernast.be
          </a>
        </div>

        {REVIEWS_LIST.map((review) => (
          <figure className="rv-card" key={review.name}>
            <div className="rv-head">
              <Stars rating={review.rating} />
              {review.source === "Google" ? (
                <GoogleIcon size={17} />
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
        ))}
      </div>
    </div>
  </section>
);

export default V3Reviews;

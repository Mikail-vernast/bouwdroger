import { GoogleIcon, StarIcon } from "./icons";
import { REVIEWS_LIST, type Review } from "@/data/reviews";
import { useCopy, type Copy } from "@/i18n/useTaal";

/*
  De reviews zelf blijven in de taal waarin de klant ze schreef: een vertaalde
  review is geen review meer (zie `src/data/reviews.ts`). Alleen wat eromheen
  staat volgt de taal van de pagina — ook de maand, want "okt 2023" is geen
  Frans. Het dienstlabel is van ons (zie `service` in reviews.ts) en vertaalt
  mee; een label zonder vertaling blijft zoals het is.
*/
const DIENST_FR: Record<string, string> = {
  "Bouwdroger geïnstalleerd": "Déshumidificateur de chantier installé",
};
const MAAND_FR: Record<string, string> = {
  jan: "janv.",
  feb: "févr.",
  mrt: "mars",
  apr: "avr.",
  mei: "mai",
  jun: "juin",
  jul: "juil.",
  aug: "août",
  sep: "sept.",
  okt: "oct.",
  nov: "nov.",
  dec: "déc.",
};

interface RevCopy {
  sterren: (rating: number) => string;
  datum: (date: string) => string;
  dienst: (service: string) => string;
  via: string;
  kick: string;
  h2: string;
  lede: string;
}

const COPY = {
  nl: {
    sterren: (rating) => `${rating} van de 5 sterren`,
    datum: (date) => date,
    dienst: (service) => service,
    via: "via",
    kick: "Wat klanten zeggen",
    h2: "Klanten gingen u voor.",
    lede: "Echte beoordelingen van Vernast, bij Google en Solvari. Onbewerkt, met naam en datum.",
  },
  fr: {
    sterren: (rating) => `${rating} étoiles sur 5`,
    datum: (date) => {
      const [maand, jaar] = date.split(" ");
      return MAAND_FR[maand] ? `${MAAND_FR[maand]} ${jaar}` : date;
    },
    dienst: (service) => DIENST_FR[service] ?? service,
    via: "via",
    kick: "Ce que disent nos clients",
    h2: "D'autres clients vous ont précédé.",
    lede: "De vrais avis sur Vernast, sur Google et Solvari. Non retouchés, avec nom et date. Les avis sont affichés dans leur langue d'origine.",
  },
} satisfies Copy<RevCopy>;

/*
  De beoordelingen en de twee selectieregels staan in `src/data/reviews.ts` —
  ze stonden hier én op /ozonbehandeling overgetypt, en de regiopagina's werden
  de derde plek.
*/

const Stars = ({ rating, size }: { rating: number; size?: number }) => {
  const t = useCopy(COPY);
  return (
    <div className="rv-stars" role="img" aria-label={t.sterren(rating)}>
      {Array.from({ length: rating }).map((_, index) => (
        <StarIcon key={index} size={size} />
      ))}
    </div>
  );
};

const ReviewCard = ({ review }: { review: Review }) => {
  const t = useCopy(COPY);
  return (
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
          {review.service ? `${t.dienst(review.service)} · ` : ""}
          {t.datum(review.date)} · {t.via} {review.source}
        </small>
      </span>
    </figcaption>
  </figure>
  );
};

const V3Reviews = () => {
  const t = useCopy(COPY);
  return (
  <section className="revs" id="reviews">
    <div className="wrap">
      <div className="sec-head mid">
        <span className="kick">{t.kick}</span>
        <h2 className="sec">{t.h2}</h2>
        <p className="lede">{t.lede}</p>
      </div>

      <div className="rv-grid">
        {REVIEWS_LIST.map((review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
      </div>
    </div>
  </section>
  );
};

export default V3Reviews;

import { GoogleIcon, StarIcon } from "./icons";
import { REVIEWS_LIST, type Review } from "@/data/reviews";

/*
  De beoordelingen en de twee selectieregels staan in `src/data/reviews.ts` —
  ze stonden hier én op /ozonbehandeling overgetypt, en de regiopagina's werden
  de derde plek.
*/

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
          Echte beoordelingen van Vernast, bij Google en Solvari. Onbewerkt, met naam en datum.
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

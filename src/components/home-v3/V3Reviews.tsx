import { useCallback, useEffect, useRef, useState } from "react";
import { GoogleIcon, StarIcon } from "./icons";
import { eersteReviews, REVIEWS_LIST, type Review } from "@/data/reviews";
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

/* Hetzelfde in het Engels: "Oct 2023". */
const DIENST_EN: Record<string, string> = {
  "Bouwdroger geïnstalleerd": "Construction dehumidifier installed",
};
const MAAND_EN: Record<string, string> = {
  jan: "Jan",
  feb: "Feb",
  mrt: "Mar",
  apr: "Apr",
  mei: "May",
  jun: "Jun",
  jul: "Jul",
  aug: "Aug",
  sep: "Sep",
  okt: "Oct",
  nov: "Nov",
  dec: "Dec",
};

interface RevCopy {
  sterren: (rating: number) => string;
  datum: (date: string) => string;
  dienst: (service: string) => string;
  via: string;
  kick: string;
  h2: string;
  lede: string;
  vorige: string;
  volgende: string;
  carrousel: string;
  naar: (n: number) => string;
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
    vorige: "Vorige beoordelingen",
    volgende: "Volgende beoordelingen",
    carrousel: "Beoordelingen van klanten",
    naar: (n) => `Naar beoordeling ${n}`,
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
    vorige: "Avis précédents",
    volgende: "Avis suivants",
    carrousel: "Avis de clients",
    naar: (n) => `Aller à l'avis ${n}`,
  },
  en: {
    sterren: (rating) => `${rating} out of 5 stars`,
    datum: (date) => {
      const [maand, jaar] = date.split(" ");
      return MAAND_EN[maand] ? `${MAAND_EN[maand]} ${jaar}` : date;
    },
    dienst: (service) => DIENST_EN[service] ?? service,
    via: "via",
    kick: "What customers say",
    h2: "Customers who went before you.",
    lede: "Genuine reviews of Vernast, on Google and Solvari. Unedited, with name and date. Reviews are shown in their original language.",
    vorige: "Previous reviews",
    volgende: "Next reviews",
    carrousel: "Customer reviews",
    naar: (n) => `Go to review ${n}`,
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

const Pijl = ({ kant }: { kant: "links" | "rechts" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kant === "links" ? <path d="M15 5 8 12l7 7" /> : <path d="m9 5 7 7-7 7" />}
  </svg>
);

/*
  De reviews staan in een spoor dat je doorbladert, niet in een raster dat ze
  allemaal tegelijk toont. Het blijft een gewone `overflow-x` met
  `scroll-snap`: zonder JavaScript is het spoor er en kun je het verschuiven,
  wat nodig is omdat deze pagina geprerenderd wordt en de antwoordmachines die
  HTML lezen zonder scripts uit te voeren. De knoppen en de bolletjes komen er
  na hydratie bovenop.

  Alle vijf de beoordelingen staan in de HTML -- er wordt niets bijgeladen. Dat
  is ook de hele voorraad: van de vijftien in het portaal gaan er tien over een
  ander vak (schilderwerk, muurinjectie, vochtbestrijding) en die horen op de
  site van dát vak. Zie de twee selectieregels in src/data/reviews.ts.
*/
const V3Reviews = () => {
  const t = useCopy(COPY);
  const spoor = useRef<HTMLDivElement>(null);
  const [positie, setPositie] = useState(0);
  const [eind, setEind] = useState(false);
  const reviews = eersteReviews(REVIEWS_LIST.length);

  /* De plaats van een kaart binnen het spoor. Niet `offsetLeft`: dat rekent
     vanaf de `offsetParent` -- hier de sectie, want die is positioned -- en
     niet vanaf het spoor. De eerste kaart stond daardoor op 220 in plaats van
     op 0 en elke vergelijking met `scrollLeft` was er evenveel naast. */
  const plaats = (el: HTMLElement, kaart: HTMLElement) =>
    kaart.getBoundingClientRect().left - el.getBoundingClientRect().left + el.scrollLeft;

  /* Welke kaart links staat, en of het spoor aan het einde is. */
  const meet = useCallback(() => {
    const el = spoor.current;
    if (!el) return;
    const kaarten = Array.from(el.children) as HTMLElement[];
    let dichtst = 0;
    let kleinste = Infinity;
    kaarten.forEach((kaart, i) => {
      const afstand = Math.abs(plaats(el, kaart) - el.scrollLeft);
      if (afstand < kleinste) {
        kleinste = afstand;
        dichtst = i;
      }
    });
    setPositie(dichtst);
    /* 2px speling: op een scherm met een fractionele devicePixelRatio komt
       scrollLeft een halve pixel tekort en bleef de volgende-knop aan staan. */
    setEind(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    const el = spoor.current;
    if (!el) return;
    meet();
    el.addEventListener("scroll", meet, { passive: true });
    window.addEventListener("resize", meet);
    return () => {
      el.removeEventListener("scroll", meet);
      window.removeEventListener("resize", meet);
    };
  }, [meet]);

  /* Eén klik verschuift een schermbreedte, niet één kaart: op een breed scherm
     staan er drie naast elkaar en dan voelt kaart-voor-kaart als haperen. */
  const blader = (richting: 1 | -1) => {
    const el = spoor.current;
    if (!el) return;
    el.scrollBy({ left: richting * el.clientWidth * 0.86, behavior: "smooth" });
  };

  const naarKaart = (i: number) => {
    const el = spoor.current;
    const kaart = el?.children[i] as HTMLElement | undefined;
    if (el && kaart) el.scrollTo({ left: plaats(el, kaart), behavior: "smooth" });
  };

  return (
  <section className="revs" id="reviews">
    <div className="wrap">
      <div className="sec-head mid">
        <span className="kick">{t.kick}</span>
        <h2 className="sec">{t.h2}</h2>
        <p className="lede">{t.lede}</p>
      </div>

      <div className="rv-spoor" ref={spoor} role="group" aria-label={t.carrousel}>
        {reviews.map((review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
      </div>

      <div className="rv-nav">
        <button type="button" className="rv-pijl" onClick={() => blader(-1)} disabled={positie === 0} aria-label={t.vorige}>
          <Pijl kant="links" />
        </button>
        <div className="rv-bollen">
          {reviews.map((review, i) => (
            <button
              key={review.name}
              type="button"
              className={i === positie ? "aan" : undefined}
              onClick={() => naarKaart(i)}
              aria-label={t.naar(i + 1)}
              aria-current={i === positie}
            />
          ))}
        </div>
        <button type="button" className="rv-pijl" onClick={() => blader(1)} disabled={eind} aria-label={t.volgende}>
          <Pijl kant="rechts" />
        </button>
      </div>
    </div>
  </section>
  );
};

export default V3Reviews;

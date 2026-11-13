import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { ArrowRightIcon } from "@/components/home-v3/icons";

export interface VerloopStap {
  /** Wie er aan zet is. Bepaalt de kleur van de zijkant en het label. */
  wie: "U" | "Vernast";
  titel: string;
  tekst: string;
}

/** Hoe lang één stap blijft staan voor hij vanzelf doorschuift. */
const WISSEL_MS = 7000;

/**
 * Het verloop van een schadegeval als schuivende kaarten in plaats van een
 * verticale tijdlijn.
 *
 * Waarom: de zeven stappen stonden onder elkaar en vulden anderhalf scherm.
 * Wie wil weten hoe het werkt, moet dan scrollen om te ontdekken dat er nog
 * iets komt — net op de sectie die bij waterschade het meeste uitlegt. Nu
 * staat er één stap tegelijk, schuift hij vanzelf door, en kan de bezoeker met
 * de pijlen of de nummers zelf vooruit.
 *
 * Twee dingen zijn bewust zo:
 *
 * 1. **Alle stappen staan in de HTML.** De pagina's worden geprerenderd voor
 *    AI-antwoordmachines die geen JavaScript uitvoeren; wie alleen de actieve
 *    stap zou renderen, laat die zes andere stappen verdwijnen uit
 *    `dist/waterschade/index.html`. Daarom één spoor met alle kaarten erin,
 *    verschoven met `transform` — en geen `aria-hidden` op wat buiten beeld
 *    staat, want dat haalt dezelfde tekst alsnog uit de leesbare inhoud.
 * 2. **Het doorschuiven stopt zodra de bezoeker meedoet** — bij hover, focus
 *    of een veeg — en start pas als het blok in beeld staat. Een carrousel die
 *    wegschuift terwijl iemand aan het lezen is, is erger dan geen carrousel.
 */
const StappenCarrousel = ({ stappen, label }: { stappen: VerloopStap[]; label: string }) => {
  const aantal = stappen.length;
  const houder = useRef<HTMLDivElement>(null);
  const raakX = useRef(0);
  const [actief, setActief] = useState(0);
  /** Staat het blok in beeld? Daarbuiten heeft doorschuiven geen zin. */
  const [inBeeld, setInBeeld] = useState(false);
  /** Is de bezoeker bezig (hover, focus, veeg)? Dan houden we de klok stil. */
  const [stil, setStil] = useState(false);
  /** Pas ná mount; anders animeert de geprerenderde HTML bij de eerste verf. */
  const [gemonteerd, setGemonteerd] = useState(false);

  const ga = useCallback(
    (i: number) => setActief(((i % aantal) + aantal) % aantal),
    [aantal],
  );

  useEffect(() => {
    setGemonteerd(true);
    const el = houder.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const kijker = new IntersectionObserver(([ingang]) => setInBeeld(ingang.isIntersecting), {
      threshold: 0.35,
    });
    kijker.observe(el);
    return () => kijker.disconnect();
  }, []);

  /*
    De klok hangt aan `actief`: elke handmatige sprong zet hem vanzelf opnieuw,
    zodat een stap die u net zelf koos niet na een halve seconde wegschuift.
  */
  useEffect(() => {
    if (!inBeeld || stil) return;
    const klok = setTimeout(() => setActief((i) => (i + 1) % aantal), WISSEL_MS);
    return () => clearTimeout(klok);
  }, [inBeeld, stil, actief, aantal]);

  const loopt = inBeeld && !stil;

  return (
    <div
      className="stapcar"
      ref={houder}
      role="group"
      aria-roledescription="carrousel"
      aria-label={label}
      onMouseEnter={() => setStil(true)}
      onMouseLeave={() => setStil(false)}
      /*
        Alleen stilhouden bij toetsenbordfocus. Zonder `:focus-visible` blijft
        de knop die u net aanklikte de focus houden, en stond de carrousel voor
        de rest van het bezoek stil.
      */
      onFocus={(e) => {
        if ((e.target as HTMLElement).matches?.(":focus-visible")) setStil(true);
      }}
      onBlur={() => setStil(false)}
      onTouchStart={(e) => {
        raakX.current = e.touches[0].clientX;
        setStil(true);
      }}
      onTouchEnd={(e) => {
        const verschil = e.changedTouches[0].clientX - raakX.current;
        if (Math.abs(verschil) > 45) ga(actief + (verschil < 0 ? 1 : -1));
        setStil(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          ga(actief + 1);
        }
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          ga(actief - 1);
        }
      }}
    >
      {/* De nummerrail: waar u bent, en hoeveel er nog komt. */}
      <div className="sc-rail">
        {stappen.map((stap, i) => (
          <Fragment key={stap.titel}>
            {i > 0 && <span className={`sc-lijn${i <= actief ? " vol" : ""}`} aria-hidden="true" />}
            <button
              type="button"
              className={`sc-tab${i === actief ? " aan" : ""}${i < actief ? " gehad" : ""}`}
              onClick={() => ga(i)}
              aria-label={`Stap ${i + 1}: ${stap.titel}`}
              aria-current={i === actief ? "step" : undefined}
            >
              {i + 1}
            </button>
          </Fragment>
        ))}
      </div>

      <div className="sc-venster">
        {/*
          De balk die aftelt naar de volgende stap. `key` zet de animatie
          opnieuw bij elke stap; zonder die sleutel loopt hij door waar hij was.
        */}
        {gemonteerd && (
          <span key={actief} className={`sc-tijd${loopt ? "" : " stil"}`} aria-hidden="true" />
        )}
        <div
          className={`sc-spoor${gemonteerd ? " beweegt" : ""}`}
          style={{ transform: `translateX(-${actief * 100}%)` }}
        >
          {stappen.map((stap, i) => (
            <article
              className={`sc-slide${stap.wie === "Vernast" ? " vernast" : ""}`}
              key={stap.titel}
            >
              <div className="sc-zij">
                <span className="sc-nr">{String(i + 1).padStart(2, "0")}</span>
                <span className="sc-wie">{stap.wie === "U" ? "U doet dit" : "Wij doen dit"}</span>
              </div>
              <div className="sc-tekst">
                <h3>{stap.titel}</h3>
                <p>{stap.tekst}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="sc-voet">
        <span className="sc-teller">
          Stap {actief + 1} <i>van</i> {aantal}
        </span>
        <div className="sc-knoppen">
          <button
            type="button"
            className="sc-pijl terug"
            onClick={() => ga(actief - 1)}
            aria-label="Vorige stap"
          >
            <ArrowRightIcon size={17} />
          </button>
          <button
            type="button"
            className="sc-pijl"
            onClick={() => ga(actief + 1)}
            aria-label="Volgende stap"
          >
            <ArrowRightIcon size={17} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StappenCarrousel;

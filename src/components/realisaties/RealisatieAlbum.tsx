import { useCallback, useEffect, useState } from "react";
import type { RealisatieFoto } from "@/data/realisaties";
import { ArrowLeft, ArrowRight } from "./icons";

/**
 * De fotocarrousel van de projectpagina: één grote foto met bijschrift,
 * pijlen links en rechts, een rij korte labels eronder en een lightbox.
 *
 * De niet-actieve foto's staan op `display:none` in plaats van dat ze uit de
 * DOM verdwijnen — zo staan alle bijschriften in de geprerenderde HTML en kan
 * een crawler zonder JavaScript de hele reportage lezen. Dat is dezelfde reden
 * waarom deze site nergens een begintoestand met `opacity:0` prerendert.
 */
const RealisatieAlbum = ({ fotos, titel }: { fotos: RealisatieFoto[]; titel: string }) => {
  const [actief, setActief] = useState(0);
  const [vergroot, setVergroot] = useState(false);

  const ga = useCallback(
    (stap: number) => setActief((i) => (i + stap + fotos.length) % fotos.length),
    [fotos.length]
  );

  // Pijltjestoetsen bedienen de carrousel; Escape sluit de lightbox.
  useEffect(() => {
    const toets = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") ga(1);
      else if (e.key === "ArrowLeft") ga(-1);
      else if (e.key === "Escape") setVergroot(false);
    };
    window.addEventListener("keydown", toets);
    return () => window.removeEventListener("keydown", toets);
  }, [ga]);

  // Achter de lightbox mag de pagina niet meescrollen.
  useEffect(() => {
    if (!vergroot) return;
    const vorige = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = vorige;
    };
  }, [vergroot]);

  if (!fotos.length) return null;
  const huidig = fotos[actief];

  return (
    <>
      <div className="album">
        <div className="alb-stage">
          {fotos.map((f, i) => (
            <figure className={`alb-slide${i === actief ? " on" : ""}`} key={f.src}>
              <img
                src={f.src}
                alt={f.alt}
                loading={i === 0 ? "eager" : "lazy"}
                width={1100}
                height={825}
                onClick={() => setVergroot(true)}
              />
              <figcaption className="alb-cap">
                <span className="alb-count">
                  {i + 1} / {fotos.length}
                </span>
                {f.bijschrift}
              </figcaption>
            </figure>
          ))}

          {fotos.length > 1 && (
            <>
              <button type="button" className="alb-nav alb-prev" onClick={() => ga(-1)} aria-label="Vorige foto">
                <ArrowLeft />
              </button>
              <button type="button" className="alb-nav alb-next" onClick={() => ga(1)} aria-label="Volgende foto">
                <ArrowRight />
              </button>
            </>
          )}
        </div>

        <div className="alb-thumbs">
          {fotos.map((f, i) => (
            <button
              type="button"
              key={f.src}
              className={`alb-thumb${i === actief ? " on" : ""}`}
              onClick={() => setActief(i)}
              aria-label={`Foto ${i + 1}: ${f.thumb}`}
              aria-current={i === actief}
            >
              <span className="tno">{i + 1}</span>
              {f.thumb}
            </button>
          ))}
        </div>
      </div>

      {vergroot && (
        <div className="rz-lightbox" role="dialog" aria-modal="true" aria-label={`${titel} — foto ${actief + 1}`} onClick={() => setVergroot(false)}>
          <button type="button" className="lb-close" onClick={() => setVergroot(false)} aria-label="Sluiten">
            ×
          </button>
          {fotos.length > 1 && (
            <>
              <button type="button" className="lb-nav lb-prev" onClick={(e) => { e.stopPropagation(); ga(-1); }} aria-label="Vorige foto">
                <ArrowLeft />
              </button>
              <button type="button" className="lb-nav lb-next" onClick={(e) => { e.stopPropagation(); ga(1); }} aria-label="Volgende foto">
                <ArrowRight />
              </button>
            </>
          )}
          <img src={huidig.src} alt={huidig.alt} onClick={(e) => e.stopPropagation()} />
          <p className="lb-cap">
            {actief + 1} / {fotos.length} — {huidig.bijschrift}
          </p>
        </div>
      )}
    </>
  );
};

export default RealisatieAlbum;

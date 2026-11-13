import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";
import { FASE, FASE_ORDER, type Fase } from "@/lib/droogSimulator";

/*
  Stap 4 van de droogsimulator: "Hoe ver staat de werf?".

  De klant kiest zijn fase met de knoppen in het paneel (FaseKnoppen). De
  tekening wordt een bouwfilm: zes foto's van dezelfde kamer, van ruwbouw tot
  afgewerkt, die in elkaar overvloeien. Over een knop gaan, over de foto vegen
  of ▶ laten de kamer zich opbouwen; kiezen gebeurt met een tik op een knop of
  door los te laten na het vegen.
*/

const LAATSTE = FASE_ORDER.length - 1;
const plek = (f: Fase) => FASE_ORDER.indexOf(f);

/** One line icon per phase, 24×24, stroked in currentColor. */
const PICTO: Record<Fase, ReactNode> = {
  ruwbouw: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M3 9.7h18M3 14.3h18M9 5v4.7M15 5v4.7M6 9.7v4.6M12 9.7v4.6M18 9.7v4.6M9 14.3V19M15 14.3V19" />
    </>
  ),
  ramen: (
    <>
      <rect x="5" y="3.5" width="14" height="15" rx="1.2" />
      <path d="M12 3.5v15M5 11h14M3.5 20.5h17" />
    </>
  ),
  chape: (
    <>
      <path d="M3 16.5h18v3.5H3z" fill="currentColor" fillOpacity=".28" />
      <path d="M8 7.2c0 0-2 2.3-2 3.6a2 2 0 0 0 4 0c0-1.3-2-3.6-2-3.6zM16 4.2c0 0-2 2.3-2 3.6a2 2 0 0 0 4 0c0-1.3-2-3.6-2-3.6z" />
    </>
  ),
  tegels: (
    <>
      <path d="M6 7h12l3.5 12h-19z" />
      <path d="M4.5 12.6h15M12 7v12M8.8 7 7.2 19M15.2 7l1.6 12" />
    </>
  ),
  gepleisterd: (
    <>
      <path d="M3.5 4.5h10M3.5 7.5h6" />
      <rect x="3" y="15" width="17" height="3.6" rx="1" />
      <path d="M12 15v-3.2" />
      <rect x="8" y="9" width="9" height="2.8" rx="1.4" />
    </>
  ),
  afgewerkt: (
    <>
      <path d="M3.5 11 12 4l8.5 7" />
      <path d="M5.5 9.5V20h13V9.5" />
      <path d="m9 14.5 2.2 2.2L15.5 12" />
    </>
  ),
};

function Picto({ fase }: { fase: Fase }) {
  return (
    <svg className="ds-fk-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PICTO[fase]}
    </svg>
  );
}

const Vink = () => (
  <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3.5 8.5l3 3 6-7" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Druppel = () => (
  <svg viewBox="0 0 12 15" aria-hidden="true">
    <path d="M6 0C6 0 0 6.6 0 9.6A6 6 0 0 0 12 9.6C12 6.6 6 0 6 0z" />
  </svg>
);

/** The six phase buttons in the panel. `onToon` previews a phase in the film (hover, focus). */
export function FaseKnoppen({ fase, onKies, onToon }: { fase: Fase | null; onKies: (f: Fase) => void; onToon: (f: Fase | null) => void }) {
  return (
    <div className={`ds-fk-rij${fase ? " gekozen" : " uitnodig"}`} role="radiogroup" aria-label="Bouwfase" onMouseLeave={() => onToon(null)}>
      {FASE_ORDER.map((f, i) => (
        <button
          key={f}
          type="button"
          role="radio"
          aria-checked={fase === f}
          aria-label={FASE[f].label}
          className={`ds-fk${fase === f ? " on" : ""}`}
          style={{ animationDelay: `${i * 0.12}s` }}
          onClick={() => onKies(f)}
          onMouseEnter={() => onToon(f)}
          onFocus={() => onToon(f)}
          onBlur={() => onToon(null)}
        >
          <span className="ds-fk-nr" aria-hidden="true">{i + 1}</span>
          <span className="ds-fk-vk" aria-hidden="true"><Vink /></span>
          <span className="ds-fk-tegel"><Picto fase={f} /></span>
          <b>{FASE[f].kort}</b>
        </button>
      ))}
    </div>
  );
}

/** Starten / Meten / Let op for the chosen phase. */
export function FaseRegels({ fase }: { fase: Fase }) {
  const F = FASE[fase];
  return (
    <div className="ds-fr" aria-live="polite">
      <p className="ds-fr-tekst">
        <b>{F.kort}.</b> {F.advies}
      </p>
      <div className="ds-fr-regels">
        <div><span>Starten</span><b>{F.starten}</b></div>
        <div><span>Meten</span><b>{F.meten}</b></div>
        <div className="let"><span>Let op</span><b>{F.letOp}</b></div>
      </div>
    </div>
  );
}

const zonderBeweging = () => typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/**
 * The film. `fase` is the visitor's answer, `toon` a phase previewed from the
 * buttons. The position runs from 0 to the last phase and may sit between two
 * photos while scrubbing: each photo is shown at 1 − |position − its index|.
 * Frames are written straight to the DOM, so scrubbing never re-renders React.
 */
export function Bouwfilm({ fase, toon, onKies }: { fase: Fase | null; toon: Fase | null; onKies: (f: Fase) => void }) {
  const fotos = useRef<(HTMLImageElement | null)[]>([]);
  const pin = useRef<HTMLSpanElement>(null);
  const pos = useRef(fase ? plek(fase) : 0);
  const anim = useRef(0);
  const speelt = useRef(false);
  const [toont, setToont] = useState(Math.round(pos.current));
  const [spelen, setSpelen] = useState(false);
  const [geveegd, setGeveegd] = useState(false);

  const teken = useCallback(() => {
    const t = pos.current;
    fotos.current.forEach((img, i) => {
      if (img) img.style.opacity = String(Math.max(0, 1 - Math.abs(t - i)));
    });
    const d = Math.round(t);
    pin.current?.classList.toggle("weg", Math.abs(t - d) > 0.15);
    setToont((v) => (v === d ? v : d));
  }, []);

  const naar = useCallback(
    (doel: number, ms = 450, klaar?: () => void) => {
      cancelAnimationFrame(anim.current);
      const duur = zonderBeweging() ? 0 : ms;
      const van = pos.current;
      const t0 = performance.now();
      const stap = (nu: number) => {
        const k = duur === 0 ? 1 : Math.min(1, (nu - t0) / duur);
        pos.current = van + (doel - van) * (1 - Math.pow(1 - k, 3));
        teken();
        if (k < 1) anim.current = requestAnimationFrame(stap);
        else klaar?.();
      };
      anim.current = requestAnimationFrame(stap);
    },
    [teken],
  );

  useEffect(() => {
    teken();
    return () => cancelAnimationFrame(anim.current);
  }, [teken]);

  // Follow the answer, or the button the visitor points at.
  useEffect(() => {
    if (speelt.current) return;
    naar(plek(toon ?? fase ?? FASE_ORDER[0]), toon ? 380 : 450);
  }, [fase, toon, naar]);

  // Scrubbing: dragging across the photo moves through the build; letting go chooses.
  const sleep = useRef<{ x: number; t: number; bewogen: boolean } | null>(null);
  const neer = (e: ReactPointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("button")) return;
    cancelAnimationFrame(anim.current);
    stopSpelen();
    sleep.current = { x: e.clientX, t: pos.current, bewogen: false };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const beweeg = (e: ReactPointerEvent<HTMLDivElement>) => {
    const s = sleep.current;
    if (!s) return;
    const dx = e.clientX - s.x;
    if (Math.abs(dx) > 4) s.bewogen = true;
    // swipe left = further in the build, like flicking through photos
    pos.current = Math.max(0, Math.min(LAATSTE, s.t - (dx / e.currentTarget.clientWidth) * 3));
    teken();
  };
  const los = () => {
    const s = sleep.current;
    sleep.current = null;
    if (!s?.bewogen) return;
    setGeveegd(true);
    const d = Math.round(pos.current);
    naar(d, 260);
    onKies(FASE_ORDER[d]);
  };

  // ▶ plays the whole build once, then returns to the answer.
  const stopSpelen = () => {
    speelt.current = false;
    setSpelen(false);
  };
  const speel = () => {
    speelt.current = true;
    setSpelen(true);
    pos.current = 0;
    teken();
    const volgende = (i: number) => {
      if (!speelt.current) return;
      if (i > LAATSTE) {
        window.setTimeout(() => speelt.current && naar(fase ? plek(fase) : 0, 900, stopSpelen), 700);
        return;
      }
      naar(i, 850, () => window.setTimeout(() => volgende(i + 1), 450));
    };
    volgende(1);
  };

  const F = FASE[FASE_ORDER[toont]];
  const pinKant = F.pin.x > 55 ? " links" : F.pin.x > 28 ? " onder" : "";

  return (
    <div className="ds-bf" onPointerDown={neer} onPointerMove={beweeg} onPointerUp={los} onPointerCancel={los}>
      {FASE_ORDER.map((f, i) => (
        <img
          key={f}
          ref={(el) => (fotos.current[i] = el)}
          src={FASE[f].foto}
          alt={i === toont ? FASE[f].label : ""}
          draggable={false}
          decoding="async"
        />
      ))}
      <span ref={pin} className={`ds-bf-pin${pinKant}`} style={{ left: `${F.pin.x}%`, top: `${F.pin.y}%` }} aria-hidden="true">
        <span>{F.pin.tekst}</span>
      </span>
      <span className={`ds-bf-veeg${geveegd || fase ? " weg" : ""}`} aria-hidden="true">
        ← Veeg door de bouw →
      </span>
      <button type="button" className={`ds-bf-speel${spelen ? " weg" : ""}`} onClick={speel}>
        <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.5v11l9-5.5z" fill="currentColor" /></svg>
        Bekijk de bouw
      </button>
      <div className="ds-bf-cap" aria-hidden="true">
        <div>
          <span>
            <span className="ds-bf-cap-fase">
              Fase {toont + 1} van {FASE_ORDER.length}
              {fase && FASE_ORDER[toont] === fase ? " · uw werf" : ""}
            </span>
            <span className="ds-bf-cap-pin">{F.pin.tekst}</span>
          </span>
          <b>{F.kort}</b>
        </div>
        <span className="ds-bf-meter">
          <small>Vocht</small>
          <span className="ds-bf-drup">
            {[1, 2, 3, 4, 5].map((n) => (
              <span key={n} className={n <= F.druppels ? "vol" : undefined}><Druppel /></span>
            ))}
          </span>
          <b>{F.druppelsTekst}</b>
        </span>
      </div>
    </div>
  );
}

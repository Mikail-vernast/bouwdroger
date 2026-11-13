import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import "@/styles/hoe-drogen-animaties.css";

type Variant = "temperatuur" | "vocht" | "lucht";

interface Meter {
  /** Beginwaarde van de telling — de werf zoals de klant hem aantreft. */
  van: number;
  /** Eindwaarde — het klimaat waar de droging naartoe werkt. */
  naar: number;
  eenheid: string;
  decimalen: number;
  /** Vulgraad van de balk (%) bij begin- en eindwaarde. */
  vulVan: number;
  vulNaar: number;
  labelVan: string;
  labelNaar: string;
  icoon: ReactNode;
}

/*
  De drie factoren uit "Het principe", elk met de beweging die ze maakt:
  temperatuur klimt van een koude werf naar werkklimaat (blauw → rood),
  de relatieve luchtvochtigheid zakt van bijna verzadigd naar droog
  (blauw → groen), en de luchtbeweging komt op gang (grijs → rood).

  De kleuren staan als CSS-variabelen in hoe-drogen-animaties.css; hier
  staan alleen de cijfers, zodat tekst en beeld niet uit elkaar kunnen lopen.
*/
const METERS: Record<Variant, Meter> = {
  temperatuur: {
    van: -8,
    naar: 21.5,
    eenheid: "°C",
    decimalen: 1,
    // Schaal −12 … 25 °C, zodat een vorstwerf ook nog zichtbaar vult.
    vulVan: 11,
    vulNaar: 90,
    labelVan: "koude werf",
    labelNaar: "werkklimaat",
    icoon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" /></svg>
    ),
  },
  vocht: {
    van: 98,
    naar: 45,
    eenheid: "% RV",
    decimalen: 0,
    vulVan: 98,
    vulNaar: 45,
    labelVan: "verzadigde lucht",
    labelNaar: "opnamecapaciteit",
    icoon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" /></svg>
    ),
  },
  lucht: {
    van: 0.5,
    naar: 2.5,
    eenheid: "m/s",
    decimalen: 1,
    vulVan: 14,
    vulNaar: 71,
    labelVan: "stilstaande lucht",
    labelNaar: "langs elk oppervlak",
    icoon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M9.6 4.6A2 2 0 1 1 11 8H2" /><path d="M12.6 19.4A2 2 0 1 0 14 16H2" /><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" /></svg>
    ),
  },
};

/** Nederlandse komma en een echt minteken — `toFixed` levert een punt en een koppelteken. */
const toon = (waarde: number, decimalen: number) =>
  waarde.toFixed(decimalen).replace(".", ",").replace("-", "−");

const DUUR = 1600;
/** Afstand tussen de drie kaarten: eerst temperatuur, dan RV, dan lucht. */
const STAP = 550;

interface Props {
  variant: Variant;
  /** 0, 1 of 2 — bepaalt wanneer deze meter aan de beurt is. */
  volgorde?: number;
}

/**
 * De bewegende meter boven elke principe-kaart: het cijfer telt van de
 * beginsituatie naar het streefklimaat, de balk vult of leegt mee en de kleur
 * schuift van koud naar warm, van nat naar droog.
 *
 * Net als <Reveal> staat de **eindwaarde** in de HTML, niet het beginpunt.
 * De pagina wordt geprerenderd; wie geen JavaScript uitvoert — de
 * AI-antwoordmachines waarvoor we prerenderen — moet 21,5 °C lezen, niet een
 * leeg vakje. Pas ná mount zet dit component de meter terug op zijn
 * beginwaarde en telt hij opnieuw op.
 */
const KlimaatMeter = ({ variant, volgorde = 0 }: Props) => {
  const m = METERS[variant];
  const wortel = useRef<HTMLDivElement>(null);
  const getal = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = wortel.current;
    const cijfer = getal.current;
    if (!el || !cijfer) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let wacht = 0;
    let speelt = false;

    const zet = (p: number) => {
      el.style.setProperty("--p", String(p));
      el.style.setProperty("--f", String(m.vulVan + (m.vulNaar - m.vulVan) * p));
      cijfer.textContent = toon(m.van + (m.naar - m.van) * p, m.decimalen);
    };

    const stop = () => {
      cancelAnimationFrame(frame);
      clearTimeout(wacht);
      speelt = false;
    };

    /*
      De telling speelt opnieuw bij élke keer dat de kaart in beeld komt, niet
      één keer per bezoek. Wie terugscrolt naar deze sectie — en dat doet een
      bezoeker die de drie factoren vergelijkt — zag anders drie stilstaande
      eindcijfers en dacht dat de meter kapot was.
    */
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) {
          stop();
          zet(0);
          return;
        }
        if (speelt) return;
        speelt = true;
        zet(0);
        wacht = window.setTimeout(() => {
          const start = performance.now();
          const loop = (nu: number) => {
            const t = Math.min((nu - start) / DUUR, 1);
            zet(1 - Math.pow(1 - t, 3));
            if (t < 1) frame = requestAnimationFrame(loop);
          };
          frame = requestAnimationFrame(loop);
        }, volgorde * STAP);
      },
      { rootMargin: "0px 0px -12% 0px" }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      stop();
    };
  }, [m, volgorde]);

  return (
    <div
      ref={wortel}
      className="klm"
      data-klm={variant}
      style={{ "--p": "1", "--f": String(m.vulNaar) } as CSSProperties}
    >
      <div className="klm-top">
        <span className="klm-ic">{m.icoon}</span>
        <span className="klm-val">
          <b ref={getal}>{toon(m.naar, m.decimalen)}</b>
          <i>{m.eenheid}</i>
        </span>
      </div>
      {variant === "lucht" ? (
        <div className="klm-wind" aria-hidden="true">
          <s /><s /><s /><s />
        </div>
      ) : (
        <div className="klm-track" aria-hidden="true">
          <i />
        </div>
      )}
      <div className="klm-foot">
        <span>{m.labelVan}</span>
        <span>{m.labelNaar}</span>
      </div>
    </div>
  );
};

export default KlimaatMeter;

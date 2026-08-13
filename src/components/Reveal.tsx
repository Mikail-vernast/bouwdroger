import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

type From = "up" | "left" | "right" | "scale" | "fade";

interface RevealProps {
  /** Welk element er getekend wordt. Standaard een `div`. */
  as?: ElementType;
  /** Uit welke richting het blok binnenkomt. */
  from?: From;
  /** Vertraging in seconden — voor het trapje bij een rij kaarten. */
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  [prop: string]: unknown;
}

/**
 * Laat een blok binnenkomen zodra het in beeld scrolt — de vervanger van de
 * framer-motion `whileInView`-blokken.
 *
 * Waarom niet meer framer-motion: dat woog 121 kB op de zeventien pagina's met
 * de oude schil, en het bracht een tweede probleem mee. De pagina's worden bij
 * de build geprerenderd, dus `initial={{ opacity: 0 }}` belandde létterlijk in
 * dist/<route>/index.html: op /machines stonden negentien blokken op
 * `style="opacity:0"`. Wie geen JavaScript uitvoert — en dat zijn precies de
 * AI-antwoordmachines waarvoor we prerenderen — kreeg onzichtbare inhoud.
 *
 * Daarom is de volgorde hier omgedraaid. De HTML bevat geen begintoestand: het
 * blok staat er gewoon. Pas ná mount verbergt dit component wat op dat moment
 * nog buiten het scherm staat, en zet het IntersectionObserver erop. Wat de
 * bezoeker al ziet blijft onaangeroerd — anders zou het wegknipperen en
 * terugkomen.
 *
 * De attributen verdwijnen weer zodra de overgang klaar is. Ze zetten
 * `transform`, en dat zou anders een `hover:-translate-y-1` op hetzelfde
 * element voorgoed platleggen.
 */
const Reveal = ({
  as: Tag = "div",
  from = "up",
  delay = 0,
  className,
  style,
  children,
  ...rest
}: RevealProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    /*
      Staat het al in beeld, dan niets doen: verbergen wat er staat levert een
      knipper op, en boven de vouw kost dat ook de LCP.

      De grens ligt precies op de onderrand van het scherm, niet iets erboven.
      Met een marge van 10% werden op /nieuwbouw en /renovatie twee blokken
      verborgen die nog nét zichtbaar waren; ze kwamen meteen daarna terug,
      maar de bezoeker zag het knipperen.
    */
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.dataset.rv = "armed";

    const done = () => {
      delete el.dataset.rv;
      delete el.dataset.rvFrom;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        el.addEventListener("transitionend", done, { once: true });
        el.dataset.rv = "in";
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      el.removeEventListener("transitionend", done);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      data-rv-from={from}
      style={delay ? ({ ...style, "--rv-delay": `${delay}s` } as CSSProperties) : style}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;

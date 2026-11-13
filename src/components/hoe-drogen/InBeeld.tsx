import { useEffect, useRef, type ElementType, type ReactNode } from "react";

interface Props {
  as?: ElementType;
  className?: string;
  children?: ReactNode;
}

/**
 * Zet `data-inbeeld="ja"` zodra het blok in beeld scrolt, zodat CSS er een
 * reeks aan kan hangen — bij de cyclus komen de vijf kaarten zo één voor één
 * binnen in plaats van allemaal tegelijk.
 *
 * De volgorde is dezelfde omkering als in <Reveal>: in de geprerenderde HTML
 * staat `ja`, want wie geen JavaScript uitvoert moet de vijf stappen gewoon
 * zien staan. Pas ná mount zet dit component het blok op `nee`, en alleen als
 * het op dat moment nog buiten het scherm valt.
 */
const InBeeld = ({ as: Tag = "div", className, children }: Props) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.dataset.inbeeld = "nee";

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        el.dataset.inbeeld = "ja";
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={className} data-inbeeld="ja">
      {children}
    </Tag>
  );
};

export default InBeeld;

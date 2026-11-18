import { useEffect, useRef } from "react";
import { REVIEWS } from "@/lib/site";
import { useCopy, type Copy } from "@/i18n/useTaal";

/**
 * The red band under the hero. Each figure counts up from zero the first time
 * it scrolls into view; the design eases that over 1,3 s and staggers the four
 * blocks 90 ms apart.
 */
type Stat = { count: string; suffix: string; label: string };

/*
  Zolang er geen te verantwoorden beoordeling is (zie `REVIEWS` in
  src/lib/site.ts) staat op de derde plaats de droog-garantie. Die is van
  onszelf en dus wél hard te maken, en houdt de balk op vier blokken — met drie
  valt het ritme van de rode band uit elkaar.
*/
const COPY = {
  nl: [
    { count: "450", suffix: "+", label: "Woningen en werven ondersteund" },
    { count: "24", suffix: "u", label: "Levering én installatie aan huis" },
    REVIEWS
      ? {
          count: REVIEWS.display,
          suffix: `/${REVIEWS.best}`,
          label: `Gemiddeld op ${REVIEWS.reviewCount} beoordelingen`,
        }
      : { count: "100", suffix: "%", label: "Droog, of u huurt kosteloos verder" },
    { count: "0", suffix: "€", label: "Voorschot · geen verborgen kosten" },
  ],
  fr: [
    { count: "450", suffix: "+", label: "Habitations et chantiers accompagnés" },
    { count: "24", suffix: "h", label: "Livraison et installation à domicile" },
    REVIEWS
      ? {
          count: REVIEWS.display,
          suffix: `/${REVIEWS.best}`,
          label: `En moyenne sur ${REVIEWS.reviewCount} avis`,
        }
      : { count: "100", suffix: "%", label: "Sec, ou vous continuez à louer sans frais" },
    { count: "0", suffix: "€", label: "Acompte · aucun frais caché" },
  ],
} satisfies Copy<Stat[]>;

const DURATION = 1300;

const V3StatRule = () => {
  const bandRef = useRef<HTMLDivElement>(null);
  const stats = useCopy(COPY);

  useEffect(() => {
    const blocks = Array.from(bandRef.current?.querySelectorAll<HTMLElement>(".st") ?? []);
    if (!blocks.length) return;

    if (!("IntersectionObserver" in window)) {
      blocks.forEach((el) => el.classList.add("vis"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add("vis");

          const num = el.querySelector<HTMLElement>("[data-count]");
          if (num && !num.dataset.done) {
            num.dataset.done = "1";
            const raw = num.dataset.count ?? "0";
            const decimal = raw.includes(",");
            const target = parseFloat(raw.replace(",", "."));
            const start = performance.now();

            const tick = (now: number) => {
              const linear = Math.min(1, (now - start) / DURATION);
              const eased = 1 - Math.pow(1 - linear, 3);
              const value = target * eased;
              num.textContent = decimal
                ? value.toFixed(1).replace(".", ",")
                : String(Math.round(value));
              if (linear < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
          io.unobserve(el);
        });
      },
      { threshold: 0.4 },
    );

    blocks.forEach((el, i) => {
      el.style.transitionDelay = `${i * 90}ms`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <div className="statrule">
      <div className="wrap">
        <div className="band" ref={bandRef}>
          {stats.map((stat) => (
            <div className="st" key={stat.label}>
              <div className="n">
                <span data-count={stat.count}>0</span>
                <em>{stat.suffix}</em>
              </div>
              <div className="l">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default V3StatRule;

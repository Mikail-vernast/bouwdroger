import { useEffect, useRef, useState } from "react";

interface Stat {
  /** Numeric target for the count-up, written the way it should read in nl-BE. */
  target: string;
  suffix: string;
  label: string;
}

const STATS: Stat[] = [
  { target: "450", suffix: "+", label: "Woningen en werven ondersteund" },
  { target: "24", suffix: "u", label: "Levering én installatie aan huis" },
  { target: "4,8", suffix: "/5", label: "Gemiddeld op 412 beoordelingen" },
  { target: "0", suffix: "€", label: "Voorschot · geen verborgen kosten" },
];

const COUNT_DURATION_MS = 1300;
const STAGGER_MS = 90;

/** Runs the entrance transition plus a one-shot count-up, once, on first view. */
const useCountUp = (target: string) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const hasDecimal = target.includes(",");
    const value = parseFloat(target.replace(",", "."));

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      setVisible(true);
      setDisplay(target);
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;
        observer.unobserve(el);
        setVisible(true);

        const start = performance.now();
        const tick = (now: number) => {
          const linear = Math.min(1, (now - start) / COUNT_DURATION_MS);
          const eased = 1 - Math.pow(1 - linear, 3);
          const current = value * eased;
          setDisplay(
            hasDecimal ? current.toFixed(1).replace(".", ",") : String(Math.round(current)),
          );
          if (linear < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target]);

  return { ref, visible, display };
};

const StatBlock = ({ stat, index }: { stat: Stat; index: number }) => {
  const { ref, visible, display } = useCountUp(stat.target);

  return (
    <div
      ref={ref}
      className={`st${visible ? " vis" : ""}`}
      style={{ transitionDelay: `${index * STAGGER_MS}ms` }}
    >
      <div className="n">
        <span>{display}</span>
        <em>{stat.suffix}</em>
      </div>
      <div className="l">{stat.label}</div>
    </div>
  );
};

const V3StatRule = () => (
  <div className="statrule">
    <div className="wrap">
      <div className="band">
        {STATS.map((stat, index) => (
          <StatBlock key={stat.label} stat={stat} index={index} />
        ))}
      </div>
    </div>
  </div>
);

export default V3StatRule;

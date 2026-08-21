import { useEffect, useState } from "react";

/**
 * Natuurlijk vs actief drogen. The two panels swap on their own every 4,6 s
 * until the visitor picks a tab; the design then marks the rail `.paused`.
 */
const AUTOPLAY_MS = 4600;

const PANELS = [
  {
    key: "nat",
    tab: "Natuurlijk drogen",
    tone: "bad",
    rows: [
      [
        "Droogtijd",
        "Weken tot maanden, volledig afhankelijk van weer, temperatuur en ventilatie.",
      ],
      ["Controle", "Geen. U weet nooit wanneer de ruimte écht droog is."],
      ["Schimmelrisico", "Hoog: vocht blijft wekenlang in muren en chape hangen."],
      [
        "Afwerken",
        "Wachten, of te vroeg afwerken, met blazen en loskomende verf als gevolg.",
      ],
    ],
    verdict: "“Gratis” natuurlijk drogen betaalt u in tijd, stookkosten en risico op schade.",
    verdictOk: false,
  },
  {
    key: "act",
    tab: "Actieve bouwdroging",
    tone: "good",
    rows: [
      ["Droogtijd", "Dagen in plaats van weken, vooraf berekend en voorspelbaar."],
      ["Controle", "Volledig: vochtmeting voor en na bevestigt wanneer alles écht droog is."],
      ["Schimmelrisico", "Minimaal: vocht wordt continu afgevoerd voor schimmel kan groeien."],
      [
        "Afwerken",
        "Afwerken zodra de meting het toelaat, zonder blazen of loskomende verf.",
      ],
    ],
    verdict: "Actief drogen verdient zichzelf terug in tijd, stookkosten en zekerheid.",
    verdictOk: true,
  },
];

const FACTS = [
  {
    n: "1 500 L",
    title: "Water in een gemiddelde nieuwbouw",
    body: "Chape, pleister en beton brengen samen honderden tot duizenden liters vocht binnen die eruit moeten voor u afwerkt.",
  },
  {
    n: "48 u",
    title: "Voor schimmel begint te groeien",
    body: "Bij waterschade start schimmelvorming al na twee dagen. Snel starten met drogen is de goedkoopste ingreep die er is.",
  },
  {
    n: "≤ 2 %",
    title: "Restvocht voor u mag afwerken",
    body: "Vloerbekleding en verf vragen een droge ondergrond. Te vroeg afwerken betekent bladders, schimmel en opnieuw beginnen.",
  },
  {
    n: "60 %",
    title: "Tijdswinst met actieve droging",
    body: "Wat natuurlijk weken duurt, brengt een correct gedimensioneerd toestel terug tot een kwestie van dagen.",
  },
];

const V3Intro = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setActive((i) => (i + 1) % PANELS.length), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section className="intro" id="natuurlijk-actief">
      <div className="wrap intro-grid">
        <div>
          <span className="kick">Natuurlijk vs actief drogen</span>
          <h2 className="sec">
            Natuurlijk of actief drogen? Het verschil is tijd, controle en zekerheid.
          </h2>

          <div className={`vs-tabs${paused ? " paused" : ""}`} id="vsTabs">
            {PANELS.map((panel, i) => (
              <button
                key={panel.key}
                type="button"
                data-v={panel.key}
                className={i === active ? "active" : undefined}
                onClick={() => {
                  setPaused(true);
                  setActive(i);
                }}
              >
                {panel.tab}
              </button>
            ))}
          </div>

          {PANELS.map((panel, i) => (
            <div className="vs-panel" data-vp={panel.key} key={panel.key} hidden={i !== active}>
              {panel.rows.map(([label, text]) => (
                <div className={`vs-row ${panel.tone}`} key={label}>
                  <b>{label}</b>
                  <span>{text}</span>
                </div>
              ))}
              <div className={`vs-verdict${panel.verdictOk ? " ok" : ""}`}>{panel.verdict}</div>
            </div>
          ))}
        </div>

        <div className="factlist">
          {FACTS.map((fact) => (
            <div className="fact" key={fact.n}>
              <div className="fn">{fact.n}</div>
              <div>
                <h4>{fact.title}</h4>
                <p>{fact.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default V3Intro;

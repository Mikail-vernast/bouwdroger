import { useEffect, useState } from "react";
import { useCopy, type Copy } from "@/i18n/useTaal";

/**
 * Natuurlijk vs actief drogen. The two panels swap on their own every 4,6 s
 * until the visitor picks a tab; the design then marks the rail `.paused`.
 */
const AUTOPLAY_MS = 4600;

type Panel = {
  key: string;
  tab: string;
  tone: string;
  rows: [string, string][];
  verdict: string;
  verdictOk: boolean;
};
type Fact = { n: string; toon?: string; title: string; body: string };

const PANELS_NL: Panel[] = [
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
        "Wachten, of te vroeg afwerken met blazen en loskomende verf als gevolg.",
      ],
    ],
    /*
      Stond als: "«Gratis» natuurlijk drogen betaalt u in tijd, stookkosten en
      risico op schade." Daarin is het drogen het onderwerp van "betaalt", dus
      las de zin alsof het drogen ú iets betaalt. Nu staat de klant waar hij
      hoort, en spiegelt de zin die van het andere tabblad ("verdient zichzelf
      terug").
    */
    verdict: "Natuurlijk drogen is niet gratis: u betaalt in tijd, stookkosten en risico op schade.",
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

/*
 * De vier cijfers dragen niet allemaal hetzelfde nieuws, dus niet allemaal
 * dezelfde kleur. Rood is hier het probleem (het water dat eruit moet, de twee
 * dagen tot schimmel), geel de drempel waar u op moet letten en groen de winst
 * die droging oplevert. Zie `.fact.waarschuwing` en `.fact.winst` in
 * home-v3-fixes.css.
 */
const FACTS_NL: Fact[] = [
  {
    n: "1 500 L",
    toon: "water",
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
    toon: "waarschuwing",
    title: "Restvocht voor u mag afwerken",
    body: "Vloerbekleding en verf vragen een droge ondergrond. Te vroeg afwerken betekent bladders, schimmel en opnieuw beginnen.",
  },
  {
    n: "60 %",
    toon: "winst",
    title: "Tijdswinst met actieve droging",
    body: "Wat natuurlijk weken duurt, brengt een correct gedimensioneerd toestel terug tot een kwestie van dagen.",
  },
];

const PANELS_FR: Panel[] = [
  {
    key: "nat",
    tab: "Séchage naturel",
    tone: "bad",
    rows: [
      [
        "Durée de séchage",
        "Des semaines, voire des mois, entièrement selon la météo, la température et la ventilation.",
      ],
      ["Contrôle", "Aucun. Vous ne savez jamais quand la pièce est vraiment sèche."],
      ["Risque de moisissures", "Élevé : l'humidité reste des semaines dans les murs et la chape."],
      [
        "Finitions",
        "Attendre, ou finir trop tôt avec des cloques et de la peinture qui se décolle.",
      ],
    ],
    verdict: "Le séchage naturel n'est pas gratuit : vous le payez en temps, en frais de chauffage et en risque de dégâts.",
    verdictOk: false,
  },
  {
    key: "act",
    tab: "Séchage de chantier actif",
    tone: "good",
    rows: [
      ["Durée de séchage", "Des jours au lieu de semaines, calculés à l'avance et prévisibles."],
      ["Contrôle", "Total : une mesure d'humidité avant et après confirme quand tout est vraiment sec."],
      ["Risque de moisissures", "Minimal : l'humidité est évacuée en continu avant que la moisissure ne puisse se développer."],
      [
        "Finitions",
        "Finir dès que la mesure le permet, sans cloques ni peinture qui se décolle.",
      ],
    ],
    verdict: "Le séchage actif est rentable en temps, en frais de chauffage et en sécurité.",
    verdictOk: true,
  },
];

const FACTS_FR: Fact[] = [
  {
    n: "1 500 L",
    toon: "water",
    title: "D'eau dans une construction neuve moyenne",
    body: "La chape, le plafonnage et le béton apportent ensemble des centaines, voire des milliers de litres d'humidité qui doivent sortir avant les finitions.",
  },
  {
    n: "48 h",
    title: "Avant que les moisissures ne se développent",
    body: "En cas de dégâts des eaux, les moisissures apparaissent déjà après deux jours. Commencer vite à sécher est l'intervention la moins chère qui soit.",
  },
  {
    n: "≤ 2 %",
    toon: "waarschuwing",
    title: "Humidité résiduelle avant de pouvoir finir",
    body: "Les revêtements de sol et la peinture exigent un support sec. Finir trop tôt, c'est des cloques, des moisissures et tout recommencer.",
  },
  {
    n: "60 %",
    toon: "winst",
    title: "De temps gagné avec un séchage actif",
    body: "Ce qui prend des semaines naturellement, un appareil correctement dimensionné le ramène à une question de jours.",
  },
];

const PANELS_EN: Panel[] = [
  {
    key: "nat",
    tab: "Natural drying",
    tone: "bad",
    rows: [
      ["Drying time", "Weeks to months, entirely dependent on weather, temperature and ventilation."],
      ["Control", "None. You never know when the room is really dry."],
      ["Mould risk", "High: moisture lingers in walls and screed for weeks."],
      ["Finishing", "Waiting, or finishing too early with blistering and peeling paint as a result."],
    ],
    verdict: "Natural drying is not free: you pay in time, heating costs and the risk of damage.",
    verdictOk: false,
  },
  {
    key: "act",
    tab: "Active building drying",
    tone: "good",
    rows: [
      ["Drying time", "Days instead of weeks, calculated in advance and predictable."],
      ["Control", "Complete: moisture readings before and after confirm when everything is really dry."],
      ["Mould risk", "Minimal: moisture is removed continuously before mould can grow."],
      ["Finishing", "Finish as soon as the reading allows, without blistering or peeling paint."],
    ],
    verdict: "Active drying pays for itself in time, heating costs and certainty.",
    verdictOk: true,
  },
];

const FACTS_EN: Fact[] = [
  {
    n: "1,500 L",
    toon: "water",
    title: "Of water in an average new build",
    body: "Screed, plaster and concrete together bring in hundreds to thousands of litres of moisture that have to come out before you finish.",
  },
  {
    n: "48 h",
    title: "Before mould starts to grow",
    body: "With water damage, mould starts forming after just two days. Starting to dry quickly is the cheapest intervention there is.",
  },
  {
    n: "≤ 2%",
    toon: "waarschuwing",
    title: "Residual moisture before you can finish",
    body: "Floor coverings and paint need a dry surface. Finishing too early means blistering, mould and starting again.",
  },
  {
    n: "60%",
    toon: "winst",
    title: "Time saved with active drying",
    body: "What takes weeks naturally, a correctly sized unit brings down to a matter of days.",
  },
];

const COPY = {
  nl: {
    panels: PANELS_NL,
    facts: FACTS_NL,
    kick: "Natuurlijk vs actief drogen",
    h2: "Natuurlijk of actief drogen? Het verschil is tijd, controle en zekerheid.",
  },
  fr: {
    panels: PANELS_FR,
    facts: FACTS_FR,
    kick: "Séchage naturel ou actif",
    h2: "Séchage naturel ou actif ? La différence, c'est le temps, le contrôle et la certitude.",
  },
  en: {
    panels: PANELS_EN,
    facts: FACTS_EN,
    kick: "Natural vs active drying",
    h2: "Natural or active drying? The difference is time, control and certainty.",
  },
} satisfies Copy<{ panels: Panel[]; facts: Fact[]; kick: string; h2: string }>;

const V3Intro = () => {
  const t = useCopy(COPY);
  const PANELS = t.panels;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setActive((i) => (i + 1) % PANELS.length), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, PANELS.length]);

  return (
    <section className="intro" id="natuurlijk-actief">
      <div className="wrap intro-grid">
        <div>
          <span className="kick">{t.kick}</span>
          <h2 className="sec">{t.h2}</h2>

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

          {/*
            De panelen liggen op elkaar in één grid-cel, zie `.vs-stage`. Ze
            stonden op `hidden`, en omdat deze tabs vanzelf doordraaien
            veranderde deze sectie elke wissel van hoogte — 43 px, met alles
            eronder mee. `hidden` kan hier dus niet: dat is `display:none` en
            dan telt het paneel niet meer mee voor de hoogte van de stapel.
          */}
          <div className="vs-stage">
            {PANELS.map((panel, i) => (
              <div
                className={`vs-panel${i === active ? " active" : ""}`}
                data-vp={panel.key}
                key={panel.key}
              >
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
        </div>

        <div className="factlist">
          {t.facts.map((fact) => (
            <div className={fact.toon ? `fact ${fact.toon}` : "fact"} key={fact.n}>
              <div className="fn">{fact.n}</div>
              <div>
                <h3>{fact.title}</h3>
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

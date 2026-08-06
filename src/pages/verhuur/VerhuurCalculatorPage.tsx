import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import Ruler, { type RulerConfig } from "@/components/verhuur/Ruler";
import { configToQuery, type PackageConfig } from "@/lib/verhuur";
import { SEO } from "@/data/seo";
import "@/styles/verhuur.css";
import "@/styles/verhuur-fixes.css";

/** The design waits this long after a card is picked before advancing. */
const ADVANCE_DELAY = 240;

const SIZE: RulerConfig = {
  min: 20,
  max: 320,
  snaps: [40, 60, 100, 140, 180, 220, 260],
  custom: true,
  unit: " m²",
  format: (v) => String(v),
  label: (v) => (Number.isNaN(v) ? "Meer dan 260 m², maatwerkofferte" : `Gebouw kleiner dan ${v} m²`),
  bigEvery: 40,
  tick: 10,
};

const PLASTER: RulerConfig = {
  min: 1,
  max: 3.5,
  snaps: [1.5, 2, 3],
  unknown: 2,
  unknownLabel: "Wij rekenen met een gemiddelde van 2 cm",
  unit: " cm",
  format: (v) => String(v).replace(".", ","),
  label: (v) => (v <= 1.5 ? "Dun pleisterwerk" : v >= 3 ? "Dik pleisterwerk" : "Gangbare pleisterdikte"),
  bigEvery: 0.5,
  tick: 0.1,
};

const SCREED: RulerConfig = {
  min: 4,
  max: 9,
  snaps: [5, 6, 8],
  unknown: 6,
  unknownLabel: "Wij rekenen met een gemiddelde van 6 cm",
  unit: " cm",
  format: (v) => String(v),
  label: (v) => (v <= 5 ? "Dunne chape" : v >= 8 ? "Dikke chape" : "Gangbare chapedikte"),
  bigEvery: 1,
  tick: 0.25,
};

const WHAT = [
  { v: "pleister", image: "/vernast/wat-pleister.webp", title: "Pleisterwerk", sub: "Muren drogen" },
  { v: "chape", image: "/vernast/wat-chape.webp", title: "Vloer drogen", sub: "Chape" },
  {
    v: "beide",
    image: "/vernast/wat-beide.webp",
    title: "Pleisterwerk + chape",
    sub: "Muren + vloer drogen",
  },
  {
    v: "waterschade",
    image: "/vernast/wat-waterschade.webp",
    title: "Waterschade",
    sub: "Absorptiedroging, snel geleverd",
  },
];

interface Answers {
  size: string;
  wat: string | null;
  pd: string;
  cd: string;
  heat: string | null;
}

const START: Answers = { size: "180", wat: null, pd: "2", cd: "6", heat: null };

const needsPlaster = (wat: string | null) => wat === "pleister" || wat === "beide";
const needsScreed = (wat: string | null) => wat === "chape" || wat === "beide";

/**
 * Which of the six panels this visitor actually walks through. A building over
 * 260 m² skips straight to the custom-quote panel; waterschade skips both
 * thickness questions.
 */
function sequence(answers: Answers): number[] {
  if (answers.size === "custom") return [0, 5];
  const steps = [0, 1];
  if (needsPlaster(answers.wat)) steps.push(2);
  if (needsScreed(answers.wat)) steps.push(3);
  steps.push(4);
  return steps;
}

const VerhuurCalculatorPage = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Answers>(START);
  const [pos, setPos] = useState(0);

  const steps = sequence(answers);
  const index = steps[Math.min(pos, steps.length - 1)];

  const finish = (next: Answers) => {
    const config: PackageConfig = {
      size: next.size,
      wat: next.wat ?? "beide",
      pd: next.pd === "onbekend" ? "2" : next.pd,
      cd: next.cd === "onbekend" ? "6" : next.cd,
      // "nee" means: the visitor does not heat, so the package carries heaters.
      heat: next.heat === "nee",
      weeks: 2,
    };
    navigate(`/verhuur/pakket?${configToQuery(config)}`);
  };

  const advance = (next: Answers) => {
    const seq = sequence(next);
    if (pos < seq.length - 1) setPos((p) => p + 1);
    else finish(next);
  };

  const answer = (patch: Partial<Answers>) => {
    const next = { ...answers, ...patch };
    setAnswers(next);
    window.setTimeout(() => advance(next), ADVANCE_DELAY);
  };

  const step = (n: number, className = "astep") =>
    `${className}${index === n ? " on" : ""}`;

  return (
    <div className="vh-calc">
      <PageMeta {...SEO.verhuurCalculator} />
      {/*
        De designfile zet hier `data-light="320"`, maar deze pagina heeft geen
        rode hero: de header staat vanaf de eerste pixel op de lichte
        paginakleur. Met 320 blijft hij tot dan wit-op-lichtgrijs en is de
        contactregel onleesbaar. -1 = meteen de lichte variant.
      */}
      <V3Header lightAfter={-1} />

      <section className="fstage" id="flow">
        <div className="shell">
          {/*
            De wizard begint visueel meteen bij vraag 1; er is geen zichtbare
            paginakop. Zonder h1 weet een crawler niet waar deze pagina over
            gaat — vandaar een kop die alleen voor schermlezers en crawlers
            bestaat.
          */}
          <h1 className="sr-only">
            Droogpakket samenstellen — bereken uw toestellen, droogtijd en prijs
          </h1>
          <div className="acard">
            <img className="worker" src="/vernast/worker-carry.webp" alt="" loading="lazy" decoding="async" />
            <div className="inner">
              <div className="aptop">
                <button
                  className="aback"
                  type="button"
                  hidden={pos === 0}
                  onClick={() => setPos((p) => Math.max(0, p - 1))}
                >
                  ← Terug
                </button>
                <div className="adots">
                  {steps.map((_, i) => (
                    <i key={i} className={i < pos ? "done" : i === pos ? "on" : undefined} />
                  ))}
                </div>
                <span className="acount">
                  Stap {Math.min(pos, steps.length - 1) + 1} / {steps.length}
                </span>
              </div>

              <div className="aq">
                <div className={step(0)} data-a="0">
                  <div className="aqh">
                    <span className="aqn">1</span>
                    <h2>
                      Hoe groot is uw woning<sup>*</sup>
                    </h2>
                  </div>
                  <p className="asub">Sleep over de liniaal tot de oppervlakte die het best past.</p>
                  <Ruler
                    config={SIZE}
                    onChange={(value) => setAnswers((prev) => ({ ...prev, size: value }))}
                  />
                  <div className="anext">
                    <button className="btn btn-r" type="button" onClick={() => advance(answers)}>
                      Verder →
                    </button>
                  </div>
                </div>

                <div className={step(1)} data-a="1">
                  <div className="aqh">
                    <span className="aqn">2</span>
                    <h2>
                      Wat wilt u drogen<sup>*</sup>
                    </h2>
                  </div>
                  <p className="asub">Pleisterwerk en chape geven hun vocht anders af.</p>
                  <div className="wcards">
                    {WHAT.map((option) => (
                      <button
                        key={option.v}
                        type="button"
                        className={`wcard${answers.wat === option.v ? " sel" : ""}`}
                        onClick={() => answer({ wat: option.v })}
                      >
                        <img src={option.image} alt="" loading="lazy" decoding="async" />
                        <span className="wb">
                          <span className="oc" />
                          <span>
                            <b>{option.title}</b>
                            <small>{option.sub}</small>
                          </span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className={step(2)} data-a="2">
                  <div className="aqh">
                    <span className="aqn">3</span>
                    <h2>
                      Hoe dik is het pleisterwerk<sup>*</sup>
                    </h2>
                  </div>
                  <p className="asub">
                    Dikker pleisterwerk bevat meer water en vraagt meer droogtijd. Sleep naar de
                    juiste dikte.
                  </p>
                  <Ruler
                    config={PLASTER}
                    onChange={(value) => setAnswers((prev) => ({ ...prev, pd: value }))}
                  />
                  <div className="anext">
                    <button className="btn btn-r" type="button" onClick={() => advance(answers)}>
                      Verder →
                    </button>
                  </div>
                </div>

                <div className={step(3)} data-a="3">
                  <div className="aqh">
                    <span className="aqn">4</span>
                    <h2>
                      Hoe dik is de chape<sup>*</sup>
                    </h2>
                  </div>
                  <p className="asub">
                    Chape is meestal de grootste vochtbron. Sleep naar de juiste dikte.
                  </p>
                  <Ruler
                    config={SCREED}
                    onChange={(value) => setAnswers((prev) => ({ ...prev, cd: value }))}
                  />
                  <div className="anext">
                    <button className="btn btn-r" type="button" onClick={() => advance(answers)}>
                      Verder →
                    </button>
                  </div>
                </div>

                <div className={step(4)} data-a="4">
                  <div className="aqh">
                    <span className="aqn">5</span>
                    <h2>Zorgt u zelf voor verwarming?</h2>
                  </div>
                  <p className="asub">
                    Drogen werkt enkel goed boven 15 °C. Zo niet, voegen wij elektrische kachels
                    toe.
                  </p>
                  <div className="wcards">
                    <button
                      type="button"
                      className={`wcard${answers.heat === "ja" ? " sel" : ""}`}
                      onClick={() => answer({ heat: "ja" })}
                    >
                      <span className="hstage">
                        <span className="hwave" style={{ left: "42%", animationDelay: "0s" }} />
                        <span className="hwave" style={{ left: "50%", animationDelay: ".8s" }} />
                        <span className="hwave" style={{ left: "58%", animationDelay: "1.5s" }} />
                        <span className="hglow" />
                        <span className="radiator">
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                          <i className="rad-dial" />
                        </span>
                      </span>
                      <span className="wb">
                        <span className="oc" />
                        <span>
                          <b>Ja, ik verwarm zelf</b>
                          <small>De ruimte is boven 15 °C, uw eigen verwarming staat aan</small>
                        </span>
                      </span>
                    </button>

                    <button
                      type="button"
                      className={`wcard${answers.heat === "nee" ? " sel" : ""}`}
                      onClick={() => answer({ heat: "nee" })}
                    >
                      <span className="hstage">
                        <span className="hwave" style={{ left: "44%", animationDelay: ".4s" }} />
                        <span className="hwave" style={{ left: "52%", animationDelay: "1.1s" }} />
                        <span className="hwave" style={{ left: "60%", animationDelay: "1.8s" }} />
                        <span className="hglow" />
                        <img src="/vernast/kachel-30.webp" alt="Vernast elektrische kachel" loading="lazy" decoding="async" />
                      </span>
                      <span className="wb">
                        <span className="oc" />
                        <span>
                          <b>Nee, voeg kachels toe</b>
                          <small>Onze elektrische kachels komen mee in het pakket</small>
                        </span>
                      </span>
                    </button>
                  </div>
                </div>

                <div className={step(5)} data-a="5">
                  <div className="aqh">
                    <span className="aqn">★</span>
                    <h2>Groot project? Dat is maatwerk.</h2>
                  </div>
                  <p className="asub">
                    Boven 260 m² stellen wij het droogplan persoonlijk samen, met plaatsbezoek indien
                    nodig, projectprijs en planning op maat. Vertel ons kort over uw project en wij
                    nemen binnen één werkdag contact op.
                  </p>
                  <div style={{ display: "flex", gap: 11, flexWrap: "wrap", maxWidth: 460 }}>
                    <a
                      className="btn btn-w"
                      href="https://survey.typeform.com/to/QJgaZgHX"
                      target="_blank"
                      rel="noopener"
                    >
                      Vraag uw maatwerkofferte aan →
                    </a>
                    <a className="btn btn-r" href="tel:+3236899065">
                      Bel 03 689 90 65
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <V3Footer />
    </div>
  );
};

export default VerhuurCalculatorPage;

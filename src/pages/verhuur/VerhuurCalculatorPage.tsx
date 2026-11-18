import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import Ruler, { type RulerConfig } from "@/components/verhuur/Ruler";
import {
  CD_VALUES,
  DEFAULT_CD,
  DEFAULT_PD,
  DEFAULT_SIZE,
  PD_VALUES,
  SIZE_VALUES,
  configToQuery,
  type PackageConfig,
} from "@/lib/verhuur";
import { useSeo } from "@/data/seo";
import { useCopy, useLokaalPad, type Copy } from "@/i18n/useTaal";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import "@/styles/verhuur.css";
import "@/styles/verhuur-fixes.css";

/** The design waits this long after a card is picked before advancing. */
const ADVANCE_DELAY = 240;

/*
  De linialen worden uit de catalogus opgebouwd, niet uit een lijst hier.

  Ze stonden hardgecodeerd op 40–260 m², pleister 1,5/2/3 cm en chape 5/6/8 cm.
  Dat week op drie punten af van wat Vernast verkoopt — de shop gaat tot 300 m²,
  heeft pleister 1/2/3 en chape 5/6/7 — dus kon een bezoeker een combinatie
  samenstellen waarvoor geen enkel pakket bestond. Nu bepaalt de catalogus welke
  standen er zijn: wat de shop niet verkoopt, is niet te kiezen.
*/
const SIZES = SIZE_VALUES.map(Number);
const PLASTERS = PD_VALUES.map((v) => Number(v.replace(",", ".")));
const SCREEDS = CD_VALUES.map((v) => Number(v.replace(",", ".")));

const grootste = (reeks: number[]) => reeks[reeks.length - 1] ?? 0;
const middelste = (reeks: number[]) => reeks[Math.floor(reeks.length / 2)] ?? 0;

interface CalcCopy {
  meerDan: (n: number) => string;
  gebouw: (v: number) => string;
  gemiddelde: (n: number) => string;
  dunPleister: string;
  dikPleister: string;
  gangbarePleister: string;
  dunneChape: string;
  dikkeChape: string;
  gangbareChape: string;
  what: { alt: string; title: string; sub: string }[];
  serviceName: string;
  serviceDesc: string;
  serviceType: string;
  home: string;
  h1: string;
  workerAlt: string;
  terug: string;
  stap: (n: number, van: number) => string;
  q1: string;
  q1sub: string;
  verder: string;
  q2: string;
  q2sub: string;
  q3: string;
  q3sub: string;
  q4: string;
  q4sub: string;
  q5: string;
  q5sub: string;
  ja: string;
  jaSub: string;
  kachelAlt: string;
  nee: string;
  neeSub: string;
  maatH: string;
  maatP: string;
  maatCta: string;
  bel: string;
}

const COPY = {
  nl: {
    meerDan: (n) => `Meer dan ${n} m², maatwerkofferte`,
    gebouw: (v) => `Gebouw kleiner dan ${v} m²`,
    gemiddelde: (n) => `Wij rekenen met een gemiddelde van ${n} cm`,
    dunPleister: "Dun pleisterwerk",
    dikPleister: "Dik pleisterwerk",
    gangbarePleister: "Gangbare pleisterdikte",
    dunneChape: "Dunne chape",
    dikkeChape: "Dikke chape",
    gangbareChape: "Gangbare chapedikte",
    what: [
      { alt: "Vers gepleisterde muren in een woning in afwerking", title: "Pleisterwerk", sub: "Muren drogen" },
      { alt: "Verse chapevloer in een nieuwbouwwoning", title: "Vloer drogen", sub: "Chape" },
      {
        alt: "Leefruimte met vers pleisterwerk én een verse chapevloer",
        title: "Pleisterwerk + chape",
        sub: "Muren + vloer drogen",
      },
      {
        alt: "Muur met vochtschade en schimmel na waterschade",
        title: "Waterschade",
        sub: "Absorptiedroging, snel geleverd",
      },
    ],
    serviceName: "Droogpakket samenstellen",
    serviceDesc:
      "Bereken in vijf vragen welke toestellen uw woning nodig heeft, hoe lang het drogen duurt en wat het kost.",
    serviceType: "Bouwdroging",
    home: "Home",
    h1: "Droogpakket samenstellen, bereken uw toestellen, droogtijd en prijs",
    workerAlt: "Vernast technieker draagt een bouwdroger op zijn rug",
    terug: "← Terug",
    stap: (n, van) => `Stap ${n} / ${van}`,
    q1: "Hoe groot is uw woning",
    q1sub: "Sleep over de liniaal tot de oppervlakte die het best past.",
    verder: "Verder →",
    q2: "Wat wilt u drogen",
    q2sub: "Pleisterwerk en chape geven hun vocht anders af.",
    q3: "Hoe dik is het pleisterwerk",
    q3sub: "Dikker pleisterwerk bevat meer water en vraagt meer droogtijd. Sleep naar de juiste dikte.",
    q4: "Hoe dik is de chape",
    q4sub: "Chape is meestal de grootste vochtbron. Sleep naar de juiste dikte.",
    q5: "Zorgt u zelf voor verwarming?",
    q5sub: "Drogen werkt enkel goed boven 15 °C. Zo niet, voegen wij elektrische kachels toe.",
    ja: "Ja, ik verwarm zelf",
    jaSub: "De ruimte is boven 15 °C, uw eigen verwarming staat aan",
    kachelAlt: "Vernast elektrische kachel",
    nee: "Nee, voeg kachels toe",
    neeSub: "Onze elektrische kachels komen mee in het pakket",
    maatH: "Groot project? Dat is maatwerk.",
    maatP:
      "Boven 260 m² stellen wij het droogplan persoonlijk samen, met plaatsbezoek indien nodig, projectprijs en planning op maat. Vertel ons kort over uw project en wij nemen binnen één werkdag contact op.",
    maatCta: "Vraag uw maatwerkofferte aan →",
    bel: "Bel 03 689 90 65",
  },
  fr: {
    meerDan: (n) => `Plus de ${n} m², devis sur mesure`,
    gebouw: (v) => `Bâtiment de moins de ${v} m²`,
    gemiddelde: (n) => `Nous calculons avec une moyenne de ${n} cm`,
    dunPleister: "Plafonnage fin",
    dikPleister: "Plafonnage épais",
    gangbarePleister: "Épaisseur de plafonnage courante",
    dunneChape: "Chape fine",
    dikkeChape: "Chape épaisse",
    gangbareChape: "Épaisseur de chape courante",
    what: [
      {
        alt: "Murs fraîchement plafonnés dans une habitation en finition",
        title: "Plafonnage",
        sub: "Sécher les murs",
      },
      { alt: "Chape fraîche dans une maison neuve", title: "Sécher le sol", sub: "Chape" },
      {
        alt: "Séjour avec un plafonnage frais et une chape fraîche",
        title: "Plafonnage + chape",
        sub: "Sécher murs + sol",
      },
      {
        alt: "Mur avec dégâts d'humidité et moisissures après des dégâts des eaux",
        title: "Dégâts des eaux",
        sub: "Séchage par absorption, livraison rapide",
      },
    ],
    serviceName: "Composer votre pack de séchage",
    serviceDesc:
      "Calculez en cinq questions de quels appareils votre habitation a besoin, combien de temps dure le séchage et ce qu'il coûte.",
    serviceType: "Séchage de chantier",
    home: "Accueil",
    h1: "Composer votre pack de séchage : calculez vos appareils, le temps de séchage et le prix",
    workerAlt: "Technicien Vernast portant un déshumidificateur de chantier sur le dos",
    terug: "← Retour",
    stap: (n, van) => `Étape ${n} / ${van}`,
    q1: "Quelle est la superficie de votre habitation",
    q1sub: "Faites glisser la règle jusqu'à la superficie qui correspond le mieux.",
    verder: "Suivant →",
    q2: "Que voulez-vous sécher",
    q2sub: "Le plafonnage et la chape ne libèrent pas leur humidité de la même manière.",
    q3: "Quelle est l'épaisseur du plafonnage",
    q3sub:
      "Un plafonnage plus épais contient plus d'eau et demande plus de temps de séchage. Faites glisser jusqu'à la bonne épaisseur.",
    q4: "Quelle est l'épaisseur de la chape",
    q4sub: "La chape est généralement la principale source d'humidité. Faites glisser jusqu'à la bonne épaisseur.",
    q5: "Chauffez-vous vous-même ?",
    q5sub: "Le séchage ne fonctionne bien qu'au-dessus de 15 °C. Sinon, nous ajoutons des chauffages électriques.",
    ja: "Oui, je chauffe moi-même",
    jaSub: "La pièce est à plus de 15 °C, votre propre chauffage est allumé",
    kachelAlt: "Chauffage électrique Vernast",
    nee: "Non, ajoutez des chauffages",
    neeSub: "Nos chauffages électriques sont inclus dans le pack",
    maatH: "Grand projet ? C'est du sur-mesure.",
    maatP:
      "Au-delà de 260 m², nous établissons le plan de séchage personnellement, avec visite sur place si nécessaire, prix de projet et planning sur mesure. Décrivez-nous brièvement votre projet et nous vous recontactons dans un délai d'un jour ouvrable.",
    maatCta: "Demandez votre devis sur mesure →",
    bel: "Appelez le 03 689 90 65",
  },
} satisfies Copy<CalcCopy>;

/** De drie linialen, met hun teksten in de taal van de pagina. */
function linialen(t: CalcCopy): { size: RulerConfig; plaster: RulerConfig; screed: RulerConfig } {
  return {
    size: {
      min: Math.max(0, SIZES[0] - 20),
      max: grootste(SIZES) + 20,
      snaps: SIZES,
      custom: true,
      unit: " m²",
      format: (v) => String(v),
      label: (v) => (Number.isNaN(v) ? t.meerDan(grootste(SIZES)) : t.gebouw(v)),
      bigEvery: 40,
      tick: 10,
    },
    plaster: {
      min: Math.max(0, PLASTERS[0] - 0.5),
      max: grootste(PLASTERS) + 0.5,
      snaps: PLASTERS,
      unknown: middelste(PLASTERS),
      unknownLabel: t.gemiddelde(middelste(PLASTERS)),
      unit: " cm",
      format: (v) => String(v).replace(".", ","),
      label: (v) =>
        v <= PLASTERS[0] ? t.dunPleister : v >= grootste(PLASTERS) ? t.dikPleister : t.gangbarePleister,
      bigEvery: 0.5,
      tick: 0.1,
    },
    screed: {
      min: Math.max(0, SCREEDS[0] - 1),
      max: grootste(SCREEDS) + 1,
      snaps: SCREEDS,
      unknown: middelste(SCREEDS),
      unknownLabel: t.gemiddelde(middelste(SCREEDS)),
      unit: " cm",
      format: (v) => String(v),
      label: (v) => (v <= SCREEDS[0] ? t.dunneChape : v >= grootste(SCREEDS) ? t.dikkeChape : t.gangbareChape),
      bigEvery: 1,
      tick: 0.25,
    },
  };
}

/** Beeld en sleutel per kaart; de teksten staan in `COPY.what`, in dezelfde volgorde. */
const WHAT = [
  { v: "pleister", image: "/vernast/wat-pleister.webp" },
  { v: "chape", image: "/vernast/wat-chape.webp" },
  { v: "beide", image: "/vernast/wat-beide.webp" },
  { v: "waterschade", image: "/vernast/wat-waterschade.webp" },
];

interface Answers {
  size: string;
  wat: string | null;
  pd: string;
  cd: string;
  heat: string | null;
}

const START: Answers = {
  size: DEFAULT_SIZE,
  wat: null,
  pd: DEFAULT_PD,
  cd: DEFAULT_CD,
  heat: null,
};

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
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const seo = useSeo("verhuurCalculator");
  const { size: SIZE, plaster: PLASTER, screed: SCREED } = useMemo(() => linialen(t), [t]);
  const [answers, setAnswers] = useState<Answers>(START);
  const [pos, setPos] = useState(0);

  const steps = sequence(answers);
  const index = steps[Math.min(pos, steps.length - 1)];

  const finish = (next: Answers) => {
    const config: PackageConfig = {
      size: next.size,
      wat: next.wat ?? "beide",
      pd: next.pd === "onbekend" ? DEFAULT_PD : next.pd,
      cd: next.cd === "onbekend" ? DEFAULT_CD : next.cd,
      // "nee" means: the visitor does not heat, so the package carries heaters.
      heat: next.heat === "nee",
      weeks: 2,
    };
    navigate(`${lp("/verhuur/pakket")}?${configToQuery(config)}`);
  };

  const advance = (next: Answers) => {
    const seq = sequence(next);
    if (pos < seq.length - 1) setPos((p) => p + 1);
    else finish(next);
  };

  /*
    De vertraging waarmee een gekozen kaart nog even oplicht, is ook het venster
    waarin iemand zich bedenkt — en dat gebeurt: klikken op "pleisterwerk" en een
    tel later op "beide" liet twee timers lopen, die elk een stap opschoven. De
    bezoeker sloeg zo de vraag naar de pleisterdikte over, kwam op de chape uit
    en zag de teller op "stap 4 / 5" springen. Wie dan op Terug drukte, kreeg de
    vraag te zien die hij nooit gehad had.

    Eén timer dus: een nieuwe keuze annuleert de vorige.
  */
  const advanceTimer = useRef<number | null>(null);

  useEffect(() => () => {
    if (advanceTimer.current !== null) window.clearTimeout(advanceTimer.current);
  }, []);

  const answer = (patch: Partial<Answers>) => {
    const next = { ...answers, ...patch };
    setAnswers(next);
    if (advanceTimer.current !== null) window.clearTimeout(advanceTimer.current);
    advanceTimer.current = window.setTimeout(() => advance(next), ADVANCE_DELAY);
  };

  const step = (n: number, className = "astep") =>
    `${className}${index === n ? " on" : ""}`;

  return (
    <div className="vh-calc">
      {/*
        Ook hier ontbrak alle gestructureerde data, terwijl deze pagina met 75
        interne links de best gelinkte van de site is. Zonder kruimelpad staat
        ze voor een crawler los van de rest.
      */}
      <PageMeta
        {...seo}
        jsonLd={[
          serviceSchema({
            name: t.serviceName,
            description: t.serviceDesc,
            path: lp("/verhuur/calculator"),
            serviceType: t.serviceType,
          }),
          breadcrumbSchema([
            { name: t.home, path: lp("/") },
            { name: t.serviceName, path: lp("/verhuur/calculator") },
          ]),
        ]}
      />
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
          <h1 className="sr-only">{t.h1}</h1>
          <div className="acard">
            <img className="worker" src="/vernast/worker-carry.webp" alt={t.workerAlt} loading="lazy" decoding="async" />
            <div className="inner">
              <div className="aptop">
                <button
                  className="aback"
                  type="button"
                  hidden={pos === 0}
                  onClick={() => setPos((p) => Math.max(0, p - 1))}
                >
                  {t.terug}
                </button>
                <div className="adots">
                  {steps.map((_, i) => (
                    <i key={i} className={i < pos ? "done" : i === pos ? "on" : undefined} />
                  ))}
                </div>
                <span className="acount">
                  {t.stap(Math.min(pos, steps.length - 1) + 1, steps.length)}
                </span>
              </div>

              <div className="aq">
                <div className={step(0)} data-a="0">
                  <div className="aqh">
                    <span className="aqn">1</span>
                    <h2>
                      {t.q1}<sup>*</sup>
                    </h2>
                  </div>
                  <p className="asub">{t.q1sub}</p>
                  <Ruler
                    config={SIZE}
                    onChange={(value) => setAnswers((prev) => ({ ...prev, size: value }))}
                  />
                  <div className="anext">
                    <button className="btn btn-r" type="button" onClick={() => advance(answers)}>
                      {t.verder}
                    </button>
                  </div>
                </div>

                <div className={step(1)} data-a="1">
                  <div className="aqh">
                    <span className="aqn">2</span>
                    <h2>
                      {t.q2}<sup>*</sup>
                    </h2>
                  </div>
                  <p className="asub">{t.q2sub}</p>
                  <div className="wcards">
                    {WHAT.map((option, i) => (
                      <button
                        key={option.v}
                        type="button"
                        className={`wcard${answers.wat === option.v ? " sel" : ""}`}
                        onClick={() => answer({ wat: option.v })}
                      >
                        <img src={option.image} alt={t.what[i].alt} loading="lazy" decoding="async" />
                        <span className="wb">
                          <span className="oc" />
                          <span>
                            <b>{t.what[i].title}</b>
                            <small>{t.what[i].sub}</small>
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
                      {t.q3}<sup>*</sup>
                    </h2>
                  </div>
                  <p className="asub">{t.q3sub}</p>
                  <Ruler
                    config={PLASTER}
                    onChange={(value) => setAnswers((prev) => ({ ...prev, pd: value }))}
                  />
                  <div className="anext">
                    <button className="btn btn-r" type="button" onClick={() => advance(answers)}>
                      {t.verder}
                    </button>
                  </div>
                </div>

                <div className={step(3)} data-a="3">
                  <div className="aqh">
                    <span className="aqn">4</span>
                    <h2>
                      {t.q4}<sup>*</sup>
                    </h2>
                  </div>
                  <p className="asub">{t.q4sub}</p>
                  <Ruler
                    config={SCREED}
                    onChange={(value) => setAnswers((prev) => ({ ...prev, cd: value }))}
                  />
                  <div className="anext">
                    <button className="btn btn-r" type="button" onClick={() => advance(answers)}>
                      {t.verder}
                    </button>
                  </div>
                </div>

                <div className={step(4)} data-a="4">
                  <div className="aqh">
                    <span className="aqn">5</span>
                    <h2>{t.q5}</h2>
                  </div>
                  <p className="asub">{t.q5sub}</p>
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
                          <b>{t.ja}</b>
                          <small>{t.jaSub}</small>
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
                        <img src="/vernast/kachel-30.webp" alt={t.kachelAlt} loading="lazy" decoding="async" />
                      </span>
                      <span className="wb">
                        <span className="oc" />
                        <span>
                          <b>{t.nee}</b>
                          <small>{t.neeSub}</small>
                        </span>
                      </span>
                    </button>
                  </div>
                </div>

                <div className={step(5)} data-a="5">
                  <div className="aqh">
                    <span className="aqn">★</span>
                    <h2>{t.maatH}</h2>
                  </div>
                  <p className="asub">{t.maatP}</p>
                  <div style={{ display: "flex", gap: 11, flexWrap: "wrap", maxWidth: 460 }}>
                    <a
                      className="btn btn-w"
                      href="https://survey.typeform.com/to/QJgaZgHX"
                      target="_blank"
                      rel="noopener"
                    >
                      {t.maatCta}
                    </a>
                    <a className="btn btn-r" href="tel:+3236899065">
                      {t.bel}
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

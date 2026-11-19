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
  allItems,
  configPrice,
  configToQuery,
  configWeeks,
  euro,
  toestellenZin,
  type PackageConfig,
} from "@/lib/verhuur";
import { SEO } from "@/data/seo";
import {
  GRATIS_LEVERING_VOETNOOT,
  leverzoneNaarQuery,
  zoneVoor,
  type Land,
} from "@/lib/levering";
import { withVat } from "@/lib/booking";
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

const SIZE: RulerConfig = {
  min: Math.max(0, SIZES[0] - 20),
  max: grootste(SIZES) + 20,
  snaps: SIZES,
  custom: true,
  unit: " m²",
  format: (v) => String(v),
  label: (v) =>
    Number.isNaN(v)
      ? `Meer dan ${grootste(SIZES)} m², maatwerkofferte`
      : `Gebouw kleiner dan ${v} m²`,
  bigEvery: 40,
  tick: 10,
};

const PLASTER: RulerConfig = {
  min: Math.max(0, PLASTERS[0] - 0.5),
  max: grootste(PLASTERS) + 0.5,
  snaps: PLASTERS,
  unknown: middelste(PLASTERS),
  unknownLabel: `Wij rekenen met een gemiddelde van ${middelste(PLASTERS)} cm`,
  unit: " cm",
  format: (v) => String(v).replace(".", ","),
  label: (v) =>
    v <= PLASTERS[0]
      ? "Dun pleisterwerk"
      : v >= grootste(PLASTERS)
        ? "Dik pleisterwerk"
        : "Gangbare pleisterdikte",
  bigEvery: 0.5,
  tick: 0.1,
};

const SCREED: RulerConfig = {
  min: Math.max(0, SCREEDS[0] - 1),
  max: grootste(SCREEDS) + 1,
  snaps: SCREEDS,
  unknown: middelste(SCREEDS),
  unknownLabel: `Wij rekenen met een gemiddelde van ${middelste(SCREEDS)} cm`,
  unit: " cm",
  format: (v) => String(v),
  label: (v) =>
    v <= SCREEDS[0] ? "Dunne chape" : v >= grootste(SCREEDS) ? "Dikke chape" : "Gangbare chapedikte",
  bigEvery: 1,
  tick: 0.25,
};

const WHAT = [
  {
    v: "pleister",
    image: "/vernast/wat-pleister.webp",
    alt: "Vers gepleisterde muren in een woning in afwerking",
    title: "Pleisterwerk",
    sub: "Muren drogen",
  },
  {
    v: "chape",
    image: "/vernast/wat-chape.webp",
    alt: "Verse chapevloer in een nieuwbouwwoning",
    title: "Vloer drogen",
    sub: "Chape",
  },
  {
    v: "beide",
    image: "/vernast/wat-beide.webp",
    alt: "Leefruimte met vers pleisterwerk én een verse chapevloer",
    title: "Pleisterwerk + chape",
    sub: "Muren + vloer drogen",
  },
  {
    v: "waterschade",
    image: "/vernast/wat-waterschade.webp",
    alt: "Muur met vochtschade en schimmel na waterschade",
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
  /*
    Waar het naartoe gaat. Laatste vraag en niet de eerste: een calculator die
    opent met "wat is uw postcode" vraagt iets terug voordat hij iets gegeven
    heeft. Hier heeft de bezoeker zijn pakket al zien ontstaan, en levert de
    postcode hem meteen zijn volledige prijs op.
  */
  land: Land;
  postcode: string;
}

const START: Answers = {
  size: DEFAULT_SIZE,
  wat: null,
  pd: DEFAULT_PD,
  cd: DEFAULT_CD,
  heat: null,
  land: "BE",
  postcode: "",
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
  // Panel 6: waar het pakket heen gaat. Altijd als laatste, ook bij waterschade.
  steps.push(6);
  return steps;
}

const VerhuurCalculatorPage = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Answers>(START);
  const [pos, setPos] = useState(0);

  const steps = sequence(answers);
  const index = steps[Math.min(pos, steps.length - 1)];

  /*
    De zone van de ingetypte postcode, en wat het pakket daarmee kost. Hier
    staat voor het eerst een bedrag op het scherm; dat is bewust, want de
    bezoeker moet het verschil zien dat zijn postcode maakt vóór hij op de
    pakketpagina komt.
  */
  const leverzone = useMemo(
    () => zoneVoor(answers.land, answers.postcode),
    [answers.land, answers.postcode],
  );

  const prijs = useMemo(() => {
    if (!leverzone) return null;
    const config: PackageConfig = {
      size: answers.size,
      wat: answers.wat ?? "beide",
      pd: answers.pd === "onbekend" ? DEFAULT_PD : answers.pd,
      cd: answers.cd === "onbekend" ? DEFAULT_CD : answers.cd,
      heat: answers.heat === "nee",
      weeks: 2,
    };
    const items = allItems(config, {});
    return {
      pakket: configPrice(config, items),
      weken: configWeeks(config),
      toestellen: toestellenZin(items),
      transport: leverzone.zone.tarief,
    };
  }, [leverzone, answers]);

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
    navigate(
      `/verhuur/pakket?${configToQuery(config)}${leverzoneNaarQuery(next.land, next.postcode)}`,
    );
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
        {...SEO.verhuurCalculator}
        jsonLd={[
          serviceSchema({
            name: "Droogpakket samenstellen",
            description:
              "Bereken in vijf vragen welke toestellen uw woning nodig heeft, hoe lang het drogen duurt en wat het kost.",
            path: "/verhuur/calculator",
            serviceType: "Bouwdroging",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Droogpakket samenstellen", path: "/verhuur/calculator" },
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
          <h1 className="sr-only">
            Droogpakket samenstellen, bereken uw toestellen, droogtijd en prijs
          </h1>
          <div className="acard">
            <img className="worker" src="/vernast/worker-carry.webp" alt="Vernast technieker draagt een bouwdroger op zijn rug" loading="lazy" decoding="async" />
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
                        <img src={option.image} alt={option.alt} loading="lazy" decoding="async" />
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

                {/*
                  Laatste vraag: waar gaat het heen. Verplicht, want zonder
                  postcode staat er op de volgende pagina een prijs zonder
                  transport — en dat is precies de verrassing die we twee
                  schermen eerder beloven niet te doen.

                  Over welke dag wij in die richting rijden staat hier bewust
                  niets: dat is onze planning, en de bezoeker kiest straks zelf
                  zijn leverdag in de agenda. Deze stap gaat alleen over wat het
                  vervoer kost.
                */}
                <div className={step(6)} data-a="6">
                  <div className="aqh">
                    <span className="aqn">{steps.length}</span>
                    <h2>Bekijk uw levering</h2>
                  </div>
                  <p className="asub">
                    De huurprijs van uw pakket is overal dezelfde. Uw postcode bepaalt alleen of
                    de levering inbegrepen is.
                  </p>
                  <div className="pcrij">
                    <label className="pcveld">
                      <span>Land</span>
                      <select
                        value={answers.land}
                        onChange={(e) =>
                          setAnswers((prev) => ({ ...prev, land: e.target.value as Land }))
                        }
                      >
                        <option value="BE">België</option>
                        <option value="NL">Nederland</option>
                      </select>
                    </label>
                    <label className="pcveld">
                      <span>Postcode van de werf</span>
                      <input
                        type="text"
                        inputMode="numeric"
                        autoComplete="postal-code"
                        placeholder={answers.land === "NL" ? "4811" : "2630"}
                        maxLength={4}
                        value={answers.postcode}
                        onChange={(e) =>
                          setAnswers((prev) => ({
                            ...prev,
                            postcode: e.target.value.replace(/\D/g, ""),
                          }))
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && leverzone) {
                            e.preventDefault();
                            advance(answers);
                          }
                        }}
                      />
                    </label>
                  </div>

                  {answers.postcode.length === 4 && !leverzone && (
                    <div className="pcuit nee">
                      <b>Deze postcode kennen wij niet</b>
                      <small>
                        Controleer of het land klopt — een Belgische en een Nederlandse postcode van
                        vier cijfers kunnen op elkaar lijken.
                      </small>
                    </div>
                  )}

                  {leverzone && prijs && (
                    <div
                      className={`pcuit ${
                        prijs.transport === null ? "opmaat" : prijs.transport === 0 ? "ja" : "betaald"
                      }`}
                    >
                      {/*
                        Drie keer dezelfde opbouw: wat er met de levering
                        gebeurt, en dat plaatsing hoe dan ook inbegrepen blijft.
                        De afstand tot het magazijn staat er niet meer bij — dat
                        is onze logistiek, de bezoeker koopt een uitkomst.
                      */}
                      {prijs.transport === 0 ? (
                        <>
                          <b>Gratis levering*</b>
                          <small>Levering, plaatsing en ophaling zijn inbegrepen.</small>
                        </>
                      ) : prijs.transport === null ? (
                        <>
                          <b>Levering met transportprijs op maat</b>
                          <small>
                            Plaatsing en ophaling blijven inbegrepen. De vervoerskost naar uw
                            postcode maken wij per order en bevestigen we binnen één werkdag.
                          </small>
                        </>
                      ) : (
                        <>
                          <b>Levering met transportvergoeding</b>
                          <small>
                            Plaatsing en ophaling blijven inbegrepen. Voor de rit heen en de ophaling
                            terug komt er één vaste vergoeding bij.
                          </small>
                        </>
                      )}

                      {/*
                        Het bedrag verandert mee zodra de postcode er staat. Dat
                        is de hele reden dat deze vraag vóór de pakketpagina komt
                        en niet erna.
                      */}
                      <div className="pcsom">
                        <div>
                          <span>
                            Uw droogpakket
                            {prijs.toestellen && <em>{prijs.toestellen} · {prijs.weken} weken</em>}
                          </span>
                          <b>{euro(withVat(prijs.pakket))}</b>
                        </div>
                        <div>
                          <span>Transport, levering én ophaling</span>
                          <b>
                            {prijs.transport === null
                              ? "op maat"
                              : prijs.transport === 0
                                ? "inbegrepen"
                                : euro(withVat(prijs.transport))}
                          </b>
                        </div>
                        <div className="pctot">
                          <span>
                            {prijs.transport === null ? "Pakket incl. btw" : "Totaal incl. btw"}
                          </span>
                          <b>{euro(withVat(prijs.pakket + (prijs.transport ?? 0)))}</b>
                        </div>
                      </div>
                    </div>
                  )}

                  {leverzone && leverzone.zone.tarief === 0 && (
                    <span className="pcnoot">{GRATIS_LEVERING_VOETNOOT}</span>
                  )}

                  <div className="anext">
                    <button
                      className="btn btn-r"
                      type="button"
                      disabled={!leverzone}
                      onClick={() => advance(answers)}
                    >
                      Bekijk mijn droogpakket →
                    </button>
                    {!leverzone && (
                      <span className="pcnodig">
                        Vul uw postcode in — die bepaalt of levering inbegrepen is.
                      </span>
                    )}
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

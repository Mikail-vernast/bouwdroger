import { Link } from "react-router-dom";
import GidsShell, { GidsFaqSectie, type GidsFaq } from "@/components/gids/GidsShell";
import ContactBlok from "@/components/content/ContactBlok";
import Reveal from "@/components/Reveal";
import { SEO } from "@/data/seo";
import { PRODUCTS, PUMP } from "@/data/verhuur";
import { TARIEVEN_PUBLIEK, euro } from "@/data/tarieflijst";

const PATH = "/gids/stroomverbruik-bouwdroger";

/**
 * Een VOORBEELDprijs per kWh, geen tarief van ons en geen marktgemiddelde.
 * Stroomprijzen verschillen per contract en per maand; deze waarde bestaat
 * alleen om de rekensom leesbaar te maken, en de pagina zegt dat er letterlijk
 * bij. Wie hem aanpast, past alleen het voorbeeld aan.
 */
const VOORBEELD_PRIJS_KWH = 0.3;

/** "1,1 kW" of "30 kW" uit de technische fiche → 1.1 of 30. */
function kw(waarde: string | undefined): number | null {
  const m = waarde?.match(/([\d.,]+)\s*kW/i);
  if (!m) return null;
  const n = Number(m[1].replace(",", "."));
  return Number.isFinite(n) ? n : null;
}

interface Verbruik {
  key: string;
  name: string;
  short: string;
  /** "Condensontvochtiger", "Bouwventilator · luchtcirculatie", … */
  type: string;
  path: string;
  /** Opgenomen vermogen uit de fiche; null als de fiche het niet vermeldt. */
  kw: number | null;
  kachel: boolean;
}

/*
  Het vermogen komt uit de technische fiche op de toestelpagina
  (`PRODUCTS[key].specs`): "Opgenomen vermogen" voor drogers en ventilatoren,
  "Verwarmingsvermogen" voor de kachels. Vermeldt een fiche geen vermogen —
  vandaag de adsorptiedroger — dan staat er geen verzonnen getal, maar een
  verwijzing naar het typeplaatje.
*/
const TOESTELLEN: Verbruik[] = TARIEVEN_PUBLIEK.map((t) => {
  const specs = PRODUCTS[t.key]?.specs ?? [];
  const opgenomen = specs.find(([l]) => /opgenomen vermogen/i.test(l))?.[1];
  const verwarming = specs.find(([l]) => /verwarmingsvermogen/i.test(l))?.[1];
  return {
    key: t.key,
    name: t.name,
    short: t.short,
    type: t.type,
    path: t.path,
    kw: kw(opgenomen ?? verwarming),
    kachel: !opgenomen && !!verwarming,
  };
});

const DROGERS = TOESTELLEN.filter((t) => !t.kachel && /ttk/i.test(t.key) && t.kw !== null);
/*
  Het toestel waarmee de hele pagina rekent: de kleinste bouwdroger uit het
  gamma. Niet omdat hij het meest verhuurd wordt — dat is de TTK 350 S — maar
  omdat een bezoeker die "wat kost een bouwdroger per dag" intikt een ondergrens
  zoekt, en de pagina anders opent met een bedrag dat voor zijn situatie te hoog
  is. Wie een groter toestel nodig heeft, vindt het in de tabel hieronder.
*/
const VOORBEELD = DROGERS.find((t) => t.key === "ttk170") ?? DROGERS[0];

const getal = (n: number, decimalen = 1) =>
  n.toLocaleString("nl-BE", { minimumFractionDigits: 0, maximumFractionDigits: decimalen });
const bedrag = (n: number) =>
  `€ ${n.toLocaleString("nl-BE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

/** Altijd één decimaal — "3,3" naast "3" leest als een grotere kloof dan er is. */
const eenDecimaal = (n: number) =>
  n.toLocaleString("nl-BE", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

const perDag = (k: number) => k * 24;
const PRIJS_TXT = bedrag(VOORBEELD_PRIJS_KWH);

/**
 * Het vergelijkingstoestel. De Dryfast DF 800 is de bouwdroger die bij de
 * meeste Belgische verhuurders in het gamma staat, dus de eerlijkste maatstaf.
 *
 * De cijfers komen letterlijk uit de fiche van de verdeler en staan hier mét
 * bron op het scherm: een vergelijking met een bij naam genoemd product moet
 * controleerbaar zijn, anders is het geen vergelijking maar een claim. Wijzigt
 * de fabrikant zijn fiche, pas dan deze constante én de bronregel aan.
 */
const CONCURRENT = {
  naam: "Dryfast DF 800",
  omschrijving: "De bouwdroger die bij de meeste verhuurders in het gamma staat",
  kw: 2.1,
  liters: 150,
  volume: 800,
  bron: "https://www.verbo.be/product/bouwdroger-dryfast-df800/",
  bronNaam: "productfiche van de verdeler",
};

/**
 * Het kleinere broertje van de DF 800, waarmee het rekenvoorbeeld vergeleken
 * wordt. Cijfers uit de fiche van de verdeler; zie de bronregel op het scherm.
 */
const CONCURRENT_KLEIN = {
  naam: "Dryfast DF 400",
  kw: 1.4,
  liters: 75,
  bron: "https://euromat.be/product/bouwdroger-df400/",
};

/** Liter water uit de lucht per verbruikte kilowattuur — de eco-maatstaf. */
const perKwh = (liters: number, k: number) => liters / perDag(k);

/*
  Welk toestel van ons naast de DF 800 staat, en waarom het niet over
  zuinigheid pér toestel gaat.

  Per liter onttrokken water ontlopen de toestellen elkaar weinig: de DF 800
  haalt 150 L uit 50,4 kWh, onze Boost 50 L uit 18 kWh. Het verschil zit
  niet in de techniek maar in het formaat. Een DF 800 is een toestel voor
  volumes tot 800 m³; zet je dat in een ruimte die er 250 nodig heeft, dan
  betaal je elke dag voor capaciteit die niet gebruikt wordt. Daarom vergelijkt
  dit blok verbruik en kost per etmaal, niet liter per kWh — dát is het getal
  waarop een verkeerd gedimensioneerd toestel de klant geld kost.
*/
const ONS = (() => {
  const t = TARIEVEN_PUBLIEK.find((x) => x.key === "ttk170");
  const vermogen = TOESTELLEN.find((x) => x.key === "ttk170")?.kw;
  return t && vermogen ? { ...t, kw: vermogen } : null;
})();

/* De rekensom van het voorbeeldtoestel, één keer uitgerekend: de statbalk, de
   meter, de somrij en de FAQ tonen allemaal dezelfde getallen. */
const V = VOORBEELD?.kw
  ? {
      short: VOORBEELD.short,
      path: VOORBEELD.path,
      kw: VOORBEELD.kw,
      kwhDag: perDag(VOORBEELD.kw),
      kostDag: perDag(VOORBEELD.kw) * VOORBEELD_PRIJS_KWH,
      kwhTweeWeken: perDag(VOORBEELD.kw) * 14,
      kostTweeWeken: perDag(VOORBEELD.kw) * 14 * VOORBEELD_PRIJS_KWH,
      huurDag: TARIEVEN_PUBLIEK.find((t) => t.key === VOORBEELD.key)?.perDay ?? 0,
    }
  : null;

/**
 * Hoeveel stroom onze kleinste bouwdroger bespaart tegenover een standaard
 * verhuurtoestel in dezelfde ruimte. Afgeleid, niet ingetypt: verandert het
 * vermogen in de fiche of in de fiche van de concurrent, dan verandert dit
 * percentage mee — en dus ook de belofte in de hero.
 */
const ZUINIGER = VOORBEELD?.kw
  ? Math.round((1 - perDag(VOORBEELD.kw) / perDag(CONCURRENT.kw)) * 100)
  : null;

/** Het hele getal en de decimaal apart — de meter laat de laatste cijfer tikken. */
const KWH_DELEN = V ? getal(V.kwhDag).split(",") : [];

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

/** Het aandachtsteken in de rode "waar u wel op let"-kaart. */
const Let = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v5" />
    <path d="M12 16h.01" />
  </svg>
);

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

/* De vijf factoren uit "wat bepaalt het verbruik", elk met hun eigen icoon. */
const FACTOREN = [
  {
    titel: "Hoe nat het gebouw is",
    icoon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" />
      </svg>
    ),
    tekst: (
      <>
        Zolang er veel vocht vrijkomt, draait de compressor bijna continu. Naarmate chape en pleister
        droger worden, schakelt de hygrostaat vaker terug.
      </>
    ),
  },
  {
    titel: "De temperatuur",
    icoon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" />
      </svg>
    ),
    tekst: (
      <>
        In een koude ruimte werkt een condensdroger minder efficiënt en draait hij langer voor hetzelfde
        resultaat. Waarom dat zo is, leest u in{" "}
        <Link to="/gids/condensdroger-of-adsorptiedroger">condensdroger of adsorptiedroger</Link>.
      </>
    ),
  },
  {
    titel: "Een open huis",
    icoon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9h18M9 21V9M5 21h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z" />
      </svg>
    ),
    tekst: (
      <>
        Ramen op kiepstand of een open deur naar een vochtige kelder laten steeds nieuwe vochtige lucht
        binnen. Dan droogt de bouwdroger de buitenlucht in plaats van uw muren.
      </>
    ),
  },
  {
    titel: "Het juiste formaat",
    icoon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7h18v10H3z" />
        <path d="M7 7v3M11 7v5M15 7v3M19 7v5" />
      </svg>
    ),
    tekst: (
      <>
        Een te klein toestel draait wekenlang op vol vermogen; een passend toestel is sneller klaar. De{" "}
        <Link to="/verhuur/calculator">droogcalculator</Link> rekent uit wat bij uw oppervlakte past.
      </>
    ),
  },
  {
    titel: "De droogduur zelf",
    icoon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    tekst: (
      <>
        De grootste besparing is een kortere droging. Hoe lang chape en pleisterwerk nodig hebben, staat in{" "}
        <Link to="/gids/hoe-lang-moet-chape-drogen">hoe lang moet chape drogen</Link>.
      </>
    ),
  },
];

const FAQ: GidsFaq[] = [
  {
    question: "Hoeveel stroom verbruikt een bouwdroger per dag?",
    answer: V
      ? `Reken met het opgenomen vermogen maal 24 uur. Onze ${V.short} neemt ${getal(V.kw, 2)} kW op; dat is hoogstens ${getal(V.kwhDag)} kWh per etmaal als hij onafgebroken op vol vermogen draait. In de praktijk ligt het lager, omdat de hygrostaat het toestel terugschakelt zodra de streefvochtigheid bereikt is.`
      : "Reken met het opgenomen vermogen op het typeplaatje maal 24 uur. Dat is de bovengrens; in de praktijk ligt het lager, omdat de hygrostaat het toestel terugschakelt zodra de streefvochtigheid bereikt is.",
  },
  {
    question: "Wat kost een bouwdroger aan elektriciteit?",
    answer: V
      ? `Vermenigvuldig de kWh per dag met uw prijs per kWh. Met een voorbeeldprijs van ${PRIJS_TXT} per kWh kost de ${V.short} hoogstens ${bedrag(V.kostDag)} per dag aan stroom. Uw eigen prijs staat op uw energiefactuur.`
      : `Vermenigvuldig de kWh per dag met uw prijs per kWh, die op uw energiefactuur staat.`,
  },
  {
    question: "Mag een bouwdroger 24 uur per dag en 's nachts aan blijven?",
    answer:
      "Ja. Een bouwdroger is gemaakt om dag en nacht door te draaien, en dat moet ook: elk uur stilstand laat het vocht in de lucht weer oplopen. Voert hij het water niet naar een reservoir maar via een slang of condenspomp af, dan loopt hij ook het weekend door zonder dat u iets moet legen.",
  },
  {
    question: "Verbruikt een ventilator of een bouwkachel meer dan een bouwdroger?",
    answer:
      "Een bouwventilator verbruikt minder dan een bouwdroger. Een elektrische bouwkachel verbruikt veel meer: zij levert warmte, en dat kost het meeste energie. Haar thermostaat schakelt wel terug zodra de ruimte op temperatuur is.",
  },
  {
    question: "Hoeveel watt verbruikt een bouwdroger per uur?",
    answer: V
      ? `Het opgenomen vermogen is het verbruik per uur. Onze ${V.short} staat op ${getal(V.kw, 2)} kW, dus ${getal(V.kw * 1000, 0)} watt per draaiuur. In ons gamma loopt dat van 200 watt voor een bouwventilator tot 1 400 watt voor de grootste condensbouwdroger; grotere toestellen uit de verhuur halen 2 100 watt.`
      : "Het opgenomen vermogen op het typeplaatje is het verbruik per draaiuur. Bij condensbouwdrogers ligt dat doorgaans tussen 750 en 2 100 watt.",
  },
  {
    question: "Wat kost een bouwdroger per week en per maand aan stroom?",
    answer: V
      ? `Reken het dagverbruik maal het aantal dagen. Onze ${V.short} komt op hoogstens ${getal(V.kwhDag * 7)} kWh per week (${bedrag(V.kwhDag * 7 * VOORBEELD_PRIJS_KWH)}) en ${getal(V.kwhDag * 30)} kWh per maand (${bedrag(V.kwhDag * 30 * VOORBEELD_PRIJS_KWH)}) bij een voorbeeldprijs van ${PRIJS_TXT} per kWh. Dat zijn bovengrenzen: de hygrostaat schakelt het toestel terug zodra de streefwaarde bereikt is, en een droging duurt zelden een volle maand.`
      : "Reken het dagverbruik maal het aantal dagen, en dat maal uw prijs per kWh. Het resultaat is een bovengrens; de hygrostaat schakelt het toestel terug zodra de streefwaarde bereikt is.",
  },
  {
    question: "Kan ik een bouwdroger op een gewoon stopcontact aansluiten?",
    answer: V
      ? `Ja. Onze condensbouwdrogers werken op 230 V en gaan in een gewoon stopcontact. Let wel op de kring: een gewone kring van 16 A kan ongeveer 3,6 kW aan, dus tel het vermogen op van alles wat erop hangt. Met ${getal(V.kw, 2)} kW voor de ${V.short} blijft er ruimte voor ander gereedschap. De losse bouwkachels van 20 en 30 kW werken wel op 400 V krachtstroom en vragen hun eigen aansluiting.`
      : "Ja, onze condensbouwdrogers werken op 230 V. Let op de kring: 16 A kan ongeveer 3,6 kW aan, dus tel het vermogen op van alles wat erop hangt.",
  },
  {
    question: "Verbruikt een bouwdroger meer dan een luchtontvochtiger voor thuis?",
    answer:
      "Ja, en dat is logisch. Een luchtontvochtiger voor thuis draait een paar uur per dag op laag vermogen om een woonkamer comfortabel te houden. Een bouwdroger draait dag en nacht en moet tientallen liters bouwvocht per etmaal uit de lucht halen. Hij verbruikt dus meer per dag, maar hij is ook maar een paar weken nodig.",
  },
  {
    question: "Verbruikt een grotere bouwdroger altijd meer stroom?",
    answer: ONS
      ? `Per uur wel, en dat is precies waarom het formaat telt. Een toestel voor volumes tot ${CONCURRENT.volume} m³ neemt ${getal(CONCURRENT.kw, 2)} kW op, tegenover ${getal(ONS.kw, 2)} kW voor een toestel tot ${ONS.volume} m³. Zet u dat grote toestel in een kleine ruimte, dan betaalt u elke dag voor capaciteit die er niet uit kan. De droogcalculator kiest daarom eerst het volume en pas daarna het toestel.`
      : "Per uur wel. Een te groot toestel in een kleine ruimte kost elke dag stroom voor capaciteit die niet gebruikt wordt; dimensioneer dus op het volume.",
  },
];

const StroomverbruikPage = () => (
  <GidsShell
    seo={SEO.gidsStroomverbruik}
    path={PATH}
    crumbs={[
      { name: "Home", path: "/" },
      { name: "Gidsen", path: "/gids" },
      { name: "Stroomverbruik van een bouwdroger", path: PATH },
    ]}
    kick="Gids · verbruik en kosten"
    h1="Stroomverbruik van een bouwdroger: wat kost het per dag?"
    intro={
      <>
        <p>
          Een bouwdroger draait dag en nacht, dus de vraag wat dat kost is terecht. De som is eenvoudig:
          vermogen maal uren maal dagen maal uw prijs per kWh.
        </p>
        {ZUINIGER && V ? (
          <p>
            <b style={{ color: "#fff" }}>Wij dimensioneren op het volume van uw ruimte.</b> Daarom staat er
            bij ons {getal(V.kw, 2)} kW waar een verhuurder standaard {getal(CONCURRENT.kw, 2)} kW afzet.{" "}
            Dat is {ZUINIGER} % minder stroom voor dezelfde droging.
          </p>
        ) : null}
      </>
    }
    heroImg={{
      src: "/vernast/man-zen-crop.webp",
      alt: "Zorgeloos drogen: de bouwdroger draait, u hoeft niets te doen",
      width: "min(78%,360px)",
    }}
    heroBadge={
      ZUINIGER ? (
        <div className="fbadge" style={{ top: "-8%", right: "-17%", left: "auto", zIndex: 0 }}>
          <span className="ic">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6" />
            </svg>
          </span>
          <div>
            {ZUINIGER} % minder stroom
            <small>dan een standaard bouwdroger van {getal(CONCURRENT.kw, 2)} kW</small>
          </div>
        </div>
      ) : null
    }
    articlePublished="2026-09-29"
    faq={FAQ}
    faqZelfPlaatsen
  >
    {/* ============ DE SOM IN VIER GETALLEN ============ */}
    {V && (
      <div className="statrule">
        <div className="wrap">
          <Reveal className="band" from="up">
            <div className="st">
              <div className="n">
                {getal(V.kw, 2)}
                <em>kW</em>
              </div>
              <div className="l">Opgenomen vermogen van de {V.short}</div>
            </div>
            <div className="st">
              <div className="n">
                {getal(V.kwhDag)}
                <em>kWh</em>
              </div>
              <div className="l">Hoogstens per etmaal, continu op vol vermogen</div>
            </div>
            <div className="st">
              <div className="n">
                {PRIJS_TXT}
                <em>/kWh</em>
              </div>
              <div className="l">Voorbeeldprijs om mee te rekenen, geen tarief van ons</div>
            </div>
            <div className="st">
              <div className="n">
                24<em>u</em>
              </div>
              <div className="l">Draaien per dag: elk uur stilstand kost droogtijd</div>
            </div>
          </Reveal>
        </div>
      </div>
    )}

    {/* ============ DE FORMULE ============ */}
    <section className="sw">
      <div className="wrap wsplit">
        <Reveal className="prose" from="left">
          <h2>Zo rekent u het verbruik uit</h2>
          <p>
            Elk elektrisch toestel heeft een <b>opgenomen vermogen</b>, uitgedrukt in kilowatt (kW). Dat
            getal staat op het typeplaatje en in de technische fiche. Het verbruik in kilowattuur (kWh) is
            dat vermogen maal het aantal uren dat het toestel draait. De kost is dat verbruik maal uw prijs
            per kWh:
          </p>
          <p className="note">
            <b>kW × 24 uur × aantal dagen × prijs per kWh = stroomkost</b>
          </p>
          <p>
            Het resultaat is een <b>bovengrens</b>. Een condensbouwdroger heeft een hygrostaat: zodra de
            luchtvochtigheid op de streefwaarde zit, schakelt de compressor terug en verbruikt het toestel
            veel minder. In de eerste dagen van een droging, als er veel vocht vrijkomt, zit u dicht bij die
            bovengrens; naar het einde toe duidelijk eronder.
          </p>
        </Reveal>

        {/*
          De meter is versiering: elk getal erin staat ook in de tekst ernaast
          en in de tabel hieronder. Zo mist een bezoeker zonder JavaScript —
          en dat zijn de antwoordmachines waarvoor we prerenderen — niets.
        */}
        {/*
          Twee kaarten op één plek, die elkaar afwisselen: ons toestel en een
          bouwdroger van de concurrentie. Beide staan volledig in de
          HTML — het wisselen is CSS, geen JavaScript — zodat een lezer zonder
          scripts allebei de bedragen gewoon onder elkaar ziet staan. Elk getal
          erin komt ook in de tabel en de balken terug.
        */}
        {V && (
          <Reveal className="meterdek" from="right" delay={0.1} aria-hidden="true">
            <div className="meter kaart-a">
              <div className="mt-h">
                <b>Ons toestel · {V.short}</b>
                <span className="ons">Zuinigst</span>
              </div>
              <div className="mt-dial">
                <div className="mt-kwh">
                  {getal(V.kwhDag)}
                  <em>kWh</em>
                </div>
                <div className="mt-sub">verbruik per etmaal, bovengrens</div>
              </div>
              <div className="mtrow">
                <span className="k">Opgenomen vermogen</span>
                <span className="v">
                  {getal(V.kw, 2)} <small>kW</small>
                </span>
              </div>
              <div className="mtrow">
                <span className="k">Draaiuren per dag</span>
                <span className="v">
                  24 <small>u</small>
                </span>
              </div>
              <div className="mtrow">
                <span className="k">Voorbeeldprijs</span>
                <span className="v">
                  {PRIJS_TXT} <small>/kWh</small>
                </span>
              </div>
              <div className="mt-res groen">
                <b>Hoogstens {bedrag(V.kostDag)} per dag</b>
                <span>aan stroom</span>
              </div>
            </div>

            <div className="meter kaart-b">
              <div className="mt-h">
                <b>Concurrentie · {CONCURRENT.naam}</b>
                <span className="hun">Zelfde ruimte</span>
              </div>
              <div className="mt-dial">
                <div className="mt-kwh">
                  {getal(perDag(CONCURRENT.kw))}
                  <em>kWh</em>
                </div>
                <div className="mt-sub">verbruik per etmaal, bovengrens</div>
              </div>
              <div className="mtrow">
                <span className="k">Opgenomen vermogen</span>
                <span className="v">
                  {getal(CONCURRENT.kw, 2)} <small>kW</small>
                </span>
              </div>
              <div className="mtrow">
                <span className="k">Draaiuren per dag</span>
                <span className="v">
                  24 <small>u</small>
                </span>
              </div>
              <div className="mtrow">
                <span className="k">Voorbeeldprijs</span>
                <span className="v">
                  {PRIJS_TXT} <small>/kWh</small>
                </span>
              </div>
              <div className="mt-res rood">
                <b>{bedrag(perDag(CONCURRENT.kw) * VOORBEELD_PRIJS_KWH)} per dag</b>
                <span>aan stroom</span>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>

    {/* ============ HET VERMOGEN VAN DE TOESTELLEN ============ */}
    <section className="lvred">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">Per toestel</span>
          <h2 className="sec">Het vermogen van onze toestellen</h2>
          <p className="lede">
            Het opgenomen vermogen zoals het in de technische fiche op de toestelpagina staat, met het
            maximale verbruik per etmaal en de kost per dag bij een voorbeeldprijs van {PRIJS_TXT} per kWh.
            Die prijs is alleen een voorbeeld om mee te rekenen; uw eigen tarief staat op uw energiefactuur
            en kan hoger of lager liggen.
          </p>
        </Reveal>

        <Reveal className="tbl" from="up" delay={0.1}>
          <table>
            <caption>
              Maximaal verbruik bij continu vol vermogen. Voorbeeldprijs {PRIJS_TXT}/kWh, geen tarief van
              Vernast.
              {TOESTELLEN.some((t) => t.kw === null)
                ? " Vermeldt de fiche geen vermogen, kijk dan op het typeplaatje van het toestel."
                : ""}
            </caption>
            <thead>
              <tr>
                <th scope="col">Toestel</th>
                <th scope="col">Vermogen</th>
                <th scope="col">Max. kWh per 24 u</th>
                <th scope="col">Max. per dag (voorbeeld)</th>
              </tr>
            </thead>
            <tbody>
              {TOESTELLEN.map((t) => (
                <tr key={t.key}>
                  <td>
                    <Link className="tnaam" to={t.path}>
                      {t.short}
                    </Link>
                    <small>{t.type}</small>
                  </td>
                  {t.kw === null ? (
                    <td colSpan={3}>Niet in de fiche vermeld: zie het typeplaatje</td>
                  ) : (
                    <>
                      <td className="num">{getal(t.kw, 2)} kW</td>
                      <td className="num">{getal(perDag(t.kw))} kWh</td>
                      <td className="num">{bedrag(perDag(t.kw) * VOORBEELD_PRIJS_KWH)}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal className="note" from="up" delay={0.15}>
          Bij de bouwkachels is die bovengrens vooral theoretisch: hun thermostaat schakelt af zodra de
          ruimte op temperatuur is, en hoeveel ze daarna nog draaien hangt af van hoe goed het gebouw de
          warmte vasthoudt. Toch is de kachel bijna altijd de grootste verbruiker op de werf. <b>Verwarm
          daarom alleen waar het nodig is</b>, zoals in een koude kelder of een winterwerf.
        </Reveal>
      </div>
    </section>

    {/* ============ REKENVOORBEELD ============ */}
    {V && (
      <section className="sw">
        <div className="wrap wsplit">
          <Reveal className="sec-head" from="left" style={{ marginBottom: 0 }}>
            <span className="kick">Rekenvoorbeeld</span>
            <h2 className="sec">Wat de stroom per dag kost.</h2>
            <p className="lede">
              Hiernaast staat wat één toestel per etmaal aan stroom kost als het onafgebroken op vol
              vermogen draait: onze {V.short} naast twee bouwdrogers van de concurrentie, allemaal gerekend
              tegen dezelfde voorbeeldprijs van {PRIJS_TXT} per kWh.
            </p>
            <p className="lede">
              Het zijn <b>bovengrenzen</b>. De hygrostaat schakelt de compressor terug zodra de
              streefvochtigheid bereikt is, dus in de tweede week ligt de rekening lager dan in de eerste.
              Wat niet verandert is de verhouding: een toestel met driemaal het vermogen kost ook driemaal
              zoveel stroom, elke dag opnieuw, of het die capaciteit nu nodig heeft of niet.
            </p>
            <p className="lede">
              De grijze balk onderaan is iets anders dan de drie erboven: dat is de <b>huur</b> van de{" "}
              {V.short}, {euro(V.huurDag)} per dag exclusief btw (zie <Link to="/prijzen">alle prijzen</Link>
              ). Hij staat er ter grootteorde, zodat u meteen ziet hoe stroom en huur zich tot elkaar
              verhouden.
            </p>
          </Reveal>

          <Reveal className="vglkaart" from="right" delay={0.1}>
            <div className="vgl">
              <div className="vrow groen">
                <div className="vl">
                  <span>{V.short}, onze kleinste bouwdroger</span>
                  <b>{bedrag(V.kostDag)}</b>
                </div>
                <div className="vbar">
                  <i style={{ width: `${Math.round((V.kw / CONCURRENT.kw) * 100)}%` }} />
                </div>
              </div>
              <div className="vrow rood">
                <div className="vl">
                  <span>
                    {CONCURRENT_KLEIN.naam}, {getal(CONCURRENT_KLEIN.kw, 2)} kW
                  </span>
                  <b>{bedrag(perDag(CONCURRENT_KLEIN.kw) * VOORBEELD_PRIJS_KWH)}</b>
                </div>
                <div className="vbar">
                  <i style={{ width: `${Math.round((CONCURRENT_KLEIN.kw / CONCURRENT.kw) * 100)}%` }} />
                </div>
              </div>
              <div className="vrow rood">
                <div className="vl">
                  <span>
                    {CONCURRENT.naam}, {getal(CONCURRENT.kw, 2)} kW
                  </span>
                  <b>{bedrag(perDag(CONCURRENT.kw) * VOORBEELD_PRIJS_KWH)}</b>
                </div>
                <div className="vbar">
                  <i style={{ width: "100%" }} />
                </div>
              </div>
              <div className="vrow huur">
                <div className="vl">
                  <span>Huur van de {V.short} per dag, excl. btw</span>
                  <b>{euro(V.huurDag)}</b>
                </div>
                <div className="vbar">
                  <i style={{ width: "100%" }} />
                </div>
              </div>
            </div>
            <p className="vglnoot">
              Zet u er een ventilator bij, dan komt daar relatief weinig verbruik bij; een bouwkachel weegt
              veel zwaarder door. De vermogens van de {CONCURRENT_KLEIN.naam} en de {CONCURRENT.naam} komen
              uit de fiches van hun verdelers.
            </p>
          </Reveal>
        </div>

        <div className="wrap">
          <Reveal className="prose somkop" from="up" delay={0.15}>
            <h3>Twee weken drogen, stap voor stap</h3>
          </Reveal>

          <Reveal className="somrij" from="up" delay={0.1}>
            <div className="som">
              <span className="sk">{getal(V.kw, 2)} kW × 24 uur</span>
              <span className="sv">
                {getal(V.kwhDag)}
                <small>kWh/dag</small>
              </span>
            </div>
            <span className="somop" aria-hidden="true">
              ×
            </span>
            <div className="som">
              <span className="sk">14 dagen</span>
              <span className="sv">
                {getal(V.kwhTweeWeken)}
                <small>kWh</small>
              </span>
            </div>
            <span className="somop" aria-hidden="true">
              ×
            </span>
            <div className="som uit">
              <span className="sk">{PRIJS_TXT} per kWh</span>
              <span className="sv">
                {bedrag(V.kostTweeWeken)}
                <small>stroom</small>
              </span>
            </div>
          </Reveal>
          <Reveal className="somnoot" from="up" delay={0.15}>
            Stel: u droogt een nieuwbouwwoning met één {V.short} gedurende twee weken, en het toestel draait
            onafgebroken op vol vermogen. Met de voorbeeldprijs van {PRIJS_TXT} per kWh is dat de
            bovengrens: hoogstens {bedrag(V.kostDag)} per dag. Door de hygrostaat ligt de werkelijke
            rekening lager.
          </Reveal>

          <Reveal className="somvs" from="up" delay={0.2}>
            Dezelfde veertien dagen met een <b>{CONCURRENT_KLEIN.naam}</b>, een bouwdroger van de concurrentie van{" "}
            {getal(CONCURRENT_KLEIN.kw, 2)} kW, kosten{" "}
            <b className="hun">{bedrag(perDag(CONCURRENT_KLEIN.kw) * 14 * VOORBEELD_PRIJS_KWH)}</b> aan
            stroom, {bedrag((perDag(CONCURRENT_KLEIN.kw) - V.kwhDag) * 14 * VOORBEELD_PRIJS_KWH)} meer
            voor dezelfde ruimte.
          </Reveal>
        </div>
      </section>
    )}

    {/* ============ VEELGESTELDE VRAGEN ============ */}
    <GidsFaqSectie
      faq={FAQ}
      titel="Alles over het verbruik van een bouwdroger"
      variant="rood"
    />

    {/* ============ ONS TOESTEL NAAST DE DF 800 ============ */}
    {ONS && (
      <section className="sw">
        <div className="wrap">
          <Reveal className="sec-head" from="up">
            <span className="kick">Toestel tegen toestel</span>
            <h2 className="sec">In een kleine ruimte zet u geen groot toestel neer.</h2>
            <p className="lede">
              De grootste stroomrekening komt zelden van een onzuinig toestel, maar van een te groot
              toestel. Hieronder onze kleinste bouwdroger naast de {CONCURRENT.naam}, het model dat bij de
              meeste verhuurders standaard meegaat, ook naar een kelder of een appartement waar het veel
              te zwaar voor is.
            </p>
          </Reveal>

          <div className="ecog">
            <Reveal className="eco wij" from="left" delay={0.05}>
              <span className="et">Ons toestel</span>
              <h3>{ONS.short}</h3>
              <p className="esub">
                {ONS.type} voor ruimtes tot {ONS.volume} m³ · 230 V
              </p>
              <div className="ekpi">
                {getal(perDag(ONS.kw))}
                <em>kWh per etmaal</em>
              </div>
              <p className="ekpil">
                {bedrag(perDag(ONS.kw) * VOORBEELD_PRIJS_KWH)} per dag aan stroom bij {PRIJS_TXT} per kWh
              </p>
              <div className="erow">
                <span className="k">Opgenomen vermogen</span>
                <span className="v">{getal(ONS.kw, 2)} kW</span>
              </div>
              <div className="erow">
                <span className="k">Vochtafvoer</span>
                <span className="v">{ONS.litersPerDay} L/dag</span>
              </div>
              <div className="erow">
                <span className="k">Aanbevolen volume</span>
                <span className="v">tot {ONS.volume} m³</span>
              </div>
              <div className="erow">
                <span className="k">Stroom over twee weken</span>
                <span className="v">{bedrag(perDag(ONS.kw) * 14 * VOORBEELD_PRIJS_KWH)}</span>
              </div>
              <p className="emeer">
                <Link to={ONS.path}>Bekijk de {ONS.short}</Link>
              </p>
            </Reveal>

            <Reveal className="eco hun" from="right" delay={0.1}>
              <span className="et">Vergelijkingstoestel</span>
              <h3>{CONCURRENT.naam}</h3>
              <p className="esub">{CONCURRENT.omschrijving}</p>
              <div className="ekpi">
                {getal(perDag(CONCURRENT.kw))}
                <em>kWh per etmaal</em>
              </div>
              <p className="ekpil">
                {bedrag(perDag(CONCURRENT.kw) * VOORBEELD_PRIJS_KWH)} per dag aan stroom bij {PRIJS_TXT}{" "}
                per kWh
              </p>
              <div className="erow">
                <span className="k">Opgenomen vermogen</span>
                <span className="v">{getal(CONCURRENT.kw, 2)} kW</span>
              </div>
              <div className="erow">
                <span className="k">Vochtafvoer</span>
                <span className="v">{CONCURRENT.liters} L/dag</span>
              </div>
              <div className="erow">
                <span className="k">Aanbevolen volume</span>
                <span className="v">tot {CONCURRENT.volume} m³</span>
              </div>
              <div className="erow">
                <span className="k">Stroom over twee weken</span>
                <span className="v">{bedrag(perDag(CONCURRENT.kw) * 14 * VOORBEELD_PRIJS_KWH)}</span>
              </div>
            </Reveal>
          </div>

          <div className="ecoslot">
          <Reveal className="note" from="up" delay={0.15}>
            <b>
              Scheelt {bedrag((perDag(CONCURRENT.kw) - perDag(ONS.kw)) * 14 * VOORBEELD_PRIJS_KWH)} aan
              stroom over twee weken
            </b>:{" "}
            <b className="ons">{Math.round((1 - perDag(ONS.kw) / perDag(CONCURRENT.kw)) * 100)} % minder
            verbruik</b>, voor een ruimte waar {ONS.volume} m³ aan capaciteit volstaat. Daarom rekent de{" "}
            <Link to="/verhuur/calculator">droogcalculator</Link> eerst uw volume uit en kiest ze pas
            daarna het toestel.
          </Reveal>

          <Reveal className="ecobron" from="up" delay={0.2}>
            Eerlijk erbij: de {CONCURRENT.naam} is geen slecht toestel. Hij is gebouwd voor industrieel
            werk en voor volumes tot {CONCURRENT.volume} m³, en in zo'n hal of loods doet hij precies wat
            hij moet doen. Het probleem begint wanneer datzelfde toestel in een kelder, een appartement of
            één verdieping wordt gezet, en dat gebeurt vaak, omdat verhuurders nu eenmaal zetten wat op
            de kar staat. Dan betaalt u elke dag voor capaciteit die er niet uit kan. Het punt hierboven
            is dus het formaat, niet de kwaliteit. Onze cijfers komen uit de technische fiche op{" "}
            <Link to={ONS.path}>de toestelpagina</Link> (vochtafvoer bij 30 °C en 80 % relatieve
            vochtigheid), die van de {CONCURRENT.naam} uit de{" "}
            <a href={CONCURRENT.bron} target="_blank" rel="noopener noreferrer nofollow">
              {CONCURRENT.bronNaam}
            </a>
            . Het verbruik is in beide gevallen het opgenomen vermogen maal 24 uur, omgerekend tegen de
            voorbeeldprijs van {PRIJS_TXT} per kWh.
          </Reveal>
          </div>
        </div>
      </section>
    )}

    {/* ============ WAT BEPAALT HET VERBRUIK ============ */}
    <section className="lvred">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">In de praktijk</span>
          <h2 className="sec">Wat het verbruik omhoog of omlaag duwt.</h2>
          <p className="lede">
            Vijf dingen bepalen of u dicht bij die bovengrens zit of er ruim onder blijft.
          </p>
        </Reveal>
        <div className="cyc">
          {FACTOREN.map((f, i) => (
            <Reveal className="cy" from="up" delay={i * 0.06} key={f.titel}>
              <i aria-hidden="true">0{i + 1}</i>
              <span className="ci2">{f.icoon}</span>
              <h3>{f.titel}</h3>
              <p>{f.tekst}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ============ 24 UUR PER DAG ============ */}
    <section className="sw">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">Dag en nacht</span>
          <h2 className="sec">Mag een bouwdroger 24 uur per dag en 's nachts aan?</h2>
          <p className="lede">
            Ja, en dat is ook de bedoeling. Zet u hem 's nachts uit, dan loopt de luchtvochtigheid in een
            paar uur weer op en trekt het vocht uit de lucht opnieuw in de muren en de vloer. U verliest
            dan meer droogtijd dan u aan stroom bespaart.
          </p>
        </Reveal>

        <div className="vsg">
          <Reveal className="vs groen" from="left" delay={0.05}>
            <span className="vt">Laat hem doordraaien</span>
            <h3>Een bouwdroger is gebouwd voor continu gebruik.</h3>
            <ul>
              <li>
                <Check />
                <span>
                  <b>Elk uur stilstand telt.</b> De luchtvochtigheid loopt in een paar uur weer op, en het
                  vocht trekt opnieuw in muren en vloer.
                </span>
              </li>
              <li>
                <Check />
                <span>
                  <b>De hygrostaat regelt zelf.</b> Zodra de streefwaarde bereikt is, schakelt de
                  compressor terug; u hoeft het toestel niet zelf uit te zetten.
                </span>
              </li>
              <li>
                <Check />
                <span>
                  <b>Doorlopend is doorgaans goedkoper.</b> Een dag langer huren weegt zwaarder door dan de
                  stroom van een nacht doordraaien.
                </span>
              </li>
              <li>
                <Check />
                <span>
                  <b>Wij meten voor en na.</b> In een droogpakket legt de technieker de start- en
                  eindwaarde vast, zodat niemand op gevoel moet beslissen.
                </span>
              </li>
            </ul>
            <span className="vf">Geldt voor elk condenstoestel uit ons gamma.</span>
          </Reveal>

          <Reveal className="vs rood" from="right" delay={0.1}>
            <span className="vt">Waar u wel op let</span>
            <h3>Drie dingen bij doorlopend gebruik.</h3>
            <ul>
              <li>
                <Let />
                <span>
                  <b>Afvoer van het water.</b> Met een reservoir moet u regelmatig legen, anders valt het
                  toestel stil. Met een slang naar een afvoer, of een condenspomp (bij ons{" "}
                  {euro(PUMP.price)} per bouwdroger per dag), loopt de droging ook 's nachts en in het
                  weekend door.
                </span>
              </li>
              <li>
                <Let />
                <span>
                  <b>Een vrije plaats.</b> Zet het toestel niet tegen een muur of onder een tafel; de lucht
                  moet vrij aan- en afgevoerd kunnen worden.
                </span>
              </li>
              <li>
                <Let />
                <span>
                  <b>De elektrische kring.</b> Een gewone kring van 16 A op 230 V kan ongeveer 3,6 kW aan.
                  Tel het vermogen op van alles wat erop hangt. De losse bouwkachels Heatboost 20 en 30 T
                  werken op 400 V krachtstroom en vragen hun eigen aansluiting; de kachel in een droogpakket
                  draait op een gewoon stopcontact van 230 V.
                </span>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal className="manband aansluitend" from="up">
          <div className="mb-t">
            <span className="mbk">Liever niet zelf rekenen?</span>
            <h3>In een droogpakket draait er niet meer dan nodig.</h3>
            <p>
              Onze techniekers plaatsen de toestellen, stellen de streefwaarde in en meten het vocht voor en
              na. Zo draait er niet meer dan nodig en niet langer dan nodig. Bekijk ook{" "}
              <Link to="/levering">levering en installatie</Link>.
            </p>
            <Link className="btn btn-white mb-cta" to="/verhuur/calculator">
              Bereken uw droogpakket
              <Arrow />
            </Link>
          </div>
          <img
            className="mb-man"
            src="/vernast/man-duim-kabels.webp"
            alt="Vernast technieker geeft duim omhoog"
            style={{ width: "min(30%,320px)" }}
          />
        </Reveal>
      </div>
    </section>

    {/* ============ FORMULIER ============ */}
    <ContactBlok
      kicker="Nog een vraag hierover?"
      titel="Onze droogspecialisten rekenen het met u mee."
      lede="Twijfelt u of uw kring het aankan, of welk toestel het zuinigst is voor uw project? Stel uw vraag, u krijgt binnen één werkdag antwoord van een specialist."
      onderwerpen={[
        "Vraag over stroomverbruik en kosten",
        "Advies over het juiste toestel",
        "Vraag over de elektrische aansluiting",
        "Iets anders",
      ]}
      placeholder="Bv. nieuwbouw 140 m², één kring van 16 A beschikbaar, hoeveel toestellen kan ik aansluiten?"
    />
  </GidsShell>
);

export default StroomverbruikPage;

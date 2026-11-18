import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { GidsFaq } from "@/components/gids/GidsShell";
import type { Copy } from "@/i18n/useTaal";

/**
 * De teksten van /gids/stroomverbruik-bouwdroger per taal.
 *
 * Elk getal komt uit de pagina (`Ctx`): de rekensom zelf staat daar en wordt
 * hier alleen in zinnen gegoten. Zo kan de Franse tekst nooit een ander
 * bedrag of vermogen noemen dan de Nederlandse. Secties die alleen bestaan
 * als er een voorbeeldtoestel is, krijgen dat toestel als argument.
 */

/** Het voorbeeldtoestel waarmee de pagina rekent. */
export interface Voorbeeld {
  short: string;
  path: string;
  kw: number;
  kwhDag: number;
  kostDag: number;
  kwhTweeWeken: number;
  kostTweeWeken: number;
  huurDag: number;
}

/** Ons kleinste toestel naast de DF 800. */
export interface Ons {
  short: string;
  type: string;
  path: string;
  kw: number;
  volume: number;
  litersPerDay: number;
}

export interface Concurrent {
  naam: string;
  kw: number;
  liters: number;
  volume: number;
  bron: string;
}

export interface Ctx {
  lp: (nlPad: string) => string;
  /** Getal in de notatie van de taal. */
  getal: (n: number, decimalen?: number) => string;
  /** Bedrag in de notatie van de taal, altijd twee decimalen. */
  bedrag: (n: number) => string;
  /** De voorbeeldprijs per kWh, al geformatteerd. */
  prijs: string;
  prijsKwh: number;
  perDag: (kw: number) => number;
  /** Huurbedrag uit de catalogus zoals de bezoeker het ziet, met btw-label. */
  huur: (excl: number) => string;
  /** Dagprijs van de condenspomp zoals de bezoeker hem ziet. */
  pomp: string;
  V: Voorbeeld | null;
  ONS: Ons | null;
  ZUINIGER: number | null;
  groot: Concurrent;
  klein: { naam: string; kw: number };
  /** Vermeldt een fiche geen vermogen? */
  zonderVermogen: boolean;
}

export interface StroomTekst {
  crumbHome: string;
  crumbGidsen: string;
  crumb: string;
  kick: string;
  h1: string;
  intro1: string;
  intro2: (v: Voorbeeld, zuiniger: number) => ReactNode;
  heroAlt: string;
  badge: (zuiniger: number) => ReactNode;
  faq: GidsFaq[];
  concurrentOmschrijving: string;
  factoren: { titel: string; tekst: ReactNode }[];
  stats: (v: Voorbeeld) => { l: string }[];
  uur: string;
  formuleH2: string;
  formuleP1: ReactNode;
  formule: string;
  formuleP2: ReactNode;
  meter: (v: Voorbeeld) => {
    onsKop: string;
    zuinigst: string;
    sub: string;
    vermogen: string;
    draaiuren: string;
    voorbeeldprijs: string;
    onsRes: string;
    aanStroom: string;
    hunKop: string;
    zelfde: string;
    hunRes: string;
  };
  tblKick: string;
  tblH2: string;
  tblLede: string;
  caption: string;
  captionGeen: string;
  thToestel: string;
  thVermogen: string;
  thKwh: string;
  thDag: string;
  geenVermogen: string;
  tblNote: ReactNode;
  reken: (v: Voorbeeld) => {
    kick: string;
    h2: string;
    p1: ReactNode;
    p2: ReactNode;
    p3: ReactNode;
    onsLabel: string;
    huurLabel: string;
    noot: string;
    somKop: string;
    uurSom: string;
    kwhDag: string;
    dagen: string;
    perKwh: string;
    stroom: string;
    somnoot: string;
    somvs: ReactNode;
  };
  faqTitel: string;
  ons: (o: Ons) => {
    kick: string;
    h2: string;
    lede: string;
    onsLabel: string;
    esub: string;
    kwhEtmaal: string;
    ekpilOns: string;
    vermogen: string;
    afvoer: string;
    volume: string;
    tweeWeken: string;
    totVolume: (v: number) => string;
    bekijk: string;
    vglLabel: string;
    ekpilHun: string;
    note: ReactNode;
    bron: ReactNode;
  };
  praktijkKick: string;
  praktijkH2: string;
  praktijkLede: string;
  nachtKick: string;
  nachtH2: string;
  nachtLede: string;
  doorLabel: string;
  doorH3: string;
  door: { b: string; tekst: string }[];
  doorVoet: string;
  letLabel: string;
  letH3: string;
  letop: { b: string; tekst: ReactNode }[];
  mbKick: string;
  mbH3: string;
  mbP: ReactNode;
  mbCta: string;
  mbAlt: string;
  contact: { kicker: string; titel: string; lede: string; onderwerpen: string[]; placeholder: string };
}

export const COPY = {
  nl: (c: Ctx): StroomTekst => {
    const { lp, getal, bedrag, prijs: PRIJS_TXT, V, ONS, groot: CONCURRENT, klein: CONCURRENT_KLEIN } = c;
    return {
      crumbHome: "Home",
      crumbGidsen: "Gidsen",
      crumb: "Stroomverbruik van een bouwdroger",
      kick: "Gids · verbruik en kosten",
      h1: "Stroomverbruik van een bouwdroger: wat kost het per dag?",
      intro1:
        "Een bouwdroger draait dag en nacht, dus de vraag wat dat kost is terecht. De som is eenvoudig: vermogen maal uren maal dagen maal uw prijs per kWh.",
      intro2: (v, zuiniger) => (
        <>
          <b style={{ color: "#fff" }}>Wij dimensioneren op het volume van uw ruimte.</b> Daarom staat er
          bij ons {getal(v.kw, 2)} kW waar een verhuurder standaard {getal(CONCURRENT.kw, 2)} kW afzet.{" "}
          Dat is {zuiniger} % minder stroom voor dezelfde droging.
        </>
      ),
      heroAlt: "Zorgeloos drogen: de bouwdroger draait, u hoeft niets te doen",
      badge: (zuiniger) => (
        <>
          {zuiniger} % minder stroom
          <small>dan een standaard bouwdroger van {getal(CONCURRENT.kw, 2)} kW</small>
        </>
      ),
      faq: [
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
            ? `Reken het dagverbruik maal het aantal dagen. Onze ${V.short} komt op hoogstens ${getal(V.kwhDag * 7)} kWh per week (${bedrag(V.kwhDag * 7 * c.prijsKwh)}) en ${getal(V.kwhDag * 30)} kWh per maand (${bedrag(V.kwhDag * 30 * c.prijsKwh)}) bij een voorbeeldprijs van ${PRIJS_TXT} per kWh. Dat zijn bovengrenzen: de hygrostaat schakelt het toestel terug zodra de streefwaarde bereikt is, en een droging duurt zelden een volle maand.`
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
      ],
      concurrentOmschrijving: "De bouwdroger die bij de meeste verhuurders in het gamma staat",
      factoren: [
        {
          titel: "Hoe nat het gebouw is",
          tekst: (
            <>
              Zolang er veel vocht vrijkomt, draait de compressor bijna continu. Naarmate chape en pleister
              droger worden, schakelt de hygrostaat vaker terug.
            </>
          ),
        },
        {
          titel: "De temperatuur",
          tekst: (
            <>
              In een koude ruimte werkt een condensdroger minder efficiënt en draait hij langer voor hetzelfde
              resultaat. Waarom dat zo is, leest u in{" "}
              <Link to={lp("/gids/condensdroger-of-adsorptiedroger")}>condensdroger of adsorptiedroger</Link>.
            </>
          ),
        },
        {
          titel: "Een open huis",
          tekst: (
            <>
              Ramen op kiepstand of een open deur naar een vochtige kelder laten steeds nieuwe vochtige lucht
              binnen. Dan droogt de bouwdroger de buitenlucht in plaats van uw muren.
            </>
          ),
        },
        {
          titel: "Het juiste formaat",
          tekst: (
            <>
              Een te klein toestel draait wekenlang op vol vermogen; een passend toestel is sneller klaar. De{" "}
              <Link to={lp("/verhuur/calculator")}>droogcalculator</Link> rekent uit wat bij uw oppervlakte past.
            </>
          ),
        },
        {
          titel: "De droogduur zelf",
          tekst: (
            <>
              De grootste besparing is een kortere droging. Hoe lang chape en pleisterwerk nodig hebben, staat in{" "}
              <Link to={lp("/gids/hoe-lang-moet-chape-drogen")}>hoe lang moet chape drogen</Link>.
            </>
          ),
        },
      ],
      stats: (v) => [
        { l: `Opgenomen vermogen van de ${v.short}` },
        { l: "Hoogstens per etmaal, continu op vol vermogen" },
        { l: "Voorbeeldprijs om mee te rekenen, geen tarief van ons" },
        { l: "Draaien per dag: elk uur stilstand kost droogtijd" },
      ],
      uur: "u",
      formuleH2: "Zo rekent u het verbruik uit",
      formuleP1: (
        <>
          Elk elektrisch toestel heeft een <b>opgenomen vermogen</b>, uitgedrukt in kilowatt (kW). Dat
          getal staat op het typeplaatje en in de technische fiche. Het verbruik in kilowattuur (kWh) is
          dat vermogen maal het aantal uren dat het toestel draait. De kost is dat verbruik maal uw prijs
          per kWh:
        </>
      ),
      formule: "kW × 24 uur × aantal dagen × prijs per kWh = stroomkost",
      formuleP2: (
        <>
          Het resultaat is een <b>bovengrens</b>. Een condensbouwdroger heeft een hygrostaat: zodra de
          luchtvochtigheid op de streefwaarde zit, schakelt de compressor terug en verbruikt het toestel
          veel minder. In de eerste dagen van een droging, als er veel vocht vrijkomt, zit u dicht bij die
          bovengrens; naar het einde toe duidelijk eronder.
        </>
      ),
      meter: (v) => ({
        onsKop: `Ons toestel · ${v.short}`,
        zuinigst: "Zuinigst",
        sub: "verbruik per etmaal, bovengrens",
        vermogen: "Opgenomen vermogen",
        draaiuren: "Draaiuren per dag",
        voorbeeldprijs: "Voorbeeldprijs",
        onsRes: `Hoogstens ${bedrag(v.kostDag)} per dag`,
        aanStroom: "aan stroom",
        hunKop: `Concurrentie · ${CONCURRENT.naam}`,
        zelfde: "Zelfde ruimte",
        hunRes: `${bedrag(c.perDag(CONCURRENT.kw) * c.prijsKwh)} per dag`,
      }),
      tblKick: "Per toestel",
      tblH2: "Het vermogen van onze toestellen",
      tblLede: `Het opgenomen vermogen zoals het in de technische fiche op de toestelpagina staat, met het maximale verbruik per etmaal en de kost per dag bij een voorbeeldprijs van ${PRIJS_TXT} per kWh. Die prijs is alleen een voorbeeld om mee te rekenen; uw eigen tarief staat op uw energiefactuur en kan hoger of lager liggen.`,
      caption: `Maximaal verbruik bij continu vol vermogen. Voorbeeldprijs ${PRIJS_TXT}/kWh, geen tarief van Vernast.`,
      captionGeen: " Vermeldt de fiche geen vermogen, kijk dan op het typeplaatje van het toestel.",
      thToestel: "Toestel",
      thVermogen: "Vermogen",
      thKwh: "Max. kWh per 24 u",
      thDag: "Max. per dag (voorbeeld)",
      geenVermogen: "Niet in de fiche vermeld: zie het typeplaatje",
      tblNote: (
        <>
          Bij de bouwkachels is die bovengrens vooral theoretisch: hun thermostaat schakelt af zodra de
          ruimte op temperatuur is, en hoeveel ze daarna nog draaien hangt af van hoe goed het gebouw de
          warmte vasthoudt. Toch is de kachel bijna altijd de grootste verbruiker op de werf. <b>Verwarm
          daarom alleen waar het nodig is</b>, zoals in een koude kelder of een winterwerf.
        </>
      ),
      reken: (v) => ({
        kick: "Rekenvoorbeeld",
        h2: "Wat de stroom per dag kost.",
        p1: (
          <>
            Hiernaast staat wat één toestel per etmaal aan stroom kost als het onafgebroken op vol
            vermogen draait: onze {v.short} naast twee bouwdrogers van de concurrentie, allemaal gerekend
            tegen dezelfde voorbeeldprijs van {PRIJS_TXT} per kWh.
          </>
        ),
        p2: (
          <>
            Het zijn <b>bovengrenzen</b>. De hygrostaat schakelt de compressor terug zodra de
            streefvochtigheid bereikt is, dus in de tweede week ligt de rekening lager dan in de eerste.
            Wat niet verandert is de verhouding: een toestel met driemaal het vermogen kost ook driemaal
            zoveel stroom, elke dag opnieuw, of het die capaciteit nu nodig heeft of niet.
          </>
        ),
        p3: (
          <>
            De grijze balk onderaan is iets anders dan de drie erboven: dat is de <b>huur</b> van de{" "}
            {v.short}, {c.huur(v.huurDag)} per dag exclusief btw (zie <Link to={lp("/prijzen")}>alle prijzen</Link>
            ). Hij staat er ter grootteorde, zodat u meteen ziet hoe stroom en huur zich tot elkaar
            verhouden.
          </>
        ),
        onsLabel: `${v.short}, onze kleinste bouwdroger`,
        huurLabel: `Huur van de ${v.short} per dag, excl. btw`,
        noot: `Zet u er een ventilator bij, dan komt daar relatief weinig verbruik bij; een bouwkachel weegt veel zwaarder door. De vermogens van de ${CONCURRENT_KLEIN.naam} en de ${CONCURRENT.naam} komen uit de fiches van hun verdelers.`,
        somKop: "Twee weken drogen, stap voor stap",
        uurSom: `${getal(v.kw, 2)} kW × 24 uur`,
        kwhDag: "kWh/dag",
        dagen: "14 dagen",
        perKwh: `${PRIJS_TXT} per kWh`,
        stroom: "stroom",
        somnoot: `Stel: u droogt een nieuwbouwwoning met één ${v.short} gedurende twee weken, en het toestel draait onafgebroken op vol vermogen. Met de voorbeeldprijs van ${PRIJS_TXT} per kWh is dat de bovengrens: hoogstens ${bedrag(v.kostDag)} per dag. Door de hygrostaat ligt de werkelijke rekening lager.`,
        somvs: (
          <>
            Dezelfde veertien dagen met een <b>{CONCURRENT_KLEIN.naam}</b>, een bouwdroger van de concurrentie van{" "}
            {getal(CONCURRENT_KLEIN.kw, 2)} kW, kosten{" "}
            <b className="hun">{bedrag(c.perDag(CONCURRENT_KLEIN.kw) * 14 * c.prijsKwh)}</b> aan
            stroom, {bedrag((c.perDag(CONCURRENT_KLEIN.kw) - v.kwhDag) * 14 * c.prijsKwh)} meer
            voor dezelfde ruimte.
          </>
        ),
      }),
      faqTitel: "Alles over het verbruik van een bouwdroger",
      ons: (o) => ({
        kick: "Toestel tegen toestel",
        h2: "In een kleine ruimte zet u geen groot toestel neer.",
        lede: `De grootste stroomrekening komt zelden van een onzuinig toestel, maar van een te groot toestel. Hieronder onze kleinste bouwdroger naast de ${CONCURRENT.naam}, het model dat bij de meeste verhuurders standaard meegaat, ook naar een kelder of een appartement waar het veel te zwaar voor is.`,
        onsLabel: "Ons toestel",
        esub: `${o.type} voor ruimtes tot ${o.volume} m³ · 230 V`,
        kwhEtmaal: "kWh per etmaal",
        ekpilOns: `${bedrag(c.perDag(o.kw) * c.prijsKwh)} per dag aan stroom bij ${PRIJS_TXT} per kWh`,
        vermogen: "Opgenomen vermogen",
        afvoer: "Vochtafvoer",
        volume: "Aanbevolen volume",
        tweeWeken: "Stroom over twee weken",
        totVolume: (vol) => `tot ${vol} m³`,
        bekijk: `Bekijk de ${o.short}`,
        vglLabel: "Vergelijkingstoestel",
        ekpilHun: `${bedrag(c.perDag(CONCURRENT.kw) * c.prijsKwh)} per dag aan stroom bij ${PRIJS_TXT} per kWh`,
        note: (
          <>
            <b>
              Scheelt {bedrag((c.perDag(CONCURRENT.kw) - c.perDag(o.kw)) * 14 * c.prijsKwh)} aan
              stroom over twee weken
            </b>:{" "}
            <b className="ons">{Math.round((1 - c.perDag(o.kw) / c.perDag(CONCURRENT.kw)) * 100)} % minder
            verbruik</b>, voor een ruimte waar {o.volume} m³ aan capaciteit volstaat. Daarom rekent de{" "}
            <Link to={lp("/verhuur/calculator")}>droogcalculator</Link> eerst uw volume uit en kiest ze pas
            daarna het toestel.
          </>
        ),
        bron: (
          <>
            Eerlijk erbij: de {CONCURRENT.naam} is geen slecht toestel. Hij is gebouwd voor industrieel
            werk en voor volumes tot {CONCURRENT.volume} m³, en in zo'n hal of loods doet hij precies wat
            hij moet doen. Het probleem begint wanneer datzelfde toestel in een kelder, een appartement of
            één verdieping wordt gezet, en dat gebeurt vaak, omdat verhuurders nu eenmaal zetten wat op
            de kar staat. Dan betaalt u elke dag voor capaciteit die er niet uit kan. Het punt hierboven
            is dus het formaat, niet de kwaliteit. Onze cijfers komen uit de technische fiche op{" "}
            <Link to={lp(o.path)}>de toestelpagina</Link> (vochtafvoer bij 30 °C en 80 % relatieve
            vochtigheid), die van de {CONCURRENT.naam} uit de{" "}
            <a href={CONCURRENT.bron} target="_blank" rel="noopener noreferrer nofollow">
              productfiche van de verdeler
            </a>
            . Het verbruik is in beide gevallen het opgenomen vermogen maal 24 uur, omgerekend tegen de
            voorbeeldprijs van {PRIJS_TXT} per kWh.
          </>
        ),
      }),
      praktijkKick: "In de praktijk",
      praktijkH2: "Wat het verbruik omhoog of omlaag duwt.",
      praktijkLede: "Vijf dingen bepalen of u dicht bij die bovengrens zit of er ruim onder blijft.",
      nachtKick: "Dag en nacht",
      nachtH2: "Mag een bouwdroger 24 uur per dag en 's nachts aan?",
      nachtLede:
        "Ja, en dat is ook de bedoeling. Zet u hem 's nachts uit, dan loopt de luchtvochtigheid in een paar uur weer op en trekt het vocht uit de lucht opnieuw in de muren en de vloer. U verliest dan meer droogtijd dan u aan stroom bespaart.",
      doorLabel: "Laat hem doordraaien",
      doorH3: "Een bouwdroger is gebouwd voor continu gebruik.",
      door: [
        { b: "Elk uur stilstand telt.", tekst: "De luchtvochtigheid loopt in een paar uur weer op, en het vocht trekt opnieuw in muren en vloer." },
        { b: "De hygrostaat regelt zelf.", tekst: "Zodra de streefwaarde bereikt is, schakelt de compressor terug; u hoeft het toestel niet zelf uit te zetten." },
        { b: "Doorlopend is doorgaans goedkoper.", tekst: "Een dag langer huren weegt zwaarder door dan de stroom van een nacht doordraaien." },
        { b: "Wij meten voor en na.", tekst: "In een droogpakket legt de technieker de start- en eindwaarde vast, zodat niemand op gevoel moet beslissen." },
      ],
      doorVoet: "Geldt voor elk condenstoestel uit ons gamma.",
      letLabel: "Waar u wel op let",
      letH3: "Drie dingen bij doorlopend gebruik.",
      letop: [
        {
          b: "Afvoer van het water.",
          tekst: (
            <>
              Met een reservoir moet u regelmatig legen, anders valt het
              toestel stil. Met een slang naar een afvoer, of een condenspomp (bij ons{" "}
              {c.pomp} per bouwdroger per dag), loopt de droging ook 's nachts en in het
              weekend door.
            </>
          ),
        },
        { b: "Een vrije plaats.", tekst: "Zet het toestel niet tegen een muur of onder een tafel; de lucht moet vrij aan- en afgevoerd kunnen worden." },
        {
          b: "De elektrische kring.",
          tekst:
            "Een gewone kring van 16 A op 230 V kan ongeveer 3,6 kW aan. Tel het vermogen op van alles wat erop hangt. De losse bouwkachels Heatboost 20 en 30 T werken op 400 V krachtstroom en vragen hun eigen aansluiting; de kachel in een droogpakket draait op een gewoon stopcontact van 230 V.",
        },
      ],
      mbKick: "Liever niet zelf rekenen?",
      mbH3: "In een droogpakket draait er niet meer dan nodig.",
      mbP: (
        <>
          Onze techniekers plaatsen de toestellen, stellen de streefwaarde in en meten het vocht voor en
          na. Zo draait er niet meer dan nodig en niet langer dan nodig. Bekijk ook{" "}
          <Link to={lp("/levering")}>levering en installatie</Link>.
        </>
      ),
      mbCta: "Bereken uw droogpakket",
      mbAlt: "Vernast technieker geeft duim omhoog",
      contact: {
        kicker: "Nog een vraag hierover?",
        titel: "Onze droogspecialisten rekenen het met u mee.",
        lede: "Twijfelt u of uw kring het aankan, of welk toestel het zuinigst is voor uw project? Stel uw vraag, u krijgt binnen één werkdag antwoord van een specialist.",
        onderwerpen: [
          "Vraag over stroomverbruik en kosten",
          "Advies over het juiste toestel",
          "Vraag over de elektrische aansluiting",
          "Iets anders",
        ],
        placeholder: "Bv. nieuwbouw 140 m², één kring van 16 A beschikbaar, hoeveel toestellen kan ik aansluiten?",
      },
    };
  },
  fr: (c: Ctx): StroomTekst => {
    const { lp, getal, bedrag, prijs: PRIJS_TXT, V, ONS, groot: CONCURRENT, klein: CONCURRENT_KLEIN } = c;
    return {
      crumbHome: "Accueil",
      crumbGidsen: "Guides",
      crumb: "Consommation électrique d'un déshumidificateur",
      kick: "Guide · consommation et coûts",
      h1: "Consommation électrique d'un déshumidificateur de chantier : combien coûte-t-il par jour ?",
      intro1:
        "Un déshumidificateur de chantier tourne jour et nuit : la question de ce que cela coûte est donc légitime. Le calcul est simple : puissance × heures × jours × votre prix par kWh.",
      intro2: (v, zuiniger) => (
        <>
          <b style={{ color: "#fff" }}>Nous dimensionnons selon le volume de votre pièce.</b> C'est pourquoi
          nous plaçons {getal(v.kw, 2)} kW là où un loueur installe d'office {getal(CONCURRENT.kw, 2)} kW.{" "}
          Cela représente {zuiniger} % d'électricité en moins pour le même séchage.
        </>
      ),
      heroAlt: "Sécher l'esprit tranquille : le déshumidificateur tourne, vous n'avez rien à faire",
      badge: (zuiniger) => (
        <>
          {zuiniger} % d'électricité en moins
          <small>qu'un déshumidificateur standard de {getal(CONCURRENT.kw, 2)} kW</small>
        </>
      ),
      faq: [
        {
          question: "Combien d'électricité un déshumidificateur de chantier consomme-t-il par jour ?",
          answer: V
            ? `Comptez la puissance absorbée × 24 heures. Notre ${V.short} absorbe ${getal(V.kw, 2)} kW, soit au maximum ${getal(V.kwhDag)} kWh par 24 heures s'il tourne sans interruption à pleine puissance. En pratique, c'est moins, car l'hygrostat ralentit l'appareil dès que l'humidité cible est atteinte.`
            : "Comptez la puissance absorbée indiquée sur la plaque signalétique × 24 heures. C'est la limite supérieure ; en pratique, c'est moins, car l'hygrostat ralentit l'appareil dès que l'humidité cible est atteinte.",
        },
        {
          question: "Combien coûte un déshumidificateur de chantier en électricité ?",
          answer: V
            ? `Multipliez les kWh par jour par votre prix par kWh. Avec un prix d'exemple de ${PRIJS_TXT} par kWh, le ${V.short} coûte au maximum ${bedrag(V.kostDag)} d'électricité par jour. Votre propre prix figure sur votre facture d'énergie.`
            : "Multipliez les kWh par jour par votre prix par kWh, qui figure sur votre facture d'énergie.",
        },
        {
          question: "Un déshumidificateur de chantier peut-il rester allumé 24 heures sur 24, et la nuit ?",
          answer:
            "Oui. Un déshumidificateur de chantier est fait pour tourner jour et nuit, et il le faut : chaque heure d'arrêt laisse l'humidité de l'air remonter. S'il évacue l'eau non pas dans un réservoir mais par un tuyau ou une pompe à condensats, il continue aussi à tourner le week-end sans que vous deviez vider quoi que ce soit.",
        },
        {
          question: "Un ventilateur ou un chauffage de chantier consomme-t-il plus qu'un déshumidificateur ?",
          answer:
            "Un ventilateur de chantier consomme moins qu'un déshumidificateur. Un chauffage de chantier électrique consomme beaucoup plus : il produit de la chaleur, et c'est ce qui demande le plus d'énergie. Son thermostat le ralentit toutefois dès que la pièce est à température.",
        },
        {
          question: "Combien de watts un déshumidificateur de chantier consomme-t-il par heure ?",
          answer: V
            ? `La puissance absorbée est la consommation par heure. Notre ${V.short} affiche ${getal(V.kw, 2)} kW, soit ${getal(V.kw * 1000, 0)} watts par heure de fonctionnement. Dans notre gamme, cela va de 200 watts pour un ventilateur de chantier à 1 400 watts pour le plus grand déshumidificateur à condensation ; des appareils de location plus grands atteignent 2 100 watts.`
            : "La puissance absorbée indiquée sur la plaque signalétique est la consommation par heure de fonctionnement. Pour les déshumidificateurs de chantier à condensation, elle se situe généralement entre 750 et 2 100 watts.",
        },
        {
          question: "Combien coûte un déshumidificateur de chantier en électricité par semaine et par mois ?",
          answer: V
            ? `Multipliez la consommation journalière par le nombre de jours. Notre ${V.short} atteint au maximum ${getal(V.kwhDag * 7)} kWh par semaine (${bedrag(V.kwhDag * 7 * c.prijsKwh)}) et ${getal(V.kwhDag * 30)} kWh par mois (${bedrag(V.kwhDag * 30 * c.prijsKwh)}) avec un prix d'exemple de ${PRIJS_TXT} par kWh. Ce sont des limites supérieures : l'hygrostat ralentit l'appareil dès que la valeur cible est atteinte, et un séchage dure rarement un mois entier.`
            : "Multipliez la consommation journalière par le nombre de jours, puis par votre prix par kWh. Le résultat est une limite supérieure ; l'hygrostat ralentit l'appareil dès que la valeur cible est atteinte.",
        },
        {
          question: "Puis-je brancher un déshumidificateur de chantier sur une prise ordinaire ?",
          answer: V
            ? `Oui. Nos déshumidificateurs de chantier à condensation fonctionnent en 230 V et se branchent sur une prise ordinaire. Faites toutefois attention au circuit : un circuit ordinaire de 16 A supporte environ 3,6 kW, additionnez donc la puissance de tout ce qui y est branché. Avec ${getal(V.kw, 2)} kW pour le ${V.short}, il reste de la marge pour d'autres outils. Les chauffages de chantier de 20 et 30 kW loués seuls fonctionnent en revanche sur du 400 V et demandent leur propre raccordement.`
            : "Oui, nos déshumidificateurs de chantier à condensation fonctionnent en 230 V. Faites attention au circuit : 16 A supporte environ 3,6 kW, additionnez donc la puissance de tout ce qui y est branché.",
        },
        {
          question: "Un déshumidificateur de chantier consomme-t-il plus qu'un déshumidificateur domestique ?",
          answer:
            "Oui, et c'est logique. Un déshumidificateur domestique tourne quelques heures par jour à faible puissance pour garder un séjour confortable. Un déshumidificateur de chantier tourne jour et nuit et doit retirer de l'air des dizaines de litres d'humidité de construction par 24 heures. Il consomme donc plus par jour, mais il n'est nécessaire que quelques semaines.",
        },
        {
          question: "Un déshumidificateur de chantier plus grand consomme-t-il toujours plus d'électricité ?",
          answer: ONS
            ? `Par heure, oui, et c'est précisément pour cela que la taille compte. Un appareil pour des volumes jusqu'à ${CONCURRENT.volume} m³ absorbe ${getal(CONCURRENT.kw, 2)} kW, contre ${getal(ONS.kw, 2)} kW pour un appareil jusqu'à ${ONS.volume} m³. Si vous placez ce grand appareil dans une petite pièce, vous payez chaque jour pour une capacité qui ne peut pas être exploitée. C'est pourquoi le calculateur de séchage choisit d'abord le volume, et seulement ensuite l'appareil.`
            : "Par heure, oui. Un appareil trop grand dans une petite pièce coûte chaque jour de l'électricité pour une capacité inutilisée ; dimensionnez donc selon le volume.",
        },
      ],
      concurrentOmschrijving: "Le déshumidificateur de chantier que l'on trouve dans la gamme de la plupart des loueurs",
      factoren: [
        {
          titel: "Le degré d'humidité du bâtiment",
          tekst: (
            <>
              Tant que beaucoup d'humidité se libère, le compresseur tourne presque en continu. À mesure que la
              chape et le plafonnage sèchent, l'hygrostat le ralentit plus souvent.
            </>
          ),
        },
        {
          titel: "La température",
          tekst: (
            <>
              Dans une pièce froide, un déshumidificateur à condensation est moins efficace et tourne plus
              longtemps pour le même résultat. Vous lirez pourquoi dans{" "}
              <Link to={lp("/gids/condensdroger-of-adsorptiedroger")}>déshumidificateur à condensation ou à adsorption</Link>.
            </>
          ),
        },
        {
          titel: "Une maison ouverte",
          tekst: (
            <>
              Des fenêtres en oscillo-battant ou une porte ouverte vers une cave humide laissent sans cesse
              entrer de l'air humide. Le déshumidificateur sèche alors l'air extérieur au lieu de vos murs.
            </>
          ),
        },
        {
          titel: "La bonne taille",
          tekst: (
            <>
              Un appareil trop petit tourne des semaines à pleine puissance ; un appareil adapté termine plus
              vite. Le <Link to={lp("/verhuur/calculator")}>calculateur de séchage</Link> calcule ce qui convient
              à votre surface.
            </>
          ),
        },
        {
          titel: "La durée du séchage elle-même",
          tekst: (
            <>
              La plus grande économie, c'est un séchage plus court. Le temps nécessaire à la chape et au
              plafonnage figure dans{" "}
              <Link to={lp("/gids/hoe-lang-moet-chape-drogen")}>temps de séchage d'une chape</Link>.
            </>
          ),
        },
      ],
      stats: (v) => [
        { l: `Puissance absorbée du ${v.short}` },
        { l: "Au maximum par 24 heures, en continu à pleine puissance" },
        { l: "Prix d'exemple pour le calcul, pas un tarif de notre part" },
        { l: "De fonctionnement par jour : chaque heure d'arrêt coûte du temps de séchage" },
      ],
      uur: "h",
      formuleH2: "Comment calculer la consommation",
      formuleP1: (
        <>
          Chaque appareil électrique a une <b>puissance absorbée</b>, exprimée en kilowatts (kW). Ce
          chiffre figure sur la plaque signalétique et dans la fiche technique. La consommation en
          kilowattheures (kWh) est cette puissance multipliée par le nombre d'heures de fonctionnement. Le
          coût est cette consommation multipliée par votre prix par kWh :
        </>
      ),
      formule: "kW × 24 heures × nombre de jours × prix par kWh = coût de l'électricité",
      formuleP2: (
        <>
          Le résultat est une <b>limite supérieure</b>. Un déshumidificateur à condensation est équipé d'un
          hygrostat : dès que l'humidité de l'air atteint la valeur cible, le compresseur ralentit et
          l'appareil consomme beaucoup moins. Pendant les premiers jours d'un séchage, quand beaucoup
          d'humidité se libère, vous êtes proche de cette limite ; vers la fin, nettement en dessous.
        </>
      ),
      meter: (v) => ({
        onsKop: `Notre appareil · ${v.short}`,
        zuinigst: "Le plus économe",
        sub: "consommation par 24 heures, limite supérieure",
        vermogen: "Puissance absorbée",
        draaiuren: "Heures de fonctionnement par jour",
        voorbeeldprijs: "Prix d'exemple",
        onsRes: `Au maximum ${bedrag(v.kostDag)} par jour`,
        aanStroom: "d'électricité",
        hunKop: `Concurrence · ${CONCURRENT.naam}`,
        zelfde: "Même pièce",
        hunRes: `${bedrag(c.perDag(CONCURRENT.kw) * c.prijsKwh)} par jour`,
      }),
      tblKick: "Par appareil",
      tblH2: "La puissance de nos appareils",
      tblLede: `La puissance absorbée telle qu'elle figure dans la fiche technique de la page de l'appareil, avec la consommation maximale par 24 heures et le coût par jour pour un prix d'exemple de ${PRIJS_TXT} par kWh. Ce prix n'est qu'un exemple pour le calcul ; votre propre tarif figure sur votre facture d'énergie et peut être plus élevé ou plus bas.`,
      caption: `Consommation maximale en continu à pleine puissance. Prix d'exemple ${PRIJS_TXT}/kWh, pas un tarif de Vernast.`,
      captionGeen: " Si la fiche ne mentionne pas de puissance, consultez la plaque signalétique de l'appareil.",
      thToestel: "Appareil",
      thVermogen: "Puissance",
      thKwh: "Max. kWh par 24 h",
      thDag: "Max. par jour (exemple)",
      geenVermogen: "Non mentionné dans la fiche : voir la plaque signalétique",
      tblNote: (
        <>
          Pour les chauffages de chantier, cette limite supérieure est surtout théorique : leur thermostat
          les coupe dès que la pièce est à température, et la durée pendant laquelle ils tournent ensuite
          dépend de la façon dont le bâtiment retient la chaleur. Le chauffage reste pourtant presque
          toujours le plus gros consommateur du chantier. <b>Ne chauffez donc que là où c'est nécessaire</b>,
          comme dans une cave froide ou sur un chantier d'hiver.
        </>
      ),
      reken: (v) => ({
        kick: "Exemple de calcul",
        h2: "Ce que coûte l'électricité par jour.",
        p1: (
          <>
            Ci-contre, ce que coûte en électricité un appareil par 24 heures s'il tourne sans interruption à
            pleine puissance : notre {v.short} à côté de deux déshumidificateurs de la concurrence, tous
            calculés avec le même prix d'exemple de {PRIJS_TXT} par kWh.
          </>
        ),
        p2: (
          <>
            Ce sont des <b>limites supérieures</b>. L'hygrostat ralentit le compresseur dès que l'humidité
            cible est atteinte : la deuxième semaine, la facture est donc plus basse que la première. Ce qui
            ne change pas, c'est le rapport : un appareil trois fois plus puissant coûte aussi trois fois
            plus d'électricité, chaque jour, qu'il ait besoin de cette capacité ou non.
          </>
        ),
        p3: (
          <>
            La barre grise du bas est différente des trois au-dessus : c'est la <b>location</b> du{" "}
            {v.short}, {c.huur(v.huurDag)} par jour (voir <Link to={lp("/prijzen")}>tous les prix</Link>). Elle
            est là comme ordre de grandeur, pour que vous voyiez immédiatement le rapport entre électricité
            et location.
          </>
        ),
        onsLabel: `${v.short}, notre plus petit déshumidificateur`,
        huurLabel: `Location du ${v.short} par jour`,
        noot: `Si vous ajoutez un ventilateur, la consommation augmente relativement peu ; un chauffage de chantier pèse beaucoup plus lourd. Les puissances du ${CONCURRENT_KLEIN.naam} et du ${CONCURRENT.naam} proviennent des fiches de leurs distributeurs.`,
        somKop: "Deux semaines de séchage, étape par étape",
        uurSom: `${getal(v.kw, 2)} kW × 24 heures`,
        kwhDag: "kWh/jour",
        dagen: "14 jours",
        perKwh: `${PRIJS_TXT} par kWh`,
        stroom: "d'électricité",
        somnoot: `Supposons que vous séchiez une nouvelle construction avec un seul ${v.short} pendant deux semaines, et que l'appareil tourne sans interruption à pleine puissance. Avec le prix d'exemple de ${PRIJS_TXT} par kWh, c'est la limite supérieure : au maximum ${bedrag(v.kostDag)} par jour. Grâce à l'hygrostat, la facture réelle est plus basse.`,
        somvs: (
          <>
            Les mêmes quatorze jours avec un <b>{CONCURRENT_KLEIN.naam}</b>, un déshumidificateur de la concurrence de{" "}
            {getal(CONCURRENT_KLEIN.kw, 2)} kW, coûtent{" "}
            <b className="hun">{bedrag(c.perDag(CONCURRENT_KLEIN.kw) * 14 * c.prijsKwh)}</b>{" "}
            d'électricité, soit {bedrag((c.perDag(CONCURRENT_KLEIN.kw) - v.kwhDag) * 14 * c.prijsKwh)} de plus
            pour la même pièce.
          </>
        ),
      }),
      faqTitel: "Tout sur la consommation d'un déshumidificateur de chantier",
      ons: (o) => ({
        kick: "Appareil contre appareil",
        h2: "Dans une petite pièce, on ne place pas un grand appareil.",
        lede: `La plus grosse facture d'électricité vient rarement d'un appareil peu économe, mais d'un appareil trop grand. Ci-dessous, notre plus petit déshumidificateur à côté du ${CONCURRENT.naam}, le modèle que la plupart des loueurs fournissent d'office, même pour une cave ou un appartement pour lesquels il est beaucoup trop lourd.`,
        onsLabel: "Notre appareil",
        esub: `${o.type} pour des pièces jusqu'à ${o.volume} m³ · 230 V`,
        kwhEtmaal: "kWh par 24 heures",
        ekpilOns: `${bedrag(c.perDag(o.kw) * c.prijsKwh)} d'électricité par jour à ${PRIJS_TXT} par kWh`,
        vermogen: "Puissance absorbée",
        afvoer: "Extraction d'humidité",
        volume: "Volume recommandé",
        tweeWeken: "Électricité sur deux semaines",
        totVolume: (vol) => `jusqu'à ${vol} m³`,
        bekijk: `Voir le ${o.short}`,
        vglLabel: "Appareil de comparaison",
        ekpilHun: `${bedrag(c.perDag(CONCURRENT.kw) * c.prijsKwh)} d'électricité par jour à ${PRIJS_TXT} par kWh`,
        note: (
          <>
            <b>
              Une différence de {bedrag((c.perDag(CONCURRENT.kw) - c.perDag(o.kw)) * 14 * c.prijsKwh)}{" "}
              d'électricité sur deux semaines
            </b>{" "}:{" "}
            <b className="ons">{Math.round((1 - c.perDag(o.kw) / c.perDag(CONCURRENT.kw)) * 100)} % de
            consommation en moins</b>, pour une pièce où une capacité de {o.volume} m³ suffit. C'est pourquoi le{" "}
            <Link to={lp("/verhuur/calculator")}>calculateur de séchage</Link> calcule d'abord votre volume et
            ne choisit l'appareil qu'ensuite.
          </>
        ),
        bron: (
          <>
            Soyons honnêtes : le {CONCURRENT.naam} n'est pas un mauvais appareil. Il est conçu pour des
            travaux industriels et pour des volumes jusqu'à {CONCURRENT.volume} m³, et dans un tel hall ou
            entrepôt, il fait exactement ce qu'il doit faire. Le problème commence quand ce même appareil est
            placé dans une cave, un appartement ou sur un seul étage, ce qui arrive souvent, parce que les
            loueurs fournissent tout simplement ce qu'ils ont sous la main. Vous payez alors chaque jour pour
            une capacité qui ne peut pas être exploitée. Le point ci-dessus porte donc sur la taille, pas sur
            la qualité. Nos chiffres proviennent de la fiche technique de{" "}
            <Link to={lp(o.path)}>la page de l'appareil</Link> (extraction d'humidité à 30 °C et 80 %
            d'humidité relative), ceux du {CONCURRENT.naam} de la{" "}
            <a href={CONCURRENT.bron} target="_blank" rel="noopener noreferrer nofollow">
              fiche produit du distributeur
            </a>
            . Dans les deux cas, la consommation est la puissance absorbée × 24 heures, convertie au prix
            d'exemple de {PRIJS_TXT} par kWh.
          </>
        ),
      }),
      praktijkKick: "En pratique",
      praktijkH2: "Ce qui fait monter ou baisser la consommation.",
      praktijkLede: "Cinq éléments déterminent si vous êtes proche de cette limite supérieure ou nettement en dessous.",
      nachtKick: "Jour et nuit",
      nachtH2: "Un déshumidificateur de chantier peut-il tourner 24 heures sur 24, et la nuit ?",
      nachtLede:
        "Oui, et c'est d'ailleurs le but. Si vous l'éteignez la nuit, l'humidité de l'air remonte en quelques heures et l'humidité contenue dans l'air pénètre à nouveau dans les murs et le sol. Vous perdez alors plus de temps de séchage que vous n'économisez d'électricité.",
      doorLabel: "Laissez-le tourner",
      doorH3: "Un déshumidificateur de chantier est conçu pour un usage continu.",
      door: [
        { b: "Chaque heure d'arrêt compte.", tekst: "L'humidité de l'air remonte en quelques heures, et l'humidité pénètre à nouveau dans les murs et le sol." },
        { b: "L'hygrostat régule tout seul.", tekst: "Dès que la valeur cible est atteinte, le compresseur ralentit ; vous n'avez pas à éteindre l'appareil vous-même." },
        { b: "Tourner en continu revient généralement moins cher.", tekst: "Un jour de location en plus pèse plus lourd que l'électricité d'une nuit de fonctionnement." },
        { b: "Nous mesurons avant et après.", tekst: "Dans un pack de séchage, le technicien consigne les valeurs de départ et de fin, pour que personne ne doive décider au jugé." },
      ],
      doorVoet: "Valable pour chaque appareil à condensation de notre gamme.",
      letLabel: "Ce à quoi il faut faire attention",
      letH3: "Trois points en cas d'usage continu.",
      letop: [
        {
          b: "L'évacuation de l'eau.",
          tekst: (
            <>
              Avec un réservoir, vous devez vider régulièrement, sinon l'appareil s'arrête. Avec un tuyau vers
              une évacuation, ou une pompe à condensats (chez nous {c.pomp} par déshumidificateur et par
              jour), le séchage continue aussi la nuit et le week-end.
            </>
          ),
        },
        { b: "Un emplacement dégagé.", tekst: "Ne placez pas l'appareil contre un mur ou sous une table ; l'air doit pouvoir entrer et sortir librement." },
        {
          b: "Le circuit électrique.",
          tekst:
            "Un circuit ordinaire de 16 A en 230 V supporte environ 3,6 kW. Additionnez la puissance de tout ce qui y est branché. Les chauffages de chantier Heatboost 20 et 30 T loués seuls fonctionnent sur du 400 V et demandent leur propre raccordement ; le chauffage d'un pack de séchage fonctionne sur une prise ordinaire de 230 V.",
        },
      ],
      mbKick: "Vous préférez ne pas calculer vous-même ?",
      mbH3: "Dans un pack de séchage, rien ne tourne plus que nécessaire.",
      mbP: (
        <>
          Nos techniciens placent les appareils, règlent la valeur cible et mesurent l'humidité avant et
          après. Ainsi, rien ne tourne plus que nécessaire, ni plus longtemps que nécessaire. Consultez
          aussi <Link to={lp("/levering")}>livraison et installation</Link>.
        </>
      ),
      mbCta: "Calculez votre pack de séchage",
      mbAlt: "Un technicien Vernast lève le pouce",
      contact: {
        kicker: "Encore une question ?",
        titel: "Nos spécialistes du séchage font le calcul avec vous.",
        lede: "Vous vous demandez si votre circuit tiendra le coup, ou quel appareil est le plus économe pour votre projet ? Posez votre question, un spécialiste vous répond dans un délai d'un jour ouvrable.",
        onderwerpen: [
          "Question sur la consommation électrique et les coûts",
          "Conseil sur le bon appareil",
          "Question sur le raccordement électrique",
          "Autre chose",
        ],
        placeholder: "P. ex. nouvelle construction de 140 m², un circuit de 16 A disponible : combien d'appareils puis-je brancher ?",
      },
    };
  },
} satisfies Copy<(c: Ctx) => StroomTekst>;

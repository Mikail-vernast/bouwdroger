import { Fragment, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import GidsShell, { GidsFaqSectie, type GidsFaq } from "@/components/gids/GidsShell";
import ContactBlok from "@/components/content/ContactBlok";
import Reveal from "@/components/Reveal";
import { SEO } from "@/data/seo";
import { droogtermijnen, natuurlijkeChapeWeken as natuurlijkeWeken } from "@/lib/droogtijden";
import { ClockIcon, GaugeIcon, LayersIcon, ThermoIcon, WindIcon } from "@/components/content/icons";
import { BrushIcon } from "@/components/home-v3/icons";

const PATH = "/gids/hoe-lang-moet-chape-drogen";

/*
  De huurtermijnen per dikte komen uit de catalogus (via droogtijden.ts, dat
  ook de tabel op /nieuwbouw-drogen voedt), en de vuistregel voor natuurlijk drogen
  uit dezelfde module. Niets overgetypt: verandert het portaal een termijn,
  dan zeggen /nieuwbouw-drogen en deze gids samen hetzelfde nieuwe getal.

  `weken` is de langste termijn over alle oppervlaktes: liever een week te
  ruim aankondigen dan een termijn die bij een grotere ruimte niet klopt.
*/
const CHAPE = droogtermijnen("chape").map((r) => ({ cm: r.dikte, weken: r.max }));

const weken = (n: number) => `${n} ${n === 1 ? "week" : "weken"}`;
const dunste = CHAPE[0];
const dikste = CHAPE[CHAPE.length - 1];

/*
  De langste staaf in de vergelijking: natuurlijk drogen bij de dikste chape
  uit de catalogus. Alle balken worden daartegen geschaald, zodat de lezer de
  verhouding ziet en niet alleen de getallen leest.
*/
const SCHAAL = dikste ? natuurlijkeWeken(dikste.cm) : 10;
const breedte = (n: number) => `${Math.round((n / SCHAAL) * 100)}%`;

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

/** Het aandachtsteken in de rode "zo gaat het mis"-kaart. */
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

/** De waterdruppel die in de doorsnede uit de chape omhoog stijgt. */
const Druppel = ({ size = 10 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" />
  </svg>
);

/* De vijf dingen die een droging korter of langer maken, elk met hun icoon. */
const FACTOREN = [
  {
    icoon: <LayersIcon />,
    titel: "De dikte",
    tekst: "De zwaarste factor. Het vocht uit de onderste laag moet door de volle dikte naar boven; boven 4 cm loopt dat snel op.",
  },
  {
    icoon: <ThermoIcon />,
    titel: "De temperatuur",
    tekst: "Warme lucht kan veel meer vocht dragen dan koude. Onder een graad of tien staat een droging zo goed als stil.",
  },
  {
    icoon: <GaugeIcon />,
    titel: "De luchtvochtigheid",
    tekst: "Zit de lucht in het gebouw al vol vocht, dan kan de chape niets meer afgeven, hoe lang u ook wacht.",
  },
  {
    icoon: <WindIcon />,
    titel: "De luchtbeweging",
    tekst: "Boven een vloer blijft een laag verzadigde lucht hangen. Een ventilator veegt die weg, zodat droge lucht het vocht kan oppikken.",
  },
  {
    icoon: <ClockIcon />,
    titel: "Wat erop komt",
    tekst: "Onder tegels mag meer restvocht zitten dan onder parket, pvc of een gietvloer. De afwerking bepaalt waar u naartoe droogt.",
  },
];

/*
  Het opstookprotocol in de vorm die chapeurs en fabrikanten aanhouden. De
  exacte temperaturen en dagen staan niet in de stappen: die verschillen per
  product en per vloerverwarmingssysteem, en een getal uit onze mond zou het
  voorschrift van de plaatser overschrijven. De stappen zeggen wél in welke
  orde het gaat, want dat is wat op de werf fout loopt.
*/
const OPSTOOK = [
  <>
    <b>Wacht de uithardingstijd af.</b> Cementchape heeft water nodig om uit te harden. Uw chapeur zegt
    vanaf welke dag u mag beginnen stoken; bij anhydriet is die wachttijd doorgaans korter.
  </>,
  <>
    <b>Start laag.</b> Begin op een lage aanvoertemperatuur, niet op de temperatuur waarop u later wil
    wonen. De vloer moet gelijkmatig op gang komen.
  </>,
  <>
    <b>Drijf stap voor stap op.</b> Verhoog per dag met een vaste stap tot de maximale
    aanvoertemperatuur die de fabrikant toestaat, en houd die enkele dagen aan.
  </>,
  <>
    <b>Bouw even geleidelijk af.</b> Zet de verwarming niet in één keer uit; dat levert dezelfde
    spanningen op als te snel opstoken.
  </>,
  <>
    <b>Voer het vocht af terwijl u stookt.</b> Verwarming duwt het vocht uit de vloer, maar laat het in
    het gebouw. Zonder bouwdroger of ventilatie slaat het neer op ramen en buitenmuren.
  </>,
  <>
    <b>Meet, en bel dan pas de vloerlegger.</b> Een doorlopen opstookprotocol is geen bewijs dat de
    vloer droog is. Dat blijft een restvochtmeting.
  </>,
];

/*
  Eén vraag per chapedikte: "hoe lang moet chape van 6 cm drogen" is een
  zoekvraag op zich, en wie ze stelt wil het getal voor zíjn dikte zien. De
  staart per dikte staat hieronder, met een terugval voor het geval het
  portaal ooit een dikte toevoegt. Dan verschijnt de vraag mét getallen en
  zonder dikte-eigen toelichting, in plaats van niet te verschijnen.
*/
const STAART: Record<number, string> = {
  5: "Vijf centimeter is de dunste chape in onze pakketten en de snelste droging: de vuistregel van een week per centimeter houdt hier nog grotendeels stand.",
  6: "Zes centimeter is de gewoonste dikte in een Belgische nieuwbouw. De twee extra centimeter boven de vier wegen dubbel, en dat verklaart het verschil met een vloer van 5 cm.",
  7: "Bij zeven centimeter wordt wachten op het weer echt duur: dit is de dikte waar natuurlijk drogen een volledige bouwvakantie kan opslokken.",
};

const FAQ: GidsFaq[] = [
  ...CHAPE.map((rij) => ({
    question: `Hoe lang moet chape van ${rij.cm} cm drogen?`,
    answer: `Als richtwaarde droogt cementchape van ${rij.cm} cm op eigen kracht ongeveer ${weken(
      natuurlijkeWeken(rij.cm),
    )}, en dan nog alleen in een gebouw dat verwarmd en geventileerd is. Met een bouwdroger rekenen wij voor die dikte op een huurtermijn van ${weken(
      rij.weken,
    )}, inclusief een meting bij de start en bij de oplevering. ${
      STAART[rij.cm] ??
      "Hoeveel toestellen die dikte vraagt, hangt af van de oppervlakte; de droogcalculator rekent dat voor u uit."
    } Let op: de kalender beslist niet of de vloer klaar is, de meting wel. Een koude of dichtgemaakte werf loopt makkelijk weken uit op deze richtwaarde.`,
  })),
  {
    question: "Wanneer mag de bouwdroger aan na het leggen van de chape?",
    answer:
      "Niet meteen. Cementchape bindt water chemisch tijdens het uitharden, en in die eerste fase heeft ze dat water nog nodig. Vraag uw chapeur vanaf wanneer u actief mag drogen, dat is een kwestie van dagen tot weken, afhankelijk van het mengsel en van wat erin zit. Zet u de droger te vroeg en te hard aan, dan droogt de bovenkant uit terwijl de onderkant nog nat is, en dat geeft krimp, scheuren en in het slechtste geval een vloer die loskomt. Daarna mag het toestel wel dag en nacht draaien: elk uur stilstand laat de luchtvochtigheid weer oplopen.",
  },
  {
    question: "Kan chape te snel drogen?",
    answer:
      "Ja, en dat is het risico dat mensen onderschatten. Droogt alleen het oppervlak, dan krimpt de bovenkant terwijl de onderkant nog uitzet van vocht; die spanning komt eruit als scheuren of als opstaande randen. Daarom droogt een bouwdroger niet zo hard mogelijk, maar naar een streefwaarde die de technieker instelt, en daarom zet u de vloerverwarming niet meteen op volle kracht. Een gecontroleerde droging met meting voor en na is sneller én veiliger dan een vloer die u in een week probeert te forceren.",
  },
  {
    question: "Mag ik de vloerverwarming gebruiken om chape te drogen?",
    answer:
      "Ja, maar alleen volgens een opstookprotocol: rustig starten op een lage aanvoertemperatuur, per dag een stap opdrijven tot het maximum dat de fabrikant toestaat, enkele dagen aanhouden en dan even geleidelijk afbouwen, en dat alles pas na de wachttijd die de chapeur voorschrijft. Zet de verwarming nooit in één keer hoog. En vergeet niet dat verwarmen het vocht alleen uit de vloer haalt, niet uit het gebouw: zonder bouwdroger of ventilatie slaat het neer op ramen, dorpels en buitenmuren. Een doorlopen opstookprotocol is ook geen bewijs dat de vloer droog is; dat blijft een meting.",
  },
  {
    question: "Hoe weet ik of mijn chape droog genoeg is voor parket of tegels?",
    answer:
      "Door te meten, meestal met een CM-meting (carbidemethode) op een staal uit de volle diepte van de vloer. Een oppervlaktemeter zegt te weinig: een chape die hard en licht van kleur is, kan vanbinnen nog nat zijn. Welke grenswaarde geldt, hangt af van het type chape, van de vloerverwarming en van de afwerking, onder tegels mag doorgaans meer restvocht zitten dan onder parket, pvc of een gietvloer. Uw vloerlegger bepaalt die grens, dus vraag hem vooraf welke waarde hij wil zien; dan weet u waar u naartoe droogt. Bij onze droogpakketten zit een voor- en nameting, en op aanvraag een meetrapport.",
  },
  {
    question: "Hoe kan ik chape sneller laten drogen?",
    answer:
      "Door het klimaat in het gebouw te sturen in plaats van af te wachten. Drie dingen tegelijk: warmte, zodat de lucht meer vocht kan dragen; een bouwdroger, die dat vocht permanent uit de lucht haalt; en luchtbeweging, zodat de verzadigde laag boven de vloer wordt weggeveegd en droge lucht erbij kan. Laat het toestel dag en nacht draaien en houd ramen en deuren dicht, u droogt de ruimte, niet de straat. Wat niet werkt: alleen verwarmen, alleen ventileren bij vochtig buitenweer, of de droger 's nachts uitzetten om stroom te sparen.",
  },
  {
    question: "Hoeveel bouwdrogers heb ik nodig voor mijn chape?",
    answer:
      "Dat hangt af van het volume van de ruimte, niet van de oppervlakte alleen: een hoge open ruimte vraagt meer dan een lage. Daarom vraagt de droogcalculator uw oppervlakte, wat u droogt en de dikte, en stelt ze daarna een pakket samen met het aantal toestellen en de huurtermijn die erbij horen. Eén te klein toestel in een grote ruimte droogt niet sneller als u het langer laat staan; het haalt de streefwaarde simpelweg niet. Twijfelt u, bel ons dan, een verkeerd ingeschat pakket kost u weken, en die weken zijn duurder dan het toestel.",
  },
  {
    question: "Moet ik de ramen openzetten terwijl de bouwdroger draait?",
    answer:
      "Nee, houd ze dicht. Een bouwdroger droogt de lucht in een afgesloten ruimte; staat er een raam open, dan haalt u voortdurend nieuwe, vochtige buitenlucht binnen en blijft het toestel die drogen in plaats van uw vloer. Ventileren helpt alleen als de buitenlucht droger is dan de binnenlucht, en in een Belgische winter of een regenachtige herfst is dat zelden het geval. Doe ook deuren naar niet-gedroogde delen van het gebouw toe, en laat de droger in die afgesloten ruimte staan.",
  },
  {
    question: "Hoe lang moet anhydrietchape drogen?",
    answer:
      "Anhydrietchape (op basis van calciumsulfaat) wordt vloeibaar gegoten en ligt daardoor vaak dunner en vlakker, wat in haar voordeel werkt. Daar staat tegenover dat ze gevoeliger is voor vocht en doorgaans een lagere restvochtigheid vraagt voor ze afgewerkt mag worden; vaak moet ook de bovenste laag geschuurd worden voordat ze goed kan drogen en hechten. Volg daarom altijd het voorschrift van de plaatser en de fabrikant, die verschillen per product, en ze gaan boven elke vuistregel. Het droogprincipe blijft wel hetzelfde: zonder droge, bewegende lucht in het gebouw gaat er niets uit de vloer.",
  },
  {
    question: "Is een bouwdroger huren de moeite, of kan ik gewoon wachten?",
    answer: `Wachten kan, en kost niets aan huur. Wat het wél kost, is tijd die u elders betaalt: ${
      dikste ? `bij ${dikste.cm} cm chape staat er ongeveer ${weken(natuurlijkeWeken(dikste.cm))} tussen natuurlijk drogen en ${weken(dikste.weken)} met een droogpakket` : "een droging op eigen kracht duurt een veelvoud van een gestuurde droging"
    }. In die weken loopt uw bouwkrediet door, schuift elke volgende vakman mee op en hangt het vocht in een gesloten gebouw waar het schimmel en opstijgend vocht in het pleisterwerk kan geven. Bovendien is wachten geen garantie: in een koude, dichtgemaakte werf zonder ventilatie stáát de droging stil, hoe lang u ook wacht. Daarom zit er bij ons een meting voor en na, en een Drooggarantie: is de vloer op de einddatum niet droog, dan verlengen wij kosteloos.`,
  },
];

const ChapeDroogtijdPage = () => (
  <GidsShell
    seo={SEO.gidsChapeDrogen}
    path={PATH}
    crumbs={[
      { name: "Home", path: "/" },
      { name: "Gidsen", path: "/gids" },
      { name: "Hoe lang moet chape drogen?", path: PATH },
    ]}
    kick="Gids · droogtijden"
    h1="Hoe lang moet chape drogen?"
    intro={
      <p>
        Cementchape van {dunste?.cm} tot {dikste?.cm} cm droogt op eigen kracht in ongeveer{" "}
        {natuurlijkeWeken(dunste?.cm ?? 5)} tot {natuurlijkeWeken(dikste?.cm ?? 7)} weken. Met een
        bouwdroger rekenen wij voor die diktes op {dunste?.weken} tot {dikste?.weken} weken. Wat het bij
        u wordt, hangt af van de dikte, het type chape, de temperatuur en de ventilatie. Hieronder staan
        de richtwaarden per dikte, het verschil met en zonder bouwdroger, en hoe u weet wanneer de
        vloerlegger mag komen.
      </p>
    }
    heroImg={{ src: "/vernast/drie-vakmannen.webp", alt: "De Vernast vakmannen met hun bouwdrogers" }}
    heroBadge={
      <div className="fbadge" style={{ top: "-30px", left: "2%", zIndex: 0 }}>
        <span className="ic">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        </span>
        <div>
          ± 1 week per cm
          <small>vuistregel tot 4 cm, daarna trager</small>
        </div>
      </div>
    }
    articlePublished="2026-09-29"
    articleModified="2026-11-12"
    faq={FAQ}
    faqZelfPlaatsen
  >
    {/* ============ DE DROOGTIJD IN VIER GETALLEN ============ */}
    {dikste && (
      <div className="statrule">
        <div className="wrap">
          <Reveal className="band" from="up">
            <div className="st">
              <div className="n">
                1<em>week/cm</em>
              </div>
              <div className="l">Vuistregel voor natuurlijk drogen, voor de eerste 4 cm cementchape</div>
            </div>
            <div className="st">
              <div className="n">
                2<em>weken/cm</em>
              </div>
              <div className="l">Voor elke centimeter daarboven: het vocht moet door de volle dikte</div>
            </div>
            <div className="st">
              <div className="n">
                ± {natuurlijkeWeken(dikste.cm)}
                <em>weken</em>
              </div>
              <div className="l">
                Natuurlijk drogen bij {dikste.cm} cm, in een verwarmd en geventileerd gebouw
              </div>
            </div>
            <div className="st">
              <div className="n">
                {dikste.weken}
                <em>weken</em>
              </div>
              <div className="l">
                Met een droogpakket bij {dikste.cm} cm, met voor- en nameting van het restvocht
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    )}

    {/* ============ DE VUISTREGEL PER CENTIMETER ============ */}
    <section className="sw">
      <div className="wrap wsplit">
        <Reveal className="prose" from="left">
          <h2>De vuistregel: ongeveer een week per centimeter</h2>
          <p>
            Voor cementchape die op eigen kracht droogt, geldt in de bouw een oude vuistregel:{" "}
            <b>ongeveer één week per centimeter voor de eerste 4 cm</b>. Daarboven gaat het aanzienlijk
            trager, reken dan grofweg op <b>twee weken per extra centimeter</b>. Een vloer van{" "}
            {dikste?.cm} cm zit daarmee niet op {dikste?.cm} weken maar op ongeveer{" "}
            {natuurlijkeWeken(dikste?.cm ?? 7)}.
          </p>
          <p>
            Dat komt niet door de hoeveelheid water alleen, maar door de weg die het moet afleggen. Onder
            de chape zitten isolatie en een betonnen draagvloer; daar gaat niets doorheen. Het vocht uit
            de onderste laag heeft dus maar één uitweg: naar boven, door de volle dikte van de vloer. Hoe
            dikker de chape, hoe langer die weg, en hoe trager de laatste centimeters eruit komen.
          </p>
          <p>
            Die richtwaarden gelden bij een verwarmd, geventileerd gebouw rond kamertemperatuur. In een
            koude, dichtgemaakte winterwerf loopt het makkelijk verder uit, want dan kan de lucht boven de
            vloer het vocht niet meer opnemen. Waarom dat zo werkt, staat uitgebreid op{" "}
            <Link to="/hoe-drogen-werkt">hoe drogen werkt</Link>.
          </p>
        </Reveal>

        <Reveal className="snede" from="right" delay={0.1}>
          <div className="sn-h">
            <b>Doorsnede van de vloer</b>
            <span>{dikste?.cm} cm chape</span>
          </div>
          <div className="laag lucht">
            <span>Lucht in de ruimte</span>
            <em>hier haalt de bouwdroger het vocht weg</em>
            {/*
              Vocht in de lucht, niet op de vloer: blauwe wolkjes die opstijgen
              en vervagen. Ze stonden eerst als rode druppels in de ruimte, en
              dat las als lekwater boven de chape in plaats van als damp.
            */}
            <i className="damp" style={{ left: "14%" }} aria-hidden="true" />
            <i className="damp" style={{ left: "33%", animationDelay: "0.9s" }} aria-hidden="true" />
            <i className="damp" style={{ left: "52%", animationDelay: "1.8s" }} aria-hidden="true" />
            <i className="damp" style={{ left: "71%", animationDelay: "2.6s" }} aria-hidden="true" />
            <i className="wind" aria-hidden="true" />
            <i className="wind" style={{ top: "80%", animationDelay: "1.4s" }} aria-hidden="true" />
          </div>
          <div className="laag chape">
            <span>Chape</span>
            {/*
              De maatlat hoort bij het cijfer en staat er dus tegenaan, aan de
              rechterkant van de laag: één streepje per centimeter, uit
              dezelfde dikte als het getal ernaast.
            */}
            <span className="sn-dikte">
              <span className="sn-maat" aria-hidden="true">
                {Array.from({ length: dikste?.cm ?? 0 }, (_, i) => (
                  <i key={i} />
                ))}
              </span>
              <b>{dikste?.cm} cm</b>
            </span>
            {/*
              Het water zit in de chape zelf, en het meeste ervan diep: de
              druppels komen onderaan los en halen de bovenkant niet. Dat is
              waarom elke centimeter erbij zoveel zwaarder weegt.
            */}
            <i className="nat" style={{ left: "18%" }} aria-hidden="true">
              <Druppel size={11} />
            </i>
            <i className="nat" style={{ left: "44%", animationDelay: "1.6s" }} aria-hidden="true">
              <Druppel size={11} />
            </i>
            <i className="nat" style={{ left: "68%", animationDelay: "3.1s" }} aria-hidden="true">
              <Druppel size={10} />
            </i>
            <i className="nat" style={{ left: "86%", animationDelay: "2.3s" }} aria-hidden="true">
              <Druppel size={10} />
            </i>
          </div>
          <div className="laag iso">
            <span>Isolatie</span>
          </div>
          <div className="laag beton">
            <span>Betonnen draagvloer</span>
          </div>
          <p className="sn-f">
            Naar onderen kan het vocht niet weg. Daarom kost elke centimeter boven de vierde ongeveer twee
            weken in plaats van één, en daarom helpt droge, bewegende lucht bóven de vloer zoveel.
          </p>
        </Reveal>
      </div>
    </section>

    {/* ============ DROOGTIJD PER DIKTE ============ */}
    <section className="lvred">
      <div className="wrap wsplit">
        <Reveal className="sec-head" from="left" style={{ marginBottom: 0 }}>
          <span className="kick">Richtwaarden</span>
          <h2 className="sec">Droogtijd van chape per dikte.</h2>
          <p className="lede">
            Links wat de vloer op eigen kracht nodig heeft, rechts de huurtermijn die wij voor die dikte
            in onze pakketten rekenen. Het verschil is geen belofte over úw vloer, maar het verschil
            tussen afwachten en het klimaat sturen.
          </p>
        </Reveal>

        <Reveal className="vglkaart" from="right" delay={0.1}>
          <div className="vgl">
            {CHAPE.map((r) => (
              <Fragment key={r.cm}>
                <div className="vrow rood">
                  <div className="vl">
                    <span>{r.cm} cm, natuurlijk drogen</span>
                    <b>± {weken(natuurlijkeWeken(r.cm))}</b>
                  </div>
                  <div className="vbar">
                    <i style={{ width: breedte(natuurlijkeWeken(r.cm)) }} />
                  </div>
                </div>
                <div className="vrow groen">
                  <div className="vl">
                    <span>{r.cm} cm, met een droogpakket</span>
                    <b>{weken(r.weken)}</b>
                  </div>
                  <div className="vbar">
                    <i style={{ width: breedte(r.weken) }} />
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
          <p className="vglnoot">
            De balken staan op dezelfde schaal, met de langste droging op 100 %. Dezelfde getallen staan
            in de tabel hieronder.
          </p>
        </Reveal>
      </div>

      <div className="wrap">
        <Reveal className="tbl" from="up" delay={0.15}>
          <table>
            <caption>
              Natuurlijk drogen: richtwaarde voor cementchape bij gunstig binnenklimaat. Met bouwdroger:
              de huurtermijn van onze vaste chapepakketten, inclusief voor- en nameting van de
              restvochtigheid.
            </caption>
            <thead>
              <tr>
                <th scope="col">Dikte chape</th>
                <th scope="col">Natuurlijk drogen (richtwaarde)</th>
                <th scope="col">Met bouwdroger (Vernast-pakket)</th>
              </tr>
            </thead>
            <tbody>
              {CHAPE.map((r) => (
                <tr key={r.cm}>
                  <td className="num">{r.cm} cm</td>
                  <td className="num">± {weken(natuurlijkeWeken(r.cm))}</td>
                  <td className="num">{weken(r.weken)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal className="note" from="up" delay={0.2}>
          <b>Welk pakket hoort bij uw vloer?</b> De{" "}
          <Link to="/verhuur/calculator">droogcalculator</Link> vraagt uw oppervlakte, wat u droogt en de
          dikte, en toont het pakket met het aantal toestellen, de huurtermijn en de prijs. Hoe dat bij een
          volledige nieuwbouw verloopt, staat op{" "}
          <Link to="/nieuwbouw-drogen">chape en pleisterwerk drogen in nieuwbouw</Link>.
        </Reveal>
      </div>
    </section>

    {/* ============ EERST UITHARDEN, DAN DROGEN ============ */}
    <section className="sw">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">Twee fases</span>
          <h2 className="sec">Wanneer mag de bouwdroger aan?</h2>
          <p className="lede">
            Een verse chape doorloopt twee fases, en ze vragen het tegenovergestelde van u. Eerst heeft het
            cement het water nog nodig; pas daarna mag het eruit.
          </p>
        </Reveal>

        <div className="fase2">
          <Reveal className="fs f1" from="left" delay={0.05} style={{ "--w": "26%" } as CSSProperties}>
            <span className="fl">Fase 1 · uitharden</span>
            <h3>Laat de chape eerst binden.</h3>
            <p>
              Cement bindt water chemisch tijdens het uitharden. Agressief drogen in deze fase onttrekt
              water dat het mengsel nog nodig heeft: de bovenkant krimpt, de onderkant niet, en dat komt
              eruit als scheuren of opstaande randen. Uw chapeur zegt vanaf welke dag u mag drogen.
            </p>
            <div className="bar">
              <b />
            </div>
            <span className="bl">Dagen tot weken, afhankelijk van het mengsel</span>
          </Reveal>

          <Reveal className="fs" from="right" delay={0.1} style={{ "--w": "100%" } as CSSProperties}>
            <span className="fl">Fase 2 · drogen</span>
            <h3>Daarna moet het water het gebouw uit.</h3>
            <p>
              Nu begint de eigenlijke droging, en die mag dag en nacht doorlopen. Een bouwdroger houdt de
              luchtvochtigheid laag, een ventilator zorgt dat die droge lucht ook echt over de vloer
              strijkt. Elk uur stilstand laat het vocht opnieuw in muren en vloer trekken.
            </p>
            <div className="bar">
              <b />
            </div>
            <span className="bl">De weken uit de tabel hierboven</span>
          </Reveal>
        </div>

        <Reveal className="note" from="up" delay={0.15}>
          <b>Zet de droger niet 's nachts uit.</b> In een paar uur loopt de luchtvochtigheid weer op en
          trekt het vocht uit de lucht terug in de vloer. U verliest dan meer droogtijd dan u aan stroom
          bespaart, wat zo'n toestel per dag kost, rekenen we voor in{" "}
          <Link to="/gids/stroomverbruik-bouwdroger">stroomverbruik van een bouwdroger</Link>.
        </Reveal>
      </div>
    </section>

    {/* ============ WAT DE DROOGTIJD BEPAALT ============ */}
    <section className="lvred">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">In de praktijk</span>
          <h2 className="sec">Wat de droogtijd korter of langer maakt.</h2>
          <p className="lede">
            Vijf dingen bepalen of u in de buurt van de richtwaarde blijft of er weken boven gaat. Vier
            ervan kunt u zelf sturen.
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

    {/* ============ CEMENT- OF ANHYDRIETCHAPE ============ */}
    <section className="sw">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">Twee soorten chape</span>
          <h2 className="sec">Cementchape of anhydrietchape?</h2>
          <p className="lede">
            De droogtijden hierboven gaan over zandcementchape, de gewoonste vloer in België. Ligt er
            anhydriet, dan geldt een ander voorschrift, en dat van de fabrikant gaat boven elke
            vuistregel.
          </p>
        </Reveal>

        <div className="vsg">
          <Reveal className="vs" from="left" delay={0.05}>
            <span className="vt">Zandcementchape</span>
            <h3>De gewoonste vloer, en de vuistregel hierboven.</h3>
            <ul>
              <li>
                <Check />
                <span>
                  <b>Bindt water chemisch.</b> Daarom mag u in de eerste fase niet agressief drogen: het
                  cement heeft dat water nog nodig.
                </span>
              </li>
              <li>
                <Check />
                <span>
                  <b>Ligt doorgaans {dunste?.cm} tot {dikste?.cm} cm dik.</b> Precies de diktes waarvoor
                  onze vaste pakketten hun huurtermijn rekenen.
                </span>
              </li>
              <li>
                <Check />
                <span>
                  <b>Verdraagt meer restvocht</b> dan anhydriet, maar hoeveel precies, bepaalt de
                  afwerking en dus uw vloerlegger.
                </span>
              </li>
              <li>
                <Check />
                <span>
                  <b>Droogt van boven naar onder.</b> De laatste centimeters zijn de traagste; een harde,
                  lichte bovenkant zegt weinig.
                </span>
              </li>
            </ul>
            <span className="vf">De richtwaarden en pakketten op deze pagina gaan hierover.</span>
          </Reveal>

          <Reveal className="vs" from="right" delay={0.1}>
            <span className="vt">Anhydrietchape</span>
            <h3>Vlakker en dunner, maar strenger in wat ze toelaat.</h3>
            <ul>
              <li>
                <Let />
                <span>
                  <b>Op basis van calciumsulfaat</b> en vloeibaar gegoten; ze ligt daardoor vaak dunner en
                  vlakker dan een cementchape.
                </span>
              </li>
              <li>
                <Let />
                <span>
                  <b>Gevoeliger voor vocht.</b> Ze vraagt doorgaans een lagere restvochtigheid voor ze
                  afgewerkt mag worden.
                </span>
              </li>
              <li>
                <Let />
                <span>
                  <b>Vaak schuren.</b> De bovenste laag moet er dikwijls af voor de vloer goed kan drogen
                  en de afwerking kan hechten.
                </span>
              </li>
              <li>
                <Let />
                <span>
                  <b>Volg het voorschrift.</b> Wachttijden en grenswaarden verschillen per product; de
                  plaatser en de fabrikant hebben het laatste woord.
                </span>
              </li>
            </ul>
            <span className="vf">Het droogprincipe blijft gelijk: zonder droge lucht gaat er niets uit.</span>
          </Reveal>
        </div>
      </div>
    </section>

    {/* ============ VLOERVERWARMING OPSTOKEN ============ */}
    <section className="lvred">
      <div className="wrap">
        <Reveal className="sec-head mid" from="up">
          <span className="kick">Vloerverwarming</span>
          <h2 className="sec">Opstoken in zes stappen, in deze volgorde.</h2>
          <p className="lede">
            Ligt er vloerverwarming onder de chape, dan is die een handige hulp bij het drogen, maar
            alleen met beleid. Dit is de vorm die een opstookprotocol aanneemt; de exacte temperaturen en
            dagen krijgt u van uw chapeur of van de fabrikant.
          </p>
        </Reveal>
        <div className="stap8">
          {OPSTOOK.map((tekst, i) => (
            <Reveal className="s8" from="up" delay={i * 0.05} key={i}>
              <i aria-hidden="true" />
              <span>{tekst}</span>
            </Reveal>
          ))}
        </div>
        <Reveal className="note" from="up" delay={0.2}>
          <b>Wie de verwarming meteen hoog zet, riskeert scheuren.</b> De spanning tussen een droge
          onderkant en een nog natte bovenkant moet ergens heen. En warmte alleen droogt niet: het vocht
          komt vrij, maar blijft in het gebouw hangen tot een bouwdroger het eruit haalt.
        </Reveal>
      </div>
    </section>

    {/* ============ RESTVOCHT METEN ============ */}
    <section className="sw">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">Meten, niet gokken</span>
          <h2 className="sec">Restvocht meten vóór parket, tegels of pvc.</h2>
          <p className="lede">
            Een chape die hard en licht van kleur is, kan vanbinnen nog nat zijn. Onder parket, pvc of een
            gietvloer zit dat vocht daarna opgesloten, en dan komt het terug als bolle planken, loslatende
            stroken of vlekken.
          </p>
        </Reveal>

        <div className="vsg">
          <Reveal className="vs groen" from="left" delay={0.05}>
            <span className="vt">Zo weet u het zeker</span>
            <h3>Een meting uit de volle diepte van de vloer.</h3>
            <ul>
              <li>
                <Check />
                <span>
                  <b>CM-meting (carbidemethode).</b> Op een staal uit de volle dikte, niet aan het
                  oppervlak, daar is de vloer het eerst droog.
                </span>
              </li>
              <li>
                <Check />
                <span>
                  <b>Uw vloerlegger bepaalt de grens.</b> Vraag hem vooraf welke waarde hij wil zien; die
                  hangt af van het type chape, de vloerverwarming en de afwerking.
                </span>
              </li>
              <li>
                <Check />
                <span>
                  <b>Voor- en nameting bij ons pakket.</b> De technieker legt de startwaarde en de
                  eindwaarde vast, zodat niemand op gevoel moet beslissen.
                </span>
              </li>
              <li>
                <Check />
                <span>
                  <b>Zwart op wit kan.</b> Op aanvraag krijgt u een meetrapport, handig voor uw
                  vloerlegger, uw architect of een verzekering.
                </span>
              </li>
            </ul>
            <span className="vf">
              Zie ook onze <Link to="/drooggarantie">Drooggarantie</Link>: niet droog op de einddatum,
              dan verlengen wij kosteloos.
            </span>
          </Reveal>

          <Reveal className="vs rood" from="right" delay={0.1}>
            <span className="vt">Zo gaat het mis</span>
            <h3>Drie beslissingen die later geld kosten.</h3>
            <ul>
              <li>
                <Let />
                <span>
                  <b>Op het oog beslissen.</b> Licht van kleur en hard aanvoelen betekent dat het
                  oppervlak droog is, niets meer.
                </span>
              </li>
              <li>
                <Let />
                <span>
                  <b>De kalender volgen.</b> "Zes weken is genoeg" geldt niet in een koude werf waar de
                  luchtvochtigheid nooit onder de streefwaarde kwam.
                </span>
              </li>
              <li>
                <Let />
                <span>
                  <b>De vloerlegger laten wachten zonder te meten.</b> Komt hij toch, en legt hij op een
                  natte vloer, dan ligt het probleem bij u, en de vloer moet eruit.
                </span>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>

    {/* ============ VEELGESTELDE VRAGEN ============ */}
    <GidsFaqSectie faq={FAQ} titel="Alles over de droogtijd van chape" variant="rood" />

    {/* ============ VERDER LEZEN ============ */}
    <section className="sw">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">Verder lezen</span>
          <h2 className="sec">Droogt u meer dan alleen de vloer?</h2>
          <p className="lede">
            Pleisterwerk heeft zijn eigen termijnen en zijn eigen valkuilen, en in een nieuwbouw drogen
            vloer en muren meestal samen. Twee pagina's die daarop verdergaan.
          </p>
        </Reveal>

        <div className="door">
          <Reveal as={Link} className="dk" from="left" delay={0.05} to="/gids/hoe-lang-moet-pleisterwerk-drogen">
            <span className="dki" aria-hidden="true">
              <BrushIcon size={20} />
            </span>
            <h3>Hoe lang moet pleisterwerk drogen?</h3>
            <p>
              De termijnen per laagdikte, het verschil tussen gips- en cementpleister, en waarom het vocht
              in een dichtgemaakt huis blijft hangen tot het op de ramen staat.
            </p>
            <span className="dkm">Lees de gids over pleisterwerk →</span>
          </Reveal>

          <Reveal as={Link} className="dk" from="right" delay={0.1} to="/nieuwbouw-drogen">
            <span className="dki" aria-hidden="true">
              <LayersIcon size={20} />
            </span>
            <h3>Chape en pleisterwerk samen drogen</h3>
            <p>
              In een nieuwbouw staan vloer en muren tegelijk nat. Dat kan in één pakket, met één
              huurtermijn en één meting voor en na.
            </p>
            <span className="dkm">Bekijk drogen in nieuwbouw →</span>
          </Reveal>
        </div>

        <Reveal className="lees-verder" from="up" delay={0.15}>
          <Link to="/hoe-drogen-werkt">Hoe drogen werkt</Link>
          <Link to="/gids/condensdroger-of-adsorptiedroger">Condensdroger of adsorptiedroger</Link>
          <Link to="/gids/stroomverbruik-bouwdroger">Stroomverbruik van een bouwdroger</Link>
          <Link to="/realisaties/mnr-l-hasselt">Pleister- en chapewerken versneld gedroogd</Link>
          <Link to="/prijzen">Prijzen en tarieven</Link>
        </Reveal>
      </div>

      <div className="wrap">
        <Reveal className="manband" from="up">
          <div className="mb-t">
            <span className="mbk">Liever niet op een vuistregel bouwen?</span>
            <h3>Wij meten uw vloer voor en na, en garanderen de einddatum.</h3>
            <p>
              Onze techniekers plaatsen de toestellen, stellen de streefwaarde in en leggen het restvocht
              vast bij de start en bij de oplevering. Is de vloer dan niet droog, dan verlengen wij
              kosteloos, zie <Link to="/drooggarantie">de Drooggarantie</Link>.
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
      kicker="Nog een vraag over uw vloer?"
      titel="Onze droogspecialisten kijken met u naar de planning."
      lede="Weet u niet of uw chape op tijd droog is voor de vloerlegger, of twijfelt u over de dikte en het aantal toestellen? Stel uw vraag, u krijgt binnen één werkdag antwoord van een specialist."
      onderwerpen={[
        "Vraag over de droogtijd van mijn chape",
        "Advies over het aantal toestellen",
        "Vraag over restvocht meten",
        "Iets anders",
      ]}
      placeholder="Bv. 120 m² chape van 6 cm, gelegd op 20 november, vloerlegger komt half januari, haalt dat?"
    />
  </GidsShell>
);

export default ChapeDroogtijdPage;

import { Fragment } from "react";
import { Link } from "react-router-dom";
import GidsShell, { GidsFaqSectie, type GidsFaq } from "@/components/gids/GidsShell";
import ContactBlok from "@/components/content/ContactBlok";
import Reveal from "@/components/Reveal";
import { SEO } from "@/data/seo";
import {
  droogtermijnen,
  natuurlijkeChapeWeken,
  natuurlijkePleisterWeken,
  termijnZonderDikte,
} from "@/lib/droogtijden";
import {
  ClockIcon,
  GaugeIcon,
  LayersIcon,
  ThermoIcon,
  WindIcon,
  WarnIcon,
  DrogerIcon,
} from "@/components/content/icons";
import { BrushIcon, CellarIcon, HouseSmallIcon, MoldIcon } from "@/components/home-v3/icons";

const PATH = "/gids/natuurlijk-drogen-of-bouwdroger";

/**
 * De vergelijkende gids: een nieuwbouw op eigen kracht laten drogen, of het
 * binnenklimaat sturen met een bouwdroger.
 *
 * Waarom een eigen pagina naast wat er al stond. /nieuwbouw-drogen verkoopt de
 * dienst, de twee droogtijdgidsen rekenen per materiaal en /hoe-drogen-werkt
 * legt het toestel uit. Niemand beantwoordde de vraag die ervoor komt: moet ik
 * hier eigenlijk iets voor huren, of droogt dat huis vanzelf? Dat is een
 * informatieve zoekvraag ("nieuwbouw laten drogen", "natuurlijk drogen
 * nieuwbouw", "hoe lang duurt bouwvocht"), en ze werd op deze site door geen
 * enkele pagina gedekt.
 *
 * De pagina moet die vraag eerlijk beantwoorden, ook waar het antwoord "dan
 * hoeft u niets te huren" is. Vandaar de sectie "Wanneer natuurlijk drogen wel
 * volstaat": een gids die alleen maar naar de calculator duwt, is geen gids, en
 * een lezer die zich bekocht voelt komt niet terug.
 *
 * Alle weken komen uit `lib/droogtijden.ts`, dezelfde bron als de twee andere
 * droogtijdgidsen en de tabel op /nieuwbouw-drogen. Een termijn die in het
 * portaal verandert, verandert hier mee; niets staat overgetypt.
 */

const CHAPE = droogtermijnen("chape").map((r) => ({ cm: r.dikte, weken: r.max }));
const PLEISTER = droogtermijnen("pleister").map((r) => ({ cm: r.dikte, weken: r.max }));
const BEIDE = termijnZonderDikte("beide");

const dikste = CHAPE[CHAPE.length - 1];
/* 6 cm is de chape die we het vaakst op een werf zien liggen; zij draagt de
   cijfers in de hero en in de statistiekbalk. Valt die dikte ooit uit de
   catalogus, dan neemt de dikste zijn plaats in. */
const GANGBAAR = CHAPE.find((r) => r.cm === 6) ?? dikste;

const weken = (n: number) => `${n} ${n === 1 ? "week" : "weken"}`;

/*
  De langste staaf in de vergelijking: natuurlijk drogen bij de dikste chape uit
  de catalogus. Alles schaalt daartegen, zodat de lezer de verhouding ziet en
  niet alleen de getallen leest. Dezelfde maatstaf als in de chapegids.
*/
const SCHAAL = dikste ? natuurlijkeChapeWeken(dikste.cm) : 10;
const breedte = (n: number) => `${Math.round((n / SCHAAL) * 100)}%`;

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const Kruis = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

/* Waar het bouwvocht zit. Vijf kaarten, want `.cyc` staat op vijf kolommen. */
const LAGEN = [
  {
    icoon: <LayersIcon />,
    titel: "De chape",
    tekst: "Het grootste reservoir, en het traagste. Het water onderin moet door de volle dikte naar boven, want naar beneden sluit de isolatie alles af.",
  },
  {
    icoon: <BrushIcon size={20} />,
    titel: "Het pleisterwerk",
    tekst: "Dun, maar over elke muur en elk plafond van het huis. Het geeft zijn water snel af, en dat komt allemaal in dezelfde binnenlucht terecht.",
  },
  {
    icoon: <CellarIcon size={20} />,
    titel: "Metselwerk en beton",
    tekst: "De ruwbouw heeft maanden in weer en wind gestaan. Snelbouwsteen en beton nemen water op en geven het daarna traag weer af aan de ruimte.",
  },
  {
    icoon: <HouseSmallIcon size={20} />,
    titel: "De afwerking",
    tekst: "Lijmmortel, plamuur, gietvloer en verf brengen opnieuw water binnen, net wanneer het gebouw dicht is en er niets meer uit kan.",
  },
  {
    icoon: <GaugeIcon />,
    titel: "En dan de lucht",
    tekst: "Alles wat die lagen afgeven, hangt eerst in de binnenlucht. Raakt die lucht het gebouw niet uit, dan trekt het vocht gewoon ergens anders weer in.",
  },
];

/* De vier voorwaarden van een natuurlijke droging, plus de vijfde die u niet
   in de hand heeft. In deze volgorde, want zo bouwen ze op elkaar. */
const VOORWAARDEN = [
  {
    icoon: <ThermoIcon />,
    titel: "Warmte",
    tekst: "Warme lucht draagt veel meer water dan koude. In een onverwarmde ruwbouw van vijf graden staat een droging zo goed als stil, hoe lang u ook wacht.",
  },
  {
    icoon: <GaugeIcon />,
    titel: "Droge lucht",
    tekst: "Lucht die al vol vocht zit, neemt niets meer op. Zolang de binnenlucht verzadigd blijft, kan de chape haar water niet kwijt.",
  },
  {
    icoon: <WindIcon />,
    titel: "Beweging",
    tekst: "Vlak boven een vloer en tegen een muur blijft een laag verzadigde lucht hangen. Zonder beweging isoleert die laag het oppervlak van de rest van de kamer.",
  },
  {
    icoon: <ClockIcon />,
    titel: "Afvoer",
    tekst: "Het vocht moet het gebouw uit. Blijft het binnen, dan slaat het neer op het koudste oppervlak dat het vindt: het glas, de dorpel, de hoek achter de kast.",
  },
  {
    icoon: <WarnIcon />,
    titel: "En tijd",
    tekst: "De vier hierboven bepalen hoeveel tijd u nodig heeft. Werkt er een mee en de rest niet, dan is het de traagste die het tempo zet.",
  },
];

/* Wat er misgaat zodra er op een nat huis verder gebouwd wordt. */
const RISICOS = [
  {
    icoon: <LayersIcon />,
    titel: "De vloer komt bol te staan",
    tekst: "Parket, pvc en een gietvloer sluiten de chape af. Zit er dan nog vocht onder, dan kan het nergens heen en komt het terug als bolle planken of loslatende stroken.",
  },
  {
    icoon: <BrushIcon size={20} />,
    titel: "De verf hecht niet",
    tekst: "Op een pleisterlaag die vanbinnen nog nat is, blijft verf niet zitten. Het resultaat zijn doffe vlekken, blazen of een laag die na een jaar loskomt.",
  },
  {
    icoon: <MoldIcon size={20} />,
    titel: "Schimmel in de koude hoeken",
    tekst: "Vocht slaat neer waar het koudst is: achter kasten, in de hoek van een buitenmuur, op de dorpels. Daar begint de zwarte aanslag, en die komt niet vanzelf weg.",
  },
  {
    icoon: <DrogerIcon />,
    titel: "Een huis dat blijft zweten",
    tekst: "Beslagen ramen, een muffe geur en wasgoed dat niet droogt. Wie in een nat huis gaat wonen, verwarmt maandenlang water in plaats van zijn woning.",
  },
  {
    icoon: <ClockIcon />,
    titel: "Uw planning schuift op",
    tekst: "De vloerlegger en de schilder hebben een agenda. Wie zijn plaats laat schieten omdat het nog niet droog is, staat achteraan, en dat kost vaak meer weken dan de droging zelf.",
  },
];

const FAQ: GidsFaq[] = [
  {
    question: "Hoe lang duurt het om een nieuwbouw natuurlijk te laten drogen?",
    answer: `Daar bestaat geen vaste termijn voor, en dat is precies het probleem. Voor de chape, meestal de traagste laag, geldt in de bouwpraktijk ongeveer een week per centimeter voor de eerste vier centimeter en daarna ongeveer twee weken per extra centimeter: bij ${GANGBAAR?.cm ?? 6} cm komt dat neer op zo'n ${natuurlijkeChapeWeken(GANGBAAR?.cm ?? 6)} weken. Die richtwaarde geldt alleen in een verwarmde en geventileerde ruimte rond 20 graden. In een dichtgemaakte, onverwarmde werf in november loopt ze niet langzamer, ze loopt dan bijna niet. Daarom spreekt niemand zich uit over een einddatum zonder te meten.`,
  },
  {
    question: "Kan ik niet gewoon de ramen openzetten en verwarmen?",
    answer: "Dat is de natuurlijke methode, en ze werkt echt, op voorwaarde dat u ze allebei tegelijk doet. Alleen ventileren koelt het gebouw af, en koude lucht draagt weinig vocht weg. Alleen verwarmen duwt het vocht uit de materialen maar laat het in huis, waar het op het eerste koude oppervlak weer neerslaat. De combinatie werkt het best in de winter: buitenlucht van 5 graden met 90 procent vochtigheid wordt, opgewarmd tot 20 graden binnen, lucht van rond de 35 procent, en die neemt gretig water op. Alleen betaalt u dan wel de warmte die met elke ventilatieronde naar buiten verdwijnt.",
  },
  {
    question: "Moet ik ramen openzetten als er een bouwdroger draait?",
    answer: "Nee, net niet. Een condensbouwdroger werkt in een gesloten ruimte: hij haalt de lucht binnen, koelt ze af tot het water eruit condenseert, voert dat water af en blaast de lucht droog en licht opgewarmd weer in de kamer. Staan de ramen open, dan voert u voortdurend nieuwe vochtige lucht aan en droogt het toestel in feite de straat. Houd deuren en ramen dus dicht, en laat het toestel dag en nacht doorlopen.",
  },
  {
    question: "Wat is het verschil met gewoon wachten, in weken?",
    answer: `Voor een chape van ${GANGBAAR?.cm ?? 6} cm staat de richtwaarde voor natuurlijk drogen rond ${natuurlijkeChapeWeken(GANGBAAR?.cm ?? 6)} weken bij gunstig weer, tegenover ${GANGBAAR ? weken(GANGBAAR.weken) : "enkele weken"} met een droogpakket. Bij pleisterwerk is het verschil kleiner in weken maar even onvoorspelbaar: een laag van ${PLEISTER[0]?.cm ?? 1} cm is in een verluchte, verwarmde woning in ${weken(natuurlijkePleisterWeken(PLEISTER[0]?.cm ?? 1).min)} droog en in een dichte, koude werf na een maand nog niet. Het echte verschil is dus niet alleen de duur, maar dat er bij een droogpakket een datum op staat.`,
  },
  {
    question: "Mag ik verhuizen in een huis dat nog niet droog is?",
    answer: "Het kan, maar u neemt dan het vocht mee in uw leven: beslagen ramen, een muffe geur, kasten tegen buitenmuren waar schimmel achter komt en een verwarmingsfactuur die vooral water opwarmt. Vervelender is wat er onder uw vloer en achter uw verf gebeurt, want dat ziet u pas een seizoen later. Wie toch verhuist, blijft best stevig verwarmen en ventileren, en legt gevoelige vloerafwerking zo laat mogelijk.",
  },
  {
    question: "Werkt een bouwdroger ook op een koude werf in de winter?",
    answer: "Een condensdroger haalt zijn beste rendement ruwweg tussen 15 en 25 graden; daaronder valt zijn opbrengst terug omdat er minder water in de lucht zit om uit te condenseren. Op een koude werf zetten we er daarom een elektrische bouwkachel met thermostaat bij, of we kiezen een adsorptiedroger, die met een droogmiddel werkt en ook bij lage temperatuur vocht blijft wegnemen. Welk toestel wanneer past, staat in onze gids over condens- en adsorptiedrogers.",
  },
  {
    question: "Hoe weet ik of het huis echt droog is?",
    answer: "Door te meten, niet door te kijken. Een chape die hard en licht van kleur is, kan vanbinnen nog nat zijn, en een muur die droog aanvoelt is dat aan de buitenste millimeters. Wij leggen de restvochtigheid vast bij de start en opnieuw bij de oplevering; die twee waarden zijn waar een einddatum op steunt. Heeft uw vloerlegger of uw bouwdossier een ondertekend verslag nodig, dan kan daar een officieel vochtrapport bij.",
  },
  {
    question: "Wat kost drogen met een bouwdroger?",
    answer: "Dat hangt af van het volume van uw woning en van wat er moet drogen: die twee bepalen hoeveel toestellen er nodig zijn en hoe lang ze blijven staan. De droogcalculator vraagt uw oppervlakte, de chapedikte en wat u droogt, en toont meteen het pakket met de prijs, inclusief levering, installatie en de metingen. Alle losse dag- en weektarieven staan op onze prijzenpagina.",
  },
];

const NatuurlijkDrogenPage = () => (
  <GidsShell
    seo={SEO.gidsNatuurlijkDrogen}
    path={PATH}
    crumbs={[
      { name: "Home", path: "/" },
      { name: "Gidsen", path: "/gids" },
      { name: "Natuurlijk drogen of met een bouwdroger?", path: PATH },
    ]}
    kick="Gids · nieuwbouw"
    h1="Nieuwbouw drogen: natuurlijk of met een bouwdroger?"
    intro={
      <p>
        In elke nieuwbouw zit bouwvocht: aanmaakwater uit de chape, de pleisterlaag, het metselwerk
        en het beton. Dat water moet het gebouw uit voordat de vloerlegger, de schilder en uw
        verhuiswagen komen. Er zijn twee manieren om dat te doen. U laat het huis op eigen kracht
        drogen, of u stuurt het binnenklimaat met een bouwdroger. Hieronder wat die eerste manier
        echt van u vraagt, waarom het seizoen erover beslist, en wat het verschil is in weken.
      </p>
    }
    heroImg={{
      src: "/vernast/case-nieuwbouw.webp",
      alt: "Bouwdroger aan het werk in een nieuwbouwwoning waar chape en pleisterwerk nog nat zijn",
      rond: true,
    }}
    heroBadge={
      <div className="fbadge" style={{ bottom: "40px", left: "-4%", zIndex: 2 }}>
        <span className="ic">
          <ClockIcon size={16} />
        </span>
        <div>
          {GANGBAAR ? weken(GANGBAAR.weken) : "Enkele weken"}
          <small>
            in plaats van ± {natuurlijkeChapeWeken(GANGBAAR?.cm ?? 6)} weken bij {GANGBAAR?.cm ?? 6} cm chape
          </small>
        </div>
      </div>
    }
    articlePublished="2026-11-13"
    faq={FAQ}
    faqZelfPlaatsen
  >
    {/* ============ DE VIER GETALLEN ============ */}
    <div className="statrule">
      <div className="wrap">
        <Reveal className="band" from="up">
          <div className="st">
            <div className="n">
              ±{natuurlijkeChapeWeken(GANGBAAR?.cm ?? 6)}
              <em>weken</em>
            </div>
            <div className="l">
              Natuurlijk drogen van {GANGBAAR?.cm ?? 6} cm chape, en dan nog alleen bij gunstig
              binnenklimaat
            </div>
          </div>
          <div className="st">
            <div className="n">
              {GANGBAAR?.weken}
              <em>weken</em>
            </div>
            <div className="l">Dezelfde vloer met een droogpakket, met een einddatum erop</div>
          </div>
          <div className="st">
            <div className="n">
              24<em>u</em>
            </div>
            <div className="l">
              Per dag actief. Een natuurlijke droging valt elke nacht stil wanneer het afkoelt
            </div>
          </div>
          <div className="st">
            <div className="n">
              2<em>metingen</em>
            </div>
            <div className="l">
              Voor en na. Dat is wat het verschil maakt tussen een datum en een inschatting
            </div>
          </div>
        </Reveal>
      </div>
    </div>

    {/* ============ WAAR HET WATER ZIT ============ */}
    <section className="sw">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">Het vertrekpunt</span>
          <h2 className="sec">Een nieuw huis is een nat huis.</h2>
          <p className="lede">
            Het gaat niet om een plas op de vloer. Een chape van 6 cm over 120 m² is ruim zeven
            kubieke meter mortel, en het aanmaakwater dat het cement niet chemisch bindt, moet er via
            het oppervlak weer uit. Daar komen de muren, de ruwbouw en de afwerking nog bij. Al dat
            water verlaat het gebouw langs één weg: de binnenlucht.
          </p>
        </Reveal>
        <div className="cyc">
          {LAGEN.map((l, i) => (
            <Reveal className="cy" from="up" delay={i * 0.06} key={l.titel}>
              <i aria-hidden="true">0{i + 1}</i>
              <span className="ci2">{l.icoon}</span>
              <h3>{l.titel}</h3>
              <p>{l.tekst}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="note" from="up" delay={0.15}>
          <b>Daarom gaat drogen altijd over lucht.</b> Een bouwdroger haalt geen water uit uw vloer,
          hij haalt het uit de lucht erboven. Pas doordat die lucht droger wordt, kan de vloer weer
          afgeven. Hoe dat precies werkt, staat in{" "}
          <Link to="/hoe-drogen-werkt">hoe drogen werkt</Link>.
        </Reveal>
      </div>
    </section>

    {/* ============ WAT NATUURLIJK DROGEN VRAAGT ============ */}
    <section className="lvred">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">Natuurlijk drogen</span>
          <h2 className="sec">Vier dingen moeten kloppen. Tegelijk.</h2>
          <p className="lede">
            Natuurlijk drogen is geen afwachten, het is een methode: verwarmen en ventileren, elke
            dag opnieuw. Ze werkt alleen wanneer deze voorwaarden samen vallen. Ontbreekt er één,
            dan bepaalt die ene het tempo van het geheel.
          </p>
        </Reveal>
        <div className="cyc">
          {VOORWAARDEN.map((v, i) => (
            <Reveal className="cy" from="up" delay={i * 0.06} key={v.titel}>
              <i aria-hidden="true">0{i + 1}</i>
              <span className="ci2">{v.icoon}</span>
              <h3>{v.titel}</h3>
              <p>{v.tekst}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="note" from="up" delay={0.2}>
          <b>Verwarmen en ventileren horen bij elkaar.</b> Alleen ventileren koelt de woning af, en
          koude lucht neemt weinig vocht mee naar buiten. Alleen verwarmen drijft het vocht uit de
          materialen maar houdt het binnen, waar het op het koudste oppervlak weer neerslaat. Wie
          natuurlijk droogt, doet dus allebei, en betaalt de warmte die bij elke ventilatieronde
          mee naar buiten gaat.
        </Reveal>
      </div>
    </section>

    {/* ============ HET SEIZOEN BESLIST ============ */}
    <section className="sw">
      <div className="wrap wsplit">
        <Reveal className="prose" from="left">
          <h2>Waarom de kalender beslist en niet u</h2>
          <p>
            Lucht kan maar een bepaalde hoeveelheid water dragen, en hoe warmer ze is, hoe meer dat
            er zijn. Dat ene gegeven verklaart waarom dezelfde woning in januari sneller droogt dan
            in juli, zolang u maar stookt.
          </p>
          <p>
            <b>In de winter is buitenlucht kurkdroog zodra ze opwarmt.</b> Lucht van 5 graden met 90
            procent relatieve vochtigheid draagt weinig water. Laat u die binnen en warmt ze op tot
            20 graden, dan zakt haar relatieve vochtigheid naar ongeveer 35 procent. Zulke lucht
            neemt gretig vocht op, en met de volgende ventilatieronde gaat dat vocht mee naar
            buiten.
          </p>
          <p>
            <b>In de zomer werkt datzelfde mechanisme tegen u.</b> Buitenlucht van 20 graden met 80
            procent vochtigheid zit al goed vol. Binnengelaten in een woning van 22 graden komt ze
            uit rond 70 procent, en dan is er nog maar weinig ruimte over om vocht op te nemen.
            Ventileren voelt dan goed aan maar levert nauwelijks droging op.
          </p>
          <p>
            <b>En in een dichtgemaakte, onverwarmde ruwbouw gebeurt er niets.</b> Binnen en buiten
            zijn even koud, de lucht staat stil en is verzadigd. De woning droogt niet traag, ze
            droogt gewoon niet. Dat is de toestand waarin de meeste werven in november staan.
          </p>
        </Reveal>

        <Reveal className="tbl" from="right" delay={0.1}>
          <table>
            <caption>
              Hoe dezelfde handeling, ventileren, per seizoen anders uitpakt. De percentages zijn
              rekenvoorbeelden bij een binnentemperatuur van 20 tot 22 graden, geen meetwaarden van
              uw woning.
            </caption>
            <thead>
              <tr>
                <th scope="col">Situatie</th>
                <th scope="col">Binnen na opwarmen</th>
                <th scope="col">Wat ventileren oplevert</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Winter, verwarmd</td>
                <td className="num">± 35 %</td>
                <td>Sterke droging, zolang u blijft stoken</td>
              </tr>
              <tr>
                <td>Lente of herfst</td>
                <td className="num">45 tot 65 %</td>
                <td>Droogt met horten en stoten, een natte week zet terug</td>
              </tr>
              <tr>
                <td>Zomer, warm en vochtig</td>
                <td className="num">± 70 %</td>
                <td>Weinig tot niets, soms voert u vocht aan</td>
              </tr>
              <tr>
                <td>Gesloten ruwbouw, geen verwarming</td>
                <td className="num">80 % en meer</td>
                <td>De droging staat zo goed als stil</td>
              </tr>
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>

    {/* ============ HET VERSCHIL IN WEKEN ============ */}
    <section className="lvred">
      <div className="wrap wsplit">
        <Reveal className="sec-head" from="left" style={{ marginBottom: 0 }}>
          <span className="kick">Het verschil</span>
          <h2 className="sec">Dezelfde vloer, twee tijdlijnen.</h2>
          <p className="lede">
            Links wat de chape op eigen kracht nodig heeft bij gunstig binnenklimaat, rechts de
            huurtermijn die wij voor die dikte in onze pakketten rekenen. Dat verschil is geen
            belofte over úw vloer, het is het verschil tussen afwachten en sturen.
          </p>
        </Reveal>

        <Reveal className="vglkaart" from="right" delay={0.1}>
          <div className="vgl">
            {CHAPE.map((r) => (
              <Fragment key={r.cm}>
                <div className="vrow rood">
                  <div className="vl">
                    <span>{r.cm} cm, natuurlijk drogen</span>
                    <b>± {weken(natuurlijkeChapeWeken(r.cm))}</b>
                  </div>
                  <div className="vbar">
                    <i style={{ width: breedte(natuurlijkeChapeWeken(r.cm)) }} />
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
            De balken staan op dezelfde schaal, met de traagste droging op 100 procent. De
            richtwaarde volgt de gangbare vuistregel voor zandcementchape in een verluchte ruimte
            rond 20 graden.
          </p>
        </Reveal>
      </div>

      <div className="wrap">
        <Reveal className="tbl" from="up" delay={0.15}>
          <table>
            <caption>
              Natuurlijk drogen: richtwaarden uit de bouwpraktijk bij gunstig binnenklimaat. Met
              bouwdroger: de huurtermijn van onze vaste pakketten, inclusief voor- en nameting van de
              restvochtigheid. Geen van beide kolommen vervangt een meting.
            </caption>
            <thead>
              <tr>
                <th scope="col">Wat er droogt</th>
                <th scope="col">Natuurlijk (richtwaarde)</th>
                <th scope="col">Met een droogpakket</th>
              </tr>
            </thead>
            <tbody>
              {CHAPE.map((r) => (
                <tr key={`chape-${r.cm}`}>
                  <td>Chape, {r.cm} cm</td>
                  <td className="num">± {weken(natuurlijkeChapeWeken(r.cm))}</td>
                  <td className="num">{weken(r.weken)}</td>
                </tr>
              ))}
              {PLEISTER.map((r) => {
                const nat = natuurlijkePleisterWeken(r.cm);
                return (
                  <tr key={`pleister-${r.cm}`}>
                    <td>Pleisterwerk, {r.cm} cm</td>
                    <td className="num">
                      {nat.min} tot {weken(nat.max)}
                    </td>
                    <td className="num">{weken(r.weken)}</td>
                  </tr>
                );
              })}
              {BEIDE && (
                <tr>
                  <td>Chape en pleisterwerk samen</td>
                  <td className="num">De traagste van de twee</td>
                  <td className="num">{weken(BEIDE.max)}</td>
                </tr>
              )}
            </tbody>
          </table>
        </Reveal>

        <Reveal className="note" from="up" delay={0.2}>
          <b>Let op wat er in de linkerkolom staat.</b> Dat zijn richtwaarden bij een verwarmd en
          geventileerd gebouw, dus bij de beste omstandigheden die natuurlijk drogen kan krijgen. In
          een koude, dichtgemaakte werf hoort daar geen getal bij, en dat is geen slag om de arm
          maar de kern van de zaak. En kijk naar de dunne pleisterlaag: daar is het verschil klein
          tot onbestaand. Op zo'n werf koopt u met een pakket geen weken maar zekerheid, en soms
          heeft u het gewoon niet nodig. Per materiaal gaan{" "}
          <Link to="/gids/hoe-lang-moet-chape-drogen">de gids over chape</Link> en{" "}
          <Link to="/gids/hoe-lang-moet-pleisterwerk-drogen">die over pleisterwerk</Link> er dieper
          op in.
        </Reveal>
      </div>
    </section>

    {/* ============ WAT EEN BOUWDROGER ANDERS DOET ============ */}
    <section className="sw">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">Naast elkaar</span>
          <h2 className="sec">Wat een bouwdroger anders doet dan wachten.</h2>
          <p className="lede">
            Het verschil zit niet alleen in snelheid. Een natuurlijke droging hangt af van het weer,
            van uw stookgedrag en van wie er die dag de ramen openzet. Een droogpakket maakt er een
            gestuurd en meetbaar proces van.
          </p>
        </Reveal>

        <div className="vsg">
          <Reveal className="vs rood" from="left" delay={0.05}>
            <span className="vt">Natuurlijk drogen</span>
            <h3>Gratis, maar u heeft het niet in de hand.</h3>
            <ul>
              <li>
                <Kruis />
                <span>
                  <b>Het weer bepaalt het tempo.</b> Een natte week in het najaar zet de droging
                  terug, en niemand kan u zeggen hoeveel.
                </span>
              </li>
              <li>
                <Kruis />
                <span>
                  <b>'s Nachts valt ze stil.</b> Koelt het gebouw af, dan loopt de luchtvochtigheid
                  weer op en trekt het vocht deels terug in vloer en muren.
                </span>
              </li>
              <li>
                <Kruis />
                <span>
                  <b>De warmte gaat mee naar buiten.</b> Elke ventilatieronde voert vocht af en uw
                  gestookte warmte erbij.
                </span>
              </li>
              <li>
                <Kruis />
                <span>
                  <b>Er wordt niets gemeten.</b> Zonder meting is er geen einddatum, alleen een
                  gevoel dat het wel droog zal zijn.
                </span>
              </li>
            </ul>
            <span className="vf">Kost u geen huur, wel weken en zekerheid.</span>
          </Reveal>

          <Reveal className="vs groen" from="right" delay={0.1}>
            <span className="vt">Met een droogpakket</span>
            <h3>Een gestuurd klimaat, met een datum eraan.</h3>
            <ul>
              <li>
                <Check />
                <span>
                  <b>Gesloten ruimte, geen warmteverlies.</b> Ramen en deuren blijven dicht; het
                  toestel haalt het water uit de lucht en geeft die lucht droog en licht opgewarmd
                  terug.
                </span>
              </li>
              <li>
                <Check />
                <span>
                  <b>Dag en nacht, op een streefwaarde.</b> De hygrostaat houdt de luchtvochtigheid
                  laag en schakelt zelf terug zodra ze gehaald is.
                </span>
              </li>
              <li>
                <Check />
                <span>
                  <b>Een ventilator over het oppervlak.</b> Die veegt de verzadigde laag boven de
                  chape weg, zodat er telkens droge lucht bij de vloer komt.
                </span>
              </li>
              <li>
                <Check />
                <span>
                  <b>Meting voor en na.</b> Daarop steunt de einddatum, en is de vloer dan niet
                  droog, dan verlengen wij kosteloos. Zie{" "}
                  <Link to="/drooggarantie">de Drooggarantie</Link>.
                </span>
              </li>
            </ul>
            <span className="vf">
              Kost u huur, levert u een datum op die u aan uw aannemer kunt doorgeven.
            </span>
          </Reveal>
        </div>
      </div>
    </section>

    {/* ============ WAT ER MISGAAT ALS U WACHT ============ */}
    <section className="lvred">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">De rekening achteraf</span>
          <h2 className="sec">Wat er misgaat op een huis dat nog nat is.</h2>
          <p className="lede">
            Drogen is geen kwestie van geduld alleen. Zodra er op bouwvocht verder gewerkt wordt,
            verplaatst het probleem zich naar lagen waar u het pas een seizoen later terugziet.
          </p>
        </Reveal>
        <div className="cyc">
          {RISICOS.map((r, i) => (
            <Reveal className="cy" from="up" delay={i * 0.06} key={r.titel}>
              <i aria-hidden="true">0{i + 1}</i>
              <span className="ci2">{r.icoon}</span>
              <h3>{r.titel}</h3>
              <p>{r.tekst}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="note" from="up" delay={0.2}>
          <b>Dit is ook het antwoord op "waarom zou ik betalen om te drogen".</b> Een herstelling
          van een bolstaande vloer of een schilderbeurt die opnieuw moet, kost een veelvoud van een
          droogpakket. Welke schade in de praktijk het vaakst terugkomt, staat op{" "}
          <Link to="/waarom-bouwdroging">waarom bouwdroging</Link>.
        </Reveal>
      </div>
    </section>

    {/* ============ WANNEER NATUURLIJK VOLSTAAT ============ */}
    <section className="sw">
      <div className="wrap wsplit">
        <Reveal className="prose" from="left">
          <h2>Wanneer natuurlijk drogen wel volstaat</h2>
          <p>
            Niet elke werf heeft een bouwdroger nodig, en wij zeggen dat liever hier dan nadat u
            betaald heeft. Natuurlijk drogen is een goede keuze wanneer deze dingen samenvallen.
          </p>
          <ul>
            <li>
              <b>U heeft maanden speling.</b> Er staat geen vloerlegger of schilder te wachten, en
              een uitloop van enkele weken verandert niets aan uw planning.
            </li>
            <li>
              <b>Het is zomer en u kunt alles openzetten.</b> Een huis dat dagenlang in de tocht
              staat bij warm, droog weer verliest veel vocht vanzelf.
            </li>
            <li>
              <b>Het gaat alleen om pleisterwerk in een dunne laag.</b> Dat is de snelste van de
              lagen; zonder dikke chape eronder droogt het een stuk sneller weg.
            </li>
            <li>
              <b>De woning is verwarmd en al bewoond.</b> Dan droogt ze elke dag een beetje mee,
              zolang u blijft ventileren.
            </li>
          </ul>
          <p>
            Valt één van die punten weg, dan koopt u met een droogpakket geen snelheid maar
            zekerheid: een termijn die u kunt doorgeven en een meting die het bevestigt. Wilt u
            alleen de toestellen en doet u de opstelling zelf, dan kan dat ook, aan afhaaltarief in
            ons punt langs de A12.
          </p>
        </Reveal>

        {/*
          Hier stonden twee balken van elk 100 %. Een staafdiagram waarin beide
          staven even lang zijn draagt geen informatie, en groen naast rood las
          als goed naast fout terwijl het om twee geldige keuzes gaat. Een
          keuzewijzer zegt wat de lezer hier zoekt: welke situatie welke aanpak
          krijgt.
        */}
        <Reveal className="tbl" from="right" delay={0.1}>
          <table>
            <caption>
              Wat wij zelf zouden doen, per situatie. Twijfelt u, dan is de vraag niet hoe snel het
              moet maar of iemand een datum van u nodig heeft.
            </caption>
            <thead>
              <tr>
                <th scope="col">Uw situatie</th>
                <th scope="col">De aanpak die past</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Er staat geen datum op, zomer</td>
                <td>Natuurlijk drogen: verwarmen en ventileren</td>
              </tr>
              <tr>
                <td>Alleen pleisterwerk, dunne laag</td>
                <td>Vaak natuurlijk, zeker in een bewoond huis</td>
              </tr>
              <tr>
                <td>De vloerlegger staat geboekt</td>
                <td>
                  <Link to="/verhuur/calculator">Droogpakket</Link> met meting en einddatum
                </td>
              </tr>
              <tr>
                <td>Dichte ruwbouw, winter, chape van {dikste?.cm ?? 7} cm</td>
                <td>Droogpakket, bij koude werf met bouwkachel</td>
              </tr>
              <tr>
                <td>U plaatst liever zelf</td>
                <td>
                  <Link to="/verhuur/afhalen">Losse toestellen</Link> aan afhaaltarief
                </td>
              </tr>
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>

    {/* ============ VEELGESTELDE VRAGEN ============ */}
    <GidsFaqSectie
      faq={FAQ}
      titel="Natuurlijk drogen of huren, kort beantwoord"
      variant="rood"
    />

    {/* ============ VERDER LEZEN ============ */}
    <section className="sw">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">Verder lezen</span>
          <h2 className="sec">Weet u al wat er bij u moet drogen?</h2>
          <p className="lede">
            Dan gaan deze twee pagina's verder waar deze gids stopt: met de termijnen per laag en
            met wat er op uw werf gebeurt.
          </p>
        </Reveal>

        <div className="door">
          <Reveal as={Link} className="dk" from="left" delay={0.05} to="/gids/hoe-lang-moet-chape-drogen">
            <span className="dki" aria-hidden="true">
              <ClockIcon size={20} />
            </span>
            <h3>Hoe lang moet chape drogen?</h3>
            <p>
              De richtwaarden per centimeter, het verschil tussen cement- en anhydrietchape, het
              opstookprotocol bij vloerverwarming en wanneer u restvocht meet.
            </p>
            <span className="dkm">Lees de gids over chape →</span>
          </Reveal>

          <Reveal as={Link} className="dk" from="right" delay={0.1} to="/nieuwbouw-drogen">
            <span className="dki" aria-hidden="true">
              <LayersIcon size={20} />
            </span>
            <h3>Chape en pleisterwerk samen drogen</h3>
            <p>
              Wat een droging op een nieuwbouwwerf kost en hoe ze verloopt: één pakket, één
              huurtermijn en één meting voor en na.
            </p>
            <span className="dkm">Bekijk drogen in nieuwbouw →</span>
          </Reveal>
        </div>

        <Reveal className="lees-verder" from="up" delay={0.15}>
          <Link to="/hoe-drogen-werkt">Hoe drogen werkt</Link>
          <Link to="/waarom-bouwdroging">Waarom bouwdroging</Link>
          <Link to="/gids/hoe-lang-moet-pleisterwerk-drogen">Droogtijd van pleisterwerk</Link>
          <Link to="/gids/condensdroger-of-adsorptiedroger">Condensdroger of adsorptiedroger</Link>
          <Link to="/gids/stroomverbruik-bouwdroger">Stroomverbruik van een bouwdroger</Link>
          <Link to="/prijzen">Prijzen en tarieven</Link>
        </Reveal>
      </div>

      <div className="wrap">
        <Reveal className="manband" from="up">
          <div className="mb-t">
            <span className="mbk">Van richtwaarde naar datum</span>
            <h3>Geef ons uw oppervlakte en uw chapedikte, wij geven u een einddatum.</h3>
            <p>
              De Calculator rekent uw volume door naar een pakket met de juiste toestellen en de
              juiste termijn. Onze technieker plaatst, stelt in en meet bij de start en bij de
              oplevering. Is het dan niet droog, dan verlengen wij kosteloos.
            </p>
            <Link className="btn btn-white mb-cta" to="/verhuur/calculator">
              Bereken uw droogpakket
              <Arrow />
            </Link>
          </div>
          <img
            className="mb-man"
            src="/vernast/man-vochtmeter.webp"
            alt="Vernast technieker meet de restvochtigheid van een chape"
            style={{ width: "min(30%,320px)" }}
          />
        </Reveal>
      </div>
    </section>

    {/* ============ FORMULIER ============ */}
    <ContactBlok
      kicker="Twijfelt u of u moet huren?"
      titel="Leg uw werf even voor aan een droogspecialist."
      lede="Vertel ons wat er droogt, wanneer het klaar moet zijn en hoe uw werf erbij staat. U krijgt binnen één werkdag een eerlijk antwoord, ook als dat is dat u niets nodig heeft."
      onderwerpen={[
        "Moet ik hier iets voor huren?",
        "Hoe lang duurt het bij mij?",
        "Prijs en leverdatum",
        "Iets anders",
      ]}
      placeholder="Bv. nieuwbouw 140 m², chape van 6 cm gelegd op 3 november, gepleisterd eind oktober, vloerlegger komt half december."
    />
  </GidsShell>
);

export default NatuurlijkDrogenPage;

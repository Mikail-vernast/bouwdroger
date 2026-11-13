import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import GidsShell, { GidsFaqSectie, type GidsFaq } from "@/components/gids/GidsShell";
import ContactBlok from "@/components/content/ContactBlok";
import Reveal from "@/components/Reveal";
import { SEO } from "@/data/seo";
import { droogtermijnen, termijnZonderDikte } from "@/lib/droogtijden";
import { ClockIcon, GaugeIcon, GridIcon, LayersIcon, ThermoIcon, WindIcon } from "@/components/content/icons";

const PATH = "/gids/hoe-lang-moet-pleisterwerk-drogen";

/*
  Dezelfde bron als de chapegids en /nieuwbouw-drogen: de huurtermijnen komen uit de
  pakketten in de catalogus, niet uit een tabel in deze pagina. Verandert het
  portaal een termijn, dan verandert hij hier mee.

  `BEIDE` is het pakket voor chape én pleisterwerk samen; dat bestaat zonder
  dikte, want het droogt het hele gebouw.
*/
const PLEISTER = droogtermijnen("pleister").map((r) => ({ cm: r.dikte, weken: r.max }));
const BEIDE = termijnZonderDikte("beide");

const weken = (n: number) => `${n} ${n === 1 ? "week" : "weken"}`;
const dunste = PLEISTER[0];
const dikste = PLEISTER[PLEISTER.length - 1];

/* De langste balk: de zwaarste laag, of het combipakket als dat langer loopt. */
const SCHAAL = Math.max(dikste?.weken ?? 4, BEIDE?.max ?? 0);
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

/*
  Waar u een laagdikte tegenkomt. De weken komen uit de catalogus; deze derde
  kolom is beschrijving van de praktijk, geen voorschrift: vandaar "doorgaans"
  en niet "altijd". Staat er ooit een dikte bij in het portaal, dan verschijnt
  de rij zonder omschrijving in plaats van helemaal niet.
*/
const WAAR: Record<number, string> = {
  1: "De gangbare binnenbepleistering: gips, machinaal in één laag op snelbouwsteen of beton.",
  2: "Een dikkere opbouw of een uitvlaklaag, bijvoorbeeld op een muur die niet recht staat.",
  3: "Zwaar werk in meerdere lagen, zoals een cementering in een kelder of een natte ruimte.",
};

/* De vijf dingen die een pleisterdroging korter of langer maken. */
const FACTOREN = [
  {
    icoon: <LayersIcon />,
    titel: "De laagdikte",
    tekst: "Een dubbele laag betekent dubbel zoveel aanmaakwater, en dat water moet door hetzelfde oppervlak naar buiten.",
  },
  {
    icoon: <GridIcon />,
    titel: "De ondergrond",
    tekst: "Een zuigende steen neemt een deel van het water op en geeft het traag weer af. Op beton blijft alles in de laag zitten.",
  },
  {
    icoon: <ThermoIcon />,
    titel: "De temperatuur",
    tekst: "Warme lucht draagt veel meer vocht dan koude. In een onverwarmde ruwbouw staat de droging zo goed als stil.",
  },
  {
    icoon: <GaugeIcon />,
    titel: "Wat er nog meer nat is",
    tekst: "Ligt er ook een verse chape, dan vechten vloer en muren om dezelfde lucht. Samen drogen vraagt meer capaciteit.",
  },
  {
    icoon: <WindIcon />,
    titel: "De luchtbeweging",
    tekst: "In hoeken, achter deuren en op de bovenste verdieping blijft de lucht staan. Daar droogt de muur het laatst.",
  },
];

/*
  De volgorde waarin het op de werf misloopt, niet de volgorde waarin het in
  een handleiding staat: mensen zetten een kachel voor de muur en gooien een
  raam open, en dat zijn precies de twee stappen die tegen elkaar in werken.
*/
const STAPPEN = [
  <>
    <b>Gun de eerste dagen rust.</b> Vers pleisterwerk moet eerst binden. Droog in die dagen niet
    keihard en zet zeker geen kachel vlak voor een muur: dan droogt het oppervlak uit terwijl de laag
    eronder nog nat is, en dat geeft scheuren of een poederige bovenlaag.
  </>,
  <>
    <b>Zet het gebouw dicht.</b> Ramen en buitendeuren toe. U droogt de ruimte, niet de straat. Belgische buitenlucht is een groot deel van het jaar vochtiger dan wat u binnen wil.
  </>,
  <>
    <b>Verwarm gelijkmatig.</b> Rond kamertemperatuur is genoeg. Eén gloeiende kachel in één hoek
    droogt die hoek en laat de rest staan.
  </>,
  <>
    <b>Zet de bouwdroger centraal.</b> Midden in de ruimte, vrij van muren en meubels, en laat hem dag
    en nacht draaien. De hygrostaat regelt zelf terug zodra de streefwaarde bereikt is.
  </>,
  <>
    <b>Zet een ventilator bij.</b> Hij hoeft niet op de muur te blazen; hij moet de lucht in beweging
    houden, zodat de verzadigde laag voor het pleisterwerk wordt weggeveegd.
  </>,
  <>
    <b>Meet voor de schilder of behanger komt.</b> Een egale, lichte kleur zegt iets over het
    oppervlak, niet over de laag eronder. Laat de restvochtigheid meten en leg ze vast.
  </>,
];

/* Eén vraag per laagdikte: "hoe lang moet pleisterwerk van 2 cm drogen" is een
   zoekvraag op zich, en wie ze stelt wil het getal voor zijn eigen muur zien. */
const STAART: Record<number, string> = {
  1: "Eén centimeter is de gewone binnenbepleistering, en meteen de snelste: de laag is dun en ligt aan één kant volledig open.",
  2: "Twee centimeter komt neer op dubbel zoveel water dat door hetzelfde oppervlak naar buiten moet, en dus niet op dubbel zo weinig geduld.",
  3: "Drie centimeter is zwaar werk in meerdere lagen. Zo'n opbouw houdt het vocht het langst vast, zeker als ze op beton zit.",
};

const FAQ: GidsFaq[] = [
  ...PLEISTER.map((rij) => ({
    question: `Hoe lang moet pleisterwerk van ${rij.cm} cm drogen?`,
    answer: `Met een bouwdroger rekenen wij voor een laag van ${rij.cm} cm op een huurtermijn van ${weken(
      rij.weken,
    )}, met een meting van de restvochtigheid bij de start en bij de oplevering. ${
      STAART[rij.cm] ?? "De termijn volgt uit de laagdikte, niet uit de oppervlakte."
    } Zonder droger is er geen vaste termijn te geven: dan hangt alles af van de luchtvochtigheid in het gebouw, en in een koud, dichtgemaakt huis staat de droging stil in plaats van traag te lopen. De meting beslist of u mag schilderen, niet de kalender.`,
  })),
  {
    question: "Wanneer mag ik schilderen op vers pleisterwerk?",
    answer:
      "Pas als een meting bevestigt dat de laag droog is, niet wanneer de muur egaal licht oogt. Een pleisterlaag wordt bovenaan het eerst licht; daaronder kan ze nog vol water zitten. Verf op een te natte ondergrond kan bladderen, vlekken of loslaten, en een verse ondergrond is bovendien alkalisch, wat sommige verven aantast. Vraag uw schilder welke waarde hij wil zien en welke eerste laag hij gebruikt: een dampopen grondlaag laat de muur verder ademen, een dichte afwerking sluit het restvocht op.",
  },
  {
    question: "Mag ik behangen op pleisterwerk dat nog niet helemaal droog is?",
    answer:
      "Nee, en behang is strenger dan verf. Zeker vinyl of een dichte kwaliteit legt een scherm over de muur, waardoor het vocht dat er nog in zit niet meer weg kan. Het blijft dan hangen tussen muur en behang, en dat is precies het klimaat waarin schimmel ontstaat; u ziet het pas maanden later aan donkere vlekken en loslatende naden. Laat meten, en vraag de behanger wat hij als bovengrens hanteert.",
  },
  {
    question: "Moet ik de ramen openzetten om pleisterwerk te drogen?",
    answer:
      "Alleen als de buitenlucht droger is dan de binnenlucht, en dat is in België een groot deel van het jaar niet zo. Draait er een bouwdroger, zet de ramen dan dicht: anders haalt het toestel voortdurend nieuwe, vochtige lucht binnen en droogt het de straat in plaats van uw muren. Zonder droger is kort en krachtig verluchten op een droge, winderige dag beter dan een raam dat de hele dag op kiepstand staat: dan koelt het gebouw alleen maar af, en koude lucht neemt nauwelijks vocht op.",
  },
  {
    question: "Mag ik een bouwkachel voor de muur zetten om het sneller te laten gaan?",
    answer:
      "Liever niet, en zeker niet vlak voor een muur. Een kachel die op één vlak staat te blazen, droogt het oppervlak sneller dan de laag eronder; dat geeft krimpscheuren, een poederige bovenlaag of plaatselijk loskomend pleisterwerk. Bovendien haalt warmte het vocht wel uit de muur, maar niet uit het gebouw: zonder bouwdroger slaat het even verderop weer neer op een koud raam of een buitenmuur. Verwarm gelijkmatig rond kamertemperatuur en laat een droger het vocht afvoeren.",
  },
  {
    question: "Waarom staat er condens op mijn ramen na het pleisteren?",
    answer:
      "Omdat het vocht de muur uit is, maar het gebouw niet. Vers pleisterwerk geeft dagenlang water af aan de lucht; zit het huis dicht en is er geen ontvochtiging, dan loopt de relatieve vochtigheid op tot de lucht verzadigd is. Op het koudste oppervlak in de ruimte, zoals het glas, de dorpel of een buitenmuur achter een kast, koelt die lucht onder haar dauwpunt af en wordt de damp weer water. De condens is dus geen raamprobleem maar een signaal dat er te veel vocht in de lucht hangt. Lees ook hoe drogen werkt.",
  },
  {
    question: "Hoe weet ik of pleisterwerk droog is?",
    answer:
      "Door te meten in plaats van te kijken of te voelen. Een vochtmeter op het oppervlak geeft een eerste indicatie, en de luchtvochtigheid in de ruimte vertelt of het gebouw als geheel al droog is: zolang die hoog blijft, geeft de muur niets meer af. Bij twijfel, of wanneer er een dichte afwerking op komt, wordt er dieper gemeten. In onze droogpakketten legt de technieker de waarde vast bij de start en bij de oplevering, zodat u niet op gevoel moet beslissen; een meetrapport kan erbij.",
  },
  {
    question: "Gipspleister of cementpleister: wat droogt sneller?",
    answer:
      "Gipspleister, in de regel. Het is de gewone binnenbepleistering, ligt dun en in één laag, en geeft zijn water vlot af. Cementgebonden werk, zoals een cementering in een kelder, een natte ruimte of op een buitenmuur, ligt doorgaans dikker, bindt een deel van het water chemisch en moet dat eerst doen voor de rest kan verdampen. Reken daarvoor op een langere termijn, en volg het voorschrift van de plaatser: dat gaat boven elke vuistregel.",
  },
  {
    question: "Kan ik chape en pleisterwerk tegelijk laten drogen?",
    answer: BEIDE
      ? `Ja, en in een nieuwbouw is dat ook de normale gang van zaken: de vloer en de muren staan tegelijk nat. Daarvoor hebben wij een pakket dat beide samen droogt, met een huurtermijn van ${weken(
          BEIDE.max,
        )}. U huurt dan één keer en meet één keer, in plaats van twee droogrondes na elkaar. Let wel: samen drogen vraagt meer capaciteit dan een van de twee apart, want er komt in dezelfde ruimte veel meer water vrij. De droogcalculator rekent dat voor uw oppervlakte uit.`
      : "Ja, en in een nieuwbouw is dat ook de normale gang van zaken: de vloer en de muren staan tegelijk nat. Samen drogen vraagt wel meer capaciteit dan een van de twee apart, want er komt in dezelfde ruimte veel meer water vrij. De droogcalculator rekent uit welk pakket daarbij hoort.",
  },
  {
    question: "Hoeveel bouwdrogers heb ik nodig voor pleisterwerk?",
    answer:
      "Dat hangt af van het volume van de ruimte en van wat er nog meer nat is, niet van het aantal vierkante meter muur alleen. Een open nieuwbouw met hoge plafonds vraagt meer dan een rij afgesloten kamers van dezelfde oppervlakte. De droogcalculator vraagt daarom uw oppervlakte, wat u droogt en de laagdikte, en stelt daarmee een pakket samen met het aantal toestellen en de huurtermijn. Eén te klein toestel haalt de streefwaarde simpelweg niet, hoe lang u het ook laat staan.",
  },
  {
    question: "Mag de bouwdroger 's nachts uit?",
    answer:
      "Beter niet. Zet u hem uit, dan loopt de relatieve vochtigheid in een paar uur weer op en neemt het pleisterwerk een deel van dat vocht gewoon terug op. De volgende ochtend begint het toestel van verder, en u verliest meer droogtijd dan u aan stroom bespaart. Een condensbouwdroger is gebouwd om continu te draaien en schakelt vanzelf terug zodra de streefwaarde bereikt is. Wat zo'n toestel per dag kost, rekenen we voor in onze gids over stroomverbruik.",
  },
];

const PleisterwerkDroogtijdPage = () => (
  <GidsShell
    seo={SEO.gidsPleisterDrogen}
    path={PATH}
    crumbs={[
      { name: "Home", path: "/" },
      { name: "Gidsen", path: "/gids" },
      { name: "Hoe lang moet pleisterwerk drogen?", path: PATH },
    ]}
    kick="Gids · droogtijden"
    h1="Hoe lang moet pleisterwerk drogen?"
    intro={
      <p>
        Met een bouwdroger droogt pleisterwerk in {dunste?.weken} tot {dikste?.weken} weken, afhankelijk
        van de laagdikte. Zonder droger valt er geen termijn te beloven: dan bepaalt de luchtvochtigheid
        in uw gebouw het tempo, en in een koud, dichtgemaakt huis staat de droging stil in plaats van
        traag te lopen. Hieronder de termijnen per laagdikte, waarom het vocht in huis blijft hangen, en
        wanneer de schilder mag komen.
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
          {dunste?.weken} tot {dikste?.weken} weken
          <small>met een droogpakket, naar laagdikte</small>
        </div>
      </div>
    }
    articlePublished="2026-11-12"
    faq={FAQ}
    faqZelfPlaatsen
  >
    {/* ============ DE TERMIJNEN IN VIER GETALLEN ============ */}
    <div className="statrule">
      <div className="wrap">
        <Reveal className="band" from="up">
          <div className="st">
            <div className="n">
              {dunste?.weken}
              <em>weken</em>
            </div>
            <div className="l">
              Met een droogpakket bij {dunste?.cm} cm pleisterwerk, de gangbare laagdikte
            </div>
          </div>
          <div className="st">
            <div className="n">
              {dikste?.weken}
              <em>weken</em>
            </div>
            <div className="l">Bij {dikste?.cm} cm, de zwaarste laag waarvoor wij een vast pakket hebben</div>
          </div>
          {BEIDE && (
            <div className="st">
              <div className="n">
                {BEIDE.max}
                <em>weken</em>
              </div>
              <div className="l">Chape én pleisterwerk samen, in één pakket en één huurtermijn</div>
            </div>
          )}
          <div className="st">
            <div className="n">
              24<em>u</em>
            </div>
            <div className="l">Draaien per dag: 's nachts uitzetten laat de vochtigheid weer oplopen</div>
          </div>
        </Reveal>
      </div>
    </div>

    {/* ============ HET VOCHT KOMT ERUIT, EN DAN? ============ */}
    <section className="sw">
      <div className="wrap wsplit">
        <Reveal className="prose" from="left">
          <h2>Een muur droogt van buiten naar binnen</h2>
          <p>
            Een pleisterlaag is dun en ligt aan één kant volledig open, dus geeft ze haar water sneller
            af dan een chape van zes centimeter. Ze doet dat wel van buiten naar binnen. De eerste
            millimeters zijn al klaar terwijl de laag tegen de steen nog vol water zit, en de muur voelt
            dan al droog aan. <b>Een muur die droog aanvoelt, is niet droog.</b>
          </p>
          <p>
            Daar komt bij dat de steen achter de pleister een deel van dat aanmaakwater heeft opgenomen.
            Een zuigende snelbouwsteen geeft het traag weer af, en zolang dat gebeurt wordt de
            pleisterlaag van achteren gevoed. Op de tekening hiernaast ziet u het: licht aan het
            oppervlak, donker waar het water nog zit.
          </p>
          <p>
            Al dat water moet het gebouw uit. Staat het huis dicht, dan blijft het in de lucht hangen tot
            die verzadigd is; op dat punt neemt ze niets meer op en stopt de droging, hoe lang u ook
            wacht. Wat u dan ziet is condens op de ramen en op koude buitenmuren. Een bouwdroger
            onderbreekt die kringloop, en waarom dat werkt staat uitgebreid op <Link to="/hoe-drogen-werkt">hoe drogen werkt</Link>.
          </p>
        </Reveal>

        <Reveal className="muur" from="right" delay={0.1}>
          <div className="mu-h">
            <b>De muur in doorsnede</b>
            <span>2 cm pleister op 25 cm steen</span>
          </div>
          <div className="mu-vlak">
            <div className="mu-kamer">
              <span className="mu-lab">Kamer</span>
              {/*
                Damp die aan het oppervlak ontsnapt. Ze stijgt en vervaagt,
                want het is waterdamp en geen lekwater.
              */}
              <i className="mu-damp" style={{ bottom: "22%" }} aria-hidden="true" />
              <i className="mu-damp" style={{ bottom: "44%", animationDelay: "1.4s" }} aria-hidden="true" />
              <i className="mu-damp" style={{ bottom: "63%", animationDelay: "2.9s" }} aria-hidden="true" />
              <i className="mu-damp" style={{ bottom: "82%", animationDelay: "4.1s" }} aria-hidden="true" />
            </div>
            <div className="mu-pleister">
              <i className="mu-front" aria-hidden="true" />
              <span className="mu-lab">Pleister, 2 cm</span>
            </div>
            <div className="mu-steen">
              {Array.from({ length: 9 }, (_, i) => (
                <i className="rij" key={i} />
              ))}
              <span className="mu-lab">Snelbouwsteen, 25 cm</span>
            </div>
          </div>
          <div className="mu-leg">
            <span>
              <i className="l-droog" aria-hidden="true" />
              <b>Droog</b> aan het oppervlak
            </span>
            <span>
              <i className="l-nat" aria-hidden="true" />
              <b>Nat</b> dieper in de pleisterlaag
            </span>
            <span>
              <i className="l-steen" aria-hidden="true" />
              <b>Steen</b> neemt een deel op
            </span>
          </div>
          <p className="mu-f">
            De pleisterlaag van 2 cm droogt van buiten naar binnen: de eerste millimeters zijn al klaar
            terwijl de laag tegen de steen nog vol water zit. Een muur die droog aanvoelt, is dus niet
            droog.
          </p>
        </Reveal>
      </div>
    </section>

    {/* ============ TERMIJNEN PER LAAGDIKTE ============ */}
    <section className="lvred">
      <div className="wrap wsplit">
        <Reveal className="sec-head" from="left" style={{ marginBottom: 0 }}>
          <span className="kick">Richtwaarden</span>
          <h2 className="sec">Droogtijd van pleisterwerk per laagdikte.</h2>
          <p className="lede">
            De huurtermijn van onze vaste pakketten, per dikte van de laag. Ze volgt uit die dikte en niet
            uit uw oppervlakte: een grotere ruimte krijgt meer toestellen, geen langere termijn.
          </p>
        </Reveal>

        <Reveal className="vglkaart" from="right" delay={0.1}>
          <div className="vgl">
            {PLEISTER.map((r) => (
              <div className="vrow groen" key={r.cm}>
                <div className="vl">
                  <span>{r.cm} cm pleisterwerk</span>
                  <b>{weken(r.weken)}</b>
                </div>
                <div className="vbar">
                  <i style={{ width: breedte(r.weken) }} />
                </div>
              </div>
            ))}
            {BEIDE && (
              <div className="vrow huur">
                <div className="vl">
                  <span>Chape en pleisterwerk samen</span>
                  <b>{weken(BEIDE.max)}</b>
                </div>
                <div className="vbar">
                  <i style={{ width: breedte(BEIDE.max) }} />
                </div>
              </div>
            )}
          </div>
          <p className="vglnoot">
            De balken staan op dezelfde schaal, met de langste termijn op 100 %. Dezelfde getallen staan
            in de tabel hieronder.
          </p>
        </Reveal>
      </div>

      <div className="wrap">
        <Reveal className="tbl" from="up" delay={0.15}>
          <table>
            <caption>
              Huurtermijn van onze vaste pakketten voor pleisterwerk, inclusief een meting van de
              restvochtigheid bij de start en bij de oplevering.
            </caption>
            <thead>
              <tr>
                <th scope="col">Laagdikte</th>
                <th scope="col">Met bouwdroger (Vernast-pakket)</th>
                <th scope="col">Waar u die dikte tegenkomt</th>
              </tr>
            </thead>
            <tbody>
              {PLEISTER.map((r) => (
                <tr key={r.cm}>
                  <td className="num">{r.cm} cm</td>
                  <td className="num">{weken(r.weken)}</td>
                  <td>{WAAR[r.cm] ?? "Een laagdikte uit onze vaste pakketten."}</td>
                </tr>
              ))}
              {BEIDE && (
                <tr>
                  <td className="num">Chape + pleister</td>
                  <td className="num">{weken(BEIDE.max)}</td>
                  <td>Een nieuwbouw waar vloer en muren tegelijk nat staan, in één pakket.</td>
                </tr>
              )}
            </tbody>
          </table>
        </Reveal>

        <Reveal className="note" from="up" delay={0.2}>
          <b>Welk pakket hoort bij uw werf?</b> De{" "}
          <Link to="/verhuur/calculator">droogcalculator</Link> vraagt uw oppervlakte, wat u droogt en de
          laagdikte, en toont het pakket met het aantal toestellen, de huurtermijn en de prijs. Droogt u
          ook de vloer, kijk dan op{" "}
          <Link to="/gids/hoe-lang-moet-chape-drogen">hoe lang chape moet drogen</Link>.
        </Reveal>
      </div>
    </section>

    {/* ============ ZONDER EN MET AFVOER ============ */}
    <section className="sw">
      <div className="wrap wsplit">
        <Reveal className="prose" from="left">
          <h2>Waarom wachten in een dicht huis niet werkt</h2>
          <p>
            Vers pleisterwerk ziet er al snel droog uit. De laag wordt bovenaan het eerst licht en egaal,
            en dat is precies het moment waarop mensen beslissen dat de schilder mag komen. Op de foto
            hiernaast ziet u het verschil: de donkere zones zijn nog vol water, terwijl de rest van de
            muur er afgewerkt bijligt.
          </p>
          <p>
            Een laag die vanbinnen nog nat is, blijft dat ook onder een laag verf. Het vocht zoekt zijn
            weg naar buiten en duwt tegen de afwerking: verf kan bladderen, vlekken of loslaten, behang
            laat los aan de naden en schimmelt aan de achterkant. Dat zijn geen schilderfouten, maar het
            gevolg van te vroeg beginnen.
          </p>
          <p>
            Wat u wil weten, is dus niet hoe de muur eruitziet, maar hoeveel vocht er nog in zit en of de
            lucht in de ruimte dat nog kan opnemen. Dat zijn twee metingen, en samen vertellen ze of u
            verder kunt.
          </p>
        </Reveal>

        <Reveal className="kaart materiaalkaart" from="right" delay={0.1}>
          <img
            className="materiaalfoto"
            src="/vernast/droogproces-nat-pleister.webp"
            alt="Vers gipspleister met donkere vochtzones naast al lichter, drogend pleisterwerk"
            width={1672}
            height={941}
            loading="lazy"
            decoding="async"
          />
          <div className="materiaaltekst">
            <h3>Donker is nat</h3>
            <p>
              Vers pleisterwerk kleurt lichter naarmate het droogt. Die kleur zegt alleen iets over het
              oppervlak: de laag eronder kan nog vol water zitten terwijl de muur er klaar uitziet.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="wrap">
        <div className="fase2">
          <Reveal className="fs" from="left" delay={0.05} style={{ "--w": "22%" } as CSSProperties}>
            <span className="fl">Dicht huis, geen afvoer</span>
            <h3>Het vocht draait rond.</h3>
            <p>
              De muren geven af tot de lucht verzadigd is; daarna slaat alles neer op ramen, dorpels en
              koude buitenmuren en trekt het weer in. De droging komt niet traag op gang: ze staat stil, en er is geen einddatum te geven.
            </p>
            <div className="bar">
              <b />
            </div>
            <span className="bl">Geen termijn: het hangt volledig af van het weer</span>
          </Reveal>

          <Reveal className="fs f1" from="right" delay={0.1} style={{ "--w": "100%" } as CSSProperties}>
            <span className="fl">Met een bouwdroger</span>
            <h3>Het vocht verlaat het gebouw.</h3>
            <p>
              Het toestel haalt de damp uit de lucht en vangt ze op, een ventilator houdt die lucht in
              beweging. De muren kunnen blijven afgeven, de condens op de ramen verdwijnt, en de
              einddatum staat vast in plaats van af te hangen van de week erna.
            </p>
            <div className="bar">
              <b />
            </div>
            <span className="bl">{dunste?.weken} tot {dikste?.weken} weken, naar laagdikte</span>
          </Reveal>
        </div>

        <Reveal className="note" from="up" delay={0.15}>
          <b>Zet de droger niet 's nachts uit.</b> De vochtigheid loopt in een paar uur weer op en het
          pleisterwerk neemt een deel ervan gewoon terug op. U verliest dan meer droogtijd dan u aan
          stroom bespaart, en wat zo'n toestel per dag kost, rekenen we voor in{" "}
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
            Vijf dingen bepalen of uw muren binnen de termijn klaar zijn. Vier ervan kunt u zelf sturen.
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

    {/* ============ GIPS OF CEMENT ============ */}
    <section className="sw">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">Twee soorten pleisterwerk</span>
          <h2 className="sec">Gipspleister of cementpleister?</h2>
          <p className="lede">
            De termijnen hierboven gaan over gewone binnenbepleistering. Werkt u met een cementgebonden laag, in een kelder, een natte ruimte of op een buitenmuur, dan gelden er andere regels, en het
            voorschrift van de plaatser gaat boven elke vuistregel.
          </p>
        </Reveal>

        <div className="vsg">
          <Reveal className="vs" from="left" delay={0.05}>
            <span className="vt">Gipspleister</span>
            <h3>De gewone binnenbepleistering, en de snelste.</h3>
            <ul>
              <li>
                <Check />
                <span>
                  <b>Dun en in één laag.</b> Machinaal aangebracht op snelbouwsteen of beton, doorgaans
                  rond {dunste?.cm} cm dik.
                </span>
              </li>
              <li>
                <Check />
                <span>
                  <b>Geeft zijn water vlot af.</b> De laag ligt aan één kant open; het vocht hoeft maar
                  een paar millimeter af te leggen.
                </span>
              </li>
              <li>
                <Check />
                <span>
                  <b>Gevoelig voor te hard drogen.</b> Een kachel vlak voor de muur droogt het oppervlak
                  en laat de laag eronder nat; dat geeft scheuren of een poederige bovenlaag.
                </span>
              </li>
              <li>
                <Check />
                <span>
                  <b>Niet waterbestendig.</b> In een douche of kelder hoort gips niet thuis; daar wordt
                  cementgebonden gewerkt.
                </span>
              </li>
            </ul>
            <span className="vf">De richtwaarden en pakketten op deze pagina gaan hierover.</span>
          </Reveal>

          <Reveal className="vs" from="right" delay={0.1}>
            <span className="vt">Cementpleister</span>
            <h3>Zwaarder werk, en trager van nature.</h3>
            <ul>
              <li>
                <Let />
                <span>
                  <b>Bindt water chemisch.</b> Net als chape heeft cement dat water eerst nodig; pas
                  daarna begint de eigenlijke droging.
                </span>
              </li>
              <li>
                <Let />
                <span>
                  <b>Ligt doorgaans dikker</b> en vaak in meerdere lagen, bijvoorbeeld bij een cementering
                  in een kelder of een natte ruimte.
                </span>
              </li>
              <li>
                <Let />
                <span>
                  <b>Vraagt meer geduld.</b> Reken op de langere termijnen uit de tabel, en op een
                  wachttijd voor u begint te drogen.
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
            <span className="vf">
              Zit er vocht in de muur zelf, kijk dan bij{" "}
              <Link to="/renovatie">een vochtige kelder of schimmel</Link>.
            </span>
          </Reveal>
        </div>
      </div>
    </section>

    {/* ============ ZO DROOGT U PLEISTERWERK ============ */}
    <section className="lvred">
      <div className="wrap">
        <Reveal className="sec-head mid" from="up">
          <span className="kick">Aanpak</span>
          <h2 className="sec">Zo droogt u pleisterwerk, in zes stappen.</h2>
          <p className="lede">
            Niet de volgorde uit een handleiding, maar de volgorde waarin het op de werf misloopt: er
            staat een kachel voor de muur én een raam open, en die twee werken tegen elkaar in.
          </p>
        </Reveal>
        <div className="stap8">
          {STAPPEN.map((tekst, i) => (
            <Reveal className="s8" from="up" delay={i * 0.05} key={i}>
              <i aria-hidden="true" />
              <span>{tekst}</span>
            </Reveal>
          ))}
        </div>
        <Reveal className="note" from="up" delay={0.2}>
          <b>Droogt u ook een verse chape?</b> Dan komt er in dezelfde ruimte veel meer water vrij, en
          vraagt dat meer capaciteit dan een van de twee apart. In ons combipakket zit dat verrekend. Zie <Link to="/nieuwbouw-drogen">chape en pleisterwerk drogen in nieuwbouw</Link>.
        </Reveal>
      </div>
    </section>

    {/* ============ WANNEER MAG DE SCHILDER KOMEN ============ */}
    <section className="sw">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">Meten, niet gokken</span>
          <h2 className="sec">Wanneer mag de schilder of behanger komen?</h2>
          <p className="lede">
            Dit is het moment waarop te vroeg beginnen echt geld kost: wat er onder de afwerking nog aan
            vocht zit, komt er niet meer uit zonder die afwerking weg te halen.
          </p>
        </Reveal>

        <div className="vsg">
          <Reveal className="vs groen" from="left" delay={0.05}>
            <span className="vt">Zo weet u het zeker</span>
            <h3>Twee metingen, en een afspraak met uw schilder.</h3>
            <ul>
              <li>
                <Check />
                <span>
                  <b>Meet de muur én de lucht.</b> Een vochtmeter op het oppervlak zegt iets over de
                  laag; de luchtvochtigheid zegt of het gebouw als geheel al droog is.
                </span>
              </li>
              <li>
                <Check />
                <span>
                  <b>Vraag de schilder wat hij wil zien.</b> Hij kent zijn verf en zijn grondlaag; welke
                  waarde hij hanteert, hoort u van hem te horen en niet van een vuistregel.
                </span>
              </li>
              <li>
                <Check />
                <span>
                  <b>Begin dampopen.</b> Een eerste laag die damp doorlaat, laat de muur verder ademen;
                  een dichte afwerking sluit op wat er nog in zit.
                </span>
              </li>
              <li>
                <Check />
                <span>
                  <b>Voor- en nameting bij ons pakket.</b> De technieker legt de start- en eindwaarde
                  vast, en op aanvraag krijgt u een meetrapport.
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
            <h3>Vier beslissingen die u opnieuw laat beginnen.</h3>
            <ul>
              <li>
                <Let />
                <span>
                  <b>Op kleur beslissen.</b> Licht en egaal betekent dat het oppervlak droog is, niets
                  meer.
                </span>
              </li>
              <li>
                <Let />
                <span>
                  <b>Behangen op een natte muur.</b> Het behang sluit het vocht op; de schimmel groeit
                  erachter en u ziet het pas maanden later.
                </span>
              </li>
              <li>
                <Let />
                <span>
                  <b>Meteen een dichte afwerking.</b> Vinyl, een dampdichte verf of een gietvloer tegen
                  de plint: alles wat afsluit, houdt het vocht binnen.
                </span>
              </li>
              <li>
                <Let />
                <span>
                  <b>Een kachel voor de muur zetten.</b> Het oppervlak droogt vooruit op de laag eronder,
                  met krimpscheuren of loskomend pleisterwerk tot gevolg.
                </span>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>

    {/* ============ VEELGESTELDE VRAGEN ============ */}
    <GidsFaqSectie faq={FAQ} titel="Alles over de droogtijd van pleisterwerk" variant="rood" />

    {/* ============ VERDER LEZEN ============ */}
    <section className="sw">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">Verder lezen</span>
          <h2 className="sec">Droogt u meer dan alleen de muren?</h2>
          <p className="lede">
            In een nieuwbouw staan vloer en muren tegelijk nat, en dan telt vooral wat er het traagst
            droogt. Twee pagina's die daarop verdergaan.
          </p>
        </Reveal>

        <div className="door">
          <Reveal as={Link} className="dk" from="left" delay={0.05} to="/gids/hoe-lang-moet-chape-drogen">
            <span className="dki" aria-hidden="true">
              <ClockIcon size={20} />
            </span>
            <h3>Hoe lang moet chape drogen?</h3>
            <p>
              De richtwaarden per centimeter, waarom een dikkere vloer veel trager droogt en hoe u weet
              wanneer de vloerlegger mag komen.
            </p>
            <span className="dkm">Lees de gids over chape →</span>
          </Reveal>

          <Reveal as={Link} className="dk" from="right" delay={0.1} to="/nieuwbouw-drogen">
            <span className="dki" aria-hidden="true">
              <LayersIcon size={20} />
            </span>
            <h3>Chape en pleisterwerk samen drogen</h3>
            <p>
              Eén pakket, één huurtermijn en één meting voor en na, in plaats van twee droogrondes na
              elkaar.
            </p>
            <span className="dkm">Bekijk drogen in nieuwbouw →</span>
          </Reveal>
        </div>

        <Reveal className="lees-verder" from="up" delay={0.15}>
          <Link to="/hoe-drogen-werkt">Hoe drogen werkt</Link>
          <Link to="/gids/condensdroger-of-adsorptiedroger">Condensdroger of adsorptiedroger</Link>
          <Link to="/gids/stroomverbruik-bouwdroger">Stroomverbruik van een bouwdroger</Link>
          <Link to="/realisaties/dhr-p-merksem">Vers pleisterwerk gecontroleerd drooggelegd</Link>
          <Link to="/prijzen">Prijzen en tarieven</Link>
        </Reveal>
      </div>

      <div className="wrap">
        <Reveal className="manband" from="up">
          <div className="mb-t">
            <span className="mbk">Moet de schilder volgende week komen?</span>
            <h3>Wij meten uw muren voor en na, en garanderen de einddatum.</h3>
            <p>
              Onze techniekers plaatsen de toestellen, stellen de streefwaarde in en leggen de
              restvochtigheid vast bij de start en bij de oplevering. Is het pleisterwerk dan niet droog,
              dan verlengen wij kosteloos, zie <Link to="/drooggarantie">de Drooggarantie</Link>.
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
      kicker="Nog een vraag over uw muren?"
      titel="Onze droogspecialisten kijken met u naar de planning."
      lede="Weet u niet of uw pleisterwerk op tijd droog is voor de schilder, of droogt u ook nog een chape? Stel uw vraag, u krijgt binnen één werkdag antwoord van een specialist."
      onderwerpen={[
        "Vraag over de droogtijd van pleisterwerk",
        "Chape en pleisterwerk samen drogen",
        "Vraag over meten voor het schilderen",
        "Iets anders",
      ]}
      placeholder="Bv. 180 m² gipspleister van 1 cm, gepleisterd op 5 november, schilder komt begin december. Haalt dat?"
    />
  </GidsShell>
);

export default PleisterwerkDroogtijdPage;

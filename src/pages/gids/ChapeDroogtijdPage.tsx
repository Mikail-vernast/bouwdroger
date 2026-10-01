import { Link } from "react-router-dom";
import GidsShell, { type GidsFaq } from "@/components/gids/GidsShell";
import { SEO } from "@/data/seo";
import { droogtermijnen, natuurlijkeChapeWeken as natuurlijkeWeken } from "@/lib/droogtijden";

const PATH = "/gids/hoe-lang-moet-chape-drogen";

/*
  De huurtermijnen per dikte komen uit de catalogus (via droogtijden.ts, dat
  ook de tabel op /nieuwbouw voedt), en de vuistregel voor natuurlijk drogen
  uit dezelfde module. Niets overgetypt: verandert het portaal een termijn,
  dan zeggen /nieuwbouw en deze gids samen hetzelfde nieuwe getal.

  `weken` is de langste termijn over alle oppervlaktes — liever een week te
  ruim aankondigen dan een termijn die bij een grotere ruimte niet klopt.
*/
const CHAPE = droogtermijnen("chape").map((r) => ({ cm: r.dikte, weken: r.max }));
const PLEISTER = droogtermijnen("pleister").map((r) => ({ cm: r.dikte, weken: r.max }));

const weken = (n: number) => `${n} ${n === 1 ? "week" : "weken"}`;
const eerste = CHAPE[0];

const FAQ: GidsFaq[] = [
  ...(eerste
    ? [
        {
          question: `Hoe lang moet chape van ${eerste.cm} cm drogen?`,
          answer: `Natuurlijk drogen duurt voor ${eerste.cm} cm cementchape als richtwaarde ongeveer ${weken(natuurlijkeWeken(eerste.cm))}, bij een goed verwarmd en geventileerd gebouw. Met een bouwdroger rekenen wij voor die dikte op een huurtermijn van ${weken(eerste.weken)}. De meting bepaalt uiteindelijk of de vloer klaar is, niet de kalender.`,
        },
      ]
    : []),
  {
    question: "Wanneer mag de bouwdroger aan na het leggen van de chape?",
    answer:
      "Niet meteen. Cementchape heeft water nodig om uit te harden, dus eerst moet die eerste uithardingsfase voorbij zijn. Vraag uw chapeur vanaf wanneer u actief mag drogen; te vroeg en te agressief drogen kan krimp en scheuren veroorzaken.",
  },
  {
    question: "Mag ik de vloerverwarming gebruiken om chape te drogen?",
    answer:
      "Ja, maar alleen volgens een opstookprotocol: rustig starten op lage temperatuur en stap voor stap opdrijven, en pas na de wachttijd die de chapeur of de fabrikant voorschrijft. Zet de verwarming nooit meteen op volle kracht. Een bouwdroger haalt het vocht dat daarbij vrijkomt uit de lucht.",
  },
  {
    question: "Hoe weet ik of mijn chape droog genoeg is voor parket of tegels?",
    answer:
      "Door te meten, meestal met een CM-meting (carbidemethode) op een staal uit de volle diepte van de vloer. Welke grenswaarde geldt, hangt af van het type chape en van de afwerking. Uw vloerlegger bepaalt die grens; vraag hem vooraf welke waarde hij wil zien.",
  },
  {
    question: "Hoe lang moet pleisterwerk drogen voor ik kan schilderen?",
    answer: `Dat hangt af van de laagdikte, de temperatuur en de ventilatie. Met een bouwdroger rekenen wij voor pleisterwerk op ${PLEISTER.map((p) => `${weken(p.weken)} bij ${p.cm} cm`).join(", ")}. Schilder pas als een meting bevestigt dat de pleister droog is, ook als het oppervlak al licht en egaal oogt.`,
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
        Het korte antwoord: als richtwaarde droogt cementchape van {CHAPE[0]?.cm} tot{" "}
        {CHAPE[CHAPE.length - 1]?.cm} cm op eigen kracht in ongeveer{" "}
        {natuurlijkeWeken(CHAPE[0]?.cm ?? 5)} tot {natuurlijkeWeken(CHAPE[CHAPE.length - 1]?.cm ?? 7)} weken;
        met een bouwdroger rekenen wij voor die diktes {CHAPE[0]?.weken} tot{" "}
        {CHAPE[CHAPE.length - 1]?.weken} weken. Het eerlijke antwoord: dat hangt af van
        de dikte, het type chape, de temperatuur en de ventilatie. Hieronder vindt u richtwaarden per
        dikte, het verschil met en zonder bouwdroger, en hoe u weet wanneer de vloerlegger mag komen.
      </p>
    }
    heroImg={{ src: "/vernast/man-vochtmeter.webp", alt: "Vernast technicus meet het vochtgehalte met een vochtmeter" }}
    articlePublished="2026-09-29"
    faq={FAQ}
  >
    <section className="sw">
      <div className="wrap prose">
        <h2>Droogtijd van chape per dikte</h2>
        <p>
          Voor cementchape die op eigen kracht droogt, geldt een oude vuistregel: <b>ongeveer één week per
          centimeter voor de eerste 4 cm</b>. Daarboven gaat het aanzienlijk trager, want het vocht uit de
          onderste laag moet door de hele dikte heen naar boven; reken dan grofweg op twee weken per extra
          centimeter. Dat zijn richtwaarden bij een verwarmd, geventileerd gebouw rond kamertemperatuur. In
          een koude, vochtige winterwerf loopt het makkelijk verder uit.
        </p>
        <p>
          Met een bouwdroger stuurt u dat klimaat zelf. In de tabel ziet u naast de vuistregel de
          huurtermijn die wij in onze pakketten voor die dikte rekenen.
        </p>
        <div className="tbl">
          <table>
            <caption>
              Natuurlijk drogen: richtwaarde voor cementchape bij gunstig binnenklimaat. Met bouwdroger: de
              huurtermijn van onze vaste chapepakketten, inclusief voor- en nameting van de restvochtigheid.
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
        </div>
        <p>
          Waarom een bouwdroger zoveel verschil maakt, leest u uitgebreid op{" "}
          <Link to="/hoe-drogen-werkt">hoe drogen werkt</Link>. Kort: een chape droogt alleen als de lucht
          erboven het vocht kan opnemen. Blijft de luchtvochtigheid in het gebouw hoog, dan staat de droging
          zo goed als stil, hoe lang u ook wacht. Een bouwdroger haalt dat vocht voortdurend uit de lucht,
          een ventilator zorgt dat die droge lucht ook echt over de vloer strijkt.
        </p>

        <h2 style={{ marginTop: 40 }}>Cementchape of anhydrietchape?</h2>
        <p>
          <b>Cementchape</b> is in België de gewoonste vloer. Cement bindt water chemisch tijdens het
          uitharden; het overtollige water moet daarna verdampen. Juist daarom mag u in de eerste fase niet
          agressief drogen: het cement heeft dat water nog nodig. Pas daarna begint de eigenlijke droogfase,
          en die hangt sterk af van de dikte.
        </p>
        <p>
          <b>Anhydrietchape</b> (op basis van calciumsulfaat) wordt vloeibaar gegoten en ligt daardoor vaak
          dunner en vlakker. Ze is gevoeliger voor vocht en vraagt doorgaans een lagere restvochtigheid
          voor ze afgewerkt mag worden. Vaak moet ook de bovenste laag geschuurd worden voor ze goed kan
          drogen en hechten. Volg bij anhydriet altijd de voorschriften van de plaatser en de fabrikant;
          die verschillen per product.
        </p>

        <h2 style={{ marginTop: 40 }}>Vloerverwarming opstoken</h2>
        <p>
          Ligt er vloerverwarming onder de chape, dan is die een handige hulp bij het drogen, maar alleen
          met beleid. De gangbare aanpak is een <b>opstookprotocol</b>: na de wachttijd die de chapeur
          voorschrijft, start u op een lage aanvoertemperatuur en drijft u die stap voor stap op, daarna
          bouwt u ze even geleidelijk weer af. Wie de verwarming meteen hoog zet, riskeert scheuren door
          spanningen tussen een droge onderkant en een nog natte bovenkant.
        </p>
        <p>
          Verwarming alleen droogt ook niet: warme lucht neemt vocht op, maar dat vocht moet vervolgens
          het gebouw uit. Zonder ventilatie of ontvochtiging slaat het neer op koudere plekken, zoals
          ramen en buitenmuren. Een bouwdroger naast de vloerverwarming voert het af.
        </p>

        <h2 style={{ marginTop: 40 }}>Restvocht meten vóór parket, tegels of pvc</h2>
        <p>
          Een chape die hard en licht van kleur is, kan vanbinnen nog nat zijn. Zeker onder parket, pvc of
          een gietvloer is dat een risico: het vocht dat later nog naar boven komt, zit dan opgesloten onder
          de afwerking. Daarom wordt de restvochtigheid gemeten, meestal met een <b>CM-meting</b>
          (carbidemethode) op een staal uit de volle diepte van de vloer.
        </p>
        <ul>
          <li>Welke grenswaarde geldt, hangt af van het type chape, de vloerverwarming en de afwerking.</li>
          <li>
            <b>Uw vloerlegger bepaalt de grens.</b> Vraag hem vooraf welke waarde hij wil zien, dan weet u
            waar u naartoe droogt.
          </li>
          <li>
            Bij onze pakketten zit een voor- en nameting van de restvochtigheid, zodat u niet op het oog
            moet beslissen. Wil u het zwart op wit, dan kan een meetrapport erbij.
          </li>
        </ul>
      </div>
    </section>

    <section className="sw2">
      <div className="wrap prose">
        <h2>En pleisterwerk: hoe lang moet dat drogen?</h2>
        <p>
          Pleisterwerk droogt in principe sneller dan chape, omdat de laag dunner is en aan één kant open
          ligt. Toch zit er in een volledig bepleisterde woning al snel honderden liters water. Hoe snel
          dat eruit gaat, hangt af van de laagdikte, de ondergrond, de temperatuur en vooral de
          luchtvochtigheid in huis. In een koud, dichtgemaakt huis kan pleisterwerk wekenlang nat blijven.
        </p>
        <div className="tbl">
          <table>
            <caption>Huurtermijn van onze vaste pakketten voor pleisterwerk, per laagdikte.</caption>
            <thead>
              <tr>
                <th scope="col">Pleisterdikte</th>
                <th scope="col">Met bouwdroger (Vernast-pakket)</th>
              </tr>
            </thead>
            <tbody>
              {PLEISTER.map((r) => (
                <tr key={r.cm}>
                  <td className="num">{r.cm} cm</td>
                  <td className="num">{weken(r.weken)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Schilder niet op het oog. Een pleisterlaag wordt lichter en egaler van kleur naarmate ze droogt,
          maar dat zegt vooral iets over het oppervlak. Verf op een pleister die vanbinnen nog nat is, kan
          gaan bladderen of vlekken. Laat meten voor de schilder begint.
        </p>
        <p>
          Chape en pleisterwerk tegelijk? Dan droogt u het hele gebouw in één keer; dat kan in één pakket.
          Hoe dat bij een nieuwbouw verloopt, leest u op <Link to="/nieuwbouw">chape en pleisterwerk drogen
          in nieuwbouw</Link>. Twee voorbeelden van de werf:{" "}
          <Link to="/realisaties/mnr-l-hasselt">pleister- en chapewerken versneld gedroogd</Link> en{" "}
          <Link to="/realisaties/dhr-p-merksem">vers pleisterwerk gecontroleerd drooggelegd</Link>.
        </p>
        <div className="note">
          <b>Weet u hoeveel toestellen u nodig heeft?</b> De <Link to="/verhuur/calculator">droogcalculator</Link>{" "}
          vraagt uw oppervlakte, wat u droogt en de dikte, en toont het pakket met de bijbehorende
          huurtermijn en prijs. Twijfelt u tussen toesteltypes, lees dan{" "}
          <Link to="/gids/condensdroger-of-adsorptiedroger">condensdroger of adsorptiedroger</Link>.
        </div>
      </div>
    </section>
  </GidsShell>
);

export default ChapeDroogtijdPage;

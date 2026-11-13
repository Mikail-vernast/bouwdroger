import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import Reveal from "@/components/Reveal";
import Pakketkaarten from "@/components/content/Pakketkaarten";
import ContactBlok from "@/components/content/ContactBlok";
import FaqBlok from "@/components/content/FaqBlok";
import VerderLezen, { type LeesGroep } from "@/components/VerderLezen";
import { ArrowRightIcon, CalendarCheckIcon, CheckIcon, HouseIcon, PhoneIcon } from "@/components/home-v3/icons";
import { GaugeIcon, LayersIcon, ThermoIcon, WindIcon, XIcon } from "@/components/content/icons";
import { SEO } from "@/data/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { euro } from "@/data/tarieflijst";
import { EXTRAS, toestelPad } from "@/data/verhuur";
import { droogtermijnen, natuurlijkeChapeWeken, termijnLabel } from "@/lib/droogtijden";
import { getRealisatie, type Realisatie } from "@/data/realisaties";
import { CONTACT } from "@/lib/site";
import "@/styles/v3-content.css";

/**
 * Chape en pleisterwerk drogen. Stond tot november 2026 op de oude
 * shadcn-schil met de `Navbar`; nu in de v3-vormtaal van /hoe-drogen-werkt,
 * met <V3Header> en de gedeelde opmaak uit src/styles/v3-content.css.
 *
 * De route heet sinds 12-11-2026 /nieuwbouw-drogen. /nieuwbouw noemde de
 * bouwfase en niet de dienst: in een zoekresultaat stond onder een titel over
 * chape en pleisterwerk een URL waar dat woord niet in voorkwam. De oude URL
 * leidt permanent door (vercel.json); de redirect blijft nodig omdat alle
 * Shopify-redirects voor chape- en pleisterpakketten hier uitkomen.
 *
 * De inhoud bleef: de twee droogtijdtabellen zijn de reden dat mensen hier
 * binnenkomen ("hoe lang chape drogen", "droogtijd pleisterwerk"), en ze
 * blijven dus echte <table>'s met een koprij — zodat een zoekmachine of
 * AI-assistent dikte en termijn aan elkaar kan koppelen.
 */

/*
  De huurtermijnen per dikte komen uit de catalogus (zie `lib/droogtijden.ts`).
  Deze pagina beloofde eerder "4 tot 8 weken" met bouwdroger, terwijl de
  pakketten die we verkopen op twee tot vier weken lopen — twee getallen voor
  dezelfde droging, op dezelfde site.
*/
const CHAPE = droogtermijnen("chape");
const PLEISTER = droogtermijnen("pleister");

/** "5 cm: 2 weken, 6 cm: 3 weken en 7 cm: 4 weken" — voor lopende tekst. */
function opsomming(rijen: typeof CHAPE): string {
  const delen = rijen.map((r) => `${r.dikte} cm: ${termijnLabel(r)}`);
  if (delen.length <= 1) return delen.join("");
  return `${delen.slice(0, -1).join(", ")} en ${delen[delen.length - 1]}`;
}

const kortsteTermijn = Math.min(...CHAPE.map((r) => r.min), ...PLEISTER.map((r) => r.min));
const langsteTermijn = Math.max(...CHAPE.map((r) => r.max), ...PLEISTER.map((r) => r.max));

/** Het ondertekende vochtrapport is een betalende optie, geen standaard. */
const RAPPORT = EXTRAS.find((x) => x.k === "rapport");

const zonder = [
  "Maanden wachten, zeker in herfst en winter",
  "De vloerder kan niet starten en schuift uw plaats door",
  "Risico op schimmel achter plinten en onder de isolatie",
  "Eén uitgestelde fase schuift heel de afwerking op",
];

const met = [
  `Huurtermijn van ${kortsteTermijn} tot ${langsteTermijn} weken, volgens de dikte`,
  "De vloerder krijgt een datum waar hij op kan rekenen",
  "De lucht blijft droog, dus schimmel krijgt geen kans",
  "Vochtmeting bij de start en bij de oplevering",
];


/*
  Wat de droogtijd bepaalt, in één reeks van zes.

  Hier stonden twee rode secties onder elkaar in de pagina: "Drie dingen die de
  droogtijd echt bepalen" en, drie secties verder, "Drie dingen die dagen
  schelen" — dezelfde vorm, dezelfde kaarten, en deels dezelfde inhoud:
  ventileren en verwarmen kwamen in allebei terug. Wie de pagina afscrolde,
  las twee keer hetzelfde met een ander opschrift.

  Nu is het één genummerde reeks in de vorm van "de eerste 48 uur" op
  /waterschade, in de volgorde waarin een bouwheer ze nodig heeft: van het
  moment waarop hij mag beginnen tot de meting die beslist of hij klaar is.
*/
const praktijk = [
  {
    Icon: CalendarCheckIcon,
    title: "Begin pas als de chape mag drogen",
    desc: "Een verse zandcementchape moet eerst uitharden; wie meteen hard begint te drogen, riskeert krimpscheuren of een zwakke toplaag. Vraag uw chapeur vanaf wanneer u actief mag drogen — vaak na enkele dagen tot een week. Pleisterwerk kan meestal sneller aan de beurt, zodra het oppervlak hard is.",
  },
  {
    Icon: HouseIcon,
    title: "Houd de ruimte dicht",
    desc: "Een condensdroger haalt het vocht uit de lucht in de ruimte. Staan ramen of deuren open, dan droogt hij de buitenlucht mee en schiet de droging nauwelijks op. Verlucht alleen kort als het echt nodig is, bijvoorbeeld na werken met lijm of verf.",
  },
  {
    Icon: WindIcon,
    title: "Zet er een ventilator bij",
    desc: "Boven een verse chape hangt een laag verzadigde lucht. Een radiaalventilator blaast die weg, zodat er telkens droge lucht bij de vloer komt. Dat scheelt dagen op dezelfde huurtermijn.",
  },
  {
    Icon: ThermoIcon,
    title: "Verwarm bij minder dan 15 °C",
    desc: "Een condensdroger werkt het best tussen ongeveer 15 en 25 °C. Daaronder neemt de lucht weinig vocht op en geeft de chape haar water traag af. Een elektrische bouwkachel met thermostaat brengt de werf op temperatuur en houdt de droging op gang.",
  },
  {
    Icon: GaugeIcon,
    title: "Volg de wateropvang",
    desc: "Hoeveel water er per dag uit het toestel komt, vertelt u waar u staat. Zakt de opbrengst, dan nadert de chape haar evenwicht — en dat is het moment om te laten meten.",
  },
  {
    Icon: LayersIcon,
    title: "Meet het restvocht vóór de vloer erop gaat",
    desc: "Parket, pvc en tegels verdragen maar een beperkte hoeveelheid restvocht; te vroeg leggen kan uitzetten, loskomen of schimmel onder de vloer geven. De gangbare meting is de CM-meting (carbidmethode), en de toegelaten waarde verschilt per soort chape, per vloerbekleding en met of zonder vloerverwarming. Vraag uw vloerlegger welke grens hij hanteert; wij meten bij de start en bij de oplevering.",
  },
];

/*
  Twee antwoorden zijn hier rechtgezet. "Hoe lang moet mijn chape drogen"
  zei 4 tot 8 weken (zie hierboven), en "de ideale luchtvochtigheid voor
  vloerders" was "onder 2 %" — dat haalt luchtvochtigheid en restvocht in de
  chape door elkaar, en een vaste grens zonder soort chape of vloer is sowieso
  niet te geven. De vloerlegger bepaalt die grens; wij noemen er geen.
*/
const faqs = [
  {
    q: "Hoe lang moet mijn chape drogen voor ik kan vloeren?",
    a: `Zonder hulp rekent men bij zandcementchape als vuistregel ongeveer een week per centimeter voor de eerste vier centimeter, en daarna twee weken per extra centimeter, voor 6 cm dus zo'n ${natuurlijkeChapeWeken(6)} weken, onder goede omstandigheden. Met een bouwdroger lopen onze chapepakketten ${opsomming(CHAPE)}. Of u effectief kunt vloeren, beslist een restvochtmeting, niet de kalender.`,
  },
  {
    q: "Hoe lang moet pleisterwerk drogen voor ik kan schilderen?",
    a: `Met een bouwdroger lopen onze pleisterpakketten ${opsomming(PLEISTER)}. Pleisterwerk is droog als het overal gelijkmatig licht van kleur is en de meting dat bevestigt. Vraag uw schilder of verfleverancier welke vochtwaarde de verf verdraagt die hij gebruikt.`,
  },
  {
    q: "Welk restvocht moet de chape hebben voor parket of tegels?",
    a: "Dat hangt af van het soort chape (zandcement of anhydriet), van de vloerbekleding en van eventuele vloerverwarming. De grens wordt uitgedrukt in procent restvocht en gemeten met een CM-meting (carbidmethode). Vraag uw vloerlegger welke waarde hij hanteert en laat hem die meting doen of aanvaarden vóór hij legt.",
  },
  {
    q: "Mag ik de ramen openzetten terwijl de bouwdroger draait?",
    a: "Liefst niet. Een condensdroger haalt het vocht uit de lucht in de ruimte; staan ramen of deuren open, dan droogt hij ook de buitenlucht die binnenkomt en schiet de droging nauwelijks op. Houd de ruimte dicht en verlucht alleen kort als het echt nodig is, bijvoorbeeld na werken met lijm of verf.",
  },
  {
    q: "Mag ik de vloerverwarming gebruiken om de chape te drogen?",
    a: "Alleen volgens het opstookprotocol van uw installateur of chapeur: langzaam en in stappen opwarmen. Te snel of te heet stoken kan scheuren geven. De bouwdroger kan ondertussen gewoon blijven draaien en voert het vocht af dat daarbij vrijkomt.",
  },
  { q: "Kan ik meerdere machines combineren?", a: "Ja, voor grote werven leveren wij meerdere machines. Bel voor een voorstel." },
  {
    q: "Hoe werkt de gratis vochtmeting?",
    a: `Bij de start en bij de oplevering meten wij de restvochtigheid; dat zit in elk pakket. Heeft u een ondertekend verslag met alle meetwaarden nodig, voor uw vloerlegger of uw bouwdossier, dan kunt u een officieel vochtrapport bijnemen${RAPPORT ? ` voor ${euro(RAPPORT.price)} excl. btw` : ""}.`,
  },
];

/**
 * De werven die we onder de vragen tonen: drie nieuwbouwdossiers waarin
 * pleister- en chapewerk moest drogen. `getRealisatie` kan `undefined` geven
 * wanneer een dossier uit de lijst verdwijnt; die valt dan stil weg in plaats
 * van de pagina te breken.
 */
const REFERENTIES = ["mnr-l-hasselt", "mevr-j-j-kontich", "mnr-k-putte"]
  .map(getRealisatie)
  .filter((r): r is Realisatie => !!r);

const verderLezen: LeesGroep[] = [
  /*
    Hier stond "Zo pakten we het aan" met dezelfde drie realisaties als
    `REFERENTIES`. Die staan nu met hun foto onder de vragen; een tweede,
    kale linklijst naar diezelfde drie pagina's voegde niets toe.
  */
  {
    kop: "Wat drogen kost en hoe lang het duurt",
    links: [
      { to: "/gids/hoe-lang-moet-chape-drogen", label: "Gids: hoe lang moet een chape drogen?" },
      { to: "/gids/hoe-lang-moet-pleisterwerk-drogen", label: "Gids: hoe lang moet pleisterwerk drogen?" },
      { to: "/hoe-drogen-werkt", label: "Hoe een bouwdroger het vocht uit een woning haalt" },
      { to: "/drooggarantie", label: "Onze 100 % drooggarantie op een berekend pakket" },
    ],
  },
  {
    kop: "De toestellen voor chape en pleister",
    links: [
      { to: toestelPad("ttk350"), toestel: "ttk350", label: "Performance", sub: "Het standaardtoestel voor een nieuwbouwwoning." },
      { to: toestelPad("radiaal2250"), toestel: "radiaal2250", label: "Radiaalventilator voor chapedroging", sub: "Blaast vlak over de vloer." },
      { to: toestelPad("teddh30"), toestel: "teddh30", label: "Elektrische bouwkachel voor een koude werf", sub: "Onder 15 °C droogt het traag." },
    ],
  },
  {
    kop: "Plannen en prijzen",
    links: [
      { to: "/verhuur/calculator", label: "Bereken uw pakket op oppervlakte en chapedikte" },
      { to: "/prijzen", label: "Wat kost een bouwdroger huren?" },
      { to: "/bouwdroger-huren-antwerpen", label: "Bouwdroger huren in de provincie Antwerpen" },
      { to: "/bouwdroger-huren-limburg", label: "Bouwdroger huren in Limburg" },
    ],
  },
];

const NieuwbouwPage = () => (
  <div className="v3c nb-page">
    <PageMeta
      {...SEO.nieuwbouw}
      jsonLd={[
        serviceSchema({
          name: "Chape en pleisterwerk drogen",
          description:
            "Actieve droging van verse chape en pleisterwerk in nieuwbouw, zodat vloerder en schilder weken vroeger kunnen starten.",
          path: "/nieuwbouw-drogen",
          serviceType: "Bouwdroging",
        }),
        /*
          De vragen onderaan deze pagina, ook machineleesbaar. Zelfde tekst
          als wat zichtbaar staat, dus schema en pagina blijven gelijk.
        */
        faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Chape en pleisterwerk drogen", path: "/nieuwbouw-drogen" },
        ]),
      ]}
    />

    <V3Header lightAfter={420} />

    <main>

    {/* ================= HERO ================= */}
    <div className="redtop">
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="kick">Nieuwbouw &amp; verbouwing</span>
            <h1>Chape en pleisterwerk drogen in weken, niet in maanden.</h1>
            <p>
              In een nieuwbouwwoning zit al snel duizend liter water: in de chape, in het
              pleisterwerk, in het metselwerk. Dat moet eruit voor de vloerder en de schilder
              kunnen starten. Een bouwdroger, een ventilator en bij koud weer een bouwkachel
              halen het er gecontroleerd uit, in weken in plaats van maanden.
            </p>
            <div className="hcta">
              <Link className="btn btn-white" to="/verhuur/calculator">
                Bereken uw droogpakket
                <ArrowRightIcon />
              </Link>
              <a className="btn btn-ghost" href={`tel:${CONTACT.phoneE164}`}>
                <PhoneIcon /> {CONTACT.phoneLocal}
              </a>
            </div>
          </div>
          <div className="hero-vis">
            <img
              className="framed"
              style={{ objectPosition: "50% 62%" }}
              src="/vernast/case-chape-v2.webp"
              alt="Bouwdroger aan het werk op een verse chape in een nieuwbouwwoning"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
            <div className="fbadge" style={{ bottom: "60px", left: "-6%" }}>
              <span className="ic"><CheckIcon size={15} /></span>
              <div>
                {kortsteTermijn} tot {langsteTermijn} weken
                <small>in plaats van ± {natuurlijkeChapeWeken(6)} weken natuurlijk</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* ================= ZONDER / MET ================= */}
    <section className="sw">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Het verschil</span>
          <h2 className="sec">Natuurlijk drogen duurt zo lang als het weer beslist.</h2>
          <p className="lede">
            Een chape van 6 cm die op zichzelf droogt, doet daar onder goede omstandigheden zo'n{" "}
            {natuurlijkeChapeWeken(6)} weken over. In november zijn die omstandigheden er niet, en
            dan wordt het wachten tot het voorjaar. Actief drogen haalt die onzekerheid eruit.
          </p>
        </div>
        <div className="vs">
          <Reveal from="up" className="vscard">
            <div className="vshead">
              <span><XIcon size={17} /></span>
              <h3>Zonder bouwdroger</h3>
            </div>
            <ul>
              {zonder.map((item) => (
                <li key={item}>
                  <XIcon size={14} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal from="up" delay={0.08} className="vscard goed">
            <div className="vshead">
              <span><CheckIcon size={17} strokeWidth={3} /></span>
              <h3>Met een Vernast-droogpakket</h3>
            </div>
            <ul>
              {met.map((item) => (
                <li key={item}>
                  <CheckIcon size={14} strokeWidth={3} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>

    {/*
      DROOGTIJDEN — de vraag waarmee mensen hier binnenkomen ("hoe lang chape
      drogen", "droogtijd pleisterwerk"). Een echte <table>, zodat een
      zoekmachine of AI-assistent de dikte en de termijn aan elkaar kan
      koppelen. De kolom "met bouwdroger" is de catalogus; de kolom "zonder" is
      uitdrukkelijk een vuistregel.
    */}
    <section className="sr" id="droogtijden">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Droogtijd per dikte</span>
          <h2 className="sec">Hoe lang moet chape drogen?</h2>
          <p className="lede">
            Een zandcementchape wordt nat aangebracht: er zit meer water in dan het cement nodig
            heeft om uit te harden, en dat overschot moet er via het oppervlak weer uit. Hoe dikker
            de laag, hoe langer de weg voor het vocht onderin. Daarom groeit de droogtijd sneller
            dan de dikte: de laatste centimeters duren het langst.
          </p>
          <p className="lede">
            Met een bouwdroger houdt u de lucht boven de chape droog, zodat het vocht blijft
            uittreden in plaats van te blijven hangen. Onze chapepakketten zijn opgebouwd op de
            dikte van de laag; de huurtermijn hieronder is wat elk pakket voorziet.
          </p>
        </div>

        <div className="tblwrap">
          <div className="tblscroll">
            <table className="tbl">
              <caption className="sr-only">
                Droogtijd van chape per dikte, met bouwdroger en zonder bouwdroger
              </caption>
              <thead>
                <tr>
                  <th scope="col">Chapedikte</th>
                  <th scope="col">Met bouwdroger (huurtermijn pakket)</th>
                  <th scope="col">Zonder bouwdroger (richtwaarde)</th>
                </tr>
              </thead>
              <tbody>
                {CHAPE.map((r) => (
                  <tr key={r.dikte}>
                    <th scope="row">{r.dikte} cm</th>
                    <td>{termijnLabel(r)}</td>
                    <td>± {natuurlijkeChapeWeken(r.dikte)} weken</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="tblnote">
          De richtwaarde zonder bouwdroger volgt de gangbare vuistregel voor zandcementchape:
          ongeveer een week per centimeter voor de eerste vier centimeter, daarna twee weken per
          extra centimeter, in een verluchte ruimte rond 20 °C. In een koude of vochtige periode
          duurt het langer. Anhydriet- en gietvloeren volgen andere regels; volg daar de
          richtlijn van de fabrikant. Geen van beide kolommen vervangt een meting.
        </p>
      </div>
    </section>

    {/* ================= PLEISTERWERK ================= */}
    <section className="sw">
      <div className="wrap split">
        <div>
          <span className="kick">En de muren</span>
          <h2 className="sec">Hoe lang moet pleisterwerk drogen?</h2>
          <p className="lede">
            Pleisterwerk is dunner dan chape, maar het beslaat alle muren en plafonds. In een
            nieuwbouw komt dat vocht bovenop wat de chape al afgeeft, en precies dan zit de lucht
            in huis snel verzadigd: de muren drogen dan nauwelijks nog. Zeker in herfst en winter
            kan natuurlijk drogen daardoor veel langer duren dan de dikte doet vermoeden.
          </p>
          <p className="lede">
            Schildert of behangt u te vroeg, dan kan de verf bladderen of vlekken, en sluit u
            vocht in de muur op. Moeten pleisterwerk en chape samen drogen? Kies in de{" "}
            <Link to="/verhuur/calculator">Calculator</Link> "pleisterwerk + chape": dat pakket is
            berekend op muren en vloer tegelijk.
          </p>
          <div className="chips">
            <span>Gipspleister</span>
            <span>Cementpleister</span>
            <span>Pleister + chape samen</span>
          </div>
        </div>
        <div className="split-vis" style={{ alignItems: "stretch", display: "block" }}>
          <div className="tblwrap" style={{ marginTop: 0 }}>
            <div className="tblscroll">
              <table className="tbl">
                <caption className="sr-only">Huurtermijn van een pleisterpakket per pleisterdikte</caption>
                <thead>
                  <tr>
                    <th scope="col">Pleisterdikte</th>
                    <th scope="col">Huurtermijn pakket</th>
                  </tr>
                </thead>
                <tbody>
                  {PLEISTER.map((r) => (
                    <tr key={r.dikte}>
                      <th scope="row">{r.dikte} cm</th>
                      <td>{termijnLabel(r)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="tblnote">
            Pleisterwerk is droog als het overal gelijkmatig licht van kleur is en de meting dat
            bevestigt. Vraag uw schilder welke vochtwaarde de verf verdraagt die hij gebruikt.
          </p>
        </div>
      </div>
    </section>

    {/* ================= PAKKETTEN ================= */}
    <section className="sr" id="pakketten">
      <div className="wrap">
        <div className="sec-head mid">
          <span className="kick">Welk toestel</span>
          <h2 className="sec">Kies het toestel dat bij uw woning past.</h2>
          <p className="lede">
            Voor een standaard gezinswoning is de Performance het toestel dat we het vaakst
            leveren. Gaat het om een volledige woning, dan wordt het een droogpakket: de Calculator
            rekent uw volume en chapedikte door naar de juiste combinatie, met ventilator en
            bouwkachel waar uw werf die nodig heeft.
          </p>
        </div>
        <Pakketkaarten />
        <div className="note">
          <b>Liever zelf ophalen?</b> Losse bouwdrogers, ventilatoren en bouwkachels haalt u aan
          afhaalprijs op in ons <Link to="/verhuur/afhalen">afhaalpunt langs de A12 in
          Aartselaar</Link>. De vochtmeting en de drooggarantie horen dan niet bij de huur, maar
          het toestel is hetzelfde.
        </div>
      </div>
    </section>

    {/*
      IN DE PRAKTIJK — zes genummerde kaarten in de vorm van "de eerste 48 uur"
      op /waterschade (`.stapkaarten`/`.stk`). Deze sectie staat vlak boven de
      vragen omdat ze dezelfde rol speelt: wie tot hier las, weet wat het kost
      en hoe lang het duurt, en wil nu weten wat hij zelf moet doen.
    */}
    <section className="sw" id="praktijk">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">In de praktijk</span>
          <h2 className="sec">Zes dingen die de droogtijd bepalen.</h2>
          <p className="lede">
            Het toestel is maar één factor. Wanneer u start, of de ruimte dicht blijft, hoe warm
            het is en wat u uiteindelijk meet, bepalen samen of die chape in twee of in vijf weken
            klaar is. Hieronder staan ze in de volgorde waarin u ze nodig heeft.
          </p>
        </div>
        <div className="stapkaarten">
          {praktijk.map(({ Icon, title, desc }, i) => (
            <Reveal from="up" delay={(i % 3) * 0.08} className="stk" key={title}>
              <span className="stkic"><Icon size={21} /></span>
              <span className="stknr">{String(i + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <FaqBlok
      titel="Wat bouwheren en aannemers ons vragen."
      vragen={faqs}
      sleutel="nb-faq"
    />

    {/*
      REFERENTIES — onder de vragen, in het wit.

      De pagina wisselde rood en wit af tot aan de vragen en liep daarna leeg op
      een linklijst. Drie werven met de foto van de werf zelf bewijzen wat de
      tekst hierboven belooft, en de slotplaat staat in dezelfde witte sectie:
      wie de vragen gelezen heeft en de werven gezien heeft, is klaar om te
      rekenen. Een lege strook ertussen brak dat moment.
    */}
    <section className="sw" id="referenties">
      <div className="wrap">
        <div className="sec-head mid">
          <span className="kick">Uit de praktijk</span>
          <h2 className="sec">Nieuwbouwwerven die we eerder droogden.</h2>
          <p className="lede">
            Drie dossiers met de foto's van de werf zelf: wat er moest drogen, welke toestellen er
            stonden en hoe lang het duurde.
          </p>
        </div>
        <div className="refs">
          {REFERENTIES.map((r, i) => (
            <Reveal from="up" delay={(i % 3) * 0.08} key={r.slug}>
              <Link className="rz" to={`/realisaties/${r.slug}`}>
                <img
                  src={r.kaart}
                  alt={r.kaartAlt}
                  width={640}
                  height={420}
                  loading="lazy"
                  decoding="async"
                />
                <div className="rzt">
                  <span className="rzl">{r.locatie}</span>
                  <h3>{r.titel}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="tblnote" style={{ textAlign: "center" }}>
          <Link to="/realisaties?soort=bouwvocht" style={{ fontWeight: 600 }}>
            Alle nieuwbouwprojecten bekijken
          </Link>
        </p>
        <div className="manband">
          <div className="mb-t">
            <span className="mbk">Klaar om te starten</span>
            <h3>Geef ons uw oppervlakte en uw chapedikte, wij geven u een datum.</h3>
            <p>
              De Calculator rekent uw volume door naar een pakket met de juiste toestellen en de
              juiste termijn. U kiest zelf de leverdag; wij plaatsen en meten.
            </p>
            <div className="mb-cta">
              <Link className="btn btn-white" to="/verhuur/calculator">
                Bereken uw droogpakket
                <ArrowRightIcon />
              </Link>
              <a className="btn btn-ghost" href={`tel:${CONTACT.phoneE164}`}>
                <PhoneIcon /> {CONTACT.phoneLocal}
              </a>
            </div>
          </div>
          <img
            className="mb-man"
            src="/vernast/man-klembord-pen.webp"
            alt="Vernast technicus noteert de meetresultaten"
            width={600}
            height={900}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>

    <VerderLezen
      titel="Verder lezen over chape en pleisterwerk drogen"
      groepen={verderLezen}
      achtergrond="sr"
    />

    <ContactBlok
      kicker="Een vraag over uw werf?"
      titel="Twijfelt u over de termijn of het pakket?"
      lede="Geef ons uw oppervlakte, de chapedikte en wanneer de chapeur klaar is. U krijgt binnen één werkdag een voorstel van een droogspecialist."
      onderwerpen={[
        "Advies over chape drogen",
        "Advies over pleisterwerk drogen",
        "Pleisterwerk en chape samen",
        "Prijs en leverdatum",
        "Iets anders",
      ]}
      placeholder="Bv. nieuwbouw 140 m², chape van 6 cm geplaatst op 3 november, vloerder komt begin december."
      /*
        Wit, niet rood: de sectie erboven ("verder lezen") is rood, en twee
        rode blokken op elkaar laten de afwisseling van de hele pagina
        stilvallen.
      */
      achtergrond="wit"
    />

    </main>

    <V3Footer />
  </div>
);

export default NieuwbouwPage;

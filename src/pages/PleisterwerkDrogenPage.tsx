import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import Reveal from "@/components/Reveal";
import Pakketkaarten from "@/components/content/Pakketkaarten";
import ContactBlok from "@/components/content/ContactBlok";
import FaqBlok from "@/components/content/FaqBlok";
import VerderLezen, { type LeesGroep } from "@/components/VerderLezen";
import { ArrowRightIcon, BrushIcon, CalendarCheckIcon, CheckIcon, HouseIcon, PhoneIcon } from "@/components/home-v3/icons";
import { GaugeIcon, ThermoIcon, WindIcon, XIcon } from "@/components/content/icons";
import { SEO } from "@/data/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { euro } from "@/data/tarieflijst";
import { EXTRAS, toestelPad } from "@/data/verhuur";
import { droogtermijnen, termijnLabel, termijnZonderDikte } from "@/lib/droogtijden";
import { getRealisatie, type Realisatie } from "@/data/realisaties";
import { CONTACT } from "@/lib/site";
import "@/styles/v3-content.css";

/**
 * Pleisterwerk drogen als eigen dienstpagina, naast /chape-drogen en het
 * combipakket op /nieuwbouw-drogen.
 *
 * Waarom gesplitst: wie zijn schilder ziet wachten zoekt op pleisterwerk, niet
 * op chape, en omgekeerd. Eén pagina die allebei behandelde stond voor allebei
 * half, en kon in een zoekresultaat maar één van de twee titels dragen.
 *
 * Het verschil met de gids: deze pagina verkoopt de dienst (wat wij doen, wat
 * er in het pakket zit, wanneer wij komen); de gids legt de materie uit
 * (waarom het vocht in huis blijft hangen, gips tegenover cement, meten voor
 * het schilderen). De termijntabel staat hier als huurtermijn van het pakket,
 * niet als droogtijdenles.
 */

/* Huurtermijnen uit de catalogus, nooit overgetypt. Zie lib/droogtijden.ts. */
const PLEISTER = droogtermijnen("pleister");
const BEIDE = termijnZonderDikte("beide");
const kortsteTermijn = Math.min(...PLEISTER.map((r) => r.min));
const langsteTermijn = Math.max(...PLEISTER.map((r) => r.max));

/** "1 cm: 2 weken, 2 cm: 3 weken en 3 cm: 4 weken" voor lopende tekst. */
function opsomming(rijen: typeof PLEISTER): string {
  const delen = rijen.map((r) => `${r.dikte} cm: ${termijnLabel(r)}`);
  if (delen.length <= 1) return delen.join("");
  return `${delen.slice(0, -1).join(", ")} en ${delen[delen.length - 1]}`;
}

/** Het ondertekende vochtrapport is een betalende optie, geen standaard. */
const RAPPORT = EXTRAS.find((x) => x.k === "rapport");

const zonder = [
  "De muren geven af tot de lucht verzadigd is, en dan stopt het",
  "Condens op ramen en koude buitenmuren, soms schimmel in de hoeken",
  "De schilder kan niet starten en schuift u door naar zijn volgende werf",
  "Te vroeg geschilderd: bladderende verf of vlekken, en opnieuw beginnen",
];

const met = [
  `Een huurtermijn van ${kortsteTermijn} tot ${langsteTermijn} weken, volgens de laagdikte`,
  "Het vocht verlaat het gebouw in plaats van neer te slaan op het glas",
  "Een einddatum die u aan uw schilder of behanger kunt doorgeven",
  "Meting van de restvochtigheid bij de start en bij de oplevering",
];

/*
  De droging zoals de klant ze meemaakt, van leverdag tot ophaling. Wat een
  bouwdroger technisch doet, staat op /hoe-drogen-werkt; dat hier herhalen zou
  die pagina beconcurreren op dezelfde zoekvraag.
*/
const stappen = [
  {
    Icon: CalendarCheckIcon,
    title: "U kiest de leverdag",
    desc: "Zodra het pleisterwerk gezet is en het oppervlak hard aanvoelt, boekt u de datum. Wij leveren in heel Vlaanderen, meestal binnen enkele werkdagen, en u krijgt een tijdvenster in plaats van een hele dag wachten.",
  },
  {
    Icon: GaugeIcon,
    title: "Voormeting vóór er iets draait",
    desc: "De technieker legt de restvochtigheid van de muren en de luchtvochtigheid in de ruimte vast. Dat startpunt is de reden dat wij een einddatum kunnen geven in plaats van een inschatting.",
  },
  {
    Icon: HouseIcon,
    title: "Plaatsen en instellen",
    desc: "Hij zet de toestellen centraal in de ruimte, vrij van de muren, sluit de condensafvoer aan en stelt de streefwaarde in. Daarna draait alles dag en nacht; de hygrostaat schakelt zelf terug zodra de lucht droog genoeg is.",
  },
  {
    Icon: WindIcon,
    title: "Lucht in beweging",
    desc: "Tegen een verse muur blijft een laag verzadigde lucht staan, en in hoeken en achter deuren beweegt helemaal niets. Een ventilator veegt die laag weg, zodat droge lucht het vocht kan oppikken.",
  },
  {
    Icon: ThermoIcon,
    title: "Warmte als de werf koud staat",
    desc: "Een condensdroger werkt het best tussen ongeveer 15 en 25 °C. Staat uw werf kouder, dan komt er een elektrische bouwkachel met thermostaat bij. Die verwarmt de ruimte gelijkmatig, en niet één muur van dichtbij.",
  },
  {
    Icon: BrushIcon,
    title: "Nameting en ophaling",
    desc: "Op het einde meten we opnieuw. Is de waarde in orde, dan halen wij de toestellen op en kan uw schilder of behanger starten. Is ze dat niet, dan verlengen wij kosteloos tot ze wel in orde is.",
  },
];

const faqs = [
  {
    q: "Wat kost het drogen van pleisterwerk?",
    a: "Dat hangt af van het volume van de ruimte en van de laagdikte: die twee bepalen hoeveel toestellen er nodig zijn en hoe lang ze blijven staan. De droogcalculator vraagt uw oppervlakte en de dikte van de laag en toont meteen het pakket met de prijs, inclusief levering, installatie en de metingen. Alle dag- en weektarieven staan ook los op onze prijzenpagina.",
  },
  {
    q: "Wanneer mag de bouwdroger aan na het pleisteren?",
    a: "Zodra het oppervlak hard is, doorgaans sneller dan bij een chape. Wat u in die eerste dagen niet doet, is keihard drogen of een kachel vlak voor een muur zetten: dan droogt het oppervlak uit terwijl de laag eronder nog nat is, en dat geeft krimpscheuren of een poederige bovenlaag. Verwarm gelijkmatig en laat het toestel daarna dag en nacht doorlopen.",
  },
  {
    q: "Moet ik de ramen openzetten terwijl de droger draait?",
    a: "Nee, houd ze dicht. Een condensdroger droogt de lucht in een afgesloten ruimte; staat er een raam open, dan haalt hij voortdurend nieuwe, vochtige buitenlucht binnen en droogt hij de straat in plaats van uw muren. Ventileren helpt alleen als de buitenlucht droger is dan de binnenlucht, en dat is in België een groot deel van het jaar niet zo.",
  },
  {
    q: "Wanneer mag de schilder of de behanger komen?",
    a: "Als een meting bevestigt dat de laag droog is, niet wanneer de muur egaal licht oogt. Verf op een te natte ondergrond kan bladderen of vlekken, en behang sluit het restvocht helemaal op: daar groeit schimmel achter die u pas maanden later ziet. Vraag uw schilder welke waarde hij wil zien en welke eerste laag hij gebruikt; een dampopen grondlaag laat de muur verder ademen.",
  },
  {
    q: "Kan ik pleisterwerk en chape samen laten drogen?",
    a: BEIDE
      ? `Ja, en in een nieuwbouw is dat ook de normale gang van zaken. Daarvoor bestaat een pakket dat vloer en muren samen droogt, met een huurtermijn van ${termijnLabel(
          BEIDE,
        )}. U huurt dan één keer en meet één keer in plaats van twee droogrondes na elkaar. Samen drogen vraagt wel meer capaciteit, want er komt in dezelfde ruimte veel meer water vrij; de Calculator rekent dat uit.`
      : "Ja, en in een nieuwbouw is dat ook de normale gang van zaken. Samen drogen vraagt wel meer capaciteit dan een van de twee apart, want er komt in dezelfde ruimte veel meer water vrij. De Calculator rekent uit welk pakket daarbij hoort.",
  },
  {
    q: "Wat als mijn muren op de einddatum nog niet droog zijn?",
    a: "Dan verlengen wij kosteloos tot ze dat wel zijn. Dat is de Drooggarantie, en ze geldt op elk pakket dat via de Calculator berekend en met levering en installatie geboekt is. Ze steunt op de meting bij de start en bij de oplevering: zonder die twee metingen is er niets om een einddatum aan af te toetsen.",
  },
  {
    q: "Kan ik de toestellen zelf afhalen?",
    a: "Ja, losse bouwdrogers, ventilatoren en bouwkachels haalt u op in ons afhaalpunt langs de A12 in Aartselaar. U betaalt dan geen transport en geen installatie, maar u bepaalt zelf de opstelling en de vochtmeting en de Drooggarantie zitten niet bij de huur. Het toestel zelf is hetzelfde.",
  },
  {
    q: "Hoe lang moet pleisterwerk drogen?",
    a: `Met een droogpakket lopen onze pleistertermijnen ${opsomming(
      PLEISTER,
    )}. Zonder droger valt er geen termijn te beloven: dan bepaalt de luchtvochtigheid in uw gebouw het tempo, en in een koud, dichtgemaakt huis staat de droging stil in plaats van traag te lopen. De volledige uitleg, met het verschil tussen gips- en cementpleister, staat in onze gids over de droogtijd van pleisterwerk.`,
  },
];

/* Drie werven waar pleisterwerk moest drogen. `getRealisatie` geeft undefined
   zodra een dossier uit de lijst verdwijnt; die valt dan stil weg. */
const REFERENTIES = ["dhr-p-merksem", "mevr-j-berchem", "mevr-g-b-sint-pieters-woluwe"]
  .map(getRealisatie)
  .filter((r): r is Realisatie => !!r);

const verderLezen: LeesGroep[] = [
  {
    kop: "Hoe lang het duurt en waarom",
    links: [
      { to: "/gids/hoe-lang-moet-pleisterwerk-drogen", label: "Gids: hoe lang moet pleisterwerk drogen?" },
      { to: "/hoe-drogen-werkt", label: "Hoe een bouwdroger het vocht uit een woning haalt" },
      { to: "/drooggarantie", label: "Onze 100 % drooggarantie op een berekend pakket" },
      { to: "/nieuwbouw-drogen", label: "Chape en pleisterwerk samen drogen in nieuwbouw" },
    ],
  },
  {
    kop: "De toestellen voor een pleisterdroging",
    links: [
      { to: toestelPad("ttk350"), toestel: "ttk350", label: "Performance", sub: "Het standaardtoestel voor een nieuwbouwwoning." },
      { to: toestelPad("radiaal2250"), toestel: "radiaal2250", label: "Ventilator om de lucht in beweging te houden", sub: "Tegen stilstaande lucht in hoeken." },
      { to: toestelPad("teddh30"), toestel: "teddh30", label: "Elektrische bouwkachel voor een koude werf", sub: "Onder 15 °C droogt het traag." },
    ],
  },
  {
    kop: "Plannen en prijzen",
    links: [
      { to: "/verhuur/calculator", label: "Bereken uw pakket op oppervlakte en laagdikte" },
      { to: "/prijzen", label: "Wat kost een bouwdroger huren?" },
      { to: "/levering", label: "Levering en installatie in heel Vlaanderen" },
      { to: "/afhalen", label: "Zelf afhalen in Aartselaar" },
    ],
  },
];

const PleisterwerkDrogenPage = () => (
  <div className="v3c nb-page">
    <PageMeta
      {...SEO.pleisterwerkDrogen}
      jsonLd={[
        serviceSchema({
          name: "Pleisterwerk drogen",
          description:
            "Actieve droging van vers pleisterwerk met bouwdroger, ventilator en meting, zodat de schilder weken vroeger kan starten.",
          path: "/pleisterwerk-drogen",
          serviceType: "Bouwdroging",
        }),
        faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Pleisterwerk drogen", path: "/pleisterwerk-drogen" },
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
            <span className="kick">Toepassing &middot; pleisterwerk</span>
            <h1>Pleisterwerk drogen, zodat de schilder niet staat te wachten.</h1>
            <p>
              Vers pleisterwerk geeft dagenlang water af aan de lucht. Staat het gebouw dicht, dan
              blijft dat water binnen en stopt de droging zodra de lucht verzadigd is. Wij halen het
              eruit met de juiste toestellen, meten de restvochtigheid bij de start en bij de
              oplevering, en geven u een datum waarop uw schilder kan starten.
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
              src="/vernast/droogproces-nat-pleister.webp"
              alt="Vers gipspleister met donkere vochtzones naast al drogend pleisterwerk"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
            <div className="fbadge" style={{ bottom: "60px", left: "-6%" }}>
              <span className="ic"><CheckIcon size={15} /></span>
              <div>
                {kortsteTermijn} tot {langsteTermijn} weken
                <small>met een droogpakket, naar laagdikte</small>
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
          <h2 className="sec">Het vocht gaat de muur uit, niet vanzelf het huis uit.</h2>
          <p className="lede">
            Een pleisterlaag geeft haar water vlot af; dat is het makkelijke deel. Het moeilijke
            deel is wat er daarna met dat water gebeurt. In een dichtgemaakt gebouw hangt het in de
            lucht tot die verzadigd is, en vanaf dat punt droogt er niets meer.
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

    {/* ================= HUURTERMIJN PER LAAGDIKTE ================= */}
    <section className="sr" id="termijnen">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Huurtermijn per laagdikte</span>
          <h2 className="sec">Welke termijn hoort bij uw pleisterwerk?</h2>
          <p className="lede">
            De dikte van de laag bepaalt de termijn, niet uw oppervlakte: een grotere woning krijgt
            meer toestellen, geen langere huur. Een dubbele laag betekent dubbel zoveel aanmaakwater
            dat door hetzelfde oppervlak naar buiten moet.
          </p>
        </div>

        <div className="tblwrap">
          <div className="tblscroll">
            <table className="tbl">
              <caption className="sr-only">
                Huurtermijn van een pleisterpakket per laagdikte, en van het combipakket met chape
              </caption>
              <thead>
                <tr>
                  <th scope="col">Laagdikte</th>
                  <th scope="col">Met een droogpakket</th>
                  <th scope="col">Waar u die dikte tegenkomt</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{PLEISTER[0]?.dikte} cm</th>
                  <td>{PLEISTER[0] ? termijnLabel(PLEISTER[0]) : ""}</td>
                  <td>De gangbare binnenbepleistering: gips, machinaal in één laag.</td>
                </tr>
                {PLEISTER.slice(1, -1).map((r) => (
                  <tr key={r.dikte}>
                    <th scope="row">{r.dikte} cm</th>
                    <td>{termijnLabel(r)}</td>
                    <td>Een dikkere opbouw of een uitvlaklaag op een muur die niet recht staat.</td>
                  </tr>
                ))}
                {PLEISTER.length > 1 && (
                  <tr>
                    <th scope="row">{PLEISTER[PLEISTER.length - 1].dikte} cm</th>
                    <td>{termijnLabel(PLEISTER[PLEISTER.length - 1])}</td>
                    <td>Zwaar werk in meerdere lagen, zoals een cementering in een natte ruimte.</td>
                  </tr>
                )}
                {BEIDE && (
                  <tr>
                    <th scope="row">Pleister + chape</th>
                    <td>{termijnLabel(BEIDE)}</td>
                    <td>Een nieuwbouw waar muren en vloer tegelijk nat staan, in één pakket.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <p className="tblnote">
          Deze termijnen zijn wat onze pakketten voorzien, inclusief voor- en nameting. Waarom het
          vocht in een dichtgemaakt huis blijft hangen, wat er anders is bij cementgebonden werk en
          wanneer u mag schilderen, staat in{" "}
          <Link to="/gids/hoe-lang-moet-pleisterwerk-drogen">
            onze gids over de droogtijd van pleisterwerk
          </Link>
          . Geen enkele termijn vervangt een meting.
        </p>
      </div>
    </section>

    {/* ================= ZO VERLOOPT HET ================= */}
    <section className="sw" id="werkwijze">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Zo verloopt het</span>
          <h2 className="sec">Van leverdag tot vrijgave van de muren.</h2>
          <p className="lede">
            U hoeft zelf niets op te meten of in te stellen. Dit is wat er gebeurt vanaf het moment
            dat u de datum doorgeeft tot het moment dat uw schilder kan starten.
          </p>
        </div>
        <div className="stapkaarten">
          {stappen.map(({ Icon, title, desc }, i) => (
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

    {/* ================= TOESTELLEN ================= */}
    <section className="sr" id="pakketten">
      <div className="wrap">
        <div className="sec-head mid">
          <span className="kick">Welk toestel</span>
          <h2 className="sec">Het toestel dat bij uw ruimte past.</h2>
          <p className="lede">
            Pleisterwerk beslaat alle muren en plafonds, dus telt het volume van de ruimte en niet
            alleen het aantal vierkante meter muur. De Calculator rekent dat volume door naar de
            juiste combinatie, met een ventilator tegen stilstaande lucht en een bouwkachel als uw
            werf te koud staat.
          </p>
        </div>
        <Pakketkaarten />
        <div className="note">
          <b>Liever zelf ophalen?</b> Losse bouwdrogers, ventilatoren en bouwkachels haalt u aan
          afhaalprijs op in ons <Link to="/verhuur/afhalen">afhaalpunt langs de A12 in
          Aartselaar</Link>. De vochtmeting en de Drooggarantie horen dan niet bij de huur, maar het
          toestel is hetzelfde.
        </div>
      </div>
    </section>

    {/* ================= VRIJGAVE VAN DE MUREN ================= */}
    <section className="sw" id="meting">
      <div className="wrap split">
        <div>
          <span className="kick">De oplevering</span>
          <h2 className="sec">Wanneer mag de schilder komen?</h2>
          <p className="lede">
            Een muur die egaal licht is en droog aanvoelt, kan vanbinnen nog nat zijn. Verf op zo'n
            ondergrond kan bladderen of vlekken, en behang sluit het restvocht helemaal op. Daarom
            beslist een meting en niet de kleur van de muur.
          </p>
          <p className="lede">
            <b>Wij meten bij de start en bij de oplevering.</b> Die twee waarden zitten in elk
            pakket, zodat niemand op gevoel moet beslissen. Heeft u een ondertekend verslag nodig
            voor uw schilder of uw bouwdossier, dan neemt u een officieel vochtrapport bij
            {RAPPORT ? ` voor ${euro(RAPPORT.price)} excl. btw` : ""}.
          </p>
          <p className="lede">
            <b>Uw schilder bepaalt de grens.</b> Hij kent zijn verf en zijn grondlaag; vraag hem
            vooraf welke waarde hij wil zien en of hij dampopen begint. Hoe die meting gebeurt,
            leest u in{" "}
            <Link to="/gids/hoe-lang-moet-pleisterwerk-drogen">
              onze gids over de droogtijd van pleisterwerk
            </Link>
            .
          </p>
          <div className="chips">
            <span>Voormeting</span>
            <span>Nameting</span>
            <span>Vochtrapport op aanvraag</span>
            <span>Drooggarantie</span>
          </div>
        </div>
        <div className="split-vis">
          <img
            className="framed"
            src="/vernast/man-vochtmeter.webp"
            alt="Vernast technicus meet de restvochtigheid van een bepleisterde muur"
            width={700}
            height={700}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>

    <FaqBlok
      titel="Wat bouwheren ons vragen over pleisterwerk drogen."
      vragen={faqs}
      sleutel="pleister-faq"
    />

    {/* ================= REFERENTIES ================= */}
    <section className="sw" id="referenties">
      <div className="wrap">
        <div className="sec-head mid">
          <span className="kick">Uit de praktijk</span>
          <h2 className="sec">Muren die we eerder drooglegden.</h2>
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
            Alle projecten met bouwvocht bekijken
          </Link>
        </p>
        <div className="manband">
          <div className="mb-t">
            <span className="mbk">Klaar om te starten</span>
            <h3>Geef ons uw oppervlakte en uw laagdikte, wij geven u een datum.</h3>
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
      titel="Verder lezen over pleisterwerk drogen"
      groepen={verderLezen}
      achtergrond="sr"
    />

    <ContactBlok
      kicker="Een vraag over uw muren?"
      titel="Twijfelt u over de termijn of het pakket?"
      lede="Geef ons uw oppervlakte, de laagdikte en wanneer de plafonneerder klaar is. U krijgt binnen één werkdag een voorstel van een droogspecialist."
      onderwerpen={[
        "Advies over pleisterwerk drogen",
        "Pleisterwerk en chape samen",
        "Prijs en leverdatum",
        "Iets anders",
      ]}
      placeholder="Bv. nieuwbouw 180 m², gipspleister van 1 cm gezet op 5 november, schilder komt begin december."
      achtergrond="wit"
    />

    </main>

    <V3Footer />
  </div>
);

export default PleisterwerkDrogenPage;

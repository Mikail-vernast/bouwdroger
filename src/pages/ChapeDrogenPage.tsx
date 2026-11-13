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
 * Chape drogen als eigen dienstpagina, naast /pleisterwerk-drogen en het
 * combipakket op /nieuwbouw-drogen.
 *
 * Waarom gesplitst: "chape drogen" en "pleisterwerk drogen" zijn twee
 * zoekvragen van twee verschillende mensen. De bouwheer die zijn vloerlegger
 * ziet wachten, zoekt niet op pleisterwerk, en omgekeerd. Eén pagina die
 * allebei behandelde, stond voor allebei half.
 *
 * Het verschil met de gids: deze pagina verkoopt de dienst (wat wij doen, wat
 * het pakket bevat, wanneer wij komen), de gids legt de materie uit
 * (vuistregels per centimeter, anhydriet, opstookprotocol, CM-meting). De
 * droogtijdtabel staat hier als huurtermijn van het pakket, niet als
 * droogtijdenles; voor dat laatste verwijst de pagina door.
 */

/* Huurtermijnen uit de catalogus, nooit overgetypt. Zie lib/droogtijden.ts. */
const CHAPE = droogtermijnen("chape");
const kortsteTermijn = Math.min(...CHAPE.map((r) => r.min));
const langsteTermijn = Math.max(...CHAPE.map((r) => r.max));
const dikste = CHAPE[CHAPE.length - 1];

/** "5 cm: 2 weken, 6 cm: 3 weken en 7 cm: 4 weken" voor lopende tekst. */
function opsomming(rijen: typeof CHAPE): string {
  const delen = rijen.map((r) => `${r.dikte} cm: ${termijnLabel(r)}`);
  if (delen.length <= 1) return delen.join("");
  return `${delen.slice(0, -1).join(", ")} en ${delen[delen.length - 1]}`;
}

/** Het ondertekende vochtrapport is een betalende optie, geen standaard. */
const RAPPORT = EXTRAS.find((x) => x.k === "rapport");

const zonder = [
  "Wachten tot het weer meewerkt, en in de winter nog langer",
  "De vloerlegger schuift u door naar zijn volgende werf",
  "Vocht trekt in plinten, deurkasten en wat er al geplaatst staat",
  "Niemand weet wanneer de vloer klaar is: er wordt niet gemeten",
];

const met = [
  `Een huurtermijn van ${kortsteTermijn} tot ${langsteTermijn} weken, volgens de dikte van uw chape`,
  "Een einddatum die u aan uw vloerlegger kunt doorgeven",
  "Vochtmeting bij de start en bij de oplevering",
  "Niet droog op de einddatum? Dan verlengen wij kosteloos",
];

/*
  De droging zoals ze bij de klant verloopt, in de volgorde waarin hij ze
  meemaakt. Niet wat een bouwdroger technisch doet: dat staat op
  /hoe-drogen-werkt, en het herhalen zou deze pagina met die pagina laten
  botsen op dezelfde zoekvraag.
*/
const stappen = [
  {
    Icon: CalendarCheckIcon,
    title: "U kiest de leverdag",
    desc: "Zodra uw chapeur zegt dat de vloer actief mag drogen, boekt u de datum. Wij leveren in heel Vlaanderen, meestal binnen enkele werkdagen, en u krijgt een tijdvenster in plaats van een hele dag wachten.",
  },
  {
    Icon: GaugeIcon,
    title: "Voormeting vóór er iets draait",
    desc: "De technieker legt de restvochtigheid van de chape en de luchtvochtigheid in de ruimte vast. Dat is het startpunt waartegen de oplevering straks wordt afgezet, en het is de reden dat wij een einddatum kunnen geven.",
  },
  {
    Icon: HouseIcon,
    title: "Plaatsen en instellen",
    desc: "Hij zet de toestellen waar ze hun werk doen, sluit de condensafvoer aan en stelt de streefwaarde in. Vanaf dan draait het toestel dag en nacht en schakelt de hygrostaat zelf terug zodra de lucht droog genoeg is.",
  },
  {
    Icon: WindIcon,
    title: "Lucht over de vloer",
    desc: "Boven een verse chape blijft een laag verzadigde lucht hangen. Een radiaalventilator blaast vlak over het oppervlak zodat er telkens droge lucht bij de vloer komt. Dat scheelt dagen op dezelfde huurtermijn.",
  },
  {
    Icon: ThermoIcon,
    title: "Warmte als de werf koud staat",
    desc: "Een condensdroger werkt het best tussen ongeveer 15 en 25 °C. Ligt uw werf daaronder, dan komt er een elektrische bouwkachel met thermostaat bij, zodat de chape haar water blijft afgeven in plaats van stil te vallen.",
  },
  {
    Icon: LayersIcon,
    title: "Nameting en ophaling",
    desc: "Op het einde meten we opnieuw. Is de waarde in orde, dan halen wij de toestellen op en kan uw vloerlegger komen. Is ze dat niet, dan verlengen wij kosteloos tot ze wel in orde is.",
  },
];

const faqs = [
  {
    q: "Wat kost het drogen van een chape?",
    a: "Dat hangt af van het volume van de ruimte en van de dikte van uw chape: die twee bepalen hoeveel toestellen er nodig zijn en hoe lang ze blijven staan. De droogcalculator vraagt uw oppervlakte en uw chapedikte en toont meteen het pakket met de prijs, inclusief levering, installatie en de metingen. Alle dag- en weektarieven staan ook los op onze prijzenpagina.",
  },
  {
    q: "Wanneer mag de bouwdroger op een verse chape?",
    a: "Niet meteen. Cementchape bindt water chemisch tijdens het uitharden en heeft dat water in die eerste fase nog nodig. Vraag uw chapeur vanaf welke dag u actief mag drogen; dat is doorgaans een kwestie van dagen tot een week. Daarna mag het toestel dag en nacht doorlopen. In onze gids over de droogtijd van chape staat uitgebreid waarom te vroeg drogen krimpscheuren geeft.",
  },
  {
    q: "Hoeveel toestellen heb ik nodig voor mijn oppervlakte?",
    a: "Dat hangt af van het volume, niet van het aantal vierkante meter alleen: een open woning met hoge plafonds vraagt meer dan dezelfde oppervlakte in afgesloten kamers. De Calculator rekent uw volume door naar een pakket met het juiste aantal toestellen. Voor grote werven of een ongewone indeling belt u ons beter even; dan kijken we mee.",
  },
  {
    q: "Wat als mijn chape op de einddatum nog niet droog is?",
    a: "Dan verlengen wij kosteloos tot ze dat wel is. Dat is de Drooggarantie, en ze geldt op elk pakket dat via de Calculator berekend en met levering en installatie geboekt is. Ze steunt op de meting bij de start en bij de oplevering: zonder die twee metingen is er niets om een einddatum aan af te toetsen.",
  },
  {
    q: "Kan ik de toestellen zelf afhalen?",
    a: "Ja, losse bouwdrogers, ventilatoren en bouwkachels haalt u op in ons afhaalpunt langs de A12 in Aartselaar. U betaalt dan geen transport en geen installatie. Daar staat tegenover dat u zelf de opstelling bepaalt en dat de vochtmeting en de Drooggarantie niet bij de huur zitten; het toestel zelf is hetzelfde.",
  },
  {
    q: "Hoeveel stroom verbruikt een bouwdroger op een chape?",
    a: "Een condensbouwdroger uit ons gamma neemt tussen de 0,75 en 1,4 kW op en draait op een gewoon stopcontact van 230 V. Wat dat per dag en over de hele huurtermijn kost, rekenen we voor in onze gids over het stroomverbruik van een bouwdroger. Een elektrische bouwkachel van 20 of 30 kW is iets anders: die vraagt krachtstroom van 400 V.",
  },
  {
    q: "Kan ik verlengen als mijn werf uitloopt?",
    a: "Ja. Verlengen kan online, en u betaalt dan alleen de extra dagen aan hetzelfde tarief. Doe het liefst vóór de einddatum: dan blijven de toestellen voor u gereserveerd in plaats van naar de volgende klant te gaan.",
  },
  {
    q: `Hoe lang moet chape van ${dikste?.dikte ?? 7} cm drogen?`,
    a: `Op eigen kracht is de richtwaarde ongeveer ${natuurlijkeChapeWeken(dikste?.dikte ?? 7)} weken, en dan nog alleen in een verwarmd en geventileerd gebouw. Met een droogpakket lopen onze chapetermijnen ${opsomming(CHAPE)}. De meting beslist of de vloer klaar is, niet de kalender; de volledige uitleg per centimeter staat in onze gids over de droogtijd van chape.`,
  },
];

/* Drie werven waar chape moest drogen. `getRealisatie` geeft undefined zodra
   een dossier uit de lijst verdwijnt; die valt dan stil weg. */
const REFERENTIES = ["mnr-l-hasselt", "mevr-k-wintam", "mnr-k-putte"]
  .map(getRealisatie)
  .filter((r): r is Realisatie => !!r);

const verderLezen: LeesGroep[] = [
  {
    kop: "Hoe lang het duurt en waarom",
    links: [
      { to: "/gids/hoe-lang-moet-chape-drogen", label: "Gids: hoe lang moet een chape drogen?" },
      { to: "/hoe-drogen-werkt", label: "Hoe een bouwdroger het vocht uit een woning haalt" },
      { to: "/drooggarantie", label: "Onze 100 % drooggarantie op een berekend pakket" },
      { to: "/nieuwbouw-drogen", label: "Chape en pleisterwerk samen drogen in nieuwbouw" },
    ],
  },
  {
    kop: "De toestellen voor een chapedroging",
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
      { to: "/levering", label: "Levering en installatie in heel Vlaanderen" },
      { to: "/afhalen", label: "Zelf afhalen in Aartselaar" },
    ],
  },
];

const ChapeDrogenPage = () => (
  <div className="v3c nb-page">
    <PageMeta
      {...SEO.chapeDrogen}
      jsonLd={[
        serviceSchema({
          name: "Chape drogen",
          description:
            "Actieve droging van verse chape met bouwdroger, ventilator en meting, zodat de vloerlegger weken vroeger kan starten.",
          path: "/chape-drogen",
          serviceType: "Bouwdroging",
        }),
        faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Chape drogen", path: "/chape-drogen" },
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
            <span className="kick">Toepassing &middot; chape</span>
            <h1>Chape drogen in weken, met een einddatum op papier.</h1>
            <p>
              In een verse zandcementchape zit meer water dan het cement nodig heeft, en dat
              overschot moet er via het oppervlak weer uit. Wij zetten de juiste toestellen op uw
              werf, stellen de streefwaarde in en meten het restvocht bij de start en bij de
              oplevering. Uw vloerlegger krijgt een datum in plaats van een inschatting.
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
              alt="Bouwdroger en ventilator aan het werk op een verse chape"
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
          <h2 className="sec">Een chape die op zichzelf droogt, volgt het weer.</h2>
          <p className="lede">
            Een vloer van 6 cm doet er onder goede omstandigheden ongeveer{" "}
            {natuurlijkeChapeWeken(6)} weken over. In november zijn die omstandigheden er niet, en
            dan wordt het wachten tot het voorjaar, zonder dat iemand u kan zeggen hoe lang. Actief
            drogen haalt die onzekerheid eruit.
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

    {/* ================= HUURTERMIJN PER DIKTE ================= */}
    <section className="sr" id="termijnen">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Huurtermijn per dikte</span>
          <h2 className="sec">Welke termijn hoort bij uw chapedikte?</h2>
          <p className="lede">
            De dikte van de laag bepaalt de termijn, niet uw oppervlakte: een grotere woning krijgt
            meer toestellen, geen langere huur. Hoe dikker de chape, hoe langer de weg die het
            vocht onderin moet afleggen, en daarom groeit de termijn sneller dan de dikte.
          </p>
        </div>

        <div className="tblwrap">
          <div className="tblscroll">
            <table className="tbl">
              <caption className="sr-only">
                Huurtermijn van een chapepakket per chapedikte, naast de richtwaarde zonder bouwdroger
              </caption>
              <thead>
                <tr>
                  <th scope="col">Chapedikte</th>
                  <th scope="col">Met een droogpakket</th>
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
          De kolom met een droogpakket is wat onze pakketten voorzien, inclusief voor- en nameting.
          De richtwaarde ernaast volgt de gangbare vuistregel voor zandcementchape in een verluchte
          ruimte rond 20 °C. Hoe die vuistregel in elkaar zit, wat er anders is bij anhydriet en
          hoe u opstookt met vloerverwarming, staat in{" "}
          <Link to="/gids/hoe-lang-moet-chape-drogen">onze gids over de droogtijd van chape</Link>.
          Geen van beide kolommen vervangt een meting.
        </p>
      </div>
    </section>

    {/* ================= ZO VERLOOPT HET ================= */}
    <section className="sw" id="werkwijze">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Zo verloopt het</span>
          <h2 className="sec">Van leverdag tot vrijgave van de vloer.</h2>
          <p className="lede">
            U hoeft zelf niets op te meten of in te stellen. Dit is wat er gebeurt vanaf het moment
            dat u de datum doorgeeft tot het moment dat uw vloerlegger kan starten.
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
          <h2 className="sec">Het toestel dat bij uw vloer past.</h2>
          <p className="lede">
            Voor een gewone gezinswoning is de Performance het toestel dat we het vaakst leveren,
            met een radiaalventilator erbij die vlak over de chape blaast. De Calculator rekent uw
            volume en chapedikte door naar de juiste combinatie, met een bouwkachel erbij als uw
            werf te koud staat.
          </p>
        </div>
        <Pakketkaarten />
      </div>
    </section>

    {/* ================= VRIJGAVE VAN DE VLOER ================= */}
    <section className="sw" id="meting">
      <div className="wrap split">
        <div>
          <span className="kick">De oplevering</span>
          <h2 className="sec">Wanneer mag de vloerlegger komen?</h2>
          <p className="lede">
            Een chape die hard en licht van kleur is, kan vanbinnen nog nat zijn. Onder parket, pvc
            of een gietvloer zit dat vocht daarna opgesloten, en dan komt het terug als bolle
            planken of loslatende stroken. Daarom beslist een meting en niet de kalender.
          </p>
          <p className="lede">
            <b>Wij meten bij de start en bij de oplevering.</b> Die twee waarden zitten in elk
            pakket, zodat niemand op gevoel moet beslissen. Heeft u een ondertekend verslag nodig
            voor uw vloerlegger of uw bouwdossier, dan neemt u een officieel vochtrapport bij
            {RAPPORT ? ` voor ${euro(RAPPORT.price)} excl. btw` : ""}.
          </p>
          <p className="lede">
            <b>Uw vloerlegger bepaalt de grens.</b> Welke waarde hij wil zien, hangt af van het type
            chape, de vloerverwarming en de afwerking. Vraag hem dat vooraf, dan weet u waar u
            naartoe droogt. Hoe die meting gebeurt, leest u in{" "}
            <Link to="/gids/hoe-lang-moet-chape-drogen">onze gids over de droogtijd van chape</Link>.
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
            className="chape-vloerderfoto"
            src="/vernast/chape-vloerder-tegelen.webp"
            alt="Vloerder plaatst de eerste tegels op een droge chape in een nieuwbouwwoning"
            width={1448}
            height={1086}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>

    <FaqBlok
      titel="Wat bouwheren ons vragen over chape drogen."
      vragen={faqs}
      sleutel="chape-faq"
    />

    {/* ================= REFERENTIES ================= */}
    <section className="sw" id="referenties">
      <div className="wrap">
        <div className="sec-head mid">
          <span className="kick">Uit de praktijk</span>
          <h2 className="sec">Vloeren die we eerder drooglegden.</h2>
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

    <VerderLezen titel="Verder lezen over chape drogen" groepen={verderLezen} achtergrond="sr" />

    <ContactBlok
      kicker="Een vraag over uw vloer?"
      titel="Twijfelt u over de termijn of het pakket?"
      lede="Geef ons uw oppervlakte, de chapedikte en wanneer de chapeur klaar is. U krijgt binnen één werkdag een voorstel van een droogspecialist."
      onderwerpen={[
        "Advies over chape drogen",
        "Prijs en leverdatum",
        "Vraag over restvocht meten",
        "Iets anders",
      ]}
      placeholder="Bv. nieuwbouw 140 m², chape van 6 cm geplaatst op 3 november, vloerlegger komt begin december."
      achtergrond="wit"
    />

    </main>

    <V3Footer />
  </div>
);

export default ChapeDrogenPage;

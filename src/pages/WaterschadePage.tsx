import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import Reveal from "@/components/Reveal";
import Pakketkaarten from "@/components/content/Pakketkaarten";
import ContactBlok from "@/components/content/ContactBlok";
import VerderLezen, { type LeesGroep } from "@/components/VerderLezen";
import {
  ArrowRightIcon,
  BoltIcon,
  CardIcon,
  CheckIcon,
  HouseIcon,
  MoldIcon,
  PhoneIcon,
  ShieldIcon,
  SupportIcon,
  TruckIcon,
} from "@/components/home-v3/icons";
import { GaugeIcon, WarnIcon, WindIcon } from "@/components/content/icons";
import { SEO } from "@/data/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { euro } from "@/data/tarieflijst";
import { EXTRAS } from "@/data/verhuur";
import { termijnLabel, termijnZonderDikte } from "@/lib/droogtijden";
import { CONTACT } from "@/lib/site";
import "@/styles/v3-content.css";

/**
 * Waterschade — de meest urgente van de drie situatiepagina's, en daarom de
 * enige met een vaste spoedbalk onderaan op een telefoon.
 *
 * Stond tot november 2026 op de oude shadcn-schil met de `Navbar`; nu in de
 * v3-vormtaal, met <V3Header> en de gedeelde opmaak uit
 * src/styles/v3-content.css. De voorzichtige formulering rond de verzekering
 * is bewust ongewijzigd gebleven: hier stond ooit "uw verzekering betaalt dit",
 * en dat kunnen wij niet weten.
 */

/** De huurtermijn van het vaste waterschadepakket, uit de catalogus. */
const WATER_TERMIJN = termijnZonderDikte("waterschade");

/** Het ondertekende vochtrapport is een betalende optie, geen standaard. */
const RAPPORT = EXTRAS.find((x) => x.k === "rapport");
const RAPPORT_PRIJS = RAPPORT ? ` voor ${euro(RAPPORT.price)} excl. btw` : "";

const WHATSAPP = "https://wa.me/3236899065";

/** WhatsApp staat niet in de v3-iconenset; dit is de enige plek waar hij hoort. */
const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.41a8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.71-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.85.84-.85 2.04s.87 2.37 1 2.53c.12.17 1.72 2.62 4.16 3.68.58.25 1.03.4 1.39.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
  </svg>
);

/*
  Wat iemand zelf doet in de eerste twee dagen, los van ons. De vier stappen
  eronder ("Zo werken wij") gaan over de levering; deze gaan over de schade.
  Wie zoekt op "waterschade drogen" wil eerst weten wat hij nú moet doen.
*/
const eersteUren = [
  {
    title: "Veiligheid eerst",
    desc: "Schakel de stroom uit in de natte zones voor u erin stapt, en zet geen elektrische toestellen in staand water.",
  },
  {
    title: "Stop de bron",
    desc: "Draai de hoofdkraan dicht bij een leidinglek en laat het lek herstellen. Zolang er water bijkomt, heeft drogen weinig zin.",
  },
  {
    title: "Leg de schade vast",
    desc: "Neem foto's en video van het water, de vloer, de muren en de beschadigde spullen, vóór u opruimt. Gooi niets weg voor uw verzekeraar zegt dat het mag.",
  },
  {
    title: "Haal het staande water weg",
    desc: "Pomp of zuig het water op. Een bouwdroger haalt vocht uit de lucht en uit materialen, niet uit een plas op de vloer.",
  },
  {
    title: "Ruim natte materialen op",
    desc: "Tapijt, ondertapijt, kartonnen dozen en losse meubels houden water vast en schimmelen snel. Zet ze buiten de ruimte, dan kan de lucht bij vloer en muren.",
  },
  {
    title: "Start met drogen en meet",
    desc: "Ontvochtiger en ventilator erbij, ramen en deuren dicht. Een meting bij de start geeft het vertrekpunt; de meting op het einde toont dat het droog is.",
  },
];

const stappen = [
  { Icon: PhoneIcon, title: "Bel of WhatsApp ons", desc: "Beschrijf wat er gebeurd is en hoe groot de ruimte is. Wij bepalen meteen welke toestellen mee moeten." },
  { Icon: TruckIcon, title: "Wij leveren vandaag", desc: "Bij waterschade rijden we dezelfde dag uit. Onze technieker plaatst alles en legt uit wat u moet opvolgen." },
  { Icon: BoltIcon, title: "De toestellen draaien door", desc: "Dag en nacht, ook in het weekend. Het vocht verdwijnt uit vloer en muren voor schimmel kans krijgt." },
  { Icon: GaugeIcon, title: "Meting bij de oplevering", desc: "Wij meten bij start en einde, en vergelijken met een droge plek in dezelfde woning. Dat is uw bewijs dat het droog is." },
];

const gevaren = [
  {
    Icon: MoldIcon,
    title: "Schimmel na 24 tot 48 uur",
    desc: "Op vochtig materiaal begint schimmel binnen twee dagen. Vanaf dat moment is drogen alleen niet meer genoeg: er moet gesaneerd worden, en dat kost een veelvoud.",
  },
  {
    Icon: HouseIcon,
    title: "Vocht dat dieper trekt",
    desc: "Eerst de chape en de onderkant van de muren, daarna de isolatie en het pleisterwerk. Water dat in de vloeropbouw zit, krijgt u er niet meer zomaar uit.",
  },
  {
    Icon: CardIcon,
    title: "Uitbreken in plaats van drogen",
    desc: "Wat droog is vóór schimmel toeslaat, hoeft meestal niet uitgebroken te worden. Een week wachten kan het verschil zijn tussen drogen en een vloer vervangen.",
  },
];

/**
 * De vragen die iemand met een ondergelopen kelder daadwerkelijk stelt.
 *
 * Deze pagina had als enige van de vier commerciële landingspagina's geen
 * FAQ — terwijl waterschade de meest urgente en meest gezochte situatie is.
 * Wie in paniek "hoe lang duurt drogen na waterschade" vraagt aan een
 * assistent, kreeg hier niets te citeren; nieuwbouw en renovatie wel.
 */
const faqs = [
  {
    q: "Hoe snel moet ik beginnen met drogen na waterschade?",
    a: "Binnen 24 tot 48 uur. Daarna begint schimmelvorming en dringt het vocht dieper in chape, isolatie en pleisterwerk. Wij leveren daarom bij waterschade nog dezelfde dag.",
  },
  {
    q: "Hoe lang duurt drogen na een waterlek of overstroming?",
    // Uit de pakketcatalogus, niet overgetypt: hier stond "1 tot 3 weken" terwijl
    // hetzelfde pakket verderop op de pagina met 4 weken rekent.
    a: `${
      WATER_TERMIJN
        ? `Ons waterschadepakket rekent met een huurtermijn van ${termijnLabel(WATER_TERMIJN)}.`
        : "Dat hangt af van de schade."
    } Hoe snel het in de praktijk gaat, hangt af van hoeveel water er stond en of het onder de vloer of in de isolatie zit. Onze vochtmeting bij start en oplevering bevestigt wanneer het effectief droog is.`,
  },
  {
    q: "Betaalt mijn verzekering de huur van een bouwdroger?",
    a: `Dat hangt af van uw polis en van de oorzaak van de schade. Bij een gedekt schadegeval worden droogkosten vaak mee opgenomen in het dossier, maar vraag het uw verzekeraar of makelaar voor u beslist. Van ons krijgt u een factuur op naam en de metingen bij start en oplevering; een ondertekend vochtrapport kunt u bijnemen${RAPPORT_PRIJS}.`,
  },
  {
    q: "Hoeveel toestellen heb ik nodig bij een ondergelopen kelder?",
    a: "Voor een gemiddelde kelder volstaat één Eco Performance met een ventilator. Staat er water in meerdere ruimtes of is de ruimte koud, dan komt er een kachel bij. Onze calculator rekent het voor u uit.",
  },
  {
    q: "Kan ik drogen terwijl er nog water staat?",
    a: "Nee. Pomp of zuig eerst het staande water weg. Een bouwdroger haalt vocht uit de lucht en uit materialen, niet uit een plas. Zodra de vloer waterloos is, plaatsen wij de toestellen.",
  },
  {
    q: "Moet de chape eruit na waterschade?",
    a: "Niet altijd. Is er water in de isolatie onder een zwevende chape gelopen, dan kan gericht drogen met een adsorptiedroger, die droge lucht via slangen in de vloeropbouw blaast, uitbreken soms voorkomen. Of dat lukt, hangt af van hoe lang het water er stond en van de opbouw van de vloer. Dat schatten we liefst samen met u in.",
  },
  {
    q: "Werkt een bouwdroger in een koude kelder na een overstroming?",
    a: "Beperkt. Onder 15 °C verliest een condensontvochtiger sterk aan rendement. Zet er een elektrische bouwkachel bij, of kies een adsorptiedroger: die verliest in de koude veel minder capaciteit.",
  },
];

const verderLezen: LeesGroep[] = [
  {
    kop: "Waterschade die we droogden",
    links: [
      { to: "/realisaties/mnr-w-antwerpen", label: "Kelder en leefruimte drooggelegd na een lek in Antwerpen" },
      { to: "/realisaties/mevr-b-a-lokeren", label: "Waterschade na een keldermuurlek in Lokeren" },
      { to: "/realisaties/mnr-s-brussel", label: "Waterschade in de badkamer gericht gedroogd in Brussel" },
      { to: "/realisaties/mevr-a-r-berlare", label: "Berging drooggelegd na een waterlek in Berlare" },
    ],
  },
  {
    kop: "Toestellen voor waterschade",
    links: [
      { to: "/verhuur/toestel/ttk650", toestel: "ttk650", label: "Eco Ultimate", sub: "Onze grootste condensdroger, voor acute schade." },
      { to: "/verhuur/toestel/radiaal2250", toestel: "radiaal2250", label: "Radiaalventilator voor natte vloeren", sub: "Spatwaterdicht, blaast vlak over de vloer." },
      { to: "/verhuur/toestel/ttv4500", toestel: "ttv4500", label: "Highflow", sub: "Houdt de hele ruimte in beweging." },
      { to: "/verhuur/toestel/revolution", toestel: "revolution", label: "Adsorptiedroger voor vloeropbouw en isolatie", sub: "Droogt gericht via slangen." },
    ],
  },
  {
    kop: "Plannen en verder lezen",
    links: [
      { to: "/verhuur/calculator", label: "Bereken uw waterschadepakket op oppervlakte" },
      { to: "/renovatie", label: "Blijft de kelder vochtig? Lees over kelderdroging" },
      { to: "/bouwdroger-huren-antwerpen", label: "Bouwdroger huren in de provincie Antwerpen" },
      { to: "/bouwdroger-huren-oost-vlaanderen", label: "Bouwdroger huren in Oost-Vlaanderen" },
    ],
  },
];

const WaterschadePage = () => (
  <div className="v3c ws-page heeft-urgbar">
    <PageMeta
      {...SEO.waterschade}
      jsonLd={[
        serviceSchema({
          name: "Bouwdroging na waterschade",
          description:
            "Snelle droging van vloeren, muren en isolatie na een waterlek of overstroming, met bouwdrogers en ventilatoren geleverd binnen 24 uur.",
          path: "/waterschade",
          serviceType: "Waterschadeherstel",
        }),
        faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Waterschade", path: "/waterschade" },
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
            <span className="pulse"><i /> Spoedlevering · bel ons nu</span>
            <h1>Waterschade drogen. Vandaag geleverd, niet volgende week.</h1>
            <p>
              Een gesprongen leiding, een ondergelopen kelder, een badkamer die naar beneden lekte:
              vanaf het moment dat het water weg is, loopt de klok. Binnen twee dagen begint
              schimmel. Wij leveren bij waterschade dezelfde dag, meten bij de start en leveren een
              factuur op naam voor uw verzekeringsdossier.
            </p>
            <div className="hcta">
              <a className="btn btn-white" href={`tel:${CONTACT.phoneE164}`}>
                <PhoneIcon /> Bel {CONTACT.phoneLocal}
              </a>
              <a className="btn btn-ghost" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={16} /> WhatsApp ons
              </a>
            </div>
          </div>
          <div className="hero-vis">
            <img
              className="framed"
              src="/vernast/case-waterschade-v3.webp"
              alt="Bouwdroger en ventilator aan het werk in een ruimte na waterschade"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
            <div className="fbadge rd" style={{ bottom: "60px", left: "-6%" }}>
              <span className="ic"><WarnIcon size={15} /></span>
              <div>
                24 tot 48 uur
                <small>daarna begint de schimmel</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* ================= VERTROUWENSRIJ ================= */}
    <div className="wrap">
      <div className="trust">
        <div><BoltIcon size={19} /> Levering dezelfde dag</div>
        <div><ShieldIcon size={19} /> Factuur voor uw verzekeraar</div>
        <div><SupportIcon size={19} /> Altijd bereikbaar</div>
        <div><CheckIcon size={17} strokeWidth={3} /> Vochtmeting voor én na</div>
      </div>
    </div>

    {/* ================= DE EERSTE 48 UUR ================= */}
    <section className="sw" id="eerste-48-uur">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Doe dit eerst</span>
          <h2 className="sec">Wat u moet doen in de eerste 48 uur.</h2>
          <p className="lede">
            Na een lek of overstroming trekt het water snel dieper: eerst in de chape en de
            onderkant van de muren, daarna in isolatie en pleisterwerk. Na een dag of twee krijgt
            schimmel kans op vochtig materiaal. Hoe sneller u het water weghaalt en begint te
            drogen, hoe minder er uitgebroken moet worden.
          </p>
        </div>
        <div className="stapn twee">
          {eersteUren.map((stap, i) => (
            <Reveal from="up" delay={(i % 2) * 0.08} className="sn" key={stap.title}>
              <i />
              <div>
                <h3>{stap.title}</h3>
                <p>{stap.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ================= WAAROM SNEL ================= */}
    <section className="sr">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Waarom het nu moet</span>
          <h2 className="sec">Elke dag wachten verdubbelt het werk.</h2>
          <p className="lede">
            Waterschade wordt niet geleidelijk erger. Er zijn drempels: het moment waarop schimmel
            aanslaat, en het moment waarop vocht in de vloeropbouw zit. Daarvoor is het drogen,
            daarna is het uitbreken.
          </p>
        </div>
        <div className="g3">
          {gevaren.map(({ Icon, title, desc }, i) => (
            <Reveal from="up" delay={i * 0.08} className="kaart" key={title}>
              <div className="ki"><Icon size={20} /></div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ================= ZO WERKEN WIJ ================= */}
    <section className="sw">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Zo werken wij</span>
          <h2 className="sec">Eén telefoontje, en vandaag staan de toestellen er.</h2>
        </div>
        <div className="flow">
          {stappen.map(({ Icon, title, desc }, i) => (
            <Reveal from="up" delay={i * 0.08} className="fl" key={title}>
              <i>{`0${i + 1}`}</i>
              <div className="fi"><Icon size={19} /></div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/*
      VERZEKERING — voorzichtig geformuleerd. Hier stond "Uw verzekering
      betaalt dit" en "dekt in de meeste gevallen de volledige kost". Dat
      kunnen wij niet weten: het hangt af van de polis en de oorzaak, en een
      belofte die de verzekeraar daarna niet nakomt komt bij ons terug.
    */}
    <section className="sr">
      <div className="wrap">
        <Reveal from="up" className="infopanel metfoto">
          <div className="ip-t">
          <div className="ii"><ShieldIcon size={22} /></div>
          <div>
            <h3>Waterschade en uw verzekering</h3>
            <p>
              Waterschade valt vaak onder de brandverzekering van de woning, maar of en hoeveel er
              vergoed wordt, hangt af van uw polis en van de oorzaak. Vraag het uw verzekeraar of
              makelaar zo vroeg mogelijk, liefst voor u grote kosten maakt.
            </p>
            <p>
              Wat een verzekeraar doorgaans wil zien: een aangifte binnen de termijn uit uw polis,
              foto's van de schade, de facturen van wat u liet doen, en dat u de schade beperkt
              hebt. Snel drogen hoort bij dat laatste.
            </p>
            <p>
              <b>
                Van ons krijgt u een factuur op naam en de metingen bij start en oplevering. Een
                ondertekend vochtrapport met alle meetwaarden kunt u bijnemen{RAPPORT_PRIJS}.
              </b>
            </p>
          </div>
          </div>
          <img
            src="/vernast/man-klembord.webp"
            alt="Vernast technicus noteert de meetwaarden voor het schadedossier"
            width={600}
            height={700}
            loading="lazy"
            decoding="async"
          />
        </Reveal>
      </div>
    </section>

    {/* ================= WELKE DROGER ================= */}
    <section className="sw">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">De techniek</span>
          <h2 className="sec">Condensdroger, adsorptiedroger of allebei?</h2>
          <p className="lede">
            Bij waterschade bepaalt niet het volume maar de temperatuur en de plek van het vocht
            welk toestel werkt. Twee verschillende machines, twee verschillende taken.
          </p>
        </div>

        {/*
          Adsorptie krijgt een eigen blok, en niet alleen een kaart. Het is bij
          waterschade vaak het verschil tussen drogen en uitbreken, en het is
          precies het stuk waar een klant niet zelf op komt: water onder een
          zwevende chape krijgt u met een gewone droger in de kamer niet weg.
        */}
        <div className="split" style={{ marginBottom: "44px" }}>
          <div>
            <span className="kick">Onze adsorptie-oplossing</span>
            <h3 className="sec" style={{ fontSize: "clamp(22px,2.4vw,30px)", marginBottom: "14px" }}>
              Gericht drogen waar een gewone droger niet bij komt.
            </h3>
            <p className="lede">
              Liep het water onder een zwevende chape, in de isolatie, achter een voorzetwand of in
              een houten vloeropbouw? Dan staat dat vocht buiten bereik van de lucht in de kamer.
              Een condensdroger droogt dan de ruimte droog terwijl de constructie nat blijft, en
              maanden later komen de vlekken en de geur alsnog terug.
            </p>
            <p className="lede">
              Daarvoor zetten wij de <Link to="/verhuur/toestel/revolution">Revolution
              adsorptiedroger</Link> in. Die haalt het vocht uit de lucht met een vochtopnemend
              wiel in plaats van met koude, en blaast de droge lucht via slangen rechtstreeks in de
              vloeropbouw, de spouw of de wand. Wij boren daarvoor kleine openingen op de juiste
              plaatsen, zetten de slangen erop en laten de opstelling dag en nacht draaien tot de
              meting in de constructie zelf droog zegt.
            </p>
            <p className="lede">
              Twee bijkomende redenen om voor adsorptie te kiezen: hij verliest onder 15 °C
              nauwelijks capaciteit, dus in een onverwarmde kelder blijft hij doorwerken waar een
              condensdroger terugvalt. En hij droogt dieper, wat bij een gedekt schadegeval vaak
              het verschil maakt tussen een droogdossier en een afbraakdossier.
            </p>
            <div className="chips">
              <span>Vloeropbouw en isolatie</span>
              <span>Spouw en voorzetwand</span>
              <span>Koude kelders</span>
              <span>Houten vloeren</span>
            </div>
          </div>
          <Reveal from="up" className="split-vis">
            <img
              src="/vernast/eco-revolution.webp"
              alt="Vernast Revolution adsorptiedroger met slangaansluiting voor gericht drogen"
              width={700}
              height={700}
              loading="lazy"
              decoding="async"
              style={{ background: "#fff" }}
            />
          </Reveal>
        </div>
        <div className="g3">
          <Reveal from="up" className="kaart">
            <div className="ki"><BoltIcon size={20} /></div>
            <h3>Condensontvochtiger</h3>
            <p>
              Zuigt de vochtige lucht aan, koelt ze af zodat het water condenseert, en blaast droge
              lucht terug. In een verwarmde woning werkt dat goed.
            </p>
            <p>
              Onder ongeveer 15 °C daalt het rendement sterk; dan zet u er een bouwkachel bij.
            </p>
          </Reveal>
          <Reveal from="up" delay={0.08} className="kaart">
            <div className="ki"><GaugeIcon size={20} /></div>
            <h3>Adsorptiedroger</h3>
            <p>
              Werkt met een vochtopnemend materiaal in plaats van koude, en verliest in een koude
              kelder veel minder capaciteit.
            </p>
            <p>
              Hij kan droge lucht via slangen gericht in een vloeropbouw, een wand of isolatie
              blazen, waar een gewone droger niet bij komt. Soms is dat het verschil tussen drogen en
              uitbreken.
            </p>
          </Reveal>
          <Reveal from="up" delay={0.16} className="kaart">
            <div className="ki"><WindIcon size={20} /></div>
            <h3>En altijd een ventilator</h3>
            <p>
              Bij waterschade hoort er altijd luchtbeweging bij: zonder ventilator droogt vooral de
              lucht, niet de vloer en de muren.
            </p>
            <p>
              Een radiaalventilator blaast vlak over een natte vloer; een axiale houdt de hele
              ruimte in beweging.
            </p>
          </Reveal>
        </div>
        <div className="note">
          <b>Hoe lang duurt het?</b> Dat hangt vooral af van hoe lang het water er stond en waar
          het in trok. Een natte tegelvloer op beton droogt veel sneller dan water dat onder een
          zwevende chape in de isolatie liep. Gipsplaat en pleister nemen snel water op maar geven
          het ook vlot weer af; beton en chape houden het lang vast.{" "}
          {WATER_TERMIJN
            ? `Ons vaste waterschadepakket rekent daarom met een huurtermijn van ${termijnLabel(WATER_TERMIJN)}.`
            : "Onze waterschadepakketten rekenen daarom met een ruime huurtermijn."}{" "}
          Stop niet te vroeg omdat het oppervlak droog aanvoelt: een vloer die bovenaan droog is,
          kan onderaan nog nat zijn, en dat vocht komt later terug als vlekken of schimmel.
        </div>
      </div>
    </section>

    {/* ================= PAKKETTEN ================= */}
    <section className="sr" id="pakketten">
      <div className="wrap">
        <div className="sec-head mid">
          <span className="kick">Welke machine</span>
          <h2 className="sec">Voor een gemiddelde kelder volstaat er één.</h2>
          <p className="lede">
            Staat er water in meerdere ruimtes, of is het koud, dan komt er een ventilator of een
            bouwkachel bij. De <Link to="/verhuur/calculator">calculator</Link> rekent uw situatie
            door, of u belt ons en wij doen het aan de telefoon.
          </p>
        </div>
        <Pakketkaarten />
      </div>
    </section>

    <VerderLezen titel="Verder lezen over drogen na waterschade" groepen={verderLezen} />

    {/* ================= FAQ ================= */}
    <section className="sr">
      <div className="wrap">
        <div className="sec-head mid">
          <span className="kick">Veelgestelde vragen</span>
          <h2 className="sec">Wat mensen met waterschade ons vragen.</h2>
        </div>
        <div className="faqs">
          {faqs.map((faq, i) => (
            <Reveal from="up" delay={(i % 2) * 0.06} as="dl" className="faq" key={faq.q}>
              <dt>{faq.q}</dt>
              <dd>{faq.a}</dd>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ================= SLOT-CTA ================= */}
    <section className="sw">
      <div className="wrap">
        <div className="manband">
          <div className="mb-t">
            <span className="mbk">Nu bellen</span>
            <h3>Hoe sneller wij er staan, hoe minder er uitgebroken moet worden.</h3>
            <p>
              Beschrijf kort wat er gebeurd is en hoe groot de ruimte is. Wij zeggen meteen welke
              toestellen mee moeten en wanneer we kunnen leveren: bij waterschade vandaag nog.
            </p>
            <div className="mb-cta">
              <a className="btn btn-white" href={`tel:${CONTACT.phoneE164}`}>
                <PhoneIcon /> Bel {CONTACT.phoneLocal}
              </a>
              <a className="btn btn-ghost" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={16} /> WhatsApp ons
              </a>
              <Link className="btn btn-ghost" to="/verhuur/calculator">
                Bereken zelf
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
          <img
            className="mb-man"
            src="/vernast/man-bestelwagen.webp"
            alt="Vernast technicus laadt een bouwdroger in de bestelwagen"
            width={600}
            height={900}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>

    <ContactBlok
      kicker="Waterschade melden"
      titel="Beschrijf uw situatie, wij bellen u terug."
      lede="Bij waterschade telt elk uur. Belt u liever meteen? Doe dat gerust, dan rijden we vandaag nog uit. Via dit formulier krijgt u binnen één werkdag antwoord."
      onderwerpen={[
        "Waterschade, dit is dringend",
        "Water onder de vloer of in de isolatie",
        "Vraag over mijn verzekeringsdossier",
        "Prijs van een waterschadepakket",
        "Iets anders",
      ]}
      placeholder="Bv. kelder van 40 m² ondergelopen na een gesprongen leiding, water is weg, chape en onderkant van de muren zijn nat."
    />

    </main>

    <V3Footer />

    {/*
      De spoedbalk, alleen op een telefoon. Wie met een ondergelopen kelder op
      zijn gsm staat te zoeken, moet niet eerst terugscrollen naar de hero om
      te kunnen bellen. Staat ná de footer in de DOM zodat de leesvolgorde van
      de pagina klopt; CSS zet hem onderaan het scherm vast.
    */}
    <div className="urgbar">
      <b><WarnIcon size={18} /> Waterschade? Bel nu</b>
      <div className="ubtns">
        <a className="ubtn" href={`tel:${CONTACT.phoneE164}`} aria-label={`Bel ${CONTACT.phoneLocal}`}>
          <PhoneIcon size={18} />
        </a>
        <a
          className="ubtn wa"
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp ons"
        >
          <WhatsAppIcon size={19} />
        </a>
      </div>
    </div>
  </div>
);

export default WaterschadePage;

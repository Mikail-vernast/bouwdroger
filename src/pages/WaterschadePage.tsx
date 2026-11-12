import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import Reveal from "@/components/Reveal";
import ContactBlok from "@/components/content/ContactBlok";
import FaqBlok from "@/components/content/FaqBlok";
import StappenCarrousel, { type VerloopStap } from "@/components/content/StappenCarrousel";
import {
  ArrowRightIcon,
  BoltIcon,
  CheckIcon,
  PhoneIcon,
  ShieldIcon,
  SupportIcon,
} from "@/components/home-v3/icons";
import {
  DoosIcon,
  DrogerIcon,
  FotoIcon,
  KraanIcon,
  LekIcon,
  PompIcon,
  StroomUitIcon,
  WarnIcon,
  WindIcon,
} from "@/components/content/icons";
import { SEO } from "@/data/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { euro } from "@/data/tarieflijst";
import { EXTRAS } from "@/data/verhuur";
import { getRealisatie, type Realisatie } from "@/data/realisaties";
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
const eersteUren: { icon: ComponentType<{ size?: number }>; title: string; desc: string }[] = [
  {
    icon: StroomUitIcon,
    title: "Veiligheid eerst",
    desc: "Schakel de stroom uit in de natte zones voor u erin stapt, en zet geen elektrische toestellen in staand water.",
  },
  {
    icon: KraanIcon,
    title: "Stop de bron",
    desc: "Draai de hoofdkraan dicht bij een leidinglek en laat het lek herstellen. Zolang er water bijkomt, heeft drogen weinig zin.",
  },
  {
    icon: FotoIcon,
    title: "Leg de schade vast",
    desc: "Neem foto's en video van het water, de vloer, de muren en de beschadigde spullen, vóór u opruimt. Gooi niets weg voor uw verzekeraar zegt dat het mag.",
  },
  {
    icon: PompIcon,
    title: "Haal het staande water weg",
    desc: "Pomp of zuig het water op. Een bouwdroger haalt vocht uit de lucht en uit materialen, niet uit een plas op de vloer.",
  },
  {
    icon: DoosIcon,
    title: "Ruim natte materialen op",
    desc: "Tapijt, ondertapijt, kartonnen dozen en losse meubels houden water vast en schimmelen snel. Zet ze buiten de ruimte, dan kan de lucht bij vloer en muren.",
  },
  {
    icon: DrogerIcon,
    title: "Start met drogen en meet",
    desc: "Ontvochtiger en ventilator erbij, ramen en deuren dicht. Een meting bij de start geeft het vertrekpunt; de meting op het einde toont dat het droog is.",
  },
];

/**
 * De soorten waterschade die wij in de praktijk tegenkomen, met per soort waar
 * het vocht gaat zitten en wat de aanpak is.
 *
 * Dit stond er niet, en dat was de grootste leemte van de pagina: iemand met
 * een natte vloer weet niet of zijn geval "erg" is. Het verschil tussen een
 * tegelvloer op beton en water onder een zwevende chape bepaalt of het drogen
 * dagen of weken duurt — en of er uitgebroken moet worden.
 *
 * Elke kaart heeft een eigen beeld dat de schade en de bijbehorende aanpak
 * herkenbaar maakt, ook voor iemand die de technische benaming niet kent.
 */
const SCHADETYPES: {
  label: string;
  titel: string;
  tekst: string;
  aanpak: string;
  foto: string;
  fotoHd: string;
  fotoAlt: string;
}[] = [
  {
    label: "Meest voorkomend",
    titel: "Gesprongen of lekkende leiding",
    tekst:
      "Een koppeling die loslaat, een leiding die bevriest, een lek achter een muur dat weken onopgemerkt bleef. Het water loopt via de kortste weg naar beneden en trekt in de chape, de onderkant van de muren en het pleisterwerk. Vaak is de zichtbare plek maar een fractie van het natte oppervlak.",
    aanpak:
      "Lek eerst laten herstellen, dan drogen. Wij meten hoe ver het vocht is gelopen en zetten de toestellen op de natste zone, niet op de plek waar u het lek zag.",
    foto: "/vernast/waterschade-leiding.webp",
    fotoHd: "/vernast/waterschade-leiding-hd.webp",
    fotoAlt: "Natte muur onder een lekkende leiding in een woning",
  },
  {
    label: "Snelst urgent",
    titel: "Ondergelopen kelder of garage",
    tekst:
      "Na een hevige bui, een terugslaande riolering of een defecte pomp. Kelders zijn koud en slecht verlucht, dus het vocht blijft hangen en schimmel krijgt er sneller kans dan boven. Opslag, karton en textiel zuigen zich vol en worden zelf een vochtbron.",
    aanpak:
      "Staand water eerst weg, natte spullen eruit. In een koude kelder zetten we een bouwkachel of een adsorptiedroger in, omdat een condensdroger onder 15 °C sterk aan rendement verliest.",
    foto: "/vernast/waterschade-kelder.webp",
    fotoHd: "/vernast/waterschade-kelder-hd.webp",
    fotoAlt: "Ondergelopen kelder met vochtlijn op de muur en een natte vloer",
  },
  {
    label: "Lastigst te zien",
    titel: "Water in de vloeropbouw of isolatie",
    tekst:
      "Bij een zwevende chape ligt er isolatie onder de vloer. Loopt daar water in, dan staat het buiten bereik van de lucht in de kamer: het oppervlak voelt na een week droog terwijl de opbouw nat blijft. Maanden later komen de vlekken, de geur of het loskomende parket alsnog.",
    aanpak:
      "Dit is het geval waarvoor wij gericht drogen: droge lucht gaat via kleine openingen en slangen rechtstreeks in de vloeropbouw. Vaak maakt dat het verschil tussen drogen en uitbreken.",
    foto: "/vernast/waterschade-vloeropbouw.webp",
    fotoHd: "/vernast/waterschade-vloeropbouw-hd.webp",
    fotoAlt: "Gerichte droging van natte vloerisolatie via luchtslangen",
  },
  {
    label: "Van boven",
    titel: "Lekkende badkamer, dak of regeninslag",
    tekst:
      "Een voeg die niet meer waterdicht is, een verstopte dakgoot, een storm die water door een gevel duwt. Het vocht komt van bovenaf en verspreidt zich over het plafond en de bovenkant van de muren, soms in een andere ruimte dan waar het lek zit.",
    aanpak:
      "Eerst de bron dicht, daarna drogen vanaf de hoogste natte plek. Plafonds en gipswanden geven hun vocht vlot af; het metselwerk erachter heeft meer tijd nodig.",
    foto: "/vernast/waterschade-van-boven.webp",
    fotoHd: "/vernast/waterschade-van-boven-hd.webp",
    fotoAlt: "Waterschade op het plafond en de bovenmuur door een lekkage van boven",
  },
];

/**
 * Het volledige verloop van een schadegeval, van het moment dat de klant het
 * ziet tot het rapport.
 *
 * Hier stond een stappenplan dat met "Bel ons" begon. Dat is niet waar een
 * schadegeval begint: de klant ziet eerst de schade, belt dan doorgaans zijn
 * verzekeraar, en komt pas daarna bij ons. Wie die eerste twee stappen
 * weglaat, lijkt te doen alsof de klant al wist dat hij ons nodig had.
 * `wie` zegt per stap wie aan zet is, zodat dat zichtbaar blijft.
 */
const VERLOOP: VerloopStap[] = [
  {
    wie: "U",
    titel: "U merkt de schade op",
    tekst:
      "Een natte vloer, een vochtplek op het plafond, een muffe geur in de kelder. Zet de stroom uit in de natte zone, draai de hoofdkraan dicht als het een leiding is, en neem foto's vóór u iets opruimt. Die foto's heeft uw verzekeraar later nodig.",
  },
  {
    wie: "U",
    titel: "U meldt het bij uw verzekeraar",
    tekst:
      "Doe de aangifte binnen de termijn uit uw polis. Vraag meteen of droogkosten in het dossier mogen en of er een expert langskomt. U hoeft niet op dat bezoek te wachten om te beginnen drogen; de schade beperken is net wat een verzekeraar van u verwacht.",
  },
  {
    wie: "U",
    titel: "U neemt contact met ons op",
    tekst:
      "Telefonisch of via het formulier onderaan. Beschrijf wat er gebeurd is, hoe groot de ruimte is en of het water al weg is. Bij waterschade bellen we zo snel mogelijk terug om te kijken wat vandaag nog kan.",
  },
  {
    wie: "Vernast",
    titel: "Wij bekijken het probleem en stellen een oplossing voor",
    tekst:
      "Aan de telefoon of ter plaatse bepalen we waar het vocht zit en hoe diep het is doorgedrongen. Daaruit volgt welke toestellen mee moeten: een condensdroger voor de ruimte, een adsorptiedroger als het vocht in de vloeropbouw zit, een ventilator en bij koude een bouwkachel.",
  },
  {
    wie: "Vernast",
    titel: "Wij komen langs, meten en leggen alles vast",
    tekst:
      "Onze technieker meet het vochtgehalte in vloer en muren, maakt foto's van de schade en zet die metingen digitaal op uw dossier. Dat is uw vertrekpunt, en het stuk dat een verzekeraar doorgaans wil zien.",
  },
  {
    wie: "Vernast",
    titel: "Wij plaatsen de toestellen en starten de droging",
    tekst:
      "Wij verdelen de toestellen over de natte zones, sluiten de condensafvoer aan zodat u niets hoeft te legen, en stellen de streefvochtigheid in. U laat ramen en deuren dicht en verplaatst niets; de rest gebeurt vanzelf, dag en nacht.",
  },
  {
    wie: "Vernast",
    titel: "Wij halen op, meten na en bezorgen het rapport",
    tekst:
      "De eindmeting beslist of het droog is, niet de kalender. Wij vergelijken met een droge plek in dezelfde woning, halen de toestellen op en bezorgen u de meetwaarden van start en einde. Een ondertekend vochtrapport voor uw verzekeringsdossier neemt u optioneel bij.",
  },
];

/** De werven die we als referentie tonen; alle vier waterschadegevallen. */
const REFERENTIES = [
  "mnr-w-antwerpen",
  "mevr-b-a-lokeren",
  "mnr-s-brussel",
  "mnr-erdem-bedrijfsgebouw",
  "mevr-a-r-berlare",
  "dhr-h-brussel",
]
  .map(getRealisatie)
  .filter((r): r is Realisatie => !!r)
  .slice(0, 3);

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
    /*
      Hier stond "ons waterschadepakket rekent met een huurtermijn van 4
      weken" als enig antwoord. Dat las als "elke schade duurt vier weken",
      terwijl een natte tegelvloer op beton in dagen klaar is en water in de
      vloerisolatie weken kost. De termijn van het pakket is de bovengrens
      waarop wij plannen, niet de verwachte duur — en de meting beslist.
    */
    a: `Dat verschilt sterk per situatie. Een natte tegelvloer op volle beton of een gipswand die water opving, is vaak in enkele dagen tot een week droog. Zit het water in de chape, dan loopt het op tot ongeveer twee weken, en is het in de isolatie onder een zwevende vloer gelopen, dan duurt het doorgaans drie weken of meer. Bepalend zijn hoe lang het water er stond, hoe diep het trok en hoe warm de ruimte is.${
      WATER_TERMIJN
        ? ` Ons waterschadepakket is daarom opgebouwd met een huurtermijn van ${termijnLabel(WATER_TERMIJN)}: dat is de bovengrens waarop wij plannen, niet de tijd die uw schade nodig heeft.`
        : ""
    } Is het eerder droog, dan halen we eerder op. De vochtmeting bij start en oplevering beslist, niet de kalender.`,
  },
  {
    q: "Betaalt mijn verzekering de huur van een bouwdroger?",
    a: `Dat hangt af van uw polis en van de oorzaak van de schade. Bij een gedekt schadegeval worden droogkosten vaak mee opgenomen in het dossier, maar vraag het uw verzekeraar of makelaar voor u beslist. Van ons krijgt u een factuur op naam en de metingen bij start en oplevering; een ondertekend vochtrapport kunt u bijnemen${RAPPORT_PRIJS}.`,
  },
  {
    q: "Moet ik wachten op de expert van de verzekering voor ik begin te drogen?",
    a: "Nee, en dat is meestal ook niet de bedoeling. Uw polis verwacht dat u de schade beperkt, en snel beginnen drogen hoort daarbij. Wat u wél eerst doet: foto's en video van de schade maken vóór u opruimt, en niets weggooien tot uw verzekeraar zegt dat het mag. Meld bij de aangifte dat u een droging opstart; de meetwaarden en de factuur die u van ons krijgt, horen daarna in het dossier.",
  },
  {
    q: "Hoeveel toestellen heb ik nodig bij een ondergelopen kelder?",
    a: "Voor een gemiddelde kelder volstaat één ontvochtiger met een ventilator. Staat er water in meerdere ruimtes of is de ruimte koud, dan komt er een bouwkachel of een adsorptiedroger bij. Bel ons met de afmetingen, dan rekenen we het samen door.",
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
              {/*
                Hier stond "WhatsApp ons". Die knop opende een app die niet
                iedereen heeft en liet de bezoeker de pagina verlaten; wie geen
                zin heeft om te bellen, wil gewoon zijn situatie kunnen
                beschrijven. WhatsApp blijft wel staan in de spoedbalk onderaan
                op een telefoon, waar hij thuishoort.
              */}
              <a className="btn btn-ghost" href="#formulier">
                Aanvraag doen
                <ArrowRightIcon />
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
        <div className="stapkaarten">
          {eersteUren.map((stap, i) => (
            <Reveal from="up" delay={(i % 3) * 0.08} className="stk" key={stap.title}>
              <span className="stkic">
                <stap.icon size={21} />
              </span>
              <span className="stknr">{String(i + 1).padStart(2, "0")}</span>
              <h3>{stap.title}</h3>
              <p>{stap.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ================= SOORTEN WATERSCHADE ================= */}
    <section className="sr" id="soorten">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Welke schade heeft u?</span>
          <h2 className="sec">Niet elke waterschade droogt even snel.</h2>
          <p className="lede">
            Waar het water in terechtkwam bepaalt alles: de aanpak, de duur en of er uitgebroken
            moet worden. Een natte tegelvloer op volle beton is vaak in dagen klaar; water dat in
            de isolatie onder een zwevende chape liep, kost weken en krijgt u met een droger in de
            kamer niet weg. Herkent u uw situatie hieronder, dan weet u meteen wat u te wachten
            staat.
          </p>
        </div>
        <div className="schades">
          {SCHADETYPES.map((t, i) => (
            <Reveal from="up" delay={(i % 2) * 0.08} className="schade" key={t.titel}>
              <div className="sfoto">
                <img
                  src={t.foto}
                  srcSet={`${t.foto} 1672w, ${t.fotoHd} 3344w`}
                  sizes="(max-width: 860px) calc(100vw - 40px), calc((100vw - 82px) / 2)"
                  alt={t.fotoAlt}
                  width={1672}
                  height={941}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="stekst">
                <span className="slabel">{t.label}</span>
                <h3>{t.titel}</h3>
                <p>{t.tekst}</p>
                <span className="saanpak">
                  <CheckIcon size={13} strokeWidth={3} />
                  <span>
                    <b>Onze aanpak: </b>
                    {t.aanpak}
                  </span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="note">
          <b>Waarom elk uur telt.</b> Waterschade wordt niet geleidelijk erger, maar in sprongen.
          Op vochtig materiaal slaat schimmel aan na 24 tot 48 uur, en vanaf dat moment volstaat
          drogen niet meer: er moet ook gesaneerd worden. De tweede drempel is het moment waarop
          het vocht de vloeropbouw of de isolatie bereikt. Wat daarvóór droog is, hoeft meestal
          niet uitgebroken te worden.
        </div>
      </div>
    </section>

    {/*
      VERZEKERING — voorzichtig geformuleerd. Hier stond "Uw verzekering
      betaalt dit" en "dekt in de meeste gevallen de volledige kost". Dat
      kunnen wij niet weten: het hangt af van de polis en de oorzaak, en een
      belofte die de verzekeraar daarna niet nakomt komt bij ons terug.

      De vorm is een `manband` en niet langer een wit paneel met een foto
      ernaast: de technieker kwam daar tegen de bovenrand van het kader en de
      drie alinea's lazen als een brief. Nu drie korte punten in het rode blok,
      met de rest in de FAQ.
    */}
    <section className="sw">
      <div className="wrap">
        <div className="split boven">
          <div className="sec-head" style={{ marginBottom: 0 }}>
            <span className="kick">Uw dossier</span>
            <h2 className="sec">Waterschade en uw verzekering.</h2>
            <p className="lede">
              Waterschade valt vaak onder de brandverzekering van de woning, maar of en hoeveel er
              vergoed wordt, hangt af van uw polis en van de oorzaak. Vraag het uw verzekeraar of
              makelaar zo vroeg mogelijk, liefst vóór u grote kosten maakt.
            </p>
            <p className="lede">
              Wat een verzekeraar doorgaans wil zien: een aangifte binnen de termijn, foto's van de
              schade, de facturen van wat u liet doen, en dat u de schade beperkt hebt. Snel drogen
              hoort bij dat laatste. Hiernaast ziet u hoe het verslag eruitziet dat u van ons
              krijgt: de meetwaarden bij start en oplevering, de foto's van de situatie zoals wij
              ze aantroffen, en de vaststelling van waar het vocht zat.
            </p>
          </div>

          <div>
            {/*
              Een nagebouwd dossier dat zichzelf opbouwt. `aria-hidden` omdat het
              beeld is en geen inhoud: de waarden erin zijn een voorbeeld, geen
              echte meting, en een schermlezer zou ze anders als feiten voorlezen.
              De opmaak en de lus staan in v3-content.css.
            */}
            <div className="dossier" aria-hidden="true">
              <div className="dos-kop">
                <div>
                  <span className="dk-l">Technisch vochtverslag</span>
                  <b>Droogdossier waterschade</b>
                </div>
                <span className="dk-merk">Vernast</span>
              </div>

              <div className="dos-meta">
                <div>
                  <span>Ruimte</span>
                  <b>Kelder 42 m²</b>
                </div>
                <div>
                  <span>Oorzaak</span>
                  <b>Leidingbreuk</b>
                </div>
                <div>
                  <span>Technieker</span>
                  <b>Vernast</b>
                </div>
                <div>
                  <span>Dossier</span>
                  <b>WS-0413</b>
                </div>
              </div>

              <div className="dos-body">
                <div className="dos-blok">
                  <div className="dos-t">
                    <i>1</i>
                    <b>Vaststelling ter plaatse</b>
                  </div>
                  <div className="dos-regels">
                    <i /><i /><i />
                  </div>
                </div>

                <div className="dos-blok">
                  <div className="dos-t">
                    <i>2</i>
                    <b>Fotoreportage</b>
                  </div>
                  <div className="dos-fotos">
                    <i /><i /><i />
                  </div>
                </div>

                <div className="dos-blok">
                  <div className="dos-t">
                    <i>3</i>
                    <b>Metingen bij start</b>
                  </div>
                  <div className="dos-meet">
                    <div>
                      <b>78 %</b>
                      <span>Chape</span>
                      <em style={{ "--v": "78%" } as React.CSSProperties} />
                    </div>
                    <div>
                      <b>14,2°</b>
                      <span>Oppervlak</span>
                      <em style={{ "--v": "55%" } as React.CSSProperties} />
                    </div>
                    <div>
                      <b>82 %</b>
                      <span>RV lucht</span>
                      <em style={{ "--v": "82%" } as React.CSSProperties} />
                    </div>
                  </div>
                </div>

                <div className="dos-blok">
                  <div className="dos-t">
                    <i>4</i>
                    <b>Vaststelling en aanpak</b>
                  </div>
                  <div className="dos-regels">
                    <i /><i /><i />
                  </div>
                </div>

                <div className="dos-slot">
                  <span className="dos-label">Conclusie</span>
                  <p>
                    Water in de vloerisolatie. Gericht drogen met adsorptiedroger; uitbraak niet
                    nodig.
                  </p>
                  <span className="dos-stempel">
                    Vocht
                    <br />
                    gemeten
                  </span>
                </div>
              </div>
            </div>
            <p className="dosbijschrift">
              Voorbeeld van het verslag dat u bij de oplevering krijgt. De waarden hierboven zijn
              ter illustratie.
            </p>
          </div>
        </div>
        <div className="manband">
          <div className="mb-t">
            <span className="mbk">Wat u van ons krijgt</span>
            <h3>Alles wat in een schadedossier hoort, zonder dat u erom moet vragen.</h3>
            <p>
              Een factuur op naam, de vochtmeting bij de start en bij de oplevering, en foto's van
              de situatie zoals wij ze aantroffen. Een ondertekend vochtrapport met alle
              meetwaarden neemt u optioneel bij{RAPPORT_PRIJS}.
            </p>
            <div className="mb-cta">
              <a className="btn btn-white" href={`tel:${CONTACT.phoneE164}`}>
                <PhoneIcon /> Bel {CONTACT.phoneLocal}
              </a>
              <a className="btn btn-ghost" href="#formulier">
                Aanvraag doen
                <ArrowRightIcon />
              </a>
            </div>
          </div>
          <img
            className="mb-man"
            src="/vernast/man-klembord.webp"
            alt="Vernast technicus noteert de meetwaarden voor het schadedossier"
            width={600}
            height={700}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>

    {/*
      DE DROOGTECHNIEK — één kop, en de uitleg eronder zonder tweede kop.

      Hier stonden een sectiekop ("Zit het vocht in de kamer, of in de vloer?")
      en vlak daaronder een tweede kop boven het adsorptieblok, met vier
      alinea's eronder. Dat las als twee secties die hetzelfde zeggen: de lede
      legde het verschil tussen de twee machines al uit, en de alinea's deden
      het nog eens over. De kop staat er nu één keer; wat eronder staat is het
      geval waarvoor iemand ons belt, in twee alinea's.
    */}
    <section className="sr" id="techniek">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">De techniek</span>
          <h2 className="sec">Zit het vocht in de kamer, of in de vloer?</h2>
          <p className="lede">
            Dat is bij waterschade de enige vraag die telt, want er horen twee verschillende
            machines bij. Zit het vocht in de lucht en in de oppervlakken van de kamer, dan haalt
            een condensontvochtiger het eruit. Zit het in de vloeropbouw, de isolatie of achter een
            wand, dan komt de lucht uit de kamer daar nooit bij.
          </p>
        </div>

        <div className="split boven" style={{ marginBottom: "44px" }}>
          <div>
            <p className="lede" style={{ marginTop: 0 }}>
              Bij een zwevende chape ligt isolatie onder de vloer. Liep daar water in, dan voelt
              het oppervlak na een week droog terwijl de opbouw nat blijft; de vlekken, de geur of
              het loskomende parket komen maanden later alsnog.
            </p>
            <p className="lede">
              Daarom boren wij kleine openingen op de juiste plaatsen en blazen we droge lucht via
              slangen rechtstreeks in de vloeropbouw, de spouw of de wand. Dat is wat een{" "}
              <Link to="/verhuur/toestel/revolution">adsorptiedroger</Link> kan en een gewone
              droger niet, en onder 15 °C verliest hij nauwelijks capaciteit. Hoe de twee
              technieken verschillen, staat uitgewerkt in de gids{" "}
              <Link to="/gids/condensdroger-of-adsorptiedroger">condensdroger of adsorptiedroger</Link>.
              Wij meten of de constructie zelf droog is, niet alleen de lucht erboven, bij een
              gedekt schadegeval vaak het verschil tussen een droogdossier en een afbraakdossier.
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
            <div className="ki"><LekIcon size={20} /></div>
            <h3>Adsorptiedroger</h3>
            <p>
              Voor vocht dat buiten bereik zit: onder een zwevende chape, in isolatie, achter een
              voorzetwand of in een houten vloer. Blaast droge lucht via slangen gericht naar de
              plek zelf.
            </p>
            <p>
              Ook de keuze voor een koude kelder: hij verliest onder 15 °C nauwelijks capaciteit.
            </p>
          </Reveal>
          <Reveal from="up" delay={0.08} className="kaart">
            <div className="ki"><BoltIcon size={20} /></div>
            <h3>Condensontvochtiger</h3>
            <p>
              Voor de ruimte zelf: zuigt de vochtige lucht aan, koelt ze af zodat het water
              condenseert, en blaast droge lucht terug. In een verwarmde woning werkt dat goed.
            </p>
            <p>
              Onder ongeveer 15 °C daalt het rendement sterk; dan zet u er een bouwkachel bij.
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
          <b>Welke combinatie het wordt, bepalen wij ter plaatse.</b> U hoeft dus niet zelf te
          kiezen: wij meten waar het vocht zit en hoe koud de ruimte is, en stellen de opstelling
          daarop samen. Bij twijfel komen we kijken vóór er iets geleverd wordt.
        </div>
      </div>
    </section>

    {/* ================= ZO WERKEN WIJ ================= */}
    <section className="sw" id="zo-werken-wij">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Zo werken wij</span>
          <h2 className="sec">Van de eerste natte plek tot het meetrapport.</h2>
          <p className="lede">
            Een schadegeval begint niet bij ons maar bij u, op het moment dat u het water ziet.
            Dit is het volledige verloop, met per stap wie er aan zet is. Het schuift vanzelf door;
            met de pijlen of de nummers gaat u zelf vooruit of terug.
          </p>
        </div>
        <StappenCarrousel stappen={VERLOOP} label="Zo werken wij bij waterschade" />
      </div>
    </section>

    {/* ================= REFERENTIES ================= */}
    <section className="sr">
      <div className="wrap">
        <div className="sec-head mid">
          <span className="kick">Uit de praktijk</span>
          <h2 className="sec">Waterschade die we eerder droogden.</h2>
          <p className="lede">
            Drie dossiers met de foto's van de werf zelf: wat er gebeurd was, welke toestellen we
            plaatsten en hoe lang het duurde.
          </p>
        </div>
        <div className="refs">
          {REFERENTIES.map((r, i) => (
            <Reveal from="up" delay={(i % 3) * 0.08} key={r.slug}>
              <Link className="rz" to={`/realisaties/${r.slug}`}>
                <img src={r.kaart} alt={r.kaartAlt} width={640} height={420} loading="lazy" decoding="async" />
                <div className="rzt">
                  <span className="rzl">{r.locatie}</span>
                  <h3>{r.titel}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="tblnote" style={{ textAlign: "center" }}>
          <Link to="/realisaties?soort=waterschade" style={{ fontWeight: 600 }}>
            Alle waterschadeprojecten bekijken
          </Link>
        </p>
        <div className="note">
          <b>Wij rijden bij waterschade in heel België.</b> Vanuit ons magazijn in Aartselaar staan
          we het snelst in <Link to="/bouwdroger-huren-antwerpen">de provincie Antwerpen</Link>,{" "}
          <Link to="/bouwdroger-huren-oost-vlaanderen">Oost-Vlaanderen</Link> en{" "}
          <Link to="/bouwdroger-huren-vlaams-brabant">Vlaams-Brabant</Link>; verder weg plannen we
          de rit mee, maar leveren we evengoed. Weet u al wat u nodig heeft, dan stelt de{" "}
          <Link to="/verhuur/calculator">droogcalculator</Link> het pakket meteen samen.
        </div>
      </div>
    </section>

    <FaqBlok
      titel="Wat mensen met waterschade ons vragen."
      vragen={faqs}
      sleutel="ws-faq"
      variant="wit"
    >
      {/*
        De slotplaat staat binnen de FAQ-sectie: wie de vragen gelezen heeft
        is klaar om te bellen, en een lege witte strook ertussen brak dat
        moment. `bijsnijden` haalt de transparante onderrand van de foto weg,
        zodat de technieker en de bestelwagen op de rand staan in plaats van
        erboven te zweven.
      */}
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
            <a className="btn btn-ghost" href="#formulier">
              Aanvraag doen
              <ArrowRightIcon />
            </a>
          </div>
        </div>
        <img
          className="mb-man breed bijsnijden tegenrand"
          src="/vernast/man-bestelwagen.webp"
          alt="Vernast technicus bij de bestelwagen met een bouwdroger"
          width={1440}
          height={800}
          loading="lazy"
          decoding="async"
        />
      </div>
    </FaqBlok>

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

import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import Reveal from "@/components/Reveal";
import Pakketkaarten from "@/components/content/Pakketkaarten";
import ContactBlok from "@/components/content/ContactBlok";
import FaqBlok from "@/components/content/FaqBlok";
import VerderLezen, { type LeesGroep } from "@/components/VerderLezen";
import {
  ArrowRightIcon,
  BrushIcon,
  CardIcon,
  CellarIcon,
  CheckIcon,
  ChecklistIcon,
  DropIcon,
  HouseIcon,
  MoldIcon,
  PhoneIcon,
  RefreshIcon,
  SupportIcon,
  TruckIcon,
} from "@/components/home-v3/icons";
import {
  DoosIcon,
  DrogerIcon,
  GaugeIcon,
  ThermoIcon,
  WindIcon,
} from "@/components/content/icons";
import { SEO } from "@/data/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { getRealisatie, type Realisatie } from "@/data/realisaties";
import { CONTACT } from "@/lib/site";
import "@/styles/v3-content.css";
import "@/styles/renovatie.css";
import { toestelPad } from "@/data/verhuur";

/**
 * Vochtige kelders en renovatievocht. Deze pagina stond tot november 2026 nog
 * op de oude shadcn-schil met de `Navbar`: wie uit het v3-menu op "renovatie"
 * klikte, belandde op een pagina die eruitzag als een andere site. Zelfde
 * inhoud, nu in de vormtaal van /hoe-drogen-werkt en /waarom-bouwdroging, met
 * <V3Header> en de gedeelde opmaak uit src/styles/v3-content.css.
 *
 * De kern van de pagina blijft ongewijzigd: wie "kelder drogen bouwdroger"
 * zoekt, moet weten dat een ontvochtiger opstijgend of doorslaand vocht niet
 * stopt. Een pagina die dat verzwijgt, verhuurt een toestel dat na de ophaling
 * niets heeft opgelost. Daarom staat die scheiding niet in een grijze kaart
 * onderaan, maar in een eigen sectie met een verdict per oorzaak.
 *
 * In november 2026 is de vorm bijgetrokken naar die van /waterschade, de
 * jongste van de drie situatiepagina's:
 *
 *   - de drie witte pillen in de hero zijn de vertrouwensrij eronder geworden
 *     (`.trust`). Ze zweefden los op het rood, en de header schoof er bij het
 *     scrollen half overheen;
 *   - de vijf oorzaken stonden als vijf kaarten in een raster van drie, met
 *     twee weesjes op de tweede rij. Nu een doorsnede van een keldermuur met
 *     genummerde bronnen, en de lijst ernaast met diezelfde nummers;
 *   - het stappenplan draagt de kaartvorm met pictogram (`.stapkaarten`);
 *   - de FAQ klapt uit zonder JavaScript (`.faq.uitklap`), zoals daar;
 *   - de kelders die we droogden staan als realisatiekaarten mét foto in
 *     plaats van als drie regels in een linkkolom.
 */

/** Wat vocht met een woning en met de mensen erin doet. */
const gevaren = [
  {
    Icon: MoldIcon,
    title: "Schimmelsporen in de lucht",
    desc: "Schimmel die u ziet is maar een deel; de sporen hangen in de lucht die u inademt. Ze geven luchtwegklachten, hoofdpijn en allergische reacties, en zijn het meest vervelend voor kinderen, ouderen en mensen met asthma.",
  },
  {
    Icon: HouseIcon,
    title: "Schade aan de constructie",
    desc: "Vocht tast metselwerk, houten balken, plinten en isolatie aan. Isolatie die nat is geweest, isoleert niet meer, en hout dat maanden vochtig blijft, rot van binnenuit, precies waar u er niet bij kunt.",
  },
  {
    Icon: CardIcon,
    title: "Een woning die minder opbrengt",
    desc: "Zichtbare vochtplekken, een muffe kelder of een vochtkeuring die vragen oproept: elke koper rekent dat in mindering. Drogen kost een fractie van wat de prijsonderhandeling u kost.",
  },
];

/** Hoort u dit in uw eigen huis, dan heeft drogen zin. */
const checklist = [
  "Een muffe, kelderachtige geur die niet weggaat",
  "Donkere vochtplekken op muren of plafond",
  "Zwarte of groene schimmelvlekken, vaak in hoeken",
  "Condens op ramen, koude muren of leidingen",
  "Vocht na een verbouwing, een lek of een overstroming",
];

/**
 * Waar vocht in een kelder of muur vandaan komt — en of een bouwdroger het
 * oplost. `helpt: false` betekent niet "wij kunnen niets voor u doen", maar
 * "eerst de oorzaak, dan drogen".
 *
 * De volgorde is die van de nummers in de doorsnede hiernaast: van het koude
 * oppervlak binnen naar het vocht dat van buiten komt. Verander je de
 * volgorde, verzet dan ook `.vb-nr` in src/styles/renovatie.css.
 */
const oorzaken = [
  {
    Icon: DropIcon,
    title: "Condensatie",
    helpt: true,
    desc: "Warme, vochtige lucht slaat neer op koude muren, vloeren en ramen. Typisch in kelders en slecht verluchte ruimtes, vooral in de winter. Een bouwdroger haalt de luchtvochtigheid omlaag; blijvend oplossen vraagt betere ventilatie of isolatie.",
  },
  {
    Icon: BrushIcon,
    title: "Bouwvocht na renovatie",
    helpt: true,
    desc: "Nieuw pleisterwerk, chape of metselwerk brengt honderden liters water mee in een ruimte die vaak slecht verlucht is. Dat is precies waarvoor een bouwdroger gemaakt is.",
  },
  {
    Icon: RefreshIcon,
    title: "Na een lek of waterschade",
    helpt: true,
    desc: "Is het lek hersteld, dan droogt een bouwdroger met ventilator de muren en de vloer weer uit. Zolang het lek blijft, blijft het vocht terugkomen.",
  },
  {
    Icon: CellarIcon,
    title: "Opstijgend vocht",
    helpt: false,
    desc: "Grondwater dat via het metselwerk omhoog trekt: vochtplekken en zoutkorsten onderaan de muur, tot een meter hoog of meer. Een bouwdroger droogt de oppervlakte, maar het vocht blijft opstijgen zolang de muur niet behandeld wordt.",
  },
  {
    Icon: HouseIcon,
    title: "Doorslaand vocht",
    helpt: false,
    desc: "Regen- of grondwater dat door een gevel of een keldermuur dringt, vaak zichtbaar na een regenperiode. Ook hier is drogen alleen tijdelijk: de muur of de kelderwand moet waterdicht gemaakt worden.",
  },
];

/** Zo pakt u een vochtige kelder aan, in deze volgorde. */
const kelderStappen: { Icon: ComponentType<{ size?: number }>; title: string; desc: string }[] = [
  {
    Icon: GaugeIcon,
    title: "Meet eerst",
    desc: "Een eenvoudige hygrometer toont de relatieve luchtvochtigheid en de temperatuur. Noteer ze een paar dagen, dan weet u waar u vertrekt, en kunt u achteraf aantonen dat het gelukt is.",
  },
  {
    Icon: ChecklistIcon,
    title: "Zoek de oorzaak",
    desc: "Condensatie, een lek, of vocht van buitenaf? Zie de vijf oorzaken hierboven. Bij opstijgend of doorslaand vocht laat u eerst de muur behandelen.",
  },
  {
    Icon: DoosIcon,
    title: "Maak ruimte",
    desc: "Zet dozen, kasten en textiel weg van de muren. Achter een kast tegen een koude muur is het altijd het vochtigst, en daar begint de schimmel.",
  },
  {
    Icon: DrogerIcon,
    title: "Plaats de droger centraal",
    desc: "Midden in de ruimte, deuren en kelderramen dicht: u droogt de kelder, niet de tuin. Met een condensslang naar een afvoer hoeft u geen reservoir te legen.",
  },
  {
    Icon: ThermoIcon,
    title: "Warm bij onder 15 °C",
    desc: "Een koude kelder droogt traag met een condensdroger: koude lucht houdt nu eenmaal minder vocht vast. Een bouwkachel brengt de temperatuur op peil, of u kiest een adsorptiedroger.",
  },
  {
    Icon: WindIcon,
    title: "Houd het daarna droog",
    desc: "Is de ruimte droog, verlucht dan regelmatig en houd de luchtvochtigheid in het oog. Anders staat u er over een paar maanden opnieuw.",
  },
];

/** Na het drogen: wat voorkomt dat het terugkomt. */
const tips = [
  {
    Icon: ChecklistIcon,
    title: "Vind de oorzaak",
    desc: "Een bouwdroger lost het symptoom op. Laat de oorzaak onderzoeken, anders droogt u elk jaar opnieuw dezelfde muur.",
  },
  {
    Icon: RefreshIcon,
    title: "Verlucht elke dag",
    desc: "Tien minuten dwarsventilatie doet meer dan een raam dat de hele dag op een kier staat. Zeker in een kelder of berging.",
  },
  {
    Icon: DropIcon,
    title: "Hou de hygrometer in het oog",
    desc: "Blijft de luchtvochtigheid boven 60 % hangen, dan is het vocht aan het terugkomen. U ziet het aan de meter voor u het aan de muur ziet.",
  },
];

/**
 * De kelders die we zelf drooglegden, als kaart met foto in plaats van als
 * drie regels in een linklijst. Wie twijfelt of drogen bij hém werkt, kijkt
 * naar een kelder die op de zijne lijkt, niet naar een linktekst.
 */
const REFERENTIES = ["mancave-brugge", "dhr-d-c-antwerpen", "levis"]
  .map(getRealisatie)
  .filter((r): r is Realisatie => !!r);

const faqs = [
  { q: "Hoe lang duurt het drogen van een vochtige kelder?", a: "Afhankelijk van de situatie 2 tot 6 weken. Onze vochtmeting bevestigt wanneer het klaar is." },
  { q: "Werkt een bouwdroger bij condensatieproblemen?", a: "Ja, zeker in combinatie met goede ventilatie." },
  {
    q: "Helpt een bouwdroger tegen opstijgend vocht?",
    a: "Niet blijvend. Een bouwdroger droogt de lucht en de oppervlakte van de muur, maar het grondwater blijft via het metselwerk omhoog trekken zolang de muur niet behandeld is. Laat eerst de oorzaak aanpakken, bijvoorbeeld met een injectie tegen opstijgend vocht; daarna droogt een bouwdroger het restvocht uit de muur.",
  },
  {
    q: "Wat is een goede luchtvochtigheid in huis?",
    a: "Als richtwaarde houdt u de relatieve luchtvochtigheid tussen 40 en 60 %. Blijft ze langdurig daarboven, zeker in een koude kelder, dan krijgt schimmel kans. Ver daaronder wordt de lucht onaangenaam droog. Een eenvoudige hygrometer toont waar u zit.",
  },
  {
    q: "Hoe weet ik of het vocht van condensatie komt of van buiten?",
    a: "Condensatie zit vooral op de koudste plekken: hoeken, achter kasten, rond ramen. Het verergert in de winter en bij weinig verluchting. Opstijgend vocht zie je onderaan de muur, vaak met zoutkorsten. Doorslaand vocht verschijnt na regen, aan de kant van de gevel of de grond. Twijfelt u, laat het dan ter plaatse bekijken.",
  },
  {
    q: "Haalt een bouwdroger schimmel weg?",
    a: "Nee. Drogen neemt de voedingsbodem weg, zodat schimmel niet verder groeit, maar de schimmel zelf moet u nog verwijderen. Bij grote oppervlakken of schimmel die terugkomt, is een professionele sanering de veilige keuze.",
  },
  { q: "Is een bouwdroger veilig bij kinderen en huisdieren?", a: "Ja, volledig veilig. Houd de wateropvang dagelijks in het oog." },
];

const verderLezen: LeesGroep[] = [
  {
    kop: "Toestellen voor kelders en vochtige ruimtes",
    links: [
      { to: toestelPad("ttk170"), toestel: "ttk170", label: "Boost", sub: "Compact, voor één kamer of een kleine kelder." },
      { to: toestelPad("ttk650"), toestel: "ttk650", label: "Ultimate", sub: "Voor ruime kelders en veel vocht." },
      { to: toestelPad("teddh20"), toestel: "teddh20", label: "Bouwkachel voor een koude kelder of garage", sub: "Brengt de ruimte op werkingstemperatuur." },
    ],
  },
  {
    kop: "Eerst begrijpen, dan huren",
    links: [
      { to: "/hoe-drogen-werkt", label: "Hoe drogen werkt: warmte, lucht en ontvochtiging" },
      { to: "/gids/condensdroger-of-adsorptiedroger", label: "Gids: condensdroger of adsorptiedroger in een koude kelder?" },
      { to: "/gids/stroomverbruik-bouwdroger", label: "Gids: wat verbruikt een bouwdroger aan stroom?" },
      { to: "/waarom-bouwdroging", label: "Waarom bouwdroging en niet gewoon wachten" },
      { to: "/ozonbehandeling", label: "Muffe geur die blijft hangen: ozonbehandeling" },
    ],
  },
  {
    kop: "Plannen en verder lezen",
    links: [
      { to: "/verhuur/calculator", label: "Bereken een droogpakket op oppervlakte" },
      { to: "/waterschade", label: "Kelder ondergelopen? Waterschade drogen" },
      { to: "/bouwdroger-huren-west-vlaanderen", label: "Bouwdroger huren in West-Vlaanderen" },
      { to: "/bouwdroger-huren-antwerpen", label: "Bouwdroger huren in de provincie Antwerpen" },
    ],
  },
];

/**
 * De doorsnede van een keldermuur: grond buiten, metselwerk, de ruimte met de
 * droger erin. De vijf bronnen bewegen, de nummers verwijzen naar de lijst
 * ernaast.
 *
 * `aria-hidden`, en dat is geen slordigheid: alles wat de tekening zegt staat
 * voluit in die lijst. Deze pagina wordt geprerenderd voor lezers die geen
 * JavaScript en soms geen CSS uitvoeren (zie CLAUDE.md), en een blok dat
 * alleen in beweging iets zegt, zegt hun niets. De deeltjes zijn daarom
 * versiering bovenop tekst die er sowieso staat.
 */
const Muurdoorsnede = () => (
  <div className="vbron" aria-hidden="true">
    <span className="vb-grond" />
    <span className="vb-muur" />
    <span className="vb-plafond" />
    <span className="vb-ruimte" />
    <span className="vb-vloer" />
    <span className="vb-droger" />
    <span className="vb-zuig" />
    <span className="vb-zuig" style={{ "--d": "1.5s" } as React.CSSProperties} />
    <span className="vb-zuig" style={{ "--d": "3s" } as React.CSSProperties} />

    <span className="vb-tag buiten">Grond</span>
    <span className="vb-tag binnen">Kelder</span>

    {/* 1 · condens op het koude muuroppervlak */}
    <span className="vb-p cond" />
    <span className="vb-p cond" style={{ "--d": "1.2s" } as React.CSSProperties} />
    <span className="vb-p cond" style={{ "--d": "2.4s" } as React.CSSProperties} />

    {/* 2 · bouwvocht uit de chape */}
    <span className="vb-p bouw" style={{ left: "52%", "--d": ".4s" } as React.CSSProperties} />
    <span className="vb-p bouw" style={{ left: "63%", "--d": "1.6s" } as React.CSSProperties} />
    <span className="vb-p bouw" style={{ left: "72%", "--d": "2.8s" } as React.CSSProperties} />

    {/* 3 · een druppel van bovenaf */}
    <span className="vb-p lek" style={{ right: "12%", "--d": ".8s" } as React.CSSProperties} />

    {/* 4 · opstijgend vocht in de muur zelf */}
    <span className="vb-p op" style={{ left: "27%" } as React.CSSProperties} />
    <span className="vb-p op" style={{ left: "31%", "--d": "1.4s" } as React.CSSProperties} />
    <span className="vb-p op" style={{ left: "34%", "--d": "2.6s" } as React.CSSProperties} />

    {/* 5 · doorslaand vocht, dwars door de muur */}
    <span className="vb-p door" style={{ top: "44%", "--d": ".2s" } as React.CSSProperties} />
    <span className="vb-p door" style={{ top: "56%", "--d": "2.3s" } as React.CSSProperties} />

    <span className="vb-nr n1">1</span>
    <span className="vb-nr n2">2</span>
    <span className="vb-nr n3">3</span>
    <span className="vb-nr n4">4</span>
    <span className="vb-nr n5">5</span>
  </div>
);

const RenovatiePage = () => (
  <div className="v3c rn-page">
    <PageMeta
      {...SEO.renovatie}
      jsonLd={[
        serviceSchema({
          name: "Kelder- en renovatiedroging",
          description:
            "Drogen van vochtige kelders, muren en renovatieruimtes met ontvochtigers en bouwkachels, inclusief vochtmeting voor en na.",
          path: "/renovatie",
          serviceType: "Bouwdroging",
        }),
        /*
          De vragen onderaan deze pagina, ook machineleesbaar. Ze stonden
          enkel zichtbaar op de pagina; daardoor kon een AI-antwoord er wel
          uit citeren, maar moest het de vraag-antwoordparen zelf uit de
          HTML afleiden. Zelfde tekst, dus schema en pagina blijven gelijk.
        */
        faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Renovatie", path: "/renovatie" },
        ]),
      ]}
    />

    {/*
      De balk wisselt naar zijn lichte variant zodra `.redtop` onder hem
      ophoudt, en niet op een vast aantal pixels. Hij stond op 420: dan
      wisselde hij al terwijl hij nog boven het rood zweefde, en schoof als
      een melkwit vlak over de hero-tekst. Wie terugscrolde zag een menu dat
      je niet kon lezen. Een ander vast getal lost dat niet op: het rood is
      705 px hoog op een laptop en 1120 px op een telefoon.
    */}
    <V3Header lightAfter={660} darkUntil=".redtop" />

    <main>

    {/* ================= HERO ================= */}
    <div className="redtop">
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="kick">Renovatie &amp; vochtige kelders</span>
            <h1>Een vochtige kelder of natte muren drogen, en ze droog houden.</h1>
            <p>
              Muffe geur, donkere plekken onderaan de muur, schimmel in de hoek: vocht trekt niet
              weg omdat u het raam openzet. Een bouwdroger haalt het uit de lucht en daarmee uit
              muren en vloeren. En als er een blijvende oorzaak achter zit, leest u hieronder
              eerlijk welke dat is en in welke volgorde u ze aanpakt.
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
              src="/vernast/case-kelder.webp"
              alt="Ontvochtiger in een vochtige kelder tijdens een renovatie"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
            <div className="fbadge rd" style={{ bottom: "60px", left: "-6%" }}>
              <span className="ic"><DropIcon size={15} /></span>
              <div>
                40 à 60 % RV
                <small>de richtwaarde waar we naartoe drogen</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* ================= VERTROUWENSRIJ =================
        Deze vier beloftes stonden als witte pillen in de hero zelf. Daar
        zweefden ze los op het rood, en de header schoof er bij het scrollen
        half overheen. Op wit, onder de vouw van de hero, horen ze bij de
        pagina in plaats van bij het beeld. */}
    <div className="wrap">
      <div className="trust">
        <div><GaugeIcon size={19} /> Vochtmeting voor én na</div>
        <div><TruckIcon size={19} /> Binnen 24 uur geleverd</div>
        <div><ChecklistIcon size={19} /> Levering en plaatsing inbegrepen</div>
        <div><SupportIcon size={19} /> Advies vóór u huurt</div>
      </div>
    </div>

    {/* ================= WAAROM NIET WACHTEN ================= */}
    <section className="sw">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Waarom het haast heeft</span>
          <h2 className="sec">Vocht wacht niet tot u tijd hebt.</h2>
          <p className="lede">
            Een vochtige ruimte wordt niet langzaam een beetje erger. Schimmel verdubbelt in
            dagen, nat hout en natte isolatie zijn onomkeerbaar beschadigd, en wat begint als een
            geur eindigt als een post in een verkoopakte.
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

    {/* ================= HERKENT U DIT ================= */}
    <section className="sr">
      <div className="wrap split">
        <div>
          <span className="kick">Herkent u dit?</span>
          <h2 className="sec">Vijf signalen dat drogen zin heeft.</h2>
          <p className="lede">
            Eén van deze vijf is genoeg om te laten meten. Bij twee of meer is het zelden
            toeval: er zit ergens vocht dat niet weg kan. Bel ons, dan overlopen we uw situatie
            voor u iets huurt, ook als het antwoord is dat u bij ons niets nodig hebt.
          </p>
          <p className="lede">
            Twijfelt u welk toestel bij uw volume past? De{" "}
            <Link to="/verhuur/calculator">droogcalculator</Link> rekent het uit op oppervlakte en
            plafondhoogte, en <Link to="/hoe-drogen-werkt">hoe drogen werkt</Link> legt uit waarom
            de combinatie van warmte, luchtbeweging en ontvochtiging het werk doet.
          </p>
        </div>
        <Reveal from="right" className="checkcard">
          <ul>
            {checklist.map((item) => (
              <li key={item}>
                <CheckIcon size={16} strokeWidth={3} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="cfoot">
            <p>Herkent u er één of meer? Eén telefoontje volstaat voor advies.</p>
            <a className="btn" href={`tel:${CONTACT.phoneE164}`}>
              <PhoneIcon /> Bel ons
            </a>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ================= OORZAAK OF SYMPTOOM ================= */}
    <section className="sw" id="oorzaken">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Oorzaak of symptoom</span>
          <h2 className="sec">Een bouwdroger lost vocht op. Niet altijd de reden dat het er is.</h2>
          <p className="lede">
            Een bouwdroger haalt vocht uit de lucht, en daarmee ook uit muren en vloeren. Komt dat
            vocht steeds opnieuw binnen, dan droogt u tegen de stroom in: u huurt dan een toestel
            dat werkt zolang het er staat. Kijk daarom eerst waar het vandaan komt. Bij drie van
            deze vijf oorzaken is drogen het antwoord; bij twee komt er eerst iets anders.
          </p>
        </div>
        <div className="split boven">
          <Reveal from="left" className="vbron-kolom">
            <Muurdoorsnede />
            <p className="vbijschrift">
              Doorsnede van een keldermuur: links de grond, rechts de ruimte met de droger erin.
              De genummerde plekken zijn de vijf plaatsen waar vocht binnenkomt, en komen
              overeen met de vijf oorzaken in de lijst.
            </p>
          </Reveal>
          <div className="oorzlijst">
            {oorzaken.map(({ Icon, title, helpt, desc }, i) => (
              <Reveal from="up" delay={i * 0.06} className="oorz" key={title}>
                <span className="oic">
                  <Icon size={19} />
                  {/* Hetzelfde nummer als in de doorsnede hiernaast. */}
                  <i>{i + 1}</i>
                </span>
                <div>
                  <div className="okop">
                    <h3>{title}</h3>
                    <span className={`verdict ${helpt ? "ja" : "nee"}`}>
                      {helpt ? <CheckIcon size={12} /> : <DropIcon size={12} />}
                      {helpt ? "Een bouwdroger helpt" : "Eerst de oorzaak"}
                    </span>
                  </div>
                  <p>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="note">
          <b>Zit de oorzaak in de muur zelf?</b> Opstijgend vocht, een lekkende keldermuur of een
          kelder die waterdicht moet: daarvoor kunt u terecht bij{" "}
          <a href="https://vernast-vochtbestrijding.be/">Vernast Vochtbestrijding</a>, onze
          zusterfirma. Is de oorzaak weg, dan droogt een bouwdroger het restvocht uit de muur, in
          die volgorde en niet omgekeerd.
        </div>
      </div>
    </section>

    {/* ================= LUCHTVOCHTIGHEID ================= */}
    <section className="sr">
      <div className="wrap split">
        <div>
          <span className="kick">De richtwaarde</span>
          <h2 className="sec">Mik op 40 à 60 % relatieve luchtvochtigheid.</h2>
          <p className="lede">
            De relatieve luchtvochtigheid zegt hoeveel vocht de lucht bevat tegenover wat ze bij
            die temperatuur maximaal kan dragen. Voor een woning geldt 40 tot 60 % als
            richtwaarde. Blijft ze langdurig hoger, dan krijgt schimmel kans, zeker op koude
            muren. Ver daaronder wordt de lucht onaangenaam droog.
          </p>
          <p className="lede">
            In een kelder speelt de temperatuur mee: koude lucht zit sneller verzadigd, en een
            koude muur trekt het vocht naar zich toe. Daarom kan een kelder muf ruiken terwijl de
            rest van het huis in orde is. Onze ontvochtigers hebben een ingebouwde hygrostaat: ze
            schakelen terug zodra de ingestelde streefwaarde bereikt is, in plaats van door te
            draaien tot de lucht kurkdroog staat.
          </p>
          <div className="chips">
            <span>Hygrometer vanaf € 15</span>
            <span>Meting voor én na inbegrepen</span>
            <span>Meetrapport € 49</span>
          </div>
        </div>
        <Reveal from="right" className="split-vis">
          {/* `wandelt`: het streepje loopt van een verzadigde kelder naar de
              streefzone, zodat de meter toont wat drogen met hem doet. */}
          <div className="meter wandelt">
            <div className="t">Relatieve luchtvochtigheid</div>
            <div className="big">40 – 60<small>% RV</small></div>
            <div className="scale" style={{ "--at": "50%" } as React.CSSProperties}>
              <b />
            </div>
            <div className="legend">
              <span>20 % · te droog</span>
              <span>80 % · schimmel</span>
            </div>
            <p style={{ fontSize: "13px", color: "var(--txt-mid)", margin: "16px 0 0", lineHeight: 1.6 }}>
              Onder 40 % wordt de lucht onaangenaam en krimpt hout. Boven 60 % begint schimmel aan
              een koude muur. Daartussen zit de zone waar we een kelder naartoe drogen en waar u
              hem daarna houdt.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ================= SCHIMMEL ================= */}
    <section className="sw">
      <div className="wrap split rev">
        <Reveal from="left" className="split-vis">
          <img
            src="/vernast/schimmel-muur.webp"
            alt="Schimmelvorming op een vochtige binnenmuur"
            width={800}
            height={600}
            loading="lazy"
            decoding="async"
          />
        </Reveal>
        <div>
          <span className="kick">In deze volgorde</span>
          <h2 className="sec">Eerst drogen, dan saneren.</h2>
          <p className="lede">
            Schimmel heeft vocht nodig. Drogen neemt die voedingsbodem weg, zodat hij niet verder
            groeit. Maar de schimmel die er al zit, verdwijnt er niet mee. Die moet u na het
            drogen verwijderen, en bij grote oppervlakken laat u dat beter professioneel doen.
          </p>
          <p className="lede">
            Doe het in die volgorde. Saneren op een natte muur heeft weinig zin: de schimmel komt
            terug zolang het vocht blijft, en u hebt dan twee keer betaald voor hetzelfde werk.
            Voor een hardnekkig geval of een muffe geur die na het drogen blijft hangen, bestaat
            er nog een stap: een <Link to="/ozonbehandeling">ozonbehandeling</Link> pakt de
            sporen en de geur aan in de ruimte zelf.
          </p>
        </div>
      </div>
    </section>

    {/* ================= STAPPENPLAN ================= */}
    <section className="sr" id="stappenplan">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Stap voor stap</span>
          <h2 className="sec">Een vochtige kelder drogen: zo pakt u het aan.</h2>
          <p className="lede">
            Zes stappen, in deze volgorde. Wie stap twee overslaat, herhaalt stap vier elk jaar.
          </p>
        </div>
        <div className="stapkaarten">
          {kelderStappen.map(({ Icon, title, desc }, i) => (
            <Reveal from="up" delay={(i % 3) * 0.08} className="stk" key={title}>
              <div className="stkic"><Icon size={20} /></div>
              <span className="stknr">Stap {i + 1}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ================= PAKKETTEN ================= */}
    <section className="sw" id="pakketten">
      <div className="wrap">
        <div className="sec-head mid">
          <span className="kick">Welk toestel</span>
          <h2 className="sec">Drie ontvochtigers, één per volume.</h2>
          <p className="lede">
            Niet het zwaarste toestel, maar het toestel dat bij uw ruimte past. Een te grote
            droger in een kleine kelder droogt niet sneller, hij verbruikt alleen meer stroom.
          </p>
        </div>
        <Pakketkaarten />
      </div>
    </section>

    {/* ================= KELDERS DIE WE DROOGDEN ================= */}
    <section className="sr" id="realisaties">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Uit de praktijk</span>
          <h2 className="sec">Kelders die we droog kregen.</h2>
          <p className="lede">
            Drie werven met hun meetwaarden, hun duur en de toestellen die er stonden. Lijkt er
            één op uw situatie, dan weet u meteen wat u mag verwachten.
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
      </div>
    </section>

    {/* ================= DROOG HOUDEN ================= */}
    <section className="sw">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Na de ophaling</span>
          <h2 className="sec">Vocht voorgoed aanpakken, niet elk jaar opnieuw.</h2>
          <p className="lede">
            De droger gaat weer mee. Wat daarna gebeurt, bepaalt of u ons over een jaar opnieuw
            belt. Drie dingen die het verschil maken.
          </p>
        </div>
        <div className="g3">
          {tips.map(({ Icon, title, desc }, i) => (
            <Reveal from="up" delay={i * 0.08} className="kaart" key={title}>
              <div className="ki"><Icon size={20} /></div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <VerderLezen titel="Verder lezen over vochtige kelders" groepen={verderLezen} />

    {/*
      De vragen in de vorm van de homepage: links de titel met het
      hulpkaartje, rechts de vragen. Ze stonden hier als een raster van open
      kaarten, en daarna kort als een eigen accordeon; dat waren drie vormen
      van hetzelfde blok op één site. Zie src/components/content/FaqBlok.tsx.
    */}
    <FaqBlok
      titel="Wat klanten met een vochtige kelder ons vragen."
      vragen={faqs}
      sleutel="rn-faq"
    />

    {/* ================= SLOT-CTA ================= */}
    <section className="sw">
      <div className="wrap">
        <div className="manband">
          <div className="mb-t">
            <span className="mbk">Pak het nu aan</span>
            <h3>Hoe langer het vocht er zit, hoe meer er droog gemaakt moet worden.</h3>
            <p>
              Laat uw situatie bekijken voor u iets huurt. Wij meten, rekenen het pakket uit en
              leveren binnen 24 uur. En als drogen niet het antwoord is, zeggen we dat ook.
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
            src="/vernast/man-vochtmeter.webp"
            alt="Vernast specialist meet het vochtgehalte van een muur"
            width={600}
            height={900}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>

    <ContactBlok
      kicker="Een vraag over uw kelder?"
      titel="Niet zeker of drogen bij u de oplossing is?"
      lede="Beschrijf wat u ziet en ruikt, dan zeggen wij welke oorzaak het waarschijnlijk is en of een bouwdroger helpt. Ook als het antwoord is dat u bij ons niets nodig hebt."
      onderwerpen={[
        "Vochtige kelder of berging",
        "Schimmel op muren of plafond",
        "Vocht na een verbouwing",
        "Opstijgend of doorslaand vocht",
        "Iets anders",
      ]}
      placeholder="Bv. kelder van 25 m², muffe geur en donkere plekken onderaan de muur, vooral in de winter."
    />

    </main>

    <V3Footer />
  </div>
);

export default RenovatiePage;

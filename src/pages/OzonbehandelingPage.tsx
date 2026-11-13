import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import Reveal from "@/components/Reveal";
import OzonForm from "@/components/ozon/OzonForm";
import { ArrowRightIcon, GoogleIcon, PhoneIcon, StarIcon } from "@/components/home-v3/icons";
import {
  KelderIcon,
  SchildIcon,
  MijtIcon,
  NeusIcon,
  SleutelIcon,
  SporenIcon,
  WaterschadeIcon,
} from "@/components/ozon/ozonIcons";
import { breadcrumbSchema, faqSchema, organizationSchema, serviceSchema } from "@/lib/schema";
import { CONTACT } from "@/lib/site";
import { SEO } from "@/data/seo";
import { eersteReviews } from "@/data/reviews";
import "@/styles/ozonbehandeling.css";

/**
 * Ozonbehandeling — de ontschimmelingsdienst, met een eigen pagina.
 *
 * De inhoud komt van de zustersite (vernast-vochtbestrijding.be/ozonbehandeling),
 * maar niet als kopie: daar is ozon het sluitstuk van een vochtsanering, hier is
 * het het sluitstuk van een droging. Deze pagina legt daarom telkens de link naar
 * wat deze site wél doet — drogen na waterschade, een vochtige kelder, de
 * drooggarantie — in plaats van naar muurinjectie en kelderbekuiping.
 *
 * De vormtaal is die van de v3-schil (rood #C8102E, maroon, Plus Jakarta Sans):
 * de zustersite gebruikt blauw/groen voor de O₃-animaties, en dat hoort niet op
 * een pagina met deze header en footer. Alle animaties draaien hier op CSS in
 * dezelfde rood-maroon-palet.
 *
 * Twee dingen bewust zo:
 *  - Geen `opacity:0` als begintoestand in de HTML. Deze pagina wordt bij de
 *    build geprerenderd, en een animatiebibliotheek met een beginstaat zet die
 *    letterlijk in `dist/ozonbehandeling/index.html` — onzichtbare inhoud voor
 *    precies de AI-antwoordmachines waarvoor we prerenderen. De scroll-animaties
 *    lopen daarom via <Reveal>, dat pas ná mount verbergt.
 *  - De FAQ staat in `<details>`, niet in een JS-accordeon: de antwoorden staan
 *    zo volledig in de HTML, ook zonder JavaScript.
 */

/* De FAQ staat één keer in deze lijst, en voedt zowel het scherm als de JSON-LD.
   Twee kopieën zouden uit de pas lopen, en dan markeert de schema iets wat de
   bezoeker niet ziet. */
const FAQ: { question: string; answer: string }[] = [
  {
    question: "Waarom komt mijn schimmel steeds terug na het reinigen?",
    answer:
      "Omdat oppervlakkig reinigen alleen de zichtbare schimmel verwijdert. De microscopische sporen blijven achter in kieren, voegen, textiel en in de lucht, en zetten zich opnieuw af zodra de omstandigheden goed zijn. Een ozonbehandeling doodt die achtergebleven sporen in de hele ruimte. Belangrijk: los altijd eerst de vochtoorzaak op en droog de constructie, anders keert schimmel sowieso terug.",
  },
  {
    question: "Is een ozonbehandeling veilig?",
    answer:
      "Ja, mits professioneel uitgevoerd. Tijdens de behandeling mag er niemand in de ruimte, geen mensen, huisdieren of planten: ozon is krachtig juist omdat het reactief is. Na de behandeling vervalt het vanzelf tot gewone zuurstof en volstaat een korte verluchting. Daarna is de ruimte weer veilig te gebruiken en blijven er geen chemische residu's achter op oppervlakken of in textiel.",
  },
  {
    question: "Vervangt ozon het drogen van mijn woning?",
    answer:
      "Nee. Ozon is de afronding: het ruimt de bestaande besmetting op, maar lost de oorzaak niet op. Blijft de muur of de chape vochtig, dan keert schimmel terug. Daarom drogen we eerst de constructie met bouwdrogers tot de vochtmeting het bevestigt, en zetten we ozon in als sluitstuk.",
  },
  {
    question: "Waarvoor gebruiken jullie ozon nog meer?",
    answer:
      "Naast schimmel zetten we ozon in tegen huisstofmijt in matrassen, tapijt en textiel, tegen hardnekkige geuren van vocht, rook, huisdieren of brand, voor de ontsmetting van kelders en kruipruimtes, na waterschade, en om een woning fris en geurvrij te maken voor verhuur of verkoop.",
  },
  {
    question: "Welk toestel gebruiken jullie?",
    answer:
      "Wij werken met professionele ozongeneratoren van Duitse makelij, geen hobbytoestellen. Ze leveren een hoog, regelbaar ozondebiet dat we afstemmen op het volume van de ruimte, zodat de behandeling grondig en gecontroleerd verloopt. De inzet gebeurt altijd door onze techniekers, met de nodige veiligheidsmaatregelen.",
  },
  {
    question: "Hoelang duurt het en kan ik er daarna meteen in?",
    answer:
      "Een behandeling duurt doorgaans enkele uren, afhankelijk van het volume van de ruimte. Tijdens de werking is de ruimte onbemand en afgesloten. Daarna verluchten we kort; zodra de waarden veilig zijn, is de ruimte weer normaal te gebruiken. Onze technieker zegt u ter plaatse hoelang dat in uw situatie is.",
  },
];

/** De zes situaties waarvoor we ozon inzetten. */
const INZET: { icon: JSX.Element; title: string; text: string }[] = [
  {
    icon: <SporenIcon />,
    title: "Schimmel & sporen",
    text: "Na het ontschimmelen: de sporen die achterbleven in lucht, voegen en textiel worden gedood, zodat de schimmel geen herstart krijgt.",
  },
  {
    icon: <MijtIcon />,
    title: "Huisstofmijt",
    text: "Ozon bestrijdt huisstofmijt in matrassen, tapijt en textiel. Een verademing voor wie allergisch is en niet weet waar het vandaan komt.",
  },
  {
    icon: <NeusIcon />,
    title: "Hardnekkige geuren",
    text: "Vocht-, rook-, huisdier- of brandgeur wordt geneutraliseerd op molecuulniveau. Niet overdekt met een geurstof, maar afgebroken.",
  },
  {
    icon: <KelderIcon />,
    title: "Kelders & kruipruimtes",
    text: "Vochtige, slecht verluchte ruimtes waar schimmel en muffe lucht zich vastzetten, en waar u met een borstel niet overal bij kunt.",
  },
  {
    icon: <WaterschadeIcon />,
    title: "Na waterschade",
    text: "Na een lek of een overstroming: ontsmetting van de ruimte en het wegnemen van de vochtgeur die na het drogen blijft hangen.",
  },
  {
    icon: <SleutelIcon />,
    title: "Voor verhuur of verkoop",
    text: "Een frisse, ontsmette en geurvrije woning bij de overdracht. Geen muffe eerste indruk bij een bezoek of een plaatsbeschrijving.",
  },
];

/*
 * De zes spaken van de hero-animatie: elk een spore op de kring, met het
 * O₃-deeltje dat ernaartoe vertrekt.
 *
 * De hoek staat in `--a` en de vertraging regelt wanneer die spore aan de beurt
 * is: zes sporen die tegelijk dichtklappen ziet eruit als een knipperende lamp,
 * één voor één rond de cirkel als een behandeling die zich verspreidt. Daarom
 * lopen de vertragingen mee met de hoek — de klap draait met de wijzers van de
 * klok mee.
 *
 * Vaste waarden, geen `Math.random()`: de pagina wordt geprerenderd en een
 * willekeurige waarde levert bij hydratatie een andere HTML op dan in dist.
 */
const SPAKEN: { id: string; style: CSSProperties }[] = [
  { id: "p1", style: { "--a": "-90deg", animationDelay: "0s" } as CSSProperties },
  { id: "p2", style: { "--a": "-30deg", animationDelay: "1s" } as CSSProperties },
  { id: "p3", style: { "--a": "30deg", animationDelay: "2s" } as CSSProperties },
  { id: "p4", style: { "--a": "90deg", animationDelay: "3s" } as CSSProperties },
  { id: "p5", style: { "--a": "150deg", animationDelay: "4s" } as CSSProperties },
  { id: "p6", style: { "--a": "210deg", animationDelay: "5s" } as CSSProperties },
];

/*
 * De zwevende O₃-moleculen en de sporen die ze opruimen.
 *
 * Vaste posities, duur en vertraging — geen `Math.random()`. De pagina wordt bij
 * de build geprerenderd; een willekeurige waarde zou in de HTML anders staan dan
 * wat React in de browser berekent, en dat is precies een hydratatiefout.
 *
 * De vertragingen lopen bewust niet gelijk op: zes sporen die tegelijk ploffen
 * ziet eruit als een storing, verspreid over de cyclus als een behandeling.
 */
const MOLECULEN: { id: string; style: CSSProperties }[] = [
  { id: "m1", style: { left: "8%", top: "18%", "--s": "58px", "--dur": "11s", "--dx": "26px", "--dy": "-20px", "--dr": "34deg" } as CSSProperties },
  { id: "m2", style: { left: "62%", top: "12%", "--s": "44px", "--dur": "9s", "--dx": "-22px", "--dy": "26px", "--dr": "-42deg" } as CSSProperties },
  { id: "m3", style: { left: "78%", top: "58%", "--s": "66px", "--dur": "13s", "--dx": "-30px", "--dy": "-24px", "--dr": "28deg" } as CSSProperties },
  { id: "m4", style: { left: "26%", top: "68%", "--s": "40px", "--dur": "10s", "--dx": "24px", "--dy": "-18px", "--dr": "-30deg" } as CSSProperties },
  { id: "m5", style: { left: "46%", top: "38%", "--s": "52px", "--dur": "12s", "--dx": "18px", "--dy": "22px", "--dr": "46deg" } as CSSProperties },
];

const SPOREN: { id: string; style: CSSProperties }[] = [
  { id: "s1", style: { left: "20%", top: "40%", "--ss": "42px", "--sd": "9s", animationDelay: "0s" } as CSSProperties },
  { id: "s2", style: { left: "37%", top: "72%", "--ss": "34px", "--sd": "9s", animationDelay: "1.5s" } as CSSProperties },
  { id: "s3", style: { left: "55%", top: "26%", "--ss": "48px", "--sd": "9s", animationDelay: "3s" } as CSSProperties },
  { id: "s4", style: { left: "70%", top: "76%", "--ss": "30px", "--sd": "9s", animationDelay: "4.5s" } as CSSProperties },
  { id: "s5", style: { left: "86%", top: "34%", "--ss": "38px", "--sd": "9s", animationDelay: "6s" } as CSSProperties },
  { id: "s6", style: { left: "12%", top: "76%", "--ss": "34px", "--sd": "9s", animationDelay: "7.5s" } as CSSProperties },
];

/** Wat de generator doet, in de taal van de werf. */
const TECHNIEK: [string, string][] = [
  ["Herkomst", "Duitse makelij"],
  ["Vermogen", "Hoog ozondebiet"],
  ["Regeling", "Timer & debiet"],
  ["Inzet", "Onbemand, door onze technieker"],
];

const OzonbehandelingPage = () => (
  <div className="oz-page">
    <PageMeta
      {...SEO.ozonbehandeling}
      path="/ozonbehandeling"
      jsonLd={[
        organizationSchema(),
        serviceSchema({
          name: "Ozonbehandeling en ontschimmeling",
          description:
            "Professionele ozonbehandeling tegen schimmelsporen, huisstofmijt en hardnekkige geuren, als sluitstuk na het drogen en ontschimmelen van een ruimte.",
          path: "/ozonbehandeling",
          serviceType: "Ontschimmeling",
        }),
        faqSchema(FAQ),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Ozonbehandeling", path: "/ozonbehandeling" },
        ]),
      ]}
    />

    {/*
      De header staat buiten <main>: hij hoort bij de schil, niet bij de inhoud.
      Hij staat ook buiten `.oz-top` — anders dan op de oudere handoff-pagina's,
      waar hij ín de rode kop zit. Dat mag, want `.hdr` is `position:fixed` en
      zweeft dus los boven de achtergrond; zo houdt deze pagina wél één
      <main>-landmark, net als de homepage.
    */}
    <V3Header lightAfter={460} />

    <main>
    {/* ================= HERO ================= */}
    <div className="oz-top">
      <section className="oz-hero">
        <div className="oz-wrap oz-hero-grid">
          <div className="oz-hero-copy">
            <span className="oz-kick">Ontschimmeling · schimmel &amp; geur</span>
            <h1>Schimmel weggeschrobd en tóch terug? Dan zit het dieper dan de muur.</h1>
            <p>
              Een ozonbehandeling verspreidt actieve zuurstof (O₃) tot in elke kier van de ruimte,
              doodt schimmelsporen, bacteriën en huisstofmijt, en breekt de muffe vochtgeur af, ook
              daar waar borstel en verf niet raken.
            </p>
            <div className="oz-hero-cta">
              <a className="ozbtn ozbtn-white" href="#boeken">
                Boek uw ozonbehandeling <ArrowRightIcon size={13} strokeWidth={2.6} />
              </a>
              <a className="ozbtn ozbtn-ghost" href={`tel:${CONTACT.phoneE164}`}>
                <PhoneIcon size={14} /> {CONTACT.phoneLocal}
              </a>
            </div>
            <ul className="oz-hero-usp">
              <li>Uitgevoerd door onze eigen techniekers</li>
              <li>Geen chemische residu&apos;s</li>
              <li>Heel Vlaanderen</li>
            </ul>
          </div>

          {/*
            De hero-animatie: ozon dat rondom uitwaaiert en de sporen aanvalt.

            Hier stond eerst een O₃-bol met drie atomen eromheen. Mooi, maar het
            zei niets — een molecuul dat om zichzelf draait vertelt niet dat er
            iets opgeruimd wordt. Nu staan de sporen op een kring errond, slaat
            de generator in het midden pulsen uit in álle richtingen, en klapt
            elke spore dicht op het moment dat het deeltje bij hem aankomt.

            `aria-hidden` omdat het decor is: de tekst ernaast zegt hetzelfde, en
            een schermlezer heeft niets aan twaalf lege spans. Alles draait op
            CSS-keyframes, dus er staat geen begintoestand in de geprerenderde
            HTML.
          */}
          <div className="oz-hero-vis" aria-hidden="true">
            <div className="oz-orbit">
              <span className="oz-ring r1" />
              <span className="oz-ring r2" />
              <span className="oz-ring r3" />
              <span className="oz-core">O₃</span>
              {SPAKEN.map((spaak) => (
                <span className="oz-spoke" key={spaak.id} style={spaak.style}>
                  <i className="oz-shot" />
                  <i className="oz-target" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* ================= HERKENBAAR ================= */}
    <section className="oz-sec oz-light">
      <div className="oz-wrap">
        <Reveal className="oz-head">
          <span className="oz-kick red">Herkenbaar?</span>
          <h2 className="oz-h2">U heeft ontschimmeld, en toch komt hij terug.</h2>
          <p className="oz-lede">
            Dat ligt zelden aan hoe grondig u geschrobd heeft. Schimmel werkt met sporen, en die
            zitten op plaatsen waar een doek nooit komt.
          </p>
        </Reveal>

        <div className="oz-three">
          <Reveal className="oz-card">
            <span className="oz-num">01</span>
            <h3>Sporen blijven achter</h3>
            <p>
              Schimmel plant zich voort via microscopische sporen die in kieren, voegen en poriën
              zitten. Wat u wegveegt is maar het topje.
            </p>
          </Reveal>
          <Reveal className="oz-card" delay={0.08}>
            <span className="oz-num">02</span>
            <h3>De ruimte blijft besmet</h3>
            <p>
              Sporen zweven ook in de lucht en zetten zich elders opnieuw af. U reinigt één muur,
              maar de kamer blijft een broedplaats.
            </p>
          </Reveal>
          <Reveal className="oz-card" delay={0.16}>
            <span className="oz-num">03</span>
            <h3>De geur komt telkens terug</h3>
            <p>
              De muffe schimmelgeur zit vastgezet in materialen en textiel. Luchten en schilderen
              maskeren het even, daarna is het er weer.
            </p>
          </Reveal>
        </div>

        <Reveal className="oz-note" delay={0.1}>
          <b>Eerst droog, dan ozon.</b> Ozon doodt wat er is en doorbreekt de cirkel, maar zonder
          een droge constructie keert schimmel terug. Zit er nog vocht in muur of chape, dan drogen
          we eerst, met{" "}
          <Link to="/verhuur/calculator">een berekend droogpakket</Link>, bevestigd door een
          vochtmeting. Pas daarna heeft een behandeling zin.
        </Reveal>
      </div>
    </section>

    {/* ================= WAT IS OZON ================= */}
    <section className="oz-sec oz-red">
      <div className="oz-wrap oz-split">
        <Reveal className="oz-split-copy">
          <span className="oz-kick onred">Wat is ozon?</span>
          <h2 className="oz-h2">Zuurstof met een extra atoom.</h2>
          <p className="oz-lede">
            De lucht die u inademt is O₂: zuurstof met twee atomen. Ozon is O₃, met een derde, los
            gebonden atoom. Net dat extra atoom maakt ozon zo krachtig.
          </p>
          <p className="oz-body">
            Dat derde atoom laat makkelijk los en valt schimmelsporen, bacteriën en geurmoleculen
            aan. Daarna vervalt ozon vanzelf weer tot gewone zuurstof, <b>zonder residu</b>. En
            omdat het een gas is, verspreidt het zich uit zichzelf naar élke hoek van de ruimte.
          </p>
        </Reveal>

        {/* De omzetting O₂ → O₃, puur CSS. Decoratief, dus aria-hidden. */}
        <Reveal className="oz-split-vis" delay={0.1}>
          <div className="oz-mol" aria-hidden="true">
            <div className="oz-mol-side">
              <div className="oz-mol-atoms two">
                <i />
                <i />
              </div>
              <b>O₂</b>
              <small>Gewone lucht, stabiel</small>
            </div>
            <div className="oz-mol-arrow">
              <span className="oz-spark" />
              <svg width="30" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
              <small>+ energie</small>
            </div>
            <div className="oz-mol-side hot">
              <div className="oz-mol-atoms three">
                <i />
                <i />
                <i className="loose" />
              </div>
              <b>O₃</b>
              <small>Reactief, kortstondig, krachtig</small>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ================= HOE WERKT HET ================= */}
    <section className="oz-sec oz-light">
      <div className="oz-wrap">
        <Reveal className="oz-head oz-head-mid">
          <span className="oz-kick red">Hoe werkt het?</span>
          <h2 className="oz-h2">Een gas dat overal komt waar u niet bij kunt.</h2>
          <p className="oz-lede">
            Een ozongenerator zet de zuurstof in de kamer om in ozon. Omdat het een gas is,
            verspreidt het zich vanzelf: tot in kieren, voegen, achter meubels, in textiel en in het
            ventilatiekanaal, plekken die u met een borstel nooit bereikt.
          </p>
        </Reveal>

        {/*
          De animatie van de zustersite, in onze kleuren. Daar is ze blauw op
          marineblauw (blauw = ozon, groen = spore); hier is de bak maroon en is
          de actieve zuurstof wit met een rode kern.

          De schimmelmuur maakt de praktijksituatie zichtbaar. Daarover vliegt
          een O₃-deeltje op een spore af, en pas als het raakt klapt de spore
          dicht. Met de legende eronder is in één blik duidelijk wie wie is.

          De posities staan hard in de lijsten hieronder en niet op
          `Math.random()`: deze pagina wordt bij de build geprerenderd, en een
          willekeurige waarde zou bij hydratatie niet overeenkomen met de HTML.
        */}
        <Reveal className="oz-stage-wrap" delay={0.08}>
          <div className="oz-stage" aria-label="Schimmelmuur met animatie: actieve zuurstof breekt schimmelsporen af">
            <span className="oz-glow" aria-hidden="true" />

            {MOLECULEN.map((mol) => (
              <span className="oz-mol3" key={mol.id} style={mol.style} aria-hidden="true">
                <i className="oz-bond b1" />
                <i className="oz-bond b2" />
                <i className="oz-at a1" />
                <i className="oz-at a2" />
                <i className="oz-at a3" />
              </span>
            ))}

            {SPOREN.map((spore) => (
              <span className="oz-spore" key={spore.id} style={spore.style} aria-hidden="true">
                <i className="oz-spore-body" />
                <i className="oz-zap" />
              </span>
            ))}

          </div>

          {/*
            De legende staat naast de bak, niet erin. Binnenin lag ze op een
            telefoon over de onderste sporen heen: die staan op een vast
            percentage van de hoogte, dus wegschuiven kon niet. Nu zweeft ze op
            een breed scherm nog steeds over de onderrand, en zakt ze op een
            smal scherm gewoon onder de bak.
          */}
          <div className="oz-legend">
            <span className="oz-lg o3">
              <i /> <b>O₃</b> actieve zuurstof
            </span>
            <span className="oz-lg sp">
              <i /> schimmelspore
            </span>
          </div>
        </Reveal>

        <Reveal className="oz-after" delay={0.12}>
          <p>
            Tijdens de behandeling is de ruimte onbemand. Daarna vervalt de ozon vanzelf terug tot
            gewone zuurstof, en na een korte verluchting is de ruimte weer veilig te gebruiken. Er
            blijven geen chemische residu&apos;s achter op oppervlakken of in textiel.
          </p>
        </Reveal>
      </div>
    </section>

    {/* ================= DE CIRKEL DOORBREKEN ================= */}
    <section className="oz-sec oz-red">
      <div className="oz-wrap">
        <Reveal className="oz-head">
          <span className="oz-kick onred">De cirkel doorbreken</span>
          <h2 className="oz-h2">Waarom ozon ná het drogen en ontschimmelen komt.</h2>
          <p className="oz-lede">
            Ontschimmelen verwijdert de zichtbare schimmel. Ozon ruimt op wat achterblijft, zodat de
            schimmel geen herstart krijgt.
          </p>
        </Reveal>

        <div className="oz-steps">
          <Reveal className="oz-step">
            <span className="oz-step-n">1</span>
            <h3>Droog en ontschimmel eerst</h3>
            <p>
              De constructie droogt tot de vochtmeting het bevestigt en de zichtbare schimmel wordt
              verwijderd. Zie <Link to="/ontschimmeling">ontschimmeling</Link>. Het oppervlak oogt weer proper.
            </p>
          </Reveal>
          <Reveal className="oz-step" delay={0.08}>
            <span className="oz-step-n">2</span>
            <h3>Ozon ruimt de rest op</h3>
            <p>
              De behandeling doodt de achtergebleven sporen in de lucht, in kieren en in textiel, in
              de hele ruimte, niet alleen op de muur.
            </p>
          </Reveal>
          <Reveal className="oz-step" delay={0.16}>
            <span className="oz-step-n">3</span>
            <h3>Geen herbesmetting</h3>
            <p>
              Zonder levende sporen die zich opnieuw kunnen vestigen blijft de ruimte, mits droog,
              langdurig schimmelvrij en geurloos.
            </p>
          </Reveal>
        </div>

        <Reveal className="oz-band" delay={0.1}>
          <div className="oz-band-t">
            <span className="oz-kick onred">Waar drogen ophoudt</span>
            <h3>Eerst meten, dan drogen, dan ozon.</h3>
            <p>
              Wij zijn in de eerste plaats droogspecialisten. Daarom kijken we eerst of het vocht
              echt weg is: na <Link to="/waterschade">waterschade</Link> of in een{" "}
              <Link to="/renovatie">vochtige kelder</Link> is dat het halve werk. Pas als de meting
              droog zegt, is ozon het sluitstuk dat de geur en de sporen wegneemt.
            </p>
            <a className="ozbtn ozbtn-white" href="#boeken">
              Vraag uw behandeling aan <ArrowRightIcon size={13} strokeWidth={2.6} />
            </a>
          </div>
          <img
            className="oz-band-man"
            src="/vernast/man-schimmelpak.webp"
            alt="Vernast-specialist in beschermpak bij een ozonbehandeling"
            width={700}
            height={900}
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>

    {/* ================= WAARVOOR ZETTEN WIJ HET IN ================= */}
    <section className="oz-sec oz-light">
      <div className="oz-wrap">
        <Reveal className="oz-head">
          <span className="oz-kick red">Waarvoor zetten wij het in?</span>
          <h2 className="oz-h2">Meer dan alleen schimmel.</h2>
          <p className="oz-lede">
            Omdat ozon microben én geurmoleculen aanpakt, gebruiken we het voor uiteenlopende
            situaties, altijd als aanvulling op een gezonde, droge ruimte.
          </p>
        </Reveal>

        <div className="oz-grid6">
          {INZET.map((item, i) => (
            <Reveal className="oz-use" key={item.title} delay={(i % 3) * 0.07}>
              <span className="oz-use-ic">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ================= ONZE TECHNIEK ================= */}
    {/*
      Techniek en veiligheid stonden hier als twee panelen naast elkaar in één
      sectie. Uit elkaar getrokken omdat het twee verschillende vragen zijn —
      "waarmee werken jullie" en "is het veilig" — en omdat de pagina sindsdien
      strikt wit en rood afwisselt: twee blokken in één sectie delen
      noodzakelijkerwijs dezelfde ondergrond.
    */}
    <section className="oz-sec oz-red">
      <div className="oz-wrap oz-split">
        <Reveal className="oz-split-copy">
          <span className="oz-kick onred">Onze techniek</span>
          <h2 className="oz-h2">Professionele Duitse ozongeneratoren.</h2>
          <p className="oz-lede">
            Wij werken met krachtige, professionele ozongeneratoren van Duitse makelij, geen
            hobbytoestellen. Ze produceren een hoog, regelbaar ozondebiet, afgestemd op het volume
            van de ruimte, zodat de behandeling grondig én gecontroleerd verloopt.
          </p>
          <p className="oz-body">
            De inzet gebeurt altijd door onze eigen techniekers, met de nodige
            veiligheidsmaatregelen. Tijdens de werking mogen mensen en huisdieren niet in de ruimte.
          </p>
        </Reveal>
        <Reveal className="oz-split-vis" delay={0.1}>
          <dl className="oz-specs oz-specs-card">
            {TECHNIEK.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>

    {/* ================= VEILIG & VERANTWOORD ================= */}
    <section className="oz-sec oz-light">
      <div className="oz-wrap">
        <Reveal className="oz-head oz-head-mid">
          <span className="oz-kick red">
            <SchildIcon /> Veilig &amp; verantwoord
          </span>
          <h2 className="oz-h2">Krachtig tijdens, ongevaarlijk erna.</h2>
          <p className="oz-lede">
            Ozon is juist zo krachtig omdat het reactief is. Daarom hoort een behandeling in
            professionele handen, en volgen wij een vast protocol.
          </p>
        </Reveal>
        <div className="oz-four">
          <Reveal className="oz-safe-card">
            <b>Onbemande behandeling</b>
            <p>
              Tijdens de werking is de ruimte afgesloten: geen mensen, geen huisdieren, geen
              planten. Wij bewaken de timing.
            </p>
          </Reveal>
          <Reveal className="oz-safe-card" delay={0.06}>
            <b>Vervalt tot zuurstof</b>
            <p>
              Ozon breekt na de behandeling vanzelf af tot gewone zuurstof (O₂). Geen chemische
              residu&apos;s op oppervlakken of textiel.
            </p>
          </Reveal>
          <Reveal className="oz-safe-card" delay={0.12}>
            <b>Korte verluchting</b>
            <p>
              Na afloop verluchten we de ruimte. Zodra de waarden veilig zijn, is ze weer normaal te
              gebruiken.
            </p>
          </Reveal>
          <Reveal className="oz-safe-card" delay={0.18}>
            <b>Altijd na het drogen</b>
            <p>
              Ozon is de finishing touch. Een blijvend resultaat vraagt eerst een droge constructie,
              en daar adviseren we u eerlijk in.
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    {/* ================= REVIEWS ================= */}
    {/*
      Dezelfde beoordelingen als op de homepage, en om dezelfde reden zó: alleen
      reviews waarvan de tekst zélf geen ander vak noemt (wie over muurinjectie
      of schilderwerk schrijft hoort op de site van dat vak), letterlijk
      overgenomen, en géén gemiddelde of aantal — zie de toelichting bij
      `REVIEWS` in src/lib/site.ts.

      Geen ervan gaat over een ozonbehandeling; dat staat er niet bij gelogen.
      Ze zeggen wat ze zeggen: hoe deze ploeg werkt. Komt er een echte
      ozon-review binnen, dan vervangt die er hier één.
    */}
    <section className="oz-sec oz-red">
      <div className="oz-wrap">
        <Reveal className="oz-head oz-head-mid">
          <span className="oz-kick onred">Wat klanten zeggen</span>
          <h2 className="oz-h2">Hoe wij werken, in hun woorden.</h2>
          <p className="oz-lede">
            Beoordelingen van Vernast op Google en Solvari, letterlijk overgenomen. Over snelheid,
            opvolging en afspraken nakomen, want dat is wat een behandeling bij u thuis vraagt.
          </p>
        </Reveal>
        <div className="oz-reviews">
          {eersteReviews(3).map((review, i) => (
            <Reveal className="oz-review" key={review.name} delay={(i % 3) * 0.07}>
              <div className="oz-review-stars" aria-label={`${review.rating} van 5 sterren`}>
                {Array.from({ length: review.rating }, (_, star) => (
                  <StarIcon key={star} size={14} />
                ))}
              </div>
              <p>{review.text}</p>
              <div className="oz-review-by">
                <span className="oz-review-ini" aria-hidden="true">
                  {review.initials}
                </span>
                <span>
                  <b>{review.name}</b>
                  <small>
                    {review.source === "Google" && <GoogleIcon size={12} />} {review.source} ·{" "}
                    {review.date}
                  </small>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ================= FAQ ================= */}
    {/*
      Dezelfde opbouw als de FAQ op de homepage: een smalle linkerkolom met de
      kop en een donkere hulpkaart, de vragen in een bredere kolom ernaast. Het
      stond hier als één gecentreerde lijst over de volle breedte — dezelfde
      inhoud, maar een ander blok dan de bezoeker twee pagina's eerder zag, en
      zonder de uitweg ("staat uw vraag er niet bij?") die daar juist de
      telefoon oplevert.

      De klassenamen zijn die van de homepage (`faq`, `q`, `pl`), maar de regels
      staan opnieuw onder `.oz-page`: de originelen leven binnen `.v3` en erven
      daar hun tokens.

      `<details>` blijft, met de eerste open — zo staat elk antwoord in de
      geprerenderde HTML, ook voor wie geen JavaScript uitvoert.
    */}
    <section className="oz-sec oz-light" id="faq">
      <div className="oz-wrap faq-grid">
        <div className="faq-side">
          <span className="oz-kick red">Veelgestelde vragen</span>
          <h2 className="oz-h2">Uw vragen over ozonbehandeling.</h2>
          <div className="faq-help">
            <h3>Staat uw vraag er niet bij?</h3>
            <p>
              Wij bekijken uw situatie en zeggen eerlijk of een behandeling zin heeft, en wat er
              eventueel eerst moet gebeuren.
            </p>
            <div className="fh-btns">
              <a className="fh-call" href={`tel:${CONTACT.phoneE164}`}>
                <PhoneIcon /> Bel {CONTACT.phoneLocal}
              </a>
              <a className="fh-form" href="#boeken">
                Stel uw vraag online
              </a>
            </div>
          </div>
        </div>

        <div className="faq-list">
          {FAQ.map((item, i) => (
            <details className="q" key={item.question} open={i === 0}>
              <summary>
                {item.question} <span className="pl">+</span>
              </summary>
              <div className="a">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>

    {/* ================= BOEKEN ================= */}
    <section className="oz-sec oz-book">
      <div className="oz-wrap oz-book-grid">
        <Reveal className="oz-book-l">
          <span className="oz-kick onred">Boek uw behandeling</span>
          <h2 className="oz-h2">Schimmel of geur die maar blijft terugkomen?</h2>
          <p>
            Vul hieronder uw situatie in, dan belt een specialist u binnen één werkdag om de
            behandeling in te plannen. Wij pakken eerst de oorzaak aan en zetten ozon in als
            grondige afronding, duidelijk, correct en zonder valse verwachtingen.
          </p>
          <ul className="oz-book-usp">
            <li>Reactie binnen één werkdag</li>
            <li>Eerlijk advies: soms is drogen het echte antwoord</li>
            <li>Werkzaam in heel Vlaanderen</li>
          </ul>
          <p className="oz-book-call">
            Liever meteen bellen?{" "}
            <a href={`tel:${CONTACT.phoneE164}`}>{CONTACT.phoneLocal}</a>, {CONTACT.openingHours
              .replace("Mo-Fr", "ma–vr")
              .replace(" 08:00-17:00", ", 8u–17u")}
          </p>
        </Reveal>
        <div className="oz-book-r">
          <OzonForm />
        </div>
      </div>
    </section>

    </main>

    <V3Footer />
  </div>
);

export default OzonbehandelingPage;

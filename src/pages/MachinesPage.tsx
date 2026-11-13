import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import Reveal from "@/components/Reveal";
import FaqBlok from "@/components/content/FaqBlok";
import VerderLezen, { type LeesGroep } from "@/components/VerderLezen";
import ContactBlok from "@/components/content/ContactBlok";
import {
  ArrowRightIcon,
  BoltIcon,
  CheckIcon,
  DropIcon,
  PhoneIcon,
} from "@/components/home-v3/icons";
import {
  KeuringIcon,
  ThermoIcon,
  WereldIcon,
  WerfIcon,
  WindIcon,
} from "@/components/content/icons";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/schema";
import { SEO } from "@/data/seo";
import { PRODUCT_ADDONS, PRODUCT_ORDER, productImageAlt, PRODUCTS, toestelChips, toestelPad } from "@/data/verhuur";
import { DROGERS, euro } from "@/data/tarieflijst";
import { CONTACT } from "@/lib/site";
import "@/styles/v3-content.css";

/**
 * Het gamma: drogers, ventilatoren en kachels. Stond tot november 2026 op de
 * oude shadcn-schil met de `Navbar`; nu in de v3-vormtaal, met <V3Header> en
 * de gedeelde opmaak uit src/styles/v3-content.css.
 *
 * De bannerhero met tekst in de afbeelding is vervangen door de gewone
 * v3-hero. Die banner was de grootste afbeelding boven de vouw van de hele
 * site, en de tekst erin moest telkens opnieuw tegen een foto uitgelijnd
 * worden; de v3-hero zet de kop in echte tekst naast een uitgesneden beeld.
 *
 * Volgorde sinds november 2026: hero, dan meteen het volledige gamma, dan pas
 * de uitleg. De pagina begon daarvoor met een keuzehulp en een capaciteitsles,
 * en de toestellen zelf stonden drie schermen lager. Wie op /machines landt
 * wil eerst zien wat er te huur is.
 *
 * De drie groepen staan samen in één witte sectie. Ze wisselden eerder wit en
 * rood af, waardoor dezelfde kaart op dezelfde pagina twee keer anders oogde.
 */

/*
  Keuzehulp en vergelijking. Alle cijfers komen uit PRODUCTS (de toestelpagina's
  en het portaal): /machines en /verhuur/toestel/* spraken elkaar eerder tegen
  over liters en kubieke meters, en dat mag niet terugkomen via een tabel die
  hier met de hand bijgehouden wordt.
*/

/** Een waarde uit de kerngegevens van een toestel, bv. "Verbruik" → "1,1 kW". */
function kerngegeven(key: string, label: string): string | null {
  const rij = PRODUCTS[key]?.key.find(([l]) => l === label);
  return rij ? `${rij[1]}${rij[2] ? ` ${rij[2]}` : ""}` : null;
}

/**
 * De meetconditie van de vochtafvoer, uit het speclabel van de middelste
 * droger ("Vochtafvoer (30 °C / 80 % RV)"). Staat er geen, dan zegt de tekst
 * enkel dat het om een labowaarde gaat.
 */
const MEETCONDITIE = (() => {
  const key = DROGERS[Math.floor(DROGERS.length / 2)]?.key;
  const label = key ? PRODUCTS[key]?.specs.find(([l]) => l.startsWith("Vochtafvoer ("))?.[0] : undefined;
  return label?.match(/\(([^)]+)\)/)?.[1] ?? null;
})();

const KLEINSTE = DROGERS[0];
const GROOTSTE = DROGERS[DROGERS.length - 1];

interface Keuze {
  key: string;
  titel: string;
  wanneer: string;
}

/** Per toesteltype: wanneer kiest u het. Enkel wat het portaal verhuurt. */
const keuzes: Keuze[] = [
  {
    key: "ttk350",
    titel: "Condensontvochtiger",
    wanneer:
      "De standaard voor bouwvocht, chape, pleisterwerk en de meeste waterschade in een verwarmde of gematigde ruimte. Hij koelt de lucht af tot het vocht condenseert en voert het water af via een slang of reservoir. Onder ongeveer 15 °C daalt het rendement sterk.",
  },
  {
    key: "revolution",
    titel: "Adsorptiedroger",
    wanneer:
      "Voor koude ruimtes en om gericht te drogen: hij blaast droge lucht via slangen in een vloeropbouw, een wand of isolatie. Kies hem wanneer het vocht zit waar een gewone droger niet bij komt, bijvoorbeeld onder een zwevende chape na waterschade.",
  },
  {
    key: "ttv4500",
    titel: "Axiaalventilator",
    wanneer:
      "Zet de hele ruimte in beweging. Tegen een natte muur of vloer blijft anders een laagje verzadigde lucht hangen en stopt de droging. Voert zelf geen vocht af: voor bouwvocht zet u hem samen met een ontvochtiger in.",
  },
  {
    key: "radiaal2250",
    titel: "Radiaalventilator",
    wanneer:
      "Blaast een smalle straal vlak over de vloer, ook onder kasten en tegen plinten. De betere keuze wanneer het vocht in de chape of de vloer zit; bij waterschade vaak samen met een axiaalventilator.",
  },
  {
    key: "teddh30",
    titel: "Elektrische bouwkachel",
    wanneer:
      "Voor kelders, winterwerven en onverwarmde nieuwbouw. Warmte maakt het vocht los en laat de condensdroger op volle capaciteit werken, maar voert zelf niets af. De losse Heatpower en Heatboost vragen een aansluiting op 400 V krachtstroom; de kachel in een droogpakket draait op 230 V.",
  },
].filter((k) => PRODUCTS[k.key]);

/**
 * De combinaties die op de toestelpagina's als aanvulling voorgesteld worden,
 * voor de drie ontvochtigers. Uit `PRODUCT_ADDONS`, dus dezelfde suggestie als
 * wie op de toestelpagina iets bijboekt.
 */
const combinaties = DROGERS.map((t) => ({
  droger: t,
  erbij: (PRODUCT_ADDONS[t.key] ?? []).map((k) => PRODUCTS[k]).filter(Boolean),
})).filter((c) => c.erbij.length > 0);

const faqs = [
  {
    q: "Hoeveel liter per dag heb ik nodig?",
    a: `Reken eerst het volume van de ruimte uit: vloeroppervlakte maal plafondhoogte. Onze kleinste droger, de ${KLEINSTE.short}, is bedoeld voor ruimtes tot ${KLEINSTE.volume} m³; de ${GROOTSTE.short} gaat tot ${GROOTSTE.volume} m³. Veel nat materiaal, zoals een dikke chape of verse waterschade, vraagt meer capaciteit dan het volume alleen doet vermoeden. Twijfelt u, neem dan het grotere toestel of laat de calculator rekenen.`,
  },
  {
    q: "Wat is het verschil tussen een condensdroger en een adsorptiedroger?",
    a: "Een condensdroger koelt de lucht af tot het vocht condenseert en werkt het best boven ongeveer 15 °C. Een adsorptiedroger haalt het vocht uit de lucht met een vochtopnemend materiaal, verliest in de koude weinig capaciteit en kan droge lucht via slangen gericht in een vloer of wand blazen.",
  },
  {
    q: "Heb ik naast een bouwdroger een ventilator nodig?",
    a: "Bij nieuwbouw is het sterk aangeraden, bij waterschade beschouwen wij het als noodzakelijk. Een ontvochtiger droogt de lucht; een ventilator zorgt dat die droge lucht ook langs de natte muren en vloeren strijkt.",
  },
];

const verderLezen: LeesGroep[] = [
  {
    kop: "Zo zetten we de toestellen in",
    links: [
      { to: "/realisaties/mnr-k-putte", label: "Bouwvocht weggedroogd in een nieuwbouw in Putte" },
      { to: "/realisaties/mnr-erdem-bedrijfsgebouw", label: "Waterschade in een bedrijfsgebouw gedroogd" },
      { to: "/realisaties/mancave-brugge", label: "Vochtige kelder in Brugge weer droog" },
    ],
  },
  {
    kop: "Kiezen en berekenen",
    links: [
      { to: "/verhuur/calculator", label: "Bereken welk pakket bij uw ruimte past" },
      { to: "/gids/condensdroger-of-adsorptiedroger", label: "Gids: condensdroger of adsorptiedroger?" },
      { to: "/gids/stroomverbruik-bouwdroger", label: "Gids: wat verbruikt een bouwdroger aan stroom?" },
      { to: "/prijzen", label: "Huurprijzen per dag en per week" },
      { to: "/nieuwbouw-drogen", label: "Chape en pleisterwerk drogen" },
      { to: "/waterschade", label: "Waterschade drogen" },
    ],
  },
  {
    kop: "Levering in uw regio",
    links: [
      { to: "/bouwdroger-huren-vlaams-brabant", label: "Bouwdroger huren in Vlaams-Brabant" },
      { to: "/bouwdroger-huren-antwerpen", label: "Bouwdroger huren in de provincie Antwerpen" },
    ],
  },
];

/**
 * Het gamma zoals het portaal het publiceert, gegroepeerd per soort.
 *
 * Hier stond tot november 2026 een tweede lijst: acht toestellen (Turbo Axiaal
 * 8500, Turbo Radiaal 7000, elektrische kachels van 5/9/18 kW, dieselheaters
 * van 118 en 236 kW) met hun dagprijs met de hand ingetypt en zonder foto. Die
 * toestellen staan niet in de verhuurcatalogus, de prijzen klopten niet, en ze
 * stonden naast de echte kaarten alsof ze te huur waren. Weg dus: wat het
 * portaal niet publiceert, bestaat op deze pagina niet. Zie ook de regel in
 * CLAUDE.md — nooit een bedrag overtypen in een pagina.
 */
const GAMMA = [
  {
    id: "bouwdrogers",
    Icon: DropIcon,
    kop: "Bouwdrogers",
    lede: "Onze eco-lijn verbruikt tot 40 % minder energie dan traditionele industriële drogers, merkbaar op uw stroomfactuur bij een toestel dat weken dag en nacht draait. De Revolution staat erbij als adsorptiedroger: die droogt gericht in een vloeropbouw of een koude kelder.",
    keys: PRODUCT_ORDER.filter((k) =>
      /Condensontvochtiger|Adsorptiedroger/.test(PRODUCTS[k].type)
    ),
  },
  {
    id: "ventilatoren",
    Icon: WindIcon,
    kop: "Ventilatoren",
    lede: "Luchtbeweging versnelt het drogen merkbaar. Axiaal zet de hele ruimte in beweging, radiaal blaast vlak over een natte vloer. Bij waterschade hoort er altijd één bij.",
    keys: PRODUCT_ORDER.filter((k) => /Bouwventilator/.test(PRODUCTS[k].type)),
  },
  {
    id: "verwarming",
    Icon: ThermoIcon,
    kop: "Verwarming",
    lede: "Onder 15 °C droogt een condensdroger traag: koude lucht neemt weinig vocht op. Twee elektrische bouwkachels met thermostaat, allebei op 400 V krachtstroom.",
    keys: PRODUCT_ORDER.filter((k) => /bouwkachel/i.test(PRODUCTS[k].type)),
  },
].filter((g) => g.keys.length > 0);

/*
  De bouwdrogers vullen een rij van vier; ventilatoren en verwarming hebben er
  elk twee en staan daarom naast elkaar, samen opnieuw een rij van vier. Elk
  onder elkaar liet twee halve rijen leeg staan, en dat las als een gamma met
  gaten erin. Valt er een groep weg omdat het portaal dat soort niet meer
  verhuurt, dan krijgt wat overblijft gewoon de brede rij.
*/
const [eersteGroep, ...restGroepen] = GAMMA;

/** Waarom hier acht toestellen staan en niet de catalogus van een leverancier. */
const onderzoek = [
  {
    Icon: WereldIcon,
    titel: "De wereldmarkt, niet één catalogus",
    tekst:
      "Wat in België te huur staat is maar een fractie van wat er gebouwd wordt. Wij volgen fabrikanten en vakbeurzen in Europa, Azië en Noord-Amerika en vragen toestellen op die hier door niemand verhuurd worden. Pas als zo'n toestel beter is dan wat we hebben, komt het in aanmerking.",
  },
  {
    Icon: WerfIcon,
    titel: "Eerst weken op onze eigen werf",
    tekst:
      "Een kandidaat draait eerst bij ons, naast het toestel dat hij zou vervangen. We kijken naar de liters per kilowattuur, het geluid in een bewoond huis, het gewicht in een trappenhal en of het toestel een nacht zonder toezicht doorkomt. Een folder zegt daar niets over.",
  },
  {
    Icon: KeuringIcon,
    titel: "Wat het niet haalt, komt er niet in",
    tekst:
      "Haalt een toestel zijn opgegeven cijfers niet, of liggen de onderdelen niet binnen de week hier, dan nemen we het niet op. Liever acht toestellen die wij door en door kennen dan een lijst vol namen die wij zelf nooit op een werf gezien hebben.",
  },
];

const toebehoren = [
  { Icon: BoltIcon, name: "Verlengsnoer 10 m", desc: "Zit gratis bij elke bouwdroger. Vraag er gerust een tweede bij als het stopcontact ver zit.", gratis: true },
  { Icon: DropIcon, name: "Opvangbak", desc: "Ook gratis bij elke droger. Liever niets legen? Dan neemt u een condenspomp bij het pakket.", gratis: true },
  { Icon: ThermoIcon, name: "Airconditioner", desc: "Beschikbaar op aanvraag, bijvoorbeeld voor een serverruimte of een werf in de zomer.", gratis: false },
];

/**
 * Eén toestel uit de catalogus als kaart.
 *
 * De kop is de naam waaronder het toestel verhuurd wordt ("Boost"), niet
 * het typenummer: niemand huurt een "Ontvochtiger TTK 170 S". Dat nummer staat
 * er klein onder, voor wie offertes vergelijkt. Foto, prijs en specs komen
 * allemaal uit het portaal.
 *
 * De vorm is die van de productkaart op de homepage (`.pc`): vierkante foto
 * met labelpil, de kerncijfers als pillen en onderaan een rode knop met de
 * dagprijs ernaast. Het zijn dezelfde acht toestellen als daar, en ze hoorden
 * niet op twee pagina's verschillend te ogen. De hele kaart is de link, zodat
 * de knop niet het enige klikbare stuk is.
 */
const Toestelkaart = ({ sleutel, index }: { sleutel: string; index: number }) => {
  const p = PRODUCTS[sleutel];
  return (
    <Reveal
      as={Link}
      to={toestelPad(sleutel)}
      from="up"
      delay={(index % 4) * 0.06}
      className={`pc${p.badge === "Meest gehuurd" ? " hot" : ""}`}
    >
      <div className="pm">
        {p.badge && <span className="pt">{p.badge}</span>}
        <img
          src={p.img[0]}
          alt={productImageAlt(p, 0)}
          width={600}
          height={600}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="pb">
        <h3>{p.short}</h3>
        <span className="ptype">{p.name}</span>
        <p className="pdesc">{p.sum}</p>
        <div className="chips">
          {/*
            Het blaadje staat op de condensdrogers van de eco-lijn, niet op de
            adsorptiedroger: die is geen eco-toestel en droeg het label hier
            ooit wel. Als afbeelding en niet als lijnicoon, net als op de
            homepage — het draagt zijn eigen groen.
          */}
          {p.type.startsWith("Condensontvochtiger") && (
            <span className="chip eco">
              <img src="/vernast/icoon-eco.webp" alt="" width={96} height={96} loading="lazy" /> Eco
            </span>
          )}
          {toestelChips(p).map((chip) => (
            <span className="chip" key={chip}>
              {chip}
            </span>
          ))}
        </div>
        <div className="pf">
          <span className="bekijk">
            Bekijken
            <ArrowRightIcon size={13} strokeWidth={2.6} />
          </span>
          <span className="pr">
            vanaf<b>{euro(p.day)}</b>
            <small>/dag excl. btw</small>
          </span>
        </div>
      </div>
    </Reveal>
  );
};

/**
 * Eén soort toestel binnen het overzicht: een kop met pictogram, één regel
 * uitleg en de kaarten eronder.
 *
 * De kop is een `h3` en geen `h2` meer: de drie groepen stonden eerder elk in
 * een eigen sectie met een eigen `h2`, en de pagina had daardoor drie koppen
 * van hetzelfde gewicht voor wat samen één overzicht is. `breed` zet de rij op
 * vier kolommen, zonder op twee.
 */
const Gammagroep = ({
  groep,
  breed = false,
}: {
  groep: (typeof GAMMA)[number];
  breed?: boolean;
}) => (
  <div className="pcat" id={groep.id}>
    <div className="pcat-kop">
      <span className="ci"><groep.Icon size={19} /></span>
      <h3>{groep.kop}</h3>
    </div>
    <p className="pcat-lede">{groep.lede}</p>
    <div className={breed ? "pgrid" : "pgrid twee"}>
      {groep.keys.map((k, j) => (
        <Toestelkaart sleutel={k} index={j} key={k} />
      ))}
    </div>
  </div>
);

const MachinesPage = () => (
    <div className="v3c mc-page">
      <PageMeta
        {...SEO.machines}
        jsonLd={[
          itemListSchema(
            "Gamma bouwdrogers, ventilatoren en bouwkachels",
            PRODUCT_ORDER.map((k) => ({
              name: PRODUCTS[k].name,
              path: toestelPad(k),
            }))
          ),
          faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Machines", path: "/machines" },
          ]),
        ]}
      />

      <V3Header lightAfter={420} darkUntil=".redtop" />

      <main>

      {/* ================= HERO ================= */}
      <div className="redtop">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="kick">Ons productgamma</span>
              <h1>Bouwdrogers, ventilatoren en kachels huren.</h1>
              <p>
                Acht toestellen, gekozen uit wat er wereldwijd gebouwd wordt en niet uit wat een
                Belgische leverancier toevallig op voorraad had. De ontvochtiger haalt het vocht
                uit de lucht, de ventilator brengt die droge lucht bij het natte materiaal, en de
                kachel zorgt dat de ruimte warm genoeg is om het vocht los te laten. Hieronder
                staat het hele gamma, elk toestel met zijn dagprijs.
              </p>
              <div className="jump">
                <a href="#bouwdrogers"><DropIcon size={15} /> Bouwdrogers</a>
                <a href="#ventilatoren"><WindIcon size={15} /> Ventilatoren</a>
                <a href="#verwarming"><ThermoIcon size={15} /> Verwarming</a>
              </div>
            </div>
            {/*
              De uitgesneden ploeg in plaats van de drie drogers die hier
              stonden. Die foto zweefde boven de onderrand van het rode blok
              alsof de toestellen vlogen; de mannen staan op die rand, zoals op
              /hoe-drogen-werkt. Het gamma zelf staat een schermhoogte lager,
              waar de kaarten het beter doen dan één productfoto.
            */}
            <div className="hero-vis">
              <img
                src="/vernast/team-tools.webp"
                alt="De Vernast vakmannen met hun materiaal"
                width={1400}
                height={859}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                style={{ width: "min(100%,560px)" }}
              />
              <div className="fbadge rd" style={{ top: "-10px", left: "0" }}>
                <span className="ic"><WereldIcon size={15} /></span>
                <div>
                  Wereldwijd gezocht
                  <small>op onze eigen werven getest</small>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= HET GAMMA =================
          Staat bewust meteen onder de hero: wie op /machines landt wil eerst
          zien wát er te huur is. De keuzehulp die hier stond ("Welk toestel
          kiest u?") was een tussenstap vóór het overzicht, en dat las als een
          formulier voor de etalage. Ze staat nu een sectie lager, als uitleg
          bij wat de bezoeker al gezien heeft.

          Alle drie de groepen in één witte sectie. Ze wisselden eerder wit en
          rood af, waardoor de ventilatoren op een rode achtergrond stonden en
          dezelfde kaart er anders uitzag dan de kaart erboven. Het zijn
          producten: ze horen op één ondergrond. */}
      <section className="sw" id="gamma">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Het gamma</span>
            <h2 className="sec">Alle toestellen die wij verhuren, in één overzicht.</h2>
            <p className="lede">
              Acht toestellen, meer niet. Elk toestel hieronder staat in ons depot, heeft een eigen
              pagina met zijn volledige specificaties en is vandaag te huur tegen de prijs die
              erbij staat. Wat wij niet zelf plaatsen en onderhouden, staat er niet bij.
            </p>
          </div>

          {eersteGroep && <Gammagroep groep={eersteGroep} breed />}
          {restGroepen.length > 1 ? (
            <div className="pcols">
              {restGroepen.map((groep) => (
                <Gammagroep groep={groep} key={groep.id} />
              ))}
            </div>
          ) : (
            restGroepen.map((groep) => <Gammagroep groep={groep} breed key={groep.id} />)
          )}

          <div className="note">
            <b>Losse toestellen haalt u af in Aartselaar</b>, tegen lagere afhaalprijzen, via de{" "}
            <Link to="/verhuur/afhalen">afhaal-checkout</Link>. Leveren, plaatsen en afstellen doen
            wij enkel per pakket: alleen dan kunnen we de <Link to="/drooggarantie">drooggarantie</Link>{" "}
            waarmaken. De <Link to="/verhuur/calculator">calculator</Link> stelt dat pakket samen.
          </div>
        </div>
      </section>

      {/* ================= WERELDWIJD GEZOCHT ================= */}
      <section className="sr" id="onderzoek">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Productonderzoek</span>
            <h2 className="sec">Wij zoeken het beste toestel ter wereld, niet het beste toestel in België.</h2>
            <p className="lede">
              De meeste verhuurders kopen wat hun Belgische leverancier die maand in de catalogus
              heeft staan. Wij doen het omgekeerd. Ons productonderzoek loopt over de hele wereld:
              we volgen fabrikanten en vakbeurzen in Europa, Azië en Noord-Amerika, laten
              kandidaat-toestellen overkomen en zetten ze eerst op onze eigen werven. Een toestel
              staat hier omdat het bij ons het best droogt, niet omdat het hier nu eenmaal te koop
              was.
            </p>
          </div>
          <div className="g3">
            {onderzoek.map(({ Icon, titel, tekst }, i) => (
              <Reveal from="up" delay={(i % 3) * 0.08} className="kaart" key={titel}>
                <div className="ki"><Icon size={20} /></div>
                <h3>{titel}</h3>
                <p>{tekst}</p>
              </Reveal>
            ))}
          </div>
          <div className="note">
            <b>Daarom dragen de toestellen een eigen naam.</b> Boost, Performance, Ultimate,
            Highflow: zo noemen wij ze, omdat de keuze van ons komt en niet van een catalogus. Het
            typenummer van de fabrikant staat op elke toestelpagina en in het overzicht hierboven,
            zodat u een offerte van iemand anders ernaast kunt leggen.
          </div>
        </div>
      </section>

      {/* ================= WAT DOET WELK TOESTEL ================= */}
      <section className="sw" id="verschillen">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">De verschillen</span>
            <h2 className="sec">Wat doet welk toestel?</h2>
            <p className="lede">
              In de meeste situaties werkt u met een combinatie: een ontvochtiger die het vocht
              afvoert, en een ventilator die de droge lucht bij de muren en de vloer brengt. Wat
              elk soort toestel doet, en wanneer u het kiest.
            </p>
          </div>
          <div className="g3">
            {keuzes.map((k, i) => (
              <Reveal from="up" delay={(i % 3) * 0.08} className="kaart" key={k.key}>
                <span className="kick" style={{ marginBottom: "6px" }}>{k.titel}</span>
                <h3>{PRODUCTS[k.key].name}</h3>
                <p>{k.wanneer}</p>
                <Link
                  className="plink"
                  to={toestelPad(k.key)}
                  style={{ marginTop: "14px", display: "inline-flex" }}
                >
                  Bekijk de {PRODUCTS[k.key].short}
                  <ArrowRightIcon size={13} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAPACITEIT ================= */}
      <section className="sr">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Liter of kubieke meter</span>
            <h2 className="sec">Wat zegt de capaciteit van een droger?</h2>
            <p className="lede">
              Bij een ontvochtiger staan twee getallen. De <b>vochtafvoer in liter per dag</b> is
              hoeveel water het toestel maximaal uit de lucht haalt
              {MEETCONDITIE ? `, gemeten bij ${MEETCONDITIE}` : " onder labo-omstandigheden"}. In
              een koelere of drogere ruimte haalt geen enkele droger dat cijfer: het is een maat om
              toestellen te vergelijken, geen belofte voor uw werf.
            </p>
            <p className="lede">
              Het <b>bereik in kubieke meter</b> is het volume waarvoor het toestel geschikt is.
              Reken uw volume uit als vloeroppervlakte maal plafondhoogte: 100 m² bij 2,5 m hoog is
              250 m³. Zit er veel nat materiaal in die ruimte, zoals een verse chape of recente
              waterschade, kies dan eerder het grotere toestel of een tweede droger.
            </p>
          </div>

          <div className="tblwrap" style={{ marginTop: 0 }}>
            <div className="tblscroll">
              <table className="tbl">
                <caption className="sr-only">
                  Vergelijking van de ontvochtigers: capaciteit, bereik, verbruik en dagprijs
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Ontvochtiger</th>
                    <th scope="col">Liter per dag</th>
                    <th scope="col">Bereik</th>
                    <th scope="col">Verbruik</th>
                    <th scope="col">Per dag</th>
                  </tr>
                </thead>
                <tbody>
                  {DROGERS.map((t) => (
                    <tr key={t.key}>
                      <th scope="row">
                        <Link to={t.path}>{t.short}</Link>
                        {t.badge && (
                          <span style={{ display: "block", fontWeight: 400, fontSize: "11.5px", color: "var(--txt-dim)" }}>
                            {t.badge}
                          </span>
                        )}
                      </th>
                      <td>{t.litersPerDay} L</td>
                      <td style={{ whiteSpace: "nowrap" }}>tot {t.volume} m³</td>
                      <td style={{ whiteSpace: "nowrap" }}>{kerngegeven(t.key, "Verbruik") ?? "n.v.t."}</td>
                      <td style={{ whiteSpace: "nowrap", fontWeight: 700, color: "var(--txt)" }}>
                        {euro(t.perDay)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="tblnote">
            Prijzen excl. btw. Meer over de prijsopbouw op{" "}
            <Link to="/prijzen">de prijzenpagina</Link>, en wat deze toestellen per dag aan stroom
            kosten in de gids over het{" "}
            <Link to="/gids/stroomverbruik-bouwdroger">stroomverbruik van een bouwdroger</Link>.
          </p>

          {combinaties.length > 0 && (
            <div className="note">
              <b>Welke combinatie hoort erbij?</b> Een ontvochtiger staat zelden alleen. Dit zijn de
              toestellen die we bij elke droger als aanvulling voorstellen: een ventilator om de
              droge lucht bij de muren en de vloer te krijgen, en in een koude ruimte een kachel.
              <ul style={{ margin: "12px 0 0", paddingLeft: "18px" }}>
                {combinaties.map(({ droger, erbij }) => (
                  <li key={droger.key} style={{ marginBottom: "5px" }}>
                    <Link to={droger.path}>{droger.short}</Link> met{" "}
                    {erbij.map((p) => p.name).join(" en ")}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* ================= TOEBEHOREN ================= */}
      <section className="sw">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Toebehoren</span>
            <h2 className="sec">Wat er standaard bij zit, en wat u kunt bijvragen.</h2>
          </div>
          <div className="g3">
            {toebehoren.map(({ Icon, name, desc, gratis }, i) => (
              <Reveal from="up" delay={i * 0.08} className="kaart" key={name}>
                <div className="ki"><Icon size={20} /></div>
                <h3>{name}</h3>
                <p>{desc}</p>
                {gratis && (
                  <span className="verdict ja" style={{ marginTop: "12px", marginBottom: 0 }}>
                    <CheckIcon size={12} /> Gratis
                  </span>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqBlok
        titel="Veelgestelde vragen over het materiaal."
        vragen={faqs}
        sleutel="mc-faq"
      />

      {/* ================= SLOT-CTA ================= */}
      <section className="sw">
        <div className="wrap">
          <div className="manband">
            <div className="mb-t">
              <span className="mbk">Twijfelt u nog</span>
              <h3>U hoeft niet zelf te kiezen welk toestel het wordt.</h3>
              <p>
                Geef ons uw oppervlakte en uw situatie, dan rekent de calculator het volledige
                pakket uit: droger, ventilator en kachel in de juiste verhouding. Of u belt ons en
                we doen het aan de telefoon.
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
              src="/vernast/man-duim-kabels.webp"
              alt="Vernast technicus met de kabels van een bouwdroger"
              width={600}
              height={900}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <VerderLezen
        titel="Verder lezen over het materiaal"
        groepen={verderLezen}
        achtergrond="sr"
      />

      <ContactBlok
        achtergrond="wit"
        kicker="Welk toestel heeft u nodig?"
        titel="Niet zeker welk toestel bij uw werf past?"
        lede="Beschrijf kort de ruimte en wat er moet drogen. Een droogspecialist zegt u binnen één werkdag welk toestel of welke combinatie het wordt."
        onderwerpen={[
          "Advies over het juiste toestel",
          "Meerdere toestellen voor een grote werf",
          "Adsorptiedroger of condensdroger?",
          "Prijs en beschikbaarheid",
          "Iets anders",
        ]}
        placeholder="Bv. kelder van 60 m² met 2,2 m plafondhoogte, onverwarmd, vochtige muren na een lek."
      />

      </main>

      <V3Footer />
    </div>
);

export default MachinesPage;

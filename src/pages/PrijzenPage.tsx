import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import Reveal from "@/components/Reveal";
import VerderLezen, { type LeesGroep } from "@/components/VerderLezen";
import ContactBlok from "@/components/content/ContactBlok";
import FaqBlok from "@/components/content/FaqBlok";
import {
  ArrowRightIcon,
  BoltIcon,
  CardIcon,
  CheckIcon,
  PhoneIcon,
  SupportIcon,
} from "@/components/home-v3/icons";
import { TagIcon, XIcon } from "@/components/content/icons";
import { breadcrumbSchema, faqSchema, offerCatalogSchema, serviceSchema } from "@/lib/schema";
import { SEO } from "@/data/seo";
import {
  DROGERS,
  RENTAL_WEEKS,
  TARIEVEN_PUBLIEK,
  euro,
  priceForWeeks,
} from "@/data/tarieflijst";
import { COVER, EXTRAS, LADDER_FEE, PRODUCTS, PUMP } from "@/data/verhuur";
import { findPackage } from "@/data/packages";
import { DEPOSIT_GROSS, EMPTY_OPTIONS, ONLINE_DISCOUNT, VAT_RATE, bookingSummary } from "@/lib/booking";
import { DEFAULT_CD, DEFAULT_SIZE, euro as euroCent, parseConfig } from "@/lib/verhuur";
import { CONTACT } from "@/lib/site";
import "@/styles/v3-content.css";

/**
 * De prijzenpagina. Stond tot november 2026 op de oude shadcn-schil met de
 * `Navbar`; nu in de v3-vormtaal, met <V3Header> en de gedeelde opmaak uit
 * src/styles/v3-content.css.
 *
 * Alles wat hieronder als bedrag op de pagina komt, is afgeleid uit dezelfde
 * modules waarmee de boeking en Stripe rekenen: de dagprijzen uit PRODUCTS, de
 * opties uit verhuur.ts, en het rekenvoorbeeld uit `bookingSummary` zelf. Er
 * stond op /prijzen ooit een verzonnen tabel; een rekenvoorbeeld met
 * overgetypte getallen zou na de eerste prijswijziging in het portaal
 * hetzelfde worden.
 */
const PROCENT_ONLINE = Math.round(ONLINE_DISCOUNT * 100);
const PROCENT_BTW = Math.round(VAT_RATE * 100);
const MIDDEN = DROGERS[Math.floor(DROGERS.length / 2)];
const RAPPORT = EXTRAS.find((x) => x.k === "rapport");
const STROOMKAST = EXTRAS.find((x) => x.k === "stroom");

/**
 * Het rekenvoorbeeld: een chapepakket op de standaardmaat van de calculator,
 * zonder kachels, met de opties die de boekingspagina standaard aanvinkt.
 * Precies wat een bezoeker ziet als hij die combinatie kiest en niets
 * verandert — dus geen "vanaf"-prijs die in de boeking alsnog hoger uitvalt.
 */
const VOORBEELD_CONFIG = parseConfig(
  new URLSearchParams({ wat: "chape", size: DEFAULT_SIZE, cd: DEFAULT_CD, heat: "0" })
);
const VOORBEELD_PAKKET = findPackage(Number(DEFAULT_SIZE), "chape", Number(DEFAULT_CD));
const VOORBEELD = VOORBEELD_PAKKET ? bookingSummary(VOORBEELD_CONFIG, EMPTY_OPTIONS) : null;

/**
 * Het opgenomen vermogen per toestel, uit de kerngegevens van de toestelpagina.
 * Dat is het maximum: de hygrostaat schakelt de droger terug zodra de
 * streefvochtigheid bereikt is, dus het werkelijke verbruik ligt lager. Een
 * stroomprijs staat er bewust niet bij — die verschilt per contract.
 */
function vermogenKw(key: string): number | null {
  const rij = PRODUCTS[key]?.key.find(([label]) => label === "Verbruik");
  if (!rij) return null;
  const kw = Number(rij[1].replace(",", "."));
  return Number.isFinite(kw) && kw > 0 ? kw : null;
}

const kwh = (n: number) => `${n.toLocaleString("nl-BE", { maximumFractionDigits: 1 })} kWh`;

const VERBRUIK = TARIEVEN_PUBLIEK.map((t) => ({ t, kw: vermogenKw(t.key) })).filter(
  (r): r is { t: (typeof TARIEVEN_PUBLIEK)[number]; kw: number } => r.kw !== null
);
const MIDDEN_KW = vermogenKw(MIDDEN.key);

/**
 * De ventilator en de kachel — het "extra" naast de ontvochtiger zelf.
 * Ze staan apart omdat ze de droging versnellen maar geen vocht afvoeren; de
 * tabel hierboven gaat over capaciteit, deze rij over ondersteuning.
 */
const EXTRA_DEVICES = TARIEVEN_PUBLIEK.filter((t) => t.litersPerDay === 0);

/**
 * De prijsvragen die mensen letterlijk intikken. Ze staan zichtbaar onderaan de
 * pagina én als FAQ-schema in de head — die twee moeten gelijk blijven lopen.
 */
const FAQ = [
  {
    question: "Wat kost een bouwdroger huren per dag?",
    answer: `Een bouwdroger huren kost bij Vernast tussen ${euro(
      DROGERS[0].perDay
    )} en ${euro(
      DROGERS[DROGERS.length - 1].perDay
    )} per dag, exclusief btw. De prijs hangt af van de capaciteit: de ${
      DROGERS[0].short
    } voert ${DROGERS[0].litersPerDay} liter vocht per 24 uur af, de ${
      DROGERS[DROGERS.length - 1].short
    } tot ${DROGERS[DROGERS.length - 1].litersPerDay} liter. Dit zijn de huurprijzen van losse toestellen. Bij een berekend droogpakket zijn ook levering, installatie, vochtmetingen en ophaling inbegrepen.`,
  },
  {
    question: "Moet ik een waarborg betalen?",
    answer:
      "Nee. Wij vragen geen waarborg voor het toestel. U betaalt enkel de huurprijs voor de dagen dat u het toestel gebruikt, plus eventuele extra opties die u zelf kiest.",
  },
  {
    question: "Zijn levering en ophaling inbegrepen?",
    answer:
      "Levering en ophaling zijn gratis vanaf een huurperiode van vier weken. Bij kortere periodes rekenen wij een leveringskost aan; wie zelf afhaalt in ons magazijn in Aartselaar krijgt € 25 korting op de huurprijs.",
  },
  {
    question: "Zijn de prijzen inclusief btw?",
    answer:
      "Nee, alle vermelde prijzen zijn exclusief btw. Op verhuur van bouwdrogers is het standaardtarief van 21 % btw van toepassing. Op uw factuur staat het btw-bedrag apart vermeld, zodat u het kunt indienen bij uw verzekeraar of boekhouder.",
  },
  {
    question: "Wat kost een bouwdroger huren per week?",
    answer: `Per week kost een bouwdroger bij Vernast ${DROGERS.map(
      (t) => `${euro(priceForWeeks(t, 1))} voor de ${t.short}`
    ).join(", ")}, exclusief btw. Dat is telkens de dagprijs maal zeven dagen. Een volledig droogpakket met ventilator rekent u uit in de Calculator.`,
  },
  {
    question: "Hoeveel stroom verbruikt een bouwdroger?",
    answer: MIDDEN_KW
      ? `De ${MIDDEN.short} neemt maximaal ${MIDDEN_KW.toLocaleString("nl-BE")} kW op. Draait hij een volle dag op vol vermogen, dan is dat ${kwh(MIDDEN_KW * 24)} per dag. In de praktijk ligt het verbruik lager, omdat de ingebouwde hygrostaat het toestel terugschakelt zodra de streefvochtigheid bereikt is. Vermenigvuldig met de kWh-prijs van uw eigen contract voor de kost.`
      : "Dat hangt af van het toestel: het opgenomen vermogen staat op elke toestelpagina. Vermenigvuldig het met het aantal uren en met de kWh-prijs van uw eigen contract.",
  },
  {
    question: "Wordt het goedkoper als ik langer huur?",
    answer:
      "De dagprijs blijft dezelfde, hoe lang u ook huurt; er komt geen toeslag bij voor een korte periode. Wat u wint bij langer huren, is de levering: vanaf vier weken zijn levering en ophaling gratis.",
  },
  {
    question: "Kan ik verlengen als de werf uitloopt?",
    answer:
      "Ja. Loopt de werf uit of is de meting nog niet goed, dan verlengt u per week tegen dezelfde dagprijs; u krijgt daarvoor een link per mail en hoeft niets te bellen. Huurt u een berekend droogpakket en is het ondanks correcte droogomstandigheden nog niet droog, dan verlengt u kosteloos, dat is de drooggarantie.",
  },
  {
    question: "Wanneer is de Drooggarantie inbegrepen?",
    answer:
      "De Drooggarantie is inbegrepen bij een droogpakket dat Vernast voor uw situatie berekent, levert en installeert. Wij meten bij de start en bij de oplevering. Is het materiaal ondanks correcte droogomstandigheden niet droog binnen de berekende periode, dan huurt u de toestellen kosteloos verder. De garantie geldt niet voor losse toestellen die u zelf afhaalt of plaatst.",
  },
];

const inbegrepen = [
  "100 % Drooggarantie op berekende droogpakketten",
  "Levering aan huis door een technieker",
  "Ophaling na gebruik",
  "Gratis verlengsnoer 10 m, 2,5 mm²",
  "Uitleg bij de plaatsing",
  "Vochtmeting bij start en oplevering",
  "Geen waarborg vereist",
];

/*
 * De interne links van deze pagina. Ze stonden hier al en verdwenen bij het
 * herwerken van de pagina; daardoor had /prijzen geen enkele link meer naar een
 * realisatie of een regiopagina. Dat is precies hoe een pagina een wees wordt:
 * indexeerbaar en in de sitemap, maar zonder signaal dat ze ergens bij hoort.
 * `src/test/inhoudspaginas.test.tsx` bewaakt dat elke inhoudspagina er minstens
 * twee realisaties en één regio heeft.
 */
const verderLezen: LeesGroep[] = [
  {
    kop: "Wat onze klanten lieten drogen",
    links: [
      { to: "/realisaties/bang-olufsen", label: "Versnelde bouwdroging binnen een strak bouwschema" },
      { to: "/realisaties/mnr-l-hasselt", label: "Pleister- en chapewerken versneld gedroogd in Hasselt" },
      { to: "/realisaties/mnr-w-antwerpen", label: "Kelder en leefruimte drooggelegd na waterschade" },
    ],
  },
  {
    kop: "Kiezen en berekenen",
    links: [
      { to: "/verhuur/calculator", label: "Bereken de prijs van uw droogpakket" },
      { to: "/machines", label: "Welk toestel heeft u nodig? Vergelijk het gamma" },
      { to: "/gids/stroomverbruik-bouwdroger", label: "Gids: wat kost een bouwdroger aan stroom?" },
      { to: "/gids/hoe-lang-moet-chape-drogen", label: "Gids: hoe lang moet een chape drogen?" },
      { to: "/nieuwbouw-drogen", label: "Droogtijden van chape en pleisterwerk" },
    ],
  },
  {
    kop: "Levering in uw regio",
    links: [
      { to: "/bouwdroger-huren-antwerpen", label: "Bouwdroger huren in de provincie Antwerpen" },
      { to: "/bouwdroger-huren-oost-vlaanderen", label: "Bouwdroger huren in Oost-Vlaanderen" },
    ],
  },
];

const garanties = [
  { Icon: BoltIcon, title: "Toestel defect?", desc: "Wij vervangen het de volgende werkdag. Geen discussie, geen extra kost: u huurt een werkend toestel, niet een toestel." },
  { Icon: SupportIcon, title: "Altijd bereikbaar", desc: "Weekdagen, weekend en feestdagen. Een droging die stilvalt in het weekend is een week verlies." },
  { Icon: CardIcon, title: "Duidelijke factuur", desc: "Op naam, met de btw apart, en met de metingen erbij, klaar voor uw verzekeringsdossier of boekhouder." },
];

const PrijzenPage = () => (
  <div className="v3c pr-page">
    <PageMeta
      {...SEO.prijzen}
      jsonLd={[
        serviceSchema({
          name: "Verhuur van bouwdrogers, ventilatoren en bouwkachels",
          description:
            "Transparante huurprijzen per dag, week en droogpakket, zonder waarborg. Berekende droogpakketten met levering en installatie zijn inclusief vochtmetingen en Drooggarantie.",
          path: "/prijzen",
          serviceType: "Verhuur bouwdrogers",
        }),
        offerCatalogSchema(
          "Huurtarieven bouwdrogers, ventilatoren en bouwkachels",
          TARIEVEN_PUBLIEK.map((t) => ({
            name: t.name,
            description: t.summary,
            path: t.path,
            pricePerDay: t.perDay,
          }))
        ),
        faqSchema(FAQ),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Prijzen", path: "/prijzen" },
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
            <span className="kick">Tarieven</span>
            <h1>Bouwdroger huren: prijzen mét Drooggarantie.</h1>
            <p>
              Bekijk de huurprijs per dag of per week, of bereken een compleet droogpakket voor uw
              werf. Geen waarborg en geen verborgen kosten. Kiest u voor een pakket dat wij
              berekenen, leveren en installeren? Dan is onze 100 % Drooggarantie inbegrepen.
            </p>
            <div className="hcta">
              <Link className="btn btn-white" to="/verhuur/calculator">
                Bereken uw prijs
                <ArrowRightIcon />
              </Link>
              <a className="btn btn-ghost" href={`tel:${CONTACT.phoneE164}`}>
                <PhoneIcon /> {CONTACT.phoneLocal}
              </a>
            </div>
          </div>
          <div className="hero-vis">
            <img
              src="/vernast/man-zen-crop.webp"
              alt="Zorgeloos huren bij Vernast: één prijs, geen waarborg"
              width={700}
              height={760}
              loading="lazy"
              decoding="async"
              style={{ width: "min(84%,380px)", position: "relative", zIndex: 2 }}
            />
            {/*
              De badge zweeft (`floaty` in v3-content.css) en ligt áchter de man:
              met een hogere z-index dekte hij zijn gezicht af. Zelfde opbouw als
              op /drooggarantie.
            */}
            <div className="fbadge" style={{ top: "11%", right: "-14%", left: "auto", zIndex: 0 }}>
              <span className="ic"><TagIcon size={15} /></span>
              <div>
                100 % Drooggarantie
                <small>bij berekende pakketten met plaatsing</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/*
      PAKKET OF LOS TOESTEL — de belangrijkste keuze op deze pagina.

      We verhuren allebei, maar de Drooggarantie hangt uitsluitend aan een
      berekend pakket mét levering en installatie (zie /drooggarantie). Stond die
      scheiding er niet, dan leek een los toestel hetzelfde product voor minder
      geld, en kwam de garantiediscussie pas bij de eindmeting.
    */}
    <section className="sw" id="pakket-of-los">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Eerst dit</span>
          <h2 className="sec">Drooggarantie of alleen een toestel huren?</h2>
          <p className="lede">
            U kunt bij ons allebei. Een los toestel heeft een eenvoudige dagprijs en plaatst u
            zelf. Met een droogpakket koopt u meer zekerheid: wij berekenen de capaciteit en
            droogtijd, plaatsen de toestellen en meten het resultaat. Daarom geldt alleen op dat
            volledige pakket onze Drooggarantie.
          </p>
        </div>
        <div className="keuze2">
          <Reveal from="up" className="kz aanbevolen">
            <span className="kzlab">Wat wij aanraden</span>
            <span className="kzsub">Droogpakket</span>
            <h3>Berekend, geleverd en gemeten</h3>
            <p>
              De Calculator vertaalt uw oppervlakte, plafondhoogte en situatie naar het juiste
              aantal toestellen en een berekende droogperiode. Onze technieker plaatst alles, sluit
              de condensafvoer aan en meet het vochtgehalte bij start en oplevering.
            </p>
            <ul>
              <li><CheckIcon size={14} strokeWidth={3} /> <span><b>100 % drooggarantie:</b> niet droog binnen de berekende periode? U huurt kosteloos verder.*</span></li>
              <li><CheckIcon size={14} strokeWidth={3} /> Vochtmeting bij start én oplevering, zwart op wit</li>
              <li><CheckIcon size={14} strokeWidth={3} /> Levering, plaatsing en ophaling inbegrepen</li>
              <li><CheckIcon size={14} strokeWidth={3} /> Defect toestel binnen 24 uur vervangen</li>
              <li><CheckIcon size={14} strokeWidth={3} /> {PROCENT_ONLINE} % korting bij volledig online betalen</li>
            </ul>
            <Link className="btn" to="/verhuur/calculator">
              Bereken uw droogpakket
              <ArrowRightIcon />
            </Link>
          </Reveal>
          <Reveal from="up" delay={0.08} className="kz">
            <span className="kzsub">Los toestel</span>
            <h3>Zelf plaatsen, zelf opvolgen</h3>
            <p>
              Eén droger, ventilator of bouwkachel, per dag of per week. Handig voor een kleine
              ruimte, een tweede toestel bij een pakket, of wie het drogen zelf in handen wil
              houden. U haalt het af in Aartselaar of laat het leveren.
            </p>
            <ul>
              <li><CheckIcon size={14} strokeWidth={3} /> Eén vaste dagprijs, geen waarborg</li>
              <li><CheckIcon size={14} strokeWidth={3} /> Afhaalkorting in ons magazijn in Aartselaar</li>
              <li><CheckIcon size={14} strokeWidth={3} /> Ook bij te boeken naast een pakket</li>
              <li className="niet"><XIcon size={14} /> Geen drooggarantie: wij plaatsen en meten niet</li>
              <li className="niet"><XIcon size={14} /> U volgt zelf op of het droog is</li>
            </ul>
            <Link className="btn btn-line" to="/machines">
              Bekijk het gamma
              <ArrowRightIcon />
            </Link>
          </Reveal>
        </div>
        <div className="note">
          <b>Waarom die grens er is.</b> Een garantie kan alleen op een berekening rusten. Wij
          dimensioneren het pakket op volume en situatie, installeren het zelf en leggen het
          start- en eindpunt vast met een meting; daardoor is "droog" bij ons een meetresultaat en
          geen gevoel. Bij een los toestel bepaalt u zelf de opstelling, en dan kunnen wij de
          uitkomst niet beloven. De volledige voorwaarden leest u op{" "}
          <Link to="/drooggarantie">de pagina over de drooggarantie</Link>.
        </div>
      </div>
    </section>

    {/* ================= PRIJSOPBOUW ================= */}
    <section className="sr">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Prijsopbouw</span>
          <h2 className="sec">Zo komt uw bedrag tot stand.</h2>
          <p className="lede">
            Vier dingen bepalen wat u betaalt: wat u huurt, hoe lang, hoe u betaalt, en welke
            opties u zelf aanvinkt. Alle bedragen hieronder komen uit dezelfde prijslijst waarmee
            de checkout rekent.
          </p>
        </div>
        <div className="g2">
          <Reveal from="up" className="kaart">
            <div className="ki"><CheckIcon size={20} strokeWidth={2.4} /></div>
            <h3>Droogpakket: vaste prijs per situatie</h3>
            <p>
              Een pakket combineert droger, ventilator en eventueel kachels voor een bepaalde
              oppervlakte, werksoort en dikte. De prijs is de dagprijs van het pakket maal de dagen
              van de huurtermijn, en die termijn volgt uit de dikte van de chape of het pleisterwerk.
              {VOORBEELD_PAKKET && VOORBEELD_PAKKET.includes.length > 0
                ? ` Inbegrepen: ${VOORBEELD_PAKKET.includes.join(", ").toLowerCase()}.`
                : ""}
            </p>
          </Reveal>
          <Reveal from="up" delay={0.08} className="kaart">
            <div className="ki"><TagIcon size={20} /></div>
            <h3>Losse toestellen: dagprijs × dagen</h3>
            <p>
              Elk toestel heeft een dagprijs. De huurprijs is die dagprijs maal het aantal dagen,
              zonder toeslag voor een korte periode. Een {MIDDEN.short} aan {euro(MIDDEN.perDay)} per
              dag kost dus {euro(priceForWeeks(MIDDEN, 2))} voor twee weken.
            </p>
          </Reveal>
          <Reveal from="up" delay={0.16} className="kaart">
            <div className="ki"><CardIcon size={20} /></div>
            <h3>{PROCENT_ONLINE} % korting bij online betalen</h3>
            <p>
              Betaalt u de volledige huur online bij het reserveren, dan krijgt u {PROCENT_ONLINE} %
              korting op het hele bedrag. U kunt ook enkel een vaste orderbevestiging van{" "}
              {euroCent(DEPOSIT_GROSS)} incl. btw betalen en het saldo bij de installatie of de
              afhaling.
            </p>
          </Reveal>
          <Reveal from="up" delay={0.24} className="kaart">
            <div className="ki"><BoltIcon size={20} /></div>
            <h3>Opties die u zelf kiest</h3>
            <ul className="feats" style={{ marginTop: "10px", marginBottom: 0 }}>
              {COVER.filter((c) => c.price > 0).map((c) => (
                <li key={c.k}>
                  <CheckIcon size={12} strokeWidth={3} />
                  Dekking "{c.name}": {euro(c.price)}
                </li>
              ))}
              <li>
                <CheckIcon size={12} strokeWidth={3} />
                Condenspomp: {euro(PUMP.price)} per bouwdroger per dag
              </li>
              <li>
                <CheckIcon size={12} strokeWidth={3} />
                Plaatsing op verdieping via ladder: {euro(LADDER_FEE)}
              </li>
              {RAPPORT && (
                <li>
                  <CheckIcon size={12} strokeWidth={3} />
                  {RAPPORT.name}: {euro(RAPPORT.price)} {RAPPORT.unit}
                </li>
              )}
              {STROOMKAST && (
                <li>
                  <CheckIcon size={12} strokeWidth={3} />
                  {STROOMKAST.name}: {euro(STROOMKAST.price)} {STROOMKAST.unit}
                </li>
              )}
            </ul>
          </Reveal>
        </div>
        <p className="tblnote">
          Alle bedragen exclusief btw, tenzij anders vermeld. Op verhuur geldt {PROCENT_BTW} % btw.
        </p>
      </div>
    </section>

    {/* Rekenvoorbeeld — rechtstreeks uit bookingSummary, zie boven. */}
    {VOORBEELD && VOORBEELD_PAKKET && (
      <section className="sw">
        <div className="wrap split">
          <div>
            <span className="kick">Rekenvoorbeeld</span>
            <h2 className="sec">{VOORBEELD_PAKKET.title}</h2>
            <p className="lede">
              Een chapepakket zonder kachels, met een huurtermijn van {VOORBEELD.weeks}{" "}
              {VOORBEELD.weeks === 1 ? "week" : "weken"}, en de opties die bij het boeken standaard
              aangevinkt staan. Die opties kunt u uitzetten.
            </p>
            <p className="lede">
              Dit bedrag komt uit dezelfde module waarmee de boekingspagina en Stripe rekenen. Wat
              hier staat, staat straks ook in de checkout: geen "vanaf"-prijs die achteraf hoger
              uitvalt.
            </p>
            <div className="hcta" style={{ marginTop: "26px" }}>
              <Link className="btn" to="/verhuur/calculator">
                Bereken uw eigen pakket
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
          <div style={{ display: "block" }}>
            <div className="tblwrap" style={{ marginTop: 0 }}>
              <div className="tblscroll">
                <table className="tbl bon">
                  <caption className="sr-only">Rekenvoorbeeld van een droogpakket voor chape</caption>
                  <tbody>
                    <tr>
                      <th scope="row">Pakket ({VOORBEELD.days} dagen)</th>
                      <td>{euroCent(VOORBEELD.base)}</td>
                    </tr>
                    {VOORBEELD.lines.map((l) => (
                      <tr key={l.l}>
                        <th scope="row">{l.l}</th>
                        <td>{l.inc ? "Inbegrepen" : euroCent(l.v)}</td>
                      </tr>
                    ))}
                    <tr>
                      <th scope="row">Korting online betalen ({PROCENT_ONLINE} %)</th>
                      <td>{euroCent(-VOORBEELD.discount)}</td>
                    </tr>
                    <tr className="totaal">
                      <th scope="row">Totaal excl. btw</th>
                      <td>{euroCent(VOORBEELD.netTotal)}</td>
                    </tr>
                    <tr>
                      <th scope="row">Btw {PROCENT_BTW} %</th>
                      <td>{euroCent(VOORBEELD.vat)}</td>
                    </tr>
                    <tr className="totaal">
                      <th scope="row">Totaal incl. btw</th>
                      <td>{euroCent(VOORBEELD.grossTotal)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    )}

    {/*
      HUURTARIEVEN — een echte <table>. De prijzen stonden hier eerder in een
      grid van div's met "€ XX" erin; zowel de bedragen als het tabelverband
      ontbraken dus. Een AI-antwoord op "wat kost een bouwdroger huren" komt uit
      precies deze cellen — die moeten leesbaar aan elkaar hangen.
    */}
    <section className="sr" id="tarieven">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Losse toestellen</span>
          <h2 className="sec">Wat kost een bouwdroger per dag en per week?</h2>
          <p className="lede">
            De weekbedragen zijn simpelweg de dagprijs maal het aantal dagen. Er komt geen toeslag
            bij voor een korte huurperiode, en er is geen staffel die u pas bij het afrekenen ziet.
          </p>
        </div>

        <div className="tblwrap" style={{ marginTop: 0 }}>
          <div className="tblscroll">
            <table className="tbl">
              <caption className="sr-only">
                Huurprijzen per bouwdroger en per huurperiode, exclusief btw
              </caption>
              <thead>
                <tr>
                  <th scope="col">Bouwdroger</th>
                  <th scope="col">Per dag</th>
                  {RENTAL_WEEKS.map((w) => (
                    <th key={w} scope="col">
                      {w} {w === 1 ? "week" : "weken"}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DROGERS.map((t) => (
                  <tr key={t.key}>
                    <th scope="row">
                      <Link to={t.path}>{t.short}</Link>
                      <span style={{ display: "block", fontWeight: 400, fontSize: "11.5px", color: "var(--txt-dim)" }}>
                        {t.litersPerDay} L/dag · tot {t.volume} m³
                      </span>
                    </th>
                    <td style={{ whiteSpace: "nowrap", fontWeight: 700, color: "var(--txt)" }}>
                      {euro(t.perDay)}
                    </td>
                    {RENTAL_WEEKS.map((w) => (
                      <td key={w} style={{ whiteSpace: "nowrap" }}>
                        {euro(priceForWeeks(t, w))}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="tblnote">
          Prijzen excl. btw, {PROCENT_BTW} % btw van toepassing. Levering en ophaling zijn gratis
          vanaf een huurperiode van vier weken.
        </p>

        <div className="split boven" style={{ marginTop: "44px" }}>
          <div>
            <span className="kick">Ventilator en kachel</span>
            <h3 className="sec" style={{ fontSize: "clamp(22px,2.4vw,30px)" }}>
              Sneller droog, apart te huren.
            </h3>
            <p className="lede">
              Een ontvochtiger haalt het vocht uit de lucht; een ventilator zorgt dat er ook droge
              lucht bij de natte bouwmassa komt, en een kachel houdt de ruimte op temperatuur.
              Samen winnen ze dagen. In een berekend pakket zitten ze er al bij waar uw situatie
              ze nodig heeft.
            </p>
          </div>
          <div style={{ display: "block" }}>
            <div className="pricerows">
              {EXTRA_DEVICES.map((t) => (
                <div key={t.key}>
                  <span className="pn">
                    <Link to={t.path}>{t.name}</Link>
                    <small>{t.type}</small>
                  </span>
                  <span className="pv">
                    {euro(t.perDay)}
                    <span>/dag</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ================= INBEGREPEN EN GARANTIES ================= */}
    <section className="sw">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Inbegrepen bij een droogpakket</span>
          <h2 className="sec">Niet alleen toestellen, maar zekerheid.</h2>
          <p className="lede">
            De pakketprijs omvat de volledige begeleiding van start tot oplevering. Deze diensten
            staan niet als losse opties in de checkout en verschijnen niet onverwacht op de factuur.
          </p>
        </div>
        <div className="vinkjes" style={{ marginBottom: "44px" }}>
          {inbegrepen.map((item, i) => (
            <Reveal from="left" delay={i * 0.07} key={item}>
              <CheckIcon size={16} strokeWidth={3} />
              <span>{item}</span>
            </Reveal>
          ))}
        </div>
        <div className="g3">
          {garanties.map(({ Icon, title, desc }, i) => (
            <Reveal from="up" delay={i * 0.08} className="kaart" key={title}>
              <div className="ki"><Icon size={20} /></div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ================= STROOMVERBRUIK ================= */}
    {VERBRUIK.length > 0 && (
      <section className="sr" id="stroomverbruik">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Stroom</span>
            <h2 className="sec">Wat verbruikt een bouwdroger?</h2>
            <p className="lede">
              De stroom betaalt u zelf, want de toestellen draaien op uw aansluiting. Hieronder
              staat het opgenomen vermogen per toestel en wat dat op vol vermogen per dag en per
              week betekent. Dat is een bovengrens: de ingebouwde hygrostaat schakelt een
              ontvochtiger terug zodra de ingestelde vochtigheid bereikt is. Vermenigvuldig het
              aantal kWh met de prijs uit uw eigen contract.
            </p>
          </div>
          <div className="tblwrap" style={{ marginTop: 0 }}>
            <div className="tblscroll">
              <table className="tbl">
                <caption className="sr-only">Stroomverbruik per toestel op vol vermogen</caption>
                <thead>
                  <tr>
                    <th scope="col">Toestel</th>
                    <th scope="col">Vermogen</th>
                    <th scope="col">Max. per dag</th>
                    <th scope="col">Max. per week</th>
                  </tr>
                </thead>
                <tbody>
                  {VERBRUIK.map(({ t, kw }) => (
                    <tr key={t.key}>
                      <th scope="row">
                        <Link to={t.path}>{t.short}</Link>
                      </th>
                      <td style={{ whiteSpace: "nowrap" }}>{kw.toLocaleString("nl-BE")} kW</td>
                      <td style={{ whiteSpace: "nowrap" }}>{kwh(kw * 24)}</td>
                      <td style={{ whiteSpace: "nowrap" }}>{kwh(kw * 24 * 7)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="note">
            <b>En een bouwkachel?</b> Die verbruikt veel meer dan een droger: zijn vermogen staat in
            kilowatt op de toestelpagina, en de thermostaat schakelt hem af zodra de ruimte op
            temperatuur is. In een koude ruimte loont dat toch, omdat de ontvochtiger anders veel
            langer moet draaien. Meer cijfers staan in de gids over{" "}
            <Link to="/gids/stroomverbruik-bouwdroger">het stroomverbruik van een bouwdroger</Link>.
          </div>
        </div>
      </section>
    )}

    {/*
      Veelgestelde vragen — zichtbaar, niet ingeklapt.

      Dit is de sectie waaruit een AI-assistent citeert wanneer iemand
      "wat kost een bouwdroger huren" vraagt. Dezelfde tekst staat als
      FAQ-schema in de head; schema voor onzichtbare inhoud is een
      overtreding, dus die twee mogen niet uit elkaar lopen.
    */}
    <FaqBlok
      titel="Veelgestelde vragen over de prijs."
      vragen={FAQ.map((item) => ({ q: item.question, a: item.answer }))}
      sleutel="pr-faq"
      variant="wit"
    >
      <div className="manband">
        <div className="mb-t">
          <span className="mbk">Klaar om te reserveren</span>
          <h3>Geen waarborg, geen verborgen kosten, levering binnen 24 uur.</h3>
          <p>
            De Calculator geeft u in een paar klikken de volledige prijs voor uw oppervlakte,
            inclusief Drooggarantie op een berekend pakket. U krijgt {PROCENT_ONLINE} % korting als
            u meteen online betaalt.
          </p>
          <div className="mb-cta">
            <Link className="btn btn-white" to="/verhuur/calculator">
              Bereken uw prijs
              <ArrowRightIcon />
            </Link>
            <a className="btn btn-ghost" href={`tel:${CONTACT.phoneE164}`}>
              <PhoneIcon /> {CONTACT.phoneLocal}
            </a>
          </div>
        </div>
        <img
          className="mb-man breed"
          src="/vernast/man-betaling.webp"
          alt="Vernast technicus met de betaalterminal"
          width={600}
          height={900}
          loading="lazy"
          decoding="async"
        />
      </div>
    </FaqBlok>

    {/*
      Verder lezen staat hier in het wit en niet in het rood: samen met het
      rode contactformulier eronder was dit anders één rood vlak van bijna twee
      schermen hoog, met witte kaarten als enige contrast. De kaarten houden
      hun scheiding via `--bg-alt` (#F4F4F4) — dat zet `.sw .vlcard` al. Het
      formulier eronder blijft wél rood, zodat de pagina op rood eindigt.
    */}
    <VerderLezen titel="Verder lezen over prijzen en pakketten" groepen={verderLezen} />

    <ContactBlok
      kicker="Een vraag over de prijs?"
      titel="Liever een prijs op maat van uw werf?"
      lede="Geef ons uw oppervlakte en wat er moet drogen. U krijgt binnen één werkdag een voorstel met het juiste pakket en de juiste termijn."
      onderwerpen={[
        "Prijs van een droogpakket",
        "Prijs van een los toestel",
        "Vraag over de drooggarantie",
        "Factuur en btw",
        "Iets anders",
      ]}
      placeholder="Bv. nieuwbouw 160 m² met chape van 6 cm, levering half december, graag een prijsvoorstel."
    />

    </main>

    <V3Footer />
  </div>
);

export default PrijzenPage;

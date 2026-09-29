import PageMeta from "@/components/PageMeta";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/schema";
import Navbar from "@/components/Navbar";
import V3Footer from "@/components/home-v3/V3Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  Droplets,
  Wind,
  Thermometer,
  Flame,
  Cable,
  Snowflake,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { productPath, products } from "@/data/products";
import machinesHero from "@/assets/machines-hero.png";
import { SEO } from "@/data/seo";
import Reveal from "@/components/Reveal";
import VerderLezen, { type LeesGroep } from "@/components/VerderLezen";
import { PRODUCTS, PRODUCT_ADDONS } from "@/data/verhuur";
import { DROGERS, euro } from "@/data/tarieflijst";

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
      "Voor kelders, winterwerven en onverwarmde nieuwbouw. Warmte maakt het vocht los en laat de condensdroger op volle capaciteit werken, maar voert zelf niets af. Onze bouwkachels vragen een aansluiting op 400 V krachtstroom.",
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
    a: `Reken eerst het volume van de ruimte uit: vloeroppervlakte maal plafondhoogte. Onze kleinste droger, de ${KLEINSTE.short}, is bedoeld voor ruimtes tot ${KLEINSTE.volume} m³; de ${GROOTSTE.short} gaat tot ${GROOTSTE.volume} m³. Veel nat materiaal — dikke chape, verse waterschade — vraagt meer capaciteit dan het volume alleen doet vermoeden. Twijfelt u, neem dan het grotere toestel of laat de calculator rekenen.`,
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
      { to: "/prijzen", label: "Huurprijzen per dag en per week" },
      { to: "/nieuwbouw", label: "Chape en pleisterwerk drogen" },
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

const categories = [
  { id: "bouwdrogers", label: "Bouwdrogers", icon: Droplets },
  { id: "ventilatoren", label: "Ventilatoren", icon: Wind },
  { id: "verwarming", label: "Verwarming", icon: Thermometer },
];

const extraProducts = [
  {
    name: "Turbo Axiaal 8500",
    category: "ventilatoren",
    capacity: "8.500 m³/u",
    price: 8,
    image: null,
    features: ["Hoog debiet", "IP55", "Industrieel"],
  },
  {
    name: "Turbo Axiaal 20000",
    category: "ventilatoren",
    capacity: "20.000 m³/u",
    price: 15,
    image: null,
    features: ["Maximaal debiet", "Grote ruimtes", "IP55"],
  },
  {
    name: "Turbo Radiaal 7000",
    category: "ventilatoren",
    capacity: "7.000 m³/u",
    price: 12,
    image: null,
    features: ["Vloer & muur", "IP55", "3 standen"],
  },
  {
    name: "Elektrische kachel 5kW",
    category: "verwarming",
    capacity: "5 kW",
    price: 5,
    image: null,
    features: ["Thermostaat", "Tot 80m²", "Veilig"],
  },
  {
    name: "Elektrische kachel 9kW",
    category: "verwarming",
    capacity: "9 kW",
    price: 8,
    image: null,
    features: ["380V", "Tot 150m²", "Industrieel"],
  },
  {
    name: "Elektrische kachel 18kW",
    category: "verwarming",
    capacity: "18 kW",
    price: 14,
    image: null,
    features: ["380V", "Tot 300m²", "Maximaal"],
  },
  {
    name: "Dieselheater BDS 118kW",
    category: "verwarming",
    capacity: "118 kW",
    price: 28,
    image: null,
    features: ["Direct gestookt", "Diesel", "Grote ruimtes"],
  },
  {
    name: "Dieselheater BDS 236kW",
    category: "verwarming",
    capacity: "236 kW",
    price: 55,
    image: null,
    features: ["Direct gestookt", "Diesel", "Industrieel"],
  },
];

const accessories = [
  {
    icon: Cable,
    name: "Verlengsnoer 10m",
    desc: "Gratis bij elke bouwdroger",
    free: true,
  },
  {
    icon: Droplets,
    name: "Opvangbak",
    desc: "Gratis bij elke bouwdroger",
    free: true,
  },
  {
    icon: Snowflake,
    name: "Airconditioner",
    desc: "Beschikbaar op aanvraag",
    free: false,
  },
];

const included = [
  "Gratis levering & ophaling (2+ weken)",
  "Gratis vochtmeting",
  "Gratis verlengsnoer 10m",
  "Persoonlijk advies",
];

const MachinesPage = () => {
  const navigate = useNavigate();

  const bouwdrogers = products.filter((p) => p.category === "bouwdrogers");
  const ventilatoren = products.filter((p) => p.category === "ventilatoren");
  const verwarming = products.filter((p) => p.category === "verwarming");

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        {...SEO.machines}
        jsonLd={[
          itemListSchema(
            "Gamma bouwdrogers, ventilatoren en bouwkachels",
            products.map((p) => ({ name: p.name, path: productPath(p.id) }))
          ),
          faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Machines", path: "/machines" },
          ]),
        ]}
      />
      <Navbar />
      <main>
        {/* Hero — banner image with text overlay, same style as homepage */}
        <section className="relative overflow-visible bg-white">
          {/*
            Breedte en hoogte staan erbij omdat de hoogte hier uit de
            afbeelding zelf komt (`h-auto`). Zonder die twee kent de browser de
            verhouding pas als het bestand binnen is en schuift alles eronder
            alsnog naar beneden. Dit is bovendien de grootste afbeelding boven
            de vouw op deze pagina, vandaar `fetchPriority`.
          */}
          <img
            src={machinesHero}
            alt="Vernast technieker rolt een eco-bouwdroger naar de werf"
            className="w-full h-auto block"
            width={1400}
            height={742}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0">
            <div className="container mx-auto px-4 h-full flex items-center justify-end">
              <div
                className="max-w-lg py-8 text-right"
              >
                <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/15 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-5">
                  Ons productgamma
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                  Bouwdrogers, ventilatoren
                  <br />
                  en kachels huren
                </h1>
                <p className="text-white/70 text-base mb-8 max-w-md ml-auto">
                  Van compacte ECO-drogers tot industriële dieselheaters. Altijd de
                  juiste machine voor uw project.
                </p>
                <div className="flex flex-wrap gap-3 justify-end">
                  {categories.map((cat) => (
                    <a
                      key={cat.id}
                      href={`#${cat.id}`}
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/15 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors"
                    >
                      <cat.icon className="h-4 w-4" />
                      {cat.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Always included strip */}
        <section className="py-5 border-b border-border bg-secondary">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6">
              {included.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KEUZEHULP */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-3">Welk toestel kiest u?</h2>
              <p className="text-muted-foreground">
                Drogen gebeurt met drie soorten toestellen die elk iets anders doen. De ontvochtiger haalt
                het vocht uit de lucht, de ventilator brengt droge lucht bij het natte materiaal, en de
                kachel zorgt dat de ruimte warm genoeg is om het vocht los te laten. In de meeste situaties
                werkt u met een combinatie.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {keuzes.map((k) => (
                <div key={k.key} className="bg-secondary border border-border rounded-2xl p-6 flex flex-col">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">{k.titel}</p>
                  <h3 className="text-lg font-black text-foreground mb-2">{PRODUCTS[k.key].name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{k.wanneer}</p>
                  <Link
                    to={`/verhuur/toestel/${k.key}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    Bekijk de {PRODUCTS[k.key].short} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LITER PER DAG VS M³ */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-3">
                Liter per dag of kubieke meter: wat zegt de capaciteit?
              </h2>
              <p className="text-muted-foreground mb-3">
                Bij een ontvochtiger staan twee getallen. De <strong>vochtafvoer in liter per dag</strong> is
                hoeveel water het toestel maximaal uit de lucht haalt
                {MEETCONDITIE ? `, gemeten bij ${MEETCONDITIE}` : " onder labo-omstandigheden"}. In een koelere
                of drogere ruimte haalt geen enkele droger dat cijfer: het is een maat om toestellen te
                vergelijken, geen belofte voor uw werf.
              </p>
              <p className="text-muted-foreground mb-6">
                Het <strong>bereik in kubieke meter</strong> is het volume waarvoor het toestel geschikt is.
                Reken uw volume uit als vloeroppervlakte maal plafondhoogte: 100 m² bij 2,5 m hoog is 250 m³.
                Zit er veel nat materiaal in die ruimte, zoals een verse chape of recente waterschade, kies
                dan eerder het grotere toestel of een tweede droger.
              </p>
              <div className="bg-background border border-border rounded-2xl overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <caption className="sr-only">Vergelijking van de ontvochtigers: capaciteit, bereik, verbruik en dagprijs</caption>
                  <thead>
                    <tr className="bg-accent text-primary-foreground">
                      <th scope="col" className="px-5 py-4 text-left font-bold">Ontvochtiger</th>
                      <th scope="col" className="px-5 py-4 text-center font-bold whitespace-nowrap">Liter per dag</th>
                      <th scope="col" className="px-5 py-4 text-center font-bold whitespace-nowrap">Bereik</th>
                      <th scope="col" className="px-5 py-4 text-center font-bold">Verbruik</th>
                      <th scope="col" className="px-5 py-4 text-center font-bold whitespace-nowrap">Per dag</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DROGERS.map((t, i) => (
                      <tr key={t.key} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                        <th scope="row" className="px-5 py-3 text-left font-bold text-foreground">
                          <Link to={t.path} className="hover:text-primary transition-colors">{t.short}</Link>
                          <span className="block font-normal text-xs text-muted-foreground">{t.badge}</span>
                        </th>
                        <td className="px-5 py-3 text-center">{t.litersPerDay} L</td>
                        <td className="px-5 py-3 text-center whitespace-nowrap">tot {t.volume} m³</td>
                        <td className="px-5 py-3 text-center whitespace-nowrap">{kerngegeven(t.key, "Verbruik") ?? "—"}</td>
                        <td className="px-5 py-3 text-center whitespace-nowrap font-bold">{euro(t.perDay)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {combinaties.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-black text-foreground mb-2">Welke combinatie hoort erbij?</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Een ontvochtiger staat zelden alleen. Dit zijn de toestellen die we bij elke droger als
                    aanvulling voorstellen: een ventilator om de droge lucht bij de muren en de vloer te
                    krijgen, en in een koude ruimte een kachel.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {combinaties.map(({ droger, erbij }) => (
                      <li key={droger.key}>
                        <Link to={droger.path} className="font-semibold text-primary hover:underline">
                          {droger.short}
                        </Link>{" "}
                        met {erbij.map((p) => p.name).join(" en ")}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <p className="text-xs text-muted-foreground mt-3">
                Prijzen excl. btw. Meer over de prijsopbouw en het stroomverbruik op{" "}
                <Link to="/prijzen" className="font-semibold text-primary hover:underline">de prijzenpagina</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* BOUWDROGERS */}
        <section id="bouwdrogers" className="py-16 md:py-24 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-3">
              <Droplets className="h-6 w-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-black text-foreground">
                Bouwdrogers
              </h2>
            </div>
            <p className="text-muted-foreground mb-10 max-w-xl">
              Onze ECO-lijn verbruikt tot 40% minder energie dan traditionele
              industriële drogers.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bouwdrogers.map((product, i) => (
                <Reveal
                  from="up"
                  delay={i * 0.08}
                  key={product.id}
                  className={`relative bg-secondary rounded-2xl overflow-hidden border transition-all hover:-translate-y-1 hover:shadow-xl ${
                    product.name === "ECO Performance"
                      ? "border-primary shadow-md"
                      : "border-border"
                  }`}
                >
                  {product.name === "ECO Performance" && (
                    <Badge className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground">
                      POPULAIR
                    </Badge>
                  )}

                  <div className="px-5 pt-5">
                    <h3 className="font-bold text-foreground">{product.name}</h3>
                    <div className="text-2xl font-black text-primary mt-1">
                      €{product.pricePerDay}
                      <span className="text-xs font-normal text-muted-foreground">
                        /dag
                      </span>
                    </div>
                  </div>

                  <div className="bg-white mx-4 my-4 rounded-xl p-4 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="h-36 w-full object-contain" loading="lazy" decoding="async" />
                  </div>

                  <div className="px-5 pb-2">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      <span className="bg-background text-muted-foreground text-xs px-2 py-1 rounded-md">
                        {product.capacity}
                      </span>
                      <span className="bg-background text-muted-foreground text-xs px-2 py-1 rounded-md">
                        {product.suitableFor}
                      </span>
                    </div>
                    <ul className="text-xs text-muted-foreground space-y-1 mb-3">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-center gap-1.5">
                          <CheckCircle2 className="h-3 w-3 text-primary flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="px-5 pb-5">
                    <Button
                      asChild
                      variant={
                        product.name === "ECO Performance"
                          ? "default"
                          : "outline"
                      }
                      className="w-full text-sm font-semibold"
                      size="sm"
                    >
                      <Link to={productPath(product.id)}>Bekijk details</Link>
                    </Button>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* VENTILATOREN */}
        <section
          id="ventilatoren"
          className="py-16 md:py-24 bg-secondary scroll-mt-20"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-3">
              <Wind className="h-6 w-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-black text-foreground">
                Ventilatoren
              </h2>
            </div>
            <p className="text-muted-foreground mb-10 max-w-xl">
              Versnelt het droogproces met tot 30%. Axiaal voor grote ruimtes,
              radiaal voor vloer- en muurdroging.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...ventilatoren, ...extraProducts.filter((p) => p.category === "ventilatoren")].map(
                (product, i) => {
                  const isFromData = "id" in product;
                  return (
                    <Reveal
                      from="up"
                      delay={i * 0.08}
                      key={isFromData ? product.id : product.name}
                      className="bg-background rounded-2xl border border-border p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                    >
                      {isFromData && product.image && (
                        <div className="bg-secondary rounded-xl p-3 mb-4 flex items-center justify-center">
                          <img
                            src={product.image}
                            alt={product.imageAlt}
                            className="h-28 object-contain" loading="lazy" decoding="async" />
                        </div>
                      )}
                      <h3 className="font-bold text-foreground mb-1">
                        {product.name}
                      </h3>
                      <div className="text-xl font-black text-primary mb-2">
                        {/*
                          De `in`-controle staat hier, niet achter `isFromData`:
                          een losse boolean vertelt TypeScript niets over welke
                          van de twee vormen `product` heeft, dus dan bestaat
                          `price` volgens de compiler niet.
                        */}
                        €{"pricePerDay" in product ? product.pricePerDay : product.price}
                        <span className="text-xs font-normal text-muted-foreground">
                          /dag
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        <span className="bg-secondary text-muted-foreground text-xs px-2 py-1 rounded-md">
                          {isFromData ? product.capacity : product.capacity}
                        </span>
                        <span className="bg-secondary text-muted-foreground text-xs px-2 py-1 rounded-md">
                          {isFromData ? product.suitableFor : ""}
                        </span>
                      </div>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {(isFromData ? product.features : product.features).map(
                          (f) => (
                            <li key={f} className="flex items-center gap-1.5">
                              <CheckCircle2 className="h-3 w-3 text-primary flex-shrink-0" />
                              {f}
                            </li>
                          )
                        )}
                      </ul>
                    </Reveal>
                  );
                }
              )}
            </div>
          </div>
        </section>

        {/* VERWARMING */}
        <section id="verwarming" className="py-16 md:py-24 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-3">
              <Thermometer className="h-6 w-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-black text-foreground">
                Verwarming
              </h2>
            </div>
            <p className="text-muted-foreground mb-10 max-w-xl">
              Elektrische kachels voor standaard gebruik, dieselheaters voor
              grote industriële ruimtes.
            </p>

            {/* Elektrische kachels */}
            <h3 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
              <Flame className="h-5 w-5 text-primary" />
              Elektrische kachels
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                verwarming[0],
                ...extraProducts.filter(
                  (p) =>
                    p.category === "verwarming" &&
                    p.name.startsWith("Elektrische")
                ),
              ]
                .filter(Boolean)
                .map((product, i) => {
                  const isFromData = product && "id" in product;
                  return (
                    <Reveal
                      from="up"
                      delay={i * 0.08}
                      key={isFromData ? product.id : product.name}
                      className="bg-secondary rounded-2xl border border-border p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                    >
                      {isFromData && product.image && (
                        <div className="bg-white rounded-xl p-3 mb-4 flex items-center justify-center">
                          <img
                            src={product.image}
                            alt={product.imageAlt}
                            className="h-24 object-contain" loading="lazy" decoding="async" />
                        </div>
                      )}
                      <h3 className="font-bold text-foreground mb-1">
                        {product.name}
                      </h3>
                      <div className="text-xl font-black text-primary mb-2">
                        {/*
                          De `in`-controle staat hier, niet achter `isFromData`:
                          een losse boolean vertelt TypeScript niets over welke
                          van de twee vormen `product` heeft, dus dan bestaat
                          `price` volgens de compiler niet.
                        */}
                        €{"pricePerDay" in product ? product.pricePerDay : product.price}
                        <span className="text-xs font-normal text-muted-foreground">
                          /dag
                        </span>
                      </div>
                      <span className="bg-background text-muted-foreground text-xs px-2 py-1 rounded-md">
                        {isFromData ? product.capacity : product.capacity}
                      </span>
                    </Reveal>
                  );
                })}
            </div>

            {/* Dieselheaters */}
            <h3 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
              <Flame className="h-5 w-5 text-orange-500" />
              Dieselheaters
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {extraProducts
                .filter((p) => p.name.startsWith("Dieselheater"))
                .map((product, i) => (
                  <Reveal
                    from="up"
                    delay={i * 0.08}
                    key={product.name}
                    className="bg-secondary rounded-2xl border border-border p-6 transition-all hover:shadow-lg"
                  >
                    <h3 className="font-bold text-foreground mb-1">
                      {product.name}
                    </h3>
                    <div className="text-xl font-black text-primary mb-2">
                      €{product.price}
                      <span className="text-xs font-normal text-muted-foreground">
                        /dag
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      <span className="bg-background text-muted-foreground text-xs px-2 py-1 rounded-md">
                        {product.capacity}
                      </span>
                    </div>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-center gap-1.5">
                          <CheckCircle2 className="h-3 w-3 text-orange-500 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                ))}
            </div>
          </div>
        </section>

        {/* ACCESSOIRES */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-10">
              Toebehoren
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {accessories.map((a, i) => (
                <Reveal
                  from="up"
                  delay={i * 0.08}
                  key={a.name}
                  className="bg-background border border-border rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <a.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{a.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {a.desc}
                  </p>
                  {a.free && (
                    <Badge className="bg-green-600 text-white">GRATIS</Badge>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <VerderLezen titel="Verder lezen" groepen={verderLezen} />

        {/* FAQ — zichtbaar, en gelijk aan de FAQ-schema in de head. */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-10">
              Veelgestelde vragen over het materiaal
            </h2>
            <dl className="max-w-2xl mx-auto space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-background border border-border rounded-xl p-5">
                  <dt className="font-semibold text-foreground mb-2">{faq.q}</dt>
                  <dd className="text-sm text-muted-foreground leading-relaxed">{faq.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent py-16 md:py-20">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-black text-primary-foreground mb-3">
              Twijfel over welke machine?
            </h2>
            <p className="text-primary-foreground/70 mb-8">
              Bel ons voor gratis advies — wij helpen u de juiste keuze maken
              voor uw project.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-white text-accent hover:bg-white/90 rounded-full font-bold gap-2 px-8"
                onClick={() => navigate("/#configurator")}
              >
                Bereken je prijs <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full font-bold gap-2 px-8"
                asChild
              >
                <a href="tel:+3236899065">
                  <Phone className="h-4 w-4" /> Bel ons
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <V3Footer />
    </div>
  );
};

export default MachinesPage;

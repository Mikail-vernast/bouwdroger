import PageMeta from "@/components/PageMeta";
import Navbar from "@/components/Navbar";
import V3Footer from "@/components/home-v3/V3Footer";
import { Button } from "@/components/ui/button";
import MachineCard from "@/components/MachineCard";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Zap,
  Truck,
  BarChart3,
  Thermometer,
  Wind,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/data/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { DROGER_KAARTEN, euro } from "@/data/tarieflijst";
import { EXTRAS } from "@/data/verhuur";
import { droogtermijnen, natuurlijkeChapeWeken, termijnLabel } from "@/lib/droogtijden";
import Reveal from "@/components/Reveal";
import VerderLezen, { type LeesGroep } from "@/components/VerderLezen";

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

const steps = [
  { num: "1", title: "Reserveer online of bel", desc: "Kies machine en leveringsdatum.", icon: Phone },
  { num: "2", title: "Levering aan huis", desc: "Expert plaatst en legt uit.", icon: Truck },
  { num: "3", title: "Machine doet zijn werk", desc: "Controleer dagelijks de wateropvang.", icon: Zap },
  { num: "4", title: "Gratis vochtmeting", desc: "Bewijs voor uw vloerder.", icon: BarChart3 },
];

const tips = [
  { icon: Wind, emoji: "💨", title: "Combineer met ventilator", desc: "Zorgt voor 30% sneller drogen. Wij verhuren ook ventilatoren." },
  { icon: Thermometer, emoji: "🌡️", title: "Verwarm de ruimte", desc: "Bij temperaturen onder 15°C werkt een kachel als aanvulling." },
  { icon: BarChart3, emoji: "📊", title: "Meet dagelijks", desc: "Controleer de wateropvang regelmatig." },
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
    a: `Zonder hulp rekent men bij zandcementchape als vuistregel ongeveer een week per centimeter voor de eerste vier centimeter, en daarna twee weken per extra centimeter — voor 6 cm dus zo'n ${natuurlijkeChapeWeken(6)} weken, onder goede omstandigheden. Met een bouwdroger lopen onze chapepakketten ${opsomming(CHAPE)}. Of u effectief kunt vloeren, beslist een restvochtmeting, niet de kalender.`,
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

const verderLezen: LeesGroep[] = [
  {
    kop: "Zo pakten we het aan",
    links: [
      { to: "/realisaties/mnr-l-hasselt", label: "Pleister- en chapewerken versneld gedroogd in Hasselt" },
      { to: "/realisaties/mevr-j-j-kontich", label: "Bouwvocht drooggelegd in een nieuwbouwwoning in Kontich" },
      { to: "/realisaties/mnr-k-putte", label: "Bouwvocht na pleister en chape weggedroogd in Putte" },
    ],
  },
  {
    kop: "De toestellen voor chape en pleister",
    links: [
      { to: "/verhuur/toestel/ttk350", toestel: "ttk350", label: "Ontvochtiger TTK 350 S", sub: "Het standaardtoestel voor een nieuwbouwwoning." },
      { to: "/verhuur/toestel/radiaal2250", toestel: "radiaal2250", label: "Radiaalventilator voor chapedroging", sub: "Blaast vlak over de vloer." },
      { to: "/verhuur/toestel/teddh30", toestel: "teddh30", label: "Elektrische bouwkachel voor een koude werf", sub: "Onder 15 °C droogt het traag." },
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

const NieuwbouwPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        {...SEO.nieuwbouw}
        jsonLd={[
          serviceSchema({
            name: "Chape en pleisterwerk drogen",
            description:
              "Actieve droging van verse chape en pleisterwerk in nieuwbouw, zodat vloerder en schilder weken vroeger kunnen starten.",
            path: "/nieuwbouw",
            serviceType: "Bouwdroging",
          }),
          /*
            De vragen onderaan deze pagina, ook machineleesbaar. Zelfde tekst
            als wat zichtbaar staat, dus schema en pagina blijven gelijk.
          */
          faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Nieuwbouw", path: "/nieuwbouw" },
          ]),
        ]}
      />
      <Navbar />
      <main>
        {/* 1. HERO */}
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
              <div>
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 text-sm px-4 py-1.5">
                  🏗️ Nieuwbouw & verbouwing
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground leading-tight mb-4">
                  Chape en pleisterwerk drogen met een bouwdroger
                </h1>
                <p className="text-muted-foreground text-lg mb-8 max-w-lg">
                  Verse chape en vers pleisterwerk zitten vol water. Een bouwdroger, een ventilator en
                  bij koud weer een kachel halen dat vocht er gecontroleerd uit, zodat uw vloerder en
                  schilder vroeger kunnen starten.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="rounded-full font-bold text-base gap-2 px-8"
                    onClick={() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Bereken mijn pakket <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full font-bold text-base gap-2 px-8"
                    asChild
                  >
                    <a href="tel:+3236899065"><Phone className="h-4 w-4" /> Bel voor advies</a>
                  </Button>
                </div>
              </div>

              <div
                className="hidden lg:flex items-center justify-center"
              >
                {/*
                  Hier stond een grijs vak met de tekst "Foto chape / machine".
                  Dat is een ontwerpnotitie, geen inhoud: hij werd meegeprerenderd
                  en stond dus als zichtbare tekst in de pagina die Google en een
                  AI-assistent lezen.
                */}
                <img
                  src="/vernast/case-chape.webp"
                  alt="Bouwdroger aan het werk op een verse chape in een nieuwbouwwoning"
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/3] object-cover rounded-2xl border border-border"
                />
              </div>
            </div>
          </div>
        </section>


        {/* 2. PROBLEM VS SOLUTION */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-10">
              Drogen zonder vs. met bouwdroger
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Without */}
              <Reveal
                from="up"
                delay={(0) * 0.08}
                className="bg-[hsl(0,100%,97%)] border border-[hsl(0,80%,90%)] rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-center gap-2 mb-5">
                  <XCircle className="h-6 w-6 text-destructive" />
                  <h3 className="text-lg font-black text-destructive">Zonder bouwdroger</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Maanden wachten, zeker in herfst en winter",
                    "Vloerder kan niet starten",
                    "Risico op schimmel en vochtproblemen",
                    "Vertraging in heel het afwerkingsproces",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* With */}
              <Reveal
                from="up"
                delay={(1) * 0.08}
                className="bg-[hsl(142,76%,96%)] border border-[hsl(142,60%,80%)] rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-center gap-2 mb-5">
                  <CheckCircle2 className="h-6 w-6 text-[hsl(142,71%,35%)]" />
                  <h3 className="text-lg font-black text-[hsl(142,71%,35%)]">Met Vernast bouwdroger</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    `Huurtermijn van ${kortsteTermijn} tot ${langsteTermijn} weken, volgens de dikte`,
                    "Vloerder kan sneller beginnen",
                    "Minder kans op schimmel en vochtplekken",
                    "Vochtmeting bij start en oplevering",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(142,71%,35%)] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/*
          3. DROOGTIJDEN — de vraag waarmee mensen hier binnenkomen ("hoe lang
          chape drogen", "droogtijd pleisterwerk"). Een echte <table>, zodat een
          zoekmachine of AI-assistent de dikte en de termijn aan elkaar kan
          koppelen. De kolom "met bouwdroger" is de catalogus; de kolom
          "zonder" is uitdrukkelijk een vuistregel.
        */}
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-4">
                Droogtijd van chape: met en zonder bouwdroger
              </h2>
              <p className="text-muted-foreground mb-4">
                Een zandcementchape wordt nat aangebracht: er zit meer water in dan het cement nodig heeft
                om uit te harden, en dat overschot moet er via het oppervlak weer uit. Hoe dikker de laag,
                hoe langer de weg voor het vocht onderin. Daarom groeit de droogtijd sneller dan de dikte:
                de laatste centimeters duren het langst.
              </p>
              <p className="text-muted-foreground mb-6">
                Met een bouwdroger houdt u de lucht boven de chape droog, zodat het vocht blijft
                uittreden in plaats van te blijven hangen. Onze chapepakketten zijn opgebouwd op de
                dikte van de laag; de huurtermijn hieronder is wat elk pakket voorziet.
              </p>

              <div className="bg-card border border-border rounded-2xl overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <caption className="sr-only">
                    Droogtijd van chape per dikte, met bouwdroger en zonder bouwdroger
                  </caption>
                  <thead>
                    <tr className="bg-accent text-primary-foreground">
                      <th scope="col" className="px-5 py-4 text-left font-bold">Chapedikte</th>
                      <th scope="col" className="px-5 py-4 text-center font-bold">Met bouwdroger (huurtermijn pakket)</th>
                      <th scope="col" className="px-5 py-4 text-center font-bold">Zonder bouwdroger (richtwaarde)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CHAPE.map((r, i) => (
                      <tr key={r.dikte} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                        <th scope="row" className="px-5 py-4 text-left font-bold text-foreground">{r.dikte} cm</th>
                        <td className="px-5 py-4 text-center text-foreground">{termijnLabel(r)}</td>
                        <td className="px-5 py-4 text-center text-muted-foreground">
                          ± {natuurlijkeChapeWeken(r.dikte)} weken
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                De richtwaarde zonder bouwdroger volgt de gangbare vuistregel voor zandcementchape: ongeveer
                een week per centimeter voor de eerste vier centimeter, daarna twee weken per extra
                centimeter, in een verluchte ruimte rond 20 °C. In een koude of vochtige periode duurt het
                langer. Anhydriet- en gietvloeren volgen andere regels — volg daar de richtlijn van de
                fabrikant. Geen van beide kolommen vervangt een meting.
              </p>
            </div>
          </div>
        </section>

        {/* 4. PLEISTERWERK */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-4">
                Hoe lang moet pleisterwerk drogen?
              </h2>
              <p className="text-muted-foreground mb-6">
                Pleisterwerk is dunner dan chape, maar het beslaat alle muren en plafonds. In een nieuwbouw
                komt dat vocht bovenop wat de chape al afgeeft, en precies dan zit de lucht in huis snel
                verzadigd: de muren drogen dan nauwelijks nog. Zeker in herfst en winter kan natuurlijk
                drogen daardoor veel langer duren dan de dikte doet vermoeden. Schildert of behangt u te
                vroeg, dan kan de verf bladderen of vlekken, en sluit u vocht in de muur op.
              </p>
              <div className="bg-card border border-border rounded-2xl overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <caption className="sr-only">Huurtermijn van een pleisterpakket per pleisterdikte</caption>
                  <thead>
                    <tr className="bg-accent text-primary-foreground">
                      <th scope="col" className="px-5 py-4 text-left font-bold">Pleisterdikte</th>
                      <th scope="col" className="px-5 py-4 text-center font-bold">Met bouwdroger (huurtermijn pakket)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PLEISTER.map((r, i) => (
                      <tr key={r.dikte} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                        <th scope="row" className="px-5 py-4 text-left font-bold text-foreground">{r.dikte} cm</th>
                        <td className="px-5 py-4 text-center text-foreground">{termijnLabel(r)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground mt-6">
                Moeten pleisterwerk en chape samen drogen? Dan kiest u in de{" "}
                <Link to="/verhuur/calculator" className="font-semibold text-primary hover:underline">
                  calculator
                </Link>{" "}
                "pleisterwerk + chape": dat pakket is berekend op muren en vloer tegelijk.
              </p>
            </div>
          </div>
        </section>

        {/* 5. PRAKTIJK: STARTEN, TEMPERATUUR, METEN */}
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-card border border-border rounded-2xl p-6">
                <h2 className="text-lg font-black text-foreground mb-3">Wanneer begint u met drogen?</h2>
                <p className="text-sm text-muted-foreground mb-3">
                  Een verse zandcementchape moet eerst uitharden. Wie meteen hard begint te drogen, loopt
                  het risico op krimpscheuren of een zwakke toplaag. Vraag uw chapeur vanaf wanneer u
                  actief mag drogen; vaak is dat na enkele dagen tot een week.
                </p>
                <p className="text-sm text-muted-foreground">
                  Pleisterwerk kan meestal sneller aan de beurt, zodra het oppervlak hard is. Plant u beide,
                  reserveer dan zo dat de toestellen er staan op de dag dat de chapeur groen licht geeft.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6">
                <h2 className="text-lg font-black text-foreground mb-3">Temperatuur en ventileren</h2>
                <p className="text-sm text-muted-foreground mb-3">
                  Een condensdroger werkt het best in een ruimte tussen ongeveer 15 en 25 °C. Onder 15 °C
                  neemt de lucht weinig vocht op en geeft de chape haar water traag af; dan zet u er een
                  bouwkachel bij.
                </p>
                <p className="text-sm text-muted-foreground">
                  Houd ramen en deuren dicht terwijl de droger draait, anders droogt hij de buitenlucht
                  mee. Een ventilator binnen de ruimte helpt wél: die blaast de verzadigde luchtlaag vlak
                  boven de vloer weg, zodat er telkens droge lucht bij de chape komt.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6">
                <h2 className="text-lg font-black text-foreground mb-3">Restvocht meten vóór parket of tegels</h2>
                <p className="text-sm text-muted-foreground mb-3">
                  Parket, pvc en tegels verdragen maar een beperkte hoeveelheid restvocht in de ondergrond.
                  Te vroeg leggen kan uitzetten, loskomen of schimmel onder de vloer geven.
                </p>
                <p className="text-sm text-muted-foreground">
                  De gangbare meting is de CM-meting (carbidmethode). De toegelaten waarde verschilt per
                  soort chape, per vloerbekleding en met of zonder vloerverwarming — vraag uw vloerlegger
                  naar de exacte grens die hij hanteert. Wij meten bij start en oplevering, zodat u het
                  verloop ziet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. PAKKET KEUZE */}
        <section id="calculator" className="py-14 md:py-20 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">
                Kies het juiste pakket voor uw situatie
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {DROGER_KAARTEN.map((pkg, i) => (
                <MachineCard
                  key={pkg.key}
                  name={pkg.name}
                  volume={pkg.volume}
                  desc={pkg.desc}
                  badge={pkg.badge}
                  highlight={pkg.highlight}
                  index={i}
                  pricingTiers={pkg.tiers}
                  ctaLabel="Dit toestel kiezen"
                />
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              Liever een volledig pakket op maat van uw oppervlakte en chapedikte?{" "}
              <Link to="/verhuur/calculator" className="font-semibold text-primary hover:underline">
                Bereken het in de calculator
              </Link>{" "}
              of{" "}
              <a href="tel:+3236899065" className="font-semibold text-primary hover:underline">
                bel ons voor gratis advies: 03 689 90 65
              </a>
            </p>
          </div>
        </section>

        {/* 7. HOW IT WORKS */}
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-10">
              Hoe verloopt het?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {steps.map((step, i) => (
                <Reveal
                  from="up"
                  delay={i * 0.08}
                  key={step.num}
                  className="relative bg-card border border-border rounded-2xl p-6 text-center"
                >
                  <div className="w-10 h-10 bg-accent text-primary-foreground rounded-full flex items-center justify-center text-lg font-black mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                  {i < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground/40 z-10" />
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 8. PRO TIPS */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-10">
              Tips voor optimaal drogen
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {tips.map((tip, i) => (
                <Reveal
                  from="up"
                  delay={i * 0.08}
                  key={tip.title}
                  className="bg-card border border-border rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl mb-3">{tip.emoji}</div>
                  <h3 className="font-bold text-foreground mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <VerderLezen titel="Verder lezen over chape en pleisterwerk drogen" groepen={verderLezen} />

        {/*
          9. FAQ — zichtbaar, niet ingeklapt. Dit was een Radix-accordeon, en
          die rendert de inhoud van een dichte vraag niet: in de geprerenderde
          HTML stonden alleen de vragen, terwijl de FAQ-schema de antwoorden
          beloofde. Zelfde patroon als op /prijzen.
        */}
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-10">
              Veelgestelde vragen over chape en pleisterwerk drogen
            </h2>
            <dl className="max-w-2xl mx-auto space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-card border border-border rounded-xl p-5">
                  <dt className="font-semibold text-foreground mb-2">{faq.q}</dt>
                  <dd className="text-sm text-muted-foreground leading-relaxed">{faq.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent py-14 md:py-20">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-black text-primary-foreground mb-3">
              Klaar om sneller te drogen?
            </h2>
            <p className="text-primary-foreground/70 mb-8">
              Kies uw pakket en wij leveren binnen 24 uur.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-bold gap-2 px-8"
                onClick={() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })}
              >
                Bereken mijn pakket <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full font-bold gap-2 px-8"
                asChild
              >
                <a href="tel:+3236899065"><Phone className="h-4 w-4" /> Bel voor advies</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <V3Footer />
    </div>
  );
};

export default NieuwbouwPage;

import PageMeta from "@/components/PageMeta";
import Navbar from "@/components/Navbar";
import V3Footer from "@/components/home-v3/V3Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import MachineCard from "@/components/MachineCard";
import {
  Phone,
  MessageCircle,
  Zap,
  Shield,
  PhoneCall,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/data/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { DROGER_KAARTEN, euro } from "@/data/tarieflijst";
import { EXTRAS } from "@/data/verhuur";
import { termijnLabel, termijnZonderDikte } from "@/lib/droogtijden";
import Reveal from "@/components/Reveal";
import VerderLezen, { type LeesGroep } from "@/components/VerderLezen";

/** De huurtermijn van het vaste waterschadepakket, uit de catalogus. */
const WATER_TERMIJN = termijnZonderDikte("waterschade");

/** Het ondertekende vochtrapport is een betalende optie, geen standaard. */
const RAPPORT = EXTRAS.find((x) => x.k === "rapport");
const RAPPORT_PRIJS = RAPPORT ? ` voor ${euro(RAPPORT.price)} excl. btw` : "";

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

const steps = [
  { num: "1", title: "Bel of WhatsApp ons", desc: "Beschrijf uw situatie, wij sturen direct de juiste machine." },
  { num: "2", title: "Wij leveren vandaag", desc: "Onze expert plaatst de bouwdroger en geeft uitleg." },
  { num: "3", title: "Bouwdroger doet zijn werk", desc: "Vocht verdwijnt, schimmel krijgt geen kans." },
  { num: "4", title: "Gratis vochtmeting", desc: "Na afloop meten wij of alles droog is." },
];

const warnings = [
  { icon: "🦠", title: "Schimmel begint na 24–48u", desc: "Eenmaal schimmel aanwezig zijn de kosten veel hoger." },
  { icon: "🏚️", title: "Structuurschade", desc: "Langdurig vocht beschadigt muren, vloeren en plafonds." },
  { icon: "💸", title: "Hogere kosten later", desc: "Wat droog is voor schimmel toeslaat, hoeft vaak niet uitgebroken te worden." },
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
    a: "Voor een gemiddelde kelder volstaat één TTK 350 S met een ventilator. Staat er water in meerdere ruimtes of is de ruimte koud, dan komt er een kachel bij. Onze calculator rekent het voor u uit.",
  },
  {
    q: "Kan ik drogen terwijl er nog water staat?",
    a: "Nee — pomp of zuig eerst het staande water weg. Een bouwdroger haalt vocht uit de lucht en uit materialen, niet uit een plas. Zodra de vloer waterloos is, plaatsen wij de toestellen.",
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
      { to: "/verhuur/toestel/ttk650", toestel: "ttk650", label: "Ontvochtiger TTK 650 S", sub: "Onze grootste condensdroger, voor acute schade." },
      { to: "/verhuur/toestel/radiaal2250", toestel: "radiaal2250", label: "Radiaalventilator voor natte vloeren", sub: "Spatwaterdicht, blaast vlak over de vloer." },
      { to: "/verhuur/toestel/ttv4500", toestel: "ttv4500", label: "Axiaalventilator TTV 4500", sub: "Houdt de hele ruimte in beweging." },
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

const WaterschadePage = () => {
  return (
    <div className="min-h-screen bg-background">
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
      <Navbar />
      <main>
        {/* 1. URGENCY HERO */}
        <section className="bg-[hsl(0,72%,51%)] text-white py-14 md:py-20">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <div>
              <Badge className="bg-white/20 text-white border-white/30 text-sm px-4 py-1.5 mb-6 inline-flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
                Spoedbezorging beschikbaar — bel nu
              </Badge>
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4"
            >
              Waterschade drogen met een bouwdroger
            </h1>

            <p
              className="text-lg md:text-xl text-white/85 mb-8 max-w-lg mx-auto"
            >
              Waterlek of overstroming? Wij leveren uw bouwdroger vandaag nog.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Button
                size="lg"
                className="bg-white text-[hsl(0,72%,51%)] hover:bg-white/90 rounded-full font-bold text-base gap-2 w-full sm:w-auto px-8"
                asChild
              >
                <a href="tel:+3236899065">
                  <Phone className="h-5 w-5" />
                  Bel direct: 03 689 90 65
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/40 text-white hover:bg-white/10 rounded-full font-bold text-base gap-2 w-full sm:w-auto px-8"
                asChild
              >
                <a href="https://wa.me/3236899065" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp ons
                </a>
              </Button>
            </div>
          </div>
        </section>


        {/* 2. TRUST ROW */}
        <section className="bg-background py-6 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { icon: Zap, text: "Levering zelfde dag" },
                { icon: Shield, text: "Factuur voor uw verzekeraar" },
                { icon: PhoneCall, text: "Altijd bereikbaar" },
                { icon: CheckCircle2, text: "Gratis vochtmeting" },
              ].map((item, i) => (
                <Reveal
                  from="up"
                  delay={i * 0.08}
                  key={item.text}
                  className="flex items-center gap-2.5 justify-center text-sm font-medium text-foreground"
                >
                  <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{item.text}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 3. DE EERSTE 48 UUR */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-4">
                Wat moet u doen in de eerste 48 uur?
              </h2>
              <p className="text-muted-foreground mb-8">
                Na een lek of overstroming trekt het water snel dieper: eerst in de chape en de onderkant van
                de muren, daarna in isolatie en pleisterwerk. Na een dag of twee krijgt schimmel kans op
                vochtig materiaal. Hoe sneller u het water weghaalt en begint te drogen, hoe minder er
                uitgebroken moet worden.
              </p>
              <ol className="space-y-4">
                {eersteUren.map((stap, i) => (
                  <li key={stap.title} className="flex gap-4 bg-card border border-border rounded-2xl p-5">
                    <span className="w-8 h-8 bg-[hsl(0,72%,51%)] text-white rounded-full flex items-center justify-center text-sm font-black flex-shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{stap.title}</h3>
                      <p className="text-sm text-muted-foreground">{stap.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 4. STAPPENPLAN — zo werken wij */}
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">Zo werken wij</h2>
              <p className="text-muted-foreground">Bel ons — wij regelen de toestellen.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {steps.map((step, i) => (
                <Reveal
                  from="up"
                  delay={i * 0.08}
                  key={step.num}
                  className="relative bg-card border border-border rounded-2xl p-6 text-center"
                >
                  <div className="w-10 h-10 bg-[hsl(0,72%,51%)] text-white rounded-full flex items-center justify-center text-lg font-black mx-auto mb-4">
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

        {/*
          5. VERZEKERING — voorzichtig geformuleerd. Hier stond "Uw verzekering
          betaalt dit" en "dekt in de meeste gevallen de volledige kost". Dat
          kunnen wij niet weten: het hangt af van de polis en de oorzaak, en een
          belofte die de verzekeraar daarna niet nakomt komt bij ons terug.
        */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4">
            <Reveal
              from="up"
              delay={(0) * 0.08}
              className="max-w-3xl mx-auto bg-[hsl(210,100%,96%)] border border-[hsl(210,80%,85%)] rounded-2xl p-8 md:p-10"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[hsl(210,80%,85%)] rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-[hsl(210,80%,45%)]" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-foreground mb-2">Waterschade en uw verzekering</h2>
                  <p className="text-muted-foreground mb-3">
                    Waterschade valt vaak onder de brandverzekering van de woning, maar of en hoeveel er vergoed
                    wordt, hangt af van uw polis en van de oorzaak. Vraag het uw verzekeraar of makelaar zo
                    vroeg mogelijk, liefst voor u grote kosten maakt.
                  </p>
                  <p className="text-muted-foreground mb-3">
                    Wat een verzekeraar doorgaans wil zien: een aangifte binnen de termijn uit uw polis, foto's
                    van de schade, de facturen van wat u liet doen, en dat u de schade beperkt hebt. Snel
                    drogen hoort bij dat laatste.
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    Van ons krijgt u een factuur op naam en de metingen bij start en oplevering. Een
                    ondertekend vochtrapport met alle meetwaarden kunt u bijnemen{RAPPORT_PRIJS}.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 6. WELKE DROGER + HOE LANG */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-black text-foreground mb-3">
                  Condensdroger of adsorptiedroger?
                </h2>
                <p className="text-sm text-muted-foreground mb-3">
                  De meeste waterschade droogt u met een <strong>condensontvochtiger</strong>: die zuigt de
                  vochtige lucht aan, koelt ze af zodat het water condenseert, en blaast droge lucht terug.
                  In een verwarmde woning werkt dat goed. Onder ongeveer 15 °C daalt het rendement sterk,
                  en dan zet u er een bouwkachel bij.
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  Een <strong>adsorptiedroger</strong> werkt met een vochtopnemend materiaal in plaats van
                  koude. Hij verliest in een koude kelder veel minder capaciteit, en hij kan droge lucht via
                  slangen gericht in een vloeropbouw, een wand of isolatie blazen, waar een gewone droger
                  niet bij komt.
                </p>
                <p className="text-sm text-muted-foreground">
                  Een <strong>ventilator</strong> hoort er bij waterschade altijd bij: zonder luchtbeweging
                  droogt vooral de lucht, niet de vloer en de muren.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-black text-foreground mb-3">
                  Hoe lang duurt drogen na waterschade?
                </h2>
                <p className="text-sm text-muted-foreground mb-3">
                  Dat hangt vooral af van hoe lang het water er stond en waar het in trok. Een natte
                  tegelvloer op beton droogt veel sneller dan water dat onder een zwevende chape in de
                  isolatie liep. Gipsplaat en pleister nemen snel water op, maar geven het ook redelijk vlot
                  weer af; beton en chape houden het lang vast.
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  {WATER_TERMIJN
                    ? `Ons vaste waterschadepakket rekent met een huurtermijn van ${termijnLabel(WATER_TERMIJN)}, zodat er ruimte is voor vocht dat diep in de constructie zit.`
                    : "Onze waterschadepakketten rekenen met een ruime huurtermijn, zodat er ruimte is voor vocht dat diep in de constructie zit."}{" "}
                  Of het werk af is, beslist de meting: wij meten bij de start en bij de oplevering, en
                  vergelijken met een droge plek in dezelfde woning.
                </p>
                <p className="text-sm text-muted-foreground">
                  Stop niet te vroeg omdat het oppervlak droog aanvoelt. Een vloer die bovenaan droog is,
                  kan onderaan nog nat zijn — en dat vocht komt later terug als vlekken of schimmel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. PAKKET SECTIE */}
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">Welke machine heeft u nodig?</h2>
              <p className="text-muted-foreground">
                Niet zeker? Bel ons — wij adviseren gratis — of{" "}
                <Link to="/verhuur/calculator" className="font-semibold text-primary hover:underline">
                  bereken uw waterschadepakket
                </Link>
                .
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {DROGER_KAARTEN.map((pkg, i) => (
                <MachineCard
                  key={pkg.key}
                  name={pkg.name}
                  volume={pkg.volume}
                  desc={pkg.desc}
                  price={pkg.weekPrice}
                  badge={pkg.badge}
                  highlight={pkg.highlight}
                  index={i}
                  ctaLabel="Reserveer nu"
                />
              ))}
            </div>
          </div>
        </section>

        {/* 6. WHY ACT FAST */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">Waarom moet u snel handelen?</h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {warnings.map((w, i) => (
                <Reveal
                  from="up"
                  delay={i * 0.08}
                  key={w.title}
                  className="bg-[hsl(0,100%,97%)] border border-[hsl(0,80%,90%)] rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl mb-3">{w.icon}</div>
                  <h3 className="font-bold text-foreground mb-2">{w.title}</h3>
                  <p className="text-sm text-muted-foreground">{w.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <VerderLezen titel="Verder lezen over waterschade drogen" groepen={verderLezen} />

        {/*
          FAQ — zichtbaar, niet ingeklapt. De Radix-accordeon die hier stond
          rendert de inhoud van een dichte vraag niet, dus in de geprerenderde
          HTML ontbraken alle antwoorden terwijl de FAQ-schema ze wel beloofde.
        */}
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-10">
              Veelgestelde vragen bij waterschade
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

        {/* CTA BANNER */}
        <section className="bg-accent py-14 md:py-20">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-black text-primary-foreground mb-3">
              Wacht niet langer
            </h2>
            <p className="text-primary-foreground/70 mb-8">
              Elke minuut telt bij waterschade. Bel ons nu en wij staan vandaag nog bij u.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-[hsl(0,72%,51%)] hover:bg-[hsl(0,72%,45%)] text-white rounded-full font-bold gap-2 px-8"
                asChild
              >
                <a href="tel:+3236899065"><Phone className="h-5 w-5" /> Bel direct</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full font-bold gap-2 px-8"
                asChild
              >
                <a href="https://wa.me/3236899065" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" /> WhatsApp ons
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* 8. STICKY MOBILE BAR */}
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] flex items-center justify-between lg:hidden z-50">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-[hsl(0,72%,51%)]" />
            <span className="text-sm font-bold text-foreground">Waterschade? Bel nu</span>
          </div>
          <div className="flex gap-2">
            <Button size="sm" className="rounded-full font-bold gap-1 bg-primary min-h-[44px] min-w-[44px]" asChild>
              <a href="tel:+3236899065"><Phone className="h-4 w-4" /></a>
            </Button>
            <Button size="sm" className="rounded-full font-bold gap-1 bg-[hsl(142,71%,45%)] hover:bg-[hsl(142,71%,38%)] text-white min-h-[44px] min-w-[44px]" asChild>
              <a href="https://wa.me/3236899065" target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" /></a>
            </Button>
          </div>
        </div>
      </main>
      <V3Footer />
    </div>
  );
};

export default WaterschadePage;

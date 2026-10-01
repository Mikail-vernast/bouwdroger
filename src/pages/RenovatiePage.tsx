import PageMeta from "@/components/PageMeta";
import Navbar from "@/components/Navbar";
import V3Footer from "@/components/home-v3/V3Footer";
import { Button } from "@/components/ui/button";
import MachineCard from "@/components/MachineCard";
import { Badge } from "@/components/ui/badge";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { SEO } from "@/data/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { DROGER_KAARTEN } from "@/data/tarieflijst";
import Reveal from "@/components/Reveal";
import VerderLezen, { type LeesGroep } from "@/components/VerderLezen";

/**
 * Waar vocht in een kelder of muur vandaan komt — en of een bouwdroger het
 * oplost. Dit is de kern van de pagina: wie "kelder drogen bouwdroger" zoekt,
 * moet weten dat een ontvochtiger opstijgend of doorslaand vocht niet stopt.
 * Een pagina die dat verzwijgt, verhuurt een toestel dat na de ophaling niets
 * heeft opgelost.
 */
const oorzaken = [
  {
    title: "Condensatie",
    helpt: true,
    desc: "Warme, vochtige lucht slaat neer op koude muren, vloeren en ramen. Typisch in kelders en slecht verluchte ruimtes, vooral in de winter. Een bouwdroger haalt de luchtvochtigheid omlaag; blijvend oplossen vraagt betere ventilatie of isolatie.",
  },
  {
    title: "Bouwvocht na renovatie",
    helpt: true,
    desc: "Nieuw pleisterwerk, chape of metselwerk brengt veel water mee in een ruimte die vaak slecht verlucht is. Dat is precies waarvoor een bouwdroger bedoeld is.",
  },
  {
    title: "Na een lek of waterschade",
    helpt: true,
    desc: "Is het lek hersteld, dan droogt een bouwdroger met ventilator de muren en de vloer weer uit. Zolang het lek blijft, blijft het vocht terugkomen.",
  },
  {
    title: "Opstijgend vocht",
    helpt: false,
    desc: "Grondwater dat via het metselwerk omhoog trekt: vochtplekken en zoutkorsten onderaan de muur, tot een meter hoog of meer. Een bouwdroger droogt de oppervlakte, maar het vocht blijft opstijgen zolang de muur niet behandeld wordt.",
  },
  {
    title: "Doorslaand vocht",
    helpt: false,
    desc: "Regen- of grondwater dat door een gevel of een keldermuur dringt, vaak zichtbaar na een regenperiode. Ook hier is drogen alleen tijdelijk: de muur of de kelderwand moet waterdicht gemaakt worden.",
  },
];

/** Zo pakt u een vochtige kelder aan, in deze volgorde. */
const kelderStappen = [
  {
    title: "Meet eerst",
    desc: "Een eenvoudige hygrometer toont de relatieve luchtvochtigheid en de temperatuur. Noteer ze een paar dagen, dan weet u waar u vertrekt.",
  },
  {
    title: "Zoek de oorzaak",
    desc: "Condensatie, een lek, of vocht van buitenaf? Zie de lijst hierboven. Bij opstijgend of doorslaand vocht laat u eerst de muur behandelen.",
  },
  {
    title: "Maak ruimte",
    desc: "Zet dozen, kasten en textiel weg van de muren. Achter een kast tegen een koude muur is het altijd het vochtigst.",
  },
  {
    title: "Plaats de droger",
    desc: "Centraal in de ruimte, deuren en kelderramen dicht. Met een condensslang naar een afvoer hoeft u geen reservoir te legen.",
  },
  {
    title: "Warm bij onder 15 °C",
    desc: "Een koude kelder droogt traag met een condensdroger. Een bouwkachel brengt de temperatuur op peil, of u kiest een adsorptiedroger.",
  },
  {
    title: "Houd het daarna droog",
    desc: "Is de ruimte droog, verlucht dan regelmatig en houd de luchtvochtigheid in het oog. Anders begint het na een paar maanden opnieuw.",
  },
];

const warnings = [
  { icon: "🦠", title: "Schimmelsporen in de lucht", desc: "Veroorzaakt luchtwegproblemen, hoofdpijn en allergie. Gevaarlijk voor kinderen en ouderen." },
  { icon: "🏚️", title: "Structuurschade aan uw woning", desc: "Vocht tast metselwerk, hout en isolatie aan." },
  { icon: "💸", title: "Dalende woningwaarde", desc: "Zichtbaar vocht verlaagt de verkoopwaarde aanzienlijk." },
];

const checklist = [
  "Muffe geur in kelder of berging",
  "Zichtbare vochtplekken op muren",
  "Schimmelvorming (zwarte of groene vlekken)",
  "Condensatie op ramen of muren",
  "Vocht na verbouwing of waterlek",
];

const tips = [
  { emoji: "🔍", title: "Vind de oorzaak", desc: "Een bouwdroger lost het symptoom op. Laat ook de oorzaak onderzoeken." },
  { emoji: "🌬️", title: "Ventileer dagelijks", desc: "Na het drogen: goede ventilatie voorkomt herhaling." },
  { emoji: "📋", title: "Gratis vochtmeting", desc: "Professioneel rapport na afloop." },
];

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
    a: "Condensatie zit vooral op de koudste plekken — hoeken, achter kasten, rond ramen — en verergert in de winter en bij weinig verluchting. Opstijgend vocht zie je onderaan de muur, vaak met zoutkorsten. Doorslaand vocht verschijnt na regen, aan de kant van de gevel of de grond. Twijfelt u, laat het dan ter plaatse bekijken.",
  },
  {
    q: "Haalt een bouwdroger schimmel weg?",
    a: "Nee. Drogen neemt de voedingsbodem weg, zodat schimmel niet verder groeit, maar de schimmel zelf moet u nog verwijderen. Bij grote oppervlakken of schimmel die terugkomt, is een professionele sanering de veilige keuze.",
  },
  { q: "Is een bouwdroger veilig bij kinderen en huisdieren?", a: "Ja, volledig veilig. Houd de wateropvang dagelijks in het oog." },
];

const verderLezen: LeesGroep[] = [
  {
    kop: "Kelders die we droogden",
    links: [
      { to: "/realisaties/mancave-brugge", label: "Kelder-mancave in Brugge weer droog en schimmelvrij" },
      { to: "/realisaties/dhr-d-c-antwerpen", label: "Muffe kelder met waterschade weer droog in Antwerpen" },
      { to: "/realisaties/levis", label: "Schimmel in een kelderopslag gesaneerd" },
    ],
  },
  {
    kop: "Toestellen voor kelders en vochtige ruimtes",
    links: [
      { to: "/verhuur/toestel/ttk170", toestel: "ttk170", label: "Ontvochtiger TTK 170 S", sub: "Compact, voor één kamer of een kleine kelder." },
      { to: "/verhuur/toestel/ttk650", toestel: "ttk650", label: "Ontvochtiger TTK 650 S", sub: "Voor ruime kelders en veel vocht." },
      { to: "/verhuur/toestel/teddh20", toestel: "teddh20", label: "Bouwkachel voor een koude kelder of garage", sub: "Brengt de ruimte op werkingstemperatuur." },
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

const RenovatiePage = () => {
  return (
    <div className="min-h-screen bg-background">
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
      <Navbar />
      <main>
        {/* 1. HERO */}
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
              <div>
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 text-sm px-4 py-1.5">
                  🔨 Renovatie & vochtige kelders
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground leading-tight mb-4">
                  Vochtige kelder of muren drogen met een bouwdroger
                </h1>
                <p className="text-muted-foreground text-lg mb-8 max-w-lg">
                  Vocht in uw woning is slecht voor uw gezondheid en voor het gebouw. Een bouwdroger haalt het
                  snel uit de lucht en de muren — en als er een blijvende oorzaak is, leest u hieronder hoe u
                  die aanpakt.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="rounded-full font-bold text-base gap-2 px-8"
                    onClick={() => document.getElementById("pakketten")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Bekijk onze pakketten <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full font-bold text-base gap-2 px-8" asChild>
                    <a href="tel:+3236899065"><Phone className="h-4 w-4" /> Bel voor gratis advies</a>
                  </Button>
                </div>
              </div>
              <div
                className="hidden lg:flex items-center justify-center"
              >
                {/* Zie /nieuwbouw: ook hier stond een ontwerpnotitie als zichtbare tekst. */}
                <img
                  src="/vernast/case-kelder.webp"
                  alt="Ontvochtiger in een vochtige kelder tijdens een renovatie"
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


        {/* 2. WARNING */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-10">Waarom is vocht gevaarlijk?</h2>
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

        {/* 3. DIAGNOSIS */}
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">Heeft u een bouwdroger nodig?</h2>
              <p className="text-muted-foreground mb-8">Check uw situatie:</p>
            </div>
            <Reveal
              from="up"
              delay={(0) * 0.08}
              className="max-w-lg mx-auto bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4"
            >
              {checklist.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium text-sm">{item}</span>
                </div>
              ))}
              <div className="border-t border-border pt-4 mt-4">
                <p className="text-sm text-muted-foreground mb-3">Herkent u één of meer situaties?</p>
                <Button className="rounded-full font-semibold gap-2" asChild>
                  <a href="tel:+3236899065"><Phone className="h-4 w-4" /> Bel ons voor gratis advies</a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 3b. OORZAAK VS SYMPTOOM */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-3">
                Een bouwdroger lost het symptoom op, niet altijd de oorzaak
              </h2>
              <p className="text-muted-foreground">
                Een bouwdroger haalt vocht uit de lucht en daarmee ook uit muren en vloeren. Komt dat vocht
                steeds opnieuw binnen, dan droogt u tegen de stroom in. Kijk daarom eerst waar het vandaan
                komt.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {oorzaken.map((o) => (
                <div key={o.title} className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="font-bold text-foreground mb-1">{o.title}</h3>
                  <p className={`text-xs font-semibold mb-3 ${o.helpt ? "text-[hsl(142,71%,35%)]" : "text-destructive"}`}>
                    {o.helpt ? "Een bouwdroger helpt" : "Eerst de oorzaak aanpakken"}
                  </p>
                  <p className="text-sm text-muted-foreground">{o.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto mt-8">
              Opstijgend vocht, een lekkende keldermuur of een kelder die waterdicht moet? Daarvoor kunt u
              terecht bij{" "}
              <a
                href="https://vernast-vochtbestrijding.be/"
                className="font-semibold text-primary hover:underline"
              >
                Vernast Vochtbestrijding
              </a>
              . Is de oorzaak weg, dan droogt een bouwdroger het restvocht uit de muur.
            </p>
          </div>
        </section>

        {/* 3c. LUCHTVOCHTIGHEID EN SCHIMMEL */}
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-black text-foreground mb-3">
                  Luchtvochtigheid: mik op 40 à 60 %
                </h2>
                <p className="text-sm text-muted-foreground mb-3">
                  De relatieve luchtvochtigheid zegt hoeveel vocht de lucht bevat tegenover wat ze bij die
                  temperatuur maximaal kan dragen. Als richtwaarde voor een woning geldt 40 tot 60 %. Blijft
                  ze langdurig hoger, dan krijgt schimmel kans, zeker op koude muren.
                </p>
                <p className="text-sm text-muted-foreground">
                  In een kelder speelt de temperatuur mee: koude lucht zit sneller verzadigd, en een koude
                  muur trekt het vocht naar zich toe. Daarom kan een kelder muf ruiken terwijl de rest van
                  het huis in orde is. Onze ontvochtigers hebben een ingebouwde hygrostaat: ze schakelen
                  terug zodra de ingestelde streefwaarde bereikt is.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-black text-foreground mb-3">
                  Schimmel: eerst drogen, dan saneren
                </h2>
                <p className="text-sm text-muted-foreground mb-3">
                  Schimmel heeft vocht nodig. Drogen neemt die voedingsbodem weg, zodat hij niet verder
                  groeit — maar de schimmel die er al zit, verdwijnt er niet mee. Die moet u na het drogen
                  verwijderen, en bij grote oppervlakken laat u dat beter professioneel doen.
                </p>
                <p className="text-sm text-muted-foreground">
                  Doe het in die volgorde. Saneren op een natte muur heeft weinig zin, want de schimmel
                  komt terug zolang het vocht blijft.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3d. KELDER STAPPENPLAN */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-8">
                Een vochtige kelder drogen: zo pakt u het aan
              </h2>
              <ol className="space-y-4">
                {kelderStappen.map((stap, i) => (
                  <li key={stap.title} className="flex gap-4 bg-card border border-border rounded-2xl p-5">
                    <span className="w-8 h-8 bg-accent text-primary-foreground rounded-full flex items-center justify-center text-sm font-black flex-shrink-0">
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

        {/* 4. PAKKETTEN */}
        <section id="pakketten" className="py-14 md:py-20 bg-muted/30 scroll-mt-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-10">Kies uw pakket</h2>
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

        {/* 5. LONG-TERM TIPS */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-10">Vocht voorgoed aanpakken</h2>
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


        <VerderLezen titel="Verder lezen over vochtige kelders" groepen={verderLezen} />

        {/*
          7. FAQ — zichtbaar, niet ingeklapt. De Radix-accordeon die hier
          stond rendert de inhoud van een dichte vraag niet, dus in de
          geprerenderde HTML ontbraken de antwoorden die de FAQ-schema beloofde.
        */}
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-10">Veelgestelde vragen</h2>
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
            <h2 className="text-2xl md:text-3xl font-black text-primary-foreground mb-3">Pak vocht nu aan</h2>
            <p className="text-primary-foreground/70 mb-8">Hoe langer u wacht, hoe groter de schade. Wij helpen u vandaag nog.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-bold gap-2 px-8"
                onClick={() => document.getElementById("pakketten")?.scrollIntoView({ behavior: "smooth" })}
              >
                Bekijk pakketten <ArrowRight className="h-4 w-4" />
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

export default RenovatiePage;

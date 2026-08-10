import PageMeta from "@/components/PageMeta";
import { enterInitial } from "@/lib/firstPaint";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import MachineCard from "@/components/MachineCard";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  ArrowRight,
  Star,
  CheckCircle2,
  XCircle,
  Zap,
  Truck,
  BarChart3,
  Thermometer,
  Wind,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SEO } from "@/data/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { DROGER_KAARTEN } from "@/data/tarieflijst";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};



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

const reviews = [
  { name: "Björn C.", text: "Chape begin mei gelegd, 6 weken later kurkvloer geplaatst. Chapeau!", rating: 5 },
  { name: "Pieter M.", text: "Als aannemer gebruik ik Vernast voor al mijn werven. Altijd stipt en professioneel.", rating: 5 },
];

const faqs = [
  { q: "Hoe lang moet mijn chape drogen voor ik kan vloeren?", a: "Met een bouwdroger gemiddeld 4 tot 8 weken. Onze vochtmeting bevestigt wanneer het klaar is." },
  { q: "Wat is de ideale luchtvochtigheid voor vloerders?", a: "Onder 2%. Onze vochtmeting geeft u dat bewijs." },
  { q: "Kan ik meerdere machines combineren?", a: "Ja, voor grote werven leveren wij meerdere machines. Bel voor een voorstel." },
  { q: "Hoe werkt de gratis vochtmeting?", a: "Na het drogen komt onze medewerker met professionele meetapparatuur. U ontvangt een rapport voor uw vloerder." },
];

const NieuwbouwPage = () => {
  const navigate = useNavigate();

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
            De vragen onderaan deze pagina, ook machineleesbaar. Ze stonden
            enkel zichtbaar op de pagina; daardoor kon een AI-antwoord er wel
            uit citeren, maar moest het de vraag-antwoordparen zelf uit de
            HTML afleiden. Zelfde tekst, dus schema en pagina blijven gelijk.
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
              <motion.div initial={enterInitial("hidden")} animate="visible" variants={fadeUp} custom={0}>
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 text-sm px-4 py-1.5">
                  🏗️ Nieuwbouw & verbouwing
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground leading-tight mb-4">
                  Chape gelegd? Droog 4× sneller en begin eerder met afwerken.
                </h1>
                <p className="text-muted-foreground text-lg mb-8 max-w-lg">
                  Een gemiddelde nieuwbouw bevat 1.500 liter vocht. Zonder bouwdroger duurt drogen 3 tot 5 jaar. Met ons: klaar in weken.
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
              </motion.div>

              <motion.div
                initial={enterInitial("hidden")} animate="visible" variants={fadeUp} custom={2}
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
              </motion.div>
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
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={0}
                className="bg-[hsl(0,100%,97%)] border border-[hsl(0,80%,90%)] rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-center gap-2 mb-5">
                  <XCircle className="h-6 w-6 text-destructive" />
                  <h3 className="text-lg font-black text-destructive">Zonder bouwdroger</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "3 tot 5 jaar naturel drogen",
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
              </motion.div>

              {/* With */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={1}
                className="bg-[hsl(142,76%,96%)] border border-[hsl(142,60%,80%)] rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-center gap-2 mb-5">
                  <CheckCircle2 className="h-6 w-6 text-[hsl(142,71%,35%)]" />
                  <h3 className="text-lg font-black text-[hsl(142,71%,35%)]">Met Vernast bouwdroger</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Droog in 4 tot 8 weken",
                    "Vloerder kan sneller beginnen",
                    "Geen schimmel, geen vochtproblemen",
                    "Gratis vochtmeting als bewijs voor vloerder",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(142,71%,35%)] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. PAKKET KEUZE */}
        <section id="calculator" className="py-14 md:py-20 bg-muted/30 scroll-mt-20">
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
              Niet zeker welk pakket? 👉{" "}
              <a href="tel:+3236899065" className="font-semibold text-primary hover:underline">
                Bel ons voor gratis advies: 03 689 90 65
              </a>
            </p>
          </div>
        </section>

        {/* 4. HOW IT WORKS */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-10">
              Hoe verloopt het?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp} custom={i}
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. PRO TIPS */}
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-10">
              Tips voor optimaal drogen
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {tips.map((tip, i) => (
                <motion.div
                  key={tip.title}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp} custom={i}
                  className="bg-card border border-border rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl mb-3">{tip.emoji}</div>
                  <h3 className="font-bold text-foreground mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. REVIEWS */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg font-bold text-foreground">Wat zeggen onze klanten?</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {reviews.map((r, i) => (
                <motion.div
                  key={r.name}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp} custom={i}
                  className="bg-card border border-border rounded-2xl p-6"
                >
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 italic">"{r.text}"</p>
                  <p className="text-foreground font-semibold text-sm">{r.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. FAQ */}
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-10">
              Veelgestelde vragen
            </h2>
            <div className="max-w-2xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-5">
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
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
      <Footer />
    </div>
  );
};

export default NieuwbouwPage;

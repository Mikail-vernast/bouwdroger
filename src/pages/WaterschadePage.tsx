import PageMeta from "@/components/PageMeta";
import { enterInitial } from "@/lib/firstPaint";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  Star,
  AlertTriangle,
  ArrowRight,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SEO } from "@/data/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DROGER_KAARTEN } from "@/data/tarieflijst";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};



const steps = [
  { num: "1", title: "Bel of WhatsApp ons", desc: "Beschrijf uw situatie, wij sturen direct de juiste machine." },
  { num: "2", title: "Wij leveren vandaag", desc: "Onze expert plaatst de bouwdroger en geeft uitleg." },
  { num: "3", title: "Bouwdroger doet zijn werk", desc: "Vocht verdwijnt, schimmel krijgt geen kans." },
  { num: "4", title: "Gratis vochtmeting", desc: "Na afloop meten wij of alles droog is." },
];

const warnings = [
  { icon: "🦠", title: "Schimmel begint na 24–48u", desc: "Eenmaal schimmel aanwezig zijn de kosten veel hoger." },
  { icon: "🏚️", title: "Structuurschade", desc: "Langdurig vocht beschadigt muren, vloeren en plafonds." },
  { icon: "💸", title: "Hogere kosten later", desc: "Snel drogen bespaart tot 60% op herstelkosten." },
];

const reviews = [
  { name: "Marc D.", text: "Kelder ondergelopen na storm. Binnen 4 uur was de bouwdroger geplaatst. Perfecte service!", rating: 5 },
  { name: "An V.", text: "Gratis vochtmeting na afloop gaf ons zekerheid. Verzekering regelde de rest.", rating: 5 },
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
    a: "Meestal 1 tot 3 weken, afhankelijk van hoeveel water er stond en of het onder de vloer of in de isolatie zit. Onze vochtmeting bevestigt wanneer het effectief droog is — u huurt dus niet langer dan nodig.",
  },
  {
    q: "Betaalt mijn verzekering de huur van een bouwdroger?",
    a: "Bij een gedekt schadegeval nemen brandverzekeraars de droogkosten doorgaans op in het dossier. U krijgt van ons een factuur op naam en de vochtmetingen voor en na, zodat uw expert de droging kan staven.",
  },
  {
    q: "Hoeveel toestellen heb ik nodig bij een ondergelopen kelder?",
    a: "Voor een gemiddelde kelder volstaat één TTK 350 S met een ventilator. Staat er water in meerdere ruimtes of is de ruimte koud, dan komt er een kachel bij. Onze calculator rekent het voor u uit.",
  },
  {
    q: "Kan ik drogen terwijl er nog water staat?",
    a: "Nee — pomp of zuig eerst het staande water weg. Een bouwdroger haalt vocht uit de lucht en uit materialen, niet uit een plas. Zodra de vloer waterloos is, plaatsen wij de toestellen.",
  },
];

const WaterschadePage = () => {
  const navigate = useNavigate();

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
            <motion.div initial={enterInitial("hidden")} animate="visible" variants={fadeUp} custom={0}>
              <Badge className="bg-white/20 text-white border-white/30 text-sm px-4 py-1.5 mb-6 inline-flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
                Spoedbezorging beschikbaar — bel nu
              </Badge>
            </motion.div>

            <motion.h1
              initial={enterInitial("hidden")} animate="visible" variants={fadeUp} custom={1}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4"
            >
              Waterschade of overstroming?
            </motion.h1>

            <motion.p
              initial={enterInitial("hidden")} animate="visible" variants={fadeUp} custom={2}
              className="text-lg md:text-xl text-white/85 mb-8 max-w-lg mx-auto"
            >
              Wij leveren uw bouwdroger vandaag nog.
            </motion.p>

            <motion.div
              initial={enterInitial("hidden")} animate="visible" variants={fadeUp} custom={3}
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
            </motion.div>
          </div>
        </section>

        {/* 2. TRUST ROW */}
        <section className="bg-background py-6 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { icon: Zap, text: "Levering zelfde dag" },
                { icon: Shield, text: "Verzekering dekt dit" },
                { icon: PhoneCall, text: "Altijd bereikbaar" },
                { icon: CheckCircle2, text: "Gratis vochtmeting" },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp} custom={i}
                  className="flex items-center gap-2.5 justify-center text-sm font-medium text-foreground"
                >
                  <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. STAPPENPLAN */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">Wat moet u nu doen?</h2>
              <p className="text-muted-foreground">Volg deze stappen — wij regelen de rest.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp} custom={i}
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. VERZEKERING INFO */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={0}
              className="max-w-3xl mx-auto bg-[hsl(210,100%,96%)] border border-[hsl(210,80%,85%)] rounded-2xl p-8 md:p-10"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[hsl(210,80%,85%)] rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-[hsl(210,80%,45%)]" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-foreground mb-2">Uw verzekering betaalt dit</h3>
                  <p className="text-muted-foreground mb-3">
                    Bij waterschade en overstromingen dekt uw brandverzekering in de meeste gevallen de volledige kost van de bouwdroger.
                    Vraag aan uw makelaar of neem onze factuur mee als bewijs.
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    Wij maken een duidelijke factuur op voor uw dossier.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 5. PAKKET SECTIE */}
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">Welke machine heeft u nodig?</h2>
              <p className="text-muted-foreground">Niet zeker? Bel ons — wij adviseren gratis.</p>
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
                <motion.div
                  key={w.title}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp} custom={i}
                  className="bg-[hsl(0,100%,97%)] border border-[hsl(0,80%,90%)] rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl mb-3">{w.icon}</div>
                  <h3 className="font-bold text-foreground mb-2">{w.title}</h3>
                  <p className="text-sm text-muted-foreground">{w.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. REVIEWS */}
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg font-bold text-foreground">Beoordeeld met 4.9/5 sterren</p>
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

        {/* FAQ */}
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-10">
              Veelgestelde vragen bij waterschade
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
      <Footer />
    </div>
  );
};

export default WaterschadePage;

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
  Zap,
  Search,
  Wind,
  ClipboardList,
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

const reviews = [
  { name: "Luc B.", text: "Vochtige kelder gedurende jaren. Na 3 weken: kurkdroog. Aanrader!", rating: 5 },
  { name: "Hilde V.", text: "Vriendelijk en professioneel. Gaven ook advies over de oorzaak. Topservice.", rating: 5 },
];

const faqs = [
  { q: "Hoe lang duurt het drogen van een vochtige kelder?", a: "Afhankelijk van de situatie 2 tot 6 weken. Onze vochtmeting bevestigt wanneer het klaar is." },
  { q: "Werkt een bouwdroger bij condensatieproblemen?", a: "Ja, zeker in combinatie met goede ventilatie." },
  { q: "Is een bouwdroger veilig bij kinderen en huisdieren?", a: "Ja, volledig veilig. Houd de wateropvang dagelijks in het oog." },
];

const RenovatiePage = () => {
  const navigate = useNavigate();

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
              <motion.div initial={enterInitial("hidden")} animate="visible" variants={fadeUp} custom={0}>
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 text-sm px-4 py-1.5">
                  🔨 Renovatie & vochtige kelders
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground leading-tight mb-4">
                  Vochtige muren of schimmel? Pak het definitief aan.
                </h1>
                <p className="text-muted-foreground text-lg mb-8 max-w-lg">
                  Vocht in uw woning is gevaarlijk voor uw gezondheid en structuur. Een bouwdroger lost het snel op.
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
              </motion.div>
              <motion.div initial={enterInitial("hidden")} animate="visible" variants={fadeUp} custom={2} className="hidden lg:flex items-center justify-center">
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. WARNING */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-10">Waarom is vocht gevaarlijk?</h2>
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

        {/* 3. DIAGNOSIS */}
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">Heeft u een bouwdroger nodig?</h2>
              <p className="text-muted-foreground mb-8">Check uw situatie:</p>
            </div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={0}
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
            </motion.div>
          </div>
        </section>

        {/* 4. PAKKETTEN */}
        <section id="pakketten" className="py-14 md:py-20 scroll-mt-20">
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
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-10">Vocht voorgoed aanpakken</h2>
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
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-10">Veelgestelde vragen</h2>
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
      <Footer />
    </div>
  );
};

export default RenovatiePage;

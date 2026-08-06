import PageMeta from "@/components/PageMeta";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  Wrench,
  PhoneCall,
  ClipboardList,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SEO } from "@/data/seo";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const pricingRows = [
  { machine: "DF 200", w1: "XX", w2: "XX", w4: "XX" },
  { machine: "DF 400", w1: "XX", w2: "XX", w4: "XX" },
  { machine: "DF 800", w1: "XX", w2: "XX", w4: "XX" },
];

const included = [
  "Levering aan huis door expert",
  "Ophaling na gebruik",
  "Gratis verlengsnoer 10m 2.5mm²",
  "Uitleg bij plaatsing",
  "Gratis vochtmeting na afloop",
  "Geen waarborg vereist",
];

const extras = [
  { name: "Ventilator", price: "XX", unit: "/week" },
  { name: "Elektrische kachel", price: "XX", unit: "/week" },
  { name: "Spoedlevering zelfde dag", price: "XX", unit: " supplement" },
];

const guarantees = [
  { emoji: "🔧", title: "Toestel defect?", desc: "Wij vervangen de volgende dag. Geen discussie." },
  { emoji: "📞", title: "Altijd bereikbaar", desc: "Weekdagen, weekend en feestdagen." },
  { emoji: "📋", title: "Duidelijke factuur", desc: "Voor uw verzekeringsdossier." },
];

const PrijzenPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        {...SEO.prijzen}
        jsonLd={[
          serviceSchema({
            name: "Verhuur van bouwdrogers, ventilatoren en bouwkachels",
            description:
              "Een dagprijs per toestel, zonder waarborg en zonder verborgen kosten, met korting bij langere huurperiodes. Levering, installatie en vochtmeting inbegrepen.",
            path: "/prijzen",
            serviceType: "Verhuur bouwdrogers",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Prijzen", path: "/prijzen" },
          ]),
        ]}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4">
              Transparante prijzen — geen verrassingen
            </motion.h1>
            <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1} className="text-muted-foreground text-lg">
              Geen waarborg. Geen verborgen kosten. Wat u ziet is wat u betaalt.
            </motion.p>
          </div>
        </section>

        {/* Pricing table */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  {/* Header */}
                  <div className="grid grid-cols-4 bg-accent text-primary-foreground font-bold text-sm">
                    <div className="px-5 py-4">Machine</div>
                    <div className="px-5 py-4 text-center">1 week</div>
                    <div className="px-5 py-4 text-center">2 weken</div>
                    <div className="px-5 py-4 text-center">4 weken</div>
                  </div>
                  {/* Rows */}
                  {pricingRows.map((row, i) => (
                    <div key={row.machine} className={`grid grid-cols-4 text-sm ${i % 2 === 0 ? "bg-background" : "bg-muted/30"} ${i < pricingRows.length - 1 ? "border-b border-border" : ""}`}>
                      <div className="px-5 py-4 font-bold text-foreground">{row.machine}</div>
                      <div className="px-5 py-4 text-center text-foreground">€{row.w1}</div>
                      <div className="px-5 py-4 text-center text-foreground">€{row.w2}</div>
                      <div className="px-5 py-4 text-center font-bold text-foreground">€{row.w4}</div>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Prijzen excl. BTW — 21% BTW van toepassing
                </p>

                <div className="flex justify-center mt-4">
                  <Badge variant="secondary" className="text-sm px-4 py-1.5 gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Gratis levering & ophaling bij huur van 4 weken of meer
                  </Badge>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Included */}
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-10">Altijd inbegrepen</h2>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {included.map((item, i) => (
                <motion.div
                  key={item}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp} custom={i}
                  className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Extra options */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-10">Extra opties (tegen meerprijs)</h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-card border border-border rounded-2xl divide-y divide-border">
                {extras.map((extra) => (
                  <div key={extra.name} className="flex items-center justify-between px-6 py-4">
                    <span className="font-medium text-foreground">{extra.name}</span>
                    <span className="font-bold text-foreground">€{extra.price}<span className="text-sm font-normal text-muted-foreground">{extra.unit}</span></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Guarantees */}
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {guarantees.map((g, i) => (
                <motion.div
                  key={g.title}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp} custom={i}
                  className="bg-card border border-border rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl mb-3">{g.emoji}</div>
                  <h3 className="font-bold text-foreground mb-2">{g.title}</h3>
                  <p className="text-sm text-muted-foreground">{g.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent py-14 md:py-20">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-black text-primary-foreground mb-3">Klaar om te reserveren?</h2>
            <p className="text-primary-foreground/70 mb-8">Geen waarborg, geen verborgen kosten. Wij leveren binnen 24 uur.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-bold gap-2 px-8" onClick={() => navigate("/reserveren")}>
                Reserveer nu <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full font-bold gap-2 px-8" asChild>
                <a href="tel:+3236899065"><Phone className="h-4 w-4" /> Bel ons</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrijzenPage;

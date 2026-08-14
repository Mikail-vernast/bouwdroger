import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DeliveryWizard from "@/components/DeliveryWizard";
import { CheckCircle2, MapPin, Truck, Clock, Shield, Phone, Star, ArrowRight, Zap, ThumbsUp, Monitor, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import technicianImg from "@/assets/technician.png";
import PageMeta from "@/components/PageMeta";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { SEO } from "@/data/seo";
import Reveal from "@/components/Reveal";

const benefits = [
  { icon: Truck, title: "Gratis levering & ophaling", desc: "Vanaf 2 weken huurperiode, in heel België" },
  { icon: Shield, title: "Installatie door techniekers", desc: "Onze experts plaatsen alles op locatie" },
  { icon: Zap, title: "Gratis vochtmeting", desc: "Bij levering én ophaling inbegrepen" },
  { icon: Clock, title: "Levering binnen 24 uur", desc: "Meestal volgende werkdag bij u" },
  { icon: ThumbsUp, title: "Vaste all-in prijzen", desc: "Geen verrassingen of extra kosten" },
  /*
    Hier stond "Beoordeeld met 4.9/5 sterren" — een vierde cijfer naast de 4,8
    in de hero en de 412 in de schema, en geen van drieën van een bron te
    voorzien. Vervangen door de garantie, want die staat in onze eigen
    voorwaarden en is dus wél hard te maken. Zie `REVIEWS` in src/lib/site.ts.
  */
  { icon: Star, title: "100% droog-garantie", desc: "Of u huurt kosteloos verder" },
];

const processSteps = [
  { step: "01", icon: Monitor, title: "Configureer online", desc: "Kies uw woningtype en oppervlakte. Ons systeem stelt direct het juiste pakket samen." },
  { step: "02", icon: FileText, title: "Ontvang uw offerte", desc: "Bekijk uw pakket met alle apparatuur, prijs en specificaties. Boek direct of vraag advies." },
  { step: "03", icon: Truck, title: "Levering & installatie", desc: "Onze techniekers komen langs, plaatsen alles en doen een vochtmeting ter plaatse." },
  { step: "04", icon: CheckCircle2, title: "Ophaling & eindmeting", desc: "Na de huurperiode halen wij alles op en doen een eindmeting. Klaar!" },
];

const stats = [
  { value: "500+", label: "Projecten" },
  { value: "24u", label: "Levertijd" },
  { value: "4.9★", label: "Beoordeling" },
  { value: "100%", label: "All-in prijs" },
];

const LeveringPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        {...SEO.levering}
        jsonLd={[
          serviceSchema({
            name: "Bouwdroger leveren en installeren",
            description:
              "Levering van het droogpakket op de werf binnen 24 uur, plaatsing van elk toestel, aansluiting van de condensafvoer en ophaling zodra de ruimte droog is.",
            path: "/levering",
            serviceType: "Levering en installatie",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Levering", path: "/levering" },
          ]),
        ]}
      />
      <Navbar />
      <main>
        {/* Hero with technician */}
        <section className="relative bg-accent overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-end min-h-[500px] md:min-h-[600px]">
              {/* Left: text content */}
              <div className="py-16 md:py-24 lg:py-32 relative z-10">
                <div>
                  <span className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
                    <Truck className="h-3.5 w-3.5" />
                    Levering in heel België
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-[1.05] mb-5">
                    Wij leveren.<br />
                    Wij installeren.<br />
                    <span className="text-primary-foreground/60">U droogt.</span>
                  </h1>
                  <p className="text-primary-foreground/60 text-lg md:text-xl max-w-lg mb-8">
                    Configureer uw droogpakket in 2 minuten. Wij regelen de rest — levering, installatie en ophaling inbegrepen.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      size="lg"
                      className="bg-primary-foreground text-accent hover:bg-primary-foreground/90 rounded-full px-8 font-bold h-13 text-base gap-2"
                      onClick={() => document.getElementById('wizard')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Start Configuratie <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 font-bold h-13 text-base gap-2"
                      onClick={() => navigate("/contact")}
                    >
                      <Phone className="h-4 w-4" /> Bel Ons
                    </Button>
                  </div>

                  {/* Stats bar */}
                  <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-primary-foreground/10">
                    {stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-2xl md:text-3xl font-black text-primary-foreground">{stat.value}</div>
                        <div className="text-xs text-primary-foreground/40 font-medium uppercase tracking-wider">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: technician image */}
              <div className="relative hidden lg:flex items-end justify-center">
                <img
                  src={technicianImg}
                  alt="Vernast technieker"
                  className="h-[520px] object-contain object-bottom relative z-10"
                />
                {/* Decorative circle behind technician */}
                <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl" />
                
                {/* Floating product cards */}
                <div
                  className="absolute top-20 -left-4 bg-background/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl z-20"
                >
                  <div className="flex items-center gap-3">
                    <img src="/products/dim-eco-boost.webp" alt="Bouwdroger" className="w-12 h-12 object-contain" loading="lazy" decoding="async" />
                    <div>
                      <p className="text-xs font-bold text-foreground">ECO Boost 50L</p>
                      <p className="text-[10px] text-muted-foreground">Professionele bouwdroger</p>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute top-52 -right-4 bg-background/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl z-20"
                >
                  <div className="flex items-center gap-3">
                    <img src="/products/dim-axiaal-ventilator.webp" alt="Ventilator" className="w-12 h-12 object-contain" loading="lazy" decoding="async" />
                    <div>
                      <p className="text-xs font-bold text-foreground">Axiaal Ventilator</p>
                      <p className="text-[10px] text-muted-foreground">4.500 m³/u luchtdebiet</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom wave/curve */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 60L1440 60L1440 30C1440 30 1200 0 720 0C240 0 0 30 0 30L0 60Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Wizard */}
        <section id="wizard" className="scroll-mt-20">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="text-center mb-8">
              <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                Configurator
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
                Stel uw droogpakket samen
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Beantwoord een paar vragen en ontvang direct het perfecte pakket voor uw project.
              </p>
            </div>
          </div>
          <DeliveryWizard />
        </section>

        {/* How it works - Icon Timeline */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                Hoe het werkt
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
                Van configuratie tot droog resultaat
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                In 4 eenvoudige stappen regelen wij alles voor u.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto relative">
              {/* Connecting line (desktop) */}
              <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20" />

              {processSteps.map((item, i) => {
                const StepIcon = item.icon;
                return (
                  <Reveal
                    from="up"
                    delay={i * 0.12}
                    key={item.step}
                    className="relative text-center group"
                  >
                    {/* Step number + icon circle */}
                    <div className="relative mx-auto mb-5">
                      <div className="w-20 h-20 mx-auto rounded-2xl bg-card border-2 border-border group-hover:border-accent shadow-sm group-hover:shadow-lg flex items-center justify-center transition-all duration-300 relative z-10">
                        <StepIcon className="h-8 w-8 text-accent" />
                      </div>
                      <span className="absolute -top-3 -right-3 w-8 h-8 bg-accent text-primary-foreground rounded-full flex items-center justify-center text-xs font-black z-20 shadow-md">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits grid */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                Voordelen
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
                Waarom kiezen voor levering?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <Reveal
                    from="up"
                    delay={i * 0.08}
                    key={b.title}
                    className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-6 w-6 text-accent group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-bold text-foreground mb-1">{b.title}</h3>
                    <p className="text-sm text-muted-foreground">{b.desc}</p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Products showcase strip */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                Apparatuur
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
                Professionele machines, direct geleverd
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Alle apparatuur is professioneel onderhouden en klaar voor gebruik.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { name: "ECO Boost 50L", desc: "Bouwdroger", image: "/products/dim-eco-boost.webp" },
                { name: "ECO Performance 80L", desc: "Bouwdroger", image: "/products/dim-eco-performance.webp" },
                { name: "Axiaal Ventilator", desc: "4.500 m³/u", image: "/products/dim-axiaal-ventilator.webp" },
                { name: "Elektrische Kachel", desc: "2.500W", image: "/products/dim-elektrische-kachel.webp" },
              ].map((product, i) => (
                <Reveal
                  from="up"
                  delay={i * 0.1}
                  key={product.name}
                  className="bg-card rounded-2xl p-6 border border-border text-center group hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="aspect-square flex items-center justify-center mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-bold text-foreground text-sm">{product.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{product.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery area + CTA */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img src="/products/chape-drogen-3.webp" alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-accent/90" />
          </div>
          <div className="relative container mx-auto px-4 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <MapPin className="h-10 w-10 text-primary-foreground/60 mb-4" />
                <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4">
                  Leveringsgebied
                </h2>
                <p className="text-primary-foreground/70 text-lg mb-6">
                  Wij leveren in heel België. Voor projecten in Nederland of Luxemburg, neem contact op voor een offerte op maat.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Levering meestal binnen 24-48 uur na bevestiging",
                    "Gratis levering & ophaling vanaf 2 weken",
                    "Weekend- en avondlevering mogelijk op aanvraag",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary-foreground/60 flex-shrink-0" />
                      <span className="text-primary-foreground/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Button
                  size="lg"
                  className="bg-primary-foreground text-accent hover:bg-primary-foreground/90 rounded-full px-8 font-bold gap-2"
                  onClick={() => document.getElementById('wizard')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start Configuratie <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <Reveal
                  from="scale"
                  className="bg-primary-foreground/10 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-primary-foreground/10 max-w-sm w-full"
                >
                  <Phone className="h-8 w-8 text-primary-foreground mb-4" />
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">Liever persoonlijk advies?</h3>
                  <p className="text-primary-foreground/60 text-sm mb-6">
                    Bel ons voor een vrijblijvend gesprek. Wij helpen u graag het juiste pakket te kiezen.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full font-bold gap-2"
                    onClick={() => navigate("/contact")}
                  >
                    <Phone className="h-4 w-4" /> Neem Contact Op
                  </Button>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LeveringPage;

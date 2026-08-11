import PageMeta from "@/components/PageMeta";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { products } from "@/data/products";
import machinesHero from "@/assets/machines-hero.png";
import { SEO } from "@/data/seo";
import { enterInitial } from "@/lib/firstPaint";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

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
            products.map((p) => ({ name: p.name, path: `/product/${p.id}` }))
          ),
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
            alt=""
            className="w-full h-auto block"
            width={1400}
            height={742}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0">
            <div className="container mx-auto px-4 h-full flex items-center justify-end">
              <motion.div
                initial={enterInitial({ opacity: 0, y: 20 })}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-lg py-8 text-right"
              >
                <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/15 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-5">
                  Ons productgamma
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                  Professioneel materiaal
                  <br />
                  voor elke situatie
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
              </motion.div>
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
                <motion.div
                  key={product.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
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
                      alt={product.name}
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
                      <Link to={`/product/${product.id}`}>Bekijk details</Link>
                    </Button>
                  </div>
                </motion.div>
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
                    <motion.div
                      key={isFromData ? product.id : product.name}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      custom={i}
                      className="bg-background rounded-2xl border border-border p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                    >
                      {isFromData && product.image && (
                        <div className="bg-secondary rounded-xl p-3 mb-4 flex items-center justify-center">
                          <img
                            src={product.image}
                            alt={product.name}
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
                    </motion.div>
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
                    <motion.div
                      key={isFromData ? product.id : product.name}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      custom={i}
                      className="bg-secondary rounded-2xl border border-border p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                    >
                      {isFromData && product.image && (
                        <div className="bg-white rounded-xl p-3 mb-4 flex items-center justify-center">
                          <img
                            src={product.image}
                            alt={product.name}
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
                    </motion.div>
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
                  <motion.div
                    key={product.name}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i}
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
                  </motion.div>
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
                <motion.div
                  key={a.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
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
                </motion.div>
              ))}
            </div>
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
      <Footer />
    </div>
  );
};

export default MachinesPage;

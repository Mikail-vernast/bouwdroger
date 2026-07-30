import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ProductCatalog from "@/components/ProductCatalog";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Package, CheckCircle2, Car } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const steps = [
  { icon: Package, title: "1. Reserveer online", desc: "Kies je apparatuur en reserveer online. Je ontvangt direct een bevestiging." },
  { icon: Car, title: "2. Kom afhalen", desc: "Rij naar ons magazijn op het afgesproken tijdstip. Wij laden alles in." },
  { icon: CheckCircle2, title: "3. Uitleg op locatie", desc: "Onze techniekers geven je een korte uitleg over de bediening en optimale opstelling." },
];

const AfhalenPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          badge="Zelf afhalen"
          title="Flexibel afhalen aan ons magazijn"
          subtitle="Liever zelf langskomen? Reserveer online en haal je apparatuur af in ons magazijn. Onze techniekers staan klaar om alles uit te leggen."
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary-foreground text-accent hover:bg-primary-foreground/90 font-semibold rounded-full px-7"
              onClick={() => navigate("/calculator")}
            >
              Reserveer Nu
            </Button>
          </div>
        </PageHero>

        {/* Steps */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                Hoe afhalen werkt
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-foreground">Eenvoudig in 3 stappen</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-sm border border-border text-center"
                >
                  <div className="w-14 h-14 mx-auto bg-accent rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Location info */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                  Locatie
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">
                  Ons magazijn
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Adres</p>
                      <p className="text-muted-foreground">Boomsesteenweg 12/Unit 11, 2630 Aartselaar</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Openingsuren voor afhaling</p>
                      <div className="text-sm text-muted-foreground space-y-1 mt-1">
                        <p>Maandag - Vrijdag: 08:00 - 17:00</p>
                        <p>Zaterdag: 09:00 - 12:00</p>
                        <p>Zondag: Gesloten</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-accent rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
                <div className="text-center text-primary-foreground/50 p-8">
                  <MapPin className="h-12 w-12 mx-auto mb-3 opacity-40" />
                  <p className="text-sm">Kaart beschikbaar binnenkort</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Catalog */}
        <ProductCatalog />

        {/* Advantages */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { title: "Geen leveringskosten", desc: "Bespaar op transport door zelf af te halen." },
                { title: "Direct beschikbaar", desc: "Reserveer vandaag, haal morgen af." },
                { title: "Persoonlijk advies", desc: "Krijg uitleg van onze techniekers ter plaatse." },
              ].map((item) => (
                <div key={item.title} className="bg-card rounded-2xl p-6 shadow-sm border border-border text-center">
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AfhalenPage;

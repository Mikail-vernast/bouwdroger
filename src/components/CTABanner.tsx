import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="relative py-16 md:py-20 bg-accent text-primary-foreground overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-primary/20" />
        <div className="absolute -bottom-16 -left-16 w-[250px] h-[250px] rounded-full bg-primary/15" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Klaar om te starten?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
            Bereken in 30 seconden wat jouw bouwdroging kost. Eerlijke prijs, alles inbegrepen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-background text-foreground hover:bg-background/90 font-bold text-base rounded-full px-10"
            >
              <a href="/#configurator">
                Bereken je prijs
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-bold text-base rounded-full px-10"
            >
              <a href="tel:+32123456789">
                <Phone className="mr-2 h-4 w-4" />
                Bel ons: +32 (0)3 123 45 67
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;

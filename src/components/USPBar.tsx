import { Truck, Droplets, Percent, HeadphonesIcon } from "lucide-react";
import { motion } from "framer-motion";

const usps = [
  {
    icon: Truck,
    title: "Gratis levering & ophaling",
    description: "Vanaf 2 weken huurperiode",
  },
  {
    icon: Droplets,
    title: "Gratis vochtmeting",
    description: "Bij levering op locatie",
  },
  {
    icon: Percent,
    title: "Korting langere huur",
    description: "Scherpe tarieven bij langere periodes",
  },
  {
    icon: HeadphonesIcon,
    title: "Professioneel advies",
    description: "Advies op maat voor elk project",
  },
];

const USPBar = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((usp, index) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-5 bg-background rounded-xl shadow-sm border border-border"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <usp.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm">{usp.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{usp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPBar;

import { Users, Award, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Users, value: "500+", label: "Tevreden klanten" },
  { icon: Award, value: "15+", label: "Jaren ervaring" },
  { icon: Wrench, value: "50+", label: "Machines beschikbaar" },
];

const WhyVernast = () => {
  return (
    <section id="waarom" className="relative py-16 md:py-24 bg-accent text-primary-foreground overflow-hidden">
      {/* Diagonal shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/20" />
        <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full bg-primary/15" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Waarom Vernast?
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Vernast is uw betrouwbare partner voor professionele vochtbestrijding.
            Met jarenlange ervaring en een uitgebreid machinepark staan wij garant voor
            kwaliteit en service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center"
            >
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className="text-4xl font-black mb-1">{stat.value}</div>
              <div className="text-primary-foreground/60 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVernast;

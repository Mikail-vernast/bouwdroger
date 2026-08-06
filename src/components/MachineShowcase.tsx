import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const machines = [
  {
    name: "ECO Boost",
    capacity: "50L/dag",
    power: "~500W",
    volume: "450m³",
    price: 9,
    image: "/products/eco-boost-50.png",
    tag: null,
  },
  {
    name: "ECO Performance",
    capacity: "80L/dag",
    power: "~900W",
    volume: "1000m³",
    price: 12,
    image: "/products/eco-performance-80.png",
    tag: "POPULAIR",
  },
  {
    name: "ECO Ultimate",
    capacity: "150L/dag",
    power: null,
    volume: "1470m³",
    price: 16,
    image: "/products/eco-ultimate-150.png",
    tag: null,
  },
  {
    name: "ECO Revolution",
    capacity: "Absorptiedroger",
    power: null,
    volume: "Specialist",
    price: 25,
    image: "/products/eco-revolution.jpg",
    tag: null,
  },
];

const MachineShowcase = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-green-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            Nieuw in ons assortiment
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Ontdek onze ECO-machines
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tot 40% minder energieverbruik dan traditionele industriële drogers
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
          {machines.map((machine, index) => (
            <motion.div
              key={machine.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative bg-secondary rounded-2xl overflow-hidden border transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                machine.tag === "POPULAIR"
                  ? "border-primary shadow-md"
                  : "border-border"
              }`}
            >
              {machine.tag && (
                <span
                  className={`absolute top-3 right-3 z-10 text-white text-[10px] font-bold px-2.5 py-1 rounded-full ${
                    machine.tag === "POPULAIR" ? "bg-primary" : "bg-green-600"
                  }`}
                >
                  {machine.tag}
                </span>
              )}

              <div className="px-4 pt-4 md:px-5 md:pt-5">
                <h3 className="font-bold text-foreground text-sm md:text-base">
                  {machine.name}
                </h3>
                <div className="text-2xl md:text-3xl font-black text-primary mt-1">
                  €{machine.price}
                  <span className="text-xs md:text-sm font-normal text-muted-foreground">
                    /dag
                  </span>
                </div>
              </div>

              <div className="bg-white mx-3 my-3 md:mx-4 md:my-4 rounded-xl p-3 md:p-4 flex items-center justify-center">
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="h-32 md:h-44 w-full object-contain" loading="lazy" decoding="async" />
              </div>

              <div className="px-4 md:px-5 pb-2">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="bg-background text-muted-foreground text-[10px] md:text-xs px-2 py-1 rounded-md">
                    {machine.capacity}
                  </span>
                  {machine.power && (
                    <span className="bg-background text-muted-foreground text-[10px] md:text-xs px-2 py-1 rounded-md">
                      {machine.power}
                    </span>
                  )}
                  <span className="bg-background text-muted-foreground text-[10px] md:text-xs px-2 py-1 rounded-md">
                    {machine.volume}
                  </span>
                </div>
              </div>

              <div className="px-4 pb-4 md:px-5 md:pb-5">
                <Button
                  asChild
                  variant={machine.tag === "POPULAIR" ? "default" : "outline"}
                  className="w-full text-xs md:text-sm font-semibold"
                  size="sm"
                >
                  <Link to={`/product/${machine.name.toLowerCase().replace(/ /g, "-")}`}>
                    Bekijk details
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center"
        >
          <Link
            to="/machines"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Bekijk alle machines
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MachineShowcase;

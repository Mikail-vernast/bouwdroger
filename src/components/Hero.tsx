import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Users, TrendingUp, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.png";

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = (y = 24) => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
});

const stats = [
  { icon: Users, value: "500+", label: "Klanten" },
  { icon: TrendingUp, value: "15+", label: "Jaar ervaring" },
  { icon: Truck, value: "24u", label: "Levering" },
];

const Hero = () => {
  return (
    <section className="relative overflow-visible bg-white">
      {/* Banner image — full width, maintains aspect ratio, transparent bottom shows white */}
      <img
        src={heroBanner}
        alt=""
        className="w-full h-auto block"
        loading="eager"
      />

      {/* Text overlay — positioned on right half of the banner */}
      <div className="absolute inset-0">
        <div className="container mx-auto px-4 h-full flex items-center justify-end">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-md lg:max-w-lg py-8 text-right"
          >
            {/* Google Reviews badge */}
            <motion.div
              variants={fadeUp(-12)}
              className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 mb-4"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-white">4.8</span>
              <span className="text-xs text-white/60">op Google Reviews</span>
            </motion.div>

            {/* Tagline badge */}
            <motion.div variants={fadeUp(-8)} className="mb-5">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 text-xs font-semibold text-white/80">
                🇧🇪 Uw #1 bouwdrogerservice in België
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp(30)}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.05] mb-5 text-white"
            >
              Uw expert
              <br />
              in een zorgeloze
              <br />
              bouwdroging
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp(20)}
              className="text-sm md:text-base text-white/65 mb-7 max-w-sm ml-auto leading-relaxed"
            >
              Ontvang direct een <strong className="text-white/90">droogplan op maat</strong>.
              Geniet van ECO-machines, professionele installatie
              en transparante tarieven, geen verrassingen.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp(20)}
              className="flex flex-col sm:flex-row gap-3 mb-8 justify-end"
            >
              <Button
                size="lg"
                className="bg-white text-[#3B0404] hover:bg-white/90 font-bold text-sm rounded-lg px-7 shadow-lg"
                onClick={() =>
                  document
                    .getElementById("configurator")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Bereken je prijs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                asChild
                className="border border-white/25 bg-primary text-white hover:bg-primary/80 font-semibold text-sm rounded-lg px-7"
              >
                <Link to="/afhalen">Zelf afhalen?</Link>
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeUp(16)}
              className="flex gap-8 justify-end"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <stat.icon className="h-4 w-4 text-white/40" />
                  <div>
                    <div className="text-xl md:text-2xl font-black text-white leading-none">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-white/45 font-medium uppercase tracking-wider mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

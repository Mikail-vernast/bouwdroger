import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Users, TrendingUp, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.png";

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
          <div
            className="max-w-md lg:max-w-lg py-8 text-right"
          >
            {/* Google Reviews badge */}
            <div
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
            </div>

            {/* Tagline badge */}
            <div
              className="mb-5"
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 text-xs font-semibold text-white/80">
                🇧🇪 Uw #1 bouwdrogerservice in België
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.05] mb-5 text-white"
            >
              Uw expert
              <br />
              in een zorgeloze
              <br />
              bouwdroging
            </h1>

            {/* Subtitle */}
            <p
              className="text-sm md:text-base text-white/65 mb-7 max-w-sm ml-auto leading-relaxed"
            >
              Ontvang direct een <strong className="text-white/90">droogplan op maat</strong>.
              Geniet van ECO-machines, professionele installatie
              en transparante tarieven — geen verrassingen.
            </p>

            {/* CTA Buttons */}
            <div
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
            </div>

            {/* Stats row */}
            <div
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

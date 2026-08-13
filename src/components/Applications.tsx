import { Building2, Hammer, Droplets, HardHat, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

const diensten = [
  {
    icon: Building2,
    title: "Nieuwbouw",
    description: "Pleisterwerk & chape sneller afwerken. Voorkom schimmel en vertraagde planning.",
    href: "/nieuwbouw",
    highlight: false,
    badge: null,
  },
  {
    icon: Hammer,
    title: "Renovatie",
    description: "Vocht & schimmel definitief aanpakken bij verbouwingen.",
    href: "/renovatie",
    highlight: false,
    badge: null,
  },
  {
    icon: Droplets,
    title: "Waterschade",
    description: "Noodservice — levering binnen 24 uur. Minimaliseer schade.",
    href: "/waterschade",
    highlight: true,
    badge: "24U SPOED",
  },
  {
    icon: ShieldCheck,
    title: "Vochtbestrijding",
    description: "Structurele vochtproblemen detecteren en definitief oplossen.",
    href: "/renovatie",
    highlight: false,
    badge: null,
  },
  {
    icon: HardHat,
    title: "Aannemers",
    description: "B2B tarieven en vaste samenwerking voor uw projecten.",
    href: "/contact",
    highlight: false,
    badge: null,
  },
];

const Applications = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <Reveal
          from="up"
          className="text-center mb-14"
        >
          <span className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            Voor elk project
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Voor elk project de juiste oplossing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Of het nu gaat om nieuwbouw, renovatie of waterschade — wij hebben
            de expertise en het materiaal.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {diensten.map((dienst, index) => (
            <Link key={dienst.title} to={dienst.href}>
              <Reveal
                from="up"
                delay={index * 0.1}
                className={`relative bg-accent rounded-xl p-6 overflow-hidden group transition-all duration-200 hover:-translate-y-1 hover:shadow-xl cursor-pointer h-full ${
                  dienst.highlight ? "ring-2 ring-red-500/30" : ""
                }`}
              >
                {dienst.badge && (
                  <span
                    className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 bg-[hsl(0,72%,51%)] text-white text-xs font-bold px-2.5 py-1 rounded-full"
                  >
                    {dienst.badge}
                  </span>
                )}

                <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-primary/30 group-hover:bg-primary/50 transition-colors" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                    <dienst.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-primary-foreground text-lg mb-2">
                    {dienst.title}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm mb-4">
                    {dienst.description}
                  </p>
                  <ArrowRight className="h-5 w-5 text-primary-foreground/50 group-hover:text-primary-foreground group-hover:translate-x-1 transition-all" />
                </div>
              </Reveal>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;

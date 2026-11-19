import { Truck, Droplets, Percent, HeadphonesIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import { GRATIS_LEVERING_KOP, GRATIS_LEVERING_VOETNOOT, GRATIS_TOT_KM } from "@/lib/levering";

const usps = [
  {
    icon: Truck,
    title: GRATIS_LEVERING_KOP,
    description: `Binnen ${GRATIS_TOT_KM} km, vanaf 2 weken huur`,
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
            <Reveal
              from="up"
              delay={index * 0.1}
              key={usp.title}
              className="flex items-start gap-4 p-5 bg-background rounded-xl shadow-sm border border-border"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <usp.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm">{usp.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{usp.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        {/*
          De asterisk uit de eerste kaart moet ergens landen. Zonder deze regel
          leest "Gratis levering & ophaling*" als een sterretje zonder noot, en
          dat is erger dan geen sterretje: het suggereert kleine lettertjes die
          nergens staan.
        */}
        <p className="text-muted-foreground text-xs mt-6 max-w-3xl leading-relaxed">
          {GRATIS_LEVERING_VOETNOOT}
        </p>
      </div>
    </section>
  );
};

export default USPBar;

import { Calculator, Settings2, CheckCircle, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const steps = [
  {
    icon: Calculator,
    step: "1",
    title: "Bereken online",
    description: "Vul m² en type werk in",
  },
  {
    icon: Settings2,
    step: "2",
    title: "Kies je service",
    description: "Afhalen, levering of all-in",
  },
  {
    icon: CheckCircle,
    step: "3",
    title: "Wij regelen de rest",
    description: "Levering, installatie & meting",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <Reveal
          from="up"
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0"
        >
          {steps.map((s, index) => (
            <div key={s.step} className="flex items-center gap-0">
              <Reveal
                from="scale"
                delay={index * 0.12}
                className="flex items-center gap-3 bg-background rounded-xl px-5 py-4 border border-border shadow-sm"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent text-primary-foreground flex-shrink-0">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      Stap {s.step}
                    </span>
                    <span className="font-bold text-sm text-foreground">{s.title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{s.description}</p>
                </div>
              </Reveal>

              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block h-4 w-4 text-muted-foreground/40 mx-3 flex-shrink-0" />
              )}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default HowItWorks;

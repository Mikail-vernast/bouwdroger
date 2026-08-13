import Reveal from "@/components/Reveal";

const metrics = [
  { value: "500+", label: "Tevreden klanten" },
  { value: "15+", label: "Jaar ervaring" },
  { value: "50+", label: "Machines beschikbaar" },
  { value: "24u", label: "Levering mogelijk" },
];

const TrustBar = () => {
  return (
    <section className="bg-accent/5 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-6 overflow-x-auto gap-8">
          {metrics.map((metric, index) => (
            <Reveal
              from="up"
              delay={index * 0.08}
              key={metric.label}
              className="flex items-center gap-3 flex-shrink-0"
            >
              <span className="text-2xl md:text-3xl font-black text-primary">
                {metric.value}
              </span>
              <span className="text-xs md:text-sm text-muted-foreground">
                {metric.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;

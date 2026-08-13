import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, MapPin, Clock, Ruler } from "lucide-react";
import Reveal from "@/components/Reveal";

const cases = [
  {
    title: "Nieuwbouw Antwerpen",
    location: "Antwerpen",
    type: "Nieuwbouw",
    area: "180m\u00B2",
    category: "Chape",
    duration: "3 weken",
    result: "85% \u2192 2.1% vochtgehalte",
    equipment: "4x ECO Performance",
  },
  {
    title: "Waterschade Gent",
    location: "Gent",
    type: "Waterschade",
    area: "12m\u00B2 badkamer",
    category: "Badkamer",
    duration: "5 dagen",
    result: "Volledig droog, geen schimmel",
    equipment: "1x ECO Boost",
  },
  {
    title: "Renovatie Leuven",
    location: "Leuven",
    type: "Renovatie",
    area: "60m\u00B2 kelder",
    category: "Kelder",
    duration: "4 weken",
    result: "Vloerlegger kon starten",
    equipment: "2x ECO Boost + ventilator",
  },
];

const Realisaties = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <Reveal
          from="up"
          className="text-center mb-14"
        >
          <span className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            Bewezen resultaten
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Onze realisaties
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meer dan 500 projecten succesvol afgerond.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {cases.map((caseItem, index) => (
            <Reveal
              from="up"
              delay={index * 0.1}
              key={caseItem.title}
              className="bg-background rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
            >
              {/* Success top bar */}
              <div className="h-1.5 bg-green-500" />

              <div className="p-6">
                {/* Location & type */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <MapPin className="h-4 w-4" />
                  <span>{caseItem.location}</span>
                  <span className="text-muted-foreground/40">|</span>
                  <span>{caseItem.type}</span>
                </div>

                <h3 className="font-bold text-foreground text-lg mb-4">
                  {caseItem.title}
                </h3>

                {/* Stats */}
                <div className="flex gap-4 mb-4">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Ruler className="h-4 w-4" />
                    <span>{caseItem.area}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{caseItem.duration}</span>
                  </div>
                </div>

                {/* Result */}
                <div className="flex items-start gap-2 bg-green-50 text-green-800 rounded-lg p-3 mb-4">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{caseItem.result}</span>
                </div>

                {/* Equipment */}
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold">Materiaal:</span>{" "}
                  {caseItem.equipment}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal
          from="up"
          delay={0.3}
          className="text-center"
        >
          <Link
            to="/realisaties"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Bekijk alle realisaties
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default Realisaties;

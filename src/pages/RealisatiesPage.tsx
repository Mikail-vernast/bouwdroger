import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Droplets, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import { breadcrumbSchema } from "@/lib/schema";
import { SEO } from "@/data/seo";

const projects = [
  {
    title: "Nieuwbouw appartementsblok Antwerpen",
    location: "Antwerpen",
    type: "Nieuwbouw",
    sqm: "2.400 m²",
    duration: "6 weken",
    equipment: "8x ECO Performance + 12x Ventilatoren",
    desc: "Volledige bouwdroging van een nieuwbouwproject met 24 appartementen. Droogplan op maat met stapsgewijze aanpak per verdieping.",
  },
  {
    title: "Waterschade kantoorgebouw Gent",
    location: "Gent",
    type: "Waterschade",
    sqm: "850 m²",
    duration: "3 weken",
    equipment: "4x ECO Ultimate + 6x Ventilatoren + Verwarming",
    desc: "Spoedinterventie na leidingbreuk. Binnen 4 uur ter plaatse, volledige droging en monitoring tot eindresultaat.",
  },
  {
    title: "Renovatie historisch pand Brugge",
    location: "Brugge",
    type: "Renovatie",
    sqm: "350 m²",
    duration: "4 weken",
    equipment: "3x ECO Boost + 4x Ventilatoren",
    desc: "Voorzichtige droging van een beschermd monument. Aangepast droogplan met continue monitoring van temperatuur en luchtvochtigheid.",
  },
  {
    title: "Villa nieuwbouw Brasschaat",
    location: "Brasschaat",
    type: "Nieuwbouw",
    sqm: "420 m²",
    duration: "4 weken",
    equipment: "3x ECO Performance + 4x Ventilatoren",
    desc: "Bouwdroging voor een luxueuze villa. Snelle opstart en perfecte coördinatie met de aannemer voor tijdige oplevering.",
  },
  {
    title: "Waterschade restaurant Mechelen",
    location: "Mechelen",
    type: "Waterschade",
    sqm: "180 m²",
    duration: "10 dagen",
    equipment: "2x ECO Ultimate + ECO Revolution",
    desc: "Spoeddroging na overstroming in een druk restaurant. Nachtwerk om de zaak zo snel mogelijk weer open te krijgen.",
  },
  {
    title: "Schoolgebouw renovatie Leuven",
    location: "Leuven",
    type: "Renovatie",
    sqm: "1.800 m²",
    duration: "8 weken",
    equipment: "6x ECO Performance + 10x Ventilatoren + Verwarming",
    desc: "Grootschalige renovatie tijdens de zomervakantie. Strak planning om alles klaar te hebben voor de start van het schooljaar.",
  },
];

const RealisatiesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        {...SEO.realisaties}
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Realisaties", path: "/realisaties" },
        ])}
      />
      <Navbar />
      <main>
        <PageHero
          badge="Realisaties"
          title="Onze projecten spreken voor zich"
          subtitle="Bekijk een selectie van onze gerealiseerde droogprojecten. Van spoedinterventies bij waterschade tot grote nieuwbouwprojecten – wij leveren altijd resultaat."
        />

        {/* Projects */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  {/* Color strip header */}
                  <div className="bg-accent p-5 text-primary-foreground">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">
                      {project.type}
                    </span>
                    <h3 className="font-bold mt-1">{project.title}</h3>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-muted-foreground mb-4">{project.desc}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5 text-accent" />
                        <span>{project.location}</span>
                        <span className="mx-1">·</span>
                        <Droplets className="h-3.5 w-3.5 text-accent" />
                        <span>{project.sqm}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5 text-accent" />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground">Apparatuur:</span> {project.equipment}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-accent text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-primary/20" />
            <div className="absolute -bottom-16 -left-16 w-[200px] h-[200px] rounded-full bg-primary/15" />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-black mb-4">Uw project als volgende?</h2>
            <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
              Laat ons een droogplan op maat opstellen voor uw project. Vrijblijvend en zonder verplichtingen.
            </p>
            <Button
              size="lg"
              className="bg-primary-foreground text-accent hover:bg-primary-foreground/90 font-semibold rounded-full px-8"
              onClick={() => navigate("/contact")}
            >
              Neem Contact Op <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RealisatiesPage;

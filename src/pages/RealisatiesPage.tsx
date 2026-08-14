import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { SEO } from "@/data/seo";
import Reveal from "@/components/Reveal";
import {
  REALISATIES,
  REALISATIE_SOORTEN,
  telPerSoort,
  type RealisatieSoort,
} from "@/data/realisaties";

const isSoort = (waarde: string | null): waarde is RealisatieSoort =>
  REALISATIE_SOORTEN.some((s) => s.key === waarde);

const RealisatiesPage = () => {
  const navigate = useNavigate();
  /*
    De filter staat in de URL en niet in een useState. Een bezoeker die
    "Waterschade" doorstuurt, stuurt dan ook waterschade door, en de
    terugknop van de browser doet wat hij hoort te doen. De pagina zelf blijft
    één geprerenderde route: ?soort= is een parameter, geen aparte HTML.
  */
  const [params, setParams] = useSearchParams();
  const gekozen = isSoort(params.get("soort")) ? (params.get("soort") as RealisatieSoort) : null;

  const zichtbaar = gekozen ? REALISATIES.filter((r) => r.soort === gekozen) : REALISATIES;

  const kies = (soort: RealisatieSoort | null) => {
    const volgende = new URLSearchParams(params);
    if (soort) volgende.set("soort", soort);
    else volgende.delete("soort");
    setParams(volgende, { replace: true });
  };

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        {...SEO.realisaties}
        path="/realisaties"
        image={REALISATIES[0].cover}
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Realisaties", path: "/realisaties" },
          ]),
          itemListSchema(
            "Uitgevoerde droogprojecten",
            REALISATIES.map((r) => ({ name: r.titel, path: `/realisaties/${r.slug}` }))
          ),
        ]}
      />
      <Navbar />
      <main>
        <PageHero
          badge="Realisaties"
          title="Werven waar onze toestellen stonden"
          subtitle={`${REALISATIES.length} droogprojecten die wij uitvoerden: bouwvocht na pleister- en chapewerken, waterschade na een lek, en ruimtes die gewoon te vochtig waren. Met de foto's van de werf zelf.`}
        />

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {/*
              De projectkaarten dragen een h3. Zonder deze h2 sprong de pagina
              van h1 rechtstreeks naar h3, en dan leest een crawler — net als een
              schermlezer — de kaarten als losse fragmenten in plaats van als één
              lijst realisaties.
            */}
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">
              Uitgevoerde droogprojecten
            </h2>

            <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter op soort werk">
              <button
                type="button"
                onClick={() => kies(null)}
                aria-pressed={gekozen === null}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  gekozen === null
                    ? "bg-accent text-primary-foreground border-accent"
                    : "bg-card text-foreground border-border hover:border-accent"
                }`}
              >
                Alle projecten
                <span className="ml-2 text-xs opacity-60">{REALISATIES.length}</span>
              </button>
              {REALISATIE_SOORTEN.map((soort) => (
                <button
                  key={soort.key}
                  type="button"
                  onClick={() => kies(soort.key)}
                  aria-pressed={gekozen === soort.key}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    gekozen === soort.key
                      ? "bg-accent text-primary-foreground border-accent"
                      : "bg-card text-foreground border-border hover:border-accent"
                  }`}
                >
                  {soort.label}
                  <span className="ml-2 text-xs opacity-60">{telPerSoort(soort.key)}</span>
                </button>
              ))}
            </div>

            {/*
              De vertraging loopt maar tot de zesde kaart: zonder grens stond de
              22e op 0,9 s te wachten voor hij binnenkwam.
            */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {zichtbaar.map((project, i) => (
                <Reveal
                  from="up"
                  delay={Math.min(i, 5) * 0.04}
                  key={project.slug}
                  className="group bg-card rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <Link to={`/realisaties/${project.slug}`} className="block">
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={project.cover}
                        alt={`Bouwdroging bij ${project.titel}`}
                        loading={i < 3 ? "eager" : "lazy"}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                        {REALISATIE_SOORTEN.find((s) => s.key === project.soort)?.label}
                      </span>
                      <h3 className="font-bold text-foreground mt-1">{project.titel}</h3>
                      {project.plaats && (
                        <p className="flex items-center gap-1.5 text-sm text-muted-foreground mt-2">
                          <MapPin className="h-3.5 w-3.5 text-accent" />
                          {project.plaats}
                        </p>
                      )}
                      <p className="text-sm text-muted-foreground mt-3 line-clamp-3">
                        {project.heroLead}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent mt-4">
                        Bekijk project
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

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

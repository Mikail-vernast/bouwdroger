import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import { SEO } from "@/data/seo";
import { breadcrumbSchema } from "@/lib/schema";
import Reveal from "@/components/Reveal";
import { REALISATIES, getRealisatie, realisatieMeta, soortLabel } from "@/data/realisaties";

const RealisatieDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = slug ? getRealisatie(slug) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <PageMeta {...SEO.notFound} />
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project niet gevonden</h1>
          <Button onClick={() => navigate("/realisaties")} className="rounded-full">
            <ArrowLeft className="h-4 w-4 mr-2" /> Terug naar de realisaties
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const index = REALISATIES.findIndex((r) => r.slug === project.slug);
  const vorige = REALISATIES[index - 1];
  const volgende = REALISATIES[index + 1];

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        {...realisatieMeta(project)}
        path={`/realisaties/${project.slug}`}
        image={project.cover}
        ogType="article"
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Realisaties", path: "/realisaties" },
          { name: project.titel, path: `/realisaties/${project.slug}` },
        ])}
      />
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-accent text-primary-foreground py-12 md:py-16">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full bg-primary/30" />
            <div className="absolute -bottom-[200px] -left-[100px] w-[500px] h-[500px] rounded-full bg-primary/10" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <Link
              to="/realisaties"
              className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-6"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Alle realisaties
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-primary-foreground/10 border border-primary-foreground/20 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
                {soortLabel(project.soort)}
              </span>
              {project.plaats && (
                <span className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/75">
                  <MapPin className="h-3.5 w-3.5" />
                  {project.plaats}
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4">
              {project.heroTitel}
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/75 max-w-2xl">
              {project.heroLead}
            </p>
          </div>
        </section>

        {/*
          De coverfoto staat bewust buiten de hero en krijgt `eager` mee: dit is
          het LCP-element van deze pagina, en een lazy hero-afbeelding kost een
          hele seconde die niets oplevert.
        */}
        <section className="container mx-auto px-4 -mt-8 md:-mt-12 relative z-20 flex justify-center">
          {/*
            Geen vaste verhouding: de helft van deze foto's staat rechtop. Met een
            uitsnede op 16/9 hield een gevelfoto twee rijen bakstenen over.
          */}
          <img
            src={project.cover}
            alt={`Bouwdroging bij ${project.titel}`}
            loading="eager"
            className="w-auto max-h-[560px] max-w-full rounded-2xl border border-border shadow-lg"
          />
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl space-y-10">
              {project.blokken.map((blok, i) => (
                <Reveal from="up" delay={i * 0.05} key={blok.kop}>
                  <h2 className="text-xl md:text-2xl font-black text-foreground mb-3">{blok.kop}</h2>
                  <p className="text-muted-foreground leading-relaxed">{blok.tekst}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {project.fotos.length > 0 && (
          <section className="pb-16 md:pb-20">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-8">Op de werf</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {project.fotos.map((foto, i) => (
                  <Reveal
                    from="up"
                    delay={Math.min(i, 6) * 0.04}
                    key={foto}
                    className="aspect-[3/4] overflow-hidden rounded-xl border border-border bg-muted"
                  >
                    <img
                      src={foto}
                      alt={`Werfbeeld ${i + 1} van ${project.titel}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="border-t border-border py-10">
          <div className="container mx-auto px-4 flex flex-col sm:flex-row gap-4 justify-between">
            {vorige ? (
              <Link
                to={`/realisaties/${vorige.slug}`}
                className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                <span>
                  <span className="block text-xs uppercase tracking-wider">Vorig project</span>
                  <span className="font-semibold text-foreground">{vorige.titel}</span>
                </span>
              </Link>
            ) : (
              <span />
            )}
            {volgende && (
              <Link
                to={`/realisaties/${volgende.slug}`}
                className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors sm:text-right"
              >
                <span>
                  <span className="block text-xs uppercase tracking-wider">Volgend project</span>
                  <span className="font-semibold text-foreground">{volgende.titel}</span>
                </span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </section>

        <section className="py-16 bg-accent text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-primary/20" />
            <div className="absolute -bottom-16 -left-16 w-[200px] h-[200px] rounded-full bg-primary/15" />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-black mb-4">Zelf vocht weg te krijgen?</h2>
            <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
              Bereken in vijf vragen welke toestellen u nodig heeft, of vraag een droogplan op maat.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                size="lg"
                className="bg-primary-foreground text-accent hover:bg-primary-foreground/90 font-semibold rounded-full px-8"
                onClick={() => navigate("/verhuur/calculator")}
              >
                Bereken uw droogpakket <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent hover:bg-primary-foreground/10 font-semibold rounded-full px-8"
                onClick={() => navigate("/contact")}
              >
                Neem contact op
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RealisatieDetailPage;

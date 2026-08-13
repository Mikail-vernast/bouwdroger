import PageMeta from "@/components/PageMeta";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Shield, Award, Users, Leaf, CheckCircle2 } from "lucide-react";
import { SEO } from "@/data/seo";
import Reveal from "@/components/Reveal";

const values = [
  { icon: Shield, title: "Betrouwbaarheid", desc: "Wij staan klaar wanneer jij ons nodig hebt. 24/7 bereikbaar voor urgente projecten." },
  { icon: Award, title: "Expertise", desc: "Jarenlange ervaring in vochtbestrijding en bouwdroging. Wij weten wat werkt." },
  { icon: Leaf, title: "Duurzaamheid", desc: "Onze ECO-machines verbruiken tot 40% minder energie dan traditionele toestellen." },
  { icon: Users, title: "Klantgericht", desc: "Elk droogplan is op maat. Geen standaardoplossingen, maar advies dat past bij jouw project." },
];

const stats = [
  { number: "500+", label: "Projecten per jaar" },
  { number: "98%", label: "Klanttevredenheid" },
  { number: "24u", label: "Gemiddelde levertijd" },
  { number: "10+", label: "Jaar ervaring" },
];

const OverOnsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        {...SEO.overOns}
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Over ons", path: "/over-ons" },
          ]),
        ]}
      />
      <Navbar />
      <main>
        <PageHero
          badge="Over Vernast"
          title="Experts in bouwdroging & vochtbestrijding"
          subtitle="Vernast Vochtbestrijding is dé specialist in professionele bouwdroging. Met jarenlange ervaring en state-of-the-art ECO-apparatuur helpen wij particulieren, aannemers en bedrijven bij elk droogproject."
        />

        {/* Stats */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <Reveal
                  from="up"
                  delay={i * 0.1}
                  key={stat.label}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl font-black text-accent">{stat.number}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                  Ons verhaal
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">
                  Gestart vanuit passie voor vakmanschap
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Vernast is ontstaan vanuit de overtuiging dat bouwdroging meer is dan alleen machines plaatsen.
                    Het gaat om het begrijpen van vochtproblemen, het opstellen van een doordacht droogplan en het
                    begeleiden van klanten van begin tot eind.
                  </p>
                  <p>
                    Vandaag zijn wij een gevestigde naam in de sector, met een vloot professionele ECO-bouwdrogers
                    en een team dat klaarstaat voor elk project – van een kleine badkamerrenovatie tot een groot
                    nieuwbouwproject.
                  </p>
                  <p>
                    Onze kracht? Een persoonlijke aanpak gecombineerd met professionele apparatuur en jarenlange
                    expertise in vochtbestrijding.
                  </p>
                </div>
              </div>
              <div className="bg-accent rounded-2xl p-10 text-primary-foreground relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/20" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4">Wat maakt ons anders?</h3>
                  <div className="space-y-3">
                    {[
                      "Droogplan op maat bij elk project",
                      "ECO-machines met laag verbruik",
                      "Gratis vochtmeting bij levering",
                      "Installatie inbegrepen",
                      "Geen verborgen kosten",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary-foreground/70" />
                        <span className="text-sm text-primary-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                Onze waarden
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-foreground">Waar wij voor staan</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <Reveal
                  from="up"
                  delay={i * 0.1}
                  key={v.title}
                  className="bg-card rounded-2xl p-6 shadow-sm border border-border text-center"
                >
                  <div className="w-14 h-14 mx-auto bg-accent rounded-xl flex items-center justify-center mb-4">
                    <v.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OverOnsPage;

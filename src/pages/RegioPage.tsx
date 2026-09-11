import { Link, useLocation } from "react-router-dom";
import { ArrowRight, MapPin, Phone, Truck, Warehouse } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import Navbar from "@/components/Navbar";
import V3Footer from "@/components/home-v3/V3Footer";
import { Button } from "@/components/ui/button";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { CONTACT } from "@/lib/site";
import { REGIO_BY_PATH, REGIO_ROUTES } from "@/data/regio-slugs";
import { REGIO_BY_SLUG, realisatiesVoor, type Regio } from "@/data/regios";
import { PRODUCTS, productImageAlt } from "@/data/verhuur";

/**
 * Eén sjabloon voor de vijf regiopagina's (/bouwdroger-huren-<regio>).
 *
 * De inhoud staat volledig in `src/data/regios.ts`; dit bestand bepaalt
 * alleen de volgorde en de vorm. Alles wat hier staat wordt bij de build
 * geprerenderd, dus de H1, de tekst en de vragen staan in de HTML zonder dat
 * er JavaScript aan te pas komt — dat is de reden dat de vragen in een
 * `<details>` zitten en niet in de Radix-accordeon van de andere pagina's: die
 * rendert een dichtgeklapt antwoord helemaal niet, en dan beweert de FAQPage-
 * schema iets dat niet op de pagina staat.
 *
 * Welke regio getoond wordt volgt uit het pad. React Router kan geen
 * `bouwdroger-huren-:regio` (een parameter moet een heel segment zijn), dus
 * App.tsx registreert vijf vaste routes die allemaal hier uitkomen.
 */
const RegioPage = () => {
  const { pathname } = useLocation();
  const route = REGIO_BY_PATH[pathname.replace(/\/$/, "")] ?? REGIO_ROUTES[0];
  const regio: Regio = REGIO_BY_SLUG[route.slug];
  const realisaties = realisatiesVoor(regio);
  const andere = REGIO_ROUTES.filter((r) => r.slug !== regio.slug);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title={regio.title}
        description={regio.description}
        path={regio.path}
        jsonLd={[
          serviceSchema({
            name: regio.h1,
            description: regio.description,
            path: regio.path,
            serviceType: "Bouwdroger verhuur",
            areaServed: regio.areaServed,
          }),
          faqSchema(regio.faq.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Werkgebied", path: "/#regio" },
            { name: regio.h1, path: regio.path },
          ]),
        ]}
      />
      <Navbar />
      <main>
        {/* HERO */}
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <nav aria-label="Kruimelpad" className="text-sm text-muted-foreground mb-4">
                <ol className="flex flex-wrap gap-1.5">
                  <li>
                    <Link to="/" className="hover:text-primary">
                      Home
                    </Link>
                    <span aria-hidden="true"> /</span>
                  </li>
                  <li>
                    <a href="/#regio" className="hover:text-primary">
                      Werkgebied
                    </a>
                    <span aria-hidden="true"> /</span>
                  </li>
                  <li aria-current="page" className="text-foreground">
                    {regio.name}
                  </li>
                </ol>
              </nav>
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-4">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {regio.kicker}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground leading-tight mb-6">
                {regio.h1}
              </h1>
              <div className="space-y-4 text-lg text-muted-foreground">
                {regio.intro.map((alinea) => (
                  <p key={alinea}>{alinea}</p>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button size="lg" className="rounded-full font-bold text-base gap-2 px-8" asChild>
                  <Link to="/verhuur/calculator">
                    Bereken uw droogpakket <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full font-bold text-base gap-2 px-8"
                  asChild
                >
                  <a href={`tel:${CONTACT.phoneE164}`}>
                    <Phone className="h-4 w-4" /> Bel {CONTACT.phoneLocal}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* WAT WE HIER DROGEN */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">{regio.bouw.kop}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {regio.bouw.alineas.map((alinea) => (
                  <p key={alinea}>{alinea}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TOESTELLEN */}
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-10">
                {regio.toestellen.kop}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {regio.toestellen.items.map((item) => {
                  const p = PRODUCTS[item.key];
                  return (
                    <article
                      key={item.key}
                      className="bg-card border border-border rounded-2xl p-6 flex flex-col"
                    >
                      <img
                        src={p.img[0]}
                        alt={productImageAlt(p, 0)}
                        width={480}
                        height={360}
                        loading="lazy"
                        decoding="async"
                        className="w-full aspect-[4/3] object-contain rounded-xl bg-muted/40 mb-4"
                      />
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary">{p.type}</p>
                      <h3 className="text-lg font-black text-foreground mb-2">{p.name}</h3>
                      <p className="text-sm text-muted-foreground mb-5 flex-1">{item.waarom}</p>
                      <Link
                        to={`/verhuur/toestel/${item.key}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                      >
                        Bekijk {p.short} <ArrowRight className="h-4 w-4" />
                      </Link>
                    </article>
                  );
                })}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-8">
                Twijfelt u tussen twee toestellen?{" "}
                <Link to="/calculator" className="font-semibold text-primary hover:underline">
                  Bereken hoeveel liter per dag uw ruimte nodig heeft
                </Link>{" "}
                of bekijk{" "}
                <Link to="/machines" className="font-semibold text-primary hover:underline">
                  het volledige gamma
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* AFHALEN OF LEVEREN */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-10">
                Afhalen of leveren in {regio.name}?
              </h2>
              <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3 bg-card border border-border rounded-2xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <Truck className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-xl font-black text-foreground">{regio.levering.kop}</h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
                    {regio.levering.alineas.map((alinea) => (
                      <p key={alinea}>{alinea}</p>
                    ))}
                  </div>
                  <dl className="border border-border rounded-xl divide-y divide-border text-sm">
                    {regio.levering.feiten.map((feit) => (
                      <div key={feit.label} className="flex flex-col sm:flex-row sm:justify-between gap-1 px-4 py-3">
                        <dt className="text-muted-foreground">{feit.label}</dt>
                        <dd className="font-semibold text-foreground sm:text-right">{feit.waarde}</dd>
                      </div>
                    ))}
                  </dl>
                  <Button className="rounded-full font-bold gap-2 px-6 mt-6" asChild>
                    <Link to="/reserveren">
                      Reserveer met levering <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="lg:col-span-2 bg-muted/30 border border-border rounded-2xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <Warehouse className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-xl font-black text-foreground">{regio.afhalen.kop}</h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
                    {regio.afhalen.alineas.map((alinea) => (
                      <p key={alinea}>{alinea}</p>
                    ))}
                  </div>
                  <p className="text-sm text-foreground font-semibold">
                    {CONTACT.street}, {CONTACT.postalCode} {CONTACT.city}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">Ma–Vr 08:00–17:00, op afspraak</p>
                  <Button variant="outline" className="rounded-full font-bold gap-2 px-6" asChild>
                    <Link to="/afhalen">
                      Zo werkt zelf afhalen <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REALISATIES */}
        {realisaties.length > 0 && (
          <section className="py-14 md:py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-3">
                  {regio.realisaties.kop}
                </h2>
                <p className="text-center text-muted-foreground mb-10">{regio.realisaties.intro}</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {realisaties.map((r) => (
                    <Link
                      key={r.slug}
                      to={`/realisaties/${r.slug}`}
                      className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
                    >
                      <img
                        src={r.kaart}
                        alt={r.kaartAlt}
                        width={640}
                        height={420}
                        loading="lazy"
                        decoding="async"
                        className="w-full aspect-[3/2] object-cover"
                      />
                      <div className="p-5">
                        <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-1">
                          {r.locatie}
                        </p>
                        <h3 className="font-bold text-foreground group-hover:text-primary leading-snug">
                          {r.titel}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
                <p className="text-center text-sm text-muted-foreground mt-8">
                  <Link to="/realisaties" className="font-semibold text-primary hover:underline">
                    Alle realisaties bekijken
                  </Link>
                </p>
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-10">
                Veelgestelde vragen over bouwdrogers huren in {regio.name}
              </h2>
              <div className="space-y-3">
                {regio.faq.map((item) => (
                  <details key={item.q} className="group bg-card border border-border rounded-xl px-5">
                    <summary className="cursor-pointer list-none py-4 font-semibold text-foreground flex items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                      {item.q}
                      <span
                        aria-hidden="true"
                        className="text-primary transition-transform group-open:rotate-45 text-xl leading-none"
                      >
                        +
                      </span>
                    </summary>
                    <p className="text-muted-foreground pb-4">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ANDERE REGIO'S */}
        <section className="py-10 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-lg font-bold text-foreground mb-4">Ook bouwdrogers huren in</h2>
              <ul className="flex flex-wrap justify-center gap-2">
                {andere.map((r) => (
                  <li key={r.slug}>
                    <Link
                      to={r.path}
                      className="inline-block rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground hover:border-primary hover:text-primary"
                    >
                      {r.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent py-14 md:py-20">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-black text-primary-foreground mb-3">
              Bouwdroger nodig in {regio.name}?
            </h2>
            <p className="text-primary-foreground/70 mb-8">
              Bereken uw pakket, reserveer online en wij leveren binnen 24 uur — geplaatst en ingesteld.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-bold gap-2 px-8"
                asChild
              >
                <Link to="/verhuur/calculator">
                  Bereken mijn pakket <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full font-bold gap-2 px-8"
                asChild
              >
                <Link to="/reserveren">Online reserveren</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <V3Footer />
    </div>
  );
};

export default RegioPage;

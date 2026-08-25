import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import { breadcrumbSchema, faqSchema, offerCatalogSchema, serviceSchema } from "@/lib/schema";
import Navbar from "@/components/Navbar";
import V3Footer from "@/components/home-v3/V3Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  Wrench,
  PhoneCall,
  ClipboardList,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { SEO } from "@/data/seo";
import {
  DROGERS,
  RENTAL_WEEKS,
  TARIEVEN_PUBLIEK,
  euro,
  priceForWeeks,
} from "@/data/tarieflijst";

/**
 * De ventilator en de kachel — het "extra" naast de ontvochtiger zelf.
 * Ze staan apart omdat ze de droging versnellen maar geen vocht afvoeren; de
 * tabel hierboven gaat over capaciteit, deze rij over ondersteuning.
 */
const EXTRA_DEVICES = TARIEVEN_PUBLIEK.filter((t) => t.litersPerDay === 0);

/**
 * De prijsvragen die mensen letterlijk intikken. Ze staan zichtbaar onderaan de
 * pagina én als FAQ-schema in de head — die twee moeten gelijk blijven lopen.
 */
const FAQ = [
  {
    question: "Wat kost een bouwdroger huren per dag?",
    answer: `Een bouwdroger huren kost bij Vernast tussen ${euro(
      DROGERS[0].perDay
    )} en ${euro(
      DROGERS[DROGERS.length - 1].perDay
    )} per dag, exclusief btw. De prijs hangt af van de capaciteit: de ${
      DROGERS[0].short
    } voert ${DROGERS[0].litersPerDay} liter vocht per 24 uur af, de ${
      DROGERS[DROGERS.length - 1].short
    } tot ${DROGERS[DROGERS.length - 1].litersPerDay} liter. Levering, installatie, vochtmeting en ophaling zitten in die prijs.`,
  },
  {
    question: "Moet ik een waarborg betalen?",
    answer:
      "Nee. Wij vragen geen waarborg voor het toestel. U betaalt enkel de huurprijs voor de dagen dat u het toestel gebruikt, plus eventuele extra opties die u zelf kiest.",
  },
  {
    question: "Zijn levering en ophaling inbegrepen?",
    answer:
      "Levering en ophaling zijn gratis vanaf een huurperiode van vier weken. Bij kortere periodes rekenen wij een leveringskost aan; wie zelf afhaalt in ons magazijn in Aartselaar krijgt € 25 korting op de huurprijs.",
  },
  {
    question: "Zijn de prijzen inclusief btw?",
    answer:
      "Nee, alle vermelde prijzen zijn exclusief btw. Op verhuur van bouwdrogers is het standaardtarief van 21 % btw van toepassing. Op uw factuur staat het btw-bedrag apart vermeld, zodat u het kunt indienen bij uw verzekeraar of boekhouder.",
  },
  {
    question: "Wordt het goedkoper als ik langer huur?",
    answer:
      "De dagprijs blijft dezelfde, hoe lang u ook huurt — er komt geen toeslag bij voor een korte periode. Wat u wint bij langer huren, is de levering: vanaf vier weken zijn levering en ophaling gratis.",
  },
];

const included = [
  "Levering aan huis door expert",
  "Ophaling na gebruik",
  "Gratis verlengsnoer 10m 2.5mm²",
  "Uitleg bij plaatsing",
  "Gratis vochtmeting na afloop",
  "Geen waarborg vereist",
];


const guarantees = [
  { emoji: "🔧", title: "Toestel defect?", desc: "Wij vervangen de volgende dag. Geen discussie." },
  { emoji: "📞", title: "Altijd bereikbaar", desc: "Weekdagen, weekend en feestdagen." },
  { emoji: "📋", title: "Duidelijke factuur", desc: "Voor uw verzekeringsdossier." },
];

const PrijzenPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        {...SEO.prijzen}
        jsonLd={[
          serviceSchema({
            name: "Verhuur van bouwdrogers, ventilatoren en bouwkachels",
            description:
              "Een dagprijs per toestel, zonder waarborg en zonder verborgen kosten, met korting bij langere huurperiodes. Levering, installatie en vochtmeting inbegrepen.",
            path: "/prijzen",
            serviceType: "Verhuur bouwdrogers",
          }),
          offerCatalogSchema(
            "Huurtarieven bouwdrogers, ventilatoren en bouwkachels",
            TARIEVEN_PUBLIEK.map((t) => ({
              name: t.name,
              description: t.summary,
              path: t.path,
              pricePerDay: t.perDay,
            }))
          ),
          faqSchema(FAQ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Prijzen", path: "/prijzen" },
          ]),
        ]}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4"
            >
              Transparante prijzen — geen verrassingen
            </h1>
            <p
              className="text-muted-foreground text-lg"
            >
              Geen waarborg. Geen verborgen kosten. Wat u ziet is wat u betaalt.
            </p>
          </div>
        </section>

        {/* Pricing table */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Reveal
                from="up"
                delay={(0) * 0.08}
              >
                {/*
                  Een echte <table>. De prijzen stonden hier eerder in een
                  grid van div's met "€ XX" erin; zowel de bedragen als het
                  tabelverband ontbraken dus. Een AI-antwoord op "wat kost een
                  bouwdroger huren" komt uit precies deze cellen — die moeten
                  leesbaar aan elkaar hangen.
                */}
                <div className="bg-card border border-border rounded-2xl overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <caption className="sr-only">
                      Huurprijzen per bouwdroger en per huurperiode, exclusief btw
                    </caption>
                    <thead>
                      <tr className="bg-accent text-primary-foreground font-bold">
                        <th scope="col" className="px-5 py-4 text-left font-bold">
                          Bouwdroger
                        </th>
                        <th scope="col" className="px-5 py-4 text-center font-bold whitespace-nowrap">
                          Per dag
                        </th>
                        {RENTAL_WEEKS.map((w) => (
                          <th
                            key={w}
                            scope="col"
                            className="px-5 py-4 text-center font-bold whitespace-nowrap"
                          >
                            {w} {w === 1 ? "week" : "weken"}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {DROGERS.map((t, i) => (
                        <tr
                          key={t.key}
                          className={`${i % 2 === 0 ? "bg-background" : "bg-muted/30"} ${
                            i < DROGERS.length - 1 ? "border-b border-border" : ""
                          }`}
                        >
                          <th scope="row" className="px-5 py-4 text-left font-bold text-foreground">
                            <Link to={t.path} className="hover:text-primary transition-colors">
                              {t.short}
                            </Link>
                            <span className="block font-normal text-xs text-muted-foreground">
                              {t.litersPerDay} L/dag · tot {t.volume} m³
                            </span>
                          </th>
                          <td className="px-5 py-4 text-center font-bold text-foreground whitespace-nowrap">
                            {euro(t.perDay)}
                          </td>
                          {RENTAL_WEEKS.map((w) => (
                            <td
                              key={w}
                              className="px-5 py-4 text-center text-foreground whitespace-nowrap"
                            >
                              {euro(priceForWeeks(t, w))}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Prijzen excl. btw — 21 % btw van toepassing. De weekbedragen zijn de dagprijs maal
                  het aantal dagen; er komt geen toeslag bij voor een korte huurperiode.
                </p>

                <div className="flex justify-center mt-4">
                  <Badge variant="secondary" className="text-sm px-4 py-1.5 gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Gratis levering & ophaling bij huur van 4 weken of meer
                  </Badge>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Included */}
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-10">Altijd inbegrepen</h2>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {included.map((item, i) => (
                <Reveal
                  from="up"
                  delay={i * 0.08}
                  key={item}
                  className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Extra options */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-4">
              Ventilator en kachel — sneller droog
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
              Een ontvochtiger haalt het vocht uit de lucht; een ventilator zorgt dat er ook droge
              lucht bij de natte bouwmassa komt, en een kachel houdt de ruimte op temperatuur.
              Samen winnen ze dagen.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="bg-card border border-border rounded-2xl divide-y divide-border">
                {EXTRA_DEVICES.map((t) => (
                  <div key={t.key} className="flex items-center justify-between gap-4 px-6 py-4">
                    <span className="font-medium text-foreground">
                      <Link to={t.path} className="hover:text-primary transition-colors">
                        {t.name}
                      </Link>
                      <span className="block text-xs font-normal text-muted-foreground">
                        {t.type}
                      </span>
                    </span>
                    <span className="font-bold text-foreground whitespace-nowrap">
                      {euro(t.perDay)}
                      <span className="text-sm font-normal text-muted-foreground">/dag</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Guarantees */}
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {guarantees.map((g, i) => (
                <Reveal
                  from="up"
                  delay={i * 0.08}
                  key={g.title}
                  className="bg-card border border-border rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl mb-3">{g.emoji}</div>
                  <h3 className="font-bold text-foreground mb-2">{g.title}</h3>
                  <p className="text-sm text-muted-foreground">{g.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/*
          Veelgestelde vragen — zichtbaar, niet ingeklapt.

          Dit is de sectie waaruit een AI-assistent citeert wanneer iemand
          "wat kost een bouwdroger huren" vraagt. Dezelfde tekst staat als
          FAQ-schema in de head; schema voor onzichtbare inhoud is een
          overtreding, dus die twee mogen niet uit elkaar lopen.
        */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-10">
              Veelgestelde vragen over de prijs
            </h2>
            <dl className="max-w-2xl mx-auto space-y-6">
              {FAQ.map((item) => (
                <div key={item.question} className="bg-card border border-border rounded-2xl p-6">
                  <dt className="font-bold text-foreground mb-2">{item.question}</dt>
                  <dd className="text-sm text-muted-foreground leading-relaxed">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent py-14 md:py-20">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-black text-primary-foreground mb-3">Klaar om te reserveren?</h2>
            <p className="text-primary-foreground/70 mb-8">Geen waarborg, geen verborgen kosten. Wij leveren binnen 24 uur.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-bold gap-2 px-8" onClick={() => navigate("/reserveren")}>
                Reserveer nu <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full font-bold gap-2 px-8" asChild>
                <a href="tel:+3236899065"><Phone className="h-4 w-4" /> Bel ons</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <V3Footer />
    </div>
  );
};

export default PrijzenPage;

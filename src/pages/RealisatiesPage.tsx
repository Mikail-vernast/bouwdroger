import { Suspense, type ReactNode } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { useSeo } from "@/data/seo";
import { REALISATIE_SOORTEN, type RealisatieSoort } from "@/data/realisaties";
import { realisatiesInTaal, realisatieSoortenInTaal } from "@/data/realisatiesInTaal";
import { useCopy, useLokaalPad, useTaal, type Copy } from "@/i18n/useTaal";
import { ArrowRight, DropIcon, FlowIcon, GridIcon, ShieldIcon } from "@/components/realisaties/icons";
// De gedeelde <V3Header>/<V3Footer> dragen hun eigen opmaak; zonder deze
// twee bestanden staat de schil er kaal bij.
import "@/styles/home-v3.css";
import "@/styles/home-v3-fixes.css";
import "@/styles/realisaties.css";

/** Het icoon per filterknop, in de volgorde van REALISATIE_SOORTEN. */
const SOORT_ICOON = {
  bouwvocht: DropIcon,
  waterschade: ShieldIcon,
  vochtbeheersing: FlowIcon,
} as const;

/**
 * Realisaties — overgenomen van de gelijknamige pagina op
 * vernast-vochtbestrijding.be: rode kop, zijfilter met tellers, sticky
 * offerte-kaart en het kaartenraster. De markup en maten staan in
 * src/styles/realisaties.css, gescoped onder `.rz-page`.
 *
 * Eén verschil met de bron, en dat is inhoudelijk onvermijdelijk: daar filtert
 * de zijbalk op dienst (opstijgend vocht / kelderbekuiping / bouwdroging).
 * Hier is élk project bouwdroging, dus zo'n filter zou één knop met alle 22
 * projecten opleveren. De filter houdt dezelfde vorm maar deelt in op waar het
 * vocht vandaan kwam.
 */

const isSoort = (w: string | null): w is RealisatieSoort =>
  REALISATIE_SOORTEN.some((s) => s.key === w);

const COPY = {
  nl: {
    crumb: "Realisaties",
    lijstNaam: "Uitgevoerde droogprojecten",
    eyebrow: "Onze realisaties",
    h1: "Echte werven, echte resultaten",
    intro: (
      <>
        Bekijk onze afgewerkte projecten: bouwvocht na pleister- en chapewerken, waterschade na
        een lek en ruimtes die te vochtig stonden. Elk project toont het probleem, de aanpak en
        het resultaat, met de foto&apos;s van de werf zelf.
      </>
    ),
    filter: "Filter op soort werk",
    alle: "Alle projecten",
    ctaH2: "Zelf vocht weg te krijgen?",
    ctaP: (
      <>
        Bereken in vijf vragen welke toestellen u nodig heeft, met de droogtijd en de prijs
        erbij. Vrijblijvend.
      </>
    ),
    ctaKnop: "Bereken uw droogpakket",
    project: "project",
    projecten: "projecten",
    bekijk: "Bekijk project",
  },
  fr: {
    crumb: "Réalisations",
    lijstNaam: "Projets de séchage réalisés",
    eyebrow: "Nos réalisations",
    h1: "De vrais chantiers, de vrais résultats",
    intro: (
      <>
        Découvrez nos projets terminés : humidité de construction après des travaux de plafonnage
        et de chape, dégâts des eaux après une fuite et des pièces trop humides. Chaque projet
        montre le problème, l&apos;approche et le résultat, avec les photos du chantier lui-même.
      </>
    ),
    filter: "Filtrer par type de travaux",
    alle: "Tous les projets",
    ctaH2: "De l'humidité à éliminer vous-même ?",
    ctaP: (
      <>
        Calculez en cinq questions les appareils dont vous avez besoin, avec la durée de séchage et
        le prix. Sans engagement.
      </>
    ),
    ctaKnop: "Calculez votre pack de séchage",
    project: "projet",
    projecten: "projets",
    bekijk: "Voir le projet",
  },
  en: {
    crumb: "Projects",
    lijstNaam: "Completed drying projects",
    eyebrow: "Our projects",
    h1: "Real sites, real results",
    intro: (
      <>
        Take a look at our completed projects: construction moisture after plastering and screed
        work, water damage after a leak and rooms that were too damp. Each project shows the
        problem, the approach and the result, with photos from the site itself.
      </>
    ),
    filter: "Filter by type of work",
    alle: "All projects",
    ctaH2: "Got moisture to get rid of yourself?",
    ctaP: (
      <>
        Work out in five questions which machines you need, with the drying time and the price
        included. No obligation.
      </>
    ),
    ctaKnop: "Calculate your drying package",
    project: "project",
    projecten: "projects",
    bekijk: "View project",
  },
} satisfies Copy<{
  crumb: string;
  lijstNaam: string;
  eyebrow: string;
  h1: string;
  intro: ReactNode;
  filter: string;
  alle: string;
  ctaH2: string;
  ctaP: ReactNode;
  ctaKnop: string;
  project: string;
  projecten: string;
  bekijk: string;
}>;

/*
  De Franse en Engelse projectteksten laden pas op een route in die taal en
  schorsen tot ze er zijn (zie `realisatiesInTaal.ts`); deze grens vangt dat
  op. Het Nederlands schorst nooit.
*/
const RealisatiesPage = () => (
  <Suspense fallback={null}>
    <Overzicht />
  </Suspense>
);

const Overzicht = () => {
  const taal = useTaal();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const seo = useSeo("realisaties");
  const REALISATIES = realisatiesInTaal(taal);
  const soorten = realisatieSoortenInTaal(taal);
  const telPerSoort = (soort: RealisatieSoort) => REALISATIES.filter((r) => r.soort === soort).length;

  /*
    De keuze staat in de URL, niet in een useState: een doorgestuurde
    ?soort=waterschade toont dan ook waterschade, en de terugknop van de
    browser doet wat hij hoort te doen. De pagina blijft één geprerenderde
    route — ?soort= is een parameter, geen tweede HTML-bestand.
  */
  const [params, setParams] = useSearchParams();
  const ruw = params.get("soort");
  const gekozen = isSoort(ruw) ? ruw : null;

  const zichtbaar = gekozen ? REALISATIES.filter((r) => r.soort === gekozen) : REALISATIES;

  const kies = (soort: RealisatieSoort | null) => {
    const volgende = new URLSearchParams(params);
    if (soort) volgende.set("soort", soort);
    else volgende.delete("soort");
    setParams(volgende, { replace: true });
  };

  return (
    <div className="v3 rz-page">
      <PageMeta
        {...seo}
        path={lp("/realisaties")}
        image={REALISATIES[0].kaart}
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: lp("/") },
            { name: t.crumb, path: lp("/realisaties") },
          ]),
          itemListSchema(
            t.lijstNaam,
            REALISATIES.map((r) => ({ name: r.titel, path: lp(`/realisaties/${r.slug}`) }))
          ),
        ]}
      />
      <V3Header />

      <main>
        <section className="section tech-section" style={{ padding: "170px 0 90px" }}>
          <div className="rz-wrap">
            <div className="shead center on-red" style={{ marginBottom: 0 }}>
              <span className="eyebrow center">{t.eyebrow}</span>
              <h1>{t.h1}</h1>
              <p>{t.intro}</p>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "#f4f4f4" }}>
          <div className="rz-wrap">
            <div className="rl-layout">
              <aside className="rl-side">
                <div className="rl-filter">
                  <div className="tt">{t.filter}</div>
                  <div className="fl" role="group" aria-label={t.filter}>
                    <button type="button" className={gekozen === null ? "on" : undefined} aria-pressed={gekozen === null} onClick={() => kies(null)}>
                      <GridIcon />
                      {t.alle}
                      <span className="n">{REALISATIES.length}</span>
                    </button>
                    {soorten.map((s) => {
                      const Icoon = SOORT_ICOON[s.key];
                      return (
                        <button key={s.key} type="button" className={gekozen === s.key ? "on" : undefined} aria-pressed={gekozen === s.key} onClick={() => kies(s.key)}>
                          <Icoon />
                          {s.label}
                          <span className="n">{telPerSoort(s.key)}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="rl-cta">
                  <h2>{t.ctaH2}</h2>
                  <p>{t.ctaP}</p>
                  <Link className="rz-btn rz-btn-white" to={lp("/verhuur/simulator")}>
                    {t.ctaKnop}
                  </Link>
                </div>
              </aside>

              <div>
                <p className="rl-count">
                  {zichtbaar.length} {zichtbaar.length === 1 ? t.project : t.projecten}
                </p>
                <div className="rl-grid">
                  {zichtbaar.map((r, i) => (
                    <article className="rl-card" key={r.slug}>
                      <Link to={lp(`/realisaties/${r.slug}`)} aria-label={r.titel}>
                        <img src={r.kaart} alt={r.kaartAlt} loading={i < 3 ? "eager" : "lazy"} width={800} height={600} />
                      </Link>
                      <div className="rl-body">
                        <div className="rl-chips">
                          <span className="rl-chip">{r.chip}</span>
                        </div>
                        <h3>
                          <Link to={lp(`/realisaties/${r.slug}`)}>{r.titel}</Link>
                        </h3>
                        <Link className="rl-go" to={lp(`/realisaties/${r.slug}`)}>
                          {t.bekijk} <ArrowRight />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <V3Footer />
    </div>
  );
};

export default RealisatiesPage;

import { Link, useSearchParams } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { SEO } from "@/data/seo";
import {
  REALISATIES,
  REALISATIE_SOORTEN,
  telPerSoort,
  type RealisatieSoort,
} from "@/data/realisaties";
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

const RealisatiesPage = () => {
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
        {...SEO.realisaties}
        path="/realisaties"
        image={REALISATIES[0].kaart}
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
      <V3Header />

      <main>
        <section className="section tech-section" style={{ padding: "170px 0 90px" }}>
          <div className="rz-wrap">
            <div className="shead center on-red" style={{ marginBottom: 0 }}>
              <span className="eyebrow center">Onze realisaties</span>
              <h1>Echte werven, echte resultaten</h1>
              <p>
                Bekijk onze afgewerkte projecten: bouwvocht na pleister- en chapewerken, waterschade na
                een lek en ruimtes die te vochtig stonden. Elk project toont het probleem, de aanpak en
                het resultaat, met de foto&apos;s van de werf zelf.
              </p>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "#f4f4f4" }}>
          <div className="rz-wrap">
            <div className="rl-layout">
              <aside className="rl-side">
                <div className="rl-filter">
                  <div className="tt">Filter op soort werk</div>
                  <div className="fl" role="group" aria-label="Filter op soort werk">
                    <button type="button" className={gekozen === null ? "on" : undefined} aria-pressed={gekozen === null} onClick={() => kies(null)}>
                      <GridIcon />
                      Alle projecten
                      <span className="n">{REALISATIES.length}</span>
                    </button>
                    {REALISATIE_SOORTEN.map((s) => {
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
                  <h2>Zelf vocht weg te krijgen?</h2>
                  <p>
                    Bereken in vijf vragen welke toestellen u nodig heeft, met de droogtijd en de prijs
                    erbij. Vrijblijvend.
                  </p>
                  <Link className="rz-btn rz-btn-white" to="/verhuur/calculator">
                    Bereken uw droogpakket
                  </Link>
                </div>
              </aside>

              <div>
                <p className="rl-count">
                  {zichtbaar.length} {zichtbaar.length === 1 ? "project" : "projecten"}
                </p>
                <div className="rl-grid">
                  {zichtbaar.map((r, i) => (
                    <article className="rl-card" key={r.slug}>
                      <Link to={`/realisaties/${r.slug}`} aria-label={r.titel}>
                        <img src={r.kaart} alt={r.kaartAlt} loading={i < 3 ? "eager" : "lazy"} width={800} height={600} />
                      </Link>
                      <div className="rl-body">
                        <div className="rl-chips">
                          <span className="rl-chip">{r.chip}</span>
                        </div>
                        <h3>
                          <Link to={`/realisaties/${r.slug}`}>{r.titel}</Link>
                        </h3>
                        <Link className="rl-go" to={`/realisaties/${r.slug}`}>
                          Bekijk project <ArrowRight />
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

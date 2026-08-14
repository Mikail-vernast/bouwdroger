import { Link, useNavigate, useParams } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { breadcrumbSchema } from "@/lib/schema";
import { SEO } from "@/data/seo";
import {
  REALISATIES,
  getRealisatie,
  realisatieMeta,
  type Realisatie,
} from "@/data/realisaties";
import RealisatieAlbum from "@/components/realisaties/RealisatieAlbum";
import { ArrowRight, DryIcon, HouseIcon, MeasureIcon, PinIcon, XIcon } from "@/components/realisaties/icons";
// De gedeelde <V3Header>/<V3Footer> dragen hun eigen opmaak; zonder deze
// twee bestanden staat de schil er kaal bij.
import "@/styles/home-v3.css";
import "@/styles/home-v3-fixes.css";
import "@/styles/realisaties.css";

/**
 * Eén uitgevoerd project, overgenomen van vernast-vochtbestrijding.be: rode
 * hero met kruimelpad en tags, de feitenbalk die half in die hero hangt, het
 * verhaal met de sticky projectfiche ernaast, de fotoreportage en tot slot
 * drie andere realisaties.
 */

/** De hero-tags dragen elk hun eigen tekening; op volgorde toegekend. */
const TAG_ICONEN = [DryIcon, MeasureIcon, HouseIcon];

/**
 * Een alinea uit het projectverhaal. De bron zet de stapnamen vet ("<b>Analyse
 * en droogplan (24 u).</b> We brachten…"), dus die opmaak moet mee.
 *
 * De tekst komt uit `src/data/realisaties.ts`, dat bij de overname gegenereerd
 * is en waarin de extractie alles behalve b/strong/em/i al heeft weggegooid —
 * er is geen weg waarlangs invoer van buiten hier binnenkomt. Deze tweede
 * filter staat er omdat dat pas geldt zolang niemand die datafile met de hand
 * bewerkt: alles wat geen van die vier tags is, gaat er hier alsnog uit.
 */
const TOEGESTAAN = /<(?!\/?(b|strong|em|i)>)[^>]*>/g;

const Alinea = ({ html }: { html: string }) => (
  <p dangerouslySetInnerHTML={{ __html: html.replace(TOEGESTAAN, "") }} />
);

const NietGevonden = () => {
  const navigate = useNavigate();
  return (
    <div className="v3 rz-page">
      <PageMeta {...SEO.notFound} />
      <V3Header />
      <div className="rz-wrap" style={{ padding: "160px 0 120px", textAlign: "center" }}>
        <h1 style={{ fontSize: 28, marginBottom: 16 }}>Project niet gevonden</h1>
        <button type="button" className="rz-btn rz-btn-red" onClick={() => navigate("/realisaties")}>
          Terug naar de realisaties
        </button>
      </div>
      <V3Footer />
    </div>
  );
};

const RealisatieDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getRealisatie(slug) : undefined;
  if (!project) return <NietGevonden />;

  // De bron kiest zelf drie verwante projecten; wat daar niet bij hoort (de
  // kelder- en injectieprojecten) valt hier weg, dus vullen we aan met de
  // buren uit de lijst.
  const meer: Realisatie[] = [
    ...project.meer.slugs.map((s) => getRealisatie(s)).filter((r): r is Realisatie => !!r && r.slug !== project.slug),
    ...REALISATIES.filter((r) => r.slug !== project.slug),
  ]
    .filter((r, i, lijst) => lijst.findIndex((x) => x.slug === r.slug) === i)
    .slice(0, 3);

  return (
    <div className="v3 rz-page">
      <PageMeta
        {...realisatieMeta(project)}
        path={`/realisaties/${project.slug}`}
        image={project.hero}
        ogType="article"
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Realisaties", path: "/realisaties" },
          { name: project.titel, path: `/realisaties/${project.slug}` },
        ])}
      />
      <V3Header />

      <main>
        <section className="rz-hero">
          <div className="rz-wrap">
            <nav className="rz-crumb" aria-label="Kruimelpad">
              <Link to="/">Home</Link>
              <span className="sep">›</span>
              <Link to="/realisaties">Realisaties</Link>
              <span className="sep">›</span>
              <span className="cur">{project.titel}</span>
            </nav>

            <div className="rz-head">
              <div>
                <div className="rz-tags">
                  {project.tags.map((t, i) => {
                    const Icoon = TAG_ICONEN[i] ?? DryIcon;
                    return (
                      <span className="rz-tag" key={t}>
                        <Icoon /> {t}
                      </span>
                    );
                  })}
                </div>
                <h1>{project.titel}</h1>
                <span className="rz-loc">
                  <PinIcon /> {project.locatie}
                </span>
              </div>
              <p className="rz-lede">{project.lede}</p>
            </div>

            {/* Het LCP-element van deze pagina: eager, niet lazy. */}
            <div className="rz-hero-media">
              <img src={project.hero} alt={project.heroAlt} loading="eager" width={1300} height={975} />
            </div>
          </div>
        </section>

        <section className="rz-facts-band">
          <div className="rz-wrap">
            <div className="rz-facts">
              {project.facts.map((f) => (
                <div className="rz-fact" key={f.label}>
                  <div className="k">{f.label}</div>
                  <div className="v">
                    {f.waarde}
                    {f.detail && <small>{f.detail}</small>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="rz-wrap">
            <div className="rz-grid">
              <div className="rz-body">
                <span className="eyebrow">{project.verhaal.eyebrow}</span>
                <h2>{project.verhaal.kop}</h2>
                <p className="lead">{project.verhaal.lead}</p>

                <ul className="rz-problems">
                  {project.verhaal.problemen.map((p) => (
                    <li key={p}>
                      <span className="x">
                        <XIcon />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>

                {project.verhaal.blokken.map((b) => (
                  <div key={b.kop}>
                    <h3>{b.kop}</h3>
                    {b.alineas.map((a, i) => (
                      <Alinea html={a} key={i} />
                    ))}
                  </div>
                ))}

                <div className="svc-link">
                  <Link to="/verhuur/calculator">
                    <DryIcon /> Bereken uw droogpakket
                  </Link>
                  <Link to="/machines">
                    <HouseIcon /> Ons gamma toestellen
                  </Link>
                </div>
              </div>

              <aside className="rz-meta">
                <h4>Projectfiche</h4>
                <dl>
                  {project.fiche.map((f) => (
                    <div className="rz-mrow" key={f.label}>
                      <dt>{f.label}</dt>
                      <dd>{f.waarde}</dd>
                    </div>
                  ))}
                </dl>
                <Link className="rz-btn rz-btn-red" to="/contact">
                  Vraag een droogplan aan <ArrowRight className="arr" />
                </Link>
                <p className="m-note">Vrijblijvend, met een vaste prijs vooraf.</p>
              </aside>
            </div>
          </div>
        </section>

        <section className="section tech-section">
          <div className="rz-wrap">
            <div className="shead center on-red">
              <span className="eyebrow center">{project.album.eyebrow}</span>
              <h2>{project.album.kop}</h2>
              <p>{project.album.intro}</p>
            </div>
            <RealisatieAlbum fotos={project.album.fotos} titel={project.titel} />
          </div>
        </section>

        <section className="section rz-result">
          <div className="rz-wrap">
            <div className="shead center">
              <span className="eyebrow center">{project.resultaat.eyebrow}</span>
              <h2>{project.resultaat.kop}</h2>
            </div>
            <div className="zlead" style={{ marginTop: 44 }}>
              <div className="two">
                {project.resultaat.kolommen.map((k) => (
                  <div className="zc" key={k.label}>
                    <div className="k">{k.label}</div>
                    <h3>{k.kop}</h3>
                    <p>{k.tekst}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section tech-section">
          <div className="rz-wrap">
            <div className="shead center on-red">
              <span className="eyebrow center">{project.meer.eyebrow}</span>
              <h2>{project.meer.kop}</h2>
              <p>{project.meer.intro}</p>
            </div>
            <div className="rel-grid">
              {meer.map((r) => (
                <Link className="rel-card" to={`/realisaties/${r.slug}`} key={r.slug}>
                  <img src={r.kaart} alt={r.kaartAlt} loading="lazy" width={800} height={600} />
                  <div className="rc-body">
                    <span className="rc-tag">{r.chip}</span>
                    <h3>{r.titel}</h3>
                    <span className="rc-more">
                      Bekijk project <ArrowRight />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <V3Footer />
    </div>
  );
};

export default RealisatieDetailPage;

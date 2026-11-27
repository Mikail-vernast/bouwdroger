import { Suspense } from "react";
import { naarNl } from "@/i18n/paden";
import { Link, Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { breadcrumbSchema } from "@/lib/schema";
import { useSeo } from "@/data/seo";
import { realisatieMeta, type Realisatie } from "@/data/realisaties";
import { realisatiesInTaal } from "@/data/realisatiesInTaal";
import { useCopy, useLokaalPad, useTaal, type Copy } from "@/i18n/useTaal";
import type { Taal } from "@/i18n/taal";
import { realisatieSlugsIn, regioVanRealisatie } from "@/data/realisatie-regio";
import { REALISATIE_REDIRECTS } from "@/data/realisatie-redirects";
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

const COPY = {
  nl: {
    nietGevonden: "Project niet gevonden",
    terug: "Terug naar de realisaties",
    crumb: "Realisaties",
    kruimelpad: "Kruimelpad",
    bereken: "Bereken uw droogpakket",
    gamma: "Ons gamma toestellen",
    fiche: "Projectfiche",
    droogplan: "Vraag een droogplan aan",
    vrijblijvend: "Vrijblijvend, met een vaste prijs vooraf.",
    bekijk: "Bekijk project",
  },
  fr: {
    nietGevonden: "Projet introuvable",
    terug: "Retour aux réalisations",
    crumb: "Réalisations",
    kruimelpad: "Fil d'Ariane",
    bereken: "Calculez votre pack de séchage",
    gamma: "Notre gamme d'appareils",
    fiche: "Fiche du projet",
    droogplan: "Demandez un plan de séchage",
    vrijblijvend: "Sans engagement, avec un prix fixe connu d'avance.",
    bekijk: "Voir le projet",
  },
  en: {
    nietGevonden: "Project not found",
    terug: "Back to the projects",
    crumb: "Projects",
    kruimelpad: "Breadcrumb",
    bereken: "Calculate your drying package",
    gamma: "Our range of machines",
    fiche: "Project details",
    droogplan: "Request a drying plan",
    vrijblijvend: "No obligation, with a fixed price agreed in advance.",
    bekijk: "View project",
  },
} satisfies Copy<Record<string, string>>;

/*
  Het Frans kent geen neutraal "in": à Bruxelles, en Flandre orientale, dans le
  Limbourg. De regio's met een eigen werf staan hier; een andere valt terug op
  een vorm zonder voorzetsel.
*/
const VOORZETSEL_FR: Record<string, string> = {
  antwerpen: "dans la province d'Anvers",
  "oost-vlaanderen": "en Flandre orientale",
  "west-vlaanderen": "en Flandre occidentale",
  "vlaams-brabant": "en Brabant flamand",
  brussel: "à Bruxelles",
  limburg: "dans le Limbourg",
};

const regioLinkFr = (regio: { slug: string; name: string; nameFr?: string }) =>
  VOORZETSEL_FR[regio.slug]
    ? `Louer un déshumidificateur de chantier ${VOORZETSEL_FR[regio.slug]}`
    : `Location de déshumidificateurs de chantier · ${regio.nameFr ?? regio.name}`;

/* Engelse exoniemen voor de regio's met een eigen werf (docs/vertalen.md). */
const REGIO_EN: Record<string, string> = {
  antwerpen: "the province of Antwerp",
  "oost-vlaanderen": "East Flanders",
  "west-vlaanderen": "West Flanders",
  "vlaams-brabant": "Flemish Brabant",
  brussel: "Brussels",
  limburg: "Limburg",
};

const regioLink = (regio: { slug: string; name: string; nameFr?: string }, taal: Taal) => {
  if (taal === "fr") return regioLinkFr(regio);
  if (taal === "en") return `Construction dehumidifier hire in ${REGIO_EN[regio.slug] ?? regio.name}`;
  return `Bouwdroger huren in ${regio.name}`;
};

const NietGevonden = () => {
  const navigate = useNavigate();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  return (
    <div className="v3 rz-page">
      <PageMeta {...useSeo("notFound")} />
      <V3Header />
      <div className="rz-wrap" style={{ padding: "160px 0 120px", textAlign: "center" }}>
        <h1 style={{ fontSize: 28, marginBottom: 16 }}>{t.nietGevonden}</h1>
        <button type="button" className="rz-btn rz-btn-red" onClick={() => navigate(lp("/realisaties"))}>
          {t.terug}
        </button>
      </div>
      <V3Footer />
    </div>
  );
};

/*
  De Franse en Engelse projectteksten laden pas op een route in die taal en
  schorsen tot ze er zijn (zie `realisatiesInTaal.ts`); deze grens vangt dat op.
*/
const RealisatieDetailPage = () => (
  <Suspense fallback={null}>
    <Project />
  </Suspense>
);

const Project = () => {
  const { slug: urlSlug } = useParams<{ slug: string }>();
  const { pathname, search, hash } = useLocation();
  // In het Frans en Engels staat een vertaalde slug in de URL; de data kent
  // alleen de Nederlandse. `naarNl` vertaalt terug via REALISATIE_SLUG_VERTAALD.
  const slug = naarNl(pathname)?.split("/").pop() || urlSlug;
  const taal = useTaal();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const nieuweSlug = slug ? REALISATIE_REDIRECTS[slug] : undefined;
  // Vite en navigatie binnen de app passeren de serverredirects niet.
  if (nieuweSlug) {
    return <Navigate replace to={`${lp(`/realisaties/${nieuweSlug}`)}${search}${hash}`} />;
  }
  const REALISATIES = realisatiesInTaal(taal);
  const getRealisatie = (s: string) => REALISATIES.find((r) => r.slug === s);
  const project = slug ? getRealisatie(slug) : undefined;
  if (!project) return <NietGevonden />;

  // De bron kiest zelf drie verwante projecten; wat daar niet bij hoort (de
  // kelder- en injectieprojecten) valt hier weg, dus vullen we aan met de
  // buren uit de lijst.
  // Werven uit dezelfde provincie gaan voor: zo linken de realisaties van één
  // regio naar elkaar en terug naar hun regiopagina (indexatie, 03-11-2026).
  const regio = regioVanRealisatie(project.slug);
  // Begin bij de werf ná deze en draai rond: anders wijzen alle negen
  // Antwerpse werven naar dezelfde eerste drie, en krijgt de rest niets.
  const inRegio = regio ? realisatieSlugsIn(regio.slug) : [];
  const plek = inRegio.indexOf(project.slug);
  const buren = [...inRegio.slice(plek + 1), ...inRegio.slice(0, plek)];
  const meer: Realisatie[] = [
    ...buren.map((s) => getRealisatie(s)).filter((r): r is Realisatie => !!r && r.slug !== project.slug),
    ...project.meer.slugs.map((s) => getRealisatie(s)).filter((r): r is Realisatie => !!r && r.slug !== project.slug),
    ...REALISATIES.filter((r) => r.slug !== project.slug),
  ]
    .filter((r, i, lijst) => lijst.findIndex((x) => x.slug === r.slug) === i)
    .slice(0, 3);

  return (
    <div className="v3 rz-page">
      <PageMeta
        {...realisatieMeta(project)}
        path={lp(`/realisaties/${project.slug}`)}
        image={project.hero}
        ogType="article"
        jsonLd={breadcrumbSchema([
          { name: "Home", path: lp("/") },
          { name: t.crumb, path: lp("/realisaties") },
          { name: project.titel, path: lp(`/realisaties/${project.slug}`) },
        ])}
      />
      <V3Header />

      <main>
        <section className="rz-hero">
          <div className="rz-wrap">
            <nav className="rz-crumb" aria-label={t.kruimelpad}>
              <Link to={lp("/")}>Home</Link>
              <span className="sep">›</span>
              <Link to={lp("/realisaties")}>{t.crumb}</Link>
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
                  {regio && (
                    <>
                      {" · "}
                      <Link to={lp(regio.path)} className="rz-loc-link">
                        {regioLink(regio, taal)}
                      </Link>
                    </>
                  )}
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
                  <Link to={lp("/verhuur/simulator")}>
                    <DryIcon /> {t.bereken}
                  </Link>
                  <Link to={lp("/machines")}>
                    <HouseIcon /> {t.gamma}
                  </Link>
                </div>
              </div>

              <aside className="rz-meta">
                <h4>{t.fiche}</h4>
                <dl>
                  {project.fiche.map((f) => (
                    <div className="rz-mrow" key={f.label}>
                      <dt>{f.label}</dt>
                      <dd>{f.waarde}</dd>
                    </div>
                  ))}
                </dl>
                <Link className="rz-btn rz-btn-red" to={lp("/contact")}>
                  {t.droogplan} <ArrowRight className="arr" />
                </Link>
                <p className="m-note">{t.vrijblijvend}</p>
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
                <Link className="rel-card" to={lp(`/realisaties/${r.slug}`)} key={r.slug}>
                  <img src={r.kaart} alt={r.kaartAlt} loading="lazy" width={800} height={600} />
                  <div className="rc-body">
                    <span className="rc-tag">{r.chip}</span>
                    <h3>{r.titel}</h3>
                    <span className="rc-more">
                      {t.bekijk} <ArrowRight />
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

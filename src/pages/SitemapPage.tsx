import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import Pad from "@/components/sitemap/Pad";
import { SEO } from "@/data/seo";
import { BLOKKEN, JURIDISCH, LANDEN, REALISATIE_LINKS } from "@/data/sitemap";
import { breadcrumbSchema, itemListSchema, organizationSchema } from "@/lib/schema";
import "@/styles/v3-content.css";
import "@/styles/sitemap.css";

/**
 * De zichtbare sitemap: elke pagina van de site, als mappenboom.
 *
 * sitemap.xml bestaat ook en wordt na de build afgeleid uit dist/ — die is voor
 * zoekmachines. Deze is voor mensen én voor de antwoordmachines die geen
 * JavaScript draaien: één pagina waarop alles in twee klikken bereikbaar is.
 *
 * De site staat er zoals in de adresbalk: elk onderwerp is een map, elke
 * pagina een pad. De naam staat er klein onder, zodat wie het pad niet herkent
 * toch weet waar hij heen klikt. Gekozen op 15-11-2026 uit drie voorstellen;
 * de vorige versie was een tekstlijst met alleen de namen, en las als een
 * technische bijlage in plaats van een pagina van Vernast.
 *
 * De inhoud zelf staat in `src/data/sitemap.ts`.
 */
const Tak = ({ laatste }: { laatste: boolean }) => (
  <span className="sm-tak" aria-hidden="true">{laatste ? "└─" : "├─"}</span>
);

const alles = BLOKKEN.flatMap((b) => b.items);

const SitemapPage = () => (
  <div className="v3c sm-page">
    <PageMeta
      {...SEO.sitemap}
      jsonLd={[
        organizationSchema(),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Sitemap", path: "/sitemap" },
        ]),
        /* De hoofdsecties als lijst: wat een antwoordmachine nodig heeft om
           de site als geheel te begrijpen in plaats van als losse pagina's. */
        itemListSchema(
          "Alle pagina's van Vernast Bouwdrogers",
          alles.map((item) => ({ name: item.label, path: item.path }))
        ),
      ]}
    />
    <V3Header darkUntil=".sm-hero" />

    <main>
      <section className="sm-hero">
        <div className="wrap sm-hero-grid">
          <div className="sm-hero-copy">
            <nav aria-label="Kruimelpad" className="sm-kruimels">
              <Link to="/">Home</Link> <span aria-hidden="true">/</span> <span>Sitemap</span>
            </nav>
            <h1><i>/</i>sitemap</h1>
            <p>
              De hele site als mappenboom. Klik een map om ernaartoe te springen.
            </p>
            <nav className="sm-boom" aria-label="Op deze pagina">
              <span className="sm-wortel">vernast-bouwdrogers.be</span>
              {[
                ...BLOKKEN.map((b) => ({ href: `#${b.id}`, naam: b.titel, n: b.items.length })),
                { href: "#sm-real", naam: "Realisaties", n: REALISATIE_LINKS.length },
                ...LANDEN.map((l) => ({
                  href: `#${l.id}`,
                  naam: l.kort,
                  n: l.gebieden.reduce((s, g) => s + g.aantal, 0),
                })),
              ].map((r, i, arr) => (
                <a key={r.href} href={r.href}>
                  <Tak laatste={i === arr.length - 1} />
                  <span>{r.naam}</span>
                  <small>{r.n}</small>
                </a>
              ))}
            </nav>
          </div>
          <div className="sm-team">
            <img src="/vernast/drie-vakmannen.webp" alt="Drie technici van Vernast in werkoverall" width={1400} height={934} />
          </div>
        </div>
      </section>


      <section className="sm-body">
        <div className="wrap">
          <div className="sm-mappen">
            {BLOKKEN.map((blok) => (
              <nav className="sm-map" id={blok.id} key={blok.id} aria-labelledby={`${blok.id}-k`}>
                <h2 id={`${blok.id}-k`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                  {blok.titel}
                </h2>
                <ul>
                  {blok.items.map((item, i) => (
                    <li key={item.path + item.label}>
                      <Tak laatste={i === blok.items.length - 1} />
                      <Link to={item.path}>
                        <Pad path={item.path} />
                        <small>{item.label}</small>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {/*
            Realisaties en Juridisch als mapkaarten, net als de onderwerpen
            bovenaan. Als losse lijst onder een streep lazen ze als iets anders
            dan de rest van de site, terwijl het gewoon twee mappen meer zijn.
          */}
          <div className="sm-mappen-2">
            <nav className="sm-map sm-map-breed" id="sm-real" aria-labelledby="sm-real-k">
              <h2 id="sm-real-k">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                Realisaties
              </h2>
              <ul>
                {REALISATIE_LINKS.map((item, i, alle) => (
                  <li key={item.path}>
                    <Tak laatste={i === alle.length - 1} />
                    <Link to={item.path}>
                      <Pad path={item.path} />
                      <small>{item.label}</small>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav className="sm-map" id="sm-jur" aria-labelledby="sm-jur-k">
              <h2 id="sm-jur-k">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                Juridisch
              </h2>
              <ul>
                {JURIDISCH.map((item, i, alle) => (
                  <li key={item.path}>
                    <Tak laatste={i === alle.length - 1} />
                    <Link to={item.path}>
                      <Pad path={item.path} />
                      <small>{item.label}</small>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {LANDEN.map((land) => (
            <section className="sm-land" id={land.id} key={land.id} aria-labelledby={`${land.id}-k`}>
              <div className="sm-land-kop">
                <h2 id={`${land.id}-k`}>{land.titel}</h2>
                <span className={land.opAanvraag ? "sm-status uit" : "sm-status"}>
                  {land.opAanvraag ? "op aanvraag" : "levering binnen 24 uur"}
                </span>
              </div>
              <p className="sm-uit">{land.uitleg}</p>
              <div className="sm-provs">
                {land.gebieden.map((g) => (
                  <div className="sm-prov" key={g.sleutel}>
                    <h3>
                      {g.path ? (
                        <Link to={g.path}><Pad path={g.path} stil={false} /></Link>
                      ) : (
                        <span className="pad"><i>~</i> {g.kop}</span>
                      )}
                      <small>{g.path ? g.kop + " · " : ""}{g.aantal} plaatsen</small>
                    </h3>
                    {g.streken.map((s) => (
                      <div className="sm-streek" key={s.naam}>
                        <h4><Tak laatste={false} />{s.naam}</h4>
                        <ul>
                          {s.plaatsen.map((p) => (
                            <li key={p.naam}>
                              {p.path ? <Link to={p.path}>{p.naam}</Link> : <span>{p.naam}</span>}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>

    <V3Footer />
  </div>
);

export default SitemapPage;

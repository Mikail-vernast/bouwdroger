import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { BLOKKEN, JURIDISCH, LANDEN, REALISATIE_LINKS } from "./data";
import Pad from "./Pad";
import "@/styles/v3-content.css";
import "./c.css";

/**
 * TIJDELIJK — ontwerp C: "Mappenboom".
 *
 * Een rode kop zoals de rest van de site, daaronder wit. De site staat er zoals ze in de adresbalk staat:
 * elk onderwerp is een map, elke pagina een pad. De naam staat er klein onder,
 * zodat wie het pad niet herkent toch weet waar hij heen klikt.
 */
const Tak = ({ laatste }: { laatste: boolean }) => (
  <span className="smC-tak" aria-hidden="true">{laatste ? "└─" : "├─"}</span>
);

const OntwerpC = () => (
  <div className="v3c smC">
    <PageMeta title="Sitemap — ontwerp C" description="Ontwerpvoorstel" path="/sitemap-ontwerp/c" noindex />
    <V3Header darkUntil=".smC-hero" />

    <main>
      <section className="smC-hero">
        <div className="wrap smC-hero-grid">
          <div className="smC-hero-copy">
            <nav aria-label="Kruimelpad" className="smC-kruimels">
              <Link to="/">Home</Link> <span aria-hidden="true">/</span> <span>Sitemap</span>
            </nav>
            <h1><i>/</i>sitemap</h1>
            <p>
              De hele site als mappenboom. Klik een map om ernaartoe te springen.
            </p>
            <nav className="smC-boom" aria-label="Op deze pagina">
              <span className="smC-wortel">vernast-bouwdrogers.be</span>
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
          <div className="smC-team">
            <img src="/vernast/drie-vakmannen.webp" alt="Drie technici van Vernast in werkoverall" width={1400} height={934} />
          </div>
        </div>
      </section>


      <section className="smC-body">
        <div className="wrap">
          <div className="smC-mappen">
            {BLOKKEN.map((blok) => (
              <nav className="smC-map" id={blok.id} key={blok.id} aria-labelledby={`${blok.id}-k`}>
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
          <div className="smC-mappen-2">
            <nav className="smC-map smC-map-breed" id="sm-real" aria-labelledby="sm-real-k">
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
            <nav className="smC-map" id="sm-jur" aria-labelledby="sm-jur-k">
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
            <section className="smC-land" id={land.id} key={land.id} aria-labelledby={`${land.id}-k`}>
              <div className="smC-land-kop">
                <h2 id={`${land.id}-k`}>{land.titel}</h2>
                <span className={land.opAanvraag ? "smC-status uit" : "smC-status"}>
                  {land.opAanvraag ? "op aanvraag" : "levering binnen 24 uur"}
                </span>
              </div>
              <p className="smC-uit">{land.uitleg}</p>
              <div className="smC-provs">
                {land.gebieden.map((g) => (
                  <div className="smC-prov" key={g.sleutel}>
                    <h3>
                      {g.path ? (
                        <Link to={g.path}><Pad path={g.path} stil={false} /></Link>
                      ) : (
                        <span className="pad"><i>~</i> {g.kop}</span>
                      )}
                      <small>{g.path ? g.kop + " · " : ""}{g.aantal} plaatsen</small>
                    </h3>
                    {g.streken.map((s) => (
                      <div className="smC-streek" key={s.naam}>
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

export default OntwerpC;

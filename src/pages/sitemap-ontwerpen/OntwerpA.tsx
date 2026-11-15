import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { BLOKKEN, JURIDISCH, LANDEN, REALISATIE_LINKS } from "./data";
import Pad from "./Pad";
import "@/styles/v3-content.css";
import "./a.css";

/**
 * TIJDELIJK — ontwerp A: "Inhoudsopgave".
 *
 * De rode band van de site met het team erin, daaronder een vaste inhoudsopgave
 * links die meescrolt. Elke link staat als regel: naam links, het pad rechts,
 * zoals een register achteraan een boek.
 */
const OntwerpA = () => (
  <div className="v3c smA">
    <PageMeta title="Sitemap — ontwerp A" description="Ontwerpvoorstel" path="/sitemap-ontwerp/a" noindex />
    <V3Header darkUntil=".smA-hero" />

    <main>
      <section className="smA-hero">
        <div className="wrap smA-hero-grid">
          <div className="smA-hero-copy">
            <nav aria-label="Kruimelpad" className="smA-kruimels">
              <Link to="/">Home</Link> <span aria-hidden="true">/</span> <span>Sitemap</span>
            </nav>
            <span className="smA-kick">Alle pagina's</span>
            <h1>Sitemap</h1>
            <p>
              Elke pagina van vernast-bouwdrogers.be op één rij, gegroepeerd per onderwerp. Zoekt u
              een toestel, een gids of uw gemeente, dan staat het hieronder.
            </p>
            {/* In plaats van tellers: wie op de sitemap belandt, zoekt iets. De
                twee kortste wegen naar een antwoord staan dus meteen in de kop. */}
            <div className="smA-acties">
              <Link className="btn btn-white" to="/verhuur/calculator">Bereken uw droogpakket</Link>
              <a className="btn btn-ghost" href="tel:+3236899065">Bel 03 689 90 65</a>
            </div>
          </div>
          <div className="smA-team">
            <img
              src="/vernast/drie-vakmannen.webp"
              alt="Drie technici van Vernast in werkoverall"
              width={1400}
              height={934}
            />
          </div>
        </div>
      </section>

      <div className="wrap smA-body">
        <aside className="smA-toc" aria-label="Op deze pagina">
          <span className="smA-toc-kop">Op deze pagina</span>
          <ol>
            {BLOKKEN.map((b) => (
              <li key={b.id}>
                <a href={`#${b.id}`}>{b.titel}<span>{b.items.length}</span></a>
              </li>
            ))}
            {LANDEN.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`}>
                  {l.kort}
                  <span>{l.gebieden.reduce((n, g) => n + g.aantal, 0)}</span>
                </a>
              </li>
            ))}
            <li><a href="#sm-real">Realisaties<span>{REALISATIE_LINKS.length}</span></a></li>
            <li><a href="#sm-jur">Juridisch<span>{JURIDISCH.length}</span></a></li>
          </ol>
          <a className="smA-toc-cta" href="tel:+3236899065">Niet gevonden? 03 689 90 65</a>
        </aside>

        <div className="smA-inhoud">
          {BLOKKEN.map((blok, i) => (
            <section className="smA-sectie" id={blok.id} key={blok.id}>
              <header>
                <span className="smA-nr">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2>{blok.titel}</h2>
                  {blok.uitleg && <p>{blok.uitleg}</p>}
                </div>
              </header>
              <ul className="smA-register">
                {blok.items.map((item) => (
                  <li key={item.path + item.label}>
                    <Link to={item.path}>
                      <span className="smA-naam">{item.label}</span>
                      <span className="smA-stip" aria-hidden="true" />
                      <Pad path={item.path} />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {LANDEN.map((land) => (
            <section className="smA-sectie" id={land.id} key={land.id}>
              <header>
                <span className={`smA-nr${land.opAanvraag ? " smA-nr-grijs" : ""}`}>
                  {land.opAanvraag ? "OA" : "24u"}
                </span>
                <div>
                  <h2>{land.titel}</h2>
                  <p>{land.uitleg}</p>
                </div>
              </header>
              {land.gebieden.map((g) => (
                <div className="smA-prov" key={g.sleutel}>
                  <h3>
                    {g.path ? (
                      <Link to={g.path}>
                        {land.opAanvraag ? g.kop : `Bouwdroger huren in ${g.kop}`}
                        <Pad path={g.path} />
                      </Link>
                    ) : (
                      <span>{g.kop}</span>
                    )}
                    <small>{g.aantal} plaatsen</small>
                  </h3>
                  <div className="smA-streken">
                    {g.streken.map((s) => (
                      <div className="smA-streek" key={s.naam}>
                        <h4>{s.naam}</h4>
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
                </div>
              ))}
            </section>
          ))}

          <section className="smA-sectie" id="sm-real">
            <header>
              <span className="smA-nr">✓</span>
              <div>
                <h2>Realisaties</h2>
                <p>Werven die we hebben gedroogd, met de cijfers erbij.</p>
              </div>
            </header>
            <ul className="smA-register">
              {REALISATIE_LINKS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>
                    <span className="smA-naam">{item.label}</span>
                    <span className="smA-stip" aria-hidden="true" />
                    <Pad path={item.path} />
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="smA-sectie smA-klein" id="sm-jur">
            <header>
              <span className="smA-nr">§</span>
              <div><h2>Juridisch</h2></div>
            </header>
            <ul className="smA-register">
              {JURIDISCH.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>
                    <span className="smA-naam">{item.label}</span>
                    <span className="smA-stip" aria-hidden="true" />
                    <Pad path={item.path} />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>

    <V3Footer />
  </div>
);

export default OntwerpA;

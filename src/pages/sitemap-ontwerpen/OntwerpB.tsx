import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { BLOKKEN, JURIDISCH, LANDEN, REALISATIE_LINKS } from "./data";
import Pad from "./Pad";
import "@/styles/v3-content.css";
import "./b.css";

/**
 * TIJDELIJK — ontwerp B: "Zoeken en kaarten".
 *
 * Licht. De kop is een zoekveld dat de hele pagina filtert, ook de plaatsen;
 * het team staat uit een rood paneel. De onderwerpen zijn kaarten, het
 * werkgebied klapt per provincie open met de plaatsen als knopjes.
 *
 * Alles staat in de HTML, ook wat dichtgeklapt is: <details> laat de inhoud
 * in het document staan, dus een antwoordmachine leest het gewoon.
 */
const norm = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

const OntwerpB = () => {
  const [q, setQ] = useState("");
  const zoek = norm(q.trim());
  const raak = (...teksten: string[]) => !zoek || teksten.some((t) => norm(t).includes(zoek));

  const blokken = useMemo(
    () =>
      BLOKKEN.map((b) => ({ ...b, items: b.items.filter((i) => raak(i.label, i.path, b.titel)) })).filter(
        (b) => b.items.length
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [zoek]
  );
  const landen = useMemo(
    () =>
      LANDEN.map((l) => ({
        ...l,
        gebieden: l.gebieden
          .map((g) => ({
            ...g,
            streken: g.streken
              .map((s) => ({
                ...s,
                plaatsen: s.plaatsen.filter((p) => raak(p.naam, g.kop, s.naam, p.path ?? "")),
              }))
              .filter((s) => s.plaatsen.length),
          }))
          .filter((g) => g.streken.length),
      })).filter((l) => l.gebieden.length),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [zoek]
  );
  const realisaties = REALISATIE_LINKS.filter((i) => raak(i.label, i.path));
  const niets = !blokken.length && !landen.length && !realisaties.length;

  return (
    <div className="v3c smB">
      <PageMeta title="Sitemap — ontwerp B" description="Ontwerpvoorstel" path="/sitemap-ontwerp/b" noindex />
      <V3Header darkUntil=".smB-hero" />

      <main>
        <section className="smB-hero">
          <div className="wrap smB-hero-grid">
            <div className="smB-hero-copy">
              <nav aria-label="Kruimelpad" className="smB-kruimels">
                <Link to="/">Home</Link> <span aria-hidden="true">/</span> <span>Sitemap</span>
              </nav>
              <span className="smB-kick">Sitemap</span>
              <h1>Waar wilt u naartoe?</h1>
              <p>
                Typ een toestel, een onderwerp of uw gemeente. Of blader hieronder: elke pagina van
                de site staat er, gegroepeerd per onderwerp.
              </p>
              <label className="smB-zoek">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Bv. chape, 70 liter of Mechelen"
                  aria-label="Zoek een pagina of gemeente"
                />
                {q && (
                  <button type="button" onClick={() => setQ("")} aria-label="Wis zoekopdracht">×</button>
                )}
              </label>
              <div className="smB-snel">
                {BLOKKEN.slice(0, 4).map((b) => (
                  <a key={b.id} href={`#${b.id}`}>{b.titel}</a>
                ))}
                <a href="#sm-werkgebied">Uw gemeente</a>
              </div>
            </div>
            <div className="smB-paneel">
              <img src="/vernast/drie-vakmannen.webp" alt="Drie technici van Vernast in werkoverall" width={1400} height={934} />
              <a className="smB-stempel smB-stempel-1" href="tel:+3236899065"><b>03 689 90 65</b>Niet gevonden? Wij zoeken mee</a>
              <div className="smB-stempel smB-stempel-2"><b>24 u</b>geleverd in Vlaanderen</div>
            </div>
          </div>
        </section>

        <section className="smB-body">
          <div className="wrap">
            {niets && (
              <div className="smB-niets">
                Niets gevonden voor “{q}”. Bel ons op <a href="tel:+3236899065">03 689 90 65</a>, we
                zeggen meteen of we bij u komen.
              </div>
            )}

            {blokken.length > 0 && (
              <div className="smB-kaarten">
                {blokken.map((blok) => (
                  <nav className="smB-kaart" id={blok.id} key={blok.id} aria-labelledby={`${blok.id}-k`}>
                    <h2 id={`${blok.id}-k`}>{blok.titel}<span>{blok.items.length}</span></h2>
                    {blok.uitleg && <p>{blok.uitleg}</p>}
                    <ul>
                      {blok.items.map((item) => (
                        <li key={item.path + item.label}>
                          <Link to={item.path}>
                            <span className="smB-label">{item.label}</span>
                            <Pad path={item.path} />
                            <svg className="smB-pijl" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                ))}
              </div>
            )}

            {landen.length > 0 && (
              <section className="smB-werk" id="sm-werkgebied" aria-labelledby="sm-werk-k">
                <div className="smB-werk-kop">
                  <h2 id="sm-werk-k">Ons werkgebied</h2>
                  <p>Klik een provincie open. Een plaats met een rode rand heeft haar eigen pagina.</p>
                </div>
                {landen.map((land) => (
                  <div className="smB-land" id={land.id} key={land.id}>
                    <h3>
                      {land.titel}
                      <span className={land.opAanvraag ? "smB-tag grijs" : "smB-tag"}>
                        {land.opAanvraag ? "Op aanvraag" : "Binnen 24 uur"}
                      </span>
                    </h3>
                    {land.gebieden.map((g) => (
                      <details className="smB-prov" key={g.sleutel} open={!!zoek}>
                        <summary>
                          <span className="smB-prov-naam">{g.kop}</span>
                          {g.path && <Pad path={g.path} />}
                          <span className="smB-prov-n">{g.aantal} plaatsen</span>
                        </summary>
                        <div className="smB-prov-in">
                          {g.path && (
                            <Link className="smB-prov-link" to={g.path}>
                              Naar de pagina van {g.kop} →
                            </Link>
                          )}
                          {g.streken.map((s) => (
                            <div className="smB-streek" key={s.naam}>
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
                      </details>
                    ))}
                  </div>
                ))}
              </section>
            )}

            {realisaties.length > 0 && (
              <nav className="smB-real" aria-labelledby="sm-real-k">
                <h2 id="sm-real-k">Realisaties</h2>
                <ul>
                  {realisaties.map((item) => (
                    <li key={item.path}>
                      <Link to={item.path}>
                        <span>{item.label}</span>
                        <Pad path={item.path} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            <nav className="smB-jur" aria-label="Juridisch">
              {JURIDISCH.map((item) => (
                <Link key={item.path} to={item.path}>{item.label}</Link>
              ))}
            </nav>
          </div>
        </section>
      </main>

      <V3Footer />
    </div>
  );
};

export default OntwerpB;

import { useState } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import { useSeo } from "@/data/seo";
import { useCopy, useLokaalPad } from "@/i18n/useTaal";
import { COPY } from "./DrooggarantiePage.copy";
import "@/styles/drooggarantie.css";
import "@/styles/drooggarantie-fixes.css";

/**
 * Drooggarantie — 1:1 transcription of the Claude Design handoff
 * (Drooggarantie.html). The design's own header/footer are replaced by the
 * shared <V3Header>/<V3Footer>; everything else is the design's markup,
 * scoped under `.dg-page` (see src/styles/drooggarantie.css). Assets resolve
 * from /vernast/*.webp. The design's scroll-reveal/counter scripts are
 * dropped: content renders visible (SSG-safe) and the header behaviour lives
 * in <V3Header>.
 */

/** The check glyph used across the voorwaarden lists. */
const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

/** The arrow reused in the primary buttons. */
const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

/** De pictogrammen van de vier garantiestappen, in volgorde. */
const STAP_ICONEN = [
  <svg key="1" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" /></svg>,
  <svg key="2" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" /></svg>,
  <svg key="3" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
  <svg key="4" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg>,
];

const DrooggarantiePage = () => {
  const [sent, setSent] = useState(false);
  const lp = useLokaalPad();
  const t = useCopy(COPY)(lp);
  const f = t.form;

  return (
    <div className="dg-page">
      <PageMeta
        {...useSeo("drooggarantie")}
        path={lp("/drooggarantie")}
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: t.crumbHome, path: lp("/") },
            { name: t.crumb, path: lp("/drooggarantie") },
          ]),
        ]}
      />

      <V3Header lightAfter={420} />

      {/* ================= HERO ================= */}
      <div className="redtop">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="kick rv">{t.heroKick}</span>
              <h1 className="rv">{t.h1}</h1>
              <p className="rv d1">{t.heroP}</p>
              <div className="hcta rv d3">
                <Link className="btn btn-white" to={lp("/verhuur/calculator")}>{t.heroCta}<Arrow /></Link>
                <a className="btn btn-ghost" href="#voorwaarden">{t.heroCta2}</a>
              </div>
            </div>
            <div className="hero-vis rv d2">
              <img src="/vernast/man-zen-crop.webp" alt={t.heroAlt} style={{ width: "min(78%,360px)", position: "relative", zIndex: 1 }} />
              <div className="fbadge" style={{ top: "30%", right: "-14%", left: "auto", zIndex: 0 }}><span className="ic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg></span><div>{t.badge}<small>{t.badgeSub}</small></div></div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= STAT RULE ================= */}
      <div className="statrule">
        <div className="wrap">
          <div className="band">
            {t.stats.map((st) => (
              <div className="st vis" key={st.l}><div className="n">{st.n}<em>{st.em}</em></div><div className="l">{st.l}</div></div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= WAAROM WIJ DIT DURVEN ================= */}
      <section className="sw">
        <div className="wrap wsplit">
          <div className="sec-head" style={{ marginBottom: 0 }}>
            <span className="kick rv">{t.wKick}</span>
            <h2 className="sec rv">{t.wH2}</h2>
            <p className="lede rv d1">{t.wLede}</p>
          </div>
          <div className="calcanim rv d1" aria-label={t.caAria}>
            <div className="ca-h"><b>{t.caTitel}</b><span>{t.caStatus}</span></div>
            <div className="carow"><span className="k">{t.caOpp}</span><span className="v canum">120 <small>m²</small></span></div>
            <div className="carow"><span className="k">{t.caVol}</span><span className="v canum">312 <small>m³</small></span></div>
            <div className="carow"><span className="k">{t.caPakket}</span><span className="v">{t.caPakketWaarde}</span></div>
            <div className="cabar"><b /></div>
            <div className="ca-f"><span>{t.caVocht}</span><span>{t.caStreef}</span></div>
            <div className="ca-res"><b>{t.caDuur}<span className="canum">{t.caDagen}</span></b><span>{t.caDroog}</span></div>
          </div>
        </div>
      </section>

      {/* ================= ZO WERKT DE GARANTIE ================= */}
      <section className="lvred">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick rv">{t.zKick}</span>
            <h2 className="sec rv">{t.zH2}</h2>
          </div>
          <div className="stgrid">
            {t.stappen.map((st, n) => (
              <div className={["stp rv", "stp rv", "stp rv d1", "stp rv d1"][n]} key={st.h3}><span className="si">{STAP_ICONEN[n]}</span><h3>{st.h3}</h3><p>{st.p}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DE VOORWAARDEN ================= */}
      <section className="sw" id="voorwaarden" style={{ paddingBottom: 20 }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="kick rv">{t.vKick}</span>
            <h2 className="sec rv">{t.vH2}</h2>
            <p className="lede rv d1">{t.vLede}</p>
          </div>
          <div className="vsg">
            <div className="vs hot rv" style={{ background: "var(--maroon-d) url('/vernast/bg-red-2.webp') center/cover no-repeat" }}>
              <span className="vt">{t.dektLabel}</span>
              <h3>{t.dektH3}</h3>
              <ul>
                {t.dekt.map((x) => <li key={x}><Check /> {x}</li>)}
              </ul>
              <span className="vf">{t.dektVoet}</span>
            </div>
            <div className="vs rv d1" style={{ background: "var(--bg-alt)" }}>
              <span className="vt" style={{ background: "#fff" }}>{t.vraagtLabel}</span>
              <h3>{t.vraagtH3}</h3>
              <ul>
                {t.vraagt.map((x, n) => <li key={n}><Check /> {x}</li>)}
              </ul>
            </div>
          </div>
          <div className="fine rv d2">
            <h3>{t.fijnH3}</h3>
            <ol>
              {t.regels.map((r) => <li key={r.b}><b>{r.b}</b> {r.tekst}</li>)}
            </ol>
            <p>{t.fijnVraag}</p>
          </div>
        </div>
      </section>

      {/* ================= MAN BAND CTA ================= */}
      <section className="sw" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="manband rv">
            <div className="mb-t">
              <span className="mbk">{t.mbKick}</span>
              <h3>{t.mbH3}</h3>
              <p>{t.mbP}</p>
              <Link className="btn btn-white mb-cta" to={lp("/verhuur/calculator")}>{t.mbCta}<Arrow /></Link>
            </div>
            <img className="mb-man" src="/vernast/man-duim-kabels.webp" alt={t.mbAlt} style={{ width: "min(30%,320px)" }} />
          </div>
        </div>
      </section>

      {/* ================= FORMULIER ================= */}
      <section className="oform" id="formulier">
        <div className="wrap">
          <div className="sec-head" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
            <span className="kick rv">{f.kick}</span>
            <h2 className="sec rv">{f.h2}</h2>
            <p className="lede rv d1" style={{ marginLeft: "auto", marginRight: "auto" }}>{f.lede}</p>
          </div>
          <div className="fshell rv d2">
            <div id="formBody" style={sent ? { display: "none" } : undefined}>
              <div className="frow">
                <div className="fld"><label htmlFor="fVoor">{f.voornaam}</label><input type="text" id="fVoor" placeholder={f.voornaam} /></div>
                <div className="fld"><label htmlFor="fNaam">{f.naam}</label><input type="text" id="fNaam" placeholder={f.achternaam} /></div>
              </div>
              <div className="frow">
                <div className="fld"><label htmlFor="fMail">{f.mail}</label><input type="email" id="fMail" placeholder={f.mailPh} /></div>
                <div className="fld"><label htmlFor="fTel">{f.tel}</label><input type="tel" id="fTel" placeholder="04.." /></div>
              </div>
              <div className="frow one">
                <div className="fld"><label htmlFor="fOnd">{f.onderwerp}</label>
                  <select id="fOnd">
                    {f.opties.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>
              <div className="frow one">
                <div className="fld"><label htmlFor="fMsg">{f.situatie}</label><textarea id="fMsg" rows={5} placeholder={f.situatiePh} /></div>
              </div>
              <div className="fsend">
                <small>{f.privacy}</small>
                <button className="btn" id="fSend" type="button" onClick={() => setSent(true)}>{f.verstuur}<Arrow /></button>
              </div>
            </div>
            <div className={sent ? "fdone on" : "fdone"} id="formDone">
              <div className="ic"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></div>
              <h3>{f.klaar}</h3>
              <p>{f.klaarP}</p>
            </div>
          </div>
        </div>
      </section>

      <V3Footer />
    </div>
  );
};

export default DrooggarantiePage;

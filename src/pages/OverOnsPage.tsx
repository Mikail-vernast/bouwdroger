import { useState } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import { useSeo } from "@/data/seo";
import { useCopy, useLokaalPad } from "@/i18n/useTaal";
import { OVER_ONS_COPY } from "./OverOnsPage.copy";
import { CONTACT } from "@/lib/site";
import "@/styles/over-ons.css";
import "@/styles/over-ons-fixes.css";

/**
 * Over ons — 1:1 transcription of the Claude Design handoff
 * (Over Ons.html). The design's own header/footer are replaced by the
 * shared <V3Header>/<V3Footer>; everything else is the design's markup,
 * scoped under `.ov-page` (see src/styles/over-ons.css). Assets resolve
 * from /vernast/*.webp.
 */

const OverOnsPage = () => {
  // Het contactformulier toont in de bron na "Verstuur" een dankboodschap.
  // We rerenderen dat met state, maar de begintoestand (formBody zichtbaar)
  // wordt méé geprerenderd, zodat de inhoud er ook zonder JS staat.
  const [verzonden, setVerzonden] = useState(false);
  const t = useCopy(OVER_ONS_COPY);
  const lp = useLokaalPad();

  return (
    <div className="ov-page">
      <PageMeta
        {...useSeo("overOns")}
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: lp("/") },
            { name: t.crumb, path: lp("/over-ons") },
          ]),
        ]}
      />

      <V3Header lightAfter={520} />

      {/* ================= HERO ================= */}
      <section className="ov-hero">
        <div className="wrap">
          <span className="kick">{t.heroKick}</span>
          <h1>{t.heroH1}</h1>
          <p>{t.heroP}</p>
        </div>
        <div className="ov-stage">
          <div className="ov-chip ch1"><span className="ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M8 6h8" /><path d="M8 10h8" /><path d="M8 14h4" /></svg></span><div>{t.chip1}</div></div>
          <div className="ov-chip ch2"><span className="ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg></span><div>{t.chip2}</div></div>
          <div className="ov-chip ch3"><span className="ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></span><div>{t.chip3}</div></div>
          <img className="ov-team" src="/vernast/team-drie.webp" alt={t.altTeam} />
        </div>
      </section>

      {/* ================= PRAKTIJK ================= */}
      <section className="prak">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.prakKick}</span>
            <h2 className="sec">{t.prakH2}</h2>
          </div>
          <div className="prak-grid">
            <div className="prak-copy">
              <p>{t.prakP1}</p>
              <p>{t.prakP2}</p>
              <p>{t.prakP3}</p>
            </div>
            <div className="qcard">
              <h3>{t.qH}</h3>
              <p className="qsub">{t.qSub}</p>
              <ul>
                <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{t.q1}</li>
                <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{t.q2}</li>
                <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{t.q3}</li>
                <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{t.q4}</li>
                <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{t.q5}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CAPACITEIT ================= */}
      <section className="cap">
        <div className="wrap">
          <div className="cap-layout">
            <div className="cap-left">
              <div className="sec-head" style={{ marginBottom: "30px" }}>
                <span className="kick">{t.capKick}</span>
                <h2 className="sec">{t.capH2}</h2>
                <p className="lede">{t.capLede}</p>
              </div>
              <div className="cap-grid">
                <div className="cp">
                  <div className="cpi"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5" /><path d="m5 12 7 7 7-7" /></svg></div>
                  <h3>{t.onderH}</h3>
                  <p>{t.onderP}</p>
                </div>
                <div className="cp">
                  <div className="cpi"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14" /><path d="m19 12-7-7-7 7" /></svg></div>
                  <h3>{t.overH}</h3>
                  <p>{t.overP}</p>
                </div>
              </div>
              <blockquote className="cap-bq"><svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M10 7H6a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-7a4 4 0 0 0-1-2.65zM21 7h-4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-7a4 4 0 0 0-1-2.65z" opacity=".45" /></svg>{t.capBq}</blockquote>
            </div>
            <figure className="cap-man">
              <img src="/vernast/man-meter-upright.webp" alt={t.altMan} />
              <figcaption><span className="ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg></span><div>{t.gemeten}</div></figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="team" id="team">
        <div className="wrap">
          <div className="sec-head mid">
            <span className="kick">{t.teamKick}</span>
            <h2 className="sec">{t.teamH2}</h2>
            <p className="lede">{t.teamLede}</p>
          </div>
          <div className="team-grid">
            <div className="tm">
              <div className="tphoto"><img src="/vernast/man-klembord.webp" alt={t.altTm1} /></div>
              <div className="tbody">
                <h3>{t.tm1H}</h3>
                <p>{t.tm1P}</p>
              </div>
            </div>
            <div className="tm">
              <div className="tphoto"><img src="/vernast/worker-thumb.webp" alt={t.altTm2} /></div>
              <div className="tbody">
                <h3>{t.tm2H}</h3>
                <p>{t.tm2P}</p>
              </div>
            </div>
            <div className="tm">
              <div className="tphoto"><img src="/vernast/koppel-digitaal.webp" alt={t.altTm3} /></div>
              <div className="tbody">
                <h3>{t.tm3H}</h3>
                <p>{t.tm3P}</p>
              </div>
            </div>
            <div className="tm">
              <div className="tphoto"><img src="/vernast/man-zen-crop.webp" alt={t.altTm4} /></div>
              <div className="tbody">
                <h3>{t.tm4H}</h3>
                <p>{t.tm4P}</p>
              </div>
            </div>
          </div>
          <div className="belg">
            <div className="bt">
              <h3>{t.belgH}</h3>
              <p>{t.belgP}</p>
            </div>
            <img src="/vernast/drie-vakmannen.webp" alt={t.altVak} />
          </div>
        </div>
      </section>

      {/* ================= VOLGENDE FASE ================= */}
      <section className="fase" id="vacatures">
        <div className="wrap fase-grid">
          <div>
            <span className="kick">{t.faseKick}</span>
            <h2 className="sec">{t.faseH2}</h2>
            <p className="lede">{t.faseLede}</p>
            <div className="fase-chips">
              <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{t.fc1}</span>
              <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{t.fc2}</span>
              <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{t.fc3}</span>
              <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{t.fc4}</span>
            </div>
          </div>
          <div className="jobs">
            <a className="job" href={`mailto:${CONTACT.email}?subject=Sollicitatie%20technieker%20bouwdroging`}>
              <div className="jt"><h3>{t.j1H}</h3><span className="jb">{t.j1B}</span></div>
              <p>{t.j1P}</p>
              <span className="jl">{t.j1L}</span>
            </a>
            <a className="job" href={`mailto:${CONTACT.email}?subject=Sollicitatie%20magazijnier`}>
              <div className="jt"><h3>{t.j2H}</h3><span className="jb">{t.j2B}</span></div>
              <p>{t.j2P}</p>
              <span className="jl">{t.j2L}</span>
            </a>
            <a className="job spont" href={`mailto:${CONTACT.email}?subject=Spontane%20sollicitatie`}>
              <div className="jt"><h3>{t.j3H}</h3><span className="jb">{t.j3B}</span></div>
              <p>{t.j3P}</p>
              <span className="jl">{t.j3L}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGIE ================= */}
      <section className="tech">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.techKick}</span>
            <h2 className="sec">{t.techH2}</h2>
          </div>
        </div>
        <div className="mq">
          <div className="mq-track">
            <span className="it"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M8 6h8" /><path d="M8 10h8" /><path d="M8 14h4" /></svg>{t.mq1}</span>
            <span className="it"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m7 15 4-6 4 3 5-8" /></svg>{t.mq2}</span>
            <span className="it"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" /></svg>{t.mq3}</span>
            <span className="it"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 18H3V8h11v10H9" /><path d="M14 10h4l3 4v4h-2" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg>{t.mq4}</span>
            <span className="it"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>{t.mq5}</span>
            <span className="it"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M8 6h8" /><path d="M8 10h8" /><path d="M8 14h4" /></svg>{t.mq1}</span>
            <span className="it"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m7 15 4-6 4 3 5-8" /></svg>{t.mq2}</span>
            <span className="it"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" /></svg>{t.mq3}</span>
            <span className="it"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 18H3V8h11v10H9" /><path d="M14 10h4l3 4v4h-2" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg>{t.mq4}</span>
            <span className="it"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>{t.mq5}</span>
          </div>
        </div>
        <div className="mq rev">
          <div className="mq-track">
            <span className="it"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>{t.mq6}</span>
            <span className="it"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg>{t.mq7}</span>
            <span className="it"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>{t.mq8}</span>
            <span className="it"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7z" /></svg>{t.mq9}</span>
            <span className="it"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-9 4 18 3-9h6" /></svg>{t.mq10}</span>
            <span className="it"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>{t.mq6}</span>
            <span className="it"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg>{t.mq7}</span>
            <span className="it"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>{t.mq8}</span>
            <span className="it"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7z" /></svg>{t.mq9}</span>
            <span className="it"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-9 4 18 3-9h6" /></svg>{t.mq10}</span>
          </div>
        </div>
        <div className="wrap">
          <p className="tech-note">{t.techNote}</p>
        </div>
      </section>

      {/* ================= ACADEMY ================= */}
      <section className="acy" id="academy">
        <div className="wrap acy-grid">
          <div>
            <span className="kick">{t.acyKick}</span>
            <h2 className="sec">Vernast Academy.</h2>
            <p className="lede">{t.acyLede}</p>
            <div className="acy-stats">
              <div><b>100%</b><span>{t.st1}</span></div>
              <div><b>{t.st2B}</b><span>{t.st2}</span></div>
              <div><b>{t.st3B}</b><span>{t.st3}</span></div>
            </div>
            <a className="btn btn-white" href="https://www.vernast.be/academy" style={{ marginTop: "30px" }}>{t.academyBtn}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>
          </div>
          <div className="acy-cards">
            <div className="ac">
              <span className="tag hot">{t.ac1T}</span>
              <h3>{t.ac1H}</h3>
              <p>{t.ac1P}</p>
              <span className="meta">5 modules</span>
            </div>
            <div className="ac">
              <span className="tag">{t.acCert}</span>
              <h3>{t.ac2H}</h3>
              <p>{t.ac2P}</p>
              <span className="meta">8 modules</span>
            </div>
            <div className="ac">
              <span className="tag">{t.acCert}</span>
              <h3>{t.ac3H}</h3>
              <p>{t.ac3P}</p>
              <span className="meta">7 modules</span>
            </div>
            <div className="acy-mini">
              <span>{t.mini1}</span>
              <span>{t.mini2}</span>
              <span>{t.mini3}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VERNAST GROEP ================= */}
      <section className="groep">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.groepKick}</span>
            <h2 className="sec">{t.groepH2}</h2>
            <p className="lede">{t.groepLede}</p>
          </div>
          <div className="gr-grid">
            <Link className="gr" to={lp("/")}>
              <div className="gphoto"><img src="/vernast/groep-bouwdroging.webp" alt={t.altGr1} style={{ objectFit: "cover" }} /></div>
              <span className="gi"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v3" /><path d="M18.4 5.6l-2.1 2.1" /><path d="M21 12h-3" /><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg></span>
              <h3>Vernast BouwDroging</h3>
              <p>{t.gr1P}</p>
              <span className="gl">{t.gr1L}</span>
            </Link>
            <a className="gr hot" href="https://vernast-vochtbestrijding.be/">
              <div className="gphoto"><img src="/vernast/groep-vochtbestrijding.webp" alt="Vernast Vochtbestrijding" style={{ objectFit: "cover" }} /></div>
              <span className="gi"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" /></svg></span>
              <h3>Vernast Vochtbestrijding</h3>
              <p>{t.gr2P}</p>
              <span className="gl">{t.gr2L}</span>
            </a>
            <a className="gr" href="https://www.vernast-schilderwerken.be/">
              <div className="gphoto"><img src="/vernast/groep-schilderwerken.webp" alt={t.altGr3} style={{ objectFit: "cover" }} /></div>
              <span className="gi"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" /><path d="M12 11v4a2 2 0 0 1-2 2H8a2 2 0 0 0-2 2v2" /></svg></span>
              <h3>Vernast Schilderwerken</h3>
              <p>{t.gr3P}</p>
              <span className="gl">{t.gr3L}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= CONTACTFORMULIER ================= */}
      <section className="oform" id="formulier">
        <div className="wrap">
          <div className="sec-head mid" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
            <span className="kick">{t.formKick}</span>
            <h2 className="sec" style={{ color: "#fff" }}>{t.formH2}</h2>
            <p className="lede" style={{ color: "rgba(255,255,255,.78)", marginLeft: "auto", marginRight: "auto" }}>{t.formLede}</p>
          </div>
          <div className="fshell">
            <div id="formBody" style={{ display: verzonden ? "none" : undefined }}>
              <div className="frow">
                <div className="fld"><label htmlFor="fVoor">{t.lVoor}</label><input type="text" id="fVoor" placeholder={t.phVoor} /></div>
                <div className="fld"><label htmlFor="fNaam">{t.lNaam}</label><input type="text" id="fNaam" placeholder={t.phNaam} /></div>
              </div>
              <div className="frow">
                <div className="fld"><label htmlFor="fMail">E-mail</label><input type="email" id="fMail" placeholder={t.phMail} /></div>
                <div className="fld"><label htmlFor="fTel">{t.lTel}</label><input type="tel" id="fTel" placeholder="04.." /></div>
              </div>
              <div className="frow one">
                <div className="fld"><label htmlFor="fOnd">{t.lOnd}</label>
                  <select id="fOnd">
                    <option>{t.o1}</option>
                    <option>{t.o2}</option>
                    <option>{t.o3}</option>
                    <option>{t.o4}</option>
                    <option>{t.o5}</option>
                  </select>
                </div>
              </div>
              <div className="frow one">
                <div className="fld"><label htmlFor="fMsg">{t.lMsg}</label><textarea id="fMsg" rows={5} placeholder={t.phMsg}></textarea></div>
              </div>
              <div className="fsend">
                <small>{t.privNote}</small>
                <button className="btn btn-red2" id="fSend" type="button" onClick={() => setVerzonden(true)}>{t.verstuur}<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></button>
              </div>
            </div>
            <div className={verzonden ? "fdone on" : "fdone"} id="formDone">
              <div className="ic"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></div>
              <h3>{t.doneH}</h3>
              <p>{t.doneP}</p>
            </div>
          </div>
        </div>
      </section>

      <V3Footer />
    </div>
  );
};

export default OverOnsPage;

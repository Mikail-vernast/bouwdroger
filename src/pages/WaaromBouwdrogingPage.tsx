import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import { useSeo } from "@/data/seo";
import "@/styles/waarom-bouwdroging.css";
import "@/styles/waarom-bouwdroging-fixes.css";
import { useCopy, useLokaalPad } from "@/i18n/useTaal";
import { COPY } from "./WaaromBouwdrogingPage.copy";

/**
 * Waarom bouwdroging — 1:1 transcription of the Claude Design handoff
 * (Waarom Bouwdroging.html). The design's own header/footer are replaced by
 * the shared <V3Header>/<V3Footer>; everything else is the design's markup,
 * scoped under `.wb-page` (see src/styles/waarom-bouwdroging.css). Assets
 * resolve from /vernast/*.webp.
 */

/** The cross glyph used in the "natuurlijk drogen" list. */
const Cross = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

/** The check glyph used in the "gecontroleerde bouwdroging" list. */
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

const WaaromBouwdrogingPage = () => {
  const lp = useLokaalPad();
  const t = useCopy(COPY)(lp);
  const f = t.form;

  return (
  <div className="wb-page">
    <PageMeta
      {...useSeo("waaromBouwdroging")}
      path={lp("/waarom-bouwdroging")}
      jsonLd={[
        organizationSchema(),
        breadcrumbSchema([
          { name: t.crumbHome, path: lp("/") },
          { name: t.crumb, path: lp("/waarom-bouwdroging") },
        ]),
      ]}
    />

    <div className="redtop">
      <V3Header lightAfter={420} />

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="kick rv">{t.heroKick}</span>
            <h1 className="rv">{t.h1}</h1>
            <p className="rv d1">{t.heroP}</p>
            <div className="hcta rv d3">
              <Link className="btn btn-white" to={lp("/verhuur/calculator")}>{t.heroCta}<Arrow /></Link>
              <Link className="btn btn-ghost" to={lp("/hoe-drogen-werkt")}>{t.heroCta2}</Link>
            </div>
          </div>
          <div className="hero-vis rv d2">
            <img src="/vernast/man-rode-kaart.webp" alt={t.heroAlt} width="1440" height="1438" loading="eager" decoding="async" />
            <div className="fbadge rd" style={{ top: "-28px", left: "2%" }}><span className="ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg></span><div>{t.badge}<small>{t.badgeSub}</small></div></div>
          </div>
        </div>
      </section>
    </div>


    {/* ================= NATUURLIJK VS GECONTROLEERD ================= */}
    <section className="sw">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick rv">{t.vsKick}</span>
          <h2 className="sec rv">{t.vsH2}</h2>
          <p className="lede rv d1">{t.vsLede}</p>
        </div>
        <div className="vsg">
          <div className="vs rv">
            <span className="vt">{t.natLabel}</span>
            <h3>{t.natH3}</h3>
            <ul>
              {t.natLijst.map((x) => <li key={x}><Cross /> {x}</li>)}
            </ul>
          </div>
          <div className="vs hot rv d1">
            <span className="vt">{t.gecLabel}</span>
            <h3>{t.gecH3}</h3>
            <ul>
              {t.gecLijst.map((x) => <li key={x}><Check /> {x}</li>)}
            </ul>
          </div>
        </div>
        <div className="note rv d2">{t.vsNote}</div>
      </div>
    </section>

    {/* ================= UW PLANNING ================= */}
    <section className="sr">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick rv">{t.plKick}</span>
          <h2 className="sec rv">{t.plH2}</h2>
          <p className="lede rv d1">{t.plLede}</p>
        </div>
        <div className="plan">
          {t.plan.map((x, n) => (
            <div className={["pl rv", "pl rv d1", "pl rv d2"][n]} key={x.b}><b>{x.b}</b>{x.tekst}</div>
          ))}
        </div>
        <div className="manband lite rv d2">
          <div className="mb-t">
            <span className="mbk">{t.schKick}</span>
            <h3>{t.schH3}</h3>
            <p>{t.schP}</p>
          </div>
          <img className="mb-man" src="/vernast/man-schimmelpak.webp" alt={t.schAlt} style={{ width: "min(24%,240px)" }} />
        </div>
      </div>
    </section>

    {/* ================= MEER DAN LITERS PER DAG ================= */}
    <section className="sw">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick rv">{t.ltKick}</span>
          <h2 className="sec rv">{t.ltH2}</h2>
          <p className="lede rv d1">{t.ltLede}</p>
        </div>
        <div className="wk">
          {t.wk.map((x, n) => (
            <div className={["wi rv", "wi rv", "wi rv d1", "wi rv d1"][n]} key={x.b}><i></i><span><b>{x.b}</b>{x.rest}</span></div>
          ))}
        </div>
        <div className="manband rv d1">
          <div className="mb-t">
            <span className="mbk">{t.papKick}</span>
            <h3>{t.papH3}</h3>
            <p>{t.papP}</p>
          </div>
          <img className="mb-man" src="/vernast/man-klembord.webp" alt={t.papAlt} style={{ width: "min(24%,250px)" }} />
        </div>
      </div>
    </section>

    {/* ================= HET VERNAST-PRINCIPE ================= */}
    <section className="sr">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick rv">{t.prKick}</span>
          <h2 className="sec rv">{t.prH2}</h2>
          <p className="lede rv d1">{t.prLede}</p>
        </div>
        <div className="radi">
          <div className="rd rv">
            <div className="zone"><i className="on" /><i className="half" /><i /><i /></div>
            <h3>{t.rd1H3}</h3>
            <p>{t.rd1P}</p>
          </div>
          <div className="rd rv d1">
            <div className="zone"><i className="on" /><i className="on" /><i className="on" /><i className="on" /></div>
            <h3>{t.rd2H3}</h3>
            <p>{t.rd2P}</p>
          </div>
        </div>
        <div className="note rv d2">{t.prNote}</div>
      </div>
    </section>

    {/* ================= WAT BETEKENT DAT VOOR U ================= */}
    <section className="sw">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick rv">{t.uKick}</span>
          <h2 className="sec rv">{t.uH2}</h2>
          <p className="lede rv d1">{t.uLede}</p>
        </div>
        <div className="manband rv d1">
          <div className="mb-t">
            <span className="mbk">{t.belKick}</span>
            <h3>{t.belH3}</h3>
            <p>{t.belP}</p>
            <Link className="btn btn-white mb-cta" to={lp("/verhuur/calculator")}>{t.belCta}<Arrow /></Link>
          </div>
          <img className="mb-man" src="/vernast/man-zen-crop.webp" alt={t.belAlt} style={{ width: "min(26%,260px)" }} />
        </div>
      </div>
    </section>

    {/* ================= VRAAGFORMULIER ================= */}
    <section className="oform" id="formulier">
      <div className="wrap">
        <div className="sec-head" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
          <span className="kick rv">{f.kick}</span>
          <h2 className="sec rv">{f.h2}</h2>
          <p className="lede rv d1" style={{ marginLeft: "auto", marginRight: "auto" }}>{f.lede}</p>
        </div>
        <div className="fshell rv d2">
          <div id="formBody">
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
              <div className="fld"><label htmlFor="fMsg">{f.situatie}</label><textarea id="fMsg" rows={5} placeholder={f.situatiePh}></textarea></div>
            </div>
            <div className="fsend">
              <small>{f.privacy}</small>
              <button className="btn" id="fSend" type="button">{f.verstuur}<Arrow /></button>
            </div>
          </div>
          <div className="fdone" id="formDone">
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

export default WaaromBouwdrogingPage;

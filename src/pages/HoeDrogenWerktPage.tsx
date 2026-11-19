import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import KlimaatMeter from "@/components/hoe-drogen/KlimaatMeter";
import VochtGrafiek from "@/components/hoe-drogen/VochtGrafiek";
import InBeeld from "@/components/hoe-drogen/InBeeld";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import { useSeo } from "@/data/seo";
import { PUMP } from "@/data/verhuur";
import { euro } from "@/lib/verhuur";
import "@/styles/hoe-drogen-werkt.css";
import "@/styles/hoe-drogen-werkt-fixes.css";
import "@/styles/hoe-drogen-animaties.css";
import { useCopy, useLokaalPad, useTaal, useToonBedrag } from "@/i18n/useTaal";
import { COPY } from "./HoeDrogenWerktPage.copy";

/**
 * Hoe drogen werkt — 1:1 transcription of the Claude Design handoff
 * (Hoe Drogen Werkt.html). The design's own header/footer are replaced by
 * the shared <V3Header>/<V3Footer>; everything else is the design's markup,
 * scoped under `.hdw-page` (see src/styles/hoe-drogen-werkt.css). Assets
 * resolve from /vernast/*.webp and the reveal-on-scroll animation is
 * neutralised in CSS so the page needs no JavaScript.
 */

const HoeDrogenWerktPage = () => {
  const lp = useLokaalPad();
  const taal = useTaal();
  const toon = useToonBedrag();
  /*
    De Nederlandse zin toonde altijd het cataloguscijfer zonder label, en dat
    blijft zo. In het Frans en Engels staat het bedrag zoals de bezoeker het
    betaalt, mét TVAC/HTVA of incl./excl. VAT erachter.
  */
  const pompBedrag = toon(PUMP.price);
  const pomp = taal === "nl" ? euro(PUMP.price) : `${pompBedrag.tekst} ${pompBedrag.label}`;
  /*
    De waterdamp in de twee RV-vakjes. Engels schrijft een decimale punt; niet
    via `NUMBER_LOCALE.en`, want en-BE geeft voor een los getal een komma.
  */
  const waterGram = taal === "en" ? "6.2 g" : "6,2 g";
  const t = useCopy(COPY)({ lp, pomp });
  const f = t.form;

  return (
  <div className="hdw-page">
    <PageMeta
      {...useSeo("hoeDrogenWerkt")}
      path={lp("/hoe-drogen-werkt")}
      jsonLd={[
        organizationSchema(),
        breadcrumbSchema([
          { name: t.crumbHome, path: lp("/") },
          { name: t.crumb, path: lp("/hoe-drogen-werkt") },
        ]),
      ]}
    />

    <V3Header lightAfter={420} />

    {/* ================= HERO ================= */}
    <div className="redtop">
      <section className="hero" data-screen-label="Hoe drogen hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="kick rv">{t.heroKick}</span>
            <h1 className="rv">{t.h1}</h1>
            <p className="rv d1">{t.heroP}</p>

            <div className="hcta rv d3">
              <Link className="btn btn-white" to={lp("/verhuur/calculator")}>{t.heroCta}<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></Link>
              <Link className="btn btn-ghost" to={lp("/waarom-bouwdroging")}>{t.heroCta2}</Link>
            </div>
          </div>
          <div className="hero-vis rv d2">
            <img src="/vernast/team-tools.webp" alt={t.heroAlt} style={{ width: "min(100%,560px)" }} />
            <div className="fbadge" style={{ top: "-34px", left: "4%" }}><span className="ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg></span><div>{t.badge}<small>{t.badgeSub}</small></div></div>
          </div>
        </div>
      </section>
    </div>


    {/* ================= HET PRINCIPE ================= */}
    <section className="sw">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick rv">{t.prKick}</span>
          <h2 className="sec rv">{t.prH2}</h2>
          <p className="lede rv d1">{t.prLede}</p>
        </div>
        <div className="g3">
          {t.factoren.map((k, n) => (
            <div className={["kaart rv", "kaart rv d1", "kaart rv d2"][n]} key={k.h3}>
              <KlimaatMeter variant={(["temperatuur", "vocht", "lucht"] as const)[n]} volgorde={n} />
              <h3>{k.h3}</h3>
              <p>{k.p}</p>
            </div>
          ))}
        </div>
        <div className="note rv">{t.prNote}</div>
      </div>
    </section>

    {/* ================= MISVERSTAND NR. 1 ================= */}
    <section className="sr">
      <div className="wrap splitv">
        <div>
          <span className="kick rv">{t.m1Kick}</span>
          <h2 className="sec rv">{t.m1H2}</h2>
          <p className="lede rv d1">{t.m1P1}</p>
          <p className="lede rv d1" style={{ marginTop: "12px" }}>{t.m1P2}</p>
        </div>
        <div className="rvh2">
          <div className="rvbox rv" style={{ "--w": "80%" } as React.CSSProperties}>
            <div className="rvkop">
              <span className="rvb-ic ijs" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m10 20-1.25-2.5L6 18" /><path d="M10 4 8.75 6.5 6 6" /><path d="m14 20 1.25-2.5L18 18" /><path d="m14 4 1.25 2.5L18 6" /><path d="m17 21-3-6h-4" /><path d="m17 3-3 6 1.5 3" /><path d="M2 12h6.5L10 9" /><path d="m20 10-1.5 2 1.5 2" /><path d="M22 12h-6.5L14 15" /><path d="m4 10 1.5 2L4 14" /><path d="m7 21 3-6-1.5-3" /><path d="m7 3 3 6h4" /></svg>
              </span>
              <div className="t">{t.koud}</div>
            </div>
            <div className="big">{t.koudBig}<small>{t.rvUnit}</small></div>
            <div className="rvmeet">
              <div className="bar"><b></b></div>
            </div>
            <div className="rvmeet rvwater">
              <span className="rvlab"><b>{waterGram}</b>{t.waterPerKg}</span>
              <div className="water" aria-hidden="true"><b></b><i></i><i></i><i></i><i></i></div>
            </div>
            <div className="sub">{t.koudSub}</div>
          </div>
          <div className="rvbox rv d1" style={{ "--w": "42%" } as React.CSSProperties}>
            <div className="rvkop">
              <span className="rvb-ic vuur" aria-hidden="true">
              <svg className="vlam" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" /></svg>
              <svg className="kern" width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c.6 3 2.4 4.3 3.6 6.1C16.6 10.6 17 12 17 13.5a5 5 0 0 1-10 0c0-1.3.4-2.4 1.1-3.4.2 1 .8 1.8 1.6 2.2-.3-2.6.6-5.4 2.3-9.3z" /></svg>
              </span>
              <div className="t">{t.warm}</div>
            </div>
            <div className="big">{t.warmBig}<small>{t.rvUnit}</small></div>
            <div className="rvmeet">
              <div className="bar"><b></b></div>
            </div>
            <div className="rvmeet rvwater">
              <span className="rvlab"><b>{waterGram}</b>{t.waterPerKg}</span>
              <div className="water" aria-hidden="true"><b></b><i></i><i></i><i></i><i></i></div>
            </div>
            <div className="sub">{t.warmSub}</div>
          </div>
        </div>
      </div>
    </section>

    {/* ================= EVEN TECHNISCH ================= */}
    <section className="sw">
      <div className="wrap rvsplit">
        <div>
          <span className="kick rv">{t.rvKick}</span>
          <h2 className="sec rv">{t.rvH2}</h2>
          <p className="lede rv d1" style={{ marginTop: "16px" }}>{t.rvP1}</p>
          <p className="lede rv d1" style={{ marginTop: "12px" }}>{t.rvP2}</p>
          <div className="rvchips rv d2">
            {t.chips.map((c) => <span key={c}>{c}</span>)}
          </div>
        </div>
        <div className="rvimg rv d1"><VochtGrafiek /></div>
      </div>
    </section>

    {/* ================= DE CYCLUS ================= */}
    <section className="sw2">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick rv">{t.cyKick}</span>
          <h2 className="sec rv">{t.cyH2}</h2>
          <p className="lede rv d1">{t.cyLede}</p>
        </div>
        <InBeeld className="cyc">
          <div className="cy rv" data-stap="1"><i>01</i><div className="ci2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /></svg><span className="cy-nat" /><span className="cy-nat" /><span className="cy-nat" /></div><h3>{t.cyclus[0].h3}</h3><p>{t.cyclus[0].p}</p></div>
          <div className="cy rv d1" data-stap="2"><i>02</i><div className="ci2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9.6 4.6A2 2 0 1 1 11 8H2" /><path d="M12.6 19.4A2 2 0 1 0 14 16H2" /></svg><span className="cy-zuig" /><span className="cy-zuig" /><span className="cy-zuig" /></div><h3>{t.cyclus[1].h3}</h3><p>{t.cyclus[1].p}</p></div>
          <div className="cy rv d2" data-stap="3" style={{ position: "relative" }}><i>03</i><div className="ci2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" /></svg><span className="drop" style={{ left: "14px", top: "44px" }}><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" /></svg></span><span className="drop" style={{ left: "26px", top: "44px", animationDelay: "1.2s" }}><svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" /></svg></span></div><h3>{t.cyclus[2].h3}</h3><p>{t.cyclus[2].p}</p></div>
          <div className="cy rv d3" data-stap="4"><i>04</i><div className="ci2"><span className="cy-peil" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v8" /><path d="M5 14h14v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" /></svg></div><h3>{t.cyclus[3].h3}</h3><p>{t.cyclus[3].p}</p></div>
          <div className="cy rv d3" data-stap="5"><i>05</i><div className="ci2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9" /><path d="M21 3v6h-6" /></svg></div><h3>{t.cyclus[4].h3}</h3><p>{t.cyclus[4].p}</p></div>
        </InBeeld>
        <div className="note rv">{t.cyNote}</div>
      </div>
    </section>

    {/* ================= MISVERSTAND NR. 2 ================= */}
    <section className="sr">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick rv">{t.m2Kick}</span>
          <h2 className="sec rv">{t.m2H2}</h2>
          <p className="lede rv d1">{t.m2Lede}</p>
        </div>
        <div className="fase2">
          <div className="fs f1 rv" style={{ "--w": "78%" } as React.CSSProperties}>
            <span className="fl">{t.fase1Label}</span>
            <h3>{t.fase1H3}</h3>
            <p>{t.fase1P}</p>
            <div className="bar"><b></b></div>
            <span className="bl">{t.fase1Bar}</span>
          </div>
          <div className="fs rv d1" style={{ "--w": "26%" } as React.CSSProperties}>
            <span className="fl">{t.fase2Label}</span>
            <h3>{t.fase2H3}</h3>
            <p>{t.fase2P}</p>
            <div className="bar"><b></b></div>
            <span className="bl">{t.fase2Bar}</span>
          </div>
        </div>
        <div className="manband lite rv d2" style={{ marginTop: "20px" }}>
          <div className="mb-t">
            <span className="mbk">{t.meetKick}</span>
            <h3>{t.meetH3}</h3>
            <p>{t.meetP}</p>
          </div>
          <img className="mb-man" src="/vernast/man-vochtmeter.webp" alt={t.meetAlt} style={{ width: "min(44%,440px)" }} />
        </div>
      </div>
    </section>

    {/* ================= NIET ELK MATERIAAL ================= */}
    <section className="sw">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick rv">{t.matKick}</span>
          <h2 className="sec rv">{t.matH2}</h2>
          <p className="lede rv d1">{t.matLede}</p>
        </div>
        <div className="g3">
          <div className="kaart materiaalkaart rv">
            <img className="materiaalfoto" src="/vernast/droogproces-nat-pleister.webp" alt={t.materialen[0].alt} width={1672} height={941} loading="lazy" decoding="async" />
            <div className="materiaaltekst">
              <h3>{t.materialen[0].h3}</h3>
              <p>{t.materialen[0].p}</p>
            </div>
          </div>
          <div className="kaart materiaalkaart rv d1">
            <img className="materiaalfoto" src="/vernast/droogproces-vochtige-chape.webp" alt={t.materialen[1].alt} width={1672} height={941} loading="lazy" decoding="async" />
            <div className="materiaaltekst">
              <h3>{t.materialen[1].h3}</h3>
              <p>{t.materialen[1].p}</p>
            </div>
          </div>
          <div className="kaart materiaalkaart rv d2">
            <img className="materiaalfoto" src="/vernast/droogproces-te-snel-droog.webp" alt={t.materialen[2].alt} width={1672} height={941} loading="lazy" decoding="async" />
            <div className="materiaaltekst">
              <h3>{t.materialen[2].h3}</h3>
              <p>{t.materialen[2].p}</p>
            </div>
          </div>
        </div>
        <div className="note rv">{t.matNote1}</div>
        <div className="note rv">{t.matNote2}</div>
      </div>
    </section>

    {/* ================= SAMENGEVAT ================= */}
    <section className="sr">
      <div className="wrap">
        <div className="sec-head" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
          <span className="kick rv">{t.samKick}</span>
          <h2 className="sec rv">{t.samH2}</h2>
        </div>
        <div className="stap8">
          {t.stappen.map((s, n) => (
            <div className={["s8 rv", "s8 rv", "s8 rv d1", "s8 rv d1", "s8 rv d2", "s8 rv d2", "s8 rv d3", "s8 rv d3"][n]} key={s.b}><i></i><span><b>{s.b}</b>{s.rest}</span></div>
          ))}
        </div>
      </div>
    </section>

    {/* ================= VAN THEORIE NAAR UW WERF ================= */}
    <section className="sw">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick rv">{t.werfKick}</span>
          <h2 className="sec rv">{t.werfH2}</h2>
          <p className="lede rv d1">{t.werfLede}</p>
        </div>
        <div className="manband rv d1">
          <div className="mb-t">
            <span className="mbk">{t.prinKick}</span>
            <h3>{t.prinH3}</h3>
            <p>{t.prinP}</p>
            <Link className="btn btn-white mb-cta" to={lp("/verhuur/calculator")}>{t.prinCta}<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></Link>
          </div>
          <img className="mb-man" src="/vernast/man-klembord-pen.webp" alt={t.prinAlt} style={{ width: "min(30%,320px)" }} />
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
              <button className="btn" id="fSend">{f.verstuur}<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></button>
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

export default HoeDrogenWerktPage;

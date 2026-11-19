import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import { useSeo } from "@/data/seo";
import { formatEuro, useCopy, useLokaalPad, useTaal } from "@/i18n/useTaal";
import { KLANTSERVICE_COPY } from "./KlantservicePage.copy";
import { PUMP } from "@/data/verhuur";
import { euro } from "@/lib/verhuur";
import { AanvraagDone, AanvraagError, AanvraagHoneypot } from "@/components/AanvraagForm";
import { useAanvraag } from "@/hooks/useAanvraag";
import "@/styles/klantservice.css";
import "@/styles/klantservice-fixes.css";

/**
 * Klantenservice — 1:1 transcription of the Claude Design handoff
 * (Klantservice.html). The design's own header/footer are replaced by the
 * shared <V3Header>/<V3Footer>; everything else is the design's markup,
 * scoped under `.ks-page` (see src/styles/klantservice.css). Assets resolve
 * from /vernast/*.webp. The question form posts to `/api/aanvraag` and lands
 * in the bouwdroger portal (source `klantenservice`); see `useAanvraag`.
 */

/** The check used in the payment option lists. */
const Check = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

/** The phone glyph reused in the storing answers. */
const Phone = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92V21a1 1 0 0 1-1.11 1A19.86 19.86 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.29 1L7 10.5a16 16 0 0 0 6.5 6.5l1.75-1.8a1 1 0 0 1 1-.29l4 1a1 1 0 0 1 .75 1Z" />
  </svg>
);

const KlantservicePage = () => {
  const { status, error, mailto, sending, handleSubmit } = useAanvraag({
    source: "klantenservice",
    messageField: "vraag",
    mailSubject: "Klantenservice",
  });
  const t = useCopy(KLANTSERVICE_COPY);
  const lp = useLokaalPad();
  const taal = useTaal();
  // Nederlands houdt zijn eigen notatie (`€ 3,00`); Frans krijgt `3,00 €`, Engels `€3.00`.
  const pompPrijs = taal === "nl" ? euro(PUMP.price) : formatEuro(PUMP.price, taal);

  return (
    <div className="ks-page">
      <PageMeta
        {...useSeo("klantservice")}
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: lp("/") },
            { name: t.crumb, path: lp("/klantservice") },
          ]),
        ]}
      />

      <V3Header lightAfter={380} />

      {/* ================= HERO ================= */}
      <section className="ks-hero">
        <div className="wrap">
          <span className="kick">{t.heroKick}</span>
          <h1>{t.heroH1}</h1>
          <p>{t.heroP}</p>
          <div className="ks-quick">
            <a className="hot" href="tel:+3236899065"><Phone /> {t.q1}</a>
            <a href="mailto:info@vernast-bouwdrogers.be">{t.q2}</a>
            <a href="#storing">{t.q3}</a>
            <a href="#betalingen">{t.betH}</a>
          </div>
        </div>
        <img className="ks-hero-man" src="/vernast/man-zen-crop.webp" alt={t.altHero} width="1225" height="1440" loading="eager" decoding="async" />
      </section>

      {/* ================= TOPICS ================= */}
      <section className="topics">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.topKick}</span>
            <h2 className="sec">{t.topH2}</h2>
          </div>
          <div className="top-grid">
            <a className="tp" href="#betalingen">
              <span className="ti"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg></span>
              <h3>{t.betH}</h3>
              <p>{t.tp1P}</p>
              <span className="tg">{t.tgAntw}</span>
            </a>
            <a className="tp" href="#storing">
              <span className="ti"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a5 5 0 0 0-6.9 6.9L3 18v3h3l4.8-4.8a5 5 0 0 0 6.9-6.9L14 12l-2-2z" /></svg></span>
              <h3>{t.tp2H}</h3>
              <p>{t.tp2P}</p>
              <span className="tg">{t.tgOpl}</span>
            </a>
            <a className="tp" href="#verlengen">
              <span className="ti"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></span>
              <h3>{t.tp3H}</h3>
              <p>{t.tp3P}</p>
              <span className="tg">{t.tgWerkt}</span>
            </a>
            <a className="tp" href="#levering">
              <span className="ti"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 18H3V8h11v10H9" /><path d="M14 10h4l3 4v4h-2" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg></span>
              <h3>{t.levH}</h3>
              <p>{t.tp4P}</p>
              <span className="tg">{t.tgVerloopt}</span>
            </a>
            <Link className="tp" to={lp("/verhuur/boeking")}>
              <span className="ti"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg></span>
              <h3>{t.tp5H}</h3>
              <p>{t.tp5P}</p>
              <span className="tg">{t.tgDekking}</span>
            </Link>
            <a className="tp" href="#afhalen">
              <span className="ti"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg></span>
              <h3>{t.tp6H}</h3>
              <p>{t.tp6P}</p>
              <span className="tg">{t.tgEerst}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= BETALINGEN ================= */}
      <section className="pay-sec" id="betalingen">
        <img className="pay-man" src="/vernast/man-betaling-2.webp" alt={t.altPay} loading="lazy" decoding="async" />
        <div className="wrap">
          <div className="pay-content">
            <div className="sec-head">
              <span className="kick">{t.betH}</span>
              <h2 className="sec">{t.payH2}</h2>
              <p className="lede">{t.payLede}</p>
            </div>
            <div className="pay-opts">
              <div className="po hot">
                <span className="pol">{t.po1L}</span>
                <h3>{t.po1H}</h3>
                <p>{t.po1P}</p>
                <ul>
                  <li><Check /> {t.li1}</li>
                  <li><Check /> {t.li2}</li>
                  <li><Check /> {t.li3}</li>
                </ul>
              </div>
              <div className="po">
                <span className="pol">{t.po2L}</span>
                <h3>{t.po2H}</h3>
                <p>{t.po2P}</p>
                <ul>
                  <li><Check /> {t.li4}</li>
                  <li><Check /> {t.li5}</li>
                  <li><Check /> {t.li6}</li>
                </ul>
              </div>
            </div>
            <div className="pay-rows">
              <div className="pr">{t.prFactuur}</div>
              <div className="pr">{t.prZak}</div>
              <div className="pr">{t.prVerl}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STORINGEN ================= */}
      <section className="fix" id="storing" style={{ backgroundColor: "#F4F4F4" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.fixKick}</span>
            <h2 className="sec">{t.fixH2}</h2>
            <p className="lede">{t.fixLede}</p>
          </div>
          <div className="fix-grid">
            <details className="fx">
              <summary>
                <h3><span className="fi"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7z" /></svg></span>{t.fx1}<span className="fx-chev" aria-hidden="true"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></span></h3>
              </summary>
              <ol>
                <li>{t.f1a}</li>
                <li>{t.f1b}</li>
                <li>{t.f1c}</li>
              </ol>
              <p>{t.f1p}</p>
            </details>
            <details className="fx">
              <summary>
                <h3><span className="fi"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg></span>{t.fx2}<span className="fx-chev" aria-hidden="true"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></span></h3>
              </summary>
              <ol>
                <li>{t.f2a}</li>
                <li>{t.f2b}</li>
              </ol>
              <p>{t.f2p}</p>
            </details>
            <details className="fx">
              <summary>
                <h3><span className="fi"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" /></svg></span>{t.fx3}<span className="fx-chev" aria-hidden="true"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></span></h3>
              </summary>
              <ol>
                <li>{t.f3a}</li>
                <li>{t.f3b}</li>
                <li>{t.f3c}</li>
              </ol>
              <p>{t.f3p}</p>
            </details>
            <details className="fx">
              <summary>
                <h3><span className="fi"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a5 5 0 0 0-6.9 6.9L3 18v3h3l4.8-4.8a5 5 0 0 0 6.9-6.9L14 12l-2-2z" /></svg></span>{t.fx4}<span className="fx-chev" aria-hidden="true"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></span></h3>
              </summary>
              <ol>
                <li>{t.f4a}</li>
                <li>{t.f4b}</li>
                <li>{t.f4c}</li>
              </ol>
              <p>{t.f4p}</p>
            </details>
            <details className="fx">
              <summary>
                <h3><span className="fi"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 15h18" /><path d="M3 9h18" /><rect x="3" y="4" width="18" height="16" rx="2" /></svg></span>{t.fx5}<span className="fx-chev" aria-hidden="true"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></span></h3>
              </summary>
              <ol>
                <li>{t.f5a}</li>
                <li>{t.f5b}</li>
              </ol>
              <p>{t.f5p(lp, pompPrijs)}</p>
            </details>
            <details className="fx">
              <summary>
                <h3><span className="fi"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></span>{t.fx6}<span className="fx-chev" aria-hidden="true"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></span></h3>
              </summary>
              <ol>
                <li>{t.f6a}</li>
                <li>{t.f6b}</li>
                <li>{t.f6c}</li>
              </ol>
              <p>{t.f6p}</p>
            </details>
            <details className="fx">
              <summary>
                <h3><span className="fi"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 12 5-3-5-3" /><path d="M12 3v18" /><path d="m22 12-5 3 5 3" /><path d="M12 8h.01M12 16h.01" /></svg></span>{t.fx7}<span className="fx-chev" aria-hidden="true"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></span></h3>
              </summary>
              <ol>
                <li>{t.f7a}</li>
                <li>{t.f7b}</li>
              </ol>
              <p>{t.f7p}</p>
            </details>
            <div className="fx call">
              <h3><span className="fi"><Phone size={16} /></span>{t.callH}</h3>
              <p>{t.callP}</p>
              <a className="btn btn-white" href="tel:+3236899065">{t.callBtn}</a>
            </div>
          </div>
          <div className="fixbar">
            <img className="fb-man" src="/vernast/man-klembord.webp" alt={t.altTech} loading="lazy" decoding="async" />
            <div className="fb-b">
              <h3>{t.fbH}</h3>
              <p>{t.fbP}</p>
            </div>
            <a className="btn btn-white" href="tel:+3236899065">{t.fbBtn}</a>
          </div>
        </div>
      </section>

      {/* ================= LEVERING ================= */}
      <section className="ext" id="levering" style={{ background: "var(--maroon-deep) url('/vernast/bg-red-wide-2.webp') center/cover no-repeat" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="kick" style={{ color: "rgba(255,255,255,.75)" }}>{t.levH}</span>
            <h2 className="sec" style={{ color: "#fff" }}>{t.levH2}</h2>
            <p className="lede" style={{ color: "rgba(255,255,255,.78)" }}>{t.levLede}</p>
          </div>
          <div className="ext-grid" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
            <div className="ex-c">
              <div className="en">01</div>
              <h3>{t.ex1H}</h3>
              <p>{t.ex1P}</p>
            </div>
            <div className="ex-c">
              <div className="en">02</div>
              <h3>{t.ex2H}</h3>
              <p>{t.ex2P}</p>
            </div>
            <div className="ex-c">
              <div className="en">03</div>
              <h3>{t.ex3H}</h3>
              <p>{t.ex3P}</p>
            </div>
            <div className="ex-c">
              <div className="en">04</div>
              <h3>{t.ex4H}</h3>
              <p>{t.ex4P}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= AFHALEN ================= */}
      <section className="ext" id="afhalen" style={{ background: "var(--bg)" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.afKick}</span>
            <h2 className="sec">{t.afH2}</h2>
            <p className="lede">{t.afLede}</p>
          </div>
          <div className="ext-grid">
            <div className="ex-c">
              <div className="exi2"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5" /><path d="m5 12 7-7 7 7" /></svg></div>
              <div className="en">{t.af1E}</div>
              <h3>{t.af1H}</h3>
              <p>{t.af1P}</p>
            </div>
            <div className="ex-c">
              <div className="exi2"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 6.5h11" /><path d="M6 20V10a6 6 0 0 1 12 0v10" /><path d="M4 20h16" /></svg></div>
              <div className="en">{t.af2E}</div>
              <h3>{t.af2H}</h3>
              <p>{t.af2P}</p>
            </div>
            <div className="ex-c">
              <div className="exi2"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg></div>
              <div className="en">{t.af3E}</div>
              <h3>{t.af3H}</h3>
              <p>{t.af3P}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DIGITAAL ================= */}
      <section className="digi" id="digitaal">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.digKick}</span>
            <h2 className="sec">{t.digH2}</h2>
            <p className="lede">{t.digLede}</p>
          </div>
          <div className="digi-grid">
            <div className="dg">
              <div className="dgi"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></div>
              {t.dg1}
            </div>
            <div className="dg">
              <div className="dgi"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" /></svg></div>
              {t.dg2}
            </div>
            <div className="dg">
              <div className="dgi"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg></div>
              {t.dg3}
            </div>
          </div>
        </div>
      </section>

      {/* ================= VERLENGEN ================= */}
      <section className="ext" id="verlengen" style={{ backgroundColor: "#F4F4F4" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.verKick}</span>
            <h2 className="sec">{t.verH2}</h2>
            <p className="lede">{t.verLede}</p>
          </div>
          <div className="ext-grid">
            <div className="ex-c">
              <div className="en">{t.v1E}</div>
              <h3>{t.v1H}</h3>
              <p>{t.v1P}</p>
            </div>
            <div className="ex-c">
              <div className="en">{t.v2E}</div>
              <h3>{t.v2H}</h3>
              <p>{t.v2P}</p>
            </div>
            <div className="ex-c">
              <div className="en">{t.v3E}</div>
              <h3>{t.v3H}</h3>
              <p>{t.v3P}</p>
            </div>
          </div>
          <p className="ext-note">{t.verNote}</p>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="cta" id="contact">
        <div className="wrap">
          <div className="sec-head mid">
            <span className="kick">Contact</span>
            <h2 className="sec">{t.ctaH2}</h2>
            <p className="lede">{t.ctaLede}</p>
          </div>
          <div className="cta-shell">
            <div className="cta-info">
              <div className="ci">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92V21a1 1 0 0 1-1.11 1A19.86 19.86 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.29 1L7 10.5a16 16 0 0 0 6.5 6.5l1.75-1.8a1 1 0 0 1 1-.29l4 1a1 1 0 0 1 .75 1Z" /></svg>
                <div><b>{t.ciBel}</b><a href="tel:+3236899065">03 689 90 65</a> · <span>{t.ciUren}</span></div>
              </div>
              <div className="ci">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></svg>
                <div><b>{t.q2}</b><a href="mailto:info@vernast-bouwdrogers.be">info@vernast-bouwdrogers.be</a> · <span>{t.ciAntw}</span></div>
              </div>
              <div className="ci">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                <div>{t.ciAfh}</div>
              </div>
              <div className="ci">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
                <div>{t.ciSpoed}</div>
              </div>
            </div>
            <form className="cform" id="ksForm" onSubmit={handleSubmit}>
              {status === "done" ? (
                <AanvraagDone text={t.done} />
              ) : (
              <>
              <h3>{t.formH}</h3>
              <div className="fr">
                <div><label htmlFor="ksVoornaam">{t.lVoor}</label><input id="ksVoornaam" name="voornaam" required /></div>
                <div><label htmlFor="ksNaam">{t.lNaam}</label><input id="ksNaam" name="naam" required /></div>
              </div>
              <div className="fr">
                <div><label htmlFor="ksMail">{t.lMail}</label><input id="ksMail" name="email" type="email" required /></div>
                <div><label htmlFor="ksTel">{t.lTel}</label><input id="ksTel" name="telefoon" type="tel" /></div>
              </div>
              <div className="fr">
                <div className="full"><label htmlFor="ksOnderwerp">{t.lOnd}</label>
                  <select id="ksOnderwerp" name="onderwerp">
                    <option>{t.o1}</option>
                    <option>{t.o2}</option>
                    <option>{t.o4}</option>
                    <option>{t.o3}</option>
                    <option>{t.o5}</option>
                  </select>
                </div>
              </div>
              <div className="fr">
                <div className="full"><label htmlFor="ksVraag">{t.lVraag}</label><textarea id="ksVraag" name="vraag" placeholder={t.phVraag} required></textarea></div>
              </div>
              <AanvraagHoneypot />
              <button className="btn btn-red aanv-btn" type="submit" disabled={sending}>{sending ? t.versturen : t.verstuur}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </button>
              <AanvraagError error={error} mailto={mailto} />
              <div className="fnote">{t.fnote}</div>
              </>
              )}
            </form>
          </div>
        </div>
      </section>

      <V3Footer />
    </div>
  );
};

export default KlantservicePage;

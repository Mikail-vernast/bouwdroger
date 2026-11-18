import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import { useSeo } from "@/data/seo";
import { useCopy, useLokaalPad } from "@/i18n/useTaal";
import { CONTACT_COPY } from "./ContactPage.copy";
import { MAPS_URL } from "@/lib/site";
import { AanvraagDone, AanvraagError, AanvraagHoneypot } from "@/components/AanvraagForm";
import { useAanvraag } from "@/hooks/useAanvraag";
import "@/styles/contact.css";
import "@/styles/contact-fixes.css";

/**
 * Contact — 1:1-transcriptie van de Claude Design-handoff (Contact.html).
 * De eigen header/footer van het design zijn vervangen door de gedeelde
 * <V3Header>/<V3Footer>; de rest is de designmarkup, gescoped onder
 * `.ct-page` (zie src/styles/contact.css). Assets komen uit /vernast/*.webp.
 *
 * De `.rv`-scroll-reveals en het <script> uit de bron zijn geschrapt: de
 * pagina wordt geprerenderd en moet zonder JS zichtbaar zijn. Het
 * contactformulier gaat via `/api/aanvraag` naar het bouwdrogers-portaal
 * (bron `contact`); zie `useAanvraag`.
 */

const ContactPage = () => {
  const { status, error, mailto, sending, handleSubmit } = useAanvraag({
    source: "contact",
    messageField: "bericht",
    mailSubject: "Contact",
  });
  const t = useCopy(CONTACT_COPY);
  const lp = useLokaalPad();

  return (
    <div className="ct-page">
      <PageMeta
        {...useSeo("contact")}
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: lp("/") },
            { name: "Contact", path: lp("/contact") },
          ]),
        ]}
      />

      <V3Header lightAfter={420} />

      {/* ================= HERO ================= */}
      <div className="redtop">
        <section className="hero">
          <div className="wrap">
            <div className="hero-grid">
              <div>
                <span className="kick">{t.kick}</span>
                <h1>{t.heroH1}</h1>
                <p>{t.heroP}</p>
                <div className="hbadges">
                  <a href="tel:+3236899065"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92V21a1 1 0 0 1-1.11 1A19.86 19.86 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.29 1L7 10.5a16 16 0 0 0 6.5 6.5l1.75-1.8a1 1 0 0 1 1-.29l4 1a1 1 0 0 1 .75 1Z" /></svg> 03 689 90 65</a>
                  <a href="mailto:info@vernast-bouwdrogers.be"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></svg> info@vernast-bouwdrogers.be</a>
                  <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>{t.uren}</span>
                </div>
              </div>
              <a className="hero-map" href="#locatie" aria-label={t.ariaHeroMap}>
                <svg viewBox="0 0 900 460" role="img" aria-hidden="true">
                  <rect width="900" height="460" fill="#F7F6F6" />
                  <rect x="810" y="0" width="90" height="460" fill="#ECEAEA" />
                  <text x="855" y="230" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="13" fontWeight="700" fill="#b3afaf" transform="rotate(-90 855 230)">A12</text>
                  <rect x="690" y="0" width="72" height="460" fill="#E3E1E1" />
                  <line x1="726" y1="0" x2="726" y2="460" stroke="#fff" strokeWidth="4" strokeDasharray="26 20" />
                  <text x="672" y="230" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="13" fontWeight="700" fill="#8a8686" transform="rotate(-90 672 230)">N177 · BOOMSESTEENWEG</text>
                  <rect x="40" y="350" width="686" height="52" fill="#E3E1E1" />
                  <text x="420" y="396" fontFamily="ui-monospace,monospace" fontSize="13" fontWeight="700" fill="#8a8686" letterSpacing="2">KLEIDAAL</text>
                  <g>
                    <rect x="480" y="34" width="170" height="60" rx="10" fill="#fff" stroke="#d9d5d5" strokeWidth="2" />
                    <text x="565" y="60" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="11.5" fontWeight="700" fill="#8a8686" letterSpacing="1.5">KIA VERMANT</text>
                    <text x="565" y="80" textAnchor="middle" fontFamily="system-ui" fontSize="11.5" fill="#b3afaf">{t.herkenning}</text>
                  </g>
                  <g>
                    <rect x="480" y="128" width="170" height="72" rx="10" fill="#fff" stroke="#d9d5d5" strokeWidth="2" />
                    <text x="565" y="160" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="13" fontWeight="700" fill="#3a3737" letterSpacing="2">TESLA</text>
                    <text x="565" y="182" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#8a8686">{t.eerstTesla}</text>
                  </g>
                  <g>
                    <rect x="462" y="236" width="188" height="86" rx="10" fill="#fff" stroke="#d9d5d5" strokeWidth="2" />
                    <rect x="462" y="236" width="188" height="26" rx="10" fill="#C8102E" />
                    <text x="556" y="254" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="12" fontWeight="700" fill="#fff" letterSpacing="2">CARGLASS</text>
                    <text x="556" y="286" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#8a8686">{t.daarnaCarglass}</text>
                    <text x="556" y="304" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#8a8686">{t.rechtsIn}</text>
                  </g>
                  <g>
                    <rect x="40" y="216" width="250" height="100" rx="12" fill="#C8102E" />
                    <text x="165" y="256" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="14" fontWeight="700" fill="#fff" letterSpacing="2">VERNAST · UNIT 11</text>
                    <text x="165" y="280" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="rgba(255,255,255,.85)">{t.hoofdAfhaal}</text>
                  </g>
                  <path className="route-alt" d="M855 16 L855 200 L740 288 L726 310" fill="none" stroke="#DE9AA5" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="855" cy="16" r="7" fill="#DE9AA5" stroke="#fff" strokeWidth="3" />
                  <text x="838" y="20" textAnchor="end" fontFamily="system-ui" fontSize="12" fontWeight="600" fill="#b3afaf">{t.ofA12}</text>
                  <text x="838" y="37" textAnchor="end" fontFamily="system-ui" fontSize="12" fontWeight="600" fill="#b3afaf">{t.afrit}</text>
                  <path className="route-line" d="M726 16 L726 376 L96 376" fill="none" stroke="#C8102E" strokeWidth="5" strokeLinecap="round" />
                  <circle className="pin-pulse" cx="96" cy="376" r="10" fill="none" stroke="#C8102E" strokeWidth="3" />
                  <circle cx="96" cy="376" r="9" fill="#C8102E" stroke="#fff" strokeWidth="3" />
                  <circle className="car-dot" r="8" fill="#141414" stroke="#fff" strokeWidth="3" />
                  <g>
                    <circle cx="726" cy="16" r="8" fill="#3a3737" stroke="#fff" strokeWidth="3" />
                    <text x="700" y="26" textAnchor="end" fontFamily="system-ui" fontSize="12" fontWeight="600" fill="#8a8686">{t.vanAntwerpen}</text>
                  </g>
                </svg>
                <div className="hm-cap"><i></i>{t.mapCap}</div>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* ================= KANALEN ================= */}
      <section className="chan">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.chanKick}</span>
            <h2 className="sec">{t.chanH2}</h2>
          </div>
          <div className="ch-grid">
            <a className="ch" href="tel:+3236899065">
              <span className="ci"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92V21a1 1 0 0 1-1.11 1A19.86 19.86 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.29 1L7 10.5a16 16 0 0 0 6.5 6.5l1.75-1.8a1 1 0 0 1 1-.29l4 1a1 1 0 0 1 .75 1Z" /></svg></span>
              <h3>{t.belH}</h3>
              <p>{t.belP}</p>
              <span className="cl">03 689 90 65</span>
            </a>
            <a className="ch" href="mailto:info@vernast-bouwdrogers.be">
              <span className="ci"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></svg></span>
              <h3>{t.mailH}</h3>
              <p>{t.mailP}</p>
              <span className="cl">info@vernast-bouwdrogers.be</span>
            </a>
            <a className="ch" href="mailto:administratie@vernast.be">
              <span className="ci"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /></svg></span>
              <h3>{t.factH}</h3>
              <p>{t.factP}</p>
              <span className="cl">administratie@vernast.be</span>
            </a>
            <a className="ch" href={lp("/klantservice")}>
              <span className="ci"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a5 5 0 0 0-6.9 6.9L3 18v3h3l4.8-4.8a5 5 0 0 0 6.9-6.9L14 12l-2-2z" /></svg></span>
              <h3>{t.huurH}</h3>
              <p>{t.huurP}</p>
              <span className="cl">{t.naarKs}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= LOCATIE + KAART ================= */}
      <section className="loc" id="locatie">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.locKick}</span>
            <h2 className="sec" style={{ color: "#fff" }}>{t.locH2}</h2>
            <p className="lede" style={{ color: "rgba(255,255,255,.78)" }}>{t.locLede}</p>
          </div>
          <div className="loc-grid2">
            <div className="lc2">
              <div className="lt"><span className="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /><path d="M9 21v-6h6v6" /></svg></span><h3>{t.hfdH}</h3></div>
              {/*
                Het postadres zoals overal op de site en in de JSON-LD (`CONTACT`
                in src/lib/site.ts). Hier stond "Kleidaal 12" uit de designhandoff;
                Kleidaal is de toegangsweg van het KMO-park (zie de routestappen
                hieronder), het adres is Boomsesteenweg 12. Twee adressen voor één
                magazijn is precies wat een NAP-check afstraft.
              */}
              <p><b>Vernast Bouwdrogers</b><br />Boomsesteenweg 12, Unit 11 · 2630 Aartselaar</p>
              <div className="lrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg><span>{t.kantoor}</span></div>
              <div className="lrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg><span>{t.parkeren}</span></div>
              <a className="lgo" href={MAPS_URL} target="_blank" rel="noopener">{t.maps}<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
            </div>
            <div className="lc2">
              <div className="lt"><span className="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg></span><h3>{t.afhaalH}</h3></div>
              <p>{t.afhaalP}</p>
              <div className="lrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg><span>{t.afhaalUren}</span></div>
              <div className="lrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{t.reserveer(lp)}</span></div>
              <a className="lgo" href={lp("/afhalen")}>{t.zoWerkt}<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
            </div>
            <div className="lc2 dark">
              <span className="a12">A12</span>
              <h3>{t.snelH}</h3>
              <p className="ldk">{t.snelP}</p>
              {t.stappen.map((stap, i) => (
                <div className="lstep" key={i}><i>{i + 1}</i><span>{stap}</span></div>
              ))}
              <a className="lgo w" href="#route">{t.routeFotos}<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
            </div>
          </div>
          <div className="map-card">
            <svg viewBox="0 0 900 460" role="img" aria-label={t.ariaMap}>
              <rect width="900" height="460" fill="#F7F6F6" />
              <rect x="810" y="0" width="90" height="460" fill="#ECEAEA" />
              <text x="855" y="230" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="13" fontWeight="700" fill="#b3afaf" transform="rotate(-90 855 230)">A12</text>
              <rect x="690" y="0" width="72" height="460" fill="#E3E1E1" />
              <line x1="726" y1="0" x2="726" y2="460" stroke="#fff" strokeWidth="4" strokeDasharray="26 20" />
              <text x="672" y="230" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="13" fontWeight="700" fill="#8a8686" transform="rotate(-90 672 230)">N177 · BOOMSESTEENWEG</text>
              <rect x="40" y="350" width="686" height="52" fill="#E3E1E1" />
              <text x="420" y="396" fontFamily="ui-monospace,monospace" fontSize="13" fontWeight="700" fill="#8a8686" letterSpacing="2">KLEIDAAL</text>
              <g>
                <rect x="480" y="34" width="170" height="60" rx="10" fill="#fff" stroke="#d9d5d5" strokeWidth="2" />
                <text x="565" y="60" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="11.5" fontWeight="700" fill="#8a8686" letterSpacing="1.5">KIA VERMANT</text>
                <text x="565" y="80" textAnchor="middle" fontFamily="system-ui" fontSize="11.5" fill="#b3afaf">{t.herkenning}</text>
              </g>
              <g>
                <rect x="480" y="128" width="170" height="72" rx="10" fill="#fff" stroke="#d9d5d5" strokeWidth="2" />
                <text x="565" y="160" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="13" fontWeight="700" fill="#3a3737" letterSpacing="2">TESLA</text>
                <text x="565" y="182" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#8a8686">{t.eerstTesla}</text>
              </g>
              <g>
                <rect x="462" y="236" width="188" height="86" rx="10" fill="#fff" stroke="#d9d5d5" strokeWidth="2" />
                <rect x="462" y="236" width="188" height="26" rx="10" fill="#C8102E" />
                <text x="556" y="254" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="12" fontWeight="700" fill="#fff" letterSpacing="2">CARGLASS</text>
                <text x="556" y="286" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#8a8686">{t.daarnaCarglass}</text>
                <text x="556" y="304" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#8a8686">{t.rechtsIn}</text>
              </g>
              <g>
                <rect x="40" y="216" width="250" height="100" rx="12" fill="#C8102E" />
                <text x="165" y="256" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="14" fontWeight="700" fill="#fff" letterSpacing="2">VERNAST · UNIT 11</text>
                <text x="165" y="280" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="rgba(255,255,255,.85)">{t.hoofdAfhaal}</text>
              </g>
              <path className="route-alt" d="M855 16 L855 200 L740 288 L726 310" fill="none" stroke="#DE9AA5" strokeWidth="4" strokeLinecap="round" />
              <circle cx="855" cy="16" r="7" fill="#DE9AA5" stroke="#fff" strokeWidth="3" />
              <text x="838" y="20" textAnchor="end" fontFamily="system-ui" fontSize="12" fontWeight="600" fill="#b3afaf">{t.ofA12}</text>
                  <text x="838" y="37" textAnchor="end" fontFamily="system-ui" fontSize="12" fontWeight="600" fill="#b3afaf">{t.afrit}</text>
              <path className="route-line" d="M726 16 L726 376 L96 376" fill="none" stroke="#C8102E" strokeWidth="5" strokeLinecap="round" />
              <circle className="pin-pulse" cx="96" cy="376" r="10" fill="none" stroke="#C8102E" strokeWidth="3" />
              <circle cx="96" cy="376" r="9" fill="#C8102E" stroke="#fff" strokeWidth="3" />
              <circle className="car-dot" r="8" fill="#141414" stroke="#fff" strokeWidth="3" />
              <g>
                <circle cx="726" cy="16" r="8" fill="#3a3737" stroke="#fff" strokeWidth="3" />
                <text x="700" y="26" textAnchor="end" fontFamily="system-ui" fontSize="12" fontWeight="600" fill="#8a8686">{t.vanAntwerpen}</text>
              </g>
            </svg>
            <div className="map-leg">
              <span><i style={{ background: "#C8102E" }}></i>{t.legUnit}</span>
              <span><i style={{ background: "#3a3737" }}></i>{t.leg1}</span>
              <span><i style={{ background: "#C8102E" }}></i>{t.leg2}</span>
              <span><i style={{ background: "#E3E1E1" }}></i>{t.leg3}</span>
              <span><i style={{ background: "#DE9AA5" }}></i>{t.legAlt}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ROUTE FOTO'S ================= */}
      <section className="route" id="route">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.routeKick}</span>
            <h2 className="sec">{t.routeH2}</h2>
          </div>
          <div className="rt-grid">
            <div className="rt">
              <div className="im"><span className="n">1</span><img src="/vernast/route-1.webp" alt={t.alt1} loading="lazy" decoding="async" /></div>
              <p>{t.route[0]}</p>
            </div>
            <div className="rt">
              <div className="im"><span className="n">2</span><img src="/vernast/route-2.webp" alt={t.alt2} loading="lazy" decoding="async" /></div>
              <p>{t.route[1]}</p>
            </div>
            <div className="rt">
              <div className="im"><span className="n">3</span><img src="/vernast/route-3.webp" alt={t.alt3} loading="lazy" decoding="async" /></div>
              <p>{t.route[2]}</p>
            </div>
            <div className="rt">
              <div className="im"><span className="n">4</span><img src="/vernast/route-4.webp" alt={t.alt4} loading="lazy" decoding="async" /></div>
              <p>{t.route[3]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FORMULIER ================= */}
      <section className="cform" id="formulier">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.formKick}</span>
            <h2 className="sec">{t.formH2}</h2>
            <p className="lede">{t.formLede}</p>
          </div>
          <form className="fshell" onSubmit={handleSubmit}>
            {status === "done" ? (
              <AanvraagDone text={t.done} />
            ) : (
            <div id="formBody">
              <div className="frow">
                <div className="fld"><label htmlFor="fVoor">{t.lVoor}</label><input type="text" id="fVoor" name="voornaam" placeholder={t.phVoor} required /></div>
                <div className="fld"><label htmlFor="fNaam">{t.lNaam}</label><input type="text" id="fNaam" name="naam" placeholder={t.phNaam} required /></div>
              </div>
              <div className="frow">
                <div className="fld"><label htmlFor="fMail">{t.lMail}</label><input type="email" id="fMail" name="email" placeholder={t.phMail} required /></div>
                <div className="fld"><label htmlFor="fTel">{t.lTel}</label><input type="tel" id="fTel" name="telefoon" placeholder="04.." /></div>
              </div>
              <div className="frow one">
                <div className="fld"><label htmlFor="fOnd">{t.lOnd}</label>
                  <select id="fOnd" name="onderwerp">
                    <option>{t.o1}</option>
                    <option>{t.o2}</option>
                    <option>{t.o3}</option>
                    <option>{t.o4}</option>
                    <option>{t.o5}</option>
                  </select>
                </div>
              </div>
              <div className="frow one">
                <div className="fld"><label htmlFor="fMsg">{t.lMsg}</label><textarea id="fMsg" name="bericht" rows={5} placeholder={t.phMsg} required></textarea></div>
              </div>
              <div className="fsend">
                <small>{t.privNote}</small>
                <button className="btn aanv-btn" type="submit" disabled={sending}>{sending ? t.versturen : t.verstuur}<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></button>
              </div>
              <AanvraagHoneypot />
              <AanvraagError error={error} mailto={mailto} />
            </div>
            )}
          </form>
        </div>
      </section>

      <V3Footer />
    </div>
  );
};

export default ContactPage;

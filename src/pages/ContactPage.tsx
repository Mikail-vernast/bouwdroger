import { useState } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import { SEO } from "@/data/seo";
import "@/styles/contact.css";
import "@/styles/contact-fixes.css";

/**
 * Contact — 1:1 transcription of the Claude Design handoff (Contact.html).
 * The design's own header/footer are replaced by the shared
 * <V3Header>/<V3Footer>; everything else is the design's markup, scoped under
 * `.contact-page` (see src/styles/contact.css). Assets resolve from
 * /vernast/*.webp. The route illustration is kept as an inline SVG.
 */

/** The A12 route illustration reused in the hero and in the location map card. */
const RouteMap = ({ ariaLabel }: { ariaLabel?: string }) => (
  <svg viewBox="0 0 900 460" role="img" {...(ariaLabel ? { "aria-label": ariaLabel } : { "aria-hidden": true })}>
    <rect width="900" height="460" fill="#F7F6F6" />
    <rect x="810" y="0" width="90" height="460" fill="#ECEAEA" />
    <text x="855" y="230" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="13" fontWeight="700" fill="#b3afaf" transform="rotate(-90 855 230)">A12</text>
    <rect x="690" y="0" width="72" height="460" fill="#E3E1E1" />
    <line x1="726" y1="0" x2="726" y2="460" stroke="#fff" strokeWidth="4" strokeDasharray="26 20" />
    <text x="672" y="230" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="13" fontWeight="700" fill="#8a8686" transform="rotate(-90 672 230)">N177 · BOOMSESTEENWEG</text>
    <rect x="40" y="350" width="686" height="52" fill="#E3E1E1" />
    <text x="420" y="383" fontFamily="ui-monospace,monospace" fontSize="13" fontWeight="700" fill="#8a8686" letterSpacing="2">KLEIDAAL</text>
    <g>
      <rect x="480" y="34" width="170" height="60" rx="10" fill="#fff" stroke="#d9d5d5" strokeWidth="2" />
      <text x="565" y="60" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="11.5" fontWeight="700" fill="#8a8686" letterSpacing="1.5">KIA VERMANT</text>
      <text x="565" y="80" textAnchor="middle" fontFamily="system-ui" fontSize="11.5" fill="#b3afaf">herkenningspunt</text>
    </g>
    <g>
      <rect x="480" y="128" width="170" height="72" rx="10" fill="#fff" stroke="#d9d5d5" strokeWidth="2" />
      <text x="565" y="160" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="13" fontWeight="700" fill="#3a3737" letterSpacing="2">TESLA</text>
      <text x="565" y="182" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#8a8686">u passeert eerst Tesla</text>
    </g>
    <g>
      <rect x="462" y="236" width="188" height="86" rx="10" fill="#fff" stroke="#d9d5d5" strokeWidth="2" />
      <rect x="462" y="236" width="188" height="26" rx="10" fill="#C8102E" />
      <text x="556" y="254" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="12" fontWeight="700" fill="#fff" letterSpacing="2">CARGLASS</text>
      <text x="556" y="286" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#8a8686">daarna Carglass,</text>
      <text x="556" y="304" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#8a8686">hier rechts indraaien</text>
    </g>
    <g>
      <rect x="40" y="216" width="250" height="100" rx="12" fill="#C8102E" />
      <text x="165" y="256" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="14" fontWeight="700" fill="#fff" letterSpacing="2">VERNAST · UNIT 11</text>
      <text x="165" y="280" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="rgba(255,255,255,.85)">Hoofdkantoor + afhaalpoort</text>
    </g>
    <path className="route-alt" d="M855 16 L855 200 L740 288 L726 310" fill="none" stroke="#DE9AA5" strokeWidth="4" strokeLinecap="round" />
    <circle cx="855" cy="16" r="7" fill="#DE9AA5" stroke="#fff" strokeWidth="3" />
    <text x="838" y="26" textAnchor="end" fontFamily="system-ui" fontSize="12" fontWeight="600" fill="#b3afaf">of via de A12, afrit Aartselaar</text>
    <path className="route-line" d="M726 16 L726 376 L96 376" fill="none" stroke="#C8102E" strokeWidth="5" strokeLinecap="round" />
    <circle className="pin-pulse" cx="96" cy="376" r="10" fill="none" stroke="#C8102E" strokeWidth="3" />
    <circle cx="96" cy="376" r="9" fill="#C8102E" stroke="#fff" strokeWidth="3" />
    <circle className="car-dot" r="8" fill="#141414" stroke="#fff" strokeWidth="3" />
    <g>
      <circle cx="726" cy="16" r="8" fill="#3a3737" stroke="#fff" strokeWidth="3" />
      <text x="700" y="26" textAnchor="end" fontFamily="system-ui" fontSize="12" fontWeight="600" fill="#8a8686">u komt van Antwerpen via de N177</text>
    </g>
  </svg>
);

const ContactPage = () => {
  const [sent, setSent] = useState(false);

  return (
    <div className="contact-page">
      <PageMeta
        {...SEO.contact}
        path="/contact"
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
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
                <span className="kick rv">Contact</span>
                <h1 className="rv">Boekingen, vragen en afhalingen langs de A12.</h1>
                <p className="rv d1">Bel, mail of kom langs in Aartselaar. Heeft u een vraag over een lopende huur? Dan helpt onze klantenservice u het snelst verder.</p>
                <div className="hbadges rv d2">
                  <a href="tel:+3236899065"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92V21a1 1 0 0 1-1.11 1A19.86 19.86 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.29 1L7 10.5a16 16 0 0 0 6.5 6.5l1.75-1.8a1 1 0 0 1 1-.29l4 1a1 1 0 0 1 .75 1Z" /></svg> 03 689 90 65</a>
                  <a href="mailto:info@vernast-verhuur.be"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></svg> info@vernast-verhuur.be</a>
                  <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg> Ma–Vr 08:00–17:00</span>
                </div>
                <div className="cta rv d3">
                  <a className="btn btn-white" href="#formulier">Stel uw vraag<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
                  <Link className="btn btn-ghost" to="/klantservice">Naar de klantenservice</Link>
                </div>
              </div>
              <a className="hero-map rv d2" href="#locatie" aria-label="Bekijk onze locatie langs de A12">
                <RouteMap />
                <div className="hm-cap"><i /> Ons afhaalpunt langs de A12 · bekijk de route</div>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* ================= KANALEN ================= */}
      <section className="chan">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick rv">Hoe kunnen we helpen?</span>
            <h2 className="sec rv">Kies het kanaal dat u het beste past.</h2>
          </div>
          <div className="ch-grid">
            <a className="ch rv" href="tel:+3236899065">
              <span className="ci"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92V21a1 1 0 0 1-1.11 1A19.86 19.86 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.29 1L7 10.5a16 16 0 0 0 6.5 6.5l1.75-1.8a1 1 0 0 1 1-.29l4 1a1 1 0 0 1 .75 1Z" /></svg></span>
              <h3>Bel ons</h3>
              <p>Voor dringende vragen, storingen of advies over het juiste pakket. Ma–Vr van 08:00 tot 17:00.</p>
              <span className="cl">03 689 90 65</span>
            </a>
            <a className="ch rv d1" href="mailto:info@vernast-verhuur.be">
              <span className="ci"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></svg></span>
              <h3>Mail ons</h3>
              <p>Algemene vragen, offertes op maat of documenten doorsturen. U krijgt binnen één werkdag antwoord.</p>
              <span className="cl">info@vernast-verhuur.be</span>
            </a>
            <a className="ch rv d2" href="mailto:administratie@vernast.be">
              <span className="ci"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /></svg></span>
              <h3>Facturatie</h3>
              <p>Factuur niet ontvangen of een vraag over uw betaling? Onze administratie volgt het meteen op.</p>
              <span className="cl">administratie@vernast.be</span>
            </a>
            <Link className="ch rv d3" to="/klantservice">
              <span className="ci"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a5 5 0 0 0-6.9 6.9L3 18v3h3l4.8-4.8a5 5 0 0 0 6.9-6.9L14 12l-2-2z" /></svg></span>
              <h3>Huurt u al bij ons?</h3>
              <p>Storing aan een toestel, verlengen, ophaling plannen: op de klantenservicepagina lost u het meteen op.</p>
              <span className="cl">Naar klantenservice →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= LOCATIE + KAART ================= */}
      <section className="loc" id="locatie">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick rv">Onze locatie</span>
            <h2 className="sec rv" style={{ color: "#fff" }}>Hoofdkantoor &amp; afhaalpunt, vlak langs de A12.</h2>
            <p className="lede rv d1" style={{ color: "rgba(255,255,255,.78)" }}>Bewust gekozen: ons magazijn ligt pal langs de A12, <b style={{ color: "#fff" }}>halfweg tussen Antwerpen en Brussel</b>. U rijdt de snelweg af en staat één minuut later aan onze poort, geen centrum, geen zoekwerk, laden en meteen weer weg. De inrit van het KMO-park ligt <b style={{ color: "#fff" }}>naast Carglass</b>, op de hoek herkent u <b style={{ color: "#fff" }}>Tesla</b>.</p>
          </div>
          <div className="loc-grid2">
            <div className="lc2 rv">
              <div className="lt"><span className="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /><path d="M9 21v-6h6v6" /></svg></span><h3>Hoofdkantoor</h3></div>
              <p><b>Vernast Verhuur</b><br />Boomsesteenweg 12, Unit 11 · 2630 Aartselaar</p>
              <div className="lrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg><span><b>Kantoor:</b> Ma–Vr 08:00–17:00</span></div>
              <div className="lrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg><span>Parkeren kan vlak voor de unit.</span></div>
              <a className="lgo" href="https://www.google.com/maps/search/?api=1&query=Boomsesteenweg+12+2630+Aartselaar" target="_blank" rel="noopener">Open in Google Maps<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
            </div>
            <div className="lc2 rv d1">
              <div className="lt"><span className="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg></span><h3>Afhaalpunt magazijn</h3></div>
              <p>Zelfde site, aan de <b>poort van unit 11</b>. Wij zetten uw reservatie klaar en laden mee in.</p>
              <div className="lrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg><span><b>Afhalen &amp; retour:</b> enkel op afgesproken momenten</span></div>
              <div className="lrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>Reserveer eerst online via <Link to="/verhuur/afhalen">zelf afhalen</Link>, dan ligt alles klaar.</span></div>
              <Link className="lgo" to="/verhuur/afhalen">Zo werkt zelf afhalen<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></Link>
            </div>
            <div className="lc2 dark rv d2">
              <span className="a12">A12</span>
              <h3>Dé locatie voor snel afhalen</h3>
              <p className="ldk">Via de A12 bent u er vanuit Antwerpen in 15 minuten, vanuit Brussel in 25. Zo herkent u de inrit:</p>
              <div className="lstep"><i>1</i><span>U rijdt de N177 af en passeert eerst <b>Tesla</b>.</span></div>
              <div className="lstep"><i>2</i><span>Vlak na <b>Carglass</b> draait u rechts het KMO-park in.</span></div>
              <div className="lstep"><i>3</i><span>Volg Kleidaal rechtdoor tot <b>unit 11</b>, onze poort.</span></div>
              <a className="lgo w" href="#route">Bekijk de route in foto's<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
            </div>
          </div>
          <div className="map-card rv d2">
            <RouteMap ariaLabel="Kaartje: via de N177 langs Tesla en Carglass, dan rechts indraaien naar Vernast unit 11" />
            <div className="map-leg">
              <span><i style={{ background: "#C8102E" }} /> Vernast, unit 11</span>
              <span><i style={{ background: "#3a3737" }} /> 1. U passeert Tesla</span>
              <span><i style={{ background: "#C8102E" }} /> 2. Na Carglass rechts indraaien</span>
              <span><i style={{ background: "#E3E1E1" }} /> 3. Kleidaal volgen tot unit 11</span>
              <span><i style={{ background: "#DE9AA5" }} /> Alternatief: via de A12, afrit Aartselaar naar de N177</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ROUTE FOTO'S ================= */}
      <section className="route" id="route">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick rv">Zo vindt u ons</span>
            <h2 className="sec rv">In vier stappen tot aan onze poort.</h2>
          </div>
          <div className="rt-grid">
            <div className="rt rv">
              <div className="im"><span className="n">1</span><img src="/vernast/route-1.webp" alt="Inrit Kleidaal naast Carglass" loading="lazy" decoding="async" /></div>
              <p><b>Neem de inrit van het KMO-park</b> langs de A12, vlak naast Carglass. Op de hoek van de inrit staat Tesla.</p>
            </div>
            <div className="rt rv d1">
              <div className="im"><span className="n">2</span><img src="/vernast/route-2.webp" alt="Weg het park in richting Arthrex" loading="lazy" decoding="async" /></div>
              <p><b>Volg de weg rechtdoor</b> het park in, richting het zwarte Arthrex-gebouw.</p>
            </div>
            <div className="rt rv d2">
              <div className="im"><span className="n">3</span><img src="/vernast/route-3.webp" alt="Units met laadkades" loading="lazy" decoding="async" /></div>
              <p><b>Houd rechts aan</b> voorbij de eerste units en volg de nummering tot 11–12.</p>
            </div>
            <div className="rt rv d3">
              <div className="im"><span className="n">4</span><img src="/vernast/route-4.webp" alt="Unit 11, poort van Vernast" loading="lazy" decoding="async" /></div>
              <p><b>Unit 11 is onze poort.</b> Parkeer ervoor en meld u aan, wij laden mee in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FORMULIER ================= */}
      <section className="cform" id="formulier">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick rv">Stel uw vraag</span>
            <h2 className="sec rv">Liever schriftelijk? Stuur ons een bericht.</h2>
            <p className="lede rv d1">U krijgt binnen één werkdag antwoord. Dringend? Bel dan 03 689 90 65.</p>
          </div>
          <div className="fshell rv d2">
            <div id="formBody" style={{ display: sent ? "none" : undefined }}>
              <div className="frow">
                <div className="fld"><label htmlFor="fVoor">Voornaam</label><input type="text" id="fVoor" placeholder="Voornaam" /></div>
                <div className="fld"><label htmlFor="fNaam">Naam</label><input type="text" id="fNaam" placeholder="Achternaam" /></div>
              </div>
              <div className="frow">
                <div className="fld"><label htmlFor="fMail">E-mail</label><input type="email" id="fMail" placeholder="naam@voorbeeld.be" /></div>
                <div className="fld"><label htmlFor="fTel">Telefoon</label><input type="tel" id="fTel" placeholder="04.." /></div>
              </div>
              <div className="frow one">
                <div className="fld"><label htmlFor="fOnd">Onderwerp</label>
                  <select id="fOnd">
                    <option>Vraag over een pakket of offerte</option>
                    <option>Lopende huur of verlenging</option>
                    <option>Afhaling in Aartselaar</option>
                    <option>Factuur of betaling</option>
                    <option>Iets anders</option>
                  </select>
                </div>
              </div>
              <div className="frow one">
                <div className="fld"><label htmlFor="fMsg">Uw bericht</label><textarea id="fMsg" rows={5} placeholder="Vertel kort waarmee we u kunnen helpen"></textarea></div>
              </div>
              <div className="fsend">
                <small>Wij gebruiken uw gegevens enkel om uw vraag te beantwoorden.</small>
                <button className="btn" type="button" id="fSend" onClick={() => setSent(true)}>Verstuur bericht<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></button>
              </div>
            </div>
            <div className={sent ? "fdone on" : "fdone"} id="formDone">
              <div className="ic"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></div>
              <h3>Bericht verzonden</h3>
              <p>Bedankt! We nemen binnen één werkdag contact met u op.</p>
            </div>
          </div>
        </div>
      </section>

      <V3Footer />
    </div>
  );
};

export default ContactPage;

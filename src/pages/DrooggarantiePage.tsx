import { useState } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import { SEO } from "@/data/seo";
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

const DrooggarantiePage = () => {
  const [sent, setSent] = useState(false);

  return (
    <div className="dg-page">
      <PageMeta
        {...SEO.drooggarantie}
        path="/drooggarantie"
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Drooggarantie", path: "/drooggarantie" },
          ]),
        ]}
      />

      <V3Header lightAfter={420} />

      {/* ================= HERO ================= */}
      <div className="redtop">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="kick rv">De Vernast Drooggarantie</span>
              <h1 className="rv">100% droog. Of u huurt kosteloos verder.*</h1>
              <p className="rv d1">Omdat wij uw pakket berekenen in plaats van gokken, durven wij beloven wat niemand anders belooft: <b style={{ color: "#fff" }}>uw woning is droog binnen de berekende periode.</b> De eindmeting bevestigt het, zwart op wit.</p>
              <div className="hcta rv d3">
                <Link className="btn btn-white" to="/verhuur/calculator">Bereken uw droogpakket<Arrow /></Link>
                <a className="btn btn-ghost" href="#voorwaarden">Bekijk de voorwaarden</a>
              </div>
            </div>
            <div className="hero-vis rv d2">
              <img src="/vernast/man-zen-crop.webp" alt="Zorgeloos drogen met de Vernast Drooggarantie" style={{ width: "min(78%,360px)", position: "relative", zIndex: 1 }} />
              <div className="fbadge" style={{ top: "30%", right: "-14%", left: "auto", zIndex: 0 }}><span className="ic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg></span><div>Eindmeting bevestigt<small>Gemeten, niet geschat</small></div></div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= STAT RULE ================= */}
      <div className="statrule">
        <div className="wrap">
          <div className="band">
            <div className="st vis"><div className="n">100<em>%</em></div><div className="l">Droog binnen de berekende periode</div></div>
            <div className="st vis"><div className="n">2<em>×</em></div><div className="l">Vochtmeting bij start én einde</div></div>
            <div className="st vis"><div className="n">0<em>€</em></div><div className="l">Verlengen als het nodig is*</div></div>
            <div className="st vis"><div className="n">24<em>u</em></div><div className="l">Defect toestel gratis vervangen</div></div>
          </div>
        </div>
      </div>

      {/* ================= WAAROM WIJ DIT DURVEN ================= */}
      <section className="sw">
        <div className="wrap wsplit">
          <div className="sec-head" style={{ marginBottom: 0 }}>
            <span className="kick rv">Waarom wij dit durven beloven</span>
            <h2 className="sec rv">Een garantie kan alleen op een berekening rusten.</h2>
            <p className="lede rv d1">Wie een toestel op gevoel plaatst, kan niets garanderen. Wij wel: de <Link to="/verhuur/calculator">droogcalculator</Link> dimensioneert uw pakket op volume, situatie en toepassing, onze technieker <Link to="/levering">installeert de opstelling correct</Link> en de vochtmeting legt het start- en eindpunt objectief vast. Daardoor is "droog" bij Vernast geen gevoel, maar een meetresultaat.</p>
          </div>
          <div className="calcanim rv d1" aria-label="Animatie: de berekening achter de garantie">
            <div className="ca-h"><b>Uw droogplan</b><span>Wordt berekend</span></div>
            <div className="carow"><span className="k">Woonoppervlakte</span><span className="v canum">120 <small>m²</small></span></div>
            <div className="carow"><span className="k">Volume</span><span className="v canum">312 <small>m³</small></span></div>
            <div className="carow"><span className="k">Aanbevolen pakket</span><span className="v">2× ECO Performance</span></div>
            <div className="cabar"><b /></div>
            <div className="ca-f"><span>Vocht in materiaal</span><span>Streefwaarde</span></div>
            <div className="ca-res"><b>Berekende droogtijd: <span className="canum">12 dagen</span></b><span>100% droog*</span></div>
          </div>
        </div>
      </section>

      {/* ================= ZO WERKT DE GARANTIE ================= */}
      <section className="lvred">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick rv">Zo werkt de garantie</span>
            <h2 className="sec rv">Vier stappen, één belofte.</h2>
          </div>
          <div className="stgrid">
            <div className="stp rv"><span className="si"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" /></svg></span><h3>Uw pakket wordt berekend</h3><p>De calculator vertaalt oppervlakte, hoogte en situatie naar het juiste aantal toestellen en een berekende droogperiode.</p></div>
            <div className="stp rv"><span className="si"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" /></svg></span><h3>Nulmeting bij installatie</h3><p>Bij de plaatsing meet onze technieker het vochtgehalte en legt de startwaarden vast op de leverbon.</p></div>
            <div className="stp rv d1"><span className="si"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></span><h3>De opstelling droogt continu</h3><p>Toestellen draaien dag en nacht, het condenswater wordt afgevoerd en u laat de opstelling ongewijzigd.</p></div>
            <div className="stp rv d1"><span className="si"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg></span><h3>Eindmeting beslist</h3><p>Droog gemeten? Wij halen alles op. Nog niet droog ondanks correcte omstandigheden? U verlengt kosteloos.*</p></div>
          </div>
        </div>
      </section>

      {/* ================= DE VOORWAARDEN ================= */}
      <section className="sw" id="voorwaarden" style={{ paddingBottom: 20 }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="kick rv">De voorwaarden</span>
            <h2 className="sec rv">Wat de garantie dekt. En wat wij van u vragen.</h2>
            <p className="lede rv d1">Een eerlijke garantie heeft duidelijke spelregels. Dit zijn ze, zonder kleine lettertjes achteraf.</p>
          </div>
          <div className="vsg">
            <div className="vs hot rv" style={{ background: "var(--maroon-d) url('/vernast/bg-red-2.webp') center/cover no-repeat" }}>
              <span className="vt">De garantie dekt</span>
              <h3>Droog binnen de berekende periode.</h3>
              <ul>
                <li><Check /> Uw woning is droog binnen de periode uit uw berekening</li>
                <li><Check /> Objectief vastgesteld met een vochtmeting voor én na</li>
                <li><Check /> Niet droog? U huurt kosteloos verder tot de streefwaarde bereikt is*</li>
                <li><Check /> Defect toestel? Wij wisselen het gratis om binnen 24 uur</li>
              </ul>
              <span className="vf">Geldt voor elk online berekend en geboekt droogpakket met levering &amp; installatie.</span>
            </div>
            <div className="vs rv d1" style={{ background: "var(--bg-alt)" }}>
              <span className="vt" style={{ background: "#fff" }}>Wij vragen van u</span>
              <h3>Correcte droogomstandigheden.</h3>
              <ul>
                <li><Check /> Laat alle toestellen dag en nacht draaien</li>
                <li><Check /> Houd ramen en buitendeuren gesloten</li>
                <li><Check /> Verplaats de opstelling niet zonder overleg</li>
                <li><Check /> Zorg voor werkende elektriciteit tijdens de volledige periode</li>
                <li><Check /> Breng geen nieuwe natte materialen aan tijdens de droging</li>
                <li><Check /> Meld wijzigingen of storingen meteen via de <Link to="/klantservice" style={{ color: "var(--red)", fontWeight: 600 }}>klantenservice</Link></li>
              </ul>
            </div>
          </div>
          <div className="fine rv d2">
            <h3>* De spelregels op een rij</h3>
            <ol>
              <li><b>Toepassing:</b> de Drooggarantie geldt uitsluitend voor droogpakketten die via de calculator zijn berekend en met levering &amp; installatie zijn geboekt, niet voor losse toestellen of <Link to="/verhuur/afhalen" style={{ color: "var(--red)", fontWeight: 600 }}>zelf afhalen</Link>.</li>
              <li><b>Meting:</b> de vochtmetingen worden uitgevoerd door Vernast bij installatie en ophaling; de gemeten streefwaarden per materiaal zijn bepalend, niet het zicht of gevoel.</li>
              <li><b>Omstandigheden:</b> de garantie geldt zolang de opstelling ongewijzigd, continu en op een werkende stroomvoorziening heeft gedraaid, en er geen extra vochtbronnen zijn toegevoegd.</li>
              <li><b>Externe factoren:</b> actieve lekken, opstijgend grondvocht of nieuwe waterschade vallen buiten de garantie; wij helpen u dan wel met een aangepast droogplan.</li>
              <li><b>Verlenging:</b> de kosteloze verlenging loopt tot de streefwaarde bereikt is en wordt samen met u ingepland; de voorwaarden van de <Link to="/algemene-voorwaarden" style={{ color: "var(--red)", fontWeight: 600 }}>algemene voorwaarden</Link> blijven van toepassing.</li>
            </ol>
            <p>Vragen over uw specifieke situatie? Bel <a href="tel:+3236899065" style={{ color: "var(--red)", fontWeight: 600 }}>03 689 90 65</a> of gebruik het formulier onderaan.</p>
          </div>
        </div>
      </section>

      {/* ================= MAN BAND CTA ================= */}
      <section className="sw" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="manband rv">
            <div className="mb-t">
              <span className="mbk">Klaar om te starten?</span>
              <h3>Bereken uw pakket. De garantie zit er standaard bij.</h3>
              <p>Geen toeslag, geen optie om aan te vinken: elk droogpakket met levering &amp; installatie krijgt de Vernast Drooggarantie.</p>
              <Link className="btn btn-white mb-cta" to="/verhuur/calculator">Bereken uw droogpakket<Arrow /></Link>
            </div>
            <img className="mb-man" src="/vernast/man-duim-kabels.webp" alt="Vernast technieker geeft duim omhoog" style={{ width: "min(30%,320px)" }} />
          </div>
        </div>
      </section>

      {/* ================= FORMULIER ================= */}
      <section className="oform" id="formulier">
        <div className="wrap">
          <div className="sec-head" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
            <span className="kick rv">Nog een vraag hierover?</span>
            <h2 className="sec rv">Onze droogspecialisten denken graag mee.</h2>
            <p className="lede rv d1" style={{ marginLeft: "auto", marginRight: "auto" }}>Twijfelt u over de juiste aanpak voor uw project? Stel uw vraag, u krijgt binnen één werkdag antwoord van een specialist.</p>
          </div>
          <div className="fshell rv d2">
            <div id="formBody" style={sent ? { display: "none" } : undefined}>
              <div className="frow">
                <div className="fld"><label htmlFor="fVoor">Voornaam</label><input type="text" id="fVoor" placeholder="Voornaam" /></div>
                <div className="fld"><label htmlFor="fNaam">Naam</label><input type="text" id="fNaam" placeholder="Achternaam" /></div>
              </div>
              <div className="frow">
                <div className="fld"><label htmlFor="fMail">E-mail</label><input type="email" id="fMail" placeholder="naam@voorbeeld.be" /></div>
                <div className="fld"><label htmlFor="fTel">Telefoon</label><input type="tel" id="fTel" placeholder="04.." /></div>
              </div>
              <div className="frow one">
                <div className="fld"><label htmlFor="fOnd">Waarover gaat uw vraag?</label>
                  <select id="fOnd">
                    <option>Vraag over de Drooggarantie</option>
                    <option>Advies over het juiste pakket</option>
                    <option>Vraag over prijzen of levering</option>
                    <option>Iets anders</option>
                  </select>
                </div>
              </div>
              <div className="frow one">
                <div className="fld"><label htmlFor="fMsg">Uw situatie</label><textarea id="fMsg" rows={5} placeholder="Bv. nieuwbouw 140 m², chape geplaatst vorige week, wanneer kan de vloerder starten?" /></div>
              </div>
              <div className="fsend">
                <small>Wij gebruiken uw gegevens enkel om uw vraag te beantwoorden.</small>
                <button className="btn" id="fSend" type="button" onClick={() => setSent(true)}>Verstuur uw vraag<Arrow /></button>
              </div>
            </div>
            <div className={sent ? "fdone on" : "fdone"} id="formDone">
              <div className="ic"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></div>
              <h3>Vraag verzonden</h3>
              <p>Bedankt! Een droogspecialist neemt binnen één werkdag contact met u op.</p>
            </div>
          </div>
        </div>
      </section>

      <V3Footer />
    </div>
  );
};

export default DrooggarantiePage;

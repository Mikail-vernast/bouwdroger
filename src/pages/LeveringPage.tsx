import { useState } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import { SEO } from "@/data/seo";
import "@/styles/levering.css";
import "@/styles/levering-fixes.css";

/**
 * Levering en installatie — 1:1 transcription of the Claude Design handoff
 * (Levering En Installatie.html). The design's own header/footer are replaced
 * by the shared <V3Header>/<V3Footer>; everything else is the design's markup,
 * scoped under `.lev-page` (see src/styles/levering.css). Assets resolve from
 * /vernast/*.webp.
 */

/** The green checkmark reused across the checklists. */
const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

/** The arrow reused in buttons and the process chain. */
const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const LeveringPage = () => {
  const [sent, setSent] = useState(false);

  return (
    <div className="lev-page">
      <PageMeta
        {...SEO.levering}
        path="/levering"
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Levering en installatie", path: "/levering" },
          ]),
        ]}
      />

      <V3Header lightAfter={420} />

      {/* ================= HERO ================= */}
      <div className="redtop">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="kick rv">Levering &amp; installatie</span>
              <h1 className="rv">Geleverd én geïnstalleerd. Klaar om te drogen.</h1>
              <p className="rv d1">Een Vernast-technieker levert uw droogpakket en installeert de volledige opstelling, berekend op uw woning. <b style={{ color: "#fff" }}>U hoeft niets te tillen, te plaatsen of in te stellen.</b></p>
              <div className="hcta rv d3">
                <Link className="btn btn-white" to="/verhuur/calculator">Bereken uw droogpakket<Arrow /></Link>
                <a className="btn btn-ghost" href="#stappen">Zo verloopt de installatie</a>
              </div>
            </div>
            <div className="hero-vis rv d2">
              <img src="/vernast/man-knielt-droger.webp" alt="Vernast technieker installeert een bouwdroger" style={{ width: "min(100%,560px)" }} loading="lazy" decoding="async" />
              <div className="fbadge" style={{ top: "-30px", left: "2%" }}><span className="ic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></span><div>Binnen 24 uur geplaatst<small>Geleverd én geïnstalleerd</small></div></div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= STRIP ================= */}
      <div className="lvstrip">
        <div className="wrap">
          <div className="lvs rv"><span className="i"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></span><div><b>Binnen 24 uur</b><small>geleverd én geïnstalleerd</small></div></div>
          <div className="lvs rv"><span className="i"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" /></svg></span><div><b>Vochtmeting bij start</b><small>inbegrepen in elk pakket</small></div></div>
          <div className="lvs rv d1"><span className="i"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" /></svg></span><div><b>Capaciteit verdeeld</b><small>over al uw droogzones</small></div></div>
          <div className="lvs rv d1"><span className="i"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg></span><div><b>100% droog-garantie*</b><small>of kosteloos verlengen</small></div></div>
        </div>
      </div>

      {/* ================= BIJ AANKOMST ================= */}
      <section className="sw">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick rv">Bij aankomst</span>
            <h2 className="sec rv">Eerst kijken, dan plaatsen.</h2>
            <p className="lede rv d1">Bij aankomst overlopen we kort de woning en de ruimtes die moeten drogen. We controleren:</p>
          </div>
          <div className="aank">
            <div>
              <div className="chk2">
                <span className="rv"><Check /> <span><b>Droogzones:</b> welke ruimtes in de bouwdroging zitten.</span></span>
                <span className="rv"><Check /> <span><b>Plaatsing:</b> waar de bouwdrogers het best staan.</span></span>
                <span className="rv d1"><Check /> <span><b>Luchtstroming:</b> hoe lucht zich door de woning verplaatst.</span></span>
                <span className="rv d1"><Check /> <span><b>Elektriciteit:</b> stopcontacten en stroomkringen.</span></span>
                <span className="rv d2"><Check /> <span><b>Condensafvoer:</b> water rechtstreeks afvoeren waar mogelijk.</span></span>
                <span className="rv d2"><Check /> <span><b>Omstandigheden:</b> temperatuur, deuren en ramen.</span></span>
              </div>
              <div className="note rv d2" style={{ marginTop: "14px" }}>Wijkt de situatie sterk af van uw <Link to="/verhuur/calculator">berekening</Link>? Dan bespreken we dat eerst met u.</div>
            </div>
            <div className="aank-vis rv d1"><img src="/vernast/man-ladder.webp" alt="Vernast technieker komt aan met materiaal" loading="lazy" decoding="async" /></div>
          </div>
        </div>
      </section>

      {/* ================= STAPPEN ================= */}
      <section className="lvred" id="stappen">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick rv">Stap voor stap</span>
            <h2 className="sec rv">De installatie in acht stappen.</h2>
            <p className="lede rv d1">Niet zoveel mogelijk apparatuur plaatsen, maar de capaciteit zo efficiënt mogelijk inzetten.</p>
          </div>
          <div className="stgrid">
            <div className="stp rv"><span className="nr">01</span><span className="si"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /></svg></span><h3>Droogzones controleren</h3><p>We bekijken de indeling en verdelen de capaciteit over de zones, zodat de hele woning profiteert.</p></div>
            <div className="stp rv"><span className="nr">02</span><span className="si"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10H3" /><path d="M21 6H3" /><path d="M21 14H3" /><path d="M21 18H3" /></svg></span><h3>Bouwdrogers plaatsen</h3><p>Op plekken met vrije aanzuig en uitblaas, nooit strak tegen muren of obstakels.</p></div>
            <div className="stp rv d1"><span className="nr">03</span><span className="si"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 12h18" /><path d="M12 3v18" /></svg></span><h3>Capaciteit verdelen</h3><p>Meerdere toestellen en luchtverplaatsers waar nodig, in plaats van één zwaar toestel centraal.</p></div>
            <div className="stp rv d1"><span className="nr">04</span><span className="si"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" /></svg></span><h3>Condensafvoer aansluiten</h3><p>Waar mogelijk continu naar een afvoer, zodat u nooit reservoirs hoeft te legen.</p></div>
            <div className="stp rv d2"><span className="nr">05</span><span className="si"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" /></svg></span><h3>Elektrisch aansluiten</h3><p>Stabiele voeding, bij meerdere toestellen verdeeld over verschillende stroomkringen.</p></div>
            <div className="stp rv d2"><span className="nr">06</span><span className="si"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9.6 4.6A2 2 0 1 1 11 8H2" /><path d="M12.6 19.4A2 2 0 1 0 14 16H2" /><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" /></svg></span><h3>Circulatie instellen</h3><p>Luchtverplaatsers halen vochtige lucht uit moeilijk bereikbare zones.</p></div>
            <div className="stp rv d3"><span className="nr">07</span><span className="si"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10h18v11H3z" /><path d="M5 10V6a7 7 0 0 1 14 0v4" /></svg></span><h3>Woning instellen</h3><p>We bespreken welke ramen, deuren en verwarming open, dicht of aan blijven.</p></div>
            <div className="stp rv d3"><span className="nr">08</span><span className="si"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg></span><h3>Controle &amp; opstart</h3><p>Alles draait, de afvoer loopt en de juiste instellingen staan aan. Dan pas vertrekken we.</p></div>
          </div>
        </div>
      </section>

      {/* ================= ROLVERDELING ================= */}
      <section className="sw">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick rv">Duidelijke rolverdeling</span>
            <h2 className="sec rv">Wat u voorziet. Wat wij doen.</h2>
          </div>
          <div className="vsg">
            <div className="vs rv">
              <span className="vt">U voorziet</span>
              <h3>Zo verloopt de installatie vlot.</h3>
              <ul>
                <li><Check /> Alle te drogen ruimtes zijn vrij, ontruimd en beschikbaar</li>
                <li><Check /> Werkende elektriciteit en stopcontacten</li>
                <li><Check /> Indien beschikbaar: een werkende waterafvoer</li>
                <li><Check /> Vrije ruimte om de toestellen te plaatsen</li>
              </ul>
              <span className="vf">Bouwmateriaal, afval of obstakels beperken de luchtcirculatie.</span>
            </div>
            <div className="vs hot rv d1">
              <span className="vt">Wij doen</span>
              <h3>U hoeft geen droogspecialist te zijn.</h3>
              <ul>
                <li><Check /> Het juiste toestel en de juiste capaciteit bepalen</li>
                <li><Check /> Plaatsing en verdeling over de ruimtes</li>
                <li><Check /> Condensafvoer aansluiten</li>
                <li><Check /> De juiste instellingen selecteren</li>
                <li><Check /> Controle en opstart van de opstelling</li>
              </ul>
              <span className="vf">Vragen tijdens de huur? De <Link to="/klantservice" style={{ color: "#fff", fontWeight: 600 }}>klantenservice</Link> staat klaar.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BEREIKBAARHEID ================= */}
      <section className="lvred">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick rv">Bereikbaarheid</span>
            <h2 className="sec rv">Trap, lift of ladder? Meld het vooraf.</h2>
            <p className="lede rv d1">Verdiepingen zijn inbegrepen in uw pakket zolang ze bereikbaar zijn via een trap of lift. Alleen wanneer toestellen via een ladder naar boven moeten, rekenen we een toeslag: dat is arbeidsintensief en vraagt extra mankracht en materiaal.</p>
          </div>
          <div className="ldg">
            <div className="ld rv"><span className="tag ok">Inbegrepen</span><span className="si"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h4v-4h4v-4h4V8h4" /><path d="M4 20V4" /></svg></span><h3>Via de trap</h3><p>Onze techniekers dragen de toestellen via de trap naar elke verdieping, zonder meerkost.</p><div className="prc">€ 0 <small>per verdieping</small></div></div>
            <div className="ld rv d1"><span className="tag ok">Inbegrepen</span><span className="si"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M12 7v5" /><path d="m9 9 3-2 3 2" /></svg></span><h3>Via de lift</h3><p>Is er een lift aanwezig, dan plaatsen we op elke verdieping zonder meerkost.</p><div className="prc">€ 0 <small>per verdieping</small></div></div>
            <div className="ld rv d2"><span className="tag pay">Toeslag</span><span className="si"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21V3h8v18" /><path d="M8 7h8" /><path d="M8 11h8" /><path d="M8 15h8" /></svg></span><h3>Via een ladder</h3><p>Nog geen trap in de woning? Dan dragen we de toestellen via een ladder naar boven. <b>Meld dit altijd op voorhand</b>, zodat we de juiste installatie en mankracht voorzien.</p><div className="prc">€ 39 <small>per verdieping</small></div></div>
          </div>
          <div className="note rv d2"><b>Nieuwbouw zonder trap?</b> Geef het aantal verdiepingen én de ladder-situatie aan bij uw <Link to="/verhuur/calculator">berekening en boeking</Link>. Zo staat het juiste team met het juiste materiaal voor uw deur en komt u nooit voor verrassingen te staan.</div>
        </div>
      </section>

      {/* ================= TIJDENS DE DROOGPERIODE ================= */}
      <section className="sw">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick rv">Tijdens de droogperiode</span>
            <h2 className="sec rv">Laat de opstelling haar werk doen.</h2>
            <p className="lede rv d1">Elke periode waarin de installatie uitstaat of gewijzigd wordt, verlengt de droogtijd.</p>
          </div>
          <div className="g3">
            <div className="kaart rv">
              <div className="ki"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M8 7V5a4 4 0 0 1 8 0v2" /></svg></div>
              <h3>Niets verplaatsen of pauzeren</h3>
              <p>Verplaats toestellen niet zonder overleg en schakel ze 's nachts niet uit. Continu draaien is de kortste weg naar droog.</p>
            </div>
            <div className="kaart rv d1">
              <div className="ki"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M12 3v18" /></svg></div>
              <h3>Ramen dicht houden</h3>
              <p>Vochtige buitenlucht binnenlaten betekent extra werk voor de installatie, zeker bij warm en vochtig weer.</p>
            </div>
            <div className="kaart rv d2">
              <div className="ki"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" /></svg></div>
              <h3>Verwarming speelt mee</h3>
              <p>Een warmere woning laat vocht makkelijker los. Onze technieker geeft aan wat wenselijk is voor uw situatie.</p>
            </div>
          </div>
          <div className="note rv d2"><b>Verandert er iets?</b> Toestel uitgevallen, slang losgekomen, ramen lang open of nieuwe natte materialen? Meld het via de <Link to="/klantservice">klantenservice</Link>. Op het einde bevestigt de vochtmeting het resultaat; lukt het ondanks correcte omstandigheden niet, dan geldt de <Link to="/drooggarantie">Vernast Drooggarantie</Link>.*</div>
        </div>
      </section>

      {/* ================= MANBAND ================= */}
      <section className="sw">
        <div className="wrap">
          <div className="manband rv">
            <div className="mb-t">
              <span className="mbk">Van levering tot droge woning</span>
              <h3>Wij regelen alles. U hoeft enkel te boeken.</h3>
              <div className="chain"><span>Berekening</span><Arrow /><span>Levering</span><Arrow /><span>Installatie</span><Arrow /><span>Droogperiode</span><Arrow /><span>Ophaling</span></div>
              <Link className="btn btn-white mb-cta" to="/verhuur/calculator">Bereken uw droogpakket<Arrow /></Link>
            </div>
            <img className="mb-man" src="/vernast/man-duim-kabels.webp" alt="Vernast technieker, installatie afgerond" style={{ width: "min(34%,380px)" }} loading="lazy" decoding="async" />
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
                <div className="fld"><label htmlFor="fOnd">Waarover gaat uw vraag?</label>
                  <select id="fOnd">
                    <option>Vraag over levering of installatie</option>
                    <option>Advies over het juiste pakket</option>
                    <option>Vraag over prijzen of levering</option>
                    <option>Iets anders</option>
                  </select>
                </div>
              </div>
              <div className="frow one">
                <div className="fld"><label htmlFor="fMsg">Uw situatie</label><textarea id="fMsg" rows={5} placeholder="Bv. nieuwbouw 140 m², chape geplaatst vorige week, wanneer kan de vloerder starten?"></textarea></div>
              </div>
              <div className="fsend">
                <small>Wij gebruiken uw gegevens enkel om uw vraag te beantwoorden.</small>
                <button className="btn" type="button" id="fSend" onClick={() => setSent(true)}>Verstuur uw vraag<Arrow /></button>
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

export default LeveringPage;

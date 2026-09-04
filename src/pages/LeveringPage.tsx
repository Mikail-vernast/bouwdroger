import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import { SEO } from "@/data/seo";
import "@/styles/levering.css";
import "@/styles/levering-fixes.css";

/**
 * Levering & installatie — 1:1 transcription of the Claude Design handoff
 * (Levering En Installatie.html). The design's own header/footer are replaced
 * by the shared <V3Header>/<V3Footer>; everything else is the design's markup,
 * scoped under `.lv-page` (see src/styles/levering.css). Assets resolve from
 * /vernast/*.webp. The design's scroll-reveal (.rv) classes are dropped so the
 * prerendered HTML never carries an opacity:0 begintoestand; the tracker,
 * zones, waves, fan-spin and stap-vinkjes zijn zuivere CSS-animaties en blijven.
 * De installatie-tabs kregen hun eerste knop + paneel de class `active` mee,
 * zodat er zonder JavaScript inhoud zichtbaar is (SSG-vereiste).
 */

/** Het pijltje op de knoppen. */
const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);

/** Het vinkje in de rolverdeling- en opstartlijsten. */
const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
);

/** Het kruis in de rode-kaart-blokken. */
const Cross = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
);

const LeveringPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.currentTarget;
    const val = (name: string) =>
      (f.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement)?.value ?? "";
    const onderwerp = val("onderwerp");
    const body =
      `Naam: ${val("voornaam")} ${val("naam")}` +
      `%0AE-mail: ${val("email")}` +
      `%0ATelefoon: ${val("telefoon") || "-"}` +
      `%0AOnderwerp: ${onderwerp}` +
      `%0A%0A${encodeURIComponent(val("situatie"))}`;
    window.location.href =
      `mailto:info@vernast-verhuur.be?subject=${encodeURIComponent("Levering & installatie: " + onderwerp)}&body=${body}`;
  };

  return (
    <div className="lv-page">
      <PageMeta
        {...SEO.levering}
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Levering & installatie", path: "/levering" },
          ]),
        ]}
      />

      <V3Header lightAfter={420} />

      {/* ================= HERO ================= */}
      <div className="redtop">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="kick">Levering &amp; installatie</span>
              <h1>Geleverd én geïnstalleerd. Klaar om te drogen.</h1>
              <p>Een Vernast-technieker levert uw droogpakket en installeert de volledige opstelling, berekend op uw woning. <b style={{ color: "#fff" }}>U hoeft niets te tillen, te plaatsen of in te stellen.</b></p>
              <div className="hcta">
                <a className="btn btn-white" href="/verhuur/calculator">Bereken uw droogpakket<Arrow /></a>
                <a className="btn" href="#installatie" style={{ background: "#fff", color: "var(--red)" }}>Zo verloopt de installatie</a>
              </div>
            </div>
            <div className="hero-vis">
              <img src="/vernast/man-duim-kabels.webp" alt="Vernast technieker met kabels, duim omhoog" style={{ width: "min(115%,720px)", maxWidth: "none" }} />
              <div className="fbadge" style={{ top: "-30px", right: 0, left: "auto", zIndex: 0 }}><span className="ic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></span><div>Binnen 24 uur geplaatst<small>Geleverd én geïnstalleerd</small></div></div>
            </div>
          </div>
        </section>

      </div>

      {/* ================= LEVERDAG-TRACKER ================= */}
      <section className="swx">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Uw leverdag</span>
            <h2 className="sec">Volg uw levering, van bevestiging tot draaiende opstelling.</h2>
            <p className="lede">U weet op elk moment waar u aan toe bent: één duidelijke afspraak, een seintje onderweg en een opstelling die draait vóór wij vertrekken.</p>
          </div>
          <div className="trk">
            <div className="trk-route" aria-hidden="true">
              <div className="trk-line"></div>
              <div className="trk-fill"></div>
              <div className="trk-truck"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 18H3V8h11v10H9" /><path d="M14 9h4l3 3v6h-2" /><circle cx="7.5" cy="18.5" r="1.5" /><circle cx="17.5" cy="18.5" r="1.5" /></svg></div>
            </div>
            <div className="trk-stops">
              <div className="tst s1"><i>1</i><span className="tm">Na uw boeking</span><h3>Afspraak bevestigd</h3><p>Bevestiging met leverdatum en tijdslot, plus agenda-uitnodiging.</p></div>
              <div className="tst s2"><i>2</i><span className="tm">30 min vooraf</span><h3>Sms: onderweg</h3><p>De technieker stuurt een berichtje. Geen hele dag thuiszitten.</p></div>
              <div className="tst s3"><i>3</i><span className="tm">Bij aankomst</span><h3>Controle &amp; nulmeting</h3><p>We overlopen de ruimtes en meten het startvochtgehalte.</p></div>
              <div className="tst s4"><i>4</i><span className="tm">Ter plaatse</span><h3>Installatie</h3><p>Plaatsen, verdelen, afvoer aansluiten en instellen.</p></div>
              <div className="tst s5"><i>✓</i><span className="tm">Voor vertrek</span><h3>Opstart &amp; uitleg</h3><p>Alles draait, u krijgt korte uitleg. De droging is gestart.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INSTALLATIE-TABS ================= */}
      <section className="lvred" id="installatie">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">De installatie</span>
            <h2 className="sec">Wat onze technieker doet, stap voor stap.</h2>
            <p className="lede">Niet zoveel mogelijk apparatuur plaatsen, maar de capaciteit zo efficiënt mogelijk inzetten. Klik door de stappen of kijk gewoon mee.</p>
          </div>
          <div className="ins-tabs" id="insTabs">
            <button className="active"><i>Stap 01</i>Controle &amp; droogzones<span className="tb"><b></b></span></button>
            <button><i>Stap 02</i>Plaatsing &amp; circulatie<span className="tb"><b></b></span></button>
            <button><i>Stap 03</i>Condensafvoer<span className="tb"><b></b></span></button>
            <button><i>Stap 04</i>Stroom &amp; luchtstroming<span className="tb"><b></b></span></button>
            <button><i>Stap 05</i>Controle &amp; opstart<span className="tb"><b></b></span></button>
          </div>
          <div className="ins-stage" id="insStage">
            <div className="ins-p active">
              <div>
                <h3>Eerst kijken, dan plaatsen.</h3>
                <p className="pt">We overlopen de woning en verdelen ze in droogzones: welke ruimtes moeten drogen, hoe zijn ze verbonden en waar zit het meeste vocht? Daarna controleren we elektriciteit, afvoermogelijkheden en omstandigheden. Wijkt de situatie sterk af van uw <a href="/verhuur/calculator" style={{ color: "#fff", fontWeight: 600 }}>berekening</a>, dan bespreken we dat eerst.</p>
                <div className="pchips"><span>Droogzones</span><span>Elektriciteit</span><span>Afvoer</span><span>Temperatuur</span></div>
              </div>
              <div className="mockc"><div className="mt">Capaciteit per droogzone</div><div className="zones"><i></i><i></i><i></i><i></i><i></i><i></i></div><div className="zlab"><span>Woonkamer · keuken · hal</span><span>Badkamer · slaapkamers</span></div></div>
            </div>
            <div className="ins-p">
              <div>
                <h3>De juiste plek, de juiste luchtstroom.</h3>
                <p className="pt">Toestellen komen waar ze vrij kunnen aanzuigen en uitblazen, nooit strak tegen muren of obstakels. In plaats van één zwaar toestel centraal verdelen we meerdere toestellen en luchtverplaatsers over de zones, zodat elke ruimte gelijkmatig droogt.</p>
                <div className="pchips"><span>Vrije aanzuig</span><span>Verdeelde capaciteit</span><span>Gelijkmatig drogen</span></div>
              </div>
              <div className="mockc"><div className="mt">Droge lucht bereikt de hele zone</div><div className="airm"><div className="dev"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10H3" /><path d="M21 6H3" /><path d="M21 14H3" /><path d="M21 18H3" /></svg></div><span className="wave"></span><span className="wave w2"></span><span className="wave w3"></span><div className="room"><span>verste hoek</span></div></div></div>
            </div>
            <div className="ins-p">
              <div>
                <h3>Water rechtstreeks naar de afvoer. <span style={{ display: "inline-block", verticalAlign: "middle", marginLeft: "6px", background: "#fff", color: "var(--red)", fontFamily: "var(--fm)", fontSize: "10.5px", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", padding: "6px 12px", borderRadius: "99px" }}>Optioneel · aangeraden</span></h3>
                <p className="pt">Kiest u de condenspomp (€ 2 per bouwdroger per dag), dan sluiten we een continue condensafvoer aan naar een afvoer, douche, lavabo of vloerput. Zo hoeft u geen reservoirs te legen en draait het toestel dag en nacht door, ook in het weekend. Zonder pomp leegt u het reservoir zelf 2 à 3 keer per dag. Optioneel, maar aangeraden: u voegt de pomp toe tijdens het <a href="/verhuur/calculator" style={{ color: "#fff", fontWeight: 600 }}>berekenen van uw pakket</a>.</p>
                <div className="pchips"><span>Geen kuip legen</span><span>24/7 doorwerken</span><span>Proper condenswater</span></div>
              </div>
              <div className="mockc"><div className="mt">Continue condensafvoer</div><div className="drainm"><div className="dev"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" /></svg></div><div className="hose"><b></b><b></b><b></b></div><div className="drain"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20" /><path d="M5 12v4" /><path d="M12 12v6" /><path d="M19 12v4" /></svg></div><div className="cap">Het condenswater loopt rechtstreeks weg. U kijkt ernaar, meer niet.</div></div></div>
            </div>
            <div className="ins-p">
              <div>
                <h3>Stabiele stroom, bewegende lucht.</h3>
                <p className="pt">Bouwdrogers draaien lange periodes continu en vragen een stabiele voeding; bij meerdere toestellen verdelen we ze over verschillende stroomkringen. Luchtverplaatsers halen vochtige lucht uit moeilijk bereikbare zones. Temperatuur, circulatie en ontvochtiging bepalen samen de efficiëntie.</p>
                <div className="pchips"><span>Aparte stroomkringen</span><span>Ventilatoren</span><span>Geen dode hoeken</span></div>
              </div>
              <div className="mockc"><div className="mt">Circulatie in de zone</div><div className="fanm"><div className="fan"><svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M12 12c2-3.3 1-6.5-1.5-8C8 2.6 5.5 3.5 5 6c-.4 2 1.3 4.3 7 6z" /><path d="M12 12c3.8.6 6.5-1.4 7-4.3.4-2.6-1.4-4.6-3.9-4.2-2 .3-3.5 2.7-3.1 8.5z" transform="rotate(120 12 12)" /><path d="M12 12c3.8.6 6.5-1.4 7-4.3.4-2.6-1.4-4.6-3.9-4.2-2 .3-3.5 2.7-3.1 8.5z" transform="rotate(240 12 12)" /><circle cx="12" cy="12" r="1.6" fill="currentColor" /></svg></div><div className="volt"><span><Check /> Stabiele voeding gecontroleerd</span><span><Check /> Kringen verdeeld</span><span><Check /> Ventilator op de juiste stand</span></div></div></div>
            </div>
            <div className="ins-p">
              <div>
                <h3>Pas als alles draait, vertrekken we.</h3>
                <p className="pt">We controleren de volledige opstelling, stellen de streefvochtigheid in en bespreken welke ramen en deuren open of dicht blijven. U krijgt een korte uitleg, en daarna doet de opstelling het werk. Vragen tijdens de huur? De <a href="/klantservice" style={{ color: "#fff", fontWeight: 600 }}>klantenservice</a> staat klaar.</p>
                <div className="pchips"><span>Streefwaarde ingesteld</span><span>Korte uitleg</span><span>Droging gestart</span></div>
              </div>
              <div className="mockc"><div className="mt">Laatste controle</div><div className="startm play" id="startm"><div className="row"><i>✓</i>Opstelling gecontroleerd</div><div className="row"><i><Check /></i>Alle toestellen draaien</div><div className="row"><i><Check /></i>Condensafvoer loopt</div><div className="row"><i><Check /></i>Instellingen juist</div><div className="row"><i><Check /></i>Uitleg gegeven · droging gestart</div></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BEREIKBAARHEID / LADDER ================= */}
      <section className="swx">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Bereikbaarheid</span>
            <h2 className="sec">Trap, lift of ladder? Meld het vooraf.</h2>
            <p className="lede">Verdiepingen zijn inbegrepen zolang ze bereikbaar zijn via een trap of lift. Alleen wanneer toestellen via een ladder naar boven moeten, rekenen we een toeslag: dat vraagt extra mankracht en materiaal.</p>
          </div>
          <div className="ldg">
            <div className="ld"><span className="tag ok">Inbegrepen</span><span className="si"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h4v-4h4v-4h4V8h4" /><path d="M4 20V4" /></svg></span><h3>Via de trap</h3><p>Onze techniekers dragen de toestellen via de trap naar elke verdieping, zonder meerkost.</p><div className="prc">€ 0 <small>per verdieping</small></div></div>
            <div className="ld"><span className="tag ok">Inbegrepen</span><span className="si"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M12 7v5" /><path d="m9 9 3-2 3 2" /></svg></span><h3>Via de lift</h3><p>Is er een lift aanwezig, dan plaatsen we op elke verdieping zonder meerkost.</p><div className="prc">€ 0 <small>per verdieping</small></div></div>
            <div className="ld"><span className="tag pay">Toeslag</span><span className="si"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21V3h8v18" /><path d="M8 7h8" /><path d="M8 11h8" /><path d="M8 15h8" /></svg></span><h3>Via een ladder</h3><p>Nog geen trap in de woning? <b>Meld dit altijd op voorhand</b>, zodat we de juiste installatie en mankracht voorzien.</p><div className="prc">€ 39 <small>per verdieping</small></div></div>
          </div>
        </div>
      </section>

      {/* ================= ROLVERDELING ================= */}
      <section className="lvred chkred">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Duidelijke rolverdeling</span>
            <h2 className="sec">Wat u voorziet. Wat wij doen.</h2>
          </div>
          <div className="vsg">
            <div className="vs">
              <span className="vt2">U voorziet</span>
              <h3>Zo verloopt de installatie vlot.</h3>
              <ul>
                <li><Check /> <span>Alle te drogen ruimtes zijn vrij, ontruimd en beschikbaar</span></li>
                <li><Check /> <span>Werkende elektriciteit en stopcontacten</span></li>
                <li><Check /> <span>Indien beschikbaar: een werkende waterafvoer</span></li>
                <li><Check /> <span>Vrije ruimte om de toestellen te plaatsen</span></li>
              </ul>
              <span className="vf">Bouwmateriaal, afval of obstakels beperken de luchtcirculatie.</span>
            </div>
            <div className="vs">
              <span className="vt2 red">Wij doen</span>
              <h3>U hoeft geen droogspecialist te zijn.</h3>
              <ul>
                <li><Check /> <span>Het juiste toestel en de juiste capaciteit bepalen</span></li>
                <li><Check /> <span>Plaatsing en verdeling over de ruimtes</span></li>
                <li><Check /> <span>Condensafvoer aansluiten en instellingen selecteren</span></li>
                <li><Check /> <span>Controle en opstart van de opstelling</span></li>
              </ul>
              <span className="vf">Vragen tijdens de huur? De <a href="/klantservice" style={{ color: "var(--red)", fontWeight: 600 }}>klantenservice</a> staat klaar.</span>
            </div>
          </div>
          <div className="note note2" style={{ marginTop: "14px" }}><b>Tijdens de droogperiode:</b> laat de opstelling ongewijzigd, houd ramen dicht en schakel toestellen niet uit. Verandert er toch iets? Meld het via de <a href="/klantservice">klantenservice</a>, zo blijft uw <a href="/drooggarantie">Drooggarantie</a> gelden.*</div>
        </div>
        <img className="chkred-man" src="/vernast/man-bestelwagen.webp" alt="Vernast technieker bij de bestelwagen" />
      </section>

      {/* ================= RODE KAART ================= */}
      <section className="sw rood">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Rode kaart</span>
            <h2 className="sec">Dit doet u beter niet tijdens de droging.</h2>
            <p className="lede">Goedbedoeld, maar nefast voor het droogproces — en soms zelfs voor het toestel. Deze klassiekers zien we vaak, en ze kosten u droogtijd:</p>
          </div>
          <div className="ng">
            <div className="ngc"><span className="xi"><Cross /></span><div><b>Ramen of buitendeuren openzetten</b><p>U laat vochtige buitenlucht binnen en de installatie moet die extra vracht opnieuw verwerken. De woning blijft dicht tijdens de droging.</p></div></div>
            <div className="ngc"><span className="xi"><Cross /></span><div><b>Bouwdrogers zomaar afzetten</b><p>'s Nachts of "even tijdens het werken" uitschakelen legt de droging stil en verlengt de huurperiode. De toestellen zijn gemaakt om continu te draaien.</p></div></div>
            <div className="ngc"><span className="xi"><Cross /></span><div><b>Een bouwdroger plat leggen of kantelen</b><p>In het koelcircuit zit koelmiddel: plat leggen beschadigt de compressor. Toch plat vervoerd? Laat het toestel 24 uur rechtop staan vóór de opstart.</p></div></div>
            <div className="ngc"><span className="xi"><Cross /></span><div><b>Toestellen verplaatsen of dicht tegen de muur schuiven</b><p>De opstelling is berekend per droogzone. Verplaatsen of de aanzuig blokkeren verstoort de circulatie — overleg eerst even met ons.</p></div></div>
            <div className="ngc"><span className="xi"><Cross /></span><div><b>Binnendeuren sluiten die open moeten blijven</b><p>Droge lucht moet elke ruimte bereiken. Onze technieker zegt bij de opstart welke deuren open of dicht horen.</p></div></div>
            <div className="ngc"><span className="xi"><Cross /></span><div><b>Nieuwe natte materialen binnenbrengen</b><p>Vers pleisterwerk of een natte chape erbij betekent een nieuwe vochtvracht — en een langere droogtijd. Meld het, dan rekenen we het pakket bij.</p></div></div>
          </div>
          <div className="note note3" style={{ marginTop: "14px" }}><b>Twijfelt u ergens over?</b> Eén belletje naar de <a href="/klantservice">klantenservice</a> voorkomt dagen vertraging — en zo blijft uw <a href="/drooggarantie">Drooggarantie</a> gewoon gelden.*</div>
        </div>
        <img className="rood-man" src="/vernast/man-rode-kaart.webp" alt="Rode kaart voor deze fouten tijdens de droging" />
      </section>

      {/* ================= VRAAGFORMULIER ================= */}
      <section className="oform" id="formulier">
        <div className="wrap">
          <div className="sec-head" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
            <span className="kick">Nog een vraag hierover?</span>
            <h2 className="sec">Onze droogspecialisten denken graag mee.</h2>
            <p className="lede" style={{ marginLeft: "auto", marginRight: "auto" }}>Twijfelt u over de juiste aanpak voor uw project? Stel uw vraag, u krijgt binnen één werkdag antwoord van een specialist.</p>
          </div>
          <div className="fshell">
            <form id="formBody" onSubmit={handleSubmit}>
              <div className="frow">
                <div className="fld"><label htmlFor="fVoor">Voornaam</label><input type="text" id="fVoor" name="voornaam" placeholder="Voornaam" required /></div>
                <div className="fld"><label htmlFor="fNaam">Naam</label><input type="text" id="fNaam" name="naam" placeholder="Achternaam" required /></div>
              </div>
              <div className="frow">
                <div className="fld"><label htmlFor="fMail">E-mail</label><input type="email" id="fMail" name="email" placeholder="naam@voorbeeld.be" required /></div>
                <div className="fld"><label htmlFor="fTel">Telefoon</label><input type="tel" id="fTel" name="telefoon" placeholder="04.." /></div>
              </div>
              <div className="frow one">
                <div className="fld"><label htmlFor="fOnd">Waarover gaat uw vraag?</label>
                  <select id="fOnd" name="onderwerp">
                    <option>Vraag over levering of installatie</option>
                    <option>Advies over het juiste pakket</option>
                    <option>Vraag over prijzen of levering</option>
                    <option>Iets anders</option>
                  </select>
                </div>
              </div>
              <div className="frow one">
                <div className="fld"><label htmlFor="fMsg">Uw situatie</label><textarea id="fMsg" name="situatie" rows={5} placeholder="Bv. nieuwbouw 140 m², chape geplaatst vorige week, wanneer kan de vloerder starten?" required></textarea></div>
              </div>
              <div className="fsend">
                <small>Wij gebruiken uw gegevens enkel om uw vraag te beantwoorden.</small>
                <button className="btn" id="fSend" type="submit">Verstuur uw vraag<Arrow /></button>
              </div>
            </form>
            <div className="fdone" id="formDone">
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

import { useState } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import { SEO } from "@/data/seo";
import "@/styles/over-ons.css";
import "@/styles/over-ons-fixes.css";

/**
 * Over ons — 1:1 transcription of the Claude Design handoff (Over Ons.html).
 * The design's own header/footer are replaced by the shared
 * <V3Header>/<V3Footer>; everything else is the design's markup, scoped under
 * `.ov-page` (see src/styles/over-ons.css). Assets resolve from /vernast/*.webp.
 */

/** The check used in the praktijk qcard list (strokeWidth 2.4). */
const Check = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

/** The smaller check used in the vacature chips (strokeWidth 2.6). */
const CheckSm = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

/** First marquee row: five items, repeated for a seamless loop. */
const techRow1 = [
  { d: <><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M8 6h8" /><path d="M8 10h8" /><path d="M8 14h4" /></>, label: "Technische capaciteitsselectie" },
  { d: <><path d="M3 3v18h18" /><path d="m7 15 4-6 4 3 5-8" /></>, label: "Berekening ruimte & toepassing" },
  { d: <><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" /></>, label: "Digitale reservatie" },
  { d: <><path d="M5 18H3V8h11v10H9" /><path d="M14 10h4l3 4v4h-2" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></>, label: "Planning & logistiek" },
  { d: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>, label: "Projectopvolging" },
];

/** Second marquee row (reversed direction): five items, repeated. */
const techRow2 = [
  { d: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />, label: "Technische protocollen" },
  { d: <><path d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="10" /></>, label: "Kwaliteitscontrole" },
  { d: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></>, label: "Documentatie & rapportage" },
  { d: <path d="M13 2 3 14h7l-1 8 10-12h-7z" />, label: "Automatisering droogproces" },
  { d: <path d="M2 12h4l3-9 4 18 3-9h6" />, label: "Digitale monitoring (binnenkort)" },
];

const TechItem = ({ item }: { item: { d: React.ReactNode; label: string } }) => (
  <span className="it">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {item.d}
    </svg>{" "}
    {item.label}
  </span>
);

const OverOnsPage = () => {
  const [sent, setSent] = useState(false);

  return (
    <div className="ov-page">
      <PageMeta
        {...SEO.overOns}
        path="/over-ons"
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Over ons", path: "/over-ons" },
          ]),
        ]}
      />

      <V3Header lightAfter={520} />

      {/* ================= HERO ================= */}
      <section className="ov-hero">
        <div className="wrap">
          <span className="kick rv">Over Vernast BouwDroging</span>
          <h1 className="rv d1">Bouwdroging,<br />opnieuw uitgedacht.</h1>
          <p className="rv d2">Een bouwdroger huren zou eenvoudig moeten zijn. Daarom maken wij bouwdroging eenvoudiger, transparanter en technisch beter onderbouwd: de juiste capaciteit, duidelijke afspraken en zo weinig mogelijk zorgen voor u.</p>
        </div>
        <div className="ov-stage">
          <div className="ov-chip ch1"><span className="ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M8 6h8" /><path d="M8 10h8" /><path d="M8 14h4" /></svg></span><div>Berekend, niet geschat<small>Slimme droogcalculator</small></div></div>
          <div className="ov-chip ch2"><span className="ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg></span><div>100% droog garantie*<small>Of kosteloos verlengen</small></div></div>
          <div className="ov-chip ch3"><span className="ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></span><div>Volledig digitaal<small>Boeken, betalen &amp; plannen</small></div></div>
          <img className="ov-team rv d2" src="/vernast/team-drie.webp" alt="Het Vernast team" loading="lazy" decoding="async" />
        </div>
      </section>

      {/* ================= PRAKTIJK ================= */}
      <section className="prak">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Van toestelverhuur naar volledige ontzorging</span>
            <h2 className="sec rv">Wij leveren geen toestellen af. Wij leveren een droog resultaat.</h2>
          </div>
          <div className="prak-grid">
            <div className="prak-copy">
              <p className="rv">Bij de meeste verhuurders eindigt het verhaal wanneer het toestel geleverd is. Bij ons begint het daar pas. Uw chape moet klaar zijn voor de vloerder, uw pleisterwerk voor de schilder, uw woning voor de oplevering. <b>Dáár werken wij naartoe.</b></p>
              <p className="rv d1">Daarom berekenen we eerst wat uw situatie echt nodig heeft. Pleister, chape en beton geven vocht elk op hun eigen tempo af, en <b>temperatuur, luchtcirculatie en laagdikte</b> bepalen mee hoe snel. Wie dat negeert, droogt te traag of verspilt energie.</p>
              <p className="rv d2">Die kennis halen we niet uit een brochure. Vernast staat dagelijks op werven voor <b>vochtbestrijding, afwerking en isolatie</b>. Wij zien wat er fout loopt wanneer er verkeerd gedroogd wordt, en bouwden onze droogservice om precies dat te vermijden.</p>
            </div>
            <div className="qcard rv d1">
              <h3>U weet vooraf waar u aan toe bent</h3>
              <p className="qsub">Zo wordt bouwdroging geen technisch vraagstuk dat u zelf moet oplossen:</p>
              <ul>
                <li><Check /> Welke oplossing geschikt is voor uw materiaal en situatie.</li>
                <li><Check /> Welke capaciteit nodig is, berekend op volume en toepassing.</li>
                <li><Check /> Wat u mag verwachten: droogtijd, verloop en eindresultaat.</li>
                <li><Check /> Welke kosten eraan verbonden zijn, in één duidelijke prijs.</li>
                <li><Check /> En hoe het droogproces wordt opgevolgd, tot de eindmeting.</li>
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
              <div className="sec-head" style={{ marginBottom: 30 }}>
                <span className="kick">Onze filosofie</span>
                <h2 className="sec rv">De juiste capaciteit. Niet de grootste machine.</h2>
                <p className="lede rv d1">Meer vermogen betekent niet automatisch beter drogen. Wij bepalen eerst welke capaciteit technisch zinvol is: niet meer dan noodzakelijk, niet minder dan nodig. Dat betekent een efficiëntere installatie, een lager energieverbruik en minder verspilling. Zo vermijden we twee klassieke problemen:</p>
              </div>
              <div className="cap-grid">
                <div className="cp rv">
                  <div className="cpi"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5" /><path d="m5 12 7 7 7-7" /></svg></div>
                  <h3>Ondercapaciteit</h3>
                  <p>Een te lichte installatie vertraagt uw project onnodig: materialen blijven te vochtig, de planning schuift mee en de volgende fase blijft wachten.</p>
                </div>
                <div className="cp rv d1">
                  <div className="cpi"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14" /><path d="m19 12-7-7-7 7" /></svg></div>
                  <h3>Overcapaciteit</h3>
                  <p>Onnodig zware toestellen die dagen of weken draaien verhogen het energieverbruik, de kosten en de ecologische impact, zonder dat het resultaat er beter van wordt.</p>
                </div>
              </div>
              <blockquote className="cap-bq rv d2"><svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M10 7H6a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-7a4 4 0 0 0-1-2.65zM21 7h-4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-7a4 4 0 0 0-1-2.65z" opacity=".45" /></svg>De beste oplossing is niet noodzakelijk de grootste installatie. Het is de installatie die technisch klopt. <b>Daarom adviseren wij ook wanneer minder beter is.</b></blockquote>
            </div>
            <figure className="cap-man rv d1">
              <img src="/vernast/man-meter-upright.webp" alt="Vernast specialist met vochtmeter" loading="lazy" decoding="async" />
              <figcaption><span className="ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg></span><div>Gemeten, niet geschat<small>Vochtmeting voor én na</small></div></figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="team" id="team">
        <div className="wrap">
          <div className="sec-head mid">
            <span className="kick">Eén team, verschillende disciplines</span>
            <h2 className="sec rv">Geen klassiek verhuurbedrijf. Eén team met vier vakgebieden.</h2>
            <p className="lede rv d1">Onze manier van werken ontstaat door disciplines samen te brengen. Allemaal met hetzelfde doel: de complexiteit achter de schermen oplossen, zodat het voor u eenvoudig wordt.</p>
          </div>
          <div className="team-grid">
            <div className="tm rv">
              <div className="tphoto"><img src="/vernast/man-klembord.webp" alt="Bouwtechniek" loading="lazy" decoding="async" /></div>
              <div className="tbody">
                <h3>Bouwtechniek</h3>
                <p>Onderzoekt wat er werkelijk in uw constructie gebeurt en welke droogoplossing technisch verantwoord is.</p>
              </div>
            </div>
            <div className="tm rv d1">
              <div className="tphoto"><img src="/vernast/worker-thumb.webp" alt="Productontwikkeling" loading="lazy" decoding="async" /></div>
              <div className="tbody">
                <h3>Productontwikkeling</h3>
                <p>Stelt apparatuur en configuraties samen die het drogen eenvoudiger, efficiënter en betrouwbaarder maken.</p>
              </div>
            </div>
            <div className="tm rv d2">
              <div className="tphoto"><img src="/vernast/koppel-digitaal.webp" alt="Softwareontwikkeling" loading="lazy" decoding="async" /></div>
              <div className="tbody">
                <h3>Softwareontwikkeling</h3>
                <p>Vertaalt technische processen naar digitale systemen: calculator, reservatie, planning en opvolging.</p>
              </div>
            </div>
            <div className="tm rv d3">
              <div className="tphoto"><img src="/vernast/man-zen-crop.webp" alt="Marketing en klantbeleving" loading="lazy" decoding="async" /></div>
              <div className="tbody">
                <h3>Marketing &amp; klantbeleving</h3>
                <p>Maakt complexe bouwtechnische informatie begrijpelijk, zodat u precies weet wat er op uw werf gebeurt.</p>
              </div>
            </div>
          </div>
          <div className="belg rv">
            <div className="bt">
              <h3>Ontwikkeld voor de Belgische markt.</h3>
              <p>Onze toestellen en configuraties zijn geselecteerd vanuit wat we dagelijks op Belgische bouw- en renovatieprojecten zien. Een deel van die oplossingen is <b>exclusief via Vernast beschikbaar op de Belgische markt</b>. Maar exclusiviteit is geen doel op zich: een product heeft pas waarde wanneer het een concreet probleem beter oplost.</p>
            </div>
            <img src="/vernast/drie-vakmannen.webp" alt="Vernast vakmannen" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* ================= VOLGENDE FASE ================= */}
      <section className="fase" id="vacatures">
        <div className="wrap fase-grid">
          <div>
            <span className="kick">Werken bij Vernast</span>
            <h2 className="sec rv">Bouw jij mee aan de nieuwe standaard in bouwdroging?</h2>
            <p className="lede rv d1">Vernast groeit, en dat voel je op de baan. We zoeken collega's met technisch inzicht en goesting om klanten echt te helpen: van installatie en vochtmeting tot ophaling. Ervaring in de bouw is een plus, de rest leer je bij ons.</p>
            <div className="fase-chips rv d2">
              <span><CheckSm /> Vast contract</span>
              <span><CheckSm /> Interne opleiding &amp; certificering</span>
              <span><CheckSm /> Modern materiaal &amp; eigen wagen</span>
              <span><CheckSm /> Hecht team, korte lijnen</span>
            </div>
          </div>
          <div className="jobs rv d1">
            <a className="job" href="mailto:info@vernast.be?subject=Sollicitatie%20technieker%20bouwdroging">
              <div className="jt"><h3>Technieker bouwdroging</h3><span className="jb">Voltijds</span></div>
              <p>Installatie, vochtmeting en ophaling bij klanten in heel Vlaanderen.</p>
              <span className="jl">Aartselaar · rijbewijs B <i>Solliciteer →</i></span>
            </a>
            <a className="job" href="mailto:info@vernast.be?subject=Sollicitatie%20magazijnier">
              <div className="jt"><h3>Magazijnier / afhaalpunt</h3><span className="jb">Deeltijds kan</span></div>
              <p>Toestellen klaarzetten, testen en klanten helpen bij afhaling en retour.</p>
              <span className="jl">Aartselaar, langs de A12 <i>Solliciteer →</i></span>
            </a>
            <a className="job spont" href="mailto:info@vernast.be?subject=Spontane%20sollicitatie">
              <div className="jt"><h3>Spontaan solliciteren</h3><span className="jb">Altijd welkom</span></div>
              <p>Geen passende rol? Vertel ons wat je goed kan, wij bekijken wat er mogelijk is.</p>
              <span className="jl">Stuur je cv naar info@vernast.be <i>Mail ons →</i></span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGIE ================= */}
      <section className="tech">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Technologie achter de bouwdroging</span>
            <h2 className="sec rv">Technologie met één functie: complexiteit wegnemen.</h2>
          </div>
        </div>
        <div className="mq rv">
          <div className="mq-track">
            {[...techRow1, ...techRow1].map((item, i) => (
              <TechItem key={i} item={item} />
            ))}
          </div>
        </div>
        <div className="mq rev rv d1">
          <div className="mq-track">
            {[...techRow2, ...techRow2].map((item, i) => (
              <TechItem key={i} item={item} />
            ))}
          </div>
        </div>
        <div className="wrap">
          <p className="tech-note rv d2">Technologie is bij ons geen doel op zich. Ze heeft één taak: <b>u werk uit handen nemen</b>. U berekent, boekt, betaalt en plant uw installatie volledig online, en u weet op elk moment wat er op uw werf gebeurt.</p>
        </div>
      </section>

      {/* ================= ACADEMY ================= */}
      <section className="acy" id="academy">
        <div className="wrap acy-grid">
          <div>
            <span className="kick">Kennis &amp; opleiding</span>
            <h2 className="sec rv">Vernast Academy.</h2>
            <p className="lede rv d1">Goede apparatuur zonder goede uitvoering lost weinig op. Daarom bouwen we aan de Vernast Academy: ons interne opleidingsprogramma met trainingen en certificaten rond de nieuwste droogtechnieken. De Academy wordt nog volop uitgewerkt, maar één ding geldt vandaag al op elke werf: <b style={{ color: "#fff" }}>iedere vakman die bij u installeert, is intern opgeleid en gecertificeerd</b>. Zo krijgt u overal dezelfde aanpak en dezelfde kwaliteit.</p>
            <div className="acy-stats rv d2">
              <div><b>100%</b><span>opgeleide vakmannen</span></div>
              <div><b>Intern</b><span>gecertificeerd</span></div>
              <div><b>In uitbouw</b><span>open opleidingen</span></div>
            </div>
            <a className="btn btn-white rv d3" href="https://www.vernast.be/academy" style={{ marginTop: 30 }}>Ontdek de Academy op vernast.be
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>
          </div>
          <div className="acy-cards">
            <div className="ac rv">
              <span className="tag hot">Kerncursus</span>
              <h3>Bouwdroging</h3>
              <p>Dimensionering, correcte plaatsing, condensafvoer en vochtmetingen</p>
              <span className="meta">5 modules</span>
            </div>
            <div className="ac rv d1">
              <span className="tag">Certificaat</span>
              <h3>Vochtexpert</h3>
              <p>Diagnostiek, muurinjectie en rapportage</p>
              <span className="meta">8 modules</span>
            </div>
            <div className="ac rv d2">
              <span className="tag">Certificaat</span>
              <h3>Kelder Specialist</h3>
              <p>Bekuiping, drainage en waterdichting</p>
              <span className="meta">7 modules</span>
            </div>
            <div className="acy-mini rv d3">
              <span>Ventilatie · 5 modules</span>
              <span>Gevel · 6 modules</span>
              <span>Schimmel · 4 modules</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VERNAST GROEP ================= */}
      <section className="groep">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Onderdeel van Vernast</span>
            <h2 className="sec rv">Eén groep. Alles rond uw gebouw.</h2>
            <p className="lede rv d1">Vernast BouwDroging staat niet alleen. Ziet onze technicus op uw werf geen bouwvocht maar een vochtprobleem? Dan schuift het juiste team meteen mee aan tafel, binnen dezelfde groep.</p>
          </div>
          <div className="gr-grid">
            <a className="gr" href="https://www.vernast-vochtbestrijding.be/">
              <div className="gphoto"><img src="/vernast/schimmel-muur.webp" alt="Vochtbestrijding" style={{ objectFit: "cover" }} loading="lazy" decoding="async" /></div>
              <span className="gi"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" /></svg></span>
              <h3>Vernast Vochtbestrijding</h3>
              <p>Opstijgend vocht, kelderdichting en gevelbehandeling. Wanneer de oorzaak dieper zit dan bouwvocht, pakken we ze bij de bron aan.</p>
              <span className="gl">Naar vochtbestrijding →</span>
            </a>
            <Link className="gr hot" to="/">
              <div className="gphoto light"><img src="/vernast/lineup-dryers.webp" alt="Vernast eco-bouwdrogers" loading="lazy" decoding="async" /></div>
              <span className="gi"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v3" /><path d="M18.4 5.6l-2.1 2.1" /><path d="M21 12h-3" /><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg></span>
              <h3>Vernast BouwDroging</h3>
              <p>Waar u nu bent: berekende droogpakketten met garantie, losse toestellen en volledig digitale boeking en opvolging.</p>
              <span className="gl">Bereken uw pakket →</span>
            </Link>
            <a className="gr" href="https://www.vernast-schilderwerken.be/">
              <div className="gphoto red"><img src="/vernast/man-spuitbus.webp" alt="Vernast schilder" style={{ height: "118%" }} loading="lazy" decoding="async" /></div>
              <span className="gi"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" /><path d="M12 11v4a2 2 0 0 1-2 2H8a2 2 0 0 0-2 2v2" /></svg></span>
              <h3>Vernast Schilderwerken</h3>
              <p>Afwerking binnen en buiten. De logische volgende stap zodra uw muren aantoonbaar droog zijn.</p>
              <span className="gl">Naar schilderwerken →</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= CONTACTFORMULIER ================= */}
      <section className="oform" id="formulier">
        <div className="wrap">
          <div className="sec-head mid" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
            <span className="kick rv">Vragen of samenwerken?</span>
            <h2 className="sec rv" style={{ color: "#fff" }}>Vertel ons waar u mee zit.</h2>
            <p className="lede rv d1" style={{ color: "rgba(255,255,255,.78)", marginLeft: "auto", marginRight: "auto" }}>Een vraag over onze aanpak, een project bespreken of solliciteren: u krijgt binnen één werkdag antwoord.</p>
          </div>
          <div className="fshell rv d2">
            {!sent ? (
              <div id="formBody">
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
                      <option>Vraag over onze aanpak</option>
                      <option>Project of samenwerking bespreken</option>
                      <option>Solliciteren bij Vernast</option>
                      <option>Pers of partnership</option>
                      <option>Iets anders</option>
                    </select>
                  </div>
                </div>
                <div className="frow one">
                  <div className="fld"><label htmlFor="fMsg">Uw bericht</label><textarea id="fMsg" rows={5} placeholder="Vertel kort waarmee we u kunnen helpen"></textarea></div>
                </div>
                <div className="fsend">
                  <small>Wij gebruiken uw gegevens enkel om uw vraag te beantwoorden.</small>
                  <button className="btn btn-red2" id="fSend" type="button" onClick={() => setSent(true)}>Verstuur bericht<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></button>
                </div>
              </div>
            ) : (
              <div className="fdone on" id="formDone">
                <div className="ic"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></div>
                <h3>Bericht verzonden</h3>
                <p>Bedankt! We nemen binnen één werkdag contact met u op.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <V3Footer />
    </div>
  );
};

export default OverOnsPage;

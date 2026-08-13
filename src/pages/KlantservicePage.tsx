import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import { SEO } from "@/data/seo";
import "@/styles/klantservice.css";
import "@/styles/klantservice-fixes.css";

/**
 * Klantenservice — 1:1 transcription of the Claude Design handoff
 * (Klantservice.html). The design's own header/footer are replaced by the
 * shared <V3Header>/<V3Footer>; everything else is the design's markup,
 * scoped under `.ks-page` (see src/styles/klantservice.css). Assets resolve
 * from /vernast/*.webp.
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.currentTarget;
    const val = (name: string) => (f.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement)?.value ?? "";
    const onderwerp = val("onderwerp");
    const body =
      `Naam: ${val("voornaam")} ${val("naam")}` +
      `%0AE-mail: ${val("email")}` +
      `%0ATelefoon: ${val("telefoon") || "-"}` +
      `%0AOnderwerp: ${onderwerp}` +
      `%0A%0A${encodeURIComponent(val("vraag"))}`;
    window.location.href =
      `mailto:info@vernast-verhuur.be?subject=${encodeURIComponent("Klantenservice: " + onderwerp)}&body=${body}`;
  };

  return (
    <div className="ks-page">
      <PageMeta
        {...SEO.klantservice}
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Klantenservice", path: "/klantservice" },
          ]),
        ]}
      />

      <V3Header lightAfter={380} />

      {/* ================= HERO ================= */}
      <section className="ks-hero">
        <div className="wrap">
          <span className="kick">Klantenservice</span>
          <h1>Hoe kunnen we u helpen?</h1>
          <p>Een vraag over uw betaling, een toestel dat niet doet wat het moet, of uw huurperiode verlengen? Hieronder vindt u meteen een antwoord, of u belt ons gewoon.</p>
          <div className="ks-quick">
            <a className="hot" href="tel:+3236899065"><Phone /> Bel 03 689 90 65</a>
            <a href="mailto:info@vernast-verhuur.be">Mail ons</a>
            <a href="#storing">Storing melden</a>
            <a href="#betalingen">Betalingen &amp; facturen</a>
          </div>
        </div>
      </section>

      {/* ================= TOPICS ================= */}
      <section className="topics">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Waarmee kunnen we helpen?</span>
            <h2 className="sec">Kies uw onderwerp.</h2>
          </div>
          <div className="top-grid">
            <a className="tp" href="#betalingen">
              <span className="ti"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg></span>
              <h3>Betalingen &amp; facturen</h3>
              <p>Online betalen met 5% korting, betalen bij levering, en waar uw factuur blijft.</p>
              <span className="tg">Bekijk antwoorden →</span>
            </a>
            <a className="tp" href="#storing">
              <span className="ti"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a5 5 0 0 0-6.9 6.9L3 18v3h3l4.8-4.8a5 5 0 0 0 6.9-6.9L14 12l-2-2z" /></svg></span>
              <h3>Storing aan een toestel</h3>
              <p>Bouwdroger stopt, zekering springt of pomp voert niet af? Los het in 2 minuten zelf op.</p>
              <span className="tg">Bekijk oplossingen →</span>
            </a>
            <a className="tp" href="#verlengen">
              <span className="ti"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></span>
              <h3>Verlengen of stoppen</h3>
              <p>Nog niet droog of net vroeger klaar? Zo past u uw huurperiode aan.</p>
              <span className="tg">Zo werkt het →</span>
            </a>
            <a className="tp" href="#levering">
              <span className="ti"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 18H3V8h11v10H9" /><path d="M14 10h4l3 4v4h-2" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg></span>
              <h3>Levering &amp; installatie</h3>
              <p>Wanneer komen we, wat is inbegrepen en wat moet u klaarzetten?</p>
              <span className="tg">Zo verloopt het →</span>
            </a>
            <Link className="tp" to="/verhuur/boeking">
              <span className="ti"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg></span>
              <h3>Dekking &amp; eigen risico</h3>
              <p>Wat dekt de waarborg, en wat als een toestel beschadigd raakt op de werf?</p>
              <span className="tg">Naar dekking →</span>
            </Link>
            <a className="tp" href="#afhalen">
              <span className="ti"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg></span>
              <h3>Afhalen &amp; terugbrengen</h3>
              <p>Vervoer rechtopstaand, zware toestellen en ons afhaalpunt langs de A12 in Aartselaar.</p>
              <span className="tg">Lees dit eerst →</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= BETALINGEN ================= */}
      <section className="pay-sec" id="betalingen">
        <img className="pay-man" src="/vernast/man-betaling-2.webp" alt="Klant betaalt eenvoudig online met kaart en gsm" loading="lazy" decoding="async" />
        <div className="wrap">
          <div className="pay-content">
            <div className="sec-head">
              <span className="kick">Betalingen &amp; facturen</span>
              <h2 className="sec">Betalen zoals het u past. Factuur meteen in uw mailbox.</h2>
              <p className="lede">U kiest zelf hoe u betaalt, volledig online met korting, of een kleine orderbevestiging en de rest bij levering. In beide gevallen zonder voorschotfacturen of verrassingen.</p>
            </div>
            <div className="pay-opts">
              <div className="po hot">
                <span className="pol">Meest gekozen · 5% korting</span>
                <h3>Alles online betalen</h3>
                <p>Betaal uw volledige pakket meteen online en ontvang <b>5% korting</b> op uw pakketprijs.</p>
                <ul>
                  <li><Check /> Factuur direct na betaling in uw mailbox</li>
                  <li><Check /> Bancontact, kredietkaart of overschrijving</li>
                  <li><Check /> Niets meer te regelen bij levering</li>
                </ul>
              </div>
              <div className="po">
                <span className="pol">Flexibel</span>
                <h3>€ 50 nu, de rest bij levering</h3>
                <p>Bevestig uw boeking met <b>€ 50 orderbevestiging</b> en betaal het saldo ter plaatse bij de installatie.</p>
                <ul>
                  <li><Check /> Saldo via Bancontact of kaart bij onze technicus</li>
                  <li><Check /> Factuur meteen na betaling per e-mail</li>
                  <li><Check /> Kosteloos annuleren tot 48 u voor levering</li>
                </ul>
              </div>
            </div>
            <div className="pay-rows">
              <div className="pr"><b>Factuur niet ontvangen?</b><span>Kijk eerst in uw spamfolder. Niets gevonden? Mail uw boekingsnummer naar <a href="mailto:administratie@vernast.be" style={{ color: "var(--red)", fontWeight: 700 }}>administratie@vernast.be</a> en u ontvangt ze binnen het uur opnieuw.</span></div>
              <div className="pr"><b>Zakelijke klant?</b><span>Vul bij het boeken uw btw-nummer in, dan staat het automatisch correct op de factuur. Aanpassen achteraf kan via een mailtje.</span></div>
              <div className="pr"><b>Verlenging betalen</b><span>Verlengt u binnen de garantie, dan betaalt u niets. Verlengt u zelf, dan ontvangt u een betaallink per e-mail, geen nieuwe boeking nodig.</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STORINGEN ================= */}
      <section className="fix" id="storing" style={{ backgroundColor: "#F4F4F4" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Storing aan een toestel</span>
            <h2 className="sec">Los de meeste problemen in 2 minuten zelf op.</h2>
            <p className="lede">Onze toestellen zijn robuust, maar op een werf kan altijd iets gebeuren. Dit zijn de vijf meest voorkomende meldingen, met de oplossing erbij.</p>
          </div>
          <div className="fix-grid">
            <div className="fx">
              <h3><span className="fi"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7z" /></svg></span>Bouwdroger start niet of valt uit</h3>
              <ol>
                <li>Controleer of het stopcontact werkt (test met een ander toestel).</li>
                <li>Kijk in de zekeringkast en schakel de automaat terug in.</li>
                <li>Wacht 10 minuten: na een stroomonderbreking herstart het toestel automatisch.</li>
              </ol>
              <p>Blijft het toestel uitvallen? Bel <a href="tel:+3236899065">03 689 90 65</a>, wij wisselen het binnen 24 uur om.</p>
            </div>
            <div className="fx">
              <h3><span className="fi"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg></span>Zekering springt regelmatig</h3>
              <ol>
                <li>Sluit de bouwdroger aan op een aparte stroomgroep, niet samen met ander zwaar materieel.</li>
                <li>Gebruik geen lichte huishoudverlengkabel: de meegeleverde kabels zijn berekend op het vermogen.</li>
              </ol>
              <p>Geen (werkende) elektriciteitskast op de werf? Wij verhuren een werfverdeelkast (paddenstoel). Bel <a href="tel:+3236899065">03 689 90 65</a>.</p>
            </div>
            <div className="fx">
              <h3><span className="fi"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" /></svg></span>Bouwdroger overgelopen</h3>
              <ol>
                <li>Zet de bouwdroger uit.</li>
                <li>Controleer of het reservoir en de afvoerdarm goed vastzitten en nergens loszitten of knikken.</li>
                <li>Start het toestel terug op.</li>
              </ol>
              <p>Loopt het opnieuw over? Bel <a href="tel:+3236899065">03 689 90 65</a>, dan vervangen we de pomp of het toestel gratis.</p>
            </div>
            <div className="fx">
              <h3><span className="fi"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a5 5 0 0 0-6.9 6.9L3 18v3h3l4.8-4.8a5 5 0 0 0 6.9-6.9L14 12l-2-2z" /></svg></span>Condenspomp voert geen water af</h3>
              <ol>
                <li>Controleer of de afvoerslang nergens geknikt of geplooid ligt.</li>
                <li>De pomp overbrugt max. 4 m hoogte: leg de slang zo kort en recht mogelijk.</li>
                <li>Koppel de slang even los. Loopt er water uit, dan zit de verstopping in de slang.</li>
              </ol>
              <p>Het condenswater is zuiver en mag in elke afvoer. Pomp defect? Bel <a href="tel:+3236899065">03 689 90 65</a>, wij vervangen ze gratis.</p>
            </div>
            <div className="fx">
              <h3><span className="fi"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 15h18" /><path d="M3 9h18" /><rect x="3" y="4" width="18" height="16" rx="2" /></svg></span>Reservoir-lampje brandt</h3>
              <ol>
                <li>Leeg het waterreservoir en schuif het correct terug tot het vastklikt.</li>
                <li>Het toestel herneemt automatisch, u hoeft niets te herstarten.</li>
              </ol>
              <p>Beu om 2 à 3 keer per dag te legen? Voeg de condenspomp toe (€ 2 per bouwdroger per dag) en het water wordt dag en nacht automatisch afgevoerd.</p>
            </div>
            <div className="fx">
              <h3><span className="fi"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></span>Het droogt trager dan verwacht</h3>
              <ol>
                <li>Houd ramen en deuren gesloten, anders droogt u de buitenlucht mee.</li>
                <li>Hou de temperatuur boven 15 °C. In koude ruimtes werkt condensdroging trager.</li>
                <li>Controleer of het toestel vrij staat: 50 cm ruimte rond de aanzuig- en uitblaaszijde.</li>
              </ol>
              <p>Twijfelt u? Bel <a href="tel:+3236899065">03 689 90 65</a>, wij meten mee en plaatsen indien nodig extra capaciteit. Binnen de garantie verlengt u kosteloos.*</p>
            </div>
            <div className="fx">
              <h3><span className="fi"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 12 5-3-5-3" /><path d="M12 3v18" /><path d="m22 12-5 3 5 3" /><path d="M12 8h.01M12 16h.01" /></svg></span>IJsvorming op het toestel</h3>
              <ol>
                <li>Zet het toestel uit en laat het 30 minuten ontdooien.</li>
                <li>IJsvorming wijst op een te koude ruimte (&lt; 8 °C).</li>
              </ol>
              <p>In koude kelders of winterse werven is een adsorptiedroger of bijverwarming de juiste oplossing. Bel ons en wij wisselen de opstelling om.</p>
            </div>
            <div className="fx call">
              <h3><span className="fi"><Phone size={16} /></span>Toestel defect of beschadigd?</h3>
              <p>Bel ons meteen. 9 op 10 storingen lossen we telefonisch op; lukt dat niet, dan staat er binnen 24 uur een technicus met een vervangtoestel op uw werf, zonder extra kosten.</p>
              <a className="btn btn-white" href="tel:+3236899065">Bel direct 03 689 90 65</a>
            </div>
          </div>
          <div className="fixbar">
            <img className="fb-man" src="/vernast/man-klembord.webp" alt="Vernast technicus" loading="lazy" decoding="async" />
            <div className="fb-b">
              <h3>Storing niet opgelost? Wij wel.</h3>
              <p>Bel ons op werkdagen tussen 08:00 en 17:00. Kunnen we het niet telefonisch oplossen, dan staat er binnen 24 uur een technicus met een vervangtoestel op uw werf, zonder extra kosten.</p>
            </div>
            <a className="btn btn-white" href="tel:+3236899065">Bel 03 689 90 65</a>
          </div>
        </div>
      </section>

      {/* ================= LEVERING ================= */}
      <section className="ext" id="levering" style={{ background: "var(--maroon-deep) url('/vernast/bg-red-wide-2.webp') center/cover no-repeat" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="kick" style={{ color: "rgba(255,255,255,.75)" }}>Levering &amp; installatie</span>
            <h2 className="sec" style={{ color: "#fff" }}>Geleverd, geplaatst en afgesteld. U hoeft niets te tillen.</h2>
            <p className="lede" style={{ color: "rgba(255,255,255,.78)" }}>Uw pakket wordt binnen 24 uur geleverd op het moment dat u bij de boeking koos. Onze technicus doet de volledige installatie en legt kort uit waar u op let.</p>
          </div>
          <div className="ext-grid" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
            <div className="ex-c">
              <div className="en">01</div>
              <h3>Levering binnen 24 uur</h3>
              <p>U kiest zelf uw leverdag en dagdeel. Transport, levering én ophaling zijn volledig inbegrepen in uw pakketprijs.</p>
            </div>
            <div className="ex-c">
              <div className="en">02</div>
              <h3>Installatie door onze technicus</h3>
              <p>Wij positioneren de toestellen, sluiten de condensafvoer aan, stellen de streefvochtigheid in en doen de startmeting.</p>
            </div>
            <div className="ex-c">
              <div className="en">03</div>
              <h3>Wat zet u klaar?</h3>
              <p>Een werkend stopcontact op een aparte stroomgroep en een vrije doorgang naar de te drogen ruimtes. Meer is het niet.</p>
            </div>
            <div className="ex-c">
              <div className="en">04</div>
              <h3>Verdieping? Ook goed.</h3>
              <p>Plaatsing op een verdieping via trap of lift is gratis. Enkel wanneer bouwdrogers via een ladder naar boven moeten, rekenen we eenmalig € 39 draagwerk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= AFHALEN ================= */}
      <section className="ext" id="afhalen" style={{ background: "var(--bg)" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Zelf afhalen &amp; vervoer</span>
            <h2 className="sec">Haalt u zelf af? Lees dit eerst even.</h2>
            <p className="lede">Losse toestellen haalt u af aan ons afhaalpunt langs de A12 in Aartselaar. Goed vervoeren is belangrijk: zo start uw bouwdroger meteen en zonder schade op.</p>
          </div>
          <div className="ext-grid">
            <div className="ex-c">
              <div className="exi2"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5" /><path d="m5 12 7-7 7 7" /></svg></div>
              <div className="en">Belangrijk</div>
              <h3>Vervoer de bouwdroger altijd rechtopstaand</h3>
              <p>Een bouwdroger mag <b>niet plat</b> vervoerd worden: de koelvloeistof loopt dan uit de compressor. Toch plat vervoerd? Zet het toestel <b>24 uur rechtop</b> en wacht vóór u het opstart. Zo voorkomt u schade aan de compressor.</p>
            </div>
            <div className="ex-c">
              <div className="exi2"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 6.5h11" /><path d="M6 20V10a6 6 0 0 1 12 0v10" /><path d="M4 20h16" /></svg></div>
              <div className="en">Goed om weten</div>
              <h3>De toestellen zijn zwaar</h3>
              <p>Reken op 25 tot 40 kg per bouwdroger. Kom met twee, breng een ruime koffer of aanhangwagen mee en til met een recht gedragen rug. Liever niet sleuren? Wij leveren en installeren álles voor u, aan te raden voor oudere klanten.</p>
            </div>
            <div className="ex-c">
              <div className="exi2"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg></div>
              <div className="en">Afhaalpunt</div>
              <h3>Langs de A12 in Aartselaar</h3>
              <p>U haalt af aan ons magazijn: <b>Boomsesteenweg 12, Unit 11, 2630 Aartselaar</b>, vlot bereikbaar langs de A12. Enkel op afspraak: u kiest uw afhaalmoment bij de reservatie en alles staat klaar. Wij laden mee in en geven korte uitleg.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DIGITAAL ================= */}
      <section className="digi" id="digitaal">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Volledig digitaal</span>
            <h2 className="sec">Ook na uw boeking regelt u alles online.</h2>
            <p className="lede">Geen wachtmuziek nodig: verlengen, uw ophaling plannen of een factuur opvragen doet u in enkele klikken. Liever een mens aan de lijn? Bellen kan altijd.</p>
          </div>
          <div className="digi-grid">
            <div className="dg">
              <div className="dgi"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></div>
              <b>Verlengen online</b><span>Vraag uw verlenging aan en ontvang meteen een betaallink per e-mail. Binnen de garantie verlengt u kosteloos.</span>
            </div>
            <div className="dg">
              <div className="dgi"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" /></svg></div>
              <b>Ophaling plannen</b><span>Droog gemeten? Kies zelf de dag en het dagdeel waarop wij de toestellen komen ophalen.</span>
            </div>
            <div className="dg">
              <div className="dgi"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg></div>
              <b>Factuur opvragen</b><span>Uw factuur staat direct na betaling in uw mailbox. Kwijt? Eén mailtje naar administratie@vernast.be volstaat.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VERLENGEN ================= */}
      <section className="ext" id="verlengen" style={{ backgroundColor: "#F4F4F4" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Verlengen of stoppen</span>
            <h2 className="sec">Nog niet droog? Dan verlengt u, vaak kosteloos.</h2>
            <p className="lede">Uw pakket is berekend op 100% droog binnen de huurperiode. Toont de eindmeting toch nog vocht, dan verlengt u binnen de garantie zonder bij te betalen.*</p>
          </div>
          <div className="ext-grid">
            <div className="ex-c">
              <div className="en">01 · Binnen de garantie</div>
              <h3>Kosteloos verlengen</h3>
              <p>Is uw woning niet droog binnen de berekende periode, dan huurt u kosteloos verder tot ze dat wél is. U belt of mailt ons, wij verlengen meteen, geen nieuwe boeking, geen extra factuur.</p>
            </div>
            <div className="ex-c">
              <div className="en">02 · Zelf verlengen</div>
              <h3>Langer huren op eigen vraag</h3>
              <p>Wilt u de toestellen langer houden (bv. voor een volgende bouwfase)? Eén telefoontje en wij verlengen aan dezelfde dagprijs. U ontvangt een betaallink per e-mail.</p>
            </div>
            <div className="ex-c">
              <div className="en">03 · Vroeger klaar</div>
              <h3>Vroeger stoppen</h3>
              <p>Droog vóór het einde van de huurperiode? Meld het ons en wij plannen de ophaling vroeger in. Bij pakketten met eindmeting bevestigen we eerst samen dat alles op streefwaarde zit.</p>
            </div>
          </div>
          <p className="ext-note">* De garantie geldt wanneer de externe omstandigheden voldoen: ramen en deuren gesloten, temperatuur op peil en de toestellen ononderbroken in werking.</p>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="cta" id="contact">
        <div className="wrap">
          <div className="sec-head mid">
            <span className="kick">Contact</span>
            <h2 className="sec">Er toch niet uit? We helpen u persoonlijk.</h2>
            <p className="lede">Beschrijf kort uw vraag of probleem en we nemen dezelfde werkdag contact op.</p>
          </div>
          <div className="cta-shell">
            <div className="cta-info">
              <div className="ci">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92V21a1 1 0 0 1-1.11 1A19.86 19.86 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.29 1L7 10.5a16 16 0 0 0 6.5 6.5l1.75-1.8a1 1 0 0 1 1-.29l4 1a1 1 0 0 1 .75 1Z" /></svg>
                <div><b>Bel ons</b><a href="tel:+3236899065">03 689 90 65</a> · <span>Ma–Vr 08:00–17:00</span></div>
              </div>
              <div className="ci">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></svg>
                <div><b>Mail ons</b><a href="mailto:info@vernast-verhuur.be">info@vernast-verhuur.be</a> · <span>antwoord binnen 4 werkuren</span></div>
              </div>
              <div className="ci">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                <div><b>Afhaalpunt &amp; magazijn</b><span>Boomsesteenweg 12, Unit 11 · 2630 Aartselaar<br />Afhalen enkel op afspraak</span></div>
              </div>
              <div className="ci">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
                <div><b>Storing met spoed?</b><span>Bel eerst, 9 op 10 storingen lossen we telefonisch op. Anders binnen 24 u een technicus of vervangtoestel.</span></div>
              </div>
            </div>
            <form className="cform" id="ksForm" onSubmit={handleSubmit}>
              <h3>Stel uw vraag</h3>
              <div className="fr">
                <div><label htmlFor="ksVoornaam">Voornaam</label><input id="ksVoornaam" name="voornaam" required /></div>
                <div><label htmlFor="ksNaam">Naam</label><input id="ksNaam" name="naam" required /></div>
              </div>
              <div className="fr">
                <div><label htmlFor="ksMail">E-mailadres</label><input id="ksMail" name="email" type="email" required /></div>
                <div><label htmlFor="ksTel">Telefoon</label><input id="ksTel" name="telefoon" type="tel" /></div>
              </div>
              <div className="fr">
                <div className="full"><label htmlFor="ksOnderwerp">Onderwerp</label>
                  <select id="ksOnderwerp" name="onderwerp">
                    <option>Betaling of factuur</option>
                    <option>Storing aan een toestel</option>
                    <option>Verlengen of stoppen</option>
                    <option>Levering of ophaling</option>
                    <option>Iets anders</option>
                  </select>
                </div>
              </div>
              <div className="fr">
                <div className="full"><label htmlFor="ksVraag">Uw vraag</label><textarea id="ksVraag" name="vraag" placeholder="Vermeld indien mogelijk uw boekingsnummer." required></textarea></div>
              </div>
              <button className="btn btn-red" type="submit">Verstuur uw vraag
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </button>
              <div className="fnote">We antwoorden dezelfde werkdag. Dringend? Bel 03 689 90 65.</div>
            </form>
          </div>
        </div>
      </section>

      <V3Footer />
    </div>
  );
};

export default KlantservicePage;

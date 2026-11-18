import PageMeta from "@/components/PageMeta";
import { AanvraagDone, AanvraagError, AanvraagHoneypot } from "@/components/AanvraagForm";
import { useAanvraag } from "@/hooks/useAanvraag";
import V3Footer from "@/components/home-v3/V3Footer";
import V3Header from "@/components/home-v3/V3Header";
import { useSeo } from "@/data/seo";
import { PUMP } from "@/data/verhuur";
import { DEPOSIT_GROSS } from "@/lib/booking";
import { formatEuro, useCopy, useLokaalPad, useTaal, useToonBedrag } from "@/i18n/useTaal";
import { AFHALEN_COPY, AFHALEN_STANDAARD_ONDERWERP } from "./AfhalenPage.copy";
import { MAPS_URL } from "@/lib/site";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
/*
 * contact-fixes.css hoort hierbij, niet alleen bij /contact: de pagina draagt
 * dezelfde `.ct-page`-schil en dus dezelfde drie gebreken van de designfile.
 * Zonder dit bestand rekt het logo van <V3Header> zich over de hele nav-pil
 * (het heeft een width-attribuut van 1600 voor CLS, en de designregel zet
 * alleen de hoogte), valt het menu over zichzelf heen en landen de
 * anker-sprongen onder de vaste header.
 */
import "@/styles/contact.css";
import "@/styles/contact-fixes.css";
import "@/styles/afhalen.css";

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

/*
 * Een bouwdroger die naar liggend kantelt en weer terugveert.
 *
 * De regel "altijd rechtop vervoeren" is de duurste van de pagina -- een
 * condensdroger die plat gelegen heeft, kan koelmiddel uit de compressor
 * verliezen -- maar ze stond als derde zin in een alinea. Een toestel dat voor
 * uw ogen kantelt en weer rechtveert, met het kruis dat verschijnt op het
 * moment dat het ligt, zegt het zonder dat er iets gelezen hoeft te worden.
 *
 * De animatie staat in afhalen.css en valt stil bij `prefers-reduced-motion`;
 * dan blijft het toestel rechtop staan met het kruis uit.
 */
const RechtopPictogram = () => (
  <svg className="af-upright" viewBox="0 0 120 96" role="img" aria-label={useCopy(AFHALEN_COPY).pictogram.rechtop}>
    <line x1="10" y1="86" x2="110" y2="86" stroke="#d9d5d5" strokeWidth="3" strokeLinecap="round" />
    <g className="afu-toestel">
      <rect x="44" y="26" width="32" height="56" rx="5" fill="#fff" stroke="#3a3737" strokeWidth="3" />
      <rect x="51" y="34" width="18" height="13" rx="2.5" fill="#ECEAEA" />
      <circle cx="60" cy="63" r="7" fill="none" stroke="#3a3737" strokeWidth="3" />
      <path d="M50 22h20" stroke="#3a3737" strokeWidth="3" strokeLinecap="round" />
    </g>
    <g className="afu-kruis">
      <circle cx="94" cy="24" r="13" fill="#C8102E" />
      <path d="m89 19 10 10M99 19l-10 10" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
    </g>
  </svg>
);

/*
 * Een toestel dat de koffer in schuift.
 *
 * "Kom met voldoende laadruimte" is een zin waar iemand overheen leest; een
 * toestel dat niet in één keer past en nog een duw krijgt, laat zien waarom de
 * koffer ruim moet zijn.
 */
const LaadruimtePictogram = () => (
  <svg className="af-anim" viewBox="0 0 120 96" role="img" aria-label={useCopy(AFHALEN_COPY).pictogram.laadruimte}>
    <path d="M18 74V38h46l16 14v22" fill="none" stroke="#3a3737" strokeWidth="3" strokeLinejoin="round" />
    <path d="M18 74h84" stroke="#d9d5d5" strokeWidth="3" strokeLinecap="round" />
    <circle cx="36" cy="74" r="7" fill="#fff" stroke="#3a3737" strokeWidth="3" />
    <circle cx="74" cy="74" r="7" fill="#fff" stroke="#3a3737" strokeWidth="3" />
    <g className="afl-doos">
      <rect x="86" y="44" width="22" height="26" rx="3" fill="#fff" stroke="#C8102E" strokeWidth="3" />
      <path d="M90 50h14" stroke="#C8102E" strokeWidth="3" strokeLinecap="round" />
    </g>
  </svg>
);

/*
 * Een klok waarvan de wijzer precies in het gereserveerde kwartier stilvalt.
 *
 * Het tijdslot is de reden dat er geen wachtrij is. Een wijzer die rondgaat en
 * in de rode boog tot stilstand komt, zegt dat in één beweging.
 */
const TijdslotPictogram = () => (
  <svg className="af-anim" viewBox="0 0 120 96" role="img" aria-label={useCopy(AFHALEN_COPY).pictogram.tijdslot}>
    <path className="aft-boog" d="M60 18a30 30 0 0 1 26 15" fill="none" stroke="#C8102E" strokeWidth="6" strokeLinecap="round" />
    <circle cx="60" cy="48" r="30" fill="#fff" stroke="#3a3737" strokeWidth="3" />
    <path d="M60 22v4M86 48h-4M60 74v-4M34 48h4" stroke="#3a3737" strokeWidth="3" strokeLinecap="round" />
    <g className="aft-wijzer">
      <path d="M60 48V30" stroke="#C8102E" strokeWidth="3.5" strokeLinecap="round" />
    </g>
    <circle cx="60" cy="48" r="3.5" fill="#3a3737" />
  </svg>
);

/** De routekaart uit de contactpagina, hier als hoofdvisual voor afhalen. */
const AfhaalRouteKaart = () => {
  const t = useCopy(AFHALEN_COPY);
  return (
  <svg viewBox="0 0 900 460" role="img" aria-label={t.pictogram.kaart}>
    <rect width="900" height="460" fill="#F7F6F6" />
    <rect x="810" width="90" height="460" fill="#ECEAEA" />
    <text x="855" y="230" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="13" fontWeight="700" fill="#b3afaf" transform="rotate(-90 855 230)">A12</text>
    <rect x="690" width="72" height="460" fill="#E3E1E1" />
    <line x1="726" y1="0" x2="726" y2="460" stroke="#fff" strokeWidth="4" strokeDasharray="26 20" />
    <text x="672" y="230" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="13" fontWeight="700" fill="#8a8686" transform="rotate(-90 672 230)">N177 · BOOMSESTEENWEG</text>
    <rect x="40" y="350" width="686" height="52" fill="#E3E1E1" />
    <text x="420" y="396" fontFamily="ui-monospace,monospace" fontSize="13" fontWeight="700" fill="#8a8686" letterSpacing="2">KLEIDAAL</text>
    <g><rect x="480" y="128" width="170" height="72" rx="10" fill="#fff" stroke="#d9d5d5" strokeWidth="2" /><text x="565" y="160" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="13" fontWeight="700" fill="#3a3737" letterSpacing="2">TESLA</text><text x="565" y="182" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#8a8686">{t.kaart.tesla}</text></g>
    <g><rect x="462" y="236" width="188" height="86" rx="10" fill="#fff" stroke="#d9d5d5" strokeWidth="2" /><rect x="462" y="236" width="188" height="26" rx="10" fill="#C8102E" /><text x="556" y="254" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="12" fontWeight="700" fill="#fff" letterSpacing="2">CARGLASS</text><text x="556" y="286" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#8a8686">{t.kaart.carglass[0]}</text><text x="556" y="304" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#8a8686">{t.kaart.carglass[1]}</text></g>
    <g><rect x="40" y="216" width="250" height="100" rx="12" fill="#C8102E" /><text x="165" y="256" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="14" fontWeight="700" fill="#fff" letterSpacing="2">VERNAST · UNIT 11</text><text x="165" y="280" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="rgba(255,255,255,.85)">{t.kaart.unit}</text></g>
    <path className="route-alt" d="M855 16 L855 200 L740 288 L726 310" fill="none" stroke="#DE9AA5" strokeWidth="4" strokeLinecap="round" />
    <circle cx="855" cy="16" r="7" fill="#DE9AA5" stroke="#fff" strokeWidth="3" />
    <path className="route-line" d="M726 16 L726 376 L96 376" fill="none" stroke="#C8102E" strokeWidth="5" strokeLinecap="round" />
    <circle className="pin-pulse" cx="96" cy="376" r="10" fill="none" stroke="#C8102E" strokeWidth="3" />
    <circle cx="96" cy="376" r="9" fill="#C8102E" stroke="#fff" strokeWidth="3" />
    <circle className="car-dot" r="8" fill="#141414" stroke="#fff" strokeWidth="3" />
    <g><circle cx="726" cy="16" r="8" fill="#3a3737" stroke="#fff" strokeWidth="3" /><text x="700" y="26" textAnchor="end" fontFamily="system-ui" fontSize="12" fontWeight="600" fill="#8a8686">{t.kaart.vanAntwerpen}</text></g>
  </svg>
  );
};

/*
  De stappen en de veelgestelde vragen staan in `AfhalenPage.copy.tsx`.

  De vragen zijn die welke aan de telefoon terugkomen bij een afhaling, en
  nergens anders op deze pagina beantwoord worden. Ze staan er langer dan één
  regel met opzet: wie zelf komt halen heeft geen technieker die het ter
  plaatse uitlegt, dus wat bij een levering mondeling gaat, moet hier staan.

  Alle bedragen en periodes komen uit dezelfde bron als de reservatiepagina
  (`src/data/afhalen.ts`, `src/lib/afhalen.ts`) -- typ er geen over.
*/

const AfhalenPage = () => {
  /*
    Hetzelfde formulier als op /contact en /levering, met bron `contact`:
    `REQUEST_SOURCES` in src/lib/vernastRequest.ts kent geen "afhalen", en een
    bron bijzetten is een wijziging aan het contract met het portaal. Het
    onderwerp zegt al dat het over een afhaling gaat, dus dat volstaat.

    Let op bij uitbreiden: `useAanvraag` stuurt precies zes velden door
    (voornaam, naam, email, telefoon, onderwerp, bericht). Een extra invoerveld
    -- een datumkiezer bijvoorbeeld -- verdwijnt stil, want `api/aanvraag.ts`
    heeft een allowlist. Vandaar dat de gewenste datum en de toestellen in het
    berichtveld gevraagd worden en niet in een eigen veldje.
  */
  const t = useCopy(AFHALEN_COPY);
  const lp = useLokaalPad();
  const taal = useTaal();
  const toon = useToonBedrag();
  const pomp = `${toon(PUMP.price).tekst} ${toon(PUMP.price).label}`;
  /* De orderbevestiging is een vast bruto bedrag, voor iedereen gelijk: geen btw-label. */
  const faq = t.faq.lijst(pomp, formatEuro(DEPOSIT_GROSS, taal, 0));
  const { status, error, mailto, sending, handleSubmit } = useAanvraag({
    source: "contact",
    messageField: "bericht",
    mailSubject: "Afhaling",
  });

  return (
  <div className="ct-page af-page">
    <PageMeta
      {...useSeo("afhalen")}
      jsonLd={[
        organizationSchema(),
        breadcrumbSchema([
          { name: "Home", path: lp("/") },
          { name: t.kruimel, path: lp("/afhalen") },
        ]),
      ]}
    />
    <V3Header lightAfter={420} />

    {/*
      De inhoud hoort in een <main>. Zonder dat heeft de pagina geen landmark
      waar een schermlezer naartoe kan springen, en kan een zoekmachine de
      hoofdtekst niet van header en footer onderscheiden. De test in
      src/test/inhoudspaginas.test.tsx let daarop.
    */}
    <main>
    <div className="redtop">
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="kick">{t.hero.kick}</span>
            <h1>{t.hero.h1}</h1>
            <p>{t.hero.p}</p>

            <div className="cta">
              <a className="btn btn-white" href={lp("/verhuur/afhalen")}>{t.hero.cta} <Arrow /></a>
              <a className="btn btn-ghost" href="#zo-werkt-het">{t.hero.ctaUitleg}</a>
            </div>
          </div>
          {/*
            De kaart hoort hier, met de route die zichzelf tekent: de rode
            stippellijn loopt door en een zwarte stip rijdt de route af, van de
            N177 tot aan onze poort. Dat is de animatie uit contact.css
            (`dashMove`, `drive`, `pinPulse`) -- dezelfde kaart staat verderop
            nog een keer, groot genoeg om de straatnamen te lezen; deze is de
            uitnodiging, die is de uitleg.
          */}
          <a className="hero-map" href="#route" aria-label={t.hero.kaartAria}>
            <AfhaalRouteKaart />
            <div className="hm-cap"><i /> {t.hero.kaartCap}</div>
          </a>
        </div>
      </section>
    </div>

    <section className="af-steps" id="zo-werkt-het">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">{t.stappen.kick}</span>
          <h2 className="sec">{t.stappen.h2}</h2>
          <p className="lede">{t.stappen.lede}</p>
        </div>
        <div className="af-step-grid">
          {t.stappen.lijst.map(([nr, titel, tekst]) => (
            <article className="af-step" key={nr}>
              <span>{nr}</span><h3>{titel}</h3><p>{tekst}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/*
      Deze sectie stond eerst als drie witte kaarten naast elkaar met daaronder
      een balk waarin de man met rugpijn als postzegel van 150px zat. Dat was
      precies verkeerd om: het gewicht is de reden dat deze sectie bestaat, en
      dat argument stond het kleinst op de pagina. Nu draagt hij de rechterhelft
      en staan de drie regels als lijst links, elk met een pictogram dat laat
      zien waar het over gaat.
    */}
    <section className="af-transport">
      <div className="wrap">
        <div className="aft-split">
          <div className="aft-body">
            <span className="kick">{t.transport.kick}</span>
            <h2 className="sec">{t.transport.h2}</h2>
            <p className="lede">{t.transport.lede}</p>

            <ul className="aft-rules">
              <li>
                <RechtopPictogram />
                <div>
                  <b>{t.transport.regels[0].b}</b>
                  <p>{t.transport.regels[0].p}</p>
                </div>
              </li>
              <li>
                <LaadruimtePictogram />
                <div>
                  <b>{t.transport.regels[1].b}</b>
                  <p>{t.transport.regels[1].p}</p>
                </div>
              </li>
              <li>
                <TijdslotPictogram />
                <div>
                  <b>{t.transport.regels[2].b}</b>
                  <p>{t.transport.regels[2].p}</p>
                </div>
              </li>
            </ul>

            <div className="aft-cta">
              <b>{t.transport.ctaVraag}</b>
              <a className="btn" href={lp("/levering")}>
                {t.transport.cta} <Arrow />
              </a>
            </div>
          </div>

          <img
            className="aft-man"
            src="/vernast/oudere-man.webp"
            alt={t.transport.imgAlt}
            width={1360}
            height={1440}
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <section className="af-range">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">{t.gamma.kick}</span>
          <h2 className="sec">{t.gamma.h2}</h2>
          <p className="lede">{t.gamma.lede}</p>
        </div>
        <div className="af-range-grid">
          {["/vernast/eco-boost.webp", "/vernast/eco-revolution.webp", "/vernast/vent-axiaal.webp", "/vernast/kachel-30.webp"].map((src, i) => {
            const k = t.gamma.kaarten[i];
            return <article key={src}><img src={src} alt={k.alt} loading="lazy" /><div><span>{k.span}</span><h3>{k.h3}</h3><p>{k.p}</p></div></article>;
          })}
          {/*
            De condenspomp staat over de volle breedte en niet als vijfde kaart
            in een raster van twee kolommen: dan hing ze als enige op een derde
            rij. Ze is bovendien het enige toebehoren in de rij — de vier
            kaarten erboven zijn toestellen.
          */}
          <article className="af-toebehoren"><img src="/vernast/condenspomp-product-v2.webp" alt={t.gamma.pomp.alt} loading="lazy" /><div><span>{t.gamma.pomp.span}</span><h3>{t.gamma.pomp.h3(pomp)}</h3><p>{t.gamma.pomp.p}<a className="af-text-link" href={lp("/verhuur/toebehoren/condenspomp")}>{t.gamma.pomp.link}</a></p></div></article>
        </div>
        <div className="af-center"><a className="btn" href={lp("/verhuur/afhalen")}>{t.gamma.cta} <Arrow /></a></div>
      </div>
    </section>

    <section className="af-location" id="route">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">{t.locatie.kick}</span>
          <h2 className="sec">{t.locatie.h2}</h2>
          <p className="lede"><b>Vernast Bouwdrogers</b><br />{t.locatie.lede}</p>
        </div>
        <div className="af-map-card"><AfhaalRouteKaart /></div>
        <div className="rt-grid af-route-grid">
          {t.locatie.route.map(([titel, tekst], i) => [String(i + 1), `/vernast/route-${i + 1}.webp`, titel, tekst]).map(([nr, foto, titel, tekst]) => (
            <article className="rt" key={nr}><div className="im"><span className="n">{nr}</span><img src={foto} alt={t.locatie.routeAlt(titel)} loading="lazy" /></div><p><b>{titel}.</b> {tekst}</p></article>
          ))}
        </div>
        <div className="af-location-actions">
          <a className="btn" href={MAPS_URL} target="_blank" rel="noopener noreferrer">{t.locatie.maps} <Arrow /></a>
          <a className="af-text-link" href={lp("/contact")}>{t.locatie.contact}</a>
        </div>
      </div>
    </section>

    <section className="af-faq">
      <div className="wrap af-faq-layout">
        <div className="sec-head">
          <span className="kick">{t.faq.kick}</span>
          <h2 className="sec">{t.faq.h2}</h2>
          {/*
            De linkerkolom droeg alleen een kop en één regel, waardoor er naast
            de vier vragen een halve schermhoogte leeg bleef. De homepage lost
            dat op met een hulpkaart onder de kop; dezelfde opbouw hier houdt de
            twee pagina's herkenbaar en geeft de kolom een bodem.
          */}
          <div className="af-faq-help">
            <h3>{t.faq.hulpH3}</h3>
            <p>{t.faq.hulpP}</p>
            <div className="afh-btns">
              <a className="afh-call" href="tel:+3236899065">
                {t.faq.bel}
              </a>
              <a className="afh-mail" href="mailto:info@vernast-bouwdrogers.be">
                {t.faq.mail}
              </a>
            </div>
          </div>
        </div>
        <div className="af-faq-list">
          {faq.map(([vraag, antwoord]) => <details key={vraag}><summary>{vraag}<span>+</span></summary><p>{antwoord}</p></details>)}
        </div>
      </div>
    </section>

    {/*
      Hier stond een rode balk met "Bekijk wat vrij is op uw afhaaldatum" en een
      knop naar de reservatiepagina. Die knop staat al in de hero en onder het
      gamma; een derde keer dezelfde link voegt niets toe. Wie hier aankomt is
      door de hele uitleg gelezen en heeft meestal nog een vraag -- dus staat er
      nu een formulier, met de reservatielink ernaast voor wie meteen wil boeken.
    */}
    {/*
      `cform` erbij, niet alleen `af-form`: contact.css scopet de volledige
      formulieropmaak (de rode sectie, de witte schil, de velden) onder
      `.ct-page .cform`, en deze pagina draagt die klasse ook. Overtypen zou
      een tweede plek opleveren die bij elke wijziging mee moet.
    */}
    <section className="cform af-form" id="aanvraag">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">{t.form.kick}</span>
          <h2 className="sec">{t.form.h2}</h2>
          <p className="lede">{t.form.lede(lp)}</p>
        </div>

        <form className="fshell" onSubmit={handleSubmit}>
          {status === "done" ? (
            <AanvraagDone title={t.form.klaarTitel} text={t.form.klaar} />
          ) : (
            <div>
              <div className="frow">
                <div className="fld">
                  <label htmlFor="afVoor">{t.form.voornaam}</label>
                  <input type="text" id="afVoor" name="voornaam" placeholder={t.form.voornaam} required />
                </div>
                <div className="fld">
                  <label htmlFor="afNaam">{t.form.naam}</label>
                  <input type="text" id="afNaam" name="naam" placeholder={t.form.naamPh} required />
                </div>
              </div>
              <div className="frow">
                <div className="fld">
                  <label htmlFor="afMail">{t.form.email}</label>
                  <input type="email" id="afMail" name="email" placeholder={t.form.emailPh} required />
                </div>
                <div className="fld">
                  <label htmlFor="afTel">{t.form.telefoon}</label>
                  <input type="tel" id="afTel" name="telefoon" placeholder="04.." />
                </div>
              </div>
              <div className="frow one">
                <div className="fld">
                  <label htmlFor="afOnd">{t.form.onderwerp}</label>
                  <select id="afOnd" name="onderwerp" defaultValue={AFHALEN_STANDAARD_ONDERWERP}>
                    {t.form.onderwerpen.map((o) => <option key={o.waarde} value={o.waarde}>{o.label}</option>)}
                  </select>
                </div>
              </div>
              <div className="frow one">
                <div className="fld">
                  <label htmlFor="afMsg">{t.form.bericht}</label>
                  <textarea
                    id="afMsg"
                    name="bericht"
                    rows={5}
                    placeholder={t.form.berichtPh}
                    required
                  />
                </div>
              </div>
              <div className="fsend">
                <small>{t.form.privacy}</small>
                <button className="btn aanv-btn" type="submit" disabled={sending}>
                  {sending ? t.form.bezig : t.form.versturen} <Arrow />
                </button>
              </div>
              <AanvraagHoneypot />
              <AanvraagError error={error} mailto={mailto} />
            </div>
          )}
        </form>
      </div>
    </section>
    </main>
    <V3Footer />
  </div>
  );
};

export default AfhalenPage;

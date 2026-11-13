import PageMeta from "@/components/PageMeta";
import { AanvraagDone, AanvraagError, AanvraagHoneypot } from "@/components/AanvraagForm";
import { useAanvraag } from "@/hooks/useAanvraag";
import V3Footer from "@/components/home-v3/V3Footer";
import V3Header from "@/components/home-v3/V3Header";
import { SEO } from "@/data/seo";
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
  <svg className="af-upright" viewBox="0 0 120 96" role="img" aria-label="Een bouwdroger hoort rechtop vervoerd te worden, niet liggend">
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
  <svg className="af-anim" viewBox="0 0 120 96" role="img" aria-label="Een bouwdroger die in een ruime koffer wordt geschoven">
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
  <svg className="af-anim" viewBox="0 0 120 96" role="img" aria-label="Een klok waarvan de wijzer stilvalt in het gereserveerde tijdslot">
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
const AfhaalRouteKaart = () => (
  <svg viewBox="0 0 900 460" role="img" aria-label="Route naar het afhaalpunt van Vernast via de N177, Tesla en Carglass">
    <rect width="900" height="460" fill="#F7F6F6" />
    <rect x="810" width="90" height="460" fill="#ECEAEA" />
    <text x="855" y="230" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="13" fontWeight="700" fill="#b3afaf" transform="rotate(-90 855 230)">A12</text>
    <rect x="690" width="72" height="460" fill="#E3E1E1" />
    <line x1="726" y1="0" x2="726" y2="460" stroke="#fff" strokeWidth="4" strokeDasharray="26 20" />
    <text x="672" y="230" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="13" fontWeight="700" fill="#8a8686" transform="rotate(-90 672 230)">N177 · BOOMSESTEENWEG</text>
    <rect x="40" y="350" width="686" height="52" fill="#E3E1E1" />
    <text x="420" y="396" fontFamily="ui-monospace,monospace" fontSize="13" fontWeight="700" fill="#8a8686" letterSpacing="2">KLEIDAAL</text>
    <g><rect x="480" y="128" width="170" height="72" rx="10" fill="#fff" stroke="#d9d5d5" strokeWidth="2" /><text x="565" y="160" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="13" fontWeight="700" fill="#3a3737" letterSpacing="2">TESLA</text><text x="565" y="182" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#8a8686">u passeert eerst Tesla</text></g>
    <g><rect x="462" y="236" width="188" height="86" rx="10" fill="#fff" stroke="#d9d5d5" strokeWidth="2" /><rect x="462" y="236" width="188" height="26" rx="10" fill="#C8102E" /><text x="556" y="254" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="12" fontWeight="700" fill="#fff" letterSpacing="2">CARGLASS</text><text x="556" y="286" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#8a8686">daarna Carglass,</text><text x="556" y="304" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#8a8686">hier rechts indraaien</text></g>
    <g><rect x="40" y="216" width="250" height="100" rx="12" fill="#C8102E" /><text x="165" y="256" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="14" fontWeight="700" fill="#fff" letterSpacing="2">VERNAST · UNIT 11</text><text x="165" y="280" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="rgba(255,255,255,.85)">magazijn + afhaalpoort</text></g>
    <path className="route-alt" d="M855 16 L855 200 L740 288 L726 310" fill="none" stroke="#DE9AA5" strokeWidth="4" strokeLinecap="round" />
    <circle cx="855" cy="16" r="7" fill="#DE9AA5" stroke="#fff" strokeWidth="3" />
    <path className="route-line" d="M726 16 L726 376 L96 376" fill="none" stroke="#C8102E" strokeWidth="5" strokeLinecap="round" />
    <circle className="pin-pulse" cx="96" cy="376" r="10" fill="none" stroke="#C8102E" strokeWidth="3" />
    <circle cx="96" cy="376" r="9" fill="#C8102E" stroke="#fff" strokeWidth="3" />
    <circle className="car-dot" r="8" fill="#141414" stroke="#fff" strokeWidth="3" />
    <g><circle cx="726" cy="16" r="8" fill="#3a3737" stroke="#fff" strokeWidth="3" /><text x="700" y="26" textAnchor="end" fontFamily="system-ui" fontSize="12" fontWeight="600" fill="#8a8686">van Antwerpen via de N177</text></g>
  </svg>
);

const stappen = [
  ["01", "Kies en reserveer online", "Selecteer uw bouwdroger, ventilator of kachel, de huurperiode en een vrij afhaalmoment."],
  ["02", "U ontvangt bevestiging", "Na betaling krijgt u uw reservatie, tijdslot en het adres meteen per e-mail."],
  ["03", "Alles staat klaar", "Kom op het afgesproken moment naar unit 11. Wij geven korte uitleg en helpen bij het inladen."],
  ["04", "Breng op afspraak terug", "U brengt de toestellen aan het einde van de gekozen huurperiode terug naar hetzelfde magazijn."],
];

/*
  De vragen die aan de telefoon terugkomen bij een afhaling, en nergens anders
  op deze pagina beantwoord worden. Ze staan hier langer dan één regel met
  opzet: wie zelf komt halen heeft geen technieker die het ter plaatse uitlegt,
  dus wat bij een levering mondeling gaat, moet hier staan.

  Alle bedragen en periodes komen uit dezelfde bron als de reservatiepagina
  (`src/data/afhalen.ts`, `src/lib/afhalen.ts`) -- typ er geen over.
*/
const faq = [
  [
    "Kan ik zonder reservatie langskomen?",
    "Nee. Afhalen en terugbrengen gebeurt enkel op een afgesproken moment. Wij houden geen balie open: de toestellen staan in het magazijn en worden per reservatie klaargezet, gecontroleerd en geladen. Komt u onaangekondigd, dan is de kans groot dat het toestel dat u zoekt net op een werf staat. Met een reservatie weet u vooraf dat het er is en staat het klaar wanneer u aankomt.",
  ],
  [
    "Wanneer kan ik afhalen en terugbrengen?",
    "Op weekdagen, in een van de tijdsloten 07:30–08:00, 08:00–10:00, 10:00–12:00, 13:00–15:00 of 15:00–17:00. U kiest het slot tijdens de online reservatie en u krijgt het samen met het adres in uw bevestiging. Terugbrengen gebeurt op dezelfde manier: op het einde van de gekozen huurperiode, binnen een van diezelfde tijdsloten. In het weekend is het magazijn gesloten.",
  ],
  [
    "Hoe lang kan ik een toestel afhalen, en kan ik verlengen?",
    "U kiest bij de reservatie 3 dagen, 1 week, 2 weken, 1 maand of 2 maanden. Is de ruimte op het einde nog niet droog, dan verlengt u online, u betaalt dan alleen de extra dagen aan hetzelfde dagtarief. Doe dat liefst vóór de einddatum: dan blijft het toestel voor u gereserveerd in plaats van naar de volgende klant te gaan.",
  ],
  [
    "Moet ik een waarborg betalen?",
    "Nee. Wij vragen geen waarborg, ook niet bij afhalen. U betaalt de huurprijs voor de gereserveerde periode, meer niet. Wat u wel ondertekent is de verplichting om het materieel schoon en in dezelfde staat terug te brengen; schade of vervuiling wordt achteraf doorgerekend, maar er staat vooraf geen bedrag geblokkeerd.",
  ],
  [
    "Wat betaal ik op het moment van reserveren?",
    "Twee mogelijkheden. Betaalt u de volledige huur meteen online, dan krijgt u 5% korting op de huurprijs. Of u betaalt een vaste orderbevestiging van € 50 en het saldo wanneer u de toestellen komt halen, dan rekent u ter plaatse af en vertrekt u met de factuur. Het bedrag staat in beide gevallen op het scherm vóór u bevestigt.",
  ],
  [
    "Past een bouwdroger in mijn auto?",
    "Een condensbouwdroger weegt 25 tot 40 kg en is ongeveer zo groot als een stevige koffer op wielen. In een break of een ruime kofferbak past hij; in een kleine stadswagen meestal niet, zeker niet samen met een ventilator. Voorzie een aanhangwagen zodra u twee of meer toestellen meeneemt, en kom bij voorkeur met twee personen, onze medewerker helpt bij het inladen, maar thuis staat u er alleen voor.",
  ],
  [
    "Mag ik een bouwdroger liggend vervoeren?",
    "Liever niet. In een condensdroger zit een compressor met koelmiddel en olie; ligt het toestel plat, dan kan die olie uit de compressor lopen. Vervoer hem dus rechtop en zet hem vast zodat hij niet omvalt. Is het toch liggend gegaan, laat het toestel dan minstens 24 uur rechtop staan vóór u het inschakelt, anders riskeert u de compressor.",
  ],
  [
    "Welke stroom heb ik nodig?",
    "De condensbouwdrogers en de ventilatoren draaien op een gewoon stopcontact van 230 V: 0,75 tot 1,4 kW voor een droger, ongeveer 0,2 kW voor een ventilator. De elektrische bouwkachels van 20 en 30 kW zijn iets anders, die vragen een krachtstroomaansluiting van 400 V. Controleer dat vóór u reserveert; zonder 400 V op de werf kunt u de kachel niet gebruiken.",
  ],
  [
    "Moet ik het waterreservoir zelf leegmaken?",
    "Ja. Bij een afhaling gaat het toestel mee zoals het is, met zijn reservoir, reken op 2 à 3 keer per dag legen, afhankelijk van hoe nat de ruimte is. Loopt het reservoir vol, dan schakelt de droger zichzelf uit en staat hij stil tot u hem leegt. Wilt u een continue condensafvoer naar een afvoer, douche of vloerput, dan hoort dat bij een geleverd pakket: de technieker sluit de pomp dan ter plaatse aan.",
  ],
  [
    "Krijg ik uitleg bij het afhalen?",
    "Ja. Aan de poort overlopen we kort waar u het toestel best zet, hoe u de streefvochtigheid instelt, wanneer u het reservoir leegt en waar u op let bij ramen en deuren. Dat duurt enkele minuten en volstaat voor een gewone droging. Wat er niet bij zit is de berekening: hoeveel toestellen uw ruimte nodig heeft en hoe lang, dat bepaalt u zelf met de calculator of u kiest levering met installatie.",
  ],
  [
    "Geldt de Drooggarantie ook als ik zelf afhaal?",
    "Nee. De Drooggarantie geldt uitsluitend voor droogpakketten die via de calculator berekend en met levering en installatie geboekt zijn. Ze steunt op een vochtmeting bij de start en bij de oplevering door onze technieker, en die meting gebeurt niet bij een afhaling. Huurt u los af te halen toestellen, dan bepaalt u zelf de opstelling en de duur.",
  ],
  [
    "Hoeveel toestellen kan ik in één keer reserveren?",
    "Tot acht per toestelsoort, en nooit meer dan er in de vloot staan, van de adsorptiedroger hebben we er bijvoorbeeld één. De reservatiepagina toont per toestel wat er op uw datum vrij is. Heeft u meer nodig voor een grote werf, bel ons dan: dan kijken we of het logistiek haalbaar is of dat levering de betere oplossing is.",
  ],
  [
    "In welke staat moet ik de toestellen terugbrengen?",
    "Schoon, compleet en in dezelfde staat als bij ontvangst, normale slijtage uitgezonderd, inclusief de slangen, kabels en accessoires die u meekreeg. Een droger die onder het chapestof zit mag u gewoon afvegen; wij controleren en onderhouden hem daarna zelf. Treffen we vervuiling of schade aan, dan laten we dat schriftelijk weten vóór er iets wordt doorgerekend.",
  ],
  [
    "Wat als ik het toestel niet op tijd kan terugbrengen?",
    "Bel of mail ons zodra u het weet. In de meeste gevallen verlengen we gewoon en betaalt u de extra dagen aan hetzelfde tarief. Het probleem is niet de dag zelf maar de planning: staat het toestel al ingepland voor een volgende klant, dan moeten wij dat omgooien. Een telefoontje op voorhand lost dat op; onaangekondigd te laat terugbrengen niet.",
  ],
  [
    "Is afhalen goedkoper dan laten leveren?",
    "Ja, u betaalt geen transport en geen installatie. Daar staat tegenover dat u zelf tilt, zelf de opstelling bepaalt, zelf het reservoir leegt en zelf terugrijdt, en dat er geen vochtmeting en geen Drooggarantie bij zitten. Voor één droger in een garage of kelder is afhalen vaak de logische keuze; voor een volledige chape of een waterschadedossier met verzekering is levering dat meestal.",
  ],
];

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
  const { status, error, mailto, sending, handleSubmit } = useAanvraag({
    source: "contact",
    messageField: "bericht",
    mailSubject: "Afhaling",
  });

  return (
  <div className="ct-page af-page">
    <PageMeta
      {...SEO.afhalen}
      jsonLd={[
        organizationSchema(),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Zelf afhalen in Aartselaar", path: "/afhalen" },
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
            <span className="kick">Zelf afhalen in Aartselaar</span>
            <h1>Online reserveren. Klaarzetten. Inladen en vertrekken.</h1>
            <p>Huur losse bouwdrogers, ventilatoren en elektrische kachels aan afhaaltarief. U kiest vooraf uw toestel en tijdslot; wij zetten alles klaar aan onze poort langs de A12.</p>

            <div className="cta">
              <a className="btn btn-white" href="/verhuur/afhalen">Bekijk toestellen en reserveer <Arrow /></a>
              <a className="btn btn-ghost" href="#zo-werkt-het">Zo werkt afhalen</a>
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
          <a className="hero-map" href="#route" aria-label="Bekijk de route naar het afhaalpunt">
            <AfhaalRouteKaart />
            <div className="hm-cap"><i /> Boomsesteenweg 12, Unit 11 · langs de A12</div>
          </a>
        </div>
      </section>
    </div>

    <section className="af-steps" id="zo-werkt-het">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Van reservatie tot retour</span>
          <h2 className="sec">Afhalen zonder wachten, in vier duidelijke stappen.</h2>
          <p className="lede">De reservatie gebeurt volledig online. Daardoor ligt het juiste toestel klaar wanneer u aankomt en weet u vooraf wat u betaalt.</p>
        </div>
        <div className="af-step-grid">
          {stappen.map(([nr, titel, tekst]) => (
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
            <span className="kick">Goed voorbereid vertrekken</span>
            <h2 className="sec">Een droger weegt 25 tot 40 kg. Til hem niet alleen.</h2>
            <p className="lede">
              Zeker niet op een trap. Met de juiste wagen, een tweede paar handen en een toestel dat
              rechtop blijft staan, vertrekt u veilig en komt het heel aan.
            </p>

            <ul className="aft-rules">
              <li>
                <RechtopPictogram />
                <div>
                  <b>Altijd rechtop vervoeren</b>
                  <p>
                    Leg een condensdroger niet plat: koelmiddel kan uit de compressor lopen. Toch
                    liggend vervoerd? Laat hem vóór gebruik minstens 24 uur rechtop staan.
                  </p>
                </div>
              </li>
              <li>
                <LaadruimtePictogram />
                <div>
                  <b>Kom met voldoende laadruimte</b>
                  <p>
                    Een ruime koffer of aanhangwagen is aanbevolen. Kom bij voorkeur met twee; onze
                    medewerker helpt u aan het magazijn met inladen.
                  </p>
                </div>
              </li>
              <li>
                <TijdslotPictogram />
                <div>
                  <b>Uw tijdslot voorkomt wachttijd</b>
                  <p>
                    Afhalen en terugbrengen kan op weekdagen van 08:00 tot 17:00, uitsluitend op het
                    moment uit uw bevestiging. Daardoor staat uw toestel klaar als u aankomt.
                  </p>
                </div>
              </li>
            </ul>

            <div className="aft-cta">
              <b>Liever niets tillen of instellen?</b>
              <a className="btn" href="/levering">
                Bekijk levering &amp; installatie <Arrow />
              </a>
            </div>
          </div>

          <img
            className="aft-man"
            src="/vernast/oudere-man.webp"
            alt="Man met rugpijn na het tillen van een zwaar toestel"
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
          <span className="kick">Wat kunt u afhalen?</span>
          <h2 className="sec">Losse toestellen voor elke droogopstelling.</h2>
          <p className="lede">U kiest zelf de combinatie. Twijfelt u over capaciteit of aantallen, gebruik dan de calculator of kies levering met installatie.</p>
        </div>
        <div className="af-range-grid">
          <article><img src="/vernast/eco-boost.webp" alt="Vernast Boost condensbouwdroger, klaar voor afhaling" loading="lazy" /><div><span>Bouwdrogers</span><h3>50 tot 110 liter per dag</h3><p>Voor chape, pleisterwerk, renovatie en de meeste waterschade.</p></div></article>
          <article><img src="/vernast/eco-revolution.webp" alt="Vernast Revolution adsorptiedroger met slangaansluitingen, klaar voor afhaling" loading="lazy" /><div><span>Koude ruimtes</span><h3>Adsorptiedroger</h3><p>Voor lage temperaturen of gerichte droging via luchtslangen.</p></div></article>
          <article><img src="/vernast/vent-axiaal.webp" alt="Vernast Highflow axiaalventilator, klaar voor afhaling" loading="lazy" /><div><span>Luchtcirculatie</span><h3>Axiale en radiale ventilatoren</h3><p>Verspreiden droge lucht langs vloeren, muren en moeilijk bereikbare zones.</p></div></article>
          <article><img src="/vernast/kachel-30.webp" alt="Vernast Heatpower 30 elektrische bouwkachel, klaar voor afhaling" loading="lazy" /><div><span>Extra warmte</span><h3>Elektrische bouwkachels</h3><p>Voor koude werven waar een condensdroger anders rendement verliest.</p></div></article>
        </div>
        <div className="af-center"><a className="btn" href="/verhuur/afhalen">Bekijk beschikbaarheid en afhaalprijzen <Arrow /></a></div>
      </div>
    </section>

    <section className="af-location" id="route">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Ons afhaalpunt</span>
          <h2 className="sec">Vlak langs de A12, zonder stadsverkeer.</h2>
          <p className="lede"><b>Vernast Bouwdrogers</b><br />Boomsesteenweg 12, Unit 11 · 2630 Aartselaar. Rijd na Carglass het KMO-park in en volg de units tot nummer 11.</p>
        </div>
        <div className="af-map-card"><AfhaalRouteKaart /></div>
        <div className="rt-grid af-route-grid">
          {[
            ["1", "/vernast/route-1.webp", "Neem de inrit", "Vlak naast Carglass, met Tesla als herkenningspunt op de hoek."],
            ["2", "/vernast/route-2.webp", "Rijd rechtdoor", "Volg de weg het KMO-park in richting het zwarte Arthrex-gebouw."],
            ["3", "/vernast/route-3.webp", "Houd rechts aan", "Volg de nummering langs de laadkades tot de units 11–12."],
            ["4", "/vernast/route-4.webp", "Parkeer bij unit 11", "Meld u aan bij onze poort; uw reservatie staat daar klaar."],
          ].map(([nr, foto, titel, tekst]) => (
            <article className="rt" key={nr}><div className="im"><span className="n">{nr}</span><img src={foto} alt={`${titel}: route naar het afhaalpunt`} loading="lazy" /></div><p><b>{titel}.</b> {tekst}</p></article>
          ))}
        </div>
        <div className="af-location-actions">
          <a className="btn" href={MAPS_URL} target="_blank" rel="noopener noreferrer">Open in Google Maps <Arrow /></a>
          <a className="af-text-link" href="/contact">Bekijk alle contactgegevens</a>
        </div>
      </div>
    </section>

    <section className="af-faq">
      <div className="wrap af-faq-layout">
        <div className="sec-head">
          <span className="kick">Veelgestelde vragen</span>
          <h2 className="sec">Praktisch vóór u vertrekt.</h2>
          {/*
            De linkerkolom droeg alleen een kop en één regel, waardoor er naast
            de vier vragen een halve schermhoogte leeg bleef. De homepage lost
            dat op met een hulpkaart onder de kop; dezelfde opbouw hier houdt de
            twee pagina's herkenbaar en geeft de kolom een bodem.
          */}
          <div className="af-faq-help">
            <h3>Staat uw vraag er niet bij?</h3>
            <p>
              Onze medewerkers aan het afhaalpunt kennen de toestellen en uw reservatie. Bellen gaat
              het snelst, op weekdagen tussen 08:00 en 17:00.
            </p>
            <div className="afh-btns">
              <a className="afh-call" href="tel:+3236899065">
                Bel 03 689 90 65
              </a>
              <a className="afh-mail" href="mailto:info@vernast-bouwdrogers.be">
                Mail uw vraag
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
          <span className="kick">Uw afhaling aanvragen</span>
          <h2 className="sec">Vertel ons wanneer u langskomt.</h2>
          <p className="lede">
            Laat uw gewenste afhaaldatum en de toestellen weten, dan bevestigen wij uw tijdslot. U
            krijgt binnen één werkdag antwoord. Liever meteen zelf boeken?{" "}
            <a href="/verhuur/afhalen">Bekijk de beschikbaarheid online</a>.
          </p>
        </div>

        <form className="fshell" onSubmit={handleSubmit}>
          {status === "done" ? (
            <AanvraagDone text="Bedankt! Wij bevestigen uw afhaalmoment binnen één werkdag." />
          ) : (
            <div>
              <div className="frow">
                <div className="fld">
                  <label htmlFor="afVoor">Voornaam</label>
                  <input type="text" id="afVoor" name="voornaam" placeholder="Voornaam" required />
                </div>
                <div className="fld">
                  <label htmlFor="afNaam">Naam</label>
                  <input type="text" id="afNaam" name="naam" placeholder="Achternaam" required />
                </div>
              </div>
              <div className="frow">
                <div className="fld">
                  <label htmlFor="afMail">E-mail</label>
                  <input type="email" id="afMail" name="email" placeholder="naam@voorbeeld.be" required />
                </div>
                <div className="fld">
                  <label htmlFor="afTel">Telefoon</label>
                  <input type="tel" id="afTel" name="telefoon" placeholder="04.." />
                </div>
              </div>
              <div className="frow one">
                <div className="fld">
                  <label htmlFor="afOnd">Waarover gaat het?</label>
                  <select id="afOnd" name="onderwerp" defaultValue="Afhaling reserveren">
                    <option>Afhaling reserveren</option>
                    <option>Vraag over een toestel of capaciteit</option>
                    <option>Afhaalmoment verzetten</option>
                    <option>Terugbrengen of verlengen</option>
                  </select>
                </div>
              </div>
              <div className="frow one">
                <div className="fld">
                  <label htmlFor="afMsg">Gewenste datum en toestellen</label>
                  <textarea
                    id="afMsg"
                    name="bericht"
                    rows={5}
                    placeholder="Bv. donderdag 14 november in de voormiddag, 1 bouwdroger en 1 ventilator, voor een kelder van 60 m²."
                    required
                  />
                </div>
              </div>
              <div className="fsend">
                <small>Wij gebruiken uw gegevens enkel om uw afhaling te bevestigen.</small>
                <button className="btn aanv-btn" type="submit" disabled={sending}>
                  {sending ? "Versturen…" : "Verstuur aanvraag"} <Arrow />
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

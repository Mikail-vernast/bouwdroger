import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import KlimaatMeter from "@/components/hoe-drogen/KlimaatMeter";
import VochtGrafiek from "@/components/hoe-drogen/VochtGrafiek";
import InBeeld from "@/components/hoe-drogen/InBeeld";
import ContactBlok from "@/components/content/ContactBlok";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import { SEO } from "@/data/seo";
import { EXTRAS, PUMP } from "@/data/verhuur";
import { euro } from "@/lib/verhuur";
import "@/styles/hoe-drogen-werkt.css";
import "@/styles/hoe-drogen-werkt-fixes.css";
import "@/styles/hoe-drogen-animaties.css";
import { toestelPad } from "@/data/verhuur";

/**
 * Hoe drogen werkt — 1:1 transcription of the Claude Design handoff
 * (Hoe Drogen Werkt.html). The design's own header/footer are replaced by
 * the shared <V3Header>/<V3Footer>; everything else is the design's markup,
 * scoped under `.hdw-page` (see src/styles/hoe-drogen-werkt.css). Assets
 * resolve from /vernast/*.webp and the reveal-on-scroll animation is
 * neutralised in CSS so the page needs no JavaScript.
 */

/* Het bedrag van het vochtrapport komt uit de gepubliceerde tarieven, niet uit
   de tekst: hier stond "(€ 49)" overgetypt, en dat loopt bij de eerste
   prijswijziging in het portaal uit de pas met de calculator. */
const RAPPORT = EXTRAS.find((x) => x.k === "rapport");

const HoeDrogenWerktPage = () => (
  <div className="hdw-page">
    <PageMeta
      {...SEO.hoeDrogenWerkt}
      path="/hoe-drogen-werkt"
      jsonLd={[
        organizationSchema(),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Hoe drogen werkt", path: "/hoe-drogen-werkt" },
        ]),
      ]}
    />

    <V3Header lightAfter={420} />

    {/* ================= HERO ================= */}
    <div className="redtop">
      <section className="hero" data-screen-label="Hoe drogen hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="kick rv">Alles over drogen · de techniek</span>
            <h1 className="rv">Niet het toestel droogt uw woning, maar het klimaat dat het maakt.</h1>
            <p className="rv d1">Tijdens bouwen en renoveren komen honderden liters water in uw woning terecht: in pleister, chape, mortel en beton. Professionele bouwdroging is niet "een toestel aanzetten", maar de combinatie van temperatuur, luchtvochtigheid en luchtbeweging zo sturen dat dat vocht gecontroleerd uit de constructie verdwijnt.</p>

            <div className="hcta rv d3">
              <Link className="btn btn-white" to="/verhuur/calculator">Bereken uw droogpakket<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></Link>
              <Link className="btn btn-ghost" to="/waarom-bouwdroging">Waarom bouwdroging?</Link>
            </div>
          </div>
          <div className="hero-vis rv d2">
            <img src="/vernast/team-tools.webp" alt="De Vernast vakmannen" width={1400} height={859} decoding="async" style={{ width: "min(100%,560px)" }} />
            <div className="fbadge" style={{ top: "-34px", left: "4%" }}><span className="ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg></span><div>Eco-condensdrogers<small>Berekend op uw volume</small></div></div>
          </div>
        </div>
      </section>
    </div>


    {/* ================= HET PRINCIPE ================= */}
    <section className="sw">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick rv">Het principe</span>
          <h2 className="sec rv">Uw woning wordt tijdelijk een gecontroleerde klimaatkamer.</h2>
          <p className="lede rv d1">Een serre verandert het klimaat binnenin ten opzichte van buiten. Bij bouwdroging doen we iets vergelijkbaars: we creëren tijdelijk een binnenklimaat waarin vocht makkelijker uit <Link to="/pleisterwerk-drogen">pleister</Link>, <Link to="/chape-drogen">chape</Link> en muren naar de omgevingslucht beweegt, en daarna ook echt uit die lucht wordt verwijderd. Drie factoren werken daarvoor samen; geen enkele werkt optimaal op zichzelf.</p>
        </div>
        <div className="g3">
          <div className="kaart rv">
            <KlimaatMeter variant="temperatuur" volgorde={0} />
            <h3>1. Temperatuur</h3>
            <p>Voldoende warmte verhoogt het verdampingspotentieel en ondersteunt het vochttransport uit het materiaal. In koude ruimtes zetten we daarom een <Link to={toestelPad("teddh30")}>bouwkachel</Link> bij.</p>
          </div>
          <div className="kaart rv d1">
            <KlimaatMeter variant="vocht" volgorde={1} />
            <h3>2. Relatieve luchtvochtigheid</h3>
            <p>Door waterdamp actief uit de lucht te verwijderen, ontstaat telkens opnieuw ruimte voor vocht dat uit de materialen verdampt. Dat is het werk van de <Link to="/machines">bouwdroger</Link>.</p>
          </div>
          <div className="kaart rv d2">
            <KlimaatMeter variant="lucht" volgorde={2} />
            <h3>3. Luchtbeweging</h3>
            <p>Droge lucht moet álle vochtige oppervlakken bereiken; stilstaande lucht rond een wand of vloer remt het proces. Daarom horen bij veel pakketten <Link to={toestelPad("ttv4500")}>ventilatoren</Link>.</p>
          </div>
        </div>
        <div className="note rv"><b>Daarom berekenen wij eerst, en plaatsen we pas daarna.</b> De <Link to="/verhuur/calculator">droogcalculator</Link> vertaalt uw oppervlakte, plafondhoogte en situatie naar de juiste combinatie van toestellen, het hart van elk <Link to="/verhuur/pakket">Vernast-droogpakket</Link>.</div>
      </div>
    </section>

    {/* ================= MISVERSTAND NR. 1 ================= */}
    <section className="sr">
      <div className="wrap splitv">
        <div>
          <span className="kick rv">Misverstand nr. 1</span>
          <h2 className="sec rv">Waarom "de verwarming hoog zetten" geen bouwdroging is.</h2>
          <p className="lede rv d1">Warme lucht heeft bij dezelfde hoeveelheid waterdamp een veel lagere <b style={{ color: "#fff" }}>relatieve</b> luchtvochtigheid dan koude lucht. Dat klinkt alsof de lucht veel droger is geworden, maar er is nog geen gram water uit het gebouw verwijderd. Het water zit nog steeds in de lucht en in de bouwmaterialen.</p>
          <p className="lede rv d1" style={{ marginTop: "12px" }}>Verwarming kan het verdampingsproces ondersteunen, maar daarna moet de vrijgekomen waterdamp actief verwijderd worden door ontvochtiging. Ook de ramen openzetten is geen garantie: natuurlijke ventilatie hangt volledig af van het buitenklimaat en kan op een warme, vochtige zomerdag zelfs vocht bínnenbrengen. Professionele bouwdroging maakt het proces <b style={{ color: "#fff" }}>controleerbaar in plaats van weersafhankelijk</b>.</p>
        </div>
        <div className="rvh2">
          <div className="rvbox rv" style={{ "--w": "80%" } as React.CSSProperties}>
            <div className="rvkop">
              <span className="rvb-ic ijs" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m10 20-1.25-2.5L6 18" /><path d="M10 4 8.75 6.5 6 6" /><path d="m14 20 1.25-2.5L18 18" /><path d="m14 4 1.25 2.5L18 6" /><path d="m17 21-3-6h-4" /><path d="m17 3-3 6 1.5 3" /><path d="M2 12h6.5L10 9" /><path d="m20 10-1.5 2 1.5 2" /><path d="M22 12h-6.5L14 15" /><path d="m4 10 1.5 2L4 14" /><path d="m7 21 3-6-1.5-3" /><path d="m7 3 3 6h4" /></svg>
              </span>
              <div className="t">Koude ruimte</div>
            </div>
            <div className="big">10 °C · 80<small>% RV</small></div>
            <div className="rvmeet">
              <div className="bar"><b></b></div>
            </div>
            <div className="rvmeet rvwater">
              <span className="rvlab"><b>6,2 g</b> water per kg lucht</span>
              <div className="water" aria-hidden="true"><b></b><i></i><i></i><i></i><i></i></div>
            </div>
            <div className="sub">vochtige binnenlucht</div>
          </div>
          <div className="rvbox rv d1" style={{ "--w": "42%" } as React.CSSProperties}>
            <div className="rvkop">
              <span className="rvb-ic vuur" aria-hidden="true">
              <svg className="vlam" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" /></svg>
              <svg className="kern" width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c.6 3 2.4 4.3 3.6 6.1C16.6 10.6 17 12 17 13.5a5 5 0 0 1-10 0c0-1.3.4-2.4 1.1-3.4.2 1 .8 1.8 1.6 2.2-.3-2.6.6-5.4 2.3-9.3z" /></svg>
              </span>
              <div className="t">Zelfde lucht, verwarmd</div>
            </div>
            <div className="big">20 °C · 42<small>% RV</small></div>
            <div className="rvmeet">
              <div className="bar"><b></b></div>
            </div>
            <div className="rvmeet rvwater">
              <span className="rvlab"><b>6,2 g</b> water per kg lucht</span>
              <div className="water" aria-hidden="true"><b></b><i></i><i></i><i></i><i></i></div>
            </div>
            <div className="sub"><b style={{ color: "var(--red)" }}>exact evenveel water</b> in de lucht, enkel de verhouding veranderde</div>
          </div>
        </div>
      </div>
    </section>

    {/* ================= EVEN TECHNISCH ================= */}
    <section className="sw">
      <div className="wrap rvsplit">
        <div>
          <span className="kick rv">Even technisch</span>
          <h2 className="sec rv">Wat betekent relatieve luchtvochtigheid?</h2>
          <p className="lede rv d1" style={{ marginTop: "16px" }}>Relatieve luchtvochtigheid (RV of RH) vertelt hoe dicht de lucht bij verzadiging zit bij een bepaalde temperatuur. Bij 100% RV is de lucht verzadigd met waterdamp; hoe lager de RV, hoe meer vocht de lucht nog kan opnemen.</p>
          <p className="lede rv d1" style={{ marginTop: "12px" }}>Voor bouwdroging is dat verschil cruciaal. Veel bouwmaterialen zijn poreus en hygroscopisch: water zit niet alleen aan het oppervlak, maar ook diep in poriën en capillairen. Verlagen we de vochttoestand van de omgevingslucht, dan ontstaat een <b>vochtgradiënt</b> tussen het natte materiaal en zijn omgeving, en beweegt het water geleidelijk naar buiten, waar het kan verdampen. Droging is daarbij nooit één proces:</p>
          <div className="rvchips rv d2">
            <span>Capillaire stroming</span><span>Verdamping</span><span>Damptransport</span><span>Diffusie</span>
          </div>
        </div>
        <div className="rvimg rv d1"><VochtGrafiek /></div>
      </div>
    </section>

    {/* ================= TWEE SOORTEN DROGERS =================
        Een rode sectie tussen de uitleg over RV en de condenscyclus. Ze staat
        er om twee redenen. Het ritme: de pagina liep wit → gebroken wit → rood,
        en twee lichte secties na elkaar lezen als één lange sectie. En de
        inhoud: de volgende sectie gaat over de kringloop van een cóndensdroger,
        zonder dat ergens staat dat er ook een ander soort bestaat. Niet de drie
        klimaatfactoren herhalen — die staan al in "Het principe" bovenaan. */}
    <section className="sr">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick rv">Twee soorten drogers</span>
          <h2 className="sec rv">De temperatuur op uw werf bepaalt welk toestel het water pakt.</h2>
          <p className="lede rv d1">Beide halen water uit de lucht, maar niet op dezelfde manier, en dat verschil wordt zichtbaar zodra het kwik zakt. Daarom vraagt de <Link to="/verhuur/calculator">droogcalculator</Link> ook hoe koud uw ruimte staat.</p>
        </div>
        <div className="fase2">
          <div className="fs f1 rv">
            <span className="fl">Condensdroger · 15 – 25 °C</span>
            <h3>De standaard op een woningwerf.</h3>
            <p>Hij koelt de binnenlucht onder haar dauwpunt en vangt de waterdamp op als condenswater. Boven 15 °C is dat de snelste en zuinigste manier om bouwvocht uit een woning te halen, en het is wat er in bijna elk pakket staat. <b>Hoe die kringloop precies loopt, ziet u in de volgende sectie.</b></p>
          </div>
          <div className="fs rv d1">
            <span className="fl">Adsorptiedroger · ook onder 10 °C</span>
            <h3>Voor koude ruimtes en kelders.</h3>
            <p>Hij bindt de waterdamp aan een droogmiddel in plaats van ze te koelen, en werkt daardoor door bij temperaturen waar condensvorming nauwelijks nog op gang komt. Op een onverwarmde winterwerf of in een kelder haalt hij water waar een condensdroger stilvalt. Het volledige verschil staat in <Link to="/gids/condensdroger-of-adsorptiedroger">condensdroger of adsorptiedroger</Link>.</p>
          </div>
        </div>
      </div>
    </section>

    {/* ================= DE CYCLUS ================= */}
    <section className="sw">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick rv">De cyclus</span>
          <h2 className="sec rv">Hoe een condensbouwdroger water uit uw woning haalt.</h2>
          <p className="lede rv d1">Binnenin stroomt de vochtige lucht langs een koud oppervlak, koelt onder haar dauwpunt en geeft haar waterdamp af als vloeibaar water. De lucht verlaat de machine iets warmer én droger, en de kringloop begint opnieuw: <b>materiaal → lucht → bouwdroger → condenswater → afvoer</b>.</p>
        </div>
        <InBeeld className="cyc">
          <div className="cy rv" data-stap="1"><i>01</i><div className="ci2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /></svg><span className="cy-nat" /><span className="cy-nat" /><span className="cy-nat" /></div><h3>Vocht in het materiaal</h3><p>Water migreert via poriën en capillairen naar het oppervlak en verdampt naar de lucht.</p></div>
          <div className="cy rv d1" data-stap="2"><i>02</i><div className="ci2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9.6 4.6A2 2 0 1 1 11 8H2" /><path d="M12.6 19.4A2 2 0 1 0 14 16H2" /></svg><span className="cy-zuig" /><span className="cy-zuig" /><span className="cy-zuig" /></div><h3>Aanzuigen</h3><p>De droger zuigt de vochtige binnenlucht met een krachtige ventilator door het toestel.</p></div>
          <div className="cy rv d2" data-stap="3" style={{ position: "relative" }}><i>03</i><div className="ci2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" /></svg><span className="drop" style={{ left: "14px", top: "44px" }}><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" /></svg></span><span className="drop" style={{ left: "26px", top: "44px", animationDelay: "1.2s" }}><svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" /></svg></span></div><h3>Condenseren</h3><p>De lucht koelt langs een koud oppervlak onder haar dauwpunt; waterdamp wordt vloeibaar water.</p></div>
          <div className="cy rv d3" data-stap="4"><i>04</i><div className="ci2"><span className="cy-peil" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v8" /><path d="M5 14h14v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" /></svg></div><h3>Afvoeren</h3><p>Het condenswater gaat naar een reservoir of wordt met een condenspomp rechtstreeks weggepompt.</p></div>
          <div className="cy rv d3" data-stap="5"><i>05</i><div className="ci2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9" /><path d="M21 3v6h-6" /></svg></div><h3>Opnieuw de ruimte in</h3><p>Drogere, licht opgewarmde lucht wordt verdeeld en neemt opnieuw vocht op uit de materialen.</p></div>
        </InBeeld>
        <div className="note rv"><b>Waar gaat al dat water naartoe?</b> Bij eenvoudige toestellen in een reservoir dat u regelmatig leegmaakt. Bij langdurige professionele droging verkiezen wij continue condensafvoer: een <Link to="/verhuur/toebehoren/condenspomp">condenspomp</Link> ({euro(PUMP.price)} per bouwdroger per dag) pompt het water dag en nacht rechtstreeks naar een afvoer, zodat de cyclus onafgebroken doorloopt, ook 's nachts en in het weekend. U voegt hem toe tijdens het <Link to="/verhuur/calculator">berekenen van uw pakket</Link>.</div>
      </div>
    </section>

    {/* ================= MISVERSTAND NR. 2 ================= */}
    <section className="sr">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick rv">Misverstand nr. 2</span>
          <h2 className="sec rv">Een muur kan droog lijken en toch veel water bevatten.</h2>
          <p className="lede rv d1">Een bouwmateriaal droogt niet overal even snel. Dit verklaart waarom een bouwdroger in het begin soms grote hoeveelheden water produceert en later aanzienlijk minder, zonder dat de machine slechter werkt.</p>
        </div>
        <div className="fase2">
          <div className="fs f1 rv" style={{ "--w": "78%" } as React.CSSProperties}>
            <span className="fl">Fase 1 · snel</span>
            <h3>Het oppervlak droogt.</h3>
            <p>Het makkelijk bereikbare vocht aan en vlak onder het oppervlak verdampt eerst. Na enkele dagen kan een wand al veel droger ogen, en produceert de droger veel water.</p>
            <div className="bar"><b></b></div>
            <span className="bl">Hoge wateropbrengst per dag</span>
          </div>
          <div className="fs rv d1" style={{ "--w": "26%" } as React.CSSProperties}>
            <span className="fl">Fase 2 · traag</span>
            <h3>De kern moet nog.</h3>
            <p>Water dat dieper zit moet eerst via de poriën naar het oppervlak migreren vóór het kan verdampen. Het oppervlak oogt droog, maar intern zit nog aanzienlijk vocht.</p>
            <div className="bar"><b></b></div>
            <span className="bl">Vochttransport in het materiaal is de beperkende factor</span>
          </div>
        </div>
        <div className="manband lite rv d2" style={{ marginTop: "20px" }}>
          <div className="mb-t">
            <span className="mbk">Meten is weten</span>
            <h3>Daarom is meten belangrijker dan kijken.</h3>
            <p>Een witte pleisterlaag kan droog ogen, een chape kan stevig aanvoelen, dat zegt niets over wat er dieper in het materiaal gebeurt. Visueel beoordelen is onbetrouwbaar. Het einddoel is nooit "de droger heeft zeven dagen gedraaid", maar: <b>het materiaal is klaar voor de volgende bouwfase</b>. Daarom zit bij elk pakket een vochtmeting voor én na, en kiest u optioneel een <Link to="/verhuur/calculator">officieel vochtrapport{RAPPORT ? ` (${euro(RAPPORT.price)})` : ""}</Link> voor uw verzekering of huisbaas.</p>
          </div>
          <img className="mb-man" src="/vernast/man-vochtmeter.webp" alt="Vernast specialist meet het vochtgehalte van een muur" width={1400} height={933} loading="lazy" decoding="async" style={{ width: "min(44%,440px)" }} />
        </div>
      </div>
    </section>

    {/* ================= NIET ELK MATERIAAL ================= */}
    <section className="sw">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick rv">Niet elk materiaal is gelijk</span>
          <h2 className="sec rv">Pleister, chape en beton drogen niet op dezelfde manier.</h2>
          <p className="lede rv d1">Niet ieder bouwmateriaal bevat hetzelfde type vocht. Een professionele droogstrategie luidt daarom nooit "machine aan zodra het materiaal geplaatst is", materiaal, leeftijd, technische voorschriften en de gewenste afwerking bepalen mee de aanpak. De <Link to="/verhuur/calculator">Calculator</Link> vraagt daarom ook wát u droogt.</p>
        </div>
        <div className="g3">
          <div className="kaart materiaalkaart rv">
            <img className="materiaalfoto" src="/vernast/droogproces-nat-pleister.webp" alt="Vers nat gipspleister met zichtbare donkere vochtzones" width={1672} height={941} loading="lazy" decoding="async" />
            <div className="materiaaltekst">
              <h3>Gipspleister</h3>
              {/* Naar de pagina over pleisterwerk, niet naar de calculator: wie
                  op "gipspleister" klikt wil weten hoe gips droogt, en belandde
                  in een rekenformulier dat die vraag niet beantwoordt. */}
              <p>Verliest zijn overtollige water vooral door verdamping. Laagdikte, temperatuur, luchtvochtigheid, ventilatie en de zuiging van de ondergrond bepalen de droogtijd van <Link to="/pleisterwerk-drogen">gipspleister en pleisterwerk</Link>.</p>
            </div>
          </div>
          <div className="kaart materiaalkaart rv d1">
            <img className="materiaalfoto" src="/vernast/droogproces-vochtige-chape.webp" alt="Vochtige chape tijdens de noodzakelijke uithardingsfase" width={1672} height={941} loading="lazy" decoding="async" />
            <div className="materiaaltekst">
              <h3>Chape &amp; beton</h3>
              <p>Cement heeft water nodig voor de hydratatiereactie waarmee het uithardt. Te vroeg agressief drogen verstoort dat, bij <Link to="/chape-drogen">chape drogen</Link> starten we pas ná de noodzakelijke uithardingsfase.</p>
            </div>
          </div>
          <div className="kaart materiaalkaart rv d2">
            <img className="materiaalfoto" src="/vernast/droogproces-te-snel-droog.webp" alt="Droge chape met krimpscheuren door een te agressief droogproces" width={1672} height={941} loading="lazy" decoding="async" />
            <div className="materiaaltekst">
              <h3>Te agressief drogen</h3>
              <p>Grote vochtgradiënten tussen oppervlak en kern kunnen krimp en scheurvorming bevorderen. Daarom sturen we op RV en laten we die niet langdurig onder ±30% zakken.</p>
            </div>
          </div>
        </div>
        {/* Dit stond als grijze notitiebalk onder de drie materiaalkaarten: de
            belangrijkste zin van de sectie, in de opmaak van een voetnoot. Als
            rode band met de rode kaart erbij leest ze als een standpunt, en
            komt er tussen drie foto's en twee tekstkaders weer een beeld. */}
        <div className="manband rv d1" style={{ marginTop: "26px" }}>
          <div className="mb-t">
            <span className="mbk">Het verschil</span>
            <h3>Niet maximaal drogen. Optimaal drogen.</h3>
            <p>Overcapaciteit is geen kwaliteitskenmerk, de juiste capaciteit wel. Te veel vermogen op een verse laag trekt het oppervlak droog terwijl de kern nog nat is, en dat is precies hoe krimp en scheuren ontstaan. Waarom wij op het klimaat sturen en niet op het aantal toestellen, leest u bij <Link to="/waarom-bouwdroging">waarom bouwdroging</Link>.</p>
          </div>
          <img className="mb-man" src="/vernast/man-rode-kaart.webp" alt="Vernast-expert geeft een rode kaart aan te hard drogen" width={1440} height={1438} loading="lazy" decoding="async" style={{ width: "min(34%,340px)" }} />
        </div>
        <div className="note rv"><b>Lees verder in onze gidsen.</b> Hoeveel weken uw vloer nodig heeft, leest u in <Link to="/gids/hoe-lang-moet-chape-drogen">hoe lang moet chape drogen</Link>, en voor de muren in <Link to="/gids/hoe-lang-moet-pleisterwerk-drogen">hoe lang moet pleisterwerk drogen</Link>, allebei met de droogtijden per dikte. Werkt u in een koude kelder of zit het water onder de vloer, dan legt <Link to="/gids/condensdroger-of-adsorptiedroger">condensdroger of adsorptiedroger</Link> het verschil uit. En wat een toestel dat dag en nacht draait aan stroom kost, rekenen we voor in <Link to="/gids/stroomverbruik-bouwdroger">stroomverbruik van een bouwdroger</Link>. Alle gidsen staan op één plek onder <Link to="/gids">gidsen over bouwdroging</Link>.</div>
      </div>
    </section>

    {/* ================= SAMENGEVAT ================= */}
    <section className="sr">
      <div className="wrap">
        <div className="sec-head" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
          <span className="kick rv">Samengevat</span>
          <h2 className="sec rv">Van nat materiaal naar droge constructie, in acht stappen.</h2>
        </div>
        <div className="stap8">
          <div className="s8 rv"><i></i><span><b>Vocht zit in het bouwmateriaal</b>, in poriën en capillairen, tot diep in de kern.</span></div>
          <div className="s8 rv"><i></i><span><b>Het juiste klimaat</b> stimuleert het transport van vocht naar het oppervlak.</span></div>
          <div className="s8 rv d1"><i></i><span><b>Het vocht verdampt</b> naar de omgevingslucht.</span></div>
          <div className="s8 rv d1"><i></i><span><b>Luchtcirculatie</b> voert de vochtige lucht naar de droger.</span></div>
          <div className="s8 rv d2"><i></i><span><b>De bouwdroger</b> haalt de waterdamp uit de lucht.</span></div>
          <div className="s8 rv d2"><i></i><span><b>Het condenswater</b> wordt uit het gebouw afgevoerd.</span></div>
          <div className="s8 rv d3"><i></i><span><b>Drogere lucht</b> komt opnieuw in contact met het materiaal.</span></div>
          <div className="s8 rv d3"><i></i><span><b>Het proces herhaalt zich</b> tot het gewenste vochtniveau gemeten is.</span></div>
        </div>
      </div>
    </section>

    {/* ================= VAN THEORIE NAAR UW WERF ================= */}
    <section className="sw">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick rv">Bouwdroger huren in Vlaanderen</span>
          <h2 className="sec rv">Van theorie naar uw werf.</h2>
          <p className="lede rv d1">Bij Vernast huurt u geen losse machine, maar een berekend droogklimaat. Onze <Link to="/verhuur/calculator">droogcalculator</Link> bepaalt op basis van uw volume en situatie welk pakket u nodig heeft, voor <Link to="/pleisterwerk-drogen">pleisterwerk</Link>, <Link to="/chape-drogen">chape</Link>, <Link to="/waterschade">waterschade</Link> of een <Link to="/renovatie">koude kelder</Link>. Elk pakket wordt binnen 24 uur geleverd en geïnstalleerd, inclusief vochtmeting voor en na. Liever zelf aan de slag? Losse <Link to="/machines">bouwdrogers, ventilatoren en bouwkachels</Link> haalt u voordelig af in ons <Link to="/verhuur/afhalen">afhaalpunt langs de A12 in Aartselaar</Link>. En met vragen tijdens de huur kunt u altijd terecht bij onze <Link to="/klantservice">klantenservice</Link>.</p>
        </div>
        <div className="manband rv d1">
          <div className="mb-t">
            <span className="mbk">Het Vernast-principe</span>
            <h3>Geen machine omdat ze toevallig beschikbaar is. Een opstelling omdat ze bij uw gebouw past.</h3>
            <p>Zo sturen we het klimaat rond uw bouwmateriaal, en verdwijnt het vocht gecontroleerd uit de constructie, met <Link to="/waarom-bouwdroging">100% droog-garantie</Link>.*</p>
            <Link className="btn btn-white mb-cta" to="/verhuur/calculator">Bereken uw droogpakket<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></Link>
          </div>
          <img className="mb-man" src="/vernast/man-klembord-pen.webp" alt="Vernast technicus noteert de meetresultaten" width={1400} height={934} loading="lazy" decoding="async" style={{ width: "min(30%,320px)" }} />
        </div>
      </div>
    </section>

    {/*
      Het formulier uit de designtranscriptie stond hier met een knop zonder
      handler: geen <form>, geen onClick, en de pagina draait geen JavaScript.
      Wie zijn vraag intikte en op "Verstuur uw vraag" drukte, kreeg niets en
      wij ook niet. <ContactBlok> post naar /api/aanvraag, net als op de dertien
      andere inhoudspagina's en op de gidsen in deze zelfde schil.
    */}
    <ContactBlok
      kicker="Nog een vraag hierover?"
      titel="Onze droogspecialisten denken graag mee."
      lede="Twijfelt u over de juiste aanpak voor uw project? Stel uw vraag, u krijgt binnen één werkdag antwoord van een specialist."
      onderwerpen={[
        "Hoe werkt drogen in mijn situatie?",
        "Advies over het juiste pakket",
        "Vraag over prijzen of levering",
        "Iets anders",
      ]}
      placeholder="Bv. nieuwbouw 140 m², chape geplaatst vorige week, wanneer kan de vloerder starten?"
    />

    <V3Footer />
  </div>
);

export default HoeDrogenWerktPage;

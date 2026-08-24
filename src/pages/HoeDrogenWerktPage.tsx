import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import { SEO } from "@/data/seo";
import "@/styles/hoe-drogen-werkt.css";
import "@/styles/hoe-drogen-werkt-fixes.css";

/**
 * Hoe drogen werkt — 1:1 transcription of the Claude Design handoff
 * (Hoe Drogen Werkt.html). The design's own header/footer are replaced by
 * the shared <V3Header>/<V3Footer>; everything else is the design's markup,
 * scoped under `.hdw-page` (see src/styles/hoe-drogen-werkt.css). Assets
 * resolve from /vernast/*.webp and the reveal-on-scroll animation is
 * neutralised in CSS so the page needs no JavaScript.
 */

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
            <h1 className="rv">Een bouwdroger droogt uw woning niet. Het juiste klimaat wel.</h1>
            <p className="rv d1">Tijdens bouwen en renoveren komen honderden liters water in uw woning terecht: in pleister, chape, mortel en beton. Professionele bouwdroging is niet "een toestel aanzetten", maar de combinatie van temperatuur, luchtvochtigheid en luchtbeweging zo sturen dat dat vocht gecontroleerd uit de constructie verdwijnt.</p>

            <div className="hcta rv d3">
              <Link className="btn btn-white" to="/verhuur/calculator">Bereken uw droogpakket<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></Link>
              <Link className="btn btn-ghost" to="/waarom-bouwdroging">Waarom bouwdroging?</Link>
            </div>
          </div>
          <div className="hero-vis rv d2">
            <img src="/vernast/team-tools.webp" alt="De Vernast vakmannen" style={{ width: "min(100%,560px)" }} />
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
          <p className="lede rv d1">Een serre verandert het klimaat binnenin ten opzichte van buiten. Bij bouwdroging doen we iets vergelijkbaars: we creëren tijdelijk een binnenklimaat waarin vocht makkelijker uit <Link to="/verhuur/calculator">pleister, chape</Link> en muren naar de omgevingslucht beweegt, en daarna ook echt uit die lucht wordt verwijderd. Drie factoren werken daarvoor samen; geen enkele werkt optimaal op zichzelf.</p>
        </div>
        <div className="g3">
          <div className="kaart rv">
            <div className="ki"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" /></svg></div>
            <h3>1. Temperatuur</h3>
            <p>Voldoende warmte verhoogt het verdampingspotentieel en ondersteunt het vochttransport uit het materiaal. In koude ruimtes zetten we daarom een <Link to="/verhuur/toestel/teddh30" style={{ color: "var(--red)", fontWeight: 600 }}>bouwkachel</Link> bij.</p>
          </div>
          <div className="kaart rv d1">
            <div className="ki"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" /></svg></div>
            <h3>2. Relatieve luchtvochtigheid</h3>
            <p>Door waterdamp actief uit de lucht te verwijderen, ontstaat telkens opnieuw ruimte voor vocht dat uit de materialen verdampt. Dat is het werk van de <Link to="/machines" style={{ color: "var(--red)", fontWeight: 600 }}>bouwdroger</Link>.</p>
          </div>
          <div className="kaart rv d2">
            <div className="ki"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9.6 4.6A2 2 0 1 1 11 8H2" /><path d="M12.6 19.4A2 2 0 1 0 14 16H2" /><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" /></svg></div>
            <h3>3. Luchtbeweging</h3>
            <p>Droge lucht moet álle vochtige oppervlakken bereiken; stilstaande lucht rond een wand of vloer remt het proces. Daarom horen bij veel pakketten <Link to="/verhuur/toestel/ttv4500" style={{ color: "var(--red)", fontWeight: 600 }}>ventilatoren</Link>.</p>
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
            <div className="t">Koude ruimte</div>
            <div className="big">10 °C · 80<small>% RV</small></div>
            <div className="bar"><b></b></div>
            <div className="sub">vochtige binnenlucht</div>
          </div>
          <div className="rvbox rv d1" style={{ "--w": "42%" } as React.CSSProperties}>
            <div className="t">Zelfde lucht, verwarmd</div>
            <div className="big">20 °C · 42<small>% RV</small></div>
            <div className="bar"><b></b></div>
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
        <div className="rvimg rv d1"><img src="/vernast/lineup-dryers.webp" alt="Vernast eco-bouwdrogers in drie formaten" /></div>
      </div>
    </section>

    {/* ================= DE CYCLUS ================= */}
    <section className="sw2">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick rv">De cyclus</span>
          <h2 className="sec rv">Hoe een condensbouwdroger water uit uw woning haalt.</h2>
          <p className="lede rv d1">Binnenin stroomt de vochtige lucht langs een koud oppervlak, koelt onder haar dauwpunt en geeft haar waterdamp af als vloeibaar water. De lucht verlaat de machine iets warmer én droger, en de kringloop begint opnieuw: <b>materiaal → lucht → bouwdroger → condenswater → afvoer</b>.</p>
        </div>
        <div className="cyc">
          <div className="cy rv"><i>01</i><div className="ci2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /></svg></div><h3>Vocht in het materiaal</h3><p>Water migreert via poriën en capillairen naar het oppervlak en verdampt naar de lucht.</p></div>
          <div className="cy rv d1"><i>02</i><div className="ci2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9.6 4.6A2 2 0 1 1 11 8H2" /><path d="M12.6 19.4A2 2 0 1 0 14 16H2" /></svg></div><h3>Aanzuigen</h3><p>De droger zuigt de vochtige binnenlucht met een krachtige ventilator door het toestel.</p></div>
          <div className="cy rv d2" style={{ position: "relative" }}><i>03</i><div className="ci2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" /></svg><span className="drop" style={{ left: "14px", top: "44px" }}><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" /></svg></span><span className="drop" style={{ left: "26px", top: "44px", animationDelay: "1.2s" }}><svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" /></svg></span></div><h3>Condenseren</h3><p>De lucht koelt langs een koud oppervlak onder haar dauwpunt; waterdamp wordt vloeibaar water.</p></div>
          <div className="cy rv d3"><i>04</i><div className="ci2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v8" /><path d="M5 14h14v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" /></svg></div><h3>Afvoeren</h3><p>Het condenswater gaat naar een reservoir of wordt met een condenspomp rechtstreeks weggepompt.</p></div>
          <div className="cy rv d3"><i>05</i><div className="ci2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9" /><path d="M21 3v6h-6" /></svg></div><h3>Opnieuw de ruimte in</h3><p>Drogere, licht opgewarmde lucht wordt verdeeld en neemt opnieuw vocht op uit de materialen.</p></div>
        </div>
        <div className="note rv"><b>Waar gaat al dat water naartoe?</b> Bij eenvoudige toestellen in een reservoir dat u regelmatig leegmaakt. Bij langdurige professionele droging verkiezen wij continue condensafvoer: een condenspomp (€ 2 per bouwdroger per dag) pompt het water dag en nacht rechtstreeks naar een afvoer, zodat de cyclus onafgebroken doorloopt, ook 's nachts en in het weekend. U voegt hem toe tijdens het <Link to="/verhuur/calculator">berekenen van uw pakket</Link>.</div>
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
            <p>Een witte pleisterlaag kan droog ogen, een chape kan stevig aanvoelen, dat zegt niets over wat er dieper in het materiaal gebeurt. Visueel beoordelen is onbetrouwbaar. Het einddoel is nooit "de droger heeft zeven dagen gedraaid", maar: <b>het materiaal is klaar voor de volgende bouwfase</b>. Daarom zit bij elk pakket een vochtmeting voor én na, en kiest u optioneel een <Link to="/booking">meetrapport (€ 49)</Link> voor uw verzekering of huisbaas.</p>
          </div>
          <img className="mb-man" src="/vernast/man-vochtmeter.webp" alt="Vernast specialist meet het vochtgehalte van een muur" style={{ width: "min(44%,440px)" }} />
        </div>
      </div>
    </section>

    {/* ================= NIET ELK MATERIAAL ================= */}
    <section className="sw">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick rv">Niet elk materiaal is gelijk</span>
          <h2 className="sec rv">Pleister, chape en beton drogen niet op dezelfde manier.</h2>
          <p className="lede rv d1">Niet ieder bouwmateriaal bevat hetzelfde type vocht. Een professionele droogstrategie luidt daarom nooit "machine aan zodra het materiaal geplaatst is", materiaal, leeftijd, technische voorschriften en de gewenste afwerking bepalen mee de aanpak. De <Link to="/verhuur/calculator">calculator</Link> vraagt daarom ook wát u droogt.</p>
        </div>
        <div className="g3">
          <div className="kaart rv">
            <div className="ki"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22 4 18 15 7l4 4L8 22z" /><path d="m14 4 6 6" /></svg></div>
            <h3>Gipspleister</h3>
            <p>Verliest zijn overtollige water vooral door verdamping. Laagdikte, temperatuur, luchtvochtigheid, ventilatie en de zuiging van de ondergrond bepalen de droogtijd van <Link to="/verhuur/calculator" style={{ color: "var(--red)", fontWeight: 600 }}>pleisterwerk drogen</Link>.</p>
          </div>
          <div className="kaart rv d1">
            <div className="ki"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 12h18" /><path d="M12 3v18" /></svg></div>
            <h3>Chape &amp; beton</h3>
            <p>Cement heeft water nodig voor de hydratatiereactie waarmee het uithardt. Te vroeg agressief drogen verstoort dat, bij <Link to="/verhuur/calculator" style={{ color: "var(--red)", fontWeight: 600 }}>chape drogen</Link> starten we pas ná de noodzakelijke uithardingsfase.</p>
          </div>
          <div className="kaart rv d2">
            <div className="ki"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg></div>
            <h3>Te agressief drogen</h3>
            <p>Grote vochtgradiënten tussen oppervlak en kern kunnen krimp en scheurvorming bevorderen. Daarom sturen we op RV en laten we die niet langdurig onder ±30% zakken.</p>
          </div>
        </div>
        <div className="note rv"><b>Niet maximaal drogen. Optimaal drogen.</b> Overcapaciteit is geen kwaliteitskenmerk, de juiste capaciteit wel. Waarom dat zo is, leest u bij <Link to="/waarom-bouwdroging">waarom bouwdroging</Link>.</div>
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
          <p className="lede rv d1">Bij Vernast huurt u geen losse machine, maar een berekend droogklimaat. Onze <Link to="/verhuur/calculator">droogcalculator</Link> bepaalt op basis van uw volume en situatie welk pakket u nodig heeft, voor <Link to="/verhuur/calculator">pleisterwerk</Link>, <Link to="/verhuur/calculator">chape</Link>, waterschade of een koude kelder. Elk pakket wordt binnen 24 uur geleverd en geïnstalleerd, inclusief vochtmeting voor en na. Liever zelf aan de slag? Losse <Link to="/machines">bouwdrogers, ventilatoren en bouwkachels</Link> haalt u voordelig af in ons <Link to="/verhuur/afhalen">afhaalpunt langs de A12 in Aartselaar</Link>. En met vragen tijdens de huur kunt u altijd terecht bij onze <Link to="/klantservice">klantenservice</Link>.</p>
        </div>
        <div className="manband rv d1">
          <div className="mb-t">
            <span className="mbk">Het Vernast-principe</span>
            <h3>Geen machine omdat ze toevallig beschikbaar is. Een opstelling omdat ze bij uw gebouw past.</h3>
            <p>Zo sturen we het klimaat rond uw bouwmateriaal, en verdwijnt het vocht gecontroleerd uit de constructie, met <Link to="/waarom-bouwdroging">100% droog-garantie</Link>.*</p>
            <Link className="btn btn-white mb-cta" to="/verhuur/calculator">Bereken uw droogpakket<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></Link>
          </div>
          <img className="mb-man" src="/vernast/man-klembord-pen.webp" alt="Vernast technicus noteert de meetresultaten" style={{ width: "min(30%,320px)" }} />
        </div>
      </div>
    </section>

    {/* ================= VRAAGFORMULIER ================= */}
    <section className="oform" id="formulier">
      <div className="wrap">
        <div className="sec-head" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
          <span className="kick rv">Nog een vraag hierover?</span>
          <h2 className="sec rv">Onze droogspecialisten denken graag mee.</h2>
          <p className="lede rv d1" style={{ marginLeft: "auto", marginRight: "auto" }}>Twijfelt u over de juiste aanpak voor uw project? Stel uw vraag, u krijgt binnen één werkdag antwoord van een specialist.</p>
        </div>
        <div className="fshell rv d2">
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
              <div className="fld"><label htmlFor="fOnd">Waarover gaat uw vraag?</label>
                <select id="fOnd">
                  <option>Hoe werkt drogen in mijn situatie?</option>
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
              <button className="btn" id="fSend">Verstuur uw vraag<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></button>
            </div>
          </div>
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

export default HoeDrogenWerktPage;

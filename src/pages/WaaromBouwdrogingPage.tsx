import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import { SEO } from "@/data/seo";
import "@/styles/waarom-bouwdroging.css";
import "@/styles/waarom-bouwdroging-fixes.css";

/**
 * Waarom bouwdroging — 1:1 transcription of the Claude Design handoff
 * (Waarom Bouwdroging.html). The design's own header/footer are replaced by
 * the shared <V3Header>/<V3Footer>; everything else is the design's markup,
 * scoped under `.wb-page` (see src/styles/waarom-bouwdroging.css). Assets
 * resolve from /vernast/*.webp.
 */

/** The cross glyph used in the "natuurlijk drogen" list. */
const Cross = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

/** The check glyph used in the "gecontroleerde bouwdroging" list. */
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

const WaaromBouwdrogingPage = () => (
  <div className="wb-page">
    <PageMeta
      {...SEO.waaromBouwdroging}
      path="/waarom-bouwdroging"
      jsonLd={[
        organizationSchema(),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Waarom bouwdroging", path: "/waarom-bouwdroging" },
        ]),
      ]}
    />

    <div className="redtop">
      <V3Header lightAfter={420} />

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="kick rv">Alles over drogen · waarom</span>
            <h1 className="rv">Hopen op goed weer is geen droogstrategie.</h1>
            <p className="rv d1">Een woning droogt uiteindelijk ook vanzelf, maar op het tempo van de seizoenen, met alle risico's voor uw planning en afwerking. Gecontroleerde bouwdroging maakt dat proces voorspelbaar, meetbaar en berekend op uw gebouw.</p>
            <div className="hcta rv d3">
              <Link className="btn btn-white" to="/verhuur/calculator">Bereken uw droogpakket<Arrow /></Link>
              <Link className="btn btn-ghost" to="/hoe-drogen-werkt">Hoe drogen werkt</Link>
            </div>
          </div>
          <div className="hero-vis rv d2">
            <img src="/vernast/drie-vakmannen.webp" alt="De Vernast vakmannen met hun eco-bouwdrogers" style={{ width: "min(100%,560px)" }} />
            <div className="fbadge" style={{ top: "-34px", left: "6%" }}>
              <span className="ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg></span>
              <div>100% droog-garantie*<small>Of kosteloos verlengen</small></div>
            </div>
          </div>
        </div>
      </section>
    </div>


    {/* ================= NATUURLIJK VS GECONTROLEERD ================= */}
    <section className="sw">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick rv">Natuurlijk vs. gecontroleerd</span>
          <h2 className="sec rv">Waarom natuurlijke droging vaak veel langer duurt.</h2>
          <p className="lede rv d1">Wanneer een gebouw vanzelf droogt, bepalen toevallige omstandigheden het tempo: de buitentemperatuur verandert, ramen gaan open en dicht, 's nachts daalt de temperatuur en stijgt de luchtvochtigheid. De ene dag wordt veel vocht afgevoerd, de volgende dag nauwelijks. Gecontroleerde <Link to="/hoe-drogen-werkt">bouwdroging</Link> stabiliseert die variabelen, het grote verschil is <b>controleerbaarheid en voorspelbaarheid</b>.</p>
        </div>
        <div className="vsg">
          <div className="vs rv">
            <span className="vt">Natuurlijk drogen</span>
            <h3>Afhankelijk van het weer.</h3>
            <ul>
              <li><Cross /> Tempo wisselt per dag én per seizoen</li>
              <li><Cross /> 's Nachts stijgt de RV en valt de droging stil</li>
              <li><Cross /> Vochtige zomerlucht kan vocht bínnenbrengen</li>
              <li><Cross /> Geen zicht op wanneer afwerken veilig is</li>
              <li><Cross /> Weken tot maanden wachttijd tussen bouwfasen</li>
            </ul>
          </div>
          <div className="vs hot rv d1">
            <span className="vt">Gecontroleerde bouwdroging</span>
            <h3>Stabiel klimaat, dag en nacht.</h3>
            <ul>
              <li><Check /> Temperatuur, RV en circulatie continu gestuurd</li>
              <li><Check /> Droogt 24/7 door, onafhankelijk van het weer</li>
              <li><Check /> Berekende droogtijd, dus planbare vervolgwerken</li>
              <li><Check /> Vochtmeting voor en na: meten in plaats van gokken</li>
              <li><Check /> Ondersteunt het fysische proces, slaat niets over</li>
            </ul>
          </div>
        </div>
        <div className="note rv d2"><b>Eerlijk is eerlijk:</b> onder gunstige weersomstandigheden kan natuurlijke ventilatie prima helpen. Maar wie een werf plant, kan niet op gunstig weer rekenen, en op een warme, vochtige zomerdag is ontvochtigen zelfs geschikter dan blijven ventileren.</div>
      </div>
    </section>

    {/* ================= UW PLANNING ================= */}
    <section className="sr">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick rv">Uw planning</span>
          <h2 className="sec rv">Te vroeg afwerken kost meer dan drogen.</h2>
          <p className="lede rv d1">Schilderen, parket plaatsen of vloerbekleding aanbrengen op een te vochtige ondergrond veroorzaakt later problemen. Gecontroleerd drogen verkort de wachttijd tussen bouwfasen, zonder de noodzakelijke uithardingstijden van fabrikanten te negeren: bouwdroging <b style={{ color: "#fff" }}>ondersteunt en optimaliseert</b> het natuurlijke proces, ze slaat niets over.</p>
        </div>
        <div className="plan">
          <div className="pl rv"><b>Schilderwerk</b>Verf op vochtig pleister hecht slecht, gaat blazen of bladdert af. Herschilderen kost meer dan drogen.</div>
          <div className="pl rv d1"><b>Parket &amp; vloeren</b>Hout en lijm verdragen geen vochtige chape: kromtrekken, loskomen en vochtschade onder de vloer.</div>
          <div className="pl rv d2"><b>Oplevering &amp; verhuis</b>Elke week wachten op "vanzelf droog" is een week latere oplevering, en soms een week extra dubbele huur.</div>
        </div>
        <div className="manband lite rv d2">
          <div className="mb-t">
            <span className="mbk">Schimmel voorkomen</span>
            <h3>Te lang vochtig? Dan komt schimmel gratis mee.</h3>
            <p>Een constructie die maanden vochtig blijft, is de ideale voedingsbodem voor schimmelsporen, vooral achter kasten, plinten en in slecht geventileerde hoeken. Ontstond er toch al schimmel, dan pakken we die aan met een <a href="/#ozon">ozonbehandeling</a>, altijd in combinatie met een correcte droging.</p>
          </div>
          <img className="mb-man" src="/vernast/man-schimmelpak.webp" alt="Vernast schimmelspecialist in beschermpak" style={{ width: "min(24%,240px)" }} />
        </div>
      </div>
    </section>

    {/* ================= MEER DAN LITERS PER DAG ================= */}
    <section className="sw">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick rv">Meer dan liters per dag</span>
          <h2 className="sec rv">Van "50 liter per 24 uur" naar een droogplan.</h2>
          <p className="lede rv d1">Bouwdrogers worden vaak verhuurd op één getal. Maar de werkelijke wateronttrekking verandert sterk met temperatuur en luchtvochtigheid: een toestel dat in warme, vochtige testomstandigheden tientallen liters haalt, condenseert veel minder zodra het gebouw al gedeeltelijk droog is. Daarom dimensioneert onze <Link to="/verhuur/calculator">calculator</Link> nooit op het getal op de machine alleen, maar op:</p>
        </div>
        <div className="wk">
          <div className="wi rv"><i></i><span><b>Het gebouw</b>, inhoud, aantal ruimtes, verdiepingen en hoe lucht er kan circuleren.</span></div>
          <div className="wi rv"><i></i><span><b>De materialen</b>, pleister, chape, beton of metselwerk, met hun laagdiktes en leeftijd.</span></div>
          <div className="wi rv d1"><i></i><span><b>De vochtbelasting</b>, waar zit het meeste water, en in welke droogfase zit het project?</span></div>
          <div className="wi rv d1"><i></i><span><b>De praktijk</b>, temperatuur, luchtlekken en beschikbare elektriciteit op de werf.</span></div>
        </div>
        <div className="manband rv d1">
          <div className="mb-t">
            <span className="mbk">Vóór de machine wordt geplaatst</span>
            <h3>Een efficiënte bouwdroging begint op papier.</h3>
            <p>De grootste bouwdroger kiezen is eenvoudig; de juiste droogstrategie bepalen vraagt meer. Welke materialen moeten drogen? Kan lucht vrij circuleren? Eén droogzone of meerdere? Pas daarna wordt de capaciteit bepaald en verdeeld, dat is <Link to="/waarom-bouwdroging">uw droogplan</Link>, en u krijgt het meteen uit de <Link to="/verhuur/calculator">calculator</Link>.</p>
          </div>
          <img className="mb-man" src="/vernast/man-klembord.webp" alt="Vernast technicus stelt het droogplan op" style={{ width: "min(24%,250px)" }} />
        </div>
      </div>
    </section>

    {/* ================= HET VERNAST-PRINCIPE ================= */}
    <section className="sr">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick rv">Het Vernast-principe</span>
          <h2 className="sec rv">Een grotere bouwdroger betekent niet automatisch sneller drogen.</h2>
          <p className="lede rv d1">Twee drogers met samen dezelfde capaciteit als één zware machine: op papier identiek, in een echte woning niet. Een woning bestaat uit kamers, gangen, deuropeningen en hoeken, en lucht kiest de gemakkelijkste stromingsweg. Vergelijk het met verwarming: één enorme radiator in de woonkamer maakt de slaapkamers niet warm.</p>
        </div>
        <div className="radi">
          <div className="rd rv">
            <div className="zone"><i className="on" /><i className="half" /><i /><i /></div>
            <h3>Eén zware machine, centraal</h3>
            <p>Uitstekend klimaat rond het toestel, nauwelijks luchtverversing in verder gelegen kamers. Op papier voldoende capaciteit, in de praktijk ongelijkmatig drogen, en vaak <b>onnodig energieverbruik</b> door overgedimensioneerde toestellen in compacte woningen.</p>
          </div>
          <div className="rd rv d1">
            <div className="zone"><i className="on" /><i className="on" /><i className="on" /><i className="on" /></div>
            <h3>Capaciteit verdeeld over droogzones</h3>
            <p>Dezelfde totale capaciteit, verdeeld waar ze nodig is, aangevuld met <Link to="/verhuur/toestel/ttv4500" style={{ color: "var(--red)", fontWeight: 600 }}>ventilatoren</Link> die de lucht beter laten circuleren. Een gelijkmatiger droogklimaat, een voorspelbaar resultaat en een lagere energiefactuur.</p>
          </div>
        </div>
        <div className="note rv d2"><b>Niet maximaal drogen. Optimaal drogen.</b> Te agressief drogen kan krimp en scheurvorming bevorderen, daarom sturen we op relatieve luchtvochtigheid en is overcapaciteit geen kwaliteitskenmerk. Het doel is niet zo groot mogelijke machines plaatsen, maar <b>de benodigde capaciteit zo efficiënt mogelijk over het gebouw verdelen</b>. Hoe dat technisch zit, leest u bij <Link to="/hoe-drogen-werkt">hoe drogen werkt</Link>.</div>
      </div>
    </section>

    {/* ================= WAT BETEKENT DAT VOOR U ================= */}
    <section className="sw">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick rv">Wat betekent dat voor u?</span>
          <h2 className="sec rv">Eén berekend pakket, volledig ontzorgd.</h2>
          <p className="lede rv d1">Bij Vernast kiest u geen machine uit een lijst. U vult in de <Link to="/verhuur/calculator">droogcalculator</Link> uw oppervlakte, plafondhoogte en situatie in, <Link to="/verhuur/calculator">pleisterwerk drogen</Link>, <Link to="/verhuur/calculator">chape drogen</Link>, waterschade of kelder, en krijgt meteen het juiste pakket met droogtijd en één all-in prijs. Levering, installatie, vochtmeting voor en na, ophaling en alle toebehoren zitten erin. U boekt, betaalt en plant de installatie volledig online, met 5% korting bij online betaling. Liever losse toestellen? Die <Link to="/verhuur/afhalen">haalt u voordelig af langs de A12 in Aartselaar</Link>. Vragen tijdens de huur? Daarvoor is er de <Link to="/klantservice">klantenservice</Link>.</p>
        </div>
        <div className="manband rv d1">
          <div className="mb-t">
            <span className="mbk">Onze belofte</span>
            <h3>100% droog binnen de berekende periode. Of u huurt kosteloos verder.*</h3>
            <p>Omdat wij berekenen in plaats van gokken, durven wij dat te beloven. De eindmeting bevestigt het resultaat, zwart op wit.</p>
            <Link className="btn btn-white mb-cta" to="/verhuur/calculator">Start de berekening<Arrow /></Link>
          </div>
          <img className="mb-man" src="/vernast/man-zen-crop.webp" alt="Zorgeloos drogen met het Vernast droogpakket" style={{ width: "min(26%,260px)" }} />
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
                  <option>Is bouwdroging nodig in mijn situatie?</option>
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
              <button className="btn" id="fSend" type="button">Verstuur uw vraag<Arrow /></button>
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

export default WaaromBouwdrogingPage;

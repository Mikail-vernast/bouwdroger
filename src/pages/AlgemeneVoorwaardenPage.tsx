import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import { SEO } from "@/data/seo";
import "@/styles/algemene-voorwaarden.css";
import "@/styles/algemene-voorwaarden-fixes.css";

/**
 * Algemene voorwaarden — 1:1 transcription of the Claude Design handoff
 * (Algemene Voorwaarden.html). The design's own header/footer are replaced by
 * the shared <V3Header>/<V3Footer>; everything else is the design's markup,
 * scoped under `.av-page` (see src/styles/algemene-voorwaarden.css). The legal
 * boilerplate carries no search value, so the page is noindexed. Assets resolve
 * from /vernast/*.webp.
 */
const AlgemeneVoorwaardenPage = () => (
  <div className="av-page">
    <PageMeta
      {...SEO.algemeneVoorwaarden}
      path="/algemene-voorwaarden"
      jsonLd={[
        organizationSchema(),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Algemene voorwaarden", path: "/algemene-voorwaarden" },
        ]),
      ]}
    />

    <V3Header lightAfter={420} />

    {/* ================= HERO ================= */}
    <section className="lhero">
      <div className="wrap lh-grid">
        <div className="lh-copy">
          <span className="kick">Juridisch</span>
          <h1>Algemene voorwaarden</h1>
          <p>
            Deze Algemene Verhuurvoorwaarden zijn van toepassing op elke aanbieding, offerte en
            overeenkomst van Vernast. Vragen? Mail{" "}
            <a href="mailto:info@vernast.be" style={{ color: "#fff", fontWeight: 600 }}>
              info@vernast.be
            </a>{" "}
            of bel{" "}
            <a href="tel:+3236899065" style={{ color: "#fff", fontWeight: 600 }}>
              03 689 90 65
            </a>
            .
          </p>
        </div>
        <div className="lh-vis">
          <img src="/vernast/team-tools.webp" alt="Het Vernast-team" />
        </div>
      </div>
    </section>

    {/* ================= LEGAL ================= */}
    <section className="legal">
      <div className="wrap">
        <nav className="lnav" aria-label="Artikelen">
          <div className="lt">Alle artikelen</div>
          <a href="#art1"><i>Art. 1</i> Definities</a>
          <a href="#art2"><i>Art. 2</i> Geldigheid en toepassing</a>
          <a href="#art3"><i>Art. 3</i> Vorming van de overeenkomst</a>
          <a href="#art4"><i>Art. 4</i> Samenstelling en verplichtingen</a>
          <a href="#art4a"><i>Art. 4A</i> Bouwdroging op maat</a>
          <a href="#art5"><i>Art. 5</i> Huurperiode en beëindiging</a>
          <a href="#art6"><i>Art. 6</i> Levering en ophaling</a>
          <a href="#art7"><i>Art. 7</i> Inspectie en gebreken</a>
          <a href="#art8"><i>Art. 8</i> Teruggave en risico</a>
          <a href="#art9"><i>Art. 9</i> Richtlijnen voor de huurder</a>
          <a href="#art10"><i>Art. 10</i> Prijsstelling en wijzigingen</a>
          <a href="#art11"><i>Art. 11</i> Schade, verlies en aansprakelijkheid</a>
          <a href="#art12"><i>Art. 12</i> Transport</a>
          <a href="#art13"><i>Art. 13</i> Aansprakelijkheid van Vernast</a>
          <a href="#art14"><i>Art. 14</i> Reservering en annulering</a>
          <a href="#art15"><i>Art. 15</i> Facturatie en betaling</a>
          <a href="#art16"><i>Art. 16</i> Overmacht</a>
          <a href="#art17"><i>Art. 17</i> Waarborgsom</a>
          <a href="#art18"><i>Art. 18</i> Informatie en IE-rechten</a>
          <a href="#art19"><i>Art. 19</i> Verzekeringen en risicoafdekking</a>
          <a href="#art20"><i>Art. 20</i> Privacybeleid</a>
          <a href="#art21"><i>Art. 21</i> Slotbepalingen en jurisdictie</a>
        </nav>

        <div className="lcol">
          <p className="meta">Laatst bijgewerkt: augustus 2026</p>

          <article id="art1">
            <h2><em>Definities</em>Artikel 1 – Definities</h2>
            <p>In deze Algemene Verhuurvoorwaarden van Vernast hebben de volgende met een hoofdletter geschreven termen de onderstaande betekenissen:</p>
            <dl>
              <dt>Aanbieding</dt><dd>Een voorstel van Vernast voor het sluiten van een Overeenkomst, waaruit blijkt dat Vernast zich na acceptatie daaraan wil binden.</dd>
              <dt>AVG</dt><dd>De Algemene Verordening Gegevensbescherming, zoals vastgesteld door de EU in Verordening (EU) 2016/679.</dd>
              <dt>Bijlagen</dt><dd>Specifieke aanvullende voorwaarden die gelden voor bepaalde verhuurcategorieën binnen Vernast.</dd>
              <dt>Vernast</dt><dd>De rechtspersoon waarmee de Overeenkomst wordt gesloten, te weten VRNST.</dd>
              <dt>Dagwaarde</dt><dd>De nieuwwaarde minus afschrijving door veroudering of slijtage.</dd>
              <dt>Gebreken</dt><dd>Defecten aan het Huurmaterieel, toe te rekenen aan Vernast, die al bestonden voor levering aan de Huurder en die de functionaliteit beïnvloeden.</dd>
              <dt>Gegevens</dt><dd>Alle documentatie, zoals handleidingen en instructies, verstrekt door Vernast of beschikbaar op de website.</dd>
              <dt>Huurder</dt><dd>Elke natuurlijke of rechtspersoon die een Overeenkomst aangaat met Vernast, inclusief vertegenwoordigers.</dd>
              <dt>Huurmaterieel</dt><dd>Alle door Vernast ter huur aangeboden goederen, inclusief accessoires en vervangingsonderdelen.</dd>
              <dt>Offerte</dt><dd>Een schriftelijk voorstel van Vernast aan de Huurder voor het aangaan van een Overeenkomst.</dd>
              <dt>Totaalbedrag</dt><dd>Het complete bedrag dat de Huurder verschuldigd is op basis van de Overeenkomst.</dd>
              <dt>Overeenkomst</dt><dd>De contractuele afspraak tussen Vernast en de Huurder, waarop deze voorwaarden van toepassing zijn.</dd>
              <dt>Partijen</dt><dd>Vernast en de Huurder samen.</dd>
              <dt>Schriftelijk</dt><dd>In fysieke vorm of elektronisch via e-mail, mits verzonden door bevoegde vertegenwoordigers van Vernast of (afhankelijk van de context) de Huurder.</dd>
              <dt>Verhuurvoorwaarden</dt><dd>Deze Algemene Voorwaarden van Vernast.</dd>
              <dt>Werkdag</dt><dd>Maandag t/m vrijdag van 07.00 tot 21.00 uur, en zaterdag van 09.00 tot 13.00 uur.</dd>
            </dl>
          </article>

          <article id="art2">
            <h2><em>Artikel 2</em>Geldigheid en Toepassing</h2>
            <h3>Algemene Toepassing</h3>
            <p>Deze Verhuurvoorwaarden zijn van toepassing op elke Aanbieding, Offerte en Overeenkomst tussen Partijen. Dit omvat impliciete of expliciete vernieuwingen, vervolgopdrachten of herhaalde overeenkomsten, tenzij er Schriftelijk een andere afspraak is gemaakt tussen Partijen.</p>
            <h3>Toepassing van Bijlagen</h3>
            <p>Bij specifieke huurvoorwaarden vanuit bepaalde afdelingen van Vernast, zoals bij huur van specialistisch Huurmaterieel, zijn naast de Verhuurvoorwaarden ook relevante Bijlagen van toepassing. Bijvoorbeeld, bij het huren van een bepaald item, is naast de standaard Verhuurvoorwaarden ook de toepasselijke Bijlage geldig.</p>
            <h3>Wijzigingen en Aanvullingen</h3>
            <p>Eventuele afwijkingen van of toevoegingen aan de Overeenkomst, Verhuurvoorwaarden of Bijlagen zijn alleen geldig als ze uitdrukkelijk en Schriftelijk door Vernast worden bevestigd. Indien Vernast dergelijke afwijkingen toestaat, heeft dit geen invloed op toekomstige overeenkomsten.</p>
            <h3>Afzien van Huurders Voorwaarden</h3>
            <p>De Huurder erkent dat diens eigen algemene voorwaarden niet van toepassing zijn op de Overeenkomst. Verwijzingen naar de algemene voorwaarden van de Huurder worden beschouwd als standaardverwijzingen zonder juridische consequenties in de relatie tussen Partijen.</p>
            <h3>Voorrang van Overeenkomst</h3>
            <p>In geval van tegenstrijdigheden tussen de Verhuurvoorwaarden en/of Bijlagen en de Overeenkomst, heeft de inhoud van de Overeenkomst voorrang.</p>
            <h3>Taalversies</h3>
            <p>Bij tegenstrijdigheden tussen de Nederlandse versie van de Verhuurvoorwaarden en/of Bijlagen en vertalingen daarvan, is de Nederlandse tekst leidend.</p>
            <h3>Wijzigingsrecht Vernast</h3>
            <p>Vernast behoudt zich het recht voor om deze Verhuurvoorwaarden en Bijlagen te wijzigen of aan te vullen. Wijzigingen zijn ook van toepassing op bestaande Overeenkomsten, mits Schriftelijk overeengekomen tussen Partijen of indien geen bezwaar is gemaakt door de Huurder binnen 30 dagen na Schriftelijke bekendmaking van de wijzigingen.</p>
          </article>

          <article id="art3">
            <h2><em>Artikel 3</em>Vorming van de Overeenkomst</h2>
            <h3>Aanbiedingen van de Huurder</h3>
            <p>Aanvragen voor huur door de Huurder worden beschouwd als bindende voorstellen voor het aangaan van een Overeenkomst. Een Overeenkomst wordt geacht tot stand te komen door Schriftelijke bevestiging van Vernast op de huuraanvraag van de Huurder.</p>
            <h3>Acceptatie van Offerte of Aanbieding</h3>
            <p>Een Overeenkomst ontstaat ook wanneer de Huurder een Offerte of Aanbieding van Vernast accepteert, behalve als Vernast binnen maximaal drie Werkdagen na acceptatie door de Huurder de Offerte of Aanbieding intrekt.</p>
            <h3>Elektronische Ondertekening in Filialen</h3>
            <p>Overeenkomsten die in de filialen van Vernast worden gesloten, worden elektronisch ondertekend. De Overeenkomst is effectief zodra de Huurder deze elektronisch ondertekent. Voorafgaand aan de ondertekening kan de Huurder de Verhuurvoorwaarden en eventuele aanvullende plannen raadplegen, downloaden en opslaan via de website van Vernast. De elektronisch ondertekende Overeenkomst, inclusief de Verhuurvoorwaarden en eventuele aanvullende documenten, wordt onmiddellijk na ondertekening naar het opgegeven e-mailadres van de Huurder verzonden.</p>
            <h3>Aanvang van de Uitvoering</h3>
            <p>Ongeacht het bovenstaande wordt een Overeenkomst altijd geacht tot stand te zijn gekomen op het moment dat Vernast begint met de uitvoering van de Overeenkomst.</p>
          </article>

          <article id="art4">
            <h2><em>Artikel 4</em>Samenstelling en Verplichtingen van de Overeenkomst</h2>
            <h3>Definiëring van de Overeenkomst</h3>
            <p>De inhoud en de reikwijdte van de verplichtingen van Vernast worden bepaald door de geaccepteerde Offerte, de Overeenkomst zelf, de Verhuurvoorwaarden, relevante Bijlagen en alle Schriftelijk vastgelegde afspraken. Bij discrepanties tussen de Offerte en de Overeenkomst heeft de Overeenkomst voorrang.</p>
            <h3>Toelaatbare Afwijkingen</h3>
            <p>Vernast mag kleine, niet essentiële wijzigingen in de Overeenkomst aanbrengen, zolang deze wijzigingen geen betrekking hebben op de essentiële vereisten die door de Huurder Schriftelijk zijn gecommuniceerd voor de totstandkoming van de Overeenkomst. Deze wijzigingen mogen de prestatie van Vernast niet wezenlijk veranderen. Dit omvat het beschikbaar stellen van vergelijkbaar Huurmaterieel in termen van kwaliteit en prestaties.</p>
            <h3>Recht op Ontbinding door Huurder</h3>
            <p>Indien de Huurder kan aantonen dat het Huurmaterieel significant afwijkt van de Overeenkomst of de door Vernast verstrekte Gegevens, waardoor nakoming onredelijk zou zijn, heeft de Huurder het recht de Overeenkomst te ontbinden. In dit geval is Vernast echter niet verplicht tot enige vorm van schadevergoeding.</p>
            <h3>Inschakeling van Derden door Vernast</h3>
            <p>Vernast behoudt zich het recht voor om, voor het nakomen van haar verplichtingen uit de Overeenkomst, gelijksoortig Huurmaterieel of personeel via een derde partij in te huren.</p>
            <h3>Heropstartkosten bij Servicebezoeken</h3>
            <p>Indien Vernast ter plaatse moet komen om de installatie opnieuw op te starten, worden kosten in rekening gebracht afhankelijk van de omvang en complexiteit van de taak, inclusief eventuele vervoerskosten, met een minimum van 125,00 euro excl. btw. Deze kosten zijn van toepassing indien de noodzaak tot heropstart veroorzaakt is door omstandigheden die buiten de functionaliteit of kwaliteit van het gehuurde materieel liggen, zoals handelingen of nalatigheden van de Huurder of externe factoren. Deze kosten worden apart gefactureerd en zijn onafhankelijk van de standaard huurkosten.</p>
          </article>

          <article id="art4a">
            <h2><em>Artikel 4A</em>Service voor Bouwdroging op Maat</h2>
            <h3>Reservering en Inspectie op Locatie</h3>
            <p>Bij het reserveren van onze bouwdrogingsservice, garandeert Vernast een deskundige en op maat gemaakte aanpak. Dit proces begint met een gedetailleerde inspectie op locatie door een van onze gekwalificeerde experts. Gebaseerd op deze inspectie, wordt een gepersonaliseerd advies uitgebracht voor uw specifieke behoeften aan bouwdroging.</p>
            <h3>Installatie na Advies</h3>
            <p>Wij komen altijd volledig uitgerust ter plaatse om, direct na het verlenen van ons advies, over te gaan tot de installatie van het benodigde huurmaterieel. Dit zorgt voor een efficiënte en snelle service. Echter, indien de klant na het ontvangen van ons advies en het opmaken van de bestelbon besluit om een ander tijdstip voor de installatie overeen te komen, kunnen wij deze flexibiliteit bieden.</p>
            <h3>Bouwinspectie en Adviesprocedure</h3>
            <p>Mocht u, na het ontvangen van ons op maat gemaakte advies, besluiten om niet verder te gaan met de voorgestelde bouwdroging, zijn bepaalde kosten verschuldigd. Dit betreft de transportkosten en eventuele kosten gerelateerd aan de inspectie. Deze kosten zijn van toepassing, tenzij anders overeengekomen in uw contract. Deze regeling zorgt ervoor dat wij onze klanten continu van een professionele en kwalitatief hoogwaardige service kunnen voorzien.</p>
          </article>

          <article id="art5">
            <h2><em>Artikel 5</em>Huurperiode en Beëindiging</h2>
            <h3>Aanvang Huurperiode</h3>
            <p>De huurperiode begint op de afgesproken startdatum, of op het moment dat Vernast het Huurmaterieel beschikbaar stelt of levert, afhankelijk van wat eerder plaatsvindt.</p>
            <h3>Einde Huurperiode</h3>
            <p>De huurperiode eindigt op de afgesproken einddatum, of op het moment dat:</p>
            <ol type="a">
              <li>Het Huurmaterieel is geretourneerd door de Huurder en een ontvangstbevestiging is uitgegeven door Vernast.</li>
              <li>Het Huurmaterieel wordt opgehaald door Vernast, conform de voorwaarden in de afmelding. Indien de overeengekomen huurtermijn is verstreken en Vernast niet in staat is om het Huurmaterieel tijdig op te halen, wordt van de Huurder verwacht dat het Huurmaterieel gereed is voor ophaling en dat er vanaf dat moment geen verder gebruik van wordt gemaakt. Indien er na het verstrijken van de huurtermijn toch gebruik van het Huurmaterieel wordt gemaakt en dit wordt geconstateerd, worden extra kosten in rekening gebracht bij de Huurder.</li>
            </ol>
            <h3>Open-einde Overeenkomsten</h3>
            <p>Als er geen specifieke einddatum is overeengekomen, eindigt de Overeenkomst op de datum vermeld in de afmelding.</p>
            <h3>Procedure voor Afmelding</h3>
            <p>De Huurder dient het Huurmaterieel af te melden via e-mail, met de volgende informatie: contactgegevens, contractnummer, omschrijving van het Huurmaterieel, gewenste einddatum, ophaallocatie, contactpersoon en instructies voor de chauffeur.</p>
            <h3>Gedeeltelijke Afmelding</h3>
            <p>Bij meerdere gehuurde items kan de Huurder een gedeeltelijke afmelding doen. Extra kosten die hieruit voortvloeien zijn voor rekening van de Huurder. De Overeenkomst blijft geldig voor het resterende Huurmaterieel tot de officiële einddatum.</p>
            <h3>Minimum Aanmeldperiode</h3>
            <p>Tussen de afmelding en de gewenste einddatum moet minimaal één Werkdag zitten. De gewenste einddatum mag niet eerder zijn dan de oorspronkelijk overeengekomen einddatum, tenzij Schriftelijk anders overeengekomen.</p>
            <h3>Verzuim bij Niet-teruggave</h3>
            <p>Als het Huurmaterieel niet op de overeengekomen datum is geretourneerd of correct beschikbaar is gesteld, is de Huurder direct in verzuim, tenzij er aangifte van diefstal is gedaan.</p>
            <h3>Niet-opgehaald Huurmaterieel</h3>
            <p>Als de Huurder nalaat het Huurmaterieel op te halen, blijven de (betalings)verplichtingen gelden.</p>
            <h3>Voortijdige Beëindiging</h3>
            <p>Vroegtijdige afmelding of teruggave van het Huurmaterieel ontslaat de Huurder niet van de verplichting tot betaling tot het einde van de afgesproken huurperiode, tenzij Schriftelijk anders overeengekomen.</p>
            <h3>Onderbrekingen in Huurperiode</h3>
            <p>De huurperiode wordt niet onderbroken door (vorst)verlet, weekenden of feest- en vakantiedagen, tenzij Schriftelijk anders is overeengekomen.</p>
          </article>

          <article id="art6">
            <h2><em>Artikel 6</em>Ophalen en Levering van Huurmaterieel, Risico-overgang en Leveringsdetails</h2>
            <h3>Ophaalplicht en Leveringsverantwoordelijkheid</h3>
            <p>Tenzij anders overeengekomen, haalt de Huurder het Huurmaterieel op bij een locatie van Vernast, of Vernast levert het Huurmaterieel af op een overeengekomen locatie.</p>
            <h3>Identificatie en Leveringsbevestiging</h3>
            <p>Bij het ophalen dient de Huurder of diens vertegenwoordiger zich te identificeren. De definitieve leveringsdatum en -tijd worden bevestigd via een Google Agenda-uitnodiging. Een SMS wordt ongeveer 30 minuten voor aankomst verzonden.</p>
            <h3>Leveringstermijnen en Communicatie</h3>
            <p>De geselecteerde leveringsdatum is indicatief. Vernast streeft ernaar om binnen 72 uur te leveren. Op de leveringsdag wordt de verwachte aankomsttijd gecommuniceerd, rekening houdend met externe factoren.</p>
            <h3>Installatie en Vochtmeting</h3>
            <p>Tijdens de installatie voert Vernast een gedetailleerde vochtmeting uit, waarvan de resultaten op de bestel-/afleverbon worden vastgelegd. Foto’s van deze metingen zijn op aanvraag beschikbaar.</p>
            <h3>Technische Ondersteuning</h3>
            <p>Deskundige technici bieden advies over het drogingsproces. Voor complexe vragen is ons bouwkundige team per e-mail bereikbaar.</p>
            <h3>Aflever-/Bestelbon en Ophalingsprocedure</h3>
            <p>Bij zowel levering als ophaling wordt een aflever-/bestelbon opgesteld, die door de Huurder of diens vertegenwoordiger ondertekend dient te worden. De definitieve ophalingsdatum en -tijd worden eveneens bevestigd via een Google Agenda-uitnodiging.</p>
            <h3>Overgang van Risico</h3>
            <p>Het risico gaat over op de Huurder op het moment van overhandiging bij ophaling, of bij aflevering op de overeengekomen locatie.</p>
            <h3>Afwijkingen in Leveringstermijnen</h3>
            <p>Bij overschrijding van de leveringstermijn wordt de Huurder verzocht Vernast schriftelijk en gedetailleerd in te lichten. Vernast spant zich in om binnen 48 uur alsnog te leveren. Indien de levering na deze termijn nog niet heeft plaatsgevonden, heeft de Huurder het recht de Overeenkomst te ontbinden.</p>
            <h3>Gedeeltelijke Levering en Bereikbaarheid</h3>
            <p>Vernast kan kiezen voor gedeeltelijke levering of wachten tot de volledige bestelling gereed is. De Huurder moet zorgen dat de afleverlocatie toegankelijk is. Extra kosten door ontoegankelijkheid of afwezigheid van een bevoegd persoon zijn voor rekening van de Huurder.</p>
          </article>

          <article id="art7">
            <h2><em>Artikel 7</em>Inspectie, Gebreken en Meldingen door de Huurder</h2>
            <h3>Initiële Inspectie en Melding</h3>
            <p>Direct na ontvangst moet de Huurder het Huurmaterieel controleren op zichtbare Gebreken. Eventuele Gebreken dienen genoteerd te worden op de afleverbon of binnen 24 uur na ontvangst Schriftelijk en gedetailleerd gemeld te worden aan Vernast. Het Huurmaterieel wordt verondersteld in goede staat en conform de Overeenkomst te zijn geleverd, tenzij anders aangegeven op de afleverbon of binnen de genoemde termijn gemeld.</p>
            <h3>Gebreken Tijdens Huurperiode</h3>
            <p>Indien een Gebrek gedurende de huurperiode aan het licht komt, dient de Huurder Vernast hierover Schriftelijk en gespecificeerd binnen 48 uur na ontdekking in te lichten. Vernast zal zich inspannen om het Gebrek binnen een redelijke termijn te herstellen of vervangend Huurmaterieel te leveren.</p>
            <h3>Verval van Vorderingsrecht</h3>
            <p>Het recht van de Huurder om claims jegens Vernast in te dienen op basis van Gebreken vervalt indien:</p>
            <ol>
              <li>De melding van het Gebrek niet binnen de gestelde termijnen of op de aangegeven wijze gedaan is.</li>
              <li>De Huurder onvoldoende medewerking verleent aan het onderzoek naar de klacht, of Vernast niet in staat stelt om het Gebrek te herstellen of te vervangen.</li>
              <li>Het Huurmaterieel onjuist of onder ongeschikte omstandigheden is gebruikt of onderhouden.</li>
              <li>De Huurder zonder voorafgaande Schriftelijke toestemming van Vernast reparaties of wijzigingen heeft uitgevoerd of laten uitvoeren.</li>
              <li>Het Huurmaterieel na het ontdekken van de Gebreken in gebruik is genomen of het gebruik is voortgezet.</li>
            </ol>
          </article>

          <article id="art8">
            <h2><em>Artikel 8</em>Teruggave van Huurmaterieel en Overdracht van Risico</h2>
            <h3>Voorwaarden voor Teruggave</h3>
            <p>De Huurder is verplicht het Huurmaterieel schoon, geordend en in dezelfde staat als bij ontvangst, rekening houdend met normale slijtage, terug te geven aan Vernast, inclusief alle sleutels, Gegevens en accessoires.</p>
            <h3>Ophaling door Vernast</h3>
            <p>Als overeengekomen is dat Vernast het Huurmaterieel ophaalt, zal dit naar verwachting plaatsvinden op de afgesproken of afgemelde datum, gewoonlijk tussen 08.00 en 20.00 uur.</p>
            <h3>Bereikbaarheid en Beschikbaarheid bij Ophaling</h3>
            <p>De Huurder zorgt ervoor dat het Huurmaterieel klaar is voor transport op de afgesproken locatie en gemakkelijk toegankelijk is. Als aan deze voorwaarden niet is voldaan, kan Vernast alsnog besluiten het Huurmaterieel mee te nemen, met eventuele extra kosten voor de Huurder.</p>
            <h3>Verantwoordelijkheid van de Huurder tot Ophaling</h3>
            <p>Tot het moment van ophaling door Vernast, maar maximaal twee volledige Werkdagen na afloop van de huurperiode, is de Huurder verantwoordelijk voor het Huurmaterieel en aansprakelijk voor eventuele boetes, schade of verlies.</p>
            <h3>Teruggave op Overeengekomen Locatie</h3>
            <p>Als de Huurder het Huurmaterieel zelf ophaalt, dient het op de einddatum op de overeengekomen locatie, of bij gebrek daaraan, op de locatie waar het is opgehaald, te worden teruggebracht, tenzij Vernast schriftelijk anders heeft aangegeven. Dit kan enkel binnen de openingstijden van het betreffende filiaal.</p>
            <h3>Controle na Teruggave</h3>
            <p>Na teruggave wordt het Huurmaterieel door Vernast of een derde partij gecontroleerd. Ophaling geldt niet als een dergelijke controle. Als de Huurder aanwezig wil zijn bij de controle, moet dit bij het aangaan van de Overeenkomst worden aangegeven.</p>
            <h3>Vervuiling, Verpakking en Schadevaststelling</h3>
            <p>Indien vervuiling, verontreiniging of onjuiste verpakking wordt vastgesteld zonder dat de Huurder aanwezig is, zijn de bevindingen bindend en worden de kosten doorberekend aan de Huurder. Bij schade wordt de Huurder schriftelijk geïnformeerd en een termijn geboden voor een contra-expertise. Na deze termijn worden reparatie- of vervangingskosten doorbelast.</p>
          </article>

          <article id="art9">
            <h2><em>Artikel 9</em>Verantwoordelijkheden en Richtlijnen voor de Huurder</h2>
            <h3>Gebruiksvoorschriften</h3>
            <p>De Huurder en iedereen die het Huurmaterieel namens of onder de verantwoordelijkheid van de Huurder gebruikt, moet voldoen aan de volgende richtlijnen:</p>
            <ul>
              <li>Gebruik van het Huurmaterieel is beperkt tot België of Nederland, tenzij Schriftelijk anders overeengekomen.</li>
              <li>Het Huurmaterieel mag alleen worden gebruikt door personen met de benodigde kwalificaties, certificaten en vergunningen.</li>
              <li>Gebruik dient in overeenstemming te zijn met toepasselijke (inter)nationale wetten en regelgeving.</li>
              <li>De Huurder is verantwoordelijk voor het verkrijgen en behouden van benodigde vergunningen en goedkeuringen voor het gebruik van het Huurmaterieel.</li>
              <li>Aanpassingen aan het Huurmaterieel zijn niet toegestaan, behalve wat gebruikelijk is bij normaal gebruik.</li>
            </ul>
            <h3>Onderhoud en Reparaties</h3>
            <ul>
              <li>De Huurder moet Dagelijks Onderhoud uitvoeren. Schade als gevolg van onjuist of onvoldoende onderhoud komt voor rekening van de Huurder.</li>
              <li>Reparaties mogen alleen worden uitgevoerd door Vernast, tenzij het kleine herstellingen betreft. Indien onderhoud nodig is, wordt dit door Vernast uitgevoerd en de kosten worden aan de Huurder doorberekend.</li>
            </ul>
            <h3>Belastingen en Boetes</h3>
            <p>De Huurder is verantwoordelijk voor het betalen van alle belastingen, boetes en gerelateerde administratiekosten die voortvloeien uit het gebruik van het Huurmaterieel tijdens de huurperiode.</p>
            <h3>Subhuur en Beschikbaarstelling aan Derden</h3>
            <p>Het is de Huurder niet toegestaan het Huurmaterieel te onderverhuren of beschikbaar te stellen aan derden zonder uitdrukkelijke Schriftelijke toestemming van Vernast.</p>
            <h3>Toegang tot Huurmaterieel</h3>
            <p>De Huurder moet Vernast en aangewezen personen altijd toegang verschaffen tot het Huurmaterieel en Vernast vrijwaren van aanspraken van derden.</p>
            <h3>Instructies aan Personeel</h3>
            <p>Het personeel van Vernast is niet verplicht instructies van de Huurder op te volgen of werkzaamheden onder toezicht van de Huurder uit te voeren.</p>
            <h3>Beslaglegging en Faillissement</h3>
            <p>Bij beslaglegging, surseance van betaling of faillissement moet de Huurder de betrokken partijen onmiddellijk informeren over de rechten van Vernast en de Overeenkomst inzichtelijk maken.</p>
            <h3>Meldingsplicht bij Beslag</h3>
            <p>De Huurder dient Vernast direct Schriftelijk te informeren bij beslaglegging of claims op het Huurmaterieel en een afschrift van de beslagdocumenten te verstrekken.</p>
          </article>

          <article id="art10">
            <h2><em>Artikel 10</em>Prijsstelling en Wijzigingen</h2>
            <h3>Voorwaardelijke Prijzen</h3>
            <p>Tenzij Schriftelijk anders overeengekomen, zijn de door Vernast aangegeven prijzen onderhevig aan wijzigingen. Deze wijzigingen kunnen gebaseerd zijn op factoren zoals inflatie, marktontwikkelingen, veranderingen in de kosten van materialen, brandstoffen, of wijzigingen in wet- en regelgeving.</p>
            <h3>Prijswijzigingen na Overeenkomst</h3>
            <p>De prijzen die zijn overeengekomen in de Overeenkomst gelden specifiek voor de afgesproken prestaties. Vernast behoudt zich het recht voor om prijzen te verhogen bij meerwerk, kostenstijgingen gerelateerd aan de uitvoering van de Overeenkomst (zoals wijzigingen in transportkosten, invoerrechten, belastingen, lonen, sociale lasten, en wisselkoersen) of door aanpassingen in wetgeving.</p>
            <h3>Dag- en Weekprijzen</h3>
            <p>De dagprijzen, zoals vermeld op de website van Vernast, zijn gebaseerd op een huurperiode van maximaal 24 uur, en weekprijzen op een periode van maximaal 168 uur. Voor Huurmaterieel met een urenteller gelden andere tarieven: een dagprijs voor maximaal 8 gebruiksuren en een weekprijs voor maximaal 40 gebruiksuren. Bij overschrijding van deze limieten geldt een extra toeslag.</p>
            <h3>Weekendtarieven</h3>
            <p>De prijs voor een weekendhuur (van vrijdag tot maandag) is gebaseerd op maximaal 72 uur huur, waarbij de zondag niet wordt berekend.</p>
            <h3>Lange Huurperiodes</h3>
            <p>Voor huurperiodes langer dan vier weken zijn prijzen op aanvraag beschikbaar.</p>
            <h3>Exclusies in Huurprijzen</h3>
            <p>De aangegeven huurprijzen zijn exclusief (verplichte) accessoires, onderhoud, verbruiksmaterialen, brandstof, olie, transport, laden en lossen, milieuheffingen, reiniging en eventuele toeslagen voor schadeafkoop- en brand-/diefstalregelingen.</p>
          </article>

          <article id="art11">
            <h2><em>Artikel 11</em>Schade, verlies en aansprakelijkheid van de Huurder</h2>
            <h3>Melding van Schade</h3>
            <p>De Huurder dient elke schade aan het Huurmaterieel, opgelopen tijdens de verantwoordelijkheidsperiode, onmiddellijk na constatering, maar uiterlijk binnen 24 uur, Schriftelijk aan Vernast te melden.</p>
            <h3>Diefstal of Vermissing</h3>
            <p>Bij diefstal of vermissing van het Huurmaterieel moet de Huurder dit binnen 24 uur na ontdekking aan Vernast melden en aangifte doen bij de politie, inclusief alle relevante details van het gestolen Huurmaterieel. Een kopie van het proces-verbaal moet aan Vernast worden overhandigd.</p>
            <h3>Gevolgen van Niet-melden</h3>
            <p>Het niet doen van aangifte of het niet overleggen van het proces-verbaal wordt beschouwd als verduistering en leidt tot het verval van eventuele verzekeringsdekking of afkoopregelingen.</p>
            <h3>Einddatum Overeenkomst bij Diefstal</h3>
            <p>De datum van vermoedelijke diefstal, zoals aangegeven in het proces-verbaal, wordt beschouwd als de einddatum van de Overeenkomst voor het gestolen Huurmaterieel. De Overeenkomst blijft gelden voor ander gehuurd Huurmaterieel.</p>
            <h3>Financiële Verantwoordelijkheid bij Schade of Verlies</h3>
            <p>Bij diefstal of totaal verlies (‘total loss’) van het Huurmaterieel is de Huurder verplicht de Dagwaarde te vergoeden. Indien herstel mogelijk is, dient de Huurder de herstelkosten te dragen.</p>
            <h3>Verrekening bij Terugvinden van Vermist Materieel</h3>
            <p>Indien vermist Huurmaterieel later wordt teruggevonden en geretourneerd, is de Huurder huur verschuldigd tot aan de teruggavedatum, verminderd met de Dagwaarde van het geretourneerde Huurmaterieel.</p>
            <h3>Vaststelling van Schade en Herstelkosten</h3>
            <p>De omvang van de schade en de kosten voor herstel en reiniging worden bepaald door Vernast of een door hen aangewezen expert.</p>
            <h3>Verzekering en Aansprakelijkheid</h3>
            <p>Vernast bevestigt dat voor wettelijk verzekeringsplichtige objecten een aansprakelijkheidsverzekering is afgesloten. Niettemin is de Huurder verantwoordelijk voor:</p>
            <ul>
              <li>Schade die niet gedekt is door de verzekering vanwege wettelijke uitsluitingen.</li>
              <li>Schade veroorzaakt onder invloed van alcohol of drugs.</li>
              <li>Het eigen risico in de polis.</li>
              <li>Schade aan leidingen, kabels, of gevolgschade daarvan.</li>
              <li>Boetes en kosten gerelateerd aan het gebruik van niet-gekentekend werkmaterieel op openbare wegen.</li>
              <li>Schade buiten verkeer (werkrisico) en onder andere wettelijke uitsluitingen.</li>
            </ul>
          </article>

          <article id="art12">
            <h2><em>Artikel 12</em>Transport</h2>
            <h3>Risico bij Eigen Transport door Huurder</h3>
            <p>Wanneer de Huurder zorg draagt voor het transport, ligt het risico van verlies of beschadiging van het Huurmaterieel bij de Huurder. De Huurder dient het Huurmaterieel adequaat te verpakken en te laden/lossen conform de aard en transportwijze van het materieel.</p>
            <h3>Gebruik van Vernast Personeel</h3>
            <p>Als Vernast personeel assisteert bij laden/lossen of aankoppelen op verzoek van de Huurder, gebeurt dit op risico van de Huurder.</p>
          </article>

          <article id="art13">
            <h2><em>Artikel 13</em>Aansprakelijkheid van Vernast</h2>
            <h3>Beperkte Aansprakelijkheid</h3>
            <p>Vernasts aansprakelijkheid is beperkt tot directe schade aan zaken en personen, veroorzaakt door aantoonbare Gebreken aan het Huurmaterieel of door opzet of bewuste roekeloosheid van Vernast. Aansprakelijkheid voor indirecte schade, zoals huur van vervangende zaken, omzetverlies, en vertragingsschade, is expliciet uitgesloten.</p>
            <h3>Maximale Aansprakelijkheid</h3>
            <p>Behalve bij letselschade of opzettelijk veroorzaakte schade, is het maximale bedrag waarvoor Vernast aansprakelijk kan zijn beperkt tot het Orderbedrag of de waarde van één termijnfactuur bij lange termijnverhuur, tenzij de verzekeraar een hoger bedrag uitkeert.</p>
            <h3>Vrijwaring door Huurder</h3>
            <p>De Huurder vrijwaart Vernast tegen claims van derden gerelateerd aan het Huurmaterieel.</p>
            <h3>Verjaring van Aansprakelijkheid</h3>
            <p>Aansprakelijkheid van Vernast vervalt twaalf maanden na de datum waarop de schade is opgetreden.</p>
            <h3>Verrekening van Vorderingen</h3>
            <p>Vernast mag eventuele vorderingen van de Huurder verrekenen met vorderingen op aan de Huurder gelieerde bedrijven.</p>
          </article>

          <article id="art14">
            <h2><em>Artikel 14</em>Reservering en annulering</h2>
            <h3>Reserveringsproces</h3>
            <p>Een bindende Overeenkomst ontstaat bij het reserveren van Huurmaterieel door de Huurder.</p>
            <h3>Niet-afname bij Afhalen</h3>
            <p>Als de Huurder het gereserveerde Huurmaterieel niet afhaalt op het afgesproken tijdstip, is de volledige huurprijs verschuldigd.</p>
            <h3>Annuleringskosten bij Afhalen</h3>
            <p>Bij annulering vóór terbeschikkingstelling van het Huurmaterieel, gelden de volgende annuleringskosten:</p>
            <ul>
              <li>60% van het netto Orderbedrag bij annulering tussen 59 en 30 dagen vóór de afgesproken datum.</li>
              <li>70% van het netto Orderbedrag bij annulering tussen 29 en 10 dagen vóór de afgesproken datum.</li>
              <li>80% van het netto Orderbedrag bij annulering na de 10e dag voor de afgesproken datum.</li>
            </ul>
            <h3>Niet-afname bij Levering</h3>
            <p>Indien de klant kiest voor levering van het Huurmaterieel en de levering niet kan plaatsvinden door redenen die aan de klant zijn toe te schrijven (zoals ontoegankelijkheid van de leveringslocatie, niet aanwezig zijn van een bevoegde persoon, of het niet voldoen aan overige overeengekomen leveringsvoorwaarden), is de Huurder verantwoordelijk voor de volledige huurprijs en eventuele bijkomende kosten zoals extra transportkosten.</p>
            <h3>Verantwoordelijkheid en Kosten bij Leveringsfalen</h3>
            <p>De Huurder is verantwoordelijk voor het creëren van geschikte omstandigheden voor een succesvolle levering. Indien Vernast door toedoen van de Huurder het Huurmaterieel niet kan leveren, zijn alle daarmee gepaard gaande kosten, waaronder tweede leveringspogingen of extra transportkosten, voor rekening van de Huurder.</p>
          </article>

          <article id="art15">
            <h2><em>Artikel 15</em>Facturatie, Betaling en Gevolgen van Verzuim</h2>
            <h3>Facturatieproces</h3>
            <p>Facturatie door Vernast gebeurt op basis van vooruitbetaling. Facturen kunnen naar keuze van Vernast per post of elektronisch naar het bij Vernast bekende e-mailadres van de Huurder worden verzonden.</p>
            <h3>Kredietbeperking en Waarborgen</h3>
            <p>Vernast behoudt zich het recht voor om een kredietbeperkingstoeslag te berekenen en/of andere waarborgen te verlangen van de Huurder.</p>
            <h3>Betalingsvoorwaarden</h3>
            <p>Betalingen moeten plaatsvinden zoals gespecificeerd in de Offerte, Overeenkomst, of op de factuur van Vernast, zonder enige aftrek of verrekening. Tenzij anders vermeld, dienen betalingen binnen 14 dagen na factuurdatum te geschieden. De administratie van Vernast dient als bewijs van verrichte diensten en verschuldigde betalingen, tenzij de Huurder tegenbewijs levert.</p>
            <h3>Verzuim en Gevolgen</h3>
            <p>Indien betaling niet binnen de gestelde termijn plaatsvindt, is de Huurder van rechtswege in verzuim. Een laatste termijn van minimaal 14 dagen wordt geboden voor betaling. Bij uitblijven van betaling zijn wettelijke rente en (buitengerechtelijke) incassokosten verschuldigd.</p>
            <h3>Kosten bij Ingebrekestelling</h3>
            <p>De Huurder is verantwoordelijk voor alle daadwerkelijke kosten die Vernast maakt voor inning en verzekering van haar rechten, inclusief gerechtelijke en buitengerechtelijke incassokosten, schade, en rente.</p>
            <h3>Incassokosten</h3>
            <p>Gerechtelijke en buitengerechtelijke incassokosten omvatten kosten van incassobureaus, advocaten en deurwaarders. Deze kosten worden vastgesteld op minimaal 15% van het totaal verschuldigde bedrag, met een minimum van €350.</p>
            <h3>Toewijzing van Betalingen</h3>
            <p>Betalingen door de Huurder worden eerst aangewend voor rente en kosten, en vervolgens voor de oudste openstaande facturen. Bij overschrijding van de betalingstermijn vervallen kortingen en mag Vernast de volledige huurprijs opeisen.</p>
            <h3>Faillissement en Beslaglegging</h3>
            <p>Bij faillissementsaanvraag, (voorlopige) surseance van betaling, bedrijfsoverdracht, stillegging of beslaglegging op het vermogen van de Huurder, is de Huurder in verzuim. Vernast mag de Overeenkomst dan geheel of gedeeltelijk ontbinden zonder ingebrekestelling of rechterlijke tussenkomst.</p>
            <h3>Rechten bij Ontbinding</h3>
            <p>Bij ontbinding door Vernast, of de mogelijkheid daartoe, heeft Vernast recht op schadevergoeding en blijven overige rechten behouden. De Huurder heeft geen recht op vergoeding bij dergelijke ontbinding.</p>
            <h3>Beperking op Tussentijdse Beëindiging</h3>
            <p>Tussentijdse beëindiging van de Overeenkomst door de Huurder is niet mogelijk zonder uitdrukkelijke Schriftelijke toestemming van Vernast.</p>
          </article>

          <article id="art16">
            <h2><em>Artikel 16</em>Overmacht</h2>
            <h3>Opschorting bij Overmacht</h3>
            <p>Als Vernast door overmacht niet aan haar verplichtingen jegens de Huurder kan voldoen, wordt de uitvoering van de Overeenkomst opgeschort zolang de overmachtssituatie voortduurt, met een maximum van twee maanden. Na deze periode hebben beide Partijen het recht om de Overeenkomst geheel of gedeeltelijk Schriftelijk te ontbinden.</p>
            <h3>Uitsluiting van Schadevergoeding</h3>
            <p>Vernast is niet aansprakelijk voor schadevergoeding aan de Huurder indien het niet nakomen van verplichtingen te wijten is aan overmacht.</p>
            <h3>Definitie van Overmacht</h3>
            <p>Overmacht omvat alle omstandigheden buiten de macht van Vernast die de nakoming van de Overeenkomst onredelijk maken, waaronder stakingen, oorlog, natuurrampen, epidemieën, tekorten aan grondstoffen, transportbelemmeringen, extreem weer, brand, machinestoringen, leveranciersproblemen, en overheidsmaatregelen.</p>
          </article>

          <article id="art17">
            <h2><em>Artikel 17</em>Waarborgsom</h2>
            <h3>Vereiste van Waarborgsom</h3>
            <p>De Huurder is, tenzij anders Schriftelijk overeengekomen, een door Vernast bepaalde waarborgsom verschuldigd, te voldoen voor de terbeschikkingstelling van het Huurmaterieel. De hoogte wordt bepaald op basis van de huurperiode en de waarde van het Huurmaterieel.</p>
            <h3>Doel van de Waarborgsom</h3>
            <p>De waarborgsom dient niet als vooruitbetaling op de huurprijs of als afkoopsom voor risico’s zoals beschadiging, diefstal of verduistering.</p>
            <h3>Gevolgen van Niet Betalen Waarborgsom</h3>
            <p>Indien de waarborgsom niet tijdig wordt betaald, mag Vernast de Overeenkomst eenzijdig beëindigen, met behoud van het recht op schadevergoeding.</p>
            <h3>Teruggave en Verrekening</h3>
            <p>Bij beëindiging van de Overeenkomst mag Vernast eventuele verschuldigde bedragen verrekenen met de waarborgsom. Restitutie vindt plaats nadat is vastgesteld dat de Huurder aan alle verplichtingen heeft voldaan.</p>
          </article>

          <article id="art18">
            <h2><em>Artikel 18</em>Informatie en intellectuele Eigendomsrechten</h2>
            <h3>Nauwkeurigheid van Gegevens</h3>
            <p>Vernast streeft naar correctheid en volledigheid van de Gegevens, maar biedt geen garantie hierop en is niet aansprakelijk voor onjuistheden in gegevens van derden, zoals fabrikanten.</p>
            <h3>Intellectuele Eigendomsrechten</h3>
            <p>De intellectuele eigendomsrechten op de Gegevens blijven bij de oorspronkelijke rechthebbenden. Zonder uitdrukkelijke Schriftelijke toestemming van Vernast mogen deze niet gekopieerd of aan derden verstrekt worden en moeten op verzoek worden geretourneerd.</p>
            <h3>Gebruik van Merknamen en Logo’s</h3>
            <p>Merknamen, handelsnamen en logo’s van Vernast op het Huurmaterieel mogen niet worden verborgen, beschadigd of verwijderd door de Huurder.</p>
            <h3>Gebruik van Merk voor Commerciële Doeleinden</h3>
            <p>Het is de Huurder verboden om de merknaam, handelsnaam of het logo van Vernast te gebruiken voor eigen commerciële doeleinden zonder voorafgaande Schriftelijke toestemming.</p>
          </article>

          <article id="art19">
            <h2><em>Artikel 19</em>Verzekeringen en Risicoafdekking</h2>
            <h3>Verantwoordelijkheid voor Schade en Verdwijning</h3>
            <p>Conform Artikel 11 is de Huurder aansprakelijk voor schade aan of verlies van het Huurmaterieel tijdens de huurperiode. Deze aansprakelijkheid kan de Huurder beperken door een of beide van de volgende regelingen aan te gaan, afhankelijk van de specifieke Overeenkomst.</p>
            <h3>Toepasselijkheid van Afkoopregelingen</h3>
            <p>Niet alle Huurmaterieel is in aanmerking voor afkoopregelingen. Wanneer afkoopregelingen mogelijk zijn, zijn deze meestal verplicht. Deze regelingen beperken Vernasts recht op schadeverhaal tot het gespecificeerde eigen risico.</p>
            <h3>Details van Regelingen</h3>
            <p>Voor specifieke details en tarieven van de regelingen verwijst Vernast naar haar ‘Voorwaarden Schadeafkoop- en Brand-/Diefstalregeling’, beschikbaar bij elke vestiging en online.</p>
            <h3>Schadeafkoopregeling</h3>
            <p>Deze regeling beperkt het verhaalsrecht van Vernast voor schade aan het Huurmaterieel, met uitzondering van schade door brand, diefstal, ondeskundig gebruik, opzet of nalatigheid. De toeslag bedraagt 10% van de huurprijs (tenzij anders overeengekomen), met een eigen risico afhankelijk van de nieuwwaarde van het materieel.</p>
            <h3>Brand-/Diefstalregeling</h3>
            <p>Deze regeling is specifiek voor bepaalde Huurders en beperkt het verhaalsrecht van Vernast voor schade door brand of diefstal, uitgezonderd schade door opzet of roekeloosheid en enkele andere uitzonderingen. De toeslag is een percentage van het huurbedrag, met een eigen risico afhankelijk van de nieuwwaarde.</p>
            <h3>Eisen voor Eigen Verzekering</h3>
            <p>Indien de Huurder eigen verzekering voor het Huurmaterieel afsluit, moet Vernast als begunstigde worden opgenomen of een dekkingsbevestiging overleggen. Eigen risico’s en dekkingsbeperkingen beïnvloeden de aansprakelijkheid van de Huurder niet.</p>
            <h3>Rechten aan CAR-Verzekering</h3>
            <p>Bij een CAR-verzekering van de Huurder, verklaart de Huurder dat Vernast als mede-verzekerde rechten mag ontlenen aan deze verzekering. Eventuele eigen risico’s zijn voor rekening van de Huurder.</p>
          </article>

          <article id="art20">
            <h2><em>Artikel 20</em>Privacybeleid</h2>
            <h3>Gebruik van Persoonsgegevens</h3>
            <p>De Huurder stemt ermee in dat Vernast persoonsgegevens gebruikt voor het aangaan en uitvoeren van de Overeenkomst, het innen van betalingen, fraudepreventie, en het nakomen van wettelijke verplichtingen.</p>
            <h3>Naleving van AVG</h3>
            <p>Beide Partijen zullen zich houden aan hun verplichtingen onder de AVG. Vernasts privacybeleid is beschikbaar op de website en kan van tijd tot tijd wijzigen. Vragen of verzoeken omtrent privacy kunnen gericht worden aan <a href="mailto:info@vernast.be">info@vernast.be</a>.</p>
            <h3>Garanties Betreffende Persoonsgegevens</h3>
            <p>Beide Partijen garanderen dat de gedeelde persoonsgegevens correct, niet overmatig en rechtmatig zijn en geen inbreuk maken op de rechten van derden.</p>
            <h3>Informatieplicht Huurder</h3>
            <p>Indien Vernast dit nodig acht voor de uitvoering van de Overeenkomst, dient de Huurder Vernast Schriftelijk te informeren over hoe hij aan de AVG-verplichtingen voldoet.</p>
            <h3>Geolokalisatie en Trackers</h3>
            <p>Huurmaterieel kan zijn uitgerust met geo-lokalisatiesystemen of trackers voor diefstalpreventie en fraudebestrijding. Locatiegegevens zijn niet toegankelijk voor derden, maar kunnen door Vernast worden gebruikt in geval van diefstal of fraude.</p>
          </article>

          <article id="art21">
            <h2><em>Artikel 21</em>Slotbepalingen en Jurisdictie</h2>
            <h3>Geschillen en Toepasselijk Recht</h3>
            <p>Geschillen voortvloeiend uit de Overeenkomst worden berecht door de bevoegde rechter in Antwerpen onder het Belgische recht, tenzij Vernast anders besluit.</p>
            <h3>Dagvaarding Huurder</h3>
            <p>Vernast behoudt zich het recht voor om de Huurder te dagvaarden in het arrondissement waar Vernast kantoor houdt.</p>
            <h3>Afwijking bij Bepaalde Huurders</h3>
            <p>Voor geschillen met bepaalde Huurders is de rechter bevoegd die volgens algemeen recht kennis mag nemen van het geschil.</p>
          </article>
        </div>
      </div>
    </section>

    <V3Footer />
  </div>
);

export default AlgemeneVoorwaardenPage;

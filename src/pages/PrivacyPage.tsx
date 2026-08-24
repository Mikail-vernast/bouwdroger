import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import { SEO } from "@/data/seo";
import "@/styles/privacy.css";
import "@/styles/privacy-fixes.css";

/**
 * Privacybeleid — 1:1 transcription of the Claude Design handoff
 * (Privacy.html). The design's own header/footer are replaced by the shared
 * <V3Header>/<V3Footer>; everything else is the design's markup, scoped under
 * `.pv-page` (see src/styles/privacy.css). Assets resolve from /vernast/*.webp.
 */
const PrivacyPage = () => (
  <div className="pv-page">
    <PageMeta
      {...SEO.privacy}
      path="/privacy"
      jsonLd={[
        organizationSchema(),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ]),
      ]}
    />

    <V3Header lightAfter={420} />

    {/* ================= HERO ================= */}
    <section className="lhero">
      <div className="wrap lh-grid">
        <div className="lh-copy">
          <span className="kick">Juridisch</span>
          <h1>Privacybeleid</h1>
          <p>Vernast gaat zorgvuldig om met uw persoonsgegevens, conform de AVG (GDPR). Hier leest u welke gegevens wij verwerken, waarvoor en welke rechten u heeft. Vragen? Mail <a href="mailto:info@vernast.be" style={{ color: "#fff", fontWeight: 600 }}>info@vernast.be</a> of bel <a href="tel:+3236899065" style={{ color: "#fff", fontWeight: 600 }}>03 689 90 65</a>.</p>
        </div>
        <div className="lh-vis"><img src="/vernast/team-tools.webp" alt="Het Vernast-team" loading="lazy" decoding="async" /></div>
      </div>
    </section>

    {/* ================= LEGAL ================= */}
    <section className="legal">
      <div className="wrap">
        <nav className="lnav" aria-label="Onderwerpen">
          <div className="lt">Alle onderwerpen</div>
          <a href="#p1"><i>Art. 1</i> Wie wij zijn</a>
          <a href="#p2"><i>Art. 2</i> Welke gegevens wij verwerken</a>
          <a href="#p3"><i>Art. 3</i> Waarvoor wij ze gebruiken</a>
          <a href="#p4"><i>Art. 4</i> Rechtsgronden</a>
          <a href="#p5"><i>Art. 5</i> Delen met derden</a>
          <a href="#p6"><i>Art. 6</i> Bewaartermijnen</a>
          <a href="#p7"><i>Art. 7</i> Cookies</a>
          <a href="#p8"><i>Art. 8</i> Beveiliging</a>
          <a href="#p9"><i>Art. 9</i> Geolokalisatie en trackers</a>
          <a href="#p10"><i>Art. 10</i> Uw rechten</a>
          <a href="#p11"><i>Art. 11</i> Klachten</a>
          <a href="#p12"><i>Art. 12</i> Wijzigingen</a>
          <a href="#p13"><i>Art. 13</i> Contact</a>
        </nav>
        <div className="lcol">
          <p className="meta">Laatst bijgewerkt: augustus 2026</p>
          <article id="p1">
            <h2><em>Artikel 1</em>Wie wij zijn</h2>
            <p>Vernast (VRNST) verhuurt bouwdrogers, ventilatoren, bouwkachels en toebehoren, en levert bijhorende droogdiensten. Vernast is verwerkingsverantwoordelijke voor de persoonsgegevens die via deze website, telefonisch, per e-mail of op locatie worden verzameld.</p>
            <p>Contact: <a href="mailto:info@vernast.be">info@vernast.be</a> · <a href="tel:+3236899065">03 689 90 65</a>.</p>
          </article>
          <article id="p2">
            <h2><em>Artikel 2</em>Welke gegevens wij verwerken</h2>
            <h3>Identificatie- en contactgegevens</h3>
            <p>Naam, voornaam, adres, e-mailadres, telefoonnummer en, voor professionele klanten, bedrijfsnaam en btw-nummer.</p>
            <h3>Boekings- en projectgegevens</h3>
            <p>Gegevens die u invult in de calculator en tijdens het boeken: oppervlakte, plafondhoogte, situatie (nieuwbouw, waterschade, renovatie, kelder), leveradres, gewenste lever- en installatiemomenten, gekozen opties en toebehoren.</p>
            <h3>Betaal- en facturatiegegevens</h3>
            <p>Factuurgegevens, betaalstatus en betaalmethode. Uw betaling verloopt via een externe, beveiligde betaalprovider; wij slaan zelf geen kaart- of rekeninggegevens op.</p>
            <h3>Metings- en servicegegevens</h3>
            <p>Vochtmetingen voor en na de droging, aflever- en ophaalbonnen, en communicatie met onze klantenservice.</p>
            <h3>Websitegegevens</h3>
            <p>Technische gegevens zoals IP-adres, browsertype en surfgedrag op onze website (zie artikel 7, Cookies).</p>
          </article>
          <article id="p3">
            <h2><em>Artikel 3</em>Waarvoor wij ze gebruiken</h2>
            <ul>
              <li>Het opmaken van offertes en het sluiten en uitvoeren van de huurovereenkomst (levering, installatie, opvolging en ophaling).</li>
              <li>Het inplannen en bevestigen van lever- en installatiemomenten, inclusief herinneringen per e-mail of sms.</li>
              <li>Facturatie, betalingsopvolging en het innen van openstaande bedragen.</li>
              <li>Het opstellen van vochtmetingsrapporten wanneer u die optie kiest.</li>
              <li>Klantenservice: vragen, storingen, verlengingen en klachten.</li>
              <li>Fraudepreventie en beveiliging van ons huurmaterieel.</li>
              <li>Het naleven van wettelijke verplichtingen (boekhouding, fiscaliteit).</li>
              <li>Met uw toestemming: nieuwsbrieven of commerciële communicatie, u kunt zich altijd uitschrijven.</li>
            </ul>
          </article>
          <article id="p4">
            <h2><em>Artikel 4</em>Rechtsgronden</h2>
            <p>Wij verwerken uw gegevens op basis van: de uitvoering van de overeenkomst (art. 6.1.b AVG), wettelijke verplichtingen (art. 6.1.c AVG), ons gerechtvaardigd belang (art. 6.1.f AVG, zoals fraudepreventie en de bescherming van ons materieel) en, waar vereist, uw toestemming (art. 6.1.a AVG).</p>
          </article>
          <article id="p5">
            <h2><em>Artikel 5</em>Delen met derden</h2>
            <p>Wij verkopen uw gegevens nooit. Wij delen ze enkel met partijen die nodig zijn voor onze dienstverlening:</p>
            <ul>
              <li>Betaalproviders voor de verwerking van online betalingen.</li>
              <li>IT- en hostingleveranciers van onze website en planningssystemen.</li>
              <li>Transportpartners voor levering en ophaling, indien ingeschakeld.</li>
              <li>Boekhouder en, waar wettelijk verplicht, overheidsinstanties.</li>
              <li>Uw verzekeraar of makelaar, uitsluitend op uw verzoek (bv. bij een meetrapport voor waterschade).</li>
            </ul>
            <p>Met verwerkers sluiten wij verwerkersovereenkomsten conform de AVG. Gegevens worden in principe binnen de EER verwerkt.</p>
          </article>
          <article id="p6">
            <h2><em>Artikel 6</em>Bewaartermijnen</h2>
            <p>Wij bewaren persoonsgegevens niet langer dan nodig: offertegegevens tot 1 jaar na de offerte, contract- en facturatiegegevens 7 jaar (wettelijke boekhoudplicht), meetrapporten 5 jaar, en klantenservicecommunicatie tot 2 jaar na afsluiting van het dossier. Daarna worden gegevens verwijderd of geanonimiseerd.</p>
          </article>
          <article id="p7">
            <h2><em>Artikel 7</em>Cookies</h2>
            <p>Onze website gebruikt noodzakelijke cookies (voor onder meer uw boekingssessie en winkelmand) en, enkel met uw toestemming, analytische en marketingcookies. U kunt uw voorkeuren op elk moment aanpassen via uw browserinstellingen of de cookie-instellingen op de website.</p>
          </article>
          <article id="p8">
            <h2><em>Artikel 8</em>Beveiliging</h2>
            <p>Wij nemen passende technische en organisatorische maatregelen om uw gegevens te beschermen tegen verlies, misbruik en ongeoorloofde toegang: versleutelde verbindingen (TLS), toegangsbeheer, en beperkte toegang tot persoonsgegevens voor medewerkers die ze nodig hebben voor hun functie.</p>
          </article>
          <article id="p9">
            <h2><em>Artikel 9</em>Geolokalisatie en trackers</h2>
            <p>Ons huurmaterieel kan uitgerust zijn met geo-lokalisatiesystemen of trackers voor diefstalpreventie en fraudebestrijding. Locatiegegevens zijn niet toegankelijk voor derden, maar kunnen door Vernast worden gebruikt in geval van diefstal of fraude, en worden na afloop van de huurperiode niet langer dan nodig bewaard.</p>
          </article>
          <article id="p10">
            <h2><em>Artikel 10</em>Uw rechten</h2>
            <p>Onder de AVG heeft u het recht op inzage, verbetering, verwijdering, beperking van de verwerking, overdraagbaarheid van uw gegevens en bezwaar tegen verwerking op basis van gerechtvaardigd belang of voor direct marketing. Gaf u toestemming, dan kunt u die op elk moment intrekken.</p>
            <p>Stuur uw verzoek naar <a href="mailto:info@vernast.be">info@vernast.be</a>. Wij reageren binnen 30 dagen en kunnen u vragen zich te identificeren.</p>
          </article>
          <article id="p11">
            <h2><em>Artikel 11</em>Klachten</h2>
            <p>Niet tevreden over hoe wij met uw gegevens omgaan? Laat het ons eerst weten via <a href="mailto:info@vernast.be">info@vernast.be</a>. U heeft daarnaast altijd het recht een klacht in te dienen bij de Gegevensbeschermingsautoriteit (Drukpersstraat 35, 1000 Brussel, <a href="https://www.gegevensbeschermingsautoriteit.be" target="_blank" rel="noopener">gegevensbeschermingsautoriteit.be</a>).</p>
          </article>
          <article id="p12">
            <h2><em>Artikel 12</em>Wijzigingen</h2>
            <p>Vernast kan dit privacybeleid aanpassen, bijvoorbeeld bij nieuwe diensten of gewijzigde wetgeving. De meest recente versie staat altijd op deze pagina, met bovenaan de datum van de laatste update.</p>
          </article>
          <article id="p13">
            <h2><em>Artikel 13</em>Contact</h2>
            <p>Vragen over dit privacybeleid of over uw gegevens? Mail <a href="mailto:info@vernast.be">info@vernast.be</a>, bel <a href="tel:+3236899065">03 689 90 65</a>, of stel uw vraag via de <Link to="/klantservice">klantenservice</Link>.</p>
          </article>
        </div>
      </div>
    </section>

    <V3Footer />
  </div>
);

export default PrivacyPage;

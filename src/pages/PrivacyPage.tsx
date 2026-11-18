import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import { useSeo } from "@/data/seo";
import { CONTACT } from "@/lib/site";
import { useCopy, useLokaalPad, type Copy } from "@/i18n/useTaal";
import "@/styles/privacy.css";
import "@/styles/privacy-fixes.css";

/**
 * Privacybeleid — 1:1 transcription of the Claude Design handoff
 * (Privacy.html). The design's own header/footer are replaced by the shared
 * <V3Header>/<V3Footer>; everything else is the design's markup, scoped under
 * `.pv-page` (see src/styles/privacy.css). Assets resolve from /vernast/*.webp.
 *
 * De Franse tekst is een getrouwe vertaling van de Nederlandse, artikel voor
 * artikel: niets toegevoegd, niets geschrapt. Wie de Nederlandse tekst wijzigt,
 * past de Franse mee aan — en laat die door een jurist nalezen, want in een
 * geschil telt elke formulering.
 */

const MAIL = <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>;
const HERO_LINK = { color: "#fff", fontWeight: 600 } as const;

type Teksten = {
  kicker: string;
  h1: string;
  intro: ReactNode;
  heroAlt: string;
  crumb: string;
  navLabel: string;
  navTitel: string;
  artikel: string;
  /** De titels van de dertien artikels, in volgorde: inhoudstafel én koppen. */
  titels: string[];
  bijgewerkt: string;
  /** De artikels zelf; `lp` voor de interne link in het laatste. */
  inhoud: (lp: (pad: string) => string) => ReactNode[];
};

const COPY = {
  nl: {
    kicker: "Juridisch",
    h1: "Privacybeleid",
    intro: (
      <>
        Vernast gaat zorgvuldig om met uw persoonsgegevens, conform de AVG (GDPR). Hier leest u welke gegevens wij verwerken, waarvoor en welke rechten u heeft. Vragen? Mail <a href={`mailto:${CONTACT.email}`} style={HERO_LINK}>{CONTACT.email}</a> of bel <a href="tel:+3236899065" style={HERO_LINK}>03 689 90 65</a>.
      </>
    ),
    heroAlt: "Het Vernast-team",
    crumb: "Privacy",
    navLabel: "Onderwerpen",
    navTitel: "Alle onderwerpen",
    artikel: "Artikel",
    titels: [
      "Wie wij zijn",
      "Welke gegevens wij verwerken",
      "Waarvoor wij ze gebruiken",
      "Rechtsgronden",
      "Delen met derden",
      "Bewaartermijnen",
      "Cookies",
      "Beveiliging",
      "Geolokalisatie en trackers",
      "Uw rechten",
      "Klachten",
      "Wijzigingen",
      "Contact",
    ],
    bijgewerkt: "Laatst bijgewerkt: augustus 2026",
    inhoud: (lp) => [
      <>
        <p>Vernast (VRNST) verhuurt bouwdrogers, ventilatoren, bouwkachels en toebehoren, en levert bijhorende droogdiensten. Vernast is verwerkingsverantwoordelijke voor de persoonsgegevens die via deze website, telefonisch, per e-mail of op locatie worden verzameld.</p>
        <p>Contact: {MAIL} · <a href="tel:+3236899065">03 689 90 65</a>.</p>
      </>,
      <>
        <h3>Identificatie- en contactgegevens</h3>
        <p>Naam, voornaam, adres, e-mailadres, telefoonnummer en, voor professionele klanten, bedrijfsnaam en btw-nummer.</p>
        <h3>Boekings- en projectgegevens</h3>
        <p>Gegevens die u invult in de Calculator en tijdens het boeken: oppervlakte, plafondhoogte, situatie (nieuwbouw, waterschade, renovatie, kelder), leveradres, gewenste lever- en installatiemomenten, gekozen opties en toebehoren.</p>
        <h3>Betaal- en facturatiegegevens</h3>
        <p>Factuurgegevens, betaalstatus en betaalmethode. Uw betaling verloopt via een externe, beveiligde betaalprovider; wij slaan zelf geen kaart- of rekeninggegevens op.</p>
        <h3>Metings- en servicegegevens</h3>
        <p>Vochtmetingen voor en na de droging, aflever- en ophaalbonnen, en communicatie met onze klantenservice.</p>
        <h3>Websitegegevens</h3>
        <p>Technische gegevens zoals IP-adres, browsertype en surfgedrag op onze website (zie artikel 7, Cookies).</p>
      </>,
      <ul>
        <li>Het opmaken van offertes en het sluiten en uitvoeren van de huurovereenkomst (levering, installatie, opvolging en ophaling).</li>
        <li>Het inplannen en bevestigen van lever- en installatiemomenten, inclusief herinneringen per e-mail of sms.</li>
        <li>Facturatie, betalingsopvolging en het innen van openstaande bedragen.</li>
        <li>Het opstellen van vochtmetingsrapporten wanneer u die optie kiest.</li>
        <li>Klantenservice: vragen, storingen, verlengingen en klachten.</li>
        <li>Fraudepreventie en beveiliging van ons huurmaterieel.</li>
        <li>Het naleven van wettelijke verplichtingen (boekhouding, fiscaliteit).</li>
        <li>Met uw toestemming: nieuwsbrieven of commerciële communicatie, u kunt zich altijd uitschrijven.</li>
      </ul>,
      <p>Wij verwerken uw gegevens op basis van: de uitvoering van de overeenkomst (art. 6.1.b AVG), wettelijke verplichtingen (art. 6.1.c AVG), ons gerechtvaardigd belang (art. 6.1.f AVG, zoals fraudepreventie en de bescherming van ons materieel) en, waar vereist, uw toestemming (art. 6.1.a AVG).</p>,
      <>
        <p>Wij verkopen uw gegevens nooit. Wij delen ze enkel met partijen die nodig zijn voor onze dienstverlening:</p>
        <ul>
          <li>Betaalproviders voor de verwerking van online betalingen.</li>
          <li>IT- en hostingleveranciers van onze website en planningssystemen.</li>
          <li>Transportpartners voor levering en ophaling, indien ingeschakeld.</li>
          <li>Boekhouder en, waar wettelijk verplicht, overheidsinstanties.</li>
          <li>Uw verzekeraar of makelaar, uitsluitend op uw verzoek (bv. bij een meetrapport voor waterschade).</li>
        </ul>
        <p>Met verwerkers sluiten wij verwerkersovereenkomsten conform de AVG. Gegevens worden in principe binnen de EER verwerkt.</p>
      </>,
      <p>Wij bewaren persoonsgegevens niet langer dan nodig: offertegegevens tot 1 jaar na de offerte, contract- en facturatiegegevens 7 jaar (wettelijke boekhoudplicht), meetrapporten 5 jaar, en klantenservicecommunicatie tot 2 jaar na afsluiting van het dossier. Daarna worden gegevens verwijderd of geanonimiseerd.</p>,
      <p>Onze website gebruikt noodzakelijke cookies (voor onder meer uw boekingssessie en winkelmand) en, enkel met uw toestemming, analytische en marketingcookies. U kunt uw voorkeuren op elk moment aanpassen via uw browserinstellingen of de cookie-instellingen op de website.</p>,
      <p>Wij nemen passende technische en organisatorische maatregelen om uw gegevens te beschermen tegen verlies, misbruik en ongeoorloofde toegang: versleutelde verbindingen (TLS), toegangsbeheer, en beperkte toegang tot persoonsgegevens voor medewerkers die ze nodig hebben voor hun functie.</p>,
      <p>Ons huurmaterieel kan uitgerust zijn met geo-lokalisatiesystemen of trackers voor diefstalpreventie en fraudebestrijding. Locatiegegevens zijn niet toegankelijk voor derden, maar kunnen door Vernast worden gebruikt in geval van diefstal of fraude, en worden na afloop van de huurperiode niet langer dan nodig bewaard.</p>,
      <>
        <p>Onder de AVG heeft u het recht op inzage, verbetering, verwijdering, beperking van de verwerking, overdraagbaarheid van uw gegevens en bezwaar tegen verwerking op basis van gerechtvaardigd belang of voor direct marketing. Gaf u toestemming, dan kunt u die op elk moment intrekken.</p>
        <p>Stuur uw verzoek naar {MAIL}. Wij reageren binnen 30 dagen en kunnen u vragen zich te identificeren.</p>
      </>,
      <p>Niet tevreden over hoe wij met uw gegevens omgaan? Laat het ons eerst weten via {MAIL}. U heeft daarnaast altijd het recht een klacht in te dienen bij de Gegevensbeschermingsautoriteit (Drukpersstraat 35, 1000 Brussel, <a href="https://www.gegevensbeschermingsautoriteit.be" target="_blank" rel="noopener">gegevensbeschermingsautoriteit.be</a>).</p>,
      <p>Vernast kan dit privacybeleid aanpassen, bijvoorbeeld bij nieuwe diensten of gewijzigde wetgeving. De meest recente versie staat altijd op deze pagina, met bovenaan de datum van de laatste update.</p>,
      <p>Vragen over dit privacybeleid of over uw gegevens? Mail {MAIL}, bel <a href="tel:+3236899065">03 689 90 65</a>, of stel uw vraag via de <Link to={lp("/klantservice")}>klantenservice</Link>.</p>,
    ],
  },
  fr: {
    kicker: "Informations légales",
    h1: "Politique de confidentialité",
    intro: (
      <>
        Vernast traite vos données à caractère personnel avec soin, conformément au RGPD. Vous trouverez ici quelles données nous traitons, à quelles fins et quels sont vos droits. Des questions ? Écrivez à <a href={`mailto:${CONTACT.email}`} style={HERO_LINK}>{CONTACT.email}</a> ou appelez le <a href="tel:+3236899065" style={HERO_LINK}>03 689 90 65</a>.
      </>
    ),
    heroAlt: "L'équipe Vernast",
    crumb: "Confidentialité",
    navLabel: "Sujets",
    navTitel: "Tous les sujets",
    artikel: "Article",
    titels: [
      "Qui sommes-nous",
      "Quelles données nous traitons",
      "À quelles fins nous les utilisons",
      "Bases juridiques",
      "Communication à des tiers",
      "Durées de conservation",
      "Cookies",
      "Sécurité",
      "Géolocalisation et traceurs",
      "Vos droits",
      "Plaintes",
      "Modifications",
      "Contact",
    ],
    bijgewerkt: "Dernière mise à jour : août 2026",
    inhoud: (lp) => [
      <>
        <p>Vernast (VRNST) loue des déshumidificateurs de chantier, des ventilateurs, des chauffages de chantier et des accessoires, et fournit les services de séchage qui s'y rapportent. Vernast est responsable du traitement des données à caractère personnel collectées via ce site web, par téléphone, par e-mail ou sur place.</p>
        <p>Contact : {MAIL} · <a href="tel:+3236899065">03 689 90 65</a>.</p>
      </>,
      <>
        <h3>Données d'identification et de contact</h3>
        <p>Nom, prénom, adresse, adresse e-mail, numéro de téléphone et, pour les clients professionnels, dénomination de l'entreprise et numéro de TVA.</p>
        <h3>Données de réservation et de projet</h3>
        <p>Les données que vous saisissez dans le Calculateur et lors de la réservation : superficie, hauteur sous plafond, situation (construction neuve, dégâts des eaux, rénovation, cave), adresse de livraison, moments de livraison et d'installation souhaités, options et accessoires choisis.</p>
        <h3>Données de paiement et de facturation</h3>
        <p>Données de facturation, statut du paiement et mode de paiement. Votre paiement est traité par un prestataire de paiement externe et sécurisé ; nous ne conservons nous-mêmes aucune donnée de carte ou de compte.</p>
        <h3>Données de mesure et de service</h3>
        <p>Mesures d'humidité avant et après le séchage, bons de livraison et d'enlèvement, et communications avec notre service client.</p>
        <h3>Données du site web</h3>
        <p>Données techniques telles que l'adresse IP, le type de navigateur et le comportement de navigation sur notre site web (voir l'article 7, Cookies).</p>
      </>,
      <ul>
        <li>L'établissement de devis ainsi que la conclusion et l'exécution du contrat de location (livraison, installation, suivi et enlèvement).</li>
        <li>La planification et la confirmation des moments de livraison et d'installation, y compris les rappels par e-mail ou par SMS.</li>
        <li>La facturation, le suivi des paiements et le recouvrement des montants impayés.</li>
        <li>L'établissement de rapports de mesure d'humidité lorsque vous choisissez cette option.</li>
        <li>Le service client : questions, pannes, prolongations et plaintes.</li>
        <li>La prévention de la fraude et la sécurisation de notre matériel de location.</li>
        <li>Le respect des obligations légales (comptabilité, fiscalité).</li>
        <li>Avec votre consentement : newsletters ou communications commerciales, dont vous pouvez toujours vous désinscrire.</li>
      </ul>,
      <p>Nous traitons vos données sur la base de : l'exécution du contrat (art. 6.1.b RGPD), des obligations légales (art. 6.1.c RGPD), notre intérêt légitime (art. 6.1.f RGPD, tel que la prévention de la fraude et la protection de notre matériel) et, lorsque cela est requis, votre consentement (art. 6.1.a RGPD).</p>,
      <>
        <p>Nous ne vendons jamais vos données. Nous les communiquons uniquement aux parties nécessaires à la fourniture de nos services :</p>
        <ul>
          <li>Les prestataires de paiement, pour le traitement des paiements en ligne.</li>
          <li>Les fournisseurs informatiques et d'hébergement de notre site web et de nos systèmes de planification.</li>
          <li>Les partenaires de transport pour la livraison et l'enlèvement, s'il est fait appel à eux.</li>
          <li>Le comptable et, lorsque la loi l'impose, les autorités publiques.</li>
          <li>Votre assureur ou votre courtier, exclusivement à votre demande (p. ex. pour un rapport de mesure en cas de dégâts des eaux).</li>
        </ul>
        <p>Nous concluons avec nos sous-traitants des contrats de sous-traitance conformes au RGPD. Les données sont en principe traitées au sein de l'EEE.</p>
      </>,
      <p>Nous ne conservons pas les données à caractère personnel plus longtemps que nécessaire : les données relatives aux devis jusqu'à 1 an après le devis, les données contractuelles et de facturation pendant 7 ans (obligation comptable légale), les rapports de mesure pendant 5 ans, et les communications avec le service client jusqu'à 2 ans après la clôture du dossier. Les données sont ensuite supprimées ou anonymisées.</p>,
      <p>Notre site web utilise des cookies nécessaires (notamment pour votre session de réservation et votre panier) et, uniquement avec votre consentement, des cookies analytiques et de marketing. Vous pouvez modifier vos préférences à tout moment via les paramètres de votre navigateur ou les paramètres de cookies du site web.</p>,
      <p>Nous prenons des mesures techniques et organisationnelles appropriées pour protéger vos données contre la perte, l'utilisation abusive et l'accès non autorisé : connexions chiffrées (TLS), gestion des accès, et accès aux données à caractère personnel limité aux collaborateurs qui en ont besoin pour l'exercice de leur fonction.</p>,
      <p>Notre matériel de location peut être équipé de systèmes de géolocalisation ou de traceurs à des fins de prévention du vol et de lutte contre la fraude. Les données de localisation ne sont pas accessibles aux tiers, mais peuvent être utilisées par Vernast en cas de vol ou de fraude, et ne sont pas conservées plus longtemps que nécessaire après la fin de la période de location.</p>,
      <>
        <p>En vertu du RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation du traitement, à la portabilité de vos données et d'opposition au traitement fondé sur l'intérêt légitime ou effectué à des fins de marketing direct. Si vous avez donné votre consentement, vous pouvez le retirer à tout moment.</p>
        <p>Adressez votre demande à {MAIL}. Nous répondons dans les 30 jours et pouvons vous demander de justifier de votre identité.</p>
      </>,
      <p>Vous n'êtes pas satisfait de la manière dont nous traitons vos données ? Faites-le-nous d'abord savoir via {MAIL}. Vous avez en outre toujours le droit d'introduire une plainte auprès de l'Autorité de protection des données (rue de la Presse 35, 1000 Bruxelles, <a href="https://www.autoriteprotectiondonnees.be" target="_blank" rel="noopener">autoriteprotectiondonnees.be</a>).</p>,
      <p>Vernast peut modifier la présente politique de confidentialité, par exemple en cas de nouveaux services ou de modification de la législation. La version la plus récente figure toujours sur cette page, avec en haut la date de la dernière mise à jour.</p>,
      <p>Des questions sur cette politique de confidentialité ou sur vos données ? Écrivez à {MAIL}, appelez le <a href="tel:+3236899065">03 689 90 65</a> ou posez votre question via le <Link to={lp("/klantservice")}>service client</Link>.</p>,
    ],
  },
} satisfies Copy<Teksten>;

const PrivacyPage = () => {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const inhoud = t.inhoud(lp);
  return (
    <div className="pv-page">
      <PageMeta
        {...useSeo("privacy")}
        path={lp("/privacy")}
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: lp("/") },
            { name: t.crumb, path: lp("/privacy") },
          ]),
        ]}
      />

      <V3Header lightAfter={420} />

      {/* ================= HERO ================= */}
      <section className="lhero">
        <div className="wrap lh-grid">
          <div className="lh-copy">
            <span className="kick">{t.kicker}</span>
            <h1>{t.h1}</h1>
            <p>{t.intro}</p>
          </div>
          <div className="lh-vis"><img src="/vernast/team-tools.webp" alt={t.heroAlt} loading="lazy" decoding="async" /></div>
        </div>
      </section>

      {/* ================= LEGAL ================= */}
      <section className="legal">
        <div className="wrap">
          <nav className="lnav" aria-label={t.navLabel}>
            <div className="lt">{t.navTitel}</div>
            {t.titels.map((titel, i) => (
              <a href={`#p${i + 1}`} key={i}><i>Art. {i + 1}</i> {titel}</a>
            ))}
          </nav>
          <div className="lcol">
            <p className="meta">{t.bijgewerkt}</p>
            {inhoud.map((blok, i) => (
              <article id={`p${i + 1}`} key={i}>
                <h2><em>{t.artikel} {i + 1}</em>{t.titels[i]}</h2>
                {blok}
              </article>
            ))}
          </div>
        </div>
      </section>

      <V3Footer />
    </div>
  );
};

export default PrivacyPage;

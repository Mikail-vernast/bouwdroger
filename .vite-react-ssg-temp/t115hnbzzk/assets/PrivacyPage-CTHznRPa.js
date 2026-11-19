import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { P as PageMeta, C as CONTACT } from "./PageMeta-BXulEWcY.js";
import { l as V3Header } from "./V3Header-BeIMcMg7.js";
import { V as V3Footer } from "./V3Footer-9z4J1I4x.js";
import { o as organizationSchema, b as breadcrumbSchema } from "./schema-VJMHyxOJ.js";
import { u as useSeo } from "./seo-BMvlJeai.js";
import { u as useCopy, a as useLokaalPad } from "../main.mjs";
import "vite-react-ssg";
import "react";
import "./FontPreload-C6Rzq6ld.js";
import "./verhuur-CgnDb-wO.js";
import "./tarieven-ZrzMF0e-.js";
import "./verhuur-8XCQs1EE.js";
import "./packages-DdkKuPcF.js";
import "./verhuur.fr-CrIPL5Eo.js";
import "lucide-react";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/PrivacyPage.tsx");
const MAIL = /* @__PURE__ */ jsx("a", { href: `mailto:${CONTACT.email}`, children: CONTACT.email });
const HERO_LINK = { color: "#fff", fontWeight: 600 };
const COPY = {
  nl: {
    kicker: "Juridisch",
    h1: "Privacybeleid",
    intro: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Vernast gaat zorgvuldig om met uw persoonsgegevens, conform de AVG (GDPR). Hier leest u welke gegevens wij verwerken, waarvoor en welke rechten u heeft. Vragen? Mail ",
      /* @__PURE__ */ jsx("a", { href: `mailto:${CONTACT.email}`, style: HERO_LINK, children: CONTACT.email }),
      " of bel ",
      /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", style: HERO_LINK, children: "03 689 90 65" }),
      "."
    ] }),
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
      "Contact"
    ],
    bijgewerkt: "Laatst bijgewerkt: augustus 2026",
    inhoud: (lp) => [
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("p", { children: "Vernast (VRNST) verhuurt bouwdrogers, ventilatoren, bouwkachels en toebehoren, en levert bijhorende droogdiensten. Vernast is verwerkingsverantwoordelijke voor de persoonsgegevens die via deze website, telefonisch, per e-mail of op locatie worden verzameld." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Contact: ",
          MAIL,
          " · ",
          /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", children: "03 689 90 65" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("h3", { children: "Identificatie- en contactgegevens" }),
        /* @__PURE__ */ jsx("p", { children: "Naam, voornaam, adres, e-mailadres, telefoonnummer en, voor professionele klanten, bedrijfsnaam en btw-nummer." }),
        /* @__PURE__ */ jsx("h3", { children: "Boekings- en projectgegevens" }),
        /* @__PURE__ */ jsx("p", { children: "Gegevens die u invult in de Calculator en tijdens het boeken: oppervlakte, plafondhoogte, situatie (nieuwbouw, waterschade, renovatie, kelder), leveradres, gewenste lever- en installatiemomenten, gekozen opties en toebehoren." }),
        /* @__PURE__ */ jsx("h3", { children: "Betaal- en facturatiegegevens" }),
        /* @__PURE__ */ jsx("p", { children: "Factuurgegevens, betaalstatus en betaalmethode. Uw betaling verloopt via een externe, beveiligde betaalprovider; wij slaan zelf geen kaart- of rekeninggegevens op." }),
        /* @__PURE__ */ jsx("h3", { children: "Metings- en servicegegevens" }),
        /* @__PURE__ */ jsx("p", { children: "Vochtmetingen voor en na de droging, aflever- en ophaalbonnen, en communicatie met onze klantenservice." }),
        /* @__PURE__ */ jsx("h3", { children: "Websitegegevens" }),
        /* @__PURE__ */ jsx("p", { children: "Technische gegevens zoals IP-adres, browsertype en surfgedrag op onze website (zie artikel 7, Cookies)." })
      ] }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: "Het opmaken van offertes en het sluiten en uitvoeren van de huurovereenkomst (levering, installatie, opvolging en ophaling)." }),
        /* @__PURE__ */ jsx("li", { children: "Het inplannen en bevestigen van lever- en installatiemomenten, inclusief herinneringen per e-mail of sms." }),
        /* @__PURE__ */ jsx("li", { children: "Facturatie, betalingsopvolging en het innen van openstaande bedragen." }),
        /* @__PURE__ */ jsx("li", { children: "Het opstellen van vochtmetingsrapporten wanneer u die optie kiest." }),
        /* @__PURE__ */ jsx("li", { children: "Klantenservice: vragen, storingen, verlengingen en klachten." }),
        /* @__PURE__ */ jsx("li", { children: "Fraudepreventie en beveiliging van ons huurmaterieel." }),
        /* @__PURE__ */ jsx("li", { children: "Het naleven van wettelijke verplichtingen (boekhouding, fiscaliteit)." }),
        /* @__PURE__ */ jsx("li", { children: "Met uw toestemming: nieuwsbrieven of commerciële communicatie, u kunt zich altijd uitschrijven." })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Wij verwerken uw gegevens op basis van: de uitvoering van de overeenkomst (art. 6.1.b AVG), wettelijke verplichtingen (art. 6.1.c AVG), ons gerechtvaardigd belang (art. 6.1.f AVG, zoals fraudepreventie en de bescherming van ons materieel) en, waar vereist, uw toestemming (art. 6.1.a AVG)." }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("p", { children: "Wij verkopen uw gegevens nooit. Wij delen ze enkel met partijen die nodig zijn voor onze dienstverlening:" }),
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsx("li", { children: "Betaalproviders voor de verwerking van online betalingen." }),
          /* @__PURE__ */ jsx("li", { children: "IT- en hostingleveranciers van onze website en planningssystemen." }),
          /* @__PURE__ */ jsx("li", { children: "Transportpartners voor levering en ophaling, indien ingeschakeld." }),
          /* @__PURE__ */ jsx("li", { children: "Boekhouder en, waar wettelijk verplicht, overheidsinstanties." }),
          /* @__PURE__ */ jsx("li", { children: "Uw verzekeraar of makelaar, uitsluitend op uw verzoek (bv. bij een meetrapport voor waterschade)." })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Met verwerkers sluiten wij verwerkersovereenkomsten conform de AVG. Gegevens worden in principe binnen de EER verwerkt." })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Wij bewaren persoonsgegevens niet langer dan nodig: offertegegevens tot 1 jaar na de offerte, contract- en facturatiegegevens 7 jaar (wettelijke boekhoudplicht), meetrapporten 5 jaar, en klantenservicecommunicatie tot 2 jaar na afsluiting van het dossier. Daarna worden gegevens verwijderd of geanonimiseerd." }),
      /* @__PURE__ */ jsx("p", { children: "Onze website gebruikt noodzakelijke cookies (voor onder meer uw boekingssessie en winkelmand) en, enkel met uw toestemming, analytische en marketingcookies. U kunt uw voorkeuren op elk moment aanpassen via uw browserinstellingen of de cookie-instellingen op de website." }),
      /* @__PURE__ */ jsx("p", { children: "Wij nemen passende technische en organisatorische maatregelen om uw gegevens te beschermen tegen verlies, misbruik en ongeoorloofde toegang: versleutelde verbindingen (TLS), toegangsbeheer, en beperkte toegang tot persoonsgegevens voor medewerkers die ze nodig hebben voor hun functie." }),
      /* @__PURE__ */ jsx("p", { children: "Ons huurmaterieel kan uitgerust zijn met geo-lokalisatiesystemen of trackers voor diefstalpreventie en fraudebestrijding. Locatiegegevens zijn niet toegankelijk voor derden, maar kunnen door Vernast worden gebruikt in geval van diefstal of fraude, en worden na afloop van de huurperiode niet langer dan nodig bewaard." }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("p", { children: "Onder de AVG heeft u het recht op inzage, verbetering, verwijdering, beperking van de verwerking, overdraagbaarheid van uw gegevens en bezwaar tegen verwerking op basis van gerechtvaardigd belang of voor direct marketing. Gaf u toestemming, dan kunt u die op elk moment intrekken." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Stuur uw verzoek naar ",
          MAIL,
          ". Wij reageren binnen 30 dagen en kunnen u vragen zich te identificeren."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Niet tevreden over hoe wij met uw gegevens omgaan? Laat het ons eerst weten via ",
        MAIL,
        ". U heeft daarnaast altijd het recht een klacht in te dienen bij de Gegevensbeschermingsautoriteit (Drukpersstraat 35, 1000 Brussel, ",
        /* @__PURE__ */ jsx("a", { href: "https://www.gegevensbeschermingsautoriteit.be", target: "_blank", rel: "noopener", children: "gegevensbeschermingsautoriteit.be" }),
        ")."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Vernast kan dit privacybeleid aanpassen, bijvoorbeeld bij nieuwe diensten of gewijzigde wetgeving. De meest recente versie staat altijd op deze pagina, met bovenaan de datum van de laatste update." }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Vragen over dit privacybeleid of over uw gegevens? Mail ",
        MAIL,
        ", bel ",
        /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", children: "03 689 90 65" }),
        ", of stel uw vraag via de ",
        /* @__PURE__ */ jsx(Link, { to: lp("/klantservice"), children: "klantenservice" }),
        "."
      ] })
    ]
  },
  fr: {
    kicker: "Informations légales",
    h1: "Politique de confidentialité",
    intro: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Vernast traite vos données à caractère personnel avec soin, conformément au RGPD. Vous trouverez ici quelles données nous traitons, à quelles fins et quels sont vos droits. Des questions ? Écrivez à ",
      /* @__PURE__ */ jsx("a", { href: `mailto:${CONTACT.email}`, style: HERO_LINK, children: CONTACT.email }),
      " ou appelez le ",
      /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", style: HERO_LINK, children: "03 689 90 65" }),
      "."
    ] }),
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
      "Contact"
    ],
    bijgewerkt: "Dernière mise à jour : août 2026",
    inhoud: (lp) => [
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("p", { children: "Vernast (VRNST) loue des déshumidificateurs de chantier, des ventilateurs, des chauffages de chantier et des accessoires, et fournit les services de séchage qui s'y rapportent. Vernast est responsable du traitement des données à caractère personnel collectées via ce site web, par téléphone, par e-mail ou sur place." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Contact : ",
          MAIL,
          " · ",
          /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", children: "03 689 90 65" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("h3", { children: "Données d'identification et de contact" }),
        /* @__PURE__ */ jsx("p", { children: "Nom, prénom, adresse, adresse e-mail, numéro de téléphone et, pour les clients professionnels, dénomination de l'entreprise et numéro de TVA." }),
        /* @__PURE__ */ jsx("h3", { children: "Données de réservation et de projet" }),
        /* @__PURE__ */ jsx("p", { children: "Les données que vous saisissez dans le Calculateur et lors de la réservation : superficie, hauteur sous plafond, situation (construction neuve, dégâts des eaux, rénovation, cave), adresse de livraison, moments de livraison et d'installation souhaités, options et accessoires choisis." }),
        /* @__PURE__ */ jsx("h3", { children: "Données de paiement et de facturation" }),
        /* @__PURE__ */ jsx("p", { children: "Données de facturation, statut du paiement et mode de paiement. Votre paiement est traité par un prestataire de paiement externe et sécurisé ; nous ne conservons nous-mêmes aucune donnée de carte ou de compte." }),
        /* @__PURE__ */ jsx("h3", { children: "Données de mesure et de service" }),
        /* @__PURE__ */ jsx("p", { children: "Mesures d'humidité avant et après le séchage, bons de livraison et d'enlèvement, et communications avec notre service client." }),
        /* @__PURE__ */ jsx("h3", { children: "Données du site web" }),
        /* @__PURE__ */ jsx("p", { children: "Données techniques telles que l'adresse IP, le type de navigateur et le comportement de navigation sur notre site web (voir l'article 7, Cookies)." })
      ] }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: "L'établissement de devis ainsi que la conclusion et l'exécution du contrat de location (livraison, installation, suivi et enlèvement)." }),
        /* @__PURE__ */ jsx("li", { children: "La planification et la confirmation des moments de livraison et d'installation, y compris les rappels par e-mail ou par SMS." }),
        /* @__PURE__ */ jsx("li", { children: "La facturation, le suivi des paiements et le recouvrement des montants impayés." }),
        /* @__PURE__ */ jsx("li", { children: "L'établissement de rapports de mesure d'humidité lorsque vous choisissez cette option." }),
        /* @__PURE__ */ jsx("li", { children: "Le service client : questions, pannes, prolongations et plaintes." }),
        /* @__PURE__ */ jsx("li", { children: "La prévention de la fraude et la sécurisation de notre matériel de location." }),
        /* @__PURE__ */ jsx("li", { children: "Le respect des obligations légales (comptabilité, fiscalité)." }),
        /* @__PURE__ */ jsx("li", { children: "Avec votre consentement : newsletters ou communications commerciales, dont vous pouvez toujours vous désinscrire." })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Nous traitons vos données sur la base de : l'exécution du contrat (art. 6.1.b RGPD), des obligations légales (art. 6.1.c RGPD), notre intérêt légitime (art. 6.1.f RGPD, tel que la prévention de la fraude et la protection de notre matériel) et, lorsque cela est requis, votre consentement (art. 6.1.a RGPD)." }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("p", { children: "Nous ne vendons jamais vos données. Nous les communiquons uniquement aux parties nécessaires à la fourniture de nos services :" }),
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsx("li", { children: "Les prestataires de paiement, pour le traitement des paiements en ligne." }),
          /* @__PURE__ */ jsx("li", { children: "Les fournisseurs informatiques et d'hébergement de notre site web et de nos systèmes de planification." }),
          /* @__PURE__ */ jsx("li", { children: "Les partenaires de transport pour la livraison et l'enlèvement, s'il est fait appel à eux." }),
          /* @__PURE__ */ jsx("li", { children: "Le comptable et, lorsque la loi l'impose, les autorités publiques." }),
          /* @__PURE__ */ jsx("li", { children: "Votre assureur ou votre courtier, exclusivement à votre demande (p. ex. pour un rapport de mesure en cas de dégâts des eaux)." })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Nous concluons avec nos sous-traitants des contrats de sous-traitance conformes au RGPD. Les données sont en principe traitées au sein de l'EEE." })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Nous ne conservons pas les données à caractère personnel plus longtemps que nécessaire : les données relatives aux devis jusqu'à 1 an après le devis, les données contractuelles et de facturation pendant 7 ans (obligation comptable légale), les rapports de mesure pendant 5 ans, et les communications avec le service client jusqu'à 2 ans après la clôture du dossier. Les données sont ensuite supprimées ou anonymisées." }),
      /* @__PURE__ */ jsx("p", { children: "Notre site web utilise des cookies nécessaires (notamment pour votre session de réservation et votre panier) et, uniquement avec votre consentement, des cookies analytiques et de marketing. Vous pouvez modifier vos préférences à tout moment via les paramètres de votre navigateur ou les paramètres de cookies du site web." }),
      /* @__PURE__ */ jsx("p", { children: "Nous prenons des mesures techniques et organisationnelles appropriées pour protéger vos données contre la perte, l'utilisation abusive et l'accès non autorisé : connexions chiffrées (TLS), gestion des accès, et accès aux données à caractère personnel limité aux collaborateurs qui en ont besoin pour l'exercice de leur fonction." }),
      /* @__PURE__ */ jsx("p", { children: "Notre matériel de location peut être équipé de systèmes de géolocalisation ou de traceurs à des fins de prévention du vol et de lutte contre la fraude. Les données de localisation ne sont pas accessibles aux tiers, mais peuvent être utilisées par Vernast en cas de vol ou de fraude, et ne sont pas conservées plus longtemps que nécessaire après la fin de la période de location." }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("p", { children: "En vertu du RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation du traitement, à la portabilité de vos données et d'opposition au traitement fondé sur l'intérêt légitime ou effectué à des fins de marketing direct. Si vous avez donné votre consentement, vous pouvez le retirer à tout moment." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Adressez votre demande à ",
          MAIL,
          ". Nous répondons dans les 30 jours et pouvons vous demander de justifier de votre identité."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Vous n'êtes pas satisfait de la manière dont nous traitons vos données ? Faites-le-nous d'abord savoir via ",
        MAIL,
        ". Vous avez en outre toujours le droit d'introduire une plainte auprès de l'Autorité de protection des données (rue de la Presse 35, 1000 Bruxelles, ",
        /* @__PURE__ */ jsx("a", { href: "https://www.autoriteprotectiondonnees.be", target: "_blank", rel: "noopener", children: "autoriteprotectiondonnees.be" }),
        ")."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Vernast peut modifier la présente politique de confidentialité, par exemple en cas de nouveaux services ou de modification de la législation. La version la plus récente figure toujours sur cette page, avec en haut la date de la dernière mise à jour." }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Des questions sur cette politique de confidentialité ou sur vos données ? Écrivez à ",
        MAIL,
        ", appelez le ",
        /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", children: "03 689 90 65" }),
        " ou posez votre question via le ",
        /* @__PURE__ */ jsx(Link, { to: lp("/klantservice"), children: "service client" }),
        "."
      ] })
    ]
  },
  en: {
    kicker: "Legal",
    h1: "Privacy policy",
    intro: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Vernast handles your personal data with care, in accordance with the GDPR. Here you can read which data we process, for what purposes and what rights you have. Questions? Email ",
      /* @__PURE__ */ jsx("a", { href: `mailto:${CONTACT.email}`, style: HERO_LINK, children: CONTACT.email }),
      " or call ",
      /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", style: HERO_LINK, children: "03 689 90 65" }),
      "."
    ] }),
    heroAlt: "The Vernast team",
    crumb: "Privacy",
    navLabel: "Topics",
    navTitel: "All topics",
    artikel: "Article",
    titels: [
      "Who we are",
      "Which data we process",
      "What we use it for",
      "Legal bases",
      "Sharing with third parties",
      "Retention periods",
      "Cookies",
      "Security",
      "Geolocation and trackers",
      "Your rights",
      "Complaints",
      "Changes",
      "Contact"
    ],
    bijgewerkt: "Last updated: August 2026",
    inhoud: (lp) => [
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("p", { children: "Vernast (VRNST) hires out construction dehumidifiers, fans, site heaters and accessories, and provides the related drying services. Vernast is the controller of the personal data collected via this website, by telephone, by email or on site." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Contact: ",
          MAIL,
          " · ",
          /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", children: "03 689 90 65" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("h3", { children: "Identification and contact details" }),
        /* @__PURE__ */ jsx("p", { children: "Surname, first name, address, email address, telephone number and, for business customers, company name and VAT number." }),
        /* @__PURE__ */ jsx("h3", { children: "Booking and project data" }),
        /* @__PURE__ */ jsx("p", { children: "Data you enter in the Calculator and when booking: floor area, ceiling height, situation (new build, water damage, renovation, basement), delivery address, preferred delivery and installation times, and the options and accessories chosen." }),
        /* @__PURE__ */ jsx("h3", { children: "Payment and invoicing data" }),
        /* @__PURE__ */ jsx("p", { children: "Invoicing details, payment status and payment method. Your payment is handled by an external, secure payment provider; we do not store any card or account details ourselves." }),
        /* @__PURE__ */ jsx("h3", { children: "Measurement and service data" }),
        /* @__PURE__ */ jsx("p", { children: "Moisture readings before and after drying, delivery and collection notes, and communication with our customer service." }),
        /* @__PURE__ */ jsx("h3", { children: "Website data" }),
        /* @__PURE__ */ jsx("p", { children: "Technical data such as IP address, browser type and browsing behaviour on our website (see article 7, Cookies)." })
      ] }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: "Drawing up quotes and concluding and performing the rental agreement (delivery, installation, follow-up and collection)." }),
        /* @__PURE__ */ jsx("li", { children: "Scheduling and confirming delivery and installation times, including reminders by email or text message." }),
        /* @__PURE__ */ jsx("li", { children: "Invoicing, payment follow-up and the collection of outstanding amounts." }),
        /* @__PURE__ */ jsx("li", { children: "Drawing up moisture measurement reports when you choose that option." }),
        /* @__PURE__ */ jsx("li", { children: "Customer service: questions, breakdowns, extensions and complaints." }),
        /* @__PURE__ */ jsx("li", { children: "Fraud prevention and the security of our rental equipment." }),
        /* @__PURE__ */ jsx("li", { children: "Compliance with legal obligations (accounting, taxation)." }),
        /* @__PURE__ */ jsx("li", { children: "With your consent: newsletters or commercial communications, from which you can always unsubscribe." })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "We process your data on the basis of: the performance of the contract (Art. 6(1)(b) GDPR), legal obligations (Art. 6(1)(c) GDPR), our legitimate interest (Art. 6(1)(f) GDPR, such as fraud prevention and the protection of our equipment) and, where required, your consent (Art. 6(1)(a) GDPR)." }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("p", { children: "We never sell your data. We only share it with parties that are necessary for our services:" }),
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsx("li", { children: "Payment providers, for processing online payments." }),
          /* @__PURE__ */ jsx("li", { children: "IT and hosting suppliers for our website and scheduling systems." }),
          /* @__PURE__ */ jsx("li", { children: "Transport partners for delivery and collection, if engaged." }),
          /* @__PURE__ */ jsx("li", { children: "Our accountant and, where required by law, public authorities." }),
          /* @__PURE__ */ jsx("li", { children: "Your insurer or broker, exclusively at your request (e.g. for a measurement report in the event of water damage)." })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "We conclude data processing agreements with processors in accordance with the GDPR. Data is in principle processed within the EEA." })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "We do not keep personal data for longer than necessary: quote data for up to 1 year after the quote, contract and invoicing data for 7 years (statutory accounting obligation), measurement reports for 5 years, and customer service communications for up to 2 years after the file is closed. After that, data is deleted or anonymised." }),
      /* @__PURE__ */ jsx("p", { children: "Our website uses necessary cookies (for your booking session and shopping basket, among other things) and, only with your consent, analytical and marketing cookies. You can change your preferences at any time via your browser settings or the cookie settings on the website." }),
      /* @__PURE__ */ jsx("p", { children: "We take appropriate technical and organisational measures to protect your data against loss, misuse and unauthorised access: encrypted connections (TLS), access management, and access to personal data limited to staff who need it for their role." }),
      /* @__PURE__ */ jsx("p", { children: "Our rental equipment may be fitted with geolocation systems or trackers for theft prevention and fraud control. Location data is not accessible to third parties, but may be used by Vernast in the event of theft or fraud, and is not kept for longer than necessary after the end of the hire period." }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("p", { children: "Under the GDPR, you have the right of access, rectification, erasure, restriction of processing, portability of your data and objection to processing based on legitimate interest or for direct marketing. If you have given consent, you can withdraw it at any time." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Send your request to ",
          MAIL,
          ". We respond within 30 days and may ask you to identify yourself."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Not satisfied with how we handle your data? Please let us know first via ",
        MAIL,
        ". You also always have the right to lodge a complaint with the Belgian Data Protection Authority (Drukpersstraat 35, 1000 Brussels, ",
        /* @__PURE__ */ jsx("a", { href: "https://www.dataprotectionauthority.be", target: "_blank", rel: "noopener", children: "dataprotectionauthority.be" }),
        ")."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Vernast may amend this privacy policy, for example in the event of new services or changes in legislation. The most recent version is always on this page, with the date of the last update at the top." }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Questions about this privacy policy or about your data? Email ",
        MAIL,
        ", call ",
        /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", children: "03 689 90 65" }),
        ", or ask your question via ",
        /* @__PURE__ */ jsx(Link, { to: lp("/klantservice"), children: "customer service" }),
        "."
      ] })
    ]
  }
};
const PrivacyPage = () => {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const inhoud = t.inhoud(lp);
  return /* @__PURE__ */ jsxs("div", { className: "pv-page", children: [
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        ...useSeo("privacy"),
        path: lp("/privacy"),
        jsonLd: [
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: lp("/") },
            { name: t.crumb, path: lp("/privacy") }
          ])
        ]
      }
    ),
    /* @__PURE__ */ jsx(V3Header, { lightAfter: 420 }),
    /* @__PURE__ */ jsx("section", { className: "lhero", children: /* @__PURE__ */ jsxs("div", { className: "wrap lh-grid", children: [
      /* @__PURE__ */ jsxs("div", { className: "lh-copy", children: [
        /* @__PURE__ */ jsx("span", { className: "kick", children: t.kicker }),
        /* @__PURE__ */ jsx("h1", { children: t.h1 }),
        /* @__PURE__ */ jsx("p", { children: t.intro })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lh-vis", children: /* @__PURE__ */ jsx("img", { src: "/vernast/team-tools.webp", alt: t.heroAlt, loading: "lazy", decoding: "async" }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "legal", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("nav", { className: "lnav", "aria-label": t.navLabel, children: [
        /* @__PURE__ */ jsx("div", { className: "lt", children: t.navTitel }),
        t.titels.map((titel, i) => /* @__PURE__ */ jsxs("a", { href: `#p${i + 1}`, children: [
          /* @__PURE__ */ jsxs("i", { children: [
            "Art. ",
            i + 1
          ] }),
          " ",
          titel
        ] }, i))
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lcol", children: [
        /* @__PURE__ */ jsx("p", { className: "meta", children: t.bijgewerkt }),
        inhoud.map((blok, i) => /* @__PURE__ */ jsxs("article", { id: `p${i + 1}`, children: [
          /* @__PURE__ */ jsxs("h2", { children: [
            /* @__PURE__ */ jsxs("em", { children: [
              t.artikel,
              " ",
              i + 1
            ] }),
            t.titels[i]
          ] }),
          blok
        ] }, i))
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(V3Footer, {})
  ] });
};
export {
  PrivacyPage as default
};

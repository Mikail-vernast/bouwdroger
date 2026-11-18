import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { Copy } from "@/i18n/useTaal";

/**
 * De teksten van de contactpagina. De Nederlandse staan er letterlijk zoals
 * ze in de designhandoff stonden; de kaart-SVG en de legenda delen dezelfde
 * sleutels, omdat de kaart twee keer op de pagina staat.
 */

const WIT = { color: "#fff" } as const;

type Teksten = {
  heroH1: string;
  heroP: string;
  uren: string;
  herkenning: string;
  eerstTesla: string;
  daarnaCarglass: string;
  rechtsIn: string;
  hoofdAfhaal: string;
  ofA12: string;
  afrit: string;
  vanAntwerpen: string;
  chanKick: string;
  chanH2: string;
  belH: string;
  belP: string;
  mailH: string;
  mailP: string;
  factH: string;
  factP: string;
  huurH: string;
  huurP: string;
  naarKs: string;
  locKick: string;
  hfdH: string;
  parkeren: string;
  afhaalH: string;
  snelH: string;
  snelP: string;
  routeKick: string;
  routeH2: string;
  formKick: string;
  formH2: string;
  formLede: string;
  lVoor: string;
  lNaam: string;
  lMail: string;
  lTel: string;
  lOnd: string;
  o1: string;
  o2: string;
  o3: string;
  o4: string;
  o5: string;
  lMsg: string;
  privNote: string;
  mapCap: string;
  legUnit: string;
  leg1: string;
  leg2: string;
  leg3: string;
  legAlt: string;
  ariaHeroMap: string;
  ariaMap: string;
  alt1: string;
  alt2: string;
  alt3: string;
  alt4: string;
  phVoor: string;
  phNaam: string;
  phMail: string;
  phMsg: string;
  kick: string;
  locH2: string;
  locLede: ReactNode;
  kantoor: ReactNode;
  afhaalP: ReactNode;
  afhaalUren: ReactNode;
  reserveer: (lp: (pad: string) => string) => ReactNode;
  zoWerkt: string;
  maps: string;
  stappen: ReactNode[];
  routeFotos: string;
  route: ReactNode[];
  done: string;
  versturen: string;
  verstuur: string;
};

export const CONTACT_COPY = {
  nl: {
    heroH1: "Boekingen, vragen en afhalingen langs de A12.",
    heroP: "Bel, mail of kom langs in Aartselaar. Heeft u een vraag over een lopende huur? Dan helpt onze klantenservice u het snelst verder.",
    uren: " Ma–Vr 08:00–17:00",
    herkenning: "herkenningspunt",
    eerstTesla: "u passeert eerst Tesla",
    daarnaCarglass: "daarna Carglass,",
    rechtsIn: "hier rechts indraaien",
    hoofdAfhaal: "Hoofdkantoor + afhaalpoort",
    ofA12: "of via de A12,",
    afrit: "afrit Aartselaar",
    vanAntwerpen: "u komt van Antwerpen via de N177",
    chanKick: "Hoe kunnen we helpen?",
    chanH2: "Kies het kanaal dat u het beste past.",
    belH: "Bel ons",
    belP: "Voor dringende vragen, storingen of advies over het juiste pakket. Ma–Vr van 08:00 tot 17:00.",
    mailH: "Mail ons",
    mailP: "Algemene vragen, offertes op maat of documenten doorsturen. U krijgt binnen één werkdag antwoord.",
    factH: "Facturatie",
    factP: "Factuur niet ontvangen of een vraag over uw betaling? Onze administratie volgt het meteen op.",
    huurH: "Huurt u al bij ons?",
    huurP: "Storing aan een toestel, verlengen, ophaling plannen: op de klantenservicepagina lost u het meteen op.",
    naarKs: "Naar klantenservice →",
    locKick: "Onze locatie",
    hfdH: "Hoofdkantoor",
    parkeren: "Parkeren kan vlak voor de unit.",
    afhaalH: "Afhaalpunt magazijn",
    snelH: "Dé locatie voor snel afhalen",
    snelP: "Via de A12 bent u er vanuit Antwerpen in 15 minuten, vanuit Brussel in 25. Zo herkent u de inrit:",
    routeKick: "Zo vindt u ons",
    routeH2: "In vier stappen tot aan onze poort.",
    formKick: "Stel uw vraag",
    formH2: "Liever schriftelijk? Stuur ons een bericht.",
    formLede: "U krijgt binnen één werkdag antwoord. Dringend? Bel dan 03 689 90 65.",
    lVoor: "Voornaam",
    lNaam: "Naam",
    lMail: "E-mail",
    lTel: "Telefoon",
    lOnd: "Onderwerp",
    o1: "Vraag over een pakket of offerte",
    o2: "Lopende huur of verlenging",
    o3: "Afhaling in Aartselaar",
    o4: "Factuur of betaling",
    o5: "Iets anders",
    lMsg: "Uw bericht",
    privNote: "Wij gebruiken uw gegevens enkel om uw vraag te beantwoorden.",
    mapCap: " Ons afhaalpunt langs de A12 · bekijk de route",
    legUnit: " Vernast, unit 11",
    leg1: " 1. U passeert Tesla",
    leg2: " 2. Na Carglass rechts indraaien",
    leg3: " 3. Kleidaal volgen tot unit 11",
    legAlt: " Alternatief: via de A12, afrit Aartselaar naar de N177",
    ariaHeroMap: "Bekijk onze locatie langs de A12",
    ariaMap: "Kaartje: via de N177 langs Tesla en Carglass, dan rechts indraaien naar Vernast unit 11",
    alt1: "Inrit Kleidaal naast Carglass",
    alt2: "Weg het park in richting Arthrex",
    alt3: "Units met laadkades",
    alt4: "Unit 11, poort van Vernast",
    phVoor: "Voornaam",
    phNaam: "Achternaam",
    phMail: "naam@voorbeeld.be",
    phMsg: "Vertel kort waarmee we u kunnen helpen",
    kick: "Contact",
    locH2: "Hoofdkantoor & afhaalpunt, vlak langs de A12.",
    locLede: (
      <>
        Bewust gekozen: ons magazijn ligt pal langs de A12, <b style={WIT}>halfweg tussen Antwerpen en Brussel</b>. U rijdt de snelweg af en staat één minuut later aan onze poort, geen centrum, geen zoekwerk, laden en meteen weer weg. De inrit van het KMO-park ligt <b style={WIT}>naast Carglass</b>, op de hoek herkent u <b style={WIT}>Tesla</b>.
      </>
    ),
    kantoor: <><b>Kantoor:</b> Ma–Vr 08:00–17:00</>,
    afhaalP: <>Zelfde site, aan de <b>poort van unit 11</b>. Wij zetten uw reservatie klaar en laden mee in.</>,
    afhaalUren: <><b>Afhalen &amp; retour:</b> enkel op afgesproken momenten</>,
    reserveer: (lp) => <>Reserveer eerst online via <Link to={lp("/verhuur/afhalen")}>zelf afhalen</Link>, dan ligt alles klaar.</>,
    zoWerkt: "Zo werkt zelf afhalen",
    maps: "Open in Google Maps",
    stappen: [
      <>U rijdt de N177 af en passeert eerst <b>Tesla</b>.</>,
      <>Vlak na <b>Carglass</b> draait u rechts het KMO-park in.</>,
      <>Volg Kleidaal rechtdoor tot <b>unit 11</b>, onze poort.</>,
    ],
    routeFotos: "Bekijk de route in foto's",
    route: [
      <><b>Neem de inrit van het KMO-park</b> langs de A12, vlak naast Carglass. Op de hoek van de inrit staat Tesla.</>,
      <><b>Volg de weg rechtdoor</b> het park in, richting het zwarte Arthrex-gebouw.</>,
      <><b>Houd rechts aan</b> voorbij de eerste units en volg de nummering tot 11–12.</>,
      <><b>Unit 11 is onze poort.</b> Parkeer ervoor en meld u aan, wij laden mee in.</>,
    ],
    done: "Bedankt! U krijgt binnen één werkdag antwoord.",
    versturen: "Versturen…",
    verstuur: "Verstuur bericht",
  },
  fr: {
    heroH1: "Réservations, questions et retraits le long de l'A12.",
    heroP: "Appelez-nous, écrivez-nous ou passez à Aartselaar. Vous avez une question sur une location en cours ? Notre service client vous aidera le plus rapidement.",
    uren: " Lu–Ve 08:00–17:00",
    herkenning: "point de repère",
    eerstTesla: "vous passez d'abord Tesla",
    daarnaCarglass: "ensuite Carglass,",
    rechtsIn: "tournez ici à droite",
    hoofdAfhaal: "Siège + porte de retrait",
    ofA12: "ou via l'A12,",
    afrit: "sortie Aartselaar",
    vanAntwerpen: "vous venez d'Anvers par la N177",
    chanKick: "Comment pouvons-nous vous aider ?",
    chanH2: "Choisissez le canal qui vous convient le mieux.",
    belH: "Appelez-nous",
    belP: "Pour les questions urgentes, les pannes ou un conseil sur le bon pack. Lu–Ve de 08:00 à 17:00.",
    mailH: "Écrivez-nous",
    mailP: "Questions générales, devis sur mesure ou envoi de documents. Vous recevez une réponse dans un délai d'un jour ouvrable.",
    factH: "Facturation",
    factP: "Facture non reçue ou une question sur votre paiement ? Notre administration s'en occupe immédiatement.",
    huurH: "Vous louez déjà chez nous ?",
    huurP: "Panne d'un appareil, prolongation, planification de l'enlèvement : sur la page service client, vous réglez tout immédiatement.",
    naarKs: "Vers le service client →",
    locKick: "Notre adresse",
    hfdH: "Siège",
    parkeren: "Vous pouvez vous garer juste devant l'unité.",
    afhaalH: "Point de retrait entrepôt",
    snelH: "L'endroit idéal pour un retrait rapide",
    snelP: "Par l'A12, vous y êtes en 15 minutes depuis Anvers, en 25 depuis Bruxelles. Voici comment reconnaître l'entrée :",
    routeKick: "Comment nous trouver",
    routeH2: "En quatre étapes jusqu'à notre porte.",
    formKick: "Posez votre question",
    formH2: "Vous préférez écrire ? Envoyez-nous un message.",
    formLede: "Vous recevez une réponse dans un délai d'un jour ouvrable. Urgent ? Appelez le 03 689 90 65.",
    lVoor: "Prénom",
    lNaam: "Nom",
    lMail: "E-mail",
    lTel: "Téléphone",
    lOnd: "Sujet",
    o1: "Question sur un pack ou un devis",
    o2: "Location en cours ou prolongation",
    o3: "Retrait à Aartselaar",
    o4: "Facture ou paiement",
    o5: "Autre chose",
    lMsg: "Votre message",
    privNote: "Nous utilisons vos données uniquement pour répondre à votre question.",
    mapCap: " Notre point de retrait le long de l'A12 · voir l'itinéraire",
    legUnit: " Vernast, unité 11",
    leg1: " 1. Vous passez Tesla",
    leg2: " 2. Après Carglass, tournez à droite",
    leg3: " 3. Suivez Kleidaal jusqu'à l'unité 11",
    legAlt: " Alternative : via l'A12, sortie Aartselaar vers la N177",
    ariaHeroMap: "Voir notre adresse le long de l'A12",
    ariaMap: "Plan : par la N177, en passant Tesla et Carglass, puis à droite vers Vernast, unité 11",
    alt1: "Entrée Kleidaal à côté de Carglass",
    alt2: "Route vers l'intérieur du parc en direction d'Arthrex",
    alt3: "Unités avec quais de chargement",
    alt4: "Unité 11, porte de Vernast",
    phVoor: "Prénom",
    phNaam: "Nom de famille",
    phMail: "nom@exemple.be",
    phMsg: "Expliquez brièvement en quoi nous pouvons vous aider",
    kick: "Contact",
    locH2: "Siège & point de retrait, juste à côté de l'A12.",
    locLede: (
      <>
        Un choix délibéré : notre entrepôt se trouve juste à côté de l'A12, <b style={WIT}>à mi-chemin entre Anvers et Bruxelles</b>. Vous quittez l'autoroute et une minute plus tard, vous êtes à notre porte : pas de centre-ville, pas de recherche, vous chargez et vous repartez aussitôt. L'entrée du parc PME se trouve <b style={WIT}>à côté de Carglass</b>, au coin vous reconnaîtrez <b style={WIT}>Tesla</b>.
      </>
    ),
    kantoor: <><b>Bureau :</b> Lu–Ve 08:00–17:00</>,
    afhaalP: <>Même site, à la <b>porte de l'unité 11</b>. Nous préparons votre réservation et vous aidons à charger.</>,
    afhaalUren: <><b>Retrait &amp; retour :</b> uniquement aux moments convenus</>,
    reserveer: (lp) => <>Réservez d'abord en ligne via <Link to={lp("/verhuur/afhalen")}>retrait sur place</Link>, tout sera prêt.</>,
    zoWerkt: "Comment fonctionne le retrait sur place",
    maps: "Ouvrir dans Google Maps",
    stappen: [
      <>Vous quittez la N177 et passez d'abord <b>Tesla</b>.</>,
      <>Juste après <b>Carglass</b>, tournez à droite dans le parc PME.</>,
      <>Suivez Kleidaal tout droit jusqu'à l'<b>unité 11</b>, notre porte.</>,
    ],
    routeFotos: "Voir l'itinéraire en photos",
    route: [
      <><b>Prenez l'entrée du parc PME</b> le long de l'A12, juste à côté de Carglass. Au coin de l'entrée se trouve Tesla.</>,
      <><b>Suivez la route tout droit</b> dans le parc, en direction du bâtiment noir d'Arthrex.</>,
      <><b>Restez à droite</b> après les premières unités et suivez la numérotation jusqu'à 11–12.</>,
      <><b>L'unité 11 est notre porte.</b> Garez-vous devant et présentez-vous, nous vous aidons à charger.</>,
    ],
    done: "Merci ! Vous recevez une réponse dans un délai d'un jour ouvrable.",
    versturen: "Envoi…",
    verstuur: "Envoyer le message",
  },
} satisfies Copy<Teksten>;

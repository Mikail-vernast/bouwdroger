import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { P as PageMeta, M as MAPS_URL } from "./PageMeta-BXulEWcY.js";
import { l as V3Header } from "./V3Header-BeIMcMg7.js";
import { V as V3Footer } from "./V3Footer-9z4J1I4x.js";
import { o as organizationSchema, b as breadcrumbSchema } from "./schema-VJMHyxOJ.js";
import { u as useSeo } from "./seo-BMvlJeai.js";
import { u as useCopy, a as useLokaalPad } from "../main.mjs";
import { Link } from "react-router-dom";
import { u as useAanvraag, b as AanvraagDone, A as AanvraagHoneypot, a as AanvraagError } from "./AanvraagForm-CNDpbMyw.js";
/* empty css                       */
import "vite-react-ssg";
import "react";
import "./FontPreload-C6Rzq6ld.js";
import "./verhuur-CgnDb-wO.js";
import "./tarieven-ZrzMF0e-.js";
import "./verhuur-8XCQs1EE.js";
import "./packages-DdkKuPcF.js";
import "./verhuur.fr-CrIPL5Eo.js";
import "lucide-react";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/ContactPage.copy.tsx");
const WIT = { color: "#fff" };
const CONTACT_COPY = {
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
    locLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Bewust gekozen: ons magazijn ligt pal langs de A12, ",
      /* @__PURE__ */ jsx("b", { style: WIT, children: "halfweg tussen Antwerpen en Brussel" }),
      ". U rijdt de snelweg af en staat één minuut later aan onze poort, geen centrum, geen zoekwerk, laden en meteen weer weg. De inrit van het KMO-park ligt ",
      /* @__PURE__ */ jsx("b", { style: WIT, children: "naast Carglass" }),
      ", op de hoek herkent u ",
      /* @__PURE__ */ jsx("b", { style: WIT, children: "Tesla" }),
      "."
    ] }),
    kantoor: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Kantoor:" }),
      " Ma–Vr 08:00–17:00"
    ] }),
    afhaalP: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Zelfde site, aan de ",
      /* @__PURE__ */ jsx("b", { children: "poort van unit 11" }),
      ". Wij zetten uw reservatie klaar en laden mee in."
    ] }),
    afhaalUren: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Afhalen & retour:" }),
      " enkel op afgesproken momenten"
    ] }),
    reserveer: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
      "Reserveer eerst online via ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/afhalen"), children: "zelf afhalen" }),
      ", dan ligt alles klaar."
    ] }),
    zoWerkt: "Zo werkt zelf afhalen",
    maps: "Open in Google Maps",
    stappen: [
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "U rijdt de N177 af en passeert eerst ",
        /* @__PURE__ */ jsx("b", { children: "Tesla" }),
        "."
      ] }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "Vlak na ",
        /* @__PURE__ */ jsx("b", { children: "Carglass" }),
        " draait u rechts het KMO-park in."
      ] }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "Volg Kleidaal rechtdoor tot ",
        /* @__PURE__ */ jsx("b", { children: "unit 11" }),
        ", onze poort."
      ] })
    ],
    routeFotos: "Bekijk de route in foto's",
    route: [
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("b", { children: "Neem de inrit van het KMO-park" }),
        " langs de A12, vlak naast Carglass. Op de hoek van de inrit staat Tesla."
      ] }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("b", { children: "Volg de weg rechtdoor" }),
        " het park in, richting het zwarte Arthrex-gebouw."
      ] }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("b", { children: "Houd rechts aan" }),
        " voorbij de eerste units en volg de nummering tot 11–12."
      ] }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("b", { children: "Unit 11 is onze poort." }),
        " Parkeer ervoor en meld u aan, wij laden mee in."
      ] })
    ],
    done: "Bedankt! U krijgt binnen één werkdag antwoord.",
    versturen: "Versturen…",
    verstuur: "Verstuur bericht"
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
    locLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Un choix délibéré : notre entrepôt se trouve juste à côté de l'A12, ",
      /* @__PURE__ */ jsx("b", { style: WIT, children: "à mi-chemin entre Anvers et Bruxelles" }),
      ". Vous quittez l'autoroute et une minute plus tard, vous êtes à notre porte : pas de centre-ville, pas de recherche, vous chargez et vous repartez aussitôt. L'entrée du parc PME se trouve ",
      /* @__PURE__ */ jsx("b", { style: WIT, children: "à côté de Carglass" }),
      ", au coin vous reconnaîtrez ",
      /* @__PURE__ */ jsx("b", { style: WIT, children: "Tesla" }),
      "."
    ] }),
    kantoor: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Bureau :" }),
      " Lu–Ve 08:00–17:00"
    ] }),
    afhaalP: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Même site, à la ",
      /* @__PURE__ */ jsx("b", { children: "porte de l'unité 11" }),
      ". Nous préparons votre réservation et vous aidons à charger."
    ] }),
    afhaalUren: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Retrait & retour :" }),
      " uniquement aux moments convenus"
    ] }),
    reserveer: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
      "Réservez d'abord en ligne via ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/afhalen"), children: "retrait sur place" }),
      ", tout sera prêt."
    ] }),
    zoWerkt: "Comment fonctionne le retrait sur place",
    maps: "Ouvrir dans Google Maps",
    stappen: [
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "Vous quittez la N177 et passez d'abord ",
        /* @__PURE__ */ jsx("b", { children: "Tesla" }),
        "."
      ] }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "Juste après ",
        /* @__PURE__ */ jsx("b", { children: "Carglass" }),
        ", tournez à droite dans le parc PME."
      ] }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "Suivez Kleidaal tout droit jusqu'à l'",
        /* @__PURE__ */ jsx("b", { children: "unité 11" }),
        ", notre porte."
      ] })
    ],
    routeFotos: "Voir l'itinéraire en photos",
    route: [
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("b", { children: "Prenez l'entrée du parc PME" }),
        " le long de l'A12, juste à côté de Carglass. Au coin de l'entrée se trouve Tesla."
      ] }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("b", { children: "Suivez la route tout droit" }),
        " dans le parc, en direction du bâtiment noir d'Arthrex."
      ] }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("b", { children: "Restez à droite" }),
        " après les premières unités et suivez la numérotation jusqu'à 11–12."
      ] }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("b", { children: "L'unité 11 est notre porte." }),
        " Garez-vous devant et présentez-vous, nous vous aidons à charger."
      ] })
    ],
    done: "Merci ! Vous recevez une réponse dans un délai d'un jour ouvrable.",
    versturen: "Envoi…",
    verstuur: "Envoyer le message"
  },
  en: {
    heroH1: "Bookings, questions and collections along the A12.",
    heroP: "Call, email or drop by in Aartselaar. Do you have a question about a current hire? Then our customer service will help you fastest.",
    uren: " Mon–Fri 08:00–17:00",
    herkenning: "landmark",
    eerstTesla: "you pass Tesla first",
    daarnaCarglass: "then Carglass,",
    rechtsIn: "turn right here",
    hoofdAfhaal: "Head office + collection gate",
    ofA12: "or via the A12,",
    afrit: "exit Aartselaar",
    vanAntwerpen: "you come from Antwerp via the N177",
    chanKick: "How can we help?",
    chanH2: "Choose the channel that suits you best.",
    belH: "Call us",
    belP: "For urgent questions, breakdowns or advice on the right package. Mon–Fri from 08:00 to 17:00.",
    mailH: "Email us",
    mailP: "General questions, tailored quotes or sending documents. You will get an answer within one working day.",
    factH: "Invoicing",
    factP: "Haven't received your invoice, or have a question about your payment? Our accounts team will follow it up straight away.",
    huurH: "Already hiring from us?",
    huurP: "A machine breakdown, an extension, scheduling a collection: you can sort it out straight away on the customer service page.",
    naarKs: "To customer service →",
    locKick: "Our location",
    hfdH: "Head office",
    parkeren: "You can park right in front of the unit.",
    afhaalH: "Warehouse collection point",
    snelH: "The place for a quick collection",
    snelP: "Via the A12 you are there in 15 minutes from Antwerp, in 25 from Brussels. This is how you recognise the entrance:",
    routeKick: "How to find us",
    routeH2: "Four steps to our gate.",
    formKick: "Ask your question",
    formH2: "Prefer to write? Send us a message.",
    formLede: "You will get an answer within one working day. Urgent? Then call 03 689 90 65.",
    lVoor: "First name",
    lNaam: "Surname",
    lMail: "Email",
    lTel: "Phone",
    lOnd: "Subject",
    o1: "Question about a package or quote",
    o2: "Current hire or extension",
    o3: "Collection in Aartselaar",
    o4: "Invoice or payment",
    o5: "Something else",
    lMsg: "Your message",
    privNote: "We only use your details to answer your question.",
    mapCap: " Our collection point along the A12 · see the route",
    legUnit: " Vernast, unit 11",
    leg1: " 1. You pass Tesla",
    leg2: " 2. Turn right after Carglass",
    leg3: " 3. Follow Kleidaal to unit 11",
    legAlt: " Alternative: via the A12, exit Aartselaar towards the N177",
    ariaHeroMap: "See our location along the A12",
    ariaMap: "Map: via the N177 past Tesla and Carglass, then turn right to Vernast unit 11",
    alt1: "Kleidaal entrance next to Carglass",
    alt2: "Road into the park towards Arthrex",
    alt3: "Units with loading bays",
    alt4: "Unit 11, Vernast's gate",
    phVoor: "First name",
    phNaam: "Surname",
    phMail: "name@example.be",
    phMsg: "Tell us briefly how we can help you",
    kick: "Contact",
    locH2: "Head office & collection point, right by the A12.",
    locLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "A deliberate choice: our warehouse lies right by the A12, ",
      /* @__PURE__ */ jsx("b", { style: WIT, children: "halfway between Antwerp and Brussels" }),
      ". You leave the motorway and a minute later you are at our gate: no town centre, no searching, load up and off you go. The entrance to the business park is ",
      /* @__PURE__ */ jsx("b", { style: WIT, children: "next to Carglass" }),
      ", and on the corner you will recognise ",
      /* @__PURE__ */ jsx("b", { style: WIT, children: "Tesla" }),
      "."
    ] }),
    kantoor: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Office:" }),
      " Mon–Fri 08:00–17:00"
    ] }),
    afhaalP: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Same site, at the ",
      /* @__PURE__ */ jsx("b", { children: "gate of unit 11" }),
      ". We get your booking ready and help you load."
    ] }),
    afhaalUren: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Collection & return:" }),
      " only at agreed times"
    ] }),
    reserveer: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
      "Book online first via ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/afhalen"), children: "self-collection" }),
      ", and everything will be ready."
    ] }),
    zoWerkt: "How self-collection works",
    maps: "Open in Google Maps",
    stappen: [
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "You come off the N177 and pass ",
        /* @__PURE__ */ jsx("b", { children: "Tesla" }),
        " first."
      ] }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "Just after ",
        /* @__PURE__ */ jsx("b", { children: "Carglass" }),
        ", turn right into the business park."
      ] }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "Follow Kleidaal straight on to ",
        /* @__PURE__ */ jsx("b", { children: "unit 11" }),
        ", our gate."
      ] })
    ],
    routeFotos: "See the route in photos",
    route: [
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("b", { children: "Take the entrance to the business park" }),
        " along the A12, right next to Carglass. Tesla is on the corner of the entrance."
      ] }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("b", { children: "Follow the road straight on" }),
        " into the park, towards the black Arthrex building."
      ] }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("b", { children: "Keep right" }),
        " past the first units and follow the numbers to 11–12."
      ] }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("b", { children: "Unit 11 is our gate." }),
        " Park in front of it and report in, we will help you load."
      ] })
    ],
    done: "Thank you! You will get an answer within one working day.",
    versturen: "Sending…",
    verstuur: "Send message"
  }
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/ContactPage.tsx");
const ContactPage = () => {
  const { status, error, mailto, sending, handleSubmit } = useAanvraag({
    source: "contact",
    messageField: "bericht",
    mailSubject: "Contact"
  });
  const t = useCopy(CONTACT_COPY);
  const lp = useLokaalPad();
  return /* @__PURE__ */ jsxs("div", { className: "ct-page", children: [
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        ...useSeo("contact"),
        jsonLd: [
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: lp("/") },
            { name: "Contact", path: lp("/contact") }
          ])
        ]
      }
    ),
    /* @__PURE__ */ jsx(V3Header, { lightAfter: 420 }),
    /* @__PURE__ */ jsx("div", { className: "redtop", children: /* @__PURE__ */ jsx("section", { className: "hero", children: /* @__PURE__ */ jsx("div", { className: "wrap", children: /* @__PURE__ */ jsxs("div", { className: "hero-grid", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "kick", children: t.kick }),
        /* @__PURE__ */ jsx("h1", { children: t.heroH1 }),
        /* @__PURE__ */ jsx("p", { children: t.heroP }),
        /* @__PURE__ */ jsxs("div", { className: "hbadges", children: [
          /* @__PURE__ */ jsxs("a", { href: "tel:+3236899065", children: [
            /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M22 16.92V21a1 1 0 0 1-1.11 1A19.86 19.86 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.29 1L7 10.5a16 16 0 0 0 6.5 6.5l1.75-1.8a1 1 0 0 1 1-.29l4 1a1 1 0 0 1 .75 1Z" }) }),
            " 03 689 90 65"
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "mailto:info@vernast-bouwdrogers.be", children: [
            /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
              /* @__PURE__ */ jsx("path", { d: "m2 7 10 6 10-6" })
            ] }),
            " info@vernast-bouwdrogers.be"
          ] }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
              /* @__PURE__ */ jsx("path", { d: "M12 6v6l4 2" })
            ] }),
            t.uren
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("a", { className: "hero-map", href: "#locatie", "aria-label": t.ariaHeroMap, children: [
        /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 900 460", role: "img", "aria-hidden": "true", children: [
          /* @__PURE__ */ jsx("rect", { width: "900", height: "460", fill: "#F7F6F6" }),
          /* @__PURE__ */ jsx("rect", { x: "810", y: "0", width: "90", height: "460", fill: "#ECEAEA" }),
          /* @__PURE__ */ jsx("text", { x: "855", y: "230", textAnchor: "middle", fontFamily: "ui-monospace,monospace", fontSize: "13", fontWeight: "700", fill: "#b3afaf", transform: "rotate(-90 855 230)", children: "A12" }),
          /* @__PURE__ */ jsx("rect", { x: "690", y: "0", width: "72", height: "460", fill: "#E3E1E1" }),
          /* @__PURE__ */ jsx("line", { x1: "726", y1: "0", x2: "726", y2: "460", stroke: "#fff", strokeWidth: "4", strokeDasharray: "26 20" }),
          /* @__PURE__ */ jsx("text", { x: "672", y: "230", textAnchor: "middle", fontFamily: "ui-monospace,monospace", fontSize: "13", fontWeight: "700", fill: "#8a8686", transform: "rotate(-90 672 230)", children: "N177 · BOOMSESTEENWEG" }),
          /* @__PURE__ */ jsx("rect", { x: "40", y: "350", width: "686", height: "52", fill: "#E3E1E1" }),
          /* @__PURE__ */ jsx("text", { x: "420", y: "396", fontFamily: "ui-monospace,monospace", fontSize: "13", fontWeight: "700", fill: "#8a8686", letterSpacing: "2", children: "KLEIDAAL" }),
          /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx("rect", { x: "480", y: "34", width: "170", height: "60", rx: "10", fill: "#fff", stroke: "#d9d5d5", strokeWidth: "2" }),
            /* @__PURE__ */ jsx("text", { x: "565", y: "60", textAnchor: "middle", fontFamily: "ui-monospace,monospace", fontSize: "11.5", fontWeight: "700", fill: "#8a8686", letterSpacing: "1.5", children: "KIA VERMANT" }),
            /* @__PURE__ */ jsx("text", { x: "565", y: "80", textAnchor: "middle", fontFamily: "system-ui", fontSize: "11.5", fill: "#b3afaf", children: t.herkenning })
          ] }),
          /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx("rect", { x: "480", y: "128", width: "170", height: "72", rx: "10", fill: "#fff", stroke: "#d9d5d5", strokeWidth: "2" }),
            /* @__PURE__ */ jsx("text", { x: "565", y: "160", textAnchor: "middle", fontFamily: "ui-monospace,monospace", fontSize: "13", fontWeight: "700", fill: "#3a3737", letterSpacing: "2", children: "TESLA" }),
            /* @__PURE__ */ jsx("text", { x: "565", y: "182", textAnchor: "middle", fontFamily: "system-ui", fontSize: "12", fill: "#8a8686", children: t.eerstTesla })
          ] }),
          /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx("rect", { x: "462", y: "236", width: "188", height: "86", rx: "10", fill: "#fff", stroke: "#d9d5d5", strokeWidth: "2" }),
            /* @__PURE__ */ jsx("rect", { x: "462", y: "236", width: "188", height: "26", rx: "10", fill: "#C8102E" }),
            /* @__PURE__ */ jsx("text", { x: "556", y: "254", textAnchor: "middle", fontFamily: "ui-monospace,monospace", fontSize: "12", fontWeight: "700", fill: "#fff", letterSpacing: "2", children: "CARGLASS" }),
            /* @__PURE__ */ jsx("text", { x: "556", y: "286", textAnchor: "middle", fontFamily: "system-ui", fontSize: "12", fill: "#8a8686", children: t.daarnaCarglass }),
            /* @__PURE__ */ jsx("text", { x: "556", y: "304", textAnchor: "middle", fontFamily: "system-ui", fontSize: "12", fill: "#8a8686", children: t.rechtsIn })
          ] }),
          /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx("rect", { x: "40", y: "216", width: "250", height: "100", rx: "12", fill: "#C8102E" }),
            /* @__PURE__ */ jsx("text", { x: "165", y: "256", textAnchor: "middle", fontFamily: "ui-monospace,monospace", fontSize: "14", fontWeight: "700", fill: "#fff", letterSpacing: "2", children: "VERNAST · UNIT 11" }),
            /* @__PURE__ */ jsx("text", { x: "165", y: "280", textAnchor: "middle", fontFamily: "system-ui", fontSize: "12", fill: "rgba(255,255,255,.85)", children: t.hoofdAfhaal })
          ] }),
          /* @__PURE__ */ jsx("path", { className: "route-alt", d: "M855 16 L855 200 L740 288 L726 310", fill: "none", stroke: "#DE9AA5", strokeWidth: "4", strokeLinecap: "round" }),
          /* @__PURE__ */ jsx("circle", { cx: "855", cy: "16", r: "7", fill: "#DE9AA5", stroke: "#fff", strokeWidth: "3" }),
          /* @__PURE__ */ jsx("text", { x: "838", y: "20", textAnchor: "end", fontFamily: "system-ui", fontSize: "12", fontWeight: "600", fill: "#b3afaf", children: t.ofA12 }),
          /* @__PURE__ */ jsx("text", { x: "838", y: "37", textAnchor: "end", fontFamily: "system-ui", fontSize: "12", fontWeight: "600", fill: "#b3afaf", children: t.afrit }),
          /* @__PURE__ */ jsx("path", { className: "route-line", d: "M726 16 L726 376 L96 376", fill: "none", stroke: "#C8102E", strokeWidth: "5", strokeLinecap: "round" }),
          /* @__PURE__ */ jsx("circle", { className: "pin-pulse", cx: "96", cy: "376", r: "10", fill: "none", stroke: "#C8102E", strokeWidth: "3" }),
          /* @__PURE__ */ jsx("circle", { cx: "96", cy: "376", r: "9", fill: "#C8102E", stroke: "#fff", strokeWidth: "3" }),
          /* @__PURE__ */ jsx("circle", { className: "car-dot", r: "8", fill: "#141414", stroke: "#fff", strokeWidth: "3" }),
          /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx("circle", { cx: "726", cy: "16", r: "8", fill: "#3a3737", stroke: "#fff", strokeWidth: "3" }),
            /* @__PURE__ */ jsx("text", { x: "700", y: "26", textAnchor: "end", fontFamily: "system-ui", fontSize: "12", fontWeight: "600", fill: "#8a8686", children: t.vanAntwerpen })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hm-cap", children: [
          /* @__PURE__ */ jsx("i", {}),
          t.mapCap
        ] })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "chan", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick", children: t.chanKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec", children: t.chanH2 })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "ch-grid", children: [
        /* @__PURE__ */ jsxs("a", { className: "ch", href: "tel:+3236899065", children: [
          /* @__PURE__ */ jsx("span", { className: "ci", children: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M22 16.92V21a1 1 0 0 1-1.11 1A19.86 19.86 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.29 1L7 10.5a16 16 0 0 0 6.5 6.5l1.75-1.8a1 1 0 0 1 1-.29l4 1a1 1 0 0 1 .75 1Z" }) }) }),
          /* @__PURE__ */ jsx("h3", { children: t.belH }),
          /* @__PURE__ */ jsx("p", { children: t.belP }),
          /* @__PURE__ */ jsx("span", { className: "cl", children: "03 689 90 65" })
        ] }),
        /* @__PURE__ */ jsxs("a", { className: "ch", href: "mailto:info@vernast-bouwdrogers.be", children: [
          /* @__PURE__ */ jsx("span", { className: "ci", children: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
            /* @__PURE__ */ jsx("path", { d: "m2 7 10 6 10-6" })
          ] }) }),
          /* @__PURE__ */ jsx("h3", { children: t.mailH }),
          /* @__PURE__ */ jsx("p", { children: t.mailP }),
          /* @__PURE__ */ jsx("span", { className: "cl", children: "info@vernast-bouwdrogers.be" })
        ] }),
        /* @__PURE__ */ jsxs("a", { className: "ch", href: "mailto:administratie@vernast.be", children: [
          /* @__PURE__ */ jsx("span", { className: "ci", children: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
            /* @__PURE__ */ jsx("path", { d: "M14 2v6h6" }),
            /* @__PURE__ */ jsx("path", { d: "M16 13H8" }),
            /* @__PURE__ */ jsx("path", { d: "M16 17H8" })
          ] }) }),
          /* @__PURE__ */ jsx("h3", { children: t.factH }),
          /* @__PURE__ */ jsx("p", { children: t.factP }),
          /* @__PURE__ */ jsx("span", { className: "cl", children: "administratie@vernast.be" })
        ] }),
        /* @__PURE__ */ jsxs("a", { className: "ch", href: lp("/klantservice"), children: [
          /* @__PURE__ */ jsx("span", { className: "ci", children: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M14.7 6.3a5 5 0 0 0-6.9 6.9L3 18v3h3l4.8-4.8a5 5 0 0 0 6.9-6.9L14 12l-2-2z" }) }) }),
          /* @__PURE__ */ jsx("h3", { children: t.huurH }),
          /* @__PURE__ */ jsx("p", { children: t.huurP }),
          /* @__PURE__ */ jsx("span", { className: "cl", children: t.naarKs })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "loc", id: "locatie", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick", children: t.locKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec", style: { color: "#fff" }, children: t.locH2 }),
        /* @__PURE__ */ jsx("p", { className: "lede", style: { color: "rgba(255,255,255,.78)" }, children: t.locLede })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "loc-grid2", children: [
        /* @__PURE__ */ jsxs("div", { className: "lc2", children: [
          /* @__PURE__ */ jsxs("div", { className: "lt", children: [
            /* @__PURE__ */ jsx("span", { className: "ic", children: /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("path", { d: "M3 21h18" }),
              /* @__PURE__ */ jsx("path", { d: "M5 21V7l7-4 7 4v14" }),
              /* @__PURE__ */ jsx("path", { d: "M9 21v-6h6v6" })
            ] }) }),
            /* @__PURE__ */ jsx("h3", { children: t.hfdH })
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("b", { children: "Vernast Bouwdrogers" }),
            /* @__PURE__ */ jsx("br", {}),
            "Boomsesteenweg 12, Unit 11 · 2630 Aartselaar"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "lrow", children: [
            /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
              /* @__PURE__ */ jsx("path", { d: "M12 6v6l4 2" })
            ] }),
            /* @__PURE__ */ jsx("span", { children: t.kantoor })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "lrow", children: [
            /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" }),
              /* @__PURE__ */ jsx("circle", { cx: "12", cy: "10", r: "3" })
            ] }),
            /* @__PURE__ */ jsx("span", { children: t.parkeren })
          ] }),
          /* @__PURE__ */ jsxs("a", { className: "lgo", href: MAPS_URL, target: "_blank", rel: "noopener", children: [
            t.maps,
            /* @__PURE__ */ jsxs("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
              /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lc2", children: [
          /* @__PURE__ */ jsxs("div", { className: "lt", children: [
            /* @__PURE__ */ jsx("span", { className: "ic", children: /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" }),
              /* @__PURE__ */ jsx("path", { d: "M3 6h18" }),
              /* @__PURE__ */ jsx("path", { d: "M16 10a4 4 0 0 1-8 0" })
            ] }) }),
            /* @__PURE__ */ jsx("h3", { children: t.afhaalH })
          ] }),
          /* @__PURE__ */ jsx("p", { children: t.afhaalP }),
          /* @__PURE__ */ jsxs("div", { className: "lrow", children: [
            /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
              /* @__PURE__ */ jsx("path", { d: "M12 6v6l4 2" })
            ] }),
            /* @__PURE__ */ jsx("span", { children: t.afhaalUren })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "lrow", children: [
            /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M20 6 9 17l-5-5" }) }),
            /* @__PURE__ */ jsx("span", { children: t.reserveer(lp) })
          ] }),
          /* @__PURE__ */ jsxs("a", { className: "lgo", href: lp("/afhalen"), children: [
            t.zoWerkt,
            /* @__PURE__ */ jsxs("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
              /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lc2 dark", children: [
          /* @__PURE__ */ jsx("span", { className: "a12", children: "A12" }),
          /* @__PURE__ */ jsx("h3", { children: t.snelH }),
          /* @__PURE__ */ jsx("p", { className: "ldk", children: t.snelP }),
          t.stappen.map((stap, i) => /* @__PURE__ */ jsxs("div", { className: "lstep", children: [
            /* @__PURE__ */ jsx("i", { children: i + 1 }),
            /* @__PURE__ */ jsx("span", { children: stap })
          ] }, i)),
          /* @__PURE__ */ jsxs("a", { className: "lgo w", href: "#route", children: [
            t.routeFotos,
            /* @__PURE__ */ jsxs("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
              /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "map-card", children: [
        /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 900 460", role: "img", "aria-label": t.ariaMap, children: [
          /* @__PURE__ */ jsx("rect", { width: "900", height: "460", fill: "#F7F6F6" }),
          /* @__PURE__ */ jsx("rect", { x: "810", y: "0", width: "90", height: "460", fill: "#ECEAEA" }),
          /* @__PURE__ */ jsx("text", { x: "855", y: "230", textAnchor: "middle", fontFamily: "ui-monospace,monospace", fontSize: "13", fontWeight: "700", fill: "#b3afaf", transform: "rotate(-90 855 230)", children: "A12" }),
          /* @__PURE__ */ jsx("rect", { x: "690", y: "0", width: "72", height: "460", fill: "#E3E1E1" }),
          /* @__PURE__ */ jsx("line", { x1: "726", y1: "0", x2: "726", y2: "460", stroke: "#fff", strokeWidth: "4", strokeDasharray: "26 20" }),
          /* @__PURE__ */ jsx("text", { x: "672", y: "230", textAnchor: "middle", fontFamily: "ui-monospace,monospace", fontSize: "13", fontWeight: "700", fill: "#8a8686", transform: "rotate(-90 672 230)", children: "N177 · BOOMSESTEENWEG" }),
          /* @__PURE__ */ jsx("rect", { x: "40", y: "350", width: "686", height: "52", fill: "#E3E1E1" }),
          /* @__PURE__ */ jsx("text", { x: "420", y: "396", fontFamily: "ui-monospace,monospace", fontSize: "13", fontWeight: "700", fill: "#8a8686", letterSpacing: "2", children: "KLEIDAAL" }),
          /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx("rect", { x: "480", y: "34", width: "170", height: "60", rx: "10", fill: "#fff", stroke: "#d9d5d5", strokeWidth: "2" }),
            /* @__PURE__ */ jsx("text", { x: "565", y: "60", textAnchor: "middle", fontFamily: "ui-monospace,monospace", fontSize: "11.5", fontWeight: "700", fill: "#8a8686", letterSpacing: "1.5", children: "KIA VERMANT" }),
            /* @__PURE__ */ jsx("text", { x: "565", y: "80", textAnchor: "middle", fontFamily: "system-ui", fontSize: "11.5", fill: "#b3afaf", children: t.herkenning })
          ] }),
          /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx("rect", { x: "480", y: "128", width: "170", height: "72", rx: "10", fill: "#fff", stroke: "#d9d5d5", strokeWidth: "2" }),
            /* @__PURE__ */ jsx("text", { x: "565", y: "160", textAnchor: "middle", fontFamily: "ui-monospace,monospace", fontSize: "13", fontWeight: "700", fill: "#3a3737", letterSpacing: "2", children: "TESLA" }),
            /* @__PURE__ */ jsx("text", { x: "565", y: "182", textAnchor: "middle", fontFamily: "system-ui", fontSize: "12", fill: "#8a8686", children: t.eerstTesla })
          ] }),
          /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx("rect", { x: "462", y: "236", width: "188", height: "86", rx: "10", fill: "#fff", stroke: "#d9d5d5", strokeWidth: "2" }),
            /* @__PURE__ */ jsx("rect", { x: "462", y: "236", width: "188", height: "26", rx: "10", fill: "#C8102E" }),
            /* @__PURE__ */ jsx("text", { x: "556", y: "254", textAnchor: "middle", fontFamily: "ui-monospace,monospace", fontSize: "12", fontWeight: "700", fill: "#fff", letterSpacing: "2", children: "CARGLASS" }),
            /* @__PURE__ */ jsx("text", { x: "556", y: "286", textAnchor: "middle", fontFamily: "system-ui", fontSize: "12", fill: "#8a8686", children: t.daarnaCarglass }),
            /* @__PURE__ */ jsx("text", { x: "556", y: "304", textAnchor: "middle", fontFamily: "system-ui", fontSize: "12", fill: "#8a8686", children: t.rechtsIn })
          ] }),
          /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx("rect", { x: "40", y: "216", width: "250", height: "100", rx: "12", fill: "#C8102E" }),
            /* @__PURE__ */ jsx("text", { x: "165", y: "256", textAnchor: "middle", fontFamily: "ui-monospace,monospace", fontSize: "14", fontWeight: "700", fill: "#fff", letterSpacing: "2", children: "VERNAST · UNIT 11" }),
            /* @__PURE__ */ jsx("text", { x: "165", y: "280", textAnchor: "middle", fontFamily: "system-ui", fontSize: "12", fill: "rgba(255,255,255,.85)", children: t.hoofdAfhaal })
          ] }),
          /* @__PURE__ */ jsx("path", { className: "route-alt", d: "M855 16 L855 200 L740 288 L726 310", fill: "none", stroke: "#DE9AA5", strokeWidth: "4", strokeLinecap: "round" }),
          /* @__PURE__ */ jsx("circle", { cx: "855", cy: "16", r: "7", fill: "#DE9AA5", stroke: "#fff", strokeWidth: "3" }),
          /* @__PURE__ */ jsx("text", { x: "838", y: "20", textAnchor: "end", fontFamily: "system-ui", fontSize: "12", fontWeight: "600", fill: "#b3afaf", children: t.ofA12 }),
          /* @__PURE__ */ jsx("text", { x: "838", y: "37", textAnchor: "end", fontFamily: "system-ui", fontSize: "12", fontWeight: "600", fill: "#b3afaf", children: t.afrit }),
          /* @__PURE__ */ jsx("path", { className: "route-line", d: "M726 16 L726 376 L96 376", fill: "none", stroke: "#C8102E", strokeWidth: "5", strokeLinecap: "round" }),
          /* @__PURE__ */ jsx("circle", { className: "pin-pulse", cx: "96", cy: "376", r: "10", fill: "none", stroke: "#C8102E", strokeWidth: "3" }),
          /* @__PURE__ */ jsx("circle", { cx: "96", cy: "376", r: "9", fill: "#C8102E", stroke: "#fff", strokeWidth: "3" }),
          /* @__PURE__ */ jsx("circle", { className: "car-dot", r: "8", fill: "#141414", stroke: "#fff", strokeWidth: "3" }),
          /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx("circle", { cx: "726", cy: "16", r: "8", fill: "#3a3737", stroke: "#fff", strokeWidth: "3" }),
            /* @__PURE__ */ jsx("text", { x: "700", y: "26", textAnchor: "end", fontFamily: "system-ui", fontSize: "12", fontWeight: "600", fill: "#8a8686", children: t.vanAntwerpen })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "map-leg", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("i", { style: { background: "#C8102E" } }),
            t.legUnit
          ] }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("i", { style: { background: "#3a3737" } }),
            t.leg1
          ] }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("i", { style: { background: "#C8102E" } }),
            t.leg2
          ] }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("i", { style: { background: "#E3E1E1" } }),
            t.leg3
          ] }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("i", { style: { background: "#DE9AA5" } }),
            t.legAlt
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "route", id: "route", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick", children: t.routeKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec", children: t.routeH2 })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rt-grid", children: [
        /* @__PURE__ */ jsxs("div", { className: "rt", children: [
          /* @__PURE__ */ jsxs("div", { className: "im", children: [
            /* @__PURE__ */ jsx("span", { className: "n", children: "1" }),
            /* @__PURE__ */ jsx("img", { src: "/vernast/route-1.webp", alt: t.alt1, loading: "lazy", decoding: "async" })
          ] }),
          /* @__PURE__ */ jsx("p", { children: t.route[0] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rt", children: [
          /* @__PURE__ */ jsxs("div", { className: "im", children: [
            /* @__PURE__ */ jsx("span", { className: "n", children: "2" }),
            /* @__PURE__ */ jsx("img", { src: "/vernast/route-2.webp", alt: t.alt2, loading: "lazy", decoding: "async" })
          ] }),
          /* @__PURE__ */ jsx("p", { children: t.route[1] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rt", children: [
          /* @__PURE__ */ jsxs("div", { className: "im", children: [
            /* @__PURE__ */ jsx("span", { className: "n", children: "3" }),
            /* @__PURE__ */ jsx("img", { src: "/vernast/route-3.webp", alt: t.alt3, loading: "lazy", decoding: "async" })
          ] }),
          /* @__PURE__ */ jsx("p", { children: t.route[2] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rt", children: [
          /* @__PURE__ */ jsxs("div", { className: "im", children: [
            /* @__PURE__ */ jsx("span", { className: "n", children: "4" }),
            /* @__PURE__ */ jsx("img", { src: "/vernast/route-4.webp", alt: t.alt4, loading: "lazy", decoding: "async" })
          ] }),
          /* @__PURE__ */ jsx("p", { children: t.route[3] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "cform", id: "formulier", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick", children: t.formKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec", children: t.formH2 }),
        /* @__PURE__ */ jsx("p", { className: "lede", children: t.formLede })
      ] }),
      /* @__PURE__ */ jsx("form", { className: "fshell", onSubmit: handleSubmit, children: status === "done" ? /* @__PURE__ */ jsx(AanvraagDone, { text: t.done }) : /* @__PURE__ */ jsxs("div", { id: "formBody", children: [
        /* @__PURE__ */ jsxs("div", { className: "frow", children: [
          /* @__PURE__ */ jsxs("div", { className: "fld", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "fVoor", children: t.lVoor }),
            /* @__PURE__ */ jsx("input", { type: "text", id: "fVoor", name: "voornaam", placeholder: t.phVoor, required: true })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "fld", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "fNaam", children: t.lNaam }),
            /* @__PURE__ */ jsx("input", { type: "text", id: "fNaam", name: "naam", placeholder: t.phNaam, required: true })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "frow", children: [
          /* @__PURE__ */ jsxs("div", { className: "fld", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "fMail", children: t.lMail }),
            /* @__PURE__ */ jsx("input", { type: "email", id: "fMail", name: "email", placeholder: t.phMail, required: true })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "fld", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "fTel", children: t.lTel }),
            /* @__PURE__ */ jsx("input", { type: "tel", id: "fTel", name: "telefoon", placeholder: "04.." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "frow one", children: /* @__PURE__ */ jsxs("div", { className: "fld", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "fOnd", children: t.lOnd }),
          /* @__PURE__ */ jsxs("select", { id: "fOnd", name: "onderwerp", children: [
            /* @__PURE__ */ jsx("option", { children: t.o1 }),
            /* @__PURE__ */ jsx("option", { children: t.o2 }),
            /* @__PURE__ */ jsx("option", { children: t.o3 }),
            /* @__PURE__ */ jsx("option", { children: t.o4 }),
            /* @__PURE__ */ jsx("option", { children: t.o5 })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "frow one", children: /* @__PURE__ */ jsxs("div", { className: "fld", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "fMsg", children: t.lMsg }),
          /* @__PURE__ */ jsx("textarea", { id: "fMsg", name: "bericht", rows: 5, placeholder: t.phMsg, required: true })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "fsend", children: [
          /* @__PURE__ */ jsx("small", { children: t.privNote }),
          /* @__PURE__ */ jsxs("button", { className: "btn aanv-btn", type: "submit", disabled: sending, children: [
            sending ? t.versturen : t.verstuur,
            /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
              /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(AanvraagHoneypot, {}),
        /* @__PURE__ */ jsx(AanvraagError, { error, mailto })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(V3Footer, {})
  ] });
};
export {
  ContactPage as default
};

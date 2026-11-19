import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { P as PageMeta } from "./PageMeta-BXulEWcY.js";
import { l as V3Header } from "./V3Header-BeIMcMg7.js";
import { V as V3Footer } from "./V3Footer-9z4J1I4x.js";
import { o as organizationSchema, b as breadcrumbSchema } from "./schema-VJMHyxOJ.js";
import { u as useSeo } from "./seo-BMvlJeai.js";
import { u as useCopy, a as useLokaalPad, b as useTaal, h as formatEuro } from "../main.mjs";
import { b as PUMP } from "./verhuur-CgnDb-wO.js";
import { a as euro } from "./verhuur-8XCQs1EE.js";
import { u as useAanvraag, b as AanvraagDone, A as AanvraagHoneypot, a as AanvraagError } from "./AanvraagForm-CNDpbMyw.js";
import "vite-react-ssg";
import "react";
import "./FontPreload-C6Rzq6ld.js";
import "./verhuur.fr-CrIPL5Eo.js";
import "lucide-react";
import "./tarieven-ZrzMF0e-.js";
import "./packages-DdkKuPcF.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/KlantservicePage.copy.tsx");
const KLANTSERVICE_COPY = {
  nl: {
    q1: "Bel 03 689 90 65",
    fixKick: "Storing aan een toestel",
    verKick: "Verlengen of stoppen",
    o2: "Storing aan een toestel",
    o4: "Verlengen of stoppen",
    fx1: "Bouwdroger start niet of valt uit",
    fx2: "Zekering springt regelmatig",
    fx3: "Bouwdroger overgelopen",
    fx4: "Condenspomp voert geen water af",
    fx5: "Reservoir-lampje brandt",
    fx6: "Het droogt trager dan verwacht",
    fx7: "IJsvorming op het toestel",
    callH: "Toestel defect of beschadigd?",
    f5p: (lp, prijs) => /* @__PURE__ */ jsxs(Fragment, { children: [
      "Beu om gemiddeld 2 keer per dag te legen? Voeg de ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/toebehoren/condenspomp"), children: "condenspomp" }),
      " toe (",
      prijs,
      " per bouwdroger per dag) en het water wordt dag en nacht automatisch afgevoerd."
    ] }),
    done: "Bedankt! We antwoorden dezelfde werkdag. Dringend? Bel 03 689 90 65.",
    versturen: "Versturen…",
    verstuur: "Verstuur uw vraag",
    crumb: "Klantenservice",
    altHero: "Rustige, tevreden klant van Vernast",
    altPay: "Klant betaalt eenvoudig online met kaart en gsm",
    altTech: "Vernast technicus",
    phVraag: "Vermeld indien mogelijk uw boekingsnummer.",
    heroKick: "Klantenservice",
    li6: "Kosteloos annuleren tot 48 u voor levering",
    li5: "Factuur meteen na betaling per e-mail",
    li4: "Saldo via Bancontact of kaart bij onze technicus",
    li3: "Niets meer te regelen bij levering",
    li2: "Bancontact, kredietkaart of overschrijving",
    li1: "Factuur direct na betaling in uw mailbox",
    heroH1: "Hoe kunnen we u helpen?",
    heroP: "Een vraag over uw betaling, een toestel dat niet doet wat het moet, of uw huurperiode verlengen? Hieronder vindt u meteen een antwoord, of u belt ons gewoon.",
    q2: "Mail ons",
    q3: "Storing melden",
    betH: /* @__PURE__ */ jsx(Fragment, { children: "Betalingen & facturen" }),
    topKick: "Waarmee kunnen we helpen?",
    topH2: "Kies uw onderwerp.",
    tp1P: "Online betalen met 5% korting, betalen bij levering, en waar uw factuur blijft.",
    tgAntw: "Bekijk antwoorden →",
    tp2H: "Storing aan een toestel",
    tp2P: "Bouwdroger stopt, zekering springt of pomp voert niet af? Los het in 2 minuten zelf op.",
    tgOpl: "Bekijk oplossingen →",
    tp3H: "Verlengen of stoppen",
    tp3P: "Nog niet droog of net vroeger klaar? Zo past u uw huurperiode aan.",
    tgWerkt: "Zo werkt het →",
    levH: /* @__PURE__ */ jsx(Fragment, { children: "Levering & installatie" }),
    tp4P: "Wanneer komen we, wat is inbegrepen en wat moet u klaarzetten?",
    tgVerloopt: "Zo verloopt het →",
    tp5H: /* @__PURE__ */ jsx(Fragment, { children: "Dekking & eigen risico" }),
    tp5P: "Wat dekt de waarborg, en wat als een toestel beschadigd raakt op de werf?",
    tgDekking: "Naar dekking →",
    tp6H: /* @__PURE__ */ jsx(Fragment, { children: "Afhalen & terugbrengen" }),
    tp6P: "Vervoer rechtopstaand, zware toestellen en ons afhaalpunt langs de A12 in Aartselaar.",
    tgEerst: "Lees dit eerst →",
    payH2: "Betalen zoals het u past. Factuur meteen in uw mailbox.",
    payLede: "U kiest zelf hoe u betaalt, volledig online met korting, of een kleine orderbevestiging en de rest bij levering. In beide gevallen zonder voorschotfacturen of verrassingen.",
    po1L: "Meest gekozen · 5% korting",
    po1H: "Alles online betalen",
    po1P: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Betaal uw volledige pakket meteen online en ontvang ",
      /* @__PURE__ */ jsx("b", { children: "5% korting" }),
      " op uw pakketprijs."
    ] }),
    po2L: "Flexibel",
    po2H: "€ 50 nu, de rest bij levering",
    po2P: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Bevestig uw boeking met ",
      /* @__PURE__ */ jsx("b", { children: "€ 50 orderbevestiging" }),
      " en betaal het saldo ter plaatse bij de installatie."
    ] }),
    prFactuur: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Factuur niet ontvangen?" }),
      /* @__PURE__ */ jsxs("span", { children: [
        "Kijk eerst in uw spamfolder. Niets gevonden? Mail uw boekingsnummer naar ",
        /* @__PURE__ */ jsx("a", { href: "mailto:administratie@vernast.be", style: { color: "var(--red)", fontWeight: 700 }, children: "administratie@vernast.be" }),
        " en u ontvangt ze binnen het uur opnieuw."
      ] })
    ] }),
    prZak: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Zakelijke klant?" }),
      /* @__PURE__ */ jsx("span", { children: "Vul bij het boeken uw btw-nummer in, dan staat het automatisch correct op de factuur. Aanpassen achteraf kan via een mailtje." })
    ] }),
    prVerl: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Verlenging betalen" }),
      /* @__PURE__ */ jsx("span", { children: "Verlengt u binnen de garantie, dan betaalt u niets. Verlengt u zelf, dan ontvangt u een betaallink per e-mail, geen nieuwe boeking nodig." })
    ] }),
    fixH2: "Los de meeste problemen in 2 minuten zelf op.",
    fixLede: "Onze toestellen zijn robuust, maar op een werf kan altijd iets gebeuren. Klap de melding open die bij uw situatie past, en u krijgt de oplossing stap voor stap.",
    f1a: "Controleer of het stopcontact werkt (test met een ander toestel).",
    f1b: "Kijk in de zekeringkast en schakel de automaat terug in.",
    f1c: "Wacht 10 minuten: na een stroomonderbreking herstart het toestel automatisch.",
    f1p: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Blijft het toestel uitvallen? Bel ",
      /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", children: "03 689 90 65" }),
      ", wij wisselen het binnen 24 uur om."
    ] }),
    f2a: "Sluit de bouwdroger aan op een aparte stroomgroep, niet samen met ander zwaar materieel.",
    f2b: "Gebruik geen lichte huishoudverlengkabel: de meegeleverde kabels zijn berekend op het vermogen.",
    f2p: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Geen (werkende) elektriciteitskast op de werf? Wij verhuren een werfverdeelkast (paddenstoel). Bel ",
      /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", children: "03 689 90 65" }),
      "."
    ] }),
    f3a: "Zet de bouwdroger uit.",
    f3b: "Controleer of het reservoir en de afvoerdarm goed vastzitten en nergens loszitten of knikken.",
    f3c: "Start het toestel terug op.",
    f3p: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Loopt het opnieuw over? Bel ",
      /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", children: "03 689 90 65" }),
      ", dan vervangen we de pomp of het toestel gratis."
    ] }),
    f4a: "Controleer of de afvoerslang nergens geknikt of geplooid ligt.",
    f4b: "De pomp overbrugt max. 4 m hoogte: leg de slang zo kort en recht mogelijk.",
    f4c: "Koppel de slang even los. Loopt er water uit, dan zit de verstopping in de slang.",
    f4p: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Het condenswater is zuiver en mag in elke afvoer. Pomp defect? Bel ",
      /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", children: "03 689 90 65" }),
      ", wij vervangen ze gratis."
    ] }),
    f5a: "Leeg het waterreservoir en schuif het correct terug tot het vastklikt.",
    f5b: "Het toestel herneemt automatisch, u hoeft niets te herstarten.",
    f6a: "Houd ramen en deuren gesloten, anders droogt u de buitenlucht mee.",
    f6b: "Hou de temperatuur boven 15 °C. In koude ruimtes werkt condensdroging trager.",
    f6c: "Controleer of het toestel vrij staat: 50 cm ruimte rond de aanzuig- en uitblaaszijde.",
    f6p: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Twijfelt u? Bel ",
      /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", children: "03 689 90 65" }),
      ", wij meten mee en plaatsen indien nodig extra capaciteit. Binnen de garantie verlengt u kosteloos.*"
    ] }),
    f7a: "Zet het toestel uit en laat het 30 minuten ontdooien.",
    f7b: /* @__PURE__ */ jsx(Fragment, { children: "IJsvorming wijst op een te koude ruimte (< 8 °C)." }),
    f7p: "In koude kelders of winterse werven is een adsorptiedroger of bijverwarming de juiste oplossing. Bel ons en wij wisselen de opstelling om.",
    callP: "Bel ons meteen. 9 op 10 storingen lossen we telefonisch op; lukt dat niet, dan staat er binnen 24 uur een technicus met een vervangtoestel op uw werf, zonder extra kosten.",
    callBtn: "Bel direct 03 689 90 65",
    fbH: "Storing niet opgelost? Wij wel.",
    fbP: "Bel ons op werkdagen tussen 08:00 en 17:00. Kunnen we het niet telefonisch oplossen, dan staat er binnen 24 uur een technicus met een vervangtoestel op uw werf, zonder extra kosten.",
    fbBtn: "Bel 03 689 90 65",
    levH2: "Geleverd, geplaatst en afgesteld. U hoeft niets te tillen.",
    levLede: "Uw pakket wordt geleverd op het moment dat u bij de boeking koos. Onze technicus doet de volledige installatie en legt kort uit waar u op let.",
    ex1H: "Levering op uw gekozen datum",
    ex1P: "U kiest zelf uw leverdag en dagdeel. Transport, levering én ophaling zijn volledig inbegrepen in uw pakketprijs.",
    ex2H: "Installatie door onze technicus",
    ex2P: "Wij positioneren de toestellen, sluiten de condensafvoer aan, stellen de streefvochtigheid in en doen de startmeting.",
    ex3H: "Wat zet u klaar?",
    ex3P: "Een werkend stopcontact op een aparte stroomgroep en een vrije doorgang naar de te drogen ruimtes. Meer is het niet.",
    ex4H: "Verdieping? Ook goed.",
    ex4P: "Plaatsing op een verdieping via trap of lift is gratis. Enkel wanneer bouwdrogers via een ladder naar boven moeten, rekenen we eenmalig € 39 draagwerk.",
    afKick: /* @__PURE__ */ jsx(Fragment, { children: "Zelf afhalen & vervoer" }),
    afH2: "Haalt u zelf af? Lees dit eerst even.",
    afLede: "Losse toestellen haalt u af aan ons afhaalpunt langs de A12 in Aartselaar. Goed vervoeren is belangrijk: zo start uw bouwdroger meteen en zonder schade op.",
    af1E: "Belangrijk",
    af1H: "Vervoer de bouwdroger altijd rechtopstaand",
    af1P: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Een bouwdroger mag ",
      /* @__PURE__ */ jsx("b", { children: "niet plat" }),
      " vervoerd worden: de koelvloeistof loopt dan uit de compressor. Toch plat vervoerd? Zet het toestel ",
      /* @__PURE__ */ jsx("b", { children: "24 uur rechtop" }),
      " en wacht vóór u het opstart. Zo voorkomt u schade aan de compressor."
    ] }),
    af2E: "Goed om weten",
    af2H: "De toestellen zijn zwaar",
    af2P: "Reken op 25 tot 40 kg per bouwdroger. Kom met twee, breng een ruime koffer of aanhangwagen mee en til met een recht gedragen rug. Liever niet sleuren? Wij leveren en installeren álles voor u, aan te raden voor oudere klanten.",
    af3E: "Afhaalpunt",
    af3H: "Langs de A12 in Aartselaar",
    af3P: /* @__PURE__ */ jsxs(Fragment, { children: [
      "U haalt af aan ons magazijn: ",
      /* @__PURE__ */ jsx("b", { children: "Boomsesteenweg 12, Unit 11, 2630 Aartselaar" }),
      ", vlot bereikbaar langs de A12. Enkel op afspraak: u kiest uw afhaalmoment bij de reservatie en alles staat klaar. Wij laden mee in en geven korte uitleg."
    ] }),
    digKick: "Volledig digitaal",
    digH2: "Ook na uw boeking regelt u alles online.",
    digLede: "Geen wachtmuziek nodig: verlengen, uw ophaling plannen of een factuur opvragen doet u in enkele klikken. Liever een mens aan de lijn? Bellen kan altijd.",
    dg1: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Verlengen online" }),
      /* @__PURE__ */ jsx("span", { children: "Vraag uw verlenging aan en ontvang meteen een betaallink per e-mail. Binnen de garantie verlengt u kosteloos." })
    ] }),
    dg2: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Ophaling plannen" }),
      /* @__PURE__ */ jsx("span", { children: "Droog gemeten? Kies zelf de dag en het dagdeel waarop wij de toestellen komen ophalen." })
    ] }),
    dg3: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Factuur opvragen" }),
      /* @__PURE__ */ jsx("span", { children: "Uw factuur staat direct na betaling in uw mailbox. Kwijt? Eén mailtje naar administratie@vernast.be volstaat." })
    ] }),
    verH2: "Nog niet droog? Dan verlengt u, vaak kosteloos.",
    verLede: "Uw pakket is berekend op 100% droog binnen de huurperiode. Toont de eindmeting toch nog vocht, dan verlengt u binnen de garantie zonder bij te betalen.*",
    v1E: "01 · Binnen de garantie",
    v1H: "Kosteloos verlengen",
    v1P: "Is uw woning niet droog binnen de berekende periode, dan huurt u kosteloos verder tot ze dat wél is. U belt of mailt ons, wij verlengen meteen, geen nieuwe boeking, geen extra factuur.",
    v2E: "02 · Zelf verlengen",
    v2H: "Langer huren op eigen vraag",
    v2P: "Wilt u de toestellen langer houden (bv. voor een volgende bouwfase)? Eén telefoontje en wij verlengen aan dezelfde dagprijs. U ontvangt een betaallink per e-mail.",
    v3E: "03 · Vroeger klaar",
    v3H: "Vroeger stoppen",
    v3P: "Droog vóór het einde van de huurperiode? Meld het ons en wij plannen de ophaling vroeger in. Bij pakketten met eindmeting bevestigen we eerst samen dat alles op streefwaarde zit.",
    verNote: "* De garantie geldt wanneer de externe omstandigheden voldoen: ramen en deuren gesloten, temperatuur op peil en de toestellen ononderbroken in werking.",
    ctaH2: "Er toch niet uit? We helpen u persoonlijk.",
    ctaLede: "Beschrijf kort uw vraag of probleem en we nemen dezelfde werkdag contact op.",
    ciBel: "Bel ons",
    ciUren: "Ma–Vr 08:00–17:00",
    ciAntw: "antwoord binnen 4 werkuren",
    ciAfh: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Afhaalpunt & magazijn" }),
      /* @__PURE__ */ jsxs("span", { children: [
        "Boomsesteenweg 12, Unit 11 · 2630 Aartselaar",
        /* @__PURE__ */ jsx("br", {}),
        "Afhalen enkel op afspraak"
      ] })
    ] }),
    ciSpoed: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Storing met spoed?" }),
      /* @__PURE__ */ jsx("span", { children: "Bel eerst, 9 op 10 storingen lossen we telefonisch op. Anders binnen 24 u een technicus of vervangtoestel." })
    ] }),
    formH: "Stel uw vraag",
    lVoor: "Voornaam",
    lNaam: "Naam",
    lMail: "E-mailadres",
    lTel: "Telefoon",
    lOnd: "Onderwerp",
    o1: "Betaling of factuur",
    o3: "Levering of ophaling",
    o5: "Iets anders",
    lVraag: "Uw vraag",
    fnote: "We antwoorden dezelfde werkdag. Dringend? Bel 03 689 90 65."
  },
  fr: {
    q1: "Appelez le 03 689 90 65",
    fixKick: "Panne d'un appareil",
    verKick: "Prolonger ou arrêter",
    o2: "Panne d'un appareil",
    o4: "Prolonger ou arrêter",
    fx1: "Le déshumidificateur ne démarre pas ou s'arrête",
    fx2: "Le fusible saute régulièrement",
    fx3: "Le déshumidificateur a débordé",
    fx4: "La pompe à condensats n'évacue pas l'eau",
    fx5: "Le voyant du réservoir est allumé",
    fx6: "Le séchage est plus lent que prévu",
    fx7: "Formation de givre sur l'appareil",
    callH: "Appareil défectueux ou endommagé ?",
    f5p: (lp, prijs) => /* @__PURE__ */ jsxs(Fragment, { children: [
      "Marre de vider en moyenne 2 fois par jour ? Ajoutez la ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/toebehoren/condenspomp"), children: "pompe à condensats" }),
      " (",
      prijs,
      " par déshumidificateur et par jour) et l'eau est évacuée automatiquement jour et nuit."
    ] }),
    done: "Merci ! Nous répondons le jour ouvrable même. Urgent ? Appelez le 03 689 90 65.",
    versturen: "Envoi…",
    verstuur: "Envoyer votre question",
    crumb: "Service client",
    altHero: "Client de Vernast, serein et satisfait",
    altPay: "Un client paie facilement en ligne par carte et GSM",
    altTech: "Technicien Vernast",
    phVraag: "Mentionnez si possible votre numéro de réservation.",
    heroKick: "Service client",
    li6: "Annulation gratuite jusqu'à 48 h avant la livraison",
    li5: "Facture par e-mail dès le paiement",
    li4: "Solde par Bancontact ou carte auprès de notre technicien",
    li3: "Plus rien à régler à la livraison",
    li2: "Bancontact, carte de crédit ou virement",
    li1: "Facture dans votre boîte mail dès le paiement",
    heroH1: "Comment pouvons-nous vous aider ?",
    heroP: "Une question sur votre paiement, un appareil qui ne fonctionne pas comme il le devrait, ou vous souhaitez prolonger votre location ? Vous trouverez une réponse immédiate ci-dessous, ou appelez-nous simplement.",
    q2: "Écrivez-nous",
    q3: "Signaler une panne",
    betH: /* @__PURE__ */ jsx(Fragment, { children: "Paiements & factures" }),
    topKick: "En quoi pouvons-nous vous aider ?",
    topH2: "Choisissez votre sujet.",
    tp1P: "Payer en ligne avec 5 % de remise, payer à la livraison, et où se trouve votre facture.",
    tgAntw: "Voir les réponses →",
    tp2H: "Panne d'un appareil",
    tp2P: "Le déshumidificateur s'arrête, le fusible saute ou la pompe n'évacue pas ? Réglez-le vous-même en 2 minutes.",
    tgOpl: "Voir les solutions →",
    tp3H: "Prolonger ou arrêter",
    tp3P: "Pas encore sec ou terminé plus tôt ? Voici comment adapter votre période de location.",
    tgWerkt: "Comment ça marche →",
    levH: /* @__PURE__ */ jsx(Fragment, { children: "Livraison & installation" }),
    tp4P: "Quand venons-nous, qu'est-ce qui est compris et que devez-vous préparer ?",
    tgVerloopt: "Comment ça se passe →",
    tp5H: /* @__PURE__ */ jsx(Fragment, { children: "Couverture & franchise" }),
    tp5P: "Que couvre la garantie, et que se passe-t-il si un appareil est endommagé sur le chantier ?",
    tgDekking: "Vers la couverture →",
    tp6H: /* @__PURE__ */ jsx(Fragment, { children: "Retrait & retour" }),
    tp6P: "Transport en position verticale, appareils lourds et notre point de retrait le long de l'A12 à Aartselaar.",
    tgEerst: "À lire d'abord →",
    payH2: "Payez comme cela vous convient. Facture directement dans votre boîte mail.",
    payLede: "Vous choisissez vous-même comment payer : entièrement en ligne avec remise, ou une petite confirmation de commande et le reste à la livraison. Dans les deux cas, sans factures d'acompte ni surprises.",
    po1L: "Le plus choisi · 5 % de remise",
    po1H: "Tout payer en ligne",
    po1P: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Payez votre pack complet directement en ligne et recevez ",
      /* @__PURE__ */ jsx("b", { children: "5 % de remise" }),
      " sur le prix de votre pack."
    ] }),
    po2L: "Flexible",
    po2H: "50 € maintenant, le reste à la livraison",
    po2P: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Confirmez votre réservation avec ",
      /* @__PURE__ */ jsx("b", { children: "50 € de confirmation de commande" }),
      " et payez le solde sur place lors de l'installation."
    ] }),
    prFactuur: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Facture non reçue ?" }),
      /* @__PURE__ */ jsxs("span", { children: [
        "Vérifiez d'abord votre dossier spam. Rien trouvé ? Envoyez votre numéro de réservation à ",
        /* @__PURE__ */ jsx("a", { href: "mailto:administratie@vernast.be", style: { color: "var(--red)", fontWeight: 700 }, children: "administratie@vernast.be" }),
        " et vous la recevrez à nouveau dans l'heure."
      ] })
    ] }),
    prZak: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Client professionnel ?" }),
      /* @__PURE__ */ jsx("span", { children: "Indiquez votre numéro de TVA lors de la réservation, il figurera automatiquement correctement sur la facture. Une modification ultérieure est possible par simple e-mail." })
    ] }),
    prVerl: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Payer une prolongation" }),
      /* @__PURE__ */ jsx("span", { children: "Si vous prolongez dans le cadre de la garantie, vous ne payez rien. Si vous prolongez de votre propre initiative, vous recevez un lien de paiement par e-mail, sans nouvelle réservation." })
    ] }),
    fixH2: "Résolvez vous-même la plupart des problèmes en 2 minutes.",
    fixLede: "Nos appareils sont robustes, mais sur un chantier, un incident peut toujours survenir. Ouvrez le message qui correspond à votre situation et vous obtiendrez la solution étape par étape.",
    f1a: "Vérifiez que la prise fonctionne (testez avec un autre appareil).",
    f1b: "Regardez dans le tableau électrique et réenclenchez le disjoncteur.",
    f1c: "Attendez 10 minutes : après une coupure de courant, l'appareil redémarre automatiquement.",
    f1p: /* @__PURE__ */ jsxs(Fragment, { children: [
      "L'appareil continue de s'arrêter ? Appelez le ",
      /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", children: "03 689 90 65" }),
      ", nous l'échangeons dans les 24 heures."
    ] }),
    f2a: "Branchez le déshumidificateur sur un circuit électrique séparé, pas avec d'autres appareils lourds.",
    f2b: "N'utilisez pas de rallonge domestique légère : les câbles fournis sont dimensionnés pour la puissance.",
    f2p: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Pas de coffret électrique (qui fonctionne) sur le chantier ? Nous louons un coffret de distribution de chantier. Appelez le ",
      /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", children: "03 689 90 65" }),
      "."
    ] }),
    f3a: "Éteignez le déshumidificateur.",
    f3b: "Vérifiez que le réservoir et le tuyau d'évacuation sont bien fixés, sans jeu ni pli.",
    f3c: "Redémarrez l'appareil.",
    f3p: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Il déborde à nouveau ? Appelez le ",
      /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", children: "03 689 90 65" }),
      ", nous remplaçons gratuitement la pompe ou l'appareil."
    ] }),
    f4a: "Vérifiez que le tuyau d'évacuation n'est ni plié ni coudé.",
    f4b: "La pompe franchit une hauteur de 4 m max. : posez le tuyau le plus court et le plus droit possible.",
    f4c: "Débranchez un instant le tuyau. Si de l'eau en sort, l'obstruction se trouve dans le tuyau.",
    f4p: /* @__PURE__ */ jsxs(Fragment, { children: [
      "L'eau de condensation est propre et peut aller dans n'importe quelle évacuation. Pompe défectueuse ? Appelez le ",
      /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", children: "03 689 90 65" }),
      ", nous la remplaçons gratuitement."
    ] }),
    f5a: "Videz le réservoir d'eau et remettez-le correctement en place jusqu'au déclic.",
    f5b: "L'appareil reprend automatiquement, vous n'avez rien à redémarrer.",
    f6a: "Gardez portes et fenêtres fermées, sinon vous séchez aussi l'air extérieur.",
    f6b: "Maintenez la température au-dessus de 15 °C. Dans les pièces froides, le séchage par condensation est plus lent.",
    f6c: "Vérifiez que l'appareil est bien dégagé : 50 cm d'espace autour des côtés d'aspiration et de soufflage.",
    f6p: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Un doute ? Appelez le ",
      /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", children: "03 689 90 65" }),
      ", nous mesurons avec vous et ajoutons de la capacité si nécessaire. Dans le cadre de la garantie, vous prolongez gratuitement.*"
    ] }),
    f7a: "Éteignez l'appareil et laissez-le dégivrer pendant 30 minutes.",
    f7b: /* @__PURE__ */ jsx(Fragment, { children: "La formation de givre indique une pièce trop froide (< 8 °C)." }),
    f7p: "Dans les caves froides ou sur les chantiers en hiver, un déshumidificateur à adsorption ou un chauffage d'appoint est la bonne solution. Appelez-nous et nous adaptons l'installation.",
    callP: "Appelez-nous immédiatement. Nous résolvons 9 pannes sur 10 par téléphone ; sinon, un technicien est sur votre chantier dans les 24 heures avec un appareil de remplacement, sans frais supplémentaires.",
    callBtn: "Appelez directement le 03 689 90 65",
    fbH: "Panne non résolue ? Nous, si.",
    fbP: "Appelez-nous les jours ouvrables entre 08:00 et 17:00. Si nous ne pouvons pas résoudre le problème par téléphone, un technicien est sur votre chantier dans les 24 heures avec un appareil de remplacement, sans frais supplémentaires.",
    fbBtn: "Appelez le 03 689 90 65",
    levH2: "Livré, installé et réglé. Vous n'avez rien à porter.",
    levLede: "Votre pack est livré au moment choisi lors de la réservation. Notre technicien se charge de toute l'installation et vous explique brièvement à quoi faire attention.",
    ex1H: "Livraison à la date de votre choix",
    ex1P: "Vous choisissez vous-même le jour et la demi-journée de livraison. Le transport, la livraison et l'enlèvement sont entièrement compris dans le prix de votre pack.",
    ex2H: "Installation par notre technicien",
    ex2P: "Nous positionnons les appareils, raccordons l'évacuation des condensats, réglons l'humidité cible et effectuons la mesure de départ.",
    ex3H: "Que devez-vous préparer ?",
    ex3P: "Une prise qui fonctionne sur un circuit électrique séparé et un passage libre vers les pièces à sécher. C'est tout.",
    ex4H: "À l'étage ? Pas de souci.",
    ex4P: "L'installation à l'étage par l'escalier ou l'ascenseur est gratuite. Ce n'est que lorsque les déshumidificateurs doivent être montés par une échelle que nous facturons une fois 39 € de manutention.",
    afKick: /* @__PURE__ */ jsx(Fragment, { children: "Retrait sur place & transport" }),
    afH2: "Vous venez chercher vous-même ? Lisez d'abord ceci.",
    afLede: "Les appareils séparés se retirent à notre point de retrait le long de l'A12 à Aartselaar. Bien les transporter est important : ainsi, votre déshumidificateur démarre tout de suite et sans dommage.",
    af1E: "Important",
    af1H: "Transportez toujours le déshumidificateur en position verticale",
    af1P: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Un déshumidificateur de chantier ne peut ",
      /* @__PURE__ */ jsx("b", { children: "pas être transporté à plat" }),
      " : le fluide frigorigène s'écoule alors hors du compresseur. Transporté à plat malgré tout ? Placez l'appareil ",
      /* @__PURE__ */ jsx("b", { children: "24 heures debout" }),
      " et attendez avant de le démarrer. Vous évitez ainsi d'endommager le compresseur."
    ] }),
    af2E: "Bon à savoir",
    af2H: "Les appareils sont lourds",
    af2P: "Comptez 25 à 40 kg par déshumidificateur. Venez à deux, prévoyez un grand coffre ou une remorque et soulevez en gardant le dos droit. Vous préférez ne pas porter ? Nous livrons et installons tout pour vous, ce que nous recommandons aux clients plus âgés.",
    af3E: "Point de retrait",
    af3H: "Le long de l'A12 à Aartselaar",
    af3P: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Vous retirez le matériel à notre entrepôt : ",
      /* @__PURE__ */ jsx("b", { children: "Boomsesteenweg 12, Unit 11, 2630 Aartselaar" }),
      ", facilement accessible par l'A12. Uniquement sur rendez-vous : vous choisissez votre moment de retrait lors de la réservation et tout est prêt. Nous vous aidons à charger et vous donnons de brèves explications."
    ] }),
    digKick: "Entièrement numérique",
    digH2: "Même après votre réservation, vous gérez tout en ligne.",
    digLede: "Pas de musique d'attente : prolonger, planifier votre enlèvement ou demander une facture se fait en quelques clics. Vous préférez parler à quelqu'un ? Vous pouvez toujours appeler.",
    dg1: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Prolonger en ligne" }),
      /* @__PURE__ */ jsx("span", { children: "Demandez votre prolongation et recevez immédiatement un lien de paiement par e-mail. Dans le cadre de la garantie, vous prolongez gratuitement." })
    ] }),
    dg2: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Planifier l'enlèvement" }),
      /* @__PURE__ */ jsx("span", { children: "Mesuré sec ? Choisissez vous-même le jour et la demi-journée où nous venons chercher les appareils." })
    ] }),
    dg3: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Demander une facture" }),
      /* @__PURE__ */ jsx("span", { children: "Votre facture arrive dans votre boîte mail dès le paiement. Perdue ? Un simple e-mail à administratie@vernast.be suffit." })
    ] }),
    verH2: "Pas encore sec ? Vous prolongez, souvent gratuitement.",
    verLede: "Votre pack est calculé pour un résultat 100 % sec dans la période de location. Si la mesure finale indique encore de l'humidité, vous prolongez dans le cadre de la garantie sans supplément.*",
    v1E: "01 · Dans le cadre de la garantie",
    v1H: "Prolonger gratuitement",
    v1P: "Si votre habitation n'est pas sèche dans la période calculée, vous continuez à louer gratuitement jusqu'à ce qu'elle le soit. Vous nous appelez ou nous écrivez, nous prolongeons immédiatement, sans nouvelle réservation ni facture supplémentaire.",
    v2E: "02 · Prolonger vous-même",
    v2H: "Louer plus longtemps à votre demande",
    v2P: "Vous souhaitez garder les appareils plus longtemps (p. ex. pour une phase de chantier suivante) ? Un coup de fil suffit et nous prolongeons au même prix journalier. Vous recevez un lien de paiement par e-mail.",
    v3E: "03 · Terminé plus tôt",
    v3H: "Arrêter plus tôt",
    v3P: "Sec avant la fin de la période de location ? Prévenez-nous et nous avançons l'enlèvement. Pour les packs avec mesure finale, nous confirmons d'abord ensemble que tout a atteint la valeur cible.",
    verNote: "* La garantie s'applique lorsque les conditions extérieures sont remplies : portes et fenêtres fermées, température suffisante et appareils en fonctionnement ininterrompu.",
    ctaH2: "Vous ne trouvez pas la solution ? Nous vous aidons personnellement.",
    ctaLede: "Décrivez brièvement votre question ou votre problème et nous vous recontactons le jour ouvrable même.",
    ciBel: "Appelez-nous",
    ciUren: "Lu–Ve 08:00–17:00",
    ciAntw: "réponse dans les 4 heures ouvrables",
    ciAfh: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Point de retrait & entrepôt" }),
      /* @__PURE__ */ jsxs("span", { children: [
        "Boomsesteenweg 12, Unit 11 · 2630 Aartselaar",
        /* @__PURE__ */ jsx("br", {}),
        "Retrait uniquement sur rendez-vous"
      ] })
    ] }),
    ciSpoed: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Panne urgente ?" }),
      /* @__PURE__ */ jsx("span", { children: "Appelez d'abord : nous résolvons 9 pannes sur 10 par téléphone. Sinon, un technicien ou un appareil de remplacement dans les 24 h." })
    ] }),
    formH: "Posez votre question",
    lVoor: "Prénom",
    lNaam: "Nom",
    lMail: "Adresse e-mail",
    lTel: "Téléphone",
    lOnd: "Sujet",
    o1: "Paiement ou facture",
    o3: "Livraison ou enlèvement",
    o5: "Autre chose",
    lVraag: "Votre question",
    fnote: "Nous répondons le jour ouvrable même. Urgent ? Appelez le 03 689 90 65."
  },
  en: {
    q1: "Call 03 689 90 65",
    fixKick: "Machine breakdown",
    verKick: "Extend or stop",
    o2: "Machine breakdown",
    o4: "Extend or stop",
    fx1: "Dehumidifier won't start or cuts out",
    fx2: "Fuse trips regularly",
    fx3: "Dehumidifier has overflowed",
    fx4: "Condensate pump isn't draining water",
    fx5: "Tank light is on",
    fx6: "Drying is slower than expected",
    fx7: "Ice forming on the machine",
    callH: "Machine faulty or damaged?",
    f5p: (lp, prijs) => /* @__PURE__ */ jsxs(Fragment, { children: [
      "Tired of emptying it about twice a day? Add the ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/toebehoren/condenspomp"), children: "condensate pump" }),
      " (",
      prijs,
      " per dehumidifier per day) and the water is drained automatically day and night."
    ] }),
    done: "Thank you! We will reply the same working day. Urgent? Call 03 689 90 65.",
    versturen: "Sending…",
    verstuur: "Send your question",
    crumb: "Customer service",
    altHero: "Calm, satisfied Vernast customer",
    altPay: "Customer paying easily online by card and mobile phone",
    altTech: "Vernast technician",
    phVraag: "If possible, please state your booking number.",
    heroKick: "Customer service",
    li6: "Free cancellation up to 48 hours before delivery",
    li5: "Invoice by email straight after payment",
    li4: "Balance by Bancontact or card with our technician",
    li3: "Nothing left to arrange on delivery",
    li2: "Bancontact, credit card or bank transfer",
    li1: "Invoice in your inbox straight after payment",
    heroH1: "How can we help you?",
    heroP: "A question about your payment, a machine that isn't doing what it should, or extending your hire period? You will find an answer straight away below, or simply give us a call.",
    q2: "Email us",
    q3: "Report a breakdown",
    betH: /* @__PURE__ */ jsx(Fragment, { children: "Payments & invoices" }),
    topKick: "What can we help you with?",
    topH2: "Choose your topic.",
    tp1P: "Paying online with a 5% discount, paying on delivery, and where your invoice has got to.",
    tgAntw: "See answers →",
    tp2H: "Machine breakdown",
    tp2P: "Dehumidifier stops, fuse trips or pump won't drain? Fix it yourself in 2 minutes.",
    tgOpl: "See solutions →",
    tp3H: "Extend or stop",
    tp3P: "Not dry yet, or finished early? This is how you adjust your hire period.",
    tgWerkt: "How it works →",
    levH: /* @__PURE__ */ jsx(Fragment, { children: "Delivery & installation" }),
    tp4P: "When do we come, what is included and what do you need to have ready?",
    tgVerloopt: "How it goes →",
    tp5H: /* @__PURE__ */ jsx(Fragment, { children: "Cover & excess" }),
    tp5P: "What does the deposit cover, and what if a machine gets damaged on site?",
    tgDekking: "To cover →",
    tp6H: /* @__PURE__ */ jsx(Fragment, { children: "Collection & return" }),
    tp6P: "Transporting upright, heavy machines and our collection point along the A12 in Aartselaar.",
    tgEerst: "Read this first →",
    payH2: "Pay the way that suits you. Invoice straight to your inbox.",
    payLede: "You choose how you pay: fully online with a discount, or a small order confirmation and the rest on delivery. Either way, with no advance invoices or surprises.",
    po1L: "Most popular · 5% discount",
    po1H: "Pay everything online",
    po1P: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Pay for your full package online straight away and get ",
      /* @__PURE__ */ jsx("b", { children: "5% off" }),
      " your package price."
    ] }),
    po2L: "Flexible",
    po2H: "€50 now, the rest on delivery",
    po2P: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Confirm your booking with a ",
      /* @__PURE__ */ jsx("b", { children: "€50 order confirmation" }),
      " and pay the balance on site at installation."
    ] }),
    prFactuur: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Invoice not received?" }),
      /* @__PURE__ */ jsxs("span", { children: [
        "Check your spam folder first. Nothing there? Email your booking number to ",
        /* @__PURE__ */ jsx("a", { href: "mailto:administratie@vernast.be", style: { color: "var(--red)", fontWeight: 700 }, children: "administratie@vernast.be" }),
        " and you will receive it again within the hour."
      ] })
    ] }),
    prZak: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Business customer?" }),
      /* @__PURE__ */ jsx("span", { children: "Enter your VAT number when booking and it will automatically appear correctly on the invoice. You can change it afterwards with a quick email." })
    ] }),
    prVerl: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Paying for an extension" }),
      /* @__PURE__ */ jsx("span", { children: "If you extend within the guarantee, you pay nothing. If you extend yourself, you receive a payment link by email, no new booking needed." })
    ] }),
    fixH2: "Fix most problems yourself in 2 minutes.",
    fixLede: "Our machines are robust, but on a building site something can always happen. Open the message that matches your situation and you get the solution step by step.",
    f1a: "Check that the socket works (test it with another appliance).",
    f1b: "Look in the fuse box and switch the circuit breaker back on.",
    f1c: "Wait 10 minutes: after a power cut, the machine restarts automatically.",
    f1p: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Does the machine keep cutting out? Call ",
      /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", children: "03 689 90 65" }),
      " and we will swap it within 24 hours."
    ] }),
    f2a: "Connect the dehumidifier to a separate circuit, not together with other heavy equipment.",
    f2b: "Don't use a light household extension lead: the cables supplied are rated for the power.",
    f2p: /* @__PURE__ */ jsxs(Fragment, { children: [
      "No (working) electrical board on site? We hire out a site distribution board. Call ",
      /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", children: "03 689 90 65" }),
      "."
    ] }),
    f3a: "Switch the dehumidifier off.",
    f3b: "Check that the tank and the drain hose are properly attached and not loose or kinked anywhere.",
    f3c: "Start the machine up again.",
    f3p: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Does it overflow again? Call ",
      /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", children: "03 689 90 65" }),
      " and we will replace the pump or the machine free of charge."
    ] }),
    f4a: "Check that the drain hose isn't kinked or folded anywhere.",
    f4b: "The pump lifts to a max. height of 4 m: keep the hose as short and straight as possible.",
    f4c: "Disconnect the hose briefly. If water runs out, the blockage is in the hose.",
    f4p: /* @__PURE__ */ jsxs(Fragment, { children: [
      "The condensate is clean and can go down any drain. Pump faulty? Call ",
      /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", children: "03 689 90 65" }),
      " and we will replace it free of charge."
    ] }),
    f5a: "Empty the water tank and slide it back in correctly until it clicks into place.",
    f5b: "The machine resumes automatically, you don't need to restart anything.",
    f6a: "Keep windows and doors closed, otherwise you are drying the outside air too.",
    f6b: "Keep the temperature above 15 °C. In cold rooms, condensation drying works more slowly.",
    f6c: "Check that the machine stands clear: 50 cm of space around the intake and outlet sides.",
    f6p: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Not sure? Call ",
      /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", children: "03 689 90 65" }),
      ", we will take readings with you and add extra capacity if needed. Within the guarantee you extend free of charge.*"
    ] }),
    f7a: "Switch the machine off and let it defrost for 30 minutes.",
    f7b: /* @__PURE__ */ jsx(Fragment, { children: "Ice forming points to a room that is too cold (< 8 °C)." }),
    f7p: "In cold basements or on winter sites, a desiccant dehumidifier or extra heating is the right solution. Call us and we will change the set-up.",
    callP: "Call us straight away. We solve 9 out of 10 breakdowns over the phone; if that doesn't work, a technician with a replacement machine will be on your site within 24 hours, at no extra cost.",
    callBtn: "Call 03 689 90 65 now",
    fbH: "Breakdown not solved? We'll solve it.",
    fbP: "Call us on working days between 08:00 and 17:00. If we can't solve it over the phone, a technician with a replacement machine will be on your site within 24 hours, at no extra cost.",
    fbBtn: "Call 03 689 90 65",
    levH2: "Delivered, placed and set up. You don't have to lift a thing.",
    levLede: "Your package is delivered at the time you chose when booking. Our technician does the full installation and briefly explains what to look out for.",
    ex1H: "Delivery on your chosen date",
    ex1P: "You choose your delivery day and part of the day. Transport, delivery and collection are fully included in your package price.",
    ex2H: "Installation by our technician",
    ex2P: "We position the machines, connect the condensate drain, set the target humidity and take the starting reading.",
    ex3H: "What do you need to have ready?",
    ex3P: "A working socket on a separate circuit and clear access to the rooms to be dried. That's all.",
    ex4H: "Upstairs? No problem.",
    ex4P: "Placement on an upper floor via stairs or lift is free. Only when dehumidifiers have to go up by ladder do we charge a one-off €39 for carrying.",
    afKick: /* @__PURE__ */ jsx(Fragment, { children: "Self-collection & transport" }),
    afH2: "Collecting yourself? Read this first.",
    afLede: "You collect individual machines from our collection point along the A12 in Aartselaar. Transporting them properly matters: that way your dehumidifier starts straight away and without damage.",
    af1E: "Important",
    af1H: "Always transport the dehumidifier upright",
    af1P: /* @__PURE__ */ jsxs(Fragment, { children: [
      "A construction dehumidifier must ",
      /* @__PURE__ */ jsx("b", { children: "not be transported lying flat" }),
      ": the refrigerant then runs out of the compressor. Transported flat anyway? Stand the machine ",
      /* @__PURE__ */ jsx("b", { children: "upright for 24 hours" }),
      " and wait before starting it. This prevents damage to the compressor."
    ] }),
    af2E: "Good to know",
    af2H: "The machines are heavy",
    af2P: "Allow 25 to 40 kg per dehumidifier. Come with two people, bring a large boot or a trailer and lift with a straight back. Rather not haul them? We deliver and install everything for you, recommended for older customers.",
    af3E: "Collection point",
    af3H: "Along the A12 in Aartselaar",
    af3P: /* @__PURE__ */ jsxs(Fragment, { children: [
      "You collect from our warehouse: ",
      /* @__PURE__ */ jsx("b", { children: "Boomsesteenweg 12, Unit 11, 2630 Aartselaar" }),
      ", easily reached via the A12. By appointment only: you choose your collection time when booking and everything is ready. We help you load and give a short explanation."
    ] }),
    digKick: "Fully digital",
    digH2: "Even after booking, you arrange everything online.",
    digLede: "No hold music needed: extending, scheduling your collection or requesting an invoice takes just a few clicks. Prefer a person on the line? You can always call.",
    dg1: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Extend online" }),
      /* @__PURE__ */ jsx("span", { children: "Request your extension and receive a payment link by email straight away. Within the guarantee you extend free of charge." })
    ] }),
    dg2: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Schedule collection" }),
      /* @__PURE__ */ jsx("span", { children: "Measured dry? Choose the day and part of the day when we come to collect the machines." })
    ] }),
    dg3: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Request an invoice" }),
      /* @__PURE__ */ jsx("span", { children: "Your invoice is in your inbox straight after payment. Lost it? One email to administratie@vernast.be is enough." })
    ] }),
    verH2: "Not dry yet? Then you extend, often free of charge.",
    verLede: "Your package is calculated to be 100% dry within the hire period. If the final reading still shows moisture, you extend within the guarantee without paying extra.*",
    v1E: "01 · Within the guarantee",
    v1H: "Extend free of charge",
    v1P: "If your home isn't dry within the calculated period, you keep hiring free of charge until it is. You call or email us, we extend straight away, no new booking, no extra invoice.",
    v2E: "02 · Extend yourself",
    v2H: "Hire for longer at your request",
    v2P: "Want to keep the machines longer (e.g. for a next construction phase)? One phone call and we extend at the same daily rate. You receive a payment link by email.",
    v3E: "03 · Finished early",
    v3H: "Stop early",
    v3P: "Dry before the end of the hire period? Let us know and we will bring the collection forward. For packages with a final reading, we first confirm together that everything is at target value.",
    verNote: "* The guarantee applies when the external conditions are met: windows and doors closed, temperature at the right level and the machines running without interruption.",
    ctaH2: "Still stuck? We'll help you personally.",
    ctaLede: "Briefly describe your question or problem and we will get in touch the same working day.",
    ciBel: "Call us",
    ciUren: "Mon–Fri 08:00–17:00",
    ciAntw: "answer within 4 working hours",
    ciAfh: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Collection point & warehouse" }),
      /* @__PURE__ */ jsxs("span", { children: [
        "Boomsesteenweg 12, Unit 11 · 2630 Aartselaar",
        /* @__PURE__ */ jsx("br", {}),
        "Collection by appointment only"
      ] })
    ] }),
    ciSpoed: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Urgent breakdown?" }),
      /* @__PURE__ */ jsx("span", { children: "Call first, we solve 9 out of 10 breakdowns over the phone. Otherwise a technician or replacement machine within 24 hours." })
    ] }),
    formH: "Ask your question",
    lVoor: "First name",
    lNaam: "Surname",
    lMail: "Email address",
    lTel: "Phone",
    lOnd: "Subject",
    o1: "Payment or invoice",
    o3: "Delivery or collection",
    o5: "Something else",
    lVraag: "Your question",
    fnote: "We reply the same working day. Urgent? Call 03 689 90 65."
  }
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/KlantservicePage.tsx");
const Check = () => /* @__PURE__ */ jsx("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M20 6 9 17l-5-5" }) });
const Phone = ({ size = 15 }) => /* @__PURE__ */ jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M22 16.92V21a1 1 0 0 1-1.11 1A19.86 19.86 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.29 1L7 10.5a16 16 0 0 0 6.5 6.5l1.75-1.8a1 1 0 0 1 1-.29l4 1a1 1 0 0 1 .75 1Z" }) });
const KlantservicePage = () => {
  const { status, error, mailto, sending, handleSubmit } = useAanvraag({
    source: "klantenservice",
    messageField: "vraag",
    mailSubject: "Klantenservice"
  });
  const t = useCopy(KLANTSERVICE_COPY);
  const lp = useLokaalPad();
  const taal = useTaal();
  const pompPrijs = taal === "nl" ? euro(PUMP.price) : formatEuro(PUMP.price, taal);
  return /* @__PURE__ */ jsxs("div", { className: "ks-page", children: [
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        ...useSeo("klantservice"),
        jsonLd: [
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: lp("/") },
            { name: t.crumb, path: lp("/klantservice") }
          ])
        ]
      }
    ),
    /* @__PURE__ */ jsx(V3Header, { lightAfter: 380 }),
    /* @__PURE__ */ jsxs("section", { className: "ks-hero", children: [
      /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsx("span", { className: "kick", children: t.heroKick }),
        /* @__PURE__ */ jsx("h1", { children: t.heroH1 }),
        /* @__PURE__ */ jsx("p", { children: t.heroP }),
        /* @__PURE__ */ jsxs("div", { className: "ks-quick", children: [
          /* @__PURE__ */ jsxs("a", { className: "hot", href: "tel:+3236899065", children: [
            /* @__PURE__ */ jsx(Phone, {}),
            " ",
            t.q1
          ] }),
          /* @__PURE__ */ jsx("a", { href: "mailto:info@vernast-bouwdrogers.be", children: t.q2 }),
          /* @__PURE__ */ jsx("a", { href: "#storing", children: t.q3 }),
          /* @__PURE__ */ jsx("a", { href: "#betalingen", children: t.betH })
        ] })
      ] }),
      /* @__PURE__ */ jsx("img", { className: "ks-hero-man", src: "/vernast/man-zen-crop.webp", alt: t.altHero, width: "1225", height: "1440", loading: "eager", decoding: "async" })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "topics", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick", children: t.topKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec", children: t.topH2 })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "top-grid", children: [
        /* @__PURE__ */ jsxs("a", { className: "tp", href: "#betalingen", children: [
          /* @__PURE__ */ jsx("span", { className: "ti", children: /* @__PURE__ */ jsxs("svg", { width: "21", height: "21", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }),
            /* @__PURE__ */ jsx("path", { d: "M2 10h20" })
          ] }) }),
          /* @__PURE__ */ jsx("h3", { children: t.betH }),
          /* @__PURE__ */ jsx("p", { children: t.tp1P }),
          /* @__PURE__ */ jsx("span", { className: "tg", children: t.tgAntw })
        ] }),
        /* @__PURE__ */ jsxs("a", { className: "tp", href: "#storing", children: [
          /* @__PURE__ */ jsx("span", { className: "ti", children: /* @__PURE__ */ jsx("svg", { width: "21", height: "21", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M14.7 6.3a5 5 0 0 0-6.9 6.9L3 18v3h3l4.8-4.8a5 5 0 0 0 6.9-6.9L14 12l-2-2z" }) }) }),
          /* @__PURE__ */ jsx("h3", { children: t.tp2H }),
          /* @__PURE__ */ jsx("p", { children: t.tp2P }),
          /* @__PURE__ */ jsx("span", { className: "tg", children: t.tgOpl })
        ] }),
        /* @__PURE__ */ jsxs("a", { className: "tp", href: "#verlengen", children: [
          /* @__PURE__ */ jsx("span", { className: "ti", children: /* @__PURE__ */ jsxs("svg", { width: "21", height: "21", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
            /* @__PURE__ */ jsx("path", { d: "M12 6v6l4 2" })
          ] }) }),
          /* @__PURE__ */ jsx("h3", { children: t.tp3H }),
          /* @__PURE__ */ jsx("p", { children: t.tp3P }),
          /* @__PURE__ */ jsx("span", { className: "tg", children: t.tgWerkt })
        ] }),
        /* @__PURE__ */ jsxs("a", { className: "tp", href: "#levering", children: [
          /* @__PURE__ */ jsx("span", { className: "ti", children: /* @__PURE__ */ jsxs("svg", { width: "21", height: "21", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("path", { d: "M5 18H3V8h11v10H9" }),
            /* @__PURE__ */ jsx("path", { d: "M14 10h4l3 4v4h-2" }),
            /* @__PURE__ */ jsx("circle", { cx: "7", cy: "18", r: "2" }),
            /* @__PURE__ */ jsx("circle", { cx: "17", cy: "18", r: "2" })
          ] }) }),
          /* @__PURE__ */ jsx("h3", { children: t.levH }),
          /* @__PURE__ */ jsx("p", { children: t.tp4P }),
          /* @__PURE__ */ jsx("span", { className: "tg", children: t.tgVerloopt })
        ] }),
        /* @__PURE__ */ jsxs(Link, { className: "tp", to: lp("/verhuur/boeking"), children: [
          /* @__PURE__ */ jsx("span", { className: "ti", children: /* @__PURE__ */ jsx("svg", { width: "21", height: "21", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" }) }) }),
          /* @__PURE__ */ jsx("h3", { children: t.tp5H }),
          /* @__PURE__ */ jsx("p", { children: t.tp5P }),
          /* @__PURE__ */ jsx("span", { className: "tg", children: t.tgDekking })
        ] }),
        /* @__PURE__ */ jsxs("a", { className: "tp", href: "#afhalen", children: [
          /* @__PURE__ */ jsx("span", { className: "ti", children: /* @__PURE__ */ jsxs("svg", { width: "21", height: "21", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" }),
            /* @__PURE__ */ jsx("path", { d: "M3 6h18" }),
            /* @__PURE__ */ jsx("path", { d: "M16 10a4 4 0 0 1-8 0" })
          ] }) }),
          /* @__PURE__ */ jsx("h3", { children: t.tp6H }),
          /* @__PURE__ */ jsx("p", { children: t.tp6P }),
          /* @__PURE__ */ jsx("span", { className: "tg", children: t.tgEerst })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "pay-sec", id: "betalingen", children: [
      /* @__PURE__ */ jsx("img", { className: "pay-man", src: "/vernast/man-betaling-2.webp", alt: t.altPay, loading: "lazy", decoding: "async" }),
      /* @__PURE__ */ jsx("div", { className: "wrap", children: /* @__PURE__ */ jsxs("div", { className: "pay-content", children: [
        /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.betH }),
          /* @__PURE__ */ jsx("h2", { className: "sec", children: t.payH2 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.payLede })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pay-opts", children: [
          /* @__PURE__ */ jsxs("div", { className: "po hot", children: [
            /* @__PURE__ */ jsx("span", { className: "pol", children: t.po1L }),
            /* @__PURE__ */ jsx("h3", { children: t.po1H }),
            /* @__PURE__ */ jsx("p", { children: t.po1P }),
            /* @__PURE__ */ jsxs("ul", { children: [
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx(Check, {}),
                " ",
                t.li1
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx(Check, {}),
                " ",
                t.li2
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx(Check, {}),
                " ",
                t.li3
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "po", children: [
            /* @__PURE__ */ jsx("span", { className: "pol", children: t.po2L }),
            /* @__PURE__ */ jsx("h3", { children: t.po2H }),
            /* @__PURE__ */ jsx("p", { children: t.po2P }),
            /* @__PURE__ */ jsxs("ul", { children: [
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx(Check, {}),
                " ",
                t.li4
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx(Check, {}),
                " ",
                t.li5
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx(Check, {}),
                " ",
                t.li6
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pay-rows", children: [
          /* @__PURE__ */ jsx("div", { className: "pr", children: t.prFactuur }),
          /* @__PURE__ */ jsx("div", { className: "pr", children: t.prZak }),
          /* @__PURE__ */ jsx("div", { className: "pr", children: t.prVerl })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "fix", id: "storing", style: { backgroundColor: "#F4F4F4" }, children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick", children: t.fixKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec", children: t.fixH2 }),
        /* @__PURE__ */ jsx("p", { className: "lede", children: t.fixLede })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "fix-grid", children: [
        /* @__PURE__ */ jsxs("details", { className: "fx", children: [
          /* @__PURE__ */ jsx("summary", { children: /* @__PURE__ */ jsxs("h3", { children: [
            /* @__PURE__ */ jsx("span", { className: "fi", children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M13 2 3 14h7l-1 8 10-12h-7z" }) }) }),
            t.fx1,
            /* @__PURE__ */ jsx("span", { className: "fx-chev", "aria-hidden": "true", children: /* @__PURE__ */ jsx("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.6", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "m6 9 6 6 6-6" }) }) })
          ] }) }),
          /* @__PURE__ */ jsxs("ol", { children: [
            /* @__PURE__ */ jsx("li", { children: t.f1a }),
            /* @__PURE__ */ jsx("li", { children: t.f1b }),
            /* @__PURE__ */ jsx("li", { children: t.f1c })
          ] }),
          /* @__PURE__ */ jsx("p", { children: t.f1p })
        ] }),
        /* @__PURE__ */ jsxs("details", { className: "fx", children: [
          /* @__PURE__ */ jsx("summary", { children: /* @__PURE__ */ jsxs("h3", { children: [
            /* @__PURE__ */ jsx("span", { className: "fi", children: /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
              /* @__PURE__ */ jsx("path", { d: "M12 8v4" }),
              /* @__PURE__ */ jsx("path", { d: "M12 16h.01" })
            ] }) }),
            t.fx2,
            /* @__PURE__ */ jsx("span", { className: "fx-chev", "aria-hidden": "true", children: /* @__PURE__ */ jsx("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.6", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "m6 9 6 6 6-6" }) }) })
          ] }) }),
          /* @__PURE__ */ jsxs("ol", { children: [
            /* @__PURE__ */ jsx("li", { children: t.f2a }),
            /* @__PURE__ */ jsx("li", { children: t.f2b })
          ] }),
          /* @__PURE__ */ jsx("p", { children: t.f2p })
        ] }),
        /* @__PURE__ */ jsxs("details", { className: "fx", children: [
          /* @__PURE__ */ jsx("summary", { children: /* @__PURE__ */ jsxs("h3", { children: [
            /* @__PURE__ */ jsx("span", { className: "fi", children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" }) }) }),
            t.fx3,
            /* @__PURE__ */ jsx("span", { className: "fx-chev", "aria-hidden": "true", children: /* @__PURE__ */ jsx("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.6", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "m6 9 6 6 6-6" }) }) })
          ] }) }),
          /* @__PURE__ */ jsxs("ol", { children: [
            /* @__PURE__ */ jsx("li", { children: t.f3a }),
            /* @__PURE__ */ jsx("li", { children: t.f3b }),
            /* @__PURE__ */ jsx("li", { children: t.f3c })
          ] }),
          /* @__PURE__ */ jsx("p", { children: t.f3p })
        ] }),
        /* @__PURE__ */ jsxs("details", { className: "fx", children: [
          /* @__PURE__ */ jsx("summary", { children: /* @__PURE__ */ jsxs("h3", { children: [
            /* @__PURE__ */ jsx("span", { className: "fi", children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M14.7 6.3a5 5 0 0 0-6.9 6.9L3 18v3h3l4.8-4.8a5 5 0 0 0 6.9-6.9L14 12l-2-2z" }) }) }),
            t.fx4,
            /* @__PURE__ */ jsx("span", { className: "fx-chev", "aria-hidden": "true", children: /* @__PURE__ */ jsx("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.6", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "m6 9 6 6 6-6" }) }) })
          ] }) }),
          /* @__PURE__ */ jsxs("ol", { children: [
            /* @__PURE__ */ jsx("li", { children: t.f4a }),
            /* @__PURE__ */ jsx("li", { children: t.f4b }),
            /* @__PURE__ */ jsx("li", { children: t.f4c })
          ] }),
          /* @__PURE__ */ jsx("p", { children: t.f4p })
        ] }),
        /* @__PURE__ */ jsxs("details", { className: "fx", children: [
          /* @__PURE__ */ jsx("summary", { children: /* @__PURE__ */ jsxs("h3", { children: [
            /* @__PURE__ */ jsx("span", { className: "fi", children: /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("path", { d: "M3 15h18" }),
              /* @__PURE__ */ jsx("path", { d: "M3 9h18" }),
              /* @__PURE__ */ jsx("rect", { x: "3", y: "4", width: "18", height: "16", rx: "2" })
            ] }) }),
            t.fx5,
            /* @__PURE__ */ jsx("span", { className: "fx-chev", "aria-hidden": "true", children: /* @__PURE__ */ jsx("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.6", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "m6 9 6 6 6-6" }) }) })
          ] }) }),
          /* @__PURE__ */ jsxs("ol", { children: [
            /* @__PURE__ */ jsx("li", { children: t.f5a }),
            /* @__PURE__ */ jsx("li", { children: t.f5b })
          ] }),
          /* @__PURE__ */ jsx("p", { children: t.f5p(lp, pompPrijs) })
        ] }),
        /* @__PURE__ */ jsxs("details", { className: "fx", children: [
          /* @__PURE__ */ jsx("summary", { children: /* @__PURE__ */ jsxs("h3", { children: [
            /* @__PURE__ */ jsx("span", { className: "fi", children: /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
              /* @__PURE__ */ jsx("path", { d: "M12 6v6l4 2" })
            ] }) }),
            t.fx6,
            /* @__PURE__ */ jsx("span", { className: "fx-chev", "aria-hidden": "true", children: /* @__PURE__ */ jsx("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.6", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "m6 9 6 6 6-6" }) }) })
          ] }) }),
          /* @__PURE__ */ jsxs("ol", { children: [
            /* @__PURE__ */ jsx("li", { children: t.f6a }),
            /* @__PURE__ */ jsx("li", { children: t.f6b }),
            /* @__PURE__ */ jsx("li", { children: t.f6c })
          ] }),
          /* @__PURE__ */ jsx("p", { children: t.f6p })
        ] }),
        /* @__PURE__ */ jsxs("details", { className: "fx", children: [
          /* @__PURE__ */ jsx("summary", { children: /* @__PURE__ */ jsxs("h3", { children: [
            /* @__PURE__ */ jsx("span", { className: "fi", children: /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("path", { d: "m2 12 5-3-5-3" }),
              /* @__PURE__ */ jsx("path", { d: "M12 3v18" }),
              /* @__PURE__ */ jsx("path", { d: "m22 12-5 3 5 3" }),
              /* @__PURE__ */ jsx("path", { d: "M12 8h.01M12 16h.01" })
            ] }) }),
            t.fx7,
            /* @__PURE__ */ jsx("span", { className: "fx-chev", "aria-hidden": "true", children: /* @__PURE__ */ jsx("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.6", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "m6 9 6 6 6-6" }) }) })
          ] }) }),
          /* @__PURE__ */ jsxs("ol", { children: [
            /* @__PURE__ */ jsx("li", { children: t.f7a }),
            /* @__PURE__ */ jsx("li", { children: t.f7b })
          ] }),
          /* @__PURE__ */ jsx("p", { children: t.f7p })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "fx call", children: [
          /* @__PURE__ */ jsxs("h3", { children: [
            /* @__PURE__ */ jsx("span", { className: "fi", children: /* @__PURE__ */ jsx(Phone, { size: 16 }) }),
            t.callH
          ] }),
          /* @__PURE__ */ jsx("p", { children: t.callP }),
          /* @__PURE__ */ jsx("a", { className: "btn btn-white", href: "tel:+3236899065", children: t.callBtn })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "fixbar", children: [
        /* @__PURE__ */ jsx("img", { className: "fb-man", src: "/vernast/man-klembord.webp", alt: t.altTech, loading: "lazy", decoding: "async" }),
        /* @__PURE__ */ jsxs("div", { className: "fb-b", children: [
          /* @__PURE__ */ jsx("h3", { children: t.fbH }),
          /* @__PURE__ */ jsx("p", { children: t.fbP })
        ] }),
        /* @__PURE__ */ jsx("a", { className: "btn btn-white", href: "tel:+3236899065", children: t.fbBtn })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "ext", id: "levering", style: { background: "var(--maroon-deep) url('/vernast/bg-red-wide-2.webp') center/cover no-repeat" }, children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick", style: { color: "rgba(255,255,255,.75)" }, children: t.levH }),
        /* @__PURE__ */ jsx("h2", { className: "sec", style: { color: "#fff" }, children: t.levH2 }),
        /* @__PURE__ */ jsx("p", { className: "lede", style: { color: "rgba(255,255,255,.78)" }, children: t.levLede })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "ext-grid", style: { gridTemplateColumns: "repeat(4,1fr)" }, children: [
        /* @__PURE__ */ jsxs("div", { className: "ex-c", children: [
          /* @__PURE__ */ jsx("div", { className: "en", children: "01" }),
          /* @__PURE__ */ jsx("h3", { children: t.ex1H }),
          /* @__PURE__ */ jsx("p", { children: t.ex1P })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "ex-c", children: [
          /* @__PURE__ */ jsx("div", { className: "en", children: "02" }),
          /* @__PURE__ */ jsx("h3", { children: t.ex2H }),
          /* @__PURE__ */ jsx("p", { children: t.ex2P })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "ex-c", children: [
          /* @__PURE__ */ jsx("div", { className: "en", children: "03" }),
          /* @__PURE__ */ jsx("h3", { children: t.ex3H }),
          /* @__PURE__ */ jsx("p", { children: t.ex3P })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "ex-c", children: [
          /* @__PURE__ */ jsx("div", { className: "en", children: "04" }),
          /* @__PURE__ */ jsx("h3", { children: t.ex4H }),
          /* @__PURE__ */ jsx("p", { children: t.ex4P })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "ext", id: "afhalen", style: { background: "var(--bg)" }, children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick", children: t.afKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec", children: t.afH2 }),
        /* @__PURE__ */ jsx("p", { className: "lede", children: t.afLede })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "ext-grid", children: [
        /* @__PURE__ */ jsxs("div", { className: "ex-c", children: [
          /* @__PURE__ */ jsx("div", { className: "exi2", children: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("path", { d: "M12 19V5" }),
            /* @__PURE__ */ jsx("path", { d: "m5 12 7-7 7 7" })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "en", children: t.af1E }),
          /* @__PURE__ */ jsx("h3", { children: t.af1H }),
          /* @__PURE__ */ jsx("p", { children: t.af1P })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "ex-c", children: [
          /* @__PURE__ */ jsx("div", { className: "exi2", children: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("path", { d: "M6.5 6.5h11" }),
            /* @__PURE__ */ jsx("path", { d: "M6 20V10a6 6 0 0 1 12 0v10" }),
            /* @__PURE__ */ jsx("path", { d: "M4 20h16" })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "en", children: t.af2E }),
          /* @__PURE__ */ jsx("h3", { children: t.af2H }),
          /* @__PURE__ */ jsx("p", { children: t.af2P })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "ex-c", children: [
          /* @__PURE__ */ jsx("div", { className: "exi2", children: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("path", { d: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0" }),
            /* @__PURE__ */ jsx("circle", { cx: "12", cy: "10", r: "3" })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "en", children: t.af3E }),
          /* @__PURE__ */ jsx("h3", { children: t.af3H }),
          /* @__PURE__ */ jsx("p", { children: t.af3P })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "digi", id: "digitaal", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick", children: t.digKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec", children: t.digH2 }),
        /* @__PURE__ */ jsx("p", { className: "lede", children: t.digLede })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "digi-grid", children: [
        /* @__PURE__ */ jsxs("div", { className: "dg", children: [
          /* @__PURE__ */ jsx("div", { className: "dgi", children: /* @__PURE__ */ jsxs("svg", { width: "19", height: "19", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
            /* @__PURE__ */ jsx("path", { d: "M12 6v6l4 2" })
          ] }) }),
          t.dg1
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "dg", children: [
          /* @__PURE__ */ jsx("div", { className: "dgi", children: /* @__PURE__ */ jsxs("svg", { width: "19", height: "19", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
            /* @__PURE__ */ jsx("path", { d: "M16 2v4" }),
            /* @__PURE__ */ jsx("path", { d: "M8 2v4" }),
            /* @__PURE__ */ jsx("path", { d: "M3 10h18" })
          ] }) }),
          t.dg2
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "dg", children: [
          /* @__PURE__ */ jsx("div", { className: "dgi", children: /* @__PURE__ */ jsxs("svg", { width: "19", height: "19", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
            /* @__PURE__ */ jsx("path", { d: "M14 2v6h6" })
          ] }) }),
          t.dg3
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "ext", id: "verlengen", style: { backgroundColor: "#F4F4F4" }, children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick", children: t.verKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec", children: t.verH2 }),
        /* @__PURE__ */ jsx("p", { className: "lede", children: t.verLede })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "ext-grid", children: [
        /* @__PURE__ */ jsxs("div", { className: "ex-c", children: [
          /* @__PURE__ */ jsx("div", { className: "en", children: t.v1E }),
          /* @__PURE__ */ jsx("h3", { children: t.v1H }),
          /* @__PURE__ */ jsx("p", { children: t.v1P })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "ex-c", children: [
          /* @__PURE__ */ jsx("div", { className: "en", children: t.v2E }),
          /* @__PURE__ */ jsx("h3", { children: t.v2H }),
          /* @__PURE__ */ jsx("p", { children: t.v2P })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "ex-c", children: [
          /* @__PURE__ */ jsx("div", { className: "en", children: t.v3E }),
          /* @__PURE__ */ jsx("h3", { children: t.v3H }),
          /* @__PURE__ */ jsx("p", { children: t.v3P })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "ext-note", children: t.verNote })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "cta", id: "contact", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head mid", children: [
        /* @__PURE__ */ jsx("span", { className: "kick", children: "Contact" }),
        /* @__PURE__ */ jsx("h2", { className: "sec", children: t.ctaH2 }),
        /* @__PURE__ */ jsx("p", { className: "lede", children: t.ctaLede })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "cta-shell", children: [
        /* @__PURE__ */ jsxs("div", { className: "cta-info", children: [
          /* @__PURE__ */ jsxs("div", { className: "ci", children: [
            /* @__PURE__ */ jsx("svg", { width: "19", height: "19", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M22 16.92V21a1 1 0 0 1-1.11 1A19.86 19.86 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.29 1L7 10.5a16 16 0 0 0 6.5 6.5l1.75-1.8a1 1 0 0 1 1-.29l4 1a1 1 0 0 1 .75 1Z" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("b", { children: t.ciBel }),
              /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", children: "03 689 90 65" }),
              " · ",
              /* @__PURE__ */ jsx("span", { children: t.ciUren })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "ci", children: [
            /* @__PURE__ */ jsxs("svg", { width: "19", height: "19", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
              /* @__PURE__ */ jsx("path", { d: "m2 7 10 6 10-6" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("b", { children: t.q2 }),
              /* @__PURE__ */ jsx("a", { href: "mailto:info@vernast-bouwdrogers.be", children: "info@vernast-bouwdrogers.be" }),
              " · ",
              /* @__PURE__ */ jsx("span", { children: t.ciAntw })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "ci", children: [
            /* @__PURE__ */ jsxs("svg", { width: "19", height: "19", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("path", { d: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0" }),
              /* @__PURE__ */ jsx("circle", { cx: "12", cy: "10", r: "3" })
            ] }),
            /* @__PURE__ */ jsx("div", { children: t.ciAfh })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "ci", children: [
            /* @__PURE__ */ jsx("svg", { width: "19", height: "19", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" }) }),
            /* @__PURE__ */ jsx("div", { children: t.ciSpoed })
          ] })
        ] }),
        /* @__PURE__ */ jsx("form", { className: "cform", id: "ksForm", onSubmit: handleSubmit, children: status === "done" ? /* @__PURE__ */ jsx(AanvraagDone, { text: t.done }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("h3", { children: t.formH }),
          /* @__PURE__ */ jsxs("div", { className: "fr", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "ksVoornaam", children: t.lVoor }),
              /* @__PURE__ */ jsx("input", { id: "ksVoornaam", name: "voornaam", required: true })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "ksNaam", children: t.lNaam }),
              /* @__PURE__ */ jsx("input", { id: "ksNaam", name: "naam", required: true })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "fr", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "ksMail", children: t.lMail }),
              /* @__PURE__ */ jsx("input", { id: "ksMail", name: "email", type: "email", required: true })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "ksTel", children: t.lTel }),
              /* @__PURE__ */ jsx("input", { id: "ksTel", name: "telefoon", type: "tel" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "fr", children: /* @__PURE__ */ jsxs("div", { className: "full", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "ksOnderwerp", children: t.lOnd }),
            /* @__PURE__ */ jsxs("select", { id: "ksOnderwerp", name: "onderwerp", children: [
              /* @__PURE__ */ jsx("option", { children: t.o1 }),
              /* @__PURE__ */ jsx("option", { children: t.o2 }),
              /* @__PURE__ */ jsx("option", { children: t.o4 }),
              /* @__PURE__ */ jsx("option", { children: t.o3 }),
              /* @__PURE__ */ jsx("option", { children: t.o5 })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "fr", children: /* @__PURE__ */ jsxs("div", { className: "full", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "ksVraag", children: t.lVraag }),
            /* @__PURE__ */ jsx("textarea", { id: "ksVraag", name: "vraag", placeholder: t.phVraag, required: true })
          ] }) }),
          /* @__PURE__ */ jsx(AanvraagHoneypot, {}),
          /* @__PURE__ */ jsxs("button", { className: "btn btn-red aanv-btn", type: "submit", disabled: sending, children: [
            sending ? t.versturen : t.verstuur,
            /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
              /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(AanvraagError, { error, mailto }),
          /* @__PURE__ */ jsx("div", { className: "fnote", children: t.fnote })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(V3Footer, {})
  ] });
};
export {
  KlantservicePage as default
};

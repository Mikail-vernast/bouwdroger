import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import { P as PageMeta } from "./PageMeta-BXulEWcY.js";
import { l as V3Header } from "./V3Header-BeIMcMg7.js";
import { V as V3Footer } from "./V3Footer-9z4J1I4x.js";
import { o as organizationSchema, b as breadcrumbSchema } from "./schema-VJMHyxOJ.js";
import { u as useSeo } from "./seo-BMvlJeai.js";
import { a as useLokaalPad, u as useCopy } from "../main.mjs";
import "vite-react-ssg";
import "./FontPreload-C6Rzq6ld.js";
import "./verhuur-CgnDb-wO.js";
import "./tarieven-ZrzMF0e-.js";
import "./verhuur-8XCQs1EE.js";
import "./packages-DdkKuPcF.js";
import "./verhuur.fr-CrIPL5Eo.js";
import "lucide-react";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/DrooggarantiePage.copy.tsx");
const rood = { color: "var(--red)", fontWeight: 600 };
const COPY = {
  nl: (lp) => ({
    crumbHome: "Home",
    crumb: "Drooggarantie",
    heroKick: "De Vernast Drooggarantie",
    h1: "100% droog. Of u huurt kosteloos verder.*",
    heroP: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Omdat wij uw pakket berekenen in plaats van gokken, durven wij beloven wat niemand anders belooft: ",
      /* @__PURE__ */ jsx("b", { style: { color: "#fff" }, children: "uw woning is droog binnen de berekende periode." }),
      " De eindmeting bevestigt het, zwart op wit."
    ] }),
    heroCta: "Bereken uw droogpakket",
    heroCta2: "Bekijk de voorwaarden",
    heroAlt: "Zorgeloos drogen met de Vernast Drooggarantie",
    badge: "Eindmeting bevestigt",
    badgeSub: "Gemeten, niet geschat",
    stats: [
      { n: "100", em: "%", l: "Droog binnen de berekende periode" },
      { n: "2", em: "×", l: "Vochtmeting bij start én einde" },
      { n: "0", em: "€", l: "Verlengen als het nodig is*" },
      { n: "24", em: "u", l: "Defect toestel gratis vervangen" }
    ],
    wKick: "Waarom wij dit durven beloven",
    wH2: "Een garantie kan alleen op een berekening rusten.",
    wLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Wie een toestel op gevoel plaatst, kan niets garanderen. Wij wel: de ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "droogcalculator" }),
      " dimensioneert uw pakket op volume, situatie en toepassing, onze technieker ",
      /* @__PURE__ */ jsx(Link, { to: lp("/levering"), children: "installeert de opstelling correct" }),
      ' en de vochtmeting legt het start- en eindpunt objectief vast. Daardoor is "droog" bij Vernast geen gevoel, maar een meetresultaat.'
    ] }),
    caAria: "Animatie: de berekening achter de garantie",
    caTitel: "Uw droogplan",
    caStatus: "Wordt berekend",
    caOpp: "Woonoppervlakte",
    caVol: "Volume",
    caPakket: "Aanbevolen pakket",
    caPakketWaarde: "2× Performance",
    caVocht: "Vocht in materiaal",
    caStreef: "Streefwaarde",
    caDuur: "Berekende droogtijd: ",
    caDagen: "12 dagen",
    caDroog: "100% droog*",
    zKick: "Zo werkt de garantie",
    zH2: "Vier stappen, één belofte.",
    stappen: [
      { h3: "Uw pakket wordt berekend", p: "De Calculator vertaalt oppervlakte, hoogte en situatie naar het juiste aantal toestellen en een berekende droogperiode." },
      { h3: "Nulmeting bij installatie", p: "Bij de plaatsing meet onze technieker het vochtgehalte en legt de startwaarden vast op de leverbon." },
      { h3: "De opstelling droogt continu", p: "Toestellen draaien dag en nacht, het condenswater wordt afgevoerd en u laat de opstelling ongewijzigd." },
      { h3: "Eindmeting beslist", p: "Droog gemeten? Wij halen alles op. Nog niet droog ondanks correcte omstandigheden? U verlengt kosteloos.*" }
    ],
    vKick: "De voorwaarden",
    vH2: "Wat de garantie dekt. En wat wij van u vragen.",
    vLede: "Een eerlijke garantie heeft duidelijke spelregels. Dit zijn ze, zonder kleine lettertjes achteraf.",
    dektLabel: "De garantie dekt",
    dektH3: "Droog binnen de berekende periode.",
    dekt: [
      "Uw woning is droog binnen de periode uit uw berekening",
      "Objectief vastgesteld met een vochtmeting voor én na",
      "Niet droog? U huurt kosteloos verder tot de streefwaarde bereikt is*",
      "Defect toestel? Wij wisselen het gratis om binnen 24 uur"
    ],
    dektVoet: "Geldt voor elk online berekend en geboekt droogpakket met levering & installatie.",
    vraagtLabel: "Wij vragen van u",
    vraagtH3: "Correcte droogomstandigheden.",
    vraagt: [
      "Laat alle toestellen dag en nacht draaien",
      "Houd ramen en buitendeuren gesloten",
      "Verplaats de opstelling niet zonder overleg",
      "Zorg voor werkende elektriciteit tijdens de volledige periode",
      "Breng geen nieuwe natte materialen aan tijdens de droging",
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "Meld wijzigingen of storingen meteen via de ",
        /* @__PURE__ */ jsx(Link, { to: lp("/klantservice"), style: rood, children: "klantenservice" })
      ] })
    ],
    fijnH3: "* De spelregels op een rij",
    regels: [
      { b: "Toepassing:", tekst: /* @__PURE__ */ jsxs(Fragment, { children: [
        "de Drooggarantie geldt uitsluitend voor droogpakketten die via de Calculator zijn berekend en met levering & installatie zijn geboekt, niet voor losse toestellen of ",
        /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/afhalen"), style: rood, children: "zelf afhalen" }),
        "."
      ] }) },
      { b: "Meting:", tekst: "de vochtmetingen worden uitgevoerd door Vernast bij installatie en ophaling; de gemeten streefwaarden per materiaal zijn bepalend, niet het zicht of gevoel." },
      { b: "Omstandigheden:", tekst: "de garantie geldt zolang de opstelling ongewijzigd, continu en op een werkende stroomvoorziening heeft gedraaid, en er geen extra vochtbronnen zijn toegevoegd." },
      { b: "Externe factoren:", tekst: "actieve lekken, opstijgend grondvocht of nieuwe waterschade vallen buiten de garantie; wij helpen u dan wel met een aangepast droogplan." },
      { b: "Verlenging:", tekst: /* @__PURE__ */ jsxs(Fragment, { children: [
        "de kosteloze verlenging loopt tot de streefwaarde bereikt is en wordt samen met u ingepland; de voorwaarden van de ",
        /* @__PURE__ */ jsx(Link, { to: lp("/algemene-voorwaarden"), style: rood, children: "algemene voorwaarden" }),
        " blijven van toepassing."
      ] }) }
    ],
    fijnVraag: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Vragen over uw specifieke situatie? Bel ",
      /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", style: rood, children: "03 689 90 65" }),
      " of gebruik het formulier onderaan."
    ] }),
    mbKick: "Klaar om te starten?",
    mbH3: "Bereken uw pakket. De garantie zit er standaard bij.",
    mbP: "Geen toeslag, geen optie om aan te vinken: elk droogpakket met levering & installatie krijgt de Vernast Drooggarantie.",
    mbCta: "Bereken uw droogpakket",
    mbAlt: "Vernast technieker geeft duim omhoog",
    form: {
      kick: "Nog een vraag hierover?",
      h2: "Onze droogspecialisten denken graag mee.",
      lede: "Twijfelt u over de juiste aanpak voor uw project? Stel uw vraag, u krijgt binnen één werkdag antwoord van een specialist.",
      voornaam: "Voornaam",
      naam: "Naam",
      achternaam: "Achternaam",
      mail: "E-mail",
      mailPh: "naam@voorbeeld.be",
      tel: "Telefoon",
      onderwerp: "Waarover gaat uw vraag?",
      opties: ["Vraag over de Drooggarantie", "Advies over het juiste pakket", "Vraag over prijzen of levering", "Iets anders"],
      situatie: "Uw situatie",
      situatiePh: "Bv. nieuwbouw 140 m², chape geplaatst vorige week, wanneer kan de vloerder starten?",
      privacy: "Wij gebruiken uw gegevens enkel om uw vraag te beantwoorden.",
      verstuur: "Verstuur uw vraag",
      klaar: "Vraag verzonden",
      klaarP: "Bedankt! Een droogspecialist neemt binnen één werkdag contact met u op."
    }
  }),
  fr: (lp) => ({
    crumbHome: "Accueil",
    crumb: "Garantie de séchage",
    heroKick: "La garantie de séchage Vernast",
    h1: "100 % sec. Sinon, vous continuez à louer sans frais.*",
    heroP: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Parce que nous calculons votre pack au lieu de le deviner, nous osons promettre ce que personne d'autre ne promet : ",
      /* @__PURE__ */ jsx("b", { style: { color: "#fff" }, children: "votre logement est sec dans la période calculée." }),
      " La mesure finale le confirme, noir sur blanc."
    ] }),
    heroCta: "Calculez votre pack de séchage",
    heroCta2: "Consultez les conditions",
    heroAlt: "Sécher l'esprit tranquille avec la garantie de séchage Vernast",
    badge: "La mesure finale confirme",
    badgeSub: "Mesuré, pas estimé",
    stats: [
      { n: "100", em: " %", l: "Sec dans la période calculée" },
      { n: "2", em: "×", l: "Mesure d'humidité au début et à la fin" },
      { n: "0", em: " €", l: "Pour prolonger si nécessaire*" },
      { n: "24", em: " h", l: "Appareil défectueux remplacé gratuitement" }
    ],
    wKick: "Pourquoi nous osons le promettre",
    wH2: "Une garantie ne peut reposer que sur un calcul.",
    wLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Qui place un appareil au jugé ne peut rien garantir. Nous, si : le ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "calculateur de séchage" }),
      " dimensionne votre pack selon le volume, la situation et l'application, notre technicien ",
      /* @__PURE__ */ jsx(Link, { to: lp("/levering"), children: "installe correctement l'équipement" }),
      " et la mesure d'humidité fixe objectivement le point de départ et le point d'arrivée. Chez Vernast, « sec » n'est donc pas une impression, mais un résultat de mesure."
    ] }),
    caAria: "Animation : le calcul derrière la garantie",
    caTitel: "Votre plan de séchage",
    caStatus: "Calcul en cours",
    caOpp: "Surface habitable",
    caVol: "Volume",
    caPakket: "Pack recommandé",
    caPakketWaarde: "2× Performance",
    caVocht: "Humidité dans le matériau",
    caStreef: "Valeur cible",
    caDuur: "Temps de séchage calculé : ",
    caDagen: "12 jours",
    caDroog: "100 % sec*",
    zKick: "Comment fonctionne la garantie",
    zH2: "Quatre étapes, une promesse.",
    stappen: [
      { h3: "Votre pack est calculé", p: "Le calculateur traduit la surface, la hauteur et la situation en un nombre correct d'appareils et une période de séchage calculée." },
      { h3: "Mesure initiale à l'installation", p: "Lors de la mise en place, notre technicien mesure le taux d'humidité et consigne les valeurs de départ sur le bon de livraison." },
      { h3: "L'installation sèche en continu", p: "Les appareils tournent jour et nuit, l'eau de condensation est évacuée et vous laissez l'installation telle quelle." },
      { h3: "La mesure finale décide", p: "Mesuré sec ? Nous reprenons tout. Pas encore sec malgré des conditions correctes ? Vous prolongez sans frais.*" }
    ],
    vKick: "Les conditions",
    vH2: "Ce que couvre la garantie. Et ce que nous vous demandons.",
    vLede: "Une garantie honnête a des règles claires. Les voici, sans petits caractères après coup.",
    dektLabel: "La garantie couvre",
    dektH3: "Sec dans la période calculée.",
    dekt: [
      "Votre logement est sec dans la période issue de votre calcul",
      "Constaté objectivement par une mesure d'humidité avant et après",
      "Pas sec ? Vous continuez à louer sans frais jusqu'à ce que la valeur cible soit atteinte*",
      "Appareil défectueux ? Nous l'échangeons gratuitement dans les 24 heures"
    ],
    dektVoet: "Valable pour tout pack de séchage calculé et réservé en ligne avec livraison et installation.",
    vraagtLabel: "Ce que nous vous demandons",
    vraagtH3: "Des conditions de séchage correctes.",
    vraagt: [
      "Laissez tous les appareils tourner jour et nuit",
      "Gardez les fenêtres et les portes extérieures fermées",
      "Ne déplacez pas l'installation sans concertation",
      "Assurez une alimentation électrique en état de marche pendant toute la période",
      "N'appliquez pas de nouveaux matériaux humides pendant le séchage",
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "Signalez immédiatement toute modification ou panne via le ",
        /* @__PURE__ */ jsx(Link, { to: lp("/klantservice"), style: rood, children: "service clientèle" })
      ] })
    ],
    fijnH3: "* Les règles en un coup d'œil",
    regels: [
      { b: "Application :", tekst: /* @__PURE__ */ jsxs(Fragment, { children: [
        "la garantie de séchage s'applique exclusivement aux packs de séchage calculés via le calculateur et réservés avec livraison et installation, et non aux appareils loués seuls ni à l'",
        /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/afhalen"), style: rood, children: "enlèvement par vos soins" }),
        "."
      ] }) },
      { b: "Mesure :", tekst: "les mesures d'humidité sont effectuées par Vernast à l'installation et à l'enlèvement ; les valeurs cibles mesurées par matériau sont déterminantes, et non l'aspect visuel ou le toucher." },
      { b: "Conditions :", tekst: "la garantie s'applique pour autant que l'installation ait fonctionné sans modification, en continu et sur une alimentation électrique en état de marche, et qu'aucune source d'humidité supplémentaire n'ait été ajoutée." },
      { b: "Facteurs externes :", tekst: "les fuites actives, l'humidité ascensionnelle du sol ou de nouveaux dégâts des eaux ne sont pas couverts par la garantie ; nous vous aidons toutefois alors avec un plan de séchage adapté." },
      { b: "Prolongation :", tekst: /* @__PURE__ */ jsxs(Fragment, { children: [
        "la prolongation sans frais court jusqu'à ce que la valeur cible soit atteinte et est planifiée avec vous ; les ",
        /* @__PURE__ */ jsx(Link, { to: lp("/algemene-voorwaarden"), style: rood, children: "conditions générales" }),
        " restent d'application."
      ] }) }
    ],
    fijnVraag: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Des questions sur votre situation particulière ? Appelez le ",
      /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", style: rood, children: "03 689 90 65" }),
      " ou utilisez le formulaire ci-dessous."
    ] }),
    mbKick: "Prêt à commencer ?",
    mbH3: "Calculez votre pack. La garantie est incluse d'office.",
    mbP: "Aucun supplément, aucune option à cocher : chaque pack de séchage avec livraison et installation bénéficie de la garantie de séchage Vernast.",
    mbCta: "Calculez votre pack de séchage",
    mbAlt: "Un technicien Vernast lève le pouce",
    form: {
      kick: "Encore une question ?",
      h2: "Nos spécialistes du séchage vous conseillent volontiers.",
      lede: "Vous hésitez sur la bonne approche pour votre projet ? Posez votre question, un spécialiste vous répond dans un délai d'un jour ouvrable.",
      voornaam: "Prénom",
      naam: "Nom",
      achternaam: "Nom de famille",
      mail: "E-mail",
      mailPh: "nom@exemple.be",
      tel: "Téléphone",
      onderwerp: "Sur quoi porte votre question ?",
      opties: ["Question sur la garantie de séchage", "Conseil sur le bon pack", "Question sur les prix ou la livraison", "Autre chose"],
      situatie: "Votre situation",
      situatiePh: "P. ex. nouvelle construction de 140 m², chape posée la semaine dernière : quand le poseur de sol peut-il commencer ?",
      privacy: "Nous utilisons vos données uniquement pour répondre à votre question.",
      verstuur: "Envoyez votre question",
      klaar: "Question envoyée",
      klaarP: "Merci ! Un spécialiste du séchage vous contactera dans un délai d'un jour ouvrable."
    }
  }),
  en: (lp) => ({
    crumbHome: "Home",
    crumb: "Drying guarantee",
    heroKick: "The Vernast drying guarantee",
    h1: "100% dry. Or you keep renting at no cost.*",
    heroP: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Because we calculate your package instead of guessing, we dare to promise what nobody else promises: ",
      /* @__PURE__ */ jsx("b", { style: { color: "#fff" }, children: "your home is dry within the calculated period." }),
      " The final measurement confirms it, in black and white."
    ] }),
    heroCta: "Calculate your drying package",
    heroCta2: "View the conditions",
    heroAlt: "Worry-free drying with the Vernast drying guarantee",
    badge: "Final measurement confirms",
    badgeSub: "Measured, not estimated",
    stats: [
      { n: "100", em: "%", l: "Dry within the calculated period" },
      { n: "2", em: "×", l: "Moisture reading at the start and at the end" },
      { n: "€0", em: "", l: "To extend if needed*" },
      { n: "24", em: "h", l: "Faulty unit replaced free of charge" }
    ],
    wKick: "Why we dare to promise this",
    wH2: "A guarantee can only rest on a calculation.",
    wLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Anyone who places a unit by feel can guarantee nothing. We can: the ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "drying calculator" }),
      " sizes your package by volume, situation and application, our technician ",
      /* @__PURE__ */ jsx(Link, { to: lp("/levering"), children: "installs the set-up correctly" }),
      ' and the moisture reading records the starting point and end point objectively. That is why at Vernast "dry" is not a feeling but a measurement result.'
    ] }),
    caAria: "Animation: the calculation behind the guarantee",
    caTitel: "Your drying plan",
    caStatus: "Calculating",
    caOpp: "Living area",
    caVol: "Volume",
    caPakket: "Recommended package",
    caPakketWaarde: "2× Performance",
    caVocht: "Moisture in material",
    caStreef: "Target value",
    caDuur: "Calculated drying time: ",
    caDagen: "12 days",
    caDroog: "100% dry*",
    zKick: "How the guarantee works",
    zH2: "Four steps, one promise.",
    stappen: [
      { h3: "Your package is calculated", p: "The calculator translates floor area, height and situation into the right number of units and a calculated drying period." },
      { h3: "Baseline reading at installation", p: "When setting up, our technician measures the moisture content and records the starting values on the delivery note." },
      { h3: "The set-up dries continuously", p: "Units run day and night, the condensate is drained away and you leave the set-up unchanged." },
      { h3: "The final measurement decides", p: "Measured dry? We collect everything. Not yet dry despite correct conditions? You extend at no cost.*" }
    ],
    vKick: "The conditions",
    vH2: "What the guarantee covers. And what we ask of you.",
    vLede: "A fair guarantee has clear rules. Here they are, with no small print afterwards.",
    dektLabel: "The guarantee covers",
    dektH3: "Dry within the calculated period.",
    dekt: [
      "Your home is dry within the period from your calculation",
      "Established objectively with a moisture reading before and after",
      "Not dry? You keep renting at no cost until the target value is reached*",
      "Faulty unit? We replace it free of charge within 24 hours"
    ],
    dektVoet: "Applies to every drying package calculated and booked online with delivery & installation.",
    vraagtLabel: "What we ask of you",
    vraagtH3: "Correct drying conditions.",
    vraagt: [
      "Keep all units running day and night",
      "Keep windows and external doors closed",
      "Do not move the set-up without consulting us",
      "Ensure a working electricity supply for the entire period",
      "Do not apply any new wet materials during drying",
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "Report changes or faults immediately via ",
        /* @__PURE__ */ jsx(Link, { to: lp("/klantservice"), style: rood, children: "customer service" })
      ] })
    ],
    fijnH3: "* The rules at a glance",
    regels: [
      { b: "Scope:", tekst: /* @__PURE__ */ jsxs(Fragment, { children: [
        "the drying guarantee applies exclusively to drying packages calculated via the calculator and booked with delivery & installation, not to individual units or ",
        /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/afhalen"), style: rood, children: "collection by yourself" }),
        "."
      ] }) },
      { b: "Measurement:", tekst: "the moisture readings are carried out by Vernast at installation and at collection; the measured target values per material are decisive, not appearance or feel." },
      { b: "Conditions:", tekst: "the guarantee applies as long as the set-up has run unchanged, continuously and on a working power supply, and no additional sources of moisture have been added." },
      { b: "External factors:", tekst: "active leaks, rising damp from the ground or new water damage fall outside the guarantee; in that case we will still help you with an adjusted drying plan." },
      { b: "Extension:", tekst: /* @__PURE__ */ jsxs(Fragment, { children: [
        "the free extension runs until the target value is reached and is scheduled together with you; the terms of the ",
        /* @__PURE__ */ jsx(Link, { to: lp("/algemene-voorwaarden"), style: rood, children: "general terms and conditions" }),
        " continue to apply."
      ] }) }
    ],
    fijnVraag: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Questions about your specific situation? Call ",
      /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", style: rood, children: "+32 3 689 90 65" }),
      " or use the form below."
    ] }),
    mbKick: "Ready to start?",
    mbH3: "Calculate your package. The guarantee is included as standard.",
    mbP: "No surcharge, no option to tick: every drying package with delivery & installation comes with the Vernast drying guarantee.",
    mbCta: "Calculate your drying package",
    mbAlt: "Vernast technician giving a thumbs up",
    form: {
      kick: "Any more questions about this?",
      h2: "Our drying specialists are happy to help.",
      lede: "Not sure about the right approach for your project? Ask your question and you will get an answer from a specialist within one working day.",
      voornaam: "First name",
      naam: "Name",
      achternaam: "Surname",
      mail: "Email",
      mailPh: "name@example.com",
      tel: "Phone",
      onderwerp: "What is your question about?",
      opties: ["Question about the drying guarantee", "Advice on the right package", "Question about prices or delivery", "Something else"],
      situatie: "Your situation",
      situatiePh: "E.g. new build of 140 m², screed laid last week: when can the floor fitter start?",
      privacy: "We only use your details to answer your question.",
      verstuur: "Send your question",
      klaar: "Question sent",
      klaarP: "Thank you! A drying specialist will contact you within one working day."
    }
  })
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/DrooggarantiePage.tsx");
const Check = () => /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M20 6 9 17l-5-5" }) });
const Arrow = () => /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
  /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
] });
const STAP_ICONEN = [
  /* @__PURE__ */ jsx("svg", { width: "19", height: "19", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" }) }, "1"),
  /* @__PURE__ */ jsx("svg", { width: "19", height: "19", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" }) }, "2"),
  /* @__PURE__ */ jsxs("svg", { width: "19", height: "19", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ jsx("path", { d: "M12 6v6l4 2" })
  ] }, "3"),
  /* @__PURE__ */ jsxs("svg", { width: "19", height: "19", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "m9 12 2 2 4-4" }),
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" })
  ] }, "4")
];
const DrooggarantiePage = () => {
  const [sent, setSent] = useState(false);
  const lp = useLokaalPad();
  const t = useCopy(COPY)(lp);
  const f = t.form;
  return /* @__PURE__ */ jsxs("div", { className: "dg-page", children: [
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        ...useSeo("drooggarantie"),
        path: lp("/drooggarantie"),
        jsonLd: [
          organizationSchema(),
          breadcrumbSchema([
            { name: t.crumbHome, path: lp("/") },
            { name: t.crumb, path: lp("/drooggarantie") }
          ])
        ]
      }
    ),
    /* @__PURE__ */ jsx(V3Header, { lightAfter: 420 }),
    /* @__PURE__ */ jsx("div", { className: "redtop", children: /* @__PURE__ */ jsx("section", { className: "hero", children: /* @__PURE__ */ jsxs("div", { className: "wrap hero-grid", children: [
      /* @__PURE__ */ jsxs("div", { className: "hero-copy", children: [
        /* @__PURE__ */ jsx("span", { className: "kick rv", children: t.heroKick }),
        /* @__PURE__ */ jsx("h1", { className: "rv", children: t.h1 }),
        /* @__PURE__ */ jsx("p", { className: "rv d1", children: t.heroP }),
        /* @__PURE__ */ jsxs("div", { className: "hcta rv d3", children: [
          /* @__PURE__ */ jsxs(Link, { className: "btn btn-white", to: lp("/verhuur/calculator"), children: [
            t.heroCta,
            /* @__PURE__ */ jsx(Arrow, {})
          ] }),
          /* @__PURE__ */ jsx("a", { className: "btn btn-ghost", href: "#voorwaarden", children: t.heroCta2 })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hero-vis rv d2", children: [
        /* @__PURE__ */ jsx("img", { src: "/vernast/man-zen-crop.webp", alt: t.heroAlt, style: { width: "min(78%,360px)", position: "relative", zIndex: 1 } }),
        /* @__PURE__ */ jsxs("div", { className: "fbadge", style: { top: "30%", right: "-14%", left: "auto", zIndex: 0 }, children: [
          /* @__PURE__ */ jsx("span", { className: "ic", children: /* @__PURE__ */ jsxs("svg", { width: "19", height: "19", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("path", { d: "m9 12 2 2 4-4" }),
            /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            t.badge,
            /* @__PURE__ */ jsx("small", { children: t.badgeSub })
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "statrule", children: /* @__PURE__ */ jsx("div", { className: "wrap", children: /* @__PURE__ */ jsx("div", { className: "band", children: t.stats.map((st) => /* @__PURE__ */ jsxs("div", { className: "st vis", children: [
      /* @__PURE__ */ jsxs("div", { className: "n", children: [
        st.n,
        /* @__PURE__ */ jsx("em", { children: st.em })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "l", children: st.l })
    ] }, st.l)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "sw", children: /* @__PURE__ */ jsxs("div", { className: "wrap wsplit", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", style: { marginBottom: 0 }, children: [
        /* @__PURE__ */ jsx("span", { className: "kick rv", children: t.wKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec rv", children: t.wH2 }),
        /* @__PURE__ */ jsx("p", { className: "lede rv d1", children: t.wLede })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "calcanim rv d1", "aria-label": t.caAria, children: [
        /* @__PURE__ */ jsxs("div", { className: "ca-h", children: [
          /* @__PURE__ */ jsx("b", { children: t.caTitel }),
          /* @__PURE__ */ jsx("span", { children: t.caStatus })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "carow", children: [
          /* @__PURE__ */ jsx("span", { className: "k", children: t.caOpp }),
          /* @__PURE__ */ jsxs("span", { className: "v canum", children: [
            "120 ",
            /* @__PURE__ */ jsx("small", { children: "m²" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "carow", children: [
          /* @__PURE__ */ jsx("span", { className: "k", children: t.caVol }),
          /* @__PURE__ */ jsxs("span", { className: "v canum", children: [
            "312 ",
            /* @__PURE__ */ jsx("small", { children: "m³" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "carow", children: [
          /* @__PURE__ */ jsx("span", { className: "k", children: t.caPakket }),
          /* @__PURE__ */ jsx("span", { className: "v", children: t.caPakketWaarde })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "cabar", children: /* @__PURE__ */ jsx("b", {}) }),
        /* @__PURE__ */ jsxs("div", { className: "ca-f", children: [
          /* @__PURE__ */ jsx("span", { children: t.caVocht }),
          /* @__PURE__ */ jsx("span", { children: t.caStreef })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "ca-res", children: [
          /* @__PURE__ */ jsxs("b", { children: [
            t.caDuur,
            /* @__PURE__ */ jsx("span", { className: "canum", children: t.caDagen })
          ] }),
          /* @__PURE__ */ jsx("span", { children: t.caDroog })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "lvred", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick rv", children: t.zKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec rv", children: t.zH2 })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "stgrid", children: t.stappen.map((st, n) => /* @__PURE__ */ jsxs("div", { className: ["stp rv", "stp rv", "stp rv d1", "stp rv d1"][n], children: [
        /* @__PURE__ */ jsx("span", { className: "si", children: STAP_ICONEN[n] }),
        /* @__PURE__ */ jsx("h3", { children: st.h3 }),
        /* @__PURE__ */ jsx("p", { children: st.p })
      ] }, st.h3)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "sw", id: "voorwaarden", style: { paddingBottom: 20 }, children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick rv", children: t.vKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec rv", children: t.vH2 }),
        /* @__PURE__ */ jsx("p", { className: "lede rv d1", children: t.vLede })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "vsg", children: [
        /* @__PURE__ */ jsxs("div", { className: "vs hot rv", style: { background: "var(--maroon-d) url('/vernast/bg-red-2.webp') center/cover no-repeat" }, children: [
          /* @__PURE__ */ jsx("span", { className: "vt", children: t.dektLabel }),
          /* @__PURE__ */ jsx("h3", { children: t.dektH3 }),
          /* @__PURE__ */ jsx("ul", { children: t.dekt.map((x) => /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx(Check, {}),
            " ",
            x
          ] }, x)) }),
          /* @__PURE__ */ jsx("span", { className: "vf", children: t.dektVoet })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "vs rv d1", style: { background: "var(--bg-alt)" }, children: [
          /* @__PURE__ */ jsx("span", { className: "vt", style: { background: "#fff" }, children: t.vraagtLabel }),
          /* @__PURE__ */ jsx("h3", { children: t.vraagtH3 }),
          /* @__PURE__ */ jsx("ul", { children: t.vraagt.map((x, n) => /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx(Check, {}),
            " ",
            x
          ] }, n)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "fine rv d2", children: [
        /* @__PURE__ */ jsx("h3", { children: t.fijnH3 }),
        /* @__PURE__ */ jsx("ol", { children: t.regels.map((r) => /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("b", { children: r.b }),
          " ",
          r.tekst
        ] }, r.b)) }),
        /* @__PURE__ */ jsx("p", { children: t.fijnVraag })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "sw", style: { paddingTop: 0 }, children: /* @__PURE__ */ jsx("div", { className: "wrap", children: /* @__PURE__ */ jsxs("div", { className: "manband rv", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-t", children: [
        /* @__PURE__ */ jsx("span", { className: "mbk", children: t.mbKick }),
        /* @__PURE__ */ jsx("h3", { children: t.mbH3 }),
        /* @__PURE__ */ jsx("p", { children: t.mbP }),
        /* @__PURE__ */ jsxs(Link, { className: "btn btn-white mb-cta", to: lp("/verhuur/calculator"), children: [
          t.mbCta,
          /* @__PURE__ */ jsx(Arrow, {})
        ] })
      ] }),
      /* @__PURE__ */ jsx("img", { className: "mb-man", src: "/vernast/man-duim-kabels.webp", alt: t.mbAlt, style: { width: "min(30%,320px)" } })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "oform", id: "formulier", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", style: { textAlign: "center", marginLeft: "auto", marginRight: "auto" }, children: [
        /* @__PURE__ */ jsx("span", { className: "kick rv", children: f.kick }),
        /* @__PURE__ */ jsx("h2", { className: "sec rv", children: f.h2 }),
        /* @__PURE__ */ jsx("p", { className: "lede rv d1", style: { marginLeft: "auto", marginRight: "auto" }, children: f.lede })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "fshell rv d2", children: [
        /* @__PURE__ */ jsxs("div", { id: "formBody", style: sent ? { display: "none" } : void 0, children: [
          /* @__PURE__ */ jsxs("div", { className: "frow", children: [
            /* @__PURE__ */ jsxs("div", { className: "fld", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "fVoor", children: f.voornaam }),
              /* @__PURE__ */ jsx("input", { type: "text", id: "fVoor", placeholder: f.voornaam })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "fld", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "fNaam", children: f.naam }),
              /* @__PURE__ */ jsx("input", { type: "text", id: "fNaam", placeholder: f.achternaam })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "frow", children: [
            /* @__PURE__ */ jsxs("div", { className: "fld", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "fMail", children: f.mail }),
              /* @__PURE__ */ jsx("input", { type: "email", id: "fMail", placeholder: f.mailPh })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "fld", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "fTel", children: f.tel }),
              /* @__PURE__ */ jsx("input", { type: "tel", id: "fTel", placeholder: "04.." })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "frow one", children: /* @__PURE__ */ jsxs("div", { className: "fld", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "fOnd", children: f.onderwerp }),
            /* @__PURE__ */ jsx("select", { id: "fOnd", children: f.opties.map((o) => /* @__PURE__ */ jsx("option", { children: o }, o)) })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "frow one", children: /* @__PURE__ */ jsxs("div", { className: "fld", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "fMsg", children: f.situatie }),
            /* @__PURE__ */ jsx("textarea", { id: "fMsg", rows: 5, placeholder: f.situatiePh })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "fsend", children: [
            /* @__PURE__ */ jsx("small", { children: f.privacy }),
            /* @__PURE__ */ jsxs("button", { className: "btn", id: "fSend", type: "button", onClick: () => setSent(true), children: [
              f.verstuur,
              /* @__PURE__ */ jsx(Arrow, {})
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: sent ? "fdone on" : "fdone", id: "formDone", children: [
          /* @__PURE__ */ jsx("div", { className: "ic", children: /* @__PURE__ */ jsx("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.6", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M20 6 9 17l-5-5" }) }) }),
          /* @__PURE__ */ jsx("h3", { children: f.klaar }),
          /* @__PURE__ */ jsx("p", { children: f.klaarP })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(V3Footer, {})
  ] });
};
export {
  DrooggarantiePage as default
};

import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { Copy } from "@/i18n/useTaal";

/**
 * De teksten van /drooggarantie per taal.
 *
 * Dit is een belofte met voorwaarden, geen wervende tekst: de Franse en Engelse versie
 * volgen de Nederlandse zin voor zin. Wie hier iets aan de voorwaarden wijzigt,
 * wijzigt het in alle talen tegelijk — een garantie die in het Frans of Engels
 * ruimer leest dan in het Nederlands, is in die taal ook zo beloofd.
 */
type Lp = (nlPad: string) => string;

const rood = { color: "var(--red)", fontWeight: 600 } as const;

export interface GarantieTekst {
  crumbHome: string;
  crumb: string;
  heroKick: string;
  h1: string;
  heroP: ReactNode;
  heroCta: string;
  heroCta2: string;
  heroAlt: string;
  badge: string;
  badgeSub: string;
  stats: { n: string; em: string; l: string }[];
  wKick: string;
  wH2: string;
  wLede: ReactNode;
  caAria: string;
  caTitel: string;
  caStatus: string;
  caOpp: string;
  caVol: string;
  caPakket: string;
  caPakketWaarde: string;
  caVocht: string;
  caStreef: string;
  caDuur: string;
  caDagen: string;
  caDroog: string;
  zKick: string;
  zH2: string;
  stappen: { h3: string; p: string }[];
  vKick: string;
  vH2: string;
  vLede: string;
  dektLabel: string;
  dektH3: string;
  dekt: string[];
  dektVoet: string;
  vraagtLabel: string;
  vraagtH3: string;
  vraagt: ReactNode[];
  fijnH3: string;
  regels: { b: string; tekst: ReactNode }[];
  fijnVraag: ReactNode;
  mbKick: string;
  mbH3: string;
  mbP: string;
  mbCta: string;
  mbAlt: string;
  form: {
    kick: string;
    h2: string;
    lede: string;
    situatiePh: string;
  };
}

export const COPY = {
  nl: (lp: Lp): GarantieTekst => ({
    crumbHome: "Home",
    crumb: "Drooggarantie",
    heroKick: "De Vernast Drooggarantie",
    h1: "100% droog. Of u huurt kosteloos verder.*",
    heroP: <>Omdat wij uw pakket berekenen in plaats van gokken, durven wij beloven wat niemand anders belooft: <b style={{ color: "#fff" }}>uw woning is droog binnen de berekende periode.</b> De eindmeting bevestigt het, zwart op wit.</>,
    heroCta: "Bereken uw droogpakket",
    heroCta2: "Bekijk de voorwaarden",
    heroAlt: "Zorgeloos drogen met de Vernast Drooggarantie",
    badge: "Eindmeting bevestigt",
    badgeSub: "Gemeten, niet geschat",
    stats: [
      { n: "100", em: "%", l: "Droog binnen de berekende periode" },
      { n: "2", em: "×", l: "Vochtmeting bij start én einde" },
      { n: "0", em: "€", l: "Verlengen als het nodig is*" },
      { n: "24", em: "u", l: "Defect toestel gratis vervangen" },
    ],
    wKick: "Waarom wij dit durven beloven",
    wH2: "Een garantie kan alleen op een berekening rusten.",
    wLede: <>Wie een toestel op gevoel plaatst, kan niets garanderen. Wij wel: de <Link to={lp("/verhuur/calculator")}>droogcalculator</Link> dimensioneert uw pakket op volume, situatie en toepassing, onze technieker <Link to={lp("/levering")}>installeert de opstelling correct</Link> en de vochtmeting legt het start- en eindpunt objectief vast. Daardoor is "droog" bij Vernast geen gevoel, maar een meetresultaat.</>,
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
      { h3: "Eindmeting beslist", p: "Droog gemeten? Wij halen alles op. Nog niet droog ondanks correcte omstandigheden? U verlengt kosteloos.*" },
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
      "Defect toestel? Wij wisselen het gratis om binnen 24 uur",
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
      <>Meld wijzigingen of storingen meteen via de <Link to={lp("/klantservice")} style={rood}>klantenservice</Link></>,
    ],
    fijnH3: "* De spelregels op een rij",
    regels: [
      { b: "Toepassing:", tekst: <>de Drooggarantie geldt uitsluitend voor droogpakketten die via de Calculator zijn berekend en met levering &amp; installatie zijn geboekt, niet voor losse toestellen of <Link to={lp("/verhuur/afhalen")} style={rood}>zelf afhalen</Link>.</> },
      { b: "Meting:", tekst: "de vochtmetingen worden uitgevoerd door Vernast bij installatie en ophaling; de gemeten streefwaarden per materiaal zijn bepalend, niet het zicht of gevoel." },
      { b: "Omstandigheden:", tekst: "de garantie geldt zolang de opstelling ongewijzigd, continu en op een werkende stroomvoorziening heeft gedraaid, en er geen extra vochtbronnen zijn toegevoegd." },
      { b: "Externe factoren:", tekst: "actieve lekken, opstijgend grondvocht of nieuwe waterschade vallen buiten de garantie; wij helpen u dan wel met een aangepast droogplan." },
      { b: "Verlenging:", tekst: <>de kosteloze verlenging loopt tot de streefwaarde bereikt is en wordt samen met u ingepland; de voorwaarden van de <Link to={lp("/algemene-voorwaarden")} style={rood}>algemene voorwaarden</Link> blijven van toepassing.</> },
    ],
    fijnVraag: <>Vragen over uw specifieke situatie? Bel <a href="tel:+3236899065" style={rood}>03 689 90 65</a> of gebruik het formulier onderaan.</>,
    mbKick: "Klaar om te starten?",
    mbH3: "Bereken uw pakket. De garantie zit er standaard bij.",
    mbP: "Geen toeslag, geen optie om aan te vinken: elk droogpakket met levering & installatie krijgt de Vernast Drooggarantie.",
    mbCta: "Bereken uw droogpakket",
    mbAlt: "Vernast technieker geeft duim omhoog",
    form: {
      kick: "Nog een vraag hierover?",
      h2: "Onze droogspecialisten denken graag mee.",
      lede: "Twijfelt u over de juiste aanpak voor uw project? Stel uw vraag, u krijgt binnen één werkdag antwoord van een specialist.",
      situatiePh: "Bv. nieuwbouw 140 m², chape geplaatst vorige week, wanneer kan de vloerder starten?",
    },
  }),
  fr: (lp: Lp): GarantieTekst => ({
    crumbHome: "Accueil",
    crumb: "Garantie de séchage",
    heroKick: "La garantie de séchage Vernast",
    h1: "100 % sec. Sinon, vous continuez à louer sans frais.*",
    heroP: <>Parce que nous calculons votre pack au lieu de le deviner, nous osons promettre ce que personne d'autre ne promet : <b style={{ color: "#fff" }}>votre logement est sec dans la période calculée.</b> La mesure finale le confirme, noir sur blanc.</>,
    heroCta: "Calculez votre pack de séchage",
    heroCta2: "Consultez les conditions",
    heroAlt: "Sécher l'esprit tranquille avec la garantie de séchage Vernast",
    badge: "La mesure finale confirme",
    badgeSub: "Mesuré, pas estimé",
    stats: [
      { n: "100", em: " %", l: "Sec dans la période calculée" },
      { n: "2", em: "×", l: "Mesure d'humidité au début et à la fin" },
      { n: "0", em: " €", l: "Pour prolonger si nécessaire*" },
      { n: "24", em: " h", l: "Appareil défectueux remplacé gratuitement" },
    ],
    wKick: "Pourquoi nous osons le promettre",
    wH2: "Une garantie ne peut reposer que sur un calcul.",
    wLede: <>Qui place un appareil au jugé ne peut rien garantir. Nous, si : le <Link to={lp("/verhuur/calculator")}>calculateur de séchage</Link> dimensionne votre pack selon le volume, la situation et l'application, notre technicien <Link to={lp("/levering")}>installe correctement l'équipement</Link> et la mesure d'humidité fixe objectivement le point de départ et le point d'arrivée. Chez Vernast, « sec » n'est donc pas une impression, mais un résultat de mesure.</>,
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
      { h3: "La mesure finale décide", p: "Mesuré sec ? Nous reprenons tout. Pas encore sec malgré des conditions correctes ? Vous prolongez sans frais.*" },
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
      "Appareil défectueux ? Nous l'échangeons gratuitement dans les 24 heures",
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
      <>Signalez immédiatement toute modification ou panne via le <Link to={lp("/klantservice")} style={rood}>service clientèle</Link></>,
    ],
    fijnH3: "* Les règles en un coup d'œil",
    regels: [
      { b: "Application :", tekst: <>la garantie de séchage s'applique exclusivement aux packs de séchage calculés via le calculateur et réservés avec livraison et installation, et non aux appareils loués seuls ni à l'<Link to={lp("/verhuur/afhalen")} style={rood}>enlèvement par vos soins</Link>.</> },
      { b: "Mesure :", tekst: "les mesures d'humidité sont effectuées par Vernast à l'installation et à l'enlèvement ; les valeurs cibles mesurées par matériau sont déterminantes, et non l'aspect visuel ou le toucher." },
      { b: "Conditions :", tekst: "la garantie s'applique pour autant que l'installation ait fonctionné sans modification, en continu et sur une alimentation électrique en état de marche, et qu'aucune source d'humidité supplémentaire n'ait été ajoutée." },
      { b: "Facteurs externes :", tekst: "les fuites actives, l'humidité ascensionnelle du sol ou de nouveaux dégâts des eaux ne sont pas couverts par la garantie ; nous vous aidons toutefois alors avec un plan de séchage adapté." },
      { b: "Prolongation :", tekst: <>la prolongation sans frais court jusqu'à ce que la valeur cible soit atteinte et est planifiée avec vous ; les <Link to={lp("/algemene-voorwaarden")} style={rood}>conditions générales</Link> restent d'application.</> },
    ],
    fijnVraag: <>Des questions sur votre situation particulière ? Appelez le <a href="tel:+3236899065" style={rood}>03 689 90 65</a> ou utilisez le formulaire ci-dessous.</>,
    mbKick: "Prêt à commencer ?",
    mbH3: "Calculez votre pack. La garantie est incluse d'office.",
    mbP: "Aucun supplément, aucune option à cocher : chaque pack de séchage avec livraison et installation bénéficie de la garantie de séchage Vernast.",
    mbCta: "Calculez votre pack de séchage",
    mbAlt: "Un technicien Vernast lève le pouce",
    form: {
      kick: "Encore une question ?",
      h2: "Nos spécialistes du séchage vous conseillent volontiers.",
      lede: "Vous hésitez sur la bonne approche pour votre projet ? Posez votre question, un spécialiste vous répond dans un délai d'un jour ouvrable.",
      situatiePh: "P. ex. nouvelle construction de 140 m², chape posée la semaine dernière : quand le poseur de sol peut-il commencer ?",
    },
  }),
  en: (lp: Lp): GarantieTekst => ({
    crumbHome: "Home",
    crumb: "Drying guarantee",
    heroKick: "The Vernast drying guarantee",
    h1: "100% dry. Or you keep renting at no cost.*",
    heroP: <>Because we calculate your package instead of guessing, we dare to promise what nobody else promises: <b style={{ color: "#fff" }}>your home is dry within the calculated period.</b> The final measurement confirms it, in black and white.</>,
    heroCta: "Calculate your drying package",
    heroCta2: "View the conditions",
    heroAlt: "Worry-free drying with the Vernast drying guarantee",
    badge: "Final measurement confirms",
    badgeSub: "Measured, not estimated",
    stats: [
      { n: "100", em: "%", l: "Dry within the calculated period" },
      { n: "2", em: "×", l: "Moisture reading at the start and at the end" },
      { n: "€0", em: "", l: "To extend if needed*" },
      { n: "24", em: "h", l: "Faulty unit replaced free of charge" },
    ],
    wKick: "Why we dare to promise this",
    wH2: "A guarantee can only rest on a calculation.",
    wLede: <>Anyone who places a unit by feel can guarantee nothing. We can: the <Link to={lp("/verhuur/calculator")}>drying calculator</Link> sizes your package by volume, situation and application, our technician <Link to={lp("/levering")}>installs the set-up correctly</Link> and the moisture reading records the starting point and end point objectively. That is why at Vernast "dry" is not a feeling but a measurement result.</>,
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
      { h3: "The final measurement decides", p: "Measured dry? We collect everything. Not yet dry despite correct conditions? You extend at no cost.*" },
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
      "Faulty unit? We replace it free of charge within 24 hours",
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
      <>Report changes or faults immediately via <Link to={lp("/klantservice")} style={rood}>customer service</Link></>,
    ],
    fijnH3: "* The rules at a glance",
    regels: [
      { b: "Scope:", tekst: <>the drying guarantee applies exclusively to drying packages calculated via the calculator and booked with delivery &amp; installation, not to individual units or <Link to={lp("/verhuur/afhalen")} style={rood}>collection by yourself</Link>.</> },
      { b: "Measurement:", tekst: "the moisture readings are carried out by Vernast at installation and at collection; the measured target values per material are decisive, not appearance or feel." },
      { b: "Conditions:", tekst: "the guarantee applies as long as the set-up has run unchanged, continuously and on a working power supply, and no additional sources of moisture have been added." },
      { b: "External factors:", tekst: "active leaks, rising damp from the ground or new water damage fall outside the guarantee; in that case we will still help you with an adjusted drying plan." },
      { b: "Extension:", tekst: <>the free extension runs until the target value is reached and is scheduled together with you; the terms of the <Link to={lp("/algemene-voorwaarden")} style={rood}>general terms and conditions</Link> continue to apply.</> },
    ],
    fijnVraag: <>Questions about your specific situation? Call <a href="tel:+3236899065" style={rood}>+32 3 689 90 65</a> or use the form below.</>,
    mbKick: "Ready to start?",
    mbH3: "Calculate your package. The guarantee is included as standard.",
    mbP: "No surcharge, no option to tick: every drying package with delivery & installation comes with the Vernast drying guarantee.",
    mbCta: "Calculate your drying package",
    mbAlt: "Vernast technician giving a thumbs up",
    form: {
      kick: "Any more questions about this?",
      h2: "Our drying specialists are happy to help.",
      lede: "Not sure about the right approach for your project? Ask your question and you will get an answer from a specialist within one working day.",
      situatiePh: "E.g. new build of 140 m², screed laid last week: when can the floor fitter start?",
    },
  }),
} satisfies Copy<(lp: Lp) => GarantieTekst>;

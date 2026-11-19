import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { P as PageMeta } from "./PageMeta-BXulEWcY.js";
import { l as V3Header } from "./V3Header-BeIMcMg7.js";
import { V as V3Footer } from "./V3Footer-9z4J1I4x.js";
import { o as organizationSchema, b as breadcrumbSchema } from "./schema-VJMHyxOJ.js";
import { u as useSeo } from "./seo-BMvlJeai.js";
import { a as useLokaalPad, u as useCopy } from "../main.mjs";
import { t as toestelPad } from "./verhuur-CgnDb-wO.js";
import "vite-react-ssg";
import "react";
import "./FontPreload-C6Rzq6ld.js";
import "./verhuur-8XCQs1EE.js";
import "./packages-DdkKuPcF.js";
import "./tarieven-ZrzMF0e-.js";
import "./verhuur.fr-CrIPL5Eo.js";
import "lucide-react";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/WaaromBouwdrogingPage.copy.tsx");
const rood = { color: "var(--red)", fontWeight: 600 };
const COPY = {
  nl: (lp) => ({
    crumbHome: "Home",
    crumb: "Waarom bouwdroging",
    heroKick: "Alles over drogen · waarom",
    h1: "Hopen op goed weer is geen droogstrategie.",
    heroP: "Een woning droogt uiteindelijk ook vanzelf, maar op het tempo van de seizoenen, met alle risico's voor uw planning en afwerking. Gecontroleerde bouwdroging maakt dat proces voorspelbaar, meetbaar en berekend op uw gebouw.",
    heroCta: "Bereken uw droogpakket",
    heroCta2: "Hoe drogen werkt",
    heroAlt: "Vernast-expert geeft een rode kaart aan drogen op goed weer",
    badge: "Wachten op de zon",
    badgeSub: "Geen planning, wel risico",
    vsKick: "Natuurlijk vs. gecontroleerd",
    vsH2: "Waarom natuurlijke droging vaak veel langer duurt.",
    vsLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Wanneer een gebouw vanzelf droogt, bepalen toevallige omstandigheden het tempo: de buitentemperatuur verandert, ramen gaan open en dicht, 's nachts daalt de temperatuur en stijgt de luchtvochtigheid. De ene dag wordt veel vocht afgevoerd, de volgende dag nauwelijks. Gecontroleerde ",
      /* @__PURE__ */ jsx(Link, { to: lp("/hoe-drogen-werkt"), children: "bouwdroging" }),
      " stabiliseert die variabelen, het grote verschil is ",
      /* @__PURE__ */ jsx("b", { children: "controleerbaarheid en voorspelbaarheid" }),
      "."
    ] }),
    natLabel: "Natuurlijk drogen",
    natH3: "Afhankelijk van het weer.",
    natLijst: [
      "Tempo wisselt per dag én per seizoen",
      "'s Nachts stijgt de RV en valt de droging stil",
      "Vochtige zomerlucht kan vocht bínnenbrengen",
      "Geen zicht op wanneer afwerken veilig is",
      "Weken tot maanden wachttijd tussen bouwfasen"
    ],
    gecLabel: "Gecontroleerde bouwdroging",
    gecH3: "Stabiel klimaat, dag en nacht.",
    gecLijst: [
      "Temperatuur, RV en circulatie continu gestuurd",
      "Droogt 24/7 door, onafhankelijk van het weer",
      "Berekende droogtijd, dus planbare vervolgwerken",
      "Vochtmeting voor en na: meten in plaats van gokken",
      "Ondersteunt het fysische proces, slaat niets over"
    ],
    vsNote: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Eerlijk is eerlijk:" }),
      " onder gunstige weersomstandigheden kan natuurlijke ventilatie prima helpen. Maar wie een werf plant, kan niet op gunstig weer rekenen, en op een warme, vochtige zomerdag is ontvochtigen zelfs geschikter dan blijven ventileren."
    ] }),
    plKick: "Uw planning",
    plH2: "Te vroeg afwerken kost meer dan drogen.",
    plLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Schilderen, parket plaatsen of vloerbekleding aanbrengen op een te vochtige ondergrond veroorzaakt later problemen. Gecontroleerd drogen verkort de wachttijd tussen bouwfasen, zonder de noodzakelijke uithardingstijden van fabrikanten te negeren: bouwdroging ",
      /* @__PURE__ */ jsx("b", { style: { color: "#fff" }, children: "ondersteunt en optimaliseert" }),
      " het natuurlijke proces, ze slaat niets over."
    ] }),
    plan: [
      { b: "Schilderwerk", tekst: "Verf op vochtig pleister hecht slecht, gaat blazen of bladdert af. Herschilderen kost meer dan drogen." },
      { b: "Parket & vloeren", tekst: "Hout en lijm verdragen geen vochtige chape: kromtrekken, loskomen en vochtschade onder de vloer." },
      { b: "Oplevering & verhuis", tekst: 'Elke week wachten op "vanzelf droog" is een week latere oplevering, en soms een week extra dubbele huur.' }
    ],
    schKick: "Schimmel voorkomen",
    schH3: "Te lang vochtig? Dan komt schimmel gratis mee.",
    schP: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Een constructie die maanden vochtig blijft, is de ideale voedingsbodem voor schimmelsporen, vooral achter kasten, plinten en in slecht geventileerde hoeken. Ontstond er toch al schimmel, dan pakken we die aan met een ",
      /* @__PURE__ */ jsx(Link, { to: lp("/ozonbehandeling"), children: "ozonbehandeling" }),
      ", altijd in combinatie met een correcte droging."
    ] }),
    schAlt: "Vernast schimmelspecialist in beschermpak",
    ltKick: "Meer dan liters per dag",
    ltH2: 'Van "50 liter per 24 uur" naar een droogplan.',
    ltLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Bouwdrogers worden vaak verhuurd op één getal. Maar de werkelijke wateronttrekking verandert sterk met temperatuur en luchtvochtigheid: een toestel dat in warme, vochtige testomstandigheden tientallen liters haalt, condenseert veel minder zodra het gebouw al gedeeltelijk droog is. Daarom dimensioneert onze ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "Calculator" }),
      " nooit op het getal op de machine alleen, maar op:"
    ] }),
    wk: [
      { b: "Het gebouw", rest: ", inhoud, aantal ruimtes, verdiepingen en hoe lucht er kan circuleren." },
      { b: "De materialen", rest: ", pleister, chape, beton of metselwerk, met hun laagdiktes en leeftijd." },
      { b: "De vochtbelasting", rest: ", waar zit het meeste water, en in welke droogfase zit het project?" },
      { b: "De praktijk", rest: ", temperatuur, luchtlekken en beschikbare elektriciteit op de werf." }
    ],
    papKick: "Vóór de machine wordt geplaatst",
    papH3: "Een efficiënte bouwdroging begint op papier.",
    papP: /* @__PURE__ */ jsxs(Fragment, { children: [
      "De grootste bouwdroger kiezen is eenvoudig; de juiste droogstrategie bepalen vraagt meer. Welke materialen moeten drogen? Kan lucht vrij circuleren? Eén droogzone of meerdere? Pas daarna wordt de capaciteit bepaald en verdeeld, dat is ",
      /* @__PURE__ */ jsx(Link, { to: lp("/waarom-bouwdroging"), children: "uw droogplan" }),
      ", en u krijgt het meteen uit de ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "Calculator" }),
      "."
    ] }),
    papAlt: "Vernast technicus stelt het droogplan op",
    prKick: "Het Vernast-principe",
    prH2: "Een grotere bouwdroger betekent niet automatisch sneller drogen.",
    prLede: "Twee drogers met samen dezelfde capaciteit als één zware machine: op papier identiek, in een echte woning niet. Een woning bestaat uit kamers, gangen, deuropeningen en hoeken, en lucht kiest de gemakkelijkste stromingsweg. Vergelijk het met verwarming: één enorme radiator in de woonkamer maakt de slaapkamers niet warm.",
    rd1H3: "Eén zware machine, centraal",
    rd1P: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Uitstekend klimaat rond het toestel, nauwelijks luchtverversing in verder gelegen kamers. Op papier voldoende capaciteit, in de praktijk ongelijkmatig drogen, en vaak ",
      /* @__PURE__ */ jsx("b", { children: "onnodig energieverbruik" }),
      " door overgedimensioneerde toestellen in compacte woningen."
    ] }),
    rd2H3: "Capaciteit verdeeld over droogzones",
    rd2P: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Dezelfde totale capaciteit, verdeeld waar ze nodig is, aangevuld met ",
      /* @__PURE__ */ jsx(Link, { to: lp(toestelPad("ttv4500")), style: rood, children: "ventilatoren" }),
      " die de lucht beter laten circuleren. Een gelijkmatiger droogklimaat, een voorspelbaar resultaat en een lagere energiefactuur."
    ] }),
    prNote: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Niet maximaal drogen. Optimaal drogen." }),
      " Te agressief drogen kan krimp en scheurvorming bevorderen, daarom sturen we op relatieve luchtvochtigheid en is overcapaciteit geen kwaliteitskenmerk. Het doel is niet zo groot mogelijke machines plaatsen, maar ",
      /* @__PURE__ */ jsx("b", { children: "de benodigde capaciteit zo efficiënt mogelijk over het gebouw verdelen" }),
      ". Hoe dat technisch zit, leest u bij ",
      /* @__PURE__ */ jsx(Link, { to: lp("/hoe-drogen-werkt"), children: "hoe drogen werkt" }),
      "."
    ] }),
    uKick: "Wat betekent dat voor u?",
    uH2: "Eén berekend pakket, volledig ontzorgd.",
    uLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Bij Vernast kiest u geen machine uit een lijst. U vult in de ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "droogcalculator" }),
      " uw oppervlakte, plafondhoogte en situatie in, ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "pleisterwerk drogen" }),
      ", ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "chape drogen" }),
      ", waterschade of kelder, en krijgt meteen het juiste pakket met droogtijd en één all-in prijs. Levering, installatie, vochtmeting voor en na, ophaling en alle toebehoren zitten erin. U boekt, betaalt en plant de installatie volledig online, met 5% korting bij online betaling. Liever losse toestellen? Die ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/afhalen"), children: "haalt u voordelig af langs de A12 in Aartselaar" }),
      ". Vragen tijdens de huur? Daarvoor is er de ",
      /* @__PURE__ */ jsx(Link, { to: lp("/klantservice"), children: "klantenservice" }),
      "."
    ] }),
    belKick: "Onze belofte",
    belH3: "100% droog binnen de berekende periode. Of u huurt kosteloos verder.*",
    belP: "Omdat wij berekenen in plaats van gokken, durven wij dat te beloven. De eindmeting bevestigt het resultaat, zwart op wit.",
    belCta: "Start de berekening",
    belAlt: "Zorgeloos drogen met het Vernast droogpakket",
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
      opties: ["Is bouwdroging nodig in mijn situatie?", "Advies over het juiste pakket", "Vraag over prijzen of levering", "Iets anders"],
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
    crumb: "Pourquoi sécher son chantier",
    heroKick: "Tout sur le séchage · pourquoi",
    h1: "Espérer du beau temps n'est pas une stratégie de séchage.",
    heroP: "Une maison finit aussi par sécher toute seule, mais au rythme des saisons, avec tous les risques que cela comporte pour votre planning et vos finitions. Un séchage de chantier contrôlé rend ce processus prévisible, mesurable et calculé pour votre bâtiment.",
    heroCta: "Calculez votre pack de séchage",
    heroCta2: "Comment fonctionne le séchage",
    heroAlt: "Un expert Vernast donne un carton rouge au séchage en attendant le beau temps",
    badge: "Attendre le soleil",
    badgeSub: "Aucun planning, mais des risques",
    vsKick: "Naturel ou contrôlé",
    vsH2: "Pourquoi le séchage naturel prend souvent beaucoup plus de temps.",
    vsLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Quand un bâtiment sèche tout seul, ce sont des circonstances aléatoires qui fixent le rythme : la température extérieure change, les fenêtres s'ouvrent et se ferment, la nuit la température baisse et l'humidité de l'air monte. Un jour, beaucoup d'humidité est évacuée, le lendemain presque pas. Un ",
      /* @__PURE__ */ jsx(Link, { to: lp("/hoe-drogen-werkt"), children: "séchage de chantier" }),
      " contrôlé stabilise ces variables : la grande différence, c'est ",
      /* @__PURE__ */ jsx("b", { children: "la maîtrise et la prévisibilité" }),
      "."
    ] }),
    natLabel: "Séchage naturel",
    natH3: "Dépendant de la météo.",
    natLijst: [
      "Le rythme varie d'un jour à l'autre et selon la saison",
      "La nuit, l'HR monte et le séchage s'arrête",
      "L'air humide de l'été peut faire entrer de l'humidité",
      "Aucune visibilité sur le moment où l'on peut finir sans risque",
      "Des semaines, voire des mois d'attente entre les phases du chantier"
    ],
    gecLabel: "Séchage de chantier contrôlé",
    gecH3: "Un climat stable, jour et nuit.",
    gecLijst: [
      "Température, HR et circulation pilotées en continu",
      "Sèche 24 h/24, 7 j/7, indépendamment de la météo",
      "Temps de séchage calculé, donc travaux suivants planifiables",
      "Mesure d'humidité avant et après : mesurer au lieu de deviner",
      "Soutient le processus physique, ne saute aucune étape"
    ],
    vsNote: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Soyons honnêtes :" }),
      " par temps favorable, la ventilation naturelle peut très bien aider. Mais qui planifie un chantier ne peut pas compter sur le beau temps, et par une journée d'été chaude et humide, déshumidifier convient même mieux que continuer à aérer."
    ] }),
    plKick: "Votre planning",
    plH2: "Finir trop tôt coûte plus cher que sécher.",
    plLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Peindre, poser du parquet ou un revêtement de sol sur un support trop humide cause des problèmes plus tard. Un séchage contrôlé raccourcit l'attente entre les phases du chantier, sans ignorer les temps de durcissement nécessaires indiqués par les fabricants : le séchage de chantier ",
      /* @__PURE__ */ jsx("b", { style: { color: "#fff" }, children: "soutient et optimise" }),
      " le processus naturel, il ne saute aucune étape."
    ] }),
    plan: [
      { b: "Peinture", tekst: "La peinture sur un plafonnage humide adhère mal, cloque ou s'écaille. Repeindre coûte plus cher que sécher." },
      { b: "Parquet & sols", tekst: "Le bois et la colle ne supportent pas une chape humide : déformation, décollement et dégâts d'humidité sous le sol." },
      { b: "Réception & déménagement", tekst: "Chaque semaine passée à attendre que « ça sèche tout seul » retarde la réception d'autant, et coûte parfois une semaine de double loyer en plus." }
    ],
    schKick: "Prévenir les moisissures",
    schH3: "Humide trop longtemps ? Les moisissures s'invitent gratuitement.",
    schP: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Une construction qui reste humide pendant des mois est le terrain idéal pour les spores de moisissures, surtout derrière les armoires, les plinthes et dans les coins mal ventilés. Des moisissures sont déjà apparues ? Nous les traitons par un ",
      /* @__PURE__ */ jsx(Link, { to: lp("/ozonbehandeling"), children: "traitement à l'ozone" }),
      ", toujours combiné à un séchage correct."
    ] }),
    schAlt: "Spécialiste Vernast des moisissures en combinaison de protection",
    ltKick: "Plus que des litres par jour",
    ltH2: "De « 50 litres par 24 heures » à un plan de séchage.",
    ltLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Les déshumidificateurs de chantier sont souvent loués sur la base d'un seul chiffre. Mais l'eau réellement extraite varie fortement avec la température et l'humidité de l'air : un appareil qui atteint des dizaines de litres dans des conditions d'essai chaudes et humides condense beaucoup moins dès que le bâtiment est déjà partiellement sec. C'est pourquoi notre ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "calculateur" }),
      " ne dimensionne jamais sur le seul chiffre de la machine, mais sur :"
    ] }),
    wk: [
      { b: "Le bâtiment", rest: " : volume, nombre de pièces, étages et la façon dont l'air peut y circuler." },
      { b: "Les matériaux", rest: " : plafonnage, chape, béton ou maçonnerie, avec leurs épaisseurs et leur âge." },
      { b: "La charge d'humidité", rest: " : où se trouve le plus d'eau, et dans quelle phase de séchage se trouve le projet ?" },
      { b: "La pratique", rest: " : température, fuites d'air et électricité disponible sur le chantier." }
    ],
    papKick: "Avant de placer la machine",
    papH3: "Un séchage de chantier efficace commence sur papier.",
    papP: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Choisir le plus gros déshumidificateur est simple ; déterminer la bonne stratégie de séchage demande davantage. Quels matériaux doivent sécher ? L'air peut-il circuler librement ? Une zone de séchage ou plusieurs ? Ce n'est qu'ensuite que la capacité est déterminée et répartie : c'est ",
      /* @__PURE__ */ jsx(Link, { to: lp("/waarom-bouwdroging"), children: "votre plan de séchage" }),
      ", et vous l'obtenez immédiatement avec le ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "calculateur" }),
      "."
    ] }),
    papAlt: "Un technicien Vernast établit le plan de séchage",
    prKick: "Le principe Vernast",
    prH2: "Un plus gros déshumidificateur ne veut pas automatiquement dire un séchage plus rapide.",
    prLede: "Deux déshumidificateurs offrant ensemble la même capacité qu'une seule grosse machine : identiques sur papier, pas dans une vraie maison. Une maison se compose de pièces, de couloirs, d'embrasures de portes et de coins, et l'air prend le chemin le plus facile. Comparez avec le chauffage : un énorme radiateur dans le séjour ne chauffe pas les chambres.",
    rd1H3: "Une grosse machine, au centre",
    rd1P: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Un excellent climat autour de l'appareil, presque aucun renouvellement d'air dans les pièces plus éloignées. Une capacité suffisante sur papier, un séchage inégal en pratique, et souvent une ",
      /* @__PURE__ */ jsx("b", { children: "consommation d'énergie inutile" }),
      " due à des appareils surdimensionnés dans des logements compacts."
    ] }),
    rd2H3: "La capacité répartie en zones de séchage",
    rd2P: /* @__PURE__ */ jsxs(Fragment, { children: [
      "La même capacité totale, répartie là où elle est nécessaire, complétée par des ",
      /* @__PURE__ */ jsx(Link, { to: lp(toestelPad("ttv4500")), style: rood, children: "ventilateurs" }),
      " qui font mieux circuler l'air. Un climat de séchage plus homogène, un résultat prévisible et une facture d'énergie plus basse."
    ] }),
    prNote: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Pas sécher au maximum. Sécher de façon optimale." }),
      " Un séchage trop agressif peut favoriser le retrait et la fissuration : c'est pourquoi nous pilotons l'humidité relative et la surcapacité n'est pas un gage de qualité. L'objectif n'est pas de placer les machines les plus grosses possible, mais de ",
      /* @__PURE__ */ jsx("b", { children: "répartir la capacité nécessaire le plus efficacement possible dans le bâtiment" }),
      ". Pour l'aspect technique, lisez ",
      /* @__PURE__ */ jsx(Link, { to: lp("/hoe-drogen-werkt"), children: "comment fonctionne le séchage" }),
      "."
    ] }),
    uKick: "Qu'est-ce que cela signifie pour vous ?",
    uH2: "Un pack calculé, sans aucun souci.",
    uLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Chez Vernast, vous ne choisissez pas une machine dans une liste. Vous indiquez dans le ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "calculateur de séchage" }),
      " votre surface, votre hauteur sous plafond et votre situation (",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "séchage du plafonnage" }),
      ", ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "séchage de chape" }),
      ", dégâts des eaux ou cave) et vous obtenez immédiatement le bon pack, avec le temps de séchage et un prix tout compris. Livraison, installation, mesure d'humidité avant et après, enlèvement et tous les accessoires sont inclus. Vous réservez, payez et planifiez l'installation entièrement en ligne, avec 5 % de réduction pour un paiement en ligne. Vous préférez des appareils seuls ? Vous les ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/afhalen"), children: "enlevez à prix avantageux le long de l'A12 à Aartselaar" }),
      ". Des questions pendant la location ? Le ",
      /* @__PURE__ */ jsx(Link, { to: lp("/klantservice"), children: "service clientèle" }),
      " est là pour cela."
    ] }),
    belKick: "Notre promesse",
    belH3: "100 % sec dans la période calculée. Sinon, vous continuez à louer sans frais.*",
    belP: "Parce que nous calculons au lieu de deviner, nous osons le promettre. La mesure finale confirme le résultat, noir sur blanc.",
    belCta: "Lancez le calcul",
    belAlt: "Sécher l'esprit tranquille avec le pack de séchage Vernast",
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
      opties: ["Un séchage de chantier est-il nécessaire dans ma situation ?", "Conseil sur le bon pack", "Question sur les prix ou la livraison", "Autre chose"],
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
    crumb: "Why construction drying",
    heroKick: "All about drying · why",
    h1: "Hoping for good weather is not a drying strategy.",
    heroP: "A building will eventually dry out on its own, but at the pace of the seasons, with all the risks that brings for your schedule and finishing work. Controlled construction drying makes that process predictable, measurable and calculated for your building.",
    heroCta: "Calculate your drying package",
    heroCta2: "How drying works",
    heroAlt: "Vernast expert showing a red card to drying by waiting for good weather",
    badge: "Waiting for the sun",
    badgeSub: "No schedule, plenty of risk",
    vsKick: "Natural vs. controlled",
    vsH2: "Why natural drying often takes much longer.",
    vsLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "When a building dries on its own, chance conditions set the pace: the outside temperature changes, windows are opened and closed, and at night the temperature drops and the humidity rises. One day a lot of moisture is removed, the next day hardly any. Controlled ",
      /* @__PURE__ */ jsx(Link, { to: lp("/hoe-drogen-werkt"), children: "construction drying" }),
      " stabilises those variables; the big difference is ",
      /* @__PURE__ */ jsx("b", { children: "control and predictability" }),
      "."
    ] }),
    natLabel: "Natural drying",
    natH3: "Dependent on the weather.",
    natLijst: [
      "The pace varies by the day and by the season",
      "At night the RH rises and drying comes to a halt",
      "Humid summer air can actually bring moisture in",
      "No idea when it is safe to start finishing",
      "Weeks to months of waiting between construction phases"
    ],
    gecLabel: "Controlled construction drying",
    gecH3: "A stable climate, day and night.",
    gecLijst: [
      "Temperature, RH and circulation continuously controlled",
      "Keeps drying 24/7, regardless of the weather",
      "Calculated drying time, so follow-on work can be scheduled",
      "Moisture reading before and after: measuring instead of guessing",
      "Supports the physical process, skips nothing"
    ],
    vsNote: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "To be fair:" }),
      " in favourable weather, natural ventilation can help perfectly well. But anyone planning a building site cannot count on favourable weather, and on a warm, humid summer's day dehumidifying is even better suited than continuing to ventilate."
    ] }),
    plKick: "Your schedule",
    plH2: "Finishing too early costs more than drying.",
    plLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Painting, laying parquet or fitting floor coverings on a substrate that is too damp causes problems later on. Controlled drying shortens the waiting time between construction phases without ignoring the curing times manufacturers require: construction drying ",
      /* @__PURE__ */ jsx("b", { style: { color: "#fff" }, children: "supports and optimises" }),
      " the natural process; it skips nothing."
    ] }),
    plan: [
      { b: "Paintwork", tekst: "Paint on damp plaster adheres poorly, blisters or flakes off. Repainting costs more than drying." },
      { b: "Parquet & floors", tekst: "Wood and adhesive cannot tolerate damp screed: warping, debonding and moisture damage under the floor." },
      { b: "Handover & moving in", tekst: 'Every week spent waiting for it to "dry by itself" is a week later handover, and sometimes an extra week of paying double rent.' }
    ],
    schKick: "Preventing mould",
    schH3: "Damp for too long? Then mould comes free of charge.",
    schP: /* @__PURE__ */ jsxs(Fragment, { children: [
      "A structure that stays damp for months is the ideal breeding ground for mould spores, especially behind cupboards and skirting boards and in poorly ventilated corners. If mould has already appeared, we tackle it with an ",
      /* @__PURE__ */ jsx(Link, { to: lp("/ozonbehandeling"), children: "ozone treatment" }),
      ", always combined with proper drying."
    ] }),
    schAlt: "Vernast mould specialist in a protective suit",
    ltKick: "More than litres per day",
    ltH2: 'From "50 litres per 24 hours" to a drying plan.',
    ltLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Construction dehumidifiers are often hired out on the strength of a single figure. But the amount of water actually extracted varies greatly with temperature and humidity: a unit that manages dozens of litres in warm, humid test conditions condenses far less once the building is already partly dry. That is why our ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "calculator" }),
      " never sizes on the figure on the machine alone, but on:"
    ] }),
    wk: [
      { b: "The building", rest: ": volume, number of rooms, floors and how air can circulate." },
      { b: "The materials", rest: ": plaster, screed, concrete or masonry, with their layer thicknesses and age." },
      { b: "The moisture load", rest: ": where is most of the water, and what drying phase is the project in?" },
      { b: "The practicalities", rest: ": temperature, air leaks and the electricity available on site." }
    ],
    papKick: "Before the machine is placed",
    papH3: "Efficient construction drying starts on paper.",
    papP: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Choosing the biggest construction dehumidifier is easy; working out the right drying strategy takes more. Which materials need to dry? Can air circulate freely? One drying zone or several? Only then is the capacity determined and distributed: that is ",
      /* @__PURE__ */ jsx(Link, { to: lp("/waarom-bouwdroging"), children: "your drying plan" }),
      ", and you get it straight away from the ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "calculator" }),
      "."
    ] }),
    papAlt: "Vernast technician drawing up the drying plan",
    prKick: "The Vernast principle",
    prH2: "A bigger construction dehumidifier does not automatically mean faster drying.",
    prLede: "Two dehumidifiers with the same combined capacity as one heavy machine: identical on paper, but not in a real home. A home consists of rooms, hallways, doorways and corners, and air takes the easiest route. Compare it with heating: one enormous radiator in the living room does not warm the bedrooms.",
    rd1H3: "One heavy machine, in the centre",
    rd1P: /* @__PURE__ */ jsxs(Fragment, { children: [
      "An excellent climate around the unit, hardly any air exchange in rooms further away. Enough capacity on paper, uneven drying in practice, and often ",
      /* @__PURE__ */ jsx("b", { children: "unnecessary energy consumption" }),
      " from oversized units in compact homes."
    ] }),
    rd2H3: "Capacity spread over drying zones",
    rd2P: /* @__PURE__ */ jsxs(Fragment, { children: [
      "The same total capacity, distributed where it is needed, supplemented with ",
      /* @__PURE__ */ jsx(Link, { to: lp(toestelPad("ttv4500")), style: rood, children: "fans" }),
      " that help the air circulate better. A more even drying climate, a predictable result and a lower energy bill."
    ] }),
    prNote: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Not maximum drying. Optimal drying." }),
      " Drying too aggressively can encourage shrinkage and cracking, which is why we control relative humidity and why overcapacity is not a mark of quality. The aim is not to place the biggest machines possible, but ",
      /* @__PURE__ */ jsx("b", { children: "to distribute the required capacity across the building as efficiently as possible" }),
      ". You can read how that works technically under ",
      /* @__PURE__ */ jsx(Link, { to: lp("/hoe-drogen-werkt"), children: "how drying works" }),
      "."
    ] }),
    uKick: "What does that mean for you?",
    uH2: "One calculated package, completely taken care of.",
    uLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "At Vernast you do not pick a machine from a list. You enter your floor area, ceiling height and situation in the ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "drying calculator" }),
      " (",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "drying plasterwork" }),
      ", ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "drying screed" }),
      ", water damage or a cellar) and immediately get the right package with its drying time and one all-in price. Delivery, installation, moisture readings before and after, collection and all accessories are included. You book, pay and schedule the installation entirely online, with a 5% discount for online payment. Prefer individual units? You can ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/afhalen"), children: "collect them at a good price along the A12 in Aartselaar" }),
      ". Questions during the hire? That is what ",
      /* @__PURE__ */ jsx(Link, { to: lp("/klantservice"), children: "customer service" }),
      " is for."
    ] }),
    belKick: "Our promise",
    belH3: "100% dry within the calculated period. Or you keep renting at no cost.*",
    belP: "Because we calculate instead of guessing, we dare to promise that. The final measurement confirms the result, in black and white.",
    belCta: "Start the calculation",
    belAlt: "Worry-free drying with the Vernast drying package",
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
      opties: ["Is construction drying needed in my situation?", "Advice on the right package", "Question about prices or delivery", "Something else"],
      situatie: "Your situation",
      situatiePh: "E.g. new build of 140 m², screed laid last week: when can the floor fitter start?",
      privacy: "We only use your details to answer your question.",
      verstuur: "Send your question",
      klaar: "Question sent",
      klaarP: "Thank you! A drying specialist will contact you within one working day."
    }
  })
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/WaaromBouwdrogingPage.tsx");
const Cross = () => /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsx("path", { d: "M18 6 6 18" }),
  /* @__PURE__ */ jsx("path", { d: "m6 6 12 12" })
] });
const Check = () => /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M20 6 9 17l-5-5" }) });
const Arrow = () => /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
  /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
] });
const WaaromBouwdrogingPage = () => {
  const lp = useLokaalPad();
  const t = useCopy(COPY)(lp);
  const f = t.form;
  return /* @__PURE__ */ jsxs("div", { className: "wb-page", children: [
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        ...useSeo("waaromBouwdroging"),
        path: lp("/waarom-bouwdroging"),
        jsonLd: [
          organizationSchema(),
          breadcrumbSchema([
            { name: t.crumbHome, path: lp("/") },
            { name: t.crumb, path: lp("/waarom-bouwdroging") }
          ])
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "redtop", children: [
      /* @__PURE__ */ jsx(V3Header, { lightAfter: 420 }),
      /* @__PURE__ */ jsx("section", { className: "hero", children: /* @__PURE__ */ jsxs("div", { className: "wrap hero-grid", children: [
        /* @__PURE__ */ jsxs("div", { className: "hero-copy", children: [
          /* @__PURE__ */ jsx("span", { className: "kick rv", children: t.heroKick }),
          /* @__PURE__ */ jsx("h1", { className: "rv", children: t.h1 }),
          /* @__PURE__ */ jsx("p", { className: "rv d1", children: t.heroP }),
          /* @__PURE__ */ jsxs("div", { className: "hcta rv d3", children: [
            /* @__PURE__ */ jsxs(Link, { className: "btn btn-white", to: lp("/verhuur/calculator"), children: [
              t.heroCta,
              /* @__PURE__ */ jsx(Arrow, {})
            ] }),
            /* @__PURE__ */ jsx(Link, { className: "btn btn-ghost", to: lp("/hoe-drogen-werkt"), children: t.heroCta2 })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hero-vis rv d2", children: [
          /* @__PURE__ */ jsx("img", { src: "/vernast/man-rode-kaart.webp", alt: t.heroAlt, width: "1440", height: "1438", loading: "eager", decoding: "async" }),
          /* @__PURE__ */ jsxs("div", { className: "fbadge rd", style: { top: "-28px", left: "2%" }, children: [
            /* @__PURE__ */ jsx("span", { className: "ic", children: /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("path", { d: "M18 6 6 18" }),
              /* @__PURE__ */ jsx("path", { d: "m6 6 12 12" })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              t.badge,
              /* @__PURE__ */ jsx("small", { children: t.badgeSub })
            ] })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "sw", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick rv", children: t.vsKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec rv", children: t.vsH2 }),
        /* @__PURE__ */ jsx("p", { className: "lede rv d1", children: t.vsLede })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "vsg", children: [
        /* @__PURE__ */ jsxs("div", { className: "vs rv", children: [
          /* @__PURE__ */ jsx("span", { className: "vt", children: t.natLabel }),
          /* @__PURE__ */ jsx("h3", { children: t.natH3 }),
          /* @__PURE__ */ jsx("ul", { children: t.natLijst.map((x) => /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx(Cross, {}),
            " ",
            x
          ] }, x)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "vs hot rv d1", children: [
          /* @__PURE__ */ jsx("span", { className: "vt", children: t.gecLabel }),
          /* @__PURE__ */ jsx("h3", { children: t.gecH3 }),
          /* @__PURE__ */ jsx("ul", { children: t.gecLijst.map((x) => /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx(Check, {}),
            " ",
            x
          ] }, x)) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "note rv d2", children: t.vsNote })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "sr", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick rv", children: t.plKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec rv", children: t.plH2 }),
        /* @__PURE__ */ jsx("p", { className: "lede rv d1", children: t.plLede })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "plan", children: t.plan.map((x, n) => /* @__PURE__ */ jsxs("div", { className: ["pl rv", "pl rv d1", "pl rv d2"][n], children: [
        /* @__PURE__ */ jsx("b", { children: x.b }),
        x.tekst
      ] }, x.b)) }),
      /* @__PURE__ */ jsxs("div", { className: "manband lite rv d2", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-t", children: [
          /* @__PURE__ */ jsx("span", { className: "mbk", children: t.schKick }),
          /* @__PURE__ */ jsx("h3", { children: t.schH3 }),
          /* @__PURE__ */ jsx("p", { children: t.schP })
        ] }),
        /* @__PURE__ */ jsx("img", { className: "mb-man", src: "/vernast/man-schimmelpak.webp", alt: t.schAlt, style: { width: "min(24%,240px)" } })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "sw", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick rv", children: t.ltKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec rv", children: t.ltH2 }),
        /* @__PURE__ */ jsx("p", { className: "lede rv d1", children: t.ltLede })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "wk", children: t.wk.map((x, n) => /* @__PURE__ */ jsxs("div", { className: ["wi rv", "wi rv", "wi rv d1", "wi rv d1"][n], children: [
        /* @__PURE__ */ jsx("i", {}),
        /* @__PURE__ */ jsxs("span", { children: [
          /* @__PURE__ */ jsx("b", { children: x.b }),
          x.rest
        ] })
      ] }, x.b)) }),
      /* @__PURE__ */ jsxs("div", { className: "manband rv d1", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-t", children: [
          /* @__PURE__ */ jsx("span", { className: "mbk", children: t.papKick }),
          /* @__PURE__ */ jsx("h3", { children: t.papH3 }),
          /* @__PURE__ */ jsx("p", { children: t.papP })
        ] }),
        /* @__PURE__ */ jsx("img", { className: "mb-man", src: "/vernast/man-klembord.webp", alt: t.papAlt, style: { width: "min(24%,250px)" } })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "sr", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick rv", children: t.prKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec rv", children: t.prH2 }),
        /* @__PURE__ */ jsx("p", { className: "lede rv d1", children: t.prLede })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "radi", children: [
        /* @__PURE__ */ jsxs("div", { className: "rd rv", children: [
          /* @__PURE__ */ jsxs("div", { className: "zone", children: [
            /* @__PURE__ */ jsx("i", { className: "on" }),
            /* @__PURE__ */ jsx("i", { className: "half" }),
            /* @__PURE__ */ jsx("i", {}),
            /* @__PURE__ */ jsx("i", {})
          ] }),
          /* @__PURE__ */ jsx("h3", { children: t.rd1H3 }),
          /* @__PURE__ */ jsx("p", { children: t.rd1P })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rd rv d1", children: [
          /* @__PURE__ */ jsxs("div", { className: "zone", children: [
            /* @__PURE__ */ jsx("i", { className: "on" }),
            /* @__PURE__ */ jsx("i", { className: "on" }),
            /* @__PURE__ */ jsx("i", { className: "on" }),
            /* @__PURE__ */ jsx("i", { className: "on" })
          ] }),
          /* @__PURE__ */ jsx("h3", { children: t.rd2H3 }),
          /* @__PURE__ */ jsx("p", { children: t.rd2P })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "note rv d2", children: t.prNote })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "sw", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick rv", children: t.uKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec rv", children: t.uH2 }),
        /* @__PURE__ */ jsx("p", { className: "lede rv d1", children: t.uLede })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "manband rv d1", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-t", children: [
          /* @__PURE__ */ jsx("span", { className: "mbk", children: t.belKick }),
          /* @__PURE__ */ jsx("h3", { children: t.belH3 }),
          /* @__PURE__ */ jsx("p", { children: t.belP }),
          /* @__PURE__ */ jsxs(Link, { className: "btn btn-white mb-cta", to: lp("/verhuur/calculator"), children: [
            t.belCta,
            /* @__PURE__ */ jsx(Arrow, {})
          ] })
        ] }),
        /* @__PURE__ */ jsx("img", { className: "mb-man", src: "/vernast/man-zen-crop.webp", alt: t.belAlt, style: { width: "min(26%,260px)" } })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "oform", id: "formulier", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", style: { textAlign: "center", marginLeft: "auto", marginRight: "auto" }, children: [
        /* @__PURE__ */ jsx("span", { className: "kick rv", children: f.kick }),
        /* @__PURE__ */ jsx("h2", { className: "sec rv", children: f.h2 }),
        /* @__PURE__ */ jsx("p", { className: "lede rv d1", style: { marginLeft: "auto", marginRight: "auto" }, children: f.lede })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "fshell rv d2", children: [
        /* @__PURE__ */ jsxs("div", { id: "formBody", children: [
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
            /* @__PURE__ */ jsxs("button", { className: "btn", id: "fSend", type: "button", children: [
              f.verstuur,
              /* @__PURE__ */ jsx(Arrow, {})
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "fdone", id: "formDone", children: [
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
  WaaromBouwdrogingPage as default
};

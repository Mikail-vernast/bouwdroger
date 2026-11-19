import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { toestelPad } from "@/data/verhuur";
import type { Copy } from "@/i18n/useTaal";

/**
 * De teksten van /waarom-bouwdroging per taal. Een functie per taal, omdat de
 * zinnen interne links dragen die het pad in de taal van de pagina nodig
 * hebben (`lp`). De opmaak blijft in de pagina.
 */
type Lp = (nlPad: string) => string;

const rood = { color: "var(--red)", fontWeight: 600 } as const;

export interface WaaromTekst {
  crumbHome: string;
  crumb: string;
  heroKick: string;
  h1: string;
  heroP: string;
  heroCta: string;
  heroCta2: string;
  heroAlt: string;
  badge: string;
  badgeSub: string;
  vsKick: string;
  vsH2: string;
  vsLede: ReactNode;
  natLabel: string;
  natH3: string;
  natLijst: string[];
  gecLabel: string;
  gecH3: string;
  gecLijst: string[];
  vsNote: ReactNode;
  plKick: string;
  plH2: string;
  plLede: ReactNode;
  plan: { b: string; tekst: string }[];
  schKick: string;
  schH3: string;
  schP: ReactNode;
  schAlt: string;
  ltKick: string;
  ltH2: string;
  ltLede: ReactNode;
  wk: { b: string; rest: string }[];
  papKick: string;
  papH3: string;
  papP: ReactNode;
  papAlt: string;
  prKick: string;
  prH2: string;
  prLede: string;
  rd1H3: string;
  rd1P: ReactNode;
  rd2H3: string;
  rd2P: ReactNode;
  prNote: ReactNode;
  uKick: string;
  uH2: string;
  uLede: ReactNode;
  belKick: string;
  belH3: string;
  belP: string;
  belCta: string;
  belAlt: string;
  form: {
    kick: string;
    h2: string;
    lede: string;
    voornaam: string;
    naam: string;
    achternaam: string;
    mail: string;
    mailPh: string;
    tel: string;
    onderwerp: string;
    opties: string[];
    situatie: string;
    situatiePh: string;
    privacy: string;
    verstuur: string;
    klaar: string;
    klaarP: string;
  };
}

export const COPY = {
  nl: (lp: Lp): WaaromTekst => ({
    crumbHome: "Home",
    crumb: "Waarom bouwdroging",
    heroKick: "Alles over drogen · waarom",
    h1: "Hopen op goed weer is geen droogstrategie.",
    heroP:
      "Een woning droogt uiteindelijk ook vanzelf, maar op het tempo van de seizoenen, met alle risico's voor uw planning en afwerking. Gecontroleerde bouwdroging maakt dat proces voorspelbaar, meetbaar en berekend op uw gebouw.",
    heroCta: "Bereken uw droogpakket",
    heroCta2: "Hoe drogen werkt",
    heroAlt: "Vernast-expert geeft een rode kaart aan drogen op goed weer",
    badge: "Wachten op de zon",
    badgeSub: "Geen planning, wel risico",
    vsKick: "Natuurlijk vs. gecontroleerd",
    vsH2: "Waarom natuurlijke droging vaak veel langer duurt.",
    vsLede: <>Wanneer een gebouw vanzelf droogt, bepalen toevallige omstandigheden het tempo: de buitentemperatuur verandert, ramen gaan open en dicht, 's nachts daalt de temperatuur en stijgt de luchtvochtigheid. De ene dag wordt veel vocht afgevoerd, de volgende dag nauwelijks. Gecontroleerde <Link to={lp("/hoe-drogen-werkt")}>bouwdroging</Link> stabiliseert die variabelen, het grote verschil is <b>controleerbaarheid en voorspelbaarheid</b>.</>,
    natLabel: "Natuurlijk drogen",
    natH3: "Afhankelijk van het weer.",
    natLijst: [
      "Tempo wisselt per dag én per seizoen",
      "'s Nachts stijgt de RV en valt de droging stil",
      "Vochtige zomerlucht kan vocht bínnenbrengen",
      "Geen zicht op wanneer afwerken veilig is",
      "Weken tot maanden wachttijd tussen bouwfasen",
    ],
    gecLabel: "Gecontroleerde bouwdroging",
    gecH3: "Stabiel klimaat, dag en nacht.",
    gecLijst: [
      "Temperatuur, RV en circulatie continu gestuurd",
      "Droogt 24/7 door, onafhankelijk van het weer",
      "Berekende droogtijd, dus planbare vervolgwerken",
      "Vochtmeting voor en na: meten in plaats van gokken",
      "Ondersteunt het fysische proces, slaat niets over",
    ],
    vsNote: <><b>Eerlijk is eerlijk:</b> onder gunstige weersomstandigheden kan natuurlijke ventilatie prima helpen. Maar wie een werf plant, kan niet op gunstig weer rekenen, en op een warme, vochtige zomerdag is ontvochtigen zelfs geschikter dan blijven ventileren.</>,
    plKick: "Uw planning",
    plH2: "Te vroeg afwerken kost meer dan drogen.",
    plLede: <>Schilderen, parket plaatsen of vloerbekleding aanbrengen op een te vochtige ondergrond veroorzaakt later problemen. Gecontroleerd drogen verkort de wachttijd tussen bouwfasen, zonder de noodzakelijke uithardingstijden van fabrikanten te negeren: bouwdroging <b style={{ color: "#fff" }}>ondersteunt en optimaliseert</b> het natuurlijke proces, ze slaat niets over.</>,
    plan: [
      { b: "Schilderwerk", tekst: "Verf op vochtig pleister hecht slecht, gaat blazen of bladdert af. Herschilderen kost meer dan drogen." },
      { b: "Parket & vloeren", tekst: "Hout en lijm verdragen geen vochtige chape: kromtrekken, loskomen en vochtschade onder de vloer." },
      { b: "Oplevering & verhuis", tekst: 'Elke week wachten op "vanzelf droog" is een week latere oplevering, en soms een week extra dubbele huur.' },
    ],
    schKick: "Schimmel voorkomen",
    schH3: "Te lang vochtig? Dan komt schimmel gratis mee.",
    schP: <>Een constructie die maanden vochtig blijft, is de ideale voedingsbodem voor schimmelsporen, vooral achter kasten, plinten en in slecht geventileerde hoeken. Ontstond er toch al schimmel, dan pakken we die aan met een <Link to={lp("/ozonbehandeling")}>ozonbehandeling</Link>, altijd in combinatie met een correcte droging.</>,
    schAlt: "Vernast schimmelspecialist in beschermpak",
    ltKick: "Meer dan liters per dag",
    ltH2: 'Van "50 liter per 24 uur" naar een droogplan.',
    ltLede: <>Bouwdrogers worden vaak verhuurd op één getal. Maar de werkelijke wateronttrekking verandert sterk met temperatuur en luchtvochtigheid: een toestel dat in warme, vochtige testomstandigheden tientallen liters haalt, condenseert veel minder zodra het gebouw al gedeeltelijk droog is. Daarom dimensioneert onze <Link to={lp("/verhuur/calculator")}>Calculator</Link> nooit op het getal op de machine alleen, maar op:</>,
    wk: [
      { b: "Het gebouw", rest: ", inhoud, aantal ruimtes, verdiepingen en hoe lucht er kan circuleren." },
      { b: "De materialen", rest: ", pleister, chape, beton of metselwerk, met hun laagdiktes en leeftijd." },
      { b: "De vochtbelasting", rest: ", waar zit het meeste water, en in welke droogfase zit het project?" },
      { b: "De praktijk", rest: ", temperatuur, luchtlekken en beschikbare elektriciteit op de werf." },
    ],
    papKick: "Vóór de machine wordt geplaatst",
    papH3: "Een efficiënte bouwdroging begint op papier.",
    papP: <>De grootste bouwdroger kiezen is eenvoudig; de juiste droogstrategie bepalen vraagt meer. Welke materialen moeten drogen? Kan lucht vrij circuleren? Eén droogzone of meerdere? Pas daarna wordt de capaciteit bepaald en verdeeld, dat is <Link to={lp("/waarom-bouwdroging")}>uw droogplan</Link>, en u krijgt het meteen uit de <Link to={lp("/verhuur/calculator")}>Calculator</Link>.</>,
    papAlt: "Vernast technicus stelt het droogplan op",
    prKick: "Het Vernast-principe",
    prH2: "Een grotere bouwdroger betekent niet automatisch sneller drogen.",
    prLede:
      "Twee drogers met samen dezelfde capaciteit als één zware machine: op papier identiek, in een echte woning niet. Een woning bestaat uit kamers, gangen, deuropeningen en hoeken, en lucht kiest de gemakkelijkste stromingsweg. Vergelijk het met verwarming: één enorme radiator in de woonkamer maakt de slaapkamers niet warm.",
    rd1H3: "Eén zware machine, centraal",
    rd1P: <>Uitstekend klimaat rond het toestel, nauwelijks luchtverversing in verder gelegen kamers. Op papier voldoende capaciteit, in de praktijk ongelijkmatig drogen, en vaak <b>onnodig energieverbruik</b> door overgedimensioneerde toestellen in compacte woningen.</>,
    rd2H3: "Capaciteit verdeeld over droogzones",
    rd2P: <>Dezelfde totale capaciteit, verdeeld waar ze nodig is, aangevuld met <Link to={lp(toestelPad("ttv4500"))} style={rood}>ventilatoren</Link> die de lucht beter laten circuleren. Een gelijkmatiger droogklimaat, een voorspelbaar resultaat en een lagere energiefactuur.</>,
    prNote: <><b>Niet maximaal drogen. Optimaal drogen.</b> Te agressief drogen kan krimp en scheurvorming bevorderen, daarom sturen we op relatieve luchtvochtigheid en is overcapaciteit geen kwaliteitskenmerk. Het doel is niet zo groot mogelijke machines plaatsen, maar <b>de benodigde capaciteit zo efficiënt mogelijk over het gebouw verdelen</b>. Hoe dat technisch zit, leest u bij <Link to={lp("/hoe-drogen-werkt")}>hoe drogen werkt</Link>.</>,
    uKick: "Wat betekent dat voor u?",
    uH2: "Eén berekend pakket, volledig ontzorgd.",
    uLede: <>Bij Vernast kiest u geen machine uit een lijst. U vult in de <Link to={lp("/verhuur/calculator")}>droogcalculator</Link> uw oppervlakte, plafondhoogte en situatie in, <Link to={lp("/verhuur/calculator")}>pleisterwerk drogen</Link>, <Link to={lp("/verhuur/calculator")}>chape drogen</Link>, waterschade of kelder, en krijgt meteen het juiste pakket met droogtijd en één all-in prijs. Levering, installatie, vochtmeting voor en na, ophaling en alle toebehoren zitten erin. U boekt, betaalt en plant de installatie volledig online, met 5% korting bij online betaling. Liever losse toestellen? Die <Link to={lp("/verhuur/afhalen")}>haalt u voordelig af langs de A12 in Aartselaar</Link>. Vragen tijdens de huur? Daarvoor is er de <Link to={lp("/klantservice")}>klantenservice</Link>.</>,
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
      klaarP: "Bedankt! Een droogspecialist neemt binnen één werkdag contact met u op.",
    },
  }),
  fr: (lp: Lp): WaaromTekst => ({
    crumbHome: "Accueil",
    crumb: "Pourquoi sécher son chantier",
    heroKick: "Tout sur le séchage · pourquoi",
    h1: "Espérer du beau temps n'est pas une stratégie de séchage.",
    heroP:
      "Une maison finit aussi par sécher toute seule, mais au rythme des saisons, avec tous les risques que cela comporte pour votre planning et vos finitions. Un séchage de chantier contrôlé rend ce processus prévisible, mesurable et calculé pour votre bâtiment.",
    heroCta: "Calculez votre pack de séchage",
    heroCta2: "Comment fonctionne le séchage",
    heroAlt: "Un expert Vernast donne un carton rouge au séchage en attendant le beau temps",
    badge: "Attendre le soleil",
    badgeSub: "Aucun planning, mais des risques",
    vsKick: "Naturel ou contrôlé",
    vsH2: "Pourquoi le séchage naturel prend souvent beaucoup plus de temps.",
    vsLede: <>Quand un bâtiment sèche tout seul, ce sont des circonstances aléatoires qui fixent le rythme : la température extérieure change, les fenêtres s'ouvrent et se ferment, la nuit la température baisse et l'humidité de l'air monte. Un jour, beaucoup d'humidité est évacuée, le lendemain presque pas. Un <Link to={lp("/hoe-drogen-werkt")}>séchage de chantier</Link> contrôlé stabilise ces variables : la grande différence, c'est <b>la maîtrise et la prévisibilité</b>.</>,
    natLabel: "Séchage naturel",
    natH3: "Dépendant de la météo.",
    natLijst: [
      "Le rythme varie d'un jour à l'autre et selon la saison",
      "La nuit, l'HR monte et le séchage s'arrête",
      "L'air humide de l'été peut faire entrer de l'humidité",
      "Aucune visibilité sur le moment où l'on peut finir sans risque",
      "Des semaines, voire des mois d'attente entre les phases du chantier",
    ],
    gecLabel: "Séchage de chantier contrôlé",
    gecH3: "Un climat stable, jour et nuit.",
    gecLijst: [
      "Température, HR et circulation pilotées en continu",
      "Sèche 24 h/24, 7 j/7, indépendamment de la météo",
      "Temps de séchage calculé, donc travaux suivants planifiables",
      "Mesure d'humidité avant et après : mesurer au lieu de deviner",
      "Soutient le processus physique, ne saute aucune étape",
    ],
    vsNote: <><b>Soyons honnêtes :</b> par temps favorable, la ventilation naturelle peut très bien aider. Mais qui planifie un chantier ne peut pas compter sur le beau temps, et par une journée d'été chaude et humide, déshumidifier convient même mieux que continuer à aérer.</>,
    plKick: "Votre planning",
    plH2: "Finir trop tôt coûte plus cher que sécher.",
    plLede: <>Peindre, poser du parquet ou un revêtement de sol sur un support trop humide cause des problèmes plus tard. Un séchage contrôlé raccourcit l'attente entre les phases du chantier, sans ignorer les temps de durcissement nécessaires indiqués par les fabricants : le séchage de chantier <b style={{ color: "#fff" }}>soutient et optimise</b> le processus naturel, il ne saute aucune étape.</>,
    plan: [
      { b: "Peinture", tekst: "La peinture sur un plafonnage humide adhère mal, cloque ou s'écaille. Repeindre coûte plus cher que sécher." },
      { b: "Parquet & sols", tekst: "Le bois et la colle ne supportent pas une chape humide : déformation, décollement et dégâts d'humidité sous le sol." },
      { b: "Réception & déménagement", tekst: "Chaque semaine passée à attendre que « ça sèche tout seul » retarde la réception d'autant, et coûte parfois une semaine de double loyer en plus." },
    ],
    schKick: "Prévenir les moisissures",
    schH3: "Humide trop longtemps ? Les moisissures s'invitent gratuitement.",
    schP: <>Une construction qui reste humide pendant des mois est le terrain idéal pour les spores de moisissures, surtout derrière les armoires, les plinthes et dans les coins mal ventilés. Des moisissures sont déjà apparues ? Nous les traitons par un <Link to={lp("/ozonbehandeling")}>traitement à l'ozone</Link>, toujours combiné à un séchage correct.</>,
    schAlt: "Spécialiste Vernast des moisissures en combinaison de protection",
    ltKick: "Plus que des litres par jour",
    ltH2: "De « 50 litres par 24 heures » à un plan de séchage.",
    ltLede: <>Les déshumidificateurs de chantier sont souvent loués sur la base d'un seul chiffre. Mais l'eau réellement extraite varie fortement avec la température et l'humidité de l'air : un appareil qui atteint des dizaines de litres dans des conditions d'essai chaudes et humides condense beaucoup moins dès que le bâtiment est déjà partiellement sec. C'est pourquoi notre <Link to={lp("/verhuur/calculator")}>calculateur</Link> ne dimensionne jamais sur le seul chiffre de la machine, mais sur :</>,
    wk: [
      { b: "Le bâtiment", rest: " : volume, nombre de pièces, étages et la façon dont l'air peut y circuler." },
      { b: "Les matériaux", rest: " : plafonnage, chape, béton ou maçonnerie, avec leurs épaisseurs et leur âge." },
      { b: "La charge d'humidité", rest: " : où se trouve le plus d'eau, et dans quelle phase de séchage se trouve le projet ?" },
      { b: "La pratique", rest: " : température, fuites d'air et électricité disponible sur le chantier." },
    ],
    papKick: "Avant de placer la machine",
    papH3: "Un séchage de chantier efficace commence sur papier.",
    papP: <>Choisir le plus gros déshumidificateur est simple ; déterminer la bonne stratégie de séchage demande davantage. Quels matériaux doivent sécher ? L'air peut-il circuler librement ? Une zone de séchage ou plusieurs ? Ce n'est qu'ensuite que la capacité est déterminée et répartie : c'est <Link to={lp("/waarom-bouwdroging")}>votre plan de séchage</Link>, et vous l'obtenez immédiatement avec le <Link to={lp("/verhuur/calculator")}>calculateur</Link>.</>,
    papAlt: "Un technicien Vernast établit le plan de séchage",
    prKick: "Le principe Vernast",
    prH2: "Un plus gros déshumidificateur ne veut pas automatiquement dire un séchage plus rapide.",
    prLede:
      "Deux déshumidificateurs offrant ensemble la même capacité qu'une seule grosse machine : identiques sur papier, pas dans une vraie maison. Une maison se compose de pièces, de couloirs, d'embrasures de portes et de coins, et l'air prend le chemin le plus facile. Comparez avec le chauffage : un énorme radiateur dans le séjour ne chauffe pas les chambres.",
    rd1H3: "Une grosse machine, au centre",
    rd1P: <>Un excellent climat autour de l'appareil, presque aucun renouvellement d'air dans les pièces plus éloignées. Une capacité suffisante sur papier, un séchage inégal en pratique, et souvent une <b>consommation d'énergie inutile</b> due à des appareils surdimensionnés dans des logements compacts.</>,
    rd2H3: "La capacité répartie en zones de séchage",
    rd2P: <>La même capacité totale, répartie là où elle est nécessaire, complétée par des <Link to={lp(toestelPad("ttv4500"))} style={rood}>ventilateurs</Link> qui font mieux circuler l'air. Un climat de séchage plus homogène, un résultat prévisible et une facture d'énergie plus basse.</>,
    prNote: <><b>Pas sécher au maximum. Sécher de façon optimale.</b> Un séchage trop agressif peut favoriser le retrait et la fissuration : c'est pourquoi nous pilotons l'humidité relative et la surcapacité n'est pas un gage de qualité. L'objectif n'est pas de placer les machines les plus grosses possible, mais de <b>répartir la capacité nécessaire le plus efficacement possible dans le bâtiment</b>. Pour l'aspect technique, lisez <Link to={lp("/hoe-drogen-werkt")}>comment fonctionne le séchage</Link>.</>,
    uKick: "Qu'est-ce que cela signifie pour vous ?",
    uH2: "Un pack calculé, sans aucun souci.",
    uLede: <>Chez Vernast, vous ne choisissez pas une machine dans une liste. Vous indiquez dans le <Link to={lp("/verhuur/calculator")}>calculateur de séchage</Link> votre surface, votre hauteur sous plafond et votre situation (<Link to={lp("/verhuur/calculator")}>séchage du plafonnage</Link>, <Link to={lp("/verhuur/calculator")}>séchage de chape</Link>, dégâts des eaux ou cave) et vous obtenez immédiatement le bon pack, avec le temps de séchage et un prix tout compris. Livraison, installation, mesure d'humidité avant et après, enlèvement et tous les accessoires sont inclus. Vous réservez, payez et planifiez l'installation entièrement en ligne, avec 5 % de réduction pour un paiement en ligne. Vous préférez des appareils seuls ? Vous les <Link to={lp("/verhuur/afhalen")}>enlevez à prix avantageux le long de l'A12 à Aartselaar</Link>. Des questions pendant la location ? Le <Link to={lp("/klantservice")}>service clientèle</Link> est là pour cela.</>,
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
      klaarP: "Merci ! Un spécialiste du séchage vous contactera dans un délai d'un jour ouvrable.",
    },
  }),
  en: (lp: Lp): WaaromTekst => ({
    crumbHome: "Home",
    crumb: "Why construction drying",
    heroKick: "All about drying · why",
    h1: "Hoping for good weather is not a drying strategy.",
    heroP:
      "A building will eventually dry out on its own, but at the pace of the seasons, with all the risks that brings for your schedule and finishing work. Controlled construction drying makes that process predictable, measurable and calculated for your building.",
    heroCta: "Calculate your drying package",
    heroCta2: "How drying works",
    heroAlt: "Vernast expert showing a red card to drying by waiting for good weather",
    badge: "Waiting for the sun",
    badgeSub: "No schedule, plenty of risk",
    vsKick: "Natural vs. controlled",
    vsH2: "Why natural drying often takes much longer.",
    vsLede: <>When a building dries on its own, chance conditions set the pace: the outside temperature changes, windows are opened and closed, and at night the temperature drops and the humidity rises. One day a lot of moisture is removed, the next day hardly any. Controlled <Link to={lp("/hoe-drogen-werkt")}>construction drying</Link> stabilises those variables; the big difference is <b>control and predictability</b>.</>,
    natLabel: "Natural drying",
    natH3: "Dependent on the weather.",
    natLijst: [
      "The pace varies by the day and by the season",
      "At night the RH rises and drying comes to a halt",
      "Humid summer air can actually bring moisture in",
      "No idea when it is safe to start finishing",
      "Weeks to months of waiting between construction phases",
    ],
    gecLabel: "Controlled construction drying",
    gecH3: "A stable climate, day and night.",
    gecLijst: [
      "Temperature, RH and circulation continuously controlled",
      "Keeps drying 24/7, regardless of the weather",
      "Calculated drying time, so follow-on work can be scheduled",
      "Moisture reading before and after: measuring instead of guessing",
      "Supports the physical process, skips nothing",
    ],
    vsNote: <><b>To be fair:</b> in favourable weather, natural ventilation can help perfectly well. But anyone planning a building site cannot count on favourable weather, and on a warm, humid summer's day dehumidifying is even better suited than continuing to ventilate.</>,
    plKick: "Your schedule",
    plH2: "Finishing too early costs more than drying.",
    plLede: <>Painting, laying parquet or fitting floor coverings on a substrate that is too damp causes problems later on. Controlled drying shortens the waiting time between construction phases without ignoring the curing times manufacturers require: construction drying <b style={{ color: "#fff" }}>supports and optimises</b> the natural process; it skips nothing.</>,
    plan: [
      { b: "Paintwork", tekst: "Paint on damp plaster adheres poorly, blisters or flakes off. Repainting costs more than drying." },
      { b: "Parquet & floors", tekst: "Wood and adhesive cannot tolerate damp screed: warping, debonding and moisture damage under the floor." },
      { b: "Handover & moving in", tekst: 'Every week spent waiting for it to "dry by itself" is a week later handover, and sometimes an extra week of paying double rent.' },
    ],
    schKick: "Preventing mould",
    schH3: "Damp for too long? Then mould comes free of charge.",
    schP: <>A structure that stays damp for months is the ideal breeding ground for mould spores, especially behind cupboards and skirting boards and in poorly ventilated corners. If mould has already appeared, we tackle it with an <Link to={lp("/ozonbehandeling")}>ozone treatment</Link>, always combined with proper drying.</>,
    schAlt: "Vernast mould specialist in a protective suit",
    ltKick: "More than litres per day",
    ltH2: 'From "50 litres per 24 hours" to a drying plan.',
    ltLede: <>Construction dehumidifiers are often hired out on the strength of a single figure. But the amount of water actually extracted varies greatly with temperature and humidity: a unit that manages dozens of litres in warm, humid test conditions condenses far less once the building is already partly dry. That is why our <Link to={lp("/verhuur/calculator")}>calculator</Link> never sizes on the figure on the machine alone, but on:</>,
    wk: [
      { b: "The building", rest: ": volume, number of rooms, floors and how air can circulate." },
      { b: "The materials", rest: ": plaster, screed, concrete or masonry, with their layer thicknesses and age." },
      { b: "The moisture load", rest: ": where is most of the water, and what drying phase is the project in?" },
      { b: "The practicalities", rest: ": temperature, air leaks and the electricity available on site." },
    ],
    papKick: "Before the machine is placed",
    papH3: "Efficient construction drying starts on paper.",
    papP: <>Choosing the biggest construction dehumidifier is easy; working out the right drying strategy takes more. Which materials need to dry? Can air circulate freely? One drying zone or several? Only then is the capacity determined and distributed: that is <Link to={lp("/waarom-bouwdroging")}>your drying plan</Link>, and you get it straight away from the <Link to={lp("/verhuur/calculator")}>calculator</Link>.</>,
    papAlt: "Vernast technician drawing up the drying plan",
    prKick: "The Vernast principle",
    prH2: "A bigger construction dehumidifier does not automatically mean faster drying.",
    prLede:
      "Two dehumidifiers with the same combined capacity as one heavy machine: identical on paper, but not in a real home. A home consists of rooms, hallways, doorways and corners, and air takes the easiest route. Compare it with heating: one enormous radiator in the living room does not warm the bedrooms.",
    rd1H3: "One heavy machine, in the centre",
    rd1P: <>An excellent climate around the unit, hardly any air exchange in rooms further away. Enough capacity on paper, uneven drying in practice, and often <b>unnecessary energy consumption</b> from oversized units in compact homes.</>,
    rd2H3: "Capacity spread over drying zones",
    rd2P: <>The same total capacity, distributed where it is needed, supplemented with <Link to={lp(toestelPad("ttv4500"))} style={rood}>fans</Link> that help the air circulate better. A more even drying climate, a predictable result and a lower energy bill.</>,
    prNote: <><b>Not maximum drying. Optimal drying.</b> Drying too aggressively can encourage shrinkage and cracking, which is why we control relative humidity and why overcapacity is not a mark of quality. The aim is not to place the biggest machines possible, but <b>to distribute the required capacity across the building as efficiently as possible</b>. You can read how that works technically under <Link to={lp("/hoe-drogen-werkt")}>how drying works</Link>.</>,
    uKick: "What does that mean for you?",
    uH2: "One calculated package, completely taken care of.",
    uLede: <>At Vernast you do not pick a machine from a list. You enter your floor area, ceiling height and situation in the <Link to={lp("/verhuur/calculator")}>drying calculator</Link> (<Link to={lp("/verhuur/calculator")}>drying plasterwork</Link>, <Link to={lp("/verhuur/calculator")}>drying screed</Link>, water damage or a cellar) and immediately get the right package with its drying time and one all-in price. Delivery, installation, moisture readings before and after, collection and all accessories are included. You book, pay and schedule the installation entirely online, with a 5% discount for online payment. Prefer individual units? You can <Link to={lp("/verhuur/afhalen")}>collect them at a good price along the A12 in Aartselaar</Link>. Questions during the hire? That is what <Link to={lp("/klantservice")}>customer service</Link> is for.</>,
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
      klaarP: "Thank you! A drying specialist will contact you within one working day.",
    },
  }),
} satisfies Copy<(lp: Lp) => WaaromTekst>;

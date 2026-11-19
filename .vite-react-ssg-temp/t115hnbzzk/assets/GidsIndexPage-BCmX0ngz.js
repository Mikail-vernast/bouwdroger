import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import { G as GidsShell } from "./GidsShell-BMzhBGtD.js";
import { u as useSeo } from "./seo-BMvlJeai.js";
import { n as navigatie } from "./V3Footer-9z4J1I4x.js";
import { m as CartIcon, T as TruckIcon, a as PrijsIcon, G as GammaIcon, n as MoldIcon, o as CellarIcon, d as SupportIcon, S as ShieldIcon, I as InfoIcon, D as DropIcon, B as BoltIcon, p as BrushIcon, F as FileIcon } from "./V3Header-BeIMcMg7.js";
import { D as DoosIcon, W as WarnIcon, a as WindIcon, L as LekIcon, b as LayersIcon, c as DrogerIcon, C as ClockIcon } from "./icons-DTi5RvwE.js";
import { b as useTaal, a as useLokaalPad, u as useCopy } from "../main.mjs";
import { i as itemListSchema } from "./schema-VJMHyxOJ.js";
import "./PageMeta-BXulEWcY.js";
import "vite-react-ssg";
import "./FaqBlok-Bkr2MHqW.js";
/* empty css                                */
import "./verhuur-CgnDb-wO.js";
import "./tarieven-ZrzMF0e-.js";
import "./verhuur-8XCQs1EE.js";
import "./packages-DdkKuPcF.js";
import "./FontPreload-C6Rzq6ld.js";
import "lucide-react";
import "./verhuur.fr-CrIPL5Eo.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/gids/hubInhoud.ts");
const SAMENVATTING = {
  /* Gidsen */
  "/chape-drogen": "Wat een chapedroging bij u kost en hoe ze verloopt: huurtermijn per chapedikte, levering en installatie, meting voor en na, en de drooggarantie op de einddatum.",
  "/pleisterwerk-drogen": "Pleisterwerk laten drogen met een droogpakket: termijn per laagdikte, wat de technieker doet, en wanneer de schilder of behanger kan starten.",
  "/gids/hoe-lang-moet-chape-drogen": "Droogtijden per dikte, natuurlijk en met een bouwdroger, het verschil tussen cement- en anhydrietchape, vloerverwarming opstoken en restvocht meten. Met een aparte sectie over pleisterwerk.",
  "/gids/hoe-lang-moet-pleisterwerk-drogen": "Droogtijd per laagdikte, het verschil tussen gips- en cementpleister, waarom het vocht in een dichtgemaakt huis blijft hangen en wanneer de schilder mag komen.",
  "/gids/natuurlijk-drogen-of-bouwdroger": "Moet u hier wel iets voor huren? Wat natuurlijk drogen van u vraagt, waarom het seizoen erover beslist, en het verschil met een droogpakket in weken.",
  "/gids/condensdroger-of-adsorptiedroger": "Hoe beide toestellen werken, waarom een condensdroger in de koude rendement verliest, en welk toestel past bij een kelder, een nieuwbouw of water onder de vloer.",
  "/gids/stroomverbruik-bouwdroger": "Het vermogen van onze toestellen, een rekenvoorbeeld in kWh en euro, en waarom een bouwdroger gewoon 24 uur per dag en 's nachts mag doordraaien.",
  /* Uitleg */
  "/hoe-drogen-werkt": "De techniek achter het drogen: hoe temperatuur, luchtvochtigheid en luchtbeweging samenwerken, waarom condensatie werkt en wat een hygrometer u precies vertelt.",
  "/waarom-bouwdroging": "Wat er misgaat als u wacht op goed weer: schimmel, loskomend pleisterwerk, vloeren die later bol komen te staan, en hoeveel weken een werf daarmee uitloopt.",
  "/drooggarantie": "Droog op de afgesproken datum of u huurt kosteloos verder. Wat de garantie dekt, welke voorwaarden eraan hangen en hoe de vochtmeting bij start en oplevering verloopt.",
  "/klantservice": "Verlengen, vroeger stoppen, een toestel dat niet doet wat het moet doen, een factuur of een dossier voor de verzekering, wie u belt en wat u mag verwachten.",
  /* Toepassingen */
  "/nieuwbouw-drogen": "Chape en pleisterwerk versneld drogen zonder het werk te forceren: hoeveel toestellen een woning nodig heeft, wanneer u mag starten en hoe u restvocht aantoont vóór de vloerder komt.",
  "/waterschade": "Wat u doet in de eerste 48 uur na een lek of een overstroming, hoe wij onder vloeren en achter wanden drogen, en welk meetrapport uw verzekeraar nodig heeft.",
  "/renovatie": "Een kelder die vochtig blijft, muren met zoutuitbloei of schimmel achter de kasten: hoe droging en vochtbestrijding op elkaar aansluiten en in welke volgorde.",
  "/ozonbehandeling": "Geur en schimmelsporen wegnemen ná de droging: wat ozon doet, hoe lang een behandeling duurt en waarom een ruimte daarna moet verluchten voor u er weer in kunt.",
  "/luchtontvochtiger-huren": "Het verschil tussen een huishoudelijke ontvochtiger en een bouwdroger, welke capaciteit bij welk volume hoort, en wanneer één toestel volstaat.",
  "/ontschimmeling": "Schimmel aanpakken bij de oorzaak in plaats van ze weg te schilderen: waar ze vandaan komt, wat wij behandelen en waarom de ruimte eerst droog moet zijn.",
  /* Het gamma */
  "/machines": "Elk toestel dat wij verhuren, met zijn ontvochtigingscapaciteit, vermogen en het volume waarvoor het bedoeld is — bouwdrogers, ventilatoren en luchtreinigers.",
  "/verhuur/afhalen": "Een los toestel zelf ophalen in Aartselaar: wat er beschikbaar is, het afhaaltarief per dag en meteen online uw afhaalmoment vastleggen.",
  /* Prijzen & service */
  "/prijzen": "Eén dagprijs per toestel, zonder waarborg en zonder verborgen kosten. Inclusief pakketprijzen, Drooggarantie en alle voorwaarden in gewone taal.",
  "/levering": "Binnen 24 uur geleverd, geplaatst en ingesteld door onze technieker, met een vochtmeting bij de start. Wat er inbegrepen zit, wat de condenspomp doet en hoe het ophalen verloopt.",
  "/afhalen": "Losse toestellen zelf ophalen in Aartselaar, aan afhaaltarief. De route, de tijdsloten, wat er in uw auto past en waar u op let bij het vervoeren van een droger."
};
const SAMENVATTING_FR = {
  /* Gidsen */
  "/chape-drogen": "Ce que coûte chez vous le séchage d'une chape et comment il se déroule : durée de location par épaisseur de chape, livraison et installation, mesure avant et après, et la garantie de séchage sur la date de fin.",
  "/pleisterwerk-drogen": "Faire sécher un plafonnage avec un pack de séchage : délai par épaisseur de couche, ce que fait le technicien, et quand le peintre ou le tapissier peut commencer.",
  "/gids/hoe-lang-moet-chape-drogen": "Les temps de séchage par épaisseur, naturellement et avec un déshumidificateur, la différence entre chape ciment et chape anhydrite, la mise en chauffe du chauffage par le sol et la mesure de l'humidité résiduelle. Avec une section distincte sur le plafonnage.",
  "/gids/hoe-lang-moet-pleisterwerk-drogen": "Le temps de séchage par épaisseur de couche, la différence entre enduit plâtre et enduit ciment, pourquoi l'humidité reste dans une maison fermée et quand le peintre peut venir.",
  "/gids/natuurlijk-drogen-of-bouwdroger": "Faut-il vraiment louer quelque chose ? Ce que le séchage naturel exige de vous, pourquoi la saison est déterminante, et la différence en semaines avec un pack de séchage.",
  "/gids/condensdroger-of-adsorptiedroger": "Comment fonctionnent les deux appareils, pourquoi un déshumidificateur à condensation perd du rendement dans le froid, et quel appareil convient à une cave, une nouvelle construction ou de l'eau sous le sol.",
  "/gids/stroomverbruik-bouwdroger": "La puissance de nos appareils, un exemple de calcul en kWh et en euros, et pourquoi un déshumidificateur de chantier peut tout simplement tourner 24 heures sur 24, y compris la nuit.",
  /* Uitleg */
  "/hoe-drogen-werkt": "La technique du séchage : comment la température, l'humidité de l'air et le mouvement de l'air agissent ensemble, pourquoi la condensation fonctionne et ce que vous dit exactement un hygromètre.",
  "/waarom-bouwdroging": "Ce qui tourne mal si vous attendez le beau temps : moisissures, plafonnage qui se décolle, sols qui gonflent plus tard, et de combien de semaines un chantier est alors retardé.",
  "/drooggarantie": "Sec à la date convenue ou vous continuez à louer sans frais. Ce que couvre la garantie, les conditions qui s'y rattachent et le déroulement de la mesure d'humidité au début et à la fin.",
  "/klantservice": "Prolonger, arrêter plus tôt, un appareil qui ne fait pas ce qu'il doit, une facture ou un dossier pour l'assurance : qui appeler et à quoi vous attendre.",
  /* Toepassingen */
  "/nieuwbouw-drogen": "Accélérer le séchage de la chape et du plafonnage sans forcer les travaux : combien d'appareils il faut pour une maison, quand vous pouvez commencer et comment prouver l'humidité résiduelle avant l'arrivée du poseur de sol.",
  "/waterschade": "Ce qu'il faut faire dans les 48 premières heures après une fuite ou une inondation, comment nous séchons sous les sols et derrière les murs, et quel rapport de mesure votre assureur demande.",
  "/renovatie": "Une cave qui reste humide, des murs avec des efflorescences salines ou des moisissures derrière les armoires : comment séchage et traitement de l'humidité s'enchaînent, et dans quel ordre.",
  "/ozonbehandeling": "Éliminer les odeurs et les spores de moisissures après le séchage : ce que fait l'ozone, combien de temps dure un traitement et pourquoi une pièce doit ensuite être aérée avant que vous puissiez y retourner.",
  "/luchtontvochtiger-huren": "La différence entre un déshumidificateur domestique et un déshumidificateur de chantier, quelle capacité pour quel volume, et quand un seul appareil suffit.",
  "/ontschimmeling": "Traiter les moisissures à la source au lieu de les repeindre : d'où elles viennent, ce que nous traitons et pourquoi la pièce doit d'abord être sèche.",
  /* Het gamma */
  "/machines": "Chaque appareil que nous louons, avec sa capacité de déshumidification, sa puissance et le volume auquel il est destiné : déshumidificateurs, ventilateurs et purificateurs d'air.",
  "/verhuur/afhalen": "Enlever vous-même un appareil à Aartselaar : ce qui est disponible, le tarif d'enlèvement par jour et la réservation immédiate en ligne de votre moment d'enlèvement.",
  /* Prijzen & service */
  "/prijzen": "Un prix journalier par appareil, sans caution et sans frais cachés. Avec les prix des packs, la garantie de séchage et toutes les conditions en langage clair.",
  "/levering": "Livré dans les 24 heures, installé et réglé par notre technicien, avec une mesure d'humidité au départ. Ce qui est compris, ce que fait la pompe à condensats et comment se passe l'enlèvement.",
  "/afhalen": "Enlever vous-même des appareils à Aartselaar, au tarif d'enlèvement. L'itinéraire, les créneaux horaires, ce qui tient dans votre voiture et à quoi faire attention lors du transport d'un déshumidificateur."
};
const SAMENVATTING_EN = {
  /* Gidsen */
  "/chape-drogen": "What drying your screed costs and how it works: hire period per screed thickness, delivery and installation, readings before and after, and the drying guarantee on the end date.",
  "/pleisterwerk-drogen": "Drying plasterwork with a drying package: the period per coat thickness, what the technician does, and when the painter or paperhanger can start.",
  "/gids/hoe-lang-moet-chape-drogen": "Drying times per thickness, naturally and with a construction dehumidifier, the difference between cement and anhydrite screed, commissioning underfloor heating and measuring residual moisture. With a separate section on plasterwork.",
  "/gids/hoe-lang-moet-pleisterwerk-drogen": "Drying time per coat thickness, the difference between gypsum and cement plaster, why moisture lingers in a sealed-up house and when the painter can come in.",
  "/gids/natuurlijk-drogen-of-bouwdroger": "Do you actually need to hire anything? What natural drying asks of you, why the season decides it, and the difference in weeks compared with a drying package.",
  "/gids/condensdroger-of-adsorptiedroger": "How both machines work, why a condensation dehumidifier loses efficiency in the cold, and which machine suits a cellar, a new build or water under the floor.",
  "/gids/stroomverbruik-bouwdroger": "The power rating of our machines, a worked example in kWh and euros, and why a construction dehumidifier can simply run 24 hours a day, nights included.",
  /* Uitleg */
  "/hoe-drogen-werkt": "The technology behind drying: how temperature, humidity and air movement work together, why condensation works and what a hygrometer actually tells you.",
  "/waarom-bouwdroging": "What goes wrong if you wait for good weather: mould, plaster coming loose, floors that buckle later, and how many weeks that adds to a building project.",
  "/drooggarantie": "Dry on the agreed date or you keep hiring free of charge. What the guarantee covers, the conditions attached and how the moisture reading at the start and at handover works.",
  "/klantservice": "Extending, stopping early, a machine that isn't doing what it should, an invoice or a file for the insurer: who to call and what you can expect.",
  /* Toepassingen */
  "/nieuwbouw-drogen": "Speeding up screed and plaster drying without forcing the work: how many machines a house needs, when you can start and how to prove residual moisture before the floor layer arrives.",
  "/waterschade": "What to do in the first 48 hours after a leak or a flood, how we dry under floors and behind walls, and which reading report your insurer needs.",
  "/renovatie": "A cellar that stays damp, walls with salt efflorescence or mould behind the cupboards: how drying and damp treatment fit together, and in what order.",
  "/ozonbehandeling": "Removing odours and mould spores after drying: what ozone does, how long a treatment takes and why a room must be aired before you can go back in.",
  "/luchtontvochtiger-huren": "The difference between a household dehumidifier and a construction dehumidifier, which capacity suits which volume, and when one machine is enough.",
  "/ontschimmeling": "Tackling mould at the source instead of painting over it: where it comes from, what we treat and why the room has to be dry first.",
  /* Het gamma */
  "/machines": "Every machine we hire out, with its dehumidifying capacity, power rating and the volume it is meant for: construction dehumidifiers, fans and air purifiers.",
  "/verhuur/afhalen": "Collecting a single machine yourself in Aartselaar: what is available, the daily collection rate and booking your collection slot online straight away.",
  /* Prijzen & service */
  "/prijzen": "One daily price per machine, no deposit and no hidden costs. Including package prices, the drying guarantee and all terms in plain language.",
  "/levering": "Delivered within 24 hours, placed and set up by our technician, with a moisture reading at the start. What is included, what the condensate pump does and how collection works.",
  "/afhalen": "Collecting individual machines yourself in Aartselaar, at the collection rate. The route, the time slots, what fits in your car and what to watch out for when transporting a dehumidifier."
};
const VRAAG = {
  "/gids/hoe-lang-moet-chape-drogen": "Hoe lang moet chape drogen?",
  "/gids/hoe-lang-moet-pleisterwerk-drogen": "Hoe lang moet pleisterwerk drogen?",
  "/gids/natuurlijk-drogen-of-bouwdroger": "Moet ik huren, of droogt het vanzelf?",
  "/gids/condensdroger-of-adsorptiedroger": "Condensdroger of adsorptiedroger — welk toestel heb ik nodig?",
  "/gids/stroomverbruik-bouwdroger": "Wat kost een bouwdroger aan stroom?",
  "/hoe-drogen-werkt": "Hoe droogt een bouwdroger een ruimte eigenlijk?",
  "/waarom-bouwdroging": "Wat gaat er mis als ik gewoon wacht tot het droog is?",
  "/drooggarantie": "Wat als het op de afgesproken datum niet droog is?",
  "/klantservice": "Hoe verleng ik, stop ik vroeger of meld ik een probleem?",
  "/chape-drogen": "Wat kost het om mijn chape te laten drogen?",
  "/pleisterwerk-drogen": "Wanneer kan de schilder na het pleisterwerk starten?",
  "/nieuwbouw-drogen": "Hoeveel toestellen heeft mijn nieuwbouw nodig?",
  "/waterschade": "Wat doe ik in de eerste 48 uur na waterschade?",
  "/renovatie": "Hoe krijg ik een kelder of een vochtige muur droog?",
  "/ozonbehandeling": "Hoe raak ik van de geur en de schimmelsporen af?",
  "/luchtontvochtiger-huren": "Volstaat een ontvochtiger, of heb ik een bouwdroger nodig?",
  "/ontschimmeling": "Hoe raak ik van de schimmel af, en blijft ze weg?",
  "/machines": "Welke toestellen verhuren jullie?",
  "/verhuur/afhalen": "Wat kost een los toestel afhalen?",
  "/prijzen": "Wat kost een bouwdroger per dag?",
  "/levering": "Wat zit er bij een levering inbegrepen?",
  "/afhalen": "Kan ik een toestel zelf komen ophalen?"
};
const VRAAG_FR = {
  "/gids/hoe-lang-moet-chape-drogen": "Combien de temps une chape doit-elle sécher ?",
  "/gids/hoe-lang-moet-pleisterwerk-drogen": "Combien de temps un plafonnage doit-il sécher ?",
  "/gids/natuurlijk-drogen-of-bouwdroger": "Dois-je louer, ou cela sèche-t-il tout seul ?",
  "/gids/condensdroger-of-adsorptiedroger": "Condensation ou adsorption : de quel appareil ai-je besoin ?",
  "/gids/stroomverbruik-bouwdroger": "Combien coûte un déshumidificateur en électricité ?",
  "/hoe-drogen-werkt": "Comment un déshumidificateur de chantier sèche-t-il réellement une pièce ?",
  "/waarom-bouwdroging": "Qu'est-ce qui tourne mal si j'attends simplement que ça sèche ?",
  "/drooggarantie": "Et si ce n'est pas sec à la date convenue ?",
  "/klantservice": "Comment prolonger, arrêter plus tôt ou signaler un problème ?",
  "/chape-drogen": "Combien coûte le séchage de ma chape ?",
  "/pleisterwerk-drogen": "Quand le peintre peut-il commencer après le plafonnage ?",
  "/nieuwbouw-drogen": "Combien d'appareils faut-il pour ma nouvelle construction ?",
  "/waterschade": "Que faire dans les 48 premières heures après des dégâts des eaux ?",
  "/renovatie": "Comment assécher une cave ou un mur humide ?",
  "/ozonbehandeling": "Comment me débarrasser de l'odeur et des spores de moisissures ?",
  "/luchtontvochtiger-huren": "Un déshumidificateur d'air suffit-il, ou me faut-il un déshumidificateur de chantier ?",
  "/ontschimmeling": "Comment me débarrasser des moisissures, et qu'elles ne reviennent pas ?",
  "/machines": "Quels appareils louez-vous ?",
  "/verhuur/afhalen": "Combien coûte l'enlèvement d'un appareil ?",
  "/prijzen": "Combien coûte un déshumidificateur de chantier par jour ?",
  "/levering": "Qu'est-ce qui est compris dans une livraison ?",
  "/afhalen": "Puis-je venir chercher un appareil moi-même ?"
};
const VRAAG_EN = {
  "/gids/hoe-lang-moet-chape-drogen": "How long does screed take to dry?",
  "/gids/hoe-lang-moet-pleisterwerk-drogen": "How long does plaster take to dry?",
  "/gids/natuurlijk-drogen-of-bouwdroger": "Should I hire, or will it dry on its own?",
  "/gids/condensdroger-of-adsorptiedroger": "Condensation or desiccant dehumidifier: which do I need?",
  "/gids/stroomverbruik-bouwdroger": "How much electricity does a construction dehumidifier cost?",
  "/hoe-drogen-werkt": "How does a construction dehumidifier actually dry a room?",
  "/waarom-bouwdroging": "What goes wrong if I just wait for it to dry?",
  "/drooggarantie": "What if it isn't dry on the agreed date?",
  "/klantservice": "How do I extend, stop early or report a problem?",
  "/chape-drogen": "What does it cost to have my screed dried?",
  "/pleisterwerk-drogen": "When can the painter start after plastering?",
  "/nieuwbouw-drogen": "How many machines does my new build need?",
  "/waterschade": "What do I do in the first 48 hours after water damage?",
  "/renovatie": "How do I get a cellar or a damp wall dry?",
  "/ozonbehandeling": "How do I get rid of the smell and the mould spores?",
  "/luchtontvochtiger-huren": "Is a dehumidifier enough, or do I need a construction dehumidifier?",
  "/ontschimmeling": "How do I get rid of mould, and keep it away?",
  "/machines": "Which machines do you hire out?",
  "/verhuur/afhalen": "What does collecting a single machine cost?",
  "/prijzen": "What does a construction dehumidifier cost per day?",
  "/levering": "What is included in a delivery?",
  "/afhalen": "Can I collect a machine myself?"
};
const PICTOGRAM = {
  "/chape-drogen": LayersIcon,
  "/pleisterwerk-drogen": BrushIcon,
  "/gids/hoe-lang-moet-chape-drogen": ClockIcon,
  "/gids/hoe-lang-moet-pleisterwerk-drogen": BrushIcon,
  "/gids/natuurlijk-drogen-of-bouwdroger": WindIcon,
  "/gids/condensdroger-of-adsorptiedroger": DrogerIcon,
  "/gids/stroomverbruik-bouwdroger": BoltIcon,
  "/hoe-drogen-werkt": DropIcon,
  "/waarom-bouwdroging": InfoIcon,
  "/drooggarantie": ShieldIcon,
  "/klantservice": SupportIcon,
  "/nieuwbouw-drogen": LayersIcon,
  "/waterschade": LekIcon,
  "/renovatie": CellarIcon,
  "/ozonbehandeling": MoldIcon,
  "/luchtontvochtiger-huren": WindIcon,
  /* Niet MoldIcon: dat staat al op /ozonbehandeling, en twee identieke
     pictogrammen in hetzelfde raster lezen als één pagina die dubbel staat. */
  "/ontschimmeling": WarnIcon,
  "/machines": GammaIcon,
  "/verhuur/afhalen": DoosIcon,
  "/prijzen": PrijsIcon,
  "/levering": TruckIcon,
  "/afhalen": CartIcon
};
const GROEPKOP = {
  Gidsen: {
    kop: "Kies uw vraag",
    lede: "Eén concrete vraag per gids, uitgewerkt met droogtijden, rekenvoorbeelden en de cijfers uit onze eigen catalogus.",
    kort: "Droogtijden, toestelkeuze en verbruik, uitgerekend.",
    kleur: "zwart"
  },
  Uitleg: {
    kop: "Hoe drogen werkt, en waarom het niet vanzelf gaat",
    lede: "De achtergrond bij alles hierboven: de techniek, de reden om niet te wachten, en wat wij beloven wanneer u bij ons huurt.",
    kort: "De techniek erachter en wat wij beloven.",
    kleur: "zand"
  },
  Toepassingen: {
    kop: "Uw situatie",
    lede: "Een nieuwbouw, een lek, een vochtige kelder of een geur die blijft hangen, elk met een eigen aanpak, droogtijd en opstelling.",
    kort: "Nieuwbouw, waterschade, kelder of geur.",
    kleur: "maroon"
  },
  "Het gamma": {
    kop: "De toestellen zelf",
    lede: "Wat er in het magazijn staat, met de capaciteit en het vermogen per toestel, en hoe u er zelf een komt halen.",
    kort: "De toestellen, met capaciteit en vermogen.",
    kleur: "wit"
  },
  "Prijzen & service": {
    kop: "Wat het kost en hoe het geleverd wordt",
    lede: "De tarieven, wat er bij een levering inbegrepen zit, en wat er verandert wanneer u de toestellen zelf komt halen.",
    kort: "Tarieven, levering en zelf afhalen.",
    kleur: "rood"
  }
};
const GROEPKOP_FR = {
  Gidsen: {
    kop: "Choisissez votre question",
    lede: "Une question concrète par guide, développée avec des temps de séchage, des exemples de calcul et les chiffres de notre propre catalogue.",
    kort: "Temps de séchage, choix de l'appareil et consommation, calculés."
  },
  Uitleg: {
    kop: "Comment fonctionne le séchage, et pourquoi il ne se fait pas tout seul",
    lede: "Le contexte de tout ce qui précède : la technique, la raison de ne pas attendre, et ce que nous promettons quand vous louez chez nous.",
    kort: "La technique et ce que nous promettons."
  },
  Toepassingen: {
    kop: "Votre situation",
    lede: "Une nouvelle construction, une fuite, une cave humide ou une odeur qui persiste, chacune avec sa propre approche, son temps de séchage et son installation.",
    kort: "Nouvelle construction, dégâts des eaux, cave ou odeur."
  },
  "Het gamma": {
    kop: "Les appareils",
    lede: "Ce qui se trouve dans notre entrepôt, avec la capacité et la puissance de chaque appareil, et comment venir en chercher un vous-même.",
    kort: "Les appareils, avec capacité et puissance."
  },
  "Prijzen & service": {
    kop: "Ce que ça coûte et comment c'est livré",
    lede: "Les tarifs, ce qui est compris dans une livraison, et ce qui change quand vous venez chercher les appareils vous-même.",
    kort: "Tarifs, livraison et enlèvement."
  }
};
const GROEPKOP_EN = {
  Gidsen: {
    kop: "Choose your question",
    lede: "One concrete question per guide, worked out with drying times, worked examples and the figures from our own catalogue.",
    kort: "Drying times, choice of machine and consumption, calculated."
  },
  Uitleg: {
    kop: "How drying works, and why it doesn't happen by itself",
    lede: "The background to everything above: the technology, the reason not to wait, and what we promise when you hire from us.",
    kort: "The technology behind it and what we promise."
  },
  Toepassingen: {
    kop: "Your situation",
    lede: "A new build, a leak, a damp cellar or a smell that lingers, each with its own approach, drying time and set-up.",
    kort: "New build, water damage, cellar or odour."
  },
  "Het gamma": {
    kop: "The machines themselves",
    lede: "What is in the warehouse, with the capacity and power rating of each machine, and how to collect one yourself.",
    kort: "The machines, with capacity and power rating."
  },
  "Prijzen & service": {
    kop: "What it costs and how it is delivered",
    lede: "The rates, what is included in a delivery, and what changes when you collect the machines yourself.",
    kort: "Rates, delivery and self-collection."
  }
};
function bouwGroepen(taal) {
  const nl = navigatie("nl").ALLES_OVER_DROGEN;
  const lokaal = navigatie(taal).ALLES_OVER_DROGEN;
  const vertaald = taal !== "nl";
  const KOP_VERTAALD = taal === "fr" ? GROEPKOP_FR : taal === "en" ? GROEPKOP_EN : void 0;
  const VRAGEN = taal === "fr" ? VRAAG_FR : taal === "en" ? VRAAG_EN : VRAAG;
  const SAMENVATTINGEN = taal === "fr" ? SAMENVATTING_FR : taal === "en" ? SAMENVATTING_EN : SAMENVATTING;
  const volgorde = [
    ...nl.map((g, i) => ({ g, i })).filter(({ g }) => g.titel === "Gidsen"),
    ...nl.map((g, i) => ({ g, i })).filter(({ g }) => g.titel !== "Gidsen")
  ];
  return volgorde.map(({ g: groep, i }) => {
    const kop = GROEPKOP[groep.titel];
    const kopVertaald = KOP_VERTAALD?.[groep.titel];
    const titel = lokaal[i]?.titel ?? groep.titel;
    return {
      titel,
      kop: kopVertaald?.kop ?? (vertaald ? titel : kop?.kop ?? groep.titel),
      lede: kopVertaald?.lede ?? (vertaald ? "" : kop?.lede ?? ""),
      kort: kopVertaald?.kort ?? (vertaald ? "" : kop?.kort ?? ""),
      kleur: kop?.kleur ?? "wit",
      // "Alle gidsen" is de hub zelf; een kaart die naar zichzelf linkt helpt
      // niemand en kost een crawler een beurt.
      items: groep.items.map((item, j) => ({ item, hier: lokaal[i]?.items[j] ?? item })).filter(({ item }) => item.path !== "/gids").map(({ item, hier }) => ({
        path: hier.path,
        label: hier.label,
        vraag: VRAGEN[item.path] ?? hier.label,
        samenvatting: SAMENVATTINGEN[item.path] ?? "",
        Icoon: PICTOGRAM[item.path] ?? FileIcon,
        groep: titel,
        kleur: kop?.kleur ?? "wit"
      }))
    };
  });
}
const CACHE = {};
function hubGroepen(taal) {
  return CACHE[taal] ??= bouwGroepen(taal);
}
function hubItems(taal) {
  return hubGroepen(taal).flatMap((g) => g.items);
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/gids/GidsIndexPage.tsx");
const COPY = {
  nl: {
    crumbHome: "Home",
    crumb: "Gidsen",
    kick: "Alles over drogen · gidsen",
    h1: "Gidsen over bouwdroging",
    intro: "Alles wat wij over drogen uitgelegd hebben, op één pagina. Hoe lang iets moet drogen, welk toestel u nodig heeft, wat dat aan stroom kost, en wat er bij een levering inbegrepen zit. Zonder verkooppraat, met de cijfers uit onze eigen catalogus waar die er zijn.",
    heroAlt: "De Vernast vakmannen met hun gereedschap",
    lijst: "Gidsen over bouwdroging",
    antwoorden: (n) => `${n} antwoorden`,
    vraag: "Waar gaat uw vraag over?",
    lede: "Druk op een onderwerp en u ziet meteen welke vragen wij daarover beantwoorden. Van droogtijden en toestelkeuze tot wat een levering kost.",
    alles: "Alles",
    vanDe: (z, n) => ` van de ${n} pagina's · `,
    toonAlles: "Toon alles",
    verdeeld: (g) => ` pagina's, verdeeld over ${g} onderwerpen`,
    meer: "Lees verder",
    note: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Staat uw vraag er niet bij?" }),
      " Bekijk ",
      /* @__PURE__ */ jsx(Link, { to: lp("/machines"), children: "het volledige gamma" }),
      " ",
      "als u een toestel zoekt, ",
      /* @__PURE__ */ jsx(Link, { to: lp("/realisaties"), children: "de realisaties" }),
      " als u wilt zien hoe een werf als de uwe verliep, of bereken meteen uw opstelling in de",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "droogcalculator" }),
      ". Liever iemand aan de lijn? Dat kan ook, via ",
      /* @__PURE__ */ jsx(Link, { to: lp("/contact"), children: "contact" }),
      "."
    ] })
  },
  fr: {
    crumbHome: "Accueil",
    crumb: "Guides",
    kick: "Tout sur le séchage · guides",
    h1: "Guides du séchage de chantier",
    intro: "Tout ce que nous avons expliqué sur le séchage, sur une seule page. Combien de temps un matériau doit sécher, de quel appareil vous avez besoin, ce que cela coûte en électricité, et ce qui est compris dans une livraison. Sans discours commercial, avec les chiffres de notre propre catalogue quand ils existent.",
    heroAlt: "Les techniciens de Vernast avec leurs outils",
    lijst: "Guides du séchage de chantier",
    antwoorden: (n) => `${n} réponses`,
    vraag: "Sur quoi porte votre question ?",
    lede: "Touchez un sujet et vous voyez aussitôt à quelles questions nous répondons à ce propos. Des temps de séchage et du choix de l'appareil jusqu'au prix d'une livraison.",
    alles: "Tout",
    vanDe: (z, n) => ` des ${n} pages · `,
    toonAlles: "Tout afficher",
    verdeeld: (g) => ` pages, réparties en ${g} sujets`,
    meer: "Lire la suite",
    note: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Votre question n'y figure pas ?" }),
      " Consultez ",
      /* @__PURE__ */ jsx(Link, { to: lp("/machines"), children: "toute la gamme" }),
      " ",
      "si vous cherchez un appareil, ",
      /* @__PURE__ */ jsx(Link, { to: lp("/realisaties"), children: "les réalisations" }),
      " si vous voulez voir comment s'est déroulé un chantier comme le vôtre, ou calculez directement votre installation avec le",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "calculateur de séchage" }),
      ". Vous préférez parler à quelqu'un ? C'est possible aussi, via la page ",
      /* @__PURE__ */ jsx(Link, { to: lp("/contact"), children: "contact" }),
      "."
    ] })
  },
  en: {
    crumbHome: "Home",
    crumb: "Guides",
    kick: "All about drying · guides",
    h1: "Guides to construction drying",
    intro: "Everything we have explained about drying, on one page. How long something needs to dry, which machine you need, what that costs in electricity, and what is included in a delivery. No sales talk, with the figures from our own catalogue where they exist.",
    heroAlt: "The Vernast tradesmen with their tools",
    lijst: "Guides to construction drying",
    antwoorden: (n) => `${n} answers`,
    vraag: "What is your question about?",
    lede: "Tap a topic and you will immediately see which questions we answer about it. From drying times and choice of machine to what a delivery costs.",
    alles: "All",
    vanDe: (z, n) => ` of ${n} pages · `,
    toonAlles: "Show all",
    verdeeld: (g) => ` pages, across ${g} topics`,
    meer: "Read more",
    note: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Is your question not listed?" }),
      " Browse ",
      /* @__PURE__ */ jsx(Link, { to: lp("/machines"), children: "the full range" }),
      " ",
      "if you are looking for a machine, ",
      /* @__PURE__ */ jsx(Link, { to: lp("/realisaties"), children: "our projects" }),
      " if you want to see how a site like yours went, or work out your set-up straight away in the",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "drying calculator" }),
      ". Rather speak to someone? You can do that too, via ",
      /* @__PURE__ */ jsx(Link, { to: lp("/contact"), children: "contact" }),
      "."
    ] })
  }
};
const Pijl = () => /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
  /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
] });
const Kaart = ({ item, tag, meer }) => /* @__PURE__ */ jsxs(Link, { className: "hubkaart", "data-kleur": item.kleur, to: item.path, children: [
  tag && /* @__PURE__ */ jsx("span", { className: "tag", children: item.groep }),
  /* @__PURE__ */ jsxs("span", { className: "kop", children: [
    /* @__PURE__ */ jsx("span", { className: "ki", "aria-hidden": "true", children: /* @__PURE__ */ jsx(item.Icoon, { size: 19 }) }),
    /* @__PURE__ */ jsx("h3", { children: item.label })
  ] }),
  item.samenvatting ? /* @__PURE__ */ jsx("p", { children: item.samenvatting }) : null,
  /* @__PURE__ */ jsxs("span", { className: "meer", "aria-hidden": "true", children: [
    meer,
    " ",
    /* @__PURE__ */ jsx(Pijl, {})
  ] })
] });
const GidsIndexPage = () => {
  const [actief, setActief] = useState(null);
  const taal = useTaal();
  const lp = useLokaalPad();
  const t = useCopy(COPY);
  const HUB_GROEPEN = hubGroepen(taal);
  const HUB_ITEMS = hubItems(taal);
  const groep = HUB_GROEPEN.find((g) => g.titel === actief);
  const zichtbaar = groep ? groep.items : HUB_ITEMS;
  return /* @__PURE__ */ jsxs(
    GidsShell,
    {
      seo: useSeo("gids"),
      path: "/gids",
      crumbs: [
        { name: t.crumbHome, path: "/" },
        { name: t.crumb, path: "/gids" }
      ],
      kick: t.kick,
      h1: t.h1,
      intro: /* @__PURE__ */ jsx("p", { children: t.intro }),
      heroImg: { src: "/vernast/team-tools.webp", alt: t.heroAlt },
      jsonLd: [
        itemListSchema(
          t.lijst,
          navigatie(taal).GIDSEN.map((g) => ({ name: g.label, path: g.path }))
        )
      ],
      children: [
        /* @__PURE__ */ jsx("section", { className: "sw", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
          /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
            /* @__PURE__ */ jsx("span", { className: "kick", children: t.antwoorden(HUB_ITEMS.length) }),
            /* @__PURE__ */ jsx("h2", { className: "sec", children: t.vraag }),
            /* @__PURE__ */ jsx("p", { className: "lede", children: t.lede })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "hubfilters", children: [
            /* @__PURE__ */ jsxs("button", { type: "button", "aria-pressed": actief === null, onClick: () => setActief(null), children: [
              t.alles,
              " ",
              /* @__PURE__ */ jsx("span", { className: "n", children: HUB_ITEMS.length })
            ] }),
            HUB_GROEPEN.map((g) => /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                "data-kleur": g.kleur,
                "aria-pressed": actief === g.titel,
                onClick: () => setActief(g.titel),
                children: [
                  g.titel,
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "n", children: g.items.length })
                ]
              },
              g.titel
            ))
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hubtel", children: groep ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("b", { children: zichtbaar.length }),
              t.vanDe(zichtbaar.length, HUB_ITEMS.length),
              groep.titel,
              /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setActief(null), children: t.toonAlles })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "uitleg", children: groep.lede })
          ] }) : /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("b", { children: HUB_ITEMS.length }),
            t.verdeeld(HUB_GROEPEN.length)
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "hubgrid", children: zichtbaar.map((item) => /* @__PURE__ */ jsx(Kaart, { item, tag: actief === null, meer: t.meer }, item.path)) })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "sw", children: /* @__PURE__ */ jsx("div", { className: "wrap", children: /* @__PURE__ */ jsx("div", { className: "note", children: t.note(lp) }) }) })
      ]
    }
  );
};
export {
  GidsIndexPage as default
};

import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { P as PageMeta, C as CONTACT } from "./PageMeta-BXulEWcY.js";
import { l as V3Header, A as ArrowRightIcon, k as PhoneIcon, e as CheckIcon, g as CalendarCheckIcon, r as HouseIcon, p as BrushIcon } from "./V3Header-BeIMcMg7.js";
import { V as V3Footer } from "./V3Footer-9z4J1I4x.js";
import { R as Reveal } from "./Reveal-NNPkAe35.js";
import { P as Pakketkaarten } from "./Pakketkaarten-Dd1w1Oyj.js";
import { C as ContactBlok } from "./ContactBlok-ykYeBJgi.js";
import { F as FaqBlok } from "./FaqBlok-Bkr2MHqW.js";
import { V as VerderLezen } from "./VerderLezen-BWBN-Dg6.js";
import { X as XIcon, G as GaugeIcon, a as WindIcon, T as ThermoIcon } from "./icons-DTi5RvwE.js";
import { u as useSeo } from "./seo-BMvlJeai.js";
import { e as euro, s as serviceSchema, f as faqSchema, b as breadcrumbSchema } from "./schema-VJMHyxOJ.js";
import { E as EXTRAS, t as toestelPad } from "./verhuur-CgnDb-wO.js";
import { getRealisatie } from "./realisaties-eA_H-cxM.js";
import { u as useCopy, a as useLokaalPad, b as useTaal, c as useToonBedrag } from "../main.mjs";
import { t as termijnZonderDikte, d as droogtermijnen, b as termijnLabel } from "./droogtijden-B2lUiF15.js";
import { t as termijnLabelFr } from "./termijnLabelFr-CaClmI4e.js";
import { t as termijnLabelEn } from "./termijnLabelEn-DeyIrV-C.js";
/* empty css                    */
import "vite-react-ssg";
import "react";
import "./FontPreload-C6Rzq6ld.js";
import "./verhuur-8XCQs1EE.js";
import "./packages-DdkKuPcF.js";
import "./tarieven-ZrzMF0e-.js";
import "./AanvraagForm-CNDpbMyw.js";
import "./verhuur.fr-CrIPL5Eo.js";
import "lucide-react";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/PleisterwerkDrogenPage.copy.tsx");
const PLEISTER = droogtermijnen("pleister");
const BEIDE = termijnZonderDikte("beide");
const kortsteTermijn = Math.min(...PLEISTER.map((r) => r.min));
const langsteTermijn = Math.max(...PLEISTER.map((r) => r.max));
function opsomming(rijen) {
  const delen = rijen.map((r) => `${r.dikte} cm: ${termijnLabel(r)}`);
  if (delen.length <= 1) return delen.join("");
  return `${delen.slice(0, -1).join(", ")} en ${delen[delen.length - 1]}`;
}
function opsommingFr(rijen) {
  const delen = rijen.map((r) => `${r.dikte} cm : ${termijnLabelFr(r)}`);
  if (delen.length <= 1) return delen.join("");
  return `${delen.slice(0, -1).join(", ")} et ${delen[delen.length - 1]}`;
}
function opsommingEn(rijen) {
  const delen = rijen.map((r) => `${r.dikte} cm: ${termijnLabelEn(r)}`);
  if (delen.length <= 1) return delen.join("");
  return `${delen.slice(0, -1).join(", ")} and ${delen[delen.length - 1]}`;
}
const nl = {
  zonder: [
    "De muren geven af tot de lucht verzadigd is, en dan stopt het",
    "Condens op ramen en koude buitenmuren, soms schimmel in de hoeken",
    "De schilder kan niet starten en schuift u door naar zijn volgende werf",
    "Te vroeg geschilderd: bladderende verf of vlekken, en opnieuw beginnen"
  ],
  met: [
    `Een huurtermijn van ${kortsteTermijn} tot ${langsteTermijn} weken, volgens de laagdikte`,
    "Het vocht verlaat het gebouw in plaats van neer te slaan op het glas",
    "Een einddatum die u aan uw schilder of behanger kunt doorgeven",
    "Meting van de restvochtigheid bij de start en bij de oplevering"
  ],
  stappen: [
    {
      title: "U kiest de leverdag",
      desc: "Zodra het pleisterwerk gezet is en het oppervlak hard aanvoelt, boekt u de datum. Wij leveren in heel Vlaanderen, meestal binnen enkele werkdagen, en u krijgt een tijdvenster in plaats van een hele dag wachten."
    },
    {
      title: "Voormeting vóór er iets draait",
      desc: "De technieker legt de restvochtigheid van de muren en de luchtvochtigheid in de ruimte vast. Dat startpunt is de reden dat wij een einddatum kunnen geven in plaats van een inschatting."
    },
    {
      title: "Plaatsen en instellen",
      desc: "Hij zet de toestellen centraal in de ruimte, vrij van de muren, sluit de condensafvoer aan en stelt de streefwaarde in. Daarna draait alles dag en nacht; de hygrostaat schakelt zelf terug zodra de lucht droog genoeg is."
    },
    {
      title: "Lucht in beweging",
      desc: "Tegen een verse muur blijft een laag verzadigde lucht staan, en in hoeken en achter deuren beweegt helemaal niets. Een ventilator veegt die laag weg, zodat droge lucht het vocht kan oppikken."
    },
    {
      title: "Warmte als de werf koud staat",
      desc: "Een condensdroger werkt het best tussen ongeveer 15 en 25 °C. Staat uw werf kouder, dan komt er een elektrische bouwkachel met thermostaat bij. Die verwarmt de ruimte gelijkmatig, en niet één muur van dichtbij."
    },
    {
      title: "Nameting en ophaling",
      desc: "Op het einde meten we opnieuw. Is de waarde in orde, dan halen wij de toestellen op en kan uw schilder of behanger starten. Is ze dat niet, dan verlengen wij kosteloos tot ze wel in orde is."
    }
  ],
  faqs: [
    {
      q: "Wat kost het drogen van pleisterwerk?",
      a: "Dat hangt af van het volume van de ruimte en van de laagdikte: die twee bepalen hoeveel toestellen er nodig zijn en hoe lang ze blijven staan. De droogcalculator vraagt uw oppervlakte en de dikte van de laag en toont meteen het pakket met de prijs, inclusief levering, installatie en de metingen. Alle dag- en weektarieven staan ook los op onze prijzenpagina."
    },
    {
      q: "Wanneer mag de bouwdroger aan na het pleisteren?",
      a: "Zodra het oppervlak hard is, doorgaans sneller dan bij een chape. Wat u in die eerste dagen niet doet, is keihard drogen of een kachel vlak voor een muur zetten: dan droogt het oppervlak uit terwijl de laag eronder nog nat is, en dat geeft krimpscheuren of een poederige bovenlaag. Verwarm gelijkmatig en laat het toestel daarna dag en nacht doorlopen."
    },
    {
      q: "Moet ik de ramen openzetten terwijl de droger draait?",
      a: "Nee, houd ze dicht. Een condensdroger droogt de lucht in een afgesloten ruimte; staat er een raam open, dan haalt hij voortdurend nieuwe, vochtige buitenlucht binnen en droogt hij de straat in plaats van uw muren. Ventileren helpt alleen als de buitenlucht droger is dan de binnenlucht, en dat is in België een groot deel van het jaar niet zo."
    },
    {
      q: "Wanneer mag de schilder of de behanger komen?",
      a: "Als een meting bevestigt dat de laag droog is, niet wanneer de muur egaal licht oogt. Verf op een te natte ondergrond kan bladderen of vlekken, en behang sluit het restvocht helemaal op: daar groeit schimmel achter die u pas maanden later ziet. Vraag uw schilder welke waarde hij wil zien en welke eerste laag hij gebruikt; een dampopen grondlaag laat de muur verder ademen."
    },
    {
      q: "Kan ik pleisterwerk en chape samen laten drogen?",
      a: BEIDE ? `Ja, en in een nieuwbouw is dat ook de normale gang van zaken. Daarvoor bestaat een pakket dat vloer en muren samen droogt, met een huurtermijn van ${termijnLabel(
        BEIDE
      )}. U huurt dan één keer en meet één keer in plaats van twee droogrondes na elkaar. Samen drogen vraagt wel meer capaciteit, want er komt in dezelfde ruimte veel meer water vrij; de Calculator rekent dat uit.` : "Ja, en in een nieuwbouw is dat ook de normale gang van zaken. Samen drogen vraagt wel meer capaciteit dan een van de twee apart, want er komt in dezelfde ruimte veel meer water vrij. De Calculator rekent uit welk pakket daarbij hoort."
    },
    {
      q: "Wat als mijn muren op de einddatum nog niet droog zijn?",
      a: "Dan verlengen wij kosteloos tot ze dat wel zijn. Dat is de Drooggarantie, en ze geldt op elk pakket dat via de Calculator berekend en met levering en installatie geboekt is. Ze steunt op de meting bij de start en bij de oplevering: zonder die twee metingen is er niets om een einddatum aan af te toetsen."
    },
    {
      q: "Kan ik de toestellen zelf afhalen?",
      a: "Ja, losse bouwdrogers, ventilatoren en bouwkachels haalt u op in ons afhaalpunt langs de A12 in Aartselaar. U betaalt dan geen transport en geen installatie, maar u bepaalt zelf de opstelling en de vochtmeting en de Drooggarantie zitten niet bij de huur. Het toestel zelf is hetzelfde."
    },
    {
      q: "Hoe lang moet pleisterwerk drogen?",
      a: `Met een droogpakket lopen onze pleistertermijnen ${opsomming(
        PLEISTER
      )}. Zonder droger valt er geen termijn te beloven: dan bepaalt de luchtvochtigheid in uw gebouw het tempo, en in een koud, dichtgemaakt huis staat de droging stil in plaats van traag te lopen. De volledige uitleg, met het verschil tussen gips- en cementpleister, staat in onze gids over de droogtijd van pleisterwerk.`
    }
  ],
  verderLezen: [
    {
      kop: "Hoe lang het duurt en waarom",
      links: [
        { label: "Gids: hoe lang moet pleisterwerk drogen?" },
        { label: "Hoe een bouwdroger het vocht uit een woning haalt" },
        { label: "Onze 100 % drooggarantie op een berekend pakket" },
        { label: "Chape en pleisterwerk samen drogen in nieuwbouw" }
      ]
    },
    {
      kop: "De toestellen voor een pleisterdroging",
      links: [
        { label: "Performance", sub: "Het standaardtoestel voor een nieuwbouwwoning." },
        { label: "Ventilator om de lucht in beweging te houden", sub: "Tegen stilstaande lucht in hoeken." },
        { label: "Elektrische bouwkachel voor een koude werf", sub: "Onder 15 °C droogt het traag." }
      ]
    },
    {
      kop: "Plannen en prijzen",
      links: [
        { label: "Bereken uw pakket op oppervlakte en laagdikte" },
        { label: "Wat kost een bouwdroger huren?" },
        { label: "Levering en installatie in heel Vlaanderen" },
        { label: "Zelf afhalen in Aartselaar" }
      ]
    }
  ],
  verderLezenKicker: "Verder lezen",
  verderLezenTitel: "Verder lezen over pleisterwerk drogen",
  schemaNaam: "Pleisterwerk drogen",
  schemaBeschrijving: "Actieve droging van vers pleisterwerk met bouwdroger, ventilator en meting, zodat de schilder weken vroeger kan starten.",
  schemaType: "Bouwdroging",
  home: "Home",
  heroKicker: "Toepassing · pleisterwerk",
  heroH1: "Pleisterwerk drogen, zodat de schilder niet staat te wachten.",
  heroP: "Vers pleisterwerk geeft dagenlang water af aan de lucht. Staat het gebouw dicht, dan blijft dat water binnen en stopt de droging zodra de lucht verzadigd is. Wij halen het eruit met de juiste toestellen, meten de restvochtigheid bij de start en bij de oplevering, en geven u een datum waarop uw schilder kan starten.",
  ctaPakket: "Bereken uw droogpakket",
  heroAlt: "Vers gipspleister met donkere vochtzones naast al drogend pleisterwerk",
  badge: `${kortsteTermijn} tot ${langsteTermijn} weken`,
  badgeSub: "met een droogpakket, naar laagdikte",
  vsKicker: "Het verschil",
  vsH2: "Het vocht gaat de muur uit, niet vanzelf het huis uit.",
  vsLede: "Een pleisterlaag geeft haar water vlot af; dat is het makkelijke deel. Het moeilijke deel is wat er daarna met dat water gebeurt. In een dichtgemaakt gebouw hangt het in de lucht tot die verzadigd is, en vanaf dat punt droogt er niets meer.",
  vsZonder: "Zonder bouwdroger",
  vsMet: "Met een Vernast-droogpakket",
  tKicker: "Huurtermijn per laagdikte",
  tH2: "Welke termijn hoort bij uw pleisterwerk?",
  tLede: "De dikte van de laag bepaalt de termijn, niet uw oppervlakte: een grotere woning krijgt meer toestellen, geen langere huur. Een dubbele laag betekent dubbel zoveel aanmaakwater dat door hetzelfde oppervlak naar buiten moet.",
  tCaption: "Huurtermijn van een pleisterpakket per laagdikte, en van het combipakket met chape",
  tKolDikte: "Laagdikte",
  tKolMet: "Met een droogpakket",
  tKolWaar: "Waar u die dikte tegenkomt",
  rijEerste: "De gangbare binnenbepleistering: gips, machinaal in één laag.",
  rijMidden: "Een dikkere opbouw of een uitvlaklaag op een muur die niet recht staat.",
  rijLaatste: "Zwaar werk in meerdere lagen, zoals een cementering in een natte ruimte.",
  rijBeide: "Pleister + chape",
  rijBeideWaar: "Een nieuwbouw waar muren en vloer tegelijk nat staan, in één pakket.",
  termijn: (r) => termijnLabel(r),
  tNote: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Deze termijnen zijn wat onze pakketten voorzien, inclusief voor- en nameting. Waarom het vocht in een dichtgemaakt huis blijft hangen, wat er anders is bij cementgebonden werk en wanneer u mag schilderen, staat in",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/gids/hoe-lang-moet-pleisterwerk-drogen"), children: "onze gids over de droogtijd van pleisterwerk" }),
    ". Geen enkele termijn vervangt een meting."
  ] }),
  wKicker: "Zo verloopt het",
  wH2: "Van leverdag tot vrijgave van de muren.",
  wLede: "U hoeft zelf niets op te meten of in te stellen. Dit is wat er gebeurt vanaf het moment dat u de datum doorgeeft tot het moment dat uw schilder kan starten.",
  pKicker: "Welk toestel",
  pH2: "Het toestel dat bij uw ruimte past.",
  pLede: "Pleisterwerk beslaat alle muren en plafonds, dus telt het volume van de ruimte en niet alleen het aantal vierkante meter muur. De Calculator rekent dat volume door naar de juiste combinatie, met een ventilator tegen stilstaande lucht en een bouwkachel als uw werf te koud staat.",
  pNote: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("b", { children: "Liever zelf ophalen?" }),
    " Losse bouwdrogers, ventilatoren en bouwkachels haalt u aan afhaalprijs op in ons ",
    /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/afhalen"), children: "afhaalpunt langs de A12 in Aartselaar" }),
    ". De vochtmeting en de Drooggarantie horen dan niet bij de huur, maar het toestel is hetzelfde."
  ] }),
  mKicker: "De oplevering",
  mH2: "Wanneer mag de schilder komen?",
  mP1: "Een muur die egaal licht is en droog aanvoelt, kan vanbinnen nog nat zijn. Verf op zo'n ondergrond kan bladderen of vlekken, en behang sluit het restvocht helemaal op. Daarom beslist een meting en niet de kleur van de muur.",
  mP2: (rapport) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("b", { children: "Wij meten bij de start en bij de oplevering." }),
    " Die twee waarden zitten in elk pakket, zodat niemand op gevoel moet beslissen. Heeft u een ondertekend verslag nodig voor uw schilder of uw bouwdossier, dan neemt u een officieel vochtrapport bij",
    rapport ? ` voor ${rapport}` : "",
    "."
  ] }),
  mP3: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("b", { children: "Uw schilder bepaalt de grens." }),
    " Hij kent zijn verf en zijn grondlaag; vraag hem vooraf welke waarde hij wil zien en of hij dampopen begint. Hoe die meting gebeurt, leest u in",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/gids/hoe-lang-moet-pleisterwerk-drogen"), children: "onze gids over de droogtijd van pleisterwerk" }),
    "."
  ] }),
  chips: ["Voormeting", "Nameting", "Vochtrapport op aanvraag", "Drooggarantie"],
  mAlt: "Vernast technicus meet de restvochtigheid van een bepleisterde muur",
  faqTitel: "Wat bouwheren ons vragen over pleisterwerk drogen.",
  rKicker: "Uit de praktijk",
  rH2: "Muren die we eerder drooglegden.",
  rLede: "Drie dossiers met de foto's van de werf zelf: wat er moest drogen, welke toestellen er stonden en hoe lang het duurde.",
  rAlle: "Alle projecten met bouwvocht bekijken",
  mbKicker: "Klaar om te starten",
  mbH3: "Geef ons uw oppervlakte en uw laagdikte, wij geven u een datum.",
  mbP: "De Calculator rekent uw volume door naar een pakket met de juiste toestellen en de juiste termijn. U kiest zelf de leverdag; wij plaatsen en meten.",
  mbAlt: "Vernast technicus noteert de meetresultaten",
  cKicker: "Een vraag over uw muren?",
  cTitel: "Twijfelt u over de termijn of het pakket?",
  cLede: "Geef ons uw oppervlakte, de laagdikte en wanneer de plafonneerder klaar is. U krijgt binnen één werkdag een voorstel van een droogspecialist.",
  cOnderwerpen: ["Advies over pleisterwerk drogen", "Pleisterwerk en chape samen", "Prijs en leverdatum", "Iets anders"],
  cPlaceholder: "Bv. nieuwbouw 180 m², gipspleister van 1 cm gezet op 5 november, schilder komt begin december."
};
const fr = {
  zonder: [
    "Les murs libèrent leur eau jusqu'à ce que l'air soit saturé, puis tout s'arrête",
    "De la condensation sur les vitres et les murs extérieurs froids, parfois des moisissures dans les coins",
    "Le peintre ne peut pas commencer et vous reporte après son chantier suivant",
    "Peint trop tôt : peinture qui cloque ou taches, et tout est à refaire"
  ],
  met: [
    `Une durée de location de ${kortsteTermijn} à ${langsteTermijn} semaines, selon l'épaisseur de la couche`,
    "L'humidité quitte le bâtiment au lieu de se condenser sur les vitres",
    "Une date de fin que vous pouvez communiquer à votre peintre ou tapissier",
    "Mesure de l'humidité résiduelle au démarrage et à la réception"
  ],
  stappen: [
    {
      title: "Vous choisissez le jour de livraison",
      desc: "Dès que le plafonnage a pris et que la surface est dure au toucher, vous réservez la date. Nous livrons dans toute la Flandre, généralement en quelques jours ouvrables, et vous recevez une plage horaire au lieu d'attendre toute la journée."
    },
    {
      title: "Mesure initiale avant tout démarrage",
      desc: "Le technicien relève l'humidité résiduelle des murs et l'humidité de l'air dans la pièce. C'est grâce à ce point de départ que nous pouvons vous donner une date de fin plutôt qu'une estimation."
    },
    {
      title: "Installation et réglage",
      desc: "Il place les appareils au centre de la pièce, à distance des murs, raccorde l'évacuation des condensats et règle la valeur cible. Ensuite, tout tourne jour et nuit ; l'hygrostat se met de lui-même en veille dès que l'air est suffisamment sec."
    },
    {
      title: "De l'air en mouvement",
      desc: "Contre un mur frais stagne une couche d'air saturé, et dans les coins et derrière les portes, rien ne bouge. Un ventilateur balaie cette couche pour que l'air sec puisse capter l'humidité."
    },
    {
      title: "De la chaleur quand le chantier est froid",
      desc: "Un déshumidificateur à condensation fonctionne au mieux entre environ 15 et 25 °C. Si votre chantier est plus froid, nous ajoutons un chauffage de chantier électrique avec thermostat. Il chauffe la pièce de manière homogène, et non un seul mur de près."
    },
    {
      title: "Mesure finale et enlèvement",
      desc: "À la fin, nous mesurons à nouveau. Si la valeur est bonne, nous reprenons les appareils et votre peintre ou tapissier peut commencer. Si elle ne l'est pas, nous prolongeons gratuitement jusqu'à ce qu'elle le soit."
    }
  ],
  faqs: [
    {
      q: "Combien coûte le séchage d'un plafonnage ?",
      a: "Cela dépend du volume de la pièce et de l'épaisseur de la couche : ces deux éléments déterminent le nombre d'appareils nécessaires et la durée pendant laquelle ils restent sur place. Le calculateur de séchage vous demande votre surface et l'épaisseur de la couche et affiche aussitôt le pack avec son prix, livraison, installation et mesures comprises. Tous les tarifs à la journée et à la semaine figurent aussi séparément sur notre page des prix."
    },
    {
      q: "Quand peut-on allumer le déshumidificateur après le plafonnage ?",
      a: "Dès que la surface est dure, généralement plus tôt que pour une chape. Ce qu'il ne faut pas faire ces premiers jours, c'est sécher à outrance ou placer un chauffage juste devant un mur : la surface sèche tandis que la couche en dessous est encore humide, ce qui provoque des fissures de retrait ou une couche superficielle poudreuse. Chauffez de manière homogène, puis laissez l'appareil tourner jour et nuit."
    },
    {
      q: "Dois-je ouvrir les fenêtres pendant que le déshumidificateur tourne ?",
      a: "Non, gardez-les fermées. Un déshumidificateur à condensation sèche l'air d'un espace fermé ; si une fenêtre est ouverte, il fait sans cesse entrer de l'air extérieur humide et sèche la rue au lieu de vos murs. Aérer n'aide que si l'air extérieur est plus sec que l'air intérieur, et en Belgique ce n'est pas le cas une grande partie de l'année."
    },
    {
      q: "Quand le peintre ou le tapissier peut-il venir ?",
      a: "Quand une mesure confirme que la couche est sèche, pas quand le mur paraît uniformément clair. Une peinture sur un support trop humide peut cloquer ou tacher, et un papier peint enferme complètement l'humidité résiduelle : des moisissures s'y développent, que vous ne verrez que des mois plus tard. Demandez à votre peintre quelle valeur il souhaite voir et quelle première couche il utilise ; une sous-couche perméable à la vapeur laisse le mur continuer à respirer."
    },
    {
      q: "Puis-je faire sécher plafonnage et chape en même temps ?",
      a: BEIDE ? `Oui, et dans une nouvelle construction, c'est d'ailleurs la marche normale. Il existe pour cela un pack qui sèche sol et murs ensemble, avec une durée de location de ${termijnLabelFr(
        BEIDE
      )}. Vous louez alors une seule fois et mesurez une seule fois, au lieu de deux séchages successifs. Sécher les deux ensemble demande toutefois plus de capacité, car beaucoup plus d'eau se libère dans le même espace ; le calculateur en tient compte.` : "Oui, et dans une nouvelle construction, c'est d'ailleurs la marche normale. Sécher les deux ensemble demande toutefois plus de capacité que l'un des deux séparément, car beaucoup plus d'eau se libère dans le même espace. Le calculateur détermine le pack qui convient."
    },
    {
      q: "Et si mes murs ne sont pas secs à la date de fin ?",
      a: "Nous prolongeons alors gratuitement jusqu'à ce qu'ils le soient. C'est la garantie de séchage, valable pour chaque pack calculé via le calculateur et réservé avec livraison et installation. Elle repose sur la mesure au démarrage et à la réception : sans ces deux mesures, il n'y a rien à quoi comparer une date de fin."
    },
    {
      q: "Puis-je enlever moi-même les appareils ?",
      a: "Oui, vous pouvez enlever des déshumidificateurs de chantier, des ventilateurs et des chauffages de chantier à la pièce à notre point d'enlèvement le long de l'A12 à Aartselaar. Vous ne payez alors ni transport ni installation, mais c'est vous qui déterminez l'installation, et la mesure d'humidité et la garantie de séchage ne sont pas comprises dans la location. L'appareil lui-même est identique."
    },
    {
      q: "Combien de temps un plafonnage doit-il sécher ?",
      a: `Avec un pack de séchage, nos durées pour un plafonnage sont de ${opsommingFr(
        PLEISTER
      )}. Sans déshumidificateur, aucune durée ne peut être promise : c'est alors l'humidité de l'air dans votre bâtiment qui dicte le rythme, et dans une maison froide et fermée, le séchage s'arrête au lieu de simplement ralentir. L'explication complète, avec la différence entre enduit au plâtre et enduit au ciment, se trouve dans notre guide sur le temps de séchage d'un plafonnage.`
    }
  ],
  verderLezen: [
    {
      kop: "Combien de temps et pourquoi",
      links: [
        { label: "Guide : combien de temps un plafonnage doit-il sécher ?" },
        { label: "Comment un déshumidificateur de chantier retire l'humidité d'une habitation" },
        { label: "Notre garantie de séchage à 100 % sur un pack calculé" },
        { label: "Sécher chape et plafonnage ensemble dans une nouvelle construction" }
      ]
    },
    {
      kop: "Les appareils pour sécher un plafonnage",
      links: [
        { label: "Performance", sub: "L'appareil standard pour une maison neuve." },
        { label: "Ventilateur pour garder l'air en mouvement", sub: "Contre l'air stagnant dans les coins." },
        { label: "Chauffage de chantier électrique pour un chantier froid", sub: "Sous 15 °C, le séchage est lent." }
      ]
    },
    {
      kop: "Planning et prix",
      links: [
        { label: "Calculez votre pack selon la surface et l'épaisseur de la couche" },
        { label: "Combien coûte la location d'un déshumidificateur de chantier ?" },
        { label: "Livraison et installation dans toute la Flandre" },
        { label: "Enlèvement sur place à Aartselaar" }
      ]
    }
  ],
  verderLezenKicker: "Pour aller plus loin",
  verderLezenTitel: "En savoir plus sur le séchage de plafonnage",
  schemaNaam: "Séchage de plafonnage",
  schemaBeschrijving: "Séchage actif d'un plafonnage frais avec déshumidificateur de chantier, ventilateur et mesure, pour que le peintre puisse commencer des semaines plus tôt.",
  schemaType: "Séchage de chantier",
  home: "Accueil",
  heroKicker: "Application · plafonnage",
  heroH1: "Sécher le plafonnage, pour que le peintre n'attende pas.",
  heroP: "Un plafonnage frais libère de l'eau dans l'air pendant des jours. Si le bâtiment est fermé, cette eau reste à l'intérieur et le séchage s'arrête dès que l'air est saturé. Nous l'évacuons avec les bons appareils, mesurons l'humidité résiduelle au démarrage et à la réception, et vous donnons une date à laquelle votre peintre peut commencer.",
  ctaPakket: "Calculez votre pack de séchage",
  heroAlt: "Enduit au plâtre frais avec des zones humides foncées à côté d'un plafonnage déjà en train de sécher",
  badge: `${kortsteTermijn} à ${langsteTermijn} semaines`,
  badgeSub: "avec un pack de séchage, selon l'épaisseur",
  vsKicker: "La différence",
  vsH2: "L'humidité sort du mur, mais ne quitte pas la maison d'elle-même.",
  vsLede: "Une couche de plafonnage libère facilement son eau ; c'est la partie simple. Le plus difficile, c'est ce qui arrive ensuite à cette eau. Dans un bâtiment fermé, elle reste dans l'air jusqu'à saturation, et à partir de là, plus rien ne sèche.",
  vsZonder: "Sans déshumidificateur",
  vsMet: "Avec un pack de séchage Vernast",
  tKicker: "Durée de location par épaisseur",
  tH2: "Quelle durée pour votre plafonnage ?",
  tLede: "C'est l'épaisseur de la couche qui détermine la durée, pas votre surface : une habitation plus grande reçoit plus d'appareils, pas une location plus longue. Une couche deux fois plus épaisse, c'est deux fois plus d'eau de gâchage qui doit sortir par la même surface.",
  tCaption: "Durée de location d'un pack plafonnage par épaisseur de couche, et du pack combiné avec chape",
  tKolDikte: "Épaisseur de couche",
  tKolMet: "Avec un pack de séchage",
  tKolWaar: "Où l'on rencontre cette épaisseur",
  rijEerste: "Le plafonnage intérieur courant : plâtre, projeté à la machine en une couche.",
  rijMidden: "Une couche plus épaisse ou un ragréage sur un mur qui n'est pas droit.",
  rijLaatste: "Un travail lourd en plusieurs couches, comme un cimentage dans une pièce humide.",
  rijBeide: "Plafonnage + chape",
  rijBeideWaar: "Une nouvelle construction où murs et sol sont humides en même temps, en un seul pack.",
  termijn: (r) => termijnLabelFr(r),
  tNote: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Ces durées correspondent à ce que prévoient nos packs, mesures initiale et finale comprises. Pourquoi l'humidité reste dans une maison fermée, ce qui change pour un travail à base de ciment et quand vous pouvez peindre, vous le trouverez dans",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/gids/hoe-lang-moet-pleisterwerk-drogen"), children: "notre guide sur le temps de séchage d'un plafonnage" }),
    ". Aucune durée ne remplace une mesure."
  ] }),
  wKicker: "Comment ça se passe",
  wH2: "Du jour de livraison à la libération des murs.",
  wLede: "Vous n'avez rien à mesurer ni à régler vous-même. Voici ce qui se passe entre le moment où vous nous communiquez la date et celui où votre peintre peut commencer.",
  pKicker: "Quel appareil",
  pH2: "L'appareil adapté à votre espace.",
  pLede: "Le plafonnage recouvre tous les murs et plafonds : c'est donc le volume de la pièce qui compte, pas seulement le nombre de mètres carrés de mur. Le calculateur convertit ce volume en la bonne combinaison, avec un ventilateur contre l'air stagnant et un chauffage de chantier si votre chantier est trop froid.",
  pNote: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("b", { children: "Vous préférez enlever vous-même ?" }),
    " Vous pouvez enlever des déshumidificateurs de chantier, des ventilateurs et des chauffages de chantier à la pièce au tarif enlèvement à notre ",
    /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/afhalen"), children: "point d'enlèvement le long de l'A12 à Aartselaar" }),
    ". La mesure d'humidité et la garantie de séchage ne sont alors pas comprises dans la location, mais l'appareil est identique."
  ] }),
  mKicker: "La réception",
  mH2: "Quand le peintre peut-il venir ?",
  mP1: "Un mur uniformément clair et sec au toucher peut encore être humide à cœur. Une peinture sur un tel support peut cloquer ou tacher, et un papier peint enferme complètement l'humidité résiduelle. C'est pourquoi c'est une mesure qui décide, et non la couleur du mur.",
  mP2: (rapport) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("b", { children: "Nous mesurons au démarrage et à la réception." }),
    " Ces deux valeurs sont comprises dans chaque pack, pour que personne ne doive décider au jugé. Si vous avez besoin d'un rapport signé pour votre peintre ou votre dossier de construction, ajoutez un rapport d'humidité officiel",
    rapport ? ` pour ${rapport}` : "",
    "."
  ] }),
  mP3: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("b", { children: "C'est votre peintre qui fixe la limite." }),
    " Il connaît sa peinture et sa sous-couche ; demandez-lui à l'avance quelle valeur il souhaite voir et s'il commence avec une couche perméable à la vapeur. Comment se déroule cette mesure, vous le lirez dans",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/gids/hoe-lang-moet-pleisterwerk-drogen"), children: "notre guide sur le temps de séchage d'un plafonnage" }),
    "."
  ] }),
  chips: ["Mesure initiale", "Mesure finale", "Rapport d'humidité sur demande", "Garantie de séchage"],
  mAlt: "Un technicien Vernast mesure l'humidité résiduelle d'un mur plafonné",
  faqTitel: "Ce que les maîtres d'ouvrage nous demandent sur le séchage du plafonnage.",
  rKicker: "Sur le terrain",
  rH2: "Des murs que nous avons déjà séchés.",
  rLede: "Trois dossiers avec les photos du chantier lui-même : ce qui devait sécher, quels appareils étaient en place et combien de temps cela a pris.",
  rAlle: "Voir tous les projets d'humidité de construction",
  mbKicker: "Prêt à démarrer",
  mbH3: "Donnez-nous votre surface et l'épaisseur de la couche, nous vous donnons une date.",
  mbP: "Le calculateur convertit votre volume en un pack avec les bons appareils et la bonne durée. Vous choisissez vous-même le jour de livraison ; nous installons et mesurons.",
  mbAlt: "Un technicien Vernast note les résultats de mesure",
  cKicker: "Une question sur vos murs ?",
  cTitel: "Vous hésitez sur la durée ou le pack ?",
  cLede: "Donnez-nous votre surface, l'épaisseur de la couche et la date à laquelle le plafonneur aura terminé. Vous recevez dans un délai d'un jour ouvrable une proposition d'un spécialiste du séchage.",
  cOnderwerpen: ["Conseil pour sécher un plafonnage", "Plafonnage et chape ensemble", "Prix et date de livraison", "Autre chose"],
  cPlaceholder: "P. ex. nouvelle construction 180 m², enduit au plâtre de 1 cm posé le 5 novembre, le peintre vient début décembre."
};
const en = {
  zonder: [
    "The walls release moisture until the air is saturated, and then it stops",
    "Condensation on windows and cold outside walls, sometimes mould in the corners",
    "The painter cannot start and moves you down the list behind his next site",
    "Painted too early: peeling paint or stains, and starting all over again"
  ],
  met: [
    `A hire period of ${kortsteTermijn} to ${langsteTermijn} weeks, depending on the thickness of the coat`,
    "The moisture leaves the building instead of condensing on the glass",
    "An end date you can pass on to your painter or decorator",
    "Residual moisture reading at the start and at handover"
  ],
  stappen: [
    {
      title: "You choose the delivery day",
      desc: "As soon as the plaster has set and the surface feels hard, you book the date. We deliver throughout Flanders, usually within a few working days, and you get a time slot instead of waiting in all day."
    },
    {
      title: "An initial reading before anything runs",
      desc: "The technician records the residual moisture in the walls and the humidity in the room. That starting point is why we can give you an end date instead of an estimate."
    },
    {
      title: "Setting up and adjusting",
      desc: "He places the units centrally in the room, away from the walls, connects the condensate drain and sets the target value. After that everything runs day and night; the humidistat throttles back by itself as soon as the air is dry enough."
    },
    {
      title: "Keeping the air moving",
      desc: "A layer of saturated air clings to a freshly plastered wall, and in corners and behind doors nothing moves at all. A fan sweeps that layer away, so dry air can pick up the moisture."
    },
    {
      title: "Heat when the site is cold",
      desc: "A condensation dehumidifier works best between roughly 15 and 25 °C. If your site is colder, we add an electric site heater with a thermostat. It heats the room evenly, rather than one wall at close range."
    },
    {
      title: "Final reading and collection",
      desc: "At the end we measure again. If the value is right, we collect the units and your painter or decorator can start. If it is not, we extend free of charge until it is."
    }
  ],
  faqs: [
    {
      q: "What does it cost to dry plasterwork?",
      a: "That depends on the volume of the room and the thickness of the coat: those two determine how many units are needed and how long they stay. The drying calculator asks for your floor area and the thickness of the coat and immediately shows the package with its price, including delivery, installation and the moisture readings. All daily and weekly rates are also listed separately on our prices page."
    },
    {
      q: "When can the construction dehumidifier go on after plastering?",
      a: "As soon as the surface is hard, which is usually sooner than with a screed. What you should not do in those first days is dry it very hard or put a heater right in front of a wall: the surface then dries out while the layer underneath is still wet, which causes shrinkage cracks or a powdery top layer. Heat evenly, and then let the unit run day and night."
    },
    {
      q: "Should I open the windows while the dehumidifier is running?",
      a: "No, keep them closed. A condensation dehumidifier dries the air in a closed room; if a window is open, it keeps drawing in fresh, damp outside air and dries the street instead of your walls. Ventilating only helps if the outside air is drier than the air inside, and in Belgium that is not the case for much of the year."
    },
    {
      q: "When can the painter or decorator come in?",
      a: "When a moisture reading confirms that the coat is dry, not when the wall looks evenly light. Paint on a substrate that is too wet can peel or stain, and wallpaper traps the residual moisture completely: mould then grows behind it that you only see months later. Ask your painter which value he wants to see and which first coat he uses; a vapour-permeable primer lets the wall keep breathing."
    },
    {
      q: "Can I have plaster and screed dried together?",
      a: BEIDE ? `Yes, and in a new build that is the normal way of doing things. There is a package for that which dries floor and walls together, with a hire period of ${termijnLabelEn(
        BEIDE
      )}. You then hire once and measure once, instead of two drying rounds one after the other. Drying both together does need more capacity, because much more water is released in the same space; the calculator works that out.` : "Yes, and in a new build that is the normal way of doing things. Drying both together does need more capacity than either one separately, because much more water is released in the same space. The calculator works out which package goes with it."
    },
    {
      q: "What if my walls are not dry by the end date?",
      a: "Then we extend free of charge until they are. That is the drying guarantee, and it applies to every package calculated with the calculator and booked with delivery and installation. It relies on the readings at the start and at handover: without those two readings there is nothing to check an end date against."
    },
    {
      q: "Can I collect the units myself?",
      a: "Yes, you can collect individual construction dehumidifiers, fans and site heaters from our collection point along the A12 in Aartselaar. You then pay no transport and no installation, but you decide the set-up yourself, and the moisture reading and the drying guarantee are not included in the hire. The unit itself is the same."
    },
    {
      q: "How long does plaster take to dry?",
      a: `With a drying package, our plaster hire periods are ${opsommingEn(
        PLEISTER
      )}. Without a dehumidifier no hire period can be promised: the humidity in your building then sets the pace, and in a cold, closed-up house drying comes to a standstill rather than just slowing down. The full explanation, including the difference between gypsum and cement plaster, is in our guide to plaster drying time.`
    }
  ],
  verderLezen: [
    {
      kop: "How long it takes and why",
      links: [
        { label: "Guide: how long does plaster take to dry?" },
        { label: "How a construction dehumidifier draws moisture out of a home" },
        { label: "Our 100% drying guarantee on a calculated package" },
        { label: "Drying screed and plaster together in a new build" }
      ]
    },
    {
      kop: "The units for drying plaster",
      links: [
        { label: "Performance", sub: "The standard unit for a new-build home." },
        { label: "Fan to keep the air moving", sub: "Against still air in corners." },
        { label: "Electric site heater for a cold site", sub: "Below 15 °C, drying is slow." }
      ]
    },
    {
      kop: "Planning and prices",
      links: [
        { label: "Calculate your package by floor area and coat thickness" },
        { label: "What does dehumidifier hire cost?" },
        { label: "Delivery and installation throughout Flanders" },
        { label: "Collect it yourself in Aartselaar" }
      ]
    }
  ],
  verderLezenKicker: "Further reading",
  verderLezenTitel: "More about plaster drying",
  schemaNaam: "Plaster drying",
  schemaBeschrijving: "Active drying of fresh plasterwork with a construction dehumidifier, fan and moisture readings, so the painter can start weeks earlier.",
  schemaType: "Construction drying",
  home: "Home",
  heroKicker: "Application · plasterwork",
  heroH1: "Plaster drying, so the painter is not left waiting.",
  heroP: "Fresh plaster releases water into the air for days. If the building is closed up, that water stays inside and drying stops as soon as the air is saturated. We take it out with the right units, measure the residual moisture at the start and at handover, and give you a date on which your painter can start.",
  ctaPakket: "Calculate your drying package",
  heroAlt: "Fresh gypsum plaster with dark damp patches next to plasterwork that is already drying",
  badge: `${kortsteTermijn} to ${langsteTermijn} weeks`,
  badgeSub: "with a drying package, by coat thickness",
  vsKicker: "The difference",
  vsH2: "The moisture leaves the wall, but not the house by itself.",
  vsLede: "A coat of plaster gives up its water readily; that is the easy part. The hard part is what happens to that water next. In a closed-up building it hangs in the air until the air is saturated, and from that point on nothing dries any more.",
  vsZonder: "Without a construction dehumidifier",
  vsMet: "With a Vernast drying package",
  tKicker: "Hire period by coat thickness",
  tH2: "Which hire period suits your plasterwork?",
  tLede: "The thickness of the coat determines the hire period, not your floor area: a bigger home gets more units, not a longer hire. A double coat means twice as much mixing water that has to leave through the same surface.",
  tCaption: "Hire period of a plaster package by coat thickness, and of the combined package with screed",
  tKolDikte: "Coat thickness",
  tKolMet: "With a drying package",
  tKolWaar: "Where you come across that thickness",
  rijEerste: "Standard interior plastering: gypsum, machine-applied in a single coat.",
  rijMidden: "A thicker build-up or a levelling coat on a wall that is not straight.",
  rijLaatste: "Heavy work in several coats, such as cement rendering in a wet room.",
  rijBeide: "Plaster + screed",
  rijBeideWaar: "A new build where walls and floor are wet at the same time, in one package.",
  termijn: (r) => termijnLabelEn(r),
  tNote: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "These hire periods are what our packages provide for, including the initial and final readings. Why moisture lingers in a closed-up house, what is different with cement-based work and when you can paint is explained in",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/gids/hoe-lang-moet-pleisterwerk-drogen"), children: "our guide to plaster drying time" }),
    ". No hire period replaces a moisture reading."
  ] }),
  wKicker: "How it works",
  wH2: "From delivery day to signing off the walls.",
  wLede: "You do not have to measure or set anything yourself. This is what happens from the moment you give us the date until the moment your painter can start.",
  pKicker: "Which unit",
  pH2: "The unit that suits your space.",
  pLede: "Plaster covers every wall and ceiling, so what counts is the volume of the room, not just the number of square metres of wall. The calculator converts that volume into the right combination, with a fan against still air and a site heater if your site is too cold.",
  pNote: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("b", { children: "Rather collect it yourself?" }),
    " You can pick up individual construction dehumidifiers, fans and site heaters at the collection rate from our",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/afhalen"), children: "collection point along the A12 in Aartselaar" }),
    ". The moisture reading and the drying guarantee are then not included in the hire, but the unit is the same."
  ] }),
  mKicker: "The handover",
  mH2: "When can the painter come in?",
  mP1: "A wall that is evenly light and feels dry can still be wet inside. Paint on such a substrate can peel or stain, and wallpaper traps the residual moisture completely. That is why a reading decides, not the colour of the wall.",
  mP2: (rapport) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("b", { children: "We measure at the start and at handover." }),
    " Both values are included in every package, so nobody has to decide by feel. If you need a signed report for your painter or your building file, add an official moisture report",
    rapport ? ` for ${rapport}` : "",
    "."
  ] }),
  mP3: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("b", { children: "Your painter sets the limit." }),
    " He knows his paint and his primer; ask him beforehand which value he wants to see and whether he starts with a vapour-permeable coat. How that reading is taken is explained in",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/gids/hoe-lang-moet-pleisterwerk-drogen"), children: "our guide to plaster drying time" }),
    "."
  ] }),
  chips: ["Initial reading", "Final reading", "Moisture report on request", "Drying guarantee"],
  mAlt: "Vernast technician measuring the residual moisture of a plastered wall",
  faqTitel: "What homeowners ask us about plaster drying.",
  rKicker: "In practice",
  rH2: "Walls we have dried before.",
  rLede: "Three projects with photos from the site itself: what had to dry, which units were in place and how long it took.",
  rAlle: "View all construction moisture projects",
  mbKicker: "Ready to start",
  mbH3: "Give us your floor area and coat thickness, and we will give you a date.",
  mbP: "The calculator converts your volume into a package with the right units and the right hire period. You choose the delivery day; we install and measure.",
  mbAlt: "Vernast technician noting down the readings",
  cKicker: "A question about your walls?",
  cTitel: "Unsure about the hire period or the package?",
  cLede: "Give us your floor area, the coat thickness and when the plasterer will be finished. Within one working day you will receive a proposal from a drying specialist.",
  cOnderwerpen: ["Advice on plaster drying", "Plaster and screed together", "Price and delivery date", "Something else"],
  cPlaceholder: "E.g. new build 180 m², 1 cm gypsum plaster applied on 5 November, painter coming in early December."
};
const COPY = { nl, fr, en };
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/PleisterwerkDrogenPage.tsx");
const RAPPORT = EXTRAS.find((x) => x.k === "rapport");
const STAP_ICONEN = [CalendarCheckIcon, GaugeIcon, HouseIcon, WindIcon, ThermoIcon, BrushIcon];
const REFERENTIES = ["pleisterwerk-drogen-merksem", "pleisterwerk-drogen-berchem", "pleisterwerk-drogen-sint-pieters-woluwe"].map(getRealisatie).filter((r) => !!r);
const LEES_DOELEN = [
  [
    { to: "/gids/hoe-lang-moet-pleisterwerk-drogen" },
    { to: "/hoe-drogen-werkt" },
    { to: "/drooggarantie" },
    { to: "/nieuwbouw-drogen" }
  ],
  [
    { to: toestelPad("ttk350"), toestel: "ttk350" },
    { to: toestelPad("radiaal2250"), toestel: "radiaal2250" },
    { to: toestelPad("teddh30"), toestel: "teddh30" }
  ],
  [{ to: "/verhuur/calculator" }, { to: "/prijzen" }, { to: "/levering" }, { to: "/afhalen" }]
];
const PleisterwerkDrogenPage = () => {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const taal = useTaal();
  const toon = useToonBedrag();
  const seo = useSeo("pleisterwerkDrogen");
  const rapportPrijs = RAPPORT ? taal === "nl" ? `${euro(RAPPORT.price)} excl. btw` : `${toon(RAPPORT.price).tekst} ${toon(RAPPORT.price).label}` : null;
  const verderLezen = t.verderLezen.map((g, gi) => ({
    kop: g.kop,
    links: g.links.map((l, li) => ({
      ...l,
      to: lp(LEES_DOELEN[gi][li].to),
      toestel: LEES_DOELEN[gi][li].toestel
    }))
  }));
  return /* @__PURE__ */ jsxs("div", { className: "v3c nb-page", children: [
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        ...seo,
        jsonLd: [
          serviceSchema({
            name: t.schemaNaam,
            description: t.schemaBeschrijving,
            path: lp("/pleisterwerk-drogen"),
            serviceType: t.schemaType
          }),
          faqSchema(t.faqs.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema([
            { name: t.home, path: lp("/") },
            { name: t.schemaNaam, path: lp("/pleisterwerk-drogen") }
          ])
        ]
      }
    ),
    /* @__PURE__ */ jsx(V3Header, { lightAfter: 420 }),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("div", { className: "redtop", children: /* @__PURE__ */ jsx("section", { className: "hero", children: /* @__PURE__ */ jsxs("div", { className: "wrap hero-grid", children: [
        /* @__PURE__ */ jsxs("div", { className: "hero-copy", children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.heroKicker }),
          /* @__PURE__ */ jsx("h1", { children: t.heroH1 }),
          /* @__PURE__ */ jsx("p", { children: t.heroP }),
          /* @__PURE__ */ jsxs("div", { className: "hcta", children: [
            /* @__PURE__ */ jsxs(Link, { className: "btn btn-white", to: lp("/verhuur/calculator"), children: [
              t.ctaPakket,
              /* @__PURE__ */ jsx(ArrowRightIcon, {})
            ] }),
            /* @__PURE__ */ jsxs("a", { className: "btn btn-ghost", href: `tel:${CONTACT.phoneE164}`, children: [
              /* @__PURE__ */ jsx(PhoneIcon, {}),
              " ",
              CONTACT.phoneLocal
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hero-vis", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: "framed",
              src: "/vernast/droogproces-nat-pleister.webp",
              alt: t.heroAlt,
              width: 800,
              height: 600,
              loading: "lazy",
              decoding: "async"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "fbadge", style: { bottom: "60px", left: "-6%" }, children: [
            /* @__PURE__ */ jsx("span", { className: "ic", children: /* @__PURE__ */ jsx(CheckIcon, { size: 15 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              t.badge,
              /* @__PURE__ */ jsx("small", { children: t.badgeSub })
            ] })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "sw", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.vsKicker }),
          /* @__PURE__ */ jsx("h2", { className: "sec", children: t.vsH2 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.vsLede })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "vs", children: [
          /* @__PURE__ */ jsxs(Reveal, { from: "up", className: "vscard", children: [
            /* @__PURE__ */ jsxs("div", { className: "vshead", children: [
              /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(XIcon, { size: 17 }) }),
              /* @__PURE__ */ jsx("h3", { children: t.vsZonder })
            ] }),
            /* @__PURE__ */ jsx("ul", { children: t.zonder.map((item) => /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx(XIcon, { size: 14 }),
              /* @__PURE__ */ jsx("span", { children: item })
            ] }, item)) })
          ] }),
          /* @__PURE__ */ jsxs(Reveal, { from: "up", delay: 0.08, className: "vscard goed", children: [
            /* @__PURE__ */ jsxs("div", { className: "vshead", children: [
              /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(CheckIcon, { size: 17, strokeWidth: 3 }) }),
              /* @__PURE__ */ jsx("h3", { children: t.vsMet })
            ] }),
            /* @__PURE__ */ jsx("ul", { children: t.met.map((item) => /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx(CheckIcon, { size: 14, strokeWidth: 3 }),
              /* @__PURE__ */ jsx("span", { children: item })
            ] }, item)) })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sr", id: "termijnen", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.tKicker }),
          /* @__PURE__ */ jsx("h2", { className: "sec", children: t.tH2 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.tLede })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "tblwrap", children: /* @__PURE__ */ jsx("div", { className: "tblscroll", children: /* @__PURE__ */ jsxs("table", { className: "tbl", children: [
          /* @__PURE__ */ jsx("caption", { className: "sr-only", children: t.tCaption }),
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { scope: "col", children: t.tKolDikte }),
            /* @__PURE__ */ jsx("th", { scope: "col", children: t.tKolMet }),
            /* @__PURE__ */ jsx("th", { scope: "col", children: t.tKolWaar })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsxs("th", { scope: "row", children: [
                PLEISTER[0]?.dikte,
                " cm"
              ] }),
              /* @__PURE__ */ jsx("td", { children: PLEISTER[0] ? t.termijn(PLEISTER[0]) : "" }),
              /* @__PURE__ */ jsx("td", { children: t.rijEerste })
            ] }),
            PLEISTER.slice(1, -1).map((r) => /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsxs("th", { scope: "row", children: [
                r.dikte,
                " cm"
              ] }),
              /* @__PURE__ */ jsx("td", { children: t.termijn(r) }),
              /* @__PURE__ */ jsx("td", { children: t.rijMidden })
            ] }, r.dikte)),
            PLEISTER.length > 1 && /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsxs("th", { scope: "row", children: [
                PLEISTER[PLEISTER.length - 1].dikte,
                " cm"
              ] }),
              /* @__PURE__ */ jsx("td", { children: t.termijn(PLEISTER[PLEISTER.length - 1]) }),
              /* @__PURE__ */ jsx("td", { children: t.rijLaatste })
            ] }),
            BEIDE && /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("th", { scope: "row", children: t.rijBeide }),
              /* @__PURE__ */ jsx("td", { children: t.termijn(BEIDE) }),
              /* @__PURE__ */ jsx("td", { children: t.rijBeideWaar })
            ] })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx("p", { className: "tblnote", children: t.tNote(lp) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sw", id: "werkwijze", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.wKicker }),
          /* @__PURE__ */ jsx("h2", { className: "sec", children: t.wH2 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.wLede })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "stapkaarten", children: t.stappen.map(({ title, desc }, i) => {
          const Icon = STAP_ICONEN[i];
          return /* @__PURE__ */ jsxs(Reveal, { from: "up", delay: i % 3 * 0.08, className: "stk", children: [
            /* @__PURE__ */ jsx("span", { className: "stkic", children: /* @__PURE__ */ jsx(Icon, { size: 21 }) }),
            /* @__PURE__ */ jsx("span", { className: "stknr", children: String(i + 1).padStart(2, "0") }),
            /* @__PURE__ */ jsx("h3", { children: title }),
            /* @__PURE__ */ jsx("p", { children: desc })
          ] }, title);
        }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sr", id: "pakketten", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "sec-head mid", children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.pKicker }),
          /* @__PURE__ */ jsx("h2", { className: "sec", children: t.pH2 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.pLede })
        ] }),
        /* @__PURE__ */ jsx(Pakketkaarten, {}),
        /* @__PURE__ */ jsx("div", { className: "note", children: t.pNote(lp) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sw", id: "meting", children: /* @__PURE__ */ jsxs("div", { className: "wrap split", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.mKicker }),
          /* @__PURE__ */ jsx("h2", { className: "sec", children: t.mH2 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.mP1 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.mP2(rapportPrijs) }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.mP3(lp) }),
          /* @__PURE__ */ jsx("div", { className: "chips", children: t.chips.map((c) => /* @__PURE__ */ jsx("span", { children: c }, c)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "split-vis", children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "cut vervaagd meterman",
            src: "/vernast/man-vochtmeter.webp",
            alt: t.mAlt,
            width: 1400,
            height: 933,
            loading: "lazy",
            decoding: "async"
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsx(
        FaqBlok,
        {
          titel: t.faqTitel,
          vragen: t.faqs,
          sleutel: "pleister-faq"
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "sw", id: "referenties", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "sec-head mid", children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.rKicker }),
          /* @__PURE__ */ jsx("h2", { className: "sec", children: t.rH2 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.rLede })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "refs", children: REFERENTIES.map((r, i) => /* @__PURE__ */ jsx(Reveal, { from: "up", delay: i % 3 * 0.08, children: /* @__PURE__ */ jsxs(Link, { className: "rz", to: lp(`/realisaties/${r.slug}`), children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: r.kaart,
              alt: r.kaartAlt,
              width: 640,
              height: 420,
              loading: "lazy",
              decoding: "async"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "rzt", children: [
            /* @__PURE__ */ jsx("span", { className: "rzl", children: r.locatie }),
            /* @__PURE__ */ jsx("h3", { children: r.titel })
          ] })
        ] }) }, r.slug)) }),
        /* @__PURE__ */ jsx("p", { className: "tblnote", style: { textAlign: "center" }, children: /* @__PURE__ */ jsx(Link, { to: lp("/realisaties?soort=bouwvocht"), style: { fontWeight: 600 }, children: t.rAlle }) }),
        /* @__PURE__ */ jsxs("div", { className: "manband", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-t", children: [
            /* @__PURE__ */ jsx("span", { className: "mbk", children: t.mbKicker }),
            /* @__PURE__ */ jsx("h3", { children: t.mbH3 }),
            /* @__PURE__ */ jsx("p", { children: t.mbP }),
            /* @__PURE__ */ jsxs("div", { className: "mb-cta", children: [
              /* @__PURE__ */ jsxs(Link, { className: "btn btn-white", to: lp("/verhuur/calculator"), children: [
                t.ctaPakket,
                /* @__PURE__ */ jsx(ArrowRightIcon, {})
              ] }),
              /* @__PURE__ */ jsxs("a", { className: "btn btn-ghost", href: `tel:${CONTACT.phoneE164}`, children: [
                /* @__PURE__ */ jsx(PhoneIcon, {}),
                " ",
                CONTACT.phoneLocal
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "img",
            {
              className: "mb-man",
              src: "/vernast/man-klembord-pen.webp",
              alt: t.mbAlt,
              width: 600,
              height: 900,
              loading: "lazy",
              decoding: "async"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(
        VerderLezen,
        {
          titel: t.verderLezenTitel,
          kicker: t.verderLezenKicker,
          groepen: verderLezen,
          achtergrond: "sr"
        }
      ),
      /* @__PURE__ */ jsx(
        ContactBlok,
        {
          kicker: t.cKicker,
          titel: t.cTitel,
          lede: t.cLede,
          onderwerpen: t.cOnderwerpen,
          placeholder: t.cPlaceholder,
          achtergrond: "wit"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(V3Footer, {})
  ] });
};
export {
  PleisterwerkDrogenPage as default
};

import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { P as PageMeta, C as CONTACT } from "./PageMeta-BXulEWcY.js";
import { l as V3Header, A as ArrowRightIcon, k as PhoneIcon, e as CheckIcon, g as CalendarCheckIcon, r as HouseIcon } from "./V3Header-BeIMcMg7.js";
import { V as V3Footer } from "./V3Footer-9z4J1I4x.js";
import { R as Reveal } from "./Reveal-NNPkAe35.js";
import { P as Pakketkaarten } from "./Pakketkaarten-Dd1w1Oyj.js";
import { C as ContactBlok } from "./ContactBlok-ykYeBJgi.js";
import { F as FaqBlok } from "./FaqBlok-Bkr2MHqW.js";
import { V as VerderLezen } from "./VerderLezen-BWBN-Dg6.js";
import { X as XIcon, a as WindIcon, T as ThermoIcon, G as GaugeIcon, b as LayersIcon } from "./icons-DTi5RvwE.js";
import { u as useSeo } from "./seo-BMvlJeai.js";
import { e as euro, s as serviceSchema, f as faqSchema, b as breadcrumbSchema } from "./schema-VJMHyxOJ.js";
import { E as EXTRAS, t as toestelPad } from "./verhuur-CgnDb-wO.js";
import { getRealisatie } from "./realisaties-eA_H-cxM.js";
import { u as useCopy, a as useLokaalPad, b as useTaal, c as useToonBedrag } from "../main.mjs";
import { d as droogtermijnen, n as natuurlijkeChapeWeken, b as termijnLabel } from "./droogtijden-B2lUiF15.js";
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
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/NieuwbouwPage.copy.tsx");
const CHAPE = droogtermijnen("chape");
const PLEISTER = droogtermijnen("pleister");
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
const kortsteTermijn = Math.min(...CHAPE.map((r) => r.min), ...PLEISTER.map((r) => r.min));
const langsteTermijn = Math.max(...CHAPE.map((r) => r.max), ...PLEISTER.map((r) => r.max));
const nl = {
  zonder: [
    "Maanden wachten, zeker in herfst en winter",
    "De vloerder kan niet starten en schuift uw plaats door",
    "Risico op schimmel achter plinten en onder de isolatie",
    "Eén uitgestelde fase schuift heel de afwerking op"
  ],
  met: [
    `Huurtermijn van ${kortsteTermijn} tot ${langsteTermijn} weken, volgens de dikte`,
    "De vloerder krijgt een datum waar hij op kan rekenen",
    "De lucht blijft droog, dus schimmel krijgt geen kans",
    "Vochtmeting bij de start en bij de oplevering"
  ],
  praktijk: [
    {
      title: "Begin pas als de chape mag drogen",
      desc: "Een verse zandcementchape moet eerst uitharden; wie meteen hard begint te drogen, riskeert krimpscheuren of een zwakke toplaag. Vraag uw chapeur vanaf wanneer u actief mag drogen, vaak na enkele dagen tot een week. Pleisterwerk kan meestal sneller aan de beurt, zodra het oppervlak hard is."
    },
    {
      title: "Houd de ruimte dicht",
      desc: "Een condensdroger haalt het vocht uit de lucht in de ruimte. Staan ramen of deuren open, dan droogt hij de buitenlucht mee en schiet de droging nauwelijks op. Verlucht alleen kort als het echt nodig is, bijvoorbeeld na werken met lijm of verf."
    },
    {
      title: "Zet er een ventilator bij",
      desc: "Boven een verse chape hangt een laag verzadigde lucht. Een radiaalventilator blaast die weg, zodat er telkens droge lucht bij de vloer komt. Dat scheelt dagen op dezelfde huurtermijn."
    },
    {
      title: "Verwarm bij minder dan 15 °C",
      desc: "Een condensdroger werkt het best tussen ongeveer 15 en 25 °C. Daaronder neemt de lucht weinig vocht op en geeft de chape haar water traag af. Een elektrische bouwkachel met thermostaat brengt de werf op temperatuur en houdt de droging op gang."
    },
    {
      title: "Volg de wateropvang",
      desc: "Hoeveel water er per dag uit het toestel komt, vertelt u waar u staat. Zakt de opbrengst, dan nadert de chape haar evenwicht, en dat is het moment om te laten meten."
    },
    {
      title: "Meet het restvocht vóór de vloer erop gaat",
      desc: "Parket, pvc en tegels verdragen maar een beperkte hoeveelheid restvocht; te vroeg leggen kan uitzetten, loskomen of schimmel onder de vloer geven. De gangbare meting is de CM-meting (carbidmethode), en de toegelaten waarde verschilt per soort chape, per vloerbekleding en met of zonder vloerverwarming. Vraag uw vloerlegger welke grens hij hanteert; wij meten bij de start en bij de oplevering."
    }
  ],
  /* `rapport`: de prijs van het vochtrapport zoals de pagina hem toont, of null. */
  faqs: (rapport) => [
    {
      q: "Hoe lang moet mijn chape drogen voor ik kan vloeren?",
      a: `Zonder hulp rekent men bij zandcementchape als vuistregel ongeveer een week per centimeter voor de eerste vier centimeter, en daarna twee weken per extra centimeter, voor 6 cm dus zo'n ${natuurlijkeChapeWeken(6)} weken, onder goede omstandigheden. Met een bouwdroger lopen onze chapepakketten ${opsomming(CHAPE)}. Of u effectief kunt vloeren, beslist een restvochtmeting, niet de kalender.`
    },
    {
      q: "Hoe lang moet pleisterwerk drogen voor ik kan schilderen?",
      a: `Met een bouwdroger lopen onze pleisterpakketten ${opsomming(PLEISTER)}. Pleisterwerk is droog als het overal gelijkmatig licht van kleur is en de meting dat bevestigt. Vraag uw schilder of verfleverancier welke vochtwaarde de verf verdraagt die hij gebruikt.`
    },
    {
      q: "Welk restvocht moet de chape hebben voor parket of tegels?",
      a: "Dat hangt af van het soort chape (zandcement of anhydriet), van de vloerbekleding en van eventuele vloerverwarming. De grens wordt uitgedrukt in procent restvocht en gemeten met een CM-meting (carbidmethode). Vraag uw vloerlegger welke waarde hij hanteert en laat hem die meting doen of aanvaarden vóór hij legt."
    },
    {
      q: "Mag ik de ramen openzetten terwijl de bouwdroger draait?",
      a: "Liefst niet. Een condensdroger haalt het vocht uit de lucht in de ruimte; staan ramen of deuren open, dan droogt hij ook de buitenlucht die binnenkomt en schiet de droging nauwelijks op. Houd de ruimte dicht en verlucht alleen kort als het echt nodig is, bijvoorbeeld na werken met lijm of verf."
    },
    {
      q: "Mag ik de vloerverwarming gebruiken om de chape te drogen?",
      a: "Alleen volgens het opstookprotocol van uw installateur of chapeur: langzaam en in stappen opwarmen. Te snel of te heet stoken kan scheuren geven. De bouwdroger kan ondertussen gewoon blijven draaien en voert het vocht af dat daarbij vrijkomt."
    },
    { q: "Kan ik meerdere machines combineren?", a: "Ja, voor grote werven leveren wij meerdere machines. Bel voor een voorstel." },
    {
      q: "Hoe werkt de gratis vochtmeting?",
      a: `Bij de start en bij de oplevering meten wij de restvochtigheid; dat zit in elk pakket. Heeft u een ondertekend verslag met alle meetwaarden nodig, voor uw vloerlegger of uw bouwdossier, dan kunt u een officieel vochtrapport bijnemen${rapport ? ` voor ${rapport}` : ""}.`
    }
  ],
  verderLezen: [
    {
      kop: "Wat drogen kost en hoe lang het duurt",
      links: [
        { label: "Gids: hoe lang moet een chape drogen?" },
        { label: "Gids: hoe lang moet pleisterwerk drogen?" },
        { label: "Hoe een bouwdroger het vocht uit een woning haalt" },
        { label: "Onze 100 % drooggarantie op een berekend pakket" }
      ]
    },
    {
      kop: "De toestellen voor chape en pleister",
      links: [
        { label: "Performance", sub: "Het standaardtoestel voor een nieuwbouwwoning." },
        { label: "Radiaalventilator voor chapedroging", sub: "Blaast vlak over de vloer." },
        { label: "Elektrische bouwkachel voor een koude werf", sub: "Onder 15 °C droogt het traag." }
      ]
    },
    {
      kop: "Plannen en prijzen",
      links: [
        { label: "Bereken uw pakket op oppervlakte en chapedikte" },
        { label: "Wat kost een bouwdroger huren?" },
        { label: "Bouwdroger huren in de provincie Antwerpen" },
        { label: "Bouwdroger huren in Limburg" }
      ]
    }
  ],
  verderLezenKicker: "Verder lezen",
  verderLezenTitel: "Verder lezen over chape en pleisterwerk drogen",
  schemaNaam: "Chape en pleisterwerk drogen",
  schemaBeschrijving: "Actieve droging van verse chape en pleisterwerk in nieuwbouw, zodat vloerder en schilder weken vroeger kunnen starten.",
  schemaType: "Bouwdroging",
  home: "Home",
  heroKicker: "Nieuwbouw & verbouwing",
  heroH1: "Chape en pleisterwerk drogen in weken, niet in maanden.",
  heroP: "In een nieuwbouwwoning zit al snel duizend liter water: in de chape, in het pleisterwerk, in het metselwerk. Dat moet eruit voor de vloerder en de schilder kunnen starten. Een bouwdroger, een ventilator en bij koud weer een bouwkachel halen het er gecontroleerd uit, in weken in plaats van maanden.",
  ctaPakket: "Bereken uw droogpakket",
  heroAlt: "Bouwdroger aan het werk op een verse chape in een nieuwbouwwoning",
  badge: `${kortsteTermijn} tot ${langsteTermijn} weken`,
  badgeSub: `in plaats van ± ${natuurlijkeChapeWeken(6)} weken natuurlijk`,
  vsKicker: "Het verschil",
  vsH2: "Natuurlijk drogen duurt zo lang als het weer beslist.",
  vsLede: `Een chape van 6 cm die op zichzelf droogt, doet daar onder goede omstandigheden zo'n ${natuurlijkeChapeWeken(6)} weken over. In november zijn die omstandigheden er niet, en dan wordt het wachten tot het voorjaar. Actief drogen haalt die onzekerheid eruit.`,
  vsZonder: "Zonder bouwdroger",
  vsMet: "Met een Vernast-droogpakket",
  dKicker: "Droogtijd per dikte",
  dH2: "Hoe lang moet chape drogen?",
  dLede1: "Een zandcementchape wordt nat aangebracht: er zit meer water in dan het cement nodig heeft om uit te harden, en dat overschot moet er via het oppervlak weer uit. Hoe dikker de laag, hoe langer de weg voor het vocht onderin. Daarom groeit de droogtijd sneller dan de dikte: de laatste centimeters duren het langst.",
  dLede2: "Met een bouwdroger houdt u de lucht boven de chape droog, zodat het vocht blijft uittreden in plaats van te blijven hangen. Onze chapepakketten zijn opgebouwd op de dikte van de laag; de huurtermijn hieronder is wat elk pakket voorziet.",
  dCaption: "Droogtijd van chape per dikte, met bouwdroger en zonder bouwdroger",
  dKolDikte: "Chapedikte",
  dKolMet: "Met bouwdroger (huurtermijn pakket)",
  dKolZonder: "Zonder bouwdroger (richtwaarde)",
  termijn: (r) => termijnLabel(r),
  natuurlijk: (dikte) => `± ${natuurlijkeChapeWeken(dikte)} weken`,
  dNote: "De richtwaarde zonder bouwdroger volgt de gangbare vuistregel voor zandcementchape: ongeveer een week per centimeter voor de eerste vier centimeter, daarna twee weken per extra centimeter, in een verluchte ruimte rond 20 °C. In een koude of vochtige periode duurt het langer. Anhydriet- en gietvloeren volgen andere regels; volg daar de richtlijn van de fabrikant. Geen van beide kolommen vervangt een meting.",
  plKicker: "En de muren",
  plH2: "Hoe lang moet pleisterwerk drogen?",
  plP1: "Pleisterwerk is dunner dan chape, maar het beslaat alle muren en plafonds. In een nieuwbouw komt dat vocht bovenop wat de chape al afgeeft, en precies dan zit de lucht in huis snel verzadigd: de muren drogen dan nauwelijks nog. Zeker in herfst en winter kan natuurlijk drogen daardoor veel langer duren dan de dikte doet vermoeden.",
  plP2: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Schildert of behangt u te vroeg, dan kan de verf bladderen of vlekken, en sluit u vocht in de muur op. Moeten pleisterwerk en chape samen drogen? Kies in de",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "Calculator" }),
    ' "pleisterwerk + chape": dat pakket is berekend op muren en vloer tegelijk.'
  ] }),
  plChips: ["Gipspleister", "Cementpleister", "Pleister + chape samen"],
  plCaption: "Huurtermijn van een pleisterpakket per pleisterdikte",
  plKolDikte: "Pleisterdikte",
  plKolTermijn: "Huurtermijn pakket",
  plNote: "Pleisterwerk is droog als het overal gelijkmatig licht van kleur is en de meting dat bevestigt. Vraag uw schilder welke vochtwaarde de verf verdraagt die hij gebruikt.",
  pKicker: "Welk toestel",
  pH2: "Kies het toestel dat bij uw woning past.",
  pLede: "Voor een standaard gezinswoning is de Performance het toestel dat we het vaakst leveren. Gaat het om een volledige woning, dan wordt het een droogpakket: de Calculator rekent uw volume en chapedikte door naar de juiste combinatie, met ventilator en bouwkachel waar uw werf die nodig heeft.",
  pNote: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("b", { children: "Liever zelf ophalen?" }),
    " Losse bouwdrogers, ventilatoren en bouwkachels haalt u aan afhaalprijs op in ons ",
    /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/afhalen"), children: "afhaalpunt langs de A12 in Aartselaar" }),
    ". De vochtmeting en de drooggarantie horen dan niet bij de huur, maar het toestel is hetzelfde."
  ] }),
  prKicker: "In de praktijk",
  prH2: "Zes dingen die de droogtijd bepalen.",
  prLede: "Het toestel is maar één factor. Wanneer u start, of de ruimte dicht blijft, hoe warm het is en wat u uiteindelijk meet, bepalen samen of die chape in twee of in vijf weken klaar is. Hieronder staan ze in de volgorde waarin u ze nodig heeft.",
  faqTitel: "Wat bouwheren en aannemers ons vragen.",
  rKicker: "Uit de praktijk",
  rH2: "Nieuwbouwwerven die we eerder droogden.",
  rLede: "Drie dossiers met de foto's van de werf zelf: wat er moest drogen, welke toestellen er stonden en hoe lang het duurde.",
  rAlle: "Alle nieuwbouwprojecten bekijken",
  mbKicker: "Klaar om te starten",
  mbH3: "Geef ons uw oppervlakte en uw chapedikte, wij geven u een datum.",
  mbP: "De Calculator rekent uw volume door naar een pakket met de juiste toestellen en de juiste termijn. U kiest zelf de leverdag; wij plaatsen en meten.",
  mbAlt: "Vernast technicus noteert de meetresultaten",
  cKicker: "Een vraag over uw werf?",
  cTitel: "Twijfelt u over de termijn of het pakket?",
  cLede: "Geef ons uw oppervlakte, de chapedikte en wanneer de chapeur klaar is. U krijgt binnen één werkdag een voorstel van een droogspecialist.",
  cOnderwerpen: [
    "Advies over chape drogen",
    "Advies over pleisterwerk drogen",
    "Pleisterwerk en chape samen",
    "Prijs en leverdatum",
    "Iets anders"
  ],
  cPlaceholder: "Bv. nieuwbouw 140 m², chape van 6 cm geplaatst op 3 november, vloerder komt begin december."
};
const fr = {
  zonder: [
    "Des mois d'attente, surtout en automne et en hiver",
    "Le poseur de sol ne peut pas commencer et repousse votre tour",
    "Risque de moisissures derrière les plinthes et sous l'isolation",
    "Une phase reportée décale toute la finition"
  ],
  met: [
    `Durée de location de ${kortsteTermijn} à ${langsteTermijn} semaines, selon l'épaisseur`,
    "Le poseur de sol reçoit une date sur laquelle il peut compter",
    "L'air reste sec, les moisissures n'ont donc aucune chance",
    "Mesure d'humidité au démarrage et à la réception"
  ],
  praktijk: [
    {
      title: "Ne commencez que lorsque la chape peut sécher",
      desc: "Une chape sable-ciment fraîche doit d'abord durcir ; sécher fort tout de suite, c'est risquer des fissures de retrait ou une couche supérieure fragile. Demandez à votre chapiste à partir de quand vous pouvez sécher activement, souvent après quelques jours à une semaine. Le plafonnage peut généralement être traité plus tôt, dès que la surface est dure."
    },
    {
      title: "Gardez la pièce fermée",
      desc: "Un déshumidificateur à condensation retire l'humidité de l'air de la pièce. Si des fenêtres ou des portes sont ouvertes, il sèche aussi l'air extérieur et le séchage n'avance guère. N'aérez que brièvement lorsque c'est vraiment nécessaire, par exemple après des travaux avec de la colle ou de la peinture."
    },
    {
      title: "Ajoutez un ventilateur",
      desc: "Au-dessus d'une chape fraîche stagne une couche d'air saturé. Un ventilateur radial la chasse, pour amener sans cesse de l'air sec au contact du sol. Cela fait gagner des jours sur la même durée de location."
    },
    {
      title: "Chauffez sous 15 °C",
      desc: "Un déshumidificateur à condensation fonctionne au mieux entre environ 15 et 25 °C. En dessous, l'air absorbe peu d'humidité et la chape libère lentement son eau. Un chauffage de chantier électrique avec thermostat porte le chantier à température et maintient le séchage."
    },
    {
      title: "Surveillez l'eau récupérée",
      desc: "La quantité d'eau que l'appareil récupère chaque jour vous indique où vous en êtes. Si le rendement baisse, la chape approche de son équilibre, et c'est le moment de faire mesurer."
    },
    {
      title: "Mesurez l'humidité résiduelle avant de poser le revêtement",
      desc: "Le parquet, le PVC et le carrelage ne tolèrent qu'une quantité limitée d'humidité résiduelle ; poser trop tôt peut provoquer du gonflement, des décollements ou des moisissures sous le sol. La mesure courante est la mesure CM (méthode au carbure), et la valeur admise varie selon le type de chape, le revêtement de sol et la présence ou non d'un chauffage par le sol. Demandez à votre poseur de sol quelle limite il applique ; nous mesurons au démarrage et à la réception."
    }
  ],
  faqs: (rapport) => [
    {
      q: "Combien de temps ma chape doit-elle sécher avant la pose du sol ?",
      a: `Sans aide, la règle empirique pour une chape sable-ciment est d'environ une semaine par centimètre pour les quatre premiers centimètres, puis deux semaines par centimètre supplémentaire, soit pour 6 cm environ ${natuurlijkeChapeWeken(6)} semaines, dans de bonnes conditions. Avec un déshumidificateur de chantier, nos packs chape sont de ${opsommingFr(CHAPE)}. C'est une mesure d'humidité résiduelle qui décide si vous pouvez effectivement poser le sol, pas le calendrier.`
    },
    {
      q: "Combien de temps un plafonnage doit-il sécher avant de peindre ?",
      a: `Avec un déshumidificateur de chantier, nos packs plafonnage sont de ${opsommingFr(PLEISTER)}. Un plafonnage est sec lorsqu'il est uniformément clair partout et que la mesure le confirme. Demandez à votre peintre ou à votre fournisseur de peinture quel taux d'humidité tolère la peinture utilisée.`
    },
    {
      q: "Quelle humidité résiduelle la chape doit-elle avoir pour du parquet ou du carrelage ?",
      a: "Cela dépend du type de chape (sable-ciment ou anhydrite), du revêtement de sol et d'un éventuel chauffage par le sol. La limite s'exprime en pourcentage d'humidité résiduelle et se mesure par une mesure CM (méthode au carbure). Demandez à votre poseur de sol quelle valeur il applique, et laissez-le effectuer ou accepter cette mesure avant de poser."
    },
    {
      q: "Puis-je ouvrir les fenêtres pendant que le déshumidificateur tourne ?",
      a: "De préférence pas. Un déshumidificateur à condensation retire l'humidité de l'air de la pièce ; si des fenêtres ou des portes sont ouvertes, il sèche aussi l'air extérieur qui entre et le séchage n'avance guère. Gardez la pièce fermée et n'aérez que brièvement lorsque c'est vraiment nécessaire, par exemple après des travaux avec de la colle ou de la peinture."
    },
    {
      q: "Puis-je utiliser le chauffage par le sol pour sécher la chape ?",
      a: "Uniquement selon le protocole de mise en chauffe de votre installateur ou chapiste : monter en température lentement et par paliers. Chauffer trop vite ou trop fort peut provoquer des fissures. Le déshumidificateur peut continuer à tourner en même temps et évacue l'humidité ainsi libérée."
    },
    {
      q: "Puis-je combiner plusieurs machines ?",
      a: "Oui, pour les grands chantiers, nous livrons plusieurs machines. Appelez-nous pour une proposition."
    },
    {
      q: "Comment fonctionne la mesure d'humidité gratuite ?",
      a: `Au démarrage et à la réception, nous mesurons l'humidité résiduelle ; c'est compris dans chaque pack. Si vous avez besoin d'un rapport signé avec toutes les valeurs mesurées, pour votre poseur de sol ou votre dossier de construction, vous pouvez ajouter un rapport d'humidité officiel${rapport ? ` pour ${rapport}` : ""}.`
    }
  ],
  verderLezen: [
    {
      kop: "Ce que coûte le séchage et combien de temps il dure",
      links: [
        { label: "Guide : combien de temps une chape doit-elle sécher ?" },
        { label: "Guide : combien de temps un plafonnage doit-il sécher ?" },
        { label: "Comment un déshumidificateur de chantier retire l'humidité d'une habitation" },
        { label: "Notre garantie de séchage à 100 % sur un pack calculé" }
      ]
    },
    {
      kop: "Les appareils pour chape et plafonnage",
      links: [
        { label: "Performance", sub: "L'appareil standard pour une maison neuve." },
        { label: "Ventilateur radial pour le séchage de chape", sub: "Souffle au ras du sol." },
        { label: "Chauffage de chantier électrique pour un chantier froid", sub: "Sous 15 °C, le séchage est lent." }
      ]
    },
    {
      kop: "Planning et prix",
      links: [
        { label: "Calculez votre pack selon la surface et l'épaisseur de chape" },
        { label: "Combien coûte la location d'un déshumidificateur de chantier ?" },
        { label: "Louer un déshumidificateur de chantier en province d'Anvers" },
        { label: "Louer un déshumidificateur de chantier dans le Limbourg" }
      ]
    }
  ],
  verderLezenKicker: "Pour aller plus loin",
  verderLezenTitel: "En savoir plus sur le séchage de chape et de plafonnage",
  schemaNaam: "Séchage de chape et de plafonnage",
  schemaBeschrijving: "Séchage actif d'une chape et d'un plafonnage frais dans une nouvelle construction, pour que le poseur de sol et le peintre puissent commencer des semaines plus tôt.",
  schemaType: "Séchage de chantier",
  home: "Accueil",
  heroKicker: "Nouvelle construction & transformation",
  heroH1: "Sécher chape et plafonnage en semaines, pas en mois.",
  heroP: "Une maison neuve contient vite mille litres d'eau : dans la chape, dans le plafonnage, dans la maçonnerie. Cette eau doit sortir avant que le poseur de sol et le peintre puissent commencer. Un déshumidificateur de chantier, un ventilateur et, par temps froid, un chauffage de chantier l'évacuent de façon contrôlée, en quelques semaines au lieu de plusieurs mois.",
  ctaPakket: "Calculez votre pack de séchage",
  heroAlt: "Déshumidificateur de chantier au travail sur une chape fraîche dans une maison neuve",
  badge: `${kortsteTermijn} à ${langsteTermijn} semaines`,
  badgeSub: `au lieu de ± ${natuurlijkeChapeWeken(6)} semaines naturellement`,
  vsKicker: "La différence",
  vsH2: "Le séchage naturel dure aussi longtemps que la météo le décide.",
  vsLede: `Une chape de 6 cm qui sèche seule met, dans de bonnes conditions, environ ${natuurlijkeChapeWeken(6)} semaines. En novembre, ces conditions ne sont pas réunies, et il faut alors attendre le printemps. Le séchage actif supprime cette incertitude.`,
  vsZonder: "Sans déshumidificateur",
  vsMet: "Avec un pack de séchage Vernast",
  dKicker: "Temps de séchage par épaisseur",
  dH2: "Combien de temps une chape doit-elle sécher ?",
  dLede1: "Une chape sable-ciment est posée humide : elle contient plus d'eau que le ciment n'en a besoin pour durcir, et ce surplus doit ressortir par la surface. Plus la couche est épaisse, plus l'humidité du fond a de chemin à parcourir. C'est pourquoi le temps de séchage augmente plus vite que l'épaisseur : les derniers centimètres sont les plus longs.",
  dLede2: "Avec un déshumidificateur de chantier, vous gardez l'air au-dessus de la chape sec, pour que l'humidité continue à sortir au lieu de stagner. Nos packs chape sont établis selon l'épaisseur de la couche ; la durée de location ci-dessous est celle que prévoit chaque pack.",
  dCaption: "Temps de séchage d'une chape par épaisseur, avec et sans déshumidificateur de chantier",
  dKolDikte: "Épaisseur de chape",
  dKolMet: "Avec déshumidificateur (durée de location du pack)",
  dKolZonder: "Sans déshumidificateur (valeur indicative)",
  termijn: (r) => termijnLabelFr(r),
  natuurlijk: (dikte) => `± ${natuurlijkeChapeWeken(dikte)} semaines`,
  dNote: "La valeur indicative sans déshumidificateur suit la règle empirique courante pour une chape sable-ciment : environ une semaine par centimètre pour les quatre premiers centimètres, puis deux semaines par centimètre supplémentaire, dans une pièce ventilée à environ 20 °C. Par temps froid ou humide, cela prend plus longtemps. Les chapes anhydrite et les sols coulés suivent d'autres règles ; suivez alors les directives du fabricant. Aucune des deux colonnes ne remplace une mesure.",
  plKicker: "Et les murs",
  plH2: "Combien de temps un plafonnage doit-il sécher ?",
  plP1: "Le plafonnage est plus mince qu'une chape, mais il recouvre tous les murs et plafonds. Dans une nouvelle construction, cette humidité s'ajoute à celle que libère déjà la chape, et c'est justement là que l'air de la maison est vite saturé : les murs ne sèchent alors presque plus. Surtout en automne et en hiver, le séchage naturel peut donc durer bien plus longtemps que l'épaisseur ne le laisse supposer.",
  plP2: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Si vous peignez ou tapissez trop tôt, la peinture peut cloquer ou tacher, et vous enfermez l'humidité dans le mur. Plafonnage et chape doivent sécher ensemble ? Choisissez dans le ",
    /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "calculateur" }),
    " « plafonnage + chape » : ce pack est calculé pour les murs et le sol en même temps."
  ] }),
  plChips: ["Enduit au plâtre", "Enduit au ciment", "Plafonnage + chape ensemble"],
  plCaption: "Durée de location d'un pack plafonnage par épaisseur d'enduit",
  plKolDikte: "Épaisseur d'enduit",
  plKolTermijn: "Durée de location du pack",
  plNote: "Un plafonnage est sec lorsqu'il est uniformément clair partout et que la mesure le confirme. Demandez à votre peintre quel taux d'humidité tolère la peinture qu'il utilise.",
  pKicker: "Quel appareil",
  pH2: "Choisissez l'appareil adapté à votre habitation.",
  pLede: "Pour une maison familiale standard, le Performance est l'appareil que nous livrons le plus souvent. S'il s'agit d'une habitation complète, ce sera un pack de séchage : le calculateur convertit votre volume et l'épaisseur de votre chape en la bonne combinaison, avec ventilateur et chauffage de chantier là où votre chantier en a besoin.",
  pNote: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("b", { children: "Vous préférez enlever vous-même ?" }),
    " Vous pouvez enlever des déshumidificateurs de chantier, des ventilateurs et des chauffages de chantier à la pièce au tarif enlèvement à notre ",
    /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/afhalen"), children: "point d'enlèvement le long de l'A12 à Aartselaar" }),
    ". La mesure d'humidité et la garantie de séchage ne sont alors pas comprises dans la location, mais l'appareil est identique."
  ] }),
  prKicker: "En pratique",
  prH2: "Six facteurs qui déterminent le temps de séchage.",
  prLede: "L'appareil n'est qu'un facteur parmi d'autres. Le moment où vous commencez, le fait que la pièce reste fermée, la température et ce que vous mesurez au final déterminent ensemble si la chape est prête en deux ou en cinq semaines. Les voici dans l'ordre où vous en aurez besoin.",
  faqTitel: "Ce que les maîtres d'ouvrage et les entrepreneurs nous demandent.",
  rKicker: "Sur le terrain",
  rH2: "Des chantiers de construction neuve que nous avons déjà séchés.",
  rLede: "Trois dossiers avec les photos du chantier lui-même : ce qui devait sécher, quels appareils étaient en place et combien de temps cela a pris.",
  rAlle: "Voir tous les projets de construction neuve",
  mbKicker: "Prêt à démarrer",
  mbH3: "Donnez-nous votre surface et l'épaisseur de votre chape, nous vous donnons une date.",
  mbP: "Le calculateur convertit votre volume en un pack avec les bons appareils et la bonne durée. Vous choisissez vous-même le jour de livraison ; nous installons et mesurons.",
  mbAlt: "Un technicien Vernast note les résultats de mesure",
  cKicker: "Une question sur votre chantier ?",
  cTitel: "Vous hésitez sur la durée ou le pack ?",
  cLede: "Donnez-nous votre surface, l'épaisseur de la chape et la date à laquelle le chapiste aura terminé. Vous recevez dans un délai d'un jour ouvrable une proposition d'un spécialiste du séchage.",
  cOnderwerpen: [
    "Conseil pour sécher une chape",
    "Conseil pour sécher un plafonnage",
    "Plafonnage et chape ensemble",
    "Prix et date de livraison",
    "Autre chose"
  ],
  cPlaceholder: "P. ex. nouvelle construction 140 m², chape de 6 cm posée le 3 novembre, le poseur de sol vient début décembre."
};
const en = {
  zonder: [
    "Months of waiting, especially in autumn and winter",
    "The floor layer cannot start and moves you down his list",
    "Risk of mould behind skirting boards and under the insulation",
    "One delayed phase pushes back the entire finishing work"
  ],
  met: [
    `Hire period of ${kortsteTermijn} to ${langsteTermijn} weeks, depending on the thickness`,
    "The floor layer gets a date he can rely on",
    "The air stays dry, so mould does not stand a chance",
    "Moisture reading at the start and at handover"
  ],
  praktijk: [
    {
      title: "Only start once the screed may be dried",
      desc: "Fresh sand-cement screed first has to cure; drying hard straight away risks shrinkage cracks or a weak top layer. Ask your screed fitter from when you may dry actively, often after a few days to a week. Plaster can usually be tackled sooner, as soon as the surface is hard."
    },
    {
      title: "Keep the room closed",
      desc: "A condensation dehumidifier takes the moisture out of the air in the room. If windows or doors are open, it dries the outside air as well and the drying hardly progresses. Only ventilate briefly when it is really necessary, for example after working with adhesive or paint."
    },
    {
      title: "Add a fan",
      desc: "A layer of saturated air hangs above fresh screed. A radial fan blows it away, so that dry air keeps reaching the floor. That saves days within the same hire period."
    },
    {
      title: "Heat below 15 °C",
      desc: "A condensation dehumidifier works best between roughly 15 and 25 °C. Below that, the air takes up little moisture and the screed releases its water slowly. An electric site heater with a thermostat brings the site up to temperature and keeps the drying going."
    },
    {
      title: "Keep an eye on the water collected",
      desc: "How much water comes out of the unit each day tells you where you stand. When the yield drops, the screed is nearing its equilibrium, and that is the moment to have it measured."
    },
    {
      title: "Measure the residual moisture before the floor goes down",
      desc: "Parquet, vinyl and tiles only tolerate a limited amount of residual moisture; laying too early can cause swelling, lifting or mould under the floor. The usual test is the CM test (carbide method), and the permitted value differs by type of screed, by floor covering and with or without underfloor heating. Ask your floor layer which limit he works to; we measure at the start and at handover."
    }
  ],
  faqs: (rapport) => [
    {
      q: "How long does my screed need to dry before the floor can go down?",
      a: `Without help, the rule of thumb for sand-cement screed is about one week per centimetre for the first four centimetres, then two weeks for each extra centimetre, so for 6 cm around ${natuurlijkeChapeWeken(6)} weeks, in good conditions. With a construction dehumidifier, our screed packages run ${opsommingEn(CHAPE)}. Whether you can actually lay the floor is decided by a residual moisture reading, not the calendar.`
    },
    {
      q: "How long does plaster need to dry before I can paint?",
      a: `With a construction dehumidifier, our plaster packages run ${opsommingEn(PLEISTER)}. Plaster is dry when it is evenly light in colour everywhere and the reading confirms it. Ask your painter or paint supplier which moisture value the paint he uses can tolerate.`
    },
    {
      q: "What residual moisture does the screed need for parquet or tiles?",
      a: "That depends on the type of screed (sand-cement or anhydrite), the floor covering and any underfloor heating. The limit is expressed as a percentage of residual moisture and measured with a CM test (carbide method). Ask your floor layer which value he works to, and let him carry out or accept that reading before he lays the floor."
    },
    {
      q: "Can I open the windows while the construction dehumidifier is running?",
      a: "Preferably not. A condensation dehumidifier takes the moisture out of the air in the room; if windows or doors are open, it also dries the outside air coming in and the drying hardly progresses. Keep the room closed and only ventilate briefly when it is really necessary, for example after working with adhesive or paint."
    },
    {
      q: "Can I use the underfloor heating to dry the screed?",
      a: "Only according to the heating-up protocol of your installer or screed fitter: warming up slowly and in stages. Heating too fast or too hot can cause cracks. The construction dehumidifier can simply keep running in the meantime and removes the moisture released in the process."
    },
    { q: "Can I combine several machines?", a: "Yes, for large sites we deliver several machines. Call us for a proposal." },
    {
      q: "How does the free moisture reading work?",
      a: `At the start and at handover we measure the residual moisture; that is included in every package. If you need a signed report with all the readings, for your floor layer or your building file, you can add an official moisture report${rapport ? ` for ${rapport}` : ""}.`
    }
  ],
  verderLezen: [
    {
      kop: "What drying costs and how long it takes",
      links: [
        { label: "Guide: how long does screed take to dry?" },
        { label: "Guide: how long does plaster take to dry?" },
        { label: "How a construction dehumidifier draws moisture out of a home" },
        { label: "Our 100% drying guarantee on a calculated package" }
      ]
    },
    {
      kop: "The units for screed and plaster",
      links: [
        { label: "Performance", sub: "The standard unit for a new-build home." },
        { label: "Radial fan for screed drying", sub: "Blows right across the floor." },
        { label: "Electric site heater for a cold site", sub: "Below 15 °C, drying is slow." }
      ]
    },
    {
      kop: "Planning and prices",
      links: [
        { label: "Calculate your package by floor area and screed thickness" },
        { label: "What does dehumidifier hire cost?" },
        { label: "Dehumidifier hire in the province of Antwerp" },
        { label: "Dehumidifier hire in Limburg" }
      ]
    }
  ],
  verderLezenKicker: "Further reading",
  verderLezenTitel: "More about drying screed and plaster",
  schemaNaam: "Screed and plaster drying",
  schemaBeschrijving: "Active drying of fresh screed and plasterwork in new builds, so the floor layer and painter can start weeks earlier.",
  schemaType: "Construction drying",
  home: "Home",
  heroKicker: "New build & renovation",
  heroH1: "Screed and plaster drying in weeks, not months.",
  heroP: "A new-build home easily holds a thousand litres of water: in the screed, in the plaster, in the masonry. It has to come out before the floor layer and the painter can start. A construction dehumidifier, a fan and, in cold weather, a site heater draw it out in a controlled way, in weeks instead of months.",
  ctaPakket: "Calculate your drying package",
  heroAlt: "Construction dehumidifier at work on fresh screed in a new-build home",
  badge: `${kortsteTermijn} to ${langsteTermijn} weeks`,
  badgeSub: `instead of ± ${natuurlijkeChapeWeken(6)} weeks naturally`,
  vsKicker: "The difference",
  vsH2: "Natural drying takes as long as the weather decides.",
  vsLede: `A 6 cm screed left to dry on its own takes around ${natuurlijkeChapeWeken(6)} weeks in good conditions. In November those conditions are not there, and then it means waiting until spring. Active drying takes that uncertainty away.`,
  vsZonder: "Without a construction dehumidifier",
  vsMet: "With a Vernast drying package",
  dKicker: "Drying time by thickness",
  dH2: "How long does screed take to dry?",
  dLede1: "Sand-cement screed is laid wet: it contains more water than the cement needs to cure, and that surplus has to leave again through the surface. The thicker the layer, the further the moisture at the bottom has to travel. That is why the drying time grows faster than the thickness: the last centimetres take the longest.",
  dLede2: "A construction dehumidifier keeps the air above the screed dry, so the moisture keeps escaping instead of lingering. Our screed packages are built around the thickness of the layer; the hire period below is what each package provides for.",
  dCaption: "Screed drying time by thickness, with and without a construction dehumidifier",
  dKolDikte: "Screed thickness",
  dKolMet: "With a dehumidifier (package hire period)",
  dKolZonder: "Without a dehumidifier (rule of thumb)",
  termijn: (r) => termijnLabelEn(r),
  natuurlijk: (dikte) => `± ${natuurlijkeChapeWeken(dikte)} weeks`,
  dNote: "The rule of thumb without a construction dehumidifier follows the common guideline for sand-cement screed: about one week per centimetre for the first four centimetres, then two weeks for each extra centimetre, in a ventilated room at around 20 °C. In a cold or damp period it takes longer. Anhydrite and poured floors follow different rules; follow the manufacturer's guidance for those. Neither column replaces a moisture reading.",
  plKicker: "And the walls",
  plH2: "How long does plaster take to dry?",
  plP1: "Plaster is thinner than screed, but it covers every wall and ceiling. In a new build that moisture comes on top of what the screed is already releasing, and that is exactly when the air in the house quickly becomes saturated: the walls then hardly dry at all. Especially in autumn and winter, natural drying can therefore take much longer than the thickness would suggest.",
  plP2: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    'If you paint or wallpaper too early, the paint can peel or stain, and you trap moisture in the wall. Do plaster and screed need to dry together? Choose "plaster + screed" in the',
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "calculator" }),
    ": that package is calculated for walls and floor at the same time."
  ] }),
  plChips: ["Gypsum plaster", "Cement plaster", "Plaster + screed together"],
  plCaption: "Hire period of a plaster package by plaster thickness",
  plKolDikte: "Plaster thickness",
  plKolTermijn: "Package hire period",
  plNote: "Plaster is dry when it is evenly light in colour everywhere and the reading confirms it. Ask your painter which moisture value the paint he uses can tolerate.",
  pKicker: "Which unit",
  pH2: "Choose the unit that suits your home.",
  pLede: "For a standard family home, the Performance is the unit we deliver most often. For a complete home it becomes a drying package: the calculator converts your volume and screed thickness into the right combination, with a fan and site heater where your site needs them.",
  pNote: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("b", { children: "Rather collect it yourself?" }),
    " You can pick up individual construction dehumidifiers, fans and site heaters at the collection rate from our",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/afhalen"), children: "collection point along the A12 in Aartselaar" }),
    ". The moisture reading and the drying guarantee are then not included in the hire, but the unit is the same."
  ] }),
  prKicker: "In practice",
  prH2: "Six things that determine the drying time.",
  prLede: "The unit is only one factor. When you start, whether the room stays closed, how warm it is and what you measure in the end together decide whether that screed is ready in two weeks or in five. They are listed below in the order in which you will need them.",
  faqTitel: "What homeowners and contractors ask us.",
  rKicker: "In practice",
  rH2: "New-build sites we have dried before.",
  rLede: "Three projects with photos from the site itself: what had to dry, which units were in place and how long it took.",
  rAlle: "View all new-build projects",
  mbKicker: "Ready to start",
  mbH3: "Give us your floor area and screed thickness, and we will give you a date.",
  mbP: "The calculator converts your volume into a package with the right units and the right hire period. You choose the delivery day; we install and measure.",
  mbAlt: "Vernast technician noting down the readings",
  cKicker: "A question about your site?",
  cTitel: "Unsure about the hire period or the package?",
  cLede: "Give us your floor area, the screed thickness and when the screed fitter will be finished. Within one working day you will receive a proposal from a drying specialist.",
  cOnderwerpen: [
    "Advice on screed drying",
    "Advice on plaster drying",
    "Plaster and screed together",
    "Price and delivery date",
    "Something else"
  ],
  cPlaceholder: "E.g. new build 140 m², 6 cm screed laid on 3 November, floor layer coming in early December."
};
const COPY = { nl, fr, en };
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/NieuwbouwPage.tsx");
const RAPPORT = EXTRAS.find((x) => x.k === "rapport");
const PRAKTIJK_ICONEN = [CalendarCheckIcon, HouseIcon, WindIcon, ThermoIcon, GaugeIcon, LayersIcon];
const REFERENTIES = ["chape-pleisterwerk-drogen-hasselt", "nieuwbouw-drogen-kontich", "nieuwbouw-drogen-putte"].map(getRealisatie).filter((r) => !!r);
const LEES_DOELEN = [
  [
    { to: "/gids/hoe-lang-moet-chape-drogen" },
    { to: "/gids/hoe-lang-moet-pleisterwerk-drogen" },
    { to: "/hoe-drogen-werkt" },
    { to: "/drooggarantie" }
  ],
  [
    { to: toestelPad("ttk350"), toestel: "ttk350" },
    { to: toestelPad("radiaal2250"), toestel: "radiaal2250" },
    { to: toestelPad("teddh30"), toestel: "teddh30" }
  ],
  [
    { to: "/verhuur/calculator" },
    { to: "/prijzen" },
    { to: "/bouwdroger-huren-antwerpen" },
    { to: "/bouwdroger-huren-limburg" }
  ]
];
const NieuwbouwPage = () => {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const taal = useTaal();
  const toon = useToonBedrag();
  const seo = useSeo("nieuwbouw");
  const rapportPrijs = RAPPORT ? taal === "nl" ? `${euro(RAPPORT.price)} excl. btw` : `${toon(RAPPORT.price).tekst} ${toon(RAPPORT.price).label}` : null;
  const faqs = t.faqs(rapportPrijs);
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
            path: lp("/nieuwbouw-drogen"),
            serviceType: t.schemaType
          }),
          /*
            De vragen onderaan deze pagina, ook machineleesbaar. Zelfde tekst
            als wat zichtbaar staat, dus schema en pagina blijven gelijk.
          */
          faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema([
            { name: t.home, path: lp("/") },
            { name: t.schemaNaam, path: lp("/nieuwbouw-drogen") }
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
              style: { objectPosition: "50% 62%" },
              src: "/vernast/case-chape-v2.webp",
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
      /* @__PURE__ */ jsx("section", { className: "sr", id: "droogtijden", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.dKicker }),
          /* @__PURE__ */ jsx("h2", { className: "sec", children: t.dH2 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.dLede1 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.dLede2 })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "tblwrap", children: /* @__PURE__ */ jsx("div", { className: "tblscroll", children: /* @__PURE__ */ jsxs("table", { className: "tbl", children: [
          /* @__PURE__ */ jsx("caption", { className: "sr-only", children: t.dCaption }),
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { scope: "col", children: t.dKolDikte }),
            /* @__PURE__ */ jsx("th", { scope: "col", children: t.dKolMet }),
            /* @__PURE__ */ jsx("th", { scope: "col", children: t.dKolZonder })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: CHAPE.map((r) => /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsxs("th", { scope: "row", children: [
              r.dikte,
              " cm"
            ] }),
            /* @__PURE__ */ jsx("td", { children: t.termijn(r) }),
            /* @__PURE__ */ jsx("td", { children: t.natuurlijk(r.dikte) })
          ] }, r.dikte)) })
        ] }) }) }),
        /* @__PURE__ */ jsx("p", { className: "tblnote", children: t.dNote })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sw", children: /* @__PURE__ */ jsxs("div", { className: "wrap split", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.plKicker }),
          /* @__PURE__ */ jsx("h2", { className: "sec", children: t.plH2 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.plP1 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.plP2(lp) }),
          /* @__PURE__ */ jsx("div", { className: "chips", children: t.plChips.map((c) => /* @__PURE__ */ jsx("span", { children: c }, c)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "split-vis", style: { alignItems: "stretch", display: "block" }, children: [
          /* @__PURE__ */ jsx("div", { className: "tblwrap", style: { marginTop: 0 }, children: /* @__PURE__ */ jsx("div", { className: "tblscroll", children: /* @__PURE__ */ jsxs("table", { className: "tbl", children: [
            /* @__PURE__ */ jsx("caption", { className: "sr-only", children: t.plCaption }),
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("th", { scope: "col", children: t.plKolDikte }),
              /* @__PURE__ */ jsx("th", { scope: "col", children: t.plKolTermijn })
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { children: PLEISTER.map((r) => /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsxs("th", { scope: "row", children: [
                r.dikte,
                " cm"
              ] }),
              /* @__PURE__ */ jsx("td", { children: t.termijn(r) })
            ] }, r.dikte)) })
          ] }) }) }),
          /* @__PURE__ */ jsx("p", { className: "tblnote", children: t.plNote })
        ] })
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
      /* @__PURE__ */ jsx("section", { className: "sw", id: "praktijk", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.prKicker }),
          /* @__PURE__ */ jsx("h2", { className: "sec", children: t.prH2 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.prLede })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "stapkaarten", children: t.praktijk.map(({ title, desc }, i) => {
          const Icon = PRAKTIJK_ICONEN[i];
          return /* @__PURE__ */ jsxs(Reveal, { from: "up", delay: i % 3 * 0.08, className: "stk", children: [
            /* @__PURE__ */ jsx("span", { className: "stkic", children: /* @__PURE__ */ jsx(Icon, { size: 21 }) }),
            /* @__PURE__ */ jsx("span", { className: "stknr", children: String(i + 1).padStart(2, "0") }),
            /* @__PURE__ */ jsx("h3", { children: title }),
            /* @__PURE__ */ jsx("p", { children: desc })
          ] }, title);
        }) })
      ] }) }),
      /* @__PURE__ */ jsx(
        FaqBlok,
        {
          titel: t.faqTitel,
          vragen: faqs,
          sleutel: "nb-faq"
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
  NieuwbouwPage as default
};

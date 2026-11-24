import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { Copy } from "@/i18n/useTaal";
import { droogtermijnen, natuurlijkeChapeWeken, termijnLabel, type DroogtermijnRij } from "@/lib/droogtijden";
import { termijnLabelFr } from "./termijnLabelFr";
import { termijnLabelEn } from "./termijnLabelEn";

/**
 * Teksten van /chape-drogen in het Nederlands, het Frans en het Engels.
 *
 * De termijnen komen uit de catalogus (zie lib/droogtijden.ts), ook in het
 * Frans: `termijnLabelFr` zet dezelfde rij om in « 2 à 3 semaines » in plaats
 * van een overgetypt getal dat bij de volgende prijspublicatie wegloopt.
 */

/* Huurtermijnen uit de catalogus, nooit overgetypt. Zie lib/droogtijden.ts. */
export const CHAPE = droogtermijnen("chape");
const kortsteTermijn = Math.min(...CHAPE.map((r) => r.min));
const langsteTermijn = Math.max(...CHAPE.map((r) => r.max));
const dikste = CHAPE[CHAPE.length - 1];

/** "5 cm: 2 weken, 6 cm: 3 weken en 7 cm: 4 weken" voor lopende tekst. */
function opsomming(rijen: typeof CHAPE): string {
  const delen = rijen.map((r) => `${r.dikte} cm: ${termijnLabel(r)}`);
  if (delen.length <= 1) return delen.join("");
  return `${delen.slice(0, -1).join(", ")} en ${delen[delen.length - 1]}`;
}

function opsommingFr(rijen: typeof CHAPE): string {
  const delen = rijen.map((r) => `${r.dikte} cm : ${termijnLabelFr(r)}`);
  if (delen.length <= 1) return delen.join("");
  return `${delen.slice(0, -1).join(", ")} et ${delen[delen.length - 1]}`;
}

/** "5 cm: 2 weeks, 6 cm: 3 weeks and 7 cm: 4 weeks", zelfde catalogusrijen. */
function opsommingEn(rijen: typeof CHAPE): string {
  const delen = rijen.map((r) => `${r.dikte} cm: ${termijnLabelEn(r)}`);
  if (delen.length <= 1) return delen.join("");
  return `${delen.slice(0, -1).join(", ")} and ${delen[delen.length - 1]}`;
}

type Lp = (nlPad: string) => string;

const nl = {
  zonder: [
    "Wachten tot het weer meewerkt, en in de winter nog langer",
    "De vloerlegger schuift u door naar zijn volgende werf",
    "Vocht trekt in plinten, deurkasten en wat er al geplaatst staat",
    "Niemand weet wanneer de vloer klaar is: er wordt niet gemeten",
  ],
  met: [
    `Een huurtermijn van ${kortsteTermijn} tot ${langsteTermijn} weken, volgens de dikte van uw chape`,
    "Een einddatum die u aan uw vloerlegger kunt doorgeven",
    "Vochtmeting bij de start en bij de oplevering",
    "Niet droog op de einddatum? Dan verlengen wij kosteloos",
  ],
  stappen: [
    {
      title: "U kiest de leverdag",
      desc: "Zodra uw chapeur zegt dat de vloer actief mag drogen, boekt u de datum. Wij leveren in heel Vlaanderen, meestal binnen enkele werkdagen, en u krijgt een tijdvenster in plaats van een hele dag wachten.",
    },
    {
      title: "Voormeting vóór er iets draait",
      desc: "De technieker legt de restvochtigheid van de chape en de luchtvochtigheid in de ruimte vast. Dat is het startpunt waartegen de oplevering straks wordt afgezet, en het is de reden dat wij een einddatum kunnen geven.",
    },
    {
      title: "Plaatsen en instellen",
      desc: "Hij zet de toestellen waar ze hun werk doen, sluit de condensafvoer aan en stelt de streefwaarde in. Vanaf dan draait het toestel dag en nacht en schakelt de hygrostaat zelf terug zodra de lucht droog genoeg is.",
    },
    {
      title: "Lucht over de vloer",
      desc: "Boven een verse chape blijft een laag verzadigde lucht hangen. Een radiaalventilator blaast vlak over het oppervlak zodat er telkens droge lucht bij de vloer komt. Dat scheelt dagen op dezelfde huurtermijn.",
    },
    {
      title: "Warmte als de werf koud staat",
      desc: "Een condensdroger werkt het best tussen ongeveer 15 en 25 °C. Ligt uw werf daaronder, dan komt er een elektrische bouwkachel met thermostaat bij, zodat de chape haar water blijft afgeven in plaats van stil te vallen.",
    },
    {
      title: "Nameting en ophaling",
      desc: "Op het einde meten we opnieuw. Is de waarde in orde, dan halen wij de toestellen op en kan uw vloerlegger komen. Is ze dat niet, dan verlengen wij kosteloos tot ze wel in orde is.",
    },
  ],
  faqs: [
    {
      q: "Wat kost het drogen van een chape?",
      a: "Dat hangt af van het volume van de ruimte en van de dikte van uw chape: die twee bepalen hoeveel toestellen er nodig zijn en hoe lang ze blijven staan. De droogcalculator vraagt uw oppervlakte en uw chapedikte en toont meteen het pakket met de prijs, inclusief levering, installatie en de metingen. Alle dag- en weektarieven staan ook los op onze prijzenpagina.",
    },
    {
      q: "Wanneer mag de bouwdroger op een verse chape?",
      a: "Niet meteen. Cementchape bindt water chemisch tijdens het uitharden en heeft dat water in die eerste fase nog nodig. Vraag uw chapeur vanaf welke dag u actief mag drogen; dat is doorgaans een kwestie van dagen tot een week. Daarna mag het toestel dag en nacht doorlopen. In onze gids over de droogtijd van chape staat uitgebreid waarom te vroeg drogen krimpscheuren geeft.",
    },
    {
      q: "Hoeveel toestellen heb ik nodig voor mijn oppervlakte?",
      a: "Dat hangt af van het volume, niet van het aantal vierkante meter alleen: een open woning met hoge plafonds vraagt meer dan dezelfde oppervlakte in afgesloten kamers. De Calculator rekent uw volume door naar een pakket met het juiste aantal toestellen. Voor grote werven of een ongewone indeling belt u ons beter even; dan kijken we mee.",
    },
    {
      q: "Wat als mijn chape op de einddatum nog niet droog is?",
      a: "Dan verlengen wij kosteloos tot ze dat wel is. Dat is de Drooggarantie, en ze geldt op elk pakket dat via de Calculator berekend en met levering en installatie geboekt is. Ze steunt op de meting bij de start en bij de oplevering: zonder die twee metingen is er niets om een einddatum aan af te toetsen.",
    },
    {
      q: "Kan ik de toestellen zelf afhalen?",
      a: "Ja, losse bouwdrogers, ventilatoren en bouwkachels haalt u op in ons afhaalpunt langs de A12 in Aartselaar. U betaalt dan geen transport en geen installatie. Daar staat tegenover dat u zelf de opstelling bepaalt en dat de vochtmeting en de Drooggarantie niet bij de huur zitten; het toestel zelf is hetzelfde.",
    },
    {
      q: "Hoeveel stroom verbruikt een bouwdroger op een chape?",
      a: "Een condensbouwdroger uit ons gamma neemt tussen de 0,75 en 1,4 kW op en draait op een gewoon stopcontact van 230 V. Wat dat per dag en over de hele huurtermijn kost, rekenen we voor in onze gids over het stroomverbruik van een bouwdroger. Een elektrische bouwkachel van 20 of 30 kW is iets anders: die vraagt krachtstroom van 400 V.",
    },
    {
      q: "Kan ik verlengen als mijn werf uitloopt?",
      a: "Ja. Verlengen kan online, en u betaalt dan alleen de extra dagen aan hetzelfde tarief. Doe het liefst vóór de einddatum: dan blijven de toestellen voor u gereserveerd in plaats van naar de volgende klant te gaan.",
    },
    {
      q: `Hoe lang moet chape van ${dikste?.dikte ?? 7} cm drogen?`,
      a: `Op eigen kracht is de richtwaarde ongeveer ${natuurlijkeChapeWeken(dikste?.dikte ?? 7)} weken, en dan nog alleen in een verwarmd en geventileerd gebouw. Met een droogpakket lopen onze chapetermijnen ${opsomming(CHAPE)}. De meting beslist of de vloer klaar is, niet de kalender; de volledige uitleg per centimeter staat in onze gids over de droogtijd van chape.`,
    },
  ],
  verderLezen: [
    {
      kop: "Hoe lang het duurt en waarom",
      links: [
        { label: "Gids: hoe lang moet een chape drogen?" },
        { label: "Hoe een bouwdroger het vocht uit een woning haalt" },
        { label: "Onze 100 % drooggarantie op een berekend pakket" },
        { label: "Chape en pleisterwerk samen drogen in nieuwbouw" },
      ],
    },
    {
      kop: "De toestellen voor een chapedroging",
      links: [
        { label: "Performance", sub: "Het standaardtoestel voor een nieuwbouwwoning." },
        { label: "Radiaalventilator voor chapedroging", sub: "Blaast vlak over de vloer." },
        { label: "Elektrische bouwkachel voor een koude werf", sub: "Onder 15 °C droogt het traag." },
      ],
    },
    {
      kop: "Plannen en prijzen",
      links: [
        { label: "Bereken uw pakket op oppervlakte en chapedikte" },
        { label: "Wat kost een bouwdroger huren?" },
        { label: "Levering en installatie in heel Vlaanderen" },
        { label: "Zelf afhalen in Aartselaar" },
      ],
    },
  ],
  verderLezenKicker: "Verder lezen",
  verderLezenTitel: "Verder lezen over chape drogen",

  schemaNaam: "Chape drogen",
  schemaBeschrijving:
    "Actieve droging van verse chape met bouwdroger, ventilator en meting, zodat de vloerlegger weken vroeger kan starten.",
  schemaType: "Bouwdroging",
  home: "Home",

  heroKicker: "Toepassing · chape",
  heroH1: "Chape drogen in weken, met een einddatum op papier.",
  heroP:
    "In een verse zandcementchape zit meer water dan het cement nodig heeft, en dat overschot moet er via het oppervlak weer uit. Wij zetten de juiste toestellen op uw werf, stellen de streefwaarde in en meten het restvocht bij de start en bij de oplevering. Uw vloerlegger krijgt een datum in plaats van een inschatting.",
  ctaPakket: "Bereken uw droogpakket",
  heroAlt: "Bouwdroger en ventilator aan het werk op een verse chape",
  badge: `${kortsteTermijn} tot ${langsteTermijn} weken`,
  badgeSub: `in plaats van ± ${natuurlijkeChapeWeken(6)} weken natuurlijk`,

  vsKicker: "Het verschil",
  vsH2: "Een chape die op zichzelf droogt, volgt het weer.",
  vsLede: `Een vloer van 6 cm doet er onder goede omstandigheden ongeveer ${natuurlijkeChapeWeken(6)} weken over. In november zijn die omstandigheden er niet, en dan wordt het wachten tot het voorjaar, zonder dat iemand u kan zeggen hoe lang. Actief drogen haalt die onzekerheid eruit.`,
  vsZonder: "Zonder bouwdroger",
  vsMet: "Met een Vernast-droogpakket",

  tKicker: "Huurtermijn per dikte",
  tH2: "Welke termijn hoort bij uw chapedikte?",
  tLede:
    "De dikte van de laag bepaalt de termijn, niet uw oppervlakte: een grotere woning krijgt meer toestellen, geen langere huur. Hoe dikker de chape, hoe langer de weg die het vocht onderin moet afleggen, en daarom groeit de termijn sneller dan de dikte.",
  tCaption: "Huurtermijn van een chapepakket per chapedikte, naast de richtwaarde zonder bouwdroger",
  tKolDikte: "Chapedikte",
  tKolMet: "Met een droogpakket",
  tKolZonder: "Zonder bouwdroger (richtwaarde)",
  termijn: (r: DroogtermijnRij) => termijnLabel(r),
  natuurlijk: (dikte: number) => `± ${natuurlijkeChapeWeken(dikte)} weken`,
  tNote: (lp: Lp): ReactNode => (
    <>
      De kolom met een droogpakket is wat onze pakketten voorzien, inclusief voor- en nameting.
      De richtwaarde ernaast volgt de gangbare vuistregel voor zandcementchape in een verluchte
      ruimte rond 20 °C. Hoe die vuistregel in elkaar zit, wat er anders is bij anhydriet en
      hoe u opstookt met vloerverwarming, staat in{" "}
      <Link to={lp("/gids/hoe-lang-moet-chape-drogen")}>onze gids over de droogtijd van chape</Link>.
      Geen van beide kolommen vervangt een meting.
    </>
  ),

  wKicker: "Zo verloopt het",
  wH2: "Van leverdag tot vrijgave van de vloer.",
  wLede:
    "U hoeft zelf niets op te meten of in te stellen. Dit is wat er gebeurt vanaf het moment dat u de datum doorgeeft tot het moment dat uw vloerlegger kan starten.",

  pKicker: "Welk toestel",
  pH2: "Het toestel dat bij uw vloer past.",
  pLede:
    "Voor een gewone gezinswoning is de Performance het toestel dat we het vaakst leveren, met een radiaalventilator erbij die vlak over de chape blaast. De Calculator rekent uw volume en chapedikte door naar de juiste combinatie, met een bouwkachel erbij als uw werf te koud staat.",

  mKicker: "De oplevering",
  mH2: "Wanneer mag de vloerlegger komen?",
  mP1: "Een chape die hard en licht van kleur is, kan vanbinnen nog nat zijn. Onder parket, pvc of een gietvloer zit dat vocht daarna opgesloten, en dan komt het terug als bolle planken of loslatende stroken. Daarom beslist een meting en niet de kalender.",
  mP2: (rapport: string | null): ReactNode => (
    <>
      <b>Wij meten bij de start en bij de oplevering.</b> Die twee waarden zitten in elk
      pakket, zodat niemand op gevoel moet beslissen. Heeft u een ondertekend verslag nodig
      voor uw vloerlegger of uw bouwdossier, dan neemt u een officieel vochtrapport bij
      {rapport ? ` voor ${rapport}` : ""}.
    </>
  ),
  mP3: (lp: Lp): ReactNode => (
    <>
      <b>Uw vloerlegger bepaalt de grens.</b> Welke waarde hij wil zien, hangt af van het type
      chape, de vloerverwarming en de afwerking. Vraag hem dat vooraf, dan weet u waar u
      naartoe droogt. Hoe die meting gebeurt, leest u in{" "}
      <Link to={lp("/gids/hoe-lang-moet-chape-drogen")}>onze gids over de droogtijd van chape</Link>.
    </>
  ),
  chips: ["Voormeting", "Nameting", "Vochtrapport op aanvraag", "Drooggarantie"],
  mAlt: "Vloerder plaatst de eerste tegels op een droge chape in een nieuwbouwwoning",

  faqTitel: "Wat bouwheren ons vragen over chape drogen.",

  rKicker: "Uit de praktijk",
  rH2: "Vloeren die we eerder drooglegden.",
  rLede:
    "Drie dossiers met de foto's van de werf zelf: wat er moest drogen, welke toestellen er stonden en hoe lang het duurde.",
  rAlle: "Alle projecten met bouwvocht bekijken",
  mbKicker: "Klaar om te starten",
  mbH3: "Geef ons uw oppervlakte en uw chapedikte, wij geven u een datum.",
  mbP: "De Calculator rekent uw volume door naar een pakket met de juiste toestellen en de juiste termijn. U kiest zelf de leverdag; wij plaatsen en meten.",
  mbAlt: "Vernast technicus noteert de meetresultaten",

  cKicker: "Een vraag over uw vloer?",
  cTitel: "Twijfelt u over de termijn of het pakket?",
  cLede:
    "Geef ons uw oppervlakte, de chapedikte en wanneer de chapeur klaar is. U krijgt binnen één werkdag een voorstel van een droogspecialist.",
  cPlaceholder: "Bv. nieuwbouw 140 m², chape van 6 cm geplaatst op 3 november, vloerlegger komt begin december.",
};

const fr: typeof nl = {
  zonder: [
    "Attendre que la météo veuille bien collaborer, et encore plus longtemps en hiver",
    "Le poseur de sol vous reporte après son chantier suivant",
    "L'humidité remonte dans les plinthes, les chambranles et tout ce qui est déjà posé",
    "Personne ne sait quand le sol sera prêt : rien n'est mesuré",
  ],
  met: [
    `Une durée de location de ${kortsteTermijn} à ${langsteTermijn} semaines, selon l'épaisseur de votre chape`,
    "Une date de fin que vous pouvez communiquer à votre poseur de sol",
    "Mesure d'humidité au démarrage et à la réception",
    "Pas sec à la date de fin ? Nous prolongeons gratuitement",
  ],
  stappen: [
    {
      title: "Vous choisissez le jour de livraison",
      desc: "Dès que votre chapiste indique que le sol peut être séché activement, vous réservez la date. Nous livrons dans toute la Flandre, généralement en quelques jours ouvrables, et vous recevez une plage horaire au lieu d'attendre toute la journée.",
    },
    {
      title: "Mesure initiale avant tout démarrage",
      desc: "Le technicien relève l'humidité résiduelle de la chape et l'humidité de l'air dans la pièce. C'est le point de départ auquel la réception sera comparée, et c'est ce qui nous permet de vous donner une date de fin.",
    },
    {
      title: "Installation et réglage",
      desc: "Il place les appareils là où ils sont efficaces, raccorde l'évacuation des condensats et règle la valeur cible. Dès lors, l'appareil tourne jour et nuit et l'hygrostat se met de lui-même en veille dès que l'air est suffisamment sec.",
    },
    {
      title: "De l'air sur le sol",
      desc: "Au-dessus d'une chape fraîche stagne une couche d'air saturé. Un ventilateur radial souffle au ras de la surface pour amener sans cesse de l'air sec au contact du sol. Cela fait gagner des jours sur la même durée de location.",
    },
    {
      title: "De la chaleur quand le chantier est froid",
      desc: "Un déshumidificateur à condensation fonctionne au mieux entre environ 15 et 25 °C. Si votre chantier est plus froid, nous ajoutons un chauffage de chantier électrique avec thermostat, pour que la chape continue à libérer son eau au lieu de s'arrêter.",
    },
    {
      title: "Mesure finale et enlèvement",
      desc: "À la fin, nous mesurons à nouveau. Si la valeur est bonne, nous reprenons les appareils et votre poseur de sol peut venir. Si elle ne l'est pas, nous prolongeons gratuitement jusqu'à ce qu'elle le soit.",
    },
  ],
  faqs: [
    {
      q: "Combien coûte le séchage d'une chape ?",
      a: "Cela dépend du volume de la pièce et de l'épaisseur de votre chape : ces deux éléments déterminent le nombre d'appareils nécessaires et la durée pendant laquelle ils restent sur place. Le calculateur de séchage vous demande votre surface et l'épaisseur de votre chape et affiche aussitôt le pack avec son prix, livraison, installation et mesures comprises. Tous les tarifs à la journée et à la semaine figurent aussi séparément sur notre page des prix.",
    },
    {
      q: "Quand peut-on placer le déshumidificateur sur une chape fraîche ?",
      a: "Pas tout de suite. Une chape au ciment fixe chimiquement de l'eau pendant sa prise et a encore besoin de cette eau dans cette première phase. Demandez à votre chapiste à partir de quel jour vous pouvez sécher activement ; c'est généralement une question de quelques jours à une semaine. Ensuite, l'appareil peut tourner jour et nuit. Notre guide sur le temps de séchage d'une chape explique en détail pourquoi un séchage trop précoce provoque des fissures de retrait.",
    },
    {
      q: "Combien d'appareils me faut-il pour ma surface ?",
      a: "Cela dépend du volume, pas seulement du nombre de mètres carrés : une habitation ouverte avec de hauts plafonds demande plus que la même surface en pièces fermées. Le calculateur convertit votre volume en un pack avec le bon nombre d'appareils. Pour les grands chantiers ou une configuration inhabituelle, mieux vaut nous appeler ; nous regardons avec vous.",
    },
    {
      q: "Et si ma chape n'est pas sèche à la date de fin ?",
      a: "Nous prolongeons alors gratuitement jusqu'à ce qu'elle le soit. C'est la garantie de séchage, valable pour chaque pack calculé via le calculateur et réservé avec livraison et installation. Elle repose sur la mesure au démarrage et à la réception : sans ces deux mesures, il n'y a rien à quoi comparer une date de fin.",
    },
    {
      q: "Puis-je enlever moi-même les appareils ?",
      a: "Oui, vous pouvez enlever des déshumidificateurs de chantier, des ventilateurs et des chauffages de chantier à la pièce à notre point d'enlèvement le long de l'A12 à Aartselaar. Vous ne payez alors ni transport ni installation. En contrepartie, c'est vous qui déterminez l'installation, et la mesure d'humidité et la garantie de séchage ne sont pas comprises dans la location ; l'appareil lui-même est identique.",
    },
    {
      q: "Quelle est la consommation électrique d'un déshumidificateur sur une chape ?",
      a: "Un déshumidificateur à condensation de notre gamme consomme entre 0,75 et 1,4 kW et fonctionne sur une prise ordinaire de 230 V. Ce que cela coûte par jour et sur toute la durée de location, nous le calculons dans notre guide sur la consommation électrique d'un déshumidificateur de chantier. Un chauffage de chantier électrique de 20 ou 30 kW, c'est autre chose : il demande du courant triphasé de 400 V.",
    },
    {
      q: "Puis-je prolonger si mon chantier prend du retard ?",
      a: "Oui. La prolongation se fait en ligne, et vous ne payez alors que les jours supplémentaires au même tarif. Faites-le de préférence avant la date de fin : les appareils restent ainsi réservés pour vous au lieu de partir chez le client suivant.",
    },
    {
      q: `Combien de temps une chape de ${dikste?.dikte ?? 7} cm doit-elle sécher ?`,
      a: `Sans aide, la valeur indicative est d'environ ${natuurlijkeChapeWeken(dikste?.dikte ?? 7)} semaines, et uniquement dans un bâtiment chauffé et ventilé. Avec un pack de séchage, nos durées pour une chape sont de ${opsommingFr(CHAPE)}. C'est la mesure qui décide si le sol est prêt, pas le calendrier ; l'explication complète par centimètre se trouve dans notre guide sur le temps de séchage d'une chape.`,
    },
  ],
  verderLezen: [
    {
      kop: "Combien de temps et pourquoi",
      links: [
        { label: "Guide : combien de temps une chape doit-elle sécher ?" },
        { label: "Comment un déshumidificateur de chantier retire l'humidité d'une habitation" },
        { label: "Notre garantie de séchage à 100 % sur un pack calculé" },
        { label: "Sécher chape et plafonnage ensemble dans une nouvelle construction" },
      ],
    },
    {
      kop: "Les appareils pour sécher une chape",
      links: [
        { label: "Performance", sub: "L'appareil standard pour une maison neuve." },
        { label: "Ventilateur radial pour le séchage de chape", sub: "Souffle au ras du sol." },
        { label: "Chauffage de chantier électrique pour un chantier froid", sub: "Sous 15 °C, le séchage est lent." },
      ],
    },
    {
      kop: "Planning et prix",
      links: [
        { label: "Calculez votre pack selon la surface et l'épaisseur de chape" },
        { label: "Combien coûte la location d'un déshumidificateur de chantier ?" },
        { label: "Livraison et installation dans toute la Flandre" },
        { label: "Enlèvement sur place à Aartselaar" },
      ],
    },
  ],
  verderLezenKicker: "Pour aller plus loin",
  verderLezenTitel: "En savoir plus sur le séchage de chape",

  schemaNaam: "Séchage de chape",
  schemaBeschrijving:
    "Séchage actif d'une chape fraîche avec déshumidificateur de chantier, ventilateur et mesure, pour que le poseur de sol puisse commencer des semaines plus tôt.",
  schemaType: "Séchage de chantier",
  home: "Accueil",

  heroKicker: "Application · chape",
  heroH1: "Sécher une chape en quelques semaines, date de fin à l'appui.",
  heroP:
    "Une chape sable-ciment fraîche contient plus d'eau que le ciment n'en a besoin, et ce surplus doit ressortir par la surface. Nous plaçons les bons appareils sur votre chantier, réglons la valeur cible et mesurons l'humidité résiduelle au démarrage et à la réception. Votre poseur de sol reçoit une date plutôt qu'une estimation.",
  ctaPakket: "Calculez votre pack de séchage",
  heroAlt: "Déshumidificateur de chantier et ventilateur au travail sur une chape fraîche",
  badge: `${kortsteTermijn} à ${langsteTermijn} semaines`,
  badgeSub: `au lieu de ± ${natuurlijkeChapeWeken(6)} semaines naturellement`,

  vsKicker: "La différence",
  vsH2: "Une chape qui sèche seule dépend de la météo.",
  vsLede: `Dans de bonnes conditions, un sol de 6 cm met environ ${natuurlijkeChapeWeken(6)} semaines à sécher. En novembre, ces conditions ne sont pas réunies, et il faut alors attendre le printemps, sans que personne puisse vous dire combien de temps. Le séchage actif supprime cette incertitude.`,
  vsZonder: "Sans déshumidificateur",
  vsMet: "Avec un pack de séchage Vernast",

  tKicker: "Durée de location par épaisseur",
  tH2: "Quelle durée pour l'épaisseur de votre chape ?",
  tLede:
    "C'est l'épaisseur de la couche qui détermine la durée, pas votre surface : une habitation plus grande reçoit plus d'appareils, pas une location plus longue. Plus la chape est épaisse, plus l'humidité du fond a de chemin à parcourir, et c'est pourquoi la durée augmente plus vite que l'épaisseur.",
  tCaption: "Durée de location d'un pack chape par épaisseur, à côté de la valeur indicative sans déshumidificateur",
  tKolDikte: "Épaisseur de chape",
  tKolMet: "Avec un pack de séchage",
  tKolZonder: "Sans déshumidificateur (valeur indicative)",
  termijn: (r: DroogtermijnRij) => termijnLabelFr(r),
  natuurlijk: (dikte: number) => `± ${natuurlijkeChapeWeken(dikte)} semaines`,
  tNote: (lp: Lp): ReactNode => (
    <>
      La colonne avec un pack de séchage correspond à ce que prévoient nos packs, mesures
      initiale et finale comprises. La valeur indicative à côté suit la règle empirique courante
      pour une chape sable-ciment dans une pièce ventilée à environ 20 °C. Comment cette règle
      fonctionne, ce qui change avec l'anhydrite et comment procéder à la mise en chauffe avec
      un chauffage par le sol, vous le trouverez dans{" "}
      <Link to={lp("/gids/hoe-lang-moet-chape-drogen")}>notre guide sur le temps de séchage d'une chape</Link>.
      Aucune des deux colonnes ne remplace une mesure.
    </>
  ),

  wKicker: "Comment ça se passe",
  wH2: "Du jour de livraison à la libération du sol.",
  wLede:
    "Vous n'avez rien à mesurer ni à régler vous-même. Voici ce qui se passe entre le moment où vous nous communiquez la date et celui où votre poseur de sol peut commencer.",

  pKicker: "Quel appareil",
  pH2: "L'appareil adapté à votre sol.",
  pLede:
    "Pour une maison familiale ordinaire, le Performance est l'appareil que nous livrons le plus souvent, avec un ventilateur radial qui souffle au ras de la chape. Le calculateur convertit votre volume et l'épaisseur de votre chape en la bonne combinaison, avec un chauffage de chantier si votre chantier est trop froid.",

  mKicker: "La réception",
  mH2: "Quand le poseur de sol peut-il venir ?",
  mP1: "Une chape dure et de couleur claire peut encore être humide à cœur. Sous un parquet, du PVC ou un sol coulé, cette humidité se retrouve ensuite enfermée, et elle réapparaît sous forme de lames bombées ou de lés qui se décollent. C'est pourquoi c'est une mesure qui décide, et non le calendrier.",
  mP2: (rapport: string | null): ReactNode => (
    <>
      <b>Nous mesurons au démarrage et à la réception.</b> Ces deux valeurs sont comprises dans
      chaque pack, pour que personne ne doive décider au jugé. Si vous avez besoin d'un rapport
      signé pour votre poseur de sol ou votre dossier de construction, ajoutez un rapport
      d'humidité officiel{rapport ? ` pour ${rapport}` : ""}.
    </>
  ),
  mP3: (lp: Lp): ReactNode => (
    <>
      <b>C'est votre poseur de sol qui fixe la limite.</b> La valeur qu'il souhaite voir dépend
      du type de chape, du chauffage par le sol et de la finition. Demandez-la-lui à l'avance,
      vous saurez ainsi vers quoi vous séchez. Comment se déroule cette mesure, vous le lirez
      dans{" "}
      <Link to={lp("/gids/hoe-lang-moet-chape-drogen")}>notre guide sur le temps de séchage d'une chape</Link>.
    </>
  ),
  chips: ["Mesure initiale", "Mesure finale", "Rapport d'humidité sur demande", "Garantie de séchage"],
  mAlt: "Un carreleur pose les premiers carreaux sur une chape sèche dans une maison neuve",

  faqTitel: "Ce que les maîtres d'ouvrage nous demandent sur le séchage de chape.",

  rKicker: "Sur le terrain",
  rH2: "Des sols que nous avons déjà séchés.",
  rLede:
    "Trois dossiers avec les photos du chantier lui-même : ce qui devait sécher, quels appareils étaient en place et combien de temps cela a pris.",
  rAlle: "Voir tous les projets d'humidité de construction",
  mbKicker: "Prêt à démarrer",
  mbH3: "Donnez-nous votre surface et l'épaisseur de votre chape, nous vous donnons une date.",
  mbP: "Le calculateur convertit votre volume en un pack avec les bons appareils et la bonne durée. Vous choisissez vous-même le jour de livraison ; nous installons et mesurons.",
  mbAlt: "Un technicien Vernast note les résultats de mesure",

  cKicker: "Une question sur votre sol ?",
  cTitel: "Vous hésitez sur la durée ou le pack ?",
  cLede:
    "Donnez-nous votre surface, l'épaisseur de la chape et la date à laquelle le chapiste aura terminé. Vous recevez dans un délai d'un jour ouvrable une proposition d'un spécialiste du séchage.",
  cPlaceholder: "P. ex. nouvelle construction 140 m², chape de 6 cm posée le 3 novembre, le poseur de sol vient début décembre.",
};

const en: typeof nl = {
  zonder: [
    "Waiting for the weather to cooperate, and even longer in winter",
    "Your floor layer moves you down the list behind his next site",
    "Moisture seeps into skirting boards, door frames and whatever is already fitted",
    "Nobody knows when the floor will be ready: nothing is measured",
  ],
  met: [
    `A hire period of ${kortsteTermijn} to ${langsteTermijn} weeks, depending on the thickness of your screed`,
    "An end date you can pass on to your floor layer",
    "Moisture reading at the start and at handover",
    "Not dry by the end date? We extend free of charge",
  ],
  stappen: [
    {
      title: "You choose the delivery day",
      desc: "As soon as your screed fitter says the floor may be actively dried, you book the date. We deliver throughout Flanders, usually within a few working days, and you get a time slot instead of waiting in all day.",
    },
    {
      title: "An initial reading before anything runs",
      desc: "The technician records the residual moisture in the screed and the humidity in the room. That is the starting point the handover will be measured against, and it is why we can give you an end date.",
    },
    {
      title: "Setting up and adjusting",
      desc: "He places the units where they do their job, connects the condensate drain and sets the target value. From then on the unit runs day and night, and the humidistat throttles back by itself as soon as the air is dry enough.",
    },
    {
      title: "Air across the floor",
      desc: "A layer of saturated air hangs above fresh screed. A radial fan blows right across the surface so that dry air keeps reaching the floor. That saves days within the same hire period.",
    },
    {
      title: "Heat when the site is cold",
      desc: "A condensation dehumidifier works best between roughly 15 and 25 °C. If your site is colder than that, we add an electric site heater with a thermostat, so the screed keeps releasing its water instead of stalling.",
    },
    {
      title: "Final reading and collection",
      desc: "At the end we measure again. If the value is right, we collect the units and your floor layer can come in. If it is not, we extend free of charge until it is.",
    },
  ],
  faqs: [
    {
      q: "What does it cost to dry a screed?",
      a: "That depends on the volume of the room and the thickness of your screed: those two determine how many units are needed and how long they stay. The drying calculator asks for your floor area and screed thickness and immediately shows the package with its price, including delivery, installation and the moisture readings. All daily and weekly rates are also listed separately on our prices page.",
    },
    {
      q: "When can a construction dehumidifier go on fresh screed?",
      a: "Not straight away. Cement screed binds water chemically as it cures and still needs that water in the first phase. Ask your screed fitter from which day you may dry actively; that is usually a matter of days to a week. After that, the unit can run day and night. Our guide to screed drying time explains in detail why drying too early causes shrinkage cracks.",
    },
    {
      q: "How many units do I need for my floor area?",
      a: "That depends on the volume, not just the number of square metres: an open-plan home with high ceilings needs more than the same floor area in closed rooms. The calculator converts your volume into a package with the right number of units. For large sites or an unusual layout, it is best to give us a call and we will look at it with you.",
    },
    {
      q: "What if my screed is not dry by the end date?",
      a: "Then we extend free of charge until it is. That is the drying guarantee, and it applies to every package calculated with the calculator and booked with delivery and installation. It relies on the readings at the start and at handover: without those two readings there is nothing to check an end date against.",
    },
    {
      q: "Can I collect the units myself?",
      a: "Yes, you can collect individual construction dehumidifiers, fans and site heaters from our collection point along the A12 in Aartselaar. You then pay no transport and no installation. On the other hand, you decide the set-up yourself, and the moisture reading and the drying guarantee are not included in the hire; the unit itself is the same.",
    },
    {
      q: "How much electricity does a construction dehumidifier use on a screed?",
      a: "A condensation dehumidifier from our range draws between 0.75 and 1.4 kW and runs on an ordinary 230 V socket. What that costs per day and over the whole hire period is worked out in our guide to the power consumption of a construction dehumidifier. An electric site heater of 20 or 30 kW is a different matter: it needs a 400 V three-phase supply.",
    },
    {
      q: "Can I extend if my site runs late?",
      a: "Yes. You can extend online, and you then only pay for the extra days at the same rate. Ideally do it before the end date: the units then stay reserved for you instead of going to the next customer.",
    },
    {
      q: `How long does a ${dikste?.dikte ?? 7} cm screed take to dry?`,
      a: `On its own, the rule of thumb is about ${natuurlijkeChapeWeken(dikste?.dikte ?? 7)} weeks, and only in a heated and ventilated building. With a drying package, our screed hire periods are ${opsommingEn(CHAPE)}. The reading decides whether the floor is ready, not the calendar; the full explanation per centimetre is in our guide to screed drying time.`,
    },
  ],
  verderLezen: [
    {
      kop: "How long it takes and why",
      links: [
        { label: "Guide: how long does screed take to dry?" },
        { label: "How a construction dehumidifier draws moisture out of a home" },
        { label: "Our 100% drying guarantee on a calculated package" },
        { label: "Drying screed and plaster together in a new build" },
      ],
    },
    {
      kop: "The units for drying screed",
      links: [
        { label: "Performance", sub: "The standard unit for a new-build home." },
        { label: "Radial fan for screed drying", sub: "Blows right across the floor." },
        { label: "Electric site heater for a cold site", sub: "Below 15 °C, drying is slow." },
      ],
    },
    {
      kop: "Planning and prices",
      links: [
        { label: "Calculate your package by floor area and screed thickness" },
        { label: "What does dehumidifier hire cost?" },
        { label: "Delivery and installation throughout Flanders" },
        { label: "Collect it yourself in Aartselaar" },
      ],
    },
  ],
  verderLezenKicker: "Further reading",
  verderLezenTitel: "More about screed drying",

  schemaNaam: "Screed drying",
  schemaBeschrijving:
    "Active drying of fresh screed with a construction dehumidifier, fan and moisture readings, so the floor layer can start weeks earlier.",
  schemaType: "Construction drying",
  home: "Home",

  heroKicker: "Application · screed",
  heroH1: "Screed drying in weeks, with an end date in writing.",
  heroP:
    "Fresh sand-cement screed holds more water than the cement needs, and that surplus has to leave again through the surface. We put the right units on your site, set the target value and measure the residual moisture at the start and at handover. Your floor layer gets a date instead of an estimate.",
  ctaPakket: "Calculate your drying package",
  heroAlt: "Construction dehumidifier and fan at work on fresh screed",
  badge: `${kortsteTermijn} to ${langsteTermijn} weeks`,
  badgeSub: `instead of ± ${natuurlijkeChapeWeken(6)} weeks naturally`,

  vsKicker: "The difference",
  vsH2: "Screed left to dry on its own follows the weather.",
  vsLede: `In good conditions, a 6 cm floor takes about ${natuurlijkeChapeWeken(6)} weeks. In November those conditions are not there, and then it means waiting until spring, without anyone being able to tell you how long. Active drying takes that uncertainty away.`,
  vsZonder: "Without a construction dehumidifier",
  vsMet: "With a Vernast drying package",

  tKicker: "Hire period by thickness",
  tH2: "Which hire period suits your screed thickness?",
  tLede:
    "The thickness of the layer determines the hire period, not your floor area: a bigger home gets more units, not a longer hire. The thicker the screed, the further the moisture at the bottom has to travel, which is why the hire period grows faster than the thickness.",
  tCaption: "Hire period of a screed package by screed thickness, next to the rule of thumb without a construction dehumidifier",
  tKolDikte: "Screed thickness",
  tKolMet: "With a drying package",
  tKolZonder: "Without a dehumidifier (rule of thumb)",
  termijn: (r: DroogtermijnRij) => termijnLabelEn(r),
  natuurlijk: (dikte: number) => `± ${natuurlijkeChapeWeken(dikte)} weeks`,
  tNote: (lp: Lp): ReactNode => (
    <>
      The column with a drying package is what our packages provide for, including the initial
      and final readings. The rule of thumb next to it follows the common guideline for
      sand-cement screed in a ventilated room at around 20 °C. How that rule of thumb works,
      what is different with anhydrite and how to run the heating-up protocol with underfloor
      heating is explained in{" "}
      <Link to={lp("/gids/hoe-lang-moet-chape-drogen")}>our guide to screed drying time</Link>.
      Neither column replaces a moisture reading.
    </>
  ),

  wKicker: "How it works",
  wH2: "From delivery day to signing off the floor.",
  wLede:
    "You do not have to measure or set anything yourself. This is what happens from the moment you give us the date until the moment your floor layer can start.",

  pKicker: "Which unit",
  pH2: "The unit that suits your floor.",
  pLede:
    "For an ordinary family home, the Performance is the unit we deliver most often, with a radial fan that blows right across the screed. The calculator converts your volume and screed thickness into the right combination, with a site heater added if your site is too cold.",

  mKicker: "The handover",
  mH2: "When can the floor layer come in?",
  mP1: "A screed that is hard and light in colour can still be wet inside. Under parquet, vinyl or a poured floor that moisture is then trapped, and it comes back as cupped boards or strips coming loose. That is why a reading decides, not the calendar.",
  mP2: (rapport: string | null): ReactNode => (
    <>
      <b>We measure at the start and at handover.</b> Both values are included in every
      package, so nobody has to decide by feel. If you need a signed report for your floor
      layer or your building file, add an official moisture report
      {rapport ? ` for ${rapport}` : ""}.
    </>
  ),
  mP3: (lp: Lp): ReactNode => (
    <>
      <b>Your floor layer sets the limit.</b> Which value he wants to see depends on the type
      of screed, the underfloor heating and the finish. Ask him beforehand, so you know what
      you are drying towards. How that reading is taken is explained in{" "}
      <Link to={lp("/gids/hoe-lang-moet-chape-drogen")}>our guide to screed drying time</Link>.
    </>
  ),
  chips: ["Initial reading", "Final reading", "Moisture report on request", "Drying guarantee"],
  mAlt: "Floor layer fitting the first tiles on a dry screed in a new-build home",

  faqTitel: "What homeowners ask us about screed drying.",

  rKicker: "In practice",
  rH2: "Floors we have dried before.",
  rLede:
    "Three projects with photos from the site itself: what had to dry, which units were in place and how long it took.",
  rAlle: "View all construction moisture projects",
  mbKicker: "Ready to start",
  mbH3: "Give us your floor area and screed thickness, and we will give you a date.",
  mbP: "The calculator converts your volume into a package with the right units and the right hire period. You choose the delivery day; we install and measure.",
  mbAlt: "Vernast technician noting down the readings",

  cKicker: "A question about your floor?",
  cTitel: "Unsure about the hire period or the package?",
  cLede:
    "Give us your floor area, the screed thickness and when the screed fitter will be finished. Within one working day you will receive a proposal from a drying specialist.",
  cPlaceholder: "E.g. new build 140 m², 6 cm screed laid on 3 November, floor layer coming in early December.",
};

export const COPY = { nl, fr, en } satisfies Copy<typeof nl>;

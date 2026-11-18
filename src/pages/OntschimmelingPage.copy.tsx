import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { Copy } from "@/i18n/useTaal";

/**
 * Teksten van /ontschimmeling in elke taal. Nederlands letterlijk zoals het op
 * de pagina stond; elke lijst heeft per taal dezelfde lengte en volgorde (de
 * iconen van `inzet` staan op de pagina en volgen die volgorde).
 *
 * Tekst met een link erin is een functie van `lp`, zodat de link in de taal van
 * de pagina blijft.
 */
type Lp = (nlPad: string) => string;

interface Kaart {
  title: string;
  text: string;
}

export interface OntschimmelingTekst {
  faq: { question: string; answer: string }[];
  stappen: Kaart[];
  inzet: Kaart[];
  aanpak: [string, string][];
  schemaNaam: string;
  schemaBeschrijving: string;
  schemaType: string;
  kruimelHome: string;
  kruimel: string;
  heroKick: string;
  h1: string;
  heroTekst: string;
  plaatsbezoek: string;
  heroUsp: string[];
  herkenKick: string;
  herkenH2: string;
  herkenLede: string;
  herkenKaarten: Kaart[];
  noot: (lp: Lp) => ReactNode;
  waaromKick: string;
  waaromH2: string;
  waaromLede: string;
  waaromBody: string;
  aanpakKick: string;
  aanpakH2: string;
  aanpakLede: string;
  stageLabel: string;
  legO3: string;
  legSpore: string;
  na: (lp: Lp) => ReactNode;
  bandKick: string;
  bandH3: string;
  band: (lp: Lp) => ReactNode;
  bandAlt: string;
  inzetKick: string;
  inzetH2: string;
  inzetLede: string;
  veiligKick: string;
  veiligH2: string;
  veiligLede: string;
  veiligKaarten: Kaart[];
  reviewKick: string;
  reviewH2: string;
  reviewLede: string;
  sterren: (n: number) => string;
  faqKick: string;
  faqH2: string;
  faqHelpH3: string;
  faqHelp: string;
  bel: string;
  online: string;
  boekKick: string;
  boekH2: string;
  boekTekst: string;
  boekUsp: string[];
  liever: string;
  uren: (openingHours: string) => string;
  verstuurLabel: string;
}

export const ONTSCHIMMELING_COPY = {
  nl: {
    faq: [
      {
        question: "Kan ik schimmel niet gewoon zelf wegpoetsen?",
        answer:
          "Oppervlakkig reinigen haalt de zwarte vlek weg, maar niet de schimmel. De draden zitten in de poriën van pleister en voeg, en bij droogwrijven komen er juist sporen vrij die zich elders in de ruimte afzetten. Daarom werken wij afgeschermd, met onderdruk waar nodig, en verwijderen we eerst het aangetaste materiaal voor we behandelen.",
      },
      {
        question: "Wat kost een ontschimmeling?",
        answer:
          "Dat hangt af van de oppervlakte, hoe diep de aantasting zit en of het aangetaste materiaal weg moet. Een muur van enkele vierkante meters in een slaapkamer is iets anders dan een kelder waar het pleisterwerk eraf moet. Onze specialist komt kijken en geeft een vaste prijs voordat er iets gebeurt.",
      },
      {
        question: "Moet ik het huis uit tijdens de werken?",
        answer:
          "Meestal niet. Wij schermen de werkzone af zodat het stof en de sporen niet door de woning trekken, en werken kamer per kamer. Alleen tijdens een eventuele ozonbehandeling achteraf moet de behandelde ruimte enkele uren leeg zijn, ook van huisdieren en planten.",
      },
      {
        question: "Hoe weet ik of het vochtprobleem opgelost is?",
        answer:
          "Door te meten, niet te kijken. Wij meten het vochtgehalte in de ondergrond voor en na het drogen. Een muur die droog oogt kan vanbinnen nog nat zijn, en dan komt de schimmel terug, hoe grondig het oppervlak ook behandeld is. Pas als de meting droog zegt, werken we af.",
      },
      {
        question: "Wat is het verschil met een ozonbehandeling?",
        answer:
          "Ontschimmelen is het handwerk: de zichtbare schimmel en het aangetaste materiaal gaan weg, en de ondergrond wordt behandeld. Een ozonbehandeling is de afronding daarna: die ruimt de sporen op die in de lucht, in kieren en in textiel achterbleven. Ze vervangen elkaar niet, ze volgen op elkaar.",
      },
      {
        question: "Is schimmel in huis echt ongezond?",
        answer:
          "Schimmelsporen kunnen luchtwegklachten, hoofdpijn en vermoeidheid uitlokken, en ze treffen kinderen, ouderen en mensen met astma of een allergie het hardst. Dat is ook de reden om niet te wachten: hoe langer de ruimte vochtig blijft, hoe groter de kolonie en hoe meer sporen er in de lucht komen.",
      },
    ],
    stappen: [
      {
        title: "De oorzaak zoeken",
        text: "Eerst meten: waar komt het vocht vandaan? Een lek, optrekkend vocht, een koudebrug of gewoon te weinig ventilatie. Zonder dat antwoord is elke behandeling tijdelijk.",
      },
      {
        title: "Afschermen en verwijderen",
        text: "De werkzone wordt afgeschermd zodat sporen niet door de woning trekken. Aangetast pleisterwerk, behang of gipskarton gaat eruit, tot op een gezonde ondergrond.",
      },
      {
        title: "Behandelen en drogen",
        text: "De ondergrond wordt behandeld tegen hergroei en de constructie droogt met bouwdrogers tot de vochtmeting het bevestigt. Meten, niet gokken.",
      },
      {
        title: "Afronden met ozon",
        text: "Tot slot een ozonbehandeling: die doodt de sporen die in de lucht, in kieren en in textiel achterbleven, zodat de schimmel geen herstart krijgt.",
      },
    ],
    inzet: [
      {
        title: "Zwarte plekken op de muur",
        text: "De klassieker: een koude buitenmuur achter een kast, of de hoek van een slaapkamer die nooit opdroogt.",
      },
      {
        title: "Kelders & kruipruimtes",
        text: "Vochtige, slecht verluchte ruimtes waar schimmel maanden ongezien zijn gang kan gaan voor iemand het ruikt.",
      },
      {
        title: "Na waterschade",
        text: "Na een lek of een overstroming begint schimmel binnen 24 tot 48 uur. Snel drogen en ontschimmelen scheelt een renovatie.",
      },
      {
        title: "Muffe geur zonder vlek",
        text: "U ruikt het wel maar ziet niets: dan zit de schimmel achter de plint, onder de vloer of in de spouw.",
      },
      {
        title: "Allergie en luchtwegen",
        text: "Terugkerende klachten bij kinderen of bij wie astma heeft, die thuis erger zijn dan elders.",
      },
      {
        title: "Bij aankoop of verhuur",
        text: "Schimmel vastgesteld in een plaatsbeschrijving, of ontdekt net voor de overdracht van een woning.",
      },
    ],
    aanpak: [
      ["Plaatsbezoek", "Gratis en vrijblijvend"],
      ["Prijs", "Vast, vooraf afgesproken"],
      ["Werkzone", "Afgeschermd, kamer per kamer"],
      ["Oplevering", "Met vochtmeting als bewijs"],
    ],
    schemaNaam: "Ontschimmeling",
    schemaBeschrijving:
      "Schimmel verwijderen aan de bron: oorzaak opsporen, aangetast materiaal weghalen, de ondergrond behandelen, drogen tot de meting het bevestigt en afronden met ozon.",
    schemaType: "Ontschimmeling",
    kruimelHome: "Home",
    kruimel: "Ontschimmeling",
    heroKick: "Ontschimmeling · schimmel verwijderen",
    h1: "Schimmel verdwijnt pas echt als de oorzaak mee weggaat.",
    heroTekst:
      "Wij halen de schimmel weg tot op een gezonde ondergrond, drogen de constructie tot de vochtmeting het bevestigt en ronden af met ozon. Zo blijft het weg, in plaats van terug te komen zodra de verf droog is.",
    plaatsbezoek: "Vraag een plaatsbezoek",
    heroUsp: ["Gratis plaatsbezoek", "Vaste prijs vooraf", "Heel Vlaanderen"],
    herkenKick: "Herkenbaar?",
    herkenH2: "Weggepoetst, overgeschilderd, en na een maand staat hij er weer.",
    herkenLede:
      "Dat ligt niet aan hoe grondig u geschrobd heeft. Het ligt aan wat eronder zit, en wat er nog steeds voor zorgt dat die muur vochtig blijft.",
    herkenKaarten: [
      {
        title: "De oorzaak staat er nog",
        text: "Een lek, optrekkend vocht of een koudebrug blijft water aanvoeren. Zolang dat doorgaat, is elke behandeling van het oppervlak tijdelijk.",
      },
      {
        title: "De schimmel zit dieper",
        text: "Wat u ziet is de bloei aan de oppervlakte. De draden zitten in de poriën van pleister en voeg; een doek haalt daar niets weg.",
      },
      {
        title: "Verf sluit hem op",
        text: "Overschilderen verbergt de vlek een paar maanden. Daaronder groeit hij door, en daarna komt hij dwars door de nieuwe laag terug.",
      },
    ],
    noot: (lp) => (
      <>
        <b>Droog eerst, behandel daarna.</b> Een muur die droog oogt kan vanbinnen nog nat zijn.
        Daarom meten wij het vochtgehalte in de ondergrond, en drogen we zo nodig eerst met{" "}
        <Link to={lp("/verhuur/calculator")}>een berekend droogpakket</Link>. Pas als de meting droog
        zegt, heeft afwerken zin.
      </>
    ),
    waaromKick: "Waarom wachten niet helpt",
    waaromH2: "Een schimmel die blijft staan, wordt groter.",
    waaromLede:
      "Op vochtig materiaal begint schimmel na 24 tot 48 uur. Daarna groeit de kolonie door zolang het vocht er is, en elke dag komen er sporen in de lucht die zich elders in de woning afzetten.",
    waaromBody:
      "Die sporen zijn het echte probleem. Ze veroorzaken luchtwegklachten, hoofdpijn en vermoeidheid, en treffen kinderen, ouderen en mensen met astma het hardst. Daar komt de schade aan het gebouw bij: aangetast pleisterwerk, loskomend behang en, in een kelder of kruipruimte, houtrot in de vloerstructuur.",
    aanpakKick: "Onze aanpak",
    aanpakH2: "Vier stappen, en de laatste is niet de verf.",
    aanpakLede:
      "Ontschimmelen is geen schoonmaakbeurt maar een volgorde. Wie een stap overslaat, doet het binnen het jaar opnieuw.",
    stageLabel: "Schimmelmuur met animatie: actieve zuurstof breekt de achtergebleven sporen af",
    legO3: "actieve zuurstof",
    legSpore: "schimmelspore",
    na: (lp) => (
      <>
        Dat laatste is wat een gewone schoonmaakbeurt nooit haalt: ozon is een gas, dus het
        komt tot in kieren, voegen, textiel en het ventilatiekanaal. Daarna vervalt het
        vanzelf tot gewone zuurstof, zonder residu. Meer daarover op{" "}
        <Link to={lp("/ozonbehandeling")}>de pagina over ozonbehandeling</Link>.
      </>
    ),
    bandKick: "Waar drogen bij hoort",
    bandH3: "Wij zijn in de eerste plaats droogspecialisten.",
    band: (lp) => (
      <>
        Dat is ook waarom we bij schimmel eerst naar het vocht kijken. Na{" "}
        <Link to={lp("/waterschade")}>waterschade</Link> of in een{" "}
        <Link to={lp("/renovatie")}>vochtige kelder</Link> is de droging het halve werk; zonder
        droge ondergrond is ontschimmelen een behandeling met een houdbaarheidsdatum.
      </>
    ),
    bandAlt: "Vernast-specialist behandelt een muur tegen schimmel",
    inzetKick: "Waar we voor komen",
    inzetH2: "Van één hoek tot een hele kelder.",
    inzetLede: "Schimmel ziet er overal anders uit. Dit zijn de situaties waarvoor men ons belt.",
    veiligKick: "Veilig & verantwoord",
    veiligH2: "Zonder dat de rest van uw woning besmet raakt.",
    veiligLede:
      "Schimmel verwijderen doet sporen opwaaien. Daarom werken we afgeschermd, met de juiste bescherming, en gaat het aangetaste materiaal gesloten de deur uit.",
    veiligKaarten: [
      {
        title: "Afgeschermde werkzone",
        text: "De kamer wordt afgesloten van de rest van de woning, zodat stof en sporen niet meereizen naar de gang of de slaapkamers.",
      },
      {
        title: "Beschermd werken",
        text: "Onze techniekers dragen pak en masker. Niet voor de show: bij het verwijderen komen er sporen vrij die u niet wilt inademen.",
      },
      {
        title: "Afval gaat gesloten weg",
        text: "Aangetast pleisterwerk, behang of gipskarton verlaat de woning verpakt, zodat de besmetting niet onderweg alsnog loskomt.",
      },
      {
        title: "Eerlijk over de oorzaak",
        text: "Zit het probleem in de constructie, dan zeggen we dat. Soms is een muurinjectie of betere ventilatie het echte antwoord, en niet onze behandeling.",
      },
    ],
    reviewKick: "Wat klanten zeggen",
    reviewH2: "Hoe wij werken, in hun woorden.",
    reviewLede:
      "Beoordelingen van Vernast op Google en Solvari, letterlijk overgenomen. Over snelheid, opvolging en afspraken nakomen, want dat is wat werk bij u thuis vraagt.",
    sterren: (n) => `${n} van 5 sterren`,
    faqKick: "Veelgestelde vragen",
    faqH2: "Uw vragen over ontschimmeling.",
    faqHelpH3: "Staat uw vraag er niet bij?",
    faqHelp:
      "Onze specialist komt gratis kijken en zegt eerlijk wat er moet gebeuren, en in welke volgorde.",
    bel: "Bel",
    online: "Stel uw vraag online",
    boekKick: "Vraag een plaatsbezoek",
    boekH2: "Schimmel in huis? Laat er eerst iemand naar kijken.",
    boekTekst:
      "Vul hieronder uw situatie in, dan belt een specialist u binnen één werkdag. Het bezoek is gratis en vrijblijvend, en u krijgt een vaste prijs voordat er iets gebeurt.",
    boekUsp: [
      "Reactie binnen één werkdag",
      "Eerlijk advies: soms is drogen of ventileren het echte antwoord",
      "Werkzaam in heel Vlaanderen",
    ],
    liever: "Liever meteen bellen?",
    uren: (u) => u.replace("Mo-Fr", "ma–vr").replace(" 08:00-17:00", ", 8u–17u"),
    verstuurLabel: "Vraag een plaatsbezoek aan",
  },
  fr: {
    faq: [
      {
        question: "Ne puis-je pas simplement enlever les moisissures moi-même ?",
        answer:
          "Un nettoyage en surface enlève la tache noire, mais pas les moisissures. Les filaments sont logés dans les pores de l'enduit et des joints, et en frottant à sec on libère justement des spores qui se déposent ailleurs dans la pièce. C'est pourquoi nous travaillons en zone confinée, avec mise en dépression si nécessaire, et retirons d'abord les matériaux atteints avant de traiter.",
      },
      {
        question: "Combien coûte une élimination des moisissures ?",
        answer:
          "Cela dépend de la surface, de la profondeur de l'atteinte et de la nécessité de retirer les matériaux atteints. Un mur de quelques mètres carrés dans une chambre, ce n'est pas la même chose qu'une cave dont le plafonnage doit être enlevé. Notre spécialiste vient voir et vous donne un prix fixe avant toute intervention.",
      },
      {
        question: "Dois-je quitter la maison pendant les travaux ?",
        answer:
          "En général, non. Nous isolons la zone de travail pour que la poussière et les spores ne se répandent pas dans l'habitation, et travaillons pièce par pièce. Seulement pendant un éventuel traitement à l'ozone par la suite, la pièce traitée doit rester vide quelques heures, animaux et plantes compris.",
      },
      {
        question: "Comment savoir si le problème d'humidité est réglé ?",
        answer:
          "En mesurant, pas en regardant. Nous mesurons le taux d'humidité du support avant et après le séchage. Un mur qui a l'air sec peut encore être humide à l'intérieur, et les moisissures reviennent alors, quel que soit le soin apporté au traitement de la surface. Nous ne passons à la finition que lorsque la mesure indique « sec ».",
      },
      {
        question: "Quelle est la différence avec un traitement à l'ozone ?",
        answer:
          "L'élimination des moisissures est le travail manuel : les moisissures visibles et les matériaux atteints sont retirés, et le support est traité. Un traitement à l'ozone est la finition qui suit : il élimine les spores restées dans l'air, dans les fissures et dans les textiles. L'un ne remplace pas l'autre, ils se suivent.",
      },
      {
        question: "Les moisissures dans la maison sont-elles vraiment mauvaises pour la santé ?",
        answer:
          "Les spores de moisissures peuvent provoquer des troubles respiratoires, des maux de tête et de la fatigue, et touchent le plus durement les enfants, les personnes âgées et les personnes asthmatiques ou allergiques. C'est aussi la raison de ne pas attendre : plus la pièce reste humide longtemps, plus la colonie grandit et plus il y a de spores dans l'air.",
      },
    ],
    stappen: [
      {
        title: "Rechercher la cause",
        text: "D'abord mesurer : d'où vient l'humidité ? Une fuite, des remontées capillaires, un pont thermique ou simplement une ventilation insuffisante. Sans cette réponse, tout traitement est provisoire.",
      },
      {
        title: "Confiner et retirer",
        text: "La zone de travail est isolée pour que les spores ne se répandent pas dans l'habitation. Le plafonnage, le papier peint ou les plaques de plâtre atteints sont retirés, jusqu'à un support sain.",
      },
      {
        title: "Traiter et sécher",
        text: "Le support est traité contre la repousse et la construction sèche avec des déshumidificateurs de chantier jusqu'à ce que la mesure d'humidité le confirme. Mesurer, pas deviner.",
      },
      {
        title: "Terminer à l'ozone",
        text: "Pour finir, un traitement à l'ozone : il tue les spores restées dans l'air, dans les fissures et dans les textiles, pour que les moisissures ne puissent pas repartir.",
      },
    ],
    inzet: [
      {
        title: "Taches noires sur le mur",
        text: "Le grand classique : un mur extérieur froid derrière une armoire, ou le coin d'une chambre qui ne sèche jamais.",
      },
      {
        title: "Caves & vides ventilés",
        text: "Des espaces humides et mal aérés où les moisissures peuvent se développer pendant des mois sans être vues, avant que quelqu'un ne les sente.",
      },
      {
        title: "Après des dégâts des eaux",
        text: "Après une fuite ou une inondation, les moisissures apparaissent en 24 à 48 heures. Sécher et éliminer les moisissures rapidement évite une rénovation.",
      },
      {
        title: "Odeur de moisi sans tache",
        text: "Vous le sentez mais ne voyez rien : les moisissures se cachent alors derrière la plinthe, sous le sol ou dans le creux du mur.",
      },
      {
        title: "Allergies et voies respiratoires",
        text: "Des troubles récurrents chez les enfants ou les personnes asthmatiques, plus marqués à la maison qu'ailleurs.",
      },
      {
        title: "Lors d'un achat ou d'une location",
        text: "Moisissures constatées dans un état des lieux, ou découvertes juste avant la remise d'une habitation.",
      },
    ],
    aanpak: [
      ["Visite sur place", "Gratuite et sans engagement"],
      ["Prix", "Fixe, convenu à l'avance"],
      ["Zone de travail", "Confinée, pièce par pièce"],
      ["Réception", "Avec mesure d'humidité comme preuve"],
    ],
    schemaNaam: "Élimination des moisissures",
    schemaBeschrijving:
      "Éliminer les moisissures à la source : rechercher la cause, retirer les matériaux atteints, traiter le support, sécher jusqu'à confirmation par la mesure et terminer à l'ozone.",
    schemaType: "Élimination des moisissures",
    kruimelHome: "Accueil",
    kruimel: "Élimination des moisissures",
    heroKick: "Élimination des moisissures · retirer les moisissures",
    h1: "Les moisissures ne disparaissent vraiment que si la cause disparaît aussi.",
    heroTekst:
      "Nous retirons les moisissures jusqu'à un support sain, séchons la construction jusqu'à ce que la mesure d'humidité le confirme et terminons à l'ozone. Ainsi, elles ne reviennent pas dès que la peinture est sèche.",
    plaatsbezoek: "Demandez une visite sur place",
    heroUsp: ["Visite sur place gratuite", "Prix fixe à l'avance", "Toute la Flandre"],
    herkenKick: "Cela vous parle ?",
    herkenH2: "Nettoyées, repeintes, et un mois plus tard elles sont de retour.",
    herkenLede:
      "Cela ne tient pas à la minutie de votre nettoyage. Cela tient à ce qui se trouve dessous, et à ce qui maintient ce mur humide.",
    herkenKaarten: [
      {
        title: "La cause est toujours là",
        text: "Une fuite, des remontées capillaires ou un pont thermique continuent d'apporter de l'eau. Tant que cela dure, tout traitement de surface est provisoire.",
      },
      {
        title: "Les moisissures sont plus profondes",
        text: "Ce que vous voyez n'est que la floraison en surface. Les filaments sont logés dans les pores de l'enduit et des joints ; un chiffon n'y enlève rien.",
      },
      {
        title: "La peinture les enferme",
        text: "Repeindre cache la tache quelques mois. En dessous, elles continuent de pousser, puis réapparaissent à travers la nouvelle couche.",
      },
    ],
    noot: (lp) => (
      <>
        <b>D'abord sécher, ensuite traiter.</b> Un mur qui a l'air sec peut encore être humide à
        l'intérieur. C'est pourquoi nous mesurons le taux d'humidité du support et, si nécessaire,
        séchons d'abord avec{" "}
        <Link to={lp("/verhuur/calculator")}>un pack de séchage calculé</Link>. Ce n'est que lorsque
        la mesure indique «&nbsp;sec&nbsp;» que la finition a du sens.
      </>
    ),
    waaromKick: "Pourquoi attendre n'aide pas",
    waaromH2: "Des moisissures qu'on laisse en place s'étendent.",
    waaromLede:
      "Sur un matériau humide, les moisissures apparaissent après 24 à 48 heures. La colonie continue ensuite de croître tant que l'humidité est présente, et chaque jour des spores passent dans l'air et se déposent ailleurs dans l'habitation.",
    waaromBody:
      "Ces spores sont le vrai problème. Elles provoquent des troubles respiratoires, des maux de tête et de la fatigue, et touchent le plus durement les enfants, les personnes âgées et les personnes asthmatiques. À cela s'ajoutent les dégâts au bâtiment : plafonnage atteint, papier peint qui se décolle et, dans une cave ou un vide ventilé, pourriture du bois dans la structure du plancher.",
    aanpakKick: "Notre méthode",
    aanpakH2: "Quatre étapes, et la dernière n'est pas la peinture.",
    aanpakLede:
      "Éliminer les moisissures n'est pas un simple nettoyage, mais un ordre à respecter. Qui saute une étape recommence dans l'année.",
    stageLabel: "Mur moisi avec animation : l'oxygène actif détruit les spores résiduelles",
    legO3: "oxygène actif",
    legSpore: "spore de moisissure",
    na: (lp) => (
      <>
        C'est ce qu'un simple nettoyage n'atteint jamais&nbsp;: l'ozone est un gaz, il pénètre donc
        jusque dans les fissures, les joints, les textiles et le conduit de ventilation. Il se
        décompose ensuite de lui-même en oxygène ordinaire, sans résidu. Plus d'infos sur{" "}
        <Link to={lp("/ozonbehandeling")}>la page consacrée au traitement à l'ozone</Link>.
      </>
    ),
    bandKick: "Là où le séchage intervient",
    bandH3: "Nous sommes avant tout des spécialistes du séchage.",
    band: (lp) => (
      <>
        C'est aussi pourquoi, face aux moisissures, nous regardons d'abord l'humidité. Après des{" "}
        <Link to={lp("/waterschade")}>dégâts des eaux</Link> ou dans une{" "}
        <Link to={lp("/renovatie")}>cave humide</Link>, le séchage représente la moitié du travail&nbsp;;
        sans support sec, l'élimination des moisissures est un traitement avec une date de
        péremption.
      </>
    ),
    bandAlt: "Spécialiste Vernast traitant un mur contre les moisissures",
    inzetKick: "Pour quoi on nous appelle",
    inzetH2: "D'un seul coin à toute une cave.",
    inzetLede:
      "Les moisissures se présentent partout différemment. Voici les situations pour lesquelles on nous appelle.",
    veiligKick: "Sûr & responsable",
    veiligH2: "Sans contaminer le reste de votre habitation.",
    veiligLede:
      "Retirer des moisissures soulève des spores. C'est pourquoi nous travaillons en zone confinée, avec la protection adéquate, et les matériaux atteints quittent l'habitation emballés.",
    veiligKaarten: [
      {
        title: "Zone de travail confinée",
        text: "La pièce est isolée du reste de l'habitation, pour que la poussière et les spores ne gagnent pas le couloir ou les chambres.",
      },
      {
        title: "Travail protégé",
        text: "Nos techniciens portent combinaison et masque. Pas pour la forme : le retrait libère des spores que vous ne voulez pas respirer.",
      },
      {
        title: "Déchets évacués emballés",
        text: "Le plafonnage, le papier peint ou les plaques de plâtre atteints quittent l'habitation emballés, pour que la contamination ne se libère pas en chemin.",
      },
      {
        title: "Honnêtes sur la cause",
        text: "Si le problème vient de la construction, nous vous le disons. Parfois, une injection dans les murs ou une meilleure ventilation est la vraie réponse, et pas notre traitement.",
      },
    ],
    reviewKick: "Ce que disent nos clients",
    reviewH2: "Notre façon de travailler, avec leurs mots.",
    reviewLede:
      "Avis sur Vernast publiés sur Google et Solvari, repris tels quels (en néerlandais). Sur la rapidité, le suivi et le respect des engagements, car c'est ce que demande un chantier chez vous.",
    sterren: (n) => `${n} étoiles sur 5`,
    faqKick: "Questions fréquentes",
    faqH2: "Vos questions sur l'élimination des moisissures.",
    faqHelpH3: "Votre question n'y figure pas ?",
    faqHelp:
      "Notre spécialiste vient voir gratuitement et vous dit honnêtement ce qui doit être fait, et dans quel ordre.",
    bel: "Appelez le",
    online: "Posez votre question en ligne",
    boekKick: "Demandez une visite sur place",
    boekH2: "Des moisissures chez vous ? Faites d'abord examiner la situation.",
    boekTekst:
      "Décrivez votre situation ci-dessous et un spécialiste vous appelle dans un délai d'un jour ouvrable. La visite est gratuite et sans engagement, et vous recevez un prix fixe avant toute intervention.",
    boekUsp: [
      "Réponse dans un délai d'un jour ouvrable",
      "Un conseil honnête : parfois, sécher ou ventiler est la vraie réponse",
      "Actifs dans toute la Flandre",
    ],
    liever: "Vous préférez appeler tout de suite ?",
    uren: (u) => u.replace("Mo-Fr", "lun–ven").replace(" 08:00-17:00", ", 8 h–17 h"),
    verstuurLabel: "Demander une visite sur place",
  },
} satisfies Copy<OntschimmelingTekst>;

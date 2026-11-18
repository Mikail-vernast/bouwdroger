import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { Copy } from "@/i18n/useTaal";
import { droogtermijnen, termijnLabel, termijnZonderDikte, type DroogtermijnRij } from "@/lib/droogtijden";
import { termijnLabelFr } from "./termijnLabelFr";

/**
 * Teksten van /pleisterwerk-drogen in het Nederlands en het Frans. De
 * termijnen komen in beide talen uit de catalogus, nooit overgetypt.
 */

export const PLEISTER = droogtermijnen("pleister");
export const BEIDE = termijnZonderDikte("beide");
const kortsteTermijn = Math.min(...PLEISTER.map((r) => r.min));
const langsteTermijn = Math.max(...PLEISTER.map((r) => r.max));

/** "1 cm: 2 weken, 2 cm: 3 weken en 3 cm: 4 weken" voor lopende tekst. */
function opsomming(rijen: typeof PLEISTER): string {
  const delen = rijen.map((r) => `${r.dikte} cm: ${termijnLabel(r)}`);
  if (delen.length <= 1) return delen.join("");
  return `${delen.slice(0, -1).join(", ")} en ${delen[delen.length - 1]}`;
}

function opsommingFr(rijen: typeof PLEISTER): string {
  const delen = rijen.map((r) => `${r.dikte} cm : ${termijnLabelFr(r)}`);
  if (delen.length <= 1) return delen.join("");
  return `${delen.slice(0, -1).join(", ")} et ${delen[delen.length - 1]}`;
}

type Lp = (nlPad: string) => string;

const nl = {
  zonder: [
    "De muren geven af tot de lucht verzadigd is, en dan stopt het",
    "Condens op ramen en koude buitenmuren, soms schimmel in de hoeken",
    "De schilder kan niet starten en schuift u door naar zijn volgende werf",
    "Te vroeg geschilderd: bladderende verf of vlekken, en opnieuw beginnen",
  ],
  met: [
    `Een huurtermijn van ${kortsteTermijn} tot ${langsteTermijn} weken, volgens de laagdikte`,
    "Het vocht verlaat het gebouw in plaats van neer te slaan op het glas",
    "Een einddatum die u aan uw schilder of behanger kunt doorgeven",
    "Meting van de restvochtigheid bij de start en bij de oplevering",
  ],
  stappen: [
    {
      title: "U kiest de leverdag",
      desc: "Zodra het pleisterwerk gezet is en het oppervlak hard aanvoelt, boekt u de datum. Wij leveren in heel Vlaanderen, meestal binnen enkele werkdagen, en u krijgt een tijdvenster in plaats van een hele dag wachten.",
    },
    {
      title: "Voormeting vóór er iets draait",
      desc: "De technieker legt de restvochtigheid van de muren en de luchtvochtigheid in de ruimte vast. Dat startpunt is de reden dat wij een einddatum kunnen geven in plaats van een inschatting.",
    },
    {
      title: "Plaatsen en instellen",
      desc: "Hij zet de toestellen centraal in de ruimte, vrij van de muren, sluit de condensafvoer aan en stelt de streefwaarde in. Daarna draait alles dag en nacht; de hygrostaat schakelt zelf terug zodra de lucht droog genoeg is.",
    },
    {
      title: "Lucht in beweging",
      desc: "Tegen een verse muur blijft een laag verzadigde lucht staan, en in hoeken en achter deuren beweegt helemaal niets. Een ventilator veegt die laag weg, zodat droge lucht het vocht kan oppikken.",
    },
    {
      title: "Warmte als de werf koud staat",
      desc: "Een condensdroger werkt het best tussen ongeveer 15 en 25 °C. Staat uw werf kouder, dan komt er een elektrische bouwkachel met thermostaat bij. Die verwarmt de ruimte gelijkmatig, en niet één muur van dichtbij.",
    },
    {
      title: "Nameting en ophaling",
      desc: "Op het einde meten we opnieuw. Is de waarde in orde, dan halen wij de toestellen op en kan uw schilder of behanger starten. Is ze dat niet, dan verlengen wij kosteloos tot ze wel in orde is.",
    },
  ],
  faqs: [
    {
      q: "Wat kost het drogen van pleisterwerk?",
      a: "Dat hangt af van het volume van de ruimte en van de laagdikte: die twee bepalen hoeveel toestellen er nodig zijn en hoe lang ze blijven staan. De droogcalculator vraagt uw oppervlakte en de dikte van de laag en toont meteen het pakket met de prijs, inclusief levering, installatie en de metingen. Alle dag- en weektarieven staan ook los op onze prijzenpagina.",
    },
    {
      q: "Wanneer mag de bouwdroger aan na het pleisteren?",
      a: "Zodra het oppervlak hard is, doorgaans sneller dan bij een chape. Wat u in die eerste dagen niet doet, is keihard drogen of een kachel vlak voor een muur zetten: dan droogt het oppervlak uit terwijl de laag eronder nog nat is, en dat geeft krimpscheuren of een poederige bovenlaag. Verwarm gelijkmatig en laat het toestel daarna dag en nacht doorlopen.",
    },
    {
      q: "Moet ik de ramen openzetten terwijl de droger draait?",
      a: "Nee, houd ze dicht. Een condensdroger droogt de lucht in een afgesloten ruimte; staat er een raam open, dan haalt hij voortdurend nieuwe, vochtige buitenlucht binnen en droogt hij de straat in plaats van uw muren. Ventileren helpt alleen als de buitenlucht droger is dan de binnenlucht, en dat is in België een groot deel van het jaar niet zo.",
    },
    {
      q: "Wanneer mag de schilder of de behanger komen?",
      a: "Als een meting bevestigt dat de laag droog is, niet wanneer de muur egaal licht oogt. Verf op een te natte ondergrond kan bladderen of vlekken, en behang sluit het restvocht helemaal op: daar groeit schimmel achter die u pas maanden later ziet. Vraag uw schilder welke waarde hij wil zien en welke eerste laag hij gebruikt; een dampopen grondlaag laat de muur verder ademen.",
    },
    {
      q: "Kan ik pleisterwerk en chape samen laten drogen?",
      a: BEIDE
        ? `Ja, en in een nieuwbouw is dat ook de normale gang van zaken. Daarvoor bestaat een pakket dat vloer en muren samen droogt, met een huurtermijn van ${termijnLabel(
            BEIDE,
          )}. U huurt dan één keer en meet één keer in plaats van twee droogrondes na elkaar. Samen drogen vraagt wel meer capaciteit, want er komt in dezelfde ruimte veel meer water vrij; de Calculator rekent dat uit.`
        : "Ja, en in een nieuwbouw is dat ook de normale gang van zaken. Samen drogen vraagt wel meer capaciteit dan een van de twee apart, want er komt in dezelfde ruimte veel meer water vrij. De Calculator rekent uit welk pakket daarbij hoort.",
    },
    {
      q: "Wat als mijn muren op de einddatum nog niet droog zijn?",
      a: "Dan verlengen wij kosteloos tot ze dat wel zijn. Dat is de Drooggarantie, en ze geldt op elk pakket dat via de Calculator berekend en met levering en installatie geboekt is. Ze steunt op de meting bij de start en bij de oplevering: zonder die twee metingen is er niets om een einddatum aan af te toetsen.",
    },
    {
      q: "Kan ik de toestellen zelf afhalen?",
      a: "Ja, losse bouwdrogers, ventilatoren en bouwkachels haalt u op in ons afhaalpunt langs de A12 in Aartselaar. U betaalt dan geen transport en geen installatie, maar u bepaalt zelf de opstelling en de vochtmeting en de Drooggarantie zitten niet bij de huur. Het toestel zelf is hetzelfde.",
    },
    {
      q: "Hoe lang moet pleisterwerk drogen?",
      a: `Met een droogpakket lopen onze pleistertermijnen ${opsomming(
        PLEISTER,
      )}. Zonder droger valt er geen termijn te beloven: dan bepaalt de luchtvochtigheid in uw gebouw het tempo, en in een koud, dichtgemaakt huis staat de droging stil in plaats van traag te lopen. De volledige uitleg, met het verschil tussen gips- en cementpleister, staat in onze gids over de droogtijd van pleisterwerk.`,
    },
  ],
  verderLezen: [
    {
      kop: "Hoe lang het duurt en waarom",
      links: [
        { label: "Gids: hoe lang moet pleisterwerk drogen?" },
        { label: "Hoe een bouwdroger het vocht uit een woning haalt" },
        { label: "Onze 100 % drooggarantie op een berekend pakket" },
        { label: "Chape en pleisterwerk samen drogen in nieuwbouw" },
      ],
    },
    {
      kop: "De toestellen voor een pleisterdroging",
      links: [
        { label: "Performance", sub: "Het standaardtoestel voor een nieuwbouwwoning." },
        { label: "Ventilator om de lucht in beweging te houden", sub: "Tegen stilstaande lucht in hoeken." },
        { label: "Elektrische bouwkachel voor een koude werf", sub: "Onder 15 °C droogt het traag." },
      ],
    },
    {
      kop: "Plannen en prijzen",
      links: [
        { label: "Bereken uw pakket op oppervlakte en laagdikte" },
        { label: "Wat kost een bouwdroger huren?" },
        { label: "Levering en installatie in heel Vlaanderen" },
        { label: "Zelf afhalen in Aartselaar" },
      ],
    },
  ] as { kop: string; links: { label: string; sub?: string }[] }[],
  verderLezenKicker: "Verder lezen",
  verderLezenTitel: "Verder lezen over pleisterwerk drogen",

  schemaNaam: "Pleisterwerk drogen",
  schemaBeschrijving:
    "Actieve droging van vers pleisterwerk met bouwdroger, ventilator en meting, zodat de schilder weken vroeger kan starten.",
  schemaType: "Bouwdroging",
  home: "Home",

  heroKicker: "Toepassing · pleisterwerk",
  heroH1: "Pleisterwerk drogen, zodat de schilder niet staat te wachten.",
  heroP:
    "Vers pleisterwerk geeft dagenlang water af aan de lucht. Staat het gebouw dicht, dan blijft dat water binnen en stopt de droging zodra de lucht verzadigd is. Wij halen het eruit met de juiste toestellen, meten de restvochtigheid bij de start en bij de oplevering, en geven u een datum waarop uw schilder kan starten.",
  ctaPakket: "Bereken uw droogpakket",
  heroAlt: "Vers gipspleister met donkere vochtzones naast al drogend pleisterwerk",
  badge: `${kortsteTermijn} tot ${langsteTermijn} weken`,
  badgeSub: "met een droogpakket, naar laagdikte",

  vsKicker: "Het verschil",
  vsH2: "Het vocht gaat de muur uit, niet vanzelf het huis uit.",
  vsLede:
    "Een pleisterlaag geeft haar water vlot af; dat is het makkelijke deel. Het moeilijke deel is wat er daarna met dat water gebeurt. In een dichtgemaakt gebouw hangt het in de lucht tot die verzadigd is, en vanaf dat punt droogt er niets meer.",
  vsZonder: "Zonder bouwdroger",
  vsMet: "Met een Vernast-droogpakket",

  tKicker: "Huurtermijn per laagdikte",
  tH2: "Welke termijn hoort bij uw pleisterwerk?",
  tLede:
    "De dikte van de laag bepaalt de termijn, niet uw oppervlakte: een grotere woning krijgt meer toestellen, geen langere huur. Een dubbele laag betekent dubbel zoveel aanmaakwater dat door hetzelfde oppervlak naar buiten moet.",
  tCaption: "Huurtermijn van een pleisterpakket per laagdikte, en van het combipakket met chape",
  tKolDikte: "Laagdikte",
  tKolMet: "Met een droogpakket",
  tKolWaar: "Waar u die dikte tegenkomt",
  rijEerste: "De gangbare binnenbepleistering: gips, machinaal in één laag.",
  rijMidden: "Een dikkere opbouw of een uitvlaklaag op een muur die niet recht staat.",
  rijLaatste: "Zwaar werk in meerdere lagen, zoals een cementering in een natte ruimte.",
  rijBeide: "Pleister + chape",
  rijBeideWaar: "Een nieuwbouw waar muren en vloer tegelijk nat staan, in één pakket.",
  termijn: (r: DroogtermijnRij) => termijnLabel(r),
  tNote: (lp: Lp): ReactNode => (
    <>
      Deze termijnen zijn wat onze pakketten voorzien, inclusief voor- en nameting. Waarom het
      vocht in een dichtgemaakt huis blijft hangen, wat er anders is bij cementgebonden werk en
      wanneer u mag schilderen, staat in{" "}
      <Link to={lp("/gids/hoe-lang-moet-pleisterwerk-drogen")}>
        onze gids over de droogtijd van pleisterwerk
      </Link>
      . Geen enkele termijn vervangt een meting.
    </>
  ),

  wKicker: "Zo verloopt het",
  wH2: "Van leverdag tot vrijgave van de muren.",
  wLede:
    "U hoeft zelf niets op te meten of in te stellen. Dit is wat er gebeurt vanaf het moment dat u de datum doorgeeft tot het moment dat uw schilder kan starten.",

  pKicker: "Welk toestel",
  pH2: "Het toestel dat bij uw ruimte past.",
  pLede:
    "Pleisterwerk beslaat alle muren en plafonds, dus telt het volume van de ruimte en niet alleen het aantal vierkante meter muur. De Calculator rekent dat volume door naar de juiste combinatie, met een ventilator tegen stilstaande lucht en een bouwkachel als uw werf te koud staat.",
  pNote: (lp: Lp): ReactNode => (
    <>
      <b>Liever zelf ophalen?</b> Losse bouwdrogers, ventilatoren en bouwkachels haalt u aan
      afhaalprijs op in ons <Link to={lp("/verhuur/afhalen")}>afhaalpunt langs de A12 in
      Aartselaar</Link>. De vochtmeting en de Drooggarantie horen dan niet bij de huur, maar het
      toestel is hetzelfde.
    </>
  ),

  mKicker: "De oplevering",
  mH2: "Wanneer mag de schilder komen?",
  mP1: "Een muur die egaal licht is en droog aanvoelt, kan vanbinnen nog nat zijn. Verf op zo'n ondergrond kan bladderen of vlekken, en behang sluit het restvocht helemaal op. Daarom beslist een meting en niet de kleur van de muur.",
  mP2: (rapport: string | null): ReactNode => (
    <>
      <b>Wij meten bij de start en bij de oplevering.</b> Die twee waarden zitten in elk
      pakket, zodat niemand op gevoel moet beslissen. Heeft u een ondertekend verslag nodig
      voor uw schilder of uw bouwdossier, dan neemt u een officieel vochtrapport bij
      {rapport ? ` voor ${rapport}` : ""}.
    </>
  ),
  mP3: (lp: Lp): ReactNode => (
    <>
      <b>Uw schilder bepaalt de grens.</b> Hij kent zijn verf en zijn grondlaag; vraag hem
      vooraf welke waarde hij wil zien en of hij dampopen begint. Hoe die meting gebeurt,
      leest u in{" "}
      <Link to={lp("/gids/hoe-lang-moet-pleisterwerk-drogen")}>
        onze gids over de droogtijd van pleisterwerk
      </Link>
      .
    </>
  ),
  chips: ["Voormeting", "Nameting", "Vochtrapport op aanvraag", "Drooggarantie"],
  mAlt: "Vernast technicus meet de restvochtigheid van een bepleisterde muur",

  faqTitel: "Wat bouwheren ons vragen over pleisterwerk drogen.",

  rKicker: "Uit de praktijk",
  rH2: "Muren die we eerder drooglegden.",
  rLede:
    "Drie dossiers met de foto's van de werf zelf: wat er moest drogen, welke toestellen er stonden en hoe lang het duurde.",
  rAlle: "Alle projecten met bouwvocht bekijken",
  mbKicker: "Klaar om te starten",
  mbH3: "Geef ons uw oppervlakte en uw laagdikte, wij geven u een datum.",
  mbP: "De Calculator rekent uw volume door naar een pakket met de juiste toestellen en de juiste termijn. U kiest zelf de leverdag; wij plaatsen en meten.",
  mbAlt: "Vernast technicus noteert de meetresultaten",

  cKicker: "Een vraag over uw muren?",
  cTitel: "Twijfelt u over de termijn of het pakket?",
  cLede:
    "Geef ons uw oppervlakte, de laagdikte en wanneer de plafonneerder klaar is. U krijgt binnen één werkdag een voorstel van een droogspecialist.",
  cOnderwerpen: ["Advies over pleisterwerk drogen", "Pleisterwerk en chape samen", "Prijs en leverdatum", "Iets anders"],
  cPlaceholder: "Bv. nieuwbouw 180 m², gipspleister van 1 cm gezet op 5 november, schilder komt begin december.",
};

const fr: typeof nl = {
  zonder: [
    "Les murs libèrent leur eau jusqu'à ce que l'air soit saturé, puis tout s'arrête",
    "De la condensation sur les vitres et les murs extérieurs froids, parfois des moisissures dans les coins",
    "Le peintre ne peut pas commencer et vous reporte après son chantier suivant",
    "Peint trop tôt : peinture qui cloque ou taches, et tout est à refaire",
  ],
  met: [
    `Une durée de location de ${kortsteTermijn} à ${langsteTermijn} semaines, selon l'épaisseur de la couche`,
    "L'humidité quitte le bâtiment au lieu de se condenser sur les vitres",
    "Une date de fin que vous pouvez communiquer à votre peintre ou tapissier",
    "Mesure de l'humidité résiduelle au démarrage et à la réception",
  ],
  stappen: [
    {
      title: "Vous choisissez le jour de livraison",
      desc: "Dès que le plafonnage a pris et que la surface est dure au toucher, vous réservez la date. Nous livrons dans toute la Flandre, généralement en quelques jours ouvrables, et vous recevez une plage horaire au lieu d'attendre toute la journée.",
    },
    {
      title: "Mesure initiale avant tout démarrage",
      desc: "Le technicien relève l'humidité résiduelle des murs et l'humidité de l'air dans la pièce. C'est grâce à ce point de départ que nous pouvons vous donner une date de fin plutôt qu'une estimation.",
    },
    {
      title: "Installation et réglage",
      desc: "Il place les appareils au centre de la pièce, à distance des murs, raccorde l'évacuation des condensats et règle la valeur cible. Ensuite, tout tourne jour et nuit ; l'hygrostat se met de lui-même en veille dès que l'air est suffisamment sec.",
    },
    {
      title: "De l'air en mouvement",
      desc: "Contre un mur frais stagne une couche d'air saturé, et dans les coins et derrière les portes, rien ne bouge. Un ventilateur balaie cette couche pour que l'air sec puisse capter l'humidité.",
    },
    {
      title: "De la chaleur quand le chantier est froid",
      desc: "Un déshumidificateur à condensation fonctionne au mieux entre environ 15 et 25 °C. Si votre chantier est plus froid, nous ajoutons un chauffage de chantier électrique avec thermostat. Il chauffe la pièce de manière homogène, et non un seul mur de près.",
    },
    {
      title: "Mesure finale et enlèvement",
      desc: "À la fin, nous mesurons à nouveau. Si la valeur est bonne, nous reprenons les appareils et votre peintre ou tapissier peut commencer. Si elle ne l'est pas, nous prolongeons gratuitement jusqu'à ce qu'elle le soit.",
    },
  ],
  faqs: [
    {
      q: "Combien coûte le séchage d'un plafonnage ?",
      a: "Cela dépend du volume de la pièce et de l'épaisseur de la couche : ces deux éléments déterminent le nombre d'appareils nécessaires et la durée pendant laquelle ils restent sur place. Le calculateur de séchage vous demande votre surface et l'épaisseur de la couche et affiche aussitôt le pack avec son prix, livraison, installation et mesures comprises. Tous les tarifs à la journée et à la semaine figurent aussi séparément sur notre page des prix.",
    },
    {
      q: "Quand peut-on allumer le déshumidificateur après le plafonnage ?",
      a: "Dès que la surface est dure, généralement plus tôt que pour une chape. Ce qu'il ne faut pas faire ces premiers jours, c'est sécher à outrance ou placer un chauffage juste devant un mur : la surface sèche tandis que la couche en dessous est encore humide, ce qui provoque des fissures de retrait ou une couche superficielle poudreuse. Chauffez de manière homogène, puis laissez l'appareil tourner jour et nuit.",
    },
    {
      q: "Dois-je ouvrir les fenêtres pendant que le déshumidificateur tourne ?",
      a: "Non, gardez-les fermées. Un déshumidificateur à condensation sèche l'air d'un espace fermé ; si une fenêtre est ouverte, il fait sans cesse entrer de l'air extérieur humide et sèche la rue au lieu de vos murs. Aérer n'aide que si l'air extérieur est plus sec que l'air intérieur, et en Belgique ce n'est pas le cas une grande partie de l'année.",
    },
    {
      q: "Quand le peintre ou le tapissier peut-il venir ?",
      a: "Quand une mesure confirme que la couche est sèche, pas quand le mur paraît uniformément clair. Une peinture sur un support trop humide peut cloquer ou tacher, et un papier peint enferme complètement l'humidité résiduelle : des moisissures s'y développent, que vous ne verrez que des mois plus tard. Demandez à votre peintre quelle valeur il souhaite voir et quelle première couche il utilise ; une sous-couche perméable à la vapeur laisse le mur continuer à respirer.",
    },
    {
      q: "Puis-je faire sécher plafonnage et chape en même temps ?",
      a: BEIDE
        ? `Oui, et dans une nouvelle construction, c'est d'ailleurs la marche normale. Il existe pour cela un pack qui sèche sol et murs ensemble, avec une durée de location de ${termijnLabelFr(
            BEIDE,
          )}. Vous louez alors une seule fois et mesurez une seule fois, au lieu de deux séchages successifs. Sécher les deux ensemble demande toutefois plus de capacité, car beaucoup plus d'eau se libère dans le même espace ; le calculateur en tient compte.`
        : "Oui, et dans une nouvelle construction, c'est d'ailleurs la marche normale. Sécher les deux ensemble demande toutefois plus de capacité que l'un des deux séparément, car beaucoup plus d'eau se libère dans le même espace. Le calculateur détermine le pack qui convient.",
    },
    {
      q: "Et si mes murs ne sont pas secs à la date de fin ?",
      a: "Nous prolongeons alors gratuitement jusqu'à ce qu'ils le soient. C'est la garantie de séchage, valable pour chaque pack calculé via le calculateur et réservé avec livraison et installation. Elle repose sur la mesure au démarrage et à la réception : sans ces deux mesures, il n'y a rien à quoi comparer une date de fin.",
    },
    {
      q: "Puis-je enlever moi-même les appareils ?",
      a: "Oui, vous pouvez enlever des déshumidificateurs de chantier, des ventilateurs et des chauffages de chantier à la pièce à notre point d'enlèvement le long de l'A12 à Aartselaar. Vous ne payez alors ni transport ni installation, mais c'est vous qui déterminez l'installation, et la mesure d'humidité et la garantie de séchage ne sont pas comprises dans la location. L'appareil lui-même est identique.",
    },
    {
      q: "Combien de temps un plafonnage doit-il sécher ?",
      a: `Avec un pack de séchage, nos durées pour un plafonnage sont de ${opsommingFr(
        PLEISTER,
      )}. Sans déshumidificateur, aucune durée ne peut être promise : c'est alors l'humidité de l'air dans votre bâtiment qui dicte le rythme, et dans une maison froide et fermée, le séchage s'arrête au lieu de simplement ralentir. L'explication complète, avec la différence entre enduit au plâtre et enduit au ciment, se trouve dans notre guide sur le temps de séchage d'un plafonnage.`,
    },
  ],
  verderLezen: [
    {
      kop: "Combien de temps et pourquoi",
      links: [
        { label: "Guide : combien de temps un plafonnage doit-il sécher ?" },
        { label: "Comment un déshumidificateur de chantier retire l'humidité d'une habitation" },
        { label: "Notre garantie de séchage à 100 % sur un pack calculé" },
        { label: "Sécher chape et plafonnage ensemble dans une nouvelle construction" },
      ],
    },
    {
      kop: "Les appareils pour sécher un plafonnage",
      links: [
        { label: "Performance", sub: "L'appareil standard pour une maison neuve." },
        { label: "Ventilateur pour garder l'air en mouvement", sub: "Contre l'air stagnant dans les coins." },
        { label: "Chauffage de chantier électrique pour un chantier froid", sub: "Sous 15 °C, le séchage est lent." },
      ],
    },
    {
      kop: "Planning et prix",
      links: [
        { label: "Calculez votre pack selon la surface et l'épaisseur de la couche" },
        { label: "Combien coûte la location d'un déshumidificateur de chantier ?" },
        { label: "Livraison et installation dans toute la Flandre" },
        { label: "Enlèvement sur place à Aartselaar" },
      ],
    },
  ],
  verderLezenKicker: "Pour aller plus loin",
  verderLezenTitel: "En savoir plus sur le séchage de plafonnage",

  schemaNaam: "Séchage de plafonnage",
  schemaBeschrijving:
    "Séchage actif d'un plafonnage frais avec déshumidificateur de chantier, ventilateur et mesure, pour que le peintre puisse commencer des semaines plus tôt.",
  schemaType: "Séchage de chantier",
  home: "Accueil",

  heroKicker: "Application · plafonnage",
  heroH1: "Sécher le plafonnage, pour que le peintre n'attende pas.",
  heroP:
    "Un plafonnage frais libère de l'eau dans l'air pendant des jours. Si le bâtiment est fermé, cette eau reste à l'intérieur et le séchage s'arrête dès que l'air est saturé. Nous l'évacuons avec les bons appareils, mesurons l'humidité résiduelle au démarrage et à la réception, et vous donnons une date à laquelle votre peintre peut commencer.",
  ctaPakket: "Calculez votre pack de séchage",
  heroAlt: "Enduit au plâtre frais avec des zones humides foncées à côté d'un plafonnage déjà en train de sécher",
  badge: `${kortsteTermijn} à ${langsteTermijn} semaines`,
  badgeSub: "avec un pack de séchage, selon l'épaisseur",

  vsKicker: "La différence",
  vsH2: "L'humidité sort du mur, mais ne quitte pas la maison d'elle-même.",
  vsLede:
    "Une couche de plafonnage libère facilement son eau ; c'est la partie simple. Le plus difficile, c'est ce qui arrive ensuite à cette eau. Dans un bâtiment fermé, elle reste dans l'air jusqu'à saturation, et à partir de là, plus rien ne sèche.",
  vsZonder: "Sans déshumidificateur",
  vsMet: "Avec un pack de séchage Vernast",

  tKicker: "Durée de location par épaisseur",
  tH2: "Quelle durée pour votre plafonnage ?",
  tLede:
    "C'est l'épaisseur de la couche qui détermine la durée, pas votre surface : une habitation plus grande reçoit plus d'appareils, pas une location plus longue. Une couche deux fois plus épaisse, c'est deux fois plus d'eau de gâchage qui doit sortir par la même surface.",
  tCaption: "Durée de location d'un pack plafonnage par épaisseur de couche, et du pack combiné avec chape",
  tKolDikte: "Épaisseur de couche",
  tKolMet: "Avec un pack de séchage",
  tKolWaar: "Où l'on rencontre cette épaisseur",
  rijEerste: "Le plafonnage intérieur courant : plâtre, projeté à la machine en une couche.",
  rijMidden: "Une couche plus épaisse ou un ragréage sur un mur qui n'est pas droit.",
  rijLaatste: "Un travail lourd en plusieurs couches, comme un cimentage dans une pièce humide.",
  rijBeide: "Plafonnage + chape",
  rijBeideWaar: "Une nouvelle construction où murs et sol sont humides en même temps, en un seul pack.",
  termijn: (r: DroogtermijnRij) => termijnLabelFr(r),
  tNote: (lp: Lp): ReactNode => (
    <>
      Ces durées correspondent à ce que prévoient nos packs, mesures initiale et finale
      comprises. Pourquoi l'humidité reste dans une maison fermée, ce qui change pour un travail
      à base de ciment et quand vous pouvez peindre, vous le trouverez dans{" "}
      <Link to={lp("/gids/hoe-lang-moet-pleisterwerk-drogen")}>
        notre guide sur le temps de séchage d'un plafonnage
      </Link>
      . Aucune durée ne remplace une mesure.
    </>
  ),

  wKicker: "Comment ça se passe",
  wH2: "Du jour de livraison à la libération des murs.",
  wLede:
    "Vous n'avez rien à mesurer ni à régler vous-même. Voici ce qui se passe entre le moment où vous nous communiquez la date et celui où votre peintre peut commencer.",

  pKicker: "Quel appareil",
  pH2: "L'appareil adapté à votre espace.",
  pLede:
    "Le plafonnage recouvre tous les murs et plafonds : c'est donc le volume de la pièce qui compte, pas seulement le nombre de mètres carrés de mur. Le calculateur convertit ce volume en la bonne combinaison, avec un ventilateur contre l'air stagnant et un chauffage de chantier si votre chantier est trop froid.",
  pNote: (lp: Lp): ReactNode => (
    <>
      <b>Vous préférez enlever vous-même ?</b> Vous pouvez enlever des déshumidificateurs de
      chantier, des ventilateurs et des chauffages de chantier à la pièce au tarif enlèvement à
      notre <Link to={lp("/verhuur/afhalen")}>point d'enlèvement le long de l'A12 à
      Aartselaar</Link>. La mesure d'humidité et la garantie de séchage ne sont alors pas comprises
      dans la location, mais l'appareil est identique.
    </>
  ),

  mKicker: "La réception",
  mH2: "Quand le peintre peut-il venir ?",
  mP1: "Un mur uniformément clair et sec au toucher peut encore être humide à cœur. Une peinture sur un tel support peut cloquer ou tacher, et un papier peint enferme complètement l'humidité résiduelle. C'est pourquoi c'est une mesure qui décide, et non la couleur du mur.",
  mP2: (rapport: string | null): ReactNode => (
    <>
      <b>Nous mesurons au démarrage et à la réception.</b> Ces deux valeurs sont comprises dans
      chaque pack, pour que personne ne doive décider au jugé. Si vous avez besoin d'un rapport
      signé pour votre peintre ou votre dossier de construction, ajoutez un rapport d'humidité
      officiel{rapport ? ` pour ${rapport}` : ""}.
    </>
  ),
  mP3: (lp: Lp): ReactNode => (
    <>
      <b>C'est votre peintre qui fixe la limite.</b> Il connaît sa peinture et sa sous-couche ;
      demandez-lui à l'avance quelle valeur il souhaite voir et s'il commence avec une couche
      perméable à la vapeur. Comment se déroule cette mesure, vous le lirez dans{" "}
      <Link to={lp("/gids/hoe-lang-moet-pleisterwerk-drogen")}>
        notre guide sur le temps de séchage d'un plafonnage
      </Link>
      .
    </>
  ),
  chips: ["Mesure initiale", "Mesure finale", "Rapport d'humidité sur demande", "Garantie de séchage"],
  mAlt: "Un technicien Vernast mesure l'humidité résiduelle d'un mur plafonné",

  faqTitel: "Ce que les maîtres d'ouvrage nous demandent sur le séchage du plafonnage.",

  rKicker: "Sur le terrain",
  rH2: "Des murs que nous avons déjà séchés.",
  rLede:
    "Trois dossiers avec les photos du chantier lui-même : ce qui devait sécher, quels appareils étaient en place et combien de temps cela a pris.",
  rAlle: "Voir tous les projets d'humidité de construction",
  mbKicker: "Prêt à démarrer",
  mbH3: "Donnez-nous votre surface et l'épaisseur de la couche, nous vous donnons une date.",
  mbP: "Le calculateur convertit votre volume en un pack avec les bons appareils et la bonne durée. Vous choisissez vous-même le jour de livraison ; nous installons et mesurons.",
  mbAlt: "Un technicien Vernast note les résultats de mesure",

  cKicker: "Une question sur vos murs ?",
  cTitel: "Vous hésitez sur la durée ou le pack ?",
  cLede:
    "Donnez-nous votre surface, l'épaisseur de la couche et la date à laquelle le plafonneur aura terminé. Vous recevez dans un délai d'un jour ouvrable une proposition d'un spécialiste du séchage.",
  cOnderwerpen: ["Conseil pour sécher un plafonnage", "Plafonnage et chape ensemble", "Prix et date de livraison", "Autre chose"],
  cPlaceholder: "P. ex. nouvelle construction 180 m², enduit au plâtre de 1 cm posé le 5 novembre, le peintre vient début décembre.",
};

export const COPY = { nl, fr } satisfies Copy<typeof nl>;

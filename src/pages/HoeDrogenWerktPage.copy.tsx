import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { toestelPad } from "@/data/verhuur";
import type { Copy } from "@/i18n/useTaal";

/**
 * De teksten van /hoe-drogen-werkt per taal.
 *
 * Een functie per taal in plaats van een object: de zinnen dragen links en de
 * prijs van de condenspomp mee, en die hangen af van de taal van de pagina
 * (`lp`) en van wie er kijkt (particulier of bedrijf). De opmaak blijft in de
 * pagina; hier staat alleen wat er gelezen wordt.
 */
export interface HoeHulp {
  lp: (nlPad: string) => string;
  /** De dagprijs van de condenspomp, al in de juiste notatie. */
  pomp: string;
  /** De prijs van het vochtrapport, uit de catalogus en in dezelfde notatie. */
  rapport: string;
}

export interface HoeTekst {
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
  prKick: string;
  prH2: string;
  prLede: ReactNode;
  factoren: { h3: string; p: ReactNode }[];
  prNote: ReactNode;
  m1Kick: string;
  m1H2: string;
  m1P1: ReactNode;
  m1P2: ReactNode;
  koud: string;
  koudBig: string;
  rvUnit: string;
  warm: string;
  warmBig: string;
  waterPerKg: string;
  koudSub: string;
  warmSub: ReactNode;
  rvKick: string;
  rvH2: string;
  rvP1: string;
  rvP2: ReactNode;
  chips: string[];
  drKick: string;
  drH2: string;
  drLede: ReactNode;
  drogers: { label: string; h3: string; p: ReactNode }[];
  cyKick: string;
  cyH2: string;
  cyLede: ReactNode;
  cyclus: { h3: string; p: string }[];
  cyNote: ReactNode;
  m2Kick: string;
  m2H2: string;
  m2Lede: string;
  fase1Label: string;
  fase1H3: string;
  fase1P: string;
  fase1Bar: string;
  fase2Label: string;
  fase2H3: string;
  fase2P: string;
  fase2Bar: string;
  meetKick: string;
  meetH3: string;
  meetP: ReactNode;
  meetAlt: string;
  matKick: string;
  matH2: string;
  matLede: ReactNode;
  materialen: { alt: string; h3: string; p: ReactNode }[];
  /* De rode band onder de materiaalkaarten, waar eerder een grijze voetnoot stond. */
  optKick: string;
  optH3: string;
  optP: ReactNode;
  optAlt: string;
  matNote2: ReactNode;
  samKick: string;
  samH2: string;
  stappen: { b: string; rest: string }[];
  werfKick: string;
  werfH2: string;
  werfLede: ReactNode;
  prinKick: string;
  prinH3: string;
  prinP: ReactNode;
  prinCta: string;
  prinAlt: string;
  /*
    Alleen wat <ContactBlok> nog van de pagina vraagt. De labels van de velden,
    de privacyzin en het bedankscherm draagt dat component zelf, in drie talen.
  */
  form: {
    kick: string;
    h2: string;
    lede: string;
    opties: string[];
    situatiePh: string;
  };
}

export const COPY = {
  nl: ({ lp, pomp, rapport }: HoeHulp): HoeTekst => ({
    crumbHome: "Home",
    crumb: "Hoe drogen werkt",
    heroKick: "Alles over drogen · de techniek",
    h1: "Niet het toestel droogt uw woning, maar het klimaat dat het maakt.",
    heroP:
      'Tijdens bouwen en renoveren komen honderden liters water in uw woning terecht: in pleister, chape, mortel en beton. Professionele bouwdroging is niet "een toestel aanzetten", maar de combinatie van temperatuur, luchtvochtigheid en luchtbeweging zo sturen dat dat vocht gecontroleerd uit de constructie verdwijnt.',
    heroCta: "Bereken uw droogpakket",
    heroCta2: "Waarom bouwdroging?",
    heroAlt: "De Vernast vakmannen",
    badge: "Eco-condensdrogers",
    badgeSub: "Berekend op uw volume",
    prKick: "Het principe",
    prH2: "Uw woning wordt tijdelijk een gecontroleerde klimaatkamer.",
    prLede: (
      <>Een serre verandert het klimaat binnenin ten opzichte van buiten. Bij bouwdroging doen we iets vergelijkbaars: we creëren tijdelijk een binnenklimaat waarin vocht makkelijker uit <Link to={lp("/pleisterwerk-drogen")}>pleister</Link>, <Link to={lp("/chape-drogen")}>chape</Link> en muren naar de omgevingslucht beweegt, en daarna ook echt uit die lucht wordt verwijderd. Drie factoren werken daarvoor samen; geen enkele werkt optimaal op zichzelf.</>
    ),
    factoren: [
      { h3: "1. Temperatuur", p: <>Voldoende warmte verhoogt het verdampingspotentieel en ondersteunt het vochttransport uit het materiaal. In koude ruimtes zetten we daarom een <Link to={lp(toestelPad("teddh30"))}>bouwkachel</Link> bij.</> },
      { h3: "2. Relatieve luchtvochtigheid", p: <>Door waterdamp actief uit de lucht te verwijderen, ontstaat telkens opnieuw ruimte voor vocht dat uit de materialen verdampt. Dat is het werk van de <Link to={lp("/machines")}>bouwdroger</Link>.</> },
      { h3: "3. Luchtbeweging", p: <>Droge lucht moet álle vochtige oppervlakken bereiken; stilstaande lucht rond een wand of vloer remt het proces. Daarom horen bij veel pakketten <Link to={lp(toestelPad("ttv4500"))}>ventilatoren</Link>.</> },
    ],
    prNote: <><b>Daarom berekenen wij eerst, en plaatsen we pas daarna.</b> De <Link to={lp("/verhuur/simulator")}>droogcalculator</Link> vertaalt uw oppervlakte, plafondhoogte en situatie naar de juiste combinatie van toestellen, het hart van elk <Link to={lp("/verhuur/pakket")}>Vernast-droogpakket</Link>.</>,
    m1Kick: "Misverstand nr. 1",
    m1H2: 'Waarom "de verwarming hoog zetten" geen bouwdroging is.',
    m1P1: <>Warme lucht heeft bij dezelfde hoeveelheid waterdamp een veel lagere <b style={{ color: "#fff" }}>relatieve</b> luchtvochtigheid dan koude lucht. Dat klinkt alsof de lucht veel droger is geworden, maar er is nog geen gram water uit het gebouw verwijderd. Het water zit nog steeds in de lucht en in de bouwmaterialen.</>,
    m1P2: <>Verwarming kan het verdampingsproces ondersteunen, maar daarna moet de vrijgekomen waterdamp actief verwijderd worden door ontvochtiging. Ook de ramen openzetten is geen garantie: natuurlijke ventilatie hangt volledig af van het buitenklimaat en kan op een warme, vochtige zomerdag zelfs vocht bínnenbrengen. Professionele bouwdroging maakt het proces <b style={{ color: "#fff" }}>controleerbaar in plaats van weersafhankelijk</b>.</>,
    koud: "Koude ruimte",
    koudBig: "10 °C · 80",
    rvUnit: "% RV",
    warm: "Zelfde lucht, verwarmd",
    warmBig: "20 °C · 42",
    waterPerKg: " water per kg lucht",
    koudSub: "vochtige binnenlucht",
    warmSub: <><b style={{ color: "var(--red)" }}>exact evenveel water</b> in de lucht, enkel de verhouding veranderde</>,
    rvKick: "Even technisch",
    rvH2: "Wat betekent relatieve luchtvochtigheid?",
    rvP1: "Relatieve luchtvochtigheid (RV of RH) vertelt hoe dicht de lucht bij verzadiging zit bij een bepaalde temperatuur. Bij 100% RV is de lucht verzadigd met waterdamp; hoe lager de RV, hoe meer vocht de lucht nog kan opnemen.",
    rvP2: <>Voor bouwdroging is dat verschil cruciaal. Veel bouwmaterialen zijn poreus en hygroscopisch: water zit niet alleen aan het oppervlak, maar ook diep in poriën en capillairen. Verlagen we de vochttoestand van de omgevingslucht, dan ontstaat een <b>vochtgradiënt</b> tussen het natte materiaal en zijn omgeving, en beweegt het water geleidelijk naar buiten, waar het kan verdampen. Droging is daarbij nooit één proces:</>,
    chips: ["Capillaire stroming", "Verdamping", "Damptransport", "Diffusie"],
    drKick: "Twee soorten drogers",
    drH2: "De temperatuur op uw werf bepaalt welk toestel het water pakt.",
    drLede: <>Beide halen water uit de lucht, maar niet op dezelfde manier, en dat verschil wordt zichtbaar zodra het kwik zakt. Daarom vraagt de <Link to={lp("/verhuur/simulator")}>droogcalculator</Link> ook hoe koud uw ruimte staat.</>,
    drogers: [
      { label: "Condensdroger · 15 – 25 °C", h3: "De standaard op een woningwerf.", p: <>Hij koelt de binnenlucht onder haar dauwpunt en vangt de waterdamp op als condenswater. Boven 15 °C is dat de snelste en zuinigste manier om bouwvocht uit een woning te halen, en het is wat er in bijna elk pakket staat. <b>Hoe die kringloop precies loopt, ziet u in de volgende sectie.</b></> },
      { label: "Adsorptiedroger · ook onder 10 °C", h3: "Voor koude ruimtes en kelders.", p: <>Hij bindt de waterdamp aan een droogmiddel in plaats van ze te koelen, en werkt daardoor door bij temperaturen waar condensvorming nauwelijks nog op gang komt. Op een onverwarmde winterwerf of in een kelder haalt hij water waar een condensdroger stilvalt. Het volledige verschil staat in <Link to={lp("/gids/condensdroger-of-adsorptiedroger")}>condensdroger of adsorptiedroger</Link>.</> },
    ],
    cyKick: "De cyclus",
    cyH2: "Hoe een condensbouwdroger water uit uw woning haalt.",
    cyLede: <>Binnenin stroomt de vochtige lucht langs een koud oppervlak, koelt onder haar dauwpunt en geeft haar waterdamp af als vloeibaar water. De lucht verlaat de machine iets warmer én droger, en de kringloop begint opnieuw: <b>materiaal → lucht → bouwdroger → condenswater → afvoer</b>.</>,
    cyclus: [
      { h3: "Vocht in het materiaal", p: "Water migreert via poriën en capillairen naar het oppervlak en verdampt naar de lucht." },
      { h3: "Aanzuigen", p: "De droger zuigt de vochtige binnenlucht met een krachtige ventilator door het toestel." },
      { h3: "Condenseren", p: "De lucht koelt langs een koud oppervlak onder haar dauwpunt; waterdamp wordt vloeibaar water." },
      { h3: "Afvoeren", p: "Het condenswater gaat naar een reservoir of wordt met een condenspomp rechtstreeks weggepompt." },
      { h3: "Opnieuw de ruimte in", p: "Drogere, licht opgewarmde lucht wordt verdeeld en neemt opnieuw vocht op uit de materialen." },
    ],
    cyNote: <><b>Waar gaat al dat water naartoe?</b> Bij eenvoudige toestellen in een reservoir dat u regelmatig leegmaakt. Bij langdurige professionele droging verkiezen wij continue condensafvoer: een <Link to={lp("/verhuur/toebehoren/condenspomp")}>condenspomp</Link> ({pomp} per bouwdroger per dag) pompt het water dag en nacht rechtstreeks naar een afvoer, zodat de cyclus onafgebroken doorloopt, ook 's nachts en in het weekend. U voegt hem toe tijdens het <Link to={lp("/verhuur/simulator")}>berekenen van uw pakket</Link>.</>,
    m2Kick: "Misverstand nr. 2",
    m2H2: "Een muur kan droog lijken en toch veel water bevatten.",
    m2Lede: "Een bouwmateriaal droogt niet overal even snel. Dit verklaart waarom een bouwdroger in het begin soms grote hoeveelheden water produceert en later aanzienlijk minder, zonder dat de machine slechter werkt.",
    fase1Label: "Fase 1 · snel",
    fase1H3: "Het oppervlak droogt.",
    fase1P: "Het makkelijk bereikbare vocht aan en vlak onder het oppervlak verdampt eerst. Na enkele dagen kan een wand al veel droger ogen, en produceert de droger veel water.",
    fase1Bar: "Hoge wateropbrengst per dag",
    fase2Label: "Fase 2 · traag",
    fase2H3: "De kern moet nog.",
    fase2P: "Water dat dieper zit moet eerst via de poriën naar het oppervlak migreren vóór het kan verdampen. Het oppervlak oogt droog, maar intern zit nog aanzienlijk vocht.",
    fase2Bar: "Vochttransport in het materiaal is de beperkende factor",
    meetKick: "Meten is weten",
    meetH3: "Daarom is meten belangrijker dan kijken.",
    meetP: <>Een witte pleisterlaag kan droog ogen, een chape kan stevig aanvoelen, dat zegt niets over wat er dieper in het materiaal gebeurt. Visueel beoordelen is onbetrouwbaar. Het einddoel is nooit "de droger heeft zeven dagen gedraaid", maar: <b>het materiaal is klaar voor de volgende bouwfase</b>. Daarom zit bij elk pakket een vochtmeting voor én na, en kiest u optioneel een <Link to={lp("/verhuur/simulator")}>officieel vochtrapport{rapport ? ` (${rapport})` : ""}</Link> voor uw verzekering of huisbaas.</>,
    meetAlt: "Vernast specialist meet het vochtgehalte van een muur",
    matKick: "Niet elk materiaal is gelijk",
    matH2: "Pleister, chape en beton drogen niet op dezelfde manier.",
    matLede: <>Niet ieder bouwmateriaal bevat hetzelfde type vocht. Een professionele droogstrategie luidt daarom nooit "machine aan zodra het materiaal geplaatst is", materiaal, leeftijd, technische voorschriften en de gewenste afwerking bepalen mee de aanpak. De <Link to={lp("/verhuur/simulator")}>Calculator</Link> vraagt daarom ook wát u droogt.</>,
    materialen: [
      { alt: "Vers nat gipspleister met zichtbare donkere vochtzones", h3: "Gipspleister", p: <>Verliest zijn overtollige water vooral door verdamping. Laagdikte, temperatuur, luchtvochtigheid, ventilatie en de zuiging van de ondergrond bepalen de droogtijd van <Link to={lp("/pleisterwerk-drogen")}>gipspleister en pleisterwerk</Link>.</> },
      { alt: "Vochtige chape tijdens de noodzakelijke uithardingsfase", h3: "Chape & beton", p: <>Cement heeft water nodig voor de hydratatiereactie waarmee het uithardt. Te vroeg agressief drogen verstoort dat, bij <Link to={lp("/chape-drogen")}>chape drogen</Link> starten we pas ná de noodzakelijke uithardingsfase.</> },
      { alt: "Droge chape met krimpscheuren door een te agressief droogproces", h3: "Te agressief drogen", p: "Grote vochtgradiënten tussen oppervlak en kern kunnen krimp en scheurvorming bevorderen. Daarom sturen we op RV en laten we die niet langdurig onder ±30% zakken." },
    ],
    optKick: "Het verschil",
    optH3: "Niet maximaal drogen. Optimaal drogen.",
    optP: <>Overcapaciteit is geen kwaliteitskenmerk, de juiste capaciteit wel. Te veel vermogen op een verse laag trekt het oppervlak droog terwijl de kern nog nat is, en dat is precies hoe krimp en scheuren ontstaan. Waarom wij op het klimaat sturen en niet op het aantal toestellen, leest u bij <Link to={lp("/waarom-bouwdroging")}>waarom bouwdroging</Link>.</>,
    optAlt: "Vernast-expert geeft een rode kaart aan te hard drogen",
    matNote2: <><b>Lees verder in onze gidsen.</b> Hoeveel weken uw vloer nodig heeft, leest u in <Link to={lp("/gids/hoe-lang-moet-chape-drogen")}>hoe lang moet chape drogen</Link>, en voor de muren in <Link to={lp("/gids/hoe-lang-moet-pleisterwerk-drogen")}>hoe lang moet pleisterwerk drogen</Link>, allebei met de droogtijden per dikte. Werkt u in een koude kelder of zit het water onder de vloer, dan legt <Link to={lp("/gids/condensdroger-of-adsorptiedroger")}>condensdroger of adsorptiedroger</Link> het verschil uit. En wat een toestel dat dag en nacht draait aan stroom kost, rekenen we voor in <Link to={lp("/gids/stroomverbruik-bouwdroger")}>stroomverbruik van een bouwdroger</Link>. Alle gidsen staan op één plek onder <Link to={lp("/gids")}>gidsen over bouwdroging</Link>.</>,
    samKick: "Samengevat",
    samH2: "Van nat materiaal naar droge constructie, in acht stappen.",
    stappen: [
      { b: "Vocht zit in het bouwmateriaal", rest: ", in poriën en capillairen, tot diep in de kern." },
      { b: "Het juiste klimaat", rest: " stimuleert het transport van vocht naar het oppervlak." },
      { b: "Het vocht verdampt", rest: " naar de omgevingslucht." },
      { b: "Luchtcirculatie", rest: " voert de vochtige lucht naar de droger." },
      { b: "De bouwdroger", rest: " haalt de waterdamp uit de lucht." },
      { b: "Het condenswater", rest: " wordt uit het gebouw afgevoerd." },
      { b: "Drogere lucht", rest: " komt opnieuw in contact met het materiaal." },
      { b: "Het proces herhaalt zich", rest: " tot het gewenste vochtniveau gemeten is." },
    ],
    werfKick: "Bouwdroger huren in Vlaanderen",
    werfH2: "Van theorie naar uw werf.",
    werfLede: <>Bij Vernast huurt u geen losse machine, maar een berekend droogklimaat. Onze <Link to={lp("/verhuur/simulator")}>droogcalculator</Link> bepaalt op basis van uw volume en situatie welk pakket u nodig heeft, voor <Link to={lp("/pleisterwerk-drogen")}>pleisterwerk</Link>, <Link to={lp("/chape-drogen")}>chape</Link>, <Link to={lp("/waterschade")}>waterschade</Link> of een <Link to={lp("/renovatie")}>koude kelder</Link>. Elk pakket wordt binnen 24 uur geleverd en geïnstalleerd, inclusief vochtmeting voor en na. Liever zelf aan de slag? Losse <Link to={lp("/machines")}>bouwdrogers, ventilatoren en bouwkachels</Link> haalt u voordelig af in ons <Link to={lp("/verhuur/afhalen")}>afhaalpunt langs de A12 in Aartselaar</Link>. En met vragen tijdens de huur kunt u altijd terecht bij onze <Link to={lp("/klantservice")}>klantenservice</Link>.</>,
    prinKick: "Het Vernast-principe",
    prinH3: "Geen machine omdat ze toevallig beschikbaar is. Een opstelling omdat ze bij uw gebouw past.",
    prinP: <>Zo sturen we het klimaat rond uw bouwmateriaal, en verdwijnt het vocht gecontroleerd uit de constructie, met <Link to={lp("/waarom-bouwdroging")}>100% droog-garantie</Link>.*</>,
    prinCta: "Bereken uw droogpakket",
    prinAlt: "Vernast technicus noteert de meetresultaten",
    form: {
      kick: "Nog een vraag hierover?",
      h2: "Onze droogspecialisten denken graag mee.",
      lede: "Twijfelt u over de juiste aanpak voor uw project? Stel uw vraag, u krijgt binnen één werkdag antwoord van een specialist.",
      opties: ["Hoe werkt drogen in mijn situatie?", "Advies over het juiste pakket", "Vraag over prijzen of levering", "Iets anders"],
      situatiePh: "Bv. nieuwbouw 140 m², chape geplaatst vorige week, wanneer kan de vloerder starten?",
    },
  }),
  fr: ({ lp, pomp, rapport }: HoeHulp): HoeTekst => ({
    crumbHome: "Accueil",
    crumb: "Comment fonctionne le séchage",
    heroKick: "Tout sur le séchage · la technique",
    h1: "Ce n'est pas l'appareil qui sèche votre maison, mais le climat qu'il crée.",
    heroP:
      "Pendant la construction et la rénovation, des centaines de litres d'eau se retrouvent dans votre habitation : dans le plafonnage, la chape, le mortier et le béton. Un séchage de chantier professionnel ne consiste pas à « allumer un appareil », mais à piloter ensemble la température, l'humidité de l'air et le mouvement de l'air pour que cette humidité quitte la construction de manière contrôlée.",
    heroCta: "Calculez votre pack de séchage",
    heroCta2: "Pourquoi sécher son chantier ?",
    heroAlt: "Les techniciens de Vernast",
    badge: "Déshumidificateurs à condensation éco",
    badgeSub: "Calculés sur votre volume",
    prKick: "Le principe",
    prH2: "Votre maison devient temporairement une chambre climatique contrôlée.",
    prLede: (
      <>Une serre modifie le climat intérieur par rapport à l'extérieur. Le séchage de chantier fait quelque chose de comparable : nous créons temporairement un climat intérieur dans lequel l'humidité passe plus facilement du <Link to={lp("/pleisterwerk-drogen")}>plafonnage</Link>, de la <Link to={lp("/chape-drogen")}>chape</Link> et des murs vers l'air ambiant, puis est réellement retirée de cet air. Trois facteurs agissent ensemble ; aucun ne fonctionne de manière optimale à lui seul.</>
    ),
    factoren: [
      { h3: "1. Température", p: <>Une chaleur suffisante augmente le potentiel d'évaporation et favorise le transport de l'humidité hors du matériau. Dans les pièces froides, nous ajoutons donc un <Link to={lp(toestelPad("teddh30"))}>chauffage de chantier</Link>.</> },
      { h3: "2. Humidité relative", p: <>En retirant activement la vapeur d'eau de l'air, on libère sans cesse de la place pour l'humidité qui s'évapore des matériaux. C'est le travail du <Link to={lp("/machines")}>déshumidificateur de chantier</Link>.</> },
      { h3: "3. Mouvement de l'air", p: <>L'air sec doit atteindre toutes les surfaces humides ; l'air immobile le long d'un mur ou d'un sol freine le processus. C'est pourquoi de nombreux packs comprennent des <Link to={lp(toestelPad("ttv4500"))}>ventilateurs</Link>.</> },
    ],
    prNote: <><b>C'est pourquoi nous calculons d'abord, et n'installons qu'ensuite.</b> Le <Link to={lp("/verhuur/simulator")}>calculateur de séchage</Link> traduit votre surface, votre hauteur sous plafond et votre situation en la bonne combinaison d'appareils, le cœur de chaque <Link to={lp("/verhuur/pakket")}>pack de séchage Vernast</Link>.</>,
    m1Kick: "Idée reçue n° 1",
    m1H2: "Pourquoi « monter le chauffage » n'est pas du séchage de chantier.",
    m1P1: <>À quantité de vapeur d'eau égale, l'air chaud a une humidité <b style={{ color: "#fff" }}>relative</b> bien plus basse que l'air froid. On dirait que l'air est devenu beaucoup plus sec, mais pas un gramme d'eau n'a encore quitté le bâtiment. L'eau se trouve toujours dans l'air et dans les matériaux de construction.</>,
    m1P2: <>Le chauffage peut soutenir l'évaporation, mais la vapeur d'eau libérée doit ensuite être retirée activement par déshumidification. Ouvrir les fenêtres n'est pas une garantie non plus : la ventilation naturelle dépend entièrement du climat extérieur et peut même faire entrer de l'humidité par une journée d'été chaude et humide. Un séchage de chantier professionnel rend le processus <b style={{ color: "#fff" }}>contrôlable au lieu de dépendant de la météo</b>.</>,
    koud: "Pièce froide",
    koudBig: "10 °C · 80",
    rvUnit: " % HR",
    warm: "Même air, chauffé",
    warmBig: "20 °C · 42",
    waterPerKg: " d'eau par kg d'air",
    koudSub: "air intérieur humide",
    warmSub: <><b style={{ color: "var(--red)" }}>exactement autant d'eau</b> dans l'air, seul le rapport a changé</>,
    rvKick: "Un peu de technique",
    rvH2: "Que signifie l'humidité relative ?",
    rvP1: "L'humidité relative (HR) indique à quel point l'air est proche de la saturation à une température donnée. À 100 % HR, l'air est saturé de vapeur d'eau ; plus l'HR est basse, plus l'air peut encore absorber d'humidité.",
    rvP2: <>Pour le séchage de chantier, cette différence est cruciale. Beaucoup de matériaux de construction sont poreux et hygroscopiques : l'eau ne se trouve pas seulement en surface, mais aussi profondément dans les pores et les capillaires. Si l'on abaisse l'humidité de l'air ambiant, un <b>gradient d'humidité</b> se crée entre le matériau mouillé et son environnement, et l'eau migre progressivement vers l'extérieur, où elle peut s'évaporer. Le séchage n'est jamais un processus unique :</>,
    chips: ["Écoulement capillaire", "Évaporation", "Transport de vapeur", "Diffusion"],
    drKick: "Deux types de déshumidificateurs",
    drH2: "La température de votre chantier détermine quel appareil capte l'eau.",
    drLede: <>Les deux retirent l'eau de l'air, mais pas de la même manière, et la différence apparaît dès que le mercure descend. C'est pourquoi le <Link to={lp("/verhuur/simulator")}>calculateur de séchage</Link> demande aussi à quelle température se trouve votre pièce.</>,
    drogers: [
      { label: "À condensation · 15 – 25 °C", h3: "La norme sur un chantier d'habitation.", p: <>Il refroidit l'air intérieur sous son point de rosée et recueille la vapeur d'eau sous forme de condensat. Au-dessus de 15 °C, c'est la manière la plus rapide et la plus économe de retirer l'humidité de construction d'une habitation, et c'est ce que contient presque chaque pack. <b>Le détail de ce cycle figure dans la section suivante.</b></> },
      { label: "À adsorption · aussi sous 10 °C", h3: "Pour les locaux froids et les caves.", p: <>Il fixe la vapeur d'eau sur un agent déshydratant au lieu de la refroidir, et continue donc à fonctionner à des températures où la condensation ne se forme presque plus. Sur un chantier d'hiver non chauffé ou dans une cave, il retire de l'eau là où un appareil à condensation s'arrête. La différence complète est expliquée dans <Link to={lp("/gids/condensdroger-of-adsorptiedroger")}>déshumidificateur à condensation ou à adsorption</Link>.</> },
    ],
    cyKick: "Le cycle",
    cyH2: "Comment un déshumidificateur à condensation retire l'eau de votre maison.",
    cyLede: <>À l'intérieur, l'air humide passe le long d'une surface froide, se refroidit sous son point de rosée et libère sa vapeur d'eau sous forme d'eau liquide. L'air quitte la machine un peu plus chaud et plus sec, et le cycle recommence : <b>matériau → air → déshumidificateur → eau de condensation → évacuation</b>.</>,
    cyclus: [
      { h3: "Humidité dans le matériau", p: "L'eau migre par les pores et les capillaires vers la surface et s'évapore dans l'air." },
      { h3: "Aspiration", p: "Le déshumidificateur aspire l'air intérieur humide à travers l'appareil grâce à un ventilateur puissant." },
      { h3: "Condensation", p: "L'air se refroidit le long d'une surface froide sous son point de rosée ; la vapeur d'eau devient de l'eau liquide." },
      { h3: "Évacuation", p: "L'eau de condensation est recueillie dans un réservoir ou pompée directement par une pompe à condensats." },
      { h3: "Retour dans la pièce", p: "L'air plus sec et légèrement réchauffé est diffusé et absorbe à nouveau l'humidité des matériaux." },
    ],
    cyNote: <><b>Où va toute cette eau ?</b> Avec des appareils simples, dans un réservoir que vous videz régulièrement. Pour un séchage professionnel de longue durée, nous préférons une évacuation continue des condensats : une <Link to={lp("/verhuur/toebehoren/condenspomp")}>pompe à condensats</Link> ({pomp} par déshumidificateur et par jour) pompe l'eau jour et nuit directement vers une évacuation, pour que le cycle tourne sans interruption, même la nuit et le week-end. Vous l'ajoutez lors du <Link to={lp("/verhuur/simulator")}>calcul de votre pack</Link>.</>,
    m2Kick: "Idée reçue n° 2",
    m2H2: "Un mur peut paraître sec et contenir encore beaucoup d'eau.",
    m2Lede: "Un matériau de construction ne sèche pas partout à la même vitesse. C'est pourquoi un déshumidificateur produit parfois de grandes quantités d'eau au début et nettement moins par la suite, sans que la machine fonctionne moins bien.",
    fase1Label: "Phase 1 · rapide",
    fase1H3: "La surface sèche.",
    fase1P: "L'humidité facilement accessible, en surface et juste en dessous, s'évapore en premier. Après quelques jours, un mur peut déjà paraître beaucoup plus sec, et le déshumidificateur produit beaucoup d'eau.",
    fase1Bar: "Beaucoup d'eau récupérée par jour",
    fase2Label: "Phase 2 · lente",
    fase2H3: "Le cœur doit encore suivre.",
    fase2P: "L'eau plus profonde doit d'abord migrer par les pores jusqu'à la surface avant de pouvoir s'évaporer. La surface paraît sèche, mais il reste beaucoup d'humidité à l'intérieur.",
    fase2Bar: "Le transport de l'humidité dans le matériau est le facteur limitant",
    meetKick: "Mesurer, c'est savoir",
    meetH3: "C'est pourquoi mesurer compte plus que regarder.",
    meetP: <>Un enduit blanc peut paraître sec, une chape peut sembler dure : cela ne dit rien de ce qui se passe plus profondément dans le matériau. L'appréciation visuelle n'est pas fiable. L'objectif final n'est jamais « le déshumidificateur a tourné sept jours », mais : <b>le matériau est prêt pour la phase suivante du chantier</b>. C'est pourquoi chaque pack comprend une mesure d'humidité avant et après, et vous pouvez choisir en option un <Link to={lp("/verhuur/simulator")}>rapport d'humidité officiel{rapport ? ` (${rapport})` : ""}</Link> pour votre assureur ou votre propriétaire.</>,
    meetAlt: "Un spécialiste Vernast mesure le taux d'humidité d'un mur",
    matKick: "Chaque matériau est différent",
    matH2: "Le plafonnage, la chape et le béton ne sèchent pas de la même manière.",
    matLede: <>Tous les matériaux de construction ne contiennent pas le même type d'humidité. Une stratégie de séchage professionnelle ne se résume donc jamais à « machine allumée dès que le matériau est posé » : le matériau, son âge, les prescriptions techniques et la finition souhaitée déterminent aussi l'approche. C'est pourquoi le <Link to={lp("/verhuur/simulator")}>calculateur</Link> vous demande aussi ce que vous séchez.</>,
    materialen: [
      { alt: "Plafonnage au plâtre frais et mouillé avec des zones d'humidité sombres visibles", h3: "Plâtre", p: <>Perd son excès d'eau surtout par évaporation. L'épaisseur, la température, l'humidité de l'air, la ventilation et l'absorption du support déterminent le temps de <Link to={lp("/pleisterwerk-drogen")}>séchage du plafonnage</Link>.</> },
      { alt: "Chape humide pendant la phase de durcissement nécessaire", h3: "Chape et béton", p: <>Le ciment a besoin d'eau pour la réaction d'hydratation qui le fait durcir. Un séchage agressif trop tôt la perturbe : pour le <Link to={lp("/chape-drogen")}>séchage d'une chape</Link>, nous ne commençons qu'après la phase de durcissement nécessaire.</> },
      { alt: "Chape sèche avec des fissures de retrait dues à un séchage trop agressif", h3: "Sécher trop agressivement", p: "De forts gradients d'humidité entre la surface et le cœur peuvent favoriser le retrait et la fissuration. C'est pourquoi nous pilotons l'HR et ne la laissons pas descendre durablement sous ±30 %." },
    ],
    optKick: "La différence",
    optH3: "Pas sécher au maximum. Sécher de façon optimale.",
    optP: <>La surcapacité n'est pas un gage de qualité, la bonne capacité l'est. Trop de puissance sur une couche fraîche assèche la surface alors que le cœur est encore humide, et c'est précisément ainsi qu'apparaissent le retrait et les fissures. Pourquoi nous pilotons le climat plutôt que le nombre d'appareils, vous le lirez sur la page <Link to={lp("/waarom-bouwdroging")}>pourquoi sécher son chantier</Link>.</>,
    optAlt: "Un expert Vernast brandit un carton rouge contre un séchage trop agressif",
    matNote2: <><b>Pour aller plus loin, lisez nos guides.</b> Le nombre de semaines dont votre sol a besoin figure dans <Link to={lp("/gids/hoe-lang-moet-chape-drogen")}>temps de séchage d'une chape</Link>, et pour les murs dans <Link to={lp("/gids/hoe-lang-moet-pleisterwerk-drogen")}>temps de séchage du plafonnage</Link>, tous deux avec les temps par épaisseur. Vous travaillez dans une cave froide ou l'eau se trouve sous le sol ? Le guide <Link to={lp("/gids/condensdroger-of-adsorptiedroger")}>déshumidificateur à condensation ou à adsorption</Link> explique la différence. Et ce que coûte en électricité un appareil qui tourne jour et nuit, nous le calculons dans <Link to={lp("/gids/stroomverbruik-bouwdroger")}>consommation électrique d'un déshumidificateur</Link>. Tous les guides sont réunis sous <Link to={lp("/gids")}>guides sur le séchage de chantier</Link>.</>,
    samKick: "En résumé",
    samH2: "Du matériau mouillé à la construction sèche, en huit étapes.",
    stappen: [
      { b: "L'humidité se trouve dans le matériau", rest: ", dans les pores et les capillaires, jusqu'au cœur." },
      { b: "Le bon climat", rest: " stimule le transport de l'humidité vers la surface." },
      { b: "L'humidité s'évapore", rest: " dans l'air ambiant." },
      { b: "La circulation de l'air", rest: " amène l'air humide vers le déshumidificateur." },
      { b: "Le déshumidificateur", rest: " retire la vapeur d'eau de l'air." },
      { b: "L'eau de condensation", rest: " est évacuée du bâtiment." },
      { b: "L'air plus sec", rest: " entre à nouveau en contact avec le matériau." },
      { b: "Le processus se répète", rest: " jusqu'à ce que le taux d'humidité souhaité soit mesuré." },
    ],
    werfKick: "Location de déshumidificateur de chantier en Flandre",
    werfH2: "De la théorie à votre chantier.",
    werfLede: <>Chez Vernast, vous ne louez pas une machine isolée, mais un climat de séchage calculé. Notre <Link to={lp("/verhuur/simulator")}>calculateur de séchage</Link> détermine, d'après votre volume et votre situation, le pack dont vous avez besoin, pour du <Link to={lp("/pleisterwerk-drogen")}>plafonnage</Link>, une <Link to={lp("/chape-drogen")}>chape</Link>, des <Link to={lp("/waterschade")}>dégâts des eaux</Link> ou une <Link to={lp("/renovatie")}>cave froide</Link>. Chaque pack est livré et installé dans les 24 heures, mesure d'humidité avant et après comprise. Vous préférez vous en charger vous-même ? Vous enlevez à prix avantageux des <Link to={lp("/machines")}>déshumidificateurs, ventilateurs et chauffages de chantier</Link> à notre <Link to={lp("/verhuur/afhalen")}>point d'enlèvement le long de l'A12 à Aartselaar</Link>. Et pour toute question pendant la location, notre <Link to={lp("/klantservice")}>service clientèle</Link> est toujours à votre disposition.</>,
    prinKick: "Le principe Vernast",
    prinH3: "Pas une machine parce qu'elle se trouve être disponible. Une installation parce qu'elle convient à votre bâtiment.",
    prinP: <>C'est ainsi que nous pilotons le climat autour de vos matériaux, et que l'humidité quitte la construction de manière contrôlée, avec une <Link to={lp("/waarom-bouwdroging")}>garantie de séchage à 100 %</Link>.*</>,
    prinCta: "Calculez votre pack de séchage",
    prinAlt: "Un technicien Vernast note les résultats de mesure",
    form: {
      kick: "Encore une question ?",
      h2: "Nos spécialistes du séchage vous conseillent volontiers.",
      lede: "Vous hésitez sur la bonne approche pour votre projet ? Posez votre question, un spécialiste vous répond dans un délai d'un jour ouvrable.",
      opties: ["Comment fonctionne le séchage dans ma situation ?", "Conseil sur le bon pack", "Question sur les prix ou la livraison", "Autre chose"],
      situatiePh: "P. ex. nouvelle construction de 140 m², chape posée la semaine dernière : quand le poseur de sol peut-il commencer ?",
    },
  }),
  en: ({ lp, pomp, rapport }: HoeHulp): HoeTekst => ({
    crumbHome: "Home",
    crumb: "How drying works",
    heroKick: "All about drying · the technology",
    h1: "It is not the unit that dries your home, but the climate it creates.",
    heroP:
      'During construction and renovation, hundreds of litres of water end up in your home: in plaster, screed, mortar and concrete. Professional construction drying is not "switching on a unit", but controlling the combination of temperature, humidity and air movement so that this moisture leaves the structure in a controlled way.',
    heroCta: "Calculate your drying package",
    heroCta2: "Why construction drying?",
    heroAlt: "The Vernast technicians",
    badge: "Eco condensation dehumidifiers",
    badgeSub: "Calculated for your volume",
    prKick: "The principle",
    prH2: "Your home temporarily becomes a controlled climate chamber.",
    prLede: (
      <>A greenhouse changes the climate inside compared with outside. Construction drying does something similar: we temporarily create an indoor climate in which moisture moves more easily from <Link to={lp("/pleisterwerk-drogen")}>plaster</Link>, <Link to={lp("/chape-drogen")}>screed</Link> and walls into the surrounding air, and is then actually removed from that air. Three factors work together to achieve this; none of them works optimally on its own.</>
    ),
    factoren: [
      { h3: "1. Temperature", p: <>Sufficient warmth increases the evaporation potential and supports the transport of moisture out of the material. In cold rooms we therefore add a <Link to={lp(toestelPad("teddh30"))}>site heater</Link>.</> },
      { h3: "2. Relative humidity", p: <>By actively removing water vapour from the air, room is created again and again for moisture evaporating from the materials. That is the job of the <Link to={lp("/machines")}>construction dehumidifier</Link>.</> },
      { h3: "3. Air movement", p: <>Dry air has to reach <i>every</i> damp surface; still air along a wall or floor slows the process down. That is why many packages include <Link to={lp(toestelPad("ttv4500"))}>fans</Link>.</> },
    ],
    prNote: <><b>That is why we calculate first, and only then set up.</b> The <Link to={lp("/verhuur/simulator")}>drying calculator</Link> translates your floor area, ceiling height and situation into the right combination of units, the heart of every <Link to={lp("/verhuur/pakket")}>Vernast drying package</Link>.</>,
    m1Kick: "Misconception no. 1",
    m1H2: 'Why "turning the heating up" is not construction drying.',
    m1P1: <>With the same amount of water vapour, warm air has a much lower <b style={{ color: "#fff" }}>relative</b> humidity than cold air. That sounds as if the air has become much drier, but not a single gram of water has been removed from the building yet. The water is still in the air and in the building materials.</>,
    m1P2: <>Heating can support evaporation, but the water vapour released then has to be actively removed by dehumidification. Opening the windows is no guarantee either: natural ventilation depends entirely on the outdoor climate and on a warm, humid summer's day can even bring moisture <i>in</i>. Professional construction drying makes the process <b style={{ color: "#fff" }}>controllable instead of weather-dependent</b>.</>,
    koud: "Cold room",
    koudBig: "10 °C · 80",
    rvUnit: "% RH",
    warm: "Same air, heated",
    warmBig: "20 °C · 42",
    waterPerKg: " of water per kg of air",
    koudSub: "humid indoor air",
    warmSub: <><b style={{ color: "var(--red)" }}>exactly the same amount of water</b> in the air, only the ratio changed</>,
    rvKick: "A little technical",
    rvH2: "What does relative humidity mean?",
    rvP1: "Relative humidity (RH) tells you how close the air is to saturation at a given temperature. At 100% RH the air is saturated with water vapour; the lower the RH, the more moisture the air can still absorb.",
    rvP2: <>For construction drying, that difference is crucial. Many building materials are porous and hygroscopic: water is not only at the surface but also deep in pores and capillaries. If we lower the moisture level of the surrounding air, a <b>moisture gradient</b> develops between the wet material and its surroundings, and the water gradually moves outwards, where it can evaporate. Drying is never a single process:</>,
    chips: ["Capillary flow", "Evaporation", "Vapour transport", "Diffusion"],
    drKick: "Two kinds of dehumidifier",
    drH2: "The temperature on your site decides which unit takes the water out.",
    drLede: <>Both take water out of the air, but not in the same way, and the difference shows as soon as the temperature drops. That is why the <Link to={lp("/verhuur/simulator")}>drying calculator</Link> also asks how cold your space is.</>,
    drogers: [
      { label: "Condensation · 15 – 25 °C", h3: "The standard on a housing site.", p: <>It cools the indoor air below its dew point and collects the water vapour as condensate. Above 15 °C that is the fastest and most economical way to take construction moisture out of a home, and it is what almost every package contains. <b>How that cycle runs is shown in the next section.</b></> },
      { label: "Desiccant · also below 10 °C", h3: "For cold rooms and cellars.", p: <>It binds the water vapour to a desiccant instead of cooling it, and therefore keeps working at temperatures where condensation barely forms. On an unheated winter site or in a cellar it takes out water where a condensation unit stalls. The full difference is set out in <Link to={lp("/gids/condensdroger-of-adsorptiedroger")}>condensation or desiccant dehumidifier</Link>.</> },
    ],
    cyKick: "The cycle",
    cyH2: "How a condensation dehumidifier removes water from your home.",
    cyLede: <>Inside, the humid air flows past a cold surface, cools below its dew point and gives up its water vapour as liquid water. The air leaves the machine slightly warmer and drier, and the cycle starts again: <b>material → air → dehumidifier → condensate → drainage</b>.</>,
    cyclus: [
      { h3: "Moisture in the material", p: "Water migrates through pores and capillaries to the surface and evaporates into the air." },
      { h3: "Intake", p: "The dehumidifier draws the humid indoor air through the unit with a powerful fan." },
      { h3: "Condensing", p: "The air cools below its dew point along a cold surface; water vapour turns into liquid water." },
      { h3: "Draining", p: "The condensate goes into a tank or is pumped away directly with a condensate pump." },
      { h3: "Back into the room", p: "Drier, slightly warmed air is distributed and picks up moisture from the materials again." },
    ],
    cyNote: <><b>Where does all that water go?</b> With simple units, into a tank that you empty regularly. For long-term professional drying we prefer continuous condensate drainage: a <Link to={lp("/verhuur/toebehoren/condenspomp")}>condensate pump</Link> ({pomp} per dehumidifier per day) pumps the water day and night straight to a drain, so the cycle keeps running without interruption, at night and at weekends too. You add it while <Link to={lp("/verhuur/simulator")}>calculating your package</Link>.</>,
    m2Kick: "Misconception no. 2",
    m2H2: "A wall can look dry and still contain a lot of water.",
    m2Lede: "A building material does not dry equally fast everywhere. This explains why a construction dehumidifier sometimes produces large amounts of water at first and considerably less later on, without the machine performing any worse.",
    fase1Label: "Phase 1 · fast",
    fase1H3: "The surface dries.",
    fase1P: "The easily accessible moisture at and just below the surface evaporates first. After a few days a wall can already look much drier, and the dehumidifier produces a lot of water.",
    fase1Bar: "High water extraction per day",
    fase2Label: "Phase 2 · slow",
    fase2H3: "The core still has to follow.",
    fase2P: "Water deeper down first has to migrate through the pores to the surface before it can evaporate. The surface looks dry, but there is still considerable moisture inside.",
    fase2Bar: "Moisture transport within the material is the limiting factor",
    meetKick: "To measure is to know",
    meetH3: "That is why measuring matters more than looking.",
    meetP: <>A white coat of plaster can look dry and a screed can feel solid, but that says nothing about what is happening deeper in the material. Visual assessment is unreliable. The end goal is never "the dehumidifier has run for seven days", but: <b>the material is ready for the next construction phase</b>. That is why every package includes a moisture reading before and after, and you can optionally choose an <Link to={lp("/verhuur/simulator")}>official moisture report{rapport ? ` (${rapport})` : ""}</Link> for your insurer or landlord.</>,
    meetAlt: "Vernast specialist measuring the moisture content of a wall",
    matKick: "Not every material is the same",
    matH2: "Plaster, screed and concrete do not dry in the same way.",
    matLede: <>Not every building material contains the same type of moisture. A professional drying strategy is therefore never "machine on as soon as the material has been laid"; the material, its age, technical specifications and the desired finish all help determine the approach. That is why the <Link to={lp("/verhuur/simulator")}>calculator</Link> also asks <i>what</i> you are drying.</>,
    materialen: [
      { alt: "Freshly applied wet gypsum plaster with visible dark damp patches", h3: "Gypsum plaster", p: <>Loses its excess water mainly through evaporation. Layer thickness, temperature, humidity, ventilation and the suction of the substrate determine the drying time when <Link to={lp("/pleisterwerk-drogen")}>drying plasterwork</Link>.</> },
      { alt: "Damp screed during the necessary curing phase", h3: "Screed & concrete", p: <>Cement needs water for the hydration reaction through which it hardens. Drying aggressively too early disrupts this; when <Link to={lp("/chape-drogen")}>drying screed</Link> we only start after the necessary curing phase.</> },
      { alt: "Dry screed with shrinkage cracks caused by an overly aggressive drying process", h3: "Drying too aggressively", p: "Large moisture gradients between the surface and the core can encourage shrinkage and cracking. That is why we control the RH and do not let it drop below ±30% for long periods." },
    ],
    optKick: "The difference",
    optH3: "Not maximum drying. Optimal drying.",
    optP: <>Overcapacity is not a mark of quality; the right capacity is. Too much power on a fresh layer pulls the surface dry while the core is still wet, and that is exactly how shrinkage and cracks appear. Why we control the climate rather than the number of units, you can read under <Link to={lp("/waarom-bouwdroging")}>why construction drying</Link>.</>,
    optAlt: "A Vernast expert holds up a red card against drying too aggressively",
    matNote2: <><b>Read more in our guides.</b> How many weeks your floor needs is explained in <Link to={lp("/gids/hoe-lang-moet-chape-drogen")}>how long screed takes to dry</Link>, and for the walls in <Link to={lp("/gids/hoe-lang-moet-pleisterwerk-drogen")}>how long plasterwork takes to dry</Link>, both with the drying times per thickness. Working in a cold cellar, or is the water under the floor? Then <Link to={lp("/gids/condensdroger-of-adsorptiedroger")}>condensation or desiccant dehumidifier</Link> explains the difference. And what a unit running day and night costs in electricity, we work out in <Link to={lp("/gids/stroomverbruik-bouwdroger")}>power consumption of a construction dehumidifier</Link>. All guides are in one place under <Link to={lp("/gids")}>guides to construction drying</Link>.</>,
    samKick: "In summary",
    samH2: "From wet material to a dry structure, in eight steps.",
    stappen: [
      { b: "Moisture is in the building material", rest: ", in pores and capillaries, deep into the core." },
      { b: "The right climate", rest: " stimulates the transport of moisture to the surface." },
      { b: "The moisture evaporates", rest: " into the surrounding air." },
      { b: "Air circulation", rest: " carries the humid air to the dehumidifier." },
      { b: "The construction dehumidifier", rest: " removes the water vapour from the air." },
      { b: "The condensate", rest: " is drained out of the building." },
      { b: "Drier air", rest: " comes into contact with the material again." },
      { b: "The process repeats itself", rest: " until the desired moisture level is measured." },
    ],
    werfKick: "Construction dehumidifier hire in Flanders",
    werfH2: "From theory to your site.",
    werfLede: <>At Vernast you do not hire a standalone machine, but a calculated drying climate. Based on your volume and situation, our <Link to={lp("/verhuur/simulator")}>drying calculator</Link> determines which package you need, for <Link to={lp("/pleisterwerk-drogen")}>plasterwork</Link>, <Link to={lp("/chape-drogen")}>screed</Link>, <Link to={lp("/waterschade")}>water damage</Link> or a <Link to={lp("/renovatie")}>cold cellar</Link>. Every package is delivered and installed within 24 hours, including moisture readings before and after. Prefer to do it yourself? You can collect individual <Link to={lp("/machines")}>construction dehumidifiers, fans and site heaters</Link> at a good price from our <Link to={lp("/verhuur/afhalen")}>collection point along the A12 in Aartselaar</Link>. And if you have questions during the hire, our <Link to={lp("/klantservice")}>customer service</Link> is always there for you.</>,
    prinKick: "The Vernast principle",
    prinH3: "Not a machine because it happens to be available. A set-up because it suits your building.",
    prinP: <>That is how we control the climate around your building materials, and how the moisture leaves the structure in a controlled way, with a <Link to={lp("/waarom-bouwdroging")}>100% dry guarantee</Link>.*</>,
    prinCta: "Calculate your drying package",
    prinAlt: "Vernast technician noting down the measurement results",
    form: {
      kick: "Any more questions about this?",
      h2: "Our drying specialists are happy to help.",
      lede: "Not sure about the right approach for your project? Ask your question and you will get an answer from a specialist within one working day.",
      opties: ["How does drying work in my situation?", "Advice on the right package", "Question about prices or delivery", "Something else"],
      situatiePh: "E.g. new build of 140 m², screed laid last week: when can the floor fitter start?",
    },
  }),
} satisfies Copy<(h: HoeHulp) => HoeTekst>;

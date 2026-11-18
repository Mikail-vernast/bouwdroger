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
}

const rood = { color: "var(--red)", fontWeight: 600 } as const;

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
  matNote1: ReactNode;
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
  nl: ({ lp, pomp }: HoeHulp): HoeTekst => ({
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
      <>Een serre verandert het klimaat binnenin ten opzichte van buiten. Bij bouwdroging doen we iets vergelijkbaars: we creëren tijdelijk een binnenklimaat waarin vocht makkelijker uit <Link to={lp("/verhuur/calculator")}>pleister, chape</Link> en muren naar de omgevingslucht beweegt, en daarna ook echt uit die lucht wordt verwijderd. Drie factoren werken daarvoor samen; geen enkele werkt optimaal op zichzelf.</>
    ),
    factoren: [
      { h3: "1. Temperatuur", p: <>Voldoende warmte verhoogt het verdampingspotentieel en ondersteunt het vochttransport uit het materiaal. In koude ruimtes zetten we daarom een <Link to={lp(toestelPad("teddh30"))} style={rood}>bouwkachel</Link> bij.</> },
      { h3: "2. Relatieve luchtvochtigheid", p: <>Door waterdamp actief uit de lucht te verwijderen, ontstaat telkens opnieuw ruimte voor vocht dat uit de materialen verdampt. Dat is het werk van de <Link to={lp("/machines")} style={rood}>bouwdroger</Link>.</> },
      { h3: "3. Luchtbeweging", p: <>Droge lucht moet álle vochtige oppervlakken bereiken; stilstaande lucht rond een wand of vloer remt het proces. Daarom horen bij veel pakketten <Link to={lp(toestelPad("ttv4500"))} style={rood}>ventilatoren</Link>.</> },
    ],
    prNote: <><b>Daarom berekenen wij eerst, en plaatsen we pas daarna.</b> De <Link to={lp("/verhuur/calculator")}>droogcalculator</Link> vertaalt uw oppervlakte, plafondhoogte en situatie naar de juiste combinatie van toestellen, het hart van elk <Link to={lp("/verhuur/pakket")}>Vernast-droogpakket</Link>.</>,
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
    cyNote: <><b>Waar gaat al dat water naartoe?</b> Bij eenvoudige toestellen in een reservoir dat u regelmatig leegmaakt. Bij langdurige professionele droging verkiezen wij continue condensafvoer: een <Link to={lp("/verhuur/toebehoren/condenspomp")}>condenspomp</Link> ({pomp} per bouwdroger per dag) pompt het water dag en nacht rechtstreeks naar een afvoer, zodat de cyclus onafgebroken doorloopt, ook 's nachts en in het weekend. U voegt hem toe tijdens het <Link to={lp("/verhuur/calculator")}>berekenen van uw pakket</Link>.</>,
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
    meetP: <>Een witte pleisterlaag kan droog ogen, een chape kan stevig aanvoelen, dat zegt niets over wat er dieper in het materiaal gebeurt. Visueel beoordelen is onbetrouwbaar. Het einddoel is nooit "de droger heeft zeven dagen gedraaid", maar: <b>het materiaal is klaar voor de volgende bouwfase</b>. Daarom zit bij elk pakket een vochtmeting voor én na, en kiest u optioneel een <Link to={lp("/booking")}>meetrapport (€ 49)</Link> voor uw verzekering of huisbaas.</>,
    meetAlt: "Vernast specialist meet het vochtgehalte van een muur",
    matKick: "Niet elk materiaal is gelijk",
    matH2: "Pleister, chape en beton drogen niet op dezelfde manier.",
    matLede: <>Niet ieder bouwmateriaal bevat hetzelfde type vocht. Een professionele droogstrategie luidt daarom nooit "machine aan zodra het materiaal geplaatst is", materiaal, leeftijd, technische voorschriften en de gewenste afwerking bepalen mee de aanpak. De <Link to={lp("/verhuur/calculator")}>Calculator</Link> vraagt daarom ook wát u droogt.</>,
    materialen: [
      { alt: "Vers nat gipspleister met zichtbare donkere vochtzones", h3: "Gipspleister", p: <>Verliest zijn overtollige water vooral door verdamping. Laagdikte, temperatuur, luchtvochtigheid, ventilatie en de zuiging van de ondergrond bepalen de droogtijd van <Link to={lp("/verhuur/calculator")} style={rood}>pleisterwerk drogen</Link>.</> },
      { alt: "Vochtige chape tijdens de noodzakelijke uithardingsfase", h3: "Chape & beton", p: <>Cement heeft water nodig voor de hydratatiereactie waarmee het uithardt. Te vroeg agressief drogen verstoort dat, bij <Link to={lp("/verhuur/calculator")} style={rood}>chape drogen</Link> starten we pas ná de noodzakelijke uithardingsfase.</> },
      { alt: "Droge chape met krimpscheuren door een te agressief droogproces", h3: "Te agressief drogen", p: "Grote vochtgradiënten tussen oppervlak en kern kunnen krimp en scheurvorming bevorderen. Daarom sturen we op RV en laten we die niet langdurig onder ±30% zakken." },
    ],
    matNote1: <><b>Niet maximaal drogen. Optimaal drogen.</b> Overcapaciteit is geen kwaliteitskenmerk, de juiste capaciteit wel. Waarom dat zo is, leest u bij <Link to={lp("/waarom-bouwdroging")}>waarom bouwdroging</Link>.</>,
    matNote2: <><b>Lees verder in onze gidsen.</b> Hoeveel weken uw vloer nodig heeft, leest u in <Link to={lp("/gids/hoe-lang-moet-chape-drogen")}>hoe lang moet chape drogen</Link>, met de droogtijden per dikte voor chape en pleisterwerk. Werkt u in een koude kelder of zit het water onder de vloer, dan legt <Link to={lp("/gids/condensdroger-of-adsorptiedroger")}>condensdroger of adsorptiedroger</Link> het verschil uit. En wat een toestel dat dag en nacht draait aan stroom kost, rekenen we voor in <Link to={lp("/gids/stroomverbruik-bouwdroger")}>stroomverbruik van een bouwdroger</Link>. Alle gidsen staan op één plek onder <Link to={lp("/gids")}>gidsen over bouwdroging</Link>.</>,
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
    werfLede: <>Bij Vernast huurt u geen losse machine, maar een berekend droogklimaat. Onze <Link to={lp("/verhuur/calculator")}>droogcalculator</Link> bepaalt op basis van uw volume en situatie welk pakket u nodig heeft, voor <Link to={lp("/verhuur/calculator")}>pleisterwerk</Link>, <Link to={lp("/verhuur/calculator")}>chape</Link>, waterschade of een koude kelder. Elk pakket wordt binnen 24 uur geleverd en geïnstalleerd, inclusief vochtmeting voor en na. Liever zelf aan de slag? Losse <Link to={lp("/machines")}>bouwdrogers, ventilatoren en bouwkachels</Link> haalt u voordelig af in ons <Link to={lp("/verhuur/afhalen")}>afhaalpunt langs de A12 in Aartselaar</Link>. En met vragen tijdens de huur kunt u altijd terecht bij onze <Link to={lp("/klantservice")}>klantenservice</Link>.</>,
    prinKick: "Het Vernast-principe",
    prinH3: "Geen machine omdat ze toevallig beschikbaar is. Een opstelling omdat ze bij uw gebouw past.",
    prinP: <>Zo sturen we het klimaat rond uw bouwmateriaal, en verdwijnt het vocht gecontroleerd uit de constructie, met <Link to={lp("/waarom-bouwdroging")}>100% droog-garantie</Link>.*</>,
    prinCta: "Bereken uw droogpakket",
    prinAlt: "Vernast technicus noteert de meetresultaten",
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
      opties: ["Hoe werkt drogen in mijn situatie?", "Advies over het juiste pakket", "Vraag over prijzen of levering", "Iets anders"],
      situatie: "Uw situatie",
      situatiePh: "Bv. nieuwbouw 140 m², chape geplaatst vorige week, wanneer kan de vloerder starten?",
      privacy: "Wij gebruiken uw gegevens enkel om uw vraag te beantwoorden.",
      verstuur: "Verstuur uw vraag",
      klaar: "Vraag verzonden",
      klaarP: "Bedankt! Een droogspecialist neemt binnen één werkdag contact met u op.",
    },
  }),
  fr: ({ lp, pomp }: HoeHulp): HoeTekst => ({
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
      <>Une serre modifie le climat intérieur par rapport à l'extérieur. Le séchage de chantier fait quelque chose de comparable : nous créons temporairement un climat intérieur dans lequel l'humidité passe plus facilement du <Link to={lp("/verhuur/calculator")}>plafonnage, de la chape</Link> et des murs vers l'air ambiant, puis est réellement retirée de cet air. Trois facteurs agissent ensemble ; aucun ne fonctionne de manière optimale à lui seul.</>
    ),
    factoren: [
      { h3: "1. Température", p: <>Une chaleur suffisante augmente le potentiel d'évaporation et favorise le transport de l'humidité hors du matériau. Dans les pièces froides, nous ajoutons donc un <Link to={lp(toestelPad("teddh30"))} style={rood}>chauffage de chantier</Link>.</> },
      { h3: "2. Humidité relative", p: <>En retirant activement la vapeur d'eau de l'air, on libère sans cesse de la place pour l'humidité qui s'évapore des matériaux. C'est le travail du <Link to={lp("/machines")} style={rood}>déshumidificateur de chantier</Link>.</> },
      { h3: "3. Mouvement de l'air", p: <>L'air sec doit atteindre toutes les surfaces humides ; l'air immobile le long d'un mur ou d'un sol freine le processus. C'est pourquoi de nombreux packs comprennent des <Link to={lp(toestelPad("ttv4500"))} style={rood}>ventilateurs</Link>.</> },
    ],
    prNote: <><b>C'est pourquoi nous calculons d'abord, et n'installons qu'ensuite.</b> Le <Link to={lp("/verhuur/calculator")}>calculateur de séchage</Link> traduit votre surface, votre hauteur sous plafond et votre situation en la bonne combinaison d'appareils, le cœur de chaque <Link to={lp("/verhuur/pakket")}>pack de séchage Vernast</Link>.</>,
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
    cyNote: <><b>Où va toute cette eau ?</b> Avec des appareils simples, dans un réservoir que vous videz régulièrement. Pour un séchage professionnel de longue durée, nous préférons une évacuation continue des condensats : une <Link to={lp("/verhuur/toebehoren/condenspomp")}>pompe à condensats</Link> ({pomp} par déshumidificateur et par jour) pompe l'eau jour et nuit directement vers une évacuation, pour que le cycle tourne sans interruption, même la nuit et le week-end. Vous l'ajoutez lors du <Link to={lp("/verhuur/calculator")}>calcul de votre pack</Link>.</>,
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
    meetP: <>Un enduit blanc peut paraître sec, une chape peut sembler dure : cela ne dit rien de ce qui se passe plus profondément dans le matériau. L'appréciation visuelle n'est pas fiable. L'objectif final n'est jamais « le déshumidificateur a tourné sept jours », mais : <b>le matériau est prêt pour la phase suivante du chantier</b>. C'est pourquoi chaque pack comprend une mesure d'humidité avant et après, et vous pouvez choisir en option un <Link to={lp("/booking")}>rapport de mesure (49 €)</Link> pour votre assureur ou votre propriétaire.</>,
    meetAlt: "Un spécialiste Vernast mesure le taux d'humidité d'un mur",
    matKick: "Chaque matériau est différent",
    matH2: "Le plafonnage, la chape et le béton ne sèchent pas de la même manière.",
    matLede: <>Tous les matériaux de construction ne contiennent pas le même type d'humidité. Une stratégie de séchage professionnelle ne se résume donc jamais à « machine allumée dès que le matériau est posé » : le matériau, son âge, les prescriptions techniques et la finition souhaitée déterminent aussi l'approche. C'est pourquoi le <Link to={lp("/verhuur/calculator")}>calculateur</Link> vous demande aussi ce que vous séchez.</>,
    materialen: [
      { alt: "Plafonnage au plâtre frais et mouillé avec des zones d'humidité sombres visibles", h3: "Plâtre", p: <>Perd son excès d'eau surtout par évaporation. L'épaisseur, la température, l'humidité de l'air, la ventilation et l'absorption du support déterminent le temps de <Link to={lp("/verhuur/calculator")} style={rood}>séchage du plafonnage</Link>.</> },
      { alt: "Chape humide pendant la phase de durcissement nécessaire", h3: "Chape et béton", p: <>Le ciment a besoin d'eau pour la réaction d'hydratation qui le fait durcir. Un séchage agressif trop tôt la perturbe : pour le <Link to={lp("/verhuur/calculator")} style={rood}>séchage d'une chape</Link>, nous ne commençons qu'après la phase de durcissement nécessaire.</> },
      { alt: "Chape sèche avec des fissures de retrait dues à un séchage trop agressif", h3: "Sécher trop agressivement", p: "De forts gradients d'humidité entre la surface et le cœur peuvent favoriser le retrait et la fissuration. C'est pourquoi nous pilotons l'HR et ne la laissons pas descendre durablement sous ±30 %." },
    ],
    matNote1: <><b>Pas sécher au maximum. Sécher de façon optimale.</b> La surcapacité n'est pas un gage de qualité, la bonne capacité l'est. Vous lirez pourquoi sur la page <Link to={lp("/waarom-bouwdroging")}>pourquoi sécher son chantier</Link>.</>,
    matNote2: <><b>Pour aller plus loin, lisez nos guides.</b> Le nombre de semaines dont votre sol a besoin figure dans <Link to={lp("/gids/hoe-lang-moet-chape-drogen")}>temps de séchage d'une chape</Link>, avec les temps de séchage par épaisseur pour la chape et le plafonnage. Vous travaillez dans une cave froide ou l'eau se trouve sous le sol ? Le guide <Link to={lp("/gids/condensdroger-of-adsorptiedroger")}>déshumidificateur à condensation ou à adsorption</Link> explique la différence. Et ce que coûte en électricité un appareil qui tourne jour et nuit, nous le calculons dans <Link to={lp("/gids/stroomverbruik-bouwdroger")}>consommation électrique d'un déshumidificateur</Link>. Tous les guides sont réunis sous <Link to={lp("/gids")}>guides sur le séchage de chantier</Link>.</>,
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
    werfLede: <>Chez Vernast, vous ne louez pas une machine isolée, mais un climat de séchage calculé. Notre <Link to={lp("/verhuur/calculator")}>calculateur de séchage</Link> détermine, d'après votre volume et votre situation, le pack dont vous avez besoin, pour du <Link to={lp("/verhuur/calculator")}>plafonnage</Link>, une <Link to={lp("/verhuur/calculator")}>chape</Link>, des dégâts des eaux ou une cave froide. Chaque pack est livré et installé dans les 24 heures, mesure d'humidité avant et après comprise. Vous préférez vous en charger vous-même ? Vous enlevez à prix avantageux des <Link to={lp("/machines")}>déshumidificateurs, ventilateurs et chauffages de chantier</Link> à notre <Link to={lp("/verhuur/afhalen")}>point d'enlèvement le long de l'A12 à Aartselaar</Link>. Et pour toute question pendant la location, notre <Link to={lp("/klantservice")}>service clientèle</Link> est toujours à votre disposition.</>,
    prinKick: "Le principe Vernast",
    prinH3: "Pas une machine parce qu'elle se trouve être disponible. Une installation parce qu'elle convient à votre bâtiment.",
    prinP: <>C'est ainsi que nous pilotons le climat autour de vos matériaux, et que l'humidité quitte la construction de manière contrôlée, avec une <Link to={lp("/waarom-bouwdroging")}>garantie de séchage à 100 %</Link>.*</>,
    prinCta: "Calculez votre pack de séchage",
    prinAlt: "Un technicien Vernast note les résultats de mesure",
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
      opties: ["Comment fonctionne le séchage dans ma situation ?", "Conseil sur le bon pack", "Question sur les prix ou la livraison", "Autre chose"],
      situatie: "Votre situation",
      situatiePh: "P. ex. nouvelle construction de 140 m², chape posée la semaine dernière : quand le poseur de sol peut-il commencer ?",
      privacy: "Nous utilisons vos données uniquement pour répondre à votre question.",
      verstuur: "Envoyez votre question",
      klaar: "Question envoyée",
      klaarP: "Merci ! Un spécialiste du séchage vous contactera dans un délai d'un jour ouvrable.",
    },
  }),
} satisfies Copy<(h: HoeHulp) => HoeTekst>;

/**
 * Teksten van de luchtkussenpagina in de drie talen. Iconen, links en bedragen
 * staan in de pagina zelf, in dezelfde volgorde als de lijsten hier.
 *
 * Het NL-pad is sinds 20-11-2026 `/waterschade-luchtkussen-techniek`; het oude
 * `/waterschade/luchtkussen-drogen` stuurt door via vercel.json. De Franse en
 * Engelse slugs bleven staan — die stonden al live.
 */
export const LUCHTKUSSEN_PAD = "/waterschade-luchtkussen-techniek";

/*
  Twee beelden, geen drie. De detailfoto van de slang onder de folie
  (`luchtkussen-wand-detail.webp`) stond bij de uitleg, vlak onder de herofoto
  van dezelfde opstelling: twee bijna gelijke foto's onder elkaar. Daar staat nu
  een tekening die wél toont waar de lucht binnenkomt en weer weggaat. Het
  bestand blijft in /public staan.
*/
export const BEELDEN = ["/vernast/luchtkussen-wand-overzicht.webp", "/vernast/luchtkussen-vloer.webp"];

/**
 * Een eigen beeld naast de uitleg, in plaats van het schema. Zet hier een pad
 * in /public (en vul `schema.bijschrift` als bijschrift aan), dan rendert de
 * pagina die afbeelding; blijft het `null`, dan staat het schema er.
 */
export const WERKING_BEELD: string | null = null;

/** De maten van het rekenvoorbeeld, zodat elke taal hetzelfde getal toont. */
export interface Rekenvoorbeeld {
  l: string; b: string; h: string; kamer: string;
  breed: string; hoog: string; bol: string; zone: string; aandeel: string;
}

type Item = { kop: string; tekst: string };
type Lees = { kop: string; links: { label: string; sub?: string }[] };
/** Een kaart van het verzekeringsblok: wat er in die stap gebeurt. */
type Polis = { kop: string; punten: string[] };

export interface LuchtkussenCopy {
  home: string; schade: string; naam: string;
  heroKick: string; h1: string; intro: string; bel: string; beschrijf: string;
  badge: string; badgeSub: string;
  trust: [string, string, string, string];
  werkingKick: string; werkingTitel: string; werking: [string, string]; chips: string[];
  alt: [string, string]; captions: [string, string];
  /** De bijschriften in de tekening naast de uitleg. */
  schema: { titel: string; droger: string; toevoer: string; folie: string; nat: string; uitlaat: string; bijschrift: string };
  waaromKick: string; waaromTitel: string; waaromIntro: string; waarom: Item[];
  rekenKop: string; reken: (r: Rekenvoorbeeld) => string;
  vglKick: string; vglTitel: string; vglIntro: string;
  vglFolie: string; vglRuimte: string; vglKiesBij: string; folie: string[]; ruimte: string[];
  constructieKop: string; constructieVoor: string; constructieLink: string; constructieMidden: string; gidsLink: string;
  opstKick: string; opstTitel: string; opstIntro: string;
  past: string; pastTekst: string; onderzoek: string; onderzoekTekst: string; note: string;
  aanpakKick: string; aanpakTitel: string; aanpakIntro: string; stappen: Item[];
  huurKop: string; huur: (toestel: string, prijs: string, btw: string) => string; huurKnop: string;
  polisKick: string; polisTitel: string; polisIntro: string; polis: Polis[]; polisNote: string; polisLink: string;
  faqTitel: string; faq: { q: string; a: string }[];
  refsKick: string; refsTitel: string; refsIntro: string;
  verderLezenKicker: string; verderLezenTitel: string; verderLezen: Lees[];
  contactTitel: string; contactIntro: string; onderwerpen: string[]; placeholder: string;
  schemaType: string;
}

const nl: LuchtkussenCopy = {
  home: "Home", schade: "Waterschade", naam: "Luchtkussen drogen",
  heroKick: "Gericht drogen onder folie",
  h1: "Luchtkussen drogen: alleen de natte zone, niet de hele kamer.",
  intro: "Een lek dat de onderkant van een muur of een strook vloer nat maakte? Dan hoeft niet de hele ruimte gedroogd te worden. We leggen folie over de natte zone en blazen er droge lucht onder. Die stroomt rechtstreeks langs het materiaal dat nat werd, ook in een koude kelder.",
  bel: "Bel", beschrijf: "Situatie beschrijven",
  badge: "Droge lucht onder folie", badgeSub: "rechtstreeks langs de natte wand",
  trust: ["Gericht op de natte zone", "Werkt ook in de kou", "Ruimte blijft bruikbaar", "Vochtmeting voor én na"],
  werkingKick: "Zo werkt de techniek", werkingTitel: "Een klein droogkanaal langs de schade.",
  werking: [
    "We leggen folie over de natte wand of vloer en kleven de randen af. Een slang van de adsorptiedroger blaast daar droge lucht in; aan de andere kant van de zone blijft een opening open. Zo ontstaat er een luchtstroom van een paar centimeter dik, vlak langs het materiaal dat nat werd.",
    "Door de lichte overdruk bolt de folie op — vandaar de naam luchtkussen. Het kussen zelf droogt niets: het is de stroom eronder die het vocht meeneemt. Daarom blijft er altijd een uitlaat. Een folie die helemaal dicht zit legt die stroom stil, en dan gebeurt er niets meer.",
  ],
  chips: ["Wand of muurvoet", "Strook chape", "Koude kelder of garage", "Na een verholpen lek"],
  alt: [
    "Vernast-adsorptiedroger met luchtslang naar transparante folie over een vochtige wand en aparte afvoer naar het raam",
    "Rode adsorptiedroger naast een natte chape onder licht opgebold transparant plastic",
  ],
  captions: [
    "Een wand plaatselijk drogen: droge lucht stroomt onder de folie, die licht opbolt.",
    "Ook op een toegankelijke vloer leidt folie de droge lucht naar de natte zone.",
  ],
  schema: {
    titel: "De luchtstroom onder de folie",
    droger: "Adsorptiedroger",
    toevoer: "Toevoer: droge lucht",
    folie: "Folie bolt licht op",
    nat: "Natte zone",
    uitlaat: "Uitlaat: vochtige lucht",
    bijschrift: "De lucht komt aan één kant binnen, strijkt langs het natte oppervlak en verlaat de zone aan de andere kant. Die opening blijft bewust open.",
  },
  waaromKick: "De techniek erachter", waaromTitel: "Waarom niet gewoon de hele ruimte drogen?",
  waaromIntro: "Bij een plaatselijke schade zit het vocht in één wand of één strook vloer, niet in de kamer. Een bouwdroger in de ruimte droogt eerst alle lucht, en pas via die lucht het materiaal. Onder folie slaan we die omweg over. Vier redenen waarom dat sneller gaat:",
  waarom: [
    { kop: "Drogen gebeurt aan het oppervlak", tekst: "Een natte muur geeft zijn vocht af aan het dunne laagje lucht dat er tegenaan hangt. Staat dat laagje stil, dan stopt het drogen. Onder folie ververst de droge lucht het voortdurend." },
    { kop: "Hoe droger de lucht, hoe sneller", tekst: "Vocht verhuist van nat naar droog, en hoe groter dat verschil, hoe sneller het gaat. De adsorptiedroger stuurt zijn droogste lucht onvermengd de zone in, in plaats van ze eerst te verdunnen over de hele kamer." },
    { kop: "Werkt ook in een koude ruimte", tekst: "Een condensdroger zakt onder ongeveer 15 °C sterk in rendement; dan moet er eerst gestookt worden. Adsorptie werkt met een vochtopnemend wiel en droogt door in een onverwarmde kelder, garage of berging." },
    { kop: "De rest van de kamer blijft met rust", tekst: "Alleen de lucht ín de zone wordt gedroogd. Parket, houten deuren en meubels erbuiten blijven op een normale vochtigheid, en u kunt de ruimte ondertussen gewoon gebruiken." },
  ],
  rekenKop: "Een rekenvoorbeeld.",
  reken: (r) => `Een kamer van ${r.l} op ${r.b} meter en ${r.h} meter hoog bevat ${r.kamer} m³ lucht. Een natte muurvoet van ${r.breed} meter breed en ${r.hoog} meter hoog, onder folie die zo'n ${r.bol} cm opbolt, is ${r.zone} m³: ongeveer ${r.aandeel} % van de kamer. Daar gaat alle droge lucht naartoe, in plaats van verdund te worden over de hele ruimte.`,
  vglKick: "Luchtkussen of ruimtedroging?", vglTitel: "Plaatselijke schade, plaatselijke droging.",
  vglIntro: "Folie vervangt geen bouwdroger. Ze is de juiste keuze zolang het vocht in één afgebakende zone zit; is de hele kamer nat, dan droogt u de kamer. Vaak staan ze samen: de bouwdroger voor de ruimte, de folie voor de plek die het natst is.",
  vglFolie: "Luchtkussen onder folie", vglRuimte: "Bouwdroger in de ruimte", vglKiesBij: "Kies dit bij",
  folie: ["Een plaatselijk natte wand of een strook vloer", "Het lek is hersteld en het vrije water is weg", "De rest van de ruimte moet bruikbaar blijven", "Ook in een onverwarmde kelder of garage"],
  ruimte: ["Een volledig natte kamer of meerdere wanden", "Veel vocht in de lucht, bijvoorbeeld na een overstroming", "Een verwarmde ruimte, rond 15 tot 25 °C", "Samen met ventilatoren die over de vloer blazen"],
  constructieKop: "En vocht ín de vloer of achter de wand?",
  constructieVoor: "Folie bovenop een vloer droogt de isolatie eronder niet. Daar blazen we de droge lucht via kleine boorgaten rechtstreeks in de vloeropbouw of de spouw; dat staat uitgelegd op onze pagina over",
  constructieLink: "drogen na waterschade",
  constructieMidden: ". Meer over het verschil tussen de toestellen leest u in de",
  gidsLink: "gids over condens- en adsorptiedrogers",
  opstKick: "De opstelling in beeld", opstTitel: "Voor een wand of een deel van de vloer.",
  opstIntro: "De droge lucht moet bij het natte materiaal kunnen komen, en de folie moet rondom goed kunnen aansluiten. Daarom kijken we eerst naar de afwerking en naar wat er onder zit — pas daarna gaat de folie erop.",
  past: "Wanneer het past", pastTekst: "Bij een plaatselijk nat, toegankelijk oppervlak nadat het lek hersteld is. Denk aan de onderste meter pleisterwerk van een binnenmuur, of een afgebakend stuk chape waar u rond kunt werken.",
  onderzoek: "Wanneer we eerst verder kijken", onderzoekTekst: "Zit het water onder de vloer, in de isolatie of achter een gesloten wand, dan zegt een droge bovenkant weinig over de lagen erachter. We meten dan eerst hoe diep het zit. Ook parket en behang vragen een aangepaste regeling, anders droogt u ze mee kapot.",
  note: "Illustratieve voorbeeldopstellingen. Aansluitingen, luchtdebiet en foliebevestiging worden afgestemd op het toestel en het materiaal.",
  aanpakKick: "Van lek naar herstel", aanpakTitel: "Meten, gericht drogen, opnieuw meten.",
  aanpakIntro: "Een luchtkussen is in een uur geplaatst. Wat het verschil maakt, is wat ervoor en erna komt: weten waar het vocht zit, en zwart op wit kunnen aantonen dat het weg is.",
  stappen: [
    { kop: "Lek hersteld, water weg", tekst: "Drogen heeft pas zin als de oorzaak verholpen is. Staand water en doorweekt materiaal dat niet te redden is, gaan eerst weg." },
    { kop: "Voormeting", tekst: "We meten waar het vocht zit en hoe diep. Dat bepaalt of folie volstaat, en het is het startpunt waartegen we de droging straks afzetten." },
    { kop: "Folie en slangen plaatsen", tekst: "We schermen de natte zone af, sluiten de droge-luchtslang aan en laten aan de overkant een uitlaatopening, zodat de lucht blijft stromen." },
    { kop: "Vochtige lucht naar buiten", tekst: "Een adsorptiedroger stoot ook vochtige regeneratielucht uit. Die krijgt een eigen slang naar buiten, anders komt het vocht gewoon terug in de kamer." },
    { kop: "Opvolgen en bijstellen", tekst: "We volgen het materiaalvocht op. Droogt een deel trager, dan passen we de opstelling aan in plaats van langer te wachten." },
    { kop: "Nameting en oplevering", tekst: "Pas als de meting ín het materiaal in orde is, gaat de folie weg. Een droog aanvoelend oppervlak of een strakke folie is geen eindmeting." },
  ],
  huurKop: "Liever zelf een adsorptiedroger huren?",
  huur: (toestel, prijs, btw) => `De ${toestel} huurt u vanaf ${prijs} per dag ${btw}. Bespreek de opstelling onder folie wel eerst met ons, zodat slangen, afvoer en regeling bij uw situatie passen.`,
  huurKnop: "Bekijk de adsorptiedroger",
  polisKick: "Uw dossier",
  polisTitel: "Luchtkussen drogen en uw verzekering.",
  polisIntro: "Waterschade valt vaak onder de brandverzekering van de woning. Of en hoeveel er vergoed wordt, hangt af van uw polis en van de oorzaak — dat kunnen wij niet voor u beoordelen. Wat wij wél doen: zorgen dat uw dossier de stukken bevat waar een verzekeraar om vraagt.",
  polis: [
    { kop: "U meldt het, meteen", punten: ["Doe aangifte binnen de termijn uit uw polis.", "Vraag of de droogkosten in het dossier mogen.", "U hoeft niet op het bezoek van de expert te wachten om te beginnen drogen."] },
    { kop: "Wij leggen de schade vast", punten: ["Foto's van de natte zone zoals we ze aantroffen.", "Een vochtmeting in het materiaal vóór de droging start.", "Welke toestellen er staan en hoe de folie is opgesteld."] },
    { kop: "U krijgt het zwart op wit", punten: ["De meetwaarden van start én oplevering.", "Een factuur op naam voor uw verzekeraar.", "Optioneel een ondertekend vochtrapport."] },
  ],
  polisNote: "De schade beperken is precies wat een verzekeraar van u verwacht, en snel beginnen drogen hoort daarbij. Wacht dus niet tot het dossier rond is om te bellen.",
  polisLink: "Alles over waterschade en uw dossier",
  faqTitel: "Vragen over luchtkussen drogen.",
  faq: [
    { q: "Wat is de luchtkussentechniek?", a: "Bij luchtkussen drogen schermen we een natte wand of vloer af met folie. Een adsorptiedroger voert droge lucht aan via een slang. De folie bolt licht op en de lucht stroomt langs het oppervlak naar een uitlaatopening." },
    { q: "Waarom niet gewoon een bouwdroger in de kamer?", a: "Bij een plaatselijke schade zit het vocht in één wand of strook vloer. Een bouwdroger in de kamer droogt eerst alle lucht, en pas via die lucht het materiaal. Onder folie gaat de droge lucht rechtstreeks langs de natte plek, ook in een koude ruimte, en blijft de rest van de kamer bruikbaar. Is de hele kamer nat, dan is een bouwdroger in de ruimte wél de juiste keuze." },
    { q: "Waarom blijft er een opening in het plastic?", a: "De lucht moet kunnen doorstromen en opgenomen vocht meenemen. Daarom krijgt de zone een toevoer en een uitlaat. De grootte van de opening hangt af van het luchtdebiet en de opstelling." },
    { q: "Droogt dit ook de isolatie onder de vloer?", a: "Folie boven op de vloer bewijst niet dat de isolatie eronder droog wordt. Bij water in afgesloten lagen onderzoeken we de opbouw en kiezen we een passende techniek, eventueel met aanvullende apparatuur." },
    { q: "Hoelang duurt luchtkussen drogen?", a: "Dat hangt af van het materiaal, de dikte, de hoeveelheid vocht en de bereikbaarheid. We volgen de voortgang met vochtmetingen. Een opgeblazen folie of een droog aanvoelend oppervlak is geen eindmeting." },
    { q: "Betaalt mijn verzekering de droging?", a: "Waterschade valt vaak onder de brandverzekering, maar wat er vergoed wordt hangt af van uw polis en van de oorzaak. Vraag het zo vroeg mogelijk aan uw verzekeraar of makelaar. Wij bezorgen u de meetwaarden van start en oplevering en een factuur op naam; een ondertekend vochtrapport kan erbij." },
  ],
  refsKick: "Uit de praktijk", refsTitel: "Waterschade die we eerder drooglegden.",
  refsIntro: "Dossiers met de foto's van de plek zelf: wat er nat was, welke toestellen er stonden en hoe de droging verliep.",
  verderLezenKicker: "Verder lezen", verderLezenTitel: "Verder lezen over drogen na waterschade",
  verderLezen: [
    { kop: "Na een lek", links: [{ label: "Drogen na waterschade: onze aanpak" }, { label: "Dossiers na waterschade" }, { label: "Hoe een bouwdroger vocht uit een woning haalt" }] },
    { kop: "De toestellen", links: [{ label: "Adsorptiedroger", sub: "Droge lucht via slangen naar de natte zone." }, { label: "Axiaalventilator", sub: "Houdt de lucht in de ruimte in beweging." }] },
    { kop: "Achtergrond", links: [{ label: "Gids: condensdroger of adsorptiedroger?" }, { label: "Hoe wij een droging opvolgen en opleveren" }] },
  ],
  contactTitel: "Is luchtkussen drogen geschikt voor uw schade?",
  contactIntro: "Vertel ons waar het lek zat, welk oppervlak nat is en hoe groot de getroffen zone is. We bespreken welke aanpak past.",
  onderwerpen: ["Natte wand", "Natte vloer", "Vocht in de vloeropbouw", "Advies over de opstelling"],
  placeholder: "Bijvoorbeeld: een leidinglek heeft de onderste meter van een binnenmuur nat gemaakt. Het lek is hersteld…",
  schemaType: "Plaatselijke droging na waterschade",
};

const fr: LuchtkussenCopy = {
  home: "Accueil", schade: "Dégâts des eaux", naam: "Séchage sous film",
  heroKick: "Séchage ciblé sous film",
  h1: "Séchage sous film : uniquement la zone humide, pas toute la pièce.",
  intro: "Une fuite a mouillé le bas d’un mur ou une bande de sol ? Inutile alors de sécher toute la pièce. Nous recouvrons la zone humide d’un film et y soufflons de l’air sec. Il circule directement le long du matériau mouillé, même dans une cave froide.",
  bel: "Appeler le", beschrijf: "Décrire la situation",
  badge: "Air sec sous film", badgeSub: "directement le long du mur humide",
  trust: ["Ciblé sur la zone humide", "Efficace même au froid", "La pièce reste utilisable", "Mesure d’humidité avant et après"],
  werkingKick: "Le principe", werkingTitel: "Un petit canal de séchage le long des dégâts.",
  werking: [
    "Nous posons un film sur le mur ou le sol humide et en collons les bords. Une gaine du déshumidificateur à adsorption y souffle de l’air sec ; de l’autre côté de la zone, une ouverture reste libre. Il se crée ainsi un flux d’air de quelques centimètres d’épaisseur, juste le long du matériau mouillé.",
    "La légère surpression fait gonfler le film — d’où le nom de coussin d’air. Le coussin lui-même ne sèche rien : c’est le flux en dessous qui emporte l’humidité. Une sortie reste donc toujours ouverte. Un film entièrement fermé arrête ce flux, et plus rien ne se passe.",
  ],
  chips: ["Mur ou pied de mur", "Bande de chape", "Cave ou garage froid", "Après réparation de la fuite"],
  alt: [
    "Déshumidificateur Vernast à adsorption relié au film transparent couvrant un mur humide, avec évacuation séparée vers la fenêtre",
    "Déshumidificateur rouge près d’une chape humide recouverte d’un film transparent légèrement gonflé",
  ],
  captions: [
    "Séchage localisé d’un mur : l’air sec circule sous le film et le fait légèrement gonfler.",
    "Sur un sol accessible aussi, le film dirige l’air sec vers la zone humide.",
  ],
  schema: {
    titel: "Le flux d’air sous le film",
    droger: "Déshumidificateur",
    toevoer: "Entrée : air sec",
    folie: "Le film gonfle légèrement",
    nat: "Zone humide",
    uitlaat: "Sortie : air humide",
    bijschrift: "L’air entre d’un côté, longe la surface humide et quitte la zone de l’autre côté. Cette ouverture reste volontairement libre.",
  },
  waaromKick: "La technique en détail", waaromTitel: "Pourquoi ne pas simplement sécher toute la pièce ?",
  waaromIntro: "Lors d’un dégât localisé, l’humidité se trouve dans un mur ou une bande de sol, pas dans la pièce. Un déshumidificateur placé dans la pièce sèche d’abord tout l’air, puis seulement le matériau à travers cet air. Sous film, nous évitons ce détour. Quatre raisons pour lesquelles c’est plus rapide :",
  waarom: [
    { kop: "Le séchage se fait en surface", tekst: "Un mur humide cède son eau à la fine couche d’air qui le touche. Si cette couche reste immobile, le séchage s’arrête. Sous film, l’air sec la renouvelle en permanence." },
    { kop: "Plus l’air est sec, plus c’est rapide", tekst: "L’humidité se déplace du milieu humide vers le milieu sec, et plus l’écart est grand, plus elle se déplace vite. Le déshumidificateur à adsorption envoie son air le plus sec directement dans la zone, au lieu de le diluer dans toute la pièce." },
    { kop: "Fonctionne aussi dans un local froid", tekst: "Un déshumidificateur à condensation perd fortement en efficacité sous 15 °C environ ; il faut alors d’abord chauffer. L’adsorption fonctionne avec une roue qui capte l’humidité et continue de sécher dans une cave, un garage ou un débarras non chauffé." },
    { kop: "Le reste de la pièce est épargné", tekst: "Seul l’air à l’intérieur de la zone est séché. Le parquet, les portes en bois et les meubles à l’extérieur gardent une humidité normale, et vous continuez d’utiliser la pièce." },
  ],
  rekenKop: "Un exemple chiffré.",
  reken: (r) => `Une pièce de ${r.l} m sur ${r.b} m et ${r.h} m de haut contient ${r.kamer} m³ d’air. Un pied de mur humide de ${r.breed} m de large et ${r.hoog} m de haut, sous un film qui gonfle d’environ ${r.bol} cm, représente ${r.zone} m³ : environ ${r.aandeel} % de la pièce. Tout l’air sec y est dirigé, au lieu d’être dilué dans toute la pièce.`,
  vglKick: "Film ou séchage de la pièce ?", vglTitel: "Dégât localisé, séchage localisé.",
  vglIntro: "Le film ne remplace pas un déshumidificateur de chantier. Il est le bon choix tant que l’humidité se limite à une zone délimitée ; si toute la pièce est mouillée, on sèche la pièce. Souvent, les deux se combinent : le déshumidificateur pour la pièce, le film pour l’endroit le plus humide.",
  vglFolie: "Coussin d’air sous film", vglRuimte: "Déshumidificateur dans la pièce", vglKiesBij: "À choisir en cas de",
  folie: ["Un mur ou une bande de sol humide par endroits", "La fuite est réparée et l’eau stagnante enlevée", "Le reste de la pièce doit rester utilisable", "Aussi dans une cave ou un garage non chauffé"],
  ruimte: ["Une pièce entièrement mouillée ou plusieurs murs", "Beaucoup d’humidité dans l’air, après une inondation par exemple", "Une pièce chauffée, entre 15 et 25 °C environ", "Avec des ventilateurs qui soufflent sur le sol"],
  constructieKop: "Et l’humidité dans le sol ou derrière le mur ?",
  constructieVoor: "Un film posé sur le sol ne sèche pas l’isolation en dessous. Dans ce cas, nous injectons l’air sec par de petits trous directement dans la composition du sol ou dans la coulisse ; nous l’expliquons sur notre page",
  constructieLink: "séchage après un dégât des eaux",
  constructieMidden: ". La différence entre les appareils est détaillée dans notre",
  gidsLink: "guide condensation ou adsorption",
  opstKick: "L’installation en images", opstTitel: "Pour un mur ou une partie du sol.",
  opstIntro: "L’air sec doit pouvoir atteindre le matériau humide, et le film doit pouvoir adhérer tout autour. Nous examinons donc d’abord la finition et ce qui se trouve en dessous — le film ne vient qu’après.",
  past: "Quand cette méthode convient", pastTekst: "Pour une surface humide localisée et accessible, une fois la fuite réparée : le premier mètre de plafonnage d’un mur intérieur, ou une partie délimitée de la chape autour de laquelle on peut travailler.",
  onderzoek: "Quand nous examinons d’abord plus loin", onderzoekTekst: "Si l’eau se trouve sous le sol, dans l’isolation ou derrière une paroi fermée, une surface sèche ne dit pas grand-chose des couches cachées. Nous mesurons alors d’abord la profondeur. Le parquet et le papier peint demandent aussi une régulation adaptée, sous peine de les abîmer en séchant.",
  note: "Illustrations d’installations possibles. Les raccordements, le débit d’air et la fixation du film sont adaptés à l’appareil et au matériau.",
  aanpakKick: "De la fuite à la remise en état", aanpakTitel: "Mesurer, sécher de façon ciblée, mesurer à nouveau.",
  aanpakIntro: "Un coussin d’air se pose en une heure. Ce qui fait la différence, c’est ce qui vient avant et après : savoir où se trouve l’humidité, et pouvoir prouver noir sur blanc qu’elle est partie.",
  stappen: [
    { kop: "Fuite réparée, eau enlevée", tekst: "Sécher n’a de sens qu’une fois la cause réparée. L’eau stagnante et les matériaux détrempés irrécupérables sont d’abord retirés." },
    { kop: "Mesure initiale", tekst: "Nous mesurons où se trouve l’humidité et à quelle profondeur. Cela détermine si un film suffit, et c’est le point de départ auquel nous comparerons le séchage." },
    { kop: "Pose du film et des gaines", tekst: "Nous isolons la zone humide, raccordons la gaine d’air sec et laissons une ouverture de sortie à l’autre bout, pour que l’air continue de circuler." },
    { kop: "L’air humide vers l’extérieur", tekst: "Un déshumidificateur à adsorption rejette aussi de l’air de régénération humide. Il reçoit sa propre gaine vers l’extérieur, sinon l’humidité revient simplement dans la pièce." },
    { kop: "Suivi et ajustements", tekst: "Nous suivons l’humidité du matériau. Si une partie sèche plus lentement, nous adaptons l’installation au lieu d’attendre plus longtemps." },
    { kop: "Mesure finale et réception", tekst: "Le film n’est retiré que lorsque la mesure dans le matériau est bonne. Une surface sèche au toucher ou un film bien tendu ne constituent pas une mesure finale." },
  ],
  huurKop: "Vous préférez louer vous-même un déshumidificateur à adsorption ?",
  huur: (toestel, prijs, btw) => `Le ${toestel} se loue à partir de ${prijs} par jour ${btw}. Parlez-nous d’abord de l’installation sous film, pour que les gaines, l’évacuation et la régulation conviennent à votre situation.`,
  huurKnop: "Voir le déshumidificateur à adsorption",
  polisKick: "Votre dossier",
  polisTitel: "Le séchage sous film et votre assurance.",
  polisIntro: "Les dégâts des eaux relèvent souvent de l’assurance incendie de l’habitation. Ce qui est indemnisé, et dans quelle mesure, dépend de votre police et de la cause — nous ne pouvons pas en juger à votre place. Ce que nous faisons : veiller à ce que votre dossier contienne les pièces qu’un assureur réclame.",
  polis: [
    { kop: "Vous le déclarez, tout de suite", punten: ["Faites la déclaration dans le délai prévu par votre police.", "Demandez si les frais de séchage entrent dans le dossier.", "Inutile d’attendre la visite de l’expert pour commencer à sécher."] },
    { kop: "Nous constatons les dégâts", punten: ["Des photos de la zone humide telle que nous l’avons trouvée.", "Une mesure d’humidité dans le matériau avant le début du séchage.", "Quels appareils sont installés et comment le film est posé."] },
    { kop: "Vous recevez tout par écrit", punten: ["Les valeurs mesurées au début et à la réception.", "Une facture nominative pour votre assureur.", "En option, un rapport d’humidité signé."] },
  ],
  polisNote: "Limiter les dégâts est précisément ce qu’un assureur attend de vous, et commencer à sécher rapidement en fait partie. N’attendez donc pas que le dossier soit bouclé pour appeler.",
  polisLink: "Tout sur les dégâts des eaux et votre dossier",
  faqTitel: "Questions sur le séchage sous film.",
  faq: [
    { q: "Qu’est-ce que la technique du coussin d’air ?", a: "Nous isolons un mur ou un sol humide avec un film. Un déshumidificateur à adsorption y amène de l’air sec par une gaine. Le film gonfle légèrement et l’air longe la surface jusqu’à une ouverture de sortie." },
    { q: "Pourquoi pas simplement un déshumidificateur dans la pièce ?", a: "Lors d’un dégât localisé, l’humidité se trouve dans un mur ou une bande de sol. Un appareil dans la pièce sèche d’abord tout l’air, puis seulement le matériau à travers cet air. Sous film, l’air sec passe directement le long de la zone humide, même dans un local froid, et le reste de la pièce reste utilisable. Si toute la pièce est mouillée, un déshumidificateur dans la pièce est en revanche le bon choix." },
    { q: "Pourquoi laisser une ouverture dans le film ?", a: "L’air doit circuler et évacuer l’humidité absorbée. La zone possède donc une entrée et une sortie. La taille de l’ouverture dépend du débit et de l’installation." },
    { q: "Cette méthode sèche-t-elle l’isolation sous le sol ?", a: "Un film posé au-dessus du sol ne prouve pas que l’isolation sèche. Si de l’eau a pénétré dans des couches fermées, nous examinons leur composition pour choisir une méthode adaptée, avec du matériel complémentaire si nécessaire." },
    { q: "Combien de temps dure le séchage sous film ?", a: "Cela dépend du matériau, de son épaisseur, de la quantité d’humidité et de l’accès à la zone. Des mesures suivent la progression. Un film gonflé ou une surface sèche au toucher ne constitue pas une mesure finale." },
    { q: "Mon assurance paie-t-elle le séchage ?", a: "Les dégâts des eaux relèvent souvent de l’assurance incendie, mais ce qui est indemnisé dépend de votre police et de la cause. Posez la question le plus tôt possible à votre assureur ou à votre courtier. Nous vous remettons les valeurs mesurées au début et à la réception ainsi qu’une facture nominative ; un rapport d’humidité signé peut s’y ajouter." },
  ],
  refsKick: "Sur le terrain", refsTitel: "Des dégâts des eaux que nous avons séchés.",
  refsIntro: "Des dossiers avec les photos sur place : ce qui était mouillé, quels appareils étaient installés et comment le séchage s’est déroulé.",
  verderLezenKicker: "Pour aller plus loin", verderLezenTitel: "En savoir plus sur le séchage après un dégât des eaux",
  verderLezen: [
    { kop: "Après une fuite", links: [{ label: "Séchage après un dégât des eaux : notre approche" }, { label: "Dossiers de dégâts des eaux" }, { label: "Comment un déshumidificateur retire l’humidité d’une maison" }] },
    { kop: "Les appareils", links: [{ label: "Déshumidificateur à adsorption", sub: "De l’air sec par des gaines vers la zone humide." }, { label: "Ventilateur axial", sub: "Garde l’air de la pièce en mouvement." }] },
    { kop: "Contexte", links: [{ label: "Guide : condensation ou adsorption ?" }, { label: "Comment nous suivons et réceptionnons un séchage" }] },
  ],
  contactTitel: "Le séchage sous film convient-il à vos dégâts ?",
  contactIntro: "Indiquez où se trouvait la fuite, quelle surface est humide et la taille de la zone touchée. Nous discuterons de la méthode adaptée.",
  onderwerpen: ["Mur humide", "Sol humide", "Humidité sous le sol", "Conseil sur l’installation"],
  placeholder: "Par exemple : une fuite a mouillé le bas d’un mur intérieur. La fuite est réparée…",
  schemaType: "Séchage localisé après un dégât des eaux",
};

const en: LuchtkussenCopy = {
  home: "Home", schade: "Water damage", naam: "Air cushion drying",
  heroKick: "Targeted drying beneath sheeting",
  h1: "Air cushion drying: just the wet area, not the whole room.",
  intro: "A leak has soaked the bottom of a wall or a strip of floor? Then there is no need to dry the whole room. We cover the wet area with sheeting and blow dry air beneath it. It flows straight along the material that got wet, even in a cold cellar.",
  bel: "Call", beschrijf: "Describe your situation",
  badge: "Dry air beneath sheeting", badgeSub: "straight along the wet wall",
  trust: ["Aimed at the wet area", "Works in the cold too", "Room stays usable", "Moisture readings before and after"],
  werkingKick: "How it works", werkingTitel: "A small drying channel along the damage.",
  werking: [
    "We lay sheeting over the wet wall or floor and tape down the edges. A duct from the desiccant dehumidifier blows dry air in; at the far end of the zone an opening stays clear. That creates an airflow a few centimetres thick, right along the material that got wet.",
    "Slight positive pressure makes the sheeting billow — hence the name air cushion. The cushion itself dries nothing: it is the flow beneath it that carries the moisture away. So there is always an outlet. Fully sealed sheeting stops that flow, and then nothing happens at all.",
  ],
  chips: ["Wall or wall base", "Strip of screed", "Cold cellar or garage", "After a repaired leak"],
  alt: [
    "Vernast desiccant dehumidifier ducted to transparent sheeting over a damp wall, with a separate exhaust to the window",
    "Red desiccant dehumidifier beside damp screed beneath gently inflated transparent sheeting",
  ],
  captions: [
    "Local wall drying: dry air flows beneath the sheeting, making it gently billow.",
    "On an accessible floor too, sheeting directs dry air towards the wet area.",
  ],
  schema: {
    titel: "The airflow beneath the sheeting",
    droger: "Desiccant dehumidifier",
    toevoer: "Inlet: dry air",
    folie: "Sheeting billows gently",
    nat: "Wet area",
    uitlaat: "Outlet: moist air",
    bijschrift: "Air enters at one end, sweeps along the wet surface and leaves the zone at the other end. That opening is left clear on purpose.",
  },
  waaromKick: "The technique explained", waaromTitel: "Why not simply dry the whole room?",
  waaromIntro: "With localised damage, the moisture sits in one wall or one strip of floor, not in the room. A dehumidifier in the room first dries all the air, and only through that air the material. Beneath sheeting, we skip that detour. Four reasons why that is faster:",
  waarom: [
    { kop: "Drying happens at the surface", tekst: "A wet wall releases its moisture into the thin layer of air clinging to it. If that layer stands still, drying stops. Beneath sheeting, dry air refreshes it continuously." },
    { kop: "The drier the air, the faster", tekst: "Moisture moves from wet to dry, and the bigger that difference, the faster it moves. The desiccant dehumidifier sends its driest air straight into the zone, instead of diluting it across the whole room." },
    { kop: "Works in a cold room too", tekst: "A condensing dehumidifier loses much of its output below roughly 15 °C; the room has to be heated first. Desiccant drying uses a moisture-absorbing wheel and keeps drying in an unheated cellar, garage or storeroom." },
    { kop: "The rest of the room is left alone", tekst: "Only the air inside the zone is dried. Parquet, wooden doors and furniture outside it keep a normal humidity, and you can carry on using the room meanwhile." },
  ],
  rekenKop: "A worked example.",
  reken: (r) => `A room of ${r.l} by ${r.b} metres and ${r.h} metres high holds ${r.kamer} m³ of air. A wet wall base ${r.breed} metres wide and ${r.hoog} metre high, beneath sheeting that billows about ${r.bol} cm, is ${r.zone} m³: roughly ${r.aandeel}% of the room. All the dry air goes there, instead of being diluted across the whole room.`,
  vglKick: "Air cushion or room drying?", vglTitel: "Local damage, local drying.",
  vglIntro: "Sheeting does not replace a dehumidifier. It is the right choice as long as the moisture is confined to one defined area; if the whole room is wet, you dry the room. Often the two go together: the dehumidifier for the room, sheeting for the wettest spot.",
  vglFolie: "Air cushion beneath sheeting", vglRuimte: "Dehumidifier in the room", vglKiesBij: "Choose this for",
  folie: ["A locally wet wall or strip of floor", "The leak is repaired and standing water removed", "The rest of the room needs to stay usable", "Also in an unheated cellar or garage"],
  ruimte: ["A completely wet room or several walls", "A lot of moisture in the air, after a flood for example", "A heated room, around 15 to 25 °C", "Together with fans blowing across the floor"],
  constructieKop: "And moisture inside the floor or behind the wall?",
  constructieVoor: "Sheeting on top of a floor does not dry the insulation below. There, we blow the dry air through small drilled holes straight into the floor build-up or the cavity; this is explained on our page about",
  constructieLink: "drying after water damage",
  constructieMidden: ". The difference between the units is covered in our",
  gidsLink: "guide to condensing and desiccant dehumidifiers",
  opstKick: "The setup in pictures", opstTitel: "For a wall or part of a floor.",
  opstIntro: "Dry air has to be able to reach the wet material, and the sheeting has to seal all the way round. So we first assess the finish and what sits beneath it — the sheeting goes on only after that.",
  past: "When it is suitable", pastTekst: "For a localised, accessible wet surface once the leak is repaired. Think of the bottom metre of plaster on an internal wall, or a defined part of a screed floor you can work around.",
  onderzoek: "When we look further first", onderzoekTekst: "If the water sits beneath the floor, in insulation or behind a closed wall, a dry surface says little about the layers behind it. We then measure how deep it goes first. Parquet and wallpaper also need adjusted control, or you dry them to ruin.",
  note: "Illustrative example setups. Connections, airflow and sheeting attachment are matched to the equipment and the material.",
  aanpakKick: "From leak to repair", aanpakTitel: "Measure, dry where it matters, measure again.",
  aanpakIntro: "An air cushion is set up within an hour. What makes the difference is what comes before and after: knowing where the moisture is, and being able to show in black and white that it has gone.",
  stappen: [
    { kop: "Leak repaired, water removed", tekst: "Drying only makes sense once the cause is fixed. Standing water and soaked material that cannot be saved go first." },
    { kop: "Initial reading", tekst: "We measure where the moisture is and how deep. That decides whether sheeting is enough, and it is the baseline we measure the drying against later." },
    { kop: "Fitting sheeting and ducts", tekst: "We enclose the wet area, connect the dry-air duct and leave an outlet opening at the far end so the air keeps flowing." },
    { kop: "Moist air outside", tekst: "A desiccant dehumidifier also releases moist regeneration air. It gets its own duct to the outside, otherwise the moisture simply comes back into the room." },
    { kop: "Monitoring and adjusting", tekst: "We track moisture in the material. If one part dries more slowly, we adjust the setup instead of waiting longer." },
    { kop: "Final reading and handover", tekst: "The sheeting only comes off when the reading inside the material is right. A surface that feels dry or tight sheeting is not a final reading." },
  ],
  huurKop: "Rather hire a desiccant dehumidifier yourself?",
  huur: (toestel, prijs, btw) => `You can hire the ${toestel} from ${prijs} per day ${btw}. Do talk the setup beneath sheeting through with us first, so the ducts, exhaust and control suit your situation.`,
  huurKnop: "View the desiccant dehumidifier",
  polisKick: "Your claim",
  polisTitel: "Air cushion drying and your insurer.",
  polisIntro: "Water damage often falls under the home's fire policy. Whether and how much is covered depends on your policy and on the cause — that is not ours to judge. What we do: make sure your file holds the documents an insurer asks for.",
  polis: [
    { kop: "You report it, straight away", punten: ["File the claim within the deadline in your policy.", "Ask whether drying costs may go into the file.", "You do not have to wait for the loss adjuster to start drying."] },
    { kop: "We record the damage", punten: ["Photos of the wet area as we found it.", "A moisture reading in the material before drying starts.", "Which units are in place and how the sheeting is set up."] },
    { kop: "You get it in writing", punten: ["The readings at the start and at handover.", "An invoice in your name for your insurer.", "A signed moisture report, optionally."] },
  ],
  polisNote: "Limiting the damage is exactly what an insurer expects of you, and starting to dry quickly is part of that. So do not wait for the file to be settled before you call.",
  polisLink: "Everything about water damage and your claim",
  faqTitel: "Questions about air cushion drying.",
  faq: [
    { q: "What is air cushion drying?", a: "We enclose a wet wall or floor with sheeting. A desiccant dehumidifier supplies dry air through a duct. The sheeting billows slightly and the air flows along the surface to an outlet opening." },
    { q: "Why not just put a dehumidifier in the room?", a: "With localised damage, the moisture sits in one wall or strip of floor. A dehumidifier in the room first dries all the air, and only through that air the material. Beneath sheeting, dry air flows straight along the wet spot, even in a cold room, and the rest of the room stays usable. If the whole room is wet, a dehumidifier in the room is the right choice." },
    { q: "Why leave an opening in the plastic?", a: "Air needs to flow through and carry away the moisture it picks up. The enclosure therefore has an inlet and an outlet. The opening size depends on the airflow and setup." },
    { q: "Does this dry insulation beneath a floor?", a: "Sheeting above a floor does not prove that the insulation below is drying. If water has entered enclosed layers, we assess their construction and select a suitable method, with additional equipment where needed." },
    { q: "How long does air cushion drying take?", a: "It depends on the material, thickness, moisture content and accessibility. We monitor progress with moisture measurements. Inflated sheeting or a surface that feels dry is not a final moisture assessment." },
    { q: "Will my insurer pay for the drying?", a: "Water damage often falls under the fire policy, but what is covered depends on your policy and on the cause. Ask your insurer or broker as early as possible. We provide the readings at the start and at handover and an invoice in your name; a signed moisture report can be added." },
  ],
  refsKick: "From the field", refsTitel: "Water damage we dried before.",
  refsIntro: "Cases with photos from the site itself: what was wet, which units were set up and how the drying went.",
  verderLezenKicker: "Further reading", verderLezenTitel: "More about drying after water damage",
  verderLezen: [
    { kop: "After a leak", links: [{ label: "Drying after water damage: our approach" }, { label: "Water damage projects" }, { label: "How a dehumidifier removes moisture from a home" }] },
    { kop: "The equipment", links: [{ label: "Desiccant dehumidifier", sub: "Dry air through ducts to the wet area." }, { label: "Axial fan", sub: "Keeps the air in the room moving." }] },
    { kop: "Background", links: [{ label: "Guide: condensing or desiccant dehumidifier?" }, { label: "How we monitor and hand over a drying job" }] },
  ],
  contactTitel: "Is air cushion drying right for your damage?",
  contactIntro: "Tell us where the leak was, which surface is wet and how large the affected area is. We will discuss a suitable approach.",
  onderwerpen: ["Wet wall", "Wet floor", "Moisture beneath the floor", "Setup advice"],
  placeholder: "For example: a pipe leak has soaked the lower part of an internal wall. The leak has been repaired…",
  schemaType: "Localised drying after water damage",
};

export const COPY = { nl, fr, en };

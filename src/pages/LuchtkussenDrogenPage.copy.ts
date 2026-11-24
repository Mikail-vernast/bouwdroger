/**
 * Teksten van de luchtkussenpagina in de drie talen. Iconen, links en bedragen
 * staan in de pagina zelf, in dezelfde volgorde als de lijsten hier.
 *
 * Het NL-pad is sinds 20-11-2026 `/waterschade-luchtkussen-techniek`; het oude
 * `/waterschade/luchtkussen-drogen` stuurt door via vercel.json. De Franse en
 * Engelse slugs bleven staan — die stonden al live.
 */
export const LUCHTKUSSEN_PAD = "/waterschade-luchtkussen-techniek";
export const BEELDEN = ["/vernast/luchtkussen-wand-overzicht.webp", "/vernast/luchtkussen-wand-detail.webp", "/vernast/luchtkussen-vloer.webp"];

/** De maten van het rekenvoorbeeld, zodat elke taal hetzelfde getal toont. */
export interface Rekenvoorbeeld {
  l: string; b: string; h: string; kamer: string;
  breed: string; hoog: string; bol: string; zone: string; aandeel: string;
}

type Item = { kop: string; tekst: string };
type Lees = { kop: string; links: { label: string; sub?: string }[] };

export interface LuchtkussenCopy {
  home: string; schade: string; naam: string;
  pulse: string; h1: string; intro: string; bel: string; beschrijf: string;
  badge: string; badgeSub: string;
  trust: [string, string, string, string];
  werkingKick: string; werkingTitel: string; werking: [string, string]; chips: string[];
  alt: [string, string, string]; captions: [string, string, string];
  waaromKick: string; waaromTitel: string; waaromIntro: string; waarom: Item[];
  rekenKop: string; reken: (r: Rekenvoorbeeld) => string;
  vglKick: string; vglTitel: string; vglIntro: string;
  vglFolie: string; vglRuimte: string; folie: string[]; ruimte: string[];
  constructieKop: string; constructieVoor: string; constructieLink: string; constructieMidden: string; gidsLink: string;
  opstKick: string; opstTitel: string; opstIntro: string;
  past: string; pastTekst: string; onderzoek: string; onderzoekTekst: string; note: string;
  aanpakKick: string; aanpakTitel: string; aanpakIntro: string; stappen: Item[];
  huurKop: string; huur: (toestel: string, prijs: string, btw: string) => string; huurKnop: string;
  faqTitel: string; faq: { q: string; a: string }[];
  mbKick: string; mbTitel: string; mbTekst: string; mbAlt: string;
  refsKick: string; refsTitel: string; refsIntro: string;
  verderLezenKicker: string; verderLezenTitel: string; verderLezen: Lees[];
  contactTitel: string; contactIntro: string; placeholder: string;
  schemaType: string;
}

const nl: LuchtkussenCopy = {
  home: "Home", schade: "Waterschade", naam: "Luchtkussen drogen",
  pulse: "Gericht drogen onder folie",
  h1: "Luchtkussen drogen: alleen de natte zone, niet de hele kamer.",
  intro: "Een lek dat de onderkant van een muur of een strook vloer nat maakte? Dan hoeft niet de hele ruimte gedroogd te worden. We leggen folie over de natte zone en blazen er droge lucht onder. Die stroomt rechtstreeks langs het materiaal dat nat werd, ook in een koude kelder.",
  bel: "Bel", beschrijf: "Situatie beschrijven",
  badge: "Droge lucht onder folie", badgeSub: "rechtstreeks langs de natte wand",
  trust: ["Gericht op de natte zone", "Werkt ook in de kou", "Ruimte blijft bruikbaar", "Vochtmeting voor én na"],
  werkingKick: "Zo werkt de techniek", werkingTitel: "Een klein droogkanaal langs de schade.",
  werking: [
    "Folie vormt een afgeschermde zone tegen de wand of op de vloer. Een adsorptiedroger blaast er via een slang droge lucht in. Die neemt vocht op aan het oppervlak en verlaat de zone aan de andere kant, via een uitlaatopening.",
    "Door de lichte overdruk bolt het plastic op: het luchtkussen waar de techniek haar naam aan dankt. Het kussen zelf doet niets; het gaat om de voortdurende stroom langs het materiaal. Daarom blijft er altijd een opening. Een volledig dichte folie zou die stroom stilleggen.",
  ],
  chips: ["Wand of muurvoet", "Strook chape", "Koude kelder of garage", "Na een verholpen lek"],
  alt: [
    "Vernast-adsorptiedroger met luchtslang naar transparante folie over een vochtige wand en aparte afvoer naar het raam",
    "Detail van een luchtslang onder afgeplakte wandfolie, met uitlaatopening aan de tegenoverliggende rand",
    "Rode adsorptiedroger naast een natte chape onder licht opgebold transparant plastic",
  ],
  captions: [
    "Een wand plaatselijk drogen: droge lucht stroomt onder de folie, die licht opbolt.",
    "Toevoer en uitlaat: de lucht stroomt langs het natte oppervlak en verlaat de afgeschermde zone via een opening.",
    "Ook op een toegankelijke vloer leidt folie de droge lucht naar de natte zone.",
  ],
  waaromKick: "De techniek erachter", waaromTitel: "Waarom niet gewoon de hele ruimte drogen?",
  waaromIntro: "Bij een plaatselijke schade zit het vocht in één wand of één strook vloer, niet in de kamer. Een bouwdroger in de ruimte droogt eerst de lucht, en pas via die lucht het materiaal. Onder folie slaan we die omweg over.",
  waarom: [
    { kop: "Drogen gebeurt aan het oppervlak", tekst: "Een natte wand geeft zijn vocht af aan de lucht die er vlak tegenaan hangt. In een kamer blijft daar een laagje vochtige, bijna stilstaande lucht staan, en een droger in het midden van de ruimte komt er maar traag bij. Onder folie stroomt de droge lucht er rechtstreeks langs en voert dat laagje voortdurend af." },
    { kop: "Hoe droger de lucht, hoe sneller", tekst: "Vocht verhuist van nat naar droog, en hoe groter dat verschil, hoe sneller het gaat. Een adsorptiedroger levert lucht die veel droger is dan wat een kamer met een condensdroger haalt. Die lucht komt onder de folie onvermengd bij het natte materiaal, in plaats van eerst te verdunnen in de hele ruimte." },
    { kop: "Een fractie van de lucht", tekst: "Droogt u de kamer, dan droogt u ook alle lucht die er via deuren, kieren en de rest van de woning bij komt. Onder folie droogt het toestel alleen de kleine stroom die door het kussen gaat. Het werk komt terecht waar het vocht zit." },
    { kop: "Ook in een koude ruimte", tekst: "Een condensdroger verliest onder ongeveer 15 °C sterk aan rendement; dan moet er eerst gestookt worden. Adsorptie werkt met een vochtopnemend materiaal en blijft ook in een onverwarmde kelder, garage of berging doordrogen." },
    { kop: "Gezond materiaal blijft met rust", tekst: "Wekenlang zeer droge lucht in een hele kamer droogt ook wat níet nat was: parket, houten deuren, meubels. Bij een gerichte opstelling blijft de rest van de ruimte op een normale luchtvochtigheid." },
    { kop: "De ruimte blijft bruikbaar", tekst: "Geen toestel dat dag en nacht een hele leefruimte inneemt en geen deur die dicht moet blijven. De folie zit tegen de natte wand of op de natte strook vloer; de rest van de kamer kunt u gewoon gebruiken." },
  ],
  rekenKop: "Een rekenvoorbeeld.",
  reken: (r) => `Een kamer van ${r.l} op ${r.b} meter en ${r.h} meter hoog bevat ${r.kamer} m³ lucht. Een natte muurvoet van ${r.breed} meter breed en ${r.hoog} meter hoog, onder folie die zo'n ${r.bol} cm opbolt, is ${r.zone} m³: ongeveer ${r.aandeel} % van de kamer. Daar gaat alle droge lucht naartoe, in plaats van verdund te worden over de hele ruimte.`,
  vglKick: "Luchtkussen of ruimtedroging?", vglTitel: "Plaatselijke schade, plaatselijke droging.",
  vglIntro: "Folie is geen vervanger van een bouwdroger. Ze loont wanneer het vocht in één afgebakende zone zit. Is de hele kamer nat, dan droogt u de kamer. Vaak gaan ze samen: een bouwdroger voor de ruimte, folie voor de plek die het natst is.",
  vglFolie: "Luchtkussen onder folie", vglRuimte: "Bouwdroger in de ruimte",
  folie: ["Een plaatselijk natte wand of een strook vloer", "Het lek is hersteld en het vrije water is weg", "De rest van de ruimte moet bruikbaar blijven", "Ook in een onverwarmde kelder of garage"],
  ruimte: ["Een volledig natte kamer of meerdere wanden", "Veel vocht in de lucht, bijvoorbeeld na een overstroming", "Een verwarmde ruimte, rond 15 tot 25 °C", "Samen met ventilatoren die over de vloer blazen"],
  constructieKop: "En vocht ín de vloer of achter de wand?",
  constructieVoor: "Folie bovenop een vloer droogt de isolatie eronder niet. Daar blazen we de droge lucht via kleine boorgaten rechtstreeks in de vloeropbouw of de spouw; dat staat uitgelegd op onze pagina over",
  constructieLink: "drogen na waterschade",
  constructieMidden: ". Meer over het verschil tussen de toestellen leest u in de",
  gidsLink: "gids over condens- en adsorptiedrogers",
  opstKick: "De opstelling in beeld", opstTitel: "Voor een wand of een deel van de vloer.",
  opstIntro: "De natte zone moet bereikbaar zijn voor de droge lucht. Daarom bekijken we de afwerking en de opbouw voordat de folie erop gaat.",
  past: "Wanneer het past", pastTekst: "Bij een plaatselijk nat, toegankelijk oppervlak na een verholpen lek. Denk aan de onderste meter pleisterwerk van een binnenmuur of een afgebakend deel van de chape.",
  onderzoek: "Wanneer we eerst verder kijken", onderzoekTekst: "Bij water onder de vloer, in isolatie of achter een gesloten wand: een droge bovenkant zegt dan weinig over de lagen erachter. Ook parket of behang vraagt een aangepaste regeling.",
  note: "Illustratieve voorbeeldopstellingen. Aansluitingen, luchtdebiet en foliebevestiging worden afgestemd op het toestel en het materiaal.",
  aanpakKick: "Van lek naar herstel", aanpakTitel: "Meten, gericht drogen, opnieuw meten.",
  aanpakIntro: "Een luchtkussen is snel geplaatst. Wat het verschil maakt, is wat ervoor en erna komt: weten waar het vocht zit, en kunnen aantonen dat het weg is.",
  stappen: [
    { kop: "Lek hersteld, water weg", tekst: "Drogen heeft pas zin als de oorzaak verholpen is. Staand water en doorweekt materiaal dat niet te redden is, gaan eerst weg." },
    { kop: "Voormeting", tekst: "We meten waar het vocht zit en hoe diep. Dat bepaalt of folie volstaat, en het is het startpunt waartegen we de droging straks afzetten." },
    { kop: "Folie en slangen plaatsen", tekst: "We schermen de natte zone af, sluiten de droge-luchtslang aan en laten een uitlaatopening, zodat de lucht blijft stromen." },
    { kop: "Vochtige lucht naar buiten", tekst: "Een adsorptiedroger stoot ook vochtige regeneratielucht uit. Die krijgt een eigen slang naar buiten, anders komt het vocht gewoon terug in de kamer." },
    { kop: "Opvolgen en bijstellen", tekst: "We volgen het materiaalvocht op. Droogt een deel trager, dan passen we de opstelling aan in plaats van langer te wachten." },
    { kop: "Nameting en oplevering", tekst: "Pas als de meting in het materiaal in orde is, gaat de folie weg. Een droog aanvoelend oppervlak of een strakke folie is geen eindmeting." },
  ],
  huurKop: "Liever zelf een adsorptiedroger huren?",
  huur: (toestel, prijs, btw) => `De ${toestel} huurt u vanaf ${prijs} per dag ${btw}. Bespreek de opstelling onder folie wel eerst met ons, zodat slangen, afvoer en regeling bij uw situatie passen.`,
  huurKnop: "Bekijk de adsorptiedroger",
  faqTitel: "Vragen over luchtkussen drogen.",
  faq: [
    { q: "Wat is de luchtkussentechniek?", a: "Bij luchtkussen drogen schermen we een natte wand of vloer af met folie. Een adsorptiedroger voert droge lucht aan via een slang. De folie bolt licht op en de lucht stroomt langs het oppervlak naar een uitlaatopening." },
    { q: "Waarom niet gewoon een bouwdroger in de kamer?", a: "Bij een plaatselijke schade zit het vocht in één wand of strook vloer. Een bouwdroger in de kamer droogt eerst alle lucht, en pas via die lucht het materiaal. Onder folie gaat de droge lucht rechtstreeks langs de natte plek, ook in een koude ruimte, en blijft de rest van de kamer bruikbaar. Is de hele kamer nat, dan is een bouwdroger in de ruimte wél de juiste keuze." },
    { q: "Waarom blijft er een opening in het plastic?", a: "De lucht moet kunnen doorstromen en opgenomen vocht meenemen. Daarom krijgt de zone een toevoer en een uitlaat. De grootte van de opening hangt af van het luchtdebiet en de opstelling." },
    { q: "Droogt dit ook de isolatie onder de vloer?", a: "Folie boven op de vloer bewijst niet dat de isolatie eronder droog wordt. Bij water in afgesloten lagen onderzoeken we de opbouw en kiezen we een passende techniek, eventueel met aanvullende apparatuur." },
    { q: "Hoelang duurt luchtkussen drogen?", a: "Dat hangt af van het materiaal, de dikte, de hoeveelheid vocht en de bereikbaarheid. We volgen de voortgang met vochtmetingen. Een opgeblazen folie of een droog aanvoelend oppervlak is geen eindmeting." },
  ],
  mbKick: "Twijfelt u?", mbTitel: "Stuur ons een foto van de natte plek.",
  mbTekst: "Aan een foto en de maten zien we vaak al of folie volstaat of dat de hele ruimte gedroogd moet worden. Zo staat er geen toestel te veel, en geen te weinig.",
  mbAlt: "Vernast technicus bij de bestelwagen met een bouwdroger",
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
  placeholder: "Bijvoorbeeld: een leidinglek heeft de onderste meter van een binnenmuur nat gemaakt. Het lek is hersteld…",
  schemaType: "Plaatselijke droging na waterschade",
};

const fr: LuchtkussenCopy = {
  home: "Accueil", schade: "Dégâts des eaux", naam: "Séchage sous film",
  pulse: "Séchage ciblé sous film",
  h1: "Séchage sous film : uniquement la zone humide, pas toute la pièce.",
  intro: "Une fuite a mouillé le bas d’un mur ou une bande de sol ? Inutile alors de sécher toute la pièce. Nous recouvrons la zone humide d’un film et y soufflons de l’air sec. Il circule directement le long du matériau mouillé, même dans une cave froide.",
  bel: "Appeler le", beschrijf: "Décrire la situation",
  badge: "Air sec sous film", badgeSub: "directement le long du mur humide",
  trust: ["Ciblé sur la zone humide", "Efficace même au froid", "La pièce reste utilisable", "Mesure d’humidité avant et après"],
  werkingKick: "Le principe", werkingTitel: "Un petit canal de séchage le long des dégâts.",
  werking: [
    "Le film forme une zone isolée contre le mur ou sur le sol. Un déshumidificateur à adsorption y envoie de l’air sec par une gaine. L’air capte l’humidité à la surface et quitte la zone de l’autre côté, par une ouverture de sortie.",
    "La légère surpression fait gonfler le film : c’est le coussin d’air qui donne son nom à la technique. Le coussin en soi ne fait rien ; ce qui compte, c’est le flux continu le long du matériau. C’est pourquoi une ouverture reste toujours prévue. Un film entièrement fermé arrêterait ce flux.",
  ],
  chips: ["Mur ou pied de mur", "Bande de chape", "Cave ou garage froid", "Après réparation de la fuite"],
  alt: [
    "Déshumidificateur Vernast à adsorption relié au film transparent couvrant un mur humide, avec évacuation séparée vers la fenêtre",
    "Détail de la gaine entrant sous le film mural et de l’ouverture de sortie au bord opposé",
    "Déshumidificateur rouge près d’une chape humide recouverte d’un film transparent légèrement gonflé",
  ],
  captions: [
    "Séchage localisé d’un mur : l’air sec circule sous le film et le fait légèrement gonfler.",
    "Entrée et sortie : l’air longe la surface humide et quitte la zone isolée par une ouverture.",
    "Sur un sol accessible aussi, le film dirige l’air sec vers la zone humide.",
  ],
  waaromKick: "La technique en détail", waaromTitel: "Pourquoi ne pas simplement sécher toute la pièce ?",
  waaromIntro: "Lors d’un dégât localisé, l’humidité se trouve dans un mur ou une bande de sol, pas dans la pièce. Un déshumidificateur placé dans la pièce sèche d’abord l’air, puis seulement le matériau à travers cet air. Sous film, nous évitons ce détour.",
  waarom: [
    { kop: "Le séchage se fait en surface", tekst: "Un mur humide cède son eau à l’air qui le touche directement. Dans une pièce, une fine couche d’air humide et presque immobile reste collée au mur, et un appareil placé au milieu de la pièce ne l’atteint que lentement. Sous film, l’air sec passe directement le long du mur et évacue cette couche en continu." },
    { kop: "Plus l’air est sec, plus c’est rapide", tekst: "L’humidité se déplace du milieu humide vers le milieu sec, et plus l’écart est grand, plus elle se déplace vite. Un déshumidificateur à adsorption fournit un air bien plus sec que celui d’une pièce traitée par condensation. Sous film, cet air atteint le matériau humide sans être dilué dans toute la pièce." },
    { kop: "Une fraction de l’air", tekst: "Sécher la pièce, c’est aussi sécher tout l’air qui y entre par les portes, les fentes et le reste du logement. Sous film, l’appareil ne sèche que le petit flux qui traverse le coussin. Le travail se fait là où se trouve l’humidité." },
    { kop: "Même dans un local froid", tekst: "Un déshumidificateur à condensation perd fortement en efficacité sous 15 °C environ ; il faut alors d’abord chauffer. L’adsorption fonctionne avec un matériau qui capte l’humidité et continue de sécher dans une cave, un garage ou un débarras non chauffé." },
    { kop: "Les matériaux sains sont épargnés", tekst: "Pendant des semaines, un air très sec dans toute une pièce assèche aussi ce qui n’était pas mouillé : parquet, portes en bois, meubles. Avec une installation ciblée, le reste de la pièce garde une humidité de l’air normale." },
    { kop: "La pièce reste utilisable", tekst: "Pas d’appareil qui occupe jour et nuit tout un séjour, pas de porte à garder fermée. Le film est posé contre le mur humide ou sur la bande de sol mouillée ; vous utilisez le reste de la pièce normalement." },
  ],
  rekenKop: "Un exemple chiffré.",
  reken: (r) => `Une pièce de ${r.l} m sur ${r.b} m et ${r.h} m de haut contient ${r.kamer} m³ d’air. Un pied de mur humide de ${r.breed} m de large et ${r.hoog} m de haut, sous un film qui gonfle d’environ ${r.bol} cm, représente ${r.zone} m³ : environ ${r.aandeel} % de la pièce. Tout l’air sec y est dirigé, au lieu d’être dilué dans toute la pièce.`,
  vglKick: "Film ou séchage de la pièce ?", vglTitel: "Dégât localisé, séchage localisé.",
  vglIntro: "Le film ne remplace pas un déshumidificateur de chantier. Il est intéressant quand l’humidité se limite à une zone. Si toute la pièce est mouillée, on sèche la pièce. Souvent, les deux se combinent : un déshumidificateur pour la pièce, un film pour l’endroit le plus humide.",
  vglFolie: "Coussin d’air sous film", vglRuimte: "Déshumidificateur dans la pièce",
  folie: ["Un mur ou une bande de sol humide par endroits", "La fuite est réparée et l’eau stagnante enlevée", "Le reste de la pièce doit rester utilisable", "Aussi dans une cave ou un garage non chauffé"],
  ruimte: ["Une pièce entièrement mouillée ou plusieurs murs", "Beaucoup d’humidité dans l’air, après une inondation par exemple", "Une pièce chauffée, entre 15 et 25 °C environ", "Avec des ventilateurs qui soufflent sur le sol"],
  constructieKop: "Et l’humidité dans le sol ou derrière le mur ?",
  constructieVoor: "Un film posé sur le sol ne sèche pas l’isolation en dessous. Dans ce cas, nous injectons l’air sec par de petits trous directement dans la composition du sol ou dans la coulisse ; nous l’expliquons sur notre page",
  constructieLink: "séchage après un dégât des eaux",
  constructieMidden: ". La différence entre les appareils est détaillée dans notre",
  gidsLink: "guide condensation ou adsorption",
  opstKick: "L’installation en images", opstTitel: "Pour un mur ou une partie du sol.",
  opstIntro: "L’air sec doit pouvoir atteindre la zone humide. Nous examinons donc la finition et la composition avant de poser le film.",
  past: "Quand cette méthode convient", pastTekst: "Pour une surface humide localisée et accessible, après réparation de la fuite : le premier mètre de plafonnage d’un mur intérieur ou une partie délimitée de la chape, par exemple.",
  onderzoek: "Quand nous examinons d’abord plus loin", onderzoekTekst: "En présence d’eau sous le sol, dans l’isolation ou derrière une paroi fermée : une surface sèche ne dit alors pas grand-chose des couches cachées. Le parquet ou le papier peint demandent aussi une régulation adaptée.",
  note: "Illustrations d’installations possibles. Les raccordements, le débit d’air et la fixation du film sont adaptés à l’appareil et au matériau.",
  aanpakKick: "De la fuite à la remise en état", aanpakTitel: "Mesurer, sécher de façon ciblée, mesurer à nouveau.",
  aanpakIntro: "Un coussin d’air se pose vite. Ce qui fait la différence, c’est ce qui vient avant et après : savoir où se trouve l’humidité, et pouvoir prouver qu’elle est partie.",
  stappen: [
    { kop: "Fuite réparée, eau enlevée", tekst: "Sécher n’a de sens qu’une fois la cause réparée. L’eau stagnante et les matériaux détrempés irrécupérables sont d’abord retirés." },
    { kop: "Mesure initiale", tekst: "Nous mesurons où se trouve l’humidité et à quelle profondeur. Cela détermine si un film suffit, et c’est le point de départ auquel nous comparerons le séchage." },
    { kop: "Pose du film et des gaines", tekst: "Nous isolons la zone humide, raccordons la gaine d’air sec et laissons une ouverture de sortie pour que l’air continue de circuler." },
    { kop: "L’air humide vers l’extérieur", tekst: "Un déshumidificateur à adsorption rejette aussi de l’air de régénération humide. Il reçoit sa propre gaine vers l’extérieur, sinon l’humidité revient simplement dans la pièce." },
    { kop: "Suivi et ajustements", tekst: "Nous suivons l’humidité du matériau. Si une partie sèche plus lentement, nous adaptons l’installation au lieu d’attendre plus longtemps." },
    { kop: "Mesure finale et réception", tekst: "Le film n’est retiré que lorsque la mesure dans le matériau est bonne. Une surface sèche au toucher ou un film bien tendu ne constituent pas une mesure finale." },
  ],
  huurKop: "Vous préférez louer vous-même un déshumidificateur à adsorption ?",
  huur: (toestel, prijs, btw) => `Le ${toestel} se loue à partir de ${prijs} par jour ${btw}. Parlez-nous d’abord de l’installation sous film, pour que les gaines, l’évacuation et la régulation conviennent à votre situation.`,
  huurKnop: "Voir le déshumidificateur à adsorption",
  faqTitel: "Questions sur le séchage sous film.",
  faq: [
    { q: "Qu’est-ce que la technique du coussin d’air ?", a: "Nous isolons un mur ou un sol humide avec un film. Un déshumidificateur à adsorption y amène de l’air sec par une gaine. Le film gonfle légèrement et l’air longe la surface jusqu’à une ouverture de sortie." },
    { q: "Pourquoi pas simplement un déshumidificateur dans la pièce ?", a: "Lors d’un dégât localisé, l’humidité se trouve dans un mur ou une bande de sol. Un appareil dans la pièce sèche d’abord tout l’air, puis seulement le matériau à travers cet air. Sous film, l’air sec passe directement le long de la zone humide, même dans un local froid, et le reste de la pièce reste utilisable. Si toute la pièce est mouillée, un déshumidificateur dans la pièce est en revanche le bon choix." },
    { q: "Pourquoi laisser une ouverture dans le film ?", a: "L’air doit circuler et évacuer l’humidité absorbée. La zone possède donc une entrée et une sortie. La taille de l’ouverture dépend du débit et de l’installation." },
    { q: "Cette méthode sèche-t-elle l’isolation sous le sol ?", a: "Un film posé au-dessus du sol ne prouve pas que l’isolation sèche. Si de l’eau a pénétré dans des couches fermées, nous examinons leur composition pour choisir une méthode adaptée, avec du matériel complémentaire si nécessaire." },
    { q: "Combien de temps dure le séchage sous film ?", a: "Cela dépend du matériau, de son épaisseur, de la quantité d’humidité et de l’accès à la zone. Des mesures suivent la progression. Un film gonflé ou une surface sèche au toucher ne constitue pas une mesure finale." },
  ],
  mbKick: "Vous hésitez ?", mbTitel: "Envoyez-nous une photo de la zone humide.",
  mbTekst: "Avec une photo et les dimensions, nous voyons souvent déjà si un film suffit ou s’il faut sécher toute la pièce. Ainsi, il n’y a ni appareil de trop, ni appareil manquant.",
  mbAlt: "Technicien Vernast près de la camionnette avec un déshumidificateur de chantier",
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
  placeholder: "Par exemple : une fuite a mouillé le bas d’un mur intérieur. La fuite est réparée…",
  schemaType: "Séchage localisé après un dégât des eaux",
};

const en: LuchtkussenCopy = {
  home: "Home", schade: "Water damage", naam: "Air cushion drying",
  pulse: "Targeted drying beneath sheeting",
  h1: "Air cushion drying: just the wet area, not the whole room.",
  intro: "A leak has soaked the bottom of a wall or a strip of floor? Then there is no need to dry the whole room. We cover the wet area with sheeting and blow dry air beneath it. It flows straight along the material that got wet, even in a cold cellar.",
  bel: "Call", beschrijf: "Describe your situation",
  badge: "Dry air beneath sheeting", badgeSub: "straight along the wet wall",
  trust: ["Aimed at the wet area", "Works in the cold too", "Room stays usable", "Moisture readings before and after"],
  werkingKick: "How it works", werkingTitel: "A small drying channel along the damage.",
  werking: [
    "Sheeting forms an enclosed zone against the wall or on the floor. A desiccant dehumidifier blows dry air into it through a duct. The air picks up moisture at the surface and leaves the zone at the other side, through an outlet opening.",
    "Slight positive pressure makes the plastic billow: the air cushion that gives the technique its name. The cushion itself does nothing; what matters is the continuous flow along the material. That is why there is always an opening. Fully sealed sheeting would stop the flow.",
  ],
  chips: ["Wall or wall base", "Strip of screed", "Cold cellar or garage", "After a repaired leak"],
  alt: [
    "Vernast desiccant dehumidifier ducted to transparent sheeting over a damp wall, with a separate exhaust to the window",
    "Detail of an air duct entering taped wall sheeting with an outlet opening at the opposite edge",
    "Red desiccant dehumidifier beside damp screed beneath gently inflated transparent sheeting",
  ],
  captions: [
    "Local wall drying: dry air flows beneath the sheeting, making it gently billow.",
    "Inlet and outlet: air flows along the wet surface and leaves the enclosed zone through an opening.",
    "On an accessible floor too, sheeting directs dry air towards the wet area.",
  ],
  waaromKick: "The technique explained", waaromTitel: "Why not simply dry the whole room?",
  waaromIntro: "With localised damage, the moisture sits in one wall or one strip of floor, not in the room. A dehumidifier in the room first dries the air, and only through that air the material. Beneath sheeting, we skip that detour.",
  waarom: [
    { kop: "Drying happens at the surface", tekst: "A wet wall releases its moisture into the air right next to it. In a room, a thin layer of humid, almost still air clings there, and a dehumidifier in the middle of the room reaches it only slowly. Beneath sheeting, dry air flows straight along the wall and carries that layer away continuously." },
    { kop: "The drier the air, the faster", tekst: "Moisture moves from wet to dry, and the bigger that difference, the faster it moves. A desiccant dehumidifier delivers air that is far drier than a room reaches with a condensing dehumidifier. Beneath the sheeting, that air reaches the wet material undiluted, instead of first mixing into the whole room." },
    { kop: "A fraction of the air", tekst: "Drying the room means drying all the air that comes in through doors, gaps and the rest of the house as well. Beneath sheeting, the unit only dries the small stream passing through the cushion. The work goes where the moisture is." },
    { kop: "In a cold room too", tekst: "A condensing dehumidifier loses much of its output below roughly 15 °C; the room has to be heated first. Desiccant drying uses a moisture-absorbing material and keeps drying in an unheated cellar, garage or storeroom." },
    { kop: "Healthy materials are left alone", tekst: "Weeks of very dry air in a whole room also dries out what was not wet: parquet, wooden doors, furniture. With a targeted setup, the rest of the room keeps a normal humidity." },
    { kop: "The room stays usable", tekst: "No unit taking over a living room day and night, no door that has to stay shut. The sheeting sits against the wet wall or on the wet strip of floor; you can use the rest of the room as normal." },
  ],
  rekenKop: "A worked example.",
  reken: (r) => `A room of ${r.l} by ${r.b} metres and ${r.h} metres high holds ${r.kamer} m³ of air. A wet wall base ${r.breed} metres wide and ${r.hoog} metre high, beneath sheeting that billows about ${r.bol} cm, is ${r.zone} m³: roughly ${r.aandeel}% of the room. All the dry air goes there, instead of being diluted across the whole room.`,
  vglKick: "Air cushion or room drying?", vglTitel: "Local damage, local drying.",
  vglIntro: "Sheeting does not replace a dehumidifier. It pays off when the moisture is confined to one area. If the whole room is wet, you dry the room. Often the two go together: a dehumidifier for the room, sheeting for the wettest spot.",
  vglFolie: "Air cushion beneath sheeting", vglRuimte: "Dehumidifier in the room",
  folie: ["A locally wet wall or strip of floor", "The leak is repaired and standing water removed", "The rest of the room needs to stay usable", "Also in an unheated cellar or garage"],
  ruimte: ["A completely wet room or several walls", "A lot of moisture in the air, after a flood for example", "A heated room, around 15 to 25 °C", "Together with fans blowing across the floor"],
  constructieKop: "And moisture inside the floor or behind the wall?",
  constructieVoor: "Sheeting on top of a floor does not dry the insulation below. There, we blow the dry air through small drilled holes straight into the floor build-up or the cavity; this is explained on our page about",
  constructieLink: "drying after water damage",
  constructieMidden: ". The difference between the units is covered in our",
  gidsLink: "guide to condensing and desiccant dehumidifiers",
  opstKick: "The setup in pictures", opstTitel: "For a wall or part of a floor.",
  opstIntro: "Dry air has to be able to reach the wet area. That is why we assess the finish and the build-up before the sheeting goes on.",
  past: "When it is suitable", pastTekst: "For a localised, accessible wet surface after a repaired leak. Think of the bottom metre of plaster on an internal wall or a defined part of a screed floor.",
  onderzoek: "When we look further first", onderzoekTekst: "For water beneath the floor, in insulation or behind a closed wall: a dry surface then says little about the layers behind it. Parquet or wallpaper also need adjusted control.",
  note: "Illustrative example setups. Connections, airflow and sheeting attachment are matched to the equipment and the material.",
  aanpakKick: "From leak to repair", aanpakTitel: "Measure, dry where it matters, measure again.",
  aanpakIntro: "An air cushion is quick to set up. What makes the difference is what comes before and after: knowing where the moisture is, and being able to show it has gone.",
  stappen: [
    { kop: "Leak repaired, water removed", tekst: "Drying only makes sense once the cause is fixed. Standing water and soaked material that cannot be saved go first." },
    { kop: "Initial reading", tekst: "We measure where the moisture is and how deep. That decides whether sheeting is enough, and it is the baseline we measure the drying against later." },
    { kop: "Fitting sheeting and ducts", tekst: "We enclose the wet area, connect the dry-air duct and leave an outlet opening so the air keeps flowing." },
    { kop: "Moist air outside", tekst: "A desiccant dehumidifier also releases moist regeneration air. It gets its own duct to the outside, otherwise the moisture simply comes back into the room." },
    { kop: "Monitoring and adjusting", tekst: "We track moisture in the material. If one part dries more slowly, we adjust the setup instead of waiting longer." },
    { kop: "Final reading and handover", tekst: "The sheeting only comes off when the reading in the material is right. A surface that feels dry or tight sheeting is not a final reading." },
  ],
  huurKop: "Rather hire a desiccant dehumidifier yourself?",
  huur: (toestel, prijs, btw) => `You can hire the ${toestel} from ${prijs} per day ${btw}. Do talk the setup beneath sheeting through with us first, so the ducts, exhaust and control suit your situation.`,
  huurKnop: "View the desiccant dehumidifier",
  faqTitel: "Questions about air cushion drying.",
  faq: [
    { q: "What is air cushion drying?", a: "We enclose a wet wall or floor with sheeting. A desiccant dehumidifier supplies dry air through a duct. The sheeting billows slightly and the air flows along the surface to an outlet opening." },
    { q: "Why not just put a dehumidifier in the room?", a: "With localised damage, the moisture sits in one wall or strip of floor. A dehumidifier in the room first dries all the air, and only through that air the material. Beneath sheeting, dry air flows straight along the wet spot, even in a cold room, and the rest of the room stays usable. If the whole room is wet, a dehumidifier in the room is the right choice." },
    { q: "Why leave an opening in the plastic?", a: "Air needs to flow through and carry away the moisture it picks up. The enclosure therefore has an inlet and an outlet. The opening size depends on the airflow and setup." },
    { q: "Does this dry insulation beneath a floor?", a: "Sheeting above a floor does not prove that the insulation below is drying. If water has entered enclosed layers, we assess their construction and select a suitable method, with additional equipment where needed." },
    { q: "How long does air cushion drying take?", a: "It depends on the material, thickness, moisture content and accessibility. We monitor progress with moisture measurements. Inflated sheeting or a surface that feels dry is not a final moisture assessment." },
  ],
  mbKick: "Not sure?", mbTitel: "Send us a photo of the wet spot.",
  mbTekst: "From a photo and the dimensions we can often already tell whether sheeting is enough or the whole room needs drying. That way there is no unit too many, and none too few.",
  mbAlt: "Vernast technician by the van with a dehumidifier",
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
  placeholder: "For example: a pipe leak has soaked the lower part of an internal wall. The leak has been repaired…",
  schemaType: "Localised drying after water damage",
};

export const COPY = { nl, fr, en };

import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import GidsShell, { type GidsFaq } from "@/components/gids/GidsShell";
import { useSeo } from "@/data/seo";
import { productInTaal } from "@/data/verhuur.fr";
import { useCopy, useLokaalPad, useTaal, useToonBedrag, type Copy } from "@/i18n/useTaal";
import { PRODUCTS, toestelPad } from "@/data/verhuur";
import { TARIEVEN_PUBLIEK, euro } from "@/data/tarieflijst";
import { itemListSchema } from "@/lib/schema";

const PATH = "/gids/condensdroger-of-adsorptiedroger";

/*
  Welk toestel welke techniek gebruikt, lezen we uit het `type` dat het portaal
  publiceert ("Condensontvochtiger", "Adsorptiedroger · …") in plaats van het
  hier vast te leggen. Staat de adsorptiedroger in het portaal op "niet te
  huur", dan verdwijnt hij uit TARIEVEN_PUBLIEK en dus ook uit deze gids —
  geen link naar een toestelpagina die niet bestaat.
*/
const CONDENS = TARIEVEN_PUBLIEK.filter((t) => /condens/i.test(t.type));
const ADSORPTIE = TARIEVEN_PUBLIEK.filter((t) => /adsorptie/i.test(t.type));
const GAMMA = [...CONDENS, ...ADSORPTIE];

/** Het werkbereik uit de technische fiche van het kleinste condenstoestel. */
const WERKBEREIK =
  CONDENS[0] && PRODUCTS[CONDENS[0].key]?.specs.find(([label]) => /werkingsbereik temperatuur/i.test(label))?.[1];

type Lp = (nlPad: string) => string;

interface CondensTekst {
  crumbHome: string;
  crumbGidsen: string;
  crumb: string;
  kick: string;
  h1: string;
  intro: string;
  heroAlt: string;
  faq: GidsFaq[];
  lijst: string;
  condensH2: string;
  condensP1: ReactNode;
  condensP2: ReactNode;
  koudH2: string;
  koudP1: ReactNode;
  werkbereik: (bereik: string) => string;
  koudP2: ReactNode;
  adsH2: string;
  adsP1: string;
  adsP2: ReactNode;
  keuzeH2: string;
  situatie: string;
  beste: string;
  rijen: [string, string][];
  twijfel: ReactNode;
  gammaKick: string;
  gammaH2: string;
  gammaLede: ReactNode;
  adsorptie: string;
  condensatie: string;
  tot: (l: number) => string;
  ruimtes: (v: number) => string;
  /** Wat er na het bedrag staat; `label` is "excl. btw", "TVAC" of "HTVA". */
  perDag: (label: string) => string;
  bekijk: (kort: string) => string;
  note: ReactNode;
}

const COPY = {
  nl: (lp: Lp): CondensTekst => ({
    crumbHome: "Home",
    crumbGidsen: "Gidsen",
    crumb: "Condensdroger of adsorptiedroger?",
    kick: "Gids · het juiste toestel",
    h1: "Condensdroger of adsorptiedroger: welke heeft u nodig?",
    intro:
      "Beide toestellen halen vocht uit de lucht, maar op een totaal andere manier. Daardoor werkt de ene het best in een warme woning en de andere in een koude kelder of onder een vloer. Hier leest u hoe ze werken, waar de temperatuurgrens ligt en welk toestel uit ons gamma bij uw situatie past.",
    heroAlt: "Drie Vernast condensbouwdrogers naast elkaar",
    faq: [
      {
        question: "Wat is het verschil tussen een condensdroger en een adsorptiedroger?",
        answer:
          "Een condensdroger koelt de lucht af tot onder het dauwpunt, zodat de waterdamp condenseert tot water dat u afvoert. Een adsorptiedroger trekt de waterdamp uit de lucht met een vochtopnemend materiaal en blaast de vochtige lucht via een slang naar buiten. De eerste werkt best in een warme ruimte, de tweede blijft ook in de koude werken.",
      },
      {
        question: "Vanaf welke temperatuur werkt een condensdroger slecht?",
        answer:
          "Onder ongeveer 15 °C daalt het rendement van een condensdroger duidelijk, en onder 10 °C wordt de droging echt traag. In een koude kelder of een onverwarmde werf zetten we daarom een bouwkachel bij, of kiezen we voor adsorptie.",
      },
      {
        question: "Wanneer kies ik een adsorptiedroger?",
        answer:
          "Wanneer het koud is en u niet wil of kan verwarmen, en wanneer het vocht op een plek zit waar een gewone bouwdroger niet bij raakt, zoals onder een zwevende vloer of in een wandopbouw na waterschade. Via slangen blaast een adsorptiedroger droge lucht precies naar die plek.",
      },
      {
        question: "Is een luchtontvochtiger hetzelfde als een bouwdroger?",
        answer:
          "In de praktijk wel. Een bouwdroger is een krachtige luchtontvochtiger voor bouw- en renovatiewerk. Onze bouwdrogers zijn condensontvochtigers; de adsorptiedroger is een apart toestel voor gericht en koud drogen.",
      },
    ],
    lijst: "Condens- en adsorptiedrogers te huur",
    condensH2: "Zo werkt een condensdroger",
    condensP1: (
      <>
        Een condensdroger, ook condensontvochtiger genoemd, werkt als een kleine koelkast met een
        ventilator. Hij zuigt de vochtige binnenlucht aan en leidt ze langs een koud element. Daar koelt
        de lucht af tot onder haar <b>dauwpunt</b>, en de waterdamp slaat neer als vloeibaar water, net
        zoals een koud glas in de zomer aan de buitenkant nat wordt. Dat water loopt naar een reservoir
        of wordt met een condenspomp weggepompt. De lucht gaat daarna langs het warme deel van het
        koelcircuit en verlaat het toestel droger en iets warmer dan ze binnenkwam.
      </>
    ),
    condensP2: (
      <>
        Dat principe is efficiënt zolang de lucht warm en vochtig is. Warme lucht bevat veel waterdamp,
        dus elke keer dat ze langs het koude element gaat, condenseert er veel. Daarom is de
        condensdroger het standaardtoestel voor <Link to={lp("/nieuwbouw-drogen")}>chape en pleisterwerk</Link> in een
        verwarmd gebouw en voor de meeste <Link to={lp("/waterschade")}>waterschade</Link>.
      </>
    ),
    koudH2: "Waarom een condensdroger in de koude rendement verliest",
    koudP1: (
      <>
        Koude lucht bevat weinig waterdamp. Het verschil tussen de luchttemperatuur en het dauwpunt wordt
        kleiner, en het koude element kan bovendien gaan bevriezen; het toestel moet dan regelmatig
        ontdooien in plaats van drogen. <b>Onder ongeveer 15 °C daalt het rendement van een condensdroger
        duidelijk</b>, en onder 10 °C wordt de droging echt traag.
      </>
    ),
    werkbereik: (b) =>
      ` Onze condensdrogers mogen werken tussen ${b}, maar aan de onderkant van dat bereik halen ze lang niet hun volle capaciteit.`,
    koudP2: (
      <>
        In een koude kelder of een onverwarmde winterwerf is er dus een keuze: verwarm de ruimte met een{" "}
        <Link to={lp(toestelPad("teddh30"))}>elektrische bouwkachel</Link> zodat de condensdroger weer op
        volle kracht werkt, of kies een toestel dat de koude niet erg vindt.
      </>
    ),
    adsH2: "Zo werkt een adsorptiedroger",
    adsP1:
      "Een adsorptiedroger koelt niets af. Binnenin draait een rotor met een vochtopnemend materiaal, vaak silicagel. De waterdamp uit de lucht hecht zich aan dat materiaal, en de lucht die eruit komt is zeer droog. Een tweede, verwarmde luchtstroom haalt het vocht weer uit de rotor en voert het als vochtige lucht af, meestal via een slang naar buiten. Er komt dus geen condenswater in een bak terecht.",
    adsP2: (
      <>
        Omdat dat proces niet op afkoeling steunt, <b>werkt adsorptie ook bij lage temperaturen</b> met
        weinig verlies. Bijkomend voordeel: de droge lucht kan via slangen precies naar een plek gebracht
        worden, zoals onder een zwevende vloer, achter een voorzetwand of in de isolatie. Dat maakt na
        waterschade vaak het verschil tussen drogen en uitbreken. Het nadeel: bij kamertemperatuur haalt
        een condensdroger doorgaans meer liter per kWh, en adsorptie vraagt een afvoer naar buiten.
      </>
    ),
    keuzeH2: "Welk toestel voor welke situatie?",
    situatie: "Situatie",
    beste: "Beste keuze",
    rijen: [
      ["Chape of pleisterwerk in een verwarmde nieuwbouw", "Condensdroger, met ventilator"],
      ["Waterschade in een bewoonde, verwarmde woning", "Condensdroger, met ventilatoren"],
      ["Koude kelder of winterwerf, verwarmen kan", "Condensdroger met bouwkachel"],
      ["Koude ruimte waar u niet wil of kan verwarmen", "Adsorptiedroger"],
      ["Water onder een zwevende vloer, in een wand of in isolatie", "Adsorptiedroger via slangen"],
    ],
    twijfel: (
      <>
        Twijfelt u, bijvoorbeeld bij een kelder die half ingegraven en half verwarmd is? Dan is het
        meestal zinvol om eerst te meten wat de temperatuur en de luchtvochtigheid echt zijn. Onze{" "}
        <Link to={lp("/klantservice")}>klantenservice</Link> denkt mee.
      </>
    ),
    gammaKick: "Uit ons gamma",
    gammaH2: "Deze toestellen kunt u bij ons huren",
    gammaLede: (
      <>
        Dagprijzen exclusief btw, zoals ze op de toestelpagina's en in de boekingsmodule staan. Losse
        toestellen haalt u af in <Link to={lp("/verhuur/afhalen")}>ons magazijn in Aartselaar</Link>; een
        volledig pakket met levering berekent u in de <Link to={lp("/verhuur/calculator")}>droogcalculator</Link>.
      </>
    ),
    adsorptie: "Adsorptie",
    condensatie: "Condensatie",
    tot: (l) => ` · tot ${l} L per dag`,
    ruimtes: (v) => ` · ruimtes tot ${v} m³`,
    perDag: (label) => `per dag, ${label}`,
    bekijk: (kort) => `Bekijk de ${kort}`,
    note: (
      <>
        Meer over de werking van bouwdroging in het algemeen leest u op{" "}
        <Link to={lp("/hoe-drogen-werkt")}>hoe drogen werkt</Link>. Wat die toestellen aan stroom verbruiken,
        rekenen we voor in de gids <Link to={lp("/gids/stroomverbruik-bouwdroger")}>stroomverbruik van een
        bouwdroger</Link>.
      </>
    ),
  }),
  fr: (lp: Lp): CondensTekst => ({
    crumbHome: "Accueil",
    crumbGidsen: "Guides",
    crumb: "Condensation ou adsorption ?",
    kick: "Guide · le bon appareil",
    h1: "Déshumidificateur à condensation ou à adsorption : lequel vous faut-il ?",
    intro:
      "Les deux appareils retirent l'humidité de l'air, mais d'une manière totalement différente. L'un fonctionne donc au mieux dans une maison chaude, l'autre dans une cave froide ou sous un sol. Vous découvrirez ici comment ils fonctionnent, où se situe la limite de température et quel appareil de notre gamme convient à votre situation.",
    heroAlt: "Trois déshumidificateurs de chantier à condensation Vernast côte à côte",
    faq: [
      {
        question: "Quelle est la différence entre un déshumidificateur à condensation et un déshumidificateur à adsorption ?",
        answer:
          "Un déshumidificateur à condensation refroidit l'air sous le point de rosée, de sorte que la vapeur d'eau se condense en eau que vous évacuez. Un déshumidificateur à adsorption capte la vapeur d'eau de l'air au moyen d'un matériau absorbant et rejette l'air humide à l'extérieur par une gaine. Le premier fonctionne au mieux dans une pièce chaude, le second continue à fonctionner dans le froid.",
      },
      {
        question: "À partir de quelle température un déshumidificateur à condensation fonctionne-t-il mal ?",
        answer:
          "Sous 15 °C environ, le rendement d'un déshumidificateur à condensation baisse nettement, et sous 10 °C le séchage devient vraiment lent. Dans une cave froide ou sur un chantier non chauffé, nous ajoutons donc un chauffage de chantier, ou nous optons pour l'adsorption.",
      },
      {
        question: "Quand choisir un déshumidificateur à adsorption ?",
        answer:
          "Quand il fait froid et que vous ne voulez ou ne pouvez pas chauffer, et quand l'humidité se trouve à un endroit qu'un déshumidificateur de chantier ordinaire n'atteint pas, comme sous un plancher flottant ou dans une cloison après des dégâts des eaux. Par des gaines, un déshumidificateur à adsorption envoie l'air sec exactement à cet endroit.",
      },
      {
        question: "Un déshumidificateur d'air est-il la même chose qu'un déshumidificateur de chantier ?",
        answer:
          "En pratique, oui. Un déshumidificateur de chantier est un déshumidificateur d'air puissant destiné aux travaux de construction et de rénovation. Nos déshumidificateurs de chantier sont des déshumidificateurs à condensation ; le déshumidificateur à adsorption est un appareil distinct pour un séchage ciblé et à froid.",
      },
    ],
    lijst: "Déshumidificateurs à condensation et à adsorption à louer",
    condensH2: "Comment fonctionne un déshumidificateur à condensation",
    condensP1: (
      <>
        Un déshumidificateur à condensation fonctionne comme un petit réfrigérateur muni d'un
        ventilateur. Il aspire l'air intérieur humide et le fait passer le long d'un élément froid. L'air
        s'y refroidit sous son <b>point de rosée</b>, et la vapeur d'eau se dépose sous forme d'eau
        liquide, exactement comme un verre froid qui se couvre de buée en été. Cette eau s'écoule dans un
        réservoir ou est évacuée par une pompe à condensats. L'air passe ensuite le long de la partie
        chaude du circuit frigorifique et quitte l'appareil plus sec et un peu plus chaud qu'à l'entrée.
      </>
    ),
    condensP2: (
      <>
        Ce principe est efficace tant que l'air est chaud et humide. L'air chaud contient beaucoup de
        vapeur d'eau : à chaque passage le long de l'élément froid, il en condense beaucoup. C'est
        pourquoi le déshumidificateur à condensation est l'appareil standard pour{" "}
        <Link to={lp("/nieuwbouw-drogen")}>la chape et le plafonnage</Link> dans un bâtiment chauffé et
        pour la plupart des <Link to={lp("/waterschade")}>dégâts des eaux</Link>.
      </>
    ),
    koudH2: "Pourquoi un déshumidificateur à condensation perd du rendement dans le froid",
    koudP1: (
      <>
        L'air froid contient peu de vapeur d'eau. L'écart entre la température de l'air et le point de
        rosée diminue, et l'élément froid peut en outre geler ; l'appareil doit alors dégivrer
        régulièrement au lieu de sécher. <b>Sous 15 °C environ, le rendement d'un déshumidificateur à
        condensation baisse nettement</b>, et sous 10 °C le séchage devient vraiment lent.
      </>
    ),
    werkbereik: (b) =>
      ` Nos déshumidificateurs à condensation peuvent fonctionner dans une plage de ${b}, mais dans le bas de cette plage, ils sont loin d'atteindre leur pleine capacité.`,
    koudP2: (
      <>
        Dans une cave froide ou sur un chantier d'hiver non chauffé, il y a donc un choix à faire :
        chauffer la pièce avec un <Link to={lp(toestelPad("teddh30"))}>chauffage de chantier électrique</Link>{" "}
        pour que le déshumidificateur à condensation retrouve toute sa puissance, ou choisir un appareil
        que le froid ne dérange pas.
      </>
    ),
    adsH2: "Comment fonctionne un déshumidificateur à adsorption",
    adsP1:
      "Un déshumidificateur à adsorption ne refroidit rien. À l'intérieur tourne un rotor garni d'un matériau absorbant, souvent du gel de silice. La vapeur d'eau de l'air se fixe sur ce matériau, et l'air qui en sort est très sec. Un second flux d'air, chauffé, retire l'humidité du rotor et l'évacue sous forme d'air humide, généralement à l'extérieur par une gaine. Aucune eau de condensation ne se retrouve donc dans un bac.",
    adsP2: (
      <>
        Comme ce processus ne repose pas sur le refroidissement, <b>l'adsorption fonctionne aussi à basse
        température</b>, avec peu de pertes. Autre avantage : l'air sec peut être amené par des gaines
        exactement à un endroit précis, comme sous un plancher flottant, derrière un doublage ou dans
        l'isolation. Après des dégâts des eaux, cela fait souvent la différence entre sécher et démolir.
        L'inconvénient : à température ambiante, un déshumidificateur à condensation récupère généralement
        plus de litres par kWh, et l'adsorption demande une évacuation vers l'extérieur.
      </>
    ),
    keuzeH2: "Quel appareil pour quelle situation ?",
    situatie: "Situation",
    beste: "Meilleur choix",
    rijen: [
      ["Chape ou plafonnage dans une nouvelle construction chauffée", "Déshumidificateur à condensation, avec ventilateur"],
      ["Dégâts des eaux dans une maison habitée et chauffée", "Déshumidificateur à condensation, avec ventilateurs"],
      ["Cave froide ou chantier d'hiver, chauffage possible", "Déshumidificateur à condensation avec chauffage de chantier"],
      ["Pièce froide que vous ne voulez ou ne pouvez pas chauffer", "Déshumidificateur à adsorption"],
      ["Eau sous un plancher flottant, dans un mur ou dans l'isolation", "Déshumidificateur à adsorption avec gaines"],
    ],
    twijfel: (
      <>
        Vous hésitez, par exemple pour une cave à moitié enterrée et à moitié chauffée ? Il est alors
        généralement utile de mesurer d'abord la température et l'humidité réelles. Notre{" "}
        <Link to={lp("/klantservice")}>service clientèle</Link> vous conseille.
      </>
    ),
    gammaKick: "Dans notre gamme",
    gammaH2: "Ces appareils sont à louer chez nous",
    gammaLede: (
      <>
        Prix journaliers tels qu'ils figurent sur les pages des appareils et dans le module de
        réservation. Vous enlevez les appareils seuls dans{" "}
        <Link to={lp("/verhuur/afhalen")}>notre entrepôt d'Aartselaar</Link> ; un pack complet avec
        livraison se calcule dans le <Link to={lp("/verhuur/calculator")}>calculateur de séchage</Link>.
      </>
    ),
    adsorptie: "Adsorption",
    condensatie: "Condensation",
    tot: (l) => ` · jusqu'à ${l} l par jour`,
    ruimtes: (v) => ` · pièces jusqu'à ${v} m³`,
    perDag: (label) => `par jour, ${label}`,
    bekijk: (kort) => `Voir le ${kort}`,
    note: (
      <>
        Vous en apprendrez plus sur le fonctionnement du séchage de chantier en général sur la page{" "}
        <Link to={lp("/hoe-drogen-werkt")}>comment fonctionne le séchage</Link>. Ce que ces appareils
        consomment en électricité, nous le calculons dans le guide{" "}
        <Link to={lp("/gids/stroomverbruik-bouwdroger")}>consommation électrique d'un déshumidificateur</Link>.
      </>
    ),
  }),
  en: (lp: Lp): CondensTekst => ({
    crumbHome: "Home",
    crumbGidsen: "Guides",
    crumb: "Condensation or desiccant dehumidifier?",
    kick: "Guide · the right machine",
    h1: "Condensation or desiccant dehumidifier: which one do you need?",
    intro:
      "Both machines remove moisture from the air, but in completely different ways. As a result, one works best in a warm house and the other in a cold cellar or under a floor. Here you can read how they work, where the temperature limit lies and which machine from our range suits your situation.",
    heroAlt: "Three Vernast condensation construction dehumidifiers side by side",
    faq: [
      {
        question: "What is the difference between a condensation dehumidifier and a desiccant dehumidifier?",
        answer:
          "A condensation dehumidifier cools the air below its dew point, so the water vapour condenses into water that you drain away. A desiccant dehumidifier draws the water vapour out of the air with a moisture-absorbing material and blows the moist air outside through a duct. The first works best in a warm room, the second keeps working in the cold.",
      },
      {
        question: "Below what temperature does a condensation dehumidifier work poorly?",
        answer:
          "Below about 15 °C the efficiency of a condensation dehumidifier drops noticeably, and below 10 °C drying becomes really slow. In a cold cellar or an unheated site we therefore add a site heater, or we opt for a desiccant dehumidifier.",
      },
      {
        question: "When do I choose a desiccant dehumidifier?",
        answer:
          "When it is cold and you do not want to or cannot heat, and when the moisture is somewhere an ordinary construction dehumidifier cannot reach, such as under a floating floor or inside a wall build-up after water damage. Through ducts, a desiccant dehumidifier blows dry air exactly to that spot.",
      },
      {
        question: "Is a dehumidifier the same as a construction dehumidifier?",
        answer:
          "In practice, yes. A construction dehumidifier is a powerful dehumidifier for building and renovation work. Our construction dehumidifiers are condensation dehumidifiers; the desiccant dehumidifier is a separate machine for targeted and cold drying.",
      },
    ],
    lijst: "Condensation and desiccant dehumidifiers for hire",
    condensH2: "How a condensation dehumidifier works",
    condensP1: (
      <>
        A condensation dehumidifier works like a small fridge with a fan. It draws in the moist indoor
        air and passes it over a cold element. There the air cools below its <b>dew point</b>, and the
        water vapour settles as liquid water, just as a cold glass gets wet on the outside in summer.
        That water runs into a tank or is pumped away with a condensate pump. The air then passes the
        warm part of the refrigeration circuit and leaves the machine drier and slightly warmer than
        when it came in.
      </>
    ),
    condensP2: (
      <>
        That principle is efficient as long as the air is warm and humid. Warm air holds a lot of water
        vapour, so every time it passes the cold element, a lot condenses. That is why the condensation
        dehumidifier is the standard machine for <Link to={lp("/nieuwbouw-drogen")}>screed and plasterwork</Link> in
        a heated building and for most <Link to={lp("/waterschade")}>water damage</Link>.
      </>
    ),
    koudH2: "Why a condensation dehumidifier loses efficiency in the cold",
    koudP1: (
      <>
        Cold air holds little water vapour. The gap between the air temperature and the dew point gets
        smaller, and the cold element can also start to freeze; the machine then has to defrost
        regularly instead of drying. <b>Below about 15 °C the efficiency of a condensation dehumidifier
        drops noticeably</b>, and below 10 °C drying becomes really slow.
      </>
    ),
    werkbereik: (b) =>
      ` Our condensation dehumidifiers are rated for an operating range of ${b}, but at the lower end of that range they come nowhere near their full capacity.`,
    koudP2: (
      <>
        In a cold cellar or an unheated winter site there is therefore a choice: heat the room with an{" "}
        <Link to={lp(toestelPad("teddh30"))}>electric site heater</Link> so the condensation dehumidifier
        works at full power again, or choose a machine that does not mind the cold.
      </>
    ),
    adsH2: "How a desiccant dehumidifier works",
    adsP1:
      "A desiccant dehumidifier does not cool anything. Inside, a rotor turns with a moisture-absorbing material, often silica gel. The water vapour in the air attaches to that material, and the air that comes out is very dry. A second, heated airflow draws the moisture back out of the rotor and carries it away as moist air, usually outside through a duct. So no condensate ends up in a tank.",
    adsP2: (
      <>
        Because that process does not rely on cooling, <b>a desiccant dehumidifier also works at low
        temperatures</b> with little loss. An added advantage: the dry air can be ducted exactly where it is
        needed, such as under a floating floor, behind a dry-lined wall or into the insulation. After water
        damage, that often makes the difference between drying and ripping out. The drawback: at room
        temperature a condensation dehumidifier usually extracts more litres per kWh, and a desiccant
        dehumidifier needs an outlet to the outside.
      </>
    ),
    keuzeH2: "Which machine for which situation?",
    situatie: "Situation",
    beste: "Best choice",
    rijen: [
      ["Screed or plasterwork in a heated new build", "Condensation dehumidifier, with fan"],
      ["Water damage in an occupied, heated home", "Condensation dehumidifier, with fans"],
      ["Cold cellar or winter site, heating possible", "Condensation dehumidifier with site heater"],
      ["Cold room you do not want to or cannot heat", "Desiccant dehumidifier"],
      ["Water under a floating floor, in a wall or in insulation", "Desiccant dehumidifier with ducts"],
    ],
    twijfel: (
      <>
        Not sure, for example with a cellar that is half below ground and half heated? Then it usually
        makes sense to measure first what the temperature and humidity really are. Our{" "}
        <Link to={lp("/klantservice")}>customer service</Link> will help you think it through.
      </>
    ),
    gammaKick: "From our range",
    gammaH2: "You can hire these machines from us",
    gammaLede: (
      <>
        Daily prices as shown on the machine pages and in the booking module. You collect individual
        machines from <Link to={lp("/verhuur/afhalen")}>our warehouse in Aartselaar</Link>; a complete
        package with delivery is calculated in the <Link to={lp("/verhuur/calculator")}>drying calculator</Link>.
      </>
    ),
    adsorptie: "Desiccant",
    condensatie: "Condensation",
    tot: (l) => ` · up to ${l} L per day`,
    ruimtes: (v) => ` · rooms up to ${v} m³`,
    perDag: (label) => `per day, ${label}`,
    bekijk: (kort) => `View the ${kort}`,
    note: (
      <>
        You can read more about how construction drying works in general on{" "}
        <Link to={lp("/hoe-drogen-werkt")}>how drying works</Link>. What these machines use in electricity
        is worked out in the guide <Link to={lp("/gids/stroomverbruik-bouwdroger")}>power consumption of a
        construction dehumidifier</Link>.
      </>
    ),
  }),
} satisfies Copy<(lp: Lp) => CondensTekst>;

const CondensAdsorptiePage = () => {
  const lp = useLokaalPad();
  const taal = useTaal();
  const toonBedrag = useToonBedrag();
  const t = useCopy(COPY)(lp);
  /*
    In het Nederlands blijft de dagprijs het cataloguscijfer met "excl. btw",
    zoals altijd. In het Frans en Engels staat hij zoals de bezoeker hem
    betaalt, met TVAC/HTVA of incl./excl. VAT erachter.
  */
  const prijs = (excl: number) => {
    if (taal === "nl") return { tekst: euro(excl), label: "excl. btw" };
    const b = toonBedrag(excl);
    return { tekst: b.tekst, label: b.label };
  };
  const naam = (key: string, nl: string) => (taal === "nl" ? nl : productInTaal(key, taal)?.name ?? nl);
  const samenvatting = (key: string, nl: string) => (taal === "nl" ? nl : productInTaal(key, taal)?.sum ?? nl);

  return (
  <GidsShell
    seo={useSeo("gidsCondensAdsorptie")}
    path={PATH}
    crumbs={[
      { name: t.crumbHome, path: "/" },
      { name: t.crumbGidsen, path: "/gids" },
      { name: t.crumb, path: PATH },
    ]}
    kick={t.kick}
    h1={t.h1}
    intro={<p>{t.intro}</p>}
    heroImg={{ src: "/vernast/lineup-dryers.webp", alt: t.heroAlt }}
    articlePublished="2026-09-29"
    faq={t.faq}
    jsonLd={[
      itemListSchema(
        t.lijst,
        GAMMA.map((g) => ({ name: naam(g.key, g.name), path: lp(g.path) })),
      ),
    ]}
  >
    <section className="sw">
      <div className="wrap prose">
        <h2>{t.condensH2}</h2>
        <p>{t.condensP1}</p>
        <p>{t.condensP2}</p>

        <h2 style={{ marginTop: 40 }}>{t.koudH2}</h2>
        <p>
          {t.koudP1}
          {WERKBEREIK ? t.werkbereik(WERKBEREIK) : ""}
        </p>
        <p>{t.koudP2}</p>

        <h2 style={{ marginTop: 40 }}>{t.adsH2}</h2>
        <p>{t.adsP1}</p>
        <p>{t.adsP2}</p>

        <h2 style={{ marginTop: 40 }}>{t.keuzeH2}</h2>
        <div className="tbl">
          <table>
            <thead>
              <tr>
                <th scope="col">{t.situatie}</th>
                <th scope="col">{t.beste}</th>
              </tr>
            </thead>
            <tbody>
              {t.rijen.map(([sit, keuze]) => (
                <tr key={sit}>
                  <td>{sit}</td>
                  <td>{keuze}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>{t.twijfel}</p>
      </div>
    </section>

    <section className="sw2">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">{t.gammaKick}</span>
          <h2 className="sec">{t.gammaH2}</h2>
          <p className="lede">{t.gammaLede}</p>
        </div>
        <div className={GAMMA.length === 4 ? "g4" : "g3"}>
          {GAMMA.map((g) => {
            const p = prijs(g.perDay);
            return (
              <div className="kaart" key={g.key}>
                <h3>{naam(g.key, g.name)}</h3>
                <p>
                  <b>{/adsorptie/i.test(g.type) ? t.adsorptie : t.condensatie}</b>
                  {g.litersPerDay ? t.tot(g.litersPerDay) : ""}
                  {g.volume ? t.ruimtes(g.volume) : ""}
                </p>
                <p className="prijs">
                  {p.tekst} <small>{t.perDag(p.label)}</small>
                </p>
                <p>{samenvatting(g.key, g.summary)}</p>
                <Link className="meer" to={lp(g.path)}>
                  {t.bekijk(g.short)}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="note">{t.note}</div>
      </div>
    </section>
  </GidsShell>
  );
};

export default CondensAdsorptiePage;

import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { Copy } from "@/i18n/useTaal";
import type { LeesGroep } from "@/components/VerderLezen";

/**
 * Teksten van /machines in het Nederlands, het Frans en het Engels.
 *
 * Geen enkel bedrag of cijfer uit de catalogus staat hier als tekst: wat uit
 * PRODUCTS komt (namen, liters, kubieke meters, dagprijzen) geeft de pagina
 * mee als argument. Paden zijn Nederlands; de pagina zet ze om met `lp`.
 */

type Lp = (nlPad: string) => string;

/** « le Boost », mais « l'Ultimate » : élision devant une voyelle. */
const le = (naam: string) => (/^[aeiouyéè]/i.test(naam) ? `l'${naam}` : `le ${naam}`);

/** Wat de FAQ over het gamma moet weten, uit `DROGERS`. */
export interface FaqFeiten {
  kleinste: { short: string; volume: number };
  grootste: { short: string; volume: number };
}

const nl = {
  itemList: "Gamma bouwdrogers, ventilatoren en bouwkachels",
  home: "Home",
  machines: "Machines",

  heroKick: "Ons productgamma",
  heroH1: "Bouwdrogers, ventilatoren en kachels huren.",
  heroP:
    "Acht toestellen, gekozen uit wat er wereldwijd gebouwd wordt en niet uit wat een Belgische leverancier toevallig op voorraad had. De ontvochtiger haalt het vocht uit de lucht, de ventilator brengt die droge lucht bij het natte materiaal, en de kachel zorgt dat de ruimte warm genoeg is om het vocht los te laten. Hieronder staat het hele gamma, elk toestel met zijn dagprijs.",
  heroAlt: "De Vernast vakmannen met hun materiaal",
  heroBadge: "Wereldwijd gezocht",
  heroBadgeSub: "op onze eigen werven getest",

  groepen: {
    bouwdrogers: {
      kop: "Bouwdrogers",
      lede: "Onze eco-lijn verbruikt tot 40 % minder energie dan traditionele industriële drogers, merkbaar op uw stroomfactuur bij een toestel dat weken dag en nacht draait. De Revolution staat erbij als adsorptiedroger: die droogt gericht in een vloeropbouw of een koude kelder.",
    },
    ventilatoren: {
      kop: "Ventilatoren",
      lede: "Luchtbeweging versnelt het drogen merkbaar. Axiaal zet de hele ruimte in beweging, radiaal blaast vlak over een natte vloer. Bij waterschade hoort er altijd één bij.",
    },
    verwarming: {
      kop: "Verwarming",
      lede: "Onder 15 °C droogt een condensdroger traag: koude lucht neemt weinig vocht op. Twee elektrische bouwkachels met thermostaat, allebei op 400 V krachtstroom.",
    },
  } as Record<string, { kop: string; lede: string }>,

  gammaKick: "Het gamma",
  gammaH2: "Alle toestellen die wij verhuren, in één overzicht.",
  gammaLede:
    "Acht toestellen, meer niet. Elk toestel hieronder staat in ons depot, heeft een eigen pagina met zijn volledige specificaties en is vandaag te huur tegen de prijs die erbij staat. Wat wij niet zelf plaatsen en onderhouden, staat er niet bij.",
  gammaNote: (lp: Lp): ReactNode => (
    <>
      <b>Losse toestellen haalt u af in Aartselaar</b>, tegen lagere afhaalprijzen, via de{" "}
      <Link to={lp("/verhuur/afhalen")}>afhaal-checkout</Link>. Leveren, plaatsen en afstellen doen
      wij enkel per pakket: alleen dan kunnen we de <Link to={lp("/drooggarantie")}>drooggarantie</Link>{" "}
      waarmaken. De <Link to={lp("/verhuur/calculator")}>Calculator</Link> stelt dat pakket samen.
    </>
  ),

  kaartBekijken: "Bekijken",
  kaartVanaf: "vanaf",
  kaartPerDag: "/dag",

  onderzoekKick: "Productonderzoek",
  onderzoekH2: "Wij zoeken het beste toestel ter wereld, niet het beste toestel in België.",
  onderzoekLede:
    "De meeste verhuurders kopen wat hun Belgische leverancier die maand in de catalogus heeft staan. Wij doen het omgekeerd. Ons productonderzoek loopt over de hele wereld: we volgen fabrikanten en vakbeurzen in Europa, Azië en Noord-Amerika, laten kandidaat-toestellen overkomen en zetten ze eerst op onze eigen werven. Een toestel staat hier omdat het bij ons het best droogt, niet omdat het hier nu eenmaal te koop was.",
  onderzoek: [
    {
      titel: "De wereldmarkt, niet één catalogus",
      tekst:
        "Wat in België te huur staat is maar een fractie van wat er gebouwd wordt. Wij volgen fabrikanten en vakbeurzen in Europa, Azië en Noord-Amerika en vragen toestellen op die hier door niemand verhuurd worden. Pas als zo'n toestel beter is dan wat we hebben, komt het in aanmerking.",
    },
    {
      titel: "Eerst weken op onze eigen werf",
      tekst:
        "Een kandidaat draait eerst bij ons, naast het toestel dat hij zou vervangen. We kijken naar de liters per kilowattuur, het geluid in een bewoond huis, het gewicht in een trappenhal en of het toestel een nacht zonder toezicht doorkomt. Een folder zegt daar niets over.",
    },
    {
      titel: "Wat het niet haalt, komt er niet in",
      tekst:
        "Haalt een toestel zijn opgegeven cijfers niet, of liggen de onderdelen niet binnen de week hier, dan nemen we het niet op. Liever acht toestellen die wij door en door kennen dan een lijst vol namen die wij zelf nooit op een werf gezien hebben.",
    },
  ],
  onderzoekNote: (
    <>
      <b>Daarom dragen de toestellen een eigen naam.</b> Boost, Performance, Ultimate,
      Highflow: zo noemen wij ze, omdat de keuze van ons komt en niet van een catalogus. Het
      typenummer van de fabrikant staat op elke toestelpagina en in het overzicht hierboven,
      zodat u een offerte van iemand anders ernaast kunt leggen.
    </>
  ) as ReactNode,

  verschilKick: "De verschillen",
  verschilH2: "Wat doet welk toestel?",
  verschilLede:
    "In de meeste situaties werkt u met een combinatie: een ontvochtiger die het vocht afvoert, en een ventilator die de droge lucht bij de muren en de vloer brengt. Wat elk soort toestel doet, en wanneer u het kiest.",
  bekijkDe: (naam: string) => `Bekijk de ${naam}`,
  keuzes: {
    ttk350: {
      titel: "Condensontvochtiger",
      wanneer:
        "De standaard voor bouwvocht, chape, pleisterwerk en de meeste waterschade in een verwarmde of gematigde ruimte. Hij koelt de lucht af tot het vocht condenseert en voert het water af via een slang of reservoir. Onder ongeveer 15 °C daalt het rendement sterk.",
    },
    revolution: {
      titel: "Adsorptiedroger",
      wanneer:
        "Voor koude ruimtes en om gericht te drogen: hij blaast droge lucht via slangen in een vloeropbouw, een wand of isolatie. Kies hem wanneer het vocht zit waar een gewone droger niet bij komt, bijvoorbeeld onder een zwevende chape na waterschade.",
    },
    ttv4500: {
      titel: "Axiaalventilator",
      wanneer:
        "Zet de hele ruimte in beweging. Tegen een natte muur of vloer blijft anders een laagje verzadigde lucht hangen en stopt de droging. Voert zelf geen vocht af: voor bouwvocht zet u hem samen met een ontvochtiger in.",
    },
    radiaal2250: {
      titel: "Radiaalventilator",
      wanneer:
        "Blaast een smalle straal vlak over de vloer, ook onder kasten en tegen plinten. De betere keuze wanneer het vocht in de chape of de vloer zit; bij waterschade vaak samen met een axiaalventilator.",
    },
    teddh30: {
      titel: "Elektrische bouwkachel",
      wanneer:
        "Voor kelders, winterwerven en onverwarmde nieuwbouw. Warmte maakt het vocht los en laat de condensdroger op volle capaciteit werken, maar voert zelf niets af. De losse Heatpower en Heatboost vragen een aansluiting op 400 V krachtstroom; de kachel in een droogpakket draait op 230 V.",
    },
  } as Record<string, { titel: string; wanneer: string }>,

  capKick: "Liter of kubieke meter",
  capH2: "Wat zegt de capaciteit van een droger?",
  capLede1: (meetconditie: string | null): ReactNode => (
    <>
      Bij een ontvochtiger staan twee getallen. De <b>vochtafvoer in liter per dag</b> is
      hoeveel water het toestel maximaal uit de lucht haalt
      {meetconditie ? `, gemeten bij ${meetconditie}` : " onder labo-omstandigheden"}. In
      een koelere of drogere ruimte haalt geen enkele droger dat cijfer: het is een maat om
      toestellen te vergelijken, geen belofte voor uw werf.
    </>
  ),
  capLede2: (
    <>
      Het <b>bereik in kubieke meter</b> is het volume waarvoor het toestel geschikt is.
      Reken uw volume uit als vloeroppervlakte maal plafondhoogte: 100 m² bij 2,5 m hoog is
      250 m³. Zit er veel nat materiaal in die ruimte, zoals een verse chape of recente
      waterschade, kies dan eerder het grotere toestel of een tweede droger.
    </>
  ) as ReactNode,
  capCaption: "Vergelijking van de ontvochtigers: capaciteit, bereik, verbruik en dagprijs",
  capTh: ["Ontvochtiger", "Liter per dag", "Bereik", "Verbruik", "Per dag"],
  tot: (m3: number) => `tot ${m3} m³`,
  nvt: "n.v.t.",
  capNote: (lp: Lp, btw: string): ReactNode => (
    <>
      Prijzen {btw}. Meer over de prijsopbouw op{" "}
      <Link to={lp("/prijzen")}>de prijzenpagina</Link>, en wat deze toestellen per dag aan stroom
      kosten in de gids over het{" "}
      <Link to={lp("/gids/stroomverbruik-bouwdroger")}>stroomverbruik van een bouwdroger</Link>.
    </>
  ),
  combiKop: "Welke combinatie hoort erbij?",
  combiTekst:
    " Een ontvochtiger staat zelden alleen. Dit zijn de toestellen die we bij elke droger als aanvulling voorstellen: een ventilator om de droge lucht bij de muren en de vloer te krijgen, en in een koude ruimte een kachel.",
  met: "met",
  en: " en ",

  toebKick: "Toebehoren",
  toebH2: "Wat er standaard bij zit, en wat u kunt bijvragen.",
  toebehoren: [
    { name: "Verlengsnoer 10 m", desc: "Zit gratis bij elke bouwdroger. Vraag er gerust een tweede bij als het stopcontact ver zit." },
    { name: "Opvangbak", desc: "Ook gratis bij elke droger. Liever niets legen? Dan neemt u een condenspomp." },
    { name: "Airconditioner", desc: "Beschikbaar op aanvraag, bijvoorbeeld voor een serverruimte of een werf in de zomer." },
  ],
  gratis: "Gratis",
  pompKick: "Het meest gevraagde toebehoren",
  pompH3: (prijs: string) => `Condenspomp, ${prijs} per bouwdroger per dag`,
  pompP:
    "Voert het condenswater continu af naar een lavabo, douche of vloerput, tot 3,90 m hoger dan het toestel staat. Zo hoeft u geen opvangbak te legen en draait de droger dag en nacht door.",
  pompBtn: "Bekijk de condenspomp",

  faqTitel: "Veelgestelde vragen over het materiaal.",
  faqs: ({ kleinste, grootste }: FaqFeiten) => [
    {
      q: "Hoeveel liter per dag heb ik nodig?",
      a: `Reken eerst het volume van de ruimte uit: vloeroppervlakte maal plafondhoogte. Onze kleinste droger, de ${kleinste.short}, is bedoeld voor ruimtes tot ${kleinste.volume} m³; de ${grootste.short} gaat tot ${grootste.volume} m³. Veel nat materiaal, zoals een dikke chape of verse waterschade, vraagt meer capaciteit dan het volume alleen doet vermoeden. Twijfelt u, neem dan het grotere toestel of laat de Calculator rekenen.`,
    },
    {
      q: "Wat is het verschil tussen een condensdroger en een adsorptiedroger?",
      a: "Een condensdroger koelt de lucht af tot het vocht condenseert en werkt het best boven ongeveer 15 °C. Een adsorptiedroger haalt het vocht uit de lucht met een vochtopnemend materiaal, verliest in de koude weinig capaciteit en kan droge lucht via slangen gericht in een vloer of wand blazen.",
    },
    {
      q: "Heb ik naast een bouwdroger een ventilator nodig?",
      a: "Bij nieuwbouw is het sterk aangeraden, bij waterschade beschouwen wij het als noodzakelijk. Een ontvochtiger droogt de lucht; een ventilator zorgt dat die droge lucht ook langs de natte muren en vloeren strijkt.",
    },
  ],

  slotKick: "Twijfelt u nog",
  slotH3: "U hoeft niet zelf te kiezen welk toestel het wordt.",
  slotP:
    "Geef ons uw oppervlakte en uw situatie, dan rekent de Calculator het volledige pakket uit: droger, ventilator en kachel in de juiste verhouding. Of u belt ons en we doen het aan de telefoon.",
  slotBtn: "Bereken uw droogpakket",
  slotAlt: "Vernast technicus met de kabels van een bouwdroger",

  verderTitel: "Verder lezen over het materiaal",
  verderLezen: [
    {
      kop: "Zo zetten we de toestellen in",
      links: [
        { to: "/realisaties/nieuwbouw-drogen-putte", label: "Bouwvocht weggedroogd in een nieuwbouw in Putte" },
        { to: "/realisaties/waterschade-drogen-bedrijfsgebouw", label: "Waterschade in een bedrijfsgebouw gedroogd" },
        { to: "/realisaties/kelder-drogen-brugge", label: "Vochtige kelder in Brugge weer droog" },
      ],
    },
    {
      kop: "Kiezen en berekenen",
      links: [
        { to: "/verhuur/calculator", label: "Bereken welk pakket bij uw ruimte past" },
        { to: "/gids/condensdroger-of-adsorptiedroger", label: "Gids: condensdroger of adsorptiedroger?" },
        { to: "/gids/stroomverbruik-bouwdroger", label: "Gids: wat verbruikt een bouwdroger aan stroom?" },
        { to: "/prijzen", label: "Huurprijzen per dag en per week" },
        { to: "/nieuwbouw-drogen", label: "Chape en pleisterwerk drogen" },
        { to: "/waterschade", label: "Waterschade drogen" },
      ],
    },
    {
      kop: "Levering in uw regio",
      links: [
        { to: "/bouwdroger-huren-vlaams-brabant", label: "Bouwdroger huren in Vlaams-Brabant" },
        { to: "/bouwdroger-huren-antwerpen", label: "Bouwdroger huren in de provincie Antwerpen" },
      ],
    },
  ] as LeesGroep[],

  contactKicker: "Welk toestel heeft u nodig?",
  contactTitel: "Niet zeker welk toestel bij uw werf past?",
  contactLede:
    "Beschrijf kort de ruimte en wat er moet drogen. Een droogspecialist zegt u binnen één werkdag welk toestel of welke combinatie het wordt.",
  contactOnderwerpen: [
    "Advies over het juiste toestel",
    "Meerdere toestellen voor een grote werf",
    "Adsorptiedroger of condensdroger?",
    "Prijs en beschikbaarheid",
    "Iets anders",
  ],
  contactPlaceholder:
    "Bv. kelder van 60 m² met 2,2 m plafondhoogte, onverwarmd, vochtige muren na een lek.",
};

const fr: typeof nl = {
  itemList: "Gamme de déshumidificateurs, ventilateurs et chauffages de chantier",
  home: "Accueil",
  machines: "Machines",

  heroKick: "Notre gamme",
  heroH1: "Louer des déshumidificateurs, ventilateurs et chauffages de chantier.",
  heroP:
    "Huit appareils, choisis parmi ce qui se construit dans le monde entier et non parmi ce qu'un fournisseur belge avait par hasard en stock. Le déshumidificateur retire l'humidité de l'air, le ventilateur amène cet air sec jusqu'au matériau humide, et le chauffage veille à ce que la pièce soit assez chaude pour libérer l'humidité. Vous trouverez ci-dessous toute la gamme, chaque appareil avec son prix journalier.",
  heroAlt: "Les artisans Vernast avec leur matériel",
  heroBadge: "Recherchés dans le monde entier",
  heroBadgeSub: "testés sur nos propres chantiers",

  groepen: {
    bouwdrogers: {
      kop: "Déshumidificateurs de chantier",
      lede: "Notre gamme éco consomme jusqu'à 40 % d'énergie en moins que les déshumidificateurs industriels traditionnels, ce qui se voit sur votre facture d'électricité pour un appareil qui tourne jour et nuit pendant des semaines. Le Revolution s'y ajoute comme déshumidificateur à adsorption : il sèche de manière ciblée dans une structure de sol ou une cave froide.",
    },
    ventilatoren: {
      kop: "Ventilateurs",
      lede: "Le mouvement de l'air accélère nettement le séchage. L'axial met toute la pièce en mouvement, le radial souffle à ras d'un sol humide. En cas de dégâts des eaux, il en faut toujours un.",
    },
    verwarming: {
      kop: "Chauffage",
      lede: "Sous 15 °C, un déshumidificateur à condensation sèche lentement : l'air froid absorbe peu d'humidité. Deux chauffages de chantier électriques avec thermostat, tous deux sur courant triphasé 400 V.",
    },
  },

  gammaKick: "La gamme",
  gammaH2: "Tous les appareils que nous louons, en un coup d'œil.",
  gammaLede:
    "Huit appareils, pas plus. Chaque appareil ci-dessous se trouve dans notre dépôt, a sa propre page avec ses spécifications complètes et peut être loué aujourd'hui au prix indiqué. Ce que nous ne plaçons et n'entretenons pas nous-mêmes n'y figure pas.",
  gammaNote: (lp: Lp): ReactNode => (
    <>
      <b>Les appareils seuls s'enlèvent à Aartselaar</b>, à des prix d'enlèvement plus bas, via la{" "}
      <Link to={lp("/verhuur/afhalen")}>réservation pour enlèvement</Link>. Livrer, placer et régler,
      nous le faisons uniquement par pack : ce n'est qu'ainsi que nous pouvons tenir la{" "}
      <Link to={lp("/drooggarantie")}>garantie de séchage</Link>. Le{" "}
      <Link to={lp("/verhuur/calculator")}>calculateur</Link> compose ce pack.
    </>
  ),

  kaartBekijken: "Voir",
  kaartVanaf: "dès",
  kaartPerDag: "/jour",

  onderzoekKick: "Recherche produit",
  onderzoekH2: "Nous cherchons le meilleur appareil au monde, pas le meilleur appareil de Belgique.",
  onderzoekLede:
    "La plupart des loueurs achètent ce que leur fournisseur belge a dans son catalogue ce mois-là. Nous faisons l'inverse. Notre recherche produit couvre le monde entier : nous suivons les fabricants et les salons professionnels en Europe, en Asie et en Amérique du Nord, faisons venir des appareils candidats et les testons d'abord sur nos propres chantiers. Un appareil figure ici parce qu'il sèche le mieux chez nous, pas parce qu'il était en vente ici.",
  onderzoek: [
    {
      titel: "Le marché mondial, pas un seul catalogue",
      tekst:
        "Ce qui se loue en Belgique n'est qu'une fraction de ce qui se construit. Nous suivons les fabricants et les salons professionnels en Europe, en Asie et en Amérique du Nord et demandons des appareils que personne ne loue ici. Ce n'est que si un tel appareil est meilleur que ce que nous avons qu'il entre en ligne de compte.",
    },
    {
      titel: "D'abord des semaines sur notre propre chantier",
      tekst:
        "Un candidat tourne d'abord chez nous, à côté de l'appareil qu'il remplacerait. Nous regardons les litres par kilowattheure, le bruit dans une maison habitée, le poids dans une cage d'escalier et si l'appareil tient une nuit sans surveillance. Une brochure n'en dit rien.",
    },
    {
      titel: "Ce qui ne passe pas le test n'entre pas",
      tekst:
        "Si un appareil n'atteint pas les chiffres annoncés, ou si ses pièces ne sont pas disponibles ici dans la semaine, nous ne le reprenons pas. Mieux vaut huit appareils que nous connaissons sur le bout des doigts qu'une liste de noms que nous n'avons jamais vus sur un chantier.",
    },
  ],
  onderzoekNote: (
    <>
      <b>C'est pourquoi les appareils portent leur propre nom.</b> Boost, Performance, Ultimate,
      Highflow : c'est ainsi que nous les appelons, parce que le choix vient de nous et non d'un
      catalogue. Le numéro de type du fabricant figure sur chaque page d'appareil et dans
      l'aperçu ci-dessus, pour que vous puissiez comparer avec le devis d'un autre.
    </>
  ),

  verschilKick: "Les différences",
  verschilH2: "Que fait chaque appareil ?",
  verschilLede:
    "Dans la plupart des situations, vous travaillez avec une combinaison : un déshumidificateur qui évacue l'humidité, et un ventilateur qui amène l'air sec jusqu'aux murs et au sol. Ce que fait chaque type d'appareil, et quand le choisir.",
  bekijkDe: (naam: string) => `Voir ${le(naam)}`,
  keuzes: {
    ttk350: {
      titel: "Déshumidificateur à condensation",
      wanneer:
        "La référence pour l'humidité de construction, la chape, le plafonnage et la plupart des dégâts des eaux dans un espace chauffé ou tempéré. Il refroidit l'air jusqu'à ce que l'humidité se condense et évacue l'eau par un tuyau ou un réservoir. Sous environ 15 °C, son rendement chute fortement.",
    },
    revolution: {
      titel: "Déshumidificateur à adsorption",
      wanneer:
        "Pour les espaces froids et le séchage ciblé : il souffle de l'air sec via des gaines dans une structure de sol, une cloison ou une isolation. Choisissez-le quand l'humidité se trouve là où un déshumidificateur ordinaire n'arrive pas, par exemple sous une chape flottante après des dégâts des eaux.",
    },
    ttv4500: {
      titel: "Ventilateur axial",
      wanneer:
        "Met toute la pièce en mouvement. Sinon, une fine couche d'air saturé reste contre un mur ou un sol humide et le séchage s'arrête. N'évacue lui-même aucune humidité : pour l'humidité de construction, utilisez-le avec un déshumidificateur.",
    },
    radiaal2250: {
      titel: "Ventilateur radial",
      wanneer:
        "Souffle un jet étroit à ras du sol, même sous les meubles et contre les plinthes. Le meilleur choix quand l'humidité se trouve dans la chape ou le sol ; en cas de dégâts des eaux, souvent avec un ventilateur axial.",
    },
    teddh30: {
      titel: "Chauffage de chantier électrique",
      wanneer:
        "Pour les caves, les chantiers d'hiver et les nouvelles constructions non chauffées. La chaleur libère l'humidité et permet au déshumidificateur à condensation de travailler à pleine capacité, mais elle n'évacue rien elle-même. Le Heatpower et le Heatboost loués seuls demandent un raccordement en courant triphasé 400 V ; le chauffage d'un pack de séchage fonctionne sur 230 V.",
    },
  },

  capKick: "Litres ou mètres cubes",
  capH2: "Que dit la capacité d'un déshumidificateur ?",
  capLede1: (meetconditie: string | null): ReactNode => (
    <>
      Un déshumidificateur affiche deux chiffres. L'<b>évacuation d'humidité en litres par jour</b>{" "}
      est la quantité d'eau maximale que l'appareil retire de l'air
      {meetconditie ? `, mesurée à ${meetconditie}` : " en conditions de laboratoire"}. Dans une
      pièce plus fraîche ou plus sèche, aucun déshumidificateur n'atteint ce chiffre : c'est une
      mesure pour comparer les appareils, pas une promesse pour votre chantier.
    </>
  ),
  capLede2: (
    <>
      La <b>portée en mètres cubes</b> est le volume pour lequel l'appareil convient. Calculez
      votre volume comme surface au sol fois hauteur sous plafond : 100 m² sur 2,5 m de haut font
      250 m³. S'il y a beaucoup de matériau humide dans la pièce, comme une chape fraîche ou des
      dégâts des eaux récents, choisissez plutôt l'appareil plus grand ou un deuxième
      déshumidificateur.
    </>
  ),
  capCaption: "Comparaison des déshumidificateurs : capacité, portée, consommation et prix journalier",
  capTh: ["Déshumidificateur", "Litres par jour", "Portée", "Consommation", "Par jour"],
  tot: (m3: number) => `jusqu'à ${m3} m³`,
  nvt: "s.o.",
  capNote: (lp: Lp, btw: string): ReactNode => (
    <>
      Prix {btw}. Plus de détails sur la composition du prix sur{" "}
      <Link to={lp("/prijzen")}>la page des prix</Link>, et ce que ces appareils coûtent par jour
      en électricité dans le guide sur la{" "}
      <Link to={lp("/gids/stroomverbruik-bouwdroger")}>consommation électrique d'un déshumidificateur</Link>.
    </>
  ),
  combiKop: "Quelle combinaison l'accompagne ?",
  combiTekst:
    " Un déshumidificateur est rarement seul. Voici les appareils que nous proposons en complément de chaque déshumidificateur : un ventilateur pour amener l'air sec jusqu'aux murs et au sol, et un chauffage dans un espace froid.",
  met: "avec",
  en: " et ",

  toebKick: "Accessoires",
  toebH2: "Ce qui est fourni d'office, et ce que vous pouvez demander en plus.",
  toebehoren: [
    { name: "Rallonge de 10 m", desc: "Fournie gratuitement avec chaque déshumidificateur. N'hésitez pas à en demander une deuxième si la prise est éloignée." },
    { name: "Bac de récupération", desc: "Également gratuit avec chaque déshumidificateur. Vous préférez ne rien vider ? Prenez alors une pompe à condensats." },
    { name: "Climatiseur", desc: "Disponible sur demande, par exemple pour une salle de serveurs ou un chantier en été." },
  ],
  gratis: "Gratuit",
  pompKick: "L'accessoire le plus demandé",
  pompH3: (prijs: string) => `Pompe à condensats, ${prijs} par déshumidificateur et par jour`,
  pompP:
    "Évacue l'eau de condensation en continu vers un lavabo, une douche ou un siphon de sol, jusqu'à 3,90 m plus haut que l'appareil. Vous n'avez ainsi aucun bac à vider et le déshumidificateur tourne jour et nuit.",
  pompBtn: "Voir la pompe à condensats",

  faqTitel: "Questions fréquentes sur le matériel.",
  faqs: ({ kleinste, grootste }: FaqFeiten) => [
    {
      q: "De combien de litres par jour ai-je besoin ?",
      a: `Calculez d'abord le volume de la pièce : surface au sol fois hauteur sous plafond. Notre plus petit déshumidificateur, ${le(kleinste.short)}, est prévu pour des espaces jusqu'à ${kleinste.volume} m³ ; ${le(grootste.short)} va jusqu'à ${grootste.volume} m³. Beaucoup de matériau humide, comme une chape épaisse ou des dégâts des eaux récents, demande plus de capacité que le volume seul ne le laisse penser. En cas de doute, prenez l'appareil plus grand ou laissez le calculateur faire le calcul.`,
    },
    {
      q: "Quelle est la différence entre un déshumidificateur à condensation et à adsorption ?",
      a: "Un déshumidificateur à condensation refroidit l'air jusqu'à ce que l'humidité se condense et fonctionne le mieux au-dessus d'environ 15 °C. Un déshumidificateur à adsorption retire l'humidité de l'air avec un matériau absorbant, perd peu de capacité dans le froid et peut souffler de l'air sec de manière ciblée via des gaines dans un sol ou une cloison.",
    },
    {
      q: "Ai-je besoin d'un ventilateur en plus d'un déshumidificateur ?",
      a: "En nouvelle construction, c'est vivement conseillé ; en cas de dégâts des eaux, nous le considérons comme nécessaire. Un déshumidificateur sèche l'air ; un ventilateur veille à ce que cet air sec passe aussi le long des murs et des sols humides.",
    },
  ],

  slotKick: "Vous hésitez encore",
  slotH3: "Vous ne devez pas choisir vous-même l'appareil.",
  slotP:
    "Donnez-nous votre surface et votre situation, et le calculateur établit le pack complet : déshumidificateur, ventilateur et chauffage dans les bonnes proportions. Ou appelez-nous et nous le faisons par téléphone.",
  slotBtn: "Calculez votre pack de séchage",
  slotAlt: "Technicien Vernast avec les câbles d'un déshumidificateur",

  verderTitel: "En savoir plus sur le matériel",
  verderLezen: [
    {
      kop: "Nos appareils sur le terrain",
      links: [
        { to: "/realisaties/nieuwbouw-drogen-putte", label: "Humidité de construction séchée dans une maison neuve à Putte" },
        { to: "/realisaties/waterschade-drogen-bedrijfsgebouw", label: "Dégâts des eaux séchés dans un bâtiment d'entreprise" },
        { to: "/realisaties/kelder-drogen-brugge", label: "Une cave humide à Bruges de nouveau sèche" },
      ],
    },
    {
      kop: "Choisir et calculer",
      links: [
        { to: "/verhuur/calculator", label: "Calculez le pack adapté à votre espace" },
        { to: "/gids/condensdroger-of-adsorptiedroger", label: "Guide : condensation ou adsorption ?" },
        { to: "/gids/stroomverbruik-bouwdroger", label: "Guide : que consomme un déshumidificateur en électricité ?" },
        { to: "/prijzen", label: "Prix de location par jour et par semaine" },
        { to: "/nieuwbouw-drogen", label: "Sécher la chape et le plafonnage" },
        { to: "/waterschade", label: "Sécher après des dégâts des eaux" },
      ],
    },
    {
      kop: "Livraison dans votre région",
      links: [
        { to: "/bouwdroger-huren-vlaams-brabant", label: "Louer un déshumidificateur dans le Brabant flamand" },
        { to: "/bouwdroger-huren-antwerpen", label: "Louer un déshumidificateur dans la province d'Anvers" },
      ],
    },
  ],

  contactKicker: "De quel appareil avez-vous besoin ?",
  contactTitel: "Vous ne savez pas quel appareil convient à votre chantier ?",
  contactLede:
    "Décrivez brièvement la pièce et ce qui doit sécher. Un spécialiste du séchage vous dit dans un délai d'un jour ouvrable quel appareil ou quelle combinaison il vous faut.",
  contactOnderwerpen: [
    "Conseil sur le bon appareil",
    "Plusieurs appareils pour un grand chantier",
    "Adsorption ou condensation ?",
    "Prix et disponibilité",
    "Autre chose",
  ],
  contactPlaceholder:
    "P. ex. cave de 60 m² avec 2,2 m de hauteur sous plafond, non chauffée, murs humides après une fuite.",
};

const en: typeof nl = {
  itemList: "Range of construction dehumidifiers, fans and site heaters",
  home: "Home",
  machines: "Machines",

  heroKick: "Our range",
  heroH1: "Hire construction dehumidifiers, fans and heaters.",
  heroP:
    "Eight machines, chosen from what is built around the world and not from whatever a Belgian supplier happened to have in stock. The dehumidifier takes the moisture out of the air, the fan carries that dry air to the wet material, and the heater keeps the room warm enough for the moisture to come out. Below is the whole range, each machine with its daily rate.",
  heroAlt: "The Vernast craftsmen with their equipment",
  heroBadge: "Sourced worldwide",
  heroBadgeSub: "tested on our own sites",

  groepen: {
    bouwdrogers: {
      kop: "Construction dehumidifiers",
      lede: "Our eco line uses up to 40 % less energy than traditional industrial dehumidifiers, which shows on your electricity bill for a machine that runs day and night for weeks. The Revolution sits alongside them as a desiccant dehumidifier: it dries in a targeted way inside a floor build-up or a cold cellar.",
    },
    ventilatoren: {
      kop: "Fans",
      lede: "Air movement speeds up drying noticeably. An axial fan sets the whole room in motion, a radial fan blows flat across a wet floor. With water damage, there should always be one.",
    },
    verwarming: {
      kop: "Heating",
      lede: "Below 15 °C a condensation dehumidifier dries slowly: cold air takes up little moisture. Two electric site heaters with a thermostat, both on 400 V three-phase power.",
    },
  },

  gammaKick: "The range",
  gammaH2: "Every machine we hire out, at a glance.",
  gammaLede:
    "Eight machines, no more. Every machine below is in our depot, has its own page with its full specifications and can be hired today at the price shown. What we do not install and maintain ourselves is not listed.",
  gammaNote: (lp: Lp): ReactNode => (
    <>
      <b>Individual machines are collected from Aartselaar</b>, at lower collection prices, via the{" "}
      <Link to={lp("/verhuur/afhalen")}>collection checkout</Link>. We only deliver, install and
      set up as part of a package: that is the only way we can honour the{" "}
      <Link to={lp("/drooggarantie")}>drying guarantee</Link>. The{" "}
      <Link to={lp("/verhuur/calculator")}>Calculator</Link> puts that package together.
    </>
  ),

  kaartBekijken: "View",
  kaartVanaf: "from",
  kaartPerDag: "/day",

  onderzoekKick: "Product research",
  onderzoekH2: "We look for the best machine in the world, not the best machine in Belgium.",
  onderzoekLede:
    "Most hire companies buy whatever their Belgian supplier has in the catalogue that month. We do it the other way round. Our product research covers the whole world: we follow manufacturers and trade fairs in Europe, Asia and North America, bring in candidate machines and put them on our own sites first. A machine is here because it dries best for us, not because it happened to be for sale here.",
  onderzoek: [
    {
      titel: "The world market, not one catalogue",
      tekst:
        "What is available for hire in Belgium is only a fraction of what gets built. We follow manufacturers and trade fairs in Europe, Asia and North America and request machines that nobody hires out here. Only if such a machine is better than what we have does it come into consideration.",
    },
    {
      titel: "Weeks on our own site first",
      tekst:
        "A candidate first runs with us, next to the machine it would replace. We look at the litres per kilowatt-hour, the noise in an occupied home, the weight on a staircase and whether the machine gets through a night unattended. A brochure tells you nothing about that.",
    },
    {
      titel: "If it doesn't make the grade, it doesn't get in",
      tekst:
        "If a machine does not reach its stated figures, or its parts cannot be here within the week, we do not take it on. Better eight machines we know inside out than a list full of names we have never seen on a site ourselves.",
    },
  ],
  onderzoekNote: (
    <>
      <b>That is why the machines carry their own names.</b> Boost, Performance, Ultimate,
      Highflow: that is what we call them, because the choice comes from us and not from a
      catalogue. The manufacturer's model number is on every machine page and in the overview
      above, so you can compare it with someone else's quote.
    </>
  ),

  verschilKick: "The differences",
  verschilH2: "What does each machine do?",
  verschilLede:
    "In most situations you work with a combination: a dehumidifier that removes the moisture, and a fan that carries the dry air to the walls and the floor. What each type of machine does, and when to choose it.",
  bekijkDe: (naam: string) => `View the ${naam}`,
  keuzes: {
    ttk350: {
      titel: "Condensation dehumidifier",
      wanneer:
        "The standard for construction moisture, screed, plaster and most water damage in a heated or temperate space. It cools the air until the moisture condenses and drains the water through a hose or tank. Below roughly 15 °C its efficiency drops sharply.",
    },
    revolution: {
      titel: "Desiccant dehumidifier",
      wanneer:
        "For cold spaces and targeted drying: it blows dry air through hoses into a floor build-up, a wall or insulation. Choose it when the moisture sits where an ordinary dehumidifier cannot reach, for example under a floating screed after water damage.",
    },
    ttv4500: {
      titel: "Axial fan",
      wanneer:
        "Sets the whole room in motion. Otherwise a thin layer of saturated air hangs against a wet wall or floor and the drying stops. Does not remove any moisture itself: for construction moisture, use it together with a dehumidifier.",
    },
    radiaal2250: {
      titel: "Radial fan",
      wanneer:
        "Blows a narrow jet flat across the floor, even under cupboards and against skirting boards. The better choice when the moisture is in the screed or the floor; with water damage, often together with an axial fan.",
    },
    teddh30: {
      titel: "Electric site heater",
      wanneer:
        "For cellars, winter sites and unheated new builds. Heat releases the moisture and lets the condensation dehumidifier work at full capacity, but removes nothing itself. The Heatpower and Heatboost hired on their own need a 400 V three-phase connection; the heater in a drying package runs on 230 V.",
    },
  },

  capKick: "Litres or cubic metres",
  capH2: "What does a dehumidifier's capacity tell you?",
  capLede1: (meetconditie: string | null): ReactNode => (
    <>
      A dehumidifier lists two figures. The <b>moisture extraction in litres per day</b> is
      the maximum amount of water the machine takes out of the air
      {meetconditie ? `, measured at ${meetconditie}` : " under laboratory conditions"}. In a
      cooler or drier room no dehumidifier reaches that figure: it is a way to compare
      machines, not a promise for your site.
    </>
  ),
  capLede2: (
    <>
      The <b>range in cubic metres</b> is the volume the machine is suited to. Work out your
      volume as floor area times ceiling height: 100 m² at 2.5 m high is 250 m³. If there is a
      lot of wet material in the room, such as fresh screed or recent water damage, go for the
      larger machine or a second dehumidifier.
    </>
  ),
  capCaption: "Comparison of the dehumidifiers: capacity, range, power consumption and daily rate",
  capTh: ["Dehumidifier", "Litres per day", "Range", "Power use", "Per day"],
  tot: (m3: number) => `up to ${m3} m³`,
  nvt: "n/a",
  capNote: (lp: Lp, btw: string): ReactNode => (
    <>
      Prices {btw}. More on how the prices are built up on{" "}
      <Link to={lp("/prijzen")}>the prices page</Link>, and what these machines cost per day in
      electricity in the guide to the{" "}
      <Link to={lp("/gids/stroomverbruik-bouwdroger")}>power consumption of a construction dehumidifier</Link>.
    </>
  ),
  combiKop: "Which combination goes with it?",
  combiTekst:
    " A dehumidifier rarely works alone. These are the machines we suggest alongside each dehumidifier: a fan to get the dry air to the walls and the floor, and a heater in a cold space.",
  met: "with",
  en: " and ",

  toebKick: "Accessories",
  toebH2: "What comes as standard, and what you can add.",
  toebehoren: [
    { name: "10 m extension lead", desc: "Comes free with every construction dehumidifier. Feel free to ask for a second one if the socket is far away." },
    { name: "Collection tray", desc: "Also free with every dehumidifier. Rather not empty anything? Then take a condensate pump." },
    { name: "Air conditioner", desc: "Available on request, for example for a server room or a site in summer." },
  ],
  gratis: "Free",
  pompKick: "The most requested accessory",
  pompH3: (prijs: string) => `Condensate pump, ${prijs} per dehumidifier per day`,
  pompP:
    "Drains the condensate continuously to a washbasin, shower or floor drain, up to 3.90 m higher than the machine. That way you never have to empty a tray and the dehumidifier keeps running day and night.",
  pompBtn: "View the condensate pump",

  faqTitel: "Frequently asked questions about the equipment.",
  faqs: ({ kleinste, grootste }: FaqFeiten) => [
    {
      q: "How many litres per day do I need?",
      a: `First work out the volume of the room: floor area times ceiling height. Our smallest dehumidifier, the ${kleinste.short}, is intended for spaces up to ${kleinste.volume} m³; the ${grootste.short} goes up to ${grootste.volume} m³. A lot of wet material, such as a thick screed or fresh water damage, needs more capacity than the volume alone would suggest. If in doubt, take the larger machine or let the Calculator do the sums.`,
    },
    {
      q: "What is the difference between a condensation dehumidifier and a desiccant dehumidifier?",
      a: "A condensation dehumidifier cools the air until the moisture condenses and works best above roughly 15 °C. A desiccant dehumidifier takes the moisture out of the air with a moisture-absorbing material, loses little capacity in the cold and can blow dry air through hoses into a floor or wall in a targeted way.",
    },
    {
      q: "Do I need a fan as well as a construction dehumidifier?",
      a: "In a new build it is strongly recommended; with water damage we consider it essential. A dehumidifier dries the air; a fan makes sure that dry air also passes along the wet walls and floors.",
    },
  ],

  slotKick: "Still unsure",
  slotH3: "You don't have to choose the machine yourself.",
  slotP:
    "Give us your floor area and your situation, and the Calculator works out the complete package: dehumidifier, fan and heater in the right proportions. Or call us and we will do it over the phone.",
  slotBtn: "Calculate your drying package",
  slotAlt: "Vernast technician with the cables of a construction dehumidifier",

  verderTitel: "Further reading about the equipment",
  verderLezen: [
    {
      kop: "How we use the machines",
      links: [
        { to: "/realisaties/nieuwbouw-drogen-putte", label: "Construction moisture dried out in a new build in Putte" },
        { to: "/realisaties/waterschade-drogen-bedrijfsgebouw", label: "Water damage dried in a commercial building" },
        { to: "/realisaties/kelder-drogen-brugge", label: "A damp cellar in Bruges dry again" },
      ],
    },
    {
      kop: "Choosing and calculating",
      links: [
        { to: "/verhuur/calculator", label: "Calculate which package suits your space" },
        { to: "/gids/condensdroger-of-adsorptiedroger", label: "Guide: condensation or desiccant dehumidifier?" },
        { to: "/gids/stroomverbruik-bouwdroger", label: "Guide: how much electricity does a construction dehumidifier use?" },
        { to: "/prijzen", label: "Hire prices per day and per week" },
        { to: "/nieuwbouw-drogen", label: "Drying screed and plaster" },
        { to: "/waterschade", label: "Drying water damage" },
      ],
    },
    {
      kop: "Delivery in your region",
      links: [
        { to: "/bouwdroger-huren-vlaams-brabant", label: "Dehumidifier hire in Flemish Brabant" },
        { to: "/bouwdroger-huren-antwerpen", label: "Dehumidifier hire in the province of Antwerp" },
      ],
    },
  ],

  contactKicker: "Which machine do you need?",
  contactTitel: "Not sure which machine suits your site?",
  contactLede:
    "Briefly describe the room and what needs drying. A drying specialist will tell you within one working day which machine or combination you need.",
  contactOnderwerpen: [
    "Advice on the right machine",
    "Several machines for a large site",
    "Desiccant or condensation dehumidifier?",
    "Price and availability",
    "Something else",
  ],
  contactPlaceholder:
    "E.g. cellar of 60 m² with a 2.2 m ceiling height, unheated, damp walls after a leak.",
};

export const COPY = { nl, fr, en } satisfies Copy<typeof nl>;

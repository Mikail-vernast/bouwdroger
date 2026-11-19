import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { Copy } from "@/i18n/useTaal";

/**
 * Teksten van /ozonbehandeling in elke taal. De Nederlandse staan er letterlijk
 * zoals ze op de pagina stonden; de opbouw (zes kaarten, vier veiligheidskaarten,
 * zes FAQ's) is per taal gelijk, zodat de pagina zelf geen taal kent.
 *
 * Tekst met een link erin is een functie van `lp`, zodat de link in de taal van
 * de pagina blijft.
 */
type Lp = (nlPad: string) => string;

/*
  De reviewdatums staan in reviews.ts als Nederlandse afkorting ("okt 2023").
  Op een Engelse pagina is "mrt 2025" een raadsel; de beoordeling zelf blijft
  letterlijk (en dus Nederlands), alleen de maand wordt vertaald. Frans laat de
  datum staan zoals hij altijd stond.
*/
const MAAND_EN: Record<string, string> = {
  jan: "Jan", feb: "Feb", mrt: "Mar", apr: "Apr", mei: "May", jun: "Jun",
  jul: "Jul", aug: "Aug", sep: "Sep", okt: "Oct", nov: "Nov", dec: "Dec",
};
export function reviewDatumEn(datum: string): string {
  const [maand, jaar] = datum.split(" ");
  return MAAND_EN[maand] ? `${MAAND_EN[maand]} ${jaar}` : datum;
}

interface Kaart {
  title: string;
  text: string;
}

export interface OzonTekst {
  faq: { question: string; answer: string }[];
  inzet: Kaart[];
  techniek: [string, string][];
  schemaNaam: string;
  schemaBeschrijving: string;
  schemaType: string;
  kruimelHome: string;
  kruimel: string;
  heroKick: string;
  h1: string;
  heroTekst: string;
  heroCta: string;
  heroUsp: string[];
  herkenKick: string;
  herkenH2: string;
  herkenLede: string;
  herkenKaarten: Kaart[];
  noot: (lp: Lp) => ReactNode;
  watKick: string;
  watH2: string;
  watLede: string;
  watBody: ReactNode;
  molO2: string;
  molEnergie: string;
  molO3: string;
  hoeKick: string;
  hoeH2: string;
  hoeLede: string;
  stageLabel: string;
  legO3: string;
  legSpore: string;
  hoeNa: string;
  cirkelKick: string;
  cirkelH2: string;
  cirkelLede: string;
  stap1Titel: string;
  stap1: (lp: Lp) => ReactNode;
  stap2Titel: string;
  stap2: string;
  stap3Titel: string;
  stap3: string;
  bandKick: string;
  bandH3: string;
  band: (lp: Lp) => ReactNode;
  bandCta: string;
  bandAlt: string;
  inzetKick: string;
  inzetH2: string;
  inzetLede: string;
  techKick: string;
  techH2: string;
  techLede: string;
  techBody: string;
  veiligKick: string;
  veiligH2: string;
  veiligLede: string;
  veiligKaarten: Kaart[];
  reviewKick: string;
  reviewH2: string;
  reviewLede: string;
  sterren: (n: number) => string;
  datum: (datum: string) => string;
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
}

export const OZON_COPY = {
  nl: {
    faq: [
      {
        question: "Waarom komt mijn schimmel steeds terug na het reinigen?",
        answer:
          "Omdat oppervlakkig reinigen alleen de zichtbare schimmel verwijdert. De microscopische sporen blijven achter in kieren, voegen, textiel en in de lucht, en zetten zich opnieuw af zodra de omstandigheden goed zijn. Een ozonbehandeling doodt die achtergebleven sporen in de hele ruimte. Belangrijk: los altijd eerst de vochtoorzaak op en droog de constructie, anders keert schimmel sowieso terug.",
      },
      {
        question: "Is een ozonbehandeling veilig?",
        answer:
          "Ja, mits professioneel uitgevoerd. Tijdens de behandeling mag er niemand in de ruimte, geen mensen, huisdieren of planten: ozon is krachtig juist omdat het reactief is. Na de behandeling vervalt het vanzelf tot gewone zuurstof en volstaat een korte verluchting. Daarna is de ruimte weer veilig te gebruiken en blijven er geen chemische residu's achter op oppervlakken of in textiel.",
      },
      {
        question: "Vervangt ozon het drogen van mijn woning?",
        answer:
          "Nee. Ozon is de afronding: het ruimt de bestaande besmetting op, maar lost de oorzaak niet op. Blijft de muur of de chape vochtig, dan keert schimmel terug. Daarom drogen we eerst de constructie met bouwdrogers tot de vochtmeting het bevestigt, en zetten we ozon in als sluitstuk.",
      },
      {
        question: "Waarvoor gebruiken jullie ozon nog meer?",
        answer:
          "Naast schimmel zetten we ozon in tegen huisstofmijt in matrassen, tapijt en textiel, tegen hardnekkige geuren van vocht, rook, huisdieren of brand, voor de ontsmetting van kelders en kruipruimtes, na waterschade, en om een woning fris en geurvrij te maken voor verhuur of verkoop.",
      },
      {
        question: "Welk toestel gebruiken jullie?",
        answer:
          "Wij werken met professionele ozongeneratoren van Duitse makelij, geen hobbytoestellen. Ze leveren een hoog, regelbaar ozondebiet dat we afstemmen op het volume van de ruimte, zodat de behandeling grondig en gecontroleerd verloopt. De inzet gebeurt altijd door onze techniekers, met de nodige veiligheidsmaatregelen.",
      },
      {
        question: "Hoelang duurt het en kan ik er daarna meteen in?",
        answer:
          "Een behandeling duurt doorgaans enkele uren, afhankelijk van het volume van de ruimte. Tijdens de werking is de ruimte onbemand en afgesloten. Daarna verluchten we kort; zodra de waarden veilig zijn, is de ruimte weer normaal te gebruiken. Onze technieker zegt u ter plaatse hoelang dat in uw situatie is.",
      },
    ],
    inzet: [
      {
        title: "Schimmel & sporen",
        text: "Na het ontschimmelen: de sporen die achterbleven in lucht, voegen en textiel worden gedood, zodat de schimmel geen herstart krijgt.",
      },
      {
        title: "Huisstofmijt",
        text: "Ozon bestrijdt huisstofmijt in matrassen, tapijt en textiel. Een verademing voor wie allergisch is en niet weet waar het vandaan komt.",
      },
      {
        title: "Hardnekkige geuren",
        text: "Vocht-, rook-, huisdier- of brandgeur wordt geneutraliseerd op molecuulniveau. Niet overdekt met een geurstof, maar afgebroken.",
      },
      {
        title: "Kelders & kruipruimtes",
        text: "Vochtige, slecht verluchte ruimtes waar schimmel en muffe lucht zich vastzetten, en waar u met een borstel niet overal bij kunt.",
      },
      {
        title: "Na waterschade",
        text: "Na een lek of een overstroming: ontsmetting van de ruimte en het wegnemen van de vochtgeur die na het drogen blijft hangen.",
      },
      {
        title: "Voor verhuur of verkoop",
        text: "Een frisse, ontsmette en geurvrije woning bij de overdracht. Geen muffe eerste indruk bij een bezoek of een plaatsbeschrijving.",
      },
    ],
    techniek: [
      ["Herkomst", "Duitse makelij"],
      ["Vermogen", "Hoog ozondebiet"],
      ["Regeling", "Timer & debiet"],
      ["Inzet", "Onbemand, door onze technieker"],
    ],
    schemaNaam: "Ozonbehandeling en ontschimmeling",
    schemaBeschrijving:
      "Professionele ozonbehandeling tegen schimmelsporen, huisstofmijt en hardnekkige geuren, als sluitstuk na het drogen en ontschimmelen van een ruimte.",
    schemaType: "Ontschimmeling",
    kruimelHome: "Home",
    kruimel: "Ozonbehandeling",
    heroKick: "Ontschimmeling · schimmel & geur",
    h1: "Schimmel weggeschrobd en tóch terug? Dan zit het dieper dan de muur.",
    heroTekst:
      "Een ozonbehandeling verspreidt actieve zuurstof (O₃) tot in elke kier van de ruimte, doodt schimmelsporen, bacteriën en huisstofmijt, en breekt de muffe vochtgeur af, ook daar waar borstel en verf niet raken.",
    heroCta: "Boek uw ozonbehandeling",
    heroUsp: ["Uitgevoerd door onze eigen techniekers", "Geen chemische residu's", "Heel Vlaanderen"],
    herkenKick: "Herkenbaar?",
    herkenH2: "U heeft ontschimmeld, en toch komt hij terug.",
    herkenLede:
      "Dat ligt zelden aan hoe grondig u geschrobd heeft. Schimmel werkt met sporen, en die zitten op plaatsen waar een doek nooit komt.",
    herkenKaarten: [
      {
        title: "Sporen blijven achter",
        text: "Schimmel plant zich voort via microscopische sporen die in kieren, voegen en poriën zitten. Wat u wegveegt is maar het topje.",
      },
      {
        title: "De ruimte blijft besmet",
        text: "Sporen zweven ook in de lucht en zetten zich elders opnieuw af. U reinigt één muur, maar de kamer blijft een broedplaats.",
      },
      {
        title: "De geur komt telkens terug",
        text: "De muffe schimmelgeur zit vastgezet in materialen en textiel. Luchten en schilderen maskeren het even, daarna is het er weer.",
      },
    ],
    noot: (lp) => (
      <>
        <b>Eerst droog, dan ozon.</b> Ozon doodt wat er is en doorbreekt de cirkel, maar zonder
        een droge constructie keert schimmel terug. Zit er nog vocht in muur of chape, dan drogen
        we eerst, met{" "}
        <Link to={lp("/verhuur/calculator")}>een berekend droogpakket</Link>, bevestigd door een
        vochtmeting. Pas daarna heeft een behandeling zin.
      </>
    ),
    watKick: "Wat is ozon?",
    watH2: "Zuurstof met een extra atoom.",
    watLede:
      "De lucht die u inademt is O₂: zuurstof met twee atomen. Ozon is O₃, met een derde, los gebonden atoom. Net dat extra atoom maakt ozon zo krachtig.",
    watBody: (
      <>
        Dat derde atoom laat makkelijk los en valt schimmelsporen, bacteriën en geurmoleculen
        aan. Daarna vervalt ozon vanzelf weer tot gewone zuurstof, <b>zonder residu</b>. En
        omdat het een gas is, verspreidt het zich uit zichzelf naar élke hoek van de ruimte.
      </>
    ),
    molO2: "Gewone lucht, stabiel",
    molEnergie: "+ energie",
    molO3: "Reactief, kortstondig, krachtig",
    hoeKick: "Hoe werkt het?",
    hoeH2: "Een gas dat overal komt waar u niet bij kunt.",
    hoeLede:
      "Een ozongenerator zet de zuurstof in de kamer om in ozon. Omdat het een gas is, verspreidt het zich vanzelf: tot in kieren, voegen, achter meubels, in textiel en in het ventilatiekanaal, plekken die u met een borstel nooit bereikt.",
    stageLabel: "Schimmelmuur met animatie: actieve zuurstof breekt schimmelsporen af",
    legO3: "actieve zuurstof",
    legSpore: "schimmelspore",
    hoeNa:
      "Tijdens de behandeling is de ruimte onbemand. Daarna vervalt de ozon vanzelf terug tot gewone zuurstof, en na een korte verluchting is de ruimte weer veilig te gebruiken. Er blijven geen chemische residu's achter op oppervlakken of in textiel.",
    cirkelKick: "De cirkel doorbreken",
    cirkelH2: "Waarom ozon ná het drogen en ontschimmelen komt.",
    cirkelLede:
      "Ontschimmelen verwijdert de zichtbare schimmel. Ozon ruimt op wat achterblijft, zodat de schimmel geen herstart krijgt.",
    stap1Titel: "Droog en ontschimmel eerst",
    stap1: (lp) => (
      <>
        De constructie droogt tot de vochtmeting het bevestigt en de zichtbare schimmel wordt
        verwijderd. Zie <Link to={lp("/ontschimmeling")}>ontschimmeling</Link>. Het oppervlak oogt weer proper.
      </>
    ),
    stap2Titel: "Ozon ruimt de rest op",
    stap2:
      "De behandeling doodt de achtergebleven sporen in de lucht, in kieren en in textiel, in de hele ruimte, niet alleen op de muur.",
    stap3Titel: "Geen herbesmetting",
    stap3:
      "Zonder levende sporen die zich opnieuw kunnen vestigen blijft de ruimte, mits droog, langdurig schimmelvrij en geurloos.",
    bandKick: "Waar drogen ophoudt",
    bandH3: "Eerst meten, dan drogen, dan ozon.",
    band: (lp) => (
      <>
        Wij zijn in de eerste plaats droogspecialisten. Daarom kijken we eerst of het vocht
        echt weg is: na <Link to={lp("/waterschade")}>waterschade</Link> of in een{" "}
        <Link to={lp("/renovatie")}>vochtige kelder</Link> is dat het halve werk. Pas als de meting
        droog zegt, is ozon het sluitstuk dat de geur en de sporen wegneemt.
      </>
    ),
    bandCta: "Vraag uw behandeling aan",
    bandAlt: "Vernast-specialist in beschermpak bij een ozonbehandeling",
    inzetKick: "Waarvoor zetten wij het in?",
    inzetH2: "Meer dan alleen schimmel.",
    inzetLede:
      "Omdat ozon microben én geurmoleculen aanpakt, gebruiken we het voor uiteenlopende situaties, altijd als aanvulling op een gezonde, droge ruimte.",
    techKick: "Onze techniek",
    techH2: "Professionele Duitse ozongeneratoren.",
    techLede:
      "Wij werken met krachtige, professionele ozongeneratoren van Duitse makelij, geen hobbytoestellen. Ze produceren een hoog, regelbaar ozondebiet, afgestemd op het volume van de ruimte, zodat de behandeling grondig én gecontroleerd verloopt.",
    techBody:
      "De inzet gebeurt altijd door onze eigen techniekers, met de nodige veiligheidsmaatregelen. Tijdens de werking mogen mensen en huisdieren niet in de ruimte.",
    veiligKick: "Veilig & verantwoord",
    veiligH2: "Krachtig tijdens, ongevaarlijk erna.",
    veiligLede:
      "Ozon is juist zo krachtig omdat het reactief is. Daarom hoort een behandeling in professionele handen, en volgen wij een vast protocol.",
    veiligKaarten: [
      {
        title: "Onbemande behandeling",
        text: "Tijdens de werking is de ruimte afgesloten: geen mensen, geen huisdieren, geen planten. Wij bewaken de timing.",
      },
      {
        title: "Vervalt tot zuurstof",
        text: "Ozon breekt na de behandeling vanzelf af tot gewone zuurstof (O₂). Geen chemische residu's op oppervlakken of textiel.",
      },
      {
        title: "Korte verluchting",
        text: "Na afloop verluchten we de ruimte. Zodra de waarden veilig zijn, is ze weer normaal te gebruiken.",
      },
      {
        title: "Altijd na het drogen",
        text: "Ozon is de finishing touch. Een blijvend resultaat vraagt eerst een droge constructie, en daar adviseren we u eerlijk in.",
      },
    ],
    reviewKick: "Wat klanten zeggen",
    reviewH2: "Hoe wij werken, in hun woorden.",
    reviewLede:
      "Beoordelingen van Vernast op Google en Solvari, letterlijk overgenomen. Over snelheid, opvolging en afspraken nakomen, want dat is wat een behandeling bij u thuis vraagt.",
    sterren: (n) => `${n} van 5 sterren`,
    datum: (d) => d,
    faqKick: "Veelgestelde vragen",
    faqH2: "Uw vragen over ozonbehandeling.",
    faqHelpH3: "Staat uw vraag er niet bij?",
    faqHelp:
      "Wij bekijken uw situatie en zeggen eerlijk of een behandeling zin heeft, en wat er eventueel eerst moet gebeuren.",
    bel: "Bel",
    online: "Stel uw vraag online",
    boekKick: "Boek uw behandeling",
    boekH2: "Schimmel of geur die maar blijft terugkomen?",
    boekTekst:
      "Vul hieronder uw situatie in, dan belt een specialist u binnen één werkdag om de behandeling in te plannen. Wij pakken eerst de oorzaak aan en zetten ozon in als grondige afronding, duidelijk, correct en zonder valse verwachtingen.",
    boekUsp: [
      "Reactie binnen één werkdag",
      "Eerlijk advies: soms is drogen het echte antwoord",
      "Werkzaam in heel Vlaanderen",
    ],
    liever: "Liever meteen bellen?",
    uren: (u) => u.replace("Mo-Fr", "ma–vr").replace(" 08:00-17:00", ", 8u–17u"),
  },
  fr: {
    faq: [
      {
        question: "Pourquoi mes moisissures reviennent-elles toujours après le nettoyage ?",
        answer:
          "Parce qu'un nettoyage en surface n'enlève que les moisissures visibles. Les spores microscopiques restent dans les fissures, les joints, les textiles et dans l'air, et se redéposent dès que les conditions s'y prêtent. Un traitement à l'ozone tue ces spores résiduelles dans toute la pièce. Important : réglez toujours d'abord la cause de l'humidité et faites sécher la construction, sinon les moisissures reviendront de toute façon.",
      },
      {
        question: "Un traitement à l'ozone est-il sûr ?",
        answer:
          "Oui, à condition d'être réalisé par des professionnels. Pendant le traitement, personne ne peut se trouver dans la pièce, ni personnes, ni animaux, ni plantes : l'ozone est efficace justement parce qu'il est réactif. Après le traitement, il se décompose de lui-même en oxygène ordinaire et une courte aération suffit. La pièce peut ensuite être utilisée en toute sécurité et aucun résidu chimique ne subsiste sur les surfaces ou dans les textiles.",
      },
      {
        question: "L'ozone remplace-t-il le séchage de mon habitation ?",
        answer:
          "Non. L'ozone est la finition : il élimine la contamination existante, mais ne règle pas la cause. Si le mur ou la chape reste humide, les moisissures reviennent. C'est pourquoi nous séchons d'abord la construction avec des déshumidificateurs de chantier jusqu'à ce que la mesure d'humidité le confirme, et utilisons l'ozone en dernière étape.",
      },
      {
        question: "Pour quoi d'autre utilisez-vous l'ozone ?",
        answer:
          "Outre les moisissures, nous utilisons l'ozone contre les acariens dans les matelas, tapis et textiles, contre les odeurs tenaces d'humidité, de fumée, d'animaux ou d'incendie, pour désinfecter les caves et vides ventilés, après des dégâts des eaux, et pour rendre une habitation fraîche et sans odeur avant une location ou une vente.",
      },
      {
        question: "Quel appareil utilisez-vous ?",
        answer:
          "Nous travaillons avec des générateurs d'ozone professionnels de fabrication allemande, pas avec des appareils grand public. Ils fournissent un débit d'ozone élevé et réglable, que nous adaptons au volume de la pièce, pour un traitement approfondi et contrôlé. L'intervention est toujours réalisée par nos techniciens, avec les mesures de sécurité nécessaires.",
      },
      {
        question: "Combien de temps cela dure-t-il et puis-je réintégrer la pièce tout de suite ?",
        answer:
          "Un traitement dure généralement quelques heures, selon le volume de la pièce. Pendant le fonctionnement, la pièce est inoccupée et fermée. Nous aérons ensuite brièvement ; dès que les valeurs sont sûres, la pièce peut être utilisée normalement. Notre technicien vous indique sur place combien de temps cela prend dans votre situation.",
      },
    ],
    inzet: [
      {
        title: "Moisissures & spores",
        text: "Après l'élimination des moisissures : les spores restées dans l'air, les joints et les textiles sont détruites, pour que les moisissures ne puissent pas repartir.",
      },
      {
        title: "Acariens",
        text: "L'ozone combat les acariens dans les matelas, tapis et textiles. Un soulagement pour les personnes allergiques qui ne savent pas d'où cela vient.",
      },
      {
        title: "Odeurs tenaces",
        text: "Les odeurs d'humidité, de fumée, d'animaux ou d'incendie sont neutralisées au niveau moléculaire. Pas masquées par un parfum, mais décomposées.",
      },
      {
        title: "Caves & vides ventilés",
        text: "Des espaces humides et mal aérés où moisissures et air confiné s'installent, et où une brosse ne peut pas tout atteindre.",
      },
      {
        title: "Après des dégâts des eaux",
        text: "Après une fuite ou une inondation : désinfection de la pièce et élimination de l'odeur d'humidité qui persiste après le séchage.",
      },
      {
        title: "Avant une location ou une vente",
        text: "Une habitation fraîche, désinfectée et sans odeur lors de la remise. Pas de première impression de moisi lors d'une visite ou d'un état des lieux.",
      },
    ],
    techniek: [
      ["Origine", "Fabrication allemande"],
      ["Puissance", "Débit d'ozone élevé"],
      ["Réglage", "Minuterie & débit"],
      ["Intervention", "Sans occupant, par notre technicien"],
    ],
    schemaNaam: "Traitement à l'ozone et élimination des moisissures",
    schemaBeschrijving:
      "Traitement professionnel à l'ozone contre les spores de moisissures, les acariens et les odeurs tenaces, en dernière étape après le séchage et l'élimination des moisissures d'une pièce.",
    schemaType: "Élimination des moisissures",
    kruimelHome: "Accueil",
    kruimel: "Traitement à l'ozone",
    heroKick: "Élimination des moisissures · moisissures & odeurs",
    h1: "Moisissures frottées et pourtant revenues ? Le problème est plus profond que le mur.",
    heroTekst:
      "Un traitement à l'ozone diffuse de l'oxygène actif (O₃) jusque dans chaque recoin de la pièce, tue les spores de moisissures, les bactéries et les acariens, et décompose l'odeur de moisi, même là où la brosse et la peinture n'arrivent pas.",
    heroCta: "Réservez votre traitement à l'ozone",
    heroUsp: ["Réalisé par nos propres techniciens", "Aucun résidu chimique", "Toute la Flandre"],
    herkenKick: "Cela vous parle ?",
    herkenH2: "Vous avez éliminé les moisissures, et pourtant elles reviennent.",
    herkenLede:
      "Cela tient rarement à la minutie de votre nettoyage. Les moisissures se propagent par des spores, et celles-ci se logent là où un chiffon ne passe jamais.",
    herkenKaarten: [
      {
        title: "Les spores restent",
        text: "Les moisissures se reproduisent par des spores microscopiques logées dans les fissures, les joints et les pores. Ce que vous essuyez n'est que la partie visible.",
      },
      {
        title: "La pièce reste contaminée",
        text: "Les spores flottent aussi dans l'air et se redéposent ailleurs. Vous nettoyez un mur, mais la pièce reste un foyer.",
      },
      {
        title: "L'odeur revient toujours",
        text: "L'odeur de moisi est incrustée dans les matériaux et les textiles. Aérer et repeindre la masquent un temps, puis elle revient.",
      },
    ],
    noot: (lp) => (
      <>
        <b>D'abord sécher, ensuite l'ozone.</b> L'ozone tue ce qui est présent et brise le cercle,
        mais sans construction sèche les moisissures reviennent. S'il reste de l'humidité dans le
        mur ou la chape, nous séchons d'abord, avec{" "}
        <Link to={lp("/verhuur/calculator")}>un pack de séchage calculé</Link>, confirmé par une
        mesure d'humidité. Ce n'est qu'ensuite qu'un traitement a du sens.
      </>
    ),
    watKick: "Qu'est-ce que l'ozone ?",
    watH2: "De l'oxygène avec un atome en plus.",
    watLede:
      "L'air que vous respirez est de l'O₂ : de l'oxygène à deux atomes. L'ozone est de l'O₃, avec un troisième atome faiblement lié. C'est justement cet atome supplémentaire qui rend l'ozone si efficace.",
    watBody: (
      <>
        Ce troisième atome se détache facilement et attaque les spores de moisissures, les
        bactéries et les molécules odorantes. L'ozone se décompose ensuite de lui-même en oxygène
        ordinaire, <b>sans résidu</b>. Et comme c'est un gaz, il se répand de lui-même dans
        chaque recoin de la pièce.
      </>
    ),
    molO2: "Air ordinaire, stable",
    molEnergie: "+ énergie",
    molO3: "Réactif, éphémère, puissant",
    hoeKick: "Comment ça marche ?",
    hoeH2: "Un gaz qui va partout où vous ne pouvez pas aller.",
    hoeLede:
      "Un générateur d'ozone transforme l'oxygène de la pièce en ozone. Comme c'est un gaz, il se répand de lui-même : jusque dans les fissures, les joints, derrière les meubles, dans les textiles et dans le conduit de ventilation, des endroits qu'une brosse n'atteint jamais.",
    stageLabel: "Mur moisi avec animation : l'oxygène actif détruit les spores de moisissures",
    legO3: "oxygène actif",
    legSpore: "spore de moisissure",
    hoeNa:
      "Pendant le traitement, la pièce est inoccupée. L'ozone se décompose ensuite de lui-même en oxygène ordinaire, et après une courte aération la pièce peut à nouveau être utilisée en toute sécurité. Aucun résidu chimique ne subsiste sur les surfaces ou dans les textiles.",
    cirkelKick: "Briser le cercle",
    cirkelH2: "Pourquoi l'ozone vient après le séchage et l'élimination des moisissures.",
    cirkelLede:
      "L'élimination des moisissures enlève ce qui est visible. L'ozone nettoie ce qui reste, pour que les moisissures ne puissent pas repartir.",
    stap1Titel: "D'abord sécher et éliminer les moisissures",
    stap1: (lp) => (
      <>
        La construction sèche jusqu'à ce que la mesure d'humidité le confirme et les moisissures
        visibles sont enlevées. Voir{" "}
        <Link to={lp("/ontschimmeling")}>élimination des moisissures</Link>. La surface a de
        nouveau l'air propre.
      </>
    ),
    stap2Titel: "L'ozone élimine le reste",
    stap2:
      "Le traitement tue les spores restées dans l'air, dans les fissures et dans les textiles, dans toute la pièce, pas seulement sur le mur.",
    stap3Titel: "Pas de recontamination",
    stap3:
      "Sans spores vivantes capables de s'installer à nouveau, la pièce, si elle reste sèche, reste durablement sans moisissures et sans odeur.",
    bandKick: "Là où le séchage s'arrête",
    bandH3: "D'abord mesurer, puis sécher, puis l'ozone.",
    band: (lp) => (
      <>
        Nous sommes avant tout des spécialistes du séchage. C'est pourquoi nous vérifions d'abord
        si l'humidité a vraiment disparu&nbsp;: après des{" "}
        <Link to={lp("/waterschade")}>dégâts des eaux</Link> ou dans une{" "}
        <Link to={lp("/renovatie")}>cave humide</Link>, c'est la moitié du travail. Ce n'est que
        lorsque la mesure indique «&nbsp;sec&nbsp;» que l'ozone vient en dernière étape éliminer l'odeur et
        les spores.
      </>
    ),
    bandCta: "Demandez votre traitement",
    bandAlt: "Spécialiste Vernast en combinaison de protection lors d'un traitement à l'ozone",
    inzetKick: "Pour quoi l'utilisons-nous ?",
    inzetH2: "Bien plus que les moisissures.",
    inzetLede:
      "Comme l'ozone s'attaque aux microbes et aux molécules odorantes, nous l'utilisons dans des situations très diverses, toujours en complément d'une pièce saine et sèche.",
    techKick: "Notre technique",
    techH2: "Des générateurs d'ozone professionnels allemands.",
    techLede:
      "Nous travaillons avec de puissants générateurs d'ozone professionnels de fabrication allemande, pas avec des appareils grand public. Ils produisent un débit d'ozone élevé et réglable, adapté au volume de la pièce, pour un traitement approfondi et contrôlé.",
    techBody:
      "L'intervention est toujours réalisée par nos propres techniciens, avec les mesures de sécurité nécessaires. Pendant le fonctionnement, ni personnes ni animaux ne peuvent se trouver dans la pièce.",
    veiligKick: "Sûr & responsable",
    veiligH2: "Puissant pendant, inoffensif après.",
    veiligLede:
      "L'ozone est si efficace justement parce qu'il est réactif. C'est pourquoi un traitement doit être confié à des professionnels, et nous suivons un protocole fixe.",
    veiligKaarten: [
      {
        title: "Traitement sans occupant",
        text: "Pendant le fonctionnement, la pièce est fermée : ni personnes, ni animaux, ni plantes. Nous surveillons la durée.",
      },
      {
        title: "Se décompose en oxygène",
        text: "Après le traitement, l'ozone se décompose de lui-même en oxygène ordinaire (O₂). Aucun résidu chimique sur les surfaces ou les textiles.",
      },
      {
        title: "Courte aération",
        text: "À la fin, nous aérons la pièce. Dès que les valeurs sont sûres, elle peut être utilisée normalement.",
      },
      {
        title: "Toujours après le séchage",
        text: "L'ozone est la touche finale. Un résultat durable demande d'abord une construction sèche, et nous vous conseillons honnêtement à ce sujet.",
      },
    ],
    reviewKick: "Ce que disent nos clients",
    reviewH2: "Notre façon de travailler, avec leurs mots.",
    reviewLede:
      "Avis sur Vernast publiés sur Google et Solvari, repris tels quels (en néerlandais). Sur la rapidité, le suivi et le respect des engagements, car c'est ce que demande un traitement chez vous.",
    sterren: (n) => `${n} étoiles sur 5`,
    datum: (d) => d,
    faqKick: "Questions fréquentes",
    faqH2: "Vos questions sur le traitement à l'ozone.",
    faqHelpH3: "Votre question n'y figure pas ?",
    faqHelp:
      "Nous examinons votre situation et vous disons honnêtement si un traitement a du sens, et ce qui doit éventuellement être fait avant.",
    bel: "Appelez le",
    online: "Posez votre question en ligne",
    boekKick: "Réservez votre traitement",
    boekH2: "Des moisissures ou une odeur qui reviennent sans cesse ?",
    boekTekst:
      "Décrivez votre situation ci-dessous et un spécialiste vous appelle dans un délai d'un jour ouvrable pour planifier le traitement. Nous nous attaquons d'abord à la cause et utilisons l'ozone comme finition approfondie, de façon claire, correcte et sans fausses promesses.",
    boekUsp: [
      "Réponse dans un délai d'un jour ouvrable",
      "Un conseil honnête : parfois, le séchage est la vraie réponse",
      "Actifs dans toute la Flandre",
    ],
    liever: "Vous préférez appeler tout de suite ?",
    uren: (u) => u.replace("Mo-Fr", "lun–ven").replace(" 08:00-17:00", ", 8 h–17 h"),
  },
  en: {
    faq: [
      {
        question: "Why does my mould keep coming back after cleaning?",
        answer:
          "Because surface cleaning only removes the visible mould. The microscopic spores stay behind in cracks, joints, fabrics and in the air, and settle again as soon as conditions are right. An ozone treatment kills those remaining spores throughout the room. Important: always deal with the cause of the damp first and dry the structure, otherwise the mould will come back regardless.",
      },
      {
        question: "Is an ozone treatment safe?",
        answer:
          "Yes, provided it is carried out by professionals. During the treatment nobody may be in the room, no people, pets or plants: ozone is powerful precisely because it is reactive. After the treatment it breaks down by itself into ordinary oxygen and a short airing is enough. The room is then safe to use again and no chemical residues are left on surfaces or in fabrics.",
      },
      {
        question: "Does ozone replace drying my home?",
        answer:
          "No. Ozone is the finishing step: it clears up the existing contamination, but does not solve the cause. If the wall or the screed stays damp, the mould comes back. That is why we first dry the structure with construction dehumidifiers until a moisture reading confirms it, and use ozone as the final step.",
      },
      {
        question: "What else do you use ozone for?",
        answer:
          "Besides mould, we use ozone against dust mites in mattresses, carpets and fabrics, against stubborn odours from damp, smoke, pets or fire, to disinfect cellars and crawl spaces, after water damage, and to make a home fresh and odour-free before it is let or sold.",
      },
      {
        question: "Which equipment do you use?",
        answer:
          "We work with professional German-made ozone generators, not hobby units. They deliver a high, adjustable ozone output that we match to the volume of the room, so the treatment is thorough and controlled. They are always operated by our technicians, with the necessary safety measures.",
      },
      {
        question: "How long does it take and can I go back in straight away?",
        answer:
          "A treatment usually takes a few hours, depending on the volume of the room. While it runs, the room is unoccupied and closed off. Afterwards we air it briefly; as soon as the levels are safe, the room can be used normally again. Our technician will tell you on site how long that is in your situation.",
      },
    ],
    inzet: [
      {
        title: "Mould & spores",
        text: "After mould removal: the spores left behind in the air, joints and fabrics are killed, so the mould gets no chance to restart.",
      },
      {
        title: "Dust mites",
        text: "Ozone tackles dust mites in mattresses, carpets and fabrics. A relief for allergy sufferers who don't know where it comes from.",
      },
      {
        title: "Stubborn odours",
        text: "Smells of damp, smoke, pets or fire are neutralised at molecular level. Not covered up with a fragrance, but broken down.",
      },
      {
        title: "Cellars & crawl spaces",
        text: "Damp, poorly ventilated spaces where mould and stale air take hold, and where a brush can't reach everywhere.",
      },
      {
        title: "After water damage",
        text: "After a leak or a flood: disinfecting the room and removing the damp smell that lingers after drying.",
      },
      {
        title: "Before letting or selling",
        text: "A fresh, disinfected and odour-free home at handover. No musty first impression at a viewing or an inventory check.",
      },
    ],
    techniek: [
      ["Origin", "German-made"],
      ["Output", "High ozone output"],
      ["Control", "Timer & output"],
      ["Operation", "Unoccupied, by our technician"],
    ],
    schemaNaam: "Ozone treatment and mould removal",
    schemaBeschrijving:
      "Professional ozone treatment against mould spores, dust mites and stubborn odours, as the final step after drying a room and removing the mould.",
    schemaType: "Mould removal",
    kruimelHome: "Home",
    kruimel: "Ozone treatment",
    heroKick: "Mould removal · mould & odour",
    h1: "Scrubbed the mould off and it still came back? Then it goes deeper than the wall.",
    heroTekst:
      "An ozone treatment spreads active oxygen (O₃) into every crack of the room, kills mould spores, bacteria and dust mites, and breaks down the musty damp smell, even where brush and paint can't reach.",
    heroCta: "Book your ozone treatment",
    heroUsp: ["Carried out by our own technicians", "No chemical residues", "Throughout Flanders"],
    herkenKick: "Sound familiar?",
    herkenH2: "You removed the mould, and still it comes back.",
    herkenLede:
      "That is rarely down to how thoroughly you scrubbed. Mould works through spores, and they sit in places a cloth never reaches.",
    herkenKaarten: [
      {
        title: "Spores stay behind",
        text: "Mould reproduces through microscopic spores lodged in cracks, joints and pores. What you wipe away is only the tip.",
      },
      {
        title: "The room stays contaminated",
        text: "Spores also float in the air and settle again elsewhere. You clean one wall, but the room remains a breeding ground.",
      },
      {
        title: "The smell keeps coming back",
        text: "The musty smell of mould is trapped in materials and fabrics. Airing and painting mask it for a while, then it's back.",
      },
    ],
    noot: (lp) => (
      <>
        <b>Dry first, then ozone.</b> Ozone kills what is there and breaks the cycle, but without a
        dry structure the mould comes back. If there is still moisture in the wall or screed, we dry
        first, with{" "}
        <Link to={lp("/verhuur/calculator")}>a calculated drying package</Link>, confirmed by a
        moisture reading. Only then does a treatment make sense.
      </>
    ),
    watKick: "What is ozone?",
    watH2: "Oxygen with an extra atom.",
    watLede:
      "The air you breathe is O₂: oxygen with two atoms. Ozone is O₃, with a third, loosely bound atom. It is exactly that extra atom that makes ozone so powerful.",
    watBody: (
      <>
        That third atom lets go easily and attacks mould spores, bacteria and odour molecules.
        Ozone then breaks down by itself into ordinary oxygen, <b>without residue</b>. And because
        it is a gas, it spreads by itself into every corner of the room.
      </>
    ),
    molO2: "Ordinary air, stable",
    molEnergie: "+ energy",
    molO3: "Reactive, short-lived, powerful",
    hoeKick: "How does it work?",
    hoeH2: "A gas that gets everywhere you can't.",
    hoeLede:
      "An ozone generator converts the oxygen in the room into ozone. Because it is a gas, it spreads by itself: into cracks, joints, behind furniture, into fabrics and the ventilation duct, places you never reach with a brush.",
    stageLabel: "Mouldy wall with animation: active oxygen breaks down mould spores",
    legO3: "active oxygen",
    legSpore: "mould spore",
    hoeNa:
      "During the treatment the room is unoccupied. Afterwards the ozone breaks down by itself into ordinary oxygen, and after a short airing the room is safe to use again. No chemical residues are left on surfaces or in fabrics.",
    cirkelKick: "Breaking the cycle",
    cirkelH2: "Why ozone comes after drying and mould removal.",
    cirkelLede:
      "Mould removal takes away the visible mould. Ozone clears up what is left, so the mould gets no chance to restart.",
    stap1Titel: "Dry and remove the mould first",
    stap1: (lp) => (
      <>
        The structure dries until a moisture reading confirms it and the visible mould is removed. See{" "}
        <Link to={lp("/ontschimmeling")}>mould removal</Link>. The surface looks clean again.
      </>
    ),
    stap2Titel: "Ozone clears up the rest",
    stap2:
      "The treatment kills the remaining spores in the air, in cracks and in fabrics, throughout the room, not just on the wall.",
    stap3Titel: "No recontamination",
    stap3:
      "Without living spores that can settle again, the room stays free of mould and odour for a long time, provided it stays dry.",
    bandKick: "Where drying stops",
    bandH3: "Measure first, then dry, then ozone.",
    band: (lp) => (
      <>
        We are drying specialists first and foremost. That is why we first check whether the
        moisture has really gone: after <Link to={lp("/waterschade")}>water damage</Link> or in a{" "}
        <Link to={lp("/renovatie")}>damp cellar</Link> that is half the job. Only when the reading
        says dry is ozone the final step that removes the smell and the spores.
      </>
    ),
    bandCta: "Request your treatment",
    bandAlt: "Vernast specialist in a protective suit during an ozone treatment",
    inzetKick: "What do we use it for?",
    inzetH2: "More than just mould.",
    inzetLede:
      "Because ozone tackles microbes and odour molecules alike, we use it in a wide range of situations, always in addition to a healthy, dry room.",
    techKick: "Our equipment",
    techH2: "Professional German ozone generators.",
    techLede:
      "We work with powerful, professional German-made ozone generators, not hobby units. They produce a high, adjustable ozone output, matched to the volume of the room, so the treatment is thorough and controlled.",
    techBody:
      "They are always operated by our own technicians, with the necessary safety measures. While the generator is running, people and pets must stay out of the room.",
    veiligKick: "Safe & responsible",
    veiligH2: "Powerful during, harmless after.",
    veiligLede:
      "Ozone is so powerful precisely because it is reactive. That is why a treatment belongs in professional hands, and we follow a fixed protocol.",
    veiligKaarten: [
      {
        title: "Unoccupied treatment",
        text: "While it runs, the room is closed off: no people, no pets, no plants. We keep an eye on the timing.",
      },
      {
        title: "Breaks down to oxygen",
        text: "After the treatment, ozone breaks down by itself into ordinary oxygen (O₂). No chemical residues on surfaces or fabrics.",
      },
      {
        title: "Short airing",
        text: "Afterwards we air the room. As soon as the levels are safe, it can be used normally again.",
      },
      {
        title: "Always after drying",
        text: "Ozone is the finishing touch. A lasting result first needs a dry structure, and we will give you honest advice on that.",
      },
    ],
    reviewKick: "What customers say",
    reviewH2: "How we work, in their words.",
    reviewLede:
      "Reviews of Vernast on Google and Solvari, quoted word for word (in Dutch). About speed, follow-up and keeping appointments, because that is what a treatment in your home requires.",
    sterren: (n) => `${n} out of 5 stars`,
    datum: reviewDatumEn,
    faqKick: "Frequently asked questions",
    faqH2: "Your questions about ozone treatment.",
    faqHelpH3: "Can't find your question?",
    faqHelp:
      "We look at your situation and tell you honestly whether a treatment makes sense, and what may need to happen first.",
    bel: "Call",
    online: "Ask your question online",
    boekKick: "Book your treatment",
    boekH2: "Mould or a smell that just keeps coming back?",
    boekTekst:
      "Describe your situation below and a specialist will call you within one working day to schedule the treatment. We tackle the cause first and use ozone as a thorough finish, clearly, correctly and without false expectations.",
    boekUsp: [
      "Response within one working day",
      "Honest advice: sometimes drying is the real answer",
      "Working throughout Flanders",
    ],
    liever: "Rather call straight away?",
    uren: (u) => u.replace("Mo-Fr", "Mon–Fri").replace(" 08:00-17:00", ", 8am–5pm"),
  },
} satisfies Copy<OzonTekst>;

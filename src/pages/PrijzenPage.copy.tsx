import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { CheckIcon } from "@/components/home-v3/icons";
import { XIcon } from "@/components/content/icons";
import type { Copy } from "@/i18n/useTaal";
import type { Taal } from "@/i18n/taal";
import type { LeesGroep } from "@/components/VerderLezen";
import type { Tarief } from "@/data/tarieflijst";
import { vertaalPortaal } from "@/data/verhuur.fr";

/**
 * Teksten van /prijzen in het Nederlands en het Frans.
 *
 * Geen enkel bedrag staat hier als getal: de pagina rekent ze uit de catalogus
 * en geeft ze als tekst mee (`prijs(excl)`), al in de btw-weergave van deze
 * bezoeker. `incl` zegt welke dat is — de zinnen die "exclusief btw" zeiden,
 * volgen die keuze nu, zodat tekst en bedrag elkaar niet tegenspreken.
 */

type Lp = (nlPad: string) => string;

/** « le Boost », mais « l'Ultimate » : élision devant une voyelle. */
const le = (naam: string) => (/^[aeiouyéè]/i.test(naam) ? `l'${naam}` : `le ${naam}`);
const Le = (naam: string) => (/^[aeiouyéè]/i.test(naam) ? `L'${naam}` : `Le ${naam}`);

/** Wat de FAQ uit de catalogus nodig heeft. */
export interface PrijsFeiten {
  drogers: Tarief[];
  midden: Tarief;
  middenKw: number | null;
  /** Bedrag in de weergave van deze bezoeker, zonder label. */
  prijs: (excl: number) => string;
  /** Prijs per week van een droger, idem. */
  weekprijs: (t: Tarief) => string;
  kwh: (n: number) => string;
  kw: (n: number) => string;
  /** Toont deze bezoeker bedragen incl. btw (particulier)? */
  incl: boolean;
}

const nl = {
  service: {
    name: "Verhuur van bouwdrogers, ventilatoren en bouwkachels",
    description:
      "Transparante huurprijzen per dag, week en droogpakket, zonder waarborg. Berekende droogpakketten met levering en installatie zijn inclusief vochtmetingen en Drooggarantie.",
    serviceType: "Verhuur bouwdrogers",
  },
  catalogus: "Huurtarieven bouwdrogers, ventilatoren en bouwkachels",
  home: "Home",
  prijzen: "Prijzen",

  faq: (f: PrijsFeiten) => {
    const eerste = f.drogers[0];
    const laatste = f.drogers[f.drogers.length - 1];
    const btw = f.incl ? "inclusief btw" : "exclusief btw";
    return [
      {
        question: "Wat kost een bouwdroger huren per dag?",
        answer: `Een bouwdroger huren kost bij Vernast tussen ${f.prijs(eerste.perDay)} en ${f.prijs(laatste.perDay)} per dag, ${btw}. De prijs hangt af van de capaciteit: de ${eerste.short} voert ${eerste.litersPerDay} liter vocht per 24 uur af, de ${laatste.short} tot ${laatste.litersPerDay} liter. Dit zijn de huurprijzen van losse toestellen. Bij een berekend droogpakket zijn ook levering, installatie, vochtmetingen en ophaling inbegrepen.`,
      },
      {
        question: "Moet ik een waarborg betalen?",
        answer:
          "Nee. Wij vragen geen waarborg voor het toestel. U betaalt enkel de huurprijs voor de dagen dat u het toestel gebruikt, plus eventuele extra opties die u zelf kiest.",
      },
      {
        question: "Zijn levering en ophaling inbegrepen?",
        answer:
          "Levering en ophaling zijn gratis vanaf een huurperiode van vier weken. Bij kortere periodes rekenen wij een leveringskost aan; wie zelf afhaalt in ons magazijn in Aartselaar krijgt € 25 korting op de huurprijs.",
      },
      {
        question: "Zijn de prijzen inclusief btw?",
        answer: f.incl
          ? "Ja, de prijzen op deze pagina staan inclusief btw. Op verhuur van bouwdrogers is het standaardtarief van 21 % btw van toepassing. Op uw factuur staat het btw-bedrag apart vermeld, zodat u het kunt indienen bij uw verzekeraar of boekhouder."
          : "Nee, alle vermelde prijzen zijn exclusief btw. Op verhuur van bouwdrogers is het standaardtarief van 21 % btw van toepassing. Op uw factuur staat het btw-bedrag apart vermeld, zodat u het kunt indienen bij uw verzekeraar of boekhouder.",
      },
      {
        question: "Wat kost een bouwdroger huren per week?",
        answer: `Per week kost een bouwdroger bij Vernast ${f.drogers
          .map((t) => `${f.weekprijs(t)} voor de ${t.short}`)
          .join(", ")}, ${btw}. Dat is telkens de dagprijs maal zeven dagen. Een volledig droogpakket met ventilator rekent u uit in de Calculator.`,
      },
      {
        question: "Hoeveel stroom verbruikt een bouwdroger?",
        answer: f.middenKw
          ? `De ${f.midden.short} neemt maximaal ${f.kw(f.middenKw)} kW op. Draait hij een volle dag op vol vermogen, dan is dat ${f.kwh(f.middenKw * 24)} per dag. In de praktijk ligt het verbruik lager, omdat de ingebouwde hygrostaat het toestel terugschakelt zodra de streefvochtigheid bereikt is. Vermenigvuldig met de kWh-prijs van uw eigen contract voor de kost.`
          : "Dat hangt af van het toestel: het opgenomen vermogen staat op elke toestelpagina. Vermenigvuldig het met het aantal uren en met de kWh-prijs van uw eigen contract.",
      },
      {
        question: "Wordt het goedkoper als ik langer huur?",
        answer:
          "De dagprijs blijft dezelfde, hoe lang u ook huurt; er komt geen toeslag bij voor een korte periode. Wat u wint bij langer huren, is de levering: vanaf vier weken zijn levering en ophaling gratis.",
      },
      {
        question: "Kan ik verlengen als de werf uitloopt?",
        answer:
          "Ja. Loopt de werf uit of is de meting nog niet goed, dan verlengt u per week tegen dezelfde dagprijs; u krijgt daarvoor een link per mail en hoeft niets te bellen. Huurt u een berekend droogpakket en is het ondanks correcte droogomstandigheden nog niet droog, dan verlengt u kosteloos, dat is de drooggarantie.",
      },
      {
        question: "Wanneer is de Drooggarantie inbegrepen?",
        answer:
          "De Drooggarantie is inbegrepen bij een droogpakket dat Vernast voor uw situatie berekent, levert en installeert. Wij meten bij de start en bij de oplevering. Is het materiaal ondanks correcte droogomstandigheden niet droog binnen de berekende periode, dan huurt u de toestellen kosteloos verder. De garantie geldt niet voor losse toestellen die u zelf afhaalt of plaatst.",
      },
    ];
  },

  heroKick: "Tarieven",
  heroH1: "Bouwdroger huren: prijzen mét Drooggarantie.",
  heroP:
    "Bekijk de huurprijs per dag of per week, of bereken een compleet droogpakket voor uw werf. Geen waarborg en geen verborgen kosten. Kiest u voor een pakket dat wij berekenen, leveren en installeren? Dan is onze 100 % Drooggarantie inbegrepen.",
  berekenPrijs: "Bereken uw prijs",
  heroAlt: "Zorgeloos huren bij Vernast: één prijs, geen waarborg",
  heroBadge: "100 % Drooggarantie",
  heroBadgeSub: "bij berekende pakketten met plaatsing",

  keuzeKick: "Eerst dit",
  keuzeH2: "Drooggarantie of alleen een toestel huren?",
  keuzeLede:
    "U kunt bij ons allebei. Een los toestel heeft een eenvoudige dagprijs en plaatst u zelf. Met een droogpakket koopt u meer zekerheid: wij berekenen de capaciteit en droogtijd, plaatsen de toestellen en meten het resultaat. Daarom geldt alleen op dat volledige pakket onze Drooggarantie.",
  pakketLab: "Wat wij aanraden",
  pakketSub: "Droogpakket",
  pakketH3: "Berekend, geleverd en gemeten",
  pakketP:
    "De Calculator vertaalt uw oppervlakte, plafondhoogte en situatie naar het juiste aantal toestellen en een berekende droogperiode. Onze technieker plaatst alles, sluit de condensafvoer aan en meet het vochtgehalte bij start en oplevering.",
  pakketLijst: (pct: number): ReactNode => (
    <ul>
      <li><CheckIcon size={14} strokeWidth={3} /> <span><b>100 % drooggarantie:</b> niet droog binnen de berekende periode? U huurt kosteloos verder.*</span></li>
      <li><CheckIcon size={14} strokeWidth={3} /> Vochtmeting bij start én oplevering, zwart op wit</li>
      <li><CheckIcon size={14} strokeWidth={3} /> Levering, plaatsing en ophaling inbegrepen</li>
      <li><CheckIcon size={14} strokeWidth={3} /> Defect toestel binnen 24 uur vervangen</li>
      <li><CheckIcon size={14} strokeWidth={3} /> {pct} % korting bij volledig online betalen</li>
    </ul>
  ),
  pakketBtn: "Bereken uw droogpakket",
  losSub: "Los toestel",
  losH3: "Zelf plaatsen, zelf opvolgen",
  losP:
    "Eén droger, ventilator of bouwkachel, per dag of per week. Handig voor een kleine ruimte, een tweede toestel bij een pakket, of wie het drogen zelf in handen wil houden. U haalt het af in Aartselaar of laat het leveren.",
  losLijst: (
    <ul>
      <li><CheckIcon size={14} strokeWidth={3} /> Eén vaste dagprijs, geen waarborg</li>
      <li><CheckIcon size={14} strokeWidth={3} /> Afhaalkorting in ons magazijn in Aartselaar</li>
      <li><CheckIcon size={14} strokeWidth={3} /> Ook bij te boeken naast een pakket</li>
      <li className="niet"><XIcon size={14} /> Geen drooggarantie: wij plaatsen en meten niet</li>
      <li className="niet"><XIcon size={14} /> U volgt zelf op of het droog is</li>
    </ul>
  ) as ReactNode,
  losBtn: "Bekijk het gamma",
  keuzeNote: (lp: Lp): ReactNode => (
    <>
      <b>Waarom die grens er is.</b> Een garantie kan alleen op een berekening rusten. Wij
      dimensioneren het pakket op volume en situatie, installeren het zelf en leggen het
      start- en eindpunt vast met een meting; daardoor is "droog" bij ons een meetresultaat en
      geen gevoel. Bij een los toestel bepaalt u zelf de opstelling, en dan kunnen wij de
      uitkomst niet beloven. De volledige voorwaarden leest u op{" "}
      <Link to={lp("/drooggarantie")}>de pagina over de drooggarantie</Link>.
    </>
  ),

  opbouwKick: "Prijsopbouw",
  opbouwH2: "Zo komt uw bedrag tot stand.",
  opbouwLede:
    "Vier dingen bepalen wat u betaalt: wat u huurt, hoe lang, hoe u betaalt, en welke opties u zelf aanvinkt. Alle bedragen hieronder komen uit dezelfde prijslijst waarmee de checkout rekent.",
  pakketprijsH3: "Droogpakket: vaste prijs per situatie",
  pakketprijsP:
    "Een pakket combineert droger, ventilator en eventueel kachels voor een bepaalde oppervlakte, werksoort en dikte. De prijs is de dagprijs van het pakket maal de dagen van de huurtermijn, en die termijn volgt uit de dikte van de chape of het pleisterwerk.",
  inbegrepenZin: (lijst: string) => ` Inbegrepen: ${lijst}.`,
  losprijsH3: "Losse toestellen: dagprijs × dagen",
  losprijsP: (naam: string, dag: string, tweeWeken: string) =>
    `Elk toestel heeft een dagprijs. De huurprijs is die dagprijs maal het aantal dagen, zonder toeslag voor een korte periode. Een ${naam} aan ${dag} per dag kost dus ${tweeWeken} voor twee weken.`,
  onlineH3: (pct: number) => `${pct} % korting bij online betalen`,
  onlineP: (pct: number, voorschot: string) =>
    `Betaalt u de volledige huur online bij het reserveren, dan krijgt u ${pct} % korting op het hele bedrag. U kunt ook enkel een vaste orderbevestiging van ${voorschot} incl. btw betalen en het saldo bij de installatie of de afhaling.`,
  optiesH3: "Opties die u zelf kiest",
  dekking: (naam: string, prijs: string) => `Dekking "${naam}": ${prijs}`,
  pomp: (lp: Lp, prijs: string): ReactNode => (
    <>
      <Link to={lp("/verhuur/toebehoren/condenspomp")}>Condenspomp</Link>: {prijs} per bouwdroger per dag
    </>
  ),
  ladder: (prijs: string) => `Plaatsing op verdieping via ladder: ${prijs}`,
  optie: (naam: string, prijs: string, eenheid: string) => `${naam}: ${prijs} ${eenheid}`,
  opbouwNote: (incl: boolean, pct: number) =>
    `Alle bedragen ${incl ? "inclusief" : "exclusief"} btw, tenzij anders vermeld. Op verhuur geldt ${pct} % btw.`,

  vbKick: "Rekenvoorbeeld",
  vbLede1: (weken: number) =>
    `Een chapepakket zonder kachels, met een huurtermijn van ${weken} ${weken === 1 ? "week" : "weken"}, en de opties die bij het boeken standaard aangevinkt staan. Die opties kunt u uitzetten.`,
  vbLede2:
    'Dit bedrag komt uit dezelfde module waarmee de boekingspagina en Stripe rekenen. Wat hier staat, staat straks ook in de checkout: geen "vanaf"-prijs die achteraf hoger uitvalt.',
  vbBtn: "Bereken uw eigen pakket",
  vbCaption: "Rekenvoorbeeld van een droogpakket voor chape",
  vbPakket: (dagen: number) => `Pakket (${dagen} dagen)`,
  inbegrepen: "Inbegrepen",
  vbKorting: (pct: number) => `Korting online betalen (${pct} %)`,
  totaalExcl: "Totaal excl. btw",
  btwRij: (pct: number) => `Btw ${pct} %`,
  totaalIncl: "Totaal incl. btw",

  losKick: "Losse toestellen",
  losTabelH2: "Wat kost een bouwdroger per dag en per week?",
  losTabelLede:
    "De weekbedragen zijn simpelweg de dagprijs maal het aantal dagen. Er komt geen toeslag bij voor een korte huurperiode, en er is geen staffel die u pas bij het afrekenen ziet.",
  losCaption: (incl: boolean) =>
    `Huurprijzen per bouwdroger en per huurperiode, ${incl ? "inclusief" : "exclusief"} btw`,
  thDroger: "Bouwdroger",
  thPerDag: "Per dag",
  weken: (w: number) => `${w} ${w === 1 ? "week" : "weken"}`,
  drogerSub: (liter: number, m3: number) => `${liter} L/dag · tot ${m3} m³`,
  losNote: (incl: boolean, pct: number) =>
    `Prijzen ${incl ? "incl." : "excl."} btw, ${pct} % btw van toepassing. Levering en ophaling zijn gratis vanaf een huurperiode van vier weken.`,
  extraKick: "Ventilator en kachel",
  extraH3: "Sneller droog, apart te huren.",
  extraLede:
    "Een ontvochtiger haalt het vocht uit de lucht; een ventilator zorgt dat er ook droge lucht bij de natte bouwmassa komt, en een kachel houdt de ruimte op temperatuur. Samen winnen ze dagen. In een berekend pakket zitten ze er al bij waar uw situatie ze nodig heeft.",
  perDag: "/dag",

  inbKick: "Inbegrepen bij een droogpakket",
  inbH2: "Niet alleen toestellen, maar zekerheid.",
  inbLede:
    "De pakketprijs omvat de volledige begeleiding van start tot oplevering. Deze diensten staan niet als losse opties in de checkout en verschijnen niet onverwacht op de factuur.",
  inbegrepenLijst: [
    "100 % Drooggarantie op berekende droogpakketten",
    "Levering aan huis door een technieker",
    "Ophaling na gebruik",
    "Gratis verlengsnoer 10 m, 2,5 mm²",
    "Uitleg bij de plaatsing",
    "Vochtmeting bij start en oplevering",
    "Geen waarborg vereist",
  ],
  garanties: [
    { title: "Toestel defect?", desc: "Wij vervangen het de volgende werkdag. Geen discussie, geen extra kost: u huurt een werkend toestel, niet een toestel." },
    { title: "Altijd bereikbaar", desc: "Weekdagen, weekend en feestdagen. Een droging die stilvalt in het weekend is een week verlies." },
    { title: "Duidelijke factuur", desc: "Op naam, met de btw apart, en met de metingen erbij, klaar voor uw verzekeringsdossier of boekhouder." },
  ],

  stroomKick: "Stroom",
  stroomH2: "Wat verbruikt een bouwdroger?",
  stroomLede:
    "De stroom betaalt u zelf, want de toestellen draaien op uw aansluiting. Hieronder staat het opgenomen vermogen per toestel en wat dat op vol vermogen per dag en per week betekent. Dat is een bovengrens: de ingebouwde hygrostaat schakelt een ontvochtiger terug zodra de ingestelde vochtigheid bereikt is. Vermenigvuldig het aantal kWh met de prijs uit uw eigen contract.",
  stroomCaption: "Stroomverbruik per toestel op vol vermogen",
  stroomTh: ["Toestel", "Vermogen", "Max. per dag", "Max. per week"],
  stroomNote: (lp: Lp): ReactNode => (
    <>
      <b>En een bouwkachel?</b> Die verbruikt veel meer dan een droger: zijn vermogen staat in
      kilowatt op de toestelpagina, en de thermostaat schakelt hem af zodra de ruimte op
      temperatuur is. In een koude ruimte loont dat toch, omdat de ontvochtiger anders veel
      langer moet draaien. Meer cijfers staan in de gids over{" "}
      <Link to={lp("/gids/stroomverbruik-bouwdroger")}>het stroomverbruik van een bouwdroger</Link>.
    </>
  ),

  faqTitel: "Veelgestelde vragen over de prijs.",
  slotKick: "Klaar om te reserveren",
  slotH3: "Geen waarborg, geen verborgen kosten, levering binnen 24 uur.",
  slotP: (pct: number) =>
    `De Calculator geeft u in een paar klikken de volledige prijs voor uw oppervlakte, inclusief Drooggarantie op een berekend pakket. U krijgt ${pct} % korting als u meteen online betaalt.`,
  slotAlt: "Vernast technicus met de betaalterminal",

  verderTitel: "Verder lezen over prijzen en pakketten",
  verderLezen: [
    {
      kop: "Wat onze klanten lieten drogen",
      links: [
        { to: "/realisaties/bouwdroging-winkelpand", label: "Versnelde bouwdroging binnen een strak bouwschema" },
        { to: "/realisaties/chape-pleisterwerk-drogen-hasselt", label: "Pleister- en chapewerken versneld gedroogd in Hasselt" },
        { to: "/realisaties/kelder-en-kamer-drogen-antwerpen", label: "Kelder en leefruimte drooggelegd na waterschade" },
      ],
    },
    {
      kop: "Kiezen en berekenen",
      links: [
        { to: "/verhuur/calculator", label: "Bereken de prijs van uw droogpakket" },
        { to: "/machines", label: "Welk toestel heeft u nodig? Vergelijk het gamma" },
        { to: "/gids/stroomverbruik-bouwdroger", label: "Gids: wat kost een bouwdroger aan stroom?" },
        { to: "/gids/hoe-lang-moet-chape-drogen", label: "Gids: hoe lang moet een chape drogen?" },
        { to: "/nieuwbouw-drogen", label: "Droogtijden van chape en pleisterwerk" },
      ],
    },
    {
      kop: "Levering in uw regio",
      links: [
        { to: "/bouwdroger-huren-antwerpen", label: "Bouwdroger huren in de provincie Antwerpen" },
        { to: "/bouwdroger-huren-oost-vlaanderen", label: "Bouwdroger huren in Oost-Vlaanderen" },
      ],
    },
  ] as LeesGroep[],

  contactKicker: "Een vraag over de prijs?",
  contactTitel: "Liever een prijs op maat van uw werf?",
  contactLede:
    "Geef ons uw oppervlakte en wat er moet drogen. U krijgt binnen één werkdag een voorstel met het juiste pakket en de juiste termijn.",
  contactOnderwerpen: [
    "Prijs van een droogpakket",
    "Prijs van een los toestel",
    "Vraag over de drooggarantie",
    "Factuur en btw",
    "Iets anders",
  ],
  contactPlaceholder:
    "Bv. nieuwbouw 160 m² met chape van 6 cm, levering half december, graag een prijsvoorstel.",
};

const fr: typeof nl = {
  service: {
    name: "Location de déshumidificateurs, ventilateurs et chauffages de chantier",
    description:
      "Des prix de location transparents par jour, par semaine et par pack de séchage, sans caution. Les packs de séchage calculés avec livraison et installation comprennent les mesures d'humidité et la garantie de séchage.",
    serviceType: "Location de déshumidificateurs de chantier",
  },
  catalogus: "Tarifs de location des déshumidificateurs, ventilateurs et chauffages de chantier",
  home: "Accueil",
  prijzen: "Prix",

  faq: (f: PrijsFeiten) => {
    const eerste = f.drogers[0];
    const laatste = f.drogers[f.drogers.length - 1];
    const btw = f.incl ? "TVA comprise" : "hors TVA";
    return [
      {
        question: "Combien coûte la location d'un déshumidificateur de chantier par jour ?",
        answer: `Chez Vernast, louer un déshumidificateur de chantier coûte entre ${f.prijs(eerste.perDay)} et ${f.prijs(laatste.perDay)} par jour, ${btw}. Le prix dépend de la capacité : ${le(eerste.short)} évacue ${eerste.litersPerDay} litres d'humidité par 24 heures, ${le(laatste.short)} jusqu'à ${laatste.litersPerDay} litres. Ce sont les prix de location des appareils seuls. Avec un pack de séchage calculé, la livraison, l'installation, les mesures d'humidité et la reprise sont également comprises.`,
      },
      {
        question: "Dois-je payer une caution ?",
        answer:
          "Non. Nous ne demandons pas de caution pour l'appareil. Vous payez uniquement le prix de location pour les jours où vous utilisez l'appareil, plus les éventuelles options que vous choisissez vous-même.",
      },
      {
        question: "La livraison et la reprise sont-elles comprises ?",
        answer:
          "La livraison et la reprise sont gratuites à partir d'une période de location de quatre semaines. Pour des périodes plus courtes, nous facturons des frais de livraison ; si vous venez chercher l'appareil dans notre entrepôt d'Aartselaar, vous bénéficiez de 25 € de réduction sur le prix de location.",
      },
      {
        question: "Les prix sont-ils TVA comprise ?",
        answer: f.incl
          ? "Oui, les prix de cette page sont TVA comprise. La location de déshumidificateurs de chantier est soumise au taux standard de 21 % de TVA. Le montant de la TVA figure séparément sur votre facture, pour que vous puissiez la transmettre à votre assureur ou à votre comptable."
          : "Non, tous les prix indiqués sont hors TVA. La location de déshumidificateurs de chantier est soumise au taux standard de 21 % de TVA. Le montant de la TVA figure séparément sur votre facture, pour que vous puissiez la transmettre à votre assureur ou à votre comptable.",
      },
      {
        question: "Combien coûte la location d'un déshumidificateur de chantier par semaine ?",
        answer: `Par semaine, un déshumidificateur de chantier coûte chez Vernast ${f.drogers
          .map((t) => `${f.weekprijs(t)} pour ${le(t.short)}`)
          .join(", ")}, ${btw}. C'est chaque fois le prix journalier multiplié par sept jours. Vous calculez un pack de séchage complet avec ventilateur dans le calculateur.`,
      },
      {
        question: "Combien d'électricité consomme un déshumidificateur de chantier ?",
        answer: f.middenKw
          ? `${Le(f.midden.short)} absorbe au maximum ${f.kw(f.middenKw)} kW. S'il tourne une journée entière à pleine puissance, cela fait ${f.kwh(f.middenKw * 24)} par jour. En pratique, la consommation est plus faible, car l'hygrostat intégré met l'appareil au ralenti dès que l'humidité visée est atteinte. Multipliez par le prix du kWh de votre propre contrat pour connaître le coût.`
          : "Cela dépend de l'appareil : la puissance absorbée figure sur chaque page d'appareil. Multipliez-la par le nombre d'heures et par le prix du kWh de votre propre contrat.",
      },
      {
        question: "Est-ce moins cher si je loue plus longtemps ?",
        answer:
          "Le prix journalier reste le même, quelle que soit la durée de location ; aucun supplément ne s'ajoute pour une courte période. Ce que vous gagnez en louant plus longtemps, c'est la livraison : à partir de quatre semaines, la livraison et la reprise sont gratuites.",
      },
      {
        question: "Puis-je prolonger si le chantier prend du retard ?",
        answer:
          "Oui. Si le chantier prend du retard ou si la mesure n'est pas encore bonne, vous prolongez par semaine au même prix journalier ; vous recevez pour cela un lien par e-mail et n'avez pas besoin d'appeler. Si vous louez un pack de séchage calculé et que ce n'est pas encore sec malgré des conditions de séchage correctes, vous prolongez gratuitement : c'est la garantie de séchage.",
      },
      {
        question: "Quand la garantie de séchage est-elle comprise ?",
        answer:
          "La garantie de séchage est comprise dans un pack de séchage que Vernast calcule, livre et installe pour votre situation. Nous mesurons au début et à la fin. Si le matériau n'est pas sec dans la période calculée malgré des conditions de séchage correctes, vous continuez à louer les appareils gratuitement. La garantie ne s'applique pas aux appareils seuls que vous enlevez ou placez vous-même.",
      },
    ];
  },

  heroKick: "Tarifs",
  heroH1: "Louer un déshumidificateur de chantier : des prix avec garantie de séchage.",
  heroP:
    "Consultez le prix de location par jour ou par semaine, ou calculez un pack de séchage complet pour votre chantier. Pas de caution ni de frais cachés. Vous choisissez un pack que nous calculons, livrons et installons ? Notre garantie de séchage à 100 % est alors comprise.",
  berekenPrijs: "Calculez votre prix",
  heroAlt: "Louer sans souci chez Vernast : un seul prix, pas de caution",
  heroBadge: "Garantie de séchage 100 %",
  heroBadgeSub: "pour les packs calculés avec installation",

  keuzeKick: "D'abord ceci",
  keuzeH2: "Garantie de séchage ou simple location d'un appareil ?",
  keuzeLede:
    "Chez nous, les deux sont possibles. Un appareil seul a un prix journalier simple et vous le placez vous-même. Avec un pack de séchage, vous achetez plus de certitude : nous calculons la capacité et le temps de séchage, plaçons les appareils et mesurons le résultat. C'est pourquoi notre garantie de séchage ne s'applique qu'à ce pack complet.",
  pakketLab: "Ce que nous conseillons",
  pakketSub: "Pack de séchage",
  pakketH3: "Calculé, livré et mesuré",
  pakketP:
    "Le calculateur traduit votre surface, votre hauteur sous plafond et votre situation en un nombre d'appareils adéquat et une période de séchage calculée. Notre technicien installe tout, raccorde l'évacuation des condensats et mesure le taux d'humidité au début et à la fin.",
  pakketLijst: (pct: number): ReactNode => (
    <ul>
      <li><CheckIcon size={14} strokeWidth={3} /> <span><b>Garantie de séchage 100 % :</b> pas sec dans la période calculée ? Vous continuez à louer gratuitement.*</span></li>
      <li><CheckIcon size={14} strokeWidth={3} /> Mesure d'humidité au début et à la fin, noir sur blanc</li>
      <li><CheckIcon size={14} strokeWidth={3} /> Livraison, installation et reprise comprises</li>
      <li><CheckIcon size={14} strokeWidth={3} /> Appareil défectueux remplacé sous 24 heures</li>
      <li><CheckIcon size={14} strokeWidth={3} /> {pct} % de réduction en cas de paiement intégral en ligne</li>
    </ul>
  ),
  pakketBtn: "Calculez votre pack de séchage",
  losSub: "Appareil seul",
  losH3: "Vous placez, vous suivez",
  losP:
    "Un déshumidificateur, un ventilateur ou un chauffage de chantier, par jour ou par semaine. Pratique pour un petit espace, un deuxième appareil à côté d'un pack, ou si vous voulez garder le séchage en main. Vous l'enlevez à Aartselaar ou vous le faites livrer.",
  losLijst: (
    <ul>
      <li><CheckIcon size={14} strokeWidth={3} /> Un prix journalier fixe, pas de caution</li>
      <li><CheckIcon size={14} strokeWidth={3} /> Réduction à l'enlèvement dans notre entrepôt d'Aartselaar</li>
      <li><CheckIcon size={14} strokeWidth={3} /> Peut aussi s'ajouter à un pack</li>
      <li className="niet"><XIcon size={14} /> Pas de garantie de séchage : nous ne plaçons ni ne mesurons</li>
      <li className="niet"><XIcon size={14} /> Vous vérifiez vous-même si c'est sec</li>
    </ul>
  ),
  losBtn: "Voir la gamme",
  keuzeNote: (lp: Lp): ReactNode => (
    <>
      <b>Pourquoi cette limite existe.</b> Une garantie ne peut reposer que sur un calcul. Nous
      dimensionnons le pack selon le volume et la situation, l'installons nous-mêmes et fixons le
      point de départ et d'arrivée par une mesure ; « sec » est donc chez nous un résultat de
      mesure et non une impression. Avec un appareil seul, vous décidez vous-même de
      l'installation, et nous ne pouvons alors pas promettre le résultat. Vous trouverez les
      conditions complètes sur{" "}
      <Link to={lp("/drooggarantie")}>la page consacrée à la garantie de séchage</Link>.
    </>
  ),

  opbouwKick: "Composition du prix",
  opbouwH2: "Voici comment votre montant est établi.",
  opbouwLede:
    "Quatre éléments déterminent ce que vous payez : ce que vous louez, pour combien de temps, comment vous payez, et quelles options vous cochez vous-même. Tous les montants ci-dessous proviennent de la même liste de prix que celle utilisée par le paiement en ligne.",
  pakketprijsH3: "Pack de séchage : un prix fixe par situation",
  pakketprijsP:
    "Un pack combine déshumidificateur, ventilateur et éventuellement chauffages pour une surface, un type de travaux et une épaisseur donnés. Le prix est le prix journalier du pack multiplié par les jours de la période de location, et cette période découle de l'épaisseur de la chape ou du plafonnage.",
  inbegrepenZin: (lijst: string) => ` Compris : ${lijst}.`,
  losprijsH3: "Appareils seuls : prix journalier × jours",
  losprijsP: (naam: string, dag: string, tweeWeken: string) =>
    `Chaque appareil a un prix journalier. Le prix de location est ce prix journalier multiplié par le nombre de jours, sans supplément pour une courte période. Un ${naam} à ${dag} par jour coûte donc ${tweeWeken} pour deux semaines.`,
  onlineH3: (pct: number) => `${pct} % de réduction en cas de paiement en ligne`,
  onlineP: (pct: number, voorschot: string) =>
    `Si vous payez la location complète en ligne lors de la réservation, vous bénéficiez de ${pct} % de réduction sur le montant total. Vous pouvez aussi ne payer qu'une confirmation de commande fixe de ${voorschot} TVAC et régler le solde à l'installation ou à l'enlèvement.`,
  optiesH3: "Options que vous choisissez vous-même",
  dekking: (naam: string, prijs: string) => `Couverture « ${naam} » : ${prijs}`,
  pomp: (lp: Lp, prijs: string): ReactNode => (
    <>
      <Link to={lp("/verhuur/toebehoren/condenspomp")}>Pompe à condensats</Link> : {prijs} par déshumidificateur et par jour
    </>
  ),
  ladder: (prijs: string) => `Installation à l'étage par une échelle : ${prijs}`,
  optie: (naam: string, prijs: string, eenheid: string) => `${naam} : ${prijs} ${eenheid}`,
  opbouwNote: (incl: boolean, pct: number) =>
    `Tous les montants sont ${incl ? "TVA comprise" : "hors TVA"}, sauf mention contraire. La location est soumise à ${pct} % de TVA.`,

  vbKick: "Exemple de calcul",
  vbLede1: (weken: number) =>
    `Un pack chape sans chauffage, avec une période de location de ${weken} ${weken === 1 ? "semaine" : "semaines"}, et les options cochées d'office lors de la réservation. Vous pouvez désactiver ces options.`,
  vbLede2:
    "Ce montant provient du même module que celui avec lequel la page de réservation et Stripe calculent. Ce qui figure ici figurera aussi au paiement : pas de prix « à partir de » qui s'avère plus élevé par la suite.",
  vbBtn: "Calculez votre propre pack",
  vbCaption: "Exemple de calcul d'un pack de séchage pour une chape",
  vbPakket: (dagen: number) => `Pack (${dagen} jours)`,
  inbegrepen: "Compris",
  vbKorting: (pct: number) => `Réduction paiement en ligne (${pct} %)`,
  totaalExcl: "Total HTVA",
  btwRij: (pct: number) => `TVA ${pct} %`,
  totaalIncl: "Total TVAC",

  losKick: "Appareils seuls",
  losTabelH2: "Combien coûte un déshumidificateur de chantier par jour et par semaine ?",
  losTabelLede:
    "Les montants hebdomadaires sont simplement le prix journalier multiplié par le nombre de jours. Aucun supplément pour une courte période de location, et pas de barème que vous ne découvririez qu'au moment de payer.",
  losCaption: (incl: boolean) =>
    `Prix de location par déshumidificateur et par période de location, ${incl ? "TVA comprise" : "hors TVA"}`,
  thDroger: "Déshumidificateur",
  thPerDag: "Par jour",
  weken: (w: number) => `${w} ${w === 1 ? "semaine" : "semaines"}`,
  drogerSub: (liter: number, m3: number) => `${liter} L/jour · jusqu'à ${m3} m³`,
  losNote: (incl: boolean, pct: number) =>
    `Prix ${incl ? "TVAC" : "HTVA"}, ${pct} % de TVA d'application. La livraison et la reprise sont gratuites à partir d'une période de location de quatre semaines.`,
  extraKick: "Ventilateur et chauffage",
  extraH3: "Sécher plus vite, en location séparée.",
  extraLede:
    "Un déshumidificateur retire l'humidité de l'air ; un ventilateur veille à ce que de l'air sec arrive aussi jusqu'à la maçonnerie humide, et un chauffage maintient la pièce à température. Ensemble, ils font gagner des jours. Dans un pack calculé, ils sont déjà inclus là où votre situation l'exige.",
  perDag: "/jour",

  inbKick: "Compris dans un pack de séchage",
  inbH2: "Pas seulement des appareils, mais de la certitude.",
  inbLede:
    "Le prix du pack comprend l'accompagnement complet du début à la fin. Ces services ne figurent pas comme options séparées au paiement et n'apparaissent pas à l'improviste sur la facture.",
  inbegrepenLijst: [
    "Garantie de séchage 100 % sur les packs calculés",
    "Livraison à domicile par un technicien",
    "Reprise après utilisation",
    "Rallonge gratuite de 10 m, 2,5 mm²",
    "Explications lors de l'installation",
    "Mesure d'humidité au début et à la fin",
    "Aucune caution requise",
  ],
  garanties: [
    { title: "Appareil en panne ?", desc: "Nous le remplaçons le jour ouvrable suivant. Sans discussion, sans frais supplémentaires : vous louez un appareil qui fonctionne, pas simplement un appareil." },
    { title: "Toujours joignables", desc: "En semaine, le week-end et les jours fériés. Un séchage qui s'arrête le week-end, c'est une semaine perdue." },
    { title: "Une facture claire", desc: "À votre nom, avec la TVA séparée et les mesures jointes, prête pour votre dossier d'assurance ou votre comptable." },
  ],

  stroomKick: "Électricité",
  stroomH2: "Que consomme un déshumidificateur de chantier ?",
  stroomLede:
    "L'électricité est à votre charge, car les appareils fonctionnent sur votre raccordement. Vous trouverez ci-dessous la puissance absorbée par appareil et ce que cela représente à pleine puissance par jour et par semaine. C'est une limite supérieure : l'hygrostat intégré met un déshumidificateur au ralenti dès que l'humidité réglée est atteinte. Multipliez le nombre de kWh par le prix de votre propre contrat.",
  stroomCaption: "Consommation électrique par appareil à pleine puissance",
  stroomTh: ["Appareil", "Puissance", "Max. par jour", "Max. par semaine"],
  stroomNote: (lp: Lp): ReactNode => (
    <>
      <b>Et un chauffage de chantier ?</b> Il consomme bien plus qu'un déshumidificateur : sa
      puissance figure en kilowatts sur la page de l'appareil, et le thermostat le coupe dès que
      la pièce est à température. Dans un espace froid, cela vaut tout de même la peine, car sinon
      le déshumidificateur doit tourner bien plus longtemps. Plus de chiffres dans le guide sur{" "}
      <Link to={lp("/gids/stroomverbruik-bouwdroger")}>la consommation électrique d'un déshumidificateur</Link>.
    </>
  ),

  faqTitel: "Questions fréquentes sur le prix.",
  slotKick: "Prêt à réserver",
  slotH3: "Pas de caution, pas de frais cachés, livraison sous 24 heures.",
  slotP: (pct: number) =>
    `Le calculateur vous donne en quelques clics le prix complet pour votre surface, garantie de séchage comprise sur un pack calculé. Vous bénéficiez de ${pct} % de réduction si vous payez directement en ligne.`,
  slotAlt: "Technicien Vernast avec le terminal de paiement",

  verderTitel: "En savoir plus sur les prix et les packs",
  verderLezen: [
    {
      kop: "Ce que nos clients ont fait sécher",
      links: [
        { to: "/realisaties/bouwdroging-winkelpand", label: "Séchage de chantier accéléré dans un planning serré" },
        { to: "/realisaties/chape-pleisterwerk-drogen-hasselt", label: "Plafonnage et chape séchés plus vite à Hasselt" },
        { to: "/realisaties/kelder-en-kamer-drogen-antwerpen", label: "Cave et séjour asséchés après des dégâts des eaux" },
      ],
    },
    {
      kop: "Choisir et calculer",
      links: [
        { to: "/verhuur/calculator", label: "Calculez le prix de votre pack de séchage" },
        { to: "/machines", label: "De quel appareil avez-vous besoin ? Comparez la gamme" },
        { to: "/gids/stroomverbruik-bouwdroger", label: "Guide : combien coûte un déshumidificateur en électricité ?" },
        { to: "/gids/hoe-lang-moet-chape-drogen", label: "Guide : combien de temps sèche une chape ?" },
        { to: "/nieuwbouw-drogen", label: "Temps de séchage de la chape et du plafonnage" },
      ],
    },
    {
      kop: "Livraison dans votre région",
      links: [
        { to: "/bouwdroger-huren-antwerpen", label: "Louer un déshumidificateur dans la province d'Anvers" },
        { to: "/bouwdroger-huren-oost-vlaanderen", label: "Louer un déshumidificateur en Flandre orientale" },
      ],
    },
  ],

  contactKicker: "Une question sur le prix ?",
  contactTitel: "Vous préférez un prix sur mesure pour votre chantier ?",
  contactLede:
    "Donnez-nous votre surface et ce qui doit sécher. Vous recevez dans un délai d'un jour ouvrable une proposition avec le bon pack et la bonne durée.",
  contactOnderwerpen: [
    "Prix d'un pack de séchage",
    "Prix d'un appareil seul",
    "Question sur la garantie de séchage",
    "Facture et TVA",
    "Autre chose",
  ],
  contactPlaceholder:
    "P. ex. nouvelle construction de 160 m² avec une chape de 6 cm, livraison mi-décembre, merci pour une proposition de prix.",
};

export const COPY = { nl, fr } satisfies Copy<typeof nl>;

/**
 * Een regel uit `bookingSummary` op het scherm. De regels zelf blijven
 * Nederlands: ze gaan ook als metadata naar Stripe en het portaal. Dezelfde
 * omzetting als `regelInTaal` op de boekingspagina; staat hier apart zodat
 * /prijzen niet aan de boekingscopy hangt. Onbekend blijft Nederlands.
 */
export function rekenregelInTaal(regel: string, taal: Taal): string {
  if (taal !== "fr") return regel;
  const vast: Record<string, string> = {
    "Standaard dekking": "Couverture standard",
    "Vochtmeting bij start & oplevering": "Mesure d'humidité au début & à la fin",
    "Plaatsing verdieping via ladder": "Installation à l'étage par une échelle",
    "Plaatsing op verdieping (trap)": "Installation à l'étage (escalier)",
    "Zelf afhalen": "Enlèvement par vos soins",
  };
  if (vast[regel]) return vast[regel];
  const dekking = /^Dekking (.+)$/.exec(regel);
  if (dekking) return `Couverture ${vertaalPortaal(dekking[1], taal)}`;
  const pomp = /^(\d+)× condenspomp · (\d+) dagen$/.exec(regel);
  if (pomp) return `${pomp[1]}× pompe à condensats · ${pomp[2]} jours`;
  const extra = /^(.+) · (\d+) wk$/.exec(regel);
  if (extra) return `${vertaalPortaal(extra[1], taal)} · ${extra[2]} sem.`;
  return vertaalPortaal(regel, taal);
}

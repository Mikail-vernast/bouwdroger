import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { Copy } from "@/i18n/useTaal";
import type { GidsFaq } from "@/components/gids/GidsShell";
import type { Tarief } from "@/data/tarieflijst";
import { CONTACT } from "@/lib/site";

/**
 * Teksten van /luchtontvochtiger-huren in het Nederlands, het Frans en het Engels.
 *
 * Geen enkel bedrag staat hier overgetypt: de pagina geeft `prijs` en `btw`
 * mee. In het Nederlands is dat zoals altijd het bedrag excl. btw ("€ 9" +
 * "exclusief btw"); in het Frans volgt het de keuze particulier/bedrijf uit de
 * keuzepopup (`useToonBedrag`), met « TVAC » of « HTVA » als label.
 */
export interface Bedragen {
  /** Catalogusbedrag (excl. btw) zoals deze bezoeker het moet zien. */
  prijs: (excl: number) => string;
  /** Het btw-label dat bij `prijs` hoort. */
  btw: string;
}

export interface Cijfers {
  goedkoopste?: Tarief;
  goedkoopsteWeek: number | null;
  vanaf: number | null;
  litersMin: number | null;
  litersMax: number | null;
}

type Lp = (nlPad: string) => string;

/*
  « en Anvers » is fout Frans: elke provincie heeft haar eigen voorzetsel.
  Een onbekende naam valt terug op « en », wat voor de Vlaamse en Waalse
  gewesten met een samengestelde naam klopt.
*/
const VOORZETSEL_FR: Record<string, string> = {
  Anvers: "dans la province d'Anvers",
  Bruxelles: "à Bruxelles",
  Limbourg: "dans le Limbourg",
  Hainaut: "dans le Hainaut",
  Namur: "dans la province de Namur",
  Luxembourg: "dans la province de Luxembourg",
  Liège: "dans la province de Liège",
};
function inProvincie(naam: string): string {
  return VOORZETSEL_FR[naam] ?? `en ${naam}`;
}

const nl = {
  crumb: "Luchtontvochtiger huren",
  home: "Home",
  kick: "Verhuur · luchtontvochtigers",
  h1: "Luchtontvochtiger huren voor kelder, waterschade en nieuwbouw",
  intro: (c: Cijfers, b: Bedragen): ReactNode => (
    <p>
      Een vochtige kelder, een lek dat de vloer onder water zette of een nieuwbouw vol natte chape: een
      professionele luchtontvochtiger haalt het vocht eruit, dag en nacht.
      {c.litersMin && c.litersMax ? ` Onze condensontvochtigers verwijderen ${c.litersMin} tot ${c.litersMax} liter water per dag` : ""}
      {c.vanaf !== null ? `, te huur vanaf ${b.prijs(c.vanaf)} per dag ${b.btw}.` : "."} Zelf afhalen of laten
      leveren en installeren, in heel Vlaanderen.
    </p>
  ),
  faq: (c: Cijfers, b: Bedragen): GidsFaq[] => [
    ...(c.goedkoopste && c.goedkoopsteWeek !== null
      ? [
          {
            question: "Wat kost een ontvochtiger huren?",
            answer: `Onze luchtontvochtigers huurt u vanaf ${b.prijs(c.goedkoopste.perDay)} per dag ${b.btw}, voor de ${c.goedkoopste.short}. Een week kost daarmee ${b.prijs(c.goedkoopsteWeek)} ${b.btw}. De grotere modellen en alle huurperiodes staan op onze prijspagina.`,
          },
        ]
      : []),
    {
      question: "Is een luchtontvochtiger hetzelfde als een bouwdroger?",
      answer:
        "Een bouwdroger is een professionele luchtontvochtiger: hetzelfde principe, maar met veel meer capaciteit en gebouwd om dag en nacht te draaien op een werf. Onze toestellen zijn condensontvochtigers.",
    },
    {
      question: "Welke luchtontvochtiger heb ik nodig voor mijn kelder?",
      answer:
        "Dat hangt af van het volume van de kelder en hoe nat hij is. Kijk naar het bereik in m³ van elk toestel, of laat de Calculator het uitrekenen. Is de kelder kouder dan ongeveer 15 °C, zet er dan een bouwkachel bij: in de koude verliest een condensontvochtiger veel rendement.",
    },
    {
      question: "Kan ik een luchtontvochtiger zelf ophalen?",
      answer: `Ja. Losse toestellen haalt u af in ons magazijn aan de ${CONTACT.street} in ${CONTACT.city}, op werkdagen van 08:00 tot 17:00. Liever geleverd en geplaatst? Kies dan een droogpakket met levering en installatie.`,
    },
  ],
  catalogusNaam: "Luchtontvochtigers te huur",

  gKick: "Ons gamma",
  gH2: "Welke luchtontvochtiger huurt u?",
  /* `btw` blijft in het Nederlands ongebruikt: daar staat het label vast in de zin. */
  gLede: (_btw: string) =>
    "Drie condensontvochtigers, van een appartement tot een grote werf. De capaciteit is het maximum in liter per 24 uur uit de technische fiche; het bereik is het ruimtevolume waarvoor het toestel bedoeld is. Alle prijzen exclusief btw.",
  kaartCapaciteit: (liters: number | undefined, volume: number | undefined): ReactNode => (
    <>
      Tot <b>{liters} liter per dag</b> · ruimtes tot <b>{volume} m³</b>
    </>
  ),
  kaartPrijs: (dag: string, week: string): ReactNode => (
    <>
      {dag} <small>per dag · {week} per week</small>
    </>
  ),
  kaartMeer: (kort: string) => `Bekijk de ${kort}`,
  note: (lp: Lp): ReactNode => (
    <>
      <b>Niet zeker welk formaat?</b> De <Link to={lp("/verhuur/simulator")}>droogcalculator</Link> rekent uit
      hoeveel liter per dag uw ruimte nodig heeft. Wil u meteen een volledig pakket met ventilatoren en
      levering, gebruik dan de <Link to={lp("/verhuur/simulator")}>droogcalculator</Link>. Alle bedragen per
      periode staan op <Link to={lp("/prijzen")}>onze prijspagina</Link>.
    </>
  ),

  wH2: "Waarvoor huurt u een luchtontvochtiger?",
  kelderH3: "Een vochtige kelder",
  kelderP: (lp: Lp, kachelPad: string): ReactNode => (
    <>
      Kelders zijn koel en vaak slecht verlucht, waardoor de luchtvochtigheid hoog blijft en er een
      muffe geur of schimmel ontstaat. Een luchtontvochtiger haalt die vochtige lucht omlaag. Let op
      de temperatuur: onder ongeveer 15 °C werkt een condensontvochtiger duidelijk minder goed. In een
      koude kelder zetten we daarom een <Link to={lp(kachelPad)}>elektrische bouwkachel</Link>{" "}
      bij. Meer over kelders en schimmel leest u op <Link to={lp("/renovatie")}>vochtige kelder of
      schimmel drogen</Link>. Blijft een kelder telkens opnieuw nat, dan zit de oorzaak meestal in de
      muren zelf; ontvochtigen verhelpt dan het gevolg, niet de bron.
    </>
  ),
  waterH3: "Na waterschade",
  waterP: (lp: Lp): ReactNode => (
    <>
      Na een lek of overstroming telt elke dag. Hoe langer vloeren, muren en isolatie nat blijven, hoe
      groter de kans op schimmel en blijvende schade. Een luchtontvochtiger samen met één of meer
      ventilatoren droogt het snelst: de ventilator maakt het vocht los van de oppervlakken, de
      ontvochtiger haalt het uit de lucht. Zit het water onder een zwevende vloer of in een wand, lees
      dan <Link to={lp("/gids/condensdroger-of-adsorptiedroger")}>condensdroger of adsorptiedroger</Link>.
      Alles over de aanpak staat op <Link to={lp("/waterschade")}>drogen na waterschade</Link>.
    </>
  ),
  nieuwbouwH3: "Nieuwbouw en renovatie",
  nieuwbouwP: (lp: Lp): ReactNode => (
    <>
      Chape en pleisterwerk brengen honderden liters water in een woning. Zonder ontvochtiging droogt
      dat traag en kan de vloerlegger of schilder niet starten. Hoe lang dat duurt per dikte, staat in{" "}
      <Link to={lp("/gids/hoe-lang-moet-chape-drogen")}>hoe lang moet chape drogen</Link>; wat we op de werf
      doen, leest u op <Link to={lp("/nieuwbouw-drogen")}>chape en pleisterwerk drogen</Link>.
    </>
  ),

  proH2: "Professioneel of huishoudelijk?",
  proP: (lp: Lp): ReactNode => (
    <>
      Een luchtontvochtiger uit de winkel is gemaakt voor een slaapkamer of een wasplaats en haalt
      doorgaans maar een fractie op van wat een bouwdroger per dag verwijdert. Voor een kelder die echt
      nat is, voor waterschade of voor een nieuwbouw loopt zo'n toestel achter de feiten aan. Een
      professionele condensontvochtiger draait continu, voert het water af via een slang of condenspomp
      en is gemaakt voor weken aan een stuk. Wat hij aan stroom verbruikt, rekenen we voor in{" "}
      <Link to={lp("/gids/stroomverbruik-bouwdroger")}>stroomverbruik van een bouwdroger</Link>.
    </>
  ),

  afH2: "Zelf afhalen of laten leveren",
  afZelf: (lp: Lp): ReactNode => (
    <>
      <b>Zelf afhalen.</b> Losse toestellen reserveert u online en haalt u op in ons magazijn in{" "}
      {CONTACT.city}. Zie <Link to={lp("/verhuur/afhalen")}>losse toestellen huren en afhalen</Link>.
    </>
  ),
  afLever: (lp: Lp): ReactNode => (
    <>
      <b>Laten leveren en installeren.</b> Kiest u een droogpakket, dan brengen onze techniekers de
      toestellen binnen 24 uur, plaatsen ze ze, meten ze het vocht voor en na en halen ze alles weer
      op. Zie <Link to={lp("/levering")}>levering en installatie</Link>.
    </>
  ),

  regioH2: "Luchtontvochtiger huren in uw provincie",
  regioIntro: "We leveren in heel Vlaanderen. Per provincie:",
  regioLink: (naam: string) => `bouwdroger huren in ${naam}`,
  regioEn: " en ",
};

const fr: typeof nl = {
  crumb: "Location de déshumidificateur",
  home: "Accueil",
  kick: "Location · déshumidificateurs",
  h1: "Louer un déshumidificateur pour une cave, des dégâts des eaux ou une nouvelle construction",
  intro: (c: Cijfers, b: Bedragen): ReactNode => (
    <p>
      Une cave humide, une fuite qui a inondé le sol ou une nouvelle construction pleine de chape
      humide : un déshumidificateur professionnel en retire l'humidité, jour et nuit.
      {c.litersMin && c.litersMax ? ` Nos déshumidificateurs à condensation retirent ${c.litersMin} à ${c.litersMax} litres d'eau par jour` : ""}
      {c.vanaf !== null ? `, à louer à partir de ${b.prijs(c.vanaf)} par jour ${b.btw}.` : "."} À enlever vous-même
      ou livré et installé, dans toute la Flandre.
    </p>
  ),
  faq: (c: Cijfers, b: Bedragen): GidsFaq[] => [
    ...(c.goedkoopste && c.goedkoopsteWeek !== null
      ? [
          {
            question: "Combien coûte la location d'un déshumidificateur ?",
            answer: `Vous louez nos déshumidificateurs à partir de ${b.prijs(c.goedkoopste.perDay)} par jour ${b.btw}, pour le ${c.goedkoopste.short}. Une semaine coûte ainsi ${b.prijs(c.goedkoopsteWeek)} ${b.btw}. Les modèles plus grands et toutes les durées de location figurent sur notre page des prix.`,
          },
        ]
      : []),
    {
      question: "Un déshumidificateur est-il la même chose qu'un déshumidificateur de chantier ?",
      answer:
        "Un déshumidificateur de chantier est un déshumidificateur professionnel : le même principe, mais avec beaucoup plus de capacité et conçu pour tourner jour et nuit sur un chantier. Nos appareils sont des déshumidificateurs à condensation.",
    },
    {
      question: "Quel déshumidificateur me faut-il pour ma cave ?",
      answer:
        "Cela dépend du volume de la cave et de son degré d'humidité. Regardez la plage en m³ de chaque appareil, ou laissez le calculateur faire le calcul. Si la cave est plus froide qu'environ 15 °C, ajoutez un chauffage de chantier : au froid, un déshumidificateur à condensation perd beaucoup de rendement.",
    },
    {
      question: "Puis-je enlever moi-même un déshumidificateur ?",
      answer: `Oui. Vous enlevez les appareils à la pièce dans notre entrepôt, ${CONTACT.street} à ${CONTACT.city}, les jours ouvrables de 8 h à 17 h. Vous préférez une livraison et une installation ? Choisissez alors un pack de séchage avec livraison et installation.`,
    },
  ],
  catalogusNaam: "Déshumidificateurs à louer",

  gKick: "Notre gamme",
  gH2: "Quel déshumidificateur louer ?",
  gLede: (btw: string) =>
    `Trois déshumidificateurs à condensation, de l'appartement au grand chantier. La capacité est le maximum en litres par 24 heures selon la fiche technique ; la plage est le volume de pièce auquel l'appareil est destiné. Tous les prix ${btw}.`,
  kaartCapaciteit: (liters: number | undefined, volume: number | undefined): ReactNode => (
    <>
      Jusqu'à <b>{liters} litres par jour</b> · pièces jusqu'à <b>{volume} m³</b>
    </>
  ),
  kaartPrijs: (dag: string, week: string): ReactNode => (
    <>
      {dag} <small>par jour · {week} par semaine</small>
    </>
  ),
  kaartMeer: (kort: string) => `Voir le ${kort}`,
  note: (lp: Lp): ReactNode => (
    <>
      <b>Pas sûr du format ?</b> Le <Link to={lp("/verhuur/simulator")}>calculateur de séchage</Link> calcule
      combien de litres par jour votre pièce nécessite. Vous voulez directement un pack complet avec
      ventilateurs et livraison ? Utilisez alors le{" "}
      <Link to={lp("/verhuur/simulator")}>calculateur de séchage</Link>. Tous les montants par période
      figurent sur <Link to={lp("/prijzen")}>notre page des prix</Link>.
    </>
  ),

  wH2: "Pourquoi louer un déshumidificateur ?",
  kelderH3: "Une cave humide",
  kelderP: (lp: Lp, kachelPad: string): ReactNode => (
    <>
      Les caves sont fraîches et souvent mal ventilées : l'humidité de l'air y reste élevée, et une
      odeur de moisi ou des moisissures apparaissent. Un déshumidificateur fait baisser cette humidité.
      Attention à la température : sous environ 15 °C, un déshumidificateur à condensation fonctionne
      nettement moins bien. Dans une cave froide, nous ajoutons donc un{" "}
      <Link to={lp(kachelPad)}>chauffage de chantier électrique</Link>. Pour en savoir plus sur les
      caves et les moisissures, consultez{" "}
      <Link to={lp("/renovatie")}>sécher une cave humide ou des moisissures</Link>. Si une cave
      redevient humide à chaque fois, la cause se trouve généralement dans les murs eux-mêmes ;
      déshumidifier traite alors la conséquence, pas la source.
    </>
  ),
  waterH3: "Après des dégâts des eaux",
  waterP: (lp: Lp): ReactNode => (
    <>
      Après une fuite ou une inondation, chaque jour compte. Plus les sols, les murs et l'isolation
      restent humides longtemps, plus le risque de moisissures et de dégâts durables augmente. Un
      déshumidificateur associé à un ou plusieurs ventilateurs sèche le plus vite : le ventilateur
      détache l'humidité des surfaces, le déshumidificateur la retire de l'air. Si l'eau se trouve
      sous un plancher flottant ou dans une paroi, lisez{" "}
      <Link to={lp("/gids/condensdroger-of-adsorptiedroger")}>déshumidificateur à condensation ou à adsorption</Link>.
      Toute l'approche est expliquée sur{" "}
      <Link to={lp("/waterschade")}>sécher après des dégâts des eaux</Link>.
    </>
  ),
  nieuwbouwH3: "Nouvelle construction et rénovation",
  nieuwbouwP: (lp: Lp): ReactNode => (
    <>
      La chape et le plafonnage apportent des centaines de litres d'eau dans une habitation. Sans
      déshumidification, cette eau sèche lentement et le poseur de sol ou le peintre ne peut pas
      commencer. Combien de temps cela prend par épaisseur, vous le trouverez dans{" "}
      <Link to={lp("/gids/hoe-lang-moet-chape-drogen")}>combien de temps une chape doit-elle sécher</Link> ;
      ce que nous faisons sur le chantier, vous le lirez sur{" "}
      <Link to={lp("/nieuwbouw-drogen")}>sécher chape et plafonnage</Link>.
    </>
  ),

  proH2: "Professionnel ou domestique ?",
  proP: (lp: Lp): ReactNode => (
    <>
      Un déshumidificateur du commerce est conçu pour une chambre ou une buanderie et ne retire
      généralement qu'une fraction de ce qu'un déshumidificateur de chantier enlève par jour. Pour une
      cave vraiment humide, des dégâts des eaux ou une nouvelle construction, un tel appareil est
      toujours en retard. Un déshumidificateur professionnel à condensation tourne en continu, évacue
      l'eau par un tuyau ou une pompe à condensats et est conçu pour fonctionner des semaines
      d'affilée. Sa consommation électrique, nous la calculons dans{" "}
      <Link to={lp("/gids/stroomverbruik-bouwdroger")}>consommation électrique d'un déshumidificateur de chantier</Link>.
    </>
  ),

  afH2: "Enlever vous-même ou faire livrer",
  afZelf: (lp: Lp): ReactNode => (
    <>
      <b>Enlèvement sur place.</b> Vous réservez les appareils à la pièce en ligne et les enlevez dans
      notre entrepôt à {CONTACT.city}. Voir{" "}
      <Link to={lp("/verhuur/afhalen")}>louer et enlever des appareils à la pièce</Link>.
    </>
  ),
  afLever: (lp: Lp): ReactNode => (
    <>
      <b>Livraison et installation.</b> Si vous choisissez un pack de séchage, nos techniciens
      apportent les appareils dans les 24 heures, les installent, mesurent l'humidité avant et après,
      puis reprennent le tout. Voir <Link to={lp("/levering")}>livraison et installation</Link>.
    </>
  ),

  regioH2: "Louer un déshumidificateur dans votre province",
  regioIntro: "Nous livrons dans toute la Flandre. Par province :",
  regioLink: (naam: string) => `louer un déshumidificateur de chantier ${inProvincie(naam)}`,
  regioEn: " et ",
};

const en: typeof nl = {
  crumb: "Dehumidifier hire",
  home: "Home",
  kick: "Hire · dehumidifiers",
  h1: "Dehumidifier hire for cellars, water damage and new builds",
  intro: (c: Cijfers, b: Bedragen): ReactNode => (
    <p>
      A damp cellar, a leak that flooded the floor or a new build full of wet screed: a professional
      dehumidifier draws the moisture out, day and night.
      {c.litersMin && c.litersMax ? ` Our condensation dehumidifiers remove ${c.litersMin} to ${c.litersMax} litres of water a day` : ""}
      {c.vanaf !== null ? `, for hire from ${b.prijs(c.vanaf)} a day ${b.btw}.` : "."} Collect it yourself or have
      it delivered and installed, anywhere in Flanders.
    </p>
  ),
  faq: (c: Cijfers, b: Bedragen): GidsFaq[] => [
    ...(c.goedkoopste && c.goedkoopsteWeek !== null
      ? [
          {
            question: "How much does it cost to hire a dehumidifier?",
            answer: `You can hire our dehumidifiers from ${b.prijs(c.goedkoopste.perDay)} a day ${b.btw}, for the ${c.goedkoopste.short}. A week then costs ${b.prijs(c.goedkoopsteWeek)} ${b.btw}. The larger models and all hire periods are on our prices page.`,
          },
        ]
      : []),
    {
      question: "Is a dehumidifier the same as a construction dehumidifier?",
      answer:
        "A construction dehumidifier is a professional dehumidifier: the same principle, but with far more capacity and built to run day and night on a building site. Our units are condensation dehumidifiers.",
    },
    {
      question: "Which dehumidifier do I need for my cellar?",
      answer:
        "That depends on the volume of the cellar and how wet it is. Check the range in m³ of each unit, or let the Calculator work it out. If the cellar is colder than about 15 °C, add a site heater: in the cold, a condensation dehumidifier loses a lot of its efficiency.",
    },
    {
      question: "Can I collect a dehumidifier myself?",
      answer: `Yes. You collect individual units from our warehouse at ${CONTACT.street} in ${CONTACT.city}, on working days from 08:00 to 17:00. Would you rather have it delivered and set up? Then choose a drying package with delivery and installation.`,
    },
  ],
  catalogusNaam: "Dehumidifiers for hire",

  gKick: "Our range",
  gH2: "Which dehumidifier should you hire?",
  gLede: (btw: string) =>
    `Three condensation dehumidifiers, from a flat to a large building site. The capacity is the maximum in litres per 24 hours from the technical data sheet; the range is the room volume the unit is intended for. All prices ${btw}.`,
  kaartCapaciteit: (liters: number | undefined, volume: number | undefined): ReactNode => (
    <>
      Up to <b>{liters} litres a day</b> · rooms up to <b>{volume} m³</b>
    </>
  ),
  kaartPrijs: (dag: string, week: string): ReactNode => (
    <>
      {dag} <small>a day · {week} a week</small>
    </>
  ),
  kaartMeer: (kort: string) => `View the ${kort}`,
  note: (lp: Lp): ReactNode => (
    <>
      <b>Not sure which size?</b> The <Link to={lp("/verhuur/simulator")}>drying calculator</Link> works out
      how many litres a day your space needs. If you want a complete package with fans and delivery
      straight away, use the <Link to={lp("/verhuur/simulator")}>drying calculator</Link>. All amounts per
      period are on <Link to={lp("/prijzen")}>our prices page</Link>.
    </>
  ),

  wH2: "What do you hire a dehumidifier for?",
  kelderH3: "A damp cellar",
  kelderP: (lp: Lp, kachelPad: string): ReactNode => (
    <>
      Cellars are cool and often poorly ventilated, so the humidity stays high and a musty smell or
      mould develops. A dehumidifier brings that humidity down. Watch the temperature: below about
      15 °C a condensation dehumidifier works noticeably less well. In a cold cellar we therefore add
      an <Link to={lp(kachelPad)}>electric site heater</Link>. You can read more about cellars and
      mould on <Link to={lp("/renovatie")}>drying a damp cellar or mould</Link>. If a cellar keeps
      getting wet again, the cause usually lies in the walls themselves; dehumidifying then treats the
      effect, not the source.
    </>
  ),
  waterH3: "After water damage",
  waterP: (lp: Lp): ReactNode => (
    <>
      After a leak or flood, every day counts. The longer floors, walls and insulation stay wet, the
      greater the risk of mould and lasting damage. A dehumidifier combined with one or more fans dries
      fastest: the fan releases the moisture from the surfaces, the dehumidifier takes it out of the
      air. If the water is under a floating floor or inside a wall, read{" "}
      <Link to={lp("/gids/condensdroger-of-adsorptiedroger")}>condensation or desiccant dehumidifier</Link>.
      The whole approach is explained on <Link to={lp("/waterschade")}>drying after water damage</Link>.
    </>
  ),
  nieuwbouwH3: "New builds and renovation",
  nieuwbouwP: (lp: Lp): ReactNode => (
    <>
      Screed and plasterwork bring hundreds of litres of water into a home. Without dehumidification it
      dries slowly and the floor layer or painter cannot start. How long that takes per thickness is
      set out in <Link to={lp("/gids/hoe-lang-moet-chape-drogen")}>how long does screed take to dry</Link>;
      what we do on site is described on{" "}
      <Link to={lp("/nieuwbouw-drogen")}>drying screed and plasterwork</Link>.
    </>
  ),

  proH2: "Professional or household?",
  proP: (lp: Lp): ReactNode => (
    <>
      A dehumidifier from the shop is made for a bedroom or a utility room and usually removes only a
      fraction of what a construction dehumidifier extracts in a day. For a cellar that is really wet,
      for water damage or for a new build, such a unit is always playing catch-up. A professional
      condensation dehumidifier runs continuously, drains the water through a hose or condensate pump
      and is built to run for weeks on end. What it uses in electricity, we work out in{" "}
      <Link to={lp("/gids/stroomverbruik-bouwdroger")}>power consumption of a construction dehumidifier</Link>.
    </>
  ),

  afH2: "Collect it yourself or have it delivered",
  afZelf: (lp: Lp): ReactNode => (
    <>
      <b>Collect it yourself.</b> You book individual units online and collect them from our warehouse in{" "}
      {CONTACT.city}. See <Link to={lp("/verhuur/afhalen")}>hiring and collecting individual units</Link>.
    </>
  ),
  afLever: (lp: Lp): ReactNode => (
    <>
      <b>Delivery and installation.</b> If you choose a drying package, our technicians bring the units
      within 24 hours, set them up, take moisture readings before and after, and collect everything
      again afterwards. See <Link to={lp("/levering")}>delivery and installation</Link>.
    </>
  ),

  regioH2: "Dehumidifier hire in your province",
  regioIntro: "We deliver throughout Flanders. By province:",
  regioLink: (naam: string) => `construction dehumidifier hire in ${naam}`,
  regioEn: " and ",
};

export const COPY = { nl, fr, en } satisfies Copy<typeof nl>;

import type { ReactNode } from "react";
import type { Copy } from "@/i18n/useTaal";

/**
 * Teksten van /levering per taal. Apart van de pagina omdat ze bijna de helft
 * van het bestand uitmaken; de opmaak (klassen, animaties, SVG's) blijft in
 * `LeveringPage.tsx`.
 *
 * Zinnen met een link erin zijn functies die `lp` (lokaal pad) en de stijl van
 * de link krijgen, zodat de link in elke taal naar de pagina in die taal wijst.
 */

type Lp = (nlPad: string) => string;
type Stijl = { color: string; fontWeight: number };

export interface LeveringTekst {
  kruimel: string;
  hero: { kick: string; h1: string; p1: string; p2: string; cta: string; ctaUitleg: string; imgAlt: string; badge: string; badgeSub: string };
  trk: { kick: string; h2: string; lede: string; stops: { tm: string; h3: string; p: string }[] };
  ins: {
    kick: string;
    h2: string;
    lede: string;
    tabs: { nr: string; titel: string }[];
    p1: { h3: string; pt: (lp: Lp, s: Stijl) => ReactNode; chips: string[]; mt: string; zones: [string, string] };
    p2: { h3: string; pt: string; chips: string[]; mt: string; hoek: string };
    p3: { h3: string; badge: string; pt: (lp: Lp, s: Stijl, pomp: string) => ReactNode; chips: string[]; mt: string; cap: string };
    p4: { h3: string; pt: string; chips: string[]; mt: string; checks: string[] };
    p5: { h3: string; pt: (lp: Lp, s: Stijl) => ReactNode; chips: string[]; mt: string; rows: string[] };
  };
  ladder: {
    kick: string;
    h2: string;
    lede: string;
    inbegrepen: string;
    toeslag: string;
    perVerdieping: string;
    trap: { h3: string; p: string };
    lift: { h3: string; p: string };
    ladder: { h3: string; p: ReactNode };
  };
  rol: {
    kick: string;
    h2: string;
    u: { tag: string; h3: string; li: string[]; vf: string };
    wij: { tag: string; h3: string; li: string[]; vf: (lp: Lp) => ReactNode };
    note: (lp: Lp) => ReactNode;
    imgAlt: string;
  };
  rood: { kick: string; h2: string; lede: string; kaarten: { b: string; p: string }[]; note: (lp: Lp) => ReactNode; imgAlt: string };
  form: {
    kick: string;
    h2: string;
    lede: string;
    voornaam: string;
    naam: string;
    naamPh: string;
    email: string;
    emailPh: string;
    telefoon: string;
    vraag: string;
    /** `waarde` gaat als onderwerp naar het portaal en blijft dus Nederlands. */
    onderwerpen: { waarde: string; label: string }[];
    situatie: string;
    situatiePh: string;
    privacy: string;
    versturen: string;
    bezig: string;
    klaarTitel: string;
    klaarTekst: string;
  };
}

const ONDERWERPEN = [
  "Vraag over levering of installatie",
  "Advies over het juiste pakket",
  "Vraag over prijzen of levering",
  "Iets anders",
];

export const LEVERING_COPY = {
  nl: {
    kruimel: "Levering & installatie",
    hero: {
      kick: "Levering & installatie",
      h1: "Geleverd én geïnstalleerd. Klaar om te drogen.",
      p1: "Een Vernast-technieker levert uw droogpakket en installeert de volledige opstelling, berekend op uw woning. ",
      p2: "U hoeft niets te tillen, te plaatsen of in te stellen.",
      cta: "Bereken uw droogpakket",
      ctaUitleg: "Zo verloopt de installatie",
      imgAlt: "Vernast technieker met kabels, duim omhoog",
      badge: "Binnen 24 uur geplaatst",
      badgeSub: "Geleverd én geïnstalleerd",
    },
    trk: {
      kick: "Uw leverdag",
      h2: "Volg uw levering, van bevestiging tot draaiende opstelling.",
      lede: "U weet op elk moment waar u aan toe bent: één duidelijke afspraak, een seintje onderweg en een opstelling die draait vóór wij vertrekken.",
      stops: [
        { tm: "Na uw boeking", h3: "Afspraak bevestigd", p: "Bevestiging met leverdatum en tijdslot, plus agenda-uitnodiging." },
        { tm: "30 min vooraf", h3: "Sms: onderweg", p: "De technieker stuurt een berichtje. Geen hele dag thuiszitten." },
        { tm: "Bij aankomst", h3: "Controle & nulmeting", p: "We overlopen de ruimtes en meten het startvochtgehalte." },
        { tm: "Ter plaatse", h3: "Installatie", p: "Plaatsen, verdelen, afvoer aansluiten en instellen." },
        { tm: "Voor vertrek", h3: "Opstart & uitleg", p: "Alles draait, u krijgt korte uitleg. De droging is gestart." },
      ],
    },
    ins: {
      kick: "De installatie",
      h2: "Wat onze technieker doet, stap voor stap.",
      lede: "Niet zoveel mogelijk apparatuur plaatsen, maar de capaciteit zo efficiënt mogelijk inzetten. Klik door de stappen of kijk gewoon mee.",
      tabs: [
        { nr: "Stap 01", titel: "Controle & droogzones" },
        { nr: "Stap 02", titel: "Plaatsing & circulatie" },
        { nr: "Stap 03", titel: "Condensafvoer" },
        { nr: "Stap 04", titel: "Stroom & luchtstroming" },
        { nr: "Stap 05", titel: "Controle & opstart" },
      ],
      p1: {
        h3: "Eerst kijken, dan plaatsen.",
        pt: (lp, s) => (
          <>
            We overlopen de woning en verdelen ze in droogzones: welke ruimtes moeten drogen, hoe zijn ze verbonden en waar zit het meeste vocht? Daarna controleren we elektriciteit, afvoermogelijkheden en omstandigheden. Wijkt de situatie sterk af van uw{" "}
            <a href={lp("/verhuur/simulator")} style={s}>berekening</a>, dan bespreken we dat eerst.
          </>
        ),
        chips: ["Droogzones", "Elektriciteit", "Afvoer", "Temperatuur"],
        mt: "Capaciteit per droogzone",
        zones: ["Woonkamer · keuken · hal", "Badkamer · slaapkamers"],
      },
      p2: {
        h3: "De juiste plek, de juiste luchtstroom.",
        pt: "Toestellen komen waar ze vrij kunnen aanzuigen en uitblazen, nooit strak tegen muren of obstakels. In plaats van één zwaar toestel centraal verdelen we meerdere toestellen en luchtverplaatsers over de zones, zodat elke ruimte gelijkmatig droogt.",
        chips: ["Vrije aanzuig", "Verdeelde capaciteit", "Gelijkmatig drogen"],
        mt: "Droge lucht bereikt de hele zone",
        hoek: "verste hoek",
      },
      p3: {
        h3: "Water rechtstreeks naar de afvoer. ",
        badge: "Optioneel · aangeraden",
        pt: (lp, s, pomp) => (
          <>
            Kiest u de <a href={lp("/verhuur/toebehoren/condenspomp")} style={s}>condenspomp</a> ({pomp} per bouwdroger per dag), dan sluiten we een continue condensafvoer aan naar een afvoer, douche, lavabo of vloerput. Zo hoeft u geen reservoirs te legen en draait het toestel dag en nacht door, ook in het weekend. Zonder pomp leegt u het reservoir zelf gemiddeld 2 keer per dag. Optioneel, maar aangeraden: u voegt de pomp toe tijdens het{" "}
            <a href={lp("/verhuur/simulator")} style={s}>berekenen van uw pakket</a>.
          </>
        ),
        chips: ["Geen kuip legen", "24/7 doorwerken", "Proper condenswater"],
        mt: "Continue condensafvoer",
        cap: "Het condenswater loopt rechtstreeks weg. U kijkt ernaar, meer niet.",
      },
      p4: {
        h3: "Stabiele stroom, bewegende lucht.",
        pt: "Bouwdrogers draaien lange periodes continu en vragen een stabiele voeding; bij meerdere toestellen verdelen we ze over verschillende stroomkringen. Luchtverplaatsers halen vochtige lucht uit moeilijk bereikbare zones. Temperatuur, circulatie en ontvochtiging bepalen samen de efficiëntie.",
        chips: ["Aparte stroomkringen", "Ventilatoren", "Geen dode hoeken"],
        mt: "Circulatie in de zone",
        checks: ["Stabiele voeding gecontroleerd", "Kringen verdeeld", "Ventilator op de juiste stand"],
      },
      p5: {
        h3: "Pas als alles draait, vertrekken we.",
        pt: (lp, s) => (
          <>
            We controleren de volledige opstelling, stellen de streefvochtigheid in en bespreken welke ramen en deuren open of dicht blijven. U krijgt een korte uitleg, en daarna doet de opstelling het werk. Vragen tijdens de huur? De{" "}
            <a href={lp("/klantservice")} style={s}>klantenservice</a> staat klaar.
          </>
        ),
        chips: ["Streefwaarde ingesteld", "Korte uitleg", "Droging gestart"],
        mt: "Laatste controle",
        rows: ["Opstelling gecontroleerd", "Alle toestellen draaien", "Condensafvoer loopt", "Instellingen juist", "Uitleg gegeven · droging gestart"],
      },
    },
    ladder: {
      kick: "Bereikbaarheid",
      h2: "Trap, lift of ladder? Meld het vooraf.",
      lede: "Verdiepingen zijn inbegrepen zolang ze bereikbaar zijn via een trap of lift. Alleen wanneer toestellen via een ladder naar boven moeten, rekenen we een toeslag: dat vraagt extra mankracht en materiaal.",
      inbegrepen: "Inbegrepen",
      toeslag: "Toeslag",
      perVerdieping: "per verdieping",
      trap: { h3: "Via de trap", p: "Onze techniekers dragen de toestellen via de trap naar elke verdieping, zonder meerkost." },
      lift: { h3: "Via de lift", p: "Is er een lift aanwezig, dan plaatsen we op elke verdieping zonder meerkost." },
      ladder: {
        h3: "Via een ladder",
        p: (
          <>
            Nog geen trap in de woning? <b>Meld dit altijd op voorhand</b>, zodat we de juiste installatie en mankracht voorzien.
          </>
        ),
      },
    },
    rol: {
      kick: "Duidelijke rolverdeling",
      h2: "Wat u voorziet. Wat wij doen.",
      u: {
        tag: "U voorziet",
        h3: "Zo verloopt de installatie vlot.",
        li: [
          "Alle te drogen ruimtes zijn vrij, ontruimd en beschikbaar",
          "Werkende elektriciteit en stopcontacten",
          "Indien beschikbaar: een werkende waterafvoer",
          "Vrije ruimte om de toestellen te plaatsen",
        ],
        vf: "Bouwmateriaal, afval of obstakels beperken de luchtcirculatie.",
      },
      wij: {
        tag: "Wij doen",
        h3: "U hoeft geen droogspecialist te zijn.",
        li: [
          "Het juiste toestel en de juiste capaciteit bepalen",
          "Plaatsing en verdeling over de ruimtes",
          "Condensafvoer aansluiten en instellingen selecteren",
          "Controle en opstart van de opstelling",
        ],
        vf: (lp) => (
          <>
            Vragen tijdens de huur? De{" "}
            <a href={lp("/klantservice")} style={{ color: "var(--red)", fontWeight: 600 }}>klantenservice</a> staat klaar.
          </>
        ),
      },
      note: (lp) => (
        <>
          <b>Tijdens de droogperiode:</b> laat de opstelling ongewijzigd, houd ramen dicht en schakel toestellen niet uit. Verandert er toch iets? Meld het via de{" "}
          <a href={lp("/klantservice")}>klantenservice</a>, zo blijft uw <a href={lp("/drooggarantie")}>Drooggarantie</a> gelden.*
        </>
      ),
      imgAlt: "Vernast technieker bij de bestelwagen",
    },
    rood: {
      kick: "Rode kaart",
      h2: "Dit doet u beter niet tijdens de droging.",
      lede: "Goedbedoeld, maar nefast voor het droogproces, en soms zelfs voor het toestel. Deze klassiekers zien we vaak, en ze kosten u droogtijd:",
      kaarten: [
        { b: "Ramen of buitendeuren openzetten", p: "U laat vochtige buitenlucht binnen en de installatie moet die extra vracht opnieuw verwerken. De woning blijft dicht tijdens de droging." },
        { b: "Bouwdrogers zomaar afzetten", p: "'s Nachts of \"even tijdens het werken\" uitschakelen legt de droging stil en verlengt de huurperiode. De toestellen zijn gemaakt om continu te draaien." },
        { b: "Een bouwdroger plat leggen of kantelen", p: "In het koelcircuit zit koelmiddel: plat leggen beschadigt de compressor. Toch plat vervoerd? Laat het toestel 24 uur rechtop staan vóór de opstart." },
        { b: "Toestellen verplaatsen of dicht tegen de muur schuiven", p: "De opstelling is berekend per droogzone. Verplaatsen of de aanzuig blokkeren verstoort de circulatie, overleg eerst even met ons." },
        { b: "Binnendeuren sluiten die open moeten blijven", p: "Droge lucht moet elke ruimte bereiken. Onze technieker zegt bij de opstart welke deuren open of dicht horen." },
        { b: "Nieuwe natte materialen binnenbrengen", p: "Vers pleisterwerk of een natte chape erbij betekent een nieuwe vochtvracht, en een langere droogtijd. Meld het, dan rekenen we het pakket bij." },
      ],
      note: (lp) => (
        <>
          <b>Twijfelt u ergens over?</b> Eén belletje naar de <a href={lp("/klantservice")}>klantenservice</a> voorkomt dagen vertraging, en zo blijft uw{" "}
          <a href={lp("/drooggarantie")}>Drooggarantie</a> gewoon gelden.*
        </>
      ),
      imgAlt: "Rode kaart voor deze fouten tijdens de droging",
    },
    form: {
      kick: "Nog een vraag hierover?",
      h2: "Onze droogspecialisten denken graag mee.",
      lede: "Twijfelt u over de juiste aanpak voor uw project? Stel uw vraag, u krijgt binnen één werkdag antwoord van een specialist.",
      voornaam: "Voornaam",
      naam: "Naam",
      naamPh: "Achternaam",
      email: "E-mail",
      emailPh: "naam@voorbeeld.be",
      telefoon: "Telefoon",
      vraag: "Waarover gaat uw vraag?",
      onderwerpen: ONDERWERPEN.map((o) => ({ waarde: o, label: o })),
      situatie: "Uw situatie",
      situatiePh: "Bv. nieuwbouw 140 m², chape geplaatst vorige week, wanneer kan de vloerder starten?",
      privacy: "Wij gebruiken uw gegevens enkel om uw vraag te beantwoorden.",
      versturen: "Verstuur uw vraag",
      bezig: "Versturen…",
      klaarTitel: "Vraag verzonden",
      klaarTekst: "Bedankt! Een droogspecialist neemt binnen één werkdag contact met u op.",
    },
  },
  fr: {
    kruimel: "Livraison et installation",
    hero: {
      kick: "Livraison et installation",
      h1: "Livré et installé. Prêt à sécher.",
      p1: "Un technicien Vernast livre votre pack de séchage et installe l'ensemble du dispositif, calculé pour votre habitation. ",
      p2: "Vous n'avez rien à soulever, à placer ni à régler.",
      cta: "Calculez votre pack de séchage",
      ctaUitleg: "Le déroulement de l'installation",
      imgAlt: "Technicien Vernast avec des câbles, pouce levé",
      badge: "Installé sous 24 heures",
      badgeSub: "Livré et installé",
    },
    trk: {
      kick: "Votre jour de livraison",
      h2: "Suivez votre livraison, de la confirmation au dispositif en marche.",
      lede: "Vous savez à tout moment où vous en êtes : un rendez-vous clair, un message quand nous sommes en route et un dispositif qui tourne avant notre départ.",
      stops: [
        { tm: "Après votre réservation", h3: "Rendez-vous confirmé", p: "Confirmation avec date de livraison et créneau horaire, plus invitation d'agenda." },
        { tm: "30 min avant", h3: "SMS : en route", p: "Le technicien vous envoie un message. Inutile de rester chez vous toute la journée." },
        { tm: "À l'arrivée", h3: "Contrôle et mesure initiale", p: "Nous parcourons les pièces et mesurons le taux d'humidité de départ." },
        { tm: "Sur place", h3: "Installation", p: "Placer, répartir, raccorder l'évacuation et régler." },
        { tm: "Avant le départ", h3: "Mise en marche et explications", p: "Tout tourne, vous recevez une brève explication. Le séchage a commencé." },
      ],
    },
    ins: {
      kick: "L'installation",
      h2: "Ce que fait notre technicien, étape par étape.",
      lede: "Pas placer un maximum d'appareils, mais utiliser la capacité le plus efficacement possible. Parcourez les étapes ou regardez simplement.",
      tabs: [
        { nr: "Étape 01", titel: "Contrôle et zones de séchage" },
        { nr: "Étape 02", titel: "Placement et circulation" },
        { nr: "Étape 03", titel: "Évacuation des condensats" },
        { nr: "Étape 04", titel: "Courant et flux d'air" },
        { nr: "Étape 05", titel: "Contrôle et mise en marche" },
      ],
      p1: {
        h3: "D'abord observer, ensuite placer.",
        pt: (lp, s) => (
          <>
            Nous parcourons l'habitation et la divisons en zones de séchage&nbsp;: quelles pièces doivent sécher, comment sont-elles reliées et où se trouve le plus d'humidité&nbsp;? Ensuite, nous contrôlons l'électricité, les possibilités d'évacuation et les conditions. Si la situation s'écarte fortement de votre{" "}
            <a href={lp("/verhuur/simulator")} style={s}>calcul</a>, nous en discutons d'abord.
          </>
        ),
        chips: ["Zones de séchage", "Électricité", "Évacuation", "Température"],
        mt: "Capacité par zone de séchage",
        zones: ["Séjour · cuisine · hall", "Salle de bains · chambres"],
      },
      p2: {
        h3: "Le bon endroit, le bon flux d'air.",
        pt: "Les appareils sont placés là où ils peuvent aspirer et souffler librement, jamais collés contre un mur ou un obstacle. Plutôt qu'un seul gros appareil au centre, nous répartissons plusieurs appareils et brasseurs d'air sur les zones, pour que chaque pièce sèche de manière homogène.",
        chips: ["Aspiration libre", "Capacité répartie", "Séchage homogène"],
        mt: "L'air sec atteint toute la zone",
        hoek: "coin le plus éloigné",
      },
      p3: {
        h3: "L'eau va directement à l'évacuation. ",
        badge: "En option · recommandé",
        pt: (lp, s, pomp) => (
          <>
            Si vous choisissez la <a href={lp("/verhuur/toebehoren/condenspomp")} style={s}>pompe à condensats</a> ({pomp} par déshumidificateur par jour), nous raccordons une évacuation continue des condensats vers un égout, une douche, un lavabo ou un siphon de sol. Vous n'avez plus de réservoir à vider et l'appareil tourne jour et nuit, même le week-end. Sans pompe, vous videz vous-même le réservoir en moyenne 2 fois par jour. En option, mais recommandé&nbsp;: vous ajoutez la pompe lors du{" "}
            <a href={lp("/verhuur/simulator")} style={s}>calcul de votre pack</a>.
          </>
        ),
        chips: ["Pas de bac à vider", "Fonctionne 24 h/24", "Eau de condensation propre"],
        mt: "Évacuation continue des condensats",
        cap: "L'eau de condensation s'écoule directement. Vous regardez, rien de plus.",
      },
      p4: {
        h3: "Courant stable, air en mouvement.",
        pt: "Les déshumidificateurs de chantier tournent en continu pendant de longues périodes et demandent une alimentation stable ; avec plusieurs appareils, nous les répartissons sur différents circuits. Les brasseurs d'air chassent l'air humide des zones difficiles d'accès. Température, circulation et déshumidification déterminent ensemble l'efficacité.",
        chips: ["Circuits séparés", "Ventilateurs", "Pas d'angles morts"],
        mt: "Circulation dans la zone",
        checks: ["Alimentation stable contrôlée", "Circuits répartis", "Ventilateur sur la bonne vitesse"],
      },
      p5: {
        h3: "Nous partons seulement quand tout tourne.",
        pt: (lp, s) => (
          <>
            Nous contrôlons l'ensemble du dispositif, réglons l'humidité cible et indiquons quelles fenêtres et portes restent ouvertes ou fermées. Vous recevez une brève explication, puis le dispositif fait le travail. Des questions pendant la location&nbsp;? Le{" "}
            <a href={lp("/klantservice")} style={s}>service client</a> est à votre disposition.
          </>
        ),
        chips: ["Valeur cible réglée", "Brève explication", "Séchage lancé"],
        mt: "Dernier contrôle",
        rows: ["Dispositif contrôlé", "Tous les appareils tournent", "L'évacuation des condensats fonctionne", "Réglages corrects", "Explications données · séchage lancé"],
      },
    },
    ladder: {
      kick: "Accessibilité",
      h2: "Escalier, ascenseur ou échelle ? Signalez-le à l'avance.",
      lede: "Les étages sont compris tant qu'ils sont accessibles par un escalier ou un ascenseur. Ce n'est que lorsque les appareils doivent monter par une échelle que nous facturons un supplément : cela demande du personnel et du matériel en plus.",
      inbegrepen: "Compris",
      toeslag: "Supplément",
      perVerdieping: "par étage",
      trap: { h3: "Par l'escalier", p: "Nos techniciens portent les appareils par l'escalier jusqu'à chaque étage, sans supplément." },
      lift: { h3: "Par l'ascenseur", p: "S'il y a un ascenseur, nous installons à chaque étage sans supplément." },
      ladder: {
        h3: "Par une échelle",
        p: (
          <>
            Pas encore d'escalier dans l'habitation&nbsp;? <b>Signalez-le toujours à l'avance</b>, afin que nous prévoyions la bonne installation et le personnel nécessaire.
          </>
        ),
      },
    },
    rol: {
      kick: "Une répartition claire des rôles",
      h2: "Ce que vous prévoyez. Ce que nous faisons.",
      u: {
        tag: "Vous prévoyez",
        h3: "Ainsi, l'installation se déroule sans accroc.",
        li: [
          "Toutes les pièces à sécher sont libres, vidées et accessibles",
          "Une électricité et des prises qui fonctionnent",
          "Si disponible : une évacuation d'eau qui fonctionne",
          "De l'espace libre pour placer les appareils",
        ],
        vf: "Matériaux de construction, déchets ou obstacles limitent la circulation de l'air.",
      },
      wij: {
        tag: "Nous faisons",
        h3: "Pas besoin d'être un spécialiste du séchage.",
        li: [
          "Déterminer le bon appareil et la bonne capacité",
          "Placement et répartition dans les pièces",
          "Raccorder l'évacuation des condensats et choisir les réglages",
          "Contrôle et mise en marche du dispositif",
        ],
        vf: (lp) => (
          <>
            Des questions pendant la location&nbsp;? Le{" "}
            <a href={lp("/klantservice")} style={{ color: "var(--red)", fontWeight: 600 }}>service client</a> est à votre disposition.
          </>
        ),
      },
      note: (lp) => (
        <>
          <b>Pendant la période de séchage&nbsp;:</b> ne modifiez pas le dispositif, gardez les fenêtres fermées et n'éteignez pas les appareils. Un changement malgré tout&nbsp;? Signalez-le via le{" "}
          <a href={lp("/klantservice")}>service client</a>, ainsi votre <a href={lp("/drooggarantie")}>garantie de séchage</a> reste valable.*
        </>
      ),
      imgAlt: "Technicien Vernast à côté de la camionnette",
    },
    rood: {
      kick: "Carton rouge",
      h2: "Mieux vaut éviter ceci pendant le séchage.",
      lede: "Bien intentionné, mais néfaste pour le séchage, et parfois même pour l'appareil. Nous voyons souvent ces classiques, et ils vous coûtent du temps de séchage :",
      kaarten: [
        { b: "Ouvrir les fenêtres ou les portes extérieures", p: "Vous faites entrer de l'air extérieur humide et l'installation doit traiter cette charge supplémentaire. L'habitation reste fermée pendant le séchage." },
        { b: "Éteindre les déshumidificateurs sans raison", p: "Les couper la nuit ou « juste le temps de travailler » met le séchage à l'arrêt et prolonge la location. Les appareils sont faits pour tourner en continu." },
        { b: "Coucher ou incliner un déshumidificateur", p: "Le circuit de refroidissement contient du fluide frigorigène : coucher l'appareil endommage le compresseur. Transporté couché malgré tout ? Laissez l'appareil 24 heures debout avant de le mettre en marche." },
        { b: "Déplacer les appareils ou les pousser contre le mur", p: "Le dispositif est calculé par zone de séchage. Déplacer un appareil ou bloquer l'aspiration perturbe la circulation, parlez-en d'abord avec nous." },
        { b: "Fermer des portes intérieures qui doivent rester ouvertes", p: "L'air sec doit atteindre chaque pièce. À la mise en marche, notre technicien indique quelles portes restent ouvertes ou fermées." },
        { b: "Apporter de nouveaux matériaux humides", p: "Un plafonnage frais ou une chape humide en plus, c'est une nouvelle charge d'humidité et un séchage plus long. Signalez-le, nous adaptons le pack." },
      ],
      note: (lp) => (
        <>
          <b>Un doute&nbsp;?</b> Un simple appel au <a href={lp("/klantservice")}>service client</a> évite des jours de retard, et votre{" "}
          <a href={lp("/drooggarantie")}>garantie de séchage</a> reste valable.*
        </>
      ),
      imgAlt: "Carton rouge pour ces erreurs pendant le séchage",
    },
    form: {
      kick: "Encore une question ?",
      h2: "Nos spécialistes du séchage réfléchissent avec vous.",
      lede: "Vous hésitez sur la bonne approche pour votre projet ? Posez votre question, un spécialiste vous répond dans un délai d'un jour ouvrable.",
      voornaam: "Prénom",
      naam: "Nom",
      naamPh: "Nom de famille",
      email: "E-mail",
      emailPh: "nom@exemple.be",
      telefoon: "Téléphone",
      vraag: "Quel est le sujet de votre question ?",
      onderwerpen: [
        { waarde: ONDERWERPEN[0], label: "Question sur la livraison ou l'installation" },
        { waarde: ONDERWERPEN[1], label: "Conseil sur le bon pack" },
        { waarde: ONDERWERPEN[2], label: "Question sur les prix ou la livraison" },
        { waarde: ONDERWERPEN[3], label: "Autre chose" },
      ],
      situatie: "Votre situation",
      situatiePh: "P. ex. nouvelle construction de 140 m², chape posée la semaine dernière, quand le poseur de sol peut-il commencer ?",
      privacy: "Nous utilisons vos données uniquement pour répondre à votre question.",
      versturen: "Envoyer votre question",
      bezig: "Envoi…",
      klaarTitel: "Question envoyée",
      klaarTekst: "Merci ! Un spécialiste du séchage vous contacte dans un délai d'un jour ouvrable.",
    },
  },
  en: {
    kruimel: "Delivery & installation",
    hero: {
      kick: "Delivery & installation",
      h1: "Delivered and installed. Ready to dry.",
      p1: "A Vernast technician delivers your drying package and installs the complete set-up, calculated for your home. ",
      p2: "You don't have to lift, position or set up anything.",
      cta: "Calculate your drying package",
      ctaUitleg: "How the installation works",
      imgAlt: "Vernast technician with cables, thumbs up",
      badge: "Installed within 24 hours",
      badgeSub: "Delivered and installed",
    },
    trk: {
      kick: "Your delivery day",
      h2: "Follow your delivery, from confirmation to a running set-up.",
      lede: "You always know where you stand: one clear appointment, a heads-up when we are on our way and a set-up that is running before we leave.",
      stops: [
        { tm: "After you book", h3: "Appointment confirmed", p: "Confirmation with delivery date and time slot, plus a calendar invitation." },
        { tm: "30 min before", h3: "Text: on our way", p: "The technician sends you a message. No waiting in all day." },
        { tm: "On arrival", h3: "Check & baseline reading", p: "We go through the rooms and measure the starting moisture content." },
        { tm: "On site", h3: "Installation", p: "Positioning, spreading out, connecting the drain and setting up." },
        { tm: "Before we leave", h3: "Start-up & explanation", p: "Everything is running and you get a short explanation. Drying has started." },
      ],
    },
    ins: {
      kick: "The installation",
      h2: "What our technician does, step by step.",
      lede: "Not installing as much equipment as possible, but using the capacity as efficiently as possible. Click through the steps or simply watch.",
      tabs: [
        { nr: "Step 01", titel: "Check & drying zones" },
        { nr: "Step 02", titel: "Positioning & circulation" },
        { nr: "Step 03", titel: "Condensate drain" },
        { nr: "Step 04", titel: "Power & airflow" },
        { nr: "Step 05", titel: "Check & start-up" },
      ],
      p1: {
        h3: "Look first, then install.",
        pt: (lp, s) => (
          <>
            We go through the home and divide it into drying zones: which rooms need drying, how are they connected and where is the most moisture? Then we check the electrics, drainage options and conditions. If the situation differs greatly from your{" "}
            <a href={lp("/verhuur/simulator")} style={s}>calculation</a>, we discuss that first.
          </>
        ),
        chips: ["Drying zones", "Electrics", "Drainage", "Temperature"],
        mt: "Capacity per drying zone",
        zones: ["Living room · kitchen · hall", "Bathroom · bedrooms"],
      },
      p2: {
        h3: "The right spot, the right airflow.",
        pt: "Machines go where they can draw in and blow out freely, never pushed tight against walls or obstacles. Instead of one heavy machine in the middle, we spread several machines and air movers across the zones, so every room dries evenly.",
        chips: ["Free air intake", "Spread capacity", "Even drying"],
        mt: "Dry air reaches the whole zone",
        hoek: "furthest corner",
      },
      p3: {
        h3: "Water straight to the drain. ",
        badge: "Optional · recommended",
        pt: (lp, s, pomp) => (
          <>
            If you choose the <a href={lp("/verhuur/toebehoren/condenspomp")} style={s}>condensate pump</a> ({pomp} per dehumidifier per day), we connect a continuous condensate drain to a drain, shower, washbasin or floor drain. That way you never have to empty a tank and the machine keeps running day and night, weekends included. Without a pump you empty the tank yourself about twice a day. Optional, but recommended: you add the pump when{" "}
            <a href={lp("/verhuur/simulator")} style={s}>calculating your package</a>.
          </>
        ),
        chips: ["No tray to empty", "Runs 24/7", "Clean condensate"],
        mt: "Continuous condensate drain",
        cap: "The condensate drains away directly. You watch it, nothing more.",
      },
      p4: {
        h3: "Stable power, moving air.",
        pt: "Construction dehumidifiers run continuously for long periods and need a stable supply; with several machines we spread them over different circuits. Air movers pull damp air out of hard-to-reach areas. Temperature, circulation and dehumidification together determine the efficiency.",
        chips: ["Separate circuits", "Fans", "No dead corners"],
        mt: "Circulation in the zone",
        checks: ["Stable supply checked", "Circuits spread", "Fan on the right setting"],
      },
      p5: {
        h3: "We only leave once everything is running.",
        pt: (lp, s) => (
          <>
            We check the complete set-up, set the target humidity and go over which windows and doors stay open or closed. You get a short explanation, and then the set-up does the work. Questions during the hire? Our{" "}
            <a href={lp("/klantservice")} style={s}>customer service</a> is ready to help.
          </>
        ),
        chips: ["Target value set", "Short explanation", "Drying started"],
        mt: "Final check",
        rows: ["Set-up checked", "All machines running", "Condensate drain flowing", "Settings correct", "Explanation given · drying started"],
      },
    },
    ladder: {
      kick: "Access",
      h2: "Stairs, lift or ladder? Let us know in advance.",
      lede: "Upper floors are included as long as they can be reached by stairs or a lift. Only when machines have to go up by ladder do we charge a surcharge: that takes extra manpower and equipment.",
      inbegrepen: "Included",
      toeslag: "Surcharge",
      perVerdieping: "per floor",
      trap: { h3: "By the stairs", p: "Our technicians carry the machines up the stairs to every floor, at no extra cost." },
      lift: { h3: "By lift", p: "If there is a lift, we install on every floor at no extra cost." },
      ladder: {
        h3: "By ladder",
        p: (
          <>
            No staircase in the house yet? <b>Always let us know in advance</b>, so we can plan the right installation and manpower.
          </>
        ),
      },
    },
    rol: {
      kick: "Clear division of roles",
      h2: "What you provide. What we do.",
      u: {
        tag: "You provide",
        h3: "This keeps the installation running smoothly.",
        li: [
          "All rooms to be dried are clear, emptied and accessible",
          "Working electricity and sockets",
          "If available: a working water drain",
          "Free space to position the machines",
        ],
        vf: "Building materials, rubbish or obstacles restrict air circulation.",
      },
      wij: {
        tag: "We do",
        h3: "You don't need to be a drying specialist.",
        li: [
          "Determine the right machine and the right capacity",
          "Positioning and spreading across the rooms",
          "Connect the condensate drain and choose the settings",
          "Check and start up the set-up",
        ],
        vf: (lp) => (
          <>
            Questions during the hire? Our{" "}
            <a href={lp("/klantservice")} style={{ color: "var(--red)", fontWeight: 600 }}>customer service</a> is ready to help.
          </>
        ),
      },
      note: (lp) => (
        <>
          <b>During the drying period:</b> leave the set-up unchanged, keep windows closed and don't switch machines off. Has something changed anyway? Let us know via{" "}
          <a href={lp("/klantservice")}>customer service</a>, so your <a href={lp("/drooggarantie")}>drying guarantee</a> remains valid.*
        </>
      ),
      imgAlt: "Vernast technician by the van",
    },
    rood: {
      kick: "Red card",
      h2: "Best avoided while drying is under way.",
      lede: "Well meant, but harmful to the drying process, and sometimes even to the machine. We see these classics often, and they cost you drying time:",
      kaarten: [
        { b: "Opening windows or outside doors", p: "You let damp outside air in and the installation has to process that extra load all over again. The house stays closed during drying." },
        { b: "Switching dehumidifiers off on a whim", p: "Switching them off at night or \"just while we're working\" stops the drying and extends the hire period. The machines are made to run continuously." },
        { b: "Laying a dehumidifier flat or tilting it", p: "The cooling circuit contains refrigerant: laying the machine flat damages the compressor. Transported flat after all? Let the machine stand upright for 24 hours before starting it." },
        { b: "Moving machines or pushing them close to the wall", p: "The set-up is calculated per drying zone. Moving machines or blocking the intake disrupts the circulation, so check with us first." },
        { b: "Closing interior doors that need to stay open", p: "Dry air has to reach every room. At start-up our technician tells you which doors should be open or closed." },
        { b: "Bringing in new wet materials", p: "Fresh plaster or a wet screed on top means a new moisture load, and a longer drying time. Let us know and we will recalculate the package." },
      ],
      note: (lp) => (
        <>
          <b>Unsure about something?</b> One call to <a href={lp("/klantservice")}>customer service</a> saves days of delay, and keeps your{" "}
          <a href={lp("/drooggarantie")}>drying guarantee</a> valid.*
        </>
      ),
      imgAlt: "Red card for these mistakes during drying",
    },
    form: {
      kick: "Any more questions about this?",
      h2: "Our drying specialists are happy to help.",
      lede: "Not sure about the right approach for your project? Ask your question and a specialist will reply within one working day.",
      voornaam: "First name",
      naam: "Surname",
      naamPh: "Surname",
      email: "Email",
      emailPh: "name@example.com",
      telefoon: "Phone",
      vraag: "What is your question about?",
      onderwerpen: [
        { waarde: ONDERWERPEN[0], label: "Question about delivery or installation" },
        { waarde: ONDERWERPEN[1], label: "Advice on the right package" },
        { waarde: ONDERWERPEN[2], label: "Question about prices or delivery" },
        { waarde: ONDERWERPEN[3], label: "Something else" },
      ],
      situatie: "Your situation",
      situatiePh: "E.g. new build of 140 m², screed laid last week, when can the floor layer start?",
      privacy: "We only use your details to answer your question.",
      versturen: "Send your question",
      bezig: "Sending…",
      klaarTitel: "Question sent",
      klaarTekst: "Thank you! A drying specialist will contact you within one working day.",
    },
  },
} satisfies Copy<LeveringTekst>;

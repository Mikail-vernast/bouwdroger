/**
 * Teksten van de boekingswizard (`VerhuurBoekingPage`), per taal.
 *
 * De Nederlandse teksten zijn letterlijk die van vóór de vertaling. Bedragen
 * komen als opgemaakte tekst binnen (`eur(…)` in de pagina): de copy rekent
 * niets uit, ze zet alleen woorden rond wat de pagina al berekende.
 */
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { Copy } from "@/i18n/useTaal";
import { vertaalPortaal } from "@/data/verhuur.fr";
import type { Taal } from "@/i18n/taal";

export interface BoekingTeksten {
  volgende: Record<number, string>;
  verder: string;
  beschikbaarheidLaden: string;
  datesError: string;
  geannuleerd: string;
  nietTeruggevonden: string;
  statusNietOpgehaald: string;
  nietGestart: string;
  geenVerbinding: string;
  teVeel: string;
  /* Stap 1 */
  dekkingKop: string;
  dekkingSub: string;
  inbegrepen: string;
  eenmalig: string;
  inPakketprijs: string;
  gekozen: string;
  selecteer: string;
  terugNaarPakket: string;
  verderExtras: string;
  /* Stap 2 */
  extrasKop: string;
  extrasSub: ReactNode;
  vochtmetingKop: string;
  vochtmetingSub: string;
  inbegrepenTag: string;
  toegevoegd: string;
  toevoegen: string;
  monitoringKop: string;
  binnenkort: string;
  monitoringSub: string;
  pompKop: string;
  pompSub: ReactNode;
  pompAantal: (dryerCount: number) => ReactNode;
  perPompDag: string;
  pompMinder: string;
  pompMeer: string;
  verdiepingKop: string;
  verdiepingSub: (ladderFee: string) => ReactNode;
  verdiepingenKop: string;
  verdiepingenSub: string;
  verdiepingMinder: string;
  verdiepingMeer: string;
  hoeBoven: string;
  viaTrap: string;
  viaLadder: string;
  ladderEenmalig: (ladderFee: string) => string;
  extraToestellenKop: string;
  extraToestellenSub: string;
  per2Weken: string;
  eenMinder: string;
  eenMeer: string;
  terug: string;
  verderDatum: string;
  /* Stap 3 */
  leveringKop: string;
  leveringSub: (lp: (pad: string) => string) => ReactNode;
  leverdatumKop: string;
  leverdatumSub: string;
  leverdatum: string;
  tijdslotLevering: string;
  huurperiodeVast: string;
  huurperiodeWaarde: (dagen: number) => string;
  datumVol: (datum: string, binnenHorizon: boolean, horizon: number) => ReactNode;
  datumVerschoven: (van: string, naar: string) => ReactNode;
  planning: (p: { start: string; slot: string; dagen: number; einde: string; droogtijd: number }) => ReactNode;
  teKort: string;
  ophaaldatum: string;
  tijdslotOphaling: string;
  verderGegevens: string;
  /* Stap 4 */
  gegevensKop: string;
  gegevensSub: string;
  particulier: string;
  professioneel: string;
  naam: string;
  naamPlaceholder: string;
  telefoon: string;
  email: string;
  emailPlaceholder: string;
  bedrijfsnaam: string;
  bedrijfPlaceholder: string;
  btwNummer: string;
  adresWerf: string;
  adresPlaceholder: string;
  postcode: string;
  postcodePlaceholder: string;
  gemeente: string;
  gemeentePlaceholder: string;
  betalenKop: string;
  korting: string;
  volledigOnline: string;
  volledigOnlineUitleg: string;
  uBespaart: (bedrag: string) => string;
  voorschotKop: (bedrag: string) => string;
  voorschotUitleg: (bedrag: string) => string;
  factuurNaBetaling: string;
  akkoord: string;
  voorbereiden: string;
  naarBetaling: (bedrag: string) => string;
  /* Stap 5 */
  betaalKop: string;
  betaalSub: (bedrag: string) => ReactNode;
  vastgelegd: (datum: string, slot: string) => ReactNode;
  terugGegevens: string;
  /* Controle en bevestiging */
  geduldKop: string;
  geduldSub: string;
  vastKop: string;
  vastSub: (voorschot: string) => string;
  referentie: string;
  levering: string;
  huurperiode: string;
  tem: string;
  dagen: string;
  betaald: string;
  nogTeBetalen: string;
  naarHome: string;
  offerteVraag: string;
  offerteVersturen: string;
  offerteVerstuurd: string;
  /* Samenvatting */
  uwDroogpakket: string;
  uwPakket: string;
  pakketRegel: (toestellen: number, weken: number) => string;
  leveringRegel: string;
  plaatsingRegel: string;
  transportRegel: (band: string) => string;
  opMaat: string;
  huurprijsExcl: string;
  kortingOnline: string;
  btw: string;
  totaalIncl: string;
  perWeek: (bedrag: string) => string;
  noot: string;
}

const nl: BoekingTeksten = {
  volgende: {
    1: "Verder naar extra's",
    2: "Verder naar datum",
    3: "Verder naar gegevens",
    4: "Boeking bevestigen",
  },
  verder: "Verder",
  beschikbaarheidLaden: "Beschikbaarheid nakijken…",
  datesError:
    "We kunnen op dit moment niet nakijken welke datums nog vrij zijn. U kunt gewoon verder, wij bevestigen uw leverdatum, of bel ons op 03 689 90 65.",
  geannuleerd: "De betaling is geannuleerd. Uw keuzes staan nog klaar.",
  nietTeruggevonden:
    "We konden deze betaling niet terugvinden bij Stripe. Uw keuzes staan nog klaar, probeer gerust opnieuw af te rekenen, of bel ons op 03 689 90 65.",
  statusNietOpgehaald: "De betaalstatus kon niet opgehaald worden. Probeer opnieuw.",
  nietGestart: "De betaling kon niet gestart worden.",
  geenVerbinding: "Geen verbinding met de betaalserver. Probeer het opnieuw.",
  teVeel: "Te veel aanvragen. Probeer het over een minuut opnieuw.",

  dekkingKop: "Kies uw dekking",
  dekkingSub:
    "Werfmateriaal loopt risico op schade, diefstal of vertraging. Kies hoeveel u zelf wilt dragen, net zoals bij een huurwagen.",
  inbegrepen: "Inbegrepen",
  eenmalig: "eenmalig, voor de volledige huur",
  inPakketprijs: "zit in uw pakketprijs",
  gekozen: "Gekozen",
  selecteer: "Selecteer",
  terugNaarPakket: "Terug naar het pakket",
  verderExtras: "Verder naar extra's",

  extrasKop: "Standaard inbegrepen & extra zekerheid",
  extrasSub: (
    <>
      De professionele vochtmeting vóór de start én bij oplevering zit <b>standaard</b> bij elke huur,
      zo weet u zeker dat alles droog is. Heeft u daar een officieel document van nodig, dan stellen wij
      dat op.
    </>
  ),
  vochtmetingKop: "Vochtmeting voor & na",
  vochtmetingSub:
    "Meting van muren, chape en luchtvochtigheid bij levering en bij oplevering, bij elk pakket.",
  inbegrepenTag: "✓ Inbegrepen",
  toegevoegd: "Toegevoegd",
  toevoegen: "Toevoegen",
  monitoringKop: "Digitale monitoring",
  binnenkort: "Binnenkort",
  monitoringSub:
    "Al onze toestellen krijgen digitale opvolging: u volgt de luchtvochtigheid en droogvoortgang binnenkort live online op, zonder meerkost, automatisch op elk toestel.",
  pompKop: "Condenspomp, automatische waterafvoer",
  pompSub: (
    <>
      Nooit zelf een reservoir legen of werken met een kuip: de condenspomp voert het water{" "}
      <b>rechtstreeks en automatisch af</b>, ook naar een hoger gelegen afvoer. Goed om te weten: het
      water uit een bouwdroger is zuiver condenswater en mag gewoon in de afvoer. Wij voorzien standaard
      één pomp per bouwdroger, aanpassen kan hieronder.
    </>
  ),
  pompAantal: (dryerCount) => (
    <>
      {" "}U heeft{" "}
      <b>
        {dryerCount} bouwdroger{dryerCount === 1 ? "" : "s"}
      </b>{" "}
      in dit pakket, wij zetten er standaard {dryerCount} pomp
      {dryerCount === 1 ? "" : "en"} klaar.
    </>
  ),
  perPompDag: "per pomp / dag",
  pompMinder: "Eén pomp minder",
  pompMeer: "Eén pomp meer",
  verdiepingKop: "Op welke verdieping werken we?",
  verdiepingSub: (ladderFee) => (
    <>
      Plaatsing op een verdieping is <b>inbegrepen in de prijs</b> zolang er een trap aanwezig is.
      Moeten de toestellen via een ladder naar boven gedragen worden, dan rekenen wij eenmalig{" "}
      {ladderFee} extra draagwerk aan.
    </>
  ),
  verdiepingenKop: "Aantal verdiepingen",
  verdiepingenSub:
    "Gelijkvloers = 0. Wij dragen en plaatsen alle toestellen op de juiste verdieping.",
  verdiepingMinder: "Eén verdieping minder",
  verdiepingMeer: "Eén verdieping meer",
  hoeBoven: "Hoe geraken we boven?",
  viaTrap: "Via de trap",
  viaLadder: "Via een ladder",
  ladderEenmalig: (ladderFee) => `+ ${ladderFee} eenmalig`,
  extraToestellenKop: "Extra toestellen",
  extraToestellenSub:
    "Meer capaciteit betekent kortere droogtijd. Onze technicus bekijkt het bij levering en u betaalt enkel wat u gebruikt.",
  per2Weken: "per 2 weken",
  eenMinder: "Eén minder",
  eenMeer: "Eén meer",
  terug: "Terug",
  verderDatum: "Verder naar datum",

  leveringKop: "Levering & installatie",
  leveringSub: (lp) => (
    <>
      Pakketten worden altijd door ons geleverd, geplaatst en afgesteld, alleen zo kunnen wij de 100%
      droog-garantie waarmaken. Zelf afhalen kan enkel bij{" "}
      <Link to={lp("/verhuur/afhalen")} style={{ color: "var(--red)", fontWeight: 600 }}>
        losse toestellen
      </Link>
      , tegen een lagere afhaalprijs.
    </>
  ),
  leverdatumKop: "Kies uw leverdatum",
  leverdatumSub:
    "Kies een dag in onze agenda. Op basis van de droogtijd van dit pakket plannen wij de ophaling automatisch mee in, u hoeft daar niets voor te doen.",
  leverdatum: "Leverdatum",
  tijdslotLevering: "Tijdslot levering",
  huurperiodeVast: "Huurperiode (vast per pakket)",
  huurperiodeWaarde: (dagen) => `${dagen} dagen, inbegrepen in de pakketprijs`,
  datumVol: (datum, binnenHorizon, horizon) => (
    <>
      Op <b>{datum}</b> staan onze toestellen voor dit pakket al ingepland
      {binnenHorizon ? `, en de komende ${horizon} dagen komt er niets vrij` : ""}
      . Kies een andere dag hierboven, of bel ons op 03 689 90 65, vaak kunnen we schuiven.
    </>
  ),
  datumVerschoven: (van, naar) => (
    <>
      Op <b>{van}</b> staan onze toestellen voor dit pakket al ingepland. Wij hebben uw leverdatum
      daarom verzet naar de eerstvolgende vrije dag: <b>{naar}</b>. Een andere dag kiezen kan gewoon
      hierboven.
    </>
  ),
  planning: ({ start, slot, dagen, einde, droogtijd }) => (
    <>
      Wij leveren en installeren op <b>{start}</b> tussen <b>{slot}</b>. Uw vaste huurperiode van{" "}
      <b>{dagen} dagen</b> loopt tot <b>{einde}</b>, de ophaling staat automatisch ingepland op die
      dag, tussen <b>{slot}</b>. Verwachte droogtijd van dit pakket: <b>{droogtijd} dagen</b>.
    </>
  ),
  teKort: "Korter dan de verwachte droogtijd, verlengen kan later met één klik.",
  ophaaldatum: "Ophaaldatum (automatisch)",
  tijdslotOphaling: "Tijdslot ophaling",
  verderGegevens: "Verder naar gegevens",

  gegevensKop: "Uw gegevens",
  gegevensSub: "Wij gebruiken dit om de levering te plannen en u de bevestiging te sturen.",
  particulier: "Particulier",
  professioneel: "Professioneel",
  naam: "Voornaam en naam",
  naamPlaceholder: "Jan Peeters",
  telefoon: "Telefoon",
  email: "E-mailadres",
  emailPlaceholder: "jan@voorbeeld.be",
  bedrijfsnaam: "Bedrijfsnaam",
  bedrijfPlaceholder: "Bouwbedrijf bv",
  btwNummer: "Btw-nummer",
  adresWerf: "Adres werf",
  adresPlaceholder: "Straat en nummer",
  postcode: "Postcode",
  postcodePlaceholder: "2630",
  gemeente: "Gemeente",
  gemeentePlaceholder: "Aartselaar",
  betalenKop: "Hoe wilt u betalen?",
  korting: "5% korting",
  volledigOnline: "Volledig online betalen",
  volledigOnlineUitleg:
    "Betaal nu met Bancontact, kaart, Apple Pay of iDEAL. U krijgt 5% korting op uw volledige pakket en uw factuur staat meteen in uw mailbox.",
  uBespaart: (bedrag) => `U bespaart ${bedrag}`,
  voorschotKop: (bedrag) => `${bedrag} nu, rest bij levering`,
  voorschotUitleg: (bedrag) =>
    `Bevestig uw boeking met ${bedrag}. Het saldo scant en betaalt u ter plaatse bij levering: Bancontact, kaart of Apple Pay.`,
  factuurNaBetaling: "Factuur na volledige betaling",
  akkoord:
    "Ik ga akkoord met de algemene voorwaarden en geef Vernast toestemming om mij over deze boeking te contacteren.",
  voorbereiden: "Betaling voorbereiden…",
  naarBetaling: (bedrag) => `Naar de betaling · ${bedrag}`,

  betaalKop: "Betaal uw boeking",
  betaalSub: (bedrag) => (
    <>
      U betaalt <b>{bedrag}</b> met Apple Pay, Bancontact, kaart, iDEAL of Klarna. De betaling loopt
      beveiligd via Stripe, wij zien uw kaartgegevens nooit.
    </>
  ),
  vastgelegd: (datum, slot) => (
    <>
      Uw levering op <b>{datum}</b> tussen <b>{slot}</b> wordt vastgelegd zodra de betaling bevestigd
      is.
    </>
  ),
  terugGegevens: "Terug naar mijn gegevens",

  geduldKop: "Even geduld",
  geduldSub: "We bevestigen uw betaling. Sluit dit venster niet.",
  vastKop: "Uw boeking staat vast",
  vastSub: (voorschot) =>
    `Wij bevestigen uw levering telefonisch binnen één werkdag. Betaalde u volledig online, dan staat uw factuur meteen in uw mailbox, met 5% korting. Koos u voor ${voorschot} bevestiging, dan betaalt u het saldo bij levering.`,
  referentie: "Referentie",
  levering: "Levering",
  huurperiode: "Huurperiode",
  tem: "t.e.m.",
  dagen: "dagen",
  betaald: "Betaald",
  nogTeBetalen: "Nog te betalen bij levering",
  naarHome: "Naar de homepage",

  offerteVraag: "Vraag uw transportprijs aan",
  offerteVersturen: "Aanvraag versturen…",
  offerteVerstuurd: "Aanvraag verstuurd",

  uwDroogpakket: "Uw droogpakket",
  uwPakket: "Uw pakket",
  pakketRegel: (toestellen, weken) => `Pakket · ${toestellen} toestellen · ${weken} weken`,
  leveringRegel: "Levering, installatie & ophaling",
  plaatsingRegel: "Plaatsing & afstelling ter plaatse",
  transportRegel: (band) => `Transport ${band}`,
  opMaat: "Op maat",
  huurprijsExcl: "Huurprijs excl. btw",
  kortingOnline: "Korting online betalen (5%)",
  btw: "Btw 21%",
  totaalIncl: "Totaal incl. btw",
  perWeek: (bedrag) => `${bedrag} per week incl. btw`,
  noot: "5% korting bij online betalen · dagelijks opzegbaar",
};

const fr: BoekingTeksten = {
  volgende: {
    1: "Continuer vers les extras",
    2: "Continuer vers la date",
    3: "Continuer vers vos coordonnées",
    4: "Confirmer la réservation",
  },
  verder: "Continuer",
  beschikbaarheidLaden: "Vérification des disponibilités…",
  datesError:
    "Nous ne pouvons pas vérifier pour le moment quelles dates sont encore libres. Vous pouvez simplement continuer, nous confirmerons votre date de livraison, ou appelez-nous au 03 689 90 65.",
  geannuleerd: "Le paiement a été annulé. Vos choix sont toujours enregistrés.",
  nietTeruggevonden:
    "Nous n'avons pas retrouvé ce paiement chez Stripe. Vos choix sont toujours enregistrés : vous pouvez réessayer de payer, ou appelez-nous au 03 689 90 65.",
  statusNietOpgehaald: "Le statut du paiement n'a pas pu être récupéré. Réessayez.",
  nietGestart: "Le paiement n'a pas pu démarrer.",
  geenVerbinding: "Pas de connexion avec le serveur de paiement. Réessayez.",
  teVeel: "Trop de demandes. Réessayez dans une minute.",

  dekkingKop: "Choisissez votre couverture",
  dekkingSub:
    "Le matériel de chantier court un risque de dégâts, de vol ou de retard. Choisissez la part que vous voulez assumer vous-même, comme pour une voiture de location.",
  inbegrepen: "Inclus",
  eenmalig: "une seule fois, pour toute la location",
  inPakketprijs: "compris dans le prix de votre pack",
  gekozen: "Choisi",
  selecteer: "Choisir",
  terugNaarPakket: "Retour au pack",
  verderExtras: "Continuer vers les extras",

  extrasKop: "Inclus d'office & sécurité supplémentaire",
  extrasSub: (
    <>
      La mesure d'humidité professionnelle avant le début et à la fin est <b>incluse d'office</b> dans
      chaque location : vous êtes ainsi certain que tout est sec. Si vous avez besoin d'un document
      officiel, nous l'établissons pour vous.
    </>
  ),
  vochtmetingKop: "Mesure d'humidité avant & après",
  vochtmetingSub:
    "Mesure des murs, de la chape et de l'humidité de l'air à la livraison et à la fin, avec chaque pack.",
  inbegrepenTag: "✓ Inclus",
  toegevoegd: "Ajouté",
  toevoegen: "Ajouter",
  monitoringKop: "Suivi numérique",
  binnenkort: "Bientôt",
  monitoringSub:
    "Tous nos appareils seront bientôt suivis numériquement : vous suivrez l'humidité de l'air et l'avancement du séchage en direct en ligne, sans supplément, automatiquement sur chaque appareil.",
  pompKop: "Pompe à condensats, évacuation automatique de l'eau",
  pompSub: (
    <>
      Plus jamais de réservoir à vider ni de bac : la pompe à condensats évacue l'eau{" "}
      <b>directement et automatiquement</b>, même vers une évacuation située plus haut. Bon à savoir :
      l'eau d'un déshumidificateur de chantier est de l'eau de condensation pure, elle peut aller
      simplement à l'égout. Nous prévoyons d'office une pompe par déshumidificateur, vous pouvez
      l'adapter ci-dessous.
    </>
  ),
  pompAantal: (dryerCount) => (
    <>
      {" "}Ce pack compte{" "}
      <b>
        {dryerCount} déshumidificateur{dryerCount === 1 ? "" : "s"}
      </b>{" "}
      : nous préparons d'office {dryerCount} pompe{dryerCount === 1 ? "" : "s"}.
    </>
  ),
  perPompDag: "par pompe / jour",
  pompMinder: "Une pompe de moins",
  pompMeer: "Une pompe de plus",
  verdiepingKop: "À quel étage travaillons-nous ?",
  verdiepingSub: (ladderFee) => (
    <>
      L'installation à l'étage est <b>comprise dans le prix</b> tant qu'il y a un escalier. Si les
      appareils doivent être montés par une échelle, nous facturons une seule fois {ladderFee} de
      portage supplémentaire.
    </>
  ),
  verdiepingenKop: "Nombre d'étages",
  verdiepingenSub:
    "Rez-de-chaussée = 0. Nous portons et installons tous les appareils au bon étage.",
  verdiepingMinder: "Un étage de moins",
  verdiepingMeer: "Un étage de plus",
  hoeBoven: "Comment monte-t-on ?",
  viaTrap: "Par l'escalier",
  viaLadder: "Par une échelle",
  ladderEenmalig: (ladderFee) => `+ ${ladderFee} une seule fois`,
  extraToestellenKop: "Appareils supplémentaires",
  extraToestellenSub:
    "Plus de capacité, c'est un séchage plus court. Notre technicien évalue la situation à la livraison et vous ne payez que ce que vous utilisez.",
  per2Weken: "par 2 semaines",
  eenMinder: "Un de moins",
  eenMeer: "Un de plus",
  terug: "Retour",
  verderDatum: "Continuer vers la date",

  leveringKop: "Livraison & installation",
  leveringSub: (lp) => (
    <>
      Les packs sont toujours livrés, installés et réglés par nos soins : c'est la seule façon de tenir
      notre garantie 100 % sec. L'enlèvement par vos soins n'est possible que pour les{" "}
      <Link to={lp("/verhuur/afhalen")} style={{ color: "var(--red)", fontWeight: 600 }}>
        appareils à l'unité
      </Link>
      , à un tarif d'enlèvement plus bas.
    </>
  ),
  leverdatumKop: "Choisissez votre date de livraison",
  leverdatumSub:
    "Choisissez un jour dans notre agenda. Sur la base du temps de séchage de ce pack, nous planifions automatiquement l'enlèvement : vous n'avez rien à faire.",
  leverdatum: "Date de livraison",
  tijdslotLevering: "Créneau de livraison",
  huurperiodeVast: "Période de location (fixe par pack)",
  huurperiodeWaarde: (dagen) => `${dagen} jours, compris dans le prix du pack`,
  datumVol: (datum, binnenHorizon, horizon) => (
    <>
      Le <b>{datum}</b>, nos appareils pour ce pack sont déjà planifiés
      {binnenHorizon ? `, et rien ne se libère dans les ${horizon} prochains jours` : ""}
      . Choisissez un autre jour ci-dessus ou appelez-nous au 03 689 90 65 : nous pouvons souvent nous
      arranger.
    </>
  ),
  datumVerschoven: (van, naar) => (
    <>
      Le <b>{van}</b>, nos appareils pour ce pack sont déjà planifiés. Nous avons donc déplacé votre
      livraison au premier jour libre : <b>{naar}</b>. Vous pouvez toujours choisir un autre jour
      ci-dessus.
    </>
  ),
  planning: ({ start, slot, dagen, einde, droogtijd }) => (
    <>
      Nous livrons et installons le <b>{start}</b> entre <b>{slot}</b>. Votre période de location
      fixe de <b>{dagen} jours</b> court jusqu'au <b>{einde}</b> ; l'enlèvement est automatiquement
      planifié ce jour-là, entre <b>{slot}</b>. Temps de séchage prévu pour ce pack :{" "}
      <b>{droogtijd} jours</b>.
    </>
  ),
  teKort: "Plus court que le temps de séchage prévu : vous pourrez prolonger plus tard en un clic.",
  ophaaldatum: "Date d'enlèvement (automatique)",
  tijdslotOphaling: "Créneau d'enlèvement",
  verderGegevens: "Continuer vers vos coordonnées",

  gegevensKop: "Vos coordonnées",
  gegevensSub: "Nous les utilisons pour planifier la livraison et vous envoyer la confirmation.",
  particulier: "Particulier",
  professioneel: "Professionnel",
  naam: "Prénom et nom",
  naamPlaceholder: "Jean Dupont",
  telefoon: "Téléphone",
  email: "Adresse e-mail",
  emailPlaceholder: "jean@exemple.be",
  bedrijfsnaam: "Nom de la société",
  bedrijfPlaceholder: "Construction srl",
  btwNummer: "Numéro de TVA",
  adresWerf: "Adresse du chantier",
  adresPlaceholder: "Rue et numéro",
  postcode: "Code postal",
  postcodePlaceholder: "1300",
  gemeente: "Commune",
  gemeentePlaceholder: "Wavre",
  betalenKop: "Comment souhaitez-vous payer ?",
  korting: "5 % de réduction",
  volledigOnline: "Tout payer en ligne",
  volledigOnlineUitleg:
    "Payez maintenant par Bancontact, carte, Apple Pay ou iDEAL. Vous recevez 5 % de réduction sur l'ensemble de votre pack et votre facture arrive tout de suite dans votre boîte mail.",
  uBespaart: (bedrag) => `Vous économisez ${bedrag}`,
  voorschotKop: (bedrag) => `${bedrag} maintenant, le reste à la livraison`,
  voorschotUitleg: (bedrag) =>
    `Confirmez votre réservation avec ${bedrag}. Vous scannez et payez le solde sur place à la livraison : Bancontact, carte ou Apple Pay.`,
  factuurNaBetaling: "Facture après paiement complet",
  akkoord:
    "J'accepte les conditions générales et j'autorise Vernast à me contacter au sujet de cette réservation.",
  voorbereiden: "Préparation du paiement…",
  naarBetaling: (bedrag) => `Vers le paiement · ${bedrag}`,

  betaalKop: "Payez votre réservation",
  betaalSub: (bedrag) => (
    <>
      Vous payez <b>{bedrag}</b> par Apple Pay, Bancontact, carte, iDEAL ou Klarna. Le paiement est
      sécurisé par Stripe : nous ne voyons jamais les données de votre carte.
    </>
  ),
  vastgelegd: (datum, slot) => (
    <>
      Votre livraison le <b>{datum}</b> entre <b>{slot}</b> est fixée dès que le paiement est
      confirmé.
    </>
  ),
  terugGegevens: "Retour à mes coordonnées",

  geduldKop: "Un instant",
  geduldSub: "Nous confirmons votre paiement. Ne fermez pas cette fenêtre.",
  vastKop: "Votre réservation est confirmée",
  vastSub: (voorschot) =>
    `Nous confirmons votre livraison par téléphone dans un délai d'un jour ouvrable. Si vous avez tout payé en ligne, votre facture se trouve déjà dans votre boîte mail, avec 5 % de réduction. Si vous avez choisi la confirmation de ${voorschot}, vous payez le solde à la livraison.`,
  referentie: "Référence",
  levering: "Livraison",
  huurperiode: "Période de location",
  tem: "au",
  dagen: "jours",
  betaald: "Payé",
  nogTeBetalen: "Reste à payer à la livraison",
  naarHome: "Vers la page d'accueil",

  offerteVraag: "Demandez votre prix de transport",
  offerteVersturen: "Envoi de la demande…",
  offerteVerstuurd: "Demande envoyée",

  uwDroogpakket: "Votre pack de séchage",
  uwPakket: "Votre pack",
  pakketRegel: (toestellen, weken) => `Pack · ${toestellen} appareils · ${weken} semaines`,
  leveringRegel: "Livraison, installation & enlèvement",
  plaatsingRegel: "Placement & réglage sur place",
  transportRegel: (band) => `Transport ${band}`,
  opMaat: "Sur mesure",
  huurprijsExcl: "Prix de location HTVA",
  kortingOnline: "Réduction paiement en ligne (5 %)",
  btw: "TVA 21 %",
  totaalIncl: "Total TVAC",
  perWeek: (bedrag) => `${bedrag} par semaine TVAC`,
  noot: "5 % de réduction en cas de paiement en ligne · résiliable chaque jour",
};

const en: BoekingTeksten = {
  volgende: {
    1: "Continue to extras",
    2: "Continue to date",
    3: "Continue to your details",
    4: "Confirm booking",
  },
  verder: "Continue",
  beschikbaarheidLaden: "Checking availability…",
  datesError:
    "We can't check which dates are still free right now. You can simply continue and we will confirm your delivery date, or call us on 03 689 90 65.",
  geannuleerd: "The payment was cancelled. Your choices are still saved.",
  nietTeruggevonden:
    "We couldn't find this payment at Stripe. Your choices are still saved, so feel free to try paying again, or call us on 03 689 90 65.",
  statusNietOpgehaald: "The payment status could not be retrieved. Please try again.",
  nietGestart: "The payment could not be started.",
  geenVerbinding: "No connection to the payment server. Please try again.",
  teVeel: "Too many requests. Please try again in a minute.",

  dekkingKop: "Choose your cover",
  dekkingSub:
    "Site equipment is at risk of damage, theft or delay. Choose how much you want to bear yourself, just as with a hire car.",
  inbegrepen: "Included",
  eenmalig: "one-off, for the entire hire",
  inPakketprijs: "included in your package price",
  gekozen: "Selected",
  selecteer: "Select",
  terugNaarPakket: "Back to the package",
  verderExtras: "Continue to extras",

  extrasKop: "Included as standard & extra peace of mind",
  extrasSub: (
    <>
      The professional moisture reading before the start and at handover is included{" "}
      <b>as standard</b> with every hire, so you know for certain that everything is dry. If you need an
      official document of it, we will draw one up.
    </>
  ),
  vochtmetingKop: "Moisture reading before & after",
  vochtmetingSub:
    "Readings of walls, screed and air humidity at delivery and at handover, with every package.",
  inbegrepenTag: "✓ Included",
  toegevoegd: "Added",
  toevoegen: "Add",
  monitoringKop: "Digital monitoring",
  binnenkort: "Coming soon",
  monitoringSub:
    "All our units are getting digital monitoring: you will soon be able to follow the air humidity and drying progress live online, at no extra cost, automatically on every unit.",
  pompKop: "Condensate pump, automatic water drainage",
  pompSub: (
    <>
      Never empty a tank yourself or work with a tub: the condensate pump drains the water{" "}
      <b>directly and automatically</b>, even to a drain at a higher level. Good to know: the water
      from a construction dehumidifier is pure condensate and can simply go down the drain. We supply
      one pump per construction dehumidifier as standard; you can adjust this below.
    </>
  ),
  pompAantal: (dryerCount) => (
    <>
      {" "}You have{" "}
      <b>
        {dryerCount} construction dehumidifier{dryerCount === 1 ? "" : "s"}
      </b>{" "}
      in this package, so we prepare {dryerCount} pump{dryerCount === 1 ? "" : "s"} as standard.
    </>
  ),
  perPompDag: "per pump / day",
  pompMinder: "One pump fewer",
  pompMeer: "One pump more",
  verdiepingKop: "Which floor are we working on?",
  verdiepingSub: (ladderFee) => (
    <>
      Installation on an upper floor is <b>included in the price</b> as long as there is a staircase.
      If the units have to be carried up by ladder, we charge a one-off {ladderFee} for the extra
      carrying.
    </>
  ),
  verdiepingenKop: "Number of floors",
  verdiepingenSub:
    "Ground floor = 0. We carry and install all units on the right floor.",
  verdiepingMinder: "One floor fewer",
  verdiepingMeer: "One floor more",
  hoeBoven: "How do we get upstairs?",
  viaTrap: "By the stairs",
  viaLadder: "By ladder",
  ladderEenmalig: (ladderFee) => `+ ${ladderFee} one-off`,
  extraToestellenKop: "Extra units",
  extraToestellenSub:
    "More capacity means a shorter drying time. Our technician assesses it at delivery and you only pay for what you use.",
  per2Weken: "per 2 weeks",
  eenMinder: "One fewer",
  eenMeer: "One more",
  terug: "Back",
  verderDatum: "Continue to date",

  leveringKop: "Delivery & installation",
  leveringSub: (lp) => (
    <>
      Packages are always delivered, installed and set up by us; that is the only way we can honour
      the 100% drying guarantee. Collecting it yourself is only possible for{" "}
      <Link to={lp("/verhuur/afhalen")} style={{ color: "var(--red)", fontWeight: 600 }}>
        individual units
      </Link>
      , at a lower collection price.
    </>
  ),
  leverdatumKop: "Choose your delivery date",
  leverdatumSub:
    "Choose a day in our diary. Based on the drying time of this package, we automatically schedule the collection too; you don't need to do anything.",
  leverdatum: "Delivery date",
  tijdslotLevering: "Delivery time slot",
  huurperiodeVast: "Hire period (fixed per package)",
  huurperiodeWaarde: (dagen) => `${dagen} days, included in the package price`,
  datumVol: (datum, binnenHorizon, horizon) => (
    <>
      On <b>{datum}</b> our units for this package are already booked
      {binnenHorizon ? `, and nothing comes free in the next ${horizon} days` : ""}
      . Choose another day above, or call us on 03 689 90 65; we can often move things around.
    </>
  ),
  datumVerschoven: (van, naar) => (
    <>
      On <b>{van}</b> our units for this package are already booked. We have therefore moved your
      delivery date to the next free day: <b>{naar}</b>. You can still choose another day above.
    </>
  ),
  planning: ({ start, slot, dagen, einde, droogtijd }) => (
    <>
      We deliver and install on <b>{start}</b> between <b>{slot}</b>. Your fixed hire period of{" "}
      <b>{dagen} days</b> runs until <b>{einde}</b>; the collection is automatically scheduled for
      that day, between <b>{slot}</b>. Expected drying time of this package: <b>{droogtijd} days</b>.
    </>
  ),
  teKort: "Shorter than the expected drying time; you can extend later with one click.",
  ophaaldatum: "Collection date (automatic)",
  tijdslotOphaling: "Collection time slot",
  verderGegevens: "Continue to your details",

  gegevensKop: "Your details",
  gegevensSub: "We use these to schedule the delivery and send you the confirmation.",
  particulier: "Private customer",
  professioneel: "Business",
  naam: "First name and surname",
  naamPlaceholder: "John Smith",
  telefoon: "Phone",
  email: "Email address",
  emailPlaceholder: "john@example.be",
  bedrijfsnaam: "Company name",
  bedrijfPlaceholder: "Construction Ltd",
  btwNummer: "VAT number",
  adresWerf: "Site address",
  adresPlaceholder: "Street and number",
  postcode: "Postcode",
  postcodePlaceholder: "2630",
  gemeente: "Town",
  gemeentePlaceholder: "Aartselaar",
  betalenKop: "How would you like to pay?",
  korting: "5% discount",
  volledigOnline: "Pay in full online",
  volledigOnlineUitleg:
    "Pay now with Bancontact, card, Apple Pay or iDEAL. You get a 5% discount on your entire package and your invoice lands in your inbox straight away.",
  uBespaart: (bedrag) => `You save ${bedrag}`,
  voorschotKop: (bedrag) => `${bedrag} now, the rest on delivery`,
  voorschotUitleg: (bedrag) =>
    `Confirm your booking with ${bedrag}. You scan and pay the balance on site at delivery: Bancontact, card or Apple Pay.`,
  factuurNaBetaling: "Invoice after payment in full",
  akkoord:
    "I agree to the terms and conditions and give Vernast permission to contact me about this booking.",
  voorbereiden: "Preparing payment…",
  naarBetaling: (bedrag) => `Go to payment · ${bedrag}`,

  betaalKop: "Pay for your booking",
  betaalSub: (bedrag) => (
    <>
      You pay <b>{bedrag}</b> with Apple Pay, Bancontact, card, iDEAL or Klarna. The payment is
      processed securely via Stripe; we never see your card details.
    </>
  ),
  vastgelegd: (datum, slot) => (
    <>
      Your delivery on <b>{datum}</b> between <b>{slot}</b> will be confirmed as soon as the payment
      is confirmed.
    </>
  ),
  terugGegevens: "Back to my details",

  geduldKop: "One moment",
  geduldSub: "We are confirming your payment. Please don't close this window.",
  vastKop: "Your booking is confirmed",
  vastSub: (voorschot) =>
    `We will confirm your delivery by phone within one working day. If you paid in full online, your invoice is already in your inbox, with a 5% discount. If you chose the ${voorschot} confirmation, you pay the balance on delivery.`,
  referentie: "Reference",
  levering: "Delivery",
  huurperiode: "Hire period",
  tem: "to",
  dagen: "days",
  betaald: "Paid",
  nogTeBetalen: "Still to pay on delivery",
  naarHome: "Go to the homepage",

  offerteVraag: "Request your transport price",
  offerteVersturen: "Sending request…",
  offerteVerstuurd: "Request sent",

  uwDroogpakket: "Your drying package",
  uwPakket: "Your package",
  pakketRegel: (toestellen, weken) => `Package · ${toestellen} units · ${weken} weeks`,
  leveringRegel: "Delivery, installation & collection",
  plaatsingRegel: "On-site placement & setup",
  transportRegel: (band) => `Transport ${band}`,
  opMaat: "On request",
  huurprijsExcl: "Hire price excl. VAT",
  kortingOnline: "Online payment discount (5%)",
  btw: "VAT 21%",
  totaalIncl: "Total incl. VAT",
  perWeek: (bedrag) => `${bedrag} per week incl. VAT`,
  noot: "5% discount when paying online · cancellable daily",
};

export const BOEKING_COPY = { nl, fr, en } satisfies Copy<BoekingTeksten>;

/**
 * Een regel uit `bookingSummary` in de taal van de pagina.
 *
 * De regels zelf blijven Nederlands: ze gaan ook als metadata naar Stripe en
 * het portaal (`regels`). Hier vertalen we enkel wat er op het scherm staat;
 * een regel die we niet herkennen blijft Nederlands staan in plaats van te
 * verdwijnen.
 */
const REGEL_WOORDEN: Record<
  Exclude<Taal, "nl">,
  {
    vast: Record<string, string>;
    dekking: (naam: string) => string;
    pomp: (aantal: string, dagen: string) => string;
    extra: (naam: string, weken: string) => string;
  }
> = {
  fr: {
    vast: {
      "Standaard dekking": "Couverture standard",
      "Vochtmeting bij start & oplevering": "Mesure d'humidité au début & à la fin",
      "Plaatsing verdieping via ladder": "Installation à l'étage par une échelle",
      "Plaatsing op verdieping (trap)": "Installation à l'étage (escalier)",
      "Zelf afhalen": "Enlèvement par vos soins",
    },
    dekking: (naam) => `Couverture ${naam}`,
    pomp: (aantal, dagen) => `${aantal}× pompe à condensats · ${dagen} jours`,
    extra: (naam, weken) => `${naam} · ${weken} sem.`,
  },
  en: {
    vast: {
      "Standaard dekking": "Standard cover",
      "Vochtmeting bij start & oplevering": "Moisture reading at start & handover",
      "Plaatsing verdieping via ladder": "Upper-floor installation by ladder",
      "Plaatsing op verdieping (trap)": "Upper-floor installation (stairs)",
      "Zelf afhalen": "Self-collection",
    },
    dekking: (naam) => `${naam} cover`,
    pomp: (aantal, dagen) => `${aantal}× condensate pump · ${dagen} days`,
    extra: (naam, weken) => `${naam} · ${weken} wk`,
  },
};

export function regelInTaal(regel: string, taal: Taal): string {
  if (taal === "nl") return regel;
  const w = REGEL_WOORDEN[taal];
  if (w.vast[regel]) return w.vast[regel];
  const dekking = /^Dekking (.+)$/.exec(regel);
  if (dekking) return w.dekking(vertaalPortaal(dekking[1], taal));
  const pomp = /^(\d+)× condenspomp · (\d+) dagen$/.exec(regel);
  if (pomp) return w.pomp(pomp[1], pomp[2]);
  const extra = /^(.+) · (\d+) wk$/.exec(regel);
  if (extra) return w.extra(vertaalPortaal(extra[1], taal), extra[2]);
  return vertaalPortaal(regel, taal);
}

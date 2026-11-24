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
  fotoVergroten: string;
  mistPlaats: string;
  fotoSluiten: string;
  pompKop: string;
  pompSub: ReactNode;
  pompNaam: string;
  pompAantal: (pompen: number, bouwdrogers: number) => ReactNode;
  pompUit: (bouwdrogers: number) => ReactNode;
  pompToegevoegd: (pompen: number) => string;
  perPompDag: string;
  pompInfoKnop: string;
  pompInfoTitel: string;
  pompInfo: ReactNode;
  pompFotoAlt: string;
  pompMeerLink: string;
  /** Aria-label van het i'tje naast een optie. */
  infoKnop: (optie: string) => string;
  /** Uitleg in de popup achter het i'tje, per optie. */
  optieInfo: Record<"vochtmeting" | "rapport" | "stroom" | "monitoring" | "verdieping", { titel: string; alt: string; tekst: ReactNode }>;
  verdiepingKop: string;
  verdiepingSub: (ladderFee: string, voorzienFee: string) => ReactNode;
  verdiepingenKop: string;
  verdiepingenSub: string;
  verdiepingMinder: string;
  verdiepingMeer: string;
  hoeBoven: string;
  verdiepingenUitSimulator: (n: number) => string;
  toegangKeuzes: Record<"trap" | "lift" | "ladder" | "geen", { label: string; sub: string; alt: string }>;
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
  huurperiodeDagen: (dagen: number) => string;
  huurperiodeInbegrepen: string;
  huurperiodeWaarde: (dagen: number) => string;
  datumVol: (datum: string, binnenHorizon: boolean, horizon: number) => ReactNode;
  datumVerschoven: (van: string, naar: string) => ReactNode;
  planning: (p: { start: string; slot: string; dagen: number; einde: string; droogtijd: number }) => ReactNode;
  teKort: string;
  ophaaldatum: string;
  zelfdeSlot: string;
  ophaalNa: (dagen: number) => string;
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
  fotoVergroten: "Foto van uw pakket vergroten",
  mistPlaats: "Vul eerst in waar we leveren: typ uw gemeente of postcode en kies ze in de lijst.",
  fotoSluiten: "Sluiten",
  pompKop: "Condenspomp, automatische waterafvoer",
  pompSub: (
    <>
      Zonder pomp moet u elke bouwdroger <b>gemiddeld twee keer per dag</b> leegmaken. Met een
      condenspomp wordt het water automatisch afgevoerd en werkt de bouwdroger gewoon door, zonder
      te stoppen.
    </>
  ),
  pompNaam: "Bouwdrogers met condenspomp",
  pompAantal: (pompen, bouwdrogers) => (
    <>
      Op <b>{pompen === bouwdrogers ? `alle ${bouwdrogers}` : `${pompen} van de ${bouwdrogers}`}</b>{" "}
      bouwdroger{bouwdrogers === 1 ? "" : "s"} uit uw pakket: het water loopt vanzelf weg.
    </>
  ),
  pompUit: (bouwdrogers) => (
    <>
      Niet toegevoegd: u leegt de {bouwdrogers} bouwdroger{bouwdrogers === 1 ? "" : "s"} zelf, gemiddeld
      twee keer per dag.
    </>
  ),
  pompToegevoegd: (pompen) => `✓ ${pompen}× toegevoegd`,
  perPompDag: "per bouwdroger / dag",
  pompInfoKnop: "Meer uitleg over de condenspomp",
  pompInfoTitel: "Zo werkt de condenspomp",
  pompInfo: (
    <>
      <p>
        Een bouwdroger vangt het water uit de lucht op in zijn reservoir. Is dat vol, dan schakelt
        hij zichzelf uit en staat hij stil tot iemand het leegmaakt, <b>gemiddeld twee keer per
        dag</b>. Een weekend zonder legen is een weekend droogtijd kwijt.
      </p>
      <p>
        De condenspomp hangt aan de bouwdroger en pompt het water via een slang naar een afvoer,
        gootsteen of putje, ook als die hoger ligt. Het is zuiver condenswater en mag gewoon in de
        afvoer. Onze technieker legt de slang bij de plaatsing.
      </p>
    </>
  ),
  pompFotoAlt: "Condenspomp op een bouwdroger, met de afvoerslang naar een putje",
  pompMeerLink: "Alles over de condenspomp",
  infoKnop: (optie) => `Meer uitleg over ${optie}`,
  optieInfo: {
    vochtmeting: {
      titel: "Wat meten we, en waarom?",
      alt: "Technieker van Vernast meet het vocht in een muur, met een bouwdroger op de werf",
      tekst: (
        <>
          <p>
            Bij de levering meet onze technieker het vocht in de muren, de chape en de lucht. Zo weten
            we hoe nat de werf is en stellen we de toestellen juist in.
          </p>
          <p>
            Bij de ophaling meten we opnieuw. Zo ziet u zwart op wit dat alles droog is, vóór u
            tegels legt, parket plaatst of schildert. Dit zit <b>altijd inbegrepen</b>, u hoeft niets
            toe te voegen.
          </p>
        </>
      ),
    },
    rapport: {
      titel: "Wanneer heeft u een officieel vochtrapport nodig?",
      alt: "Technieker van Vernast vult een meetrapport in",
      tekst: (
        <>
          <p>
            De metingen bij levering en ophaling doen we altijd. Met het rapport krijgt u ze ook op
            papier: alle meetwaarden, de data en onze handtekening.
          </p>
          <p>
            Handig voor uw <b>verzekeraar</b> na waterschade, voor een <b>huisbaas</b> of voor het
            bouwdossier, of als uw vloerder of tegelzetter een bewijs vraagt dat de chape droog is.
          </p>
        </>
      ),
    },
    stroom: {
      titel: "Wat is een werfstroomkast?",
      alt: "Werfstroomkast met stopcontacten en zekeringen op een werf",
      tekst: (
        <>
          <p>
            Een werfstroomkast, ook paddestoel genoemd, is een verdeelkast met stopcontacten en eigen
            zekeringen. U heeft er één nodig als er op de werf <b>nog geen elektriciteitskast</b> is,
            of als de bestaande kast niet genoeg groepen heeft voor alle toestellen.
          </p>
          <p>
            Bouwdrogers draaien dag en nacht. Op één gewoon stopcontact springt de zekering, en dan
            staat alles stil. Wij sluiten de kast aan bij de plaatsing.
          </p>
        </>
      ),
    },
    monitoring: {
      titel: "Wat is digitale monitoring?",
      alt: "Smartphone in een hand met luchtvochtigheid, temperatuur en droogverloop",
      tekst: (
        <>
          <p>
            Een sensor op de toestellen meet continu de luchtvochtigheid en de temperatuur. U volgt de
            droging dan zelf online op, van thuis of vanop kantoor, zonder naar de werf te rijden.
          </p>
          <p>
            Loopt er iets mis, staat een toestel stil of daalt het vocht niet, dan zien wij dat ook
            en komen we kijken. Dit komt er <b>binnenkort</b>, zonder meerkost.
          </p>
        </>
      ),
    },
    verdieping: {
      titel: "Hoe leveren we op een verdieping?",
      alt: "Betonnen trap op een werf naar de bovenverdieping",
      tekst: <p>Het aantal verdiepingen nemen we over uit uw simulator. Geef hier aan of er een trap, lift of ladder beschikbaar is. Is er niets voorzien? Kies dan die optie, zodat Vernast de toegang kan voorzien.</p>,
    },
  },
  verdiepingKop: "Hoe bereiken we de verdiepingen?",
  verdiepingSub: (ladderFee, voorzienFee) => (
    <>
      Via de trap of lift is <b>inbegrepen</b>. Via een aanwezige ladder betaalt u eenmalig {ladderFee} voor het dragen. Is er niets voorzien? Dan brengen wij een ladder mee en dragen we de toestellen naar boven voor eenmalig {voorzienFee}.
    </>
  ),
  verdiepingenKop: "Aantal verdiepingen",
  verdiepingenSub:
    "Gelijkvloers = 0. Wij dragen en plaatsen alle toestellen op de juiste verdieping.",
  verdiepingMinder: "Eén verdieping minder",
  verdiepingMeer: "Eén verdieping meer",
  hoeBoven: "Hoe bereiken we de verdiepingen?",
  verdiepingenUitSimulator: (n) => n === 0 ? "Gelijkvloers · overgenomen uit de simulator" : `Gelijkvloers + ${n} ${n === 1 ? "verdieping" : "verdiepingen"} · overgenomen uit de simulator`,
  toegangKeuzes: {
    trap: { label: "Via de trap", sub: "Trap aanwezig op de werf", alt: "Betonnen trap op een werf" },
    lift: { label: "Via de lift", sub: "Lift beschikbaar voor de toestellen", alt: "Open lift in een gebouw in afwerking" },
    ladder: { label: "Via een ladder", sub: "Ladder aanwezig op de werf", alt: "Aluminium ladder naar de bovenverdieping" },
    geen: { label: "Niets voorzien", sub: "Wij brengen een ladder mee en dragen de toestellen", alt: "Technieker brengt een ladder mee naar de werf" },
  },
  viaTrap: "Via de trap",
  viaLadder: "Via een ladder",
  ladderEenmalig: (ladderFee) => `+ ${ladderFee} eenmalig`,
  extraToestellenKop: "Uw pakket",
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
  huurperiodeDagen: (dagen) => `${dagen} dagen`,
  huurperiodeInbegrepen: "inbegrepen in de pakketprijs",
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
  zelfdeSlot: "zelfde tijdslot als de levering",
  ophaalNa: (dagen) => `${dagen} dagen na de levering, automatisch`,
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
  fotoVergroten: "Agrandir la photo de votre pack",
  mistPlaats: "Indiquez d'abord où nous livrons : tapez votre commune ou code postal et choisissez-la dans la liste.",
  fotoSluiten: "Fermer",
  pompKop: "Pompe à condensats, évacuation automatique de l'eau",
  pompSub: (
    <>
      Sans pompe, vous devez vider chaque déshumidificateur <b>en moyenne deux fois par jour</b>. Avec
      une pompe à condensats, l'eau est évacuée automatiquement et le déshumidificateur continue de
      tourner, sans s'arrêter.
    </>
  ),
  pompNaam: "Déshumidificateurs avec pompe à condensats",
  pompAantal: (pompen, bouwdrogers) => (
    <>
      Sur <b>{pompen === bouwdrogers ? `les ${bouwdrogers}` : `${pompen} des ${bouwdrogers}`}</b>{" "}
      déshumidificateur{bouwdrogers === 1 ? "" : "s"} de votre pack : l'eau s'évacue toute seule.
    </>
  ),
  pompUit: (bouwdrogers) => (
    <>
      Non ajoutée : vous videz vous-même les {bouwdrogers} déshumidificateur{bouwdrogers === 1 ? "" : "s"},
      en moyenne deux fois par jour.
    </>
  ),
  pompToegevoegd: (pompen) => `✓ ${pompen}× ajoutée${pompen === 1 ? "" : "s"}`,
  perPompDag: "par déshumidificateur / jour",
  pompInfoKnop: "Plus d'explications sur la pompe à condensats",
  pompInfoTitel: "Comment fonctionne la pompe à condensats",
  pompInfo: (
    <>
      <p>
        Un déshumidificateur recueille l'eau de l'air dans son réservoir. Quand celui-ci est plein, il
        s'arrête jusqu'à ce que quelqu'un le vide, <b>en moyenne deux fois par jour</b>. Un week-end
        sans vidange, c'est un week-end de séchage perdu.
      </p>
      <p>
        La pompe se fixe au déshumidificateur et évacue l'eau par un tuyau vers une évacuation, un
        évier ou un siphon de sol, même situé plus haut. C'est de l'eau de condensation pure, elle
        peut aller à l'égout. Notre technicien pose le tuyau lors de l'installation.
      </p>
    </>
  ),
  pompFotoAlt: "Pompe à condensats sur un déshumidificateur, avec le tuyau vers un siphon",
  pompMeerLink: "Tout sur la pompe à condensats",
  infoKnop: (optie) => `Plus d'explications : ${optie}`,
  optieInfo: {
    vochtmeting: {
      titel: "Que mesurons-nous, et pourquoi ?",
      alt: "Technicien Vernast mesurant l'humidité d'un mur, avec un déshumidificateur sur le chantier",
      tekst: (
        <>
          <p>
            À la livraison, notre technicien mesure l'humidité des murs, de la chape et de l'air. Nous
            savons ainsi à quel point le chantier est humide et réglons correctement les appareils.
          </p>
          <p>
            À la reprise, nous mesurons à nouveau. Vous voyez noir sur blanc que tout est sec avant de
            carreler, poser le parquet ou peindre. C'est <b>toujours inclus</b>, rien à ajouter.
          </p>
        </>
      ),
    },
    rapport: {
      titel: "Quand avez-vous besoin d'un rapport d'humidité officiel ?",
      alt: "Technicien Vernast remplissant un rapport de mesure",
      tekst: (
        <>
          <p>
            Les mesures à la livraison et à la reprise sont toujours faites. Le rapport vous les donne
            aussi sur papier : toutes les valeurs, les dates et notre signature.
          </p>
          <p>
            Utile pour votre <b>assureur</b> après un dégât des eaux, pour un <b>propriétaire</b> ou
            le dossier de construction, ou si votre carreleur demande la preuve que la chape est sèche.
          </p>
        </>
      ),
    },
    stroom: {
      titel: "Qu'est-ce qu'un coffret de chantier ?",
      alt: "Coffret de chantier avec prises et disjoncteurs",
      tekst: (
        <>
          <p>
            Un coffret de chantier est un tableau avec prises et fusibles propres. Il vous en faut un
            s'il n'y a <b>pas encore de tableau électrique</b> sur le chantier, ou si le tableau
            existant n'a pas assez de circuits pour tous les appareils.
          </p>
          <p>
            Les déshumidificateurs tournent jour et nuit. Sur une seule prise, le fusible saute et tout
            s'arrête. Nous raccordons le coffret lors de l'installation.
          </p>
        </>
      ),
    },
    monitoring: {
      titel: "Qu'est-ce que le suivi numérique ?",
      alt: "Smartphone en main affichant l’humidité, la température et le suivi du séchage",
      tekst: (
        <>
          <p>
            Un capteur sur les appareils mesure en continu l'humidité de l'air et la température. Vous
            suivez le séchage en ligne, de chez vous ou du bureau, sans vous rendre sur le chantier.
          </p>
          <p>
            Si un appareil s'arrête ou si l'humidité ne baisse pas, nous le voyons aussi et passons
            voir. Disponible <b>bientôt</b>, sans supplément.
          </p>
        </>
      ),
    },
    verdieping: {
      titel: "Comment livrons-nous à l’étage ?",
      alt: "Escalier en béton sur un chantier vers l’étage",
      tekst: <p>Le nombre d’étages est repris du simulateur. Indiquez si un escalier, un ascenseur ou une échelle est disponible. Si rien n’est prévu, choisissez cette option pour que Vernast prévoie l’accès.</p>,
    },
  },
  verdiepingKop: "Comment accédons-nous aux étages ?",
  verdiepingSub: (ladderFee, voorzienFee) => (
    <>
      L’accès par un escalier ou un ascenseur est <b>compris</b>. Avec une échelle déjà sur place, le portage coûte {ladderFee} une seule fois. Si rien n’est prévu, nous apportons une échelle et portons les appareils pour {voorzienFee} une seule fois.
    </>
  ),
  verdiepingenKop: "Nombre d'étages",
  verdiepingenSub:
    "Rez-de-chaussée = 0. Nous portons et installons tous les appareils au bon étage.",
  verdiepingMinder: "Un étage de moins",
  verdiepingMeer: "Un étage de plus",
  hoeBoven: "Comment accédons-nous aux étages ?",
  verdiepingenUitSimulator: (n) => n === 0 ? "Rez-de-chaussée · repris du simulateur" : `Rez-de-chaussée + ${n} ${n === 1 ? "étage" : "étages"} · repris du simulateur`,
  toegangKeuzes: {
    trap: { label: "Par l’escalier", sub: "Escalier présent sur le chantier", alt: "Escalier en béton sur un chantier" },
    lift: { label: "Par l’ascenseur", sub: "Ascenseur disponible pour les appareils", alt: "Ascenseur ouvert dans un bâtiment en finition" },
    ladder: { label: "Par une échelle", sub: "Échelle présente sur le chantier", alt: "Échelle en aluminium vers l’étage" },
    geen: { label: "Rien de prévu", sub: "Nous apportons une échelle et portons les appareils", alt: "Technicien apportant une échelle sur le chantier" },
  },
  viaTrap: "Par l'escalier",
  viaLadder: "Par une échelle",
  ladderEenmalig: (ladderFee) => `+ ${ladderFee} une seule fois`,
  extraToestellenKop: "Votre forfait",
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
  huurperiodeDagen: (dagen) => `${dagen} jours`,
  huurperiodeInbegrepen: "compris dans le prix du pack",
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
  zelfdeSlot: "même créneau que la livraison",
  ophaalNa: (dagen) => `${dagen} jours après la livraison, automatiquement`,
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
  fotoVergroten: "Enlarge the photo of your package",
  mistPlaats: "First tell us where to deliver: type your town or postcode and pick it from the list.",
  fotoSluiten: "Close",
  pompKop: "Condensate pump, automatic water drainage",
  pompSub: (
    <>
      Without a pump you have to empty every dehumidifier <b>about twice a day on average</b>. With a
      condensate pump the water drains away automatically and the dehumidifier simply keeps running,
      without stopping.
    </>
  ),
  pompNaam: "Dehumidifiers with a condensate pump",
  pompAantal: (pompen, bouwdrogers) => (
    <>
      On <b>{pompen === bouwdrogers ? `all ${bouwdrogers}` : `${pompen} of the ${bouwdrogers}`}</b>{" "}
      dehumidifier{bouwdrogers === 1 ? "" : "s"} in your package: the water drains away by itself.
    </>
  ),
  pompUit: (bouwdrogers) => (
    <>
      Not added: you empty the {bouwdrogers} dehumidifier{bouwdrogers === 1 ? "" : "s"} yourself, about
      twice a day.
    </>
  ),
  pompToegevoegd: (pompen) => `✓ ${pompen}× added`,
  perPompDag: "per dehumidifier / day",
  pompInfoKnop: "More about the condensate pump",
  pompInfoTitel: "How the condensate pump works",
  pompInfo: (
    <>
      <p>
        A dehumidifier collects the water from the air in its tank. When the tank is full it switches
        itself off and stays off until someone empties it, <b>about twice a day on average</b>. A
        weekend without emptying is a weekend of drying lost.
      </p>
      <p>
        The pump attaches to the dehumidifier and pumps the water through a hose to a drain, sink or
        floor gully, even one at a higher level. It is pure condensate and can go down the drain. Our
        technician lays the hose during set-up.
      </p>
    </>
  ),
  pompFotoAlt: "Condensate pump on a dehumidifier, with the hose to a floor drain",
  pompMeerLink: "All about the condensate pump",
  infoKnop: (optie) => `More about ${optie}`,
  optieInfo: {
    vochtmeting: {
      titel: "What do we measure, and why?",
      alt: "Vernast technician measuring moisture in a wall, with a dehumidifier on site",
      tekst: (
        <>
          <p>
            At delivery our technician measures the moisture in the walls, the screed and the air. That
            tells us how wet the site is, so we set the machines up correctly.
          </p>
          <p>
            At collection we measure again, so you see in black and white that everything is dry before
            you tile, lay parquet or paint. This is <b>always included</b>; nothing to add.
          </p>
        </>
      ),
    },
    rapport: {
      titel: "When do you need an official moisture report?",
      alt: "Vernast technician filling in a measurement report",
      tekst: (
        <>
          <p>
            We always take the measurements at delivery and collection. The report puts them on paper:
            every reading, the dates and our signature.
          </p>
          <p>
            Useful for your <b>insurer</b> after water damage, for a <b>landlord</b> or the building
            file, or when your flooring contractor asks for proof that the screed is dry.
          </p>
        </>
      ),
    },
    stroom: {
      titel: "What is a site power box?",
      alt: "Site power distribution cabinet with sockets and circuit breakers",
      tekst: (
        <>
          <p>
            A site power box is a distribution unit with its own sockets and fuses. You need one when
            there is <b>no consumer unit on site yet</b>, or when the existing one has too few circuits
            for all the machines.
          </p>
          <p>
            Dehumidifiers run day and night. On a single socket the fuse trips and everything stops. We
            connect the box during installation.
          </p>
        </>
      ),
    },
    monitoring: {
      titel: "What is digital monitoring?",
      alt: "Hand holding a smartphone displaying humidity, temperature and drying progress",
      tekst: (
        <>
          <p>
            A sensor on the machines continuously measures humidity and temperature. You follow the
            drying online, from home or the office, without driving to the site.
          </p>
          <p>
            If a machine stops or the moisture doesn't drop, we see it too and come by. Coming{" "}
            <b>soon</b>, at no extra cost.
          </p>
        </>
      ),
    },
    verdieping: {
      titel: "How do we deliver upstairs?",
      alt: "Concrete staircase leading to the upper floor on a construction site",
      tekst: <p>We take the number of floors from your simulator. Select whether stairs, a lift or a ladder are available. If nothing is available, select that option so Vernast can arrange access.</p>,
    },
  },
  verdiepingKop: "How do we reach the upper floors?",
  verdiepingSub: (ladderFee, voorzienFee) => (
    <>
      Access by stairs or lift is <b>included</b>. Carrying via a ladder already on site costs a one-off {ladderFee}. If nothing is available, we bring a ladder and carry the equipment upstairs for a one-off {voorzienFee}.
    </>
  ),
  verdiepingenKop: "Number of floors",
  verdiepingenSub:
    "Ground floor = 0. We carry and install all units on the right floor.",
  verdiepingMinder: "One floor fewer",
  verdiepingMeer: "One floor more",
  hoeBoven: "How do we reach the upper floors?",
  verdiepingenUitSimulator: (n) => n === 0 ? "Ground floor · taken from the simulator" : `Ground floor + ${n} ${n === 1 ? "floor" : "floors"} · taken from the simulator`,
  toegangKeuzes: {
    trap: { label: "By the stairs", sub: "Staircase available on site", alt: "Concrete staircase on a construction site" },
    lift: { label: "By the lift", sub: "Lift available for the equipment", alt: "Open lift in a building under construction" },
    ladder: { label: "By a ladder", sub: "Ladder available on site", alt: "Aluminium ladder leading upstairs" },
    geen: { label: "Nothing available", sub: "We bring a ladder and carry the equipment", alt: "Technician bringing a ladder to the site" },
  },
  viaTrap: "By the stairs",
  viaLadder: "By ladder",
  ladderEenmalig: (ladderFee) => `+ ${ladderFee} one-off`,
  extraToestellenKop: "Your package",
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
  huurperiodeDagen: (dagen) => `${dagen} days`,
  huurperiodeInbegrepen: "included in the package price",
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
  zelfdeSlot: "same time slot as the delivery",
  ophaalNa: (dagen) => `${dagen} days after delivery, automatically`,
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
      "Plaatsing op verdieping (lift)": "Installation à l’étage (ascenseur)",
      "Toegang voorzien door Vernast": "Accès prévu par Vernast",
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
      "Plaatsing op verdieping (lift)": "Upper-floor installation (lift)",
      "Toegang voorzien door Vernast": "Access arranged by Vernast",
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
  const verdieping = /^Plaatsing tot verdieping (\d+)$/.exec(regel);
  if (verdieping) return taal === "fr" ? `Installation jusqu’à l’étage ${verdieping[1]}` : `Installation up to floor ${verdieping[1]}`;
  const dekking = /^Dekking (.+)$/.exec(regel);
  if (dekking) return w.dekking(vertaalPortaal(dekking[1], taal));
  const pomp = /^(\d+)× condenspomp · (\d+) dagen$/.exec(regel);
  if (pomp) return w.pomp(pomp[1], pomp[2]);
  const extra = /^(.+) · (\d+) wk$/.exec(regel);
  if (extra) return w.extra(vertaalPortaal(extra[1], taal), extra[2]);
  return vertaalPortaal(regel, taal);
}

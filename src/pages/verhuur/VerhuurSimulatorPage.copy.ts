import type { Copy } from "@/i18n/useTaal";
import type { DeviceKey } from "@/data/verhuur";
import type { Dak } from "@/lib/droogSimulator";

/**
 * Teksten van de droogsimulator. De Nederlandse staan letterlijk zoals ze in
 * de pagina stonden; de rekenkern (`lib/droogSimulator.ts`) levert zijn eigen
 * labels via `woningTekst`, `faseInTaal` enz.
 */

const meervoud = (n: number, een: string, meer: string) => (n === 1 ? een : meer);

export interface SimCopy {
  stappen: string[];
  dakKort: { zadeldak: string; plat: string; lessenaar: string };
  toestelKort: Record<DeviceKey, string>;
  kop: {
    stap1: string;
    welkeWoning: string;
    stap2: string;
    lagenKamers: (lagen: string, kamers: number) => string;
    stap3: string;
    hoeVer: string;
    stap4: string;
    nogNat: (wat: string) => string;
    watNat: string;
    planKlaar: string;
    plan: (modus: "plaatsen" | "drogen", verdieping: string) => string;
    maatwerk: string;
    droogKlaar: string;
    geplaatst: string;
    aanHetWerk: (n: number) => string;
  };
  volgende: string;
  toonPlan: string;
  minstensEen: string;
  nietsNat: string;
  totaal: string;
  voorHuur: (weken: number) => string;
  service: { name: string; description: string; serviceType: string };
  kruimelHome: string;
  kruimel: string;
  h1: string;
  vragen: string;
  stapVan: (nr: number, totaal: number, naam: string) => string;
  vraagVan: (nr: number, totaal: number) => string;
  droogplan: string;
  /* stap 1 */
  s1Kop: string;
  s1Sub: string;
  typeWoning: string;
  /* stap 2 */
  s2Kop: string;
  s2DakKop: string;
  keuzeKop: string;
  keuzeSub: string;
  keuzeTag: string;
  keuze: Record<"werf" | "water", { label: string; sub: string }>;
  wsStage: { eyebrow: string; keuzeEyebrow: string; leeg: string; nat: (waar: string) => string; plek: Record<"kelder" | "gelijkvloers" | "verdieping" | "zolder", string> };
  funnel: {
    lieverBellen: string;
    /** de drie beloftes onder de keuze werf/waterschade */
    beloftes: string[];
  };
  s2DakSub: string;
  droogsimulator: string;
  /** "Stap" en "van" rond de cijfers in de teller bovenaan: Stap 2 van 4 */
  stapTeller: [string, string];
  dakHint: Record<Dak, string>;
  kamersUitleg: string;
  meerRuimtes: string;
  /** de zolder zelf, als ruimte op de zolderverdieping */
  openZolder: string;
  kamers: (n: number) => string;
  dak: string;
  dakAppartement: string;
  daktype: string;
  verdiepen: string;
  gelijkvloers: string;
  verdiepKort: (n: number) => string;
  kamersPerVerdieping: string;
  inTotaal: (n: number) => string;
  toonInTekening: (naam: string) => string;
  minderKamers: (naam: string) => string;
  meerKamers: (naam: string) => string;
  vloeroppervlakte: string;
  maatwerkKlein: string;
  geschat: (m2: number) => string;
  meerDan: (m2: number) => string;
  tot: (m2: string) => string;
  /** de gekozen oppervlakte gedeeld over de bouwlagen */
  oppPerLaag: (m2: string) => string;
  /* stap 3 */
  s3Kop: string;
  s3Sub: string;
  kiesFase: string;
  verwarming: string;
  /*
    De verwarmingsvraag als twee situaties in plaats van ja/nee (23-11-2026).
    "Is er verwarming?" met Ja/Nee verzwijgt waarom hij gesteld wordt: zonder
    verwarming komen er kachels in het pakket, en dat kost geld. De klant koos
    dus blind. Nu staat het gevolg in het antwoord zelf.
  */
  warmKop: string;
  warmJa: [titel: string, gevolg: string];
  warmNee: [titel: string, gevolg: string];
  ja: string;
  nee: string;
  kachelsErbij: [vet: string, rest: string];
  hoeSnel: [kort: string, lang: string];
  hoeSnelVol: string;
  plusDroger: string;
  weken: (n: number) => string;
  /* stap 5 */
  planKop: string;
  planDroogIn: string;
  planLevering: string;
  planInbegrepen: string;
  planKnop: string;
  planKnopSub: string;
  /* stap 4 */
  s4Kop: string;
  perLaag: string;
  eenLaag: string;
  weetNiet: string;
  /* droogplan */
  droogIn: string;
  weekOfWeken: (n: number) => string;
  toestellen: (n: number) => string;
  ontvochtiging: string;
  lucht: string;
  m3u: string;
  l24u: string;
  letOp: string;
  maatwerkKop: string;
  geenPakketKop: string;
  maatwerkTekst: (m2: number) => string;
  geenPakketTekst: string;
  maatwerkKnop: string;
  naarCalculator: string;
  bel: (nr: string) => string;
  terug: string;
  terugKnop: string;
  boek: string;
  opnieuwBeginnen: string;
  opnieuw: string;
  /* tekening */
  tekening: string;
  lagen: (n: number) => string;
  opnieuwAfspelen: string;
  verdieping: string;
  toestelTel: (n: number) => string;
  legende: string;
  droger: string;
  ventilator: string;
  kachel: string;
  vocht: string;
  uwPakket: string;
  /* lagen in huis */
  alleenGelijkvloers: string;
  gelijkvloersMet: (uitleg: string) => string;
  plusVerdiep: (n: number) => string;
  plusZolder: string;
  laag: {
    pd: { titel: string; wat: string; onderschrift: string; tip: string };
    cd: { titel: string; wat: string; onderschrift: string; tip: string };
  };
  geen: string;
  droogKlein: string;
  nietNat: string;
  meest: string;
  weetNietKlein: string;
  droog: string;
  nietNatBadge: string;
  dikteSleep: string;
  laagDroog: (titel: string) => string;
  telNiet: string;
  dikte: (titel: string) => string;
  dikteCm: (titel: string) => string;
  geenPleister: string;
  geenChape: string;
  zonderDroger: (weken: number) => string;
  gerekendMet: (cm: number) => string;
  doorsnede: string;
  detailA: string;
  cmPleister: (v: string) => string;
  cmChape: (v: string) => string;
  /* teller */
  vanGeplaatst: (n: number) => string;
  dag: string;
  van: (n: number) => string;
  allesDroog: string;
  droogt: (naam: string) => string;
  afgevoerd: string;
  stempel: string;
  stempelDag: (naam: string, dag: number) => string;
}

export const COPY: Copy<SimCopy> = {
  nl: {
    stappen: ["Woning", "Verdiepingen", "Bouwfase", "Materiaal", "Droogplan"],
    dakKort: { zadeldak: "Zadeldak", plat: "Plat", lessenaar: "Lessenaar" },
    toestelKort: { small: "Bouwdroger", medium: "Droger medium", axiaal: "Ventilator", kachel: "Kachel" },
    kop: {
      stap1: "Stap 1 · Woning",
      welkeWoning: "Welke woning droogt u?",
      stap2: "Stap 2 · Verdiepingen",
      lagenKamers: (lagen, kamers) => `${lagen}, ${kamers} ruimtes`,
      stap3: "Stap 3 · Bouwfase",
      hoeVer: "Hoe ver staat de werf?",
      stap4: "Stap 4 · Materiaal",
      nogNat: (wat) => `${wat}: nog nat`,
      watNat: "Wat is er nat?",
      planKlaar: "Droogplan · klaar",
      plan: (modus, verdieping) => `Droogplan · ${modus === "plaatsen" ? "plaatsen" : "drogen"} · ${verdieping}`,
      maatwerk: "Maatwerk",
      droogKlaar: "Droog en klaar om af te werken",
      geplaatst: "De toestellen worden geplaatst",
      aanHetWerk: (n) => `${n} toestellen aan het werk`,
    },
    volgende: "Volgende →",
    toonPlan: "Toon mijn droogplan →",
    minstensEen: "Kies minstens één laag die nat is.",
    nietsNat: "Niets nat? Dan hoeft er niets te drogen.",
    totaal: "Totaal, alles inbegrepen",
    voorHuur: (w) => `voor ${w} ${w === 1 ? "week" : "weken"} huur`,
    service: {
      name: "Droogsimulator",
      description:
        "Zie in vijf stappen welke bouwdrogers uw woning nodig heeft, waar ze komen te staan en wat het pakket kost.",
      serviceType: "Bouwdroging",
    },
    kruimelHome: "Home",
    kruimel: "Droogsimulator",
    h1: "Droogsimulator: zie welke bouwdrogers uw woning nodig heeft",
    vragen: "Vragen",
    stapVan: (nr, totaal, naam) => `Stap ${nr} van ${totaal}: ${naam}`,
    vraagVan: (nr, totaal) => `Vraag ${nr} van ${totaal}`,
    droogplan: "Droogplan",
    s1Kop: "Wat voor woning droogt u?",
    s1Sub: "Zo weten we hoe de ruimtes liggen en waar de toestellen komen.",
    typeWoning: "Type woning",
    s2Kop: "Hoe is uw woning opgebouwd?",
    s2DakKop: "Welk dak heeft uw woning?",
    keuzeKop: "Wat moet er drogen?",
    keuzeSub: "Zo sturen we u meteen de juiste kant op.",
    keuzeTag: "Levering binnen 24 uur",
    keuze: {
      werf: { label: "Een werf", sub: "Nieuwbouw of renovatie: chape, pleister of metselwerk" },
      water: { label: "Waterschade", sub: "Lek, overstroming of bluswater" },
    },
    wsStage: { eyebrow: "Waterschade", keuzeEyebrow: "Droogsimulator", leeg: "Waar is het nat?", nat: (waar) => `Nat: ${waar}`, plek: { kelder: "kelder", gelijkvloers: "gelijkvloers", verdieping: "verdieping", zolder: "zolder" } },
    funnel: {
      lieverBellen: "Liever bellen?",
      beloftes: ["Levering binnen 24 uur", "Gratis advies", "Geen spam"],
    },
    s2DakSub: "Kies het dak dat het meest op het uwe lijkt.",
    droogsimulator: "Droogsimulator",
    stapTeller: ["Stap", "van"],
    dakHint: { zadeldak: "Schuin, met een nok", plat: "Vlak, met een dakrand", lessenaar: "Schuin, naar één kant" },
    kamersUitleg: "Elke afgesloten ruimte telt, ook toilet en berging. Gang en trap niet.",
    meerRuimtes: "Meer ruimtes? Kies een grotere oppervlakte.",
    openZolder: "Open ruimte",
    kamers: (n) => `${n} kamers`,
    dak: "Dak",
    dakAppartement: " · bij een appartement altijd plat",
    daktype: "Daktype",
    verdiepen: "Verdiepen boven het gelijkvloers",
    gelijkvloers: "Gelijkvloers",
    verdiepKort: (n) => (n === 1 ? "verdiep" : "verdiepen"),
    kamersPerVerdieping: "Ruimtes per verdieping",
    inTotaal: (n) => `${n} in totaal`,
    toonInTekening: (naam) => `Toon ${naam.toLowerCase()} in de tekening`,
    minderKamers: (naam) => `Eén ruimte minder: ${naam.toLowerCase()}`,
    meerKamers: (naam) => `Eén ruimte meer: ${naam.toLowerCase()}`,
    vloeroppervlakte: "Vloeroppervlakte",
    maatwerkKlein: "maatwerk",
    geschat: (m2) => `geschat ± ${m2} m²`,
    meerDan: (m2) => `meer dan ${m2} m²`,
    tot: (m2) => `tot ${m2} m²`,
    oppPerLaag: (m2) => `± ${m2} m² per bouwlaag`,
    s3Kop: "Hoe ver staat de werf?",
    s3Sub: "Kies hoe ver de werken staan. De foto toont waar het vocht zit.",
    kiesFase: "Kies uw fase",
    verwarming: "Is er verwarming?",
    warmKop: "Kan de woning warm gestookt worden?",
    warmJa: ["De verwarming draait al", "Dan hebben we alleen drogers en ventilatoren nodig."],
    warmNee: ["Nog geen verwarming", "Dan zetten we er kachels bij: drogen lukt niet in de kou."],
    ja: "Ja",
    nee: "Nee",
    kachelsErbij: ["Kachels", " erbij in uw pakket."],
    hoeSnel: ["Hoe snel", " moet het droog zijn"],
    hoeSnelVol: "Hoe snel moet het droog zijn?",
    plusDroger: "+1 droger",
    weken: (n) => `${n} weken`,
    planKop: "Uw droogplan",
    planDroogIn: "Droog in",
    planLevering: "Levering & ophaling",
    planInbegrepen: "Inbegrepen",
    planKnop: "Bekijk uw pakket",
    planKnopSub: "Daar ziet u de prijs, de huurduur en de leverdatum.",
    s4Kop: "Hoe dik is het nat?",
    perLaag: "Kies per laag de dikte.",
    eenLaag: "Kies de dikte.",
    weetNiet: " Weet u het niet, dan rekenen wij met de gangbare maat.",
    droogIn: "Droog in",
    weekOfWeken: (n) => `± ${n} ${meervoud(n, "week", "weken")}`,
    toestellen: (n) => `${n} toestellen`,
    ontvochtiging: "Ontvochtiging",
    lucht: "Lucht",
    m3u: "m³/u",
    l24u: "l/24u",
    letOp: "Let op",
    maatwerkKop: "Groot project? Dan maken we het droogplan op maat.",
    geenPakketKop: "Voor deze combinatie hebben we geen vast pakket.",
    maatwerkTekst: (m2) =>
      `Boven ${m2} m² stellen wij het droogplan persoonlijk samen, met plaatsbezoek indien nodig. Wij nemen binnen één werkdag contact op.`,
    geenPakketTekst: "Stel uw pakket samen in de Calculator, of bel ons: we rekenen het samen uit.",
    maatwerkKnop: "Vraag uw maatwerkofferte aan →",
    naarCalculator: "Naar de Calculator →",
    bel: (nr) => `Bel ${nr}`,
    terug: "Terug",
    terugKnop: "← Terug",
    boek: "Boek dit pakket →",
    opnieuwBeginnen: "Opnieuw beginnen",
    opnieuw: "Opnieuw",
    tekening: "Tekening van uw woning",
    lagen: (n) => `${n} ${n === 1 ? "laag" : "lagen"}`,
    opnieuwAfspelen: "Opnieuw afspelen",
    verdieping: "Verdieping",
    toestelTel: (n) => `${n} ${n === 1 ? "toestel" : "toestellen"}`,
    legende: "Legende",
    droger: "Droger",
    ventilator: "Ventilator",
    kachel: "Kachel",
    vocht: "Vocht",
    uwPakket: "Uw pakket",
    alleenGelijkvloers: "Alleen gelijkvloers",
    gelijkvloersMet: (uitleg) => `Gelijkvloers ${uitleg}`,
    plusVerdiep: (n) => `+ ${n} ${n === 1 ? "verdiep" : "verdiepen"}`,
    plusZolder: "+ zolder",
    laag: {
      pd: {
        titel: "Pleisterwerk",
        wat: "De gladde laag gips op uw muren en plafonds. Vers aangebracht zit ze vol water.",
        onderschrift: "Gips op de muur, nog vochtig",
        tip: "Waar zie ik dat? In een inbouwdoos of naast een deurlijst.",
      },
      cd: {
        titel: "Chape",
        wat: "De dekvloer van zand en cement onder uw tegels of parket.",
        onderschrift: "Zandcement op de isolatie",
        tip: "Waar zie ik dat? Aan de dorpel, of vraag het aan uw chapeur.",
      },
    },
    geen: "Geen",
    droogKlein: "droog",
    nietNat: "niet nat",
    meest: "meest",
    weetNietKlein: "weet niet",
    droog: "Droog",
    nietNatBadge: "Niet nat",
    dikteSleep: "Dikte in cm · sleep of kies",
    laagDroog: (titel) => `${titel}: droog`,
    telNiet: "Deze laag telt niet mee in uw droogplan.",
    dikte: (titel) => `Dikte ${titel.toLowerCase()}`,
    dikteCm: (titel) => `Dikte ${titel.toLowerCase()} in cm`,
    geenPleister: "Geen nat pleisterwerk: niets te drogen.",
    geenChape: "Geen natte chape: niets te drogen.",
    zonderDroger: (w) => `± ${w} ${w === 1 ? "week" : "weken"} drogen zonder droger`,
    gerekendMet: (cm) => ` · gerekend met ${cm} cm`,
    doorsnede: "Doorsnede van muur en vloer",
    detailA: "Detail A · doorsnede",
    cmPleister: (v) => `${v} cm pleister`,
    cmChape: (v) => `${v} cm chape`,
    vanGeplaatst: (n) => ` van ${n} geplaatst`,
    dag: "Dag",
    van: (n) => ` van ${n}`,
    allesDroog: "Alles droog",
    droogt: (naam) => `${naam} droogt`,
    afgevoerd: " l water afgevoerd",
    stempel: "Droog",
    stempelDag: (naam, dag) => `${naam} · dag ${dag}`,
  },
  fr: {
    stappen: ["Logement", "Étages", "Phase du chantier", "Matériau", "Plan de séchage"],
    dakKort: { zadeldak: "Deux pans", plat: "Plat", lessenaar: "Appentis" },
    // Zacht afbreekstreepje (\u00ad): op een gsm-tegel past het woord niet in één stuk.
    toestelKort: { small: "Déshumi\u00addificateur", medium: "Déshumi\u00addificateur medium", axiaal: "Ventilateur", kachel: "Chauffage" },
    kop: {
      stap1: "Étape 1 · Logement",
      welkeWoning: "Quel logement séchez-vous ?",
      stap2: "Étape 2 · Étages",
      lagenKamers: (lagen, kamers) => `${lagen}, ${kamers} pièces`,
      stap3: "Étape 3 · Phase du chantier",
      hoeVer: "Où en est le chantier ?",
      stap4: "Étape 4 · Matériau",
      nogNat: (wat) => `${wat} : encore humide`,
      watNat: "Qu'est-ce qui est humide ?",
      planKlaar: "Plan de séchage · terminé",
      plan: (modus, verdieping) =>
        `Plan de séchage · ${modus === "plaatsen" ? "installation" : "séchage"} · ${verdieping}`,
      maatwerk: "Sur mesure",
      droogKlaar: "Sec et prêt pour la finition",
      geplaatst: "Les appareils sont installés",
      aanHetWerk: (n) => `${n} appareils au travail`,
    },
    volgende: "Suivant →",
    toonPlan: "Voir mon plan de séchage →",
    minstensEen: "Choisissez au moins une couche humide.",
    nietsNat: "Rien d'humide ? Alors il n'y a rien à sécher.",
    totaal: "Total, tout compris",
    voorHuur: (w) => `pour ${w} ${w === 1 ? "semaine" : "semaines"} de location`,
    service: {
      name: "Simulateur de séchage",
      description:
        "Découvrez en cinq étapes de quels déshumidificateurs de chantier votre logement a besoin, où ils seront placés et ce que coûte le pack.",
      serviceType: "Séchage de chantier",
    },
    kruimelHome: "Accueil",
    kruimel: "Simulateur de séchage",
    h1: "Simulateur de séchage : découvrez de quels déshumidificateurs votre logement a besoin",
    vragen: "Questions",
    stapVan: (nr, totaal, naam) => `Étape ${nr} sur ${totaal} : ${naam}`,
    vraagVan: (nr, totaal) => `Question ${nr} sur ${totaal}`,
    droogplan: "Plan de séchage",
    s1Kop: "Quel type de logement séchez-vous ?",
    s1Sub: "Nous savons ainsi comment les pièces sont disposées et où placer les appareils.",
    typeWoning: "Type de logement",
    s2Kop: "Comment votre logement est-il construit ?",
    s2DakKop: "Quel toit a votre logement ?",
    keuzeKop: "Que faut-il sécher ?",
    keuzeSub: "Nous vous orientons ainsi directement dans la bonne direction.",
    keuzeTag: "Livraison dans les 24 heures",
    keuze: {
      werf: { label: "Un chantier", sub: "Construction ou rénovation : chape, plâtre ou maçonnerie" },
      water: { label: "Dégât des eaux", sub: "Fuite, inondation ou eau d'extinction" },
    },
    wsStage: { eyebrow: "Dégât des eaux", keuzeEyebrow: "Simulateur de séchage", leeg: "Où est-ce humide ?", nat: (waar) => `Humide : ${waar}`, plek: { kelder: "cave", gelijkvloers: "rez-de-chaussée", verdieping: "étage", zolder: "grenier" } },
    funnel: {
      lieverBellen: "Vous préférez appeler ?",
      beloftes: ["Livraison dans les 24 h", "Conseil gratuit", "Pas de spam"],
    },
    s2DakSub: "Choisissez le toit qui ressemble le plus au vôtre.",
    droogsimulator: "Simulateur de séchage",
    stapTeller: ["Étape", "sur"],
    dakHint: { zadeldak: "En pente, avec un faîte", plat: "Plat, avec un acrotère", lessenaar: "En pente, d'un seul côté" },
    kamersUitleg: "Chaque pièce fermée compte, WC et débarras compris. Pas le couloir ni l'escalier.",
    meerRuimtes: "Plus de pièces ? Choisissez une surface plus grande.",
    openZolder: "Espace ouvert",
    kamers: (n) => `${n} pièces`,
    dak: "Toit",
    dakAppartement: " · toujours plat pour un appartement",
    daktype: "Type de toit",
    verdiepen: "Étages au-dessus du rez-de-chaussée",
    gelijkvloers: "Rez-de-chaussée",
    verdiepKort: (n) => (n === 1 ? "étage" : "étages"),
    kamersPerVerdieping: "Pièces par niveau",
    inTotaal: (n) => `${n} au total`,
    toonInTekening: (naam) => `Afficher ${naam.toLowerCase()} dans le dessin`,
    minderKamers: (naam) => `Une pièce de moins : ${naam.toLowerCase()}`,
    meerKamers: (naam) => `Une pièce de plus : ${naam.toLowerCase()}`,
    vloeroppervlakte: "Surface au sol",
    maatwerkKlein: "sur mesure",
    geschat: (m2) => `estimation ± ${m2} m²`,
    meerDan: (m2) => `plus de ${m2} m²`,
    tot: (m2) => `jusqu'à ${m2} m²`,
    oppPerLaag: (m2) => `± ${m2} m² par niveau`,
    s3Kop: "Où en est le chantier ?",
    s3Sub: "Indiquez où en sont les travaux. La photo montre où se trouve l'humidité.",
    kiesFase: "Choisissez votre phase",
    verwarming: "Y a-t-il du chauffage ?",
    warmKop: "Le logement peut-il être chauffé ?",
    warmJa: ["Le chauffage fonctionne déjà", "Nous n'avons alors besoin que de déshumidificateurs et de ventilateurs."],
    warmNee: ["Pas encore de chauffage", "Nous ajoutons alors des chauffages : rien ne sèche dans le froid."],
    ja: "Oui",
    nee: "Non",
    kachelsErbij: ["Chauffages", " ajoutés à votre pack."],
    hoeSnel: ["Délai", " pour que ce soit sec"],
    hoeSnelVol: "En combien de temps cela doit-il être sec ?",
    plusDroger: "+1 déshumidificateur",
    weken: (n) => `${n} semaines`,
    planKop: "Votre plan de séchage",
    planDroogIn: "Sec en",
    planLevering: "Livraison & enlèvement",
    planInbegrepen: "Inclus",
    planKnop: "Voir votre formule",
    planKnopSub: "Vous y trouvez le prix, la durée de location et la date de livraison.",
    s4Kop: "Quelle épaisseur est humide ?",
    perLaag: "Choisissez l'épaisseur de chaque couche.",
    eenLaag: "Choisissez l'épaisseur.",
    weetNiet: " Vous ne savez pas ? Nous calculons avec l'épaisseur courante.",
    droogIn: "Sec en",
    weekOfWeken: (n) => `± ${n} ${meervoud(n, "semaine", "semaines")}`,
    toestellen: (n) => `${n} appareils`,
    ontvochtiging: "Déshumidification",
    lucht: "Air",
    m3u: "m³/h",
    l24u: "l/24 h",
    letOp: "Attention",
    maatwerkKop: "Grand projet ? Nous établissons alors le plan de séchage sur mesure.",
    geenPakketKop: "Pour cette combinaison, nous n'avons pas de pack standard.",
    maatwerkTekst: (m2) =>
      `Au-delà de ${m2} m², nous composons le plan de séchage personnellement, avec une visite sur place si nécessaire. Nous vous contactons dans un délai d'un jour ouvrable.`,
    geenPakketTekst: "Composez votre pack dans le calculateur, ou appelez-nous : nous le calculons ensemble.",
    maatwerkKnop: "Demandez votre devis sur mesure →",
    naarCalculator: "Vers le calculateur →",
    bel: (nr) => `Appelez le ${nr}`,
    terug: "Retour",
    terugKnop: "← Retour",
    boek: "Réserver ce pack →",
    opnieuwBeginnen: "Recommencer",
    opnieuw: "Recommencer",
    tekening: "Dessin de votre logement",
    lagen: (n) => `${n} ${n === 1 ? "niveau" : "niveaux"}`,
    opnieuwAfspelen: "Rejouer",
    verdieping: "Étage",
    toestelTel: (n) => `${n} ${n === 1 ? "appareil" : "appareils"}`,
    legende: "Légende",
    droger: "Déshumidificateur",
    ventilator: "Ventilateur",
    kachel: "Chauffage",
    vocht: "Humidité",
    uwPakket: "Votre pack",
    alleenGelijkvloers: "Rez-de-chaussée seul",
    gelijkvloersMet: (uitleg) => `Rez-de-chaussée ${uitleg}`,
    plusVerdiep: (n) => `+ ${n} ${n === 1 ? "étage" : "étages"}`,
    plusZolder: "+ grenier",
    laag: {
      pd: {
        titel: "Plafonnage",
        wat: "La couche lisse de plâtre sur vos murs et plafonds. Fraîchement appliquée, elle est pleine d'eau.",
        onderschrift: "Plâtre sur le mur, encore humide",
        tip: "Où le voir ? Dans une boîte d'encastrement ou à côté d'un chambranle.",
      },
      cd: {
        titel: "Chape",
        wat: "La chape de sable et de ciment sous votre carrelage ou votre parquet.",
        onderschrift: "Mortier sable-ciment sur l'isolation",
        tip: "Où le voir ? Au seuil de porte, ou demandez à votre chapiste.",
      },
    },
    geen: "Aucune",
    droogKlein: "sèche",
    nietNat: "pas humide",
    meest: "courant",
    weetNietKlein: "je ne sais pas",
    droog: "Sèche",
    nietNatBadge: "Pas humide",
    dikteSleep: "Épaisseur en cm · faites glisser ou choisissez",
    laagDroog: (titel) => `${titel} : sec`,
    telNiet: "Cette couche n'est pas prise en compte dans votre plan de séchage.",
    dikte: (titel) => `Épaisseur ${titel.toLowerCase()}`,
    dikteCm: (titel) => `Épaisseur ${titel.toLowerCase()} en cm`,
    geenPleister: "Pas de plafonnage humide : rien à sécher.",
    geenChape: "Pas de chape humide : rien à sécher.",
    zonderDroger: (w) => `± ${w} ${w === 1 ? "semaine" : "semaines"} de séchage sans déshumidificateur`,
    gerekendMet: (cm) => ` · calculé avec ${cm} cm`,
    doorsnede: "Coupe du mur et du sol",
    detailA: "Détail A · coupe",
    cmPleister: (v) => `${v} cm de plafonnage`,
    cmChape: (v) => `${v} cm de chape`,
    vanGeplaatst: (n) => ` sur ${n} installés`,
    dag: "Jour",
    van: (n) => ` sur ${n}`,
    allesDroog: "Tout est sec",
    droogt: (naam) => `${naam} sèche`,
    afgevoerd: " l d'eau évacués",
    stempel: "Sec",
    stempelDag: (naam, dag) => `${naam} · jour ${dag}`,
  },
  en: {
    stappen: ["Property", "Floors", "Build stage", "Material", "Drying plan"],
    dakKort: { zadeldak: "Pitched", plat: "Flat", lessenaar: "Mono-pitch" },
    // Zacht afbreekstreepje (­), net als in het Frans: smalle tegels op een gsm.
    toestelKort: { small: "Dehumi­difier", medium: "Dehumidifier medium", axiaal: "Fan", kachel: "Heater" },
    kop: {
      stap1: "Step 1 · Property",
      welkeWoning: "Which property are you drying?",
      stap2: "Step 2 · Floors",
      lagenKamers: (lagen, kamers) => `${lagen}, ${kamers} rooms`,
      stap3: "Step 3 · Build stage",
      hoeVer: "How far along is the site?",
      stap4: "Step 4 · Material",
      nogNat: (wat) => `${wat}: still wet`,
      watNat: "What is wet?",
      planKlaar: "Drying plan · done",
      plan: (modus, verdieping) => `Drying plan · ${modus === "plaatsen" ? "setting up" : "drying"} · ${verdieping}`,
      maatwerk: "Bespoke",
      droogKlaar: "Dry and ready for finishing",
      geplaatst: "The units are being set up",
      aanHetWerk: (n) => `${n} units at work`,
    },
    volgende: "Next →",
    toonPlan: "Show my drying plan →",
    minstensEen: "Choose at least one layer that is wet.",
    nietsNat: "Nothing wet? Then there is nothing to dry.",
    totaal: "Total, all inclusive",
    voorHuur: (w) => `for ${w} ${w === 1 ? "week" : "weeks"} of hire`,
    service: {
      name: "Drying simulator",
      description:
        "See in five steps which construction dehumidifiers your home needs, where they will stand and what the package costs.",
      serviceType: "Construction drying",
    },
    kruimelHome: "Home",
    kruimel: "Drying simulator",
    h1: "Drying simulator: see which construction dehumidifiers your home needs",
    vragen: "Questions",
    stapVan: (nr, totaal, naam) => `Step ${nr} of ${totaal}: ${naam}`,
    vraagVan: (nr, totaal) => `Question ${nr} of ${totaal}`,
    droogplan: "Drying plan",
    s1Kop: "What kind of property are you drying?",
    s1Sub: "That tells us how the rooms are laid out and where the units will go.",
    typeWoning: "Type of property",
    s2Kop: "How is your home built up?",
    s2DakKop: "What roof does your home have?",
    keuzeKop: "What needs drying?",
    keuzeSub: "That way we send you the right way straight away.",
    keuzeTag: "Delivery within 24 hours",
    keuze: {
      werf: { label: "A building site", sub: "New build or renovation: screed, plaster or masonry" },
      water: { label: "Water damage", sub: "Leak, flooding or firefighting water" },
    },
    wsStage: { eyebrow: "Water damage", keuzeEyebrow: "Drying simulator", leeg: "Where is it wet?", nat: (waar) => `Wet: ${waar}`, plek: { kelder: "basement", gelijkvloers: "ground floor", verdieping: "upper floor", zolder: "attic" } },
    funnel: {
      lieverBellen: "Rather call?",
      beloftes: ["Delivery within 24 h", "Free advice", "No spam"],
    },
    s2DakSub: "Pick the roof that looks most like yours.",
    droogsimulator: "Drying simulator",
    stapTeller: ["Step", "of"],
    dakHint: { zadeldak: "Sloped, with a ridge", plat: "Flat, with a parapet", lessenaar: "Sloped to one side" },
    kamersUitleg: "Every closed room counts, toilet and storage included. Not the hall or stairs.",
    meerRuimtes: "More rooms? Choose a larger floor area.",
    openZolder: "Open space",
    kamers: (n) => `${n} rooms`,
    dak: "Roof",
    dakAppartement: " · always flat for an apartment",
    daktype: "Roof type",
    verdiepen: "Floors above the ground floor",
    gelijkvloers: "Ground floor",
    verdiepKort: (n) => (n === 1 ? "floor" : "floors"),
    kamersPerVerdieping: "Rooms per floor",
    inTotaal: (n) => `${n} in total`,
    toonInTekening: (naam) => `Show ${naam.toLowerCase()} in the drawing`,
    minderKamers: (naam) => `One room fewer: ${naam.toLowerCase()}`,
    meerKamers: (naam) => `One more room: ${naam.toLowerCase()}`,
    vloeroppervlakte: "Floor area",
    maatwerkKlein: "bespoke",
    geschat: (m2) => `estimated ± ${m2} m²`,
    meerDan: (m2) => `more than ${m2} m²`,
    tot: (m2) => `up to ${m2} m²`,
    oppPerLaag: (m2) => `± ${m2} m² per floor`,
    s3Kop: "How far along is the site?",
    s3Sub: "Choose how far the works have got. The photo shows where the moisture is.",
    kiesFase: "Choose your stage",
    verwarming: "Is there heating?",
    warmKop: "Can the property be heated?",
    warmJa: ["The heating is already on", "Then we only need dryers and fans."],
    warmNee: ["No heating yet", "Then we add heaters: nothing dries in the cold."],
    ja: "Yes",
    nee: "No",
    kachelsErbij: ["Heaters", " added to your package."],
    hoeSnel: ["How fast", " does it need to be dry"],
    hoeSnelVol: "How fast does it need to be dry?",
    plusDroger: "+1 dehumidifier",
    weken: (n) => `${n} weeks`,
    planKop: "Your drying plan",
    planDroogIn: "Dry in",
    planLevering: "Delivery & collection",
    planInbegrepen: "Included",
    planKnop: "View your package",
    planKnopSub: "There you will find the price, the rental period and the delivery date.",
    s4Kop: "How thick is the wet layer?",
    perLaag: "Choose the thickness of each layer.",
    eenLaag: "Choose the thickness.",
    weetNiet: " Not sure? Then we calculate with the usual thickness.",
    droogIn: "Dry in",
    weekOfWeken: (n) => `± ${n} ${meervoud(n, "week", "weeks")}`,
    toestellen: (n) => `${n} units`,
    ontvochtiging: "Dehumidification",
    lucht: "Air",
    m3u: "m³/h",
    l24u: "l/24h",
    letOp: "Please note",
    maatwerkKop: "Large project? Then we tailor the drying plan.",
    geenPakketKop: "We have no standard package for this combination.",
    maatwerkTekst: (m2) =>
      `Above ${m2} m² we put the drying plan together personally, with a site visit if needed. We will be in touch within one working day.`,
    geenPakketTekst: "Put your package together in the Calculator, or call us: we'll work it out together.",
    maatwerkKnop: "Request your bespoke quote →",
    naarCalculator: "Go to the Calculator →",
    bel: (nr) => `Call ${nr}`,
    terug: "Back",
    terugKnop: "← Back",
    boek: "Book this package →",
    opnieuwBeginnen: "Start again",
    opnieuw: "Start again",
    tekening: "Drawing of your home",
    lagen: (n) => `${n} ${n === 1 ? "storey" : "storeys"}`,
    opnieuwAfspelen: "Replay",
    verdieping: "Floor",
    toestelTel: (n) => `${n} ${n === 1 ? "unit" : "units"}`,
    legende: "Key",
    droger: "Dehumidifier",
    ventilator: "Fan",
    kachel: "Heater",
    vocht: "Moisture",
    uwPakket: "Your package",
    alleenGelijkvloers: "Ground floor only",
    gelijkvloersMet: (uitleg) => `Ground floor ${uitleg}`,
    plusVerdiep: (n) => `+ ${n} ${n === 1 ? "floor" : "floors"}`,
    plusZolder: "+ attic",
    laag: {
      pd: {
        titel: "Plasterwork",
        wat: "The smooth layer of plaster on your walls and ceilings. Freshly applied, it is full of water.",
        onderschrift: "Plaster on the wall, still damp",
        tip: "Where can I see it? In a flush-mounted box or next to a door frame.",
      },
      cd: {
        titel: "Screed",
        wat: "The sand and cement floor screed under your tiles or parquet.",
        onderschrift: "Sand-cement on the insulation",
        tip: "Where can I see it? At the threshold, or ask your screed layer.",
      },
    },
    geen: "None",
    droogKlein: "dry",
    nietNat: "not wet",
    meest: "most common",
    weetNietKlein: "don't know",
    droog: "Dry",
    nietNatBadge: "Not wet",
    dikteSleep: "Thickness in cm · drag or choose",
    laagDroog: (titel) => `${titel}: dry`,
    telNiet: "This layer does not count towards your drying plan.",
    dikte: (titel) => `${titel} thickness`,
    dikteCm: (titel) => `${titel} thickness in cm`,
    geenPleister: "No wet plasterwork: nothing to dry.",
    geenChape: "No wet screed: nothing to dry.",
    zonderDroger: (w) => `± ${w} ${w === 1 ? "week" : "weeks"} drying without a dehumidifier`,
    gerekendMet: (cm) => ` · calculated with ${cm} cm`,
    doorsnede: "Cross-section of wall and floor",
    detailA: "Detail A · cross-section",
    cmPleister: (v) => `${v} cm plaster`,
    cmChape: (v) => `${v} cm screed`,
    vanGeplaatst: (n) => ` of ${n} set up`,
    dag: "Day",
    van: (n) => ` of ${n}`,
    allesDroog: "All dry",
    droogt: (naam) => `${naam} drying`,
    afgevoerd: " l of water removed",
    stempel: "Dry",
    stempelDag: (naam, dag) => `${naam} · day ${dag}`,
  },
};

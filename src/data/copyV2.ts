export interface CopyBlock {
  eyebrow?: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  cta?: string;
}

export interface CopyPage {
  id: string;
  group: string;
  name: string;
  route: string;
  purpose: string;
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primary?: string;
    secondary?: string;
  };
  blocks: CopyBlock[];
}

export const COPY_GROUPS = [
  "Merk & homepage",
  "Situaties",
  "Aanbod",
  "Vertrouwen & uitleg",
  "Bedrijf & service",
  "Boekingsflow",
  "Systeemteksten",
] as const;

export const COPY_PAGES: CopyPage[] = [
  {
    id: "merk",
    group: "Merk & homepage",
    name: "Merkboodschap",
    route: "/",
    purpose: "Eén boodschap die alle pagina’s inhoudelijk bij elkaar houdt.",
    hero: {
      eyebrow: "Kernbelofte",
      title: "Van natte werf naar afwerkingsklare ruimte, zonder giswerk.",
      body:
        "Vernast berekent het juiste droogpakket, levert en installeert de toestellen en controleert het resultaat met vochtmetingen. Zo weet de klant vooraf wat nodig is, hoelang het ongeveer duurt en wat het kost.",
    },
    blocks: [
      {
        eyebrow: "Positionering",
        title: "Geen losse bouwdroger, maar een compleet droogplan.",
        paragraphs: [
          "De klant koopt geen machine. De klant koopt zekerheid dat muren, chape of een ruimte verantwoord verder afgewerkt kunnen worden. Daarom praten we eerst over het gewenste resultaat en pas daarna over toestellen.",
          "De onderscheidende combinatie is: berekening, levering, installatie, opvolging en een eindmeting. Losse toestellen blijven beschikbaar voor klanten die bewust zelf willen afhalen en installeren.",
        ],
      },
      {
        eyebrow: "Garantie",
        title: "Streefwaarde niet bereikt? Geen extra toestelhuur.*",
        paragraphs: [
          "Voor een berekend droogpakket dat Vernast zelf levert en installeert, wordt de beginwaarde vastgelegd en beslist de eindmeting of de streefwaarde bereikt is. Is meer droogtijd nodig terwijl aan de voorwaarden is voldaan, dan loopt de toestelhuur zonder extra kosten door.",
        ],
      },
      {
        eyebrow: "Schrijfregels",
        title: "Concreet, rustig en controleerbaar.",
        bullets: [
          "Schrijf wat de klant krijgt, niet hoe goed Vernast zichzelf vindt.",
          "Gebruik ‘afgesproken streefwaarde’ in plaats van het technisch onjuiste ‘100% droog’.",
          "Gebruik alleen cijfers en claims die aantoonbaar zijn.",
          "Maak duidelijk wat inbegrepen is en welke keuzes een toeslag hebben.",
          "Eén primaire actie per pagina: berekenen, boeken, afhalen of contact opnemen.",
        ],
      },
    ],
  },
  {
    id: "home",
    group: "Merk & homepage",
    name: "Homepage",
    route: "/",
    purpose: "In enkele seconden uitleggen wat Vernast oplost en bezoekers naar de calculator leiden.",
    hero: {
      eyebrow: "Bouwdroging, berekend op uw woning",
      title: "Sneller verder met een droogplan dat klopt.",
      body:
        "Vertel ons wat u wilt drogen. Wij berekenen het juiste pakket, tonen vooraf de prijs en installeren alles op de datum die u kiest. Nog niet op de afgesproken streefwaarde? Dan betaalt u onder de garantievoorwaarden geen extra toestelhuur.",
      primary: "Bereken mijn droogplan",
      secondary: "Zo werkt de Drooggarantie",
    },
    blocks: [
      {
        eyebrow: "Waarom actief drogen",
        title: "Uw planning hoeft niet te wachten op het weer.",
        paragraphs: [
          "Bouwvocht verdwijnt vanzelf, maar niemand weet precies wanneer. Ondertussen kunnen schilderwerken, vloeren en maatwerk niet veilig starten. Met een berekend droogpakket voert u het vocht gecontroleerd af en bepaalt een meting wanneer de ondergrond klaar is voor de volgende stap.",
        ],
        bullets: [
          "Vooraf berekend op volume, materiaal en situatie",
          "Geleverd, geplaatst en ingesteld door een technieker",
          "Vochtmeting bij de start en het einde",
        ],
      },
      {
        eyebrow: "Kies uw route",
        title: "Een volledig droogpakket of liever zelf afhalen?",
        paragraphs: [
          "Kies voor levering en installatie als u volledig ontzorgd wilt worden en gebruik wilt maken van de Drooggarantie. Weet u exact welk toestel u nodig hebt en plaatst u het liever zelf? Reserveer dan een los toestel voor afhaling in Aartselaar.",
        ],
        cta: "Vergelijk leveren en afhalen",
      },
      {
        eyebrow: "Zo werkt het",
        title: "Van vijf vragen naar een draaiende installatie.",
        bullets: [
          "Beantwoord enkele vragen over uw project.",
          "Bekijk het berekende pakket en de volledige prijs.",
          "Kies uw opties, leverdatum en betaalwijze.",
          "Onze technieker levert, meet en installeert.",
          "De eindmeting bepaalt wanneer we ophalen.",
        ],
        cta: "Start mijn berekening",
      },
      {
        eyebrow: "Transparante prijs",
        title: "U ziet vóór het boeken wat inbegrepen is.",
        paragraphs: [
          "Uw berekening toont de toestellen, huurperiode, levering, installatie en gekozen extra’s in één overzicht. Geen verrassingen bij aankomst: een toeslag verschijnt alleen wanneer u zelf een extra optie kiest of wanneer de locatie een bijzondere levering vraagt.",
        ],
      },
      {
        eyebrow: "Slot",
        title: "Weet vandaag wat uw werf nodig heeft om verder te kunnen.",
        paragraphs: [
          "Bereken uw droogplan in enkele minuten. Twijfelt u over de situatie? Stuur foto’s mee; een droogspecialist bekijkt ze en antwoordt op een werkdag.",
        ],
        cta: "Bereken mijn droogplan",
      },
    ],
  },
  {
    id: "nieuwbouw",
    group: "Situaties",
    name: "Nieuwbouw",
    route: "/nieuwbouw",
    purpose: "Bouwheren en aannemers overtuigen om chape en pleisterwerk gecontroleerd te drogen.",
    hero: {
      eyebrow: "Chape en pleisterwerk drogen",
      title: "Laat uw afwerking niet wachten op bouwvocht.",
      body:
        "Verse chape en nieuw pleisterwerk brengen veel water in een woning. Met een berekend droogpakket voert u dat vocht gecontroleerd af, zodat de vloerder en schilder verantwoord verder kunnen zodra de meting het toelaat.",
      primary: "Bereken mijn nieuwbouwpakket",
      secondary: "Bekijk hoe bouwdroging werkt",
    },
    blocks: [
      {
        eyebrow: "Het risico",
        title: "Te vroeg afwerken kost meer tijd dan even goed drogen.",
        paragraphs: [
          "Een droge bovenlaag zegt weinig over het vocht dieper in chape of pleisterwerk. Te vroeg vloeren of schilderen vergroot het risico op blazen, loskomende afwerking, schimmel en discussies tussen vakmensen.",
        ],
      },
      {
        eyebrow: "De aanpak",
        title: "Capaciteit, luchtcirculatie en temperatuur werken samen.",
        paragraphs: [
          "De calculator bepaalt het basispakket op basis van oppervlakte, plafondhoogte, materiaal en omstandigheden. Ventilatoren verdelen de droge lucht door de woning; indien nodig ondersteunt verwarming het proces.",
        ],
      },
      {
        eyebrow: "Wat u krijgt",
        title: "Eén droogplan voor de volledige woning.",
        bullets: [
          "Pakket berekend op uw chape, pleisterwerk of beide",
          "Levering en installatie op de gekozen datum",
          "Nulmeting en eindmeting",
          "Ophaling zodra de afgesproken streefwaarde is bereikt",
          "Drooggarantie bij correcte omstandigheden*",
        ],
        cta: "Bereken mijn droogtijd en pakket",
      },
    ],
  },
  {
    id: "waterschade",
    group: "Situaties",
    name: "Waterschade",
    route: "/waterschade",
    purpose: "Urgentie vertalen naar een snelle, beheerste eerste actie zonder overdreven angstcopy.",
    hero: {
      eyebrow: "Snel handelen bij waterschade",
      title: "Beperk vervolgschade. Start met een gericht droogplan.",
      body:
        "Na een lek, overstroming of bluswater kan vocht achter vloeren, in muren en onder afwerking blijven zitten. Wij brengen de situatie in kaart en zetten de juiste droogcapaciteit in om het vocht gecontroleerd af te voeren.",
      primary: "Vraag snelle hulp",
      secondary: "Bel 03 689 90 65",
    },
    blocks: [
      {
        eyebrow: "Eerst dit",
        title: "Stop de vochtbron voordat de droging begint.",
        paragraphs: [
          "Een bouwdroger kan een actief lek niet oplossen. Sluit indien mogelijk de watertoevoer af, maak de locatie veilig en laat de oorzaak herstellen. Daarna kan de droging effectief starten.",
        ],
      },
      {
        eyebrow: "Onze aanpak",
        title: "Niet alleen de lucht, maar de getroffen materialen tellen.",
        paragraphs: [
          "We kijken waar het water terechtkwam, welke materialen zijn geraakt en of gericht drogen of extra luchtcirculatie nodig is. Met opeenvolgende metingen volgen we het verloop en sturen we de opstelling bij wanneer dat nodig is.",
        ],
      },
      {
        eyebrow: "Voor uw dossier",
        title: "Leg schade en metingen vanaf het begin vast.",
        paragraphs: [
          "Maak foto’s vóór u opruimt en bewaar facturen en communicatie. Heeft u documentatie nodig voor een verzekeraar of expert, vermeld dat bij uw aanvraag zodat we vooraf kunnen aangeven welke rapportage mogelijk is.",
        ],
        cta: "Beschrijf mijn waterschade",
      },
    ],
  },
  {
    id: "renovatie",
    group: "Situaties",
    name: "Renovatie en kelder",
    route: "/renovatie",
    purpose: "Het verschil uitleggen tussen tijdelijk vocht drogen en een structurele oorzaak oplossen.",
    hero: {
      eyebrow: "Bouwdroging bij renovatie",
      title: "Eerst weten waar het vocht vandaan komt. Dan pas drogen.",
      body:
        "Bouwvocht na renovatiewerken vraagt een andere aanpak dan een lekkende keldermuur of opstijgend vocht. We helpen u bepalen of tijdelijke bouwdroging volstaat of dat eerst de oorzaak behandeld moet worden.",
      primary: "Laat mijn situatie beoordelen",
      secondary: "Bereken een droogpakket",
    },
    blocks: [
      {
        eyebrow: "Bouwvocht",
        title: "Nieuw pleisterwerk, chape of metselwerk gecontroleerd drogen.",
        paragraphs: [
          "Bij renovatiewerken komt opnieuw veel water in het gebouw. Een correct gedimensioneerd pakket versnelt de droging en maakt het moment van afwerken meetbaar.",
        ],
      },
      {
        eyebrow: "Structureel vocht",
        title: "Een bouwdroger bestrijdt geen actieve vochtbron.",
        paragraphs: [
          "Keert het vocht terug door een lek, doorslaand vocht, condensatie of opstijgend grondvocht? Dan moet eerst de oorzaak worden aangepakt. Anders droogt u tegen een probleem in dat actief blijft.",
        ],
      },
      {
        eyebrow: "Koude ruimtes",
        title: "Temperatuur bepaalt welke droogtechniek werkt.",
        paragraphs: [
          "In een onverwarmde kelder of koude werf werkt condensdroging minder efficiënt. Afhankelijk van temperatuur en materiaal kan adsorptiedroging, extra verwarming of een combinatie nodig zijn.",
        ],
        cta: "Vraag advies voor mijn renovatie",
      },
    ],
  },
  {
    id: "levering",
    group: "Aanbod",
    name: "Levering en installatie",
    route: "/levering",
    purpose: "Onzekerheid over de leverdag en installatie wegnemen.",
    hero: {
      eyebrow: "Levering en installatie",
      title: "Wij brengen niet alleen toestellen. Wij starten uw droging op.",
      body:
        "Op de afgesproken datum levert onze technieker het volledige pakket, controleert de ruimtes, voert de nulmeting uit en plaatst elk toestel waar het effectief kan werken. Voor vertrek draait de volledige installatie.",
      primary: "Bereken een geleverd pakket",
      secondary: "Bekijk wat u voorbereidt",
    },
    blocks: [
      {
        eyebrow: "Op de leverdag",
        title: "U weet wanneer we komen en wat er gebeurt.",
        bullets: [
          "U ontvangt een bevestiging van datum en tijdslot.",
          "Kort voor aankomst krijgt u een bericht van de technieker.",
          "We bekijken toegang, ruimtes, afvoer en stroomvoorziening.",
          "We meten, installeren, testen en geven uitleg.",
        ],
      },
      {
        eyebrow: "Voorbereiding",
        title: "Maak de ruimtes bereikbaar en voorzie stroom.",
        paragraphs: [
          "Zorg dat de technieker de droogzones en afvoerpunten veilig kan bereiken. Meld vooraf of toestellen via een trap, lift of ladder naar een verdieping moeten en of er nog geen vaste elektriciteit aanwezig is.",
        ],
      },
      {
        eyebrow: "Na installatie",
        title: "Laat de opstelling werken zoals ze geplaatst is.",
        paragraphs: [
          "Houd ramen en buitendeuren gesloten, laat de toestellen continu draaien en verplaats niets zonder overleg. Meld een storing meteen; zo beperken we verloren droogtijd.",
        ],
        cta: "Plan mijn levering",
      },
    ],
  },
  {
    id: "afhalen",
    group: "Aanbod",
    name: "Zelf afhalen",
    route: "/verhuur/afhalen",
    purpose: "Ervaren klanten snel laten reserveren en tegelijk de verantwoordelijkheid duidelijk maken.",
    hero: {
      eyebrow: "Losse toestellen huren",
      title: "Weet u welk toestel u nodig hebt? Reserveer en haal het zelf af.",
      body:
        "Kies uw toestellen en huurperiode, reserveer online en haal alles op afspraak af in Aartselaar. U vervoert, plaatst en volgt de installatie zelf op; daarom geldt de Drooggarantie niet bij afhalen.",
      primary: "Kies mijn toestellen",
      secondary: "Liever laten berekenen en installeren",
    },
    blocks: [
      {
        eyebrow: "Zo werkt afhalen",
        title: "Gereserveerd, klaargezet en kort uitgelegd.",
        bullets: [
          "Kies toestel, aantal en huurperiode.",
          "Selecteer een beschikbaar afhaalmoment.",
          "Ontvang de bevestiging en betaal volgens uw keuze.",
          "Neem identificatie en voldoende laadruimte mee.",
          "Breng de toestellen op de afgesproken datum terug.",
        ],
      },
      {
        eyebrow: "Belangrijk",
        title: "Een bouwdroger vervoert u rechtopstaand.",
        paragraphs: [
          "De toestellen zijn zwaar en moeten stabiel en rechtop vervoerd worden. Controleer vooraf afmetingen en gewicht en voorzie een geschikte wagen, bestelwagen of aanhangwagen.",
        ],
      },
      {
        eyebrow: "Twijfel",
        title: "Niet zeker over capaciteit of plaatsing? Kies dan een droogpakket.",
        paragraphs: [
          "Bij een volledig pakket berekenen wij de capaciteit, leveren en installeren we alles en controleren we het resultaat met metingen. Dat is de veiligste keuze wanneer u niet dagelijks met bouwdroging werkt.",
        ],
        cta: "Laat mijn pakket berekenen",
      },
    ],
  },
  {
    id: "machines",
    group: "Aanbod",
    name: "Machines",
    route: "/machines",
    purpose: "Toestellen begrijpelijk vergelijken zonder de klant zelf een technische berekening te laten maken.",
    hero: {
      eyebrow: "Professionele droogapparatuur",
      title: "Het juiste toestel hangt af van meer dan vierkante meters.",
      body:
        "Volume, vochtbelasting, temperatuur en luchtcirculatie bepalen samen welke apparatuur nodig is. Vergelijk onze bouwdrogers, ventilatoren en verwarming of laat de calculator er één passend pakket van maken.",
      primary: "Bereken mijn pakket",
      secondary: "Bekijk alle toestellen",
    },
    blocks: [
      {
        eyebrow: "Bouwdrogers",
        title: "Onttrekken het vocht uit de lucht.",
        paragraphs: [
          "Een condensdroger vangt verdampt bouwvocht op en voert het af. Het juiste model wordt bepaald door het volume en de hoeveelheid vocht, niet alleen door het vloeroppervlak.",
        ],
      },
      {
        eyebrow: "Ventilatoren",
        title: "Brengen vochtige lucht langs de droger.",
        paragraphs: [
          "Lucht die stilstaat droogt ongelijk. Ventilatoren houden de lucht in beweging langs chape, muren en moeilijk bereikbare hoeken en maken het volledige pakket effectiever.",
        ],
      },
      {
        eyebrow: "Verwarming",
        title: "Houdt de droging werkzaam in koude omstandigheden.",
        paragraphs: [
          "Bij een te lage temperatuur verdampt vocht trager en daalt de capaciteit van een condensdroger. Gerichte verwarming kan dan nodig zijn, altijd in combinatie met ontvochtiging en luchtcirculatie.",
        ],
        cta: "Laat de calculator combineren",
      },
    ],
  },
  {
    id: "toestel-template",
    group: "Aanbod",
    name: "Toestelpagina — template",
    route: "/verhuur/toestel/:model",
    purpose: "Elk toestel op dezelfde manier uitleggen: toepassing eerst, specificaties daarna.",
    hero: {
      eyebrow: "[Categorie] · [beste toepassing]",
      title: "[Productnaam]: voor [concrete ruimte of taak].",
      body:
        "[Eén zin met het probleem dat dit toestel oplost.] Geschikt voor [bereik/toepassing], met [twee relevante voordelen]. Huur los voor afhaling of voeg het toe aan een berekend droogpakket.",
      primary: "Reserveer dit toestel",
      secondary: "Niet zeker? Bereken mijn pakket",
    },
    blocks: [
      {
        eyebrow: "Wanneer kiezen",
        title: "Dit toestel past bij uw project wanneer…",
        bullets: [
          "[Herkenbare ruimte of toepassing]",
          "[Relevante vochtbelasting of temperatuur]",
          "[Logistieke eigenschap: formaat, stroom of afvoer]",
        ],
      },
      {
        eyebrow: "Wat het doet",
        title: "[Resultaatgerichte uitleg zonder jargon].",
        paragraphs: [
          "Leg uit hoe het toestel bijdraagt aan de droging, wat de belangrijkste beperking is en met welk ander toestel het vaak gecombineerd wordt. Vermijd een lijst specificaties zonder interpretatie.",
        ],
      },
      {
        eyebrow: "Praktisch",
        title: "Dit moet u vóór de huur weten.",
        bullets: [
          "Voeding en stroomgroep",
          "Afmetingen en gewicht",
          "Waterafvoer of reservoir",
          "Geluidsniveau indien relevant",
          "Vervoer en plaatsing",
        ],
        cta: "Controleer beschikbaarheid",
      },
    ],
  },
  {
    id: "prijzen",
    group: "Aanbod",
    name: "Prijzen",
    route: "/prijzen",
    purpose: "Prijsonzekerheid verminderen en uitleggen waardoor een totaalbedrag wordt bepaald.",
    hero: {
      eyebrow: "Prijzen voor bouwdroging",
      title: "Bekijk eerst wat u krijgt. Dan pas wat het kost.",
      body:
        "De totaalprijs hangt af van de benodigde capaciteit, huurperiode, gekozen dekking en eventuele extra’s. De calculator toont vóór het boeken alle onderdelen in één overzicht.",
      primary: "Bereken mijn exacte prijs",
      secondary: "Bekijk losse huurprijzen",
    },
    blocks: [
      {
        eyebrow: "Volledig pakket",
        title: "Voor wie zekerheid en installatie wil.",
        paragraphs: [
          "Een berekend droogpakket combineert de benodigde drogers, ventilatoren en eventuele verwarming met levering, installatie en meetmomenten. U ziet de volledige samenstelling en prijs voordat u boekt.",
        ],
      },
      {
        eyebrow: "Los huren",
        title: "Voor wie zelf kiest, vervoert en installeert.",
        paragraphs: [
          "Bij zelf afhalen betaalt u per gekozen toestel en huurperiode. U bent zelf verantwoordelijk voor capaciteit, plaatsing, opvolging en vervoer; de Drooggarantie is daarom niet van toepassing.",
        ],
      },
      {
        eyebrow: "Geen verrassingen",
        title: "Elke extra keuze staat vóór betaling in uw overzicht.",
        bullets: [
          "Huurduur en aantal toestellen",
          "Dekking en eigen risico",
          "Automatische waterafvoer",
          "Bijzondere levering of plaatsing indien van toepassing",
          "Betaalwijze en eventueel resterend saldo",
        ],
        cta: "Bereken mijn totaalprijs",
      },
    ],
  },
  {
    id: "shop",
    group: "Aanbod",
    name: "Shop",
    route: "/shop",
    purpose: "Duidelijk onderscheiden wat te huur en wat te koop is.",
    hero: {
      eyebrow: "Kopen of huren",
      title: "Materiaal voor een eenmalige werf of voor dagelijks gebruik.",
      body:
        "Huur professionele droogapparatuur voor een tijdelijk project. Gebruikt u materiaal regelmatig, bekijk dan het aanbod voor aankoop. We maken op elke productkaart duidelijk of u huurt, koopt of naar een externe webshop gaat.",
      primary: "Bekijk huurtoestellen",
      secondary: "Bekijk producten te koop",
    },
    blocks: [
      {
        eyebrow: "Huren",
        title: "Geen investering voor één project.",
        paragraphs: [
          "U betaalt alleen voor de periode waarin u het toestel nodig hebt en kunt kiezen tussen zelf afhalen of een volledig berekend pakket met levering en installatie.",
        ],
      },
      {
        eyebrow: "Kopen",
        title: "Interessant wanneer het toestel regelmatig inzetbaar is.",
        paragraphs: [
          "Voor aannemers, schadebedrijven en andere professionele gebruikers kan aankoop voordeliger zijn. Vergelijk capaciteit, gebruikskosten, service en beschikbaarheid van onderdelen voordat u kiest.",
        ],
      },
    ],
  },
  {
    id: "drooggarantie",
    group: "Vertrouwen & uitleg",
    name: "Drooggarantie",
    route: "/drooggarantie-v2",
    purpose: "Het financiële risico concreet omkeren zonder een ongeloofwaardige absolute claim.",
    hero: {
      eyebrow: "Drooggarantie standaard inbegrepen",
      title: "Niet op de streefwaarde binnen de berekende periode? Geen extra toestelhuur.*",
      body:
        "Wij berekenen uw droogpakket, installeren de volledige opstelling en meten bij de start en het einde. Heeft uw project ondanks correcte omstandigheden meer droogtijd nodig, dan loopt de toestelhuur zonder extra kosten door.*",
      primary: "Bereken mijn droogplan",
      secondary: "Lees de voorwaarden",
    },
    blocks: [
      {
        eyebrow: "Waarom dit werkt",
        title: "Een garantie begint met een berekening, niet met een belofte.",
        paragraphs: [
          "De capaciteit wordt afgestemd op uw woning en toepassing. Onze technieker controleert de omstandigheden, installeert de opstelling en legt de startwaarden vast. Daardoor kunnen we het resultaat aan een meetbare afspraak koppelen.",
        ],
      },
      {
        eyebrow: "De afspraak",
        title: "De eindmeting bepaalt ophaling of verlenging.",
        paragraphs: [
          "Is de afgesproken streefwaarde bereikt, dan halen we de installatie op. Is ze nog niet bereikt terwijl de installatie correct en continu heeft gewerkt, dan verlengen we de toestelhuur zonder extra kosten.",
        ],
      },
      {
        eyebrow: "Voorwaarden",
        title: "Zo blijft uw garantie geldig.",
        bullets: [
          "Boek een berekend pakket met levering en installatie.",
          "Laat alle toestellen continu werken.",
          "Houd ramen en buitendeuren gesloten.",
          "Verplaats de opstelling alleen na overleg.",
          "Meld storingen en nieuwe vochtbronnen meteen.",
        ],
        cta: "Bekijk alle garantievoorwaarden",
      },
    ],
  },
  {
    id: "hoe-drogen-werkt",
    group: "Vertrouwen & uitleg",
    name: "Hoe drogen werkt",
    route: "/hoe-drogen-werkt",
    purpose: "Techniek begrijpelijk maken en het nut van een compleet pakket aantonen.",
    hero: {
      eyebrow: "Zo werkt bouwdroging",
      title: "Vocht verdampt pas als lucht, temperatuur en afvoer samenwerken.",
      body:
        "Een bouwdroger trekt geen water rechtstreeks uit een muur. Eerst verdampt het vocht uit chape, pleisterwerk of beton. Daarna haalt de droger die waterdamp uit de lucht en voeren ventilatoren opnieuw droge lucht langs het materiaal.",
      primary: "Bereken de juiste capaciteit",
      secondary: "Waarom actief drogen",
    },
    blocks: [
      {
        eyebrow: "De cyclus",
        title: "Verdampen, verplaatsen, ontvochtigen en opnieuw beginnen.",
        bullets: [
          "Warmere, drogere lucht neemt vocht op uit het materiaal.",
          "Ventilatoren brengen vochtige lucht naar de droger.",
          "De bouwdroger condenseert en voert het water af.",
          "De drogere lucht stroomt opnieuw langs muren en vloeren.",
        ],
      },
      {
        eyebrow: "De omstandigheden",
        title: "Open ramen kunnen het proces vertragen.",
        paragraphs: [
          "Met open ramen en deuren verliest u controle over temperatuur en luchtvochtigheid. Op vochtige dagen brengt buitenlucht zelfs nieuw vocht binnen. Een gesloten, correct verwarmde ruimte maakt de droging voorspelbaarder.",
        ],
      },
      {
        eyebrow: "Het eindpunt",
        title: "Een meting zegt meer dan kleur of gevoel.",
        paragraphs: [
          "Een oppervlak kan droog lijken terwijl dieper in het materiaal nog vocht zit. Daarom bepaalt de afgesproken meetwaarde wanneer de droging klaar is en de volgende afwerking verantwoord kan starten.",
        ],
        cta: "Bereken mijn droogopstelling",
      },
    ],
  },
  {
    id: "waarom-bouwdroging",
    group: "Vertrouwen & uitleg",
    name: "Waarom bouwdroging",
    route: "/waarom-bouwdroging",
    purpose: "De zakelijke afweging uitleggen: tijd, schadepreventie en controle.",
    hero: {
      eyebrow: "Waarom actief drogen",
      title: "Niet sneller om sneller te zijn, maar om veilig verder te kunnen.",
      body:
        "Actieve bouwdroging verkort de onzekere wachttijd na chape, pleisterwerk of waterschade. De echte winst is dat u met metingen bepaalt wanneer afwerking verantwoord is, in plaats van te vertrouwen op weer, gevoel of een vaste kalenderdatum.",
      primary: "Bereken mijn tijdswinst",
      secondary: "Lees hoe drogen werkt",
    },
    blocks: [
      {
        eyebrow: "Planning",
        title: "Maak het droogproces onderdeel van uw werfplanning.",
        paragraphs: [
          "Wanneer droging aan het toeval wordt overgelaten, schuiven volgende vakmensen mee. Een berekende opstelling geeft een realistische periode en maakt tijdige controle mogelijk.",
        ],
      },
      {
        eyebrow: "Schadepreventie",
        title: "Voorkom dat vocht onder nieuwe afwerking opgesloten raakt.",
        paragraphs: [
          "Vloeren, verf, plinten en maatwerk kunnen schade oplopen wanneer de ondergrond nog te vochtig is. Meten vóór afwerking is goedkoper dan herstellen na oplevering.",
        ],
      },
      {
        eyebrow: "Controle",
        title: "U weet wat er staat, wat het doet en wanneer het klaar is.",
        paragraphs: [
          "Vernast combineert een vooraf berekend pakket met professionele plaatsing en meetmomenten. Zo wordt bouwdroging een controleerbaar proces in plaats van losse toestelhuur.",
        ],
        cta: "Start mijn droogplan",
      },
    ],
  },
  {
    id: "realisaties",
    group: "Vertrouwen & uitleg",
    name: "Realisaties",
    route: "/realisaties",
    purpose: "Bewijs leveren met echte situaties, aanpak en resultaat.",
    hero: {
      eyebrow: "Projecten in Vlaanderen",
      title: "Bekijk hoe we verschillende vochtproblemen aanpakken.",
      body:
        "Geen twee werven zijn identiek. In deze projecten tonen we de beginsituatie, onze metingen, de gekozen opstelling en het resultaat. Zo ziet u niet alleen dát er gedroogd werd, maar waarom die aanpak paste.",
      primary: "Bekijk alle projecten",
      secondary: "Bespreek mijn situatie",
    },
    blocks: [
      {
        eyebrow: "Per project",
        title: "Van diagnose tot controlemeting.",
        bullets: [
          "Wat was het vochtprobleem?",
          "Welke materialen en ruimtes waren getroffen?",
          "Welke toestellen en techniek zijn ingezet?",
          "Hoe werd het droogverloop opgevolgd?",
          "Welke meetwaarde of veilige toestand is bereikt?",
        ],
      },
      {
        eyebrow: "Uw situatie",
        title: "Herkenbaar project gevonden? Gebruik het als vertrekpunt, niet als berekening.",
        paragraphs: [
          "Oppervlakte alleen bepaalt niet welk pakket u nodig hebt. Temperatuur, materiaal, vochtbelasting en indeling verschillen per werf. Laat daarom altijd een nieuwe berekening maken.",
        ],
        cta: "Bereken mijn eigen project",
      },
    ],
  },
  {
    id: "realisatie-template",
    group: "Vertrouwen & uitleg",
    name: "Realisatie — template",
    route: "/realisaties/:slug",
    purpose: "Elke case als controleerbaar bewijs presenteren in plaats van als algemeen succesverhaal.",
    hero: {
      eyebrow: "[Type droging] · [Plaats]",
      title: "[Concreet probleem] gecontroleerd gedroogd.",
      body:
        "Bij [type gebouw] zorgde [oorzaak] voor vocht in [materialen/ruimtes]. Vernast bracht de beginsituatie in kaart, plaatste [opstelling] en volgde de droging op tot [meetbaar of functioneel resultaat].",
      primary: "Bereken een vergelijkbaar project",
      secondary: "Bekijk de projectfoto’s",
    },
    blocks: [
      {
        eyebrow: "Beginsituatie",
        title: "Wat we aantroffen.",
        paragraphs: [
          "Beschrijf alleen waargenomen feiten: oorzaak, getroffen materialen, gemeten waarden en waarom wachten of direct afwerken een risico vormde.",
        ],
      },
      {
        eyebrow: "Droogplan",
        title: "Waarom deze opstelling is gekozen.",
        paragraphs: [
          "Noem aantallen en types toestellen, plaatsing, luchtcirculatie, afvoer en eventuele verwarming. Leg uit welke factor elk onderdeel oploste.",
        ],
      },
      {
        eyebrow: "Resultaat",
        title: "Wat de eindcontrole bevestigde.",
        paragraphs: [
          "Gebruik meetwaarden, duur en concrete vervolgstap alleen wanneer ze uit het dossier komen. Vermijd absolute claims zoals ‘definitief opgelost’ wanneer alleen de droging werd uitgevoerd.",
        ],
        cta: "Bespreek mijn project",
      },
    ],
  },
  {
    id: "over-ons",
    group: "Bedrijf & service",
    name: "Over Vernast",
    route: "/over-ons",
    purpose: "Vertrouwen bouwen met werkwijze en mensen, niet met lege bedrijfssuperlatieven.",
    hero: {
      eyebrow: "Over Vernast Verhuur",
      title: "Bouwdroging begrijpelijk en volledig geregeld.",
      body:
        "Vernast helpt particulieren, aannemers en schadeprofessionals om vocht gecontroleerd uit gebouwen te krijgen. We combineren professionele apparatuur met een digitale boeking, duidelijke planning, installatie op locatie en meetbare opvolging.",
      primary: "Bekijk onze werkwijze",
      secondary: "Neem contact op",
    },
    blocks: [
      {
        eyebrow: "Waarom Vernast",
        title: "Omdat losse toestelhuur te veel vragen bij de klant legt.",
        paragraphs: [
          "Hoeveel capaciteit is nodig? Waar moeten de toestellen staan? Is extra ventilatie of verwarming nodig? Wanneer is de ondergrond klaar? Ons proces is gebouwd om die vragen vóór en tijdens de huur te beantwoorden.",
        ],
      },
      {
        eyebrow: "Onze manier van werken",
        title: "Digitaal waar het sneller kan, persoonlijk waar het telt.",
        bullets: [
          "Online berekenen, boeken, betalen en plannen",
          "Een technieker voor levering, meting en installatie",
          "Bereikbare klantenservice tijdens de huur",
          "Duidelijke afspraken over prijs, gebruik en ophaling",
        ],
      },
      {
        eyebrow: "Vernast Group",
        title: "Van tijdelijke droging tot de oorzaak van structureel vocht.",
        paragraphs: [
          "Vernast Verhuur richt zich op bouwdroging en tijdelijke droogoplossingen. Blijkt er een structureel vocht- of schimmelprobleem te zijn, dan kan de juiste specialist binnen Vernast Group de oorzaak verder onderzoeken en behandelen.",
        ],
        cta: "Maak kennis met onze diensten",
      },
    ],
  },
  {
    id: "contact",
    group: "Bedrijf & service",
    name: "Contact",
    route: "/contact",
    purpose: "Bezoekers snel naar het juiste kanaal sturen en verwachtingen over antwoordtijd zetten.",
    hero: {
      eyebrow: "Contact met Vernast",
      title: "Vertel ons wat er moet drogen. Wij helpen u de volgende stap kiezen.",
      body:
        "Heeft u een vraag over capaciteit, levering, waterschade of een bestaande boeking? Bel ons tijdens de openingsuren of stuur uw situatie met foto’s door. We reageren op werkdagen zo snel mogelijk.",
      primary: "Bel 03 689 90 65",
      secondary: "Stuur een e-mail",
    },
    blocks: [
      {
        eyebrow: "Voor sneller advies",
        title: "Stuur meteen de informatie die de berekening bepaalt.",
        bullets: [
          "Type project: chape, pleisterwerk, waterschade of renovatie",
          "Oppervlakte en plafondhoogte",
          "Datum van de werken of het schadegeval",
          "Temperatuur en beschikbare stroom indien bekend",
          "Foto’s van de ruimtes en getroffen materialen",
        ],
      },
      {
        eyebrow: "Afhalen",
        title: "Alleen op afspraak in Aartselaar.",
        paragraphs: [
          "Reserveer uw toestellen en afhaalmoment vooraf. Zo staan ze gecontroleerd en klaar wanneer u aankomt en kunnen we voldoende tijd voorzien voor de korte uitleg.",
        ],
      },
      {
        eyebrow: "Bestaande boeking",
        title: "Vermeld uw referentie voor een sneller antwoord.",
        paragraphs: [
          "Gaat uw vraag over een levering, betaling, storing, verlenging of ophaling? Zet uw boekingsreferentie in het onderwerp of houd ze bij de hand wanneer u belt.",
        ],
      },
    ],
  },
  {
    id: "klantservice",
    group: "Bedrijf & service",
    name: "Klantservice",
    route: "/klantservice",
    purpose: "Problemen snel oplossen met taakgerichte, geruststellende microcopy.",
    hero: {
      eyebrow: "Hulp tijdens uw huur",
      title: "Kies wat er aan de hand is. U krijgt meteen de juiste oplossing.",
      body:
        "Vind hulp bij een storing, betaling, levering, verlenging of afhaling. Komt u er niet uit, bel ons dan met uw boekingsreferentie bij de hand.",
      primary: "Kies een onderwerp",
      secondary: "Bel de klantenservice",
    },
    blocks: [
      {
        eyebrow: "Storing",
        title: "Controleer eerst stroom, afvoer en display.",
        paragraphs: [
          "Noteer wat u ziet of hoort en maak indien mogelijk een foto van het display en de aansluiting. Trek geen slangen of pompen los zonder overleg. Lukt de basiscontrole niet, bel ons; we helpen u stap voor stap.",
        ],
      },
      {
        eyebrow: "Droogt het trager?",
        title: "Verander de opstelling niet op eigen initiatief.",
        paragraphs: [
          "Controleer of ramen en buitendeuren gesloten zijn en of alle toestellen continu draaien. Meld nieuwe natte materialen, temperatuurwijzigingen of stroomonderbrekingen. We bekijken of de planning of capaciteit moet worden aangepast.",
        ],
      },
      {
        eyebrow: "Verlengen of stoppen",
        title: "Regel uw huur vanuit de link in uw bevestiging.",
        paragraphs: [
          "Vraag extra huurdagen aan of meld dat u eerder klaar bent. Valt de verlenging onder de Drooggarantie, dan rekenen we geen extra toestelhuur aan; in andere gevallen ziet u de prijs vóór bevestiging.",
        ],
        cta: "Open mijn boeking",
      },
    ],
  },
  {
    id: "calculator",
    group: "Boekingsflow",
    name: "Calculator",
    route: "/verhuur/calculator",
    purpose: "De bezoeker met minimale twijfel door de berekening leiden.",
    hero: {
      eyebrow: "Uw droogplan in enkele vragen",
      title: "Wat wilt u drogen?",
      body:
        "Uw antwoorden bepalen de capaciteit, combinatie van toestellen en verwachte huurperiode. U kunt alles controleren voordat u boekt.",
      primary: "Start de berekening",
    },
    blocks: [
      {
        eyebrow: "Vraag 1",
        title: "Welke situatie past het best?",
        bullets: [
          "Pleisterwerk — muren en plafonds na pleisterwerken",
          "Chape — een nieuwe dekvloer vóór vloerafwerking",
          "Pleisterwerk en chape — beide tegelijk in dezelfde woning",
          "Waterschade — vocht na een lek, overstroming of bluswater",
        ],
      },
      {
        eyebrow: "Vraag 2",
        title: "Hoe groot is de te drogen ruimte?",
        paragraphs: [
          "Vul de totale vloeroppervlakte en gemiddelde plafondhoogte in. Gaat het om meerdere afgesloten zones, vermeld dat later bij de boeking zodat we de verdeling kunnen controleren.",
        ],
      },
      {
        eyebrow: "Vraag 3",
        title: "Wanneer zijn de natte werken uitgevoerd?",
        paragraphs: [
          "De ouderdom en dikte van chape of pleisterwerk beïnvloeden hoeveel vocht nog aanwezig kan zijn. Kies het antwoord dat het dichtst bij uw situatie ligt.",
        ],
      },
      {
        eyebrow: "Vraag 4",
        title: "Welke temperatuur kunt u aanhouden?",
        paragraphs: [
          "Condensdrogers werken het best in een voldoende warme ruimte. Is er geen verwarming, dan kan het pakket een verwarmingsoplossing voorstellen.",
        ],
      },
      {
        eyebrow: "Resultaat",
        title: "Uw berekende droogpakket staat klaar.",
        paragraphs: [
          "Bekijk welke toestellen worden voorgesteld, waarom ze nodig zijn en welke periode is berekend. Pas opties aan voordat u een leverdatum kiest.",
        ],
        cta: "Bekijk mijn pakket",
      },
    ],
  },
  {
    id: "pakket",
    group: "Boekingsflow",
    name: "Pakketresultaat",
    route: "/verhuur/pakket",
    purpose: "De berekening begrijpelijk maken en de totale waarde tonen vóór de prijs.",
    hero: {
      eyebrow: "Uw berekende droogplan",
      title: "Dit pakket is afgestemd op [situatie] in een woning van [oppervlakte].",
      body:
        "De combinatie hieronder levert de benodigde ontvochtiging, luchtcirculatie en indien nodig temperatuur. Bekijk de samenstelling en pas uw keuzes aan voordat u boekt.",
      primary: "Kies opties en leverdatum",
      secondary: "Berekening aanpassen",
    },
    blocks: [
      {
        eyebrow: "Samenstelling",
        title: "Elk toestel heeft één duidelijke taak.",
        bullets: [
          "Bouwdroger(s): voeren het verdampte vocht uit de lucht af.",
          "Ventilator(en): verdelen de lucht langs vloeren, muren en hoeken.",
          "Verwarming: ondersteunt verdamping wanneer de ruimte te koud is.",
          "Afvoer: voorkomt dat u reservoirs handmatig moet ledigen.",
        ],
      },
      {
        eyebrow: "Inbegrepen",
        title: "Van levering tot eindmeting geregeld.",
        bullets: [
          "Levering op de gekozen datum",
          "Nulmeting en professionele installatie",
          "Uitleg bij de opstart",
          "Ondersteuning tijdens de huur",
          "Eindmeting en ophaling",
        ],
      },
      {
        eyebrow: "Prijs",
        title: "Dit is uw totaal vóór gekozen extra’s.",
        paragraphs: [
          "Toon huurperiode, apparatuur, levering en installatie afzonderlijk maar tel ze samen in één duidelijk totaal. Elke wijziging in de volgende stap moet het bedrag direct bijwerken.",
        ],
        cta: "Ga verder met dit pakket",
      },
    ],
  },
  {
    id: "boeking",
    group: "Boekingsflow",
    name: "Boeking en betaling",
    route: "/verhuur/boeking",
    purpose: "Elke keuze uitleggen en betaalfrictie verminderen zonder druk te zetten.",
    hero: {
      eyebrow: "Uw boeking afronden",
      title: "Kies uw opties, datum en betaalwijze.",
      body:
        "Uw berekende pakket blijft zichtbaar terwijl u boekt. Het totaal wordt direct aangepast wanneer u een optie wijzigt; vóór betaling krijgt u nog één volledig overzicht.",
      primary: "Verder met mijn boeking",
    },
    blocks: [
      {
        eyebrow: "Dekking",
        title: "Kies hoeveel risico u zelf wilt dragen.",
        paragraphs: [
          "Vergelijk per optie wat gedekt is, welk eigen risico geldt en wat de eenmalige prijs is. Maak duidelijk dat dit losstaat van de Drooggarantie op het droogresultaat.",
        ],
      },
      {
        eyebrow: "Extra’s",
        title: "Alleen toevoegen wanneer uw situatie ze nodig heeft.",
        paragraphs: [
          "Leg per extra uit welk praktisch probleem ze oplost. Gebruik ‘aanbevolen’ alleen als de keuze uit de ingevulde situatie volgt, niet als algemene verkoopdruk.",
        ],
      },
      {
        eyebrow: "Levering",
        title: "Kies een beschikbare datum en vertel ons hoe we binnenkomen.",
        paragraphs: [
          "Vraag verdieping, trap, lift, ladder en stroomvoorziening voordat de klant betaalt. Zo kan de prijs kloppen en komt de technieker voorbereid aan.",
        ],
      },
      {
        eyebrow: "Betaling",
        title: "Betaal volledig online of bevestig met een eerste bedrag.",
        paragraphs: [
          "Toon per betaaloptie exact wat nu wordt afgeschreven, welk saldo later volgt en wanneer de factuur wordt verstuurd. Vermijd ‘voorschot’ wanneer het juridisch of boekhoudkundig een orderbevestiging is.",
        ],
        cta: "Controleer en betaal veilig",
      },
    ],
  },
  {
    id: "bevestiging",
    group: "Boekingsflow",
    name: "Boekingsbevestiging",
    route: "/booking/success",
    purpose: "Onzekerheid direct na betaling of aanvraag wegnemen.",
    hero: {
      eyebrow: "Boeking ontvangen",
      title: "Bedankt. Uw aanvraag staat bij ons klaar.",
      body:
        "Uw referentie is [referentie]. We sturen de bevestiging naar [e-mailadres] en controleren de planning. Zodra de leverdatum definitief is, ontvangt u alle praktische informatie.",
      primary: "Bekijk wat er nu gebeurt",
      secondary: "Neem contact op",
    },
    blocks: [
      {
        eyebrow: "Volgende stappen",
        title: "Dit mag u van ons verwachten.",
        bullets: [
          "U ontvangt een e-mail met uw overzicht en referentie.",
          "Wij controleren pakket, adres en beschikbaarheid.",
          "U ontvangt de definitieve leverbevestiging en het tijdslot.",
          "Kort voor aankomst meldt de technieker dat hij onderweg is.",
        ],
      },
      {
        eyebrow: "Wijziging nodig?",
        title: "Vermeld altijd uw boekingsreferentie.",
        paragraphs: [
          "Neem zo snel mogelijk contact op als het adres, de datum, bereikbaarheid of werfsituatie verandert. Zo kunnen we controleren of pakket en planning nog kloppen.",
        ],
      },
    ],
  },
  {
    id: "systeem",
    group: "Systeemteksten",
    name: "Fouten, lege staten en status",
    route: "/404 · foutschermen · laadstatus",
    purpose: "Menselijke, taakgerichte microcopy voor momenten waarop iets misgaat.",
    hero: {
      eyebrow: "Microcopy",
      title: "Zeg wat er gebeurt, wat bewaard bleef en wat de klant nu kan doen.",
      body:
        "Een goede foutmelding vermijdt ‘Er ging iets mis’ zonder uitleg. Noem de mislukte handeling, stel gerust over betaling of invoer en bied één duidelijke vervolgstap.",
    },
    blocks: [
      {
        eyebrow: "404",
        title: "Deze pagina bestaat niet meer.",
        paragraphs: [
          "De link is mogelijk verouderd of verkeerd overgenomen. Ga terug naar de homepage of start meteen een nieuwe berekening.",
        ],
        cta: "Naar de homepage",
      },
      {
        eyebrow: "Betaling mislukt",
        title: "De betaling is niet afgerond.",
        paragraphs: [
          "Er is geen nieuwe betaling bevestigd. Uw gekozen pakket en gegevens staan nog klaar, zodat u opnieuw kunt proberen of een andere betaalwijze kunt kiezen.",
        ],
        cta: "Probeer opnieuw",
      },
      {
        eyebrow: "Aanvraag niet verzonden",
        title: "Uw aanvraag kon niet worden doorgestuurd.",
        paragraphs: [
          "De ingevulde gegevens blijven op het scherm staan. Controleer uw verbinding en probeer opnieuw. Blijft het probleem terugkomen, bel 03 689 90 65.",
        ],
        cta: "Opnieuw verzenden",
      },
      {
        eyebrow: "Laden",
        title: "We halen uw boeking veilig op…",
        paragraphs: [
          "Dit duurt meestal enkele seconden. Sluit deze pagina niet terwijl we de betaal- of boekingsstatus controleren.",
        ],
      },
    ],
  },
  {
    id: "juridisch",
    group: "Systeemteksten",
    name: "Privacy en voorwaarden",
    route: "/privacy · /algemene-voorwaarden",
    purpose: "Juridische informatie begrijpelijk structureren zonder de inhoud als verkooptekst te behandelen.",
    hero: {
      eyebrow: "Juridische pagina’s",
      title: "Duidelijk schrijven, juridisch laten controleren.",
      body:
        "Privacybeleid en algemene voorwaarden moeten aansluiten op de werkelijke gegevensstromen, betaalprocessen en huurafspraken. Marketingcopy mag deze teksten leesbaarder maken, maar nooit rechten, uitzonderingen of verantwoordelijkheden veranderen.",
    },
    blocks: [
      {
        eyebrow: "Privacy",
        title: "Begin met een samenvatting in gewone taal.",
        paragraphs: [
          "Voorbeeld: ‘We gebruiken uw gegevens om uw vraag, boeking, betaling en levering uit te voeren. We verkopen uw gegevens niet. Op deze pagina leest u welke gegevens we bewaren, waarom, hoelang en hoe u uw rechten uitoefent.’",
        ],
      },
      {
        eyebrow: "Voorwaarden",
        title: "Zet de belangrijkste huurafspraken vóór de volledige artikelen.",
        bullets: [
          "Wat de klant boekt en wanneer de overeenkomst ontstaat",
          "Betaling, annulering en verlenging",
          "Gebruik, schade, diefstal en eigen risico",
          "Levering, toegang en stroomvoorziening",
          "Drooggarantie en exacte uitzonderingen",
        ],
      },
      {
        eyebrow: "Controle",
        title: "Laat de definitieve tekst nakijken op Belgisch consumenten- en privacyrecht.",
        paragraphs: [
          "De copydeck geeft alleen structuur en leesbare formuleringen. Bewaartermijnen, aansprakelijkheid, herroepingsrecht, betalingsbedingen en garantievoorwaarden moeten overeenstemmen met de bedrijfsvoering en juridisch worden gevalideerd.",
        ],
      },
    ],
  },
];

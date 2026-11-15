/**
 * Regiopagina’s met werkgebied, huuradvies en verwijzingen naar projecten.
 * Prijzen volgen PRODUCTS en TARIEVEN; plaatsnamen volgen REGIO_ROUTES.
 * Gedeelde technische uitleg en voorwaarden hoeven niet kunstmatig te variëren.
 * Gebruik geen onbewezen regionale bouwkenmerken of vaste droogtijdclaims.
 */
import { REGIO_ROUTES, type RegioRoute } from "./regio-slugs.js";
import { REALISATIES } from "./realisaties.js";
import { TARIEVEN } from "./tarieven.js";
import { PRODUCTS } from "./verhuur.js";

export interface RegioFaq {
  q: string;
  a: string;
}

export interface RegioToestel {
  /** Sleutel in `PRODUCTS`, tevens de slug van /verhuur/toestel/<key>. */
  key: string;
  /** Waarom dit toestel hier het vaakst past — één of twee zinnen. */
  waarom: string;
}

export interface RegioFeit {
  label: string;
  waarde: string;
}

export interface Regio extends RegioRoute {
  /** ≤ 60 tekens, zoekwoord vooraan. */
  title: string;
  /** 120–160 tekens. */
  description: string;
  h1: string;
  kicker: string;
  /** De alinea's onder de H1. */
  intro: string[];
  /** Optionele, korte servicebewijzen direct onder de hero-intro. */
  heroFacts?: string[];
  /** Praktische uitleg over het werkgebied en de droogopstelling. */
  bouw: { kop: string; alineas: string[] };
  /**
   * De foto naast die tekst. Zonder beeld was dat blok een kolom tekst met een
   * lege helft ernaast — op een breed scherm viel de helft van de sectie weg.
   */
  beeld: { src: string; alt: string };
  toestellen: { kop: string; items: RegioToestel[] };
  levering: { kop: string; alineas: string[]; feiten: RegioFeit[] };
  /**
   * `feiten` is optioneel maar in de praktijk overal ingevuld: zonder die
   * regels stond het afhaalpaneel naast een leveringspaneel met twee alinea's
   * én een tabel, en bleef er in de rechterkolom een half scherm leeg onder de
   * tekst (de knop zakt door `.paneel` naar de onderrand).
   */
  afhalen: { kop: string; alineas: string[]; feiten?: RegioFeit[] };
  faq: RegioFaq[];
  realisaties: { kop: string; intro: string; slugs: string[] };
  /** `areaServed` van de Service-schema. */
  areaServed: Record<string, unknown>;
}

const LADDER = TARIEVEN.pricing.ladder_fee;
const POMP = TARIEVEN.pricing.pump_price_per_day;

const euro = (n: number) => `€ ${n.toLocaleString("nl-BE")}`;
const dag = (key: string) => euro(PRODUCTS[key].day);

/* Het land is een parameter sinds de Nederlandse provincies (15-11-2026):
   anders vertelde de schema-markup dat Noord-Brabant in België ligt. */
const provincie = (name: string, land = "België") => ({
  "@type": "AdministrativeArea",
  name,
  containedInPlace: { "@type": "Country", name: land },
});

const route = (slug: string): RegioRoute => {
  const r = REGIO_ROUTES.find((x) => x.slug === slug);
  if (!r) throw new Error(`Onbekende regio: ${slug}`);
  return r;
};

export const REGIOS: Regio[] = [
  /* ------------------------------------------------------------------ */
  {
    ...route("antwerpen"),
    title: "Bouwdroger huren in provincie Antwerpen | Vernast",
    description:
      "Bouwdroger huren in Antwerpen? Bereken uw droogpakket bij Vernast. Levering, plaatsing en ophaling inbegrepen, met advies voor uw werf.",
    h1: "Bouwdroger huren in de provincie Antwerpen",
    kicker: "Hele provincie · magazijn in Aartselaar",
    intro: [
      "Een bouwdroger huren in de provincie Antwerpen voor nieuwbouw, renovatie of waterschade? Vernast levert vanuit Aartselaar op uw werf, van Mechelen en Lier tot Turnhout en de Antwerpse districten. **Uw droogpakket is inclusief levering, plaatsing en ophaling.** Bereken uw huurprijs online of vraag ons advies over de geschikte toestellen.",
    ],
    bouw: {
      kop: "Bouwdroging voor uw project in Antwerpen",
      alineas: [
        "Voor een werf in de provincie Antwerpen kunt u kiezen tussen levering en zelf afhalen in Aartselaar. Dat is vooral praktisch wanneer u één toestel nodig hebt en het zelf kunt vervoeren. Voor een compleet droogpakket verzorgt de technieker de plaatsing. Bespreek vooraf welke ruimtes moeten drogen en of ze via een vaste trap of lift bereikbaar zijn.",
        "Nieuwe chape en pleisterwerk brengen vocht in het gebouw. Voor de keuze van een droogpakket zijn vooral het materiaal, de dikte, het volume en de temperatuur van belang. Geef ook door wanneer het materiaal is aangebracht. De droogopstelling en het startmoment moeten passen bij de voorschriften van uw aannemer of materiaalleverancier.",
        "Bij een natte kelder of lekkage begint het werk met de oorzaak: blijft er water binnenkomen, dan is drogen alleen geen blijvende oplossing. Laat eerst het lek of de waterinfiltratie aanpakken en verwijder aanwezig water. Daarna bekijken we welke materialen nat zijn en of het vocht ook onder een vloer of achter een wand zit.",
        "**Ook de temperatuur en de luchtcirculatie tellen mee.** Op een koude werf kan bijverwarming nodig zijn, afhankelijk van de bouwdroger en de omstandigheden. Bespreek de stroomvoorziening voordat u een kachel reserveert. De maximumcapaciteit op een toestelfiche is geen vaste hoeveelheid water die het toestel op elke werf per dag zal afvoeren."
      ]
    },
    beeld: {
      src: "/vernast/case-renovatie.webp",
      alt: "Renovatie met vers pleisterwerk in een Antwerpse rijwoning",
    },
    toestellen: {
      kop: "Welke toestellen passen bij uw werf?",
      items: [
        {
          key: "ttk170",
          waarom: `**Voor een afzonderlijke kamer of een kleinere droogzone.** Bespreek de afmetingen, temperatuur en hoeveelheid vocht om te bepalen of dit toestel voldoende capaciteit heeft. Vanaf ${dag("ttk170")} per dag.`,
        },
        {
          key: "ttk350",
          waarom: `**Voor grotere ruimtes of meerdere droogzones.** De benodigde capaciteit hangt af van het volume en het natte materiaal. De indeling van uw werf bepaalt waar de toestellen komen te staan. Vanaf ${dag("ttk350")} per dag.`,
        },
        {
          key: "teddh30",
          waarom: `**Voor bijverwarming op een koude werf.** Deze elektrische kachel vraagt een geschikte 400 V-aansluiting. Laat vooraf controleren of de beschikbare voeding past bij het aansluitvermogen. Vanaf ${dag("teddh30")} per dag.`,
        },
        {
          key: "ttv4500",
          waarom: `**Voor luchtcirculatie naast de bouwdroger.** Een ventilator helpt de lucht langs vochtige oppervlakken te bewegen. Hij voert zelf geen vocht uit de ruimte af en vervangt de ontvochtiger niet. Vanaf ${dag("ttv4500")} per dag.`,
        },
      ],
    },
    levering: {
      kop: "Levering en plaatsing in Antwerpen",
      alineas: [
        "We leveren in Antwerpen stad, Mechelen, Lier, Turnhout en de overige gemeenten van de provincie. **Levering, plaatsing en ophaling zijn inbegrepen bij uw droogpakket.** Geef het volledige werfadres, de gewenste startdatum en een contactpersoon door. Meld bijzonderheden zoals een smalle doorgang, een verdieping zonder vaste trap of een beperkte laadzone voordat we de levering afspreken.",
        "De technieker verdeelt de toestellen over de afgesproken droogzones en legt uit hoe de opstelling gebruikt moet worden. Daarbij bespreken we de condensafvoer en wat u tijdens de huur zelf controleert. Houd de toegang vrij en zorg dat de afgesproken stroomvoorziening beschikbaar is. Verandert er iets aan de werf of komt er opnieuw water binnen, neem dan contact op."
      ],
      feiten: [
{ label: "Levering, plaatsing en ophaling", waarde: "Inbegrepen in het droogpakket" },
{ label: "Levermoment", waarde: "Volgens uw reservatie" },
{ label: "Verdieping zonder vaste trap", waarde: `Vooraf bespreken; laddertoeslag ${euro(LADDER)} per verdieping` },
{ label: "Condenspomp", waarde: `${euro(POMP)} per bouwdroger per dag, indien gekozen` }
],
    },
    afhalen: {
      kop: "Zelf afhalen vanuit Antwerpen",
      alineas: [
        "Een los toestel kunt u op afspraak afhalen bij ons magazijn aan de Boomsesteenweg 12, unit 11 in Aartselaar. **Reserveer vooraf en bekijk de afhaaltarieven.** Neem bij de keuze tussen afhalen en leveren ook het terugbrengen mee. Controleer of het toestel in uw voertuig past en volg de transportinstructies van het gekozen model.",
        "Bij zelf afhalen plaatst u het toestel zelf. Geef daarom vooraf door wat er moet drogen en welke aansluiting u hebt. Voor meerdere ruimtes, moeilijk bereikbare zones of twijfel over de nodige capaciteit kunt u advies vragen over een droogpakket met plaatsing. De afgesproken huurperiode en eventuele opties staan in uw reservatie."
      ],
      feiten: [
        {
          label: "Afhaalpunt",
          waarde: "Boomsesteenweg 12, unit 11, Aartselaar"
        },
        {
          label: "Afhaalmoment",
          waarde: "Op afspraak"
        },
        {
          label: "Vervoer",
          waarde: "Volgens de instructies van het gekozen toestel"
        },
        {
          label: "Liever laten leveren?",
          waarde: "Levering en plaatsing inbegrepen bij uw droogpakket"
        }
      ],
    },
    faq: [
      {
        q: "Hoe regel ik een levering in Antwerpen?",
        a: "Bereken uw droogpakket online of neem contact op met uw adres in Antwerpen, de afmetingen van de ruimte en de gewenste startdatum. Geef ook de verdieping en de beschikbare stroom door. We stemmen het levermoment en de toegang tot de werf met u af."
      },
      {
        q: "Hoeveel bouwdrogers heb ik nodig?",
        a: "Dat hangt af van het volume, de indeling, het materiaal en de hoeveelheid vocht. Eén open verdieping vraagt een andere opstelling dan meerdere afgesloten kamers. Gebruik de calculator voor uw pakket en vraag advies als uw situatie afwijkt, bijvoorbeeld bij een hoge ruimte of verborgen vocht."
      },
      {
        q: "Hoe weet ik wanneer de vloer of muur droog genoeg is?",
        a: "De huurduur alleen geeft daar geen zekerheid over. Laat het restvocht controleren met een methode die bij het materiaal past. Uw vloerlegger of schilder beoordeelt welke vochtwaarde en eventuele aanvullende meting nodig zijn voordat de gekozen afwerking kan worden aangebracht."
      },
      {
        q: "Kan een bouwdroger op een verdieping geplaatst worden?",
        a: "Dat hangt af van de toegang en het toestel. Meld bij uw aanvraag de verdieping, een eventuele lift en smalle doorgangen. Is er geen vaste trap, bespreek dan vooraf hoe de toestellen boven kunnen komen en welke toeslag van toepassing is."
      },
      {
        q: "Welke stroomvoorziening heb ik nodig?",
        a: "Het aansluitvermogen verschilt per toestel. Controleer de technische fiche en geef door welke aansluiting op uw werf beschikbaar is. Voor de elektrische bouwkachels van 20 en 30 kW is een geschikte 400 V-voeding nodig. Laat bij twijfel de beschikbare capaciteit en beveiliging controleren."
      },
      {
        q: "Kan ik zelf afhalen voor een werf in Antwerpen?",
        a: "Afhalen kan op afspraak bij ons magazijn in Aartselaar, Boomsesteenweg 12, unit 11. Reserveer uw toestel vooraf en controleer of het in uw voertuig past. Volg de transportinstructies voor het gekozen toestel. Bij een droogpakket met levering verzorgen wij de plaatsing en de ophaling."
      }
    ],
    realisaties: {
      kop: "Werven die we in en rond Antwerpen droogden",
      intro: "Bekijk uitgevoerde projecten in deze regio. Bij elk project vindt u de locatie, de uitgevoerde werken en de beschikbare foto’s.",
      slugs: ["kelder-en-kamer-drogen-antwerpen", "nieuwbouw-drogen-kontich", "nieuwbouwvilla-drogen-schilde"],
    },
    areaServed: provincie("Antwerpen"),
  },

  /* ------------------------------------------------------------------ */
  {
    ...route("oost-vlaanderen"),
    title: "Bouwdroger huren in Oost-Vlaanderen: Gent, Aalst | Vernast",
    description:
      "Bouwdroger huren in Oost-Vlaanderen? Bereken uw droogpakket bij Vernast. Levering, plaatsing en ophaling inbegrepen, met advies voor uw werf.",
    h1: "Bouwdroger huren in Oost-Vlaanderen",
    kicker: "Gent · Aalst · Sint-Niklaas · Dendermonde",
    intro: [
      "Een bouwdroger nodig in Oost-Vlaanderen om chape, pleisterwerk of een ruimte na waterschade te drogen? Wij leveren op uw werf in Gent, Aalst, Sint-Niklaas en de rest van de provincie. **Bij Vernast huurt u een droogpakket inclusief levering, plaatsing en ophaling.** Bereken uw prijs online of bespreek uw project met ons.",
    ],
    bouw: {
      kop: "Bouwdroging voor uw project in Oost-Vlaanderen",
      alineas: [
        "Plant u een renovatie in Gent, een werf in het Waasland of een nieuwbouw elders in Oost-Vlaanderen? Geef bij uw aanvraag aan welke werken zijn uitgevoerd en hoeveel ruimtes nat zijn. Een afzonderlijke kamer vraagt een andere opstelling dan een volledige woning. Ook afgesloten verdiepingen en bijgebouwen nemen we apart mee in het advies.",
        "Nieuwe chape en pleisterwerk brengen vocht in het gebouw. Voor de keuze van een droogpakket zijn vooral het materiaal, de dikte, het volume en de temperatuur van belang. Geef ook door wanneer het materiaal is aangebracht. De droogopstelling en het startmoment moeten passen bij de voorschriften van uw aannemer of materiaalleverancier.",
        "Bij een natte kelder of lekkage begint het werk met de oorzaak: blijft er water binnenkomen, dan is drogen alleen geen blijvende oplossing. Laat eerst het lek of de waterinfiltratie aanpakken en verwijder aanwezig water. Daarna bekijken we welke materialen nat zijn en of het vocht ook onder een vloer of achter een wand zit.",
        "**Ook de temperatuur en de luchtcirculatie tellen mee.** Op een koude werf kan bijverwarming nodig zijn, afhankelijk van de bouwdroger en de omstandigheden. Bespreek de stroomvoorziening voordat u een kachel reserveert. De maximumcapaciteit op een toestelfiche is geen vaste hoeveelheid water die het toestel op elke werf per dag zal afvoeren."
      ]
    },
    beeld: {
      src: "/vernast/case-kelder.webp",
      alt: "Kelder met vochtproblemen, zoals in de Oost-Vlaamse Scheldevallei",
    },
    toestellen: {
      kop: "Welke toestellen passen bij uw werf?",
      items: [
        {
          key: "ttk350",
          waarom: `**Voor grotere ruimtes of meerdere droogzones.** De benodigde capaciteit hangt af van het volume en het natte materiaal. De indeling van uw werf bepaalt waar de toestellen komen te staan. Vanaf ${dag("ttk350")} per dag.`,
        },
        {
          key: "ttk650",
          waarom: `**Voor grotere volumes en een hoge vochtbelasting.** Bekijk de technische fiche en laat de opstelling afstemmen op de ruimtes die werkelijk gedroogd moeten worden. Vanaf ${dag("ttk650")} per dag.`,
        },
        {
          key: "ttv4500",
          waarom: `**Voor luchtcirculatie naast de bouwdroger.** Een ventilator helpt de lucht langs vochtige oppervlakken te bewegen. Hij voert zelf geen vocht uit de ruimte af en vervangt de ontvochtiger niet. Vanaf ${dag("ttv4500")} per dag.`,
        },
        {
          key: "teddh30",
          waarom: `**Voor bijverwarming op een koude werf.** Deze elektrische kachel vraagt een geschikte 400 V-aansluiting. Laat vooraf controleren of de beschikbare voeding past bij het aansluitvermogen. Vanaf ${dag("teddh30")} per dag.`,
        },
      ],
    },
    levering: {
      kop: "Levering en plaatsing in Oost-Vlaanderen",
      alineas: [
        "We leveren in Gent, Aalst, Sint-Niklaas, Dendermonde en de overige gemeenten van Oost-Vlaanderen. **Levering, plaatsing en ophaling zijn inbegrepen bij uw droogpakket.** Geef het volledige werfadres, de gewenste startdatum en een contactpersoon door. Meld bijzonderheden zoals een smalle doorgang, een verdieping zonder vaste trap of een beperkte laadzone voordat we de levering afspreken.",
        "De technieker verdeelt de toestellen over de afgesproken droogzones en legt uit hoe de opstelling gebruikt moet worden. Daarbij bespreken we de condensafvoer en wat u tijdens de huur zelf controleert. Houd de toegang vrij en zorg dat de afgesproken stroomvoorziening beschikbaar is. Verandert er iets aan de werf of komt er opnieuw water binnen, neem dan contact op."
      ],
      feiten: [
{ label: "Levering, plaatsing en ophaling", waarde: "Inbegrepen in het droogpakket" },
{ label: "Levermoment", waarde: "Volgens uw reservatie" },
{ label: "Verdieping zonder vaste trap", waarde: `Vooraf bespreken; laddertoeslag ${euro(LADDER)} per verdieping` },
{ label: "Condenspomp", waarde: `${euro(POMP)} per bouwdroger per dag, indien gekozen` }
],
    },
    afhalen: {
      kop: "Zelf afhalen vanuit Oost-Vlaanderen",
      alineas: [
        "Een los toestel kunt u op afspraak afhalen bij ons magazijn aan de Boomsesteenweg 12, unit 11 in Aartselaar. **Reserveer vooraf en bekijk de afhaaltarieven.** Neem bij de keuze tussen afhalen en leveren ook het terugbrengen mee. Controleer of het toestel in uw voertuig past en volg de transportinstructies van het gekozen model.",
        "Bij zelf afhalen plaatst u het toestel zelf. Geef daarom vooraf door wat er moet drogen en welke aansluiting u hebt. Voor meerdere ruimtes, moeilijk bereikbare zones of twijfel over de nodige capaciteit kunt u advies vragen over een droogpakket met plaatsing. De afgesproken huurperiode en eventuele opties staan in uw reservatie."
      ],
      feiten: [
        {
          label: "Afhaalpunt",
          waarde: "Boomsesteenweg 12, unit 11, Aartselaar"
        },
        {
          label: "Afhaalmoment",
          waarde: "Op afspraak"
        },
        {
          label: "Vervoer",
          waarde: "Volgens de instructies van het gekozen toestel"
        },
        {
          label: "Liever laten leveren?",
          waarde: "Levering en plaatsing inbegrepen bij uw droogpakket"
        }
      ],
    },
    faq: [
      {
        q: "Hoe regel ik een levering in Oost-Vlaanderen?",
        a: "Bereken uw droogpakket online of neem contact op met uw adres in Oost-Vlaanderen, de afmetingen van de ruimte en de gewenste startdatum. Geef ook de verdieping en de beschikbare stroom door. We stemmen het levermoment en de toegang tot de werf met u af."
      },
      {
        q: "Hoeveel bouwdrogers heb ik nodig?",
        a: "Dat hangt af van het volume, de indeling, het materiaal en de hoeveelheid vocht. Eén open verdieping vraagt een andere opstelling dan meerdere afgesloten kamers. Gebruik de calculator voor uw pakket en vraag advies als uw situatie afwijkt, bijvoorbeeld bij een hoge ruimte of verborgen vocht."
      },
      {
        q: "Hoe weet ik wanneer de vloer of muur droog genoeg is?",
        a: "De huurduur alleen geeft daar geen zekerheid over. Laat het restvocht controleren met een methode die bij het materiaal past. Uw vloerlegger of schilder beoordeelt welke vochtwaarde en eventuele aanvullende meting nodig zijn voordat de gekozen afwerking kan worden aangebracht."
      },
      {
        q: "Wanneer mag ik starten met het drogen van verse chape?",
        a: "Dat hangt af van het type chape en de voorschriften van de leverancier. Start geforceerde droging pas wanneer dat is toegestaan. Geef bij uw aanvraag het materiaal, de laagdikte en de plaatsingsdatum door, zodat het advies bij uw vloeropbouw past."
      },
      {
        q: "Welke stroomvoorziening heb ik nodig?",
        a: "Het aansluitvermogen verschilt per toestel. Controleer de technische fiche en geef door welke aansluiting op uw werf beschikbaar is. Voor de elektrische bouwkachels van 20 en 30 kW is een geschikte 400 V-voeding nodig. Laat bij twijfel de beschikbare capaciteit en beveiliging controleren."
      },
      {
        q: "Kan ik zelf afhalen voor een werf in Oost-Vlaanderen?",
        a: "Afhalen kan op afspraak bij ons magazijn in Aartselaar, Boomsesteenweg 12, unit 11. Reserveer uw toestel vooraf en controleer of het in uw voertuig past. Volg de transportinstructies voor het gekozen toestel. Bij een droogpakket met levering verzorgen wij de plaatsing en de ophaling."
      }
    ],
    realisaties: {
      kop: "Werven die we in Oost-Vlaanderen droogden",
      intro: "Bekijk uitgevoerde projecten in deze regio. Bij elk project vindt u de locatie, de uitgevoerde werken en de beschikbare foto’s.",
      slugs: ["kelder-drogen-lokeren", "berging-drogen-berlare"],
    },
    areaServed: provincie("Oost-Vlaanderen"),
  },

  /* ------------------------------------------------------------------ */
  {
    ...route("vlaams-brabant"),
    title: "Bouwdroger huren in Vlaams-Brabant: Leuven, Halle | Vernast",
    description:
      "Bouwdroger huren in Vlaams-Brabant? Bereken uw droogpakket bij Vernast. Levering, plaatsing en ophaling inbegrepen, met advies voor uw werf.",
    h1: "Bouwdroger huren in Vlaams-Brabant",
    kicker: "Leuven · Vilvoorde · Halle · Aarschot · de Brusselse rand",
    intro: [
      "Huur een bouwdroger voor uw nieuwbouw, renovatie of waterschade in Vlaams-Brabant. Vernast levert in de hele provincie, van Leuven en Aarschot tot Halle en de Brusselse rand. **Levering, plaatsing en ophaling zitten in de prijs van uw droogpakket.** Bereken online welk pakket bij uw werf past of bel ons voor advies.",
    ],
    bouw: {
      kop: "Bouwdroging voor uw project in Vlaams-Brabant",
      alineas: [
        "Voor een werf in Leuven, de Brusselse rand, het Hageland of het Pajottenland is de situatie binnen het gebouw het vertrekpunt. Gaat het om een bewoond appartement, een woning in renovatie of een open nieuwbouwwerf? Geef aan welke ruimtes in gebruik blijven en wanneer de volgende aannemer komt. Zo kunnen we de plaatsing en opvolging met u bespreken.",
        "Nieuwe chape en pleisterwerk brengen vocht in het gebouw. Voor de keuze van een droogpakket zijn vooral het materiaal, de dikte, het volume en de temperatuur van belang. Geef ook door wanneer het materiaal is aangebracht. De droogopstelling en het startmoment moeten passen bij de voorschriften van uw aannemer of materiaalleverancier.",
        "Bij een natte kelder of lekkage begint het werk met de oorzaak: blijft er water binnenkomen, dan is drogen alleen geen blijvende oplossing. Laat eerst het lek of de waterinfiltratie aanpakken en verwijder aanwezig water. Daarna bekijken we welke materialen nat zijn en of het vocht ook onder een vloer of achter een wand zit.",
        "**Ook de temperatuur en de luchtcirculatie tellen mee.** Op een koude werf kan bijverwarming nodig zijn, afhankelijk van de bouwdroger en de omstandigheden. Bespreek de stroomvoorziening voordat u een kachel reserveert. De maximumcapaciteit op een toestelfiche is geen vaste hoeveelheid water die het toestel op elke werf per dag zal afvoeren."
      ]
    },
    beeld: {
      src: "/vernast/case-nieuwbouw.webp",
      alt: "Gerenoveerde villa in afwerking in de Brusselse rand",
    },
    toestellen: {
      kop: "Welke toestellen passen bij uw werf?",
      items: [
        {
          key: "ttk350",
          waarom: `**Voor grotere ruimtes of meerdere droogzones.** De benodigde capaciteit hangt af van het volume en het natte materiaal. De indeling van uw werf bepaalt waar de toestellen komen te staan. Vanaf ${dag("ttk350")} per dag.`,
        },
        {
          key: "ttk650",
          waarom: `**Voor grotere volumes en een hoge vochtbelasting.** Bekijk de technische fiche en laat de opstelling afstemmen op de ruimtes die werkelijk gedroogd moeten worden. Vanaf ${dag("ttk650")} per dag.`,
        },
        {
          key: "radiaal2250",
          waarom: `**Voor gerichte luchtcirculatie langs een vloer of wand.** De plaatsing hangt af van de te drogen zone. Combineer luchtverplaatsing met voldoende ontvochtigingscapaciteit. Vanaf ${dag("radiaal2250")} per dag.`,
        },
        {
          key: "ttk170",
          waarom: `**Voor een afzonderlijke kamer of een kleinere droogzone.** Bespreek de afmetingen, temperatuur en hoeveelheid vocht om te bepalen of dit toestel voldoende capaciteit heeft. Vanaf ${dag("ttk170")} per dag.`,
        },
      ],
    },
    levering: {
      kop: "Levering en plaatsing in Vlaams-Brabant",
      alineas: [
        "We leveren in Leuven, Vilvoorde, Halle, Aarschot en de overige gemeenten van Vlaams-Brabant. **Levering, plaatsing en ophaling zijn inbegrepen bij uw droogpakket.** Geef het volledige werfadres, de gewenste startdatum en een contactpersoon door. Meld bijzonderheden zoals een smalle doorgang, een verdieping zonder vaste trap of een beperkte laadzone voordat we de levering afspreken.",
        "De technieker verdeelt de toestellen over de afgesproken droogzones en legt uit hoe de opstelling gebruikt moet worden. Daarbij bespreken we de condensafvoer en wat u tijdens de huur zelf controleert. Houd de toegang vrij en zorg dat de afgesproken stroomvoorziening beschikbaar is. Verandert er iets aan de werf of komt er opnieuw water binnen, neem dan contact op."
      ],
      feiten: [
{ label: "Levering, plaatsing en ophaling", waarde: "Inbegrepen in het droogpakket" },
{ label: "Levermoment", waarde: "Volgens uw reservatie" },
{ label: "Verdieping zonder vaste trap", waarde: `Vooraf bespreken; laddertoeslag ${euro(LADDER)} per verdieping` },
{ label: "Condenspomp", waarde: `${euro(POMP)} per bouwdroger per dag, indien gekozen` }
],
    },
    afhalen: {
      kop: "Zelf afhalen vanuit Vlaams-Brabant",
      alineas: [
        "Een los toestel kunt u op afspraak afhalen bij ons magazijn aan de Boomsesteenweg 12, unit 11 in Aartselaar. **Reserveer vooraf en bekijk de afhaaltarieven.** Neem bij de keuze tussen afhalen en leveren ook het terugbrengen mee. Controleer of het toestel in uw voertuig past en volg de transportinstructies van het gekozen model.",
        "Bij zelf afhalen plaatst u het toestel zelf. Geef daarom vooraf door wat er moet drogen en welke aansluiting u hebt. Voor meerdere ruimtes, moeilijk bereikbare zones of twijfel over de nodige capaciteit kunt u advies vragen over een droogpakket met plaatsing. De afgesproken huurperiode en eventuele opties staan in uw reservatie."
      ],
      feiten: [
        {
          label: "Afhaalpunt",
          waarde: "Boomsesteenweg 12, unit 11, Aartselaar"
        },
        {
          label: "Afhaalmoment",
          waarde: "Op afspraak"
        },
        {
          label: "Vervoer",
          waarde: "Volgens de instructies van het gekozen toestel"
        },
        {
          label: "Liever laten leveren?",
          waarde: "Levering en plaatsing inbegrepen bij uw droogpakket"
        }
      ],
    },
    faq: [
      {
        q: "Hoe regel ik een levering in Vlaams-Brabant?",
        a: "Bereken uw droogpakket online of neem contact op met uw adres in Vlaams-Brabant, de afmetingen van de ruimte en de gewenste startdatum. Geef ook de verdieping en de beschikbare stroom door. We stemmen het levermoment en de toegang tot de werf met u af."
      },
      {
        q: "Hoeveel bouwdrogers heb ik nodig?",
        a: "Dat hangt af van het volume, de indeling, het materiaal en de hoeveelheid vocht. Eén open verdieping vraagt een andere opstelling dan meerdere afgesloten kamers. Gebruik de calculator voor uw pakket en vraag advies als uw situatie afwijkt, bijvoorbeeld bij een hoge ruimte of verborgen vocht."
      },
      {
        q: "Hoe weet ik wanneer de vloer of muur droog genoeg is?",
        a: "De huurduur alleen geeft daar geen zekerheid over. Laat het restvocht controleren met een methode die bij het materiaal past. Uw vloerlegger of schilder beoordeelt welke vochtwaarde en eventuele aanvullende meting nodig zijn voordat de gekozen afwerking kan worden aangebracht."
      },
      {
        q: "Kan een bouwdroger op een verdieping geplaatst worden?",
        a: "Dat hangt af van de toegang en het toestel. Meld bij uw aanvraag de verdieping, een eventuele lift en smalle doorgangen. Is er geen vaste trap, bespreek dan vooraf hoe de toestellen boven kunnen komen en welke toeslag van toepassing is."
      },
      {
        q: "Welke stroomvoorziening heb ik nodig?",
        a: "Het aansluitvermogen verschilt per toestel. Controleer de technische fiche en geef door welke aansluiting op uw werf beschikbaar is. Voor de elektrische bouwkachels van 20 en 30 kW is een geschikte 400 V-voeding nodig. Laat bij twijfel de beschikbare capaciteit en beveiliging controleren."
      },
      {
        q: "Kan ik zelf afhalen voor een werf in Vlaams-Brabant?",
        a: "Afhalen kan op afspraak bij ons magazijn in Aartselaar, Boomsesteenweg 12, unit 11. Reserveer uw toestel vooraf en controleer of het in uw voertuig past. Volg de transportinstructies voor het gekozen toestel. Bij een droogpakket met levering verzorgen wij de plaatsing en de ophaling."
      }
    ],
    realisaties: {
      kop: "Werven die we in Brussel en de rand droogden",
      intro: "Bekijk voorbeelden uit het nabijgelegen Brussels Gewest. Bij elk project vindt u de locatie, de uitgevoerde werken en de beschikbare foto’s.",
      slugs: ["pleisterwerk-drogen-sint-pieters-woluwe", "badkamer-drogen-brussel"],
    },
    areaServed: provincie("Vlaams-Brabant"),
  },

  /* ------------------------------------------------------------------ */
  {
    ...route("brussel"),
    title: "Bouwdroger huren in Brussel | Vernast",
    description:
      "Bouwdroger huren in Brussel? Bereken uw droogpakket bij Vernast. Levering, plaatsing en ophaling inbegrepen, met advies voor uw werf.",
    h1: "Bouwdroger huren in Brussel",
    kicker: "Brussel · levering in alle negentien gemeenten",
    intro: [
      "Een bouwdroger huren in Brussel voor uw woning, appartement of bedrijfspand? Vernast levert en plaatst toestellen in alle negentien gemeenten voor nieuwbouw, renovatie en het drogen na waterschade. **U huurt een droogpakket met levering, plaatsing en ophaling inbegrepen.** Bereken uw huurprijs of bel ons voor advies over uw ruimte en de bereikbaarheid.",
    ],
    heroFacts: [
      "Levering en plaatsing bij uw droogpakket",
      "Voor- en nameting inbegrepen",
      "Ophaling na de huurperiode"
    ],
    bouw: {
      kop: "Bouwdroging voor uw project in Brussel",
      alineas: [
        "Bij een levering in Brussel is de toegang tot het gebouw een belangrijk onderdeel van de voorbereiding. Vermeld de verdieping, de aanwezigheid van een lift en eventuele afspraken met de syndicus. Ligt het adres in een voetgangerszone of is er beperkte laadruimte? Geef dat vooraf door, zodat de levering afgestemd kan worden op de toegang ter plaatse.",
        "Nieuwe chape en pleisterwerk brengen vocht in het gebouw. Voor de keuze van een droogpakket zijn vooral het materiaal, de dikte, het volume en de temperatuur van belang. Geef ook door wanneer het materiaal is aangebracht. De droogopstelling en het startmoment moeten passen bij de voorschriften van uw aannemer of materiaalleverancier.",
        "Bij een natte kelder of lekkage begint het werk met de oorzaak: blijft er water binnenkomen, dan is drogen alleen geen blijvende oplossing. Laat eerst het lek of de waterinfiltratie aanpakken en verwijder aanwezig water. Daarna bekijken we welke materialen nat zijn en of het vocht ook onder een vloer of achter een wand zit.",
        "**Ook de temperatuur en de luchtcirculatie tellen mee.** Op een koude werf kan bijverwarming nodig zijn, afhankelijk van de bouwdroger en de omstandigheden. Bespreek de stroomvoorziening voordat u een kachel reserveert. De maximumcapaciteit op een toestelfiche is geen vaste hoeveelheid water die het toestel op elke werf per dag zal afvoeren."
      ]
    },
    beeld: {
      src: "/vernast/case-waterschade.webp",
      alt: "Gedroogde badkamer na een lekkage in een Brussels appartement",
    },
    toestellen: {
      kop: "Welke toestellen passen bij uw werf?",
      items: [
        {
          key: "ttk170",
          waarom: `**Voor een afzonderlijke kamer of een kleinere droogzone.** Bespreek de afmetingen, temperatuur en hoeveelheid vocht om te bepalen of dit toestel voldoende capaciteit heeft. Vanaf ${dag("ttk170")} per dag.`,
        },
        {
          key: "ttk350",
          waarom: `**Voor grotere ruimtes of meerdere droogzones.** De benodigde capaciteit hangt af van het volume en het natte materiaal. De indeling van uw werf bepaalt waar de toestellen komen te staan. Vanaf ${dag("ttk350")} per dag.`,
        },
        {
          key: "revolution",
          waarom: `**Voor een droogopstelling na waterschade.** Bespreek eerst waar het vocht zit en hoe de constructie is opgebouwd. Voor vocht onder een vloer of achter een wand kan een aangepaste aanpak nodig zijn. Vanaf ${dag("revolution")} per dag.`,
        },
        {
          key: "ttv4500",
          waarom: `**Voor luchtcirculatie naast de bouwdroger.** Een ventilator helpt de lucht langs vochtige oppervlakken te bewegen. Hij voert zelf geen vocht uit de ruimte af en vervangt de ontvochtiger niet. Vanaf ${dag("ttv4500")} per dag.`,
        },
      ],
    },
    levering: {
      kop: "Levering en plaatsing in Brussel",
      alineas: [
        "We leveren in Brussel stad en de achttien andere gemeenten van het Brussels Hoofdstedelijk Gewest. **Levering, plaatsing en ophaling zijn inbegrepen bij uw droogpakket.** Geef het volledige werfadres, de gewenste startdatum en een contactpersoon door. Meld bijzonderheden zoals een smalle doorgang, een verdieping zonder vaste trap of een beperkte laadzone voordat we de levering afspreken.",
        "De technieker verdeelt de toestellen over de afgesproken droogzones en legt uit hoe de opstelling gebruikt moet worden. Daarbij bespreken we de condensafvoer en wat u tijdens de huur zelf controleert. Houd de toegang vrij en zorg dat de afgesproken stroomvoorziening beschikbaar is. Verandert er iets aan de werf of komt er opnieuw water binnen, neem dan contact op."
      ],
      feiten: [
{ label: "Levering, plaatsing en ophaling", waarde: "Inbegrepen in het droogpakket" },
{ label: "Levermoment", waarde: "Volgens uw reservatie" },
{ label: "Verdieping zonder vaste trap", waarde: `Vooraf bespreken; laddertoeslag ${euro(LADDER)} per verdieping` },
{ label: "Condenspomp", waarde: `${euro(POMP)} per bouwdroger per dag, indien gekozen` }
],
    },
    afhalen: {
      kop: "Zelf afhalen vanuit Brussel",
      alineas: [
        "Een los toestel kunt u op afspraak afhalen bij ons magazijn aan de Boomsesteenweg 12, unit 11 in Aartselaar. **Reserveer vooraf en bekijk de afhaaltarieven.** Neem bij de keuze tussen afhalen en leveren ook het terugbrengen mee. Controleer of het toestel in uw voertuig past en volg de transportinstructies van het gekozen model.",
        "Bij zelf afhalen plaatst u het toestel zelf. Geef daarom vooraf door wat er moet drogen en welke aansluiting u hebt. Voor meerdere ruimtes, moeilijk bereikbare zones of twijfel over de nodige capaciteit kunt u advies vragen over een droogpakket met plaatsing. De afgesproken huurperiode en eventuele opties staan in uw reservatie."
      ],
      feiten: [
        {
          label: "Afhaalpunt",
          waarde: "Boomsesteenweg 12, unit 11, Aartselaar"
        },
        {
          label: "Afhaalmoment",
          waarde: "Op afspraak"
        },
        {
          label: "Vervoer",
          waarde: "Volgens de instructies van het gekozen toestel"
        },
        {
          label: "Liever laten leveren?",
          waarde: "Levering en plaatsing inbegrepen bij uw droogpakket"
        }
      ],
    },
    faq: [
      {
        q: "Hoe regel ik een levering in Brussel?",
        a: "Bereken uw droogpakket online of neem contact op met uw adres in Brussel, de afmetingen van de ruimte en de gewenste startdatum. Geef ook de verdieping en de beschikbare stroom door. We stemmen het levermoment en de toegang tot de werf met u af."
      },
      {
        q: "Hoeveel bouwdrogers heb ik nodig?",
        a: "Dat hangt af van het volume, de indeling, het materiaal en de hoeveelheid vocht. Eén open verdieping vraagt een andere opstelling dan meerdere afgesloten kamers. Gebruik de calculator voor uw pakket en vraag advies als uw situatie afwijkt, bijvoorbeeld bij een hoge ruimte of verborgen vocht."
      },
      {
        q: "Hoe weet ik wanneer de vloer of muur droog genoeg is?",
        a: "De huurduur alleen geeft daar geen zekerheid over. Laat het restvocht controleren met een methode die bij het materiaal past. Uw vloerlegger of schilder beoordeelt welke vochtwaarde en eventuele aanvullende meting nodig zijn voordat de gekozen afwerking kan worden aangebracht."
      },
      {
        q: "Kan een bouwdroger op een verdieping geplaatst worden?",
        a: "Dat hangt af van de toegang en het toestel. Meld bij uw aanvraag de verdieping, een eventuele lift en smalle doorgangen. Is er geen vaste trap, bespreek dan vooraf hoe de toestellen boven kunnen komen en welke toeslag van toepassing is."
      },
      {
        q: "Welke stroomvoorziening heb ik nodig?",
        a: "Het aansluitvermogen verschilt per toestel. Controleer de technische fiche en geef door welke aansluiting op uw werf beschikbaar is. Voor de elektrische bouwkachels van 20 en 30 kW is een geschikte 400 V-voeding nodig. Laat bij twijfel de beschikbare capaciteit en beveiliging controleren."
      },
      {
        q: "Kan ik zelf afhalen voor een werf in Brussel?",
        a: "Afhalen kan op afspraak bij ons magazijn in Aartselaar, Boomsesteenweg 12, unit 11. Reserveer uw toestel vooraf en controleer of het in uw voertuig past. Volg de transportinstructies voor het gekozen toestel. Bij een droogpakket met levering verzorgen wij de plaatsing en de ophaling."
      }
    ],
    realisaties: {
      kop: "Werven die we in Brussel droogden",
      intro: "Bekijk uitgevoerde projecten in deze regio. Bij elk project vindt u de locatie, de uitgevoerde werken en de beschikbare foto’s.",
      slugs: ["woning-drogen-brussel", "badkamer-drogen-brussel", "pleisterwerk-drogen-sint-pieters-woluwe"],
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Brussels Hoofdstedelijk Gewest",
      containedInPlace: { "@type": "Country", name: "België" },
    },
  },
  /* ------------------------------------------------------------------ */
  {
    ...route("west-vlaanderen"),
    title: "Bouwdroger huren West-Vlaanderen | Pakket met Drooggarantie",
    description:
      "Bouwdroger huren in West-Vlaanderen? Bereken uw droogpakket bij Vernast. Levering, plaatsing en ophaling inbegrepen, met advies voor uw werf.",
    h1: "Bouwdroger huren in West-Vlaanderen",
    kicker: "Brugge · Kortrijk · Oostende · Roeselare · de kust",
    intro: [
      "Een bouwdroger nodig voor chape, pleisterwerk of waterschade in West-Vlaanderen? Vernast levert op uw werf, van Brugge en Oostende tot Kortrijk en Roeselare. **De prijs van uw droogpakket omvat levering, plaatsing en ophaling.** Bereken uw pakket online of neem contact op voor hulp bij het kiezen van de juiste toestellen.",
    ],
    heroFacts: [
      "Levering en plaatsing bij uw droogpakket",
      "Voor- en nameting inbegrepen",
      "Ophaling na de huurperiode"
    ],
    bouw: {
      kop: "Bouwdroging voor uw project in West-Vlaanderen",
      alineas: [
        "Van een appartement aan de kust tot een renovatie in Kortrijk of een nieuwbouw bij Roeselare: geef door welke ruimte u wilt drogen en hoe die bereikbaar is. Bij een tweede verblijf is het nuttig vooraf af te spreken wie de toestellen ontvangt en tijdens de huur de opstelling kan controleren. Stem eventuele toegang via gemeenschappelijke delen af met de beheerder.",
        "Nieuwe chape en pleisterwerk brengen vocht in het gebouw. Voor de keuze van een droogpakket zijn vooral het materiaal, de dikte, het volume en de temperatuur van belang. Geef ook door wanneer het materiaal is aangebracht. De droogopstelling en het startmoment moeten passen bij de voorschriften van uw aannemer of materiaalleverancier.",
        "Bij een natte kelder of lekkage begint het werk met de oorzaak: blijft er water binnenkomen, dan is drogen alleen geen blijvende oplossing. Laat eerst het lek of de waterinfiltratie aanpakken en verwijder aanwezig water. Daarna bekijken we welke materialen nat zijn en of het vocht ook onder een vloer of achter een wand zit.",
        "**Ook de temperatuur en de luchtcirculatie tellen mee.** Op een koude werf kan bijverwarming nodig zijn, afhankelijk van de bouwdroger en de omstandigheden. Bespreek de stroomvoorziening voordat u een kachel reserveert. De maximumcapaciteit op een toestelfiche is geen vaste hoeveelheid water die het toestel op elke werf per dag zal afvoeren."
      ]
    },
    beeld: {
      src: "/vernast/case-keuken.webp",
      alt: "Keukenplaatsing tegen een drooggemaakte muur in een kustappartement",
    },
    toestellen: {
      kop: "Welke toestellen passen bij uw werf?",
      items: [
        {
          key: "ttk650",
          waarom: `**Voor grotere volumes en een hoge vochtbelasting.** Bekijk de technische fiche en laat de opstelling afstemmen op de ruimtes die werkelijk gedroogd moeten worden. Vanaf ${dag("ttk650")} per dag.`,
        },
        {
          key: "revolution",
          waarom: `**Voor een droogopstelling na waterschade.** Bespreek eerst waar het vocht zit en hoe de constructie is opgebouwd. Voor vocht onder een vloer of achter een wand kan een aangepaste aanpak nodig zijn. Vanaf ${dag("revolution")} per dag.`,
        },
        {
          key: "ttk350",
          waarom: `**Voor grotere ruimtes of meerdere droogzones.** De benodigde capaciteit hangt af van het volume en het natte materiaal. De indeling van uw werf bepaalt waar de toestellen komen te staan. Vanaf ${dag("ttk350")} per dag.`,
        },
        {
          key: "ttv4500",
          waarom: `**Voor luchtcirculatie naast de bouwdroger.** Een ventilator helpt de lucht langs vochtige oppervlakken te bewegen. Hij voert zelf geen vocht uit de ruimte af en vervangt de ontvochtiger niet. Vanaf ${dag("ttv4500")} per dag.`,
        },
      ],
    },
    levering: {
      kop: "Levering en plaatsing in West-Vlaanderen",
      alineas: [
        "We leveren in Brugge, Kortrijk, Roeselare, Oostende en de overige gemeenten van West-Vlaanderen. **Levering, plaatsing en ophaling zijn inbegrepen bij uw droogpakket.** Geef het volledige werfadres, de gewenste startdatum en een contactpersoon door. Meld bijzonderheden zoals een smalle doorgang, een verdieping zonder vaste trap of een beperkte laadzone voordat we de levering afspreken.",
        "De technieker verdeelt de toestellen over de afgesproken droogzones en legt uit hoe de opstelling gebruikt moet worden. Daarbij bespreken we de condensafvoer en wat u tijdens de huur zelf controleert. Houd de toegang vrij en zorg dat de afgesproken stroomvoorziening beschikbaar is. Verandert er iets aan de werf of komt er opnieuw water binnen, neem dan contact op."
      ],
      feiten: [
{ label: "Levering, plaatsing en ophaling", waarde: "Inbegrepen in het droogpakket" },
{ label: "Levermoment", waarde: "Volgens uw reservatie" },
{ label: "Verdieping zonder vaste trap", waarde: `Vooraf bespreken; laddertoeslag ${euro(LADDER)} per verdieping` },
{ label: "Condenspomp", waarde: `${euro(POMP)} per bouwdroger per dag, indien gekozen` }
],
    },
    afhalen: {
      kop: "Zelf afhalen vanuit West-Vlaanderen",
      alineas: [
        "Een los toestel kunt u op afspraak afhalen bij ons magazijn aan de Boomsesteenweg 12, unit 11 in Aartselaar. **Reserveer vooraf en bekijk de afhaaltarieven.** Neem bij de keuze tussen afhalen en leveren ook het terugbrengen mee. Controleer of het toestel in uw voertuig past en volg de transportinstructies van het gekozen model.",
        "Bij zelf afhalen plaatst u het toestel zelf. Geef daarom vooraf door wat er moet drogen en welke aansluiting u hebt. Voor meerdere ruimtes, moeilijk bereikbare zones of twijfel over de nodige capaciteit kunt u advies vragen over een droogpakket met plaatsing. De afgesproken huurperiode en eventuele opties staan in uw reservatie."
      ],
      feiten: [
        {
          label: "Afhaalpunt",
          waarde: "Boomsesteenweg 12, unit 11, Aartselaar"
        },
        {
          label: "Afhaalmoment",
          waarde: "Op afspraak"
        },
        {
          label: "Vervoer",
          waarde: "Volgens de instructies van het gekozen toestel"
        },
        {
          label: "Liever laten leveren?",
          waarde: "Levering en plaatsing inbegrepen bij uw droogpakket"
        }
      ],
    },
    faq: [
      {
        q: "Hoe regel ik een levering in West-Vlaanderen?",
        a: "Bereken uw droogpakket online of neem contact op met uw adres in West-Vlaanderen, de afmetingen van de ruimte en de gewenste startdatum. Geef ook de verdieping en de beschikbare stroom door. We stemmen het levermoment en de toegang tot de werf met u af."
      },
      {
        q: "Hoeveel bouwdrogers heb ik nodig?",
        a: "Dat hangt af van het volume, de indeling, het materiaal en de hoeveelheid vocht. Eén open verdieping vraagt een andere opstelling dan meerdere afgesloten kamers. Gebruik de calculator voor uw pakket en vraag advies als uw situatie afwijkt, bijvoorbeeld bij een hoge ruimte of verborgen vocht."
      },
      {
        q: "Hoe weet ik wanneer de vloer of muur droog genoeg is?",
        a: "De huurduur alleen geeft daar geen zekerheid over. Laat het restvocht controleren met een methode die bij het materiaal past. Uw vloerlegger of schilder beoordeelt welke vochtwaarde en eventuele aanvullende meting nodig zijn voordat de gekozen afwerking kan worden aangebracht."
      },
      {
        q: "Kan ik een bedrijfsruimte laten drogen tijdens de werken?",
        a: "Bespreek vooraf welke ruimtes in gebruik blijven, de beschikbare stroom en uw planning. We stemmen de plaatsing daarop af. Een grote open ruimte vraagt een andere verdeling dan meerdere afgesloten kamers; alleen de totale vloeroppervlakte is daarom niet voldoende voor het advies."
      },
      {
        q: "Welke stroomvoorziening heb ik nodig?",
        a: "Het aansluitvermogen verschilt per toestel. Controleer de technische fiche en geef door welke aansluiting op uw werf beschikbaar is. Voor de elektrische bouwkachels van 20 en 30 kW is een geschikte 400 V-voeding nodig. Laat bij twijfel de beschikbare capaciteit en beveiliging controleren."
      },
      {
        q: "Kan ik zelf afhalen voor een werf in West-Vlaanderen?",
        a: "Afhalen kan op afspraak bij ons magazijn in Aartselaar, Boomsesteenweg 12, unit 11. Reserveer uw toestel vooraf en controleer of het in uw voertuig past. Volg de transportinstructies voor het gekozen toestel. Bij een droogpakket met levering verzorgen wij de plaatsing en de ophaling."
      }
    ],
    realisaties: {
      kop: "Werven die we in West-Vlaanderen droogden",
      intro: "Bekijk uitgevoerde projecten in deze regio. Bij elk project vindt u de locatie, de uitgevoerde werken en de beschikbare foto’s.",
      slugs: ["pleisterwerk-drogen-oostende", "kelder-drogen-brugge"],
    },
    areaServed: provincie("West-Vlaanderen"),
  },

  /* ------------------------------------------------------------------ */
  {
    ...route("limburg"),
    title: "Bouwdroger huren in Limburg | Bereken uw prijs | Vernast",
    description:
      "Bouwdroger huren in Limburg? Bereken uw droogpakket bij Vernast. Levering, plaatsing en ophaling inbegrepen, met advies voor uw werf.",
    h1: "Bouwdroger huren in Limburg",
    kicker: "Hasselt · Genk · Sint-Truiden · Tongeren · Maasland",
    intro: [
      "Een bouwdroger nodig voor uw nieuwbouw, renovatie of na waterschade in Limburg? Vernast levert en plaatst bouwdrogers op uw werf, van Hasselt en Genk tot Sint-Truiden en het Maasland. **Bij een droogpakket zijn levering, plaatsing en ophaling inbegrepen.** Bereken uw pakket en huurprijs online of bel ons voor advies over de toestellen die u nodig hebt.",
    ],
    bouw: {
      kop: "Bouwdroging voor uw project in Limburg",
      alineas: [
        "Voor uw werf in Limburg kijken we naar de werkelijke afmetingen en indeling. Moeten een gelijkvloers, verdieping en garage tegelijk drogen, geef dan de gegevens van elke ruimte door. Een toestel in de gang bereikt niet vanzelf elke afgesloten kamer. Het aantal bouwdrogers volgt uit het project; er is geen vast pakket dat bij iedere Limburgse woning past.",
        "Nieuwe chape en pleisterwerk brengen vocht in het gebouw. Voor de keuze van een droogpakket zijn vooral het materiaal, de dikte, het volume en de temperatuur van belang. Geef ook door wanneer het materiaal is aangebracht. De droogopstelling en het startmoment moeten passen bij de voorschriften van uw aannemer of materiaalleverancier.",
        "Bij een natte kelder of lekkage begint het werk met de oorzaak: blijft er water binnenkomen, dan is drogen alleen geen blijvende oplossing. Laat eerst het lek of de waterinfiltratie aanpakken en verwijder aanwezig water. Daarna bekijken we welke materialen nat zijn en of het vocht ook onder een vloer of achter een wand zit.",
        "**Ook de temperatuur en de luchtcirculatie tellen mee.** Op een koude werf kan bijverwarming nodig zijn, afhankelijk van de bouwdroger en de omstandigheden. Bespreek de stroomvoorziening voordat u een kachel reserveert. De maximumcapaciteit op een toestelfiche is geen vaste hoeveelheid water die het toestel op elke werf per dag zal afvoeren."
      ]
    },
    beeld: {
      src: "/vernast/case-chape-v2.webp",
      alt: "Verse chape met natte plekken tijdens het drogen in een Limburgse nieuwbouw",
    },
    toestellen: {
      kop: "Welke toestellen passen bij uw werf?",
      items: [
        {
          key: "ttk650",
          waarom: `**Voor grotere volumes en een hoge vochtbelasting.** Bekijk de technische fiche en laat de opstelling afstemmen op de ruimtes die werkelijk gedroogd moeten worden. Vanaf ${dag("ttk650")} per dag.`,
        },
        {
          key: "ttk350",
          waarom: `**Voor grotere ruimtes of meerdere droogzones.** De benodigde capaciteit hangt af van het volume en het natte materiaal. De indeling van uw werf bepaalt waar de toestellen komen te staan. Vanaf ${dag("ttk350")} per dag.`,
        },
        {
          key: "teddh30",
          waarom: `**Voor bijverwarming op een koude werf.** Deze elektrische kachel vraagt een geschikte 400 V-aansluiting. Laat vooraf controleren of de beschikbare voeding past bij het aansluitvermogen. Vanaf ${dag("teddh30")} per dag.`,
        },
        {
          key: "ttv4500",
          waarom: `**Voor luchtcirculatie naast de bouwdroger.** Een ventilator helpt de lucht langs vochtige oppervlakken te bewegen. Hij voert zelf geen vocht uit de ruimte af en vervangt de ontvochtiger niet. Vanaf ${dag("ttv4500")} per dag.`,
        },
      ],
    },
    levering: {
      kop: "Levering en plaatsing in Limburg",
      alineas: [
        "We leveren in Hasselt, Genk, Sint-Truiden, Maaseik en de overige gemeenten van Limburg. **Levering, plaatsing en ophaling zijn inbegrepen bij uw droogpakket.** Geef het volledige werfadres, de gewenste startdatum en een contactpersoon door. Meld bijzonderheden zoals een smalle doorgang, een verdieping zonder vaste trap of een beperkte laadzone voordat we de levering afspreken.",
        "De technieker verdeelt de toestellen over de afgesproken droogzones en legt uit hoe de opstelling gebruikt moet worden. Daarbij bespreken we de condensafvoer en wat u tijdens de huur zelf controleert. Houd de toegang vrij en zorg dat de afgesproken stroomvoorziening beschikbaar is. Verandert er iets aan de werf of komt er opnieuw water binnen, neem dan contact op."
      ],
      feiten: [
{ label: "Levering, plaatsing en ophaling", waarde: "Inbegrepen in het droogpakket" },
{ label: "Levermoment", waarde: "Volgens uw reservatie" },
{ label: "Verdieping zonder vaste trap", waarde: `Vooraf bespreken; laddertoeslag ${euro(LADDER)} per verdieping` },
{ label: "Condenspomp", waarde: `${euro(POMP)} per bouwdroger per dag, indien gekozen` }
],
    },
    afhalen: {
      kop: "Zelf afhalen vanuit Limburg",
      alineas: [
        "Een los toestel kunt u op afspraak afhalen bij ons magazijn aan de Boomsesteenweg 12, unit 11 in Aartselaar. **Reserveer vooraf en bekijk de afhaaltarieven.** Neem bij de keuze tussen afhalen en leveren ook het terugbrengen mee. Controleer of het toestel in uw voertuig past en volg de transportinstructies van het gekozen model.",
        "Bij zelf afhalen plaatst u het toestel zelf. Geef daarom vooraf door wat er moet drogen en welke aansluiting u hebt. Voor meerdere ruimtes, moeilijk bereikbare zones of twijfel over de nodige capaciteit kunt u advies vragen over een droogpakket met plaatsing. De afgesproken huurperiode en eventuele opties staan in uw reservatie."
      ],
      feiten: [
        {
          label: "Afhaalpunt",
          waarde: "Boomsesteenweg 12, unit 11, Aartselaar"
        },
        {
          label: "Afhaalmoment",
          waarde: "Op afspraak"
        },
        {
          label: "Vervoer",
          waarde: "Volgens de instructies van het gekozen toestel"
        },
        {
          label: "Liever laten leveren?",
          waarde: "Levering en plaatsing inbegrepen bij uw droogpakket"
        }
      ],
    },
    faq: [
      {
        q: "Hoe regel ik een levering in Limburg?",
        a: "Bereken uw droogpakket online of neem contact op met uw adres in Limburg, de afmetingen van de ruimte en de gewenste startdatum. Geef ook de verdieping en de beschikbare stroom door. We stemmen het levermoment en de toegang tot de werf met u af."
      },
      {
        q: "Hoeveel bouwdrogers heb ik nodig?",
        a: "Dat hangt af van het volume, de indeling, het materiaal en de hoeveelheid vocht. Eén open verdieping vraagt een andere opstelling dan meerdere afgesloten kamers. Gebruik de calculator voor uw pakket en vraag advies als uw situatie afwijkt, bijvoorbeeld bij een hoge ruimte of verborgen vocht."
      },
      {
        q: "Hoe weet ik wanneer de vloer of muur droog genoeg is?",
        a: "De huurduur alleen geeft daar geen zekerheid over. Laat het restvocht controleren met een methode die bij het materiaal past. Uw vloerlegger of schilder beoordeelt welke vochtwaarde en eventuele aanvullende meting nodig zijn voordat de gekozen afwerking kan worden aangebracht."
      },
      {
        q: "Lost een bouwdroger een blijvend vochtprobleem op?",
        a: "Een bouwdroger helpt vocht af te voeren, maar herstelt geen lekkage, waterinfiltratie of ontbrekende vochtwering. Laat de oorzaak eerst onderzoeken. Blijft er nieuw water binnenkomen, dan kan het materiaal opnieuw nat worden, ook terwijl de droger werkt."
      },
      {
        q: "Welke stroomvoorziening heb ik nodig?",
        a: "Het aansluitvermogen verschilt per toestel. Controleer de technische fiche en geef door welke aansluiting op uw werf beschikbaar is. Voor de elektrische bouwkachels van 20 en 30 kW is een geschikte 400 V-voeding nodig. Laat bij twijfel de beschikbare capaciteit en beveiliging controleren."
      },
      {
        q: "Kan ik zelf afhalen voor een werf in Limburg?",
        a: "Afhalen kan op afspraak bij ons magazijn in Aartselaar, Boomsesteenweg 12, unit 11. Reserveer uw toestel vooraf en controleer of het in uw voertuig past. Volg de transportinstructies voor het gekozen toestel. Bij een droogpakket met levering verzorgen wij de plaatsing en de ophaling."
      }
    ],
    realisaties: {
      kop: "Werven die we in Limburg droogden",
      intro: "Bekijk uitgevoerde projecten in deze regio. Bij elk project vindt u de locatie, de uitgevoerde werken en de beschikbare foto’s.",
      slugs: ["chape-pleisterwerk-drogen-hasselt", "waterschade-drogen-bocholt"],
    },
    areaServed: provincie("Limburg"),
  },
  /* ------------------------------------------------------------------ */
  {
    ...route("waals-brabant"),
    title: "Bouwdroger huren in Waals-Brabant | Vernast",
    description:
      "Bouwdroger huren in Waals-Brabant? Bereken uw droogpakket bij Vernast. Levering, plaatsing en ophaling inbegrepen, met advies voor uw werf.",
    h1: "Bouwdroger huren in Waals-Brabant",
    kicker: "Waals-Brabant · levering in alle 27 gemeenten",
    intro: [
      "Een bouwdroger huren in Waals-Brabant voor nieuwbouw, renovatie of waterschade? Vernast levert en plaatst toestellen op uw werf in Waver, Waterloo, Nijvel en de rest van de provincie. **Uw droogpakket omvat de levering, plaatsing en ophaling van de toestellen.** Bereken uw huurprijs online of neem contact op voor advies over uw project.",
    ],
    bouw: {
      kop: "Bouwdroging voor uw project in Waals-Brabant",
      alineas: [
        "Vernast levert in alle 27 gemeenten van Waals-Brabant. Vermeld bij de aanvraag de postcode en het volledige werfadres, ook wanneer u een andere schrijfwijze van de gemeentenaam gebruikt. Voor een woning met meerdere bouwlagen of een los bijgebouw hebben we per ruimte de afmetingen nodig. Bespreek ook de beschikbare stroom en het gewenste startmoment.",
        "Nieuwe chape en pleisterwerk brengen vocht in het gebouw. Voor de keuze van een droogpakket zijn vooral het materiaal, de dikte, het volume en de temperatuur van belang. Geef ook door wanneer het materiaal is aangebracht. De droogopstelling en het startmoment moeten passen bij de voorschriften van uw aannemer of materiaalleverancier.",
        "Bij een natte kelder of lekkage begint het werk met de oorzaak: blijft er water binnenkomen, dan is drogen alleen geen blijvende oplossing. Laat eerst het lek of de waterinfiltratie aanpakken en verwijder aanwezig water. Daarna bekijken we welke materialen nat zijn en of het vocht ook onder een vloer of achter een wand zit.",
        "**Ook de temperatuur en de luchtcirculatie tellen mee.** Op een koude werf kan bijverwarming nodig zijn, afhankelijk van de bouwdroger en de omstandigheden. Bespreek de stroomvoorziening voordat u een kachel reserveert. De maximumcapaciteit op een toestelfiche is geen vaste hoeveelheid water die het toestel op elke werf per dag zal afvoeren."
      ]
    },
    beeld: {
      src: "/vernast/case-nieuwbouw.webp",
      alt: "Villa in afwerking, met bouwdrogers op het gelijkvloers",
    },
    toestellen: {
      kop: "Welke toestellen passen bij uw werf?",
      items: [
        {
          key: "ttk350",
          waarom: `**Voor grotere ruimtes of meerdere droogzones.** De benodigde capaciteit hangt af van het volume en het natte materiaal. De indeling van uw werf bepaalt waar de toestellen komen te staan. Vanaf ${dag("ttk350")} per dag.`,
        },
        {
          key: "ttk650",
          waarom: `**Voor grotere volumes en een hoge vochtbelasting.** Bekijk de technische fiche en laat de opstelling afstemmen op de ruimtes die werkelijk gedroogd moeten worden. Vanaf ${dag("ttk650")} per dag.`,
        },
        {
          key: "teddh30",
          waarom: `**Voor bijverwarming op een koude werf.** Deze elektrische kachel vraagt een geschikte 400 V-aansluiting. Laat vooraf controleren of de beschikbare voeding past bij het aansluitvermogen. Vanaf ${dag("teddh30")} per dag.`,
        },
        {
          key: "radiaal2250",
          waarom: `**Voor gerichte luchtcirculatie langs een vloer of wand.** De plaatsing hangt af van de te drogen zone. Combineer luchtverplaatsing met voldoende ontvochtigingscapaciteit. Vanaf ${dag("radiaal2250")} per dag.`,
        },
      ],
    },
    levering: {
      kop: "Levering en plaatsing in Waals-Brabant",
      alineas: [
        "We leveren in Waver, Waterloo, Nijvel, Eigenbrakel en de overige gemeenten van Waals-Brabant. **Levering, plaatsing en ophaling zijn inbegrepen bij uw droogpakket.** Geef het volledige werfadres, de gewenste startdatum en een contactpersoon door. Meld bijzonderheden zoals een smalle doorgang, een verdieping zonder vaste trap of een beperkte laadzone voordat we de levering afspreken.",
        "De technieker verdeelt de toestellen over de afgesproken droogzones en legt uit hoe de opstelling gebruikt moet worden. Daarbij bespreken we de condensafvoer en wat u tijdens de huur zelf controleert. Houd de toegang vrij en zorg dat de afgesproken stroomvoorziening beschikbaar is. Verandert er iets aan de werf of komt er opnieuw water binnen, neem dan contact op."
      ],
      feiten: [
{ label: "Levering, plaatsing en ophaling", waarde: "Inbegrepen in het droogpakket" },
{ label: "Levermoment", waarde: "Volgens uw reservatie" },
{ label: "Verdieping zonder vaste trap", waarde: `Vooraf bespreken; laddertoeslag ${euro(LADDER)} per verdieping` },
{ label: "Condenspomp", waarde: `${euro(POMP)} per bouwdroger per dag, indien gekozen` }
],
    },
    afhalen: {
      kop: "Zelf afhalen vanuit Waals-Brabant",
      alineas: [
        "Een los toestel kunt u op afspraak afhalen bij ons magazijn aan de Boomsesteenweg 12, unit 11 in Aartselaar. **Reserveer vooraf en bekijk de afhaaltarieven.** Neem bij de keuze tussen afhalen en leveren ook het terugbrengen mee. Controleer of het toestel in uw voertuig past en volg de transportinstructies van het gekozen model.",
        "Bij zelf afhalen plaatst u het toestel zelf. Geef daarom vooraf door wat er moet drogen en welke aansluiting u hebt. Voor meerdere ruimtes, moeilijk bereikbare zones of twijfel over de nodige capaciteit kunt u advies vragen over een droogpakket met plaatsing. De afgesproken huurperiode en eventuele opties staan in uw reservatie."
      ],
      feiten: [
        {
          label: "Afhaalpunt",
          waarde: "Boomsesteenweg 12, unit 11, Aartselaar"
        },
        {
          label: "Afhaalmoment",
          waarde: "Op afspraak"
        },
        {
          label: "Vervoer",
          waarde: "Volgens de instructies van het gekozen toestel"
        },
        {
          label: "Liever laten leveren?",
          waarde: "Levering en plaatsing inbegrepen bij uw droogpakket"
        }
      ],
    },
    faq: [
      {
        q: "Hoe regel ik een levering in Waals-Brabant?",
        a: "Bereken uw droogpakket online of neem contact op met uw adres in Waals-Brabant, de afmetingen van de ruimte en de gewenste startdatum. Geef ook de verdieping en de beschikbare stroom door. We stemmen het levermoment en de toegang tot de werf met u af."
      },
      {
        q: "Hoeveel bouwdrogers heb ik nodig?",
        a: "Dat hangt af van het volume, de indeling, het materiaal en de hoeveelheid vocht. Eén open verdieping vraagt een andere opstelling dan meerdere afgesloten kamers. Gebruik de calculator voor uw pakket en vraag advies als uw situatie afwijkt, bijvoorbeeld bij een hoge ruimte of verborgen vocht."
      },
      {
        q: "Hoe weet ik wanneer de vloer of muur droog genoeg is?",
        a: "De huurduur alleen geeft daar geen zekerheid over. Laat het restvocht controleren met een methode die bij het materiaal past. Uw vloerlegger of schilder beoordeelt welke vochtwaarde en eventuele aanvullende meting nodig zijn voordat de gekozen afwerking kan worden aangebracht."
      },
      {
        q: "Wanneer mag ik starten met het drogen van verse chape?",
        a: "Dat hangt af van het type chape en de voorschriften van de leverancier. Start geforceerde droging pas wanneer dat is toegestaan. Geef bij uw aanvraag het materiaal, de laagdikte en de plaatsingsdatum door, zodat het advies bij uw vloeropbouw past."
      },
      {
        q: "Welke stroomvoorziening heb ik nodig?",
        a: "Het aansluitvermogen verschilt per toestel. Controleer de technische fiche en geef door welke aansluiting op uw werf beschikbaar is. Voor de elektrische bouwkachels van 20 en 30 kW is een geschikte 400 V-voeding nodig. Laat bij twijfel de beschikbare capaciteit en beveiliging controleren."
      },
      {
        q: "Kan ik zelf afhalen voor een werf in Waals-Brabant?",
        a: "Afhalen kan op afspraak bij ons magazijn in Aartselaar, Boomsesteenweg 12, unit 11. Reserveer uw toestel vooraf en controleer of het in uw voertuig past. Volg de transportinstructies voor het gekozen toestel. Bij een droogpakket met levering verzorgen wij de plaatsing en de ophaling."
      }
    ],
    realisaties: {
      kop: "Werven in de buurt van Waals-Brabant",
      intro: "Bekijk voorbeelden uit het nabijgelegen Brussels Gewest. Bij elk project vindt u de locatie, de uitgevoerde werken en de beschikbare foto’s.",
      slugs: ["woning-drogen-brussel", "badkamer-drogen-brussel", "pleisterwerk-drogen-sint-pieters-woluwe"],
    },
    areaServed: provincie("Waals-Brabant"),
  },
  /* ------------------------------------------------------------------ */
  {
    ...route("henegouwen"),
    /*
      Henegouwen kreeg zijn pagina op 15-11-2026, als tweede Waalse provincie
      na Waals-Brabant en met hetzelfde sjabloon, dezelfde prijs en hetzelfde
      pakket.

      Het verschil met Waals-Brabant is de afstand, en die staat er eerlijk:
      Edingen ligt dichter bij Aartselaar dan Maaseik, de Botte du Hainaut
      rond Chimay is de verste rit die we rijden. Een pagina die doet alsof
      Chimay om de hoek ligt, levert een klant op die teleurgesteld belt.
      Wat de provincie verder eigen maakt: blauwe hardsteen rond Zinnik, de
      mijnwoningen van de Borinage, Doornikse kalksteen, drie rivieren en het
      textielverleden van Moeskroen. Rijtijden zijn afgerond en te
      verifiëren tegen de echte ritgegevens, net als in `gemeenten.ts`.

      Werven heeft de provincie nog niet; de sectie leent de drie Brusselse,
      die op de route naar Henegouwen liggen. Zie `LEENT_VAN`.
    */
    title: "Bouwdroger huren in Henegouwen | Vernast",
    description:
      "Bouwdroger huren in Henegouwen: Charleroi, Bergen, Doornik en Moeskroen. Geleverd, geplaatst en opgehaald vanuit Aartselaar, zonder waarborg.",
    h1: "Bouwdroger huren in Henegouwen",
    kicker: "Hainaut · 69 gemeenten · van Edingen tot Chimay",
    intro: [
      "Een bouwdroger huren in Henegouwen voor een renovatie, een nieuwe chape of een kelder na waterschade? Vernast levert en plaatst de toestellen op uw werf, van Edingen tot Charleroi en van Moeskroen tot Chimay. **Levering, plaatsing en ophaling zitten in uw droogpakket.** Henegouwen is wel de breedste provincie die we bedienen, en dat zeggen we liever vooraf: **Edingen en 's-Gravenbrakel liggen op ongeveer drie kwartier van ons magazijn**, Bergen en Charleroi op een uur tot vijf kwartier, en de Botte du Hainaut rond Chimay is onze verste rit.",
    ],
    heroFacts: [
      "Levering, plaatsing en ophaling inbegrepen",
      "Geen waarborg",
      "Hulp in het Nederlands en het Frans",
    ],
    bouw: {
      kop: "Waarvoor huurt men in Henegouwen een bouwdroger?",
      alineas: [
        "Henegouwen is geen nieuwbouwprovincie maar een renovatieprovincie. Het grootste deel van de woningen is gebouwd vóór de Tweede Wereldoorlog, en wie er vandaag een huis koopt, haalt pleister af, legt een nieuwe vloer en isoleert van binnenuit. **Al die werken brengen water in een huis dat al vocht in de muren had.** Daar komt de vraag naar een bouwdroger vandaan, meer dan van verkavelingen.",
        "**Rond Zinnik, Écaussinnes en Lessen is blauwe hardsteen het bouwmateriaal.** De steen zelf neemt weinig water op, maar de muren erachter zijn vaak dik metselwerk met kalkmortel, en de voegen en de vulling houden het vocht wel vast. Een hoeve of een dorpswoning in natuursteen droogt daarom traag van binnenuit. In het westen, rond Doornik en Antoing, is het de Doornikse kalksteen die het beeld bepaalt, en ook die muren geven hun vocht pas na weken af.",
        "**In de Borinage, rond Bergen, Frameries en Quaregnon, staan rijen mijnwoningen uit de negentiende eeuw.** Ze zijn gebouwd zonder waterkering in de muurvoet, zodat grondvocht ongehinderd in het metselwerk optrekt. Wie zo'n woning renoveert, plaatst vaak eerst een injectie tegen opstijgend vocht en moet de muur daarna nog laten uitdrogen. Een bouwdroger versnelt die tweede stap; de eerste lost hij niet op, en dat zegt de technieker er ook bij.",
        "**Drie rivieren lopen door de provincie**: de Samber door Charleroi en Thuin, de Schelde door Doornik, en de Dender door Aat en Lessen. Bij hoog water lopen kelders en gelijkvloerse ruimtes in die valleien onder. In het westen ligt Moeskroen, met zijn textielverleden: oude weverijen en fabriekshallen die tot lofts of woningen worden verbouwd. Dat zijn grote, hoge ruimtes met betonvloeren en een nieuwe chape, waar een klein toestel weinig uithaalt.",
      ],
    },
    beeld: {
      src: "/vernast/case-renovatie.webp",
      alt: "Renovatie van een oude woning met bouwdrogers tegen de pas gepleisterde muren",
    },
    toestellen: {
      kop: "Welke bouwdroger past bij een werf in Henegouwen?",
      items: [
        {
          key: "ttk350",
          waarom: `**Voor de rijwoning of de dorpswoning in renovatie**: 70 liter per dag en een bereik tot ongeveer 400 m³, genoeg voor een bouwlaag van een gemiddelde Henegouwse woning. Meestal staat er één per verdieping. Vanaf ${dag("ttk350")} per dag.`,
        },
        {
          key: "ttk650",
          waarom: `**Voor de verbouwde fabriekshal of de ondergelopen kelder**: 110 liter per dag, tot ongeveer 600 m³. In een hoge loft in Moeskroen of een kelder in de Samberkant doet dit toestel het werk van twee kleinere. Vanaf ${dag("ttk650")} per dag.`,
        },
        {
          key: "revolution",
          waarom: `**De adsorptiedroger voor koude kelders en dikke muren**. Hij blaast droge lucht via slangen naar de plek waar het vocht zit en blijft werken bij lage temperatuur, waar een condensdroger stilvalt. Liever eerst samen bekijken. Vanaf ${dag("revolution")} per dag.`,
        },
        {
          key: "teddh30",
          waarom: `**De kachel van 30 kW voor een natuurstenen hoeve in de winter.** Dikke muren blijven koud, en zonder warmte in de ruimte rendeert geen enkele condensdroger. Vraagt krachtstroom (400 V) op de werf. Vanaf ${dag("teddh30")} per dag.`,
        },
      ],
    },
    levering: {
      kop: "Leveren in Henegouwen: één provincie, drie afstanden",
      alineas: [
        "Vanuit Aartselaar rijden we over de Brusselse ring naar het zuiden, en daarna splitst de route. **Het noorden van de provincie, met Edingen, Opzullik en 's-Gravenbrakel, halen we in ongeveer drie kwartier.** Bergen en La Louvière over de E19, Charleroi over de A54 via Nijvel: dat is een uur tot vijf kwartier; Doornik en Moeskroen bereiken we via de E17 in ongeveer dezelfde tijd. Voor Thuin, Beaumont en de Botte du Hainaut rekenen we op rond de twee uur, en daar plannen we de rit samen met u in.",
        `Op de werf meet de technieker het vocht in de muren en de vloer, zet de toestellen op de juiste plek en sluit de afvoer aan op een putje, een gootsteen of naar buiten. **De trap op naar de verdieping is inbegrepen**; staat er nog geen trap, dan geldt ${euro(LADDER)} per verdieping via de ladder. Voor de afstand rekenen we niets aan: een werf in Chimay kost hetzelfde pakket als een werf in Edingen.`,
      ],
      feiten: [
        { label: "Levering en installatie", waarde: "Inbegrepen in het droogpakket, geen kilometerkost" },
        { label: "Levertermijn", waarde: "Op afspraak, de leverdag spreken we samen af" },
        { label: "Rijtijd vanuit ons magazijn", waarde: "45 minuten (Edingen) tot rond twee uur (Chimay)" },
        { label: "Taal", waarde: "Nederlands of Frans, naar keuze" },
        { label: "Verdieping via ladder", waarde: `${euro(LADDER)} per verdieping, vooraf melden` },
        { label: "Condenspomp (aangeraden)", waarde: `${euro(POMP)} per bouwdroger per dag` },
      ],
    },
    afhalen: {
      kop: "Afhalen vanuit Henegouwen: haast nooit de moeite",
      alineas: [
        `Ons afhaalpunt ligt in Aartselaar, aan de A12 ten zuiden van Antwerpen. Vanuit Edingen is dat drie kwartier rijden, vanuit Charleroi of Doornik ruim een uur, en dat twee keer: bij het ophalen en bij het terugbrengen. **Omdat de levering al in het pakket zit, wint u daar voor een volledige droging niets mee.** Wie toch één losse droger of ventilator wil halen voor een lange periode, reserveert een vast afhaalmoment op een werkdag tussen 07:30 en 17:00.`,
      ],
      feiten: [
        { label: "Rijtijd naar ons afhaalpunt", waarde: "Drie kwartier (Edingen) tot ruim een uur (Charleroi, Doornik)" },
        { label: "Waarborg", waarde: "Geen" },
        { label: "Vervoer", waarde: "Rechtop; plat vervoerd 24 uur laten staan" },
        { label: "Liever laten leveren?", waarde: "De rit zit al in elke pakketprijs" },
      ],
    },
    faq: [
      {
        q: "Leveren jullie ook in het zuiden van Henegouwen, rond Chimay?",
        a: "Ja, ook in de Botte du Hainaut: Chimay, Momignies, Sivry-Rance en Froidchapelle. Het is wel onze langste rit, rond twee uur vanuit Aartselaar, dus spreken we het tijdstip met u af in plaats van u een willekeurig moment te geven. De prijs verandert niet: levering, plaatsing en ophaling zitten in het droogpakket.",
      },
      {
        q: "Spreken jullie Frans met klanten in Henegouwen?",
        a: "Ja. U kiest zelf of we Nederlands of Frans spreken, aan de telefoon, in de offerte en op de werf. Zoekt u op Mons, Tournai of Mouscron, dan gaat het om Bergen, Doornik en Moeskroen: dezelfde gemeenten, hetzelfde droogpakket en dezelfde technieker die het komt plaatsen.",
      },
      {
        q: "Lost een bouwdroger het vocht in mijn mijnwoning op?",
        a: "Niet alleen. In een woning zonder waterkering in de muurvoet trekt het grondvocht blijvend op, en dat stopt pas met een injectie of een andere vochtwering. Wat een bouwdroger wel doet, is de muur daarna sneller uitdrogen, zodat u eerder kunt pleisteren en schilderen. Zonder die eerste stap droogt hij de lucht, maar komt het vocht terug.",
      },
      {
        q: "Hoe lang droogt een muur in natuursteen of hardsteen?",
        a: "Langer dan een muur in baksteen, omdat het vocht in de kalkmortel en de vulling tussen de stenen zit en maar langzaam naar het oppervlak komt. Reken eerder op weken dan op dagen. De technieker meet bij de start hoe nat de muur is en bij de ophaling hoeveel er nog in zit, zodat u weet of de schilder kan beginnen.",
      },
      {
        q: "Mijn kelder aan de Samber of de Dender liep onder. Wat nu?",
        a: "Laat eerst het staande water wegpompen en haal natte spullen naar buiten. Daarna telt de tijd: na een dag of twee op vochtig materiaal begint schimmel. Bel ons zo vroeg mogelijk, dan kijken we wanneer de rit kan. In een koude kelder werkt een adsorptiedroger beter dan een condensdroger, en die nemen we dan mee.",
      },
      {
        q: "Hoeveel toestellen heb ik nodig voor een verbouwde fabriekshal?",
        a: "Dat hangt af van het volume, niet van de vloeroppervlakte alleen: een loft van vijf meter hoog heeft dubbel zoveel lucht als een gewone woning met dezelfde oppervlakte. Geef in de Calculator de plafondhoogte mee, dan rekent hij het pakket uit op kubieke meter. Voor grote hallen komt het vaak neer op een groot toestel en een ventilator.",
      },
    ],
    realisaties: {
      kop: "Werven in de buurt van Henegouwen",
      intro: "In Henegouwen zelf hebben we nog geen werf gefotografeerd. Deze drie liggen in Brussel, op de route van ons magazijn naar Edingen en 's-Gravenbrakel.",
      slugs: ["woning-drogen-brussel", "badkamer-drogen-brussel", "pleisterwerk-drogen-sint-pieters-woluwe"],
    },
    areaServed: provincie("Henegouwen"),
  },
  /* ------------------------------------------------------------------ */
  {
    ...route("namen"),
    /*
      De provincie Namen kreeg haar pagina op 15-11-2026, als derde Waalse
      provincie na Waals-Brabant en Henegouwen, met hetzelfde sjabloon,
      dezelfde prijs en hetzelfde pakket.

      Titel en H1 zeggen "de provincie Namen" en niet "Namen", omdat de stad
      een eigen pagina heeft (/bouwdroger-huren-namen-stad). Twee pagina's op
      dezelfde zoekintentie vechten om dezelfde plek; zie de uitleg bij de
      provinciepagina van Antwerpen in src/test/regios.test.ts. De tekst
      noemt het onderscheid, maar linkt er niet naar.

      Wat de provincie eigen maakt: Samber en Maas die in Namen samenkomen,
      de Maasvallei met haar kalkrotsen, de natuurstenen hoeves van de
      Condroz, tweede verblijven in de Famenne en de Ardennen, en het
      leemplateau van de Hesbaye in het noorden. De afstand staat er eerlijk:
      Gembloers ligt op een uur, Vresse-sur-Semois is met Chimay onze verste
      rit. Rijtijden zijn afgerond en te verifiëren tegen de echte
      ritgegevens, net als in `gemeenten.ts`.

      Werven heeft de provincie nog niet; de sectie leent de drie Brusselse.
      Zie `LEENT_VAN`.
    */
    title: "Bouwdroger huren in de provincie Namen | Vernast",
    description:
      "Bouwdroger huren in de provincie Namen: Gembloers, Andenne, Dinant en Ciney. Geleverd, geplaatst en opgehaald vanuit Aartselaar, zonder waarborg.",
    h1: "Bouwdroger huren in de provincie Namen",
    kicker: "Province de Namur · 38 gemeenten · van de Hesbaye tot de Semois",
    intro: [
      "Een bouwdroger huren in de provincie Namen, voor een hoeve in renovatie, een nieuwe chape of een kelder die bij hoog water volliep? Vernast brengt de toestellen tot op uw werf, van Éghezée tot Couvin en van Gembloers tot Vresse-sur-Semois. **Leveren, opstellen en weer ophalen zitten in uw droogpakket.** Over de afstand zijn we liever eerlijk: **Gembloers en Éghezée halen we in ongeveer een uur over de E411**, de stad Namen in iets meer, Dinant en Philippeville in anderhalf uur of langer, en Couvin en Vresse-sur-Semois horen bij de verste ritten die we rijden. Deze pagina gaat over de hele provincie; voor de stad Namen zelf, met Jambes en de wijken aan de oever, bestaat een aparte pagina.",
    ],
    heroFacts: [
      "Levering, plaatsing en ophaling inbegrepen",
      "Geen waarborg",
      "Hulp in het Nederlands en het Frans",
    ],
    bouw: {
      kop: "Waarvoor huurt men in de provincie Namen een bouwdroger?",
      alineas: [
        "**In Namen vloeit de Samber in de Maas**, en langs beide rivieren ligt het dichtste deel van de provincie: Sambreville, Jemeppe-sur-Sambre en Floreffe aan de Samber, Andenne en Profondeville aan de Maas. Het zijn oude industrie- en rivierdorpen met rijwoningen die vaak een gewelfde kelder hebben, half onder het peil van de oever. Bij een hoge waterstand of een zware onweersbui staat daar water in, en dan telt elke dag die u wacht met drogen.",
        "**Stroomopwaarts, tussen Yvoir en Hastière, snijdt de Maas door kalkrotsen.** Dinant ligt geprangd tussen de rotswand en de rivier, en veel huizen in de vallei staan met hun achtergevel tegen de helling. Water uit de rots zoekt zijn weg naar binnen langs de muur aan de bergkant, zodat die achtermuur en de kelder eronder vaak nat blijven terwijl de voorgevel droog is. Een droger die gericht bij die muur staat, haalt er meer uit dan een toestel in het midden van de kamer.",
        "**Op het plateau van de Condroz**, rond Ciney, Havelange en Hamois, staan hoeves en dorpswoningen in kalksteen en zandsteen, met muren van een halve meter dik. Wie zo'n gebouw tot woning verbouwt, giet nieuwe vloeren en pleistert binnenmuren die al jaren onverwarmd stonden. Dat vocht komt maar traag naar buiten. **Verder naar het zuiden, in de Famenne rond Rochefort en in de Ardennen rond Gedinne en Bièvre, zijn het vaak tweede verblijven**: huizen die een winter leeg stonden en bij de eerste lentedag muf en vochtig blijken.",
        "In het noorden ligt **de Hesbaye, het Waalse deel van Haspengouw**: een leemplateau met grote akkers rond Éghezée, Fernelmont en Gembloers. Daar wordt wel nieuw gebouwd, op verkavelingen aan de rand van de dorpen, en daar gaat het om de klassieke droging van een nieuwbouw. Pleisterwerk en chape brengen samen honderden liters water in een woning, en dat moet eruit voor de parketlegger komt.",
      ],
    },
    beeld: {
      src: "/vernast/case-kelder.webp",
      alt: "Kelder van een oude woning met een bouwdroger tegen de natte muur",
    },
    toestellen: {
      kop: "Welke bouwdroger past bij een werf in de provincie Namen?",
      items: [
        {
          key: "ttk350",
          waarom: `**Voor de nieuwbouw in de Hesbaye of een verdieping in een rivierdorp**: 70 liter per dag en een bereik tot ongeveer 400 m³. Op een gewone woning zetten we er een per bouwlaag. Vanaf ${dag("ttk350")} per dag.`,
        },
        {
          key: "ttk650",
          waarom: `**Voor een verbouwde schuur in de Condroz of een kelder die volliep**: 110 liter per dag, tot ongeveer 600 m³. Eén groot toestel waar anders twee kleinere de ruimte zouden delen. Vanaf ${dag("ttk650")} per dag.`,
        },
        {
          key: "revolution",
          waarom: `**De adsorptiedroger voor de koude kelder in de Maasvallei of het tweede verblijf in de Ardennen.** Hij werkt ook bij lage temperatuur en blaast de droge lucht via een slang tot tegen de natte muur. We bekijken de opstelling liefst eerst met u. Vanaf ${dag("revolution")} per dag.`,
        },
        {
          key: "teddh30",
          waarom: `**De elektrische kachel van 30 kW voor een natuurstenen hoeve die in de winter verbouwd wordt.** Pas als de ruimte warm genoeg is, haalt een condensdroger zijn volle vermogen. Vraagt krachtstroom (400 V) op de werf. Vanaf ${dag("teddh30")} per dag.`,
        },
      ],
    },
    levering: {
      kop: "Leveren in de provincie Namen: over de E411, met een afgesproken uur",
      alineas: [
        "Vanuit Aartselaar rijden we over de Brusselse ring en dan de E411 af naar het zuidoosten. **Gembloers, Éghezée en Sombreffe liggen op ongeveer een uur, de stad Namen op vijf kwartier.** Voor de Maasvallei richting Dinant en voor het zuiden rond Philippeville en Florennes rekenen we anderhalf uur of meer. Couvin, Viroinval, Gedinne en Vresse-sur-Semois liggen op rond twee uur of iets langer, en daar leggen we het uur van levering samen met u vast.",
        `De technieker meet bij aankomst hoe nat de muren en de vloer zijn, plaatst de toestellen waar het vocht zit en legt de afvoer naar een putje, een gootsteen of naar buiten. **Naar boven via de trap is inbegrepen**; ligt de trap er nog niet, dan rekenen we ${euro(LADDER)} per verdieping via de ladder. Kilometers rekenen we niet aan: een werf in Vresse-sur-Semois kost hetzelfde droogpakket als een werf in Gembloers.`,
      ],
      feiten: [
        { label: "Levering en installatie", waarde: "Inbegrepen in het droogpakket, geen kilometerkost" },
        { label: "Levertermijn", waarde: "Op afspraak, de leverdag spreken we samen af" },
        { label: "Rijtijd vanuit ons magazijn", waarde: "Rond een uur (Gembloers, Éghezée) tot ruim twee uur (Vresse-sur-Semois)" },
        { label: "Taal", waarde: "Nederlands of Frans, naar keuze" },
        { label: "Verdieping via ladder", waarde: `${euro(LADDER)} per verdieping, vooraf melden` },
        { label: "Condenspomp (aangeraden)", waarde: `${euro(POMP)} per bouwdroger per dag` },
      ],
    },
    afhalen: {
      kop: "Afhalen vanuit de provincie Namen: zelden een goed idee",
      alineas: [
        `Ons afhaalpunt ligt in Aartselaar, aan de A12 net onder Antwerpen. Vanuit Gembloers is dat een uur rijden, vanuit Dinant of Ciney al snel het dubbele, en die rit maakt u twee keer. **Bij een volledig droogpakket bespaart u daarmee niets, want de levering zit al in de prijs.** Heeft u maar één droger of ventilator nodig voor een lange periode en komt u toch in de buurt van Antwerpen, dan reserveert u een vast afhaalmoment op een werkdag tussen 07:30 en 17:00.`,
      ],
      feiten: [
        { label: "Rijtijd naar ons afhaalpunt", waarde: "Een uur (Gembloers) tot ruim twee uur (het zuiden)" },
        { label: "Waarborg", waarde: "Geen" },
        { label: "Vervoer", waarde: "Rechtop; plat vervoerd 24 uur laten staan" },
        { label: "Liever laten leveren?", waarde: "De rit zit al in elke pakketprijs" },
      ],
    },
    faq: [
      {
        q: "Is deze pagina voor de stad Namen of voor de provincie?",
        a: "Voor de provincie: alle 38 gemeenten, van Éghezée in het noorden tot Vresse-sur-Semois in het zuiden. Voor de stad Namen zelf, met Jambes, Salzinnes en de andere deelgemeenten, staat er een aparte pagina. Het droogpakket en de prijs zijn op beide pagina's dezelfde; alleen de uitleg over de streek verschilt.",
      },
      {
        q: "Komen jullie ook tot in Couvin of Vresse-sur-Semois?",
        a: "Ja, al is het met ruim twee uur rijden vanuit Aartselaar een van onze langste ritten. Daarom spreken we het uur van levering met u af, in plaats van u een venster van een halve dag te geven. De prijs blijft gelijk: levering, plaatsing en ophaling zitten in het droogpakket, zonder toeslag voor de kilometers.",
      },
      {
        q: "Kunnen we met jullie in het Frans afspreken?",
        a: "Ja. U kiest zelf of we in het Nederlands of het Frans praten, aan de telefoon, in de offerte en bij de plaatsing op de werf. Zoekt u op Namur, Gembloux of Dinant, dan vindt u hier dezelfde gemeenten en hetzelfde pakket, alleen met hun Nederlandse naam waar die bestaat.",
      },
      {
        q: "Mijn huis staat tegen de rots in de Maasvallei. Helpt een droger tegen de natte achtermuur?",
        a: "Hij haalt het vocht uit de lucht en uit de muur, zodat u kunt pleisteren of schilderen. Komt er blijvend water uit de helling achter het huis, dan lost een droger dat niet op: dan is drainage of een waterdichting nodig, en daarna kan de muur uitdrogen. De technieker meet bij de start waar het vocht zit en zegt eerlijk wat de droger kan.",
      },
      {
        q: "Ons tweede verblijf in de Ardennen is muf na de winter. Wat raden jullie aan?",
        a: "Meestal is dat geen waterschade maar condens: een koud huis dat maanden dicht stond. Een adsorptiedroger werkt dan beter dan een condensdroger, omdat hij ook bij lage temperatuur vocht blijft opnemen. Laat in de tussentijd zo veel mogelijk verwarmen en verluchten, en kijk achter kasten en in de hoeken of er al schimmel zit.",
      },
      {
        q: "Hoe lang duurt het drogen van een verbouwde hoeve in de Condroz?",
        a: "Langer dan een nieuwbouw, omdat de dikke natuurstenen muren hun vocht pas na weken loslaten en de nieuwe chape er nog bovenop komt. Reken op enkele weken met een droger per bouwlaag, en in de winter met een kachel erbij. Bij de ophaling meet de technieker opnieuw, zodat u weet of de vloerder of de schilder kan starten.",
      },
    ],
    realisaties: {
      kop: "Werven in de buurt van Namen",
      intro: "In de provincie Namen hebben we tot nu toe geen werf gefotografeerd. Deze drie liggen in Brussel, waar onze rit naar Gembloers en Namen langs passeert.",
      slugs: ["woning-drogen-brussel", "badkamer-drogen-brussel", "pleisterwerk-drogen-sint-pieters-woluwe"],
    },
    areaServed: provincie("Namen"),
  },
  /* ------------------------------------------------------------------ */
  {
    ...route("luxemburg"),
    /*
      De provincie Luxemburg kreeg haar pagina op 15-11-2026, na Waals-Brabant,
      Henegouwen en Namen, met hetzelfde sjabloon, dezelfde prijs en hetzelfde
      pakket.

      Twee dingen maken deze pagina anders. Ten eerste de naam: wie
      "bouwdroger Luxemburg" zoekt, kan ook het Groothertogdom bedoelen, en
      daar leveren we niet. Titel, kicker, intro en een vraag zeggen daarom
      uitdrukkelijk dat het om de Belgische provincie gaat. Ten tweede de
      afstand: Aarlen en Virton zijn de verste ritten die we rijden, en dat
      staat er zonder omweg, om dezelfde reden als bij Chimay in Henegouwen.
      Wat de provincie verder eigen maakt: de Famenne, het koude plateau rond
      Bastenaken, leisteen rond Bertrix en Herbeumont, de Ourthe en de Semois,
      de Lotharingse huizen van de Gaume, de grensarbeiders rond Aarlen en de
      vele tweede verblijven. Rijtijden zijn afgerond en te verifiëren tegen
      de echte ritgegevens, net als in `gemeenten.ts`.

      Werven heeft de provincie nog niet; de sectie leent de drie Brusselse,
      die op de rit naar het zuiden liggen. Zie `LEENT_VAN`.
    */
    title: "Bouwdroger huren in de provincie Luxemburg | Vernast",
    description:
      "Bouwdroger huren in de Belgische provincie Luxemburg: Aarlen, Bastenaken, Marche en Libramont. Geleverd, geplaatst en opgehaald, zonder waarborg.",
    h1: "Bouwdroger huren in de provincie Luxemburg",
    kicker: "Province de Luxembourg (België) · 43 gemeenten · onze verste ritten",
    intro: [
      "Een bouwdroger huren in de Belgische provincie Luxemburg, voor een ruwbouw op het Ardense plateau, een verbouwde hoeve of een vakantiewoning die na de winter vochtig is? Vernast brengt de toestellen tot op uw werf, van Durbuy tot Virton en van Gouvy tot Bouillon. **Het droogpakket omvat de levering, de plaatsing en de ophaling.** Het gaat hier om de Belgische provincie, niet om het Groothertogdom: daar leveren we niet. En over de afstand zeggen we het liever meteen: **Durbuy en Marche-en-Famenne liggen op anderhalf à twee uur van ons magazijn**, Bastenaken en Libramont op rond twee uur, en **Aarlen en Virton op tweeënhalf à drie uur. Dat zijn de verste ritten die we rijden.**",
    ],
    heroFacts: [
      "Levering, plaatsing en ophaling inbegrepen",
      "Geen waarborg",
      "Hulp in het Nederlands en het Frans",
    ],
    bouw: {
      kop: "Waarvoor huurt men in de provincie Luxemburg een bouwdroger?",
      alineas: [
        "Het is de grootste provincie van het land en de minst dicht bevolkte, en dat bepaalt de werven. **Het zijn zelden rijen nieuwbouw, veel vaker losse huizen**: een hoeve die een woning wordt, een vakantiehuis dat grondig wordt aangepakt, een nieuwe woning op een kavel aan de rand van een dorp. Elke werf is anders, en de afstand tussen twee werven is groot. Daarom stellen we het pakket liefst vooraf samen met u op, zodat de technieker niet voor een tweede rit moet terugkomen.",
        "**In de Famenne, rond Marche, Hotton en Durbuy, ligt een lage strook tussen de Condroz en de Ardennen.** De ondergrond is schist met kalk aan de randen, en de oude hoeves zijn gebouwd in de steen die er gewonnen werd. Waar de Ourthe door Hotton, Durbuy en La Roche-en-Ardenne loopt, staan huizen dicht bij het water, en bij hoog water lopen kelders en garages er onder. Na zo'n overstroming zit het vocht diep in het metselwerk, en een droging duurt er weken.",
        "**Op het hoge plateau, rond Bastenaken, Libramont, Vielsalm en Houffalize, ligt de grond op vierhonderd tot zeshonderd meter.** De winters zijn er kouder en langer dan in de rest van het land, met meer vorstdagen en vaker sneeuw. Een ruwbouw zonder verwarming blijft daar van november tot maart koud en nat: de chape droogt nauwelijks, het pleisterwerk evenmin. **Op zo'n werf hoort een bouwkachel naast de droger**, want onder vijftien graden haalt een condensdroger maar een klein deel van zijn vermogen.",
        "**Rond Bertrix, Herbeumont en Bouillon is het land van leisteen en bos.** Daken en vaak ook gevels zijn in leisteen, de huizen staan op hellingen, en de Semois kronkelt van Florenville en Chiny langs Herbeumont naar Bouillon. Huizen in het dal krijgen er grondwater en dauw, huizen op de helling water dat langs de achtermuur naar beneden komt. Veel van die woningen zijn tweede verblijven die een seizoen dicht stonden, en dan is het vocht vaak condens in een koud huis, geen lek.",
        "**Helemaal in het zuiden ligt de Gaume, rond Virton, Rouvroy en Meix-devant-Virton**, met de lange Lotharingse huizen: woning, stal en schuur onder één doorlopend dak, met de nok evenwijdig aan de straat. Wie zo'n huis verbouwt, maakt van de schuur een leefruimte met een nieuwe vloer en nieuw pleisterwerk tegen oude, dikke muren. Rond Aarlen, Messancy, Aubange en Attert wordt dan weer veel nieuw gebouwd door gezinnen die over de grens in het Groothertogdom werken. **Daar gaat het om de klassieke nieuwbouwdroging**, met een strakke planning voor de vloerder.",
      ],
    },
    beeld: {
      src: "/vernast/case-nieuwbouw.webp",
      alt: "Woning in afwerking in de Ardennen, met bouwdrogers op het gelijkvloers",
    },
    toestellen: {
      kop: "Welke bouwdroger past bij een werf in de provincie Luxemburg?",
      items: [
        {
          key: "ttk350",
          waarom: `**Voor een nieuwbouw rond Aarlen of één bouwlaag van een verbouwde hoeve**: 70 liter per dag en een bereik tot ongeveer 400 m³. Op een gewone woning plaatsen we er een per verdieping. Vanaf ${dag("ttk350")} per dag.`,
        },
        {
          key: "teddh30",
          waarom: `**De bouwkachel van 30 kW voor de winterwerf op het Ardense plateau.** Zonder warmte blijft een ruwbouw in Bastenaken of Libramont te koud om te drogen; met deze kachel erbij komt de droger op toeren. Vraagt krachtstroom (400 V) op de werf. Vanaf ${dag("teddh30")} per dag.`,
        },
        {
          key: "revolution",
          waarom: `**De adsorptiedroger voor het vakantiehuis dat een winter dicht stond** of een koude kelder aan de Ourthe of de Semois. Hij blijft vocht opnemen bij lage temperatuur en stuurt de droge lucht via slangen naar de natte plek. Die opstelling bespreken we liefst eerst met u. Vanaf ${dag("revolution")} per dag.`,
        },
        {
          key: "ttk650",
          waarom: `**Voor de schuur van een Lotharingse hoeve die tot leefruimte wordt verbouwd**: 110 liter per dag, tot ongeveer 600 m³. In een hoge, open ruimte doet één groot toestel meer dan twee kleine. Vanaf ${dag("ttk650")} per dag.`,
        },
      ],
    },
    levering: {
      kop: "Leveren in de provincie Luxemburg: de langste rit, goed gepland",
      alineas: [
        "Vanuit Aartselaar gaat het over de Brusselse ring en de E411 langs Namen naar het zuidoosten. **De Famenne, met Marche, Hotton en Durbuy, halen we in anderhalf à twee uur.** Bastenaken, Libramont, Neufchâteau en Saint-Hubert liggen op rond twee uur. Voor Aarlen, Virton, Florenville en de rest van het zuiden rekenen we tweeënhalf à drie uur. Omdat elke rit zo lang is, combineren we werven in de provincie waar het kan en spreken we het uur van levering vooraf met u af.",
        `Ter plaatse meet de technieker het vocht in vloer en muren, zet de toestellen waar het nodig is en legt de afvoer naar een putje, een gootsteen of naar buiten. **Naar de verdieping via de trap zit in de prijs**; moet het via een ladder omdat de trap er nog niet ligt, dan geldt ${euro(LADDER)} per verdieping. Voor de kilometers betaalt u niets extra: een werf in Virton kost hetzelfde droogpakket als een werf in Durbuy.`,
      ],
      feiten: [
        { label: "Levering en installatie", waarde: "Inbegrepen in het droogpakket, geen kilometerkost" },
        { label: "Levertermijn", waarde: "Op afspraak, de leverdag spreken we samen af" },
        { label: "Rijtijd vanuit ons magazijn", waarde: "Anderhalf uur (Durbuy) tot rond drie uur (Virton)" },
        { label: "Taal", waarde: "Nederlands of Frans, naar keuze" },
        { label: "Verdieping via ladder", waarde: `${euro(LADDER)} per verdieping, vooraf melden` },
        { label: "Condenspomp (aangeraden)", waarde: `${euro(POMP)} per bouwdroger per dag` },
      ],
    },
    afhalen: {
      kop: "Afhalen vanuit de provincie Luxemburg: reken het eerst uit",
      alineas: [
        `Wie zelf wil afhalen, rijdt naar ons magazijn in Aartselaar, aan de A12 onder Antwerpen. Vanuit Marche is dat ongeveer twee uur rijden, vanuit Aarlen of Virton bijna drie, en dat twee keer: bij het ophalen en bij het terugbrengen. **Voor een droogpakket is dat een verloren dag, want de levering is al inbegrepen.** Alleen wie toch in de buurt van Antwerpen moet zijn en één losse droger lang nodig heeft, reserveert een vast afhaalmoment op een werkdag tussen 07:30 en 17:00.`,
      ],
      feiten: [
        { label: "Rijtijd naar ons afhaalpunt", waarde: "Rond twee uur (Marche) tot bijna drie uur (Aarlen, Virton)" },
        { label: "Waarborg", waarde: "Geen" },
        { label: "Vervoer", waarde: "Rechtop; plat vervoerd 24 uur laten staan" },
        { label: "Liever laten leveren?", waarde: "De rit zit al in elke pakketprijs" },
      ],
    },
    faq: [
      {
        q: "Leveren jullie ook in het Groothertogdom Luxemburg?",
        a: "Nee. Deze pagina gaat over de Belgische provincie Luxemburg, met Aarlen, Bastenaken, Marche-en-Famenne en Virton, en daar leveren we in alle 43 gemeenten. Over de grens, in Luxemburg-Stad, Esch-sur-Alzette of elders in het Groothertogdom, plaatsen we geen toestellen. Woont u in België en werkt u daar, dan bent u bij ons wel aan het juiste adres.",
      },
      {
        q: "Komen jullie echt tot in Aarlen of Virton?",
        a: "Ja, al is het met tweeënhalf à drie uur rijden vanuit Aartselaar onze langste rit. Daarom bundelen we de werven in het zuiden waar het kan en spreken we een vast uur af in plaats van een venster van een halve dag. De prijs blijft dezelfde: levering, plaatsing en ophaling zitten in het pakket, zonder toeslag voor de afstand.",
      },
      {
        q: "Kan ik in het Frans met jullie afspreken?",
        a: "Ja. Aan de telefoon, in de offerte en bij de plaatsing kiest u zelf tussen Nederlands en Frans. Zoekt u op Arlon, Bastogne of Neufchâteau, dan vindt u hier dezelfde gemeenten onder hun Nederlandse naam waar die bestaat: Aarlen en Bastenaken. Pakket en prijs zijn gelijk.",
      },
      {
        q: "Droogt een ruwbouw in de Ardennen in de winter wel?",
        a: "Met een droger alleen gaat het traag, omdat de lucht in een koude ruwbouw weinig vocht opneemt en de chape haar water amper afgeeft. Met een bouwkachel erbij wordt de ruimte warm genoeg om de droger op volle kracht te laten werken. Die kachel vraagt wel krachtstroom; heeft de werf alleen een gewoon stopcontact, zeg het ons dan vooraf.",
      },
      {
        q: "Ons vakantiehuis aan de Semois is vochtig na de winter. Is dat waterschade?",
        a: "Meestal niet. Een huis dat maanden koud en gesloten stond, krijgt condens op muren en ramen, en dan ruikt het muf zonder dat er ergens een lek is. Een adsorptiedroger haalt dat vocht er ook bij lage temperatuur uit. Kijk wel achter kasten en in de hoeken naar schimmel, en laat het huis daarna geregeld verluchten en verwarmen.",
      },
      {
        q: "Hoe lang duurt het drogen van een verbouwde Lotharingse hoeve?",
        a: "Langer dan een nieuwbouw. De oude muren zijn dik en houden veel vocht vast, en er komen een nieuwe chape en nieuw pleisterwerk bovenop. Reken op enkele weken, met een droger per bouwlaag en in de koude maanden een kachel erbij. De technieker meet bij de start en bij de ophaling, zodat u weet wanneer de vloerder kan beginnen.",
      },
    ],
    realisaties: {
      kop: "Werven in de buurt van de provincie Luxemburg",
      intro: "In de provincie Luxemburg zelf hebben we nog geen werf gefotografeerd. Deze drie liggen in Brussel, aan het begin van onze rit langs de E411 naar het zuiden.",
      slugs: ["woning-drogen-brussel", "badkamer-drogen-brussel", "pleisterwerk-drogen-sint-pieters-woluwe"],
    },
    areaServed: provincie("Luxemburg"),
  },
  /* ------------------------------------------------------------------ */
  {
    ...route("luik"),
    /*
      De provincie Luik kreeg haar pagina op 15-11-2026, als laatste van de
      vijf Waalse provincies, met hetzelfde sjabloon, dezelfde prijs en
      hetzelfde pakket.

      Titel en H1 zeggen "de provincie Luik" en niet "Luik", omdat de stad een
      eigen pagina heeft (/bouwdroger-huren-luik-stad). Twee pagina's op
      dezelfde zoekintentie vechten om dezelfde plek; zie de uitleg bij de
      provinciepagina van Antwerpen in src/test/regios.test.ts. De tekst noemt
      het onderscheid, maar linkt er niet naar, net als bij Namen.

      Wat de provincie eigen maakt: Waals Haspengouw rond Hannuit en Borgworm,
      de Maasvallei met haar staal- en steenkoolverleden (Seraing, Flémalle,
      Herstal), de herenhuizen met souterrain in de stad, de Vesdre die in juli
      2021 buiten haar oevers trad, het Land van Herve, de Hoge Venen en de
      Duitstalige Gemeenschap. Die laatste staat er zonder belofte in het
      Duits: de pagina is Nederlandstalig en we spreken Nederlands of Frans.
      De afstand staat er eerlijk: Hannuit ligt op een uur, de Oostkantons
      rond Sankt Vith op ruim twee. Rijtijden zijn afgerond en te verifiëren
      tegen de echte ritgegevens, net als in `gemeenten.ts`.

      Werven heeft de provincie nog niet; de sectie leent de twee Limburgse,
      omdat Limburg aan Luik grenst en Hasselt op de E313 naar Luik ligt.
      Zie `LEENT_VAN`.
    */
    title: "Bouwdroger huren in de provincie Luik | Vernast",
    description:
      "Bouwdroger huren in de provincie Luik: Hoei, Verviers, Seraing, Spa en de Oostkantons. Geleverd, geplaatst en opgehaald vanuit Aartselaar, zonder waarborg.",
    h1: "Bouwdroger huren in de provincie Luik",
    kicker: "Province de Liège · 84 gemeenten · van Hannuit tot de Oostkantons",
    intro: [
      "Een bouwdroger huren in de provincie Luik, voor een herenhuis in renovatie, een verse chape in Haspengouw of een gelijkvloers dat na hoog water nog nat is? Vernast zet de toestellen op uw werf, van Hannuit tot Eupen en van Wezet tot Sankt Vith. **Levering, plaatsing en ophaling horen bij uw droogpakket.** De afstand verzwijgen we niet: **Hannuit en Borgworm liggen op ongeveer een uur over de E40**, de stad Luik op vijf kwartier, Verviers en Spa op anderhalf uur, en de Oostkantons rond Sankt Vith op ruim twee uur. Deze pagina gaat over de hele provincie; de stad Luik heeft haar eigen pagina, met de wijken en de deelgemeenten binnen de stadsgrens.",
    ],
    heroFacts: [
      "Levering, plaatsing en ophaling inbegrepen",
      "Geen waarborg",
      "Hulp in het Nederlands en het Frans",
    ],
    bouw: {
      kop: "Waarvoor huurt men in de provincie Luik een bouwdroger?",
      alineas: [
        "**Het westen van de provincie is Waals Haspengouw**, rond Hannuit, Borgworm, Braives en Geer: een vlak leemplateau met suikerbieten, graan en grote vierkantshoeven rond een gesloten erf. Wie zo'n hoeve opdeelt in woningen of de stallen tot leefruimte verbouwt, giet nieuwe vloeren over een groot oppervlak. Aan de rand van de dorpen komen er ook verkavelingen bij, en daar is het de gewone nieuwbouwdroging: pleisterwerk en chape die samen honderden liters water in huis brengen.",
        "**Langs de Maas, van Hoei over Seraing en Flémalle tot Herstal, ligt het oude hart van de Waalse zware industrie.** Hoogovens, walserijen en steenkoolmijnen bepaalden hier anderhalve eeuw lang het beeld, en tussen de fabrieken bouwde men rijen arbeiderswoningen tegen de hellingen. Veel van die huizen worden nu gerenoveerd. Ze hebben dunne gevels, kelders onder het straatpeil en muren die jaren onverwarmd stonden, en na het uitbreken van oude bepleistering blijkt het metselwerk vaak natter dan verwacht.",
        "**In de stad Luik zelf staan herenhuizen uit de negentiende eeuw met een souterrain**: een half ondergrondse verdieping waar vroeger de keuken en de bergingen lagen. Wie dat souterrain tot leefruimte of praktijkruimte maakt, werkt tegen muren die aan de straatkant in de grond staan. Die muren drogen traag, en een nieuwe vloer erbovenop houdt het vocht nog langer vast. Een droger in zo'n ruimte doet het meeste werk in de eerste twee weken.",
        "**In juli 2021 trad de Vesdre buiten haar oevers**, en in Pepinster, Verviers, Trooz, Chaudfontaine en Limburg stonden huizen tot op de eerste verdieping onder water. Veel woningen in die vallei zijn sindsdien gestript en opnieuw opgebouwd, en sommige zijn dat nog. Wie er vandaag pleistert of een nieuwe vloer legt, droogt een huis dat ooit doorweekt was; daar is het belangrijk eerst te meten hoeveel vocht er nog in de muurvoet zit.",
        "**Ten oosten van Luik ligt het Land van Herve**: glooiende weiden met hagen, boomgaarden en verspreide hoeves in baksteen en kalksteen, rond Herve, Aubel en Thimister-Clermont. Daarachter stijgt de grond naar **de Hoge Venen**, het hoogste en natste stuk van België, rond Jalhay, Weismes en Bütgenbach. Een ruwbouw op die hoogte blijft in de winter maandenlang koud. **In de Oostkantons, van Eupen en Kelmis tot Sankt Vith en Burg-Reuland, ligt de Duitstalige Gemeenschap**; ook daar leveren we, met afspraken in het Nederlands of het Frans.",
      ],
    },
    beeld: {
      src: "/vernast/case-waterschade.webp",
      alt: "Gelijkvloers na waterschade, met bouwdrogers tegen de gestripte muren",
    },
    toestellen: {
      kop: "Welke bouwdroger past bij een werf in de provincie Luik?",
      items: [
        {
          key: "ttk350",
          waarom: `**Voor een arbeiderswoning in de Maasvallei of een nieuwbouw in Haspengouw**: 70 liter per dag en een bereik tot ongeveer 400 m³. Op een woning van gemiddelde grootte staat er een op elke bouwlaag. Vanaf ${dag("ttk350")} per dag.`,
        },
        {
          key: "ttk650",
          waarom: `**Voor het gelijkvloers in de Vesdrevallei of de stallen van een vierkantshoeve**: 110 liter per dag, tot ongeveer 600 m³. Waar veel water in korte tijd weg moet, vervangt dit toestel er twee kleinere. Vanaf ${dag("ttk650")} per dag.`,
        },
        {
          key: "revolution",
          waarom: `**De adsorptiedroger voor het Luikse souterrain of een kelder onder het straatpeil.** Hij blijft vocht opnemen in een koude ruimte en brengt de droge lucht via slangen tot tegen de natte muur. Die opstelling overlopen we graag eerst met u. Vanaf ${dag("revolution")} per dag.`,
        },
        {
          key: "teddh30",
          waarom: `**De bouwkachel van 30 kW voor de winterwerf in de Hoge Venen of de Oostkantons.** Een onverwarmde ruwbouw op die hoogte is te koud voor een condensdroger; met de kachel erbij komt hij op gang. Vraagt krachtstroom (400 V) op de werf. Vanaf ${dag("teddh30")} per dag.`,
        },
      ],
    },
    levering: {
      kop: "Leveren in de provincie Luik: E40 en E313, en een afgesproken uur",
      alineas: [
        "Vanuit Aartselaar rijden we naar het oosten. **Hannuit, Borgworm en de rest van Haspengouw bereiken we in ongeveer een uur over de E40**; de stad Luik, Seraing en Herstal liggen op vijf kwartier, langs de E40 of de E313 via Hasselt. Hoei, Verviers en Spa halen we in anderhalf uur. Voor Malmedy, Stavelot en de Oostkantons rond Sankt Vith en Burg-Reuland rekenen we ruim twee uur, en daar leggen we het uur van levering samen met u vast.",
        `Bij aankomst meet de technieker hoeveel vocht er in de vloer en de muren zit, zet de toestellen op de natste plekken en leidt de afvoer naar een putje, een gootsteen of naar buiten. **De trap op naar de verdieping is in de prijs inbegrepen**; is er nog geen trap, dan kost de ladder ${euro(LADDER)} per verdieping. De afstand rekenen we niet door: een werf in Sankt Vith kost hetzelfde droogpakket als een werf in Hannuit.`,
      ],
      feiten: [
        { label: "Levering en installatie", waarde: "Inbegrepen in het droogpakket, geen kilometerkost" },
        { label: "Levertermijn", waarde: "Op afspraak, de leverdag spreken we samen af" },
        { label: "Rijtijd vanuit ons magazijn", waarde: "Rond een uur (Hannuit) tot ruim twee uur (Sankt Vith)" },
        { label: "Taal", waarde: "Nederlands of Frans, naar keuze" },
        { label: "Verdieping via ladder", waarde: `${euro(LADDER)} per verdieping, vooraf melden` },
        { label: "Condenspomp (aangeraden)", waarde: `${euro(POMP)} per bouwdroger per dag` },
      ],
    },
    afhalen: {
      kop: "Afhalen vanuit de provincie Luik: alleen als u toch naar Antwerpen moet",
      alineas: [
        `Afhalen kan in ons magazijn in Aartselaar, aan de A12 aan de zuidkant van Antwerpen. Vanuit Hannuit is dat een uur rijden, vanuit Verviers of Spa anderhalf uur, en u rijdt die weg heen en terug, bij het ophalen en opnieuw bij het terugbrengen. **Bij een droogpakket levert dat niets op, omdat de levering er al in zit.** Moet u toch in de buurt van Antwerpen zijn en heeft u één droger of ventilator lang nodig, dan reserveert u een vast afhaalmoment op een werkdag tussen 07:30 en 17:00.`,
      ],
      feiten: [
        { label: "Rijtijd naar ons afhaalpunt", waarde: "Een uur (Hannuit) tot ruim twee uur (Oostkantons)" },
        { label: "Waarborg", waarde: "Geen" },
        { label: "Vervoer", waarde: "Rechtop; plat vervoerd 24 uur laten staan" },
        { label: "Liever laten leveren?", waarde: "De rit zit al in elke pakketprijs" },
      ],
    },
    faq: [
      {
        q: "Gaat deze pagina over de stad Luik of over de provincie?",
        a: "Over de provincie: alle 84 gemeenten, van Hannuit en Borgworm in het westen tot Eupen en Sankt Vith in het oosten. De stad Luik heeft een eigen pagina, met de wijken en deelgemeenten binnen de stadsgrens. Droogpakket en prijs zijn op beide dezelfde; wat verschilt is de uitleg over de streek en de afstand.",
      },
      {
        q: "Leveren jullie ook in de Oostkantons, rond Eupen en Sankt Vith?",
        a: "Ja, in alle negen gemeenten van de Duitstalige Gemeenschap, van Kelmis en Raeren tot Bütgenbach en Burg-Reuland. Sankt Vith ligt op ruim twee uur van Aartselaar, dus spreken we het uur van levering vooraf af. De afspraken maken we in het Nederlands of het Frans; de prijs is dezelfde als in Haspengouw, zonder toeslag voor de kilometers.",
      },
      {
        q: "Kunnen we de afspraak in het Frans maken?",
        a: "Ja. Aan de telefoon, in de offerte en bij de plaatsing kiest u zelf of we Nederlands of Frans spreken. Zoekt u op Liège, Huy, Waremme of Visé, dan vindt u hier dezelfde gemeenten onder hun Nederlandse naam: Luik, Hoei, Borgworm en Wezet. Het droogpakket en de technieker zijn dezelfde.",
      },
      {
        q: "Ons huis aan de Vesdre is na 2021 heropgebouwd. Moet het nog gedroogd worden?",
        a: "Dat hangt af van wat er sindsdien gebeurd is. Werd er opnieuw gepleisterd of een nieuwe chape gegoten, dan zit dat bouwvocht er nog in, bovenop wat de muurvoet van de overstroming heeft vastgehouden. De technieker meet bij de start hoe nat muren en vloer zijn, zodat u niet te vroeg parket of verf aanbrengt op een ondergrond die nog vocht afgeeft.",
      },
      {
        q: "Werkt een bouwdroger in een souterrain van een Luiks herenhuis?",
        a: "Ja, maar het souterrain is meestal koel, en een condensdroger levert daar minder. Een adsorptiedroger blijft ook bij lage temperatuur vocht opnemen en is dan vaak de betere keuze. Komt er blijvend water door de muur aan de straatkant, dan is eerst een waterdichting nodig; de droger haalt daarna het vocht eruit dat al in de muur zit.",
      },
      {
        q: "Droogt een ruwbouw in de Hoge Venen in de winter?",
        a: "Zonder warmte nauwelijks. Op die hoogte blijft een onverwarmde ruwbouw maandenlang koud, en koude lucht neemt weinig vocht op, zodat chape en pleisterwerk hun water amper afgeven. Met een bouwkachel erbij wordt de ruimte warm genoeg om de droger zijn werk te laten doen. Die kachel vraagt krachtstroom, dus zeg vooraf wat er op de werf beschikbaar is.",
      },
    ],
    realisaties: {
      kop: "Werven in de buurt van Luik",
      intro: "In de provincie Luik zelf hebben we nog geen werf gefotografeerd. Deze twee liggen in Limburg, de buurprovincie: Hasselt ligt op onze rit over de E313 naar Luik, Bocholt in het Maasland verder noordwaarts.",
      slugs: ["chape-pleisterwerk-drogen-hasselt", "waterschade-drogen-bocholt"],
    },
    areaServed: provincie("Luik"),
  },
  /* ------------------------------------------------------------------ */
  {
    ...route("noord-brabant"),
    /*
      Noord-Brabant kreeg zijn pagina op 15-11-2026, samen met de andere
      Nederlandse grensprovincies, met hetzelfde sjabloon en dezelfde
      dagprijzen als de Belgische.

      Twee dingen zijn hier anders dan bij de Belgische provincies. De route
      staat op `opAanvraag`, dus het sjabloon belooft geen termijn maar een
      leverdag op afspraak; de tekst hieronder beloft dus ook niets sneller.
      En de levering staat niet als "inbegrepen" vermeld: over de grens maakt
      de offerte vooraf duidelijk wat het kost, en een belofte die het sjabloon
      voor België doet hoort hier niet. Btw-regels staan er bewust niet in.

      De afstand staat er eerlijk, zodat niemand in Cuijk een rit van drie
      kwartier verwacht: Woensdrecht en Bergen op Zoom rond drie kwartier,
      Breda en Roosendaal een uur, Tilburg en Eindhoven ruim een uur, Den Bosch
      en Oss rond anderhalf uur, het Land van Cuijk verder. Rijtijden zijn
      afgerond, net als in `gemeenten.ts`.

      Werven heeft de provincie nog niet; de sectie leent drie uit de provincie
      Antwerpen, die aan West-Brabant grenst en op de route over de A12 en E19
      naar Breda ligt. Zie `LEENT_VAN`.
    */
    title: "Bouwdroger huren in Noord-Brabant | Vernast",
    description:
      "Bouwdroger huren in Noord-Brabant: Breda, Tilburg, Eindhoven, Den Bosch en de rest van de provincie. Geplaatst door onze technicus, geleverd op afspraak.",
    h1: "Bouwdroger huren in Noord-Brabant",
    kicker: "Nederland · 56 gemeenten · van de Brabantse Wal tot het Land van Cuijk",
    intro: [
      "Een bouwdroger huren in Noord-Brabant, voor een nieuwe dekvloer in een Bredase nieuwbouwwijk, gestucte muren in een rijtjeshuis in Tilburg of een bedrijfshal rond Eindhoven? Vernast rijdt vanuit Aartselaar, net onder Antwerpen, de grens over en zet het droogpakket bij u neer. **De leverdag spreken we samen af**, en waar het kan combineren we uw adres met andere ritten in dezelfde streek. Over de afstand zijn we open: **Woensdrecht en Bergen op Zoom liggen rond drie kwartier van ons magazijn**, Breda en Roosendaal op een uur, Tilburg en Eindhoven op ruim een uur, Den Bosch en Oss op ongeveer anderhalf uur, en het Land van Cuijk nog wat verder.",
    ],
    heroFacts: [
      "Levering op een afgesproken dag",
      "Geplaatst en ingesteld door een technicus",
      "Geen waarborg",
    ],
    bouw: {
      kop: "Waarvoor huurt men in Noord-Brabant een bouwdroger?",
      alineas: [
        "**Het grootste deel van Brabant ligt op zandgrond**, van de Kempen rond Bladel en Eersel tot de Meierij rond Boxtel en Schijndel. Zand voert regenwater vlot af, dus wat er in een Brabantse woning na een verbouwing nat is, komt meestal niet uit de grond maar uit het werk zelf: **een anhydriet- of zandcementvloer, stucwerk op gipsplaat, nieuwe binnenmuren**. Een woning van gemiddelde grootte brengt zo al snel honderden liters water binnen die er weer uit moeten voor de parketteur of de schilder komt.",
        "**Langs de Maas en rond de Biesbosch ligt rivierklei**, in de Maaskant tussen Den Bosch en Ravenstein, in het Land van Heusden en Altena en in de polders rond Drimmelen en Werkendam. Op die zware grond staat het grondwater hoger en houdt een kruipruimte zijn vocht vast. Wie daar een benedenverdieping isoleert of een nieuwe vloer stort, droogt dus tegen een ondergrond die zelf niet meewerkt.",
        "**Brabant bouwt veel.** Rond Eindhoven, Veldhoven en Helmond groeit de Brainport-regio, met nieuwe woonwijken en **grote bedrijfshallen** voor de hightechbedrijven en hun toeleveranciers. Een hal met een betonvloer van duizend vierkante meter heeft andere toestellen nodig dan een eengezinswoning, en vooral meer luchtbeweging over de vloer. Ook rond Tilburg, Waalwijk en Oosterhout liggen grote bedrijventerreinen met logistieke panden.",
        "**Daarnaast staan er in elke Brabantse stad naoorlogse wijken** met rijtjeshuizen uit de jaren vijftig tot zeventig, nu volop in renovatie: nieuwe isolatie, vloerverwarming, een uitbouw aan de achterkant. In het oosten, in **de Peel** rond Deurne, Asten en Someren, gaat het vaker om vrijstaande woningen en omgebouwde boerderijen op het platteland, waar een schuur of stal een woonruimte wordt.",
      ],
    },
    beeld: {
      src: "/vernast/case-renovatie.webp",
      alt: "Renovatie met nieuw stucwerk, met een bouwdroger midden in de ruimte",
    },
    toestellen: {
      kop: "Welke bouwdroger past bij een Brabantse verbouwing?",
      items: [
        {
          key: "ttk350",
          waarom: `**Voor een rijtjeshuis in een naoorlogse wijk of een nieuwbouwwoning in Breda of Tilburg**: 70 liter per dag, op een gewoon stopcontact. Meestal staat er een per bouwlaag. Vanaf ${dag("ttk350")} per dag.`,
        },
        {
          key: "ttk650",
          waarom: `**Voor een bedrijfshal rond Eindhoven of een verbouwde boerderij in de Peel**: 110 liter per dag en een bereik tot zo'n 600 m³. Waar een groot volume droog moet, neemt dit toestel het werk van twee kleinere over. Vanaf ${dag("ttk650")} per dag.`,
        },
        {
          key: "radiaal2250",
          waarom: `**De ventilator die laag over een verse dekvloer blaast.** Op een grote vloer in een hal of een open woonkeuken blijft de lucht anders stilstaan boven het midden, en dat deel droogt het laatst. Vanaf ${dag("radiaal2250")} per dag.`,
        },
        {
          key: "teddh30",
          waarom: `**Voor een onverwarmde casco-woning of hal in de winter.** Onder 15 °C neemt een condensdroger nog weinig vocht op; de kachel brengt de ruimte eerst op temperatuur. Vraagt krachtstroom (400 V) op de bouwplaats. Vanaf ${dag("teddh30")} per dag.`,
        },
      ],
    },
    levering: {
      kop: "Leveren in Noord-Brabant: de leverdag spreken we samen af",
      alineas: [
        "We rijden vanuit Aartselaar over de A12 en de E19 naar het noorden. **West-Brabant, met Bergen op Zoom, Roosendaal en Breda, halen we binnen het uur**; voor Tilburg over de A58 en voor Eindhoven over de E34 en de A67 rekenen we ruim een uur. Den Bosch, Oss en de Maaskant liggen rond anderhalf uur, het Land van Cuijk aan de oostgrens nog verder. Omdat het een rit over de grens is, plannen we die met u: u kiest een dag die bij de planning van de vloerlegger past, en wij koppelen er waar mogelijk andere Brabantse adressen aan.",
        `Op de afgesproken dag meet de technicus eerst hoeveel vocht er in vloer en muren zit, verdeelt de toestellen over de natste ruimtes en sluit de condensafvoer aan op een afvoer of gootsteen. **De trap op naar een verdieping is gewoon inbegrepen**; staat er nog geen trap en moet alles via een ladder, dan kost dat ${euro(LADDER)} per verdieping. Wat de levering zelf kost staat vooraf in de offerte, zodat u niet achteraf voor een verrassing staat.`,
      ],
      feiten: [
        { label: "Levertermijn", waarde: "Op afspraak, de leverdag spreken we samen af" },
        { label: "Plaatsing", waarde: "Door onze technicus, met vochtmeting bij de start" },
        { label: "Kosten levering", waarde: "Vooraf vermeld in de offerte" },
        { label: "Rijtijd vanuit ons magazijn", waarde: "Rond drie kwartier (Bergen op Zoom) tot ruim anderhalf uur (Land van Cuijk)" },
        { label: "Verdieping via ladder", waarde: `${euro(LADDER)} per verdieping, vooraf melden` },
        { label: "Condenspomp (aangeraden)", waarde: `${euro(POMP)} per bouwdroger per dag` },
      ],
    },
    afhalen: {
      kop: "Zelf afhalen in Aartselaar: handig vanuit West-Brabant",
      alineas: [
        `Ons afhaalpunt ligt aan de Boomsesteenweg in Aartselaar, aan de zuidkant van Antwerpen. Vanuit Bergen op Zoom of Woensdrecht is dat ongeveer drie kwartier rijden, vanuit Breda een uur; voor wie in Eindhoven of Den Bosch woont, is het een halve dag heen en terug, en dan twee keer. **Voor een enkele droger die lang moet blijven staan kan afhalen lonen**: u bekijkt de afhaaltarieven en haalt af op een werkdag, ergens tussen 07:30 en 17:00. Leg het toestel niet plat in de kofferbak, want dat beschadigt de compressor.`,
      ],
      feiten: [
        { label: "Rijtijd naar ons afhaalpunt", waarde: "Drie kwartier (Bergen op Zoom) tot ruim anderhalf uur (Oss)" },
        { label: "Waarborg", waarde: "Geen" },
        { label: "Vervoer", waarde: "Rechtop; plat vervoerd 24 uur laten staan" },
        { label: "Liever laten leveren?", waarde: "Leverdag op afspraak, kosten vooraf in de offerte" },
      ],
    },
    faq: [
      {
        q: "Leveren jullie in heel Noord-Brabant, ook in het oosten?",
        a: "Ja, in alle 56 gemeenten, van Woensdrecht en Steenbergen in het westen tot Gemert-Bakel en het Land van Cuijk in het oosten. Hoe verder van de grens, hoe langer de rit; daarom spreken we de leverdag altijd met u af en combineren we die waar het kan met andere adressen in de buurt.",
      },
      {
        q: "Waarom leveren jullie in Nederland op afspraak en niet binnen een vaste termijn?",
        a: "Ons magazijn staat in Aartselaar, bij Antwerpen. Een rit naar Eindhoven of Den Bosch plannen we zorgvuldiger dan een levering in de Antwerpse rand, zodat de technicus genoeg tijd heeft voor de meting en de plaatsing. U kiest een dag die past bij de planning van uw aannemer of vloerlegger, en die houden we vast.",
      },
      {
        q: "Hoe lang moet een anhydrietvloer drogen voor er parket op mag?",
        a: "Dat hangt af van de dikte, de temperatuur en de ventilatie. Een anhydrietvloer moet voor parket of pvc doorgaans onder 0,5 procent restvocht zakken, en dat duurt zonder hulp al gauw weken. Met een bouwdroger en een ventilator over de vloer gaat het sneller; de technicus meet bij de start en u meet aan het eind opnieuw voor de vloerlegger begint.",
      },
      {
        q: "Kunnen jullie ook een bedrijfshal drogen?",
        a: "Ja. In een hal met een grote betonvloer zetten we meestal een of meer drogers van 110 liter per dag, met ventilatoren die de lucht over de vloer laten bewegen. Is de hal onverwarmd, dan komt er in de winter een kachel op krachtstroom bij. Geef de oppervlakte en de hoogte door, dan rekenen we het aantal toestellen vooraf uit.",
      },
      {
        q: "Komen jullie uit België, en wat betekent dat voor de prijs?",
        a: "We zijn een Belgisch bedrijf met het magazijn in Aartselaar, op korte afstand van de grens bij Essen en Putte. De dagprijs van de toestellen is dezelfde als op de rest van de site. De offerte maakt vooraf duidelijk wat u betaalt voor huur, levering, plaatsing en ophaling, zodat er achteraf niets bijkomt.",
      },
    ],
    realisaties: {
      kop: "Werven in de buurt van Noord-Brabant",
      intro: "Van een Brabantse bouwplaats hebben we nog geen foto's. Deze drie werven liggen in de provincie Antwerpen, die aan West-Brabant grenst: Merksem en Schilde aan de noordkant van Antwerpen, op de weg naar Breda, en een woning in de stad zelf.",
      slugs: ["pleisterwerk-drogen-merksem", "nieuwbouwvilla-drogen-schilde", "kelder-en-kamer-drogen-antwerpen"],
    },
    /*
      Let op: `provincie()` zet `containedInPlace` vast op België, en dat is
      voor Noord-Brabant fout. Zolang de helper geen land aanneemt, staat hier
      een onjuiste Country in de Service-schema.
    */
    areaServed: provincie("Noord-Brabant", "Nederland"),
  },
  /* ------------------------------------------------------------------ */
  {
    ...route("zeeland"),
    /*
      Zeeland kreeg zijn pagina op 15-11-2026, samen met Noord-Brabant en
      Nederlands Limburg: de eerste provincies over de grens. De route staat op
      `opAanvraag`, dus het sjabloon belooft geen "binnen 24 uur" maar een
      leverdag op afspraak, en de tekst hieronder doet dat ook nergens. Btw
      staat er bewust niet in: over de grens gelden andere regels, en die horen
      in de offerte, niet in een tekst die niemand bijwerkt als ze wijzigen.

      Wat Zeeland eigen maakt: zeeklei en polders onder zeeniveau, zout in oude
      muren, de zeewind tegen de westgevels, de vakantiewoningen op Walcheren en
      Schouwen die tussen twee seizoenen verbouwd worden, en 1953. Dat laatste
      staat er sober in, als reden waarom huizen er zijn zoals ze zijn, niet als
      verkoopargument.

      De afstand staat er eerlijk. Hulst en Tholen liggen rond drie kwartier,
      Terneuzen op een uur via de Kennedytunnel en de Waaslandhaven, Goes en
      Middelburg op ongeveer anderhalf uur, Schouwen-Duiveland verder. Rijtijden
      zijn afgerond en te verifiëren tegen de echte ritgegevens.

      Werven heeft de provincie nog niet; de sectie leent de twee
      West-Vlaamse, omdat Sluis tegen Knokke-Heist en het Brugse Ommeland ligt
      en de kust er dezelfde zeelucht en hetzelfde zout kent. Zie `LEENT_VAN`.
    */
    title: "Bouwdroger huren in Zeeland | Vernast",
    description:
      "Bouwdroger huren in Zeeland, van Hulst en Terneuzen tot Goes, Middelburg en Schouwen. Geplaatst en opgehaald vanuit Aartselaar, de leverdag op afspraak.",
    h1: "Bouwdroger huren in Zeeland",
    kicker: "Nederland · 13 gemeenten · Zeeuws-Vlaanderen en de eilanden",
    intro: [
      "Een bouwdroger huren in Zeeland, voor een nieuwe dekvloer in een polderdorp, een vakantiewoning die voor het seizoen klaar moet of een oud pand met zout in de muren? Vernast brengt de toestellen naar uw bouwplaats, sluit ze aan en haalt ze weer op. **We komen uit Aartselaar, aan de zuidkant van Antwerpen, en zeggen eerlijk hoe ver dat is.** **Hulst en Tholen liggen rond drie kwartier rijden**, Terneuzen op een uur via de Kennedytunnel en de Waaslandhaven. Goes en Middelburg bereiken we in ongeveer anderhalf uur, via Bergen op Zoom en de A58 of door de Westerscheldetunnel. Schouwen-Duiveland ligt nog verder. **De leverdag spreken we daarom samen met u af.**",
    ],
    heroFacts: [
      "Leverdag op afspraak",
      "Plaatsing en ophaling door onze technicus",
      "Geen waarborg",
    ],
    bouw: {
      kop: "Waarvoor huurt u in Zeeland een bouwdroger?",
      alineas: [
        "**Bijna heel Zeeland ligt op zeeklei**, en een groot deel ervan ligt onder zeeniveau, achter dijken die het land eeuw na eeuw op het water hebben gewonnen. Het grondwater staat in de polders hoog. Een nieuwe dekvloer of een vers gestucte muur droogt er niet vanzelf sneller omdat de zon schijnt: het vocht moet de ruimte uit, en buiten is de lucht zelden droog. Wie in een polderdorp bij Kapelle, Borsele of Reimerswaal bouwt, rekent dus beter op een droger dan op het weer.",
        "**In oude muren zit in Zeeland vaak zout.** Het komt uit de klei, uit de zeelucht en in sommige huizen nog van een overstroming. Zout trekt water aan, zodat zo'n muur vochtig blijft terwijl de rest van het huis al droog is. Een bouwdroger haalt het water eruit, niet het zout; tijdens het drogen kan dat zout als witte uitslag aan het oppervlak komen. **Dat is geen fout van de droging maar een teken dat de stukadoor er rekening mee moet houden**, bijvoorbeeld met een pleister die tegen zout kan.",
        "**De zeewind slaat de regen tegen de westgevels**, van Westkapelle tot Renesse. Een gevel die de hele winter nat geblazen wordt, geeft dat vocht door naar binnen, en wie daar een buitenmuur isoleert of afwerkt, droogt eerst de binnenkant. Ramen openzetten helpt aan de kust weinig: de buitenlucht is er vochtig en brengt meer water binnen dan ze meeneemt. Een droger werkt daarom het best in een gesloten ruimte.",
        "**Op Walcheren en Schouwen staan veel vakantiewoningen**, rond Domburg, Zoutelande en Vrouwenpolder, en rond Renesse en Burgh-Haamstede. Die worden verbouwd in de maanden dat er niemand logeert, en vaak staan ze dan onverwarmd. Voor de eigenaar telt één datum: de eerste gasten. Tussen een nieuwe badkamer in november en een verhuurbare woning met Pasen zit weinig speling, en een dekvloer die te nat is voor de vloerlegger kost een week.",
        "**In februari 1953 liep een groot deel van de eilanden onder water.** Op Schouwen-Duiveland, Tholen en in andere delen van de provincie werden daarna hele dorpen opnieuw opgebouwd, en de Deltawerken volgden. Veel van die wederopbouwwoningen zijn nu zeventig jaar oud en worden gerenoveerd. Hun muren staan op dezelfde natte grond als toen; meten vóór het afwerken is daar geen overbodige luxe.",
      ],
    },
    beeld: {
      src: "/vernast/case-renovatie.webp",
      alt: "Verbouwing met vers stucwerk in een oudere woning, klaar om te drogen",
    },
    toestellen: {
      kop: "Welke bouwdroger past bij een bouwplaats in Zeeland?",
      items: [
        {
          key: "ttk350",
          waarom: `**Voor een woning in een polderdorp of een wederopbouwhuis op de eilanden**: haalt 70 liter water per dag uit een ruimte tot zo'n 400 m³. Eén toestel per verdieping is meestal genoeg om dekvloer en stucwerk samen te drogen. Vanaf ${dag("ttk350")} per dag.`,
        },
        {
          key: "ttk170",
          waarom: `**Voor de vakantiewoning of het appartement aan zee**: 50 liter per dag in een ruimte tot ongeveer 250 m³, compact en op een gewoon stopcontact. Past ook in een badkamer die voor het seizoen klaar moet. Vanaf ${dag("ttk170")} per dag.`,
        },
        {
          key: "revolution",
          waarom: `**De adsorptiedroger voor een onverwarmde woning in de winter.** Een condensdroger levert weinig in een koude ruimte; deze blijft vocht opnemen en blaast zijn droge lucht door een slang tegen de muur die het natst is. Die opstelling bekijken we vooraf samen met u. Vanaf ${dag("revolution")} per dag.`,
        },
        {
          key: "ttv4500",
          waarom: `**De ventilator die de droge lucht tot in de hoeken brengt**, ook achter een buitenmuur die de zeewind nat heeft geblazen. Zonder luchtbeweging droogt het midden van de kamer en blijven de randen nat. Vanaf ${dag("ttv4500")} per dag.`,
        },
      ],
    },
    levering: {
      kop: "Leveren in Zeeland: een leverdag die we samen afspreken",
      alineas: [
        "Vanuit Aartselaar rijden we noordwaarts of onder de Schelde door. **Tholen en Reimerswaal bereiken we over de A12 en Bergen op Zoom**, Hulst langs de Waaslandhaven, en Terneuzen via de Kennedytunnel in ongeveer een uur. Voor Goes, Middelburg en Vlissingen rekenen we rond anderhalf uur, langs de A58 of door de Westerscheldetunnel. Sluis en Schouwen-Duiveland liggen het verst. Voor al die plaatsen spreken we eerst een leverdag af, en waar het kan combineren we die met andere ritten in de provincie.",
        `Op de afgesproken dag begint de technicus met een vochtmeting van dekvloer en muren. Daarna kiest hij per ruimte de plek voor elk toestel en leidt hij het condenswater af, naar een afvoer in huis of naar buiten. **Een verdieping hoger via de trap valt gewoon onder de levering**; is er nog geen trap en gaat alles langs een ladder omhoog, dan kost dat ${euro(LADDER)} per verdieping. Wat u betaalt, staat vooraf in de offerte, inclusief levering en ophaling.`,
      ],
      feiten: [
        { label: "Levering en ophaling", waarde: "In de offerte, zonder ritkosten achteraf" },
        { label: "Levertermijn", waarde: "Op afspraak, de leverdag spreken we samen af" },
        { label: "Rijtijd vanuit ons magazijn", waarde: "Rond drie kwartier (Hulst, Tholen) tot ruim anderhalf uur (Schouwen)" },
        { label: "Verdieping via ladder", waarde: `${euro(LADDER)} per verdieping, vooraf melden` },
        { label: "Condenspomp (aangeraden)", waarde: `${euro(POMP)} per bouwdroger per dag` },
      ],
    },
    afhalen: {
      kop: "Zelf ophalen vanuit Zeeland: het magazijn ligt aan de A12",
      alineas: [
        `Ons afhaalpunt is het magazijn aan de Boomsesteenweg in Aartselaar, net onder Antwerpen. Wie uit Hulst of Tholen komt, rijdt drie kwartier; uit Goes of Middelburg anderhalf uur. Dat doet u heen en terug, en nog eens als de droger terug moet. **Voor een volledige droging is laten leveren dus meestal de betere keuze.** Komt u voor uw werk sowieso langs Antwerpen en volstaat één losse droger, dan kan afhalen lonen: bekijk de afhaaltarieven. De toestellen staan klaar op een werkdag, van 07:30 tot 17:00.`,
      ],
      feiten: [
        { label: "Rijtijd naar ons afhaalpunt", waarde: "Drie kwartier (Hulst) tot ruim anderhalf uur (Middelburg)" },
        { label: "Waarborg", waarde: "Geen" },
        { label: "Vervoer", waarde: "Rechtop; plat vervoerd 24 uur laten staan" },
        { label: "Liever laten leveren?", waarde: "Leverdag op afspraak, ophaling erbij" },
      ],
    },
    faq: [
      {
        q: "Leveren jullie in heel Zeeland, ook op de eilanden?",
        a: "Ja, in alle dertien gemeenten: in Zeeuws-Vlaanderen, op Walcheren, de Bevelanden, Tholen en Schouwen-Duiveland. Omdat we uit Aartselaar bij Antwerpen komen, beloven we geen termijn maar spreken we de leverdag samen met u af. Zo staat de technicus er wanneer de stukadoor of de vloerlegger klaar is.",
      },
      {
        q: "Hoe snel kan een bouwdroger in Zeeland staan?",
        a: "Dat hangt af van de plaats en de planning. Hulst en Tholen liggen het dichtst bij ons magazijn, Goes en Middelburg op ongeveer anderhalf uur. We kijken bij uw boeking welke dag past en combineren de rit waar mogelijk met andere leveringen in de provincie. Bij waterschade bellen we u eerst terug om te zien wat er kan.",
      },
      {
        q: "Wat kost een bouwdroger huren in Zeeland?",
        a: "De huurprijs per dag is dezelfde als in België en staat bij elk toestel op de site. Voor een levering in Zeeland krijgt u vooraf een offerte waarin toestellen, huurperiode, levering en ophaling staan. Wat daarin staat, betaalt u; er komt achteraf geen rekening voor kilometers bij.",
      },
      {
        q: "Er komt witte uitslag op de muur tijdens het drogen. Wat is dat?",
        a: "Meestal zout dat met het water naar het oppervlak trekt. In Zeeland zit dat vaak in oude muren, door de klei, de zeelucht of een overstroming. De droger haalt het water weg, het zout blijft achter. Borstel de uitslag droog af en zeg het tegen uw stukadoor, die dan een geschikte pleister kan kiezen.",
      },
      {
        q: "Kan een vakantiewoning op Walcheren of Schouwen droog zijn voor het seizoen?",
        a: "Als we op tijd beginnen wel. Een nieuwe dekvloer heeft al gauw enkele weken nodig, en in een onverwarmde woning in de winter langer. Plan de droging daarom direct na het storten of stucen, en laat de technicus aan het begin en het eind meten. Dan weet u op welke dag de vloerlegger kan komen en de woning verhuurd kan worden.",
      },
      {
        q: "Helpt het om de ramen open te zetten aan de kust?",
        a: "Tijdens het drogen liever niet. De lucht aan zee is bijna altijd vochtig, en door een open raam komt er meer water binnen dan er naar buiten gaat. Een bouwdroger werkt het best in een gesloten ruimte, met een ventilator die de lucht rondstuurt. Na de droging is gewoon ventileren wel weer belangrijk.",
      },
    ],
    realisaties: {
      kop: "Werven in de buurt van Zeeland",
      intro: "Van een Zeeuwse bouwplaats hebben we nog geen foto's. De dichtstbijzijnde werven op deze site liggen in West-Vlaanderen, aan de andere kant van de grens bij Sluis: een kelder in Brugge en een villa aan de kust in Oostende, met dezelfde zeelucht en hetzelfde zout in de muren.",
      slugs: ["kelder-drogen-brugge", "pleisterwerk-drogen-oostende"],
    },
    areaServed: provincie("Zeeland", "Nederland"),
  },
  /* ------------------------------------------------------------------ */
  {
    ...route("nederlands-limburg"),
    /*
      Nederlands Limburg kreeg zijn pagina op 15-11-2026, samen met
      Noord-Brabant en Zeeland. De naam staat overal voluit, in titel, H1,
      kicker en de eerste zin: /bouwdroger-huren-limburg is de Belgische
      provincie, en twee pagina's die allebei "Limburg" heten vechten om
      dezelfde zoekopdracht. Wie "bouwdroger Maastricht" of "bouwdroger
      Venlo" intikt, moet hier meteen zien dat het over Nederland gaat.

      Levering staat op afspraak (`opAanvraag` in regio-slugs.ts), dus deze
      tekst belooft geen termijn en geen gratis rit: wat de levering kost,
      staat in de offerte. Btw-regels noemen we niet; die verschillen over
      de grens en horen in de offerte, niet in een regiotekst.

      De afstand staat er eerlijk: Weert en Maastricht op vijf kwartier tot
      anderhalf uur, Venlo en Venray rond twee uur, Mook nog verder. Rijtijden
      zijn afgerond en te verifiëren tegen de echte ritgegevens.

      Werven heeft de provincie nog niet. De sectie leent de twee uit
      Belgisch Limburg: Bocholt ligt tegen de grens bij Weert, Hasselt ligt
      op de E313, de weg die we naar Maastricht nemen.
    */
    title: "Bouwdroger huren in Nederlands Limburg | Vernast",
    description:
      "Bouwdroger huren in Nederlands Limburg: Maastricht, Heerlen, Sittard, Roermond, Venlo en Venray. Leverdag op afspraak, geplaatst door onze technicus.",
    h1: "Bouwdroger huren in Nederlands Limburg",
    kicker: "Nederland · 31 gemeenten · van Mook tot Vaals",
    intro: [
      "Een bouwdroger huren in Nederlands Limburg, de Nederlandse provincie langs de Maas, voor een dekvloer in een nieuwbouwwijk, stucwerk in een mijnwerkerswoning of een kruipruimte die na een lekkage nat blijft? Vernast brengt de toestellen vanuit Aartselaar bij Antwerpen naar uw adres, **van Mook en Middelaar in het noorden tot Vaals op het drielandenpunt**. Over de afstand zijn we open: **Weert en Maastricht liggen op vijf kwartier tot anderhalf uur rijden**, Roermond en Sittard op anderhalf uur, Heerlen, Kerkrade, Venlo en Venray rond twee uur, en Mook nog wat verder. **Daarom spreken we de leverdag met u af** en zetten we de rit zo mogelijk samen met andere adressen in dezelfde streek.",
    ],
    heroFacts: [
      "Leverdag op afspraak, plaatsing door onze technicus",
      "Geen waarborg",
      "Vooraf een offerte met huur en levering",
    ],
    bouw: {
      kop: "Waarvoor huurt men in Nederlands Limburg een bouwdroger?",
      alineas: [
        "**De provincie is een smalle strook langs de Maas**, en de rivier bepaalt er veel van het bouwen. In december 1993 en januari 1995 trad de Maas buiten haar oevers, en in dorpen rond Roermond, Maasgouw en Venlo liepen huizen onder. Daarna kwamen er kades en nieuwe dijken. In juli 2021 waren het de Geul en kleinere beken die overstroomden, in Valkenburg, Meerssen en Gulpen. **Wie zo'n huis vandaag verbouwt, droogt vaak een muurvoet die ooit doorweekt was**, en daar meet de technicus eerst hoeveel vocht er nog in zit.",
        "**In het Heuvelland, rond Valkenburg, Gulpen-Wittem en Eijsden-Margraten, staan huizen van mergel en vakwerk.** Mergel is een zachte kalksteen die veel water opneemt en het maar langzaam weer afgeeft; vakwerk is een houten skelet met vakken van leem of baksteen. Bij zulke panden moet het tempo omlaag: te snel drogen kan leem doen scheuren en hout laten werken. We zetten de streefvochtigheid dan hoger en laten de drogers langer, maar rustiger draaien.",
        "**Parkstad, met Heerlen, Kerkrade, Brunssum en Landgraaf, is de oude mijnstreek.** De laatste mijnen sloten begin jaren zeventig, maar de mijnwerkerskoloniën staan er nog: rijen woningen uit het begin van de vorige eeuw die nu één voor één gerenoveerd worden, met nieuw stucwerk, gipsplaatwanden en een nieuwe dekvloer. Sommige huizen hebben **scheuren of een scheve vloer door mijnschade**. Een bouwdroger herstelt dat niet, maar haalt wel het vocht uit wat na het herstel opnieuw is gestort of gestuct.",
        "**Noord-Limburg, rond Venlo, Venray, Horst aan de Maas en Peel en Maas, is tuinbouwland.** Tussen de kassen, de champignonkwekerijen en de distributiecentra liggen nieuwbouwwijken op zandgrond. Daar gaat het vooral om de gewone nieuwbouwdroging: een anhydriet- of cementdekvloer die droog moet voor de parketlegger komt, en een kruipruimte waar het bouwwater blijft staan. Ook een verbouwde bedrijfswoning bij een kwekerij kan een flinke hoeveelheid water bevatten.",
      ],
    },
    beeld: {
      src: "/vernast/case-renovatie.webp",
      alt: "Renovatie met vers stucwerk in een oudere Limburgse woning",
    },
    toestellen: {
      kop: "Welke bouwdroger past bij een klus in Nederlands Limburg?",
      items: [
        {
          key: "ttk350",
          waarom: `**Voor een mijnwerkerswoning in Parkstad of een tussenwoning in een nieuwbouwwijk**: 70 liter per dag, geschikt voor ongeveer 400 m³. Per verdieping is er meestal één genoeg. Vanaf ${dag("ttk350")} per dag.`,
        },
        {
          key: "ttk650",
          waarom: `**Voor een vrijstaand huis in Noord-Limburg of een woning na hoogwater langs de Maas**: 110 liter per dag, tot ongeveer 600 m³. Waar in korte tijd veel water weg moet, doet hij het werk van twee kleinere drogers. Vanaf ${dag("ttk650")} per dag.`,
        },
        {
          key: "revolution",
          waarom: `**De adsorptiedroger voor een kruipruimte of een kelder in het Heuvelland.** Hij blijft vocht opnemen bij lage temperaturen, waar een condensdroger stilvalt, en droogt mergel en leem in een rustig tempo. Vanaf ${dag("revolution")} per dag.`,
        },
        {
          key: "ttv4500",
          waarom: `**De ventilator voor een diepe woning met ramen aan één kant**, zoals veel huizen in de mijnkoloniën. Hij zet de lucht in de achterste kamers in beweging, zodat niet alleen de voorkant droog wordt. Vanaf ${dag("ttv4500")} per dag.`,
        },
      ],
    },
    levering: {
      kop: "Leveren in Nederlands Limburg: over de E313 of de E34, op een afgesproken dag",
      alineas: [
        "**Naar Zuid-Limburg rijden we over de E313 naar Hasselt en dan over de E314 en de A76**, richting Maastricht, Sittard en Heerlen. Weert, Roermond en Noord-Limburg bereiken we over de E34 langs Eindhoven en daarna de A2 of de A67. Omdat dat lange ritten zijn, **plannen we de leverdag samen met u** en combineren we die waar het kan met andere adressen in dezelfde hoek van de provincie.",
        `Op het adres meet de technicus eerst het vochtgehalte van vloer en muren, zet de drogers waar ze het meest uithalen en leidt de afvoerslang naar een gootsteen, een putje of naar buiten. Moeten toestellen via een ladder naar een verdieping zonder trap, dan geldt ${euro(LADDER)} per verdieping; laat dat vooraf weten, dan komen we met twee man. **Wat de levering en de ophaling kosten, ziet u vooraf in de offerte.**`,
      ],
      feiten: [
        { label: "Levering en installatie", waarde: "Plaatsing door onze technicus, kosten vooraf in de offerte" },
        { label: "Levertermijn", waarde: "Op afspraak, de leverdag spreken we samen af" },
        { label: "Rijtijd vanuit ons magazijn", waarde: "Vijf kwartier (Weert, Maastricht) tot ruim twee uur (Mook)" },
        { label: "Route", waarde: "E313, E314 en A76 naar het zuiden; E34, A2 of A67 naar het noorden" },
        { label: "Verdieping via ladder", waarde: `${euro(LADDER)} per verdieping, vooraf melden` },
        { label: "Condenspomp (aangeraden)", waarde: `${euro(POMP)} per bouwdroger per dag` },
      ],
    },
    afhalen: {
      kop: "Afhalen vanuit Nederlands Limburg: alleen als u toch bij Antwerpen bent",
      alineas: [
        `Afhalen doet u in ons magazijn in Aartselaar, bij de A12 aan de zuidkant van Antwerpen. Vanuit Maastricht of Weert bent u daar ruim een uur mee bezig, vanuit Venlo of Heerlen eerder twee, en die rit maakt u twee keer: bij het halen en bij het terugbrengen. **Voor een volledige opstelling is laten leveren bijna altijd de betere keuze**, omdat de technicus dan meteen meet en plaatst. Komt u toch in de buurt van Antwerpen en heeft u één droger of ventilator lang nodig, dan reserveert u een afhaalmoment op een werkdag tussen 07:30 en 17:00.`,
      ],
      feiten: [
        { label: "Rijtijd naar ons afhaalpunt", waarde: "Ruim een uur (Maastricht, Weert) tot twee uur (Venlo, Heerlen)" },
        { label: "Waarborg", waarde: "Geen" },
        { label: "Vervoer", waarde: "Rechtop; plat vervoerd 24 uur laten staan" },
        { label: "Liever laten leveren?", waarde: "Leverdag op afspraak, kosten in de offerte" },
      ],
    },
    faq: [
      {
        q: "Gaat deze pagina over het Nederlandse of het Belgische Limburg?",
        a: "Over het Nederlandse: de 31 gemeenten van Mook en Middelaar tot Vaals, met Maastricht, Heerlen, Sittard-Geleen, Roermond en Venlo. Belgisch Limburg, met Hasselt, Genk en het Maasland, heeft een eigen pagina. De toestellen zijn dezelfde; wat verschilt is de rit en de afspraak over de leverdag.",
      },
      {
        q: "Leveren jullie vanuit België ook in Maastricht en Venlo?",
        a: "Ja. Maastricht ligt over de E313 en de E314 op ongeveer anderhalf uur van ons magazijn, Venlo over de E34 en de A67 op ongeveer twee uur. Omdat we de grens over gaan, spreken we de leverdag vooraf samen af en plannen we de rit zo dat de technicus de tijd heeft om alles goed op te stellen.",
      },
      {
        q: "Hoe weet ik vooraf wat het huren in Nederlands Limburg kost?",
        a: "U krijgt een offerte voor u bevestigt. Daarin staan de huur per dag, het aantal toestellen en wat de levering en de ophaling kosten. Zo ziet u voor de start wat u betaalt, ook als de droging langer of korter duurt dan gedacht.",
      },
      {
        q: "Kan ik een huis van mergel of vakwerk in het Heuvelland drogen?",
        a: "Ja, maar langzamer dan een nieuwbouw. Mergel en leem houden veel water vast en kunnen scheuren als ze te snel uitdrogen. De technicus stelt de droger daarom in op een hogere streefvochtigheid en meet tussendoor, zodat het vocht er geleidelijk uit gaat in plaats van in één week.",
      },
      {
        q: "Helpt een bouwdroger tegen een natte kruipruimte?",
        a: "Bij vocht dat na een lekkage, een overstroming of het storten van een dekvloer is achtergebleven wel. Komt er telkens opnieuw grondwater omhoog, zoals in lage delen langs de Maas, dan moet eerst die oorzaak worden aangepakt. De technicus meet bij de plaatsing welk van de twee het is.",
      },
      {
        q: "Onze woning in Parkstad heeft mijnschade gehad. Moet ze na het herstel gedroogd worden?",
        a: "Meestal wel. Bij het herstel van mijnschade worden scheuren dichtgezet, muren opnieuw gestuct en soms vloeren opnieuw gestort, en dat brengt veel water in huis. Een droger haalt dat eruit voor u gaat schilderen of een vloer legt; de scheuren zelf zijn dan al hersteld door de aannemer.",
      },
    ],
    realisaties: {
      kop: "Werven in de buurt van Nederlands Limburg",
      intro: "In Nederlands Limburg hebben we nog geen werf gefotografeerd. Deze twee liggen in Belgisch Limburg: Bocholt ligt op een kwartier van Weert, en Hasselt ligt op de E313, de weg die we naar Maastricht nemen.",
      slugs: ["waterschade-drogen-bocholt", "chape-pleisterwerk-drogen-hasselt"],
    },
    /*
      `provincie()` hierboven zet `containedInPlace` vast op België, dus die
      helper zou deze provincie verkeerd plaatsen. Daarom hier voluit, met
      Nederland als land. "Limburg" en niet "Nederlands Limburg": zo heet de
      provincie bestuurlijk, en het land maakt het onderscheid al.
    */
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Limburg",
      containedInPlace: { "@type": "Country", name: "Nederland" },
    },
  },
];

export const REGIO_BY_SLUG: Record<string, Regio> = Object.fromEntries(REGIOS.map((r) => [r.slug, r]));

/**
 * Alle lopende tekst van een regiopagina achter elkaar — voor de test die het
 * woordental en de uniciteit tussen regio's bewaakt. De feitentabel
 * (laddertoeslag, pompprijs) blijft er bewust buiten: die rijen zijn in elke
 * regio gelijk omdat de prijs dat is, en dat is geen kopie maar een feit.
 */
export function regioTekst(regio: Regio): string {
  /*
    Zonder de nadrukmarkering. De teksten hierboven zetten met `**…**` een paar
    woorden per alinea vet (zie src/components/content/nadruk.tsx); de test die
    woorden telt en zinnen tussen twee provincies vergelijkt, hoort de tekst te
    zien zoals de bezoeker ze leest.
  */
  const kaal = (t: string) => t.replace(/\*\*/g, "");
  return [
    regio.h1,
    ...regio.intro,
    regio.bouw.kop,
    ...regio.bouw.alineas,
    regio.toestellen.kop,
    ...regio.toestellen.items.map((t) => t.waarom),
    regio.levering.kop,
    ...regio.levering.alineas,
    regio.afhalen.kop,
    ...regio.afhalen.alineas,
    ...regio.faq.flatMap((f) => [f.q, f.a]),
    regio.realisaties.kop,
    regio.realisaties.intro,
  ]
    .map(kaal)
    .join("\n");
}

/** De projecten uit `REALISATIES` waar deze regio naar verwijst, in volgorde. */
export function realisatiesVoor(regio: Regio) {
  return regio.realisaties.slugs.map((slug) => {
    const r = REALISATIES.find((x) => x.slug === slug);
    if (!r) throw new Error(`Regio ${regio.slug} verwijst naar onbekende realisatie ${slug}`);
    return r;
  });
}

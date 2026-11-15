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

const provincie = (name: string) => ({
  "@type": "AdministrativeArea",
  name,
  containedInPlace: { "@type": "Country", name: "België" },
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

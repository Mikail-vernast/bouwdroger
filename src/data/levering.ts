/**
 * Transportzones: wat een levering buiten de thuisregio kost, en op welke dag
 * we die richting rijden.
 *
 * **Waarom dit bestaat.** De site dekt sinds de landenkaart veertien regio's,
 * van Aartselaar tot Aarlen. Op elke pagina stond dezelfde belofte — levering
 * binnen 24 uur, gratis — terwijl een order in Namen ons aan rijden en dragen
 * het dubbele kost van een order in Boom, en een order in Aarlen het viervoud.
 * De huurprijs van een pakket blijft overal identiek; wat de afstand extra
 * kost, staat hier.
 *
 * **Tot 200 km een tarief, daarboven een offerte.** Binnen tweehonderd
 * kilometer rijdt de bestelwagen zelden alleen en is de kost dus voorspelbaar
 * genoeg om er een vast bedrag op te zetten. Daarbuiten hangt alles af van de
 * vraag of er een tweede adres bij past — een verschil van honderden euro's per
 * order — en zou elk vast tarief óf te duur óf verlieslatend zijn.
 *
 * **Hoe de tarieven berekend zijn.** Per order rijdt de bestelwagen twee keer:
 * de levering en, weken later, de ophaling. De kostprijs daarvan is opgebouwd
 * zoals een transportfirma dat doet — € 0,46 per kilometer (afschrijving,
 * brandstof, onderhoud, pneus, verzekering, taksen) en € 37,80 per toewijsbaar
 * uur technicus, plus 10% voor planning en administratie. Het tarief dekt
 * enkel het verschil met de thuiszone, want die € 146 zit al in de huurprijs
 * verrekend. Daardoor blijft wat er na transport van een order overblijft in
 * elke zone gelijk; `src/test/transportzones.test.ts` bewaakt dat.
 *
 * **Ritdagen zijn van ons, niet van de klant.** Het tarief hangt aan bundeling:
 * een rit naar Luik met 2,5 stops kost € 343 en draagt dus € 137 per order,
 * dezelfde rit voor één adres kost € 691. Daarom rijden wij per corridor op een
 * vaste dag.
 *
 * Maar dat is onze planning en geen keuzemenu voor de klant: hij kiest zijn
 * leverdatum vrij in de agenda, zoals overal op de site. De corridordag staat er
 * als informatie naast — kiest hij die dag, dan rijden we er toch al — en
 * nergens als voorwaarde. De bundeling komt dus uit de planning en uit de
 * telefonische bevestiging, niet uit een kalender die dagen dichtzet.
 *
 * De dagen zelf zijn een planningskeuze, geen rekenresultaat. Verander ze hier
 * en de teksten in de wizard en op de regiopagina's volgen.
 */

/** De landen waar we leveren. De algemene voorwaarden staan gebruik in BE en NL toe. */
export type Land = "BE" | "NL";

export interface Zone {
  nr: number;
  /** Bovengrens in wegkilometers vanaf het magazijn; `null` = alles daarboven. */
  tot: number | null;
  /** Zoals het op het scherm staat: "90 – 120 km". */
  band: string;
  /**
   * Transportvergoeding excl. btw, bovenop de huurprijs. `0` = inbegrepen,
   * `null` = geen eigen levering (afhalen of een prijs op maat).
   */
  tarief: number | null;
  /**
   * Wat een losse rit buiten onze geplande ronde extra kost, excl. btw.
   *
   * Staat bewust níet als knop in de wizard: de klant kiest daar gewoon zijn
   * datum. Dit bedrag is er voor wie belt met een werf die morgen droog moet
   * zijn, zodat er aan de telefoon een cijfer ligt in plaats van een inschatting.
   * `null` = zo ver rijden we niet apart.
   */
  spoed: number | null;
  /** Wat er onder "direct beschikbaar" komt te staan. */
  belofte: string;
  /**
   * Hoe vaak wij zelf in deze richting rijden. Bepaalt alleen hoe stellig de
   * tekst naast de kalender is — niet welke dagen de klant mag kiezen.
   */
  ritme: "dagelijks" | "twee-dagen" | "een-dag" | "geen";
}

/**
 * De zonegrenzen staan gelijk aan `ZONEGRENZEN` in
 * `scripts/fetch-leverzones.mjs`; `src/test/transportzones.test.ts` controleert
 * dat de twee niet uit elkaar lopen. Verschuif je een grens, dan moet dat
 * script opnieuw draaien — anders wijst `leverzones.ts` naar zones die hier
 * iets anders betekenen.
 */
export const ZONES: readonly Zone[] = [
  {
    nr: 1,
    tot: 30,
    band: "0 – 30 km",
    tarief: 0,
    spoed: 55,
    belofte: "morgen geplaatst",
    ritme: "dagelijks",
  },
  {
    nr: 2,
    tot: 50,
    band: "30 – 50 km",
    tarief: 0,
    spoed: 115,
    belofte: "morgen geplaatst",
    ritme: "dagelijks",
  },
  {
    nr: 3,
    tot: 70,
    band: "50 – 70 km",
    tarief: 79,
    spoed: 160,
    belofte: "u kiest zelf uw leverdag",
    ritme: "twee-dagen",
  },
  {
    nr: 4,
    tot: 90,
    band: "70 – 90 km",
    tarief: 99,
    spoed: 200,
    belofte: "u kiest zelf uw leverdag",
    ritme: "twee-dagen",
  },
  {
    nr: 5,
    tot: 120,
    band: "90 – 120 km",
    tarief: 139,
    spoed: null,
    belofte: "u kiest zelf uw leverdag",
    ritme: "een-dag",
  },
  {
    nr: 6,
    tot: 200,
    band: "120 – 200 km",
    tarief: 199,
    spoed: null,
    belofte: "u kiest zelf uw leverdag",
    ritme: "een-dag",
  },
  {
    /*
      Boven 200 km valt er niets meer te bundelen: de bestelwagen rijdt voor één
      adres heen en terug, twee keer, en is daar dertien uur mee bezig. Dat kost
      € 752 — meer dan het droogpakket zelf.

      Wij weigeren die orders niet, maar er staat geen tarief in de wizard. Niet
      omdat het bedrag te hoog is om te tonen, maar omdat het te veel uiteenloopt
      om vooraf vast te leggen: of de rit alleen gaat of met een tweede adres
      erbij scheelt een paar honderd euro, en dat weten we pas bij het plannen.
      Eén vast bedrag zou dus óf de klant te veel vragen, óf ons verlies laten
      rijden. Vandaar een prijs per order, binnen één werkdag.
    */
    nr: 7,
    tot: 300,
    band: "200 – 300 km",
    tarief: null,
    spoed: null,
    belofte: "transportprijs op maat, binnen één werkdag",
    ritme: "geen",
  },
  {
    /*
      Verder dan 300 km loopt de kost van € 1.100 tot € 1.600 — tussen Nijmegen
      en Groningen zit € 500 verschil. Zelfde aanpak als zone 7, alleen nog
      uitgesprokener: wij rijden, we zetten er eerst een cijfer op.
    */
    nr: 8,
    tot: null,
    band: "meer dan 300 km",
    tarief: null,
    spoed: null,
    belofte: "transportprijs op maat, binnen één werkdag",
    ritme: "geen",
  },
];

export interface Corridor {
  nr: number;
  naam: string;
  /** De snelwegen die deze richting dragen — dit is waarom de indeling bestaat. */
  wegen: string;
  /** Dag van de week waarop we hier rijden: 1 = maandag … 5 = vrijdag. */
  dag: number;
  /** Waar het over gaat, voor de uitleg op het scherm. */
  gebied: string;
}

/**
 * Vier corridors, geen windstreken: een rit blijft op één snelwegas, want dat
 * is wat twee stops in dezelfde rit mogelijk maakt. Welke dag bij welke
 * corridor hoort is vrij te kiezen — dit is de planning, niet de rekenkunde.
 */
export const CORRIDORS: readonly Corridor[] = [
  { nr: 0, naam: "noord", wegen: "A12 en E19", dag: 1, gebied: "Noord-Brabant en Zeeland" },
  { nr: 1, naam: "oost", wegen: "E313 en E314", dag: 4, gebied: "Limburg en Nederlands Limburg" },
  { nr: 2, naam: "zuid", wegen: "E19 en E411", dag: 2, gebied: "Brussel en Wallonië" },
  { nr: 3, naam: "west", wegen: "E17 en N49", dag: 3, gebied: "Gent en West-Vlaanderen" },
];

/**
 * De tweede leverdag voor zone 3 en 4. Vrijdag is bewust de inhaaldag: wat op
 * de corridordag niet paste of te laat besteld werd, gaat dan mee, en spoedritten
 * kunnen die dag opgevangen worden zonder een geplande rit te breken.
 */
export const INHAALDAG = 5;

/** Zaterdag en zondag staat er niemand in het magazijn. */
export const WERKDAGEN = [1, 2, 3, 4, 5];

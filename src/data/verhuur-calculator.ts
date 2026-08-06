/**
 * De vragenreeks van de verhuurcalculator. Staat los van de pagina zodat een
 * test kan bewaken dat elk antwoord `parseConfig` overleeft — de waarden hier
 * moeten overeenkomen met WAT_VALUES, PD_VALUES en CD_VALUES in lib/verhuur.
 */
export type QuestionKey = "size" | "wat" | "pleisterdikte" | "chapedikte" | "verwarming";

export interface Option {
  v: string;
  label: string;
  sub?: string;
}

export interface Question {
  key: QuestionKey;
  title: string;
  /** de asterisk achter de vraagtitel */
  required?: boolean;
  sub: string;
  options: Option[];
}

export const QUESTIONS: Question[] = [
  {
    key: "size",
    title: "Hoe groot is uw woning",
    required: true,
    sub: "Kies de oppervlakte die het best bij uw project past. Wij rekenen daarmee het te drogen volume uit.",
    options: [
      { v: "40", label: "Ruimte kleiner dan 40 m²" },
      { v: "60", label: "Gebouw kleiner dan 60 m²" },
      { v: "100", label: "Gebouw kleiner dan 100 m²" },
      { v: "140", label: "Gebouw kleiner dan 140 m²" },
      { v: "180", label: "Gebouw kleiner dan 180 m²" },
      { v: "220", label: "Gebouw kleiner dan 220 m²" },
      { v: "260", label: "Gebouw kleiner dan 260 m²" },
    ],
  },
  {
    key: "wat",
    title: "Wat wilt u drogen",
    required: true,
    sub: "Pleisterwerk en chape geven hun vocht anders af. Dit bepaalt de capaciteit en de droogtijd.",
    options: [
      { v: "pleister", label: "Pleisterwerk" },
      { v: "chape", label: "Chape" },
      { v: "beide", label: "Pleisterwerk + Chape" },
      { v: "waterschade", label: "Waterschade" },
    ],
  },
  {
    key: "pleisterdikte",
    title: "Hoe dik is het pleisterwerk",
    required: true,
    sub: "Dikker pleisterwerk bevat meer water en vraagt meer droogtijd.",
    options: [
      { v: "1,5", label: "Pleisterdikte 1,5 cm" },
      { v: "2", label: "Pleisterdikte 2 cm" },
      { v: "3", label: "Pleisterdikte 3 cm" },
      { v: "onbekend", label: "Dat weet ik niet", sub: "Wij rekenen met een gemiddelde van 2 cm" },
    ],
  },
  {
    key: "chapedikte",
    title: "Hoe dik is de chape",
    required: true,
    sub: "Chape is meestal de grootste vochtbron in een nieuwbouw.",
    options: [
      { v: "5", label: "Chape 5 cm" },
      { v: "6", label: "Chape 6 cm" },
      { v: "8", label: "Chape 8 cm" },
      { v: "onbekend", label: "Dat weet ik niet", sub: "Wij rekenen met een gemiddelde van 6 cm" },
    ],
  },
  {
    key: "verwarming",
    title: "Zorgt u zelf voor verwarming?",
    sub: "Drogen werkt enkel goed boven 15 °C. Zorgt u niet zelf voor warmte, dan voegen wij elektrische kachels toe.",
    options: [
      { v: "ja", label: "Ja", sub: "De ruimte wordt door mij verwarmd" },
      { v: "nee", label: "Nee", sub: "Voeg elektrische kachels toe aan mijn pakket" },
    ],
  },
];

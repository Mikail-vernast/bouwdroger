/**
 * De vragenreeks van de verhuurcalculator. Staat los van de pagina zodat een
 * test kan bewaken dat elk antwoord `parseConfig` overleeft.
 *
 * De maten en diktes worden uit de catalogus opgebouwd in plaats van hier
 * opgesomd. Ze stonden er als vaste lijst en liepen uiteen met wat Vernast
 * verkoopt — 1,5 cm pleister en 8 cm chape bestonden nergens als pakket — en
 * die drift is met een gedeelde bron niet meer mogelijk.
 */
import { CD_VALUES, PD_VALUES, SIZE_VALUES } from "../lib/verhuur.js";
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

/** De dikte waar "Dat weet ik niet" op uitkomt: de middelste die bestaat. */
const GEMIDDELDE_PD = PD_VALUES[Math.floor(PD_VALUES.length / 2)];
const GEMIDDELDE_CD = CD_VALUES[Math.floor(CD_VALUES.length / 2)];

export const QUESTIONS: Question[] = [
  {
    key: "size",
    title: "Hoe groot is uw woning",
    required: true,
    sub: "Kies de oppervlakte die het best bij uw project past. Wij rekenen daarmee het te drogen volume uit.",
    options: SIZE_VALUES.map((v) => ({
      v,
      label: Number(v) <= 40 ? `Ruimte kleiner dan ${v} m²` : `Gebouw kleiner dan ${v} m²`,
    })),
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
      ...PD_VALUES.map((v) => ({ v, label: `Pleisterdikte ${v} cm` })),
      { v: "onbekend", label: "Dat weet ik niet", sub: `Wij rekenen met een gemiddelde van ${GEMIDDELDE_PD} cm` },
    ],
  },
  {
    key: "chapedikte",
    title: "Hoe dik is de chape",
    required: true,
    sub: "Chape is meestal de grootste vochtbron in een nieuwbouw.",
    options: [
      ...CD_VALUES.map((v) => ({ v, label: `Chape ${v} cm` })),
      { v: "onbekend", label: "Dat weet ik niet", sub: `Wij rekenen met een gemiddelde van ${GEMIDDELDE_CD} cm` },
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

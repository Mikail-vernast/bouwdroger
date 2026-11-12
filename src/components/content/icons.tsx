/**
 * De iconen die de inhoudspagina's nodig hebben en die nog niet in de
 * v3-set (`src/components/home-v3/icons.tsx`) staan.
 *
 * Waarom hier en niet uit lucide-react: op de oude schil droegen /renovatie,
 * /nieuwbouw en /waterschade lucide-iconen én emoji's door elkaar — een 🦠
 * naast een `<Thermometer>` naast een 💸. Emoji's tekenen per besturingssysteem
 * anders (en op een Mac in kleur), en de lijndikte van lucide wijkt genoeg af
 * van de designset om naast elkaar zichtbaar te vloeken. Deze volgen exact de
 * conventie van de v3-set: viewBox 24, lijnwerk, ronde uiteinden, maat via een
 * `size`-prop.
 */

interface IconProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
}

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Het kruis in de kolom "zonder bouwdroger". */
export const XIcon = ({ size = 16, strokeWidth = 2.6 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...strokeProps}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

/** Luchtbeweging — de ventilator die de verzadigde laag boven de vloer wegblaast. */
export const WindIcon = ({ size = 20, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...strokeProps}>
    <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
    <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
  </svg>
);

/** Temperatuur — onder 15 °C droogt een condensdroger traag. */
export const ThermoIcon = ({ size = 20, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...strokeProps}>
    <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" />
  </svg>
);

/** De vochtmeting: een meter met naald. */
export const GaugeIcon = ({ size = 20, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...strokeProps}>
    <path d="M3.5 18a9 9 0 1 1 17 0" />
    <path d="M12 18l4.2-5.6" />
    <circle cx="12" cy="18" r="1.4" />
  </svg>
);

/** Tijd — de huurtermijn, en bij waterschade de uren die tellen. */
export const ClockIcon = ({ size = 20, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...strokeProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5V12l3.2 2" />
  </svg>
);

/** Prijs — het prijskaartje op /prijzen en de pakketkeuze. */
export const TagIcon = ({ size = 20, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...strokeProps}>
    <path d="M20.6 12.6 12 21.2l-8.6-8.6V3.4h9.2z" />
    <circle cx="8.2" cy="8.2" r="1.5" />
  </svg>
);

/** Waarschuwing — wat er misgaat als u wacht. */
export const WarnIcon = ({ size = 20, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...strokeProps}>
    <path d="m21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3z" />
    <path d="M12 9v4M12 17h.01" />
  </svg>
);

/** Lagen — de opbouw van chape, isolatie en vloer. */
export const LayersIcon = ({ size = 20, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...strokeProps}>
    <path d="m12 2.6 9 4.7-9 4.7-9-4.7z" />
    <path d="m3 12.4 9 4.7 9-4.7" />
    <path d="m3 17 9 4.7 9-4.7" />
  </svg>
);

/** Een werf met meerdere toestellen — het raster van de machinepagina. */
export const GridIcon = ({ size = 20, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...strokeProps}>
    <rect x="3" y="3" width="7.5" height="7.5" rx="1.6" />
    <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.6" />
    <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.6" />
    <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.6" />
  </svg>
);

/** Plaatshouder voor een foto die nog gemaakt moet worden. */
export const FotoIcon = ({ size = 28, strokeWidth = 1.6 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...strokeProps}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <circle cx="8.5" cy="10" r="1.5" />
    <path d="m4 17 4.5-4.5 3 3L15 12l5 5" />
  </svg>
);

/** Druppel met een pijl omlaag — water dat dieper in de constructie trekt. */
export const LekIcon = ({ size = 20, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...strokeProps}>
    <path d="M12 2.5s5.5 6.3 5.5 10.2a5.5 5.5 0 0 1-11 0C6.5 8.8 12 2.5 12 2.5z" />
    <path d="M12 9.5v5M9.8 12.3 12 14.5l2.2-2.2" />
  </svg>
);

/*
  De zes iconen voor "Wat u moet doen in de eerste 48 uur" op /waterschade.

  Daar stonden grote cijfers 01 tot 06 in lichtgrijs. Die vertelden alleen de
  volgorde, en die staat al in de leesrichting van het raster; wie de kaarten
  scant zag zes keer hetzelfde grijze blokje. Een icoon zegt in één oogopslag
  waar de stap over gaat — stroom, kraan, foto, pomp, doos, droger.
*/

/** Bliksem met een streep erdoor — zet de stroom af in de natte zone. */
export const StroomUitIcon = ({ size = 20, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...strokeProps}>
    <path d="M13 2.6 4.4 13.4h7.2l-.9 7.4 8.6-10.8h-7.2z" />
    <path d="M3.2 3.2 20.8 20.8" />
  </svg>
);

/** Afsluitkraan op een leiding — draai de hoofdkraan dicht. */
export const KraanIcon = ({ size = 20, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...strokeProps}>
    <path d="M2.6 15h4.2M17.2 15h4.2" />
    <rect x="6.8" y="11.6" width="10.4" height="6.8" rx="1.8" />
    <path d="M12 11.6V6.4M8.8 6.4h6.4" />
  </svg>
);

/** Golflijn met een pijl eruit — pomp of zuig het staande water weg. */
export const PompIcon = ({ size = 20, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...strokeProps}>
    <path d="M2.5 18.4c1.6 0 1.6 1.5 3.2 1.5s1.6-1.5 3.2-1.5 1.6 1.5 3.2 1.5 1.6-1.5 3.2-1.5 1.6 1.5 3.2 1.5" />
    <path d="M12 15.2V4.2" />
    <path d="m8.4 7.8 3.6-3.6 3.6 3.6" />
  </svg>
);

/** Doos — tapijt, karton en losse meubels gaan de ruimte uit. */
export const DoosIcon = ({ size = 20, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...strokeProps}>
    <path d="M3.4 7.8 12 3.3l8.6 4.5v8.4L12 20.7l-8.6-4.5z" />
    <path d="m3.4 7.8 8.6 4.5 8.6-4.5M12 12.3v8.4" />
  </svg>
);

/** Toestel met luchtstromen — de droger die aan het werk gaat. */
export const DrogerIcon = ({ size = 20, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...strokeProps}>
    <rect x="2.8" y="5.4" width="11.4" height="13.2" rx="2.2" />
    <circle cx="8.5" cy="12" r="2.7" />
    <path d="M16.8 9.2h3.4M16.8 12.4h4.4M16.8 15.6h2.9" />
  </svg>
);

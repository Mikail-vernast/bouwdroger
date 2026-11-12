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

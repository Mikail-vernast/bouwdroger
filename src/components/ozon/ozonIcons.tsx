/**
 * De iconen van /ozonbehandeling.
 *
 * Eigen set, niet die uit `home-v3/icons.tsx`. Daar staan de glyphs van de
 * verhuurkant — een druppel, een huisje, een bliksem — en die zeiden op deze
 * pagina zes keer ongeveer hetzelfde: "iets met vocht". Een huisstofmijt is
 * geen blaadje en een geur is geen druppel.
 *
 * Hier draagt elk kaartje het ding waar het over gaat: een sporenkolonie, een
 * mijt, een neus, een keldertrap, water dat stijgt, en een sleutel voor de
 * overdracht. Ze zijn geen van alle elders in de app nodig, dus ze staan naast
 * de pagina in plaats van in de gedeelde set — die groeit anders vol met
 * glyphs die één plek dienen.
 *
 * Allemaal 24×24, outline, zodat ze in één rij dezelfde lijndikte en optische
 * massa houden.
 */

interface IconProps {
  size?: number;
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

/**
 * Het schild boven "Veilig & verantwoord".
 *
 * Staat hier en niet in `home-v3/icons.tsx`: die set bedient de verhuurkant en
 * had nog geen schild. Eén glyph toevoegen aan een gedeeld bestand voor één
 * plek maakt die set groter voor iedereen; hier kost het niets.
 */
export const SchildIcon = ({ size = 13 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={2} {...stroke}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

/** Schimmel & sporen — een kolonie, geen enkele bol. */
export const SporenIcon = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.7} {...stroke}>
    <circle cx="9" cy="9.5" r="4" />
    <circle cx="16.5" cy="14" r="3" />
    <circle cx="7" cy="17.5" r="2.2" />
    <path d="M16.5 5.5h.01M20 9h.01M12.5 19.5h.01" strokeWidth={2.2} />
  </svg>
);

/**
 * Huisstofmijt — ovaal lijf, segmentlijn, zes geknikte poten.
 *
 * De eerste versie had rechte poten die gelijkmatig naar buiten staken; die
 * leest als een zonnetje, niet als een beestje. Een knik in elke poot is het
 * hele verschil.
 */
export const MijtIcon = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.7} {...stroke}>
    <ellipse cx="12" cy="13" rx="4.2" ry="5.6" />
    <path d="M12 7.6v10.6" />
    <path d="M7.9 9.8 5.6 7.9 4 8.9M7.8 13H5.3l-1.5 1.2M7.9 16.2 5.6 18.1 4 17.1" />
    <path d="M16.1 9.8l2.3-1.9 1.6 1M16.2 13h2.5l1.5 1.2M16.1 16.2l2.3 1.9 1.6-1" />
  </svg>
);

/**
 * Hardnekkige geuren — een neus.
 *
 * Eerst stond hier een druppel, maar die staat op deze pagina al voor water.
 * Geurlijnen (de golfjes die opstijgen) waren het alternatief; een neus zegt
 * directer dat het over rúíken gaat en niet over damp.
 *
 * Bewust van vóren en niet en profiel. Een profielneus is op 18 pixels een
 * haakje: naast elkaar getest las hij als een vraagteken, terwijl de brug met
 * twee neusvleugels meteen een neus is.
 */
export const NeusIcon = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.7} {...stroke}>
    <path d="M9 4v3.6c0 2.2-2 3.3-2 6 0 1.7 1.3 3 3 3h4c1.7 0 3-1.3 3-3 0-2.7-2-3.8-2-6V4" />
    <path d="M9.6 14.2c.8.7 1.6 1 2.4 1s1.6-.3 2.4-1" />
  </svg>
);

/** Kelders & kruipruimtes — een trap die naar beneden gaat. */
export const KelderIcon = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.7} {...stroke}>
    <path d="M3 4v16h18" />
    <path d="M7 8v4h4v4h4v4" />
    <path d="M7 8h4" />
  </svg>
);

/** Na waterschade — water dat in een ruimte staat. */
export const WaterschadeIcon = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.7} {...stroke}>
    <path d="M4 20V8l8-5 8 5v12" />
    <path d="M3.5 15c1.4 0 1.4 1.4 2.8 1.4S7.7 15 9.1 15s1.4 1.4 2.8 1.4S13.3 15 14.7 15s1.4 1.4 2.8 1.4S18.9 15 20.3 15" />
    <path d="M3.5 19c1.4 0 1.4 1.4 2.8 1.4S7.7 19 9.1 19s1.4 1.4 2.8 1.4S13.3 19 14.7 19s1.4 1.4 2.8 1.4S18.9 19 20.3 19" />
  </svg>
);

/** Voor verhuur of verkoop — de sleutel die van hand wisselt. */
export const SleutelIcon = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.7} {...stroke}>
    <circle cx="7.5" cy="16.5" r="3.5" />
    <path d="M10 14 20 4" />
    <path d="M17 7l2.5 2.5M14.5 9.5 17 12" />
  </svg>
);

/**
 * De vier geanimeerde iconen van het techniekblok op /waterschade-luchtkussen-techniek.
 *
 * Waarom geen icoon uit `content/icons`: die zijn stil en staan er in `--red`.
 * Zes rode kaartjes naast elkaar lazen als één rood vlak, en het verschil
 * tussen "drogen gebeurt aan het oppervlak" en "hoe droger, hoe sneller" viel
 * weg (eigenaar, 26-11-2026). Een druppel die valt, een thermometer die zakt
 * en lijnen die versnellen vertellen dat verschil zonder dat je de tekst al
 * gelezen moet hebben.
 *
 * De beweging zit volledig in CSS (`src/styles/luchtkussen.css`, `.lka-*`),
 * niet in JavaScript: deze pagina wordt geprerenderd, en een animatie die pas
 * ná hydratie start geeft een zichtbare sprong. `prefers-reduced-motion` zet
 * alles stil; de iconen blijven dan gewoon leesbaar staan.
 */

const BOX = { viewBox: "0 0 32 32", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" } as const;

/** Drogen gebeurt aan het oppervlak: een druppel valt op het materiaal en trekt weg. */
export function DruppelAnim() {
  return (
    <svg className="lka lka-druppel" {...BOX} aria-hidden="true">
      {/* Twee druppels, een halve ronde uit elkaar: met één bleef het icoon een
          halve seconde per ronde een kaal streepje. */}
      <path className="lka-drop" d="M16 5c0 0 5 6.3 5 9.3a5 5 0 0 1-10 0C11 11.3 16 5 16 5Z" strokeWidth="1.8" />
      <path className="lka-drop lka-drop2" d="M16 5c0 0 5 6.3 5 9.3a5 5 0 0 1-10 0C11 11.3 16 5 16 5Z" strokeWidth="1.8" />
      <path className="lka-vlak" d="M6 25h20" strokeWidth="1.8" />
      <path className="lka-rimpel" d="M11.5 25c0-1.6 2-2.9 4.5-2.9s4.5 1.3 4.5 2.9" strokeWidth="1.5" />
    </svg>
  );
}

/** Hoe droger de lucht, hoe sneller: drie luchtlijnen die versnellen. */
export function SnelheidAnim() {
  return (
    <svg className="lka lka-snelheid" {...BOX} aria-hidden="true">
      <path className="lka-lijn lka-l1" d="M5 11h14" strokeWidth="1.8" />
      <path className="lka-lijn lka-l2" d="M5 16h19" strokeWidth="1.8" />
      <path className="lka-lijn lka-l3" d="M5 21h11" strokeWidth="1.8" />
      <path className="lka-punt" d="m22 12 4 4-4 4" strokeWidth="1.8" />
    </svg>
  );
}

/** Ook in een koude ruimte: de kolom zakt van warm naar koud, het icoon blijft werken. */
export function ThermoAnim() {
  return (
    <svg className="lka lka-thermo" {...BOX} aria-hidden="true">
      <path d="M19 17.8V7.5a3 3 0 0 0-6 0v10.3a5.5 5.5 0 1 0 6 0Z" strokeWidth="1.8" />
      <rect className="lka-kolom" x="14.6" y="9" width="2.8" height="15" rx="1.4" stroke="none" />
      <path className="lka-streep" d="M21.5 10h2.5M21.5 13.5h2.5" strokeWidth="1.5" />
    </svg>
  );
}

/** De rest van de kamer blijft met rust: alleen de strook onder de folie werkt. */
export function ZoneAnim() {
  return (
    <svg className="lka lka-zone" {...BOX} aria-hidden="true">
      <rect className="lka-kamer" x="4" y="7" width="24" height="19" rx="2.5" strokeWidth="1.8" />
      <rect className="lka-strook" x="6.6" y="18" width="8" height="5.6" rx="1.2" stroke="none" />
      <path className="lka-rust" d="M18 21.5h7" strokeWidth="1.6" />
    </svg>
  );
}

export const WAAROM_ANIM = [DruppelAnim, SnelheidAnim, ThermoAnim, ZoneAnim];

/**
 * De tekening naast de uitleg: waar de lucht binnenkomt, waar ze langs strijkt
 * en waar ze weer weggaat.
 *
 * Stond er eerst als foto (`luchtkussen-wand-detail.webp`), vlak onder de
 * herofoto van exact dezelfde opstelling. Twee bijna gelijke foto's onder
 * elkaar, en op geen van beide is te zien wélke kant de lucht op gaat — precies
 * wat de tekst ernaast uitlegt.
 *
 * Het viewBox is 100 breed; de kolom is ongeveer 550 px, dus alles wordt met
 * ~5,5 vermenigvuldigd. Vandaar de kleine getallen voor lijndikte en tekst in
 * `.lk-schema` (src/styles/luchtkussen.css).
 */
export function WerkingSchema({ t }: { t: { titel: string; droger: string; toevoer: string; folie: string; nat: string; uitlaat: string } }) {
  return (
    <div className="lk-schema">
      <svg viewBox="0 8 100 64" role="img" aria-label={t.titel}>
        {/* Doorsnede, geen vooraanzicht. Van voren is een folie een rechthoek en
            is er van de luchtstroom niets te zien; in doorsnede zie je waar ze
            binnenkomt, langs welke kant ze strijkt en waar ze weggaat. */}
        <path className="sch-vlak" d="M2 54H98" />
        <rect className="sch-wand" x="15" y="12" width="10" height="42" />
        <rect className="sch-nat" x="15" y="30" width="10" height="24" />
        <text className="sch-op-nat" x="13" y="43" textAnchor="end">{t.nat}</text>

        {/* De folie is bovenaan tegen de wand gekleefd en bolt eronder op. */}
        <path className="sch-folie" d="M25 20C41 23 47 36 47 54H25Z" />

        {/* Toestel rechts, slang naar de onderkant van de zone, en de stroom die
            langs het natte vlak omhoog gaat en bovenaan de zone verlaat. */}
        <rect className="sch-toestel" x="66" y="34" width="20" height="20" rx="2" />
        <rect className="sch-merk" x="70" y="38" width="12" height="4" rx="1" />
        <path className="sch-slang" d="M66 49H44" />
        <path className="sch-stroom" d="M44 50C34 50 30 44 30 36V25" />
        <path className="sch-pijl" d="m27.8 25.4 2.2-2.6 2.2 2.6" />

        <g className="sch-nr">
          <circle cx="76" cy="30" r="2.6" /><text x="76" y="30.9" textAnchor="middle">1</text>
          <circle cx="56" cy="45" r="2.6" /><text x="56" y="45.9" textAnchor="middle">2</text>
          <circle cx="44" cy="31" r="2.6" /><text x="44" y="31.9" textAnchor="middle">3</text>
          <circle cx="30" cy="17" r="2.6" /><text x="30" y="17.9" textAnchor="middle">4</text>
        </g>

        {/* De bijschriften onder de tekening: vier labels in het vlak zelf
            liepen door de folie en door elkaar. */}
        <g className="sch-leg">
          <circle cx="4" cy="62" r="2.4" /><text x="8.6" y="62.9">{t.droger}</text>
          <circle cx="52" cy="62" r="2.4" /><text x="56.6" y="62.9">{t.toevoer}</text>
          <circle cx="4" cy="70" r="2.4" /><text x="8.6" y="70.9">{t.folie}</text>
          <circle cx="52" cy="70" r="2.4" /><text x="56.6" y="70.9">{t.uitlaat}</text>
          <text className="sch-legnr" x="4" y="62.9" textAnchor="middle">1</text>
          <text className="sch-legnr" x="52" y="62.9" textAnchor="middle">2</text>
          <text className="sch-legnr" x="4" y="70.9" textAnchor="middle">3</text>
          <text className="sch-legnr" x="52" y="70.9" textAnchor="middle">4</text>
        </g>
      </svg>
    </div>
  );
}

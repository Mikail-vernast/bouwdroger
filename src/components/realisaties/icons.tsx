/**
 * De iconen van de realisatiepagina's, overgetrokken uit de inline SVG's van
 * vernast-vochtbestrijding.be. Ze staan hier als component en niet als
 * lucide-import, omdat het deels eigen tekeningen zijn (de drie tags) die in
 * geen enkele iconenset zo voorkomen.
 */

type P = { className?: string };

/**
 * `width`/`height` staan er als terugval op. De CSS geeft elk icoon zijn maat
 * per plek (`.rz-tag svg`, `.rl-go svg`, …); zonder deze default rekt een SVG
 * die buiten zo'n regel valt zich uit tot de volle breedte van zijn ouder.
 */
const svg = (children: React.ReactNode, extra?: Record<string, unknown>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...extra}>
    {children}
  </svg>
);

/** Alle projecten — het rasterblokje van de filter. */
export const GridIcon = (p: P) =>
  svg(
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>,
    p
  );

/** Bouwvocht — de druppel. */
export const DropIcon = (p: P) => svg(<path d="M12 2.7s6 6.4 6 10.3a6 6 0 0 1-12 0c0-3.9 6-10.3 6-10.3Z" />, p);

/** Waterschade — het schild. */
export const ShieldIcon = (p: P) => svg(<path d="M12 2.5 20 6v6c0 5-3.4 8.4-8 9.5-4.6-1.1-8-4.5-8-9.5V6l8-3.5Z" />, p);

/** Vochtbeheersing — de luchtstroom. */
export const FlowIcon = (p: P) =>
  svg(
    <>
      <path d="M3 8h11a3 3 0 1 0-3-3" />
      <path d="M3 13h15a3 3 0 1 1-3 3" />
      <path d="M3 18h8" />
    </>,
    p
  );

/** Bouwdroging — de pijl omlaag uit de hero-tags. */
export const DryIcon = (p: P) => svg(<path d="M12 22V8M5 15l7 7 7-7" />, p);

/** Vochtmeting — het kruis uit de hero-tags. */
export const MeasureIcon = (p: P) => svg(<path d="M12 2v20M2 12h20" />, p);

/** Klimaatbeheersing — het huis uit de hero-tags. */
export const HouseIcon = (p: P) => svg(<path d="M4 20h16M6 20V8l6-4 6 4v12" />, p);

export const PinIcon = (p: P) =>
  svg(
    <>
      <path d="M12 2a7 7 0 0 1 7 7c0 4-7 13-7 13S5 13 5 9a7 7 0 0 1 7-7Z" />
      <circle cx="12" cy="9" r="2.5" />
    </>,
    p
  );

export const ArrowRight = (p: P) => svg(<><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>, { ...p, strokeWidth: 2.2 });
export const ArrowLeft = (p: P) => svg(<><path d="M19 12H5" /><path d="m12 19-7-7 7-7" /></>, { ...p, strokeWidth: 2.2 });
export const XIcon = (p: P) => svg(<path d="M18 6 6 18M6 6l12 12" />, { ...p, strokeWidth: 2.5 });

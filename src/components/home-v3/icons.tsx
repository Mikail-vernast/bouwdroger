/**
 * Inline icons for the Home V3 sections.
 *
 * The design ships hand-written SVG rather than an icon font, so these mirror it
 * exactly instead of swapping in lucide equivalents (whose stroke weights and
 * viewboxes differ enough to visibly change the layout).
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

export const PhoneIcon = ({ size = 15 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={2} {...strokeProps}>
    <path d="M22 16.92V21a1 1 0 0 1-1.11 1A19.86 19.86 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.29 1L7 10.5a16 16 0 0 0 6.5 6.5l1.75-1.8a1 1 0 0 1 1-.29l4 1a1 1 0 0 1 .75 1Z" />
  </svg>
);

export const MailIcon = ({ size = 15, strokeWidth = 2 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...strokeProps}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 6 10-6" />
  </svg>
);

export const CaretIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" strokeWidth={2.5} {...strokeProps}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

/** The design draws this arrow at 2.4 on buttons and 2.6 on the "Bekijken" links. */
export const ArrowRightIcon = ({ size = 15, strokeWidth = 2.4 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...strokeProps}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export const CheckIcon = ({ size = 13, strokeWidth = 2.6 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...strokeProps}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const CartIcon = ({ size = 21 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.8} {...strokeProps}>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

export const GoogleIcon = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48">
    <path
      fill="#4285F4"
      d="M45 24c0-1.6-.1-2.7-.4-4H24v8h12c-.2 2-1.5 5-4.7 7l6.4 5c3.7-3.5 7.3-8.6 7.3-16z"
    />
    <path
      fill="#34A853"
      d="M24 46c6 0 11-2 14.7-5.4l-6.4-5C30.5 36.9 27.6 38 24 38c-6 0-11.1-4-12.9-9.5l-6.7 5.2C8.1 41.1 15.4 46 24 46z"
    />
    <path
      fill="#FBBC05"
      d="M11.1 28.5c-.5-1.4-.8-2.9-.8-4.5s.3-3.1.7-4.5l-6.7-5.2C2.9 17.3 2 20.5 2 24s.9 6.7 2.4 9.7l6.7-5.2z"
    />
    <path
      fill="#EA4335"
      d="M24 10c4.2 0 7 1.8 8.6 3.3l5.7-5.6C34.9 4.3 30 2 24 2 15.4 2 8.1 6.9 4.4 14.3l6.7 5.2C12.9 14 18 10 24 10z"
    />
  </svg>
);

export const BoltIcon = ({ size = 19 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.8} {...strokeProps}>
    <path d="M13 2 3 14h9l-1 8 10-12h-9z" />
  </svg>
);

export const MoldIcon = ({ size = 19 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.8} {...strokeProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12c0-2.5 2-4 4-4s4 1.5 4 4-2 4-4 4-4-1.5-4-4z" />
  </svg>
);

export const HouseIcon = ({ size = 19 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.8} {...strokeProps}>
    <path d="M3 21V9l9-6 9 6v12" />
    <path d="M9 21v-6h6v6" />
  </svg>
);

export const TruckIcon = ({ size = 21 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.8} {...strokeProps}>
    <path d="M10 17h4V5H2v12h3" />
    <path d="M20 17h2v-3.3a4 4 0 0 0-1.2-2.9L19 9h-5v8h1" />
    <circle cx="7.5" cy="17.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </svg>
);

export const ChecklistIcon = ({ size = 21 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.8} {...strokeProps}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="m9 15 2 2 4-4" />
  </svg>
);

export const RefreshIcon = ({ size = 21 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.8} {...strokeProps}>
    <path d="M21 12a9 9 0 1 1-6.2-8.6" />
    <path d="M21 4v5h-5" />
  </svg>
);

export const SupportIcon = ({ size = 21 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.8} {...strokeProps}>
    <path d="M5 18 3 20V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2z" />
    <path d="M8 12h.01M12 12h.01M16 12h.01" />
  </svg>
);

export const DropIcon = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.9} {...strokeProps}>
    <path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" />
  </svg>
);

export const BrushIcon = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.9} {...strokeProps}>
    <path d="M2 22 4 18 15 7l4 4L8 22z" />
    <path d="m14 4 6 6" />
  </svg>
);

export const CellarIcon = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.9} {...strokeProps}>
    <path d="M3 10h18v11H3z" />
    <path d="M5 10V6a7 7 0 0 1 14 0v4" />
  </svg>
);

export const HouseSmallIcon = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.9} {...strokeProps}>
    <path d="M3 21V9l9-6 9 6v12" />
    <path d="M9 21v-6h6v6" />
  </svg>
);

/** The leaf that marks an eco device on a product chip. */
export const LeafIcon = ({ size = 10 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={2.2} {...strokeProps}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
  </svg>
);

export const InfoIcon = ({ size = 17 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={2} {...strokeProps}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4M12 8h.01" />
  </svg>
);

export const CardIcon = ({ size = 21 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.8} {...strokeProps}>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
  </svg>
);

/** Calendar with a check — the design draws it at two sizes and two heights. */
export const CalendarCheckIcon = ({ size = 21, height = 17 }: IconProps & { height?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.8} {...strokeProps}>
    <rect x="3" y="4" width="18" height={height} rx="2" />
    {height === 17 ? <path d="M8 2v4M16 2v4M3 10h18" /> : <path d="M3 10h18" />}
    <path d="m9 15 2 2 4-4" />
  </svg>
);

export const PinIcon = ({ size = 19 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.8} {...strokeProps}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const UploadIcon = ({ size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.9} {...strokeProps}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="m17 8-5-5-5 5" />
    <path d="M12 3v12" />
  </svg>
);

/** The document chip in the contact form's file list; the design strokes it red. */
export const FileIcon = ({ size = 14 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#C81F2F" strokeWidth={2}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
  </svg>
);

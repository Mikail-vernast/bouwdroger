/**
 * Inline SVG's uit de verhuur-designfiles (lucide-stijl, stroke 1.8–3).
 * Overgenomen zoals ze in de designbestanden staan; enkel afmeting en
 * lijndikte zijn props geworden waar het design ze varieert.
 */
interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

const base = (size: number, strokeWidth: number, className?: string) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className,
  "aria-hidden": true,
  focusable: false as const,
});

export const PhoneIcon = ({ size = 15, strokeWidth = 2, className }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M22 16.92V21a1 1 0 0 1-1.11 1A19.86 19.86 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.29 1L7 10.5a16 16 0 0 0 6.5 6.5l1.75-1.8a1 1 0 0 1 1-.29l4 1a1 1 0 0 1 .75 1Z" />
  </svg>
);

export const MailIcon = ({ size = 15, strokeWidth = 2, className }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 6 10-6" />
  </svg>
);

export const ClockIcon = ({ size = 13, strokeWidth = 2, className }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const CaretIcon = ({ size = 11, strokeWidth = 2.5, className }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const CartIcon = ({ size = 21, strokeWidth = 1.8, className }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

export const ArrowRightIcon = ({ size = 15, strokeWidth = 2.5, className }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export const ArrowLeftIcon = ({ size = 13, strokeWidth = 2.6, className }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </svg>
);

export const CheckIcon = ({ size = 15, strokeWidth = 2.6, className }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const CrossIcon = ({ size = 13, strokeWidth = 3, className }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const WarnIcon = ({ size = 13, strokeWidth = 2.6, className }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M12 9v4M12 17h.01" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);

export const DropletPinIcon = ({ size = 19, strokeWidth = 1.9, className }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M12 2a7 7 0 0 0-7 7c0 3 2 5 3.5 7L12 21l3.5-5C17 14 19 12 19 9a7 7 0 0 0-7-7z" />
    <circle cx="12" cy="9" r="3" />
  </svg>
);

export const TruckIcon = ({ size = 19, strokeWidth = 1.9, className }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M10 17h4V5H2v12h3" />
    <path d="M20 17h2v-3.3a4 4 0 0 0-1.2-2.9L19 9h-5v8h1" />
    <circle cx="7.5" cy="17.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </svg>
);

export const FileCheckIcon = ({ size = 19, strokeWidth = 1.9, className }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="m9 15 2 2 4-4" />
  </svg>
);

export const ChatIcon = ({ size = 19, strokeWidth = 1.9, className }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M5 18 3 20V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2z" />
    <path d="M8 12h.01M12 12h.01M16 12h.01" />
  </svg>
);

export const RefreshIcon = ({ size = 19, strokeWidth = 1.9, className }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M21 12a9 9 0 1 1-6.2-8.6" />
    <path d="M21 4v5h-5" />
  </svg>
);

/* ---------- extra's in de boekingsflow ---------- */

export const ReportIcon = ({ size = 21, strokeWidth = 1.8, className }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M9 15h6M9 11h3" />
  </svg>
);

export const SunIcon = ({ size = 21, strokeWidth = 1.8, className }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />
  </svg>
);

export const CalendarIcon = ({ size = 21, strokeWidth = 1.8, className }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
);

export const CalendarCheckIcon = ({ size = 18, strokeWidth = 2, className }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
    <path d="m9 15 2 2 4-4" />
  </svg>
);

export const StairsIcon = ({ size = 21, strokeWidth = 1.8, className }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M3 21h4v-5h5v-5h5V6h4" />
  </svg>
);

export const PulseIcon = ({ size = 21, strokeWidth = 1.8, className }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

export const HoseIcon = ({ size = 21, strokeWidth = 1.8, className }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M8 3v6a4 4 0 0 0 8 0V3" />
    <path d="M12 13v8" />
    <path d="M8 21h8" />
  </svg>
);

/** Druppel — staat bij de vochtmeting die standaard inbegrepen is. */
export const DropIcon = ({ size = 21, strokeWidth = 1.8, className }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" />
  </svg>
);

/** Bliksem — staat bij de werfstroomkast. */
export const BoltIcon = ({ size = 21, strokeWidth = 1.8, className }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M13 2 3 14h9l-1 8 10-12h-9z" />
  </svg>
);

export const PumpIcon = ({ size = 21, strokeWidth = 1.8, className }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M12 22V12" />
    <path d="M5 12h14l-2-5H7z" />
    <path d="M9 22h6" />
    <path d="M12 7V2" />
  </svg>
);

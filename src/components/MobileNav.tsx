import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BEDRIJF,
  ONTDEK,
  PAKKETTEN,
  SERVICE,
  TOESTELLEN,
  VERNAST_GROEP,
} from "@/data/navigation";
import { CONTACT } from "@/lib/site";
import "@/styles/mobile-nav.css";

/**
 * De mobiele navigatie van beide schillen.
 *
 * Onder 1160px zet elke pagina-stylesheet `.nav-menu{display:none}` — het
 * desktopmenu verdween daar zonder vervanging, en elf navigatie-items waren op
 * een telefoon alleen nog via de footer bereikbaar.
 *
 * De vorm komt van vernast-vochtbestrijding.be, waar dit menu al draait: een
 * schermvullend maroon paneel dat van onderaf omhoog schuift, genummerde
 * koppen, uitklapbare groepen met categoriechips, en onderaan de offerteknop
 * met het telefoonnummer. Zo herkent iemand die van de ene Vernast-site naar
 * de andere gaat hetzelfde menu.
 *
 * Het paneel staat bewust búiten `<header>`: `.hdr.tucked` zet een `transform`,
 * en een transform maakt van het element het bevattingsblok voor `position:
 * fixed`-kinderen — het menu zou dan met de balk mee omhoog schuiven.
 */

interface MenuLink {
  label: string;
  /** Intern pad. */
  path?: string;
  /** Externe URL — de zusterbedrijven staan op een eigen domein. */
  href?: string;
}

/** Een categorie binnen één uitklapbare rij; de chip mag weg bij één groep. */
interface Categorie {
  chip?: string;
  items: MenuLink[];
}

interface Rij {
  id: string;
  label: string;
  categorieen: Categorie[];
}

const UITKLAPBAAR: Rij[] = [
  {
    id: "bouwdroging",
    label: "Bouwdroging",
    categorieen: [
      { chip: "Pakketten", items: PAKKETTEN },
      { chip: "Toestellen", items: TOESTELLEN },
      { chip: "Levering & service", items: SERVICE },
    ],
  },
  { id: "drogen", label: "Alles over drogen", categorieen: [{ items: ONTDEK }] },
  { id: "groep", label: "Vernast Group", categorieen: [{ items: VERNAST_GROEP }] },
];

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" strokeWidth={2} {...strokeProps}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

const CaretDown = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" strokeWidth={2.2} {...strokeProps}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" strokeWidth={2.4} {...strokeProps}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const PhoneGlyph = () => (
  <svg viewBox="0 0 24 24" strokeWidth={2} {...strokeProps}>
    <path d="M22 16.92V21a1 1 0 0 1-1.11 1A19.86 19.86 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.29 1L7 10.5a16 16 0 0 0 6.5 6.5l1.75-1.8a1 1 0 0 1 1-.29l4 1a1 1 0 0 1 .75 1Z" />
  </svg>
);

/** De hamburger. Hoort in de `.navpill`, naast het logo. */
export const MobileNavButton = ({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    className="mnav-btn"
    aria-label={open ? "Menu sluiten" : "Menu openen"}
    aria-expanded={open}
    aria-controls="mobiel-menu"
    onClick={onClick}
  >
    <i />
    <i />
    <i />
  </button>
);

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  /** Welke rij openstaat, of `null` als ze allemaal dicht zijn. */
  groep: string | null;
  onGroep: (id: string | null) => void;
  /** Het witte logo van de schil waarin het menu draait. */
  logo?: string;
}

const MobileNav = ({
  open,
  onClose,
  groep,
  onGroep,
  logo = "/vernast/logo-horizontal-white.webp",
}: MobileNavProps) => {
  const { pathname } = useLocation();
  const panelRef = useRef<HTMLDivElement>(null);
  const teruggeefFocus = useRef<HTMLElement | null>(null);

  // Sluiten bij navigatie: het paneel blijft anders over de nieuwe pagina staan.
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    teruggeefFocus.current = document.activeElement as HTMLElement | null;
    // De sluitknop is het eerste wat een screenreader tegenkomt; zonder deze
    // sprong staat de focus nog op de pagina onder het paneel.
    panelRef.current?.querySelector<HTMLElement>(".mnav-close")?.focus();

    const vorigeOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    // Wie het venster breder sleept of zijn telefoon draait, krijgt boven
    // 1160px het gewone menu terug; het paneel wordt dan door CSS verborgen en
    // moet ook echt dicht, anders blijft de scroll van de pagina op slot.
    const breed = window.matchMedia("(min-width: 1161px)");
    const onBreed = () => {
      if (breed.matches) onClose();
    };

    document.addEventListener("keydown", onKey);
    breed.addEventListener("change", onBreed);

    return () => {
      document.removeEventListener("keydown", onKey);
      breed.removeEventListener("change", onBreed);
      document.body.style.overflow = vorigeOverflow;
      teruggeefFocus.current?.focus?.();
    };
  }, [open, onClose]);

  /** 01, 02, … doorlopend over de uitklapbare én de losse rijen. */
  const nummer = (i: number) => String(i + 1).padStart(2, "0");

  /** Bij het sluiten weer zonder vertraging, anders blijft het paneel hangen. */
  const rise = (i: number) => ({ transitionDelay: open ? `${0.1 + i * 0.05}s` : "0s" });

  return (
    <div
      className={`mnav${open ? " is-open" : ""}`}
      id="mobiel-menu"
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Hoofdmenu"
    >
      <div className="mnav-h">
        <Link to="/" aria-label="Naar de homepage">
          <img src={logo} alt="Vernast" width={1600} height={268} decoding="async" />
        </Link>
        <button type="button" className="mnav-close" aria-label="Menu sluiten" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>

      <div className="mnav-list">
        {UITKLAPBAAR.map((rij, i) => (
          <div
            key={rij.id}
            className={`mnav-acc mnav-rise${groep === rij.id ? " is-on" : ""}`}
            style={rise(i)}
          >
            <button
              type="button"
              className="mnav-ix"
              aria-expanded={groep === rij.id}
              onClick={() => onGroep(groep === rij.id ? null : rij.id)}
            >
              <span className="n">{nummer(i)}</span>
              <span className="t">{rij.label}</span>
              <CaretDown className="c" />
            </button>

            <div className="mnav-sub">
              <div>
                {rij.categorieen.map((cat) => (
                  <div key={cat.chip ?? rij.id}>
                    {cat.chip ? <span className="mnav-cat">{cat.chip}</span> : null}
                    <ul>
                      {/* Sleutel op het label, niet op het pad: vier pakketten
                          wijzen naar dezelfde calculator. */}
                      {cat.items.map((item) => (
                        <li key={item.label}>
                          {item.href ? (
                            <a href={item.href}>{item.label}</a>
                          ) : (
                            <Link to={item.path ?? "/"}>{item.label}</Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="sluit" />
              </div>
            </div>
          </div>
        ))}

        {BEDRIJF.map((item, i) => (
          <div
            key={item.path}
            className="mnav-acc mnav-rise"
            style={rise(UITKLAPBAAR.length + i)}
          >
            <Link className="mnav-ix" to={item.path}>
              <span className="n">{nummer(UITKLAPBAAR.length + i)}</span>
              <span className="t">{item.label}</span>
            </Link>
          </div>
        ))}
      </div>

      <div className="mnav-foot">
        <Link className="mnav-cta mnav-rise" style={rise(6)} to="/verhuur/calculator">
          Gratis offerte aanvragen
          <ArrowRight />
        </Link>
        <a className="mnav-call mnav-rise" style={rise(7)} href={`tel:${CONTACT.phoneE164}`}>
          <PhoneGlyph />
          {CONTACT.phoneLocal}
        </a>
        <span className="mnav-hours mnav-rise" style={rise(8)}>
          Ma–Vr 08:00–17:00 · {CONTACT.email}
        </span>
      </div>
    </div>
  );
};

export default MobileNav;

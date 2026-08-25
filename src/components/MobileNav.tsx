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
 * een telefoon alleen nog via de footer bereikbaar. Dit is de vervanging:
 * een lade die van rechts inschuift, met twee niveaus.
 *
 * Twee niveaus in plaats van accordeons, omdat het gamma en de pakketten samen
 * ruim twintig links zijn. Uitgeklapt worden dat drie schermen scrollen; nu
 * past het hoofdniveau in één beeld en schuift een groep eróver zodra je erom
 * vraagt. Terug gaat met de knop bovenaan of met Escape.
 *
 * Het paneel staat bewust búiten `<header>`: `.hdr.tucked` zet een `transform`,
 * en een transform maakt van het element het bevattingsblok voor `position:
 * fixed`-kinderen — de lade zou dan met de balk mee omhoog schuiven.
 */

/** Groepen op het eerste niveau; elke groep opent een tweede scherm. */
interface MenuLink {
  label: string;
  sub?: string;
  /** Intern pad. */
  path?: string;
  /** Externe URL — de zusterbedrijven staan op een eigen domein. */
  href?: string;
}

interface Groep {
  id: string;
  label: string;
  items: MenuLink[];
}

const GROEPEN: Groep[] = [
  { id: "pakketten", label: "Pakketten", items: PAKKETTEN },
  { id: "toestellen", label: "Toestellen", items: TOESTELLEN },
  { id: "service", label: "Levering & service", items: SERVICE },
  { id: "drogen", label: "Alles over drogen", items: ONTDEK },
  { id: "groep", label: "Vernast Group", items: VERNAST_GROEP },
];

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const BurgerIcon = () => (
  <svg viewBox="0 0 24 24" strokeWidth={2} {...strokeProps}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" strokeWidth={2} {...strokeProps}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" strokeWidth={2} {...strokeProps}>
    <path d="M9 6l6 6-6 6" />
  </svg>
);

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" strokeWidth={2.2} {...strokeProps}>
    <path d="M15 6l-6 6 6 6" />
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
    {open ? <CloseIcon /> : <BurgerIcon />}
  </button>
);

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  /** Welke groep openstaat, of `null` voor het hoofdniveau. */
  groep: string | null;
  onGroep: (id: string | null) => void;
  /** Het zwarte logo van de schil waarin het menu draait. */
  logo?: string;
}

const MobileNav = ({
  open,
  onClose,
  groep,
  onGroep,
  logo = "/vernast/logo-horizontal-black.webp",
}: MobileNavProps) => {
  const { pathname } = useLocation();
  const panelRef = useRef<HTMLDivElement>(null);
  const teruggeefFocus = useRef<HTMLElement | null>(null);

  // Sluiten bij navigatie: de lade blijft anders over de nieuwe pagina staan.
  // `pathname` en niet de hele location, zodat een anker binnen dezelfde pagina
  // de lade ook sluit zonder dat een querystring dat dubbel doet.
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Scrollslot, focus en de breedtebewaking hangen alleen aan `open`. Zat
  // `groep` er ook in, dan draaide dit blok bij elke doorklik opnieuw af en
  // sprong de focus terug naar de hamburger.
  useEffect(() => {
    if (!open) return;

    teruggeefFocus.current = document.activeElement as HTMLElement | null;
    // De sluitknop is het eerste wat een screenreader tegenkomt; zonder deze
    // sprong staat de focus nog achter de scrim, op de pagina eronder.
    panelRef.current?.querySelector<HTMLElement>(".mnav-close")?.focus();

    const vorigeOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Wie het venster breder sleept of zijn telefoon draait, krijgt boven
    // 1160px het gewone menu terug; de lade wordt dan door CSS verborgen en
    // moet ook echt dicht, anders blijft de scroll van de pagina op slot.
    const breed = window.matchMedia("(min-width: 1161px)");
    const onBreed = () => {
      if (breed.matches) onClose();
    };
    breed.addEventListener("change", onBreed);

    return () => {
      breed.removeEventListener("change", onBreed);
      document.body.style.overflow = vorigeOverflow;
      teruggeefFocus.current?.focus?.();
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      // Escape gaat eerst één niveau terug, pas daarna dicht.
      if (groep) onGroep(null);
      else onClose();
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, groep, onClose, onGroep]);

  const link = (item: MenuLink) =>
    item.href ? (
      <a href={item.href}>
        {item.label}
        {item.sub ? <small>{item.sub}</small> : null}
      </a>
    ) : (
      <Link to={item.path ?? "/"}>
        {item.label}
        {item.sub ? <small>{item.sub}</small> : null}
      </Link>
    );

  return (
    <div
      className={`mnav${open ? " is-open" : ""}`}
      id="mobiel-menu"
      data-level={groep ? "1" : "0"}
    >
      <button
        type="button"
        className="mnav-scrim"
        aria-label="Menu sluiten"
        tabIndex={-1}
        onClick={onClose}
      />

      <div
        className="mnav-panel"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Hoofdmenu"
      >
        <div className="mnav-top">
          <Link to="/" aria-label="Naar de homepage">
            <img src={logo} alt="Vernast" width={1600} height={268} decoding="async" />
          </Link>
          <button type="button" className="mnav-close" aria-label="Menu sluiten" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>

        <div className="mnav-panes">
          <div className="mnav-pane is-root">
            {GROEPEN.map((g) => (
              <button
                key={g.id}
                type="button"
                className="mnav-row"
                onClick={() => onGroep(g.id)}
              >
                {g.label}
                <span className="mnav-tail">
                  <span className="mnav-count">{g.items.length}</span>
                  <ChevronRight />
                </span>
              </button>
            ))}
            {BEDRIJF.map((item) => (
              <Link key={item.path} className="mnav-row" to={item.path}>
                {item.label}
                <ChevronRight />
              </Link>
            ))}
          </div>

          {GROEPEN.map((g) => (
            <div
              key={g.id}
              className={`mnav-pane is-sub${groep === g.id ? " is-current" : ""}`}
              aria-hidden={groep === g.id ? undefined : true}
            >
              <button type="button" className="mnav-back" onClick={() => onGroep(null)}>
                <ChevronLeft />
                Menu
              </button>
              <h2 className="mnav-h2">{g.label}</h2>
              <ul className="mnav-list">
                {/* Sleutel op het label, niet op het pad: vier pakketten wijzen
                    naar dezelfde calculator. */}
                {g.items.map((item) => (
                  <li key={item.label}>{link(item)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mnav-foot">
          <Link className="mnav-cta" to="/verhuur/calculator">
            Gratis offerte
          </Link>
          <a className="mnav-tel" href={`tel:${CONTACT.phoneE164}`}>
            <PhoneGlyph />
            {CONTACT.phone} · Ma–Vr 08:00–17:00
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;

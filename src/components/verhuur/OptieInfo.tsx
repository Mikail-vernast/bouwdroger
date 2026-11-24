import { useEffect, useId, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

interface Props {
  /** Voor schermlezers: "Meer uitleg over …". */
  knopLabel: string;
  titel: string;
  foto: string;
  fotoAlt: string;
  /** Toon bij deze foto de onderkant groter in beeld. */
  fotoOnderkant?: boolean;
  children: ReactNode;
  /** Tekst van de sluitknop. */
  sluiten: string;
  /** Optioneel: een pagina met alles over deze optie. */
  link?: { to: string; tekst: string };
}

/**
 * Het i'tje naast een optie in de boekingswizard, met een popup: foto en
 * uitleg in gewone woorden.
 *
 * Een klant die niet weet wat een werfstroomkast of een condenspomp is, voegt
 * hem niet toe — of voegt hem toe en vraagt zich bij de factuur af waarom. De
 * uitleg stond eerst ingeklapt in de pagina zelf en duwde de opties eronder
 * weg; een popup laat de lijst staan waar hij stond.
 *
 * De popup gaat via een portal naar `document.body`: de wizard zit in een
 * sticky stapelcontext, en daarbinnen viel een vaste laag onder de header.
 */
const OptieInfo = ({ knopLabel, titel, foto, fotoAlt, fotoOnderkant, children, sluiten, link }: Props) => {
  const [open, setOpen] = useState(false);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const vorige = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = vorige;
      document.removeEventListener("keydown", esc);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={`oi-knop${open ? " on" : ""}`}
        aria-label={knopLabel}
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
      >
        i
      </button>
      {open &&
        createPortal(
          <div className="oi-laag" onClick={() => setOpen(false)}>
            <div
              className="oi-kaart"
              role="dialog"
              aria-modal="true"
              aria-labelledby={id}
              onClick={(e) => e.stopPropagation()}
            >
              <button type="button" className="oi-x" aria-label={sluiten} onClick={() => setOpen(false)}>
                ×
              </button>
              <img className={fotoOnderkant ? "oi-foto-onderkant" : undefined} src={foto} alt={fotoAlt} decoding="async" />
              <div className="oi-tekst">
                <h3 id={id}>{titel}</h3>
                {children}
                {link && (
                  <Link className="oi-meer" to={link.to} onClick={() => setOpen(false)}>
                    {link.tekst}
                  </Link>
                )}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default OptieInfo;

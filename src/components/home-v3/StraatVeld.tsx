import { useEffect, useRef, useState, type ChangeEvent, type KeyboardEvent } from "react";
import { lookupAddress, MIN_ZOEK, suggestAddresses, type Adres } from "@/lib/adresZoeker";

/**
 * Het straatveld van het vraagformulier, met adressuggesties onder het veld.
 *
 * Wie "Antwerpsestraat 5" typt en een suggestie kiest, krijgt straat, nummer,
 * postcode en gemeente in één keer ingevuld. Zonder keuze blijft het een gewoon
 * tekstveld: de suggesties zijn een hulp, geen verplichting — een Waals adres
 * of een nieuwe verkaveling staat er niet in.
 *
 * Opgebouwd zoals `LeverplaatsZoeker` (combobox met listbox, pijltjes, Enter,
 * Escape, kiezen op mousedown) zodat beide zoekers zich hetzelfde gedragen.
 */

/** Wachten tot de bezoeker even stopt met typen: één aanvraag per woord, niet per letter. */
const DEBOUNCE_MS = 250;

interface StraatVeldProps {
  value: string;
  /** Het huisnummerveld: staat dat al ingevuld, dan zoekt de zoeker er meteen mee. */
  nr: string;
  label: string;
  placeholder: string;
  lijstLabel: string;
  error?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKies: (adres: Adres) => void;
}

const StraatVeld = ({ value, nr, label, placeholder, lijstLabel, error, onChange, onKies }: StraatVeldProps) => {
  const [suggesties, setSuggesties] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [actief, setActief] = useState(0);
  // Alleen zoeken na typen: na een keuze zou de nieuwe waarde de lijst meteen weer openen.
  const [zoeken, setZoeken] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!zoeken) return;
    const typed = value.trim();
    if (typed.length < MIN_ZOEK) {
      setSuggesties([]);
      return;
    }
    // Een nummer in het straatveld zelf gaat voor op het nummerveld.
    const query = nr.trim() && !/\d/.test(typed) ? `${typed} ${nr.trim()}` : typed;
    const controller = new AbortController();
    const timer = window.setTimeout(() => {
      suggestAddresses(query, controller.signal).then((gevonden) => {
        if (controller.signal.aborted) return;
        setSuggesties(gevonden);
        setActief(0);
        setOpen(gevonden.length > 0);
      });
    }, DEBOUNCE_MS);
    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [value, nr, zoeken]);

  useEffect(() => {
    const sluit = (event: MouseEvent) => {
      if (wrap.current && !wrap.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", sluit);
    return () => document.removeEventListener("mousedown", sluit);
  }, []);

  const kies = (suggestie: string) => {
    setOpen(false);
    setZoeken(false);
    setSuggesties([]);
    lookupAddress(suggestie).then(onKies);
  };

  const toets = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!open || suggesties.length === 0) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActief((i) => Math.min(i + 1, suggesties.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActief((i) => Math.max(i - 1, 0));
    } else if (event.key === "Enter") {
      // Enter kiest de suggestie in plaats van het formulier te versturen.
      event.preventDefault();
      kies(suggesties[actief]);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  };

  const lijstId = "ct-straat-lijst";
  const toonLijst = open && suggesties.length > 0;

  return (
    <div className={error ? "vq-f vq-zoek is-err" : "vq-f vq-zoek"} ref={wrap}>
      <label htmlFor="ct-straat">
        {label} <span className="vq-req">*</span>
      </label>
      <input
        id="ct-straat"
        type="text"
        role="combobox"
        aria-expanded={toonLijst}
        aria-controls={lijstId}
        aria-autocomplete="list"
        aria-activedescendant={toonLijst ? `${lijstId}-${actief}` : undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? "ct-straat-err" : undefined}
        // "off" en niet "address-line1": anders legt de browser zijn eigen
        // lijst bovenop de onze.
        autoComplete="off"
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          setZoeken(true);
          onChange(event);
        }}
        onKeyDown={toets}
        onBlur={() => setOpen(false)}
        onFocus={() => setOpen(suggesties.length > 0)}
      />
      {toonLijst && (
        <ul className="vq-lijst" id={lijstId} role="listbox" aria-label={lijstLabel}>
          {suggesties.map((suggestie, i) => {
            const [straat, plaats] = suggestie.split(/,\s*/);
            return (
              <li
                key={suggestie}
                id={`${lijstId}-${i}`}
                role="option"
                aria-selected={i === actief}
                className={i === actief ? "on" : undefined}
                onMouseEnter={() => setActief(i)}
                // mousedown en niet click: anders sluit de blur de lijst vóór de keuze aankomt.
                onMouseDown={(event) => {
                  event.preventDefault();
                  kies(suggestie);
                }}
              >
                <b>{straat}</b>
                {plaats && <span>{plaats}</span>}
              </li>
            );
          })}
        </ul>
      )}
      {error && <span className="vq-err" id="ct-straat-err">{error}</span>}
    </div>
  );
};

export default StraatVeld;

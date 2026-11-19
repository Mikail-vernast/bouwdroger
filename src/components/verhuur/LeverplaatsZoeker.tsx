import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { useCopy, type Copy } from "@/i18n/useTaal";
import type { Land } from "@/lib/levering";
import {
  herkenPlaats,
  plaatsLabel,
  zoekPlaatsen,
  type Plaats,
  type PlaatsLijst,
} from "@/lib/plaatsZoeker";

const COPY = {
  nl: {
    landLabel: "Land",
    label: "Gemeente of postcode van de werf",
    placeholder: { BE: "bv. Hemiksem of 2620", NL: "bv. Breda of 4811" },
    laden: "Plaatsen laden…",
    geen: "Geen plaats gevonden. Controleer de spelling of typ de postcode.",
    land: { BE: "België", NL: "Nederland" },
  },
  fr: {
    landLabel: "Pays",
    label: "Commune ou code postal du chantier",
    placeholder: { BE: "p. ex. Hemiksem ou 2620", NL: "p. ex. Breda ou 4811" },
    laden: "Chargement des localités…",
    geen: "Aucune localité trouvée. Vérifiez l'orthographe ou tapez le code postal.",
    land: { BE: "Belgique", NL: "Pays-Bas" },
  },
  en: {
    landLabel: "Country",
    label: "Town or postcode of the site",
    placeholder: { BE: "e.g. Hemiksem or 2620", NL: "e.g. Breda or 4811" },
    laden: "Loading places…",
    geen: "No place found. Check the spelling or type the postcode.",
    land: { BE: "Belgium", NL: "Netherlands" },
  },
} satisfies Copy<{
  landLabel: string;
  label: string;
  placeholder: Record<Land, string>;
  laden: string;
  geen: string;
  land: Record<Land, string>;
}>;

/*
  Eén belofte voor de hele pagina: de lijst (190 kB) wordt één keer opgehaald,
  en pas wanneer iemand het veld aanraakt.
*/
let lijstBelofte: Promise<PlaatsLijst> | null = null;
function laadLijst(): Promise<PlaatsLijst> {
  lijstBelofte ??= import("@/data/plaatsen").then((m) => m.PLAATSEN);
  return lijstBelofte;
}

/** Alleen de plaatsen van het gekozen land; de arrays zelf blijven dezelfde. */
function inLand(lijst: PlaatsLijst, land: Land): PlaatsLijst {
  return land === "BE" ? { BE: lijst.BE, NL: [] } : { BE: [], NL: lijst.NL };
}

interface Props {
  /** De plaats die nu gekozen is, of `null`. */
  waarde: Plaats | null;
  /** Het land, ook zolang er nog geen plaats gekozen is. */
  land: Land;
  onLand: (land: Land) => void;
  /** Bij elke herkende of gekozen plaats, en met `null` zodra de invoer niets meer aanwijst. */
  onKies: (plaats: Plaats | null) => void;
}

/**
 * Waar de werf ligt: eerst het land, dan een gemeente óf een postcode. Wat de
 * invoer ondubbelzinnig aanwijst, wordt meteen herkend — "Hemiksem" of "2620"
 * hoeft niemand nog aan te klikken.
 *
 * Het land blijft een eigen keuze en wordt niet geraden: 392 postcodes en
 * plaatsen als Mechelen en Hasselt bestaan in België én Nederland, en een
 * verkeerde gok rekent een verkeerd transporttarief aan.
 */
const LeverplaatsZoeker = ({ waarde, land, onLand, onKies }: Props) => {
  const t = useCopy(COPY);
  const id = useId();
  const [tekst, setTekst] = useState(() => (waarde ? plaatsLabel(waarde) : ""));
  const [lijst, setLijst] = useState<PlaatsLijst | null>(null);
  const [open, setOpen] = useState(false);
  const [actief, setActief] = useState(0);
  const wrap = useRef<HTMLDivElement>(null);

  const deel = useMemo(() => (lijst ? inLand(lijst, land) : null), [lijst, land]);

  // Een postcode die al bekend is (uit sessionStorage of een link) maar nog
  // geen gemeente draagt, krijgt die zodra de lijst er is.
  useEffect(() => {
    if (waarde && !waarde.naam) laadLijst().then(setLijst);
  }, [waarde]);

  useEffect(() => {
    if (!waarde || waarde.naam || !deel) return;
    const gevonden = herkenPlaats(deel, waarde.postcode);
    if (gevonden) {
      setTekst(plaatsLabel(gevonden));
      onKies(gevonden);
    }
  }, [waarde, deel, onKies]);

  useEffect(() => {
    const dicht = (e: MouseEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", dicht);
    return () => document.removeEventListener("mousedown", dicht);
  }, []);

  const suggesties = deel ? zoekPlaatsen(deel, tekst) : [];

  const kies = (p: Plaats) => {
    setTekst(plaatsLabel(p));
    setOpen(false);
    onKies(p);
  };

  const herken = (invoer: string, l: Land) => {
    if (lijst) {
      onKies(herkenPlaats(inLand(lijst, l), invoer));
      return;
    }
    laadLijst().then((geladen) => {
      setLijst(geladen);
      onKies(herkenPlaats(inLand(geladen, l), invoer));
    });
  };

  const typ = (nieuw: string) => {
    setTekst(nieuw);
    setOpen(true);
    setActief(0);
    herken(nieuw, land);
  };

  // Een ander land maakt van dezelfde invoer een andere plaats: "4000" is Luik
  // of Tiel. Het label van een eerdere keuze ("Luik (4000)") gaat terug naar
  // wat er getypt was.
  const wisselLand = (nieuw: Land) => {
    onLand(nieuw);
    const invoer = waarde && tekst === plaatsLabel(waarde) ? waarde.naam || waarde.postcode : tekst;
    setTekst(invoer);
    if (invoer.trim()) {
      setOpen(true);
      herken(invoer, nieuw);
    }
  };

  const toets = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!open || suggesties.length === 0) {
      if (e.key === "ArrowDown") setOpen(true);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActief((i) => Math.min(i + 1, suggesties.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActief((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      kies(suggesties[actief]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const lijstId = `${id}-lijst`;
  const toonLijst = open && tekst.trim().length > 0 && !(waarde && tekst === plaatsLabel(waarde));

  return (
    <div className="lpz" ref={wrap}>
      <div className="lpz-land">
        <label htmlFor={`${id}-land`}>{t.landLabel}</label>
        <select id={`${id}-land`} value={land} onChange={(e) => wisselLand(e.target.value as Land)}>
          <option value="BE">{t.land.BE}</option>
          <option value="NL">{t.land.NL}</option>
        </select>
      </div>
      <div className="lpz-veld">
        <label htmlFor={id}>{t.label}</label>
        <input
          id={id}
          type="text"
          role="combobox"
          aria-expanded={toonLijst}
          aria-controls={lijstId}
          aria-autocomplete="list"
          aria-activedescendant={toonLijst && suggesties[actief] ? `${lijstId}-${actief}` : undefined}
          autoComplete="off"
          placeholder={t.placeholder[land]}
          value={tekst}
          onFocus={() => {
            laadLijst().then(setLijst);
            setOpen(true);
          }}
          onChange={(e) => typ(e.target.value)}
          onKeyDown={toets}
        />
        {toonLijst && (
          <ul className="lpz-lijst" id={lijstId} role="listbox">
            {!deel ? (
              <li className="lpz-leeg">{t.laden}</li>
            ) : suggesties.length === 0 ? (
              <li className="lpz-leeg">{t.geen}</li>
            ) : (
              suggesties.map((p, i) => (
                <li
                  key={`${p.land}${p.postcode}${p.naam}`}
                  id={`${lijstId}-${i}`}
                  role="option"
                  aria-selected={i === actief}
                  className={i === actief ? "on" : undefined}
                  onMouseEnter={() => setActief(i)}
                  // mousedown en niet click: anders sluit het klikken buiten
                  // de lijst haar voordat de keuze aankomt.
                  onMouseDown={(e) => {
                    e.preventDefault();
                    kies(p);
                  }}
                >
                  <b>{p.naam || p.postcode}</b>
                  <span>{p.postcode}</span>
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LeverplaatsZoeker;

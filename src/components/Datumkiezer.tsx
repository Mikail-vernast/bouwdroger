import { useEffect, useId, useMemo, useRef, useState } from "react";
import { addDays, isoDate } from "@/lib/verhuur";
import { useCopy, type Copy } from "@/i18n/useTaal";
import "@/styles/datumkiezer.css";

/**
 * De afhaalkalender.
 *
 * Hier stond `<input type="date">`. Dat opent de kalender van de browser: op
 * Chrome blauw en in de systeemvormtaal, op Safari iets heel anders, en op
 * geen van beide valt te zien wat er met een datum aan de hand is. Precies dat
 * is hier wél nodig — het magazijn is in het weekend dicht, een afhaling vraagt
 * 24 uur voorbereiding, en van sommige toestellen hebben we er één, dus zitten
 * er datums vol. De browserkalender toonde die alle drie als gewoon klikbaar
 * en de bezoeker liep er pas tegenaan bij het afrekenen.
 *
 * Deze kalender zet ze uit en zegt onderaan waarom. De opmaak hangt aan het
 * component (`styles/datumkiezer.css`, ongescoped) zodat hij er in de
 * v3-schil en de verhuurschil hetzelfde uitziet.
 */
export interface DatumkiezerProps {
  id: string;
  /** `YYYY-MM-DD`, of leeg zolang de pagina nog niet weet welke dag het is. */
  value: string;
  /** Vroegst toegestane dag, `YYYY-MM-DD`. */
  min: string;
  /** Datums die vol zitten voor deze selectie. */
  blocked?: string[];
  /**
   * De huurperiode in dagen. Staat ze erin, dan kleurt de kalender de hele
   * periode en zegt hij onderaan tot wanneer ze loopt: wie "1 week" koos, zag
   * alleen een startdatum staan en moest zelf uitrekenen wanneer het toestel
   * terug moest.
   */
  rangeDays?: number;
  /** Hoe die periode heet in de keuzelijst ("1 week"), voor de voetregel. */
  rangeLabel?: string;
  invalid?: boolean;
  describedBy?: string;
  onChange: (iso: string) => void;
}

/*
  Teksten per taal in het component zelf: de kalender staat op de toestelpagina
  én op de afhaalpagina, en een vertaling via props zou op elke plek opnieuw
  moeten.
*/
const COPY = {
  nl: {
    dagen: ["ma", "di", "wo", "do", "vr", "za", "zo"],
    maanden: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
    kies: "Kies een datum",
    paneel: "Kies een afhaaldatum",
    vorige: "Vorige maand",
    volgende: "Volgende maand",
    weekend: "Het magazijn is in het weekend gesloten",
    vol: "Deze dag is volgeboekt voor uw selectie",
    vroeg: "Wij zetten uw toestel minstens 24 uur op voorhand klaar",
    afhalen: "Afhalen",
    terug: "Terugbrengen",
    volzet: "Volzet",
    weekendGesloten: "Weekend gesloten",
  },
  fr: {
    dagen: ["lu", "ma", "me", "je", "ve", "sa", "di"],
    maanden: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
    kies: "Choisissez une date",
    paneel: "Choisissez une date d'enlèvement",
    vorige: "Mois précédent",
    volgende: "Mois suivant",
    weekend: "L'entrepôt est fermé le week-end",
    vol: "Ce jour est complet pour votre sélection",
    vroeg: "Nous préparons votre appareil au moins 24 heures à l'avance",
    afhalen: "Enlèvement",
    terug: "Retour",
    volzet: "Complet",
    weekendGesloten: "Fermé le week-end",
  },
} satisfies Copy<{
  dagen: string[];
  maanden: string[];
  kies: string;
  paneel: string;
  vorige: string;
  volgende: string;
  weekend: string;
  vol: string;
  vroeg: string;
  afhalen: string;
  terug: string;
  volzet: string;
  weekendGesloten: string;
}>;

/** `YYYY-MM-DD` → een `Date` om middernacht lokaal, nooit UTC. */
function parse(iso: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return null;
  const d = new Date(`${iso}T00:00:00`);
  return Number.isNaN(d.getTime()) ? null : d;
}

/** Zaterdag en zondag: dan staat er niemand in het magazijn. */
function isWeekend(d: Date): boolean {
  const dag = d.getDay();
  return dag === 0 || dag === 6;
}

/** Maandag als eerste kolom, zoals een Belgische kalender hem tekent. */
function kolom(d: Date): number {
  return (d.getDay() + 6) % 7;
}

/**
 * `16/11/26`. Geen maand voluit: deze datum staat in een knop van één regel
 * naast een keuzelijst, en "16 november 2026" duwde die breder dan het veld
 * ernaast. In cijfers leest hij bovendien sneller af tegen de kalender eronder.
 */
function kortDatum(d: Date): string {
  const tweeCijfers = (n: number) => String(n).padStart(2, "0");
  return `${tweeCijfers(d.getDate())}/${tweeCijfers(d.getMonth() + 1)}/${String(
    d.getFullYear(),
  ).slice(-2)}`;
}

/** `ma 16/11/26` — met de weekdag erbij waar er plaats voor is. */
function datumMetDag(d: Date, dagen: string[]): string {
  return `${dagen[(d.getDay() + 6) % 7]} ${kortDatum(d)}`;
}

const Datumkiezer = ({
  id,
  value,
  min,
  blocked = [],
  rangeDays,
  rangeLabel,
  invalid,
  describedBy,
  onChange,
}: DatumkiezerProps) => {
  const t = useCopy(COPY);
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const knop = useRef<HTMLButtonElement>(null);
  const paneelId = useId();

  const gekozen = parse(value);
  const minDatum = parse(min);

  /*
    Welke maand er in beeld staat. Los van `value`: wie doorbladert naar
    december en dan niets kiest, moet in december blijven staan. Hij springt
    wel terug zodra er een datum uit een andere maand binnenkomt — dat gebeurt
    wanneer de pagina zelf een vrije dag voorstelt.
  */
  const [maand, setMaand] = useState(() => {
    const basis = gekozen ?? minDatum ?? new Date();
    return new Date(basis.getFullYear(), basis.getMonth(), 1);
  });
  useEffect(() => {
    const basis = parse(value) ?? parse(min);
    if (basis) setMaand(new Date(basis.getFullYear(), basis.getMonth(), 1));
  }, [value, min]);

  // Buiten klikken en Escape sluiten het paneel; de focus gaat terug naar de knop.
  useEffect(() => {
    if (!open) return;
    const buiten = (e: MouseEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(false);
    };
    const toets = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        knop.current?.focus();
      }
    };
    document.addEventListener("mousedown", buiten);
    document.addEventListener("keydown", toets);
    return () => {
      document.removeEventListener("mousedown", buiten);
      document.removeEventListener("keydown", toets);
    };
  }, [open]);

  const vol = useMemo(() => new Set(blocked), [blocked]);

  /*
    Zes rijen van zeven, altijd. Een maand die over vijf rijen past zou het
    paneel anders laten krimpen bij het doorbladeren, en dan verspringt alles
    eronder mee.
  */
  const cellen = useMemo(() => {
    const eerste = new Date(maand.getFullYear(), maand.getMonth(), 1);
    const start = addDays(eerste, -kolom(eerste));
    return Array.from({ length: 42 }, (_, i) => addDays(start, i));
  }, [maand]);

  const vorigeKan = useMemo(() => {
    if (!minDatum) return true;
    const vorige = new Date(maand.getFullYear(), maand.getMonth() - 1, 1);
    // De vorige maand mag zodra ze nog één toegestane dag bevat.
    const laatste = new Date(maand.getFullYear(), maand.getMonth(), 0);
    return isoDate(laatste) >= isoDate(minDatum) && vorige <= laatste;
  }, [maand, minDatum]);

  const staat = (d: Date) => {
    const iso = isoDate(d);
    if (d.getMonth() !== maand.getMonth()) return "buiten" as const;
    if (minDatum && iso < isoDate(minDatum)) return "vroeg" as const;
    if (isWeekend(d)) return "weekend" as const;
    if (vol.has(iso)) return "vol" as const;
    return "vrij" as const;
  };

  /*
    Het einde van de huur: start + periode. Alle periodes zijn veelvouden van
    zeven dagen, dus het einde valt altijd op dezelfde weekdag als de start --
    begint hij op een werkdag, dan eindigt hij dat ook, en komt er geen
    terugbrengdag op een gesloten zaterdag uit.
  */
  const eind = gekozen && rangeDays ? addDays(gekozen, rangeDays) : null;
  const eindIso = eind ? isoDate(eind) : null;

  const kies = (d: Date) => {
    onChange(isoDate(d));
    setOpen(false);
    knop.current?.focus();
  };

  const label = gekozen ? datumMetDag(gekozen, t.dagen) : t.kies;

  return (
    <div className="dk" ref={wrap}>
      <button
        type="button"
        id={id}
        ref={knop}
        className={`dk-knop${invalid ? " bezet" : ""}`}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={open ? paneelId : undefined}
        aria-invalid={invalid}
        aria-describedby={describedBy}
        onClick={() => setOpen((o) => !o)}
      >
        <span className={gekozen ? "dk-waarde" : "dk-waarde leeg"}>{label}</span>
        <svg className="dk-icoon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="5" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.7" />
          <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div className="dk-paneel" id={paneelId} role="dialog" aria-label={t.paneel}>
          <div className="dk-kop">
            <button
              type="button"
              className="dk-nav"
              aria-label={t.vorige}
              disabled={!vorigeKan}
              onClick={() => setMaand((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1))}
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <strong aria-live="polite">
              {t.maanden[maand.getMonth()]} {maand.getFullYear()}
            </strong>
            <button
              type="button"
              className="dk-nav"
              aria-label={t.volgende}
              onClick={() => setMaand((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1))}
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="dk-dagen" aria-hidden="true">
            {t.dagen.map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>

          <div className="dk-raster" role="grid">
            {cellen.map((d) => {
              const s = staat(d);
              const iso = isoDate(d);
              if (s === "buiten") return <span className="dk-dag buiten" key={iso} />;
              const uit = s !== "vrij";
              const inReeks = Boolean(eindIso && value && iso > value && iso < eindIso);
              const isEind = iso === eindIso;
              return (
                <button
                  type="button"
                  key={iso}
                  className={`dk-dag ${s}${iso === value ? " aan" : ""}${
                    inReeks ? " reeks" : ""
                  }${isEind ? " eind" : ""}`}
                  disabled={uit}
                  aria-current={iso === value ? "date" : undefined}
                  title={
                    s === "weekend"
                      ? t.weekend
                      : s === "vol"
                        ? t.vol
                        : s === "vroeg"
                          ? t.vroeg
                          : datumMetDag(d, t.dagen)
                  }
                  onClick={() => kies(d)}
                >
                  {d.getDate()}
                </button>
              );
            })}
          </div>

          {eind && gekozen && (
            <div className="dk-reeks">
              <span>
                {t.afhalen} <b>{datumMetDag(gekozen, t.dagen)}</b>
              </span>
              <span>
                {t.terug} <b>{datumMetDag(eind, t.dagen)}</b>
                {rangeLabel ? ` · ${rangeLabel}` : ""}
              </span>
            </div>
          )}

          <div className="dk-legende">
            <span>
              <i className="dk-stip vol" /> {t.volzet}
            </span>
            <span>
              <i className="dk-stip weekend" /> {t.weekendGesloten}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Datumkiezer;

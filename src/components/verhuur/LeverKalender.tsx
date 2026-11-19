import { useMemo, useState } from "react";
import { useCopy, useTaal, type Copy } from "@/i18n/useTaal";
import { NUMBER_LOCALE } from "@/i18n/taal";
import { addDays, isoDate } from "@/lib/verhuur";

const COPY = {
  nl: {
    vorige: "Vorige maand",
    volgende: "Volgende maand",
    levering: "Levering",
    ophaling: "Ophaling",
    huur: "Huurperiode",
    vol: "Volzet",
  },
  fr: {
    vorige: "Mois précédent",
    volgende: "Mois suivant",
    levering: "Livraison",
    ophaling: "Reprise",
    huur: "Période de location",
    vol: "Complet",
  },
  en: {
    vorige: "Previous month",
    volgende: "Next month",
    levering: "Delivery",
    ophaling: "Collection",
    huur: "Hire period",
    vol: "Fully booked",
  },
} satisfies Copy<Record<string, string>>;

/** "2026-11-20" als lokale datum; `new Date(iso)` leest UTC en schuift rond middernacht een dag op. */
function lokaal(iso: string): Date {
  const [j, m, d] = iso.split("-").map(Number);
  return new Date(j, m - 1, d);
}

interface Props {
  /** Gekozen leverdag (`YYYY-MM-DD`), of leeg. */
  waarde: string;
  onKies: (iso: string) => void;
  /** Vroegste dag die gekozen mag worden. */
  vanaf: string;
  /** Hoeveel dagen het pakket gehuurd wordt; de ophaling valt `huurDagen` na de levering. */
  huurDagen: number;
  /** Dagen waarop het pakket niet vrij is (`api/availability`). */
  isVol: (iso: string) => boolean;
}

/**
 * De agenda van de datumstap.
 *
 * Vervangt `<input type="date">`: die toonde een browserkalender die per
 * systeem anders oogde, geen volle dagen kon tonen en niets zei over wanneer
 * we ophalen. Hier kiest de bezoeker zijn leverdag, en ziet hij meteen de hele
 * huurperiode tot en met de ophaaldag — die volgt uit het pakket en hoeft hij
 * dus niet zelf te kiezen.
 */
const LeverKalender = ({ waarde, onKies, vanaf, huurDagen, isVol }: Props) => {
  const t = useCopy(COPY);
  const taal = useTaal();
  const locale = NUMBER_LOCALE[taal];

  const start = waarde ? lokaal(waarde) : null;
  const einde = start ? addDays(start, huurDagen) : null;
  const eindeIso = einde ? isoDate(einde) : "";

  const eerste = vanaf ? lokaal(vanaf) : new Date();
  const [maand, setMaand] = useState(() => {
    const basis = start ?? eerste;
    return new Date(basis.getFullYear(), basis.getMonth(), 1);
  });

  const kanTerug =
    maand.getFullYear() > eerste.getFullYear() ||
    (maand.getFullYear() === eerste.getFullYear() && maand.getMonth() > eerste.getMonth());

  const weekdagen = useMemo(() => {
    // 5 januari 2026 is een maandag.
    return Array.from({ length: 7 }, (_, i) =>
      new Date(2026, 0, 5 + i).toLocaleDateString(locale, { weekday: "short" }).replace(".", ""),
    );
  }, [locale]);

  const maanden = [maand, new Date(maand.getFullYear(), maand.getMonth() + 1, 1)];

  const rooster = (m: Date, tweede: boolean) => {
    const eersteDag = new Date(m.getFullYear(), m.getMonth(), 1);
    const verschuiving = (eersteDag.getDay() + 6) % 7; // maandag = 0
    const aantal = new Date(m.getFullYear(), m.getMonth() + 1, 0).getDate();
    const cellen: (Date | null)[] = Array.from({ length: verschuiving }, () => null);
    for (let d = 1; d <= aantal; d++) cellen.push(new Date(m.getFullYear(), m.getMonth(), d));
    while (cellen.length % 7) cellen.push(null);
    const titel = m.toLocaleDateString(locale, { month: "long", year: "numeric" });

    return (
      <div className={`lk-maand${tweede ? " tweede" : ""}`} key={titel}>
        <b className="lk-titel">{titel}</b>
        <div className="lk-rooster" role="grid" aria-label={titel}>
          {weekdagen.map((w) => (
            <span key={w} className="lk-wd" role="columnheader">
              {w}
            </span>
          ))}
          {cellen.map((dag, i) => {
            if (!dag) return <span key={`leeg-${i}`} className="lk-leeg" />;
            const iso = isoDate(dag);
            const voorbij = iso < vanaf;
            const vol = !voorbij && isVol(iso);
            const isStart = iso === waarde;
            const isEinde = iso === eindeIso;
            const binnen = Boolean(waarde) && iso > waarde && iso < eindeIso;
            const klassen = ["lk-dag", isStart && "start", isEinde && "einde", binnen && "binnen", vol && "vol"]
              .filter(Boolean)
              .join(" ");
            return (
              <button
                key={iso}
                type="button"
                className={klassen}
                disabled={voorbij || vol}
                aria-pressed={isStart}
                aria-label={`${dag.toLocaleDateString(locale, { weekday: "long", day: "numeric", month: "long" })}${
                  vol ? ` — ${t.vol}` : isEinde ? ` — ${t.ophaling}` : ""
                }`}
                onClick={() => onKies(iso)}
              >
                {dag.getDate()}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="lk">
      <div className="lk-kop">
        <button
          type="button"
          className="lk-nav"
          aria-label={t.vorige}
          disabled={!kanTerug}
          onClick={() => setMaand(new Date(maand.getFullYear(), maand.getMonth() - 1, 1))}
        >
          ‹
        </button>
        <button
          type="button"
          className="lk-nav"
          aria-label={t.volgende}
          onClick={() => setMaand(new Date(maand.getFullYear(), maand.getMonth() + 1, 1))}
        >
          ›
        </button>
      </div>

      {/* Twee maanden naast elkaar: een huur van drie à vier weken loopt bijna
          altijd over de maandgrens, en de ophaaldag hoort mee in beeld. */}
      <div className="lk-maanden">{maanden.map((m, i) => rooster(m, i === 1))}</div>

      <div className="lk-legende">
        <span>
          <i className="l-start" /> {t.levering}
        </span>
        <span>
          <i className="l-binnen" /> {t.huur}
        </span>
        <span>
          <i className="l-einde" /> {t.ophaling}
        </span>
        <span>
          <i className="l-vol" /> {t.vol}
        </span>
      </div>
    </div>
  );
};

export default LeverKalender;

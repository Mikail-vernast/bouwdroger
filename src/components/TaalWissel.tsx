import { Link, useLocation } from "react-router-dom";
import { ACTIEVE_TALEN, type Taal } from "@/i18n/taal";
import { wisselPad } from "@/i18n/paden";
import { bewaarVoorkeur, useKlant, useTaal, useVoorkeur, type Klant } from "@/i18n/useTaal";

/**
 * Taal- en klantwissel voor in de headers: "NL · FR" en "Particulier · Bedrijf".
 * Wie in de popup iets koos, wijzigt het hier later.
 *
 * De taallinks zijn echte `<a href>`'s naar de vertaalde pagina, geen knoppen:
 * zo volgen crawlers ze ook, en werken ze zonder JavaScript.
 *
 * Opmaak volgt de schil via `currentColor`; geef `className` mee voor de plek.
 */
const KORT: Record<Taal, string> = { nl: "NL", fr: "FR", en: "EN" };
const NAAM: Record<Taal, string> = { nl: "Nederlands", fr: "Français", en: "English" };
const KLANT: Record<Taal, Record<Klant, string>> = {
  nl: { particulier: "Particulier", bedrijf: "Bedrijf" },
  fr: { particulier: "Particulier", bedrijf: "Professionnel" },
  en: { particulier: "Private", bedrijf: "Business" },
};
const LABEL: Record<Taal, { taal: string; klant: string }> = {
  nl: { taal: "Taal", klant: "Prijzen voor" },
  fr: { taal: "Langue", klant: "Prix pour" },
  en: { taal: "Language", klant: "Prices for" },
};

export const TaalWissel = ({ className = "" }: { className?: string }) => {
  const { pathname, search } = useLocation();
  const taal = useTaal();
  const voorkeur = useVoorkeur();
  return (
    <nav className={`taalwissel ${className}`} aria-label={LABEL[taal].taal}>
      {ACTIEVE_TALEN.map((t, i) => (
        <span key={t}>
          {i > 0 && <span aria-hidden="true"> · </span>}
          {t === taal ? (
            <strong aria-current="true" lang={t} title={NAAM[t]}>
              {KORT[t]}
            </strong>
          ) : (
            <Link
              to={wisselPad(pathname, t) + search}
              hrefLang={t}
              lang={t}
              title={NAAM[t]}
              onClick={() =>
                voorkeur && bewaarVoorkeur({ ...voorkeur, taal: t })
              }
            >
              {KORT[t]}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
};

export const KlantWissel = ({ className = "" }: { className?: string }) => {
  const taal = useTaal();
  const klant = useKlant();
  const voorkeur = useVoorkeur();
  const zet = (k: Klant) =>
    bewaarVoorkeur({ taal: voorkeur?.taal ?? taal, land: voorkeur?.land ?? "BE", klant: k });
  return (
    <div className={`klantwissel ${className}`} role="radiogroup" aria-label={LABEL[taal].klant}>
      {(["particulier", "bedrijf"] as const).map((k, i) => (
        <span key={k}>
          {i > 0 && <span aria-hidden="true"> · </span>}
          <button type="button" role="radio" aria-checked={klant === k} onClick={() => zet(k)}>
            {KLANT[taal][k]}
          </button>
        </span>
      ))}
    </div>
  );
};

export default TaalWissel;

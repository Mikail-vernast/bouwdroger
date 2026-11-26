import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "@/styles/keuze-popup.css";
import { ACTIEVE_TALEN, taalUitPad, type Taal } from "@/i18n/taal";
import { wisselPad } from "@/i18n/paden";
import { bewaarVoorkeur, kies, type Copy, type Klant } from "@/i18n/useTaal";

/**
 * De keuzepopup bij het eerste bezoek: taal, particulier/bedrijf en land.
 *
 * Wordt pas ná mount geladen (zie Layout) en zit dus niet in de geprerenderde
 * HTML: een antwoordmachine of crawler ziet gewoon de pagina. Er is ook nooit
 * een automatische redirect op browsertaal of IP — Google crawlt vanuit de VS
 * en zou de Franse en Nederlandse pagina's anders nooit te zien krijgen.
 */

const LANDEN = ["BE", "NL", "LU", "FR", "XX"] as const;
type Land = (typeof LANDEN)[number];

interface Tekst {
  titel: string;
  sub: string;
  taal: string;
  klant: string;
  particulier: string;
  bedrijf: string;
  inclBtw: string;
  exclBtw: string;
  hintParticulier: string;
  hintBedrijf: string;
  werf: string;
  landLabel: string;
  landen: Record<Land, string>;
  verder: string;
  sluiten: string;
  /*
    "Nr. 1 Droogservice": vergelijkende claim, volgens de eigenaar onderbouwd
    (17-11-2026). TODO(eigenaar): de onderbouwing hier noteren, zodat ze later
    nog te verdedigen is als een concurrent ernaar vraagt (WER boek VI).
  */
  badge: string;
}

const COPY: Copy<Tekst> = {
  nl: {
    titel: "Welkom bij Vernast",
    sub: "Twee snelle keuzes, dan tonen we je de juiste prijzen en het juiste aanbod.",
    taal: "Taal",
    klant: "Je huurt als",
    particulier: "Particulier",
    bedrijf: "Bedrijf",
    inclBtw: "incl. btw",
    exclBtw: "excl. btw",
    hintParticulier: "Prijzen incl. btw",
    hintBedrijf: "Prijzen excl. btw · factuur op naam",
    werf: "Je werf ligt in",
    landLabel: "Land van je werf",
    landen: { BE: "België", NL: "Nederland", LU: "Luxemburg", FR: "Frankrijk", XX: "Ander land" },
    verder: "Ga verder",
    sluiten: "Sluiten",
    badge: "Nr. 1 Droogservice",
  },
  fr: {
    titel: "Bienvenue chez Vernast",
    sub: "Deux choix rapides, et nous vous affichons les bons prix et la bonne offre.",
    taal: "Langue",
    klant: "Vous louez en tant que",
    particulier: "Particulier",
    bedrijf: "Professionnel",
    inclBtw: "TVAC",
    exclBtw: "HTVA",
    hintParticulier: "Prix TVAC",
    hintBedrijf: "Prix HTVA · facture au nom de votre société",
    werf: "Votre chantier :",
    landLabel: "Pays du chantier",
    landen: { BE: "Belgique", NL: "Pays-Bas", LU: "Luxembourg", FR: "France", XX: "Autre pays" },
    verder: "Continuer",
    sluiten: "Fermer",
    badge: "Service de séchage n° 1",
  },
  en: {
    titel: "Welcome to Vernast",
    sub: "Two quick choices, then we'll show you the right prices and the right offer.",
    taal: "Language",
    klant: "You're renting as",
    particulier: "Private customer",
    bedrijf: "Business",
    inclBtw: "incl. VAT",
    exclBtw: "excl. VAT",
    hintParticulier: "Prices incl. VAT",
    hintBedrijf: "Prices excl. VAT · invoice to your company",
    werf: "Your site is in",
    landLabel: "Country of your site",
    landen: { BE: "Belgium", NL: "Netherlands", LU: "Luxembourg", FR: "France", XX: "Other country" },
    verder: "Continue",
    sluiten: "Close",
    badge: "No. 1 Drying Service",
  },
};

const TAALNAAM: Record<Taal, string> = { nl: "Nederlands", fr: "Français", en: "English" };

/* Vlaggen per taal: Nederlands = Nederland, Français = Frankrijk, English = VK. */
const Vlag = ({ taal }: { taal: Taal }) => {
  const id = `kp-vl-${taal}`;
  const inhoud = {
    nl: (
      <>
        <rect y="3" width="26" height="6.7" fill="#AE1C28" />
        <rect y="9.7" width="26" height="6.6" fill="#fff" />
        <rect y="16.3" width="26" height="6.7" fill="#21468B" />
      </>
    ),
    fr: (
      <>
        <rect y="3" width="8.7" height="20" fill="#0055A4" />
        <rect x="8.7" y="3" width="8.6" height="20" fill="#fff" />
        <rect x="17.3" y="3" width="8.7" height="20" fill="#EF4135" />
      </>
    ),
    en: (
      <>
        <rect y="3" width="26" height="20" fill="#012169" />
        <path d="M0 3l26 20M26 3L0 23" stroke="#fff" strokeWidth="4" />
        <path d="M0 3l26 20M26 3L0 23" stroke="#C8102E" strokeWidth="1.5" />
        <path d="M13 3v20M0 13h26" stroke="#fff" strokeWidth="6" />
        <path d="M13 3v20M0 13h26" stroke="#C8102E" strokeWidth="3.4" />
      </>
    ),
  }[taal];
  return (
    <svg width="30" height="20" viewBox="0 3 26 20" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <clipPath id={id}>
          <rect x="0" y="3" width="26" height="20" rx="2.6" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id})`}>{inhoud}</g>
      <rect x=".5" y="3.5" width="25" height="19" rx="2.3" fill="none" stroke="rgba(0,0,0,.18)" />
    </svg>
  );
};

/* Particulier: één persoon. */
const IcoPersoon = () => (
  <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="14" cy="9" r="4.5" fill="currentColor" fillOpacity=".14" />
    <path d="M5 25v-1.5a9 9 0 0 1 18 0V25" fill="currentColor" fillOpacity=".14" />
  </svg>
);
/* Bedrijf: een team van drie, de middelste vooraan. */
const IcoTeam = () => (
  <svg viewBox="0 0 34 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="7.5" cy="10" r="3.4" />
    <path d="M1.5 23v-1a6 6 0 0 1 9-5.2" />
    <circle cx="26.5" cy="10" r="3.4" />
    <path d="M32.5 23v-1a6 6 0 0 0-9-5.2" />
    <circle cx="17" cy="8.5" r="4.2" fill="currentColor" fillOpacity=".14" />
    <path d="M9.5 25v-1.5a7.5 7.5 0 0 1 15 0V25" fill="currentColor" fillOpacity=".14" />
  </svg>
);
const IcoPin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);
const IcoCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);
const IcoPijl = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/** Schuifschakelaar: een rail met radioknoppen en een witte knop die meeschuift. */
function Schakelaar<T extends string>({
  label,
  klasse,
  waarde,
  opties,
  onKies,
}: {
  label: string;
  klasse: string;
  waarde: T;
  opties: { v: T; inhoud: React.ReactNode }[];
  onKies: (v: T) => void;
}) {
  const i = Math.max(0, opties.findIndex((o) => o.v === waarde));
  const pijl = (e: React.KeyboardEvent, huidig: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const n = (huidig + (e.key === "ArrowRight" ? 1 : -1) + opties.length) % opties.length;
    onKies(opties[n].v);
    (e.currentTarget.parentElement?.querySelectorAll("button")[n] as HTMLButtonElement | undefined)?.focus();
  };
  return (
    <div
      className={`kp-sw ${klasse}`}
      role="radiogroup"
      aria-label={label}
      style={{ "--n": opties.length, "--i": i } as React.CSSProperties}
    >
      <span className="kp-knob" aria-hidden="true" />
      {opties.map((o, n) => (
        <button
          key={o.v}
          type="button"
          role="radio"
          aria-checked={o.v === waarde}
          tabIndex={o.v === waarde ? 0 : -1}
          onClick={() => onKies(o.v)}
          onKeyDown={(e) => pijl(e, n)}
        >
          {o.inhoud}
        </button>
      ))}
    </div>
  );
}

const KeuzePopup = ({ onKlaar }: { onKlaar: () => void }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const paginaTaal = taalUitPad(location.pathname);

  /*
    De taal staat vooraf op de browsertaal als die bestaat — anders op de taal
    van de pagina. Alleen een voorselectie: er wordt niets doorgestuurd zolang
    de bezoeker niet zelf op "Ga verder" klikt. Op een Franse of Engelse URL
    wint de taal van de pagina.
  */
  const [taal, setTaal] = useState<Taal>(() => {
    // Wie op een Franse URL binnenkomt, koos die taal al in Google.
    if (paginaTaal !== "nl") return paginaTaal;
    const b = typeof navigator !== "undefined" ? navigator.language.slice(0, 2) : "";
    return (ACTIEVE_TALEN as readonly string[]).includes(b) ? (b as Taal) : paginaTaal;
  });
  const [klant, setKlant] = useState<Klant>("particulier");
  const [land, setLand] = useState<Land>("BE");
  const t = kies(COPY, taal);
  const eerste = useRef<HTMLDivElement>(null);

  // Land uit de IP-header (api/land.ts). Faalt dat, dan blijft België staan.
  useEffect(() => {
    let weg = false;
    fetch("/api/land")
      .then((r) => (r.ok ? r.json() : null))
      .then((d: unknown) => {
        const c = d && typeof d === "object" && "land" in d ? String((d as { land: unknown }).land) : "";
        if (!weg && c) setLand((LANDEN as readonly string[]).includes(c) ? (c as Land) : "XX");
      })
      .catch(() => undefined);
    return () => {
      weg = true;
    };
  }, []);

  useEffect(() => {
    eerste.current?.querySelector<HTMLButtonElement>('button[aria-checked="true"]')?.focus();
    const esc = (e: KeyboardEvent) => e.key === "Escape" && sluit();
    window.addEventListener("keydown", esc);
    const vorig = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", esc);
      document.body.style.overflow = vorig;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Sluiten zonder "Ga verder" = de pagina zoals ze is; ook dat onthouden we. */
  function sluit() {
    bewaarVoorkeur({ taal: paginaTaal, klant, land });
    onKlaar();
  }

  function verder() {
    bewaarVoorkeur({ taal, klant, land });
    onKlaar();
    if (taal !== paginaTaal) navigate(wisselPad(location.pathname, taal));
  }

  const talen = ACTIEVE_TALEN;

  return (
    <div className="kp-overlay" onMouseDown={(e) => e.target === e.currentTarget && sluit()}>
      <div className="kp" role="dialog" aria-modal="true" aria-labelledby="kp-titel" lang={taal}>
        <button type="button" className="kp-x" onClick={sluit} aria-label={t.sluiten}>
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
            <path d="M1.5 1.5l9 9M10.5 1.5l-9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="kp-foto">
          {/* Op het scherm hooguit ~260 px breed: de volle 1400 px (111 kB) concurreerde op een
              gsm met de 3D van de simulator, die achter deze popup laadt. */}
          <img
            className="kp-team"
            src="/vernast/drie-vakmannen.webp"
            srcSet="/vernast/drie-vakmannen-500.webp 500w, /vernast/drie-vakmannen-1000.webp 1000w, /vernast/drie-vakmannen.webp 1400w"
            sizes="(max-width: 899px) 320px, 260px"
            alt=""
            width={1400}
            height={934}
          />
          <div className="kp-badge">
            <img src="/vernast/schild-gecertificeerd.webp" alt="" width={24} height={24} />
            <span>{t.badge}</span>
          </div>
          <img className="kp-logo" src="/vernast/logo-horizontal-white.webp" alt="Vernast" width={838} height={140} />
        </div>

        <div className="kp-body" ref={eerste}>
          <h2 id="kp-titel">{t.titel}</h2>
          <p className="kp-sub">{t.sub}</p>

          <div className="kp-q">
            <div className="kp-lab">{t.taal}</div>
            <Schakelaar<Taal>
              label={t.taal}
              klasse="taal"
              waarde={taal}
              onKies={setTaal}
              opties={talen.map((v) => ({
                v,
                inhoud: (
                  <>
                    <span className="kp-ico">
                      <Vlag taal={v} />
                    </span>
                    <span className="kp-t">{TAALNAAM[v]}</span>
                  </>
                ),
              }))}
            />
          </div>

          <div className="kp-q">
            <div className="kp-lab">{t.klant}</div>
            <Schakelaar<Klant>
              label={t.klant}
              klasse="klant"
              waarde={klant}
              onKies={setKlant}
              opties={[
                {
                  v: "particulier" as Klant,
                  inhoud: (
                    <>
                      <span className="kp-ico">
                        <IcoPersoon />
                      </span>
                      <span>
                        <span className="kp-t">{t.particulier}</span>
                        <span className="kp-s">{t.inclBtw}</span>
                      </span>
                    </>
                  ),
                },
                {
                  v: "bedrijf" as Klant,
                  inhoud: (
                    <>
                      <span className="kp-ico">
                        <IcoTeam />
                      </span>
                      <span>
                        <span className="kp-t">{t.bedrijf}</span>
                        <span className="kp-s">{t.exclBtw}</span>
                      </span>
                    </>
                  ),
                },
              ]}
            />
            <div className="kp-hint">
              <IcoCheck /> {klant === "bedrijf" ? t.hintBedrijf : t.hintParticulier}
            </div>
          </div>

          <div className="kp-foot">
            <label className="kp-werf">
              <IcoPin /> <span>{t.werf}</span>
              <select value={land} onChange={(e) => setLand(e.target.value as Land)} aria-label={t.landLabel}>
                {LANDEN.map((l) => (
                  <option key={l} value={l}>
                    {t.landen[l]}
                  </option>
                ))}
              </select>
            </label>
            <button type="button" className="kp-cta" onClick={verder}>
              {t.verder} <IcoPijl />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeuzePopup;

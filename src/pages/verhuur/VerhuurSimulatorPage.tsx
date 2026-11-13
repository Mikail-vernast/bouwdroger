import { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import IsoHouse from "@/components/simulator/IsoHouse";
import IsoHouseAuto from "@/components/simulator/IsoHouseAuto";
import { materiaalVoor } from "@/components/simulator/materiaal";
import { voorlaadToestellen } from "@/components/simulator/3d/modellen";
import { Bouwfilm, FaseKnoppen, FaseRegels } from "@/components/simulator/Bouwfilm";
import { FILM_START, droogVoortgang } from "@/components/simulator/film";
import { fotoSrcSet, fotoVoor, huisFoto, type FotoSleutel } from "@/components/simulator/fotos";
import {
  DAK_LABEL,
  FASE,
  MAX_KAMERS,
  MAX_VERDIEPINGEN,
  MIN_KAMERS,
  WAT_LABEL,
  WONING,
  geschatteOppervlakte,
  isMaatwerk,
  aantalKamers,
  isZolder,
  laagSoort,
  planVoor,
  programmaVan,
  plaatsToestellen,
  simResultaat,
  snapOppervlakte,
  standaardProgramma,
  verdiepingNaam,
  type Dak,
  type Fase,
  type Plaatsing,
  type Programma,
  type SimAnswers,
  type Wat,
  type Woning,
} from "@/lib/droogSimulator";
import { CD_VALUES, DEFAULT_CD, DEFAULT_PD, PD_VALUES, SIZE_VALUES, configToQuery, euro } from "@/lib/verhuur";
import { CAT, type DeviceKey } from "@/data/verhuur";
import { CONTACT } from "@/lib/site";
import { SEO } from "@/data/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import "@/styles/verhuur.css";
import "@/styles/verhuur-fixes.css";
import "@/styles/droogsimulator.css";

/*
  De simulator past altijd op één scherm onder de site-header — gsm, tablet en
  desktop. Daarom keuzeknoppen in plaats van linialen en de Volgende-knop vast
  onderaan het paneel. De header is op desktop vast (161 px) en scrolt op gsm
  mee (96 px); de pagina meet hem en geeft de rest van het scherm aan de
  simulator. De footer staat onder de vouw: niemand hoeft erheen om de
  simulator af te maken, maar de links blijven er voor wie wil.
*/

/** Eén droogcyclus in de animatie, in seconden. */
const CYCLUS = 12;
/** Vaste lege lijst: een nieuwe [] bij elke render zou de film telkens herstarten. */
const GEEN_PLAATSINGEN: Plaatsing[] = [];

const STAPPEN = ["Woning", "Verdiepingen", "Materiaal", "Bouwfase", "Droogplan"];
const WONINGEN: Woning[] = ["rijwoning", "halfopen", "open", "appartement"];
const DAKEN: Dak[] = ["zadeldak", "plat", "lessenaar"];
/** Short roof names for the segmented control, where three sit in half a panel. */
const DAK_KORT: Record<Dak, string> = { zadeldak: "Zadeldak", plat: "Plat", lessenaar: "Lessenaar" };
const MATEN = SIZE_VALUES.map(Number);
/** The slider steps: the catalogue sizes, then "more than the largest". */
const OPP_STAPPEN = [...MATEN.map(String), "custom"];
const GROOTSTE = MATEN[MATEN.length - 1] ?? 300;

interface State extends Omit<SimAnswers, "woning" | "wat" | "fase" | "verwarmt"> {
  woning: Woning | null;
  wat: Wat | null;
  fase: Fase | null;
  verwarmt: boolean | null;
  /** alleen voor het advies: een vloer met verwarming volgt eerst zijn opstookprotocol */
  vloerverwarming: boolean | null;
  /** welke ruimtes per bouwlaag; een lege plek = de standaardindeling */
  kamers: (Programma | undefined)[];
}

const START: State = {
  woning: null,
  verdiepingen: 2,
  dak: "zadeldak",
  size: snapOppervlakte(geschatteOppervlakte("halfopen", 2)),
  wat: null,
  pd: DEFAULT_PD,
  cd: DEFAULT_CD,
  fase: null,
  verwarmt: null,
  vloerverwarming: null,
  kamers: [],
};

const TOESTEL_KORT: Record<DeviceKey, string> = {
  small: "Bouwdroger",
  medium: "Droger medium",
  axiaal: "Ventilator",
  kachel: "Kachel",
};

/** Wat er nat is volgt uit de twee diktes: "geen" bij een laag laat die weg. */
function watVan(pd: string, cd: string): Wat | null {
  const muur = pd !== "geen";
  const vloer = cd !== "geen";
  return muur && vloer ? "beide" : muur ? "pleister" : vloer ? "chape" : null;
}

/** Antwoorden aanvullen tot een volledige set voor de rekenkern. */
function volledig(s: State): SimAnswers {
  const fase = s.fase ?? "chape";
  return {
    woning: s.woning ?? "halfopen",
    verdiepingen: s.verdiepingen,
    dak: s.dak,
    size: s.size,
    wat: s.wat ?? "beide",
    // "geen" = that layer is dry; the wat above leaves it out, the value only has to be valid.
    pd: s.pd === "onbekend" || s.pd === "geen" ? DEFAULT_PD : s.pd,
    cd: s.cd === "onbekend" || s.cd === "geen" ? DEFAULT_CD : s.cd,
    fase,
    verwarmt: s.verwarmt ?? FASE[fase].verwarmtWaarschijnlijk,
  };
}

const VerhuurSimulatorPage = () => {
  const [s, setS] = useState<State>(START);
  const [stap, setStap] = useState(0);
  // While the visitor picks the build phase, warm the device models for the plan.
  useEffect(() => {
    if (stap === 3) voorlaadToestellen();
  }, [stap]);
  const [actief, setActief] = useState(0);
  const [handmatig, setHandmatig] = useState(false);
  /** De droogfilm is helemaal afgespeeld: de woning staat droog en leeg. */
  const [filmKlaar, setFilmKlaar] = useState(false);
  /** Telt op bij "opnieuw afspelen", zodat de film van vooraf aan begint. */
  const [ronde, setRonde] = useState(0);
  /** the phase the visitor points at in stap 4; the film shows it before it is chosen */
  const [faseToon, setFaseToon] = useState<Fase | null>(null);
  // Stap 2: het huis gaat open zodra de bezoeker aan de indeling werkt, en
  // weer dicht bij bouwlagen of dak — dan wil hij de woning zien.
  const [toonPlan, setToonPlan] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  const antwoorden = volledig(s);
  const woning = antwoorden.woning;
  const lagen = antwoorden.verdiepingen;
  const dak = antwoorden.dak;
  const programma = (v: number) => s.kamers[v] ?? standaardProgramma(woning, v, lagen, dak);
  const programmas = Array.from({ length: lagen }, (_, v) => programma(v));
  const aantallen = programmas.map(aantalKamers);
  const sleutelPlan = JSON.stringify(programmas);

  const plan = useMemo(
    () => planVoor(woning, lagen, dak, programmas),
    // programmas is elke render een nieuwe array; de inhoud telt.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [woning, lagen, dak, sleutelPlan],
  );
  const kamers = plan.kamers;
  const resultaat = useMemo(
    () => (s.wat ? simResultaat(antwoorden) : null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s.wat, s.size, s.pd, s.cd, s.fase, s.verwarmt, woning],
  );
  const plaatsingen = useMemo(
    () => (resultaat && stap === 4 ? plaatsToestellen(resultaat.items, kamers, plan.trappen) : []),
    [resultaat, kamers, plan.trappen, stap],
  );

  const materiaal = materiaalVoor(stap >= 2 ? s.wat : null, stap >= 3 ? s.fase : null, FASE[antwoorden.fase].vocht);

  // Het droogplan speelt als film: gelijkvloers, dan elke verdieping erboven,
  // en daarna staat de woning droog en leeg (filmKlaar). Elke verdieping duurt
  // CYCLUS seconden, gerekend vanaf het echte begin van de 3D-film (die meldt
  // FILM_START na het laden van de modellen); zonder 3D vanaf nu. Kiest de
  // bezoeker zelf een verdieping, dan blijft die staan.
  useEffect(() => {
    if (stap !== 4 || handmatig || filmKlaar || !resultaat) return;
    let id = 0;
    const volgende = () => {
      window.clearTimeout(id);
      id = window.setTimeout(() => {
        const nu = Math.min(actief, lagen - 1);
        if (nu + 1 < lagen) setActief(nu + 1);
        else {
          setFilmKlaar(true);
          setActief(0);
        }
      }, CYCLUS * 1000);
    };
    volgende();
    window.addEventListener(FILM_START, volgende);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener(FILM_START, volgende);
    };
  }, [stap, handmatig, filmKlaar, resultaat, actief, lagen, ronde]);
  const opnieuwAfspelen = () => {
    setFilmKlaar(false);
    setHandmatig(false);
    setActief(0);
    setRonde((r) => r + 1);
  };

  const naar = (n: number) => {
    // Vraag 3 opent met de gangbare diktes al gekozen: dat is meteen een antwoord.
    if (n === 2) setS((p) => (p.wat ? p : { ...p, wat: watVan(p.pd, p.cd) }));
    setStap(n);
    setToonPlan(false);
    setActief(0);
    setHandmatig(false);
    setFilmKlaar(false);
  };

  const kiesFase = (f: Fase) => setS((p) => ({ ...p, fase: f }));

  const kiesWoning = (w: Woning) =>
    setS((prev) => {
      // Hetzelfde type opnieuw aanklikken verandert niets: de keuzes van stap 2 blijven staan.
      if (w === prev.woning) return prev;
      const verdiepingen = w === "appartement" ? 1 : Math.max(2, prev.verdiepingen);
      // Een ander woningtype begint met zijn eigen standaarddak (zadeldak, plat bij
      // een appartement); anders bleef het platte dak van een appartement hangen op
      // elk huis dat je daarna koos. Hetzelfde type opnieuw kiezen houdt het dak.
      const d = w === prev.woning ? prev.dak : WONING[w].dakToegelaten[0];
      // Een ander woningtype heeft een andere indeling: de kamers beginnen opnieuw.
      return { ...prev, woning: w, verdiepingen, dak: d, kamers: [], size: snapOppervlakte(geschatteOppervlakte(w, verdiepingen)) };
    });

  /** Bouwlagen of dak gewijzigd: een laag die van soort verandert (zolder wordt verdieping) begint opnieuw. */
  const herschik = (prev: State, n: number, d: Dak) =>
    prev.kamers.slice(0, n).map((k, v) =>
      laagSoort(prev.woning ?? "halfopen", v, n, d) === laagSoort(prev.woning ?? "halfopen", v, prev.verdiepingen, prev.dak) &&
      // naar of van één bouwlaag: het gelijkvloers krijgt (of verliest) de slaapkamers
      !(v === 0 && (n === 1) !== (prev.verdiepingen === 1))
        ? k
        : undefined,
    );

  const zetLagen = (n: number) => {
    setToonPlan(false);
    setActief((a) => Math.min(a, n - 1));
    setS((prev) => ({
      ...prev,
      verdiepingen: n,
      kamers: herschik(prev, n, prev.dak),
      size: snapOppervlakte(geschatteOppervlakte(prev.woning ?? "halfopen", n)),
    }));
  };

  const zetDak = (d: Dak) => {
    setToonPlan(false);
    setS((prev) => ({ ...prev, dak: d, kamers: herschik(prev, prev.verdiepingen, d) }));
  };

  const zetAantal = (v: number, n: number) => {
    setToonPlan(true);
    setActief(v);
    setS((prev) => {
      const k = Array.from({ length: lagen }, (_, i) => prev.kamers[i] ?? standaardProgramma(woning, i, lagen, dak));
      k[v] = programmaVan(laagSoort(woning, v, lagen, dak), n, lagen);
      return { ...prev, kamers: k };
    });
  };

  const kiesVerdieping = (v: number) => {
    setToonPlan(true);
    setActief(v);
  };

  const verd = Math.min(actief, lagen - 1);
  const maxLagen = woning === "appartement" ? 2 : MAX_VERDIEPINGEN;
  const maatwerk = isMaatwerk(antwoorden);
  const totaalKamers = aantallen.reduce((a, b) => a + b, 0);
  const maat = maatwerk ? `${GROOTSTE}+ m²` : `± ${s.size} m²`;
  const heldFoto = huisFoto(woning, dak, lagen);
  const schatting = geschatteOppervlakte(woning, lagen);
  const opIk = Math.max(0, OPP_STAPPEN.indexOf(maatwerk ? "custom" : s.size));
  const opSchat = Math.max(0, OPP_STAPPEN.indexOf(snapOppervlakte(schatting)));
  // Before a phase is chosen, neither answer is shown as picked.
  const verwarmd = s.verwarmt ?? (s.fase ? FASE[s.fase].verwarmtWaarschijnlijk : null);

  const kop = [
    { eyebrow: "Stap 1 · Woning", titel: s.woning ? WONING[s.woning].label : "Welke woning droogt u?" },
    { eyebrow: "Stap 2 · Verdiepingen", titel: `${woningLagen(lagen, dak)}, ${totaalKamers} kamers` },
    { eyebrow: "Stap 3 · Materiaal", titel: s.wat ? `${WAT_LABEL[s.wat].label}: nog nat` : "Wat is er nat?" },
    { eyebrow: "Stap 4 · Bouwfase", titel: s.fase ? FASE[s.fase].label : "Hoe ver staat de werf?" },
    {
      eyebrow: filmKlaar ? "Droogplan · klaar" : `Droogplan · ${verdiepingNaam(actief, lagen, dak)}`,
      titel: !resultaat ? "Maatwerk" : filmKlaar ? "Droog en klaar om af te werken" : `${resultaat.items.reduce((n, it) => n + it.q, 0)} toestellen aan het werk`,
    },
  ][stap];

  /* ── de volgende-knop per stap ── */
  const volgende: { ok: boolean; label: string; melding?: string } =
    stap === 0 ? { ok: !!s.woning, label: "Volgende →" }
    : stap === 2 ? { ok: !!s.wat, label: "Volgende →", melding: s.wat ? undefined : "Kies minstens één laag die nat is." }
    : stap === 3 ? { ok: !!s.fase, label: "Toon mijn droogplan →" }
    : { ok: true, label: "Volgende →" };

  return (
    <div className="vh-calc ds-sim" data-stap={stap} ref={root}>
      <PageMeta
        {...SEO.verhuurSimulator}
        jsonLd={[
          serviceSchema({
            name: "Droogsimulator",
            description:
              "Zie in vijf stappen welke bouwdrogers uw woning nodig heeft, waar ze komen te staan en wat het pakket kost.",
            path: "/verhuur/simulator",
            serviceType: "Bouwdroging",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Droogsimulator", path: "/verhuur/simulator" },
          ]),
        ]}
      />
      {/* Conversiepagina: geen sitemenu en geen footer, het hele scherm is de simulator. */}

      <div className="ds-app">

        <main className="ds-main">
          <h1 className="sr-only">Droogsimulator: zie welke bouwdrogers uw woning nodig heeft</h1>

          {/* ───────────── vraagpaneel ───────────── */}
          <section className="ds-panel" aria-label="Vragen">
            <div className="ds-ptop">
              <ol className="ds-bar" aria-label={`Stap ${stap + 1} van 5: ${STAPPEN[stap]}`}>
                {STAPPEN.map((naam, i) => (
                  <li key={naam} className={i < stap ? "done" : i === stap ? "on" : undefined} aria-current={i === stap ? "step" : undefined} />
                ))}
              </ol>
              <span className="ds-count">{stap < 4 ? `Vraag ${stap + 1} van 4` : "Droogplan"}</span>
            </div>

            <div className="ds-body" key={stap}>
              {stap === 0 && (
                <>
                  <h2>Wat voor woning droogt u?</h2>
                  <p className="ds-sub">Zo weten we hoe de ruimtes liggen en waar de toestellen komen.</p>
                  <div className="ds-cards" role="radiogroup" aria-label="Type woning">
                    {WONINGEN.map((w) => (
                      <button key={w} type="button" role="radio" aria-checked={s.woning === w} className={`ds-card${s.woning === w ? " sel" : ""}`} onClick={() => kiesWoning(w)}>
                        <span className={`ds-art${fotoVoor(`woning-${w}`) ? " ds-art--foto" : ""}`}>
                          <Foto sleutel={`woning-${w}`}>
                            <IsoHouse mini woning={w} verdiepingen={w === "appartement" ? 1 : 2} dak={w === "appartement" ? "plat" : "zadeldak"} kamers={[]} open={false} actief={0} />
                          </Foto>
                        </span>
                        <span className="ds-t">
                          <b>{WONING[w].label}</b>
                          <small>{WONING[w].sub}</small>
                        </span>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {stap === 1 && (
                <>
                  <h2>Hoe ziet uw woning eruit?</h2>
                  <figure className="ds-held" aria-hidden="true">
                    <img key={heldFoto} className="ds-held-foto" onAnimationEnd={(e) => (e.currentTarget.style.animation = "none")} src={heldFoto} srcSet={fotoSrcSet(heldFoto)} sizes="(max-width: 899px) 100vw, 46vw" alt="" loading="lazy" decoding="async" />
                    <figcaption className="ds-held-cap">
                      {DAK_LABEL[dak].label}
                      <i> · {woningLagen(lagen, dak).toLowerCase()} · {totaalKamers} kamers</i>
                    </figcaption>
                  </figure>
                  <div className="ds-keuzerij">
                    <div className="ds-lbl">Dak{woning === "appartement" && <span> · bij een appartement altijd plat</span>}</div>
                    <div className="ds-hkset" role="radiogroup" aria-label="Daktype">
                      {DAKEN.map((d) => (
                        <button key={d} type="button" role="radio" aria-checked={dak === d} disabled={!WONING[woning].dakToegelaten.includes(d)} className={`ds-hk${dak === d ? " on" : ""}`} onClick={() => zetDak(d)}>
                          <HuisIcoon dak={d} lagen={2} />
                          <b><span className="ds-lang">{DAK_LABEL[d].label}</span><span className="ds-kort">{DAK_KORT[d]}</span></b>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="ds-keuzerij">
                    <div className="ds-lbl">Verdiepen boven het gelijkvloers</div>
                    <div className="ds-hkset ds-hkset--lagen" role="radiogroup" aria-label="Verdiepen boven het gelijkvloers">
                      {Array.from({ length: MAX_VERDIEPINGEN }, (_, i) => i + 1).map((n) => (
                        <button key={n} type="button" role="radio" aria-checked={lagen === n} aria-label={woningLagen(n, dak)} disabled={n > maxLagen} className={`ds-hk ds-hk--laag${lagen === n ? " on" : ""}`} onClick={() => zetLagen(n)}>
                          <HuisIcoon dak={dak} lagen={n} />
                          {n === 1 ? <b>Gelijkvloers</b> : <b>+{n - 1}<small>{n === 2 ? "verdiep" : "verdiepen"}</small></b>}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="ds-groei">
                    <div className="ds-lbl ds-lbl--rij">Aantal kamers per verdieping<span>{totaalKamers} in totaal</span></div>
                    {/* Een doorsnede van het huis: bovenste verdieping bovenaan, elk deurtje is een kamer. */}
                    <div className={`ds-gebouw ds-gebouw--${dak}`}>
                      <span className="ds-gebouw-dak" aria-hidden="true" />
                      <div className="ds-verdrijen">
                        {aantallen.map((n, v) => ({ n, v })).reverse().map(({ n, v }) => {
                          const naam = verdiepingNaam(v, lagen, dak);
                          return (
                            <div key={v} className={`ds-verdrij${toonPlan && verd === v ? " on" : ""}`}>
                              <button type="button" className="ds-verdrij-naam" onClick={() => kiesVerdieping(v)} aria-label={`Toon ${naam.toLowerCase()} in de tekening`}>
                                <b>{naam}</b>
                              </button>
                              <span className="ds-deuren" aria-hidden="true">
                                {Array.from({ length: n }, (_, k) => <i key={k} />)}
                              </span>
                              <span className="ds-tel">
                                <button type="button" aria-label={`Minder kamers ${naam.toLowerCase()}`} disabled={n <= MIN_KAMERS} onClick={() => zetAantal(v, n - 1)}>−</button>
                                <output aria-live="polite">{n}</output>
                                <button type="button" aria-label={`Meer kamers ${naam.toLowerCase()}`} disabled={n >= MAX_KAMERS} onClick={() => zetAantal(v, n + 1)}>+</button>
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="ds-opp">
                    <div className="ds-opp-rij">
                      <div className="ds-opp-waarde">
                        <span className="ds-opp-cap">Vloeroppervlakte</span>
                        <b>{maatwerk ? `${GROOTSTE}+` : s.size}<span> m²</span></b>
                        <small>
                          {maatwerk ? "maatwerk" : opIk === opSchat ? "past bij uw woning" : (
                            <button type="button" className="ds-opp-terug" onClick={() => setS((p) => ({ ...p, size: OPP_STAPPEN[opSchat] }))}>
                              geschat ± {schatting} m²
                            </button>
                          )}
                        </small>
                      </div>
                      <div className="ds-opp-schuif" style={{ "--pos": `${(opIk / (OPP_STAPPEN.length - 1)) * 100}%`, "--schat": `${(opSchat / (OPP_STAPPEN.length - 1)) * 100}%` } as CSSProperties}>
                        <input
                          type="range"
                          min={0}
                          max={OPP_STAPPEN.length - 1}
                          step={1}
                          value={opIk}
                          aria-label="Vloeroppervlakte"
                          aria-valuetext={maatwerk ? `meer dan ${GROOTSTE} m²` : `tot ${s.size} m²`}
                          onChange={(e) => setS((p) => ({ ...p, size: OPP_STAPPEN[Number(e.target.value)] }))}
                        />
                        <i className="ds-opp-tick" aria-hidden="true" />
                        <span className="ds-opp-schaal" aria-hidden="true"><span>{MATEN[0]}</span><span>{GROOTSTE}+</span></span>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {stap === 2 && (
                <>
                  <h2>Hoe dik is het nat?</h2>
                  <p className="ds-sub">Kies per laag de dikte. Weet u het niet, dan rekenen wij met de gangbare maat.</p>
                  {(["pd", "cd"] as const).map((laag) => (
                    <LaagKaart
                      key={laag}
                      laag={laag}
                      gekozen={s[laag]}
                      onKies={(v) => setS((p) => {
                        const volgend = { ...p, [laag]: v };
                        return { ...volgend, wat: watVan(volgend.pd, volgend.cd) };
                      })}
                    />
                  ))}
                </>
              )}

              {stap === 3 && (
                <>
                  <h2>Hoe ver staat de werf?</h2>
                  <p className="ds-sub">Kies hoe ver de werken staan. De foto toont waar het vocht zit.</p>
                  <Bouwfilm fase={s.fase} toon={faseToon} onKies={kiesFase} />
                  <div>
                    <div className="ds-lbl">Kies uw fase</div>
                    <FaseKnoppen fase={s.fase} onKies={kiesFase} onToon={setFaseToon} />
                  </div>
                  {s.fase && <FaseRegels key={s.fase} fase={s.fase} />}
                  <div className="ds-vragen">
                    <div className="ds-vraag">
                      <span>Is er verwarming?</span>
                      <div className="ds-jn" role="radiogroup" aria-label="Is er verwarming?">
                        <button type="button" role="radio" aria-checked={verwarmd === true} className={verwarmd === true ? "on" : undefined} onClick={() => setS((p) => ({ ...p, verwarmt: true }))}>
                          Ja
                        </button>
                        <button type="button" role="radio" aria-checked={verwarmd === false} className={verwarmd === false ? "on" : undefined} onClick={() => setS((p) => ({ ...p, verwarmt: false }))}>
                          Nee
                        </button>
                      </div>
                      {verwarmd === false && (
                        <p className="ds-gevolg"><i>+</i><span><b>Kachels</b> erbij in uw pakket.</span></p>
                      )}
                    </div>
                    {s.fase && FASE[s.fase].vloerverwarming && (
                      <div className="ds-vraag">
                        <span>Is er vloerverwarming?</span>
                        <div className="ds-jn" role="radiogroup" aria-label="Is er vloerverwarming?">
                          <button type="button" role="radio" aria-checked={s.vloerverwarming === true} className={s.vloerverwarming === true ? "on" : undefined} onClick={() => setS((p) => ({ ...p, vloerverwarming: true }))}>
                            Ja
                          </button>
                          <button type="button" role="radio" aria-checked={s.vloerverwarming === false} className={s.vloerverwarming === false ? "on" : undefined} onClick={() => setS((p) => ({ ...p, vloerverwarming: false }))}>
                            Nee
                          </button>
                        </div>
                        {s.vloerverwarming === true && (
                          <p className="ds-gevolg let"><i>!</i><span><b>Eerst het opstookprotocol.</b> <small>De drogers helpen daarna, ze vervangen het niet.</small></span></p>
                        )}
                      </div>
                    )}
                  </div>
                </>
              )}

              {stap === 4 && resultaat && (
                <>
                  <h2>
                    {WONING[woning].label}, {maat}
                  </h2>
                  <p className="ds-sub">
                    {WAT_LABEL[antwoorden.wat].label} · {FASE[antwoorden.fase].kort.toLowerCase()} · {antwoorden.verwarmt ? "zelf verwarmd" : "met kachels"}
                  </p>
                  <ul className="ds-dev">
                    {resultaat.items
                      .filter((it) => it.q > 0)
                      .map((it) => (
                        <li key={it.k}>
                          <img src={CAT[it.k].img.replace(/\.png$/, ".webp")} alt="" loading="lazy" decoding="async" />
                          <span>
                            <b>
                              {it.q}× {TOESTEL_KORT[it.k]}
                            </b>
                            <small>{CAT[it.k].name.split(", ")[1] ?? CAT[it.k].name}</small>
                          </span>
                        </li>
                      ))}
                  </ul>
                  <dl className="ds-stats">
                    {resultaat.capaciteit > 0 && (
                      <div>
                        <dt>Ontvochtiging</dt>
                        <dd>{resultaat.capaciteit} <small>l/24u</small></dd>
                      </div>
                    )}
                    {resultaat.luchtverzet > 0 && (
                      <div>
                        <dt>Lucht</dt>
                        <dd>{resultaat.luchtverzet.toLocaleString("nl-BE")} <small>m³/u</small></dd>
                      </div>
                    )}
                    <div>
                      <dt>Termijn</dt>
                      <dd>{resultaat.weken} <small>{resultaat.weken === 1 ? "week" : "weken"}</small></dd>
                    </div>
                  </dl>
                  <div className="ds-advies ds-advies--plan">
                    <b>Let op · {FASE[antwoorden.fase].label.toLowerCase()}</b>
                    {FASE[antwoorden.fase].advies}
                  </div>
                  <div className="ds-prijs">
                    <div>
                      <b>{euro(resultaat.prijs)}</b>
                      <small>voor {resultaat.weken} {resultaat.weken === 1 ? "week" : "weken"} · alles inbegrepen</small>
                    </div>
                    <Link className="ds-book" to={`/verhuur/pakket?${configToQuery({ ...resultaat.config, weeks: resultaat.weken })}`}>
                      Boek dit pakket →
                    </Link>
                  </div>
                </>
              )}

              {stap === 4 && !resultaat && (
                <>
                  <h2>{maatwerk ? "Groot project? Dan maken we het droogplan op maat." : "Voor deze combinatie hebben we geen vast pakket."}</h2>
                  <p className="ds-sub ds-sub--altijd">
                    {maatwerk
                      ? `Boven ${GROOTSTE} m² stellen wij het droogplan persoonlijk samen, met plaatsbezoek indien nodig. Wij nemen binnen één werkdag contact op.`
                      : "Stel uw pakket samen in de calculator, of bel ons: we rekenen het samen uit."}
                  </p>
                  <div className="ds-chips">
                    {maatwerk ? (
                      <a className="ds-book" href="https://survey.typeform.com/to/QJgaZgHX" target="_blank" rel="noopener">
                        Vraag uw maatwerkofferte aan →
                      </a>
                    ) : (
                      <Link className="ds-book" to="/verhuur/calculator">Naar de calculator →</Link>
                    )}
                    <a className="ds-chip" href={`tel:${CONTACT.phoneE164}`}>Bel {CONTACT.phoneLocal}</a>
                  </div>
                </>
              )}
            </div>

            <div className="ds-foot">
              <button className="ds-back" type="button" hidden={stap === 0} onClick={() => naar(Math.max(0, stap - 1))}>
                ← Terug
              </button>
              {volgende.melding && <p className="ds-melding" role="status">{volgende.melding}</p>}
              {stap < 4 ? (
                <button className="ds-next" type="button" disabled={!volgende.ok} onClick={() => naar(stap + 1)}>
                  {volgende.label}
                </button>
              ) : (
                <button
                  className="ds-back ds-back--rechts"
                  type="button"
                  onClick={() => {
                    setS(START);
                    naar(0);
                  }}
                >
                  Opnieuw
                </button>
              )}
            </div>
          </section>

          {/* ───────────── tekening ───────────── */}
          <section className="ds-stage" aria-label="Tekening van uw woning">
            <div className="ds-shead">
              <div>
                <p className="ds-eyebrow">{kop.eyebrow}</p>
                <p className="ds-stitel" aria-live="polite">{kop.titel}</p>
              </div>
              <span className="ds-badge">
                {WONING[woning].label} · {lagen} {lagen === 1 ? "laag" : "lagen"} · {maat}
              </span>
            </div>

            <div className="ds-canvas">
              <IsoHouseAuto
                woning={woning}
                verdiepingen={lagen}
                dak={dak}
                kamers={kamers}
                openingen={plan.openingen}
                trappen={plan.trappen}
                open={(stap >= 2 && !(stap === 4 && filmKlaar)) || (stap === 1 && toonPlan)}
                actief={stap === 4 || stap === 1 ? verd : 0}
                plaatsingen={filmKlaar ? GEEN_PLAATSINGEN : plaatsingen}
                werkend={stap === 4 && !!resultaat && !filmKlaar}
                materiaal={stap === 4 && filmKlaar ? { ...materiaal, vocht: 0 } : materiaal}
                cyclus={CYCLUS}
              />
              {stap === 2 && s.wat && <Doorsnede wat={s.wat} pd={antwoorden.pd} cd={antwoorden.cd} />}
              {stap === 4 && resultaat && (
                <DagTeller key={`${actief}-${resultaat.dagen}-${ronde}-${filmKlaar}`} dagen={resultaat.dagen} cyclus={CYCLUS} vocht={FASE[antwoorden.fase].vocht} klaar={filmKlaar} />
              )}
              {stap === 4 && resultaat && filmKlaar && (
                <button type="button" className="ds-herhaal" onClick={opnieuwAfspelen}>
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M2.5 8a5.5 5.5 0 1 0 1.7-4M2.5 2.5v3h3" /></svg>
                  Opnieuw afspelen
                </button>
              )}
            </div>

            <div className="ds-sfoot">
              {stap === 4 && lagen > 1 && (
                <div className="ds-tabs" role="tablist" aria-label="Verdieping">
                  {Array.from({ length: lagen }, (_, v) => {
                    const n = plaatsingen.filter((p) => kamers.find((k) => k.id === p.kamer)?.verdieping === v).length;
                    return (
                      <button
                        key={v}
                        type="button"
                        role="tab"
                        aria-selected={!filmKlaar && actief === v}
                        className={!filmKlaar && actief === v ? "on" : undefined}
                        onClick={() => {
                          setActief(v);
                          setHandmatig(true);
                          setFilmKlaar(false);
                        }}
                      >
                        {verdiepingNaam(v, lagen, dak)}
                        <small>
                          {n} {n === 1 ? "toestel" : "toestellen"}
                        </small>
                      </button>
                    );
                  })}
                </div>
              )}
              <div className="ds-cart">
                <div className="ds-legend">
                  <p>Legende</p>
                  <div>
                    <span><i className="ds-l-droger" />Droger</span>
                    <span><i className="ds-l-fan" />Ventilator</span>
                    <span><i className="ds-l-kachel" />Kachel</span>
                    <span><i className="ds-l-nat" />Vocht</span>
                  </div>
                </div>
                {/* De prijs pas in het droogplan: tijdens de vragen leidt hij af van het antwoorden. */}
                {stap === 4 && (
                  <div className="ds-cart-prijs">
                    <p>Uw pakket</p>
                    {resultaat ? <b>{euro(resultaat.prijs)}</b> : <b className="dim">Maatwerk</b>}
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>
      </div>

    </div>
  );
};

/** Foto uit Astra als die er is, anders de tekening (`children`). Decoratief: de knop draagt de naam. */
function Foto({ sleutel, children }: { sleutel: FotoSleutel; children: ReactNode }) {
  const src = fotoVoor(sleutel);
  return src ? <img className="ds-foto" src={src.replace(/\.webp$/, "-640.webp")} srcSet={fotoSrcSet(src)} sizes="(max-width: 899px) 45vw, 22vw" alt="" loading="lazy" decoding="async" /> : <>{children}</>;
}

/** "Gelijkvloers", "+ 1 verdiep", "+ 2 verdiepen + zolder" — what n bouwlagen mean under this roof. */
/** "Alleen gelijkvloers", "Gelijkvloers + 1 verdiep + zolder" — the whole house in words. */
function woningLagen(n: number, dak: Dak): string {
  return n === 1 ? "Alleen gelijkvloers" : `Gelijkvloers ${lagenUitleg(n, dak)}`;
}

function lagenUitleg(n: number, dak: Dak): string {
  if (n === 1) return "Gelijkvloers";
  const zolder = isZolder(n - 1, n, dak);
  const verd = n - 1 - (zolder ? 1 : 0);
  return [verd > 0 ? `+ ${verd} ${verd === 1 ? "verdiep" : "verdiepen"}` : "", zolder ? "+ zolder" : ""].filter(Boolean).join(" ");
}

/**
 * Icon of the same house as the photo: `lagen` storeys under roof `dak`,
 * door on the left, two windows per storey. It carries the choice, so the
 * tile reads without its label.
 */
function HuisIcoon({ dak, lagen }: { dak: Dak; lagen: number }) {
  const W = 36, x = 6, lh = 8, y1 = 38, y0 = y1 - lagen * lh;
  return (
    <svg className="ds-hk-ico" viewBox="0 0 48 42" aria-hidden="true">
      <rect className="muur" x={x} y={y0} width={W} height={lagen * lh} rx={1} />
      {Array.from({ length: lagen - 1 }, (_, i) => (
        <line key={`v${i}`} className="vloer" x1={x} x2={x + W} y1={y1 - (i + 1) * lh} y2={y1 - (i + 1) * lh} />
      ))}
      {Array.from({ length: lagen }, (_, i) => {
        const y = y1 - (i + 1) * lh + 2.5;
        return (
          <g key={`r${i}`}>
            {i === 0 ? <rect className="raam" x={x + 5} y={y - 0.5} width={4} height={lh - 2} /> : <rect className="raam" x={x + 5} y={y} width={5} height={3.5} />}
            <rect className="raam" x={x + 15} y={y} width={5} height={3.5} />
            <rect className="raam" x={x + 25} y={y} width={5} height={3.5} />
          </g>
        );
      })}
      {dak === "zadeldak" && <path className="dak" d={`M${x - 3} ${y0}L${x + W / 2} ${y0 - 11}L${x + W + 3} ${y0}Z`} />}
      {dak === "plat" && <rect className="dak" x={x - 2} y={y0 - 3} width={W + 4} height={3} />}
      {dak === "lessenaar" && <path className="dak" d={`M${x - 3} ${y0}L${x - 3} ${y0 - 10}L${x + W + 3} ${y0 - 2}L${x + W + 3} ${y0}Z`} />}
      <line className="grond" x1={2} x2={46} y1={y1 + 0.8} y2={y1 + 0.8} />
    </svg>
  );
}

/** Wat de bezoeker per laag te zien krijgt: een echte foto, wat het is, waar hij het ziet. */
const LAAG = {
  pd: {
    titel: "Pleisterwerk",
    waarden: PD_VALUES,
    standaard: DEFAULT_PD,
    foto: "/simulator/dikte-pleister.webp",
    fotoKlein: "/simulator/dikte-pleister-360.webp",
    fotoPositie: "48% 50%",
    wat: "De gladde laag gips op uw muren en plafonds. Vers aangebracht zit ze vol water.",
    onderschrift: "Gips op de muur, nog vochtig",
    tip: "Waar zie ik dat? In een inbouwdoos of naast een deurlijst.",
    // Vuistregel: ± 1 week per cm zonder droger.
    weken: (cm: number) => cm,
  },
  cd: {
    titel: "Chape",
    waarden: CD_VALUES,
    standaard: DEFAULT_CD,
    foto: "/simulator/dikte-chape.webp",
    fotoKlein: "/simulator/dikte-chape-360.webp",
    fotoPositie: "22% 78%",
    wat: "De dekvloer van zand en cement onder uw tegels of parket.",
    onderschrift: "Zandcement op de isolatie",
    tip: "Waar zie ik dat? Aan de dorpel, of vraag het aan uw chapeur.",
    // Vuistregel: 1 week per cm tot 4 cm, daarboven 2 weken per extra cm.
    weken: (cm: number) => (cm <= 4 ? cm : 4 + 2 * (cm - 4)),
  },
} as const;

const Vink = ({ grootte = 10 }: { grootte?: number }) => (
  <svg width={grootte} height={grootte} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2.5 6.3l2.3 2.3 4.7-5" />
  </svg>
);

/**
 * Eén laag (pleisterwerk of chape): foto, de gekozen dikte op ware grootte, en
 * de keuzes Geen / de catalogusmaten / weet niet. "Geen" is een antwoord, geen
 * uitgeschakelde kaart: de laag is droog en telt niet mee.
 */
function LaagKaart({ laag, gekozen, onKies }: { laag: "pd" | "cd"; gekozen: string; onKies: (v: string) => void }) {
  const L = LAAG[laag];
  const droog = gekozen === "geen";
  const onbekend = gekozen === "onbekend";
  const cm = droog ? 0 : Number(onbekend ? L.standaard : gekozen);
  const max = Math.max(...L.waarden.map(Number));
  const weken = L.weken(cm);
  const keuzes: { v: string; groot: ReactNode; klein: string }[] = [
    { v: "geen", groot: "Geen", klein: droog ? "droog" : "niet nat" },
    ...L.waarden.map((v) => ({ v, groot: <>{v}<small> cm</small></>, klein: v === L.standaard ? "meest" : "" })),
    { v: "onbekend", groot: "?", klein: "weet niet" },
  ];
  return (
    <section className={`ds-laagk${droog ? " uit" : ""}`} aria-label={L.titel}>
      <figure className="ds-laagk-foto">
        <img src={L.fotoKlein} srcSet={`${L.fotoKlein} 360w, ${L.foto} 900w`} sizes="(max-width: 899px) 30vw, 260px" alt="" style={{ objectPosition: L.fotoPositie }} loading="lazy" decoding="async" />
        {droog && <span className="ds-laagk-badge">Niet nat</span>}
        <figcaption><b>{L.titel}</b>{L.onderschrift}</figcaption>
      </figure>
      <div className="ds-laagk-inh">
        <div className="ds-laagk-kop">
          <h3>{L.titel}</h3>
          <output>{droog ? <span className="ok">Droog</span> : <>{onbekend ? "± " : ""}{cm}<small> cm</small></>}</output>
        </div>
        <p className="ds-laagk-wat">{L.wat}</p>
        <div className="ds-ware" style={{ "--max": max } as CSSProperties}>
          <em>≈ ware grootte, in cm</em>
          <div className="ds-ware-lat">
            <i style={{ width: `calc(${cm}cm * var(--s))` }} />
            <WareSchuif laag={laag} cm={cm} max={max} onKies={onKies} />
          </div>
          <div className="ds-ware-schaal">{Array.from({ length: max + 1 }, (_, i) => <span key={i}>{i}</span>)}</div>
          <div className="ds-ware-droog" aria-hidden={!droog}>
            <span className="bol"><Vink grootte={14} /></span>
            <span><b>{L.titel}: droog</b><small>Deze laag telt niet mee in uw droogplan.</small></span>
          </div>
        </div>
        <div className="ds-dk" role="radiogroup" aria-label={`Dikte ${L.titel.toLowerCase()}`}>
          {keuzes.map((k) => (
            <button key={k.v} type="button" role="radio" aria-checked={gekozen === k.v} className={`${k.v === "geen" ? "geen" : ""}${gekozen === k.v ? " on" : ""}`} onClick={() => onKies(k.v)}>
              {k.v === "geen" && <span className="vink"><Vink /></span>}
              <b>{k.groot}</b>
              <i>{k.klein || "\u00a0"}</i>
            </button>
          ))}
        </div>
        <div className="ds-laagk-info" aria-live="polite">
          <span className="tijd">
            {droog ? <span className="ok-bol"><Vink grootte={8} /></span> : (
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="8" cy="8" r="6.5" /><path d="M8 4.5V8l2.4 1.6" /></svg>
            )}
            <span>
              {droog
                ? laag === "pd" ? "Geen nat pleisterwerk: niets te drogen." : "Geen natte chape: niets te drogen."
                : <>± {weken} {weken === 1 ? "week" : "weken"} drogen zonder droger{onbekend && <em> · gerekend met {cm} cm</em>}</>}
            </span>
          </span>
          <span className="tip">{L.tip}</span>
        </div>
      </div>
    </section>
  );
}

/**
 * De lat op ware grootte als schuif: een onzichtbare native range erover, zodat
 * slepen, toetsenbord en schermlezer gewoon werken. Hij springt naar "geen" of
 * naar een catalogusmaat: andere diktes kent de berekening niet.
 */
function WareSchuif({ laag, cm, max, onKies }: { laag: "pd" | "cd"; cm: number; max: number; onKies: (v: string) => void }) {
  const L = LAAG[laag];
  const stops: { cm: number; v: string }[] = [{ cm: 0, v: "geen" }, ...L.waarden.map((v) => ({ cm: Number(v), v }))];
  const dichtst = (x: number) => stops.reduce((b, s) => (Math.abs(s.cm - x) < Math.abs(b.cm - x) ? s : b), stops[0]);
  const huidig = stops.findIndex((s) => s.cm === cm);
  const naar = (i: number) => onKies(stops[Math.max(0, Math.min(stops.length - 1, i))].v);
  return (
    <input
      type="range"
      className="ds-ware-schuif"
      min={0}
      max={max}
      step={0.05}
      value={cm}
      aria-label={`Dikte ${L.titel.toLowerCase()} in cm`}
      aria-valuetext={cm === 0 ? "niet nat" : `${cm} cm`}
      onChange={(e) => {
        const s = dichtst(Number(e.target.value));
        if (s.cm !== cm) onKies(s.v);
      }}
      onKeyDown={(e) => {
        // Pijltjes: naar de vorige of volgende maat, niet per 0,05 cm.
        const d = e.key === "ArrowRight" || e.key === "ArrowUp" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowDown" ? -1 : 0;
        if (!d) return;
        e.preventDefault();
        naar((huidig < 0 ? stops.indexOf(dichtst(cm)) : huidig) + d);
      }}
    />
  );
}

/** Detail A: een doorsnede van muur en vloer op schaal, met maatlijnen. */
function Doorsnede({ wat, pd, cd }: { wat: Wat; pd: string; cd: string }) {
  const p = Number(pd.replace(",", ".")) || 2;
  const c = Number(cd.replace(",", ".")) || 6;
  const muur = wat !== "chape";
  const vloer = wat !== "pleister";
  const k = 4; // px per cm, overdreven zodat 1 cm zichtbaar blijft
  return (
    <figure className="ds-detail" aria-label="Doorsnede van muur en vloer">
      <figcaption>Detail A · doorsnede</figcaption>
      <svg viewBox="0 0 150 110">
        <rect x="20" y="8" width="30" height="72" fill="#c9bfb2" />
        {Array.from({ length: 6 }, (_, i) => (
          <line key={i} x1="20" x2="50" y1={8 + i * 12} y2={8 + i * 12} stroke="#a89c8d" strokeWidth="0.6" />
        ))}
        <rect x="50" y="8" width={p * k} height="72" fill={muur ? "#6f8fab" : "#ddd6cb"} />
        <rect x="20" y="88" width="125" height="14" fill="#b9b0a3" />
        <rect x="20" y={88 - c * k * 0.5} width="125" height={c * k * 0.5} fill={vloer ? "#6f8fab" : "#c9c2b6"} />
        {muur && (
          <g className="ds-maat">
            <line x1="50" x2={50 + p * k} y1="4" y2="4" />
            <text x={52 + p * k} y="6">{pd.replace(".", ",")} cm pleister</text>
          </g>
        )}
        {vloer && (
          <g className="ds-maat">
            <line x1="140" x2="140" y1={88 - c * k * 0.5} y2="88" />
            <text x="138" y={84 - c * k * 0.5} textAnchor="end">{cd} cm chape</text>
          </g>
        )}
      </svg>
    </figure>
  );
}

/**
 * Teller "dag x van y" die gelijkloopt met de vochtsluier in de tekening. Hij
 * telt de huurtermijn uit de catalogus af, niet een eigen schatting.
 */
function DagTeller({ dagen, cyclus, vocht, klaar }: { dagen: number; cyclus: number; vocht: number; klaar: boolean }) {
  const [t, setT] = useState(klaar ? 1 : 0);
  useEffect(() => {
    if (klaar || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setT(1);
      return;
    }
    // Zelfde filmklok als de 3D-woning: eerst de toestellen neerzetten, dan drogen.
    // De 3D meldt wanneer zijn film echt begint (na het laden van de modellen);
    // zonder 3D (SVG) telt hij vanaf nu.
    let start = performance.now();
    const opStart = (e: Event) => { start = (e as CustomEvent<number>).detail; };
    window.addEventListener(FILM_START, opStart);
    const id = window.setInterval(() => {
      setT(droogVoortgang(Math.max(0, (performance.now() - start) / 1000), cyclus));
    }, 120);
    return () => {
      window.clearInterval(id);
      window.removeEventListener(FILM_START, opStart);
    };
  }, [cyclus, klaar]);
  const dag = Math.max(1, Math.round(t * dagen));
  const rest = vocht * (1 - t);
  return (
    <div className="ds-teller">
      <span>
        Dag <b>{dag}</b> van {dagen}
      </span>
      {/* Blue = moisture left; once dry the bar turns full and green. */}
      <div className={t >= 1 ? "ds-meter ds-meter--droog" : "ds-meter"} aria-hidden="true">
        <i style={{ width: t >= 1 ? "100%" : `${Math.max(3, rest * 100)}%` }} />
      </div>
      <small>{t >= 1 ? "Alles droog" : "Vocht in muren en vloer"}</small>
    </div>
  );
}

export default VerhuurSimulatorPage;

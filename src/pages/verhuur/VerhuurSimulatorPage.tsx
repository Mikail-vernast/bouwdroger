import { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import IsoHouse from "@/components/simulator/IsoHouse";
import { materiaalVoor } from "@/components/simulator/materiaal";
import { Doorsnede2 } from "@/components/simulator/PaneelArt";
import { fotoSrcSet, fotoVoor, huisFoto, type FotoSleutel } from "@/components/simulator/fotos";
import {
  DAK_LABEL,
  FASE,
  FASE_ORDER,
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
const CYCLUS = 10;

const STAPPEN = ["Woning", "Verdiepingen", "Materiaal", "Bouwfase", "Droogplan"];
const WONINGEN: Woning[] = ["rijwoning", "halfopen", "open", "appartement"];
const DAKEN: Dak[] = ["zadeldak", "plat", "lessenaar"];
/** Short roof names for the segmented control, where three sit in half a panel. */
const DAK_KORT: Record<Dak, string> = { zadeldak: "Zadeldak", plat: "Plat", lessenaar: "Lessenaar" };
const WATTEN: Wat[] = ["pleister", "chape", "beide"];
const MATEN = SIZE_VALUES.map(Number);
/** The slider steps: the catalogue sizes, then "more than the largest". */
const OPP_STAPPEN = [...MATEN.map(String), "custom"];
const GROOTSTE = MATEN[MATEN.length - 1] ?? 300;
const FASE_KORT: Record<Fase, string> = {
  vers: "Vers",
  weken: "Weken",
  geschilderd: "Geverfd",
  afgewerkt: "Afgewerkt",
  bewoond: "Bewoond",
};

interface State extends Omit<SimAnswers, "woning" | "wat" | "fase" | "verwarmt"> {
  woning: Woning | null;
  wat: Wat | null;
  fase: Fase | null;
  verwarmt: boolean | null;
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
  kamers: [],
};

const TOESTEL_KORT: Record<DeviceKey, string> = {
  small: "Bouwdroger",
  medium: "Droger medium",
  axiaal: "Ventilator",
  kachel: "Kachel",
};

/** Antwoorden aanvullen tot een volledige set voor de rekenkern. */
function volledig(s: State): SimAnswers {
  const fase = s.fase ?? "vers";
  return {
    woning: s.woning ?? "halfopen",
    verdiepingen: s.verdiepingen,
    dak: s.dak,
    size: s.size,
    wat: s.wat ?? "beide",
    pd: s.pd === "onbekend" ? DEFAULT_PD : s.pd,
    cd: s.cd === "onbekend" ? DEFAULT_CD : s.cd,
    fase,
    verwarmt: s.verwarmt ?? FASE[fase].verwarmtWaarschijnlijk,
  };
}

const VerhuurSimulatorPage = () => {
  const [s, setS] = useState<State>(START);
  const [stap, setStap] = useState(0);
  const [actief, setActief] = useState(0);
  const [handmatig, setHandmatig] = useState(false);
  // Stap 2: het huis gaat open zodra de bezoeker aan de indeling werkt, en
  // weer dicht bij bouwlagen of dak — dan wil hij de woning zien.
  const [toonPlan, setToonPlan] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  // Hoeveel van het scherm de site-header inneemt. De CSS heeft een standaard
  // per breakpoint (voor de geprerenderde HTML); dit maakt het exact, ook als
  // het menu door een lettertype net iets hoger uitvalt.
  useEffect(() => {
    const el = root.current;
    const kop = document.querySelector("header.hdr");
    if (!el || !kop) return;
    const meet = () => {
      const hoogte = Math.ceil(kop.getBoundingClientRect().bottom);
      // Vast (desktop): de simulator schuift eronder. In de flow (gsm): de
      // header duwt hem al omlaag, een marge zou dubbel tellen.
      const vast = getComputedStyle(kop).position === "fixed";
      el.style.setProperty("--kop", `${hoogte}px`);
      el.style.setProperty("--kop-marge", vast ? `${hoogte}px` : "0px");
    };
    meet();
    const ro = new ResizeObserver(meet);
    ro.observe(kop);
    window.addEventListener("resize", meet);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", meet);
    };
  }, []);

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
    () => (resultaat && stap === 4 ? plaatsToestellen(resultaat.items, kamers) : []),
    [resultaat, kamers, stap],
  );

  const materiaal = materiaalVoor(stap >= 2 ? s.wat : null, stap >= 3 ? s.fase : null, FASE[antwoorden.fase].vocht);

  // In het droogplan wisselt de tekening vanzelf van verdieping, tot de
  // bezoeker er zelf een kiest.
  useEffect(() => {
    if (stap !== 4 || handmatig || lagen < 2) return;
    const id = window.setInterval(() => setActief((a) => (a + 1) % lagen), CYCLUS * 1000);
    return () => window.clearInterval(id);
  }, [stap, handmatig, lagen]);

  const naar = (n: number) => {
    setStap(n);
    setToonPlan(false);
    setActief(0);
    setHandmatig(false);
  };

  const kiesWoning = (w: Woning) =>
    setS((prev) => {
      const verdiepingen = w === "appartement" ? 1 : Math.max(2, prev.verdiepingen);
      const d = WONING[w].dakToegelaten.includes(prev.dak) ? prev.dak : WONING[w].dakToegelaten[0];
      // Een ander woningtype heeft een andere indeling: de kamers beginnen opnieuw.
      return { ...prev, woning: w, verdiepingen, dak: d, kamers: [], size: snapOppervlakte(geschatteOppervlakte(w, verdiepingen)) };
    });

  /** Bouwlagen of dak gewijzigd: een laag die van soort verandert (zolder wordt verdieping) begint opnieuw. */
  const herschik = (prev: State, n: number, d: Dak) =>
    prev.kamers.slice(0, n).map((k, v) =>
      laagSoort(prev.woning ?? "halfopen", v, n, d) === laagSoort(prev.woning ?? "halfopen", v, prev.verdiepingen, prev.dak) ? k : undefined,
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
      k[v] = programmaVan(laagSoort(woning, v, lagen, dak), n);
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
  const faseIndex = s.fase ? FASE_ORDER.indexOf(s.fase) : -1;

  const kop = [
    { eyebrow: "Stap 1 · Woning", titel: s.woning ? WONING[s.woning].label : "Welke woning droogt u?" },
    { eyebrow: "Stap 2 · Verdiepingen", titel: `${lagen} ${lagen === 1 ? "bouwlaag" : "bouwlagen"}, ${totaalKamers} kamers` },
    { eyebrow: "Stap 3 · Materiaal", titel: s.wat ? `${WAT_LABEL[s.wat].label}: nog nat` : "Wat is er nat?" },
    { eyebrow: "Stap 4 · Bouwfase", titel: s.fase ? FASE[s.fase].label : "Hoe ver staat de werf?" },
    {
      eyebrow: `Droogplan · ${verdiepingNaam(actief, lagen, dak)}`,
      titel: resultaat ? `${resultaat.items.reduce((n, it) => n + it.q, 0)} toestellen aan het werk` : "Maatwerk",
    },
  ][stap];

  /* ── de volgende-knop per stap ── */
  const volgende =
    stap === 0 ? { ok: !!s.woning, label: "Volgende →" }
    : stap === 2 ? { ok: !!s.wat, label: "Volgende →" }
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
      {/* Geen rode hero: de header staat meteen in zijn lichte variant. */}
      <V3Header lightAfter={-1} />

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
                    <img key={heldFoto} className="ds-held-foto" src={heldFoto} srcSet={fotoSrcSet(heldFoto)} sizes="(max-width: 899px) 100vw, 46vw" alt="" decoding="async" />
                    <figcaption className="ds-held-cap">
                      {DAK_LABEL[dak].label}
                      <i> · {lagen} {lagen === 1 ? "bouwlaag" : "bouwlagen"} · {totaalKamers} kamers</i>
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
                    <div className="ds-lbl">Verdiepingen</div>
                    <div className="ds-hkset" role="radiogroup" aria-label="Aantal verdiepingen">
                      {[1, 2, 3].map((n) => (
                        <button key={n} type="button" role="radio" aria-checked={lagen === n} disabled={n > maxLagen} className={`ds-hk${lagen === n ? " on" : ""}`} onClick={() => zetLagen(n)}>
                          <HuisIcoon dak={dak} lagen={n} />
                          <b><span className="ds-lang">{n} {n === 1 ? "bouwlaag" : "bouwlagen"}</span><span className="ds-kort">{n} {n === 1 ? "laag" : "lagen"}</span></b>
                          <small>{n === 1 ? "Gelijkvloers" : n === 2 ? "+ 1 verdiep" : isZolder(2, 3, dak) ? "+ zolder" : "+ 2 verdiepen"}</small>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="ds-groei">
                    <div className="ds-lbl ds-lbl--rij">Kamers<span>{totaalKamers} in totaal</span></div>
                    <div className="ds-verdrijen">
                      {aantallen.map((n, v) => {
                        const naam = verdiepingNaam(v, lagen, dak);
                        return (
                          <div key={v} className={`ds-verdrij${toonPlan && verd === v ? " on" : ""}`}>
                            <button type="button" className="ds-verdrij-naam" onClick={() => kiesVerdieping(v)} aria-label={`Toon ${naam.toLowerCase()} in de tekening`}>
                              <b>{naam}</b>
                              <small>{kamerNamen(kamers.filter((k) => k.verdieping === v && k.soort === "kamer").map((k) => k.naam))}</small>
                            </button>
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
                  <h2>Wat is er nat, en hoe dik?</h2>
                  <p className="ds-sub">Elke centimeter houdt water vast dat eruit moet voor u kunt afwerken.</p>
                  <div className="ds-groei">
                    <div className="ds-lbl">Wat droogt u</div>
                    <div className="ds-tegels ds-tegels--groot" role="radiogroup" aria-label="Wat droogt u">
                      {WATTEN.map((w) => (
                        <button key={w} type="button" role="radio" aria-checked={s.wat === w} className={`ds-tegel${s.wat === w ? " on" : ""}`} onClick={() => setS((p) => ({ ...p, wat: w }))}>
                          <span className="ds-tegel-art"><Doorsnede2 wat={w} /></span>
                          <b>{WAT_LABEL[w].label}</b>
                          <small>{WAT_LABEL[w].sub}</small>
                        </button>
                      ))}
                    </div>
                  </div>
                  {(s.wat === "pleister" || s.wat === "beide") && (
                    <Dikte label="Dikte pleisterwerk" waarden={PD_VALUES} gekozen={s.pd} onKies={(v) => setS((p) => ({ ...p, pd: v }))} />
                  )}
                  {(s.wat === "chape" || s.wat === "beide") && (
                    <Dikte label="Dikte chape" waarden={CD_VALUES} gekozen={s.cd} onKies={(v) => setS((p) => ({ ...p, cd: v }))} />
                  )}
                  {!s.wat && <p className="ds-hint">Kies wat er nat is; daarna vragen we hoe dik.</p>}
                </>
              )}

              {stap === 3 && (
                <>
                  <h2>Hoe ver staat de werf?</h2>
                  <p className="ds-sub">Het pakket blijft hetzelfde; waar u op let verschilt.</p>
                  <div className="ds-tl" role="radiogroup" aria-label="Bouwfase">
                    <span className="ds-tl-fill" style={{ width: `${Math.max(0, faseIndex) * 20}%` }} />
                    {FASE_ORDER.map((f, i) => (
                      <button key={f} type="button" role="radio" aria-checked={s.fase === f} aria-label={FASE[f].label} className={i === faseIndex ? "on" : i < faseIndex ? "past" : undefined} onClick={() => setS((p) => ({ ...p, fase: f }))}>
                        <span className="ds-dot">{i + 1}</span>
                        <small>{FASE_KORT[f]}</small>
                      </button>
                    ))}
                  </div>
                  <div className={`ds-advies${s.fase ? "" : " leeg"}`} aria-live="polite">
                    <b>{s.fase ? FASE[s.fase].label : "Kies een fase"}</b>
                    {s.fase ? FASE[s.fase].advies : "Van net gepleisterd tot volledig bewoond."}
                  </div>
                  <div>
                    <div className="ds-lbl">Binnen al boven 15 °C?</div>
                    <div className="ds-chips" role="radiogroup" aria-label="Verwarming">
                      <button type="button" role="radio" aria-checked={antwoorden.verwarmt} className={`ds-chip${antwoorden.verwarmt ? " on" : ""}`} onClick={() => setS((p) => ({ ...p, verwarmt: true }))}>
                        Ja, er wordt verwarmd
                      </button>
                      <button type="button" role="radio" aria-checked={!antwoorden.verwarmt} className={`ds-chip${!antwoorden.verwarmt ? " on" : ""}`} onClick={() => setS((p) => ({ ...p, verwarmt: false }))}>
                        Nee, voeg kachels toe
                      </button>
                    </div>
                  </div>
                </>
              )}

              {stap === 4 && resultaat && (
                <>
                  <h2>
                    {WONING[woning].label}, {maat}
                  </h2>
                  <p className="ds-sub">
                    {WAT_LABEL[antwoorden.wat].label} · {FASE_KORT[antwoorden.fase].toLowerCase()} · {antwoorden.verwarmt ? "zelf verwarmd" : "met kachels"}
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
              <IsoHouse
                woning={woning}
                verdiepingen={lagen}
                dak={dak}
                kamers={kamers}
                openingen={plan.openingen}
                trappen={plan.trappen}
                open={stap >= 2 || (stap === 1 && toonPlan)}
                actief={stap === 4 || stap === 1 ? verd : 0}
                plaatsingen={plaatsingen}
                werkend={stap === 4 && !!resultaat}
                materiaal={materiaal}
                cyclus={CYCLUS}
              />
              {stap === 2 && s.wat && <Doorsnede wat={s.wat} pd={antwoorden.pd} cd={antwoorden.cd} />}
              {stap === 4 && resultaat && (
                <DagTeller key={`${actief}-${resultaat.dagen}`} dagen={resultaat.dagen} cyclus={CYCLUS} vocht={FASE[antwoorden.fase].vocht} />
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
                        aria-selected={actief === v}
                        className={actief === v ? "on" : undefined}
                        onClick={() => {
                          setActief(v);
                          setHandmatig(true);
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
                <div className="ds-cart-prijs">
                  <p>Uw pakket</p>
                  {resultaat && stap >= 2 ? <b>{euro(resultaat.prijs)}</b> : maatwerk ? <b className="dim">Maatwerk</b> : <b className="dim">Na stap 3</b>}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <V3Footer />
    </div>
  );
};

/** Foto uit Astra als die er is, anders de tekening (`children`). Decoratief: de knop draagt de naam. */
function Foto({ sleutel, children }: { sleutel: FotoSleutel; children: ReactNode }) {
  const src = fotoVoor(sleutel);
  return src ? <img className="ds-foto" src={src.replace(/\.webp$/, "-640.webp")} srcSet={fotoSrcSet(src)} sizes="(max-width: 899px) 45vw, 22vw" alt="" loading="lazy" decoding="async" /> : <>{children}</>;
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

/** "Leefruimte, keuken, berging" — of "3 slaapkamers, badkamer" — voor onder de naam van een verdieping. */
function kamerNamen(namen: string[]): string {
  const tel = new Map<string, number>();
  for (const n of namen) tel.set(n, (tel.get(n) ?? 0) + 1);
  const delen = [...tel].map(([n, q], i) => {
    const woord = q > 1 ? `${q} ${n.toLowerCase()}s` : n.toLowerCase();
    return i === 0 ? woord.charAt(0).toUpperCase() + woord.slice(1) : woord;
  });
  return delen.join(", ");
}

/** Keuzeknoppen voor een laagdikte, uit de catalogus, plus "weet ik niet". */
function Dikte({ label, waarden, gekozen, onKies }: {
  label: string; waarden: readonly string[]; gekozen: string; onKies: (v: string) => void;
}) {
  const grootste = Math.max(...waarden.map(Number));
  return (
    <div>
      <div className="ds-lbl">{label}</div>
      <div className="ds-chips ds-chips--dikte" role="radiogroup" aria-label={label}>
        {waarden.map((v) => (
          <button key={v} type="button" role="radio" aria-checked={gekozen === v} className={`ds-chip${gekozen === v ? " on" : ""}`} onClick={() => onKies(v)}>
            <i className="ds-laag" style={{ height: `${4 + (14 * Number(v)) / grootste}px` }} aria-hidden="true" />
            {v.replace(".", ",")} cm
          </button>
        ))}
        <button type="button" role="radio" aria-checked={gekozen === "onbekend"} className={`ds-chip${gekozen === "onbekend" ? " on" : ""}`} onClick={() => onKies("onbekend")}>
          Weet ik niet
        </button>
      </div>
    </div>
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
function DagTeller({ dagen, cyclus, vocht }: { dagen: number; cyclus: number; vocht: number }) {
  const [t, setT] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setT(1);
      return;
    }
    const start = performance.now();
    const id = window.setInterval(() => {
      // De sluier droogt in de eerste 80% van de cyclus en blijft dan even staan.
      setT(Math.min(1, ((performance.now() - start) % (cyclus * 1000)) / (cyclus * 800)));
    }, 120);
    return () => window.clearInterval(id);
  }, [cyclus]);
  const dag = Math.max(1, Math.round(t * dagen));
  const rest = vocht * (1 - t);
  return (
    <div className="ds-teller">
      <span>
        Dag <b>{dag}</b> van {dagen}
      </span>
      <div className="ds-meter" aria-hidden="true">
        <i style={{ width: `${Math.max(3, rest * 100)}%` }} />
      </div>
      <small>{t >= 1 ? "Klaar om af te werken" : "Vocht in muren en vloer"}</small>
    </div>
  );
}

export default VerhuurSimulatorPage;

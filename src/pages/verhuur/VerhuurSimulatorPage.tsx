import { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import IsoHouse from "@/components/simulator/IsoHouse";
import IsoHouseAuto from "@/components/simulator/IsoHouseAuto";
import WaterschadeAanvraag from "@/components/simulator/WaterschadeAanvraag";
import type { Antwoorden as WsAntwoorden } from "@/components/simulator/WaterschadeAanvraag.copy";
import { materiaalVoor } from "@/components/simulator/materiaal";
import { voorlaadToestellen } from "@/components/simulator/3d/modellen";
import { TEMPO_ORDER, type Tempo } from "@/lib/droogTempo";
import { Bouwfilm, FaseKnoppen, FaseRegels } from "@/components/simulator/Bouwfilm";
import { DROOG_DUUR, FILM_START, FILM_WACHT, filmStatus, plaatsDuur, voortgangNa, type FilmPlan } from "@/components/simulator/film";
import { fotoSrcSet, fotoVoor, huisFoto, type FotoSleutel } from "@/components/simulator/fotos";
import {
  FASE,
  dakTekst,
  faseInTaal,
  watTekst,
  woningTekst,
  maxKamers,
  MAX_VERDIEPINGEN,
  MIN_KAMERS,
  LAGEN_PER_FASE,
  WONING,
  geschatteOppervlakte,
  isMaatwerk,
  aantalKamers,
  isZolder,
  laagSoort,
  planVoor,
  woningBreedte,
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
import { CD_VALUES, DEFAULT_CD, DEFAULT_PD, PD_VALUES, SIZE_VALUES, configToQuery } from "@/lib/verhuur";
import { CAT } from "@/data/verhuur";
import { catInTaal } from "@/data/verhuur.fr";
import { extraNaarQuery } from "@/lib/booking";
import { CONTACT } from "@/lib/site";
import { useSeo } from "@/data/seo";
import { NUMBER_LOCALE } from "@/i18n/taal";
import { useCopy, useLokaalPad, useTaal, useToonBedrag } from "@/i18n/useTaal";
import { COPY, type SimCopy } from "./VerhuurSimulatorPage.copy";
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

/** One step of the drying film: which floor, placing or drying, and the days it covers. */
interface Segment extends FilmPlan { v: number; dagVan: number; dagTot: number }

/**
 * De droogfilm: eerst gaan de toestellen erin, verdieping per verdieping van onder
 * naar boven; daarna droogt de woning van boven naar beneden. De bovenste verdieping
 * is klaar op 60 % van de termijn, het gelijkvloers op het einde, de tussenliggende
 * gelijk verdeeld. De dagteller loopt daardoor door over de verdiepingen; in beeld
 * begint elke verdieping wel nat, zodat je ze allemaal ziet drogen.
 */
function droogfilm(lagen: number, dagen: number, perLaag: number[]): Segment[] {
  const uit: Segment[] = [];
  // De bovenste verdieping droogt meteen daarna op dezelfde plek: daar geen extra kijkpauze.
  for (let v = 0; v < lagen; v++) uit.push({ v, modus: "plaatsen", van: 0, tot: 0, duur: plaatsDuur(perLaag[v] ?? 0, v < lagen - 1), toestellen: perLaag[v] ?? 0, dagVan: 0, dagTot: 0 });
  const klaarOp = (v: number) => (lagen === 1 ? dagen : Math.round(dagen * (0.6 + (0.4 * (lagen - 1 - v)) / (lagen - 1))));
  let vorige = 0;
  for (let v = lagen - 1; v >= 0; v--) {
    const dag = klaarOp(v);
    // Een verdieping boven het gelijkvloers blijft even droog in beeld; de laatste
    // beëindigt de film op het moment dat ze droog is, samen met de laatste dag.
    // Elke verdieping begint nat in beeld (van 0), zodat je ze allemaal ziet drogen; de dagteller
    // loopt wel door (dagVan), want de verdiepingen drogen in werkelijkheid tegelijk.
    uit.push({ v, modus: "drogen", van: 0, tot: 1, duur: DROOG_DUUR, naloop: v > 0 ? 0.5 : 0, dagVan: vorige, dagTot: dag });
    vorige = dag;
  }
  return uit;
}
/** Vaste lege lijst: een nieuwe [] bij elke render zou de film telkens herstarten. */
const GEEN_PLAATSINGEN: Plaatsing[] = [];

// Bouwfase vóór Materiaal: hoe ver de werf staat, bepaalt welke lagen nog nat kunnen zijn.
// De namen staan in de COPY (`stappen`), in dezelfde volgorde.
const WONINGEN: Woning[] = ["rijwoning", "halfopen", "open", "appartement"];
const DAKEN: Dak[] = ["zadeldak", "plat", "lessenaar"];
/**
 * Echte foto's voor het dakscherm: een bestaande woning herkent de bezoeker sneller dan het
 * gerenderde huis, dat bij elk dak hetzelfde blijft. Zonder eigen foto: de render van de simulator.
 */
const DAK_FOTO: Partial<Record<Dak, string>> = {
  zadeldak: "/simulator/dakfoto-zadeldak.webp",
  plat: "/simulator/dakfoto-plat.webp",
};
// Korte daknamen voor de keuzeknoppen (drie op een half paneel): `dakKort` in de COPY.
const MATEN = SIZE_VALUES.map(Number);
/** The slider steps: the catalogue sizes, then "more than the largest". */
const OPP_STAPPEN = [...MATEN.map(String), "custom"];
const GROOTSTE = MATEN[MATEN.length - 1] ?? 300;

interface State extends Omit<SimAnswers, "woning" | "wat" | "fase" | "verwarmt" | "tempo" | "ruimtes"> {
  woning: Woning | null;
  fase: Fase | null;
  verwarmt: boolean | null;
  tempo: Tempo | null;
  /** welke ruimtes per bouwlaag; een lege plek = de standaardindeling */
  kamers: (Programma | undefined)[];
}

const START: State = {
  woning: null,
  verdiepingen: 2,
  dak: "zadeldak",
  size: snapOppervlakte(geschatteOppervlakte("halfopen", 2)),
  pd: DEFAULT_PD,
  cd: DEFAULT_CD,
  fase: null,
  verwarmt: null,
  tempo: null,
  kamers: [],
};


/**
 * Wat er nat is, afgeleid uit de fase en de twee diktes: alleen de lagen die er in
 * die fase liggen tellen ("geen" laat een laag weg). Nooit opgeslagen, zodat het
 * niet kan achterlopen op de fase of de diktes.
 */
function watVoor(fase: Fase, pd: string, cd: string): Wat | null {
  const lagen = LAGEN_PER_FASE[fase];
  if (lagen.length === 0) return "waterschade";
  const muur = lagen.includes("pd") && pd !== "geen";
  const vloer = lagen.includes("cd") && cd !== "geen";
  return muur && vloer ? "beide" : muur ? "pleister" : vloer ? "chape" : null;
}

/** Antwoorden aanvullen tot een volledige set voor de rekenkern. */
function volledig(s: State, wat: Wat | null): SimAnswers {
  const fase = s.fase ?? "chape";
  return {
    woning: s.woning ?? "halfopen",
    verdiepingen: s.verdiepingen,
    dak: s.dak,
    size: s.size,
    wat: wat ?? "beide",
    // "geen" = die laag is droog; wat laat ze al weg, de waarde moet alleen geldig zijn.
    pd: s.pd === "onbekend" || s.pd === "geen" ? DEFAULT_PD : s.pd,
    cd: s.cd === "onbekend" || s.cd === "geen" ? DEFAULT_CD : s.cd,
    fase,
    verwarmt: s.verwarmt ?? FASE[fase].verwarmtWaarschijnlijk,
    tempo: s.tempo ?? "gemiddeld",
  };
}

const VerhuurSimulatorPage = () => {
  const t = useCopy(COPY);
  const taal = useTaal();
  const lp = useLokaalPad();
  const toon = useToonBedrag();
  const seo = useSeo("verhuurSimulator");
  const cat = catInTaal(taal);
  const STAPPEN = t.stappen;
  const [s, setS] = useState<State>(START);
  /**
   * Eerste vraag: een werf drogen of waterschade. Waterschade gaat niet door de simulator
   * maar meteen naar een aanvraag: die klant wil hulp, geen berekening (Brent, 23-11-2026).
   */
  const [soort, setSoort] = useState<"werf" | "water" | null>(null);
  /** Wat de bezoeker bij waterschade aanvinkte: de natte verdiepingen kleuren in het 3D-huis. */
  const [ws, setWs] = useState<Pick<WsAntwoorden, "plekken" | "nat"> | null>(null);
  const [stap, setStap] = useState(0);
  const [actief, setActief] = useState(0);
  const [handmatig, setHandmatig] = useState(false);
  /** where the drying film is: an index into `droogfilm(...)` */
  const [seg, setSeg] = useState(0);
  /** De droogfilm is helemaal afgespeeld: de woning staat droog en leeg. */
  const [filmKlaar, setFilmKlaar] = useState(false);
  /** Telt op bij "opnieuw afspelen", zodat de film van vooraf aan begint. */
  const [ronde, setRonde] = useState(0);
  /** de fase waar de bezoeker in stap 3 naar wijst; de film toont ze al voor ze gekozen is */
  const [faseToon, setFaseToon] = useState<Fase | null>(null);
  // Stap 2: het huis gaat open zodra de bezoeker aan de indeling werkt, en
  // weer dicht bij bouwlagen of dak — dan wil hij de woning zien.
  const [toonPlan, setToonPlan] = useState(false);
  /** Stap 2 heeft twee schermen: eerst het dak (foto's), dan de opbouw van de woning. */
  const [deel, setDeel] = useState<0 | 1>(0);
  const root = useRef<HTMLDivElement>(null);

  const wat = s.fase ? watVoor(s.fase, s.pd, s.cd) : null;
  // Bij waterschade is er geen woningvraag: het huis is een gewone halfopen woning, met een
  // zolder erbij als die nat is. De keuzes van de werf-flow blijven onaangeroerd.
  const wsPlekken = soort === "water" ? ws?.plekken ?? [] : [];
  const huis: State = soort === "water"
    ? { ...s, woning: "halfopen", dak: "zadeldak", verdiepingen: wsPlekken.includes("zolder") ? 3 : 2, kamers: [] }
    : s;
  const antwoorden = volledig(huis, wat);
  const woning = antwoorden.woning;
  const lagen = antwoorden.verdiepingen;
  const dak = antwoorden.dak;
  // The floor area sets the facade width: a bigger house is drawn wider, not just labelled bigger.
  const breedte = woningBreedte(woning, huis.size, lagen);
  // Wat de bezoeker koos, maar nooit meer kamers dan er op die bouwlaag passen
  // (bv. na een wissel van open bebouwing naar rijwoning).
  const maxPer = Array.from({ length: lagen }, (_, v) => maxKamers(woning, v, lagen, dak, breedte));
  const programma = (v: number) => {
    const p = huis.kamers[v] ?? standaardProgramma(woning, v, lagen, dak, breedte);
    return aantalKamers(p) > maxPer[v] ? programmaVan(laagSoort(woning, v, lagen, dak), maxPer[v], lagen) : p;
  };
  const programmas = Array.from({ length: lagen }, (_, v) => programma(v));
  const aantallen = programmas.map(aantalKamers);
  const sleutelPlan = JSON.stringify(programmas);

  const plan = useMemo(
    () => planVoor(woning, lagen, dak, programmas, breedte),
    // programmas is elke render een nieuwe array; de inhoud telt.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [woning, lagen, dak, sleutelPlan, breedte],
  );
  const kamers = plan.kamers;
  const resultaat = useMemo(
    () => (wat ? simResultaat({ ...antwoorden, ruimtes: aantallen.reduce((a, b) => a + b, 0) }) : null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [wat, s.size, s.pd, s.cd, s.fase, s.verwarmt, s.tempo, woning, lagen, sleutelPlan],
  );
  const aantalToestellen = resultaat ? resultaat.items.reduce((n, it) => n + it.q, 0) : 0;
  const plaatsingen = useMemo(
    () => (resultaat && stap === 4 ? plaatsToestellen(resultaat.items, kamers, plan.trappen) : []),
    [resultaat, kamers, plan.trappen, stap],
  );

  // Waterschade toont een bewoonde, afgewerkte woning; nat zodra er een plek aangevinkt is.
  const materiaal = soort === "water"
    ? materiaalVoor(wsPlekken.length ? "waterschade" : null, "afgewerkt", 1)
    : materiaalVoor(stap >= 3 ? wat : null, stap >= 2 ? s.fase : null, FASE[antwoorden.fase].vocht);

  // Het droogplan speelt als film (zie droogfilm): eerst plaatsen van onder naar
  // boven, dan drogen van boven naar beneden, en daarna staat de woning droog en
  // leeg (filmKlaar). Elk stuk telt vanaf het echte begin van de 3D-film (die meldt
  // FILM_START na het laden van de modellen); zonder 3D vanaf nu. Kiest de
  // bezoeker zelf een verdieping, dan toont die haar droogstuk en blijft ze staan.
  // Terwijl de bezoeker de laatste vraag (materiaal) beantwoordt, de modellen van zijn pakket alvast laden.
  useEffect(() => {
    // Ook in stap 2: zonder lagen (ruwbouw, ramen) springt die meteen naar het droogplan.
    if ((stap === 2 || stap === 3) && resultaat) voorlaadToestellen([...new Set(resultaat.items.map((it) => it.k))]);
  }, [stap, resultaat]);

  // Toestellen per verdieping, één keer geteld: voor de film (plaatsen duurt zo lang
  // als de valpartijen), de teller en de verdiepingsknoppen.
  const perLaag = useMemo(() => {
    const verdiepVan = new Map(kamers.map((k) => [k.id, k.verdieping]));
    return Array.from({ length: lagen }, (_, v) => plaatsingen.filter((p) => verdiepVan.get(p.kamer) === v).length);
  }, [kamers, plaatsingen, lagen]);
  const segmenten = useMemo(() => (resultaat ? droogfilm(lagen, resultaat.dagen, perLaag) : []), [resultaat, lagen, perLaag]);
  useEffect(() => setSeg(0), [segmenten]);
  const segment = segmenten[Math.min(seg, segmenten.length - 1)];
  useEffect(() => {
    if (stap !== 4 || handmatig || filmKlaar || !segment) return;
    let id = 0;
    const stop = () => window.clearTimeout(id);
    // Zolang de 3D op zijn modellen wacht (FILM_WACHT) loopt de timer niet.
    const volgende = (e?: Event) => {
      stop();
      if (filmStatus.wacht) return;
      const start = e ? (e as CustomEvent<number>).detail : performance.now();
      id = window.setTimeout(() => {
        if (seg + 1 < segmenten.length) setSeg(seg + 1);
        else setFilmKlaar(true);
      }, Math.max(0, segment.duur * 1000 - (performance.now() - start)));
    };
    volgende();
    window.addEventListener(FILM_START, volgende);
    window.addEventListener(FILM_WACHT, stop);
    return () => {
      stop();
      window.removeEventListener(FILM_START, volgende);
      window.removeEventListener(FILM_WACHT, stop);
    };
  }, [stap, handmatig, filmKlaar, seg, segment, segmenten, ronde]);

  const opnieuwAfspelen = () => {
    setFilmKlaar(false);
    setHandmatig(false);
    setSeg(0);
    setActief(0);
    setRonde((r) => r + 1);
  };

  const naar = (n: number) => {
    // Terug naar stap 2 komt op de opbouw uit, niet opnieuw op het dak.
    setDeel(n === 1 && stap > 1 ? 1 : 0);
    setStap(n);
    setToonPlan(false);
    setActief(0);
    setSeg(0);
    setHandmatig(false);
    setFilmKlaar(false);
  };

  // Een andere fase kan lagen toevoegen of wegnemen: wat volgt vanzelf (watVoor).
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
      const k = Array.from({ length: lagen }, (_, i) => prev.kamers[i] ?? standaardProgramma(woning, i, lagen, dak, breedte));
      k[v] = programmaVan(laagSoort(woning, v, lagen, dak), n, lagen);
      return { ...prev, kamers: k };
    });
  };

  /**
   * Eén kamer meer of minder op het totaal. De klik blijft op de verdieping die de tekening
   * toont, zodat je de kamer ziet verschijnen of verdwijnen; pas als die vol (of op het minimum)
   * is, gaat hij naar de dichtstbijzijnde verdieping die nog kan — bij erbij eerst naar boven,
   * bij eraf eerst naar beneden. Eerder ging elke klik naar een andere verdieping en sprong de
   * tekening bij elke klik heen en weer.
   */
  const zetTotaal = (d: 1 | -1) => {
    const kan = (v: number) => (d > 0 ? aantallen[v] < maxPer[v] : aantallen[v] > MIN_KAMERS);
    const volgorde = [verd, ...Array.from({ length: lagen }, (_, i) => i)
      .filter((v) => v !== verd)
      .sort((a, b) => Math.abs(a - verd) - Math.abs(b - verd) || (d > 0 ? b - a : a - b))];
    const doel = volgorde.find(kan);
    if (doel !== undefined) zetAantal(doel, aantallen[doel] + d);
  };

  /** Dak kiezen gaat na een korte pauze vanzelf door, zodat de keuze nog even zichtbaar is. */
  const kiesDak = (d: Dak) => {
    zetDak(d);
    window.setTimeout(() => setDeel(1), 320);
  };

  const kiesVerdieping = (v: number) => {
    setToonPlan(true);
    setActief(v);
  };

  const verd = Math.min(actief, lagen - 1);
  // In the drying plan the film picks the floor, unless the visitor chose one.
  const handSeg = segmenten.find((sg) => sg.modus === "drogen" && sg.v === verd);
  const filmSeg = stap === 4 ? (handmatig ? handSeg : segment) : undefined;
  const toonVerd = stap === 4 && filmSeg ? filmSeg.v : verd;
  const maxLagen = woning === "appartement" ? 2 : MAX_VERDIEPINGEN;
  const maatwerk = isMaatwerk(antwoorden);
  const totaalKamers = aantallen.reduce((a, b) => a + b, 0);
  const kanMeer = aantallen.some((n, v) => n < maxPer[v]);
  const kanMinder = aantallen.some((n) => n > MIN_KAMERS);
  // Een appartement heeft altijd een plat dak: dan valt het dakscherm weg.
  const toonDak = deel === 0 && WONING[woning].dakToegelaten.length > 1;
  const maat = maatwerk ? `${GROOTSTE}+ m²` : `± ${s.size} m²`;
  const schatting = geschatteOppervlakte(woning, lagen);
  const opIk = Math.max(0, OPP_STAPPEN.indexOf(maatwerk ? "custom" : s.size));
  const opSchat = Math.max(0, OPP_STAPPEN.indexOf(snapOppervlakte(schatting)));
  // Before a phase is chosen, neither answer is shown as picked.
  const verwarmd = s.verwarmt ?? (s.fase ? FASE[s.fase].verwarmtWaarschijnlijk : null);

  const kop = [
    { eyebrow: t.kop.stap1, titel: s.woning ? woningTekst(s.woning, taal).label : t.kop.welkeWoning },
    {
      // Na + of − toont de tekening één verdieping: zeg dan welke, anders weet je niet waar de kamer bijkwam.
      eyebrow: toonPlan ? `${t.kop.stap2} · ${verdiepingNaam(verd, lagen, dak, taal)}` : t.kop.stap2,
      titel: t.kop.lagenKamers(woningLagen(lagen, dak, t), totaalKamers),
    },
    { eyebrow: t.kop.stap3, titel: s.fase ? faseInTaal(s.fase, taal).label : t.kop.hoeVer },
    { eyebrow: t.kop.stap4, titel: wat ? t.kop.nogNat(watTekst(wat, taal).label) : t.kop.watNat },
    {
      eyebrow: filmKlaar
        ? t.kop.planKlaar
        : t.kop.plan(filmSeg?.modus === "plaatsen" ? "plaatsen" : "drogen", verdiepingNaam(toonVerd, lagen, dak, taal)),
      titel: !resultaat
        ? t.kop.maatwerk
        : filmKlaar
          ? t.kop.droogKlaar
          : filmSeg?.modus === "plaatsen"
            ? t.kop.geplaatst
            : t.kop.aanHetWerk(aantalToestellen),
    },
  ][stap];
  /** De verdieping die het huis bij waterschade toont: de hoogste natte (kelder = gelijkvloers). */
  const wsVerd = wsPlekken.includes("zolder") ? lagen - 1 : wsPlekken.includes("verdieping") ? 1 : 0;
  const stageKop = soort === "water"
    ? { eyebrow: t.wsStage.eyebrow, titel: wsPlekken.length ? t.wsStage.nat(wsPlekken.map((p) => t.wsStage.plek[p]).join(" en ")) : t.wsStage.leeg }
    : soort === null
      ? { eyebrow: t.wsStage.keuzeEyebrow, titel: t.keuzeKop }
      : kop;

  /** De lagen van deze fase; zonder lagen valt de diktevraag (stap 4) weg. */
  const faseLagen = s.fase ? LAGEN_PER_FASE[s.fase] : (["pd", "cd"] as const);
  const zonderLagen = faseLagen.length === 0;
  const verder = stap === 2 && zonderLagen ? 4 : stap + 1;
  const zichtbareStappen = STAPPEN.map((naam, i) => ({ naam, i })).filter(({ i }) => !(zonderLagen && i === 3));
  const stapNr = zichtbareStappen.findIndex(({ i }) => i === stap) + 1;
  const terug = stap === 4 && zonderLagen ? 2 : Math.max(0, stap - 1);

  /* ── de volgende-knop per stap ── */
  const volgende: { ok: boolean; label: string; melding?: string } =
    stap === 0 ? { ok: !!s.woning, label: t.volgende }
    : stap === 2 ? { ok: !!s.fase && !!s.tempo, label: zonderLagen ? t.toonPlan : t.volgende }
    : stap === 3 ? { ok: !!wat, label: t.toonPlan, melding: wat ? undefined : faseLagen.length > 1 ? t.minstensEen : t.nietsNat }
    : { ok: true, label: t.volgende };

  // Weergave volgens de klant (TVAC/HTVA); de prijs zelf blijft die van de catalogus.
  const prijs = resultaat ? toon(resultaat.prijs) : null;

  const totaal = resultaat && (
    <div className="ds-tot">
      <div>
        <span>{t.totaal}</span>
        <small>{t.voorHuur(resultaat.weken)} · {prijs?.label}</small>
      </div>
      <b>{prijs?.tekst}</b>
    </div>
  );

  return (
    <div className="vh-calc ds-sim" data-stap={stap} data-soort={soort ?? "keuze"} ref={root}>
      <PageMeta
        {...seo}
        jsonLd={[
          serviceSchema({
            name: t.service.name,
            description: t.service.description,
            path: lp("/verhuur/simulator"),
            serviceType: t.service.serviceType,
          }),
          breadcrumbSchema([
            { name: t.kruimelHome, path: lp("/") },
            { name: t.kruimel, path: lp("/verhuur/simulator") },
          ]),
        ]}
      />
      {/* Conversiepagina: geen sitemenu en geen footer, het hele scherm is de simulator. */}
      {soort !== "werf" && (
        <a className="ds-bellen" href={`tel:${CONTACT.phoneE164}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
          {t.funnel.lieverBellen} <b>{CONTACT.phoneLocal}</b>
        </a>
      )}
      <div className="ds-app">

        <main className="ds-main">
          <h1 className="sr-only">{t.h1}</h1>

          {/* ───────────── vraagpaneel ───────────── */}
          <section className="ds-panel" aria-label={t.vragen}>
            <div className="ds-ptop">
              <span className="ds-merk">
                <span className="ds-merk-v"><img src="/simulator/merk-v.webp" alt="" width={159} height={140} /></span>
                <span className="ds-merk-t">
                  <img src="/simulator/merk-woord.webp" alt="Vernast" width={607} height={75} />
                  <small>{t.droogsimulator}</small>
                </span>
              </span>
              <span className="ds-count" hidden={soort !== "werf"}>
                {stap < 4 ? <>{t.stapTeller[0]} <b>{stapNr}</b> {t.stapTeller[1]} {zichtbareStappen.length - 1}</> : t.droogplan}
              </span>
            </div>

            {soort === "water" ? (
              <WaterschadeAanvraag onTerug={() => { setSoort(null); setWs(null); }} onWijzig={(a) => setWs({ plekken: a.plekken, nat: a.nat })} />
            ) : soort === null ? (
              <>
                <div className="ds-body" key="keuze">
                  <h2>{t.keuzeKop}</h2>
                  <p className="ds-sub">{t.keuzeSub}</p>
                  <div className="ds-daken ds-daken--twee" role="radiogroup" aria-label={t.keuzeKop}>
                    {(["werf", "water"] as const).map((k) => (
                      <button key={k} type="button" role="radio" aria-checked={false} className="ds-dak" onClick={() => setSoort(k)}>
                        <img src={`/simulator/keuze-${k}.webp`} alt="" decoding="async" style={k === "water" ? { objectPosition: "center 30%" } : undefined} />
                        {k === "water" && <span className="ds-dak-tag">{t.keuzeTag}</span>}
                        <span className="ds-dak-t">
                          <b>{t.keuze[k].label}</b>
                          <small>{t.keuze[k].sub}</small>
                        </span>
                        <i className="ds-dak-v" aria-hidden="true" />
                      </button>
                    ))}
                  </div>
                  <p className="ds-beloftes">{t.funnel.beloftes.map((v) => <span key={v}>✓ {v}</span>)}</p>
                </div>
                <div className="ds-foot" />
              </>
            ) : (
            <>
            <div className="ds-body" key={`${stap}-${toonDak ? 0 : 1}`}>
              {stap === 0 && (
                <>
                  <h2>{t.s1Kop}</h2>
                  <p className="ds-sub">{t.s1Sub}</p>
                  <div className="ds-cards" role="radiogroup" aria-label={t.typeWoning}>
                    {WONINGEN.map((w) => (
                      <button key={w} type="button" role="radio" aria-checked={s.woning === w} className={`ds-card${s.woning === w ? " sel" : ""}`} onClick={() => kiesWoning(w)}>
                        <span className={`ds-art${fotoVoor(`woning-${w}`) ? " ds-art--foto" : ""}`}>
                          <Foto sleutel={`woning-${w}`}>
                            <IsoHouse mini woning={w} verdiepingen={w === "appartement" ? 1 : 2} dak={w === "appartement" ? "plat" : "zadeldak"} kamers={[]} open={false} actief={0} />
                          </Foto>
                        </span>
                        <span className="ds-t">
                          <b>{woningTekst(w, taal).label}</b>
                          <small>{woningTekst(w, taal).sub}</small>
                        </span>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {stap === 1 && toonDak && (
                <>
                  <h2>{t.s2DakKop}</h2>
                  <p className="ds-sub">{t.s2DakSub}</p>
                  <div className="ds-daken" role="radiogroup" aria-label={t.daktype}>
                    {DAKEN.map((d) => {
                      const eigen = DAK_FOTO[d];
                      const foto = eigen ?? huisFoto(woning, d, lagen);
                      return (
                        <button key={d} type="button" role="radio" aria-checked={dak === d} className={`ds-dak${dak === d ? " sel" : ""}`} onClick={() => kiesDak(d)}>
                          <img src={foto} srcSet={eigen ? undefined : fotoSrcSet(foto)} sizes="(max-width: 899px) 100vw, 30vw" alt="" loading="lazy" decoding="async" />
                          <span className="ds-dak-t">
                            <b>{dakTekst(d, taal).label}</b>
                            <small>{t.dakHint[d]}</small>
                          </span>
                          <i className="ds-dak-v" aria-hidden="true">
                            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 6.2l2.3 2.3 4.7-5" /></svg>
                          </i>
                        </button>
                      );
                    })}
                  </div>
                </>
              )}

              {stap === 1 && !toonDak && (
                <>
                  <h2>{t.s2Kop}</h2>
                  <div className="ds-kaart">
                    <div className="ds-kaart-kop ds-kaart-kop--lagen">{t.verdiepen}</div>
                    <div className="ds-lagenkeuze" role="radiogroup" aria-label={t.verdiepen}>
                      {Array.from({ length: MAX_VERDIEPINGEN }, (_, i) => i + 1).map((n) => (
                        <button key={n} type="button" role="radio" aria-checked={lagen === n} aria-label={woningLagen(n, dak, t)} disabled={n > maxLagen} className={`ds-laagtegel${lagen === n ? " on" : ""}`} onClick={() => zetLagen(n)}>
                          <HuisIcoon dak={dak} lagen={n} />
                          {n === 1 ? <b>{t.gelijkvloers}</b> : <b>+{n - 1}<small>{t.verdiepKort(n - 1)}</small></b>}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="ds-kaart">
                    <div className="ds-kamers">
                      <span>
                        <b>{t.kamersTotaal}</b>
                        <small>{t.kamersUitleg}</small>
                      </span>
                      <span className="ds-kteller">
                        <button type="button" aria-label={t.kamerMinder} disabled={!kanMinder} onClick={() => zetTotaal(-1)}>−</button>
                        <output aria-live="polite">{totaalKamers}</output>
                        <button type="button" aria-label={t.kamerMeer} disabled={!kanMeer} onClick={() => zetTotaal(1)}>+</button>
                      </span>
                    </div>
                  </div>

                  <div className="ds-kaart ds-opp">
                    <div className="ds-opp-kop">
                      <span>
                        <b>{t.vloeroppervlakte}</b>
                        <small>
                          {maatwerk ? t.maatwerkKlein : opIk === opSchat ? t.pastBij : (
                            <button type="button" className="ds-opp-terug" onClick={() => setS((p) => ({ ...p, size: OPP_STAPPEN[opSchat] }))}>
                              {t.geschat(schatting)}
                            </button>
                          )}
                        </small>
                      </span>
                      <span className="ds-opp-getal">{maatwerk ? `${GROOTSTE}+` : s.size}<small>m²</small></span>
                    </div>
                    <div className="ds-opp-schuif" style={{ "--pos": `${(opIk / (OPP_STAPPEN.length - 1)) * 100}%`, "--schat": `${(opSchat / (OPP_STAPPEN.length - 1)) * 100}%` } as CSSProperties}>
                      <input
                        type="range"
                        min={0}
                        max={OPP_STAPPEN.length - 1}
                        step={1}
                        value={opIk}
                        aria-label={t.vloeroppervlakte}
                        aria-valuetext={maatwerk ? t.meerDan(GROOTSTE) : t.tot(s.size)}
                        onChange={(e) => setS((p) => ({ ...p, size: OPP_STAPPEN[Number(e.target.value)] }))}
                      />
                      <i className="ds-opp-tick" aria-hidden="true" />
                      <span className="ds-opp-schaal" aria-hidden="true"><span>{MATEN[0]} m²</span><span>{GROOTSTE}+ m²</span></span>
                    </div>
                  </div>
                </>
              )}

              {stap === 2 && (
                <>
                  <h2>{t.s3Kop}</h2>
                  <p className="ds-sub">{t.s3Sub}</p>
                  <Bouwfilm fase={s.fase} toon={faseToon} onKies={kiesFase} />
                  <div>
                    <div className="ds-lbl">{t.kiesFase}</div>
                    <FaseKnoppen fase={s.fase} onKies={kiesFase} onToon={setFaseToon} />
                  </div>
                  {s.fase && <FaseRegels key={s.fase} fase={s.fase} />}
                  <div className="ds-vragen">
                    <div className="ds-vraag">
                      <span>{t.verwarming}</span>
                      <div className="ds-jn" role="radiogroup" aria-label={t.verwarming}>
                        <button type="button" role="radio" aria-checked={verwarmd === true} className={verwarmd === true ? "on" : undefined} onClick={() => setS((p) => ({ ...p, verwarmt: true }))}>
                          {t.ja}
                        </button>
                        <button type="button" role="radio" aria-checked={verwarmd === false} className={verwarmd === false ? "on" : undefined} onClick={() => setS((p) => ({ ...p, verwarmt: false }))}>
                          {t.nee}
                        </button>
                      </div>
                      {verwarmd === false && (
                        <p className="ds-gevolg"><i>+</i><span><b>{t.kachelsErbij[0]}</b>{t.kachelsErbij[1]}</span></p>
                      )}
                    </div>
                    <div className="ds-vraag ds-vraag--tempo">
                      <span>{t.hoeSnel[0]}<span className="ds-lang">{t.hoeSnel[1]}</span>{taal === "fr" ? " ?" /* Franse typografie */ : "?" /* nl en en */}</span>
                      <div className="ds-tempo" role="radiogroup" aria-label={t.hoeSnelVol}>
                        {TEMPO_ORDER.map((tp) => (
                          <button key={tp} type="button" role="radio" aria-checked={s.tempo === tp} className={s.tempo === tp ? "on" : undefined} onClick={() => setS((p) => ({ ...p, tempo: tp }))}>
                            <b>{t.tempo[tp].label}</b>
                            {/* De termijn ligt per pakket vast; "snel" zet er een droger bij. */}
                            <small>{tp === "snel" ? t.plusDroger : resultaat ? t.weken(resultaat.weken) : t.tempo[tp].tekst}</small>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {stap === 3 && (
                <>
                  <h2>{t.s4Kop}</h2>
                  <p className="ds-sub">
                    {faseLagen.length > 1 ? t.perLaag : t.eenLaag}{t.weetNiet}
                  </p>
                  {/* Alleen de lagen die er in deze fase al liggen: bij een chape is er nog geen pleister. */}
                  {faseLagen.map((laag) => (
                    <LaagKaart
                      key={laag}
                      laag={laag}
                      solo={faseLagen.length === 1}
                      gekozen={s[laag]}
                      onKies={(v) => setS((p) => ({ ...p, [laag]: v }))}
                    />
                  ))}
                </>
              )}

              {stap === 4 && resultaat && (
                <>
                  <span className={`ds-tempo-label ds-tempo-label--${antwoorden.tempo}`}>{t.tempo[antwoorden.tempo ?? "gemiddeld"].label}</span>
                  <h2 className="ds-plan-kop">
                    {t.droogIn} <em>{t.weekOfWeken(resultaat.weken)}</em>
                  </h2>
                  <p className="ds-sub ds-sub--altijd">
                    {woningTekst(woning, taal).label} · {maat} · {t.toestellen(aantalToestellen)}
                  </p>
                  <ul className="ds-bon">
                    {resultaat.items
                      .filter((it) => it.q > 0)
                      .map((it) => (
                        <li key={it.k}>
                          <img src={CAT[it.k].img.replace(/\.png$/, ".webp")} alt="" loading="lazy" decoding="async" />
                          <span className="q">{it.q}×</span>
                          <b>{t.toestelKort[it.k]}</b>
                          <small>{cat[it.k].name.split(", ")[1] ?? ""}</small>
                        </li>
                      ))}
                  </ul>
                  <dl className="ds-stats">
                    {resultaat.capaciteit > 0 && (
                      <div>
                        <dt>{t.ontvochtiging}</dt>
                        <dd>{resultaat.capaciteit} <small>{t.l24u}</small></dd>
                      </div>
                    )}
                    {resultaat.luchtverzet > 0 && (
                      <div>
                        <dt>{t.lucht}</dt>
                        <dd>{resultaat.luchtverzet.toLocaleString(NUMBER_LOCALE[taal])} <small>{t.m3u}</small></dd>
                      </div>
                    )}
                  </dl>
                  <div className="ds-advies ds-advies--plan">
                    <b>{t.letOp} · {faseInTaal(antwoorden.fase, taal).label.toLowerCase()}</b>
                    {faseInTaal(antwoorden.fase, taal).advies}
                  </div>
{totaal}
                </>
              )}

              {stap === 4 && !resultaat && (
                <>
                  <h2>{maatwerk ? t.maatwerkKop : t.geenPakketKop}</h2>
                  <p className="ds-sub ds-sub--altijd">
                    {maatwerk ? t.maatwerkTekst(GROOTSTE) : t.geenPakketTekst}
                  </p>
                  <div className="ds-chips">
                    {maatwerk ? (
                      <a className="ds-book" href="https://survey.typeform.com/to/QJgaZgHX" target="_blank" rel="noopener">
                        {t.maatwerkKnop}
                      </a>
                    ) : (
                      <Link className="ds-book" to={lp("/verhuur/calculator")}>{t.naarCalculator}</Link>
                    )}
                    <a className="ds-chip" href={`tel:${CONTACT.phoneE164}`}>{t.bel(CONTACT.phoneLocal)}</a>
                  </div>
                </>
              )}
            </div>

            <div className="ds-foot">
              <button className={stap === 4 && resultaat ? "ds-rond" : "ds-back"} type="button" aria-label={t.terug} onClick={() => (stap === 0 ? setSoort(null) : stap === 1 && !toonDak && WONING[woning].dakToegelaten.length > 1 ? setDeel(0) : naar(terug))}>
                {stap === 4 && resultaat ? (
                  <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 4l-6 6 6 6" /></svg>
                ) : (
                  t.terugKnop
                )}
              </button>
              {volgende.melding && <p className="ds-melding" role="status">{volgende.melding}</p>}
              {/* De voortgang staat tussen Terug en Volgende, zoals in het ontwerp; in het droogplan is daar de boekknop. */}
              {stap < 4 && !volgende.melding && (
                <ol className="ds-bar" aria-label={t.stapVan(stapNr, zichtbareStappen.length, STAPPEN[stap])}>
                  {zichtbareStappen.map(({ naam, i }) => (
                    <li key={naam} className={i < stap ? "done" : i === stap ? "on" : undefined} aria-current={i === stap ? "step" : undefined} />
                  ))}
                </ol>
              )}
              {stap < 4 ? (
                <button className="ds-next" type="button" disabled={!volgende.ok} onClick={() => (stap === 1 && toonDak ? setDeel(1) : naar(verder))}>
                  {volgende.label}
                </button>
              ) : resultaat ? (
                <>
                  <Link className="ds-boek" to={lp(`/verhuur/pakket?${configToQuery(resultaat.config)}${extraNaarQuery(resultaat.extra)}`)}>
                    {t.boek}
                  </Link>
                  <button className="ds-rond" type="button" aria-label={t.opnieuwBeginnen} title={t.opnieuw} onClick={() => { setS(START); naar(0); }}>
                    <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 10a6 6 0 1 0 2-4.5M4 3v3.5h3.5" /></svg>
                  </button>
                </>
              ) : (
                <button
                  className="ds-back ds-back--rechts"
                  type="button"
                  onClick={() => {
                    setS(START);
                    naar(0);
                  }}
                >
                  {t.opnieuw}
                </button>
              )}
            </div>
            </>
            )}
          </section>

          {/* ───────────── tekening ───────────── */}
          <section className="ds-stage" aria-label={t.tekening}>
            <div className="ds-shead">
              <div>
                <p className="ds-eyebrow">{stageKop.eyebrow}</p>
                <p className="ds-stitel" aria-live="polite">{stageKop.titel}</p>
              </div>
              <span className="ds-badge" hidden={soort !== "werf"}>
                {woningTekst(woning, taal).label} · {t.lagen(lagen)} · {maat}
              </span>
            </div>

            <div className="ds-canvas">
              <IsoHouseAuto
                woning={woning}
                breedte={breedte}
                verdiepingen={lagen}
                dak={dak}
                kamers={kamers}
                openingen={plan.openingen}
                trappen={plan.trappen}
                ramen={plan.ramen}
                open={soort === "water" ? wsPlekken.length > 0 : (stap >= 2 && !(stap === 4 && filmKlaar)) || (stap === 1 && toonPlan)}
                actief={soort === "water" ? wsVerd : stap === 4 ? toonVerd : stap === 1 ? verd : 0}
                plaatsingen={filmKlaar ? GEEN_PLAATSINGEN : plaatsingen}
                werkend={stap === 4 && !!resultaat && !filmKlaar}
                materiaal={stap === 4 && filmKlaar ? { ...materiaal, vocht: 0 } : materiaal}
                cyclus={CYCLUS}
                filmPlan={filmSeg}
                filmRonde={ronde}
              />
              {stap === 3 && wat && <Doorsnede wat={wat} pd={antwoorden.pd} cd={antwoorden.cd} />}
              {stap === 4 && resultaat && (
                <DagTeller
                  key={`${filmSeg?.modus}-${toonVerd}-${resultaat.dagen}-${ronde}-${filmKlaar}-${handmatig}`}
                  segment={filmSeg}
                  naam={verdiepingNaam(toonVerd, lagen, dak, taal)}
                  geplaatst={perLaag[toonVerd] ?? 0}
                  dagen={resultaat.dagen}
                  water={resultaat.water}
                  klaar={filmKlaar}
                />
              )}
              {stap === 4 && resultaat && filmKlaar && (
                <button type="button" className="ds-herhaal" onClick={opnieuwAfspelen}>
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M2.5 8a5.5 5.5 0 1 0 1.7-4M2.5 2.5v3h3" /></svg>
                  {t.opnieuwAfspelen}
                </button>
              )}
            </div>

            <div className="ds-sfoot">
              {stap === 4 && lagen > 1 && (
                <div className="ds-tabs" role="tablist" aria-label={t.verdieping}>
                  {Array.from({ length: lagen }, (_, v) => {
                    const n = perLaag[v] ?? 0;
                    return (
                      <button
                        key={v}
                        type="button"
                        role="tab"
                        aria-selected={!filmKlaar && toonVerd === v}
                        className={!filmKlaar && toonVerd === v ? "on" : undefined}
                        onClick={() => {
                          setActief(v);
                          setHandmatig(true);
                          setFilmKlaar(false);
                          // Een tweede klik op dezelfde verdieping speelt haar film opnieuw.
                          setRonde((r) => r + 1);
                        }}
                      >
                        {verdiepingNaam(v, lagen, dak, taal)}
                        <small>{t.toestelTel(n)}</small>
                      </button>
                    );
                  })}
                </div>
              )}
              <div className="ds-cart">
                <div className="ds-legend">
                  <p>{t.legende}</p>
                  <div>
                    <span><i className="ds-l-droger" />{t.droger}</span>
                    <span><i className="ds-l-fan" />{t.ventilator}</span>
                    <span><i className="ds-l-kachel" />{t.kachel}</span>
                    <span><i className="ds-l-nat" />{t.vocht}</span>
                  </div>
                </div>
                {/* De prijs pas in het droogplan: tijdens de vragen leidt hij af van het antwoorden. */}
                {stap === 4 && (
                  <div className="ds-cart-prijs">
                    <p>{t.uwPakket}</p>
                    {prijs ? <b>{prijs.tekst}</b> : <b className="dim">{t.kop.maatwerk}</b>}
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
  // De woningkaarten zijn het eerste wat je ziet: niet lazy (dat stelt ze uit tot na de
  // layout, met lage prioriteit) maar meteen en met voorrang. React 18 kent
  // fetchPriority nog niet als prop, vandaar de attribuutnaam in kleine letters.
  return src ? <img className="ds-foto" src={src.replace(/\.webp$/, "-640.webp")} srcSet={fotoSrcSet(src)} sizes="(max-width: 899px) 45vw, 22vw" alt="" decoding="async" {...{ fetchpriority: "high" }} /> : <>{children}</>;
}

/** "Gelijkvloers", "+ 1 verdiep", "+ 2 verdiepen + zolder" — what n bouwlagen mean under this roof. */
/** "Alleen gelijkvloers", "Gelijkvloers + 1 verdiep + zolder" — the whole house in words. */
function woningLagen(n: number, dak: Dak, t: SimCopy): string {
  return n === 1 ? t.alleenGelijkvloers : t.gelijkvloersMet(lagenUitleg(n, dak, t));
}

function lagenUitleg(n: number, dak: Dak, t: SimCopy): string {
  if (n === 1) return t.gelijkvloers;
  const zolder = isZolder(n - 1, n, dak);
  const verd = n - 1 - (zolder ? 1 : 0);
  return [verd > 0 ? t.plusVerdiep(verd) : "", zolder ? t.plusZolder : ""].filter(Boolean).join(" ");
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

/** Wat de bezoeker per laag te zien krijgt: een echte foto, wat het is, waar hij het ziet. De teksten staan in de COPY (`laag`). */
const LAAG = {
  pd: {
    waarden: PD_VALUES,
    standaard: DEFAULT_PD,
    foto: "/simulator/dikte-pleister-v2.webp",
    fotoKlein: "/simulator/dikte-pleister-v2-360.webp",
    fotoBreedte: 1024,
    fotoPositie: "48% 50%",
    // Vuistregel: ± 1 week per cm zonder droger.
    weken: (cm: number) => cm,
  },
  cd: {
    waarden: CD_VALUES,
    standaard: DEFAULT_CD,
    // Nieuwe bestandsnaam, niet de oude overschreven: zie VERSIE in fotos.ts.
    foto: "/simulator/dikte-chape-v2.webp",
    fotoKlein: "/simulator/dikte-chape-v2-360.webp",
    // Staand 1024×1536: scherp genoeg voor de banner over de volle breedte als chape de enige laag is.
    fotoBreedte: 1024,
    fotoPositie: "50% 72%",
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
function LaagKaart({ laag, gekozen, onKies, solo = false }: { laag: "pd" | "cd"; gekozen: string; onKies: (v: string) => void; solo?: boolean }) {
  const t = useCopy(COPY);
  const L = { ...LAAG[laag], ...t.laag[laag] };
  const droog = gekozen === "geen";
  const onbekend = gekozen === "onbekend";
  const cm = droog ? 0 : Number(onbekend ? L.standaard : gekozen);
  const max = Math.max(...L.waarden.map(Number));
  const weken = L.weken(cm);
  const keuzes: { v: string; groot: ReactNode; klein: string }[] = [
    { v: "geen", groot: t.geen, klein: droog ? t.droogKlein : t.nietNat },
    ...L.waarden.map((v) => ({ v, groot: <>{v}<small> cm</small></>, klein: v === L.standaard ? t.meest : "" })),
    { v: "onbekend", groot: "?", klein: t.weetNietKlein },
  ];
  const dikte = droog ? <span className="ok">{t.droog}</span> : <>{onbekend ? "± " : ""}{cm}<small> cm</small></>;
  // Solo (maar één laag in deze fase): de foto wordt een banner over de volle breedte die de vrije
  // hoogte opneemt, met naam en dikte erop; anders rekt één kaart uit tot gaten.
  return (
    <section className={`ds-laagk${droog ? " uit" : ""}${solo ? " ds-laagk--solo" : ""}`} aria-label={L.titel}>
      <figure className="ds-laagk-foto">
        <img src={L.fotoKlein} srcSet={`${L.fotoKlein} 360w, ${L.foto.replace(/\.webp$/, "-640.webp")} 640w, ${L.foto} ${L.fotoBreedte}w`} sizes={solo ? "(max-width: 899px) 92vw, 640px" : "(max-width: 899px) 30vw, 260px"} alt="" style={{ objectPosition: L.fotoPositie }} loading="lazy" decoding="async" />
        {droog && <span className="ds-laagk-badge">{t.nietNatBadge}</span>}
        {solo ? (
          <figcaption className="ds-laagk-band">
            <span><h3>{L.titel}</h3>{L.onderschrift}</span>
            <output>{dikte}</output>
          </figcaption>
        ) : <figcaption><b>{L.titel}</b>{L.onderschrift}</figcaption>}
      </figure>
      <div className="ds-laagk-inh">
        {!solo && (
          <div className="ds-laagk-kop">
            <h3>{L.titel}</h3>
            <output>{dikte}</output>
          </div>
        )}
        <p className="ds-laagk-wat">{L.wat}</p>
        <div className="ds-ware" style={{ "--max": max } as CSSProperties}>
          <em>{t.dikteSleep}</em>
          <div className="ds-ware-lat">
            <i style={{ width: `${(cm / max) * 100}%` }} />
            <WareSchuif laag={laag} cm={cm} max={max} onKies={onKies} />
          </div>
          <div className="ds-ware-schaal">{Array.from({ length: max + 1 }, (_, i) => <span key={i}>{i}</span>)}</div>
          <div className="ds-ware-droog" aria-hidden={!droog}>
            <span className="bol"><Vink grootte={14} /></span>
            <span><b>{t.laagDroog(L.titel)}</b><small>{t.telNiet}</small></span>
          </div>
        </div>
        <div className="ds-dk" role="radiogroup" aria-label={t.dikte(L.titel)}>
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
                ? laag === "pd" ? t.geenPleister : t.geenChape
                : <>{t.zonderDroger(weken)}{onbekend && <em>{t.gerekendMet(cm)}</em>}</>}
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
  const t = useCopy(COPY);
  const L = { ...LAAG[laag], ...t.laag[laag] };
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
      aria-label={t.dikteCm(L.titel)}
      aria-valuetext={cm === 0 ? t.nietNat : `${cm} cm`}
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
  const t = useCopy(COPY);
  const p = Number(pd.replace(",", ".")) || 2;
  const c = Number(cd.replace(",", ".")) || 6;
  const muur = wat !== "chape";
  const vloer = wat !== "pleister";
  const k = 4; // px per cm, overdreven zodat 1 cm zichtbaar blijft
  return (
    <figure className="ds-detail" aria-label={t.doorsnede}>
      <figcaption>{t.detailA}</figcaption>
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
            <text x={52 + p * k} y="6">{t.cmPleister(pd.replace(".", ","))}</text>
          </g>
        )}
        {vloer && (
          <g className="ds-maat">
            <line x1="140" x2="140" y1={88 - c * k * 0.5} y2="88" />
            <text x="138" y={84 - c * k * 0.5} textAnchor="end">{t.cmChape(cd)}</text>
          </g>
        )}
      </svg>
    </figure>
  );
}

/**
 * Teller bij de film. Tijdens het plaatsen: hoeveel toestellen op deze
 * verdieping. Tijdens het drogen: "dag x van y" over de hele woning (de
 * verdiepingen lopen na elkaar door, van boven naar beneden), de liters die al
 * weg zijn, en een stempel zodra deze verdieping droog is.
 */
function DagTeller({ segment, naam, geplaatst, dagen, water, klaar }: {
  segment?: Segment; naam: string; geplaatst: number; dagen: number; water: number; klaar: boolean;
}) {
  const t = useCopy(COPY);
  const taal = useTaal();
  const [k, setK] = useState(klaar || !segment ? 1 : 0);
  useEffect(() => {
    if (klaar || !segment || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setK(1);
      return;
    }
    // Zelfde klok als de 3D: die meldt wanneer zijn film echt begint; wacht hij nog
    // op zijn modellen, dan staat de teller stil; zonder 3D telt hij vanaf nu.
    let start = filmStatus.wacht ? Infinity : performance.now();
    const opStart = (e: Event) => { start = (e as CustomEvent<number>).detail; };
    const opWacht = () => { start = Infinity; };
    window.addEventListener(FILM_START, opStart);
    window.addEventListener(FILM_WACHT, opWacht);
    const id = window.setInterval(() => setK(voortgangNa(segment, Math.max(0, (performance.now() - start) / 1000))), 120);
    return () => {
      window.clearInterval(id);
      window.removeEventListener(FILM_START, opStart);
      window.removeEventListener(FILM_WACHT, opWacht);
    };
  }, [segment, klaar]);

  if (!klaar && segment?.modus === "plaatsen") {
    return (
      <div className="ds-kteller">
        <span>
          <b>{Math.floor(k * geplaatst + 1e-6)}</b>{t.vanGeplaatst(geplaatst)}
        </span>
        <div className="ds-meter ds-meter--plaats" aria-hidden="true">
          <i style={{ width: `${Math.max(3, k * 100)}%` }} />
        </div>
        <small>{naam}</small>
      </div>
    );
  }
  const dag = klaar || !segment ? dagen : Math.max(1, Math.floor(segment.dagVan + (segment.dagTot - segment.dagVan) * k + 1e-6));
  const alles = dag >= dagen;
  const laagDroog = !klaar && !!segment && k >= 1;
  return (
    <div className="ds-kteller">
      <span>
        {t.dag} <b>{dag}</b>{t.van(dagen)}
      </span>
      {/* Blue = moisture left in the house; once dry the bar turns full and green. */}
      <div className={alles ? "ds-meter ds-meter--droog" : "ds-meter"} aria-hidden="true">
        <i style={{ width: alles ? "100%" : `${Math.max(3, (1 - dag / dagen) * 100)}%` }} />
      </div>
      <small>{alles ? t.allesDroog : t.droogt(naam)}</small>
      {/* Litres pulled out of the house so far, on the same clock as the days. */}
      <p className="ds-liter">
        <b>{Math.round((dag / dagen) * water).toLocaleString(NUMBER_LOCALE[taal])}</b>{t.afgevoerd}
      </p>
      {laagDroog && (
        <div className="ds-stempel" aria-hidden="true">
          {t.stempel}
          <small>{t.stempelDag(naam, segment.dagTot)}</small>
        </div>
      )}
    </div>
  );
}

export default VerhuurSimulatorPage;

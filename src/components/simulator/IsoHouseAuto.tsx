import { Component, lazy, Suspense, useEffect, useState, type ReactNode } from "react";
import IsoHouse, { type IsoHouseProps } from "./IsoHouse";
import { DIAG, TEXTUUR, budget3D, diagNu, heeftStraat, meld, straatBeelden, voorlaad } from "@/huis3d/3d/bestanden";
import { WONING } from "@/lib/droogSimulator";
import { HuisTaal } from "@/huis3d/taal";
import { useTaal } from "@/i18n/useTaal";

/*
  Kiest tussen de SVG-tekening en de 3D-woning.

  De pagina wordt geprerenderd, en wie geen JavaScript uitvoert moet een woning
  zien: daarom staat eerst altijd de SVG er. Pas na het laden, als de browser
  WebGL kan, komt de 3D-versie (een eigen chunk met three.js) eroverheen; de SVG
  verdwijnt zodra de eerste 3D-frame getekend is. Lukt WebGL niet, of crasht er
  iets in de 3D, dan blijft de SVG gewoon staan.

  `?weergave=svg` in de URL forceert de SVG, om beide te vergelijken.
*/

const laad3D = () => import("@/huis3d/3d/IsoHouse3D");
const IsoHouse3D = lazy(laad3D);

function webglMogelijk(): boolean {
  try {
    if (new URLSearchParams(window.location.search).get("weergave") === "svg") return false;
    const c = document.createElement("canvas");
    const gl = (c.getContext("webgl2") || c.getContext("webgl")) as WebGLRenderingContext | null;
    // De testcontext meteen vrijgeven: browsers laten maar een handvol tegelijk toe.
    gl?.getExtension("WEBGL_lose_context")?.loseContext();
    return !!gl;
  } catch {
    return false;
  }
}

/**
 * Wacht tot de browser even niets te doen heeft. three.js en het opbouwen van
 * de 3D kosten op een gsm seconden rekenwerk; doen we dat meteen bij het laden,
 * dan reageert de pagina traag op de eerste tik. De SVG staat er al, dus de 3D
 * mag wachten.
 */
function opRustigMoment(fn: () => void): () => void {
  const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number; cancelIdleCallback?: (id: number) => void };
  if (w.requestIdleCallback) {
    const id = w.requestIdleCallback(fn, { timeout: 2500 });
    return () => w.cancelIdleCallback?.(id);
  }
  const t = window.setTimeout(fn, 1200);
  return () => window.clearTimeout(t);
}

class Vangnet extends Component<{ onFout: () => void; children: ReactNode }, { fout: boolean }> {
  state = { fout: false };
  static getDerivedStateFromError() {
    return { fout: true };
  }
  componentDidCatch(err: unknown) {
    console.warn("[droogsimulator] 3D-weergave uitgeschakeld:", err);
    this.props.onFout();
  }
  render() {
    return this.state.fout ? null : this.props.children;
  }
}

/** ?diag=1: a small label with what the simulator decided and loaded. */
function DiagLabel() {
  const [stand, setStand] = useState(diagNu);
  useEffect(() => {
    const op = (e: Event) => setStand((e as CustomEvent<Record<string, string>>).detail);
    window.addEventListener("ds-diag", op);
    return () => window.removeEventListener("ds-diag", op);
  }, []);
  const n = navigator as Navigator & { connection?: { effectiveType?: string; saveData?: boolean }; deviceMemory?: number };
  const regels = [
    ...Object.entries(stand).map(([k, v]) => `${k}: ${v}`),
    `net: ${n.connection?.effectiveType ?? "?"}${n.connection?.saveData ? " (databesparing)" : ""}`,
    `geheugen: ${n.deviceMemory ?? "?"} GB`,
  ];
  return (
    <pre
      style={{ position: "absolute", left: 8, bottom: 8, zIndex: 50, margin: 0, padding: "6px 8px", font: "11px/1.35 ui-monospace, monospace", background: "rgba(0,0,0,.75)", color: "#fff", borderRadius: 6, pointerEvents: "none", whiteSpace: "pre-wrap", maxWidth: "90%" }}
    >
      {regels.join("\n")}
    </pre>
  );
}

export default function IsoHouseAuto(props: IsoHouseProps) {
  const taal = useTaal();
  const [kan3d, setKan3d] = useState(false);
  const [klaar, setKlaar] = useState(false);
  const [fout, setFout] = useState(false);

  useEffect(() => {
    if (props.mini) return;
    const webgl = webglMogelijk();
    meld("webgl", webgl ? "ja" : "NEE");
    if (!webgl) return;
    const budget = budget3D();
    meld("budget", budget);
    if (budget === "geen") return; // ≤ 1 GB memory: the SVG house stays
    // Fetch the 3D chunk, the house textures and the first (mini) street picture
    // together, not one after the other: the street used to be requested only
    // once the 3D had been built. On a fast line that starts right away; on 3G
    // and with data saver it waits for the load event, so the question photos
    // are not slowed down.
    const haal = () => {
      voorlaad(Object.values(TEXTUUR), "image");
      if (heeftStraat(props.woning)) voorlaad(straatBeelden(props.woning, props.breedte ?? WONING[props.woning].w, "mini"), "image");
      return laad3D();
    };
    let chunk = budget === "meteen" ? haal() : null;
    chunk?.then(() => meld("chunk", "binnen"), () => {});
    let weg = () => {};
    const start = () => {
      chunk ??= haal();
      const c = chunk;
      meld("3d", "wacht op rustig moment");
      weg = opRustigMoment(() => {
        meld("3d", "bouwen");
        c.then(
          () => setKan3d(true),
          (e: unknown) => {
            meld("3d", `chunk FOUT: ${String(e).slice(0, 80)}`);
            setFout(true);
          },
        );
      });
    };
    // On a good line the build starts at the first idle moment after hydration.
    // It used to wait for the load event, which waits for every image on the page
    // (the welcome popup photo, the step photos): the 3D appeared seconds after
    // it had been downloaded.
    if (budget === "meteen" || document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      window.removeEventListener("load", start);
      weg();
    };
    // Only the first house matters here: woning and breedte pick the street picture to preload.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.mini]);

  const toon3d = kan3d && !fout;
  // Only after mount: the prerendered HTML has no ?diag, so rendering the label
  // during hydration would be a mismatch.
  const [diag, setDiag] = useState(false);
  useEffect(() => setDiag(DIAG), []);
  useEffect(() => {
    if (klaar) meld("3d", fout ? "UIT (fout)" : "getekend");
    else if (fout) meld("3d", "UIT (fout)");
  }, [klaar, fout]);
  return (
    <>
      {diag && !props.mini && <DiagLabel />}
      {(!toon3d || !klaar) && <IsoHouse {...props} />}
      {toon3d && (
        <Vangnet onFout={() => setFout(true)}>
          <Suspense fallback={null}>
            <HuisTaal.Provider value={taal}>
            <IsoHouse3D
              {...props}
              className={`${props.className ?? ""}${klaar ? "" : " ds-iso3d--laden"}`.trim() || undefined}
              onKlaar={() => setKlaar(true)}
              onFout={() => setFout(true)}
            />
            </HuisTaal.Provider>
          </Suspense>
        </Vangnet>
      )}
    </>
  );
}

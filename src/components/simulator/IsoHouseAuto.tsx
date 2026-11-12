import { Component, lazy, Suspense, useEffect, useState, type ReactNode } from "react";
import IsoHouse, { type IsoHouseProps } from "./IsoHouse";
import { TEXTUUR, voorlaad } from "./3d/bestanden";

/*
  Kiest tussen de SVG-tekening en de 3D-woning.

  De pagina wordt geprerenderd, en wie geen JavaScript uitvoert moet een woning
  zien: daarom staat eerst altijd de SVG er. Pas na het laden, als de browser
  WebGL kan, komt de 3D-versie (een eigen chunk met three.js) eroverheen; de SVG
  verdwijnt zodra de eerste 3D-frame getekend is. Lukt WebGL niet, of crasht er
  iets in de 3D, dan blijft de SVG gewoon staan.

  `?weergave=svg` in de URL forceert de SVG, om beide te vergelijken.
*/

const laad3D = () => import("./3d/IsoHouse3D");
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

export default function IsoHouseAuto(props: IsoHouseProps) {
  const [kan3d, setKan3d] = useState(false);
  const [klaar, setKlaar] = useState(false);
  const [fout, setFout] = useState(false);

  useEffect(() => {
    if (props.mini || !webglMogelijk()) return;
    // Ophalen mag meteen (netwerk, de SVG staat er al): de 3D-chunk en de
    // texturen tegelijk, niet na elkaar. Het zware opbouwen wacht op de load en
    // een rustig moment.
    const chunk = laad3D();
    voorlaad(Object.values(TEXTUUR), "image");
    let weg = () => {};
    const start = () => {
      weg = opRustigMoment(() => {
        chunk.then(() => setKan3d(true), () => setFout(true));
      });
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      window.removeEventListener("load", start);
      weg();
    };
  }, [props.mini]);

  const toon3d = kan3d && !fout;
  return (
    <>
      {(!toon3d || !klaar) && <IsoHouse {...props} />}
      {toon3d && (
        <Vangnet onFout={() => setFout(true)}>
          <Suspense fallback={null}>
            <IsoHouse3D
              {...props}
              className={`${props.className ?? ""}${klaar ? "" : " ds-iso3d--laden"}`.trim() || undefined}
              onKlaar={() => setKlaar(true)}
              onFout={() => setFout(true)}
            />
          </Suspense>
        </Vangnet>
      )}
    </>
  );
}

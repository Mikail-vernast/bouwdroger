import { Component, lazy, Suspense, useEffect, useState, type ReactNode } from "react";
import IsoHouse, { type IsoHouseProps } from "./IsoHouse";

/*
  Kiest tussen de SVG-tekening en de 3D-woning.

  De pagina wordt geprerenderd, en wie geen JavaScript uitvoert moet een woning
  zien: daarom staat eerst altijd de SVG er. Pas na het laden, als de browser
  WebGL kan, komt de 3D-versie (een eigen chunk met three.js) eroverheen; de SVG
  verdwijnt zodra de eerste 3D-frame getekend is. Lukt WebGL niet, of crasht er
  iets in de 3D, dan blijft de SVG gewoon staan.

  `?weergave=svg` in de URL forceert de SVG, om beide te vergelijken.
*/

const IsoHouse3D = lazy(() => import("./3d/IsoHouse3D"));

function webglMogelijk(): boolean {
  try {
    if (new URLSearchParams(window.location.search).get("weergave") === "svg") return false;
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
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
    if (!props.mini) setKan3d(webglMogelijk());
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

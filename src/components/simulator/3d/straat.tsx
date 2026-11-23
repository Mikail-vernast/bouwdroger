import { Component, type ReactNode, useLayoutEffect, useMemo, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { DoubleSide, type Mesh, type MeshBasicMaterial, Matrix4, Quaternion, SRGBColorSpace, TextureLoader, Vector3 } from "three";
import { straatBeelden, type StraatWoning } from "./bestanden";

/*
  The street around the house: a Blender render (scripts/simulator-3d/straat.py),
  not live geometry. Grass, a trimmed beech hedge and real trees only look real
  with scanned textures and path-traced light, which a phone cannot run live.

  It still lines up with the live house because the simulator camera is
  orthographic and always looks from the same corner (KIJK). Blender rendered from
  exactly that direction, so the picture is a flat plane perpendicular to the view:
  under an orthographic camera such a plane maps pixel for pixel onto the screen,
  wherever the camera pans or zooms. Two layers:

  - achter: everything, drawn first, far behind the house along the view axis.
  - voor:   only what stands in front of the house and can overlap it (car on the
            driveway, side hedge, street lamp, the right-hand neighbour of a
            terraced house); the rest of that render is transparent. Drawn last,
            without depth test, and faded out while the house is opened up, so it
            never hides the cut-open floor.
*/

// Same axes as IsoHouse3D.
const RECHTS = new Vector3(1, 0, -1).normalize();
const OP = new Vector3(-1, 2, -1).normalize();
const KIJK = new Vector3(1, 1, 1).normalize();
const STAND = new Quaternion().setFromRotationMatrix(new Matrix4().makeBasis(RECHTS, OP, KIJK));

/** Must match SCHAAL and RESX/RESY in straat.py. */
const BREED = 56;
const HOOG = (BREED * 2500) / 3500;

interface Props {
  woning: StraatWoning;
  w: number;
  l: number;
  klein: boolean;
  /** 0 closed .. 1 opened up: the front layer fades with the upper floors. */
  open: { current: number };
}

export default function Straat3D({ woning, w, l, klein, open }: Props) {
  const [achterTex, voorTex] = useLoader(TextureLoader, straatBeelden(woning, w, klein));
  useLayoutEffect(() => {
    for (const t of [achterTex, voorTex]) {
      t.colorSpace = SRGBColorSpace;
      t.anisotropy = 4;
      t.needsUpdate = true;
    }
  }, [achterTex, voorTex]);

  // The render is centred on this ground point (straat.py: DOEL).
  const midden = useMemo(() => new Vector3(w / 2, 0, l / 2 + 3), [w, l]);
  const voorRef = useRef<Mesh>(null);

  useFrame(() => {
    const m = voorRef.current?.material as MeshBasicMaterial | undefined;
    if (m) m.opacity = 1 - 0.92 * open.current;
  });

  return (
    <>
      {/* Behind everything along the view axis: the house always covers it. */}
      <mesh position={midden.clone().addScaledVector(KIJK, -40)} quaternion={STAND} renderOrder={-10}>
        <planeGeometry args={[BREED, HOOG]} />
        <meshBasicMaterial map={achterTex} transparent depthWrite={false} toneMapped={false} side={DoubleSide} />
      </mesh>
      {/* In front of the house: no depth test, drawn last. */}
      <mesh ref={voorRef} position={midden.clone().addScaledVector(KIJK, 40)} quaternion={STAND} renderOrder={10}>
        <planeGeometry args={[BREED, HOOG]} />
        <meshBasicMaterial map={voorTex} transparent depthTest={false} depthWrite={false} toneMapped={false} />
      </mesh>
    </>
  );
}

/**
 * A missing street picture (a width that was never rendered, a failed download) must
 * cost only the street: without this boundary the loader's error reaches the 3D
 * view's own boundary, and that falls back to the flat drawing for the whole house.
 */
export class StraatVangnet extends Component<{ children: ReactNode }, { fout: boolean }> {
  state = { fout: false };
  static getDerivedStateFromError() {
    return { fout: true };
  }
  componentDidCatch(err: unknown) {
    console.warn("[droogsimulator] straatbeeld niet geladen:", err);
  }
  render() {
    return this.state.fout ? null : this.props.children;
  }
}

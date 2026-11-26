import { Component, type ReactNode, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { DoubleSide, type Mesh, type MeshBasicMaterial, Matrix4, Quaternion, SRGBColorSpace, type Texture, TextureLoader, Vector3 } from "three";
import type { Periode } from "../periode";
import { meld, straatBeelden, type StraatMaat, type StraatWoning } from "./bestanden";
import type { Hoek } from "../types";

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

/** Must match SCHAAL and RESX/RESY in straat.py. */
const BREED = 56;
const HOOG = (BREED * 2500) / 3500;

interface Props {
  woning: StraatWoning;
  w: number;
  l: number;
  /** Storeys of an apartment: the building around it has its roof edge at the unit's. */
  lagen: number;
  periode?: Periode;
  /** The sharpest size this device gets; the mini size always comes first. */
  doel: StraatMaat;
  /** 0 closed .. 1 opened up: the front layer fades with the upper floors. */
  open: { current: number };
  /** 1 .. 0 while an older street picture fades out over its successor (another width). */
  zicht?: { current: number };
  /** 0 = the newest street; an older one is drawn over it while it fades. */
  orde?: number;
  /** The mini pictures are on screen: an older street may start to fade. */
  onKlaar?: () => void;
  /**
   * The corner the camera looks from. Only front right was rendered; until the other
   * corners are, the same picture stands in mirrored: front left mirrors x about the
   * house, back right mirrors z, back left both (a half turn, no mirror).
   */
  hoek?: Hoek;
}

const HEEL = { current: 1 };

function zetKleur(t: Texture) {
  t.colorSpace = SRGBColorSpace;
  t.anisotropy = 4;
  t.needsUpdate = true;
}

/*
  Progressive: the mini pictures (~25–90 kB per pair) suspend the street, so it is
  on screen within seconds on any line. The sharp ones load in the background and
  replace them when they are in; if they fail, the mini street simply stays.
*/
/** Where a plane of the front-right render goes for another corner, and whether its picture is mirrored. */
function spiegel(p: Vector3, hoek: Hoek | undefined, w: number, l: number): { pos: Vector3; stand: Quaternion; gespiegeld: boolean } {
  const sx = hoek?.zij === "links" ? -1 : 1, sz = hoek?.kant === "achter" ? -1 : 1;
  const m = (v: Vector3) => new Vector3(v.x * sx, v.y, v.z * sz);
  const pos = new Vector3(w / 2 + (p.x - w / 2) * sx, p.y, l / 2 + (p.z - l / 2) * sz);
  const gespiegeld = sx * sz < 0;
  // One mirror makes the basis left-handed: flip the right axis back and let scale.x = -1 mirror the picture.
  const rechts = m(RECHTS).multiplyScalar(gespiegeld ? -1 : 1);
  const stand = new Quaternion().setFromRotationMatrix(new Matrix4().makeBasis(rechts, m(OP), m(KIJK)));
  return { pos, stand, gespiegeld };
}

export default function Straat3D({ woning, w, l, lagen, periode, doel, open, zicht = HEEL, orde = 0, onKlaar, hoek }: Props) {
  const mini = useLoader(TextureLoader, straatBeelden(woning, w, "mini", lagen, periode));
  const [scherp, setScherp] = useState<[Texture, Texture] | null>(null);
  const klaar = useRef(onKlaar);
  klaar.current = onKlaar;
  const invalidate = useThree((s) => s.invalidate);

  // Colour space before the first frame: in a passive effect the street could be
  // drawn once in linear colour (washed out) before the fix landed.
  useLayoutEffect(() => mini.forEach(zetKleur), [mini]);

  useEffect(() => {
    meld("straat", doel === "mini" ? "mini (eind)" : "mini, scherp laden");
    invalidate();
    klaar.current?.();
    if (doel === "mini") return;
    let weg = false;
    const loader = new TextureLoader();
    Promise.all(straatBeelden(woning, w, doel, lagen, periode).map((u) => loader.loadAsync(u))).then(
      (t) => {
        if (weg) return t.forEach((x) => x.dispose());
        t.forEach(zetKleur);
        setScherp([t[0], t[1]]);
        meld("straat", doel);
      },
      (e: unknown) => meld("straat", `mini (scherp FOUT: ${String(e).slice(0, 60)})`),
    );
    return () => {
      weg = true;
    };
  }, [mini, woning, w, lagen, periode, doel, invalidate]);

  // Free the sharp pair when the width changes or the street unmounts.
  useEffect(() => () => scherp?.forEach((t) => t.dispose()), [scherp]);
  useEffect(() => {
    if (scherp) invalidate();
  }, [scherp, invalidate]);

  const [achterTex, voorTex] = scherp ?? mini;

  // The render is centred on this ground point (straat.py: DOEL).
  const midden = useMemo(() => new Vector3(w / 2, 0, l / 2 + 3), [w, l]);
  const achter = useMemo(() => spiegel(midden.clone().addScaledVector(KIJK, -40), hoek, w, l), [midden, hoek, w, l]);
  const voor = useMemo(() => spiegel(midden.clone().addScaledVector(KIJK, 40), hoek, w, l), [midden, hoek, w, l]);
  const voorRef = useRef<Mesh>(null);
  const achterRef = useRef<Mesh>(null);

  useFrame(() => {
    const m = voorRef.current?.material as MeshBasicMaterial | undefined;
    if (m) m.opacity = (1 - 0.92 * open.current) * zicht.current;
    const a = achterRef.current?.material as MeshBasicMaterial | undefined;
    if (a) a.opacity = zicht.current;
  });

  return (
    <>
      {/* Behind everything along the view axis: the house always covers it. */}
      <mesh ref={achterRef} position={achter.pos} quaternion={achter.stand} scale={[achter.gespiegeld ? -1 : 1, 1, 1]} renderOrder={-12 + orde}>
        <planeGeometry args={[BREED, HOOG]} />
        <meshBasicMaterial map={achterTex} transparent depthWrite={false} toneMapped={false} side={DoubleSide} />
      </mesh>
      {/* In front of the house: no depth test, drawn last. */}
      <mesh ref={voorRef} position={voor.pos} quaternion={voor.stand} scale={[voor.gespiegeld ? -1 : 1, 1, 1]} renderOrder={8 + orde}>
        <planeGeometry args={[BREED, HOOG]} />
        <meshBasicMaterial map={voorTex} transparent depthTest={false} depthWrite={false} toneMapped={false} side={DoubleSide} />
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

import { Component, type ReactNode, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { BufferGeometry, DoubleSide, Float32BufferAttribute, type Mesh, type MeshBasicMaterial, Matrix4, Quaternion, SRGBColorSpace, type Texture, TextureLoader, Vector3 } from "three";
import type { Periode } from "../periode";
import { meld, straatBeelden, type StraatMaat, type StraatWoning } from "./bestanden";
import type { Hoek } from "../types";
import type { Vak } from "../woning";
import { muurMinGaten } from "./geo";

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
  /** 0 closed .. 1 opened up: the front layer fades with the upper floors, over the open floor only. */
  open: { current: number };
  /** Height of the cut through the open floor (yf + HC): where the visitor looks into the house. */
  snede?: number;
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
  /**
   * Holes in the ground (the opened cellar's pit, kelder.ts). Then the picture is also laid on
   * the ground itself, at street level and writing depth, so the front garden covers the
   * cellar where it lies in front of it; without it the cellar hung over the street.
   */
  gaten?: Vak[] | null;
}

/** How far the ground with the picture on it reaches round the house. */
const GROND = 30;

/**
 * The ground at street level round `gaten`, with the picture on it: each point gets the UV of
 * where the orthographic view projects it onto the picture plane, so it shows exactly the
 * pixels behind it, and only adds depth.
 */
function grondMetBeeld(gaten: Vak[], w: number, l: number, vlak: Matrix4): BufferGeometry {
  const naarBeeld = vlak.clone().invert();
  const p = new Vector3();
  const pos: number[] = [], uv: number[] = [];
  const hoek = (x: number, z: number) => {
    p.set(x, 0.004, z);
    pos.push(p.x, p.y, p.z);
    p.applyMatrix4(naarBeeld);
    uv.push(p.x / BREED + 0.5, p.y / HOOG + 0.5);
  };
  const gat = gaten.map((g) => ({ a0: g.x0, a1: g.x1, b0: g.z0, b1: g.z1 }));
  for (const r of muurMinGaten(w / 2 - GROND, w / 2 + GROND, l / 2 - GROND, l / 2 + GROND, gat)) {
    // Two triangles facing up.
    hoek(r.a0, r.b0); hoek(r.a0, r.b1); hoek(r.a1, r.b1);
    hoek(r.a0, r.b0); hoek(r.a1, r.b1); hoek(r.a1, r.b0);
  }
  const g = new BufferGeometry();
  g.setAttribute("position", new Float32BufferAttribute(pos, 3));
  g.setAttribute("uv", new Float32BufferAttribute(uv, 2));
  return g;
}

/** The cut edge round the pit, dark as a section on a drawing: without it the cellar read as a plate over the street. */
function snijrand(put: Vak, d = 0.09): BufferGeometry {
  const pos: number[] = [];
  const vlak = (x0: number, x1: number, z0: number, z1: number) => {
    const y = 0.008;
    pos.push(x0, y, z0, x0, y, z1, x1, y, z1, x0, y, z0, x1, y, z1, x1, y, z0);
  };
  vlak(put.x0 - d, put.x1 + d, put.z0 - d, put.z0);
  vlak(put.x0 - d, put.x1 + d, put.z1, put.z1 + d);
  vlak(put.x0 - d, put.x0, put.z0, put.z1);
  vlak(put.x1, put.x1 + d, put.z0, put.z1);
  const g = new BufferGeometry();
  g.setAttribute("position", new Float32BufferAttribute(pos, 3));
  return g;
}

const HEEL = { current: 1 };

/** Must match T in maten.ts: the outer walls stand outside 0..w and 0..l. */
const MUUR = 0.24;

/**
 * The front layer fades only where the visitor looks into the opened house. Per pixel it
 * follows the view ray (parallel to KIJK: the camera is orthographic) down to the height of
 * the cut; inside the house's outline there, the pixel shows the open floor. Elsewhere,
 * over the facade, the plinth and the street, the layer stays: a car parked beside the house
 * is closer to the camera than its side wall, and fading it left the copy in the back layer,
 * which the house then covered, as if the house stood on the car.
 */
interface VoorUniforms {
  uVaag: { value: number };
  uSnede: { value: number };
  uHuis: { value: [number, number, number, number] };
  /** The view axis for this corner: KIJK mirrored like the street picture (spiegel). */
  uKijk: { value: Vector3 };
}

function voorShader(u: VoorUniforms) {
  return (shader: { uniforms: Record<string, unknown>; vertexShader: string; fragmentShader: string }) => {
    Object.assign(shader.uniforms, u);
    shader.vertexShader = shader.vertexShader
      .replace("#include <common>", "#include <common>\nvarying vec3 vWereld;")
      .replace("#include <project_vertex>", "#include <project_vertex>\nvWereld = (modelMatrix * vec4(transformed, 1.0)).xyz;");
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", `#include <common>
varying vec3 vWereld;
uniform float uVaag;
uniform float uSnede;
uniform vec4 uHuis;
uniform vec3 uKijk;`)
      .replace("#include <map_fragment>", `#include <map_fragment>
{
  vec3 p = vWereld - uKijk * ((vWereld.y - uSnede) / uKijk.y);
  float binnen = step(uHuis.x, p.x) * step(p.x, uHuis.y) * step(uHuis.z, p.z) * step(p.z, uHuis.w);
  diffuseColor.a *= 1.0 - uVaag * binnen;
}`);
  };
}

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

export default function Straat3D({ woning, w, l, lagen, periode, doel, open, snede = 0, zicht = HEEL, orde = 0, onKlaar, hoek, gaten }: Props) {
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
  const grondRef = useRef<Mesh>(null);
  const grond = useMemo(() => {
    if (!gaten?.length) return null;
    const m = new Matrix4().compose(achter.pos, achter.stand, new Vector3(achter.gespiegeld ? -1 : 1, 1, 1));
    return grondMetBeeld(gaten, w, l, m);
  }, [gaten, w, l, achter]);
  useEffect(() => () => grond?.dispose(), [grond]);
  const rand = useMemo(() => (gaten?.length ? snijrand(gaten[0]) : null), [gaten]);
  useEffect(() => () => rand?.dispose(), [rand]);
  const randRef = useRef<Mesh>(null);

  const voorU = useMemo<VoorUniforms>(() => ({
    uVaag: { value: 0 }, uSnede: { value: 0 }, uHuis: { value: [0, 0, 0, 0] }, uKijk: { value: KIJK.clone() },
  }), []);
  const voorCompile = useMemo(() => voorShader(voorU), [voorU]);
  useEffect(() => {
    voorU.uSnede.value = snede;
    voorU.uHuis.value = [-MUUR, w + MUUR, -MUUR, l + MUUR];
    voorU.uKijk.value.set(hoek?.zij === "links" ? -1 : 1, 1, hoek?.kant === "achter" ? -1 : 1).normalize();
    invalidate();
  }, [voorU, snede, w, l, hoek, invalidate]);

  useFrame(() => {
    const m = voorRef.current?.material as MeshBasicMaterial | undefined;
    if (m) m.opacity = zicht.current;
    voorU.uVaag.value = 0.92 * open.current;
    const a = achterRef.current?.material as MeshBasicMaterial | undefined;
    if (a) a.opacity = zicht.current;
    // Only while the picture stands in full: half faded, the ground would show as a plate.
    if (grondRef.current) grondRef.current.visible = zicht.current > 0.99;
    if (randRef.current) randRef.current.visible = zicht.current > 0.99;
  });

  return (
    <>
      {/* Behind everything along the view axis: the house always covers it. */}
      <mesh ref={achterRef} position={achter.pos} quaternion={achter.stand} scale={[achter.gespiegeld ? -1 : 1, 1, 1]} renderOrder={-12 + orde}>
        <planeGeometry args={[BREED, HOOG]} />
        <meshBasicMaterial map={achterTex} transparent depthWrite={false} toneMapped={false} side={DoubleSide} />
      </mesh>
      {grond && (
        // It casts the sun's shadow into the pit: the edge of the ground over the cellar is what makes it read as below ground.
        <mesh ref={grondRef} geometry={grond} visible={false} castShadow>
          <meshBasicMaterial map={achterTex} toneMapped={false} />
        </mesh>
      )}
      {rand && (
        <mesh ref={randRef} geometry={rand} visible={false}>
          <meshBasicMaterial color="#2a2422" />
        </mesh>
      )}
      {/* In front of the house: no depth test, drawn last. */}
      <mesh ref={voorRef} position={voor.pos} quaternion={voor.stand} scale={[voor.gespiegeld ? -1 : 1, 1, 1]} renderOrder={8 + orde}>
        <planeGeometry args={[BREED, HOOG]} />
        <meshBasicMaterial map={voorTex} transparent depthTest={false} depthWrite={false} toneMapped={false} side={DoubleSide} onBeforeCompile={voorCompile} />
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

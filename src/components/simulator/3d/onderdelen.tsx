import { Component, useLayoutEffect, useMemo, useRef, type MutableRefObject, type ReactNode } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import {
  type Group,
  type InstancedMesh,
  type Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Object3D,
  RingGeometry,
  Vector3,
} from "three";
import type { Kamer, Plaatsing } from "@/lib/droogSimulator";
import type { DeviceKey } from "@/data/verhuur";
import { TOESTEL_MODEL } from "./modellen";
import { FILM_START, VAL, droogVoortgang, filmTijd, stuit, wegVoortgang, type Film } from "../film";

/*
  De bewegende en losse onderdelen van de 3D-woning: de toestellen uit het
  pakket (modellen uit Blender, scripts/simulator-3d/toestellen.py), de
  luchtstroom en de vochtdeeltjes. (Een natte sluier over muren en vloer las
  als slagschaduw; vocht toont de doorsnede, het drogen de druppels.)

  Alles loopt op één filmklok per verdieping (zie ../film.ts): eerst vallen de
  toestellen één voor één op hun plek, dan slaan ze aan en trekt het vocht weg.
*/

/** Een tijd in seconden, gedeeld door alle animaties. */
function fase(t: number, periode: number, vertraging = 0) {
  return (((t + vertraging) % periode) + periode) % periode / periode;
}

/* ─────────────────────────── toestellen ─────────────────────────── */

const MODEL = TOESTEL_MODEL;
/** De modellen zijn op ware grootte; in de tekening iets groter, anders is een droger een stipje. */
const SCHAAL = 1.35;
/** Hoogte waarvan een toestel neervalt. */
const VALHOOGTE = 1.8;

const stofMat = () => new MeshBasicMaterial({ color: "#8a7864", transparent: true, opacity: 0, depthWrite: false });
const stofGeo = new RingGeometry(0.42, 0.5, 36);

/**
 * Eén toestel: valt op `aankomst` seconden in de film neer met een stuit, laat
 * een stofkringetje achter en slaat daarna aan (wieken draaien, led brandt,
 * kachel gloeit). Is alles droog, dan valt het stil en wordt het weggehaald:
 * omhoog en kleiner, één voor één. De gloed is enkel emissive: een pointLight per kachel zou
 * het aantal lichten (en dus de shaders) laten wisselen met het pakket.
 */
export function Toestel3D({ k, x, y, z, aankomst, werkend, film, cyclus }: {
  k: DeviceKey; x: number; y: number; z: number; aankomst: number; werkend: boolean;
  film: MutableRefObject<Film>; cyclus: number;
}) {
  const gltf = useLoader(GLTFLoader, MODEL[k]);
  // Eigen kopie per toestel, met eigen led- en gloedmateriaal (die gaan apart aan).
  const model = useMemo(() => {
    const obj = gltf.scene.clone(true);
    let wieken: Object3D | null = null;
    const licht: MeshStandardMaterial[] = [];
    obj.traverse((o) => {
      if (o.name === "wieken") wieken = o;
      const m = o as Mesh;
      if (!m.isMesh) return;
      m.castShadow = true;
      m.receiveShadow = true;
      if (o.name === "led" || o.name === "gloed") {
        const mat = (m.material as MeshStandardMaterial).clone();
        m.material = mat;
        licht.push(mat);
      }
    });
    return { obj, wieken: wieken as Object3D | null, licht };
  }, [gltf]);
  useLayoutEffect(() => () => { for (const m of model.licht) m.dispose(); }, [model]);

  const groep = useRef<Group>(null);
  const stof = useRef<Mesh>(null);
  const stofM = useMemo(stofMat, []);
  const toeren = useRef(0);

  useFrame((_, dt) => {
    const t = filmTijd(film.current, cyclus);
    const p = Math.min(1, Math.max(0, (t - aankomst) / VAL));
    const q = wegVoortgang(t, cyclus, aankomst);
    const op = q * q * (3 - 2 * q);
    const g = groep.current;
    if (g) {
      g.visible = t >= aankomst && q < 1;
      g.position.y = y + (1 - stuit(p)) * VALHOOGTE + op * VALHOOGTE * 1.3;
      // Bij de eerste botsing even platgedrukt, daarna weer recht; bij het weghalen kleiner.
      const plat = p > 0.33 && p < 0.55 ? Math.sin(((p - 0.33) / 0.22) * Math.PI) * 0.07 : 0;
      const k = SCHAAL * (1 - op * 0.75);
      g.scale.set(k * (1 + plat * 0.6), k * (1 - plat), k * (1 + plat * 0.6));
    }
    // Stofkringetje bij de landing.
    const s = (t - aankomst - VAL * 0.36) / 0.7;
    if (stof.current) {
      stof.current.visible = s > 0 && s < 1;
      stof.current.scale.setScalar(0.6 + s * 1.1);
      stofM.opacity = s > 0 && s < 1 ? 0.45 * (1 - s) : 0;
    }
    // Aan zodra het toestel stilstaat, uit zodra alles droog is; de wieken lopen op en af.
    const aan = werkend && t > aankomst + VAL + 0.15 && droogVoortgang(t, cyclus) < 1;
    toeren.current += ((aan ? 1 : 0) - toeren.current) * Math.min(1, dt * 1.8);
    if (model.wieken) model.wieken.rotation.z -= dt * Math.PI * 2 * 2.2 * toeren.current;
    for (const m of model.licht) {
      m.emissiveIntensity = aan ? (k === "kachel" ? 1.4 + 0.3 * Math.cos(fase(t, 2.4) * Math.PI * 2) : 1.2 + 0.8 * Math.cos(fase(t, 1.6) * Math.PI * 2)) * toeren.current : 0;
    }
  });

  return (
    <>
      <group ref={groep} position={[x, y, z]} visible={false}>
        <primitive object={model.obj} />
      </group>
      <mesh ref={stof} geometry={stofGeo} material={stofM} position={[x, y + 0.01, z]} rotation={[-Math.PI / 2, 0, 0]} visible={false} />
    </>
  );
}

/** Welke toestellen staan al te werken: voor lucht en druppels. */
function draait(t: number, aankomst: number) {
  return t > aankomst + VAL + 0.15;
}

/**
 * Vangnet rond de toestellen: laadt een model niet (netwerk, 404), dan vallen
 * alleen de toestellen weg. Zonder dit viel de hele 3D terug op de SVG.
 */
export class ToestelVangnet extends Component<{ children: ReactNode; terugval: ReactNode }, { fout: boolean }> {
  state = { fout: false };
  static getDerivedStateFromError() {
    return { fout: true };
  }
  componentDidCatch(err: unknown) {
    console.warn("[droogsimulator] toestellen niet geladen:", err);
  }
  render() {
    return this.state.fout ? this.props.terugval : this.props.children;
  }
}

/**
 * Start de filmklok bij de eerste getekende frame. Staat binnen dezelfde
 * Suspense als de toestellen: zolang de modellen laden, loopt de film niet, zodat
 * het neerzetten niet al voorbij is als je het eerste beeld ziet.
 */
export function FilmStart({ film }: { film: MutableRefObject<Film> }) {
  useFrame(() => {
    if (film.current.start >= 0) return;
    film.current.start = performance.now();
    // De dagteller (buiten het canvas) loopt op dezelfde klok.
    window.dispatchEvent(new CustomEvent(FILM_START, { detail: film.current.start }));
  });
  return null;
}

/* ─────────────────────────── lucht en vocht ─────────────────────────── */

/** Een plaatsing met het moment waarop het toestel in de film neerkomt. */
export type Geplaatst = Plaatsing & { a: number };

const dummy = new Object3D();
const bezier = (a: Vector3, b: Vector3, c: Vector3, t: number, uit: Vector3) => {
  const u = 1 - t;
  return uit.set(
    u * u * a.x + 2 * u * t * b.x + t * t * c.x,
    u * u * a.y + 2 * u * t * b.y + t * t * c.y,
    u * u * a.z + 2 * u * t * b.z + t * t * c.z,
  );
};

/** Lucht van elke ventilator over de vloer, in de richting waarin hij blaast (+z). */
export function Luchtstroom3D({ kamers, plaatsingen, yf, film, cyclus }: { kamers: Kamer[]; plaatsingen: Geplaatst[]; yf: number; film: MutableRefObject<Film>; cyclus: number }) {
  const ref = useRef<InstancedMesh>(null);
  const PER = 6;
  const banen = useMemo(() => {
    const uit: [Vector3, Vector3, Vector3, number][] = [];
    for (const p of plaatsingen.filter((pp) => pp.k === "axiaal")) {
      const k = kamers.find((kk) => kk.id === p.kamer);
      if (!k) continue;
      const x = k.x + p.x, z = k.z + p.z;
      const rest = Math.max(1.2, k.z + k.l - z - 0.3);
      for (const dx of [-0.25, 0, 0.25]) {
        uit.push([new Vector3(x + dx, yf + 0.62, z + 0.3), new Vector3(x + dx * 3, yf + 0.38, z + rest * 0.5), new Vector3(x + dx * 5, yf + 0.12, z + rest), p.a]);
      }
    }
    return uit;
  }, [kamers, plaatsingen, yf]);
  const mat = useMemo(() => new MeshBasicMaterial({ color: "#7aa6c9", transparent: true, opacity: 0.85, depthWrite: false }), []);
  const p = useMemo(() => new Vector3(), []);
  const q = useMemo(() => new Vector3(), []);
  useFrame(({ clock }) => {
    const m = ref.current;
    if (!m) return;
    const t = clock.elapsedTime;
    const ft = filmTijd(film.current, cyclus);
    // In het laatste tiende van het drogen valt de lucht stil.
    const stilvallen = Math.min(1, (1 - droogVoortgang(ft, cyclus)) / 0.1);
    banen.forEach(([a, b, c, aank], i) => {
      // Pas lucht als deze ventilator staat en draait.
      const aan = draait(ft, aank) ? Math.min(1, (ft - aank - VAL - 0.15) / 0.8) * stilvallen : 0;
      for (let j = 0; j < PER; j++) {
        const f = fase(t, 1.6, (j / PER) * 1.6 + i * 0.3);
        bezier(a, b, c, f, p);
        bezier(a, b, c, Math.min(1, f + 0.02), q);
        dummy.position.copy(p);
        dummy.lookAt(q);
        // Een streepje dat groeit en krimpt: zo lijkt het een stroom, geen bolletjes.
        const s = Math.sin(f * Math.PI) * aan;
        dummy.scale.set(0.025 * s + 0.001, 0.025 * s + 0.001, 0.16 * s + 0.001);
        dummy.updateMatrix();
        m.setMatrixAt(i * PER + j, dummy.matrix);
      }
    });
    m.instanceMatrix.needsUpdate = true;
  });
  if (banen.length === 0) return null;
  return (
    <instancedMesh ref={ref} args={[undefined, mat, banen.length * PER]} frustumCulled={false}>
      <boxGeometry args={[1, 1, 1]} />
    </instancedMesh>
  );
}

/**
 * Vochtdeeltjes die uit muren en vloer opstijgen en naar de dichtstbijzijnde
 * droger drijven. Deterministisch, zoals in de SVG: geen Math.random.
 */
export function Druppels3D({ kamers, plaatsingen, yf, vocht, film, cyclus }: { kamers: Kamer[]; plaatsingen: Geplaatst[]; yf: number; vocht: number; film: MutableRefObject<Film>; cyclus: number }) {
  const ref = useRef<InstancedMesh>(null);
  const banen = useMemo(() => {
    const uit: { van: Vector3; naar: Vector3; vertraging: number; a: number }[] = [];
    if (vocht <= 0) return uit;
    plaatsingen.filter((p) => p.k === "small" || p.k === "medium").forEach((p, i) => {
      const k = kamers.find((kk) => kk.id === p.kamer);
      if (!k) return;
      const naar = new Vector3(k.x + p.x, yf + 0.8, k.z + p.z);
      const n = Math.max(3, Math.round(6 * vocht));
      for (let j = 0; j < n; j++) {
        const f = (j * 0.618 + i * 0.31) % 1;
        const g = (j * 0.382 + i * 0.17) % 1;
        const van = j % 2 === 0
          ? new Vector3(k.x + 0.3 + f * (k.w - 0.6), yf + 0.05, k.z + 0.3 + g * (k.l - 0.6))
          : new Vector3(k.x + 0.2 + f * (k.w - 0.4), yf + 0.5 + g * 1.0, k.z + 0.08);
        uit.push({ van, naar, vertraging: (j * 0.47 + i * 0.29) % 2.8, a: p.a });
      }
    });
    return uit;
  }, [kamers, plaatsingen, yf, vocht]);
  const mat = useMemo(() => new MeshStandardMaterial({ color: "#3d8fd6", roughness: 0.1, emissive: "#1d5f9a", emissiveIntensity: 0.4 }), []);
  const p = useMemo(() => new Vector3(), []);
  useFrame(({ clock }) => {
    const m = ref.current;
    if (!m) return;
    const ft = filmTijd(film.current, cyclus);
    // Hoe droger, hoe minder vocht er nog naar de drogers trekt.
    const rest = 1 - 0.9 * droogVoortgang(ft, cyclus);
    banen.forEach((b, i) => {
      const aan = draait(ft, b.a) ? Math.min(1, (ft - b.a - VAL - 0.15) / 0.8) : 0;
      // cubic-bezier(.4,0,.6,1) benaderd met een smoothstep; verschijnen en
      // verdwijnen gebeurt via de grootte (per instantie bestaat geen opacity).
      const f = fase(clock.elapsedTime, 2.8, b.vertraging);
      const e = f * f * (3 - 2 * f);
      p.lerpVectors(b.van, b.naar, e);
      p.y += Math.sin(f * Math.PI) * 0.25;
      const zicht = f < 0.15 ? f / 0.15 : f > 0.85 ? (1 - f) / 0.15 : 1;
      dummy.position.copy(p);
      dummy.rotation.set(0, 0, 0);
      dummy.scale.setScalar(0.045 * zicht * aan * rest + 0.0001);
      dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);
    });
    m.instanceMatrix.needsUpdate = true;
  });
  if (banen.length === 0) return null;
  return (
    <instancedMesh ref={ref} args={[undefined, mat, banen.length]} frustumCulled={false}>
      <sphereGeometry args={[1, 10, 8]} />
    </instancedMesh>
  );
}

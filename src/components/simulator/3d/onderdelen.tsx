import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  CanvasTexture,
  DoubleSide,
  type Group,
  type InstancedMesh,
  type Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Object3D,
  SRGBColorSpace,
  Vector3,
} from "three";
import type { Kamer, Plaatsing } from "@/lib/droogSimulator";
import type { DeviceKey } from "@/data/verhuur";

/*
  De bewegende en losse onderdelen van de 3D-woning: toestellen, meubels,
  luchtstroom, vochtdeeltjes en de natte sluier op muren en vloer. Maten,
  plaatsen en timing volgen de SVG-tekening (IsoHouse.tsx + droogsimulator.css),
  zodat beide weergaven hetzelfde vertellen.
*/

/** Iets groter dan in het echt, zoals in de tekening: anders is een droger een stipje. */
const MATEN: Record<DeviceKey, [number, number, number]> = {
  small: [0.62, 1.05, 0.55],
  medium: [0.72, 1.2, 0.62],
  axiaal: [1.0, 1.0, 0.4],
  kachel: [0.52, 0.72, 0.5],
};

const std = (color: string, extra: Partial<{ roughness: number; metalness: number; emissive: string; emissiveIntensity: number }> = {}) =>
  new MeshStandardMaterial({ color, roughness: extra.roughness ?? 0.55, metalness: extra.metalness ?? 0, emissive: extra.emissive ?? "#000000", emissiveIntensity: extra.emissiveIntensity ?? 1 });

/* Gedeelde materialen: één keer aangemaakt, door alle toestellen gebruikt. */
const M = {
  wit: std("#f1f0ed", { roughness: 0.4 }),
  witZij: std("#e4e2de", { roughness: 0.45 }),
  filter: std("#2a2a2a", { roughness: 0.85 }),
  reservoir: std("#3d4a55", { roughness: 0.3 }),
  water: std("#6fa8d6", { roughness: 0.15, emissive: "#1d4f7a", emissiveIntensity: 0.25 }),
  rood: std("#c8102e", { roughness: 0.45 }),
  zwart: std("#1c1b1b", { roughness: 0.6 }),
  blad: std("#4a4848", { roughness: 0.5, metalness: 0.2 }),
  kachel: std("#3b3937", { roughness: 0.6, metalness: 0.3 }),
  ledUit: std("#7f8a80"),
};

/** Een tijd in seconden, gedeeld door alle animaties: `werkend` uit = alles stil. */
function fase(t: number, periode: number, vertraging = 0) {
  return (((t + vertraging) % periode) + periode) % periode / periode;
}

/* ─────────────────────────── toestellen ─────────────────────────── */

export function Toestel3D({ k, x, y, z, n, werkend, cyclus }: {
  k: DeviceKey; x: number; y: number; z: number; n: number; werkend: boolean; cyclus: number;
}) {
  const [w, h, d] = MATEN[k];
  const vertraging = (n * 0.37 + (k === "medium" ? 0.2 : 0)) % 2;
  if (k === "axiaal") return <Ventilator x={x} y={y} z={z} w={w} h={h} d={d} werkend={werkend} />;
  if (k === "kachel") return <Kachel x={x} y={y} z={z} w={w} h={h} d={d} werkend={werkend} />;
  return <Droger x={x} y={y} z={z} w={w} h={h} d={d} werkend={werkend} cyclus={cyclus} vertraging={vertraging} />;
}

interface Maat { x: number; y: number; z: number; w: number; h: number; d: number; werkend: boolean }

/** Bouwdroger: wit huis op wieltjes, zwarte filter op de zijkant, reservoir dat volloopt. */
function Droger({ x, y, z, w, h, d, werkend, cyclus, vertraging }: Maat & { cyclus: number; vertraging: number }) {
  const water = useRef<Mesh>(null);
  const led = useRef<Mesh>(null);
  const ledAan = useMemo(() => std("#12d36a", { emissive: "#12d36a", emissiveIntensity: 1.6 }), []);
  const bodyH = h - 0.1;
  const tankH = h * 0.4 - 0.16;
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (water.current) {
      // Zelfde verloop als .ds-tank: 5 % → vol op 80 % van de cyclus, dan vol blijven.
      const f = fase(t, cyclus, vertraging);
      const s = werkend ? 0.05 + 0.95 * Math.min(1, f / 0.8) : 0.0001;
      water.current.scale.y = s;
      water.current.position.y = 0.16 + (tankH * s) / 2;
      water.current.visible = werkend;
    }
    if (led.current) {
      ledAan.emissiveIntensity = werkend ? 0.4 + 1.4 * (0.5 + 0.5 * Math.cos((fase(t, 1.6, vertraging) * Math.PI * 2))) : 0;
    }
  });
  return (
    <group position={[x, y, z]}>
      {/* huis */}
      <mesh position={[0, 0.1 + bodyH / 2, 0]} material={M.wit} castShadow receiveShadow>
        <boxGeometry args={[w, bodyH, d]} />
      </mesh>
      {/* filter op de +x-zijde */}
      <mesh position={[w / 2 + 0.002, h * 0.45 + (h - 0.06 - h * 0.45) / 2, 0]} rotation={[0, Math.PI / 2, 0]} material={M.filter}>
        <planeGeometry args={[d - 0.1, h - 0.06 - h * 0.45]} />
      </mesh>
      {/* reservoir: kijkvenster en het water erin */}
      <mesh position={[w / 2 + 0.002, 0.16 + tankH / 2, 0]} rotation={[0, Math.PI / 2, 0]} material={M.reservoir}>
        <planeGeometry args={[d - 0.14, tankH]} />
      </mesh>
      <mesh ref={water} position={[w / 2 + 0.004, 0.16, 0]} rotation={[0, Math.PI / 2, 0]} material={M.water}>
        <planeGeometry args={[d - 0.14, tankH]} />
      </mesh>
      {/* merkteken */}
      <mesh position={[-0.01, h + 0.002, -d / 2 + 0.16]} rotation={[-Math.PI / 2, 0, 0]} material={M.rood}>
        <planeGeometry args={[w - 0.22, 0.08]} />
      </mesh>
      {/* beugel achteraan */}
      {[-1, 1].map((s) => (
        <mesh key={s} position={[s * (w / 2 - 0.04), 0.1 + (h + 0.18) / 2, -d / 2]} material={M.zwart} castShadow>
          <boxGeometry args={[0.025, h + 0.18, 0.025]} />
        </mesh>
      ))}
      <mesh position={[0, h + 0.28, -d / 2]} material={M.zwart} castShadow>
        <boxGeometry args={[w - 0.06, 0.025, 0.025]} />
      </mesh>
      {/* wieltjes */}
      {[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([sx, sz]) => (
        <mesh key={`${sx}${sz}`} position={[sx * (w / 2 - 0.08), 0.05, sz * (d / 2 - 0.08)]} rotation={[0, 0, Math.PI / 2]} material={M.zwart}>
          <cylinderGeometry args={[0.05, 0.05, 0.04, 12]} />
        </mesh>
      ))}
      {/* led */}
      <mesh ref={led} position={[w / 2 + 0.006, h - 0.14, d / 2 - 0.1]} material={werkend ? ledAan : M.ledUit}>
        <sphereGeometry args={[0.022, 10, 8]} />
      </mesh>
    </group>
  );
}

/** Axiaalventilator: wit frame met een ronde opening op de +z-zijde, draaiende schoepen. */
function Ventilator({ x, y, z, w, h, d, werkend }: Maat) {
  const rotor = useRef<Group>(null);
  const r = Math.min(w, h) * 0.4;
  const cy = 0.04 + h * 0.52;
  useFrame((_, dt) => {
    // Eén toer per 0,45 s, zoals de SVG.
    if (rotor.current && werkend) rotor.current.rotation.z -= (dt * Math.PI * 2) / 0.45;
  });
  return (
    <group position={[x, y, z]}>
      {/* frame: vier latten rond de opening, plus een dunne achterwand */}
      <mesh position={[0, 0.04 + h - 0.06, 0]} material={M.wit} castShadow receiveShadow><boxGeometry args={[w, 0.12, d]} /></mesh>
      <mesh position={[0, 0.04 + 0.06, 0]} material={M.wit} castShadow receiveShadow><boxGeometry args={[w, 0.12, d]} /></mesh>
      <mesh position={[-w / 2 + 0.05, 0.04 + h / 2, 0]} material={M.witZij} castShadow><boxGeometry args={[0.1, h, d]} /></mesh>
      <mesh position={[w / 2 - 0.05, 0.04 + h / 2, 0]} material={M.witZij} castShadow><boxGeometry args={[0.1, h, d]} /></mesh>
      <mesh position={[0, cy, -d / 2 + 0.03]} material={M.zwart}><boxGeometry args={[w - 0.2, h - 0.24, 0.02]} /></mesh>
      {/* opening en schoepen */}
      <mesh position={[0, cy, d / 2 - 0.02]} material={M.zwart}>
        <ringGeometry args={[r * 0.98, r * 1.04, 40]} />
      </mesh>
      <group ref={rotor} position={[0, cy, 0.02]}>
        {[0, 1, 2, 3, 4].map((i) => (
          <group key={i} rotation={[0, 0, (i * Math.PI * 2) / 5]}>
            {/* schoep van de naaf naar buiten, iets gekanteld zoals een propeller */}
            <mesh position={[0, r * 0.52, 0]} rotation={[0, 0.45, 0]} material={M.blad}>
              <boxGeometry args={[0.16, r * 0.85, 0.01]} />
            </mesh>
          </group>
        ))}
        <mesh position={[0, 0, 0.03]} rotation={[Math.PI / 2, 0, 0]} material={M.rood}>
          <cylinderGeometry args={[r * 0.2, r * 0.2, 0.06, 20]} />
        </mesh>
      </group>
      {/* rooster */}
      <mesh position={[0, cy, d / 2 - 0.01]} material={M.zwart}>
        <ringGeometry args={[r * 0.48, r * 0.5, 40]} />
      </mesh>
      {/* poten */}
      {[-1, 1].map((s) => (
        <mesh key={s} position={[s * (w / 2 - 0.08), 0.02, d / 2 - 0.04]} material={M.zwart}>
          <boxGeometry args={[0.04, 0.04, 0.08]} />
        </mesh>
      ))}
    </group>
  );
}

/** Elektrische kachel: donkere kast met een gloeiend rooster aan de voorkant. */
function Kachel({ x, y, z, w, h, d, werkend }: Maat) {
  const gloed = useMemo(() => std("#c8102e", { emissive: "#ff7a1a", emissiveIntensity: 0, roughness: 0.4 }), []);
  useFrame(({ clock }) => {
    // .ds-gloei: 2,4 s heen en weer tussen vol en 75 %.
    gloed.emissiveIntensity = werkend ? 1.1 + 0.35 * Math.cos(fase(clock.elapsedTime, 2.4) * Math.PI * 2) : 0.05;
  });
  return (
    <group position={[x, y, z]}>
      <mesh position={[0, h / 2, 0]} material={M.kachel} castShadow receiveShadow>
        <boxGeometry args={[w, h, d]} />
      </mesh>
      <mesh position={[0, 0.12 + (h - 0.22) / 2, d / 2 + 0.002]} material={gloed}>
        <planeGeometry args={[w - 0.12, h - 0.22]} />
      </mesh>
      {werkend && <pointLight position={[0, h * 0.5, d / 2 + 0.4]} color="#ff8a3d" intensity={0.6} distance={2.2} decay={2} />}
    </group>
  );
}

/* ─────────────────────────── lucht en vocht ─────────────────────────── */

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
export function Luchtstroom3D({ kamers, plaatsingen, yf }: { kamers: Kamer[]; plaatsingen: Plaatsing[]; yf: number }) {
  const ref = useRef<InstancedMesh>(null);
  const PER = 6;
  const banen = useMemo(() => {
    const uit: [Vector3, Vector3, Vector3][] = [];
    for (const p of plaatsingen.filter((pp) => pp.k === "axiaal")) {
      const k = kamers.find((kk) => kk.id === p.kamer);
      if (!k) continue;
      const x = k.x + p.x, z = k.z + p.z;
      const rest = Math.max(1.2, k.z + k.l - z - 0.3);
      for (const dx of [-0.25, 0, 0.25]) {
        uit.push([new Vector3(x + dx, yf + 0.55, z + 0.25), new Vector3(x + dx * 3, yf + 0.35, z + rest * 0.5), new Vector3(x + dx * 5, yf + 0.12, z + rest)]);
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
    banen.forEach(([a, b, c], i) => {
      for (let j = 0; j < PER; j++) {
        const f = fase(t, 1.6, (j / PER) * 1.6 + i * 0.3);
        bezier(a, b, c, f, p);
        bezier(a, b, c, Math.min(1, f + 0.02), q);
        dummy.position.copy(p);
        dummy.lookAt(q);
        // Een streepje dat groeit en krimpt: zo lijkt het een stroom, geen bolletjes.
        const s = Math.sin(f * Math.PI);
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
export function Druppels3D({ kamers, plaatsingen, yf, vocht }: { kamers: Kamer[]; plaatsingen: Plaatsing[]; yf: number; vocht: number }) {
  const ref = useRef<InstancedMesh>(null);
  const banen = useMemo(() => {
    const uit: { van: Vector3; naar: Vector3; vertraging: number }[] = [];
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
        uit.push({ van, naar, vertraging: (j * 0.47 + i * 0.29) % 2.8 });
      }
    });
    return uit;
  }, [kamers, plaatsingen, yf, vocht]);
  const mat = useMemo(() => new MeshStandardMaterial({ color: "#3d8fd6", roughness: 0.1, emissive: "#1d5f9a", emissiveIntensity: 0.4 }), []);
  const p = useMemo(() => new Vector3(), []);
  useFrame(({ clock }) => {
    const m = ref.current;
    if (!m) return;
    banen.forEach((b, i) => {
      // cubic-bezier(.4,0,.6,1) benaderd met een smoothstep; verschijnen en
      // verdwijnen gebeurt via de grootte (per instantie bestaat geen opacity).
      const f = fase(clock.elapsedTime, 2.8, b.vertraging);
      const e = f * f * (3 - 2 * f);
      p.lerpVectors(b.van, b.naar, e);
      p.y += Math.sin(f * Math.PI) * 0.25;
      const zicht = f < 0.15 ? f / 0.15 : f > 0.85 ? (1 - f) / 0.15 : 1;
      dummy.position.copy(p);
      dummy.rotation.set(0, 0, 0);
      dummy.scale.setScalar(0.045 * zicht + 0.0001);
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

/* De natte sluier: een verloop van onder (nat) naar boven (droog), en op de vloer een vlek. */
let verloopMuur: CanvasTexture | null = null;
let verloopVloer: CanvasTexture | null = null;
function gradient(soort: "muur" | "vloer"): CanvasTexture {
  if (soort === "muur" && verloopMuur) return verloopMuur;
  if (soort === "vloer" && verloopVloer) return verloopVloer;
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const g = c.getContext("2d")!;
  // Nat pleister en verse chape zijn donkerder, niet blauw: een koele, donkere
  // vochtvlek. Het blauw van de SVG-legende las in 3D als een blauw geverfde kamer.
  const nat = (a: number) => `rgba(52,58,62,${a})`;
  const grad = soort === "muur"
    ? g.createLinearGradient(0, 128, 0, 0)
    : g.createRadialGradient(64, 70, 0, 64, 64, 84);
  grad.addColorStop(0, nat(0.6));
  grad.addColorStop(soort === "muur" ? 0.55 : 0.6, nat(soort === "muur" ? 0.2 : 0.32));
  grad.addColorStop(1, nat(soort === "muur" ? 0 : 0.06));
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  if (soort === "muur") verloopMuur = t; else verloopVloer = t;
  return t;
}

/**
 * Natte muren en vloeren. `droogt` laat de sluier per cyclus wegtrekken
 * (.ds-droogt: vol → weg op 80 % → weg), anders blijft hij op `vocht`.
 */
export function Vocht3D({ kamers, w, l, yf, H, vocht, muurNat, vloerNat, droogt, cyclus }: {
  kamers: Kamer[]; w: number; l: number; yf: number; H: number; vocht: number;
  muurNat: boolean; vloerNat: boolean; droogt: boolean; cyclus: number;
}) {
  const muurMat = useMemo(() => new MeshBasicMaterial({ map: gradient("muur"), transparent: true, depthWrite: false, side: DoubleSide }), []);
  const vloerMat = useMemo(() => new MeshBasicMaterial({ map: gradient("vloer"), transparent: true, depthWrite: false }), []);
  useFrame(({ clock }) => {
    const f = fase(clock.elapsedTime, cyclus);
    const droog = droogt ? Math.max(0, 1 - f / 0.8) : 1;
    const op = vocht * 0.7 * droog;
    muurMat.opacity = op;
    vloerMat.opacity = op;
  });
  if (vocht <= 0) return null;
  return (
    <group>
      {muurNat && (
        <>
          <mesh position={[w / 2, yf + H / 2, 0.006]} material={muurMat} renderOrder={2}>
            <planeGeometry args={[w, H]} />
          </mesh>
          <mesh position={[0.006, yf + H / 2, l / 2]} rotation={[0, Math.PI / 2, 0]} material={muurMat} renderOrder={2}>
            <planeGeometry args={[l, H]} />
          </mesh>
        </>
      )}
      {vloerNat &&
        kamers.map((k) => (
          <mesh key={k.id} position={[k.x + k.w / 2, yf + 0.006, k.z + k.l / 2]} rotation={[-Math.PI / 2, 0, 0]} material={vloerMat} renderOrder={2}>
            <planeGeometry args={[k.w, k.l]} />
          </mesh>
        ))}
    </group>
  );
}

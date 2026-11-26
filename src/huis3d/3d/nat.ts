import { type MeshStandardMaterial, Vector3, Vector4 } from "three";

/*
  Drying you can see: wet plaster and screed are darker, cooler and glossier.
  Once a device stands, a dry patch grows around it with a ragged edge, over the
  floor and up the walls, until it meets the next one and the floor is dry. A
  shader does it per pixel, so the patches follow the real device positions on
  every material that is plaster or floor, in each material set — ook op de
  afgewerkte vloeren en geschilderde muren van het interieur.
*/
export const MAX_BRON = 16;
export interface NatUniforms {
  bron: { value: Vector4[] };
  n: { value: number };
  r: { value: number };
  muur: { value: number };
  vloer: { value: number };
}
export const maakNat = (): NatUniforms => ({
  bron: { value: Array.from({ length: MAX_BRON }, () => new Vector4()) },
  n: { value: 0 }, r: { value: 0 }, muur: { value: 0 }, vloer: { value: 0 },
});
const NAT_GLSL = /* glsl */ `
uniform vec4 uNatBron[${MAX_BRON}];
uniform int uNatN;
uniform float uNatR;
uniform float uNatAmt;
uniform vec3 uNatTint;
varying vec3 vNatPos;
float natHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float natNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(natHash(i), natHash(i + vec2(1.0, 0.0)), f.x), mix(natHash(i + vec2(0.0, 1.0)), natHash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float natWet() {
  if (uNatAmt <= 0.0) return 0.0;
  float d = 1000.0;
  float hoog = 0.0;
  for (int i = 0; i < ${MAX_BRON}; i++) {
    if (i >= uNatN) break;
    vec4 b = uNatBron[i];
    // w = how far this device has switched on: a patch grows in, it does not pop.
    if (b.w < 0.01) continue;
    float dy = vNatPos.y - b.y;
    if (dy < -0.5 || dy > 3.2) continue;
    float di = length(vNatPos.xz - b.xz) + (1.0 - b.w) * 2.5;
    if (di < d) { d = di; hoog = clamp(dy / 2.6, 0.0, 1.0); }
  }
  // Ragged edge, and the foot of a wall stays wet longest.
  float n = natNoise(vNatPos.xz * 1.1 + vNatPos.y * 0.8) * 0.9 + natNoise(vNatPos.xz * 3.4 + vNatPos.y * 2.0) * 0.35;
  d += n - 0.6 + (1.0 - hoog) * 0.5;
  return (1.0 - smoothstep(-0.3, 0.3, uNatR - d)) * uNatAmt;
}
`;
export function natPatch(m: MeshStandardMaterial, u: NatUniforms, soort: "muur" | "vloer") {
  const tint = soort === "muur" ? new Vector3(0.5, 0.53, 0.6) : new Vector3(0.46, 0.48, 0.54);
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uNatBron = u.bron;
    sh.uniforms.uNatN = u.n;
    sh.uniforms.uNatR = u.r;
    sh.uniforms.uNatAmt = u[soort];
    sh.uniforms.uNatTint = { value: tint };
    sh.vertexShader = "varying vec3 vNatPos;\n" + sh.vertexShader.replace(
      "#include <project_vertex>",
      "#include <project_vertex>\n  vNatPos = (modelMatrix * vec4(transformed, 1.0)).xyz;",
    );
    sh.fragmentShader = NAT_GLSL + sh.fragmentShader
      .replace("#include <map_fragment>", "#include <map_fragment>\n  float natW = natWet();\n  diffuseColor.rgb *= mix(vec3(1.0), uNatTint, natW);")
      .replace("#include <roughnessmap_fragment>", "#include <roughnessmap_fragment>\n  roughnessFactor = mix(roughnessFactor, 0.32, natW);");
  };
  m.customProgramCacheKey = () => `nat-${soort}`;
  m.needsUpdate = true;
}

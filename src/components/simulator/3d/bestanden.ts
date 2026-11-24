/*
  De bestanden die de 3D-woning laadt, op één plek: de pagina haalt ze vooraf
  op (texturen samen met de 3D-chunk, de toestellen vanaf vraag 3), zodat ze er
  al zijn als de 3D ze nodig heeft (de toestellen staan in modellen.ts). Dit bestand importeert niets van three.js,
  zodat de pagina het kan gebruiken zonder de 3D-chunk binnen te halen.
*/
export const TEXTUUR = {
  baksteen: "/simulator/3d/baksteen.webp",
  arduin: "/simulator/3d/arduin.webp",
  pannen: "/simulator/3d/dakpannen.webp",
  pleister: "/simulator/3d/pleister.webp",
  chape: "/simulator/3d/chape.webp",
  parket: "/simulator/3d/parket.webp",
  grind: "/simulator/3d/grind.webp",
  // Bouwfasen (stap 3): wat er op muur en vloer zit, van ruwbouw tot afgewerkt.
  pleisternat: "/simulator/3d/pleisternat.webp",
  verf: "/simulator/3d/verf.webp",
  vloerplaat: "/simulator/3d/vloerplaat.webp",
  tegelvloer: "/simulator/3d/tegelvloer.webp",
} as const;

/*
  De interieurkit (scripts/simulator-3d/interieur.py en texturen.py): meubels als
  één GLB met een manifest, en de vloer- en wandtegels per kamersoort. Alleen
  geladen als de woning afgewerkt (bewoond) getoond wordt; samen ± 520 kB, de
  GLB ± 120 kB gzip. Los van de droogsimulator, zodat andere simulators hem
  kunnen hergebruiken.
*/
export const INTERIEUR = {
  glb: "/simulator/3d/interieur/interieur.glb",
  manifest: "/simulator/3d/interieur/interieur.json",
  tex: {
    visgraat: "/simulator/3d/interieur/visgraat.webp",
    planken: "/simulator/3d/interieur/planken.webp",
    tegelwarm: "/simulator/3d/interieur/tegelwarm.webp",
    tegelklein: "/simulator/3d/interieur/tegelklein.webp",
    kalkverf: "/simulator/3d/interieur/kalkverf.webp",
    wandtegel: "/simulator/3d/interieur/wandtegel.webp",
  },
} as const;

/*
  De straat rond de woning: een Blender-render per woningtype (scripts/simulator-3d/straat.py),
  in een achter- en een voorlaag, in drie maten:
    mini   875 × 625, ~25–90 kB per paar: komt altijd eerst, zodat de straat er op
           elke lijn binnen een paar seconden staat.
    klein  1750 × 1250: daarna op een gsm.
    groot  2800 × 2000: daarna op een groot scherm.
  Op een zuinige verbinding (databesparing, 2G) blijft het bij mini.
*/
export type StraatWoning = "rijwoning" | "halfopen" | "open" | "appartement";
export type StraatMaat = "mini" | "klein" | "groot";

export function heeftStraat(woning: string): woning is StraatWoning {
  return woning === "rijwoning" || woning === "halfopen" || woning === "open" || woning === "appartement";
}

/**
 * One render per facade width (BREEDTES), named by decimetres: halfopen-b80-achter.webp.
 * An apartment also has one per number of storeys (1 or 2): the roof edge of the
 * building around it follows the top of the unit, appartement-b90-l2-achter.webp.
 */
export function straatBeelden(woning: StraatWoning, breedte: number, maat: StraatMaat, lagen = 1): [string, string] {
  const s = maat === "groot" ? "" : `-${maat}`;
  const l = woning === "appartement" ? `-l${Math.min(2, Math.max(1, Math.round(lagen)))}` : "";
  const b = `${woning}-b${Math.round(breedte * 10)}${l}`;
  return [`/simulator/straat/${b}-achter${s}.webp`, `/simulator/straat/${b}-voor${s}.webp`];
}

type Verbinding = { saveData?: boolean; effectiveType?: string };
export type Budget3D = "geen" | "zuinig" | "later" | "meteen";

/**
 * How much the 3D may cost on this device.
 * "geen":   ≤ 1 GB memory: the SVG house stays, the 3D chunk (~260 kB gz) is never fetched.
 * "zuinig": data saver or 2G: the 3D still comes, but only after the page has
 *           loaded and with the smallest street picture.
 * "later":  3G, where the chunk would compete with the question photos, so it
 *           waits for the page load.
 * "meteen": everything else.
 * Before, data saver, 2G and 2 GB phones never got the 3D at all; a 2 GB phone
 * runs this scene fine, and the house is the point of the page.
 */
export function budget3D(): Budget3D {
  const n = navigator as Navigator & { connection?: Verbinding; deviceMemory?: number };
  const c = n.connection;
  if (n.deviceMemory !== undefined && n.deviceMemory <= 1) return "geen";
  if (c?.saveData || c?.effectiveType === "2g" || c?.effectiveType === "slow-2g") return "zuinig";
  return c?.effectiveType === "3g" ? "later" : "meteen";
}

/*
  Diagnose: met ?diag=1 in de URL toont de simulator wat hij beslist en laadt
  (WebGL, budget, 3D, straat). Zo zie je op een gsm zonder ontwikkelaarstools
  waarom er iets niet verschijnt.
*/
export const DIAG = typeof window !== "undefined" && new URLSearchParams(window.location.search).has("diag");
const diagStand: Record<string, string> = {};
export function meld(sleutel: string, waarde: string): void {
  if (!DIAG) return;
  diagStand[sleutel] = waarde;
  window.dispatchEvent(new CustomEvent("ds-diag", { detail: { ...diagStand } }));
}
export function diagNu(): Record<string, string> {
  return { ...diagStand };
}


const gevraagd = new Set<string>();
/** Haalt bestanden op de achtergrond binnen (lage prioriteit), elk hooguit één keer. */
export function voorlaad(urls: readonly string[], als: "image" | "fetch" = "fetch"): void {
  for (const href of urls) {
    if (gevraagd.has(href)) continue;
    gevraagd.add(href);
    const l = document.createElement("link");
    l.rel = "preload";
    l.as = als;
    l.href = href;
    // three.js laadt met crossOrigin "anonymous"; zonder hetzelfde attribuut matcht de
    // preload niet en haalt de browser alles twee keer op.
    l.crossOrigin = "anonymous";
    l.setAttribute("fetchpriority", "low");
    document.head.appendChild(l);
  }
}

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
  // Bouwfasen (stap 4): wat er op muur en vloer zit, van ruwbouw tot afgewerkt.
  pleisternat: "/simulator/3d/pleisternat.webp",
  verf: "/simulator/3d/verf.webp",
  vloerplaat: "/simulator/3d/vloerplaat.webp",
  tegelvloer: "/simulator/3d/tegelvloer.webp",
} as const;

type Verbinding = { saveData?: boolean; effectiveType?: string };

/**
 * How much the 3D may cost on this device. "geen": data saver, 2G or ≤ 2 GB
 * memory: the SVG house stays, the 3D chunk (~260 kB gz) is never fetched.
 * "later": 3G, where the chunk would compete with the question photos, so it
 * waits for the page load. "meteen": everything else.
 */
export function budget3D(): "geen" | "later" | "meteen" {
  const n = navigator as Navigator & { connection?: Verbinding; deviceMemory?: number };
  const c = n.connection;
  if (c?.saveData || c?.effectiveType === "2g" || c?.effectiveType === "slow-2g") return "geen";
  if (n.deviceMemory !== undefined && n.deviceMemory <= 2) return "geen";
  return c?.effectiveType === "3g" ? "later" : "meteen";
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

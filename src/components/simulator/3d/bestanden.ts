import type { DeviceKey } from "@/data/verhuur";

/*
  De bestanden die de 3D-woning laadt, op één plek: de pagina haalt ze vooraf
  op (texturen samen met de 3D-chunk, de toestellen vanaf vraag 3), zodat ze er
  al zijn als de 3D ze nodig heeft. Dit bestand importeert niets van three.js,
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

export const MODEL: Record<DeviceKey, string> = {
  small: "/simulator/3d/droger-small.glb",
  medium: "/simulator/3d/droger-medium.glb",
  axiaal: "/simulator/3d/ventilator.glb",
  kachel: "/simulator/3d/kachel.glb",
};

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

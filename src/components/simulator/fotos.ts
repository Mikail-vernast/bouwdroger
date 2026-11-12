import type { Dak, Woning } from "@/lib/droogSimulator";

/*
  Foto's voor de droogsimulator: één reeks gegenereerd met Codex — hetzelfde
  huis, telkens met alleen het verschil dat de keuze betekent (woningtype,
  dak, aantal bouwlagen). Bestanden: public/simulator/<sleutel>.webp; herkomst
  en prompt in docs/droogsimulator-fotos.md.

  Alleen wat hier staat wordt getoond. Ontbreekt een foto, dan valt de code
  terug op de dichtste die er wel is — nooit een kapotte afbeelding of een 404.
*/
export type FotoSleutel = `woning-${Woning}` | `dak-${Dak}` | `lagen-${1 | 2 | 3}` | `huis-${Dak}-${1 | 2 | 3}`;

const BESCHIKBAAR: FotoSleutel[] = [
  "woning-rijwoning", "woning-halfopen", "woning-open", "woning-appartement",
  "dak-zadeldak", "dak-plat", "dak-lessenaar",
  "lagen-1", "lagen-2", "lagen-3",
  "huis-plat-1", "huis-plat-3", "huis-lessenaar-1", "huis-lessenaar-3",
];

export function fotoVoor(sleutel: FotoSleutel): string | null {
  return BESCHIKBAAR.includes(sleutel) ? `/simulator/${sleutel}.webp` : null;
}

/**
 * The one house that matches dak × bouwlagen, for the big picture in step 2.
 * `lagen-n` is the series with a gable roof, `dak-x` the series with two
 * storeys, so together with the four `huis-*` corners every combination exists.
 */
export function huisFoto(woning: Woning, dak: Dak, lagen: number): string {
  const n = Math.min(3, Math.max(1, lagen)) as 1 | 2 | 3;
  const kandidaten: FotoSleutel[] = [
    ...(woning === "appartement" ? (["woning-appartement"] as const) : []),
    `huis-${dak}-${n}`,
    ...(dak === "zadeldak" ? ([`lagen-${n}`] as const) : []),
    ...(n === 2 ? ([`dak-${dak}`] as const) : []),
    `dak-${dak}`,
  ];
  for (const k of kandidaten) {
    const src = fotoVoor(k);
    if (src) return src;
  }
  return "/simulator/dak-zadeldak.webp";
}

/** Each photo exists twice: 640 px for the small cards, full size (1448 px) for the big picture on a retina screen. */
export function fotoSrcSet(src: string): string {
  return `${src.replace(/\.webp$/, "-640.webp")} 640w, ${src} 1448w`;
}

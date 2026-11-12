/*
  Small drawings for the question panel. Each one carries the answer it sits on:
  the facade shows the number of storeys under the chosen roof, the floor plan
  shows the actual room split of that storey, the section shows which layer is
  wet. Strokes use currentColor so a drawing reads on the maroon tile and on
  the selected (white) tile without a second colour set.
*/
import type { Dak, Kamer, Opening, Trap, Wat } from "@/lib/droogSimulator";

/** Front elevation: `lagen` storeys under roof `dak`; a third storey under a pitched roof is the attic. */
export function Gevel({ lagen, dak }: { lagen: number; dak: Dak }) {
  const zolder = lagen === 3 && dak === "zadeldak";
  const vol = zolder ? lagen - 1 : lagen;
  const h = 13;
  const x0 = 16, x1 = 64, y0 = 70;
  const top = y0 - vol * h;
  const nok = zolder ? 22 : 15;
  return (
    <svg viewBox="0 0 80 74" aria-hidden="true" className="ds-gevel">
      {Array.from({ length: vol }, (_, i) => {
        const y = y0 - (i + 1) * h;
        return (
          <g key={i}>
            <rect x={x0} y={y} width={x1 - x0} height={h} className="ds-g-muur" />
            {[0, 1, 2].map((j) => (
              <rect key={j} x={x0 + 7 + j * 14} y={y + 3.5} width={6} height={i === 0 && j === 1 ? h - 3.5 : 6} className="ds-g-raam" />
            ))}
          </g>
        );
      })}
      {dak === "zadeldak" && (
        <>
          <polygon points={`${x0 - 4},${top} 40,${top - nok} ${x1 + 4},${top}`} className="ds-g-dak" />
          {zolder && <rect x={36} y={top - 11} width={8} height={7} className="ds-g-raam" />}
        </>
      )}
      {dak === "plat" && <rect x={x0 - 2} y={top - 3} width={x1 - x0 + 4} height={3} className="ds-g-dak" />}
      {dak === "lessenaar" && <polygon points={`${x0 - 4},${top} ${x0 - 4},${top - 12} ${x1 + 4},${top - 3} ${x1 + 4},${top}`} className="ds-g-dak" />}
      <line x1={4} x2={76} y1={y0} y2={y0} className="ds-g-grond" />
    </svg>
  );
}

/**
 * Top-down plan of one storey, drawn like a building plan: walls with real
 * openings, a swing arc per door, the stair with its treads, the front door.
 * Garden at the top, street at the bottom — the same orientation as the
 * isometric drawing next to it, where the street side faces the viewer.
 */
export function Plattegrond({ kamers, openingen = [], trappen = [] }: { kamers: Kamer[]; openingen?: Opening[]; trappen?: Trap[] }) {
  if (!kamers.length) return null;
  const W = Math.max(...kamers.map((k) => k.x + k.w));
  const L = Math.max(...kamers.map((k) => k.z + k.l));
  const pad = 0.5;
  const lijnen: { x1: number; y1: number; x2: number; y2: number; buiten: boolean }[] = [];
  const wand = (as: "x" | "z", vast: number, a0: number, a1: number, buiten: boolean) => {
    const gaten = openingen.filter((o) => o.as === as && Math.abs(o.vast - vast) < 1e-6 && o.tot > a0 && o.van < a1).sort((p, q) => p.van - q.van);
    let c = a0;
    const stuk = (b0: number, b1: number) => {
      if (b1 - b0 < 0.02) return;
      lijnen.push(as === "x" ? { x1: b0, y1: vast, x2: b1, y2: vast, buiten } : { x1: vast, y1: b0, x2: vast, y2: b1, buiten });
    };
    for (const g of gaten) {
      stuk(c, g.van);
      c = Math.max(c, g.tot);
    }
    stuk(c, a1);
  };
  wand("x", 0, 0, W, true);
  wand("z", 0, 0, L, true);
  for (const k of kamers) {
    wand("x", k.z + k.l, k.x, k.x + k.w, k.z + k.l >= L - 1e-6);
    wand("z", k.x + k.w, k.z, k.z + k.l, k.x + k.w >= W - 1e-6);
  }
  return (
    <svg viewBox={`${-pad} ${-pad - 0.5} ${W + pad * 2} ${L + pad * 2 + 1}`} preserveAspectRatio="xMidYMid meet" aria-hidden="true" className="ds-plan">
      <text x={W / 2} y={-0.45} className="ds-plan-kant" textAnchor="middle">tuin</text>
      <text x={W / 2} y={L + 0.85} className="ds-plan-kant" textAnchor="middle">straat</text>
      {kamers.map((k, i) => {
        const gang = k.soort === "circulatie";
        const fs = Math.min(0.5, k.w / 7, k.l / 2);
        return (
          <g key={k.id} className={`ds-plan-kamer${gang ? " gang" : ""}`} style={{ animationDelay: `${i * 30}ms` }}>
            <rect x={k.x} y={k.z} width={k.w} height={k.l} />
            {fs > 0.24 && !(gang && k.w > k.l * 3) && (
              <text x={k.x + k.w / 2} y={k.z + k.l / 2} fontSize={fs} textAnchor="middle" dominantBaseline="central">
                {k.naam}
              </text>
            )}
          </g>
        );
      })}
      {trappen.map((t, i) => {
        const treden = 13;
        return (
          <g key={`t${i}`} className="ds-plan-trap">
            <rect x={t.x} y={t.z} width={t.w} height={t.l} />
            {Array.from({ length: treden - 1 }, (_, j) => {
              const x = t.x + (t.w * (j + 1)) / treden;
              return <line key={j} x1={x} x2={x} y1={t.z} y2={t.z + t.l} />;
            })}
            {t.op && (
              <path d={`M${t.x + 0.2} ${t.z + t.l / 2}H${t.x + t.w - 0.35}m-0.25 -0.2l0.25 0.2l-0.25 0.2`} className="ds-plan-pijl" />
            )}
          </g>
        );
      })}
      {lijnen.map(({ buiten, ...d }, i) => (
        <line key={i} {...d} className={buiten ? "ds-plan-gevel" : "ds-plan-wand"} />
      ))}
      {openingen.filter((o) => o.soort === "deur").map((o, i) => {
        const b = Math.min(0.85, o.tot - o.van);
        const d =
          o.as === "x"
            ? `M${o.van} ${o.vast}V${o.vast + o.kant * b}M${o.van + b} ${o.vast}A${b} ${b} 0 0 ${o.kant > 0 ? 1 : 0} ${o.van} ${o.vast + o.kant * b}`
            : `M${o.vast} ${o.van}H${o.vast + o.kant * b}M${o.vast} ${o.van + b}A${b} ${b} 0 0 ${o.kant > 0 ? 0 : 1} ${o.vast + o.kant * b} ${o.van}`;
        return <path key={i} d={d} className="ds-plan-deur" />;
      })}
      {openingen.filter((o) => o.soort === "voordeur").map((o, i) => (
        <path key={`v${i}`} d={`M${(o.van + o.tot) / 2} ${o.vast + 0.45}l-0.22 0.3h0.44z`} className="ds-plan-ingang" />
      ))}
    </svg>
  );
}

/** Cross-section of wall and floor; the wet layer is drawn in blue with droplets. */
export function Doorsnede2({ wat }: { wat: Wat }) {
  const muur = wat !== "chape";
  const vloer = wat !== "pleister";
  return (
    <svg viewBox="6 2 90 66" aria-hidden="true" className="ds-snede">
      {/* masonry */}
      <rect x={10} y={6} width={16} height={50} className="ds-s-steen" />
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={10} x2={26} y1={16 + i * 10} y2={16 + i * 10} className="ds-s-voeg" />
      ))}
      {/* plaster on the wall */}
      <rect x={26} y={6} width={5} height={42} className={muur ? "ds-s-nat" : "ds-s-droog"} />
      {/* slab and screed */}
      <rect x={10} y={56} width={82} height={8} className="ds-s-steen" />
      <rect x={31} y={48} width={61} height={8} className={vloer ? "ds-s-nat" : "ds-s-droog"} />
      {muur && [12, 24, 36].map((y, i) => <circle key={y} cx={36 + i} cy={y} r={1.6} className="ds-s-drup" style={{ animationDelay: `${i * 0.5}s` }} />)}
      {vloer && [48, 64, 80].map((x, i) => <circle key={x} cx={x} cy={42} r={1.6} className="ds-s-drup" style={{ animationDelay: `${0.25 + i * 0.5}s` }} />)}
    </svg>
  );
}

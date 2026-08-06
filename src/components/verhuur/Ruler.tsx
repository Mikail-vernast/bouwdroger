import { useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";

/**
 * The drag ruler the calculator uses for surface area and layer thickness.
 *
 * Dragging moves the needle freely; releasing snaps to the next package step
 * *upwards* (7 cm becomes 8 cm), because a package that is one size too small
 * simply will not dry the building in the calculated period.
 */
export interface RulerConfig {
  min: number;
  max: number;
  /** The values a release snaps to, ascending. */
  snaps: number[];
  /** Offers a "260+ · maatwerk" button that parks the needle at the far end. */
  custom?: boolean;
  /** Offers a "Weet ik niet" button that falls back to this average. */
  unknown?: number;
  unknownLabel?: string;
  unit: string;
  /** How the value is written — thickness uses a decimal comma. */
  format: (value: number) => string;
  /** The caption under the number. */
  label: (value: number) => string;
  /** Every n-th tick is drawn tall and labelled. */
  bigEvery: number;
  tick: number;
}

interface RulerProps {
  config: RulerConfig;
  /** Reports the answer as the design writes it into the query string. */
  onChange: (value: string) => void;
}

type Mode = "value" | "custom" | "unknown";

const Ruler = ({ config, onChange }: RulerProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(config.snaps[Math.floor(config.snaps.length / 2)]);
  const [mode, setMode] = useState<Mode>("value");
  const [dragging, setDragging] = useState(false);

  const ticks = useMemo(() => {
    const out: { left: number; big: boolean; label: string }[] = [];
    for (let t = config.min; t <= config.max + 1e-9; t += config.tick) {
      const big = Math.abs(t / config.bigEvery - Math.round(t / config.bigEvery)) < 1e-6;
      out.push({
        left: ((t - config.min) / (config.max - config.min)) * 100,
        big,
        label: big ? config.format(Math.round(t * 10) / 10) : "",
      });
    }
    return out;
  }, [config]);

  const percent = (v: number) => ((v - config.min) / (config.max - config.min)) * 100;
  const needleLeft =
    mode === "custom" ? "calc(100% - 1.5px)" : `calc(${percent(value).toFixed(2)}% - 1.5px)`;

  /** Rounds up to the first snap at or above `raw`. */
  const snapUp = (raw: number) => {
    const hit = config.snaps.find((s) => s >= raw - 1e-9);
    if (hit !== undefined) return hit;
    return config.custom ? "custom" : config.snaps[config.snaps.length - 1];
  };

  const commit = (v: number) => {
    setValue(v);
    setMode("value");
    onChange(config.format(v));
  };

  const chooseCustom = () => {
    setMode("custom");
    setValue(config.max);
    onChange("custom");
  };

  const chooseUnknown = () => {
    if (config.unknown === undefined) return;
    setMode("unknown");
    setValue(config.unknown);
    onChange("onbekend");
  };

  const valueAt = (event: ReactPointerEvent<HTMLDivElement>) => {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return config.min;
    const x = event.clientX - rect.left;
    return config.min + Math.min(1, Math.max(0, x / rect.width)) * (config.max - config.min);
  };

  const shown = Math.round(value * 10) / 10;
  const displayValue =
    mode === "custom" ? "260+" : mode === "unknown" ? `± ${config.format(shown)}` : config.format(shown);
  const caption =
    mode === "custom"
      ? config.label(NaN)
      : mode === "unknown"
        ? (config.unknownLabel ?? "")
        : config.label(shown);

  const marked = mode === "custom" ? "custom" : mode === "unknown" ? "unk" : String(value);

  return (
    <div className="ruler">
      <div className="rv">
        <span className="val">{displayValue}</span>
        <small>{config.unit}</small>
      </div>
      <div className="rvl">{caption}</div>
      <div
        className="rtrack"
        ref={trackRef}
        onPointerDown={(event) => {
          setDragging(true);
          event.currentTarget.setPointerCapture(event.pointerId);
          setMode("value");
          setValue(valueAt(event));
        }}
        onPointerMove={(event) => {
          if (!dragging) return;
          setValue(valueAt(event));
        }}
        onPointerUp={(event) => {
          setDragging(false);
          const snapped = snapUp(valueAt(event));
          if (snapped === "custom") chooseCustom();
          else commit(snapped);
        }}
      >
        <div className="rticks">
          {ticks.map((tick, i) => (
            <span
              key={i}
              className={`rt${tick.big ? " big" : ""}${
                tick.left > 93 ? " edge-r" : tick.left < 7 ? " edge-l" : ""
              }`}
              style={{ left: `${tick.left.toFixed(2)}%`, height: tick.big ? 34 : 18 }}
            >
              {tick.big && <span className="lb">{tick.label}</span>}
            </span>
          ))}
        </div>
        <div
          className="rneedle"
          style={{ left: needleLeft, transition: dragging ? "none" : undefined }}
        />
      </div>
      <div className="rsnaps">
        {config.snaps.map((snap) => (
          <button
            key={snap}
            type="button"
            className={marked === String(snap) ? "on" : undefined}
            onClick={() => commit(snap)}
          >
            {config.format(snap)}{config.unit}
          </button>
        ))}
        {config.custom && (
          <button
            type="button"
            className={marked === "custom" ? "on" : undefined}
            onClick={chooseCustom}
          >
            260+ m² · maatwerk
          </button>
        )}
        {config.unknown !== undefined && (
          <button
            type="button"
            className={marked === "unk" ? "on" : undefined}
            onClick={chooseUnknown}
          >
            Weet ik niet
          </button>
        )}
      </div>
    </div>
  );
};

export default Ruler;

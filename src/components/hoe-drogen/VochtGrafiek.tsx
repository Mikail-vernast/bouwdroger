import { useEffect, useRef } from "react";
import "@/styles/hoe-drogen-animaties.css";

/*
  Verzadigingshoeveelheid waterdamp in g/m³ bij een temperatuur, via de
  Magnusformule voor de verzadigingsdampdruk. Zo staan de curves er niet
  "op het oog" bij: bij +20 °C komt er 17,3 g/m³ uit, bij +30 °C 30,4 —
  dezelfde waarden als in de psychrometrische tabellen.
*/
const verzadiging = (t: number) =>
  (216.7 * (6.112 * Math.exp((17.62 * t) / (243.12 + t)))) / (273.15 + t);

const B = { w: 540, h: 400, l: 50, r: 48, t: 18, b: 42 };
const T_MIN = -10;
const T_MAX = 30;
const G_MAX = 32;

const x = (t: number) => B.l + ((t - T_MIN) / (T_MAX - T_MIN)) * (B.w - B.l - B.r);
const y = (g: number) => B.h - B.b - (Math.min(g, G_MAX) / G_MAX) * (B.h - B.b - B.t);

/** De curve voor één relatieve luchtvochtigheid, in stappen van 1 °C. */
const curve = (rv: number) => {
  const punten: string[] = [];
  for (let t = T_MIN; t <= T_MAX; t += 1) {
    punten.push(`${x(t).toFixed(1)},${y(verzadiging(t) * rv).toFixed(1)}`);
  }
  return "M" + punten.join(" L");
};

/* 100% en 60% zijn de twee lijnen waar het verhaal tussen speelt: wat de
   lucht maximaal draagt, en wat ze draagt als ze nog ruimte over heeft. */
const LIJNEN = [
  { rv: 1, label: "100%", klasse: "vol" },
  { rv: 0.8, label: "80%", klasse: "" },
  { rv: 0.6, label: "60%", klasse: "ijk" },
  { rv: 0.4, label: "40%", klasse: "" },
  { rv: 0.2, label: "20%", klasse: "" },
];

const TEMP_TICKS = [-10, -5, 0, 5, 10, 15, 20, 25, 30];
const GRAM_TICKS = [0, 5, 10, 15, 20, 25, 30];

const getal = (w: number, d = 1) => w.toFixed(d).replace(".", ",");
const graden = (t: number) => (t > 0 ? `+${t}` : `${t}`).replace("-", "−");

/** Waar de aanwijzer begint — ook de stand die in de geprerenderde HTML staat. */
const START = 20;
/** Heen en terug over de volle schaal. */
const PERIODE = 15000;

/**
 * De verzadigingsgrafiek bij "Wat betekent relatieve luchtvochtigheid?".
 *
 * Vervangt de productfoto: de vraag van die sectie is niet hoe een droger
 * eruitziet, maar waarom dezelfde hoeveelheid water bij 10 °C bijna
 * verzadigd is en bij 25 °C ruim de helft minder. Een aanwijzer loopt de
 * temperatuurschaal af; de afstand tussen de 100%- en de 60%-lijn groeit
 * mee, en dát is de opnamecapaciteit waar de droging op draait.
 *
 * De HTML bevat de volledige grafiek met de aanwijzer op +20 °C. De beweging
 * komt er pas ná mount bij, en alleen zolang het blok in beeld staat — een
 * rAF-lus die altijd doordraait is zonde op een pagina van deze lengte.
 */
const VochtGrafiek = () => {
  const wortel = useRef<HTMLDivElement>(null);
  const lijn = useRef<SVGLineElement>(null);
  const spanLijn = useRef<SVGLineElement>(null);
  const dotVol = useRef<SVGCircleElement>(null);
  const dotIjk = useRef<SVGCircleElement>(null);
  const tTekst = useRef<SVGTextElement>(null);
  const volTekst = useRef<SVGTSpanElement>(null);
  const ijkTekst = useRef<SVGTSpanElement>(null);

  useEffect(() => {
    const el = wortel.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let loopt = false;

    const zet = (t: number) => {
      const vol = verzadiging(t);
      const ijk = vol * 0.6;
      const px = x(t);
      lijn.current?.setAttribute("x1", String(px));
      lijn.current?.setAttribute("x2", String(px));
      spanLijn.current?.setAttribute("x1", String(px));
      spanLijn.current?.setAttribute("x2", String(px));
      spanLijn.current?.setAttribute("y1", String(y(vol)));
      spanLijn.current?.setAttribute("y2", String(y(ijk)));
      dotVol.current?.setAttribute("cx", String(px));
      dotVol.current?.setAttribute("cy", String(y(vol)));
      dotIjk.current?.setAttribute("cx", String(px));
      dotIjk.current?.setAttribute("cy", String(y(ijk)));
      if (tTekst.current) tTekst.current.textContent = `${graden(Math.round(t))} °C`;
      if (volTekst.current) volTekst.current.textContent = `${getal(vol)} g/m³`;
      if (ijkTekst.current) ijkTekst.current.textContent = `${getal(vol - ijk)} g/m³`;
    };

    const begin = performance.now();
    const loop = (nu: number) => {
      // Sinus in plaats van een zaagtand: de aanwijzer vertraagt aan beide
      // uiteinden in plaats van terug te springen.
      const fase = ((nu - begin) % PERIODE) / PERIODE;
      const p = (1 - Math.cos(fase * 2 * Math.PI)) / 2;
      zet(T_MIN + (T_MAX - T_MIN) * p);
      frame = requestAnimationFrame(loop);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const zichtbaar = entries[0].isIntersecting;
        if (zichtbaar && !loopt) {
          loopt = true;
          frame = requestAnimationFrame(loop);
        } else if (!zichtbaar && loopt) {
          loopt = false;
          cancelAnimationFrame(frame);
        }
      },
      { rootMargin: "80px" }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  const volStart = verzadiging(START);

  return (
    <div className="vgraf" ref={wortel}>
      <svg viewBox={`0 0 ${B.w} ${B.h}`} role="img" aria-label="Grafiek: hoeveel waterdamp lucht kan bevatten per temperatuur, bij 20 tot 100 procent relatieve luchtvochtigheid.">
        {/* rasterlijnen */}
        {GRAM_TICKS.map((g) => (
          <line key={`g${g}`} className="vgraf-raster" x1={B.l} x2={B.w - B.r} y1={y(g)} y2={y(g)} />
        ))}
        {TEMP_TICKS.map((t) => (
          <line key={`t${t}`} className="vgraf-raster" x1={x(t)} x2={x(t)} y1={B.t} y2={B.h - B.b} />
        ))}

        {/* het vlak dat de lucht nog kan opnemen tussen 60% en verzadiging */}
        <path
          className="vgraf-vlak"
          d={`${curve(1)} L${x(T_MAX)},${y(verzadiging(T_MAX) * 0.6)} ${curve(0.6)
            .replace("M", "L")
            .split(" L")
            .reverse()
            .join(" L")} Z`}
        />

        {LIJNEN.map((l) => (
          <g key={l.label}>
            <path className={`vgraf-lijn ${l.klasse}`} d={curve(l.rv)} />
            <text className={`vgraf-rvlabel ${l.klasse}`} x={B.w - B.r + 7} y={y(verzadiging(T_MAX) * l.rv) + 4}>
              {l.label}
            </text>
          </g>
        ))}

        {/* aanwijzer */}
        <line ref={lijn} className="vgraf-scrub" x1={x(START)} x2={x(START)} y1={B.t} y2={B.h - B.b} />
        <line ref={spanLijn} className="vgraf-span" x1={x(START)} x2={x(START)} y1={y(volStart)} y2={y(volStart * 0.6)} />
        <circle ref={dotVol} className="vgraf-dot vol" cx={x(START)} cy={y(volStart)} r="5" />
        <circle ref={dotIjk} className="vgraf-dot ijk" cx={x(START)} cy={y(volStart * 0.6)} r="5" />

        {/* assen */}
        <line className="vgraf-as" x1={B.l} x2={B.w - B.r} y1={B.h - B.b} y2={B.h - B.b} />
        <line className="vgraf-as" x1={B.l} x2={B.l} y1={B.t} y2={B.h - B.b} />
        {TEMP_TICKS.map((t) => (
          <text key={`tl${t}`} className="vgraf-tick" x={x(t)} y={B.h - B.b + 16} textAnchor="middle">
            {graden(t)}
          </text>
        ))}
        {GRAM_TICKS.map((g) => (
          <text key={`gl${g}`} className="vgraf-tick" x={B.l - 9} y={y(g) + 4} textAnchor="end">
            {g}
          </text>
        ))}
        <text className="vgraf-astitel" x={B.l + (B.w - B.l - B.r) / 2} y={B.h - 6} textAnchor="middle">
          temperatuur (°C)
        </text>
        <text className="vgraf-astitel" x={-((B.h - B.b + B.t) / 2)} y={13} transform="rotate(-90)" textAnchor="middle">
          waterdamp in de lucht (g/m³)
        </text>

        {/* aflezing */}
        <g className="vgraf-chip">
          <rect x={B.l + 10} y={B.t + 9} width="188" height="74" rx="11" />
          <text ref={tTekst} className="vgraf-chip-t" x={B.l + 24} y={B.t + 33}>
            {graden(START)} °C
          </text>
          <text className="vgraf-chip-r" x={B.l + 24} y={B.t + 52}>
            verzadigd: <tspan ref={volTekst} className="vol">{getal(volStart)} g/m³</tspan>
          </text>
          <text className="vgraf-chip-r" x={B.l + 24} y={B.t + 70}>
            bij 60% nog ruimte voor <tspan ref={ijkTekst} className="ijk">{getal(volStart * 0.4)} g/m³</tspan>
          </text>
        </g>
      </svg>
      <p className="vgraf-bij">
        Hoe warmer de lucht, hoe meer waterdamp ze kán dragen. Daarom zegt een percentage alleen iets
        samen met de temperatuur, en groeit de ruimte om vocht op te nemen zo sterk met elke graad erbij.
      </p>
    </div>
  );
};

export default VochtGrafiek;

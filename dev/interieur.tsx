/*
  Proefpagina voor de 3D-woning, alleen voor de dev-server (vite serveert
  /dev/interieur.html; de build kent alleen index.html). Zo kan Playwright één
  bepaalde woning openen zonder door de vragen van de simulator te klikken:

    /dev/interieur.html?woning=halfopen&b=8&lagen=2&dak=zadeldak&fase=afgewerkt&laag=0&open=1

  Zet `window.__klaar` zodra de eerste frame getekend is, en `window.__plan`
  met het plan, voor wie wil nakijken wat er getekend is.
*/
import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import IsoHouse3D from "@/components/simulator/3d/IsoHouse3D";
import { materiaalVoor } from "@/components/simulator/materiaal";
import { BREEDTES, WONING, planVoor, type Dak, type Fase, type Woning } from "@/lib/droogSimulator";
import "@/index.css";
import "@/styles/droogsimulator.css";

const q = new URLSearchParams(location.search);
const woning = (q.get("woning") ?? "halfopen") as Woning;
const breedte = Number(q.get("b") ?? WONING[woning].w) || BREEDTES[woning][1];
const lagen = Number(q.get("lagen") ?? 2);
const dak = (q.get("dak") ?? WONING[woning].dakToegelaten[0]) as Dak;
const fase = (q.get("fase") ?? "afgewerkt") as Fase;
const laag = Number(q.get("laag") ?? 0);
const open = q.get("open") !== "0";
const programmas = q.get("prog") ? JSON.parse(q.get("prog")!) : [];
const plan = planVoor(woning, lagen, dak, programmas, breedte);
(window as unknown as { __plan: unknown }).__plan = plan;

createRoot(document.getElementById("root")!).render(
  <MemoryRouter>
    <div style={{ position: "fixed", inset: 0 }}>
      <IsoHouse3D
        woning={woning}
        breedte={breedte}
        verdiepingen={lagen}
        dak={dak}
        kamers={plan.kamers}
        openingen={plan.openingen}
        trappen={plan.trappen}
        ramen={plan.ramen}
        open={open}
        actief={laag}
        materiaal={materiaalVoor(null, fase, 0)}
        className="ds-iso"
        onKlaar={() => { (window as unknown as { __klaar: boolean }).__klaar = true; }}
      />
    </div>
  </MemoryRouter>,
);

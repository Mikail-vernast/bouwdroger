import { describe, expect, it } from "vitest";
import { Writable } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import type { ReactNode } from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import RealisatiesPage from "@/pages/RealisatiesPage";
import RealisatieDetailPage from "@/pages/RealisatieDetailPage";

/**
 * Zoals vite-react-ssg prerendert: `renderToPipeableStream` en pas schrijven
 * bij `onAllReady`. De Franse projectteksten laden met een dynamische import
 * en schorsen tot ze er zijn; deze test bewaakt dat de geprerenderde HTML dan
 * toch de Franse tekst bevat en niet de Nederlandse (of een lege grens).
 */
function prerender(element: ReactNode): Promise<string> {
  return new Promise((resolve, reject) => {
    let html = "";
    const uit = new Writable({
      write(stuk, _enc, klaar) {
        html += stuk.toString();
        klaar();
      },
    });
    uit.on("finish", () => resolve(html));
    const { pipe } = renderToPipeableStream(<HelmetProvider context={{}}>{element}</HelmetProvider>, {
      onAllReady: () => pipe(uit),
      onError: reject,
    });
  });
}

const op = (pad: string, element: ReactNode, route: string) => (
  <MemoryRouter initialEntries={[pad]}>
    <Routes>
      <Route path={route} element={element} />
    </Routes>
  </MemoryRouter>
);

describe("Franse realisaties in de geprerenderde HTML", () => {
  it("het overzicht toont de Franse titels", async () => {
    const html = await prerender(op("/fr/realisations", <RealisatiesPage />, "/fr/realisations"));
    expect(html).toContain("De vrais chantiers, de vrais résultats");
    expect(html).toContain("Bruxelles");
    expect(html).not.toContain("Echte werven, echte resultaten");
  });

  it("een projectpagina toont de Franse tekst op de Nederlandse slug", async () => {
    const html = await prerender(
      op("/fr/realisations/badkamer-drogen-brussel", <RealisatieDetailPage />, "/fr/realisations/:slug"),
    );
    expect(html).toContain("Fiche du projet");
    expect(html).toContain("Bruxelles");
    expect(html).toContain('href="/fr/realisations"');
  });

  it("de Nederlandse pagina blijft Nederlands", async () => {
    const html = await prerender(op("/realisaties", <RealisatiesPage />, "/realisaties"));
    expect(html).toContain("Echte werven, echte resultaten");
  });
});

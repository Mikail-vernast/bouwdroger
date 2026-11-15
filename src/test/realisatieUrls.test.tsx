import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";
import { REALISATIES, getRealisatie, realisatieMeta } from "@/data/realisaties";
import { REALISATIE_REDIRECTS } from "@/data/realisatie-redirects";
import RealisatieDetailPage from "@/pages/RealisatieDetailPage";
import { matchRedirect } from "../../worker/vercelRouting";

const redirects = Object.entries(REALISATIE_REDIRECTS);
const origin = "https://vernast-bouwdrogers.be";

function Bestemming() {
  const { pathname, search, hash } = useLocation();
  return <output>{pathname}{search}{hash}</output>;
}

describe("beschrijvende realisatie-URL’s", () => {
  it.each(redirects)("%s verwijst permanent naar %s zonder keten", (oud, nieuw) => {
    expect(getRealisatie(nieuw)).toBeDefined();
    expect(getRealisatie(oud)).toBeUndefined();
    expect(matchRedirect(new URL(`${origin}/realisaties/${oud}?utm_source=oud`))).toEqual({
      location: `/realisaties/${nieuw}?utm_source=oud`,
      status: 308,
    });
    expect(matchRedirect(new URL(`${origin}/realisaties/${nieuw}`))).toBeNull();
  });

  it.each(redirects)("%s werkt ook bij navigatie zonder serverredirect", (oud, nieuw) => {
    render(
      <MemoryRouter initialEntries={[`/realisaties/${oud}?utm_source=oud#album`]}>
        <Routes>
          <Route path={`/realisaties/${nieuw}`} element={<Bestemming />} />
          <Route path="/realisaties/:slug" element={<RealisatieDetailPage />} />
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByRole("status")).toHaveTextContent(`/realisaties/${nieuw}?utm_source=oud#album`);
  });

  it("houdt projectnamen en SEO-titels kort en uniek", () => {
    expect(new Set(REALISATIES.map(r => r.slug)).size).toBe(REALISATIES.length);
    expect(new Set(REALISATIES.map(r => r.titel)).size).toBe(REALISATIES.length);
    for (const r of REALISATIES) {
      expect(realisatieMeta(r).title).toBe(`${r.titel} | Vernast`);
      expect(realisatieMeta(r).title.length).toBeLessThanOrEqual(60);
      expect(r.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    }
  });
});

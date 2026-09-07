import { describe, expect, it } from "vitest";
import { SEO } from "@/data/seo";
import { REALISATIES, realisatieMeta } from "@/data/realisaties";

/**
 * Titel- en beschrijvingslengtes zijn de enige SEO-regel in deze repo die je
 * niet ziet door naar de pagina te kijken: het probleem staat in de <head> en
 * verschijnt pas in een zoekresultaat, weken later. Vandaar een test.
 *
 * De grenzen: titel <= 60 tekens (Google kapt rond 600 px af), beschrijving
 * 110-160. Korter dan 110 nodigt Google uit om zelf een snippet te schrijven,
 * langer dan 160 wordt afgekapt.
 */
const TITEL_MAX = 60;
const DESCR_MIN = 110;
const DESCR_MAX = 160;

describe("SEO-teksten per route", () => {
  const indexeerbaar = Object.entries(SEO).filter(([, e]) => !("noindex" in e && e.noindex));

  it.each(indexeerbaar)("%s heeft een titel binnen de limiet", (_naam, entry) => {
    expect(entry.title.length).toBeLessThanOrEqual(TITEL_MAX);
  });

  it.each(indexeerbaar)("%s heeft een bruikbare beschrijving", (_naam, entry) => {
    expect(entry.description.length).toBeGreaterThanOrEqual(DESCR_MIN);
    expect(entry.description.length).toBeLessThanOrEqual(DESCR_MAX);
  });

  it("gebruikt geen letterlijke HTML-entiteiten in de teksten", () => {
    const teksten = Object.values(SEO).flatMap((e) => [e.title, e.description]);
    expect(teksten.filter((t) => /&[a-z]{2,8};/i.test(t))).toEqual([]);
  });
});

describe("realisatieMeta", () => {
  const meta = REALISATIES.map(realisatieMeta);

  it("kapt nooit middenin een woord af", () => {
    // "schimmelvr…" leest als een fout; kapAf snijdt op de laatste woordgrens.
    const fout = meta.filter((m) => /\S…/.test(m.title.replace(/ …/g, "")) && !/\s…/.test(m.title));
    expect(fout.map((m) => m.title)).toEqual([]);
  });

  it("houdt beschrijvingen binnen 110-160 tekens", () => {
    const buiten = meta.filter((m) => m.description.length < DESCR_MIN || m.description.length > DESCR_MAX);
    expect(buiten.map((m) => `${m.description.length}: ${m.description}`)).toEqual([]);
  });

  it("laat alleen een titel over de limiet gaan als de projecttitel zelf al te lang is", () => {
    const teLang = meta.filter((m) => m.title.length > TITEL_MAX);
    const bron = REALISATIES.filter((r) => r.titel.length > TITEL_MAX);
    expect(teLang.length).toBe(bron.length);
  });

  it("laat geen letterlijke HTML-entiteiten door", () => {
    const teksten = meta.flatMap((m) => [m.title, m.description]);
    expect(teksten.filter((t) => /&[a-z]{2,8};/i.test(t))).toEqual([]);
  });
});

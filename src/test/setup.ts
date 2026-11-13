import "@testing-library/jest-dom";

/*
  Deze setup draait vóór élk testbestand, ook vóór bestanden die bewust
  `@vitest-environment node` kiezen omdat ze servercode testen. Daar bestaat
  `window` niet en klapte dit eruit voordat de test zelf begon.
*/
if (typeof window !== "undefined") {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => {},
    }),
  });
}

/*
  jsdom kent `IntersectionObserver` niet. `Reveal` ontsnapt daaraan omdat elk
  element in jsdom op positie 0 staat en het component dan vroegtijdig stopt,
  maar `StappenCarrousel` zet er altijd een op om alleen in beeld door te
  schuiven — en dan klapt elke test die /waterschade rendert eruit.

  De stub doet niets: niets komt in beeld, dus de carrousel blijft in tests op
  stap 1 staan. Dat is precies wat een test wil, want een kaart die vanzelf
  wegschuift maakt elke bevestiging erna wankel.
*/
if (typeof window !== "undefined" && !("IntersectionObserver" in window)) {
  class GeenWaarnemer {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
    readonly root = null;
    readonly rootMargin = "";
    readonly thresholds: number[] = [];
  }
  Object.defineProperty(window, "IntersectionObserver", {
    writable: true,
    value: GeenWaarnemer,
  });
  Object.defineProperty(globalThis, "IntersectionObserver", {
    writable: true,
    value: GeenWaarnemer,
  });
}

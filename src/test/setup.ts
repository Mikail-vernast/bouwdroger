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

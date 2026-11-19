globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/termijnLabelFr.ts");
function termijnLabelFr(rij) {
  const eenheid = (n) => n === 1 ? "semaine" : "semaines";
  return rij.min === rij.max ? `${rij.min} ${eenheid(rij.min)}` : `${rij.min} à ${rij.max} ${eenheid(rij.max)}`;
}
export {
  termijnLabelFr as t
};

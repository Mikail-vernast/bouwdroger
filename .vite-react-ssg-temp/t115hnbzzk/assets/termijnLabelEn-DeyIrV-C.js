globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/termijnLabelEn.ts");
function termijnLabelEn(rij) {
  const eenheid = (n) => n === 1 ? "week" : "weeks";
  return rij.min === rij.max ? `${rij.min} ${eenheid(rij.min)}` : `${rij.min} to ${rij.max} ${eenheid(rij.max)}`;
}
export {
  termijnLabelEn as t
};

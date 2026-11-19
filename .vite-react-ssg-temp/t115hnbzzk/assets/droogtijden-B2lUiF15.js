import { packageThicknesses, getAllPackages } from "./packages-DdkKuPcF.js";
import { p as packageWeeks } from "./verhuur-8XCQs1EE.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/droogtijden.ts");
function droogtermijnen(soort) {
  const pakketten = getAllPackages();
  return packageThicknesses(soort).map((dikte) => {
    const weken = pakketten.filter((p) => p.workType === soort && p.thicknessCm === dikte).map(packageWeeks);
    return { dikte, min: Math.min(...weken), max: Math.max(...weken) };
  });
}
function termijnLabel(rij) {
  const eenheid = (n) => n === 1 ? "week" : "weken";
  return rij.min === rij.max ? `${rij.min} ${eenheid(rij.min)}` : `${rij.min} tot ${rij.max} ${eenheid(rij.max)}`;
}
function termijnZonderDikte(soort) {
  const weken = getAllPackages().filter((p) => p.workType === soort).map(packageWeeks);
  if (weken.length === 0) return null;
  return { dikte: 0, min: Math.min(...weken), max: Math.max(...weken) };
}
function natuurlijkeChapeWeken(dikteCm) {
  if (dikteCm <= 4) return dikteCm;
  return 4 + (dikteCm - 4) * 2;
}
function natuurlijkePleisterWeken(dikteCm) {
  return { min: dikteCm, max: dikteCm * 2 };
}
function natuurlijkeChapeBereik(dikteCm) {
  const min = natuurlijkeChapeWeken(dikteCm);
  return { min, max: Math.round(min * 1.5) };
}
function bereikLabel(bereik) {
  const eenheid = (n) => n === 1 ? "week" : "weken";
  return bereik.min === bereik.max ? `${bereik.min} ${eenheid(bereik.min)}` : `${bereik.min} tot ${bereik.max} ${eenheid(bereik.max)}`;
}
export {
  natuurlijkePleisterWeken as a,
  termijnLabel as b,
  bereikLabel as c,
  droogtermijnen as d,
  natuurlijkeChapeBereik as e,
  natuurlijkeChapeWeken as n,
  termijnZonderDikte as t
};

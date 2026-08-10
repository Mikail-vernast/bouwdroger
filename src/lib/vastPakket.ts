/**
 * Het vaste pakket dat bij een configuratie hoort, en wat je ermee rekent.
 *
 * De calculator stelde vroeger zelf een pakket samen uit oppervlaktebrackets.
 * Dat leverde een pakket op dat in de webshop niet bestond, aan een prijs die
 * daar niet gold — 100 m² chape 6 cm kwam op € 317 uit terwijl de shop € 571,20
 * aanrekent. Sinds de catalogus leidend is, mondt elke antwoordcombinatie uit op
 * één van de pakketten die Vernast werkelijk verkoopt.
 *
 * De oppervlaktebrackets die de calculator vroeger zelf samenstelde zijn op
 * 2026-08-10 verdwenen: de catalogus dekt alle maten, werksoorten en diktes, dus
 * was er niets meer om op terug te vallen.
 */
// Relatief geïmporteerd, niet via `@/`: de serverless functies in /api draaien
// buiten de Vite-alias en gebruiken dezelfde rekenregels.
import { findPackage, type Package, type WorkType } from "../data/packages.js";
import type { DeviceKey } from "../data/verhuur.js";
import type { PackageConfig, PackageItem } from "./verhuur.js";

/** De werksoort van de calculator omzetten naar die van de catalogus. */
function workType(wat: string): WorkType | null {
  if (wat === "pleister" || wat === "chape" || wat === "beide" || wat === "waterschade") {
    return wat;
  }
  return null;
}

/**
 * De dikte die deze werksoort stuurt. "beide" en waterschade kennen er geen —
 * daar hangt het pakket alleen aan de oppervlakte, precies zoals de shop het
 * verkoopt.
 */
function thicknessFor(c: PackageConfig): number | null {
  if (c.wat === "chape") return Number(c.cd);
  if (c.wat === "pleister") return Number(c.pd);
  return null;
}

/** Het vaste pakket voor deze configuratie, of `null` als het niet bestaat. */
export function packageFor(c: PackageConfig): Package | null {
  const soort = workType(c.wat);
  if (!soort) return null;
  const sqm = Number(c.size);
  if (!Number.isFinite(sqm)) return null;
  return findPackage(sqm, soort, thicknessFor(c)) ?? null;
}

/**
 * Welke toestelsleutel bij een regel uit de pakketlijst hoort.
 *
 * De catalogus draagt productnamen ("ECO Boost"), de beschikbaarheidscontrole en
 * `bouwdroger_equipment` aan de Vernast-kant werken met sleutels. Het `type` uit
 * de catalogus dekt ventilator en kachel; bij een bouwdroger beslist de
 * capaciteit uit de fiche, want dát is wat de twee modellen onderscheidt — op de
 * naam matchen zou breken zodra marketing het toestel hernoemt.
 */
export function deviceKeyFor(item: { name: string; type: string; specs?: Record<string, string> }): DeviceKey {
  if (item.type === "ventilator") return "axiaal";
  if (item.type === "kachel") return "kachel";
  const liters = Number((item.specs?.Capaciteit ?? "").replace(/[^\d]/g, ""));
  return liters >= 70 ? "medium" : "small";
}

/** Toestellen optellen per sleutel, in een volgorde die niet meebeweegt met de database. */
function tellen(equipment: Package["equipment"]): PackageItem[] {
  const perKey = new Map<DeviceKey, number>();
  for (const item of equipment) {
    const key = deviceKeyFor(item);
    perKey.set(key, (perKey.get(key) ?? 0) + item.count);
  }
  // Vaste volgorde, zodat de opsomming op de pagina niet meebeweegt met de
  // volgorde waarin het portaal de toestellen toevallig opslaat.
  const volgorde: DeviceKey[] = ["small", "medium", "axiaal", "kachel"];
  return volgorde
    .filter((k) => (perKey.get(k) ?? 0) > 0)
    .map((k) => ({ k, q: perKey.get(k) as number }));
}

/**
 * De toestellen die in het pakkettarief zitten, in de vorm waarin de rest van de
 * site rekent.
 *
 * Wat het portaal als optie markeert hoort hier niet bij: die toestellen komen
 * er pas bij als de klant erom vraagt, en worden dan apart bijgerekend. Zou het
 * hier wél in staan, dan zag `configPrice` ze als inbegrepen en leverde de site
 * ze gratis mee.
 */
export function packageItems(pkg: Package): PackageItem[] {
  return tellen(pkg.equipment.filter((item) => !item.optional));
}

/** De toestellen die het portaal als optie markeerde — de kachels, in de praktijk. */
export function packageOptionalItems(pkg: Package): PackageItem[] {
  return tellen(pkg.equipment.filter((item) => item.optional));
}

/** De huurtermijn van een pakket in weken; twee als ze nog niet ingevuld is. */
export function packageWeeks(pkg: Package): number {
  return pkg.rentalWeeks && pkg.rentalWeeks > 0 ? pkg.rentalWeeks : 2;
}

/**
 * Wat het pakket kost: dagprijs × dagen, zonder staffelkorting — zo rekent de
 * shop het ook. De kortingsstaffel geldt daar alleen bij losse toestelhuur.
 */
export function packageTotal(pkg: Package): number {
  return Math.round(pkg.pricePerDay * packageWeeks(pkg) * 7 * 100) / 100;
}

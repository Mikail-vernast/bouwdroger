import { COPY, type Antwoorden } from "./WaterschadeAanvraag.copy";

/** Het bericht voor het portaal: één regel per antwoord, altijd in het Nederlands. */
export function berichtVoorPortaal(a: Antwoorden): string {
  const nl = COPY.nl;
  const lijst = <K extends string>(keys: K[], labels: Record<K, string>) => keys.map((k) => labels[k]).join(", ") || "-";
  const een = <K extends string>(k: K | null, labels: Record<K, string>) => (k ? labels[k] : "-");
  return [
    "Waterschade-aanvraag via de droogsimulator",
    "",
    `Oorzaak: ${een(a.oorzaak, nl.oorzaken)}`,
    `Staat er nog water: ${een(a.waterStaat, nl.jaNee)}`,
    `Oorzaak hersteld: ${een(a.hersteld, nl.jaNeeWeet)}`,
    `Waar nat: ${lijst(a.plekken, nl.plekken)} · ${een(a.ruimtes, nl.ruimtes)}`,
    `Wat nat: ${lijst(a.nat, nl.natOpties)}`,
    `Sinds: ${een(a.sinds, nl.sindsOpties)} · schimmel zichtbaar: ${a.schimmel ? "ja" : "nee"}`,
    `Levering gewenst: ${een(a.levering, nl.leveringOpties)}`,
    `Verzekering: ${een(a.verzekering, nl.verzekeringOpties)}${a.dossier ? ` (dossier ${a.dossier})` : ""}`,
    `Stroom aanwezig: ${een(a.stroom, nl.jaNeeWeet)}`,
    `Klant: ${a.klant === "bedrijf" ? `bedrijf${a.btw ? ` (btw ${a.btw})` : ""}` : "particulier"}`,
    a.opmerking ? `\nOpmerking:\n${a.opmerking}` : "",
  ].filter((r, i, all) => r !== "" || (i > 0 && all[i - 1] !== "")).join("\n").trim();
}

import { describe, expect, it } from "vitest";
import { berichtVoorPortaal } from "@/components/simulator/waterschadeBericht";
import type { Antwoorden } from "@/components/simulator/WaterschadeAanvraag.copy";

const basis: Antwoorden = {
  oorzaak: "overstroming",
  waterStaat: "ja",
  hersteld: "weet_niet",
  plekken: ["kelder", "gelijkvloers"],
  ruimtes: "2-3",
  nat: ["vloer", "isolatie"],
  sinds: "48u",
  schimmel: false,
  straat: "Kerkstraat",
  nr: "1",
  postcode: "2000",
  gemeente: "Antwerpen",
  levering: "vandaag",
  verzekering: "ja",
  dossier: "AB-123",
  stroom: "nee",
  voornaam: "An",
  achternaam: "Peeters",
  telefoon: "0470 12 34 56",
  email: "an@example.com",
  klant: "particulier",
  btw: "",
  opmerking: "",
};

describe("het bericht van de waterschade-aanvraag voor het portaal", () => {
  it("zet elk antwoord op een eigen regel, in het Nederlands", () => {
    const bericht = berichtVoorPortaal(basis);
    expect(bericht).toContain("Oorzaak: Overstroming");
    expect(bericht).toContain("Staat er nog water: Ja");
    expect(bericht).toContain("Waar nat: Kelder, Gelijkvloers · 2 tot 3");
    expect(bericht).toContain("Wat nat: Vloer, Onder de vloer of vloerverwarming");
    expect(bericht).toContain("Verzekering: Ja (dossier AB-123)");
    expect(bericht).toContain("Stroom aanwezig: Nee");
  });

  it("vermeldt het btw-nummer alleen bij een bedrijf", () => {
    expect(berichtVoorPortaal({ ...basis, klant: "bedrijf", btw: "BE0123456789" })).toContain("Klant: bedrijf (btw BE0123456789)");
    expect(berichtVoorPortaal({ ...basis, btw: "BE0123456789" })).toContain("Klant: particulier");
  });

  it("zet een opmerking onderaan, los van de antwoorden", () => {
    expect(berichtVoorPortaal({ ...basis, opmerking: "Sleutel bij de buren" })).toMatch(/\n\nOpmerking:\nSleutel bij de buren$/);
  });

  it("toont een streepje voor een vraag zonder antwoord in plaats van 'null'", () => {
    const bericht = berichtVoorPortaal({ ...basis, oorzaak: null, plekken: [] });
    expect(bericht).toContain("Oorzaak: -");
    expect(bericht).not.toContain("null");
  });
});

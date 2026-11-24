import { afterEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ContactBlok from "@/components/content/ContactBlok";

/**
 * Tot 24-11-2026 had elke inhoudspagina een eigen vraagformulier zonder adres
 * dat naar `/api/aanvraag` ging, en op /over-ons, /drooggarantie en
 * /waarom-bouwdroging verstuurde het formulier helemaal niets. Nu toont
 * `ContactBlok` hetzelfde formulier als de homepage. Deze test bewaakt dat het
 * naar `/api/vraag` post, met adres, het vooraf gekozen onderwerp en de pagina.
 */

function toon() {
  const { container } = render(
    <MemoryRouter initialEntries={["/waterschade"]}>
      <ContactBlok titel="Vraag" lede="Stel uw vraag." onderwerp="droging_op_maat" placeholder="Wat is er nat?" />
    </MemoryRouter>,
  );
  const form = container.querySelector<HTMLFormElement>("form.vq-card");
  if (!form) throw new Error("geen vraagformulier");
  return form;
}

const zet = (id: string, value: string) =>
  fireEvent.change(document.getElementById(id) as HTMLInputElement, { target: { value } });

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("ContactBlok", () => {
  it("staat op het onderwerp van de pagina en toont de voorbeeldtekst", () => {
    toon();
    expect((document.getElementById("ct-onderwerp") as HTMLSelectElement).value).toBe("droging_op_maat");
    expect(screen.getByPlaceholderText("Wat is er nat?")).toBeInTheDocument();
  });

  it("verstuurt niets zonder adres en wijst het eerste foute veld aan", () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    const form = toon();
    zet("ct-naam", "Jan Peeters");
    zet("ct-mail", "jan@voorbeeld.be");
    zet("ct-bericht", "De chape is net gegoten.");
    fireEvent.submit(form);

    expect(fetchMock).not.toHaveBeenCalled();
    expect(document.activeElement?.id).toBe("ct-straat");
  });

  it("post naar /api/vraag met adres en onderwerp, en toont de bevestiging", async () => {
    const fetchMock = vi.fn(async () => Response.json({ ok: true }));
    vi.stubGlobal("fetch", fetchMock);
    const form = toon();
    zet("ct-naam", "Jan Peeters");
    zet("ct-mail", "jan@voorbeeld.be");
    zet("ct-straat", "Kerkstraat");
    zet("ct-nr", "12");
    zet("ct-post", "2630");
    zet("ct-gemeente", "Aartselaar");
    zet("ct-bericht", "De chape is net gegoten.");
    fireEvent.submit(form);

    await waitFor(() => expect(screen.getByRole("status")).toBeInTheDocument());
    const [url, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe("/api/vraag");
    expect(JSON.parse(String(init.body))).toMatchObject({
      voornaam: "Jan",
      achternaam: "Peeters",
      email: "jan@voorbeeld.be",
      straat: "Kerkstraat",
      nummer: "12",
      postcode: "2630",
      gemeente: "Aartselaar",
      onderwerp: "droging_op_maat",
      bericht: "De chape is net gegoten.",
      website: "",
    });
  });
});

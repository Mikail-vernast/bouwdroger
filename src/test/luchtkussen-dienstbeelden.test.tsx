import { describe, it, expect } from "vitest";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import LuchtkussenDrogenPage from "@/pages/LuchtkussenDrogenPage";
import DienstVoorbeelden from "@/components/verhuur/DienstVoorbeelden";
import { vertaalPad } from "@/i18n/paden";

describe("luchtkussen en dienstbeelden in drie talen", () => {
  it.each([
    ["nl", "/waterschade-luchtkussen-techniek", "Luchtkussen drogen: alleen de natte zone, niet de hele kamer."],
    ["fr", "/fr/degats-des-eaux/sechage-sous-film", "Séchage sous film : uniquement la zone humide, pas toute la pièce."],
    ["en", "/en/water-damage/air-cushion-drying", "Air cushion drying: just the wet area, not the whole room."],
  ] as const)("rendert de volledige %s-pagina met lokale links en formulier", (taal, pad, titel) => {
    cleanup();
    const {container} = render(<HelmetProvider><MemoryRouter initialEntries={[pad]}><LuchtkussenDrogenPage /></MemoryRouter></HelmetProvider>);
    expect(container.querySelectorAll("h1")).toHaveLength(1);
    expect(container.querySelector("h1")?.textContent).toBe(titel);
    // Herofoto plus de twee opstellingen. De detailfoto bij de uitleg is sinds
    // 26-11-2026 een tekening: twee bijna gelijke foto's onder elkaar.
    expect([...container.querySelectorAll("main img")].filter((i) => i.getAttribute("src")?.includes("/luchtkussen-"))).toHaveLength(3);
    expect(container.querySelector(".lk-schema svg")).not.toBeNull();
    // De slotplaat met de bestelwagen is weg; het vraagformulier blijft.
    expect(container.querySelector(".manband")).toBeNull();
    expect(container.textContent).toContain(taal === "fr" ? "Pourquoi ne pas simplement" : taal === "en" ? "Why not simply" : "Waarom niet gewoon");
    expect(container.querySelector("form")).not.toBeNull();
    if(taal !== "nl") expect(vertaalPad("/waterschade-luchtkussen-techniek",taal)).toBe(pad);
    const toestel = [...container.querySelectorAll("main a")].find(a=>a.getAttribute("href")?.includes(taal === "fr" ? "adsorption" : taal === "en" ? "desiccant" : "adsorptiedroger"));
    expect(toestel).toBeDefined();
  });
  it("laat zes procesbeelden kiezen en wisselt afbeelding en bijschrift samen", () => {
    cleanup();
    const {container,getByRole}=render(<MemoryRouter><DienstVoorbeelden /></MemoryRouter>);
    const thumbs=container.querySelectorAll(".dv-thumbs button");
    expect(thumbs).toHaveLength(6);
    fireEvent.click(thumbs[3]);
    expect(container.querySelector(".dv-main img")?.getAttribute("src")).toContain("leefruimte");
    expect(container.querySelector("figcaption")?.textContent).toContain("renovatie");
    expect(thumbs[3].getAttribute("aria-pressed")).toBe("true");
    fireEvent.click(getByRole("button",{name:"Volgende foto"}));
    expect(container.querySelector(".dv-main img")?.getAttribute("src")).toContain("controle");
  });
});

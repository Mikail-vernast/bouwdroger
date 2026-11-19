/**
 * De toebehoren-fiches van `toebehoren.ts` in het Engels (Brits).
 *
 * Wordt gelezen door `toebehorenInTaal` in `toebehoren.fr.ts`, dat driewegs is.
 * Het prijsantwoord in de FAQ is een functie van het getoonde bedrag, net als
 * in het Frans: er staat nergens een getal in de tekst.
 *
 * Draait aan beide kanten, dus relatieve imports met `.js`.
 */

import type { ToebehorenTekst } from "./toebehoren.fr.js";

export const CONDENSPOMP_EN: ToebehorenTekst = {
  naam: "External condensate pump",
  type: "Accessory · automatic water drainage",
  badge: "Automatic water drainage",
  sum: "A construction dehumidifier takes moisture out of the air and collects it in a tray. The condensate pump makes sure you never have to empty that tray: it drains the water continuously to a washbasin, shower or floor drain, up to 3.90 m higher than the unit.",
  img: {
    "/vernast/condenspomp-product-v2.webp": [
      "White external condensate pump on a black collection tray, with power cable and clear drain hose on a concrete floor",
      "External condensate pump with collection tray and drain hose.",
    ],
    "/vernast/condenspomp-slangopstelling.webp": [
      "Example set-up: green condensate hose from a dehumidifier to a pump on the floor, with a thin drain hose to a drain that sits higher up",
      "Through a hose to the pump: the condensate runs from the dehumidifier into the collection tray and is then pumped away.",
    ],
    "/vernast/condenspomp-zonder-emmer.webp": [
      "Example set-up: condensate pump in the lower compartment of a dehumidifier, connected with a short green hose and without a separate bucket",
      "Without a separate bucket: the pump sits under the dehumidifier's condensate outlet, if the unit allows it.",
    ],
  },
  key: [
    ["Drainage", "90", "litres per hour"],
    ["Pumps up to", "3.90", "m high"],
    ["Consumption", "58", "watts"],
  ],
  aboutTitle: "When do you need a condensate pump?",
  about: [
    "Every dehumidifier that leaves our depot comes with a <strong>collection tray</strong> and a condensate hose, both free of charge. If there is a drain <strong>lower</strong> than the unit (a floor drain, a shower tray, the connection for the future washing machine), the water runs there by itself and you need nothing else.",
    "But often that drain does not exist, or it sits <strong>higher</strong> than the unit. The tray then fills up and the dehumidifier switches itself off as soon as it is full. On a building site that rarely happens at a convenient moment: on Monday morning you find a unit that has been standing still since Friday evening, and the air you had dried on Friday is damp again.",
    "That is what the condensate pump is for. It sits next to or under the dehumidifier, collects the condensate and pushes it away through a thin hose: <strong>up to 3.90 m higher</strong> than the unit, and over a good distance horizontally. A float switches it on as soon as the tray is full and off as soon as it is empty: you never have to look after it.",
  ],
  bullets: [
    [
      "Never empty a tank again",
      "Without a pump you empty the tray about twice a day on average, depending on how damp the room is. With a pump: not once.",
    ],
    [
      "Keeps running at night and at weekends",
      "A full tray stops the dehumidifier, and every hour it stands still the humidity rises again.",
    ],
    [
      "Pumps upwards",
      "Up to 3.90 m high, so also to a washbasin, a sink or a drain on the floor above.",
    ],
    [
      "Pure condensate",
      "What comes out is moisture from the air, not from the building fabric. It can simply go down the drain.",
    ],
  ],
  stappen: [
    ["Collect", "The condensate from the dehumidifier runs through the hose into the pump's tray."],
    ["The float switches on", "When the tray is full, a float starts the pump. No button, no timer."],
    ["Pump", "The pump pushes the water through a thin hose to the drain, up to 3.90 m higher than the unit."],
    ["Automatic stop", "When the tray is empty, the pump stops until the next time. Day and night."],
  ],
  specs: [
    ["Type", "External condensate pump with collection tray"],
    ["Operation", "automatic, by float switch"],
    ["Flow rate", "90 l/h at 3 m delivery head"],
    ["Max. delivery head", "3.90 m"],
    ["Supply voltage", "220 V / 50–60 Hz"],
    ["Power input", "58 W (55 W in operation)"],
    ["Non-return valve", "built in"],
    ["Suction hose", "Ø 25 mm (outside diameter)"],
    ["Drain hose", "Ø 5 mm (inside diameter), supplied"],
    ["Dimensions (l × w × h)", "280 × 125 × 140 mm"],
    ["Weight", "approx. 1.9 kg"],
    ["Application", "continuous condensate drainage for construction dehumidifiers"],
  ],
  faq: [
    [
      "Do I need a condensate pump?",
      "Only if there is no drain lower than the unit. If there is a floor drain, a shower tray or a washing machine connection nearby, the condensate runs there by itself through the hose supplied as standard. If not, or if the drain is higher, the pump makes the difference between a unit that keeps running and one that stops after half a day.",
    ],
    [
      "How many pumps do I need?",
      "One per dehumidifier. Each dehumidifier collects its own water, so each needs its own drainage. In the booking the pump is therefore set to one per unit as standard; you can change that number yourself.",
    ],
    [
      "What does it cost?",
      (prijs) =>
        `${prijs} per dehumidifier per day, on top of the hire of the unit. For a delivered package, our technician connects the pump on site; that is included in the price.`,
    ],
    [
      "Where does the water go?",
      "To whatever is nearby: a washbasin, a sink, a shower tray, a floor drain or the connection for the future washing machine. In a flat that is usually the shower; on a new-build site more often a floor drain. The hose is thin and runs easily along a skirting board or under a door.",
    ],
    [
      "Can the water go down the drain?",
      "Yes. It is pure condensate: moisture taken out of the air and condensed on the cold fins of the unit. It contains nothing that cannot go into an ordinary drain.",
    ],
    [
      "Will I hear it running?",
      "Barely. The pump does not run continuously but in short bursts of a few seconds, each time the tray is full. In between it is completely silent.",
    ],
    [
      "Can I connect the pump myself?",
      "Yes, and that is in fact the idea if you collect a unit yourself. Place the pump under or next to the dehumidifier, put the condensate hose in the tray, plug it into an ordinary socket and run the thin drain hose to your drain. There is nothing else to set.",
    ],
  ],
};

export const bestanden = ["dienst-levering-v2", "dienst-vochtmeting", "dienst-installatie", "pakket-leefruimte-v2", "pakket-twee-verdiepingen-v2", "pakket-condenspompen-v2", "dienst-controle", "dienst-ophaling"];
export const COPY = {
  nl: {
    kick: "Van levering tot ophaling", title: "Zo kan de droging er bij u uitzien.",
    intro: "Van de eerste vochtmeting tot de plaatsing van de toestellen: ontdek onze aanpak en enkele mogelijke opstellingen in een woning.",
    note: "AI-gegenereerde voorbeeldbeelden, geen klantrealisaties. De opstelling wordt afgestemd op uw kamers en de inhoud van uw pakket. De aantallen in deze beelden zijn illustratief; uw inbegrepen toestellen staan hierboven. Condenspompen zijn optioneel toebehoren.",
    labels: ["Levering", "Vochtmeting", "Installatie", "In de leefruimte", "Twee verdiepingen", "Met condenspompen", "Controle", "Ophaling"],
    captions: ["De technieker brengt de bouwdroger en ventilator met de bestelwagen tot bij uw werf.", "Een vochtmeting aan het pleisterwerk helpt de beginsituatie in kaart te brengen.", "De technieker plaatst de toestellen en richt de ventilator voor luchtcirculatie in de ruimte.", "Een bouwdroger en ventilator in een leefruimte tijdens een renovatie. De ruimte bepaalt waar ze worden geplaatst.", "Voorbeeld van vier bouwdrogers en vier ventilatoren verdeeld over twee verdiepingen. De kamerindeling bepaalt de plaatsing.", "Voorbeeld met twee bouwdrogers, twee ventilatoren en twee optionele condenspompen. Slangen voeren het water naar een afvoer.", "Controle van de opstelling en het toestel tijdens een droogtraject. De opvolging wordt afgestemd op uw aanvraag.", "Na afloop worden de toestellen en kabels klaargemaakt voor ophaling."],
    previous: "Vorige foto", next: "Volgende foto",
  },
  fr: {
    kick: "De la livraison à la reprise", title: "À quoi peut ressembler le séchage chez vous ?",
    intro: "Du premier relevé d’humidité à l’installation des appareils : découvrez notre approche et quelques exemples d’installations dans une habitation.",
    note: "Illustrations générées par IA, pas des réalisations chez des clients. L’installation dépend des pièces et du contenu de votre forfait. Les quantités montrées sont indicatives ; les appareils inclus figurent ci-dessus. Les pompes à condensats sont des accessoires en option.",
    labels: ["Livraison", "Mesure d’humidité", "Installation", "Pièce de vie", "Deux étages", "Pompes à condensats", "Contrôle", "Reprise"],
    captions: ["Le technicien livre le déshumidificateur et le ventilateur sur votre chantier en camionnette.", "Une mesure sur le plafonnage aide à établir l’état initial de l’humidité.", "Le technicien place les appareils et oriente le ventilateur pour faire circuler l’air.", "Un déshumidificateur et un ventilateur dans une pièce de vie en rénovation. Leur placement dépend de la pièce.", "Exemple de quatre déshumidificateurs et quatre ventilateurs répartis sur deux étages. L’agencement des pièces détermine leur position.", "Exemple avec deux déshumidificateurs, deux ventilateurs et deux pompes à condensats en option. Des tuyaux conduisent l’eau vers une évacuation.", "Contrôle de l’installation et de l’appareil pendant le séchage. Le suivi est adapté à votre demande.", "À la fin, les appareils et câbles sont préparés pour la reprise."],
    previous: "Photo précédente", next: "Photo suivante",
  },
  en: {
    kick: "From delivery to collection", title: "What drying could look like in your home.",
    intro: "From the first moisture check to setting up the equipment: explore our approach and some possible arrangements in a home.",
    note: "AI-generated example images, not customer projects. The setup depends on your rooms and package contents. Equipment numbers in these images are illustrative; your included equipment is listed above. Condensate pumps are optional accessories.",
    labels: ["Delivery", "Moisture check", "Installation", "Living area", "Two floors", "Condensate pumps", "Inspection", "Collection"],
    captions: ["The technician delivers the dehumidifier and fan to your site by van.", "A moisture check on the plaster helps establish the starting condition.", "The technician positions the equipment and angles the fan to circulate air through the room.", "A dehumidifier and fan in a living room during renovation. Placement depends on the room.", "Example of four dehumidifiers and four fans distributed across two floors. Room layout determines their placement.", "Example with two dehumidifiers, two fans and two optional condensate pumps. Hoses carry the water to a drain.", "Checking the setup and equipment during drying. Follow-up is tailored to your request.", "At the end, the equipment and cables are prepared for collection."],
    previous: "Previous photo", next: "Next photo",
  },
};

export const PROCES_INDEXEN = [0, 1, 2, 3, 6, 7];
export function dienstBeeldPad(i: number): string {
  const naam = bestanden[i];
  return "/vernast/" + naam.replace(/-v2$/, "") + "-voorbeeld" + (naam.endsWith("-v2") ? "-v2" : "") + ".webp";
}
export function procesBeelden(taal: "nl" | "fr" | "en") {
  return PROCES_INDEXEN.map(i => ({src: dienstBeeldPad(i), alt: COPY[taal].captions[i], label: COPY[taal].labels[i]}));
}

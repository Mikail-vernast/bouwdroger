/**
 * GEGENEREERD BESTAND — niet met de hand aanpassen.
 *
 * Geschreven door `scripts/fetch-tarieven.mjs` vóór elke build, uit de
 * gepubliceerde tarieven in het Vernast-portaal. Wat hier staat is de
 * laatst bekende versie en dient als terugval wanneer Vernast tijdens een
 * build niet bereikbaar is.
 *
 * Prijs aanpassen doe je in het portaal, tab Pakketten, en dan publiceren.
 */
export const TARIEVEN = {
  "cover": [
    {
      "k": "basis",
      "inc": [
        "Wettelijke aansprakelijkheid",
        "Technische storing gedekt",
        "Normale gebruiksslijtage"
      ],
      "off": [
        "Eigen risico € 1.000 bij schade",
        "Diefstal niet gedekt",
        "Geen vervangtoestel"
      ],
      "sub": "Zit standaard bij elke huur. U draagt zelf het eigen risico.",
      "name": "Standaard",
      "badge": "",
      "price": 0
    },
    {
      "k": "comfort",
      "inc": [
        "Eigen risico verlaagd tot € 250",
        "Diefstal gedekt",
        "Vervangtoestel binnen 24 u"
      ],
      "off": [
        "Bij schade betaalt u de eerste € 250"
      ],
      "sub": "Verlaagt uw eigen risico van € 1.000 naar € 250 en dekt diefstal.",
      "name": "Eigen risico € 250",
      "badge": "Meest gekozen",
      "price": 29
    },
    {
      "k": "zorgeloos",
      "inc": [
        "Géén eigen risico bij schade",
        "Diefstal volledig gedekt",
        "Defect toestel direct vervangen",
        "Vervangtoestel binnen 12 u",
        "Voorrang bij planning en verlenging"
      ],
      "off": [],
      "sub": "Volledig zonder eigen risico — bij schade, defect én diefstal.",
      "name": "Geen eigen risico",
      "badge": "",
      "price": 59
    }
  ],
  "fixed": [
    {
      "id": "chape-40-5",
      "sqm": 40,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786349096604-chape-drogen-1.jpg",
      "title": "Ruimte tot 40 m² — chape 5 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786349096604-chape-drogen-1.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786349416392-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786349416702-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786349417220-ttv-4500.png"
      ],
      "category": "Chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351014989-chape-verwarming-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "chape",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 1,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 1,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Ruimte tot 40 m²",
      "shortTitle": "Chape 40 m²",
      "description": "Chape drogen tot een veilige restvochtigheid, klaar voor vloerafwerking.",
      "pricePerDay": 12.35,
      "rentalWeeks": 2,
      "thicknessCm": 5,
      "pricePerTwoWeeks": 172.9
    },
    {
      "id": "chape-40-6",
      "sqm": 40,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351044154-chape-drogen-1.jpg",
      "title": "Ruimte tot 40 m² — chape 6 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351044154-chape-drogen-1.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351048262-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351048502-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351048711-ttv-4500.png"
      ],
      "category": "Chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351014989-chape-verwarming-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "chape",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 1,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 1,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Ruimte tot 40 m²",
      "shortTitle": "Chape 40 m²",
      "description": "Chape drogen tot een veilige restvochtigheid, klaar voor vloerafwerking.",
      "pricePerDay": 12.35,
      "rentalWeeks": 3,
      "thicknessCm": 6,
      "pricePerTwoWeeks": 172.9
    },
    {
      "id": "chape-40-7",
      "sqm": 40,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351088871-chape-drogen-1.jpg",
      "title": "Ruimte tot 40 m² — chape 7 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351088871-chape-drogen-1.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351091629-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351091878-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351092114-ttv-4500.png"
      ],
      "category": "Chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786109558905-pleisterdrogen-11.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "chape",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 1,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 1,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Ruimte tot 40 m²",
      "shortTitle": "Chape 40 m²",
      "description": "Chape drogen tot een veilige restvochtigheid, klaar voor vloerafwerking.",
      "pricePerDay": 12.35,
      "rentalWeeks": 4,
      "thicknessCm": 7,
      "pricePerTwoWeeks": 172.9
    },
    {
      "id": "pleister-40-1",
      "sqm": 40,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352908234-pleisterdrogen-1-1.jpg",
      "title": "Ruimte tot 40 m² — pleisterdikte 1 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352908234-pleisterdrogen-1-1.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352913901-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352914255-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352914563-ttv-4500.png"
      ],
      "category": "Pleisterwerk drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352944428-pleisterdrogen-10-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "pleister",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 1,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 1,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Ruimte tot 40 m²",
      "shortTitle": "Pleisterwerk 40 m²",
      "description": "Pleisterwerk drogen zodat schilderwerk en afwerking veilig kunnen starten.",
      "pricePerDay": 12.35,
      "rentalWeeks": 2,
      "thicknessCm": 1,
      "pricePerTwoWeeks": 172.9
    },
    {
      "id": "pleister-40-2",
      "sqm": 40,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352967454-pleisterdrogen-1-1.jpg",
      "title": "Ruimte tot 40 m² — pleisterdikte 2 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352967454-pleisterdrogen-1-1.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352970072-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352970303-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352970524-ttv-4500.png"
      ],
      "category": "Pleisterwerk drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352982398-pleisterdrogen-10-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "pleister",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 1,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 1,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Ruimte tot 40 m²",
      "shortTitle": "Pleisterwerk 40 m²",
      "description": "Pleisterwerk drogen zodat schilderwerk en afwerking veilig kunnen starten.",
      "pricePerDay": 12.35,
      "rentalWeeks": 3,
      "thicknessCm": 2,
      "pricePerTwoWeeks": 172.9
    },
    {
      "id": "pleister-40-3",
      "sqm": 40,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353005039-pleisterdrogen-1-1.jpg",
      "title": "Ruimte tot 40 m² — pleisterdikte 3 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353005039-pleisterdrogen-1-1.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353006992-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353007252-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353007492-ttv-4500.png"
      ],
      "category": "Pleisterwerk drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353014185-pleisterdrogen-10-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "pleister",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 1,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 1,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Ruimte tot 40 m²",
      "shortTitle": "Pleisterwerk 40 m²",
      "description": "Pleisterwerk drogen zodat schilderwerk en afwerking veilig kunnen starten.",
      "pricePerDay": 12.35,
      "rentalWeeks": 4,
      "thicknessCm": 3,
      "pricePerTwoWeeks": 172.9
    },
    {
      "id": "beide-40",
      "sqm": 40,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354333465-chape-pleister-drogen-1.jpg",
      "title": "Ruimte tot 40 m² — Pleisterwerk + chape drogen",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354333465-chape-pleister-drogen-1.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354337010-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354337286-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354337501-ttv-4500.png"
      ],
      "category": "Pleisterwerk + chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354357804-tekengebied-1-kopie-27.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "beide",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 1,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 1,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Ruimte tot 40 m²",
      "shortTitle": "Pleisterwerk + chape 40 m²",
      "description": "Muren en vloer in één keer drogen — pleisterwerk en chape samen.",
      "pricePerDay": 12.35,
      "rentalWeeks": 4,
      "thicknessCm": null,
      "pricePerTwoWeeks": 172.9
    },
    {
      "id": "waterschade-40",
      "sqm": 40,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355030724-chape-drogen-1-1.jpg",
      "title": "Ruimte tot 40 m² — Waterschade drogen",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355030724-chape-drogen-1-1.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355032899-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355033103-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355033304-ttv-4500.png"
      ],
      "category": "Waterschade drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355042446-pakketen-extra-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "waterschade",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 1,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 1,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Ruimte tot 40 m²",
      "shortTitle": "Waterschade 40 m²",
      "description": "Absorptiedroging na waterschade, met voorrang op de planning.",
      "pricePerDay": 12.35,
      "rentalWeeks": 4,
      "thicknessCm": null,
      "pricePerTwoWeeks": 172.9
    },
    {
      "id": "chape-60-5",
      "sqm": 60,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351142535-chape-drogen-2.jpg",
      "title": "Gebouw tot 60 m² — chape 5 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351142535-chape-drogen-2.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351147398-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351147836-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351148059-ttv-4500.png"
      ],
      "category": "Chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351253019-chape-verwarming-2.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "chape",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 2,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 1,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 60 m²",
      "shortTitle": "Chape 60 m²",
      "description": "Chape drogen tot een veilige restvochtigheid, klaar voor vloerafwerking.",
      "pricePerDay": 16.15,
      "rentalWeeks": 2,
      "thicknessCm": 5,
      "pricePerTwoWeeks": 226.1
    },
    {
      "id": "chape-60-6",
      "sqm": 60,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351179693-chape-drogen-2.jpg",
      "title": "Gebouw tot 60 m² — chape 6 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351179693-chape-drogen-2.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351182183-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351182400-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351182601-ttv-4500.png"
      ],
      "category": "Chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351219966-chape-verwarming-2.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "chape",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 2,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 1,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 60 m²",
      "shortTitle": "Chape 60 m²",
      "description": "Chape drogen tot een veilige restvochtigheid, klaar voor vloerafwerking.",
      "pricePerDay": 16.15,
      "rentalWeeks": 3,
      "thicknessCm": 6,
      "pricePerTwoWeeks": 226.1
    },
    {
      "id": "chape-60-7",
      "sqm": 60,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351272515-chape-drogen-2.jpg",
      "title": "Gebouw tot 60 m² — chape 7 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351272515-chape-drogen-2.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351276016-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351276260-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351276461-ttv-4500.png"
      ],
      "category": "Chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351289163-chape-verwarming-2.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "chape",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 2,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 1,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 60 m²",
      "shortTitle": "Chape 60 m²",
      "description": "Chape drogen tot een veilige restvochtigheid, klaar voor vloerafwerking.",
      "pricePerDay": 22.1,
      "rentalWeeks": 4,
      "thicknessCm": 7,
      "pricePerTwoWeeks": 309.4
    },
    {
      "id": "pleister-60-1",
      "sqm": 60,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353051008-pleisterdrogen-2.jpg",
      "title": "Gebouw tot 60 m² — pleisterdikte 1 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353051008-pleisterdrogen-2.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353053041-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353053288-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353053505-ttv-4500.png"
      ],
      "category": "Pleisterwerk drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353060371-pleisterdrogen-11-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "pleister",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 2,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 1,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 60 m²",
      "shortTitle": "Pleisterwerk 60 m²",
      "description": "Pleisterwerk drogen zodat schilderwerk en afwerking veilig kunnen starten.",
      "pricePerDay": 16.15,
      "rentalWeeks": 2,
      "thicknessCm": 1,
      "pricePerTwoWeeks": 226.1
    },
    {
      "id": "pleister-60-2",
      "sqm": 60,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353094804-pleisterdrogen-2.jpg",
      "title": "Gebouw tot 60 m² — pleisterdikte 2 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353094804-pleisterdrogen-2.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353097794-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353098009-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353098209-ttv-4500.png"
      ],
      "category": "Pleisterwerk drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353107373-pleisterdrogen-11-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "pleister",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 2,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 1,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 60 m²",
      "shortTitle": "Pleisterwerk 60 m²",
      "description": "Pleisterwerk drogen zodat schilderwerk en afwerking veilig kunnen starten.",
      "pricePerDay": 16.15,
      "rentalWeeks": 3,
      "thicknessCm": 2,
      "pricePerTwoWeeks": 226.1
    },
    {
      "id": "pleister-60-3",
      "sqm": 60,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353179807-pleisterdrogen-2.jpg",
      "title": "Gebouw tot 60 m² — pleisterdikte 3 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353179807-pleisterdrogen-2.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353181805-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353182076-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353182316-ttv-4500.png"
      ],
      "category": "Pleisterwerk drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353189154-pleisterdrogen-11-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "pleister",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 2,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 1,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 60 m²",
      "shortTitle": "Pleisterwerk 60 m²",
      "description": "Pleisterwerk drogen zodat schilderwerk en afwerking veilig kunnen starten.",
      "pricePerDay": 22.1,
      "rentalWeeks": 4,
      "thicknessCm": 3,
      "pricePerTwoWeeks": 309.4
    },
    {
      "id": "beide-60",
      "sqm": 60,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354567453-chape-pleister-drogen-2.jpg",
      "title": "Gebouw tot 60 m² — Pleisterwerk + chape drogen",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354567453-chape-pleister-drogen-2.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354398584-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354398792-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354399082-ttv-4500.png"
      ],
      "category": "Pleisterwerk + chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354604682-tekengebied-1-kopie-28.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "beide",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 2,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 1,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 60 m²",
      "shortTitle": "Pleisterwerk + chape 60 m²",
      "description": "Muren en vloer in één keer drogen — pleisterwerk en chape samen.",
      "pricePerDay": 22.1,
      "rentalWeeks": 4,
      "thicknessCm": null,
      "pricePerTwoWeeks": 309.4
    },
    {
      "id": "waterschade-60",
      "sqm": 60,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355090327-pakketen-extra-5.jpg",
      "title": "Gebouw tot 60 m² — Waterschade drogen",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355090327-pakketen-extra-5.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355092388-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355092622-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355092837-ttv-4500.png"
      ],
      "category": "Waterschade drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355100213-pakketen-extra-13.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "waterschade",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 2,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 1,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 60 m²",
      "shortTitle": "Waterschade 60 m²",
      "description": "Absorptiedroging na waterschade, met voorrang op de planning.",
      "pricePerDay": 22.1,
      "rentalWeeks": 4,
      "thicknessCm": null,
      "pricePerTwoWeeks": 309.4
    },
    {
      "id": "chape-100-5",
      "sqm": 100,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351368982-chape-drogen-3.jpg",
      "title": "Gebouw tot 100 m² — chape 5 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351368982-chape-drogen-3.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351372451-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351372651-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351373138-ttv-4500.png"
      ],
      "category": "Chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351399722-chape-verwarming-3.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "chape",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 3,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 1,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 100 m²",
      "shortTitle": "Chape 100 m²",
      "description": "Chape drogen tot een veilige restvochtigheid, klaar voor vloerafwerking.",
      "pricePerDay": 27.2,
      "rentalWeeks": 2,
      "thicknessCm": 5,
      "pricePerTwoWeeks": 380.8
    },
    {
      "id": "chape-100-6",
      "sqm": 100,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351424325-chape-drogen-3.jpg",
      "title": "Gebouw tot 100 m² — chape 6 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351424325-chape-drogen-3.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351427181-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351427398-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351427597-ttv-4500.png"
      ],
      "category": "Chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351440746-chape-verwarming-3.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "chape",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 3,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 1,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 100 m²",
      "shortTitle": "Chape 100 m²",
      "description": "Chape drogen tot een veilige restvochtigheid, klaar voor vloerafwerking.",
      "pricePerDay": 27.2,
      "rentalWeeks": 3,
      "thicknessCm": 6,
      "pricePerTwoWeeks": 380.8
    },
    {
      "id": "chape-100-7",
      "sqm": 100,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351489823-chape-drogen-3.jpg",
      "title": "Gebouw tot 100 m² — chape 7 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351489823-chape-drogen-3.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351495030-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351495222-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351495464-ttv-4500.png"
      ],
      "category": "Chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351509166-chape-verwarming-3.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "chape",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 3,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 1,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 100 m²",
      "shortTitle": "Chape 100 m²",
      "description": "Chape drogen tot een veilige restvochtigheid, klaar voor vloerafwerking.",
      "pricePerDay": 27.2,
      "rentalWeeks": 4,
      "thicknessCm": 7,
      "pricePerTwoWeeks": 380.8
    },
    {
      "id": "pleister-100-1",
      "sqm": 100,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353235234-pleisterdrogen-3-1.jpg",
      "title": "Gebouw tot 100 m² — pleisterdikte 1 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353235234-pleisterdrogen-3-1.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353238377-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353238697-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353239041-ttv-4500.png"
      ],
      "category": "Pleisterwerk drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353276234-pleisterdrogen-12-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "pleister",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 3,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 1,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 100 m²",
      "shortTitle": "Pleisterwerk 100 m²",
      "description": "Pleisterwerk drogen zodat schilderwerk en afwerking veilig kunnen starten.",
      "pricePerDay": 27.2,
      "rentalWeeks": 2,
      "thicknessCm": 1,
      "pricePerTwoWeeks": 380.8
    },
    {
      "id": "pleister-100-2",
      "sqm": 100,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353312843-pleisterdrogen-3-1.jpg",
      "title": "Gebouw tot 100 m² — pleisterdikte 2 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353312843-pleisterdrogen-3-1.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353315553-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353316366-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353316601-ttv-4500.png"
      ],
      "category": "Pleisterwerk drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353324565-pleisterdrogen-12-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "pleister",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 3,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 1,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 100 m²",
      "shortTitle": "Pleisterwerk 100 m²",
      "description": "Pleisterwerk drogen zodat schilderwerk en afwerking veilig kunnen starten.",
      "pricePerDay": 27.2,
      "rentalWeeks": 3,
      "thicknessCm": 2,
      "pricePerTwoWeeks": 380.8
    },
    {
      "id": "pleister-100-3",
      "sqm": 100,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353345111-pleisterdrogen-3-1.jpg",
      "title": "Gebouw tot 100 m² — pleisterdikte 3 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353345111-pleisterdrogen-3-1.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353347049-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353347286-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353347506-ttv-4500.png"
      ],
      "category": "Pleisterwerk drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353353444-pleisterdrogen-12-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "pleister",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 3,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 1,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 100 m²",
      "shortTitle": "Pleisterwerk 100 m²",
      "description": "Pleisterwerk drogen zodat schilderwerk en afwerking veilig kunnen starten.",
      "pricePerDay": 27.2,
      "rentalWeeks": 4,
      "thicknessCm": 3,
      "pricePerTwoWeeks": 380.8
    },
    {
      "id": "beide-100",
      "sqm": 100,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354641528-chape-pleister-drogen-3.jpg",
      "title": "Gebouw tot 100 m² — Pleisterwerk + chape drogen",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354641528-chape-pleister-drogen-3.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354643619-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354643820-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354644281-ttv-4500.png"
      ],
      "category": "Pleisterwerk + chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354650085-tekengebied-1-kopie-29-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "beide",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 3,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 1,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 100 m²",
      "shortTitle": "Pleisterwerk + chape 100 m²",
      "description": "Muren en vloer in één keer drogen — pleisterwerk en chape samen.",
      "pricePerDay": 27.2,
      "rentalWeeks": 4,
      "thicknessCm": null,
      "pricePerTwoWeeks": 380.8
    },
    {
      "id": "waterschade-100",
      "sqm": 100,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355170690-pleisterdrogen-3-2.jpg",
      "title": "Gebouw tot 100 m² — Waterschade drogen",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355170690-pleisterdrogen-3-2.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355174268-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355174614-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355174932-ttv-4500.png"
      ],
      "category": "Waterschade drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355184494-pakketen-extra-4.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "waterschade",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 3,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 100 m²",
      "shortTitle": "Waterschade 100 m²",
      "description": "Absorptiedroging na waterschade, met voorrang op de planning.",
      "pricePerDay": 27.2,
      "rentalWeeks": 4,
      "thicknessCm": null,
      "pricePerTwoWeeks": 380.8
    },
    {
      "id": "chape-140-5",
      "sqm": 140,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351567990-chape-drogen-3.jpg",
      "title": "Gebouw tot 140 m² — chape 5 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351567990-chape-drogen-3.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351570344-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351570519-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351571222-ttv-4500.png"
      ],
      "category": "Chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351580582-chape-verwarming-3.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "chape",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 3,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 140 m²",
      "shortTitle": "Chape 140 m²",
      "description": "Chape drogen tot een veilige restvochtigheid, klaar voor vloerafwerking.",
      "pricePerDay": 27.2,
      "rentalWeeks": 2,
      "thicknessCm": 5,
      "pricePerTwoWeeks": 380.8
    },
    {
      "id": "chape-140-6",
      "sqm": 140,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351615382-chape-drogen-3.jpg",
      "title": "Gebouw tot 140 m² — chape 6 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351615382-chape-drogen-3.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351618150-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351618359-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351618580-ttv-4500.png"
      ],
      "category": "Chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351627142-chape-verwarming-3.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "chape",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 3,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 140 m²",
      "shortTitle": "Chape 140 m²",
      "description": "Chape drogen tot een veilige restvochtigheid, klaar voor vloerafwerking.",
      "pricePerDay": 32.25,
      "rentalWeeks": 3,
      "thicknessCm": 6,
      "pricePerTwoWeeks": 451.5
    },
    {
      "id": "chape-140-7",
      "sqm": 140,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351660411-chape-drogen-3.jpg",
      "title": "Gebouw tot 140 m² — chape 7 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351660411-chape-drogen-3.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351664801-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351665018-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351665411-ttv-4500.png"
      ],
      "category": "Chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351672771-chape-verwarming-3.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "chape",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 3,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 140 m²",
      "shortTitle": "Chape 140 m²",
      "description": "Chape drogen tot een veilige restvochtigheid, klaar voor vloerafwerking.",
      "pricePerDay": 32.25,
      "rentalWeeks": 4,
      "thicknessCm": 7,
      "pricePerTwoWeeks": 451.5
    },
    {
      "id": "pleister-140-1",
      "sqm": 140,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353392122-pleisterdrogen-3-1.jpg",
      "title": "Gebouw tot 140 m² — pleisterdikte 1 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353392122-pleisterdrogen-3-1.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353398772-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353399002-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353399299-ttv-4500.png"
      ],
      "category": "Pleisterwerk drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353405924-pleisterdrogen-12-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "pleister",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 3,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 140 m²",
      "shortTitle": "Pleisterwerk 140 m²",
      "description": "Pleisterwerk drogen zodat schilderwerk en afwerking veilig kunnen starten.",
      "pricePerDay": 27.2,
      "rentalWeeks": 2,
      "thicknessCm": 1,
      "pricePerTwoWeeks": 380.8
    },
    {
      "id": "pleister-140-2",
      "sqm": 140,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353501501-pleisterdrogen-4.jpg",
      "title": "Gebouw tot 140 m² — pleisterdikte 2 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353501501-pleisterdrogen-4.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353505627-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353505878-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353506117-ttv-4500.png"
      ],
      "category": "Pleisterwerk drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353459299-pleisterdrogen-13-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "pleister",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 3,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 140 m²",
      "shortTitle": "Pleisterwerk 140 m²",
      "description": "Pleisterwerk drogen zodat schilderwerk en afwerking veilig kunnen starten.",
      "pricePerDay": 32.25,
      "rentalWeeks": 3,
      "thicknessCm": 2,
      "pricePerTwoWeeks": 451.5
    },
    {
      "id": "pleister-140-3",
      "sqm": 140,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353532303-pleisterdrogen-13-1.jpg",
      "title": "Gebouw tot 140 m² — pleisterdikte 3 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353532303-pleisterdrogen-13-1.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353534986-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353535196-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353535424-ttv-4500.png"
      ],
      "category": "Pleisterwerk drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353547003-pleisterdrogen-4.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "pleister",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 3,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 140 m²",
      "shortTitle": "Pleisterwerk 140 m²",
      "description": "Pleisterwerk drogen zodat schilderwerk en afwerking veilig kunnen starten.",
      "pricePerDay": 32.25,
      "rentalWeeks": 4,
      "thicknessCm": 3,
      "pricePerTwoWeeks": 451.5
    },
    {
      "id": "beide-140",
      "sqm": 140,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354676242-chape-pleister-drogen-4.jpg",
      "title": "Gebouw tot 140 m² — Pleisterwerk + chape drogen",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354676242-chape-pleister-drogen-4.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354678284-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354678503-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354678689-ttv-4500.png"
      ],
      "category": "Pleisterwerk + chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354697763-tekengebied-1-kopie-30.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "beide",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 3,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 140 m²",
      "shortTitle": "Pleisterwerk + chape 140 m²",
      "description": "Muren en vloer in één keer drogen — pleisterwerk en chape samen.",
      "pricePerDay": 32.25,
      "rentalWeeks": 4,
      "thicknessCm": null,
      "pricePerTwoWeeks": 451.5
    },
    {
      "id": "waterschade-140",
      "sqm": 140,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355222460-pleisterdrogen-4-1.jpg",
      "title": "Gebouw tot 140 m² — Waterschade drogen",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355222460-pleisterdrogen-4-1.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355224649-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355224848-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355225651-ttv-4500.png"
      ],
      "category": "Waterschade drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355245748-tekengebied-1-kopie-30-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "waterschade",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 3,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 1,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 140 m²",
      "shortTitle": "Waterschade 140 m²",
      "description": "Absorptiedroging na waterschade, met voorrang op de planning.",
      "pricePerDay": 32.25,
      "rentalWeeks": 4,
      "thicknessCm": null,
      "pricePerTwoWeeks": 451.5
    },
    {
      "id": "chape-180-5",
      "sqm": 180,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351789293-chape-drogen-5.jpg",
      "title": "Gebouw tot 180 m² — chape 5 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351789293-chape-drogen-5.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351794090-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351794291-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351794505-ttv-4500.png"
      ],
      "category": "Chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351810309-chape-verwarming-5.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "chape",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 4,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 180 m²",
      "shortTitle": "Chape 180 m²",
      "description": "Chape drogen tot een veilige restvochtigheid, klaar voor vloerafwerking.",
      "pricePerDay": 35.25,
      "rentalWeeks": 2,
      "thicknessCm": 5,
      "pricePerTwoWeeks": 493.5
    },
    {
      "id": "chape-180-6",
      "sqm": 180,
      "image": "/products/chape-drogen-5.jpg",
      "title": "Gebouw tot 180 m² — chape 6 cm",
      "images": [
        "/products/chape-drogen-5.jpg"
      ],
      "category": "Chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351843192-chape-verwarming-5.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "chape",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 4,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 180 m²",
      "shortTitle": "Chape 180 m²",
      "description": "Chape drogen tot een veilige restvochtigheid, klaar voor vloerafwerking.",
      "pricePerDay": 42,
      "rentalWeeks": 3,
      "thicknessCm": 6,
      "pricePerTwoWeeks": 588
    },
    {
      "id": "chape-180-7",
      "sqm": 180,
      "image": "/products/chape-drogen-5.jpg",
      "title": "Gebouw tot 180 m² — chape 7 cm",
      "images": [
        "/products/chape-drogen-5.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351862667-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351862913-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351863245-ttv-4500.png"
      ],
      "category": "Chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786351874460-chape-verwarming-5.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "chape",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 4,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 180 m²",
      "shortTitle": "Chape 180 m²",
      "description": "Chape drogen tot een veilige restvochtigheid, klaar voor vloerafwerking.",
      "pricePerDay": 51.1,
      "rentalWeeks": 4,
      "thicknessCm": 7,
      "pricePerTwoWeeks": 715.4
    },
    {
      "id": "pleister-180-1",
      "sqm": 180,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353658589-pleisterdrogen-5.jpg",
      "title": "Gebouw tot 180 m² — pleisterdikte 1 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353658589-pleisterdrogen-5.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353663966-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353664187-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353664534-ttv-4500.png"
      ],
      "category": "Pleisterwerk drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353682399-pleisterdrogen-14-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "pleister",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 4,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 180 m²",
      "shortTitle": "Pleisterwerk 180 m²",
      "description": "Pleisterwerk drogen zodat schilderwerk en afwerking veilig kunnen starten.",
      "pricePerDay": 35.25,
      "rentalWeeks": 2,
      "thicknessCm": 1,
      "pricePerTwoWeeks": 493.5
    },
    {
      "id": "pleister-180-2",
      "sqm": 180,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353705984-pleisterdrogen-5.jpg",
      "title": "Gebouw tot 180 m² — pleisterdikte 2 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353705984-pleisterdrogen-5.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353708010-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353708222-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353708499-ttv-4500.png"
      ],
      "category": "Pleisterwerk drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353714723-pleisterdrogen-14-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "pleister",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 4,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 180 m²",
      "shortTitle": "Pleisterwerk 180 m²",
      "description": "Pleisterwerk drogen zodat schilderwerk en afwerking veilig kunnen starten.",
      "pricePerDay": 42,
      "rentalWeeks": 3,
      "thicknessCm": 2,
      "pricePerTwoWeeks": 588
    },
    {
      "id": "pleister-180-3",
      "sqm": 180,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353743434-pleisterdrogen-5.jpg",
      "title": "Gebouw tot 180 m² — pleisterdikte 3 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353743434-pleisterdrogen-5.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353745820-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353746040-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353746299-ttv-4500.png"
      ],
      "category": "Pleisterwerk drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353756448-pleisterdrogen-14-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "pleister",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 4,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 180 m²",
      "shortTitle": "Pleisterwerk 180 m²",
      "description": "Pleisterwerk drogen zodat schilderwerk en afwerking veilig kunnen starten.",
      "pricePerDay": 51.1,
      "rentalWeeks": 4,
      "thicknessCm": 3,
      "pricePerTwoWeeks": 715.4
    },
    {
      "id": "beide-180",
      "sqm": 180,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354804299-chape-pleister-drogen-5.jpg",
      "title": "Gebouw tot 180 m² — Pleisterwerk + chape drogen",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354804299-chape-pleister-drogen-5.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354747181-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354747443-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354747676-ttv-4500.png"
      ],
      "category": "Pleisterwerk + chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354771615-tekengebied-1-kopie-31.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "beide",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 4,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 180 m²",
      "shortTitle": "Pleisterwerk + chape 180 m²",
      "description": "Muren en vloer in één keer drogen — pleisterwerk en chape samen.",
      "pricePerDay": 51.1,
      "rentalWeeks": 4,
      "thicknessCm": null,
      "pricePerTwoWeeks": 715.4
    },
    {
      "id": "waterschade-180",
      "sqm": 180,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355310888-pleisterdrogen-6.jpg",
      "title": "Gebouw tot 180 m² — Waterschade drogen",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355310888-pleisterdrogen-6.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355312720-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355312928-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355313107-ttv-4500.png"
      ],
      "category": "Waterschade drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355274521-tekengebied-1-kopie-32-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "waterschade",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 4,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 180 m²",
      "shortTitle": "Waterschade 180 m²",
      "description": "Absorptiedroging na waterschade, met voorrang op de planning.",
      "pricePerDay": 51.1,
      "rentalWeeks": 4,
      "thicknessCm": null,
      "pricePerTwoWeeks": 715.4
    },
    {
      "id": "chape-220-5",
      "sqm": 220,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352068347-chape-drogen-7.jpg",
      "title": "Gebouw tot 220 m² — chape 5 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352068347-chape-drogen-7.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352071568-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352071786-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352072342-ttv-4500.png"
      ],
      "category": "Chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352106971-chape-verwarming-7.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "chape",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 4,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 220 m²",
      "shortTitle": "Chape 220 m²",
      "description": "Chape drogen tot een veilige restvochtigheid, klaar voor vloerafwerking.",
      "pricePerDay": 42,
      "rentalWeeks": 2,
      "thicknessCm": 5,
      "pricePerTwoWeeks": 588
    },
    {
      "id": "chape-220-6",
      "sqm": 220,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352144004-chape-drogen-7.jpg",
      "title": "Gebouw tot 220 m² — chape 6 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352144004-chape-drogen-7.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352146233-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352146450-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352146726-ttv-4500.png"
      ],
      "category": "Chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352157288-chape-verwarming-7.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "chape",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 4,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 220 m²",
      "shortTitle": "Chape 220 m²",
      "description": "Chape drogen tot een veilige restvochtigheid, klaar voor vloerafwerking.",
      "pricePerDay": 42,
      "rentalWeeks": 3,
      "thicknessCm": 6,
      "pricePerTwoWeeks": 588
    },
    {
      "id": "chape-220-7",
      "sqm": 220,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352187647-chape-drogen-7.jpg",
      "title": "Gebouw tot 220 m² — chape 7 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352187647-chape-drogen-7.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352190116-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352190376-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352190618-ttv-4500.png"
      ],
      "category": "Chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352198832-chape-verwarming-7.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "chape",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 4,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 220 m²",
      "shortTitle": "Chape 220 m²",
      "description": "Chape drogen tot een veilige restvochtigheid, klaar voor vloerafwerking.",
      "pricePerDay": 51.1,
      "rentalWeeks": 4,
      "thicknessCm": 7,
      "pricePerTwoWeeks": 715.4
    },
    {
      "id": "pleister-220-1",
      "sqm": 220,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353794433-pleisterdrogen-5.jpg",
      "title": "Gebouw tot 220 m² — pleisterdikte 1 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353794433-pleisterdrogen-5.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353797111-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353797525-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353798004-ttv-4500.png"
      ],
      "category": "Pleisterwerk drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353804080-pleisterdrogen-14-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "pleister",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 4,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 220 m²",
      "shortTitle": "Pleisterwerk 220 m²",
      "description": "Pleisterwerk drogen zodat schilderwerk en afwerking veilig kunnen starten.",
      "pricePerDay": 42,
      "rentalWeeks": 2,
      "thicknessCm": 1,
      "pricePerTwoWeeks": 588
    },
    {
      "id": "pleister-220-2",
      "sqm": 220,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353826172-pleisterdrogen-5.jpg",
      "title": "Gebouw tot 220 m² — pleisterdikte 2 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353826172-pleisterdrogen-5.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353829117-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353829398-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353829600-ttv-4500.png"
      ],
      "category": "Pleisterwerk drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353837410-pleisterdrogen-14-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "pleister",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 4,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 220 m²",
      "shortTitle": "Pleisterwerk 220 m²",
      "description": "Pleisterwerk drogen zodat schilderwerk en afwerking veilig kunnen starten.",
      "pricePerDay": 42,
      "rentalWeeks": 3,
      "thicknessCm": 2,
      "pricePerTwoWeeks": 588
    },
    {
      "id": "pleister-220-3",
      "sqm": 220,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353860399-pleisterdrogen-5.jpg",
      "title": "Gebouw tot 220 m² — pleisterdikte 3 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353860399-pleisterdrogen-5.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353864462-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353865030-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353865289-ttv-4500.png"
      ],
      "category": "Pleisterwerk drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353871996-pleisterdrogen-14-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "pleister",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 4,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 220 m²",
      "shortTitle": "Pleisterwerk 220 m²",
      "description": "Pleisterwerk drogen zodat schilderwerk en afwerking veilig kunnen starten.",
      "pricePerDay": 51.1,
      "rentalWeeks": 4,
      "thicknessCm": 3,
      "pricePerTwoWeeks": 715.4
    },
    {
      "id": "beide-220",
      "sqm": 220,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354835670-chape-pleister-drogen-6.jpg",
      "title": "Gebouw tot 220 m² — Pleisterwerk + chape drogen",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354835670-chape-pleister-drogen-6.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354838600-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354838832-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354839364-ttv-4500.png"
      ],
      "category": "Pleisterwerk + chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354858863-tekengebied-1-kopie-32.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "beide",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 4,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 220 m²",
      "shortTitle": "Pleisterwerk + chape 220 m²",
      "description": "Muren en vloer in één keer drogen — pleisterwerk en chape samen.",
      "pricePerDay": 51.1,
      "rentalWeeks": 4,
      "thicknessCm": null,
      "pricePerTwoWeeks": 715.4
    },
    {
      "id": "waterschade-220",
      "sqm": 220,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355339051-pleisterdrogen-6.jpg",
      "title": "Gebouw tot 220 m² — Waterschade drogen",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355339051-pleisterdrogen-6.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355340831-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355341055-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355341300-ttv-4500.png"
      ],
      "category": "Waterschade drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355353537-tekengebied-1-kopie-32-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "waterschade",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 4,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 220 m²",
      "shortTitle": "Waterschade 220 m²",
      "description": "Absorptiedroging na waterschade, met voorrang op de planning.",
      "pricePerDay": 51.1,
      "rentalWeeks": 4,
      "thicknessCm": null,
      "pricePerTwoWeeks": 715.4
    },
    {
      "id": "chape-260-5",
      "sqm": 260,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352308280-chape-drogen-8.jpg",
      "title": "Gebouw tot 260 m² — chape 5 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352308280-chape-drogen-8.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352223293-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352223652-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352223918-ttv-4500.png"
      ],
      "category": "Chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352346040-chape-verwarming-9.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "chape",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 4,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 3,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 260 m²",
      "shortTitle": "Chape 260 m²",
      "description": "Chape drogen tot een veilige restvochtigheid, klaar voor vloerafwerking.",
      "pricePerDay": 51.1,
      "rentalWeeks": 2,
      "thicknessCm": 5,
      "pricePerTwoWeeks": 715.4
    },
    {
      "id": "chape-260-6",
      "sqm": 260,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352374608-chape-drogen-8.jpg",
      "title": "Gebouw tot 260 m² — chape 6 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352374608-chape-drogen-8.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352376842-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352377388-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352377645-ttv-4500.png"
      ],
      "category": "Chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352385636-chape-verwarming-9.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "chape",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 4,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 3,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 260 m²",
      "shortTitle": "Chape 260 m²",
      "description": "Chape drogen tot een veilige restvochtigheid, klaar voor vloerafwerking.",
      "pricePerDay": 51.1,
      "rentalWeeks": 3,
      "thicknessCm": 6,
      "pricePerTwoWeeks": 715.4
    },
    {
      "id": "chape-260-7",
      "sqm": 260,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352406673-chape-drogen-8.jpg",
      "title": "Gebouw tot 260 m² — chape 7 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352406673-chape-drogen-8.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352408551-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352408796-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352409003-ttv-4500.png"
      ],
      "category": "Chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352418141-chape-verwarming-9.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "chape",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 4,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 3,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 260 m²",
      "shortTitle": "Chape 260 m²",
      "description": "Chape drogen tot een veilige restvochtigheid, klaar voor vloerafwerking.",
      "pricePerDay": 57.4,
      "rentalWeeks": 4,
      "thicknessCm": 7,
      "pricePerTwoWeeks": 803.6
    },
    {
      "id": "pleister-260-1",
      "sqm": 260,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354006705-pleisterdrogen-7.jpg",
      "title": "Gebouw tot 260 m² — pleisterdikte 1 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354006705-pleisterdrogen-7.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353972185-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353972649-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353972842-ttv-4500.png"
      ],
      "category": "Pleisterwerk drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786353981211-pleisterdrogen-16-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "pleister",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 4,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 260 m²",
      "shortTitle": "Pleisterwerk 260 m²",
      "description": "Pleisterwerk drogen zodat schilderwerk en afwerking veilig kunnen starten.",
      "pricePerDay": 51.1,
      "rentalWeeks": 2,
      "thicknessCm": 1,
      "pricePerTwoWeeks": 715.4
    },
    {
      "id": "pleister-260-2",
      "sqm": 260,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354044628-pleisterdrogen-7.jpg",
      "title": "Gebouw tot 260 m² — pleisterdikte 2 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354044628-pleisterdrogen-7.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354046940-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354047317-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354047528-ttv-4500.png"
      ],
      "category": "Pleisterwerk drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354056370-pleisterdrogen-16-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "pleister",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 2,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 4,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 260 m²",
      "shortTitle": "Pleisterwerk 260 m²",
      "description": "Pleisterwerk drogen zodat schilderwerk en afwerking veilig kunnen starten.",
      "pricePerDay": 51.1,
      "rentalWeeks": 3,
      "thicknessCm": 2,
      "pricePerTwoWeeks": 715.4
    },
    {
      "id": "pleister-260-3",
      "sqm": 260,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354093658-pleisterdrogen-8.jpg",
      "title": "Gebouw tot 260 m² — pleisterdikte 3 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354093658-pleisterdrogen-8.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354096287-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354096757-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354097269-ttv-4500.png"
      ],
      "category": "Pleisterwerk drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354123709-pleisterdrogen-17-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "pleister",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 4,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 260 m²",
      "shortTitle": "Pleisterwerk 260 m²",
      "description": "Pleisterwerk drogen zodat schilderwerk en afwerking veilig kunnen starten.",
      "pricePerDay": 57.4,
      "rentalWeeks": 4,
      "thicknessCm": 3,
      "pricePerTwoWeeks": 803.6
    },
    {
      "id": "beide-260",
      "sqm": 260,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354906015-chape-pleister-drogen-8.jpg",
      "title": "Gebouw tot 260 m² — Pleisterwerk + chape drogen",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354906015-chape-pleister-drogen-8.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354908625-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354908837-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354909046-ttv-4500.png"
      ],
      "category": "Pleisterwerk + chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354918536-tekengebied-1-kopie-34.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "beide",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 4,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 260 m²",
      "shortTitle": "Pleisterwerk + chape 260 m²",
      "description": "Muren en vloer in één keer drogen — pleisterwerk en chape samen.",
      "pricePerDay": 57.4,
      "rentalWeeks": 4,
      "thicknessCm": null,
      "pricePerTwoWeeks": 803.6
    },
    {
      "id": "waterschade-260",
      "sqm": 260,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355395462-pleisterdrogen-8-1.jpg",
      "title": "Gebouw tot 260 m² — Waterschade drogen",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355395462-pleisterdrogen-8-1.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355398592-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355398779-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355398977-ttv-4500.png"
      ],
      "category": "Waterschade drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355407225-tekengebied-1-kopie-34-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "waterschade",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 4,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 2,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 260 m²",
      "shortTitle": "Waterschade 260 m²",
      "description": "Absorptiedroging na waterschade, met voorrang op de planning.",
      "pricePerDay": 57.4,
      "rentalWeeks": 4,
      "thicknessCm": null,
      "pricePerTwoWeeks": 803.6
    },
    {
      "id": "chape-300-5",
      "sqm": 300,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352503766-chape-drogen-9.jpg",
      "title": "Gebouw tot 300 m² — chape 5 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352503766-chape-drogen-9.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352473569-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352473806-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352474995-ttv-4500.png"
      ],
      "category": "Chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352525815-chape-verwarming-9-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "chape",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 5,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 3,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 300 m²",
      "shortTitle": "Chape 300 m²",
      "description": "Chape drogen tot een veilige restvochtigheid, klaar voor vloerafwerking.",
      "pricePerDay": 53.9,
      "rentalWeeks": 2,
      "thicknessCm": 5,
      "pricePerTwoWeeks": 754.6
    },
    {
      "id": "chape-300-6",
      "sqm": 300,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352550564-chape-drogen-9.jpg",
      "title": "Gebouw tot 300 m² — chape 6 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352550564-chape-drogen-9.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352553336-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352553522-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352553712-ttv-4500.png"
      ],
      "category": "Chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352560240-chape-verwarming-9-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "chape",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 5,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 3,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 300 m²",
      "shortTitle": "Chape 300 m²",
      "description": "Chape drogen tot een veilige restvochtigheid, klaar voor vloerafwerking.",
      "pricePerDay": 60.2,
      "rentalWeeks": 3,
      "thicknessCm": 6,
      "pricePerTwoWeeks": 842.8
    },
    {
      "id": "chape-300-7",
      "sqm": 300,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352585050-chape-drogen-9.jpg",
      "title": "Gebouw tot 300 m² — chape 7 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352585050-chape-drogen-9.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352587079-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352587336-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352587714-ttv-4500.png"
      ],
      "category": "Chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786352604360-chape-verwarming-9-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "chape",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 5,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 3,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 300 m²",
      "shortTitle": "Chape 300 m²",
      "description": "Chape drogen tot een veilige restvochtigheid, klaar voor vloerafwerking.",
      "pricePerDay": 60.2,
      "rentalWeeks": 4,
      "thicknessCm": 7,
      "pricePerTwoWeeks": 842.8
    },
    {
      "id": "pleister-300-1",
      "sqm": 300,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354194580-pleisterdrogen-9.jpg",
      "title": "Gebouw tot 300 m² — pleisterdikte 1 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354194580-pleisterdrogen-9.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354196783-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354196976-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354197182-ttv-4500.png"
      ],
      "category": "Pleisterwerk drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354203275-pleisterdrogen-18-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "pleister",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 5,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 3,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 300 m²",
      "shortTitle": "Pleisterwerk 300 m²",
      "description": "Pleisterwerk drogen zodat schilderwerk en afwerking veilig kunnen starten.",
      "pricePerDay": 53.9,
      "rentalWeeks": 2,
      "thicknessCm": 1,
      "pricePerTwoWeeks": 754.6
    },
    {
      "id": "pleister-300-2",
      "sqm": 300,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354230558-pleisterdrogen-9.jpg",
      "title": "Gebouw tot 300 m² — pleisterdikte 2 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354230558-pleisterdrogen-9.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354233348-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354233559-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354233777-ttv-4500.png"
      ],
      "category": "Pleisterwerk drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354239801-pleisterdrogen-18-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "pleister",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 5,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 3,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 300 m²",
      "shortTitle": "Pleisterwerk 300 m²",
      "description": "Pleisterwerk drogen zodat schilderwerk en afwerking veilig kunnen starten.",
      "pricePerDay": 60.2,
      "rentalWeeks": 3,
      "thicknessCm": 2,
      "pricePerTwoWeeks": 842.8
    },
    {
      "id": "pleister-300-3",
      "sqm": 300,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354261881-pleisterdrogen-9.jpg",
      "title": "Gebouw tot 300 m² — pleisterdikte 3 cm",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354261881-pleisterdrogen-9.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354266147-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354266442-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354266674-ttv-4500.png"
      ],
      "category": "Pleisterwerk drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354275967-pleisterdrogen-18-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "pleister",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 5,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 3,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 300 m²",
      "shortTitle": "Pleisterwerk 300 m²",
      "description": "Pleisterwerk drogen zodat schilderwerk en afwerking veilig kunnen starten.",
      "pricePerDay": 60.2,
      "rentalWeeks": 4,
      "thicknessCm": 3,
      "pricePerTwoWeeks": 842.8
    },
    {
      "id": "beide-300",
      "sqm": 300,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354939677-chape-pleister-drogen-9.jpg",
      "title": "Gebouw tot 300 m² — Pleisterwerk + chape drogen",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354939677-chape-pleister-drogen-9.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354941639-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354941892-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354942146-ttv-4500.png"
      ],
      "category": "Pleisterwerk + chape drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786354961536-tekengebied-1-kopie-35.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "beide",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 5,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 3,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 300 m²",
      "shortTitle": "Pleisterwerk + chape 300 m²",
      "description": "Muren en vloer in één keer drogen — pleisterwerk en chape samen.",
      "pricePerDay": 60.2,
      "rentalWeeks": 4,
      "thicknessCm": null,
      "pricePerTwoWeeks": 842.8
    },
    {
      "id": "waterschade-300",
      "sqm": 300,
      "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355454333-pleisterdrogen-9-1.jpg",
      "title": "Gebouw tot 300 m² — Waterschade drogen",
      "images": [
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355454333-pleisterdrogen-9-1.jpg",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355459761-lineup-dryers.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355460058-teddh-30.png",
        "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355460484-ttv-4500.png"
      ],
      "category": "Waterschade drogen",
      "imgRules": [
        {
          "min": 1,
          "image": "https://zqzrdzpfxqlwrojxsqdl.supabase.co/storage/v1/object/public/bouwdroger-fotos/1786355437883-tekengebied-1-kopie-35-1.jpg",
          "device": "kachel"
        }
      ],
      "includes": [
        "Levering en installatie binnen 24 uur",
        "Plaatsing op de juiste posities door onze techniekers",
        "Voor- en nameting van de restvochtigheid",
        "Ophaling na afloop van de huurperiode"
      ],
      "workType": "waterschade",
      "equipment": [
        {
          "name": "ECO Boost",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-170",
            "Bereik": "tot 250 m³",
            "Capaciteit": "50L/dag"
          }
        },
        {
          "name": "Turbo Axiaalventilator",
          "type": "ventilator",
          "count": 5,
          "specs": {
            "Model": "TTV-4500",
            "Standen": "3",
            "Luchtdebiet": "5.300 m³/uur"
          }
        },
        {
          "name": "ECO Performance",
          "type": "bouwdroger",
          "count": 3,
          "specs": {
            "Model": "TTK-350",
            "Bereik": "tot 400 m³",
            "Capaciteit": "80L/dag"
          }
        },
        {
          "name": "Elektrische kachel",
          "type": "kachel",
          "count": 3,
          "specs": {
            "Bereik": "tot 40m²",
            "Vermogen": "3,30 kW",
            "Thermostaat": "ingebouwd"
          },
          "optional": true
        }
      ],
      "sizeLabel": "Gebouw tot 300 m²",
      "shortTitle": "Waterschade 300 m²",
      "description": "Absorptiedroging na waterschade, met voorrang op de planning.",
      "pricePerDay": 60.2,
      "rentalWeeks": 4,
      "thicknessCm": null,
      "pricePerTwoWeeks": 842.8
    }
  ],
  "extras": [
    {
      "k": "rapport",
      "sub": "Verslag nodig voor uw verzekeraar, huisbaas of bouwdossier? Wij werken de standaard voor- en nameting uit tot een ondertekend rapport met alle meetwaarden.",
      "name": "Officieel vochtrapport",
      "unit": "eenmalig",
      "price": 49,
      "perWeek": false
    },
    {
      "k": "stroom",
      "sub": "Nog geen elektriciteitskast op de werf? Wij verhuren een werfstroomverdeler mee, zodat alle toestellen meteen veilig kunnen draaien.",
      "name": "Werfstroomkast (paddestoel)",
      "unit": "per week",
      "price": 25,
      "perWeek": true
    }
  ],
  "devices": {
    "small": {
      "w2": 80,
      "air": 0,
      "cap": 50,
      "img": "/verhuur/ttk-170.png",
      "sub": "Automatische werking · laag geluidsniveau · waterreservoir",
      "name": "Small Bouwdroger, 50 l / 24 u"
    },
    "axiaal": {
      "w2": 44,
      "air": 5300,
      "cap": 0,
      "img": "/verhuur/ttv-4500.png",
      "sub": "Spatwaterdicht (IP55) · 3 standen · 0,25 kW",
      "name": "Turbo Axiaalventilator, 5 300 m³/u"
    },
    "kachel": {
      "w2": 35,
      "air": 0,
      "cap": 0,
      "img": "/verhuur/teddh-30.png",
      "sub": "Ingebouwde thermostaat · gelijkmatige verdeling",
      "name": "Elektrische kachel, 3,30 kW"
    },
    "medium": {
      "w2": 105,
      "air": 0,
      "cap": 80,
      "img": "/verhuur/ttk-350.png",
      "sub": "Krachtig bij overgang naar hogere vochtbelasting",
      "name": "Medium Bouwdroger, 80 l / 24 u"
    }
  },
  "pricing": {
    "deposit": 50,
    "ladder_fee": 39,
    "max_floors": 5,
    "fixed_weeks": 2,
    "online_discount": 0.05,
    "drying_days_water": 10,
    "max_extra_devices": 6,
    "pump_price_per_day": 2,
    "weeks_multiplier_1": 0.62,
    "weeks_multiplier_2": 1,
    "weeks_multiplier_3": 1.35,
    "weeks_multiplier_4": 1.62
  },
  "version": 87,
  "products": {
    "ttk170": {
      "day": 9,
      "img": [
        "/vernast/eco-boost.webp",
        "/vernast/lineup-dryers.webp"
      ],
      "sum": "Compacte, verrijdbare condensontvochtiger. De juiste keuze voor één kamer, een appartement of een kleinere renovatie.",
      "name": "Ontvochtiger TTK 170 S",
      "type": "Condensontvochtiger",
      "badge": "Kleine ruimtes",
      "short": "TTK 170 S"
    },
    "ttk350": {
      "day": 12,
      "img": [
        "/vernast/eco-performance.webp",
        "/vernast/lineup-dryers.webp"
      ],
      "sum": "Ons meest gehuurde toestel en de standaard voor nieuwbouw. Droogt chape en pleisterwerk betrouwbaar binnen enkele dagen.",
      "name": "Ontvochtiger TTK 350 S",
      "type": "Condensontvochtiger",
      "badge": "Meest gehuurd",
      "short": "TTK 350 S"
    },
    "ttk650": {
      "day": 16,
      "img": [
        "/vernast/eco-ultimate.webp",
        "/vernast/lineup-dryers.webp"
      ],
      "sum": "Het zwaarste toestel in het gamma. Voor grote werven, kelders en waterschade waar elke dag telt.",
      "name": "Ontvochtiger TTK 650 S",
      "type": "Condensontvochtiger",
      "badge": "Grote volumes",
      "short": "TTK 650 S"
    },
    "teddh30": {
      "day": 12,
      "img": [
        "/vernast/kachel-30.webp"
      ],
      "sum": "Elektrische bouwkachel van 30 kW met ingebouwde thermostaat. Brengt koude ruimtes op temperatuur zodat droging effectief wordt.",
      "name": "Elektrische kachel TEddH 30 T",
      "type": "Elektrische bouwkachel",
      "badge": "Voor koude ruimtes",
      "short": "TEddH 30 T"
    },
    "ttv4500": {
      "day": 9,
      "img": [
        "/vernast/vent-axiaal.webp"
      ],
      "sum": "Krachtige bouwventilator met 4 500 m³/u luchtverzet. Zorgt dat de droge lucht ook effectief langs muren en vloeren strijkt.",
      "name": "Ventilator TTV 4500",
      "type": "Bouwventilator · luchtcirculatie",
      "badge": "Versnelt elke droging",
      "short": "TTV 4500"
    }
  },
  "published_at": "2026-08-11T07:47:57.629744+00:00"
} as const;

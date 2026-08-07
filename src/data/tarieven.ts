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
  "version": 1,
  "packages": {
    "40": {
      "dry": 12,
      "img": "/verhuur/pkg-1.jpg",
      "small": 1,
      "axiaal": 1,
      "kachel": 1,
      "medium": 0
    },
    "60": {
      "dry": 12,
      "img": "/verhuur/pkg-2.jpg",
      "small": 1,
      "axiaal": 2,
      "kachel": 1,
      "medium": 0
    },
    "100": {
      "dry": 12,
      "img": "/verhuur/pkg-3.jpg",
      "small": 1,
      "axiaal": 3,
      "kachel": 1,
      "medium": 1
    },
    "140": {
      "dry": 12,
      "img": "/verhuur/pkg-4.jpg",
      "small": 1,
      "axiaal": 3,
      "kachel": 2,
      "medium": 2
    },
    "180": {
      "dry": 14,
      "img": "/verhuur/pkg-5.jpg",
      "small": 2,
      "axiaal": 4,
      "kachel": 2,
      "medium": 2
    },
    "220": {
      "dry": 16,
      "img": "/verhuur/pkg-7.jpg",
      "small": 2,
      "axiaal": 4,
      "kachel": 2,
      "medium": 3
    },
    "260": {
      "dry": 16,
      "img": "/verhuur/pkg-8.jpg",
      "small": 3,
      "axiaal": 4,
      "kachel": 3,
      "medium": 3
    }
  },
  "published_at": "2026-08-07T10:47:23.208577+00:00"
} as const;

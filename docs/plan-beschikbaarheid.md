# Plan — beschikbaarheid van toestellen afdwingen

**Status:** uitgevoerd op 2026-08-07. Fases 1 t/m 4 staan en zijn geverifieerd;
zie "Wat er niet in zit" onderaan voor de resterende randen.
**Aanleiding:** op 2026-08-07 een boeking geplaatst in exact hetzelfde venster als
order `VRN-2026-K7M4PQXA` (8 → 22 aug, overlappende toestellen). De site liet dat
zonder één waarschuwing door tot op de Stripe-betaalpagina.

## Wat er nu mist

De site heeft **geen enkel leespad naar orders**. In `api/` staat geen query op
`bouwdroger_orders`; `delivery_date` wordt alleen weggeschreven. `/api/checkout`
herberekent de prijs en maakt een Stripe-sessie, meer niet.

Twee gaten die dieper zitten dan de ontbrekende controle zelf:

1. **Site-orders dragen geen huurperiode.** `rental_start_date` en
   `rental_end_date` komen binnen als `null`; alleen `delivery_date` wordt
   ingevuld. Zonder begin- en einddatum is overlap niet te berekenen.
2. **Site-orders koppelen geen toestellen.** Wat binnenkomt is een tekstregel
   (`package_tier`) plus losse aantallen. De rijen in
   `bouwdroger_order_equipment` zijn met de hand in het portaal gelegd.

Zolang die twee er niet zijn, telt een verse webshop-order pas mee nádat iemand
hem handmatig ingepland heeft — precies het gat waar dubbelboekingen doorheen
glippen.

## Uitgangspunten (vastgelegd 2026-08-07)

- **Hard blokkeren.** Een vol venster is niet kiesbaar, en vlak vóór betaling
  volgt een tweede, harde controle.
- **Bezet = elke niet-geannuleerde order met een overlappende huurperiode.**
  Niet alleen wat in het portaal gepland is.
- **De controle draait als Supabase edge function.** De site krijgt geen
  database-toegang; dat blijft zoals het is sinds de Lovable-database eruit ging.

## Wat er al klaarstaat

`bouwdroger_equipment` is een bruikbare inventaris met een `device_key` die
één-op-één mapt op de sleutels uit `src/lib/verhuur.ts`:

| `device_key` | toestellen | totaal |
|---|---|---|
| `small` | ECO Boost TTK-170 | 3 |
| `medium` | ECO Performance TTK-350 | 4 |
| `axiaal` | Turbo Axiaalventilator TTV-4500 | 6 |
| `kachel` | TEDDH-20 + TEDDH-30 | 2 + 2 = 4 |

Capaciteit is dus `sum(quantity)` per `device_key`, en alleen over rijen met
`status = 'beschikbaar'` — een toestel in onderhoud of defect hoort niet mee te
tellen.

Let op: `TTV-RAD`, `ECO-REV` en `TTK-650` hebben `device_key = null`. Die zijn via
de site niet boekbaar en vallen buiten deze controle. Wil je ze later wél
aanbieden, dan moeten ze eerst een sleutel krijgen.

---

## Fase 1 — de site laat zijn boeking volledig achter

Zonder dit heeft de rest geen data om op te rekenen. Dit is los deploybaar en
maakt op zichzelf al niets stuk.

**`src/lib/verhuur.ts`** — één nieuwe exported functie die van een `PackageConfig`
plus gekozen opties een platte lijst maakt:

```ts
export interface DeviceLine { device_key: string; qty: number }
export function deviceLines(c: PackageConfig, options: Options): DeviceLine[]
```

Hergebruikt `baseItems()` en telt de extra toestellen uit de extra's-stap erbij.
Dit is de enige plek waar de vertaling pakket → toestellen mag leven.

**`src/lib/vernastSync.ts`** — `VernastOrderPayload` uitbreiden met
`rental_start_date`, `rental_end_date` en `order_lines: DeviceLine[]`.

**`api/checkout.ts`** — de huurperiode zit al in de pagina ("14 dagen, tot 22
augustus") maar wordt niet meegestuurd. Server-side herleiden uit `leverdatum` +
de vaste duur van het pakket, en als metadata meegeven. Let op de 500-tekenlimiet
per Stripe-metadatawaarde: `order_lines` gecomprimeerd wegschrijven
(`"small:2,medium:2,axiaal:4,kachel:2"`), niet als JSON.

**`api/stripe-webhook.ts` en `api/order.ts`** — die velden doorgeven aan
`pushOrderToVernast`.

**Supabase-kant** — `bouwdroger-order-webhook` de nieuwe velden laten
wegschrijven, en uit `order_lines` meteen rijen in `bouwdroger_order_equipment`
aanmaken. Vanaf dat moment telt een webshop-order mee zonder handwerk.

**Backfill** — bestaande rijen zonder `rental_start_date` bijwerken op basis van
`delivery_date` plus de duur die uit `package_tier` valt af te leiden. Momenteel
gaat het om één rij, dus dit is nu goedkoop; over drie maanden niet meer.

## Fase 2 — de beschikbaarheidsfunctie

Nieuwe edge function `bouwdroger-availability`, naast
`bouwdroger-order-webhook`, met hetzelfde gedeelde secret
(`BOUWDROGER_WEBHOOK_SECRET`).

**Request** — één call voor een heel datumbereik, niet één per dag:

```jsonc
POST /functions/v1/bouwdroger-availability
{ "from": "2026-08-07", "to": "2026-10-06", "items": [{"device_key":"small","qty":2}, ...] }
```

**Response** — per dag hoeveel er vrij is per sleutel, plus een afgeleide lijst
startdatums die voor déze samenstelling passen:

```jsonc
{
  "capacity": { "small": 3, "medium": 4, "axiaal": 6, "kachel": 4 },
  "booked":   { "2026-08-08": { "small": 2, "axiaal": 5 }, ... },
  "blocked_start_dates": ["2026-08-08", "2026-08-09", ...]
}
```

De client rekent zelf niets uit wat de server ook kan; `blocked_start_dates`
houdt de wizard dom.

**De kern-query.** Ophalen en leveren mag op dezelfde dag (vastgelegd
2026-08-07), dus de grens is **exclusief**: overlap is
`start_a < end_b AND end_a > start_b`. Een huur die eindigt op 22 augustus
blokkeert een huur die start op 22 augustus dus níét. Dat scheelt een dag
capaciteit per verhuur — en het is precies het randgeval waar een test op moet
staan, want met `<=` verlies je die dag stilzwijgend.

Uitsluiten: `status = 'geannuleerd'` en `payment_status = 'refunded'`. Meetellen:
alles wat daarna overblijft, ongeacht of het al ingepland is.

**Prestatie.** Voorlopig triviaal. Een index op
`bouwdroger_orders (rental_start_date, rental_end_date)` erbij, en een `generate_series`
over het bereik in plaats van per dag een query.

## Fase 3 — de site gebruikt hem

**`api/availability.ts`** — dunne proxy op de site. Bestaat alleen om het gedeelde
secret server-side te houden en geeft niet meer terug dan de wizard nodig heeft.
Dezelfde IP-drempel als de andere routes (`src/lib/rateLimit.ts`).

**`VerhuurBoekingPage.tsx`, datumstap** — bij het binnenkomen van die stap één
call voor de komende 60 dagen. Datums uit `blocked_start_dates` worden
uitgeschakeld met een leesbare reden ("op deze datum zijn onze bouwdrogers al
ingepland"). Valt de call weg, dan **niet** stil doorlaten maar de stap blokkeren
met een foutmelding — een onbereikbare controle is geen groene controle.

**`api/checkout.ts`, vlak vóór `stripe.checkout.sessions.create`** — dezelfde
controle nog eens, hard. Vol? Dan `409` met een bruikbare boodschap in plaats van
een sessie. Dit is de enige controle die echt telt; de wizard-versie is comfort.

**`api/order.ts`** — idem voor het "€ 50 nu"-pad en het reserveringsformulier.
Die lopen buiten Stripe om en zijn nu net zo blind.

## Fase 4 — het gat tussen kiezen en betalen

Twee bezoekers kunnen tegelijk de laatste twee drogers in hun mandje hebben. De
controle in `/api/checkout` sluit dat niet af: daarna volgt nog een Stripe-sessie
die minuten open kan staan.

**Aanpak: aparte tabel `bouwdroger_holds`** (`stripe_session_id`,
`rental_start_date`, `rental_end_date`, `order_lines`, `expires_at`,
`released_at`). Bij het aanmaken van de Stripe-sessie een hold wegschrijven; de
beschikbaarheidsquery telt niet-vervallen holds mee als bezet.
`checkout.session.completed` en `.expired` geven hem weer vrij.

Overwogen en verworpen: de order meteen in `bouwdroger_orders` zetten met een
status `wachtend_op_betaling`. Dat hergebruikt meer bestaande code, maar zet
afgehaakte boekingen in de orderlijst van het portaal — en de eis is uitdrukkelijk
dat daar alleen echte boekingen in staan (2026-08-07). Een aparte tabel houdt die
scheiding hard, zonder dat het portaal-project iets hoeft te weten van holds.

**De vervaltermijn.** Stripe-sessies leven standaard 24 uur. Zo lang toestellen
vasthouden voor iemand die waarschijnlijk niet terugkomt is te streng: zet
`expires_at` op de Stripe-sessie op 30 minuten en gebruik diezelfde waarde voor
de hold. Dan lopen ze gelijk en is er geen tweede vervalmechanisme nodig.

## Tests

`vitest` staat al opgezet (`src/test/verhuur.test.ts`).

- Overlaplogica, met als scherpste geval: huur A eindigt op 22 aug, huur B start
  op 22 aug → moet **passen**. Dit is de test die je beschermt tegen iemand die
  de vergelijking later "veiliger" maakt en zo stil een dag capaciteit weggooit.
- Capaciteit per `device_key`, inclusief de twee kachelmodellen die samen 4 zijn,
  en het uitsluiten van niet-beschikbare toestellen.
- `deviceLines()` voor elk pakket uit `BRACKET`, met en zonder extra's.
- Scenariotest die precies dit incident naspeelt: order in 8 → 22 aug, daarna
  hetzelfde venster boeken → verwacht `409`.

## Volgorde en risico

| # | stap | risico |
|---|---|---|
| 1 | Fase 1, alles behalve de backfill | laag, puur additief |
| 2 | Backfill bestaande orders | laag nu, groeit met elke order |
| 3 | Fase 2, edge function + tests | laag, niets roept hem nog aan |
| 4 | Fase 3, wizard (zichtbaar maar zacht) | middel — hier merken bezoekers het |
| 5 | Fase 4, order bij sessie-aanmaak + statussen | middel |
| 6 | Fase 3, harde check in checkout/order | **hoog** — een fout hier blokkeert betalende klanten |

Stap 5 pas na een dag meekijken op de logs van stap 4: zie je datums geblokkeerd
worden die je met de hand wél had aangenomen, dan klopt de capaciteit of de
overlaplogica nog niet.

## Wat er niet in zit (stand 2026-08-07)

- **`api/order.ts` heeft geen controle.** Die route bedient de oudere formulieren
  op `/boeking` en `/reserveren`; die sturen geen toestelregels mee, dus er valt
  daar niets te berekenen. De wizard — inclusief de keuze "€ 50 nu, rest bij
  levering" — loopt volledig via `api/checkout.ts` en is wél afgedekt.
- **Het portaal schrijft nog geen `order_lines`.** Handmatig aangemaakte orders
  vallen terug op de vertaling in `bouwdroger_order_lines_fallback`, die moet
  gokken dat `equipment_drogers` op `medium` slaat. Dat hoort opgelost in
  `vernast-v2-0`, niet hier.
- **De wizard is niet visueel nagekeken** in een echte browser; de routes
  eronder wel, met curl. De weergave van een volle datum is dus ongetest.
- **Toestellen zonder `device_key`** (`TTV-RAD`, `ECO-REV`, `TTK-650`) tellen
  nergens mee.

## Wat dit plan bewust niet doet

- Geen planning of routeoptimalisatie. Dit zegt alleen ja of nee.
- Geen rekening met vervoer, mankracht of het aantal leveringen per dag. Puur
  toestellen.
- Geen wachtlijst of alternatieve datumsuggestie. Kan later; de
  `blocked_start_dates` bevatten alles wat je daarvoor nodig hebt.
- Toestellen zonder `device_key` blijven buiten beschouwing.

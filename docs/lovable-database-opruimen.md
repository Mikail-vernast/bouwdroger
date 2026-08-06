# De Lovable-database opruimen

De site praat er niet meer mee. Dit document gaat over wat er nog openstaat: de
database zelf bestaat nog, is bereikbaar, en lekt klantgegevens.

## Waar het over gaat

Supabase-project **`xmyfedzvtjfpspriafza`** — het project dat bij de
Lovable-versie van deze site hoorde.

Het staat **niet in de VRNST-organisatie**. In het Supabase-dashboard van Brent
is enkel `Vernast V2.0` zichtbaar; dit project hangt aan het account waarmee
Lovable het destijds heeft aangemaakt. Dat is precies waarom het over het hoofd
te zien was.

## Wat er mis is

Vastgesteld op 2026-08-06, met de publieke sleutel die in de GitHub-repo stond:

```
GET /rest/v1/bookings   →  http 200
28 kolommen leesbaar, waaronder acht gevulde PII-velden:
first_name, last_name, email, phone, address, postal_code, city, company_name
```

Schrijven bleek ook niet geblokkeerd: een insert-poging strandde op een NOT
NULL-constraint en niet op een policy, wat betekent dat PostgREST tot de
constraint-controle kwam en de policy dus doorliet.

**Wat er níet gebeurd is.** De tabel bevatte één rij: `BDR-2026-E2E01`,
"Eindtest Keten", aangemaakt op 2026-08-06 om 13:11 UTC. Dat is een
end-to-end test van de orderketen, geen klant. De site had op dat moment nog
geen echte boekingen. Het gat was dus reëel — met de sleutel uit de publieke
repo kon iedereen de tabel lezen — maar er zijn geen persoonsgegevens van
klanten blootgesteld. Geen datalek in de zin van de AVG, en dus geen
meldingsplicht.

Dat is een kwestie van timing, niet van opzet: was dit een week later ontdekt,
met echte boekingen erin, dan was het antwoord anders geweest.

De sleutel roteren helpt niet. Een anon-sleutel hoort publiek te zijn; hij zit
per definitie in de JavaScript van elke bezoeker. Wat ontbreekt is Row Level
Security.

## Wat de site nu doet

Sinds commit `6465e80` en de opvolger daarvan loopt elke order rechtstreeks naar
Vernast:

```
formulier → /api/order → edge function bouwdroger-order-webhook → bouwdroger_orders
```

`bouwdroger_orders` in Vernast V2.0 heeft alle 41 velden die de payload nodig
heeft, staat achter RLS en is enkel zichtbaar voor admin en de rol `bouwdroger`.
Ook de `supabase/`-map is weg. Die bevatte een `config.toml` met
`project_id = "xmyfedzvtjfpspriafza"` — het dode Lovable-project — en migraties
die `public.bookings` en `public.reserveringen` aanmaken. Die twee tabellen
bestaan niet in Vernast V2.0 en horen daar ook niet: orders landen in
`bouwdroger_orders`, via de edge function. Zolang die map er stond, wees een
`supabase db push` in deze repo ofwel naar de dode database, ofwel duwde hij
twee vreemde tabellen het portaal in. Deze repo praat met geen enkele database
rechtstreeks; alles gaat over `VERNAST_WEBHOOK_URL`.

De Supabase-client, de dependency en de `VITE_SUPABASE_*`-variabelen zijn uit de
codebase en uit Vercel verwijderd. Er is geen enkele verwijzing naar dit project
meer in de code, en ook niet in het CRM — dat is nagekeken op functies en
kolomcommentaren.

## Wat er nog moet gebeuren

**1. Niets veilig te stellen.** Nagekeken op 2026-08-06: de enige rij,
`BDR-2026-E2E01`, staat al in `bouwdroger_orders` in Vernast V2.0. Er gaat niets
verloren.

**2. Het project verwijderen.** Dat is de schone oplossing: geen database, geen
lek, geen tweede bron van waarheid. Log in op het account waar het project onder
hangt (te vinden via het Lovable-project) en verwijder het.

**3. Als het toch nog even moet blijven staan**, dicht dan eerst het lek:

```sql
alter table public.bookings enable row level security;
alter table public.reserveringen enable row level security;

-- Bestaande policies weg, zodat een te ruime policy niet blijft staan.
do $$
declare pol record;
begin
  for pol in
    select policyname, tablename from pg_policies
    where schemaname = 'public' and tablename in ('bookings', 'reserveringen')
  loop
    execute format('drop policy %I on public.%I', pol.policyname, pol.tablename);
  end loop;
end $$;
```

Geen policies aanmaken. Zonder policy is alles geweigerd, en dat is hier precies
goed: niets schrijft er nog naartoe.

Controleren:

```sql
select tablename, rowsecurity from pg_tables
where schemaname = 'public' and tablename in ('bookings', 'reserveringen');
```

En van buitenaf, met de publieke sleutel:

```bash
curl "$URL/rest/v1/bookings?select=id&limit=1" \
  -H "apikey: $ANON" -H "Authorization: Bearer $ANON"
```

Verwacht een lege array `[]` in plaats van klantgegevens.

## Voor later

Hang de publieke site nooit rechtstreeks aan de CRM-database. Die bevat
offertes, facturen en klantendossiers; een anon-sleutel daarop maakt van elke
fout in een policy een bedrijfsbreed lek — hetzelfde als hier gebeurde, maar dan
met de hele onderneming als bereik. De weg blijft: site → `/api/order` → edge
function → `bouwdroger_orders`.

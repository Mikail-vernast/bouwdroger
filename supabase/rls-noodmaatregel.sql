-- Noodmaatregel voor de Lovable-database (project xmyfedzvtjfpspriafza).
--
-- Vastgesteld op 2026-08-06: `bookings` is met de anon-sleutel volledig te
-- lezen, inclusief naam, e-mail, telefoon en adres van klanten. Die sleutel
-- stond in de publieke GitHub-repo. Een insert-poging strandde op een NOT NULL-
-- constraint en niet op een policy, wat betekent dat ook schrijven openstond.
--
-- Belangrijk: de anon-sleutel roteren helpt hier niet. Die sleutel hoort publiek
-- te zijn — hij zit per definitie in de JavaScript-bundle van elke bezoeker. Wat
-- ontbrak is Row Level Security. Dit bestand zet dat recht.
--
-- Uitvoeren in de SQL-editor van dat project. Daarna hoort deze database
-- uitgefaseerd te worden richting `bouwdroger_orders` in Vernast V2.0; zie de
-- toelichting onderaan.

-- ---------------------------------------------------------------------------
-- 1. RLS aanzetten
-- ---------------------------------------------------------------------------
-- Zonder policies is alles geweigerd. Dat is het gedrag dat we willen als
-- vertrekpunt: eerst dicht, dan gericht openzetten wat de site nodig heeft.

alter table public.bookings enable row level security;
alter table public.reserveringen enable row level security;

-- Bestaande policies weghalen, zodat een te ruime policy uit het verleden niet
-- stilletjes blijft staan.
do $$
declare pol record;
begin
  for pol in
    select policyname, tablename
    from pg_policies
    where schemaname = 'public' and tablename in ('bookings', 'reserveringen')
  loop
    execute format('drop policy %I on public.%I', pol.policyname, pol.tablename);
  end loop;
end $$;

-- ---------------------------------------------------------------------------
-- 2. Lezen: voor niemand met de publieke sleutel
-- ---------------------------------------------------------------------------
-- Er wordt bewust géén SELECT-policy aangemaakt. Klantgegevens hoef je niet in
-- de browser te kunnen opvragen; het portaal leest mee met de service-rol, en
-- die omzeilt RLS sowieso.

-- ---------------------------------------------------------------------------
-- 3. Schrijven: alleen wat het formulier nodig heeft
-- ---------------------------------------------------------------------------
-- Kies één van beide varianten.
--
-- Variant A (aanbevolen) — zet SUPABASE_SERVICE_ROLE_KEY in Vercel:
--
--     vercel env add SUPABASE_SERVICE_ROLE_KEY production
--
--   api/order.ts pakt die sleutel automatisch op (zie supabaseClient() daar) en
--   schrijft er de orders mee. Anon heeft dan helemaal geen rechten meer nodig;
--   laat de INSERT-policy hieronder in dat geval weg. Dit is de enige variant
--   waarbij een bezoeker niets rechtstreeks in de database kan zetten.
--
-- Variant B (overbrugging) — zolang die sleutel er niet is, valt api/order.ts
--   terug op de publieke sleutel en heeft anon insert-recht nodig. Dan blijft
--   het formulier werken en is het datalek toch gedicht, maar kan iemand nog
--   steeds rijen aanmaken buiten het formulier om. De rate limiting en de
--   allowlist in api/order.ts beperken de schade; waterdicht is het niet.

create policy "anon mag een order aanmaken"
  on public.bookings for insert
  to anon
  with check (
    -- Een bezoeker mag geen order aanmaken die al als bevestigd geldt.
    status = 'pending'
    and user_id is null
  );

create policy "anon mag een reservering aanmaken"
  on public.reserveringen for insert
  to anon
  with check (true);

-- Wijzigen en verwijderen blijft voor iedereen dicht: geen UPDATE- of
-- DELETE-policy. Het portaal doet dat met de service-rol.

-- ---------------------------------------------------------------------------
-- 4. Controleren
-- ---------------------------------------------------------------------------
-- Verwacht: rls_enabled = true op beide tabellen, en enkel INSERT-policies.

select tablename, rowsecurity as rls_enabled
from pg_tables
where schemaname = 'public' and tablename in ('bookings', 'reserveringen');

select tablename, policyname, cmd, roles
from pg_policies
where schemaname = 'public' and tablename in ('bookings', 'reserveringen')
order by tablename, cmd;

-- Daarna vanaf de commandolijn, met de publieke sleutel uit de bundle:
--
--   curl "$URL/rest/v1/bookings?select=id&limit=1" \
--     -H "apikey: $ANON" -H "Authorization: Bearer $ANON"
--
-- Verwacht een lege array `[]` in plaats van klantgegevens.

-- ---------------------------------------------------------------------------
-- Daarna: deze database uitfaseren
-- ---------------------------------------------------------------------------
-- Vernast V2.0 (zqzrdzpfxqlwrojxsqdl) heeft al een tabel `bouwdroger_orders`,
-- met RLS aan en zichtbaar voor admin en de rol `bouwdroger`. src/lib/
-- vernastSync.ts duwt orders daar al naartoe via de edge function
-- `bouwdroger-order-webhook`. Zolang deze Lovable-database ernaast blijft
-- bestaan, staan dezelfde orders op twee plaatsen en is er geen bron van
-- waarheid.
--
-- Let op bij het samenvoegen: de publieke site mag nooit rechtstreeks met de
-- CRM-database praten. Die bevat offertes, facturen en klantendossiers; een
-- anon-sleutel daarop zetten maakt van elke fout in een policy een bedrijfsbreed
-- lek. De weg blijft: site → /api/order → edge function → bouwdroger_orders.

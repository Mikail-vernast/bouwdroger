-- Dichtzetten van de RLS op public.bookings.
--
-- De oude SELECT-policy stond op USING (true) zonder rolbeperking. De publieke
-- anon-sleutel zit in de JS-bundle, dus iedereen kon daarmee elke boeking
-- opvragen: naam, e-mail, telefoon, adres, btw-nummer en notities. De site leest
-- die tabel nergens — er wordt alleen ingevoegd — dus de policy kan gewoon weg.
DROP POLICY IF EXISTS "Anyone can view booking by number" ON public.bookings;

-- Invoegen blijft publiek: het boekingsformulier heeft geen login. Maar een
-- bezoeker mag geen rij meer aanmaken die meteen als betaald of bevestigd staat,
-- en evenmin een boeking aan een bestaande gebruiker hangen.
DROP POLICY IF EXISTS "Anyone can create a booking" ON public.bookings;

CREATE POLICY "Anon may create a pending booking"
  ON public.bookings FOR INSERT TO anon
  WITH CHECK (status = 'pending' AND user_id IS NULL);

CREATE POLICY "Authenticated may create a pending booking"
  ON public.bookings FOR INSERT TO authenticated
  WITH CHECK (status = 'pending' AND (user_id IS NULL OR user_id = auth.uid()));

CREATE TABLE public.reserveringen (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  situatie TEXT NOT NULL,
  machine TEXT NOT NULL,
  duur TEXT NOT NULL,
  voornaam TEXT NOT NULL,
  achternaam TEXT NOT NULL,
  telefoon TEXT NOT NULL,
  email TEXT NOT NULL,
  adres TEXT NOT NULL,
  gemeente TEXT NOT NULL,
  postcode TEXT NOT NULL,
  leveringsdatum DATE NOT NULL,
  bericht TEXT,
  prijs_excl_btw NUMERIC,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.reserveringen ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts on reserveringen"
  ON public.reserveringen
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated inserts on reserveringen"
  ON public.reserveringen
  FOR INSERT
  TO authenticated
  WITH CHECK (true);
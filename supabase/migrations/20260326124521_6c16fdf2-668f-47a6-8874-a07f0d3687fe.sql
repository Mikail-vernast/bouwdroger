-- Create bookings table for rental requests
CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  booking_number TEXT NOT NULL UNIQUE,
  customer_type TEXT NOT NULL DEFAULT 'particulier' CHECK (customer_type IN ('particulier', 'zakelijk')),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  postal_code TEXT,
  city TEXT,
  company_name TEXT,
  vat_number TEXT,
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'paid', 'delivered', 'active', 'returned', 'cancelled')),
  sqm INTEGER,
  room_type TEXT,
  package_tier TEXT,
  duration_days INTEGER,
  rental_start_date DATE,
  rental_end_date DATE,
  total_price NUMERIC,
  product_id TEXT,
  equipment_drogers INTEGER,
  equipment_ventilatoren INTEGER,
  equipment_verwarming INTEGER,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create a booking"
  ON public.bookings FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can view booking by number"
  ON public.bookings FOR SELECT USING (true);

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_bookings_updated_at
  BEFORE UPDATE ON public.bookings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
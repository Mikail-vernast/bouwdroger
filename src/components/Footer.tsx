import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { BEDRIJF, KIEZEN, SERVICE, TOEPASSINGEN } from "@/data/navigation";
import { CONTACT, SITE_NAME } from "@/lib/site";
import logoWhite from "@/assets/logo-white.png";

const Footer = () => {
  return (
    <footer className="relative bg-accent text-primary-foreground/80 pt-16 pb-8 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 right-20 w-[300px] h-[300px] rounded-full bg-primary/15" />
        <div className="absolute -bottom-32 -left-16 w-[250px] h-[250px] rounded-full bg-primary/10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Contact */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img src={logoWhite} alt={SITE_NAME} className="h-7 w-auto" loading="lazy" decoding="async" />
            </div>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+3236899065"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-4 w-4" /> 03 689 90 65
              </a>
              <a
                href="mailto:info@vernast-verhuur.be"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-4 w-4" /> info@vernast-verhuur.be
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                {/*
                  Letterlijk hetzelfde adres als in `CONTACT` en dus als in de
                  JSON-LD. Een lokaal bedrijf wordt herkend doordat naam, adres
                  en telefoon overal identiek staan; een afwijkende schrijfwijze
                  in de footer maakt van één vestiging twee onzekere.
                */}
                <span>
                  {CONTACT.street}, {CONTACT.postalCode} {CONTACT.city}
                </span>
              </div>
            </div>
          </div>

          {/* Nuttige Links */}
          <div>
            <h2 className="font-bold text-primary-foreground text-sm mb-4 uppercase tracking-wider">
              Nuttige Links
            </h2>
            <ul className="space-y-2 text-sm">
              {[...KIEZEN, ...BEDRIJF].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Diensten */}
          <div>
            <h2 className="font-bold text-primary-foreground text-sm mb-4 uppercase tracking-wider">
              Diensten
            </h2>
            <ul className="space-y-2 text-sm">
              {[...TOEPASSINGEN, ...SERVICE].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Openingsuren */}
          <div>
            <h2 className="font-bold text-primary-foreground text-sm mb-4 uppercase tracking-wider">
              Openingsuren
            </h2>
            {/*
              Dezelfde uren als `openingHoursSpecification` in de JSON-LD.
              Hier stond eerder ook "Zaterdag 09:00 - 12:00" terwijl de schema
              enkel Ma-Vr aangaf; wie beide leest — Google, een AI-assistent —
              houdt aan zo'n tegenspraak geen openingsuur over.
            */}
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span>Ma - Vr</span>
                <span>08:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>Za - Zo</span>
                <span>Gesloten</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
          {/*
            De naam van déze site, niet die van de zusteronderneming. Stond er
            eerder als "Vernast Vochtbestrijding": de enige plek op de site waar
            het bedrijf voluit staat, gaf zo een andere entiteit aan dan de
            JSON-LD, de titels en llms.txt.
          */}
          &copy; {new Date().getFullYear()} {SITE_NAME}. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

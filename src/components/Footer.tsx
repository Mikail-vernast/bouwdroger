import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
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
              <img src={logoWhite} alt="Vernast Verhuur" className="h-7 w-auto" />
            </div>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+3231234567"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-4 w-4" /> +32 (0)3 123 45 67
              </a>
              <a
                href="mailto:info@vernast-verhuur.be"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-4 w-4" /> info@vernast-verhuur.be
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Boomsesteenweg 12/Unit 11, 2630 Aartselaar</span>
              </div>
            </div>
          </div>

          {/* Nuttige Links */}
          <div>
            <h4 className="font-bold text-primary-foreground text-sm mb-4 uppercase tracking-wider">
              Nuttige Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/over-ons" className="hover:text-primary-foreground transition-colors">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link to="/over-ons" className="hover:text-primary-foreground transition-colors">
                  Onze Aanpak
                </Link>
              </li>
              <li>
                <Link to="/realisaties" className="hover:text-primary-foreground transition-colors">
                  Realisaties
                </Link>
              </li>
              <li>
                <Link to="/machines" className="hover:text-primary-foreground transition-colors">
                  Machines
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Diensten */}
          <div>
            <h4 className="font-bold text-primary-foreground text-sm mb-4 uppercase tracking-wider">
              Diensten
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/nieuwbouw" className="hover:text-primary-foreground transition-colors">
                  Nieuwbouw
                </Link>
              </li>
              <li>
                <Link to="/renovatie" className="hover:text-primary-foreground transition-colors">
                  Renovatie
                </Link>
              </li>
              <li>
                <Link to="/waterschade" className="hover:text-primary-foreground transition-colors">
                  Waterschade
                </Link>
              </li>
            </ul>
          </div>

          {/* Openingsuren */}
          <div>
            <h4 className="font-bold text-primary-foreground text-sm mb-4 uppercase tracking-wider">
              Openingsuren
            </h4>
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span>Ma - Vr</span>
                <span>08:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>Zaterdag</span>
                <span>09:00 - 12:00</span>
              </div>
              <div className="flex justify-between">
                <span>Zondag</span>
                <span>Gesloten</span>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
          &copy; {new Date().getFullYear()} Vernast Vochtbestrijding. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

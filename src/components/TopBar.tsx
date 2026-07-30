import { Phone, Mail, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const TopBar = () => {
  return (
    <div className="bg-foreground text-background text-sm py-2">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="tel:+32123456789" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">+32 (0)3 123 45 67</span>
          </a>
          <a href="mailto:info@vernast-bouwdrogers.be" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="h-3.5 w-3.5" />
            <span className="hidden md:inline">info@vernast-bouwdrogers.be</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
          <Button size="sm" className="text-xs font-semibold tracking-wide uppercase">
            Gratis Offerte
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

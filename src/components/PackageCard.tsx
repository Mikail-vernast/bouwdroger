import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Wind, Flame, Check } from "lucide-react";
import type { PackageResult } from "@/lib/pricing";
import { cn } from "@/lib/utils";

interface PackageCardProps {
  pkg: PackageResult;
  recommended?: boolean;
  onSelect: (pkg: PackageResult) => void;
}

const PackageCard = ({ pkg, recommended = false, onSelect }: PackageCardProps) => {
  return (
    <Card
      className={cn(
        "relative transition-all duration-300 hover:shadow-lg",
        recommended
          ? "border-primary shadow-md ring-2 ring-primary/20 scale-[1.02]"
          : "border-border hover:border-primary/30"
      )}
    >
      {recommended && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1">
          Aanbevolen
        </Badge>
      )}

      <CardHeader className="text-center pb-2">
        <CardTitle className="text-xl font-bold">{pkg.label}</CardTitle>
        <p className="text-sm text-muted-foreground">{pkg.description}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Price */}
        <div className="text-center py-3 border-y border-border">
          <div className="text-3xl font-black text-primary">
            €{pkg.totalPrice.toFixed(0)}
          </div>
          <p className="text-xs text-muted-foreground">
            totaal voor {pkg.durationDays} dagen (excl. BTW)
          </p>
          {pkg.discountPercentage > 0 && (
            <Badge variant="secondary" className="mt-1 text-xs">
              -{pkg.discountPercentage}% duurkorting
            </Badge>
          )}
        </div>

        {/* Equipment */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Droplets className="h-4 w-4 text-primary flex-shrink-0" />
            <span>{pkg.equipment.drogers}x Bouwdroger</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Wind className="h-4 w-4 text-primary flex-shrink-0" />
            <span>{pkg.equipment.ventilatoren}x Ventilator</span>
          </div>
          {pkg.equipment.verwarming > 0 && (
            <div className="flex items-center gap-2 text-sm">
              <Flame className="h-4 w-4 text-primary flex-shrink-0" />
              <span>{pkg.equipment.verwarming}x Verwarming</span>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="space-y-1.5 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Check className="h-3 w-3 text-primary" />
            <span>€{pkg.pricePerDay.toFixed(0)}/dag · €{pkg.pricePerWeek.toFixed(0)}/week</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="h-3 w-3 text-primary" />
            <span>
              {pkg.deliveryCost === 0 ? "Gratis levering & ophaling" : `Levering: €${pkg.deliveryCost}`}
            </span>
          </div>
          {pkg.discount > 0 && (
            <div className="flex items-center gap-1.5">
              <Check className="h-3 w-3 text-primary" />
              <span>U bespaart €{pkg.discount.toFixed(0)}</span>
            </div>
          )}
        </div>

        <Button
          className="w-full font-bold"
          size="lg"
          variant={recommended ? "default" : "outline"}
          onClick={() => onSelect(pkg)}
        >
          Kies dit pakket
        </Button>
      </CardContent>
    </Card>
  );
};

export default PackageCard;

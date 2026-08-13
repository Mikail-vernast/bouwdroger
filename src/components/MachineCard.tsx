import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Reveal from "@/components/Reveal";

export interface MachineCardProps {
  name: string;
  volume: string;
  desc?: string;
  price?: string;
  badge?: string | null;
  highlight?: boolean;
  index?: number;
  /** Optional specs rows */
  specs?: { label: string; value: string }[];
  /** Optional pricing tiers */
  pricingTiers?: { label: string; price: string }[];
  /** CTA label override */
  ctaLabel?: string;
  /** Show placeholder image */
  showImage?: boolean;
}

const MachineCard = ({
  name,
  volume,
  desc,
  price,
  badge,
  highlight = false,
  index = 0,
  specs,
  pricingTiers,
  ctaLabel,
  showImage = false,
}: MachineCardProps) => {
  const navigate = useNavigate();
  const isHighlighted = highlight || badge === "Meest gekozen" || badge === "Aanbevolen";

  return (
    <Reveal
      from="up"
      delay={index * 0.08}
      className={`relative bg-card rounded-2xl p-6 text-center transition-shadow hover:shadow-xl ${
        isHighlighted
          ? "border-2 border-primary ring-2 ring-primary/10 bg-[hsl(30,100%,98%)]"
          : "border border-border"
      }`}
    >
      {isHighlighted && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 whitespace-nowrap gap-1">
          ⭐ {badge || "Meest gekozen"}
        </Badge>
      )}
      {!isHighlighted && badge && (
        <Badge variant="secondary" className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 whitespace-nowrap">
          {badge}
        </Badge>
      )}

      {showImage && (
        <div className="bg-muted/50 aspect-[4/3] rounded-xl flex items-center justify-center text-muted-foreground font-medium mb-4 -mx-2 -mt-2">
          Foto {name.split(" ")[1]}
        </div>
      )}

      <div className={`${showImage ? "" : "mt-2"}`}>
        <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-3">
          <Zap className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-black text-foreground">{name}</h3>
        <p className="text-sm font-semibold text-primary mb-1">{volume}</p>
        {desc && <p className="text-sm text-muted-foreground mb-4">{desc}</p>}
      </div>

      {specs && (
        <div className="border border-border rounded-xl divide-y divide-border mb-5">
          {specs.map((s) => (
            <div key={s.label} className="flex justify-between px-4 py-2.5 text-sm">
              <span className="text-muted-foreground">{s.label}</span>
              <span className="font-semibold text-foreground text-right">{s.value}</span>
            </div>
          ))}
        </div>
      )}

      {pricingTiers && (
        <div className="border border-border rounded-xl divide-y divide-border mb-5">
          {pricingTiers.map((tier) => (
            <div key={tier.label} className="flex justify-between items-center px-4 py-2.5 text-sm">
              <span className="text-muted-foreground">{tier.label}</span>
              <span className="font-bold text-foreground">€{tier.price}</span>
            </div>
          ))}
        </div>
      )}

      {price && !pricingTiers && (
        <div className="mb-4">
          <span className="text-2xl font-black text-foreground">€{price}</span>
          <span className="text-sm text-muted-foreground">/week</span>
        </div>
      )}

      <Button
        className="w-full rounded-full font-semibold gap-2 min-h-[44px]"
        variant={isHighlighted ? "default" : "outline"}
        onClick={() => navigate(`/reserveren?machine=${encodeURIComponent(name)}`)}
      >
        {ctaLabel || `Reserveer ${name.split(" ")[1]}`} <ArrowRight className="h-4 w-4" />
      </Button>
    </Reveal>
  );
};

export default MachineCard;

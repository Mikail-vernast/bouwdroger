export type RoomType = "pleisterwerk" | "chape" | "beide" | "waterschade";
export type PackageTier = "basic" | "comfort" | "pro";

export interface EquipmentCount {
  drogers: number;
  ventilatoren: number;
  verwarming: number;
}

export interface PackageResult {
  tier: PackageTier;
  label: string;
  description: string;
  equipment: EquipmentCount;
  pricePerDay: number;
  pricePerWeek: number;
  totalPrice: number;
  discount: number;
  discountPercentage: number;
  durationDays: number;
  deliveryCost: number;
}

const BASE_PRICES = {
  droger: 12,
  ventilator: 5,
  verwarming: 3,
};

const ROOM_RATIOS: Record<RoomType, { drogerPerSqm: number; ventilatorPerSqm: number; verwarming: number }> = {
  pleisterwerk: { drogerPerSqm: 50, ventilatorPerSqm: 100, verwarming: 0 },
  chape: { drogerPerSqm: 30, ventilatorPerSqm: 80, verwarming: 1 },
  beide: { drogerPerSqm: 25, ventilatorPerSqm: 60, verwarming: 1 },
  waterschade: { drogerPerSqm: 20, ventilatorPerSqm: 50, verwarming: 1 },
};

const TIER_MULTIPLIERS: Record<PackageTier, number> = {
  basic: 1,
  comfort: 1.5,
  pro: 2,
};

const TIER_LABELS: Record<PackageTier, { label: string; description: string }> = {
  basic: { label: "Basic", description: "Minimale configuratie voor standaard droging" },
  comfort: { label: "Comfort", description: "Aanbevolen voor optimale droogtijden" },
  pro: { label: "Pro", description: "Maximale capaciteit voor snelste resultaat" },
};

function getDiscountPercentage(days: number): number {
  if (days >= 56) return 20;
  if (days >= 28) return 15;
  if (days >= 14) return 10;
  return 0;
}

function calculateBaseEquipment(sqm: number, roomType: RoomType): EquipmentCount {
  const ratios = ROOM_RATIOS[roomType];
  return {
    drogers: Math.max(1, Math.ceil(sqm / ratios.drogerPerSqm)),
    ventilatoren: Math.max(1, Math.ceil(sqm / ratios.ventilatorPerSqm)),
    verwarming: ratios.verwarming,
  };
}

function applyTierMultiplier(base: EquipmentCount, tier: PackageTier): EquipmentCount {
  const mult = TIER_MULTIPLIERS[tier];
  return {
    drogers: Math.ceil(base.drogers * mult),
    ventilatoren: Math.ceil(base.ventilatoren * mult),
    verwarming: base.verwarming > 0 ? Math.ceil(base.verwarming * mult) : 0,
  };
}

function calculateDailyPrice(eq: EquipmentCount): number {
  return eq.drogers * BASE_PRICES.droger + eq.ventilatoren * BASE_PRICES.ventilator + eq.verwarming * BASE_PRICES.verwarming;
}

export function calculatePackages(sqm: number, roomType: RoomType, durationDays: number): PackageResult[] {
  const baseEquipment = calculateBaseEquipment(sqm, roomType);
  const discountPct = getDiscountPercentage(durationDays);
  const deliveryCost = durationDays >= 14 ? 0 : 25;

  const tiers: PackageTier[] = ["basic", "comfort", "pro"];

  return tiers.map((tier) => {
    const equipment = applyTierMultiplier(baseEquipment, tier);
    const dailyPrice = calculateDailyPrice(equipment);
    const subtotal = dailyPrice * durationDays;
    const discount = subtotal * (discountPct / 100);
    const totalPrice = subtotal - discount + deliveryCost;

    return {
      tier,
      label: TIER_LABELS[tier].label,
      description: TIER_LABELS[tier].description,
      equipment,
      pricePerDay: dailyPrice,
      pricePerWeek: dailyPrice * 7,
      totalPrice: Math.round(totalPrice * 100) / 100,
      discount: Math.round(discount * 100) / 100,
      discountPercentage: discountPct,
      durationDays,
      deliveryCost,
    };
  });
}

export function getRoomTypeLabel(type: RoomType): string {
  const labels: Record<RoomType, string> = {
    pleisterwerk: "Pleisterwerk",
    chape: "Chape",
    beide: "Pleisterwerk & Chape",
    waterschade: "Waterschade",
  };
  return labels[type];
}

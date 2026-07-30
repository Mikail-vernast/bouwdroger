import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

type Category = "all" | "bouwdrogers" | "ventilatoren" | "verwarming";

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "Alle producten" },
  { value: "bouwdrogers", label: "Bouwdrogers" },
  { value: "ventilatoren", label: "Ventilatoren" },
  { value: "verwarming", label: "Verwarming" },
];

const ShopPage = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          badge="Onze apparatuur"
          title="Professionele bouwdrogers & accessoires"
          subtitle="Bekijk ons volledige assortiment ECO-bouwdrogers, ventilatoren en verwarmingstoestellen. Allemaal professioneel onderhouden en direct beschikbaar."
        />

        {/* Filters */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat.value
                      ? "bg-accent text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden group cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <div className="aspect-square bg-muted/30 p-6 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      {product.category === "bouwdrogers" ? "Bouwdroger" : product.category === "ventilatoren" ? "Ventilator" : "Verwarming"}
                    </span>
                    <h3 className="font-bold text-foreground mt-1 mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{product.capacity} · {product.suitableFor}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-black text-accent">€{product.pricePerDay}<span className="text-xs font-normal text-muted-foreground">/dag</span></span>
                      <Button size="sm" className="bg-accent text-primary-foreground hover:bg-accent/90 rounded-full text-xs px-4">
                        Bekijk
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShopPage;

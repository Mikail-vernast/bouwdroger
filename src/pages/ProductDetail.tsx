import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, Phone } from "lucide-react";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <TopBar />
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Product niet gevonden</h1>
          <Button asChild>
            <Link to="/#producten">Terug naar overzicht</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const allImages = [product.image, ...(product.gallery || [])];

  const categoryLabels: Record<string, string> = {
    bouwdrogers: "Bouwdroger",
    ventilatoren: "Ventilator",
    verwarming: "Verwarming",
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/#producten" className="hover:text-primary transition-colors capitalize">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="bg-secondary rounded-2xl p-8 flex items-center justify-center aspect-square">
              <img
                src={allImages[activeImage]}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            {allImages.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImage === i ? "border-primary" : "border-border hover:border-primary/30"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <Badge variant="secondary" className="mb-3">
                {categoryLabels[product.category]}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-black text-foreground mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground">
                Capaciteit: {product.capacity} · Geschikt voor {product.suitableFor}
              </p>
            </div>

            <div className="border-y border-border py-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-primary">
                  €{product.pricePerDay.toFixed(2)}
                </span>
                <span className="text-muted-foreground">/dag excl. BTW</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Korting bij langere huurperiodes · Gratis levering vanaf 2 weken
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-foreground">Kenmerken</h3>
              {product.features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{f}</span>
                </div>
              ))}
            </div>

            {/* Specs table */}
            {product.specs && (
              <div className="space-y-3">
                <h3 className="font-bold text-foreground">Specificaties</h3>
                <div className="bg-secondary rounded-xl overflow-hidden">
                  {Object.entries(product.specs).map(([key, value], i) => (
                    <div
                      key={key}
                      className={`flex justify-between px-4 py-3 text-sm ${
                        i % 2 === 0 ? "" : "bg-background/50"
                      }`}
                    >
                      <span className="text-muted-foreground">{key}</span>
                      <span className="font-semibold text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                size="lg"
                className="font-bold text-base"
                onClick={() => navigate("/booking", { state: { productId: product.id } })}
              >
                Huur dit product
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-bold text-base"
                onClick={() => navigate("/#configurator")}
              >
                Gebruik de calculator
              </Button>
            </div>

            <div className="bg-secondary rounded-xl p-5 flex items-center gap-4">
              <Phone className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm">Advies nodig?</p>
                <p className="text-sm text-muted-foreground">
                  Bel ons op <a href="tel:+3236899065" className="text-primary font-semibold hover:underline">03 689 90 65</a> voor gratis advies.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Back link */}
        <div className="mt-12">
          <Button variant="ghost" onClick={() => navigate(-1)} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Terug
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;

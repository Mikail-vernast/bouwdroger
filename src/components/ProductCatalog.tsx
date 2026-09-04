import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { productPath, products } from "@/data/products";
import Reveal from "@/components/Reveal";

const categories = [
  { value: "bouwdrogers", label: "Bouwdrogers" },
  { value: "ventilatoren", label: "Ventilatoren" },
  { value: "verwarming", label: "Verwarming" },
] as const;

const ProductCatalog = () => {
  return (
    <section id="producten" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Reveal
          from="up"
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Ons Aanbod
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professionele machines voor elk droog- en verwarmingsproject.
            Alle prijzen excl. btw.
          </p>
        </Reveal>

        <Tabs defaultValue="bouwdrogers" className="w-full">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-10 h-12">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.value}
                value={cat.value}
                className="text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.value} value={cat.value}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products
                  .filter((p) => p.category === cat.value)
                  .map((product, index) => (
                    <Reveal
                      from="up"
                      delay={index * 0.1}
                      key={product.id}
                    >
                      <Card className="h-full flex flex-col hover:shadow-lg transition-shadow group">
                        <div className="aspect-[4/3] bg-secondary flex items-center justify-center overflow-hidden rounded-t-lg p-4">
                          <img
                            src={product.image}
                            alt={product.imageAlt}
                            className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform"
                            loading="lazy"
                          />
                        </div>
                        <CardContent className="flex-1 pt-5">
                          <h3 className="font-bold text-foreground text-lg">
                            {product.name}
                          </h3>
                          <Badge variant="secondary" className="mt-2 mb-3">
                            {product.capacity}
                          </Badge>
                          <p className="text-sm text-muted-foreground mb-3">
                            Geschikt voor: {product.suitableFor}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {product.features.map((f) => (
                              <span
                                key={f}
                                className="text-xs bg-secondary text-muted-foreground px-2 py-1 rounded"
                              >
                                {f}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="flex items-center justify-between border-t pt-4">
                          <div>
                            <span className="text-2xl font-black text-primary">
                              €{product.pricePerDay.toFixed(2)}
                            </span>
                            <span className="text-sm text-muted-foreground ml-1">
                              /dag
                            </span>
                          </div>
                          {/*
                            Een `<Link>`, geen knop met een `onClick`. Dit
                            blok staat op /afhalen, dat wél geïndexeerd wordt,
                            en een navigatie in een klik-handler is voor een
                            crawler geen link: er stond hier acht keer een
                            "Meer info" waar niets achter zat. En het doel was
                            /product/:id, dat op noindex staat — nu de
                            toestelpagina, zie `productPath`.
                          */}
                          <Button size="sm" variant="outline" asChild>
                            <Link to={productPath(product.id)}>Meer info</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </Reveal>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProductCatalog;

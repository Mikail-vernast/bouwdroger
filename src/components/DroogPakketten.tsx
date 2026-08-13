import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Reveal from "@/components/Reveal";

type Category = "verwarming" | "chape" | "chapedrogen" | "pleister" | "pleisterverwarming";

const verwarmingPackages = [
  { id: 1, title: "Pakket S", subtitle: "Tot 50 m²", image: "/products/pakket-1.webp", drogers: 1, ventilatoren: 1, verwarming: 1 },
  { id: 2, title: "Pakket M", subtitle: "Tot 100 m²", image: "/products/pakket-2.webp", drogers: 1, ventilatoren: 2, verwarming: 1 },
  { id: 3, title: "Pakket L", subtitle: "Tot 150 m²", image: "/products/pakket-3.webp", drogers: 2, ventilatoren: 3, verwarming: 1 },
  { id: 4, title: "Pakket XL", subtitle: "Tot 200 m²", image: "/products/pakket-4.webp", drogers: 3, ventilatoren: 3, verwarming: 2 },
  { id: 5, title: "Pakket XXL", subtitle: "Tot 250 m²", image: "/products/pakket-5.webp", drogers: 4, ventilatoren: 4, verwarming: 2 },
  { id: 6, title: "Pakket 3XL", subtitle: "Tot 300 m²", image: "/products/pakket-6.webp", drogers: 5, ventilatoren: 4, verwarming: 2 },
];

const chapePackages = [
  { id: 1, title: "Pakket S", subtitle: "Tot 50 m²", image: "/products/chape-pakket-1.webp", drogers: 1, ventilatoren: 1, verwarming: 0 },
  { id: 2, title: "Pakket M", subtitle: "Tot 100 m²", image: "/products/chape-pakket-2.webp", drogers: 1, ventilatoren: 2, verwarming: 0 },
  { id: 3, title: "Pakket L", subtitle: "Tot 150 m²", image: "/products/chape-pakket-3.webp", drogers: 2, ventilatoren: 3, verwarming: 0 },
  { id: 4, title: "Pakket XL", subtitle: "Tot 200 m²", image: "/products/chape-pakket-4.webp", drogers: 3, ventilatoren: 3, verwarming: 0 },
  { id: 5, title: "Pakket XXL", subtitle: "Tot 250 m²", image: "/products/chape-pakket-5.webp", drogers: 4, ventilatoren: 4, verwarming: 0 },
  { id: 6, title: "Pakket 3XL", subtitle: "Tot 300 m²", image: "/products/chape-pakket-6.webp", drogers: 5, ventilatoren: 4, verwarming: 0 },
];

const chapeDrogenPackages = [
  { id: 1, title: "Pakket S", subtitle: "Tot 50 m²", image: "/products/chape-drogen-1.webp", drogers: 1, ventilatoren: 1, verwarming: 0 },
  { id: 2, title: "Pakket M", subtitle: "Tot 100 m²", image: "/products/chape-drogen-2.webp", drogers: 1, ventilatoren: 2, verwarming: 0 },
  { id: 3, title: "Pakket L", subtitle: "Tot 150 m²", image: "/products/chape-drogen-3.webp", drogers: 2, ventilatoren: 3, verwarming: 0 },
  { id: 4, title: "Pakket XL", subtitle: "Tot 200 m²", image: "/products/chape-drogen-4.webp", drogers: 3, ventilatoren: 3, verwarming: 0 },
  { id: 5, title: "Pakket XXL", subtitle: "Tot 250 m²", image: "/products/chape-drogen-5.webp", drogers: 4, ventilatoren: 4, verwarming: 0 },
  { id: 6, title: "Pakket 3XL", subtitle: "Tot 300 m²", image: "/products/chape-drogen-6.webp", drogers: 5, ventilatoren: 4, verwarming: 0 },
];

const pleisterPackages = [
  { id: 1, title: "Pakket S", subtitle: "Tot 50 m²", image: "/products/pleister-1.webp", drogers: 1, ventilatoren: 1, verwarming: 0 },
  { id: 2, title: "Pakket M", subtitle: "Tot 100 m²", image: "/products/pleister-2.webp", drogers: 1, ventilatoren: 2, verwarming: 0 },
  { id: 3, title: "Pakket L", subtitle: "Tot 150 m²", image: "/products/pleister-3.webp", drogers: 2, ventilatoren: 3, verwarming: 0 },
  { id: 4, title: "Pakket XL", subtitle: "Tot 200 m²", image: "/products/pleister-4.webp", drogers: 3, ventilatoren: 3, verwarming: 0 },
  { id: 5, title: "Pakket XXL", subtitle: "Tot 250 m²", image: "/products/pleister-5.webp", drogers: 4, ventilatoren: 4, verwarming: 0 },
  { id: 6, title: "Pakket 3XL", subtitle: "Tot 300 m²", image: "/products/pleister-6.webp", drogers: 5, ventilatoren: 4, verwarming: 0 },
  { id: 7, title: "Pakket 4XL", subtitle: "Tot 350 m²", image: "/products/pleister-7.webp", drogers: 5, ventilatoren: 4, verwarming: 0 },
  { id: 8, title: "Pakket 5XL", subtitle: "Tot 400 m²", image: "/products/pleister-8.webp", drogers: 6, ventilatoren: 5, verwarming: 0 },
  { id: 9, title: "Pakket 6XL", subtitle: "Tot 450 m²", image: "/products/pleister-9.webp", drogers: 6, ventilatoren: 5, verwarming: 0 },
];

const pleisterVerwarmingPackages = [
  { id: 1, title: "Pakket S", subtitle: "Tot 50 m²", image: "/products/pleister-10.webp", drogers: 1, ventilatoren: 1, verwarming: 1 },
  { id: 2, title: "Pakket M", subtitle: "Tot 100 m²", image: "/products/pleister-11.webp", drogers: 1, ventilatoren: 2, verwarming: 1 },
  { id: 3, title: "Pakket L", subtitle: "Tot 150 m²", image: "/products/pleister-12.webp", drogers: 2, ventilatoren: 3, verwarming: 1 },
  { id: 4, title: "Pakket XL", subtitle: "Tot 200 m²", image: "/products/pleister-13.webp", drogers: 3, ventilatoren: 3, verwarming: 2 },
  { id: 5, title: "Pakket XXL", subtitle: "Tot 250 m²", image: "/products/pleister-14.webp", drogers: 4, ventilatoren: 4, verwarming: 2 },
  { id: 6, title: "Pakket 3XL", subtitle: "Tot 300 m²", image: "/products/pleister-15.webp", drogers: 5, ventilatoren: 4, verwarming: 2 },
  { id: 7, title: "Pakket 4XL", subtitle: "Tot 350 m²", image: "/products/pleister-16.webp", drogers: 5, ventilatoren: 4, verwarming: 2 },
  { id: 8, title: "Pakket 5XL", subtitle: "Tot 400 m²", image: "/products/pleister-17.webp", drogers: 6, ventilatoren: 4, verwarming: 2 },
  { id: 9, title: "Pakket 6XL", subtitle: "Tot 450 m²", image: "/products/pleister-18.webp", drogers: 6, ventilatoren: 5, verwarming: 3 },
  { id: 10, title: "Pakket 7XL", subtitle: "Tot 500 m²", image: "/products/pleister-19.webp", drogers: 2, ventilatoren: 3, verwarming: 2 },
];

const DroogPakketten = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState<Category>("verwarming");

  const packageMap: Record<Category, typeof verwarmingPackages> = {
    verwarming: verwarmingPackages,
    chape: chapePackages,
    chapedrogen: chapeDrogenPackages,
    pleister: pleisterPackages,
    pleisterverwarming: pleisterVerwarmingPackages,
  };
  const packages = packageMap[category];

  return (
    <section id="pakketten" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <Reveal
          from="up"
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Droogpakketten
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Alles in één droogservice. Kies een pakket op maat van uw project of
            gebruik de calculator voor een advies op maat.
          </p>

          {/* Category tabs */}
          <div className="inline-flex bg-background rounded-xl p-1 gap-1 shadow-sm">
            <button
              onClick={() => setCategory("verwarming")}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                category === "verwarming"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Chape & Verwarming
            </button>
            <button
              onClick={() => setCategory("chape")}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                category === "chape"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Chape & Pleister drogen
            </button>
            <button
              onClick={() => setCategory("chapedrogen")}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                category === "chapedrogen"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Chape drogen
            </button>
            <button
              onClick={() => setCategory("pleister")}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                category === "pleister"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Pleister drogen
            </button>
            <button
              onClick={() => setCategory("pleisterverwarming")}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                category === "pleisterverwarming"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Pleister & Verwarming
            </button>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <Reveal
              from="up"
              delay={index * 0.1}
              key={`${category}-${pkg.id}`}
              className="group cursor-pointer"
              onClick={() => navigate("/booking")}
            >
              <div className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground">{pkg.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{pkg.subtitle}</p>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span>{pkg.drogers}x Droger</span>
                    <span>{pkg.ventilatoren}x Ventilator</span>
                    {pkg.verwarming > 0 && <span>{pkg.verwarming}x Kachel</span>}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            size="lg"
            className="font-bold"
            onClick={() => navigate("/calculator")}
          >
            Bereken uw pakket op maat
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DroogPakketten;

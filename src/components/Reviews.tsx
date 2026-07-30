import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Jan De Smedt",
    type: "Aannemer",
    rating: 5,
    text: "Uitstekende service! Machines werden op tijd geleverd en werkten perfect. De vochtmeting bij levering was een echte meerwaarde.",
  },
  {
    name: "Sophie Willems",
    type: "Particulier",
    rating: 5,
    text: "Na waterschade had ik dringend een bouwdroger nodig. Vernast reageerde snel en professioneel. Alles was binnen 24u opgelost.",
  },
  {
    name: "Bart Van Hoeck",
    type: "Renovatiebedrijf",
    rating: 4,
    text: "Wij werken al jaren samen met Vernast voor onze renovatieprojecten. Betrouwbaar, correct geprijsd en altijd bereikbaar.",
  },
];

const Reviews = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="mb-4">
            <span className="text-5xl font-black text-primary">4.8 / 5</span>
          </div>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">op Google Reviews</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary rounded-xl p-6"
            >
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              <p className="text-foreground text-sm mb-4 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">{review.name}</div>
                  <div className="text-muted-foreground text-xs">{review.type}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

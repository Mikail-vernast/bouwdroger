globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/reviews.ts");
const REVIEWS_LIST = [
  {
    name: "Matt Demyttenaere",
    initials: "MD",
    text: "Snelle respons en dezelfde dag nog een droger geïnstalleerd. Top service!",
    rating: 5,
    date: "okt 2023",
    source: "Google",
    service: "Bouwdroger geïnstalleerd",
    featured: true
  },
  {
    name: "Ingrid Janssens",
    initials: "IJ",
    text: "Zeer goede service en flexibiliteit. Werken zijn uitstekend uitgevoerd. Vriendelijk personeel. Firma zeker aan te raden.",
    rating: 5,
    date: "mrt 2025",
    source: "Google"
  },
  {
    name: "Leo",
    initials: "LO",
    text: "We zijn bijzonder tevreden. Het personeel is professioneel én vriendelijk. Het werk is grondig uitgevoerd. Bovendien werd het achteraf goed opgevolgd.",
    rating: 5,
    date: "sep 2024",
    source: "Solvari"
  },
  {
    name: "Yolande",
    initials: "YL",
    text: "De firma Vernast heeft ons goed geholpen tijdens de renovatie van een oude loods. De samenwerking is bijzonder vlot en volledig volgens de afspraak verlopen.",
    rating: 5,
    date: "jan 2025",
    source: "Google"
  },
  {
    name: "Isabel De Maesschalck",
    initials: "IM",
    text: "Professional company, good communication. Very friendly lady Sumeyye made a clear quote, explained well and the price was correct. Quote was done on the spot, this was very efficient.",
    rating: 5,
    date: "mei 2025",
    source: "Google"
  }
];
function eersteReviews(aantal) {
  const eerst = REVIEWS_LIST.filter((review) => review.featured);
  const rest = REVIEWS_LIST.filter((review) => !review.featured);
  return [...eerst, ...rest].slice(0, aantal);
}
export {
  REVIEWS_LIST as R,
  eersteReviews as e
};

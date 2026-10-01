import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/verhuur";

/**
 * Het blok "verder lezen" onderaan de inhoudspagina's: realisaties, toestellen,
 * de calculator en een provinciepagina.
 *
 * /nieuwbouw, /waterschade, /renovatie, /prijzen en /machines linkten nergens
 * heen behalve naar de telefoon. Voor een crawler waren het daardoor
 * doodlopende pagina's zonder context, en de realisaties die precies bewijzen
 * wat de tekst belooft stonden er los van. Eén component, zodat de vijf
 * pagina's hetzelfde patroon volgen.
 *
 * Een toestellink valt stil weg zodra het portaal dat toestel niet meer
 * verhuurt (`PRODUCTS[key]` bestaat dan niet): de pagina /verhuur/toestel/<key>
 * wordt in dat geval ook niet meer geprerenderd, en een link ernaartoe zou een
 * 404 opleveren.
 */
export interface LeesLink {
  to: string;
  /** Beschrijvende ankertekst — geen "klik hier". */
  label: string;
  /** Eén regel uitleg onder de link. */
  sub?: string;
  /** Sleutel in `PRODUCTS` wanneer de link naar een toestelpagina gaat. */
  toestel?: string;
}

export interface LeesGroep {
  kop: string;
  links: LeesLink[];
}

const VerderLezen = ({ titel, groepen }: { titel: string; groepen: LeesGroep[] }) => {
  const zichtbaar = groepen
    .map((g) => ({ ...g, links: g.links.filter((l) => !l.toestel || PRODUCTS[l.toestel]) }))
    .filter((g) => g.links.length > 0);

  return (
    <section className="py-14 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-black text-foreground text-center mb-10">{titel}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {zichtbaar.map((groep) => (
            <div key={groep.kop} className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-foreground mb-4">{groep.kop}</h3>
              <ul className="space-y-3">
                {groep.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="inline-flex items-start gap-1.5 text-sm font-semibold text-primary hover:underline"
                    >
                      <ArrowRight className="h-4 w-4 flex-shrink-0 mt-0.5" />
                      <span>{link.label}</span>
                    </Link>
                    {link.sub && <p className="text-xs text-muted-foreground mt-1 ml-5">{link.sub}</p>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerderLezen;

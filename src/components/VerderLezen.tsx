import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@/components/home-v3/icons";
import Reveal from "@/components/Reveal";
import { PRODUCTS } from "@/data/verhuur";

/**
 * Het blok "verder lezen" onderaan de inhoudspagina's: realisaties, toestellen,
 * de calculator en een provinciepagina.
 *
 * /nieuwbouw-drogen, /waterschade, /renovatie, /prijzen en /machines linkten nergens
 * heen behalve naar de telefoon. Voor een crawler waren het daardoor
 * doodlopende pagina's zonder context, en de realisaties die precies bewijzen
 * wat de tekst belooft stonden er los van. Eén component, zodat de vijf
 * pagina's hetzelfde patroon volgen.
 *
 * De markup is v3 (`.vl`, opmaak in src/styles/v3-content.css) sinds die vijf
 * pagina's van de shadcn-schil naar de v3-vormtaal gingen. Het component hangt
 * dus aan `.v3c`: zet je het buiten die schil, dan staat het kaal.
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

const VerderLezen = ({
  titel,
  groepen,
  /**
   * De sectieachtergrond: `sw` wit, `sw2` grijs, `sr` rood. De pagina kiest wat
   * in haar afwisseling past — de inhoudspagina's wisselen wit en rood af.
   */
  achtergrond = "sw",
  /** De rode kop boven de titel. `null` laat hem weg. */
  kicker = "Verder lezen",
  children,
}: {
  titel: string;
  groepen: LeesGroep[];
  achtergrond?: "sw" | "sw2" | "sr";
  kicker?: string | null;
  /**
   * Blok dat ónder de kaarten in dezelfde sectie komt — op /renovatie de rode
   * slotplaat. Die stond er als eigen witte sectie vlak achter deze, en twee
   * witte stroken achter elkaar lezen als één sectie met een gat erin.
   */
  children?: ReactNode;
}) => {
  const zichtbaar = groepen
    .map((g) => ({ ...g, links: g.links.filter((l) => !l.toestel || PRODUCTS[l.toestel]) }))
    .filter((g) => g.links.length > 0);

  return (
    <section className={achtergrond}>
      <div className="wrap">
        <div className="sec-head mid">
          {kicker && <span className="kick">{kicker}</span>}
          <h2 className="sec">{titel}</h2>
        </div>
        <div className="vl">
          {zichtbaar.map((groep, i) => (
            <Reveal from="up" delay={i * 0.08} className="vlcard" key={groep.kop}>
              <h3>{groep.kop}</h3>
              <ul>
                {groep.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}>
                      <ArrowRightIcon size={13} strokeWidth={2.6} />
                      <span>{link.label}</span>
                    </Link>
                    {link.sub && <p>{link.sub}</p>}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        {children}
      </div>
    </section>
  );
};

export default VerderLezen;

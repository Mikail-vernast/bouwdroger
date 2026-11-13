import type { ReactNode } from "react";
import { PhoneIcon } from "@/components/home-v3/icons";
import { CONTACT } from "@/lib/site";
import "@/styles/faq-blok.css";

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqBlokProps {
  /** Kleine kop boven de titel. */
  kicker?: string;
  titel: string;
  vragen: FaqItem[];
  /**
   * Voorvoegsel voor de id's van de schakelaars. Twee vragenblokken op één
   * pagina zouden anders elkaars `<label for>` oppikken.
   */
  sleutel: string;
  /** Achtergrond van de sectie: rood, wit of het grijs van de gidspagina's. */
  variant?: "rood" | "wit" | "grijs";
  /**
   * Blok dat ónder de vragen in dezelfde sectie komt, over de volle breedte.
   * Op /prijzen en de regiopagina's staat de rode slotplaat daar bewust: wie
   * de vragen gelezen heeft is klaar om te boeken, en een lege strook ertussen
   * brak dat moment.
   */
  children?: ReactNode;
  /** Waar "Stel uw vraag online" naartoe gaat. */
  vraagHref?: string;
  id?: string;
}

/**
 * Het vragenblok zoals op de homepage: links de titel met een hulpkaartje,
 * rechts de vragen met het plusje dat naar een kruisje draait.
 *
 * Waarom één component voor de hele site: de FAQ stond in drie vormen op de
 * site, en dat is precies het soort verschil dat niemand opmerkt tot je twee
 * pagina's naast elkaar legt. De opmaak hoort bij dit component
 * (src/styles/faq-blok.css), ongescoped, zodat hij in élke schil hetzelfde
 * oogt. Kopieer die regels niet terug naar een paginastylesheet.
 *
 * Het antwoord staat altijd in de HTML, ook als de vraag dicht staat: de
 * pagina's worden geprerenderd voor AI-antwoordmachines, en het FAQPage-schema
 * in de head mag niets beloven wat in de HTML ontbreekt. Daarom een checkbox
 * met `:has()` en geen JavaScript, en daarom geen `<details>`: binnen een
 * `<dl>` is een `<summary>` ongeldige HTML, en de test in
 * src/test/inhoudspaginas.test.tsx eist dat elke `<dt>` door een `<dd>` wordt
 * gevolgd.
 */
const FaqBlok = ({
  kicker = "Veelgestelde vragen",
  titel,
  vragen,
  sleutel,
  variant = "rood",
  vraagHref = "#formulier",
  id = "faq",
  children,
}: FaqBlokProps) => (
  <section className={`fq ${variant}`} id={id}>
    <div className="fq-wrap">
      <div className="fq-grid">
        <div className="fq-zij">
          <span className="fq-kick">{kicker}</span>
          <h2 className="fq-titel">{titel}</h2>
          <div className="fq-help">
            <h3>Staat uw vraag er niet bij?</h3>
            <p>Onze droogexperts helpen u meteen verder, met advies op maat van uw situatie.</p>
            <div className="fq-knoppen">
              <a className="fq-bel" href={`tel:${CONTACT.phoneE164}`}>
                <PhoneIcon /> Bel {CONTACT.phoneLocal}
              </a>
              <a className="fq-stel" href={vraagHref}>
                Stel uw vraag online
              </a>
            </div>
          </div>
        </div>

        <dl className="fq-lijst">
          {vragen.map((item, i) => (
            <div className="fq-item" key={item.q}>
              <dt>
                <input
                  className="fq-toggle"
                  type="checkbox"
                  id={`${sleutel}-${i}`}
                  defaultChecked={i === 0}
                />
                <label htmlFor={`${sleutel}-${i}`}>
                  {item.q}
                  <span className="fq-pl" aria-hidden="true">+</span>
                </label>
              </dt>
              <dd>
                <p>{item.a}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      {children}
    </div>
  </section>
);

export default FaqBlok;

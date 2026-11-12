import { Link } from "react-router-dom";
import { ArrowRightIcon, LeafIcon } from "@/components/home-v3/icons";
import Reveal from "@/components/Reveal";
import { DROGER_KAARTEN } from "@/data/tarieflijst";
import { PRODUCTS, productImageAlt } from "@/data/verhuur";

/**
 * De drie ontvochtigers als keuzeblok op een inhoudspagina — de v3-opvolger van de
 * oude `MachineCard`, die met die drie pagina's mee verdween.
 *
 * Wat er veranderde en waarom: de oude kaart toonde voor elk toestel hetzelfde
 * bliksemicoontje in een grijs vierkant, en een knop die altijd naar de
 * calculator ging. Drie identieke kaarten met een ander getal erop dus, terwijl
 * het portaal van elk toestel een foto publiceert. Nu staat die foto erop en
 * leidt de kaart naar de toestelpagina — de pagina die het toestel uitlegt —
 * met de calculator als tweede weg eronder.
 *
 * Prijzen en omschrijvingen komen uit `DROGER_KAARTEN`, dus uit de
 * gepubliceerde tarieven. Nooit een bedrag in een pagina overtypen.
 */
const Pakketkaarten = ({ ctaLabel = "Bekijk dit toestel" }: { ctaLabel?: string }) => (
  <div className="pkgs">
    {DROGER_KAARTEN.map((kaart, i) => {
      const product = PRODUCTS[kaart.key];
      return (
        <Reveal
          from="up"
          delay={i * 0.08}
          className={`pkg${kaart.highlight ? " top" : ""}`}
          key={kaart.key}
        >
          {kaart.badge && <span className="plab">{kaart.badge}</span>}
          {product && (
            <img
              src={product.img[0]}
              alt={productImageAlt(product, 0)}
              width={420}
              height={420}
              loading="lazy"
              decoding="async"
            />
          )}
          <h3>{kaart.name}</h3>
          <span className="pvol">{kaart.volume}</span>
          <p className="pdesc">{kaart.desc}</p>
          <div className="pprice">
            <b>€ {kaart.weekPrice}</b>
            <span>/week</span>
            <small>excl. btw · levering en vochtmeting inbegrepen</small>
          </div>
          <Link className={`btn${kaart.highlight ? "" : " btn-line"}`} to={kaart.path}>
            {ctaLabel}
            <ArrowRightIcon size={13} />
          </Link>
        </Reveal>
      );
    })}
    <p className="pkgs-foot">
      <LeafIcon size={13} />
      <span>
        Alle drie zijn eco-condensdrogers, te huur per dag of per week. Levering, plaatsing en de
        vochtmeting zitten in de prijs.
      </span>
    </p>
    {/*
      Deze drie kaarten zijn toestellen, geen pakketten. Dat onderscheid moet er
      staan: de Drooggarantie geldt alleen voor een pakket dat via de calculator
      berekend en mét installatie geboekt is, niet voor een los toestel. Zonder
      deze balk las de sectie als "kies hier uw pakket".
    */}
    <div className="pkgcta">
      <div className="pc-t">
        <b>Een volledige woning? Dan wordt het een droogpakket.</b>
        <p>
          Een pakket combineert droger, ventilator en indien nodig een bouwkachel, berekend op uw
          oppervlakte en op wat er moet drogen. Alleen op zo'n berekend pakket geldt onze{" "}
          <Link to="/drooggarantie">100 % drooggarantie</Link>: bij een los toestel kunnen we het
          resultaat niet garanderen.
        </p>
      </div>
      <Link className="btn btn-white" to="/verhuur/calculator">
        Stel uw pakket samen
        <ArrowRightIcon />
      </Link>
    </div>
  </div>
);

export default Pakketkaarten;

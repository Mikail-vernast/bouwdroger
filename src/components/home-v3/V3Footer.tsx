import { Link } from "react-router-dom";
import { FOOTER_SITEMAP, TOEPASSINGEN, VERNAST_GROEP } from "@/data/navigation";
import { REGIO_ROUTES } from "@/data/regio-slugs";
import { CONTACT, HEADQUARTERS, SITE_NAME } from "@/lib/site";
import "@/styles/site-footer.css";

/**
 * De voet van de hele site, in de vormtaal van de Vernast-groep.
 *
 * De maten komen van vernast-vochtbestrijding.be, opgemeten op de live site:
 * raster 1.5fr/1fr/1fr/1fr met 44 px, kolomkoppen van 11 px met 0,24 em
 * spatiëring op 48 % wit, links van 14 px op 70 %, rijafstand 15 px. Wie van
 * vernast.be naar deze site klikt hoort dezelfde voet te zien; daarom staat
 * hier geen eigen ontwerp maar dat van de zustersites. Alleen de wrap volgt
 * deze site (`--wrap`, 28 px marge) en niet die van de zusters, anders ligt de
 * footerinhoud niet in lijn met de sectie erboven.
 *
 * De footer droeg 36 links, waarvan dertien in één kolom "Service & info" —
 * zes daarvan naar een gids. Dat is teruggebracht naar 27: zie de toelichting
 * bij FOOTER_SITEMAP in src/data/navigation.ts voor wat eruit ging en waarom
 * geen van die pagina's daardoor een wees wordt.
 */
const V3Footer = () => (
  <footer className="site">
    <div className="wrap">
      <div className="fg">
        {/*
          Merkkolom. Het telefoonnummer stond hier als gewone link van 14 px
          tussen de andere; voor een verhuurbedrijf is bellen de belangrijkste
          actie van de pagina. Het is nu het enige element in de footer dat
          groter is dan de rest.
        */}
        <div className="lc">
          <img
            src="/vernast/logo-horizontal-white.webp"
            alt={SITE_NAME}
            width={399}
            height={66}
            loading="lazy"
            decoding="async"
          />
          <p className="pitch">
            Verhuur van eco-bouwdrogers, ventilatoren en bouwkachels, met drooggarantie en
            levering op de datum die u kiest.
          </p>
          <a className="tel" href={`tel:${CONTACT.phoneE164}`}>
            {CONTACT.phoneLocal}
          </a>
          <a className="mail" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>
          {/*
            Twee adressen, elk met zijn rol. Het magazijn is waar de klant
            komt; de zetel is wat de drie zustersites en de JSON-LD voeren.
            Zonder die tweede regel stond de zetel wél in de schema maar
            nergens zichtbaar op de pagina.
          */}
          <p className="adr">
            <b>Magazijn en afhaalpunt</b>
            {CONTACT.street}
            <br />
            {CONTACT.postalCode} {CONTACT.city} · Ma–Vr 08:00–17:00
            <br />
            Zetel: {HEADQUARTERS.street}, {HEADQUARTERS.postalCode} {HEADQUARTERS.city}
          </p>
        </div>

        <nav aria-labelledby="ft-diensten">
          <h2 id="ft-diensten">Diensten</h2>
          <ul>
            {TOEPASSINGEN.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="ft-sitemap">
          <h2 id="ft-sitemap">Sitemap</h2>
          <ul>
            {FOOTER_SITEMAP.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/*
          Twee korte lijsten in één kolom. Met Werkgebied en Vernast Groep elk
          als eigen kolom werd alles te smal — "Chape en pleisterwerk drogen"
          brak dan over twee regels — en liep de vierde kolom halverwege leeg
          terwijl de linkerkolom doorliep.
        */}
        <div className="stack">
          {/*
            De vijf regiopagina's. Dit is hun enige sitewide link: zonder deze
            lijst bestaan ze alleen via de sitemap. Ze stonden eerder als losse
            rij onderaan de footer, waar ze als bijzaak lazen; als gewone lijst
            tussen de andere kolommen tellen ze mee.
          */}
          <nav aria-labelledby="ft-werkgebied">
            <h2 id="ft-werkgebied">Werkgebied</h2>
            <ul>
              {REGIO_ROUTES.map((regio) => (
                <li key={regio.slug}>
                  <Link to={regio.path}>{regio.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="ft-groep">
            <h2 id="ft-groep">Vernast Groep</h2>
            <ul>
              {VERNAST_GROEP.map((entiteit) => (
                <li key={entiteit.label}>
                  {entiteit.href ? (
                    <a href={entiteit.href} target="_blank" rel="noopener noreferrer">
                      {entiteit.label}
                    </a>
                  ) : (
                    /*
                      Deze site zelf. Geen link: een verwijzing naar de pagina
                      waar je al bent zegt niets, en met vier zusterdomeinen in
                      één lijst is het juist nuttig te zien welk van de vier
                      openstaat.
                    */
                    <span className="here" aria-current="page">
                      {entiteit.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="fb">
        {/*
          Hier stond "BTW BE 0123.456.789" — een voorbeeldnummer uit een
          formulier-placeholder, gepubliceerd op elke pagina van de
          verhuurfunnel. Een verzonnen ondernemingsnummer is erger dan geen:
          het is onjuiste bedrijfsinformatie op een handelssite, en zowel
          Google als een AI-assistent neemt het over als feit. Zodra het
          echte nummer bekend is, hoort het hier terug.
        */}
        <div>
          © {new Date().getFullYear()} {SITE_NAME}
        </div>
        <div className="ft-legal">
          <Link to="/algemene-voorwaarden">Algemene voorwaarden</Link>
          <Link to="/privacy">Privacy</Link>
          <a href="/sitemap.xml">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
);

export default V3Footer;

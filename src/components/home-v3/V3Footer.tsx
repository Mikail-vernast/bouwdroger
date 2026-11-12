import { Link } from "react-router-dom";
import { FOOTER_SITEMAP, TOEPASSINGEN, VERNAST_GROEP } from "@/data/navigation";
import { REGIO_ROUTES } from "@/data/regio-slugs";
import { CONTACT, HEADQUARTERS, SITE_NAME } from "@/lib/site";
import "@/styles/site-footer.css";

/**
 * De voet van de hele site.
 *
 * Grond, letter en maatvoering volgen de Vernast-groep — opgemeten op
 * vernast-vochtbestrijding.be: #0a0a0c, Urbanist, kolomkoppen van 11 px met
 * 0,24 em spatiëring op 48 % wit, links van 14 px op 70 %, rijafstand 15 px.
 * Wie van vernast.be naar deze site klikt hoort dezelfde voet te zien.
 *
 * Wat deze site er bovenop doet, is de kaart: de vijf regiopagina's waren
 * overal een rij links onderaan, en dat is precies de plek waar ze het minst
 * uit halen. Nu staan ze als spelden op dezelfde kaart die /#regio gebruikt,
 * én als gewone links in de feitenbalk — die lijst is wat telt, want een
 * achtergrondafbeelding leest geen enkele zoekmachine.
 *
 * De footer droeg 36 links, waarvan dertien in één kolom "Service & info" —
 * zes daarvan naar een gids. Dat is teruggebracht; zie de toelichting bij
 * FOOTER_SITEMAP in src/data/navigation.ts voor wat eruit ging en waarom geen
 * van die pagina's daardoor een wees wordt.
 */
const V3Footer = () => (
  <footer className="site">
    <div className="wrap">
      <div className="fg">
        <div className="lc">
          <img
            src="/vernast/logo-horizontal-white.webp"
            alt={SITE_NAME}
            width={399}
            height={66}
            loading="lazy"
            decoding="async"
          />
          {/*
            Het accent stond eerst op een opgelichte rode (#E8384F) die naast
            het logo als roze las in plaats van als merkkleur. Omgedraaid: de
            aanloop fijn en gedempt, de belofte vet wit. Rood blijft daarmee
            van het logo en de spelden.
          */}
          <p className="say">
            Wij staan er. <em>In heel Vlaanderen.</em>
          </p>
          <a className="tel" href={`tel:${CONTACT.phoneE164}`}>
            {CONTACT.phoneLocal}
          </a>
          <a className="mail" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>
          <p className="claim">
            Drooggarantie inbegrepen. Levering op de datum die u kiest.
          </p>
        </div>

        <div>
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

          <nav aria-labelledby="ft-groep">
            <h2 id="ft-groep" className="later">
              Vernast Groep
            </h2>
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
          De kaart is versiering met snelkoppelingen erop, niet de navigatie
          zelf: `aria-hidden` en de spelden buiten de tabvolgorde. De echte
          links staan in de feitenbalk hieronder.

          De spelden droegen eerst hun provincienaam in een pil. Op deze maat
          vielen er vijf van de vijf over elkaar; nu een punt dat zijn naam
          toont zodra je hem aanwijst.
        */}
        <div className="ft-kaartkolom">
          <div className="ft-kaart" aria-hidden="true">
            {REGIO_ROUTES.map((regio) => (
              <Link key={regio.slug} className="ft-pin" to={regio.path} tabIndex={-1} style={regio.pin}>
                <span>{regio.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/*
        Vier afleesbare gegevens in plaats van één alinea waarin het adres
        wegvalt tussen de rest. Elk gegeven met zijn eigen label — dat is ook
        wat een AI-antwoordmachine eruit moet kunnen halen.
      */}
      <dl className="ft-feiten">
        <div>
          <dt>Bereikbaar</dt>
          <dd>
            <a href={`tel:${CONTACT.phoneE164}`}>{CONTACT.phoneLocal}</a>
            <br />
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </dd>
        </div>
        <div>
          <dt>Magazijn en afhaalpunt</dt>
          <dd>
            {CONTACT.street}
            <br />
            {CONTACT.postalCode} {CONTACT.city}
          </dd>
        </div>
        <div>
          <dt>Open</dt>
          {/*
            Alleen wat `CONTACT.openingHours` dekt. Hier stond even "Zaterdag
            en zondag gesloten", en dat spreekt de algemene voorwaarden tegen:
            die rekenen zaterdagochtend wél als werkdag.
          */}
          <dd>Ma–Vr 08:00–17:00</dd>
        </div>
        <div>
          <dt>Werkgebied</dt>
          <dd>
            <nav className="ft-prov" aria-label="Werkgebied">
              {REGIO_ROUTES.map((regio) => (
                <Link key={regio.slug} to={regio.path}>
                  {regio.name}
                </Link>
              ))}
            </nav>
          </dd>
        </div>
      </dl>

      <div className="fb">
        {/*
          Hier stond "BTW BE 0123.456.789" — een voorbeeldnummer uit een
          formulier-placeholder, gepubliceerd op elke pagina van de
          verhuurfunnel. Een verzonnen ondernemingsnummer is erger dan geen:
          het is onjuiste bedrijfsinformatie op een handelssite, en zowel
          Google als een AI-assistent neemt het over als feit. Zodra het
          echte nummer bekend is, hoort het hier terug.

          De zetel staat hier en niet in de feitenbalk: hij is wat de drie
          zustersites en de JSON-LD voeren, maar niet waar een klant naartoe
          rijdt. Zonder deze regel stond hij wél in de schema en nergens
          zichtbaar op de pagina.
        */}
        <div>
          © {new Date().getFullYear()} {SITE_NAME} · Zetel: {HEADQUARTERS.street},{" "}
          {HEADQUARTERS.postalCode} {HEADQUARTERS.city}
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

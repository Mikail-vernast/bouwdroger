import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import FaqBlok from "@/components/content/FaqBlok";
import ContactBlok from "@/components/content/ContactBlok";
import { ArrowRightIcon, PhoneIcon } from "@/components/home-v3/icons";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { CONTACT } from "@/lib/site";
import { useCopy, useLokaalPad } from "@/i18n/useTaal";
import { COPY, BEELDEN, LUCHTKUSSEN_PAD } from "./LuchtkussenDrogenPage.copy";
import "@/styles/v3-content.css";
import "@/styles/luchtkussen.css";

export default function LuchtkussenDrogenPage() {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  return <div className="v3c lk-page">
    <PageMeta title={`${t.titel} | Vernast`} description={t.description} path={lp(LUCHTKUSSEN_PAD)} image={BEELDEN[0]} jsonLd={[
      breadcrumbSchema([{name:t.home,path:lp("/")},{name:t.schade,path:lp("/waterschade")},{name:t.naam,path:lp(LUCHTKUSSEN_PAD)}]),
      serviceSchema({name:t.naam,description:t.description,path:lp(LUCHTKUSSEN_PAD),serviceType:t.naam}),
      faqSchema(t.faq.map(({q,a})=>({question:q,answer:a}))),
    ]}/>
    <V3Header darkUntil=".lk-hero" />
    <main>
      <section className="lk-hero redtop"><div className="wrap">
        <nav className="lk-crumb" aria-label={t.home}><Link to={lp("/")}>{t.home}</Link><span>/</span><Link to={lp("/waterschade")}>{t.schade}</Link><span>/</span><span>{t.naam}</span></nav>
        <div className="lk-intro"><div><span className="kick">{t.kick}</span><h1>{t.titel}.</h1></div><div><p>{t.intro}</p><div className="hcta"><a className="btn btn-white" href="#formulier">{t.cta}<ArrowRightIcon /></a><a className="lk-call" href={`tel:${CONTACT.phoneE164}`}><PhoneIcon />{CONTACT.phoneLocal}</a></div></div></div>
        <figure className="lk-hero-photo"><img src={BEELDEN[0]} alt={t.alt[0]} width={1536} height={1024} fetchPriority="high"/><figcaption>{t.captions[0]}</figcaption></figure>
      </div></section>
      <section className="sw"><div className="wrap lk-explain"><div><span className="kick">{t.naam}</span><h2 className="sec">{t.werking}</h2></div><div className="lk-prose">{t.uitleg.map(p=><p key={p}>{p}</p>)}</div></div></section>
      <section className="sw2"><div className="wrap"><div className="sec-head"><h2 className="sec">{t.toepassingen}</h2><p className="lede">{t.toepassingsIntro}</p></div><div className="lk-images">{BEELDEN.slice(1).map((src,i)=><figure key={src}><img src={src} alt={t.alt[i+1]} width={1536} height={1024} loading="lazy" decoding="async"/><figcaption>{t.captions[i+1]}</figcaption></figure>)}</div><p className="lk-note">{t.note}</p><div className="lk-suitability"><div><h3>{t.past}</h3><p>{t.pastText}</p></div><div><h3>{t.onderzoek}</h3><p>{t.onderzoekText}</p></div></div></div></section>
      <section className="sw"><div className="wrap"><div className="sec-head"><h2 className="sec">{t.aanpak}</h2></div><ol className="lk-steps">{t.stappen.map(([titel,tekst],i)=><li key={titel}><span className="lk-number">0{i+1}</span><h3>{titel}</h3><p>{tekst}</p></li>)}</ol><div className="lk-related"><Link className="btn btn-red" to={lp("/verhuur/toestel/adsorptiedroger")}>{t.toestel}<ArrowRightIcon /></Link><Link to={lp("/waterschade")}>{t.schade}</Link></div><p className="lk-note">{t.bronnen}: <a href="https://www.corroventa.nl/wp-content/uploads/2024/04/a2-a4-gebruikerhandleiding-201706-nl1.pdf">Corroventa A2/A4</a> · <a href="https://www.corroventa.nl/onze-oplossingen/waterschade-en-overstromingen/ruimte-drogen/">Corroventa</a></p></div></section>
      <FaqBlok titel={t.faqTitel} vragen={t.faq} sleutel="luchtkussen" variant="grijs" />
      <ContactBlok titel={t.contactTitel} lede={t.contactIntro} onderwerpen={t.onderwerpen} placeholder={t.placeholder}/>
    </main><V3Footer />
  </div>;
}

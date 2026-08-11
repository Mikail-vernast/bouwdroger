import type { Appearance } from "@stripe/stripe-js";

/**
 * Hoe het betaalformulier van Stripe eruitziet binnen onze eigen pagina's.
 *
 * Stripe rendert zijn velden in eigen iframes, dus onze stylesheet raakt er niet
 * aan; dit is de enige weg om ze op de rest van de pagina te laten lijken. De
 * waarden komen uit de tokens bovenaan `verhuur.css` — staan die daar ooit
 * anders, dan hoort dit mee te schuiven.
 *
 * Los bestand en niet naast `BoekingBetaalformulier`: dat is een component, en
 * een module die zowel een component als een constante exporteert breekt fast
 * refresh. Twee pagina's rekenen hiermee af — de boekingswizard en de
 * afhaalpagina — dus één plek waar de waarden staan.
 */
export const STRIPE_APPEARANCE: Appearance = {
  theme: "stripe",
  variables: {
    colorPrimary: "#C8102E",
    colorText: "#141414",
    colorDanger: "#C8102E",
    fontFamily: "'Plus Jakarta Sans', 'DM Sans', system-ui, sans-serif",
    borderRadius: "11px",
    spacingUnit: "4px",
  },
};

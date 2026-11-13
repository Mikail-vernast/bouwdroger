import { Fragment, type ReactNode } from "react";

/**
 * `**zo**` in een datatekst wordt een echte `<b>` op het scherm.
 *
 * De teksten van de regio- en gemeentepagina's staan als platte string in
 * `src/data/regios.ts`: één bestand dat iemand kan herlezen zonder JSX ertussen,
 * en waaruit ook de alt-teksten en de schema's putten. Daar kan geen markup in.
 *
 * Vandaar de sterretjes in de data en deze omzetting bij het renderen. Het
 * alternatief, `dangerouslySetInnerHTML` zoals op /realisaties, moest daar wel
 * (die teksten zijn gegenereerd en dragen al HTML) maar is hier onnodig: dit
 * levert gewone React-knopen op, dus er is geen weg waarlangs opmaak van buiten
 * in de pagina komt. In de geprerenderde HTML staat de `<b>` gewoon mee.
 *
 * Gebruik het spaarzaam. Vet werkt omdat het uitzondering is: één of twee
 * dingen per alinea die iemand onthoudt als hij alleen de dikke woorden leest.
 */
export const nadruk = (tekst: string): ReactNode =>
  tekst
    .split(/\*\*(.+?)\*\*/g)
    .map((deel, i) => (i % 2 === 1 ? <b key={i}>{deel}</b> : <Fragment key={i}>{deel}</Fragment>));

/** Dezelfde tekst zonder de sterretjes — voor alt-teksten, schema's en titels. */
export const zonderNadruk = (tekst: string): string => tekst.replace(/\*\*(.+?)\*\*/g, "$1");

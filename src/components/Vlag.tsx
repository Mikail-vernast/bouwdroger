import { useId } from "react";
import type { Taal } from "@/i18n/taal";

/**
 * Vlag per taal: Nederlands = Nederland, Français = Frankrijk, English = VK.
 *
 * Staat hier en niet in de keuzepopup omdat de taalwissel in de headers
 * dezelfde vlaggen draagt. Twee tekeningen van dezelfde vlag liepen anders
 * uit elkaar zodra er één bijkwam.
 *
 * `breedte` schaalt het geheel: 30 px in de popup, 18 px in de topregel.
 * Het id van de clipPath komt uit `useId()` — de wissel staat in de topregel
 * én in de mobiele menulade, dus dezelfde vlag staat twee keer in één
 * document en een vast id zou dubbel zijn.
 */
const Vlag = ({ taal, breedte = 30 }: { taal: Taal; breedte?: number }) => {
  const id = `vl-${useId()}`;
  const inhoud = {
    nl: (
      <>
        <rect y="3" width="26" height="6.7" fill="#AE1C28" />
        <rect y="9.7" width="26" height="6.6" fill="#fff" />
        <rect y="16.3" width="26" height="6.7" fill="#21468B" />
      </>
    ),
    fr: (
      <>
        <rect y="3" width="8.7" height="20" fill="#0055A4" />
        <rect x="8.7" y="3" width="8.6" height="20" fill="#fff" />
        <rect x="17.3" y="3" width="8.7" height="20" fill="#EF4135" />
      </>
    ),
    en: (
      <>
        <rect y="3" width="26" height="20" fill="#012169" />
        <path d="M0 3l26 20M26 3L0 23" stroke="#fff" strokeWidth="4" />
        <path d="M0 3l26 20M26 3L0 23" stroke="#C8102E" strokeWidth="1.5" />
        <path d="M13 3v20M0 13h26" stroke="#fff" strokeWidth="6" />
        <path d="M13 3v20M0 13h26" stroke="#C8102E" strokeWidth="3.4" />
      </>
    ),
  }[taal];
  return (
    <svg
      width={breedte}
      height={Math.round((breedte * 2) / 3)}
      viewBox="0 3 26 20"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <clipPath id={id}>
          <rect x="0" y="3" width="26" height="20" rx="2.6" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id})`}>{inhoud}</g>
      <rect x=".5" y="3.5" width="25" height="19" rx="2.3" fill="none" stroke="rgba(0,0,0,.18)" />
    </svg>
  );
};

export default Vlag;

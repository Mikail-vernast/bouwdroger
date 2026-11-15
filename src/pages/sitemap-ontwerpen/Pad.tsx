import { padDelen } from "./data";

/** TIJDELIJK — toont een pad zoals in de adresbalk, met de schuine strepen in rood.
    `stil` dimt de tussenliggende mappen, zodat het laatste deel opvalt. */
const Pad = ({ path, stil = true }: { path: string; stil?: boolean }) => {
  const delen = padDelen(path);
  if (delen.length === 0) return <span className="pad"><i>/</i></span>;
  return (
    <span className="pad">
      {delen.map((deel, i) => (
        <span key={i}>
          <i>/</i>
          {stil && i < delen.length - 1 ? <em>{deel}</em> : deel}
        </span>
      ))}
    </span>
  );
};

export default Pad;

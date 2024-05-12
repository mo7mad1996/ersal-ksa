import Dodecahedron from "~/components/helper/Dodecahedron";

export default function Anmation() {
  return (
    <div className="mil-animation-frame">
      <div
        className="mil-animation mil-position-4 mil-dark mil-scale"
        data-value-1={7}
        data-value-2="1.4"
      >
        <Dodecahedron />
      </div>
    </div>
  );
}

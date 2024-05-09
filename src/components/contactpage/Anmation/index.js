import Dodecahedron from "~/components/helper/Dodecahedron";

export default function Anmation() {
  return (
    <div class="mil-animation-frame">
      <div
        class="mil-animation mil-position-4 mil-dark mil-scale"
        data-value-1="7"
        data-value-2="1.4"
      >
        <Dodecahedron />
      </div>
    </div>
  );
}

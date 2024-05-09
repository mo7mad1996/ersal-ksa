// css
import css from "./style.module.scss";

import Link from "next/link";
import Url from "../../contactpage/Description";

export default function Description() {
  return (
    <div className="mil-inner-banner">
      <div className="mil-banner-content mil-center mil-up">
        <div className="container">
          <Url />
        </div>
      </div>
    </div>
  );
}

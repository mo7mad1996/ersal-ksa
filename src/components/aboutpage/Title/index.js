// css
import css from "./style.module.scss";

import Link from "next/link";
import Dodecahedron from "~/components/helper/Dodecahedron";

export default function Title() {
  return (
    <div className="mil-inner-banner">
      <div className="mil-banner-content mil-center mil-up">
        <div className="container">
          <ul className="mil-breadcrumbs mil-center mil-mb-60">
            <li>
              <Link href="/">الصفحة الرئسية</Link>
            </li>
            <li>
              <Link href="/about">من نحن</Link>
            </li>
          </ul>
          <h3 className={css.title}>
            شركة إرسال
            <br />
            <span className="mil-thin ml-mt-40">
              للخدمات والحلول التسويقية الشاملة
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}

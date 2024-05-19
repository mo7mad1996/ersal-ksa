// css
import css from "./style.module.scss";

import Link from "next/link";

export default function Description() {
  return (
    <div className="mil-inner-banner">
      <div className="mil-banner-content mil-center mil-up">
        <div className="container">
          <ul className="mil-breadcrumbs mil-center mil-mb-60">
            <li>
              <Link href="/">الصفحة الرئيسية</Link>
            </li>
            <li>
              <Link href="/TermsAndConditions">الأحكام والشروط</Link>
            </li>
          </ul>
          <h3 className={css.title}>الأحكام والشروط</h3>
        </div>
      </div>
    </div>
  );
}

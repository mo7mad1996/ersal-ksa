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
              <Link href="/policy">سياسة الخصوصيه</Link>
            </li>
          </ul>
          <h3 className={css.title}>سياسة الخصوصيه</h3>
        </div>
      </div>
    </div>
  );
}

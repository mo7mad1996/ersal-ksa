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
              <Link href="/services">الخدمات</Link>
            </li>
          </ul>
          <h3 className={css.title}>
            هنا يأتي أهمية دورنا في تعزيز وجودك الإلكتروني <br />
            <span className="mil-thin ml-mt-40">
              وتحقيق أهداف شركتك، ولهذا السبب نقدم لك الخدمات والحلول التسويقية
              الشاملة
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}

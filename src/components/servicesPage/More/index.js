import Link from "next/link";
import css from "./style.module.scss";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function More() {
  return (
    <div className={`${css.more} p-3`}>
      <div className="container">
        <h3 className="mb-2 mil-h4">قد يعجبك ايضاً</h3>

        <div className="row">
          <div className="col-lg-6">
            <Link href="/">
              <IoIosArrowForward className={css.icon} />
              <span>الرئيسية</span>
            </Link>
          </div>
          <div className="col-lg-6">
            <Link href="/contact" className={css.action}>
              <IoIosArrowBack className={css.icon} />
              <span>طلب خدمة</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

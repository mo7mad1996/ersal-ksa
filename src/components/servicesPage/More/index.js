import Link from "next/link";
import css from "./style.module.scss";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function More({ links }) {
  return (
    <div className={`${css.more} p-3`}>
      <div className="container">
        <h3 className="mb-2 mil-h4 py-4">قد يعجبك ايضاً</h3>

        <div className="row">
          <div className="col-lg-6">
            <Link href={links[0].url} title={links[0].title}>
              <IoIosArrowForward className={css.icon} />
              <span>{links[0].title}</span>
            </Link>
          </div>
          <div className="col-lg-6">
            <Link
              href={links[1].url}
              title={links[1].title}
              className={css.action}
            >
              <IoIosArrowBack className={css.icon} />
              <span>{links[1].title}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

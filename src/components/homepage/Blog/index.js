// components
import Link from "next/link";
import WhyUs from "./Whyus";

// icons
import { FaArrowRight } from "react-icons/fa6";

export default function Blog() {
  return (
    <section>
      <div className="container mil-p-120-60">
        <div className="row align-items-center mil-mb-30">
          <div className="col-lg-6 mil-mb-30">
            <h3 className="mil-up">لماذا تختار شركة إرسال؟</h3>
          </div>
          <div className="col-lg-6 mil-mb-30">
            <div className="mil-adaptive-right mil-up">
              <Link href="/about" className="mil-link mil-dark ">
                <span>المزيد</span>

                <FaArrowRight className="mil-arrow" />
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <WhyUs />
        </div>
      </div>
    </section>
  );
}

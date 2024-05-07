// icons
import { FaArrowRight } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mil-dark-bg">
      <div className="mi-invert-fix">
        <div className="container mil-p-120-60">
          <div className="row justify-content-between">
            <div className="col-md-4 col-lg-4 mil-mb-60">
              <div className="mil-muted mil-logo mil-up mil-mb-30">
                .ersal-ksa
              </div>

              {/* <p className="mil-light-soft mil-up mil-mb-30">
                Subscribe our newsletter:
              </p>

              <form className="mil-subscribe-form mil-up">
                <input type="text" placeholder="Enter our email" />
                <button
                  type="submit"
                  className="mil-button mil-icon-button-sm "
                >
                  <FaArrowRight className="mil-arrow" />
                </button>
              </form> */}
            </div>
            <div className="col-md-7 col-lg-6">
              <div className="row justify-content-end">
                <div className="col-md-6 col-lg-7">
                  <nav className="mil-footer-menu mil-mb-60">
                    <ul>
                      <li className="mil-up mil-active">
                        <a href="home-1.html">الرئيسيه</a>
                      </li>
                      <li className="mil-up">
                        <a href="portfolio-1.html">اعمالنا</a>
                      </li>
                      <li className="mil-up">
                        <a href="services.html">خدماتنا</a>
                      </li>
                      <li className="mil-up">
                        <a href="contact.html">تواصل معنا</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-md-6 col-lg-5">
                  <ul className="mil-menu-list mil-up mil-mb-60">
                    <li>
                      <a href="#." className="mil-light-soft">
                        سياسة الخصوصية
                      </a>
                    </li>
                    <li>
                      <a href="#." className="mil-light-soft">
                        الأحكام والشروط
                      </a>
                    </li>
                    <li>
                      <a href="#." className="mil-light-soft">
                        سياسة ملفات الارتباط
                      </a>
                    </li>
                    <li>
                      <a href="#." className="mil-light-soft">
                        الوظائف
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-between flex-sm-row-reverse">
            <div className="col-md-7 col-lg-6">
              <div className="row justify-content-between">
                <div className="col-md-6 col-lg-5 mil-mb-60">
                  <h6 className="mil-muted mil-up mil-mb-30">
                    المملكة العربيه السعوديه
                  </h6>

                  <p className="mil-light-soft mil-up">
                    العنوان بالتفصيل
                    <span className="mil-no-wrap">+51 174 705 812</span>
                  </p>
                </div>
                <div className="col-md-6 col-lg-5 mil-mb-60">
                  <h6 className="mil-muted mil-up mil-mb-30">هاتف</h6>

                  <p className="mil-light-soft mil-up">
                    <span className="mil-no-wrap">+31 174 705 811</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-6 mil-mb-60">
              <div className="mil-vert-between">
                <div className="mil-mb-30">
                  <ul className="mil-social-icons mil-up">
                    <li>
                      <a href="#." target="_blank" className="social-icon">
                        <i className="fab fa-behance"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#." target="_blank" className="social-icon">
                        <i className="fab fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#." target="_blank" className="social-icon">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#." target="_blank" className="social-icon">
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <p className="mil-light-soft mil-up">
                  © جميع الحقوق محفوظه{new Date().getFullYear()} إرسال.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Dodecahedron from "~/components/helper/Dodecahedron";

export default function Menu() {
  return (
    <div className="mil-menu-frame">
      {/* <!-- frame clone --> */}
      <div className="mil-frame-top">
        <Link href="/" className="mil-logo">
          A.
        </Link>
        <div className="mil-menu-btn">
          <span></span>
        </div>
      </div>
      {/* <!-- frame clone end --> */}
      <div className="container">
        <div className="mil-menu-content">
          <div className="row">
            <div className="col-xl-5">
              <nav className="mil-main-menu" id="swupMenu">
                <ul>
                  <li className="mil-has-children mil-active">
                    <a href="#."> الصفحة الرئسية</a>
                    <ul>
                      <li>
                        <Link href="/">الرئسية</Link>
                      </li>
                      <li>
                        <a href="home-2.html">تواصل معانا</a>
                      </li>
                      <li>
                        <a href="portfolio-3.html">من نحن</a>
                      </li>
                    </ul>
                  </li>
                  <li className="mil-has-children">
                    <a href="#.">السوشيال ميديا</a>
                    <ul>
                      <li>
                        <a href="portfolio-1.html">فيس بوك</a>
                      </li>
                      <li>
                        <a href="portfolio-2.html">يوتيوب</a>
                      </li>
                      <li>
                        <a href="portfolio-3.html">انستجرام</a>
                      </li>
                      <li>
                        <a href="portfolio-1.html">تيك توك</a>
                      </li>
                      <li>
                        <a href="portfolio-2.html">تويتر</a>
                      </li>
                      <li>
                        <a href="portfolio-3.html">سناب شات</a>
                      </li>
                    </ul>
                  </li>
                  <li className="mil-has-children">
                    <a href="#">الخدمات</a>
                    <ul>
                      <li>
                        <Link href="/services">خدماتنا</Link>
                      </li>
                      <li>
                        <a href="service.html">خدمة خاصة</a>
                      </li>
                    </ul>
                  </li>

                  <li className="mil-has-children">
                    <a href="#.">صفحاتنا ايضاً</a>
                    <ul>
                      <li>
                        <a href="team.html">الفريق</a>
                      </li>
                      <li>
                        <a href="contact.html">تواصل معنا</a>
                      </li>
                      <li>
                        <a href="404.html">من نحن</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-xl-7">
              <div className="mil-menu-right-frame">
                <div className="mil-animation-in">
                  <div className="mil-animation-frame">
                    <div
                      className="mil-animation mil-position-1 mil-scale"
                      data-value-1="2"
                      data-value-2="2"
                    >
                      <Dodecahedron />
                    </div>
                  </div>
                </div>
                <div className="mil-menu-right">
                  <div className="row">
                    <div className="col-lg-8 mil-mb-60">
                      <h6 className="mil-muted mil-mb-30">إرسال</h6>

                      <ul className="mil-menu-list">
                        <li>
                          <a href="project-1.html" className="mil-light-soft">
                            الموقع
                          </a>
                        </li>
                        <li>
                          <a href="project-2.html" className="mil-light-soft">
                            الموظفين
                          </a>
                        </li>
                        <li>
                          <a href="project-3.html" className="mil-light-soft">
                            رأيك يهمنا
                          </a>
                        </li>
                        <li>
                          <a href="project-4.html" className="mil-light-soft">
                            أسعارنا
                          </a>
                        </li>
                        <li>
                          <a href="project-5.html" className="mil-light-soft">
                            منتجاتنا
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4 mil-mb-60">
                      <h6 className="mil-muted mil-mb-30 mil-no-wrap">
                        صفحات مفيدة
                      </h6>

                      <ul className="mil-menu-list">
                        <li>
                          <a href="#." className="mil-light-soft">
                            سياسة الاستخدام
                          </a>
                        </li>
                        <li>
                          <a href="#." className="mil-light-soft">
                            تواصل معنا
                          </a>
                        </li>
                        <li>
                          <a href="#." className="mil-light-soft">
                            من نحن
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
                  <div className="mil-divider mil-mb-60"></div>
                  <div className="row justify-content-between">
                    <div className="col-lg-4 mil-mb-60">
                      <h6 className="mil-muted mil-mb-30 mil-no-wrap">
                        المملكة العربيه السعوديه
                      </h6>

                      <p className="mil-light-soft mil-up">
                        <span className="mil-no-wrap">العنوان مفصل</span>
                      </p>
                    </div>
                    <div className="col-lg-4 mil-mb-60">
                      <h6 className="mil-muted mil-mb-30">هاتف</h6>

                      <p className="mil-light-soft">
                        <span className="mil-no-wrap">+31 174 705 811</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

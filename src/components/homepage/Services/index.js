// icons
import { FaArrowRight } from "react-icons/fa6";

import Dodecahedron from "~/components/helper/Dodecahedron";

export default function Services() {
  return (
    <section className="mil-dark-bg">
      <div className="mi-invert-fix">
        <div className="mil-animation-frame">
          <div
            className="mil-animation mil-position-1 mil-scale"
            data-value-1="2.4"
            data-value-2="1.4"
            style={{
              top: "300px",
              left: "-100px",
            }}
          >
            <Dodecahedron />
          </div>
          <div
            className="mil-animation mil-position-2 mil-scale"
            data-value-1="2"
            data-value-2="1"
            style={{ left: "150px" }}
          >
            <Dodecahedron />
          </div>
        </div>
        <div className="container mil-p-120-0">
          <div className="mil-mb-120">
            <div className="row">
              <div className="col-lg-10">
                <span className="mil-suptitle mil-light-soft mil-suptitle-right mil-up">
                  نهتم بتقدم اعلى جودة من الخدمة <br />
                  لضمان زيادة قاعدة بيانات العملاء.
                </span>
              </div>
            </div>

            <div className="mil-complex-text justify-content-center mil-up mil-mb-15">
              <h2 className="mil-h2 mil-muted mil-center">خدمات إرسال</h2>
              <span className="mil-text-image">
                <img src="img/photo/2.jpg" alt="team" />
              </span>
            </div>
            <div className="mil-complex-text justify-content-center mil-up">
              <a
                href="services.html"
                className="mil-services-button mil-button "
              >
                <span>تعرف علينا اكثر</span>
                <FaArrowRight className="mil-arrow" />
              </a>
              <h2 className="mil-h3 mil-muted mil-center">
                <span className="mil-thin">تعرف على خدماتنا.</span>
              </h2>
            </div>
          </div>

          <p className="mil-complex-text mil-muted  mil-h6 justify-content-center mil-center mil-thin mil-mb-120">
            هنا يأتي أهمية دورنا في تعزيز وجودك الإلكتروني، وتحقيق أهداف شركتك،
            <br />
            ولهذا السبب نقدم لك الخدمات والحلول التسويقية الشاملة:
          </p>

          <div className="row mil-services-grid m-0">
            <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
              <a href="service.html" className="mil-service-card-sm mil-up">
                <h5 className="mil-muted mil-mb-30">
                  التسويق
                  <br />
                  الإلكتروني
                </h5>
                <p className="mil-light-soft mil-mb-30">
                  نساعدك على إنشاء صفحات لنشاطك التجاري على جميع منصات التواصل
                  الاجتماعي، وإدارة محتواها بشكل احترافي.
                </p>
                <div className="mil-button mil-icon-button-sm ">
                  <FaArrowRight className="mil-arrow" />
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
              <a href="service.html" className="mil-service-card-sm mil-up">
                <h5 className="mil-muted mil-mb-30">
                  تحسين
                  <br />
                  محركات البحث
                </h5>
                <p className="mil-light-soft mil-mb-30">
                  نساعدك على تحسين نتائج موقعك الإلكتروني، لتعزيز ظهور نشاطك
                  التجاري في أعلى نتائج البحث .
                </p>
                <div className="mil-button mil-icon-button-sm ">
                  <FaArrowRight className="mil-arrow" />
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
              <a href="service.html" className="mil-service-card-sm mil-up">
                <h5 className="mil-muted mil-mb-30">
                  تصميم وتنفيذ
                  <br />
                  المواقع الإلكترونية
                </h5>
                <p className="mil-light-soft mil-mb-30">
                  نقدم خدمة تصميم وتنفيذ المواقع الإلكترونية، من خلال فريق من
                  المصممين والمطورين المحترفين.
                </p>
                <div className="mil-button mil-icon-button-sm ">
                  <FaArrowRight className="mil-arrow" />
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
              <a href="service.html" className="mil-service-card-sm mil-up">
                <h5 className="mil-muted mil-mb-30">
                  تصميم وبناء
                  <br />
                  الهوية البصرية
                </h5>
                <p className="mil-light-soft mil-mb-30">
                  نفتخر أننا نتميز بتقديم شعارات بصرية إبداعية، تعبر عن شركتك
                  وخدماتك، والرسالة التي ترغب في إيصالها للجمهور.
                </p>
                <div className="mil-button mil-icon-button-sm ">
                  <FaArrowRight className="mil-arrow" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

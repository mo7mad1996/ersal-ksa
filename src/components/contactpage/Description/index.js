import Link from "next/link";
import Form from "./Form.js";

export default function Description() {
  return (
    <div className="container pt-5">
      <div className="mil-banner-content mil-up  mt-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="mil-personal-text">
              <h1 className="mil-mt-60">
                تواصل <br />
                معنا
              </h1>
            </div>
          </div>
          <div className="row justify-content-center" id="form">
            <div className="col-lg-8">
              <span className="mil-suptitle mil-suptitle-dark mil-mb-60">
                نحن في ارسال نحب دأئماً التواصل
                <br />
                المستمر بين عملائنا لتحقيق كامل الثقة بيننا
              </span>
              <a href="#form" className="mil-link mil-dark mil-arrow-place">
                <span>اترك لنا رسالتك</span>
              </a>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="mil-portrait-frame">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Lines from "~/components/helper/Lines";

export default function About() {
  return (
    <section id="about">
      <div className="container mil-p-120-30">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 col-xl-5">
            <div className="mil-mb-90">
              <h2 className="mil-up mil-mb-60">
                <span className="mil-thin"></span>
                رؤيتنا في <br />
                إرسال
              </h2>
              <p className="mil-up mil-mb-30">
                نؤمن بأهمية التسويق الإبداعي، ونعمل على تطوير حلول تسويقية جديدة
                تلبي احتياجات الشركات في كل القطاعات، ونتعهد بتقديم خدمة عملاء
                احترافية تليق بمكانة عملائنا، لأن رؤية إرسال تبني علاقات طويلة
                الأمد، وتقدم قيمة مضافة لعملائها، باعتبارنا شركائهم في النجاح.
              </p>

              <p className="mil-up mil-mb-60">
                نلتزم بتقديم حلول تسويقية مبتكرة لعملائنا، ونعمل من خلال خبرائنا
                على ترجمة أفكار الشركات إلى نتائج ملموسة؛ للوصول إلى عالم غير
                محدود من الفرص والإمكانيات.
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="mil-about-photo mil-mb-90">
              <div className="mil-lines-place">
                <Lines />
              </div>
              <div
                className="mil-up mil-img-frame"
                style={{ paddingBottom: "160%" }}
              >
                <img
                  mil-scale
                  src="img/photo/1.jpg"
                  alt="img"
                  className="mil-scale"
                  data-value-1="1"
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

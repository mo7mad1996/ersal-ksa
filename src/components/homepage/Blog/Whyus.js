// icons
import { FaArrowRight } from "react-icons/fa6";

export default function WhyUs() {
  const sections = [
    {
      title: "خبرة احترافية",
      description:
        "موجود لدينا في إرسال فريق متكامل من ذوي الخبرة الاحترافية، لمساعدة الشركات في جميع الأنشطة التسويقية.",
    },
    {
      title: "خدمات متكاملة",
      description: `نقدم مجموعة كبيرة من الخدمات التسويقية لتلبية احتياجات الشركات، لأن ظهور تقنيات كثيرة يصبح من الصعب على الشركات إدارة نشاطها التسويقي، دون الاعتماد على خبراء متخصصين، وهنا يأتي دور إرسال في تقديم خدماتها الشاملة.      `,
    },
    {
      title: "أسعار تنافسية",
      description: `نقدم مجموعة كبيرة من الخدمات التسويقية لتلبية احتياجات الشركات، لأن ظهور تقنيات كثيرة يصبح من الصعب على الشركات إدارة نشاطها التسويقي، دون الاعتماد على خبراء متخصصين، وهنا يأتي دور إرسال في تقديم خدماتها الشاملة.      `,
    },
    {
      title: "رؤية مسقبلية واعدة",
      description: ` نؤمن بأن مستقبل التسويق هو مستقبل رقمي مدعوم بالذكاء الصناعي، لتعزيز نمو الأعمال وتطويرها، وهذا دورنا في التركيز على تطوير حلول تسويقية فعالة تعتمد على الذكاء الصناعي، لدفع الشركات للنمو السريع، والوصول لجمهورهم المستهدف بسرعة وفعالية أكثر من الحلول التسويقية التقليدية.      `,
    },
  ];

  return (
    <>
      {sections.map((section, n) => (
        <div className="col-lg-6" key={n}>
          <a href="publication.html" className="mil-blog-card mil-mb-60">
            {/* <div className="mil-cover-frame mil-up">
              <img src="img/blog/1.jpg" alt="cover" />
            </div> */}
            <div className="mil-post-descr">
              {/* <div className="mil-labels mil-up mil-mb-30">
                <div className="mil-label mil-upper mil-accent">
                  TECHNOLOGY
                </div>
                <div className="mil-label mil-upper">may 24 2023</div>
              </div> */}
              <h4 className="mil-up mil-mb-30">{section.title}</h4>
              <p className="mil-post-text mil-up mil-mb-30">
                {section.description}
              </p>
              <div className="mil-link mil-dark  mil-up">
                <span>المزيد</span>

                <FaArrowRight className="mil-arrow" />
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
}

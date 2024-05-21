import css from "./style.module.scss";
import { LuHardDriveDownload } from "react-icons/lu";

export default function Services() {
  const services = [
    {
      tag: "E-Marketing",
      title: "التسويق الإلكتروني",
      list: [
        {
          title: "تفعيل وجودك على السوشيال ميديا",
          description: `نساعدك على إنشاء صفحات لنشاطك التجاري على جميع منصات التواصل الاجتماعي، وإدارة محتواها بشكل احترافي؛ لجذب المزيد من المتابعين والتفاعل، لزيادة المبيعات.`,
        },
        {
          title: "تصميم منشورات تعكس رؤيتك",
          description: ` نقدم خدمة تصاميم إبداعية، لإنشاء منشورات تجذب انتباه جمهورك على وسائل التواصل الاجتماعي.`,
        },
        {
          title: "كتابة محتوى تسويقي بيعي",
          description: `لأننا نهتم بك؛ نسعى دائما إلى العمل الفعال على زيادة قناعة وولاء عملائك، من خلال إنشاء أنواع مختلفة من المحتوى؛ لزيادة ونمو نشاطك التجاري.`,
        },
        {
          title: "إدارة صفحاتك على وسائل التواصل الاجتماعي",
          description: `نداوم على إدارة صفحاتك على السوشيال ميديا كل يوم، ونرد على تعليقات ورسائل جمهورك.`,
        },
        {
          title: "إدارة الحملات الإعلانية",
          description: `نخطط وننفذ حملات إعلانية فعّالة على جميع منصات السوشيال ميديا (فيسبوك – تويتر - انستجرام، يوتيوب – تيك توك – سناب).`,
        },
        {
          title: "الحملات التسويقية عبر البريد الإلكتروني",
          description: `نساعدك على إنشاء وإرسال حملات تسويقية عبر البريد الإلكتروني، لجذب العملاء، ونداوم على التواصل مع عملائك الحاليين، وتوليد عملاء جدد.`,
        },
        {
          title: "خدمات الموشن جرافيك",
          description: ` نعمل في هذه الخدمة على إنشاء مقاطع فيديو حركية جذابة، تُعزّز وجودك وتجذب انتباه الجمهور، لزيادة الانتشار السريع على وسائل التواصل الاجتماعي.`,
        },
      ],
      files: [
        {
          title: "باقات اسعار إدارة منصات التواصل الاجتماعي",
          url: "/download/باقات_ارسال_سوشيال_ميديا_بالاسعار.pdf",
        },
      ],
    },
    {
      tag: "SEO",
      title: "تحسين محركات البحث",
      list: [
        {
          title: "تحسين ظهورك على محركات البحث SEO",
          description: `نساعدك على تحسين نتائج موقعك الإلكتروني، لتعزيز ظهور نشاطك التجاري في أعلى نتائج البحث على مواقع مثل (Google).`,
        },
        {
          title: "دعم ظهورك على محركات البحث SEM",
          description: `نقدم خدمات الإعلانات المدفوعة على محركات البحث، لزيادة الزوار على موقعك الإلكتروني، وزيادة مبيعاتك.`,
        },
      ],
      files: [],
    },
    {
      tag: "Visual-identity",
      title: "تصميم وبناء الهوية البصرية",
      list: [
        {
          title: "تصميم شعار (لوجو) يعكس هويتك",
          description: `نفتخر أننا نتميز بتقديم شعارات بصرية إبداعية، تعبر عن شركتك وخدماتك، والرسالة التي ترغب في إيصالها للجمهور.`,
        },
        {
          title: "اختيارات تصاميم متنوعة",
          description: `نقدم لك أكثر من نسخة تصميم، ونمنحك خيارات كثيرة، ونأخذ بعين الاعتبار منافسينك.`,
        },
      ],
      files: [
        {
          title: "خطط أسعار تصميم الهويه البصريه",
          url: "/download /تصميم_هوبة_بصرية_كاملة.pdf",
        },
      ],
    },
    {
      tag: "web-design",
      title: "تصميم وتنفيذ المواقع الإلكترونية",
      list: [
        {
          title: "فريق متخصص مناسب لاحتياجات شركتك",
          description: `نقدم خدمة تصميم وتنفيذ المواقع الإلكترونية، من خلال فريق من المصممين والمطورين المحترفين، كما نساعدك على إنشاء وتصميم متاجر إلكترونية مخصصة، ومتوافقة مع تجربة المستخدم، لزيادة بيع منتجاتك.`,
        },
        {
          title: "اختيارات تصاميم متنوعة",
          description: `نقدم لك أكثر من نسخة تصميم، ونمنحك خيارات كثيرة، ونأخذ بعين الاعتبار منافسينك.`,
        },
      ],
      files: [
        {
          title: "باقات الموقع التعريفي",
          url: "/download/باقات_الموقع_التعريفي_البسيط_بالاسعار.pdf",
        },
        {
          title: "باقات المتاجر الالكترونيه",
          url: "/download/باقات_المتاجر_الالكترونية_بالاسعار.pdf",
        },
      ],
    },
  ];

  return (
    <>
      <div className="container mil-p-120-90">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="mil-image-frame mil-horizontal mil-up">
              <img
                src="img/blog/3.jpg"
                alt="Publication cover"
                className="mil-scale"
                data-value-1=".90"
                data-value-2="1.15"
              />
            </div>

            <div className="mil-info mil-up mil-mb-90"></div>
            <h1 className="mil-h2 mil-center">خدماتنا</h1>
          </div>
        </div>
      </div>

      {services.map((s, n) => (
        <section className="mil-mb-90" id={s.tag} key={s.tag}>
          <div className="container">
            <h4 className="mil-breadcrumbs mil-h4 mil-center mil-mb-60 main-color">
              {(n + 1).toString().padStart(2, 0)} . {s.title}.
            </h4>
            <div className="line-start">
              {s.list.map((a) => (
                <div key={a.title}>
                  <h5 className="mil-up mil-mb-30">{a.title}.</h5>
                  <p className="mil-up mil-mb-60">{a.description}</p>
                </div>
              ))}
            </div>
            <div className={css.prices}>
              {s.files.map((file, n) => (
                <a href={file.url} download key={n} className={css.item}>
                  <span>{file.title}</span>
                  <LuHardDriveDownload />
                </a>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

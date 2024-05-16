"use client";
import { useRef, useState, useEffect } from "react";
import css from "./style.module.scss";

// gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// images
import img1 from "./images/slider/1.jpg";
import img2 from "./images/slider/2.jpg";
import img3 from "./images/slider/3.jpg";

export default function Slider() {
  const container = useRef(null);
  const [active, set_active] = useState(0);

  useEffect(() => console.log(active), [active]);

  useEffect(() => {
    const sections = gsap.utils.toArray("." + css.slider_container);
    const scrollTriggers = sections.map((s, n) => {
      return ScrollTrigger.create({
        trigger: s,
        snap: true,
        scrub: 1,
        start: "top top",
        end: "bottom top",
        onEnter: () => set_active(n + 1),
        // onLeave: () => set_active(n + 1),
        onLeaveBack: () => set_active(n),
        // onEnterBack: () => set_active(n),
        // onUpdate: () => set_active(n),
        onEnterBack: () => set_active(n),
      });
    });

    return () => scrollTriggers.forEach((trigger) => trigger.kill());
  }, []);

  const sections = [
    {
      id: 1,
      img: img1,
      title: "نتخطى حدود العالم",
      description: `نترجم في إرسال أفكار الشركات إلى نتائج ملموسة، للوصول بنشاطك التجاري إلى عالم غير محدود من الفرص والإمكانيات.`,
    },
    {
      id: 2,
      img: img2,
      title: " ابدأ رحلة نجاحك معنا",
      description: `مهمتنا هي مساعدتك على تحقيق هذه الإمكانيات من خلال خدماتنا
    الشاملة في مجال التسويق وتصميم المواقع والمتاجر الإلكترونية.`,
    },
    {
      id: 3,
      img: img3,
      title: "استثمر في التسويق الرقمي باستخدام الذكاء الاصطناعي",
      description: `نقدم في إرسال خدمات تسويق رقمية باستخدام أحدث التقنيات في عالم الذكاء الصناعي،
    على أيدي فريق متكامل من ذوي الخبرة الاحترافية في المجال.`,
    },
  ];

  const JSXsections = sections.map((section, n) => (
    <div
      className={`${css.slider_container}  ${active + 1 > n ? css.active : ""}`}
      key={section.id}
    >
      <div
        style={{
          backgroundImage: `url(${section.img.src})`,
        }}
        className={`${css.slider} `}
      >
        <div className={`container ${css.content_container}`}>
          <div className={css.contant}>
            <h2>{section.title}</h2>
            {/* 
            <h2>
              {n} {active}
            </h2> 
            */}
            <p>{section.description}</p>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <section className={css.hero} ref={container}>
      {JSXsections}
    </section>
  );
}

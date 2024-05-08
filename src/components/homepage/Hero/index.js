"use client";
import { useRef, useState, useEffect } from "react";
import css from "./style.module.scss";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// images
import img1 from "./images/slider/1.jpg";
import img2 from "./images/slider/2.jpg";
import img3 from "./images/slider/3.jpg";

export default function Slider() {
  const container = useRef(null);

  // data
  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);
    const sections = gsap.utils.toArray("." + css.slider);
    sections.forEach((s, n) => {
      ScrollTrigger.create({
        trigger: s,
        start: "top 100%",
        start: innerHeight + 1 + " bottom",
        markers: true,
        snap: 1,

        onEnter: () => s.nextElementSibling?.classList.add(css.active),
        onLeaveBack: () => s.nextElementSibling?.classList.remove(css.active),
      });
    });
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
      key={section.id}
      style={{
        backgroundImage: `url(${section.img.src})`,
      }}
      className={`${css.slider} ${css.slider + section.id} ${
        n == 0 && css.active
      }`}
    >
      <div className={`container ${css.content_container}`}>
        <div className={css.contant}>
          <h2>{section.title}</h2>
          <p>{section.description}</p>
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

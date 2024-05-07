"use client";
import { useRef, useState, useEffect } from "react";
import css from "./style.module.scss";

// images
import img1 from "./images/slider/1.jpg";
import img2 from "./images/slider/2.jpg";
import img3 from "./images/slider/3.jpg";

const Slider = () => {
  const sliders = useRef([]);
  const [pos, setPos] = useState(0);
  const [canScroll, setCanScroll] = useState(true);
  const prevScroll = useRef(window.pageYOffset);

  const handleWheel = (event) => {
    if (!canScroll) return;
    const delta = Math.sign(event.deltaY);
    if (delta > 0) {
      // Scrolling down
      setPos((prevPos) => (prevPos < 2 ? prevPos + 1 : prevPos));
    } else if (delta < 0) {
      // Scrolling up
      setPos((prevPos) => (prevPos > 0 ? prevPos - 1 : prevPos));
    }
    setCanScroll(false);
  };

  useEffect(() => {
    scroll(0, 0);
  }, [pos]);

  useEffect(() => {
    const handleScroll = () => {
      if (!canScroll) return;
      const currentScroll = window.pageYOffset;
      if (currentScroll > prevScroll.current) {
        // Scrolling down
        setPos((prevPos) => (prevPos < 2 ? prevPos + 1 : prevPos));
      } else {
        // Scrolling up
        setPos((prevPos) => (prevPos > 0 ? prevPos - 1 : prevPos));
      }
      prevScroll.current = currentScroll;
      setCanScroll(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [canScroll]);

  const addToRefsArray = (ref) => {
    if (ref && !sliders.current.includes(ref)) {
      sliders.current.push(ref);
    }
  };

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

  const JSXsections = sections.map((section) => (
    <div
      key={section.id}
      style={{
        backgroundImage: `url(${section.img.src})`,
        width: pos === section.id - 1 ? "100%" : 0,
      }}
      className={`${css.slider} ${pos === section.id - 1 ? css.active : ""}`}
      ref={(ref) => addToRefsArray(ref)}
      onTransitionEnd={() => {
        setCanScroll(true);
      }}
    >
      <div className={`container ${css.content_container}`}>
        <div className={css.contant}>
          <h2>{section.title}</h2>
          <p>{section.description}</p>
        </div>
      </div>
    </div>
  ));

  return <section className={css.hero}>{JSXsections}</section>;
};

export default Slider;

"use client";
import { useRef, useEffect } from "react";

// icons
import { FaArrowRight } from "react-icons/fa6";

// gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function Frame() {
  const btn = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(btn.current, {
      x: -30,
      opacity: 0,
    });

    gsap.to(btn.current, {
      x: 0,
      opacity: 1,
      ease: "sine",
      scrollTrigger: {
        trigger: "body",
        start: "top -40%",
        end: "top -40%",
        toggleActions: "play none reverse none",
      },
    });
  }, []);

  return (
    <div className="mil-frame">
      <div className="mil-frame-top">
        <Link href="/" className="mil-logo">
          A.
        </Link>
        <div className="mil-menu-btn">
          <span></span>
        </div>
      </div>
      <div className="mil-frame-bottom">
        <div className="mil-current-page"></div>

        <div className="mil-back-to-top">
          <a href="#top" className="mil-link mil-dark" ref={btn}>
            <span>الى الاعلى</span>
            <FaArrowRight className="mil-arrow" />
          </a>
        </div>
      </div>
    </div>
  );
}

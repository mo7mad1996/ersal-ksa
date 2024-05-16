"use client";
import { useRef, useEffect, useState } from "react";

// icons
import { FaArrowRight } from "react-icons/fa6";

// img
import logo from "~/assets/img/logo.svg";

// gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

export default function Frame({ openMenu, is_menu_open }) {
  // data
  const btn = useRef(null);
  const [title, setPageTitle] = useState();

  // onload
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

  useEffect(() => {
    const updatePageTitle = () => setPageTitle(document.title);
    updatePageTitle();

    document.addEventListener("DOMSubtreeModified", updatePageTitle);
    return () =>
      document.removeEventListener("DOMSubtreeModified", updatePageTitle);
  }, []);

  // JSX
  return (
    <div className="mil-frame">
      <div className="mil-frame-top">
        <Link href="/" className="mil-logo">
          <Image src={logo} height={30} alt="ersal" className="Ersal-logo" />
        </Link>
        <div
          className={`mil-menu-btn ${is_menu_open ? "mil-active" : ""}`}
          onClick={() => openMenu((e) => !e)}
        >
          <span></span>
        </div>
      </div>
      <div className="mil-frame-bottom">
        <div className="mil-current-page">{title}</div>

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

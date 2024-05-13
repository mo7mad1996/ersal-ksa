"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function Scrollbar() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scrollbar = gsap.to(".mil-progress", {
      height: "100%",
      ease: "sine",
      scrollTrigger: {
        scrub: 0.3,
      },
    });

    return () => {
      scrollbar.kill(); // Clean up the scrollbar animation
    };
  }, []);

  return (
    <div className="mil-progress-track">
      <div className="mil-progress"></div>
    </div>
  );
}

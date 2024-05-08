"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Cursor() {
  useEffect(() => {
    var timeline = gsap.timeline();

    timeline.to(".mil-preloader-animation", {
      opacity: 1,
    });

    timeline.fromTo(
      ".mil-animation-1 .mil-h3",
      {
        y: "30px",
        opacity: 0,
      },
      {
        y: "0px",
        opacity: 1,
        stagger: 0.4,
      }
    );

    timeline.to(
      ".mil-animation-1 .mil-h3",
      {
        opacity: 0,
        y: "-30",
      },
      "+=.3"
    );

    timeline.fromTo(
      ".mil-reveal-box",
      0.1,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        x: "-30",
      }
    );

    timeline.to(
      ".mil-reveal-box",
      0.45,
      {
        width: "100%",
        x: 0,
      },
      "+=.1"
    );
    timeline.to(".mil-reveal-box", {
      left: "0",
    });
    timeline.to(".mil-reveal-box", 0.3, {
      width: "0%",
    });
    timeline.fromTo(
      ".mil-animation-2 .mil-h3",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      "-=.5"
    );
    timeline.to(
      ".mil-animation-2 .mil-h3",
      0.6,
      {
        opacity: 0,
        y: "-30",
      },
      "+=.5"
    );
    timeline.to(
      ".mil-preloader",
      0.8,
      {
        opacity: 0,
        ease: "sine",
      },
      "+=.2"
    );
    timeline.fromTo(
      ".mil-up",
      0.8,
      {
        opacity: 0,
        y: 40,
        scale: 0.98,
        ease: "sine",
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        onComplete: function () {
          $(".mil-preloader").addClass("mil-hidden");
        },
      },
      "-=1"
    );
  }, []);

  return (
    <div className="mil-preloader">
      <div className="mil-preloader-animation">
        <div className="mil-pos-abs mil-animation-1">
          <p className="mil-h3 mil-muted mil-thin">الابتكار</p>
          <p className="mil-h3 mil-muted">التميز</p>
          <p className="mil-h3 mil-muted mil-thin">الالتزام</p>
          <p className="mil-h3 mil-muted ">الجوده</p>
          <p className="mil-h3 mil-muted mil-thin">التخطيط</p>
          <p className="mil-h3 mil-muted ">العمل الجماعي</p>
        </div>
        <div className="mil-pos-abs mil-animation-2">
          <div className="mil-reveal-frame">
            <p className="mil-reveal-box" />
            <p className="mil-h3 mil-muted mil-thin">ersal-ksa.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

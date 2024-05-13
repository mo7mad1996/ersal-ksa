"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursor = useRef(null);

  // move
  useEffect(() => {
    gsap.set(cursor.current, {
      xPercent: -50,
      yPercent: -50,
    });

    function handleMouseMove(event) {
      gsap.to(cursor.current, {
        scale: 1,
        duration: 0.2,
        left: event.clientX,
        top: event.clientY,
      });
    }

    document.addEventListener("pointermove", handleMouseMove);

    return () => document.removeEventListener("pointermove", handleMouseMove);
  }, []);

  // click
  useEffect(() => {
    function handlePointerDown(event) {
      gsap.to(cursor.current, {
        duration: 0.5,
        ease: "sine",
        scale: 0.1,
      });
    }
    function handlePointerUp(event) {
      gsap.to(cursor.current, {
        duration: 0.2,
        scale: 1,
      });
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("pointerup", handlePointerUp);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  return (
    <div className="mil-ball" ref={cursor}>
      <span className="mil-icon-1">
        <svg viewBox="0 0 128 128">
          <path d="M106.1,41.9c-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2L116.8,61H11.2l14.9-14.9c1.2-1.2,1.2-3.1,0-4.2	c-1.2-1.2-3.1-1.2-4.2,0l-20,20c-1.2,1.2-1.2,3.1,0,4.2l20,20c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9c1.2-1.2,1.2-3.1,0-4.2	L11.2,67h105.5l-14.9,14.9c-1.2,1.2-1.2,3.1,0,4.2c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9l20-20c1.2-1.2,1.2-3.1,0-4.2L106.1,41.9	z" />
        </svg>
      </span>
      <div className="mil-more-text">اقرأ أكثر</div>
      <div className="mil-choose-text">اختار</div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
// import Swup from "swup";

export default function Curtain() {
  // const swup = new Swup();
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    function addClass() {
      setIsAnimated(true);
    }

    // swup.on("contentReplaced", addClass);

    // return () => {
    //   swup.("contentReplaced", addClass);
    // };
  }, []);

  return (
    <div className={`mil-curtain ${isAnimated ? "is-animating" : ""}`}></div>
  );
}

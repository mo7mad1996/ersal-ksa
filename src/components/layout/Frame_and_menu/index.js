"use client";

// components
import Frame from "~/components/layout/Frame";
import Menu from "~/components/layout/Menu";

// react
import { useState, useEffect } from "react";

export default function Frame_and_menu() {
  // data
  const [is_menu_open, openMenu] = useState(false);

  //   methods
  function reset() {
    openMenu(false);
  }

  // on inital
  useEffect(() => {
    document.addEventListener("swup:contentReplaced", reset);

    return document.removeEventListener("swup:contentReplaced", reset);
  });

  // JSX
  return (
    <>
      <Frame is_menu_open={is_menu_open} openMenu={openMenu} />
      <Menu is_menu_open={is_menu_open} openMenu={openMenu} />
    </>
  );
}

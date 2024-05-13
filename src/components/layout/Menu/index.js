"use client";

import Link from "next/link";
import Dodecahedron from "~/components/helper/Dodecahedron";

// icons
import { TiSocialFacebook } from "react-icons/ti";
import { RiTiktokLine } from "react-icons/ri";
import { FaSnapchatSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { useState } from "react";

export default function Menu({ openMenu, is_menu_open }) {
  const links = [
    {
      name: "الصفحة الرئيسية",
      list: [
        {
          name: "الرئيسية",
          url: "/",
        },
        {
          name: "تواصل معانا",
          url: "/contact",
        },
        {
          name: "من نحن",
          url: "/about",
        },
      ],
    },

    {
      name: "السوشيال ميديا",
      list: [
        {
          name: "فيس بوك",
          title: "facebook",
          url: "https://www.facebook.com/61559153827776",
          icon: <TiSocialFacebook />,
        },
        {
          name: "تيك توك",
          title: "TikTok",
          url: "https://www.tiktok.com/@ersalmarketingsolutions",
          icon: <RiTiktokLine />,
        },
        {
          name: "سناب شات",
          title: "Snapchat",
          url: "https://www.snapchat.com/add/ersal-marketing",
          icon: <FaSnapchatSquare />,
        },
        {
          name: "X",
          title: "X",
          url: "https://x.com/Ersal_ksa_",
          icon: <FaXTwitter />,
        },
        {
          name: "انستجرام",
          title: "Instagram",
          url: "https://www.instagram.com/ersal_marketing_agency",
          icon: <LuInstagram />,
        },
      ],
    },

    {
      name: "الخدمات",
      list: [
        {
          name: "خدماتنا",
          url: "/services",
        },
        {
          name: "طلب خدمة خاصه",
          url: "/contact",
        },
      ],
    },
    {
      name: "صفحاتنا ايضاً",
      list: [
        {
          name: "الفريق",
          url: "/team",
        },
        {
          name: "تواصل معنا",
          url: "/contact",
        },
        {
          name: "من نحن",
          url: "/about",
        },
      ],
    },
  ];

  const local_Links = [
    {
      name: "إرسال",
      list: [
        { url: "/", title: "الموقع" },
        { url: "#", title: "الموظفين" },
        { url: "/contact", title: "رأيك يهمنا" },
        { url: "#", title: "أسعارنا" },
        { url: "#", title: "منتجاتنا" },
      ],
    },
    {
      name: "صفحات مفيدة",
      list: [
        { url: "#", title: "سياسة الاستخدام" },
        { url: "/contact", title: "تواصل معنا" },
        { url: "/about", title: "من نحن" },
        { url: "#", title: "الوظائف" },
      ],
    },
  ];

  return (
    <div className={`mil-menu-frame ${is_menu_open ? "mil-active" : ""}`}>
      {/* <!-- frame clone --> */}
      <div className="mil-frame-top">
        <Link href="/" className="mil-logo">
          A.
        </Link>
        <div
          className={`mil-menu-btn ${is_menu_open ? "mil-active" : ""}`}
          onClick={() => openMenu((e) => !e)}
        >
          <span></span>
        </div>
      </div>
      {/* <!-- frame clone end --> */}
      <div className="container">
        <div className="mil-menu-content">
          <div className="row">
            <div className="col-xl-5">
              <nav className="mil-main-menu" id="swupMenu">
                <ul>
                  {links.map((main, n) => (
                    <App_link key={n} {...main} openMenu={openMenu} />
                  ))}
                </ul>
              </nav>
            </div>
            <div className="col-xl-7">
              <div className="mil-menu-right-frame">
                <div className="mil-animation-in">
                  <div className="mil-animation-frame">
                    <div
                      className="mil-animation mil-position-1 mil-scale"
                      data-value-1="2"
                      data-value-2="2"
                    >
                      <Dodecahedron />
                    </div>
                  </div>
                </div>
                <div className="mil-menu-right">
                  <div className="row">
                    {local_Links.map((link, n) => (
                      <div className="col-lg-4 mil-mb-60" key={n}>
                        <h6 className="mil-muted mil-mb-30 mil-no-wrap">
                          {link.name}
                        </h6>

                        <ul className="mil-menu-list">
                          {link.list.map((l, b) => (
                            <li
                              key={b}
                              onClick={(e) => {
                                e.stopPropagation();

                                openMenu(false);
                              }}
                            >
                              <Link href={l.url} className="mil-light-soft">
                                {l.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mil-divider mil-mb-60"></div>
                  <div className="row justify-content-between">
                    <div className="col-lg-4 mil-mb-60">
                      <h6 className="mil-muted mil-mb-30 mil-no-wrap">
                        المملكة العربيه السعوديه
                      </h6>

                      <p className="mil-light-soft mil-up">
                        <span className="mil-no-wrap">
                          7755، طريق الامام علي بن ابي طالب ، 2357
                        </span>
                      </p>
                    </div>
                    <div className="col-lg-4 mil-mb-60">
                      <h6 className="mil-muted mil-mb-30">هاتف</h6>

                      <p
                        className="mil-light-soft"
                        style={{ direction: "ltr" }}
                      >
                        <span className="mil-no-wrap">+966 54 966 0007</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App_link({ list, name, openMenu }) {
  // data
  const [active, setActive] = useState(false);

  // JSX
  return (
    <li
      className={`mil-has-children ${active ? "mil-active" : ""}`}
      onClick={() => setActive((e) => !e)}
    >
      <a>{name}</a>
      <ul className={active ? "mil-active" : ""}>
        {list.map((li, a) => (
          <li key={a}>
            <Link href={li.url} onClick={() => openMenu(false)}>
              <span> {li.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

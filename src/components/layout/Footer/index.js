"use client";
// routing
import Link from "next/link";
import { usePathname } from "next/navigation";

// icons
import { FaArrowRight } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTiktokLine } from "react-icons/ri";
import { FaSnapchatSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";

export default function Footer() {
  const pathname = usePathname();

  const isActive = (path) => (pathname === path ? "mil-active" : "");

  const nav = [
    [
      {
        link: "/",
        title: "الرئيسية",
      },
      {
        link: "#",
        title: "اعمالنا",
      },
      {
        link: "/services",
        title: "خدماتنا",
      },
      {
        link: "/contact",
        title: "تواصل معنا",
      },
    ],
    [
      {
        link: "/policy",
        title: "سياسة الخصوصية",
      },
      {
        link: "/terms-and-conditions",
        title: "الأحكام والشروط",
      },
      {
        link: "/policy",
        title: "سياسة ملفات الارتباط",
      },
      {
        link: "#",
        title: "الوظائف",
      },
    ],
  ];

  const socal = [
    {
      title: "facebook",
      url: "https://www.facebook.com/61559153827776",
      icon: <TiSocialFacebook />,
    },
    {
      title: "TikTok",
      url: "https://www.tiktok.com/@ersalmarketingsolutions",
      icon: <RiTiktokLine />,
    },
    {
      title: "Snapchat",
      url: "https://www.snapchat.com/add/ersal-marketing",
      icon: <FaSnapchatSquare />,
    },
    {
      title: "X",
      url: "https://x.com/Ersal_ksa_",
      icon: <FaXTwitter />,
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/ersal_marketing_agency",
      icon: <LuInstagram />,
    },
  ];

  return (
    <footer className="mil-dark-bg" style={{ position: "relative", zIndex: 1 }}>
      <div className="mi-invert-fix">
        <div className="container mil-p-120-60">
          <div className="row justify-content-between">
            <div className="col-md-4 col-lg-4 mil-mb-60">
              <div className="mil-muted mil-logo mil-up mil-mb-30">إرسال</div>

              {/* <p className="mil-light-soft mil-up mil-mb-30">
                Subscribe our newsletter:
              </p>

              <form className="mil-subscribe-form mil-up">
                <input type="text" placeholder="Enter our email" />
                <button
                  type="submit"
                  className="mil-button mil-icon-button-sm "
                >
                  <FaArrowRight className="mil-arrow" />
                </button>
              </form> */}
            </div>

            <div className="col-md-7 col-lg-6">
              <div className="row justify-content-end">
                <div className="col-md-6 col-lg-7">
                  <nav className="mil-footer-menu mil-mb-60">
                    <ul>
                      {nav[0].map((a) => (
                        <li
                          className={`mil-up  ${isActive(a.link)}`}
                          title={a.title}
                          key={a.link + Math.random()}
                        >
                          <Link className="mil-light-soft" href={a.link}>
                            {a.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                <div className="col-md-6 col-lg-5">
                  <ul className="mil-menu-list mil-up mil-mb-60">
                    {nav[1].map((a) => (
                      <li
                        key={a.link + Math.random()}
                        className={isActive(a.link)}
                      >
                        <Link href={a.link} className="mil-light-soft">
                          {a.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-between flex-sm-row-reverse">
            <div className="col-md-7 col-lg-6">
              <div className="row justify-content-between">
                <div className="col-md-6 col-lg-5 mil-mb-60">
                  <h6 className="mil-muted mil-up mil-mb-30">
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

                  <p className="mil-light-soft" style={{ direction: "ltr" }}>
                    <span className="mil-no-wrap">+966 54 966 0007</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-6 mil-mb-60">
              <div className="mil-vert-between">
                <div className="mil-mb-30">
                  <ul className="mil-social-icons mil-up">
                    {socal.map((l) => (
                      <li key={l.url}>
                        <a
                          href={l.url}
                          target="_blank"
                          title={l.title}
                          className="social-icon"
                        >
                          {l.icon}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mil-light-soft mil-up">
                  © جميع الحقوق محفوظه | {new Date().getFullYear()} إرسال.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

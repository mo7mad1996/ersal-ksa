import { Alexandria } from "next/font/google";
import Script from "next/script";

const inter = Alexandria({
  subsets: ["arabic", "latin", "latin-ext", "vietnamese"],
});

export const metadata = {
  title: {
    template: "إرسال | %s",
    default: "إرسال",
  },
  description: "Generated by create next app",
};

export const viewport = {
  themeColor: "#113358",
  width: "device-width",
  initialScale: 1,
  userScalable: false,
};

// components
import Cursor from "~/components/layout/Cursor";
import PreLoader from "~/components/layout/Preloader";
import Scrollbar from "~/components/layout/Scrollbar";
import Curtain from "~/components/layout/Curtain";
import Frame_and_menu from "~/components/layout/Frame_and_menu";

// Notifications
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// css
import "~/assets/css/plugins/bootstrap-grid.css";
import "~/assets/css/plugins/swiper.min.css";
import "~/assets/css/style.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={inter.className}>
        <div className="mil-wrapper" id="top">
          <Cursor />
          <PreLoader />
          <Scrollbar />
          <Curtain />
          <Frame_and_menu />

          <div className="mil-content">
            <div id="swupMain" className="mil-main-transition">
              {children}
            </div>
          </div>
        </div>

        <ToastContainer position="bottom-center" />

        {/* 
        <Script src="/js/plugins/jquery.min.js" />
        <Script src="/js/plugins/swup.min.js" />
        <Script src="/js/plugins/swiper.min.js" />
        <Script src="/js/plugins/fancybox.min.js" />
        <Script src="/js/plugins/gsap.min.js" />
        <Script src="/js/plugins/smooth-scroll.js" />
        <Script src="/js/plugins/Scrolltrigger.min.js" />
        <Script src="/js/plugins/ScrollTo.min.js" />
        <Script src="/js/main.js" />
         */}
      </body>
    </html>
  );
}

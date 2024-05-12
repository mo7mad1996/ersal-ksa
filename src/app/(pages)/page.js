// components
// import Banner from "~/components/homepage/Banner";
import Hero from "~/components/homepage/Hero";
import About from "~/components/homepage/About";
import Services from "~/components/homepage/Services";
// import Team from "~/components/homepage/Team";
// import Reviews from "~/components/homepage/Reviews";
// import Partners from "~/components/homepage/Partners";
import Blog from "~/components/homepage/Blog";

export default function Home() {
  return (
    <>
      {/* <Banner /> */}
      <Hero />
      <div style={{ background: "#fff", zIndex: 1, position: "relative" }}>
        <About />
        <Services />
        {/* <Team /> */}
        {/* <Reviews /> */}
        {/* <Partners /> */}
        <Blog />
      </div>
    </>
  );
}

export const metadata = {
  title: "الرئيسية",
};

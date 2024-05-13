// components
import Hero from "~/components/homepage/Hero";
import About from "~/components/homepage/About";
import Services from "~/components/homepage/Services";
import Blog from "~/components/homepage/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <div style={{ background: "#fff", zIndex: 1, position: "relative" }}>
        <About />
        <Services />
        <Blog />
      </div>
    </>
  );
}

export const metadata = {
  title: "الرئيسية",
};

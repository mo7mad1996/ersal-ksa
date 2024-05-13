// components
import Title from "~/components/aboutpage/Title";
import Content from "~/components/aboutpage/Content";
import More from "~/components/servicesPage/More";
import Anmation from "~/components/contactpage/Anmation";

export default function About_Page() {
  return (
    <div className="mil-banner-personal">
      <Anmation />

      <Title />
      <Content />
      <More
        links={[
          { title: "الرئيسية", url: "/" },
          { title: "تواصل معنا", url: "/contact" },
        ]}
      />
    </div>
  );
}

export const metadata = {
  title: "من نحن",
};

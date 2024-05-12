// components
import Anmation from "~/components/contactpage/Anmation";
import Description from "~/components/contactpage/Description";
import More from "~/components/servicesPage/More";

export default function ContactPage() {
  return (
    <section className="mil-banner-personal">
      <Anmation />
      <Description />
      <More
        links={[
          { title: "من نحن", url: "/about" },
          { title: "خدماتنا", url: "/about" },
        ]}
      />
    </section>
  );
}

export const metadata = {
  title: "تواصل معنا",
};

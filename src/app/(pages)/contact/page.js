// components
import Anmation from "~/components/contactpage/Anmation";
import Description from "~/components/contactpage/Description";
import Footer from "~/components/homepage/Footer";

export default function ContactPage() {
  return (
    <section className="mil-banner-personal">
      <Anmation />
      <Description />
      <Footer />
    </section>
  );
}

export const metadata = {
  title: "تواصل معنا",
};

import PageDiscription from "~/components/servicesPage/Description";
import Services from "~/components/servicesPage/Services";
import Footer from "~/components/homepage/Footer";
import More from "~/components/servicesPage/More";

export default function Services_Page() {
  return (
    <>
      <PageDiscription />
      <Services />
      <More />
      <Footer />
    </>
  );
}

export const metadata = {
  title: "الخدمات",
};

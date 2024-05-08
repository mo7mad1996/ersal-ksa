import PageDiscription from "~/components/servicesPage/Description";
import Services from "~/components/servicesPage/Services";
import Footer from "~/components/homepage/Footer";

export default function Services_Page() {
  return (
    <>
      <PageDiscription />
      <Services />
      <Footer />
    </>
  );
}

export const metadata = {
  title: "الخدمات",
};

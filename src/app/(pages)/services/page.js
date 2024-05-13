import PageDiscription from "~/components/servicesPage/Description";
import Services from "~/components/servicesPage/Services";
import Footer from "~/components/layout/Footer";
import More from "~/components/servicesPage/More";

export default function Services_Page() {
  return (
    <>
      <PageDiscription />
      <Services />
      <More
        links={[
          { title: "الرئيسية", url: "/" },
          { title: "اطلب خدمة", url: "/contact" },
        ]}
      />
    </>
  );
}

export const metadata = {
  title: "الخدمات",
};

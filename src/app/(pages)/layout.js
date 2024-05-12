import Footer from "~/components/homepage/Footer";

export default function Pages_Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

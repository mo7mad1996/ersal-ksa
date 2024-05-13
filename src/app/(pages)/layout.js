import Footer from "~/components/layout/Footer";

export default function Pages_Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

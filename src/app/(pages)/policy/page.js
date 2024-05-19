import Description from "~/components/policyPage/Description";
import Intro from "~/components/policyPage/Intro";
import Content from "~/components/policyPage/Content";

export default function Policy() {
  return (
    <>
      <Description />
      <div className="container">
        <Intro />
        <Content />
      </div>
    </>
  );
}

export const metadata = {
  title: "سياسة الخصوصيه",
};

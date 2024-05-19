import Description from "~/components/TermsAndConditions/Description";
import Intro from "~/components/TermsAndConditions/Intro";
import Content from "~/components/TermsAndConditions/Content";

export default function TermsAndConditions() {
  return (
    <div className="mil-up">
      <Description />
      <div className="container">
        <Intro />
        <Content />
      </div>
    </div>
  );
}

export const metadata = {
  title: "الأحكام والشروط",
};

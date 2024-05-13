import Link from "next/link";
import "./notFound.scss";

export default function NotFound() {
  return (
    <>
      <div className="error-page">
        <div>
          <h1 data-h1={404}>404</h1>
          <p data-p="الصفحة غير موجوده">الصفحة غير موجوده</p>
          <Link href="/" className="button-notFound">
            الصفحة الرئيسية
          </Link>
        </div>
      </div>
    </>
  );
}

export const metadata = {
  title: "الصفحة غير موجودة",
};

"use client";
// css
import css from "./style.module.scss";

import { useState } from "react";
import axios from "axios";

// components
import Loading from "./Loading";

// icons
import { FaWhatsapp } from "react-icons/fa6";

// Notifications
import { toast } from "react-toastify";

export default function Form() {
  // data
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    client_name: "",
    client_number: "",
    client_message: "",
  });

  // methods
  const update = (e) => {
    setForm((o) => ({ ...o, [e.target.name]: e.target.value }));
  };

  const submit = (e) => {
    e.preventDefault();

    setLoading(true);

    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/adddata", form)
      .then((res) => toast.success(res.data.message))
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      })
      .finally(() => setLoading(false));
  };

  // JSX
  return (
    <form className={`${css.form} row p-lg-5 mt-4 mb-4`} onSubmit={submit}>
      <div className="col-lg-6">
        <input name="client_name" onChange={update} placeholder="الاسم..." />
      </div>
      <div className="col-lg-6">
        <input
          name="client_number"
          onChange={update}
          placeholder="رقم للتواصل..."
        />
      </div>
      <div className="col-12">
        <textarea
          autoFocus
          name="client_message"
          onChange={update}
          placeholder="رسالتك تهمنا"
        ></textarea>
      </div>

      <div className="col-12">
        <button type="submit" disabled={loading}>
          {loading ? <Loading /> : <span>إرسال</span>}
        </button>
      </div>

      <div>
        <a
          href="https://wa.me/966549660007"
          target="_blank"
          className={css.link}
        >
          <FaWhatsapp />
          <span>للشكاوي والمقترحات</span>
        </a>
      </div>
    </form>
  );
}

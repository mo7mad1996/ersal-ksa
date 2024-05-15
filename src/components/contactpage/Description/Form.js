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
        q;
        toast.error(err.response.data.message);
      })
      .finally(() => setLoading(false));
  };

  // JSX
  return (
    <>
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

        <div className="my-4">
          <a
            href="https://wa.me/966549660007"
            target="_blank"
            className={css.link}
          >
            <FaWhatsapp />
            <span>للشكاوي والمقترحات</span>
          </a>
        </div>
        <Map />
      </form>
    </>
  );
}

function Map() {
  return (
    <iframe
      className="col-12"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3566.4141850686246!2d49.9697862238848!3d26.635218071959585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e35f9ba970be491%3A0x14d1a1f1a84252b0!2zNzc1NSDYt9ix2YrZgiDYp9mE2KXZhdin2YUg2LnZhNmKINio2YYg2KPYqNmKINi32KfZhNio2IwgMjM1N9iMINi12YHZiNmJIDMyODMy2Iwg2KfZhNiz2LnZiNiv2YrYqQ!5e0!3m2!1sar!2seg!4v1715758878545!5m2!1sar!2seg"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

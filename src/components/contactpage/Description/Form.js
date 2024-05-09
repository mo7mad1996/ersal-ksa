"use client";
// css
import css from "./style.module.scss";

import { useState } from "react";
import axios from "axios";

export default function Form() {
  // data
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

    // axios.post("...", form);
  };

  return (
    <form className={`${css.form} row p-5 mt-4 mb-4`} onSubmit={submit}>
      <div className={` col-6`}>
        <input name="client_name" onChange={update} placeholder="الاسم..." />
      </div>
      <div className={` col-6`}>
        <input
          name="client_number"
          onChange={update}
          placeholder="رقم للتواصل..."
        />
      </div>
      <div className={` col-12`}>
        <textarea
          autoFocus
          name="client_message"
          onChange={update}
          placeholder="رسالتك تهمنا"
        ></textarea>
      </div>

      <button type="submit">
        <span>إرسال</span>
      </button>
    </form>
  );
}

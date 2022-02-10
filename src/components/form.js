import React from "react";
import { formInput, contactForm, submitBtn } from "./form.module.css";

const Form = () => (
  <form
    id="myForm"
    className={contactForm}
    name="contact"
    method="POST"
    netlify-honeypot="bot-field"
    data-netlify="true"
  >
    <input type="hidden" name="form-name" value="contact" />
    <input type="hidden" name="bot-field" />
    <input
      id="name"
      className={formInput}
      type="text"
      name="name"
      placeholder="name"
      required
    />
    <input
      id="email"
      className={formInput}
      type="text"
      name="email"
      placeholder="email"
      required
    />
    <input
      id="number"
      className={formInput}
      type="text"
      name="number"
      placeholder="number"
    />
    <input
      id="organization"
      className={formInput}
      type="text"
      name="organization"
      placeholder="organization"
    />
    <input
      id="title"
      className={formInput}
      type="text"
      name="title"
      placeholder="title"
    />
    <textarea
      className={formInput}
      placeholder="message"
      name="message"
      id="message"
    ></textarea>
    <div className={submitBtn}>
      <input type="submit" value="Send" />
    </div>
  </form>
);

export default Form;

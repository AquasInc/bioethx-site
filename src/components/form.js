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
      id="number"
      className={formInput}
      type="text"
      name="number"
      placeholder="number"
      required
    />
    <input
      id="zipcode"
      className={formInput}
      type="text"
      name="zipcode"
      placeholder="zipcode"
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

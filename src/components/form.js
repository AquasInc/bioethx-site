import React from "react";
import { formInput, submitBtn } from "./form.module.css";

const Form = () => (
  <form id="myForm" name="contact" method="POST">
    <input type="hidden" name="form-name" value="contact" />

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
    <input className={submitBtn} type="submit" value="Send" />
  </form>
);

export default Form;

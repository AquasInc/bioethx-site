import { formInput, contactForm, submitBtn } from "../styles/form.module.css";

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
      placeholder="Name"
      required
    />
    <input
      id="email"
      className={formInput}
      type="text"
      name="email"
      placeholder="Email"
      required
    />
    <input
      id="number"
      className={formInput}
      type="text"
      name="number"
      placeholder="Number"
    />
    <input
      id="organization"
      className={formInput}
      type="text"
      name="organization"
      placeholder="Organization"
    />
    <input
      id="title"
      className={formInput}
      type="text"
      name="title"
      placeholder="Title"
    />
    <textarea
      className={formInput}
      placeholder="Message"
      name="message"
      id="message"
    ></textarea>
    <div>
      <input className={submitBtn} type="submit" value="Send" />
    </div>
  </form>
);

export default Form;

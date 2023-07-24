import emailjs from "@emailjs/browser";
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  //   sending an email using Emailjs library
  const sendMail = (e) => {
    e.preventDefault();

    // 1.Service ID
    // 2.Template ID
    // 3.Public ID
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };
  return (
    <section className="section" id="contact">
      <SectionSubtitle subtitle1={"Get In"} subtitle2={"Touch"} />
      <SectionTitle title={"Contact Me"} />

      <div className=" d-container sm:pt-[1rem] d-grid lg:justify-center lg:grid-cols-[680px]   lg:px-[2.5rem_2rem] ">
        <form
          ref={form}
          action=""
          className=" d-grid relative lg:gap-y-[1.5rem]"
          id="contact-form"
          onSubmit={sendMail}
        >
          <div className=" d-grid md:grid-cols-2 lg:gap-x-[1.5rem]">
            <input
              type="text"
              name="from_name"
              required
              placeholder="Enter your name"
              className=" p-[1rem_1.25rem] rounded-[.5rem] bg-[var(--container-color)] text-[var(--title-color)] placeholder:text-[var(--title-color)] lg:p-[1.5rem]"
            />
            <input
              type="email"
              name="from_email"
              required
              placeholder="Enter your email"
              className=" p-[1rem_1.25rem] rounded-[.5rem] bg-[var(--container-color)] text-[var(--title-color)] placeholder:text-[var(--title-color)] lg:p-[1.5rem]"
            />
          </div>

          <textarea
            name="message"
            required
            placeholder="Enter your message"
            className=" p-[1rem_1.25rem] rounded-[.5rem] bg-[var(--container-color)] text-[var(--title-color)] placeholder:text-[var(--title-color)] h-[11rem] resize-none mb-[2rem] lg:p-[1.5rem] lg:h-[20rem]"
          ></textarea>

          <p
            className=" absolute left-0 b-[4.5rem] text-[length:var(--small-font-color)] text-[var(--title-color)]"
            id="contact-message"
          ></p>

          <button
            type="submit"
            className="button  justify-self-center cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

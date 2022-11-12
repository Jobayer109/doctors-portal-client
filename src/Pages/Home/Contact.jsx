import React from "react";
import appointment from "../../assets/images/appointment.png";
import ButtonPrimary from "../../components/ButtonPrimary";

const Contact = () => {
  return (
    <div
      style={{
        background: `url(${appointment})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="mb-20"
    >
      <div className="text-center">
        <h4 className="text-primary pt-10 text-xl font-bold">Contact us</h4>
        <h2 className="text-white text-3xl font-semibold">Stay Connected With Us</h2>
      </div>
      <div className="sm:w-full md:w-[30%] lg:w-[30%] mx-auto mt-10">
        {" "}
        <form>
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="input input-bordered input-sm w-full h-10"
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            className="input input-bordered input-sm w-full h-10 my-4"
          />{" "}
          <br />
          <textarea
            className="textarea textarea-bordered w-full"
            name="message"
            placeholder="Your message"
          ></textarea>
          <div className="text-center mt-8 pb-16">
            <ButtonPrimary>Submit</ButtonPrimary>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

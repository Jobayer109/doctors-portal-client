import React from "react";
import appointment from "../../assets/images/appointment.png";

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;
    console.log(email, subject, message);
  }

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
        <form onSubmit={handleSubmit}>
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
           <input type="submit" value="Submit" className="btn btn-primary bg-gradient-to-r from-primary to-secondary w-44" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

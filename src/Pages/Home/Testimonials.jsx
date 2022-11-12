import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      image: people1,
      name: "Watson",
      country: "USA",
      rating: 4.5,
    },
    {
      id: 2,
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      image: people2,
      name: "Cheri pama",
      country: "Canada",
      rating: 4.9,
    },
    {
      id: 3,
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      image: people3,
      name: "Tunipa Ruhi",
      country: "China",
      rating: 4.3,
    },
  ];

  return (
    <section className="px-16 bg-no-repeat">
      <div>
        <div className="lg:flex items-center justify-between">
          <div>
            <h4 className="font-bold text-primary text-lg mb-3">Testimonial</h4>
            <h2 className="text-3xl font-bold">What Our Patients Says</h2>
          </div>
          <img src={quote} alt="" className="h-36"/>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-28">
          {testimonialData.map((testimonial) => (
            <Testimonial key={testimonial.id} testimonial={testimonial}></Testimonial>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

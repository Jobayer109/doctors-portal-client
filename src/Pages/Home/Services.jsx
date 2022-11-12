import React from "react";
import cavity from "../../assets/images/cavity.png";
import fluoride from "../../assets/images/fluoride.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      id: 1,
      img: fluoride,
      title: "Fluoride Treatment",
      description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 2,
      img: cavity,
      title: "cavity Filling",
      description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 3,
      img: whitening,
      title: "Teeth whitening",
      description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];

    return (
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto mb-36">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    );
};

export default Services;

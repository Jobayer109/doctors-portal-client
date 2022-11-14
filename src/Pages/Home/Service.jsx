import React from "react";

const Service = ({ service }) => {
  const { title, description, img } = service;
  return (
    <div className="card shadow-xl translate duration-500 ease-in hover:bg-gray-200">
      <figure className="px-10 pt-10">
        <img src={img} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;

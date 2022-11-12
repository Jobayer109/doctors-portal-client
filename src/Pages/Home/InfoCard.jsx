import React from "react";

const InfoCard = ({ card }) => {
  const { title, description, icon, bgClass } = card;

  return (
    <div className={`card md:card-side sm:items-center md:center p-6 shadow-xl text-white ${bgClass}`}>
      <figure>
        <img src={icon} alt="" className="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;

import React from "react";

const InfoCard = ({ card }) => {
  const { title, description, icon, bgClass } = card;

  return (
    <div className={` rounded-lg ${bgClass}`}>
      <div className="w-[450px] h-48 flex items-center px-8 ">
        <img src={icon} alt="" className="w-20" />
        <div className="ml-5 text-white">
          <h4 className="font-bold text-lg">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cards = [
    {
      id: 1,
      title: "Opening Hours",
      description: "EveryDay 09:00am to 04:00pm",
      icon: clock,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      id: 2,
      title: "Our Location",
      description: "Rangpur, Dhaka, Bangladesh",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      title: "Contact with us",
      description: "+88 01734053116",
      icon: phone,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto mb-36">
      {cards.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;

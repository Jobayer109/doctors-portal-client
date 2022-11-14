import { format } from "date-fns";
import React from "react";
import { DayPicker } from "react-day-picker";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";

const AppointBanner = ({ selected, setSelected }) => {
  return (
    <header
      style={{ background: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse py-32">
          <img src={chair} alt="" className="max-w-md rounded-lg lg:ml-20" />
          <div>
            <DayPicker mode="single" selected={selected} onSelect={setSelected} />
            <p>
              Selected date: <strong>{format(selected, "PP")}</strong>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointBanner;

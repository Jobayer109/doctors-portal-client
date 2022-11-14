import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BiookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";

const AppointmentOptions = ({ selected }) => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    fetch(`appointmentOptions.json`)
      .then((res) => res.json())
      .then((data) => setOptions(data));
  }, []);
  return (
    <div className="mt-10">
      <h2 className="text-secondary text-center font-semibold">
        Available Appointments on {format(selected, "PP")}
      </h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[75%] mx-auto mt-6">
        {options.map((option) => (
          <AppointmentOption key={option._id} option={option}></AppointmentOption>
        ))}
      </div>
    <BookingModal></BookingModal>
    </div>
  );
};

export default AppointmentOptions;

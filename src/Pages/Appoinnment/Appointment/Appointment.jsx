import React, { useState } from "react";
import AppointBanner from "../AppointmentBanner/AppointBanner";
import AppointmentOptions from "../AppointmentOptions/AppointmentOptions";

const Appointment = () => {
  const [selected, setSelected] = useState(new Date());

  return (
    <div>
      <AppointBanner selected={selected} setSelected={setSelected}></AppointBanner>
      <AppointmentOptions selected={selected}></AppointmentOptions>
    </div>
  );
};

export default Appointment;

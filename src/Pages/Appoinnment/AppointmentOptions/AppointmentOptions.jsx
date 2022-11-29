import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";

const AppointmentOptions = ({ selected }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selected, "PP");

  const {
    data: appointments,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["appointments", date],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/appointments?date=${date}`);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="mt-10">
      <h2 className="text-secondary text-center font-semibold">
        Available Appointments on {format(selected, "PP")}
      </h2>
      <div>
        {isLoading ? (
          <progress className="progress w-full"></progress>
        ) : (
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[75%] mx-auto mt-6">
            {appointments?.map((option) => (
              <AppointmentOption
                key={option._id}
                option={option}
                setTreatment={setTreatment}
              ></AppointmentOption>
            ))}
          </div>
        )}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          setTreatment={setTreatment}
          selected={selected}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AppointmentOptions;

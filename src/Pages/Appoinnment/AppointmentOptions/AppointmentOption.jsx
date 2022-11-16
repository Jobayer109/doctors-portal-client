import React from "react";

const AppointmentOption = ({ option, setTreatment }) => {
  const { name, slots } = option;
  return (
    <div className="card shadow-lg">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-secondary font-bold">{name}</h2>
        <p className="font-semibold">
          {slots.length > 0 ? (
            slots[0]
          ) : (
            <span className="text-red-600 font-mono">Try another day</span>
          )}
        </p>
        <p className="font-semibold">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions">
          <label
            disabled={slots.length === 0}
            htmlFor="bookingModal"
            className="btn btn-sm btn-outline w-36 btn-accent"
            onClick={() => setTreatment(option)}
          >
            Book
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;

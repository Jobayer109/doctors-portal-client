import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";

const BookingModal = ({ treatment, setTreatment, selected, refetch }) => {
  const { user } = useContext(AuthContext);
  const { name, slots, _id, price } = treatment; //treatment means appointment options
  const date = format(selected, "PP");

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const patient = form.patient.value;
    const phone = form.phone.value;
    const slot = form.slot.value;
    const email = form.email.value;

    const booking = {
      treatmentId: _id,
      treatment: name,
      patient,
      appointmentDate: date,
      phone,
      slot,
      email,
      price,
    };
    console.log(booking);

    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Booking submitted successfully");
          refetch();
        } else {
          toast.error(data.message);
          setTreatment(null);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative w-[30%]">
          <label
            htmlFor="bookingModal"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-accent text-white hover:bg-red-600 hover:text-white"
          >
            ✕
          </label>
          <h3 className="text-xl font-mono font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-4">
            <input
              type="text"
              value={date}
              name="date"
              disabled
              className="input input-bordered w-full "
            />
            <select className="select select-bordered w-full " name="slot">
              {slots.map((slot) => (
                <option value={slot}> {slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Name"
              name="patient"
              className="input input-bordered w-full "
              defaultValue={user?.displayName}
              readOnly
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input input-bordered w-full "
              defaultValue={user?.email}
              readOnly
            />{" "}
            <input
              type="text"
              placeholder="Phone number"
              name="phone"
              className="input input-bordered w-full "
            />{" "}
            <br />
            <input className="btn btn-accent w-full text-white" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

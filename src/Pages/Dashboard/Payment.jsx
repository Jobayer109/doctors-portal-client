import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useNavigation } from "react-day-picker";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const booking = useLoaderData();
  //   const navigation = useNavigation();
  const { treatment, price, slot, appointmentDate } = booking;
  const stripePromise = loadStripe(process.env.REACT_APP_Stripe_pk);

  //   if (navigation.status === "loading") {
  //     return <progress className="progress w-full"></progress>;
  //   }
  return (
    <div>
      <h3 className="text-3xl font-bold">
        Payment of <span className="text-secondary">{treatment}</span>
      </h3>
      <p className="mt-10 text-xl">
        Please pay
        <strong className="text-secondary">$ {price}</strong> for{" "}
        <strong className="text-secondary">{treatment}</strong> on{" "}
        <strong className="text-secondary">{appointmentDate}</strong> at{" "}
        <strong className="text-secondary">{slot}</strong>
      </p>

      <div>
        <h3 className="mt-6 font-bold text-xl text-secondary"> Please Pay</h3>
        <div className=" border w-96 h-40 p-4 rounded-lg mt-4 bg-blue-100 shadow-lg">
          <Elements stripe={stripePromise}>
            <CheckoutForm booking={booking} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;

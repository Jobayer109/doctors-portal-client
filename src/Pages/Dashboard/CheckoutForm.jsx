import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ booking }) => {
  const { price, patient, email, _id } = booking;
  const [errorCard, setErrorCard] = useState("");
  const [success, setSuccess] = useState("");
  const [transaction, setTransaction] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setErrorCard(error.message);
    } else {
      setErrorCard("");
    }
    setSuccess("");
    setProcessing(true);

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: patient,
          email: email,
        },
      },
    });
    if (confirmError) {
      setErrorCard(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const payment = {
        bookingId: _id,
        email,
        transactionId: paymentIntent.id,
        price,
      };

      fetch(`http://localhost:5000/payments`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      }).then((res) =>
        res.json().then((data) => {
          console.log(data);
          if (data.insertedId) {
            setSuccess("Congrats ! payment successful");
            setTransaction(paymentIntent.id);
          }
        })
      );
    }
    setProcessing(false);
  };

  return (
    <>
      {" "}
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm w-20 mt-3 btn-primary btn-outline"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
        {success && (
          <div>
            <p>
              <small className="text-green-600 font-bold">{success}</small>
            </p>
            <p>
              <small className="text-blue-600 font-bold">Transaction id: {transaction}</small>
            </p>
          </div>
        )}
      </form>
      <p>
        {" "}
        <small className="text-red-600 font-bold">{errorCard}</small>
      </p>{" "}
    </>
  );
};

export default CheckoutForm;

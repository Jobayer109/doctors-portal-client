import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const MyDashboard = () => {
  const { user } = useContext(AuthContext);
  const { data: appoints } = useQuery({
    queryKey: ["myAppointments", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://doctors-portal-server-eosin-beta.vercel.app/myAppointments?email=${user?.email}`,
        {
          headers: {
            authorization: `Bereer ${localStorage.getItem("Token")}`,
          },
        }
      );
      const data = res.json();
      return data;
    },
  });

  return (
    <div className="mt-4">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {appoints?.map((appoint, i) => (
              <tr key={appoint._id}>
                <th>{i + 1}</th>
                <td>{appoint.patient}</td>
                <td>{appoint.treatment}</td>
                <td>{appoint.appointmentDate}</td>
                <td>{appoint.slot}</td>
                <td className="font-bold text-red-500">$ {appoint.price}</td>
                <td>
                  {appoint?.price && !appoint.paid && (
                    <Link to={`/dashboard/payment/${appoint._id}`}>
                      <button className="btn btn-sm btn-secondary">Pay</button>
                    </Link>
                  )}
                  {appoint.price && appoint.paid && (
                    <span className="text-green-600 font-bold text-lg font-mono">paid</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyDashboard;

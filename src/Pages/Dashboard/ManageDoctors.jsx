import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { FaUserAlt } from "react-icons/fa";

const ManageDoctors = () => {
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch(`https://doctors-portal-server-eosin-beta.vercel.app/doctors`, {
        authorization: `Bereer ${localStorage.getItem("Token")}`,
      });
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteDoctor = (id) => {
    fetch(`https://doctors-portal-server-eosin-beta.vercel.app/doctors/${id}`, {
      method: "DELETE",
      authorization: `Bereer ${localStorage.getItem("Token")}`,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Deleted successfully");
          refetch();
        }
        console.log(data);
      });
  };

  if (isLoading) {
    return <progress className="progress w-full"></progress>;
  }

  return (
    <div>
      <h2 className="text-3xl">Manage Doctors</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={doctor?.image ? doctor.image : <FaUserAlt className="w-20" />}
                        alt=""
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <p>{doctor.name}</p>
                </td>
                <td>{doctor.specialty}</td>
                <th>
                  <button
                    onClick={() => handleDeleteDoctor(doctor._id)}
                    className="btn bg-red-600 btn-xs text-white"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;

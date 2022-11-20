import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctors = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imagebb_key;
  const navigate = useNavigate();

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/appointmentSpecialty`);
      const data = res.json();
      return data;
    },
  });

  const handleAddDoctors = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const doctorInfo = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imageData.data.url,
          };

          fetch(`http://localhost:5000/doctors`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bereer ${localStorage.getItem("Token")}`,
            },
            body: JSON.stringify(doctorInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success(`Doctor info has saved successfully`);
                navigate("/dashboard/manageDoctors");
              }
              toast.error(data.message);
              console.log(data);
            });
        }
      });
  };

  if (isLoading) {
    return <progress className="progress w-full"></progress>;
  }

  return (
    <div>
      <h3 className="font-bold text-2xl text-secondary">Add Doctors</h3>
      <div className="w-[45%] mx-auto my-24 shadow-lg p-6 rounded-lg">
        <form onSubmit={handleSubmit(handleAddDoctors)}>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Doctor's name"
            className="w-full border p-2 rounded-lg mt-6 mb-2"
          />
          {errors.name && <span className="text-error text-xs">This field is required</span>}
          <br />
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
            className="w-full border p-2 rounded-lg mt-2 mb-2"
          />
          {errors.email && <span className="text-error text-xs">This field is required</span>}
          <br />
          <div>
            <select
              {...register("specialty", { required: true })}
              className="select select-bordered p-2 w-full"
            >
              <option>Select a specialty</option>
              {specialties?.map((special) => (
                <option key={special._id}>{special.name}</option>
              ))}
            </select>
          </div>
          <input
            type="file"
            {...register("image", { required: true })}
            className="w-full border p-2 rounded-lg mt-2 mb-2"
          />
          {errors.image && <span className="text-error text-xs">This field is required</span>}
          <br />

          <input type="submit" value="Add Doctor" className="btn btn-secondary w-full mt-4" />
        </form>
      </div>
    </div>
  );
};

export default AddDoctors;

import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useToken from "../../Hooks/useToken";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, profile } = useContext(AuthContext);
  const [createdEmail, setCreatedEmail] = useState("");
  const [token] = useToken(createdEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        profile(data.name, data.photoURL);
        saveUser(data.name, data.email);
        // logOut();
        console.log(result.user);
      })
      .catch((error) => console.log(error.message));
  };

  //Save user to server through user registration
  const saveUser = (name, email) => {
    const user = { name, email };
    fetch(`https://doctors-portal-server-eosin-beta.vercel.app/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setCreatedEmail(email);
        }
        console.log(data);
      });
  };

  return (
    <div className="w-[30%] mx-auto my-24 shadow-lg p-10 rounded-lg">
      <h3 className="text-center font-semibold text-2xl">Register</h3>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <input
          type="text"
          placeholder="name"
          {...register("name", { required: true })}
          className="w-full border p-2 rounded-lg mt-6 mb-2"
        />
        {errors.name && <span className="text-error text-xs">This field is required</span>}
        <br />
        <input
          type="text"
          placeholder="photo url"
          {...register("photoURL", { required: true })}
          className="w-full border p-2 rounded-lg mb-2"
        />
        {errors.name && <span className="text-error text-xs">This field is required</span>}
        <br />
        <input
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
          className="w-full border p-2 rounded-lg mb-2"
        />
        {errors.email && <span className="text-error text-xs">This field is required</span>}
        <br />
        <input
          type="password"
          placeholder="password"
          {...register("password", { required: true, pattern: /[^A-Za-z0-9_]/, minLength: 8 })}
          className="w-full border p-2 rounded-lg"
        />
        {errors.password && (
          <span className="text-error text-xs">You should be use (^A-Za-z0-9_)</span>
        )}
        <br />

        <input type="submit" value="Sign in" className="btn btn-accent w-full mt-4" />
        <p>
          <small>
            Already have an account ?{" "}
            <Link to="/login" className="text-secondary font-semibold">
              create new account
            </Link>
          </small>
        </p>
        <p>
          <small className="divider">or</small>
        </p>
        <input type="button" value="Continue with Google" className="btn btn-outline w-full" />
      </form>
    </div>
  );
};

export default Register;

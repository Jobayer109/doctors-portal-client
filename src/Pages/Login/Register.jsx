import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Register = () => {
  const { createUser, profile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        profile(name, photoURL);
        form.reset();
        navigate("/login");
        console.log(result.user);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="w-[30%] mx-auto my-24 shadow-lg p-10 rounded-lg">
      <h3 className="text-center font-semibold text-2xl">Register</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="w-full border rounded-lg p-2 mt-8 "
          placeholder="name"
          required
        />{" "}
        <br />
        <input
          type="text"
          name="photoURL"
          className="w-full border rounded-lg p-2 mt-3 "
          placeholder="photo url"
          required
        />{" "}
        <br />
        <input
          type="email"
          name="email"
          className="w-full border rounded-lg p-2 mt-3 "
          placeholder="email"
          required
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          className="w-full border rounded-lg p-2 mt-3"
          placeholder="password"
          required
        />{" "}
        <br />
        <input type="submit" value="Register" className="btn btn-accent w-full mt-4" />
        <p>
          <small>
            Already have an account?{" "}
            <Link to="/login" className="text-secondary font-semibold">
              Sign in here
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

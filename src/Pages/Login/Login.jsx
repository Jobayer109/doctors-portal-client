import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        form.reset();
        navigate("/");
        console.log(result.user);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="w-[30%] mx-auto my-24 shadow-lg p-10 rounded-lg">
      <h3 className="text-center font-semibold text-2xl">Sign in</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          className="w-full border rounded-lg p-2 mt-8 "
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
        <div>
          <Link to="/">
            <small className="text-secondary font-semibold">Forgot password ?</small>
          </Link>
        </div>
        <input type="submit" value="Sign in" className="btn btn-accent w-full mt-4" />
        <p>
          <small>
            New to Doctors Portal ?{" "}
            <Link to="/register" className="text-secondary font-semibold">
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

export default Login;

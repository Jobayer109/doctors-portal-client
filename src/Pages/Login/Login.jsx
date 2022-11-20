import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const { signInUser, googleSignIn, forget } = useContext(AuthContext);
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [logInUser, setLogInUser] = useState("");
  const [token] = useToken(logInUser);
  if (token) {
    navigate(from, { replace: true });
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const handleSignIn = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        setLogInUser(data.email);
        console.log(result.user);
      })
      .catch((error) => console.log(error.message));
  };

  const handleGoogleSignIn = () => {
    googleSignIn(provider)
      .then(() => {})
      .catch((error) => console.log(error.message));
  };
  const handleForgetPassword = () => {
    const email = getValues("email");
    console.log(email);
    forget(email)
      .then(() => {
        toast.success("Check your email account");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="w-[30%] mx-auto my-24 shadow-lg p-10 rounded-lg">
      <h3 className="text-center font-semibold text-2xl">Sign in</h3>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full border p-2 rounded-lg mt-6 mb-2"
        />
        {errors.email && <span className="text-error text-xs">This field is required</span>}
        <br />
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full border p-2 rounded-lg"
        />
        {errors.password && <span className="text-error text-xs">This field is required</span>}
        <br />
        <div>
          <button onClick={handleForgetPassword} className="text-secondary font-semibold text-xs">
            Forgot password ?
          </button>
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
        <input
          onClick={handleGoogleSignIn}
          type="button"
          value="Continue with Google"
          className="btn btn-outline w-full"
        />
      </form>
    </div>
  );
};

export default Login;

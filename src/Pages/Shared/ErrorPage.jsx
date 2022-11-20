import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="text-center my-52">
      <div>
        {" "}
        <p className="text-3xl">Something went wrong</p>
        <p className="text-red-600">{error.statusText || error.message}</p>
      </div>
    </div>
  );
};

export default ErrorPage;

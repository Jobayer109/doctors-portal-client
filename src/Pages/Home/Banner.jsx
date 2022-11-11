import React from "react";
import bg from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";

const Banner = () => {
  return (
    <div className={`hero w-[1100px] mx-auto lg:py-36 ${bg}`}>
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <img src={chair} className="w-[500] h-80 lg:ml-10 rounded-lg shadow-xl" alt="" />
        <div className="">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import bg from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";
import ButtonPrimary from "../../components/ButtonPrimary";

const Banner = () => {
  return (
    <div className="hero w-[1100px] mx-auto lg:pb-20">
      <div>
        <img className="h-full bg-gradient-to-t from-gray-100 rounded-md" src={bg} alt="" />
      </div>
      <div className="hero-content flex-col-reverse lg:flex-row-reverse lg:text-start text-center">
        <img src={chair} className="w-[500] h-80 lg:ml-10 rounded-lg shadow-xl" alt="" />
        <div className="">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br /> excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <div className="sm:text-center lg:text-start">
            <ButtonPrimary>Get Started</ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

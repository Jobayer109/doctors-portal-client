import React from 'react';
import treatment from "../../assets/images/treatment.png"
import ButtonPrimary from '../../components/ButtonPrimary';

const About = () => {
    return (
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  items-center md:px-52 lg:px-36 mb-40">
        <figure className="sm:mx-auto sm:order-1 md:order-first lg:order-first lg:w-full">
          <img src={treatment} alt="" className=" sm:w-[600px] lg:w-[458px]  h-[570px] rounded-xl" />
        </figure>
        <div className=" sm:text-center md:text-start lg:text-start  lg:w-full ml-24">
          <h2 className="md:card-title lg:card-title text-xl font-bold">
            Exceptional Dental Care, <br /> on Your Terms
          </h2>
          <p className="lg:text-justify text-gray-500 text-sm my-5">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. <br /> The point of using Lorem Ipsumis that it
            has a more-or-less normal distribution of letters, <br /> as opposed to using 'Content
            here, content here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <div className="">
            <ButtonPrimary>Get Started</ButtonPrimary>
          </div>
        </div>
      </div>
    );
};

export default About;
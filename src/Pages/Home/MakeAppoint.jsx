import React from 'react';
import appointBg from '../../assets/images/appointment.png';
import doctor from "../../assets/images/doctor-small.png";
import ButtonPrimary from '../../components/ButtonPrimary';


const MakeAppoint = () => {
    return (
      <section className=" mb-44" style={{ background: `url(${appointBg})` }}>
        <div className="md:flex lg:flex items-center justify-center px-10">
          <figure className="lg:w-1/2 -mt-36">
            <img src={doctor} alt="" className='hidden lg:block'/>
          </figure>
          <div className="w-1/2 p-10">
            <h4 className="font-bold text-primary text-lg mb-3">Appointment</h4>
            <h2 className="text-3xl font-bold text-white">Make an appointment Today</h2>
            <p className="my-4 text-gray-300">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsumis that it has a
              more-or-less normal distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop publishing packages and web
              page
            </p>
            <div className="">
              <ButtonPrimary>Get Started</ButtonPrimary>
            </div>
          </div>
        </div>
      </section>
    );
};

export default MakeAppoint;
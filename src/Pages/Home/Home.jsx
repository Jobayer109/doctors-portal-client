import React from "react";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import InfoCards from "./InfoCards";
import MakeAppoint from "./MakeAppoint";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <div className="w-[1150px] mx-auto">
        <Banner></Banner>
        <InfoCards></InfoCards>
        <Services></Services>
        <About></About>
      </div>
      <div className="w-full">
        <MakeAppoint></MakeAppoint>
        <Testimonials></Testimonials>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;

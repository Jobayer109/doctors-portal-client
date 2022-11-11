import React from "react";
import Banner from "./Banner";
import InfoCards from "./InfoCards";
import Services from "./Services";

const Home = () => {
    return <div className="w-[1150px] mx-auto">
        <Banner></Banner>
        <InfoCards></InfoCards>
        <Services></Services>
  </div>;
};

export default Home;

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

const About = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col mt-24 items-center justify-center ">
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
};

export default About;

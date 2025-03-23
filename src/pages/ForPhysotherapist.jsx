import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"
const ForPhysotherapist = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col mt-12 items-center justify-center">
        <h1 className="text-4xl font-bold text-center mt-20">
          For Physiotherapists
        </h1>
        <p className="text-lg text-center mt-5">
          This is the page for physiotherapists
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default ForPhysotherapist;

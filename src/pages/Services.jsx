import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {servicesData} from "../data/servicesData";

const FAQ = () => {
  return (
    <div>
      <Header />

       <div className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] mt-[56px] sm:mt-[72px] overflow-hidden group w-full">
              {/* Background Image with Parallax Effect */}
              <div className="absolute inset-0 transform group-hover:scale-105 transition-transform duration-700 ease-out">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&auto=format"
                  alt="Physiotherapy Session"
                  className="w-full h-full object-cover object-center"
                />
                {/* Gradient Overlay - Adjusted for better mobile visibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-transparent sm:from-white/90 sm:via-white/80 sm:to-transparent" />
              </div>
            </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 mt-36 mb-3">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border shadow-sm p-5 flex flex-col items-center text-center"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-24 h-24 object-cover rounded-full"></img>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-sm text-gray-700 mb-5">{service.description}</p>
            <button className="bg-[#0f766e] text-white px-5 py-2 rounded-lg hover:bg-[#0d6059]">
              {service.buttonLabel}
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;

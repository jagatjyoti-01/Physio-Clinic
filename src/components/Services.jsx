import React, { useState } from "react";
import { motion } from "framer-motion";
import { services } from "../data/servicesData";



const ServicesComponent = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Choose Our <span className="text-[#0f766e]">Best Services</span>
      </h1>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => setSelectedService(service)}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              selectedService.id === service.id
                ? "bg-[#0f766e] text-white"
                : "bg-gray-200 hover:bg-[#a1a2a2] hover:text-white"
            }`}
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <motion.div
        key={selectedService.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col lg:flex-row items-center bg-white rounded-lg p-6 gap-6 max-w-4xl w-full"
      >
        {/* Image */}
        <div className="flex-shrink-0 w-full lg:w-2/4">
          <img
            src={selectedService.image}
            alt={selectedService.title}
            className="rounded-lg object-cover w-full h-96"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left flex flex-col justify-center">
          {/* Icon and Title */}
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
            <img
              src={selectedService.img}
              alt={selectedService.title}
              className="h-12 w-12 rounded-full object-cover"
            />
            <h2 className="text-2xl font-bold text-[#0f766e]">
              {selectedService.title}
            </h2>
          </div>
          {/* Description */}
          <p className="text-gray-600 mb-4">{selectedService.description}</p>
          {/* Button */}
          <button className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-teal-600 text-white text-sm sm:text-base font-medium hover:bg-teal-700 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-teal-200">
            Contact Now
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesComponent;

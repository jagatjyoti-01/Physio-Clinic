import React, { useState } from "react";
import { motion } from "framer-motion";
import back from "../image/back.webp";
import shoulder from "../image/shoulder.webp";
import neck from "../image/neckpain.webp";
import knee from "../image/knee.webp";
import stroke from "../image/stroke.webp";
import backp from "../image/backp.png";
import shoulderp from "../image/shoulderp.png";
import neckp from "../image/neckp.png";
import kneep from "../image/kneep.png";
import strokep from "../image/Strokp.png";

const services = [
  {
    id: "backPain",
    img: backp,
    title: "Back Pain",
    description:
      "Back pain is a common condition affecting many people, characterized by discomfort or pain in the lower or upper back. It can result from muscle strain, poor posture, or underlying medical conditions requiring professional physiotherapy treatment.",
    image: back,
  },
  {
    id: "neckPain",
    img: neckp,
    title: "Neck Pain",
    description:
      "Physiotherapy for neck pain offers tailored treatments like exercises, manual therapy, and posture correction to relieve discomfort, restore mobility, and prevent future issues, ensuring personalized care for optimal recovery.",
    image: neck,
  },
  {
    id: "shoulderPain",
    img: shoulderp,
    title: "Shoulder Pain",
    description:
      "Shoulder pain can result from various causes, including rotator cuff injuries, frozen shoulder, or tendonitis. Physiotherapy treatments often include exercises, stretches, and manual therapy to alleviate pain and restore shoulder function.",
    image: shoulder,
  },
  {
    id: "kneePain",
    img: kneep,
    title: "Knee Pain",
    description:
      "Effective physiotherapy for knee pain includes targeted exercises, manual therapy, and pain management techniques to enhance mobility and strength, aiming to restore function and alleviate discomfort for improved quality of life.",
    image: knee,
  },
  {
    id: "stroke",
    img: strokep,
    title: "Stroke",
    description:
      "A stroke occurs when blood flow to the brain is interrupted, leading to brain cell damage. Symptoms include sudden numbness, confusion, and difficulty speaking or walking. Immediate medical attention is crucial for treatment and recovery.",
    image: stroke,
  },
];

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

import React from "react";
import { motion } from "framer-motion";
import { Target, Crosshair } from "lucide-react";
import image from "../image/aboutImage.png"; // Update with your local image path
import { FaArrowRight } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <motion.h1
        className="text-center text-5xl font-bold mb-16 font-custom"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </motion.h1>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Image with experience badge */}
        <motion.div
          className="relative"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={image}
            alt="Physiotherapist helping patient with exercise"
            className="rounded-lg w-full"
          />
          <motion.div
            className="absolute bottom-4 left-4 bg-[#0f766e] text-white p-4 rounded-lg shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="text-3xl font-bold">10+</div>
            <div className="text-sm">Years of Experience</div>
          </motion.div>
        </motion.div>

        {/* Right side - Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="space-y-4  md:space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-tight font-custom text-center">
            Empowering Your Health Through Expert Physiotherapy Care
          </h2>

          <p className="text-gray-600 leading-relaxed font-custom1 text-center">
            At Friends Physiotherapy Hospital, we are dedicated to providing
            personalized, expert physiotherapy care to help you achieve optimal
            health and mobility. Our skilled team uses innovative techniques
            and compassionate care to guide you on your path to recovery and
            wellness.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <motion.div
              className="space-y-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="bg-[#0f766e] w-12 h-12 rounded-full flex items-center justify-center text-white">
                <Crosshair size={24} />
              </div>
              <h3 className="text-xl font-semibold font-custom">Our Vision</h3>
              <p className="text-gray-600 font-custom1">
                Leading physiotherapy care, enhancing lives with innovation and
                compassion.
              </p>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="bg-[#0f766e] w-12 h-12 rounded-full flex items-center justify-center text-white">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-semibold font-custom">Our Mission</h3>
              <p className="text-gray-600 font-custom1 ">
                Empowering health through personalized treatments and dedicated
                care.
              </p>
            </motion.div>
          </div>

          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
           className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-teal-600 text-white text-sm sm:text-base font-medium hover:bg-teal-700 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-teal-200"
          >
            Book Appointment
          </motion.button>
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
           className="inline-flex items-center justify-center px-7 sm:px-6 py-2.5 sm:py-3 rounded-full bg-teal-600 text-white text-sm sm:text-base font-medium hover:bg-teal-700 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-teal-200 md:ms-4"
          >
            More details <FaArrowRight  className="ms-2 bg-slate-100 text-primary rounded-lg p-1"/>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;

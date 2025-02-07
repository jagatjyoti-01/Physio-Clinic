'use client'
import { motion } from "framer-motion";

import React from "react";

const Hero = () => {
  const images = [
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&auto=format",
    "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=500&auto=format",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&auto=format",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&auto=format",
    "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=500&auto=format",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&auto=format",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format",
  ];

  return (
    <div className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] mt-[56px] sm:mt-[72px] overflow-hidden group">
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

      {/* Content Container */}
      <div className="relative container mx-auto px-4 h-full flex items-center  gap-8">
        <div className="max-w-4xl space-y-4 sm:space-y-6 py-12 sm:py-16 lg:py-20 ">
          {/* Eyebrow Text */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100">
            <span className="inline-block w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            <motion.span whileInView={{opacity:1,y:0}}
      initial={{opacity: 0,y:-100}}
      transition={{duration:1}} className="text-xs sm:text-sm font-medium text-teal-700">
              Professional Care 
            </motion.span>
          </div>

          {/* Main Heading - Responsive text sizes */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ">
            <motion.span whileInView={{opacity:1,y:0}}
      initial={{opacity: 0,y:-100}}
      transition={{duration:1.3}} className="block text-gray-900 leading-tight">
              Transforming Lives with
            </motion.span>
            <motion.span whileInView={{opacity:1,y:0}}
      initial={{opacity: 0,y:-100}}
      transition={{duration:1.4}} className="block bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Personalized Physiotherapy
            </motion.span>
          </h1>

          {/* Description - Adjusted for readability */}
          <motion.p whileInView={{opacity:1}} initial={{opacity:0}}  className="text-base sm:text-lg text-gray-700 leading-relaxed  mx-auto ">
            We are a team of highly skilled physiotherapists dedicated to
            providing personalized care. Our goal is to help you achieve optimal
            health and mobility through evidence-based treatments.
          </motion.p>

          {/* CTA Buttons - Responsive layout */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 md:items-center md:justify-center">
            <a
              href="/book-appointment"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-teal-600 text-white text-sm sm:text-base font-medium hover:bg-teal-700 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-teal-200"
            >
              Book Appointment
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-teal-600 text-sm sm:text-base font-medium border-2 border-teal-100 hover:border-teal-200 hover:bg-teal-50 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Our Services
            </a>
          </div>

          {/* Image Carousel - Responsive width and hidden on smaller screens */}
          <div className="relative w-screen sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1500px] overflow-hidden mt-8 sm:mt-12 -ml-4 sm:ml-0">
            <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10" />
            <div className="flex gap-3 sm:gap-4 animate-scroll">
              {[...images, ...images].map((image, index) => (
                <div
                  key={index}
                  className="flex-none w-32 sm:w-40 md:w-48 h-24 sm:h-28 md:h-32 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Physiotherapy ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements - Hidden on mobile */}
      <div className="hidden sm:block absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-teal-100/30 to-transparent rounded-tl-full" />
      <div className="hidden sm:block absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-bl from-blue-100/20 to-transparent rounded-bl-full" />
    </div>
  );
};

// Add the scroll animation with improved performance
const style = document.createElement("style");
style.textContent = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  .animate-scroll {
    display: flex;
    animation: scroll 20s linear infinite;
    will-change: transform;
  }

  @media (prefers-reduced-motion: reduce) {
    .animate-scroll {
      animation: none;
    }
  }
`;
document.head.appendChild(style);

export default Hero;

import React from "react";
import { motion } from "framer-motion";
// 1) Make sure to install react-icons: npm install react-icons
import {
  FaUserMd,
  FaStethoscope,
  FaBullseye,
  FaNetworkWired,
  FaClinicMedical,
  FaUserFriends,
  FaHeart,
  FaBrain,
} from "react-icons/fa";

export default function PhysicalTherapySection() {
  // Original Services Data
  const services = [
    {
      title: "Clinic Treatments",
      description:
        "High quality physiotherapy care at our CB Physiotherapy Centre near you. Best Treatment for Ortho / Neuro issues",
      image: "/assets/service-1.jpg",
      alt: "Physical therapy clinic interior with treatment table",
    },
    {
      title: " Physiotherapy at Home",
      description:
        "Home Visits by certified CB Physiotherapists for Patients with mobility issues & for patients looking for convenience",
      image: "/assets/service-2.jpg",
      alt: "Physiotherapist providing home treatment",
    },
    {
      title: "Heat & Cold Therapy",
      description:
        "Digital Physio Assistant FIZO for personalized PT exercises at home. Enables affordable & long-term care Mgmt",
      image: "/assets/service-3.jpg",
      alt: "Patient using digital physiotherapy platform",
    },
    {
      title: "Chiropatic Therapy",
      description:
        "Digital Physio Assistant FIZO for personalized PT exercises at home. Enables affordable & long-term care Mgmt",
      image: "/assets/service-4.jpg",
      alt: "Patient using digital physiotherapy platform",
    },
    {
      title: "Work Injuries",
      description:
        "Digital Physio Assistant FIZO for personalized PT exercises at home. Enables affordable & long-term care Mgmt",
      image: "/assets/service-5.jpg",
      alt: "Patient using digital physiotherapy platform",
    },
    {
      title: "Spot Injuries",
      description:
        "Digital Physio Assistant FIZO for personalized PT exercises at home. Enables affordable & long-term care Mgmt",
      image: "/assets/service-6.jpg",
      alt: "Patient using digital physiotherapy platform",
    },
    {
      title: "Regular Therapy",
      description:
        "Digital Physio Assistant FIZO for personalized PT exercises at home. Enables affordable & long-term care Mgmt",
      image: "/assets/service-7.jpg",
      alt: "Patient using digital physiotherapy platform",
    },
    {
    title: " Back Pain",
      description:
        "Digital Physio Assistant FIZO for personalized PT exercises at home. Enables affordable & long-term care Mgmt",
      image: "/assets/service-8.jpg",
      alt: "Patient using digital physiotherapy platform",
    },
  ];

  // Additional Info Cards Data
  const infoCards = [
    {
      icon: <FaUserMd className="text-4xl text-teal-500" />,
      title: "Licensed Therapist",
      description:
        "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus.",
    },
    {
      icon: <FaStethoscope className="text-4xl text-teal-500" />,
      title: "Personalized Treatment",
      description:
        "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus.",
    },
    {
      icon: <FaBullseye className="text-4xl text-teal-500" />,
      title: "Therapy Goals",
      description:
        "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus.",
    },
    {
      icon: <FaNetworkWired className="text-4xl text-teal-500" />,
      title: "Practitioners Network",
      description:
        "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus.",
    },
    {
      icon: <FaClinicMedical className="text-4xl text-teal-500" />,
      title: "Comfortable Center",
      description:
        "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus.",
    },
    {
      icon: <FaUserFriends className="text-4xl text-teal-500" />,
      title: "Experienced Staff",
      description:
        "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus.",
    },
    {
      icon: <FaHeart className="text-4xl text-teal-500" />,
      title: "Therapy Goals",
      description:
        "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus.",
    },
    {
      icon: <FaBrain className="text-4xl text-teal-500" />,
      title: "Licensed Therapist",
      description:
        "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus.",
    },
  ];

  return (

    <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
      {/* SECTION HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          WHY CHOOSE FRIENDS PHYSICAL THERAPY CENTER IN BHUBANESWAR?
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At Friend Physiotherapy, Bhubaneswar, we take a holistic approach to
          care and ensure the convenience of accessing Physiotherapy Clinic
          services in Bhubaneswar from Consultation to Treatment to
          Post-Treatment care.

    

        </p>
      </motion.div>

      {/* ORIGINAL 3 SERVICES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {services.map((service, index) => (
          <motion.div
            key={index}

            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-500"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 flex flex-col">
              <div className="h-2/3 bg-teal-500 opacity-40 -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="h-1/2 bg-teal-500 opacity-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </div>

            {/* Service Image */}
            <div className="aspect-video relative hover:scale-110 transition-transform duration-300">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.alt}
                className="w-full h-full object-cover mix-blend-multiply"

              />
            </div>


            {/* Service Info */}
            <div className="p-6 text-center relative z-10">
              <h3 className="text-2xl font-semibold text-teal-500 mb-3 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-red-600 transition-colors">

                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* NEW INFO CARDS (8 CARDS) */}
      <div className="mt-16">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl font-bold text-gray-800 mb-8"
        >
          Our Special Highlights
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {infoCards.map((card, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }} // Added hover scale animation for "excellent" feel
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      className="relative bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Bottom-left half circle */}
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-200 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
      
      {/* Top-right half circle */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-200 to-sky-300 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Card content */}
      <div className="relative z-10 mb-4">{card.icon}</div>
      <h4 className="relative z-10 text-xl font-semibold text-gray-800 mb-2">
        {card.title}
      </h4>
      <p className="relative z-10 text-gray-600">{card.description}</p>
    </motion.div>
  ))}
</div>

        {/* More Details Button */}
        <div className="text-center mt-8">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: infoCards.length * 0.1 }}
            className="px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors duration-300 font-semibold"
          >
            More Details
          </motion.button>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import "animate.css";

export default function PhysicalTherapySection() {
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

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-16  ">
      <div className="text-center mb-12 max-w-full flex items-center flex-col gap-2 md:gap-4 ">
        <h2 className="text-3xl sm:text-3xl md:text-6xl lg:text-7xl font-bold mb-4 font-custom capitalize text-secondary max-w-4xl">
        Our Service Given Physio Therapy By Expert.
        </h2>
        <p className=" text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
          At Friend Physiotherapy, Bhubaneswar, We take holistic approach to
          care and ensure convenience of accessing Physiotherapy Clinic service
          in Bhubaneswar from Consultation to Treatment to Post Treatment care
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4
       gap-8  ">
        {services.map((service, index) => (
          <div
            key={index}
            className=" relative bg-white rounded-lg shadow-lg overflow-hidden group  ">
            <div className="absolute inset-0 flex flex-col">
            <div className="h-2/3 bg-teal-500 opacity-40 translate-y-[-100%] group-hover:translate-y-[-1] transition-transform duration-500"></div>
            <div className="h-1/2 bg-teal-500 opacity-20 translate-y-[90%]  group-hover:translate-y-0 transition-transform duration-500"></div>
            </div>

            <div className=" relative hover:scale-105 transition-transform  duration-300 group ">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.alt}
                className="w-full h-full object-contain   mix-blend-multiply overflow-hidden"
              />

              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div> */}
            </div>
            <div className="p-6 ">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors font-custom  "  style={{ textTransform: 'capitalize' }}>
                {service.title}
              </h3>
              <p className="text-gray-600 font-custom1 py-4 line-clamp-4  group-hover:text-red-600 transition-colors ">
                {service.description}
              </p>
            </div>
            {/* Animated top and bottom overlays */}
          </div>
        ))}
      </div>
    </section>
  );
}

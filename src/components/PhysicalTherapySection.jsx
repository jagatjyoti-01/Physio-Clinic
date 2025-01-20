import React from 'react'

export default function PhysicalTherapySection() {
  const services = [
    {
      title: "CLINIC TREATMENTS",
      description: "High quality physiotherapy care at our CB Physiotherapy Centre near you. Best Treatment for Ortho / Neuro issues",
      image: "https://cbphysiotherapy.in/frontend/img/clinic_treatments.webp",
      alt: "Physical therapy clinic interior with treatment table"
    },
    {
      title: "PHYSIO HOME VISITS", 
      description: "Home Visits by certified CB Physiotherapists for Patients with mobility issues & for patients looking for convenience",
      image: "https://cbphysiotherapy.in/frontend/img/physio_home_visits.webp",
      alt: "Physiotherapist providing home treatment"
    },
    {
      title: "DIGITAL CARE (FIZO)",
      description: "Digital Physio Assistant FIZO for personalized PT exercises at home. Enables affordable & long-term care Mgmt",
      image: "https://cbphysiotherapy.in/frontend/img/post_care.webp",
      alt: "Patient using digital physiotherapy platform"
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 ">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          WHY CHOOSE FRIENDS PHYSICAL THERAPY CENTER IN BHUBANESWAR?
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At Friend Physiotherapy, Bhubaneswar, We take holistic approach to care and ensure 
          convenience of accessing Physiotherapy Clinic service in Bhubaneswar from 
          Consultation to Treatment to Post Treatment care
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-lg overflow-hidden p-6 py-8"
          >
            <div className="aspect-video relative">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.alt}
                className="w-full h-full object-cover hover:-translate-y-4  mix-blend-multiply"
                
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


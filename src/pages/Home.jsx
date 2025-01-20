import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'

import PhysicalTherapySection from '../components/PhysicalTherapySection'
import AboutUs from '../components/AboutUs'
import TrustIndicators from '../components/TrustIndicators'
import ServicesComponent from '../components/Services'
import Footer from '../components/Footer'


function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <AboutUs/>
      <PhysicalTherapySection/>
      <TrustIndicators/>
      <ServicesComponent/>
      <Footer/>
    </div>
  )
}

export default Home

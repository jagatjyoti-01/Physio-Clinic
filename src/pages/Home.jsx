import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'

import PhysicalTherapySection from '../components/PhysicalTherapySection'

import TrustIndicators from '../components/TrustIndicators'


function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>

      <PhysicalTherapySection/>

      <TrustIndicators></TrustIndicators>
 
    </div>
  )
}

export default Home

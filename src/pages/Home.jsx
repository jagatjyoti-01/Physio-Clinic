import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'

import PhysicalTherapySection from '../components/PhysicalTherapySection'
import AboutUs from '../components/AboutUs'
import TrustIndicators from '../components/TrustIndicators'
import ServicesComponent from '../components/Services'
import Footer from '../components/Footer'

import Testimonial from '../components/Testimonial'
import BlogSection from '../components/Blog'

import WhyChoseUs from '../components/WhyChoseUs'
import  ContactUs  from '../components/Contact'

//import Contact from './Contact'


function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <AboutUs/>
      <PhysicalTherapySection/>
      <TrustIndicators/>
      <ServicesComponent/>

      <Testimonial/>
      <BlogSection/>

      <WhyChoseUs/>
      <ContactUs/>

      <Footer/>
    </div>
  )
}

export default Home

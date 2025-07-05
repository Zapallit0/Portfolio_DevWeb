import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import Aboutus from './About Us/Aboutus'
import Services from './Services/Services'
import Contact from './Contact/Contact'

function HomePage() {
  return (
    <>
      <HeroSection />
      <Aboutus />
      <Services />
      <Contact />
    </>
  )
}

export default HomePage
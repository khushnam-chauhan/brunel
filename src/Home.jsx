import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import HeroSection from './Component/Hero-section/HeroSection'
import QuestionAccordion from './Component/Question/QuestionAccordion'
import Footer from './Component/Footer/Footer'

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <QuestionAccordion />
      <Footer />
    </div>
  )
}

export default Home

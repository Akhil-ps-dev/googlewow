import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import Navbar from '../components/Navbar'
import Button from '../components/Button'

export default function Home() {
  return (
    <div>
        <Navbar />
        {/* <Button/> */}
        <HeroSection />
        <AboutSection />
    </div>
  )
}

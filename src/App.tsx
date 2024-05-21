// import { useState } from 'react'
import './App.css'
import ContactRC from './section/ContactRC'
import HeaderRC from './section/HeaderRC'
import IntroRC from './section/IntroRC'
import PortfolioRC from './section/PortfolioRC'
import ResumeRC from './section/ResumeRC'
import ServiceRC from './section/ServiceRC'
import SkillsRC from './section/SkillsRC'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gradient-to-tr from-white from-60% to-purple-200 h-full '>
        <div className="mx-auto max-w-screen-xl flex flex-col">
          <HeaderRC /> 
          {/* Intro Segment */}
          <IntroRC /> 
          {/* Service Segment - My Quality Services */}
          <ServiceRC /> 
          {/* Portfolio Segment - My Recent Works */}
          <PortfolioRC /> 
          {/* Resume Segment - My Experience & Education */}
          <ResumeRC /> 
          {/* Skills Segment - My Skills */}
          <SkillsRC /> 
          {/* Contact Segment */}
          <ContactRC /> 
        </div>
      </div>
    </>
  )
}

export default App

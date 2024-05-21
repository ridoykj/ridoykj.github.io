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
          <IntroRC /> 
          {/* Intro Segment */}
          <ServiceRC /> 
          {/* Service Segment - My Quality Services */}
          <PortfolioRC /> 
          {/* Portfolio Segment - My Recent Works */}
          <ResumeRC /> 
          {/* Resume Segment - My Experience & Education */}
          <SkillsRC /> 
          {/* Skills Segment - My Skills */}
          <ContactRC /> 
          {/* Contact Segment */}
        </div>
      </div>
    </>
  )
}

export default App

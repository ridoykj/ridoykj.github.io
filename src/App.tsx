// import { useState } from 'react'
import './App.css'
import ContactRC from './components/ContactRC'
import HeaderRC from './components/HeaderRC'
import IntroRC from './components/IntroRC'
import PortfolioRC from './components/PortfolioRC'
import ResumeRC from './components/ResumeRC'
import ServiceRC from './components/ServiceRC'
import SkillsRC from './components/SkillsRC'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gradient-to-tr from-white from-70% to-purple-200 h-full '>
        <div className="mx-auto max-w-screen-xl">
          <HeaderRC />
          <IntroRC />
          <ServiceRC />
          <PortfolioRC />
          <ResumeRC />
          <SkillsRC/>
          <ContactRC />
        </div>
      </div>
    </>
  )
}

export default App

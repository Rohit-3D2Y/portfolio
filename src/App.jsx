import React from 'react'
import Landing from './components_/Landing'
import SplashCursor from './ui/Animations/SplashCursor/SplashCursor'
import Project from './components_/Project'
import About from './components_/About'
import Navbar from './components_/Navbar'
import Work from './components_/Work'
import Showcase from './components_/Showcase'
import Expertise from './components_/Expertise'
import Contact from './components_/Contact'
import { Analytics } from "@vercel/analytics/react"


const App = () => {
  return (
    <>
    {/* <SplashCursor /> */}
    <Analytics />
    
     <div className='px-0 md:px-[10%] lg:px-[25%]'>
       <div className='border-r-2 border-l-2 border-slate-200 md:px-10'>
       <Navbar />
       <Landing />
          <About />
          <Showcase />
          <Work />
          <Expertise />
          <Contact />
       </div>
    </div>
    </>
    
  )
}

export default App
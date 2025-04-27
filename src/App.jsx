import React from 'react'
import Landing from './components_/Landing'
import SplashCursor from './ui/Animations/SplashCursor/SplashCursor'
import Project from './components_/Project'
import About from './components_/About'
import Navbar from './components_/Navbar'
import Work from './components_/Work'
import Showcase from './components_/Showcase'
import Expertise from './components_/Expertise'
const App = () => {
  return (
    <>
    {/* <SplashCursor /> */}
   
    <div className='px-0 md:px-[10%] lg:px-[25%]'>
       <div className='border-r-2 border-l-2 border-slate-200  md:px-10'>
        <div className='p-2'>
        <Navbar />
        </div>
       
        <Landing />
       </div>
    </div>
     <Project />
     <div className='px-0 md:px-[10%] lg:px-[25%]'>
       <div className='border-r-2 border-l-2 border-slate-200 md:px-10'>
          <About />
          <Showcase />
          <Work />
          <Expertise />
       </div>
    </div>
    </>
    
  )
}

export default App
import React from 'react'
import AnimatedContent from '../ui/Animations/AnimatedContent/AnimatedContent'

const Work = () => {
  return (
    
    <div className='px-10 flex flex-col  gap-10 border-b-2 border-gray-300'>
       <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
      <div className='inria-sans-bold text-4xl tracking-tighter'>
      Work Experience
      </div>
     
      <div className="flex flex-col gap-6 pb-10 px-0 mt-10">
  <div className="flex flex-col lg:flex-row md:items-center gap-2 md:gap-5">
    <h1 className="text-gray-400 min-w-[150px]">Jan 2025 - Present</h1>
    <h1>
      Founder of
      <span className="bg-[#efefef] text-black px-3 py-1 ml-2 rounded-2xl inline-block">
        <i className="fa-solid fa-star mr-1"></i> NexaCrft
      </span>
    </h1>
  </div>

  <div className="flex flex-col lg:flex-row md:items-center gap-2 md:gap-5">
    <h1 className="text-gray-400 min-w-[150px]">May 2024 - Jul 2024</h1>
    <h1>
      SDE-1 Intern at 
      <span className="bg-blue-100 text-blue-800 px-3 py-1 ml-2 rounded-2xl inline-block"><i className="fa-brands fa-web-awesome mr-2"></i>
         Kuhoo
      </span>
    </h1>
  </div>
</div>
</AnimatedContent >

    </div>
  )
}

export default Work
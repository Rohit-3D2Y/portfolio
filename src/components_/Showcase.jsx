import React from 'react'
import InfiniteIconScroller from '../utils/Infinityscroll'

const Showcase = () => {
  return (
    <div className='p-10'>
        <div className='flex flex-col items-center'>
        <InfiniteIconScroller />
        <h1 className='inria-sans-bold text-center text-4xl tracking-tighter'>Here's what I've been upto</h1>
        </div>

        <div className="mt-10 flex flex-col gap-10 md:px-4">
  <div className="border-2 border-gray-300 flex flex-col items-center p-5 rounded-lg">
    <div className="w-full max-w-2xl overflow-hidden rounded-md">
      <img
        src="/assets/nexa.png"
        alt="Nexacrft's Website "
        className="w-full h-auto object-contain"
      />
    </div>
    <div className="flex flex-col items-start gap-3 mt-5 w-full max-w-2xl">
      <h2 className="text-lg md:text-2xl font-semibold inria-sans-bold tracking-tighter">Nexacrft's Website</h2>
      <p className="text-gray-600 inria-sans-regular tracking-tight text-md md:text-base">
        This project focuses on the design and development of a digital services agency excelling in various fields.
      </p>
      <a href='https://nexacrft.com' target='blank' className="mt-2 text-md md:text-base text-black bg-gray-200 p-3 rounded-2xl inria-sans-regular hover:underline font-semibold" >
        View Project &gt;
      </a>
    </div>
  </div>

  <div className="border-2 border-gray-300 flex flex-col items-center p-5 rounded-lg">
    <div className="w-full max-w-2xl overflow-hidden rounded-md">
      <img
        src="/assets/proj1.jpeg"
        alt="Aero Landing Page"
        className="w-full h-auto object-contain"
      />
    </div>
    <div className="flex flex-col items-start gap-3 mt-5 w-full max-w-2xl">
      <h2 className="text-lg md:text-2xl font-semibold inria-sans-bold tracking-tighter">Pluss labs Website</h2>
      <p className="text-gray-600 inria-sans-regular tracking-tight text-md md:text-base">
        This project focuses on the design and development of a pharmaceutical startup excelling in lab tests and data handling.
      </p>
      <a href='https://www.plusslabs.com' target='blank' className="mt-2 text-md md:text-base text-black bg-gray-200 p-3 rounded-2xl inria-sans-regular hover:underline font-semibold" >
        View Project &gt;
      </a>
    </div>
  </div>
</div>

        
    </div>
  )
}

export default Showcase
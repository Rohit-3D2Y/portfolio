import React from 'react'

const Expertise = () => {
  return (
    <div className='px-10 mt-10'>
        <div>
        <h1 className='inria-sans-bold text-center text-4xl tracking-tighter'>How can I help?</h1>
        <p className='text-sm text-gray-500 text-center mt-3'>let's turn your vision into something amazing</p>
        </div>
        <div className='flex flex-wrap gap-5 justify-center mt-10 text-center'>
            <div className='w-[200px] h-[180px] text-lg bg-[#fafafa] border-slate-100 border-2 rounded-2xl p-3 inria-sans-regular tracking-tighter flex flex-col'>
                    <h1>Web Development</h1>
                    <div className='w-full h-full bg-red-500 rounded-xl'>
                        rohit
                    </div>
            </div>
            <div className='w-[200px] h-[180px] text-lg bg-[#fafafa] border-slate-100 border-2  rounded-2xl p-3 inria-sans-regular tracking-tighter flex flex-col'>
                    <h1>App Development</h1>
                    <div className='w-full h-full bg-red-500 rounded-xl'>
                        
                    </div>
            </div>
            <div className='w-[200px] h-[180px] text-lg bg-[#fafafa] border-slate-100 border-2  rounded-2xl p-3 inria-sans-regular tracking-tighter flex flex-col'>
                    <h1>Branding</h1>
                    <div className='w-full h-full bg-red-500 rounded-xl'>
                        
                    </div>
            </div>
            <div className='w-[200px] h-[180px] text-lg bg-[#fafafa] border-slate-100 border-2  rounded-2xl p-3 inria-sans-regular tracking-tighter flex flex-col'>
                    <h1>Creative Design</h1>
                    <div className='w-full h-full bg-red-500 rounded-xl'>
                        
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Expertise
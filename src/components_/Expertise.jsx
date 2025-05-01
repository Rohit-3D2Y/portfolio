import React from 'react'

const Expertise = () => {
  return (
    <div className='px-10 mt-10'>
        <div>
        <h1 className='inria-sans-bold text-center text-4xl tracking-tighter'>How can I help?</h1>
        <p className='text-sm text-gray-500 text-center mt-3'>let's turn your vision into something amazing</p>
        </div>
        <div className='flex flex-wrap gap-5 justify-center mt-10 text-center'>
            <div className='w-[250px] h-[230px] text-xl bg-[#fafafa] border-slate-100 border-2 rounded-2xl p-3 inria-sans-regular tracking-tighter flex flex-col'>
                    <h1>Web Development</h1>
                    <div className='w-full h-full rounded-xl'>
                        <img src="https://i.pinimg.com/736x/e3/e3/2c/e3e32c1f0acddffed031b6bc78ebbb3f.jpg" alt="" />
                    </div>
            </div>
            <div className='w-[250px] h-[230px] text-xl bg-[#fafafa] border-slate-100 border-2  rounded-2xl p-3 inria-sans-regular tracking-tighter flex flex-col'>
                    <h1>App Development</h1>
                    <div className='w-full h-full  rounded-xl'>
                        <img src="https://assets.justinmind.com/wp-content/uploads/2024/10/ios-app-design-self-care.png" alt="" />
                    </div>
            </div>
            <div className='w-[250px] h-[230px] text-xl bg-[#fafafa] border-slate-100 border-2  rounded-2xl p-3 inria-sans-regular tracking-tighter flex flex-col'>
                    <h1>Branding</h1>
                    <div className='w-full h-full  rounded-xl'>
                        <img src="https://mir-s3-cdn-cf.behance.net/projects/404/64317e222383449.Y3JvcCwxNTM0LDEyMDAsMzQsMA.jpg" alt="" />
                    </div>
            </div>
            <div className='w-[250px] h-[230px] text-xl bg-[#fafafa] border-slate-100 border-2  rounded-2xl p-3 inria-sans-regular tracking-tighter flex flex-col'>
                    <h1>Creative Design</h1>
                    <div className='w-full h-full rounded-xl'>
                        <img src="https://newborn.media/wp-content/uploads/2021/12/Creative-design.png" alt="" />
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Expertise
import React from 'react'
import Navbar from './Navbar'

export const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/logo.png)] bg-cover' 
style={{backgroundSize:"60%" , backgroundPosition:"left 100px top 100px"}}
>
  <Navbar/>
  <div className='container grid lg:grid-cols-2 h-[calc(100vh-60ox)'></div>
  <div className='hidden lg:block'></div>
  <div className='text-[50px] sm:text-[80px] font-bold leading-tight flex justify-left items-left'>
  
     </div>
    </div>
  )
}
export default Hero
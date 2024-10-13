import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephonePlus } from "react-icons/bs";

 const Contact = () => {
  return (
    <div id='contact' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-10 items-center'>

 
 <div className='space-y-8'>
 <h2 className='text-5xl' data-aos="zoom-in-down">Get in touch</h2>
 <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-in-down"> If you have any query , you can ask freely.I will solve your query.

 </p>
 <div className='flex gap-3 items-center' data-aos="zoom-in-down">
 <MdOutlineMailOutline size={30} /> manalsacademy32@gmail.com  </div>
 <div className='flex gap-3 items-center' data-aos="zoom-in-down">
 <BsTelephonePlus size={30}/>(021)345-678-989  </div>
<div className='space-y-8'>
    <div className='flex flex-col gap-1' data-aos="zoom-in-down">
        <label htmlFor='name'> Name</label>
        <input type='text'
        className='h-[40px] bg-transparent border border-accent'
         id='name'/>
    </div>

    <div className='flex flex-col gap-1' data-aos="zoom-in-down">
        <label htmlFor='email'> Email</label>
        <input type='text'
        className='h-[40px] bg-transparent border border-accent'
         id='email'/>

<div className='flex flex-col gap-1' data-aos="zoom-in-down">
        <label htmlFor='queries'> Queries</label>
        <textarea 
        className=' bg-transparent border border-accent'
         id='queries' rows={8}/>
         <textarea/>
    </div>
    <button className='bg-accent p-2 px-6'>Send</button>
    </div>
</div>
 </div>
 </div>
    </div>
   
  )
}
export default Contact
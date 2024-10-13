import React from 'react'
import Image from 'next/image';

interface propsType{
    title: string;
    desc: string;
   img : string;
}

 const Card:React.FC<propsType> = ({title,desc,img}) => {
  return (
    <div className='border border-accent w-[200px] sm:w-[250px]' data-aos="zoom-in-down">
        <div>
            <Image className='w-[300px] sm:w-[350px] h-auto'
            src={img}
            width={350}
            height={350}

alt={title}/>           
 </div>

 <div className='p-4 space-y-4'>
    <div className='text-4xl font-extralight'>{title}</div>
<div>{desc}</div>
 </div>
 
    </div>
  )
}
export default  Card
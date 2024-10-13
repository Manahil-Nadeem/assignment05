
import React from 'react'
import Heading from './Heading';
import Card from './Card';
const data = [
    {
        id:0,
        title: "Physics",
       desc:"There is no science in this world like physics. Nothing comes close to the precision with which physics enables you to understand the world around you. It's the laws of physics that allow us to say exactly what time the sun is going to rise. What time the eclipse is going to begin.",
       img:"/phy.png",
      
    },

    {
        id:1,
        title: "Chemistry",
       desc:"Chemistry is essential knowledge By becoming familiar with the chemical reactions that occur in nature, you gain a greater understanding of your environment and how the world works",
       img:"/chem.png",
       
    },

    {
        id:2,
        title: "Mathematics",
       desc:"Mathematics is the most beautiful and most powerful creation of the human spirit. We will always have STEM with us. Some things will drop out of the public eye and go away",
       img:"/maths.png",
      
    },

    {
        id:3,
        title: "History",
       desc:"History is not the past but a map of the past, drawn from a particular point of view, to be useful to the modern traveller",
       img:"/history.png",
       
    },
    {
        id:4,
        title: "Urdu",
       desc:"Urdu's poetic have made it a favorite medium for literature and art, further increasing its global appeal.",
       img:"/urdu.png",
       
    },
    
    {
        id:5,
        title: "English",
       desc:"English studies (or simply, English) is an academic discipline taught in primary, secondary, and post-secondary education in English-speaking countries",
       img:"/eng.png",
    }
];
const Home =() =>{
    return(
        <div id='projects' className='container pt-30'>
<Heading title='My Profession is Teaching'/>
<div className='grid gap-8 l:gap-0 l:gap-y-8 md:grid-cols-3 lg:grid-cols-3 place-items-center'>
{data.map((el) => (<Card
key={el.id}
title={el.title}
desc={el.desc}
img={el.img}
/>))}
</div>
        </div>
    )
}

export default Home
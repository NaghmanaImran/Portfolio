import React from 'react'

import Heading from './Heading';
import Card from './card';
const data = [
  {
    id: 0,
    tittle:"Todo List",
    desc: "A React & Typescript based app for managing and organized your tasks efficiently",
    img : "/project_0.PNG",
    tags:["React","Node","css","Typescript"],
  },
  {
    id: 1,
    tittle:"Weather Widget",
    desc: "A Next.js and Typescript based tool for fetching and display real-time weather data.",
    img : "/project_1.PNG",
    tags:["React","Node","css","Typescript"],
  },
  {
    id: 2,
    tittle:" shareable Resume",
    desc: "A resume that dynamically changes and can be shared in a shareable format (like a PDF or link)",
    img : "/project _2.PNG",
    tags:["Html","Node","css","Typescript"],
  },
  {
    id: 3,
    tittle:"Static Interactive Resume",
    desc: "A Typescript-based interactive resume built with HTML and CSS,allowing users to showcase the their skills dynamiclly.",
    img : "/project_3.PNG",
    tags:["Html","Node","css","Typescript"],
  },
  {
    id: 4,
    tittle:"Amazon website",
    desc: " A HTML and CSS designed for an Amazon-style website.",
    img : "/project_4.PNG",
    tags:["Html","Node","css","Typescript"],
  },
  {
    id: 5,
    tittle:"Resturant Style website",
    desc: "Here is a sample HTML and CSS disclaimer specifically designed for a restaurant-style website. This disclaimer includes important sections regarding allergens, dietary preferences, liability, and external links, which are common for restaurant websites.",
    img : "/project_5.PNG",
    tags:["React","Node","css","Typescript"],
  },
]




const Projects = () => {
  return (
    <div id='projects'className='container pt-42'>
      <Heading tittle='My projects'/>
      <div className ='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el)=>(<Card
        key={el.id}
        title={el.tittle}
        desc={el.desc}
        img={el.img}
        tags={el.tags}

        />))}
      </div>
    </div>
  )
}

export default Projects

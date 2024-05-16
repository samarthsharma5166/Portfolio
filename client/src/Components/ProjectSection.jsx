import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import {HiArrowLeft,HiArrowRight} from 'react-icons/hi'
import { useRef } from 'react'
import axios from 'axios'
const ProjectSection = () => {
  const[projects,setProjects] = useState([]);
  const scrollRef =  useRef(null);
  const  hScrollRight=()=>{
    scrollRef.current.scrollLeft += 500;
  }
  const  hScrollLeft=()=>{
    scrollRef.current.scrollLeft -= 500;
  }
  const getproject = async()=>{
    const res = await axios.get('https://protfolio-api-czji.onrender.com/api/v1/user/project');
    setProjects(res.data.projects);
  }
  useEffect(()=>{
    getproject();
  },[])
  return (
    <div data-aos="fade-down" className='mb-20 lg:mb-36'>
      <h1 className='text-5xl lg:text-7xl gradient-text mb-10'>My Projects</h1>
      <div ref={scrollRef} className='flex overflow-x-scroll gap-8 lg:p-3 scroll-hide'>
      {
        projects.map((project)=><ProjectCard name={project.name} image={project.image.secure_url} key={project._id}  desc={project.desc} gitHubUrl={project.gitHubUrl} 
        hostedUrl={project.
          hostedUrl}/>)
      }
  
      </div>
      <div className='flex justify-center items-center gap-3 mt-2 select-none'>
        <HiArrowLeft onClick={hScrollLeft} className='text-xl lg:text-2xl cursor-pointer text-yellow-500 hidden lg:block'/>
        <h2 className='gradient-text font-mono text-lg up percase '>Slide for more</h2>
        <HiArrowRight onClick={hScrollRight} className='text-xl lg:text-2xl cursor-pointer text-yellow-500 hidden lg:block'/>
      </div>
    </div>
  )
}

export default ProjectSection
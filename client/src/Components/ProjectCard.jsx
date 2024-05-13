import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { RiSignalTowerFill } from "react-icons/ri";
const ProjectCard = ({name,image,key,desc,gitHubUrl,hostedUrl}) => {
  return (
    <div className='p-4 -m-4' key={key}>
      <div className='h-fit w-[300px] md:w-[320px] border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-clip lg:overflow-hidden hover:shadow-md lg:hover:scale-105 transition-all backdrop-blur-3xl shadow-xl'>
        
      <a href="">
        <img src={image} alt="project-image" className='h-[200px] lg:h-48 object-cover object-center'/>
      </a>
        <div className='p-4 flex flex-col lg:gap-3'>
          <div>
            <h2 className='tracking-widest text-2xl text-white'>{name}</h2>
          </div>
          <h1 className='text-lg lg:text-xl font-bold text-gray-400'>{desc}</h1>
          <div className='flex items-center justify-between'>
            <a href={gitHubUrl}>
              <AiFillGithub className='text-pink-500 font-bold inline-flex items-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-purple-600 cursor-pointer'/>
            </a>
            <a href={hostedUrl}>
              <RiSignalTowerFill className='text-pink-500 font-bold inline-flex items-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-purple-600 cursor-pointer'/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
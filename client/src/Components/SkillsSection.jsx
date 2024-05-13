import React, { useEffect, useState } from 'react'
import SkillsCard from './SkillsCard'
import axios from 'axios'
const SkillsSection = () => {
  const skillObj = [
    {
      skill:"HTML",
      value:70
    },
    {
      skill:"CSS",
      value:65
    },
    {
      skill:"JavaScript",
      value:65
    },
    {
      skill:"ReactJs",
      value:60
    },
    {
      skill:"NodeJs",
      value:60
    },
    {
      skill:"ExpressJs",
      value:55
    },
    {
      skill:"MongoDB",
      value:55
    },
    {
      skill:"Tailwind CSS",
      value:70
    },
  ]
  const[data,setData] = useState([]);
  const getSkills=async()=>{
    const res = await axios.get('http://localhost:4000/api/v1/user/getSkills');
    setData(res.data.skill);         
  }
  useEffect(()=>{
    getSkills()   
  },[])
  return (
    <div data-aos="fade-right" className='mb-20 lg:mb-36'>
      <h1 className='text-5xl lg:text-7xl gradient-text mb-10'>MY Skills</h1>
      <div className='h-[300px] overflow-y-scroll select-none scroll-bar'>
        {data.map((data)=><SkillsCard key={data._id} skill={data.skill} value={data.level *20}/>)}
      </div>
    </div>
  )
}

export default SkillsSection
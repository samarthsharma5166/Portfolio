import React from 'react'

const SkillsCard = ({skill,value,key}) => {
  return (
    <div className='flex justify-between items-center mt-5 backdrop-blur-2xl shadow-xl p-3 border-2 rounded-lg border-gray-400 mr-2' key={key}>
      <h3 className='font-bold text-xl text-white'>{skill}</h3>
      <progress max="100" value={value} className='progress-bar'/>
    </div>
  )
}

export default SkillsCard
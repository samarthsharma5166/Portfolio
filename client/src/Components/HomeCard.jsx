import React from 'react'
import sam from '../assets/sam1.png'
const HomeCard = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-5 justify-between items-center mb-20 lg:mb-36'>
      <div data-aos="fade-up-right" className='flex flex-col gap-5 lg:w-[50%]'>
        <h1 className='text-5xl lg:text-7xl mb-10 gradient-text'>Hey!</h1>
        <p className='text-gray-300 text-xl lg:text-2xl '>
          My name is Samarth Sharma, and I am a Certified MERN Stack Developer. I am 20 year old from india.I am focusing and creating web applications, design systems that add growth to your businesses and more.
        </p>
        <p className='text-gray-300 text-xl lg:text-2xl '>
          I'm committed to furthering my skills an achieving new milestones in
          my career. Let's connect and create something amazing together!
        </p>
      </div>
      <div data-aos="fade-up-left">
        <img src={sam} alt="Pofile" className='rounded-full w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] mx-auto img drop-shadow-2xl' />
      </div>
    </div>
  )
}

export default HomeCard 
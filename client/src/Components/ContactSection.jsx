import axios from 'axios';
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
const ContactSection = () => {
  const[fromdata,setFormData] =  useState({
    
    name:"",
    email:"",
    message:""
  });
  const submitMessage=async(e)=>{
    e.preventDefault();
    const res = await axios.post('https://protfolio-api-czji.onrender.com/api/v1/user/contact',fromdata);
    setFormData({
      name:"",
      email:"",
      message:""
    });
  }
  return (
    <div data-aos="fade-left" className='flex flex-col lg:flex-row lg:items-center mb-20 lg:mb:36 '>
      <span className='uppercase text-3xl lg:text-2xl font-bold gradient-text mb-8 rotate-0 lg:-rotate-90'>Get Started!</span>
      <div>
        <div className='flex flex-col lg:flex-row lg:ml-20 lg:gap-36'>
          <div className='mb-5 lg:mb-0'>
            <h1 className='text-5xl lg:text-7xl gradient-text mb-5 lg:mb-10'>Contact me</h1>
            <div className='flex flex-col gap-2'>
              <a href="mailto:samrths716@gmail.com" className='text-white font-mono underline text-lg lg:text-2xl'>samarths716@gmail</a>
              <a href="tel:+918077989856" className='text-white font-mono underline text-lg lg:text-2xl'>+918077989856</a>
            </div>
            <div className='flex gap-2 mt-2'>
              <Link to="https://github.com/samarthsharma5166"><AiFillGithub className='text-white text-2xl'/></Link> 
              <Link to="https://www.linkedin.com/in/samarth-sharma-bbbb0221b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><AiFillLinkedin className='text-white text-2xl' /></Link>
              <Link to="https://www.instagram.com/samarth_sharma__5166?igsh=aHBzbmpnZGlndngz"><AiFillInstagram className='text-white text-2xl' /></Link>
            </div>
            <h2 className='text-2xl font-bold font-mono text-white text-center'>OR</h2>
          </div>
          <div>
              <form className='flex flex-col p-3' onSubmit={submitMessage}>
              <input type="text" name='name' id='name' placeholder='Enter your name' className='bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-white gradient-text text-lg lg:text-2xl mb-5 lg:mb-10 w-full lg:w-[30vw]' onChange={(e)=>setFormData({...fromdata,name:e.target.value})}/>
              <input type="email" name='email' id='email' placeholder='Enter your email' className='bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-white gradient-text text-lg lg:text-2xl mb-5 lg:mb-10 w-full lg:w-[30vw]' onChange={(e)=>setFormData({...fromdata,email:e.target.value})}/>
              <textarea name="message" id="message"  rows="3" className='bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-white gradient-text text-lg lg:text-2xl mb-5 lg:mb-10 w-full lg:w-[30vw]' placeholder='Enter your message' onChange={(e)=>setFormData({...fromdata,message:e.target.value})}></textarea>
              <button type='submit' className='px-3 py-2 text-lg lg:text-xl bg-purple-500 hover:bg-purple-600 border font-bold text-white rounded-lg '>Send Message</button>
              </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
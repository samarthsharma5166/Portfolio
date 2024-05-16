import React from 'react'
import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch,useSelector } from 'react-redux'
import { toggle } from '../../../redux/slices/navSlice';
import { setPage } from '../../../redux/slices/pageSlice';
import { logout } from '../../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
const AdminNavbar = () => {
  const toggleNav = useSelector((state)=>state.nav.toggleNav);
  const page = useSelector((state)=>state.page.page);
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  const handelLogout=async()=>{
    const res = await axios.get("https://protfolio-api-czji.onrender.com/api/v1/user/logout",{
      withCredentials:true
    });
    dispatch(logout());
    navigate('/login')
  }
  return (
    <nav className={`bg-white bg-opacity-5 backdrop-blur-xl text-white w-full z-10 rounded-xl lg:rounded-none fixed lg:static h-screen lg:h-fit flex flex-col lg:flex-row justify-evenly items-center lg:justify-between border border-none lg:border-gray-500 py-10 lg:py-3 lg:px-2 lg:translate-x-0 transition-all delay-100 ease-in-out ${toggleNav?"translate-x-0":"-translate-x-full"}`}>
      <AiOutlineClose className='absolute top-5 right-5 lg:hidden text-lg hover:scale-125 cursor-pointer hover:text-red-400 transition-all' onClick={()=>dispatch(toggle())}/>
      <ul className='text-2xl flex justify-center flex-col lg:flex-row gap-3 lg:gap-2'>
        <li className='text-start cursor-pointer hover:bg-purple-500 hover:bg-opacity-60 hover:shadow-lg px-2 py-1 transition-all outline-none rounded-md' onClick={()=>{
          dispatch(setPage("CreateProjects"))
          dispatch(toggle())
        }}>Create Project</li>
        <li className='text-start cursor-pointer hover:bg-purple-500 hover:bg-opacity-60 hover:shadow-lg px-2 py-1 transition-all outline-none rounded-md'
        onClick={()=>{
          dispatch(setPage("CreateSkills"))
          dispatch(toggle())
        }}
        >Create Skill</li>
        <li className='text-start cursor-pointer hover:bg-purple-500 hover:bg-opacity-60 hover:shadow-lg px-2 py-1 transition-all outline-none rounded-md'
        onClick={()=>{
          dispatch(setPage("AllProjects"))
          dispatch(toggle())
        }}
        >All Porjects</li>
        <li className='text-start cursor-pointer hover:bg-purple-500 hover:bg-opacity-60 hover:shadow-lg px-2 py-1 transition-all outline-none rounded-md'
        onClick={()=>{
          dispatch(setPage("AllSkills"))
          dispatch(toggle())
        }}
        >All Skills</li>
      </ul>
        <button className='text-2xl px-2 py-1 text-center hover:bg-red-400 hover:bg-opacity-60 hover:shadow-lg rounded-lg outline-none' onClick={()=>handelLogout()}>Logout</button>
    </nav>
  )
}

export default AdminNavbar
import React, { useEffect, useState } from 'react'
import axios from 'axios';
axios.defaults.withCredentials = true;
import {useDispatch} from 'react-redux';
import {login} from '../../redux/slices/authSlice.js'
import {useNavigate} from 'react-router-dom';
const AdminLogin = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginuser=async(e)=>{
    e.preventDefault()
    const res = await axios.post("http://localhost:4000/api/v1/user/login",{email,password});
    console.log(res);
    if(res.data.success===true){
      dispatch(login());
      navigate("/admin")
    }
  }
  const chekAuth =async()=>{
    const res = await axios.get("http://localhost:4000/api/v1/user/authuser");
    
    const data = await res.data;
    if(res.data.success===true){
      dispatch(login());
      navigate("/admin")
    }
  }
  useEffect(()=>{
    chekAuth();
  },[])
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <form className='flex flex-col justify-center items-center gap-3 w-[80vw] lg:w-[20vw] mx-auto' onSubmit={loginuser}>
        <input
         type="email"
          name='email'
          placeholder='Enter email'
          className='px-3 py-2 rounded-md bg-transparent border-2 text-white w-full'
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          />
        <input
         type="password"
          name='password'
           id='password' placeholder='Enter password'className='px-3 py-2 rounded-md bg-transparent border-2 text-white w-full' 
           onChange={(e)=>setPassword(e.target.value)}
           value={password}
           />
        <button
         type='submit'
         className='px-3 py-1 rounded-md bg-transparent border-2 text-white w-full'
         >Submit</button>
      </form>
      
    </div>
  )
}

export default AdminLogin
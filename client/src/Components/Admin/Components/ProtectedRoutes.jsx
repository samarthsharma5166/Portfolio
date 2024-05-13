import React from 'react'
import {  useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
const ProtectedRoutes = ({element}) => {
  const auth = useSelector((state)=>state.auth.isLoggedIn);
  return !auth? <Navigate to='/login'/>:element
}

export default ProtectedRoutes;
import React from 'react'
import AdminNavbar from './Components/AdminNavbar'
import { useDispatch,useSelector } from 'react-redux';
import { GiHamburgerMenu } from "react-icons/gi";
import { toggle } from '../../redux/slices/navSlice';
import CreateSkills from './Components/CreateSkills';
import CreateProjects from './Components/CreateProjects';
import AllSkills from './Components/AllSkills';
import AllProjects from './Components/AllProjects';
const AdminDashboard = () => {
  const dispatch = useDispatch();
  const toggleNav = useSelector((state)=>state.nav.toggleNav);
  const page = useSelector((state)=>state.page.page);
  return (
    <div className=''>
      <AdminNavbar />
      <div className='w-full h-screen '>
      <GiHamburgerMenu className={`fixed text-xl text-white top-5 right-5 z-10 cursor-pointer lg:hidden ${toggleNav?"hidden z-0":"block"}`} onClick={()=>dispatch(toggle())}/>
      <div className='w-full h-screen '>
        {
          (()=>{
            switch (page) {
              case "CreateSkills":
                return <CreateSkills/>
            
              case "CreateProjects":
                return <CreateProjects/>
            
              case "AllSkills":
                return <AllSkills/>
            
              case "AllProjects":
                return <AllProjects/>
            
              default:
                break;
            }
          })()
        }
        </div>
      </div>
    </div>
  )
}
export default AdminDashboard
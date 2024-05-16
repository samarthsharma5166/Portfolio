import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { setProjects } from '../../../redux/slices/userSlice';
import {MdEdit,MdDelete} from 'react-icons/md'
import {TiTick} from 'react-icons/ti'
const AllProjects = () => {
  const [edit,setEdit] = useState(false);
  const [selectedProject,setSelectedProject] = useState('');
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    image: null,
    gitHubUrl: "",
    hostedUrl: ""
  });
  const dispatch = useDispatch();
  const projects = useSelector((state)=>state.user.projects);

  const handleImg=(e)=>{
    const file = e.target.files[0];
    setFormData({...formData,image:file});
  }
  const getproject = async()=>{
    const res = await axios.get('https://protfolio-api-czji.onrender.com/api/v1/user/project');
    dispatch(setProjects(res.data.projects));
    
  }

  const updateProject =async(id)=>{
    setEdit(!edit);
    const res = await axios.put(`https://protfolio-api-czji.onrender.com/api/v1/user/updateProject/${id}`,formData, {
      headers: {
        'Content-Type': 'multipart/form-data' // Set appropriate headers for form data
      }
    });
    dispatch(setProjects(res.data.projects));
  
    getproject();
    alert('project updated');
  }
  const deleteProject = async(id) => {
    try {
      const res = await axios.delete(`https://protfolio-api-czji.onrender.com/api/v1/user/removeProject/${id}`);
      dispatch(setProjects(res.data.projects))
      getproject();
      alert('Project deleted');
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  
  useEffect(()=>{
   
      getproject();
    
  },[]);
  return (
    <div className='flex flex-col justify-center items-center gap-10 py-10 text-white'>
      { projects && projects.length > 0 ?
        (projects.map((project)=>{
          return(
            <div key={project._id} className='flex flex-col border-2 w-[80vw] lg:w-[50vw] rounded-lg px-2 py-2 gap-3'>
              <div className='flex flex-col lg:flex-row justify-between gap-5 '>
                  {
                    edit? 
                    <input type="file" name='image' id='img' accept='image' onChange={handleImg}/>
                    :
                    <img src={project.image.secure_url} alt={project.name} className={`w-fit h-[180px] lg:w-[200px] lg:h-auto ${edit && `hidden`}`}/>
                  }
                  <div className='flex flex-col gap-1'>
                    <div>
                    <h1 className={`text-xl lg:text-3xl ${edit && selectedProject ? (project._id):(`bg-indigo-30`) }`}>
                      {
                        edit ? 
                        <input type="text" 
                        name='name' 
                        id='name' 
                        value={(edit && selectedProject === project._id) ? formData.name : project.name} 
                        className='w-full bg-transparent'
                        onChange={(e)=>setFormData({...formData,name:e.target.value})}
                        /> :
                        (project.name)
                      }
                    </h1>
                    </div>
                  <div>
                    <label htmlFor="desc">Desc:</label>
                    <h1 className={`text-sm lg:text-base text-gray-300 ${edit && selectedProject === project._id && 'bg-opacity-30 bg-indigo-300'}`}>
                      {
                        edit?(
                          <input
                           type="text"
                            name='desc'
                             id='desc' 
                             value={(edit && selectedProject === project._id) ? formData.desc : project.desc}
                             className='w-full bg-transparent'
                              onChange={(e)=>setFormData({...formData,desc: e.target.value})}
                              />
                        ):(
                          project.desc
                        )
                      }
                    </h1>
                  </div>
                  <div>
                    <label htmlFor="githubUrl">Github: </label>
                    <h1 className={`text-sm lg:text-base text-gray-300 ${edit && selectedProject === project._id && 'bg-opacity-30 bg-indigo-300'}`}>
                      {
                        edit?(
                          <input 
                          type="text" 
                          name='githubUrl' 
                          id='githubUrl'
                          value={(edit && selectedProject === project._id) ? formData.gitHubUrl : project.gitHubUrl}
                          className='w-full bg-transparent'
                          onChange={(e)=>setFormData({...formData,gitHubUrl: e.target.value})}
                          />
                        ):(
                          project.gitHubUrl
                        )
                      }
                    </h1>
                  </div>
                  <div>
                      <label htmlFor="hostedUrl">Hosted: </label>
                    <h1 className={`text-sm lg:text-base text-gray-300 ${edit && selectedProject === project._id && 'bg-opacity-30 bg-indigo-300'}`}>
                      {
                        edit?
                        (
                          <input 
                          type="text" 
                          name='hostedUrl' 
                          id='hostedUrl'
                          value={(edit && selectedProject === project._id) ? formData.hostedUrl : project.hostedUrl}
                      className='w-full bg-transparent'
                          onChange={(e)=>setFormData({...formData, hostedUrl: e.target.value})}
                          />
                        ):(
                          project.hostedUrl
                        )
                      }
                    </h1>
                  </div>
                  </div>
                  <div className='flex flex-col justify-between items-center rounded-lg  gap-3 px-3 lg:px-1 py-2 bg-indigo-500 bg-opacity-30'>
                  <MdEdit  className={`text-lg hover:scale-125 transition-all ease-in-out delay-100 cursor-pointer hover:text-red-500 ${ edit && selectedProject === project._id ? 'hidden' : 'block'}`}
                  onClick={()=>{
                    setEdit(!edit);
                    setSelectedProject(project._id);
                    setFormData({
                      name: project.name,
                    desc: project.desc,
                    gitHubUrl: project.gitHubUrl,
                    hostedUrl: project.hostedUrl
                    })
                  }}
                  />
                  <TiTick className={`text-lg hover:scale-125 transition-all ease-in-out delay-100 cursor-pointer hover:text-red-500 ${ edit && selectedProject === project._id ? 'block' : 'hidden'}`}
                  onClick={()=>updateProject(project._id)}
                  />
                  <MdDelete
                  className={`text-lg hover:scale-125 transition-all ease-in-out delay-100 cursor-pointer hover:text-red-500`
                 }
                 onClick={()=>deleteProject(project._id,)}
                />
                  </div>
              </div>
            </div>
          )
        })):<p>No projects found</p>
      }
    </div>
  )
}

export default AllProjects
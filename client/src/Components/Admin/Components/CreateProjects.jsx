import React, { useState } from 'react'
import axios from 'axios';
const CreateProjects = () => {
  const [name,setName] = useState("");
  const [isLoading,setIsLoading] = useState(false);
  const [desc,setDesc] = useState("");
  const [image,setImage] = useState("");
  const [githubUrl,setGithubUrl] = useState("");
  const [hostedUrl,sethostedUrl] = useState("");
  const handleImg=(e)=>{
    const file = e.target.files[0];
    setImage(file);
    
  }
  const addProject=async(e)=>{
    e.preventDefault();
    setIsLoading(true);
    if(!name||!desc||!image){
      return console.log('please fill all the required fields');
    }
    const formData = new FormData(); // Create FormData object
    formData.append('name', name);
    formData.append('desc', desc);
    formData.append('image', image); // Append image file
    formData.append('gitHubUrl', githubUrl);
    formData.append('hostedUrl', hostedUrl);
    try {
      const res = await axios.post("https://protfolio-api-czji.onrender.com/api/v1/user/addproject", formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set appropriate headers for form data
        }
      });
      setIsLoading(false);

      alert(res.data.message);
      setName("");
      setDesc("");
      setImage("");
      setGithubUrl("");
      sethostedUrl("");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }
  return (
    <div className='p-3 backdrop-blur-3xl rounded-md w-fit mx-auto'>
      <h1 className='text-3xl lg:text-5xl text-white mb-5 mt-10 '>Create Projects</h1>
      {
        isLoading?
        <div role="status">
    <svg aria-hidden="true" class="w-8 h-8 mx-auto  text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
        </div>
        :
        <form  className='flex flex-col gap-3' onSubmit={addProject}>
        <input type="text" name="name" value={name} id='name' placeholder='Project Name' required className='bg-transparent px-3 py-2 rounded-full w-full lg:w-[40vw] font-bold text-xl gradient-text border' onChange={(e)=>setName(e.target.value)}/>
        <textarea name="desc" value={desc} id="" cols="30" rows="" placeholder='Project Description' className='bg-transparent px-3 py-2 rounded-xl w-full lg:w-[40vw] font-bold text-xl gradient-text border' onChange={(e)=>setDesc(e.target.value)}/>
        <div>
          <label htmlFor="img" className='text-white text-xl gradient-text'>Project Image: </label>
          <input type="file" name='image' id='img' accept='image' className='text-white' onChange={handleImg} />
        </div>
        <input type="url" name="githubUrl"  value={githubUrl} id="githubUrl" placeholder='Github Url' className='bg-transparent px-3 py-2 rounded-full w-full lg:w-[40vw] font-bold text-xl gradient-text resize-none border' onChange={(e)=>setGithubUrl(e.target.value)}/>
        <input type="url" name='hostedUrl' value={hostedUrl} id='hostedUrl' placeholder='Hosted Url' className='bg-transparent px-3 py-2 rounded-full w-full lg:w-[40vw] font-bold text-xl gradient-text resize-none border' onChange={(e)=>sethostedUrl(e.target.value)}/>
        <button type='submit' className='bg-purple-500 text-white border mx-auto w-[40vw lg:w-[10vw]] rounded-full px-3 py-2 text-md font-bold'>Add Project</button>
      </form>
      }
    </div>
  )
}

export default CreateProjects
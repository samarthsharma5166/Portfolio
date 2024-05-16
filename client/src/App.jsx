import Home from './pages/Home'
import AdminDashboard from './Components/Admin/AdminDashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminLogin from './Components/Admin/AdminLogin'
import ProtectedRoutes from './Components/Admin/Components/ProtectedRoutes'
function App() {
  return (
    <>
      <div className=' w-[100%] lg:min-h-screen h-[200vh] m-0 bg1 fixed -z-10 overflow-hidden'></div>
        <BrowserRouter> 
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={<ProtectedRoutes element={<AdminDashboard/>}/>} />
            <Route path='/login' element={<AdminLogin />} />
            <Route path='*' element={<h1 className='text-white text-center text-4xl'>Page Not Found! 😴</h1>} />
          </Routes>
        </BrowserRouter>

    </>
  )
}

export default App

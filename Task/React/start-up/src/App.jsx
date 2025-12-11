
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './website/Pages/Home'
import About from './website/Pages/About'
import Service from './website/Pages/Service'
import Blogs from './website/Pages/Blogs'
import Contact from './website/Pages/Contact'
import Feature from './website/Pages/Feature'
import Team from './website/Pages/Team'
import Teasti from './website/Pages/Teasti'
import Quota from './website/Pages/Quota'
import Price from './website/Pages/Price'
import NotFound from './website/Pages/NotFound'
// import Dashboard from './Admin/Apages/Dashboard'
import CourseMang from './Admin/Apages/CourseMang'
import CourseAdd from './Admin/Apages/CourseAdd'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TeamMange from './Admin/Apages/TeamMange'
import TeamAdd from './Admin/Apages/TeamAdd'
import Createuser from './website/Pages/Createuser'
import Alogin from './Admin/Apages/Alogin'
import Ulogin from './website/Pages/Ulogin'
import EditUser from './website/Pages/EditUser'
import BlogDatil from './Website/Pages/BlogDatil.jsx'


function App() {
  return (
    <BrowserRouter>
     
      <div>
         <ToastContainer position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored" />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/blogd' element={<BlogDatil/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/feact' element={<Feature />} />
          <Route path='/team' element={<Team />} />
          <Route path='/testi' element={<Teasti />} />
          <Route path='/quta' element={<Quota />} />
          <Route path='/price' element={<Price />} />
          <Route path='/new' element={<Createuser />} />
          <Route path='/login' element={<Ulogin />} />
          <Route path='/edit' element={<EditUser />} />

          <Route path='*' element={<NotFound />} />

          {/* admin route */}
          <Route path='/dash' element={<Dashboard />} />
          <Route path='/course' element={<CourseMang />} />
          <Route path='/courseadd' element={<CourseAdd />} />
           <Route path='/teamMange' element={<TeamMange />} />
            <Route path='/Teamadd' element={<TeamAdd />} />
            <Route path='/alogin' element={<Alogin />} />


        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App

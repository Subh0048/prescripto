import React from 'react'
import{Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Doctor from './pages/Doctors'
import Login from './pages/Login'
import Contact from './pages/Contact'
import About from './pages/About'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import AppointMent from './pages/AppointMent'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Doctors' element={<Doctor />}/>
        <Route path='/Doctors/:speciality' element={<Doctor />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/My-profile' element={<MyProfile />}/>
        <Route path='/My-appointment' element={<MyAppointments />}/>
        <Route path='/Appointment/:docId' element={<AppointMent />}/>
        
      </Routes>
    </div>
  )
}

export default App

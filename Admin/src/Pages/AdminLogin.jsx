import React, { useState } from 'react'
import axios from "axios"

const AdminLogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



const submitHandler = async (e) => {
  e.preventDefault()

  try {
    const res = await axios.post(
      "http://localhost:4000/api/admin/login",
      { email, password }
    )

    console.log(1, res.data) 
  } catch (error) {
    console.error(error.response?.data || error.message)
  }
}

  
  return (
    <form className='min-h-[80vh] flex items-center' >
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-xl font-semibold'>Login</p>
        <p>Plesae Login to book appointment</p>
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-900 rounded w-full p-2 mt-1 focus:border-primary focus:outline-none' type="email" placeholder='Email' value={email} onChange={(e) => (setEmail(e.target.value))} />
        </div>
        <div className='w-full'>
          <p >Password</p>
          <input className='border border-zinc-900 rounded w-full p-2 mt-1 focus:border-primary focus:outline-none' type="password" placeholder='password' value={password} onChange={(e) => (setPassword(e.target.value))} />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base' onClick={(e)=>submitHandler(e)}>Login</button>
          
        
      </div>
    </form>
  )
}

export default AdminLogin

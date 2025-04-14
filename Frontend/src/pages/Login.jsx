import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState("signup")
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')


  const submitHandler = async (e) => {
    e.preventDefault()

  }
  return (
    <form className='min-h-[80vh] flex items-center' >
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-xl font-semibold'>{state === "signup" ? "Create Account" : "Login"}</p>
        <p>Plesae {state === "signup" ? "Create Account" : "Login"} to book appointment</p>
        {
          state === "signup" && <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-zinc-900 rounded w-full p-2 mt-1 focus:border-primary focus:outline-none' type="text" placeholder='name' value={name} onChange={(e) => (setName(e.target.value))} />
          </div>
        }
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-900 rounded w-full p-2 mt-1 focus:border-primary focus:outline-none' type="email" placeholder='Email' value={email} onChange={(e) => (setEmail(e.target.value))} />
        </div>
        <div className='w-full'>
          <p >Password</p>
          <input className='border border-zinc-900 rounded w-full p-2 mt-1 focus:border-primary focus:outline-none' type="password" placeholder='password' value={password} onChange={(e) => (setPassword(e.target.value))} />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === "signup" ? "Create Account" : "Login"}</button>
        {
          state === "signup"
            ? (<p>Already have an account? <span className='text-primary underline cursor-pointer ' onClick={() => { setState("Login") }}>Login here</span>  </p>)
            : (<p>Create a new account? <span className='text-primary underline cursor-pointer  ' onClick={() => { setState("signup") }}>click here</span></p>)

        }
      </div>
    </form>
  )
}

export default Login

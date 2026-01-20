import{ useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"


const AdminLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const[error, setError]=useState('')
  const navigate = useNavigate()
 

const submitHandler = async (e) => {
  e.preventDefault()
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_BASE_API}/api/admin/login`,
      { email, password }
    )

    if(res?.data?.message){
      setError(res?.data?.message)
    }
    if(res?.data?.token){
      localStorage.setItem("admintoken",res?.data?.token)
    }
    if(localStorage.getItem("admintoken")){
      navigate ("/dashboard")

    }
  } catch (error) {
    console.error(error)
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
        {<span className='text-red-500'>{error}</span>}
      </div>
    </form>
  )
}

export default AdminLogin

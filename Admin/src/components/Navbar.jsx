import React, { useContext, useEffect, useState } from 'react';
import { AdminContext } from '../contexts/AdminContext';
import { useQuery } from '@tanstack/react-query';
import adminLogin from './api';

function Navbar() {
  const [state, setState] = useState('Admin');

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { setAtoken, backendUrl } = useContext(AdminContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if(state==="Admin"){
        const{data,isLoading,isError,isFetched,isSuccess}=useQuery({
          queryKey:["Login"],
          queryFn:adminLogin

          

        })
        console.log(data)
      }
      
    } catch (error) {
      
    }
        
  };

  return (
    <form onSubmit={handleSubmit} className='min-h-[80vh] flex items-center '>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[320px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-xl'>
        <p className='text-2xl font-semibold m-auto '>
          <span className='text-[#5f6FFF]'>{state}</span> Login
        </p>

        <div className='w-full'>
          <p>Email</p>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className='border border-[#DADADA] rounded w-full p-2 mt-1'
            required
          />
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className='border border-[#DADADA] rounded w-full p-2 mt-1'
            required
          />
        </div>

        <button
          type="submit"
          className='bg-[#5f6FFF] text-white w-full py-2 rounded-md text-base cursor-pointer'
        >
          Login
        </button>

        {
          state === 'Admin' ? (
            <p>
              Doctor Login? <span className='text-[#5f6FFF] underline cursor-pointer' onClick={() => setState("Doctor")}>Click here</span>
            </p>
          ) : (
            <p>
              Admin Login? <span className='text-[#5f6FFF] underline cursor-pointer' onClick={() => setState("Admin")}>Click here</span>
            </p>
          )
        }
      </div>
    </form>
  );
}

export default Navbar;
